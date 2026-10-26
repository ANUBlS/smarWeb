// Generated from TaxsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TaxsUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "TAXS_TLB", "StdVcl", "Mask", "DBCtrlsEh", "Grids", "XDBGrids", "StdCtrls", "CurrencyEdit", "XFSCtrls", "ComCtrls", "ToolWin", "ExtCtrls", "DB", "OracleData", "ImgList", "Oracle", "Quickrpt", "QRCtrls", "Menus", "PluginPopupMenu", "CMExcelExport", "ComObj", "ComServ", "sboapiDataModuleImpl", "Unit1", "Unit3"]);
  const C = [U];
  U.defClass("TTAXS", "TActiveForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "ods_in": {"name": "ods_in", "type": "TOracleDataSet"}, "dsrc_in": {"name": "dsrc_in", "type": "TDataSource"}, "ods_incust_id": {"name": "ods_inCUST_ID", "type": "TIntegerField"}, "ods_inacc_id": {"name": "ods_inACC_ID", "type": "TFloatField"}, "ods_incust_name": {"name": "ods_inCUST_NAME", "type": "TWideStringField"}, "ods_inacc_no": {"name": "ods_inACC_NO", "type": "TWideStringField"}, "ods_inacc_name": {"name": "ods_inACC_NAME", "type": "TWideStringField"}, "ods_inlimit": {"name": "ods_inLIMIT", "type": "TFloatField"}, "ods_insys_date": {"name": "ods_inSYS_DATE", "type": "TDateTimeField"}, "ods_infleg": {"name": "ods_inFLEG", "type": "TWideStringField"}, "ods_infleg_txt": {"name": "ods_inFLEG_TXT", "type": "TWideStringField"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "ods_incoll_num": {"name": "ods_inCOLL_NUM", "type": "TWideStringField"}, "ods_inbank_text": {"name": "ods_inBANK_TEXT", "type": "TWideMemoField"}, "ods_inlimit_tesxt": {"name": "ods_inLIMIT_TESXT", "type": "TWideMemoField"}, "oraclepackage2": {"name": "OraclePackage2", "type": "TOraclePackage"}, "ods_incoll_date": {"name": "ods_inCOLL_DATE", "type": "TDateTimeField"}, "pluginpopupmenu1": {"name": "PluginPopupMenu1", "type": "TPluginPopupMenu"}, "ap1": {"name": "ap1", "type": "TMenuItem"}, "ods_insys_datetim": {"name": "ods_inSYS_DATETIM", "type": "TDateTimeField"}, "ods_inblock_text": {"name": "ods_inBLOCK_TEXT", "type": "TWideMemoField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1coll_num": {"name": "OracleDataSet1COLL_NUM", "type": "TWideStringField"}, "oracledataset1text": {"name": "OracleDataSet1TEXT", "type": "TWideStringField"}, "oracledataset1colum": {"name": "OracleDataSet1COLUM", "type": "TWideStringField"}, "ods_sys": {"name": "ods_sys", "type": "TOracleDataSet"}, "ods_sysdat": {"name": "ods_sysDAT", "type": "TDateTimeField"}, "ods_inammount": {"name": "ods_inAMMOUNT", "type": "TFloatField"}, "exceleat1": {"name": "Exceleat1", "type": "TMenuItem"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "cbsearch": {"name": "CBSearch", "type": "TComboBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "xfcheckbox4": {"name": "XFCheckBox4", "type": "TXFCheckBox"}, "xfcheckbox5": {"name": "XFCheckBox5", "type": "TXFCheckBox"}, "xfcheckbox6": {"name": "XFCheckBox6", "type": "TXFCheckBox"}, "xfcheckbox7": {"name": "XFCheckBox7", "type": "TXFCheckBox"}, "xfcheckbox8": {"name": "XFCheckBox8", "type": "TXFCheckBox"}, "xfcheckbox9": {"name": "XFCheckBox9", "type": "TXFCheckBox"}, "xfcheckbox10": {"name": "XFCheckBox10", "type": "TXFCheckBox"}, "xfcheckbox11": {"name": "XFCheckBox11", "type": "TXFCheckBox"}, "xfcheckbox12": {"name": "XFCheckBox12", "type": "TXFCheckBox"}, "fevents": {"name": "FEvents", "type": "ITAXSEvents"}}, {});
  U.init(async () => {
    U.var_("TAXS", null, "TTAXS");
  });
  U.method("TTAXS", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TTAXS", "EditSearchKeyPress", async function EditSearchKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditSearch")), "Text"))])), 0))) {
    await $.mcall((await $.v(C, "ods_in")), "Close", []);
    { const $t1 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
      if ($.eq($t1, 0)) {
        { const $t2 = await $.iset((await $.mv((await $.v(C, "ods_in")), "SQL")), [20], $.add($.add("and c.id like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'")); if ($t2 !== undefined) { await $.mset((await $.v(C, "ods_in")), "SQL", $t2); } }
      }
      else if ($.eq($t1, 1)) {
        { const $t3 = await $.iset((await $.mv((await $.v(C, "ods_in")), "SQL")), [20], $.add($.add("and t.coll_num  like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'")); if ($t3 !== undefined) { await $.mset((await $.v(C, "ods_in")), "SQL", $t3); } }
      }
      else if ($.eq($t1, 2)) {
        { const $t4 = await $.iset((await $.mv((await $.v(C, "ods_in")), "SQL")), [20], $.add($.add("and upper(c.name) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t4 !== undefined) { await $.mset((await $.v(C, "ods_in")), "SQL", $t4); } }
      }
      else if ($.eq($t1, 3)) {
        { const $t5 = await $.iset((await $.mv((await $.v(C, "ods_in")), "SQL")), [20], $.add($.add("and upper(a.acc_no) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t5 !== undefined) { await $.mset((await $.v(C, "ods_in")), "SQL", $t5); } }
      }
    }
    await $.mcall((await $.v(C, "ods_in")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "ods_in")), "Close", []);
    { const $t6 = await $.iset((await $.mv((await $.v(C, "ods_in")), "SQL")), [20], ""); if ($t6 !== undefined) { await $.mset((await $.v(C, "ods_in")), "SQL", $t6); } }
    await $.mcall((await $.v(C, "ods_in")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTAXS", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TTAXS", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TTAXS", "Exceleat1Click", async function Exceleat1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.v(C, "ods_in")), "RecordCount")), 0))) {
    {
      const $t7 = (await $.v(C, "CMExcelExport1"));
      await $.stmt($.wcall([$t7], "Connect", [], C));
      await $.stmt((await $.wcall([$t7], "ExportDataset", [(await $.wv([$t7], "ods_in", C, false)), "Tax", (await $.wv([$t7], "True", C, false))], C)));
      await $.stmt($.wcall([$t7], "Disconnect", [], C));
    }
  } else {
    await $.stmt((await $.call(C, "Showmessage", ["  Heç bir  əməliyyat   yoxdur   !"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TTAXS", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnMouseEnter", (await $.ref_(C, "MouseEnterEvent")));
  await $.set(C, "OnMouseLeave", (await $.ref_(C, "MouseLeaveEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTAXS", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTAXS", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTAXS", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": '', "b": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "TAXS", Self);
  await $.set(C, "Form3", (await $.mcall((await $.v(C, "TForm3")), "Create", [Self])));
  await $.mset((await $.v(C, "XFCheckBox1")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox2")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox3")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox4")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox5")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox6")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox7")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox8")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox9")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox10")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox11")), "Checked", true);
  await $.mset((await $.v(C, "XFCheckBox12")), "Checked", true);
  await $.mset((await $.v(C, "DateTimePicker3")), "DateTime", (await $.mv((await $.v(C, "ods_sysDAT")), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.v(C, "ods_sysDAT")), "AsDateTime")));
  L0["a"] = (await $.call(C, "formatdatetime", ["DD/MM/YYYY", (await $.mv((await $.v(C, "DateTimePicker3")), "DateTime"))]));
  L0["b"] = (await $.call(C, "formatdatetime", ["DD/MM/YYYY", (await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]));
  {
    const $t8 = (await $.v(C, "ods_in"));
    await $.stmt($.wcall([$t8], "close", [], C));
    await $.stmt((await $.wcall([$t8], "SetVariable", ["begin_dat", (await $.wv([$t8], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t8], "SetVariable", ["end_dat", (await $.wv([$t8], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t8], "open", [], C));
  }
  await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [0])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [1])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [3])), "Title")), "Caption"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "XDBGrid1")), "Columns")), [4])), "Title")), "Caption"))])));
  await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "ap1Click", async function ap1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "i": 0, "v_coll_num": '', "v_bank_text": '', "v_limit_text": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.v(C, "ods_inFLEG")), "AsString")), "GA")), async () => ($.eq((await $.mv((await $.v(C, "ods_inFLEG")), "AsString")), "GD")))), async () => ($.eq((await $.mv((await $.v(C, "ods_inFLEG")), "AsString")), "GAI")))), async () => ($.eq((await $.mv((await $.v(C, "ods_inFLEG")), "AsString")), "GDI")))), async () => ($.eq((await $.mv((await $.v(C, "ods_inFLEG")), "AsString")), "GAS")))), async () => ($.eq((await $.mv((await $.v(C, "ods_inFLEG")), "AsString")), "GDS")))))) {
    await $.stmt((await $.call(C, "showmessage", ["  Geriçağrılma olanlrı çapa vermək olmaz  ! "])));
    return L0.result;
  } else {
    L0["v_coll_num"] = (await $.mv((await $.v(C, "ods_inCOLL_NUM")), "AsString"));
    L0["v_bank_text"] = $.add((await $.mv((await $.v(C, "ods_inBANK_TEXT")), "AsString")), "/");
    L0["v_limit_text"] = (await $.mv((await $.v(C, "ods_inLIMIT_TESXT")), "AsString"));
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage2")), "CallProcedure", ["report_tax", [L0["v_coll_num"], L0["v_bank_text"]]])));
    await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
    await $.mcall((await $.v(C, "OracleDataSet1")), "Refresh", []);
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["get_vergul_tax", [L0["v_coll_num"], L0["v_limit_text"]]])));
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "rep"))]))))) {
      await $.set(C, "rep", (await $.mcall((await $.v(C, "trep")), "Create", [Self])));
    }
    {
      const $t9 = (await $.v(C, "rep"));
      { const $t10 = (await $.mv((await $.wv([$t9], "OracleDataSet1", C, false)), "RecordCount"));
        await $.wset([$t9], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t11 = true;
        for (;;) {
          if (!$t11) { await $.wset([$t9], "I", $.succ((await $.wv([$t9], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t11 = false;
          if (!($.ord((await $.wv([$t9], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t10))) break;
          { const $t12 = $.sub((await $.mv((await $.wv([$t9], "rep", C, false)), "ComponentCount")), 1);
            await $.wset([$t9], "a", 0, { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
            let $t13 = true;
            for (;;) {
              if (!$t13) { await $.wset([$t9], "a", $.succ((await $.wv([$t9], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), 1), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }); }
              $t13 = false;
              if (!($.ord((await $.wv([$t9], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))) <= $.ord($t12))) break;
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.mv((await $.wv([$t9], "rep", C, false)), "Components")), [(await $.wv([$t9], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))])), "ClassType")), (await $.wv([$t9], "TQRLabel", C, false)))))) {
                if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.wv([$t9], "rep", C, false)), "Components")), [(await $.wv([$t9], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))])), "Name")), (await $.mv((await $.wv([$t9], "OracleDataSet1COLUM", C, false)), "AsString"))))) {
                  await $.mset((await $.idx((await $.mv((await $.wv([$t9], "rep", C, false)), "Components")), [(await $.wv([$t9], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))])), "Caption", (await $.mv((await $.wv([$t9], "OracleDataSet1TEXT", C, false)), "AsString")));
                }
              }
              await $.tick();
            }
          }
          await $.mcall((await $.wv([$t9], "OracleDataSet1", C, false)), "Next", []);
          await $.tick();
        }
      }
    }
    await $.mcall((await $.mv((await $.v(C, "rep")), "ods_a")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "rep")), "ods_a")), "open", []);
    await $.mset((await $.mv((await $.v(C, "rep")), "QRLabel30")), "Caption", L0["v_coll_num"]);
    await $.mcall((await $.v(C, "rep")), "Preview", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "rep")), "ods_a")), "Session")), "Commit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "DateTimePicker2CloseUp", async function DateTimePicker2CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": '', "b": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["a"] = (await $.call(C, "formatdatetime", ["DD/MM/YYYY", (await $.mv((await $.v(C, "DateTimePicker3")), "DateTime"))]));
  L0["b"] = (await $.call(C, "formatdatetime", ["DD/MM/YYYY", (await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]));
  await $.stmt((await $.call(C, "showmessage", [(L0["a"])])));
  {
    const $t14 = (await $.v(C, "ods_in"));
    await $.stmt($.wcall([$t14], "close", [], C));
    await $.stmt((await $.wcall([$t14], "SetVariable", ["begin_dat", (await $.wv([$t14], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t14], "SetVariable", ["end_dat", (await $.wv([$t14], "b", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t14], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "DateTimePicker3CloseUp", async function DateTimePicker3CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": '', "b": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ToolButton1Click", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TTAXS", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TTAXS", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTAXS", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTAXS", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TTAXS", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTAXS", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTAXS", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTAXS", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TTAXS", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TTAXS", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTAXS", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTAXS", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "begin_dat": '', "end_dat": '', "text_net": '', "text": '', "text1": '', "text2": '', "text3": '', "text4": '', "text5": '', "text6": '', "text7": '', "text8": '', "text9": '', "text10": '', "text11": '', "sqt_text": '', "sert": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["begin_dat"] = (await $.call(C, "formatdatetime", ["DD/MM/YYYY", (await $.mv((await $.v(C, "DateTimePicker3")), "DateTime"))]));
  L0["end_dat"] = (await $.call(C, "formatdatetime", ["DD/MM/YYYY", (await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]));
  L0["sert"] = "and";
  {
    const $t15 = (await $.v(C, "ods_in"));
    await $.stmt($.wcall([$t15], "close", [], C));
    await $.stmt((await $.wcall([$t15], "SetVariable", ["begin_dat", (await $.wv([$t15], "begin_dat", { get: async () => L0["begin_dat"], set: async (v) => { L0["begin_dat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t15], "SetVariable", ["end_dat", (await $.wv([$t15], "end_dat", { get: async () => L0["end_dat"], set: async (v) => { L0["end_dat"] = v; }, local: true }, false))], C)));
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox1", C, false)), "Checked")))) {
      await $.wset([$t15], "text", $.add(" fleg like", "'A'"), { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text", "", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox2", C, false)), "Checked")))) {
      await $.wset([$t15], "text1", $.add("or fleg like", "'D'"), { get: async () => L0["text1"], set: async (v) => { L0["text1"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text1", "", { get: async () => L0["text1"], set: async (v) => { L0["text1"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox5", C, false)), "Checked")))) {
      await $.wset([$t15], "text4", $.add("or fleg like", "'AI'"), { get: async () => L0["text4"], set: async (v) => { L0["text4"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text4", "", { get: async () => L0["text4"], set: async (v) => { L0["text4"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox8", C, false)), "Checked")))) {
      await $.wset([$t15], "text5", $.add("or fleg like", "'DI'"), { get: async () => L0["text5"], set: async (v) => { L0["text5"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text5", "", { get: async () => L0["text5"], set: async (v) => { L0["text5"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox6", C, false)), "Checked")))) {
      await $.wset([$t15], "text6", $.add("or fleg like", "'AS'"), { get: async () => L0["text6"], set: async (v) => { L0["text6"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text6", "", { get: async () => L0["text6"], set: async (v) => { L0["text6"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox7", C, false)), "Checked")))) {
      await $.wset([$t15], "text7", $.add("or fleg like", "'DS'"), { get: async () => L0["text7"], set: async (v) => { L0["text7"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text7", "", { get: async () => L0["text7"], set: async (v) => { L0["text7"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox9", C, false)), "Checked")))) {
      await $.wset([$t15], "text8", $.add("or fleg like", "'GAI'"), { get: async () => L0["text8"], set: async (v) => { L0["text8"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text8", "", { get: async () => L0["text8"], set: async (v) => { L0["text8"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox10", C, false)), "Checked")))) {
      await $.wset([$t15], "text9", $.add("or fleg like", "'GDI'"), { get: async () => L0["text9"], set: async (v) => { L0["text9"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text9", "", { get: async () => L0["text9"], set: async (v) => { L0["text9"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox11", C, false)), "Checked")))) {
      await $.wset([$t15], "text10", $.add("or fleg like", "'GAS'"), { get: async () => L0["text10"], set: async (v) => { L0["text10"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text10", "", { get: async () => L0["text10"], set: async (v) => { L0["text10"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox12", C, false)), "Checked")))) {
      await $.wset([$t15], "text11", $.add("or fleg like", "'GDS'"), { get: async () => L0["text11"], set: async (v) => { L0["text11"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text11", "", { get: async () => L0["text11"], set: async (v) => { L0["text11"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox3", C, false)), "Checked")))) {
      await $.wset([$t15], "text2", $.add("or fleg like", "'GA'"), { get: async () => L0["text2"], set: async (v) => { L0["text2"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text2", "", { get: async () => L0["text2"], set: async (v) => { L0["text2"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t15], "XFCheckBox4", C, false)), "Checked")))) {
      await $.wset([$t15], "text3", $.add("or fleg like", "'GD'"), { get: async () => L0["text3"], set: async (v) => { L0["text3"] = v; }, local: true });
    } else {
      await $.wset([$t15], "text3", "", { get: async () => L0["text3"], set: async (v) => { L0["text3"] = v; }, local: true });
    }
    if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.eq((await $.wv([$t15], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false)), "")), async () => ($.eq((await $.wv([$t15], "text1", { get: async () => L0["text1"], set: async (v) => { L0["text1"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text2", { get: async () => L0["text2"], set: async (v) => { L0["text2"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text3", { get: async () => L0["text3"], set: async (v) => { L0["text3"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text4", { get: async () => L0["text4"], set: async (v) => { L0["text4"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text5", { get: async () => L0["text5"], set: async (v) => { L0["text5"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text6", { get: async () => L0["text6"], set: async (v) => { L0["text6"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text7", { get: async () => L0["text7"], set: async (v) => { L0["text7"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text8", { get: async () => L0["text8"], set: async (v) => { L0["text8"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text9", { get: async () => L0["text9"], set: async (v) => { L0["text9"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text10", { get: async () => L0["text10"], set: async (v) => { L0["text10"] = v; }, local: true }, false)), "")))), async () => ($.eq((await $.wv([$t15], "text11", { get: async () => L0["text11"], set: async (v) => { L0["text11"] = v; }, local: true }, false)), "")))))) {
      await $.stmt((await $.wcall([$t15], "showmessage", ["  Heç bir tip seçilməyib    !"], C)));
      return L0.result;
    } else {
      if ($.truthy($.ne((await $.wv([$t15], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false)), ""))) {
        await $.wset([$t15], "sqt_text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t15], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false)), " "), (await $.wv([$t15], "text1", { get: async () => L0["text1"], set: async (v) => { L0["text1"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text2", { get: async () => L0["text2"], set: async (v) => { L0["text2"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text3", { get: async () => L0["text3"], set: async (v) => { L0["text3"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text4", { get: async () => L0["text4"], set: async (v) => { L0["text4"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text5", { get: async () => L0["text5"], set: async (v) => { L0["text5"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text6", { get: async () => L0["text6"], set: async (v) => { L0["text6"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text7", { get: async () => L0["text7"], set: async (v) => { L0["text7"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text8", { get: async () => L0["text8"], set: async (v) => { L0["text8"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text9", { get: async () => L0["text9"], set: async (v) => { L0["text9"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text10", { get: async () => L0["text10"], set: async (v) => { L0["text10"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text11", { get: async () => L0["text11"], set: async (v) => { L0["text11"] = v; }, local: true }, false))), { get: async () => L0["sqt_text"], set: async (v) => { L0["sqt_text"] = v; }, local: true });
      } else {
        await $.wset([$t15], "text_net", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.wv([$t15], "text1", { get: async () => L0["text1"], set: async (v) => { L0["text1"] = v; }, local: true }, false)), ""), (await $.wv([$t15], "text2", { get: async () => L0["text2"], set: async (v) => { L0["text2"] = v; }, local: true }, false))), ""), (await $.wv([$t15], "text3", { get: async () => L0["text3"], set: async (v) => { L0["text3"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text4", { get: async () => L0["text4"], set: async (v) => { L0["text4"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text5", { get: async () => L0["text5"], set: async (v) => { L0["text5"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text6", { get: async () => L0["text6"], set: async (v) => { L0["text6"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text7", { get: async () => L0["text7"], set: async (v) => { L0["text7"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text8", { get: async () => L0["text8"], set: async (v) => { L0["text8"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text9", { get: async () => L0["text9"], set: async (v) => { L0["text9"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text10", { get: async () => L0["text10"], set: async (v) => { L0["text10"] = v; }, local: true }, false))), " "), (await $.wv([$t15], "text11", { get: async () => L0["text11"], set: async (v) => { L0["text11"] = v; }, local: true }, false))), { get: async () => L0["text_net"], set: async (v) => { L0["text_net"] = v; }, local: true });
        await $.wset([$t15], "sqt_text", (await $.wcall([$t15], "copy", [(await $.wv([$t15], "text_net", { get: async () => L0["text_net"], set: async (v) => { L0["text_net"] = v; }, local: true }, false)), $.add((await $.wcall([$t15], "ansipos", ["or", (await $.wv([$t15], "text_net", { get: async () => L0["text_net"], set: async (v) => { L0["text_net"] = v; }, local: true }, false))], C)), (await $.wcall([$t15], "length", ["or"], C))), (await $.wcall([$t15], "length", [(await $.wv([$t15], "text_net", { get: async () => L0["text_net"], set: async (v) => { L0["text_net"] = v; }, local: true }, false))], C))], C)), { get: async () => L0["sqt_text"], set: async (v) => { L0["sqt_text"] = v; }, local: true });
      }
      { const $t16 = await $.iset((await $.mv((await $.wv([$t15], "ods_in", C, false)), "SQL")), [20], $.add($.add($.add($.add((await $.wv([$t15], "sert", { get: async () => L0["sert"], set: async (v) => { L0["sert"] = v; }, local: true }, false)), " "), "("), (await $.wv([$t15], "sqt_text", { get: async () => L0["sqt_text"], set: async (v) => { L0["sqt_text"] = v; }, local: true }, false))), ")")); if ($t16 !== undefined) { await $.mset((await $.wv([$t15], "ods_in", C, false)), "SQL", $t16); } }
      await $.stmt($.wcall([$t15], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFPanel1")), "Visible", $.not((await $.mv((await $.v(C, "XFPanel1")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "XDBGrid1DblClick", async function XDBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Form3")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTAXS", "XFCheckBox1Click", async function XFCheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ToolButton1Click", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
