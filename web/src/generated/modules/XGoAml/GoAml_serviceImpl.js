// Generated from GoAml_serviceImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("GoAml_serviceImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "GoAml_ServiceProject_TLB", "StdVcl", "ExtCtrls", "StdCtrls", "ComCtrls", "ToolWin", "XFSCtrls", "ExtDlgs", "DBGridEh", "DBCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Grids", "XDBGrids", "DB", "OracleData", "Menus", "DBGrids", "ImgList", "CMExcelExport", "Buttons", "Variants", "OleServer", "WordXP", "Shlobj", "ComObj", "ComServ", "sboapiDataModuleImpl", "DatUnit", "ForumEditUnit", "UnitHuquqi", "UnitFiziki", "UnitMXX"]);
  const C = [U];
  U.defClass("TGoAml_ServiceForm", "TActiveForm", {"worddocument": {"name": "WordDocument", "type": "TWordDocument"}, "pop_ctr101": {"name": "Pop_CTR101", "type": "TPopupMenu"}, "ctr": {"name": "CTR", "type": "TMenuItem"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "pop_file": {"name": "Pop_file", "type": "TPopupMenu"}, "fayl": {"name": "Fayl", "type": "TMenuItem"}, "pop_str201": {"name": "Pop_STR201", "type": "TPopupMenu"}, "str": {"name": "STR", "type": "TMenuItem"}, "pm_re_errors": {"name": "PM_RE_Errors", "type": "TPopupMenu"}, "mizl1": {"name": "mizl1", "type": "TMenuItem"}, "redakte": {"name": "Redakte", "type": "TPopupMenu"}, "yenile1": {"name": "Yenile1", "type": "TMenuItem"}, "tpr11": {"name": "tpr11", "type": "TMenuItem"}, "pr21": {"name": "PR21", "type": "TMenuItem"}, "pr31": {"name": "PR31", "type": "TMenuItem"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "excel1": {"name": "Excel1", "type": "TMenuItem"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "re_errors": {"name": "RE_Errors", "type": "TRichEdit"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "dbgridtransactions1": {"name": "DBGridTransactions1", "type": "TDBGrid"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel21": {"name": "XFPanel21", "type": "TXFPanel"}, "dtp1": {"name": "DTP1", "type": "TDateTimePicker"}, "dtp2": {"name": "DTP2", "type": "TDateTimePicker"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "date_begin": {"name": "Date_begin", "type": "TDateTimePicker"}, "date_end": {"name": "Date_end", "type": "TDateTimePicker"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "cap1": {"name": "Cap1", "type": "TMenuItem"}, "excel2": {"name": "Excel2", "type": "TMenuItem"}, "cmexcelexport2": {"name": "CMExcelExport2", "type": "TCMExcelExport"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "redakt1": {"name": "Redakt1", "type": "TMenuItem"}, "muq1": {"name": "muq1", "type": "TMenuItem"}, "wordapplication": {"name": "WordApplication", "type": "TWordApplication"}, "cap2": {"name": "cap2", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IGoAml_ServiceEvents"}}, {});
  U.init(async () => {
    U.var_("GoAml_ServiceForm", null, "TGoAml_ServiceForm");
    U.var_("er_count", 0, "Integer");
    U.var_("v_begdat", 0, "TDate");
    U.var_("v_enddat", 0, "TDate");
    U.var_("v_dat", 0, "TDate");
    U.var_("v_date1", 0, "TDate");
    U.var_("v_date2", 0, "TDate");
    U.var_("FilePAth", '', "String");
    U.var_("f", null, "TextFile");
    U.var_("dey", '', "String");
    U.var_("dey1", '', "String");
    U.var_("dey2", '', "String");
    U.var_("dey3", '', "String");
    U.var_("dey4", '', "String");
    U.var_("a", $.sarr(), "mas");
    U.var_("d_cust_type", 0, "integer");
    U.var_("c_cust_type", 0, "integer");
    U.var_("dc_custtype", false, "boolean");
    U.var_("v_inout", 0, "integer");
    U.var_("vid_op", 0, "integer");
    U.var_("tr_id", 0, "integer");
    U.var_("trasnfers_trid", 0, "integer");
    U.var_("pop_ctrtpr_clik", 0, "integer");
    U.var_("word_type", 0, "integer");
    U.var_("TemplID", 0, "Integer");
  });
  U.method("TGoAml_ServiceForm", "createfiles", async function createfiles(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "formatteddatetime": '', "dir": '', "rep_code": ''};
  { const $t1 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "FieldByName", ["dk"])), "AsInteger"));
    if ($.eq($t1, 1)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), (await $.mv((await $.v(C, "DM_goAml")), "DS_maindbt"))))) {
        if ($.truthy((await $.and_(($.eq((await $.v(C, "pop_ctrtpr_clik")), 1)), async () => ((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString")), "TPR1")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString")), "TPR2")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString")), "TPR3"))))))))) {
          await $.set(C, "dey", "CTR");
        } else {
          await $.set(C, "dey", ((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString"))));
        }
        await $.set(C, "dey1", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsString")));
        await $.set(C, "dey2", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["DCUSTID"])), "AsString")));
        await $.set(C, "dey3", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["KCUSTID"])), "AsString")));
        await $.set(C, "dey4", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["NOMDCUSTID"])), "AsString")));
      }
    }
    else if ($.eq($t1, 2)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), (await $.mv((await $.v(C, "DM_goAml")), "DS_Main"))))) {
        if ($.truthy((await $.and_(($.eq((await $.v(C, "pop_ctrtpr_clik")), 1)), async () => ((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString")), "TPR1")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString")), "TPR2")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString")), "TPR3"))))))))) {
          await $.set(C, "dey", "CTR");
        } else {
          await $.set(C, "dey", ((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString"))));
        }
        await $.set(C, "dey1", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsString")));
        await $.set(C, "dey2", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["DCUSTID"])), "AsString")));
        await $.set(C, "dey3", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["KCUSTID"])), "AsString")));
        await $.set(C, "dey4", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["NOMDCUSTID"])), "AsString")));
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), (await $.mv((await $.v(C, "DM_goAml")), "DSRC_MAIN201"))))) {
    await $.set(C, "dey", ((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString"))));
    await $.set(C, "dey1", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsString")));
    await $.set(C, "dey2", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["DCUSTID"])), "AsString")));
    await $.set(C, "dey3", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["KCUSTID"])), "AsString")));
    await $.set(C, "dey4", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["NOMDCUSTID"])), "AsString")));
  }
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [(await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_FilesPathDESCRIPTION")), "AsWideString"))]))))) {
    await $.stmt((await $.call(C, "MkDir", [(await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_FilesPathDESCRIPTION")), "AsWideString"))])));
  }
  await $.stmt((await $.call(C, "DateTimeToString", [L0["formatteddatetime"], "yyyyddmm", (await $.mv((await $.v(C, "DTP1")), "Date"))])));
  L0["dir"] = $.add($.add((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_FilesPathDESCRIPTION")), "AsWideString")), L0["formatteddatetime"]), "\\");
  if ($.truthy($.not((await $.call(C, "DirectoryExists", [L0["dir"]]))))) {
    await $.stmt((await $.call(C, "MkDir", [L0["dir"]])));
  }
  await $.stmt((await $.call(C, "DateTimeToString", [L0["formatteddatetime"], "yyyyddmm", (await $.mv((await $.v(C, "DTP1")), "Date"))])));
  await $.set(C, "FilePAth", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(L0["dir"], (await $.v(C, "dey"))), "_"), (await $.v(C, "dey2"))), "_"), (await $.v(C, "dey3"))), "_"), (await $.v(C, "dey4"))), "_"), (await $.v(C, "dey1"))), ".xml"));
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t2) => { await $.set(C, "f", $t2); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Rewrite", [$.ref(async () => (await $.v(C, "f")), async ($t3) => { await $.set(C, "f", $t3); })])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t4) => { await $.set(C, "f", $t4); })])));
  await $.stmt($.call(C, "CreateXmlFile", []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "WriteLnString", async function WriteLnString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t5) => { await $.set(C, "f", $t5); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t6) => { await $.set(C, "f", $t6); })])));
  await $.stmt((await $.call(C, "Writeln", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L0["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t7) => { await $.set(C, "f", $t7); })])));
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TGoAml_ServiceForm", "WriteString", async function WriteString(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => (await $.v(C, "f")), async ($t8) => { await $.set(C, "f", $t8); }), (await $.v(C, "FilePAth"))])));
  await $.stmt((await $.call(C, "Append", [$.ref(async () => (await $.v(C, "f")), async ($t9) => { await $.set(C, "f", $t9); })])));
  await $.stmt((await $.call(C, "Write", [(await $.v(C, "f")), (await $.call(C, "UTF8Encode", [(await $.call(C, "StringReplace", [L0["s"], $.add("\r", "\n"), "", [(await $.v(C, "rfReplaceAll"))]]))]))])));
  await $.stmt((await $.call(C, "Closefile", [$.ref(async () => (await $.v(C, "f")), async ($t10) => { await $.set(C, "f", $t10); })])));
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TGoAml_ServiceForm", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "i1": 0, "i2": 0, "i3": 0, "i4": 0, "i5": 0, "i6": 0, "i7": 0, "i8": 0, "i9": 0, "i10": 0, "i11": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_date1", (await $.mv((await $.v(C, "Date_begin")), "Date")));
  await $.set(C, "v_date2", (await $.mv((await $.v(C, "Date_end")), "Date")));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_subheli")), "Session")), "Commit", []);
  {
    const $t11 = (await $.v(C, "DM_goAml"));
    await $.mcall((await $.wv([$t11], "ods_sub1", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub1", C, false)), "SetVariable", ["v_dat1", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_begin", C, false)), "DateTime"))], C))])));
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub1", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub1", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub2", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub2", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub2", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub3", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub3", C, false)), "SetVariable", ["v_dat1", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_begin", C, false)), "DateTime"))], C))])));
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub3", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub3", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub4", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub4", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub4", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub5", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub5", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub5", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub6", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub6", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub6", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub7", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub7", C, false)), "SetVariable", ["v_dat1", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_begin", C, false)), "DateTime"))], C))])));
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub7", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub7", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub8", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub8", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub8", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub9", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub9", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub9", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub10", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub10", C, false)), "SetVariable", ["v_dat1", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_begin", C, false)), "DateTime"))], C))])));
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub10", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub10", C, false)), "Open", []);
    await $.mcall((await $.wv([$t11], "ods_sub11", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub11", C, false)), "SetVariable", ["v_dat1", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_begin", C, false)), "DateTime"))], C))])));
    await $.stmt((await $.mcall((await $.wv([$t11], "ods_sub11", C, false)), "SetVariable", ["v_dat2", (await $.wcall([$t11], "trunc", [(await $.mv((await $.wv([$t11], "Date_end", C, false)), "DateTime"))], C))])));
    await $.mcall((await $.wv([$t11], "ods_sub11", C, false)), "Open", []);
  }
  {
    const $t12 = (await $.v(C, "DM_goAml"));
    await $.mcall((await $.wv([$t12], "ods_sub1", C, false)), "first", []);
    { const $t13 = $.sub((await $.mv((await $.wv([$t12], "ods_sub1", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I1", 0, { get: async () => L0["i1"], set: async (v) => { L0["i1"] = v; }, local: true });
      let $t14 = true;
      for (;;) {
        if (!$t14) { await $.wset([$t12], "I1", $.succ((await $.wv([$t12], "I1", { get: async () => L0["i1"], set: async (v) => { L0["i1"] = v; }, local: true }, false)), 1), { get: async () => L0["i1"], set: async (v) => { L0["i1"] = v; }, local: true }); }
        $t14 = false;
        if (!($.ord((await $.wv([$t12], "I1", { get: async () => L0["i1"], set: async (v) => { L0["i1"] = v; }, local: true }, false))) <= $.ord($t13))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub1", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub1", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub1", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub1", C, false)), "FieldByName", ["description"])), "AsString")), (-(1)), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub1", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub1", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub2", C, false)), "first", []);
    { const $t15 = $.sub((await $.mv((await $.wv([$t12], "ods_sub2", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I2", 0, { get: async () => L0["i2"], set: async (v) => { L0["i2"] = v; }, local: true });
      let $t16 = true;
      for (;;) {
        if (!$t16) { await $.wset([$t12], "I2", $.succ((await $.wv([$t12], "I2", { get: async () => L0["i2"], set: async (v) => { L0["i2"] = v; }, local: true }, false)), 1), { get: async () => L0["i2"], set: async (v) => { L0["i2"] = v; }, local: true }); }
        $t16 = false;
        if (!($.ord((await $.wv([$t12], "I2", { get: async () => L0["i2"], set: async (v) => { L0["i2"] = v; }, local: true }, false))) <= $.ord($t15))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub2", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub2", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub2", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub2", C, false)), "FieldByName", ["description"])), "AsString")), (-(1)), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub2", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub2", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub3", C, false)), "first", []);
    { const $t17 = $.sub((await $.mv((await $.wv([$t12], "ods_sub3", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I3", 0, { get: async () => L0["i3"], set: async (v) => { L0["i3"] = v; }, local: true });
      let $t18 = true;
      for (;;) {
        if (!$t18) { await $.wset([$t12], "I3", $.succ((await $.wv([$t12], "I3", { get: async () => L0["i3"], set: async (v) => { L0["i3"] = v; }, local: true }, false)), 1), { get: async () => L0["i3"], set: async (v) => { L0["i3"] = v; }, local: true }); }
        $t18 = false;
        if (!($.ord((await $.wv([$t12], "I3", { get: async () => L0["i3"], set: async (v) => { L0["i3"] = v; }, local: true }, false))) <= $.ord($t17))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub3", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub3", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub3", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub3", C, false)), "FieldByName", ["description"])), "AsString")), (-(1)), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub3", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub3", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub4", C, false)), "first", []);
    { const $t19 = $.sub((await $.mv((await $.wv([$t12], "ods_sub4", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I4", 0, { get: async () => L0["i4"], set: async (v) => { L0["i4"] = v; }, local: true });
      let $t20 = true;
      for (;;) {
        if (!$t20) { await $.wset([$t12], "I4", $.succ((await $.wv([$t12], "I4", { get: async () => L0["i4"], set: async (v) => { L0["i4"] = v; }, local: true }, false)), 1), { get: async () => L0["i4"], set: async (v) => { L0["i4"] = v; }, local: true }); }
        $t20 = false;
        if (!($.ord((await $.wv([$t12], "I4", { get: async () => L0["i4"], set: async (v) => { L0["i4"] = v; }, local: true }, false))) <= $.ord($t19))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub4", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub4", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub4", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub4", C, false)), "FieldByName", ["description"])), "AsString")), (-(1)), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub4", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub4", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub5", C, false)), "first", []);
    { const $t21 = $.sub((await $.mv((await $.wv([$t12], "ods_sub5", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I5", 0, { get: async () => L0["i5"], set: async (v) => { L0["i5"] = v; }, local: true });
      let $t22 = true;
      for (;;) {
        if (!$t22) { await $.wset([$t12], "I5", $.succ((await $.wv([$t12], "I5", { get: async () => L0["i5"], set: async (v) => { L0["i5"] = v; }, local: true }, false)), 1), { get: async () => L0["i5"], set: async (v) => { L0["i5"] = v; }, local: true }); }
        $t22 = false;
        if (!($.ord((await $.wv([$t12], "I5", { get: async () => L0["i5"], set: async (v) => { L0["i5"] = v; }, local: true }, false))) <= $.ord($t21))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub5", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub5", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub5", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub5", C, false)), "FieldByName", ["description"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub5", C, false)), "FieldByName", ["acc_id"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub5", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub5", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub6", C, false)), "first", []);
    { const $t23 = $.sub((await $.mv((await $.wv([$t12], "ods_sub6", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I6", 0, { get: async () => L0["i6"], set: async (v) => { L0["i6"] = v; }, local: true });
      let $t24 = true;
      for (;;) {
        if (!$t24) { await $.wset([$t12], "I6", $.succ((await $.wv([$t12], "I6", { get: async () => L0["i6"], set: async (v) => { L0["i6"] = v; }, local: true }, false)), 1), { get: async () => L0["i6"], set: async (v) => { L0["i6"] = v; }, local: true }); }
        $t24 = false;
        if (!($.ord((await $.wv([$t12], "I6", { get: async () => L0["i6"], set: async (v) => { L0["i6"] = v; }, local: true }, false))) <= $.ord($t23))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub6", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub6", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub6", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub6", C, false)), "FieldByName", ["description"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub6", C, false)), "FieldByName", ["acc_id"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub6", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub6", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub7", C, false)), "first", []);
    { const $t25 = $.sub((await $.mv((await $.wv([$t12], "ods_sub7", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I7", 0, { get: async () => L0["i7"], set: async (v) => { L0["i7"] = v; }, local: true });
      let $t26 = true;
      for (;;) {
        if (!$t26) { await $.wset([$t12], "I7", $.succ((await $.wv([$t12], "I7", { get: async () => L0["i7"], set: async (v) => { L0["i7"] = v; }, local: true }, false)), 1), { get: async () => L0["i7"], set: async (v) => { L0["i7"] = v; }, local: true }); }
        $t26 = false;
        if (!($.ord((await $.wv([$t12], "I7", { get: async () => L0["i7"], set: async (v) => { L0["i7"] = v; }, local: true }, false))) <= $.ord($t25))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub7", C, false)), "FieldByName", ["custid"])), "AsVariant")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub7", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub7", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub7", C, false)), "FieldByName", ["description"])), "AsString")), (-(1)), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub7", C, false)), "FieldByName", ["type"])), "AsVariant"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub7", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub8", C, false)), "first", []);
    { const $t27 = $.sub((await $.mv((await $.wv([$t12], "ods_sub8", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I8", 0, { get: async () => L0["i8"], set: async (v) => { L0["i8"] = v; }, local: true });
      let $t28 = true;
      for (;;) {
        if (!$t28) { await $.wset([$t12], "I8", $.succ((await $.wv([$t12], "I8", { get: async () => L0["i8"], set: async (v) => { L0["i8"] = v; }, local: true }, false)), 1), { get: async () => L0["i8"], set: async (v) => { L0["i8"] = v; }, local: true }); }
        $t28 = false;
        if (!($.ord((await $.wv([$t12], "I8", { get: async () => L0["i8"], set: async (v) => { L0["i8"] = v; }, local: true }, false))) <= $.ord($t27))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub8", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub8", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub8", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub8", C, false)), "FieldByName", ["description"])), "AsString")), (-(1)), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub8", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub8", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub9", C, false)), "first", []);
    { const $t29 = $.sub((await $.mv((await $.wv([$t12], "ods_sub9", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I9", 0, { get: async () => L0["i9"], set: async (v) => { L0["i9"] = v; }, local: true });
      let $t30 = true;
      for (;;) {
        if (!$t30) { await $.wset([$t12], "I9", $.succ((await $.wv([$t12], "I9", { get: async () => L0["i9"], set: async (v) => { L0["i9"] = v; }, local: true }, false)), 1), { get: async () => L0["i9"], set: async (v) => { L0["i9"] = v; }, local: true }); }
        $t30 = false;
        if (!($.ord((await $.wv([$t12], "I9", { get: async () => L0["i9"], set: async (v) => { L0["i9"] = v; }, local: true }, false))) <= $.ord($t29))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub9", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub9", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub9", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub9", C, false)), "FieldByName", ["description"])), "AsString")), (-(1)), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub9", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub9", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub10", C, false)), "first", []);
    { const $t31 = $.sub((await $.mv((await $.wv([$t12], "ods_sub10", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I10", 0, { get: async () => L0["i10"], set: async (v) => { L0["i10"] = v; }, local: true });
      let $t32 = true;
      for (;;) {
        if (!$t32) { await $.wset([$t12], "I10", $.succ((await $.wv([$t12], "I10", { get: async () => L0["i10"], set: async (v) => { L0["i10"] = v; }, local: true }, false)), 1), { get: async () => L0["i10"], set: async (v) => { L0["i10"] = v; }, local: true }); }
        $t32 = false;
        if (!($.ord((await $.wv([$t12], "I10", { get: async () => L0["i10"], set: async (v) => { L0["i10"] = v; }, local: true }, false))) <= $.ord($t31))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub10", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub10", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub10", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub10", C, false)), "FieldByName", ["description"])), "AsString")), (-(1)), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub10", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub10", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.wv([$t12], "ods_sub11", C, false)), "first", []);
    { const $t33 = $.sub((await $.mv((await $.wv([$t12], "ods_sub11", C, false)), "RecordCount")), 1);
      await $.wset([$t12], "I11", 0, { get: async () => L0["i11"], set: async (v) => { L0["i11"] = v; }, local: true });
      let $t34 = true;
      for (;;) {
        if (!$t34) { await $.wset([$t12], "I11", $.succ((await $.wv([$t12], "I11", { get: async () => L0["i11"], set: async (v) => { L0["i11"] = v; }, local: true }, false)), 1), { get: async () => L0["i11"], set: async (v) => { L0["i11"] = v; }, local: true }); }
        $t34 = false;
        if (!($.ord((await $.wv([$t12], "I11", { get: async () => L0["i11"], set: async (v) => { L0["i11"] = v; }, local: true }, false))) <= $.ord($t33))) break;
        await $.stmt((await $.mcall((await $.wv([$t12], "PG_PCustService", C, false)), "CallProcedure", ["add_subheli", [(await $.mv((await $.mcall((await $.wv([$t12], "ods_sub11", C, false)), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub11", C, false)), "FieldByName", ["cust_name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub11", C, false)), "FieldByName", ["ammount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub11", C, false)), "FieldByName", ["description"])), "AsString")), (-(1)), (await $.mv((await $.mcall((await $.wv([$t12], "ods_sub11", C, false)), "FieldByName", ["type"])), "AsInteger"))]])));
        await $.mcall((await $.wv([$t12], "ods_sub10", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.mcall((await $.mv((await $.wv([$t12], "DM_goAml", C, false)), "Ods_subheli")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Yenile1Click", async function Yenile1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormEdit")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "CreateXmlFile", async function CreateXmlFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "er_count", 0);
  await $.mcall((await $.v(C, "RE_Errors")), "Clear", []);
  {
    const $t35 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport"));
    await $.stmt((await $.wcall([$t35], "WriteLnString", ["<report>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t35], "FieldByName", ["rentity_id"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t35], "WriteString", ["<rentity_id>"], C)));
      await $.stmt((await $.wcall([$t35], "WriteString", [(await $.mv((await $.wcall([$t35], "FieldByName", ["rentity_id"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t35], "WriteLnString", ["</rentity_id>"], C)));
    } else {
      await $.wset([$t35], "er_count", $.add((await $.wv([$t35], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t35], "RE_Errors", C, false)), "Lines")), "Add", ["Fayl yarnmadi! Səhvlər: rentity_id"])));
    }
    await $.stmt((await $.wcall([$t35], "WriteString", ["<rentity_branch>"], C)));
    await $.stmt((await $.wcall([$t35], "WriteString", [(await $.mv((await $.wcall([$t35], "FieldByName", ["rentity_branch"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t35], "WriteLnString", ["</rentity_branch>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t35], "FieldByName", ["submission_code"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t35], "WriteString", ["<submission_code>"], C)));
      await $.stmt((await $.wcall([$t35], "WriteString", [(await $.mv((await $.wcall([$t35], "FieldByName", ["submission_code"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t35], "WriteLnString", ["</submission_code>"], C)));
    } else {
      await $.wset([$t35], "er_count", $.add((await $.wv([$t35], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t35], "RE_Errors", C, false)), "Lines")), "Add", ["Göndərilmə tipi"])));
    }
    if ($.truthy((await $.and_(($.eq((await $.wv([$t35], "pop_ctrtpr_clik", C, false)), 1)), async () => ((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t35], "DBGrid2", C, false)), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString")), "TPR1")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t35], "DBGrid2", C, false)), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString")), "TPR2")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t35], "DBGrid2", C, false)), "DataSource")), "DataSet")), "FieldByName", ["report_code"])), "AsString")), "TPR3"))))))))) {
      await $.stmt((await $.wcall([$t35], "WriteString", ["<report_code>"], C)));
      await $.stmt((await $.wcall([$t35], "WriteString", ["CTR"], C)));
      await $.stmt((await $.wcall([$t35], "WriteLnString", ["</report_code>"], C)));
    } else {
      if ($.truthy($.not(((await $.mv((await $.wcall([$t35], "FieldByName", ["report_code"], C)), "isNUll")))))) {
        await $.stmt((await $.wcall([$t35], "WriteString", ["<report_code>"], C)));
        await $.stmt((await $.wcall([$t35], "WriteString", [(await $.mv((await $.wcall([$t35], "FieldByName", ["report_code"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t35], "WriteLnString", ["</report_code>"], C)));
      } else {
        await $.wset([$t35], "er_count", $.add((await $.wv([$t35], "er_count", C, false)), 1), C);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t35], "RE_Errors", C, false)), "Lines")), "Add", ["report_code"])));
      }
    }
    await $.stmt((await $.wcall([$t35], "WriteString", ["<entity_reference>"], C)));
    await $.stmt((await $.wcall([$t35], "WriteString", [(await $.mv((await $.wcall([$t35], "FieldByName", ["entity_reference"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t35], "WriteLnString", ["</entity_reference>"], C)));
    await $.stmt((await $.wcall([$t35], "WriteString", ["<fiu_ref_number>"], C)));
    await $.stmt((await $.wcall([$t35], "WriteString", [(await $.mv((await $.wcall([$t35], "FieldByName", ["fiu_ref_number"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t35], "WriteLnString", ["</fiu_ref_number>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t35], "FieldByName", ["submission_date"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t35], "WriteString", ["<submission_date>"], C)));
      await $.stmt((await $.wcall([$t35], "WriteString", [(await $.mv((await $.wcall([$t35], "FieldByName", ["submission_date"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t35], "WriteLnString", ["</submission_date>"], C)));
    } else {
      await $.wset([$t35], "er_count", $.add((await $.wv([$t35], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t35], "RE_Errors", C, false)), "Lines")), "Add", ["submission_date"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t35], "FieldByName", ["currency_code_local"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t35], "WriteString", ["<currency_code_local>"], C)));
      await $.stmt((await $.wcall([$t35], "WriteString", [(await $.mv((await $.wcall([$t35], "FieldByName", ["currency_code_local"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t35], "WriteLnString", ["</currency_code_local>"], C)));
    } else {
      await $.wset([$t35], "er_count", $.add((await $.wv([$t35], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t35], "RE_Errors", C, false)), "Lines")), "Add", ["currency_code_local"])));
    }
    await $.stmt((await $.wcall([$t35], "WriteString", ["<reporting_person>"], C)));
    await $.mcall((await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_TPERSON")), "close", []);
    await $.mcall((await $.mv((await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Clear", []);
    await $.mset((await $.mv((await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Text", "select * from mmx_userinfo where userid=uid");
    await $.mcall((await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_TPERSON")), "Open", []);
    await $.stmt($.wcall([$t35], "NODE_TPERSON_1", [], C));
    await $.stmt((await $.wcall([$t35], "NODE_PHONES", [(await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_TPERSON"))], C)));
    await $.stmt($.wcall([$t35], "NODE_TPERSON_2", [], C));
    await $.mcall((await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_TPERSON")), "close", []);
    await $.mcall((await $.mv((await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Clear", []);
    await $.mset((await $.mv((await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Text", "select * from mmx_userinfo where userid=uid");
    await $.mcall((await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_TPERSON")), "Open", []);
    await $.stmt((await $.wcall([$t35], "WriteLnString", ["</reporting_person>"], C)));
    await $.stmt((await $.wcall([$t35], "WriteString", ["<location>"], C)));
    await $.stmt((await $.wcall([$t35], "NODE_LocationADDRESS", [(await $.mv((await $.wv([$t35], "DM_goAml", C, false)), "ODS_LOCATION"))], C)));
    await $.stmt((await $.wcall([$t35], "WriteString", ["</location>"], C)));
    await $.stmt((await $.wcall([$t35], "WriteString", ["<reason>"], C)));
    await $.stmt((await $.wcall([$t35], "WriteLnString", ["</reason>"], C)));
    await $.stmt((await $.wcall([$t35], "WriteString", ["<action>"], C)));
    await $.stmt((await $.wcall([$t35], "WriteString", [(await $.mv((await $.wcall([$t35], "FieldByName", ["action"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t35], "WriteLnString", ["</action>"], C)));
    await $.stmt($.wcall([$t35], "NODE_TTRANSACTION", [], C));
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t35], "RE_Errors", C, false)), "Lines")), "Add", [$.add((await $.wcall([$t35], "inttostr", [(await $.wv([$t35], "er_count", C, false))], C)), " sayda səhv tapıldı!")])));
    await $.stmt((await $.wcall([$t35], "WriteString", ["</report>"], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_FORM_in", async function NODE_FORM_in(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t36 = (await $.v(C, "DM_goAml"));
    const $t37 = (await $.wv([$t36], "ods_incoming", C, false));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["<t_from>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<from_funds_code>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["A"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</from_funds_code>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<from_account>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<institution_name>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", [(await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["FIRSTNAME"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</institution_name>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<swift>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", [(await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["BANKSWIFT"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</swift>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<non_bank_institution>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["false"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</non_bank_institution>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<account>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", [(await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["ACCNUM"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</account>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<iban>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", [(await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["ACCNUM"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</iban>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<signatory>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<is_primary>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["1"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</is_primary>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<t_person>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<first_name>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", [(await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["FIRSTNAME"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</first_name>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<last_name>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", [(await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["FIRSTNAME"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</last_name>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</t_person>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</signatory>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</from_account>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["<from_country>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteString", ["AZ"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</from_country>"], C)));
    await $.stmt((await $.wcall([$t36, $t37], "WriteLnString", ["</t_from>"], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_FORM_out", async function NODE_FORM_out(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t38 = (await $.v(C, "DM_goAml"));
    const $t39 = (await $.wv([$t38], "ods_incoming", C, false));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["<t_to>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<to_funds_code>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["A"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</to_funds_code>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<to_account>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<institution_name>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", [(await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["FIRSTNAME"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</institution_name>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<swift>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", [(await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["BANKSWIFT"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</swift>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<non_bank_institution>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["false"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</non_bank_institution>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<account>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", [(await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["ACCNUM"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</account>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<iban>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", [(await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["ACCNUM"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</iban>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<signatory>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<is_primary>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["1"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</is_primary>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<t_person>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<first_name>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", [(await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["FIRSTNAME"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</first_name>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<last_name>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", [(await $.mv((await $.wcall([$t38, $t39], "FieldByName", ["FIRSTNAME"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</last_name>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</t_person>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</signatory>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</to_account>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["<to_country>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteString", ["AZ"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</to_country>"], C)));
    await $.stmt((await $.wcall([$t38, $t39], "WriteLnString", ["</t_to>"], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_FORM_PERSON", async function NODE_FORM_PERSON(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "WriteString", ["<from_person>"])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TACCOUNT")), "FieldByName", ["cust_id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
  await $.set(C, "tr_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger")));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "SetVariable", ["v_transid", (await $.v(C, "tr_id"))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "open", []);
  if ($.truthy((await $.and_($.not(((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1cCUSTID")), "IsNull")))), async () => $.not(((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMdCUSTID")), "IsNull")))))))) {
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "SetVariable", ["v_cuid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMdCUSTID")), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2CUST_TYPE")), "AsString")), "0"))) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMdCUSTID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
      if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "isNUll")))) {
        await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
    } else {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMdCUSTID")), "AsString"))));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
    }
  } else {
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "SetVariable", ["v_cuid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1cCUSTID")), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2CUST_TYPE")), "AsString")), "0"))) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1cCUSTID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
      if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "isNUll")))) {
        await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
    } else {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1cCUSTID")), "AsString"))));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
    }
  }
  await $.stmt($.call(C, "NODE_TPERSON", []));
  await $.stmt((await $.call(C, "WriteLnString", ["</from_person>"])));
  await $.stmt((await $.call(C, "WriteString", ["<from_country>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "FieldByName", ["from_country"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</from_country>"])));
  await $.stmt((await $.call(C, "WriteLnString", ["</t_from_my_client>"])));
  await $.stmt((await $.call(C, "WriteString", ["<t_to_my_client>"])));
  await $.stmt((await $.call(C, "WriteString", ["<to_funds_code>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "FieldByName", ["to_funds_code"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</to_funds_code>"])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_TTRANSACTION", async function NODE_TTRANSACTION(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.call(C, "WriteLnString", ["<transaction>"])));
  {
    const $t40 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport"));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t40], "FieldByName", ["transactionnumber"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t40], "WriteString", ["<transactionnumber>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["transactionnumber"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</transactionnumber>"], C)));
    } else {
      await $.wset([$t40], "er_count", $.add((await $.wv([$t40], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "RE_Errors", C, false)), "Lines")), "Add", ["Əməliyyatın İD-si"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t40], "FieldByName", ["internal_ref_number"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t40], "WriteString", ["<internal_ref_number>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["internal_ref_number"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</internal_ref_number>"], C)));
    }
    await $.stmt((await $.wcall([$t40], "WriteString", ["<transaction_description>"], C)));
    await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["transaction_description"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t40], "WriteLnString", ["</transaction_description>"], C)));
    await $.stmt((await $.wcall([$t40], "WriteString", ["<date_transaction>"], C)));
    await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["date_transaction"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t40], "WriteLnString", ["</date_transaction>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t40], "FieldByName", ["transmode_code"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t40], "WriteString", ["<transmode_code>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["transmode_code"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</transmode_code>"], C)));
    } else {
      await $.wset([$t40], "er_count", $.add((await $.wv([$t40], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "RE_Errors", C, false)), "Lines")), "Add", ["Əməliyyatın növü"])));
    }
    if ($.truthy($.eq((await $.wv([$t40], "vid_op", C, false)), 7))) {
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["D_FOREIGN_CURRENCY_CODE"])), "AsString")), "AZN"))) {
        if ($.truthy($.not(((await $.mv((await $.wcall([$t40], "FieldByName", ["amount_local"], C)), "isNUll")))))) {
          await $.stmt((await $.wcall([$t40], "WriteString", ["<amount_local>"], C)));
          await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["amount_local"], C)), "AsString"))], C)));
          await $.stmt((await $.wcall([$t40], "WriteLnString", ["</amount_local>"], C)));
        } else {
          await $.wset([$t40], "er_count", $.add((await $.wv([$t40], "er_count", C, false)), 1), C);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "RE_Errors", C, false)), "Lines")), "Add", ["amount_local"])));
        }
      }
    }
    if ($.truthy($.eq((await $.wv([$t40], "vid_op", C, false)), 7))) {
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["C_FOREIGN_CURRENCY_CODE"])), "AsString")), "AZN"))) {
        if ($.truthy($.not(((await $.mv((await $.wcall([$t40], "FieldByName", ["amount_local"], C)), "isNUll")))))) {
          await $.stmt((await $.wcall([$t40], "WriteString", ["<amount_local>"], C)));
          await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["amount_local"], C)), "AsString"))], C)));
          await $.stmt((await $.wcall([$t40], "WriteLnString", ["</amount_local>"], C)));
        } else {
          await $.wset([$t40], "er_count", $.add((await $.wv([$t40], "er_count", C, false)), 1), C);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "RE_Errors", C, false)), "Lines")), "Add", ["amount_local"])));
        }
      }
    }
    if ($.truthy($.ne((await $.wv([$t40], "vid_op", C, false)), 7))) {
      if ($.truthy($.not(((await $.mv((await $.wcall([$t40], "FieldByName", ["amount_local"], C)), "isNUll")))))) {
        await $.stmt((await $.wcall([$t40], "WriteString", ["<amount_local>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["amount_local"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</amount_local>"], C)));
      } else {
        await $.wset([$t40], "er_count", $.add((await $.wv([$t40], "er_count", C, false)), 1), C);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "RE_Errors", C, false)), "Lines")), "Add", ["amount_local"])));
      }
    }
    if ($.truthy($.eq((await $.wv([$t40], "vid_op", C, false)), 7))) {
      await $.stmt((await $.wcall([$t40], "WriteString", ["<t_from_my_client>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["<from_funds_code>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["to_funds_code"])), "AsString"))], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_funds_code>"], C)));
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["D_FOREIGN_CURRENCY_CODE"])), "AsString")), "AZN"))) {
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_foreign_currency>"], C)));
        await $.stmt((await $.wcall([$t40], "node_tforeign_currency", ["d_"], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_foreign_currency>"], C)));
      } else {
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_foreign_currency>"], C)));
        await $.stmt((await $.wcall([$t40], "node_tforeign_currency_vdm", ["d_"], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_foreign_currency>"], C)));
      }
      await $.wset([$t40], "tr_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DBGridTransactions1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger")), C);
      {
        const $t41 = (await $.wv([$t40], "DM_goAml", C, false));
        const $t42 = (await $.wv([$t40, $t41], "OracleDataSet1", C, false));
        await $.stmt($.wcall([$t40, $t41, $t42], "close", [], C));
        await $.stmt((await $.wcall([$t40, $t41, $t42], "SetVariable", ["V_TRANSID", (await $.wv([$t40, $t41, $t42], "tr_id", C, false))], C)));
        await $.stmt($.wcall([$t40, $t41, $t42], "open", [], C));
      }
      await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet1")), "FieldByName", ["ccustid"])), "AsString"))));
      await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "Open", []);
      await $.stmt((await $.wcall([$t40], "WriteString", ["<t_conductor>"], C)));
      await $.stmt($.wcall([$t40], "NODE_TPERSON", [], C));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_conductor>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["<from_person>"], C)));
      await $.stmt($.wcall([$t40], "NODE_TPERSON", [], C));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_person>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["<from_country>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["from_country"])), "AsString"))], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_country>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_from_my_client>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["<t_to_my_client>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["<to_person>"], C)));
      await $.stmt($.wcall([$t40], "NODE_TPERSON", [], C));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_person>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["<to_country>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["from_country"])), "AsString"))], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_country>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_to_my_client>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</transaction>"], C)));
    }
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1000)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1001)))))) {
      await $.wset([$t40], "tr_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DBGridTransactions1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger")), C);
      {
        const $t43 = (await $.wv([$t40], "DM_goAml", C, false));
        const $t44 = (await $.wv([$t40, $t43], "OracleDataSet1", C, false));
        await $.stmt($.wcall([$t40, $t43, $t44], "close", [], C));
        await $.stmt((await $.wcall([$t40, $t43, $t44], "SetVariable", ["V_TRANSID", (await $.wv([$t40, $t43, $t44], "tr_id", C, false))], C)));
        await $.stmt($.wcall([$t40, $t43, $t44], "open", [], C));
      }
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1000)))) {
        await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet2")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet2")), "SetVariable", ["V_CUID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet1")), "FieldByName", ["ccustid"])), "AsInteger"))])));
        await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet2")), "Open", []);
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet2")), "FieldByName", ["cust_type"])), "AsInteger")), 0))) {
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustRelAccOwer")), "close", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustRelAccOwer")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet1")), "FieldByName", ["ccustid"])), "AsInteger"))])));
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustRelAccOwer")), "Open", []);
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustRelAccOwer")), "FieldByName", ["custid2"])), "AsString"))));
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "Open", []);
        } else {
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet1")), "FieldByName", ["ccustid"])), "AsString"))));
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "Open", []);
        }
        await $.stmt((await $.wcall([$t40], "WriteString", ["<t_from_my_client>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_funds_code>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["to_funds_code"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_funds_code>"], C)));
        if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["D_FOREIGN_CURRENCY_CODE"])), "AsString")), "AZN"))) {
          await $.stmt((await $.wcall([$t40], "WriteString", ["<from_foreign_currency>"], C)));
          await $.stmt((await $.wcall([$t40], "node_tforeign_currency", ["d_"], C)));
          await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_foreign_currency>"], C)));
        }
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_person>"], C)));
        await $.stmt($.wcall([$t40], "NODE_TPERSON", [], C));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_person>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["from_country"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_from_my_client>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<t_to>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<to_funds_code>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["to_funds_code"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_funds_code>"], C)));
        {
          const $t45 = (await $.wv([$t40], "DM_goAml", C, false));
          const $t46 = (await $.wv([$t40, $t45], "ods_monex", C, false));
          await $.stmt($.wcall([$t40, $t45, $t46], "close", [], C));
          await $.stmt((await $.wcall([$t40, $t45, $t46], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40, $t45, $t46], "DM_goAml", C, false)), "OracleDataSet1")), "FieldByName", ["monex_id"])), "AsInteger"))], C)));
          await $.stmt($.wcall([$t40, $t45, $t46], "open", [], C));
          await $.stmt((await $.wcall([$t40, $t45, $t46], "WriteString", ["<to_person>"], C)));
          await $.stmt((await $.wcall([$t40, $t45, $t46], "WriteString", ["<first_name>"], C)));
          await $.stmt((await $.wcall([$t40, $t45, $t46], "WriteString", [(await $.mv((await $.wcall([$t40, $t45, $t46], "FieldByName", ["name"], C)), "AsString"))], C)));
          await $.stmt((await $.wcall([$t40, $t45, $t46], "WriteLnString", ["</first_name>"], C)));
          await $.stmt((await $.wcall([$t40, $t45, $t46], "WriteString", ["<last_name>"], C)));
          await $.stmt((await $.wcall([$t40, $t45, $t46], "WriteString", [(await $.mv((await $.wcall([$t40, $t45, $t46], "FieldByName", ["last_name"], C)), "AsString"))], C)));
          await $.stmt((await $.wcall([$t40, $t45, $t46], "WriteLnString", ["</last_name>"], C)));
        }
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_person>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<to_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["from_country"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_to>"], C)));
      }
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1001)))) {
        await $.stmt((await $.wcall([$t40], "WriteString", ["<t_from>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_funds_code>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["from_funds_code"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_funds_code>"], C)));
        {
          const $t47 = (await $.wv([$t40], "DM_goAml", C, false));
          const $t48 = (await $.wv([$t40, $t47], "ods_monex", C, false));
          await $.stmt($.wcall([$t40, $t47, $t48], "close", [], C));
          await $.stmt((await $.wcall([$t40, $t47, $t48], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40, $t47, $t48], "DM_goAml", C, false)), "OracleDataSet1")), "FieldByName", ["monex_id"])), "AsInteger"))], C)));
          await $.stmt($.wcall([$t40, $t47, $t48], "open", [], C));
          await $.stmt((await $.wcall([$t40, $t47, $t48], "WriteString", ["<from_person>"], C)));
          await $.stmt((await $.wcall([$t40, $t47, $t48], "WriteString", ["<first_name>"], C)));
          await $.stmt((await $.wcall([$t40, $t47, $t48], "WriteString", [(await $.mv((await $.wcall([$t40, $t47, $t48], "FieldByName", ["name"], C)), "AsString"))], C)));
          await $.stmt((await $.wcall([$t40, $t47, $t48], "WriteLnString", ["</first_name>"], C)));
          await $.stmt((await $.wcall([$t40, $t47, $t48], "WriteString", ["<last_name>"], C)));
          await $.stmt((await $.wcall([$t40, $t47, $t48], "WriteString", [(await $.mv((await $.wcall([$t40, $t47, $t48], "FieldByName", ["last_name"], C)), "AsString"))], C)));
          await $.stmt((await $.wcall([$t40, $t47, $t48], "WriteLnString", ["</last_name>"], C)));
        }
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_person>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["from_country"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_from>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<t_to_my_client>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<to_funds_code>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["to_funds_code"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_funds_code>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<to_person>"], C)));
        await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet2")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet2")), "SetVariable", ["V_CUID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet1")), "FieldByName", ["dcustid"])), "AsInteger"))])));
        await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet2")), "Open", []);
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet2")), "FieldByName", ["cust_type"])), "AsInteger")), 0))) {
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustRelAccOwer")), "close", []);
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustRelAccOwer")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet1")), "FieldByName", ["dcustid"])), "AsInteger"))])));
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustRelAccOwer")), "Open", []);
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustRelAccOwer")), "FieldByName", ["custid2"])), "AsString"))));
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "Open", []);
        } else {
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet1")), "FieldByName", ["dcustid"])), "AsString"))));
          await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "Open", []);
        }
        await $.stmt($.wcall([$t40], "NODE_TPERSON", [], C));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_person>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<to_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["from_country"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_to_my_client>"], C)));
      }
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</transaction>"], C)));
    }
    await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ods_incoming")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ods_incoming")), "SetVariable", ["v_trid", (await $.wv([$t40], "trasnfers_trid", C, false))])));
    await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ods_incoming")), "open", []);
    await $.wset([$t40], "v_inout", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ods_incoming")), "FieldByName", ["inout"])), "AsInteger")), C);
    if ($.truthy((await $.and_((await $.and_((await $.and_(((await $.and_(((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1001")), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1011"))))), async () => ((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1001")), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1011")))))))), async () => ($.eq((await $.wv([$t40], "v_inout", C, false)), 1)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1000)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1001)))))) {
      await $.stmt($.wcall([$t40], "NODE_FORM_in", [], C));
      await $.wset([$t40], "tr_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DBGridTransactions1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger")), C);
      {
        const $t49 = (await $.wv([$t40], "DM_goAml", C, false));
        const $t50 = (await $.wv([$t40, $t49], "OracleDataSet1", C, false));
        await $.stmt($.wcall([$t40, $t49, $t50], "close", [], C));
        await $.stmt((await $.wcall([$t40, $t49, $t50], "SetVariable", ["V_TRANSID", (await $.wv([$t40, $t49, $t50], "tr_id", C, false))], C)));
        await $.stmt($.wcall([$t40, $t49, $t50], "open", [], C));
      }
      await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditid"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "Open", []);
      await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "odscust4509")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "odscust4509")), "SetVariable", ["vcustid", (await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet1CCUSTID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "odscust4509")), "Open", []);
      await $.stmt((await $.wcall([$t40], "WriteString", ["<t_to_my_client>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["<to_funds_code>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["A"], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_funds_code>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["<to_account>"], C)));
      await $.stmt((await $.wcall([$t40], "NODE_TACCOUNT_Xoks", [(await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT"))], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", ["<to_country>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["to_country"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_country>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_to_my_client>"], C)));
      await $.stmt((await $.wcall([$t40], "WriteLnString", ["</transaction>"], C)));
    } else {
      if ($.truthy((await $.and_((await $.and_((await $.and_(((await $.and_(((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1001")), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1011"))))), async () => ((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1001")), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1011")))))))), async () => ($.eq((await $.wv([$t40], "v_inout", C, false)), 2)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1000)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1001)))))) {
        await $.wset([$t40], "tr_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DBGridTransactions1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger")), C);
        {
          const $t51 = (await $.wv([$t40], "DM_goAml", C, false));
          const $t52 = (await $.wv([$t40, $t51], "OracleDataSet1", C, false));
          await $.stmt($.wcall([$t40, $t51, $t52], "close", [], C));
          await $.stmt((await $.wcall([$t40, $t51, $t52], "SetVariable", ["V_TRANSID", (await $.wv([$t40, $t51, $t52], "tr_id", C, false))], C)));
          await $.stmt($.wcall([$t40, $t51, $t52], "open", [], C));
        }
        await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "odscust4509")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "odscust4509")), "SetVariable", ["vcustid", (await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "OracleDataSet1DCUSTID")), "AsInteger"))])));
        await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "odscust4509")), "Open", []);
        await $.stmt((await $.wcall([$t40], "WriteString", ["<t_from_my_client>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_funds_code>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["A"], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_funds_code>"], C)));
        if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["D_FOREIGN_CURRENCY_CODE"])), "AsString")), "AZN"))) {
          await $.stmt((await $.wcall([$t40], "WriteString", ["<from_foreign_currency>"], C)));
          await $.stmt((await $.wcall([$t40], "node_tforeign_currency", ["d_"], C)));
          await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_foreign_currency>"], C)));
        }
        await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["DebitId"])), "AsInteger"))])));
        await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "Open", []);
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_account>"], C)));
        await $.stmt((await $.wcall([$t40], "NODE_TACCOUNT_Xoks", [(await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", ["<from_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["from_country"], C)), "AsString"))], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_country>"], C)));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_from_my_client>"], C)));
        await $.stmt($.wcall([$t40], "NODE_FORM_out", [], C));
        await $.stmt((await $.wcall([$t40], "WriteLnString", ["</transaction>"], C)));
      } else {
        if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(((await $.and_(((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1001")), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1011")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "2801")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "2811")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "4801")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "4811")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "2509"))))), async () => ((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1001")), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1011")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "2801")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "2811")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "4801")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "4811")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "2509")))))))), async () => ((await $.and_((await $.and_(($.ne((await $.wv([$t40], "v_inout", C, false)), 1)), async () => ($.ne((await $.wv([$t40], "v_inout", C, false)), 2)))), async () => ($.ne((await $.wv([$t40], "vid_op", C, false)), 7))))))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1000)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1001)))), async () => ((await $.and_((($.eq((await $.wcall([$t40], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), 1, 1], C)), "3"))), async () => (($.eq((await $.wcall([$t40], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), 1, 1], C)), "3")))))))))) {
          await $.stmt((await $.wcall([$t40], "WriteString", ["<t_from_my_client>"], C)));
          await $.stmt((await $.wcall([$t40], "WriteString", ["<from_funds_code>"], C)));
          await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["from_funds_code"], C)), "AsString"))], C)));
          await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_funds_code>"], C)));
          if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["D_FOREIGN_CURRENCY_CODE"])), "AsString")), "AZN"))) {
            await $.stmt((await $.wcall([$t40], "WriteString", ["<from_foreign_currency>"], C)));
            await $.stmt((await $.wcall([$t40], "node_tforeign_currency", ["d_"], C)));
            await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_foreign_currency>"], C)));
          }
          if ($.truthy($.not(($.ne((await $.wcall([$t40], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), 1, 1], C)), "3"))))) {
            await $.wset([$t40], "dc_custtype", (await $.wv([$t40], "true", C, false)), C);
            await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "close", []);
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["DebitId"])), "AsInteger"))])));
            await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "Open", []);
            await $.stmt((await $.wcall([$t40], "WriteString", ["<from_account>"], C)));
            await $.stmt((await $.wcall([$t40], "NODE_TACCOUNT", [(await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT"))], C)));
          }
          if ($.truthy($.not(($.ne((await $.wcall([$t40], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), 1, 1], C)), "3"))))) {
            await $.wset([$t40], "dc_custtype", (await $.wv([$t40], "false", C, false)), C);
            await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "close", []);
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditid"])), "AsInteger"))])));
            await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "Open", []);
            await $.stmt((await $.wcall([$t40], "WriteString", ["<to_account>"], C)));
            await $.stmt((await $.wcall([$t40], "NODE_TACCOUNT", [(await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT"))], C)));
          }
          await $.stmt((await $.wcall([$t40], "WriteString", ["<to_country>"], C)));
          await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["to_country"], C)), "AsString"))], C)));
          await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_country>"], C)));
          await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_to_my_client>"], C)));
          await $.stmt((await $.wcall([$t40], "WriteLnString", ["</transaction>"], C)));
        } else {
          if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1000)), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["transmode_code"])), "AsInteger")), 1001)))))) {
            if ($.truthy((await $.or_(((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1001")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1011")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "2801")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "2811")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "4801")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "4811")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "2509"))))), async () => ((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1001")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1011")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "2801")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "2811")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "4801")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "4811")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "2509"))))))))) {
              await $.stmt((await $.wcall([$t40], "WriteString", ["<t_from_my_client>"], C)));
              await $.stmt((await $.wcall([$t40], "WriteString", ["<from_funds_code>"], C)));
              await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["from_funds_code"], C)), "AsString"))], C)));
              await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_funds_code>"], C)));
              if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["D_FOREIGN_CURRENCY_CODE"])), "AsString")), "AZN"))) {
                await $.stmt((await $.wcall([$t40], "WriteString", ["<from_foreign_currency>"], C)));
                await $.stmt((await $.wcall([$t40], "node_tforeign_currency", ["d_"], C)));
                await $.stmt((await $.wcall([$t40], "WriteLnString", ["</from_foreign_currency>"], C)));
              }
              if ($.truthy($.eq((await $.wcall([$t40], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), 1, 1], C)), "3"))) {
                {
                  const $t53 = (await $.wv([$t40], "DM_goAml", C, false));
                  const $t54 = (await $.wv([$t40, $t53], "odscust4509", C, false));
                  await $.stmt($.wcall([$t40, $t53, $t54], "close", [], C));
                  await $.stmt((await $.wcall([$t40, $t53, $t54], "SetVariable", ["vcustid", (await $.mv((await $.mv((await $.wv([$t40, $t53, $t54], "DM_goAml", C, false)), "ODS_MainReportDCUSTID")), "AsInteger"))], C)));
                  await $.stmt($.wcall([$t40, $t53, $t54], "open", [], C));
                }
                if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "odscust4509")), "FieldByName", ["cust_type"])), "AsINteger")), 0))) {
                  {
                    const $t55 = (await $.wv([$t40], "DM_goAml", C, false));
                    const $t56 = (await $.wv([$t40, $t55], "ODS_CustConductur", C, false));
                    await $.stmt($.wcall([$t40, $t55, $t56], "close", [], C));
                    await $.stmt((await $.wcall([$t40, $t55, $t56], "SetVariable", ["v_id", (await $.mv((await $.mv((await $.wv([$t40, $t55, $t56], "DM_goAml", C, false)), "odscust4509ID")), "AsInteger"))], C)));
                    await $.stmt($.wcall([$t40, $t55, $t56], "open", [], C));
                  }
                  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustConductur")), "FieldByName", ["custid2"])), "isNUll")))) {
                    await $.wset([$t40], "er_count", $.add((await $.wv([$t40], "er_count", C, false)), 1), C);
                    await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "RE_Errors", C, false)), "Lines")), "Add", ["Hüquqi şəxsdə Əvəz edici olan şəxs qeyd edilməyib!"])));
                  } else {
                    await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "close", []);
                    await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Clear", []);
                    await $.mset((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustConductur")), "FieldByName", ["custid2"])), "AsString"))));
                    await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "Open", []);
                    await $.stmt((await $.wcall([$t40], "WriteString", ["<t_conductor>"], C)));
                    await $.stmt($.wcall([$t40], "NODE_TPERSON", [], C));
                    await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_conductor>"], C)));
                  }
                }
              }
              if ($.truthy($.eq((await $.wcall([$t40], "copy", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["CREDITBALANCE"])), "AsString")), 1, 1], C)), "3"))) {
                {
                  const $t57 = (await $.wv([$t40], "DM_goAml", C, false));
                  const $t58 = (await $.wv([$t40, $t57], "odscust4509", C, false));
                  await $.stmt($.wcall([$t40, $t57, $t58], "close", [], C));
                  await $.stmt((await $.wcall([$t40, $t57, $t58], "SetVariable", ["vcustid", (await $.mv((await $.mv((await $.wv([$t40, $t57, $t58], "DM_goAml", C, false)), "ODS_MainReportKCUSTID")), "AsInteger"))], C)));
                  await $.stmt($.wcall([$t40, $t57, $t58], "open", [], C));
                }
                if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "odscust4509")), "FieldByName", ["cust_type"])), "AsINteger")), 0))) {
                  {
                    const $t59 = (await $.wv([$t40], "DM_goAml", C, false));
                    const $t60 = (await $.wv([$t40, $t59], "ODS_CustConductur", C, false));
                    await $.stmt($.wcall([$t40, $t59, $t60], "close", [], C));
                    await $.stmt((await $.wcall([$t40, $t59, $t60], "SetVariable", ["v_id", (await $.mv((await $.mv((await $.wv([$t40, $t59, $t60], "DM_goAml", C, false)), "odscust4509ID")), "AsInteger"))], C)));
                    await $.stmt($.wcall([$t40, $t59, $t60], "open", [], C));
                  }
                  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustConductur")), "FieldByName", ["custid2"])), "isNUll")))) {
                    await $.wset([$t40], "er_count", $.add((await $.wv([$t40], "er_count", C, false)), 1), C);
                    await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "RE_Errors", C, false)), "Lines")), "Add", ["Hüquqi  şəxsdə Əvəz edici  olan şəxs qeyd edilməyib!"])));
                  } else {
                    await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "close", []);
                    await $.mcall((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Clear", []);
                    await $.mset((await $.mv((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_CustConductur")), "FieldByName", ["custid2"])), "AsString"))));
                    await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TPERSON")), "Open", []);
                    await $.stmt((await $.wcall([$t40], "WriteString", ["<t_conductor>"], C)));
                    await $.stmt($.wcall([$t40], "NODE_TPERSON", [], C));
                    await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_conductor>"], C)));
                  }
                }
              }
              if ($.truthy($.not(((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1001")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "1011")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "2801")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "2811")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "2509")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "4801")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["debitbalance"])), "AsString")), "4811")))))))) {
                await $.wset([$t40], "dc_custtype", (await $.wv([$t40], "true", C, false)), C);
                await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "close", []);
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["DebitId"])), "AsInteger"))])));
                await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "Open", []);
                await $.stmt((await $.wcall([$t40], "WriteString", ["<from_account>"], C)));
                await $.stmt((await $.wcall([$t40], "NODE_TACCOUNT", [(await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT"))], C)));
              } else {
                await $.wset([$t40], "dc_custtype", (await $.wv([$t40], "false", C, false)), C);
                await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "close", []);
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditid"])), "AsInteger"))])));
                await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "Open", []);
              }
              if ($.truthy((await $.and_($.not(((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1001")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "1011")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "2801")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "2811")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "2509")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "4801")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditbalance"])), "AsString")), "4811")))))), async () => $.not(((await $.wv([$t40], "dc_custtype", C, false)))))))) {
                await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "close", []);
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["creditid"])), "AsInteger"))])));
                await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "Open", []);
                await $.stmt($.wcall([$t40], "NODE_FORM_PERSON", [], C));
                await $.stmt((await $.wcall([$t40], "WriteString", ["<to_account>"], C)));
                await $.stmt((await $.wcall([$t40], "NODE_TACCOUNT", [(await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT"))], C)));
              } else {
                await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "close", []);
                await $.stmt((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["DebitId"])), "AsInteger"))])));
                await $.mcall((await $.mv((await $.wv([$t40], "DM_goAml", C, false)), "ODS_TACCOUNT")), "Open", []);
              }
              await $.stmt((await $.wcall([$t40], "WriteString", ["<to_country>"], C)));
              await $.stmt((await $.wcall([$t40], "WriteString", [(await $.mv((await $.wcall([$t40], "FieldByName", ["to_country"], C)), "AsString"))], C)));
              await $.stmt((await $.wcall([$t40], "WriteLnString", ["</to_country>"], C)));
              await $.stmt((await $.wcall([$t40], "WriteLnString", ["</t_to_my_client>"], C)));
              await $.stmt((await $.wcall([$t40], "WriteLnString", ["</transaction>"], C)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_TACCOUNT_Xoks", async function NODE_TACCOUNT_Xoks(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), result: undefined, "tr_id": 0, "cudt_dr": 0};
  await $.fixArgs(L0, ["dset"]);
  await $.stmt((await $.call(C, "WriteString", ["<institution_name>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["institution_name"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</institution_name>"])));
  await $.stmt((await $.call(C, "WriteString", ["<swift>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["swift"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</swift>"])));
  await $.stmt((await $.call(C, "WriteString", ["<non_bank_institution>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["non_bank_institution"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</non_bank_institution>"])));
  await $.stmt((await $.call(C, "WriteString", ["<branch>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["branch"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</branch>"])));
  await $.stmt((await $.call(C, "WriteString", ["<account>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["account"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</account>"])));
  await $.stmt((await $.call(C, "WriteString", ["<currency_code>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["currency_code"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</currency_code>"])));
  await $.stmt((await $.call(C, "WriteString", ["<iban>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["iban"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</iban>"])));
  await $.stmt((await $.call(C, "WriteString", ["<personal_account_type>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["personal_account_type"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</personal_account_type>"])));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "odscust4509")), "FieldByName", ["cust_type"])), "AsString")), "0"))) {
    await $.stmt((await $.call(C, "WriteString", ["<t_entity>"])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_ENTITY")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_ENTITY")), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "odscust4509")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_ENTITY")), "Open", []);
    await $.stmt($.call(C, "NODE_TENTITY", []));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "odscust4509")), "FieldByName", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "odscust4509")), "FieldByName", ["cust_type"])), "AsString")), "0"))) {
      if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "isNUll")))) {
        await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
      await $.stmt((await $.call(C, "WriteString", ["<director_id>"])));
      await $.stmt($.call(C, "NODE_TPERSON_tessci", []));
      await $.stmt((await $.call(C, "WriteLnString", ["</director_id>"])));
    }
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "odscust4509")), "FieldByName", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "odscust4509")), "FieldByName", ["cust_type"])), "AsINteger")), 0))) {
      if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "FieldByName", ["custid2"])), "isNUll")))) {
        await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Təsisçi və imza hüququ olan şəxs qeyd edilməyib!"])));
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "FieldByName", ["custid2"])), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
      await $.stmt((await $.call(C, "WriteString", ["<founder>"])));
      await $.stmt((await $.call(C, "WriteString", ["<governmental>"])));
      await $.stmt((await $.call(C, "WriteString", ["false"])));
      await $.stmt((await $.call(C, "WriteLnString", ["</governmental>"])));
      await $.stmt((await $.call(C, "WriteString", ["<founder_person>"])));
      await $.stmt($.call(C, "NODE_TPERSON_tessci", []));
      await $.stmt((await $.call(C, "WriteLnString", ["</founder_person>"])));
      await $.stmt((await $.call(C, "WriteLnString", ["</founder>"])));
      await $.stmt((await $.call(C, "WriteString", ["<ceo>"])));
      await $.stmt($.call(C, "NODE_TPERSON_tessci", []));
      await $.stmt((await $.call(C, "WriteLnString", ["</ceo>"])));
    }
    await $.stmt((await $.call(C, "WriteLnString", ["</t_entity>"])));
  }
  await $.stmt((await $.call(C, "WriteString", ["<signatory>"])));
  await $.stmt((await $.call(C, "WriteString", ["<is_primary>"])));
  await $.stmt((await $.call(C, "WriteString", ["1"])));
  await $.stmt((await $.call(C, "WriteLnString", ["</is_primary>"])));
  await $.stmt((await $.call(C, "WriteString", ["<t_person>"])));
  L0["tr_id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger"));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "SetVariable", ["v_transid", L0["tr_id"]])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "open", []);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "odscust4509")), "FieldByName", ["cust_type"])), "AsString")), "0"))) {
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
    await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "odscust4509")), "FieldByName", ["id"])), "AsString"))));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "odscust4509")), "FieldByName", ["cust_type"])), "AsString")), "0"))) {
    if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "isNUll")))) {
      await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
    }
  }
  await $.stmt($.call(C, "NODE_TPERSON", []));
  await $.stmt((await $.call(C, "WriteLnString", ["</t_person>"])));
  await $.stmt((await $.call(C, "WriteLnString", ["</signatory>"])));
  await $.stmt((await $.call(C, "WriteString", ["<opened>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["opened"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</opened>"])));
  if ($.truthy($.not((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["closed"])), "isNUll"))))) {
    await $.stmt((await $.call(C, "WriteString", ["<closed>"])));
    await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["closed"])), "AsString"))])));
    await $.stmt((await $.call(C, "WriteLnString", ["</closed>"])));
  }
  await $.stmt((await $.call(C, "WriteString", ["<balance>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["balance"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</balance>"])));
  await $.stmt((await $.call(C, "WriteString", ["<status_code>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status_code"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</status_code>"])));
  if ($.truthy($.eq((await $.v(C, "v_inout")), 1))) {
    await $.stmt((await $.call(C, "WriteLnString", ["</to_account>"])));
  }
  if ($.truthy($.eq((await $.v(C, "v_inout")), 2))) {
    await $.stmt((await $.call(C, "WriteLnString", ["</from_account>"])));
  }
  return L0.result;
}, {"params": ["Dset"], "kind": "procedure", "ptypes": ["Tdataset"]});
  U.method("TGoAml_ServiceForm", "NODE_TACCOUNT", async function NODE_TACCOUNT(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), result: undefined, "tr_id": 0};
  await $.fixArgs(L0, ["dset"]);
  await $.stmt((await $.call(C, "WriteString", ["<institution_name>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["institution_name"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</institution_name>"])));
  await $.stmt((await $.call(C, "WriteString", ["<swift>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["swift"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</swift>"])));
  await $.stmt((await $.call(C, "WriteString", ["<non_bank_institution>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["non_bank_institution"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</non_bank_institution>"])));
  await $.stmt((await $.call(C, "WriteString", ["<branch>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["branch"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</branch>"])));
  await $.stmt((await $.call(C, "WriteString", ["<account>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["account"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</account>"])));
  await $.stmt((await $.call(C, "WriteString", ["<currency_code>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["currency_code"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</currency_code>"])));
  await $.stmt((await $.call(C, "WriteString", ["<iban>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["iban"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</iban>"])));
  await $.stmt((await $.call(C, "WriteString", ["<personal_account_type>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["personal_account_type"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</personal_account_type>"])));
  if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cust_type"])), "AsString")), "0"))) {
    await $.stmt((await $.call(C, "WriteString", ["<t_entity>"])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_ENTITY")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_ENTITY")), "SetVariable", ["v_id", (await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cust_id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_ENTITY")), "Open", []);
    await $.stmt($.call(C, "NODE_TENTITY", []));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TACCOUNT")), "FieldByName", ["cust_id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cust_type"])), "AsString")), "0"))) {
      if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "isNUll")))) {
        await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
      await $.stmt((await $.call(C, "WriteString", ["<director_id>"])));
      await $.stmt($.call(C, "NODE_TPERSON_tessci", []));
      await $.stmt((await $.call(C, "WriteLnString", ["</director_id>"])));
    }
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TACCOUNT")), "FieldByName", ["cust_id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["cust_type"])), "AsINteger")), 0))) {
      if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "FieldByName", ["custid2"])), "isNUll")))) {
        await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Təsisçi və imza hüququ olan şəxs qeyd edilməyib!"])));
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelAccOwer")), "FieldByName", ["custid2"])), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
      await $.stmt((await $.call(C, "WriteString", ["<founder>"])));
      await $.stmt((await $.call(C, "WriteString", ["<governmental>"])));
      await $.stmt((await $.call(C, "WriteString", ["false"])));
      await $.stmt((await $.call(C, "WriteLnString", ["</governmental>"])));
      await $.stmt((await $.call(C, "WriteString", ["<founder_person>"])));
      await $.stmt($.call(C, "NODE_TPERSON_tessci", []));
      await $.stmt((await $.call(C, "WriteLnString", ["</founder_person>"])));
      await $.stmt((await $.call(C, "WriteLnString", ["</founder>"])));
      await $.stmt((await $.call(C, "WriteString", ["<ceo>"])));
      await $.stmt($.call(C, "NODE_TPERSON_tessci", []));
      await $.stmt((await $.call(C, "WriteLnString", ["</ceo>"])));
    }
    await $.stmt((await $.call(C, "WriteLnString", ["</t_entity>"])));
  }
  await $.stmt((await $.call(C, "WriteString", ["<signatory>"])));
  await $.stmt((await $.call(C, "WriteString", ["<is_primary>"])));
  await $.stmt((await $.call(C, "WriteString", ["1"])));
  await $.stmt((await $.call(C, "WriteLnString", ["</is_primary>"])));
  await $.stmt((await $.call(C, "WriteString", ["<t_person>"])));
  if ($.truthy($.eq((await $.v(C, "dc_custtype")), true))) {
    L0["tr_id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger"));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "SetVariable", ["v_transid", L0["tr_id"]])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "open", []);
    if ($.truthy((await $.and_($.not(((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1cCUSTID")), "IsNull")))), async () => $.not(((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMcCUSTID")), "IsNull")))))))) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "SetVariable", ["v_cuid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMcCUSTID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "open", []);
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2CUST_TYPE")), "AsInteger")), 0))) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMcCUSTID")), "AsInteger"))])));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
        if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "isNUll")))) {
          await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
        } else {
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
        }
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMcCUSTID")), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
    } else {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "SetVariable", ["v_cuid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1dCUSTID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "open", []);
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2CUST_TYPE")), "AsString")), "0"))) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1dCUSTID")), "AsInteger"))])));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
        if ($.truthy(((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "IsNull"))))) {
          await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
        } else {
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
        }
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1dCUSTID")), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
    }
    await $.stmt($.call(C, "NODE_TPERSON", []));
  }
  if ($.truthy($.eq((await $.v(C, "dc_custtype")), false))) {
    L0["tr_id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger"));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "SetVariable", ["v_transid", L0["tr_id"]])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "open", []);
    if ($.truthy((await $.and_($.not(((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1cCUSTID")), "IsNull")))), async () => $.not(((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMcCUSTID")), "IsNull")))))))) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "SetVariable", ["v_cuid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMcCUSTID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "open", []);
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2CUST_TYPE")), "AsInteger")), 0))) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMcCUSTID")), "AsInteger"))])));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
        if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "isNUll")))) {
          await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
        } else {
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
        }
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMcCUSTID")), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
    } else {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "SetVariable", ["v_cuid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1cCUSTID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "open", []);
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2CUST_TYPE")), "AsString")), "0"))) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1cCUSTID")), "AsInteger"))])));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
        if ($.truthy(((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "IsNull"))))) {
          await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
        } else {
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
        }
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1cCUSTID")), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
    }
    await $.stmt($.call(C, "NODE_TPERSON", []));
  }
  await $.stmt((await $.call(C, "WriteLnString", ["</t_person>"])));
  await $.stmt((await $.call(C, "WriteLnString", ["</signatory>"])));
  await $.stmt((await $.call(C, "WriteString", ["<opened>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["opened"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</opened>"])));
  if ($.truthy($.not((await $.mv((await $.mcall(L0["dset"], "FieldByName", ["closed"])), "isNUll"))))) {
    await $.stmt((await $.call(C, "WriteString", ["<closed>"])));
    await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["closed"])), "AsString"))])));
    await $.stmt((await $.call(C, "WriteLnString", ["</closed>"])));
  }
  await $.stmt((await $.call(C, "WriteString", ["<balance>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["balance"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</balance>"])));
  await $.stmt((await $.call(C, "WriteString", ["<status_code>"])));
  await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall(L0["dset"], "FieldByName", ["status_code"])), "AsString"))])));
  await $.stmt((await $.call(C, "WriteLnString", ["</status_code>"])));
  if ($.truthy($.eq((await $.v(C, "dc_custtype")), true))) {
    await $.stmt((await $.call(C, "WriteLnString", ["</from_account>"])));
  } else {
    await $.stmt((await $.call(C, "WriteLnString", ["</to_account>"])));
  }
  if ($.truthy($.eq((await $.v(C, "dc_custtype")), true))) {
    await $.stmt((await $.call(C, "WriteString", ["<from_country>"])));
    await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "FieldByName", ["from_country"])), "AsString"))])));
    await $.stmt((await $.call(C, "WriteLnString", ["</from_country>"])));
    await $.stmt((await $.call(C, "WriteLnString", ["</t_from_my_client>"])));
    await $.stmt((await $.call(C, "WriteString", ["<t_to_my_client>"])));
    await $.stmt((await $.call(C, "WriteString", ["<to_funds_code>"])));
    await $.stmt((await $.call(C, "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "FieldByName", ["to_funds_code"])), "AsString"))])));
    await $.stmt((await $.call(C, "WriteLnString", ["</to_funds_code>"])));
  }
  if ($.truthy($.eq((await $.v(C, "dc_custtype")), true))) {
    await $.stmt((await $.call(C, "WriteString", ["<to_person>"])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TACCOUNT")), "FieldByName", ["cust_id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
    L0["tr_id"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsInteger"));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "SetVariable", ["v_transid", L0["tr_id"]])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1")), "open", []);
    if ($.truthy((await $.and_($.not(((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1DCUSTID")), "IsNull")))), async () => $.not(((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMDCUSTID")), "IsNull")))))))) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "SetVariable", ["v_cuid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMDCUSTID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "open", []);
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2CUST_TYPE")), "AsString")), "0"))) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMDCUSTID")), "AsInteger"))])));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
        if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "isNUll")))) {
          await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
        } else {
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
        }
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1NOMDCUSTID")), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
    } else {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "SetVariable", ["v_cuid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1DCUSTID")), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2")), "open", []);
      if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet2CUST_TYPE")), "AsString")), "0"))) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["V_ID", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1DCUSTID")), "AsInteger"))])));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Open", []);
        if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "isNUll")))) {
          await $.set(C, "er_count", $.add((await $.v(C, "er_count")), 1));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "RE_Errors")), "Lines")), "Add", ["Hüquqi şəxsdə Müdür və hesab sahibi olan şəxs qeyd edilməyib!"])));
        } else {
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))));
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
        }
      } else {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add("select * from mmx_signatory where custid=", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "OracleDataSet1DCUSTID")), "AsString"))));
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "Open", []);
      }
    }
    await $.stmt($.call(C, "NODE_TPERSON", []));
    await $.stmt((await $.call(C, "WriteLnString", ["</to_person>"])));
  }
  return L0.result;
}, {"params": ["Dset"], "kind": "procedure", "ptypes": ["Tdataset"]});
  U.method("TGoAml_ServiceForm", "NODE_TADDRESS_1", async function NODE_TADDRESS_1(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dset"]);
  {
    const $t61 = L0["dset"];
    if ($.truthy($.not(((await $.mv((await $.wcall([$t61], "FieldByName", ["address_type"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t61], "WriteString", ["<address_type>"], C)));
      await $.stmt((await $.wcall([$t61], "WriteString", [(await $.mv((await $.wcall([$t61], "FieldByName", ["address_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t61], "WriteLnString", ["</address_type>"], C)));
    } else {
      await $.wset([$t61], "er_count", $.add((await $.wv([$t61], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t61], "RE_Errors", C, false)), "Lines")), "Add", ["Adress tipi"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t61], "FieldByName", ["address"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t61], "WriteString", ["<address>"], C)));
      await $.stmt((await $.wcall([$t61], "WriteString", [(await $.mv((await $.wcall([$t61], "FieldByName", ["address"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t61], "WriteLnString", ["</address>"], C)));
    } else {
      await $.wset([$t61], "er_count", $.add((await $.wv([$t61], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t61], "RE_Errors", C, false)), "Lines")), "Add", ["Adress"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t61], "FieldByName", ["city"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t61], "WriteString", ["<city>"], C)));
      await $.stmt((await $.wcall([$t61], "WriteString", [(await $.mv((await $.wcall([$t61], "FieldByName", ["city"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t61], "WriteLnString", ["</city>"], C)));
    } else {
      await $.wset([$t61], "er_count", $.add((await $.wv([$t61], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t61], "RE_Errors", C, false)), "Lines")), "Add", ["Şəhər"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t61], "FieldByName", ["country_code"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t61], "WriteString", ["<country_code>"], C)));
      await $.stmt((await $.wcall([$t61], "WriteString", [(await $.mv((await $.wcall([$t61], "FieldByName", ["country_code"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t61], "WriteLnString", ["</country_code>"], C)));
    } else {
      await $.wset([$t61], "er_count", $.add((await $.wv([$t61], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t61], "RE_Errors", C, false)), "Lines")), "Add", ["Ölkə kodu"])));
    }
  }
  return L0.result;
}, {"params": ["Dset"], "kind": "procedure", "ptypes": ["Tdataset"]});
  U.method("TGoAml_ServiceForm", "NODE_TADDRESS", async function NODE_TADDRESS(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dset"]);
  await $.stmt((await $.call(C, "WriteLnString", ["<addresses>"])));
  await $.stmt((await $.call(C, "WriteLnString", ["<address>"])));
  {
    const $t62 = L0["dset"];
    if ($.truthy($.not(((await $.mv((await $.wcall([$t62], "FieldByName", ["address_type"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t62], "WriteString", ["<address_type>"], C)));
      await $.stmt((await $.wcall([$t62], "WriteString", [(await $.mv((await $.wcall([$t62], "FieldByName", ["address_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t62], "WriteLnString", ["</address_type>"], C)));
    } else {
      await $.wset([$t62], "er_count", $.add((await $.wv([$t62], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t62], "RE_Errors", C, false)), "Lines")), "Add", ["Adress tipi"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t62], "FieldByName", ["address"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t62], "WriteString", ["<address>"], C)));
      await $.stmt((await $.wcall([$t62], "WriteString", [(await $.mv((await $.wcall([$t62], "FieldByName", ["address"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t62], "WriteLnString", ["</address>"], C)));
    } else {
      await $.wset([$t62], "er_count", $.add((await $.wv([$t62], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t62], "RE_Errors", C, false)), "Lines")), "Add", ["Adress"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t62], "FieldByName", ["city"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t62], "WriteString", ["<city>"], C)));
      await $.stmt((await $.wcall([$t62], "WriteString", [(await $.mv((await $.wcall([$t62], "FieldByName", ["city"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t62], "WriteLnString", ["</city>"], C)));
    } else {
      await $.wset([$t62], "er_count", $.add((await $.wv([$t62], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t62], "RE_Errors", C, false)), "Lines")), "Add", ["Şəhər"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t62], "FieldByName", ["country_code"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t62], "WriteString", ["<country_code>"], C)));
      await $.stmt((await $.wcall([$t62], "WriteString", [(await $.mv((await $.wcall([$t62], "FieldByName", ["country_code"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t62], "WriteLnString", ["</country_code>"], C)));
    } else {
      await $.wset([$t62], "er_count", $.add((await $.wv([$t62], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t62], "RE_Errors", C, false)), "Lines")), "Add", ["Ölkə kodu"])));
    }
  }
  await $.stmt((await $.call(C, "WriteLnString", ["</address>"])));
  await $.stmt((await $.call(C, "WriteLnString", ["</addresses>"])));
  return L0.result;
}, {"params": ["Dset"], "kind": "procedure", "ptypes": ["Tdataset"]});
  U.method("TGoAml_ServiceForm", "NODE_TENTITY", async function NODE_TENTITY(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t63 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_ENTITY"));
    await $.stmt((await $.wcall([$t63], "WriteString", ["<name>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", [(await $.mv((await $.wcall([$t63], "FieldByName", ["name"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t63], "WriteLnString", ["</name>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", ["<incorporation_legal_form>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", [(await $.mv((await $.wcall([$t63], "FieldByName", ["incorporation_legal_form"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t63], "WriteLnString", ["</incorporation_legal_form>"], C)));
    if ($.truthy($.not((await $.mv((await $.wcall([$t63], "FieldByName", ["incorporation_number"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t63], "WriteString", ["<incorporation_number>"], C)));
      await $.stmt((await $.wcall([$t63], "WriteString", [(await $.mv((await $.wcall([$t63], "FieldByName", ["inn"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t63], "WriteLnString", ["</incorporation_number>"], C)));
    } else {
      await $.wset([$t63], "er_count", $.add((await $.wv([$t63], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t63], "RE_Errors", C, false)), "Lines")), "Add", ["Dövlət qeydiyyat nömrəsi"])));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t63], "FieldByName", ["incorporation_number"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t63], "WriteString", ["<registration_number>"], C)));
      await $.stmt((await $.wcall([$t63], "WriteString", [(await $.mv((await $.wcall([$t63], "FieldByName", ["incorporation_number"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t63], "WriteLnString", ["</registration_number>"], C)));
    } else {
      await $.wset([$t63], "er_count", $.add((await $.wv([$t63], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t63], "RE_Errors", C, false)), "Lines")), "Add", ["Dövlət qeydiyyat nömrəsi"])));
    }
    await $.stmt((await $.wcall([$t63], "WriteString", ["<business>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", ["87300"], C)));
    await $.stmt((await $.wcall([$t63], "WriteLnString", ["</business>"], C)));
    await $.stmt((await $.wcall([$t63], "NODE_TADDRESS", [(await $.mv((await $.wv([$t63], "DM_goAml", C, false)), "ODS_ENTITY"))], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", ["<email>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", [(await $.mv((await $.wcall([$t63], "FieldByName", ["email"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t63], "WriteLnString", ["</email>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", ["<url>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", [(await $.mv((await $.wcall([$t63], "FieldByName", ["url"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t63], "WriteLnString", ["</url>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", ["<incorporation_state>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", [(await $.mv((await $.wcall([$t63], "FieldByName", ["incorporation_state"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t63], "WriteLnString", ["</incorporation_state>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", ["<incorporation_country_code>"], C)));
    await $.stmt((await $.wcall([$t63], "WriteString", [(await $.mv((await $.wcall([$t63], "FieldByName", ["incorporation_country_code"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t63], "WriteLnString", ["</incorporation_country_code>"], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_PHONES_1", async function NODE_PHONES_1(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dset"]);
  {
    const $t64 = L0["dset"];
    if ($.truthy($.not(((await $.mv((await $.wcall([$t64], "FieldByName", ["tph_contact_type"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t64], "WriteString", ["<tph_contact_type>"], C)));
      await $.stmt((await $.wcall([$t64], "WriteString", [(await $.mv((await $.wcall([$t64], "FieldByName", ["tph_contact_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t64], "WriteLnString", ["</tph_contact_type>"], C)));
    } else {
      await $.wset([$t64], "er_count", $.add((await $.wv([$t64], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t64], "RE_Errors", C, false)), "Lines")), "Add", ["Əlaqə növü"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t64], "FieldByName", ["tph_communication_type"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t64], "WriteString", ["<tph_communication_type>"], C)));
      await $.stmt((await $.wcall([$t64], "WriteString", [(await $.mv((await $.wcall([$t64], "FieldByName", ["tph_communication_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t64], "WriteLnString", ["</tph_communication_type>"], C)));
    } else {
      await $.wset([$t64], "er_count", $.add((await $.wv([$t64], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t64], "RE_Errors", C, false)), "Lines")), "Add", ["Rabitə növü"])));
    }
    await $.stmt((await $.wcall([$t64], "WriteString", ["<tph_country_prefix>"], C)));
    await $.stmt((await $.wcall([$t64], "WriteString", [(await $.mv((await $.mcall((await $.wv([$t64], "Dset", { get: async () => L0["dset"], set: async (v) => { L0["dset"] = v; }, local: true }, false)), "FieldByName", ["tph_country_prefix"])), "AsString"))], C)));
    await $.stmt((await $.wcall([$t64], "WriteLnString", ["</tph_country_prefix>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t64], "FieldByName", ["tph_number"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t64], "WriteString", ["<tph_number>"], C)));
      await $.stmt((await $.wcall([$t64], "WriteString", [(await $.mv((await $.wcall([$t64], "FieldByName", ["tph_number"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t64], "WriteLnString", ["</tph_number>"], C)));
    } else {
      await $.wset([$t64], "er_count", $.add((await $.wv([$t64], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t64], "RE_Errors", C, false)), "Lines")), "Add", ["Telefon"])));
    }
  }
  return L0.result;
}, {"params": ["Dset"], "kind": "procedure", "ptypes": ["Tdataset"]});
  U.method("TGoAml_ServiceForm", "NODE_PHONES", async function NODE_PHONES(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dset"]);
  await $.stmt((await $.call(C, "WriteLnString", ["<phones>"])));
  await $.stmt((await $.call(C, "WriteLnString", ["<phone>"])));
  {
    const $t65 = L0["dset"];
    if ($.truthy($.not(((await $.mv((await $.wcall([$t65], "FieldByName", ["tph_contact_type"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t65], "WriteString", ["<tph_contact_type>"], C)));
      await $.stmt((await $.wcall([$t65], "WriteString", [(await $.mv((await $.wcall([$t65], "FieldByName", ["tph_contact_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t65], "WriteLnString", ["</tph_contact_type>"], C)));
    } else {
      await $.wset([$t65], "er_count", $.add((await $.wv([$t65], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t65], "RE_Errors", C, false)), "Lines")), "Add", ["Əlaqə növü"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t65], "FieldByName", ["tph_communication_type"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t65], "WriteString", ["<tph_communication_type>"], C)));
      await $.stmt((await $.wcall([$t65], "WriteString", [(await $.mv((await $.wcall([$t65], "FieldByName", ["tph_communication_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t65], "WriteLnString", ["</tph_communication_type>"], C)));
    } else {
      await $.wset([$t65], "er_count", $.add((await $.wv([$t65], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t65], "RE_Errors", C, false)), "Lines")), "Add", ["Rabitə növü"])));
    }
    await $.stmt((await $.wcall([$t65], "WriteString", ["<tph_country_prefix>"], C)));
    await $.stmt((await $.wcall([$t65], "WriteString", [(await $.mv((await $.mcall((await $.wv([$t65], "Dset", { get: async () => L0["dset"], set: async (v) => { L0["dset"] = v; }, local: true }, false)), "FieldByName", ["tph_country_prefix"])), "AsString"))], C)));
    await $.stmt((await $.wcall([$t65], "WriteLnString", ["</tph_country_prefix>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t65], "FieldByName", ["tph_number"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t65], "WriteString", ["<tph_number>"], C)));
      await $.stmt((await $.wcall([$t65], "WriteString", [(await $.mv((await $.wcall([$t65], "FieldByName", ["tph_number"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t65], "WriteLnString", ["</tph_number>"], C)));
    } else {
      await $.wset([$t65], "er_count", $.add((await $.wv([$t65], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t65], "RE_Errors", C, false)), "Lines")), "Add", ["Telefon"])));
    }
  }
  await $.stmt((await $.call(C, "WriteLnString", ["</phone>"])));
  await $.stmt((await $.call(C, "WriteLnString", ["</phones>"])));
  return L0.result;
}, {"params": ["Dset"], "kind": "procedure", "ptypes": ["Tdataset"]});
  U.method("TGoAml_ServiceForm", "node_tforeign_currency_vdm", async function node_tforeign_currency_vdm(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"vfieldsymb": $.copyArg(p0), result: undefined, "v_rat": 0};
  await $.fixArgs(L0, ["vfieldsymb"]);
  {
    const $t66 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport"));
    await $.stmt((await $.wcall([$t66], "WriteString", ["<foreign_currency_code>"], C)));
    await $.stmt((await $.wcall([$t66], "WriteString", [(await $.mv((await $.wcall([$t66], "FieldByName", [$.add((await $.wv([$t66], "vFieldSymb", { get: async () => L0["vfieldsymb"], set: async (v) => { L0["vfieldsymb"] = v; }, local: true }, false)), "foreign_currency_code")], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t66], "WriteLnString", ["</foreign_currency_code>"], C)));
    await $.stmt((await $.wcall([$t66], "WriteString", ["<foreign_amount>"], C)));
    await $.stmt((await $.wcall([$t66], "WriteString", [(await $.mv((await $.wcall([$t66], "FieldByName", ["amount_local"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t66], "WriteLnString", ["</foreign_amount>"], C)));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t66], "FieldByName", ["D_FOREIGN_CURRENCY_CODE"], C)), "AsString")), "AZN"))) {
      await $.wset([$t66], "v_rat", $.fdiv(1, (await $.mv((await $.wcall([$t66], "FieldByName", ["c_foreign_exchange_rate"], C)), "AsFloat"))), { get: async () => L0["v_rat"], set: async (v) => { L0["v_rat"] = v; }, local: true });
      await $.stmt((await $.wcall([$t66], "WriteString", ["<foreign_exchange_rate>"], C)));
      await $.stmt((await $.wcall([$t66], "WriteString", [(await $.wcall([$t66], "FloatToStr", [(await $.wv([$t66], "v_rat", { get: async () => L0["v_rat"], set: async (v) => { L0["v_rat"] = v; }, local: true }, false))], C))], C)));
      await $.stmt((await $.wcall([$t66], "WriteLnString", ["</foreign_exchange_rate>"], C)));
    } else {
      await $.wset([$t66], "v_rat", $.fdiv(1, (await $.mv((await $.wcall([$t66], "FieldByName", ["d_foreign_exchange_rate"], C)), "AsFloat"))), { get: async () => L0["v_rat"], set: async (v) => { L0["v_rat"] = v; }, local: true });
      await $.stmt((await $.wcall([$t66], "WriteString", ["<foreign_exchange_rate>"], C)));
      await $.stmt((await $.wcall([$t66], "WriteString", [(await $.wcall([$t66], "FloatToStr", [(await $.wv([$t66], "v_rat", { get: async () => L0["v_rat"], set: async (v) => { L0["v_rat"] = v; }, local: true }, false))], C))], C)));
      await $.stmt((await $.wcall([$t66], "WriteLnString", ["</foreign_exchange_rate>"], C)));
    }
  }
  return L0.result;
}, {"params": ["vFieldSymb"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TGoAml_ServiceForm", "node_tforeign_currency", async function node_tforeign_currency(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"vfieldsymb": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["vfieldsymb"]);
  {
    const $t67 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport"));
    await $.stmt((await $.wcall([$t67], "WriteString", ["<foreign_currency_code>"], C)));
    await $.stmt((await $.wcall([$t67], "WriteString", [(await $.mv((await $.wcall([$t67], "FieldByName", [$.add((await $.wv([$t67], "vFieldSymb", { get: async () => L0["vfieldsymb"], set: async (v) => { L0["vfieldsymb"] = v; }, local: true }, false)), "foreign_currency_code")], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t67], "WriteLnString", ["</foreign_currency_code>"], C)));
    await $.stmt((await $.wcall([$t67], "WriteString", ["<foreign_amount>"], C)));
    await $.stmt((await $.wcall([$t67], "WriteString", [(await $.mv((await $.wcall([$t67], "FieldByName", [$.add((await $.wv([$t67], "vFieldSymb", { get: async () => L0["vfieldsymb"], set: async (v) => { L0["vfieldsymb"] = v; }, local: true }, false)), "foreign_amount")], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t67], "WriteLnString", ["</foreign_amount>"], C)));
    await $.stmt((await $.wcall([$t67], "WriteString", ["<foreign_exchange_rate>"], C)));
    await $.stmt((await $.wcall([$t67], "WriteString", [(await $.mv((await $.wcall([$t67], "FieldByName", [$.add((await $.wv([$t67], "vFieldSymb", { get: async () => L0["vfieldsymb"], set: async (v) => { L0["vfieldsymb"] = v; }, local: true }, false)), "foreign_exchange_rate")], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t67], "WriteLnString", ["</foreign_exchange_rate>"], C)));
  }
  return L0.result;
}, {"params": ["vFieldSymb"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TGoAml_ServiceForm", "NODE_LocationADDRESS", async function NODE_LocationADDRESS(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dset"]);
  {
    const $t68 = L0["dset"];
    if ($.truthy($.not(((await $.mv((await $.wcall([$t68], "FieldByName", ["address_type"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t68], "WriteString", ["<address_type>"], C)));
      await $.stmt((await $.wcall([$t68], "WriteString", [(await $.mv((await $.wcall([$t68], "FieldByName", ["address_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t68], "WriteLnString", ["</address_type>"], C)));
    } else {
      await $.wset([$t68], "er_count", $.add((await $.wv([$t68], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t68], "RE_Errors", C, false)), "Lines")), "Add", ["Adress tipi"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t68], "FieldByName", ["address"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t68], "WriteString", ["<address>"], C)));
      await $.stmt((await $.wcall([$t68], "WriteString", [(await $.mv((await $.wcall([$t68], "FieldByName", ["address"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t68], "WriteLnString", ["</address>"], C)));
    } else {
      await $.wset([$t68], "er_count", $.add((await $.wv([$t68], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t68], "RE_Errors", C, false)), "Lines")), "Add", ["Adress"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t68], "FieldByName", ["city"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t68], "WriteString", ["<city>"], C)));
      await $.stmt((await $.wcall([$t68], "WriteString", [(await $.mv((await $.wcall([$t68], "FieldByName", ["city"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t68], "WriteLnString", ["</city>"], C)));
    } else {
      await $.wset([$t68], "er_count", $.add((await $.wv([$t68], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t68], "RE_Errors", C, false)), "Lines")), "Add", ["Şəhər"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t68], "FieldByName", ["country_code"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t68], "WriteString", ["<country_code>"], C)));
      await $.stmt((await $.wcall([$t68], "WriteString", [(await $.mv((await $.wcall([$t68], "FieldByName", ["country_code"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t68], "WriteLnString", ["</country_code>"], C)));
    } else {
      await $.wset([$t68], "er_count", $.add((await $.wv([$t68], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t68], "RE_Errors", C, false)), "Lines")), "Add", ["Ölkə kodu"])));
    }
  }
  return L0.result;
}, {"params": ["Dset"], "kind": "procedure", "ptypes": ["Tdataset"]});
  U.method("TGoAml_ServiceForm", "NODE_TPERSON_2", async function NODE_TPERSON_2(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t69 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON"));
    await $.stmt((await $.wcall([$t69], "WriteString", ["<email>"], C)));
    await $.stmt((await $.wcall([$t69], "WriteString", [(await $.mv((await $.wcall([$t69], "FieldByName", ["email"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t69], "WriteLnString", ["</email>"], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_TPERSON_1", async function NODE_TPERSON_1(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t70 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON"));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t70], "FieldByName", ["first_name"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t70], "WriteString", ["<first_name>"], C)));
      await $.stmt((await $.wcall([$t70], "WriteString", [(await $.mv((await $.wcall([$t70], "FieldByName", ["first_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t70], "WriteLnString", ["</first_name>"], C)));
    } else {
      await $.wset([$t70], "er_count", $.add((await $.wv([$t70], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t70], "RE_Errors", C, false)), "Lines")), "Add", ["Adı"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t70], "FieldByName", ["last_name"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t70], "WriteString", ["<last_name>"], C)));
      await $.stmt((await $.wcall([$t70], "WriteString", [(await $.mv((await $.wcall([$t70], "FieldByName", ["last_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t70], "WriteLnString", ["</last_name>"], C)));
    } else {
      await $.wset([$t70], "er_count", $.add((await $.wv([$t70], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t70], "RE_Errors", C, false)), "Lines")), "Add", ["Soyadı"])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_TPERSON_tessci", async function NODE_TPERSON_tessci(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t71 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON"));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t71], "FieldByName", ["first_name"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t71], "WriteString", ["<first_name>"], C)));
      await $.stmt((await $.wcall([$t71], "WriteString", [(await $.mv((await $.wcall([$t71], "FieldByName", ["first_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t71], "WriteLnString", ["</first_name>"], C)));
    } else {
      await $.wset([$t71], "er_count", $.add((await $.wv([$t71], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t71], "RE_Errors", C, false)), "Lines")), "Add", ["Adı"])));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t71], "FieldByName", ["middle_name"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t71], "WriteString", ["<middle_name>"], C)));
      await $.stmt((await $.wcall([$t71], "WriteString", [(await $.mv((await $.wcall([$t71], "FieldByName", ["middle_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t71], "WriteLnString", ["</middle_name>"], C)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t71], "FieldByName", ["last_name"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t71], "WriteString", ["<last_name>"], C)));
      await $.stmt((await $.wcall([$t71], "WriteString", [(await $.mv((await $.wcall([$t71], "FieldByName", ["last_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t71], "WriteLnString", ["</last_name>"], C)));
    } else {
      await $.wset([$t71], "er_count", $.add((await $.wv([$t71], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t71], "RE_Errors", C, false)), "Lines")), "Add", ["Soyadı"])));
    }
    await $.stmt((await $.wcall([$t71], "WriteString", ["<birthdate>"], C)));
    await $.stmt((await $.wcall([$t71], "WriteString", [(await $.mv((await $.wcall([$t71], "FieldByName", ["birthdate"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t71], "WriteLnString", ["</birthdate>"], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_TPERSON", async function NODE_TPERSON(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "d_custid": '', "c_custid": '', "v_comments": ''};
  {
    const $t72 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON"));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t72], "FieldByName", ["gender"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<gender>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["gender"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</gender>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", ["Cinsi"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t72], "FieldByName", ["title"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<title>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["title"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</title>"], C)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t72], "FieldByName", ["first_name"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<first_name>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["first_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</first_name>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", ["Adı"])));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t72], "FieldByName", ["middle_name"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<middle_name>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["middle_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</middle_name>"], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t72], "FieldByName", ["prefix"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<prefix>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["prefix"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</prefix>"], C)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t72], "FieldByName", ["last_name"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<last_name>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["last_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</last_name>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", ["Soyadı"])));
    }
    await $.stmt((await $.wcall([$t72], "WriteString", ["<birthdate>"], C)));
    await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["birthdate"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t72], "WriteLnString", ["</birthdate>"], C)));
    await $.stmt((await $.wcall([$t72], "WriteString", ["<birth_place>"], C)));
    await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["birth_place"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t72], "WriteLnString", ["</birth_place>"], C)));
    if ($.truthy($.not((await $.mv((await $.wcall([$t72], "FieldByName", ["mothers_name"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<mothers_name>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["mothers_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</mothers_name>"], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t72], "FieldByName", ["ssn"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<ssn>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["ssn"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</ssn>"], C)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t72], "FieldByName", ["nationality1"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<nationality1>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["nationality1"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</nationality1>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", ["Vətəndaşlığı"])));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t72], "FieldByName", ["nationality2"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<nationality2>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["nationality2"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</nationality2>"], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t72], "FieldByName", ["nationality3"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<nationality3>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["nationality3"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</nationality3>"], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t72], "FieldByName", ["residence"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<residence>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["residence"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</residence>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", ["Rezidentliyi"])));
    }
    await $.stmt((await $.wcall([$t72], "NODE_PHONES", [(await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ODS_TPERSON"))], C)));
    await $.stmt((await $.wcall([$t72], "NODE_TADDRESS", [(await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ODS_TPERSON"))], C)));
    await $.stmt((await $.wcall([$t72], "WriteString", ["<email>"], C)));
    await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["email"], C)), "AsString"))], C)));
    await $.stmt((await $.wcall([$t72], "WriteLnString", ["</email>"], C)));
    if ($.truthy($.not((await $.mv((await $.wcall([$t72], "FieldByName", ["occupation"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<occupation>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["occupation"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</occupation>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", ["Vəzifəsi"])));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t72], "FieldByName", ["employer_name"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<employer_name>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["employer_name"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</employer_name>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", ["is yeri"])));
    }
    await $.stmt((await $.wcall([$t72], "WriteString", ["<employer_address_id>"], C)));
    await $.stmt((await $.wcall([$t72], "NODE_TADDRESS_1", [(await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ODS_TPERSON"))], C)));
    await $.stmt((await $.wcall([$t72], "WriteLnString", ["</employer_address_id>"], C)));
    await $.stmt((await $.wcall([$t72], "WriteString", ["<employer_phone_id>"], C)));
    await $.stmt((await $.wcall([$t72], "NODE_PHONES_1", [(await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ODS_TPERSON"))], C)));
    await $.stmt((await $.wcall([$t72], "WriteLnString", ["</employer_phone_id>"], C)));
    await $.stmt((await $.wcall([$t72], "WriteString", ["<identification>"], C)));
    await $.stmt($.wcall([$t72], "NODE_identification", [], C));
    await $.stmt((await $.wcall([$t72], "WriteLnString", ["</identification>"], C)));
    if ($.truthy($.eq((await $.wv([$t72], "pop_ctrtpr_clik", C, false)), 5))) {
      await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "SetVariable", ["c_id", (await $.wv([$t72], "dey2", C, false))])));
      await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "open", []);
      if ($.truthy($.in_((await $.mv((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_custCOMPANI")), "AsInteger")), [2, 3, 5, 6, 7]))) {
        await $.stmt((await $.wcall([$t72], "WriteString", ["<tax_number>"], C)));
        await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["inn"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t72], "WriteLnString", ["</tax_number>"], C)));
        if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["sfera_deycod"])), "AsVariant")), 0))) {
          await $.stmt((await $.wcall([$t72], "WriteString", ["<tax_reg_number>"], C)));
          await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["sfera_deycod"])), "AsString"))], C)));
          await $.stmt((await $.wcall([$t72], "WriteLnString", ["</tax_reg_number>"], C)));
        }
      }
      await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "SetVariable", ["c_id", (await $.wv([$t72], "dey3", C, false))])));
      await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "open", []);
      if ($.truthy($.in_((await $.mv((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_custCOMPANI")), "AsInteger")), [2, 3, 5, 6, 7]))) {
        await $.stmt((await $.wcall([$t72], "WriteString", ["<tax_number>"], C)));
        await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["inn"])), "AsString"))], C)));
        await $.stmt((await $.wcall([$t72], "WriteLnString", ["</tax_number>"], C)));
        if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["sfera_deycod"])), "AsVariant")), 0))) {
          await $.stmt((await $.wcall([$t72], "WriteString", ["<tax_reg_number>"], C)));
          await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["sfera_deycod"])), "AsString"))], C)));
          await $.stmt((await $.wcall([$t72], "WriteLnString", ["</tax_reg_number>"], C)));
        }
      }
    }
    if ($.truthy($.ne((await $.wv([$t72], "pop_ctrtpr_clik", C, false)), 5))) {
      { const $t73 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ODS_Rep")), "FieldByName", ["dk"])), "AsInteger"));
        if ($.eq($t73, 1)) {
          if ($.truthy($.eq((await $.mv((await $.wv([$t72], "DBGridTransactions1", C, false)), "DataSource")), (await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "DS_maindbt"))))) {
            await $.wset([$t72], "dey2", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "DBGridTransactions1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["KCUSTID"])), "AsString")), C);
            await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "Close", []);
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "SetVariable", ["c_id", (await $.wv([$t72], "dey2", C, false))])));
            await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "open", []);
            if ($.truthy(((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["cust_type"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["cust_type"])), "AsInteger")), 2)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["cust_type"])), "AsInteger")), 3))))))) {
              await $.wset([$t72], "v_comments", (await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["COMMENTS"])), "AsString")), { get: async () => L0["v_comments"], set: async (v) => { L0["v_comments"] = v; }, local: true });
              await $.stmt((await $.wcall([$t72], "WriteString", ["<tax_number>"], C)));
              await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["inn"])), "AsString"))], C)));
              await $.stmt((await $.wcall([$t72], "WriteLnString", ["</tax_number>"], C)));
              if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["sfera_deycod"])), "AsVariant")), 0))) {
                await $.stmt((await $.wcall([$t72], "WriteString", ["<tax_reg_number>"], C)));
                await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["sfera_deycod"])), "AsString"))], C)));
                await $.stmt((await $.wcall([$t72], "WriteLnString", ["</tax_reg_number>"], C)));
              }
            }
          }
        }
        else if ($.eq($t73, 2)) {
          if ($.truthy($.eq((await $.mv((await $.wv([$t72], "DBGridTransactions1", C, false)), "DataSource")), (await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "DS_Main"))))) {
            await $.wset([$t72], "dey3", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t72], "DBGridTransactions1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["DCUSTID"])), "AsString")), C);
            await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "Close", []);
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "SetVariable", ["c_id", (await $.wv([$t72], "dey3", C, false))])));
            await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "open", []);
            if ($.truthy(((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["cust_type"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["cust_type"])), "AsInteger")), 2)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["cust_type"])), "AsInteger")), 3))))))) {
              await $.wset([$t72], "v_comments", (await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["COMMENTS"])), "AsString")), { get: async () => L0["v_comments"], set: async (v) => { L0["v_comments"] = v; }, local: true });
              await $.stmt((await $.wcall([$t72], "WriteString", ["<tax_number>"], C)));
              await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["inn"])), "AsString"))], C)));
              await $.stmt((await $.wcall([$t72], "WriteLnString", ["</tax_number>"], C)));
              await $.stmt((await $.wcall([$t72], "WriteString", ["<tax_reg_number>"], C)));
              await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["sfera_deycod"])), "AsString"))], C)));
              await $.stmt((await $.wcall([$t72], "WriteLnString", ["</tax_reg_number>"], C)));
            }
          }
        }
      }
    }
    await $.stmt((await $.wcall([$t72], "WriteString", ["<unemployed>"], C)));
    await $.stmt((await $.wcall([$t72], "WriteString", ["false"], C)));
    await $.stmt((await $.wcall([$t72], "WriteLnString", ["</unemployed>"], C)));
    await $.stmt((await $.wcall([$t72], "WriteString", ["<source_of_wealth>"], C)));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t72], "FieldByName", ["activity"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<activity>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["activity"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</activity>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", [" Fəaliyyət istiqaməti"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t72], "FieldByName", ["profession"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<profession>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["profession"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</profession>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", ["Peşəsi"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t72], "FieldByName", ["source_of_income"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t72], "WriteString", ["<source_of_income>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.wcall([$t72], "FieldByName", ["source_of_income"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</source_of_income>"], C)));
      await $.stmt((await $.wcall([$t72], "WriteLnString", ["</source_of_wealth>"], C)));
    } else {
      await $.wset([$t72], "er_count", $.add((await $.wv([$t72], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t72], "RE_Errors", C, false)), "Lines")), "Add", ["Gəlir mənbəyi"])));
    }
    if ($.truthy($.ne((await $.wv([$t72], "pop_ctrtpr_clik", C, false)), 5))) {
      if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "RecordCount")), 0))) {
        if ($.truthy($.ne((await $.wv([$t72], "v_comments", { get: async () => L0["v_comments"], set: async (v) => { L0["v_comments"] = v; }, local: true }, false)), ""))) {
          await $.stmt((await $.wcall([$t72], "writeString", ["<comments>"], C)));
          await $.stmt((await $.wcall([$t72], "WriteString", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DM_goAml", C, false)), "ods_cust")), "FieldByName", ["COMMENTS"])), "AsString"))], C)));
          await $.stmt((await $.wcall([$t72], "WriteLnString", ["</comments>"], C)));
        } else {
          await $.stmt((await $.wcall([$t72], "writeString", ["<comments>"], C)));
          await $.stmt((await $.wcall([$t72], "WriteString", ["məlum olmadı"], C)));
          await $.stmt((await $.wcall([$t72], "WriteLnString", ["</comments>"], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "NODE_identification", async function NODE_identification(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t74 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON"));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t74], "FieldByName", ["pasp_type"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t74], "WriteString", ["<type>"], C)));
      await $.stmt((await $.wcall([$t74], "WriteString", [(await $.mv((await $.wcall([$t74], "FieldByName", ["pasp_type"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t74], "WriteLnString", ["</type>"], C)));
    } else {
      await $.wset([$t74], "er_count", $.add((await $.wv([$t74], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t74], "RE_Errors", C, false)), "Lines")), "Add", ["Sənədin növü"])));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t74], "FieldByName", ["pasp_number"], C)), "isNUll")))))) {
      await $.stmt((await $.wcall([$t74], "WriteString", ["<number>"], C)));
      await $.stmt((await $.wcall([$t74], "WriteString", [(await $.mv((await $.wcall([$t74], "FieldByName", ["pasp_number"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t74], "WriteLnString", ["</number>"], C)));
    } else {
      await $.wset([$t74], "er_count", $.add((await $.wv([$t74], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t74], "RE_Errors", C, false)), "Lines")), "Add", ["Sənədin nömrəsi"])));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t74], "FieldByName", ["issue_date"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t74], "WriteString", ["<issue_date>"], C)));
      await $.stmt((await $.wcall([$t74], "WriteString", [(await $.mv((await $.wcall([$t74], "FieldByName", ["issue_date"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t74], "WriteLnString", ["</issue_date>"], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t74], "FieldByName", ["expiry_date"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t74], "WriteString", ["<expiry_date>"], C)));
      await $.stmt((await $.wcall([$t74], "WriteString", [(await $.mv((await $.wcall([$t74], "FieldByName", ["expiry_date"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t74], "WriteLnString", ["</expiry_date>"], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t74], "FieldByName", ["issued_by"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t74], "WriteString", ["<issued_by>"], C)));
      await $.stmt((await $.wcall([$t74], "WriteString", [(await $.mv((await $.wcall([$t74], "FieldByName", ["issued_by"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t74], "WriteLnString", ["</issued_by>"], C)));
    } else {
      await $.wset([$t74], "er_count", $.add((await $.wv([$t74], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t74], "RE_Errors", C, false)), "Lines")), "Add", ["Sənədin verildiyi orqan"])));
    }
    if ($.truthy($.not((await $.mv((await $.wcall([$t74], "FieldByName", ["issue_country"], C)), "isNUll"))))) {
      await $.stmt((await $.wcall([$t74], "WriteString", ["<issue_country>"], C)));
      await $.stmt((await $.wcall([$t74], "WriteString", [(await $.mv((await $.wcall([$t74], "FieldByName", ["issue_country"], C)), "AsString"))], C)));
      await $.stmt((await $.wcall([$t74], "WriteLnString", ["</issue_country>"], C)));
    } else {
      await $.wset([$t74], "er_count", $.add((await $.wv([$t74], "er_count", C, false)), 1), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t74], "RE_Errors", C, false)), "Lines")), "Add", ["Sənədin verildiyi ölkə"])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TGoAml_ServiceForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TGoAml_ServiceForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  await $.inherited(Self, "TGoAml_ServiceForm", "EventSinkChanged", [L0["eventsink"]], arguments);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TGoAml_ServiceForm", "Excel1Click", async function Excel1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t75 = (await $.v(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t75], "Connect", [], C));
    await $.stmt((await $.wcall([$t75], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t75], "DBGridTransactions1", C, false)), "DataSource")), "DataSet")), "GoAml", (await $.wv([$t75], "true", C, false)), (await $.wv([$t75], "true", C, false))], C)));
    await $.stmt($.wcall([$t75], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Excel2Click", async function Excel2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ods_subtrans")), "RecordCount")), 0))) {
    {
      const $t76 = (await $.v(C, "CMExcelExport2"));
      await $.stmt($.wcall([$t76], "Connect", [], C));
      await $.stmt((await $.wcall([$t76], "ExportDataset", [(await $.mv((await $.wv([$t76], "DM_goAml", C, false)), "ods_subtrans")), "Tax", (await $.wv([$t76], "True", C, false))], C)));
      await $.stmt($.wcall([$t76], "Disconnect", [], C));
    }
  } else {
    await $.stmt((await $.call(C, "Showmessage", ["  Heç bir  əməliyyat   yoxdur   !"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TGoAml_ServiceForm", "Initialize", null, arguments);
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
  U.method("TGoAml_ServiceForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_AlignDisabled", async function Get_AlignDisabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignDisabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_AlignWithMargins", async function Get_AlignWithMargins(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AlignWithMargins"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_BorderWidth", async function Get_BorderWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Integer", [(await $.v(C, "BorderWidth"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_DockSite", async function Get_DockSite(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DockSite"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_ExplicitHeight", async function Get_ExplicitHeight(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitHeight"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_ExplicitLeft", async function Get_ExplicitLeft(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitLeft"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_ExplicitTop", async function Get_ExplicitTop(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitTop"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_ExplicitWidth", async function Get_ExplicitWidth(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "ExplicitWidth"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_MouseInClient", async function Get_MouseInClient(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "MouseInClient"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_ParentCustomHint", async function Get_ParentCustomHint(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentCustomHint"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_ParentDoubleBuffered", async function Get_ParentDoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ParentDoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_PopupMode", async function Get_PopupMode(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PopupMode"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_ScreenSnap", async function Get_ScreenSnap(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "ScreenSnap"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_SnapBuffer", async function Get_SnapBuffer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "SnapBuffer"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_UseDockManager", async function Get_UseDockManager(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "UseDockManager"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TGoAml_ServiceForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TGoAml_ServiceForm", "CTRClick", async function CTRClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "pop_ctrtpr_clik", 1);
  await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "dsrc_grid")));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SQL")), "Clear", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("select transmode_code, report_code,custid,b.name,sum(lammount) lammount,dk  from (", "select ti.transmode_code,ti.report_code,l.kcustid as custid,sum(l.lamount) lammount, 1 as dk  from mmx_transactions l,mmx_transinfo ti "), " where l.id=ti.transid and  "), " (l.debitbalance in (select bal_cn from bal_spr1 where goaml=1) and  "), " l.debitbalance in ('1001','1011','1003','2801','2811'/*turan b,'2509','2519','2801','2811','4801','4811','4509','4519'*/))"), " and l.transactiondate=:V_DAT and l.lamount>=20000 and ti.report_code  in('CTR','TPR1','TPR2','TPR3')"), " group by ti.transmode_code,ti.report_code,l.kcustid "), "/* union all  "), " select ti.transmode_code,ti.report_code,l.kcustid as custid  , sum(l.lamount) lammount,1 as dk from mmx_transactions l,mmx_transinfo ti "), " where l.id=ti.transid and "), "(l.creditbalance in (select bal_cn from bal_spr1 where goaml=1)) and  "), " l.transactiondate=:V_DAT and l.lamount>=20000 and l.vid_op=-2 and ti.report_code='CTR'"), " group by ti.transmode_code,ti.report_code,l.kcustid*/"), " union all "), " select ti.transmode_code,ti.report_code,l.dcustid as custid  , sum(l.lamount) lammount,2 as dk from mmx_transactions l,mmx_transinfo ti "), " where l.id=ti.transid and "), "(l.creditbalance in (select bal_cn from bal_spr1 where goaml=1) and  "), " l.creditbalance in ('1001','1011','1003','2801','2811'/*,'2509','2519','2801','2811','4801','4811','4509','4519'*/)) "), " and l.transactiondate=:V_DAT and l.lamount>=20000 and ti.report_code  in('CTR','TPR1','TPR2','TPR3')"), " group by ti.transmode_code,ti.report_code,l.dcustid) a, customers b where  a.custid=b.id /*and b.compani  not in(2,3,5,6,7)*/ "), " group by transmode_code, report_code,custid ,name,dk"), " order by transmode_code"));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "Open", []);
  await $.mset((await $.v(C, "DBGrid2")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Rep")));
  await $.set(C, "v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SetVariable", ["v_dat", (await $.v(C, "v_dat"))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "Open", []);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Columns")), "Items")), [5])), "Visible", false);
  { const $t77 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "FieldByName", ["dk"])), "AsInteger"));
    if ($.eq($t77, 1)) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "sql")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add("select * from mmx_rep_car_dbt where transmode_code=:v_transmcode", " and transactiondate = :v_dat and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
      { const $t78 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), [4], $.add(" and KCUSTID =", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t78 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL", $t78); } }
      { const $t79 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), [5], " and amount_local >=20000"); if ($t79 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL", $t79); } }
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "Open", []);
      await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_maindbt")));
    }
    else if ($.eq($t77, 2)) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "Close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "sql")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add("select * from mmx_rep_car_credt where transmode_code=:v_transmcode", " and transactiondate = :v_dat and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
      { const $t80 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), [4], $.add(" and DCUSTID= ", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t80 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL", $t80); } }
      { const $t81 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), [5], " and amount_local >=20000"); if ($t81 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL", $t81); } }
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "Open", []);
      await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Main")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": false};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "GoAml_ServiceForm", Self);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "DM_goAml"))]))))) {
    await $.set(C, "DM_goAml", (await $.mcall((await $.v(C, "TDM_goAml")), "Create", [Self])));
  }
  await $.set(C, "FormEdit", (await $.mcall((await $.v(C, "TFormEdit")), "create", [Self])));
  L0["f"] = (await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "SB_ACA")), "CallBooleanFunction", ["checkadvancedobjectaccess", ["GOAML"]]));
  if ($.truthy($.eq(L0["f"], false))) {
    await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [0])), "TabVisible", false);
  } else {
    await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [0])), "TabVisible", true);
  }
  await $.mset((await $.v(C, "DTP1")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_SYSDAT")), "FieldByName", ["Tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "Date_begin")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_SYSDAT")), "FieldByName", ["Tek_dat1"])), "AsDateTime")));
  await $.mset((await $.v(C, "Date_end")), "Date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_SYSDAT")), "FieldByName", ["Tek_dat"])), "AsDateTime")));
  await $.set(C, "v_date1", (await $.mv((await $.v(C, "Date_begin")), "Date")));
  await $.set(C, "v_date2", (await $.mv((await $.v(C, "Date_end")), "Date")));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_FilesPath")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "FaylClick", async function FaylClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_FilesPath")), "RecordCount")), 0))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "First", []);
    { const $t82 = $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t83 = true;
      for (;;) {
        if (!$t83) { L0["i"] = $.succ(L0["i"], 1); }
        $t83 = false;
        if (!($.ord(L0["i"]) <= $.ord($t82))) break;
        {
          const $t84 = (await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport"));
          if ($.truthy($.eq((await $.wv([$t84], "Active", C, false)), (await $.wv([$t84], "True", C, false))))) {
            await $.stmt($.wcall([$t84], "close", [], C));
          }
          await $.stmt((await $.wcall([$t84], "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t84], "DBGridTransactions1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))], C)));
          await $.stmt($.wcall([$t84], "Open", [], C));
          await $.wset([$t84], "trasnfers_trid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t84], "DBGridTransactions1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), C);
          await $.wset([$t84], "vid_op", (await $.mv((await $.mcall((await $.mv((await $.wv([$t84], "DM_goAml", C, false)), "ODS_MainReport")), "FieldByName", ["VID_OP"])), "AsInteger")), C);
        }
        await $.stmt($.call(C, "createfiles", []));
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "Next", []);
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.v(C, "er_count")), 0))) {
      await $.stmt((await $.call(C, "MessageDlg", ["XML file uğurla yaradıldı", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
    }
  } else {
    await $.stmt((await $.call(C, "showmessage", ["Faylın yolu təyin olunmayıb!"])));
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Cap1Click", async function Cap1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "repH"))]))))) {
    await $.set(C, "repH", (await $.mcall((await $.v(C, "TrepH")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "repF"))]))))) {
    await $.set(C, "repF", (await $.mcall((await $.v(C, "TrepF")), "Create", [Self])));
  }
  {
    const $t85 = (await $.v(C, "DM_goAml"));
    await $.mcall((await $.wv([$t85], "odsc_custSube", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t85], "odsc_custSube", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mv((await $.wv([$t85], "DM_goAml", C, false)), "Ods_subheliCUSTID")), "AsInteger"))])));
    await $.mcall((await $.wv([$t85], "odsc_custSube", C, false)), "Open", []);
  }
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "odsc_custSubeCUST_TYPE")), "AsInteger")), 0))) {
    {
      const $t86 = (await $.v(C, "repF"));
      await $.mset((await $.wv([$t86], "QRLabel18", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t86], "DM_goAml", C, false)), "odsc_custSubeNAME")), "AsString")));
      await $.mset((await $.wv([$t86], "QRLabel19", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t86], "DM_goAml", C, false)), "odsc_custSubeLASTNAME")), "AsString")));
      await $.mset((await $.wv([$t86], "QRLabel20", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t86], "DM_goAml", C, false)), "odsc_custSubeSONAME")), "AsString")));
      await $.mset((await $.wv([$t86], "QRLabel21", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t86], "DM_goAml", C, false)), "odsc_custSubeINN")), "AsString")));
      await $.mset((await $.wv([$t86], "QRLabel22", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t86], "DM_goAml", C, false)), "odsc_custSubeBIRTHDAY")), "AsString")));
      await $.mset((await $.wv([$t86], "QRLabel23", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t86], "DM_goAml", C, false)), "odsc_custSubeCNTR")), "AsString")));
    }
    await $.mcall((await $.v(C, "repF")), "Preview", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "odsc_custSubeCUST_TYPE")), "AsInteger")), 0))) {
    {
      const $t87 = (await $.v(C, "repH"));
      await $.mset((await $.wv([$t87], "QRLabel18", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t87], "DM_goAml", C, false)), "odsc_custSubeH_NAME")), "AsString")));
      await $.mset((await $.wv([$t87], "QRLabel19", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t87], "DM_goAml", C, false)), "odsc_custSubeINN")), "AsString")));
      await $.mset((await $.wv([$t87], "QRLabel20", C, false)), "Caption", (await $.mv((await $.mv((await $.wv([$t87], "DM_goAml", C, false)), "odsc_custSubeDAT_NAL")), "AsString")));
    }
    await $.mcall((await $.v(C, "repH")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "cap2Click", async function cap2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t88 = (await $.v(C, "DM_goAml"));
    await $.mcall((await $.wv([$t88], "odsc_custSube", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t88], "odsc_custSube", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t88], "DBGrid2", C, false)), "DataSource")), "DataSet")), "FieldByName", ["custid"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t88], "odsc_custSube", C, false)), "Open", []);
  }
  await $.set(C, "word_type", (-(1)));
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "odsc_custSubeCUST_TYPE")), "AsInteger")), 0))) {
    await $.set(C, "word_type", 2);
    {
      const $t89 = (await $.v(C, "DM_goAml"));
      await $.mcall((await $.wv([$t89], "Templates", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t89], "Templates", C, false)), "SetVariable", ["v_custtype", (await $.wv([$t89], "word_type", C, false))])));
      await $.mcall((await $.wv([$t89], "Templates", C, false)), "Open", []);
    }
  } else {
    await $.set(C, "word_type", 3);
    {
      const $t90 = (await $.v(C, "DM_goAml"));
      await $.mcall((await $.wv([$t90], "Templates", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t90], "Templates", C, false)), "SetVariable", ["v_custtype", (await $.wv([$t90], "word_type", C, false))])));
      await $.mcall((await $.wv([$t90], "Templates", C, false)), "Open", []);
    }
  }
  await $.stmt((await $.call(C, "cap", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Templates")), "FieldByName", ["Path"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Templates")), "FieldByName", ["ID"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Date_beginCloseUp", async function Date_beginCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_date1", (await $.mv((await $.v(C, "Date_begin")), "Date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Date_endCloseUp", async function Date_endCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "v_date2", (await $.mv((await $.v(C, "Date_end")), "Date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "DBGrid2CellClick", async function DBGrid2CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy($.eq((await $.v(C, "pop_ctrtpr_clik")), 1))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), (await $.mv((await $.v(C, "DM_goAml")), "DS_Rep"))))) {
      { const $t91 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "FieldByName", ["dk"])), "AsInteger"));
        if ($.eq($t91, 1)) {
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "close", []);
          await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "sql")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_dbt where transmode_code=:v_transmcode", " and transactiondate = :v_dat and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
          { const $t92 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), [4], $.add(" and KCUSTID =", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t92 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL", $t92); } }
          { const $t93 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), [5], " and amount_local >=20000"); if ($t93 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL", $t93); } }
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "Open", []);
          await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "ds_maindbt")));
          await $.set(C, "dey", ((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["CUSTID"])), "AsString"))));
          await $.set(C, "dey1", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsString")));
        }
        else if ($.eq($t91, 2)) {
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "Close", []);
          await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Clear", []);
          await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "sql")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add("select * from mmx_rep_car_credt where transmode_code=:v_transmcode", " and transactiondate = :v_dat and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
          { const $t94 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), [4], $.add(" and DCUSTID= ", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t94 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL", $t94); } }
          { const $t95 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), [5], " and amount_local >=20000"); if ($t95 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL", $t95); } }
          await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "Open", []);
          await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Main")));
          await $.set(C, "dey", ((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["CUSTID"])), "AsString"))));
          await $.set(C, "dey1", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions1")), "DataSource")), "DataSet")), "FieldByName", ["TRANSACTIONNUMBER"])), "AsString")));
        }
      }
    }
  }
  if ($.truthy((await $.or_(($.eq((await $.v(C, "pop_ctrtpr_clik")), 2)), async () => ($.eq((await $.v(C, "pop_ctrtpr_clik")), 4)))))) {
    { const $t96 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "FieldByName", ["dk"])), "AsInteger"));
      if ($.eq($t96, 1)) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_dbt where transmode_code=:v_transmcode", " and transactiondate between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT)"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
        { const $t97 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), [4], $.add(" and KCUSTID =", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t97 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL", $t97); } }
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "Open", []);
        await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_maindbt")));
      }
      else if ($.eq($t96, 2)) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_credt where transmode_code=:v_transmcode ", " and transactiondate  between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT)"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
        { const $t98 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), [4], $.add(" and DCUSTID= ", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t98 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL", $t98); } }
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "Open", []);
        await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Main")));
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "pop_ctrtpr_clik")), 3))) {
    { const $t99 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "FieldByName", ["dk"])), "AsInteger"));
      if ($.eq($t99, 1)) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_dbt where transmode_code=:v_transmcode", " and transactiondate between  TRUNC (to_date (:V_DAT) , 'YEAR') and ADD_MONTHS(TRUNC (TO_DATE(:V_DAT) ,'YEAR'),12)-1"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
        { const $t100 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), [4], $.add(" and KCUSTID =", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t100 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL", $t100); } }
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "Open", []);
        await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_maindbt")));
      }
      else if ($.eq($t99, 2)) {
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "close", []);
        await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Clear", []);
        await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_credt where transmode_code=:v_transmcode ", " and transactiondate  between TRUNC (to_date (:V_DAT) , 'YEAR') and ADD_MONTHS(TRUNC (TO_DATE(:V_DAT) ,'YEAR'),12)-1"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
        { const $t101 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), [4], $.add(" and DCUSTID= ", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t101 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL", $t101); } }
        await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "Open", []);
        await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Main")));
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBGrid2")), "DataSource")), (await $.mv((await $.v(C, "DM_goAml")), "DSRC_REP201"))))) {
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep201TRANSMODE_CODE")), "AsString"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_dcustid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep201CUSTID")), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_Kcustid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep201CCUSTID")), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_REP201REPORT_CODE")), "AsString"))])));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "Open", []);
    await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DSRC_Main201")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TGoAml_ServiceForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TGoAml_ServiceForm", "mizl1Click", async function mizl1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RE_Errors")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "MouseEnterEvent", async function MouseEnterEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseEnter", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "MouseLeaveEvent", async function MouseLeaveEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnMouseLeave", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Cap", async function Cap(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"path": $.copyArg(p0), "id": $.copyArg(p1), result: undefined, "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null, "v_pozt": 0, "v_filename": '', "v_paziton": '', "v_filepas": null};
  await $.fixArgs(L0, ["path", "id"]);
  L0["filenotfound"] = "Fayıl tapılmadı";
  L0["desktoppath"] = $.fn(async function DesktopPath() {
  const L1 = {result: '', "zpath": $.sarr()};
  await $.stmt((await $.call(C, "SHGetFolderPath", [0, (await $.v(C, "CSIDL_DESKTOP")), 0, (await $.v(C, "SHGFP_TYPE_CURRENT")), L1["zpath"]])));
  L1["result"] = (L1["zpath"]);
  return L1.result;
});
  L0["v_filename"] = L0["path"];
  L0["v_pozt"] = (await $.call(C, "lastdelimiter", ["\\", L0["v_filename"]]));
  L0["v_paziton"] = (await $.call(C, "Copy", [L0["v_filename"], $.add(L0["v_pozt"], 1), (await $.call(C, "Length", [L0["v_filename"]]))]));
  await $.stmt((await $.call(C, "DeleteFile", [$.add($.add(L0["desktoppath"], "\\"), L0["v_paziton"])])));
  await $.stmt((await $.call(C, "CopyFile", [(await $.call(C, "PChar", [L0["v_filename"]])), (await $.call(C, "PChar", [$.add($.add(L0["desktoppath"], "\\"), L0["v_paziton"])])), false])));
  L0["v_filepas"] = $.add($.add(L0["desktoppath"], "\\"), L0["v_paziton"]);
  L0["what"] = (await $.call(C, "OleVariant", [(await $.v(C, "wdGoToBookmark"))]));
  L0["ftemplatepath"] = L0["v_filepas"];
  await $.set(C, "TemplID", L0["id"]);
  L0["template"] = (await $.v(C, "EmptyParam"));
  L0["templatebool"] = false;
  L0["itemindex"] = 1;
  await $.mcall((await $.v(C, "Wordapplication")), "Connect", []);
  await $.mset((await $.v(C, "Wordapplication")), "Visible", true);
  await $.mset((await $.mv((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Application")), "Caption", (await $.v(C, "name")));
  await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckSpellingAsYouType", false);
  await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckGrammarAsYouType", false);
  if ($.truthy((await $.call(C, "FileExists", [L0["ftemplatepath"]])))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Open", [L0["ftemplatepath"], L0["template"], L0["templatebool"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"]])));
  } else {
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", [L0["filenotfound"]])));
  }
  await $.stmt((await $.mcall((await $.v(C, "WordDocument")), "ConnectTo", [(await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Item", [L0["itemindex"]]))])));
  await $.mset((await $.mv((await $.mv((await $.v(C, "WordDocument")), "Application")), "Get_ActiveWindow")), "Caption", (await $.v(C, "Caption")));
  try {
    {
      const $t103 = (await $.v(C, "DM_goAml"));
      const $t104 = (await $.wv([$t103], "ReplaceCustDataSet", C, false));
      const $t105 = (await $.wv([$t103, $t104], "WordDocument", C, false));
      { const $t106 = (await $.mv((await $.wv([$t103, $t104, $t105], "Bookmarks", C, false)), "Count"));
        await $.wset([$t103, $t104, $t105], "IbookmarkCount", 1, { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true });
        let $t107 = true;
        for (;;) {
          if (!$t107) { await $.wset([$t103, $t104, $t105], "IbookmarkCount", $.succ((await $.wv([$t103, $t104, $t105], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), 1), { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }); }
          $t107 = false;
          if (!($.ord((await $.wv([$t103, $t104, $t105], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false))) <= $.ord($t106))) break;
          await $.wset([$t103, $t104, $t105], "OBookmarkCount", (await $.wv([$t103, $t104, $t105], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true });
          await $.wset([$t103, $t104, $t105], "oBookMarkName", (await $.mv((await $.mcall((await $.wv([$t103, $t104, $t105], "Bookmarks", C, false)), "Item", [(await $.wv([$t103, $t104, $t105], "OBookmarkCount", { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true }, false))])), "Get_Name")), { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t103, $t104, $t105], "WordApplication", C, false)), "Selection")), "GoTo_", [(await $.wv([$t103, $t104, $t105], "What", { get: async () => L0["what"], set: async (v) => { L0["what"] = v; }, local: true }, false)), (await $.wv([$t103, $t104, $t105], "EmptyParam", C, false)), (await $.wv([$t103, $t104, $t105], "EmptyParam", C, false)), (await $.wv([$t103, $t104, $t105], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))])));
          await $.mcall((await $.wv([$t103, $t104, $t105], "ReplaceCustDataSet", C, false)), "Close", []);
          await $.stmt((await $.wcall([$t103, $t104, $t105], "SetVariable", ["tid", (await $.wv([$t103, $t104, $t105], "TemplID", C, false))], C)));
          await $.stmt((await $.wcall([$t103, $t104, $t105], "SetVariable", ["bname", (await $.wv([$t103, $t104, $t105], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))], C)));
          await $.mcall((await $.wv([$t103, $t104, $t105], "ReplaceCustDataSet", C, false)), "Open", []);
          await $.wset([$t103, $t104, $t105], "tFieldName", (await $.mv((await $.wcall([$t103, $t104, $t105], "FieldByName", ["FIELDNAME"], C)), "AsString")), { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t103, $t104, $t105], "WordApplication", C, false)), "Selection")), "InsertAfter", [(await $.mv((await $.mcall((await $.wv([$t103, $t104, $t105], "odsc_custSube", C, false)), "FieldByName", [(await $.wv([$t103, $t104, $t105], "tFieldName", { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true }, false))])), "AsString"))])));
          await $.tick();
        }
      }
    }
    await $.mcall((await $.v(C, "WordDocument")), "Disconnect", []);
    await $.mcall((await $.v(C, "Wordapplication")), "Disconnect", []);
  } catch ($t102) {
    $.rethrowControl($t102);
    $.handled($t102);
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", [$.add(L0["obookmarkname"], " Bukmarkı daxil edilmeyib ")])));
  }
  return L0.result;
}, {"params": ["Path", "id"], "kind": "procedure", "ptypes": ["String", "integer"]});
  U.method("TGoAml_ServiceForm", "ActinPrintExecute", async function ActinPrintExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "template": null, "templatebool": null, "ftemplatepath": null, "itemindex": null, "obookmarkcount": null, "what": null, "obookmarkname": null, "ibookmarkcount": 0, "tfieldname": '', "savechanges": null, "originalformat": null, "routedocument": null};
  await $.fixArgs(L0, ["sender"]);
  L0["filenotfound"] = "Fayl tapılmadı";
  {
    const $t108 = (await $.v(C, "DM_goAml"));
    await $.mcall((await $.wv([$t108], "Templates", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t108], "Templates", C, false)), "SetVariable", ["v_custtype", (await $.wv([$t108], "word_type", C, false))])));
    await $.mcall((await $.wv([$t108], "Templates", C, false)), "Open", []);
  }
  L0["what"] = (await $.call(C, "Olevariant", [(await $.v(C, "wdGoToBookmark"))]));
  L0["ftemplatepath"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Templates")), "FieldByName", ["Path"])), "AsString"));
  await $.set(C, "TemplID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Templates")), "FieldByName", ["ID"])), "AsInteger")));
  L0["template"] = (await $.v(C, "EmptyParam"));
  L0["templatebool"] = false;
  L0["itemindex"] = 1;
  await $.mcall((await $.v(C, "WordApplication")), "Connect", []);
  await $.mset((await $.v(C, "WordApplication")), "Visible", true);
  await $.mset((await $.mv((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Application")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Templates")), "FieldByName", ["Path"])), "AsString")));
  await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckSpellingAsYouType", false);
  await $.mset((await $.mv((await $.v(C, "WordApplication")), "Options")), "CheckGrammarAsYouType", false);
  if ($.truthy((await $.call(C, "FileExists", [L0["ftemplatepath"]])))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Open", [L0["ftemplatepath"], L0["template"], L0["templatebool"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"], L0["template"]])));
  } else {
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", [L0["filenotfound"]])));
  }
  await $.stmt((await $.mcall((await $.v(C, "WordDocument")), "ConnectTo", [(await $.mcall((await $.mv((await $.v(C, "WordApplication")), "Documents")), "Item", [L0["itemindex"]]))])));
  try {
    {
      const $t110 = (await $.v(C, "DM_goAml"));
      const $t111 = (await $.wv([$t110], "ReplaceCustDataSet", C, false));
      const $t112 = (await $.wv([$t110, $t111], "WordDocument", C, false));
      { const $t113 = (await $.mv((await $.wv([$t110, $t111, $t112], "Bookmarks", C, false)), "Count"));
        await $.wset([$t110, $t111, $t112], "IbookmarkCount", 1, { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true });
        let $t114 = true;
        for (;;) {
          if (!$t114) { await $.wset([$t110, $t111, $t112], "IbookmarkCount", $.succ((await $.wv([$t110, $t111, $t112], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), 1), { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }); }
          $t114 = false;
          if (!($.ord((await $.wv([$t110, $t111, $t112], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false))) <= $.ord($t113))) break;
          await $.wset([$t110, $t111, $t112], "OBookmarkCount", (await $.wv([$t110, $t111, $t112], "IbookmarkCount", { get: async () => L0["ibookmarkcount"], set: async (v) => { L0["ibookmarkcount"] = v; }, local: true }, false)), { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true });
          await $.wset([$t110, $t111, $t112], "oBookMarkName", (await $.mv((await $.mcall((await $.wv([$t110, $t111, $t112], "Bookmarks", C, false)), "Item", [(await $.wv([$t110, $t111, $t112], "OBookmarkCount", { get: async () => L0["obookmarkcount"], set: async (v) => { L0["obookmarkcount"] = v; }, local: true }, false))])), "Get_Name")), { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t110, $t111, $t112], "WordApplication", C, false)), "Selection")), "GoTo_", [(await $.wv([$t110, $t111, $t112], "What", { get: async () => L0["what"], set: async (v) => { L0["what"] = v; }, local: true }, false)), (await $.wv([$t110, $t111, $t112], "EmptyParam", C, false)), (await $.wv([$t110, $t111, $t112], "EmptyParam", C, false)), (await $.wv([$t110, $t111, $t112], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))])));
          await $.mcall((await $.wv([$t110, $t111, $t112], "ReplaceCustDataSet", C, false)), "Close", []);
          await $.stmt((await $.wcall([$t110, $t111, $t112], "SetVariable", ["tid", (await $.wv([$t110, $t111, $t112], "TemplID", C, false))], C)));
          await $.stmt((await $.wcall([$t110, $t111, $t112], "SetVariable", ["bname", (await $.wv([$t110, $t111, $t112], "oBookMarkName", { get: async () => L0["obookmarkname"], set: async (v) => { L0["obookmarkname"] = v; }, local: true }, false))], C)));
          await $.mcall((await $.wv([$t110, $t111, $t112], "ReplaceCustDataSet", C, false)), "Open", []);
          await $.wset([$t110, $t111, $t112], "tFieldName", (await $.mv((await $.wcall([$t110, $t111, $t112], "FieldByName", ["FIELDNAME"], C)), "AsString")), { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true });
          await $.stmt((await $.mcall((await $.mv((await $.wv([$t110, $t111, $t112], "WordApplication", C, false)), "Selection")), "InsertAfter", [(await $.mv((await $.mcall((await $.wv([$t110, $t111, $t112], "odsc_custSube", C, false)), "FieldByName", [(await $.wv([$t110, $t111, $t112], "tFieldName", { get: async () => L0["tfieldname"], set: async (v) => { L0["tfieldname"] = v; }, local: true }, false))])), "AsString"))])));
          await $.tick();
        }
      }
    }
    await $.mcall((await $.v(C, "WordDocument")), "Disconnect", []);
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
  } catch ($t109) {
    $.rethrowControl($t109);
    $.handled($t109);
    L0["savechanges"] = (await $.v(C, "WdDoNotSaveChanges"));
    L0["originalformat"] = (await $.v(C, "UnAssigned"));
    L0["routedocument"] = (await $.v(C, "UnAssigned"));
    await $.stmt((await $.mcall((await $.v(C, "WordApplication")), "Quit", [L0["savechanges"], L0["originalformat"], L0["routedocument"]])));
    await $.mcall((await $.v(C, "WordApplication")), "Disconnect", []);
    await $.stmt((await $.call(C, "ShowMessage", [$.add(L0["obookmarkname"], "   Bukmarklar daxil edilmeyib ")])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "muq1Click", async function muq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t115 = (await $.v(C, "DM_goAml"));
    await $.mcall((await $.wv([$t115], "odsc_custSube", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t115], "odsc_custSube", C, false)), "SetVariable", ["v_id", (await $.mv((await $.mv((await $.wv([$t115], "DM_goAml", C, false)), "Ods_subheliCUSTID")), "AsInteger"))])));
    await $.mcall((await $.wv([$t115], "odsc_custSube", C, false)), "Open", []);
  }
  await $.set(C, "word_type", (-(1)));
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "odsc_custSubeCUST_TYPE")), "AsInteger")), 0))) {
    await $.set(C, "word_type", 1);
    {
      const $t116 = (await $.v(C, "DM_goAml"));
      await $.mcall((await $.wv([$t116], "Templates", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t116], "Templates", C, false)), "SetVariable", ["v_custtype", (await $.wv([$t116], "word_type", C, false))])));
      await $.mcall((await $.wv([$t116], "Templates", C, false)), "Open", []);
    }
  } else {
    await $.set(C, "word_type", 0);
    {
      const $t117 = (await $.v(C, "DM_goAml"));
      await $.mcall((await $.wv([$t117], "Templates", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t117], "Templates", C, false)), "SetVariable", ["v_custtype", (await $.wv([$t117], "word_type", C, false))])));
      await $.mcall((await $.wv([$t117], "Templates", C, false)), "Open", []);
    }
  }
  await $.stmt((await $.call(C, "cap", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Templates")), "FieldByName", ["Path"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Templates")), "FieldByName", ["ID"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "PR21Click", async function PR21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "pop_ctrtpr_clik", 3);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SQL")), "Clear", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("select transmode_code, report_code,custid,b.name,sum(lammount) lammount,dk  from (", "select ti.transmode_code,ti.report_code,l.kcustid as custid,sum(l.lamount) lammount, 1 as dk  from mmx_transactions l,mmx_transinfo ti"), " where  l.id = ti.transid and (l.debitbalance in (select bal_cn from bal_spr1 where goaml=1) and l.debitbalance in ('1001','1011','1003'/*turanBank*/,'2509','2801','2811'))"), "and l.transactiondate between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT) and ti.report_code in('TPR1','TPR2')"), "group by ti.transmode_code,ti.report_code,l.kcustid "), "union all "), "select ti.transmode_code,ti.report_code,l.dcustid as custid  , sum(l.lamount) lammount,2 as dk from mmx_transactions l,mmx_transinfo ti"), " where l.id=ti.transid and (l.creditbalance in (select bal_cn from bal_spr1 where goaml=1) and l.creditbalance in ('1001','1011','1003'/*,'2509','2801','2811'*/))"), "and l.transactiondate between TRUNC (to_date (:V_DAT) , 'YEAR') and ADD_MONTHS(TRUNC (TO_DATE(:V_DAT) ,'YEAR'),12)-1  and ti.report_code in('TPR1','TPR2')"), "group by ti.transmode_code,ti.report_code,l.dcustid) a, customers b where a.lammount>=200000 and a.custid=b.id "), " group by transmode_code, report_code,custid ,name,dk"), " order by transmode_code"));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "Open", []);
  await $.mset((await $.v(C, "DBGrid2")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Rep")));
  await $.set(C, "v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SetVariable", ["v_dat", (await $.v(C, "v_dat"))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "Open", []);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Columns")), "Items")), [5])), "Visible", false);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "RecordCount")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "close", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Clear", []);
    await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "sql")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add("select * from mmx_rep_car_dbt where transmode_code=:v_transmcode", " and transactiondate = :v_dat and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_main")), "close", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_main")), "SQL")), "Clear", []);
    await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_main")), "sql")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add("select * from mmx_rep_car_dbt where transmode_code=:v_transmcode", " and transactiondate = :v_dat and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
    await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_main")), "open", []);
  }
  { const $t118 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "FieldByName", ["dk"])), "AsInteger"));
    if ($.eq($t118, 1)) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_dbt where transmode_code=:v_transmcode", " and transactiondate between  TRUNC (to_date (:V_DAT) , 'YEAR') and ADD_MONTHS(TRUNC (TO_DATE(:V_DAT) ,'YEAR'),12)-1"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
      { const $t119 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), [4], $.add(" and KCUSTID =", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t119 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL", $t119); } }
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "Open", []);
      await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_maindbt")));
    }
    else if ($.eq($t118, 2)) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_credt where transmode_code=:v_transmcode ", " and transactiondate  between TRUNC (to_date (:V_DAT) , 'YEAR') and ADD_MONTHS(TRUNC (TO_DATE(:V_DAT) ,'YEAR'),12)-1"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
      { const $t120 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), [4], $.add(" and DCUSTID= ", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t120 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL", $t120); } }
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "Open", []);
      await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Main")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "PR31Click", async function PR31Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "pop_ctrtpr_clik", 4);
  await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "dsrc_grid")));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SQL")), "Clear", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("select transmode_code, report_code,custid,b.name,sum(lammount) lammount,dk  from (/*", " select ti.transmode_code,ti.report_code,l.kcustid as custid,sum(l.lamount) lammount, 1 as dk  from mmx_transactions l,mmx_transinfo ti"), " where  l.id = ti.transid and (l.debitbalance in (select bal_cn from bal_spr1 where goaml=1) and  "), " l.debitbalance in ('1001','1011','1003','2509','2519','2801','2811','4801','4811'))"), " and l.transactiondate between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT) and ti.report_code in('TPR3')"), " group by ti.transmode_code,ti.report_code,l.kcustid "), " union all */"), " select ti.transmode_code,ti.report_code,l.dcustid as custid  , sum(l.lamount) lammount,2 as dk from mmx_transactions l,mmx_transinfo ti"), " where l.id=ti.transid and(l.creditbalance in (select bal_cn from bal_spr1 where goaml=1) and  "), " l.creditbalance in ('1001','1011','1003','2509','2519','2801','2811','4801','4811')) "), " and l.transactiondate between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT)  and ti.report_code in('TPR3')"), " group by ti.transmode_code,ti.report_code,l.dcustid) a, customers b where a.lammount>=15000 and a.custid=b.id and b.compani in(7)"), " group by transmode_code, report_code,custid ,name,dk"), " order by transmode_code"));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "Open", []);
  await $.mset((await $.v(C, "DBGrid2")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Rep")));
  await $.set(C, "v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SetVariable", ["v_dat", (await $.v(C, "v_dat"))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "Open", []);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Columns")), "Items")), [5])), "Visible", false);
  { const $t121 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "FieldByName", ["dk"])), "AsInteger"));
    if ($.eq($t121, 1)) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_dbt where transmode_code=:v_transmcode", " and transactiondate between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT)"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
      { const $t122 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), [4], $.add(" and KCUSTID =", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t122 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL", $t122); } }
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "Open", []);
      await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_maindbt")));
    }
    else if ($.eq($t121, 2)) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_credt where transmode_code=:v_transmcode ", " and transactiondate  between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT)"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
      { const $t123 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), [4], $.add(" and DCUSTID= ", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t123 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL", $t123); } }
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "Open", []);
      await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Main")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Redakt1Click", async function Redakt1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormMMX"))]))))) {
    await $.set(C, "FormMMX", (await $.mcall((await $.v(C, "TFormMMX")), "create", [Self])));
  }
  await $.mcall((await $.v(C, "FormMMX")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TGoAml_ServiceForm", "Set_AlignWithMargins", async function Set_AlignWithMargins(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AlignWithMargins", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_BorderWidth", async function Set_BorderWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "BorderWidth", (await $.call(C, "TBorderWidth", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TGoAml_ServiceForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TGoAml_ServiceForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TGoAml_ServiceForm", "Set_DockSite", async function Set_DockSite(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DockSite", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TGoAml_ServiceForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "string", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TGoAml_ServiceForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_ParentCustomHint", async function Set_ParentCustomHint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentCustomHint", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_ParentDoubleBuffered", async function Set_ParentDoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ParentDoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TGoAml_ServiceForm", "Set_PopupMode", async function Set_PopupMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PopupMode", (await $.call(C, "TPopupMode", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPopupMode"]});
  U.method("TGoAml_ServiceForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TGoAml_ServiceForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_ScreenSnap", async function Set_ScreenSnap(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "ScreenSnap", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_SnapBuffer", async function Set_SnapBuffer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "SnapBuffer", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TGoAml_ServiceForm", "Set_UseDockManager", async function Set_UseDockManager(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "UseDockManager", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TGoAml_ServiceForm", "STRClick", async function STRClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "pop_ctrtpr_clik", 5);
  await $.mset((await $.v(C, "DBGrid2")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DSRC_Rep201")));
  await $.set(C, "v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep201")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep201")), "SetVariable", ["v_dat", (await $.v(C, "v_dat"))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep201")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep201TRANSMODE_CODE")), "AsString"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_dcustid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep201CUSTID")), "AsInteger"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_Kcustid", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep201CCUSTID")), "AsInteger"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_REP201REPORT_CODE")), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main201")), "Open", []);
  await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DSRC_Main201")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "tpr11Click", async function tpr11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_dat1": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "pop_ctrtpr_clik", 2);
  await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "dsrc_grid")));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SQL")), "Clear", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("select transmode_code, report_code,custid,b.name,sum(lammount) lammount,dk  from (/*", " select ti.transmode_code,ti.report_code,l.kcustid as custid,sum(l.lamount) lammount, 1 as dk  from mmx_transactions l,mmx_transinfo ti"), " where  l.id = ti.transid and (l.debitbalance in (select bal_cn from bal_spr1 where goaml=1) and  "), " l.debitbalance in ('1001','1011','1003','2509','2519','2801','2811','4801','4811'))"), " and l.transactiondate between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT) and ti.report_code in('TPR1','TPR2')"), " group by ti.transmode_code,ti.report_code,l.kcustid "), " union all */"), " select ti.transmode_code,ti.report_code,l.dcustid as custid  , sum(l.lamount) lammount,2 as dk from mmx_transactions l,mmx_transinfo ti"), " where l.id=ti.transid and (l.creditbalance in (select bal_cn from bal_spr1 where goaml=1) and  "), " l.creditbalance in ('1001','1011','1003','2509','2519','2801','2811','4801','4811')) "), " and l.transactiondate between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT)  and ti.report_code in('TPR1','TPR2')"), " group by ti.transmode_code,ti.report_code,l.dcustid) a, customers b where a.lammount>=30000 and a.custid=b.id and b.compani in(5,6)"), " group by transmode_code, report_code,custid ,name,dk"), " order by transmode_code"));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "Open", []);
  await $.mset((await $.v(C, "DBGrid2")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Rep")));
  await $.set(C, "v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "SetVariable", ["v_dat", (await $.v(C, "v_dat"))])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_MainReport")), "Open", []);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Columns")), "Items")), [5])), "Visible", false);
  { const $t124 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Rep")), "FieldByName", ["dk"])), "AsInteger"));
    if ($.eq($t124, 1)) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_dbt where transmode_code=:v_transmcode", " and transactiondate between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT)"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
      { const $t125 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL")), [4], $.add(" and KCUSTID =", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t125 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "SQL", $t125); } }
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "Ods_maindbt")), "Open", []);
      await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_maindbt")));
    }
    else if ($.eq($t124, 2)) {
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), "Text", $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" select * from mmx_rep_car_credt where transmode_code=:v_transmcode ", " and transactiondate  between ADD_MONTHS((LAST_DAY(:V_DAT)+1),-1) and LAST_DAY(:V_DAT)"), " and report_code=:v_report_code"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), "\r"), " order by  transactionnumber"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_transmcode", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepTRANSMODE_CODE")), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_dat", (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP1")), "Date"))]))]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SetVariable", ["v_report_code", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepREPORT_CODE")), "AsString"))])));
      { const $t126 = await $.iset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL")), [4], $.add(" and DCUSTID= ", (await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_RepCUSTID")), "AsString")))); if ($t126 !== undefined) { await $.mset((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "SQL", $t126); } }
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_Main")), "Open", []);
      await $.mset((await $.v(C, "DBGridTransactions1")), "DataSource", (await $.mv((await $.v(C, "DM_goAml")), "DS_Main")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGoAml_ServiceForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "b": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "SetVariable", ["v_id", 21])));
  await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "open", []);
  L0["b"] = "";
  { const $t127 = $.sub((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "RecordCount")), 1);
    L0["i"] = 0;
    let $t128 = true;
    for (;;) {
      if (!$t128) { L0["i"] = $.succ(L0["i"], 1); }
      $t128 = false;
      if (!($.ord(L0["i"]) <= $.ord($t127))) break;
      { const $t129 = await $.iset((await $.v(C, "a")), [L0["i"]], (await $.mv((await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "FieldByName", ["custid2"])), "AsString"))); if ($t129 !== undefined) { await $.set(C, "a", $t129); } }
      if ($.truthy($.lt(L0["i"], $.sub((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "RecordCount")), 1)))) {
        L0["b"] = $.add($.add(L0["b"], (await $.idx((await $.v(C, "a")), [L0["i"]]))), ",");
      } else {
        L0["b"] = $.add(L0["b"], (await $.idx((await $.v(C, "a")), [L0["i"]])));
      }
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_CustRelSignatory")), "Next", []);
      await $.mcall((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "close", []);
      await $.mcall((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Clear", []);
      await $.mset((await $.mv((await $.mv((await $.v(C, "DM_goAml")), "ODS_TPERSON")), "SQL")), "Text", $.add($.add("select * from mmx_signatory where custid in(", L0["b"]), ")"));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
