// Generated from CustanalysUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustanalysUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGridEh", "Buttons", "StdCtrls", "ComCtrls", "ImgList", "ToolWin", "PluginToolBar", "ActnList", "DBCtrls", "CMExcelExport", "CheckLst", "Evanescence", "Mask", "DBCtrlsEh", "DBLookupEh", "oracledata", "oracle", "Menus", "DB", "CustAnalysDataModuleImpl", "Filterunit", "CommonDecls", "CreditsinDateUnit", "DateintervalUnit", "PaymentsUnit", "sbsystem", "CreditUnit"]);
  const C = [U];
  U.defClass("TCustanalysForm", "TForm", {"mainpanel": {"name": "MainPanel", "type": "TPanel"}, "plugintoolbar1": {"name": "PluginToolBar1", "type": "TPluginToolBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "custpanel": {"name": "CustPanel", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "actionclose": {"name": "ActionClose", "type": "TAction"}, "actionexcelexport": {"name": "ActionExcelExport", "type": "TAction"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "actionsearchcust": {"name": "ActionSearchCust", "type": "TAction"}, "actionfilteaccept": {"name": "ActionFilteAccept", "type": "TAction"}, "actionfilterreject": {"name": "ActionFilterReject", "type": "TAction"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "editboorowername": {"name": "Editboorowername", "type": "TEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "editboorowerid": {"name": "EditBoorowerid", "type": "TEdit"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "actiondateinterval": {"name": "ActionDateinterval", "type": "TAction"}, "action1": {"name": "Action1", "type": "TAction"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "ffiltergrid": {"name": "FFilterGrid", "type": "TDBGridEh"}}, {});
  U.init(async () => {
    U.var_("CustanalysForm", null, "TCustanalysForm");
  });
  U.method("TCustAnalysForm", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "AAxtarış cərgənin sonuna çatıb .";
  L0["rscontinuefromtop"] = "Əvvəldən axtarmaqla davam etmək istayirsiniz?";
  L0["rsrecordnotfound"] = "Yazı tapılmadı.";
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = (L0["dataset"]);
    await $.wset([$t1], "Result", (await $.wcall([$t1], "SearchRecord", [(await $.wv([$t1], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t1], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t1], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1], "srFromCurrent", C, false)), (await $.wv([$t1], "srForward", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.not((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
      if ($.truthy($.eq((await $.wcall([$t1], "MessageDlg", [$.add($.add((await $.wv([$t1], "rsRecordRecachedEOF", { get: async () => L0["rsrecordrecachedeof"], set: async (v) => { L0["rsrecordrecachedeof"] = v; }, local: true }, false)), "\n\r"), (await $.wv([$t1], "rsContinueFromTop", { get: async () => L0["rscontinuefromtop"], set: async (v) => { L0["rscontinuefromtop"] = v; }, local: true }, false))), (await $.wv([$t1], "mtInformation", C, false)), [(await $.wv([$t1], "mbNo", C, false)), (await $.wv([$t1], "mbYes", C, false))], 0], C)), (await $.wv([$t1], "mrYes", C, false))))) {
        await $.wset([$t1], "Result", (await $.wcall([$t1], "SearchRecord", [(await $.wv([$t1], "FieldName", { get: async () => L0["fieldname"], set: async (v) => { L0["fieldname"] = v; }, local: true }, false)), (await $.wv([$t1], "Value", { get: async () => L0["value"], set: async (v) => { L0["value"] = v; }, local: true }, false)), $.add((await $.wv([$t1], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1], "srFromBeginning", C, false))])], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
        if ($.truthy($.not((await $.wv([$t1], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
          await $.stmt((await $.wcall([$t1], "MessageDlg", [(await $.wv([$t1], "rsRecordNotFound", { get: async () => L0["rsrecordnotfound"], set: async (v) => { L0["rsrecordnotfound"] = v; }, local: true }, false)), (await $.wv([$t1], "mtInformation", C, false)), [(await $.wv([$t1], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["DataSet", "FieldName", "Value"], "kind": "function", "ptypes": ["TDataSet", "String", "String"]});
  U.method("TCustanalysForm", "MenuShrift", async function MenuShrift(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t2 = L0["acanvas"];
    const $t3 = (await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t4 = (await $.wv([$t2, $t3], "Font", C, false));
      await $.wset([$t2, $t3, $t4], "Name", "Azl Sans Serif", C);
      await $.wset([$t2, $t3, $t4], "Charset", (await $.wv([$t2, $t3, $t4], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t2, $t3, $t4], "Default", C, false)))) {
        await $.wset([$t2, $t3, $t4], "Style", [(await $.wv([$t2, $t3, $t4], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t2, $t3], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t2, $t3], "Pen", C, false)), "Color", (await $.wv([$t2, $t3], "clBlack", C, false)));
      await $.wset([$t2, $t3], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t2, $t3], "MoveTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "LineTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "inc", [$.ref(async () => (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t5) => { await $.wset([$t2, $t3], "LineBottom", $t5, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t2, $t3], "Pen", C, false)), "Color", (await $.wv([$t2, $t3], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t2, $t3], "MoveTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "LineTo", [(await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t2, $t3], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t2, $t3], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t2, $t3], "Brush", C, false)), "Color", (await $.wv([$t2, $t3], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t2, $t3], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t2, $t3], "Brush", C, false)), "Color", (await $.wv([$t2, $t3], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t2, $t3], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t2, $t3], "Font", C, false)), "Color", (await $.wv([$t2, $t3], "clGrayText", C, false)));
        }
      }
      await $.wset([$t2, $t3], "Bar", (await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t2, $t3], "FillRect", [(await $.wv([$t2, $t3], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t2, $t3], "TextOut", [$.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t2, $t3], "Caption", C, false))], C)));
    }
    await $.wset([$t2, $t3], "SText", (await $.wcall([$t2, $t3], "ShortCutToText", [(await $.wv([$t2, $t3], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t2, $t3], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t2, $t3], "TextWidth", [(await $.wv([$t2, $t3], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t2, $t3], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t2, $t3], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t2, $t3], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t6 = (await $.wv([$t2, $t3], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t2, $t3, $t6], "Assigned", [(await $.wv([$t2, $t3, $t6], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t2, $t3, $t6], "Checked", C, false)))) {
            await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t2, $t3, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t2, $t3, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t2, $t3, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t6], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t2, $t3, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t7) => { await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t7); }), 2], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t8) => { await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t8); }), 2], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t9) => { await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t9); }), 2], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t6], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t10) => { await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t10); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t2, $t3, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t6], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t2, $t3, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t11) => { await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t11); }), 1], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t12) => { await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t12); }), 1], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t13) => { await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t13); }), 1], C)));
            await $.stmt((await $.wcall([$t2, $t3, $t6], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t14) => { await $.mset((await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t14); }), 1], C)));
            if ($.truthy((await $.wv([$t2, $t3, $t6], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t2, $t3, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t6], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t2, $t3, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t2, $t3, $t6], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t2, $t3, $t6], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t2, $t3, $t6], "Images", C, false)), "Draw", [(await $.wv([$t2, $t3, $t6], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t2, $t3, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t2, $t3, $t6], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t2, $t3, $t6], "ImageIndex", C, false)), (await $.wv([$t2, $t3, $t6], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCustanalysForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  try {
    try {
      await $.set(C, "CustAnalysDataModule", (await $.mcall((await $.v(C, "TCustAnalysDataModule")), "Create", [Self])));
      await $.set(C, "CreditForm", (await $.mcall((await $.v(C, "TCreditForm")), "Create", [Self])));
      await $.set(C, "FilterForm", (await $.mcall((await $.v(C, "TFilterForm")), "create", [Self])));
      await $.set(C, "DateintervalForm", (await $.mcall((await $.v(C, "TDateintervalForm")), "Create", [Self])));
      await $.set(C, "PaymentsForm", (await $.mcall((await $.v(C, "TPaymentsForm")), "Create", [Self])));
      await $.set(C, "CreditinDateForm", (await $.mcall((await $.v(C, "TCreditinDateForm")), "Create", [Self])));
      {
        const $t16 = (await $.wobj(C, "CustAnalysDataModule"));
        {
          const $t17 = (await $.wv([$t16], "CustAnalysDataSet", C, false));
          if ($.truthy((await $.wv([$t16, $t17], "Active", C, false)))) {
            await $.stmt($.wcall([$t16, $t17], "CloseAll", [], C));
          }
          await $.stmt((await $.wcall([$t16, $t17], "SetVariable", ["orderfield", "ID"], C)));
          await $.stmt($.wcall([$t16, $t17], "Open", [], C));
        }
        await $.mcall((await $.wv([$t16], "CustomersDataSet", C, false)), "Open", []);
        await $.mcall((await $.wv([$t16], "CurrencysDataSet", C, false)), "Open", []);
        await $.mcall((await $.wv([$t16], "PersonsDataSet", C, false)), "Open", []);
        await $.mcall((await $.wv([$t16], "UsersDataSet", C, false)), "Open", []);
        await $.mcall((await $.wv([$t16], "FilialDataSet", C, false)), "Open", []);
        await $.mcall((await $.wv([$t16], "CategoriesDataSet", C, false)), "Open", []);
        await $.mcall((await $.wv([$t16], "UserGroupsDataSet", C, false)), "Open", []);
        await $.mcall((await $.wv([$t16], "CreditTypeDataSet", C, false)), "Open", []);
      }
      await $.mset((await $.v(C, "SearchPanel")), "Visible", true);
      {
        const $t18 = (await $.wobj(C, "FilterForm"));
        await $.mcall((await $.wv([$t18], "EvanescenceValute", C, false)), "Open", []);
        await $.mcall((await $.wv([$t18], "EvanescenceFilial", C, false)), "Open", []);
      }
    } catch ($t15) {
      $.rethrowControl($t15);
      $.handled($t15);
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
      throw $t15;
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.wobj(C, "CustAnalysDataModule"));
    await $.mcall((await $.wv([$t19], "CustAnalysDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "CreditAnalysDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "CustomersDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "CurrencysDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "PersonsDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "UsersDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "FilialDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "CategoriesDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "UserGroupsDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "CreditTypeDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t19], "CustAnalysDataSet", C, false)), "CloseAll", []);
    await $.stmt($.wcall([$t19], "Free", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "FilterForm")), "EvanescenceValute")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "FilterForm")), "EvanescenceFilial")), "Close", []);
  await $.mcall((await $.v(C, "CreditForm")), "Free", []);
  await $.mcall((await $.v(C, "FilterForm")), "Free", []);
  await $.mcall((await $.v(C, "DateintervalForm")), "Free", []);
  await $.mcall((await $.v(C, "PaymentsForm")), "Free", []);
  await $.mcall((await $.v(C, "CreditinDateForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TCustanalysForm", "ActionCloseExecute", async function ActionCloseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "ActionExcelExportExecute", async function ActionExcelExportExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.wobj(C, "ExcelExport"));
    await $.stmt($.wcall([$t20], "Connect", [], C));
    await $.stmt((await $.wcall([$t20], "ExportDataset", [(await $.mv((await $.wv([$t20], "CustAnalysDataModule", C, false)), "CreditAnalysDataSet")), "Müştəri üzrə analiz", (await $.wv([$t20], "True", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "ActionSearchCustExecute", async function ActionSearchCustExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchrecord": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["searchfield"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "name")), 5, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
  L0["searchrecord"] = (await $.mv((L0["sender"]), "Text"));
  await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.v(C, "CustAnalysDataModule")), "CustAnalysDataSet")), L0["searchfield"], L0["searchrecord"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "EditBooroweridKeyPress", async function EditBooroweridKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), "\r")), async () => ($.ne((await $.mv((await $.v(C, "EditBoorowerid")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "ActionSearchCustExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustanalysForm", "EditBooroweridExit", async function EditBooroweridExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditBoorowerid")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "EditboorowernameKeyPress", async function EditboorowernameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSearchCustExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustanalysForm", "EditboorowernameExit", async function EditboorowernameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Editboorowername")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "ActionDateintervalExecute", async function ActionDateintervalExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DateintervalForm", (await $.mcall((await $.v(C, "TDateintervalForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "DateintervalForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "Tarix1Click", async function Tarix1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionDateintervalExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "Excel1Click", async function Excel1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionExcelExportExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "EditAcc_noExit", async function EditAcc_noExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (L0["sender"]);
    await $.wset([$t21], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCustanalysForm", "DBGridEh1TitleClick", async function DBGridEh1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "orderfield": ''};
  await $.fixArgs(L0, ["column"]);
  L0["orderfield"] = (await $.mv((await $.mv(L0["column"], "Field")), "FieldName"));
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    {
      const $t22 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGridEh1")), "DataSource")), "DataSet"))]));
      if ($.truthy((await $.wv([$t22], "Active", C, false)))) {
        await $.stmt($.wcall([$t22], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t22], "SetVariable", ["OrderField", (await $.wv([$t22], "OrderField", { get: async () => L0["orderfield"], set: async (v) => { L0["orderfield"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t22], "Open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("TCustanalysForm", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionExcelExportExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionDateintervalExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SearchPanel")), "Visible", $.not((await $.mv((await $.v(C, "SearchPanel")), "Visible"))));
  await $.mset((await $.v(C, "DBGridEh1")), "Align", (await $.v(C, "alnone")));
  await $.mset((await $.v(C, "SearchPanel")), "Align", (await $.v(C, "albottom")));
  await $.mset((await $.v(C, "DBGridEh1")), "Align", (await $.v(C, "alClient")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "DBGridEh1DblClick", async function DBGridEh1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    {
      const $t23 = (await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSet"));
      if ($.truthy((await $.wv([$t23], "Active", C, false)))) {
        await $.stmt($.wcall([$t23], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t23], "SetVariable", ["boorowerid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t23], "CustAnalysDataModule", C, false)), "CustAnalysDataSet")), "FieldByName", ["BoorowerId"])), "asInteger"))], C)));
      await $.stmt((await $.wcall([$t23], "SetVariable", ["orderfield", "numberofcredit"], C)));
      await $.stmt($.wcall([$t23], "Open", [], C));
    }
    await $.mcall((await $.v(C, "CreditForm")), "ShowModal", []);
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustanalysForm", "DBGridEh1KeyPress", async function DBGridEh1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t24 = (await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSet"));
      if ($.truthy((await $.wv([$t24], "Active", C, false)))) {
        await $.stmt($.wcall([$t24], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t24], "SetVariable", ["boorowerid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t24], "CustAnalysDataModule", C, false)), "CustAnalysDataSet")), "FieldByName", ["BoorowerId"])), "asInteger"))], C)));
      await $.stmt((await $.wcall([$t24], "SetVariable", ["orderfield", "numberofcredit"], C)));
      await $.stmt($.wcall([$t24], "Open", [], C));
    }
    await $.mcall((await $.v(C, "CreditForm")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustanalysForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSet"));
    if ($.truthy((await $.wv([$t25], "Active", C, false)))) {
      await $.stmt($.wcall([$t25], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t25], "SetVariable", ["boorowerid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "CustAnalysDataModule", C, false)), "CustAnalysDataSet")), "FieldByName", ["BoorowerId"])), "asInteger"))], C)));
    await $.stmt((await $.wcall([$t25], "SetVariable", ["orderfield", "numberofcredit"], C)));
    await $.stmt($.wcall([$t25], "Open", [], C));
  }
  await $.mcall((await $.v(C, "CreditForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
