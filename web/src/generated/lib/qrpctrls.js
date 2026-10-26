// Generated from qrpctrls.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("qrpctrls", ["ComCtrls", "Controls", "SysUtils", "Forms", "Grids", "DBGrids", "WinProcs", "WinTypes", "Classes", "QuickRpt", "QRCtrls", "CSProp", "Graphics", "ExtCtrls", "QRPExpr", "qrpBaseCtrls", "QRPrntr", "Math", "Dialogs", "DB", "QRExpbld"]);
  const C = [U];
  U.const("qrpsRectangle", 0);
  U.const("qrpsCircle", 1);
  U.const("qrpsVertLine", 2);
  U.const("qrpsHorLine", 3);
  U.const("qrpsTopAndBottom", 4);
  U.const("qrpsRightAndLeft", 5);
  U.const("qrpsDownLine", 6);
  U.const("qrpsUpLine", 7);
  U.const("qrpsTriangle1", 8);
  U.const("qrpsTriangle2", 9);
  U.const("qrpsTriangle3", 10);
  U.const("qrpsTriangle4", 11);
  U.const("cmCross", 0);
  U.const("cmHook", 1);
  U.const("cmGlyph", 2);
  U.const("vaNone", 0);
  U.const("vaTop", 1);
  U.const("vaCenter", 2);
  U.const("vaBottom", 3);
  U.const("haNone", 0);
  U.const("haLeft", 1);
  U.const("haCenter", 2);
  U.const("haRight", 3);
  U.const("rsList", 0);
  U.const("rsTabular", 1);
  U.const("rsForm", 2);
  U.const("rsSingleForm", 3);
  U.defClass("TQRPFrame", "TQRFrame", {}, {});
  U.defClass("TQRPDBImage", "TQRDBImage", {"ffixbottomposition": {"name": "FFixBottomPosition", "type": "Boolean"}, "fstretchheightwithband": {"name": "FStretchHeightWithBand", "type": "Boolean"}}, {"fixbottomposition": {"name": "FixBottomPosition", "read": "FFixBottomPosition", "write": "FFixBottomPosition"}, "stretchheightwithband": {"name": "StretchHeightWithBand", "read": "FStretchHeightWithBand", "write": "FStretchHeightWithBand"}});
  U.defClass("TQRPLabel", "TQRLabel", {"fdegree": {"name": "FDegree", "type": "Word"}, "ffixbottomposition": {"name": "FFixBottomPosition", "type": "Boolean"}, "fstretchheightwithband": {"name": "FStretchHeightWithBand", "type": "Boolean"}}, {"degree": {"name": "Degree", "read": "FDegree", "write": "SetDegree"}, "fixbottomposition": {"name": "FixBottomPosition", "read": "FFixBottomPosition", "write": "FFixBottomPosition"}, "stretchheightwithband": {"name": "StretchHeightWithBand", "read": "FStretchHeightWithBand", "write": "FStretchHeightWithBand"}});
  U.defClass("TQRPDBText", "TQRDBText", {"foldonprint": {"name": "FOldOnPrint", "type": "TQRLabelOnPrintEvent"}, "fsuppressrepeatedvalues": {"name": "FSuppressRepeatedValues", "type": "Boolean"}, "freprintonnewpage": {"name": "FReprintOnNewPage", "type": "Boolean"}, "freprintonnewgroup": {"name": "FReprintOnNewGroup", "type": "Boolean"}, "fblankifzero": {"name": "FBlankIfZero", "type": "Boolean"}, "ffixbottomposition": {"name": "FFixBottomPosition", "type": "Boolean"}, "fstretchheightwithband": {"name": "FStretchHeightWithBand", "type": "Boolean"}, "lastvalue": {"name": "LastValue", "type": "String"}, "lastpage": {"name": "LastPage", "type": "Integer"}}, {"oldonprint": {"name": "OldOnPrint", "read": "FOldOnPrint", "write": "FOldOnPrint"}, "suppressrepeatedvalues": {"name": "SuppressRepeatedValues", "read": "FSuppressRepeatedValues", "write": "FSuppressRepeatedValues"}, "reprintonnewpage": {"name": "ReprintOnNewPage", "read": "FReprintOnNewPage", "write": "FReprintOnNewPage"}, "reprintonnewgroup": {"name": "ReprintOnNewGroup", "read": "FReprintOnNewGroup", "write": "FReprintOnNewGroup"}, "blankifzero": {"name": "BlankIfZero", "read": "FBlankIfZero", "write": "FBlankIfZero"}, "fixbottomposition": {"name": "FixBottomPosition", "read": "FFixBottomPosition", "write": "FFixBottomPosition"}, "stretchheightwithband": {"name": "StretchHeightWithBand", "read": "FStretchHeightWithBand", "write": "FStretchHeightWithBand"}});
  U.defClass("TQRPExpr", "TQRExpr", {"fdegree": {"name": "FDegree", "type": "Word"}, "ffixbottomposition": {"name": "FFixBottomPosition", "type": "Boolean"}, "fstretchheightwithband": {"name": "FStretchHeightWithBand", "type": "Boolean"}}, {"degree": {"name": "Degree", "read": "FDegree", "write": "SetDegree"}, "fixbottomposition": {"name": "FixBottomPosition", "read": "FFixBottomPosition", "write": "FFixBottomPosition"}, "stretchheightwithband": {"name": "StretchHeightWithBand", "read": "FStretchHeightWithBand", "write": "FStretchHeightWithBand"}});
  U.defClass("TQRPMemo", "TQRMemo", {"ffixbottomposition": {"name": "FFixBottomPosition", "type": "Boolean"}, "fstretchheightwithband": {"name": "FStretchHeightWithBand", "type": "Boolean"}}, {"fixbottomposition": {"name": "FixBottomPosition", "read": "FFixBottomPosition", "write": "FFixBottomPosition"}, "stretchheightwithband": {"name": "StretchHeightWithBand", "read": "FStretchHeightWithBand", "write": "FStretchHeightWithBand"}});
  U.defClass("TQRPRichtext", "TQRRichtext", {"ffixbottomposition": {"name": "FFixBottomPosition", "type": "Boolean"}, "fstretchheightwithband": {"name": "FStretchHeightWithBand", "type": "Boolean"}}, {"fixbottomposition": {"name": "FixBottomPosition", "read": "FFixBottomPosition", "write": "FFixBottomPosition"}, "stretchheightwithband": {"name": "StretchHeightWithBand", "read": "FStretchHeightWithBand", "write": "FStretchHeightWithBand"}});
  U.defClass("TQRPShape", "TQRShape", {"fqrpshape": {"name": "FQRPShape", "type": "TQRPShapeType"}, "ffixbottomposition": {"name": "FFixBottomPosition", "type": "Boolean"}, "fstretchheightwithband": {"name": "FStretchHeightWithBand", "type": "Boolean"}}, {"shape": {"name": "Shape", "read": "FQRPShape", "write": "SetQRPShape"}, "fixbottomposition": {"name": "FixBottomPosition", "read": "FFixBottomPosition", "write": "FFixBottomPosition"}, "stretchheightwithband": {"name": "StretchHeightWithBand", "read": "FStretchHeightWithBand", "write": "FStretchHeightWithBand"}});
  U.defClass("TQRPCheckBox", "TQRPrintable", {"ffixbottomposition": {"name": "FFixBottomPosition", "type": "Boolean"}, "fstretchheightwithband": {"name": "FStretchHeightWithBand", "type": "Boolean"}, "fbrush": {"name": "FBrush", "type": "TBrush"}, "fpen": {"name": "FPen", "type": "TPen"}, "fctl3d": {"name": "FCtl3d", "type": "Boolean"}, "fchecked": {"name": "FChecked", "type": "Boolean"}, "fcheckmarkdistance": {"name": "FCheckmarkDistance", "type": "Word"}, "fcheckmarktype": {"name": "FCheckmarkType", "type": "TQRPCheckmarkType"}, "fglyphchecked": {"name": "FGlyphChecked", "type": "TPicture"}, "fglyphunchecked": {"name": "FGlyphUnchecked", "type": "TPicture"}}, {"glyphchecked": {"name": "GlyphChecked", "read": "FGlyphChecked", "write": "SetGlyphChecked"}, "glyphunchecked": {"name": "GlyphUnchecked", "read": "FGlyphUnchecked", "write": "SetGlyphUnchecked"}, "checkmarktype": {"name": "CheckmarkType", "read": "FCheckmarkType", "write": "SetCheckmarkType"}, "checkmarkdistance": {"name": "CheckmarkDistance", "read": "FCheckmarkDistance", "write": "SetCheckmarkDistance"}, "checked": {"name": "Checked", "read": "FChecked", "write": "SetChecked"}, "brush": {"name": "Brush", "read": "FBrush", "write": "SetBrush"}, "pen": {"name": "Pen", "read": "FPen", "write": "Setpen"}, "height": {"name": "Height"}, "width": {"name": "Width"}, "transparent": {"name": "Transparent"}, "ctl3d": {"name": "Ctl3D", "read": "FCtl3d", "write": "SetCtl3d"}, "fixbottomposition": {"name": "FixBottomPosition", "read": "FFixBottomPosition", "write": "FFixBottomPosition"}, "stretchheightwithband": {"name": "StretchHeightWithBand", "read": "FStretchHeightWithBand", "write": "FStretchHeightWithBand"}});
  U.defClass("TQRPExprCheckbox", "TQRPCheckbox", {"fexpression": {"name": "FExpression", "type": "String"}}, {"expression": {"name": "Expression", "read": "FExpression", "write": "FExpression"}});
  U.defClass("TQRPGridCell", null, {"caption": {"name": "Caption", "type": "String"}, "font": {"name": "Font", "type": "TFont"}, "brush": {"name": "Brush", "type": "TBrush"}, "parentfont": {"name": "ParentFont", "type": "Boolean"}, "vertalignment": {"name": "VertAlignment", "type": "TVertAlignment"}, "horizalignment": {"name": "HorizAlignment", "type": "THorizAlignment"}}, {});
  U.defClass("TQRPGrid", "TQRPrintable", {"ffixbottomposition": {"name": "FFixBottomPosition", "type": "Boolean"}, "fstretchheightwithband": {"name": "FStretchHeightWithBand", "type": "Boolean"}, "fcellhorizalignment": {"name": "FCellHorizAlignment", "type": "THorizAlignment"}, "fcellvertalignment": {"name": "FCellVertAlignment", "type": "TVertAlignment"}, "fbrush": {"name": "FBrush", "type": "TBrush"}, "fpen": {"name": "FPen", "type": "TPen"}, "frows": {"name": "FRows", "type": "Word"}, "fcolumns": {"name": "FColumns", "type": "Word"}, "fdrawfirstrowline": {"name": "FDrawFirstRowLine", "type": "Boolean"}, "ffirstrowheight": {"name": "FFirstRowHeight", "type": "Word"}, "ffirstcolumnwidth": {"name": "FFirstColumnWidth", "type": "Word"}, "ffirstcolumnjoined": {"name": "FFirstColumnJoined", "type": "Boolean"}, "ffirstrowjoined": {"name": "FFirstRowJoined", "type": "Boolean"}, "fcolumnsizes": {"name": "FColumnSizes", "type": "TStrings"}, "frowsizes": {"name": "FRowSizes", "type": "TStrings"}, "fcellcolumns": {"name": "FCellColumns", "type": "TList"}}, {"cells": {"name": "Cells", "read": "GetCells", "write": "SetCells"}, "fixbottomposition": {"name": "FixBottomPosition", "read": "FFixBottomPosition", "write": "FFixBottomPosition"}, "stretchheightwithband": {"name": "StretchHeightWithBand", "read": "FStretchHeightWithBand", "write": "FStretchHeightWithBand"}, "cellhorizalignment": {"name": "CellHorizAlignment", "read": "FCellHorizAlignment", "write": "FCellHorizAlignment"}, "cellvertalignment": {"name": "CellVertAlignment", "read": "FCellVertAlignment", "write": "FCellVertAlignment"}, "columns": {"name": "Columns", "read": "FColumns", "write": "SetColumns"}, "columnsizes": {"name": "ColumnSizes", "read": "FColumnSizes", "write": "SetColumnSizes"}, "rows": {"name": "Rows", "read": "FRows", "write": "SetRows"}, "rowsizes": {"name": "RowSizes", "read": "FRowSizes", "write": "SetRowSizes"}, "drawfirstrowline": {"name": "DrawFirstRowLine", "read": "FDrawFirstRowLine", "write": "SetDrawFirstRowLine"}, "firstrowcolor": {"name": "FirstRowColor", "read": "GetFirstRowColor", "write": "SetFirstRowColor"}, "firstcolumncolor": {"name": "FirstColumnColor", "read": "GetFirstColumnColor", "write": "SetFirstColumnColor"}, "firstcellcolor": {"name": "FirstCellColor", "read": "GetFirstCellColor", "write": "SetFirstCellColor"}, "firstcolumnjoined": {"name": "FirstColumnJoined", "read": "FFirstColumnJoined", "write": "SetFirstColumnJoined"}, "firstrowjoined": {"name": "FirstRowJoined", "read": "FFirstRowJoined", "write": "SetFirstRowJoined"}, "transparent": {"name": "Transparent"}, "brush": {"name": "Brush", "read": "FBrush", "write": "SetBrush"}, "pen": {"name": "Pen", "read": "FPen", "write": "Setpen"}, "height": {"name": "Height"}, "width": {"name": "Width"}});
  U.defClass("TQRPBand", "TQRBand", {"fnotonfirstpage": {"name": "FNotOnFirstPage", "type": "Boolean"}, "fnotonlastpage": {"name": "FNotOnLastPage", "type": "Boolean"}, "fexpression": {"name": "FExpression", "type": "String"}, "falwaysusespace": {"name": "FAlwaysUseSpace", "type": "Boolean"}, "foldbeforeprint": {"name": "FOldBeforePrint", "type": "TQRBandBeforePrintEvent"}, "insetbounds": {"name": "InSetBounds", "type": "Boolean"}, "disabledcontrols": {"name": "DisabledControls", "type": "TList"}}, {"beforeprint": {"name": "BeforePrint", "read": "FOldBeforePrint", "write": "FOldBeforePrint"}, "alwaysusespace": {"name": "AlwaysUseSpace", "read": "FAlwaysUseSpace", "write": "FAlwaysUseSpace"}, "expression": {"name": "Expression", "read": "FExpression", "write": "FExpression"}, "notonfirstpage": {"name": "NotOnFirstPage", "read": "FNotOnFirstPage", "write": "FNotOnFirstPage"}, "notonlastpage": {"name": "NotOnLastPage", "read": "FNotOnLastPage", "write": "FNotOnLastPage"}});
  U.defClass("TQRPChildBand", "TQRChildBand", {"fnotonfirstpage": {"name": "FNotOnFirstPage", "type": "Boolean"}, "fnotonlastpage": {"name": "FNotOnLastPage", "type": "Boolean"}, "fexpression": {"name": "FExpression", "type": "String"}, "fpageprints": {"name": "FPagePrints", "type": "Integer"}, "foldbeforeprint": {"name": "FOldBeforePrint", "type": "TQRBandBeforePrintEvent"}, "lastpage": {"name": "LastPage", "type": "Integer"}, "insetbounds": {"name": "InSetBounds", "type": "Boolean"}}, {"beforeprint": {"name": "BeforePrint", "read": "FOldBeforePrint", "write": "FOldBeforePrint"}, "pageprints": {"name": "PagePrints", "read": "FPagePrints", "write": "FPagePrints"}, "expression": {"name": "Expression", "read": "FExpression", "write": "FExpression"}, "notonfirstpage": {"name": "NotOnFirstPage", "read": "FNotOnFirstPage", "write": "FNotOnFirstPage"}, "notonlastpage": {"name": "NotOnLastPage", "read": "FNotOnLastPage", "write": "FNotOnLastPage"}});
  U.defClass("TQRAbstractGridReport", "TComponent", {"freporttitle": {"name": "FReportTitle", "type": "String"}, "freporttitledate": {"name": "FReportTitleDate", "type": "Boolean"}, "fquickrep": {"name": "FQuickRep", "type": "TQuickRep"}, "fprintgridlines": {"name": "FPrintGridLines", "type": "Boolean"}, "fafterreportformcreated": {"name": "FAfterReportFormCreated", "type": "TQRPAfterReportFormCreatedEvent"}, "fselectedrecordsonly": {"name": "FSelectedRecordsOnly", "type": "Boolean"}}, {"reporttitle": {"name": "ReportTitle", "read": "FReportTitle", "write": "FReportTitle"}, "reporttitledate": {"name": "ReportTitleDate", "read": "FReportTitleDate", "write": "FReportTitleDate"}, "printgridlines": {"name": "PrintGridLines", "read": "FPrintGridLines", "write": "FPrintGridLines"}, "quickrep": {"name": "QuickRep", "read": "FQuickRep", "write": "FQuickRep"}, "afterreportformcreated": {"name": "AfterReportFormCreated", "read": "FAfterReportFormCreated", "write": "FAfterReportFormCreated"}});
  U.defClass("TQRGridReport", "TQRAbstractGridReport", {"fdbgrid": {"name": "FDBGrid", "type": "TDBGrid"}, "fuseexprfordatafields": {"name": "FUseExprForDatafields", "type": "Boolean"}, "fautostretchmemos": {"name": "FAutoStretchMemos", "type": "Boolean"}, "fspanpageshorizontally": {"name": "FSpanPagesHorizontally", "type": "Boolean"}}, {"autostretchmemos": {"name": "AutoStretchMemos", "read": "FAutoStretchMemos", "write": "FAutoStretchMemos"}, "useexprfordatafields": {"name": "UseExprForDatafields", "read": "FUseExprForDatafields", "write": "FUseExprForDatafields"}, "dbgrid": {"name": "DBGrid", "read": "FDBGrid", "write": "FDBGrid"}, "selectedrecordsonly": {"name": "SelectedRecordsOnly", "read": "FSelectedRecordsOnly", "write": "FSelectedRecordsOnly"}, "spanpageshorizontally": {"name": "SpanPagesHorizontally", "read": "FSpanPagesHorizontally", "write": "FSpanPagesHorizontally"}});
  U.defClass("TQRStringgridReport", "TQRAbstractGridReport", {"fstringgrid": {"name": "FStringGrid", "type": "TStringgrid"}, "currentrow": {"name": "CurrentRow", "type": "Longint"}}, {"stringgrid": {"name": "StringGrid", "read": "FStringGrid", "write": "FStringGrid"}});
  U.defClass("TQRTempBand", "TQRCustomBand", {}, {});
  U.defClass("TQRPDBGrid", "TDBGrid", {}, {});
  U.init(async () => {
    U.const("CellBorderX", 5);
    U.const("CellBorderY", 3);
  });
  U.func("FindUniqueComponentName", async function FindUniqueComponentName(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"owner": $.copyArg(p0), "name": $.copyArg(p1), "usedefault": $.copyArg(p2), result: '', "x": 0};
  await $.fixArgs(L0, ["owner", "name", "usedefault"]);
  if ($.truthy((await $.and_(L0["usedefault"], async () => ($.eq((await $.mcall(L0["owner"], "FindComponent", [L0["name"]])), null)))))) {
    L0["result"] = L0["name"];
  } else {
    L0["x"] = 0;
    do {
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["x"], async ($t1) => { L0["x"] = $t1; })])));
      await $.tick();
    } while (!$.truthy($.eq((await $.mcall(L0["owner"], "FindComponent", [$.add(L0["name"], (await $.call(C, "IntToStr", [L0["x"]])))])), null)));
    L0["result"] = $.add(L0["name"], (await $.call(C, "IntToStr", [L0["x"]])));
  }
  return L0.result;
}, {"params": ["Owner", "Name", "UseDefault"], "kind": "function", "ptypes": ["TForm", "String", "Boolean"]});
  U.method("TQRPDBImage", "LoadPicture", async function LoadPicture(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "s": ''};
  if ($.truthy((await $.and_(($.ne((await $.v(C, "DataField")), "")), async () => ($.ne((await $.v(C, "Dataset")), null)))))) {
    try {
      if ($.truthy($.not(($.is_((await $.mcall((await $.v(C, "DataSet")), "FindField", [(await $.v(C, "DataField"))])), "TBlobField"))))) {
        L0["s"] = (await $.call(C, "ExpandFileName", [(await $.mv((await $.mcall((await $.v(C, "Dataset")), "FindField", [(await $.v(C, "DataField"))])), "AsString"))]));
        if ($.truthy($.eq((await $.call(C, "ExtractFileExt", [L0["s"]])), ""))) {
          L0["s"] = (await $.call(C, "ChangeFileExt", [L0["s"], ".BMP"]));
        }
        if ($.truthy((await $.call(C, "FileExists", [L0["s"]])))) {
          await $.stmt((await $.mcall((await $.v(C, "Picture")), "LoadFromFile", [L0["s"]])));
        }
      } else {
        await $.stmt((await $.mcall((await $.v(C, "Picture")), "Assign", [(await $.mcall((await $.v(C, "Dataset")), "FindField", [(await $.v(C, "DataField"))]))])));
      }
    } catch ($t2) {
      $.rethrowControl($t2);
      $.handled($t2);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPDBImage", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ofsx": $.copyArg(p0), "ofsy": $.copyArg(p1), result: undefined, "h": 0, "dest": null, "drawpict": null, "s": '', "orgheight": 0};
  await $.fixArgs(L0, ["ofsx", "ofsy"]);
  L0["printbitmap"] = $.fn(async function PrintBitmap(p0, p1, p2) {
  const L1 = {"acanvas": $.copyArg(p0), "dest": $.copyArg(p1), "bitmap": $.copyArg(p2), result: undefined, "info": null, "infosize": 0, "image": null, "imagesize": 0};
  await $.fixArgs(L1, ["acanvas", "dest", "bitmap"]);
  {
    const $t3 = L1["bitmap"];
    await $.stmt((await $.wcall([$t3], "GetDIBSizes", [(await $.wv([$t3], "Handle", C, false)), (await $.wv([$t3], "InfoSize", { get: async () => L1["infosize"], set: async (v) => { L1["infosize"] = v; }, local: true }, false)), (await $.wv([$t3], "ImageSize", { get: async () => L1["imagesize"], set: async (v) => { L1["imagesize"] = v; }, local: true }, false))], C)));
    await $.wset([$t3], "Info", (await $.wcall([$t3], "AllocMem", [(await $.wv([$t3], "InfoSize", { get: async () => L1["infosize"], set: async (v) => { L1["infosize"] = v; }, local: true }, false))], C)), { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true });
    try {
      await $.wset([$t3], "Image", (await $.wcall([$t3], "AllocMem", [(await $.wv([$t3], "ImageSize", { get: async () => L1["imagesize"], set: async (v) => { L1["imagesize"] = v; }, local: true }, false))], C)), { get: async () => L1["image"], set: async (v) => { L1["image"] = v; }, local: true });
      try {
        await $.stmt((await $.wcall([$t3], "GetDIB", [(await $.wv([$t3], "Handle", C, false)), (await $.wv([$t3], "Palette", C, false)), (await $.wv([$t3], "Info", { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true }, false)), (await $.wv([$t3], "Image", { get: async () => L1["image"], set: async (v) => { L1["image"] = v; }, local: true }, false))], C)));
        if ($.truthy($.not((await $.wv([$t3], "Monochrome", C, false))))) {
          await $.stmt((await $.wcall([$t3], "SetStretchBltMode", [(await $.mv((await $.wv([$t3], "ACanvas", { get: async () => L1["acanvas"], set: async (v) => { L1["acanvas"] = v; }, local: true }, false)), "Handle")), (await $.wv([$t3], "STRETCH_DELETESCANS", C, false))], C)));
        }
        {
          const $t4 = (await $.mv((await $.wv([$t3], "Info", { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true }, false)), "bmiHeader"));
          await $.stmt((await $.wcall([$t3, $t4], "StretchDIBits", [(await $.mv((await $.wv([$t3, $t4], "aCanvas", { get: async () => L1["acanvas"], set: async (v) => { L1["acanvas"] = v; }, local: true }, false)), "Handle")), (await $.mv((await $.wv([$t3, $t4], "Dest", { get: async () => L1["dest"], set: async (v) => { L1["dest"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t3, $t4], "Dest", { get: async () => L1["dest"], set: async (v) => { L1["dest"] = v; }, local: true }, false)), "Top")), $.sub((await $.mv((await $.wv([$t3, $t4], "Dest", { get: async () => L1["dest"], set: async (v) => { L1["dest"] = v; }, local: true }, false)), "RIght")), (await $.mv((await $.wv([$t3, $t4], "Dest", { get: async () => L1["dest"], set: async (v) => { L1["dest"] = v; }, local: true }, false)), "Left"))), $.sub((await $.mv((await $.wv([$t3, $t4], "Dest", { get: async () => L1["dest"], set: async (v) => { L1["dest"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t3, $t4], "Dest", { get: async () => L1["dest"], set: async (v) => { L1["dest"] = v; }, local: true }, false)), "Top"))), 0, 0, (await $.wv([$t3, $t4], "biWidth", C, false)), (await $.wv([$t3, $t4], "biHeight", C, false)), (await $.wv([$t3, $t4], "Image", { get: async () => L1["image"], set: async (v) => { L1["image"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "Info", { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true }, false)), (await $.wv([$t3, $t4], "DIB_RGB_COLORS", C, false)), (await $.wv([$t3, $t4], "SRCCOPY", C, false))], C)));
        }
      } finally {
        await $.stmt((await $.wcall([$t3], "FreeMem", [(await $.wv([$t3], "Image", { get: async () => L1["image"], set: async (v) => { L1["image"] = v; }, local: true }, false)), (await $.wv([$t3], "ImageSize", { get: async () => L1["imagesize"], set: async (v) => { L1["imagesize"] = v; }, local: true }, false))], C)));
      }
    } finally {
      await $.stmt((await $.wcall([$t3], "FreeMem", [(await $.wv([$t3], "Info", { get: async () => L1["info"], set: async (v) => { L1["info"] = v; }, local: true }, false)), (await $.wv([$t3], "InfoSize", { get: async () => L1["infosize"], set: async (v) => { L1["infosize"] = v; }, local: true }, false))], C)));
    }
  }
  return L1.result;
});
  L0["orgheight"] = (await $.v(C, "Height"));
  if ($.truthy((await $.and_((await $.v(C, "FixBottomPosition")), async () => ($.is_((await $.v(C, "Parent")), "TQRCustomBand")))))) {
    L0["ofsy"] = $.add(L0["ofsy"], (await $.call(C, "Round", [(await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded"))])));
  }
  if ($.truthy((await $.v(C, "StretchHeightWithBand")))) {
    await $.set(C, "Height", $.add((await $.v(C, "Height")), (await $.call(C, "Round", [$.mul((await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor")))]))));
  }
  if ($.truthy((await $.and_(($.ne((await $.v(C, "Datafield")), "")), async () => ($.ne((await $.v(C, "Dataset")), null)))))) {
    try {
      if ($.truthy($.is_((await $.mcall((await $.v(C, "Dataset")), "FindField", [(await $.v(C, "DataField"))])), "TBlobField"))) {
        await $.inherited(Self, "TQRPDBImage", "Print", [L0["ofsx"], L0["ofsy"]], arguments);
        await $.set(C, "Height", L0["orgheight"]);
        return L0.result;
      }
    } catch ($t5) {
      $.rethrowControl($t5);
      $.handled($t5);
    }
  }
  {
    const $t6 = (await $.mv((await $.v(C, "QRPrinter")), "Canvas"));
    await $.mset((await $.wv([$t6], "Brush", C, false)), "Style", (await $.wv([$t6], "bsSolid", C, false)));
    await $.mset((await $.wv([$t6], "Brush", C, false)), "Color", (await $.wv([$t6], "Color", C, false)));
    await $.wset([$t6], "DrawPict", (await $.mv((await $.wv([$t6], "TPicture", C, false)), "Create")), { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true });
    await $.wset([$t6], "H", 0, { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true });
    try {
      if ($.truthy((await $.and_(($.ne((await $.wv([$t6], "Datafield", C, false)), "")), async () => ($.ne((await $.wv([$t6], "Dataset", C, false)), null)))))) {
        try {
          await $.wset([$t6], "S", (await $.wcall([$t6], "ExpandFileName", [(await $.mv((await $.mcall((await $.wv([$t6], "Dataset", C, false)), "FindField", [(await $.wv([$t6], "DataField", C, false))])), "AsString"))], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          if ($.truthy($.eq((await $.wcall([$t6], "ExtractFileExt", [(await $.wv([$t6], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)), ""))) {
            await $.wset([$t6], "S", (await $.wcall([$t6], "ChangeFileExt", [(await $.wv([$t6], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)), ".BMP"], C)), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
          }
          if ($.truthy((await $.wcall([$t6], "FileExists", [(await $.wv([$t6], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))], C)))) {
            await $.stmt((await $.mcall((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "LoadFromFile", [(await $.wv([$t6], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))])));
          }
        } catch ($t7) {
          $.rethrowControl($t7);
          $.handled($t7);
        }
        if ($.truthy((await $.and_(($.is_((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Graphic")), "TBitmap")), async () => ($.ne((await $.mv((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Bitmap")), "Palette")), 0)))))) {
          await $.wset([$t6], "H", (await $.wcall([$t6], "SelectPalette", [(await $.wv([$t6], "Handle", C, false)), (await $.mv((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Bitmap")), "Palette")), (await $.wv([$t6], "false", C, false))], C)), { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true });
          await $.stmt((await $.wcall([$t6], "RealizePalette", [(await $.wv([$t6], "Handle", C, false))], C)));
        }
        await $.mset((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left", (await $.mcall((await $.wv([$t6], "QRPrinter", C, false)), "XPos", [$.add((await $.wv([$t6], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t6], "Size", C, false)), "Left")))])));
        await $.mset((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top", (await $.mcall((await $.wv([$t6], "QRPrinter", C, false)), "YPos", [$.add((await $.wv([$t6], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t6], "Size", C, false)), "Top")))])));
        await $.mset((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right", (await $.mcall((await $.wv([$t6], "QRPrinter", C, false)), "XPos", [$.add($.add((await $.wv([$t6], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t6], "Size", C, false)), "Width"))), (await $.mv((await $.wv([$t6], "Size", C, false)), "Left")))])));
        await $.mset((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom", (await $.mcall((await $.wv([$t6], "QRPrinter", C, false)), "YPos", [$.add($.add((await $.wv([$t6], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t6], "Size", C, false)), "Height"))), (await $.mv((await $.wv([$t6], "Size", C, false)), "Top")))])));
        if ($.truthy((await $.wv([$t6], "Stretch", C, false)))) {
          if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Graphic")), null)), async () => (await $.mv((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Graphic")), "Empty")))))) {
            await $.stmt((await $.wcall([$t6], "FillRect", [(await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false))], C)));
          } else {
            if ($.truthy($.is_((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Graphic")), "TBitmap"))) {
              await $.stmt((await $.wcall([$t6], "PrintBitmap", [(await $.mv((await $.wv([$t6], "QRPrinter", C, false)), "Canvas")), (await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), (await $.wcall([$t6], "TBitmap", [(await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Graphic"))], C))], { get: async () => L0["printbitmap"], set: async (v) => { L0["printbitmap"] = v; }, local: true })));
            } else {
              await $.stmt((await $.wcall([$t6], "StretchDraw", [(await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Graphic"))], C)));
            }
          }
        } else {
          await $.stmt((await $.wcall([$t6], "IntersectClipRect", [(await $.wv([$t6], "Handle", C, false)), (await $.mv((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top")), (await $.mv((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right")), (await $.mv((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom"))], C)));
          await $.mset((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left")), (await $.wcall([$t6], "round", [$.mul($.mul($.fdiv((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Width")), (await $.mv((await $.wv([$t6], "Screen", C, false)), "PixelsPerInch"))), 254), (await $.mv((await $.mv((await $.wv([$t6], "ParentReport", C, false)), "QRPrinter")), "XFactor")))], C))));
          await $.mset((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top")), (await $.wcall([$t6], "round", [$.mul($.mul($.fdiv((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Height")), (await $.mv((await $.wv([$t6], "Screen", C, false)), "PixelsPerInch"))), 254), (await $.mv((await $.mv((await $.wv([$t6], "ParentReport", C, false)), "QRPrinter")), "YFactor")))], C))));
          if ($.truthy((await $.wv([$t6], "Center", C, false)))) {
            await $.stmt((await $.wcall([$t6], "OffsetRect", [(await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), $.idiv(($.sub((await $.mcall((await $.wv([$t6], "QRPrinter", C, false)), "XSize", [(await $.mv((await $.wv([$t6], "Size", C, false)), "Width"))])), (await $.wcall([$t6], "round", [$.mul($.mul($.fdiv((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Width")), (await $.mv((await $.wv([$t6], "Screen", C, false)), "PixelsPerInch"))), 254), (await $.mv((await $.mv((await $.wv([$t6], "ParentReport", C, false)), "QRPrinter")), "XFactor")))], C)))), 2), $.idiv(($.sub((await $.mcall((await $.wv([$t6], "QRPrinter", C, false)), "YSize", [(await $.mv((await $.wv([$t6], "Size", C, false)), "Height"))])), (await $.wcall([$t6], "round", [$.mul($.mul($.fdiv((await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Height")), (await $.mv((await $.wv([$t6], "Screen", C, false)), "PixelsPerInch"))), 254), (await $.mv((await $.mv((await $.wv([$t6], "ParentReport", C, false)), "QRPrinter")), "YFactor")))], C)))), 2)], C)));
          }
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t6], "QRPrinter", C, false)), "Canvas")), "StretchDraw", [(await $.wv([$t6], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Graphic"))])));
          await $.stmt((await $.wcall([$t6], "SelectClipRgn", [(await $.wv([$t6], "Handle", C, false)), 0], C)));
        }
      }
    } finally {
      if ($.truthy($.ne((await $.wv([$t6], "H", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false)), 0))) {
        await $.stmt((await $.wcall([$t6], "SelectPalette", [(await $.wv([$t6], "Handle", C, false)), (await $.wv([$t6], "H", { get: async () => L0["h"], set: async (v) => { L0["h"] = v; }, local: true }, false)), (await $.wv([$t6], "True", C, false))], C)));
      }
      await $.mcall((await $.wv([$t6], "DrawPict", { get: async () => L0["drawpict"], set: async (v) => { L0["drawpict"] = v; }, local: true }, false)), "Free", []);
    }
  }
  await $.inherited(Self, "TQRPDBImage", "Print", [L0["ofsx"], L0["ofsy"]], arguments);
  await $.set(C, "Height", L0["orgheight"]);
  return L0.result;
}, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["integer", "integer"]});
  U.func("CalculateRotatedPosition", async function CalculateRotatedPosition(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
  const C = $.chain(Self, U);
  const L0 = {"comp": $.copyArg(p0), "fonthandle": $.copyArg(p1), "alignment": $.copyArg(p2), "rect": $.asRef(p3), "zoom": $.copyArg(p4), "printing": $.copyArg(p5), "printofsx": $.copyArg(p6), "printofsy": $.copyArg(p7), "text": $.copyArg(p8), result: undefined, "cheight": 0, "cwidth": 0, "width2": 0, "height2": 0, "dx": 0, "dy": 0, "relpos": 0, "tw": 0, "th": 0, "degree": 0, "size": null, "devicecontext": null, "h": null};
  await $.fixArgs(L0, ["comp", "fonthandle", "alignment", "zoom", "printing", "printofsx", "printofsy", "text"]);
  L0["devicecontext"] = (await $.call(C, "GetDC", [0]));
  L0["h"] = (await $.call(C, "SelectObject", [L0["devicecontext"], L0["fonthandle"]]));
  await $.stmt((await $.call(C, "GetTextExtentPoint32", [L0["devicecontext"], (await $.idx(L0["text"], [1])), (await $.call(C, "Length", [L0["text"]])), L0["size"]])));
  await $.stmt((await $.call(C, "SelectObject", [L0["devicecontext"], L0["h"]])));
  await $.stmt((await $.call(C, "ReleaseDC", [0, L0["devicecontext"]])));
  L0["tw"] = (await $.mv(L0["size"], "cx"));
  L0["th"] = (await $.mv(L0["size"], "cy"));
  L0["degree"] = (await $.call(C, "GetIntegerProperty", [L0["comp"], "Degree"]));
  if ($.truthy(($.le(L0["degree"], 900)))) {
    L0["dx"] = 0;
  } else {
    if ($.truthy(($.le(L0["degree"], 1800)))) {
      L0["dx"] = (await $.call(C, "Trunc", [$.mul(L0["tw"], (-((await $.call(C, "cos", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))))]));
    } else {
      if ($.truthy(($.le(L0["degree"], 2700)))) {
        L0["dx"] = (await $.call(C, "Trunc", [$.add($.mul(L0["tw"], (-((await $.call(C, "cos", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)]))))), $.mul(L0["th"], (await $.call(C, "sin", [$.fdiv($.mul(($.sub(L0["degree"], 1800)), (await $.v(C, "Pi"))), 1800)]))))]));
      } else {
        L0["dx"] = (await $.call(C, "Trunc", [$.mul(L0["th"], (await $.call(C, "sin", [$.fdiv($.mul(($.sub(3600, L0["degree"])), (await $.v(C, "Pi"))), 1800)])))]));
      }
    }
  }
  if ($.truthy(($.le(L0["degree"], 900)))) {
    L0["dy"] = (await $.call(C, "Trunc", [$.mul(L0["tw"], (await $.call(C, "Sin", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))]));
  } else {
    if ($.truthy(($.le(L0["degree"], 1800)))) {
      L0["dy"] = (await $.call(C, "Trunc", [$.add($.mul(L0["tw"], (await $.call(C, "sin", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)]))), $.mul(L0["th"], (await $.call(C, "cos", [$.fdiv($.mul(($.sub(1800, L0["degree"])), (await $.v(C, "Pi"))), 1800)]))))]));
    } else {
      if ($.truthy(($.le(L0["degree"], 2700)))) {
        L0["dy"] = (await $.call(C, "Trunc", [$.mul(L0["th"], (await $.call(C, "sin", [$.fdiv($.mul(($.sub(2700, L0["degree"])), (await $.v(C, "Pi"))), 1800)])))]));
      } else {
        L0["dy"] = 0;
      }
    }
  }
  if ($.truthy(L0["printing"])) {
    await $.mset((await L0["rect"].get()), "Left", $.add((await $.mv((await L0["rect"].get()), "Left")), L0["dx"]));
    await $.mset((await L0["rect"].get()), "Top", $.add((await $.mv((await L0["rect"].get()), "Top")), L0["dy"]));
    L0["width2"] = (await $.call(C, "Round", [$.add((await $.call(C, "Abs", [(await $.call(C, "Int", [$.mul(L0["tw"], (await $.call(C, "cos", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))]))])), (await $.call(C, "Abs", [(await $.call(C, "Trunc", [$.mul(L0["th"], (await $.call(C, "sin", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))]))])))]));
    L0["height2"] = (await $.call(C, "Round", [$.add((await $.call(C, "Abs", [(await $.call(C, "Int", [$.mul(L0["tw"], (await $.call(C, "sin", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))]))])), (await $.call(C, "Abs", [(await $.call(C, "Trunc", [$.mul(L0["th"], (await $.call(C, "cos", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))]))])))]));
    L0["cwidth"] = (await $.call(C, "Round", [$.fdiv($.mul((await $.mv(L0["comp"], "Width")), 100), L0["zoom"])]));
    L0["cheight"] = (await $.call(C, "Round", [$.fdiv($.mul((await $.mv(L0["comp"], "Height")), 100), L0["zoom"])]));
  } else {
    await $.mset((await L0["rect"].get()), "Left", $.add((await $.mv((await L0["rect"].get()), "Left")), (await $.call(C, "Round", [$.fdiv($.mul(L0["dx"], L0["zoom"]), 100)]))));
    await $.mset((await L0["rect"].get()), "Top", $.add((await $.mv((await L0["rect"].get()), "Top")), (await $.call(C, "Round", [$.fdiv($.mul(L0["dy"], L0["zoom"]), 100)]))));
    L0["cwidth"] = (await $.mv(L0["comp"], "Width"));
    L0["cheight"] = (await $.mv(L0["comp"], "Height"));
    L0["width2"] = (await $.call(C, "Round", [$.fdiv($.mul(($.add((await $.call(C, "Abs", [(await $.call(C, "Trunc", [$.mul(L0["tw"], (await $.call(C, "cos", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))]))])), (await $.call(C, "Abs", [(await $.call(C, "Trunc", [$.mul(L0["th"], (await $.call(C, "sin", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))]))])))), L0["zoom"]), 100)]));
    L0["height2"] = (await $.call(C, "Round", [$.fdiv($.mul(($.add((await $.call(C, "Abs", [(await $.call(C, "Trunc", [$.mul(L0["tw"], (await $.call(C, "sin", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))]))])), (await $.call(C, "Abs", [(await $.call(C, "Trunc", [$.mul(L0["th"], (await $.call(C, "cos", [$.fdiv($.mul(L0["degree"], (await $.v(C, "Pi"))), 1800)])))]))])))), L0["zoom"]), 100)]));
  }
  if ($.truthy((await $.call(C, "GetBooleanProperty", [L0["comp"], "Autosize"])))) {
    await $.mset(L0["comp"], "Width", L0["width2"]);
    await $.mset(L0["comp"], "Height", L0["height2"]);
  } else {
    if ($.truthy($.eq(L0["alignment"], (await $.v(C, "taLeftJustify"))))) {
      if ($.truthy(($.le(L0["degree"], 1800)))) {
        await $.mset((await L0["rect"].get()), "Top", $.sub($.add((await $.mv((await L0["rect"].get()), "Top")), L0["cheight"]), L0["height2"]));
      }
      if ($.truthy((await $.and_(($.gt(L0["degree"], 900)), async () => ($.le(L0["degree"], 2700)))))) {
        await $.mset((await L0["rect"].get()), "Left", $.sub($.add((await $.mv((await L0["rect"].get()), "Left")), L0["cwidth"]), L0["width2"]));
      }
    } else {
      if ($.truthy($.eq(L0["alignment"], (await $.v(C, "taCenter"))))) {
        if ($.truthy($.eq(L0["degree"], 2700))) {
          await $.mset((await L0["rect"].get()), "Left", $.sub($.add((await $.mv((await L0["rect"].get()), "Left")), L0["cwidth"]), L0["width2"]));
        } else {
          if ($.truthy($.not(($.eq(L0["degree"], 900))))) {
            await $.mset((await L0["rect"].get()), "Left", $.add((await $.mv((await L0["rect"].get()), "Left")), ($.idiv(($.sub(L0["cwidth"], L0["width2"])), 2))));
          }
        }
        if ($.truthy($.eq(L0["degree"], 1800))) {
          await $.mset((await L0["rect"].get()), "Top", $.sub($.add((await $.mv((await L0["rect"].get()), "Top")), L0["cheight"]), L0["height2"]));
        } else {
          await $.mset((await L0["rect"].get()), "Top", $.add((await $.mv((await L0["rect"].get()), "Top")), ($.idiv(($.sub(L0["cheight"], L0["height2"])), 2))));
        }
      } else {
        if ($.truthy($.eq(L0["alignment"], (await $.v(C, "taRightJustify"))))) {
          if ($.truthy((await $.or_(($.lt(L0["degree"], 900)), async () => ($.ge(L0["degree"], 2700)))))) {
            await $.mset((await L0["rect"].get()), "Left", $.sub($.add((await $.mv((await L0["rect"].get()), "Left")), L0["cwidth"]), L0["width2"]));
          }
          if ($.truthy(($.ge(L0["degree"], 1800)))) {
            await $.mset((await L0["rect"].get()), "Top", $.sub($.add((await $.mv((await L0["rect"].get()), "Top")), L0["cheight"]), L0["height2"]));
          }
        }
      }
    }
  }
  if ($.truthy((await $.and_(L0["printing"], async () => ($.eq((await $.mv((await $.mv((await $.mv(L0["comp"], "ParentReport")), "QRPrinter")), "Destination")), (await $.v(C, "qrdPrinter")))))))) {
    {
      const $t8 = (await $.mv((await $.mv(L0["comp"], "ParentReport")), "QRPrinter"));
      const $t9 = (await $.wv([$t8], "Rect", { get: async () => await L0["rect"].get(), set: async (v) => { await L0["rect"].set(v); }, local: true }, false));
      await $.wset([$t8, $t9], "RelPos", $.fdiv((await $.wv([$t8, $t9], "Left", C, false)), (await $.wv([$t8, $t9], "Right", C, false))), { get: async () => L0["relpos"], set: async (v) => { L0["relpos"] = v; }, local: true });
      await $.wset([$t8, $t9], "Left", (await $.wcall([$t8, $t9], "XPos", [$.add((await $.wv([$t8, $t9], "PrintOfsX", { get: async () => L0["printofsx"], set: async (v) => { L0["printofsx"] = v; }, local: true }, false)), (await $.mv((await $.mv((await $.wv([$t8, $t9], "Comp", { get: async () => L0["comp"], set: async (v) => { L0["comp"] = v; }, local: true }, false)), "Size")), "Left")))], C)), C);
      await $.wset([$t8, $t9], "Right", (await $.wcall([$t8, $t9], "XPos", [$.add($.add((await $.wv([$t8, $t9], "PrintOfsX", { get: async () => L0["printofsx"], set: async (v) => { L0["printofsx"] = v; }, local: true }, false)), (await $.mv((await $.mv((await $.wv([$t8, $t9], "Comp", { get: async () => L0["comp"], set: async (v) => { L0["comp"] = v; }, local: true }, false)), "Size")), "Left"))), (await $.mv((await $.mv((await $.wv([$t8, $t9], "Comp", { get: async () => L0["comp"], set: async (v) => { L0["comp"] = v; }, local: true }, false)), "Size")), "Width")))], C)), C);
      await $.wset([$t8, $t9], "Left", $.add((await $.wcall([$t8, $t9], "Round", [$.mul(($.sub((await $.wv([$t8, $t9], "Right", C, false)), (await $.wv([$t8, $t9], "Left", C, false)))), (await $.wv([$t8, $t9], "RelPos", { get: async () => L0["relpos"], set: async (v) => { L0["relpos"] = v; }, local: true }, false)))], C)), (await $.wv([$t8, $t9], "Left", C, false))), C);
      await $.wset([$t8, $t9], "RelPos", $.fdiv((await $.wv([$t8, $t9], "Top", C, false)), (await $.wv([$t8, $t9], "Bottom", C, false))), { get: async () => L0["relpos"], set: async (v) => { L0["relpos"] = v; }, local: true });
      await $.wset([$t8, $t9], "Top", (await $.wcall([$t8, $t9], "YPos", [$.add((await $.wv([$t8, $t9], "PrintOfsY", { get: async () => L0["printofsy"], set: async (v) => { L0["printofsy"] = v; }, local: true }, false)), (await $.mv((await $.mv((await $.wv([$t8, $t9], "Comp", { get: async () => L0["comp"], set: async (v) => { L0["comp"] = v; }, local: true }, false)), "Size")), "Top")))], C)), C);
      await $.wset([$t8, $t9], "Bottom", (await $.wcall([$t8, $t9], "YPos", [$.add($.add((await $.wv([$t8, $t9], "PrintOfsY", { get: async () => L0["printofsy"], set: async (v) => { L0["printofsy"] = v; }, local: true }, false)), (await $.mv((await $.mv((await $.wv([$t8, $t9], "Comp", { get: async () => L0["comp"], set: async (v) => { L0["comp"] = v; }, local: true }, false)), "Size")), "Top"))), (await $.mv((await $.mv((await $.wv([$t8, $t9], "Comp", { get: async () => L0["comp"], set: async (v) => { L0["comp"] = v; }, local: true }, false)), "Size")), "Height")))], C)), C);
      await $.wset([$t8, $t9], "Top", $.add((await $.wcall([$t8, $t9], "Round", [$.mul(($.sub((await $.wv([$t8, $t9], "Bottom", C, false)), (await $.wv([$t8, $t9], "Top", C, false)))), (await $.wv([$t8, $t9], "RelPos", { get: async () => L0["relpos"], set: async (v) => { L0["relpos"] = v; }, local: true }, false)))], C)), (await $.wv([$t8, $t9], "Top", C, false))), C);
    }
  }
  return L0.result;
}, {"params": ["Comp", "FontHandle", "Alignment", "Rect", "Zoom", "Printing", "PrintOfsX", "PrintOfsY", "Text"], "kind": "procedure", "ptypes": ["TQRPrintable", "HFont", "TAlignment", "TRect", "Integer", "Boolean", "Integer", "Integer", "String"]});
  U.method("TQRPLabel", "FormatLines", async function FormatLines(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.v(C, "Degree")), 0))) {
    await $.inherited(Self, "TQRPLabel", "FormatLines", null, arguments);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPLabel", "Paint", async function Paint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "rect": null, "cliprect": null, "logfont": null, "oldfont": null};
  if ($.truthy($.eq((await $.v(C, "Degree")), 0))) {
    await $.inherited(Self, "TQRPLabel", "Paint", null, arguments);
  } else {
    if ($.truthy($.not((await $.v(C, "Transparent"))))) {
      await $.mset((await $.mv((await $.v(C, "Canvas")), "Brush")), "Color", (await $.v(C, "Color")));
      await $.mset((await $.mv((await $.v(C, "Canvas")), "Brush")), "Style", (await $.v(C, "bsSolid")));
      await $.stmt((await $.mcall((await $.v(C, "Canvas")), "FillRect", [(await $.v(C, "ClientRect"))])));
    }
    await $.stmt($.call(C, "PaintCorners", []));
    await $.mset((await $.mv((await $.v(C, "Canvas")), "Brush")), "Style", (await $.v(C, "bsClear")));
    await $.mset((await $.v(C, "Canvas")), "Font", (await $.v(C, "Font")));
    await $.mset((await $.mv((await $.v(C, "Canvas")), "Font")), "Size", (await $.call(C, "round", [$.fdiv($.mul((await $.mv((await $.mv((await $.v(C, "Canvas")), "Font")), "Size")), (await $.v(C, "Zoom"))), 100)])));
    await $.mset((await $.mv((await $.v(C, "Canvas")), "Font")), "Color", (await $.mv((await $.v(C, "Font")), "Color")));
    L0["rect"] = (await $.v(C, "ClientRect"));
    L0["cliprect"] = L0["rect"];
    await $.stmt((await $.call(C, "CalculateRotatedPosition", [Self, (await $.mv((await $.v(C, "Font")), "Handle")), (await $.v(C, "Alignment")), $.ref(async () => L0["rect"], async ($t10) => { L0["rect"] = $t10; }), (await $.v(C, "Zoom")), false, 0, 0, (await $.v(C, "Caption"))])));
    await $.stmt((await $.call(C, "GetObject", [(await $.mv((await $.mv((await $.v(C, "Canvas")), "Font")), "Handle")), (await $.call(C, "SizeOf", [L0["logfont"]])), L0["logfont"]])));
    await $.mset(L0["logfont"], "lfEscapement", (await $.v(C, "Degree")));
    L0["oldfont"] = (await $.call(C, "SelectObject", [(await $.mv((await $.v(C, "Canvas")), "Handle")), (await $.call(C, "CreateFontIndirect", [L0["logfont"]]))]));
    await $.stmt((await $.call(C, "SetTextAlign", [(await $.mv((await $.v(C, "Canvas")), "Handle")), (await $.v(C, "TA_LEFT"))])));
    await $.stmt((await $.mcall((await $.v(C, "Canvas")), "TextRect", [L0["cliprect"], (await $.mv(L0["rect"], "Left")), (await $.mv(L0["rect"], "Top")), (await $.v(C, "Caption"))])));
    await $.stmt((await $.call(C, "DeleteObject", [(await $.call(C, "SelectObject", [(await $.mv((await $.v(C, "Canvas")), "Handle")), L0["oldfont"]]))])));
  }
  L0["rect"] = (await $.v(C, "GetClientRect"));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["rect"], "Bottom")), async ($t11) => { await $.mset(L0["rect"], "Bottom", $t11); })])));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["rect"], "Right")), async ($t12) => { await $.mset(L0["rect"], "Right", $t12); })])));
  await $.stmt((await $.mcall((await $.call(C, "TQRPFrame", [(await $.v(C, "Frame"))])), "PaintIt", [(await $.v(C, "Canvas")), L0["rect"], $.fdiv($.mul($.fdiv((await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), 254), (await $.v(C, "Zoom"))), 100), $.fdiv($.mul($.fdiv((await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), 254), (await $.v(C, "Zoom"))), 100)])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPLabel", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ofsx": $.copyArg(p0), "ofsy": $.copyArg(p1), result: undefined, "r": null, "cliprect": null, "logfont": null, "oldfont": null, "orgheight": 0, "bstyle": null, "aalignment": null};
  await $.fixArgs(L0, ["ofsx", "ofsy"]);
  L0["orgheight"] = (await $.v(C, "Height"));
  if ($.truthy((await $.and_((await $.v(C, "FixBottomPosition")), async () => ($.is_((await $.v(C, "Parent")), "TQRCustomBand")))))) {
    L0["ofsy"] = $.add(L0["ofsy"], (await $.call(C, "Round", [(await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded"))])));
  }
  if ($.truthy((await $.v(C, "StretchHeightWithBand")))) {
    await $.set(C, "Height", $.add((await $.v(C, "Height")), (await $.call(C, "Round", [$.mul((await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor")))]))));
  }
  if ($.truthy($.eq((await $.v(C, "Degree")), 0))) {
    await $.inherited(Self, "TQRPLabel", "Print", [L0["ofsx"], L0["ofsy"]], arguments);
    await $.set(C, "Height", L0["orgheight"]);
    return L0.result;
  }
  await $.mset(L0["r"], "Left", (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left")))])));
  await $.mset(L0["r"], "Top", (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top")))])));
  await $.mset(L0["r"], "Right", (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add($.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left"))), (await $.mv((await $.v(C, "Size")), "Width")))])));
  await $.mset(L0["r"], "Bottom", (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add($.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top"))), (await $.mv((await $.v(C, "Size")), "Height")))])));
  L0["bstyle"] = (await $.mv((await $.mv((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "Brush")), "Style"));
  if ($.truthy($.not((await $.v(C, "Transparent"))))) {
    await $.mset((await $.mv((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "Brush")), "Style", (await $.v(C, "bsSolid")));
    await $.mset((await $.mv((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "Brush")), "Color", (await $.v(C, "Color")));
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "FillRect", [L0["r"]])));
  } else {
    await $.mset((await $.mv((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "Brush")), "Style", (await $.v(C, "bsClear")));
  }
  {
    const $t13 = (await $.mv((await $.v(C, "ParentReport")), "QRPrinter"));
    await $.mset((await $.wv([$t13], "Canvas", C, false)), "Font", (await $.wv([$t13], "Font", C, false)));
    await $.mset((await $.mv((await $.wv([$t13], "Canvas", C, false)), "Font")), "Color", (await $.mv((await $.wv([$t13], "Font", C, false)), "Color")));
    await $.wset([$t13], "ClipRect", (await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), { get: async () => L0["cliprect"], set: async (v) => { L0["cliprect"] = v; }, local: true });
    if ($.truthy(($.eq((await $.wv([$t13], "Destination", C, false)), (await $.wv([$t13], "qrdPrinter", C, false)))))) {
      await $.wset([$t13], "R", (await $.wv([$t13], "ClientRect", C, false)), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
      await $.mset((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left", (await $.wcall([$t13], "Round", [$.fdiv($.mul((await $.mv((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left")), 100), (await $.wv([$t13], "Zoom", C, false)))], C)));
      await $.mset((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Right", (await $.wcall([$t13], "Round", [$.fdiv($.mul((await $.mv((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Right")), 100), (await $.wv([$t13], "Zoom", C, false)))], C)));
      await $.mset((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top", (await $.wcall([$t13], "Round", [$.fdiv($.mul((await $.mv((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top")), 100), (await $.wv([$t13], "Zoom", C, false)))], C)));
      await $.mset((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Bottom", (await $.wcall([$t13], "Round", [$.fdiv($.mul((await $.mv((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Bottom")), 100), (await $.wv([$t13], "Zoom", C, false)))], C)));
    }
    await $.wset([$t13], "AAlignment", (await $.wv([$t13], "Alignment", C, false)), { get: async () => L0["aalignment"], set: async (v) => { L0["aalignment"] = v; }, local: true });
    await $.stmt((await $.wcall([$t13], "SetTextAlign", [(await $.mv((await $.wv([$t13], "Canvas", C, false)), "Handle")), $.add($.add((await $.wv([$t13], "TA_Left", C, false)), (await $.wv([$t13], "TA_Top", C, false))), (await $.wv([$t13], "TA_NoUpdateCP", C, false)))], C)));
    await $.stmt((await $.wcall([$t13], "CalculateRotatedPosition", [Self, (await $.mv((await $.wv([$t13], "Font", C, false)), "Handle")), (await $.wv([$t13], "AAlignment", { get: async () => L0["aalignment"], set: async (v) => { L0["aalignment"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), async ($t14) => { await $.wset([$t13], "R", $t14, { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }); }), (await $.wv([$t13], "Zoom", C, false)), (await $.wv([$t13], "True", C, false)), (await $.wv([$t13], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.wv([$t13], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.wv([$t13], "Caption", C, false))], C)));
    await $.stmt((await $.wcall([$t13], "GetObject", [(await $.mv((await $.mv((await $.wv([$t13], "Canvas", C, false)), "Font")), "Handle")), (await $.wcall([$t13], "SizeOf", [(await $.wv([$t13], "LogFont", { get: async () => L0["logfont"], set: async (v) => { L0["logfont"] = v; }, local: true }, false))], C)), (await $.wv([$t13], "LogFont", { get: async () => L0["logfont"], set: async (v) => { L0["logfont"] = v; }, local: true }, true))], C)));
    await $.mset((await $.wv([$t13], "LogFont", { get: async () => L0["logfont"], set: async (v) => { L0["logfont"] = v; }, local: true }, false)), "lfEscapement", (await $.wv([$t13], "Degree", C, false)));
    await $.wset([$t13], "OldFont", (await $.wcall([$t13], "SelectObject", [(await $.mv((await $.wv([$t13], "Canvas", C, false)), "Handle")), (await $.wcall([$t13], "CreateFontIndirect", [(await $.wv([$t13], "LogFont", { get: async () => L0["logfont"], set: async (v) => { L0["logfont"] = v; }, local: true }, false))], C))], C)), { get: async () => L0["oldfont"], set: async (v) => { L0["oldfont"] = v; }, local: true });
    await $.stmt((await $.wcall([$t13], "SetTextAlign", [(await $.mv((await $.wv([$t13], "Canvas", C, false)), "Handle")), (await $.wv([$t13], "TA_LEFT", C, false))], C)));
    await $.stmt((await $.mcall((await $.wv([$t13], "Canvas", C, false)), "TextRect", [(await $.wv([$t13], "ClipRect", { get: async () => L0["cliprect"], set: async (v) => { L0["cliprect"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t13], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top")), (await $.wv([$t13], "Caption", C, false))])));
    await $.stmt((await $.wcall([$t13], "DeleteObject", [(await $.wcall([$t13], "SelectObject", [(await $.mv((await $.wv([$t13], "Canvas", C, false)), "Handle")), (await $.wv([$t13], "OldFont", { get: async () => L0["oldfont"], set: async (v) => { L0["oldfont"] = v; }, local: true }, false))], C))], C)));
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ParentReport")), "FinalPass")), async () => (await $.mv((await $.v(C, "Frame")), "AnyFrame")))))) {
    await $.stmt((await $.mcall((await $.call(C, "TQRPFrame", [(await $.v(C, "Frame"))])), "PaintIt", [(await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), (await $.call(C, "Rect", [(await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add($.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left"))), (await $.mv((await $.v(C, "Size")), "Width")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add($.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top"))), (await $.mv((await $.v(C, "Size")), "Height")))]))])), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XFactor")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor"))])));
  }
  await $.set(C, "Height", L0["orgheight"]);
  await $.mset((await $.mv((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "Brush")), "Style", L0["bstyle"]);
  return L0.result;
}, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["Integer", "Integer"]});
  U.method("TQRPLabel", "SetDegree", async function SetDegree(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne(L0["value"], (await $.v(C, "FDegree"))))) {
    if ($.truthy($.ne(L0["value"], 0))) {
      await $.set(C, "AutoSize", false);
    }
    while ($.truthy($.gt(L0["value"], 3600))) {
      L0["value"] = $.sub(L0["value"], 3600);
      await $.tick();
    }
    await $.set(C, "FDegree", L0["value"]);
    await $.stmt($.call(C, "Invalidate", []));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Word"]});
  U.method("TQRPDBText", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ofsx": $.copyArg(p0), "ofsy": $.copyArg(p1), result: undefined, "orgheight": 0};
  await $.fixArgs(L0, ["ofsx", "ofsy"]);
  L0["orgheight"] = (await $.v(C, "Height"));
  if ($.truthy((await $.and_((await $.v(C, "FixBottomPosition")), async () => ($.is_((await $.v(C, "Parent")), "TQRCustomBand")))))) {
    L0["ofsy"] = $.add(L0["ofsy"], (await $.call(C, "Round", [(await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded"))])));
  }
  if ($.truthy((await $.v(C, "StretchHeightWithBand")))) {
    await $.set(C, "Height", $.add((await $.v(C, "Height")), (await $.call(C, "Round", [$.mul((await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor")))]))));
  }
  await $.set(C, "OldOnPrint", (await $.v(C, "OnPrint")));
  await $.set(C, "OnPrint", (await $.ref_(C, "DBTextOnPrint")));
  await $.inherited(Self, "TQRPDBText", "Print", [L0["ofsx"], L0["ofsy"]], arguments);
  await $.set(C, "OnPrint", (await $.ref_(C, "OldOnPrint")));
  await $.set(C, "Height", L0["orgheight"]);
  return L0.result;
}, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["Integer", "Integer"]});
  U.method("TQRPDBText", "DBTextOnPrint", async function DBTextOnPrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "value": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "SuppressRepeatedValues")))) {
    if ($.truthy($.eq((await L0["value"].get()), (await $.v(C, "LastValue"))))) {
      if ($.truthy($.not(((await $.and_((await $.v(C, "ReprintOnNewPage")), async () => ($.ne((await $.mv((await $.v(C, "ParentReport")), "PageNumber")), (await $.v(C, "LastPage")))))))))) {
        await L0["value"].set("");
      }
    } else {
      await $.set(C, "LastValue", (await L0["value"].get()));
    }
    await $.set(C, "LastPage", (await $.mv((await $.v(C, "ParentReport")), "PageNumber")));
  }
  if ($.truthy((await $.v(C, "BlankIfZero")))) {
    try {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.v(C, "Dataset")), "FieldByName", [(await $.v(C, "DataField"))])), "AsFloat")), 0))) {
        await L0["value"].set("");
      }
    } catch ($t15) {
      $.rethrowControl($t15);
      $.handled($t15);
    }
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FOldOnPrint"))])))) {
    await $.stmt((await $.call(C, "OldOnPrint", [L0["sender"], (await L0["value"].get())])));
  }
  if ($.truthy($.ne((await L0["value"].get()), (await $.v(C, "Caption"))))) {
    await $.set(C, "Caption", (await L0["value"].get()));
  }
  await $.stmt($.call(C, "FormatLines", []));
  return L0.result;
}, {"params": ["sender", "Value"], "kind": "procedure", "ptypes": ["TObject", "String"]});
  U.method("TQRPExpr", "Paint", async function Paint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "rect": null, "cliprect": null, "logfont": null, "oldfont": null};
  if ($.truthy($.eq((await $.v(C, "Degree")), 0))) {
    await $.inherited(Self, "TQRPExpr", "Paint", null, arguments);
  } else {
    if ($.truthy($.not((await $.v(C, "Transparent"))))) {
      await $.mset((await $.mv((await $.v(C, "Canvas")), "Brush")), "Color", (await $.v(C, "Color")));
      await $.mset((await $.mv((await $.v(C, "Canvas")), "Brush")), "Style", (await $.v(C, "bsSolid")));
      await $.stmt((await $.mcall((await $.v(C, "Canvas")), "FillRect", [(await $.v(C, "ClientRect"))])));
    }
    await $.stmt($.call(C, "PaintCorners", []));
    await $.mset((await $.mv((await $.v(C, "Canvas")), "Brush")), "Style", (await $.v(C, "bsClear")));
    await $.mset((await $.v(C, "Canvas")), "Font", (await $.v(C, "Font")));
    await $.mset((await $.mv((await $.v(C, "Canvas")), "Font")), "Size", (await $.call(C, "round", [$.fdiv($.mul((await $.mv((await $.mv((await $.v(C, "Canvas")), "Font")), "Size")), (await $.v(C, "Zoom"))), 100)])));
    await $.mset((await $.mv((await $.v(C, "Canvas")), "Font")), "Color", (await $.mv((await $.v(C, "Font")), "Color")));
    L0["rect"] = (await $.v(C, "ClientRect"));
    L0["cliprect"] = L0["rect"];
    await $.stmt((await $.call(C, "CalculateRotatedPosition", [Self, (await $.mv((await $.v(C, "Font")), "Handle")), (await $.v(C, "Alignment")), $.ref(async () => L0["rect"], async ($t16) => { L0["rect"] = $t16; }), (await $.v(C, "Zoom")), false, 0, 0, (await $.v(C, "Caption"))])));
    await $.stmt((await $.call(C, "GetObject", [(await $.mv((await $.mv((await $.v(C, "Canvas")), "Font")), "Handle")), (await $.call(C, "SizeOf", [L0["logfont"]])), L0["logfont"]])));
    await $.mset(L0["logfont"], "lfEscapement", (await $.v(C, "Degree")));
    L0["oldfont"] = (await $.call(C, "SelectObject", [(await $.mv((await $.v(C, "Canvas")), "Handle")), (await $.call(C, "CreateFontIndirect", [L0["logfont"]]))]));
    await $.stmt((await $.call(C, "SetTextAlign", [(await $.mv((await $.v(C, "Canvas")), "Handle")), (await $.v(C, "TA_LEFT"))])));
    await $.stmt((await $.mcall((await $.v(C, "Canvas")), "TextRect", [L0["cliprect"], (await $.mv(L0["rect"], "Left")), (await $.mv(L0["rect"], "Top")), (await $.v(C, "Caption"))])));
    await $.stmt((await $.call(C, "DeleteObject", [(await $.call(C, "SelectObject", [(await $.mv((await $.v(C, "Canvas")), "Handle")), L0["oldfont"]]))])));
  }
  L0["rect"] = (await $.v(C, "GetClientRect"));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["rect"], "Bottom")), async ($t17) => { await $.mset(L0["rect"], "Bottom", $t17); })])));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["rect"], "Right")), async ($t18) => { await $.mset(L0["rect"], "Right", $t18); })])));
  await $.stmt((await $.mcall((await $.call(C, "TQRPFrame", [(await $.v(C, "Frame"))])), "PaintIt", [(await $.v(C, "Canvas")), L0["rect"], $.fdiv($.mul($.fdiv((await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), 254), (await $.v(C, "Zoom"))), 100), $.fdiv($.mul($.fdiv((await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), 254), (await $.v(C, "Zoom"))), 100)])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPExpr", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ofsx": $.copyArg(p0), "ofsy": $.copyArg(p1), result: undefined, "r": null, "cliprect": null, "logfont": null, "oldfont": null, "avalue": null, "orgheight": 0, "aalignment": null};
  await $.fixArgs(L0, ["ofsx", "ofsy"]);
  L0["orgheight"] = (await $.v(C, "Height"));
  if ($.truthy((await $.and_((await $.v(C, "FixBottomPosition")), async () => ($.is_((await $.v(C, "Parent")), "TQRCustomBand")))))) {
    L0["ofsy"] = $.add(L0["ofsy"], (await $.call(C, "Round", [(await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded"))])));
  }
  if ($.truthy((await $.v(C, "StretchHeightWithBand")))) {
    await $.set(C, "Height", $.add((await $.v(C, "Height")), (await $.call(C, "Round", [$.mul((await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor")))]))));
  }
  if ($.truthy($.eq((await $.v(C, "Degree")), 0))) {
    await $.inherited(Self, "TQRPExpr", "Print", [L0["ofsx"], L0["ofsy"]], arguments);
    await $.set(C, "Height", L0["orgheight"]);
    return L0.result;
  }
  L0["avalue"] = (await $.v(C, "Value"));
  { const $t19 = (await $.mv(L0["avalue"], "Kind"));
    if ($.eq($t19, (await $.v(C, "resInt")))) {
      await $.set(C, "Caption", (await $.call(C, "FormatFloat", [(await $.v(C, "Mask")), $.mul((await $.mv(L0["avalue"], "IntResult")), 1.0)])));
    }
    else if ($.eq($t19, (await $.v(C, "resString")))) {
      await $.set(C, "Caption", (await $.mv(L0["avalue"], "StringVal")));
    }
    else if ($.eq($t19, (await $.v(C, "resDouble")))) {
      await $.set(C, "Caption", (await $.call(C, "FormatFloat", [(await $.v(C, "Mask")), (await $.mv(L0["avalue"], "DblResult"))])));
    }
    else if ($.eq($t19, (await $.v(C, "resBool")))) {
      if ($.truthy((await $.mv(L0["avalue"], "booResult")))) {
        await $.set(C, "Caption", "True");
      } else {
        await $.set(C, "Caption", "False");
      }
    }
    else if ($.eq($t19, (await $.v(C, "resError")))) {
      await $.set(C, "Caption", (await $.v(C, "Expression")));
    }
  }
  await $.mset(L0["r"], "Left", (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left")))])));
  await $.mset(L0["r"], "Top", (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top")))])));
  await $.mset(L0["r"], "Right", (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add($.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left"))), (await $.mv((await $.v(C, "Size")), "Width")))])));
  await $.mset(L0["r"], "Bottom", (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add($.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top"))), (await $.mv((await $.v(C, "Size")), "Height")))])));
  if ($.truthy($.not((await $.v(C, "Transparent"))))) {
    await $.mset((await $.mv((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "Brush")), "Style", (await $.v(C, "bsSolid")));
    await $.mset((await $.mv((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "Brush")), "Color", (await $.v(C, "Color")));
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "FillRect", [L0["r"]])));
  }
  await $.mset((await $.mv((await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), "Brush")), "Style", (await $.v(C, "bsClear")));
  {
    const $t20 = (await $.mv((await $.v(C, "ParentReport")), "QRPrinter"));
    await $.mset((await $.wv([$t20], "Canvas", C, false)), "Font", (await $.wv([$t20], "Font", C, false)));
    await $.mset((await $.mv((await $.wv([$t20], "Canvas", C, false)), "Font")), "Color", (await $.mv((await $.wv([$t20], "Font", C, false)), "Color")));
    await $.wset([$t20], "ClipRect", (await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), { get: async () => L0["cliprect"], set: async (v) => { L0["cliprect"] = v; }, local: true });
    if ($.truthy(($.eq((await $.wv([$t20], "Destination", C, false)), (await $.wv([$t20], "qrdPrinter", C, false)))))) {
      await $.wset([$t20], "R", (await $.wv([$t20], "ClientRect", C, false)), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
      await $.mset((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left", (await $.wcall([$t20], "Round", [$.fdiv($.mul((await $.mv((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left")), 100), (await $.wv([$t20], "Zoom", C, false)))], C)));
      await $.mset((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Right", (await $.wcall([$t20], "Round", [$.fdiv($.mul((await $.mv((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Right")), 100), (await $.wv([$t20], "Zoom", C, false)))], C)));
      await $.mset((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top", (await $.wcall([$t20], "Round", [$.fdiv($.mul((await $.mv((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top")), 100), (await $.wv([$t20], "Zoom", C, false)))], C)));
      await $.mset((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Bottom", (await $.wcall([$t20], "Round", [$.fdiv($.mul((await $.mv((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Bottom")), 100), (await $.wv([$t20], "Zoom", C, false)))], C)));
    }
    await $.wset([$t20], "AAlignment", (await $.wv([$t20], "Alignment", C, false)), { get: async () => L0["aalignment"], set: async (v) => { L0["aalignment"] = v; }, local: true });
    await $.stmt((await $.wcall([$t20], "SetTextAlign", [(await $.mv((await $.wv([$t20], "Canvas", C, false)), "Handle")), $.add($.add((await $.wv([$t20], "TA_Left", C, false)), (await $.wv([$t20], "TA_Top", C, false))), (await $.wv([$t20], "TA_NoUpdateCP", C, false)))], C)));
    await $.stmt((await $.wcall([$t20], "CalculateRotatedPosition", [Self, (await $.mv((await $.wv([$t20], "Font", C, false)), "Handle")), (await $.wv([$t20], "AAlignment", { get: async () => L0["aalignment"], set: async (v) => { L0["aalignment"] = v; }, local: true }, false)), $.ref(async () => (await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), async ($t21) => { await $.wset([$t20], "R", $t21, { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }); }), (await $.wv([$t20], "Zoom", C, false)), (await $.wv([$t20], "True", C, false)), (await $.wv([$t20], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.wv([$t20], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.wv([$t20], "Caption", C, false))], C)));
    await $.stmt((await $.wcall([$t20], "GetObject", [(await $.mv((await $.mv((await $.wv([$t20], "Canvas", C, false)), "Font")), "Handle")), (await $.wcall([$t20], "SizeOf", [(await $.wv([$t20], "LogFont", { get: async () => L0["logfont"], set: async (v) => { L0["logfont"] = v; }, local: true }, false))], C)), (await $.wv([$t20], "LogFont", { get: async () => L0["logfont"], set: async (v) => { L0["logfont"] = v; }, local: true }, true))], C)));
    await $.mset((await $.wv([$t20], "LogFont", { get: async () => L0["logfont"], set: async (v) => { L0["logfont"] = v; }, local: true }, false)), "lfEscapement", (await $.wv([$t20], "Degree", C, false)));
    await $.wset([$t20], "OldFont", (await $.wcall([$t20], "SelectObject", [(await $.mv((await $.wv([$t20], "Canvas", C, false)), "Handle")), (await $.wcall([$t20], "CreateFontIndirect", [(await $.wv([$t20], "LogFont", { get: async () => L0["logfont"], set: async (v) => { L0["logfont"] = v; }, local: true }, false))], C))], C)), { get: async () => L0["oldfont"], set: async (v) => { L0["oldfont"] = v; }, local: true });
    await $.stmt((await $.wcall([$t20], "SetTextAlign", [(await $.mv((await $.wv([$t20], "Canvas", C, false)), "Handle")), (await $.wv([$t20], "TA_LEFT", C, false))], C)));
    await $.stmt((await $.mcall((await $.wv([$t20], "Canvas", C, false)), "TextRect", [(await $.wv([$t20], "ClipRect", { get: async () => L0["cliprect"], set: async (v) => { L0["cliprect"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t20], "R", { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true }, false)), "Top")), (await $.wv([$t20], "Caption", C, false))])));
    await $.stmt((await $.wcall([$t20], "DeleteObject", [(await $.wcall([$t20], "SelectObject", [(await $.mv((await $.wv([$t20], "Canvas", C, false)), "Handle")), (await $.wv([$t20], "OldFont", { get: async () => L0["oldfont"], set: async (v) => { L0["oldfont"] = v; }, local: true }, false))], C))], C)));
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ParentReport")), "FinalPass")), async () => (await $.mv((await $.v(C, "Frame")), "AnyFrame")))))) {
    await $.stmt((await $.mcall((await $.call(C, "TQRPFrame", [(await $.v(C, "Frame"))])), "PaintIt", [(await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), (await $.call(C, "Rect", [(await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add($.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left"))), (await $.mv((await $.v(C, "Size")), "Width")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add($.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top"))), (await $.mv((await $.v(C, "Size")), "Height")))]))])), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XFactor")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor"))])));
  }
  if ($.truthy((await $.v(C, "ResetAfterPrint")))) {
    await $.stmt($.call(C, "Reset", []));
  }
  await $.set(C, "Height", L0["orgheight"]);
  return L0.result;
}, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["Integer", "Integer"]});
  U.method("TQRPExpr", "SetDegree", async function SetDegree(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne(L0["value"], (await $.v(C, "FDegree"))))) {
    if ($.truthy($.ne(L0["value"], 0))) {
      await $.set(C, "AutoSize", false);
    }
    while ($.truthy($.gt(L0["value"], 3600))) {
      L0["value"] = $.sub(L0["value"], 3600);
      await $.tick();
    }
    await $.set(C, "FDegree", L0["value"]);
    await $.stmt($.call(C, "Invalidate", []));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Word"]});
  U.func("EvalStringExpression", async function EvalStringExpression(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"e": $.copyArg(p0), "parentreport": $.copyArg(p1), result: '', "avalue": null, "evaluator": null};
  await $.fixArgs(L0, ["e", "parentreport"]);
  L0.result = "";
  if ($.truthy($.eq(L0["e"], ""))) {
    return L0.result;
  }
  L0["evaluator"] = (await $.mv((await $.v(C, "TQREvaluator")), "Create"));
  await $.mset(L0["evaluator"], "DataSets", (await $.mv(L0["parentreport"], "AllDataSets")));
  await $.stmt((await $.mcall(L0["evaluator"], "Prepare", [L0["e"]])));
  L0["avalue"] = (await $.mv(L0["evaluator"], "Value"));
  if ($.truthy($.eq((await $.mv(L0["avalue"], "Kind")), (await $.v(C, "resString"))))) {
    L0.result = (await $.mv(L0["avalue"], "StringVal"));
  } else {
    L0.result = "";
  }
  await $.mcall(L0["evaluator"], "Unprepare", []);
  await $.mcall(L0["evaluator"], "Free", []);
  return L0.result;
}, {"params": ["E", "ParentReport"], "kind": "function", "ptypes": ["String", "TQuickRep"]});
  U.func("EvalBoolExpression", async function EvalBoolExpression(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"e": $.copyArg(p0), "parentreport": $.copyArg(p1), result: false, "avalue": null, "evaluator": null};
  await $.fixArgs(L0, ["e", "parentreport"]);
  L0.result = true;
  if ($.truthy($.eq(L0["e"], ""))) {
    return L0.result;
  }
  L0["evaluator"] = (await $.mv((await $.v(C, "TQREvaluator")), "Create"));
  try {
    await $.mset(L0["evaluator"], "DataSets", (await $.mv(L0["parentreport"], "AllDataSets")));
    await $.stmt((await $.mcall(L0["evaluator"], "Prepare", [L0["e"]])));
    L0["avalue"] = (await $.mv(L0["evaluator"], "Value"));
    if ($.truthy($.eq((await $.mv(L0["avalue"], "Kind")), (await $.v(C, "resBool"))))) {
      L0.result = (await $.mv(L0["avalue"], "booResult"));
    } else {
      L0.result = true;
    }
    await $.mcall(L0["evaluator"], "Unprepare", []);
  } finally {
    await $.mcall(L0["evaluator"], "Free", []);
  }
  return L0.result;
}, {"params": ["E", "ParentReport"], "kind": "function", "ptypes": ["String", "TQuickRep"]});
  U.method("TQRPMemo", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ofsx": $.copyArg(p0), "ofsy": $.copyArg(p1), result: undefined, "templines": null, "x": 0, "e": '', "s": '', "p": 0, "p2": 0, "orgheight": 0};
  await $.fixArgs(L0, ["ofsx", "ofsy"]);
  L0["orgheight"] = (await $.v(C, "Height"));
  if ($.truthy((await $.and_((await $.v(C, "FixBottomPosition")), async () => ($.is_((await $.v(C, "Parent")), "TQRCustomBand")))))) {
    L0["ofsy"] = $.add(L0["ofsy"], (await $.call(C, "Round", [(await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded"))])));
  }
  if ($.truthy((await $.v(C, "StretchHeightWithBand")))) {
    await $.set(C, "Height", $.add((await $.v(C, "Height")), (await $.call(C, "Round", [$.mul((await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor")))]))));
  }
  L0["templines"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  try {
    await $.stmt((await $.mcall(L0["templines"], "Assign", [(await $.v(C, "Lines"))])));
    if ($.truthy($.gt((await $.mv((await $.v(C, "Lines")), "Count")), 0))) {
      { const $t22 = $.sub((await $.mv((await $.v(C, "Lines")), "Count")), 1);
        L0["x"] = 0;
        let $t23 = true;
        for (;;) {
          if (!$t23) { L0["x"] = $.succ(L0["x"], 1); }
          $t23 = false;
          if (!($.ord(L0["x"]) <= $.ord($t22))) break;
          L0["s"] = (await $.idx((await $.v(C, "Lines")), [L0["x"]]));
          do {
            L0["p"] = (await $.call(C, "Pos", ["%%", L0["s"]]));
            if ($.truthy($.ne(L0["p"], 0))) {
              await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["s"], async ($t24) => { L0["s"] = $t24; }), L0["p"], 2])));
              L0["p2"] = (await $.call(C, "Pos", ["%%", L0["s"]]));
              if ($.truthy($.eq(L0["p2"], 0))) {
                L0["p2"] = $.add((await $.call(C, "Length", [L0["s"]])), 1);
              } else {
                await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["s"], async ($t25) => { L0["s"] = $t25; }), L0["p2"], 2])));
              }
              L0["e"] = (await $.call(C, "Copy", [L0["s"], L0["p"], $.sub(L0["p2"], L0["p"])]));
              await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["s"], async ($t26) => { L0["s"] = $t26; }), L0["p"], $.sub(L0["p2"], L0["p"])])));
              await $.stmt((await $.mcall((await $.v(C, "System")), "Insert", [(await $.call(C, "EvalStringExpression", [L0["e"], (await $.call(C, "TQuickRep", [(await $.v(C, "ParentReport"))]))])), $.ref(async () => L0["s"], async ($t27) => { L0["s"] = $t27; }), L0["p"]])));
              { const $t28 = await $.iset((await $.v(C, "Lines")), [L0["x"]], L0["s"]); if ($t28 !== undefined) { await $.set(C, "Lines", $t28); } }
            }
            await $.tick();
          } while (!$.truthy($.eq(L0["p"], 0)));
          await $.tick();
        }
      }
    }
    if ($.truthy($.gt((await $.mv((await $.v(C, "Lines")), "Count")), 0))) {
      { const $t29 = 0;
        L0["x"] = $.sub((await $.mv((await $.v(C, "Lines")), "Count")), 1);
        let $t30 = true;
        for (;;) {
          if (!$t30) { L0["x"] = $.succ(L0["x"], -1); }
          $t30 = false;
          if (!($.ord(L0["x"]) >= $.ord($t29))) break;
          if ($.truthy($.eq((await $.call(C, "Trim", [(await $.idx((await $.v(C, "Lines")), [L0["x"]]))])), "%DEL"))) {
            await $.stmt((await $.mcall((await $.v(C, "Lines")), "Delete", [$.ref(async () => L0["x"], async ($t31) => { L0["x"] = $t31; })])));
          }
          await $.tick();
        }
      }
    }
    if ($.truthy($.gt((await $.mv((await $.v(C, "Lines")), "Count")), 0))) {
      { const $t32 = $.sub((await $.mv((await $.v(C, "Lines")), "Count")), 1);
        L0["x"] = 0;
        let $t33 = true;
        for (;;) {
          if (!$t33) { L0["x"] = $.succ(L0["x"], 1); }
          $t33 = false;
          if (!($.ord(L0["x"]) <= $.ord($t32))) break;
          L0["s"] = (await $.idx((await $.v(C, "Lines")), [L0["x"]]));
          do {
            L0["p"] = (await $.call(C, "Pos", ["%DEL", L0["s"]]));
            if ($.truthy($.ne(L0["p"], 0))) {
              await $.stmt((await $.mcall((await $.v(C, "System")), "Delete", [$.ref(async () => L0["s"], async ($t34) => { L0["s"] = $t34; }), L0["p"], 4])));
              { const $t35 = await $.iset((await $.v(C, "Lines")), [L0["x"]], L0["s"]); if ($t35 !== undefined) { await $.set(C, "Lines", $t35); } }
            }
            await $.tick();
          } while (!$.truthy($.eq(L0["p"], 0)));
          await $.tick();
        }
      }
    }
    await $.set(C, "Caption", "");
    await $.inherited(Self, "TQRPMemo", "Print", [L0["ofsx"], L0["ofsy"]], arguments);
    await $.stmt((await $.mcall((await $.v(C, "Lines")), "Assign", [L0["templines"]])));
    await $.set(C, "Caption", "");
  } finally {
    await $.mcall(L0["templines"], "Free", []);
  }
  await $.set(C, "Height", L0["orgheight"]);
  return L0.result;
}, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["Integer", "Integer"]});
  U.method("TQRPShape", "SetQRPShape", async function SetQRPShape(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FQRPShape", L0["value"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TQRPShapeType"]});
  U.method("TQRPShape", "Print", async function Print() { return $.notPorted("TQRPShape.Print", "bad assignment target 'inherited'"); }, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["Integer", "Integer"], "error": "bad assignment target 'inherited'", "src": "procedure TQRPShape.Print(OfsX, OfsY: Integer);\n\n  procedure _Print;\n  begin\n    QRPrinter.Canvas.Brush.Assign(Brush);\n    QRPrinter.Canvas.Pen.Assign(Pen);\n  end;\n\nvar\n  OrgHeight: Integer;\nbegin\n  if Not (ParentReport.FinalPass and Enabled) then Exit;\n\n  OrgHeight:=Height;\n  if FixBottomPosition and (Parent is TQRCustomBand)then\n    OfsY:=OfsY+Round(TQRTempBand(Parent).Expanded);\n  if StretchHeightWithBand then\n    Height:=Height+Round(TQRTempBand(Parent).Expanded*ParentReport.QRPrinter.YFactor);\n\n  Case FQRPShape of\n    qrpsRectangle: begin\n                     Inherited Shape:=qrsRectangle;\n                     Inherited Print(OfsX, OfsY);\n                   end;\n    qrpsCircle:    begin\n                     Inherited Shape:=qrsCircle;\n                     Inherited Print(OfsX, OfsY);\n                   end;\n    qrpsVertLine:  begin\n                     Inherited Shape:=qrsVertLine;\n                     Inherited Print(OfsX, OfsY);\n                   end;\n    qrpsHorLine: begin\n                     Inherited Shape:=qrsHorLine;\n                     Inherited Print(OfsX, OfsY);\n                   end;\n    qrpsTopAndBottom: begin\n                     Inherited Shape:=qrsTopAndBottom;\n                     Inherited Print(OfsX, OfsY);\n                   end;\n    qrpsRightAndLeft: begin\n                     Inherited Shape:=qrsRightAndLeft;\n                     Inherited Print(OfsX, OfsY);\n                   end;\n    qrpsDownLine:  With QRPrinter Do\n                   begin\n                     _Print;\n                     Canvas.MoveTo(XPos(OfsX + Size.Left),YPos(OfsY + Size.Top));\n                     Canvas.LineTo(XPos(OfsX+Size.Left + Size.Width),\n                                             YPos(OfsY + Size.Top + Size.Height));\n                   end;\n    qrpsUpLine:    with QRPrinter Do\n                   begin\n                     _Print;\n                     Canvas.MoveTo(XPos(OfsX + Size.Left),YPos(OfsY + Size.Top + Size.Height));\n                     Canvas.LineTo(XPos(OfsX+Size.Left + Size.Width),\n                                             YPos(OfsY + Size.Top));\n                   end;\n    qrpsTriangle1: with QRPrinter Do\n                   begin\n                     _Print;\n                     Canvas.Polygon([Point(XPos(OfsX + Size.Left),YPos(OfsY + Size.Top)),\n                                     Point(XPos(OfsX+Size.Left + Size.Width),YPos(OfsY + Size.Top)),\n                                     Point(XPos(OfsX + Size.Left),YPos(OfsY + Size.Top + Size.Height))]);\n                   end;\n    qrpsTriangle2: with QRPrinter Do\n                   begin\n                     _Print;\n                     Canvas.Polygon([Point(XPos(OfsX + Size.Left),YPos(OfsY + Size.Top)),\n                                     Point(XPos(OfsX+Size.Left + Size.Width),YPos(OfsY + Size.Top)),\n                                     Point(XPos(OfsX+Size.Left + Size.Width),YPos(OfsY + Size.Top + Size.Height))]);\n                   end;\n    qrpsTriangle3: with QRPrinter Do\n                   begin\n                     _Print;\n                     Canvas.Polygon([Point(XPos(OfsX + Size.Left),YPos(OfsY + Size.Top)),\n                                     Point(XPos(OfsX+Size.Left + Size.Width),YPos(OfsY + Size.Top + Size.Height)),\n                                     Point(XPos(OfsX + Size.Left),YPos(OfsY + Size.Top + Size.Height))]);\n                   end;\n    qrpsTriangle4: with QRPrinter Do\n                   begin\n                     _Print;\n                     Canvas.Polygon([Point(XPos(OfsX+Size.Left + Size.Width),YPos(OfsY + Size.Top)),\n                                     Point(XPos(OfsX + Size.Left),YPos(OfsY + Size.Top + Size.Height)),\n                                     Point(XPos(OfsX+Size.Left + Size.Width),YPos(OfsY + Size.Top + Size.Height))]);\n                   end;\n  end;\n  if ParentReport.FinalPass and Frame.AnyFrame then\n    TQRPFrame(Frame).PaintIt(ParentReport.QRPrinter.Canvas,\n      Rect(ParentReport.QRPrinter.XPos(OfsX + Size.Left),\n      ParentReport.QRPrinter.YPos(OfsY + Size.Top),\n      ParentReport.QRPrinter.XPos(OfsX + Size.Left + Size.Width),\n      ParentReport.QRPrinter.YPos(OfsY + Size.Top + Size.Height)),\n      ParentReport.QRPrinter.XFactor,\n      ParentReport.QRPrinter.YFactor);\n      \n  Height:=OrgHeight;\nend;"});
  U.method("TQRPShape", "Paint", async function Paint() { return $.notPorted("TQRPShape.Paint", "bad assignment target 'inherited'"); }, {"params": [], "kind": "procedure", "ptypes": [], "error": "bad assignment target 'inherited'", "src": "procedure TQRPShape.Paint;\n\n  procedure _Paint;\n  begin\n    if not Transparent then\n      begin\n        Canvas.Brush.Color := clWhite;\n        Canvas.Brush.Style := bsSolid;\n        Canvas.FillRect(ClientRect);\n      end;\n    PaintCorners;\n    Canvas.Pen.Assign(Pen);\n    Canvas.Brush.Assign(Brush);\n  end;\n\nbegin\n  Case FQRPShape of\n    qrpsRectangle: begin\n                     Inherited Shape:=qrsRectangle;\n                     Inherited Paint;\n                   end;\n    qrpsCircle:    begin\n                     Inherited Shape:=qrsCircle;\n                     Inherited Paint;\n                   end;\n    qrpsVertLine:  begin\n                     Inherited Shape:=qrsVertLine;\n                     Inherited Paint;\n                   end;\n    qrpsHorLine:   begin\n                     Inherited Shape:=qrsHorLine;\n                     Inherited Paint;\n                   end;\n    qrpsTopAndBottom: begin\n                        Inherited Shape:=qrsTopAndBottom;\n                        Inherited Paint;\n                      end;\n    qrpsRightAndLeft: begin\n                        Inherited Shape:=qrsRightAndLeft;\n                        Inherited Paint;\n                      end;\n    qrpsDownLine:  begin\n                     _Paint;\n                     Canvas.MoveTo(0,0);\n                     Canvas.LineTo(Width-1,Height-1);\n                   end;\n    qrpsUpLine:    begin\n                     _Paint;\n                     Canvas.MoveTo(0,Height-1);\n                     Canvas.LineTo(Width-1,0);\n                   end;\n    qrpsTriangle1: begin\n                     _Paint;\n                     Canvas.Polygon([Point(0,0),Point(Width-1,0),Point(0,Height-1)]);\n                   end;\n    qrpsTriangle2: begin\n                     _Paint;\n                     Canvas.Polygon([Point(0,0),Point(Width-1,0),Point(Width-1,Height-1)]);\n                   end;\n    qrpsTriangle3: begin\n                     _Paint;\n                     Canvas.Polygon([Point(0,0),Point(Width-1,Height-1),Point(0,Height-1)]);\n                   end;\n    qrpsTriangle4: begin\n                     _Paint;\n                     Canvas.Polygon([Point(Width-1,0),Point(0,Height-1),Point(Width-1,Height-1)]);\n                   end;\n  end;\n  TQRPFrame(Frame).PaintIt(Canvas, GetClientRect,\n                           Screen.PixelsPerInch / 254 * Zoom/100,\n                           Screen.PixelsPerInch / 254 * Zoom/100);\nend;"});
  U.method("TQRPRichtext", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ofsx": $.copyArg(p0), "ofsy": $.copyArg(p1), result: undefined, "ms": null, "i": 0, "i2": 0, "re": null, "e": '', "orgheight": 0};
  await $.fixArgs(L0, ["ofsx", "ofsy"]);
  L0["orgheight"] = (await $.v(C, "Height"));
  if ($.truthy((await $.and_((await $.v(C, "FixBottomPosition")), async () => ($.is_((await $.v(C, "Parent")), "TQRCustomBand")))))) {
    L0["ofsy"] = $.add(L0["ofsy"], (await $.call(C, "Round", [(await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded"))])));
  }
  if ($.truthy((await $.v(C, "StretchHeightWithBand")))) {
    await $.set(C, "Height", $.add((await $.v(C, "Height")), (await $.call(C, "Round", [$.mul((await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor")))]))));
  }
  L0["re"] = null;
  if ($.truthy($.ne((await $.v(C, "ParentRichEdit")), null))) {
    L0["re"] = (await $.v(C, "ParentRichEdit"));
  } else {
    { const $t38 = (await $.v(C, "ControlCount"));
      L0["i"] = 1;
      let $t39 = true;
      for (;;) {
        if (!$t39) { L0["i"] = $.succ(L0["i"], 1); }
        $t39 = false;
        if (!($.ord(L0["i"]) <= $.ord($t38))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Controls")), [$.sub(L0["i"], 1)])), "TQRRichEdit"))) {
          L0["re"] = (await $.call(C, "TRichEdit", [(await $.idx((await $.v(C, "Controls")), [$.sub(L0["i"], 1)]))]));
        }
        await $.tick();
      }
    }
  }
  L0["ms"] = null;
  if ($.truthy($.ne(L0["re"], null))) {
    L0["ms"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
    try {
      await $.stmt((await $.mcall((await $.mv(L0["re"], "Lines")), "SaveToStream", [L0["ms"]])));
      do {
        L0["i"] = (await $.mcall(L0["re"], "FindText", ["%%", 0, $.sub((await $.call(C, "Length", [(await $.mv(L0["re"], "Text"))])), 1), [(await $.v(C, "stMatchCase"))]]));
        if ($.truthy($.ge(L0["i"], 0))) {
          await $.mset(L0["re"], "SelStart", L0["i"]);
          await $.mset(L0["re"], "SelLength", 2);
          await $.mcall(L0["re"], "ClearSelection", []);
          L0["i2"] = (await $.mcall(L0["re"], "FindText", ["%%", 0, $.sub((await $.call(C, "Length", [(await $.mv(L0["re"], "Text"))])), 1), [(await $.v(C, "stMatchCase"))]]));
          if ($.truthy($.ge(L0["i2"], 0))) {
            await $.mset(L0["re"], "SelStart", L0["i2"]);
            await $.mset(L0["re"], "SelLength", 2);
            await $.mcall(L0["re"], "ClearSelection", []);
            await $.mset(L0["re"], "SelStart", L0["i"]);
            await $.mset(L0["re"], "SelLength", $.sub(L0["i2"], L0["i"]));
            await $.mset(L0["re"], "SelText", (await $.call(C, "EvalStringExpression", [L0["e"], (await $.call(C, "TQuickRep", [(await $.v(C, "ParentReport"))]))])));
          }
        }
        await $.tick();
      } while (!$.truthy($.lt(L0["i"], 0)));
      if ($.truthy($.gt((await $.mv((await $.mv(L0["re"], "Lines")), "Count")), 0))) {
        { const $t41 = 0;
          L0["i"] = $.sub((await $.mv((await $.mv(L0["re"], "Lines")), "Count")), 1);
          let $t42 = true;
          for (;;) {
            if (!$t42) { L0["i"] = $.succ(L0["i"], -1); }
            $t42 = false;
            if (!($.ord(L0["i"]) >= $.ord($t41))) break;
            if ($.truthy($.eq((await $.call(C, "Trim", [(await $.idx((await $.mv(L0["re"], "Lines")), [L0["i"]]))])), "%DEL"))) {
              await $.stmt((await $.mcall((await $.v(C, "Lines")), "Delete", [$.ref(async () => L0["i"], async ($t43) => { L0["i"] = $t43; })])));
            }
            await $.tick();
          }
        }
      }
      do {
        L0["i"] = (await $.mcall(L0["re"], "FindText", ["%DEL", 0, $.sub((await $.call(C, "Length", [(await $.mv(L0["re"], "Text"))])), 1), [(await $.v(C, "stMatchCase"))]]));
        if ($.truthy($.ge(L0["i"], 0))) {
          await $.mset(L0["re"], "SelStart", L0["i"]);
          await $.mset(L0["re"], "SelLength", 4);
          await $.mcall(L0["re"], "ClearSelection", []);
        }
        await $.tick();
      } while (!$.truthy($.lt(L0["i"], 0)));
    } catch ($t40) {
      $.rethrowControl($t40);
      $.handled($t40);
    }
  }
  await $.inherited(Self, "TQRPRichtext", "Print", [L0["ofsx"], L0["ofsy"]], arguments);
  if ($.truthy($.ne(L0["re"], null))) {
    try {
      await $.stmt((await $.mcall(L0["ms"], "Seek", [0, 0])));
      await $.stmt((await $.mcall((await $.mv(L0["re"], "Lines")), "LoadFromStream", [L0["ms"]])));
    } finally {
      await $.mcall(L0["ms"], "Free", []);
    }
  }
  await $.set(C, "Height", L0["orgheight"]);
  return L0.result;
}, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["Integer", "Integer"]});
  U.method("TQRPGrid", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined, "i": 0, "j": 0, "l": null};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TQRPGrid", "Create", [L0["aowner"]], arguments);
  await $.set(C, "FCellColumns", (await $.mv((await $.v(C, "TList")), "Create")));
  await $.set(C, "FColumnSizes", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "FRowSizes", (await $.mv((await $.v(C, "TStringList")), "Create")));
  await $.set(C, "Width", 65);
  await $.set(C, "Height", 65);
  await $.set(C, "FPen", (await $.mv((await $.v(C, "TPen")), "Create")));
  await $.set(C, "FBrush", (await $.mv((await $.v(C, "TBrush")), "Create")));
  await $.mset((await $.v(C, "FBrush")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "FBrush")), "OnChange", (await $.ref_(C, "StyleChanged")));
  await $.mset((await $.v(C, "FPen")), "OnChange", (await $.ref_(C, "StyleChanged")));
  await $.set(C, "FRows", 3);
  await $.set(C, "FColumns", 3);
  { const $t44 = 3;
    L0["i"] = 1;
    let $t45 = true;
    for (;;) {
      if (!$t45) { L0["i"] = $.succ(L0["i"], 1); }
      $t45 = false;
      if (!($.ord(L0["i"]) <= $.ord($t44))) break;
      L0["l"] = (await $.mv((await $.v(C, "TList")), "Create"));
      { const $t46 = 3;
        L0["j"] = 1;
        let $t47 = true;
        for (;;) {
          if (!$t47) { L0["j"] = $.succ(L0["j"], 1); }
          $t47 = false;
          if (!($.ord(L0["j"]) <= $.ord($t46))) break;
          await $.stmt((await $.mcall(L0["l"], "Add", [(await $.mv((await $.v(C, "TQRPGridCell")), "Create"))])));
          await $.tick();
        }
      }
      await $.stmt((await $.mcall((await $.v(C, "FCellColumns")), "Add", [L0["l"]])));
      await $.tick();
    }
  }
  await $.set(C, "Transparent", false);
  await $.set(C, "FFirstRowHeight", 0);
  await $.set(C, "FFirstColumnWidth", 0);
  await $.set(C, "FirstRowColor", (await $.v(C, "clWhite")));
  await $.set(C, "FirstColumnColor", (await $.v(C, "clWhite")));
  await $.set(C, "FFirstColumnJoined", false);
  await $.set(C, "FFirstRowJoined", false);
  await $.set(C, "FirstCellColor", (await $.v(C, "clWhite")));
  await $.set(C, "FDrawFirstRowLine", true);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TQRPGrid", "GetCells", async function GetCells(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acol": $.copyArg(p0), "arow": $.copyArg(p1), result: null};
  await $.fixArgs(L0, ["acol", "arow"]);
  try {
    L0["result"] = (await $.call(C, "TQRPGridCell", [(await $.idx((await $.call(C, "TList", [(await $.idx((await $.v(C, "FCellColumns")), [L0["acol"]]))])), [L0["arow"]]))]));
  } catch ($t48) {
    $.rethrowControl($t48);
    $.handled($t48);
    L0["result"] = null;
  }
  return L0.result;
}, {"params": ["ACol", "ARow"], "kind": "function", "ptypes": ["Integer", "Integer"]});
  U.method("TQRPGrid", "SetCells", async function SetCells(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"acol": $.copyArg(p0), "arow": $.copyArg(p1), "value": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["acol", "arow", "value"]);
  return L0.result;
}, {"params": ["ACol", "ARow", "Value"], "kind": "procedure", "ptypes": ["Integer", "Integer", "TQRPGridCell"]});
  U.method("TQRPGrid", "SetColumnSizes", async function SetColumnSizes(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "pall": 0, "x": 0};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FColumnSizes")), "Assign", [L0["value"]])));
  while ($.truthy($.gt((await $.mv((await $.v(C, "FColumnSizes")), "Count")), (await $.v(C, "FColumns"))))) {
    await $.stmt((await $.mcall((await $.v(C, "FColumnSizes")), "Delete", [$.sub((await $.mv((await $.v(C, "FColumnSizes")), "Count")), 1)])));
    await $.tick();
  }
  L0["pall"] = 0;
  { const $t49 = (await $.mv((await $.v(C, "FColumnSizes")), "Count"));
    L0["x"] = 1;
    let $t50 = true;
    for (;;) {
      if (!$t50) { L0["x"] = $.succ(L0["x"], 1); }
      $t50 = false;
      if (!($.ord(L0["x"]) <= $.ord($t49))) break;
      try {
        L0["pall"] = $.add(L0["pall"], (await $.call(C, "StrToInt", [(await $.idx((await $.v(C, "FColumnSizes")), [$.sub(L0["x"], 1)]))])));
      } catch ($t51) {
        $.rethrowControl($t51);
        $.handled($t51);
        { const $t52 = await $.iset((await $.v(C, "FColumnSizes")), [$.sub(L0["x"], 1)], "20"); if ($t52 !== undefined) { await $.set(C, "FColumnSizes", $t52); } }
        L0["pall"] = $.add(L0["pall"], 20);
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FColumnSizes")), "Count")), (await $.v(C, "Columns"))))) {
    if ($.truthy((await $.mv((await $.v(C, "Frame")), "DrawLeft")))) {
      L0["pall"] = $.add(L0["pall"], (await $.mv((await $.v(C, "Frame")), "Width")));
    }
    if ($.truthy((await $.mv((await $.v(C, "Frame")), "DrawRight")))) {
      L0["pall"] = $.add(L0["pall"], (await $.mv((await $.v(C, "Frame")), "Width")));
    }
    await $.set(C, "Width", L0["pall"]);
  }
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TQRPGrid", "SetRowSizes", async function SetRowSizes(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "pall": 0, "x": 0};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FRowSizes")), "Assign", [L0["value"]])));
  while ($.truthy($.gt((await $.mv((await $.v(C, "FRowSizes")), "Count")), (await $.v(C, "FRows"))))) {
    await $.stmt((await $.mcall((await $.v(C, "FRowSizes")), "Delete", [$.sub((await $.mv((await $.v(C, "FRowSizes")), "Count")), 1)])));
    await $.tick();
  }
  L0["pall"] = 0;
  { const $t53 = (await $.mv((await $.v(C, "FRowSizes")), "Count"));
    L0["x"] = 1;
    let $t54 = true;
    for (;;) {
      if (!$t54) { L0["x"] = $.succ(L0["x"], 1); }
      $t54 = false;
      if (!($.ord(L0["x"]) <= $.ord($t53))) break;
      try {
        L0["pall"] = $.add(L0["pall"], (await $.call(C, "StrToInt", [(await $.idx((await $.v(C, "FRowSizes")), [$.sub(L0["x"], 1)]))])));
      } catch ($t55) {
        $.rethrowControl($t55);
        $.handled($t55);
        { const $t56 = await $.iset((await $.v(C, "FRowSizes")), [$.sub(L0["x"], 1)], "20"); if ($t56 !== undefined) { await $.set(C, "FRowSizes", $t56); } }
        L0["pall"] = $.add(L0["pall"], 20);
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FRowSizes")), "Count")), (await $.v(C, "Rows"))))) {
    if ($.truthy((await $.mv((await $.v(C, "Frame")), "DrawTop")))) {
      L0["pall"] = $.add(L0["pall"], (await $.mv((await $.v(C, "Frame")), "Width")));
    }
    if ($.truthy((await $.mv((await $.v(C, "Frame")), "DrawBottom")))) {
      L0["pall"] = $.add(L0["pall"], (await $.mv((await $.v(C, "Frame")), "Width")));
    }
    await $.set(C, "Height", L0["pall"]);
  }
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TStrings"]});
  U.method("TQRPGrid", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0, "l": null};
  await $.mcall((await $.v(C, "FPen")), "Free", []);
  await $.mcall((await $.v(C, "FBrush")), "Free", []);
  await $.mcall((await $.v(C, "FColumnSizes")), "Free", []);
  await $.mcall((await $.v(C, "FRowSizes")), "Free", []);
  { const $t57 = (await $.mv((await $.v(C, "FCellColumns")), "Count"));
    L0["i"] = 1;
    let $t58 = true;
    for (;;) {
      if (!$t58) { L0["i"] = $.succ(L0["i"], 1); }
      $t58 = false;
      if (!($.ord(L0["i"]) <= $.ord($t57))) break;
      L0["l"] = (await $.call(C, "TList", [(await $.idx((await $.v(C, "FCellColumns")), [$.sub(L0["i"], 1)]))]));
      { const $t59 = 1;
        L0["j"] = (await $.mv(L0["l"], "Count"));
        let $t60 = true;
        for (;;) {
          if (!$t60) { L0["j"] = $.succ(L0["j"], -1); }
          $t60 = false;
          if (!($.ord(L0["j"]) >= $.ord($t59))) break;
          await $.mcall((await $.call(C, "TQRPGridCell", [(await $.idx(L0["l"], [$.sub(L0["j"], 1)]))])), "Free", []);
          await $.tick();
        }
      }
      await $.mcall(L0["l"], "Free", []);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FCellColumns")), "Free", []);
  await $.inherited(Self, "TQRPGrid", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TQRPGrid", "SetColumns", async function SetColumns(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "l": null, "i": 0};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FColumns", L0["value"]);
  while ($.truthy($.gt((await $.mv((await $.v(C, "FColumnSizes")), "Count")), (await $.v(C, "FColumns"))))) {
    await $.stmt((await $.mcall((await $.v(C, "FColumnSizes")), "Delete", [$.sub((await $.mv((await $.v(C, "FColumnSizes")), "Count")), 1)])));
    await $.tick();
  }
  while ($.truthy($.gt((await $.mv((await $.v(C, "FCellColumns")), "Count")), L0["value"]))) {
    L0["l"] = (await $.call(C, "TList", [(await $.idx((await $.v(C, "FCellColumns")), [$.sub((await $.mv((await $.v(C, "FCellColumns")), "Count")), 1)]))]));
    { const $t61 = (await $.mv(L0["l"], "Count"));
      L0["i"] = 1;
      let $t62 = true;
      for (;;) {
        if (!$t62) { L0["i"] = $.succ(L0["i"], 1); }
        $t62 = false;
        if (!($.ord(L0["i"]) <= $.ord($t61))) break;
        await $.mcall((await $.call(C, "TQRPGridCell", [(await $.idx(L0["l"], [$.sub(L0["i"], 1)]))])), "Free", []);
        await $.tick();
      }
    }
    await $.stmt((await $.mcall((await $.v(C, "FCellColumns")), "Delete", [$.sub((await $.mv((await $.v(C, "FCellColumns")), "Count")), 1)])));
    await $.mcall(L0["l"], "Free", []);
    await $.tick();
  }
  while ($.truthy($.lt((await $.mv((await $.v(C, "FCellColumns")), "Count")), L0["value"]))) {
    L0["l"] = (await $.mv((await $.v(C, "TList")), "Create"));
    { const $t63 = (await $.v(C, "Rows"));
      L0["i"] = 1;
      let $t64 = true;
      for (;;) {
        if (!$t64) { L0["i"] = $.succ(L0["i"], 1); }
        $t64 = false;
        if (!($.ord(L0["i"]) <= $.ord($t63))) break;
        await $.stmt((await $.mcall(L0["l"], "Add", [(await $.mv((await $.v(C, "TQRPGridCell")), "Create"))])));
        await $.tick();
      }
    }
    await $.stmt((await $.mcall((await $.v(C, "FCellColumns")), "Add", [L0["l"]])));
    await $.tick();
  }
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Word"]});
  U.method("TQRPGrid", "SetRows", async function SetRows(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "i": 0, "l": null};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FRows", L0["value"]);
  while ($.truthy($.gt((await $.mv((await $.v(C, "FRowSizes")), "Count")), (await $.v(C, "FRows"))))) {
    await $.stmt((await $.mcall((await $.v(C, "FRowSizes")), "Delete", [$.sub((await $.mv((await $.v(C, "FRowSizes")), "Count")), 1)])));
    await $.tick();
  }
  { const $t65 = (await $.v(C, "FColumns"));
    L0["i"] = 1;
    let $t66 = true;
    for (;;) {
      if (!$t66) { L0["i"] = $.succ(L0["i"], 1); }
      $t66 = false;
      if (!($.ord(L0["i"]) <= $.ord($t65))) break;
      L0["l"] = (await $.idx((await $.v(C, "FCellColumns")), [$.sub(L0["i"], 1)]));
      while ($.truthy($.gt((await $.mv(L0["l"], "Count")), L0["value"]))) {
        await $.mcall((await $.call(C, "TQRPGridCell", [(await $.idx(L0["l"], [$.sub((await $.mv(L0["l"], "Count")), 1)]))])), "Free", []);
        await $.stmt((await $.mcall(L0["l"], "Delete", [$.sub((await $.mv(L0["l"], "Count")), 1)])));
        await $.tick();
      }
      while ($.truthy($.lt((await $.mv(L0["l"], "Count")), L0["value"]))) {
        await $.stmt((await $.mcall(L0["l"], "Add", [(await $.mv((await $.v(C, "TQRPGridCell")), "Create"))])));
        await $.tick();
      }
      await $.tick();
    }
  }
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Word"]});
  U.method("TQRPGrid", "StyleChanged", async function StyleChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRPGrid", "SetBrush", async function SetBrush(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy((await $.and_(($.not(((await $.or_((await $.v(C, "FFirstRowJoined")), async () => (await $.v(C, "FFirstColumnJoined"))))))), async () => ($.ne((await $.mv(L0["value"], "Color")), (await $.mv((await $.v(C, "FBrush")), "Color")))))))) {
    if ($.truthy($.eq((await $.v(C, "FirstCellColor")), (await $.mv((await $.v(C, "FBrush")), "Color"))))) {
      await $.set(C, "FirstCellColor", (await $.mv(L0["value"], "Color")));
    }
    if ($.truthy($.eq((await $.v(C, "FirstColumnColor")), (await $.mv((await $.v(C, "FBrush")), "Color"))))) {
      await $.set(C, "FirstColumnColor", (await $.mv(L0["value"], "Color")));
    }
    if ($.truthy($.eq((await $.v(C, "FirstRowColor")), (await $.mv((await $.v(C, "FBrush")), "Color"))))) {
      await $.set(C, "FirstRowColor", (await $.mv(L0["value"], "Color")));
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "FBrush")), "Assign", [L0["value"]])));
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TBrush"]});
  U.method("TQRPGrid", "SetPen", async function SetPen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FPen")), "Assign", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPen"]});
  U.method("TQRPGrid", "SetDrawFirstRowLine", async function SetDrawFirstRowLine(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FDrawFirstRowLine", L0["value"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TQRPGrid", "SetFirstCellColor", async function SetFirstCellColor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.mv((await $.idx((await $.v(C, "Cells")), [0, 0])), "Brush")), "Color", L0["value"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TColor"]});
  U.method("TQRPGrid", "SetFirstRowColor", async function SetFirstRowColor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["value"]);
  { const $t67 = $.sub((await $.v(C, "Columns")), 1);
    L0["i"] = 1;
    let $t68 = true;
    for (;;) {
      if (!$t68) { L0["i"] = $.succ(L0["i"], 1); }
      $t68 = false;
      if (!($.ord(L0["i"]) <= $.ord($t67))) break;
      await $.mset((await $.mv((await $.idx((await $.v(C, "Cells")), [L0["i"], 0])), "Brush")), "Color", L0["value"]);
      await $.tick();
    }
  }
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TColor"]});
  U.method("TQRPGrid", "SetFirstColumnColor", async function SetFirstColumnColor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["value"]);
  { const $t69 = $.sub((await $.v(C, "Rows")), 1);
    L0["i"] = 1;
    let $t70 = true;
    for (;;) {
      if (!$t70) { L0["i"] = $.succ(L0["i"], 1); }
      $t70 = false;
      if (!($.ord(L0["i"]) <= $.ord($t69))) break;
      await $.mset((await $.mv((await $.idx((await $.v(C, "Cells")), [0, L0["i"]])), "Brush")), "Color", L0["value"]);
      await $.tick();
    }
  }
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TColor"]});
  U.method("TQRPGrid", "GetFirstColumnColor", async function GetFirstColumnColor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.mv((await $.idx((await $.v(C, "Cells")), [0, $.sub((await $.v(C, "Rows")), 1)])), "Brush")), "Color"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQRPGrid", "GetFirstRowColor", async function GetFirstRowColor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.mv((await $.idx((await $.v(C, "Cells")), [$.sub((await $.v(C, "Columns")), 1), 0])), "Brush")), "Color"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQRPGrid", "GetFirstCellColor", async function GetFirstCellColor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.mv((await $.mv((await $.idx((await $.v(C, "Cells")), [0, 0])), "Brush")), "Color"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQRPGrid", "SetFirstColumnJoined", async function SetFirstColumnJoined(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FFirstColumnJoined", L0["value"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TQRPGrid", "SetFirstRowJoined", async function SetFirstRowJoined(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FFirstRowJoined", L0["value"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TQRPGrid", "Paint", async function Paint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "arect": null, "allwidth": 0, "allheight": 0, "x": 0, "y": 0, "q": 0, "i": 0, "j": 0, "restheight": 0, "restwidth": 0, "p": 0, "dx": 0, "dy": 0};
  L0["getcolwidth"] = $.fn(async function GetColWidth(p0) {
  const L1 = {"i": $.copyArg(p0), result: 0};
  await $.fixArgs(L1, ["i"]);
  if ($.truthy($.lt(L1["i"], (await $.mv((await $.v(C, "FColumnSizes")), "Count"))))) {
    L1["result"] = (await $.call(C, "StrToInt", [(await $.idx((await $.v(C, "FColumnSizes")), [L1["i"]]))]));
  } else {
    if ($.truthy($.gt((await $.mv((await $.v(C, "FColumnSizes")), "Count")), 0))) {
      L1["result"] = (await $.call(C, "Round", [$.fdiv(L0["restwidth"], ($.sub((await $.v(C, "Columns")), (await $.mv((await $.v(C, "FColumnSizes")), "Count")))))]));
    } else {
      L1["result"] = $.idiv(L0["allwidth"], (await $.v(C, "Columns")));
    }
  }
  return L1.result;
});
  L0["getrowheight"] = $.fn(async function GetRowHeight(p0) {
  const L1 = {"i": $.copyArg(p0), result: 0};
  await $.fixArgs(L1, ["i"]);
  if ($.truthy($.lt(L1["i"], (await $.mv((await $.v(C, "FRowSizes")), "Count"))))) {
    L1["result"] = (await $.call(C, "StrToInt", [(await $.idx((await $.v(C, "FRowSizes")), [L1["i"]]))]));
  } else {
    if ($.truthy($.gt((await $.mv((await $.v(C, "FRowSizes")), "Count")), 0))) {
      L1["result"] = (await $.call(C, "Round", [$.fdiv(L0["restheight"], ($.sub((await $.v(C, "Rows")), (await $.mv((await $.v(C, "FRowSizes")), "Count")))))]));
    } else {
      L1["result"] = $.idiv(L0["allheight"], (await $.v(C, "Rows")));
    }
  }
  return L1.result;
});
  {
    const $t71 = (await $.v(C, "Canvas"));
    await $.wset([$t71], "Pen", (await $.wv([$t71], "FPen", C, false)), C);
    await $.wset([$t71], "Brush", (await $.wv([$t71], "FBrush", C, false)), C);
    await $.wset([$t71], "AllWidth", (await $.wv([$t71], "Width", C, false)), { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true });
    if ($.truthy((await $.mv((await $.wv([$t71], "Frame", C, false)), "DrawLeft")))) {
      await $.wset([$t71], "AllWidth", $.sub((await $.wv([$t71], "AllWidth", { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t71], "Frame", C, false)), "Width"))), { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true });
      await $.wset([$t71], "DX", (await $.mv((await $.wv([$t71], "Frame", C, false)), "Width")), { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true });
    } else {
      await $.wset([$t71], "DX", 0, { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t71], "Frame", C, false)), "DrawRight")))) {
      await $.wset([$t71], "AllWidth", $.sub((await $.wv([$t71], "AllWidth", { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t71], "Frame", C, false)), "Width"))), { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true });
    }
    await $.wset([$t71], "AllHeight", (await $.wv([$t71], "Height", C, false)), { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true });
    if ($.truthy((await $.mv((await $.wv([$t71], "Frame", C, false)), "DrawTop")))) {
      await $.wset([$t71], "AllHeight", $.sub((await $.wv([$t71], "AllHeight", { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t71], "Frame", C, false)), "Width"))), { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true });
      await $.wset([$t71], "DY", (await $.mv((await $.wv([$t71], "Frame", C, false)), "Width")), { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true });
    } else {
      await $.wset([$t71], "DY", 0, { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t71], "Frame", C, false)), "DrawBottom")))) {
      await $.wset([$t71], "AllHeight", $.sub((await $.wv([$t71], "AllHeight", { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t71], "Frame", C, false)), "Width"))), { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true });
    }
    await $.wset([$t71], "RestWidth", (await $.wv([$t71], "AllWidth", { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true }, false)), { get: async () => L0["restwidth"], set: async (v) => { L0["restwidth"] = v; }, local: true });
    { const $t72 = (await $.mv((await $.wv([$t71], "FColumnSizes", C, false)), "Count"));
      await $.wset([$t71], "X", 1, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
      let $t73 = true;
      for (;;) {
        if (!$t73) { await $.wset([$t71], "X", $.succ((await $.wv([$t71], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }); }
        $t73 = false;
        if (!($.ord((await $.wv([$t71], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))) <= $.ord($t72))) break;
        await $.wset([$t71], "RestWidth", $.sub((await $.wv([$t71], "RestWidth", { get: async () => L0["restwidth"], set: async (v) => { L0["restwidth"] = v; }, local: true }, false)), (await $.wcall([$t71], "StrToInt", [(await $.idx((await $.wv([$t71], "FColumnsizes", C, false)), [$.sub((await $.wv([$t71], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1)]))], C))), { get: async () => L0["restwidth"], set: async (v) => { L0["restwidth"] = v; }, local: true });
        await $.tick();
      }
    }
    await $.wset([$t71], "RestHeight", (await $.wv([$t71], "AllHeight", { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true }, false)), { get: async () => L0["restheight"], set: async (v) => { L0["restheight"] = v; }, local: true });
    { const $t74 = (await $.mv((await $.wv([$t71], "FRowSizes", C, false)), "Count"));
      await $.wset([$t71], "X", 1, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
      let $t75 = true;
      for (;;) {
        if (!$t75) { await $.wset([$t71], "X", $.succ((await $.wv([$t71], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }); }
        $t75 = false;
        if (!($.ord((await $.wv([$t71], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))) <= $.ord($t74))) break;
        await $.wset([$t71], "RestHeight", $.sub((await $.wv([$t71], "RestHeight", { get: async () => L0["restheight"], set: async (v) => { L0["restheight"] = v; }, local: true }, false)), (await $.wcall([$t71], "StrToInt", [(await $.idx((await $.wv([$t71], "FRowsizes", C, false)), [$.sub((await $.wv([$t71], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1)]))], C))), { get: async () => L0["restheight"], set: async (v) => { L0["restheight"] = v; }, local: true });
        await $.tick();
      }
    }
    if ($.truthy($.not((await $.wv([$t71], "Transparent", C, false))))) {
      await $.wset([$t71], "Q", 0, { get: async () => L0["q"], set: async (v) => { L0["q"] = v; }, local: true });
      { const $t76 = $.sub((await $.wv([$t71], "Columns", C, false)), 1);
        await $.wset([$t71], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t77 = true;
        for (;;) {
          if (!$t77) { await $.wset([$t71], "I", $.succ((await $.wv([$t71], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t77 = false;
          if (!($.ord((await $.wv([$t71], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t76))) break;
          await $.wset([$t71], "P", 0, { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
          { const $t78 = $.sub((await $.wv([$t71], "Rows", C, false)), 1);
            await $.wset([$t71], "J", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
            let $t79 = true;
            for (;;) {
              if (!$t79) { await $.wset([$t71], "J", $.succ((await $.wv([$t71], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
              $t79 = false;
              if (!($.ord((await $.wv([$t71], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t78))) break;
              await $.stmt((await $.mcall((await $.wv([$t71], "Brush", C, false)), "Assign", [(await $.mv((await $.idx((await $.wv([$t71], "Cells", C, false)), [(await $.wv([$t71], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), (await $.wv([$t71], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Brush"))])));
              await $.stmt((await $.wcall([$t71], "FillRect", [(await $.wcall([$t71], "Rect", [$.add((await $.wv([$t71], "Q", { get: async () => L0["q"], set: async (v) => { L0["q"] = v; }, local: true }, false)), (await $.wv([$t71], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false))), $.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wv([$t71], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false))), $.add($.add((await $.wv([$t71], "Q", { get: async () => L0["q"], set: async (v) => { L0["q"] = v; }, local: true }, false)), (await $.wcall([$t71], "GetColWidth", [(await $.wv([$t71], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), (await $.wv([$t71], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false))), $.add($.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wcall([$t71], "GetRowHeight", [(await $.wv([$t71], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true }))), (await $.wv([$t71], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C))], C)));
              await $.wset([$t71], "P", $.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wcall([$t71], "GetRowHeight", [(await $.wv([$t71], "J", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true }))), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
              await $.tick();
            }
          }
          await $.wset([$t71], "Q", $.add((await $.wv([$t71], "Q", { get: async () => L0["q"], set: async (v) => { L0["q"] = v; }, local: true }, false)), (await $.wcall([$t71], "GetColWidth", [(await $.wv([$t71], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), { get: async () => L0["q"], set: async (v) => { L0["q"] = v; }, local: true });
          await $.tick();
        }
      }
    }
    if ($.truthy($.gt((await $.wv([$t71], "Rows", C, false)), 1))) {
      await $.wset([$t71], "P", 0, { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
      { const $t80 = $.sub((await $.wv([$t71], "Rows", C, false)), 1);
        await $.wset([$t71], "Y", 1, { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
        let $t81 = true;
        for (;;) {
          if (!$t81) { await $.wset([$t71], "Y", $.succ((await $.wv([$t71], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), 1), { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }); }
          $t81 = false;
          if (!($.ord((await $.wv([$t71], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))) <= $.ord($t80))) break;
          await $.wset([$t71], "P", $.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wcall([$t71], "GetRowHeight", [$.sub((await $.wv([$t71], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), 1)], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true }))), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
          if ($.truthy((await $.or_(($.ne((await $.wv([$t71], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), 1)), async () => (await $.wv([$t71], "DrawFirstRowLine", C, false)))))) {
            if ($.truthy((await $.wv([$t71], "FirstColumnJoined", C, false)))) {
              await $.stmt((await $.wcall([$t71], "MoveTo", [$.add((await $.wcall([$t71], "GetColWidth", [0], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true })), (await $.wv([$t71], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false))), $.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wv([$t71], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C)));
            } else {
              await $.stmt((await $.wcall([$t71], "MoveTo", [0, $.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wv([$t71], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C)));
            }
            await $.stmt((await $.wcall([$t71], "LineTo", [(await $.wv([$t71], "Width", C, false)), $.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wv([$t71], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C)));
          }
          await $.tick();
        }
      }
    }
    if ($.truthy($.gt((await $.wv([$t71], "Columns", C, false)), 1))) {
      await $.wset([$t71], "P", 0, { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
      { const $t82 = $.sub((await $.wv([$t71], "Columns", C, false)), 1);
        await $.wset([$t71], "X", 1, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
        let $t83 = true;
        for (;;) {
          if (!$t83) { await $.wset([$t71], "X", $.succ((await $.wv([$t71], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }); }
          $t83 = false;
          if (!($.ord((await $.wv([$t71], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))) <= $.ord($t82))) break;
          await $.wset([$t71], "P", $.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wcall([$t71], "GetColWidth", [$.sub((await $.wv([$t71], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1)], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
          if ($.truthy((await $.wv([$t71], "FirstRowJoined", C, false)))) {
            await $.stmt((await $.wcall([$t71], "MoveTo", [$.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wv([$t71], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false))), $.add((await $.wcall([$t71], "GetRowHeight", [0], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true })), (await $.wv([$t71], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C)));
          } else {
            await $.stmt((await $.wcall([$t71], "MoveTo", [$.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wv([$t71], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false))), 0], C)));
          }
          await $.stmt((await $.wcall([$t71], "LineTo", [$.add((await $.wv([$t71], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wv([$t71], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false))), (await $.wv([$t71], "Height", C, false))], C)));
          await $.tick();
        }
      }
    }
  }
  await $.stmt($.call(C, "PaintCorners", []));
  L0["arect"] = (await $.v(C, "GetClientRect"));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["arect"], "Bottom")), async ($t84) => { await $.mset(L0["arect"], "Bottom", $t84); })])));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["arect"], "Right")), async ($t85) => { await $.mset(L0["arect"], "Right", $t85); })])));
  await $.stmt((await $.mcall((await $.call(C, "TQRPFrame", [(await $.v(C, "Frame"))])), "PaintIt", [(await $.v(C, "Canvas")), L0["arect"], $.fdiv($.mul($.fdiv((await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), 254), (await $.v(C, "Zoom"))), 100), $.fdiv($.mul($.fdiv((await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), 254), (await $.v(C, "Zoom"))), 100)])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TQRPGrid", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ofsx": $.copyArg(p0), "ofsy": $.copyArg(p1), result: undefined, "px": 0, "py": 0, "p": 0, "restwidth": 0, "restheight": 0, "allwidth": 0, "allheight": 0, "x": 0, "y": 0, "dx": 0, "dy": 0, "c": null, "ax": 0, "ay": 0, "acaption": '', "arect": null, "ha": null, "va": null, "bkmode": 0, "orgheight": 0};
  await $.fixArgs(L0, ["ofsx", "ofsy"]);
  L0["getcolwidth"] = $.fn(async function GetColWidth(p0) {
  const L1 = {"i": $.copyArg(p0), result: 0};
  await $.fixArgs(L1, ["i"]);
  if ($.truthy($.lt(L1["i"], (await $.mv((await $.v(C, "FColumnSizes")), "Count"))))) {
    L1["result"] = $.mul($.fdiv((await $.call(C, "StrToFloat", [(await $.idx((await $.v(C, "FColumnSizes")), [L1["i"]]))])), (await $.mv((await $.v(C, "Screen")), "PixelsPerInch"))), 254);
  } else {
    if ($.truthy($.gt((await $.mv((await $.v(C, "FColumnSizes")), "Count")), 0))) {
      L1["result"] = $.fdiv(L0["restwidth"], ($.sub((await $.v(C, "Columns")), (await $.mv((await $.v(C, "FColumnSizes")), "Count")))));
    } else {
      L1["result"] = $.fdiv(L0["allwidth"], (await $.v(C, "Columns")));
    }
  }
  return L1.result;
});
  L0["getrowheight"] = $.fn(async function GetRowHeight(p0) {
  const L1 = {"i": $.copyArg(p0), result: 0};
  await $.fixArgs(L1, ["i"]);
  if ($.truthy($.lt(L1["i"], (await $.mv((await $.v(C, "FRowSizes")), "Count"))))) {
    L1["result"] = $.mul($.fdiv((await $.call(C, "StrToFloat", [(await $.idx((await $.v(C, "FRowSizes")), [L1["i"]]))])), (await $.mv((await $.v(C, "Screen")), "PixelsPerInch"))), 254);
  } else {
    if ($.truthy($.gt((await $.mv((await $.v(C, "FRowSizes")), "Count")), 0))) {
      L1["result"] = $.fdiv(L0["restheight"], ($.sub((await $.v(C, "Rows")), (await $.mv((await $.v(C, "FRowSizes")), "Count")))));
    } else {
      L1["result"] = $.fdiv(L0["allheight"], (await $.v(C, "Rows")));
    }
  }
  return L1.result;
});
  if ($.truthy((await $.or_(($.eq((await $.v(C, "Columns")), 0)), async () => ($.eq((await $.v(C, "Rows")), 0)))))) {
    return L0.result;
  }
  L0["orgheight"] = (await $.v(C, "Height"));
  if ($.truthy((await $.and_((await $.v(C, "FixBottomPosition")), async () => ($.is_((await $.v(C, "Parent")), "TQRCustomBand")))))) {
    L0["ofsy"] = $.add(L0["ofsy"], (await $.call(C, "Round", [(await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded"))])));
  }
  if ($.truthy((await $.v(C, "StretchHeightWithBand")))) {
    await $.set(C, "Height", $.add((await $.v(C, "Height")), (await $.call(C, "Round", [$.mul((await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor")))]))));
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ParentReport")), "FinalPass")), async () => (await $.v(C, "Enabled")))))) {
    L0["bkmode"] = (await $.call(C, "GetBKMode", [(await $.mv((await $.mv((await $.v(C, "QRPrinter")), "Canvas")), "Handle"))]));
    if ($.truthy((await $.v(C, "Transparent")))) {
      await $.stmt((await $.call(C, "SetBkMode", [(await $.mv((await $.mv((await $.v(C, "QRPrinter")), "Canvas")), "Handle")), 1])));
    } else {
      await $.stmt((await $.call(C, "SetBkMode", [(await $.mv((await $.mv((await $.v(C, "QRPrinter")), "Canvas")), "Handle")), 0])));
    }
    await $.mset((await $.mv((await $.v(C, "QRPrinter")), "Canvas")), "Brush", (await $.v(C, "Brush")));
    await $.mset((await $.mv((await $.v(C, "QRPrinter")), "Canvas")), "Pen", (await $.v(C, "Pen")));
    {
      const $t86 = (await $.v(C, "QRPrinter"));
      const $t87 = (await $.wv([$t86], "Canvas", C, false));
      if ($.truthy($.not((await $.wv([$t86, $t87], "Transparent", C, false))))) {
        await $.stmt((await $.wcall([$t86, $t87], "FillRect", [(await $.wcall([$t86, $t87], "rect", [(await $.wcall([$t86, $t87], "XPos", [$.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left")))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top")))], C)), (await $.wcall([$t86, $t87], "XPos", [$.add($.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left"))), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Width")))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add($.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top"))), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Height")))], C))], C))], C)));
      }
      await $.wset([$t86, $t87], "AllWidth", (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Width")), { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true });
      if ($.truthy((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "DrawLeft")))) {
        await $.wset([$t86, $t87], "AllWidth", $.sub((await $.wv([$t86, $t87], "AllWidth", { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "round", [$.mul($.fdiv((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t86, $t87], "Screen", C, false)), "PixelsPerInch"))), 254)], C))), { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true });
        await $.wset([$t86, $t87], "DX", (await $.wcall([$t86, $t87], "round", [$.mul($.fdiv((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t86, $t87], "Screen", C, false)), "PixelsPerInch"))), 254)], C)), { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true });
      } else {
        await $.wset([$t86, $t87], "DX", 0, { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true });
      }
      if ($.truthy((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "DrawRight")))) {
        await $.wset([$t86, $t87], "AllWidth", $.sub((await $.wv([$t86, $t87], "AllWidth", { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "round", [$.mul($.fdiv((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t86, $t87], "Screen", C, false)), "PixelsPerInch"))), 254)], C))), { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true });
      }
      await $.wset([$t86, $t87], "AllHeight", (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Height")), { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true });
      if ($.truthy((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "DrawTop")))) {
        await $.wset([$t86, $t87], "AllHeight", $.sub((await $.wv([$t86, $t87], "AllHeight", { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "round", [$.mul($.fdiv((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t86, $t87], "Screen", C, false)), "PixelsPerInch"))), 254)], C))), { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true });
        await $.wset([$t86, $t87], "DY", (await $.wcall([$t86, $t87], "round", [$.mul($.fdiv((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t86, $t87], "Screen", C, false)), "PixelsPerInch"))), 254)], C)), { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true });
      } else {
        await $.wset([$t86, $t87], "DY", 0, { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true });
      }
      if ($.truthy((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "DrawBottom")))) {
        await $.wset([$t86, $t87], "AllHeight", $.sub((await $.wv([$t86, $t87], "AllHeight", { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "round", [$.mul($.fdiv((await $.mv((await $.wv([$t86, $t87], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t86, $t87], "Screen", C, false)), "PixelsPerInch"))), 254)], C))), { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true });
      }
      await $.wset([$t86, $t87], "RestWidth", (await $.wv([$t86, $t87], "AllWidth", { get: async () => L0["allwidth"], set: async (v) => { L0["allwidth"] = v; }, local: true }, false)), { get: async () => L0["restwidth"], set: async (v) => { L0["restwidth"] = v; }, local: true });
      { const $t88 = (await $.mv((await $.wv([$t86, $t87], "FColumnSizes", C, false)), "Count"));
        await $.wset([$t86, $t87], "X", 1, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
        let $t89 = true;
        for (;;) {
          if (!$t89) { await $.wset([$t86, $t87], "X", $.succ((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }); }
          $t89 = false;
          if (!($.ord((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))) <= $.ord($t88))) break;
          await $.wset([$t86, $t87], "RestWidth", $.sub((await $.wv([$t86, $t87], "RestWidth", { get: async () => L0["restwidth"], set: async (v) => { L0["restwidth"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "GetColWidth", [$.sub((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1)], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), { get: async () => L0["restwidth"], set: async (v) => { L0["restwidth"] = v; }, local: true });
          await $.tick();
        }
      }
      await $.wset([$t86, $t87], "RestHeight", (await $.wv([$t86, $t87], "AllHeight", { get: async () => L0["allheight"], set: async (v) => { L0["allheight"] = v; }, local: true }, false)), { get: async () => L0["restheight"], set: async (v) => { L0["restheight"] = v; }, local: true });
      { const $t90 = (await $.mv((await $.wv([$t86, $t87], "FRowSizes", C, false)), "Count"));
        await $.wset([$t86, $t87], "X", 1, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
        let $t91 = true;
        for (;;) {
          if (!$t91) { await $.wset([$t86, $t87], "X", $.succ((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }); }
          $t91 = false;
          if (!($.ord((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))) <= $.ord($t90))) break;
          await $.wset([$t86, $t87], "RestHeight", $.sub((await $.wv([$t86, $t87], "RestHeight", { get: async () => L0["restheight"], set: async (v) => { L0["restheight"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "GetRowHeight", [$.sub((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1)], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true }))), { get: async () => L0["restheight"], set: async (v) => { L0["restheight"] = v; }, local: true });
          await $.tick();
        }
      }
      if ($.truthy($.not((await $.wv([$t86, $t87], "Transparent", C, false))))) {
        await $.wset([$t86, $t87], "AX", 0, { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true });
        { const $t92 = $.sub((await $.wv([$t86, $t87], "Columns", C, false)), 1);
          await $.wset([$t86, $t87], "X", 0, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
          let $t93 = true;
          for (;;) {
            if (!$t93) { await $.wset([$t86, $t87], "X", $.succ((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }); }
            $t93 = false;
            if (!($.ord((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))) <= $.ord($t92))) break;
            await $.wset([$t86, $t87], "AY", 0, { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true });
            { const $t94 = $.sub((await $.wv([$t86, $t87], "Rows", C, false)), 1);
              await $.wset([$t86, $t87], "Y", 0, { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
              let $t95 = true;
              for (;;) {
                if (!$t95) { await $.wset([$t86, $t87], "Y", $.succ((await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), 1), { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }); }
                $t95 = false;
                if (!($.ord((await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))) <= $.ord($t94))) break;
                await $.stmt((await $.mcall((await $.wv([$t86, $t87], "Brush", C, false)), "Assign", [(await $.mv((await $.idx((await $.wv([$t86, $t87], "Cells", C, false)), [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))])), "Brush"))])));
                await $.stmt((await $.wcall([$t86, $t87], "FillRect", [(await $.wcall([$t86, $t87], "Rect", [(await $.wcall([$t86, $t87], "XPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left"))), (await $.wv([$t86, $t87], "AX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false)))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top"))), (await $.wv([$t86, $t87], "AY", { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C)), (await $.wcall([$t86, $t87], "XPos", [$.add($.add($.add($.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left"))), (await $.wv([$t86, $t87], "AX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false))), (await $.wcall([$t86, $t87], "GetColWidth", [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), (await $.wv([$t86, $t87], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false)))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add($.add($.add($.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top"))), (await $.wv([$t86, $t87], "AY", { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true }, false))), (await $.wcall([$t86, $t87], "GetRowHeight", [(await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true }))), (await $.wv([$t86, $t87], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C))], C))], C)));
                await $.wset([$t86, $t87], "AY", $.add((await $.wv([$t86, $t87], "AY", { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "GetRowHeight", [(await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true }))), { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true });
                await $.tick();
              }
            }
            await $.wset([$t86, $t87], "AX", $.add((await $.wv([$t86, $t87], "AX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "GetColWidth", [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true });
            await $.tick();
          }
        }
      }
      if ($.truthy($.gt((await $.wv([$t86, $t87], "Rows", C, false)), 1))) {
        await $.wset([$t86, $t87], "P", 0, { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
        { const $t96 = $.sub((await $.wv([$t86, $t87], "Rows", C, false)), 1);
          await $.wset([$t86, $t87], "Y", 1, { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
          let $t97 = true;
          for (;;) {
            if (!$t97) { await $.wset([$t86, $t87], "Y", $.succ((await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), 1), { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }); }
            $t97 = false;
            if (!($.ord((await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))) <= $.ord($t96))) break;
            await $.wset([$t86, $t87], "P", $.add((await $.wv([$t86, $t87], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "GetRowHeight", [$.sub((await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), 1)], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true }))), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
            if ($.truthy((await $.or_(($.ne((await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), 1)), async () => (await $.wv([$t86, $t87], "DrawFirstRowLine", C, false)))))) {
              if ($.truthy((await $.wv([$t86, $t87], "FirstColumnJoined", C, false)))) {
                await $.stmt((await $.wcall([$t86, $t87], "MoveTo", [(await $.wcall([$t86, $t87], "XPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left"))), (await $.wcall([$t86, $t87], "GetColWidth", [0], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), (await $.wv([$t86, $t87], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false)))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top"))), (await $.wv([$t86, $t87], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C))], C)));
              } else {
                await $.stmt((await $.wcall([$t86, $t87], "MoveTo", [(await $.wcall([$t86, $t87], "XPos", [$.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left")))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top"))), (await $.wv([$t86, $t87], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C))], C)));
              }
              await $.stmt((await $.wcall([$t86, $t87], "LineTo", [(await $.wcall([$t86, $t87], "XPos", [$.add($.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left"))), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Width")))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top"))), (await $.wv([$t86, $t87], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C))], C)));
            }
            await $.tick();
          }
        }
      }
      if ($.truthy($.gt((await $.wv([$t86, $t87], "Columns", C, false)), 1))) {
        await $.wset([$t86, $t87], "P", 0, { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
        { const $t98 = $.sub((await $.wv([$t86, $t87], "Columns", C, false)), 1);
          await $.wset([$t86, $t87], "X", 1, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
          let $t99 = true;
          for (;;) {
            if (!$t99) { await $.wset([$t86, $t87], "X", $.succ((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }); }
            $t99 = false;
            if (!($.ord((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))) <= $.ord($t98))) break;
            await $.wset([$t86, $t87], "P", $.add((await $.wv([$t86, $t87], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "GetColWidth", [$.sub((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1)], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true });
            if ($.truthy((await $.wv([$t86, $t87], "FirstRowJoined", C, false)))) {
              await $.stmt((await $.wcall([$t86, $t87], "MoveTo", [(await $.wcall([$t86, $t87], "XPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left"))), (await $.wv([$t86, $t87], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false)))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top"))), (await $.wcall([$t86, $t87], "GetRowHeight", [0], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true }))), (await $.wv([$t86, $t87], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false)))], C))], C)));
            } else {
              await $.stmt((await $.wcall([$t86, $t87], "MoveTo", [(await $.wcall([$t86, $t87], "XPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left"))), (await $.wv([$t86, $t87], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false)))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top")))], C))], C)));
            }
            await $.stmt((await $.wcall([$t86, $t87], "LineTo", [(await $.wcall([$t86, $t87], "XPos", [$.add($.add($.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left"))), (await $.wv([$t86, $t87], "P", { get: async () => L0["p"], set: async (v) => { L0["p"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false)))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add($.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top"))), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Height")))], C))], C)));
            await $.tick();
          }
        }
      }
      await $.wset([$t86, $t87], "PX", $.add((await $.mv((await $.wv([$t86, $t87], "Pen", C, false)), "Width")), (await $.wv([$t86, $t87], "CellBorderX", C, false))), { get: async () => L0["px"], set: async (v) => { L0["px"] = v; }, local: true });
      { const $t100 = $.sub((await $.wv([$t86, $t87], "Columns", C, false)), 1);
        await $.wset([$t86, $t87], "X", 0, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
        let $t101 = true;
        for (;;) {
          if (!$t101) { await $.wset([$t86, $t87], "X", $.succ((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 1), { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }); }
          $t101 = false;
          if (!($.ord((await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))) <= $.ord($t100))) break;
          await $.wset([$t86, $t87], "PY", $.add((await $.mv((await $.wv([$t86, $t87], "Pen", C, false)), "Width")), (await $.wv([$t86, $t87], "CellBorderY", C, false))), { get: async () => L0["py"], set: async (v) => { L0["py"] = v; }, local: true });
          { const $t102 = $.sub((await $.wv([$t86, $t87], "Rows", C, false)), 1);
            await $.wset([$t86, $t87], "Y", 0, { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true });
            let $t103 = true;
            for (;;) {
              if (!$t103) { await $.wset([$t86, $t87], "Y", $.succ((await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false)), 1), { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }); }
              $t103 = false;
              if (!($.ord((await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))) <= $.ord($t102))) break;
              if ($.truthy($.ne((await $.mv((await $.idx((await $.wv([$t86, $t87], "Cells", C, false)), [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))])), "Caption")), ""))) {
                await $.wset([$t86, $t87], "C", (await $.idx((await $.wv([$t86, $t87], "Cells", C, false)), [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))])), { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true });
                await $.wset([$t86, $t87], "aCaption", (await $.mv((await $.wv([$t86, $t87], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), "Caption")), { get: async () => L0["acaption"], set: async (v) => { L0["acaption"] = v; }, local: true });
                await $.wset([$t86, $t87], "AX", $.add($.add($.add((await $.wv([$t86, $t87], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Left"))), (await $.wv([$t86, $t87], "PX", { get: async () => L0["px"], set: async (v) => { L0["px"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DX", { get: async () => L0["dx"], set: async (v) => { L0["dx"] = v; }, local: true }, false))), { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true });
                await $.wset([$t86, $t87], "AY", $.add($.add($.add((await $.wv([$t86, $t87], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t86, $t87], "Size", C, false)), "Top"))), (await $.wv([$t86, $t87], "PY", { get: async () => L0["py"], set: async (v) => { L0["py"] = v; }, local: true }, false))), (await $.wv([$t86, $t87], "DY", { get: async () => L0["dy"], set: async (v) => { L0["dy"] = v; }, local: true }, false))), { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true });
                if ($.truthy($.not((await $.mv((await $.wv([$t86, $t87], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), "ParentFont"))))) {
                  await $.stmt((await $.mcall((await $.mv((await $.wv([$t86, $t87], "Canvas", C, false)), "Font")), "Assign", [(await $.mv((await $.wv([$t86, $t87], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), "Font"))])));
                } else {
                  await $.stmt((await $.mcall((await $.mv((await $.wv([$t86, $t87], "Canvas", C, false)), "Font")), "Assign", [(await $.mv(Self, "Font"))])));
                }
                if ($.truthy($.eq((await $.mv((await $.wv([$t86, $t87], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), "HorizAlignment")), (await $.wv([$t86, $t87], "haNone", C, false))))) {
                  await $.wset([$t86, $t87], "HA", (await $.wv([$t86, $t87], "CellHorizAlignment", C, false)), { get: async () => L0["ha"], set: async (v) => { L0["ha"] = v; }, local: true });
                } else {
                  await $.wset([$t86, $t87], "HA", (await $.mv((await $.wv([$t86, $t87], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), "HorizAlignment")), { get: async () => L0["ha"], set: async (v) => { L0["ha"] = v; }, local: true });
                }
                await $.wset([$t86, $t87], "aRect", (await $.wcall([$t86, $t87], "Rect", [(await $.wcall([$t86, $t87], "XPos", [(await $.wv([$t86, $t87], "AX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false))], C)), (await $.wcall([$t86, $t87], "YPos", [(await $.wv([$t86, $t87], "AY", { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true }, false))], C)), (await $.wcall([$t86, $t87], "XPos", [$.add($.sub((await $.wv([$t86, $t87], "AX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false)), $.mul(2, ($.add((await $.mv((await $.wv([$t86, $t87], "Pen", C, false)), "Width")), (await $.wv([$t86, $t87], "CellBorderX", C, false)))))), (await $.wcall([$t86, $t87], "GetColWidth", [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true })))], C)), (await $.wcall([$t86, $t87], "YPos", [$.add($.sub((await $.wv([$t86, $t87], "AY", { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true }, false)), $.mul(2, ($.add((await $.mv((await $.wv([$t86, $t87], "Pen", C, false)), "Width")), (await $.wv([$t86, $t87], "CellBorderY", C, false)))))), (await $.wcall([$t86, $t87], "GetRowHeight", [(await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true })))], C))], C)), { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true });
                { const $t104 = (await $.wv([$t86, $t87], "HA", { get: async () => L0["ha"], set: async (v) => { L0["ha"] = v; }, local: true }, false));
                  if ($.eq($t104, (await $.wv([$t86, $t87], "haNone", C, false))) || $.eq($t104, (await $.wv([$t86, $t87], "haLeft", C, false)))) {
                    await $.stmt((await $.wcall([$t86, $t87], "SetTextAlign", [(await $.mv((await $.wv([$t86, $t87], "Canvas", C, false)), "Handle")), $.add($.add((await $.wv([$t86, $t87], "TA_Left", C, false)), (await $.wv([$t86, $t87], "TA_Top", C, false))), (await $.wv([$t86, $t87], "TA_NoUpdateCP", C, false)))], C)));
                  }
                  else if ($.eq($t104, (await $.wv([$t86, $t87], "haRight", C, false)))) {
                    await $.stmt((await $.wcall([$t86, $t87], "SetTextAlign", [(await $.mv((await $.wv([$t86, $t87], "Canvas", C, false)), "Handle")), $.add($.add((await $.wv([$t86, $t87], "TA_Right", C, false)), (await $.wv([$t86, $t87], "TA_Top", C, false))), (await $.wv([$t86, $t87], "TA_NoUpdateCP", C, false)))], C)));
                    await $.wset([$t86, $t87], "AX", $.sub($.add((await $.wv([$t86, $t87], "AX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "GetColWidth", [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), $.mul(2, ($.add((await $.mv((await $.wv([$t86, $t87], "Pen", C, false)), "Width")), (await $.wv([$t86, $t87], "CellBorderX", C, false)))))), { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true });
                    if ($.truthy($.in_((await $.wv([$t86, $t87], "fsItalic", C, false)), (await $.mv((await $.wv([$t86, $t87], "Font", C, false)), "Style"))))) {
                      await $.wset([$t86, $t87], "AX", $.sub((await $.wv([$t86, $t87], "AX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false)), ((await $.mcall((await $.mv(Self, "ParentReport")), "TextWidth", [(await $.wv([$t86, $t87], "Font", C, false)), " "])))), { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true });
                    }
                  }
                  else if ($.eq($t104, (await $.wv([$t86, $t87], "haCenter", C, false)))) {
                    await $.stmt((await $.wcall([$t86, $t87], "SetTextAlign", [(await $.mv((await $.wv([$t86, $t87], "Canvas", C, false)), "Handle")), $.add($.add((await $.wv([$t86, $t87], "TA_Center", C, false)), (await $.wv([$t86, $t87], "TA_Top", C, false))), (await $.wv([$t86, $t87], "TA_NoUpdateCP", C, false)))], C)));
                    await $.wset([$t86, $t87], "AX", $.add((await $.wv([$t86, $t87], "AX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false)), $.fdiv(($.sub((await $.wcall([$t86, $t87], "GetColWidth", [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true })), $.mul(2, ($.add((await $.mv((await $.wv([$t86, $t87], "Pen", C, false)), "Width")), (await $.wv([$t86, $t87], "CellBorderX", C, false))))))), 2)), { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true });
                  }
                }
                if ($.truthy($.eq((await $.mv((await $.wv([$t86, $t87], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), "VertAlignment")), (await $.wv([$t86, $t87], "vaNone", C, false))))) {
                  await $.wset([$t86, $t87], "VA", (await $.wv([$t86, $t87], "CellVertAlignment", C, false)), { get: async () => L0["va"], set: async (v) => { L0["va"] = v; }, local: true });
                } else {
                  await $.wset([$t86, $t87], "VA", (await $.mv((await $.wv([$t86, $t87], "C", { get: async () => L0["c"], set: async (v) => { L0["c"] = v; }, local: true }, false)), "VertAlignment")), { get: async () => L0["va"], set: async (v) => { L0["va"] = v; }, local: true });
                }
                { const $t105 = (await $.wv([$t86, $t87], "VA", { get: async () => L0["va"], set: async (v) => { L0["va"] = v; }, local: true }, false));
                  if ($.eq($t105, (await $.wv([$t86, $t87], "vaNone", C, false))) || $.eq($t105, (await $.wv([$t86, $t87], "vaTop", C, false)))) {
                  }
                  else if ($.eq($t105, (await $.wv([$t86, $t87], "vaCenter", C, false)))) {
                    await $.wset([$t86, $t87], "AY", $.add((await $.wv([$t86, $t87], "AY", { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true }, false)), $.fdiv(($.sub($.sub((await $.mv((await $.wv([$t86, $t87], "aRect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t86, $t87], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top"))), (await $.mcall((await $.mv(Self, "ParentReport")), "TextHeight", [(await $.wv([$t86, $t87], "Font", C, false)), "Yy"])))), ($.mul(2, (await $.mv((await $.mv((await $.mv(Self, "ParentReport")), "QRPrinter")), "YFactor")))))), { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true });
                  }
                  else if ($.eq($t105, (await $.wv([$t86, $t87], "vaBottom", C, false)))) {
                    await $.wset([$t86, $t87], "AY", $.add((await $.wv([$t86, $t87], "AY", { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true }, false)), $.fdiv(($.sub($.sub((await $.mv((await $.wv([$t86, $t87], "aRect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t86, $t87], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top"))), (await $.mcall((await $.mv(Self, "ParentReport")), "TextHeight", [(await $.wv([$t86, $t87], "Font", C, false)), "Yy"])))), ((await $.mv((await $.mv((await $.mv(Self, "ParentReport")), "QRPrinter")), "YFactor"))))), { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true });
                  }
                }
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t86, $t87], "Canvas", C, false)), "Brush")), "Assign", [(await $.mv((await $.idx((await $.wv([$t86, $t87], "Cells", C, false)), [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))])), "Brush"))])));
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t86, $t87], "Canvas", C, false)), "Font")), "Assign", [(await $.mv((await $.idx((await $.wv([$t86, $t87], "Cells", C, false)), [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), (await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))])), "Font"))])));
                await $.stmt((await $.wcall([$t86, $t87], "ExtTextOut", [(await $.mv((await $.wv([$t86, $t87], "Canvas", C, false)), "Handle")), (await $.wcall([$t86, $t87], "XPos", [(await $.wv([$t86, $t87], "AX", { get: async () => L0["ax"], set: async (v) => { L0["ax"] = v; }, local: true }, false))], C)), (await $.wcall([$t86, $t87], "YPos", [(await $.wv([$t86, $t87], "AY", { get: async () => L0["ay"], set: async (v) => { L0["ay"] = v; }, local: true }, false))], C)), (await $.wv([$t86, $t87], "ETO_CLIPPED", C, false)), (await $.wv([$t86, $t87], "aRect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, true)), (await $.idx((await $.wv([$t86, $t87], "aCaption", { get: async () => L0["acaption"], set: async (v) => { L0["acaption"] = v; }, local: true }, false)), [1])), (await $.wcall([$t86, $t87], "length", [(await $.wv([$t86, $t87], "aCaption", { get: async () => L0["acaption"], set: async (v) => { L0["acaption"] = v; }, local: true }, false))], C)), null], C)));
              }
              await $.wset([$t86, $t87], "PY", $.add((await $.wv([$t86, $t87], "PY", { get: async () => L0["py"], set: async (v) => { L0["py"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "GetRowHeight", [(await $.wv([$t86, $t87], "Y", { get: async () => L0["y"], set: async (v) => { L0["y"] = v; }, local: true }, false))], { get: async () => L0["getrowheight"], set: async (v) => { L0["getrowheight"] = v; }, local: true }))), { get: async () => L0["py"], set: async (v) => { L0["py"] = v; }, local: true });
              await $.tick();
            }
          }
          await $.wset([$t86, $t87], "PX", $.add((await $.wv([$t86, $t87], "PX", { get: async () => L0["px"], set: async (v) => { L0["px"] = v; }, local: true }, false)), (await $.wcall([$t86, $t87], "GetColWidth", [(await $.wv([$t86, $t87], "X", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false))], { get: async () => L0["getcolwidth"], set: async (v) => { L0["getcolwidth"] = v; }, local: true }))), { get: async () => L0["px"], set: async (v) => { L0["px"] = v; }, local: true });
          await $.tick();
        }
      }
    }
    await $.stmt((await $.call(C, "SetBkMode", [(await $.mv((await $.mv((await $.v(C, "QRPrinter")), "Canvas")), "Handle")), L0["bkmode"]])));
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ParentReport")), "FinalPass")), async () => (await $.mv((await $.v(C, "Frame")), "AnyFrame")))))) {
    await $.stmt((await $.mcall((await $.call(C, "TQRPFrame", [(await $.v(C, "Frame"))])), "PaintIt", [(await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), (await $.call(C, "Rect", [(await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add($.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left"))), (await $.mv((await $.v(C, "Size")), "Width")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add($.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top"))), (await $.mv((await $.v(C, "Size")), "Height")))]))])), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XFactor")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor"))])));
  }
  await $.set(C, "Height", L0["orgheight"]);
  return L0.result;
}, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["Integer", "Integer"]});
  U.method("TQRPGridCell", "Create", async function Create(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "Font", (await $.mv((await $.v(C, "TFont")), "Create")));
  await $.set(C, "Brush", (await $.mv((await $.v(C, "TBrush")), "Create")));
  await $.set(C, "ParentFont", true);
  return L0.result;
}, {"params": [], "kind": "constructor", "ptypes": []});
  U.method("TQRPGridCell", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "Font")), "Free", []);
  await $.mcall((await $.v(C, "Brush")), "Free", []);
  await $.inherited(Self, "TQRPGridCell", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TQRPCheckBox", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TQRPCheckBox", "Create", [L0["aowner"]], arguments);
  await $.set(C, "FPen", (await $.mv((await $.v(C, "TPen")), "Create")));
  await $.set(C, "FBrush", (await $.mv((await $.v(C, "TBrush")), "Create")));
  await $.mset((await $.v(C, "FBrush")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "FBrush")), "OnChange", (await $.ref_(C, "StyleChanged")));
  await $.mset((await $.v(C, "FPen")), "OnChange", (await $.ref_(C, "StyleChanged")));
  await $.set(C, "FChecked", true);
  await $.mset((await $.v(C, "Frame")), "DrawTop", true);
  await $.mset((await $.v(C, "Frame")), "DrawLeft", true);
  await $.mset((await $.v(C, "Frame")), "DrawBottom", true);
  await $.mset((await $.v(C, "Frame")), "DrawRight", true);
  await $.set(C, "Height", 17);
  await $.set(C, "Width", 17);
  await $.set(C, "Transparent", false);
  await $.set(C, "FCtl3D", false);
  await $.set(C, "FCheckmarkDistance", 3);
  await $.set(C, "FGlyphChecked", (await $.mv((await $.v(C, "TPicture")), "Create")));
  await $.set(C, "FGlyphUnchecked", (await $.mv((await $.v(C, "TPicture")), "Create")));
  await $.mset((await $.v(C, "FGlyphChecked")), "OnChange", (await $.ref_(C, "PictureChanged")));
  await $.mset((await $.v(C, "FGlyphUnchecked")), "OnChange", (await $.ref_(C, "PictureChanged")));
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TQRPCheckbox", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "FPen")), "Free", []);
  await $.mcall((await $.v(C, "FBrush")), "Free", []);
  await $.mcall((await $.v(C, "FGlyphChecked")), "Free", []);
  await $.mcall((await $.v(C, "FGlyphUnchecked")), "Free", []);
  await $.inherited(Self, "TQRPCheckbox", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TQRPCheckbox", "PictureChanged", async function PictureChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRPCheckBox", "SetBrush", async function SetBrush(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FBrush")), "Assign", [L0["value"]])));
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TBrush"]});
  U.method("TQRPCheckBox", "SetGlyphChecked", async function SetGlyphChecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FGlyphChecked")), "Assign", [L0["value"]])));
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPicture"]});
  U.method("TQRPCheckBox", "SetGlyphUnchecked", async function SetGlyphUnchecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FGlyphUnchecked")), "Assign", [L0["value"]])));
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPicture"]});
  U.method("TQRPCheckBox", "SetCheckmarkDistance", async function SetCheckmarkDistance(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FCheckmarkDistance", L0["value"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Word"]});
  U.method("TQRPCheckBox", "SetCheckmarkType", async function SetCheckmarkType(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FCheckmarkType", L0["value"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TQRPCheckmarkType"]});
  U.method("TQRPCheckBox", "SetPen", async function SetPen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.mcall((await $.v(C, "FPen")), "Assign", [L0["value"]])));
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TPen"]});
  U.method("TQRPCheckBox", "SetChecked", async function SetChecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ne(L0["value"], (await $.v(C, "FChecked"))))) {
    await $.set(C, "FChecked", L0["value"]);
    await $.stmt($.call(C, "Invalidate", []));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["boolean"]});
  U.method("TQRPCheckBox", "SetCtl3D", async function SetCtl3D(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FCtl3D", L0["value"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["boolean"]});
  U.method("TQRPCheckBox", "Paint", async function Paint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dest": null, "arect": null};
  await $.mset((await $.v(C, "Canvas")), "Pen", (await $.v(C, "FPen")));
  await $.mset((await $.v(C, "Canvas")), "Brush", (await $.v(C, "FBrush")));
  {
    const $t106 = (await $.v(C, "Canvas"));
    if ($.truthy($.not((await $.wv([$t106], "Transparent", C, false))))) {
      await $.stmt((await $.wcall([$t106], "FillRect", [(await $.wv([$t106], "ClientRect", C, false))], C)));
    }
    if ($.truthy((await $.wv([$t106], "FCtl3d", C, false)))) {
      await $.mset((await $.mv((await $.wv([$t106], "Canvas", C, false)), "Pen")), "Color", (await $.wv([$t106], "clGray", C, false)));
      await $.mset((await $.mv((await $.wv([$t106], "Canvas", C, false)), "Pen")), "Width", 1);
      await $.mset((await $.mv((await $.wv([$t106], "Canvas", C, false)), "Pen")), "Style", (await $.wv([$t106], "psSolid", C, false)));
      await $.stmt((await $.wcall([$t106], "MoveTo", [(await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t106], "Frame", C, false)), "Width"))], C)));
      await $.stmt((await $.wcall([$t106], "LineTo", [$.sub((await $.wv([$t106], "Width", C, false)), (await $.mv((await $.wv([$t106], "Frame", C, false)), "Width"))), (await $.mv((await $.wv([$t106], "Frame", C, false)), "Width"))], C)));
      await $.stmt((await $.wcall([$t106], "MoveTo", [(await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t106], "Frame", C, false)), "Width"))], C)));
      await $.stmt((await $.wcall([$t106], "LineTo", [(await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")), $.sub((await $.wv([$t106], "Height", C, false)), (await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")))], C)));
      await $.mset((await $.mv((await $.wv([$t106], "Canvas", C, false)), "Pen")), "Color", (await $.wv([$t106], "clSilver", C, false)));
      await $.stmt((await $.wcall([$t106], "MoveTo", [$.add((await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")), 1), $.add((await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")), 1)], C)));
      await $.stmt((await $.wcall([$t106], "LineTo", [$.sub((await $.wv([$t106], "Width", C, false)), (await $.mv((await $.wv([$t106], "Frame", C, false)), "Width"))), $.add((await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")), 1)], C)));
      await $.stmt((await $.wcall([$t106], "MoveTo", [$.add((await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")), 1), $.add((await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")), 1)], C)));
      await $.stmt((await $.wcall([$t106], "LineTo", [$.add((await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")), 1), $.sub((await $.wv([$t106], "Height", C, false)), (await $.mv((await $.wv([$t106], "Frame", C, false)), "Width")))], C)));
      await $.mset((await $.wv([$t106], "Canvas", C, false)), "Pen", (await $.wv([$t106], "FPen", C, false)));
    }
    if ($.truthy((await $.wv([$t106], "Checked", C, false)))) {
      if ($.truthy($.eq((await $.wv([$t106], "CheckmarkType", C, false)), (await $.wv([$t106], "cmCross", C, false))))) {
        await $.stmt((await $.wcall([$t106], "MoveTo", [(await $.wv([$t106], "FCheckMarkDistance", C, false)), (await $.wv([$t106], "FCheckMarkDistance", C, false))], C)));
        await $.stmt((await $.wcall([$t106], "LineTo", [$.sub((await $.wv([$t106], "Width", C, false)), (await $.wv([$t106], "FCheckMarkDistance", C, false))), $.sub((await $.wv([$t106], "Height", C, false)), (await $.wv([$t106], "FCheckMarkDistance", C, false)))], C)));
        if ($.truthy($.eq((await $.mv((await $.wv([$t106], "Pen", C, false)), "Width")), 1))) {
          await $.stmt((await $.wcall([$t106], "MoveTo", [(await $.wv([$t106], "FCheckMarkDistance", C, false)), $.sub($.sub((await $.wv([$t106], "Height", C, false)), (await $.wv([$t106], "FCheckMarkDistance", C, false))), 1)], C)));
          await $.stmt((await $.wcall([$t106], "LineTo", [$.sub((await $.wv([$t106], "Width", C, false)), (await $.wv([$t106], "FCheckMarkDistance", C, false))), $.sub((await $.wv([$t106], "FCheckMarkDistance", C, false)), 1)], C)));
        } else {
          await $.stmt((await $.wcall([$t106], "MoveTo", [(await $.wv([$t106], "FCheckMarkDistance", C, false)), $.sub((await $.wv([$t106], "Height", C, false)), (await $.wv([$t106], "FCheckMarkDistance", C, false)))], C)));
          await $.stmt((await $.wcall([$t106], "LineTo", [$.sub((await $.wv([$t106], "Width", C, false)), (await $.wv([$t106], "FCheckMarkDistance", C, false))), (await $.wv([$t106], "FCheckMarkDistance", C, false))], C)));
        }
      } else {
        if ($.truthy($.eq((await $.wv([$t106], "CheckmarkType", C, false)), (await $.wv([$t106], "cmHook", C, false))))) {
          await $.stmt((await $.wcall([$t106], "MoveTo", [(await $.wv([$t106], "FCheckmarkDistance", C, false)), $.add(($.idiv(($.sub((await $.wv([$t106], "Height", C, false)), $.mul(2, (await $.wv([$t106], "FCheckMarkDistance", C, false))))), 2)), (await $.wv([$t106], "FCheckmarkDistance", C, false)))], C)));
          await $.stmt((await $.wcall([$t106], "LineTo", [$.add(($.idiv(($.sub((await $.wv([$t106], "Width", C, false)), $.mul(2, (await $.wv([$t106], "FCheckMarkDistance", C, false))))), 3)), (await $.wv([$t106], "FCheckmarkDistance", C, false))), $.sub((await $.wv([$t106], "Height", C, false)), (await $.wv([$t106], "FCheckmarkDistance", C, false)))], C)));
          await $.stmt((await $.wcall([$t106], "LineTo", [$.sub((await $.wv([$t106], "Width", C, false)), (await $.wv([$t106], "FCheckmarkDistance", C, false))), (await $.wv([$t106], "FCheckmarkDistance", C, false))], C)));
        } else {
          if ($.truthy($.eq((await $.wv([$t106], "CheckmarkType", C, false)), (await $.wv([$t106], "cmGlyph", C, false))))) {
            await $.wset([$t106], "Dest", (await $.wv([$t106], "ClientRect", C, false)), { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true });
            await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left")), (await $.wv([$t106], "CheckmarkDistance", C, false))));
            await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top")), (await $.wv([$t106], "CheckmarkDistance", C, false))));
            await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom", $.sub((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom")), (await $.wv([$t106], "CheckmarkDistance", C, false))));
            await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right", $.sub((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right")), (await $.wv([$t106], "CheckmarkDistance", C, false))));
            if ($.truthy($.ne((await $.wv([$t106], "Zoom", C, false)), 100))) {
              await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left")), $.idiv($.mul(($.sub((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right")), (await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left")))), (await $.wv([$t106], "Zoom", C, false))), 100)));
              await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top")), $.idiv($.mul(($.sub((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top")))), (await $.wv([$t106], "Zoom", C, false))), 100)));
            }
            {
              const $t107 = (await $.inherited(Self, "TQRPCheckBox", "Canvas", null, arguments));
              await $.stmt((await $.wcall([$t106, $t107], "StretchDraw", [(await $.wv([$t106, $t107], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t106, $t107], "GlyphChecked", C, false)), "Graphic"))], C)));
            }
          }
        }
      }
    } else {
      if ($.truthy($.eq((await $.wv([$t106], "CheckmarkType", C, false)), (await $.wv([$t106], "cmGlyph", C, false))))) {
        await $.wset([$t106], "Dest", (await $.wv([$t106], "ClientRect", C, false)), { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true });
        await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left")), (await $.wv([$t106], "CheckmarkDistance", C, false))));
        await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top")), (await $.wv([$t106], "CheckmarkDistance", C, false))));
        await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom", $.sub((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom")), (await $.wv([$t106], "CheckmarkDistance", C, false))));
        await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right", $.sub((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right")), (await $.wv([$t106], "CheckmarkDistance", C, false))));
        if ($.truthy($.ne((await $.wv([$t106], "Zoom", C, false)), 100))) {
          await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left")), $.idiv($.mul(($.sub((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right")), (await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left")))), (await $.wv([$t106], "Zoom", C, false))), 100)));
          await $.mset((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top")), $.idiv($.mul(($.sub((await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t106], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top")))), (await $.wv([$t106], "Zoom", C, false))), 100)));
        }
        {
          const $t108 = (await $.inherited(Self, "TQRPCheckBox", "Canvas", null, arguments));
          await $.stmt((await $.wcall([$t106, $t108], "StretchDraw", [(await $.wv([$t106, $t108], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t106, $t108], "GlyphUnchecked", C, false)), "Graphic"))], C)));
        }
      }
    }
  }
  await $.stmt($.call(C, "PaintCorners", []));
  L0["arect"] = (await $.v(C, "GetClientRect"));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["arect"], "Bottom")), async ($t109) => { await $.mset(L0["arect"], "Bottom", $t109); })])));
  await $.stmt((await $.call(C, "dec", [$.ref(async () => (await $.mv(L0["arect"], "Right")), async ($t110) => { await $.mset(L0["arect"], "Right", $t110); })])));
  await $.stmt((await $.mcall((await $.call(C, "TQRPFrame", [(await $.v(C, "Frame"))])), "PaintIt", [(await $.v(C, "Canvas")), L0["arect"], $.fdiv($.mul($.fdiv((await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), 254), (await $.v(C, "Zoom"))), 100), $.fdiv($.mul($.fdiv((await $.mv((await $.v(C, "Screen")), "PixelsPerInch")), 254), (await $.v(C, "Zoom"))), 100)])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("PrintBitmap", async function PrintBitmap(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"acanvas": $.copyArg(p0), "dest": $.copyArg(p1), "bitmap": $.copyArg(p2), result: undefined, "info": null, "infosize": 0, "image": null, "imagesize": 0};
  await $.fixArgs(L0, ["acanvas", "dest", "bitmap"]);
  {
    const $t111 = L0["bitmap"];
    await $.stmt((await $.wcall([$t111], "GetDIBSizes", [(await $.wv([$t111], "Handle", C, false)), (await $.wv([$t111], "InfoSize", { get: async () => L0["infosize"], set: async (v) => { L0["infosize"] = v; }, local: true }, false)), (await $.wv([$t111], "ImageSize", { get: async () => L0["imagesize"], set: async (v) => { L0["imagesize"] = v; }, local: true }, false))], C)));
    await $.wset([$t111], "Info", (await $.wcall([$t111], "AllocMem", [(await $.wv([$t111], "InfoSize", { get: async () => L0["infosize"], set: async (v) => { L0["infosize"] = v; }, local: true }, false))], C)), { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true });
    try {
      await $.wset([$t111], "Image", (await $.wcall([$t111], "AllocMem", [(await $.wv([$t111], "ImageSize", { get: async () => L0["imagesize"], set: async (v) => { L0["imagesize"] = v; }, local: true }, false))], C)), { get: async () => L0["image"], set: async (v) => { L0["image"] = v; }, local: true });
      try {
        await $.stmt((await $.wcall([$t111], "GetDIB", [(await $.wv([$t111], "Handle", C, false)), (await $.wv([$t111], "Palette", C, false)), (await $.wv([$t111], "Info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false)), (await $.wv([$t111], "Image", { get: async () => L0["image"], set: async (v) => { L0["image"] = v; }, local: true }, false))], C)));
        if ($.truthy($.not((await $.wv([$t111], "Monochrome", C, false))))) {
          await $.stmt((await $.wcall([$t111], "SetStretchBltMode", [(await $.mv((await $.wv([$t111], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Handle")), (await $.wv([$t111], "STRETCH_DELETESCANS", C, false))], C)));
        }
        {
          const $t112 = (await $.mv((await $.wv([$t111], "Info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false)), "bmiHeader"));
          await $.stmt((await $.wcall([$t111, $t112], "StretchDIBits", [(await $.mv((await $.wv([$t111, $t112], "aCanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Handle")), (await $.mv((await $.wv([$t111, $t112], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t111, $t112], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top")), $.sub((await $.mv((await $.wv([$t111, $t112], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "RIght")), (await $.mv((await $.wv([$t111, $t112], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left"))), $.sub((await $.mv((await $.wv([$t111, $t112], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t111, $t112], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top"))), 0, 0, (await $.wv([$t111, $t112], "biWidth", C, false)), (await $.wv([$t111, $t112], "biHeight", C, false)), (await $.wv([$t111, $t112], "Image", { get: async () => L0["image"], set: async (v) => { L0["image"] = v; }, local: true }, false)), (await $.wv([$t111, $t112], "Info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false)), (await $.wv([$t111, $t112], "DIB_RGB_COLORS", C, false)), (await $.wv([$t111, $t112], "SRCCOPY", C, false))], C)));
        }
      } finally {
        await $.stmt((await $.wcall([$t111], "FreeMem", [(await $.wv([$t111], "Image", { get: async () => L0["image"], set: async (v) => { L0["image"] = v; }, local: true }, false)), (await $.wv([$t111], "ImageSize", { get: async () => L0["imagesize"], set: async (v) => { L0["imagesize"] = v; }, local: true }, false))], C)));
      }
    } finally {
      await $.stmt((await $.wcall([$t111], "FreeMem", [(await $.wv([$t111], "Info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false)), (await $.wv([$t111], "InfoSize", { get: async () => L0["infosize"], set: async (v) => { L0["infosize"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["aCanvas", "Dest", "Bitmap"], "kind": "procedure", "ptypes": ["TCanvas", "TRect", "TBitmap"]});
  U.method("TQRPCheckBox", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ofsx": $.copyArg(p0), "ofsy": $.copyArg(p1), result: undefined, "cmdist": 0, "dest": null, "orgheight": 0};
  await $.fixArgs(L0, ["ofsx", "ofsy"]);
  L0["orgheight"] = (await $.v(C, "Height"));
  if ($.truthy((await $.and_((await $.v(C, "FixBottomPosition")), async () => ($.is_((await $.v(C, "Parent")), "TQRCustomBand")))))) {
    L0["ofsy"] = $.add(L0["ofsy"], (await $.call(C, "Round", [(await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded"))])));
  }
  if ($.truthy((await $.v(C, "StretchHeightWithBand")))) {
    await $.set(C, "Height", $.add((await $.v(C, "Height")), (await $.call(C, "Round", [$.mul((await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor")))]))));
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ParentReport")), "FinalPass")), async () => (await $.v(C, "Enabled")))))) {
    await $.mset((await $.mv((await $.v(C, "QRPrinter")), "Canvas")), "Brush", (await $.v(C, "Brush")));
    await $.mset((await $.mv((await $.v(C, "QRPrinter")), "Canvas")), "Pen", (await $.v(C, "Pen")));
    {
      const $t113 = (await $.v(C, "QRPrinter"));
      {
        const $t114 = (await $.wv([$t113], "Canvas", C, false));
        if ($.truthy($.not((await $.wv([$t113, $t114], "Transparent", C, false))))) {
          await $.stmt((await $.wcall([$t113, $t114], "FillRect", [(await $.wcall([$t113, $t114], "rect", [(await $.wcall([$t113, $t114], "XPos", [$.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left")))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top")))], C)), (await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Width")))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Height")))], C))], C))], C)));
        }
        if ($.truthy((await $.wv([$t113, $t114], "FCtl3d", C, false)))) {
          await $.mset((await $.mv((await $.mv((await $.wv([$t113, $t114], "QRPrinter", C, false)), "Canvas")), "Pen")), "Color", (await $.wv([$t113, $t114], "clGray", C, false)));
          await $.mset((await $.mv((await $.mv((await $.wv([$t113, $t114], "QRPrinter", C, false)), "Canvas")), "Pen")), "Width", 1);
          await $.mset((await $.mv((await $.mv((await $.wv([$t113, $t114], "QRPrinter", C, false)), "Canvas")), "Pen")), "Style", (await $.wv([$t113, $t114], "psSolid", C, false)));
          await $.stmt((await $.wcall([$t113, $t114], "MoveTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C))], C)));
          await $.stmt((await $.wcall([$t113, $t114], "LineTo", [(await $.wcall([$t113, $t114], "XPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Width"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C))], C)));
          await $.stmt((await $.wcall([$t113, $t114], "MoveTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C))], C)));
          await $.stmt((await $.wcall([$t113, $t114], "LineTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Height"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C))], C)));
          await $.mset((await $.mv((await $.mv((await $.wv([$t113, $t114], "QRPrinter", C, false)), "Canvas")), "Pen")), "Color", (await $.wv([$t113, $t114], "clSilver", C, false)));
          await $.stmt((await $.wcall([$t113, $t114], "MoveTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), ($.mul($.fdiv(($.add((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), 1)), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), ($.mul($.fdiv(($.add((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), 1)), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C))], C)));
          await $.stmt((await $.wcall([$t113, $t114], "LineTo", [(await $.wcall([$t113, $t114], "XPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Width"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), ($.mul($.fdiv(($.add((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), 1)), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C))], C)));
          await $.stmt((await $.wcall([$t113, $t114], "MoveTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), ($.mul($.fdiv(($.add((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), 1)), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), ($.mul($.fdiv(($.add((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), 1)), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C))], C)));
          await $.stmt((await $.wcall([$t113, $t114], "LineTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), ($.mul($.fdiv(($.add((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), 1)), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Height"))), ($.mul($.fdiv((await $.mv((await $.wv([$t113, $t114], "Frame", C, false)), "Width")), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254)))], C))], C)));
          await $.mset((await $.mv((await $.wv([$t113, $t114], "QRPrinter", C, false)), "Canvas")), "Pen", (await $.wv([$t113, $t114], "FPen", C, false)));
        }
        await $.wset([$t113, $t114], "cmdist", $.mul($.fdiv((await $.wv([$t113, $t114], "FCheckmarkDistance", C, false)), (await $.mv((await $.wv([$t113, $t114], "Screen", C, false)), "PixelsPerInch"))), 254), { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true });
        if ($.truthy((await $.wv([$t113, $t114], "Checked", C, false)))) {
          if ($.truthy($.eq((await $.wv([$t113, $t114], "CheckmarkType", C, false)), (await $.wv([$t113, $t114], "cmCross", C, false))))) {
            await $.stmt((await $.wcall([$t113, $t114], "MoveTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C))], C)));
            await $.stmt((await $.wcall([$t113, $t114], "LineTo", [(await $.wcall([$t113, $t114], "XPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Width"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Height"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C))], C)));
            await $.stmt((await $.wcall([$t113, $t114], "MoveTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Height"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C))], C)));
            await $.stmt((await $.wcall([$t113, $t114], "LineTo", [(await $.wcall([$t113, $t114], "XPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Width"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C))], C)));
          } else {
            if ($.truthy($.eq((await $.wv([$t113, $t114], "CheckmarkType", C, false)), (await $.wv([$t113, $t114], "cmHook", C, false))))) {
              await $.stmt((await $.wcall([$t113, $t114], "MoveTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), ($.fdiv(($.sub((await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Height")), $.mul(2, (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false))))), 2))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C))], C)));
              await $.stmt((await $.wcall([$t113, $t114], "LineTo", [(await $.wcall([$t113, $t114], "XPos", [$.add($.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), ($.fdiv(($.sub((await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Width")), $.mul(2, (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false))))), 3))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Height"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C))], C)));
              await $.stmt((await $.wcall([$t113, $t114], "LineTo", [(await $.wcall([$t113, $t114], "XPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Width"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C)), (await $.wcall([$t113, $t114], "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))], C))], C)));
            } else {
              if ($.truthy($.eq((await $.wv([$t113, $t114], "CheckmarkType", C, false)), (await $.wv([$t113, $t114], "cmGlyph", C, false))))) {
                await $.mset((await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top", (await $.mcall((await $.wv([$t113, $t114], "QRPrinter", C, false)), "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))])));
                await $.mset((await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left", (await $.mcall((await $.wv([$t113, $t114], "QRPrinter", C, false)), "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))])));
                await $.mset((await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right", (await $.mcall((await $.wv([$t113, $t114], "QRPrinter", C, false)), "XPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Width"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))])));
                await $.mset((await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom", (await $.mcall((await $.wv([$t113, $t114], "QRPrinter", C, false)), "YPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Height"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))])));
                if ($.truthy($.is_((await $.mv((await $.wv([$t113, $t114], "GlyphChecked", C, false)), "Graphic")), "TBitmap"))) {
                  await $.stmt((await $.wcall([$t113, $t114], "PrintBitmap", [(await $.mv((await $.wv([$t113, $t114], "QRPrinter", C, false)), "Canvas")), (await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), (await $.wcall([$t113, $t114], "TBitmap", [(await $.mv((await $.wv([$t113, $t114], "GlyphChecked", C, false)), "Graphic"))], C))], C)));
                } else {
                  {
                    const $t115 = (await $.mv((await $.wv([$t113, $t114], "QRPrinter", C, false)), "Canvas"));
                    await $.stmt((await $.wcall([$t113, $t114, $t115], "StretchDraw", [(await $.wv([$t113, $t114, $t115], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114, $t115], "GlyphChecked", C, false)), "Graphic"))], C)));
                  }
                }
              }
            }
          }
        } else {
          if ($.truthy($.eq((await $.wv([$t113, $t114], "CheckmarkType", C, false)), (await $.wv([$t113, $t114], "cmGlyph", C, false))))) {
            await $.mset((await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Top", (await $.mcall((await $.wv([$t113, $t114], "QRPrinter", C, false)), "YPos", [$.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))])));
            await $.mset((await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Left", (await $.mcall((await $.wv([$t113, $t114], "QRPrinter", C, false)), "XPos", [$.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))])));
            await $.mset((await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Right", (await $.mcall((await $.wv([$t113, $t114], "QRPrinter", C, false)), "XPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsX", { get: async () => L0["ofsx"], set: async (v) => { L0["ofsx"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Width"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Left"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))])));
            await $.mset((await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), "Bottom", (await $.mcall((await $.wv([$t113, $t114], "QRPrinter", C, false)), "YPos", [$.sub($.add($.add((await $.wv([$t113, $t114], "OfsY", { get: async () => L0["ofsy"], set: async (v) => { L0["ofsy"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Height"))), (await $.mv((await $.wv([$t113, $t114], "Size", C, false)), "Top"))), (await $.wv([$t113, $t114], "cmdist", { get: async () => L0["cmdist"], set: async (v) => { L0["cmdist"] = v; }, local: true }, false)))])));
            if ($.truthy($.is_((await $.mv((await $.wv([$t113, $t114], "GlyphUnchecked", C, false)), "Graphic")), "TBitmap"))) {
              await $.stmt((await $.wcall([$t113, $t114], "PrintBitmap", [(await $.mv((await $.wv([$t113, $t114], "QRPrinter", C, false)), "Canvas")), (await $.wv([$t113, $t114], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), (await $.wcall([$t113, $t114], "TBitmap", [(await $.mv((await $.wv([$t113, $t114], "GlyphUnchecked", C, false)), "Graphic"))], C))], C)));
            } else {
              {
                const $t116 = (await $.mv((await $.wv([$t113, $t114], "QRPrinter", C, false)), "Canvas"));
                await $.stmt((await $.wcall([$t113, $t114, $t116], "StretchDraw", [(await $.wv([$t113, $t114, $t116], "Dest", { get: async () => L0["dest"], set: async (v) => { L0["dest"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t113, $t114, $t116], "GlyphUnchecked", C, false)), "Graphic"))], C)));
              }
            }
          }
        }
      }
    }
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ParentReport")), "FinalPass")), async () => (await $.mv((await $.v(C, "Frame")), "AnyFrame")))))) {
    await $.stmt((await $.mcall((await $.call(C, "TQRPFrame", [(await $.v(C, "Frame"))])), "PaintIt", [(await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "Canvas")), (await $.call(C, "Rect", [(await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XPos", [$.add($.add(L0["ofsx"], (await $.mv((await $.v(C, "Size")), "Left"))), (await $.mv((await $.v(C, "Size")), "Width")))])), (await $.mcall((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YPos", [$.add($.add(L0["ofsy"], (await $.mv((await $.v(C, "Size")), "Top"))), (await $.mv((await $.v(C, "Size")), "Height")))]))])), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "XFactor")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor"))])));
  }
  await $.set(C, "Height", L0["orgheight"]);
  return L0.result;
}, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["integer", "integer"]});
  U.method("TQRPCheckbox", "StyleChanged", async function StyleChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Invalidate", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TQRPExprCheckbox", "Print", async function Print(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ofsx": $.copyArg(p0), "ofsy": $.copyArg(p1), result: undefined, "orgheight": 0};
  await $.fixArgs(L0, ["ofsx", "ofsy"]);
  L0["orgheight"] = (await $.v(C, "Height"));
  if ($.truthy((await $.and_((await $.v(C, "FixBottomPosition")), async () => ($.is_((await $.v(C, "Parent")), "TQRCustomBand")))))) {
    L0["ofsy"] = $.add(L0["ofsy"], (await $.call(C, "Round", [(await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded"))])));
  }
  if ($.truthy((await $.v(C, "StretchHeightWithBand")))) {
    await $.set(C, "Height", $.add((await $.v(C, "Height")), (await $.call(C, "Round", [$.mul((await $.mv((await $.call(C, "TQRTempBand", [(await $.v(C, "Parent"))])), "Expanded")), (await $.mv((await $.mv((await $.v(C, "ParentReport")), "QRPrinter")), "YFactor")))]))));
  }
  await $.set(C, "Checked", (await $.call(C, "EvalBoolExpression", [(await $.v(C, "Expression")), (await $.call(C, "TQuickRep", [(await $.v(C, "ParentReport"))]))])));
  await $.inherited(Self, "TQRPExprCheckbox", "Print", [L0["ofsx"], L0["ofsy"]], arguments);
  await $.set(C, "Checked", true);
  await $.set(C, "Height", L0["orgheight"]);
  return L0.result;
}, {"params": ["OfsX", "OfsY"], "kind": "procedure", "ptypes": ["integer", "integer"]});
  U.method("TQRPExprCheckbox", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TQRPExprCheckbox", "Create", [L0["aowner"]], arguments);
  await $.set(C, "Checked", true);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.func("Max_Int", async function Max_Int(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"i1": $.copyArg(p0), "i2": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["i1", "i2"]);
  if ($.truthy($.gt(L0["i1"], L0["i2"]))) {
    L0["result"] = L0["i1"];
  } else {
    L0["result"] = L0["i2"];
  }
  return L0.result;
}, {"params": ["I1", "I2"], "kind": "function", "ptypes": ["Integer", "Integer"]});
  U.method("TQRPBand", "SetBounds", async function SetBounds(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"aleft": $.copyArg(p0), "atop": $.copyArg(p1), "awidth": $.copyArg(p2), "aheight": $.copyArg(p3), result: undefined, "j": 0, "oldheight": 0};
  await $.fixArgs(L0, ["aleft", "atop", "awidth", "aheight"]);
  if ($.truthy($.not((await $.v(C, "InSetBounds"))))) {
    L0["oldheight"] = (await $.v(C, "Height"));
  } else {
    L0["oldheight"] = (-(1));
  }
  await $.set(C, "InSetBounds", true);
  await $.inherited(Self, "TQRPBand", "SetBounds", [L0["aleft"], L0["atop"], L0["awidth"], L0["aheight"]], arguments);
  if ($.truthy($.ge(L0["oldheight"], 0))) {
    if ($.truthy(($.ne(L0["aheight"], L0["oldheight"])))) {
      { const $t117 = (await $.v(C, "ControlCount"));
        L0["j"] = 1;
        let $t118 = true;
        for (;;) {
          if (!$t118) { L0["j"] = $.succ(L0["j"], 1); }
          $t118 = false;
          if (!($.ord(L0["j"]) <= $.ord($t117))) break;
          if ($.truthy((await $.call(C, "GetBooleanProperty", [(await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "FixBottomPosition"])))) {
            await $.mset((await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "Top", (await $.call(C, "Max_Int", [0, $.sub($.add((await $.mv((await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "Top")), (await $.v(C, "Height"))), L0["oldheight"])])));
          }
          if ($.truthy((await $.call(C, "GetBooleanProperty", [(await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "StretchHeightWithBand"])))) {
            await $.mset((await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "Height", (await $.call(C, "Max_Int", [0, $.sub($.add((await $.mv((await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "Height")), (await $.v(C, "Height"))), L0["oldheight"])])));
          }
          await $.tick();
        }
      }
    }
  }
  await $.set(C, "InSetBounds", false);
  return L0.result;
}, {"params": ["ALeft", "ATop", "AWidth", "AHeight"], "kind": "procedure", "ptypes": ["integer", "integer", "integer", "integer"]});
  U.method("TQRPBand", "BandBeforePrint", async function BandBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printband": $.asRef(p1), result: undefined, "x": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "DisabledControls")), null))) {
    { const $t119 = (await $.mv((await $.v(C, "DisabledControls")), "Count"));
      L0["x"] = 1;
      let $t120 = true;
      for (;;) {
        if (!$t120) { L0["x"] = $.succ(L0["x"], 1); }
        $t120 = false;
        if (!($.ord(L0["x"]) <= $.ord($t119))) break;
        await $.stmt((await $.call(C, "SetBooleanProperty", [(await $.idx((await $.v(C, "DisabledControls")), [$.sub(L0["x"], 1)])), "Enabled", true])));
        await $.tick();
      }
    }
    await $.mcall((await $.v(C, "DisabledControls")), "Free", []);
    await $.set(C, "DisabledControls", null);
  }
  await L0["printband"].set((await $.call(C, "EvalBoolExpression", [(await $.v(C, "Expression")), (await $.call(C, "TQuickRep", [(await $.v(C, "ParentReport"))]))])));
  if ($.truthy((await $.and_(($.not((await L0["printband"].get()))), async () => ((await $.v(C, "AlwaysUseSpace"))))))) {
    await $.set(C, "DisabledControls", (await $.mv((await $.v(C, "TList")), "Create")));
    { const $t121 = (await $.mv(L0["sender"], "ControlCount"));
      L0["x"] = 1;
      let $t122 = true;
      for (;;) {
        if (!$t122) { L0["x"] = $.succ(L0["x"], 1); }
        $t122 = false;
        if (!($.ord(L0["x"]) <= $.ord($t121))) break;
        if ($.truthy((await $.call(C, "GetBooleanProperty", [(await $.idx((await $.mv(L0["sender"], "Controls")), [$.sub(L0["x"], 1)])), "Enabled"])))) {
          await $.stmt((await $.call(C, "SetBooleanProperty", [(await $.idx((await $.mv(L0["sender"], "Controls")), [$.sub(L0["x"], 1)])), "Enabled", false])));
          await $.stmt((await $.mcall((await $.v(C, "DisabledControls")), "Add", [(await $.idx((await $.mv(L0["sender"], "Controls")), [$.sub(L0["x"], 1)]))])));
        }
        await $.tick();
      }
    }
    await L0["printband"].set(true);
  }
  if ($.truthy($.not((await L0["printband"].get())))) {
    return L0.result;
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FOldBeforePrint"))])))) {
    await $.stmt((await $.call(C, "BeforePrint", [Self, (await L0["printband"].get())])));
  }
  return L0.result;
}, {"params": ["Sender", "PrintBand"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TQRPBand", "Create", async function Create() { return $.notPorted("TQRPBand.Create", "bad assignment target 'inherited'"); }, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"], "error": "bad assignment target 'inherited'", "src": "constructor TQRPBand.Create(AOwner : TComponent);\nbegin\n  Inherited Create(AOwner);\n  Inherited BeforePrint:=BandBeforePrint;\n  DisabledControls:=NIL;\nend;"});
  U.method("TQRPBand", "Destroy", async function Destroy(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.v(C, "DisabledControls")), "Free", []);
  await $.inherited(Self, "TQRPBand", "Destroy", null, arguments);
  return L0.result;
}, {"params": [], "kind": "destructor", "ptypes": []});
  U.method("TQRPChildBand", "Create", async function Create() { return $.notPorted("TQRPChildBand.Create", "bad assignment target 'inherited'"); }, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"], "error": "bad assignment target 'inherited'", "src": "constructor TQRPChildBand.Create(AOwner: TComponent);\nbegin\n  Inherited Create(AOwner);\n  Inherited BeforePrint:=BandBeforePrint;\n  LastPage:=0;\nend;"});
  U.method("TQRPChildBand", "BandBeforePrint", async function BandBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printband": $.asRef(p1), result: undefined, "crows": 0};
  await $.fixArgs(L0, ["sender"]);
  await L0["printband"].set((await $.call(C, "EvalBoolExpression", [(await $.v(C, "Expression")), (await $.call(C, "TQuickRep", [(await $.v(C, "ParentReport"))]))])));
  if ($.truthy($.not((await L0["printband"].get())))) {
    return L0.result;
  }
  if ($.truthy($.ne((await $.v(C, "LastPage")), (await $.mv((await $.call(C, "TQuickrep", [(await $.v(C, "Parent"))])), "Pagenumber"))))) {
    await $.set(C, "PagePrints", 1);
    await $.set(C, "LastPage", (await $.mv((await $.call(C, "TQuickrep", [(await $.v(C, "Parent"))])), "Pagenumber")));
  } else {
    await $.set(C, "PagePrints", $.add((await $.v(C, "PagePrints")), 1));
  }
  if ($.truthy((await $.and_(($.eq((await $.v(C, "Name")), "RowSpace")), async () => ($.ne((await $.v(C, "ParentBand")), null)))))) {
    {
      const $t123 = (await $.call(C, "TQRPQuickrep", [(await $.v(C, "Parent"))]));
      await $.wset([$t123], "CRows", (await $.wcall([$t123], "Round", [$.fdiv(($.add($.sub($.sub((await $.mv((await $.wv([$t123], "Page", C, false)), "Length")), (await $.mv((await $.wv([$t123], "Page", C, false)), "TopMargin"))), (await $.mv((await $.wv([$t123], "Page", C, false)), "BottomMargin"))), (await $.mv((await $.wv([$t123], "Size", C, false)), "Height")))), ($.add((await $.mv((await $.wv([$t123], "Size", C, false)), "Height")), (await $.mv((await $.mv((await $.wv([$t123], "ParentBand", C, false)), "Size")), "Height")))))], C)), { get: async () => L0["crows"], set: async (v) => { L0["crows"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t123], "LastPage", C, false)), 1))) {
        await $.wset([$t123], "PrintBand", $.ne(($.mod(($.add((await $.wv([$t123], "PagePrints", C, false)), ($.sub((await $.mv((await $.wv([$t123], "LabelSettings", C, false)), "FirstLabel")), 1)))), (await $.wv([$t123], "CRows", { get: async () => L0["crows"], set: async (v) => { L0["crows"] = v; }, local: true }, false)))), 0), { get: async () => await L0["printband"].get(), set: async (v) => { await L0["printband"].set(v); }, local: true });
      } else {
        await $.wset([$t123], "PrintBand", $.ne(($.mod((await $.wv([$t123], "PagePrints", C, false)), (await $.wv([$t123], "CRows", { get: async () => L0["crows"], set: async (v) => { L0["crows"] = v; }, local: true }, false)))), 0), { get: async () => await L0["printband"].get(), set: async (v) => { await L0["printband"].set(v); }, local: true });
      }
    }
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FOldBeforePrint"))])))) {
    await $.stmt((await $.call(C, "BeforePrint", [Self, (await L0["printband"].get())])));
  }
  return L0.result;
}, {"params": ["Sender", "PrintBand"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TQRPChildBand", "SetBounds", async function SetBounds(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"aleft": $.copyArg(p0), "atop": $.copyArg(p1), "awidth": $.copyArg(p2), "aheight": $.copyArg(p3), result: undefined, "j": 0, "oldheight": 0};
  await $.fixArgs(L0, ["aleft", "atop", "awidth", "aheight"]);
  if ($.truthy($.not((await $.v(C, "InSetBounds"))))) {
    L0["oldheight"] = (await $.v(C, "Height"));
  } else {
    L0["oldheight"] = (-(1));
  }
  await $.set(C, "InSetBounds", true);
  await $.inherited(Self, "TQRPChildBand", "SetBounds", [L0["aleft"], L0["atop"], L0["awidth"], L0["aheight"]], arguments);
  if ($.truthy($.ge(L0["oldheight"], 0))) {
    if ($.truthy(($.ne((await $.v(C, "Height")), L0["oldheight"])))) {
      { const $t124 = (await $.v(C, "ControlCount"));
        L0["j"] = 1;
        let $t125 = true;
        for (;;) {
          if (!$t125) { L0["j"] = $.succ(L0["j"], 1); }
          $t125 = false;
          if (!($.ord(L0["j"]) <= $.ord($t124))) break;
          if ($.truthy((await $.call(C, "GetBooleanProperty", [(await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "FixBottomPosition"])))) {
            await $.mset((await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "Top", (await $.call(C, "Max_Int", [0, $.sub($.add((await $.mv((await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "Top")), (await $.v(C, "Height"))), L0["oldheight"])])));
          }
          if ($.truthy((await $.call(C, "GetBooleanProperty", [(await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "StretchHeightWithBand"])))) {
            await $.mset((await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "Height", (await $.call(C, "Max_Int", [0, $.sub($.add((await $.mv((await $.idx((await $.v(C, "Controls")), [$.sub(L0["j"], 1)])), "Height")), (await $.v(C, "Height"))), L0["oldheight"])])));
          }
          await $.tick();
        }
      }
    }
  }
  await $.set(C, "InSetBounds", false);
  return L0.result;
}, {"params": ["ALeft", "ATop", "AWidth", "AHeight"], "kind": "procedure", "ptypes": ["integer", "integer", "integer", "integer"]});
  U.method("TQRAbstractGridReport", "Create", async function Create(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["aowner"]);
  await $.inherited(Self, "TQRAbstractGridReport", "Create", [L0["aowner"]], arguments);
  await $.set(C, "PrintGridLines", true);
  await $.set(C, "FSelectedRecordsOnly", false);
  return L0.result;
}, {"params": ["AOwner"], "kind": "constructor", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateGroupClass", async function CreateGroupClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aowner"]);
  L0["result"] = (await $.mcall((await $.v(C, "TQRGroup")), "Create", [L0["aowner"]]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateSubdetailClass", async function CreateSubdetailClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aowner"]);
  L0["result"] = (await $.mcall((await $.v(C, "TQRSubdetail")), "Create", [L0["aowner"]]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateBandClass", async function CreateBandClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aowner"]);
  L0["result"] = (await $.mcall((await $.v(C, "TQRPBand")), "Create", [L0["aowner"]]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateReportClass", async function CreateReportClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aowner"]);
  L0["result"] = (await $.mcall((await $.v(C, "TQuickRep")), "Create", [L0["aowner"]]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateSysDataClass", async function CreateSysDataClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aowner"]);
  L0["result"] = (await $.mcall((await $.v(C, "TQRSysData")), "Create", [L0["aowner"]]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateLabelClass", async function CreateLabelClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aowner"]);
  L0["result"] = (await $.mcall((await $.v(C, "TQRPLabel")), "Create", [L0["aowner"]]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateDBTextClass", async function CreateDBTextClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aowner"]);
  L0["result"] = (await $.mcall((await $.v(C, "TQRPDBText")), "Create", [L0["aowner"]]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateShapeClass", async function CreateShapeClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aowner"]);
  L0["result"] = (await $.mcall((await $.v(C, "TQRPShape")), "Create", [L0["aowner"]]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateExprClass", async function CreateExprClass(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aowner": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aowner"]);
  L0["result"] = (await $.mcall((await $.v(C, "TQRPExpr")), "Create", [L0["aowner"]]));
  return L0.result;
}, {"params": ["AOwner"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateBand", async function CreateBand(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"quickrep": $.copyArg(p0), "bandtype": $.copyArg(p1), "height": $.copyArg(p2), result: null};
  await $.fixArgs(L0, ["quickrep", "bandtype", "height"]);
  L0["result"] = (await $.call(C, "CreateBandClass", [(await $.mv(L0["quickrep"], "Owner"))]));
  await $.mset(L0["result"], "Parent", L0["quickrep"]);
  await $.mset(L0["result"], "BandType", L0["bandtype"]);
  await $.mset(L0["result"], "Height", L0["height"]);
  return L0.result;
}, {"params": ["Quickrep", "BandType", "Height"], "kind": "function", "ptypes": ["TQuickrep", "TQRBandType", "Integer"]});
  U.method("TQRAbstractGridReport", "CreateSubdetail", async function CreateSubdetail(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"quickrep": $.copyArg(p0), "height": $.copyArg(p1), result: null};
  await $.fixArgs(L0, ["quickrep", "height"]);
  L0["result"] = (await $.call(C, "CreateSubdetailClass", [(await $.mv(L0["quickrep"], "Owner"))]));
  await $.mset(L0["result"], "Parent", L0["quickrep"]);
  await $.mset(L0["result"], "Height", L0["height"]);
  return L0.result;
}, {"params": ["Quickrep", "Height"], "kind": "function", "ptypes": ["TQuickrep", "Integer"]});
  U.method("TQRAbstractGridReport", "CreateGroup", async function CreateGroup(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"quickrep": $.copyArg(p0), "height": $.copyArg(p1), result: null};
  await $.fixArgs(L0, ["quickrep", "height"]);
  L0["result"] = (await $.call(C, "CreateGroupClass", [(await $.mv(L0["quickrep"], "Owner"))]));
  await $.mset(L0["result"], "Parent", L0["quickrep"]);
  await $.mset(L0["result"], "Height", L0["height"]);
  return L0.result;
}, {"params": ["Quickrep", "Height"], "kind": "function", "ptypes": ["TQuickrep", "Integer"]});
  U.method("TQRAbstractGridReport", "CreateReport", async function CreateReport(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aparent": $.copyArg(p0), result: null};
  await $.fixArgs(L0, ["aparent"]);
  L0["result"] = (await $.call(C, "CreateReportClass", [(await $.mv(L0["aparent"], "Owner"))]));
  await $.mset(L0["result"], "Parent", (await $.call(C, "TWinControl", [L0["aparent"]])));
  return L0.result;
}, {"params": ["AParent"], "kind": "function", "ptypes": ["TComponent"]});
  U.method("TQRAbstractGridReport", "CreateSysdata", async function CreateSysdata(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"parentband": $.copyArg(p0), "left": $.copyArg(p1), "top": $.copyArg(p2), "datatype": $.copyArg(p3), result: null};
  await $.fixArgs(L0, ["parentband", "left", "top", "datatype"]);
  L0["result"] = (await $.call(C, "CreateSysDataClass", [(await $.mv(L0["parentband"], "Owner"))]));
  await $.mset(L0["result"], "Parent", L0["parentband"]);
  await $.mset(L0["result"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv(L0["parentband"], "Owner"))])), "QRSysData", false])));
  await $.mset(L0["result"], "Top", L0["top"]);
  await $.mset(L0["result"], "Left", L0["left"]);
  await $.mset(L0["result"], "Data", (await $.v(C, "qrsDate")));
  return L0.result;
}, {"params": ["ParentBand", "Left", "Top", "Datatype"], "kind": "function", "ptypes": ["TCustomPanel", "Integer", "Integer", "TQRSysDataType"]});
  U.method("TQRAbstractGridReport", "CreateLabel", async function CreateLabel(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"parentband": $.copyArg(p0), "left": $.copyArg(p1), "top": $.copyArg(p2), result: null};
  await $.fixArgs(L0, ["parentband", "left", "top"]);
  L0["result"] = (await $.call(C, "CreateLabelClass", [(await $.mv(L0["parentband"], "Owner"))]));
  await $.mset(L0["result"], "Parent", L0["parentband"]);
  await $.mset(L0["result"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv(L0["parentband"], "Owner"))])), "QRLabel", false])));
  await $.mset(L0["result"], "Top", L0["top"]);
  await $.mset(L0["result"], "Left", L0["left"]);
  return L0.result;
}, {"params": ["ParentBand", "Left", "Top"], "kind": "function", "ptypes": ["TCustomPanel", "Integer", "Integer"]});
  U.method("TQRAbstractGridReport", "CreateExpr", async function CreateExpr(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"parentband": $.copyArg(p0), "left": $.copyArg(p1), "top": $.copyArg(p2), result: null};
  await $.fixArgs(L0, ["parentband", "left", "top"]);
  L0["result"] = (await $.call(C, "CreateExprClass", [(await $.mv((await $.v(C, "QuickRep")), "Owner"))]));
  await $.mset(L0["result"], "Parent", L0["parentband"]);
  await $.mset(L0["result"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv(L0["parentband"], "Owner"))])), "QRExpr", false])));
  await $.mset(L0["result"], "Top", L0["top"]);
  await $.mset(L0["result"], "Left", L0["left"]);
  return L0.result;
}, {"params": ["ParentBand", "Left", "Top"], "kind": "function", "ptypes": ["TCustomPanel", "Integer", "Integer"]});
  U.method("TQRAbstractGridReport", "CreateDBText", async function CreateDBText(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"parentband": $.copyArg(p0), "left": $.copyArg(p1), "top": $.copyArg(p2), result: null};
  await $.fixArgs(L0, ["parentband", "left", "top"]);
  L0["result"] = (await $.call(C, "CreateDBTextClass", [(await $.mv(L0["parentband"], "Owner"))]));
  await $.mset(L0["result"], "Parent", L0["parentband"]);
  await $.mset(L0["result"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv(L0["parentband"], "Owner"))])), "QRDBText", false])));
  await $.mset(L0["result"], "Top", L0["top"]);
  await $.mset(L0["result"], "Left", L0["left"]);
  return L0.result;
}, {"params": ["ParentBand", "Left", "Top"], "kind": "function", "ptypes": ["TCustomPanel", "Integer", "Integer"]});
  U.method("TQRAbstractGridReport", "CreateShape", async function CreateShape(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"parentband": $.copyArg(p0), "shapetype": $.copyArg(p1), "left": $.copyArg(p2), "top": $.copyArg(p3), "width": $.copyArg(p4), "height": $.copyArg(p5), "color": $.copyArg(p6), result: null, "s": null};
  await $.fixArgs(L0, ["parentband", "shapetype", "left", "top", "width", "height", "color"]);
  L0["s"] = (await $.call(C, "CreateShapeClass", [(await $.mv(L0["parentband"], "Owner"))]));
  await $.mset(L0["s"], "Parent", L0["parentband"]);
  await $.mset(L0["s"], "Shape", L0["shapetype"]);
  await $.mset(L0["s"], "Top", L0["top"]);
  await $.mset(L0["s"], "Left", L0["left"]);
  await $.mset(L0["s"], "Width", L0["width"]);
  await $.mset(L0["s"], "Height", L0["height"]);
  await $.mset(L0["s"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv(L0["parentband"], "Owner"))])), "Shape", false])));
  await $.mset((await $.mv(L0["s"], "Pen")), "Color", L0["color"]);
  L0["result"] = L0["s"];
  return L0.result;
}, {"params": ["ParentBand", "ShapeType", "Left", "Top", "Width", "Height", "Color"], "kind": "function", "ptypes": ["TCustomPanel", "TQRShapeType", "Integer", "Integer", "Integer", "Integer", "TColor"]});
  U.method("TQRAbstractGridReport", "PrintReport", async function PrintReport(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"defaultreport": $.copyArg(p0), result: undefined, "aform": null, "areport": null, "qr": null, "tl": null, "x": 0, "docancel": false};
  await $.fixArgs(L0, ["defaultreport"]);
  if ($.truthy($.eq(L0["defaultreport"], null))) {
    L0["aform"] = (await $.mcall((await $.v(C, "TForm")), "Create", [(await $.v(C, "Owner"))]));
    L0["areport"] = (await $.call(C, "CreateReport", [L0["aform"]]));
    await $.mset(L0["areport"], "Name", "QuickReport");
    L0["tl"] = null;
  } else {
    L0["aform"] = (await $.call(C, "TForm", [(await $.mv(L0["defaultreport"], "Owner"))]));
    L0["areport"] = L0["defaultreport"];
    L0["tl"] = (await $.mv((await $.v(C, "TList")), "Create"));
    { const $t126 = $.sub((await $.mv(L0["aform"], "ComponentCount")), 1);
      L0["x"] = 0;
      let $t127 = true;
      for (;;) {
        if (!$t127) { L0["x"] = $.succ(L0["x"], 1); }
        $t127 = false;
        if (!($.ord(L0["x"]) <= $.ord($t126))) break;
        await $.stmt((await $.mcall(L0["tl"], "Add", [(await $.idx((await $.mv(L0["aform"], "Components")), [L0["x"]]))])));
        await $.tick();
      }
    }
  }
  L0["qr"] = (await $.v(C, "QuickRep"));
  await $.set(C, "QuickRep", L0["areport"]);
  await $.stmt($.call(C, "CreateReportFromGrid", []));
  L0["docancel"] = false;
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FAfterReportFormCreated"))])))) {
    await $.stmt((await $.call(C, "AfterReportFormCreated", [L0["aform"], L0["areport"], L0["docancel"]])));
  }
  if ($.truthy($.not(L0["docancel"]))) {
    await $.mcall(L0["areport"], "Print", []);
  }
  if ($.truthy($.eq(L0["defaultreport"], null))) {
    await $.mcall(L0["aform"], "Free", []);
  } else {
    { const $t128 = 0;
      L0["x"] = $.sub((await $.mv(L0["aform"], "ComponentCount")), 1);
      let $t129 = true;
      for (;;) {
        if (!$t129) { L0["x"] = $.succ(L0["x"], -1); }
        $t129 = false;
        if (!($.ord(L0["x"]) >= $.ord($t128))) break;
        if ($.truthy($.eq((await $.mcall(L0["tl"], "IndexOf", [(await $.idx((await $.mv(L0["aform"], "Components")), [L0["x"]]))])), (-(1))))) {
          await $.mcall((await $.idx((await $.mv(L0["aform"], "Components")), [L0["x"]])), "Free", []);
        }
        await $.tick();
      }
    }
    await $.mcall(L0["tl"], "Free", []);
  }
  await $.set(C, "QuickRep", L0["qr"]);
  return L0.result;
}, {"params": ["DefaultReport"], "kind": "procedure", "ptypes": ["TQuickRep"]});
  U.method("TQRAbstractGridReport", "_PreviewReport", async function _PreviewReport(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"defaultreport": $.copyArg(p0), "modal": $.copyArg(p1), result: undefined, "aform": null, "areport": null, "qr": null, "tl": null, "x": 0, "docancel": false};
  await $.fixArgs(L0, ["defaultreport", "modal"]);
  if ($.truthy($.eq(L0["defaultreport"], null))) {
    L0["aform"] = (await $.mcall((await $.v(C, "TForm")), "Create", [(await $.v(C, "Owner"))]));
    L0["areport"] = (await $.call(C, "CreateReport", [L0["aform"]]));
    await $.mset(L0["areport"], "Name", "QuickReport");
    L0["tl"] = null;
  } else {
    L0["aform"] = (await $.call(C, "TForm", [(await $.mv(L0["defaultreport"], "Owner"))]));
    L0["areport"] = L0["defaultreport"];
    L0["tl"] = (await $.mv((await $.v(C, "TList")), "Create"));
    { const $t130 = $.sub((await $.mv(L0["aform"], "ComponentCount")), 1);
      L0["x"] = 0;
      let $t131 = true;
      for (;;) {
        if (!$t131) { L0["x"] = $.succ(L0["x"], 1); }
        $t131 = false;
        if (!($.ord(L0["x"]) <= $.ord($t130))) break;
        await $.stmt((await $.mcall(L0["tl"], "Add", [(await $.idx((await $.mv(L0["aform"], "Components")), [L0["x"]]))])));
        await $.tick();
      }
    }
  }
  L0["qr"] = (await $.v(C, "QuickRep"));
  await $.set(C, "QuickRep", L0["areport"]);
  await $.stmt($.call(C, "CreateReportFromGrid", []));
  L0["docancel"] = false;
  if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FAfterReportFormCreated"))])))) {
    await $.stmt((await $.call(C, "AfterReportFormCreated", [L0["aform"], L0["areport"], L0["docancel"]])));
  }
  if ($.truthy($.not(L0["docancel"]))) {
    await $.mcall(L0["areport"], "Preview", []);
  }
  if ($.truthy($.eq(L0["defaultreport"], null))) {
    await $.mcall(L0["aform"], "Free", []);
  } else {
    { const $t132 = 0;
      L0["x"] = $.sub((await $.mv(L0["aform"], "ComponentCount")), 1);
      let $t133 = true;
      for (;;) {
        if (!$t133) { L0["x"] = $.succ(L0["x"], -1); }
        $t133 = false;
        if (!($.ord(L0["x"]) >= $.ord($t132))) break;
        if ($.truthy($.eq((await $.mcall(L0["tl"], "IndexOf", [(await $.idx((await $.mv(L0["aform"], "Components")), [L0["x"]]))])), (-(1))))) {
          await $.mcall((await $.idx((await $.mv(L0["aform"], "Components")), [L0["x"]])), "Free", []);
        }
        await $.tick();
      }
    }
    await $.mcall(L0["tl"], "Free", []);
  }
  await $.set(C, "QuickRep", L0["qr"]);
  return L0.result;
}, {"params": ["DefaultReport", "Modal"], "kind": "procedure", "ptypes": ["TQuickRep", "Boolean"]});
  U.method("TQRAbstractGridReport", "PreviewReport", async function PreviewReport(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"defaultreport": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["defaultreport"]);
  await $.stmt((await $.call(C, "_PreviewReport", [L0["defaultreport"], false])));
  return L0.result;
}, {"params": ["DefaultReport"], "kind": "procedure", "ptypes": ["TQuickRep"]});
  U.method("TQRGridReport", "DetailBandBeforePrint", async function DetailBandBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printband": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["printband"].set((await $.mv((await $.mv((await $.v(C, "FDBGrid")), "SelectedRows")), "CurrentRowSelected")));
  return L0.result;
}, {"params": ["Sender", "PrintBand"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TQRAbstractGridReport", "CreateReportFromGrid", async function CreateReportFromGrid(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = true;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQRAbstractGridReport", "CreateTitle", async function CreateTitle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "db": null, "lbl": null};
  if ($.truthy((await $.and_(($.eq((await $.v(C, "FReportTitle")), "")), async () => ($.not((await $.v(C, "FReportTitleDate")))))))) {
    return L0.result;
  }
  L0["db"] = (await $.call(C, "CreateBand", [(await $.v(C, "QuickRep")), (await $.v(C, "rbTitle")), 50]));
  await $.mset(L0["db"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv((await $.v(C, "QuickRep")), "Owner"))])), "Title", true])));
  if ($.truthy($.ne((await $.v(C, "ReportTitle")), ""))) {
    L0["lbl"] = (await $.call(C, "CreateLabel", [L0["db"], 0, 0]));
    await $.mset(L0["lbl"], "Caption", (await $.v(C, "ReportTitle")));
    await $.mset((await $.mv(L0["lbl"], "Font")), "Size", 20);
  }
  if ($.truthy((await $.v(C, "FReportTitleDate")))) {
    await $.stmt((await $.call(C, "CreateSysData", [L0["db"], $.sub((await $.mv(L0["db"], "Width")), 80), 0, (await $.v(C, "qrsDate"))])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ReplaceUnderscore", async function ReplaceUnderscore(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: '', "i": 0};
  await $.fixArgs(L0, ["s"]);
  { const $t134 = (await $.call(C, "Length", [L0["s"]]));
    L0["i"] = 1;
    let $t135 = true;
    for (;;) {
      if (!$t135) { L0["i"] = $.succ(L0["i"], 1); }
      $t135 = false;
      if (!($.ord(L0["i"]) <= $.ord($t134))) break;
      if ($.truthy($.eq((await $.idx(L0["s"], [L0["i"]])), "_"))) {
        { const $t136 = await $.iset(L0["s"], [L0["i"]], " "); if ($t136 !== undefined) { L0["s"] = $t136; } }
      }
      await $.tick();
    }
  }
  L0["result"] = L0["s"];
  return L0.result;
}, {"params": ["S"], "kind": "function", "ptypes": ["String"]});
  U.func("Min", async function Min(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"i1": $.copyArg(p0), "i2": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["i1", "i2"]);
  if ($.truthy($.lt(L0["i1"], L0["i2"]))) {
    L0["result"] = L0["i1"];
  } else {
    L0["result"] = L0["i2"];
  }
  return L0.result;
}, {"params": ["I1", "I2"], "kind": "function", "ptypes": ["Integer", "Integer"]});
  U.func("Max", async function Max(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"i1": $.copyArg(p0), "i2": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["i1", "i2"]);
  if ($.truthy($.gt(L0["i1"], L0["i2"]))) {
    L0["result"] = L0["i1"];
  } else {
    L0["result"] = L0["i2"];
  }
  return L0.result;
}, {"params": ["I1", "I2"], "kind": "function", "ptypes": ["Integer", "Integer"]});
  U.method("TQRGridReport", "CreateReportFromGrid", async function CreateReportFromGrid(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "db": null, "tb": null, "gb": null, "dbs": null, "shp": null, "dx": 0, "dd": 0, "y": 0, "x": 0, "dset": null, "nextcolumn": 0, "pagefirstcolumn": 0, "colwidth": 0, "bandcounter": 0};
  L0["createdetailbanddatafield"] = $.fn(async function CreateDetailbandDatafield() {
  const L1 = {result: undefined, "qrp": null};
  if ($.truthy((await $.v(C, "FUseExprForDatafields")))) {
    L1["qrp"] = (await $.call(C, "CreateExpr", [L0["db"], $.add(L0["dx"], 3), 3]));
    await $.mset((await $.call(C, "TQRExpr", [L1["qrp"]])), "Expression", (await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "FieldName")));
    await $.stmt((await $.mcall((await $.mv((await $.call(C, "TQRExpr", [L1["qrp"]])), "Font")), "Assign", [(await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Font"))])));
  } else {
    L1["qrp"] = (await $.call(C, "CreateDBText", [L0["db"], $.add(L0["dx"], 3), 3]));
    await $.mset((await $.call(C, "TQRDBText", [L1["qrp"]])), "Dataset", L0["dset"]);
    await $.mset((await $.call(C, "TQRDBText", [L1["qrp"]])), "Datafield", (await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "FieldName")));
    await $.stmt((await $.mcall((await $.mv((await $.call(C, "TQRDBText", [L1["qrp"]])), "Font")), "Assign", [(await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Font"))])));
  }
  L0["dx"] = $.add(L0["dx"], (await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Width")));
  await $.mset(L1["qrp"], "Width", (await $.call(C, "Max_Int", [0, $.sub((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Width")), 5)])));
  await $.stmt((await $.call(C, "SetBooleanProperty", [L1["qrp"], "AutoSize", false])));
  await $.stmt((await $.call(C, "SetBooleanProperty", [L1["qrp"], "WordWrap", false])));
  await $.stmt((await $.call(C, "SetIntegerProperty", [L1["qrp"], "Alignment", (await $.call(C, "Integer", [(await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Alignment"))]))])));
  await $.stmt((await $.call(C, "SetIntegerProperty", [L1["qrp"], "Color", (await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Color"))])));
  await $.stmt((await $.call(C, "SetBooleanProperty", [L1["qrp"], "Transparent", true])));
  await $.stmt((await $.call(C, "SetBooleanProperty", [L1["qrp"], "AutoStretch", (await $.v(C, "FAutoStretchMemos"))])));
  return L1.result;
});
  L0["createhorizontalgridline"] = $.fn(async function CreateHorizontalGridline() {
  const L1 = {result: undefined, "x": 0};
  L0["dx"] = 0;
  { const $t137 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid")), "Columns")), "Count")), 1);
    L1["x"] = L0["nextcolumn"];
    let $t138 = true;
    for (;;) {
      if (!$t138) { L1["x"] = $.succ(L1["x"], 1); }
      $t138 = false;
      if (!($.ord(L1["x"]) <= $.ord($t137))) break;
      if ($.truthy($.gt($.add($.add($.add(L0["dx"], 3), (await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L1["x"]])), "Width"))), 1), (await $.mv(L0["db"], "Width"))))) {
        break;
      }
      L0["dx"] = $.add(L0["dx"], (await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L1["x"]])), "Width")));
      await $.tick();
    }
  }
  L0["shp"] = (await $.call(C, "CreateShape", [L0["db"], (await $.v(C, "qrsHorLine")), 0, $.sub((await $.mv(L0["db"], "Height")), 1), $.add(L0["dx"], 1), 1, (await $.v(C, "clGray"))]));
  await $.mcall(L0["shp"], "BringToFront", []);
  return L1.result;
});
  L0["createdetailband"] = $.fn(async function CreateDetailband() {
  const L1 = {result: undefined, "tmpband": null};
  if ($.truthy((await $.v(C, "SpanPagesHorizontally")))) {
    await $.mset((await $.v(C, "Quickrep")), "Dataset", null);
    L0["dbs"] = (await $.call(C, "CreateSubdetail", [(await $.v(C, "Quickrep")), (await $.mv((await $.call(C, "TQRPDBGrid", [(await $.v(C, "DBGrid"))])), "DefaultRowHeight"))]));
    await $.mset(L0["dbs"], "Dataset", L0["dset"]);
    if ($.truthy($.gt(L0["bandcounter"], 1))) {
      L1["tmpband"] = (await $.call(C, "CreateBand", [(await $.v(C, "QuickRep")), (await $.v(C, "rbGroupHeader")), 0]));
      await $.mset(L1["tmpband"], "ForceNewPage", true);
      if ($.truthy((await $.or_(($.ne((await $.v(C, "FReportTitle")), "")), async () => (await $.v(C, "FReportTitleDate")))))) {
        await $.mset(L1["tmpband"], "Height", 50);
      }
      await $.mset(L1["tmpband"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv((await $.v(C, "QuickRep")), "Owner"))])), "NewPageBand", true])));
      await $.mset(L0["dbs"], "HeaderBand", L1["tmpband"]);
    }
    L0["db"] = (await $.call(C, "TQRBand", [L0["dbs"]]));
    await $.mset(L0["db"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv((await $.v(C, "QuickRep")), "Owner"))])), "SubdetailBand", true])));
  } else {
    await $.mset((await $.v(C, "QuickRep")), "Dataset", L0["dset"]);
    L0["db"] = (await $.call(C, "CreateBand", [(await $.v(C, "QuickRep")), (await $.v(C, "rbDetail")), (await $.mv((await $.call(C, "TQRPDBGrid", [(await $.v(C, "DBGrid"))])), "DefaultRowHeight"))]));
    await $.mset(L0["db"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv((await $.v(C, "QuickRep")), "Owner"))])), "DetailBand", true])));
  }
  if ($.truthy((await $.v(C, "FSelectedRecordsOnly")))) {
    await $.mcall((await $.mv((await $.v(C, "FDBGrid")), "SelectedRows")), "Refresh", []);
    await $.mset(L0["db"], "BeforePrint", (await $.v(C, "DetailBandBeforePrint")));
  }
  if ($.truthy((await $.v(C, "PrintGridLines")))) {
    await $.mset((await $.mv(L0["db"], "Frame")), "Color", (await $.v(C, "clGray")));
    await $.mset((await $.mv(L0["db"], "Frame")), "Width", 1);
    if ($.truthy($.in_((await $.v(C, "dgColLines")), (await $.mv((await $.v(C, "DBGrid")), "Options"))))) {
      await $.mset((await $.mv(L0["db"], "Frame")), "DrawLeft", true);
    }
    if ($.truthy($.in_((await $.v(C, "dgRowLines")), (await $.mv((await $.v(C, "DBGrid")), "Options"))))) {
      await $.stmt($.callv(L0["createhorizontalgridline"], []));
    }
  }
  return L1.result;
});
  L0["createheaderlabel"] = $.fn(async function CreateHeaderLabel() {
  const L1 = {result: undefined, "lbl": null};
  L1["lbl"] = (await $.call(C, "CreateLabel", [L0["tb"], $.add(L0["dx"], 3), 3]));
  await $.stmt((await $.mcall((await $.mv(L1["lbl"], "Font")), "Assign", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Title")), "Font"))])));
  await $.mset(L1["lbl"], "Caption", (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Title")), "Caption")));
  await $.mset(L1["lbl"], "Color", (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Title")), "Color")));
  await $.mset(L1["lbl"], "Alignment", (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Title")), "Alignment")));
  await $.mset(L1["lbl"], "AutoSize", false);
  await $.mset(L1["lbl"], "WordWrap", false);
  await $.mset(L1["lbl"], "Width", (await $.call(C, "Max_Int", [0, L0["colwidth"]])));
  await $.mset(L1["lbl"], "Transparent", true);
  return L1.result;
});
  L0["result"] = false;
  L0["nextcolumn"] = 0;
  if ($.truthy((await $.or_((await $.or_((await $.or_(($.eq((await $.v(C, "QuickRep")), null)), async () => ($.eq((await $.v(C, "DBGrid")), null)))), async () => ($.eq((await $.mv((await $.v(C, "DBGrid")), "Datasource")), null)))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DBGrid")), "Datasource")), "Dataset")), null)))))) {
    return L0.result;
  }
  L0["dset"] = (await $.mv((await $.mv((await $.v(C, "DBGrid")), "Datasource")), "Dataset"));
  await $.stmt($.call(C, "CreateTitle", []));
  L0["bandcounter"] = 0;
  do {
    await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["bandcounter"], async ($t139) => { L0["bandcounter"] = $t139; })])));
    await $.stmt($.callv(L0["createdetailband"], []));
    L0["pagefirstcolumn"] = L0["nextcolumn"];
    L0["dx"] = 0;
    { const $t140 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid")), "Columns")), "Count")), 1);
      L0["x"] = L0["pagefirstcolumn"];
      let $t141 = true;
      for (;;) {
        if (!$t141) { L0["x"] = $.succ(L0["x"], 1); }
        $t141 = false;
        if (!($.ord(L0["x"]) <= $.ord($t140))) break;
        if ($.truthy($.gt($.add($.add($.add(L0["dx"], 3), (await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Width"))), 1), (await $.mv(L0["db"], "Width"))))) {
          break;
        }
        await $.stmt($.callv(L0["createdetailbanddatafield"], []));
        if ($.truthy((await $.and_(((await $.v(C, "PrintGridLines"))), async () => ($.in_((await $.v(C, "dgColLines")), (await $.mv((await $.v(C, "DBGrid")), "Options")))))))) {
          await $.stmt((await $.call(C, "CreateShape", [L0["db"], (await $.v(C, "qrsVertLine")), L0["dx"], 0, 1, (await $.mv(L0["db"], "Height")), (await $.v(C, "clGray"))])));
        }
        await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["nextcolumn"], async ($t142) => { L0["nextcolumn"] = $t142; })])));
        await $.tick();
      }
    }
    if ($.truthy($.in_((await $.v(C, "dgTitles")), (await $.mv((await $.v(C, "DBGrid")), "Options"))))) {
      if ($.truthy((await $.v(C, "SpanPagesHorizontally")))) {
        L0["gb"] = (await $.call(C, "CreateGroup", [(await $.v(C, "Quickrep")), (await $.idx((await $.mv((await $.call(C, "TQRPDBGrid", [(await $.v(C, "DBGrid"))])), "RowHeights")), [0]))]));
        await $.mset(L0["gb"], "Master", L0["db"]);
        L0["tb"] = (await $.call(C, "TQRBand", [L0["gb"]]));
      } else {
        L0["tb"] = (await $.call(C, "CreateBand", [(await $.v(C, "QuickRep")), (await $.v(C, "rbColumnHeader")), (await $.idx((await $.mv((await $.call(C, "TQRPDBGrid", [(await $.v(C, "DBGrid"))])), "RowHeights")), [0]))]));
      }
      await $.mset(L0["tb"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv((await $.v(C, "QuickRep")), "Owner"))])), "ColumnHeader", true])));
      L0["dx"] = 0;
      { const $t143 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid")), "Columns")), "Count")), 1);
        L0["x"] = L0["pagefirstcolumn"];
        let $t144 = true;
        for (;;) {
          if (!$t144) { L0["x"] = $.succ(L0["x"], 1); }
          $t144 = false;
          if (!($.ord(L0["x"]) <= $.ord($t143))) break;
          L0["colwidth"] = (await $.call(C, "Min", [(await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid")), "Columns")), [L0["x"]])), "Width")), $.sub((await $.mv(L0["tb"], "Width")), 4)]));
          if ($.truthy($.gt($.add($.add($.add(L0["dx"], 3), L0["colwidth"]), 1), (await $.mv(L0["tb"], "Width"))))) {
            break;
          }
          await $.stmt($.callv(L0["createheaderlabel"], []));
          L0["dx"] = $.add(L0["dx"], L0["colwidth"]);
          if ($.truthy((await $.and_(((await $.v(C, "PrintGridLines"))), async () => ($.in_((await $.v(C, "dgColLines")), (await $.mv((await $.v(C, "DBGrid")), "Options")))))))) {
            await $.stmt((await $.call(C, "CreateShape", [L0["tb"], (await $.v(C, "qrsVertLine")), L0["dx"], 0, 1, (await $.mv(L0["tb"], "Height")), (await $.v(C, "clGray"))])));
          }
          await $.tick();
        }
      }
      L0["shp"] = (await $.call(C, "CreateShape", [L0["tb"], (await $.v(C, "qrsRectangle")), 0, 0, $.add(L0["dx"], 1), (await $.mv(L0["tb"], "Height")), (await $.mv((await $.v(C, "DBGrid")), "FixedColor"))]));
      await $.mset((await $.mv(L0["shp"], "Brush")), "Color", (await $.mv((await $.v(C, "DBGrid")), "FixedColor")));
      await $.mcall(L0["shp"], "SendToBack", []);
      if ($.truthy((await $.v(C, "PrintGridLines")))) {
        await $.mset((await $.mv(L0["tb"], "Frame")), "Color", (await $.v(C, "clGray")));
        await $.mset((await $.mv(L0["tb"], "Frame")), "Width", 1);
        if ($.truthy($.in_((await $.v(C, "dgRowLines")), (await $.mv((await $.v(C, "DBGrid")), "Options"))))) {
          await $.stmt((await $.call(C, "CreateShape", [L0["tb"], (await $.v(C, "qrsHorLine")), 0, 0, $.add(L0["dx"], 1), 1, (await $.v(C, "clGray"))])));
          await $.stmt((await $.call(C, "CreateShape", [L0["tb"], (await $.v(C, "qrsHorLine")), 0, $.sub((await $.mv(L0["tb"], "Height")), 1), $.add(L0["dx"], 1), 1, (await $.v(C, "clGray"))])));
        }
        if ($.truthy($.in_((await $.v(C, "dgColLines")), (await $.mv((await $.v(C, "DBGrid")), "Options"))))) {
          await $.mset((await $.mv(L0["tb"], "Frame")), "DrawLeft", true);
        }
      }
    }
    await $.tick();
  } while (!$.truthy((await $.or_(($.eq((await $.v(C, "SpanPagesHorizontally")), false)), async () => ($.gt(L0["nextcolumn"], $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid")), "Columns")), "Count")), 1)))))));
  L0["result"] = true;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQRGridReport", "Notification", async function Notification(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acomponent": $.copyArg(p0), "operation": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["acomponent", "operation"]);
  await $.inherited(Self, "TQRGridReport", "Notification", [L0["acomponent"], L0["operation"]], arguments);
  if ($.truthy((await $.and_(($.eq(L0["operation"], (await $.v(C, "opRemove")))), async () => ($.eq(L0["acomponent"], (await $.v(C, "FQuickRep")))))))) {
    await $.set(C, "QuickRep", null);
  } else {
    if ($.truthy((await $.and_(($.eq(L0["operation"], (await $.v(C, "opRemove")))), async () => ($.eq(L0["acomponent"], (await $.v(C, "FDBGrid")))))))) {
      await $.set(C, "DBGrid", null);
    }
  }
  return L0.result;
}, {"params": ["AComponent", "Operation"], "kind": "procedure", "ptypes": ["TComponent", "TOperation"]});
  U.method("TQRStringgridReport", "DetailBandBeforePrint", async function DetailBandBeforePrint(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "printband": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["printband"].set(true);
  return L0.result;
}, {"params": ["Sender", "PrintBand"], "kind": "procedure", "ptypes": ["TQRCustomBand", "Boolean"]});
  U.method("TQRStringgridReport", "NeedData", async function NeedData(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "moredata": $.asRef(p1), result: undefined, "l": null, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t145 = (await $.mv((await $.v(C, "Stringgrid")), "ColCount"));
    L0["i"] = 0;
    let $t146 = true;
    for (;;) {
      if (!$t146) { L0["i"] = $.succ(L0["i"], 1); }
      $t146 = false;
      if (!($.ord(L0["i"]) <= $.ord($t145))) break;
      L0["l"] = (await $.call(C, "TQRPLabel", [(await $.mcall((await $.mv((await $.v(C, "QuickRep")), "Owner")), "FindComponent", [$.add($.add("Col", (await $.call(C, "IntToStr", [L0["i"]]))), "Label")]))]));
      if ($.truthy($.ne(L0["l"], null))) {
        await $.mset(L0["l"], "Caption", (await $.idx((await $.mv((await $.v(C, "Stringgrid")), "Cells")), [L0["i"], (await $.v(C, "CurrentRow"))])));
      }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await $.v(C, "CurrentRow")), async ($t147) => { await $.set(C, "CurrentRow", $t147); })])));
  await L0["moredata"].set($.lt((await $.v(C, "CurrentRow")), (await $.mv((await $.v(C, "Stringgrid")), "RowCount"))));
  if ($.truthy($.eq((await $.v(C, "CurrentRow")), (await $.mv((await $.v(C, "Stringgrid")), "RowCount"))))) {
    await $.set(C, "CurrentRow", (await $.mv((await $.v(C, "StringGrid")), "FixedRows")));
  }
  return L0.result;
}, {"params": ["Sender", "MoreData"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TQRStringgridReport", "CreateReportFromGrid", async function CreateReportFromGrid(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "db": null, "tb": null, "lbl": null, "shp": null, "dx": 0, "x": 0};
  L0["result"] = false;
  await $.set(C, "CurrentRow", (await $.mv((await $.v(C, "StringGrid")), "FixedRows")));
  if ($.truthy((await $.or_(($.eq((await $.v(C, "QuickRep")), null)), async () => ($.eq((await $.v(C, "StringGrid")), null)))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "QuickRep")), "OnNeedData", (await $.ref_(C, "NeedData")));
  if ($.truthy($.gt((await $.mv((await $.v(C, "StringGrid")), "FixedRows")), 0))) {
    L0["tb"] = (await $.call(C, "CreateBand", [(await $.v(C, "QuickRep")), (await $.v(C, "rbColumnHeader")), (await $.idx((await $.mv((await $.v(C, "StringGrid")), "RowHeights")), [0]))]));
    await $.mset(L0["tb"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv((await $.v(C, "QuickRep")), "Owner"))])), "ColumnHeader", true])));
    L0["dx"] = 0;
    { const $t148 = $.sub((await $.mv((await $.v(C, "StringGrid")), "ColCount")), 1);
      L0["x"] = 0;
      let $t149 = true;
      for (;;) {
        if (!$t149) { L0["x"] = $.succ(L0["x"], 1); }
        $t149 = false;
        if (!($.ord(L0["x"]) <= $.ord($t148))) break;
        L0["lbl"] = (await $.call(C, "CreateLabel", [L0["tb"], $.add(L0["dx"], 3), 3]));
        await $.stmt((await $.mcall((await $.mv(L0["lbl"], "Font")), "Assign", [(await $.mv((await $.v(C, "StringGrid")), "Font"))])));
        await $.mset(L0["lbl"], "Caption", (await $.idx((await $.mv((await $.v(C, "StringGrid")), "Cells")), [L0["x"], 0])));
        L0["dx"] = $.add(L0["dx"], (await $.idx((await $.mv((await $.v(C, "StringGrid")), "ColWidths")), [L0["x"]])));
        await $.mset(L0["lbl"], "AutoSize", false);
        await $.mset(L0["lbl"], "WordWrap", false);
        await $.mset(L0["lbl"], "Width", (await $.call(C, "Max_Int", [0, $.sub((await $.idx((await $.mv((await $.v(C, "StringGrid")), "ColWidths")), [L0["x"]])), 5)])));
        await $.mset(L0["lbl"], "Transparent", true);
        if ($.truthy((await $.and_((await $.v(C, "PrintGridLines")), async () => ($.in_((await $.v(C, "goVertLine")), (await $.mv((await $.v(C, "Stringgrid")), "Options")))))))) {
          await $.stmt((await $.call(C, "CreateShape", [L0["tb"], (await $.v(C, "qrsVertLine")), L0["dx"], 0, 1, (await $.mv(L0["tb"], "Height")), (await $.v(C, "clGray"))])));
        }
        await $.tick();
      }
    }
    L0["shp"] = (await $.call(C, "CreateShape", [L0["tb"], (await $.v(C, "qrsRectangle")), 0, 0, $.add(L0["dx"], 1), (await $.mv(L0["tb"], "Height")), (await $.mv((await $.v(C, "StringGrid")), "FixedColor"))]));
    await $.mset((await $.mv(L0["shp"], "Brush")), "Color", (await $.mv((await $.v(C, "StringGrid")), "FixedColor")));
    await $.mcall(L0["shp"], "SendToBack", []);
    await $.mset((await $.mv(L0["tb"], "Frame")), "Color", (await $.v(C, "clGray")));
    await $.mset((await $.mv(L0["tb"], "Frame")), "Width", 1);
    if ($.truthy((await $.and_((await $.v(C, "PrintGridLines")), async () => ($.in_((await $.v(C, "goHorzLine")), (await $.mv((await $.v(C, "StringGrid")), "Options")))))))) {
      await $.stmt((await $.call(C, "CreateShape", [L0["tb"], (await $.v(C, "qrsHorLine")), 0, 0, $.add(L0["dx"], 1), 1, (await $.v(C, "clGray"))])));
      await $.stmt((await $.call(C, "CreateShape", [L0["tb"], (await $.v(C, "qrsHorLine")), 0, $.sub((await $.mv(L0["tb"], "Height")), 1), $.add(L0["dx"], 1), 1, (await $.v(C, "clGray"))])));
    }
    if ($.truthy((await $.and_((await $.v(C, "PrintGridLines")), async () => ($.in_((await $.v(C, "goVertLine")), (await $.mv((await $.v(C, "StringGrid")), "Options")))))))) {
      await $.mset((await $.mv(L0["tb"], "Frame")), "DrawLeft", true);
    }
  }
  L0["db"] = (await $.call(C, "CreateBand", [(await $.v(C, "QuickRep")), (await $.v(C, "rbDetail")), (await $.mv((await $.v(C, "StringGrid")), "DefaultRowHeight"))]));
  await $.mset(L0["db"], "BeforePrint", (await $.v(C, "DetailBandBeforePrint")));
  await $.mset(L0["db"], "Name", (await $.call(C, "FindUniqueComponentName", [(await $.call(C, "TForm", [(await $.mv((await $.v(C, "QuickRep")), "Owner"))])), "DetailBand", true])));
  await $.mset((await $.mv(L0["db"], "Frame")), "Color", (await $.v(C, "clGray")));
  await $.mset((await $.mv(L0["db"], "Frame")), "Width", 1);
  L0["dx"] = 0;
  { const $t150 = $.sub((await $.mv((await $.v(C, "StringGrid")), "ColCount")), 1);
    L0["x"] = 0;
    let $t151 = true;
    for (;;) {
      if (!$t151) { L0["x"] = $.succ(L0["x"], 1); }
      $t151 = false;
      if (!($.ord(L0["x"]) <= $.ord($t150))) break;
      L0["dx"] = $.add(L0["dx"], (await $.idx((await $.mv((await $.v(C, "StringGrid")), "ColWidths")), [L0["x"]])));
      await $.tick();
    }
  }
  if ($.truthy((await $.and_(((await $.v(C, "PrintGridLines"))), async () => ($.in_((await $.v(C, "goHorzLine")), (await $.mv((await $.v(C, "StringGrid")), "Options")))))))) {
    L0["shp"] = (await $.call(C, "CreateShape", [L0["db"], (await $.v(C, "qrsHorLine")), 0, $.sub((await $.mv(L0["db"], "Height")), 1), $.add(L0["dx"], 1), 1, (await $.v(C, "clGray"))]));
    await $.mcall(L0["shp"], "BringToFront", []);
  }
  if ($.truthy((await $.and_((await $.v(C, "PrintGridLines")), async () => ($.in_((await $.v(C, "goVertLine")), (await $.mv((await $.v(C, "StringGrid")), "Options")))))))) {
    await $.mset((await $.mv(L0["db"], "Frame")), "DrawLeft", true);
  }
  L0["dx"] = 0;
  { const $t152 = $.sub((await $.mv((await $.v(C, "StringGrid")), "ColCount")), 1);
    L0["x"] = 0;
    let $t153 = true;
    for (;;) {
      if (!$t153) { L0["x"] = $.succ(L0["x"], 1); }
      $t153 = false;
      if (!($.ord(L0["x"]) <= $.ord($t152))) break;
      L0["lbl"] = (await $.call(C, "CreateLabel", [L0["db"], $.add(L0["dx"], 3), 3]));
      await $.mset(L0["lbl"], "Name", $.add($.add("Col", (await $.call(C, "IntToStr", [L0["x"]]))), "Label"));
      await $.stmt((await $.mcall((await $.mv(L0["lbl"], "Font")), "Assign", [(await $.mv((await $.v(C, "Stringgrid")), "Font"))])));
      await $.mset(L0["lbl"], "Caption", (await $.mv(L0["lbl"], "Name")));
      L0["dx"] = $.add(L0["dx"], (await $.idx((await $.mv((await $.v(C, "Stringgrid")), "ColWidths")), [L0["x"]])));
      await $.mset(L0["lbl"], "AutoSize", false);
      await $.mset(L0["lbl"], "WordWrap", false);
      await $.mset(L0["lbl"], "Width", (await $.call(C, "Max_Int", [0, $.sub((await $.idx((await $.mv((await $.v(C, "Stringgrid")), "ColWidths")), [L0["x"]])), 5)])));
      await $.mset(L0["lbl"], "Color", (await $.mv((await $.v(C, "Stringgrid")), "Color")));
      await $.mset(L0["lbl"], "Transparent", true);
      if ($.truthy($.lt(L0["x"], (await $.mv((await $.v(C, "StringGrid")), "FixedCols"))))) {
        L0["shp"] = (await $.call(C, "CreateShape", [L0["db"], (await $.v(C, "qrsRectangle")), 0, 0, $.mul((await $.mv((await $.v(C, "StringGrid")), "FixedCols")), (await $.idx((await $.mv((await $.v(C, "StringGrid")), "ColWidths")), [L0["x"]]))), (await $.mv(L0["db"], "Height")), (await $.mv((await $.v(C, "StringGrid")), "FixedColor"))]));
        await $.mset((await $.mv(L0["shp"], "Brush")), "Color", (await $.mv((await $.v(C, "StringGrid")), "FixedColor")));
        await $.mset((await $.mv(L0["shp"], "Brush")), "Style", (await $.v(C, "bsSolid")));
        await $.mcall(L0["shp"], "SendToBack", []);
      }
      if ($.truthy((await $.and_(((await $.v(C, "PrintGridLines"))), async () => ($.in_((await $.v(C, "goVertLine")), (await $.mv((await $.v(C, "Stringgrid")), "Options")))))))) {
        await $.stmt((await $.call(C, "CreateShape", [L0["db"], (await $.v(C, "qrsVertLine")), L0["dx"], 0, 1, (await $.mv(L0["db"], "Height")), (await $.v(C, "clGray"))])));
      }
      await $.tick();
    }
  }
  L0["result"] = true;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TQRStringgridReport", "Notification", async function Notification(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"acomponent": $.copyArg(p0), "operation": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["acomponent", "operation"]);
  await $.inherited(Self, "TQRStringgridReport", "Notification", [L0["acomponent"], L0["operation"]], arguments);
  if ($.truthy((await $.and_(($.eq(L0["operation"], (await $.v(C, "opRemove")))), async () => ($.eq(L0["acomponent"], (await $.v(C, "FQuickRep")))))))) {
    await $.set(C, "QuickRep", null);
  } else {
    if ($.truthy((await $.and_(($.eq(L0["operation"], (await $.v(C, "opRemove")))), async () => ($.eq(L0["acomponent"], (await $.v(C, "FStringGrid")))))))) {
      await $.set(C, "StringGrid", null);
    }
  }
  return L0.result;
}, {"params": ["AComponent", "Operation"], "kind": "procedure", "ptypes": ["TComponent", "TOperation"]});
  return U;
}
