// Generated from PrnDbgeh.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrnDbgeh", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "DBGridEh", "PrntsEh", "ImgList", "PrViewEh", "Forms", "DB", "Grids", "StdCtrls", "DBGrids", "ComCtrls", "PrnDGDlg", "RichEdit", "ComStrs", "EhLibConsts"]);
  const C = [U];
  U.const("MM", 0);
  U.const("Inches", 1);
  U.const("pghFitGridToPageWidth", 0);
  U.const("pghColored", 1);
  U.const("pghRowAutoStretch", 2);
  U.const("pghFitingByColWidths", 3);
  U.const("pghOptimalColWidths", 4);
  U.const("pcltNon", 0);
  U.const("pcltSingleLine", 1);
  U.const("pcltDoubleLine", 2);
  $.defRecord("tselection", {"startpos": () => 0, "endpos": () => 0});
  $.defRecord("tpolybookmark", {"bm": () => null, "inds": () => false, "eof": () => false});
  U.defClass("TPageParams", "TPersistent", {"fbottommargin": {"name": "FBottomMargin", "type": "Currency"}, "frightmargin": {"name": "FRightMargin", "type": "Currency"}, "fleftmargin": {"name": "FLeftMargin", "type": "Currency"}, "ftopmargin": {"name": "FTopMargin", "type": "Currency"}}, {"bottommargin": {"name": "BottomMargin", "read": "FBottomMargin", "write": "SetBottomMargin"}, "leftmargin": {"name": "LeftMargin", "read": "FLeftMargin", "write": "SetLeftMargin"}, "rightmargin": {"name": "RightMargin", "read": "FRightMargin", "write": "SetRightMargin"}, "topmargin": {"name": "TopMargin", "read": "FTopMargin", "write": "SetTopMargin"}});
  U.defClass("TPageColontitle", "TPersistent", {"fcentertext": {"name": "FCenterText", "type": "TStrings"}, "ffont": {"name": "FFont", "type": "TFont"}, "flefttext": {"name": "FLeftText", "type": "TStrings"}, "flinetype": {"name": "FLineType", "type": "TPageColontitleLineType"}, "frighttext": {"name": "FRightText", "type": "TStrings"}}, {"centertext": {"name": "CenterText", "read": "FCenterText", "write": "SetCenterText"}, "font": {"name": "Font", "read": "FFont", "write": "SetFont"}, "lefttext": {"name": "LeftText", "read": "FLeftText", "write": "SetLeftText"}, "linetype": {"name": "LineType", "read": "FLineType", "write": "SetLineType"}, "righttext": {"name": "RightText", "read": "FRightText", "write": "SetRightText"}});
  U.defClass("TPrintDBGridEh", "TComponent", {"faftergridtext": {"name": "FAfterGridText", "type": "TStrings"}, "fbeforegridtext": {"name": "FBeforeGridText", "type": "TStrings"}, "fcolcellparamseh": {"name": "FColCellParamsEh", "type": "TColCellParamsEh"}, "fdbgrideh": {"name": "FDBGridEh", "type": "TDBGridEh"}, "fonafterprint": {"name": "FOnAfterPrint", "type": "TNotifyEvent"}, "fonbeforeprint": {"name": "FOnBeforePrint", "type": "TNotifyEvent"}, "fonprintersetupdialog": {"name": "FOnPrinterSetupDialog", "type": "TNotifyEvent"}, "foptions": {"name": "FOptions", "type": "TPrintDBGridEhOptions"}, "fpage": {"name": "FPage", "type": "TPageParams"}, "fpagefooter": {"name": "FPageFooter", "type": "TPageColontitle"}, "fpageheader": {"name": "FPageHeader", "type": "TPageColontitle"}, "fprintfontname": {"name": "FPrintFontName", "type": "String"}, "fsubstitutesnames": {"name": "FSubstitutesNames", "type": "TStrings"}, "fsubstitutesvalues": {"name": "FSubstitutesValues", "type": "TStrings"}, "ftitle": {"name": "FTitle", "type": "TStrings"}, "funits": {"name": "FUnits", "type": "TMeasureUnits"}}, {"aftergridtext": {"name": "AfterGridText", "read": "GetAfterGridText", "write": "SetAfterGridText"}, "beforegridtext": {"name": "BeforeGridText", "read": "GetBeforeGridText", "write": "SetBeforeGridText"}, "dbgrideh": {"name": "DBGridEh", "read": "FDBGridEh", "write": "SetDBGridEh"}, "options": {"name": "Options", "read": "FOptions", "write": "SetOptions"}, "page": {"name": "Page", "read": "FPage", "write": "SetPage"}, "pagefooter": {"name": "PageFooter", "read": "FPageFooter", "write": "SetPageFooter"}, "pageheader": {"name": "PageHeader", "read": "FPageHeader", "write": "SetPageHeader"}, "printfontname": {"name": "PrintFontName", "read": "FPrintFontName", "write": "SetPrintFontName"}, "title": {"name": "Title", "read": "FTitle", "write": "SetTitle"}, "units": {"name": "Units", "read": "FUnits", "write": "SetUnits"}, "onafterprint": {"name": "OnAfterPrint", "read": "FOnAfterPrint", "write": "FOnAfterPrint"}, "onbeforeprint": {"name": "OnBeforePrint", "read": "FOnBeforePrint", "write": "FOnBeforePrint"}, "onprintersetupdialog": {"name": "OnPrinterSetupDialog", "read": "FOnPrinterSetupDialog", "write": "FOnPrinterSetupDialog"}});
  U.fieldInit("TPrintDBGridEh", "foptions", () => []);
  U.defClass("TRichEditStrings", "TStrings", {"richedit": {"name": "RichEdit", "type": "TRichEdit"}, "fplaintext": {"name": "FPlainText", "type": "Boolean"}, "fconverter": {"name": "FConverter", "type": "TConversion"}}, {"plaintext": {"name": "PlainText", "read": "FPlainText", "write": "FPlainText"}});
  U.defClass("TColCellParamsEhCracker", "TColCellParamsEh", {}, {});
  U.init(async () => {
    U.const("ReadError", 1);
    U.const("WriteError", 2);
    U.const("NoError", 0);
    U.var_("FCheckBoxWidth", 0, "Integer");
    U.var_("FCheckBoxHeight", 0, "Integer");
    U.var_("MacroValues", ["", "", "", "", "", ""], "array");
  });
  U.func("GetCheckSize", async function GetCheckSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mv((await $.v(C, "TBitmap")), "Create"));
    try {
      await $.wset([$t1], "Handle", (await $.wcall([$t1], "LoadBitmap", [0, (await $.wcall([$t1], "PChar", [32759], C))], C)), C);
      await $.wset([$t1], "FCheckBoxWidth", $.idiv((await $.wv([$t1], "Width", C, false)), 4), C);
      await $.wset([$t1], "FCheckBoxHeight", $.idiv((await $.wv([$t1], "Height", C, false)), 3), C);
    } finally {
      await $.stmt($.wcall([$t1], "Free", [], C));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("iif", async function iif(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"condition": $.copyArg(p0), "v1": $.copyArg(p1), "v2": $.copyArg(p2), result: 0};
  await $.fixArgs(L0, ["condition", "v1", "v2"]);
  if ($.truthy((L0["condition"]))) {
    L0["result"] = L0["v1"];
  } else {
    L0["result"] = L0["v2"];
  }
  return L0.result;
}, {"params": ["Condition", "V1", "V2"], "kind": "function", "ptypes": ["Boolean", "Integer", "Integer"]});
  U.func("GetTextWidth", async function GetTextWidth(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"canvas": $.copyArg(p0), "text": $.copyArg(p1), result: 0, "arect": null, "uformat": 0};
  await $.fixArgs(L0, ["canvas", "text"]);
  L0["uformat"] = (await $.or_((await $.or_((await $.or_((await $.v(C, "DT_CALCRECT")), async () => (await $.v(C, "DT_LEFT")))), async () => (await $.v(C, "DT_NOPREFIX")))), async () => (await $.v(C, "DT_EXPANDTABS"))));
  L0["arect"] = (await $.call(C, "Rect", [0, 0, 1, 0]));
  await $.stmt((await $.call(C, "DrawText", [(await $.mv(L0["canvas"], "Handle")), (await $.call(C, "PChar", [L0["text"]])), (await $.call(C, "Length", [L0["text"]])), L0["arect"], L0["uformat"]])));
  L0["result"] = $.sub((await $.mv(L0["arect"], "Right")), (await $.mv(L0["arect"], "Left")));
  return L0.result;
}, {"params": ["Canvas", "Text"], "kind": "function", "ptypes": ["TCanvas", "String"]});
  U.func("WriteTextEh", async function WriteTextEh(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14) {
  const C = $.chain(Self, U);
  const L0 = {"acanvas": $.copyArg(p0), "arect": $.copyArg(p1), "fillrect": $.copyArg(p2), "dx": $.copyArg(p3), "dy": $.copyArg(p4), "text": $.copyArg(p5), "alignment": $.copyArg(p6), "layout": $.copyArg(p7), "multyl": $.copyArg(p8), "endellipsis": $.copyArg(p9), "leftmarg": $.copyArg(p10), "rightmarg": $.copyArg(p11), "calcrect": $.copyArg(p12), "arighttoleftalignment": $.copyArg(p13), "arighttoleftreading": $.copyArg(p14), result: 0, "opt": 0, "tm": null, "rect1": null, "txth": 0, "drawflag": 0, "lpdtp": null};
  await $.fixArgs(L0, ["acanvas", "arect", "fillrect", "dx", "dy", "text", "alignment", "layout", "multyl", "endellipsis", "leftmarg", "rightmarg", "calcrect", "arighttoleftalignment", "arighttoleftreading"]);
  L0["alignflags"] = [(await $.or_((await $.or_((await $.v(C, "DT_LEFT")), async () => (await $.v(C, "DT_EXPANDTABS")))), async () => (await $.v(C, "DT_NOPREFIX")))), (await $.or_((await $.or_((await $.v(C, "DT_RIGHT")), async () => (await $.v(C, "DT_EXPANDTABS")))), async () => (await $.v(C, "DT_NOPREFIX")))), (await $.or_((await $.or_((await $.v(C, "DT_CENTER")), async () => (await $.v(C, "DT_EXPANDTABS")))), async () => (await $.v(C, "DT_NOPREFIX"))))];
  L0["rtl"] = [0, (await $.v(C, "DT_RTLREADING"))];
  L0["result"] = 0;
  if ($.truthy(L0["arighttoleftalignment"])) {
    await $.stmt((await $.call(C, "ChangeBiDiModeAlignment", [L0["alignment"]])));
    L0["opt"] = L0["leftmarg"];
    L0["leftmarg"] = L0["rightmarg"];
    L0["rightmarg"] = L0["opt"];
  }
  if ($.truthy($.eq(L0["calcrect"], false))) {
    if ($.truthy(($.eq(L0["fillrect"], true)))) {
      await $.stmt((await $.mcall(L0["acanvas"], "FillRect", [L0["arect"]])));
    }
    L0["drawflag"] = 0;
    if ($.truthy(($.eq(L0["multyl"], true)))) {
      L0["drawflag"] = (await $.or_(L0["drawflag"], async () => (await $.v(C, "DT_WORDBREAK"))));
    }
    if ($.truthy(($.eq(L0["endellipsis"], true)))) {
      L0["drawflag"] = (await $.or_(L0["drawflag"], async () => (await $.v(C, "DT_END_ELLIPSIS"))));
    }
    L0["drawflag"] = (await $.or_((await $.or_(L0["drawflag"], async () => (await $.idx(L0["alignflags"], [L0["alignment"]])))), async () => (await $.idx(L0["rtl"], [L0["arighttoleftreading"]]))));
    await $.mset(L0["rect1"], "Left", 0);
    await $.mset(L0["rect1"], "Top", 0);
    await $.mset(L0["rect1"], "Right", 0);
    await $.mset(L0["rect1"], "Bottom", 0);
    L0["rect1"] = L0["arect"];
    await $.mset(L0["lpdtp"], "cbSize", (await $.call(C, "SizeOf", [L0["lpdtp"]])));
    await $.mset(L0["lpdtp"], "uiLengthDrawn", (await $.call(C, "Length", [L0["text"]])));
    await $.mset(L0["lpdtp"], "iLeftMargin", L0["leftmarg"]);
    await $.mset(L0["lpdtp"], "iRightMargin", L0["rightmarg"]);
    await $.stmt((await $.call(C, "InflateRect", [L0["rect1"], (-(L0["dx"])), (-(L0["dy"]))])));
    if ($.truthy(($.ne(L0["layout"], (await $.v(C, "tlTop")))))) {
      L0["txth"] = (await $.call(C, "DrawTextEx", [(await $.mv(L0["acanvas"], "Handle")), (await $.call(C, "PChar", [L0["text"]])), (await $.call(C, "Length", [L0["text"]])), L0["rect1"], (await $.or_(L0["drawflag"], async () => (await $.v(C, "DT_CALCRECT")))), L0["lpdtp"]]));
    } else {
      L0["txth"] = 0;
    }
    L0["rect1"] = L0["arect"];
    await $.stmt((await $.call(C, "InflateRect", [L0["rect1"], (-(L0["dx"])), (-(L0["dy"]))])));
    { const $t2 = L0["layout"];
      if ($.eq($t2, (await $.v(C, "tlTop")))) {
      }
      else if ($.eq($t2, (await $.v(C, "tlBottom")))) {
        await $.mset(L0["rect1"], "top", $.sub((await $.mv(L0["rect1"], "Bottom")), L0["txth"]));
      }
      else if ($.eq($t2, (await $.v(C, "tlCenter")))) {
        await $.mset(L0["rect1"], "top", $.sub($.add((await $.mv(L0["rect1"], "top")), ($.idiv(($.sub((await $.mv(L0["rect1"], "Bottom")), (await $.mv(L0["rect1"], "top")))), 2))), ($.idiv(L0["txth"], 2))));
      }
    }
    if ($.truthy($.gt(L0["dx"], 0))) {
      await $.mset(L0["rect1"], "Bottom", $.add((await $.mv(L0["rect1"], "Bottom")), 1));
    }
    await $.stmt((await $.call(C, "DrawTextEx", [(await $.mv(L0["acanvas"], "Handle")), (await $.call(C, "PChar", [L0["text"]])), (await $.call(C, "Length", [L0["text"]])), L0["rect1"], L0["drawflag"], L0["lpdtp"]])));
  } else {
    await $.stmt((await $.call(C, "GetTextMetrics", [(await $.mv(L0["acanvas"], "Handle")), L0["tm"]])));
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["arect"], "Left")), async ($t3) => { await $.mset(L0["arect"], "Left", $t3); }), L0["dx"]])));
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["arect"], "Top")), async ($t4) => { await $.mset(L0["arect"], "Top", $t4); }), L0["dy"]])));
    await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.mv(L0["arect"], "Right")), async ($t5) => { await $.mset(L0["arect"], "Right", $t5); }), L0["dx"]])));
    await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.mv(L0["arect"], "Bottom")), async ($t6) => { await $.mset(L0["arect"], "Bottom", $t6); }), L0["dy"]])));
    L0["opt"] = (await $.or_((await $.or_((await $.or_((await $.or_((await $.v(C, "DT_LEFT")), async () => (await $.v(C, "DT_EXPANDTABS")))), async () => (await $.v(C, "DT_NOPREFIX")))), async () => (await $.v(C, "DT_CALCRECT")))), async () => (await $.idx(L0["rtl"], [L0["arighttoleftreading"]]))));
    if ($.truthy(L0["multyl"])) {
      L0["opt"] = (await $.or_(L0["opt"], async () => (await $.v(C, "DT_WORDBREAK"))));
    }
    L0["result"] = (await $.call(C, "DrawTextEx", [(await $.mv(L0["acanvas"], "Handle")), (await $.call(C, "PChar", [L0["text"]])), (await $.call(C, "Length", [L0["text"]])), L0["arect"], L0["opt"], null]));
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["result"], async ($t7) => { L0["result"] = $t7; }), (await $.mv(L0["tm"], "tmExternalLeading"))])));
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["result"], async ($t8) => { L0["result"] = $t8; }), $.mul(L0["dy"], 2)])));
  }
  return L0.result;
}, {"params": ["ACanvas", "ARect", "FillRect", "DX", "DY", "Text", "Alignment", "Layout", "MultyL", "EndEllipsis", "LeftMarg", "RightMarg", "CalcRect", "ARightToLeftAlignment", "ARightToLeftReading"], "kind": "function", "ptypes": ["TCanvas", "TRect", "Boolean", "Integer", "Integer", "String", "TAlignment", "TTextLayout", "Boolean", "Boolean", "Integer", "Integer", "Boolean", "Boolean", "Boolean"]});
  U.func("StringReplaceMacros", async function StringReplaceMacros(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "oldpattern": $.copyArg(p1), "newpattern": $.copyArg(p2), "flags": $.copyArg(p3), "macrochar": $.copyArg(p4), result: '', "searchstr": '', "patt": '', "newstr": '', "offset": 0};
  await $.fixArgs(L0, ["s", "oldpattern", "newpattern", "flags", "macrochar"]);
  if ($.truthy($.in_((await $.v(C, "rfIgnoreCase")), L0["flags"]))) {
    L0["searchstr"] = (await $.call(C, "AnsiUpperCase", [L0["s"]]));
    L0["patt"] = (await $.call(C, "AnsiUpperCase", [L0["oldpattern"]]));
  } else {
    L0["searchstr"] = L0["s"];
    L0["patt"] = L0["oldpattern"];
  }
  L0["newstr"] = L0["s"];
  L0["result"] = "";
  while ($.truthy($.ne(L0["searchstr"], ""))) {
    L0["offset"] = (await $.call(C, "AnsiPos", [L0["patt"], L0["searchstr"]]));
    if ($.truthy($.eq(L0["offset"], 0))) {
      L0["result"] = $.add(L0["result"], L0["newstr"]);
      break;
    }
    if ($.truthy((await $.or_(($.eq(L0["offset"], 1)), async () => ($.ne((await $.idx(L0["searchstr"], [$.sub(L0["offset"], 1)])), L0["macrochar"])))))) {
      L0["result"] = $.add($.add(L0["result"], (await $.call(C, "Copy", [L0["newstr"], 1, $.sub(L0["offset"], 1)]))), L0["newpattern"]);
    } else {
      L0["result"] = $.add($.add(L0["result"], (await $.call(C, "Copy", [L0["newstr"], 1, $.sub(L0["offset"], 1)]))), L0["oldpattern"]);
    }
    L0["newstr"] = (await $.call(C, "Copy", [L0["newstr"], $.add(L0["offset"], (await $.call(C, "Length", [L0["oldpattern"]]))), (await $.v(C, "MaxInt"))]));
    if ($.truthy($.not(($.in_((await $.v(C, "rfReplaceAll")), L0["flags"]))))) {
      L0["result"] = $.add(L0["result"], L0["newstr"]);
      break;
    }
    L0["searchstr"] = (await $.call(C, "Copy", [L0["searchstr"], $.add(L0["offset"], (await $.call(C, "Length", [L0["patt"]]))), (await $.v(C, "MaxInt"))]));
    await $.tick();
  }
  return L0.result;
}, {"params": ["S", "OldPattern", "NewPattern", "Flags", "MacroChar"], "kind": "function", "ptypes": ["String", "String", "String", "TReplaceFlags", "Char"]});
  U.func("GetStingListText", async function GetStingListText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sl": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["sl"]);
  L0["result"] = (await $.call(C, "Copy", [(await $.mv(L0["sl"], "Text")), 1, $.sub((await $.call(C, "Length", [(await $.mv(L0["sl"], "Text"))])), 2)]));
  return L0.result;
}, {"params": ["sl"], "kind": "function", "ptypes": ["TStrings"]});
  U.method("TRichEditStrings", "Create", async function Create(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TRichEditStrings", "Create", null, arguments);
  await $.set(C, "RichEdit", (await $.mcall((await $.v(C, "TRichEdit")), "Create", [null])));
  await $.mset((await $.v(C, "RichEdit")), "Visible", false);
  await $.mset((await $.v(C, "RichEdit")), "ParentWindow", (await $.v(C, "GetDesktopWindow")));
  return L0.result;
}, {"params": [], "kind": "constructor", "ptypes": []});
  U.method("TRichEditStrings", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FConverter")), "Free", []);
  await $.mcall((await $.v(C, "RichEdit")), "Free", []);
  await $.inherited(Self, "TRichEditStrings", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TRichEditStrings", "AddStrings", async function AddStrings(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"strings": $.copyArg(p0), result: undefined, "selchange": null};
  await $.fixArgs(L0, ["strings"]);
  L0["selchange"] = (await $.mv((await $.v(C, "RichEdit")), "OnSelectionChange"));
  await $.mset((await $.v(C, "RichEdit")), "OnSelectionChange", null);
  try {
    await $.inherited(Self, "TRichEditStrings", "AddStrings", [L0["strings"]], arguments);
  } finally {
    await $.mset((await $.v(C, "RichEdit")), "OnSelectionChange", L0["selchange"]);
  }
  return L0.result;
}, {"params": ["Strings"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TRichEditStrings", "GetCount", async function GetCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_GETLINECOUNT")), 0, 0]));
  if ($.truthy($.eq((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINELENGTH")), (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINEINDEX")), $.sub(L0["result"], 1), 0])), 0])), 0))) {
    await $.stmt((await $.call(C, "Dec", [$.ref(async () => L0["result"], async ($t9) => { L0["result"] = $t9; })])));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TRichEditStrings", "Get", async function Get() { return $.notPorted("TRichEditStrings.Get", "cannot assign to call"); }, {"params": ["Index"], "kind": "function", "ptypes": ["Integer"], "error": "cannot assign to call", "src": "function TRichEditStrings.Get(Index: Integer): string;\nvar\n  Text: array[0..4095] of Char;\n  L: Integer;\nbegin\n  Word((@Text)^) := SizeOf(Text);\n  L := SendMessage(RichEdit.Handle, EM_GETLINE, Index, Longint(@Text));\n  if (Text[L - 2] = #13) and (Text[L - 1] = #10) then Dec(L, 2);\n  SetString(Result, Text, L);\nend;"});
  U.method("TRichEditStrings", "Put", async function Put(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "s": $.copyArg(p1), result: undefined, "selection": null};
  await $.fixArgs(L0, ["index", "s"]);
  if ($.truthy($.ge(L0["index"], 0))) {
    await $.mset(L0["selection"], "cpMin", (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINEINDEX")), L0["index"], 0])));
    if ($.truthy($.ne((await $.mv(L0["selection"], "cpMin")), (-(1))))) {
      await $.mset(L0["selection"], "cpMax", $.add((await $.mv(L0["selection"], "cpMin")), (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINELENGTH")), (await $.mv(L0["selection"], "cpMin")), 0]))));
      await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_EXSETSEL")), 0, (await $.call(C, "Longint", [L0["selection"]]))])));
      await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_REPLACESEL")), 0, (await $.call(C, "Longint", [(await $.call(C, "PChar", [L0["s"]]))]))])));
    }
  }
  return L0.result;
}, {"params": ["Index", "S"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TRichEditStrings", "Insert", async function Insert(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "s": $.copyArg(p1), result: undefined, "l": 0, "selection": null, "fmt": '', "str": ''};
  await $.fixArgs(L0, ["index", "s"]);
  if ($.truthy($.ge(L0["index"], 0))) {
    await $.mset(L0["selection"], "cpMin", (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINEINDEX")), L0["index"], 0])));
    if ($.truthy($.ge((await $.mv(L0["selection"], "cpMin")), 0))) {
      L0["fmt"] = "%s\r\n";
    } else {
      await $.mset(L0["selection"], "cpMin", (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINEINDEX")), $.sub(L0["index"], 1), 0])));
      if ($.truthy($.lt((await $.mv(L0["selection"], "cpMin")), 0))) {
        return L0.result;
      }
      L0["l"] = (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINELENGTH")), (await $.mv(L0["selection"], "cpMin")), 0]));
      if ($.truthy($.eq(L0["l"], 0))) {
        return L0.result;
      }
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["selection"], "cpMin")), async ($t10) => { await $.mset(L0["selection"], "cpMin", $t10); }), L0["l"]])));
      L0["fmt"] = "\r\n%s";
    }
    await $.mset(L0["selection"], "cpMax", (await $.mv(L0["selection"], "cpMin")));
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_EXSETSEL")), 0, (await $.call(C, "Longint", [L0["selection"]]))])));
    L0["str"] = (await $.call(C, "Format", [L0["fmt"], [L0["s"]]]));
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_REPLACESEL")), 0, (await $.call(C, "LongInt", [(await $.call(C, "PChar", [L0["str"]]))]))])));
    if ($.truthy($.ne((await $.mv((await $.v(C, "RichEdit")), "SelStart")), ($.add((await $.mv(L0["selection"], "cpMax")), (await $.call(C, "Length", [L0["str"]]))))))) {
      throw $.raise((await $.mcall((await $.v(C, "EOutOfResources")), "Create", [(await $.v(C, "sRichEditInsertError"))])));
    }
  }
  return L0.result;
}, {"params": ["Index", "S"], "kind": "procedure", "ptypes": ["Integer", "String"]});
  U.method("TRichEditStrings", "Delete", async function Delete(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: undefined, "selection": null};
  await $.fixArgs(L0, ["index"]);
  L0["empty"] = "";
  if ($.truthy($.lt(L0["index"], 0))) {
    return L0.result;
  }
  await $.mset(L0["selection"], "cpMin", (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINEINDEX")), L0["index"], 0])));
  if ($.truthy($.ne((await $.mv(L0["selection"], "cpMin")), (-(1))))) {
    await $.mset(L0["selection"], "cpMax", (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINEINDEX")), $.add(L0["index"], 1), 0])));
    if ($.truthy($.eq((await $.mv(L0["selection"], "cpMax")), (-(1))))) {
      await $.mset(L0["selection"], "cpMax", $.add((await $.mv(L0["selection"], "cpMin")), (await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_LINELENGTH")), (await $.mv(L0["selection"], "cpMin")), 0]))));
    }
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_EXSETSEL")), 0, (await $.call(C, "Longint", [L0["selection"]]))])));
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_REPLACESEL")), 0, (await $.call(C, "Longint", [L0["empty"]]))])));
  }
  return L0.result;
}, {"params": ["Index"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TRichEditStrings", "Clear", async function Clear(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "RichEdit")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TRichEditStrings", "SetUpdateState", async function SetUpdateState(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"updating": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["updating"]);
  if ($.truthy((await $.mv((await $.v(C, "RichEdit")), "Showing")))) {
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "WM_SETREDRAW")), (await $.call(C, "Ord", [$.not(L0["updating"])])), 0])));
  }
  if ($.truthy($.not(L0["updating"]))) {
    await $.mcall((await $.v(C, "RichEdit")), "Refresh", []);
    await $.stmt((await $.mcall((await $.v(C, "RichEdit")), "Perform", [(await $.v(C, "CM_TEXTCHANGED")), 0, 0])));
  }
  return L0.result;
}, {"params": ["Updating"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TRichEditStrings", "EnableChange", async function EnableChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "eventmask": 0};
  await $.fixArgs(L0, ["value"]);
  {
    const $t11 = (await $.v(C, "RichEdit"));
    if ($.truthy((await $.wv([$t11], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)))) {
      await $.wset([$t11], "EventMask", (await $.or_((await $.wcall([$t11], "SendMessage", [(await $.wv([$t11], "Handle", C, false)), (await $.wv([$t11], "EM_GETEVENTMASK", C, false)), 0, 0], C)), async () => (await $.wv([$t11], "ENM_CHANGE", C, false)))), { get: async () => L0["eventmask"], set: async (v) => { L0["eventmask"] = v; }, local: true });
    } else {
      await $.wset([$t11], "EventMask", (await $.and_((await $.wcall([$t11], "SendMessage", [(await $.wv([$t11], "Handle", C, false)), (await $.wv([$t11], "EM_GETEVENTMASK", C, false)), 0, 0], C)), async () => $.not((await $.wv([$t11], "ENM_CHANGE", C, false))))), { get: async () => L0["eventmask"], set: async (v) => { L0["eventmask"] = v; }, local: true });
    }
    await $.stmt((await $.wcall([$t11], "SendMessage", [(await $.wv([$t11], "Handle", C, false)), (await $.wv([$t11], "EM_SETEVENTMASK", C, false)), 0, (await $.wv([$t11], "EventMask", { get: async () => L0["eventmask"], set: async (v) => { L0["eventmask"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TRichEditStrings", "SetTextStr", async function SetTextStr(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "EnableChange", [false])));
  try {
    await $.inherited(Self, "TRichEditStrings", "SetTextStr", [L0["value"]], arguments);
  } finally {
    await $.stmt((await $.call(C, "EnableChange", [true])));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["String"]});
  U.func("AdjustLineBreaks", async function AdjustLineBreaks() { return $.notPorted("AdjustLineBreaks", "asm block"); }, {"params": ["Dest", "Source"], "kind": "function", "ptypes": ["PChar", "PChar"], "error": "asm block", "src": "function AdjustLineBreaks(Dest, Source: PChar): Integer; assembler;\nasm\n        PUSH    ESI\n        PUSH    EDI\n        MOV     EDI,EAX\n        MOV     ESI,EDX\n        MOV     EDX,EAX\n        CLD\n@@1:    LODSB\n@@2:    OR      AL,AL\n        JE      @@4\n        CMP     AL,0AH\n        JE      @@3\n        STOSB\n        CMP     AL,0DH\n        JNE     @@1\n        MOV     AL,0AH\n        STOSB\n        LODSB\n        CMP     AL,0AH\n        JE      @@1\n        JMP     @@2\n@@3:    MOV     EAX,0A0DH\n        STOSW\n        JMP     @@1\n@@4:    STOSB\n        LEA     EAX,[EDI-1]\n        SUB     EAX,EDX\n        POP     EDI\n        POP     ESI\nend;"});
  U.func("StreamSave", async function StreamSave(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dwcookie": $.copyArg(p0), "pbbuff": $.copyArg(p1), "cb": $.copyArg(p2), "pcb": $.asRef(p3), result: 0, "streaminfo": null};
  await $.fixArgs(L0, ["dwcookie", "pbbuff", "cb"]);
  L0["result"] = (await $.v(C, "NoError"));
  L0["streaminfo"] = (await $.call(C, "PRichEditStreamInfo", [(await $.call(C, "Pointer", [L0["dwcookie"]]))]));
  try {
    await L0["pcb"].set(0);
    if ($.truthy($.ne((await $.mv(L0["streaminfo"], "Converter")), null))) {
      await L0["pcb"].set((await $.mcall((await $.mv(L0["streaminfo"], "Converter")), "ConvertWriteStream", [(await $.mv(L0["streaminfo"], "Stream")), (await $.call(C, "PChar", [L0["pbbuff"]])), L0["cb"]])));
    }
  } catch ($t12) {
    $.rethrowControl($t12);
    $.handled($t12);
    L0["result"] = (await $.v(C, "WriteError"));
  }
  return L0.result;
}, {"params": ["dwCookie", "pbBuff", "cb", "pcb"], "kind": "function", "ptypes": ["Longint", "PByte", "Longint", "Longint"]});
  U.func("StreamLoad", async function StreamLoad(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"dwcookie": $.copyArg(p0), "pbbuff": $.copyArg(p1), "cb": $.copyArg(p2), "pcb": $.asRef(p3), result: 0, "buffer": '', "pbuff": '', "streaminfo": null};
  await $.fixArgs(L0, ["dwcookie", "pbbuff", "cb"]);
  L0["result"] = (await $.v(C, "NoError"));
  L0["streaminfo"] = (await $.call(C, "PRichEditStreamInfo", [(await $.call(C, "Pointer", [L0["dwcookie"]]))]));
  L0["buffer"] = (await $.call(C, "StrAlloc", [$.add(L0["cb"], 1)]));
  try {
    L0["cb"] = $.idiv(L0["cb"], 2);
    await L0["pcb"].set(0);
    L0["pbuff"] = $.add(L0["buffer"], L0["cb"]);
    try {
      if ($.truthy($.ne((await $.mv(L0["streaminfo"], "Converter")), null))) {
        await L0["pcb"].set((await $.mcall((await $.mv(L0["streaminfo"], "Converter")), "ConvertReadStream", [(await $.mv(L0["streaminfo"], "Stream")), L0["pbuff"], L0["cb"]])));
      }
      if ($.truthy($.gt((await L0["pcb"].get()), 0))) {
        { const $t14 = await $.iset(L0["pbuff"], [(await L0["pcb"].get())], "\u0000"); if ($t14 !== undefined) { L0["pbuff"] = $t14; } }
        if ($.truthy($.eq((await $.idx(L0["pbuff"], [$.sub((await L0["pcb"].get()), 1)])), "\r"))) {
          { const $t15 = await $.iset(L0["pbuff"], [$.sub((await L0["pcb"].get()), 1)], "\u0000"); if ($t15 !== undefined) { L0["pbuff"] = $t15; } }
        }
        await L0["pcb"].set((await $.call(C, "AdjustLineBreaks", [L0["buffer"], L0["pbuff"]])));
        await $.stmt((await $.call(C, "Move", [L0["buffer"], $.ref(async () => L0["pbbuff"], async ($t16) => { L0["pbbuff"] = $t16; }), (await L0["pcb"].get())])));
      }
    } catch ($t13) {
      $.rethrowControl($t13);
      $.handled($t13);
      L0["result"] = (await $.v(C, "ReadError"));
    }
  } finally {
    await $.stmt((await $.call(C, "StrDispose", [L0["buffer"]])));
  }
  return L0.result;
}, {"params": ["dwCookie", "pbBuff", "cb", "pcb"], "kind": "function", "ptypes": ["Longint", "PByte", "Longint", "Longint"]});
  U.method("TRichEditStrings", "LoadFromStream", async function LoadFromStream(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: undefined, "editstream": null, "position": 0, "texttype": 0, "streaminfo": null, "converter": null};
  await $.fixArgs(L0, ["stream"]);
  await $.mset(L0["streaminfo"], "Stream", L0["stream"]);
  if ($.truthy($.ne((await $.v(C, "FConverter")), null))) {
    L0["converter"] = (await $.v(C, "FConverter"));
  } else {
    L0["converter"] = (await $.mv((await $.mv((await $.v(C, "RichEdit")), "DefaultConverter")), "Create"));
  }
  await $.mset(L0["streaminfo"], "Converter", L0["converter"]);
  try {
    {
      const $t17 = L0["editstream"];
      await $.wset([$t17], "dwCookie", (await $.wcall([$t17], "LongInt", [(await $.wcall([$t17], "Pointer", [(await $.wv([$t17], "StreamInfo", { get: async () => L0["streaminfo"], set: async (v) => { L0["streaminfo"] = v; }, local: true }, true))], C))], C)), C);
      await $.wset([$t17], "pfnCallBack", (await $.wv([$t17], "StreamLoad", C, true)), C);
      await $.wset([$t17], "dwError", 0, C);
    }
    L0["position"] = (await $.mv(L0["stream"], "Position"));
    if ($.truthy((await $.v(C, "PlainText")))) {
      L0["texttype"] = (await $.v(C, "SF_TEXT"));
    } else {
      L0["texttype"] = (await $.v(C, "SF_RTF"));
    }
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_STREAMIN")), L0["texttype"], (await $.call(C, "Longint", [L0["editstream"]]))])));
    if ($.truthy((await $.and_(($.eq(L0["texttype"], (await $.v(C, "SF_RTF")))), async () => ($.ne((await $.mv(L0["editstream"], "dwError")), 0)))))) {
      await $.mset(L0["stream"], "Position", L0["position"]);
      if ($.truthy((await $.v(C, "PlainText")))) {
        L0["texttype"] = (await $.v(C, "SF_RTF"));
      } else {
        L0["texttype"] = (await $.v(C, "SF_TEXT"));
      }
      await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_STREAMIN")), L0["texttype"], (await $.call(C, "Longint", [L0["editstream"]]))])));
      if ($.truthy($.ne((await $.mv(L0["editstream"], "dwError")), 0))) {
        throw $.raise((await $.mcall((await $.v(C, "EOutOfResources")), "Create", [(await $.v(C, "sRichEditLoadFail"))])));
      }
    }
  } finally {
    if ($.truthy($.eq((await $.v(C, "FConverter")), null))) {
      await $.mcall(L0["converter"], "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Stream"], "kind": "procedure", "ptypes": ["TStream"]});
  U.method("TRichEditStrings", "SaveToStream", async function SaveToStream(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: undefined, "editstream": null, "texttype": 0, "streaminfo": null, "converter": null};
  await $.fixArgs(L0, ["stream"]);
  if ($.truthy($.ne((await $.v(C, "FConverter")), null))) {
    L0["converter"] = (await $.v(C, "FConverter"));
  } else {
    L0["converter"] = (await $.mv((await $.mv((await $.v(C, "RichEdit")), "DefaultConverter")), "Create"));
  }
  await $.mset(L0["streaminfo"], "Stream", L0["stream"]);
  await $.mset(L0["streaminfo"], "Converter", L0["converter"]);
  try {
    {
      const $t18 = L0["editstream"];
      await $.wset([$t18], "dwCookie", (await $.wcall([$t18], "LongInt", [(await $.wcall([$t18], "Pointer", [(await $.wv([$t18], "StreamInfo", { get: async () => L0["streaminfo"], set: async (v) => { L0["streaminfo"] = v; }, local: true }, true))], C))], C)), C);
      await $.wset([$t18], "pfnCallBack", (await $.wv([$t18], "StreamSave", C, true)), C);
      await $.wset([$t18], "dwError", 0, C);
    }
    if ($.truthy((await $.v(C, "PlainText")))) {
      L0["texttype"] = (await $.v(C, "SF_TEXT"));
    } else {
      L0["texttype"] = (await $.v(C, "SF_RTF"));
    }
    await $.stmt((await $.call(C, "SendMessage", [(await $.mv((await $.v(C, "RichEdit")), "Handle")), (await $.v(C, "EM_STREAMOUT")), L0["texttype"], (await $.call(C, "Longint", [L0["editstream"]]))])));
    if ($.truthy($.ne((await $.mv(L0["editstream"], "dwError")), 0))) {
      throw $.raise((await $.mcall((await $.v(C, "EOutOfResources")), "Create", [(await $.v(C, "sRichEditSaveFail"))])));
    }
  } finally {
    if ($.truthy($.eq((await $.v(C, "FConverter")), null))) {
      await $.mcall(L0["converter"], "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Stream"], "kind": "procedure", "ptypes": ["TStream"]});
  U.method("TRichEditStrings", "LoadFromFile", async function LoadFromFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"filename": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["filename"]);
  await $.inherited(Self, "TRichEditStrings", "LoadFromFile", [L0["filename"]], arguments);
  return L0.result;
}, {"params": ["FileName"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TRichEditStrings", "SaveToFile", async function SaveToFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"filename": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["filename"]);
  await $.inherited(Self, "TRichEditStrings", "SaveToFile", [L0["filename"]], arguments);
  return L0.result;
}, {"params": ["FileName"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPrintDBGridEh", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TPrintDBGridEh", "Create", [L0["aowner"]], arguments);
  await $.set(C, "FPage", (await $.mv((await $.v(C, "TPageParams")), "Create")));
  await $.set(C, "FPageFooter", (await $.mv((await $.v(C, "TPageColontitle")), "Create")));
  await $.set(C, "FPageHeader", (await $.mv((await $.v(C, "TPageColontitle")), "Create")));
  await $.set(C, "FTitle", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "FColCellParamsEh", (await $.mv((await $.v(C, "TColCellParamsEh")), "Create")));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TPrintDBGridEh", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FColCellParamsEh")), "Free", []);
  await $.mcall((await $.v(C, "Page")), "Free", []);
  await $.mcall((await $.v(C, "PageFooter")), "Free", []);
  await $.mcall((await $.v(C, "PageHeader")), "Free", []);
  await $.mcall((await $.v(C, "FTitle")), "Free", []);
  await $.mcall((await $.v(C, "FBeforeGridText")), "Free", []);
  await $.mcall((await $.v(C, "FAfterGridText")), "Free", []);
  if ($.truthy($.ne((await $.v(C, "FSubstitutesNames")), null))) {
    await $.mcall((await $.v(C, "FSubstitutesNames")), "Free", []);
  }
  if ($.truthy($.ne((await $.v(C, "FSubstitutesValues")), null))) {
    await $.mcall((await $.v(C, "FSubstitutesValues")), "Free", []);
  }
  await $.inherited(Self, "TPrintDBGridEh", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPrintDBGridEh", "Preview", async function Preview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnPrinterSetupDialog"))])))) {
    await $.mset((await $.v(C, "PrinterPreview")), "OnPrinterSetupDialog", (await $.ref_(C, "OnPrinterSetupDialog")));
  } else {
    await $.mset((await $.v(C, "PrinterPreview")), "OnPrinterSetupDialog", (await $.ref_(C, "PrinterSetupDialogPreview")));
  }
  await $.mset((await $.v(C, "PrinterPreview")), "PrinterSetupOwner", Self);
  await $.stmt((await $.call(C, "PrintTo", [(await $.v(C, "PrinterPreview"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPrintDBGridEh", "PrintTo", async function PrintTo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"vprinter": $.copyArg(p0), result: undefined, "colstopages": null, "prnrowheights": null, "prncolwidths": null, "gridwidth": 0, "realright": 0, "realleft": 0, "minrowheight": 0, "fprnphysoffsetx": 0, "fprnphysoffsety": 0, "fprnhorsres": 0, "fprnvertres": 0, "prntitleh": 0, "penw": 0, "prntitletexth": 0, "dataprintrec": null, "printrec": null, "printoffset": 0, "flogpelsx1": 0, "flogpelsy1": 0, "flogpelsx2": 0, "flogpelsy2": 0, "fscalex": 0, "fscaley": 0, "savedbookmark": null, "pbm1": $.rec("tpolybookmark"), "pbm2": $.rec("tpolybookmark"), "psx1": 0, "psy1": 0, "psx2": 0, "psy2": 0, "firstpage": false, "awordwrap": false, "polypolypoints": null, "polylengths": null, "titlerect": null, "footerrect": null, "prncolumns": null, "prncolumnwidths": null, "footervalues": null, "fsubstituted": false, "beforegridtextstream": null, "aftergridtextstream": null, "calcinfomode": false, "pagecount": 0, "acursor": null, "rendermetafie": null, "rendercanvas": null, "vprinter_canvas": null};
  await $.fixArgs(L0, ["vprinter"]);
  L0["macros"] = ["&[Page]", "&[ShortDate]", "&[Date]", "&[LongDate]", "&[Time]", "&[Pages]"];
  L0["createrendercanvas"] = $.fn(async function CreateRenderCanvas() {
  const L1 = {result: undefined};
  L0["rendermetafie"] = (await $.mv((await $.v(C, "TMetafile")), "Create"));
  L0["rendercanvas"] = (await $.mcall((await $.v(C, "TMetafileCanvas")), "Create", [L0["rendermetafie"], (await $.mv((await $.mv(L0["vprinter"], "Canvas")), "Handle"))]));
  await $.mset((await $.mv(L0["rendercanvas"], "Font")), "PixelsPerInch", (await $.mv((await $.mv((await $.mv(L0["vprinter"], "Canvas")), "Font")), "PixelsPerInch")));
  L0["vprinter_canvas"] = L0["rendercanvas"];
  return L1.result;
});
  L0["freerendercanvas"] = $.fn(async function FreeRenderCanvas() {
  const L1 = {result: undefined};
  L0["vprinter_canvas"] = (await $.mv(L0["vprinter"], "Canvas"));
  await $.mcall(L0["rendercanvas"], "Free", []);
  L0["rendercanvas"] = null;
  await $.mcall(L0["rendermetafie"], "Free", []);
  L0["rendermetafie"] = null;
  return L1.result;
});
  L0["initmacrovalues"] = $.fn(async function InitMacroValues() {
  const L1 = {result: undefined};
  { const $t19 = await $.iset((await $.v(C, "MacroValues")), [1], (await $.call(C, "DateToStr", [(await $.v(C, "Now"))]))); if ($t19 !== undefined) { await $.set(C, "MacroValues", $t19); } }
  { const $t20 = await $.iset((await $.v(C, "MacroValues")), [2], (await $.call(C, "DateToStr", [(await $.v(C, "Now"))]))); if ($t20 !== undefined) { await $.set(C, "MacroValues", $t20); } }
  { const $t21 = await $.iset((await $.v(C, "MacroValues")), [3], (await $.call(C, "FormatDateTime", [(await $.v(C, "LongDateFormat")), (await $.v(C, "Now"))]))); if ($t21 !== undefined) { await $.set(C, "MacroValues", $t21); } }
  { const $t22 = await $.iset((await $.v(C, "MacroValues")), [4], (await $.call(C, "TimeToStr", [(await $.v(C, "Now"))]))); if ($t22 !== undefined) { await $.set(C, "MacroValues", $t22); } }
  { const $t23 = await $.iset((await $.v(C, "MacroValues")), [5], (await $.call(C, "IntToStr", [L0["pagecount"]]))); if ($t23 !== undefined) { await $.set(C, "MacroValues", $t23); } }
  return L1.result;
});
  L0["initpolybookmark"] = $.fn(async function InitPolyBookmark(p0) {
  const L1 = {"apbm": $.asRef(p0), result: undefined, "idx": 0};
  if ($.truthy((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Eof")))) {
    await $.mset((await L1["apbm"].get()), "InDS", false);
    await $.mset((await L1["apbm"].get()), "bm", "");
    if ($.truthy(($.eq((await $.mv((await $.v(C, "DBGridEh")), "FooterRowCount")), 0)))) {
      await $.mset((await L1["apbm"].get()), "EOF", true);
    } else {
      await $.mset((await L1["apbm"].get()), "bm", "0");
      await $.mset((await L1["apbm"].get()), "EOF", false);
    }
  } else {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Selection")), "SelectionType")), (await $.v(C, "gstRecordBookmarks"))))) {
      if ($.truthy((await $.mcall((await $.mv((await $.v(C, "DBGridEh")), "SelectedRows")), "Find", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark")), L1["idx"]])))) {
        await $.mset((await L1["apbm"].get()), "bm", (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark")));
      } else {
        await $.mset((await L1["apbm"].get()), "bm", (await $.idx((await $.mv((await $.v(C, "DBGridEh")), "SelectedRows")), [0])));
        await $.mset((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark", (await $.idx((await $.mv((await $.v(C, "DBGridEh")), "SelectedRows")), [0])));
      }
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Selection")), "SelectionType")), (await $.v(C, "gstRectangle"))))) {
        await $.mset((await L1["apbm"].get()), "bm", (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Selection")), "Rect")), "TopRow")));
        await $.mset((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark", (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Selection")), "Rect")), "TopRow")));
      } else {
        await $.mset((await L1["apbm"].get()), "bm", (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark")));
      }
    }
    await $.mset((await L1["apbm"].get()), "InDS", true);
    await $.mset((await L1["apbm"].get()), "EOF", false);
  }
  return L1.result;
});
  L0["gotopolybookmark"] = $.fn(async function GotoPolyBookmark(p0) {
  const L1 = {"apbm": $.asRef(p0), result: undefined};
  if ($.truthy(($.eq((await $.mv((await L1["apbm"].get()), "InDS")), true)))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "TBookmark", [(await $.mv((await L1["apbm"].get()), "bm"))]))])));
  }
  return L1.result;
});
  L0["setnextpolybookmark"] = $.fn(async function SetNextPolyBookmark(p0) {
  const L1 = {"apbm": $.asRef(p0), result: undefined, "idx": 0};
  if ($.truthy((await $.mv((await L1["apbm"].get()), "EOF")))) {
    return L1.result;
  }
  if ($.truthy(($.eq((await $.mv((await L1["apbm"].get()), "InDS")), true)))) {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Selection")), "SelectionType")), (await $.v(C, "gstRecordBookmarks"))))) {
      if ($.truthy((await $.mcall((await $.mv((await $.v(C, "DBGridEh")), "SelectedRows")), "Find", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark")), L1["idx"]])))) {
        if ($.truthy($.eq(L1["idx"], $.sub((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "SelectedRows")), "Count")), 1)))) {
          await $.mset((await L1["apbm"].get()), "InDS", false);
          await $.mset((await L1["apbm"].get()), "bm", "");
          if ($.truthy(($.eq((await $.mv((await $.v(C, "DBGridEh")), "FooterRowCount")), 0)))) {
            await $.mset((await L1["apbm"].get()), "EOF", true);
          } else {
            await $.mset((await L1["apbm"].get()), "bm", "0");
            await $.mset((await L1["apbm"].get()), "EOF", false);
          }
        } else {
          await $.mset((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark", (await $.idx((await $.mv((await $.v(C, "DBGridEh")), "SelectedRows")), [$.add(L1["idx"], 1)])));
          await $.mset((await L1["apbm"].get()), "bm", (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark")));
          await $.mset((await L1["apbm"].get()), "EOF", false);
        }
      } else {
        await $.mset((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark", (await $.idx((await $.mv((await $.v(C, "DBGridEh")), "SelectedRows")), [0])));
        await $.mset((await L1["apbm"].get()), "bm", (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark")));
        await $.mset((await L1["apbm"].get()), "EOF", false);
      }
    } else {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Selection")), "SelectionType")), (await $.v(C, "gstRectangle"))))) {
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Next", []);
        if ($.truthy((await $.or_(($.lt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "CompareBookmarks", [(await $.call(C, "Pointer", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Selection")), "Rect")), "BottomRow"))])), (await $.call(C, "Pointer", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark"))]))])), 0)), async () => (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Eof")))))) {
          await $.mset((await L1["apbm"].get()), "InDS", false);
          await $.mset((await L1["apbm"].get()), "bm", "");
          if ($.truthy(($.eq((await $.mv((await $.v(C, "DBGridEh")), "FooterRowCount")), 0)))) {
            await $.mset((await L1["apbm"].get()), "EOF", true);
          } else {
            await $.mset((await L1["apbm"].get()), "bm", "0");
            await $.mset((await L1["apbm"].get()), "EOF", false);
          }
        } else {
          await $.mset((await L1["apbm"].get()), "bm", (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark")));
          await $.mset((await L1["apbm"].get()), "EOF", false);
        }
      } else {
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Next", []);
        if ($.truthy((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Eof")))) {
          await $.mset((await L1["apbm"].get()), "InDS", false);
          await $.mset((await L1["apbm"].get()), "bm", "");
          if ($.truthy(($.eq((await $.mv((await $.v(C, "DBGridEh")), "FooterRowCount")), 0)))) {
            await $.mset((await L1["apbm"].get()), "EOF", true);
          } else {
            await $.mset((await L1["apbm"].get()), "bm", "0");
            await $.mset((await L1["apbm"].get()), "EOF", false);
          }
        } else {
          await $.mset((await L1["apbm"].get()), "bm", (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark")));
          await $.mset((await L1["apbm"].get()), "EOF", false);
        }
      }
    }
  } else {
    if ($.truthy(($.le($.sub((await $.mv((await $.v(C, "DBGridEh")), "FooterRowCount")), 1), (await $.call(C, "StrToInt", [(await $.mv((await L1["apbm"].get()), "bm"))])))))) {
      await $.mset((await L1["apbm"].get()), "EOF", true);
      await $.mset((await L1["apbm"].get()), "bm", "0");
      await $.mset((await L1["apbm"].get()), "InDS", false);
    } else {
      await $.mset((await L1["apbm"].get()), "bm", (await $.call(C, "IntToStr", [$.add((await $.call(C, "StrToInt", [(await $.mv((await L1["apbm"].get()), "bm"))])), 1)])));
    }
  }
  return L1.result;
});
  L0["addpolyline"] = $.fn(async function AddPolyline(p0) {
  const L1 = {"args": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["args"]);
  { const $t24 = (await $.call(C, "High", [L1["args"]]));
    L1["i"] = 0;
    let $t25 = true;
    for (;;) {
      if (!$t25) { L1["i"] = $.succ(L1["i"], 1); }
      $t25 = false;
      if (!($.ord(L1["i"]) <= $.ord($t24))) break;
      await $.stmt((await $.mcall(L0["polypolypoints"], "Add", [(await $.call(C, "Pointer", [(await $.mv((await $.idx(L1["args"], [L1["i"]])), "VInteger"))]))])));
      await $.tick();
    }
  }
  await $.stmt((await $.mcall(L0["polylengths"], "Add", [(await $.call(C, "Pointer", [$.idiv(($.add((await $.call(C, "High", [L1["args"]])), 1)), 2)]))])));
  return L1.result;
});
  L0["calccolumnwidths"] = $.fn(async function CalcColumnWidths() {
  const L1 = {result: undefined, "i": 0, "w": 0, "w1": 0, "tw": 0, "pm": $.rec("tpolybookmark"), "newbackgrnd": 0, "text": '', "aalignment": null, "acursor": null};
  L1["gettitletext"] = $.fn(async function GetTitleText(p0) {
  const L2 = {"column": $.copyArg(p0), result: '', "i": 0};
  await $.fixArgs(L2, ["column"]);
  if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseMultiTitle")))) {
    { const $t26 = 1;
      L2["i"] = (await $.call(C, "Length", [(await $.mv((await $.mv(L2["column"], "Title")), "Caption"))]));
      let $t27 = true;
      for (;;) {
        if (!$t27) { L2["i"] = $.succ(L2["i"], -1); }
        $t27 = false;
        if (!($.ord(L2["i"]) >= $.ord($t26))) break;
        if ($.truthy((await $.and_(($.eq((await $.idx((await $.mv((await $.mv(L2["column"], "Title")), "Caption")), [L2["i"]])), "|")), async () => ($.eq((await $.call(C, "ByteType", [(await $.mv((await $.mv(L2["column"], "Title")), "Caption")), L2["i"]])), (await $.v(C, "mbSingleByte")))))))) {
          L2["result"] = (await $.call(C, "Copy", [(await $.mv((await $.mv(L2["column"], "Title")), "Caption")), L2["i"], (await $.call(C, "Length", [(await $.mv((await $.mv(L2["column"], "Title")), "Caption"))]))]));
          return L2.result;
        }
        await $.tick();
      }
    }
  }
  L2["result"] = (await $.mv((await $.mv(L2["column"], "Title")), "Caption"));
  return L2.result;
});
  L1["w"] = 0;
  { const $t28 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
    L1["i"] = 0;
    let $t29 = true;
    for (;;) {
      if (!$t29) { L1["i"] = $.succ(L1["i"], 1); }
      $t29 = false;
      if (!($.ord(L1["i"]) <= $.ord($t28))) break;
      await $.stmt((await $.mcall(L0["prncolumnwidths"], "Add", [(await $.call(C, "Pointer", [(await $.call(C, "Round", [$.mul(($.add((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Width")), 1)), L0["fscalex"])]))]))])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["w"], async ($t30) => { L1["w"] = $t30; }), (await $.call(C, "Integer", [(await $.idx(L0["prncolumnwidths"], [L1["i"]]))]))])));
      await $.tick();
    }
  }
  if ($.truthy(($.in_((await $.v(C, "pghOptimalColWidths")), (await $.v(C, "Options")))))) {
    await $.stmt($.callv(L0["createrendercanvas"], []));
    { const $t31 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
      L1["i"] = 0;
      let $t32 = true;
      for (;;) {
        if (!$t32) { L1["i"] = $.succ(L1["i"], 1); }
        $t32 = false;
        if (!($.ord(L1["i"]) <= $.ord($t31))) break;
        { const $t33 = await $.iset(L0["prncolumnwidths"], [L1["i"]], (await $.call(C, "Pointer", [10]))); if ($t33 !== undefined) { L0["prncolumnwidths"] = $t33; } }
        if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBGridEh")), "TitleImages")), null)), async () => ($.ne((await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "ImageIndex")), (-(1)))))))) {
          L1["tw"] = $.add((await $.call(C, "Trunc", [$.mul((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "TitleImages")), "Width")), L0["fscalex"])])), $.mul(L0["psx2"], 2));
        } else {
          await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "Font")));
          if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
            await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
          }
          L1["tw"] = $.add((await $.call(C, "GetTextWidth", [L0["vprinter_canvas"], (await $.callv(L1["gettitletext"], [(await $.idx(L0["prncolumns"], [L1["i"]]))]))])), $.mul(L0["psx2"], 2));
        }
        if ($.truthy($.gt(L1["tw"], (await $.call(C, "Integer", [(await $.idx(L0["prncolumnwidths"], [L1["i"]]))]))))) {
          { const $t34 = await $.iset(L0["prncolumnwidths"], [L1["i"]], (await $.call(C, "Pointer", [L1["tw"]]))); if ($t34 !== undefined) { L0["prncolumnwidths"] = $t34; } }
        }
        await $.tick();
      }
    }
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "First", []);
    await $.stmt((await $.callv(L0["initpolybookmark"], [L1["pm"]])));
    L1["acursor"] = (await $.mv((await $.v(C, "Screen")), "Cursor"));
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
    try {
      while ($.truthy($.not((await $.mv(L1["pm"], "Eof"))))) {
        { const $t35 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
          L1["i"] = 0;
          let $t36 = true;
          for (;;) {
            if (!$t36) { L1["i"] = $.succ(L1["i"], 1); }
            $t36 = false;
            if (!($.ord(L1["i"]) <= $.ord($t35))) break;
            if ($.truthy((await $.mv(L1["pm"], "InDS")))) {
              { const $t37 = (await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "GetColumnType"));
                if ($.eq($t37, (await $.v(C, "ctCheckboxes")))) {
                  L1["tw"] = $.add((await $.call(C, "Trunc", [$.mul((await $.v(C, "FCheckBoxWidth")), L0["fscalex"])])), $.mul(L0["psx2"], 2));
                }
                else if ($.eq($t37, (await $.v(C, "ctKeyImageList")))) {
                  L1["tw"] = $.add((await $.call(C, "Trunc", [$.mul((await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "ImageList")), "Width")), L0["fscalex"])])), $.mul(L0["psx2"], 2));
                }
                else {
                  await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Font")));
                  if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
                    await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
                  }
                  L1["newbackgrnd"] = (await $.v(C, "clWhite"));
                  {
                    const $t38 = (await $.call(C, "TColCellParamsEhCracker", [(await $.v(C, "FColCellParamsEh"))]));
                    await $.wset([$t38], "FRow", (-(1)), C);
                    await $.wset([$t38], "FCol", (-(1)), C);
                    await $.wset([$t38], "FState", [], C);
                    await $.wset([$t38], "FFont", (await $.mv((await $.wv([$t38], "VPrinter_Canvas", { get: async () => L0["vprinter_canvas"], set: async (v) => { L0["vprinter_canvas"] = v; }, local: true }, false)), "Font")), C);
                    await $.wset([$t38], "FBackground", (await $.wv([$t38], "clWhite", C, false)), C);
                    await $.wset([$t38], "FAlignment", (await $.wv([$t38], "taLeftJustify", C, false)), C);
                    await $.wset([$t38], "FImageIndex", (-(1)), C);
                    await $.wset([$t38], "FText", (await $.mv((await $.idx((await $.wv([$t38], "PrnColumns", { get: async () => L0["prncolumns"], set: async (v) => { L0["prncolumns"] = v; }, local: true }, false)), [(await $.wv([$t38], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "DisplayText")), C);
                    await $.wset([$t38], "FCheckboxState", (await $.mv((await $.idx((await $.wv([$t38], "PrnColumns", { get: async () => L0["prncolumns"], set: async (v) => { L0["prncolumns"] = v; }, local: true }, false)), [(await $.wv([$t38], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "CheckboxState")), C);
                    if ($.truthy((await $.wcall([$t38], "Assigned", [(await $.mv((await $.wv([$t38], "DBGridEh", C, false)), "OnGetCellParams"))], C)))) {
                      await $.stmt((await $.mcall((await $.wv([$t38], "DBGridEh", C, false)), "OnGetCellParams", [(await $.wv([$t38], "DBGridEh", C, false)), (await $.idx((await $.wv([$t38], "PrnColumns", { get: async () => L0["prncolumns"], set: async (v) => { L0["prncolumns"] = v; }, local: true }, false)), [(await $.wv([$t38], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), (await $.wv([$t38], "Font", C, false)), (await $.wv([$t38], "FBackground", C, false)), []])));
                    }
                    await $.stmt((await $.mcall((await $.idx((await $.wv([$t38], "PrnColumns", { get: async () => L0["prncolumns"], set: async (v) => { L0["prncolumns"] = v; }, local: true }, false)), [(await $.wv([$t38], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "GetColCellParams", [(await $.wv([$t38], "False", C, false)), (await $.wv([$t38], "FColCellParamsEh", C, false))])));
                    await $.wset([$t38], "tw", $.add((await $.wcall([$t38], "GetTextWidth", [(await $.wv([$t38], "VPrinter_Canvas", { get: async () => L0["vprinter_canvas"], set: async (v) => { L0["vprinter_canvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t38], "FColCellParamsEh", C, false)), "Text"))], C)), $.mul((await $.wv([$t38], "PSX2", { get: async () => L0["psx2"], set: async (v) => { L0["psx2"] = v; }, local: true }, false)), 2)), { get: async () => L1["tw"], set: async (v) => { L1["tw"] = v; }, local: true });
                  }
                }
              }
            } else {
              await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.mcall((await $.idx(L0["prncolumns"], [L1["i"]])), "UsedFooter", [(await $.call(C, "StrToInt", [(await $.mv(L1["pm"], "bm"))]))])), "Font")));
              if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
                await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
              }
              L1["text"] = (await $.mcall((await $.v(C, "DBGridEh")), "GetFooterValue", [(await $.call(C, "StrToInt", [(await $.mv(L1["pm"], "bm"))])), (await $.idx(L0["prncolumns"], [L1["i"]]))]));
              L1["aalignment"] = (await $.mv((await $.mcall((await $.idx(L0["prncolumns"], [L1["i"]])), "UsedFooter", [(await $.call(C, "StrToInt", [(await $.mv(L1["pm"], "bm"))]))])), "Alignment"));
              if ($.truthy((await $.call(C, "Assigned", [(await $.mv((await $.v(C, "DBGridEh")), "OnGetFooterParams"))])))) {
                await $.stmt((await $.mcall((await $.v(C, "DBGridEh")), "OnGetFooterParams", [(await $.v(C, "DBGridEh")), (await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Index")), (await $.call(C, "StrToInt", [(await $.mv(L1["pm"], "bm"))])), (await $.idx(L0["prncolumns"], [L1["i"]])), (await $.mv(L0["vprinter_canvas"], "Font")), L1["newbackgrnd"], L1["aalignment"], [], L1["text"]])));
              }
              L1["tw"] = $.add((await $.call(C, "GetTextWidth", [L0["vprinter_canvas"], L1["text"]])), $.mul(L0["psx2"], 2));
            }
            if ($.truthy($.gt(L1["tw"], (await $.call(C, "Integer", [(await $.idx(L0["prncolumnwidths"], [L1["i"]]))]))))) {
              { const $t39 = await $.iset(L0["prncolumnwidths"], [L1["i"]], (await $.call(C, "Pointer", [L1["tw"]]))); if ($t39 !== undefined) { L0["prncolumnwidths"] = $t39; } }
            }
            await $.tick();
          }
        }
        await $.stmt((await $.callv(L0["setnextpolybookmark"], [L1["pm"]])));
        await $.tick();
      }
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", L1["acursor"]);
    }
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "First", []);
    L1["w"] = 0;
    { const $t40 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
      L1["i"] = 0;
      let $t41 = true;
      for (;;) {
        if (!$t41) { L1["i"] = $.succ(L1["i"], 1); }
        $t41 = false;
        if (!($.ord(L1["i"]) <= $.ord($t40))) break;
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["w"], async ($t42) => { L1["w"] = $t42; }), (await $.call(C, "Integer", [(await $.idx(L0["prncolumnwidths"], [L1["i"]]))]))])));
        await $.tick();
      }
    }
    await $.stmt($.callv(L0["freerendercanvas"], []));
  }
  if ($.truthy((await $.and_(($.eq($.mul([(await $.v(C, "pghFitingByColWidths")), (await $.v(C, "pghFitGridToPageWidth"))], (await $.v(C, "Options"))), [(await $.v(C, "pghFitingByColWidths")), (await $.v(C, "pghFitGridToPageWidth"))])), async () => ($.gt(L1["w"], $.sub($.sub((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left"))), L0["penw"]))))))) {
    L1["w1"] = 0;
    { const $t43 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
      L1["i"] = 0;
      let $t44 = true;
      for (;;) {
        if (!$t44) { L1["i"] = $.succ(L1["i"], 1); }
        $t44 = false;
        if (!($.ord(L1["i"]) <= $.ord($t43))) break;
        { const $t45 = await $.iset(L0["prncolumnwidths"], [L1["i"]], (await $.call(C, "Pointer", [(await $.call(C, "MulDiv", [(await $.call(C, "Integer", [(await $.idx(L0["prncolumnwidths"], [L1["i"]]))])), $.sub($.sub((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left"))), L0["penw"]), L1["w"]]))]))); if ($t45 !== undefined) { L0["prncolumnwidths"] = $t45; } }
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["w1"], async ($t46) => { L1["w1"] = $t46; }), (await $.call(C, "Integer", [(await $.idx(L0["prncolumnwidths"], [L1["i"]]))]))])));
        await $.tick();
      }
    }
    if ($.truthy($.gt(L1["w1"], $.sub($.sub((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left"))), L0["penw"])))) {
      { const $t47 = await $.iset(L0["prncolumnwidths"], [$.sub((await $.mv(L0["prncolumns"], "Count")), 1)], (await $.call(C, "Pointer", [$.add($.sub((await $.call(C, "Integer", [(await $.idx(L0["prncolumnwidths"], [$.sub((await $.mv(L0["prncolumns"], "Count")), 1)]))])), L1["w1"]), ($.sub($.sub((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left"))), L0["penw"])))]))); if ($t47 !== undefined) { L0["prncolumnwidths"] = $t47; } }
    }
  }
  return L1.result;
});
  L0["calccolstopages"] = $.fn(async function CalcColsToPages() {
  const L1 = {result: undefined, "curx": 0, "w": 0, "i": 0};
  L1["curx"] = $.add((await $.mv(L0["dataprintrec"], "Left")), L0["penw"]);
  await $.mcall(L0["prncolwidths"], "Clear", []);
  { const $t48 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
    L1["i"] = 0;
    let $t49 = true;
    for (;;) {
      if (!$t49) { L1["i"] = $.succ(L1["i"], 1); }
      $t49 = false;
      if (!($.ord(L1["i"]) <= $.ord($t48))) break;
      L1["w"] = (await $.call(C, "Integer", [(await $.idx(L0["prncolumnwidths"], [L1["i"]]))]));
      if ($.truthy(($.gt(L1["w"], $.sub((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left"))))))) {
        L1["w"] = $.sub((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left")));
      }
      await $.stmt((await $.mcall(L0["prncolwidths"], "Add", [(await $.call(C, "Pointer", [L1["w"]]))])));
      L1["curx"] = $.add(L1["curx"], L1["w"]);
      if ($.truthy((await $.and_(($.gt(L1["curx"], (await $.mv(L0["dataprintrec"], "Right")))), async () => ($.gt(L1["i"], 0)))))) {
        await $.stmt((await $.mcall(L0["colstopages"], "Add", [(await $.call(C, "Pointer", [$.sub(L1["i"], 1)]))])));
        L1["curx"] = $.add($.add((await $.mv(L0["dataprintrec"], "Left")), L1["w"]), L0["penw"]);
      }
      await $.tick();
    }
  }
  await $.stmt((await $.mcall(L0["colstopages"], "Add", [(await $.call(C, "Pointer", [$.sub((await $.mv(L0["prncolumns"], "Count")), 1)]))])));
  return L1.result;
});
  L0["getscaledrealgridwidth"] = $.fn(async function GetScaledRealGridWidth() {
  const L1 = {result: 0, "i": 0};
  L1["result"] = L0["penw"];
  { const $t50 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
    L1["i"] = 0;
    let $t51 = true;
    for (;;) {
      if (!$t51) { L1["i"] = $.succ(L1["i"], 1); }
      $t51 = false;
      if (!($.ord(L1["i"]) <= $.ord($t50))) break;
      L1["result"] = $.add(L1["result"], (await $.call(C, "Integer", [(await $.idx(L0["prncolumnwidths"], [L1["i"]]))])));
      await $.tick();
    }
  }
  return L1.result;
});
  L0["getprintgridwidth"] = $.fn(async function GetPrintGridWidth() {
  const L1 = {result: 0, "i": 0};
  L1["result"] = 0;
  { const $t52 = $.sub((await $.mv(L0["prncolwidths"], "Count")), 1);
    L1["i"] = 0;
    let $t53 = true;
    for (;;) {
      if (!$t53) { L1["i"] = $.succ(L1["i"], 1); }
      $t53 = false;
      if (!($.ord(L1["i"]) <= $.ord($t52))) break;
      L1["result"] = $.add(L1["result"], (await $.call(C, "Integer", [(await $.idx(L0["prncolwidths"], [L1["i"]]))])));
      await $.tick();
    }
  }
  return L1.result;
});
  L0["drawclipped"] = $.fn(async function DrawClipped(p0, p1, p2, p3, p4) {
  const L1 = {"imlist": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "index": $.copyArg(p3), "align": $.copyArg(p4), result: undefined, "checkedrect": null, "aunionrect": null, "oldrectrgn": null, "rectrgn": null, "r": 0, "x": 0, "y": 0, "imheight": 0, "imwidth": 0, "bm": null, "info": null, "infosize": 0, "image": null, "imagesize": 0, "bits": null, "dibwidth": 0, "dibheight": 0, "printwidth": 0, "printheight": 0, "realrect": null};
  await $.fixArgs(L1, ["imlist", "acanvas", "arect", "index", "align"]);
  if ($.truthy(L0["calcinfomode"])) {
    return L1.result;
  }
  if ($.truthy((await $.or_(($.lt(L1["index"], 0)), async () => ($.ge(L1["index"], (await $.mv(L1["imlist"], "Count")))))))) {
    return L1.result;
  }
  L1["imheight"] = (await $.call(C, "Trunc", [$.mul((await $.mv(L1["imlist"], "Height")), L0["fscaley"])]));
  L1["imwidth"] = (await $.call(C, "Trunc", [$.mul((await $.mv(L1["imlist"], "Width")), L0["fscalex"])]));
  { const $t54 = L1["align"];
    if ($.eq($t54, (await $.v(C, "taLeftJustify")))) {
      L1["x"] = (await $.mv(L1["arect"], "Left"));
    }
    else if ($.eq($t54, (await $.v(C, "taRightJustify")))) {
      L1["x"] = $.sub((await $.mv(L1["arect"], "Right")), L1["imwidth"]);
    }
    else {
      L1["x"] = $.idiv(($.sub($.add((await $.mv(L1["arect"], "Right")), (await $.mv(L1["arect"], "Left"))), L1["imwidth"])), 2);
    }
  }
  L1["y"] = $.idiv(($.sub($.add((await $.mv(L1["arect"], "Bottom")), (await $.mv(L1["arect"], "Top"))), L1["imheight"])), 2);
  L1["checkedrect"] = (await $.call(C, "Rect", [L1["x"], L1["y"], $.add(L1["x"], L1["imwidth"]), $.add(L1["y"], L1["imheight"])]));
  await $.stmt((await $.call(C, "UnionRect", [L1["aunionrect"], L1["checkedrect"], L1["arect"]])));
  L1["bm"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L1["r"] = 0;
  L1["oldrectrgn"] = 0;
  try {
    await $.mset((await $.mv((await $.mv(L1["bm"], "Canvas")), "Brush")), "Color", (await $.mv((await $.mv(L0["vprinter_canvas"], "Brush")), "Color")));
    await $.stmt((await $.mcall(L1["imlist"], "GetBitmap", [L1["index"], L1["bm"]])));
    if ($.truthy((await $.call(C, "EqualRect", [L1["aunionrect"], L1["arect"]])))) {
    } else {
      L1["oldrectrgn"] = (await $.call(C, "CreateRectRgn", [0, 0, (await $.mv(L0["vprinter"], "PageWidth")), (await $.mv(L0["vprinter"], "PageHeight"))]));
      L1["r"] = (await $.call(C, "GetClipRgn", [(await $.mv(L1["acanvas"], "Handle")), L1["oldrectrgn"]]));
      L1["realrect"] = L1["arect"];
      if ($.truthy((await $.and_(($.in_((await $.v(C, "pghFitGridToPageWidth")), (await $.v(C, "Options")))), async () => ($.gt(L0["gridwidth"], ($.sub(L0["realright"], L0["realleft"])))))))) {
        await $.mset(L1["realrect"], "Right", (await $.call(C, "MulDiv", [(await $.mv(L1["realrect"], "Right")), $.sub(L0["realright"], L0["realleft"]), L0["gridwidth"]])));
        await $.mset(L1["realrect"], "Left", (await $.call(C, "MulDiv", [(await $.mv(L1["realrect"], "Left")), $.sub(L0["realright"], L0["realleft"]), L0["gridwidth"]])));
        await $.mset(L1["realrect"], "Top", (await $.call(C, "MulDiv", [(await $.mv(L1["realrect"], "Top")), $.sub(L0["realright"], L0["realleft"]), L0["gridwidth"]])));
        await $.mset(L1["realrect"], "Bottom", (await $.call(C, "MulDiv", [(await $.mv(L1["realrect"], "Bottom")), $.sub(L0["realright"], L0["realleft"]), L0["gridwidth"]])));
      }
      L1["rectrgn"] = (await $.call(C, "CreateRectRgn", [(await $.mv(L1["realrect"], "Left")), (await $.mv(L1["realrect"], "Top")), (await $.mv(L1["realrect"], "Right")), (await $.mv(L1["realrect"], "Bottom"))]));
      await $.stmt((await $.call(C, "SelectClipRgn", [(await $.mv(L1["acanvas"], "Handle")), L1["rectrgn"]])));
      await $.stmt((await $.call(C, "DeleteObject", [L1["rectrgn"]])));
    }
    await $.mcall(L1["acanvas"], "Lock", []);
    try {
      {
        const $t55 = L0["vprinter"];
        const $t56 = (await $.wv([$t55], "ACanvas", { get: async () => L1["acanvas"], set: async (v) => { L1["acanvas"] = v; }, local: true }, false));
        await $.wset([$t55, $t56], "Bits", (await $.mv((await $.wv([$t55, $t56], "bm", { get: async () => L1["bm"], set: async (v) => { L1["bm"] = v; }, local: true }, false)), "Handle")), { get: async () => L1["bits"], set: async (v) => { L1["bits"] = v; }, local: true });
        await $.stmt((await $.wcall([$t55, $t56], "GetDIBSizes", [(await $.wv([$t55, $t56], "Bits", { get: async () => L1["bits"], set: async (v) => { L1["bits"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "InfoSize", { get: async () => L1["infosize"], set: async (v) => { L1["infosize"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "ImageSize", { get: async () => L1["imagesize"], set: async (v) => { L1["imagesize"] = v; }, local: true }, false))], C)));
        await $.wset([$t55, $t56], "Info", (await $.wcall([$t55, $t56], "AllocMem", [(await $.wv([$t55, $t56], "InfoSize", { get: async () => L1["infosize"], set: async (v) => { L1["infosize"] = v; }, local: true }, false))], C)), { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true });
        try {
          await $.wset([$t55, $t56], "Image", (await $.wcall([$t55, $t56], "AllocMem", [(await $.wv([$t55, $t56], "ImageSize", { get: async () => L1["imagesize"], set: async (v) => { L1["imagesize"] = v; }, local: true }, false))], C)), { get: async () => L1["image"], set: async (v) => { L1["image"] = v; }, local: true });
          try {
            await $.stmt((await $.wcall([$t55, $t56], "GetDIB", [(await $.wv([$t55, $t56], "Bits", { get: async () => L1["bits"], set: async (v) => { L1["bits"] = v; }, local: true }, false)), 0, (await $.wv([$t55, $t56], "Info", { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "Image", { get: async () => L1["image"], set: async (v) => { L1["image"] = v; }, local: true }, false))], C)));
            {
              const $t57 = (await $.mv((await $.wv([$t55, $t56], "Info", { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true }, false)), "bmiHeader"));
              await $.wset([$t55, $t56, $t57], "DIBWidth", (await $.wv([$t55, $t56, $t57], "biWidth", C, false)), { get: async () => L1["dibwidth"], set: async (v) => { L1["dibwidth"] = v; }, local: true });
              await $.wset([$t55, $t56, $t57], "DIBHeight", (await $.wv([$t55, $t56, $t57], "biHeight", C, false)), { get: async () => L1["dibheight"], set: async (v) => { L1["dibheight"] = v; }, local: true });
            }
            await $.wset([$t55, $t56], "PrintWidth", $.sub((await $.mv((await $.wv([$t55, $t56], "CheckedRect", { get: async () => L1["checkedrect"], set: async (v) => { L1["checkedrect"] = v; }, local: true }, false)), "Right")), (await $.mv((await $.wv([$t55, $t56], "CheckedRect", { get: async () => L1["checkedrect"], set: async (v) => { L1["checkedrect"] = v; }, local: true }, false)), "Left"))), { get: async () => L1["printwidth"], set: async (v) => { L1["printwidth"] = v; }, local: true });
            await $.wset([$t55, $t56], "PrintHeight", $.sub((await $.mv((await $.wv([$t55, $t56], "CheckedRect", { get: async () => L1["checkedrect"], set: async (v) => { L1["checkedrect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t55, $t56], "CheckedRect", { get: async () => L1["checkedrect"], set: async (v) => { L1["checkedrect"] = v; }, local: true }, false)), "Top"))), { get: async () => L1["printheight"], set: async (v) => { L1["printheight"] = v; }, local: true });
            await $.stmt((await $.wcall([$t55, $t56], "StretchDIBits", [(await $.mv((await $.wv([$t55, $t56], "Canvas", C, false)), "Handle")), (await $.mv((await $.wv([$t55, $t56], "CheckedRect", { get: async () => L1["checkedrect"], set: async (v) => { L1["checkedrect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t55, $t56], "CheckedRect", { get: async () => L1["checkedrect"], set: async (v) => { L1["checkedrect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t55, $t56], "PrintWidth", { get: async () => L1["printwidth"], set: async (v) => { L1["printwidth"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "PrintHeight", { get: async () => L1["printheight"], set: async (v) => { L1["printheight"] = v; }, local: true }, false)), 0, 0, (await $.wv([$t55, $t56], "DIBWidth", { get: async () => L1["dibwidth"], set: async (v) => { L1["dibwidth"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "DIBHeight", { get: async () => L1["dibheight"], set: async (v) => { L1["dibheight"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "Image", { get: async () => L1["image"], set: async (v) => { L1["image"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "Info", { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "DIB_RGB_COLORS", C, false)), (await $.wv([$t55, $t56], "SRCCOPY", C, false))], C)));
          } finally {
            await $.stmt((await $.wcall([$t55, $t56], "FreeMem", [(await $.wv([$t55, $t56], "Image", { get: async () => L1["image"], set: async (v) => { L1["image"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "ImageSize", { get: async () => L1["imagesize"], set: async (v) => { L1["imagesize"] = v; }, local: true }, false))], C)));
          }
        } finally {
          await $.stmt((await $.wcall([$t55, $t56], "FreeMem", [(await $.wv([$t55, $t56], "Info", { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true }, false)), (await $.wv([$t55, $t56], "InfoSize", { get: async () => L1["infosize"], set: async (v) => { L1["infosize"] = v; }, local: true }, false))], C)));
        }
      }
    } finally {
      await $.mcall(L1["acanvas"], "Unlock", []);
    }
    if ($.truthy($.not((await $.call(C, "EqualRect", [L1["aunionrect"], L1["arect"]]))))) {
      if ($.truthy($.eq(L1["r"], 0))) {
        await $.stmt((await $.call(C, "SelectClipRgn", [(await $.mv(L1["acanvas"], "Handle")), 0])));
      } else {
        await $.stmt((await $.call(C, "SelectClipRgn", [(await $.mv(L1["acanvas"], "Handle")), L1["oldrectrgn"]])));
      }
      await $.stmt((await $.call(C, "DeleteObject", [L1["oldrectrgn"]])));
    }
  } finally {
    await $.mcall(L1["bm"], "Free", []);
  }
  return L1.result;
});
  L0["setifneedfitwidthmapmode"] = $.fn(async function SetIfNeedFitWidthMapMode() {
  const L1 = {result: undefined, "dc": 0, "isomode": 0};
  if ($.truthy($.gt(L0["gridwidth"], ($.sub(L0["realright"], L0["realleft"]))))) {
    if ($.truthy($.eq(L0["flogpelsx2"], L0["flogpelsy2"]))) {
      L1["isomode"] = (await $.v(C, "MM_ISOTROPIC"));
    } else {
      L1["isomode"] = (await $.v(C, "MM_ANISOTROPIC"));
    }
    L1["dc"] = (await $.call(C, "SetMapMode", [(await $.mv(L0["vprinter_canvas"], "Handle")), L1["isomode"]]));
    if ($.truthy(($.eq(L1["dc"], 0)))) {
      throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", [" function SetMapMode(Handle, MM_ISOTROPIC) has returned 0 "])));
    }
    await $.stmt((await $.call(C, "SetWindowOrgEx", [(await $.mv(L0["vprinter_canvas"], "Handle")), 0, 0, null])));
    await $.stmt((await $.call(C, "SetWindowExtEx", [(await $.mv(L0["vprinter_canvas"], "Handle")), L0["gridwidth"], (await $.call(C, "Trunc", [$.fdiv($.mul(L0["gridwidth"], L0["flogpelsx2"]), L0["flogpelsy2"])])), null])));
    await $.stmt((await $.call(C, "SetViewportExtEx", [(await $.mv(L0["vprinter_canvas"], "Handle")), $.sub(L0["realright"], L0["realleft"]), (await $.call(C, "Trunc", [$.fdiv($.mul(($.sub(L0["realright"], L0["realleft"])), L0["flogpelsx2"]), L0["flogpelsy2"])])), null])));
  }
  return L1.result;
});
  L0["calcfiteddatarect"] = $.fn(async function CalcFitedDataRect() {
  const L1 = {result: undefined};
  if ($.truthy(($.in_((await $.v(C, "pghFitGridToPageWidth")), (await $.v(C, "Options")))))) {
    L0["gridwidth"] = L0["getscaledrealgridwidth"];
    L0["realright"] = (await $.mv(L0["dataprintrec"], "Right"));
    L0["realleft"] = (await $.mv(L0["dataprintrec"], "Left"));
    await $.stmt($.callv(L0["setifneedfitwidthmapmode"], []));
    if ($.truthy($.gt(L0["gridwidth"], ($.sub(L0["realright"], L0["realleft"]))))) {
      await $.mset(L0["dataprintrec"], "Right", (await $.call(C, "MulDiv", [(await $.mv(L0["dataprintrec"], "Right")), L0["gridwidth"], $.sub(L0["realright"], L0["realleft"])])));
      await $.mset(L0["dataprintrec"], "Left", (await $.call(C, "MulDiv", [(await $.mv(L0["dataprintrec"], "Left")), L0["gridwidth"], $.sub(L0["realright"], L0["realleft"])])));
      await $.mset(L0["dataprintrec"], "Top", (await $.call(C, "MulDiv", [(await $.mv(L0["dataprintrec"], "Top")), L0["gridwidth"], $.sub(L0["realright"], L0["realleft"])])));
      await $.mset(L0["dataprintrec"], "Bottom", (await $.call(C, "MulDiv", [(await $.mv(L0["dataprintrec"], "Bottom")), L0["gridwidth"], $.sub(L0["realright"], L0["realleft"])])));
    }
  }
  return L1.result;
});
  L0["printpagecolontitle"] = $.fn(async function PrintPageColontitle(p0, p1, p2) {
  const L1 = {"arect": $.copyArg(p0), "isheader": $.copyArg(p1), "calcheight": $.copyArg(p2), result: 0, "pc": null, "h": 0, "lm": 0, "lay": null};
  await $.fixArgs(L1, ["arect", "isheader", "calcheight"]);
  L1["extractmacro"] = $.fn(async function ExtractMacro(p0) {
  const L2 = {"s": $.copyArg(p0), result: '', "i": 0};
  await $.fixArgs(L2, ["s"]);
  L2["result"] = L2["s"];
  { const $t58 = await $.iset((await $.v(C, "MacroValues")), [0], (await $.call(C, "IntToStr", [(await $.mv(L0["vprinter"], "PageNumber"))]))); if ($t58 !== undefined) { await $.set(C, "MacroValues", $t58); } }
  { const $t59 = (await $.call(C, "High", [L0["macros"]]));
    L2["i"] = 0;
    let $t60 = true;
    for (;;) {
      if (!$t60) { L2["i"] = $.succ(L2["i"], 1); }
      $t60 = false;
      if (!($.ord(L2["i"]) <= $.ord($t59))) break;
      L2["result"] = (await $.call(C, "StringReplaceMacros", [L2["result"], (await $.idx(L0["macros"], [L2["i"]])), (await $.idx((await $.v(C, "MacroValues")), [L2["i"]])), [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))], "&"]));
      await $.tick();
    }
  }
  return L2.result;
});
  L1["result"] = 0;
  L1["h"] = 0;
  if ($.truthy(L1["isheader"])) {
    L1["pc"] = (await $.v(C, "PageHeader"));
    L1["lay"] = (await $.v(C, "tlTop"));
  } else {
    L1["pc"] = (await $.v(C, "PageFooter"));
    L1["lay"] = (await $.v(C, "tlBottom"));
  }
  await $.mset(L0["vprinter_canvas"], "Font", (await $.mv(L1["pc"], "Font")));
  if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
    await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
  }
  if ($.truthy(($.ne((await $.mv((await $.mv(L1["pc"], "LeftText")), "Text")), "")))) {
    L1["result"] = (await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L1["arect"], false, 0, 0, (await $.callv(L1["extractmacro"], [(await $.call(C, "GetStingListText", [(await $.mv(L1["pc"], "LeftText"))]))])), (await $.v(C, "taLeftJustify")), L1["lay"], false, false, 0, 0, (await $.or_(L1["calcheight"], async () => L0["calcinfomode"])), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))]));
  }
  if ($.truthy(($.ne((await $.mv((await $.mv(L1["pc"], "CenterText")), "Text")), "")))) {
    L1["h"] = (await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L1["arect"], false, 0, 0, (await $.callv(L1["extractmacro"], [(await $.call(C, "GetStingListText", [(await $.mv(L1["pc"], "CenterText"))]))])), (await $.v(C, "taCenter")), L1["lay"], false, false, 0, 0, (await $.or_(L1["calcheight"], async () => L0["calcinfomode"])), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))]));
  }
  if ($.truthy(($.lt(L1["result"], L1["h"])))) {
    L1["result"] = L1["h"];
  }
  if ($.truthy(($.ne((await $.mv((await $.mv(L1["pc"], "RightText")), "Text")), "")))) {
    L1["h"] = (await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L1["arect"], false, 0, 0, (await $.callv(L1["extractmacro"], [(await $.call(C, "GetStingListText", [(await $.mv(L1["pc"], "RightText"))]))])), (await $.v(C, "taRightJustify")), L1["lay"], false, false, 0, 0, (await $.or_(L1["calcheight"], async () => L0["calcinfomode"])), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))]));
  }
  if ($.truthy(($.lt(L1["result"], L1["h"])))) {
    L1["result"] = L1["h"];
  }
  if ($.truthy($.ne(L1["result"], 0))) {
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["result"], async ($t61) => { L1["result"] = $t61; }), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)]))])));
  }
  if ($.truthy(($.ne((await $.mv(L1["pc"], "LineType")), (await $.v(C, "pcltNon")))))) {
    L1["lm"] = (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)]));
  } else {
    L1["lm"] = 0;
  }
  if ($.truthy(($.eq((await $.mv(L1["pc"], "LineType")), (await $.v(C, "pcltDoubleLine")))))) {
    if ($.truthy($.not(L1["calcheight"]))) {
      if ($.truthy(L1["isheader"])) {
        await $.stmt((await $.mcall(L0["vprinter_canvas"], "MoveTo", [(await $.mv(L1["arect"], "Left")), $.sub((await $.mv(L1["arect"], "Bottom")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)])))])));
        await $.stmt((await $.mcall(L0["vprinter_canvas"], "LineTo", [(await $.mv(L1["arect"], "Right")), $.sub((await $.mv(L1["arect"], "Bottom")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)])))])));
        await $.stmt((await $.mcall(L0["vprinter_canvas"], "MoveTo", [(await $.mv(L1["arect"], "Left")), $.sub($.sub((await $.mv(L1["arect"], "Bottom")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)]))), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 30)])))])));
        await $.stmt((await $.mcall(L0["vprinter_canvas"], "LineTo", [(await $.mv(L1["arect"], "Right")), $.sub($.sub((await $.mv(L1["arect"], "Bottom")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)]))), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 30)])))])));
      } else {
        await $.stmt((await $.mcall(L0["vprinter_canvas"], "MoveTo", [(await $.mv(L1["arect"], "Left")), $.add((await $.mv(L1["arect"], "Top")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)])))])));
        await $.stmt((await $.mcall(L0["vprinter_canvas"], "LineTo", [(await $.mv(L1["arect"], "Right")), $.add((await $.mv(L1["arect"], "Top")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)])))])));
        await $.stmt((await $.mcall(L0["vprinter_canvas"], "MoveTo", [(await $.mv(L1["arect"], "Left")), $.add($.add((await $.mv(L1["arect"], "Top")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)]))), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 30)])))])));
        await $.stmt((await $.mcall(L0["vprinter_canvas"], "LineTo", [(await $.mv(L1["arect"], "Right")), $.add($.add((await $.mv(L1["arect"], "Top")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)]))), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 30)])))])));
      }
    }
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["lm"], async ($t62) => { L1["lm"] = $t62; }), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 30)]))])));
  } else {
    if ($.truthy(($.eq((await $.mv(L1["pc"], "LineType")), (await $.v(C, "pcltSingleLine")))))) {
      if ($.truthy($.not(L1["calcheight"]))) {
        if ($.truthy(L1["isheader"])) {
          await $.stmt((await $.mcall(L0["vprinter_canvas"], "MoveTo", [(await $.mv(L1["arect"], "Left")), $.sub((await $.mv(L1["arect"], "Bottom")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)])))])));
          await $.stmt((await $.mcall(L0["vprinter_canvas"], "LineTo", [(await $.mv(L1["arect"], "Right")), $.sub((await $.mv(L1["arect"], "Bottom")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)])))])));
        } else {
          await $.stmt((await $.mcall(L0["vprinter_canvas"], "MoveTo", [(await $.mv(L1["arect"], "Left")), $.add((await $.mv(L1["arect"], "Top")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)])))])));
          await $.stmt((await $.mcall(L0["vprinter_canvas"], "LineTo", [(await $.mv(L1["arect"], "Right")), $.add((await $.mv(L1["arect"], "Top")), (await $.call(C, "Trunc", [$.fdiv(L0["flogpelsy2"], 20)])))])));
        }
      }
    }
  }
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["result"], async ($t63) => { L1["result"] = $t63; }), L1["lm"]])));
  return L1.result;
});
  L0["resetprintercanvas"] = $.fn(async function ResetPrinterCanvas() {
  const L1 = {result: undefined};
  await $.mset((await $.mv(L0["vprinter_canvas"], "Pen")), "Width", L0["penw"]);
  await $.mset((await $.mv(L0["vprinter_canvas"], "BRUSH")), "Style", (await $.v(C, "bsClear")));
  await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", (await $.v(C, "clWhite")));
  await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.v(C, "DBGridEh")), "Font")));
  if ($.truthy(($.in_((await $.v(C, "pghFitGridToPageWidth")), (await $.v(C, "Options")))))) {
    await $.stmt($.callv(L0["setifneedfitwidthmapmode"], []));
  }
  return L1.result;
});
  L0["vprinter_newpage"] = $.fn(async function VPrinter_NewPage() {
  const L1 = {result: undefined};
  if ($.truthy(L0["calcinfomode"])) {
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["pagecount"], async ($t64) => { L0["pagecount"] = $t64; })])));
    await $.stmt($.callv(L0["resetprintercanvas"], []));
  } else {
    await $.mcall(L0["vprinter"], "NewPage", []);
    L0["vprinter_canvas"] = (await $.mv(L0["vprinter"], "Canvas"));
    await $.stmt($.callv(L0["resetprintercanvas"], []));
    await $.stmt((await $.callv(L0["printpagecolontitle"], [L0["titlerect"], true, false])));
    await $.stmt((await $.callv(L0["printpagecolontitle"], [L0["footerrect"], false, false])));
  }
  return L1.result;
});
  L0["calcdevicecaps"] = $.fn(async function CalcDeviceCaps() {
  const L1 = {result: undefined, "diver": 0};
  L0["fprnphysoffsetx"] = $.idiv(($.sub((await $.mv(L0["vprinter"], "FullPageWidth")), (await $.mv(L0["vprinter"], "PageWidth")))), 2);
  L0["fprnphysoffsety"] = $.idiv(($.sub((await $.mv(L0["vprinter"], "FullPageHeight")), (await $.mv(L0["vprinter"], "PageHeight")))), 2);
  L0["fprnhorsres"] = (await $.mv(L0["vprinter"], "PageWidth"));
  L0["fprnvertres"] = (await $.mv(L0["vprinter"], "PageHeight"));
  L0["flogpelsx1"] = (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Canvas")), "Handle")), (await $.v(C, "LOGPIXELSX"))]));
  L0["flogpelsy1"] = (await $.call(C, "GetDeviceCaps", [(await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Canvas")), "Handle")), (await $.v(C, "LOGPIXELSY"))]));
  if ($.truthy($.gt((await $.mv((await $.mv(L0["vprinter"], "Printers")), "Count")), 0))) {
    L0["flogpelsx2"] = (await $.call(C, "GetDeviceCaps", [(await $.mv(L0["vprinter"], "Handle")), (await $.v(C, "LOGPIXELSX"))]));
    L0["flogpelsy2"] = (await $.call(C, "GetDeviceCaps", [(await $.mv(L0["vprinter"], "Handle")), (await $.v(C, "LOGPIXELSY"))]));
  } else {
    L0["flogpelsx2"] = (await $.v(C, "DefaultPrinterPixelsPerInchX"));
    L0["flogpelsy2"] = (await $.v(C, "DefaultPrinterPixelsPerInchY"));
  }
  if ($.truthy(($.gt(L0["flogpelsx1"], L0["flogpelsx2"])))) {
    L0["fscalex"] = ($.fdiv(L0["flogpelsx1"], L0["flogpelsx2"]));
  } else {
    L0["fscalex"] = ($.fdiv(L0["flogpelsx2"], L0["flogpelsx1"]));
  }
  if ($.truthy(($.gt(L0["flogpelsy1"], L0["flogpelsy2"])))) {
    L0["fscaley"] = ($.fdiv(L0["flogpelsy1"], L0["flogpelsy2"]));
  } else {
    L0["fscaley"] = ($.fdiv(L0["flogpelsy2"], L0["flogpelsy1"]));
  }
  if ($.truthy($.eq((await $.v(C, "Units")), (await $.v(C, "MM"))))) {
    L1["diver"] = 2.54;
  } else {
    L1["diver"] = 1;
  }
  await $.mset(L0["dataprintrec"], "Left", $.sub((await $.call(C, "Round", [$.fdiv($.mul(L0["flogpelsx2"], (await $.mv((await $.v(C, "Page")), "LeftMargin"))), L1["diver"])])), L0["fprnphysoffsetx"]));
  await $.mset(L0["dataprintrec"], "Top", $.sub((await $.call(C, "Round", [$.fdiv($.mul(L0["flogpelsy2"], (await $.mv((await $.v(C, "Page")), "TopMargin"))), L1["diver"])])), L0["fprnphysoffsety"]));
  await $.mset(L0["dataprintrec"], "Right", $.add($.sub(L0["fprnhorsres"], (await $.call(C, "Round", [$.fdiv($.mul(L0["flogpelsx2"], (await $.mv((await $.v(C, "Page")), "RightMargin"))), L1["diver"])]))), L0["fprnphysoffsetx"]));
  await $.mset(L0["dataprintrec"], "Bottom", $.add($.sub(L0["fprnvertres"], (await $.call(C, "Round", [$.fdiv($.mul(L0["flogpelsy2"], (await $.mv((await $.v(C, "Page")), "BottomMargin"))), L1["diver"])]))), L0["fprnphysoffsety"]));
  L0["psx1"] = (await $.call(C, "Round", [L0["fscalex"]]));
  L0["psx2"] = (await $.call(C, "Round", [$.mul(L0["fscalex"], 2)]));
  if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "Flat")))) {
    L0["psy1"] = (await $.call(C, "Round", [$.fdiv(L0["fscaley"], 2)]));
    L0["psy2"] = (await $.call(C, "Round", [L0["fscaley"]]));
  } else {
    L0["psy1"] = (await $.call(C, "Round", [L0["fscaley"]]));
    L0["psy2"] = (await $.call(C, "Round", [$.mul(L0["fscaley"], 2)]));
  }
  L0["penw"] = (await $.call(C, "Trunc", [$.fdiv(($.add(L0["flogpelsx2"], L0["flogpelsy2"])), 200)]));
  return L1.result;
});
  L0["getfootervalue"] = $.fn(async function GetFooterValue(p0, p1) {
  const L1 = {"row": $.copyArg(p0), "col": $.copyArg(p1), result: '', "fmtstr": '', "format": null, "digits": 0, "v": null, "field": null, "footer": null};
  await $.fixArgs(L1, ["row", "col"]);
  L1["result"] = "";
  L1["footer"] = (await $.mcall((await $.idx(L0["prncolumns"], [L1["col"]])), "UsedFooter", [L1["row"]]));
  { const $t65 = (await $.mv(L1["footer"], "ValueType"));
    if ($.eq($t65, (await $.v(C, "fvtSum")))) {
      if ($.truthy($.ne((await $.mv(L1["footer"], "FieldName")), ""))) {
        L1["field"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "FindField", [(await $.mv(L1["footer"], "FieldName"))]));
      } else {
        L1["field"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "FindField", [(await $.mv((await $.idx(L0["prncolumns"], [L1["col"]])), "FieldName"))]));
      }
      if ($.truthy($.eq(L1["field"], null))) {
        return L1.result;
      }
      {
        const $t66 = L1["field"];
        await $.wset([$t66], "v", (await $.idx((await $.wv([$t66], "FooterValues", { get: async () => L0["footervalues"], set: async (v) => { L0["footervalues"] = v; }, local: true }, false)), [$.add($.mul((await $.wv([$t66], "Row", { get: async () => L1["row"], set: async (v) => { L1["row"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t66], "PrnColumns", { get: async () => L0["prncolumns"], set: async (v) => { L0["prncolumns"] = v; }, local: true }, false)), "Count"))), (await $.wv([$t66], "Col", { get: async () => L1["col"], set: async (v) => { L1["col"] = v; }, local: true }, false)))])), { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true });
        { const $t67 = (await $.wv([$t66], "DataType", C, false));
          if ($.eq($t67, (await $.wv([$t66], "ftSmallint", C, false))) || $.eq($t67, (await $.wv([$t66], "ftInteger", C, false))) || $.eq($t67, (await $.wv([$t66], "ftAutoInc", C, false))) || $.eq($t67, (await $.wv([$t66], "ftWord", C, false)))) {
            if ($.truthy($.ne((await $.mv((await $.wv([$t66], "Footer", { get: async () => L1["footer"], set: async (v) => { L1["footer"] = v; }, local: true }, false)), "DisplayFormat")), ""))) {
              await $.wset([$t66], "Result", (await $.wcall([$t66], "FormatFloat", [(await $.mv((await $.wv([$t66], "Footer", { get: async () => L1["footer"], set: async (v) => { L1["footer"] = v; }, local: true }, false)), "DisplayFormat")), (await $.wv([$t66], "v", { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
            } else {
              {
                const $t68 = (await $.wv([$t66], "Field", { get: async () => L1["field"], set: async (v) => { L1["field"] = v; }, local: true }, false));
                await $.wset([$t66, $t68], "FmtStr", (await $.wv([$t66, $t68], "DisplayFormat", C, false)), { get: async () => L1["fmtstr"], set: async (v) => { L1["fmtstr"] = v; }, local: true });
                if ($.truthy($.eq((await $.wv([$t66, $t68], "FmtStr", { get: async () => L1["fmtstr"], set: async (v) => { L1["fmtstr"] = v; }, local: true }, false)), ""))) {
                  await $.stmt((await $.wcall([$t66, $t68], "Str", [(await $.wcall([$t66, $t68], "Integer", [(await $.wv([$t66, $t68], "v", { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true }, false))], C)), $.ref(async () => (await $.wv([$t66, $t68], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), async ($t69) => { await $.wset([$t66, $t68], "Result", $t69, { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }); })], C)));
                } else {
                  await $.wset([$t66, $t68], "Result", (await $.wcall([$t66, $t68], "FormatFloat", [(await $.wv([$t66, $t68], "FmtStr", { get: async () => L1["fmtstr"], set: async (v) => { L1["fmtstr"] = v; }, local: true }, false)), (await $.wv([$t66, $t68], "v", { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
                }
              }
            }
          }
          else if ($.eq($t67, (await $.wv([$t66], "ftBCD", C, false)))) {
            if ($.truthy($.ne((await $.mv((await $.wv([$t66], "Footer", { get: async () => L1["footer"], set: async (v) => { L1["footer"] = v; }, local: true }, false)), "DisplayFormat")), ""))) {
              await $.wset([$t66], "Result", (await $.wcall([$t66], "FormatFloat", [(await $.mv((await $.wv([$t66], "Footer", { get: async () => L1["footer"], set: async (v) => { L1["footer"] = v; }, local: true }, false)), "DisplayFormat")), (await $.wv([$t66], "v", { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
            } else {
              {
                const $t70 = (await $.wv([$t66], "Field", { get: async () => L1["field"], set: async (v) => { L1["field"] = v; }, local: true }, false));
                await $.wset([$t66, $t70], "FmtStr", (await $.wv([$t66, $t70], "DisplayFormat", C, false)), { get: async () => L1["fmtstr"], set: async (v) => { L1["fmtstr"] = v; }, local: true });
                if ($.truthy($.eq((await $.wv([$t66, $t70], "FmtStr", { get: async () => L1["fmtstr"], set: async (v) => { L1["fmtstr"] = v; }, local: true }, false)), ""))) {
                  if ($.truthy((await $.wv([$t66, $t70], "Currency", C, false)))) {
                    await $.wset([$t66, $t70], "Format", (await $.wv([$t66, $t70], "ffCurrency", C, false)), { get: async () => L1["format"], set: async (v) => { L1["format"] = v; }, local: true });
                    await $.wset([$t66, $t70], "Digits", (await $.wv([$t66, $t70], "CurrencyDecimals", C, false)), { get: async () => L1["digits"], set: async (v) => { L1["digits"] = v; }, local: true });
                  } else {
                    await $.wset([$t66, $t70], "Format", (await $.wv([$t66, $t70], "ffGeneral", C, false)), { get: async () => L1["format"], set: async (v) => { L1["format"] = v; }, local: true });
                    await $.wset([$t66, $t70], "Digits", 0, { get: async () => L1["digits"], set: async (v) => { L1["digits"] = v; }, local: true });
                  }
                  await $.wset([$t66, $t70], "Result", (await $.wcall([$t66, $t70], "CurrToStrF", [(await $.wv([$t66, $t70], "v", { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true }, false)), (await $.wv([$t66, $t70], "Format", { get: async () => L1["format"], set: async (v) => { L1["format"] = v; }, local: true }, false)), (await $.wv([$t66, $t70], "Digits", { get: async () => L1["digits"], set: async (v) => { L1["digits"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
                } else {
                  await $.wset([$t66, $t70], "Result", (await $.wcall([$t66, $t70], "FormatCurr", [(await $.wv([$t66, $t70], "FmtStr", { get: async () => L1["fmtstr"], set: async (v) => { L1["fmtstr"] = v; }, local: true }, false)), (await $.wv([$t66, $t70], "v", { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
                }
              }
            }
          }
          else if ($.eq($t67, (await $.wv([$t66], "ftFloat", C, false))) || $.eq($t67, (await $.wv([$t66], "ftCurrency", C, false)))) {
            if ($.truthy($.ne((await $.mv((await $.wv([$t66], "Footer", { get: async () => L1["footer"], set: async (v) => { L1["footer"] = v; }, local: true }, false)), "DisplayFormat")), ""))) {
              await $.wset([$t66], "Result", (await $.wcall([$t66], "FormatFloat", [(await $.mv((await $.wv([$t66], "Footer", { get: async () => L1["footer"], set: async (v) => { L1["footer"] = v; }, local: true }, false)), "DisplayFormat")), (await $.wv([$t66], "v", { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
            } else {
              {
                const $t71 = (await $.wv([$t66], "Field", { get: async () => L1["field"], set: async (v) => { L1["field"] = v; }, local: true }, false));
                await $.wset([$t66, $t71], "FmtStr", (await $.wv([$t66, $t71], "DisplayFormat", C, false)), { get: async () => L1["fmtstr"], set: async (v) => { L1["fmtstr"] = v; }, local: true });
                if ($.truthy($.eq((await $.wv([$t66, $t71], "FmtStr", { get: async () => L1["fmtstr"], set: async (v) => { L1["fmtstr"] = v; }, local: true }, false)), ""))) {
                  if ($.truthy((await $.wv([$t66, $t71], "Currency", C, false)))) {
                    await $.wset([$t66, $t71], "Format", (await $.wv([$t66, $t71], "ffCurrency", C, false)), { get: async () => L1["format"], set: async (v) => { L1["format"] = v; }, local: true });
                    await $.wset([$t66, $t71], "Digits", (await $.wv([$t66, $t71], "CurrencyDecimals", C, false)), { get: async () => L1["digits"], set: async (v) => { L1["digits"] = v; }, local: true });
                  } else {
                    await $.wset([$t66, $t71], "Format", (await $.wv([$t66, $t71], "ffGeneral", C, false)), { get: async () => L1["format"], set: async (v) => { L1["format"] = v; }, local: true });
                    await $.wset([$t66, $t71], "Digits", 0, { get: async () => L1["digits"], set: async (v) => { L1["digits"] = v; }, local: true });
                  }
                  await $.wset([$t66, $t71], "Result", (await $.wcall([$t66, $t71], "FloatToStrF", [(await $.wv([$t66, $t71], "v", { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true }, false)), (await $.wv([$t66, $t71], "Format", { get: async () => L1["format"], set: async (v) => { L1["format"] = v; }, local: true }, false)), (await $.wv([$t66, $t71], "Precision", C, false)), (await $.wv([$t66, $t71], "Digits", { get: async () => L1["digits"], set: async (v) => { L1["digits"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
                } else {
                  await $.wset([$t66, $t71], "Result", (await $.wcall([$t66, $t71], "FormatFloat", [(await $.wv([$t66, $t71], "FmtStr", { get: async () => L1["fmtstr"], set: async (v) => { L1["fmtstr"] = v; }, local: true }, false)), (await $.wv([$t66, $t71], "v", { get: async () => L1["v"], set: async (v) => { L1["v"] = v; }, local: true }, false))], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
                }
              }
            }
          }
        }
      }
    }
    else if ($.eq($t65, (await $.v(C, "fvtCount")))) {
      if ($.truthy($.ne((await $.mv(L1["footer"], "DisplayFormat")), ""))) {
        L1["result"] = (await $.call(C, "FormatFloat", [(await $.mv(L1["footer"], "DisplayFormat")), (await $.idx(L0["footervalues"], [$.add($.mul(L1["row"], (await $.mv(L0["prncolumns"], "Count"))), L1["col"])]))]));
      } else {
        L1["result"] = (await $.call(C, "FloatToStr", [(await $.idx(L0["footervalues"], [$.add($.mul(L1["row"], (await $.mv(L0["prncolumns"], "Count"))), L1["col"])]))]));
      }
    }
  }
  return L1.result;
});
  L0["drawcell"] = $.fn(async function DrawCell(p0, p1, p2, p3) {
  const L1 = {"acol": $.copyArg(p0), "arect": $.copyArg(p1), "apbmfrom": $.asRef(p2), "calcrect": $.copyArg(p3), result: 0, "curcolumn": null, "newbackgrnd": 0, "aalignment": null, "value": '', "bm": null, "dr": null, "arect1": null, "oldcolor": 0, "stretch": false, "footer": null};
  await $.fixArgs(L1, ["acol", "arect", "calcrect"]);
  L1["checkboxflags"] = [(await $.v(C, "DFCS_BUTTONCHECK")), (await $.or_((await $.v(C, "DFCS_BUTTONCHECK")), async () => (await $.v(C, "DFCS_CHECKED")))), (await $.or_((await $.v(C, "DFCS_BUTTON3STATE")), async () => (await $.v(C, "DFCS_CHECKED"))))];
  L1["result"] = 0;
  L1["curcolumn"] = (await $.idx(L0["prncolumns"], [L1["acol"]]));
  L1["newbackgrnd"] = (await $.v(C, "clWhite"));
  L1["arect1"] = L1["arect"];
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L1["arect"], "Left")), async ($t72) => { await $.mset(L1["arect"], "Left", $t72); }), L0["psx2"]])));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L1["arect"], "Top")), async ($t73) => { await $.mset(L1["arect"], "Top", $t73); }), L0["psy2"]])));
  await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.mv(L1["arect"], "Right")), async ($t74) => { await $.mset(L1["arect"], "Right", $t74); }), L0["psx2"]])));
  await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.mv(L1["arect"], "Bottom")), async ($t75) => { await $.mset(L1["arect"], "Bottom", $t75); }), L0["psy2"]])));
  if ($.truthy(L1["calcrect"])) {
    L1["stretch"] = $.in_((await $.v(C, "pghRowAutoStretch")), (await $.v(C, "Options")));
  } else {
    L1["stretch"] = L0["awordwrap"];
  }
  if ($.truthy((await $.mv((await L1["apbmfrom"].get()), "InDS")))) {
    if ($.truthy($.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))))) {
      L1["newbackgrnd"] = (await $.mv(L1["curcolumn"], "Color"));
    }
    await $.mset(L0["vprinter_canvas"], "Font", (await $.mv(L1["curcolumn"], "Font")));
    if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
      await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
    }
    await $.stmt((await $.mcall(L1["curcolumn"], "FillColCellParams", [(await $.v(C, "FColCellParamsEh"))])));
    {
      const $t76 = (await $.call(C, "TColCellParamsEhCracker", [(await $.v(C, "FColCellParamsEh"))]));
      await $.wset([$t76], "FFont", (await $.mv((await $.wv([$t76], "VPrinter_Canvas", { get: async () => L0["vprinter_canvas"], set: async (v) => { L0["vprinter_canvas"] = v; }, local: true }, false)), "Font")), C);
      await $.wset([$t76], "FBackground", (await $.wv([$t76], "NewBackgrnd", { get: async () => L1["newbackgrnd"], set: async (v) => { L1["newbackgrnd"] = v; }, local: true }, false)), C);
      if ($.truthy((await $.wcall([$t76], "Assigned", [(await $.mv((await $.wv([$t76], "DBGridEh", C, false)), "OnGetCellParams"))], C)))) {
        await $.stmt((await $.mcall((await $.wv([$t76], "DBGridEh", C, false)), "OnGetCellParams", [(await $.wv([$t76], "DBGridEh", C, false)), (await $.wv([$t76], "CurColumn", { get: async () => L1["curcolumn"], set: async (v) => { L1["curcolumn"] = v; }, local: true }, false)), (await $.wv([$t76], "FFont", C, false)), (await $.wv([$t76], "FBackground", C, false)), (await $.wv([$t76], "FState", C, false))])));
      }
    }
    await $.stmt((await $.mcall(L1["curcolumn"], "GetColCellParams", [false, (await $.v(C, "FColCellParamsEh"))])));
    await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", (await $.mv((await $.v(C, "FColCellParamsEh")), "Background")));
    if ($.truthy((await $.and_((await $.and_($.not(L1["calcrect"]), async () => ($.ne((await $.mv((await $.mv(L0["vprinter_canvas"], "Brush")), "Color")), (await $.v(C, "clWhite")))))), async () => $.not(L0["calcinfomode"]))))) {
      L1["oldcolor"] = (await $.mv((await $.mv(L0["vprinter_canvas"], "Pen")), "Color"));
      await $.mset((await $.mv(L0["vprinter_canvas"], "Pen")), "Color", (await $.mv((await $.mv(L0["vprinter_canvas"], "Brush")), "Color")));
      await $.stmt((await $.mcall(L0["vprinter_canvas"], "Rectangle", [(await $.mv(L1["arect1"], "Left")), (await $.mv(L1["arect1"], "Top")), (await $.mv(L1["arect1"], "Right")), (await $.mv(L1["arect1"], "Bottom"))])));
      await $.mset((await $.mv(L0["vprinter_canvas"], "Pen")), "Color", L1["oldcolor"]);
    }
    if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv(L1["curcolumn"], "GetColumnType")), (await $.v(C, "ctCheckboxes")))), async () => $.not(L1["calcrect"]))), async () => $.not(L0["calcinfomode"]))))) {
      await $.mset(L1["dr"], "Left", $.add((await $.mv(L1["arect"], "Left")), (await $.call(C, "iif", [$.lt($.sub((await $.mv(L1["arect"], "Right")), (await $.mv(L1["arect"], "Left"))), (await $.call(C, "Trunc", [$.mul((await $.v(C, "FCheckBoxWidth")), L0["fscalex"])]))), 0, $.sub($.shr(($.sub((await $.mv(L1["arect"], "Right")), (await $.mv(L1["arect"], "Left")))), 1), $.shr((await $.call(C, "Trunc", [$.mul((await $.v(C, "FCheckBoxWidth")), L0["fscalex"])])), 1))]))));
      await $.mset(L1["dr"], "Right", (await $.call(C, "iif", [$.lt($.sub((await $.mv(L1["arect"], "Right")), (await $.mv(L1["arect"], "Left"))), (await $.call(C, "Trunc", [$.mul((await $.v(C, "FCheckBoxWidth")), L0["fscalex"])]))), (await $.mv(L1["arect"], "Right")), $.add((await $.mv(L1["dr"], "Left")), (await $.call(C, "Trunc", [$.mul((await $.v(C, "FCheckBoxWidth")), L0["fscalex"])])))])));
      await $.mset(L1["dr"], "Top", $.add((await $.mv(L1["arect"], "Top")), (await $.call(C, "iif", [$.lt($.sub((await $.mv(L1["arect"], "Bottom")), (await $.mv(L1["arect"], "Top"))), (await $.call(C, "Trunc", [$.mul((await $.v(C, "FCheckBoxHeight")), L0["fscaley"])]))), 0, $.sub($.shr(($.sub((await $.mv(L1["arect"], "Bottom")), (await $.mv(L1["arect"], "Top")))), 1), $.shr((await $.call(C, "Trunc", [$.mul((await $.v(C, "FCheckBoxHeight")), L0["fscaley"])])), 1))]))));
      await $.mset(L1["dr"], "Bottom", (await $.call(C, "iif", [$.lt($.sub((await $.mv(L1["arect"], "Bottom")), (await $.mv(L1["arect"], "Top"))), (await $.call(C, "Trunc", [$.mul((await $.v(C, "FCheckBoxHeight")), L0["fscaley"])]))), (await $.mv(L1["arect"], "Bottom")), $.add((await $.mv(L1["dr"], "Top")), (await $.call(C, "Trunc", [$.mul((await $.v(C, "FCheckBoxHeight")), L0["fscaley"])])))])));
      await $.stmt((await $.call(C, "DrawFrameControl", [(await $.mv(L0["vprinter_canvas"], "Handle")), L1["dr"], (await $.v(C, "DFC_BUTTON")), (await $.idx(L1["checkboxflags"], [(await $.mv((await $.v(C, "FColCellParamsEh")), "CheckboxState"))]))])));
    } else {
      if ($.truthy((await $.and_(($.eq((await $.mv(L1["curcolumn"], "GetColumnType")), (await $.v(C, "ctKeyImageList")))), async () => $.not(L1["calcrect"]))))) {
        L1["bm"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
        try {
          await $.stmt((await $.mcall((await $.mv(L1["curcolumn"], "ImageList")), "GetBitmap", [(await $.mv((await $.v(C, "FColCellParamsEh")), "ImageIndex")), L1["bm"]])));
        } finally {
        }
        L1["dr"] = (await $.call(C, "Rect", [0, 0, (await $.call(C, "Trunc", [$.mul((await $.mv((await $.mv(L1["curcolumn"], "ImageList")), "Height")), L0["fscaley"])])), (await $.call(C, "Trunc", [$.mul((await $.mv((await $.mv(L1["curcolumn"], "ImageList")), "Width")), L0["fscalex"])]))]));
        await $.mset(L1["dr"], "Left", $.sub($.add((await $.mv(L1["arect"], "Left")), $.idiv(($.sub((await $.mv(L1["arect"], "Right")), (await $.mv(L1["arect"], "Left")))), 2)), $.idiv((await $.mv(L1["dr"], "Right")), 2)));
        await $.mset(L1["dr"], "Right", $.add((await $.mv(L1["dr"], "Right")), (await $.mv(L1["dr"], "Left"))));
        await $.mset(L1["dr"], "Top", $.sub($.add((await $.mv(L1["arect"], "Top")), $.idiv(($.sub((await $.mv(L1["arect"], "Bottom")), (await $.mv(L1["arect"], "Top")))), 2)), $.idiv((await $.mv(L1["dr"], "Bottom")), 2)));
        await $.mset(L1["dr"], "Bottom", $.add((await $.mv(L1["dr"], "Bottom")), (await $.mv(L1["dr"], "Top"))));
        await $.stmt((await $.callv(L0["drawclipped"], [(await $.mv(L1["curcolumn"], "ImageList")), L0["vprinter_canvas"], L1["arect1"], (await $.mv((await $.v(C, "FColCellParamsEh")), "ImageIndex")), (await $.v(C, "taCenter"))])));
        await $.mcall(L1["bm"], "Free", []);
      } else {
        L1["result"] = $.add((await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L1["arect"], false, 0, 0, (await $.mv((await $.v(C, "FColCellParamsEh")), "Text")), (await $.mv((await $.v(C, "FColCellParamsEh")), "Alignment")), (await $.v(C, "tlTop")), L1["stretch"], (await $.mv(L1["curcolumn"], "EndEllipsis")), 0, 0, (await $.or_(L1["calcrect"], async () => L0["calcinfomode"])), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))])), $.mul(L0["psy2"], 2));
      }
    }
  } else {
    if ($.truthy($.eq((await $.mv((await L1["apbmfrom"].get()), "bm")), ""))) {
      return L1.result;
    }
    L1["footer"] = (await $.mcall(L1["curcolumn"], "UsedFooter", [(await $.call(C, "StrToInt", [(await $.mv((await L1["apbmfrom"].get()), "bm"))]))]));
    L1["aalignment"] = (await $.mv(L1["footer"], "Alignment"));
    if ($.truthy($.in_((await $.mv(L1["footer"], "ValueType")), [(await $.v(C, "fvtSum")), (await $.v(C, "fvtCount"))]))) {
      L1["value"] = (await $.callv(L0["getfootervalue"], [(await $.call(C, "StrToInt", [(await $.mv((await L1["apbmfrom"].get()), "bm"))])), L1["acol"]]));
    } else {
      L1["value"] = (await $.mcall((await $.v(C, "DBGridEh")), "GetFooterValue", [(await $.call(C, "StrToInt", [(await $.mv((await L1["apbmfrom"].get()), "bm"))])), L1["curcolumn"]]));
    }
    if ($.truthy($.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))))) {
      L1["newbackgrnd"] = (await $.mv(L1["footer"], "Color"));
    }
    await $.mset(L0["vprinter_canvas"], "Font", (await $.mv(L1["footer"], "Font")));
    if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
      await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
    }
    if ($.truthy((await $.call(C, "Assigned", [(await $.mv((await $.v(C, "DBGridEh")), "OnGetFooterParams"))])))) {
      await $.stmt((await $.mcall((await $.v(C, "DBGridEh")), "OnGetFooterParams", [(await $.v(C, "DBGridEh")), (await $.mv(L1["curcolumn"], "Index")), (await $.call(C, "StrToInt", [(await $.mv((await L1["apbmfrom"].get()), "bm"))])), L1["curcolumn"], (await $.mv(L0["vprinter_canvas"], "Font")), L1["newbackgrnd"], L1["aalignment"], [], L1["value"]])));
    }
    await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", L1["newbackgrnd"]);
    if ($.truthy((await $.and_((await $.and_($.not(L1["calcrect"]), async () => ($.ne((await $.mv((await $.mv(L0["vprinter_canvas"], "Brush")), "Color")), (await $.v(C, "clWhite")))))), async () => $.not(L0["calcinfomode"]))))) {
      L1["oldcolor"] = (await $.mv((await $.mv(L0["vprinter_canvas"], "Pen")), "Color"));
      await $.mset((await $.mv(L0["vprinter_canvas"], "Pen")), "Color", (await $.mv((await $.mv(L0["vprinter_canvas"], "Brush")), "Color")));
      await $.stmt((await $.mcall(L0["vprinter_canvas"], "Rectangle", [(await $.mv(L1["arect1"], "Left")), (await $.mv(L1["arect1"], "Top")), (await $.mv(L1["arect1"], "Right")), (await $.mv(L1["arect1"], "Bottom"))])));
      await $.mset((await $.mv(L0["vprinter_canvas"], "Pen")), "Color", L1["oldcolor"]);
    }
    L1["result"] = $.add((await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L1["arect"], false, 0, 0, L1["value"], L1["aalignment"], (await $.v(C, "tlTop")), L1["stretch"], (await $.mv(L1["footer"], "EndEllipsis")), 0, 0, (await $.or_(L1["calcrect"], async () => L0["calcinfomode"])), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))])), $.mul(L0["psy2"], 2));
  }
  return L1.result;
});
  L0["calcfootervalues"] = $.fn(async function CalcFooterValues() {
  const L1 = {result: undefined, "i": 0, "j": 0, "field": null, "footer": null};
  { const $t77 = $.sub((await $.mv((await $.v(C, "DBGridEh")), "FooterRowCount")), 1);
    L1["i"] = 0;
    let $t78 = true;
    for (;;) {
      if (!$t78) { L1["i"] = $.succ(L1["i"], 1); }
      $t78 = false;
      if (!($.ord(L1["i"]) <= $.ord($t77))) break;
      { const $t79 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
        L1["j"] = 0;
        let $t80 = true;
        for (;;) {
          if (!$t80) { L1["j"] = $.succ(L1["j"], 1); }
          $t80 = false;
          if (!($.ord(L1["j"]) <= $.ord($t79))) break;
          L1["footer"] = (await $.mcall((await $.idx(L0["prncolumns"], [L1["j"]])), "UsedFooter", [L1["i"]]));
          if ($.truthy($.ne((await $.mv(L1["footer"], "FieldName")), ""))) {
            L1["field"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "FindField", [(await $.mv(L1["footer"], "FieldName"))]));
          } else {
            L1["field"] = (await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "FindField", [(await $.mv((await $.idx(L0["prncolumns"], [L1["j"]])), "FieldName"))]));
          }
          if ($.truthy($.eq(L1["field"], null))) {
            continue;
          }
          { const $t81 = (await $.mv(L1["footer"], "ValueType"));
            if ($.eq($t81, (await $.v(C, "fvtSum")))) {
              if ($.truthy(($.eq((await $.mv(L1["field"], "IsNull")), false)))) {
                { const $t82 = await $.iset(L0["footervalues"], [$.add($.mul(L1["i"], (await $.mv(L0["prncolumns"], "Count"))), L1["j"])], $.add((await $.idx(L0["footervalues"], [$.add($.mul(L1["i"], (await $.mv(L0["prncolumns"], "Count"))), L1["j"])])), (await $.mv(L1["field"], "AsFloat")))); if ($t82 !== undefined) { L0["footervalues"] = $t82; } }
              }
            }
            else if ($.eq($t81, (await $.v(C, "fvtCount")))) {
              { const $t83 = await $.iset(L0["footervalues"], [$.add($.mul(L1["i"], (await $.mv(L0["prncolumns"], "Count"))), L1["j"])], $.add((await $.idx(L0["footervalues"], [$.add($.mul(L1["i"], (await $.mv(L0["prncolumns"], "Count"))), L1["j"])])), 1)); if ($t83 !== undefined) { L0["footervalues"] = $t83; } }
            }
          }
          await $.tick();
        }
      }
      await $.tick();
    }
  }
  return L1.result;
});
  L0["calcprintrows"] = $.fn(async function CalcPrintRows(p0, p1, p2) {
  const L1 = {"apbmfrom": $.copyArg(p0), "prntop": $.copyArg(p1), "prnbottom": $.copyArg(p2), result: $.rec("tpolybookmark"), "i": 0, "rh": 0, "ch": 0, "cpos": 0, "hlimit": 0, "r": null};
  await $.fixArgs(L1, ["apbmfrom", "prntop", "prnbottom"]);
  await $.mcall(L0["prnrowheights"], "Clear", []);
  await $.stmt((await $.callv(L0["gotopolybookmark"], [L1["apbmfrom"]])));
  L1["result"] = L1["apbmfrom"];
  L1["cpos"] = L1["prntop"];
  L1["hlimit"] = L1["prnbottom"];
  while ($.truthy(true)) {
    L1["ch"] = 0;
    { const $t84 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
      L1["i"] = 0;
      let $t85 = true;
      for (;;) {
        if (!$t85) { L1["i"] = $.succ(L1["i"], 1); }
        $t85 = false;
        if (!($.ord(L1["i"]) <= $.ord($t84))) break;
        await $.stmt((await $.call(C, "SetRect", [L1["r"], 0, 0, 0, 0])));
        await $.mset(L1["r"], "Right", (await $.call(C, "Integer", [(await $.idx(L0["prncolwidths"], [L1["i"]]))])));
        L1["rh"] = (await $.callv(L0["drawcell"], [L1["i"], L1["r"], L1["apbmfrom"], true]));
        if ($.truthy($.lt(L1["ch"], L1["rh"]))) {
          L1["ch"] = L1["rh"];
        }
        await $.tick();
      }
    }
    if ($.truthy($.lt(L1["ch"], L0["minrowheight"]))) {
      L1["ch"] = L0["minrowheight"];
    }
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["cpos"], async ($t86) => { L1["cpos"] = $t86; }), L1["ch"]])));
    if ($.truthy((await $.or_(($.gt(L1["cpos"], L1["hlimit"])), async () => (await $.mv(L1["apbmfrom"], "EOF")))))) {
      L1["result"] = L1["apbmfrom"];
      return L1.result;
    }
    if ($.truthy((await $.mv(L1["apbmfrom"], "InDS")))) {
      await $.stmt($.callv(L0["calcfootervalues"], []));
    }
    L1["result"] = L1["apbmfrom"];
    await $.stmt((await $.callv(L0["setnextpolybookmark"], [L1["apbmfrom"]])));
    await $.stmt((await $.mcall(L0["prnrowheights"], "Add", [(await $.call(C, "Pointer", [L1["ch"]]))])));
    await $.tick();
  }
  return L1.result;
});
  L0["printgridtitletextheight"] = $.fn(async function PrintGridTitleTextHeight(p0, p1) {
  const L1 = {"fromcol": $.copyArg(p0), "tocol": $.copyArg(p1), result: undefined, "r": null, "i": 0, "lm": 0, "rm": 0, "tm": 0};
  await $.fixArgs(L1, ["fromcol", "tocol"]);
  L1["r"] = (await $.call(C, "Rect", [(await $.mv(L0["dataprintrec"], "Left")), $.add($.sub($.sub((await $.mv(L0["dataprintrec"], "Top")), L0["prntitleh"]), L0["prntitletexth"]), L0["printoffset"]), (await $.mv(L0["dataprintrec"], "Left")), $.add($.sub((await $.mv(L0["dataprintrec"], "Top")), L0["prntitleh"]), L0["printoffset"])]));
  { const $t87 = L1["tocol"];
    L1["i"] = L1["fromcol"];
    let $t88 = true;
    for (;;) {
      if (!$t88) { L1["i"] = $.succ(L1["i"], 1); }
      $t88 = false;
      if (!($.ord(L1["i"]) <= $.ord($t87))) break;
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L1["r"], "Right")), async ($t89) => { await $.mset(L1["r"], "Right", $t89); }), (await $.call(C, "Integer", [(await $.idx(L0["prncolwidths"], [L1["i"]]))]))])));
      await $.tick();
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "Title")), "Text")), "")))) {
    await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.v(C, "DBGridEh")), "TitleFont")));
    if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
      await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
    }
    L1["r"] = (await $.call(C, "Rect", [(await $.mv(L0["dataprintrec"], "Left")), $.add($.sub($.sub((await $.mv(L0["dataprintrec"], "Top")), L0["prntitleh"]), L0["prntitletexth"]), L0["printoffset"]), (await $.mv(L1["r"], "Right")), $.add($.sub((await $.mv(L0["dataprintrec"], "Top")), L0["prntitleh"]), L0["printoffset"])]));
    L1["lm"] = L0["psx2"];
    L1["rm"] = L0["psx2"];
    { const $t90 = $.sub(L1["fromcol"], 1);
      L1["i"] = 0;
      let $t91 = true;
      for (;;) {
        if (!$t91) { L1["i"] = $.succ(L1["i"], 1); }
        $t91 = false;
        if (!($.ord(L1["i"]) <= $.ord($t90))) break;
        await $.stmt((await $.call(C, "Dec", [$.ref(async () => L1["lm"], async ($t92) => { L1["lm"] = $t92; }), (await $.call(C, "Integer", [(await $.idx(L0["prncolwidths"], [L1["i"]]))]))])));
        await $.tick();
      }
    }
    { const $t93 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
      L1["i"] = $.add(L1["tocol"], 1);
      let $t94 = true;
      for (;;) {
        if (!$t94) { L1["i"] = $.succ(L1["i"], 1); }
        $t94 = false;
        if (!($.ord(L1["i"]) <= $.ord($t93))) break;
        await $.stmt((await $.call(C, "Dec", [$.ref(async () => L1["rm"], async ($t95) => { L1["rm"] = $t95; }), (await $.call(C, "Integer", [(await $.idx(L0["prncolwidths"], [L1["i"]]))]))])));
        await $.tick();
      }
    }
    if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseMultiTitle")))) {
      L1["tm"] = (await $.call(C, "Round", [$.fdiv($.mul((await $.mv((await $.v(C, "DBGridEh")), "VTitleMargin")), L0["fscaley"]), 2)]));
    } else {
      L1["tm"] = L0["psy2"];
    }
    if ($.truthy($.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))))) {
      await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", (await $.mv((await $.v(C, "DBGridEh")), "FixedColor")));
    }
    if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")))) {
      await $.stmt((await $.call(C, "OffsetRect", [L1["r"], $.sub(($.add((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left")))), ($.add((await $.mv(L1["r"], "Left")), (await $.mv(L1["r"], "Right"))))), 0])));
    }
    await $.stmt((await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L1["r"], $.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))), 0, L1["tm"], (await $.call(C, "GetStingListText", [(await $.v(C, "Title"))])), (await $.v(C, "taCenter")), (await $.v(C, "tlTop")), true, false, L1["lm"], L1["rm"], L0["calcinfomode"], (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))])));
    await $.stmt((await $.callv(L0["addpolyline"], [[(await $.mv(L1["r"], "Left")), (await $.mv(L1["r"], "Bottom")), (await $.mv(L1["r"], "Left")), (await $.mv(L1["r"], "Top")), (await $.mv(L1["r"], "Right")), (await $.mv(L1["r"], "Top")), (await $.mv(L1["r"], "Right")), (await $.mv(L1["r"], "Bottom"))]])));
  }
  return L1.result;
});
  L0["printsimpletitle"] = $.fn(async function PrintSimpleTitle(p0, p1) {
  const L1 = {"fromcol": $.copyArg(p0), "tocol": $.copyArg(p1), result: undefined, "r": null, "r1": null, "i": 0, "s": ''};
  await $.fixArgs(L1, ["fromcol", "tocol"]);
  L1["r"] = (await $.call(C, "Rect", [(await $.mv(L0["dataprintrec"], "Left")), $.add($.sub((await $.mv(L0["dataprintrec"], "Top")), L0["prntitleh"]), L0["printoffset"]), (await $.mv(L0["dataprintrec"], "Left")), $.add((await $.mv(L0["dataprintrec"], "Top")), L0["printoffset"])]));
  { const $t96 = L1["tocol"];
    L1["i"] = L1["fromcol"];
    let $t97 = true;
    for (;;) {
      if (!$t97) { L1["i"] = $.succ(L1["i"], 1); }
      $t97 = false;
      if (!($.ord(L1["i"]) <= $.ord($t96))) break;
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L1["r"], "Right")), async ($t98) => { await $.mset(L1["r"], "Right", $t98); }), (await $.call(C, "Integer", [(await $.idx(L0["prncolwidths"], [L1["i"]]))]))])));
      await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "Font")));
      if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
        await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
      }
      if ($.truthy($.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))))) {
        await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", (await $.mv((await $.v(C, "DBGridEh")), "FixedColor")));
      }
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBGridEh")), "TitleImages")), null)), async () => ($.ne((await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "ImageIndex")), (-(1)))))))) {
        L1["s"] = "";
      } else {
        L1["s"] = (await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "Caption"));
      }
      L1["r1"] = L1["r"];
      if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")))) {
        await $.stmt((await $.call(C, "OffsetRect", [L1["r1"], $.sub(($.add((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left")))), ($.add((await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Right"))))), 0])));
      }
      if ($.truthy($.eq((await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "Orientation")), (await $.v(C, "tohVertical"))))) {
        await $.stmt((await $.call(C, "WriteTextVerticalEh", [L0["vprinter_canvas"], L1["r1"], false, L0["psx2"], $.add(L0["psy2"], L0["psy2"]), L1["s"], (await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "Alignment")), (await $.v(C, "tlBottom")), false, L0["calcinfomode"]])));
      } else {
        await $.stmt((await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L1["r1"], $.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))), L0["psx2"], L0["psy2"], L1["s"], (await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "Alignment")), (await $.v(C, "tlTop")), false, (await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "EndEllipsis")), 0, 0, L0["calcinfomode"], (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))])));
      }
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBGridEh")), "TitleImages")), null)), async () => ($.ne((await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "ImageIndex")), (-(1)))))))) {
        {
          const $t99 = (await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title"));
          await $.stmt((await $.wcall([$t99], "DrawClipped", [(await $.mv((await $.wv([$t99], "DBGridEh", C, false)), "TitleImages")), (await $.wv([$t99], "VPrinter_Canvas", { get: async () => L0["vprinter_canvas"], set: async (v) => { L0["vprinter_canvas"] = v; }, local: true }, false)), (await $.wv([$t99], "r1", { get: async () => L1["r1"], set: async (v) => { L1["r1"] = v; }, local: true }, false)), (await $.wv([$t99], "ImageIndex", C, false)), (await $.wv([$t99], "Alignment", C, false))], { get: async () => L0["drawclipped"], set: async (v) => { L0["drawclipped"] = v; }, local: true })));
        }
      }
      await $.stmt((await $.callv(L0["addpolyline"], [[(await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Bottom")), (await $.mv(L1["r1"], "Right")), (await $.mv(L1["r1"], "Bottom")), (await $.mv(L1["r1"], "Right")), (await $.mv(L1["r1"], "Top"))]])));
      await $.mset(L1["r"], "Left", (await $.mv(L1["r"], "Right")));
      await $.tick();
    }
  }
  await $.mset(L1["r"], "Left", (await $.mv(L0["dataprintrec"], "Left")));
  L1["r1"] = L1["r"];
  if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")))) {
    await $.stmt((await $.call(C, "OffsetRect", [L1["r1"], $.sub(($.add((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left")))), ($.add((await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Right"))))), 0])));
  }
  await $.stmt((await $.callv(L0["addpolyline"], [[(await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Bottom")), (await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Top")), (await $.mv(L1["r1"], "Right")), (await $.mv(L1["r1"], "Top"))]])));
  await $.stmt((await $.callv(L0["printgridtitletextheight"], [L1["fromcol"], L1["tocol"]])));
  return L1.result;
});
  L0["printmultytitle"] = $.fn(async function PrintMultyTitle(p0, p1) {
  const L1 = {"fromcol": $.copyArg(p0), "tocol": $.copyArg(p1), result: undefined, "i": 0, "rightside": 0, "r": null, "r1": null, "lpdtp": null, "s": '', "plefttop": null, "prighttop": null, "prightlow": null};
  await $.fixArgs(L1, ["fromcol", "tocol"]);
  L1["getcolnumbyviscolnum"] = $.fn(async function GetColNumByVisColNum(p0) {
  const L2 = {"aviscolnum": $.copyArg(p0), result: 0};
  await $.fixArgs(L2, ["aviscolnum"]);
  L2["result"] = (await $.mv((await $.idx(L0["prncolumns"], [L2["aviscolnum"]])), "Index"));
  return L2.result;
});
  L1["printtitlerecurs"] = $.fn(async function PrintTitleRecurs(p0, p1) {
  const L2 = {"anode": $.copyArg(p0), "arect": $.copyArg(p1), result: undefined, "r": null, "r1": null, "s": '', "lx": 0, "rx": 0, "xx": 0, "an": null, "nn": null, "lpdtp": null};
  await $.fixArgs(L2, ["anode", "arect"]);
  if ($.truthy(($.eq((await $.mv((await $.mv(L2["anode"], "Host")), "Host")), null)))) {
    return L2.result;
  }
  L2["s"] = (await $.mv((await $.mv(L2["anode"], "Host")), "Text"));
  L2["lx"] = (-(($.sub((await $.mv(L2["arect"], "Left")), (await $.mv(L0["dataprintrec"], "Left"))))));
  await $.mset(L2["r"], "Bottom", (await $.mv(L2["arect"], "Top")));
  await $.mset(L2["r"], "Top", $.sub((await $.mv(L2["r"], "Bottom")), (await $.mv((await $.mv(L2["anode"], "Host")), "HeightPrn"))));
  L2["an"] = L2["anode"];
  L2["nn"] = (await $.mv((await $.mv(L2["anode"], "Host")), "Child"));
  while ($.truthy($.ne(L2["an"], L2["nn"]))) {
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L2["lx"], async ($t100) => { L2["lx"] = $t100; }), (await $.mv(L2["nn"], "WidthPrn"))])));
    L2["nn"] = (await $.mv(L2["nn"], "Next"));
    await $.tick();
  }
  if ($.truthy(($.gt(L2["lx"], 0)))) {
    await $.mset(L2["r"], "Left", (await $.mv(L0["dataprintrec"], "Left")));
    L2["xx"] = $.add($.sub((await $.mv((await $.mv(L2["anode"], "Host")), "WidthPrn")), L2["lx"]), (await $.mv(L0["dataprintrec"], "Left")));
  } else {
    await $.mset(L2["r"], "Left", (await $.mv(L2["arect"], "Left")));
    L2["xx"] = $.add((await $.mv((await $.mv(L2["anode"], "Host")), "WidthPrn")), (await $.mv(L2["arect"], "Left")));
    L2["lx"] = 0;
  }
  if ($.truthy(($.gt(L2["xx"], L1["rightside"])))) {
    L2["rx"] = $.sub(L2["xx"], L1["rightside"]);
    L2["xx"] = L1["rightside"];
  } else {
    L2["rx"] = 0;
  }
  await $.mset(L2["r"], "Right", L2["xx"]);
  L2["r1"] = L2["r"];
  if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")))) {
    await $.stmt((await $.call(C, "OffsetRect", [L2["r1"], $.sub(($.add((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left")))), ($.add((await $.mv(L2["r1"], "Left")), (await $.mv(L2["r1"], "Right"))))), 0])));
  }
  await $.stmt((await $.callv(L0["addpolyline"], [[(await $.mv(L2["r1"], "Left")), (await $.mv(L2["r1"], "Top")), (await $.mv(L2["r1"], "Left")), (await $.mv(L2["r1"], "Bottom")), (await $.mv(L2["r1"], "Right")), (await $.mv(L2["r1"], "Bottom"))]])));
  if ($.truthy($.gt((await $.mv(L1["prighttop"], "y")), (await $.mv(L2["r"], "Top"))))) {
    await $.mset(L1["prighttop"], "y", (await $.mv(L2["r"], "Top")));
    await $.mset(L1["plefttop"], "y", (await $.mv(L1["prighttop"], "y")));
  }
  await $.mset(L2["r1"], "Top", (await $.mv(L2["r1"], "Top")));
  await $.mset(L2["lpdtp"], "cbSize", (await $.call(C, "SizeOf", [L2["lpdtp"]])));
  await $.mset(L2["lpdtp"], "uiLengthDrawn", (await $.call(C, "Length", [L2["s"]])));
  await $.mset(L2["lpdtp"], "iLeftMargin", 0);
  await $.mset(L2["lpdtp"], "iRightMargin", 0);
  await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.mv(L2["r"], "Left")), async ($t101) => { await $.mset(L2["r"], "Left", $t101); }), L2["lx"]])));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L2["r"], "Right")), async ($t102) => { await $.mset(L2["r"], "Right", $t102); }), L2["rx"]])));
  await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.v(C, "DBGridEh")), "TitleFont")));
  if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
    await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
  }
  if ($.truthy($.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))))) {
    await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", (await $.mv((await $.v(C, "DBGridEh")), "FixedColor")));
  }
  await $.stmt((await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L2["r1"], $.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))), 0, L0["psy1"], L2["s"], (await $.v(C, "taCenter")), (await $.v(C, "tlCenter")), true, false, $.add((-(L2["lx"])), L0["psx2"]), $.add((-(L2["rx"])), L0["psx2"]), L0["calcinfomode"], (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))])));
  if ($.truthy((await $.or_(($.eq(L1["i"], (await $.callv(L1["getcolnumbyviscolnum"], [L1["fromcol"]])))), async () => ($.eq((await $.mv((await $.mv((await $.mv(L2["anode"], "Host")), "Host")), "Child")), (await $.mv(L2["anode"], "Host")))))))) {
    await $.stmt((await $.callv(L1["printtitlerecurs"], [(await $.mv(L2["anode"], "Host")), L2["r"]])));
  }
  return L2.result;
});
  await $.mset(L1["prighttop"], "y", $.add((await $.mv(L0["dataprintrec"], "Top")), L0["printoffset"]));
  L1["rightside"] = (await $.mv(L0["dataprintrec"], "Left"));
  { const $t103 = (await $.callv(L1["getcolnumbyviscolnum"], [L1["tocol"]]));
    L1["i"] = (await $.callv(L1["getcolnumbyviscolnum"], [L1["fromcol"]]));
    let $t104 = true;
    for (;;) {
      if (!$t104) { L1["i"] = $.succ(L1["i"], 1); }
      $t104 = false;
      if (!($.ord(L1["i"]) <= $.ord($t103))) break;
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["rightside"], async ($t105) => { L1["rightside"] = $t105; }), (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "LeafFieldArr")), [L1["i"]])), "FLeaf")), "WidthPrn"))])));
      await $.tick();
    }
  }
  await $.mset(L1["r"], "Left", (await $.mv(L0["dataprintrec"], "Left")));
  { const $t106 = (await $.callv(L1["getcolnumbyviscolnum"], [L1["tocol"]]));
    L1["i"] = (await $.callv(L1["getcolnumbyviscolnum"], [L1["fromcol"]]));
    let $t107 = true;
    for (;;) {
      if (!$t107) { L1["i"] = $.succ(L1["i"], 1); }
      $t107 = false;
      if (!($.ord(L1["i"]) <= $.ord($t106))) break;
      await $.mset(L1["r"], "Bottom", $.add((await $.mv(L0["dataprintrec"], "Top")), L0["printoffset"]));
      await $.mset(L1["r"], "Top", $.sub((await $.mv(L1["r"], "Bottom")), (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "LeafFieldArr")), [L1["i"]])), "FLeaf")), "HeightPrn"))));
      await $.mset(L1["r"], "Left", (await $.mv(L1["r"], "Left")));
      await $.mset(L1["r"], "Right", $.add((await $.mv(L1["r"], "Left")), (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "LeafFieldArr")), [L1["i"]])), "FLeaf")), "WidthPrn"))));
      L1["s"] = (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "LeafFieldArr")), [L1["i"]])), "FLeaf")), "Text"));
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBGridEh")), "TitleImages")), null)), async () => ($.ne((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "Columns")), [L1["i"]])), "Title")), "ImageIndex")), (-(1)))))))) {
        L1["s"] = "";
      }
      L1["r1"] = L1["r"];
      if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")))) {
        await $.stmt((await $.call(C, "OffsetRect", [L1["r1"], $.sub(($.add((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left")))), ($.add((await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Right"))))), 0])));
      }
      await $.stmt((await $.callv(L0["addpolyline"], [[(await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Top")), (await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Bottom")), (await $.mv(L1["r1"], "Right")), (await $.mv(L1["r1"], "Bottom"))]])));
      if ($.truthy($.eq(L1["i"], (await $.callv(L1["getcolnumbyviscolnum"], [L1["tocol"]]))))) {
        await $.mset(L1["prighttop"], "x", (await $.mv(L1["r"], "Right")));
        await $.mset(L1["prightlow"], "x", (await $.mv(L1["prighttop"], "x")));
      }
      if ($.truthy($.gt((await $.mv(L1["prighttop"], "y")), (await $.mv(L1["r"], "Top"))))) {
        await $.mset(L1["prighttop"], "y", (await $.mv(L1["r"], "Top")));
        await $.mset(L1["plefttop"], "y", (await $.mv(L1["prighttop"], "y")));
      }
      await $.mset(L1["lpdtp"], "cbSize", (await $.call(C, "SizeOf", [L1["lpdtp"]])));
      await $.mset(L1["lpdtp"], "uiLengthDrawn", (await $.call(C, "Length", [L1["s"]])));
      await $.mset(L1["lpdtp"], "iLeftMargin", 0);
      await $.mset(L1["lpdtp"], "iRightMargin", 0);
      await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "Columns")), [L1["i"]])), "Title")), "Font")));
      if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
        await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
      }
      if ($.truthy($.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))))) {
        await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", (await $.mv((await $.v(C, "DBGridEh")), "FixedColor")));
      } else {
        await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", (await $.v(C, "clWhite")));
      }
      if ($.truthy($.eq((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "Columns")), [L1["i"]])), "Title")), "Orientation")), (await $.v(C, "tohVertical"))))) {
        await $.stmt((await $.call(C, "WriteTextVerticalEh", [L0["vprinter_canvas"], L1["r1"], false, 0, $.add(L0["psy1"], L0["psy2"]), L1["s"], (await $.v(C, "taCenter")), (await $.v(C, "tlBottom")), false, L0["calcinfomode"]])));
      } else {
        await $.stmt((await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L1["r1"], $.in_((await $.v(C, "pghColored")), (await $.v(C, "Options"))), 0, L0["psy1"], L1["s"], (await $.v(C, "taCenter")), (await $.v(C, "tlCenter")), true, false, L0["psx2"], L0["psx2"], L0["calcinfomode"], (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))])));
      }
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBGridEh")), "TitleImages")), null)), async () => ($.ne((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "Columns")), [L1["i"]])), "Title")), "ImageIndex")), (-(1)))))))) {
        await $.stmt((await $.callv(L0["drawclipped"], [(await $.mv((await $.v(C, "DBGridEh")), "TitleImages")), L0["vprinter_canvas"], L1["r1"], (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "Columns")), [L1["i"]])), "Title")), "ImageIndex")), (await $.v(C, "taCenter"))])));
      }
      if ($.truthy((await $.or_(($.eq(L1["i"], (await $.callv(L1["getcolnumbyviscolnum"], [L1["fromcol"]])))), async () => ($.eq((await $.mv((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "LeafFieldArr")), [L1["i"]])), "FLeaf")), "Host")), "Child")), (await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "LeafFieldArr")), [L1["i"]])), "FLeaf")))))))) {
        await $.stmt((await $.callv(L1["printtitlerecurs"], [(await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "LeafFieldArr")), [L1["i"]])), "FLeaf")), L1["r"]])));
      }
      await $.mset(L1["r"], "Left", (await $.mv(L1["r"], "Right")));
      await $.tick();
    }
  }
  await $.mset(L1["plefttop"], "x", (await $.mv(L0["dataprintrec"], "Left")));
  await $.mset(L1["prightlow"], "y", $.add((await $.mv(L0["dataprintrec"], "Top")), L0["printoffset"]));
  await $.mset(L1["r1"], "Left", (await $.mv(L1["plefttop"], "x")));
  await $.mset(L1["r1"], "Top", (await $.mv(L1["plefttop"], "y")));
  await $.mset(L1["r1"], "Right", (await $.mv(L1["prightlow"], "x")));
  await $.mset(L1["r1"], "Bottom", (await $.mv(L1["prightlow"], "y")));
  if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")))) {
    await $.stmt((await $.call(C, "OffsetRect", [L1["r1"], $.sub(($.add((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left")))), ($.add((await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Right"))))), 0])));
  }
  await $.stmt((await $.callv(L0["addpolyline"], [[(await $.mv(L1["r1"], "Left")), (await $.mv(L1["r1"], "Top")), (await $.mv(L1["r1"], "Right")), (await $.mv(L1["r1"], "Top")), (await $.mv(L1["r1"], "Right")), (await $.mv(L1["r1"], "Bottom"))]])));
  await $.stmt((await $.callv(L0["printgridtitletextheight"], [L1["fromcol"], L1["tocol"]])));
  return L1.result;
});
  L0["drawrowsrange"] = $.fn(async function DrawRowsRange(p0, p1) {
  const L1 = {"apbmfrom": $.asRef(p0), "apbmto": $.asRef(p1), result: 0, "pgs": 0, "fromcol": 0, "tocol": 0, "i": 0, "j": 0, "arect": null, "arect1": null, "curpbm": $.rec("tpolybookmark")};
  L1["fromcol"] = 0;
  L1["result"] = 0;
  { const $t108 = $.sub((await $.mv(L0["colstopages"], "Count")), 1);
    L1["pgs"] = 0;
    let $t109 = true;
    for (;;) {
      if (!$t109) { L1["pgs"] = $.succ(L1["pgs"], 1); }
      $t109 = false;
      if (!($.ord(L1["pgs"]) <= $.ord($t108))) break;
      if ($.truthy((await $.mv(L0["vprinter"], "Aborted")))) {
        $.abort();
      }
      if ($.truthy(L0["firstpage"])) {
        L0["firstpage"] = false;
      } else {
        await $.stmt($.callv(L0["vprinter_newpage"], []));
      }
      await $.mcall(L0["polypolypoints"], "Clear", []);
      await $.mcall(L0["polylengths"], "Clear", []);
      L1["tocol"] = (await $.call(C, "Integer", [(await $.idx(L0["colstopages"], [L1["pgs"]]))]));
      await $.stmt((await $.callv(L0["gotopolybookmark"], [(await L1["apbmfrom"].get())])));
      L1["curpbm"] = (await L1["apbmfrom"].get());
      await $.mset(L1["arect"], "Top", $.add((await $.mv(L0["dataprintrec"], "Top")), L0["printoffset"]));
      await $.mset(L1["arect"], "Bottom", (await $.mv(L1["arect"], "Top")));
      L1["j"] = 0;
      if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseMultiTitle")))) {
        await $.stmt((await $.callv(L0["printmultytitle"], [L1["fromcol"], L1["tocol"]])));
      } else {
        await $.stmt((await $.callv(L0["printsimpletitle"], [L1["fromcol"], L1["tocol"]])));
      }
      while ($.truthy(true)) {
        await $.mset(L1["arect"], "Left", (await $.mv(L0["dataprintrec"], "Left")));
        await $.mset(L1["arect"], "Right", (await $.mv(L1["arect"], "Left")));
        if ($.truthy($.eq((await $.mv(L0["prnrowheights"], "Count")), 0))) {
          break;
        }
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L1["arect"], "Bottom")), async ($t110) => { await $.mset(L1["arect"], "Bottom", $t110); }), (await $.call(C, "Integer", [(await $.idx(L0["prnrowheights"], [L1["j"]]))]))])));
        { const $t111 = L1["tocol"];
          L1["i"] = L1["fromcol"];
          let $t112 = true;
          for (;;) {
            if (!$t112) { L1["i"] = $.succ(L1["i"], 1); }
            $t112 = false;
            if (!($.ord(L1["i"]) <= $.ord($t111))) break;
            await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L1["arect"], "Right")), async ($t113) => { await $.mset(L1["arect"], "Right", $t113); }), (await $.call(C, "Integer", [(await $.idx(L0["prncolwidths"], [L1["i"]]))]))])));
            L1["arect1"] = L1["arect"];
            if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")))) {
              await $.stmt((await $.call(C, "OffsetRect", [L1["arect1"], $.sub(($.add((await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Left")))), ($.add((await $.mv(L1["arect"], "Left")), (await $.mv(L1["arect"], "Right"))))), 0])));
            }
            await $.stmt((await $.callv(L0["drawcell"], [L1["i"], L1["arect1"], L1["curpbm"], false])));
            if ($.truthy((await $.or_(((await $.and_(($.eq(L1["i"], L1["fromcol"])), async () => $.not((await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")))))), async () => ((await $.and_(($.eq(L1["i"], L1["tocol"])), async () => (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment"))))))))) {
              await $.stmt((await $.callv(L0["addpolyline"], [[(await $.mv(L1["arect1"], "Left")), (await $.mv(L1["arect1"], "Top")), (await $.mv(L1["arect1"], "Left")), (await $.mv(L1["arect1"], "Bottom")), (await $.mv(L1["arect1"], "Right")), (await $.mv(L1["arect1"], "Bottom")), (await $.mv(L1["arect1"], "Right")), (await $.mv(L1["arect1"], "Top"))]])));
            } else {
              await $.stmt((await $.callv(L0["addpolyline"], [[(await $.mv(L1["arect1"], "Left")), (await $.mv(L1["arect1"], "Bottom")), (await $.mv(L1["arect1"], "Right")), (await $.mv(L1["arect1"], "Bottom")), (await $.mv(L1["arect1"], "Right")), (await $.mv(L1["arect1"], "Top"))]])));
            }
            await $.mset(L1["arect"], "Left", (await $.mv(L1["arect"], "Right")));
            if ($.truthy($.not(L0["calcinfomode"]))) {
              await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
            }
            await $.tick();
          }
        }
        L1["result"] = $.sub((await $.mv(L1["arect"], "Bottom")), (await $.mv(L0["printrec"], "Top")));
        if ($.truthy($.eq($.sub((await $.mv(L0["prnrowheights"], "Count")), 1), L1["j"]))) {
          break;
        }
        await $.stmt((await $.callv(L0["setnextpolybookmark"], [L1["curpbm"]])));
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["j"], async ($t114) => { L1["j"] = $t114; })])));
        await $.mset(L1["arect"], "Top", (await $.mv(L1["arect"], "Bottom")));
        await $.tick();
      }
      if ($.truthy($.not(L0["calcinfomode"]))) {
        await $.stmt((await $.call(C, "PolyPolyline", [(await $.mv(L0["vprinter_canvas"], "Handle")), (await $.mv(L0["polypolypoints"], "List")), (await $.mv(L0["polylengths"], "List")), (await $.mv(L0["polylengths"], "Count"))])));
      }
      L1["fromcol"] = $.add(L1["tocol"], 1);
      await $.tick();
    }
  }
  return L1.result;
});
  L0["getgridtitletextheight"] = $.fn(async function GetGridTitleTextHeight() {
  const L1 = {result: 0, "r": null, "tm": 0};
  if ($.truthy(($.ne((await $.mv((await $.v(C, "Title")), "Text")), "")))) {
    await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.v(C, "DBGridEh")), "TitleFont")));
    if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
      await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
    }
    L1["r"] = (await $.call(C, "Rect", [0, 0, L0["getprintgridwidth"], 0]));
    if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseMultiTitle")))) {
      L1["tm"] = (await $.call(C, "Round", [$.fdiv($.mul((await $.mv((await $.v(C, "DBGridEh")), "VTitleMargin")), L0["fscaley"]), 2)]));
    } else {
      L1["tm"] = L0["psy2"];
    }
    L1["result"] = (await $.call(C, "WriteTextEh", [L0["vprinter_canvas"], L1["r"], false, L0["psx2"], L1["tm"], (await $.call(C, "GetStingListText", [(await $.v(C, "Title"))])), (await $.v(C, "taCenter")), (await $.v(C, "tlCenter")), true, false, 0, 0, true, (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftAlignment")), (await $.mv((await $.v(C, "DBGridEh")), "UseRightToLeftReading"))]));
  } else {
    L1["result"] = 0;
  }
  return L1.result;
});
  L0["setprnchildtreeheight"] = $.fn(async function SetPrnChildTreeHeight(p0) {
  const L1 = {"anode": $.copyArg(p0), result: 0, "htlast": null, "newh": 0, "maxh": 0, "th": 0, "rec": null, "defaultrowheight": 0, "s": ''};
  await $.fixArgs(L1, ["anode"]);
  L1["defaultrowheight"] = 0;
  L1["result"] = 0;
  if ($.truthy(($.eq((await $.mv(L1["anode"], "Child")), null)))) {
    return L1.result;
  }
  L1["htlast"] = (await $.mv(L1["anode"], "Child"));
  if ($.truthy($.ne((await $.mv(L1["htlast"], "Column")), null))) {
    await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.mv((await $.mv(L1["htlast"], "Column")), "Title")), "Font")));
  } else {
    await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.v(C, "DBGridEh")), "TitleFont")));
  }
  if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
    await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
  }
  L1["maxh"] = 0;
  if ($.truthy(($.ne((await $.mv(L1["htlast"], "Child")), null)))) {
    L1["maxh"] = (await $.callv(L1["setprnchildtreeheight"], [L1["htlast"]]));
  }
  L1["rec"] = (await $.call(C, "Rect", [0, 0, $.sub((await $.call(C, "Round", [(await $.mv(L1["htlast"], "WidthPrn"))])), (await $.call(C, "Round", [$.mul(L0["fscalex"], 4)]))), L1["defaultrowheight"]]));
  L1["s"] = (await $.mv(L1["htlast"], "Text"));
  if ($.truthy($.eq(L1["s"], ""))) {
    L1["s"] = " ";
  }
  if ($.truthy((await $.and_(($.ne((await $.mv(L1["htlast"], "Column")), null)), async () => ($.eq((await $.mv((await $.mv((await $.mv(L1["htlast"], "Column")), "Title")), "Orientation")), (await $.v(C, "tohVertical")))))))) {
    L1["th"] = $.add((await $.call(C, "WriteTextVerticalEh", [L0["vprinter_canvas"], L1["rec"], false, 0, 0, L1["s"], (await $.v(C, "taLeftJustify")), (await $.v(C, "tlBottom")), false, true])), (await $.call(C, "Round", [$.mul(4, L0["fscaley"])])));
  } else {
    L1["th"] = $.add((await $.call(C, "DrawText", [(await $.mv(L0["vprinter_canvas"], "Handle")), (await $.call(C, "PChar", [L1["s"]])), (await $.call(C, "Length", [L1["s"]])), L1["rec"], (await $.or_((await $.or_((await $.or_((await $.v(C, "DT_WORDBREAK")), async () => (await $.v(C, "DT_CALCRECT")))), async () => (await $.v(C, "DT_EXPANDTABS")))), async () => (await $.v(C, "DT_NOPREFIX"))))])), (await $.call(C, "Round", [$.mul((await $.mv((await $.v(C, "DBGridEh")), "VTitleMargin")), L0["fscaley"])])));
  }
  if ($.truthy(($.gt(L1["th"], L1["defaultrowheight"])))) {
    L1["maxh"] = $.add(L1["maxh"], L1["th"]);
  } else {
    L1["maxh"] = $.add(L1["maxh"], L1["defaultrowheight"]);
  }
  while ($.truthy(true)) {
    if ($.truthy(($.eq((await $.mv(L1["anode"], "Child")), (await $.mv(L1["htlast"], "Next")))))) {
      break;
    }
    L1["htlast"] = (await $.mv(L1["htlast"], "Next"));
    L1["newh"] = 0;
    if ($.truthy(($.ne((await $.mv(L1["htlast"], "Child")), null)))) {
      L1["newh"] = (await $.callv(L1["setprnchildtreeheight"], [L1["htlast"]]));
    }
    L1["rec"] = (await $.call(C, "Rect", [0, 0, $.sub((await $.call(C, "Round", [(await $.mv(L1["htlast"], "WidthPrn"))])), (await $.call(C, "Round", [$.mul(L0["fscalex"], 4)]))), L1["defaultrowheight"]]));
    L1["s"] = (await $.mv(L1["htlast"], "Text"));
    if ($.truthy($.eq(L1["s"], ""))) {
      L1["s"] = " ";
    }
    if ($.truthy($.ne((await $.mv(L1["htlast"], "Column")), null))) {
      await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.mv((await $.mv(L1["htlast"], "Column")), "Title")), "Font")));
    }
    if ($.truthy((await $.and_(($.ne((await $.mv(L1["htlast"], "Column")), null)), async () => ($.eq((await $.mv((await $.mv((await $.mv(L1["htlast"], "Column")), "Title")), "Orientation")), (await $.v(C, "tohVertical")))))))) {
      L1["th"] = $.add((await $.call(C, "WriteTextVerticalEh", [L0["vprinter_canvas"], L1["rec"], false, 0, 0, L1["s"], (await $.v(C, "taLeftJustify")), (await $.v(C, "tlBottom")), false, true])), (await $.call(C, "Round", [$.mul(4, L0["fscaley"])])));
    } else {
      L1["th"] = $.add((await $.call(C, "DrawText", [(await $.mv(L0["vprinter_canvas"], "Handle")), (await $.call(C, "PChar", [L1["s"]])), (await $.call(C, "Length", [L1["s"]])), L1["rec"], (await $.or_((await $.or_((await $.or_((await $.v(C, "DT_WORDBREAK")), async () => (await $.v(C, "DT_CALCRECT")))), async () => (await $.v(C, "DT_EXPANDTABS")))), async () => (await $.v(C, "DT_NOPREFIX"))))])), (await $.call(C, "Round", [$.mul((await $.mv((await $.v(C, "DBGridEh")), "VTitleMargin")), L0["fscaley"])])));
    }
    if ($.truthy(($.gt(L1["th"], L1["defaultrowheight"])))) {
      L1["newh"] = $.add(L1["newh"], L1["th"]);
    } else {
      L1["newh"] = $.add(L1["newh"], L1["defaultrowheight"]);
    }
    if ($.truthy(($.lt(L1["maxh"], L1["newh"])))) {
      L1["maxh"] = L1["newh"];
    }
    await $.tick();
  }
  L1["htlast"] = (await $.mv(L1["anode"], "Child"));
  while ($.truthy($.ne((await $.mv(L1["anode"], "Child")), (await $.mv(L1["htlast"], "Next"))))) {
    if ($.truthy(($.eq((await $.mv(L1["htlast"], "Child")), null)))) {
      await $.mset(L1["htlast"], "HeightPrn", L1["maxh"]);
    } else {
      await $.mset(L1["htlast"], "HeightPrn", $.sub(L1["maxh"], (await $.mv(L1["htlast"], "HeightPrn"))));
    }
    L1["htlast"] = (await $.mv(L1["htlast"], "Next"));
    await $.tick();
  }
  if ($.truthy(($.eq((await $.mv(L1["htlast"], "Child")), null)))) {
    await $.mset(L1["htlast"], "HeightPrn", L1["maxh"]);
  } else {
    await $.mset(L1["htlast"], "HeightPrn", $.sub(L1["maxh"], (await $.mv(L1["htlast"], "HeightPrn"))));
  }
  await $.mset(L1["anode"], "HeightPrn", L1["maxh"]);
  L1["result"] = L1["maxh"];
  return L1.result;
});
  L0["setprntreewidth"] = $.fn(async function SetPrnTreeWidth() {
  const L1 = {result: undefined, "i": 0, "j": 0};
  L1["setprntreewidthrecurs"] = $.fn(async function SetPrnTreeWidthRecurs(p0) {
  const L2 = {"ahost": $.copyArg(p0), result: 0, "an": null, "nn": null, "w": 0};
  await $.fixArgs(L2, ["ahost"]);
  L2["w"] = 0;
  L2["result"] = (await $.mv(L2["ahost"], "WidthPrn"));
  if ($.truthy(($.eq((await $.mv(L2["ahost"], "Child")), null)))) {
    return L2.result;
  }
  L2["an"] = (await $.mv(L2["ahost"], "Child"));
  L2["nn"] = L2["an"];
  while ($.truthy(true)) {
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L2["w"], async ($t115) => { L2["w"] = $t115; }), (await $.callv(L2["setprntreewidthrecurs"], [L2["nn"]]))])));
    L2["nn"] = (await $.mv(L2["nn"], "Next"));
    if ($.truthy(($.eq(L2["nn"], L2["an"])))) {
      break;
    }
    await $.tick();
  }
  await $.mset(L2["ahost"], "WidthPrn", L2["w"]);
  L2["result"] = L2["w"];
  return L2.result;
});
  L1["j"] = 0;
  { const $t116 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "Columns")), "Count")), 1);
    L1["i"] = 0;
    let $t117 = true;
    for (;;) {
      if (!$t117) { L1["i"] = $.succ(L1["i"], 1); }
      $t117 = false;
      if (!($.ord(L1["i"]) <= $.ord($t116))) break;
      if ($.truthy($.ne((await $.mcall(L0["prncolumns"], "IndexOf", [(await $.idx((await $.mv((await $.v(C, "DBGridEh")), "Columns")), [L1["i"]]))])), (-(1))))) {
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "LeafFieldArr")), [L1["i"]])), "FLeaf")), "WidthPrn", (await $.call(C, "Integer", [(await $.idx(L0["prncolwidths"], [L1["j"]]))])));
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L1["j"], async ($t118) => { L1["j"] = $t118; })])));
      } else {
        await $.mset((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGridEh")), "LeafFieldArr")), [L1["i"]])), "FLeaf")), "WidthPrn", 0);
      }
      await $.tick();
    }
  }
  await $.stmt((await $.callv(L1["setprntreewidthrecurs"], [(await $.mv((await $.v(C, "DBGridEh")), "HeadTree"))])));
  return L1.result;
});
  L0["getsimpletitleheight"] = $.fn(async function GetSimpleTitleHeight() {
  const L1 = {result: 0, "i": 0, "h": 0, "k": 0, "j": 0, "tm": null, "finterlinear": 0};
  L1["result"] = 0;
  { const $t119 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
    L1["i"] = 0;
    let $t120 = true;
    for (;;) {
      if (!$t120) { L1["i"] = $.succ(L1["i"], 1); }
      $t120 = false;
      if (!($.ord(L1["i"]) <= $.ord($t119))) break;
      await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "Font")));
      if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
        await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
      }
      L1["h"] = $.add((await $.mcall(L0["vprinter_canvas"], "TextHeight", ["Wg"])), $.mul(L0["psy2"], 2));
      if ($.truthy($.gt(L1["h"], L1["result"]))) {
        L1["result"] = L1["h"];
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq(L1["result"], 0))) {
    await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.v(C, "DBGridEh")), "TitleFont")));
    if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
      await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
    }
    L1["result"] = $.add((await $.mcall(L0["vprinter_canvas"], "TextHeight", ["Wg"])), $.mul(L0["psy2"], 2));
  }
  if ($.truthy((await $.or_(($.ne((await $.mv((await $.v(C, "DBGridEh")), "TitleHeight")), 0)), async () => ($.ne((await $.mv((await $.v(C, "DBGridEh")), "TitleLines")), 0)))))) {
    if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "Flat")))) {
      L1["finterlinear"] = L0["psy2"];
    } else {
      L1["finterlinear"] = (await $.call(C, "Round", [$.mul(4, L0["fscaley"])]));
    }
    L1["k"] = 0;
    { const $t121 = $.sub((await $.mv(L0["prncolumns"], "Count")), 1);
      L1["i"] = 0;
      let $t122 = true;
      for (;;) {
        if (!$t122) { L1["i"] = $.succ(L1["i"], 1); }
        $t122 = false;
        if (!($.ord(L1["i"]) <= $.ord($t121))) break;
        await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.mv((await $.idx(L0["prncolumns"], [L1["i"]])), "Title")), "Font")));
        L1["j"] = $.add((await $.mcall(L0["vprinter_canvas"], "TextHeight", ["Wg"])), (await $.call(C, "Round", [$.mul(L1["finterlinear"], L0["fscaley"])])));
        if ($.truthy($.gt(L1["j"], L1["k"]))) {
          L1["k"] = L1["j"];
          await $.stmt((await $.call(C, "GetTextMetrics", [(await $.mv(L0["vprinter_canvas"], "Handle")), L1["tm"]])));
        }
        await $.tick();
      }
    }
    if ($.truthy($.eq(L1["k"], 0))) {
      await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.v(C, "DBGridEh")), "TitleFont")));
      await $.stmt((await $.call(C, "GetTextMetrics", [(await $.mv(L0["vprinter_canvas"], "Handle")), L1["tm"]])));
    }
    L1["result"] = $.add($.add($.add((await $.mv(L1["tm"], "tmExternalLeading")), $.mul((await $.mv(L1["tm"], "tmHeight")), (await $.mv((await $.v(C, "DBGridEh")), "TitleLines")))), L0["psy2"]), (await $.call(C, "Round", [$.mul((await $.mv((await $.v(C, "DBGridEh")), "TitleHeight")), L0["fscaley"])])));
    if ($.truthy($.in_((await $.v(C, "dgRowLines")), (await $.mv((await $.v(C, "DBGridEh")), "Options"))))) {
      L1["result"] = $.add(L1["result"], L0["psy1"]);
    }
  }
  return L1.result;
});
  L0["calcminrowheight"] = $.fn(async function CalcMinRowHeight() {
  const L1 = {result: 0, "tm": null};
  await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.v(C, "DBGridEh")), "Font")));
  if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
    await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
  }
  await $.stmt((await $.call(C, "GetTextMetrics", [(await $.mv(L0["vprinter_canvas"], "Handle")), L1["tm"]])));
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "DBGridEh")), "RowHeight")), 0)), async () => ($.eq((await $.mv((await $.v(C, "DBGridEh")), "RowLines")), 0)))))) {
    L1["result"] = $.add((await $.mcall(L0["vprinter_canvas"], "TextHeight", ["Wg"])), $.mul(L0["psy2"], 2));
  } else {
    L1["result"] = $.add($.mul(($.add((await $.mv(L1["tm"], "tmExternalLeading")), (await $.mv(L1["tm"], "tmHeight")))), (await $.mv((await $.v(C, "DBGridEh")), "RowLines"))), (await $.call(C, "Round", [$.mul((await $.mv((await $.v(C, "DBGridEh")), "RowHeight")), L0["fscaley"])])));
  }
  L0["awordwrap"] = (await $.or_(($.gt(L1["result"], $.add($.add((await $.mv(L1["tm"], "tmExternalLeading")), (await $.mv(L1["tm"], "tmHeight"))), $.mul(L0["psy2"], 2)))), async () => ($.in_((await $.v(C, "pghRowAutoStretch")), (await $.v(C, "Options"))))));
  return L1.result;
});
  L0["createprncolumnslist"] = $.fn(async function CreatePrnColumnsList() {
  const L1 = {result: undefined, "i": 0};
  L0["prncolumns"] = (await $.mv((await $.v(C, "TColumnsEhList")), "Create"));
  {
    const $t123 = (await $.v(C, "DBGridEh"));
    { const $t124 = (await $.mv((await $.wv([$t123], "Selection", C, false)), "SelectionType"));
      if ($.eq($t124, (await $.wv([$t123], "gstNon", C, false))) || $.eq($t124, (await $.wv([$t123], "gstAll", C, false))) || $.eq($t124, (await $.wv([$t123], "gstRecordBookmarks", C, false)))) {
        { const $t125 = $.sub((await $.mv((await $.wv([$t123], "VisibleColumns", C, false)), "Count")), 1);
          await $.wset([$t123], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
          let $t126 = true;
          for (;;) {
            if (!$t126) { await $.wset([$t123], "i", $.succ((await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
            $t126 = false;
            if (!($.ord((await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t125))) break;
            await $.stmt((await $.mcall((await $.wv([$t123], "PrnColumns", { get: async () => L0["prncolumns"], set: async (v) => { L0["prncolumns"] = v; }, local: true }, false)), "Add", [(await $.idx((await $.wv([$t123], "VisibleColumns", C, false)), [(await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))])));
            await $.tick();
          }
        }
      }
      else if ($.eq($t124, (await $.wv([$t123], "gstColumns", C, false)))) {
        { const $t127 = $.sub((await $.mv((await $.mv((await $.wv([$t123], "Selection", C, false)), "Columns")), "Count")), 1);
          await $.wset([$t123], "i", 0, { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
          let $t128 = true;
          for (;;) {
            if (!$t128) { await $.wset([$t123], "i", $.succ((await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
            $t128 = false;
            if (!($.ord((await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t127))) break;
            await $.stmt((await $.mcall((await $.wv([$t123], "PrnColumns", { get: async () => L0["prncolumns"], set: async (v) => { L0["prncolumns"] = v; }, local: true }, false)), "Add", [(await $.idx((await $.mv((await $.wv([$t123], "Selection", C, false)), "Columns")), [(await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))])));
            await $.tick();
          }
        }
      }
      else if ($.eq($t124, (await $.wv([$t123], "gstRectangle", C, false)))) {
        { const $t129 = (await $.mv((await $.mv((await $.wv([$t123], "Selection", C, false)), "Rect")), "RightCol"));
          await $.wset([$t123], "i", (await $.mv((await $.mv((await $.wv([$t123], "Selection", C, false)), "Rect")), "LeftCol")), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true });
          let $t130 = true;
          for (;;) {
            if (!$t130) { await $.wset([$t123], "i", $.succ((await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false)), 1), { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }); }
            $t130 = false;
            if (!($.ord((await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))) <= $.ord($t129))) break;
            if ($.truthy((await $.mv((await $.idx((await $.wv([$t123], "Columns", C, false)), [(await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), "Visible")))) {
              await $.stmt((await $.mcall((await $.wv([$t123], "PrnColumns", { get: async () => L0["prncolumns"], set: async (v) => { L0["prncolumns"] = v; }, local: true }, false)), "Add", [(await $.idx((await $.wv([$t123], "Columns", C, false)), [(await $.wv([$t123], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))]))])));
            }
            await $.tick();
          }
        }
      }
    }
  }
  return L1.result;
});
  L0["printrichtext"] = $.fn(async function PrintRichText(p0) {
  const L1 = {"strings": $.copyArg(p0), result: undefined, "range": null, "lastchar": 0, "maxlen": 0, "logx": 0, "logy": 0, "saverect": null, "rangemode": 0};
  await $.fixArgs(L1, ["strings"]);
  L1["scalerect"] = $.fn(async function ScaleRect(p0, p1, p2, p3, p4) {
  const L2 = {"arect": $.copyArg(p0), "xmul": $.copyArg(p1), "ymul": $.copyArg(p2), "xdiv": $.copyArg(p3), "ydiv": $.copyArg(p4), result: null};
  await $.fixArgs(L2, ["arect", "xmul", "ymul", "xdiv", "ydiv"]);
  await $.mset(L2["result"], "Left", $.idiv($.mul((await $.mv(L2["arect"], "Left")), L2["xmul"]), L2["xdiv"]));
  await $.mset(L2["result"], "Right", $.idiv($.mul((await $.mv(L2["arect"], "Right")), L2["xmul"]), L2["xdiv"]));
  await $.mset(L2["result"], "Top", $.idiv($.mul((await $.mv(L2["arect"], "Top")), L2["ymul"]), L2["ydiv"]));
  await $.mset(L2["result"], "Bottom", $.idiv($.mul((await $.mv(L2["arect"], "Bottom")), L2["ymul"]), L2["ydiv"]));
  return L2.result;
});
  if ($.truthy(L0["calcinfomode"])) {
    L1["rangemode"] = 0;
  } else {
    L1["rangemode"] = 1;
  }
  await $.stmt((await $.call(C, "FillChar", [$.ref(async () => L1["range"], async ($t131) => { L1["range"] = $t131; }), (await $.call(C, "SizeOf", [(await $.v(C, "TFormatRange"))])), 0])));
  {
    const $t132 = L0["vprinter"];
    const $t133 = (await $.wv([$t132], "Range", { get: async () => L1["range"], set: async (v) => { L1["range"] = v; }, local: true }, false));
    await $.wset([$t132, $t133], "hdc", (await $.mv((await $.wv([$t132, $t133], "Canvas", C, false)), "Handle")), C);
    await $.wset([$t132, $t133], "hdcTarget", 0, C);
    await $.wset([$t132, $t133], "LogX", (await $.wcall([$t132, $t133], "GetDeviceCaps", [(await $.wv([$t132, $t133], "Handle", C, false)), (await $.wv([$t132, $t133], "LOGPIXELSX", C, false))], C)), { get: async () => L1["logx"], set: async (v) => { L1["logx"] = v; }, local: true });
    await $.wset([$t132, $t133], "LogY", (await $.wcall([$t132, $t133], "GetDeviceCaps", [(await $.wv([$t132, $t133], "Handle", C, false)), (await $.wv([$t132, $t133], "LOGPIXELSY", C, false))], C)), { get: async () => L1["logy"], set: async (v) => { L1["logy"] = v; }, local: true });
    if ($.truthy((await $.wcall([$t132, $t133], "IsRectEmpty", [(await $.mv((await $.mv((await $.wv([$t132, $t133], "Strings", { get: async () => L1["strings"], set: async (v) => { L1["strings"] = v; }, local: true }, false)), "RichEdit")), "PageRect"))], C)))) {
      await $.wset([$t132, $t133], "SaveRect", (await $.wcall([$t132, $t133], "ScaleRect", [(await $.wv([$t132, $t133], "PrintRec", { get: async () => L0["printrec"], set: async (v) => { L0["printrec"] = v; }, local: true }, false)), 1440, 1440, (await $.wv([$t132, $t133], "LogX", { get: async () => L1["logx"], set: async (v) => { L1["logx"] = v; }, local: true }, false)), (await $.wv([$t132, $t133], "LogY", { get: async () => L1["logy"], set: async (v) => { L1["logy"] = v; }, local: true }, false))], { get: async () => L1["scalerect"], set: async (v) => { L1["scalerect"] = v; }, local: true })), { get: async () => L1["saverect"], set: async (v) => { L1["saverect"] = v; }, local: true });
    } else {
      await $.mset((await $.wv([$t132, $t133], "rc", C, false)), "left", $.idiv($.mul((await $.mv((await $.mv((await $.mv((await $.wv([$t132, $t133], "Strings", { get: async () => L1["strings"], set: async (v) => { L1["strings"] = v; }, local: true }, false)), "RichEdit")), "PageRect")), "Left")), 1440), (await $.wv([$t132, $t133], "LogX", { get: async () => L1["logx"], set: async (v) => { L1["logx"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t132, $t133], "rc", C, false)), "top", $.idiv($.mul((await $.mv((await $.mv((await $.mv((await $.wv([$t132, $t133], "Strings", { get: async () => L1["strings"], set: async (v) => { L1["strings"] = v; }, local: true }, false)), "RichEdit")), "PageRect")), "Top")), 1440), (await $.wv([$t132, $t133], "LogY", { get: async () => L1["logy"], set: async (v) => { L1["logy"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t132, $t133], "rc", C, false)), "right", $.idiv($.mul((await $.mv((await $.mv((await $.mv((await $.wv([$t132, $t133], "Strings", { get: async () => L1["strings"], set: async (v) => { L1["strings"] = v; }, local: true }, false)), "RichEdit")), "PageRect")), "Right")), 1440), (await $.wv([$t132, $t133], "LogX", { get: async () => L1["logx"], set: async (v) => { L1["logx"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t132, $t133], "rc", C, false)), "bottom", $.idiv($.mul((await $.mv((await $.mv((await $.mv((await $.wv([$t132, $t133], "Strings", { get: async () => L1["strings"], set: async (v) => { L1["strings"] = v; }, local: true }, false)), "RichEdit")), "PageRect")), "Bottom")), 1440), (await $.wv([$t132, $t133], "LogY", { get: async () => L1["logy"], set: async (v) => { L1["logy"] = v; }, local: true }, false))));
    }
    await $.wset([$t132, $t133], "LastChar", 0, { get: async () => L1["lastchar"], set: async (v) => { L1["lastchar"] = v; }, local: true });
    await $.wset([$t132, $t133], "MaxLen", (await $.mv((await $.mv((await $.wv([$t132, $t133], "Strings", { get: async () => L1["strings"], set: async (v) => { L1["strings"] = v; }, local: true }, false)), "RichEdit")), "GetTextLen")), { get: async () => L1["maxlen"], set: async (v) => { L1["maxlen"] = v; }, local: true });
    await $.mset((await $.wv([$t132, $t133], "chrg", C, false)), "cpMax", (-(1)));
    await $.stmt((await $.wcall([$t132, $t133], "SendMessage", [(await $.mv((await $.mv((await $.wv([$t132, $t133], "Strings", { get: async () => L1["strings"], set: async (v) => { L1["strings"] = v; }, local: true }, false)), "RichEdit")), "Handle")), (await $.wv([$t132, $t133], "EM_FORMATRANGE", C, false)), 0, 0], C)));
    try {
      do {
        await $.wset([$t132, $t133], "rc", (await $.wv([$t132, $t133], "SaveRect", { get: async () => L1["saverect"], set: async (v) => { L1["saverect"] = v; }, local: true }, false)), C);
        await $.stmt((await $.wcall([$t132, $t133], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t132, $t133], "rc", C, false)), "Top")), async ($t134) => { await $.mset((await $.wv([$t132, $t133], "rc", C, false)), "Top", $t134); }), $.idiv($.mul((await $.wv([$t132, $t133], "PrintOffset", { get: async () => L0["printoffset"], set: async (v) => { L0["printoffset"] = v; }, local: true }, false)), 1440), (await $.wv([$t132, $t133], "LogY", { get: async () => L1["logy"], set: async (v) => { L1["logy"] = v; }, local: true }, false)))], C)));
        await $.wset([$t132, $t133], "rcPage", (await $.wv([$t132, $t133], "rc", C, false)), C);
        await $.mset((await $.wv([$t132, $t133], "chrg", C, false)), "cpMin", (await $.wv([$t132, $t133], "LastChar", { get: async () => L1["lastchar"], set: async (v) => { L1["lastchar"] = v; }, local: true }, false)));
        await $.wset([$t132, $t133], "hdc", (await $.mv((await $.wv([$t132, $t133], "Canvas", C, false)), "Handle")), C);
        await $.wset([$t132, $t133], "hdcTarget", (await $.wv([$t132, $t133], "Handle", C, false)), C);
        await $.wset([$t132, $t133], "LastChar", (await $.wcall([$t132, $t133], "SendMessage", [(await $.mv((await $.mv((await $.wv([$t132, $t133], "Strings", { get: async () => L1["strings"], set: async (v) => { L1["strings"] = v; }, local: true }, false)), "RichEdit")), "Handle")), (await $.wv([$t132, $t133], "EM_FORMATRANGE", C, false)), (await $.wv([$t132, $t133], "RangeMode", { get: async () => L1["rangemode"], set: async (v) => { L1["rangemode"] = v; }, local: true }, false)), (await $.wcall([$t132, $t133], "Longint", [(await $.wv([$t132, $t133], "Range", { get: async () => L1["range"], set: async (v) => { L1["range"] = v; }, local: true }, true))], C))], C)), { get: async () => L1["lastchar"], set: async (v) => { L1["lastchar"] = v; }, local: true });
        if ($.truthy($.eq((await $.wv([$t132, $t133], "LastChar", { get: async () => L1["lastchar"], set: async (v) => { L1["lastchar"] = v; }, local: true }, false)), 0))) {
          break;
        }
        await $.wset([$t132, $t133], "rc", (await $.wcall([$t132, $t133], "ScaleRect", [(await $.wv([$t132, $t133], "rc", C, false)), (await $.wv([$t132, $t133], "LogX", { get: async () => L1["logx"], set: async (v) => { L1["logx"] = v; }, local: true }, false)), (await $.wv([$t132, $t133], "LogY", { get: async () => L1["logy"], set: async (v) => { L1["logy"] = v; }, local: true }, false)), 1440, 1440], { get: async () => L1["scalerect"], set: async (v) => { L1["scalerect"] = v; }, local: true })), C);
        await $.wset([$t132, $t133], "PrintOffset", $.sub((await $.mv((await $.wv([$t132, $t133], "rc", C, false)), "Bottom")), (await $.mv((await $.wv([$t132, $t133], "rc", C, false)), "Top"))), { get: async () => L0["printoffset"], set: async (v) => { L0["printoffset"] = v; }, local: true });
        if ($.truthy((await $.and_(($.lt((await $.wv([$t132, $t133], "LastChar", { get: async () => L1["lastchar"], set: async (v) => { L1["lastchar"] = v; }, local: true }, false)), (await $.wv([$t132, $t133], "MaxLen", { get: async () => L1["maxlen"], set: async (v) => { L1["maxlen"] = v; }, local: true }, false)))), async () => ($.ne((await $.wv([$t132, $t133], "LastChar", { get: async () => L1["lastchar"], set: async (v) => { L1["lastchar"] = v; }, local: true }, false)), (-(1)))))))) {
          await $.stmt($.wcall([$t132, $t133], "VPrinter_NewPage", [], { get: async () => L0["vprinter_newpage"], set: async (v) => { L0["vprinter_newpage"] = v; }, local: true }));
          await $.wset([$t132, $t133], "PrintOffset", 0, { get: async () => L0["printoffset"], set: async (v) => { L0["printoffset"] = v; }, local: true });
        }
        await $.tick();
      } while (!$.truthy((await $.or_(($.ge((await $.wv([$t132, $t133], "LastChar", { get: async () => L1["lastchar"], set: async (v) => { L1["lastchar"] = v; }, local: true }, false)), (await $.wv([$t132, $t133], "MaxLen", { get: async () => L1["maxlen"], set: async (v) => { L1["maxlen"] = v; }, local: true }, false)))), async () => ($.eq((await $.wv([$t132, $t133], "LastChar", { get: async () => L1["lastchar"], set: async (v) => { L1["lastchar"] = v; }, local: true }, false)), (-(1))))))));
    } finally {
      await $.stmt((await $.wcall([$t132, $t133], "SendMessage", [(await $.mv((await $.mv((await $.wv([$t132, $t133], "Strings", { get: async () => L1["strings"], set: async (v) => { L1["strings"] = v; }, local: true }, false)), "RichEdit")), "Handle")), (await $.wv([$t132, $t133], "EM_FORMATRANGE", C, false)), 0, 0], C)));
    }
  }
  return L1.result;
});
  L0["setsubstituting"] = $.fn(async function SetSubstituting() {
  const L1 = {result: undefined, "i": 0};
  { const $t135 = $.sub((await $.mv((await $.v(C, "FSubstitutesNames")), "Count")), 1);
    L1["i"] = 0;
    let $t136 = true;
    for (;;) {
      if (!$t136) { L1["i"] = $.succ(L1["i"], 1); }
      $t136 = false;
      if (!($.ord(L1["i"]) <= $.ord($t135))) break;
      await $.stmt((await $.call(C, "GridTextReplace", [(await $.v(C, "BeforeGridText")), (await $.idx((await $.v(C, "FSubstitutesNames")), [L1["i"]])), (await $.idx((await $.v(C, "FSubstitutesValues")), [L1["i"]])), 0, (-(1)), [], true])));
      await $.stmt((await $.call(C, "GridTextReplace", [(await $.v(C, "AfterGridText")), (await $.idx((await $.v(C, "FSubstitutesNames")), [L1["i"]])), (await $.idx((await $.v(C, "FSubstitutesValues")), [L1["i"]])), 0, (-(1)), [], true])));
      await $.tick();
    }
  }
  return L1.result;
});
  L0["requiretwopass"] = $.fn(async function RequireTwoPass() {
  const L1 = {result: false};
  L1["result"] = $.ne((await $.call(C, "Pos", ["&[Pages]", (await $.mv((await $.mv((await $.v(C, "PageHeader")), "LeftText")), "Text"))])), 0);
  if ($.truthy($.not(L1["result"]))) {
    L1["result"] = $.ne((await $.call(C, "Pos", ["&[Pages]", (await $.mv((await $.mv((await $.v(C, "PageHeader")), "CenterText")), "Text"))])), 0);
  }
  if ($.truthy($.not(L1["result"]))) {
    L1["result"] = $.ne((await $.call(C, "Pos", ["&[Pages]", (await $.mv((await $.mv((await $.v(C, "PageHeader")), "RightText")), "Text"))])), 0);
  }
  if ($.truthy($.not(L1["result"]))) {
    L1["result"] = $.ne((await $.call(C, "Pos", ["&[Pages]", (await $.mv((await $.mv((await $.v(C, "PageFooter")), "LeftText")), "Text"))])), 0);
  }
  if ($.truthy($.not(L1["result"]))) {
    L1["result"] = $.ne((await $.call(C, "Pos", ["&[Pages]", (await $.mv((await $.mv((await $.v(C, "PageFooter")), "CenterText")), "Text"))])), 0);
  }
  if ($.truthy($.not(L1["result"]))) {
    L1["result"] = $.ne((await $.call(C, "Pos", ["&[Pages]", (await $.mv((await $.mv((await $.v(C, "PageFooter")), "RightText")), "Text"))])), 0);
  }
  return L1.result;
});
  L0["printoutinfo"] = $.fn(async function PrintOutInfo() {
  const L1 = {result: undefined};
  await $.stmt((await $.callv(L0["printrichtext"], [(await $.call(C, "TRichEditStrings", [(await $.v(C, "BeforeGridText"))]))])));
  if ($.truthy($.ge(L0["printoffset"], $.sub((await $.mv(L0["dataprintrec"], "Bottom")), (await $.mv(L0["dataprintrec"], "Top")))))) {
    await $.stmt($.callv(L0["vprinter_newpage"], []));
    L0["printoffset"] = 0;
  }
  await $.stmt((await $.callv(L0["initpolybookmark"], [L0["pbm1"]])));
  while ($.truthy(true)) {
    L0["pbm2"] = (await $.callv(L0["calcprintrows"], [L0["pbm1"], $.add((await $.mv(L0["dataprintrec"], "Top")), L0["printoffset"]), (await $.mv(L0["dataprintrec"], "Bottom"))]));
    L0["printoffset"] = $.add((await $.callv(L0["drawrowsrange"], [L0["pbm1"], L0["pbm2"]])), L0["penw"]);
    if ($.truthy(($.eq((await $.mv(L0["pbm2"], "EOF")), true)))) {
      break;
    } else {
      L0["printoffset"] = 0;
    }
    L0["pbm1"] = L0["pbm2"];
    await $.tick();
  }
  await $.mset((await $.mv(L0["vprinter_canvas"], "BRUSH")), "Style", (await $.v(C, "bsClear")));
  await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", (await $.v(C, "clWhite")));
  await $.stmt((await $.callv(L0["printrichtext"], [(await $.call(C, "TRichEditStrings", [(await $.v(C, "AfterGridText"))]))])));
  return L1.result;
});
  L0["fsubstituted"] = false;
  L0["footervalues"] = null;
  L0["prncolumns"] = null;
  L0["prncolumnwidths"] = null;
  L0["beforegridtextstream"] = null;
  L0["aftergridtextstream"] = null;
  L0["rendermetafie"] = null;
  L0["rendercanvas"] = null;
  L0["printoffset"] = 0;
  L0["pagecount"] = 1;
  L0["calcinfomode"] = false;
  if ($.truthy((await $.or_((await $.or_((await $.or_($.not((await $.call(C, "Assigned", [(await $.v(C, "DBGridEh"))]))), async () => $.not((await $.call(C, "Assigned", [(await $.mv((await $.v(C, "DBGridEh")), "DataSource"))]))))), async () => $.not((await $.call(C, "Assigned", [(await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet"))]))))), async () => $.not((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Active"))))))) {
    return L0.result;
  }
  await $.stmt($.callv(L0["initmacrovalues"], []));
  L0["colstopages"] = null;
  L0["prnrowheights"] = null;
  L0["prncolwidths"] = null;
  L0["polypolypoints"] = null;
  L0["polylengths"] = null;
  await $.stmt($.callv(L0["createprncolumnslist"], []));
  L0["prncolumnwidths"] = (await $.mv((await $.v(C, "TList")), "Create"));
  L0["footervalues"] = (await $.call(C, "AllocMem", [$.mul($.mul((await $.call(C, "SizeOf", [(await $.v(C, "Currency"))])), (await $.mv(L0["prncolumns"], "Count"))), (await $.mv((await $.v(C, "DBGridEh")), "FooterRowCount")))]));
  await $.mcall(L0["vprinter"], "BeginDoc", []);
  L0["vprinter_canvas"] = (await $.mv(L0["vprinter"], "Canvas"));
  L0["firstpage"] = true;
  L0["savedbookmark"] = (await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "Bookmark"));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnBeforePrint"))])))) {
    await $.stmt((await $.call(C, "OnBeforePrint", [Self])));
  }
  try {
    if ($.truthy($.ne((await $.v(C, "FSubstitutesNames")), null))) {
      if ($.truthy($.gt((await $.mv((await $.v(C, "BeforeGridText")), "Count")), 0))) {
        L0["beforegridtextstream"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
        await $.stmt((await $.mcall((await $.v(C, "BeforeGridText")), "SaveToStream", [L0["beforegridtextstream"]])));
      }
      if ($.truthy($.gt((await $.mv((await $.v(C, "AfterGridText")), "Count")), 0))) {
        L0["aftergridtextstream"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
        await $.stmt((await $.mcall((await $.v(C, "AfterGridText")), "SaveToStream", [L0["aftergridtextstream"]])));
      }
      await $.stmt($.callv(L0["setsubstituting"], []));
      L0["fsubstituted"] = true;
    }
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "DisableControls", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "First", []);
    L0["colstopages"] = (await $.mv((await $.v(C, "TList")), "Create"));
    L0["prnrowheights"] = (await $.mv((await $.v(C, "TList")), "Create"));
    L0["prncolwidths"] = (await $.mv((await $.v(C, "TList")), "Create"));
    L0["polypolypoints"] = (await $.mv((await $.v(C, "TList")), "Create"));
    L0["polylengths"] = (await $.mv((await $.v(C, "TList")), "Create"));
    await $.mset(L0["vprinter"], "Title", (await $.v(C, "STabularInformationEh")));
    await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Style", (await $.v(C, "bsClear")));
    await $.mset((await $.mv(L0["vprinter_canvas"], "Brush")), "Color", (await $.v(C, "clWhite")));
    await $.mset(L0["vprinter_canvas"], "Font", (await $.mv((await $.v(C, "DBGridEh")), "Font")));
    if ($.truthy(($.ne((await $.v(C, "PrintFontName")), "")))) {
      await $.mset((await $.mv(L0["vprinter_canvas"], "Font")), "Name", (await $.v(C, "PrintFontName")));
    }
    await $.stmt($.callv(L0["calcdevicecaps"], []));
    await $.stmt($.callv(L0["calccolumnwidths"], []));
    await $.stmt($.callv(L0["calcfiteddatarect"], []));
    await $.stmt($.callv(L0["calccolstopages"], []));
    await $.stmt($.callv(L0["resetprintercanvas"], []));
    L0["titlerect"] = (await $.call(C, "Rect", [(await $.mv(L0["dataprintrec"], "Left")), (await $.mv(L0["dataprintrec"], "Top")), (await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Top"))]));
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["titlerect"], "Bottom")), async ($t137) => { await $.mset(L0["titlerect"], "Bottom", $t137); }), (await $.callv(L0["printpagecolontitle"], [L0["titlerect"], true, true]))])));
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["dataprintrec"], "Top")), async ($t138) => { await $.mset(L0["dataprintrec"], "Top", $t138); }), $.sub((await $.mv(L0["titlerect"], "Bottom")), (await $.mv(L0["dataprintrec"], "Top")))])));
    L0["footerrect"] = (await $.call(C, "Rect", [(await $.mv(L0["dataprintrec"], "Left")), (await $.mv(L0["dataprintrec"], "Bottom")), (await $.mv(L0["dataprintrec"], "Right")), (await $.mv(L0["dataprintrec"], "Bottom"))]));
    await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.mv(L0["footerrect"], "Top")), async ($t139) => { await $.mset(L0["footerrect"], "Top", $t139); }), (await $.callv(L0["printpagecolontitle"], [L0["footerrect"], false, true]))])));
    await $.stmt((await $.call(C, "Dec", [$.ref(async () => (await $.mv(L0["dataprintrec"], "Bottom")), async ($t140) => { await $.mset(L0["dataprintrec"], "Bottom", $t140); }), $.sub((await $.mv(L0["footerrect"], "Bottom")), (await $.mv(L0["footerrect"], "Top")))])));
    L0["printrec"] = L0["dataprintrec"];
    L0["minrowheight"] = L0["calcminrowheight"];
    if ($.truthy((await $.mv((await $.v(C, "DBGridEh")), "UseMultiTitle")))) {
      await $.stmt($.callv(L0["setprntreewidth"], []));
      L0["prntitleh"] = (await $.callv(L0["setprnchildtreeheight"], [(await $.mv((await $.v(C, "DBGridEh")), "HeadTree"))]));
    } else {
      L0["prntitleh"] = L0["getsimpletitleheight"];
    }
    L0["prntitletexth"] = L0["getgridtitletextheight"];
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["dataprintrec"], "Top")), async ($t141) => { await $.mset(L0["dataprintrec"], "Top", $t141); }), $.add(L0["prntitleh"], L0["prntitletexth"])])));
    if ($.truthy(L0["requiretwopass"])) {
      L0["calcinfomode"] = true;
      L0["acursor"] = (await $.mv((await $.v(C, "Screen")), "Cursor"));
      try {
        await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
        await $.stmt($.callv(L0["createrendercanvas"], []));
        await $.stmt($.callv(L0["printoutinfo"], []));
      } finally {
        await $.mset((await $.v(C, "Screen")), "Cursor", L0["acursor"]);
        await $.stmt($.callv(L0["freerendercanvas"], []));
      }
      await $.stmt($.callv(L0["initmacrovalues"], []));
      L0["calcinfomode"] = false;
      L0["firstpage"] = true;
      L0["printoffset"] = 0;
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "First", []);
      await $.stmt((await $.call(C, "FillChar", [$.ref(async () => L0["footervalues"], async ($t142) => { L0["footervalues"] = $t142; }), $.mul($.mul((await $.call(C, "SizeOf", [(await $.v(C, "Currency"))])), (await $.mv(L0["prncolumns"], "Count"))), (await $.mv((await $.v(C, "DBGridEh")), "FooterRowCount"))), 0])));
    }
    await $.stmt((await $.callv(L0["printpagecolontitle"], [L0["titlerect"], true, false])));
    await $.stmt((await $.callv(L0["printpagecolontitle"], [L0["footerrect"], false, false])));
    await $.stmt($.callv(L0["printoutinfo"], []));
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnAfterPrint"))])))) {
      await $.stmt((await $.call(C, "OnAfterPrint", [Self])));
    }
    if ($.truthy(L0["fsubstituted"])) {
      if ($.truthy($.ne(L0["beforegridtextstream"], null))) {
        await $.mset(L0["beforegridtextstream"], "Position", 0);
        await $.stmt((await $.mcall((await $.v(C, "BeforeGridText")), "LoadFromStream", [L0["beforegridtextstream"]])));
        await $.mcall(L0["beforegridtextstream"], "Free", []);
      }
      if ($.truthy($.ne(L0["aftergridtextstream"], null))) {
        await $.mset(L0["aftergridtextstream"], "Position", 0);
        await $.stmt((await $.mcall((await $.v(C, "AfterGridText")), "LoadFromStream", [L0["aftergridtextstream"]])));
        await $.mcall(L0["aftergridtextstream"], "Free", []);
      }
    }
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "GotoBookmark", [(await $.call(C, "TBookmark", [L0["savedbookmark"]]))])));
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridEh")), "DataSource")), "DataSet")), "EnableControls", []);
    await $.mcall(L0["vprinter"], "EndDoc", []);
    await $.mcall(L0["colstopages"], "Free", []);
    await $.mcall(L0["prnrowheights"], "Free", []);
    await $.mcall(L0["prncolwidths"], "Free", []);
    await $.mcall(L0["polypolypoints"], "Free", []);
    await $.mcall(L0["polylengths"], "Free", []);
    await $.mcall(L0["prncolumnwidths"], "Free", []);
    if ($.truthy($.ne(L0["footervalues"], null))) {
      await $.stmt((await $.call(C, "FreeMem", [L0["footervalues"]])));
    }
    await $.mcall(L0["prncolumns"], "Free", []);
    await $.stmt($.callv(L0["freerendercanvas"], []));
  }
  return L0.result;
}, {"params": ["VPrinter"], "kind": "procedure", "ptypes": ["TVirtualPrinter"]});
  U.method("TPrintDBGridEh", "Print", async function Print(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "PrintTo", [(await $.v(C, "VirtualPrinter"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPrintDBGridEh", "SetDBGridEh", async function SetDBGridEh(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne(L0["value"], (await $.v(C, "FDBGridEh"))))) {
    await $.set(C, "FDBGridEh", L0["value"]);
    if ($.truthy($.ne(L0["value"], null))) {
      await $.stmt((await $.mcall(L0["value"], "FreeNotification", [Self])));
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDBGridEh"]});
  U.method("TPrintDBGridEh", "SetOptions", async function SetOptions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FOptions", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPrintDBGridEhOptions"]});
  U.method("TPrintDBGridEh", "SetPage", async function SetPage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FPage", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPageParams"]});
  U.method("TPrintDBGridEh", "SetPageFooter", async function SetPageFooter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FPageFooter", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPageColontitle"]});
  U.method("TPrintDBGridEh", "SetPageHeader", async function SetPageHeader(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FPageHeader", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPageColontitle"]});
  U.method("TPrintDBGridEh", "SetPrintFontName", async function SetPrintFontName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FPrintFontName", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPrintDBGridEh", "SetTitle", async function SetTitle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FTitle")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TPrintDBGridEh", "SetUnits", async function SetUnits(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "amul": 0};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne(L0["value"], (await $.v(C, "FUnits"))))) {
    await $.set(C, "FUnits", L0["value"]);
    if ($.truthy($.in_((await $.v(C, "csLoading")), (await $.v(C, "ComponentState"))))) {
      return L0.result;
    }
    if ($.truthy($.eq(L0["value"], (await $.v(C, "Inches"))))) {
      L0["amul"] = $.fdiv(1, 2.54);
    } else {
      L0["amul"] = 2.54;
    }
    {
      const $t143 = (await $.v(C, "Page"));
      await $.wset([$t143], "BottomMargin", $.mul((await $.wv([$t143], "BottomMargin", C, false)), (await $.wv([$t143], "AMul", { get: async () => L0["amul"], set: async (v) => { L0["amul"] = v; }, local: true }, false))), C);
      await $.wset([$t143], "TopMargin", $.mul((await $.wv([$t143], "TopMargin", C, false)), (await $.wv([$t143], "AMul", { get: async () => L0["amul"], set: async (v) => { L0["amul"] = v; }, local: true }, false))), C);
      await $.wset([$t143], "LeftMargin", $.mul((await $.wv([$t143], "LeftMargin", C, false)), (await $.wv([$t143], "AMul", { get: async () => L0["amul"], set: async (v) => { L0["amul"] = v; }, local: true }, false))), C);
      await $.wset([$t143], "RightMargin", $.mul((await $.wv([$t143], "RightMargin", C, false)), (await $.wv([$t143], "AMul", { get: async () => L0["amul"], set: async (v) => { L0["amul"] = v; }, local: true }, false))), C);
    }
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TMeasureUnits"]});
  U.method("TPrintDBGridEh", "PrinterSetupDialog", async function PrinterSetupDialog(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "fPrnDBGridEhSetupDialog"))]))))) {
    await $.set(C, "fPrnDBGridEhSetupDialog", (await $.mcall((await $.v(C, "TfPrnDBGridEhSetupDialog")), "Create", [(await $.v(C, "Application"))])));
  }
  {
    const $t144 = (await $.v(C, "fPrnDBGridEhSetupDialog"));
    await $.mset((await $.wv([$t144], "seUpMargin", C, false)), "Text", (await $.wcall([$t144], "FloatToStr", [(await $.mv((await $.wv([$t144], "Page", C, false)), "TopMargin"))], C)));
    await $.mset((await $.wv([$t144], "seLowMargin", C, false)), "Text", (await $.wcall([$t144], "FloatToStr", [(await $.mv((await $.wv([$t144], "Page", C, false)), "BottomMargin"))], C)));
    await $.mset((await $.wv([$t144], "seLeftMargin", C, false)), "Text", (await $.wcall([$t144], "FloatToStr", [(await $.mv((await $.wv([$t144], "Page", C, false)), "LeftMargin"))], C)));
    await $.mset((await $.wv([$t144], "seRightMargin", C, false)), "Text", (await $.wcall([$t144], "FloatToStr", [(await $.mv((await $.wv([$t144], "Page", C, false)), "RightMargin"))], C)));
    await $.mset((await $.wv([$t144], "cbFitWidthToPage", C, false)), "Checked", $.in_((await $.wv([$t144], "pghFitGridToPageWidth", C, false)), (await $.wv([$t144], "Options", C, false))));
    await $.mset((await $.wv([$t144], "ePrintFont", C, false)), "Text", (await $.wv([$t144], "PrintFontName", C, false)));
    await $.mset((await $.wv([$t144], "cbAutoStretch", C, false)), "Checked", $.in_((await $.wv([$t144], "pghRowAutoStretch", C, false)), (await $.wv([$t144], "Options", C, false))));
    await $.mset((await $.wv([$t144], "cbColored", C, false)), "Checked", $.in_((await $.wv([$t144], "pghColored", C, false)), (await $.wv([$t144], "Options", C, false))));
    if ($.truthy($.in_((await $.wv([$t144], "pghFitingByColWidths", C, false)), (await $.wv([$t144], "Options", C, false))))) {
      await $.mset((await $.wv([$t144], "rgFitingType", C, false)), "ItemIndex", 1);
    } else {
      await $.mset((await $.wv([$t144], "rgFitingType", C, false)), "ItemIndex", 0);
    }
    await $.mset((await $.wv([$t144], "cbOptimalColWidths", C, false)), "Checked", $.in_((await $.wv([$t144], "pghOptimalColWidths", C, false)), (await $.wv([$t144], "Options", C, false))));
    if ($.truthy($.eq((await $.wv([$t144], "ShowModal", C, false)), (await $.wv([$t144], "mrOk", C, false))))) {
      await $.mset((await $.wv([$t144], "Page", C, false)), "TopMargin", (await $.wcall([$t144], "StrToFloat", [(await $.mv((await $.wv([$t144], "seUpMargin", C, false)), "Text"))], C)));
      await $.mset((await $.wv([$t144], "Page", C, false)), "BottomMargin", (await $.wcall([$t144], "StrToFloat", [(await $.mv((await $.wv([$t144], "seLowMargin", C, false)), "Text"))], C)));
      await $.mset((await $.wv([$t144], "Page", C, false)), "LeftMargin", (await $.wcall([$t144], "StrToFloat", [(await $.mv((await $.wv([$t144], "seLeftMargin", C, false)), "Text"))], C)));
      await $.mset((await $.wv([$t144], "Page", C, false)), "RightMargin", (await $.wcall([$t144], "StrToFloat", [(await $.mv((await $.wv([$t144], "seRightMargin", C, false)), "Text"))], C)));
      if ($.truthy((await $.mv((await $.wv([$t144], "cbFitWidthToPage", C, false)), "Checked")))) {
        await $.wset([$t144], "Options", $.add((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghFitGridToPageWidth", C, false))]), C);
      } else {
        await $.wset([$t144], "Options", $.sub((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghFitGridToPageWidth", C, false))]), C);
      }
      await $.wset([$t144], "PrintFontName", (await $.mv((await $.wv([$t144], "ePrintFont", C, false)), "Text")), C);
      if ($.truthy((await $.mv((await $.wv([$t144], "cbAutoStretch", C, false)), "Checked")))) {
        await $.wset([$t144], "Options", $.add((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghRowAutoStretch", C, false))]), C);
      } else {
        await $.wset([$t144], "Options", $.sub((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghRowAutoStretch", C, false))]), C);
      }
      if ($.truthy((await $.mv((await $.wv([$t144], "cbColored", C, false)), "Checked")))) {
        await $.wset([$t144], "Options", $.add((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghColored", C, false))]), C);
      } else {
        await $.wset([$t144], "Options", $.sub((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghColored", C, false))]), C);
      }
      if ($.truthy($.eq((await $.mv((await $.wv([$t144], "rgFitingType", C, false)), "ItemIndex")), 1))) {
        await $.wset([$t144], "Options", $.add((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghFitingByColWidths", C, false))]), C);
      } else {
        await $.wset([$t144], "Options", $.sub((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghFitingByColWidths", C, false))]), C);
      }
      if ($.truthy((await $.mv((await $.wv([$t144], "cbOptimalColWidths", C, false)), "Checked")))) {
        await $.wset([$t144], "Options", $.add((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghOptimalColWidths", C, false))]), C);
      } else {
        await $.wset([$t144], "Options", $.sub((await $.wv([$t144], "Options", C, false)), [(await $.wv([$t144], "pghOptimalColWidths", C, false))]), C);
      }
      await $.wset([$t144], "Result", (await $.wv([$t144], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrintDBGridEh", "Notification", async function Notification(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acomponent": $.copyArg(p0), "operation": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["acomponent", "operation"]);
  await $.inherited(Self, "TPrintDBGridEh", "Notification", [L0["acomponent"], L0["operation"]], arguments);
  if ($.truthy((await $.and_(($.eq(L0["operation"], (await $.v(C, "opRemove")))), async () => ($.eq(L0["acomponent"], (await $.v(C, "DBGridEh")))))))) {
    await $.set(C, "DBGridEh", null);
  }
  return L0.result;
}, {"params": ["AComponent", "Operation"], "kind": "procedure", "ptypes": ["TComponent", "TOperation"]});
  U.method("TPrintDBGridEh", "PrinterSetupDialogPreview", async function PrinterSetupDialogPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "PrinterSetupDialog")))) {
    await $.stmt($.call(C, "Preview", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPrintDBGridEh", "SetBeforeGridText", async function SetBeforeGridText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "stream": null};
  await $.fixArgs(L0, ["value"]);
  L0["stream"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [""]));
  try {
    await $.stmt((await $.mcall(L0["value"], "SaveToStream", [L0["stream"]])));
    await $.mset(L0["stream"], "Position", 0);
    await $.stmt((await $.mcall((await $.v(C, "BeforeGridText")), "LoadFromStream", [L0["stream"]])));
  } finally {
    await $.mcall(L0["stream"], "Free", []);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TPrintDBGridEh", "DefineProperties", async function DefineProperties(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"filer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["filer"]);
  await $.inherited(Self, "TPrintDBGridEh", "DefineProperties", [L0["filer"]], arguments);
  await $.stmt((await $.mcall(L0["filer"], "DefineBinaryProperty", ["BeforeGridText_Data", (await $.v(C, "ReadBeforeGridText")), (await $.v(C, "WriteBeforeGridText")), $.gt((await $.mv((await $.v(C, "BeforeGridText")), "Count")), 0)])));
  await $.stmt((await $.mcall(L0["filer"], "DefineBinaryProperty", ["AfterGridText_Data", (await $.v(C, "ReadAfterGridText")), (await $.v(C, "WriteAfterGridText")), $.gt((await $.mv((await $.v(C, "AfterGridText")), "Count")), 0)])));
  return L0.result;
}, {"params": ["Filer"], "kind": "procedure", "ptypes": ["TFiler"]});
  U.method("TPrintDBGridEh", "ReadBeforeGridText", async function ReadBeforeGridText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["stream"]);
  await $.stmt((await $.mcall((await $.v(C, "BeforeGridText")), "LoadFromStream", [L0["stream"]])));
  return L0.result;
}, {"params": ["Stream"], "kind": "procedure", "ptypes": ["TStream"]});
  U.method("TPrintDBGridEh", "WriteBeforeGridText", async function WriteBeforeGridText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["stream"]);
  await $.stmt((await $.mcall((await $.v(C, "BeforeGridText")), "SaveToStream", [L0["stream"]])));
  return L0.result;
}, {"params": ["Stream"], "kind": "procedure", "ptypes": ["TStream"]});
  U.method("TPrintDBGridEh", "SetAfterGridText", async function SetAfterGridText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "stream": null};
  await $.fixArgs(L0, ["value"]);
  L0["stream"] = (await $.mcall((await $.v(C, "TStringStream")), "Create", [""]));
  try {
    await $.stmt((await $.mcall(L0["value"], "SaveToStream", [L0["stream"]])));
    await $.mset(L0["stream"], "Position", 0);
    await $.stmt((await $.mcall((await $.v(C, "AfterGridText")), "LoadFromStream", [L0["stream"]])));
  } finally {
    await $.mcall(L0["stream"], "Free", []);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TPrintDBGridEh", "ReadAfterGridText", async function ReadAfterGridText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["stream"]);
  await $.stmt((await $.mcall((await $.v(C, "AfterGridText")), "LoadFromStream", [L0["stream"]])));
  return L0.result;
}, {"params": ["Stream"], "kind": "procedure", "ptypes": ["TStream"]});
  U.method("TPrintDBGridEh", "WriteAfterGridText", async function WriteAfterGridText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"stream": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["stream"]);
  await $.stmt((await $.mcall((await $.v(C, "AfterGridText")), "SaveToStream", [L0["stream"]])));
  return L0.result;
}, {"params": ["Stream"], "kind": "procedure", "ptypes": ["TStream"]});
  U.method("TPrintDBGridEh", "GetAfterGridText", async function GetAfterGridText(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.eq((await $.v(C, "FAfterGridText")), null))) {
    await $.set(C, "FAfterGridText", (await $.mv((await $.v(C, "TRichEditStrings")), "Create")));
  }
  L0["result"] = (await $.v(C, "FAfterGridText"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrintDBGridEh", "GetBeforeGridText", async function GetBeforeGridText(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.eq((await $.v(C, "FBeforeGridText")), null))) {
    await $.set(C, "FBeforeGridText", (await $.mv((await $.v(C, "TRichEditStrings")), "Create")));
  }
  L0["result"] = (await $.v(C, "FBeforeGridText"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPrintDBGridEh", "GridTextReplace", async function GridTextReplace(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"richstrings": $.copyArg(p0), "searchstr": $.copyArg(p1), "replacestr": $.copyArg(p2), "startpos": $.copyArg(p3), "length": $.copyArg(p4), "options": $.copyArg(p5), "replaceall": $.copyArg(p6), result: 0};
  await $.fixArgs(L0, ["richstrings", "searchstr", "replacestr", "startpos", "length", "options", "replaceall"]);
  L0["result"] = (-(1));
  {
    const $t145 = (await $.call(C, "TRichEditStrings", [L0["richstrings"]]));
    while ($.truthy((await $.wv([$t145], "True", C, false)))) {
      await $.wset([$t145], "Result", (await $.mcall((await $.wv([$t145], "RichEdit", C, false)), "FindText", [(await $.wv([$t145], "SearchStr", { get: async () => L0["searchstr"], set: async (v) => { L0["searchstr"] = v; }, local: true }, false)), (await $.wv([$t145], "StartPos", { get: async () => L0["startpos"], set: async (v) => { L0["startpos"] = v; }, local: true }, false)), (await $.wv([$t145], "Length", { get: async () => L0["length"], set: async (v) => { L0["length"] = v; }, local: true }, false)), (await $.wv([$t145], "Options", { get: async () => L0["options"], set: async (v) => { L0["options"] = v; }, local: true }, false))])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t145], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (-(1))))) {
        await $.mset((await $.wv([$t145], "RichEdit", C, false)), "SelStart", (await $.wv([$t145], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)));
        await $.mset((await $.wv([$t145], "RichEdit", C, false)), "SelLength", (await $.mcall((await $.wv([$t145], "System", C, false)), "Length", [(await $.wv([$t145], "SearchStr", { get: async () => L0["searchstr"], set: async (v) => { L0["searchstr"] = v; }, local: true }, false))])));
        await $.mset((await $.wv([$t145], "RichEdit", C, false)), "SelText", (await $.wv([$t145], "ReplaceStr", { get: async () => L0["replacestr"], set: async (v) => { L0["replacestr"] = v; }, local: true }, false)));
      }
      if ($.truthy((await $.or_($.not((await $.wv([$t145], "ReplaceAll", { get: async () => L0["replaceall"], set: async (v) => { L0["replaceall"] = v; }, local: true }, false))), async () => ($.eq((await $.wv([$t145], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), (-(1)))))))) {
        break;
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["RichStrings", "SearchStr", "ReplaceStr", "StartPos", "Length", "Options", "ReplaceAll"], "kind": "function", "ptypes": ["TStrings", "String", "String", "Integer", "Integer", "TSearchTypes", "Boolean"]});
  U.method("TPrintDBGridEh", "SetSubstitutes", async function SetSubstitutes(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"asubstitutes": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["asubstitutes"]);
  if ($.truthy($.eq((await $.v(C, "FSubstitutesNames")), null))) {
    await $.set(C, "FSubstitutesNames", (await $.mv((await $.v(C, "TStringList")), "Create")));
    await $.set(C, "FSubstitutesValues", (await $.mv((await $.v(C, "TStringList")), "Create")));
  }
  await $.mcall((await $.v(C, "FSubstitutesNames")), "Clear", []);
  await $.mcall((await $.v(C, "FSubstitutesValues")), "Clear", []);
  { const $t146 = $.idiv((await $.call(C, "High", [L0["asubstitutes"]])), 2);
    L0["i"] = 0;
    let $t147 = true;
    for (;;) {
      if (!$t147) { L0["i"] = $.succ(L0["i"], 1); }
      $t147 = false;
      if (!($.ord(L0["i"]) <= $.ord($t146))) break;
      await $.stmt((await $.mcall((await $.v(C, "FSubstitutesNames")), "Add", [(await $.call(C, "String", [(await $.mv((await $.idx(L0["asubstitutes"], [$.mul(L0["i"], 2)])), "VAnsiString"))]))])));
      await $.stmt((await $.mcall((await $.v(C, "FSubstitutesValues")), "Add", [(await $.call(C, "String", [(await $.mv((await $.idx(L0["asubstitutes"], [$.add($.mul(L0["i"], 2), 1)])), "VAnsiString"))]))])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["ASubstitutes"], "kind": "procedure", "ptypes": ["ArrayOfConst"]});
  U.method("TPageParams", "Assign", async function Assign(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["source"]);
  if ($.truthy($.is_(L0["source"], "TPageParams"))) {
    await $.set(C, "BottomMargin", (await $.mv((await $.call(C, "TPageParams", [L0["source"]])), "BottomMargin")));
    await $.set(C, "LeftMargin", (await $.mv((await $.call(C, "TPageParams", [L0["source"]])), "LeftMargin")));
    await $.set(C, "RightMargin", (await $.mv((await $.call(C, "TPageParams", [L0["source"]])), "RightMargin")));
    await $.set(C, "TopMargin", (await $.mv((await $.call(C, "TPageParams", [L0["source"]])), "TopMargin")));
  } else {
    await $.inherited(Self, "TPageParams", "Assign", [L0["source"]], arguments);
  }
  return L0.result;
}, {"params": ["Source"], "kind": "procedure", "ptypes": ["TPersistent"]});
  U.method("TPageParams", "Create", async function Create(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPageParams", "Create", null, arguments);
  await $.set(C, "BottomMargin", 2);
  await $.set(C, "LeftMargin", 2);
  await $.set(C, "RightMargin", 2);
  await $.set(C, "TopMargin", 2);
  return L0.result;
}, {"params": [], "kind": "constructor", "ptypes": []});
  U.method("TPageParams", "SetBottomMargin", async function SetBottomMargin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FBottomMargin", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Currency"]});
  U.method("TPageParams", "SetLeftMargin", async function SetLeftMargin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FLeftMargin", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Currency"]});
  U.method("TPageParams", "SetRightMargin", async function SetRightMargin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FRightMargin", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Currency"]});
  U.method("TPageParams", "SetTopMargin", async function SetTopMargin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FTopMargin", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Currency"]});
  U.method("TPageColontitle", "Assign", async function Assign(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"source": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["source"]);
  if ($.truthy($.is_(L0["source"], "TPageColontitle"))) {
    await $.set(C, "LeftText", (await $.mv((await $.call(C, "TPageColontitle", [L0["source"]])), "LeftText")));
    await $.set(C, "CenterText", (await $.mv((await $.call(C, "TPageColontitle", [L0["source"]])), "CenterText")));
    await $.set(C, "RightText", (await $.mv((await $.call(C, "TPageColontitle", [L0["source"]])), "RightText")));
    await $.set(C, "Font", (await $.mv((await $.call(C, "TPageColontitle", [L0["source"]])), "Font")));
    await $.set(C, "LineType", (await $.mv((await $.call(C, "TPageColontitle", [L0["source"]])), "LineType")));
  } else {
    await $.inherited(Self, "TPageColontitle", "Assign", [L0["source"]], arguments);
  }
  return L0.result;
}, {"params": ["Source"], "kind": "procedure", "ptypes": ["TPersistent"]});
  U.method("TPageColontitle", "Create", async function Create(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPageColontitle", "Create", null, arguments);
  await $.set(C, "FFont", (await $.mv((await $.v(C, "TFont")), "Create")));
  await $.set(C, "FCenterText", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "FLeftText", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "FRightText", (await $.mv((await $.v(C, "TStringList")), "Create")));
  return L0.result;
}, {"params": [], "kind": "constructor", "ptypes": []});
  U.method("TPageColontitle", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Font")), "Free", []);
  await $.mcall((await $.v(C, "FCenterText")), "Free", []);
  await $.mcall((await $.v(C, "FLeftText")), "Free", []);
  await $.mcall((await $.v(C, "FRightText")), "Free", []);
  await $.inherited(Self, "TPageColontitle", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TPageColontitle", "SetCenterText", async function SetCenterText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FCenterText")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TPageColontitle", "SetFont", async function SetFont(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FFont")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TFont"]});
  U.method("TPageColontitle", "SetLeftText", async function SetLeftText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FLeftText")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TPageColontitle", "SetLineType", async function SetLineType(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FLineType", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPageColontitleLineType"]});
  U.method("TPageColontitle", "SetRightText", async function SetRightText(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FRightText")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "GetCheckSize", []));
  return L0.result;
});
  return U;
}
