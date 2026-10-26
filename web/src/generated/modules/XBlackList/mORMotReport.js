// Generated from mORMotReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("mORMotReport", ["SynCommons", "SynLZ", "SynPdf", "Windows", "Messages", "SysUtils", "Classes", "Contnrs", "Graphics", "Controls", "Dialogs", "Forms", "StdCtrls", "ExtCtrls", "WinSpool", "Printers", "Menus", "ShellAPI", "RichEdit", "Types", "Clipbrd", "Consts"]);
  const C = [U];
  U.const("taLeft", 0);
  U.const("taRight", 1);
  U.const("taCenter", 2);
  U.const("taJustified", 3);
  U.const("caLeft", 0);
  U.const("caRight", 1);
  U.const("caCenter", 2);
  U.const("caCurrency", 3);
  U.const("lsSingle", 0);
  U.const("lsOneAndHalf", 1);
  U.const("lsDouble", 2);
  U.const("zsPercent", 0);
  U.const("zsPageFit", 1);
  U.const("zsPageWidth", 2);
  U.const("psA4", 0);
  U.const("psA5", 1);
  U.const("psA3", 2);
  U.const("psLetter", 3);
  U.const("psLegal", 4);
  U.const("rNone", 0);
  U.const("rNextPage", 1);
  U.const("rPreviousPage", 2);
  U.const("rGotoPage", 3);
  U.const("rZoom", 4);
  U.const("rBookmarks", 5);
  U.const("rPageAsText", 6);
  U.const("rPrint", 7);
  U.const("rExportPDF", 8);
  U.const("rClose", 9);
  $.defRecord("tsavedstate", {"fontname": () => '', "fontcolor": () => 0, "flags": () => 0, "leftmargin": () => 0, "rightmargin": () => 0, "bidimode": () => null});
  $.defRecord("tcolrec", {"colleft": () => 0, "colright": () => 0, "colalign": () => null, "colbold": () => false});
  $.defRecord("tgdipagecontent", {"metafilecompressed": () => null, "text": () => '', "sizepx": () => null, "marginpx": () => null, "offsetpx": () => null});
  U.defClass("THeaderFooter", null, {"text": {"name": "Text", "type": "SynUnicode"}, "state": {"name": "State", "type": "TSavedState"}}, {});
  U.fieldInit("THeaderFooter", "state", () => $.rec("tsavedstate"));
  U.defClass("TPagePaintBox", "TPaintBox", {}, {});
  U.defClass("TGDIPagereference", null, {"page": {"name": "Page", "type": "Integer"}, "rect": {"name": "Rect", "type": "TRect"}, "preview": {"name": "Preview", "type": "TRect"}}, {});
  U.defClass("TGDIPages", "TScrollBox", {"fpreviewsurface": {"name": "fPreviewSurface", "type": "TPagePaintbox"}, "fcanvas": {"name": "fCanvas", "type": "TMetafileCanvas"}, "fcanvastext": {"name": "fCanvasText", "type": "String"}, "fbeforegrouptext": {"name": "fBeforeGroupText", "type": "String"}, "fgrouppage": {"name": "fGroupPage", "type": "TMetafile"}, "fpages": {"name": "fPages", "type": "TGDIPageContentDynArray"}, "fheaderlines": {"name": "fHeaderLines", "type": "TObjectList"}, "ffooterlines": {"name": "fFooterLines", "type": "TObjectList"}, "fcolumns": {"name": "fColumns", "type": "array"}, "fcolumnheaderlist": {"name": "fColumnHeaderList", "type": "array"}, "fptrhdl": {"name": "fPtrHdl", "type": "THandle"}, "ftabcount": {"name": "fTabCount", "type": "integer"}, "fcurrentprinter": {"name": "fCurrentPrinter", "type": "String"}, "forientation": {"name": "fOrientation", "type": "TPrinterOrientation"}, "fdefaultlinewidth": {"name": "fDefaultLineWidth", "type": "integer"}, "fvirtualpagenum": {"name": "fVirtualPageNum", "type": "integer"}, "fcurrpreviewpage": {"name": "fCurrPreviewPage", "type": "integer"}, "fzoomin": {"name": "fZoomIn", "type": "boolean"}, "flineheight": {"name": "fLineHeight", "type": "integer"}, "flinespacing": {"name": "fLineSpacing", "type": "TLineSpacing"}, "fcurrentypos": {"name": "fCurrentYPos", "type": "integer"}, "fcurrenttexttop": {"name": "fCurrentTextTop", "type": "integer"}, "fcurrenttextpage": {"name": "fCurrentTextPage", "type": "integer"}, "fheaderheight": {"name": "fHeaderHeight", "type": "integer"}, "fhangindent": {"name": "fHangIndent", "type": "integer"}, "falign": {"name": "fAlign", "type": "TTextAlign"}, "fbidimode": {"name": "fBiDiMode", "type": "TBiDiMode"}, "fpagemarginspx": {"name": "fPageMarginsPx", "type": "TRect"}, "fhasprinterinstalled": {"name": "fHasPrinterInstalled", "type": "boolean"}, "fforcejpegcompression": {"name": "fForceJPEGCompression", "type": "Integer"}, "fexportpdfapplication": {"name": "fExportPDFApplication", "type": "String"}, "fexportpdfauthor": {"name": "fExportPDFAuthor", "type": "String"}, "fexportpdfsubject": {"name": "fExportPDFSubject", "type": "String"}, "fexportpdfkeywords": {"name": "fExportPDFKeywords", "type": "String"}, "fexportpdfembeddedttf": {"name": "fExportPDFEmbeddedTTF", "type": "boolean"}, "fexportpdfa1": {"name": "fExportPDFA1", "type": "boolean"}, "fexportpdfbackground": {"name": "fExportPDFBackground", "type": "TGraphic"}, "fexportpdfuseuniscribe": {"name": "fExportPDFUseUniscribe", "type": "boolean"}, "fexportpdfusefontfallback": {"name": "fExportPDFUseFontFallBack", "type": "boolean"}, "fexportpdffontfallbackname": {"name": "fExportPDFFontFallBackName", "type": "String"}, "fexportpdfencryptionlevel": {"name": "fExportPDFEncryptionLevel", "type": "TPdfEncryptionLevel"}, "fexportpdfencryptionuserpassword": {"name": "fExportPDFEncryptionUserPassword", "type": "String"}, "fexportpdfencryptionownerpassword": {"name": "fExportPDFEncryptionOwnerPassword", "type": "String"}, "fexportpdfencryptionpermissions": {"name": "fExportPDFEncryptionPermissions", "type": "TPdfEncryptionPermissions"}, "fexportpdfgeneratepdf15file": {"name": "fExportPDFGeneratePDF15File", "type": "boolean"}, "fprinterpxperinch": {"name": "fPrinterPxPerInch", "type": "TPoint"}, "fphysicalsizepx": {"name": "fPhysicalSizePx", "type": "TPoint"}, "fphysicaloffsetpx": {"name": "fPhysicalOffsetPx", "type": "TPoint"}, "fcustompxperinch": {"name": "fCustomPxPerInch", "type": "TPoint"}, "fcustompagesize": {"name": "fCustomPageSize", "type": "TPoint"}, "fcustomnonprintableoffset": {"name": "fCustomNonPrintableOffset", "type": "TPoint"}, "fcustompagemargins": {"name": "fCustomPageMargins", "type": "TRect"}, "fzoom": {"name": "fZoom", "type": "integer"}, "fzoomstatus": {"name": "fZoomStatus", "type": "TZoomStatus"}, "fnegstoparenthesesincurrcols": {"name": "fNegsToParenthesesInCurrCols", "type": "boolean"}, "fwordwrapleftcols": {"name": "fWordWrapLeftCols", "type": "boolean"}, "fuseoutlines": {"name": "fUseOutlines", "type": "boolean"}, "fforcescreenresolution": {"name": "fForceScreenResolution", "type": "boolean"}, "fheaderdone": {"name": "fHeaderDone", "type": "boolean"}, "ffooterheight": {"name": "fFooterHeight", "type": "integer"}, "ffootergap": {"name": "fFooterGap", "type": "integer"}, "finheaderorfooter": {"name": "fInHeaderOrFooter", "type": "boolean"}, "fcolumnheaderprinted": {"name": "fColumnHeaderPrinted", "type": "boolean"}, "fcolumnheaderprintedatleastonce": {"name": "fColumnHeaderPrintedAtLeastOnce", "type": "boolean"}, "fdrawtextacrosscolsdrawingheader": {"name": "fDrawTextAcrossColsDrawingHeader", "type": "boolean"}, "fcolumnheaderingroup": {"name": "fColumnHeaderInGroup", "type": "boolean"}, "fcolumnsusedingroup": {"name": "fColumnsUsedInGroup", "type": "boolean"}, "fgroupverticalspace": {"name": "fGroupVerticalSpace", "type": "integer"}, "fgroupverticalpos": {"name": "fGroupVerticalPos", "type": "integer"}, "fzoomchangedevent": {"name": "fZoomChangedEvent", "type": "TZoomChangedEvent"}, "fpreviewpagechangedevent": {"name": "fPreviewPageChangedEvent", "type": "TNotifyEvent"}, "fstartnewpage": {"name": "fStartNewPage", "type": "TNewPageEvent"}, "fstartpageheader": {"name": "fStartPageHeader", "type": "TNotifyEvent"}, "fendpageheader": {"name": "fEndPageHeader", "type": "TNotifyEvent"}, "fstartpagefooter": {"name": "fStartPageFooter", "type": "TNotifyEvent"}, "fendpagefooter": {"name": "fEndPageFooter", "type": "TNotifyEvent"}, "fstartcolumnheader": {"name": "fStartColumnHeader", "type": "TNotifyEvent"}, "fendcolumnheader": {"name": "fEndColumnHeader", "type": "TNotifyEvent"}, "fsavedcount": {"name": "fSavedCount", "type": "integer"}, "fsaved": {"name": "fSaved", "type": "array"}, "ftab": {"name": "fTab", "type": "array"}, "fcolumnswithbottomgrayline": {"name": "fColumnsWithBottomGrayLine", "type": "boolean"}, "fcolumnsrowlineheight": {"name": "fColumnsRowLineHeight", "type": "integer"}, "fondocumentproducedevent": {"name": "fOnDocumentProducedEvent", "type": "TNotifyEvent"}, "pagerightbutton": {"name": "PageRightButton", "type": "TPoint"}, "pageleftbutton": {"name": "PageLeftButton", "type": "TPoint"}, "fpagestofootertext": {"name": "fPagesToFooterText", "type": "String"}, "fpagestofooterat": {"name": "fPagesToFooterAt", "type": "TPoint"}, "fpagestofooterstate": {"name": "fPagesToFooterState", "type": "TSavedState"}, "fmetafileforpage": {"name": "fMetaFileForPage", "type": "TMetaFile"}, "fcurrentmetafile": {"name": "fCurrentMetaFile", "type": "TMetaFile"}, "fmousepos": {"name": "fMousePos", "type": "TPoint"}, "fbuttondown": {"name": "fButtonDown", "type": "TPoint"}, "fbuttondownscroll": {"name": "fButtonDownScroll", "type": "TPoint"}, "fbookmarks": {"name": "fBookmarks", "type": "TStringList"}, "flinks": {"name": "fLinks", "type": "TStringList"}, "flinkscurrent": {"name": "fLinksCurrent", "type": "integer"}, "foutline": {"name": "fOutline", "type": "TStringList"}, "finternalunicodestring": {"name": "fInternalUnicodeString", "type": "SynUnicode"}, "fforcedleftoffset": {"name": "fForcedLeftOffset", "type": "integer"}, "previewform": {"name": "PreviewForm", "type": "TForm"}, "previewbuttons": {"name": "PreviewButtons", "type": "array"}, "previewpagecountlabel": {"name": "PreviewPageCountLabel", "type": "TLabel"}, "onpopupmenupopup": {"name": "OnPopupMenuPopup", "type": "TNotifyEvent"}, "onpopupmenuclick": {"name": "OnPopupMenuClick", "type": "TNotifyEvent"}, "popupmenuclass": {"name": "PopupMenuClass", "type": "TPopupMenuClass"}, "caption": {"name": "Caption", "type": "String"}, "forceprintasbitmap": {"name": "ForcePrintAsBitmap", "type": "boolean"}, "forcenoantialiased": {"name": "ForceNoAntiAliased", "type": "boolean"}, "forceinternalantialiased": {"name": "ForceInternalAntiAliased", "type": "boolean"}, "forceinternalantialiasedfontfallback": {"name": "ForceInternalAntiAliasedFontFallBack", "type": "boolean"}, "forcecopytextaswholecontent": {"name": "ForceCopyTextAsWholeContent", "type": "boolean"}, "onstringtounicode": {"name": "OnStringToUnicode", "type": "TOnStringToUnicodeEvent"}, "groupsmustbeonsamepage": {"name": "GroupsMustBeOnSamePage", "type": "boolean"}, "previewsurfacebitmap": {"name": "PreviewSurfaceBitmap", "type": "TBitmap"}}, {"savedstate": {"name": "SavedState", "read": "GetSavedState", "write": "SetSavedState"}, "columncount": {"name": "ColumnCount", "read": "GetColumnCount"}, "textalign": {"name": "TextAlign", "read": "fAlign", "write": "SetTextAlign"}, "bidimode": {"name": "BiDiMode", "read": "fBiDiMode", "write": "fBiDiMode"}, "pages": {"name": "Pages", "read": "fPages"}, "canvas": {"name": "Canvas", "read": "fCanvas"}, "currentypos": {"name": "CurrentYPos", "read": "GetYPos", "write": "SetYPos"}, "lineheight": {"name": "LineHeight", "read": "GetLineHeightMm"}, "printername": {"name": "PrinterName", "read": "fCurrentPrinter"}, "page": {"name": "Page", "read": "fCurrPreviewPage", "write": "SetPage"}, "pagecount": {"name": "PageCount", "read": "GetPageCount"}, "pagemargins": {"name": "PageMargins", "read": "GetPageMargins", "write": "SetPageMargins"}, "leftmargin": {"name": "LeftMargin", "read": "GetLeftMargin", "write": "SetLeftMargin"}, "rightmarginpos": {"name": "RightMarginPos", "read": "GetRightMarginPos"}, "papersize": {"name": "PaperSize", "read": "GetPaperSize"}, "printerpxperinch": {"name": "PrinterPxPerInch", "read": "fPrinterPxPerInch"}, "exportpdfforcejpegcompression": {"name": "ExportPDFForceJPEGCompression", "read": "fForceJPEGCompression", "write": "fForceJPEGCompression"}, "exportpdfapplication": {"name": "ExportPDFApplication", "read": "fExportPDFApplication", "write": "fExportPDFApplication"}, "exportpdfauthor": {"name": "ExportPDFAuthor", "read": "fExportPDFAuthor", "write": "fExportPDFAuthor"}, "exportpdfsubject": {"name": "ExportPDFSubject", "read": "fExportPDFSubject", "write": "fExportPDFSubject"}, "exportpdfkeywords": {"name": "ExportPDFKeywords", "read": "fExportPDFKeywords", "write": "fExportPDFKeywords"}, "exportpdfembeddedttf": {"name": "ExportPDFEmbeddedTTF", "read": "fExportPDFEmbeddedTTF", "write": "fExportPDFEmbeddedTTF"}, "exportpdfa1": {"name": "ExportPDFA1", "read": "fExportPDFA1", "write": "fExportPDFA1"}, "exportpdfbackground": {"name": "ExportPDFBackground", "read": "fExportPDFBackground", "write": "fExportPDFBackground"}, "exportpdfuseuniscribe": {"name": "ExportPDFUseUniscribe", "read": "fExportPDFUseUniscribe", "write": "fExportPDFUseUniscribe"}, "exportpdfusefontfallback": {"name": "ExportPDFUseFontFallBack", "read": "fExportPDFUseFontFallBack", "write": "fExportPDFUseFontFallBack"}, "exportpdffontfallbackname": {"name": "ExportPDFFontFallBackName", "read": "fExportPDFFontFallBackName", "write": "fExportPDFFontFallBackName"}, "exportpdfencryptionlevel": {"name": "ExportPDFEncryptionLevel", "read": "fExportPDFEncryptionLevel", "write": "fExportPDFEncryptionLevel"}, "exportpdfencryptionuserpassword": {"name": "ExportPDFEncryptionUserPassword", "read": "fExportPDFEncryptionUserPassword", "write": "fExportPDFEncryptionUserPassword"}, "exportpdfencryptionownerpassword": {"name": "ExportPDFEncryptionOwnerPassword", "read": "fExportPDFEncryptionOwnerPassword", "write": "fExportPDFEncryptionOwnerPassword"}, "exportpdfencryptionpermissions": {"name": "ExportPDFEncryptionPermissions", "read": "fExportPDFEncryptionPermissions", "write": "fExportPDFEncryptionPermissions"}, "exportpdfgeneratepdf15file": {"name": "ExportPDFGeneratePDF15File", "read": "fExportPDFGeneratePDF15File", "write": "fExportPDFGeneratePDF15File"}, "virtualpagenum": {"name": "VirtualPageNum", "read": "fVirtualPageNum", "write": "fVirtualPageNum"}, "headerdone": {"name": "HeaderDone", "read": "fHeaderDone"}, "negstoparenthesesincurrcols": {"name": "NegsToParenthesesInCurrCols", "read": "fNegsToParenthesesInCurrCols", "write": "fNegsToParenthesesInCurrCols"}, "wordwrapleftcols": {"name": "WordWrapLeftCols", "read": "fWordWrapLeftCols", "write": "fWordWrapLeftCols"}, "useoutlines": {"name": "UseOutlines", "read": "fUseOutlines", "write": "fUseOutlines"}, "hangindent": {"name": "HangIndent", "read": "fHangIndent", "write": "fHangIndent"}, "linespacing": {"name": "LineSpacing", "read": "fLineSpacing", "write": "fLineSpacing"}, "orientation": {"name": "Orientation", "read": "GetOrientation", "write": "SetOrientation"}, "zoom": {"name": "Zoom", "read": "fZoom", "write": "SetZoom"}, "zoomstatus": {"name": "ZoomStatus", "read": "fZoomStatus", "write": "SetZoomStatus"}, "forcescreenresolution": {"name": "ForceScreenResolution", "read": "fForceScreenResolution", "write": "fForceScreenResolution"}, "onnewpage": {"name": "OnNewPage", "read": "fStartNewPage", "write": "fStartNewPage"}, "onstartpageheader": {"name": "OnStartPageHeader", "read": "fStartPageHeader", "write": "fStartPageHeader"}, "onendpageheader": {"name": "OnEndPageHeader", "read": "fEndPageHeader", "write": "fEndPageHeader"}, "onstartpagefooter": {"name": "OnStartPageFooter", "read": "fStartPageFooter", "write": "fStartPageFooter"}, "onendpagefooter": {"name": "OnEndPageFooter", "read": "fEndPageFooter", "write": "fEndPageFooter"}, "onstartcolumnheader": {"name": "OnStartColumnHeader", "read": "fStartColumnHeader", "write": "fStartColumnHeader"}, "onendcolumnheader": {"name": "OnEndColumnHeader", "read": "fEndColumnHeader", "write": "fEndColumnHeader"}, "ondocumentproduced": {"name": "OnDocumentProduced", "read": "fOnDocumentProducedEvent", "write": "fOnDocumentProducedEvent"}, "onpreviewpagechanged": {"name": "OnPreviewPageChanged", "read": "fPreviewPageChangedEvent", "write": "fPreviewPageChangedEvent"}, "onzoomchanged": {"name": "OnZoomChanged", "read": "fZoomChangedEvent", "write": "fZoomChangedEvent"}});
  U.fieldInit("TGDIPages", "fpages", () => []);
  U.fieldInit("TGDIPages", "fcolumns", () => []);
  U.fieldInit("TGDIPages", "fcolumnheaderlist", () => []);
  U.fieldInit("TGDIPages", "fsaved", () => []);
  U.fieldInit("TGDIPages", "ftab", () => []);
  U.fieldInit("TGDIPages", "fpagestofooterstate", () => $.rec("tsavedstate"));
  U.fieldInit("TGDIPages", "previewbuttons", () => []);
  U.init(async () => {
    U.const("MAXCOLS", 20);
    U.const("MAXTABS", 20);
    U.const("PAGENUMBER", "<<pagenumber>>");
    U.const("sPDFFile", "Acrobat File");
    U.const("sPageN", "Page %d / %d");
    U.const("sReportPopupMenu1", $.add("&Next page,&Previous page,&Go to Page...,&Zoom...,", "&Bookmarks,Copy Page as &Text,P&rint,PDF &Export,&Close,Page fit,Page width"));
    U.const("sReportPopupMenu2", "Pages %d to %d,Page %d");
    U.const("GRAY_MARGIN", 10);
    U.const("PAGE_WIDTH", (-(1)));
    U.const("PAGE_FIT", (-(2)));
    U.const("FORMAT_DEFAULT", 0);
    U.const("FORMAT_SIZE_MASK", 255);
    U.const("FORMAT_ALIGN_MASK", 768);
    U.const("FORMAT_LEFT", 0);
    U.const("FORMAT_RIGHT", 256);
    U.const("FORMAT_CENTER", 512);
    U.const("FORMAT_JUSTIFIED", 768);
    U.const("FORMAT_BOLD", 1024);
    U.const("FORMAT_UNDERLINE", 2048);
    U.const("FORMAT_ITALIC", 4096);
    U.const("FORMAT_UNDEFINED", 8192);
    U.const("FORMAT_SINGLELINE", 32768);
    U.const("FORMAT_DOUBLELINE", 16384);
    U.const("FORMAT_LINES", 49152);
    U.const("FORMAT_XPOS_MASK", 4294901760);
    U.const("PAPERSIZE_A4_WIDTH", 210);
    U.const("PAPERSIZE_A4_HEIGHT", 297);
    U.const("ZOOMSTEP", 20);
    U.const("MenuZoom", [25, 50, 75, 100, 125, 150, 200]);
  });
  U.func("TextExtent", async function TextExtent(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"canvas": $.copyArg(p0), "text": $.copyArg(p1), "len": (p2 === undefined ? 0 : p2), result: null};
  await $.fixArgs(L0, ["canvas", "text", "len"]);
  await $.mset(L0["result"], "cX", 0);
  await $.mset(L0["result"], "cY", 0);
  if ($.truthy($.eq(L0["len"], 0))) {
    L0["len"] = (await $.call(C, "length", [L0["text"]]));
  }
  await $.stmt((await $.call(C, "GetTextExtentPoint32W", [(await $.mv(L0["canvas"], "Handle")), (await $.call(C, "pointer", [L0["text"]])), L0["len"], L0["result"]])));
  return L0.result;
}, {"params": ["Canvas", "Text", "Len"], "kind": "function", "ptypes": ["TCanvas", "SynUnicode", "integer"]});
  U.func("TextWidthC", async function TextWidthC(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"canvas": $.copyArg(p0), "text": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["canvas", "text"]);
  L0["result"] = (await $.mv((await $.call(C, "TextExtent", [L0["canvas"], L0["text"]])), "cX"));
  return L0.result;
}, {"params": ["Canvas", "Text"], "kind": "function", "ptypes": ["TCanvas", "SynUnicode"]});
  U.func("TextOut", async function TextOut(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"canvas": $.copyArg(p0), "x": $.copyArg(p1), "y": $.copyArg(p2), "text": $.copyArg(p3), "len": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["canvas", "x", "y", "text", "len"]);
  await $.stmt((await $.call(C, "ExtTextOutW", [(await $.mv(L0["canvas"], "Handle")), L0["x"], L0["y"], (await $.mv(L0["canvas"], "TextFlags")), null, L0["text"], L0["len"], null])));
  return L0.result;
}, {"params": ["Canvas", "X", "Y", "Text", "Len"], "kind": "procedure", "ptypes": ["TCanvas", "integer", "integer", "PWideChar", "integer"]});
  U.func("TextOut", async function TextOut(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"canvas": $.copyArg(p0), "x": $.copyArg(p1), "y": $.copyArg(p2), "text": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["canvas", "x", "y", "text"]);
  await $.stmt((await $.call(C, "ExtTextOutW", [(await $.mv(L0["canvas"], "Handle")), L0["x"], L0["y"], (await $.mv(L0["canvas"], "TextFlags")), null, (await $.call(C, "pointer", [L0["text"]])), (await $.call(C, "Length", [L0["text"]])), null])));
  return L0.result;
}, {"params": ["Canvas", "X", "Y", "Text"], "kind": "procedure", "ptypes": ["TCanvas", "integer", "integer", "SynUnicode"]});
  U.func("Register", async function Register(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "RegisterComponents", ["Samples", [(await $.v(C, "TGDIPages"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ConvertNegsToParentheses", async function ConvertNegsToParentheses(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"valstr": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["valstr"]);
  L0["result"] = L0["valstr"];
  if ($.truthy((await $.or_(($.eq(L0["result"], "")), async () => ($.ne((await $.idx(L0["result"], [1])), "-")))))) {
    return L0.result;
  }
  { const $t1 = await $.iset(L0["result"], [1], "("); if ($t1 !== undefined) { L0["result"] = $t1; } }
  L0["result"] = $.add(L0["result"], ")");
  return L0.result;
}, {"params": ["ValStr"], "kind": "function", "ptypes": ["SynUnicode"]});
  U.func("PrinterDriverExists", async function PrinterDriverExists(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "flags": 0, "count": 0, "numinfo": 0, "level": 0};
  L0["count"] = 0;
  try {
    if ($.truthy($.eq((await $.v(C, "Win32Platform")), (await $.v(C, "VER_PLATFORM_WIN32_NT"))))) {
      L0["flags"] = (await $.or_((await $.v(C, "PRINTER_ENUM_CONNECTIONS")), async () => (await $.v(C, "PRINTER_ENUM_LOCAL"))));
      L0["level"] = 4;
    } else {
      L0["flags"] = (await $.v(C, "PRINTER_ENUM_LOCAL"));
      L0["level"] = 5;
    }
    await $.stmt((await $.call(C, "EnumPrinters", [L0["flags"], null, L0["level"], null, 0, L0["count"], L0["numinfo"]])));
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
  }
  L0["result"] = ($.gt(L0["count"], 0));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("RightTrim", async function RightTrim(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: null, "i": 0};
  await $.fixArgs(L0, ["s"]);
  L0["i"] = (await $.call(C, "Length", [L0["s"]]));
  while ($.truthy((await $.and_(($.gt(L0["i"], 0)), async () => ($.le((await $.call(C, "ord", [(await $.idx(L0["s"], [L0["i"]]))])), 32)))))) {
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["i"], async ($t3) => { L0["i"] = $t3; })])));
    await $.tick();
  }
  await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), (await $.call(C, "PWideChar", [(await $.call(C, "pointer", [L0["s"]]))])), L0["i"]])));
  return L0.result;
}, {"params": ["S"], "kind": "function", "ptypes": ["SynUnicode"]});
  U.func("LowerCaseU", async function LowerCaseU(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: null, "i": 0};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), (await $.call(C, "PWideChar", [(await $.call(C, "pointer", [L0["s"]]))])), (await $.call(C, "length", [L0["s"]]))])));
  { const $t6 = $.sub((await $.call(C, "length", [L0["s"]])), 1);
    L0["i"] = 0;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["i"] = $.succ(L0["i"], 1); }
      $t7 = false;
      if (!($.ord(L0["i"]) <= $.ord($t6))) break;
      if ($.truthy($.in_((await $.idx((await $.call(C, "PWordArray", [L0["result"]])), [L0["i"]])), [...$.range((await $.call(C, "ord", ["A"])),(await $.call(C, "ord", ["Z"])))]))) {
        await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.idx((await $.call(C, "PWordArray", [L0["result"]])), [L0["i"]])), async ($t8) => { await $.iset((await $.call(C, "PWordArray", [L0["result"]])), [L0["i"]], $t8); }), 32])));
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "function", "ptypes": ["SynUnicode"]});
  U.func("Max", async function Max(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"a": $.copyArg(p0), "b": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["a", "b"]);
  if ($.truthy($.gt(L0["a"], L0["b"]))) {
    L0["result"] = L0["a"];
  } else {
    L0["result"] = L0["b"];
  }
  return L0.result;
}, {"params": ["a", "b"], "kind": "function", "ptypes": ["integer", "integer"]});
  U.func("Min", async function Min(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"a": $.copyArg(p0), "b": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["a", "b"]);
  if ($.truthy($.lt(L0["a"], L0["b"]))) {
    L0["result"] = L0["a"];
  } else {
    L0["result"] = L0["b"];
  }
  return L0.result;
}, {"params": ["a", "b"], "kind": "function", "ptypes": ["integer", "integer"]});
  U.func("UseDefaultPrinter", async function UseDefaultPrinter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.mv((await $.v(C, "Printers")), "Printer")), "PrinterIndex", (-(1)));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("GetDefaultPrinterName", async function GetDefaultPrinterName(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "device": [], "p": '', "p2": ''};
  await $.stmt((await $.call(C, "GetProfileString", ["windows", "device", "", L0["device"], 255])));
  L0["p2"] = L0["device"];
  while ($.truthy($.eq(L0["p2"], " "))) {
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["p2"], async ($t9) => { L0["p2"] = $t9; })])));
    await $.tick();
  }
  L0["p"] = L0["p2"];
  while ($.truthy($.not(($.in_((await $.call(C, "ord", [L0["p2"]])), [0, (await $.call(C, "ord", [","]))]))))) {
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["p2"], async ($t10) => { L0["p2"] = $t10; })])));
    await $.tick();
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t11) => { L0["result"] = $t11; }), $.sub(L0["p2"], L0["p"])])));
  if ($.truthy($.gt(L0["p2"], L0["p"]))) {
    await $.stmt((await $.call(C, "move", [L0["p"], (await $.call(C, "pointer", [L0["result"]])), $.sub(L0["p2"], L0["p"])])));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("GetDriverForPrinter", async function GetDriverForPrinter(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"device": $.copyArg(p0), "driver": $.copyArg(p1), result: false, "printhandle": 0, "driverinfo2": null, "cnt": 0, "driverpath": ''};
  await $.fixArgs(L0, ["device", "driver"]);
  L0["result"] = false;
  if ($.truthy($.not((await $.call(C, "OpenPrinter", [L0["device"], L0["printhandle"], null]))))) {
    return L0.result;
  }
  try {
    await $.stmt((await $.call(C, "getmem", [L0["driverinfo2"], 1024])));
    try {
      if ($.truthy((await $.call(C, "GetPrinterDriver", [L0["printhandle"], null, 2, L0["driverinfo2"], 1024, L0["cnt"]])))) {
        L0["driverpath"] = (await $.call(C, "changefileext", [(await $.call(C, "extractfilename", [(await $.mv(L0["driverinfo2"], "pDriverPath"))])), ""]));
        await $.stmt((await $.call(C, "strpcopy", [L0["driver"], L0["driverpath"]])));
        L0["result"] = true;
      }
    } finally {
      await $.stmt((await $.call(C, "freemem", [L0["driverinfo2"]])));
    }
  } finally {
    await $.stmt((await $.call(C, "ClosePrinter", [L0["printhandle"]])));
  }
  return L0.result;
}, {"params": ["Device", "Driver"], "kind": "function", "ptypes": ["PChar", "PChar"]});
  U.func("SetCurrentPrinterAsDefault", async function SetCurrentPrinterAsDefault(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "device": [], "driver": [], "port": [], "defaultprinter": '', "hdevicemode": 0};
  L0["defaultprinter"] = (await $.v(C, "GetDefaultPrinterName"));
  await $.stmt((await $.mcall((await $.v(C, "Printer")), "GetPrinter", [L0["device"], L0["driver"], L0["port"], $.ref(async () => L0["hdevicemode"], async ($t12) => { L0["hdevicemode"] = $t12; })])));
  if ($.truthy($.eq(L0["defaultprinter"], L0["device"]))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.idx(L0["driver"], [0])), "\u0000"))) {
    if ($.truthy($.not((await $.call(C, "GetDriverForPrinter", [L0["device"], L0["driver"]]))))) {
      return L0.result;
    }
  }
  L0["defaultprinter"] = (await $.call(C, "FormatString", ["%,%,%", [L0["device"], L0["driver"], L0["port"]]]));
  await $.stmt((await $.call(C, "WriteProfileString", ["windows", "device", (await $.call(C, "pointer", [L0["defaultprinter"]]))])));
  L0["device"] = "windows";
  await $.stmt((await $.call(C, "SendMessage", [(await $.v(C, "HWND_BROADCAST")), (await $.v(C, "WM_WININICHANGE")), 0, (await $.call(C, "PtrInt", [L0["device"]]))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CurrentPrinterName", async function CurrentPrinterName(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "device": [], "driver": [], "port": [], "hdevicemode": 0};
  await $.stmt((await $.mcall((await $.v(C, "Printer")), "GetPrinter", [L0["device"], L0["driver"], L0["port"], $.ref(async () => L0["hdevicemode"], async ($t13) => { L0["hdevicemode"] = $t13; })])));
  L0["result"] = (await $.call(C, "trim", [L0["device"]]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("CurrentPrinterPaperSize", async function CurrentPrinterPaperSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "ptrhdl": 0, "ptrppi": null, "size": null};
  try {
    L0["ptrhdl"] = (await $.mv((await $.v(C, "Printer")), "Handle"));
    await $.mset(L0["ptrppi"], "x", (await $.call(C, "GetDeviceCaps", [L0["ptrhdl"], (await $.v(C, "LOGPIXELSX"))])));
    await $.mset(L0["ptrppi"], "y", (await $.call(C, "GetDeviceCaps", [L0["ptrhdl"], (await $.v(C, "LOGPIXELSY"))])));
    await $.mset(L0["size"], "cx", (await $.call(C, "MulDiv", [(await $.call(C, "GetDeviceCaps", [L0["ptrhdl"], (await $.v(C, "PHYSICALWIDTH"))])), 254, $.mul((await $.mv(L0["ptrppi"], "x")), 10)])));
    await $.mset(L0["size"], "cy", (await $.call(C, "MulDiv", [(await $.call(C, "GetDeviceCaps", [L0["ptrhdl"], (await $.v(C, "PHYSICALHEIGHT"))])), 254, $.mul((await $.mv(L0["ptrppi"], "y")), 10)])));
  } catch ($t14) {
    $.rethrowControl($t14);
    $.handled($t14);
  }
  {
    const $t15 = L0["size"];
    if ($.truthy($.gt((await $.wv([$t15], "cx", C, false)), (await $.wv([$t15], "cy", C, false))))) {
      { const $t16 = (await $.wv([$t15], "cy", C, false));
        if ($.eq($t16, 148)) {
          if ($.truthy($.eq((await $.wv([$t15], "cx", C, false)), 210))) {
            await $.wset([$t15], "result", "A5 (210 x 148mm)", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          }
        }
        else if ($.eq($t16, 210)) {
          if ($.truthy($.eq((await $.wv([$t15], "cx", C, false)), 297))) {
            await $.wset([$t15], "result", "A4 (297 x 210mm)", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          }
        }
        else if ($.eq($t16, 216)) {
          if ($.truthy($.eq((await $.wv([$t15], "cx", C, false)), 279))) {
            await $.wset([$t15], "result", "Letter (11 x 8.5\")", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          } else {
            if ($.truthy($.eq((await $.wv([$t15], "cx", C, false)), 356))) {
              await $.wset([$t15], "result", "Legal (14 x 8.5\")", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            }
          }
        }
        else if ($.eq($t16, 297)) {
          if ($.truthy($.eq((await $.wv([$t15], "cx", C, false)), 420))) {
            await $.wset([$t15], "result", "A3 (420 x 297mm)", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          }
        }
      }
    } else {
      { const $t17 = (await $.wv([$t15], "cx", C, false));
        if ($.eq($t17, 148)) {
          if ($.truthy($.eq((await $.wv([$t15], "cy", C, false)), 210))) {
            await $.wset([$t15], "result", "A5 (148 x 210mm)", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          }
        }
        else if ($.eq($t17, 210)) {
          if ($.truthy($.eq((await $.wv([$t15], "cy", C, false)), 297))) {
            await $.wset([$t15], "result", "A4 (210 x 297mm)", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          }
        }
        else if ($.eq($t17, 216)) {
          if ($.truthy($.eq((await $.wv([$t15], "cy", C, false)), 279))) {
            await $.wset([$t15], "result", "Letter (8.5 x 11\")", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          } else {
            if ($.truthy($.eq((await $.wv([$t15], "cy", C, false)), 356))) {
              await $.wset([$t15], "result", "Legal (8.5 x 14\")", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            }
          }
        }
        else if ($.eq($t17, 297)) {
          if ($.truthy($.eq((await $.wv([$t15], "cy", C, false)), 420))) {
            await $.wset([$t15], "result", "A3 (297 x 420mm)", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
          }
        }
      }
    }
    if ($.truthy($.eq((await $.wv([$t15], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), ""))) {
      await $.wset([$t15], "result", (await $.wcall([$t15], "FormatString", ["Custom (% x %mm)", [(await $.wv([$t15], "cx", C, false)), (await $.wv([$t15], "cy", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("TrimLine", async function TrimLine(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"canvas": $.copyArg(p0), "ls": $.asRef(p1), "rs": $.asRef(p2), "linewidthinpxls": $.copyArg(p3), result: undefined, "i": 0, "len": 0, "numcharwhichfit": 0, "dummy": null};
  await $.fixArgs(L0, ["canvas", "linewidthinpxls"]);
  L0["fits"] = $.fn(async function Fits() {
  const L1 = {result: false};
  L1["result"] = (await $.call(C, "GetTextExtentExPointNoPartialsW", [(await $.mv(L0["canvas"], "Handle")), (await $.call(C, "pointer", [(await L0["ls"].get())])), L0["len"], L0["linewidthinpxls"], $.ref(async () => L0["numcharwhichfit"], async ($t18) => { L0["numcharwhichfit"] = $t18; }), null, $.ref(async () => L0["dummy"], async ($t19) => { L0["dummy"] = $t19; })]));
  return L1.result;
});
  L0["len"] = (await $.call(C, "length", [(await L0["ls"].get())]));
  if ($.truthy($.eq(L0["len"], 0))) {
    return L0.result;
  }
  if ($.truthy($.gt(L0["len"], 1024))) {
    L0["len"] = 1024;
  }
  if ($.truthy($.not(L0["fits"]))) {
    do {
      L0["len"] = $.shr(L0["len"], 1);
      await $.tick();
    } while (!$.truthy((await $.or_(($.eq(L0["len"], 0)), async () => L0["fits"]))));
  }
  if ($.truthy($.eq(L0["numcharwhichfit"], (await $.call(C, "length", [(await L0["ls"].get())]))))) {
    return L0.result;
  }
  L0["i"] = L0["numcharwhichfit"];
  while ($.truthy((await $.and_(($.gt(L0["numcharwhichfit"], 0)), async () => ($.gt((await $.idx((await L0["ls"].get()), [L0["numcharwhichfit"]])), " ")))))) {
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["numcharwhichfit"], async ($t20) => { L0["numcharwhichfit"] = $t20; })])));
    await $.tick();
  }
  if ($.truthy(($.eq(L0["numcharwhichfit"], 0)))) {
    L0["numcharwhichfit"] = L0["i"];
  }
  L0["i"] = $.add(L0["numcharwhichfit"], 1);
  while ($.truthy(($.le((await $.idx((await L0["ls"].get()), [L0["numcharwhichfit"]])), " ")))) {
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["numcharwhichfit"], async ($t21) => { L0["numcharwhichfit"] = $t21; })])));
    await $.tick();
  }
  L0["len"] = (await $.call(C, "length", [(await L0["ls"].get())]));
  while ($.truthy((await $.and_(($.lt(L0["i"], L0["len"])), async () => ($.le((await $.idx((await L0["ls"].get()), [L0["i"]])), " ")))))) {
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["i"], async ($t22) => { L0["i"] = $t22; })])));
    await $.tick();
  }
  await L0["rs"].set((await $.call(C, "copy", [(await L0["ls"].get()), L0["i"], L0["len"]])));
  await L0["ls"].set((await $.call(C, "copy", [(await L0["ls"].get()), 1, L0["numcharwhichfit"]])));
  return L0.result;
}, {"params": ["Canvas", "ls", "rs", "LineWidthInPxls"], "kind": "procedure", "ptypes": ["TCanvas", "SynUnicode", "SynUnicode", "integer"]});
  U.func("PrintBitmap", async function PrintBitmap(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"canvas": $.copyArg(p0), "destrect": $.copyArg(p1), "bitmap": $.copyArg(p2), result: undefined, "bitmapheader": null, "bitmapimage": null, "headersize": 0, "imagesize": 0};
  await $.fixArgs(L0, ["canvas", "destrect", "bitmap"]);
  await $.stmt((await $.call(C, "GetDIBSizes", [(await $.mv(L0["bitmap"], "Handle")), L0["headersize"], L0["imagesize"]])));
  await $.stmt((await $.call(C, "GetMem", [L0["bitmapheader"], L0["headersize"]])));
  await $.stmt((await $.call(C, "GetMem", [L0["bitmapimage"], L0["imagesize"]])));
  try {
    await $.stmt((await $.call(C, "GetDIB", [(await $.mv(L0["bitmap"], "Handle")), (await $.mv(L0["bitmap"], "Palette")), L0["bitmapheader"], L0["bitmapimage"]])));
    await $.stmt((await $.call(C, "StretchDIBits", [(await $.mv(L0["canvas"], "Handle")), (await $.mv(L0["destrect"], "Left")), (await $.mv(L0["destrect"], "Top")), $.sub((await $.mv(L0["destrect"], "Right")), (await $.mv(L0["destrect"], "Left"))), $.sub((await $.mv(L0["destrect"], "Bottom")), (await $.mv(L0["destrect"], "Top"))), 0, 0, (await $.mv(L0["bitmap"], "Width")), (await $.mv(L0["bitmap"], "Height")), L0["bitmapimage"], (await $.call(C, "TBitmapInfo", [L0["bitmapheader"]])), (await $.v(C, "DIB_RGB_COLORS")), (await $.v(C, "SRCCOPY"))])));
  } finally {
    await $.stmt((await $.call(C, "FreeMem", [L0["bitmapheader"]])));
    await $.stmt((await $.call(C, "FreeMem", [L0["bitmapimage"]])));
  }
  return L0.result;
}, {"params": ["Canvas", "DestRect", "Bitmap"], "kind": "procedure", "ptypes": ["TCanvas", "TRect", "TBitmap"]});
  U.func("DrawArrowInternal", async function DrawArrowInternal(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"canvas": $.copyArg(p0), "frompoint": $.copyArg(p1), "topoint": $.copyArg(p2), "headsize": $.copyArg(p3), "solidarrowhead": $.copyArg(p4), result: undefined, "xbase": 0, "xlinedelta": 0, "xlineunitdelta": 0, "xnormaldelta": 0, "xnormalunitdelta": 0, "ybase": 0, "ylinedelta": 0, "ylineunitdelta": 0, "ynormaldelta": 0, "ynormalunitdelta": 0, "savedbrushcolor": 0};
  await $.fixArgs(L0, ["canvas", "frompoint", "topoint", "headsize", "solidarrowhead"]);
  {
    const $t23 = L0["frompoint"];
    await $.stmt((await $.mcall((await $.wv([$t23], "Canvas", { get: async () => L0["canvas"], set: async (v) => { L0["canvas"] = v; }, local: true }, false)), "MoveTo", [(await $.wv([$t23], "x", C, false)), (await $.wv([$t23], "y", C, false))])));
  }
  {
    const $t24 = L0["topoint"];
    await $.stmt((await $.mcall((await $.wv([$t24], "Canvas", { get: async () => L0["canvas"], set: async (v) => { L0["canvas"] = v; }, local: true }, false)), "LineTo", [(await $.wv([$t24], "x", C, false)), (await $.wv([$t24], "y", C, false))])));
  }
  L0["xlinedelta"] = $.sub((await $.mv(L0["topoint"], "X")), (await $.mv(L0["frompoint"], "X")));
  L0["ylinedelta"] = $.sub((await $.mv(L0["topoint"], "Y")), (await $.mv(L0["frompoint"], "Y")));
  L0["xlineunitdelta"] = $.fdiv(L0["xlinedelta"], (await $.call(C, "SQRT", [$.add((await $.call(C, "SQR", [L0["xlinedelta"]])), (await $.call(C, "SQR", [L0["ylinedelta"]])))])));
  L0["ylineunitdelta"] = $.fdiv(L0["ylinedelta"], (await $.call(C, "SQRT", [$.add((await $.call(C, "SQR", [L0["xlinedelta"]])), (await $.call(C, "SQR", [L0["ylinedelta"]])))])));
  L0["xbase"] = $.sub((await $.mv(L0["topoint"], "X")), (await $.call(C, "ROUND", [$.mul(L0["headsize"], L0["xlineunitdelta"])])));
  L0["ybase"] = $.sub((await $.mv(L0["topoint"], "Y")), (await $.call(C, "ROUND", [$.mul(L0["headsize"], L0["ylineunitdelta"])])));
  L0["xnormaldelta"] = L0["ylinedelta"];
  L0["ynormaldelta"] = (-(L0["xlinedelta"]));
  L0["xnormalunitdelta"] = $.fdiv(L0["xnormaldelta"], (await $.call(C, "SQRT", [$.add((await $.call(C, "SQR", [L0["xnormaldelta"]])), (await $.call(C, "SQR", [L0["ynormaldelta"]])))])));
  L0["ynormalunitdelta"] = $.fdiv(L0["ynormaldelta"], (await $.call(C, "SQRT", [$.add((await $.call(C, "SQR", [L0["xnormaldelta"]])), (await $.call(C, "SQR", [L0["ynormaldelta"]])))])));
  L0["savedbrushcolor"] = (await $.mv((await $.mv(L0["canvas"], "Brush")), "Color"));
  if ($.truthy(L0["solidarrowhead"])) {
    await $.mset((await $.mv(L0["canvas"], "Brush")), "Color", (await $.mv((await $.mv(L0["canvas"], "Pen")), "Color")));
  }
  await $.stmt((await $.mcall(L0["canvas"], "Polygon", [[L0["topoint"], (await $.call(C, "Point", [$.add(L0["xbase"], (await $.call(C, "ROUND", [$.mul(L0["headsize"], L0["xnormalunitdelta"])]))), $.add(L0["ybase"], (await $.call(C, "ROUND", [$.mul(L0["headsize"], L0["ynormalunitdelta"])])))])), (await $.call(C, "Point", [$.sub(L0["xbase"], (await $.call(C, "ROUND", [$.mul(L0["headsize"], L0["xnormalunitdelta"])]))), $.sub(L0["ybase"], (await $.call(C, "ROUND", [$.mul(L0["headsize"], L0["ynormalunitdelta"])])))]))]])));
  await $.mset((await $.mv(L0["canvas"], "Brush")), "Color", L0["savedbrushcolor"]);
  return L0.result;
}, {"params": ["Canvas", "FromPoint", "ToPoint", "HeadSize", "SolidArrowHead"], "kind": "procedure", "ptypes": ["TCanvas", "TPoint", "TPoint", "integer", "boolean"]});
  U.method("TPagePaintBox", "WMEraseBkgnd", async function WMEraseBkgnd(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.mset((await L0["message"].get()), "Result", 1);
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TWmEraseBkgnd"]});
  U.method("TGDIPages", "SetAnyCustomPagePx", async function SetAnyCustomPagePx(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.ne((await $.call(C, "Int64", [(await $.v(C, "fCustomPageSize"))])), (-(1))))) {
    await $.set(C, "fPhysicalSizePx", (await $.v(C, "fCustomPageSize")));
  }
  if ($.truthy($.ne((await $.call(C, "Int64", [(await $.v(C, "fCustomNonPrintableOffset"))])), (-(1))))) {
    await $.set(C, "fPhysicalOffsetPx", (await $.v(C, "fCustomNonPrintableOffset")));
  }
  if ($.truthy($.ne((await $.call(C, "Int64", [(await $.mv((await $.v(C, "fCustomPageMargins")), "TopLeft"))])), (-(1))))) {
    await $.set(C, "fPageMarginsPx", (await $.v(C, "fCustomPageMargins")));
  }
  if ($.truthy($.ne((await $.call(C, "Int64", [(await $.v(C, "fCustomPxPerInch"))])), (-(1))))) {
    await $.set(C, "fPrinterPxPerInch", (await $.v(C, "fCustomPxPerInch")));
  }
  await $.set(C, "fDefaultLineWidth", $.idiv(($.mul((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), 25)), 2540));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "GetPrinterParams", async function GetPrinterParams(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy((await $.and_($.not((await $.v(C, "fForceScreenResolution"))), async () => (await $.v(C, "fHasPrinterInstalled")))))) {
    try {
      await $.set(C, "fCurrentPrinter", (await $.v(C, "CurrentPrinterName")));
      if ($.truthy(($.ne((await $.mv((await $.v(C, "Printer")), "orientation")), (await $.v(C, "fOrientation")))))) {
        await $.mset((await $.v(C, "Printer")), "orientation", (await $.v(C, "fOrientation")));
      }
      await $.set(C, "fPtrHdl", (await $.mv((await $.v(C, "Printer")), "Handle")));
      await $.mset((await $.v(C, "fPrinterPxPerInch")), "x", (await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "LOGPIXELSX"))])));
      await $.mset((await $.v(C, "fPrinterPxPerInch")), "y", (await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "LOGPIXELSY"))])));
      await $.mset((await $.v(C, "fPhysicalSizePx")), "x", (await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "PHYSICALWIDTH"))])));
      await $.mset((await $.v(C, "fPhysicalOffsetPx")), "x", (await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "PHYSICALOFFSETX"))])));
      await $.mset((await $.v(C, "fPhysicalSizePx")), "y", (await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "PHYSICALHEIGHT"))])));
      await $.mset((await $.v(C, "fPhysicalOffsetPx")), "y", (await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "PHYSICALOFFSETY"))])));
      await $.set(C, "fDefaultLineWidth", $.idiv(($.mul((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), 25)), 2540));
      return L0.result;
    } catch ($t25) {
      $.rethrowControl($t25);
      $.handled($t25);
      await $.set(C, "fHasPrinterInstalled", false);
    }
  }
  if ($.truthy((await $.v(C, "fHasPrinterInstalled")))) {
    if ($.truthy(($.ne((await $.mv((await $.v(C, "Printer")), "orientation")), (await $.v(C, "fOrientation")))))) {
      await $.mset((await $.v(C, "Printer")), "orientation", (await $.v(C, "fOrientation")));
    }
    await $.set(C, "fPtrHdl", (await $.mv((await $.v(C, "printer")), "Handle")));
    await $.mset((await $.v(C, "fPhysicalSizePx")), "X", (await $.call(C, "round", [$.fdiv($.mul((await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "PHYSICALWIDTH"))])), (await $.mv((await $.v(C, "screen")), "pixelsperinch"))), (await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "LOGPIXELSX"))])))])));
    await $.mset((await $.v(C, "fPhysicalSizePx")), "Y", (await $.call(C, "round", [$.fdiv($.mul((await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "PHYSICALHEIGHT"))])), (await $.mv((await $.v(C, "screen")), "pixelsperinch"))), (await $.call(C, "GetDeviceCaps", [(await $.v(C, "fPtrHdl")), (await $.v(C, "LOGPIXELSY"))])))])));
  } else {
    await $.set(C, "fPtrHdl", 0);
    await $.mset((await $.v(C, "fPhysicalSizePx")), "X", (await $.call(C, "MulDiv", [$.mul((await $.v(C, "PAPERSIZE_A4_WIDTH")), 10), (await $.mv((await $.v(C, "screen")), "pixelsperinch")), 254])));
    await $.mset((await $.v(C, "fPhysicalSizePx")), "Y", (await $.call(C, "MulDiv", [$.mul((await $.v(C, "PAPERSIZE_A4_HEIGHT")), 10), (await $.mv((await $.v(C, "screen")), "pixelsperinch")), 254])));
  }
  await $.mset((await $.v(C, "fPhysicalOffsetPx")), "X", (await $.call(C, "MulDiv", [60, (await $.mv((await $.v(C, "screen")), "pixelsperinch")), 254])));
  await $.mset((await $.v(C, "fPhysicalOffsetPx")), "Y", (await $.call(C, "MulDiv", [60, (await $.mv((await $.v(C, "screen")), "pixelsperinch")), 254])));
  await $.mset((await $.v(C, "fPrinterPxPerInch")), "X", (await $.mv((await $.v(C, "screen")), "pixelsperinch")));
  await $.mset((await $.v(C, "fPrinterPxPerInch")), "Y", (await $.mv((await $.v(C, "screen")), "pixelsperinch")));
  await $.set(C, "fDefaultLineWidth", $.idiv(($.mul((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), 3)), 254));
  if ($.truthy((await $.and_($.not((await $.v(C, "fHasPrinterInstalled"))), async () => ($.eq((await $.v(C, "fOrientation")), (await $.v(C, "poLandscape")))))))) {
    L0["i"] = (await $.mv((await $.v(C, "fPhysicalSizePx")), "x"));
    await $.mset((await $.v(C, "fPhysicalSizePx")), "x", (await $.mv((await $.v(C, "fPhysicalSizePx")), "y")));
    await $.mset((await $.v(C, "fPhysicalSizePx")), "y", L0["i"]);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "SetMetaFileForPage", async function SetMetaFileForPage(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pageindex": $.copyArg(p0), "metafile": $.copyArg(p1), result: undefined, "stream": null};
  await $.fixArgs(L0, ["pageindex", "metafile"]);
  if ($.truthy($.ge((await $.call(C, "cardinal", [L0["pageindex"]])), (await $.call(C, "cardinal", [(await $.call(C, "length", [(await $.v(C, "fPages"))]))]))))) {
    return L0.result;
  }
  L0["stream"] = (await $.mv((await $.v(C, "TRawByteStringStream")), "Create"));
  try {
    await $.stmt((await $.mcall(L0["metafile"], "SaveToStream", [L0["stream"]])));
    await $.mset((await $.idx((await $.v(C, "fPages")), [L0["pageindex"]])), "MetaFileCompressed", (await $.mv(L0["stream"], "DataString")));
    await $.stmt((await $.call(C, "CompressSynLZ", [(await $.mv((await $.idx((await $.v(C, "fPages")), [L0["pageindex"]])), "MetaFileCompressed")), true])));
  } finally {
    await $.mcall(L0["stream"], "Free", []);
  }
  return L0.result;
}, {"params": ["PageIndex", "MetaFile"], "kind": "procedure", "ptypes": ["integer", "TMetaFile"]});
  U.method("TGDIPages", "GetMetaFileForPage", async function GetMetaFileForPage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"pageindex": $.copyArg(p0), result: null, "tmp": null, "stream": null};
  await $.fixArgs(L0, ["pageindex"]);
  if ($.truthy($.eq((await $.v(C, "fMetaFileForPage")), null))) {
    await $.set(C, "fMetaFileForPage", (await $.mv((await $.v(C, "TMetafile")), "Create")));
  } else {
    await $.mcall((await $.v(C, "fMetaFileForPage")), "Clear", []);
  }
  L0["result"] = (await $.v(C, "fMetaFileForPage"));
  if ($.truthy($.ge((await $.call(C, "cardinal", [L0["pageindex"]])), (await $.call(C, "cardinal", [(await $.call(C, "length", [(await $.v(C, "fPages"))]))]))))) {
    return L0.result;
  }
  L0["tmp"] = (await $.mv((await $.idx((await $.v(C, "fPages")), [L0["pageindex"]])), "MetaFileCompressed"));
  await $.stmt((await $.call(C, "CompressSynLZ", [L0["tmp"], false])));
  L0["stream"] = (await $.mcall((await $.v(C, "TRawByteStringStream")), "Create", [L0["tmp"]]));
  try {
    await $.stmt((await $.mcall((await $.v(C, "fMetaFileForPage")), "LoadFromStream", [L0["stream"]])));
  } finally {
    await $.mcall(L0["stream"], "Free", []);
  }
  return L0.result;
}, {"params": ["PageIndex"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "PrinterPxToScreenPxX", async function PrinterPxToScreenPxX(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"printerpx": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["printerpx"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq((await $.mv((await $.v(C, "fPrinterPxPerInch")), "x")), 0)))))) {
    L0["result"] = 0;
  } else {
    L0["result"] = $.idiv(($.mul($.mul(L0["printerpx"], (await $.mv((await $.v(C, "screen")), "pixelsperinch"))), (await $.v(C, "fZoom")))), ($.mul((await $.mv((await $.v(C, "fPrinterPxPerInch")), "x")), 100)));
  }
  return L0.result;
}, {"params": ["PrinterPx"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "PrinterPxToScreenPxY", async function PrinterPxToScreenPxY(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"printerpx": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["printerpx"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), 0)))))) {
    L0["result"] = 0;
  } else {
    L0["result"] = $.idiv(($.mul($.mul(L0["printerpx"], (await $.mv((await $.v(C, "screen")), "pixelsperinch"))), (await $.v(C, "fZoom")))), ($.mul((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), 100)));
  }
  return L0.result;
}, {"params": ["PrinterPx"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "MmToPrinterPxX", async function MmToPrinterPxX(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"mm": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["mm"]);
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = 0;
  } else {
    L0["result"] = $.idiv(($.mul(($.mul(L0["mm"], 10)), (await $.mv((await $.v(C, "fPrinterPxPerInch")), "x")))), 254);
  }
  return L0.result;
}, {"params": ["mm"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "MmToPrinterPxY", async function MmToPrinterPxY(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"mm": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["mm"]);
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = 0;
  } else {
    L0["result"] = $.idiv(($.mul(($.mul(L0["mm"], 10)), (await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")))), 254);
  }
  return L0.result;
}, {"params": ["mm"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "PrinterPxToMmX", async function PrinterPxToMmX(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"px": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["px"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq((await $.mv((await $.v(C, "fPrinterPxPerInch")), "x")), 0)))))) {
    L0["result"] = 0;
  } else {
    L0["result"] = $.idiv(($.mul(L0["px"], 254)), ($.mul((await $.mv((await $.v(C, "fPrinterPxPerInch")), "x")), 10)));
  }
  return L0.result;
}, {"params": ["px"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "PrinterPxToMmY", async function PrinterPxToMmY(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"px": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["px"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), 0)))))) {
    L0["result"] = 0;
  } else {
    L0["result"] = $.idiv(($.mul(L0["px"], 254)), ($.mul((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), 10)));
  }
  return L0.result;
}, {"params": ["px"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "ResizeAndCenterPaintbox", async function ResizeAndCenterPaintbox(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "l": 0, "t": 0, "i": 0, "siz": null};
  if ($.truthy($.lt((await $.call(C, "cardinal", [$.sub((await $.v(C, "page")), 1)])), (await $.call(C, "cardinal", [(await $.call(C, "length", [(await $.v(C, "fPages"))]))]))))) {
    L0["siz"] = (await $.mv((await $.idx((await $.v(C, "fPages")), [$.sub((await $.v(C, "page")), 1)])), "SizePx"));
  } else {
    L0["siz"] = (await $.v(C, "fPhysicalSizePx"));
  }
  {
    const $t26 = (await $.v(C, "fPreviewSurface"));
    await $.mset((await $.wv([$t26], "siz", { get: async () => L0["siz"], set: async (v) => { L0["siz"] = v; }, local: true }, false)), "X", $.add((await $.wcall([$t26], "PrinterPxToScreenPxX", [(await $.mv((await $.wv([$t26], "siz", { get: async () => L0["siz"], set: async (v) => { L0["siz"] = v; }, local: true }, false)), "X"))], C)), $.mul((await $.wv([$t26], "GRAY_MARGIN", C, false)), 2)));
    await $.mset((await $.wv([$t26], "siz", { get: async () => L0["siz"], set: async (v) => { L0["siz"] = v; }, local: true }, false)), "Y", $.add((await $.wcall([$t26], "PrinterPxToScreenPxY", [(await $.mv((await $.wv([$t26], "siz", { get: async () => L0["siz"], set: async (v) => { L0["siz"] = v; }, local: true }, false)), "Y"))], C)), $.mul((await $.wv([$t26], "GRAY_MARGIN", C, false)), 2)));
    await $.wset([$t26], "l", $.sub((await $.wcall([$t26], "Max", [$.idiv(($.sub((await $.mv(Self, "ClientWidth")), (await $.mv((await $.wv([$t26], "siz", { get: async () => L0["siz"], set: async (v) => { L0["siz"] = v; }, local: true }, false)), "X")))), 2), 0], C)), (await $.mv((await $.wv([$t26], "HorzScrollbar", C, false)), "Position"))), { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true });
    await $.wset([$t26], "t", $.sub((await $.wcall([$t26], "Max", [$.idiv(($.sub((await $.mv(Self, "ClientHeight")), (await $.mv((await $.wv([$t26], "siz", { get: async () => L0["siz"], set: async (v) => { L0["siz"] = v; }, local: true }, false)), "Y")))), 2), 0], C)), (await $.mv((await $.wv([$t26], "VertScrollbar", C, false)), "Position"))), { get: async () => L0["t"], set: async (v) => { L0["t"] = v; }, local: true });
    await $.stmt((await $.wcall([$t26], "SetBounds", [(await $.wv([$t26], "l", { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true }, false)), (await $.wv([$t26], "t", { get: async () => L0["t"], set: async (v) => { L0["t"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t26], "siz", { get: async () => L0["siz"], set: async (v) => { L0["siz"] = v; }, local: true }, false)), "X")), (await $.mv((await $.wv([$t26], "siz", { get: async () => L0["siz"], set: async (v) => { L0["siz"] = v; }, local: true }, false)), "Y"))], C)));
  }
  { const $t27 = $.sub((await $.mv((await $.v(C, "fLinks")), "Count")), 1);
    L0["i"] = 0;
    let $t28 = true;
    for (;;) {
      if (!$t28) { L0["i"] = $.succ(L0["i"], 1); }
      $t28 = false;
      if (!($.ord(L0["i"]) <= $.ord($t27))) break;
      await $.stmt((await $.mcall((await $.call(C, "TGDIPagereference", [(await $.idx((await $.mv((await $.v(C, "fLinks")), "Objects")), [L0["i"]]))])), "ToPreview", [Self])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "GetOrientation", async function GetOrientation(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.gt((await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), (await $.mv((await $.v(C, "fPhysicalSizePx")), "y")))))))) {
    L0["result"] = (await $.v(C, "poLandscape"));
  } else {
    L0["result"] = (await $.v(C, "poPortrait"));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "SetTextAlign", async function SetTextAlign(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne(Self, null))) {
    await $.set(C, "fAlign", L0["value"]);
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TTextAlign"]});
  U.method("TGDIPages", "SetOrientation", async function SetOrientation(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"orientation": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["orientation"]);
  if ($.truthy((await $.and_(($.ne(Self, null)), async () => ($.ne((await $.v(C, "fOrientation")), L0["orientation"])))))) {
    await $.set(C, "fOrientation", L0["orientation"]);
    if ($.truthy($.ne((await $.v(C, "fPages")), null))) {
      await $.mset((await $.v(C, "fCustomPageSize")), "X", (await $.mv((await $.v(C, "fPhysicalSizePx")), "Y")));
      await $.mset((await $.v(C, "fCustomPageSize")), "Y", (await $.mv((await $.v(C, "fPhysicalSizePx")), "X")));
      await $.mset((await $.v(C, "fCustomPxPerInch")), "X", (await $.mv((await $.v(C, "fPrinterPxPerInch")), "Y")));
      await $.mset((await $.v(C, "fCustomPxPerInch")), "Y", (await $.mv((await $.v(C, "fPrinterPxPerInch")), "X")));
      await $.mset((await $.v(C, "fCustomNonPrintableOffset")), "X", (await $.mv((await $.v(C, "fPhysicalOffsetPx")), "Y")));
      await $.mset((await $.v(C, "fCustomNonPrintableOffset")), "Y", (await $.mv((await $.v(C, "fPhysicalOffsetPx")), "X")));
    }
  }
  return L0.result;
}, {"params": ["orientation"], "kind": "procedure", "ptypes": ["TPrinterOrientation"]});
  U.method("TGDIPages", "NewPageLayout", async function NewPageLayout(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sizewidthmm": $.copyArg(p0), "sizeheightmm": $.copyArg(p1), "nonprintablewidthmm": (p2 === undefined ? (-(1)) : p2), "nonprintableheightmm": (p3 === undefined ? (-(1)) : p3), result: undefined};
  await $.fixArgs(L0, ["sizewidthmm", "sizeheightmm", "nonprintablewidthmm", "nonprintableheightmm"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "fCustomPageSize")), "X", (await $.call(C, "MmToPrinterPxX", [L0["sizewidthmm"]])));
  await $.mset((await $.v(C, "fCustomPageSize")), "Y", (await $.call(C, "MmToPrinterPxY", [L0["sizeheightmm"]])));
  if ($.truthy((await $.and_(($.ge(L0["nonprintablewidthmm"], 0)), async () => ($.ge(L0["nonprintableheightmm"], 0)))))) {
    await $.mset((await $.v(C, "fCustomNonPrintableOffset")), "X", (await $.call(C, "MmToPrinterPxX", [L0["nonprintablewidthmm"]])));
    await $.mset((await $.v(C, "fCustomNonPrintableOffset")), "Y", (await $.call(C, "MmToPrinterPxY", [L0["nonprintableheightmm"]])));
  }
  if ($.truthy($.ne((await $.v(C, "fPages")), null))) {
    await $.stmt((await $.call(C, "NewPage", [true])));
  }
  return L0.result;
}, {"params": ["sizeWidthMM", "sizeHeightMM", "nonPrintableWidthMM", "nonPrintableHeightMM"], "kind": "procedure", "ptypes": ["integer", "integer", "integer", "integer"]});
  U.method("TGDIPages", "NewPageLayout", async function NewPageLayout(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"papersize": $.copyArg(p0), "orientation": (p1 === undefined ? (await $.v(C, "poPortrait")) : p1), "nonprintablewidthmm": (p2 === undefined ? (-(1)) : p2), "nonprintableheightmm": (p3 === undefined ? (-(1)) : p3), result: undefined, "siz": null, "nonprint": null};
  await $.fixArgs(L0, ["papersize", "orientation", "nonprintablewidthmm", "nonprintableheightmm"]);
  L0["sizes"] = [{"x": 210, "y": 297}, {"x": 148, "y": 210}, {"x": 297, "y": 420}, {"x": 216, "y": 279}, {"x": 216, "y": 356}];
  if ($.truthy($.eq(L0["orientation"], (await $.v(C, "poPortrait"))))) {
    L0["siz"] = (await $.idx(L0["sizes"], [L0["papersize"]]));
    await $.mset(L0["nonprint"], "X", L0["nonprintablewidthmm"]);
    await $.mset(L0["nonprint"], "Y", L0["nonprintableheightmm"]);
  } else {
    await $.mset(L0["siz"], "X", (await $.mv((await $.idx(L0["sizes"], [L0["papersize"]])), "Y")));
    await $.mset(L0["siz"], "Y", (await $.mv((await $.idx(L0["sizes"], [L0["papersize"]])), "X")));
    await $.mset(L0["nonprint"], "X", L0["nonprintableheightmm"]);
    await $.mset(L0["nonprint"], "Y", L0["nonprintablewidthmm"]);
  }
  await $.stmt((await $.call(C, "NewPageLayout", [(await $.mv(L0["siz"], "X")), (await $.mv(L0["siz"], "Y")), (await $.mv(L0["nonprint"], "X")), (await $.mv(L0["nonprint"], "Y"))])));
  return L0.result;
}, {"params": ["paperSize", "orientation", "nonPrintableWidthMM", "nonPrintableHeightMM"], "kind": "procedure", "ptypes": ["TGdiPagePaperSize", "TPrinterOrientation", "integer", "integer"]});
  U.method("TGDIPages", "SetPage", async function SetPage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"newpreviewpage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["newpreviewpage"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.gt(L0["newpreviewpage"], (await $.call(C, "length", [(await $.v(C, "fPages"))]))))) {
    L0["newpreviewpage"] = (await $.call(C, "length", [(await $.v(C, "fPages"))]));
  } else {
    if ($.truthy($.lt(L0["newpreviewpage"], 1))) {
      L0["newpreviewpage"] = 1;
    }
  }
  if ($.truthy((await $.or_(($.eq((await $.v(C, "Pages")), null)), async () => ($.eq((await $.v(C, "fCurrPreviewPage")), L0["newpreviewpage"])))))) {
    return L0.result;
  }
  await $.set(C, "fCurrPreviewPage", L0["newpreviewpage"]);
  await $.set(C, "fLinksCurrent", (-(1)));
  await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "PreviewSurfaceBitmap")), async ($t29) => { await $.set(C, "PreviewSurfaceBitmap", $t29); })])));
  await $.stmt($.call(C, "ResizeAndCenterPaintbox", []));
  await $.stmt((await $.call(C, "PreviewPaint", [Self])));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fPreviewPageChangedEvent"))])))) {
    await $.stmt((await $.call(C, "fPreviewPageChangedEvent", [Self])));
  }
  if ($.truthy($.ne((await $.v(C, "PreviewForm")), null))) {
    await $.mset((await $.v(C, "PreviewPageCountLabel")), "Caption", (await $.call(C, "format", [(await $.v(C, "sPageN")), [(await $.v(C, "Page")), (await $.v(C, "PageCount"))]])));
    await $.mset((await $.idx((await $.v(C, "PreviewButtons")), [$.sub((await $.call(C, "ord", [(await $.v(C, "rNextPage"))])), 1)])), "Enabled", $.lt((await $.v(C, "Page")), (await $.v(C, "PageCount"))));
    await $.mset((await $.idx((await $.v(C, "PreviewButtons")), [$.sub((await $.call(C, "ord", [(await $.v(C, "rPreviousPage"))])), 1)])), "Enabled", $.gt((await $.v(C, "Page")), 1));
  }
  return L0.result;
}, {"params": ["NewPreviewPage"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TGDIPages", "GetPageCount", async function GetPageCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = 0;
  } else {
    L0["result"] = (await $.call(C, "length", [(await $.v(C, "fPages"))]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "GetLineHeight", async function GetLineHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "tm": null, "dc": null};
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = 0;
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "fLineHeight")), 0))) {
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "fCanvas"))]))))) {
      L0["dc"] = (await $.call(C, "GetDC", [0]));
      await $.stmt((await $.call(C, "GetTextMetrics", [L0["dc"], L0["tm"]])));
      await $.stmt((await $.call(C, "ReleaseDC", [0, L0["dc"]])));
    } else {
      await $.stmt((await $.call(C, "GetTextMetrics", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), L0["tm"]])));
    }
    await $.set(C, "fLineHeight", $.shr(($.mul(($.add((await $.mv(L0["tm"], "tmHeight")), (await $.mv(L0["tm"], "tmExternalLeading")))), 9)), 3));
  }
  if ($.truthy((await $.v(C, "fInHeaderOrFooter")))) {
    L0["result"] = (await $.v(C, "fLineHeight"));
  } else {
    { const $t30 = (await $.v(C, "fLineSpacing"));
      if ($.eq($t30, (await $.v(C, "lsSingle")))) {
        L0["result"] = (await $.v(C, "fLineHeight"));
      }
      else if ($.eq($t30, (await $.v(C, "lsOneAndHalf")))) {
        L0["result"] = $.shr(($.mul((await $.v(C, "fLineHeight")), 3)), 1);
      }
      else {
        L0["result"] = $.mul((await $.v(C, "fLineHeight")), 2);
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "GetLineHeightMm", async function GetLineHeightMm(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = 0;
  } else {
    L0["result"] = (await $.call(C, "PrinterPxToMmY", [(await $.v(C, "GetLineHeight"))]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "CheckHeaderDone", async function CheckHeaderDone(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not((await $.v(C, "fHeaderDone"))))) {
    await $.stmt($.call(C, "DoHeader", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "CheckYPos", async function CheckYPos(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy((await $.v(C, "fInHeaderOrFooter")))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  if ($.truthy($.not((await $.call(C, "HasSpaceForLines", [1]))))) {
    await $.stmt($.call(C, "NewPageInternal", []));
    await $.stmt($.call(C, "CheckHeaderDone", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "GetYPos", async function GetYPos(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), 0)))))) {
    L0["result"] = 0;
  } else {
    L0["result"] = $.idiv(($.mul((await $.v(C, "fCurrentYPos")), 254)), ($.mul((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), 10)));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "SetYPos", async function SetYPos(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ypos": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["ypos"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.ge((await $.v(C, "fCurrentYPos")), (await $.mv((await $.v(C, "fPhysicalSizePx")), "y"))))) {
    await $.stmt($.call(C, "NewPageInternal", []));
  }
  await $.set(C, "fCurrentYPos", (await $.call(C, "MmToPrinterPxY", [L0["ypos"]])));
  return L0.result;
}, {"params": ["YPos"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TGDIPages", "GetSavedState", async function GetSavedState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: $.rec("tsavedstate")};
  {
    const $t31 = L0["result"];
    await $.wset([$t31], "Flags", (await $.wv([$t31], "TextFormatsToFlags", C, false)), C);
    await $.wset([$t31], "FontName", (await $.mv((await $.wv([$t31], "Font", C, false)), "Name")), C);
    await $.wset([$t31], "FontColor", (await $.mv((await $.wv([$t31], "Font", C, false)), "Color")), C);
    await $.wset([$t31], "LeftMargin", (await $.mv((await $.wv([$t31], "fPageMarginsPx", C, false)), "Left")), C);
    await $.wset([$t31], "RightMargin", (await $.mv((await $.wv([$t31], "fPageMarginsPx", C, false)), "Right")), C);
    await $.wset([$t31], "BiDiMode", (await $.wv([$t31], "fBiDiMode", C, false)), C);
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "SetSavedState", async function SetSavedState(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"savedstate": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["savedstate"]);
  {
    const $t32 = L0["savedstate"];
    await $.stmt((await $.wcall([$t32], "SetFontWithFlags", [(await $.wv([$t32], "Flags", C, false))], C)));
    await $.mset((await $.wv([$t32], "Font", C, false)), "Name", (await $.wv([$t32], "FontName", C, false)));
    await $.mset((await $.wv([$t32], "Font", C, false)), "Color", (await $.wv([$t32], "FontColor", C, false)));
    await $.mset((await $.wv([$t32], "fPageMarginsPx", C, false)), "Left", (await $.wv([$t32], "LeftMargin", C, false)));
    await $.mset((await $.wv([$t32], "fPageMarginsPx", C, false)), "Right", (await $.wv([$t32], "RightMargin", C, false)));
    await $.wset([$t32], "fBiDiMode", (await $.wv([$t32], "BiDiMode", C, false)), C);
  }
  return L0.result;
}, {"params": ["SavedState"], "kind": "procedure", "ptypes": ["TSavedState"]});
  U.method("TGDIPages", "SaveLayout", async function SaveLayout(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.ge((await $.v(C, "fSavedCount")), (await $.call(C, "length", [(await $.v(C, "fSaved"))]))))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "fSaved")), async ($t33) => { await $.set(C, "fSaved", $t33); }), $.add((await $.v(C, "fSavedCount")), 20)])));
  }
  { const $t34 = await $.iset((await $.v(C, "fSaved")), [(await $.v(C, "fSavedCount"))], (await $.v(C, "SavedState"))); if ($t34 !== undefined) { await $.set(C, "fSaved", $t34); } }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fSavedCount")), async ($t35) => { await $.set(C, "fSavedCount", $t35); })])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "RestoreSavedLayout", async function RestoreSavedLayout(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.le((await $.v(C, "fSavedCount")), 0))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.v(C, "fSavedCount")), async ($t36) => { await $.set(C, "fSavedCount", $t36); })])));
  await $.set(C, "SavedState", (await $.idx((await $.v(C, "fSaved")), [(await $.v(C, "fSavedCount"))])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "CreateMetaFile", async function CreateMetaFile(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"awidth": $.copyArg(p0), "aheight": $.copyArg(p1), result: null};
  await $.fixArgs(L0, ["awidth", "aheight"]);
  L0["result"] = (await $.mv((await $.v(C, "TMetafile")), "Create"));
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.mset(L0["result"], "Enhanced", true);
  await $.mset(L0["result"], "Width", L0["awidth"]);
  await $.mset(L0["result"], "Height", L0["aheight"]);
  return L0.result;
}, {"params": ["aWidth", "aHeight"], "kind": "function", "ptypes": ["integer", "integer"]});
  U.method("TGDIPages", "FlushPageContent", async function FlushPageContent(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "n": 0};
  L0["n"] = (await $.call(C, "length", [(await $.v(C, "fPages"))]));
  if ($.truthy($.gt(L0["n"], 0))) {
    {
      const $t37 = (await $.idx((await $.v(C, "fPages")), [$.sub(L0["n"], 1)]));
      await $.wset([$t37], "Text", (await $.wv([$t37], "fCanvasText", C, false)), C);
      await $.wset([$t37], "SizePx", (await $.wv([$t37], "fPhysicalSizePx", C, false)), C);
      await $.wset([$t37], "MarginPx", (await $.wv([$t37], "fPageMarginsPx", C, false)), C);
      await $.wset([$t37], "OffsetPx", (await $.wv([$t37], "fPhysicalOffsetPx", C, false)), C);
    }
    if ($.truthy($.ne((await $.v(C, "fCurrentMetaFile")), null))) {
      await $.stmt((await $.call(C, "SetMetaFileForPage", [$.sub(L0["n"], 1), (await $.v(C, "fCurrentMetaFile"))])));
      await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCurrentMetaFile")), async ($t38) => { await $.set(C, "fCurrentMetaFile", $t38); })])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "NewPageInternal", async function NewPageInternal(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "n": 0, "usedgroupspace": 0, "ingroup": false, "grouptext": ''};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  L0["usedgroupspace"] = 0;
  L0["ingroup"] = (await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))]));
  if ($.truthy(L0["ingroup"])) {
    L0["usedgroupspace"] = (await $.v(C, "fCurrentYPos"));
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCanvas")), async ($t39) => { await $.set(C, "fCanvas", $t39); })])));
    await $.set(C, "fCanvas", (await $.call(C, "CreateMetafileCanvas", [(await $.v(C, "fCurrentMetaFile"))])));
    await $.stmt((await $.mcall((await $.v(C, "fCanvas")), "Draw", [0, 0, (await $.v(C, "fCurrentMetaFile"))])));
    L0["grouptext"] = (await $.v(C, "fCanvasText"));
    await $.set(C, "fCanvasText", (await $.v(C, "fBeforeGroupText")));
  }
  await $.stmt($.call(C, "DoFooter", []));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fCanvas"))])))) {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCanvas")), async ($t40) => { await $.set(C, "fCanvas", $t40); })])));
  }
  await $.stmt($.call(C, "FlushPageContent", []));
  await $.stmt($.call(C, "SetAnyCustomPagePx", []));
  L0["n"] = $.add((await $.call(C, "Length", [(await $.v(C, "fPages"))])), 1);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "fPages")), async ($t41) => { await $.set(C, "fPages", $t41); }), L0["n"]])));
  await $.set(C, "fCurrentMetaFile", (await $.call(C, "CreateMetaFile", [(await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), (await $.mv((await $.v(C, "fPhysicalSizePx")), "y"))])));
  await $.set(C, "fCanvas", (await $.call(C, "CreateMetafileCanvas", [(await $.v(C, "fCurrentMetaFile"))])));
  await $.set(C, "fCanvasText", "");
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fVirtualPageNum")), async ($t42) => { await $.set(C, "fVirtualPageNum", $t42); })])));
  await $.set(C, "fCurrentYPos", (await $.mv((await $.v(C, "fPageMarginsPx")), "top")));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fStartNewPage"))])))) {
    await $.stmt((await $.call(C, "fStartNewPage", [Self, L0["n"]])));
  }
  await $.set(C, "fHeaderDone", false);
  await $.set(C, "fColumnHeaderPrinted", false);
  if ($.truthy(L0["ingroup"])) {
    await $.stmt($.call(C, "DoHeader", []));
    if ($.truthy((await $.v(C, "fColumnsUsedInGroup")))) {
      await $.set(C, "fGroupVerticalSpace", (await $.mv((await $.v(C, "fPhysicalSizePx")), "y")));
      if ($.truthy($.not((await $.v(C, "fColumnHeaderInGroup"))))) {
        await $.stmt($.call(C, "PrintColumnHeaders", []));
      } else {
        await $.set(C, "fColumnHeaderPrinted", true);
      }
    }
    await $.stmt((await $.mcall((await $.v(C, "fCanvas")), "Draw", [0, (await $.v(C, "fCurrentYPos")), (await $.v(C, "fGroupPage"))])));
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fGroupPage")), async ($t43) => { await $.set(C, "fGroupPage", $t43); })])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t44) => { await $.set(C, "fCurrentYPos", $t44); }), L0["usedgroupspace"]])));
    await $.set(C, "fCanvasText", $.add((await $.v(C, "fCanvasText")), L0["grouptext"]));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "CreateMetafileCanvas", async function CreateMetafileCanvas(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"page": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["page"]);
  L0["result"] = (await $.mcall((await $.v(C, "TMetafileCanvas")), "Create", [L0["page"], (await $.v(C, "fPtrHdl"))]));
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "UpdateMetafileCanvasFont", [L0["result"]])));
  await $.mset((await $.mv(L0["result"], "Pen")), "Width", $.idiv((await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")), (await $.mv((await $.v(C, "screen")), "PixelsPerInch"))));
  return L0.result;
}, {"params": ["Page"], "kind": "function", "ptypes": ["TMetafile"]});
  U.method("TGDIPages", "UpdateMetafileCanvasFont", async function UpdateMetafileCanvasFont(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"acanvas": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["acanvas"]);
  await $.mset((await $.mv(L0["acanvas"], "Font")), "Size", $.add((await $.mv((await $.v(C, "Font")), "Size")), 1));
  await $.mset((await $.mv(L0["acanvas"], "Font")), "PixelsPerInch", (await $.mv((await $.v(C, "fPrinterPxPerInch")), "y")));
  await $.mset(L0["acanvas"], "Font", (await $.v(C, "Font")));
  return L0.result;
}, {"params": ["aCanvas"], "kind": "procedure", "ptypes": ["TMetafileCanvas"]});
  U.method("TGDIPages", "TextFormatsToFlags", async function TextFormatsToFlags(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "min", [(await $.call(C, "max", [(await $.mv((await $.v(C, "font")), "size")), 4])), (await $.v(C, "FORMAT_SIZE_MASK"))]));
  { const $t45 = (await $.v(C, "fAlign"));
    if ($.eq($t45, (await $.v(C, "taRight")))) {
      L0["result"] = (await $.or_(L0["result"], async () => (await $.v(C, "FORMAT_RIGHT"))));
    }
    else if ($.eq($t45, (await $.v(C, "taCenter")))) {
      L0["result"] = (await $.or_(L0["result"], async () => (await $.v(C, "FORMAT_CENTER"))));
    }
    else if ($.eq($t45, (await $.v(C, "taJustified")))) {
      L0["result"] = (await $.or_(L0["result"], async () => (await $.v(C, "FORMAT_JUSTIFIED"))));
    }
  }
  if ($.truthy($.in_((await $.v(C, "fsBold")), (await $.mv((await $.v(C, "font")), "style"))))) {
    L0["result"] = (await $.or_(L0["result"], async () => (await $.v(C, "FORMAT_BOLD"))));
  }
  if ($.truthy($.in_((await $.v(C, "fsUnderline")), (await $.mv((await $.v(C, "font")), "style"))))) {
    L0["result"] = (await $.or_(L0["result"], async () => (await $.v(C, "FORMAT_UNDERLINE"))));
  }
  if ($.truthy($.in_((await $.v(C, "fsItalic")), (await $.mv((await $.v(C, "font")), "style"))))) {
    L0["result"] = (await $.or_(L0["result"], async () => (await $.v(C, "FORMAT_ITALIC"))));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "SetFontWithFlags", async function SetFontWithFlags(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"flags": $.copyArg(p0), result: undefined, "fontstyle": null};
  await $.fixArgs(L0, ["flags"]);
  if ($.truthy($.ne((await $.and_(L0["flags"], async () => (await $.v(C, "FORMAT_SIZE_MASK")))), (await $.mv((await $.v(C, "Font")), "Size"))))) {
    await $.mset((await $.v(C, "Font")), "size", (await $.and_(L0["flags"], async () => (await $.v(C, "FORMAT_SIZE_MASK")))));
  }
  if ($.truthy($.ne(((await $.and_(L0["flags"], async () => (await $.v(C, "FORMAT_BOLD"))))), 0))) {
    L0["fontstyle"] = [(await $.v(C, "fsBold"))];
  } else {
    L0["fontstyle"] = [];
  }
  if ($.truthy($.ne(((await $.and_(L0["flags"], async () => (await $.v(C, "FORMAT_UNDERLINE"))))), 0))) {
    await $.stmt((await $.call(C, "include", [$.ref(async () => L0["fontstyle"], async ($t46) => { L0["fontstyle"] = $t46; }), (await $.v(C, "fsUnderline"))])));
  }
  if ($.truthy($.ne(((await $.and_(L0["flags"], async () => (await $.v(C, "FORMAT_ITALIC"))))), 0))) {
    await $.stmt((await $.call(C, "include", [$.ref(async () => L0["fontstyle"], async ($t47) => { L0["fontstyle"] = $t47; }), (await $.v(C, "fsItalic"))])));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Font")), "Style")), L0["fontstyle"]))) {
    await $.mset((await $.v(C, "Font")), "Style", L0["fontstyle"]);
  }
  { const $t48 = (await $.and_(L0["flags"], async () => (await $.v(C, "FORMAT_ALIGN_MASK"))));
    if ($.eq($t48, (await $.v(C, "FORMAT_RIGHT")))) {
      await $.set(C, "falign", (await $.v(C, "taRight")));
    }
    else if ($.eq($t48, (await $.v(C, "FORMAT_CENTER")))) {
      await $.set(C, "falign", (await $.v(C, "taCenter")));
    }
    else if ($.eq($t48, (await $.v(C, "FORMAT_JUSTIFIED")))) {
      await $.set(C, "falign", (await $.v(C, "taJustified")));
    }
    else {
      await $.set(C, "falign", (await $.v(C, "taLeft")));
    }
  }
  return L0.result;
}, {"params": ["flags"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TGDIPages", "HasSpaceForLines", async function HasSpaceForLines(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"count": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["count"]);
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = false;
  } else {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))])))) {
      L0["result"] = $.lt($.add((await $.v(C, "fCurrentYPos")), $.mul((await $.v(C, "GetLineHeight")), L0["count"])), (await $.v(C, "fGroupVerticalSpace")));
    } else {
      L0["result"] = $.lt($.add((await $.v(C, "fCurrentYPos")), $.mul((await $.v(C, "GetLineHeight")), L0["count"])), $.sub($.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "y")), (await $.mv((await $.v(C, "fPageMarginsPx")), "bottom"))), (await $.v(C, "fFooterHeight"))));
    }
  }
  return L0.result;
}, {"params": ["Count"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "HasSpaceFor", async function HasSpaceFor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"mm": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["mm"]);
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = false;
  } else {
    L0["mm"] = $.add((await $.v(C, "fCurrentYPos")), (await $.call(C, "MmToPrinterPxY", [L0["mm"]])));
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))])))) {
      L0["result"] = $.lt(L0["mm"], (await $.v(C, "fGroupVerticalSpace")));
    } else {
      L0["result"] = $.lt(L0["mm"], $.sub($.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "y")), (await $.mv((await $.v(C, "fPageMarginsPx")), "bottom"))), (await $.v(C, "fFooterHeight"))));
    }
  }
  return L0.result;
}, {"params": ["mm"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "DoHeader", async function DoHeader(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "fHeaderDone", true);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "fHeaderLines")), "Count")), 0)))) {
    return L0.result;
  }
  await $.stmt($.call(C, "SaveLayout", []));
  await $.set(C, "fInHeaderOrFooter", true);
  try {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fStartPageHeader"))])))) {
      await $.stmt((await $.call(C, "fStartPageHeader", [Self])));
    }
    await $.mset((await $.v(C, "Font")), "Color", (await $.v(C, "clBlack")));
    await $.stmt((await $.call(C, "DoHeaderFooterInternal", [(await $.v(C, "fHeaderLines"))])));
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fEndPageHeader"))])))) {
      await $.stmt((await $.call(C, "fEndPageHeader", [Self])));
    }
    await $.stmt($.call(C, "GetLineHeight", []));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t49) => { await $.set(C, "fCurrentYPos", $t49); }), $.shr((await $.v(C, "fLineHeight")), 2)])));
    await $.set(C, "fHeaderHeight", $.sub((await $.v(C, "fCurrentYPos")), (await $.mv((await $.v(C, "fPageMarginsPx")), "Top"))));
  } finally {
    await $.set(C, "fInHeaderOrFooter", false);
    await $.stmt($.call(C, "RestoreSavedLayout", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "DoFooter", async function DoFooter(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy(($.eq((await $.mv((await $.v(C, "fFooterLines")), "Count")), 0)))) {
    return L0.result;
  }
  await $.stmt($.call(C, "SaveLayout", []));
  await $.set(C, "fInHeaderOrFooter", true);
  try {
    await $.set(C, "fCurrentYPos", $.add($.sub($.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "y")), (await $.mv((await $.v(C, "fPageMarginsPx")), "bottom"))), (await $.v(C, "fFooterHeight"))), (await $.v(C, "fFooterGap"))));
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fStartPageFooter"))])))) {
      await $.stmt((await $.call(C, "fStartPageFooter", [Self])));
    }
    await $.stmt((await $.call(C, "DoHeaderFooterInternal", [(await $.v(C, "fFooterLines"))])));
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fEndPageFooter"))])))) {
      await $.stmt((await $.call(C, "fEndPageFooter", [Self])));
    }
  } finally {
    await $.set(C, "fInHeaderOrFooter", false);
    await $.stmt($.call(C, "RestoreSavedLayout", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "DoHeaderFooterInternal", async function DoHeaderFooterInternal(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"lines": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["lines"]);
  await $.stmt($.call(C, "SaveLayout", []));
  try {
    { const $t50 = $.sub((await $.mv(L0["lines"], "Count")), 1);
      L0["i"] = 0;
      let $t51 = true;
      for (;;) {
        if (!$t51) { L0["i"] = $.succ(L0["i"], 1); }
        $t51 = false;
        if (!($.ord(L0["i"]) <= $.ord($t50))) break;
        {
          const $t52 = (await $.call(C, "THeaderFooter", [(await $.idx(L0["lines"], [L0["i"]]))]));
          await $.wset([$t52], "SavedState", (await $.wv([$t52], "State", C, false)), C);
          await $.stmt((await $.wcall([$t52], "PrintFormattedLine", [(await $.wv([$t52], "Text", C, false)), (await $.mv((await $.wv([$t52], "State", C, false)), "Flags"))], C)));
        }
        await $.tick();
      }
    }
  } finally {
    await $.stmt($.call(C, "RestoreSavedLayout", []));
  }
  return L0.result;
}, {"params": ["Lines"], "kind": "procedure", "ptypes": ["TObjectList"]});
  U.method("TGDIPages", "CalcFooterGap", async function CalcFooterGap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "GetLineHeight", []));
  await $.set(C, "fFooterGap", $.shr((await $.v(C, "fLineHeight")), 2));
  await $.set(C, "fFooterHeight", (await $.v(C, "fFooterGap")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "GetColumnRec", async function GetColumnRec(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"col": $.copyArg(p0), result: $.rec("tcolrec")};
  await $.fixArgs(L0, ["col"]);
  if ($.truthy($.lt((await $.call(C, "Cardinal", [L0["col"]])), (await $.call(C, "Cardinal", [(await $.call(C, "length", [(await $.v(C, "fColumns"))]))]))))) {
    L0["result"] = (await $.idx((await $.v(C, "fColumns")), [L0["col"]]));
  } else {
    await $.mset(L0["result"], "ColLeft", 0);
    await $.mset(L0["result"], "ColRight", 0);
  }
  return L0.result;
}, {"params": ["col"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "PrintColumnHeaders", async function PrintColumnHeaders(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "savedfontsize": 0, "fontcol": 0, "savedfontstyle": null, "savedalign": null, "savedwordwrapleftcols": false};
  if ($.truthy((await $.or_(($.eq((await $.v(C, "fColumnHeaderList")), null)), async () => ($.eq((await $.v(C, "fColumns")), null)))))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckYPos", []));
  await $.set(C, "fColumnHeaderPrinted", true);
  L0["savedfontsize"] = (await $.mv((await $.v(C, "Font")), "size"));
  L0["savedfontstyle"] = (await $.mv((await $.v(C, "font")), "style"));
  L0["savedalign"] = (await $.v(C, "fAlign"));
  L0["savedwordwrapleftcols"] = (await $.v(C, "WordWrapLeftCols"));
  await $.set(C, "WordWrapLeftCols", false);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fStartColumnHeader"))])))) {
    await $.stmt((await $.call(C, "fStartColumnHeader", [Self])));
  }
  L0["fontcol"] = (await $.mv((await $.mv((await $.v(C, "fCanvas")), "Font")), "Color"));
  { const $t53 = (await $.call(C, "High", [(await $.v(C, "fColumnHeaderList"))]));
    L0["i"] = 0;
    let $t54 = true;
    for (;;) {
      if (!$t54) { L0["i"] = $.succ(L0["i"], 1); }
      $t54 = false;
      if (!($.ord(L0["i"]) <= $.ord($t53))) break;
      await $.stmt((await $.call(C, "SetFontWithFlags", [(await $.mv((await $.idx((await $.v(C, "fColumnHeaderList")), [L0["i"]])), "flags"))])));
      await $.mset((await $.mv((await $.v(C, "fCanvas")), "Font")), "Color", (await $.v(C, "clBlack")));
      await $.set(C, "fDrawTextAcrossColsDrawingHeader", true);
      await $.stmt((await $.call(C, "DrawTextAcrossCols", [(await $.mv((await $.idx((await $.v(C, "fColumnHeaderList")), [L0["i"]])), "headers")), [], (await $.v(C, "clNone"))])));
      await $.set(C, "fDrawTextAcrossColsDrawingHeader", false);
      await $.tick();
    }
  }
  await $.mset((await $.mv((await $.v(C, "fCanvas")), "Font")), "Color", L0["fontcol"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fEndColumnHeader"))])))) {
    await $.stmt((await $.call(C, "fEndColumnHeader", [Self])));
  }
  await $.mset((await $.v(C, "Font")), "Size", L0["savedfontsize"]);
  await $.mset((await $.v(C, "Font")), "Style", L0["savedfontstyle"]);
  await $.set(C, "fAlign", L0["savedalign"]);
  await $.set(C, "WordWrapLeftCols", L0["savedwordwrapleftcols"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))])))) {
    await $.set(C, "fColumnHeaderInGroup", true);
  }
  await $.set(C, "fColumnHeaderPrintedAtLeastOnce", (await $.v(C, "ForceCopyTextAsWholeContent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "SetZoomStatus", async function SetZoomStatus(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"azoomstatus": $.copyArg(p0), result: undefined, "zoom": 0};
  await $.fixArgs(L0, ["azoomstatus"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq(L0["azoomstatus"], (await $.v(C, "fZoomStatus")))))))) {
    return L0.result;
  }
  { const $t55 = L0["azoomstatus"];
    if ($.eq($t55, (await $.v(C, "zsPageFit")))) {
      L0["zoom"] = (await $.v(C, "PAGE_FIT"));
    }
    else if ($.eq($t55, (await $.v(C, "zsPageWidth")))) {
      L0["zoom"] = (await $.v(C, "PAGE_WIDTH"));
    }
    else {
      L0["zoom"] = (await $.v(C, "fZoom"));
    }
  }
  await $.stmt((await $.call(C, "SetZoom", [L0["zoom"]])));
  return L0.result;
}, {"params": ["aZoomStatus"], "kind": "procedure", "ptypes": ["TZoomStatus"]});
  U.method("TGDIPages", "SetZoom", async function SetZoom(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"zoom": $.copyArg(p0), result: undefined, "scrollincrement": 0, "zoomw": 0, "zoomh": 0, "siz": null};
  await $.fixArgs(L0, ["zoom"]);
  if ($.truthy((await $.or_((await $.or_((await $.or_(($.eq(Self, null)), async () => ($.lt(L0["zoom"], (await $.v(C, "PAGE_FIT")))))), async () => ($.in_(L0["zoom"], [...$.range(0,9)])))), async () => ($.gt(L0["zoom"], 200)))))) {
    return L0.result;
  }
  await $.set(C, "fLinksCurrent", (-(1)));
  await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "PreviewSurfaceBitmap")), async ($t56) => { await $.set(C, "PreviewSurfaceBitmap", $t56); })])));
  if ($.truthy((await $.or_((await $.or_(($.not((await $.v(C, "handleallocated")))), async () => ($.eq((await $.v(C, "fZoom")), L0["zoom"])))), async () => ($.ge((await $.call(C, "cardinal", [$.sub((await $.v(C, "page")), 1)])), (await $.call(C, "cardinal", [(await $.call(C, "length", [(await $.v(C, "fPages"))]))])))))))) {
    return L0.result;
  }
  L0["siz"] = (await $.mv((await $.idx((await $.v(C, "fPages")), [$.sub((await $.v(C, "page")), 1)])), "SizePx"));
  if ($.truthy((await $.or_(($.eq((await $.mv(L0["siz"], "x")), 0)), async () => ($.eq((await $.mv(L0["siz"], "y")), 0)))))) {
    return L0.result;
  } else {
    if ($.truthy($.eq(L0["zoom"], (await $.v(C, "PAGE_FIT"))))) {
      L0["zoomw"] = (await $.call(C, "trunc", [$.fdiv($.fdiv($.mul($.mul(($.sub((await $.v(C, "clientWidth")), $.mul((await $.v(C, "GRAY_MARGIN")), 2))), (await $.mv((await $.v(C, "fPrinterPxPerInch")), "x"))), 100), (await $.mv(L0["siz"], "x"))), (await $.mv((await $.v(C, "screen")), "pixelsperinch")))]));
      L0["zoomh"] = (await $.call(C, "trunc", [$.fdiv($.fdiv($.mul($.mul(($.sub((await $.v(C, "clientHeight")), $.mul((await $.v(C, "GRAY_MARGIN")), 2))), (await $.mv((await $.v(C, "fPrinterPxPerInch")), "y"))), 100), (await $.mv(L0["siz"], "y"))), (await $.mv((await $.v(C, "screen")), "pixelsperinch")))]));
      await $.set(C, "fZoom", (await $.call(C, "Max", [(await $.call(C, "Min", [L0["zoomw"], L0["zoomh"]])), 10])));
    } else {
      if ($.truthy($.eq(L0["zoom"], (await $.v(C, "PAGE_WIDTH"))))) {
        await $.set(C, "fZoom", (await $.call(C, "trunc", [$.fdiv($.fdiv($.mul($.mul(($.sub((await $.v(C, "clientWidth")), $.mul((await $.v(C, "GRAY_MARGIN")), 2))), (await $.mv((await $.v(C, "fPrinterPxPerInch")), "x"))), 100), (await $.mv(L0["siz"], "x"))), (await $.mv((await $.v(C, "screen")), "pixelsperinch")))])));
      } else {
        await $.set(C, "fZoom", L0["zoom"]);
      }
    }
  }
  if ($.truthy($.eq(L0["zoom"], (await $.v(C, "PAGE_FIT"))))) {
    await $.set(C, "fZoomStatus", (await $.v(C, "zsPageFit")));
  } else {
    if ($.truthy($.eq(L0["zoom"], (await $.v(C, "PAGE_WIDTH"))))) {
      await $.set(C, "fZoomStatus", (await $.v(C, "zsPageWidth")));
    } else {
      await $.set(C, "fZoomStatus", (await $.v(C, "zsPercent")));
    }
  }
  L0["scrollincrement"] = (await $.call(C, "PrinterPxToScreenPxY", [(await $.v(C, "GetLineHeight"))]));
  await $.mset((await $.v(C, "HorzScrollbar")), "Increment", L0["scrollincrement"]);
  await $.mset((await $.v(C, "VertScrollbar")), "Increment", L0["scrollincrement"]);
  await $.stmt($.call(C, "ResizeAndCenterPaintbox", []));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fZoomChangedEvent"))])))) {
    await $.stmt((await $.call(C, "fZoomChangedEvent", [Self, (await $.v(C, "fZoom")), (await $.v(C, "fZoomStatus"))])));
  }
  return L0.result;
}, {"params": ["Zoom"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TGDIPages", "ZoomTimerInternal", async function ZoomTimerInternal(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"x": $.copyArg(p0), "y": $.copyArg(p1), "zoomin": $.copyArg(p2), result: undefined, "oldzoom": 0, "pt": null, "siz": null};
  await $.fixArgs(L0, ["x", "y", "zoomin"]);
  if ($.truthy((await $.or_((await $.or_(($.eq(Self, null)), async () => ($.eq((await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), 0)))), async () => ($.eq((await $.mv((await $.v(C, "fPhysicalSizePx")), "y")), 0)))))) {
    return L0.result;
  }
  if ($.truthy($.gt((await $.v(C, "page")), 0))) {
    L0["siz"] = (await $.mv((await $.idx((await $.v(C, "fPages")), [$.sub((await $.v(C, "page")), 1)])), "SizePx"));
  } else {
    L0["siz"] = (await $.v(C, "fPhysicalSizePx"));
  }
  L0["oldzoom"] = (await $.v(C, "fZoom"));
  await $.stmt((await $.call(C, "sendmessage", [(await $.v(C, "handle")), (await $.v(C, "WM_SETREDRAW")), 0, 0])));
  try {
    if ($.truthy(L0["zoomin"])) {
      if ($.truthy($.lt((await $.v(C, "fZoom")), 200))) {
        await $.set(C, "Zoom", $.mul(($.idiv(($.add((await $.v(C, "fZoom")), (await $.v(C, "ZOOMSTEP")))), (await $.v(C, "ZOOMSTEP")))), (await $.v(C, "ZOOMSTEP"))));
      }
    } else {
      if ($.truthy(($.gt((await $.v(C, "fZoom")), 20)))) {
        await $.set(C, "Zoom", $.mul(($.idiv(($.sub((await $.v(C, "fZoom")), (await $.v(C, "ZOOMSTEP")))), (await $.v(C, "ZOOMSTEP")))), (await $.v(C, "ZOOMSTEP"))));
      }
    }
    if ($.truthy($.eq((await $.v(C, "fZoom")), L0["oldzoom"]))) {
      return L0.result;
    }
    await $.mset(L0["pt"], "x", $.idiv(($.mul(($.sub($.sub(L0["x"], (await $.mv((await $.v(C, "fPreviewSurface")), "left"))), (await $.v(C, "GRAY_MARGIN")))), 100)), (await $.call(C, "PrinterPxToScreenPxX", [(await $.mv(L0["siz"], "x"))]))));
    await $.mset(L0["pt"], "x", (await $.call(C, "min", [(await $.call(C, "max", [(await $.mv(L0["pt"], "x")), 0])), 100])));
    await $.mset(L0["pt"], "y", $.idiv(($.mul(($.sub($.sub(L0["y"], (await $.mv((await $.v(C, "fPreviewSurface")), "top"))), (await $.v(C, "GRAY_MARGIN")))), 100)), (await $.call(C, "PrinterPxToScreenPxY", [(await $.mv(L0["siz"], "y"))]))));
    await $.mset(L0["pt"], "y", (await $.call(C, "min", [(await $.call(C, "max", [(await $.mv(L0["pt"], "y")), 0])), 100])));
    {
      const $t57 = (await $.v(C, "HorzScrollbar"));
      await $.wset([$t57], "position", $.idiv(($.mul((await $.mv((await $.wv([$t57], "pt", { get: async () => L0["pt"], set: async (v) => { L0["pt"] = v; }, local: true }, false)), "x")), ($.sub((await $.wv([$t57], "range", C, false)), (await $.wv([$t57], "clientwidth", C, false)))))), 100), C);
    }
    {
      const $t58 = (await $.v(C, "VertScrollbar"));
      await $.wset([$t58], "position", $.idiv(($.mul((await $.mv((await $.wv([$t58], "pt", { get: async () => L0["pt"], set: async (v) => { L0["pt"] = v; }, local: true }, false)), "y")), ($.sub((await $.wv([$t58], "range", C, false)), (await $.wv([$t58], "clientheight", C, false)))))), 100), C);
    }
  } finally {
    await $.stmt((await $.call(C, "SendMessage", [(await $.v(C, "handle")), (await $.v(C, "WM_SETREDRAW")), 1, 0])));
  }
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["X", "Y", "ZoomIn"], "kind": "procedure", "ptypes": ["integer", "integer", "boolean"]});
  U.method("TGDIPages", "ZoomTimer", async function ZoomTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cursorpos": null};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "GetCursorPos", [L0["cursorpos"]])));
  L0["cursorpos"] = (await $.call(C, "ScreenToClient", [L0["cursorpos"]]));
  await $.stmt((await $.call(C, "ZoomTimerInternal", [(await $.mv(L0["cursorpos"], "x")), (await $.mv(L0["cursorpos"], "y")), (await $.v(C, "fZoomIn"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGDIPages", "LineInternal", async function LineInternal(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"start": $.copyArg(p0), "finish": $.copyArg(p1), "doubleline": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["start", "finish", "doubleline"]);
  await $.stmt((await $.call(C, "LineInternal", [$.add((await $.v(C, "fCurrentYPos")), ($.shr((await $.v(C, "GetLineHeight")), 1))), L0["start"], L0["finish"], L0["doubleline"]])));
  return L0.result;
}, {"params": ["start", "finish", "doubleline"], "kind": "procedure", "ptypes": ["integer", "integer", "boolean"]});
  U.method("TGDIPages", "LineInternal", async function LineInternal(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"aty": $.copyArg(p0), "start": $.copyArg(p1), "finish": $.copyArg(p2), "doubleline": $.copyArg(p3), result: undefined, "y": 0};
  await $.fixArgs(L0, ["aty", "start", "finish", "doubleline"]);
  if ($.truthy((await $.and_(($.ne(Self, null)), async () => ($.ne((await $.v(C, "fCanvas")), null)))))) {
    {
      const $t59 = (await $.v(C, "fCanvas"));
      await $.mset((await $.wv([$t59], "Pen", C, false)), "Width", (await $.wcall([$t59], "MulDiv", [(await $.wv([$t59], "fDefaultLineWidth", C, false)), (await $.mv((await $.mv(Self, "Font")), "size")), 8], C)));
      if ($.truthy($.in_((await $.wv([$t59], "fsBold", C, false)), (await $.mv((await $.mv(Self, "Font")), "style"))))) {
        await $.mset((await $.wv([$t59], "Pen", C, false)), "Width", $.add((await $.mv((await $.wv([$t59], "Pen", C, false)), "Width")), 1));
      }
      if ($.truthy((await $.wv([$t59], "doubleline", { get: async () => L0["doubleline"], set: async (v) => { L0["doubleline"] = v; }, local: true }, false)))) {
        await $.wset([$t59], "Y", $.sub((await $.wv([$t59], "aty", { get: async () => L0["aty"], set: async (v) => { L0["aty"] = v; }, local: true }, false)), ((await $.mv((await $.wv([$t59], "Pen", C, false)), "Width")))), { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
        await $.stmt((await $.wcall([$t59], "MoveTo", [(await $.wv([$t59], "start", { get: async () => L0["start"], set: async (v) => { L0["start"] = v; }, local: true }, false)), (await $.wv([$t59], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t59], "LineTo", [(await $.wv([$t59], "finish", { get: async () => L0["finish"], set: async (v) => { L0["finish"] = v; }, local: true }, false)), (await $.wv([$t59], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t59], "MoveTo", [(await $.wv([$t59], "start", { get: async () => L0["start"], set: async (v) => { L0["start"] = v; }, local: true }, false)), $.add((await $.wv([$t59], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), ($.mul((await $.mv((await $.wv([$t59], "Pen", C, false)), "Width")), 2)))], C)));
        await $.stmt((await $.wcall([$t59], "LineTo", [(await $.wv([$t59], "finish", { get: async () => L0["finish"], set: async (v) => { L0["finish"] = v; }, local: true }, false)), $.add((await $.wv([$t59], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), ($.mul((await $.mv((await $.wv([$t59], "Pen", C, false)), "Width")), 2)))], C)));
      } else {
        await $.wset([$t59], "Y", $.sub((await $.wv([$t59], "aty", { get: async () => L0["aty"], set: async (v) => { L0["aty"] = v; }, local: true }, false)), ($.shr((await $.mv((await $.wv([$t59], "Pen", C, false)), "Width")), 1))), { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
        await $.stmt((await $.wcall([$t59], "MoveTo", [(await $.wv([$t59], "start", { get: async () => L0["start"], set: async (v) => { L0["start"] = v; }, local: true }, false)), (await $.wv([$t59], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t59], "LineTo", [(await $.wv([$t59], "finish", { get: async () => L0["finish"], set: async (v) => { L0["finish"] = v; }, local: true }, false)), (await $.wv([$t59], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["aty", "start", "finish", "doubleline"], "kind": "procedure", "ptypes": ["integer", "integer", "integer", "boolean"]});
  U.method("TGDIPages", "PrintFormattedLine", async function PrintFormattedLine(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "flags": $.copyArg(p1), "abookmark": $.copyArg(p2), "alink": $.copyArg(p3), "withnewline": $.copyArg(p4), "alinknoborder": $.copyArg(p5), result: undefined, "i": 0, "xpos": 0, "leftoffset": 0, "rightoffset": 0};
  await $.fixArgs(L0, ["s", "flags", "abookmark", "alink", "withnewline", "alinknoborder"]);
  L0["s"] = (await $.call(C, "RightTrim", [L0["s"]]));
  L0["i"] = (await $.call(C, "pos", [(await $.v(C, "PAGENUMBER")), (await $.call(C, "LowerCaseU", [L0["s"]]))]));
  if ($.truthy($.gt(L0["i"], 0))) {
    await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["s"], async ($t60) => { L0["s"] = $t60; }), L0["i"], 14])));
    await $.stmt((await $.call(C, "insert", [(await $.call(C, "UTF8ToSynUnicode", [(await $.call(C, "Int32ToUtf8", [(await $.v(C, "fVirtualPageNum"))]))])), $.ref(async () => L0["s"], async ($t61) => { L0["s"] = $t61; }), L0["i"]])));
  }
  if ($.truthy($.ne(L0["flags"], (await $.v(C, "FORMAT_DEFAULT"))))) {
    await $.stmt((await $.call(C, "SetFontWithFlags", [L0["flags"]])));
  }
  await $.stmt($.call(C, "CheckYPos", []));
  await $.set(C, "fCurrentTextTop", (await $.v(C, "fCurrentYPos")));
  await $.set(C, "fCurrentTextPage", (await $.v(C, "PageCount")));
  await $.stmt((await $.call(C, "GetTextLimitsPx", [$.ref(async () => L0["leftoffset"], async ($t62) => { L0["leftoffset"] = $t62; }), $.ref(async () => L0["rightoffset"], async ($t63) => { L0["rightoffset"] = $t63; })])));
  if ($.truthy($.ne((await $.and_(L0["flags"], async () => ((await $.or_((await $.v(C, "FORMAT_SINGLELINE")), async () => (await $.v(C, "FORMAT_DOUBLELINE"))))))), 0))) {
    await $.stmt((await $.call(C, "LineInternal", [L0["leftoffset"], L0["rightoffset"], $.eq((await $.and_(L0["flags"], async () => (await $.v(C, "FORMAT_DOUBLELINE")))), (await $.v(C, "FORMAT_DOUBLELINE")))])));
    await $.stmt($.call(C, "NewLine", []));
  } else {
    if ($.truthy($.eq(L0["s"], ""))) {
      if ($.truthy(L0["withnewline"])) {
        await $.stmt($.call(C, "NewLine", []));
      }
    } else {
      if ($.truthy(($.ne((await $.and_(L0["flags"], async () => (await $.v(C, "FORMAT_XPOS_MASK")))), 0)))) {
        L0["xpos"] = $.sub(($.shr(((await $.and_(L0["flags"], async () => (await $.v(C, "FORMAT_XPOS_MASK"))))), 16)), 2);
        if ($.truthy($.lt(L0["xpos"], 0))) {
          L0["xpos"] = (await $.v(C, "RightMarginPos"));
        } else {
          await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["xpos"], async ($t64) => { L0["xpos"] = $t64; })])));
        }
        await $.stmt((await $.call(C, "DrawTextAt", [L0["s"], L0["xpos"]])));
      } else {
        if ($.truthy(($.in_((await $.v(C, "falign")), [(await $.v(C, "taLeft")), (await $.v(C, "taJustified"))])))) {
          await $.stmt((await $.call(C, "LeftOrJustifiedWrap", [L0["s"], L0["withnewline"]])));
        } else {
          await $.stmt((await $.call(C, "RightOrCenterWrap", [L0["s"]])));
        }
      }
    }
  }
  if ($.truthy($.ne(L0["abookmark"], ""))) {
    await $.stmt((await $.call(C, "AddBookMark", [L0["abookmark"], (await $.v(C, "fCurrentTextTop"))])));
  }
  if ($.truthy($.ne(L0["alink"], ""))) {
    await $.stmt((await $.call(C, "AddLink", [L0["alink"], (await $.call(C, "Rect", [(await $.call(C, "PrinterPxToMmX", [L0["leftoffset"]])), (await $.call(C, "PrinterPxToMmY", [(await $.v(C, "fCurrentTextTop"))])), (await $.call(C, "PrinterPxToMmX", [L0["rightoffset"]])), (await $.call(C, "PrinterPxToMmY", [$.add((await $.v(C, "fCurrentTextTop")), (await $.v(C, "fLineHeight")))]))])), (await $.v(C, "fCurrentTextPage")), L0["alinknoborder"]])));
  }
  return L0.result;
}, {"params": ["s", "flags", "aBookmark", "aLink", "withNewLine", "aLinkNoBorder"], "kind": "procedure", "ptypes": ["SynUnicode", "integer", "String", "String", "boolean", "boolean"]});
  U.method("TGDIPages", "LeftOrJustifiedWrap", async function LeftOrJustifiedWrap(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "withnewline": $.copyArg(p1), result: undefined, "indent": 0, "leftoffset": 0, "rightoffset": 0, "linewidth": 0, "leftstring": null, "rightstring": null, "firstloop": false};
  await $.fixArgs(L0, ["s", "withnewline"]);
  L0["leftstring"] = L0["s"];
  L0["indent"] = (await $.call(C, "MmToPrinterPxX", [(await $.v(C, "fHangIndent"))]));
  L0["firstloop"] = true;
  do {
    await $.stmt($.call(C, "CheckYPos", []));
    await $.stmt((await $.call(C, "GetTextLimitsPx", [$.ref(async () => L0["leftoffset"], async ($t65) => { L0["leftoffset"] = $t65; }), $.ref(async () => L0["rightoffset"], async ($t66) => { L0["rightoffset"] = $t66; })])));
    L0["linewidth"] = $.sub(L0["rightoffset"], L0["leftoffset"]);
    if ($.truthy($.ne(L0["indent"], 0))) {
      if ($.truthy(L0["firstloop"])) {
        L0["firstloop"] = false;
        if ($.truthy(($.lt(L0["indent"], 0)))) {
          await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["leftoffset"], async ($t67) => { L0["leftoffset"] = $t67; }), (-(L0["indent"]))])));
          await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["linewidth"], async ($t68) => { L0["linewidth"] = $t68; }), (-(L0["indent"]))])));
        }
      } else {
        if ($.truthy((await $.and_(($.gt(L0["indent"], 0)), async () => ($.lt(L0["indent"], L0["linewidth"])))))) {
          await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["leftoffset"], async ($t69) => { L0["leftoffset"] = $t69; }), L0["indent"]])));
          await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["linewidth"], async ($t70) => { L0["linewidth"] = $t70; }), L0["indent"]])));
        }
      }
    }
    await $.stmt((await $.call(C, "TrimLine", [(await $.v(C, "fCanvas")), $.ref(async () => L0["leftstring"], async ($t71) => { L0["leftstring"] = $t71; }), $.ref(async () => L0["rightstring"], async ($t72) => { L0["rightstring"] = $t72; }), L0["linewidth"]])));
    await $.stmt((await $.call(C, "HandleTabsAndPrint", [L0["leftstring"], $.ref(async () => L0["rightstring"], async ($t73) => { L0["rightstring"] = $t73; }), L0["leftoffset"], L0["rightoffset"]])));
    if ($.truthy($.eq((await $.call(C, "length", [L0["rightstring"]])), 0))) {
      break;
    }
    L0["leftstring"] = L0["rightstring"];
    await $.stmt($.call(C, "NewLine", []));
    await $.tick();
  } while (!$.truthy(false));
  if ($.truthy(L0["withnewline"])) {
    await $.stmt($.call(C, "NewLine", []));
  }
  return L0.result;
}, {"params": ["s", "withNewLine"], "kind": "procedure", "ptypes": ["SynUnicode", "boolean"]});
  U.method("TGDIPages", "RightOrCenterWrap", async function RightOrCenterWrap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "i": 0, "leftoffset": 0, "rightoffset": 0, "linewidth": 0, "leftstring": null, "rightstring": null, "offset": 0};
  await $.fixArgs(L0, ["s"]);
  L0["leftstring"] = L0["s"];
  L0["i"] = (await $.call(C, "pos", ["\t", L0["leftstring"]]));
  while ($.truthy($.gt(L0["i"], 0))) {
    await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["leftstring"], async ($t74) => { L0["leftstring"] = $t74; }), L0["i"], 1])));
    await $.stmt((await $.call(C, "insert", ["    ", $.ref(async () => L0["leftstring"], async ($t75) => { L0["leftstring"] = $t75; }), L0["i"]])));
    L0["i"] = (await $.call(C, "pos", ["\t", L0["leftstring"]]));
    await $.tick();
  }
  await $.stmt((await $.call(C, "SetBkMode", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), (await $.v(C, "TRANSPARENT"))])));
  do {
    await $.stmt((await $.call(C, "GetTextLimitsPx", [$.ref(async () => L0["leftoffset"], async ($t76) => { L0["leftoffset"] = $t76; }), $.ref(async () => L0["rightoffset"], async ($t77) => { L0["rightoffset"] = $t77; })])));
    L0["linewidth"] = $.sub(L0["rightoffset"], L0["leftoffset"]);
    await $.stmt((await $.call(C, "TrimLine", [(await $.v(C, "fCanvas")), $.ref(async () => L0["leftstring"], async ($t78) => { L0["leftstring"] = $t78; }), $.ref(async () => L0["rightstring"], async ($t79) => { L0["rightstring"] = $t79; }), L0["linewidth"]])));
    { const $t80 = (await $.v(C, "falign"));
      if ($.eq($t80, (await $.v(C, "taRight")))) {
        L0["offset"] = $.sub($.sub(L0["rightoffset"], (await $.call(C, "TextWidthC", [(await $.v(C, "fCanvas")), L0["leftstring"]]))), 1);
      }
      else if ($.eq($t80, (await $.v(C, "taCenter")))) {
        L0["offset"] = $.add(L0["leftoffset"], $.idiv(($.sub($.sub(L0["rightoffset"], L0["leftoffset"]), (await $.call(C, "TextWidthC", [(await $.v(C, "fCanvas")), L0["leftstring"]])))), 2));
      }
      else {
        L0["offset"] = 0;
      }
    }
    await $.stmt($.call(C, "CheckYPos", []));
    await $.stmt((await $.call(C, "TextOut", [(await $.v(C, "fCanvas")), L0["offset"], (await $.v(C, "fCurrentYPos")), L0["leftstring"]])));
    if ($.truthy($.eq((await $.call(C, "length", [L0["rightstring"]])), 0))) {
      break;
    }
    L0["leftstring"] = L0["rightstring"];
    await $.stmt($.call(C, "NewLine", []));
    await $.tick();
  } while (!$.truthy(false));
  await $.stmt($.call(C, "NewLine", []));
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["SynUnicode"]});
  U.method("TGDIPages", "GetTextLimitsPx", async function GetTextLimitsPx(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"leftoffset": $.asRef(p0), "rightoffset": $.asRef(p1), result: undefined};
  await L0["leftoffset"].set((await $.mv((await $.v(C, "fPageMarginsPx")), "left")));
  if ($.truthy($.ne((await $.v(C, "fForcedLeftOffset")), (-(1))))) {
    await L0["leftoffset"].set((await $.v(C, "fForcedLeftOffset")));
  }
  await L0["rightoffset"].set($.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), (await $.mv((await $.v(C, "fPageMarginsPx")), "right"))));
  if ($.truthy($.lt((await L0["rightoffset"].get()), (await L0["leftoffset"].get())))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["GetTextLimitsPx: wrong margins"])));
  }
  return L0.result;
}, {"params": ["LeftOffset", "RightOffset"], "kind": "procedure", "ptypes": ["integer", "integer"]});
  U.method("TGDIPages", "HandleTabsAndPrint", async function HandleTabsAndPrint(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"leftstring": $.copyArg(p0), "rightstring": $.asRef(p1), "leftoffset": $.copyArg(p2), "rightoffset": $.copyArg(p3), result: undefined, "i": 0, "spacecount": 0, "linewidth": 0, "tabpos": 0, "tabindex": 0, "pwlen": 0, "ls": null, "rs": null, "size": null, "pw": null};
  await $.fixArgs(L0, ["leftstring", "leftoffset", "rightoffset"]);
  L0["min_char_width_px"] = 5;
  L0["ls"] = L0["leftstring"];
  L0["linewidth"] = $.sub(L0["rightoffset"], L0["leftoffset"]);
  L0["tabpos"] = (await $.call(C, "pos", ["\t", L0["ls"]]));
  await $.stmt((await $.call(C, "SetBkMode", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), (await $.v(C, "TRANSPARENT"))])));
  while ($.truthy($.gt(L0["tabpos"], 0))) {
    if ($.truthy($.ne(L0["rs"], ""))) {
      L0["rs"] = $.add($.add((await $.call(C, "copy", [L0["ls"], $.add(L0["tabpos"], 1), (await $.call(C, "length", [L0["ls"]]))])), " "), L0["rs"]);
    } else {
      L0["rs"] = (await $.call(C, "copy", [L0["ls"], $.add(L0["tabpos"], 1), (await $.call(C, "length", [L0["ls"]]))]));
    }
    L0["ls"] = $.add((await $.call(C, "copy", [L0["ls"], 1, $.sub(L0["tabpos"], 1)])), " ");
    L0["size"] = (await $.call(C, "TextExtent", [(await $.v(C, "fCanvas")), L0["ls"], L0["tabpos"]]));
    L0["i"] = $.add(L0["leftoffset"], (await $.mv(L0["size"], "cx")));
    L0["tabindex"] = 0;
    while ($.truthy($.lt(L0["tabindex"], (await $.v(C, "MAXTABS"))))) {
      if ($.truthy($.gt((await $.idx((await $.v(C, "fTab")), [L0["tabindex"]])), L0["i"]))) {
        break;
      } else {
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["tabindex"], async ($t81) => { L0["tabindex"] = $t81; })])));
      }
      await $.tick();
    }
    if ($.truthy((await $.or_(($.eq(L0["tabindex"], (await $.v(C, "MAXTABS")))), async () => ($.ge((await $.idx((await $.v(C, "fTab")), [L0["tabindex"]])), $.sub(L0["rightoffset"], L0["min_char_width_px"]))))))) {
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["ls"], async ($t82) => { L0["ls"] = $t82; }), $.sub((await $.call(C, "length", [L0["ls"]])), 1)])));
      break;
    }
    await $.stmt((await $.call(C, "TextOut", [(await $.v(C, "fCanvas")), L0["leftoffset"], (await $.v(C, "fCurrentYPos")), L0["ls"]])));
    L0["leftoffset"] = (await $.idx((await $.v(C, "fTab")), [L0["tabindex"]]));
    L0["linewidth"] = $.sub(L0["rightoffset"], L0["leftoffset"]);
    L0["ls"] = L0["rs"];
    await $.stmt((await $.call(C, "TrimLine", [(await $.v(C, "fCanvas")), $.ref(async () => L0["ls"], async ($t83) => { L0["ls"] = $t83; }), $.ref(async () => L0["rs"], async ($t84) => { L0["rs"] = $t84; }), L0["linewidth"]])));
    L0["tabpos"] = (await $.call(C, "pos", ["\t", L0["ls"]]));
    await $.tick();
  }
  if ($.truthy($.ne(L0["rs"], ""))) {
    await L0["rightstring"].set($.add($.add(L0["rs"], " "), (await L0["rightstring"].get())));
  }
  await $.stmt((await $.call(C, "InternalUnicodeString", [L0["ls"], $.ref(async () => L0["pw"], async ($t85) => { L0["pw"] = $t85; }), $.ref(async () => L0["pwlen"], async ($t86) => { L0["pwlen"] = $t86; }), L0["size"]])));
  if ($.truthy((await $.or_(($.eq((await $.v(C, "falign")), (await $.v(C, "taLeft")))), async () => ($.eq((await L0["rightstring"].get()), "")))))) {
    if ($.truthy($.eq((await $.v(C, "BiDiMode")), (await $.v(C, "bdRightToLeft"))))) {
      L0["leftoffset"] = $.sub(L0["rightoffset"], (await $.mv(L0["size"], "cx")));
    }
    await $.stmt((await $.call(C, "TextOut", [(await $.v(C, "fCanvas")), L0["leftoffset"], (await $.v(C, "fCurrentYPos")), L0["pw"], L0["pwlen"]])));
    await $.set(C, "fForcedLeftOffset", $.add(L0["leftoffset"], (await $.mv(L0["size"], "cx"))));
  } else {
    L0["spacecount"] = 0;
    { const $t87 = (await $.call(C, "length", [L0["ls"]]));
      L0["i"] = 1;
      let $t88 = true;
      for (;;) {
        if (!$t88) { L0["i"] = $.succ(L0["i"], 1); }
        $t88 = false;
        if (!($.ord(L0["i"]) <= $.ord($t87))) break;
        if ($.truthy($.eq((await $.idx(L0["ls"], [L0["i"]])), " "))) {
          await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["spacecount"], async ($t89) => { L0["spacecount"] = $t89; })])));
        }
        await $.tick();
      }
    }
    if ($.truthy($.gt(L0["spacecount"], 0))) {
      await $.stmt((await $.call(C, "SetTextJustification", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), $.sub(L0["linewidth"], (await $.mv(L0["size"], "cx"))), L0["spacecount"]])));
    }
    await $.stmt((await $.call(C, "TextOut", [(await $.v(C, "fCanvas")), L0["leftoffset"], (await $.v(C, "fCurrentYPos")), L0["pw"], L0["pwlen"]])));
    await $.stmt((await $.call(C, "SetTextJustification", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), 0, 0])));
  }
  return L0.result;
}, {"params": ["leftstring", "rightstring", "leftOffset", "rightOffset"], "kind": "procedure", "ptypes": ["SynUnicode", "SynUnicode", "integer", "integer"]});
  U.method("TGDIPages", "PreviewPaint", async function PreviewPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "r": null, "p1": null, "p2": null, "metapage": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.in_((await $.v(C, "csDesigning")), (await $.v(C, "ComponentState"))))) {
    L0["r"] = (await $.mv((await $.v(C, "fPreviewSurface")), "ClientRect"));
    await $.mset((await $.mv((await $.mv((await $.v(C, "fPreviewSurface")), "Canvas")), "Brush")), "Color", (await $.v(C, "Color")));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "fPreviewSurface")), "Canvas")), "FillRect", [L0["r"]])));
    return L0.result;
  }
  if ($.truthy($.not((await $.v(C, "Visible"))))) {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "PreviewSurfaceBitmap")), async ($t90) => { await $.set(C, "PreviewSurfaceBitmap", $t90); })])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.v(C, "PreviewSurfaceBitmap")), null))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "fPreviewSurface")), "Canvas")), "Draw", [0, 0, (await $.v(C, "PreviewSurfaceBitmap"))])));
  } else {
    {
      const $t91 = (await $.v(C, "fPreviewSurface"));
      await $.wset([$t91], "R", (await $.wv([$t91], "ClientRect", C, false)), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
      await $.wset([$t91], "PreviewSurfaceBitmap", (await $.mv((await $.wv([$t91], "TBitmap", C, false)), "Create")), C);
      await $.mset((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Width", (await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Right")));
      await $.mset((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Height", (await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Bottom")));
      {
        const $t92 = (await $.mv((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Canvas"));
        await $.mset((await $.wv([$t91, $t92], "Brush", C, false)), "Color", (await $.wv([$t91, $t92], "Color", C, false)));
        await $.stmt((await $.wcall([$t91, $t92], "FillRect", [(await $.wv([$t91, $t92], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t91, $t92], "InflateRect", [(await $.wv([$t91, $t92], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), (-((await $.wv([$t91, $t92], "GRAY_MARGIN", C, false)))), (-((await $.wv([$t91, $t92], "GRAY_MARGIN", C, false))))], C)));
        await $.mset((await $.wv([$t91, $t92], "Brush", C, false)), "Color", (await $.wv([$t91, $t92], "clWhite", C, false)));
        await $.mset((await $.wv([$t91, $t92], "Pen", C, false)), "Width", 1);
        await $.mset((await $.wv([$t91, $t92], "Pen", C, false)), "Color", (await $.wv([$t91, $t92], "clGray", C, false)));
        await $.stmt((await $.wcall([$t91, $t92], "Rectangle", [(await $.wv([$t91, $t92], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t91, $t92], "Refresh", [], C));
      }
      if ($.truthy((await $.and_((await $.and_(($.ne((await $.wv([$t91], "fPages", C, false)), null)), async () => ($.le((await $.wcall([$t91], "cardinal", [$.sub((await $.wv([$t91], "Page", C, false)), 1)], C)), (await $.wcall([$t91], "cardinal", [(await $.wcall([$t91], "High", [(await $.wv([$t91], "fPages", C, false))], C))], C)))))), async () => ($.ne((await $.mv((await $.idx((await $.wv([$t91], "fPages", C, false)), [$.sub((await $.wv([$t91], "Page", C, false)), 1)])), "MetaFileCompressed")), "")))))) {
        await $.wset([$t91], "metapage", (await $.wcall([$t91], "GetMetaFileForPage", [$.sub((await $.wv([$t91], "Page", C, false)), 1)], C)), { get: async () => L0["metapage"], set: async (v) => { L0["metapage"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Canvas")), "StretchDraw", [(await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), (await $.wv([$t91], "metapage", { get: async () => L0["metapage"], set: async (v) => { L0["metapage"] = v; }, local: true }, false))])));
        await $.mcall((await $.mv((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Canvas")), "Refresh", []);
      }
      if ($.truthy($.gt((await $.wv([$t91], "Page", C, false)), 1))) {
        await $.mset((await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), "X", $.add((await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left")), 10));
        await $.mset((await $.wv([$t91], "P2", { get: async () => L0["p2"], set: async (v) => { L0["p2"] = v; }, local: true }, false)), "X", $.add((await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left")), 1));
        await $.mset((await $.wv([$t91], "PageLeftButton", C, false)), "X", (await $.mv((await $.wv([$t91], "P2", { get: async () => L0["p2"], set: async (v) => { L0["p2"] = v; }, local: true }, false)), "X")));
        await $.mset((await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), "Y", $.add((await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top")), 11));
        await $.mset((await $.wv([$t91], "P2", { get: async () => L0["p2"], set: async (v) => { L0["p2"] = v; }, local: true }, false)), "Y", (await $.mv((await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), "Y")));
        await $.mset((await $.wv([$t91], "PageLeftButton", C, false)), "Y", $.sub((await $.mv((await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), "Y")), 10));
        await $.stmt((await $.wcall([$t91], "DrawArrowInternal", [(await $.mv((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Canvas")), (await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), (await $.wv([$t91], "P2", { get: async () => L0["p2"], set: async (v) => { L0["p2"] = v; }, local: true }, false)), 10, (await $.wv([$t91], "true", C, false))], C)));
      } else {
        await $.mset((await $.wv([$t91], "PageLeftButton", C, false)), "X", 0);
      }
      if ($.truthy($.lt((await $.wv([$t91], "Page", C, false)), (await $.wv([$t91], "PageCount", C, false))))) {
        await $.mset((await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), "X", $.sub((await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Right")), 10));
        await $.mset((await $.wv([$t91], "PageRightButton", C, false)), "X", (await $.mv((await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), "X")));
        await $.mset((await $.wv([$t91], "P2", { get: async () => L0["p2"], set: async (v) => { L0["p2"] = v; }, local: true }, false)), "X", $.sub((await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Right")), 1));
        await $.mset((await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), "Y", $.add((await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top")), 11));
        await $.mset((await $.wv([$t91], "P2", { get: async () => L0["p2"], set: async (v) => { L0["p2"] = v; }, local: true }, false)), "Y", (await $.mv((await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), "Y")));
        await $.mset((await $.wv([$t91], "PageRightButton", C, false)), "Y", $.sub((await $.mv((await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), "Y")), 10));
        await $.stmt((await $.wcall([$t91], "DrawArrowInternal", [(await $.mv((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Canvas")), (await $.wv([$t91], "P1", { get: async () => L0["p1"], set: async (v) => { L0["p1"] = v; }, local: true }, false)), (await $.wv([$t91], "P2", { get: async () => L0["p2"], set: async (v) => { L0["p2"] = v; }, local: true }, false)), 10, (await $.wv([$t91], "true", C, false))], C)));
      } else {
        await $.mset((await $.wv([$t91], "PageRightButton", C, false)), "X", 0);
      }
      await $.mset((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top", $.add((await $.wv([$t91], "GRAY_MARGIN", C, false)), 3));
      await $.mset((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left", $.sub((await $.wv([$t91], "ClientWidth", C, false)), (await $.wv([$t91], "GRAY_MARGIN", C, false))));
      await $.mset((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Bottom", $.add($.sub((await $.wv([$t91], "ClientHeight", C, false)), (await $.wv([$t91], "GRAY_MARGIN", C, false))), 3));
      await $.mset((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left")), 3));
      await $.mset((await $.mv((await $.mv((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Canvas")), "brush")), "color", (await $.wv([$t91], "clGray", C, false)));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Canvas")), "FillRect", [(await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false))])));
      await $.mset((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top", $.sub((await $.wv([$t91], "ClientHeight", C, false)), (await $.wv([$t91], "GRAY_MARGIN", C, false))));
      await $.mset((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left", $.add((await $.wv([$t91], "GRAY_MARGIN", C, false)), 3));
      await $.mset((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top")), 3));
      await $.mset((await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Right", $.add($.sub((await $.wv([$t91], "ClientWidth", C, false)), (await $.wv([$t91], "GRAY_MARGIN", C, false))), 3));
      await $.mset((await $.mv((await $.mv((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Canvas")), "brush")), "color", (await $.wv([$t91], "clGray", C, false)));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t91], "PreviewSurfaceBitmap", C, false)), "Canvas")), "FillRect", [(await $.wv([$t91], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t91], "Canvas", C, false)), "Draw", [0, 0, (await $.wv([$t91], "PreviewSurfaceBitmap", C, false))])));
    }
  }
  if ($.truthy($.ge((await $.v(C, "fLinksCurrent")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "fPreviewSurface")), "Canvas")), "DrawFocusRect", [(await $.mv((await $.call(C, "TGDIPagereference", [(await $.idx((await $.mv((await $.v(C, "fLinks")), "Objects")), [(await $.v(C, "fLinksCurrent"))]))])), "Preview"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGDIPages", "PreviewMouseDown", async function PreviewMouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy($.eq(L0["button"], (await $.v(C, "mbRight"))))) {
    if ($.truthy($.ne((await $.v(C, "PopupMenu")), null))) {
      {
        const $t93 = (await $.mcall((await $.v(C, "fPreviewSurface")), "ClientToScreen", [(await $.call(C, "Point", [L0["x"], L0["y"]]))]));
        await $.stmt((await $.mcall((await $.wv([$t93], "PopupMenu", C, false)), "Popup", [(await $.wv([$t93], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.wv([$t93], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))])));
      }
      return L0.result;
    }
  } else {
    if ($.truthy($.eq(L0["button"], (await $.v(C, "mbLeft"))))) {
      if ($.truthy($.ge((await $.v(C, "fLinksCurrent")), 0))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "fPreviewSurface")), "Canvas")), "DrawFocusRect", [(await $.mv((await $.call(C, "TGDIPagereference", [(await $.idx((await $.mv((await $.v(C, "fLinks")), "Objects")), [(await $.v(C, "fLinksCurrent"))]))])), "Preview"))])));
        L0["i"] = (await $.v(C, "fLinksCurrent"));
        await $.set(C, "fLinksCurrent", (-(1)));
        await $.stmt((await $.call(C, "GotoBookmark", [(await $.idx((await $.v(C, "fLinks")), [L0["i"]]))])));
      } else {
        if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "PageLeftButton")), "X")), 0)), async () => ($.lt((await $.call(C, "cardinal", [$.sub(L0["x"], (await $.mv((await $.v(C, "PageLeftButton")), "X")))])), 10)))), async () => ($.lt((await $.call(C, "cardinal", [$.sub(L0["y"], (await $.mv((await $.v(C, "PageLeftButton")), "Y")))])), 20)))))) {
          await $.set(C, "Page", $.sub((await $.v(C, "Page")), 1));
          return L0.result;
        } else {
          if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "PageRightButton")), "X")), 0)), async () => ($.lt((await $.call(C, "cardinal", [$.sub(L0["x"], (await $.mv((await $.v(C, "PageRightButton")), "X")))])), 10)))), async () => ($.lt((await $.call(C, "cardinal", [$.sub(L0["y"], (await $.mv((await $.v(C, "PageRightButton")), "Y")))])), 20)))))) {
            await $.set(C, "Page", $.add((await $.v(C, "Page")), 1));
            return L0.result;
          }
        }
      }
    }
  }
  if ($.truthy((await $.and_(($.eq(L0["button"], (await $.v(C, "mbLeft")))), async () => ($.in_((await $.v(C, "ssDouble")), L0["shift"])))))) {
    if ($.truthy($.eq((await $.v(C, "ZoomStatus")), (await $.v(C, "zsPageWidth"))))) {
      await $.set(C, "Zoom", (await $.v(C, "PAGE_FIT")));
    } else {
      await $.set(C, "Zoom", (await $.v(C, "PAGE_WIDTH")));
    }
  } else {
    if ($.truthy($.eq(L0["button"], (await $.v(C, "mbLeft"))))) {
      await $.mset((await $.v(C, "fButtonDown")), "X", $.shl(($.shr(L0["x"], 3)), 3));
      await $.mset((await $.v(C, "fButtonDown")), "Y", $.shl(($.shr(L0["y"], 3)), 3));
      await $.mset((await $.v(C, "fButtonDownScroll")), "X", (await $.mv((await $.v(C, "HorzScrollBar")), "Position")));
      await $.mset((await $.v(C, "fButtonDownScroll")), "Y", (await $.mv((await $.v(C, "VertScrollBar")), "Position")));
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHandPoint")));
    }
  }
  await $.stmt((await $.call(C, "MouseDown", [L0["button"], L0["shift"], $.add(L0["x"], (await $.mv((await $.v(C, "fPreviewSurface")), "left"))), $.add(L0["y"], (await $.mv((await $.v(C, "fPreviewSurface")), "Top")))])));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TGDIPages", "PreviewMouseUp", async function PreviewMouseUp(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.stmt((await $.call(C, "MouseUp", [L0["button"], L0["shift"], $.add(L0["x"], (await $.mv((await $.v(C, "fPreviewSurface")), "left"))), $.add(L0["y"], (await $.mv((await $.v(C, "fPreviewSurface")), "Top")))])));
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TGDIPages", "PreviewMouseMove", async function PreviewMouseMove(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined, "bx": 0, "v": 0, "i": 0};
  await $.fixArgs(L0, ["sender", "shift", "x", "y"]);
  await $.mset((await $.v(C, "fMousePos")), "X", $.add(L0["x"], (await $.mv((await $.v(C, "fPreviewSurface")), "left"))));
  await $.mset((await $.v(C, "fMousePos")), "Y", $.add(L0["y"], (await $.mv((await $.v(C, "fPreviewSurface")), "Top"))));
  if ($.truthy($.ge((await $.v(C, "fLinksCurrent")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "fPreviewSurface")), "Canvas")), "DrawFocusRect", [(await $.mv((await $.call(C, "TGDIPagereference", [(await $.idx((await $.mv((await $.v(C, "fLinks")), "Objects")), [(await $.v(C, "fLinksCurrent"))]))])), "Preview"))])));
    await $.set(C, "fLinksCurrent", (-(1)));
  }
  if ($.truthy($.ge((await $.mv((await $.v(C, "fButtonDown")), "X")), 0))) {
    L0["x"] = $.shl(($.shr(L0["x"], 3)), 3);
    L0["y"] = $.shl(($.shr(L0["y"], 3)), 3);
    L0["bx"] = (await $.mv((await $.v(C, "fButtonDown")), "X"));
    await $.mset((await $.v(C, "fButtonDown")), "X", (-(1)));
    L0["v"] = $.add($.sub((await $.mv((await $.v(C, "fButtonDownScroll")), "X")), L0["x"]), L0["bx"]);
    if ($.truthy((await $.and_((await $.and_(($.ge(L0["v"], 0)), async () => ($.ne((await $.mv((await $.v(C, "HorzScrollBar")), "Position")), L0["v"])))), async () => ($.lt(L0["v"], (await $.mv((await $.v(C, "HorzScrollBar")), "Range")))))))) {
      await $.mset((await $.v(C, "HorzScrollBar")), "Position", L0["v"]);
      await $.mset((await $.v(C, "fButtonDownScroll")), "X", L0["v"]);
    }
    L0["v"] = $.add($.sub((await $.mv((await $.v(C, "fButtonDownScroll")), "Y")), L0["y"]), (await $.mv((await $.v(C, "fButtonDown")), "Y")));
    if ($.truthy((await $.and_((await $.and_(($.ge(L0["v"], 0)), async () => ($.ne((await $.mv((await $.v(C, "VertScrollBar")), "Position")), L0["v"])))), async () => ($.lt(L0["v"], (await $.mv((await $.v(C, "VertScrollBar")), "Range")))))))) {
      await $.mset((await $.v(C, "VertScrollBar")), "Position", L0["v"]);
      await $.mset((await $.v(C, "fButtonDownScroll")), "Y", L0["v"]);
    }
    await $.mset((await $.v(C, "fButtonDown")), "X", L0["bx"]);
    return L0.result;
  } else {
    { const $t94 = $.sub((await $.mv((await $.v(C, "fLinks")), "Count")), 1);
      L0["i"] = 0;
      let $t95 = true;
      for (;;) {
        if (!$t95) { L0["i"] = $.succ(L0["i"], 1); }
        $t95 = false;
        if (!($.ord(L0["i"]) <= $.ord($t94))) break;
        {
          const $t96 = (await $.call(C, "TGDIPagereference", [(await $.idx((await $.mv((await $.v(C, "fLinks")), "Objects")), [L0["i"]]))]));
          if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.eq((await $.wv([$t96], "Page", C, false)), (await $.mv(Self, "Page")))), async () => ($.ge((await $.wv([$t96], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t96], "Preview", C, false)), "Left")))))), async () => ($.lt((await $.wv([$t96], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t96], "Preview", C, false)), "Right")))))), async () => ($.ge((await $.wv([$t96], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t96], "Preview", C, false)), "Top")))))), async () => ($.lt((await $.wv([$t96], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t96], "Preview", C, false)), "Bottom")))))))) {
            await $.wset([$t96], "fLinksCurrent", (await $.wv([$t96], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), C);
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t96], "fPreviewSurface", C, false)), "Canvas")), "DrawFocusRect", [(await $.wv([$t96], "Preview", C, false))])));
            break;
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TShiftState", "Integer", "Integer"]});
  U.method("TGDIPages", "CMFontChanged", async function CMFontChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"msg": $.asRef(p0), result: undefined};
  await $.inherited(Self, "TGDIPages", "CMFontChanged", null, arguments);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fCanvas"))])))) {
    await $.stmt((await $.call(C, "UpdateMetafileCanvasFont", [(await $.v(C, "fCanvas"))])));
  }
  await $.set(C, "fLineHeight", 0);
  return L0.result;
}, {"params": ["Msg"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TGDIPages", "WMGetDlgCode", async function WMGetDlgCode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined};
  await $.mset((await L0["message"].get()), "Result", (await $.v(C, "DLGC_WANTARROWS")));
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TWMGetDlgCode"]});
  U.method("TGDIPages", "KeyDown", async function KeyDown(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"key": $.asRef(p0), "shift": $.copyArg(p1), result: undefined, "oldposition": 0, "lh": 0};
  await $.fixArgs(L0, ["shift"]);
  L0["setpageandposition"] = $.fn(async function SetPageAndPosition(p0, p1) {
  const L1 = {"newpage": $.copyArg(p0), "newpos": $.copyArg(p1), result: undefined};
  await $.fixArgs(L1, ["newpage", "newpos"]);
  await $.stmt((await $.call(C, "perform", [(await $.v(C, "WM_SETREDRAW")), 0, 0])));
  await $.set(C, "Page", L1["newpage"]);
  await $.mset((await $.v(C, "VertScrollbar")), "position", L1["newpos"]);
  await $.stmt((await $.call(C, "perform", [(await $.v(C, "WM_SETREDRAW")), 1, 0])));
  await $.stmt($.call(C, "refresh", []));
  return L1.result;
});
  L0["lh"] = (await $.call(C, "PrinterPxToScreenPxY", [(await $.v(C, "GetLineHeight"))]));
  { const $t97 = (await L0["key"].get());
    if ($.eq($t97, (await $.v(C, "VK_DOWN")))) {
      {
        const $t98 = (await $.v(C, "VertScrollbar"));
        await $.wset([$t98], "OldPosition", (await $.wv([$t98], "Position", C, false)), { get: async () => L0["oldposition"], set: async (v) => { L0["oldposition"] = v; }, local: true });
        await $.wset([$t98], "position", $.add((await $.wv([$t98], "position", C, false)), (await $.wv([$t98], "lh", { get: async () => L0["lh"], set: async (v) => { L0["lh"] = v; }, local: true }, false))), C);
        if ($.truthy((await $.and_(($.eq((await $.wv([$t98], "Position", C, false)), (await $.wv([$t98], "OldPosition", { get: async () => L0["oldposition"], set: async (v) => { L0["oldposition"] = v; }, local: true }, false)))), async () => ($.lt((await $.wv([$t98], "Page", C, false)), (await $.wv([$t98], "PageCount", C, false)))))))) {
          await $.stmt((await $.wcall([$t98], "SetPageAndPosition", [$.add((await $.wv([$t98], "Page", C, false)), 1), 0], { get: async () => L0["setpageandposition"], set: async (v) => { L0["setpageandposition"] = v; }, local: true })));
        }
      }
    }
    else if ($.eq($t97, (await $.v(C, "VK_UP")))) {
      {
        const $t99 = (await $.v(C, "VertScrollbar"));
        await $.wset([$t99], "OldPosition", (await $.wv([$t99], "Position", C, false)), { get: async () => L0["oldposition"], set: async (v) => { L0["oldposition"] = v; }, local: true });
        await $.wset([$t99], "position", $.sub((await $.wv([$t99], "position", C, false)), (await $.wv([$t99], "lh", { get: async () => L0["lh"], set: async (v) => { L0["lh"] = v; }, local: true }, false))), C);
        if ($.truthy((await $.and_(($.eq((await $.wv([$t99], "Position", C, false)), (await $.wv([$t99], "OldPosition", { get: async () => L0["oldposition"], set: async (v) => { L0["oldposition"] = v; }, local: true }, false)))), async () => ($.gt((await $.wv([$t99], "Page", C, false)), 1)))))) {
          await $.stmt((await $.wcall([$t99], "SetPageAndPosition", [$.sub((await $.wv([$t99], "Page", C, false)), 1), (await $.wv([$t99], "range", C, false))], { get: async () => L0["setpageandposition"], set: async (v) => { L0["setpageandposition"] = v; }, local: true })));
        }
      }
    }
    else if ($.eq($t97, (await $.v(C, "VK_RIGHT")))) {
      {
        const $t100 = (await $.v(C, "HorzScrollbar"));
        await $.wset([$t100], "position", $.add((await $.wv([$t100], "position", C, false)), (await $.wcall([$t100], "max", [(await $.wv([$t100], "lh", { get: async () => L0["lh"], set: async (v) => { L0["lh"] = v; }, local: true }, false)), 0], C))), C);
      }
    }
    else if ($.eq($t97, (await $.v(C, "VK_LEFT")))) {
      {
        const $t101 = (await $.v(C, "HorzScrollbar"));
        await $.wset([$t101], "position", $.sub((await $.wv([$t101], "position", C, false)), (await $.wcall([$t101], "min", [(await $.wv([$t101], "lh", { get: async () => L0["lh"], set: async (v) => { L0["lh"] = v; }, local: true }, false)), (await $.wv([$t101], "range", C, false))], C))), C);
      }
    }
    else if ($.eq($t97, (await $.v(C, "VK_NEXT")))) {
      {
        const $t102 = (await $.v(C, "VertScrollbar"));
        if ($.truthy((await $.and_(($.eq((await $.wv([$t102], "shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false)), [(await $.wv([$t102], "ssCtrl", C, false))])), async () => ($.lt((await $.wv([$t102], "Page", C, false)), (await $.wv([$t102], "PageCount", C, false)))))))) {
          await $.stmt((await $.wcall([$t102], "SetPageAndPosition", [(await $.wv([$t102], "PageCount", C, false)), 0], { get: async () => L0["setpageandposition"], set: async (v) => { L0["setpageandposition"] = v; }, local: true })));
        } else {
          await $.wset([$t102], "OldPosition", (await $.wv([$t102], "Position", C, false)), { get: async () => L0["oldposition"], set: async (v) => { L0["oldposition"] = v; }, local: true });
          await $.wset([$t102], "position", $.add((await $.wv([$t102], "position", C, false)), (await $.wcall([$t102], "max", [$.sub((await $.wv([$t102], "clientheight", C, false)), (await $.wv([$t102], "lh", { get: async () => L0["lh"], set: async (v) => { L0["lh"] = v; }, local: true }, false))), 0], C))), C);
          if ($.truthy((await $.and_(($.eq((await $.wv([$t102], "Position", C, false)), (await $.wv([$t102], "OldPosition", { get: async () => L0["oldposition"], set: async (v) => { L0["oldposition"] = v; }, local: true }, false)))), async () => ($.lt((await $.wv([$t102], "Page", C, false)), (await $.wv([$t102], "PageCount", C, false)))))))) {
            await $.stmt((await $.wcall([$t102], "SetPageAndPosition", [$.add((await $.wv([$t102], "Page", C, false)), 1), 0], { get: async () => L0["setpageandposition"], set: async (v) => { L0["setpageandposition"] = v; }, local: true })));
          }
        }
      }
    }
    else if ($.eq($t97, (await $.v(C, "VK_PRIOR")))) {
      {
        const $t103 = (await $.v(C, "VertScrollbar"));
        if ($.truthy((await $.and_(($.eq((await $.wv([$t103], "shift", { get: async () => L0["shift"], set: async (v) => { L0["shift"] = v; }, local: true }, false)), [(await $.wv([$t103], "ssCtrl", C, false))])), async () => ($.gt((await $.wv([$t103], "Page", C, false)), 1)))))) {
          await $.stmt((await $.wcall([$t103], "SetPageAndPosition", [1, 0], { get: async () => L0["setpageandposition"], set: async (v) => { L0["setpageandposition"] = v; }, local: true })));
        } else {
          await $.wset([$t103], "OldPosition", (await $.wv([$t103], "Position", C, false)), { get: async () => L0["oldposition"], set: async (v) => { L0["oldposition"] = v; }, local: true });
          await $.wset([$t103], "position", $.sub((await $.wv([$t103], "position", C, false)), (await $.wcall([$t103], "max", [$.sub((await $.wv([$t103], "clientheight", C, false)), (await $.wv([$t103], "lh", { get: async () => L0["lh"], set: async (v) => { L0["lh"] = v; }, local: true }, false))), 0], C))), C);
          if ($.truthy((await $.and_(($.eq((await $.wv([$t103], "Position", C, false)), (await $.wv([$t103], "OldPosition", { get: async () => L0["oldposition"], set: async (v) => { L0["oldposition"] = v; }, local: true }, false)))), async () => ($.gt((await $.wv([$t103], "Page", C, false)), 1)))))) {
            await $.stmt((await $.wcall([$t103], "SetPageAndPosition", [$.sub((await $.wv([$t103], "Page", C, false)), 1), (await $.wv([$t103], "range", C, false))], { get: async () => L0["setpageandposition"], set: async (v) => { L0["setpageandposition"] = v; }, local: true })));
          }
        }
      }
    }
    else if ($.eq($t97, (await $.v(C, "VK_ADD"))) || $.eq($t97, (await $.v(C, "VK_SUBTRACT"))) || $.eq($t97, 187) || $.eq($t97, 189)) {
      if ($.truthy($.in_((await $.v(C, "ssCtrl")), L0["shift"]))) {
        await $.set(C, "fZoomIn", $.in_((await L0["key"].get()), [(await $.v(C, "VK_ADD")), 187]));
        await $.stmt((await $.call(C, "ZoomTimer", [null])));
      }
    }
    else if ($.eq($t97, (await $.v(C, "VK_ESCAPE")))) {
      if ($.truthy($.ne((await $.v(C, "PreviewForm")), null))) {
        await $.mcall((await $.v(C, "PreviewForm")), "Close", []);
      }
    }
  }
  await $.inherited(Self, "TGDIPages", "KeyDown", null, arguments);
  return L0.result;
}, {"params": ["Key", "Shift"], "kind": "procedure", "ptypes": ["Word", "TShiftState"]});
  U.method("TGDIPages", "CreateWnd", async function CreateWnd(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TGDIPages", "CreateWnd", null, arguments);
  { const $t104 = (await $.v(C, "ZoomStatus"));
    if ($.eq($t104, (await $.v(C, "zsPercent")))) {
      await $.stmt($.call(C, "ResizeAndCenterPaintbox", []));
    }
    else if ($.eq($t104, (await $.v(C, "zsPageWidth")))) {
      await $.set(C, "zoom", (await $.v(C, "PAGE_WIDTH")));
    }
    else {
      await $.set(C, "zoom", (await $.v(C, "PAGE_FIT")));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "Resize", async function Resize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  { const $t105 = (await $.v(C, "ZoomStatus"));
    if ($.eq($t105, (await $.v(C, "zsPercent")))) {
      await $.stmt($.call(C, "ResizeAndCenterPaintbox", []));
    }
    else if ($.eq($t105, (await $.v(C, "zsPageWidth")))) {
      await $.set(C, "zoom", (await $.v(C, "PAGE_WIDTH")));
    }
    else {
      await $.set(C, "zoom", (await $.v(C, "PAGE_FIT")));
    }
  }
  await $.inherited(Self, "TGDIPages", "Resize", null, arguments);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "MouseDown", async function MouseDown(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"button": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["button", "shift", "x", "y"]);
  if ($.truthy($.eq(L0["button"], (await $.v(C, "mbLeft"))))) {
    if ($.truthy($.ne((await $.v(C, "PopupMenu")), null))) {
      {
        const $t106 = (await $.v(C, "fPreviewSurface"));
        if ($.truthy((await $.or_(($.lt((await $.wv([$t106], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.wv([$t106], "Left", C, false)))), async () => ($.gt((await $.wv([$t106], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), $.add((await $.wv([$t106], "Left", C, false)), (await $.wv([$t106], "Width", C, false))))))))) {
          {
            const $t107 = (await $.mcall(Self, "ClientToScreen", [(await $.wcall([$t106], "Point", [(await $.wv([$t106], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.wv([$t106], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], C))]));
            await $.stmt((await $.mcall((await $.mv(Self, "PopupMenu")), "Popup", [(await $.wv([$t106, $t107], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.wv([$t106, $t107], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))])));
          }
        }
      }
    }
  }
  if ($.truthy((await $.and_((await $.v(C, "canfocus")), async () => $.not((await $.v(C, "focused"))))))) {
    await $.stmt($.call(C, "Setfocus", []));
  }
  await $.inherited(Self, "TGDIPages", "MouseDown", null, arguments);
  return L0.result;
}, {"params": ["Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TGDIPages", "MouseUp", async function MouseUp(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"button": $.copyArg(p0), "shift": $.copyArg(p1), "x": $.copyArg(p2), "y": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["button", "shift", "x", "y"]);
  await $.mset((await $.v(C, "fButtonDown")), "X", (-(1)));
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  await $.inherited(Self, "TGDIPages", "MouseUp", null, arguments);
  return L0.result;
}, {"params": ["Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TGDIPages", "DoMouseWheel", async function DoMouseWheel(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"shift": $.copyArg(p0), "wheeldelta": $.copyArg(p1), "mousepos": $.copyArg(p2), result: false, "key": 0};
  await $.fixArgs(L0, ["shift", "wheeldelta", "mousepos"]);
  if ($.truthy($.eq(L0["shift"], []))) {
    if ($.truthy($.lt(L0["wheeldelta"], 0))) {
      L0["key"] = (await $.v(C, "VK_DOWN"));
    } else {
      L0["key"] = (await $.v(C, "VK_UP"));
    }
    await $.stmt((await $.call(C, "KeyDown", [$.ref(async () => L0["key"], async ($t108) => { L0["key"] = $t108; }), []])));
  } else {
    if ($.truthy($.eq(L0["shift"], [(await $.v(C, "ssCtrl"))]))) {
      await $.stmt((await $.call(C, "ZoomTimerInternal", [(await $.mv((await $.v(C, "fMousePos")), "X")), (await $.mv((await $.v(C, "fMousePos")), "Y")), ($.gt(L0["wheeldelta"], 0))])));
    }
  }
  L0["result"] = true;
  return L0.result;
}, {"params": ["Shift", "WheelDelta", "MousePos"], "kind": "function", "ptypes": ["TShiftState", "Integer", "TPoint"]});
  U.method("TGDIPages", "Create", async function Create() { return $.notPorted("TGDIPages.Create", "cannot assign to call"); }, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"], "error": "cannot assign to call", "src": "constructor TGDIPages.Create(AOwner: TComponent);\n \n\n\n \nbegin\n  inherited Create(AOwner);\n  SetLength(fTab,MAXTABS);\n    \n  ForceInternalAntiAliased := true; \n   \n  PopupMenuClass := TPopupMenu;\n  \n  Height := 150;\n  width := 200;\n  ControlStyle := ControlStyle - [csAcceptsControls];\n  if (AOWner<>nil) and AOWner.InheritsFrom(TCustomForm) then\n    Color := TCustomForm(AOwner).Color else\n    Color := clLtGray;\n  HorzScrollBar.Tracking := True;\n  VertScrollBar.Tracking := True;\n  tabstop := true;\n\n  Font.Name := 'Tahoma';\n  Font.Size := 12;\n  fLineSpacing := lsSingle;\n  fOrientation := poPortrait;\n  fUseOutlines := true;\n\n  fHeaderLines := TObjectList.Create;\n  fFooterLines := TObjectList.Create;\n\n \n\n\n\n\n \n  fButtonDown.X := -1; \n \n  Int64(fCustomPxPerInch) := -1;\n  Int64(fCustomPageSize) := -1;\n  Int64(fCustomNonPrintableOffset) := -1;\n  Int64(fCustomPageMargins.TopLeft) := -1;\n\n  fHasPrinterInstalled := not (csDesigning in componentState)\n    and PrinterDriverExists;\n \n\n\n\n\n\n\n\n\n\n\n\n\n \n  fExportPDFUseFontFallBack := true;\n  fExportPDFEncryptionPermissions := PDF_PERMISSION_ALL;\n  fExportPDFEncryptionOwnerPassword := 'SynopsePDFEngine'+SYNOPSE_FRAMEWORK_VERSION;\n \n  GetPrinterParams; \n  fCanvas := nil;\n  fPreviewSurface := TPagePaintbox.Create(Self);\n  fPreviewSurface.parent := Self;\n  fPreviewSurface.OnPaint := PreviewPaint;\n  fPreviewSurface.OnMouseDown := PreviewMouseDown;\n  fPreviewSurface.OnMouseUp := PreviewMouseUp;\n  fPreviewSurface.OnMouseMove := PreviewMouseMove;\n  fZoomStatus := zsPercent;\n  fZoom := 100;\n  fBookmarks := TStringList.Create;\n  fLinks := TStringList.Create;\n  fOutline := TStringList.Create;\n  fForcedLeftOffset := -1;\nend;"});
  U.method("TGDIPages", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "Clear", []));
  await $.mcall((await $.v(C, "fHeaderLines")), "free", []);
  await $.mcall((await $.v(C, "fFooterLines")), "free", []);
  await $.mcall((await $.v(C, "fPreviewSurface")), "free", []);
  await $.mcall((await $.v(C, "PreviewSurfaceBitmap")), "Free", []);
  await $.mcall((await $.v(C, "fOutline")), "Free", []);
  await $.mcall((await $.v(C, "fLinks")), "Free", []);
  await $.mcall((await $.v(C, "fBookmarks")), "Free", []);
  await $.mcall((await $.v(C, "fMetaFileForPage")), "Free", []);
  await $.mcall((await $.v(C, "fCurrentMetaFile")), "Free", []);
  await $.inherited(Self, "TGDIPages", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TGDIPages", "Invalidate", async function Invalidate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "PreviewSurfaceBitmap")), async ($t110) => { await $.set(C, "PreviewSurfaceBitmap", $t110); })])));
  await $.inherited(Self, "TGDIPages", "Invalidate", null, arguments);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "BeginDoc", async function BeginDoc(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "Clear", []));
  await $.stmt($.call(C, "GetPrinterParams", []));
  await $.set(C, "fHangIndent", 0);
  await $.set(C, "fAlign", (await $.v(C, "taLeft")));
  await $.stmt((await $.call(C, "SetPageMargins", [(await $.call(C, "Rect", [10, 10, 10, 10]))])));
  await $.set(C, "fVirtualPageNum", 0);
  await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
  await $.stmt($.call(C, "NewPageInternal", []));
  { const $t111 = (await $.v(C, "ZoomStatus"));
    if ($.eq($t111, (await $.v(C, "zsPercent")))) {
      await $.set(C, "zoom", (await $.v(C, "fzoom")));
    }
    else if ($.eq($t111, (await $.v(C, "zsPageWidth")))) {
      await $.set(C, "zoom", (await $.v(C, "PAGE_WIDTH")));
    }
    else {
      await $.set(C, "zoom", (await $.v(C, "PAGE_FIT")));
    }
  }
  await $.mset((await $.v(C, "fButtonDown")), "X", (-(1)));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "DrawText", async function DrawText(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "withnewline": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["s", "withnewline"]);
  await $.stmt((await $.call(C, "DrawTextW", [(await $.call(C, "StringToSynUnicode", [L0["s"]])), L0["withnewline"]])));
  return L0.result;
}, {"params": ["s", "withNewLine"], "kind": "procedure", "ptypes": ["String", "boolean"]});
  U.method("TGDIPages", "DrawTextW", async function DrawTextW(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "withnewline": $.copyArg(p1), result: undefined, "p": null, "start": null, "tmpstr": null};
  await $.fixArgs(L0, ["s", "withnewline"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckYPos", []));
  if ($.truthy($.eq(L0["s"], ""))) {
    if ($.truthy(L0["withnewline"])) {
      await $.stmt($.call(C, "NewLine", []));
    }
  } else {
    L0["p"] = (await $.call(C, "pointer", [L0["s"]]));
    while ($.truthy($.ne(L0["p"], "\u0000"))) {
      L0["start"] = L0["p"];
      while ($.truthy($.not(($.in_((await $.call(C, "ord", [L0["p"]])), [0, 10, 13]))))) {
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["p"], async ($t112) => { L0["p"] = $t112; })])));
        await $.tick();
      }
      await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["tmpstr"], async ($t113) => { L0["tmpstr"] = $t113; }), L0["start"], $.sub(L0["p"], L0["start"])])));
      if ($.truthy($.not((await $.v(C, "fInHeaderOrFooter"))))) {
        await $.set(C, "fCanvasText", $.add($.add((await $.v(C, "fCanvasText")), (await $.call(C, "SynUnicodeToString", [L0["tmpstr"]]))), "\r\n"));
      }
      await $.stmt((await $.call(C, "PrintFormattedLine", [L0["tmpstr"], (await $.v(C, "FORMAT_DEFAULT")), "", "", L0["withnewline"]])));
      if ($.truthy($.eq(L0["p"], "\r"))) {
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["p"], async ($t114) => { L0["p"] = $t114; })])));
      }
      if ($.truthy($.eq(L0["p"], "\n"))) {
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["p"], async ($t115) => { L0["p"] = $t115; })])));
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["s", "withNewLine"], "kind": "procedure", "ptypes": ["SynUnicode", "boolean"]});
  U.method("TGDIPages", "DrawTextU", async function DrawTextU(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "withnewline": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["s", "withnewline"]);
  await $.stmt((await $.call(C, "DrawTextW", [(await $.call(C, "UTF8ToSynUnicode", [L0["s"]])), L0["withnewline"]])));
  return L0.result;
}, {"params": ["s", "withNewLine"], "kind": "procedure", "ptypes": ["RawUTF8", "boolean"]});
  U.method("TGDIPages", "DrawTitle", async function DrawTitle(Self, p0, p1, p2, p3, p4, p5) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "drawbottomline": $.copyArg(p1), "outlinelevel": $.copyArg(p2), "abookmark": $.copyArg(p3), "alink": $.copyArg(p4), "alinknoborder": $.copyArg(p5), result: undefined, "h": 0, "str": ''};
  await $.fixArgs(L0, ["s", "drawbottomline", "outlinelevel", "abookmark", "alink", "alinknoborder"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckYPos", []));
  await $.stmt($.call(C, "SaveLayout", []));
  try {
    L0["str"] = (await $.call(C, "SynUnicodeToString", [L0["s"]]));
    if ($.truthy($.not((await $.v(C, "fInHeaderOrFooter"))))) {
      await $.set(C, "fCanvasText", $.add($.add((await $.v(C, "fCanvasText")), L0["str"]), "\r\n"));
    }
    await $.stmt((await $.call(C, "PrintFormattedLine", [L0["s"], (await $.v(C, "TitleFlags")), L0["abookmark"], L0["alink"], true, L0["alinknoborder"]])));
    if ($.truthy((await $.v(C, "UseOutlines")))) {
      await $.stmt((await $.call(C, "AddOutline", [L0["str"], L0["outlinelevel"], (await $.v(C, "fCurrentTextTop")), (await $.v(C, "fCurrentTextPage"))])));
    }
    if ($.truthy(L0["drawbottomline"])) {
      L0["h"] = $.shr(($.mul((await $.v(C, "GetLineHeight")), 15)), 5);
      await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t116) => { await $.set(C, "fCurrentYPos", $t116); }), L0["h"]])));
      await $.stmt((await $.call(C, "LineInternal", [(await $.mv((await $.v(C, "fPageMarginsPx")), "left")), $.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), (await $.mv((await $.v(C, "fPageMarginsPx")), "right"))), false])));
      await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t117) => { await $.set(C, "fCurrentYPos", $t117); }), $.mul(L0["h"], 2)])));
    }
  } finally {
    await $.stmt($.call(C, "RestoreSavedLayout", []));
  }
  return L0.result;
}, {"params": ["s", "DrawBottomLine", "OutlineLevel", "aBookmark", "aLink", "aLinkNoBorder"], "kind": "procedure", "ptypes": ["SynUnicode", "boolean", "Integer", "String", "String", "boolean"]});
  U.method("TGDIPages", "DrawTextAt", async function DrawTextAt(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "xpos": $.copyArg(p1), "alink": $.copyArg(p2), "checkpagenumber": $.copyArg(p3), "alinknoborder": $.copyArg(p4), result: undefined, "i": 0, "r": null, "size": null};
  await $.fixArgs(L0, ["s", "xpos", "alink", "checkpagenumber", "alinknoborder"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq(L0["s"], "")))))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckYPos", []));
  if ($.truthy(L0["checkpagenumber"])) {
    L0["i"] = (await $.call(C, "pos", [(await $.v(C, "PAGENUMBER")), (await $.call(C, "LowerCaseU", [L0["s"]]))]));
    if ($.truthy($.gt(L0["i"], 0))) {
      await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["s"], async ($t118) => { L0["s"] = $t118; }), L0["i"], 14])));
      await $.stmt((await $.call(C, "Insert", [(await $.call(C, "UTF8ToSynUnicode", [(await $.call(C, "Int32ToUtf8", [(await $.v(C, "fVirtualPageNum"))]))])), $.ref(async () => L0["s"], async ($t119) => { L0["s"] = $t119; }), L0["i"]])));
    }
  }
  await $.stmt((await $.call(C, "SetBkMode", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), (await $.v(C, "TRANSPARENT"))])));
  L0["size"] = (await $.call(C, "TextExtent", [(await $.v(C, "fCanvas")), L0["s"]]));
  await $.mset(L0["r"], "Left", (await $.call(C, "MmToPrinterPxX", [L0["xpos"]])));
  { const $t120 = (await $.v(C, "falign"));
    if ($.eq($t120, (await $.v(C, "taRight")))) {
      await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["r"], "Left")), async ($t121) => { await $.mset(L0["r"], "Left", $t121); }), $.add((await $.mv(L0["size"], "cx")), 1)])));
    }
    else if ($.eq($t120, (await $.v(C, "taCenter")))) {
      await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["r"], "Left")), async ($t122) => { await $.mset(L0["r"], "Left", $t122); }), $.add($.shr((await $.mv(L0["size"], "cx")), 1), 1)])));
    }
  }
  await $.mset(L0["r"], "Top", (await $.v(C, "fCurrentYPos")));
  await $.stmt((await $.call(C, "TextOut", [(await $.v(C, "fCanvas")), (await $.mv(L0["r"], "Left")), (await $.mv(L0["r"], "Top")), L0["s"]])));
  if ($.truthy($.not((await $.v(C, "fInHeaderOrFooter"))))) {
    await $.set(C, "fCanvasText", $.add($.add((await $.v(C, "fCanvasText")), (await $.call(C, "SynUnicodeToString", [L0["s"]]))), "\r\n"));
  }
  if ($.truthy($.ne(L0["alink"], ""))) {
    await $.mset(L0["r"], "Right", $.add((await $.mv(L0["r"], "Left")), (await $.mv(L0["size"], "cx"))));
    await $.mset(L0["r"], "Bottom", $.add((await $.mv(L0["r"], "Top")), (await $.mv(L0["size"], "cy"))));
    await $.stmt((await $.call(C, "AddLink", [L0["alink"], (await $.call(C, "PrinterToMM", [L0["r"]])), 0, L0["alinknoborder"]])));
  }
  return L0.result;
}, {"params": ["s", "XPos", "aLink", "CheckPageNumber", "aLinkNoBorder"], "kind": "procedure", "ptypes": ["SynUnicode", "integer", "String", "boolean", "boolean"]});
  U.method("TGDIPages", "DrawAngledTextAt", async function DrawAngledTextAt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "xpos": $.copyArg(p1), "angle": $.copyArg(p2), result: undefined, "lf": null, "oldfonthdl": null, "newfonthdl": null};
  await $.fixArgs(L0, ["s", "xpos", "angle"]);
  if ($.truthy((await $.or_(($.eq(L0["s"], "")), async () => ($.eq(Self, null)))))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckYPos", []));
  L0["xpos"] = (await $.call(C, "MmToPrinterPxX", [L0["xpos"]]));
  await $.stmt((await $.call(C, "SetBkMode", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), (await $.v(C, "TRANSPARENT"))])));
  {
    const $t123 = (await $.v(C, "fCanvas"));
    if ($.truthy($.eq((await $.wcall([$t123], "GetObject", [(await $.mv((await $.wv([$t123], "Font", C, false)), "Handle")), (await $.wcall([$t123], "SizeOf", [(await $.wv([$t123], "lf", { get: async () => L0["lf"], set: async (v) => { L0["lf"] = v; }, local: true }, false))], C)), (await $.wv([$t123], "lf", { get: async () => L0["lf"], set: async (v) => { L0["lf"] = v; }, local: true }, true))], C)), 0))) {
      return L0.result;
    }
    await $.mset((await $.wv([$t123], "lf", { get: async () => L0["lf"], set: async (v) => { L0["lf"] = v; }, local: true }, false)), "lfEscapement", $.mul((await $.wv([$t123], "Angle", { get: async () => L0["angle"], set: async (v) => { L0["angle"] = v; }, local: true }, false)), 10));
    await $.mset((await $.wv([$t123], "lf", { get: async () => L0["lf"], set: async (v) => { L0["lf"] = v; }, local: true }, false)), "lfOrientation", $.mul((await $.wv([$t123], "Angle", { get: async () => L0["angle"], set: async (v) => { L0["angle"] = v; }, local: true }, false)), 10));
    await $.mset((await $.wv([$t123], "lf", { get: async () => L0["lf"], set: async (v) => { L0["lf"] = v; }, local: true }, false)), "lfOutPrecision", (await $.wv([$t123], "OUT_TT_ONLY_PRECIS", C, false)));
    await $.wset([$t123], "NewFontHdl", (await $.wcall([$t123], "CreateFontIndirect", [(await $.wv([$t123], "lf", { get: async () => L0["lf"], set: async (v) => { L0["lf"] = v; }, local: true }, false))], C)), { get: async () => L0["newfonthdl"], set: async (v) => { L0["newfonthdl"] = v; }, local: true });
    await $.wset([$t123], "OldFontHdl", (await $.wcall([$t123], "selectObject", [(await $.wv([$t123], "handle", C, false)), (await $.wv([$t123], "NewFontHdl", { get: async () => L0["newfonthdl"], set: async (v) => { L0["newfonthdl"] = v; }, local: true }, false))], C)), { get: async () => L0["oldfonthdl"], set: async (v) => { L0["oldfonthdl"] = v; }, local: true });
  }
  await $.stmt((await $.call(C, "TextOut", [(await $.v(C, "fCanvas")), L0["xpos"], (await $.v(C, "fCurrentYPos")), L0["s"]])));
  await $.stmt((await $.call(C, "selectObject", [(await $.mv((await $.v(C, "fCanvas")), "handle")), L0["oldfonthdl"]])));
  await $.stmt((await $.call(C, "DeleteObject", [L0["newfonthdl"]])));
  if ($.truthy($.not((await $.v(C, "fInHeaderOrFooter"))))) {
    await $.set(C, "fCanvasText", $.add($.add((await $.v(C, "fCanvasText")), L0["s"]), "\r\n"));
  }
  return L0.result;
}, {"params": ["s", "XPos", "Angle"], "kind": "procedure", "ptypes": ["SynUnicode", "integer", "integer"]});
  U.method("TGDIPages", "MmToPrinter", async function MmToPrinter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"r": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["r"]);
  if ($.truthy($.eq(Self, null))) {
    await $.stmt((await $.call(C, "FillChar", [$.ref(async () => L0["result"], async ($t124) => { L0["result"] = $t124; }), (await $.call(C, "sizeof", [L0["result"]])), 0])));
    return L0.result;
  }
  await $.mset(L0["result"], "left", (await $.call(C, "MmToPrinterPxX", [(await $.mv(L0["r"], "left"))])));
  await $.mset(L0["result"], "top", (await $.call(C, "MmToPrinterPxY", [(await $.mv(L0["r"], "top"))])));
  await $.mset(L0["result"], "right", (await $.call(C, "MmToPrinterPxX", [(await $.mv(L0["r"], "right"))])));
  await $.mset(L0["result"], "bottom", (await $.call(C, "MmToPrinterPxY", [(await $.mv(L0["r"], "bottom"))])));
  return L0.result;
}, {"params": ["R"], "kind": "function", "ptypes": ["TRect"]});
  U.method("TGDIPages", "PrinterToMM", async function PrinterToMM(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"r": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["r"]);
  if ($.truthy($.eq(Self, null))) {
    await $.stmt((await $.call(C, "FillChar", [$.ref(async () => L0["result"], async ($t125) => { L0["result"] = $t125; }), (await $.call(C, "sizeof", [L0["result"]])), 0])));
    return L0.result;
  }
  await $.mset(L0["result"], "left", (await $.call(C, "PrinterPxToMmX", [(await $.mv(L0["r"], "left"))])));
  await $.mset(L0["result"], "top", (await $.call(C, "PrinterPxToMmY", [(await $.mv(L0["r"], "top"))])));
  await $.mset(L0["result"], "right", (await $.call(C, "PrinterPxToMmX", [(await $.mv(L0["r"], "right"))])));
  await $.mset(L0["result"], "bottom", (await $.call(C, "PrinterPxToMmY", [(await $.mv(L0["r"], "bottom"))])));
  return L0.result;
}, {"params": ["R"], "kind": "function", "ptypes": ["TRect"]});
  U.method("TGDIPages", "DrawBox", async function DrawBox(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"left": $.copyArg(p0), "top": $.copyArg(p1), "right": $.copyArg(p2), "bottom": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["left", "top", "right", "bottom"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  L0["left"] = (await $.call(C, "MmToPrinterPxX", [L0["left"]]));
  L0["top"] = (await $.call(C, "MmToPrinterPxY", [L0["top"]]));
  L0["right"] = (await $.call(C, "MmToPrinterPxX", [L0["right"]]));
  L0["bottom"] = (await $.call(C, "MmToPrinterPxY", [L0["bottom"]]));
  {
    const $t126 = (await $.v(C, "fCanvas"));
    await $.mset((await $.wv([$t126], "Pen", C, false)), "Width", (await $.wcall([$t126], "MulDiv", [(await $.wv([$t126], "fDefaultLineWidth", C, false)), (await $.mv((await $.mv(Self, "Font")), "Size")), 8], C)));
    if ($.truthy($.in_((await $.wv([$t126], "fsBold", C, false)), (await $.mv((await $.mv(Self, "Font")), "style"))))) {
      await $.mset((await $.wv([$t126], "Pen", C, false)), "Width", $.add((await $.mv((await $.wv([$t126], "Pen", C, false)), "Width")), 1));
    }
    await $.stmt((await $.wcall([$t126], "MoveTo", [(await $.wv([$t126], "left", { get: async () => L0["left"], set: async (v) => { L0["left"] = v; }, local: true }, false)), (await $.wv([$t126], "top", { get: async () => L0["top"], set: async (v) => { L0["top"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t126], "LineTo", [(await $.wv([$t126], "right", { get: async () => L0["right"], set: async (v) => { L0["right"] = v; }, local: true }, false)), (await $.wv([$t126], "top", { get: async () => L0["top"], set: async (v) => { L0["top"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t126], "LineTo", [(await $.wv([$t126], "right", { get: async () => L0["right"], set: async (v) => { L0["right"] = v; }, local: true }, false)), (await $.wv([$t126], "bottom", { get: async () => L0["bottom"], set: async (v) => { L0["bottom"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t126], "LineTo", [(await $.wv([$t126], "left", { get: async () => L0["left"], set: async (v) => { L0["left"] = v; }, local: true }, false)), (await $.wv([$t126], "bottom", { get: async () => L0["bottom"], set: async (v) => { L0["bottom"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t126], "LineTo", [(await $.wv([$t126], "left", { get: async () => L0["left"], set: async (v) => { L0["left"] = v; }, local: true }, false)), (await $.wv([$t126], "top", { get: async () => L0["top"], set: async (v) => { L0["top"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["left", "top", "right", "bottom"], "kind": "procedure", "ptypes": ["integer", "integer", "integer", "integer"]});
  U.method("TGDIPages", "DrawBoxFilled", async function DrawBoxFilled(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"left": $.copyArg(p0), "top": $.copyArg(p1), "right": $.copyArg(p2), "bottom": $.copyArg(p3), "color": $.copyArg(p4), result: undefined, "savedbrushcolor": 0};
  await $.fixArgs(L0, ["left", "top", "right", "bottom", "color"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  L0["left"] = (await $.call(C, "MmToPrinterPxX", [L0["left"]]));
  L0["top"] = (await $.call(C, "MmToPrinterPxY", [L0["top"]]));
  L0["right"] = (await $.call(C, "MmToPrinterPxX", [L0["right"]]));
  L0["bottom"] = (await $.call(C, "MmToPrinterPxY", [L0["bottom"]]));
  {
    const $t127 = (await $.v(C, "fCanvas"));
    await $.mset((await $.wv([$t127], "Pen", C, false)), "Width", (await $.wcall([$t127], "MulDiv", [(await $.wv([$t127], "fDefaultLineWidth", C, false)), (await $.mv((await $.mv(Self, "Font")), "Size")), 8], C)));
    if ($.truthy($.in_((await $.wv([$t127], "fsBold", C, false)), (await $.mv((await $.mv(Self, "Font")), "style"))))) {
      await $.mset((await $.wv([$t127], "Pen", C, false)), "Width", $.add((await $.mv((await $.wv([$t127], "Pen", C, false)), "Width")), 1));
    }
    await $.wset([$t127], "SavedBrushColor", (await $.mv((await $.wv([$t127], "Brush", C, false)), "Color")), { get: async () => L0["savedbrushcolor"], set: async (v) => { L0["savedbrushcolor"] = v; }, local: true });
    await $.mset((await $.wv([$t127], "brush", C, false)), "Color", (await $.wv([$t127], "Color", { get: async () => L0["color"], set: async (v) => { L0["color"] = v; }, local: true }, false)));
    await $.stmt((await $.wcall([$t127], "rectangle", [(await $.wv([$t127], "left", { get: async () => L0["left"], set: async (v) => { L0["left"] = v; }, local: true }, false)), (await $.wv([$t127], "top", { get: async () => L0["top"], set: async (v) => { L0["top"] = v; }, local: true }, false)), (await $.wv([$t127], "right", { get: async () => L0["right"], set: async (v) => { L0["right"] = v; }, local: true }, false)), (await $.wv([$t127], "bottom", { get: async () => L0["bottom"], set: async (v) => { L0["bottom"] = v; }, local: true }, false))], C)));
    await $.mset((await $.wv([$t127], "Brush", C, false)), "Color", (await $.wv([$t127], "SavedBrushColor", { get: async () => L0["savedbrushcolor"], set: async (v) => { L0["savedbrushcolor"] = v; }, local: true }, false)));
  }
  return L0.result;
}, {"params": ["left", "top", "right", "bottom", "Color"], "kind": "procedure", "ptypes": ["integer", "integer", "integer", "integer", "TColor"]});
  U.method("TGDIPages", "DrawBMP", async function DrawBMP(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"rec": $.copyArg(p0), "bmp": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["rec", "bmp"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  await $.stmt((await $.call(C, "PrintBitmap", [(await $.v(C, "fCanvas")), (await $.call(C, "MmToPrinter", [L0["rec"]])), L0["bmp"]])));
  return L0.result;
}, {"params": ["rec", "bmp"], "kind": "procedure", "ptypes": ["TRect", "TBitmap"]});
  U.method("TGDIPages", "DrawBMP", async function DrawBMP(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"bmp": $.copyArg(p0), "bleft": $.copyArg(p1), "bwidth": $.copyArg(p2), "legend": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["bmp", "bleft", "bwidth", "legend"]);
  await $.stmt((await $.call(C, "DrawGraphic", [L0["bmp"], L0["bleft"], L0["bwidth"], L0["legend"]])));
  return L0.result;
}, {"params": ["bmp", "bLeft", "bWidth", "Legend"], "kind": "procedure", "ptypes": ["TBitmap", "integer", "integer", "String"]});
  U.method("TGDIPages", "DrawGraphic", async function DrawGraphic(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"graph": $.copyArg(p0), "bleft": $.copyArg(p1), "bwidth": $.copyArg(p2), "legend": $.copyArg(p3), result: undefined, "r": null, "h": 0};
  await $.fixArgs(L0, ["graph", "bleft", "bwidth", "legend"]);
  if ($.truthy((await $.or_((await $.or_(($.eq(Self, null)), async () => ($.eq(L0["graph"], null)))), async () => (await $.mv(L0["graph"], "Empty")))))) {
    return L0.result;
  }
  if ($.truthy($.eq(L0["bleft"], (await $.v(C, "maxInt"))))) {
    L0["bleft"] = (await $.call(C, "PrinterPxToMmX", [$.add((await $.mv((await $.v(C, "fPageMarginsPx")), "Left")), $.shr(($.sub($.sub($.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), (await $.mv((await $.v(C, "fPageMarginsPx")), "Right"))), (await $.mv((await $.v(C, "fPageMarginsPx")), "Left"))), (await $.call(C, "MmToPrinterPxX", [L0["bwidth"]])))), 1))]));
  } else {
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["bleft"], async ($t128) => { L0["bleft"] = $t128; }), (await $.v(C, "LeftMargin"))])));
  }
  await $.mset(L0["r"], "Left", L0["bleft"]);
  await $.mset(L0["r"], "Right", $.add(L0["bleft"], L0["bwidth"]));
  await $.mset(L0["r"], "Bottom", $.idiv(($.mul((await $.mv(L0["graph"], "Height")), L0["bwidth"])), (await $.mv(L0["graph"], "Width"))));
  if ($.truthy($.ne(L0["legend"], ""))) {
    L0["h"] = (await $.v(C, "LineHeight"));
  } else {
    L0["h"] = 0;
  }
  if ($.truthy($.not((await $.call(C, "HasSpaceFor", [$.add((await $.mv(L0["r"], "Bottom")), L0["h"])]))))) {
    await $.stmt($.call(C, "NewPage", []));
    await $.stmt($.call(C, "DoHeader", []));
    await $.stmt($.call(C, "NewHalfLine", []));
  }
  await $.mset(L0["r"], "Top", (await $.v(C, "CurrentYPos")));
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.mv(L0["r"], "Bottom")), async ($t129) => { await $.mset(L0["r"], "Bottom", $t129); }), (await $.mv(L0["r"], "Top"))])));
  if ($.truthy((await $.mcall(L0["graph"], "InheritsFrom", [(await $.v(C, "TBitmap"))])))) {
    await $.stmt((await $.call(C, "DrawBMP", [L0["r"], L0["graph"]])));
  } else {
    if ($.truthy((await $.mcall(L0["graph"], "InheritsFrom", [(await $.v(C, "TMetaFile"))])))) {
      await $.stmt((await $.call(C, "DrawMeta", [L0["r"], L0["graph"]])));
    }
  }
  await $.set(C, "CurrentYPos", (await $.mv(L0["r"], "Bottom")));
  if ($.truthy($.ne(L0["legend"], ""))) {
    await $.stmt($.call(C, "SaveLayout", []));
    await $.set(C, "TextAlign", (await $.v(C, "taCenter")));
    await $.mset((await $.v(C, "Font")), "Style", []);
    await $.mset((await $.v(C, "Font")), "Size", $.shr(($.mul((await $.mv((await $.v(C, "Font")), "Size")), 3)), 2));
    await $.stmt((await $.call(C, "DrawTextW", [L0["legend"]])));
    await $.stmt($.call(C, "RestoreSavedLayout", []));
  } else {
    await $.stmt($.call(C, "NewHalfLine", []));
  }
  return L0.result;
}, {"params": ["graph", "bLeft", "bWidth", "Legend"], "kind": "procedure", "ptypes": ["TGraphic", "integer", "integer", "SynUnicode"]});
  U.method("TGDIPages", "DrawMeta", async function DrawMeta(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"rec": $.copyArg(p0), "meta": $.copyArg(p1), result: undefined, "old": 0};
  await $.fixArgs(L0, ["rec", "meta"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  L0["rec"] = (await $.call(C, "MmToPrinter", [L0["rec"]]));
  L0["old"] = (await $.call(C, "SaveDC", [(await $.mv((await $.v(C, "fCanvas")), "Handle"))]));
  await $.stmt((await $.call(C, "PlayEnhMetaFile", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), (await $.mv(L0["meta"], "Handle")), L0["rec"]])));
  await $.stmt((await $.call(C, "RestoreDC", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), L0["old"]])));
  return L0.result;
}, {"params": ["rec", "meta"], "kind": "procedure", "ptypes": ["TRect", "TMetafile"]});
  U.method("TGDIPages", "DrawArrow", async function DrawArrow(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"point1": $.copyArg(p0), "point2": $.copyArg(p1), "headsize": $.copyArg(p2), "solidhead": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["point1", "point2", "headsize", "solidhead"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  await $.mset(L0["point1"], "X", (await $.call(C, "MmToPrinterPxX", [(await $.mv(L0["point1"], "X"))])));
  await $.mset(L0["point1"], "Y", (await $.call(C, "MmToPrinterPxY", [(await $.mv(L0["point1"], "Y"))])));
  await $.mset(L0["point2"], "X", (await $.call(C, "MmToPrinterPxX", [(await $.mv(L0["point2"], "X"))])));
  await $.mset(L0["point2"], "Y", (await $.call(C, "MmToPrinterPxY", [(await $.mv(L0["point2"], "Y"))])));
  L0["headsize"] = (await $.call(C, "MmToPrinterPxX", [(await $.call(C, "max", [L0["headsize"], 0]))]));
  await $.mset((await $.mv((await $.v(C, "fCanvas")), "Pen")), "Width", (await $.call(C, "MulDiv", [(await $.v(C, "fDefaultLineWidth")), (await $.mv((await $.mv(Self, "Font")), "Size")), 8])));
  await $.stmt((await $.call(C, "DrawArrowInternal", [(await $.v(C, "fCanvas")), L0["point1"], L0["point2"], L0["headsize"], L0["solidhead"]])));
  return L0.result;
}, {"params": ["Point1", "Point2", "HeadSize", "SolidHead"], "kind": "procedure", "ptypes": ["TPoint", "TPoint", "integer", "boolean"]});
  U.method("TGDIPages", "DrawLine", async function DrawLine(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"doubleline": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["doubleline"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  await $.stmt((await $.call(C, "LineInternal", [(await $.mv((await $.v(C, "fPageMarginsPx")), "left")), $.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), (await $.mv((await $.v(C, "fPageMarginsPx")), "right"))), L0["doubleline"]])));
  await $.stmt($.call(C, "NewLine", []));
  return L0.result;
}, {"params": ["doubleline"], "kind": "procedure", "ptypes": ["boolean"]});
  U.method("TGDIPages", "DrawDashedLine", async function DrawDashedLine(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "y": 0};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  {
    const $t130 = (await $.v(C, "fCanvas"));
    await $.mset((await $.wv([$t130], "Pen", C, false)), "Width", 1);
    await $.mset((await $.wv([$t130], "Pen", C, false)), "Style", (await $.wv([$t130], "psDash", C, false)));
    await $.wset([$t130], "Y", $.sub($.add((await $.wv([$t130], "fCurrentYPos", C, false)), ($.shr((await $.wv([$t130], "GetLineHeight", C, false)), 1))), ($.shr((await $.mv((await $.wv([$t130], "Pen", C, false)), "Width")), 1))), { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
    await $.stmt((await $.wcall([$t130], "MoveTo", [(await $.mv((await $.wv([$t130], "fPageMarginsPx", C, false)), "left")), (await $.wv([$t130], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t130], "LineTo", [$.sub((await $.mv((await $.wv([$t130], "fPhysicalSizePx", C, false)), "x")), (await $.mv((await $.wv([$t130], "fPageMarginsPx", C, false)), "right"))), (await $.wv([$t130], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], C)));
    await $.mset((await $.wv([$t130], "Pen", C, false)), "Style", (await $.wv([$t130], "psSolid", C, false)));
  }
  await $.stmt($.call(C, "NewLine", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "DrawColumnLine", async function DrawColumnLine(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"colindex": $.copyArg(p0), "aattop": $.copyArg(p1), "adodoubleline": $.copyArg(p2), result: undefined, "y": 0};
  await $.fixArgs(L0, ["colindex", "aattop", "adodoubleline"]);
  if ($.truthy(L0["aattop"])) {
    L0["y"] = $.sub((await $.v(C, "fCurrentYPos")), 1);
  } else {
    L0["y"] = $.add($.add((await $.v(C, "fCurrentYPos")), (await $.v(C, "fLineHeight"))), 1);
  }
  {
    const $t131 = (await $.idx((await $.v(C, "fColumns")), [L0["colindex"]]));
    await $.stmt((await $.wcall([$t131], "LineInternal", [(await $.wv([$t131], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), (await $.wv([$t131], "ColLeft", C, false)), (await $.wv([$t131], "ColRight", C, false)), (await $.wv([$t131], "aDoDoubleLine", { get: async () => L0["adodoubleline"], set: async (v) => { L0["adodoubleline"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["ColIndex", "aAtTop", "aDoDoubleLine"], "kind": "procedure", "ptypes": ["integer", "boolean", "boolean"]});
  U.method("TGDIPages", "NewLine", async function NewLine(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t132) => { await $.set(C, "fCurrentYPos", $t132); }), (await $.v(C, "GetLineHeight"))])));
  await $.set(C, "fForcedLeftOffset", (-(1)));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "NewHalfLine", async function NewHalfLine(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t133) => { await $.set(C, "fCurrentYPos", $t133); }), $.shr((await $.v(C, "GetLineHeight")), 1)])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "NewLines", async function NewLines(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"count": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["count"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  if ($.truthy($.lt(L0["count"], 1))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t134) => { await $.set(C, "fCurrentYPos", $t134); }), $.mul((await $.v(C, "GetLineHeight")), L0["count"])])));
  return L0.result;
}, {"params": ["count"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TGDIPages", "NewPage", async function NewPage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"forceendgroup": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["forceendgroup"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy(L0["forceendgroup"])) {
    await $.stmt($.call(C, "EndGroup", []));
  } else {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))])))) {
      throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Cannot call NewPage within a group block."])));
    }
  }
  await $.stmt($.call(C, "CheckHeaderDone", []));
  await $.stmt($.call(C, "NewPageInternal", []));
  return L0.result;
}, {"params": ["ForceEndGroup"], "kind": "procedure", "ptypes": ["boolean"]});
  U.method("TGDIPages", "NewPageIfAnyContent", async function NewPageIfAnyContent(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy((await $.v(C, "fHeaderDone")))) {
    await $.stmt($.call(C, "NewPage", []));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "BeginGroup", async function BeginGroup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.v(C, "fHeaderDone"))))) {
    return L0.result;
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))])))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "create", ["Group already started!"])));
  }
  if ($.truthy($.not((await $.v(C, "GroupsMustBeOnSamePage"))))) {
    if ($.truthy((await $.and_((await $.v(C, "fHeaderDone")), async () => $.not((await $.call(C, "HasSpaceForLines", [20]))))))) {
      await $.stmt($.call(C, "NewPageInternal", []));
    }
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "HasSpaceForLines", [2]))))) {
    await $.stmt($.call(C, "NewPageInternal", []));
    return L0.result;
  }
  await $.set(C, "fGroupVerticalSpace", $.sub($.sub($.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "y")), (await $.v(C, "fCurrentYPos"))), (await $.mv((await $.v(C, "fPageMarginsPx")), "bottom"))), (await $.v(C, "fFooterHeight"))));
  await $.set(C, "fColumnsUsedInGroup", false);
  await $.set(C, "fColumnHeaderInGroup", false);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fCanvas"))])))) {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCanvas")), async ($t135) => { await $.set(C, "fCanvas", $t135); })])));
  }
  await $.set(C, "fGroupPage", (await $.call(C, "CreateMetaFile", [(await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), $.add((await $.v(C, "fGroupVerticalSpace")), (await $.mv((await $.v(C, "fPhysicalOffsetPx")), "Y")))])));
  await $.set(C, "fCanvas", (await $.call(C, "CreateMetafileCanvas", [(await $.v(C, "fGroupPage"))])));
  await $.set(C, "fGroupVerticalPos", (await $.v(C, "fCurrentYPos")));
  await $.set(C, "fCurrentYPos", 0);
  await $.set(C, "fBeforeGroupText", (await $.v(C, "fCanvasText")));
  await $.set(C, "fCanvasText", "");
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "EndGroup", async function EndGroup(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))]))))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCanvas")), async ($t136) => { await $.set(C, "fCanvas", $t136); })])));
  await $.set(C, "fCanvas", (await $.call(C, "CreateMetafileCanvas", [(await $.v(C, "fCurrentMetaFile"))])));
  await $.stmt((await $.mcall((await $.v(C, "fCanvas")), "Draw", [0, 0, (await $.v(C, "fCurrentMetaFile"))])));
  await $.stmt((await $.mcall((await $.v(C, "fCanvas")), "Draw", [0, (await $.v(C, "fGroupVerticalPos")), (await $.v(C, "fGroupPage"))])));
  await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fGroupPage")), async ($t137) => { await $.set(C, "fGroupPage", $t137); })])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t138) => { await $.set(C, "fCurrentYPos", $t138); }), (await $.v(C, "fGroupVerticalPos"))])));
  await $.set(C, "fCanvasText", $.add((await $.v(C, "fBeforeGroupText")), (await $.v(C, "fCanvasText"))));
  await $.set(C, "fBeforeGroupText", "");
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "CurrentGroupPosStart", async function CurrentGroupPosStart(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = 0;
  } else {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))])))) {
      L0["result"] = (await $.v(C, "fGroupVerticalPos"));
    } else {
      L0["result"] = (await $.mv((await $.v(C, "fPageMarginsPx")), "top"));
    }
    L0["result"] = (await $.call(C, "PrinterPXtoMmY", [L0["result"]]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("GetNextItemW", async function GetNextItemW(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"p": $.asRef(p0), result: null, "s": null};
  if ($.truthy($.eq((await L0["p"].get()), null))) {
    L0["result"] = "";
  } else {
    L0["s"] = (await L0["p"].get());
    while ($.truthy((await $.and_(($.ne(L0["s"], "\u0000")), async () => ($.ne(L0["s"], ",")))))) {
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["s"], async ($t139) => { L0["s"] = $t139; })])));
      await $.tick();
    }
    await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t140) => { L0["result"] = $t140; }), (await L0["p"].get()), $.sub(L0["s"], (await L0["p"].get()))])));
    if ($.truthy($.ne(L0["s"], "\u0000"))) {
      await L0["p"].set($.add(L0["s"], 1));
    } else {
      await L0["p"].set(null);
    }
  }
  return L0.result;
}, {"params": ["P"], "kind": "function", "ptypes": ["PWideChar"]});
  U.func("GetNextItemS", async function GetNextItemS(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"p": $.asRef(p0), result: '', "s": ''};
  if ($.truthy($.eq((await L0["p"].get()), null))) {
    L0["result"] = "";
  } else {
    L0["s"] = (await L0["p"].get());
    while ($.truthy((await $.and_(($.ne(L0["s"], "\u0000")), async () => ($.ne(L0["s"], ",")))))) {
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["s"], async ($t141) => { L0["s"] = $t141; })])));
      await $.tick();
    }
    await $.stmt((await $.call(C, "SetString", [$.ref(async () => L0["result"], async ($t142) => { L0["result"] = $t142; }), (await L0["p"].get()), $.sub(L0["s"], (await L0["p"].get()))])));
    if ($.truthy($.ne(L0["s"], "\u0000"))) {
      await L0["p"].set($.add(L0["s"], 1));
    } else {
      await L0["p"].set(null);
    }
  }
  return L0.result;
}, {"params": ["P"], "kind": "function", "ptypes": ["PChar"]});
  U.method("TGDIPages", "EndDoc", async function EndDoc(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "pc": '', "i": 0, "n": 0, "ax": 0, "men": null, "m": null, "root": null, "page": null, "s": ''};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.set(C, "fLinksCurrent", (-(1)));
  await $.stmt($.call(C, "EndGroup", []));
  await $.stmt($.call(C, "DoFooter", []));
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fCanvas"))])))) {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCanvas")), async ($t143) => { await $.set(C, "fCanvas", $t143); })])));
  }
  L0["n"] = (await $.call(C, "length", [(await $.v(C, "fPages"))]));
  if ($.truthy((await $.and_(($.gt(L0["n"], 1)), async () => $.not((await $.v(C, "HeaderDone"))))))) {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCurrentMetaFile")), async ($t144) => { await $.set(C, "fCurrentMetaFile", $t144); })])));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["n"], async ($t145) => { L0["n"] = $t145; })])));
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "fPages")), async ($t146) => { await $.set(C, "fPages", $t146); }), L0["n"]])));
  } else {
    await $.stmt($.call(C, "FlushPageContent", []));
  }
  if ($.truthy((await $.and_(($.gt(L0["n"], 0)), async () => ($.ne((await $.v(C, "fPagesToFooterText")), "")))))) {
    { const $t147 = $.sub(L0["n"], 1);
      L0["i"] = 0;
      let $t148 = true;
      for (;;) {
        if (!$t148) { L0["i"] = $.succ(L0["i"], 1); }
        $t148 = false;
        if (!($.ord(L0["i"]) <= $.ord($t147))) break;
        L0["page"] = (await $.call(C, "CreateMetaFile", [(await $.mv((await $.mv((await $.idx((await $.v(C, "fPages")), [L0["i"]])), "SizePx")), "X")), (await $.mv((await $.mv((await $.idx((await $.v(C, "fPages")), [L0["i"]])), "SizePx")), "Y"))]));
        try {
          await $.set(C, "fCanvas", (await $.call(C, "CreateMetafileCanvas", [L0["page"]])));
          await $.stmt((await $.mcall((await $.v(C, "fCanvas")), "Draw", [0, 0, (await $.call(C, "GetMetaFileForPage", [L0["i"]]))])));
          L0["s"] = (await $.call(C, "format", [(await $.v(C, "fPagesToFooterText")), [$.add(L0["i"], 1), L0["n"]]]));
          L0["ax"] = (await $.mv((await $.v(C, "fPagesToFooterAt")), "X"));
          if ($.truthy($.lt(L0["ax"], 0))) {
            L0["ax"] = $.sub((await $.mv((await $.mv((await $.idx((await $.v(C, "fPages")), [L0["i"]])), "SizePx")), "X")), (await $.mv((await $.mv((await $.idx((await $.v(C, "fPages")), [L0["i"]])), "MarginPx")), "Right")));
          }
          await $.set(C, "SavedState", (await $.v(C, "fPagesToFooterState")));
          if ($.truthy($.eq((await $.v(C, "TextAlign")), (await $.v(C, "taRight"))))) {
            await $.stmt((await $.call(C, "dec", [$.ref(async () => L0["ax"], async ($t149) => { L0["ax"] = $t149; }), (await $.mcall((await $.v(C, "fCanvas")), "TextWidth", [L0["s"]]))])));
          }
          {
            const $t150 = (await $.idx((await $.v(C, "fPages")), [L0["i"]]));
            await $.stmt((await $.mcall((await $.wv([$t150], "fCanvas", C, false)), "TextOut", [(await $.wv([$t150], "aX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false)), $.add($.add($.sub($.sub((await $.mv((await $.wv([$t150], "SizePx", C, false)), "Y")), (await $.mv((await $.wv([$t150], "MarginPx", C, false)), "bottom"))), (await $.wv([$t150], "fFooterHeight", C, false))), (await $.wv([$t150], "fFooterGap", C, false))), (await $.mv((await $.wv([$t150], "fPagesToFooterAt", C, false)), "Y"))), (await $.wv([$t150], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCanvas")), async ($t151) => { await $.set(C, "fCanvas", $t151); })])));
          await $.stmt((await $.call(C, "SetMetaFileForPage", [L0["i"], L0["page"]])));
        } finally {
          await $.mcall(L0["page"], "Free", []);
        }
        await $.tick();
      }
    }
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fOnDocumentProducedEvent"))])))) {
    await $.stmt((await $.call(C, "fOnDocumentProducedEvent", [Self])));
  }
  await $.set(C, "fCurrPreviewPage", 1);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fPreviewPageChangedEvent"))])))) {
    await $.stmt((await $.call(C, "fPreviewPageChangedEvent", [Self])));
  }
  await $.stmt($.call(C, "Invalidate", []));
  if ($.truthy($.eq((await $.v(C, "PopupMenu")), null))) {
    await $.set(C, "PopupMenu", (await $.mcall((await $.v(C, "PopupMenuClass")), "Create", [Self])));
  } else {
    await $.mcall((await $.mv((await $.v(C, "PopupMenu")), "Items")), "Clear", []);
  }
  await $.mset((await $.v(C, "PopupMenu")), "OnPopup", (await $.ref_(C, "PopupMenuPopup")));
  L0["pc"] = (await $.call(C, "pointer", [(await $.call(C, "string", [(await $.v(C, "sReportPopupMenu1"))]))]));
  { const $t152 = (await $.v(C, "rClose"));
    L0["men"] = (await $.v(C, "rNextPage"));
    let $t153 = true;
    for (;;) {
      if (!$t153) { L0["men"] = $.succ(L0["men"], 1); }
      $t153 = false;
      if (!($.ord(L0["men"]) <= $.ord($t152))) break;
      await $.mset((await $.call(C, "NewPopupMenuItem", [(await $.call(C, "GetNextItemS", [$.ref(async () => L0["pc"], async ($t154) => { L0["pc"] = $t154; })])), (-((await $.call(C, "ord", [L0["men"]]))))])), "Enabled", (await $.or_((await $.or_((await $.or_(($.lt(L0["men"], (await $.v(C, "rPrint")))), async () => ($.eq(L0["men"], (await $.v(C, "rClose")))))), async () => ((await $.and_(($.eq(L0["men"], (await $.v(C, "rPrint")))), async () => (await $.v(C, "fHasPrinterInstalled"))))))), async () => (($.eq(L0["men"], (await $.v(C, "rExportPDF"))))))));
      await $.tick();
    }
  }
  await $.mset((await $.idx((await $.mv((await $.v(C, "PopupMenu")), "Items")), [$.sub((await $.call(C, "ord", [(await $.v(C, "rClose"))])), 1)])), "Visible", false);
  L0["m"] = (await $.idx((await $.mv((await $.v(C, "PopupMenu")), "Items")), [$.sub((await $.call(C, "ord", [(await $.v(C, "rZoom"))])), 1)]));
  await $.stmt((await $.call(C, "NewPopupMenuItem", [(await $.call(C, "GetNextItemS", [$.ref(async () => L0["pc"], async ($t155) => { L0["pc"] = $t155; })])), $.sub((-(1000)), (await $.v(C, "PAGE_FIT"))), L0["m"]])));
  await $.stmt((await $.call(C, "NewPopupMenuItem", [(await $.call(C, "GetNextItemS", [$.ref(async () => L0["pc"], async ($t156) => { L0["pc"] = $t156; })])), $.sub((-(1000)), (await $.v(C, "PAGE_WIDTH"))), L0["m"]])));
  { const $t157 = (await $.call(C, "high", [(await $.v(C, "MenuZoom"))]));
    L0["i"] = 0;
    let $t158 = true;
    for (;;) {
      if (!$t158) { L0["i"] = $.succ(L0["i"], 1); }
      $t158 = false;
      if (!($.ord(L0["i"]) <= $.ord($t157))) break;
      await $.stmt((await $.call(C, "NewPopupMenuItem", [(await $.call(C, "format", ["%d %%", [(await $.idx((await $.v(C, "MenuZoom")), [L0["i"]]))]])), $.sub((-(1000)), (await $.idx((await $.v(C, "MenuZoom")), [L0["i"]]))), L0["m"]])));
      await $.tick();
    }
  }
  L0["root"] = (await $.idx((await $.mv((await $.v(C, "PopupMenu")), "Items")), [$.sub((await $.call(C, "ord", [(await $.v(C, "rBookmarks"))])), 1)]));
  if ($.truthy((await $.and_((await $.v(C, "UseOutlines")), async () => ($.gt((await $.mv((await $.v(C, "fOutline")), "Count")), 0)))))) {
    await $.mset(L0["root"], "Enabled", true);
    L0["m"] = L0["root"];
    { const $t159 = $.sub((await $.mv((await $.v(C, "fOutline")), "Count")), 1);
      L0["i"] = 0;
      let $t160 = true;
      for (;;) {
        if (!$t160) { L0["i"] = $.succ(L0["i"], 1); }
        $t160 = false;
        if (!($.ord(L0["i"]) <= $.ord($t159))) break;
        {
          const $t161 = (await $.call(C, "TGDIPagereference", [(await $.idx((await $.mv((await $.v(C, "fOutline")), "Objects")), [L0["i"]]))]));
          while ($.truthy((await $.and_((await $.and_(($.ne((await $.wv([$t161], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), (await $.wv([$t161], "Root", { get: async () => L0["root"], set: async (v) => { L0["root"] = v; }, local: true }, false)))), async () => ($.lt((await $.wcall([$t161], "cardinal", [$.sub((-(2000)), (await $.mv((await $.wv([$t161], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), "Tag")))], C)), (await $.wcall([$t161], "cardinal", [(await $.mv((await $.wv([$t161], "fOutline", C, false)), "Count"))], C)))))), async () => ($.le((await $.mv((await $.wv([$t161], "Rect", C, false)), "Bottom")), (await $.mv((await $.mv((await $.wcall([$t161], "TGDIPagereference", [(await $.idx((await $.mv((await $.wv([$t161], "fOutline", C, false)), "Objects")), [$.sub((-(2000)), (await $.mv((await $.wv([$t161], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), "Tag")))]))], C)), "Rect")), "Bottom")))))))) {
            await $.wset([$t161], "M", (await $.mv((await $.wv([$t161], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), "Parent")), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
            await $.tick();
          }
          await $.wset([$t161], "M", (await $.wcall([$t161], "NewPopupMenuItem", [(await $.idx((await $.wv([$t161], "fOutline", C, false)), [(await $.wv([$t161], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), $.sub((-(2000)), (await $.wv([$t161], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))), (await $.wv([$t161], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false))], C)), { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true });
        }
        await $.tick();
      }
    }
  } else {
    await $.mset(L0["root"], "Enabled", false);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "PrintPages", async function PrintPages(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"printfrom": $.copyArg(p0), "printto": $.copyArg(p1), result: false, "i": 0, "rec": null, "checkcurrentptr": '', "usestretchdraw": false, "bmp": null};
  await $.fixArgs(L0, ["printfrom", "printto"]);
  L0["result"] = false;
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.not((await $.v(C, "fHasPrinterInstalled"))))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["No printer driver is currently installed."])));
  }
  if ($.truthy($.lt(L0["printfrom"], 0))) {
    {
      const $t162 = (await $.mcall((await $.v(C, "TPrintDialog")), "Create", [null]));
      try {
        await $.wset([$t162], "Options", [(await $.wv([$t162], "poPageNums", C, false))], C);
        await $.wset([$t162], "MinPage", 1, C);
        await $.wset([$t162], "MaxPage", (await $.wv([$t162], "PageCount", C, false)), C);
        await $.wset([$t162], "FromPage", 1, C);
        await $.wset([$t162], "ToPage", (await $.wv([$t162], "PageCount", C, false)), C);
        if ($.truthy($.not((await $.wv([$t162], "Execute", C, false))))) {
          return L0.result;
        }
        await $.wset([$t162], "PrintFrom", (await $.wv([$t162], "FromPage", C, false)), { get: async () => L0["printfrom"], set: async (v) => { L0["printfrom"] = v; }, local: true });
        await $.wset([$t162], "PrintTo", (await $.wv([$t162], "ToPage", C, false)), { get: async () => L0["printto"], set: async (v) => { L0["printto"] = v; }, local: true });
      } finally {
        await $.stmt($.wcall([$t162], "Free", [], C));
      }
    }
  }
  L0["result"] = true;
  L0["checkcurrentptr"] = (await $.v(C, "CurrentPrinterName"));
  if ($.truthy($.ne(L0["checkcurrentptr"], (await $.v(C, "fCurrentPrinter"))))) {
    await $.stmt($.call(C, "GetPrinterParams", []));
    L0["usestretchdraw"] = true;
  } else {
    L0["usestretchdraw"] = false;
  }
  L0["printfrom"] = (await $.call(C, "max", [$.sub(L0["printfrom"], 1), 0]));
  if ($.truthy($.eq(L0["printto"], 0))) {
    L0["printto"] = (await $.call(C, "high", [(await $.v(C, "fPages"))]));
  } else {
    L0["printto"] = (await $.call(C, "min", [$.sub(L0["printto"], 1), (await $.call(C, "high", [(await $.v(C, "fPages"))]))]));
  }
  {
    const $t163 = (await $.v(C, "Printer"));
    if ($.truthy($.eq((await $.wv([$t163], "Caption", C, false)), ""))) {
      if ($.truthy($.ne((await $.wv([$t163], "ExportPDFApplication", C, false)), ""))) {
        await $.wset([$t163], "Title", (await $.wv([$t163], "ExportPDFApplication", C, false)), C);
      } else {
        await $.wset([$t163], "Title", (await $.mv((await $.wv([$t163], "Application", C, false)), "Title")), C);
      }
    } else {
      await $.wset([$t163], "Title", (await $.wv([$t163], "Caption", C, false)), C);
    }
    await $.wset([$t163], "Orientation", (await $.mv(Self, "Orientation")), C);
    await $.stmt($.wcall([$t163], "BeginDoc", [], C));
    try {
      await $.mset((await $.wv([$t163], "Screen", C, false)), "Cursor", (await $.wv([$t163], "crHourGlass", C, false)));
      if ($.truthy((await $.wv([$t163], "ForcePrintAsBitmap", C, false)))) {
        await $.wset([$t163], "BMP", (await $.mv((await $.wv([$t163], "TBitmap", C, false)), "Create")), { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true });
        try {
          await $.mset((await $.wv([$t163], "BMP", { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true }, false)), "Width", (await $.wcall([$t163], "GetDeviceCaps", [(await $.wv([$t163], "handle", C, false)), (await $.wv([$t163], "PHYSICALWIDTH", C, false))], C)));
          await $.mset((await $.wv([$t163], "BMP", { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true }, false)), "Height", (await $.wcall([$t163], "GetDeviceCaps", [(await $.wv([$t163], "handle", C, false)), (await $.wv([$t163], "PHYSICALHEIGHT", C, false))], C)));
          { const $t164 = (await $.wv([$t163], "PrintTo", { get: async () => L0["printto"], set: async (v) => { L0["printto"] = v; }, local: true }, false));
            await $.wset([$t163], "i", (await $.wv([$t163], "PrintFrom", { get: async () => L0["printfrom"], set: async (v) => { L0["printfrom"] = v; }, local: true }, false)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
            let $t165 = true;
            for (;;) {
              if (!$t165) { await $.wset([$t163], "i", $.succ((await $.wv([$t163], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
              $t165 = false;
              if (!($.ord((await $.wv([$t163], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t164))) break;
              {
                const $t166 = (await $.idx((await $.wv([$t163], "fPages", C, false)), [(await $.wv([$t163], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]));
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t163, $t166], "BMP", { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true }, false)), "Canvas")), "StretchDraw", [(await $.wcall([$t163, $t166], "Rect", [0, 0, (await $.mv((await $.wv([$t163, $t166], "Bmp", { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true }, false)), "Width")), (await $.mv((await $.wv([$t163, $t166], "Bmp", { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true }, false)), "Height"))], C)), (await $.wcall([$t163, $t166], "GetMetaFileForPage", [(await $.wv([$t163, $t166], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C))])));
                await $.stmt((await $.mcall((await $.wv([$t163, $t166], "Canvas", C, false)), "Draw", [(-((await $.mv((await $.wv([$t163, $t166], "OffsetPx", C, false)), "x")))), (-((await $.mv((await $.wv([$t163, $t166], "OffsetPx", C, false)), "y")))), (await $.wv([$t163, $t166], "BMP", { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true }, false))])));
                if ($.truthy($.lt((await $.wv([$t163, $t166], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t163, $t166], "PrintTo", { get: async () => L0["printto"], set: async (v) => { L0["printto"] = v; }, local: true }, false))))) {
                  await $.stmt($.wcall([$t163, $t166], "NewPage", [], C));
                }
              }
              await $.tick();
            }
          }
        } finally {
          await $.mcall((await $.wv([$t163], "BMP", { get: async () => L0["bmp"], set: async (v) => { L0["bmp"] = v; }, local: true }, false)), "Free", []);
        }
      } else {
        { const $t167 = (await $.wv([$t163], "PrintTo", { get: async () => L0["printto"], set: async (v) => { L0["printto"] = v; }, local: true }, false));
          await $.wset([$t163], "i", (await $.wv([$t163], "PrintFrom", { get: async () => L0["printfrom"], set: async (v) => { L0["printfrom"] = v; }, local: true }, false)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t168 = true;
          for (;;) {
            if (!$t168) { await $.wset([$t163], "i", $.succ((await $.wv([$t163], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t168 = false;
            if (!($.ord((await $.wv([$t163], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t167))) break;
            if ($.truthy((await $.wv([$t163], "ForceScreenResolution", C, false)))) {
              await $.wset([$t163], "rec", (await $.wcall([$t163], "Rect", [0, 0, (await $.wcall([$t163], "GetDeviceCaps", [(await $.wv([$t163], "handle", C, false)), (await $.wv([$t163], "PHYSICALWIDTH", C, false))], C)), (await $.wcall([$t163], "GetDeviceCaps", [(await $.wv([$t163], "handle", C, false)), (await $.wv([$t163], "PHYSICALHEIGHT", C, false))], C))], C)), { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true });
              await $.stmt((await $.wcall([$t163], "OffsetRect", [(await $.wv([$t163], "rec", { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true }, false)), (-((await $.wcall([$t163], "GetDeviceCaps", [(await $.wv([$t163], "handle", C, false)), (await $.wv([$t163], "PHYSICALOFFSETX", C, false))], C)))), (-((await $.wcall([$t163], "GetDeviceCaps", [(await $.wv([$t163], "handle", C, false)), (await $.wv([$t163], "PHYSICALOFFSETY", C, false))], C))))], C)));
              await $.stmt((await $.mcall((await $.wv([$t163], "Canvas", C, false)), "StretchDraw", [(await $.wv([$t163], "rec", { get: async () => L0["rec"], set: async (v) => { L0["rec"] = v; }, local: true }, false)), (await $.wcall([$t163], "GetMetaFileForPage", [(await $.wv([$t163], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C))])));
            } else {
              {
                const $t169 = (await $.idx((await $.wv([$t163], "fPages", C, false)), [(await $.wv([$t163], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]));
                if ($.truthy((await $.wv([$t163, $t169], "UseStretchDraw", { get: async () => L0["usestretchdraw"], set: async (v) => { L0["usestretchdraw"] = v; }, local: true }, false)))) {
                  await $.stmt((await $.mcall((await $.wv([$t163, $t169], "Canvas", C, false)), "StretchDraw", [(await $.wcall([$t163, $t169], "Rect", [(-((await $.mv((await $.wv([$t163, $t169], "OffsetPx", C, false)), "x")))), (-((await $.mv((await $.wv([$t163, $t169], "OffsetPx", C, false)), "y")))), $.sub((await $.mv((await $.wv([$t163, $t169], "SizePx", C, false)), "x")), (await $.mv((await $.wv([$t163, $t169], "OffsetPx", C, false)), "x"))), $.sub((await $.mv((await $.wv([$t163, $t169], "SizePx", C, false)), "y")), (await $.mv((await $.wv([$t163, $t169], "OffsetPx", C, false)), "y")))], C)), (await $.wcall([$t163, $t169], "GetMetaFileForPage", [(await $.wv([$t163, $t169], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C))])));
                } else {
                  await $.stmt((await $.mcall((await $.wv([$t163, $t169], "Canvas", C, false)), "Draw", [(-((await $.mv((await $.wv([$t163, $t169], "OffsetPx", C, false)), "x")))), (-((await $.mv((await $.wv([$t163, $t169], "OffsetPx", C, false)), "y")))), (await $.wcall([$t163, $t169], "GetMetaFileForPage", [(await $.wv([$t163, $t169], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C))])));
                }
              }
            }
            if ($.truthy($.lt((await $.wv([$t163], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t163], "PrintTo", { get: async () => L0["printto"], set: async (v) => { L0["printto"] = v; }, local: true }, false))))) {
              await $.stmt($.wcall([$t163], "NewPage", [], C));
            }
            await $.tick();
          }
        }
      }
      await $.stmt($.wcall([$t163], "EndDoc", [], C));
    } finally {
      await $.mset((await $.wv([$t163], "Screen", C, false)), "Cursor", (await $.wv([$t163], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["PrintFrom", "PrintTo"], "kind": "function", "ptypes": ["integer", "integer"]});
  U.method("TGDIPages", "SetTabStops", async function SetTabStops(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"tabs": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["tabs"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "FillChar", [$.ref(async () => (await $.idx((await $.v(C, "fTab")), [0])), async ($t170) => { { const $t171 = await $.iset((await $.v(C, "fTab")), [0], $t170); if ($t171 !== undefined) { await $.set(C, "fTab", $t171); } } }), $.mul((await $.v(C, "MAXTABS")), (await $.call(C, "sizeof", [(await $.idx((await $.v(C, "fTab")), [0]))]))), 0])));
  await $.set(C, "fTabCount", (await $.call(C, "min", [$.add((await $.call(C, "high", [L0["tabs"]])), 1), (await $.v(C, "MAXTABS"))])));
  if ($.truthy(($.gt((await $.v(C, "fTabCount")), 0)))) {
    while ($.truthy((await $.and_(($.gt((await $.v(C, "fTabCount")), 0)), async () => ($.eq((await $.idx(L0["tabs"], [$.sub((await $.v(C, "fTabCount")), 1)])), 0)))))) {
      await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.v(C, "fTabCount")), async ($t172) => { await $.set(C, "fTabCount", $t172); })])));
      await $.tick();
    }
  }
  if ($.truthy(($.gt((await $.v(C, "fTabCount")), 1)))) {
    if ($.truthy(($.le((await $.idx(L0["tabs"], [0])), 0)))) {
      throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Tabs stops must be greater than 0."])));
    }
    { const $t173 = await $.iset((await $.v(C, "fTab")), [0], (await $.call(C, "MmToPrinterPxX", [(await $.idx(L0["tabs"], [0]))]))); if ($t173 !== undefined) { await $.set(C, "fTab", $t173); } }
    { const $t174 = $.sub((await $.v(C, "fTabCount")), 1);
      L0["i"] = 1;
      let $t175 = true;
      for (;;) {
        if (!$t175) { L0["i"] = $.succ(L0["i"], 1); }
        $t175 = false;
        if (!($.ord(L0["i"]) <= $.ord($t174))) break;
        if ($.truthy($.gt((await $.idx(L0["tabs"], [L0["i"]])), (await $.idx(L0["tabs"], [$.sub(L0["i"], 1)]))))) {
          { const $t176 = await $.iset((await $.v(C, "fTab")), [L0["i"]], (await $.call(C, "MmToPrinterPxX", [(await $.idx(L0["tabs"], [L0["i"]]))]))); if ($t176 !== undefined) { await $.set(C, "fTab", $t176); } }
        } else {
          throw $.raise((await $.mcall((await $.v(C, "Exception")), "Create", ["Tabs stops must be in ascending order"])));
        }
        await $.tick();
      }
    }
  } else {
    if ($.truthy($.eq((await $.v(C, "fTabCount")), 1))) {
      { const $t177 = $.sub((await $.v(C, "MAXTABS")), 1);
        L0["i"] = 0;
        let $t178 = true;
        for (;;) {
          if (!$t178) { L0["i"] = $.succ(L0["i"], 1); }
          $t178 = false;
          if (!($.ord(L0["i"]) <= $.ord($t177))) break;
          { const $t179 = await $.iset((await $.v(C, "fTab")), [L0["i"]], (await $.call(C, "MmToPrinterPxX", [$.mul(($.add(L0["i"], 1)), (await $.idx(L0["tabs"], [0])))]))); if ($t179 !== undefined) { await $.set(C, "fTab", $t179); } }
          await $.tick();
        }
      }
      await $.set(C, "fTabCount", (await $.v(C, "MAXTABS")));
    } else {
      { const $t180 = $.sub((await $.v(C, "MAXTABS")), 1);
        L0["i"] = 0;
        let $t181 = true;
        for (;;) {
          if (!$t181) { L0["i"] = $.succ(L0["i"], 1); }
          $t181 = false;
          if (!($.ord(L0["i"]) <= $.ord($t180))) break;
          { const $t182 = await $.iset((await $.v(C, "fTab")), [L0["i"]], (await $.call(C, "MmToPrinterPxX", [$.mul(($.add(L0["i"], 1)), 20)]))); if ($t182 !== undefined) { await $.set(C, "fTab", $t182); } }
          await $.tick();
        }
      }
      await $.set(C, "fTabCount", (await $.v(C, "MAXTABS")));
    }
  }
  return L0.result;
}, {"params": ["tabs"], "kind": "procedure", "ptypes": [null]});
  U.method("TGDIPages", "GetPageMargins", async function GetPageMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.eq(Self, null))) {
    await $.stmt((await $.call(C, "FillChar", [$.ref(async () => L0["result"], async ($t183) => { L0["result"] = $t183; }), (await $.call(C, "sizeof", [L0["result"]])), 0])));
  } else {
    {
      const $t184 = L0["result"];
      await $.wset([$t184], "Left", (await $.wcall([$t184], "PrinterPxToMmX", [(await $.mv((await $.wv([$t184], "fPageMarginsPx", C, false)), "left"))], C)), C);
      await $.wset([$t184], "Top", (await $.wcall([$t184], "PrinterPxToMmY", [(await $.mv((await $.wv([$t184], "fPageMarginsPx", C, false)), "top"))], C)), C);
      await $.wset([$t184], "Right", (await $.wcall([$t184], "PrinterPxToMmX", [(await $.mv((await $.wv([$t184], "fPageMarginsPx", C, false)), "right"))], C)), C);
      await $.wset([$t184], "Bottom", (await $.wcall([$t184], "PrinterPxToMmY", [(await $.mv((await $.wv([$t184], "fPageMarginsPx", C, false)), "bottom"))], C)), C);
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "SetPageMargins", async function SetPageMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"rect": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["rect"]);
  await $.set(C, "fPageMarginsPx", (await $.call(C, "MmToPrinter", [L0["rect"]])));
  if ($.truthy($.not((await $.v(C, "fHeaderDone"))))) {
    await $.set(C, "fCurrentYPos", (await $.mv((await $.v(C, "fPageMarginsPx")), "top")));
  }
  return L0.result;
}, {"params": ["Rect"], "kind": "procedure", "ptypes": ["TRect"]});
  U.method("TGDIPages", "GetLeftMargin", async function GetLeftMargin(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = 0;
  } else {
    L0["result"] = (await $.call(C, "PrinterPxToMmX", [(await $.mv((await $.v(C, "fPageMarginsPx")), "left"))]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "SetLeftMargin", async function SetLeftMargin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "fPageMarginsPx")), "Left", (await $.call(C, "MmToPrinterPxX", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TGDIPages", "GetPaperSize", async function GetPaperSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  if ($.truthy($.eq(Self, null))) {
    await $.stmt((await $.call(C, "FillChar", [$.ref(async () => L0["result"], async ($t185) => { L0["result"] = $t185; }), (await $.call(C, "sizeof", [L0["result"]])), 0])));
  } else {
    await $.mset(L0["result"], "cx", (await $.call(C, "PrinterPxToMmX", [(await $.mv((await $.v(C, "fPhysicalSizePx")), "X"))])));
    await $.mset(L0["result"], "cy", (await $.call(C, "PrinterPxToMmY", [(await $.mv((await $.v(C, "fPhysicalSizePx")), "Y"))])));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "AddLineToHeader", async function AddLineToHeader(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"doubleline": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["doubleline"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.v(C, "fHeaderLines")), "Add", [(await $.mcall((await $.v(C, "THeaderFooter")), "Create", [Self, L0["doubleline"]]))])));
  return L0.result;
}, {"params": ["doubleline"], "kind": "procedure", "ptypes": ["boolean"]});
  U.method("TGDIPages", "AddLineToFooter", async function AddLineToFooter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"doubleline": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["doubleline"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "fFooterLines")), "Count")), 0))) {
    await $.stmt($.call(C, "CalcFooterGap", []));
  }
  await $.stmt((await $.mcall((await $.v(C, "fFooterLines")), "Add", [(await $.mcall((await $.v(C, "THeaderFooter")), "Create", [Self, L0["doubleline"]]))])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fFooterHeight")), async ($t186) => { await $.set(C, "fFooterHeight", $t186); }), (await $.v(C, "GetLineHeight"))])));
  return L0.result;
}, {"params": ["doubleline"], "kind": "procedure", "ptypes": ["boolean"]});
  U.method("TGDIPages", "AddTextToHeader", async function AddTextToHeader(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.ne(Self, null))) {
    await $.stmt((await $.mcall((await $.v(C, "fHeaderLines")), "Add", [(await $.mcall((await $.v(C, "THeaderFooter")), "Create", [Self, false, L0["s"], true]))])));
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["SynUnicode"]});
  U.method("TGDIPages", "AddTextToHeaderAt", async function AddTextToHeaderAt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "xpos": $.copyArg(p1), result: undefined, "head": null};
  await $.fixArgs(L0, ["s", "xpos"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  L0["head"] = (await $.mcall((await $.v(C, "THeaderFooter")), "Create", [Self, false, L0["s"], true]));
  await $.mset((await $.mv(L0["head"], "State")), "Flags", (await $.or_((await $.mv((await $.mv(L0["head"], "State")), "Flags")), async () => ($.shl(($.add(L0["xpos"], 2)), 16)))));
  await $.stmt((await $.mcall((await $.v(C, "fHeaderLines")), "Add", [L0["head"]])));
  return L0.result;
}, {"params": ["s", "XPos"], "kind": "procedure", "ptypes": ["SynUnicode", "integer"]});
  U.method("TGDIPages", "AddTextToFooter", async function AddTextToFooter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "fFooterLines")), "Count")), 0))) {
    await $.stmt($.call(C, "CalcFooterGap", []));
  }
  await $.stmt((await $.mcall((await $.v(C, "fFooterLines")), "Add", [(await $.mcall((await $.v(C, "THeaderFooter")), "Create", [Self, false, L0["s"], true]))])));
  await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fFooterHeight")), async ($t187) => { await $.set(C, "fFooterHeight", $t187); }), (await $.v(C, "GetLineHeight"))])));
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["SynUnicode"]});
  U.method("TGDIPages", "AddTextToFooterAt", async function AddTextToFooterAt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "xpos": $.copyArg(p1), result: undefined, "foot": null};
  await $.fixArgs(L0, ["s", "xpos"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "fFooterLines")), "Count")), 0))) {
    await $.stmt($.call(C, "CalcFooterGap", []));
  }
  L0["foot"] = (await $.mcall((await $.v(C, "THeaderFooter")), "Create", [Self, false, L0["s"], true]));
  await $.mset((await $.mv(L0["foot"], "State")), "Flags", (await $.or_((await $.mv((await $.mv(L0["foot"], "State")), "Flags")), async () => ($.shl(($.add(L0["xpos"], 2)), 16)))));
  await $.stmt((await $.mcall((await $.v(C, "fFooterLines")), "Add", [L0["foot"]])));
  return L0.result;
}, {"params": ["s", "XPos"], "kind": "procedure", "ptypes": ["SynUnicode", "integer"]});
  U.method("TGDIPages", "AddPagesToFooterAt", async function AddPagesToFooterAt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pagetext": $.copyArg(p0), "xpos": $.copyArg(p1), "yposmultiplier": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["pagetext", "xpos", "yposmultiplier"]);
  if ($.truthy($.ne((await $.v(C, "fPagesToFooterText")), ""))) {
    return L0.result;
  }
  await $.set(C, "fPagesToFooterText", L0["pagetext"]);
  if ($.truthy($.lt(L0["xpos"], 0))) {
    await $.mset((await $.v(C, "fPagesToFooterAt")), "X", (-(1)));
  } else {
    await $.mset((await $.v(C, "fPagesToFooterAt")), "X", (await $.call(C, "MmToPrinterPxX", [L0["xpos"]])));
  }
  await $.mset((await $.v(C, "fPagesToFooterAt")), "Y", $.mul((await $.v(C, "fFooterHeight")), L0["yposmultiplier"]));
  await $.set(C, "fPagesToFooterState", (await $.v(C, "SavedState")));
  return L0.result;
}, {"params": ["PageText", "XPos", "YPosMultiplier"], "kind": "procedure", "ptypes": ["String", "integer", "integer"]});
  U.method("TGDIPages", "GetColumnCount", async function GetColumnCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = 0;
  } else {
    L0["result"] = (await $.call(C, "length", [(await $.v(C, "fColumns"))]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "GetColumnInfo", async function GetColumnInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: $.rec("tcolrec")};
  await $.fixArgs(L0, ["index"]);
  if ($.truthy($.eq(Self, null))) {
    await $.stmt((await $.call(C, "FillChar", [$.ref(async () => L0["result"], async ($t188) => { L0["result"] = $t188; }), (await $.call(C, "sizeof", [L0["result"]])), 0])));
    return L0.result;
  }
  if ($.truthy($.ge((await $.call(C, "cardinal", [L0["index"]])), (await $.call(C, "cardinal", [(await $.call(C, "Length", [(await $.v(C, "fColumns"))]))]))))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "create", ["GetColumnInfo: index out of range"])));
  }
  {
    const $t189 = (await $.idx((await $.v(C, "fColumns")), [L0["index"]]));
    await $.mset((await $.wv([$t189], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "ColLeft", (await $.wcall([$t189], "PrinterPxToMmX", [(await $.wv([$t189], "ColLeft", C, false))], C)));
    await $.mset((await $.wv([$t189], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "ColRight", (await $.wcall([$t189], "PrinterPxToMmX", [(await $.wv([$t189], "ColRight", C, false))], C)));
    await $.mset((await $.wv([$t189], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "ColAlign", (await $.wv([$t189], "ColAlign", C, false)));
    await $.mset((await $.wv([$t189], "result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), "ColBold", (await $.wv([$t189], "ColBold", C, false)));
  }
  return L0.result;
}, {"params": ["index"], "kind": "function", "ptypes": ["integer"]});
  U.method("TGDIPages", "SetColumnAlign", async function SetColumnAlign(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), "align": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["index", "align"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.ge((await $.call(C, "cardinal", [L0["index"]])), (await $.call(C, "cardinal", [(await $.call(C, "Length", [(await $.v(C, "fColumns"))]))]))))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "create", ["SetColumnAlign: index out of range"])));
  } else {
    await $.mset((await $.idx((await $.v(C, "fColumns")), [L0["index"]])), "ColAlign", L0["align"]);
  }
  return L0.result;
}, {"params": ["index", "align"], "kind": "procedure", "ptypes": ["integer", "TColAlign"]});
  U.method("TGDIPages", "SetColumnBold", async function SetColumnBold(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"index": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["index"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.ge((await $.call(C, "cardinal", [L0["index"]])), (await $.call(C, "cardinal", [(await $.call(C, "Length", [(await $.v(C, "fColumns"))]))]))))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "create", ["SetColumnAlign: index out of range"])));
  } else {
    await $.mset((await $.idx((await $.v(C, "fColumns")), [L0["index"]])), "ColBold", true);
  }
  return L0.result;
}, {"params": ["index"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TGDIPages", "AddColumn", async function AddColumn(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"left": $.copyArg(p0), "right": $.copyArg(p1), "align": $.copyArg(p2), "bold": $.copyArg(p3), result: undefined, "n": 0};
  await $.fixArgs(L0, ["left", "right", "align", "bold"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  L0["left"] = (await $.call(C, "MmToPrinterPxX", [L0["left"]]));
  L0["right"] = (await $.call(C, "MmToPrinterPxX", [L0["right"]]));
  L0["n"] = (await $.call(C, "length", [(await $.v(C, "fColumns"))]));
  if ($.truthy((await $.and_(($.gt(L0["n"], 0)), async () => ($.lt(L0["left"], (await $.mv((await $.idx((await $.v(C, "fColumns")), [$.sub(L0["n"], 1)])), "ColRight")))))))) {
    throw $.raise((await $.mcall((await $.v(C, "Exception")), "create", ["Columns overlap!"])));
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "fColumns")), async ($t190) => { await $.set(C, "fColumns", $t190); }), $.add(L0["n"], 1)])));
  {
    const $t191 = (await $.idx((await $.v(C, "fColumns")), [L0["n"]]));
    await $.wset([$t191], "ColLeft", (await $.wv([$t191], "left", { get: async () => L0["left"], set: async (v) => { L0["left"] = v; }, local: true }, false)), C);
    await $.wset([$t191], "ColRight", (await $.wv([$t191], "right", { get: async () => L0["right"], set: async (v) => { L0["right"] = v; }, local: true }, false)), C);
    await $.wset([$t191], "ColAlign", (await $.wv([$t191], "align", { get: async () => L0["align"], set: async (v) => { L0["align"] = v; }, local: true }, false)), C);
    await $.wset([$t191], "ColBold", (await $.wv([$t191], "bold", { get: async () => L0["bold"], set: async (v) => { L0["bold"] = v; }, local: true }, false)), C);
  }
  return L0.result;
}, {"params": ["left", "right", "align", "bold"], "kind": "procedure", "ptypes": ["integer", "integer", "TColAlign", "boolean"]});
  U.method("TGDIPages", "AddColumns", async function AddColumns(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"percentwidth": $.copyArg(p0), "align": $.copyArg(p1), result: undefined, "i": 0, "sum": 0, "left": 0, "right": 0, "ww": 0, "n": 0};
  await $.fixArgs(L0, ["percentwidth", "align"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "ClearColumns", []));
  L0["sum"] = 0;
  { const $t192 = (await $.call(C, "high", [L0["percentwidth"]]));
    L0["i"] = 0;
    let $t193 = true;
    for (;;) {
      if (!$t193) { L0["i"] = $.succ(L0["i"], 1); }
      $t193 = false;
      if (!($.ord(L0["i"]) <= $.ord($t192))) break;
      await $.stmt((await $.call(C, "inc", [$.ref(async () => L0["sum"], async ($t194) => { L0["sum"] = $t194; }), (await $.call(C, "abs", [(await $.idx(L0["percentwidth"], [L0["i"]]))]))])));
      await $.tick();
    }
  }
  if ($.truthy($.le(L0["sum"], 0))) {
    return L0.result;
  }
  L0["left"] = (await $.mv((await $.v(C, "fPageMarginsPx")), "left"));
  L0["ww"] = $.sub($.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), L0["left"]), (await $.mv((await $.v(C, "fPageMarginsPx")), "right")));
  L0["n"] = (await $.call(C, "length", [(await $.v(C, "fColumns"))]));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "fColumns")), async ($t195) => { await $.set(C, "fColumns", $t195); }), $.add(L0["n"], (await $.call(C, "length", [L0["percentwidth"]])))])));
  { const $t196 = (await $.call(C, "high", [L0["percentwidth"]]));
    L0["i"] = 0;
    let $t197 = true;
    for (;;) {
      if (!$t197) { L0["i"] = $.succ(L0["i"], 1); }
      $t197 = false;
      if (!($.ord(L0["i"]) <= $.ord($t196))) break;
      L0["right"] = $.add(L0["left"], $.idiv(($.mul((await $.call(C, "abs", [(await $.idx(L0["percentwidth"], [L0["i"]]))])), L0["ww"])), L0["sum"]));
      {
        const $t198 = (await $.idx((await $.v(C, "fColumns")), [$.add(L0["i"], L0["n"])]));
        await $.wset([$t198], "ColLeft", (await $.wv([$t198], "left", { get: async () => L0["left"], set: async (v) => { L0["left"] = v; }, local: true }, false)), C);
        await $.wset([$t198], "ColRight", (await $.wv([$t198], "right", { get: async () => L0["right"], set: async (v) => { L0["right"] = v; }, local: true }, false)), C);
        if ($.truthy($.lt((await $.idx((await $.wv([$t198], "PercentWidth", { get: async () => L0["percentwidth"], set: async (v) => { L0["percentwidth"] = v; }, local: true }, false)), [(await $.wv([$t198], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), 0))) {
          await $.wset([$t198], "ColAlign", (await $.wv([$t198], "caCenter", C, false)), C);
        } else {
          await $.wset([$t198], "ColAlign", (await $.wv([$t198], "align", { get: async () => L0["align"], set: async (v) => { L0["align"] = v; }, local: true }, false)), C);
        }
        await $.wset([$t198], "ColBold", (await $.wv([$t198], "false", C, false)), C);
      }
      L0["left"] = L0["right"];
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["PercentWidth", "align"], "kind": "procedure", "ptypes": [null, "TColAlign"]});
  U.method("TGDIPages", "AddColumnHeaders", async function AddColumnHeaders(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"headers": $.copyArg(p0), "withbottomgrayline": (p1 === undefined ? false : p1), "boldfont": (p2 === undefined ? false : p2), "rowlineheight": (p3 === undefined ? 0 : p3), "flags": (p4 === undefined ? 0 : p4), result: undefined, "n": 0, "i": 0};
  await $.fixArgs(L0, ["headers", "withbottomgrayline", "boldfont", "rowlineheight", "flags"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.eq(L0["flags"], 0))) {
    if ($.truthy(L0["boldfont"])) {
      await $.mset((await $.v(C, "Font")), "Style", [(await $.v(C, "fsBold"))]);
    }
    L0["flags"] = (await $.v(C, "TextFormatsToFlags"));
  }
  L0["n"] = (await $.call(C, "length", [(await $.v(C, "fColumnHeaderList"))]));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "fColumnHeaderList")), async ($t199) => { await $.set(C, "fColumnHeaderList", $t199); }), $.add(L0["n"], 1)])));
  await $.mset((await $.idx((await $.v(C, "fColumnHeaderList")), [L0["n"]])), "flags", L0["flags"]);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.mv((await $.idx((await $.v(C, "fColumnHeaderList")), [L0["n"]])), "headers")), async ($t200) => { await $.mset((await $.idx((await $.v(C, "fColumnHeaderList")), [L0["n"]])), "headers", $t200); }), (await $.call(C, "Length", [L0["headers"]]))])));
  { const $t201 = (await $.call(C, "high", [L0["headers"]]));
    L0["i"] = 0;
    let $t202 = true;
    for (;;) {
      if (!$t202) { L0["i"] = $.succ(L0["i"], 1); }
      $t202 = false;
      if (!($.ord(L0["i"]) <= $.ord($t201))) break;
      { const $t203 = await $.iset((await $.mv((await $.idx((await $.v(C, "fColumnHeaderList")), [L0["n"]])), "headers")), [L0["i"]], (await $.idx(L0["headers"], [L0["i"]]))); if ($t203 !== undefined) { await $.mset((await $.idx((await $.v(C, "fColumnHeaderList")), [L0["n"]])), "headers", $t203); } }
      await $.tick();
    }
  }
  await $.set(C, "fColumnHeaderPrinted", false);
  await $.set(C, "fColumnHeaderPrintedAtLeastOnce", false);
  await $.set(C, "fColumnsWithBottomGrayLine", L0["withbottomgrayline"]);
  await $.set(C, "fColumnsRowLineHeight", L0["rowlineheight"]);
  if ($.truthy(L0["boldfont"])) {
    await $.mset((await $.v(C, "Font")), "Style", []);
  }
  return L0.result;
}, {"params": ["headers", "WithBottomGrayLine", "BoldFont", "RowLineHeight", "flags"], "kind": "procedure", "ptypes": [null, "boolean", "boolean", "integer", "integer"]});
  U.func("CSVToArray", async function CSVToArray(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"csv": $.asRef(p0), "n": $.copyArg(p1), result: null, "i": 0};
  await $.fixArgs(L0, ["n"]);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L0["result"], async ($t204) => { L0["result"] = $t204; }), L0["n"]])));
  { const $t205 = $.sub(L0["n"], 1);
    L0["i"] = 0;
    let $t206 = true;
    for (;;) {
      if (!$t206) { L0["i"] = $.succ(L0["i"], 1); }
      $t206 = false;
      if (!($.ord(L0["i"]) <= $.ord($t205))) break;
      { const $t208 = await $.iset(L0["result"], [L0["i"]], (await $.call(C, "GetNextItemW", [$.ref(async () => (await L0["csv"].get()), async ($t207) => { await L0["csv"].set($t207); })]))); if ($t208 !== undefined) { L0["result"] = $t208; } }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["CSV", "n"], "kind": "function", "ptypes": ["PWideChar", "integer"]});
  U.method("TGDIPages", "AddColumnHeadersFromCSV", async function AddColumnHeadersFromCSV(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"csv": $.asRef(p0), "withbottomgrayline": $.copyArg(p1), "boldfont": $.copyArg(p2), "rowlineheight": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["withbottomgrayline", "boldfont", "rowlineheight"]);
  if ($.truthy($.ne(Self, null))) {
    await $.stmt((await $.call(C, "AddColumnHeaders", [(await $.call(C, "CSVToArray", [$.ref(async () => (await L0["csv"].get()), async ($t209) => { await L0["csv"].set($t209); }), (await $.call(C, "length", [(await $.v(C, "fColumns"))]))])), L0["withbottomgrayline"], L0["boldfont"], L0["rowlineheight"]])));
  }
  return L0.result;
}, {"params": ["CSV", "WithBottomGrayLine", "BoldFont", "RowLineHeight"], "kind": "procedure", "ptypes": ["PWideChar", "boolean", "boolean", "integer"]});
  U.method("TGDIPages", "DrawTextAcrossColsFromCSV", async function DrawTextAcrossColsFromCSV(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"csv": $.asRef(p0), "backgroundcolor": (p1 === undefined ? (await $.v(C, "clNone")) : p1), result: undefined};
  await $.fixArgs(L0, ["backgroundcolor"]);
  if ($.truthy($.ne(Self, null))) {
    await $.stmt((await $.call(C, "DrawTextAcrossCols", [(await $.call(C, "CSVToArray", [$.ref(async () => (await L0["csv"].get()), async ($t210) => { await L0["csv"].set($t210); }), (await $.call(C, "length", [(await $.v(C, "fColumns"))]))])), [], L0["backgroundcolor"]])));
  }
  return L0.result;
}, {"params": ["CSV", "BackgroundColor"], "kind": "procedure", "ptypes": ["PWideChar", "TColor"]});
  U.func("clAlways", async function clAlways(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"cl": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["cl"]);
  if ($.truthy($.lt(($.add($.add(($.mul((await $.call(C, "GetRValue", [(await $.call(C, "cardinal", [L0["cl"]]))])), 2)), ($.mul((await $.call(C, "GetGValue", [(await $.call(C, "cardinal", [L0["cl"]]))])), 3))), ($.mul((await $.call(C, "GetBValue", [(await $.call(C, "cardinal", [L0["cl"]]))])), 2)))), 600))) {
    L0["result"] = (await $.v(C, "clWhite"));
  } else {
    L0["result"] = (await $.v(C, "clBlack"));
  }
  return L0.result;
}, {"params": ["cl"], "kind": "function", "ptypes": ["TColor"]});
  U.method("TGDIPages", "DrawTextAcrossCols", async function DrawTextAcrossCols(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"stringarray": $.copyArg(p0), "backgroundcolor": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["stringarray", "backgroundcolor"]);
  await $.stmt((await $.call(C, "DrawTextAcrossCols", [L0["stringarray"], [], L0["backgroundcolor"]])));
  return L0.result;
}, {"params": ["StringArray", "BackgroundColor"], "kind": "procedure", "ptypes": [null, "TColor"]});
  U.method("TGDIPages", "DrawTextAcrossCols", async function DrawTextAcrossCols(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"stringarray": $.copyArg(p0), "linkarray": $.copyArg(p1), "backgroundcolor": $.copyArg(p2), result: undefined, "rowrect": null, "lh": 0, "max": 0, "i": 0, "j": 0, "k": 0, "c": 0, "h": 0, "parenthw": 0, "linescount": 0, "x": 0, "s": null, "line": '', "lines": null, "pw": null, "pwlen": 0, "options": 0, "size": null, "r": null};
  await $.fixArgs(L0, ["stringarray", "linkarray", "backgroundcolor"]);
  L0["hascrlf"] = $.fn(async function HasCRLF(p0) {
  const L1 = {"s": $.copyArg(p0), result: false, "i": 0};
  await $.fixArgs(L1, ["s"]);
  L1["result"] = true;
  { const $t211 = $.sub((await $.call(C, "length", [L1["s"]])), 1);
    L1["i"] = 0;
    let $t212 = true;
    for (;;) {
      if (!$t212) { L1["i"] = $.succ(L1["i"], 1); }
      $t212 = false;
      if (!($.ord(L1["i"]) <= $.ord($t211))) break;
      if ($.truthy($.lt((await $.idx(L1["s"], [$.add(L1["i"], 1)])), " "))) {
        return L1.result;
      }
      await $.tick();
    }
  }
  L1["result"] = false;
  return L1.result;
});
  L0["wraptext"] = $.fn(async function WrapText(p0, p1, p2) {
  const L1 = {"s": $.copyArg(p0), "maxwidth": $.copyArg(p1), "lines": $.copyArg(p2), result: 0, "j": 0, "k": 0, "sp": 0};
  await $.fixArgs(L1, ["s", "maxwidth", "lines"]);
  L1["result"] = 0;
  if ($.truthy($.ne(L1["lines"], null))) {
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L1["lines"], async ($t213) => { L1["lines"] = $t213; }), 0])));
  }
  do {
    if ($.truthy((await $.or_((await $.callv(L0["hascrlf"], [L1["s"]])), async () => ($.gt((await $.call(C, "TextWidthC", [(await $.v(C, "fCanvas")), L1["s"]])), L1["maxwidth"])))))) {
      L1["j"] = 1;
      L1["k"] = 1;
      L1["sp"] = 0;
      while ($.truthy((await $.and_(($.lt(L1["j"], (await $.call(C, "length", [L1["s"]])))), async () => ($.lt((await $.call(C, "TextWidthC", [(await $.v(C, "fCanvas")), (await $.call(C, "copy", [L1["s"], 1, L1["j"]]))])), L1["maxwidth"])))))) {
        L1["k"] = L1["j"];
        if ($.truthy($.le((await $.idx(L1["s"], [L1["j"]])), " "))) {
          L1["sp"] = L1["j"];
          if ($.truthy($.lt((await $.idx(L1["s"], [L1["j"]])), " "))) {
            break;
          }
        }
        await $.stmt((await $.call(C, "inc", [$.ref(async () => L1["j"], async ($t214) => { L1["j"] = $t214; })])));
        await $.tick();
      }
      if ($.truthy($.eq(L1["sp"], 0))) {
        L1["sp"] = L1["k"];
      }
    } else {
      L1["sp"] = $.add((await $.call(C, "length", [L1["s"]])), 1);
    }
    if ($.truthy($.le(L1["sp"], 1))) {
      L1["sp"] = 2;
    }
    if ($.truthy($.ne(L1["lines"], null))) {
      await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L1["lines"], async ($t215) => { L1["lines"] = $t215; }), $.add((await $.call(C, "length", [L1["lines"]])), 1)])));
      { const $t216 = await $.iset(L1["lines"], [(await $.call(C, "high", [L1["lines"]]))], (await $.call(C, "copy", [L1["s"], 1, $.sub(L1["sp"], 1)]))); if ($t216 !== undefined) { L1["lines"] = $t216; } }
    }
    await $.stmt((await $.call(C, "inc", [$.ref(async () => L1["result"], async ($t217) => { L1["result"] = $t217; })])));
    L1["s"] = (await $.call(C, "trim", [(await $.call(C, "copy", [L1["s"], L1["sp"], (await $.v(C, "maxInt"))]))]));
    await $.tick();
  } while (!$.truthy($.eq(L1["s"], "")));
  return L1.result;
});
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  L0["max"] = (await $.call(C, "high", [(await $.v(C, "fColumns"))]));
  if ($.truthy((await $.or_(($.lt(L0["max"], 0)), async () => ($.eq((await $.call(C, "length", [L0["stringarray"]])), 0)))))) {
    return L0.result;
  }
  if ($.truthy($.lt((await $.call(C, "High", [L0["stringarray"]])), L0["max"]))) {
    L0["max"] = (await $.call(C, "High", [L0["stringarray"]]));
  }
  if ($.truthy($.lt(L0["max"], 0))) {
    return L0.result;
  }
  L0["lh"] = (await $.v(C, "GetLineHeight"));
  await $.stmt($.call(C, "CheckYPos", []));
  L0["linescount"] = 1;
  if ($.truthy((await $.v(C, "WordWrapLeftCols")))) {
    { const $t218 = L0["max"];
      L0["j"] = 0;
      let $t219 = true;
      for (;;) {
        if (!$t219) { L0["j"] = $.succ(L0["j"], 1); }
        $t219 = false;
        if (!($.ord(L0["j"]) <= $.ord($t218))) break;
        {
          const $t220 = (await $.idx((await $.v(C, "fColumns")), [L0["j"]]));
          if ($.truthy((await $.and_((await $.and_(($.eq((await $.wv([$t220], "ColAlign", C, false)), (await $.wv([$t220], "caLeft", C, false)))), async () => ($.gt((await $.wv([$t220], "ColRight", C, false)), (await $.wv([$t220], "ColLeft", C, false)))))), async () => ((await $.or_((await $.wcall([$t220], "HasCRLF", [(await $.idx((await $.wv([$t220], "StringArray", { get: async () => L0["stringarray"], set: async (v) => { L0["stringarray"] = v; }, local: true }, false)), [(await $.wv([$t220], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))], { get: async () => L0["hascrlf"], set: async (v) => { L0["hascrlf"] = v; }, local: true })), async () => ($.gt((await $.wcall([$t220], "TextWidthC", [(await $.wv([$t220], "fCanvas", C, false)), (await $.idx((await $.wv([$t220], "StringArray", { get: async () => L0["stringarray"], set: async (v) => { L0["stringarray"] = v; }, local: true }, false)), [(await $.wv([$t220], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))], C)), $.sub((await $.wv([$t220], "ColRight", C, false)), (await $.wv([$t220], "ColLeft", C, false)))))))))))) {
            await $.wset([$t220], "k", (await $.wcall([$t220], "WrapText", [(await $.idx((await $.wv([$t220], "StringArray", { get: async () => L0["stringarray"], set: async (v) => { L0["stringarray"] = v; }, local: true }, false)), [(await $.wv([$t220], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), $.sub((await $.wv([$t220], "ColRight", C, false)), (await $.wv([$t220], "ColLeft", C, false))), null], { get: async () => L0["wraptext"], set: async (v) => { L0["wraptext"] = v; }, local: true })), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
            if ($.truthy($.gt((await $.wv([$t220], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), (await $.wv([$t220], "LinesCount", { get: async () => L0["linescount"], set: async (v) => { L0["linescount"] = v; }, local: true }, false))))) {
              await $.wset([$t220], "LinesCount", (await $.wv([$t220], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), { get: async () => L0["linescount"], set: async (v) => { L0["linescount"] = v; }, local: true });
            }
          }
        }
        await $.tick();
      }
    }
    if ($.truthy((await $.and_(($.gt(L0["linescount"], 1)), async () => $.not((await $.call(C, "HasSpaceForLines", [L0["linescount"]]))))))) {
      await $.stmt($.call(C, "NewPageInternal", []));
      await $.stmt($.call(C, "CheckHeaderDone", []));
    }
  }
  if ($.truthy((await $.and_(($.ne((await $.v(C, "fColumnHeaderList")), null)), async () => $.not((await $.v(C, "fColumnHeaderPrinted"))))))) {
    L0["i"] = $.add((await $.call(C, "length", [(await $.v(C, "fColumnHeaderList"))])), 2);
    if ($.truthy($.not((await $.call(C, "HasSpaceForLines", [L0["i"]]))))) {
      await $.stmt($.call(C, "NewPageInternal", []));
    }
    await $.stmt($.call(C, "PrintColumnHeaders", []));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))])))) {
    await $.set(C, "fColumnsUsedInGroup", true);
  }
  L0["parenthw"] = (await $.mcall((await $.v(C, "fCanvas")), "TextWidth", [")"]));
  await $.mset(L0["rowrect"], "Top", (await $.v(C, "fCurrentYPos")));
  await $.mset(L0["rowrect"], "Bottom", $.add((await $.mv(L0["rowrect"], "Top")), $.mul(L0["lh"], L0["linescount"])));
  await $.mset(L0["rowrect"], "Right", (await $.mv((await $.idx((await $.v(C, "fColumns")), [L0["max"]])), "ColRight")));
  if ($.truthy($.ne(L0["backgroundcolor"], (await $.v(C, "clNone"))))) {
    {
      const $t221 = (await $.v(C, "fCanvas"));
      await $.mset((await $.wv([$t221], "Brush", C, false)), "Style", (await $.wv([$t221], "bsSolid", C, false)));
      await $.mset((await $.wv([$t221], "Brush", C, false)), "Color", (await $.wv([$t221], "BackgroundColor", { get: async () => L0["backgroundcolor"], set: async (v) => { L0["backgroundcolor"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t221], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", (await $.mv((await $.idx((await $.wv([$t221], "fColumns", C, false)), [0])), "ColLeft")));
      await $.stmt((await $.wcall([$t221], "FillRect", [(await $.wv([$t221], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false))], C)));
      await $.mset((await $.wv([$t221], "Brush", C, false)), "Style", (await $.wv([$t221], "bsClear", C, false)));
      await $.mset((await $.wv([$t221], "Font", C, false)), "Color", (await $.wcall([$t221], "clAlways", [(await $.wv([$t221], "BackgroundColor", { get: async () => L0["backgroundcolor"], set: async (v) => { L0["backgroundcolor"] = v; }, local: true }, false))], C)));
    }
  }
  L0["line"] = "";
  { const $t222 = L0["max"];
    L0["i"] = 0;
    let $t223 = true;
    for (;;) {
      if (!$t223) { L0["i"] = $.succ(L0["i"], 1); }
      $t223 = false;
      if (!($.ord(L0["i"]) <= $.ord($t222))) break;
      L0["s"] = (await $.idx(L0["stringarray"], [L0["i"]]));
      L0["line"] = $.add($.add(L0["line"], (await $.call(C, "SynUnicodeToString", [L0["s"]]))), "\t");
      if ($.truthy($.ne(L0["s"], ""))) {
        {
          const $t224 = (await $.idx((await $.v(C, "fColumns")), [L0["i"]]));
          const $t225 = (await $.wv([$t224], "fCanvas", C, false));
          if ($.truthy($.gt((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.wv([$t224, $t225], "ColLeft", C, false))))) {
            if ($.truthy((await $.wv([$t224, $t225], "ColBold", C, false)))) {
              await $.mset((await $.wv([$t224, $t225], "Font", C, false)), "Style", $.add((await $.mv((await $.wv([$t224, $t225], "Font", C, false)), "Style")), [(await $.wv([$t224, $t225], "fsBold", C, false))]));
            }
            await $.wset([$t224, $t225], "Options", (await $.or_((await $.wv([$t224, $t225], "ETO_CLIPPED", C, false)), async () => (await $.wv([$t224, $t225], "TextFlags", C, false)))), { get: async () => L0["options"], set: async (v) => { L0["options"] = v; }, local: true });
            if ($.truthy($.ne((await $.mv((await $.wv([$t224, $t225], "Brush", C, false)), "Style")), (await $.wv([$t224, $t225], "bsClear", C, false))))) {
              await $.wset([$t224, $t225], "Options", (await $.or_((await $.wv([$t224, $t225], "Options", { get: async () => L0["options"], set: async (v) => { L0["options"] = v; }, local: true }, false)), async () => (await $.wv([$t224, $t225], "ETO_OPAQUE", C, false)))), { get: async () => L0["options"], set: async (v) => { L0["options"] = v; }, local: true });
            }
            await $.stmt((await $.wcall([$t224, $t225], "InternalUnicodeString", [(await $.wv([$t224, $t225], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t224, $t225], "PW", { get: async () => L0["pw"], set: async (v) => { L0["pw"] = v; }, local: true }, false)), async ($t226) => { await $.wset([$t224, $t225], "PW", $t226, { get: async () => L0["pw"], set: async (v) => { L0["pw"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t224, $t225], "PWLen", { get: async () => L0["pwlen"], set: async (v) => { L0["pwlen"] = v; }, local: true }, false)), async ($t227) => { await $.wset([$t224, $t225], "PWLen", $t227, { get: async () => L0["pwlen"], set: async (v) => { L0["pwlen"] = v; }, local: true }); }), (await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, true))], C)));
            if ($.truthy((await $.and_(($.eq((await $.wv([$t224, $t225], "ColAlign", C, false)), (await $.wv([$t224, $t225], "caCenter", C, false)))), async () => ($.gt((await $.mv((await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), "cx")), $.sub((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.wv([$t224, $t225], "ColLeft", C, false))))))))) {
              await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", $.sub($.sub((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.mv((await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), "cx"))), (await $.wv([$t224, $t225], "ParenthW", { get: async () => L0["parenthw"], set: async (v) => { L0["parenthw"] = v; }, local: true }, false))));
            } else {
              { const $t228 = (await $.wv([$t224, $t225], "ColAlign", C, false));
                if ($.eq($t228, (await $.wv([$t224, $t225], "caLeft", C, false)))) {
                  await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", (await $.wv([$t224, $t225], "ColLeft", C, false)));
                  if ($.truthy((await $.and_((await $.and_((await $.wv([$t224, $t225], "WordWrapLeftCols", C, false)), async () => ($.gt((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.wv([$t224, $t225], "ColLeft", C, false)))))), async () => ((await $.or_((await $.wcall([$t224, $t225], "HasCRLF", [(await $.wv([$t224, $t225], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], { get: async () => L0["hascrlf"], set: async (v) => { L0["hascrlf"] = v; }, local: true })), async () => ($.gt((await $.mv((await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), "cx")), $.sub((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.wv([$t224, $t225], "ColLeft", C, false)))))))))))) {
                    await $.stmt((await $.wcall([$t224, $t225], "WrapText", [(await $.wv([$t224, $t225], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), $.sub((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.wv([$t224, $t225], "ColLeft", C, false))), (await $.wv([$t224, $t225], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, true))], { get: async () => L0["wraptext"], set: async (v) => { L0["wraptext"] = v; }, local: true })));
                    await $.stmt((await $.wcall([$t224, $t225], "dec", [$.ref(async () => (await $.mv((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left")), async ($t229) => { await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", $t229); }), (await $.wv([$t224, $t225], "ParenthW", { get: async () => L0["parenthw"], set: async (v) => { L0["parenthw"] = v; }, local: true }, false))], C)));
                    { const $t230 = (await $.wcall([$t224, $t225], "high", [(await $.wv([$t224, $t225], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false))], C));
                      await $.wset([$t224, $t225], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
                      let $t231 = true;
                      for (;;) {
                        if (!$t231) { await $.wset([$t224, $t225], "j", $.succ((await $.wv([$t224, $t225], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                        $t231 = false;
                        if (!($.ord((await $.wv([$t224, $t225], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t230))) break;
                        await $.stmt((await $.wcall([$t224, $t225], "InternalUnicodeString", [(await $.idx((await $.wv([$t224, $t225], "Lines", { get: async () => L0["lines"], set: async (v) => { L0["lines"] = v; }, local: true }, false)), [(await $.wv([$t224, $t225], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), $.ref(async () => (await $.wv([$t224, $t225], "PW", { get: async () => L0["pw"], set: async (v) => { L0["pw"] = v; }, local: true }, false)), async ($t232) => { await $.wset([$t224, $t225], "PW", $t232, { get: async () => L0["pw"], set: async (v) => { L0["pw"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t224, $t225], "PWLen", { get: async () => L0["pwlen"], set: async (v) => { L0["pwlen"] = v; }, local: true }, false)), async ($t233) => { await $.wset([$t224, $t225], "PWLen", $t233, { get: async () => L0["pwlen"], set: async (v) => { L0["pwlen"] = v; }, local: true }); }), (await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, true))], C)));
                        if ($.truthy($.eq((await $.wv([$t224, $t225], "BiDiMode", C, false)), (await $.wv([$t224, $t225], "bdRightToLeft", C, false))))) {
                          await $.wset([$t224, $t225], "X", $.sub($.sub((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.mv((await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), "cx"))), (await $.wv([$t224, $t225], "ParenthW", { get: async () => L0["parenthw"], set: async (v) => { L0["parenthw"] = v; }, local: true }, false))), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
                        } else {
                          await $.wset([$t224, $t225], "X", (await $.wv([$t224, $t225], "ColLeft", C, false)), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
                        }
                        await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Top", $.add((await $.wv([$t224, $t225], "fCurrentYPos", C, false)), $.mul((await $.wv([$t224, $t225], "lh", { get: async () => L0["lh"], set: async (v) => { L0["lh"] = v; }, local: true }, false)), (await $.wv([$t224, $t225], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)))));
                        await $.stmt((await $.wcall([$t224, $t225], "ExtTextOutW", [(await $.wv([$t224, $t225], "Handle", C, false)), (await $.wv([$t224, $t225], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t224, $t225], "Options", { get: async () => L0["options"], set: async (v) => { L0["options"] = v; }, local: true }, false)), (await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, true)), (await $.wv([$t224, $t225], "PW", { get: async () => L0["pw"], set: async (v) => { L0["pw"] = v; }, local: true }, false)), (await $.wv([$t224, $t225], "PWLen", { get: async () => L0["pwlen"], set: async (v) => { L0["pwlen"] = v; }, local: true }, false)), null], C)));
                        await $.tick();
                      }
                    }
                    await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Top", (await $.wv([$t224, $t225], "fCurrentYPos", C, false)));
                    if ($.truthy((await $.wv([$t224, $t225], "ColBold", C, false)))) {
                      await $.mset((await $.wv([$t224, $t225], "Font", C, false)), "Style", $.sub((await $.mv((await $.wv([$t224, $t225], "Font", C, false)), "Style")), [(await $.wv([$t224, $t225], "fsBold", C, false))]));
                    }
                    continue;
                  } else {
                    if ($.truthy($.eq((await $.wv([$t224, $t225], "BiDiMode", C, false)), (await $.wv([$t224, $t225], "bdRightToleft", C, false))))) {
                      await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", $.sub($.sub((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.mv((await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), "cx"))), (await $.wv([$t224, $t225], "ParenthW", { get: async () => L0["parenthw"], set: async (v) => { L0["parenthw"] = v; }, local: true }, false))));
                    }
                  }
                }
                else if ($.eq($t228, (await $.wv([$t224, $t225], "caCenter", C, false)))) {
                  await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", $.add((await $.wv([$t224, $t225], "ColLeft", C, false)), $.shr(($.sub($.sub((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.wv([$t224, $t225], "ColLeft", C, false))), (await $.mv((await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), "cx")))), 1)));
                }
                else if ($.eq($t228, (await $.wv([$t224, $t225], "caRight", C, false)))) {
                  if ($.truthy($.eq((await $.wv([$t224, $t225], "BiDiMode", C, false)), (await $.wv([$t224, $t225], "bdLeftToRight", C, false))))) {
                    await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", $.sub($.sub((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.mv((await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), "cx"))), (await $.wv([$t224, $t225], "ParenthW", { get: async () => L0["parenthw"], set: async (v) => { L0["parenthw"] = v; }, local: true }, false))));
                  }
                }
                else if ($.eq($t228, (await $.wv([$t224, $t225], "caCurrency", C, false)))) {
                  if ($.truthy((await $.wv([$t224, $t225], "fNegsToParenthesesInCurrCols", C, false)))) {
                    await $.stmt((await $.wcall([$t224, $t225], "InternalUnicodeString", [(await $.wcall([$t224, $t225], "ConvertNegsToParentheses", [(await $.wv([$t224, $t225], "s", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), $.ref(async () => (await $.wv([$t224, $t225], "PW", { get: async () => L0["pw"], set: async (v) => { L0["pw"] = v; }, local: true }, false)), async ($t234) => { await $.wset([$t224, $t225], "PW", $t234, { get: async () => L0["pw"], set: async (v) => { L0["pw"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t224, $t225], "PWLen", { get: async () => L0["pwlen"], set: async (v) => { L0["pwlen"] = v; }, local: true }, false)), async ($t235) => { await $.wset([$t224, $t225], "PWLen", $t235, { get: async () => L0["pwlen"], set: async (v) => { L0["pwlen"] = v; }, local: true }); }), (await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, true))], C)));
                  }
                  await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", $.sub($.sub((await $.wv([$t224, $t225], "ColRight", C, false)), (await $.mv((await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), "cx"))), (await $.wv([$t224, $t225], "ParenthW", { get: async () => L0["parenthw"], set: async (v) => { L0["parenthw"] = v; }, local: true }, false))));
                }
              }
            }
            await $.stmt((await $.wcall([$t224, $t225], "dec", [$.ref(async () => (await $.mv((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left")), async ($t236) => { await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", $t236); }), (await $.wv([$t224, $t225], "ParenthW", { get: async () => L0["parenthw"], set: async (v) => { L0["parenthw"] = v; }, local: true }, false))], C)));
            await $.stmt((await $.wcall([$t224, $t225], "ExtTextOutW", [(await $.wv([$t224, $t225], "Handle", C, false)), $.add((await $.mv((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t224, $t225], "ParenthW", { get: async () => L0["parenthw"], set: async (v) => { L0["parenthw"] = v; }, local: true }, false))), (await $.wv([$t224, $t225], "fCurrentYPos", C, false)), (await $.wv([$t224, $t225], "Options", { get: async () => L0["options"], set: async (v) => { L0["options"] = v; }, local: true }, false)), (await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, true)), (await $.wv([$t224, $t225], "PW", { get: async () => L0["pw"], set: async (v) => { L0["pw"] = v; }, local: true }, false)), (await $.wv([$t224, $t225], "PWLen", { get: async () => L0["pwlen"], set: async (v) => { L0["pwlen"] = v; }, local: true }, false)), null], C)));
            if ($.truthy((await $.and_(($.lt((await $.wv([$t224, $t225], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wcall([$t224, $t225], "length", [(await $.wv([$t224, $t225], "LinkArray", { get: async () => L0["linkarray"], set: async (v) => { L0["linkarray"] = v; }, local: true }, false))], C)))), async () => ($.ne((await $.idx((await $.wv([$t224, $t225], "LinkArray", { get: async () => L0["linkarray"], set: async (v) => { L0["linkarray"] = v; }, local: true }, false)), [(await $.wv([$t224, $t225], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "")))))) {
              await $.mset((await $.wv([$t224, $t225], "r", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left", (await $.wcall([$t224, $t225], "PrinterPxToMmX", [(await $.mv((await $.wv([$t224, $t225], "rowrect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left"))], C)));
              await $.mset((await $.wv([$t224, $t225], "r", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top", (await $.wcall([$t224, $t225], "PrinterPxToMmX", [(await $.mv((await $.wv([$t224, $t225], "rowrect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Top"))], C)));
              await $.mset((await $.wv([$t224, $t225], "r", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "right", (await $.wcall([$t224, $t225], "PrinterPxToMmX", [$.add((await $.mv((await $.wv([$t224, $t225], "rowrect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "left")), $.idiv(($.sub((await $.mv((await $.wv([$t224, $t225], "rowrect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "right")), (await $.mv((await $.idx((await $.wv([$t224, $t225], "fColumns", C, false)), [0])), "ColLeft")))), ($.add((await $.wv([$t224, $t225], "max", { get: async () => L0["max"], set: async (v) => { L0["max"] = v; }, local: true }, false)), 1))))], C)));
              await $.mset((await $.wv([$t224, $t225], "r", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Bottom", (await $.wcall([$t224, $t225], "PrinterPxToMmX", [(await $.mv((await $.wv([$t224, $t225], "rowrect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Bottom"))], C)));
              await $.stmt((await $.wcall([$t224, $t225], "AddLink", [(await $.idx((await $.wv([$t224, $t225], "LinkArray", { get: async () => L0["linkarray"], set: async (v) => { L0["linkarray"] = v; }, local: true }, false)), [(await $.wv([$t224, $t225], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), (await $.wv([$t224, $t225], "r", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false))], C)));
            }
            await $.stmt((await $.wcall([$t224, $t225], "inc", [$.ref(async () => (await $.mv((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left")), async ($t237) => { await $.mset((await $.wv([$t224, $t225], "RowRect", { get: async () => L0["rowrect"], set: async (v) => { L0["rowrect"] = v; }, local: true }, false)), "Left", $t237); }), $.add((await $.mv((await $.wv([$t224, $t225], "size", { get: async () => L0["size"], set: async (v) => { L0["size"] = v; }, local: true }, false)), "cx")), (await $.wv([$t224, $t225], "ParenthW", { get: async () => L0["parenthw"], set: async (v) => { L0["parenthw"] = v; }, local: true }, false)))], C)));
            if ($.truthy((await $.wv([$t224, $t225], "ColBold", C, false)))) {
              await $.mset((await $.wv([$t224, $t225], "Font", C, false)), "Style", $.sub((await $.mv((await $.wv([$t224, $t225], "Font", C, false)), "Style")), [(await $.wv([$t224, $t225], "fsBold", C, false))]));
            }
          }
        }
      }
      await $.tick();
    }
  }
  if ($.truthy((await $.or_($.not((await $.v(C, "fDrawTextAcrossColsDrawingHeader"))), async () => $.not((await $.v(C, "fColumnHeaderPrintedAtLeastOnce"))))))) {
    { const $t238 = await $.iset(L0["line"], [(await $.call(C, "length", [L0["line"]]))], "\r"); if ($t238 !== undefined) { L0["line"] = $t238; } }
    L0["line"] = $.add(L0["line"], "\n");
    await $.set(C, "fCanvasText", $.add((await $.v(C, "fCanvasText")), L0["line"]));
  }
  if ($.truthy($.ne(L0["backgroundcolor"], (await $.v(C, "clNone"))))) {
    await $.mset((await $.mv((await $.v(C, "fCanvas")), "Font")), "Color", (await $.v(C, "clBlack")));
  }
  if ($.truthy((await $.and_($.not((await $.v(C, "fDrawTextAcrossColsDrawingHeader"))), async () => ($.gt((await $.v(C, "fColumnsRowLineHeight")), L0["linescount"])))))) {
    L0["linescount"] = (await $.v(C, "fColumnsRowLineHeight"));
  }
  { const $t239 = L0["linescount"];
    L0["i"] = 2;
    let $t240 = true;
    for (;;) {
      if (!$t240) { L0["i"] = $.succ(L0["i"], 1); }
      $t240 = false;
      if (!($.ord(L0["i"]) <= $.ord($t239))) break;
      await $.stmt($.call(C, "NewLine", []));
      await $.tick();
    }
  }
  if ($.truthy((await $.and_((await $.v(C, "fColumnsWithBottomGrayLine")), async () => ($.ne((await $.mv(L0["rowrect"], "Right")), 0)))))) {
    L0["c"] = (await $.mv((await $.mv((await $.v(C, "fCanvas")), "Pen")), "Color"));
    await $.mset((await $.mv((await $.v(C, "fCanvas")), "Pen")), "Color", (await $.v(C, "clLtGray")));
    L0["h"] = $.sub($.shr(L0["lh"], 1), $.shr(($.mul(L0["lh"], 15)), 4));
    await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t241) => { await $.set(C, "fCurrentYPos", $t241); }), L0["h"]])));
    await $.stmt((await $.call(C, "LineInternal", [(await $.mv((await $.call(C, "GetColumnRec", [0])), "ColLeft")), (await $.mv(L0["rowrect"], "Right")), false])));
    await $.stmt((await $.call(C, "inc", [$.ref(async () => (await $.v(C, "fCurrentYPos")), async ($t242) => { await $.set(C, "fCurrentYPos", $t242); }), L0["h"]])));
    await $.mset((await $.mv((await $.v(C, "fCanvas")), "Pen")), "Color", L0["c"]);
  }
  await $.stmt($.call(C, "NewLine", []));
  return L0.result;
}, {"params": ["StringArray", "LinkArray", "BackgroundColor"], "kind": "procedure", "ptypes": [null, null, "TColor"]});
  U.method("TGDIPages", "DrawLinesInCurrencyCols", async function DrawLinesInCurrencyCols(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"doublelines": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["doublelines"]);
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt($.call(C, "CheckYPos", []));
  if ($.truthy((await $.and_(($.ne((await $.v(C, "fColumnHeaderList")), null)), async () => $.not((await $.v(C, "fColumnHeaderPrinted"))))))) {
    L0["i"] = $.add((await $.call(C, "length", [(await $.v(C, "fColumnHeaderList"))])), 2);
    if ($.truthy($.not((await $.call(C, "HasSpaceForLines", [L0["i"]]))))) {
      await $.stmt($.call(C, "NewPageInternal", []));
    }
    await $.stmt($.call(C, "PrintColumnHeaders", []));
  }
  { const $t243 = (await $.call(C, "high", [(await $.v(C, "fColumns"))]));
    L0["i"] = 0;
    let $t244 = true;
    for (;;) {
      if (!$t244) { L0["i"] = $.succ(L0["i"], 1); }
      $t244 = false;
      if (!($.ord(L0["i"]) <= $.ord($t243))) break;
      {
        const $t245 = (await $.idx((await $.v(C, "fColumns")), [L0["i"]]));
        if ($.truthy($.eq((await $.wv([$t245], "ColAlign", C, false)), (await $.wv([$t245], "caCurrency", C, false))))) {
          await $.stmt((await $.wcall([$t245], "LineInternal", [(await $.wv([$t245], "ColLeft", C, false)), (await $.wv([$t245], "ColRight", C, false)), (await $.wv([$t245], "doublelines", { get: async () => L0["doublelines"], set: async (v) => { L0["doublelines"] = v; }, local: true }, false))], C)));
        }
      }
      await $.tick();
    }
  }
  await $.stmt($.call(C, "NewLine", []));
  return L0.result;
}, {"params": ["doublelines"], "kind": "procedure", "ptypes": ["boolean"]});
  U.method("TGDIPages", "ColumnHeadersNeeded", async function ColumnHeadersNeeded(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.set(C, "fColumnHeaderPrinted", false);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "Clear", async function Clear(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["clearobjects"] = $.fn(async function ClearObjects(p0) {
  const L1 = {"list": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L1, ["list"]);
  { const $t246 = $.sub((await $.mv(L1["list"], "Count")), 1);
    L1["i"] = 0;
    let $t247 = true;
    for (;;) {
      if (!$t247) { L1["i"] = $.succ(L1["i"], 1); }
      $t247 = false;
      if (!($.ord(L1["i"]) <= $.ord($t246))) break;
      await $.mcall((await $.idx((await $.mv(L1["list"], "Objects")), [L1["i"]])), "Free", []);
      await $.tick();
    }
  }
  await $.mcall(L1["list"], "Clear", []);
  return L1.result;
});
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fCanvas"))])))) {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCanvas")), async ($t248) => { await $.set(C, "fCanvas", $t248); })])));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "fGroupPage"))])))) {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fGroupPage")), async ($t249) => { await $.set(C, "fGroupPage", $t249); })])));
  }
  await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "fCurrentMetaFile")), async ($t250) => { await $.set(C, "fCurrentMetaFile", $t250); })])));
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "fPages")), async ($t251) => { await $.set(C, "fPages", $t251); }), 0])));
  await $.stmt((await $.callv(L0["clearobjects"], [(await $.v(C, "fBookmarks"))])));
  await $.stmt((await $.callv(L0["clearobjects"], [(await $.v(C, "fLinks"))])));
  await $.stmt((await $.callv(L0["clearobjects"], [(await $.v(C, "fOutline"))])));
  await $.stmt($.call(C, "ClearHeaders", []));
  await $.stmt($.call(C, "ClearFooters", []));
  await $.stmt($.call(C, "ClearColumns", []));
  await $.stmt((await $.call(C, "SetTabStops", [[20]])));
  await $.set(C, "fCanvasText", "");
  await $.set(C, "fLinksCurrent", (-(1)));
  await $.set(C, "fSavedCount", 0);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "ClearHeaders", async function ClearHeaders(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "fHeaderLines")), "Clear", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "ClearFooters", async function ClearFooters(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.mcall((await $.v(C, "fFooterLines")), "Clear", []);
  await $.set(C, "fPagesToFooterText", "");
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "ClearColumns", async function ClearColumns(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "fColumns")), async ($t252) => { await $.set(C, "fColumns", $t252); }), 0])));
  await $.stmt($.call(C, "ClearColumnHeaders", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "ClearColumnHeaders", async function ClearColumnHeaders(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.set(C, "fColumnHeaderList", null);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGDIPages", "CreatePictureMetaFile", async function CreatePictureMetaFile(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"width": $.copyArg(p0), "height": $.copyArg(p1), "metacanvas": $.asRef(p2), result: null};
  await $.fixArgs(L0, ["width", "height"]);
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = null;
  } else {
    L0["result"] = (await $.call(C, "CreateMetaFile", [(await $.call(C, "MmToPrinterPxX", [L0["width"]])), (await $.call(C, "MmToPrinterPxY", [L0["height"]]))]));
    await L0["metacanvas"].set((await $.call(C, "CreateMetafileCanvas", [L0["result"]])));
  }
  return L0.result;
}, {"params": ["Width", "Height", "MetaCanvas"], "kind": "function", "ptypes": ["integer", "integer", "TCanvas"]});
  U.method("TGDIPages", "DrawTextFmt", async function DrawTextFmt(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "args": $.copyArg(p1), "withnewline": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["s", "args", "withnewline"]);
  await $.stmt((await $.call(C, "DrawText", [(await $.call(C, "format", [L0["s"], L0["args"]])), L0["withnewline"]])));
  return L0.result;
}, {"params": ["s", "Args", "withNewLine"], "kind": "procedure", "ptypes": ["String", "ArrayOfConst", "boolean"]});
  U.method("TGDIPages", "TitleFlags", async function TitleFlags(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.or_((await $.or_(($.idiv(($.mul((await $.mv((await $.v(C, "Font")), "Size")), 12)), 10)), async () => (await $.v(C, "FORMAT_BOLD")))), async () => (await $.v(C, "FORMAT_LEFT"))));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "TextWidth", async function TextWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"text": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["text"]);
  if ($.truthy($.eq(Self, null))) {
    L0["result"] = 0;
  } else {
    if ($.truthy($.eq((await $.v(C, "fCanvas")), null))) {
      L0["result"] = (await $.call(C, "TextWidthC", [(await $.v(C, "Canvas")), L0["text"]]));
    } else {
      L0["result"] = (await $.call(C, "TextWidthC", [(await $.v(C, "fCanvas")), L0["text"]]));
    }
    L0["result"] = (await $.call(C, "PrinterPxToMmX", [L0["result"]]));
  }
  return L0.result;
}, {"params": ["Text"], "kind": "function", "ptypes": ["SynUnicode"]});
  U.method("TGDIPages", "ShowPreviewForm", async function ShowPreviewForm(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"visiblebuttons": $.copyArg(p0), result: undefined, "oldparent": null, "i": 0, "y": 0, "w": 0, "m": null, "leftpanel": null};
  await $.fixArgs(L0, ["visiblebuttons"]);
  L0["panelwidth"] = 128;
  L0["copymenus"] = $.fn(async function CopyMenus(p0, p1) {
  const L1 = {"source": $.copyArg(p0), "dest": $.copyArg(p1), result: undefined, "i": 0, "sub": null};
  await $.fixArgs(L1, ["source", "dest"]);
  { const $t253 = $.sub((await $.mv(L1["source"], "Count")), 1);
    L1["i"] = 0;
    let $t254 = true;
    for (;;) {
      if (!$t254) { L1["i"] = $.succ(L1["i"], 1); }
      $t254 = false;
      if (!($.ord(L1["i"]) <= $.ord($t253))) break;
      {
        const $t255 = (await $.idx((await $.mv(L1["source"], "Items")), [L1["i"]]));
        await $.wset([$t255], "Sub", (await $.mcall((await $.wv([$t255], "TMenuItem", C, false)), "Create", [(await $.wv([$t255], "PreviewForm", C, false))])), { get: async () => L1["sub"], set: async (v) => { L1["sub"] = v; }, local: true });
        await $.mset((await $.wv([$t255], "Sub", { get: async () => L1["sub"], set: async (v) => { L1["sub"] = v; }, local: true }, false)), "Tag", (await $.wv([$t255], "Tag", C, false)));
        await $.mset((await $.wv([$t255], "Sub", { get: async () => L1["sub"], set: async (v) => { L1["sub"] = v; }, local: true }, false)), "OnClick", (await $.wv([$t255], "OnClick", C, true)));
        await $.mset((await $.wv([$t255], "Sub", { get: async () => L1["sub"], set: async (v) => { L1["sub"] = v; }, local: true }, false)), "Caption", (await $.wv([$t255], "Caption", C, false)));
        await $.stmt((await $.mcall((await $.wv([$t255], "Dest", { get: async () => L1["dest"], set: async (v) => { L1["dest"] = v; }, local: true }, false)), "Add", [(await $.wv([$t255], "Sub", { get: async () => L1["sub"], set: async (v) => { L1["sub"] = v; }, local: true }, false))])));
        await $.stmt((await $.wcall([$t255], "CopyMenus", [(await $.idx((await $.mv((await $.wv([$t255], "Source", { get: async () => L1["source"], set: async (v) => { L1["source"] = v; }, local: true }, false)), "Items")), [(await $.wv([$t255], "i", { get: async () => L1["i"], set: async (v) => { L1["i"] = v; }, local: true }, false))])), (await $.wv([$t255], "Sub", { get: async () => L1["sub"], set: async (v) => { L1["sub"] = v; }, local: true }, false))], { get: async () => L0["copymenus"], set: async (v) => { L0["copymenus"] = v; }, local: true })));
      }
      await $.tick();
    }
  }
  return L1.result;
});
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  await $.set(C, "PreviewForm", (await $.mcall((await $.v(C, "TForm")), "Create", [null])));
  try {
    await $.mset((await $.v(C, "PreviewForm")), "Position", (await $.v(C, "poScreenCenter")));
    await $.mset((await $.v(C, "PreviewForm")), "Height", $.sub((await $.mv((await $.v(C, "Screen")), "Height")), 64));
    await $.mset((await $.v(C, "PreviewForm")), "Caption", (await $.v(C, "Caption")));
    await $.mset((await $.mv((await $.v(C, "PreviewForm")), "Font")), "Name", "Tahoma");
    {
      const $t256 = (await $.v(C, "PaperSize"));
      if ($.truthy($.eq((await $.wv([$t256], "cy", C, false)), 0))) {
        await $.wset([$t256], "y", 1, { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
      } else {
        await $.wset([$t256], "y", (await $.wv([$t256], "cy", C, false)), { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
      }
      await $.mset((await $.wv([$t256], "PreviewForm", C, false)), "Width", $.add($.idiv(($.mul((await $.wv([$t256], "cx", C, false)), (await $.mv((await $.wv([$t256], "PreviewForm", C, false)), "Height")))), (await $.wv([$t256], "y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))), ($.add(64, (await $.wv([$t256], "PANELWIDTH", { get: async () => L0["panelwidth"], set: async (v) => { L0["panelwidth"] = v; }, local: true }, false))))));
    }
    if ($.truthy($.gt((await $.mv((await $.v(C, "PreviewForm")), "Width")), (await $.mv((await $.v(C, "Screen")), "WorkAreaWidth"))))) {
      await $.mset((await $.v(C, "PreviewForm")), "WindowState", (await $.v(C, "wsMaximized")));
    }
    L0["leftpanel"] = (await $.mcall((await $.v(C, "TPanel")), "Create", [(await $.v(C, "PreviewForm"))]));
    await $.mset(L0["leftpanel"], "Parent", (await $.v(C, "PreviewForm")));
    await $.mset(L0["leftpanel"], "Width", L0["panelwidth"]);
    await $.mset(L0["leftpanel"], "Align", (await $.v(C, "alLeft")));
    L0["w"] = $.sub((await $.mv(L0["leftpanel"], "ClientWidth")), 8);
    await $.set(C, "PreviewPageCountLabel", (await $.mcall((await $.v(C, "TLabel")), "Create", [(await $.v(C, "PreviewForm"))])));
    await $.mset((await $.v(C, "PreviewPageCountLabel")), "Transparent", true);
    await $.mset((await $.v(C, "PreviewPageCountLabel")), "Parent", L0["leftpanel"]);
    await $.stmt((await $.mcall((await $.v(C, "PreviewPageCountLabel")), "SetBounds", [4, 24, $.sub(L0["w"], 4), 24])));
    await $.mset((await $.v(C, "PreviewPageCountLabel")), "Alignment", (await $.mv((await $.v(C, "Classes")), "taCenter")));
    await $.mset((await $.v(C, "PreviewPageCountLabel")), "AutoSize", false);
    await $.mset((await $.v(C, "PreviewPageCountLabel")), "Caption", (await $.call(C, "format", [(await $.v(C, "sPageN")), [(await $.v(C, "Page")), (await $.v(C, "PageCount"))]])));
    await $.stmt((await $.call(C, "PopupMenuPopup", [null])));
    await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.v(C, "PreviewButtons")), async ($t257) => { await $.set(C, "PreviewButtons", $t257); }), (await $.mv((await $.mv((await $.v(C, "PopupMenu")), "Items")), "Count"))])));
    L0["y"] = 48;
    { const $t258 = (await $.call(C, "High", [(await $.v(C, "PreviewButtons"))]));
      L0["i"] = 0;
      let $t259 = true;
      for (;;) {
        if (!$t259) { L0["i"] = $.succ(L0["i"], 1); }
        $t259 = false;
        if (!($.ord(L0["i"]) <= $.ord($t258))) break;
        L0["m"] = (await $.idx((await $.mv((await $.v(C, "PopupMenu")), "Items")), [L0["i"]]));
        { const $t260 = await $.iset((await $.v(C, "PreviewButtons")), [L0["i"]], (await $.mcall((await $.v(C, "TButton")), "Create", [(await $.v(C, "PreviewForm"))]))); if ($t260 !== undefined) { await $.set(C, "PreviewButtons", $t260); } }
        {
          const $t261 = (await $.idx((await $.v(C, "PreviewButtons")), [L0["i"]]));
          await $.wset([$t261], "Parent", (await $.wv([$t261], "LeftPanel", { get: async () => L0["leftpanel"], set: async (v) => { L0["leftpanel"] = v; }, local: true }, false)), C);
          await $.stmt((await $.wcall([$t261], "SetBounds", [4, (await $.wv([$t261], "y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), (await $.wv([$t261], "W", { get: async () => L0["w"], set: async (v) => { L0["w"] = v; }, local: true }, false)), 32], C)));
          await $.wset([$t261], "Enabled", (await $.mv((await $.wv([$t261], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), "Enabled")), C);
          await $.wset([$t261], "Caption", (await $.mv((await $.wv([$t261], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), "Caption")), C);
          await $.wset([$t261], "Tag", (await $.mv((await $.wv([$t261], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), "Tag")), C);
          await $.wset([$t261], "OnClick", (await $.wv([$t261], "PopupMenuItemClick", C, true)), C);
          if ($.truthy($.gt((await $.mv((await $.wv([$t261], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), "Count")), 0))) {
            await $.wset([$t261], "PopupMenu", (await $.mcall((await $.wv([$t261], "PopupMenuClass", C, false)), "Create", [(await $.wv([$t261], "PreviewForm", C, false))])), C);
            await $.stmt((await $.wcall([$t261], "CopyMenus", [(await $.wv([$t261], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t261], "PopupMenu", C, false)), "Items"))], { get: async () => L0["copymenus"], set: async (v) => { L0["copymenus"] = v; }, local: true })));
          }
          if ($.truthy($.in_((await $.wcall([$t261], "TGdiPagePreviewButton", [$.add((await $.wv([$t261], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)], C)), (await $.wv([$t261], "VisibleButtons", { get: async () => L0["visiblebuttons"], set: async (v) => { L0["visiblebuttons"] = v; }, local: true }, false))))) {
            { const $t262 = (await $.wcall([$t261], "TGdiPagePreviewButton", [$.add((await $.wv([$t261], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1)], C));
              if ($.eq($t262, (await $.wv([$t261], "rPrint", C, false)))) {
                await $.wset([$t261], "Height", 60, C);
                await $.stmt((await $.wcall([$t261], "inc", [$.ref(async () => (await $.wv([$t261], "y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), async ($t263) => { await $.wset([$t261], "y", $t263, { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }); }), 64], C)));
                await $.wset([$t261], "Default", (await $.wv([$t261], "true", C, false)), C);
              }
              else if ($.eq($t262, (await $.wv([$t261], "rClose", C, false))) || $.eq($t262, (await $.wv([$t261], "rNextPage", C, false))) || $.eq($t262, (await $.wv([$t261], "rPreviousPage", C, false)))) {
                await $.wset([$t261], "Height", 48, C);
                await $.stmt((await $.wcall([$t261], "inc", [$.ref(async () => (await $.wv([$t261], "y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), async ($t264) => { await $.wset([$t261], "y", $t264, { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }); }), 52], C)));
              }
              else if ($.eq($t262, (await $.wv([$t261], "rGotoPage", C, false))) || $.eq($t262, (await $.wv([$t261], "rZoom", C, false))) || $.eq($t262, (await $.wv([$t261], "rBookmarks", C, false))) || $.eq($t262, (await $.wv([$t261], "rExportPDF", C, false)))) {
                await $.stmt((await $.wcall([$t261], "inc", [$.ref(async () => (await $.wv([$t261], "y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), async ($t265) => { await $.wset([$t261], "y", $t265, { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }); }), 48], C)));
              }
              else {
                await $.stmt((await $.wcall([$t261], "inc", [$.ref(async () => (await $.wv([$t261], "y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), async ($t266) => { await $.wset([$t261], "y", $t266, { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }); }), 36], C)));
              }
            }
          } else {
            await $.mset((await $.wv([$t261], "M", { get: async () => L0["m"], set: async (v) => { L0["m"] = v; }, local: true }, false)), "Visible", (await $.wv([$t261], "false", C, false)));
            await $.wset([$t261], "Visible", (await $.wv([$t261], "false", C, false)), C);
          }
        }
        await $.tick();
      }
    }
    L0["oldparent"] = (await $.v(C, "Parent"));
    await $.set(C, "Parent", (await $.v(C, "PreviewForm")));
    await $.set(C, "Align", (await $.v(C, "alClient")));
    await $.set(C, "Zoom", (await $.v(C, "PAGE_FIT")));
    try {
      await $.mset((await $.v(C, "PreviewForm")), "ActiveControl", Self);
      await $.mcall((await $.v(C, "PreviewForm")), "ShowModal", []);
    } finally {
      await $.set(C, "Parent", L0["oldparent"]);
    }
  } finally {
    await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "PreviewForm")), async ($t267) => { await $.set(C, "PreviewForm", $t267); })])));
    await $.stmt((await $.call(C, "Finalize", [(await $.v(C, "PreviewButtons"))])));
  }
  return L0.result;
}, {"params": ["VisibleButtons"], "kind": "procedure", "ptypes": ["TGdiPagePreviewButtons"]});
  U.method("TGDIPages", "GetRightMarginPos", async function GetRightMarginPos(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "PrinterPxToMmX", [$.sub((await $.mv((await $.v(C, "fPhysicalSizePx")), "x")), (await $.mv((await $.v(C, "fPageMarginsPx")), "right")))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGDIPages", "NewPopupMenuItem", async function NewPopupMenuItem(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"acaption": $.copyArg(p0), "tag": $.copyArg(p1), "submenu": $.copyArg(p2), "onclick": $.copyArg(p3), "imageindex": $.copyArg(p4), result: null};
  await $.fixArgs(L0, ["acaption", "tag", "submenu", "onclick", "imageindex"]);
  if ($.truthy((await $.or_(($.eq(Self, null)), async () => ($.eq((await $.v(C, "PopupMenu")), null)))))) {
    L0["result"] = null;
    return L0.result;
  }
  L0["result"] = (await $.mcall((await $.v(C, "TMenuItem")), "Create", [(await $.v(C, "PopupMenu"))]));
  await $.mset(L0["result"], "Caption", L0["acaption"]);
  await $.mset(L0["result"], "Tag", L0["tag"]);
  if ($.truthy((await $.call(C, "Assigned", [L0["onclick"]])))) {
    await $.mset(L0["result"], "OnClick", L0["onclick"]);
  } else {
    await $.mset(L0["result"], "OnClick", (await $.ref_(C, "PopupMenuItemClick")));
  }
  if ($.truthy($.ge(L0["imageindex"], 0))) {
    await $.mset(L0["result"], "ImageIndex", L0["imageindex"]);
  }
  if ($.truthy($.eq(L0["submenu"], null))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "PopupMenu")), "Items")), "Add", [L0["result"]])));
  } else {
    await $.stmt((await $.mcall(L0["submenu"], "Add", [L0["result"]])));
  }
  return L0.result;
}, {"params": ["aCaption", "Tag", "SubMenu", "OnClick", "ImageIndex"], "kind": "function", "ptypes": ["String", "integer", "TMenuItem", "TNotifyEvent", "integer"]});
  U.method("TGDIPages", "PopupMenuItemClick", async function PopupMenuItemClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "comp": null, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mcall(L0["sender"], "InheritsFrom", [(await $.v(C, "TComponent"))]))))) {
    return L0.result;
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnPopupMenuClick"))])))) {
    if ($.truthy((await $.or_(($.eq((await $.mv(L0["comp"], "Tag")), 0)), async () => ($.gt((await $.mv(L0["comp"], "Tag")), (await $.v(C, "PageCount")))))))) {
      await $.stmt((await $.call(C, "OnPopupMenuClick", [L0["sender"]])));
    }
  }
  { const $t268 = (-((await $.mv(L0["comp"], "Tag"))));
    if ($.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rNone"))])))) {
      return L0.result;
    }
    else if ($.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rNextPage"))])))) {
      await $.set(C, "Page", $.add((await $.v(C, "Page")), 1));
    }
    else if ($.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rPreviousPage"))])))) {
      await $.set(C, "Page", $.sub((await $.v(C, "Page")), 1));
    }
    else if ($.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rPageAsText"))])))) {
      if ($.truthy($.gt((await $.v(C, "Page")), 0))) {
        await $.mset((await $.v(C, "Clipboard")), "AsText", (await $.mv((await $.idx((await $.v(C, "fPages")), [$.sub((await $.v(C, "Page")), 1)])), "Text")));
      }
    }
    else if ($.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rPrint"))])))) {
      if ($.truthy((await $.call(C, "PrintPages", [(-(1)), (-(1))])))) {
        if ($.truthy($.ne((await $.v(C, "PreviewForm")), null))) {
          await $.mcall((await $.v(C, "PreviewForm")), "Close", []);
        }
      }
    }
    else if ($.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rExportPDF"))])))) {
      await $.stmt((await $.call(C, "ExportPDF", ["", true])));
    }
    else if ($.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rClose"))])))) {
      if ($.truthy($.ne((await $.v(C, "PreviewForm")), null))) {
        await $.mcall((await $.v(C, "PreviewForm")), "Close", []);
      }
    }
    else if ($.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rGotoPage"))]))) || $.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rZoom"))]))) || $.eq($t268, (await $.call(C, "ord", [(await $.v(C, "rBookmarks"))])))) {
      if ($.truthy((await $.and_((await $.mcall(L0["sender"], "InheritsFrom", [(await $.v(C, "TButton"))])), async () => ($.ne((await $.v(C, "PreviewButtons")), null)))))) {
        {
          const $t269 = (await $.idx((await $.v(C, "PreviewButtons")), [$.sub((-(1)), (await $.mv(L0["comp"], "Tag")))]));
          const $t270 = (await $.mcall((await $.wv([$t269], "PreviewForm", C, false)), "ClientToScreen", [(await $.wcall([$t269], "Point", [(await $.wv([$t269], "Left", C, false)), $.add((await $.wv([$t269], "Top", C, false)), (await $.wv([$t269], "Height", C, false)))], C))]));
          await $.stmt((await $.mcall((await $.wv([$t269, $t270], "PopupMenu", C, false)), "Popup", [(await $.wv([$t269, $t270], "X", C, false)), (await $.wv([$t269, $t270], "Y", C, false))])));
        }
      }
    }
    else if ($.inRange($t268, 991, 1999)) {
      await $.set(C, "Zoom", $.sub((-(1000)), (await $.mv(L0["comp"], "Tag"))));
    }
    else if ($.inRange($t268, 2000, 4000)) {
      L0["i"] = $.sub((-(2000)), (await $.mv(L0["comp"], "Tag")));
      if ($.truthy($.lt((await $.call(C, "cardinal", [L0["i"]])), (await $.call(C, "cardinal", [(await $.mv((await $.v(C, "fOutline")), "Count"))]))))) {
        {
          const $t271 = (await $.call(C, "TGDIPagereference", [(await $.idx((await $.mv((await $.v(C, "fOutline")), "Objects")), [L0["i"]]))]));
          await $.stmt((await $.wcall([$t271], "GotoPosition", [(await $.wv([$t271], "Page", C, false)), (await $.mv((await $.wv([$t271], "Rect", C, false)), "Top"))], C)));
        }
      }
    }
    else {
      if ($.truthy($.le((await $.call(C, "Cardinal", [(await $.mv(L0["comp"], "Tag"))])), (await $.call(C, "Cardinal", [(await $.v(C, "PageCount"))]))))) {
        await $.set(C, "Page", (await $.mv(L0["comp"], "Tag")));
      }
    }
  }
  if ($.truthy($.ne((await $.v(C, "PreviewForm")), null))) {
    await $.stmt($.call(C, "SetFocus", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGDIPages", "InternalUnicodeString", async function InternalUnicodeString(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "pw": $.asRef(p1), "pwlen": $.asRef(p2), "size": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["s", "size"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnStringToUnicode"))])))) {
    await $.set(C, "fInternalUnicodeString", (await $.call(C, "OnStringToUnicode", [L0["s"]])));
    await L0["pw"].set((await $.call(C, "pointer", [(await $.v(C, "fInternalUnicodeString"))])));
    await L0["pwlen"].set((await $.call(C, "length", [(await $.v(C, "fInternalUnicodeString"))])));
  } else {
    await L0["pw"].set((await $.call(C, "pointer", [L0["s"]])));
    await L0["pwlen"].set((await $.call(C, "length", [L0["s"]])));
  }
  if ($.truthy($.ne(L0["size"], null))) {
    await $.mset(L0["size"], "cx", 0);
    await $.mset(L0["size"], "cy", 0);
    await $.stmt((await $.call(C, "GetTextExtentPoint32W", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), (await L0["pw"].get()), (await L0["pwlen"].get()), L0["size"]])));
  }
  return L0.result;
}, {"params": ["s", "PW", "PWLen", "size"], "kind": "procedure", "ptypes": ["SynUnicode", "PWideChar", "integer", "PSize"]});
  U.method("TGDIPages", "PopupMenuPopup", async function PopupMenuPopup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p": '', "pagefromto": '', "pagen": '', "m": null, "m2": null, "i": 0, "j": 0, "k": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["addpage"] = $.fn(async function AddPage(p0) {
  const L1 = {"menu": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["menu"]);
  await $.mset((await $.call(C, "NewPopupMenuItem", [(await $.call(C, "format", [L0["pagen"], [L0["i"]]])), L0["i"], L1["menu"]])), "Enabled", $.ne(L0["i"], (await $.v(C, "Page"))));
  return L1.result;
});
  {
    const $t272 = (await $.mv((await $.v(C, "PopupMenu")), "Items"));
    if ($.truthy($.eq((await $.wv([$t272], "Count", C, false)), 0))) {
      return L0.result;
    } else {
      while ($.truthy($.gt((await $.wv([$t272], "Count", C, false)), (await $.wcall([$t272], "ord", [(await $.wv([$t272], "rClose", C, false))], C))))) {
        await $.stmt((await $.wcall([$t272], "Delete", [(await $.wcall([$t272], "ord", [(await $.wv([$t272], "rClose", C, false))], C))], C)));
        await $.tick();
      }
    }
  }
  await $.mset((await $.idx((await $.mv((await $.v(C, "PopupMenu")), "Items")), [$.sub((await $.call(C, "Ord", [(await $.v(C, "rNextPage"))])), 1)])), "Enabled", $.lt((await $.v(C, "Page")), (await $.v(C, "PageCount"))));
  await $.mset((await $.idx((await $.mv((await $.v(C, "PopupMenu")), "Items")), [$.sub((await $.call(C, "Ord", [(await $.v(C, "rPreviousPage"))])), 1)])), "Enabled", $.gt((await $.v(C, "Page")), 1));
  L0["m"] = (await $.idx((await $.mv((await $.v(C, "PopupMenu")), "Items")), [$.sub((await $.call(C, "Ord", [(await $.v(C, "rGoToPage"))])), 1)]));
  while ($.truthy($.gt((await $.mv(L0["m"], "Count")), 0))) {
    await $.stmt((await $.mcall(L0["m"], "Delete", [0])));
    await $.tick();
  }
  await $.mset(L0["m"], "Enabled", $.gt((await $.v(C, "PageCount")), 1));
  if ($.truthy($.ge((await $.v(C, "PageCount")), 1))) {
    L0["p"] = (await $.call(C, "pointer", [(await $.call(C, "string", [(await $.v(C, "sReportPopupMenu2"))]))]));
    L0["pagefromto"] = (await $.call(C, "GetNextItemS", [$.ref(async () => L0["p"], async ($t273) => { L0["p"] = $t273; })]));
    L0["pagen"] = (await $.call(C, "GetNextItemS", [$.ref(async () => L0["p"], async ($t274) => { L0["p"] = $t274; })]));
    if ($.truthy($.gt((await $.v(C, "PageCount")), 10))) {
      { const $t275 = $.idiv((await $.v(C, "PageCount")), 10);
        L0["j"] = 0;
        let $t276 = true;
        for (;;) {
          if (!$t276) { L0["j"] = $.succ(L0["j"], 1); }
          $t276 = false;
          if (!($.ord(L0["j"]) <= $.ord($t275))) break;
          L0["k"] = $.add($.mul(L0["j"], 10), 1);
          if ($.truthy($.gt(L0["k"], (await $.v(C, "PageCount"))))) {
            break;
          }
          L0["m2"] = (await $.call(C, "NewPopupMenuItem", [(await $.call(C, "format", [L0["pagefromto"], [L0["k"], $.add(L0["k"], 9)]])), (-(800)), L0["m"]]));
          { const $t277 = $.add(L0["k"], 9);
            L0["i"] = L0["k"];
            let $t278 = true;
            for (;;) {
              if (!$t278) { L0["i"] = $.succ(L0["i"], 1); }
              $t278 = false;
              if (!($.ord(L0["i"]) <= $.ord($t277))) break;
              if ($.truthy($.gt(L0["i"], (await $.v(C, "PageCount"))))) {
                break;
              } else {
                await $.stmt((await $.callv(L0["addpage"], [L0["m2"]])));
              }
              await $.tick();
            }
          }
          await $.tick();
        }
      }
    } else {
      { const $t279 = (await $.v(C, "PageCount"));
        L0["i"] = 1;
        let $t280 = true;
        for (;;) {
          if (!$t280) { L0["i"] = $.succ(L0["i"], 1); }
          $t280 = false;
          if (!($.ord(L0["i"]) <= $.ord($t279))) break;
          await $.stmt((await $.callv(L0["addpage"], [L0["m"]])));
          await $.tick();
        }
      }
    }
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "OnPopupMenuPopup"))])))) {
    await $.stmt((await $.call(C, "OnPopupMenuPopup", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGDIPages", "ExportPDFStream", async function ExportPDFStream(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"adest": $.copyArg(p0), result: false, "pdf": null, "backgroundimage": null, "page": null, "i": 0};
  await $.fixArgs(L0, ["adest"]);
  try {
    L0["pdf"] = (await $.mcall((await $.v(C, "TPDFDocument")), "Create", [(await $.v(C, "UseOutlines")), 0, (await $.v(C, "ExportPDFA1")), (await $.mcall((await $.v(C, "TPdfEncryption")), "New", [(await $.v(C, "ExportPDFEncryptionLevel")), (await $.v(C, "ExportPDFEncryptionUserPassword")), (await $.v(C, "ExportPDFEncryptionOwnerPassword")), (await $.v(C, "ExportPDFEncryptionPermissions"))]))]));
    try {
      await $.mset(L0["pdf"], "GeneratePDF15File", (await $.v(C, "ExportPDFGeneratePDF15File")));
      {
        const $t282 = (await $.mv(L0["pdf"], "Info"));
        await $.wset([$t282], "Title", (await $.mcall((await $.wv([$t282], "SysUtils", C, false)), "Trim", [(await $.wv([$t282], "Caption", C, false))])), C);
        if ($.truthy($.eq((await $.wv([$t282], "ExportPDFApplication", C, false)), ""))) {
          await $.wset([$t282], "Creator", (await $.wcall([$t282], "trim", [(await $.mv((await $.wv([$t282], "Application", C, false)), "Title"))], C)), C);
        } else {
          await $.wset([$t282], "Creator", (await $.wcall([$t282], "trim", [(await $.wv([$t282], "ExportPDFApplication", C, false))], C)), C);
        }
        await $.wset([$t282], "Author", (await $.wv([$t282], "ExportPDFAuthor", C, false)), C);
        await $.wset([$t282], "Subject", (await $.wv([$t282], "ExportPDFSubject", C, false)), C);
        await $.wset([$t282], "Keywords", (await $.wv([$t282], "ExportPDFKeywords", C, false)), C);
      }
      await $.mset(L0["pdf"], "EmbeddedTTF", (await $.v(C, "ExportPDFEmbeddedTTF")));
      await $.mset(L0["pdf"], "UseUniscribe", (await $.v(C, "ExportPDFUseUniscribe")));
      await $.mset(L0["pdf"], "UseFontFallBack", (await $.v(C, "ExportPDFUseFontFallBack")));
      if ($.truthy($.ne((await $.v(C, "ExportPDFFontFallBackName")), ""))) {
        await $.mset(L0["pdf"], "FontFallBackName", (await $.v(C, "ExportPDFFontFallBackName")));
      }
      await $.mset(L0["pdf"], "ForceJPEGCompression", (await $.v(C, "ExportPDFForceJPEGCompression")));
      if ($.truthy($.eq((await $.v(C, "ExportPDFBackground")), null))) {
        L0["backgroundimage"] = null;
      } else {
        L0["backgroundimage"] = (await $.mcall((await $.v(C, "TPdfImage")), "Create", [L0["pdf"], (await $.v(C, "ExportPDFBackground")), true]));
        await $.stmt((await $.mcall(L0["pdf"], "AddXObject", ["BackgroundImage", L0["backgroundimage"]])));
      }
      await $.stmt((await $.mcall(L0["pdf"], "SaveToStreamDirectBegin", [L0["adest"]])));
      { const $t283 = $.sub((await $.v(C, "PageCount")), 1);
        L0["i"] = 0;
        let $t284 = true;
        for (;;) {
          if (!$t284) { L0["i"] = $.succ(L0["i"], 1); }
          $t284 = false;
          if (!($.ord(L0["i"]) <= $.ord($t283))) break;
          {
            const $t285 = (await $.idx((await $.v(C, "Pages")), [L0["i"]]));
            await $.mset((await $.wv([$t285], "PDF", { get: async () => L0["pdf"], set: async (v) => { L0["pdf"] = v; }, local: true }, false)), "DefaultPageWidth", (await $.wcall([$t285], "PdfCoord", [$.fdiv($.mul(25.4, (await $.mv((await $.wv([$t285], "SizePx", C, false)), "X"))), (await $.mv((await $.wv([$t285], "fPrinterPxPerInch", C, false)), "x")))], C)));
            await $.mset((await $.wv([$t285], "PDF", { get: async () => L0["pdf"], set: async (v) => { L0["pdf"] = v; }, local: true }, false)), "DefaultPageHeight", (await $.wcall([$t285], "PdfCoord", [$.fdiv($.mul(25.4, (await $.mv((await $.wv([$t285], "SizePx", C, false)), "Y"))), (await $.mv((await $.wv([$t285], "fPrinterPxPerInch", C, false)), "y")))], C)));
            await $.wset([$t285], "page", (await $.mv((await $.wv([$t285], "PDF", { get: async () => L0["pdf"], set: async (v) => { L0["pdf"] = v; }, local: true }, false)), "AddPage")), { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true });
            if ($.truthy($.ne((await $.wv([$t285], "BackgroundImage", { get: async () => L0["backgroundimage"], set: async (v) => { L0["backgroundimage"] = v; }, local: true }, false)), null))) {
              await $.stmt((await $.mcall((await $.mv((await $.wv([$t285], "PDF", { get: async () => L0["pdf"], set: async (v) => { L0["pdf"] = v; }, local: true }, false)), "Canvas")), "DrawXObject", [0, 0, (await $.mv((await $.wv([$t285], "page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false)), "PageWidth")), (await $.mv((await $.wv([$t285], "page", { get: async () => L0["page"], set: async (v) => { L0["page"] = v; }, local: true }, false)), "PageHeight")), "BackgroundImage"])));
            }
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t285], "PDF", { get: async () => L0["pdf"], set: async (v) => { L0["pdf"] = v; }, local: true }, false)), "Canvas")), "RenderMetaFile", [(await $.wcall([$t285], "GetMetaFileForPage", [(await $.wv([$t285], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)), $.fdiv((await $.mv((await $.wv([$t285], "Screen", C, false)), "PixelsPerInch")), (await $.mv((await $.wv([$t285], "fPrinterPxPerInch", C, false)), "x"))), $.fdiv((await $.mv((await $.wv([$t285], "Screen", C, false)), "PixelsPerInch")), (await $.mv((await $.wv([$t285], "fPrinterPxPerInch", C, false)), "y")))])));
            await $.mcall((await $.wv([$t285], "PDF", { get: async () => L0["pdf"], set: async (v) => { L0["pdf"] = v; }, local: true }, false)), "SaveToStreamDirectPageFlush", []);
          }
          await $.tick();
        }
      }
      await $.mcall(L0["pdf"], "SaveToStreamDirectEnd", []);
    } finally {
      await $.mcall(L0["pdf"], "Free", []);
    }
    L0["result"] = true;
  } catch ($t281) {
    $.rethrowControl($t281);
    $.handled($t281);
    L0["result"] = false;
  }
  return L0.result;
}, {"params": ["aDest"], "kind": "function", "ptypes": ["TStream"]});
  U.method("TGDIPages", "ExportPDF", async function ExportPDF(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"apdffilename": $.copyArg(p0), "showerroronscreen": $.copyArg(p1), "launchafter": $.copyArg(p2), result: false, "pdffilename": null, "pdffile": null, "i": 0, "name": '', "tempdir": null};
  await $.fixArgs(L0, ["apdffilename", "showerroronscreen", "launchafter"]);
  L0["validfilename"] = $.fn(async function ValidFileName(p0) {
  const L1 = {"fn": $.copyArg(p0), result: null, "i": 0};
  await $.fixArgs(L1, ["fn"]);
  L1["result"] = L1["fn"];
  { const $t286 = 1;
    L1["i"] = (await $.call(C, "length", [L1["result"]]));
    let $t287 = true;
    for (;;) {
      if (!$t287) { L1["i"] = $.succ(L1["i"], -1); }
      $t287 = false;
      if (!($.ord(L1["i"]) >= $.ord($t286))) break;
      if ($.truthy($.in_((await $.call(C, "ord", [(await $.idx(L1["result"], [L1["i"]]))])), [(await $.call(C, "ord", ["/"])), (await $.call(C, "ord", [":"])), (await $.call(C, "ord", ["\\"])), (await $.call(C, "ord", ["."]))]))) {
        await $.stmt((await $.call(C, "delete", [$.ref(async () => L1["result"], async ($t288) => { L1["result"] = $t288; }), L1["i"], 1])));
      }
      await $.tick();
    }
  }
  L1["i"] = (await $.call(C, "length", [L1["result"]]));
  while ($.truthy((await $.and_(($.gt(L1["i"], 0)), async () => ($.in_((await $.call(C, "ord", [(await $.idx(L1["result"], [L1["i"]]))])), [(await $.call(C, "ord", [" "])), (await $.call(C, "ord", ["-"]))])))))) {
    await $.stmt((await $.call(C, "dec", [$.ref(async () => L1["i"], async ($t289) => { L1["i"] = $t289; })])));
    await $.tick();
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => L1["result"], async ($t290) => { L1["result"] = $t290; }), L1["i"]])));
  L1["result"] = (await $.call(C, "trim", [L1["result"]]));
  return L1.result;
});
  L0["result"] = false;
  if ($.truthy($.eq(Self, null))) {
    return L0.result;
  }
  if ($.truthy($.gt((await $.v(C, "PageCount")), 10))) {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  }
  if ($.truthy($.eq(L0["apdffilename"], ""))) {
    {
      const $t291 = (await $.mcall((await $.v(C, "TSaveDialog")), "Create", [null]));
      try {
        await $.wset([$t291], "TempDir", (await $.wv([$t291], "GetCurrentDir", C, false)), { get: async () => L0["tempdir"], set: async (v) => { L0["tempdir"] = v; }, local: true });
        await $.wset([$t291], "Filter", $.add((await $.wv([$t291], "sPDFFile", C, false)), " (*.pdf)|*.pdf"), C);
        await $.wset([$t291], "Title", (await $.wv([$t291], "Caption", C, false)), C);
        await $.wset([$t291], "FileName", (await $.wcall([$t291], "ValidFileName", [(await $.wv([$t291], "Caption", C, false))], { get: async () => L0["validfilename"], set: async (v) => { L0["validfilename"] = v; }, local: true })), C);
        await $.wset([$t291], "DefaultExt", "pdf", C);
        await $.wset([$t291], "Options", [(await $.wv([$t291], "ofOverwritePrompt", C, false)), (await $.wv([$t291], "ofHideReadOnly", C, false)), (await $.wv([$t291], "ofEnableSizing", C, false))], C);
        do {
          if ($.truthy($.not((await $.wv([$t291], "Execute", C, false))))) {
            return L0.result;
          }
          await $.wset([$t291], "PDFFileName", (await $.wv([$t291], "FileName", C, false)), { get: async () => L0["pdffilename"], set: async (v) => { L0["pdffilename"] = v; }, local: true });
          await $.wset([$t291], "i", (await $.wcall([$t291], "FileCreate", [(await $.wv([$t291], "PDFFileName", { get: async () => L0["pdffilename"], set: async (v) => { L0["pdffilename"] = v; }, local: true }, false))], C)), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          if ($.truthy($.gt((await $.wv([$t291], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 0))) {
            break;
          }
          await $.stmt((await $.wcall([$t291], "MessageBox", [0, (await $.wcall([$t291], "pointer", [(await $.wcall([$t291], "Format", [(await $.wv([$t291], "SIniFileWriteError", C, false)), [(await $.wv([$t291], "PDFFileName", { get: async () => L0["pdffilename"], set: async (v) => { L0["pdffilename"] = v; }, local: true }, false))]], C))], C)), null, (await $.wv([$t291], "MB_ICONERROR", C, false))], C)));
          await $.tick();
        } while (!$.truthy((await $.wv([$t291], "false", C, false))));
        await $.stmt((await $.wcall([$t291], "FileClose", [(await $.wv([$t291], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], C)));
      } finally {
        await $.stmt((await $.wcall([$t291], "SetCurrentDir", [(await $.wv([$t291], "TempDir", { get: async () => L0["tempdir"], set: async (v) => { L0["tempdir"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t291], "Free", [], C));
      }
    }
  } else {
    L0["pdffilename"] = L0["apdffilename"];
  }
  try {
    L0["pdffile"] = (await $.mcall((await $.v(C, "TFileStream")), "Create", [L0["pdffilename"], (await $.v(C, "fmCreate"))]));
    try {
      await $.stmt((await $.call(C, "ExportPDFStream", [L0["pdffile"]])));
    } finally {
      await $.mcall(L0["pdffile"], "Free", []);
    }
    if ($.truthy(L0["launchafter"])) {
      await $.stmt((await $.call(C, "ShellExecute", [(await $.mv((await $.mv((await $.v(C, "Application")), "MainForm")), "Handle")), "open", (await $.call(C, "Pointer", [L0["pdffilename"]])), null, null, (await $.v(C, "SW_NORMAL"))])));
    }
  } catch ($t292) {
    $.rethrowControl($t292);
    if ($.excIs($t292, "Exception")) {
      L0["e"] = $.exc($t292);
      if ($.truthy(L0["showerroronscreen"])) {
        await $.stmt((await $.call(C, "MessageBox", [0, (await $.call(C, "pointer", [(await $.mv(L0["e"], "Message"))])), (await $.call(C, "Pointer", [L0["name"]])), (await $.v(C, "MB_ICONERROR"))])));
      }
      return L0.result;
    }
    else { throw $t292; }
  }
  L0["result"] = true;
  if ($.truthy($.gt((await $.v(C, "PageCount")), 10))) {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["aPdfFileName", "ShowErrorOnScreen", "LaunchAfter"], "kind": "function", "ptypes": ["TFileName", "boolean", "boolean"]});
  U.method("TGDIPages", "WMEraseBkgnd", async function WMEraseBkgnd(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "r": null};
  await $.mset((await L0["message"].get()), "Result", 1);
  if ($.truthy($.eq((await $.mv((await L0["message"].get()), "DC")), 0))) {
    return L0.result;
  }
  await $.mset(L0["r"], "Left", 0);
  await $.mset(L0["r"], "Right", (await $.mv((await $.v(C, "fPreviewSurface")), "left")));
  await $.mset(L0["r"], "Top", 0);
  await $.mset(L0["r"], "Bottom", (await $.v(C, "Height")));
  await $.stmt((await $.call(C, "FillRect", [(await $.mv((await L0["message"].get()), "DC")), L0["r"], (await $.mv((await $.v(C, "Brush")), "Handle"))])));
  await $.mset(L0["r"], "Left", $.add((await $.mv(L0["r"], "Right")), (await $.mv((await $.v(C, "fPreviewSurface")), "Width"))));
  await $.mset(L0["r"], "Right", (await $.v(C, "Width")));
  await $.stmt((await $.call(C, "FillRect", [(await $.mv((await L0["message"].get()), "DC")), L0["r"], (await $.mv((await $.v(C, "Brush")), "Handle"))])));
  await $.mset(L0["r"], "Left", 0);
  await $.mset(L0["r"], "Bottom", (await $.mv((await $.v(C, "fPreviewSurface")), "Top")));
  await $.stmt((await $.call(C, "FillRect", [(await $.mv((await L0["message"].get()), "DC")), L0["r"], (await $.mv((await $.v(C, "Brush")), "Handle"))])));
  await $.mset(L0["r"], "Top", $.add((await $.mv((await $.v(C, "fPreviewSurface")), "Top")), (await $.mv((await $.v(C, "fPreviewSurface")), "Height"))));
  await $.mset(L0["r"], "Bottom", (await $.v(C, "Height")));
  await $.stmt((await $.call(C, "FillRect", [(await $.mv((await L0["message"].get()), "DC")), L0["r"], (await $.mv((await $.v(C, "Brush")), "Handle"))])));
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TWmEraseBkgnd"]});
  U.method("TGDIPages", "AppendRichEdit", async function AppendRichEdit(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"richedithandle": $.copyArg(p0), "endofpagepositions": $.copyArg(p1), result: undefined, "range": null, "logx": 0, "logy": 0, "lastchar": 0, "maxlen": 0, "oldmap": 0, "textlenex": null};
  await $.fixArgs(L0, ["richedithandle", "endofpagepositions"]);
  if ($.truthy((await $.and_(($.ne(Self, null)), async () => ($.ne((await $.v(C, "fCanvas")), null)))))) {
    {
      const $t293 = L0["range"];
      await $.wset([$t293], "LogX", (await $.wcall([$t293], "GetDeviceCaps", [(await $.mv((await $.wv([$t293], "fCanvas", C, false)), "Handle")), (await $.wv([$t293], "LOGPIXELSX", C, false))], C)), { get: async () => L0["logx"], set: async (v) => { L0["logx"] = v; }, local: true });
      await $.wset([$t293], "LogY", (await $.wcall([$t293], "GetDeviceCaps", [(await $.mv((await $.wv([$t293], "fCanvas", C, false)), "Handle")), (await $.wv([$t293], "LOGPIXELSY", C, false))], C)), { get: async () => L0["logy"], set: async (v) => { L0["logy"] = v; }, local: true });
      await $.mset((await $.wv([$t293], "rcPage", C, false)), "Left", $.idiv(($.mul((await $.mv((await $.wv([$t293], "fPageMarginsPx", C, false)), "Left")), 1440)), (await $.wv([$t293], "LogX", { get: async () => L0["logx"], set: async (v) => { L0["logx"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t293], "rcPage", C, false)), "Right", $.idiv(($.mul(($.sub((await $.mv((await $.wv([$t293], "fPhysicalSizePx", C, false)), "x")), (await $.mv((await $.wv([$t293], "fPageMarginsPx", C, false)), "Right")))), 1440)), (await $.wv([$t293], "LogX", { get: async () => L0["logx"], set: async (v) => { L0["logx"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t293], "rcPage", C, false)), "Top", $.idiv(($.mul(($.add((await $.mv((await $.wv([$t293], "fPageMarginsPx", C, false)), "Top")), (await $.wv([$t293], "fHeaderHeight", C, false)))), 1440)), (await $.wv([$t293], "LogY", { get: async () => L0["logy"], set: async (v) => { L0["logy"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t293], "rcPage", C, false)), "Bottom", $.idiv(($.mul(($.sub($.sub((await $.mv((await $.wv([$t293], "fPhysicalSizePx", C, false)), "y")), (await $.mv((await $.wv([$t293], "fPageMarginsPx", C, false)), "Bottom"))), (await $.wv([$t293], "fFooterHeight", C, false)))), 1440)), (await $.wv([$t293], "LogY", { get: async () => L0["logy"], set: async (v) => { L0["logy"] = v; }, local: true }, false))));
      await $.stmt($.wcall([$t293], "CheckHeaderDone", [], C));
      await $.wset([$t293], "rc", (await $.wv([$t293], "rcPage", C, false)), C);
      await $.mset((await $.wv([$t293], "rc", C, false)), "Top", $.idiv(($.mul((await $.wv([$t293], "fCurrentYPos", C, false)), 1440)), (await $.wv([$t293], "LogY", { get: async () => L0["logy"], set: async (v) => { L0["logy"] = v; }, local: true }, false))));
      await $.wset([$t293], "LastChar", 0, { get: async () => L0["lastchar"], set: async (v) => { L0["lastchar"] = v; }, local: true });
      await $.mset((await $.wv([$t293], "TextLenEx", { get: async () => L0["textlenex"], set: async (v) => { L0["textlenex"] = v; }, local: true }, false)), "flags", (await $.wv([$t293], "GTL_DEFAULT", C, false)));
      await $.mset((await $.wv([$t293], "TextLenEx", { get: async () => L0["textlenex"], set: async (v) => { L0["textlenex"] = v; }, local: true }, false)), "codepage", (await $.wv([$t293], "CP_ACP", C, false)));
      await $.wset([$t293], "MaxLen", (await $.wcall([$t293], "SendMessage", [(await $.wv([$t293], "RichEditHandle", { get: async () => L0["richedithandle"], set: async (v) => { L0["richedithandle"] = v; }, local: true }, false)), (await $.wv([$t293], "EM_GETTEXTLENGTHEX", C, false)), (await $.wcall([$t293], "PtrInt", [(await $.wv([$t293], "TextLenEx", { get: async () => L0["textlenex"], set: async (v) => { L0["textlenex"] = v; }, local: true }, true))], C)), 0], C)), { get: async () => L0["maxlen"], set: async (v) => { L0["maxlen"] = v; }, local: true });
      await $.mset((await $.wv([$t293], "chrg", C, false)), "cpMax", (-(1)));
      await $.wset([$t293], "OldMap", (await $.wcall([$t293], "SetMapMode", [(await $.wv([$t293], "hdc", C, false)), (await $.wv([$t293], "MM_TEXT", C, false))], C)), { get: async () => L0["oldmap"], set: async (v) => { L0["oldmap"] = v; }, local: true });
      try {
        await $.stmt((await $.wcall([$t293], "SendMessage", [(await $.wv([$t293], "RichEditHandle", { get: async () => L0["richedithandle"], set: async (v) => { L0["richedithandle"] = v; }, local: true }, false)), (await $.wv([$t293], "EM_FORMATRANGE", C, false)), 0, 0], C)));
        do {
          await $.mset((await $.wv([$t293], "chrg", C, false)), "cpMin", (await $.wv([$t293], "LastChar", { get: async () => L0["lastchar"], set: async (v) => { L0["lastchar"] = v; }, local: true }, false)));
          await $.wset([$t293], "hdc", (await $.mv((await $.wv([$t293], "fCanvas", C, false)), "Handle")), C);
          await $.wset([$t293], "hdcTarget", (await $.wv([$t293], "hdc", C, false)), C);
          await $.wset([$t293], "LastChar", (await $.wcall([$t293], "SendMessage", [(await $.wv([$t293], "RichEditHandle", { get: async () => L0["richedithandle"], set: async (v) => { L0["richedithandle"] = v; }, local: true }, false)), (await $.wv([$t293], "EM_FORMATRANGE", C, false)), 1, (await $.wcall([$t293], "PtrInt", [(await $.wv([$t293], "Range", { get: async () => L0["range"], set: async (v) => { L0["range"] = v; }, local: true }, true))], C))], C)), { get: async () => L0["lastchar"], set: async (v) => { L0["lastchar"] = v; }, local: true });
          if ($.truthy($.ne((await $.wv([$t293], "EndOfPagePositions", { get: async () => L0["endofpagepositions"], set: async (v) => { L0["endofpagepositions"] = v; }, local: true }, false)), null))) {
            await $.stmt((await $.wcall([$t293], "AddInteger", [(await $.wv([$t293], "EndOfPagePositions", { get: async () => L0["endofpagepositions"], set: async (v) => { L0["endofpagepositions"] = v; }, local: true }, false)), (await $.wv([$t293], "LastChar", { get: async () => L0["lastchar"], set: async (v) => { L0["lastchar"] = v; }, local: true }, false))], C)));
          }
          if ($.truthy($.ge((await $.wcall([$t293], "cardinal", [(await $.wv([$t293], "LastChar", { get: async () => L0["lastchar"], set: async (v) => { L0["lastchar"] = v; }, local: true }, false))], C)), (await $.wcall([$t293], "cardinal", [(await $.wv([$t293], "MaxLen", { get: async () => L0["maxlen"], set: async (v) => { L0["maxlen"] = v; }, local: true }, false))], C))))) {
            break;
          }
          await $.stmt($.wcall([$t293], "NewPageInternal", [], C));
          await $.stmt($.wcall([$t293], "DoHeader", [], C));
          await $.wset([$t293], "rc", (await $.wv([$t293], "rcPage", C, false)), C);
          await $.tick();
        } while (!$.truthy((await $.wv([$t293], "false", C, false))));
        await $.wset([$t293], "fCurrentYPos", $.idiv(($.mul((await $.mv((await $.wv([$t293], "rc", C, false)), "Bottom")), (await $.wv([$t293], "LogY", { get: async () => L0["logy"], set: async (v) => { L0["logy"] = v; }, local: true }, false)))), 1440), C);
      } finally {
        await $.stmt((await $.wcall([$t293], "SendMessage", [(await $.wv([$t293], "RichEditHandle", { get: async () => L0["richedithandle"], set: async (v) => { L0["richedithandle"] = v; }, local: true }, false)), (await $.wv([$t293], "EM_FORMATRANGE", C, false)), 0, 0], C)));
        await $.stmt((await $.wcall([$t293], "SetMapMode", [(await $.wv([$t293], "hdc", C, false)), (await $.wv([$t293], "OldMap", { get: async () => L0["oldmap"], set: async (v) => { L0["oldmap"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["RichEditHandle", "EndOfPagePositions"], "kind": "procedure", "ptypes": ["HWnd", "PIntegerDynArray"]});
  U.method("TGDIPages", "AddBookMark", async function AddBookMark(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"abookmarkname": $.copyArg(p0), "ayposition": (p1 === undefined ? 0 : p1), result: false};
  await $.fixArgs(L0, ["abookmarkname", "ayposition"]);
  if ($.truthy($.ge((await $.mcall((await $.v(C, "fBookmarks")), "IndexOf", [L0["abookmarkname"]])), 0))) {
    L0["result"] = false;
  } else {
    if ($.truthy($.eq(L0["ayposition"], 0))) {
      await $.stmt($.call(C, "CheckYPos", []));
      L0["ayposition"] = (await $.v(C, "fCurrentYPos"));
    }
    await $.stmt((await $.mcall((await $.v(C, "fBookMarks")), "AddObject", [L0["abookmarkname"], (await $.mcall((await $.v(C, "TGDIPagereference")), "Create", [(await $.v(C, "PageCount")), 0, L0["ayposition"], 0, 0]))])));
    await $.stmt((await $.mcall((await $.v(C, "fCanvas")), "MoveTo", [0, L0["ayposition"]])));
    await $.stmt((await $.call(C, "GDICommentBookmark", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), (await $.call(C, "StringToUTF8", [L0["abookmarkname"]]))])));
    L0["result"] = true;
  }
  return L0.result;
}, {"params": ["aBookmarkName", "aYPosition"], "kind": "function", "ptypes": ["String", "integer"]});
  U.method("TGDIPages", "GotoPosition", async function GotoPosition(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"apage": $.copyArg(p0), "aypos": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["apage", "aypos"]);
  await $.set(C, "Page", L0["apage"]);
  await $.mset((await $.v(C, "HorzScrollbar")), "Position", 0);
  await $.mset((await $.v(C, "VertScrollbar")), "Position", $.idiv(($.mul(L0["aypos"], (await $.mv((await $.v(C, "VertScrollbar")), "Range")))), (await $.mv((await $.v(C, "fPhysicalSizePx")), "y"))));
  return L0.result;
}, {"params": ["aPage", "aYPos"], "kind": "procedure", "ptypes": ["integer", "integer"]});
  U.method("TGDIPages", "GotoBookmark", async function GotoBookmark(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"abookmarkname": $.copyArg(p0), result: false, "i": 0};
  await $.fixArgs(L0, ["abookmarkname"]);
  L0["i"] = (await $.mcall((await $.v(C, "fBookmarks")), "IndexOf", [L0["abookmarkname"]]));
  L0["result"] = $.ge(L0["i"], 0);
  if ($.truthy(L0["result"])) {
    {
      const $t294 = (await $.call(C, "TGDIPagereference", [(await $.idx((await $.mv((await $.v(C, "fBookmarks")), "Objects")), [L0["i"]]))]));
      await $.stmt((await $.wcall([$t294], "GotoPosition", [(await $.wv([$t294], "Page", C, false)), (await $.mv((await $.wv([$t294], "Rect", C, false)), "Top"))], C)));
    }
  }
  return L0.result;
}, {"params": ["aBookmarkName"], "kind": "function", "ptypes": ["String"]});
  U.method("TGDIPages", "AddOutline", async function AddOutline(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"atitle": $.copyArg(p0), "alevel": $.copyArg(p1), "ayposition": (p2 === undefined ? 0 : p2), "apagenumber": (p3 === undefined ? 0 : p3), result: undefined};
  await $.fixArgs(L0, ["atitle", "alevel", "ayposition", "apagenumber"]);
  if ($.truthy($.eq(L0["apagenumber"], 0))) {
    L0["apagenumber"] = (await $.v(C, "PageCount"));
  }
  if ($.truthy($.eq(L0["ayposition"], 0))) {
    await $.stmt($.call(C, "CheckYPos", []));
    L0["ayposition"] = (await $.v(C, "fCurrentYPos"));
  }
  await $.stmt((await $.mcall((await $.v(C, "fOutline")), "AddObject", [L0["atitle"], (await $.mcall((await $.v(C, "TGDIPagereference")), "Create", [L0["apagenumber"], 0, L0["ayposition"], 0, L0["alevel"]]))])));
  await $.stmt((await $.mcall((await $.v(C, "fCanvas")), "MoveTo", [0, L0["ayposition"]])));
  await $.stmt((await $.call(C, "GDICommentOutline", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), (await $.call(C, "StringToUtf8", [L0["atitle"]])), L0["alevel"]])));
  return L0.result;
}, {"params": ["aTitle", "aLevel", "aYPosition", "aPageNumber"], "kind": "procedure", "ptypes": ["String", "Integer", "integer", "integer"]});
  U.method("TGDIPages", "AddLink", async function AddLink(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"abookmarkname": $.copyArg(p0), "arect": $.copyArg(p1), "apagenumber": $.copyArg(p2), "anoborder": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["abookmarkname", "arect", "apagenumber", "anoborder"]);
  if ($.truthy($.eq(L0["apagenumber"], 0))) {
    L0["apagenumber"] = (await $.v(C, "PageCount"));
  }
  L0["arect"] = (await $.call(C, "MmToPrinter", [L0["arect"]]));
  {
    const $t295 = L0["arect"];
    await $.stmt((await $.mcall((await $.wv([$t295], "fLinks", C, false)), "AddObject", [(await $.wv([$t295], "aBookmarkName", { get: async () => L0["abookmarkname"], set: async (v) => { L0["abookmarkname"] = v; }, local: true }, false)), (await $.mcall((await $.wv([$t295], "TGDIPagereference", C, false)), "Create", [(await $.wv([$t295], "aPageNumber", { get: async () => L0["apagenumber"], set: async (v) => { L0["apagenumber"] = v; }, local: true }, false)), (await $.wv([$t295], "Left", C, false)), (await $.wv([$t295], "Top", C, false)), (await $.wv([$t295], "Right", C, false)), (await $.wv([$t295], "Bottom", C, false))]))])));
  }
  await $.stmt((await $.call(C, "GDICommentLink", [(await $.mv((await $.v(C, "fCanvas")), "Handle")), (await $.call(C, "StringToUtf8", [L0["abookmarkname"]])), L0["arect"], L0["anoborder"]])));
  return L0.result;
}, {"params": ["aBookmarkName", "aRect", "aPageNumber", "aNoBorder"], "kind": "procedure", "ptypes": ["String", "TRect", "integer", "boolean"]});
  U.method("TGDIPagereference", "Create", async function Create(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"pagenumber": $.copyArg(p0), "left": $.copyArg(p1), "top": $.copyArg(p2), "right": $.copyArg(p3), "bottom": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["pagenumber", "left", "top", "right", "bottom"]);
  await $.inherited(Self, "TGDIPagereference", "Create", null, arguments);
  await $.set(C, "Page", L0["pagenumber"]);
  await $.mset((await $.v(C, "Rect")), "Left", L0["left"]);
  await $.mset((await $.v(C, "Rect")), "Top", L0["top"]);
  await $.mset((await $.v(C, "Rect")), "Right", L0["right"]);
  await $.mset((await $.v(C, "Rect")), "Bottom", L0["bottom"]);
  return L0.result;
}, {"params": ["PageNumber", "Left", "Top", "Right", "Bottom"], "kind": "constructor", "ptypes": ["integer", "integer", "integer", "integer", "integer"]});
  U.method("TGDIPagereference", "ToPreview", async function ToPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"pages": $.copyArg(p0), result: undefined, "w": 0, "h": 0};
  await $.fixArgs(L0, ["pages"]);
  if ($.truthy($.ne((await $.v(C, "Page")), 0))) {
    {
      const $t296 = (await $.mv(L0["pages"], "fPreviewSurface"));
      await $.wset([$t296], "W", $.sub((await $.wv([$t296], "Width", C, false)), $.mul((await $.wv([$t296], "GRAY_MARGIN", C, false)), 2)), { get: async () => L0["w"], set: async (v) => { L0["w"] = v; }, local: true });
      await $.wset([$t296], "H", $.sub((await $.wv([$t296], "Height", C, false)), $.mul((await $.wv([$t296], "GRAY_MARGIN", C, false)), 2)), { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true });
      await $.mset((await $.wv([$t296], "Preview", C, false)), "Left", $.add((await $.wv([$t296], "GRAY_MARGIN", C, false)), $.idiv(($.mul((await $.mv((await $.wv([$t296], "Rect", C, false)), "Left")), (await $.wv([$t296], "W", { get: async () => L0["w"], set: async (v) => { L0["w"] = v; }, local: true }, false)))), (await $.mv((await $.mv((await $.wv([$t296], "Pages", { get: async () => L0["pages"], set: async (v) => { L0["pages"] = v; }, local: true }, false)), "fPhysicalSizePx")), "x")))));
      await $.mset((await $.wv([$t296], "Preview", C, false)), "Right", $.add((await $.wv([$t296], "GRAY_MARGIN", C, false)), $.idiv(($.mul((await $.mv((await $.wv([$t296], "Rect", C, false)), "Right")), (await $.wv([$t296], "W", { get: async () => L0["w"], set: async (v) => { L0["w"] = v; }, local: true }, false)))), (await $.mv((await $.mv((await $.wv([$t296], "Pages", { get: async () => L0["pages"], set: async (v) => { L0["pages"] = v; }, local: true }, false)), "fPhysicalSizePx")), "x")))));
      await $.mset((await $.wv([$t296], "Preview", C, false)), "Top", $.add((await $.wv([$t296], "GRAY_MARGIN", C, false)), $.idiv(($.mul((await $.mv((await $.wv([$t296], "Rect", C, false)), "Top")), (await $.wv([$t296], "H", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false)))), (await $.mv((await $.mv((await $.wv([$t296], "Pages", { get: async () => L0["pages"], set: async (v) => { L0["pages"] = v; }, local: true }, false)), "fPhysicalSizePx")), "y")))));
      await $.mset((await $.wv([$t296], "Preview", C, false)), "Bottom", $.add((await $.wv([$t296], "GRAY_MARGIN", C, false)), $.idiv(($.mul((await $.mv((await $.wv([$t296], "Rect", C, false)), "Bottom")), (await $.wv([$t296], "H", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false)))), (await $.mv((await $.mv((await $.wv([$t296], "Pages", { get: async () => L0["pages"], set: async (v) => { L0["pages"] = v; }, local: true }, false)), "fPhysicalSizePx")), "y")))));
    }
  }
  return L0.result;
}, {"params": ["Pages"], "kind": "procedure", "ptypes": ["TGDIPages"]});
  U.method("THeaderFooter", "Create", async function Create(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"report": $.copyArg(p0), "doubleline": $.copyArg(p1), "atext": (p2 === undefined ? "" : p2), "istext": (p3 === undefined ? false : p3), result: undefined};
  await $.fixArgs(L0, ["report", "doubleline", "atext", "istext"]);
  await $.set(C, "Text", L0["atext"]);
  await $.set(C, "State", (await $.mv(L0["report"], "SavedState")));
  if ($.truthy($.not(L0["istext"]))) {
    if ($.truthy(L0["doubleline"])) {
      await $.mset((await $.v(C, "State")), "Flags", (await $.or_((await $.mv((await $.v(C, "State")), "Flags")), async () => (await $.v(C, "FORMAT_DOUBLELINE")))));
    } else {
      await $.mset((await $.v(C, "State")), "Flags", (await $.or_((await $.mv((await $.v(C, "State")), "Flags")), async () => (await $.v(C, "FORMAT_SINGLELINE")))));
    }
  }
  return L0.result;
}, {"params": ["Report", "doubleline", "aText", "IsText"], "kind": "constructor", "ptypes": ["TGDIPages", "boolean", "SynUnicode", "boolean"]});
  return U;
}
