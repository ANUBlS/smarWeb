// Generated from CreditUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CreditUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "StdCtrls", "ComCtrls", "ImgList", "ToolWin", "PluginToolBar", "oracle", "db", "oracledata", "ActnList", "ExtCtrls", "Menus", "Mask", "DBCtrlsEh", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "DBCtrls", "CustAnalysDataModuleImpl", "FilterUnit", "PaymentsUnit", "DateintervalUnit", "sboapiDataModuleImpl", "SBTranslateProc", "PayImpl", "ReturnTr"]);
  const C = [U];
  U.defClass("TCreditForm", "TForm", {"plugintoolbar1": {"name": "PluginToolBar1", "type": "TPluginToolBar"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgridehcredit": {"name": "DBGridEhCredit", "type": "TDBGridEh"}, "searchpanel": {"name": "SearchPanel", "type": "TGroupBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editcontractaccno": {"name": "EditCONTRACTACCNO", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "editrest": {"name": "Editrest", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "editnumberofcredit": {"name": "Editnumberofcredit", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "actionsearch": {"name": "ActionSearch", "type": "TAction"}, "actionpayments": {"name": "Actionpayments", "type": "TAction"}, "reppopupmenu": {"name": "REpPopupMenu", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "cmexcelexport": {"name": "CMExcelExport", "type": "TCMExcelExport"}, "v": {"name": "v", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}}, {});
  U.init(async () => {
    U.var_("CreditForm", null, "TCreditForm");
  });
  U.method("TCreditForm", "FindNextRecord", async function FindNextRecord(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), "fieldname": $.copyArg(p1), "value": $.copyArg(p2), result: false, "searchoptions": null};
  await $.fixArgs(L0, ["dataset", "fieldname", "value"]);
  L0["rsrecordrecachedeof"] = "Axtarış cərgənin sonuna çatıb .";
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
  U.method("TCreditForm", "MenuShrift", async function MenuShrift(Self, p0, p1, p2, p3) {
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
  U.method("TCreditForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TCreditForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCreditForm", "vClick", async function vClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "PayForm")), "Label8")), "Caption", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetMAINPAY")), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "PayForm")), "Label9")), "Caption", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetINTERESTREST")), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "PayForm")), "Label10")), "Caption", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetDUEREST")), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "PayForm")), "Label11")), "Caption", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetDUEINTERESTREST")), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "PayForm")), "Label12")), "Caption", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetPENALTYREST")), "AsVariant")));
  await $.mset((await $.mv((await $.v(C, "PayForm")), "Label13")), "Caption", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCEMPAY")), "AsVariant")));
  await $.mcall((await $.v(C, "PayForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "ToolButton11Click", async function ToolButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returntrans")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returntrans")), "SetVariable", ["brid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetBOOROWERID")), "AsInteger"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returntrans")), "SetVariable", ["crid", (await $.mv((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSetCREDITID")), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "Returntrans")), "open", []);
  await $.set(C, "FormReturns", (await $.mcall((await $.v(C, "TFormReturns")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormReturns")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.wobj(C, "FilterForm"));
    await $.stmt($.wcall([$t15], "Showmodal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "DBGridEhCreditTitleClick", async function DBGridEhCreditTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "orderfield": ''};
  await $.fixArgs(L0, ["column"]);
  L0["orderfield"] = (await $.mv((await $.mv(L0["column"], "Field")), "FieldName"));
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    {
      const $t16 = (await $.call(C, "TOracleDataSet", [(await $.mv((await $.mv((await $.v(C, "DBGridEhCredit")), "DataSource")), "DataSet"))]));
      if ($.truthy((await $.wv([$t16], "Active", C, false)))) {
        await $.stmt($.wcall([$t16], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t16], "SetVariable", ["OrderField", (await $.wv([$t16], "OrderField", { get: async () => L0["orderfield"], set: async (v) => { L0["orderfield"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t16], "Open", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("TCreditForm", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DateintervalForm")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.mv((await $.v(C, "CustAnalysDataModule")), "CustAnalysDataSet"));
    await $.stmt($.wcall([$t17], "Next", [], C));
    {
      const $t18 = (await $.mv((await $.wv([$t17], "CustAnalysDataModule", C, false)), "CreditAnalysDataSet"));
      if ($.truthy((await $.wv([$t17, $t18], "Active", C, false)))) {
        await $.stmt($.wcall([$t17, $t18], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t17, $t18], "SetVariable", ["boorowerid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t17, $t18], "CustAnalysDataModule", C, false)), "CustAnalysDataSet")), "FieldByName", ["BoorowerId"])), "asInteger"))], C)));
      await $.stmt((await $.wcall([$t17, $t18], "SetVariable", ["orderfield", "numberofcredit"], C)));
      await $.stmt($.wcall([$t17, $t18], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "CustAnalysDataModule")), "CustAnalysDataSet"));
    await $.stmt($.wcall([$t19], "Prior", [], C));
    {
      const $t20 = (await $.mv((await $.wv([$t19], "CustAnalysDataModule", C, false)), "CreditAnalysDataSet"));
      if ($.truthy((await $.wv([$t19, $t20], "Active", C, false)))) {
        await $.stmt($.wcall([$t19, $t20], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t19, $t20], "SetVariable", ["boorowerid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19, $t20], "CustAnalysDataModule", C, false)), "CustAnalysDataSet")), "FieldByName", ["BoorowerId"])), "asInteger"))], C)));
      await $.stmt((await $.wcall([$t19, $t20], "SetVariable", ["orderfield", "numberofcredit"], C)));
      await $.stmt($.wcall([$t19, $t20], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "miPaymentsDrawItem", async function miPaymentsDrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  await $.stmt((await $.call(C, "MenuShrift", [L0["sender"], L0["acanvas"], L0["arect"], L0["selected"]])));
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCreditForm", "ActionSearchExecute", async function ActionSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchrecord": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["searchfield"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "name")), 5, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
  L0["searchrecord"] = (await $.mv((L0["sender"]), "Text"));
  await $.stmt((await $.call(C, "FindNextRecord", [(await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSet")), L0["searchfield"], L0["searchrecord"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "EditnumberofcreditExit", async function EditnumberofcreditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (L0["sender"]);
    await $.wset([$t21], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "DBGridEhCreditDblClick", async function DBGridEhCreditDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionpaymentsExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "ActionpaymentsExecute", async function ActionpaymentsExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.wobj(C, "CustAnalysDataModule"));
    {
      const $t23 = (await $.wv([$t22], "ScheduleDataSet", C, false));
      if ($.truthy((await $.wv([$t22, $t23], "Active", C, false)))) {
        await $.stmt($.wcall([$t22, $t23], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t22, $t23], "Setvariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t23], "CustAnalysDataModule", C, false)), "CreditAnalysDataSet")), "FieldByName", ["Creditid"])), "asInteger"))], C)));
      await $.stmt($.wcall([$t22, $t23], "Open", [], C));
    }
    {
      const $t24 = (await $.wv([$t22], "SumSheDataSet", C, false));
      if ($.truthy((await $.wv([$t22, $t24], "Active", C, false)))) {
        await $.stmt($.wcall([$t22, $t24], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t22, $t24], "Setvariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t24], "CustAnalysDataModule", C, false)), "CreditAnalysDataSet")), "FieldByName", ["Creditid"])), "asInteger"))], C)));
      await $.stmt($.wcall([$t22, $t24], "Open", [], C));
    }
    {
      const $t25 = (await $.wv([$t22], "SumPayDataSet", C, false));
      if ($.truthy((await $.wv([$t22, $t25], "Active", C, false)))) {
        await $.stmt($.wcall([$t22, $t25], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t22, $t25], "Setvariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t25], "CustAnalysDataModule", C, false)), "CreditAnalysDataSet")), "FieldByName", ["Creditid"])), "asInteger"))], C)));
      await $.stmt($.wcall([$t22, $t25], "Open", [], C));
    }
    {
      const $t26 = (await $.wv([$t22], "PaymentsDataSet", C, false));
      if ($.truthy((await $.wv([$t22, $t26], "Active", C, false)))) {
        await $.stmt($.wcall([$t22, $t26], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t22, $t26], "Setvariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t26], "CustAnalysDataModule", C, false)), "CreditAnalysDataSet")), "FieldByName", ["Creditid"])), "asInteger"))], C)));
      await $.stmt($.wcall([$t22, $t26], "Open", [], C));
    }
    {
      const $t27 = (await $.wv([$t22], "TrancheDataSet", C, false));
      if ($.truthy((await $.wv([$t22, $t27], "Active", C, false)))) {
        await $.stmt($.wcall([$t22, $t27], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t22, $t27], "Setvariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t27], "CustAnalysDataModule", C, false)), "CreditAnalysDataSet")), "FieldByName", ["Creditid"])), "asInteger"))], C)));
      await $.stmt($.wcall([$t22, $t27], "Open", [], C));
    }
    {
      const $t28 = (await $.wv([$t22], "ProlongationDataSet", C, false));
      if ($.truthy((await $.wv([$t22, $t28], "Active", C, false)))) {
        await $.stmt($.wcall([$t22, $t28], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t22, $t28], "Setvariable", ["CrdID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t28], "CustAnalysDataModule", C, false)), "CreditAnalysDataSet")), "FieldByName", ["Creditid"])), "asInteger"))], C)));
      await $.stmt($.wcall([$t22, $t28], "Open", [], C));
    }
  }
  await $.mcall((await $.v(C, "PaymentsForm")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "DBGridEhCreditKeyPress", async function DBGridEhCreditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActionpaymentsExecute", [null])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCreditForm", "EditnumberofcreditKeyPress", async function EditnumberofcreditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActionSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCreditForm", "EditCONTRACTACCNOKeyPress", async function EditCONTRACTACCNOKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActionSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCreditForm", "EditrestKeyPress", async function EditrestKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "ActionSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCreditForm", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["crdid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustAnalysDataModule")), "CreditAnalysDataSet")), "FieldByName", ["CREDITID"])), "AsInteger"));
  {
    const $t29 = (await $.wobj(C, "CustAnalysDataModule"));
    {
      const $t30 = (await $.wv([$t29], "ReportDataSet", C, false));
      await $.stmt($.wcall([$t29, $t30], "CloseAll", [], C));
      await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["CrdID", (await $.wv([$t29, $t30], "Crdid", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t29, $t30], "Open", [], C));
    }
    {
      const $t31 = (await $.wv([$t29], "CMExcelExport", C, false));
      await $.stmt($.wcall([$t29, $t31], "Connect", [], C));
      await $.stmt((await $.wcall([$t29, $t31], "ExportDataset", [(await $.wv([$t29, $t31], "ReportDataSet", C, false)), "Hesabat", (await $.wv([$t29, $t31], "true", C, false))], C)));
      await $.stmt($.wcall([$t29, $t31], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditForm", "N1DrawItem", async function N1DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t32 = L0["acanvas"];
    const $t33 = (await $.wv([$t32], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t34 = (await $.wv([$t32, $t33], "Font", C, false));
      await $.wset([$t32, $t33, $t34], "Name", "Azl Sans Serif", C);
      await $.wset([$t32, $t33, $t34], "Charset", (await $.wv([$t32, $t33, $t34], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t32, $t33, $t34], "Default", C, false)))) {
        await $.wset([$t32, $t33, $t34], "Style", [(await $.wv([$t32, $t33, $t34], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t32, $t33], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t32, $t33], "Pen", C, false)), "Color", (await $.wv([$t32, $t33], "clBlack", C, false)));
      await $.wset([$t32, $t33], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t32, $t33], "MoveTo", [(await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t32, $t33], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t32, $t33], "LineTo", [(await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t32, $t33], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t32, $t33], "inc", [$.ref(async () => (await $.wv([$t32, $t33], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t35) => { await $.wset([$t32, $t33], "LineBottom", $t35, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t32, $t33], "Pen", C, false)), "Color", (await $.wv([$t32, $t33], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t32, $t33], "MoveTo", [(await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t32, $t33], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t32, $t33], "LineTo", [(await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t32, $t33], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t32, $t33], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t32, $t33], "Brush", C, false)), "Color", (await $.wv([$t32, $t33], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t32, $t33], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t32, $t33], "Font", C, false)), "Color", (await $.wv([$t32, $t33], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t32, $t33], "Font", C, false)), "Color", (await $.wv([$t32, $t33], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t32, $t33], "Brush", C, false)), "Color", (await $.wv([$t32, $t33], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t32, $t33], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t32, $t33], "Font", C, false)), "Color", (await $.wv([$t32, $t33], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t32, $t33], "Font", C, false)), "Color", (await $.wv([$t32, $t33], "clGrayText", C, false)));
        }
      }
      await $.wset([$t32, $t33], "Bar", (await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t32, $t33], "FillRect", [(await $.wv([$t32, $t33], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t32, $t33], "TextOut", [$.add((await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 2), $.add((await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t32, $t33], "Caption", C, false))], C)));
    }
    await $.wset([$t32, $t33], "SText", (await $.wcall([$t32, $t33], "ShortCutToText", [(await $.wv([$t32, $t33], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t32, $t33], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t32, $t33], "TextWidth", [(await $.wv([$t32, $t33], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t32, $t33], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t32, $t33], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t32, $t33], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t36 = (await $.wv([$t32, $t33], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t32, $t33, $t36], "Assigned", [(await $.wv([$t32, $t33, $t36], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t32, $t33, $t36], "Checked", C, false)))) {
            await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t32, $t33, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t32, $t33, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t32, $t33, $t36], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t32, $t33, $t36], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t32, $t33, $t36], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t32, $t33, $t36], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t37) => { await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t37); }), 2], C)));
            await $.stmt((await $.wcall([$t32, $t33, $t36], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t38) => { await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t38); }), 2], C)));
            await $.stmt((await $.wcall([$t32, $t33, $t36], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t39) => { await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t39); }), 2], C)));
            await $.stmt((await $.wcall([$t32, $t33, $t36], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t40) => { await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t40); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t32, $t33, $t36], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t32, $t33, $t36], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t32, $t33, $t36], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t32, $t33, $t36], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t41) => { await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t41); }), 1], C)));
            await $.stmt((await $.wcall([$t32, $t33, $t36], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t42) => { await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t42); }), 1], C)));
            await $.stmt((await $.wcall([$t32, $t33, $t36], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t43) => { await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t43); }), 1], C)));
            await $.stmt((await $.wcall([$t32, $t33, $t36], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t44) => { await $.mset((await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t44); }), 1], C)));
            if ($.truthy((await $.wv([$t32, $t33, $t36], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t32, $t33, $t36], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t32, $t33, $t36], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t32, $t33, $t36], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t32, $t33, $t36], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t32, $t33, $t36], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t32, $t33, $t36], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t32, $t33, $t36], "Images", C, false)), "Draw", [(await $.wv([$t32, $t33, $t36], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t32, $t33, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t32, $t33, $t36], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t32, $t33, $t36], "ImageIndex", C, false)), (await $.wv([$t32, $t33, $t36], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  return U;
}
