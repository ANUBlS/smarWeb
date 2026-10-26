// Generated from BlackListImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BlackListImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "BlackInstMgr_TLB", "StdVcl", "ComCtrls", "ToolWin", "ImgList", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "Menus", "DB", "DBCtrls", "ActnList", "DBViewComboBox", "CheckLst", "Evanescence", "XDBGrids", "XFSCtrls", "OracleData", "xmldoc", "XMLIntf", "Buttons", "Gauges", "CMExcelExport", "IdHTTP", "IdSSLOpenSSL", "IdURI", "Mask", "DBCtrlsEh", "ComObj", "ComServ", "DmBlackImpl", "Variants", "InsImpl", "countrieslmpl", "sboapiDataModuleImpl", "SBTranslateProc", "UnitSearch", "SynPdf", "ShellAPI", "Math"]);
  const C = [U];
  U.defClass("TBlackInst", "TActiveForm", {"imagelist1": {"name": "ImageList1", "type": "TImageList"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "coolbar1": {"name": "CoolBar1", "type": "TCoolBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "isertbtn": {"name": "isertbtn", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "evanescence1": {"name": "Evanescence1", "type": "TEvanescence"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "button3": {"name": "Button3", "type": "TButton"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "richedit2": {"name": "RichEdit2", "type": "TRichEdit"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1fild": {"name": "OracleDataSet1FILD", "type": "TWideStringField"}, "opendialog2": {"name": "OpenDialog2", "type": "TOpenDialog"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "panle_gauge1": {"name": "panle_Gauge1", "type": "TXFPanel"}, "gauge_cust": {"name": "Gauge_cust", "type": "TGauge"}, "excelat1": {"name": "Excelat1", "type": "TMenuItem"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "yerli1": {"name": "yerli1", "type": "TMenuItem"}, "panle_gauge": {"name": "panle_Gauge", "type": "TXFPanel"}, "gauge": {"name": "Gauge", "type": "TGauge"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "popupmenu3": {"name": "PopupMenu3", "type": "TPopupMenu"}, "sst1": {"name": "sst1", "type": "TMenuItem"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xdbgrid3": {"name": "XDBGrid3", "type": "TXDBGrid"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "n1988sanksiyasiyahs1": {"name": "N1988sanksiyasiyahs1", "type": "TMenuItem"}, "n1718sanksiyasiyahs1": {"name": "N1718sanksiyasiyahs1", "type": "TMenuItem"}, "n2231siyahs1": {"name": "N2231siyahs1", "type": "TMenuItem"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oracledataset3id": {"name": "OracleDataSet3ID", "type": "TFloatField"}, "oracledataset3name": {"name": "OracleDataSet3NAME", "type": "TWideStringField"}, "oracledataset3surname": {"name": "OracleDataSet3SURNAME", "type": "TWideStringField"}, "oracledataset3api_response": {"name": "OracleDataSet3API_RESPONSE", "type": "TWideMemoField"}, "oracledataset3created_at": {"name": "OracleDataSet3CREATED_AT", "type": "TDateTimeField"}, "oracledataset3status": {"name": "OracleDataSet3STATUS", "type": "TWideStringField"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "oracledataset2lastname": {"name": "OracleDataSet2LASTNAME", "type": "TWideStringField"}, "oracledataset2e_name": {"name": "OracleDataSet2E_NAME", "type": "TWideStringField"}, "oracledataset2e_lastname": {"name": "OracleDataSet2E_LASTNAME", "type": "TWideStringField"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "dateti_samelydate1": {"name": "DateTi_samelydate1", "type": "TDBDateTimeEditEh"}, "dateti_samelydate2": {"name": "DateTi_samelydate2", "type": "TDBDateTimeEditEh"}, "ods_sysdat": {"name": "ods_sysdat", "type": "TOracleDataSet"}, "ods_sysdattek_dat": {"name": "ods_sysdatTEK_DAT", "type": "TDateTimeField"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "ods_hms": {"name": "ods_hms", "type": "TOracleDataSet"}, "dsrc_hms": {"name": "dsrc_hms", "type": "TDataSource"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "ods_bankinfo": {"name": "ods_bankinfo", "type": "TOracleDataSet"}, "ods_user": {"name": "ods_user", "type": "TOracleDataSet"}, "ods_userfullname": {"name": "ods_userFULLNAME", "type": "TWideStringField"}, "ods_tim": {"name": "ods_tim", "type": "TOracleDataSet"}, "ods_timtarix": {"name": "ods_timTARIX", "type": "TDateTimeField"}, "ods_timsaat": {"name": "ods_timSAAT", "type": "TWideStringField"}, "ods_bankinfoaz_name": {"name": "ods_bankinfoAZ_NAME", "type": "TWideStringField"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "filtir": {"name": "Filtir", "type": "TLabel"}, "ods_fltr": {"name": "ods_fltr", "type": "TOracleDataSet"}, "dsrc_fltr": {"name": "dsrc_fltr", "type": "TDataSource"}, "ods_fltrid": {"name": "ods_fltrID", "type": "TWideStringField"}, "ods_fltrname": {"name": "ods_fltrNAME", "type": "TWideStringField"}, "ods_bankinfotax_regcode": {"name": "ods_bankinfoTAX_REGCODE", "type": "TWideStringField"}, "cbsearch": {"name": "CBSearch", "type": "TComboBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "fevents": {"name": "FEvents", "type": "IBlackInstEvents"}}, {});
  U.init(async () => {
    U.var_("true_false", false, "Boolean");
    U.var_("ADDITIONALPARAMS", '', "String");
    U.var_("EnableColoring", false, "Boolean");
    U.var_("XMLPath", null, "variant");
    U.var_("XmlFile", null, "TXMLDocument");
    U.var_("MainNode", null, "IXMLNode");
    U.var_("xmlNode", null, "IXMLNode");
    U.var_("RootNode", null, "IXMLNode");
    U.var_("CustomerNode", null, "IXMLNode");
    U.var_("CustomerNode1", null, "IXMLNode");
    U.var_("d_xml_type", 0, "Integer");
    U.var_("i", 0, "Integer");
    U.var_("j", 0, "Integer");
    U.var_("k", 0, "Integer");
    U.var_("tr", 0, "Integer");
    U.var_("sr", 0, "Integer");
    U.var_("f", null, "Variant");
    U.var_("f1", null, "Variant");
    U.var_("f2", null, "Variant");
    U.var_("f3", null, "Variant");
    U.var_("f4", null, "Variant");
    U.var_("f5", null, "Variant");
    U.var_("f6", null, "Variant");
    U.var_("f7", null, "Variant");
    U.var_("f8", null, "Variant");
    U.var_("f9", null, "Variant");
    U.var_("f10", null, "Variant");
    U.var_("f11", null, "Variant");
    U.var_("f12", null, "Variant");
    U.var_("f13", null, "Variant");
    U.var_("f14", null, "Variant");
    U.var_("f15", null, "Variant");
    U.var_("f16", null, "Variant");
    U.var_("f17", null, "Variant");
    U.var_("f18", null, "Variant");
    U.var_("f19", null, "Variant");
    U.var_("f20", null, "Variant");
    U.var_("f21", null, "Variant");
    U.var_("f22", null, "Variant");
    U.var_("f23", null, "Variant");
    U.var_("f24", null, "Variant");
    U.var_("f25", null, "Variant");
    U.var_("f26", null, "Variant");
    U.var_("f27", null, "Variant");
    U.var_("f28", null, "Variant");
    U.var_("f29", null, "Variant");
    U.var_("f30", null, "Variant");
  });
  U.method("TBlackInst", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TBlackInst", "ISOToDate", async function ISOToDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"isodate": $.copyArg(p0), result: 0, "y": 0, "m": 0, "d": 0};
  await $.fixArgs(L0, ["isodate"]);
  L0["y"] = (await $.call(C, "StrToInt", [(await $.call(C, "Copy", [L0["isodate"], 1, 4]))]));
  L0["m"] = (await $.call(C, "StrToInt", [(await $.call(C, "Copy", [L0["isodate"], 6, 2]))]));
  L0["d"] = (await $.call(C, "StrToInt", [(await $.call(C, "Copy", [L0["isodate"], 9, 2]))]));
  L0["result"] = (await $.call(C, "EncodeDate", [L0["y"], L0["m"], L0["d"]]));
  return L0.result;
}, {"params": ["ISODate"], "kind": "function", "ptypes": ["String"]});
  U.method("TBlackInst", "ReadRemoteXML_yerli", async function ReadRemoteXML_yerli(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aurl": $.copyArg(p0), result: undefined, "http": null, "ssl": null, "xmldoc": null, "xmlroot": null, "xmlroot1": null, "node": null, "node1": null, "nodedat": null, "z": 0, "i": 0, "i1": 0, "mem": null, "brdat": 0};
  await $.fixArgs(L0, ["aurl"]);
  L0["http"] = (await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null]));
  L0["ssl"] = (await $.mcall((await $.v(C, "TIdSSLIOHandlerSocketOpenSSL")), "Create", [null]));
  L0["mem"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  try {
    await $.mset(L0["http"], "IOHandler", L0["ssl"]);
    await $.mset((await $.mv(L0["http"], "Request")), "UserAgent", "Delphi XE XML Reader");
    await $.mset(L0["http"], "HandleRedirects", true);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Method", (await $.v(C, "sslvSSLv23")));
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "SSLVersions", [(await $.v(C, "sslvTLSv1")), (await $.v(C, "sslvTLSv1_1")), (await $.v(C, "sslvTLSv1_2"))]);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Mode", (await $.v(C, "sslmClient")));
    await $.stmt((await $.mcall(L0["http"], "Get", [L0["aurl"], L0["mem"]])));
    await $.mset(L0["mem"], "Position", 0);
    L0["xmldoc"] = (await $.mcall((await $.v(C, "TXMLDocument")), "Create", [null]));
    await $.stmt((await $.mcall(L0["xmldoc"], "LoadFromStream", [L0["mem"]])));
    await $.mset(L0["xmldoc"], "Active", true);
    L0["xmlroot"] = (await $.mv(L0["xmldoc"], "DocumentElement"));
    if ($.truthy((await $.call(C, "Assigned", [L0["xmlroot"]])))) {
      await $.mset((await $.v(C, "panle_Gauge")), "Visible", true);
      { const $t1 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t2 = true;
        for (;;) {
          if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
          $t2 = false;
          if (!($.ord(L0["i"]) <= $.ord($t1))) break;
          L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]]));
          { const $t3 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), "Count")), 1);
            await $.set(C, "j", 0);
            let $t4 = true;
            for (;;) {
              if (!$t4) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
              $t4 = false;
              if (!($.ord((await $.v(C, "j"))) <= $.ord($t3))) break;
              if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "INDIVIDUAL_DATE_OF_BIRTH"))) {
                L0["nodedat"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))]));
                L0["brdat"] = (await $.call(C, "ISOToDate", [(await $.mv((await $.idx((await $.mv(L0["nodedat"], "ChildNodes")), ["DATE"])), "text"))]));
              }
              await $.tick();
            }
          }
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_black", ["p_adtype", 1, "p_name", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FIRST_NAME"])), "Text")), "p_lastname", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["SECOND_NAME"])), "Text")), "p_middlename", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["THIRD_NAME"])), "Text")), "p_fullname", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["NAME_ORIGINAL_SCRIPT"])), "Text")), "p_doc_type", "", "p_doc_serie", "", "p_doc_num", "", "p_citizenship", "", "p_adrs_state", "", "p_adrs_city", "", "p_address", "", "p_doc_date", (await $.v(C, "null")), "p_doc_organ", "", "p_gender", "", "p_doc_pin", "", "p_birthdate", L0["brdat"]]])));
          await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
          await $.mset((await $.v(C, "Gauge")), "Progress", (await $.call(C, "Trunc", [$.add($.fdiv($.mul(L0["z"], 102), (await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count"))), 1)])));
          L0["z"] = $.add(L0["z"], 1);
          await $.tick();
        }
      }
    }
  } finally {
    await $.mcall(L0["mem"], "Free", []);
    await $.mcall(L0["http"], "Free", []);
    await $.mcall(L0["ssl"], "Free", []);
  }
  await $.stmt((await $.call(C, "MessageDlg", ["XML fayli uğurla oxundu", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge")), "Progress", 0);
  await $.mset((await $.v(C, "panle_Gauge")), "Visible", false);
  return L0.result;
}, {"params": ["AUrl"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TBlackInst", "ReadRemoteXML_xarci1", async function ReadRemoteXML_xarci1(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aurl": $.copyArg(p0), result: undefined, "http": null, "ssl": null, "xmldoc": null, "xmlroot": null, "xmlroot1": null, "node": null, "node1": null, "nodedat": null, "z": 0, "i": 0, "i1": 0, "mem": null, "brdat": 0};
  await $.fixArgs(L0, ["aurl"]);
  L0["http"] = (await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null]));
  L0["ssl"] = (await $.mcall((await $.v(C, "TIdSSLIOHandlerSocketOpenSSL")), "Create", [null]));
  L0["mem"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  try {
    await $.mset(L0["http"], "IOHandler", L0["ssl"]);
    await $.mset((await $.mv(L0["http"], "Request")), "UserAgent", "Delphi XE XML Reader");
    await $.mset(L0["http"], "HandleRedirects", true);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Method", (await $.v(C, "sslvSSLv23")));
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "SSLVersions", [(await $.v(C, "sslvTLSv1")), (await $.v(C, "sslvTLSv1_1")), (await $.v(C, "sslvTLSv1_2"))]);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Mode", (await $.v(C, "sslmClient")));
    await $.stmt((await $.mcall(L0["http"], "Get", [L0["aurl"], L0["mem"]])));
    await $.mset(L0["mem"], "Position", 0);
    L0["xmldoc"] = (await $.mcall((await $.v(C, "TXMLDocument")), "Create", [null]));
    await $.stmt((await $.mcall(L0["xmldoc"], "LoadFromStream", [L0["mem"]])));
    await $.mset(L0["xmldoc"], "Active", true);
    L0["xmlroot"] = (await $.mv(L0["xmldoc"], "DocumentElement"));
    if ($.truthy((await $.call(C, "Assigned", [L0["xmlroot"]])))) {
      await $.mset((await $.v(C, "panle_Gauge1")), "Visible", true);
      { const $t5 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t6 = true;
        for (;;) {
          if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
          $t6 = false;
          if (!($.ord(L0["i"]) <= $.ord($t5))) break;
          L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]]));
          await $.set(C, "f1", 1);
          await $.set(C, "f2", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["DATAID"])), "Text")));
          await $.set(C, "f3", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["VERSIONNUM"])), "Text")));
          await $.set(C, "f4", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FIRST_NAME"])), "Text")));
          await $.set(C, "f5", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["SECOND_NAME"])), "Text")));
          await $.set(C, "f6", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["THIRD_NAME"])), "Text")));
          await $.set(C, "f7", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FOURTH_NAME"])), "Text")));
          await $.set(C, "f8", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
          await $.set(C, "f9", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["REFERENCE_NUMBER"])), "Text")));
          await $.set(C, "f10", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["LISTED_ON"])), "Text")));
          await $.set(C, "f11", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["NAME_ORIGINAL_SCRIPT"])), "Text")));
          await $.set(C, "f12", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["COMMENTS1"])), "Text")));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", (await $.v(C, "f1")), "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_SECOND_NAME", (await $.v(C, "f5")), "p_THIRD_NAME", (await $.v(C, "f6")), "p_FOURTH_NAME", (await $.v(C, "f7")), "p_UN_LIST_TYPE", (await $.v(C, "f8")), "p_REFERENCE_NUMBER", (await $.v(C, "f9")), "p_LISTED_ON", (await $.v(C, "f10")), "p_NAME_ORIGINAL_SCRIPT", (await $.v(C, "f11")), "p_COMMENTS1", (await $.v(C, "f13")), "p_COMMENTS2", (await $.v(C, "f14")), "p_COMMENTS3", (await $.v(C, "f15")), "p_COMMENTS4", (await $.v(C, "f16")), "p_NATIONALITY_VALUE", (await $.v(C, "f17")), "p_TYPE_OF_DATE", (await $.v(C, "f18")), "p_YEAR", (await $.v(C, "f19")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
          await $.tick();
        }
      }
      { const $t7 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t8 = true;
        for (;;) {
          if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
          $t8 = false;
          if (!($.ord(L0["i"]) <= $.ord($t7))) break;
          L0["node1"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]]));
          { const $t9 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), "Count")), 1);
            await $.set(C, "j", 0);
            let $t10 = true;
            for (;;) {
              if (!$t10) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
              $t10 = false;
              if (!($.ord((await $.v(C, "j"))) <= $.ord($t9))) break;
              if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "INDIVIDUAL_ALIAS"))) {
                L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))]));
                await $.set(C, "f13", (await $.mv((await $.idx((await $.mv(L0["node1"], "ChildNodes")), ["DATAID"])), "Text")));
                await $.set(C, "f14", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["QUALITY"])), "Text")));
                await $.set(C, "f15", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["ALIAS_NAME"])), "Text")));
                if ($.truthy($.ne((await $.v(C, "f15")), ""))) {
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f13")), "p_name", (await $.v(C, "f15")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
                }
                await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
                await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.sub($.fdiv($.mul(L0["z"], 19), (await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count"))), 1)])));
                L0["z"] = $.add(L0["z"], 1);
              }
              await $.tick();
            }
          }
          await $.tick();
        }
      }
    }
    { const $t11 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
      L0["i"] = 0;
      let $t12 = true;
      for (;;) {
        if (!$t12) { L0["i"] = $.succ(L0["i"], 1); }
        $t12 = false;
        if (!($.ord(L0["i"]) <= $.ord($t11))) break;
        L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]]));
        await $.set(C, "f2", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["DATAID"])), "Text")));
        await $.set(C, "f3", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["VERSIONNUM"])), "Text")));
        await $.set(C, "f4", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FIRST_NAME"])), "Text")));
        await $.set(C, "f5", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
        await $.set(C, "f6", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["REFERENCE_NUMBER"])), "Text")));
        await $.set(C, "f7", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["LISTED_ON"])), "Text")));
        await $.set(C, "f8", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["COMMENTS1"])), "Text")));
        await $.set(C, "f9", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1, 800]))])));
        await $.set(C, "f10", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 801, 800]))])));
        await $.set(C, "f11", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1602, 800]))])));
        await $.set(C, "f12", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 2403, 800]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", (await $.v(C, "f1")), "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_UN_LIST_TYPE", (await $.v(C, "f5")), "p_REFERENCE_NUMBER", (await $.v(C, "f6")), "p_LISTED_ON", (await $.v(C, "f7")), "p_COMMENTS1", (await $.v(C, "f9")), "p_COMMENTS2", (await $.v(C, "f10")), "p_COMMENTS3", (await $.v(C, "f11")), "p_COMMENTS4", (await $.v(C, "f12")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
        await $.tick();
      }
    }
    { const $t13 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
      L0["i"] = 0;
      let $t14 = true;
      for (;;) {
        if (!$t14) { L0["i"] = $.succ(L0["i"], 1); }
        $t14 = false;
        if (!($.ord(L0["i"]) <= $.ord($t13))) break;
        L0["node1"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]]));
        { const $t15 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), "Count")), 1);
          await $.set(C, "j", 0);
          let $t16 = true;
          for (;;) {
            if (!$t16) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
            $t16 = false;
            if (!($.ord((await $.v(C, "j"))) <= $.ord($t15))) break;
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "ENTITY_ALIAS"))) {
              L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))]));
              await $.set(C, "f13", (await $.mv((await $.idx((await $.mv(L0["node1"], "ChildNodes")), ["DATAID"])), "Text")));
              await $.set(C, "f14", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["QUALITY"])), "Text")));
              await $.set(C, "f15", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["ALIAS_NAME"])), "Text")));
              if ($.truthy($.ne((await $.v(C, "f15")), ""))) {
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f13")), "p_name", (await $.v(C, "f15")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
              }
            }
            await $.tick();
          }
        }
        await $.tick();
      }
    }
  } finally {
    await $.mcall(L0["mem"], "Free", []);
    await $.mcall(L0["http"], "Free", []);
    await $.mcall(L0["ssl"], "Free", []);
  }
  await $.stmt((await $.call(C, "MessageDlg", ["XML fayli uğurla oxundu", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge_cust")), "Progress", 0);
  await $.mset((await $.v(C, "panle_Gauge1")), "Visible", false);
  return L0.result;
}, {"params": ["AUrl"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TBlackInst", "ReadRemoteXML_xarci2", async function ReadRemoteXML_xarci2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aurl": $.copyArg(p0), result: undefined, "http": null, "ssl": null, "xmldoc": null, "xmlroot": null, "node": null, "node1": null, "nodedat": null, "z": 0, "i": 0, "i1": 0, "mem": null, "brdat": 0};
  await $.fixArgs(L0, ["aurl"]);
  L0["http"] = (await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null]));
  L0["ssl"] = (await $.mcall((await $.v(C, "TIdSSLIOHandlerSocketOpenSSL")), "Create", [null]));
  L0["mem"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  try {
    await $.mset(L0["http"], "IOHandler", L0["ssl"]);
    await $.mset((await $.mv(L0["http"], "Request")), "UserAgent", "Delphi XE XML Reader");
    await $.mset(L0["http"], "HandleRedirects", true);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Method", (await $.v(C, "sslvSSLv23")));
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "SSLVersions", [(await $.v(C, "sslvTLSv1")), (await $.v(C, "sslvTLSv1_1")), (await $.v(C, "sslvTLSv1_2"))]);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Mode", (await $.v(C, "sslmClient")));
    await $.stmt((await $.mcall(L0["http"], "Get", [L0["aurl"], L0["mem"]])));
    await $.mset(L0["mem"], "Position", 0);
    L0["xmldoc"] = (await $.mcall((await $.v(C, "TXMLDocument")), "Create", [null]));
    await $.stmt((await $.mcall(L0["xmldoc"], "LoadFromStream", [L0["mem"]])));
    await $.mset(L0["xmldoc"], "Active", true);
    L0["xmlroot"] = (await $.mv(L0["xmldoc"], "DocumentElement"));
    if ($.truthy((await $.call(C, "Assigned", [L0["xmlroot"]])))) {
      await $.mset((await $.v(C, "panle_Gauge1")), "Visible", true);
      { const $t17 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t18 = true;
        for (;;) {
          if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
          $t18 = false;
          if (!($.ord(L0["i"]) <= $.ord($t17))) break;
          L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]]));
          await $.set(C, "f1", 2);
          await $.set(C, "f2", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["DATAID"])), "Text")));
          await $.set(C, "f3", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["VERSIONNUM"])), "Text")));
          await $.set(C, "f4", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FIRST_NAME"])), "Text")));
          await $.set(C, "f5", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
          await $.set(C, "f6", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["REFERENCE_NUMBER"])), "Text")));
          await $.set(C, "f7", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["LISTED_ON"])), "Text")));
          await $.set(C, "f8", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["COMMENTS1"])), "Text")));
          await $.set(C, "f9", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1, 800]))])));
          await $.set(C, "f10", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 801, 800]))])));
          await $.set(C, "f11", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1602, 800]))])));
          await $.set(C, "f12", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 2403, 800]))])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", (await $.v(C, "f1")), "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_UN_LIST_TYPE", (await $.v(C, "f5")), "p_REFERENCE_NUMBER", (await $.v(C, "f6")), "p_LISTED_ON", (await $.v(C, "f7")), "p_COMMENTS1", (await $.v(C, "f9")), "p_COMMENTS2", (await $.v(C, "f10")), "p_COMMENTS3", (await $.v(C, "f11")), "p_COMMENTS4", (await $.v(C, "f12")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
          await $.tick();
        }
      }
      { const $t19 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t20 = true;
        for (;;) {
          if (!$t20) { L0["i"] = $.succ(L0["i"], 1); }
          $t20 = false;
          if (!($.ord(L0["i"]) <= $.ord($t19))) break;
          L0["node1"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]]));
          { const $t21 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), "Count")), 1);
            await $.set(C, "j", 0);
            let $t22 = true;
            for (;;) {
              if (!$t22) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
              $t22 = false;
              if (!($.ord((await $.v(C, "j"))) <= $.ord($t21))) break;
              if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "INDIVIDUAL_ALIAS"))) {
                L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))]));
                await $.set(C, "f13", (await $.mv((await $.idx((await $.mv(L0["node1"], "ChildNodes")), ["DATAID"])), "Text")));
                await $.set(C, "f14", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["QUALITY"])), "Text")));
                await $.set(C, "f15", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["ALIAS_NAME"])), "Text")));
                if ($.truthy($.ne((await $.v(C, "f15")), ""))) {
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f13")), "p_name", (await $.v(C, "f15")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
                }
                await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
                await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.sub($.fdiv($.mul(L0["z"], 40), (await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count"))), 1)])));
                L0["z"] = $.add(L0["z"], 1);
              }
              await $.tick();
            }
          }
          await $.tick();
        }
      }
    }
    { const $t23 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
      L0["i"] = 0;
      let $t24 = true;
      for (;;) {
        if (!$t24) { L0["i"] = $.succ(L0["i"], 1); }
        $t24 = false;
        if (!($.ord(L0["i"]) <= $.ord($t23))) break;
        L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]]));
        await $.set(C, "f2", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["DATAID"])), "Text")));
        await $.set(C, "f3", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["VERSIONNUM"])), "Text")));
        await $.set(C, "f4", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FIRST_NAME"])), "Text")));
        await $.set(C, "f5", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
        await $.set(C, "f6", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["REFERENCE_NUMBER"])), "Text")));
        await $.set(C, "f7", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["LISTED_ON"])), "Text")));
        await $.set(C, "f8", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["COMMENTS1"])), "Text")));
        await $.set(C, "f9", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1, 800]))])));
        await $.set(C, "f10", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 801, 800]))])));
        await $.set(C, "f11", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1602, 800]))])));
        await $.set(C, "f12", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 2403, 800]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", (await $.v(C, "f1")), "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_UN_LIST_TYPE", (await $.v(C, "f5")), "p_REFERENCE_NUMBER", (await $.v(C, "f6")), "p_LISTED_ON", (await $.v(C, "f7")), "p_COMMENTS1", (await $.v(C, "f9")), "p_COMMENTS2", (await $.v(C, "f10")), "p_COMMENTS3", (await $.v(C, "f11")), "p_COMMENTS4", (await $.v(C, "f12")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
        await $.tick();
      }
    }
    { const $t25 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
      L0["i"] = 0;
      let $t26 = true;
      for (;;) {
        if (!$t26) { L0["i"] = $.succ(L0["i"], 1); }
        $t26 = false;
        if (!($.ord(L0["i"]) <= $.ord($t25))) break;
        L0["node1"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]]));
        { const $t27 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), "Count")), 1);
          await $.set(C, "j", 0);
          let $t28 = true;
          for (;;) {
            if (!$t28) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
            $t28 = false;
            if (!($.ord((await $.v(C, "j"))) <= $.ord($t27))) break;
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "ENTITY_ALIAS"))) {
              L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))]));
              await $.set(C, "f13", (await $.mv((await $.idx((await $.mv(L0["node1"], "ChildNodes")), ["DATAID"])), "Text")));
              await $.set(C, "f14", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["QUALITY"])), "Text")));
              await $.set(C, "f15", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["ALIAS_NAME"])), "Text")));
              if ($.truthy($.ne((await $.v(C, "f15")), ""))) {
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f13")), "p_name", (await $.v(C, "f15")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
              }
            }
            await $.tick();
          }
        }
        await $.tick();
      }
    }
  } finally {
    await $.mcall(L0["mem"], "Free", []);
    await $.mcall(L0["http"], "Free", []);
    await $.mcall(L0["ssl"], "Free", []);
  }
  await $.stmt((await $.call(C, "MessageDlg", ["XML fayli uğurla oxundu", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge_cust")), "Progress", 0);
  await $.mset((await $.v(C, "panle_Gauge1")), "Visible", false);
  return L0.result;
}, {"params": ["AUrl"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TBlackInst", "ReadRemoteXML_xarci3", async function ReadRemoteXML_xarci3(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aurl": $.copyArg(p0), result: undefined, "http": null, "ssl": null, "xmldoc": null, "xmlroot": null, "node": null, "node1": null, "nodedat": null, "z": 0, "i": 0, "i1": 0, "mem": null, "brdat": 0};
  await $.fixArgs(L0, ["aurl"]);
  L0["http"] = (await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null]));
  L0["ssl"] = (await $.mcall((await $.v(C, "TIdSSLIOHandlerSocketOpenSSL")), "Create", [null]));
  L0["mem"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  try {
    await $.mset(L0["http"], "IOHandler", L0["ssl"]);
    await $.mset((await $.mv(L0["http"], "Request")), "UserAgent", "Delphi XE XML Reader");
    await $.mset(L0["http"], "HandleRedirects", true);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Method", (await $.v(C, "sslvSSLv23")));
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "SSLVersions", [(await $.v(C, "sslvTLSv1")), (await $.v(C, "sslvTLSv1_1")), (await $.v(C, "sslvTLSv1_2"))]);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Mode", (await $.v(C, "sslmClient")));
    await $.stmt((await $.mcall(L0["http"], "Get", [L0["aurl"], L0["mem"]])));
    await $.mset(L0["mem"], "Position", 0);
    L0["xmldoc"] = (await $.mcall((await $.v(C, "TXMLDocument")), "Create", [null]));
    await $.stmt((await $.mcall(L0["xmldoc"], "LoadFromStream", [L0["mem"]])));
    await $.mset(L0["xmldoc"], "Active", true);
    L0["xmlroot"] = (await $.mv(L0["xmldoc"], "DocumentElement"));
    if ($.truthy((await $.call(C, "Assigned", [L0["xmlroot"]])))) {
      await $.mset((await $.v(C, "panle_Gauge1")), "Visible", true);
      { const $t29 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t30 = true;
        for (;;) {
          if (!$t30) { L0["i"] = $.succ(L0["i"], 1); }
          $t30 = false;
          if (!($.ord(L0["i"]) <= $.ord($t29))) break;
          L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]]));
          await $.set(C, "f1", 3);
          await $.set(C, "f2", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["DATAID"])), "Text")));
          await $.set(C, "f3", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["VERSIONNUM"])), "Text")));
          await $.set(C, "f4", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FIRST_NAME"])), "Text")));
          await $.set(C, "f5", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["SECOND_NAME"])), "Text")));
          await $.set(C, "f6", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
          await $.set(C, "f7", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["LISTED_ON"])), "Text")));
          await $.set(C, "f8", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["COMMENTS1"])), "Text")));
          await $.set(C, "f9", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1, 800]))])));
          await $.set(C, "f10", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 801, 800]))])));
          await $.set(C, "f11", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1602, 800]))])));
          await $.set(C, "f12", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 2403, 800]))])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", (await $.v(C, "f1")), "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_SECOND_NAME", (await $.v(C, "f5")), "p_UN_LIST_TYPE", (await $.v(C, "f6")), "p_LISTED_ON", (await $.v(C, "f7")), "p_COMMENTS1", (await $.v(C, "f9")), "p_COMMENTS2", (await $.v(C, "f10")), "p_COMMENTS3", (await $.v(C, "f11")), "p_COMMENTS4", (await $.v(C, "f12")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
          await $.tick();
        }
      }
      { const $t31 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t32 = true;
        for (;;) {
          if (!$t32) { L0["i"] = $.succ(L0["i"], 1); }
          $t32 = false;
          if (!($.ord(L0["i"]) <= $.ord($t31))) break;
          L0["node1"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]]));
          { const $t33 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), "Count")), 1);
            await $.set(C, "j", 0);
            let $t34 = true;
            for (;;) {
              if (!$t34) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
              $t34 = false;
              if (!($.ord((await $.v(C, "j"))) <= $.ord($t33))) break;
              if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "INDIVIDUAL_ALIAS"))) {
                L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))]));
                await $.set(C, "f13", (await $.mv((await $.idx((await $.mv(L0["node1"], "ChildNodes")), ["DATAID"])), "Text")));
                await $.set(C, "f14", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["QUALITY"])), "Text")));
                await $.set(C, "f15", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["ALIAS_NAME"])), "Text")));
                if ($.truthy($.ne((await $.v(C, "f15")), ""))) {
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f13")), "p_name", (await $.v(C, "f15")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
                }
                await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
                await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.sub($.fdiv($.mul(L0["z"], 80), (await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count"))), 1)])));
                L0["z"] = $.add(L0["z"], 1);
              }
              await $.tick();
            }
          }
          await $.tick();
        }
      }
    }
    { const $t35 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
      L0["i"] = 0;
      let $t36 = true;
      for (;;) {
        if (!$t36) { L0["i"] = $.succ(L0["i"], 1); }
        $t36 = false;
        if (!($.ord(L0["i"]) <= $.ord($t35))) break;
        L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]]));
        await $.set(C, "f2", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["DATAID"])), "Text")));
        await $.set(C, "f3", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["VERSIONNUM"])), "Text")));
        await $.set(C, "f4", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FIRST_NAME"])), "Text")));
        await $.set(C, "f5", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
        await $.set(C, "f6", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["REFERENCE_NUMBER"])), "Text")));
        await $.set(C, "f7", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["LISTED_ON"])), "Text")));
        await $.set(C, "f8", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["COMMENTS1"])), "Text")));
        await $.set(C, "f9", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1, 800]))])));
        await $.set(C, "f10", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 801, 800]))])));
        await $.set(C, "f11", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1602, 800]))])));
        await $.set(C, "f12", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 2403, 800]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", (await $.v(C, "f1")), "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_UN_LIST_TYPE", (await $.v(C, "f5")), "p_REFERENCE_NUMBER", (await $.v(C, "f6")), "p_LISTED_ON", (await $.v(C, "f7")), "p_COMMENTS1", (await $.v(C, "f9")), "p_COMMENTS2", (await $.v(C, "f10")), "p_COMMENTS3", (await $.v(C, "f11")), "p_COMMENTS4", (await $.v(C, "f12")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
        await $.tick();
      }
    }
    { const $t37 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
      L0["i"] = 0;
      let $t38 = true;
      for (;;) {
        if (!$t38) { L0["i"] = $.succ(L0["i"], 1); }
        $t38 = false;
        if (!($.ord(L0["i"]) <= $.ord($t37))) break;
        L0["node1"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]]));
        { const $t39 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), "Count")), 1);
          await $.set(C, "j", 0);
          let $t40 = true;
          for (;;) {
            if (!$t40) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
            $t40 = false;
            if (!($.ord((await $.v(C, "j"))) <= $.ord($t39))) break;
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "ENTITY_ALIAS"))) {
              L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))]));
              await $.set(C, "f13", (await $.mv((await $.idx((await $.mv(L0["node1"], "ChildNodes")), ["DATAID"])), "Text")));
              await $.set(C, "f14", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["QUALITY"])), "Text")));
              await $.set(C, "f15", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["ALIAS_NAME"])), "Text")));
              if ($.truthy($.ne((await $.v(C, "f15")), ""))) {
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f13")), "p_name", (await $.v(C, "f15")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
              }
            }
            await $.tick();
          }
        }
        await $.tick();
      }
    }
  } finally {
    await $.mcall(L0["mem"], "Free", []);
    await $.mcall(L0["http"], "Free", []);
    await $.mcall(L0["ssl"], "Free", []);
  }
  await $.stmt((await $.call(C, "MessageDlg", ["XML fayli uğurla oxundu", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge_cust")), "Progress", 0);
  await $.mset((await $.v(C, "panle_Gauge1")), "Visible", false);
  return L0.result;
}, {"params": ["AUrl"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TBlackInst", "ReadRemoteXML_xarci4", async function ReadRemoteXML_xarci4(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"aurl": $.copyArg(p0), result: undefined, "http": null, "ssl": null, "xmldoc": null, "xmlroot": null, "node": null, "node1": null, "nodedat": null, "z": 0, "i": 0, "i1": 0, "mem": null, "brdat": 0};
  await $.fixArgs(L0, ["aurl"]);
  L0["http"] = (await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null]));
  L0["ssl"] = (await $.mcall((await $.v(C, "TIdSSLIOHandlerSocketOpenSSL")), "Create", [null]));
  L0["mem"] = (await $.mv((await $.v(C, "TMemoryStream")), "Create"));
  try {
    await $.mset(L0["http"], "IOHandler", L0["ssl"]);
    await $.mset((await $.mv(L0["http"], "Request")), "UserAgent", "Delphi XE XML Reader");
    await $.mset(L0["http"], "HandleRedirects", true);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Method", (await $.v(C, "sslvSSLv23")));
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "SSLVersions", [(await $.v(C, "sslvTLSv1")), (await $.v(C, "sslvTLSv1_1")), (await $.v(C, "sslvTLSv1_2"))]);
    await $.mset((await $.mv(L0["ssl"], "SSLOptions")), "Mode", (await $.v(C, "sslmClient")));
    await $.stmt((await $.mcall(L0["http"], "Get", [L0["aurl"], L0["mem"]])));
    await $.mset(L0["mem"], "Position", 0);
    L0["xmldoc"] = (await $.mcall((await $.v(C, "TXMLDocument")), "Create", [null]));
    await $.stmt((await $.mcall(L0["xmldoc"], "LoadFromStream", [L0["mem"]])));
    await $.mset(L0["xmldoc"], "Active", true);
    L0["xmlroot"] = (await $.mv(L0["xmldoc"], "DocumentElement"));
    if ($.truthy((await $.call(C, "Assigned", [L0["xmlroot"]])))) {
      await $.mset((await $.v(C, "panle_Gauge1")), "Visible", true);
      { const $t41 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t42 = true;
        for (;;) {
          if (!$t42) { L0["i"] = $.succ(L0["i"], 1); }
          $t42 = false;
          if (!($.ord(L0["i"]) <= $.ord($t41))) break;
          L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]]));
          await $.set(C, "f1", 4);
          await $.set(C, "f2", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["DATAID"])), "Text")));
          await $.set(C, "f3", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["VERSIONNUM"])), "Text")));
          await $.set(C, "f4", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FIRST_NAME"])), "Text")));
          await $.set(C, "f5", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["SECOND_NAME"])), "Text")));
          await $.set(C, "f6", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
          await $.set(C, "f7", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["LISTED_ON"])), "Text")));
          await $.set(C, "f8", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["COMMENTS1"])), "Text")));
          await $.set(C, "f9", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1, 800]))])));
          await $.set(C, "f10", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 801, 800]))])));
          await $.set(C, "f11", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1602, 800]))])));
          await $.set(C, "f12", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 2403, 800]))])));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", (await $.v(C, "f1")), "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_SECOND_NAME", (await $.v(C, "f5")), "p_UN_LIST_TYPE", (await $.v(C, "f6")), "p_LISTED_ON", (await $.v(C, "f7")), "p_COMMENTS1", (await $.v(C, "f9")), "p_COMMENTS2", (await $.v(C, "f10")), "p_COMMENTS3", (await $.v(C, "f11")), "p_COMMENTS4", (await $.v(C, "f12")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
          await $.tick();
        }
      }
      { const $t43 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
        L0["i"] = 0;
        let $t44 = true;
        for (;;) {
          if (!$t44) { L0["i"] = $.succ(L0["i"], 1); }
          $t44 = false;
          if (!($.ord(L0["i"]) <= $.ord($t43))) break;
          L0["node1"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]]));
          { const $t45 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), "Count")), 1);
            await $.set(C, "j", 0);
            let $t46 = true;
            for (;;) {
              if (!$t46) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
              $t46 = false;
              if (!($.ord((await $.v(C, "j"))) <= $.ord($t45))) break;
              if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "INDIVIDUAL_ALIAS"))) {
                L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))]));
                await $.set(C, "f13", (await $.mv((await $.idx((await $.mv(L0["node1"], "ChildNodes")), ["DATAID"])), "Text")));
                await $.set(C, "f14", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["QUALITY"])), "Text")));
                await $.set(C, "f15", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["ALIAS_NAME"])), "Text")));
                if ($.truthy($.ne((await $.v(C, "f15")), ""))) {
                  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f13")), "p_name", (await $.v(C, "f15")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
                }
                await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
                await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.sub($.fdiv($.mul(L0["z"], 80), (await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count"))), 1)])));
                L0["z"] = $.add(L0["z"], 1);
              }
              await $.tick();
            }
          }
          await $.tick();
        }
      }
    }
    { const $t47 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
      L0["i"] = 0;
      let $t48 = true;
      for (;;) {
        if (!$t48) { L0["i"] = $.succ(L0["i"], 1); }
        $t48 = false;
        if (!($.ord(L0["i"]) <= $.ord($t47))) break;
        L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]]));
        await $.set(C, "d_xml_type", 4);
        await $.set(C, "f2", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["DATAID"])), "Text")));
        await $.set(C, "f3", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["VERSIONNUM"])), "Text")));
        await $.set(C, "f4", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["FIRST_NAME"])), "Text")));
        await $.set(C, "f5", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
        await $.set(C, "f6", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["REFERENCE_NUMBER"])), "Text")));
        await $.set(C, "f7", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["LISTED_ON"])), "Text")));
        await $.set(C, "f8", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["COMMENTS1"])), "Text")));
        await $.set(C, "f9", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1, 800]))])));
        await $.set(C, "f10", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 801, 800]))])));
        await $.set(C, "f11", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1602, 800]))])));
        await $.set(C, "f12", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 2403, 800]))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", 5, "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_UN_LIST_TYPE", (await $.v(C, "f5")), "p_REFERENCE_NUMBER", (await $.v(C, "f6")), "p_LISTED_ON", (await $.v(C, "f7")), "p_COMMENTS1", (await $.v(C, "f9")), "p_COMMENTS2", (await $.v(C, "f10")), "p_COMMENTS3", (await $.v(C, "f11")), "p_COMMENTS4", (await $.v(C, "f12")), "p_xml_type", 4]])));
        await $.tick();
      }
    }
    { const $t49 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
      L0["i"] = 0;
      let $t50 = true;
      for (;;) {
        if (!$t50) { L0["i"] = $.succ(L0["i"], 1); }
        $t50 = false;
        if (!($.ord(L0["i"]) <= $.ord($t49))) break;
        L0["node1"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]]));
        { const $t51 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), "Count")), 1);
          await $.set(C, "j", 0);
          let $t52 = true;
          for (;;) {
            if (!$t52) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
            $t52 = false;
            if (!($.ord((await $.v(C, "j"))) <= $.ord($t51))) break;
            if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "ENTITY_ALIAS"))) {
              L0["node"] = (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv(L0["xmlroot"], "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [L0["i"]])), "ChildNodes")), [(await $.v(C, "j"))]));
              await $.set(C, "f13", (await $.mv((await $.idx((await $.mv(L0["node1"], "ChildNodes")), ["DATAID"])), "Text")));
              await $.set(C, "f14", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["QUALITY"])), "Text")));
              await $.set(C, "f15", (await $.mv((await $.idx((await $.mv(L0["node"], "ChildNodes")), ["ALIAS_NAME"])), "Text")));
              if ($.truthy($.ne((await $.v(C, "f15")), ""))) {
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f13")), "p_name", (await $.v(C, "f15")), "p_xml_type", (await $.v(C, "d_xml_type"))]])));
              }
            }
            await $.tick();
          }
        }
        await $.tick();
      }
    }
  } finally {
    await $.mcall(L0["mem"], "Free", []);
    await $.mcall(L0["http"], "Free", []);
    await $.mcall(L0["ssl"], "Free", []);
  }
  await $.stmt((await $.call(C, "MessageDlg", ["XML fayli uğurla oxundu", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge_cust")), "Progress", 0);
  await $.mset((await $.v(C, "panle_Gauge1")), "Visible", false);
  return L0.result;
}, {"params": ["AUrl"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TBlackInst", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TBlackInst", "Excelat1Click", async function Excelat1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t53 = (await $.v(C, "DmBlack"));
    {
      const $t54 = (await $.wv([$t53], "ExcelExport", C, false));
      const $t55 = (await $.wv([$t53, $t54], "MainDSet", C, false));
      await $.stmt($.wcall([$t53, $t54, $t55], "connect", [], C));
      await $.stmt((await $.wcall([$t53, $t54, $t55], "ExportDataset", [(await $.wv([$t53, $t54, $t55], "MainDSet", C, false)), "Siyahi", (await $.wv([$t53, $t54, $t55], "true", C, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TBlackInst", "Initialize", null, arguments);
  await $.set(C, "OnActivate", (await $.ref_(C, "ActivateEvent")));
  await $.set(C, "OnClick", (await $.ref_(C, "ClickEvent")));
  await $.set(C, "OnCreate", (await $.ref_(C, "CreateEvent")));
  await $.set(C, "OnDblClick", (await $.ref_(C, "DblClickEvent")));
  await $.set(C, "OnDeactivate", (await $.ref_(C, "DeactivateEvent")));
  await $.set(C, "OnDestroy", (await $.ref_(C, "DestroyEvent")));
  await $.set(C, "OnKeyPress", (await $.ref_(C, "KeyPressEvent")));
  await $.set(C, "OnPaint", (await $.ref_(C, "PaintEvent")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TBlackInst", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBlackInst", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBlackInst", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "DBLookupComboBox2CloseUp", async function DBLookupComboBox2CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "verable": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["verable"] = "";
  L0["verable"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "Text"));
  {
    const $t56 = (await $.v(C, "ods_hms"));
    await $.stmt($.wcall([$t56], "close", [], C));
    { const $t57 = await $.iset((await $.wv([$t56], "SQL", C, false)), [16], ""); if ($t57 !== undefined) { await $.wset([$t56], "SQL", $t57, C); } }
    if ($.truthy($.eq((await $.wv([$t56], "verable", { get: async () => L0["verable"], set: async (v) => { L0["verable"] = v; }, local: true }, false)), "Hamsı"))) {
      { const $t58 = await $.iset((await $.wv([$t56], "SQL", C, false)), [16], ""); if ($t58 !== undefined) { await $.wset([$t56], "SQL", $t58, C); } }
    } else {
      { const $t59 = await $.iset((await $.wv([$t56], "SQL", C, false)), [16], $.add($.add($.add((await $.idx((await $.wv([$t56], "SQL", C, false)), [16])), " where main_status='"), (await $.wv([$t56], "verable", { get: async () => L0["verable"], set: async (v) => { L0["verable"] = v; }, local: true }, false))), "'")); if ($t59 !== undefined) { await $.wset([$t56], "SQL", $t59, C); } }
    }
    await $.stmt($.wcall([$t56], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TBlackInst", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlackInst", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlackInst", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TBlackInst", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBlackInst", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TBlackInst", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TBlackInst", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlackInst", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlackInst", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlackInst", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBlackInst", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBlackInst", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlackInst", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TBlackInst", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TBlackInst", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlackInst", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBlackInst", "sst1Click", async function sst1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Fayl vasitəsilə yüklənmiş əvvəlki məlumatlar silinəcək. Davam edilsin?", [""]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.set(C, "d_xml_type", 1);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["delete_xml", ["v_id", (await $.v(C, "d_xml_type"))]])));
    await $.stmt((await $.call(C, "ReadRemoteXML_xarci1", ["http://hms.gov.az/uploads/list/5/0e857d8520059c9197ec1bb0a80212cf.xml?v=1755868018"])));
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ods_bankinfo")), "Open", []);
  await $.mcall((await $.v(C, "ods_user")), "Open", []);
  await $.mcall((await $.v(C, "ods_tim")), "Open", []);
  await $.mcall((await $.v(C, "ods_fltr")), "open", []);
  await $.set(C, "DmBlack", (await $.mcall((await $.v(C, "TDmBlack")), "Create", [Self])));
  await $.set(C, "InsForm", (await $.mcall((await $.v(C, "TInsForm")), "Create", [Self])));
  await $.set(C, "formCon", (await $.mcall((await $.v(C, "TformCon")), "Create", [Self])));
  await $.set(C, "FormSearch", (await $.mcall((await $.v(C, "TFormSearch")), "create", [Self])));
  { const $t60 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t61 = true;
    for (;;) {
      if (!$t61) { L0["i"] = $.succ(L0["i"], 1); }
      $t61 = false;
      if (!($.ord(L0["i"]) <= $.ord($t60))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 3112))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "CheckAll", []);
      }
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "ToolButton9")), "Down", true);
  await $.mcall((await $.v(C, "ods_sysdat")), "Open", []);
  await $.mset((await $.v(C, "DateTi_samelydate1")), "value", (await $.mv((await $.v(C, "ods_sysdatTEK_DAT")), "AsDateTime")));
  await $.mset((await $.v(C, "DateTi_samelydate2")), "value", (await $.mv((await $.v(C, "ods_sysdatTEK_DAT")), "AsDateTime")));
  await $.mset((await $.v(C, "DBDateTimeEditEh1")), "value", (await $.mv((await $.v(C, "ods_sysdatTEK_DAT")), "AsDateTime")));
  await $.mset((await $.v(C, "DBDateTimeEditEh2")), "value", (await $.mv((await $.v(C, "ods_sysdatTEK_DAT")), "AsDateTime")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_date1": null, "p_date2": null, "statusvalue": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["p_date1"] = (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value"));
  L0["p_date2"] = (await $.mv((await $.v(C, "DBDateTimeEditEh2")), "Value"));
  await $.set(C, "EnableColoring", false);
  {
    const $t62 = (await $.v(C, "ods_hms"));
    await $.stmt($.wcall([$t62], "close", [], C));
    await $.stmt((await $.wcall([$t62], "SetVariable", ["dat1", (await $.wv([$t62], "p_date1", { get: async () => L0["p_date1"], set: async (v) => { L0["p_date1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t62], "SetVariable", ["dat2", (await $.wv([$t62], "p_date2", { get: async () => L0["p_date2"], set: async (v) => { L0["p_date2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t62], "open", [], C));
  }
  await $.set(C, "EnableColoring", true);
  await $.mcall((await $.v(C, "DBGrid2")), "Invalidate", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "pdf": null, "y": 0, "tempname": '', "isfirstpage": false, "rowheight": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rowcolor"] = $.fn(async function RowColor(p0) {
  const L1 = {"status": $.copyArg(p0), result: 0};
  await $.fixArgs(L1, ["status"]);
  if ($.truthy((await $.call(C, "SameText", [L1["status"], "Match"])))) {
    L1["result"] = (await $.v(C, "clRed"));
  } else {
    if ($.truthy((await $.call(C, "SameText", [L1["status"], "No Match"])))) {
      L1["result"] = (await $.v(C, "clLime"));
    } else {
      if ($.truthy((await $.call(C, "SameText", [L1["status"], "Close"])))) {
        L1["result"] = (await $.v(C, "clYellow"));
      } else {
        L1["result"] = (await $.v(C, "clWhite"));
      }
    }
  }
  return L1.result;
});
  L0["applyfont"] = $.fn(async function ApplyFont() {
  const L1 = {result: undefined};
  await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Name", "Tahoma");
  await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
  return L1.result;
});
  L0["writeheader"] = $.fn(async function WriteHeader() {
  const L1 = {result: undefined};
  await $.stmt($.callv(L0["applyfont"], []));
  await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
  await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [20, 20, "HMS Skrininq"])));
  await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
  await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 16);
  await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [30, 50, $.add("Skrininq tarixi: ", (await $.call(C, "FormatDateTime", ["dd.mm.yyyy", (await $.mv((await $.v(C, "ods_timTARIX")), "AsDateTime"))])))])));
  await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [30, 80, $.add("Hesabat hazırlayan təşkilat: ", (await $.mv((await $.v(C, "ods_bankinfoAZ_NAME")), "AsString")))])));
  await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [30, 110, $.add("Skrininqi aparan əməkdaş: ", (await $.mv((await $.v(C, "ods_userFULLNAME")), "AsString")))])));
  L0["y"] = 150;
  await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
  await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [20, L0["y"], "TamAdı"])));
  await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [490, L0["y"], "Doğum Tarixi"])));
  await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [650, L0["y"], "Status"])));
  await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
  await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["y"], async ($t63) => { L0["y"] = $t63; }), 30])));
  return L1.result;
});
  L0["drawtextwrappedwithcolorfixedheight"] = $.fn(async function DrawTextWrappedWithColorFixedHeight(p0, p1, p2, p3, p4, p5) {
  const L1 = {"x": $.copyArg(p0), "y": $.copyArg(p1), "maxwidth": $.copyArg(p2), "text": $.copyArg(p3), "rowcol": $.copyArg(p4), "heightused": $.asRef(p5), result: undefined, "canvas": null, "words": null, "line": '', "wordtext": '', "i": 0, "lineheight": 0, "starty": 0};
  await $.fixArgs(L1, ["x", "y", "maxwidth", "text", "rowcol"]);
  L1["canvas"] = (await $.mv(L0["pdf"], "VCLCanvas"));
  L1["words"] = (await $.mv((await $.v(C, "TStringList")), "Create"));
  try {
    await $.stmt((await $.call(C, "ExtractStrings", [[" "], [], (await $.call(C, "PChar", [L1["text"]])), L1["words"]])));
    L1["line"] = "";
    L1["lineheight"] = $.add((await $.mcall(L1["canvas"], "TextHeight", ["Wg"])), 2);
    await L1["heightused"].set(0);
    { const $t64 = $.sub((await $.mv(L1["words"], "Count")), 1);
      L1["i"] = 0;
      let $t65 = true;
      for (;;) {
        if (!$t65) { L1["i"] = $.succ(L1["i"], 1); }
        $t65 = false;
        if (!($.ord(L1["i"]) <= $.ord($t64))) break;
        L1["wordtext"] = (await $.idx(L1["words"], [L1["i"]]));
        if ($.truthy($.gt((await $.mcall(L1["canvas"], "TextWidth", [$.add($.add(L1["line"], " "), L1["wordtext"])])), L1["maxwidth"]))) {
          await $.mset((await $.mv(L1["canvas"], "Brush")), "Color", L1["rowcol"]);
          L1["starty"] = $.add(L1["y"], (await L1["heightused"].get()));
          await $.stmt((await $.mcall(L1["canvas"], "FillRect", [(await $.call(C, "Rect", [$.sub(L1["x"], 5), L1["starty"], $.add($.add(L1["x"], L1["maxwidth"]), 10), $.add(L1["starty"], L1["lineheight"])]))])));
          await $.stmt((await $.mcall(L1["canvas"], "TextOut", [L1["x"], L1["starty"], L1["line"]])));
          await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await L1["heightused"].get()), async ($t66) => { await L1["heightused"].set($t66); }), L1["lineheight"]])));
          L1["line"] = L1["wordtext"];
        } else {
          if ($.truthy($.eq(L1["line"], ""))) {
            L1["line"] = L1["wordtext"];
          } else {
            L1["line"] = $.add($.add(L1["line"], " "), L1["wordtext"]);
          }
        }
        await $.tick();
      }
    }
    if ($.truthy($.ne(L1["line"], ""))) {
      await $.mset((await $.mv(L1["canvas"], "Brush")), "Color", L1["rowcol"]);
      L1["starty"] = $.add(L1["y"], (await L1["heightused"].get()));
      await $.stmt((await $.mcall(L1["canvas"], "FillRect", [(await $.call(C, "Rect", [$.sub(L1["x"], 5), L1["starty"], $.add($.add(L1["x"], L1["maxwidth"]), 10), $.add(L1["starty"], L1["lineheight"])]))])));
      await $.stmt((await $.mcall(L1["canvas"], "TextOut", [L1["x"], L1["starty"], L1["line"]])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => (await L1["heightused"].get()), async ($t67) => { await L1["heightused"].set($t67); }), L1["lineheight"]])));
    }
    await $.mset((await $.mv(L1["canvas"], "Brush")), "Color", (await $.v(C, "clWhite")));
  } finally {
    await $.mcall(L1["words"], "Free", []);
  }
  return L1.result;
});
  L0["pdf"] = (await $.mv((await $.v(C, "TPdfDocumentGDI")), "Create"));
  try {
    await $.mset(L0["pdf"], "DefaultPageWidth", 595);
    await $.mset(L0["pdf"], "DefaultPageHeight", 842);
    await $.mcall(L0["pdf"], "AddPage", []);
    L0["isfirstpage"] = true;
    await $.stmt($.callv(L0["writeheader"], []));
    await $.mcall((await $.v(C, "ods_hms")), "First", []);
    while ($.truthy($.not((await $.mv((await $.v(C, "ods_hms")), "Eof"))))) {
      await $.stmt($.callv(L0["applyfont"], []));
      await $.stmt((await $.callv(L0["drawtextwrappedwithcolorfixedheight"], [20, L0["y"], 500, (await $.mv((await $.mcall((await $.v(C, "ods_hms")), "FieldByName", ["fullname"])), "AsString")), (await $.callv(L0["rowcolor"], [(await $.mv((await $.mcall((await $.v(C, "ods_hms")), "FieldByName", ["main_status"])), "AsString"))])), L0["rowheight"]])));
      await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Brush")), "Color", (await $.callv(L0["rowcolor"], [(await $.mv((await $.mcall((await $.v(C, "ods_hms")), "FieldByName", ["main_status"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "FillRect", [(await $.call(C, "Rect", [$.sub(520, 5), L0["y"], 780, $.add(L0["y"], L0["rowheight"])]))])));
      await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [520, L0["y"], (await $.mv((await $.mcall((await $.v(C, "ods_hms")), "FieldByName", ["birthdate"])), "AsString"))])));
      await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [640, L0["y"], (await $.mv((await $.mcall((await $.v(C, "ods_hms")), "FieldByName", ["end_status"])), "AsString"))])));
      await $.stmt((await $.call(C, "Inc", [$.ref(async () => L0["y"], async ($t68) => { L0["y"] = $t68; }), $.add(L0["rowheight"], 5)])));
      if ($.truthy($.gt(L0["y"], 1350))) {
        await $.mcall(L0["pdf"], "AddPage", []);
        await $.stmt($.callv(L0["applyfont"], []));
        L0["y"] = 40;
        L0["isfirstpage"] = false;
      }
      await $.mcall((await $.v(C, "ods_hms")), "Next", []);
      await $.tick();
    }
    L0["tempname"] = $.add((await $.call(C, "GetEnvironmentVariable", ["TEMP"])), "\\dataset_export.pdf");
    await $.stmt((await $.mcall(L0["pdf"], "SaveToFile", [L0["tempname"]])));
    await $.stmt((await $.call(C, "ShellExecute", [0, "open", (await $.call(C, "PChar", [L0["tempname"]])), null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
  } finally {
    await $.mcall(L0["pdf"], "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "XDBGrid3CellClick", async function XDBGrid3CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.v(C, "OracleDataSet3API_RESPONSE")), "AsVariant")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TBlackInst", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OpenDialog2")), "Execute", [0])));
  if ($.truthy((await $.call(C, "fileexists", [(await $.mv((await $.v(C, "OpenDialog2")), "FileName"))])))) {
    await $.set(C, "XMLPath", (await $.mv((await $.v(C, "OpenDialog2")), "FileName")));
  }
  if ($.truthy($.eq((await $.v(C, "XMLPath")), ""))) {
    return L0.result;
  } else {
    await $.set(C, "XmlFile", (await $.mcall((await $.v(C, "TXMLDocument")), "Create", [(await $.v(C, "Application"))])));
    try {
      await $.stmt((await $.mcall((await $.v(C, "XmlFile")), "LoadFromFile", [(await $.v(C, "XMLPath"))])));
      await $.mset((await $.v(C, "XmlFile")), "Active", true);
      await $.set(C, "MainNode", (await $.mv((await $.v(C, "XmlFile")), "DocumentElement")));
      if ($.truthy($.eq((await $.mv((await $.v(C, "MainNode")), "NodeName")), "CONSOLIDATED_LIST"))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["delete_xml", ["v_id", 1]])));
        await $.stmt((await $.call(C, "Xml1Click", [L0["sender"]])));
        await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Close", []);
        await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Open", []);
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "MainNode")), "NodeName")), "sdnList"))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["delete_xml", ["v_id", 2]])));
        await $.stmt((await $.call(C, "Xml2Click", [L0["sender"]])));
        await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Close", []);
        await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Open", []);
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "MainNode")), "NodeName")), "export"))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["delete_xml", ["v_id", 3]])));
        await $.stmt((await $.call(C, "Xml3Click", [L0["sender"]])));
        await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Close", []);
        await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Open", []);
      }
    } finally {
      await $.stmt((await $.call(C, "FreeAndNil", [$.ref(async () => (await $.v(C, "XmlFile")), async ($t69) => { await $.set(C, "XmlFile", $t69); })])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t70 = (await $.v(C, "DmBlack"));
    const $t71 = (await $.wv([$t70], "ods_search", C, false));
    if ($.truthy($.not((await $.wv([$t70, $t71], "Active", C, false))))) {
      await $.stmt($.wcall([$t70, $t71], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t70, $t71], "Refresh", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DmBlack")), "ods_search")), "RecordCount")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["bleck_search", []])));
  }
  await $.mcall((await $.v(C, "FormSearch")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "XFBitBtn3Click", async function XFBitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Close", []);
  { const $t72 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "SQL")), [4], ""); if ($t72 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "SQL", $t72); } }
  await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_date1": null, "p_date2": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  L0["p_date1"] = (await $.mv((await $.v(C, "DateTi_samelydate1")), "Value"));
  L0["p_date2"] = (await $.mv((await $.v(C, "DateTi_samelydate2")), "Value"));
  {
    const $t73 = (await $.v(C, "OracleDataSet3"));
    await $.stmt($.wcall([$t73], "close", [], C));
    await $.stmt((await $.wcall([$t73], "SetVariable", ["dat1", (await $.wv([$t73], "p_date1", { get: async () => L0["p_date1"], set: async (v) => { L0["p_date1"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t73], "SetVariable", ["dat2", (await $.wv([$t73], "p_date2", { get: async () => L0["p_date2"], set: async (v) => { L0["p_date2"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t73], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "http": null, "responsetext": '', "url": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["PEPINSERT"]])));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Diqqət PEP Siyahı yüklənəcək. Davam edilsin?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    L0["http"] = (await $.mcall((await $.v(C, "TIdHTTP")), "Create", [null]));
    try {
      try {
        await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
        await $.mcall((await $.v(C, "OracleDataSet2")), "First", []);
        while ($.truthy($.not((await $.mv((await $.v(C, "OracleDataSet2")), "Eof"))))) {
          L0["url"] = $.add($.add($.add($.add((await $.mv((await $.v(C, "ods_bankinfoTAX_REGCODE")), "AsString")), "name="), (await $.mcall((await $.v(C, "TIdURI")), "ParamsEncode", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet2")), "FieldByName", ["E_NAME"])), "AsString"))]))), "&surname="), (await $.mcall((await $.v(C, "TIdURI")), "ParamsEncode", [(await $.mv((await $.mcall((await $.v(C, "OracleDataSet2")), "FieldByName", ["E_LASTNAME"])), "AsString"))])));
          try {
            L0["responsetext"] = (await $.mcall(L0["http"], "Get", [L0["url"]]));
          } catch ($t75) {
            $.rethrowControl($t75);
            if ($.excIs($t75, "Exception")) {
              L0["e"] = $.exc($t75);
              await $.stmt((await $.call(C, "OutputDebugString", [(await $.call(C, "PChar", [$.add("Xətalı URL: ", L0["url"])]))])));
              await $.stmt((await $.call(C, "OutputDebugString", [(await $.call(C, "PChar", [$.add("HTTP Xətası (Sətir buraxıldı): ", (await $.mv(L0["e"], "Message")))]))])));
            }
            else { throw $t75; }
          }
          await $.mcall((await $.v(C, "OracleDataSet2")), "Next", []);
          await $.tick();
        }
        await $.stmt((await $.call(C, "ShowMessage", ["Yüklənmə tamamlandı."])));
      } catch ($t74) {
        $.rethrowControl($t74);
        if ($.excIs($t74, "Exception")) {
          L0["e"] = $.exc($t74);
          await $.stmt((await $.call(C, "ShowMessage", [$.add("Kritik Dövr Xətası: ", (await $.mv(L0["e"], "Message")))])));
        }
        else { throw $t74; }
      }
    } finally {
      await $.mcall(L0["http"], "Free", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "xml1Click", async function xml1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "z": 0, "n": 0, "d_xml_type": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panle_Gauge1")), "Visible", true);
  await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])));
  await $.set(C, "f1", "");
  await $.set(C, "f2", "");
  await $.set(C, "f3", "");
  await $.set(C, "f4", "");
  await $.set(C, "f5", "");
  await $.set(C, "f6", "");
  await $.set(C, "f7", "");
  await $.set(C, "f8", "");
  await $.set(C, "f9", "");
  await $.set(C, "f10", "");
  await $.set(C, "f11", "");
  await $.set(C, "f12", "");
  await $.set(C, "f13", "");
  await $.set(C, "f14", "");
  await $.set(C, "f15", "");
  await $.set(C, "f16", "");
  await $.set(C, "f17", "");
  await $.set(C, "f18", "");
  await $.set(C, "f19", "");
  await $.set(C, "f20", "");
  { const $t76 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
    await $.set(C, "i", 0);
    let $t77 = true;
    for (;;) {
      if (!$t77) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
      $t77 = false;
      if (!($.ord((await $.v(C, "i"))) <= $.ord($t76))) break;
      await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])));
      await $.set(C, "f1", 1);
      L0["d_xml_type"] = 1;
      await $.set(C, "f2", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["DATAID"])), "Text")));
      await $.set(C, "f3", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["VERSIONNUM"])), "Text")));
      await $.set(C, "f4", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["FIRST_NAME"])), "Text")));
      await $.set(C, "f5", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["SECOND_NAME"])), "Text")));
      await $.set(C, "f6", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["THIRD_NAME"])), "Text")));
      await $.set(C, "f7", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["FOURTH_NAME"])), "Text")));
      await $.set(C, "f8", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
      await $.set(C, "f9", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["REFERENCE_NUMBER"])), "Text")));
      await $.set(C, "f10", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["LISTED_ON"])), "Text")));
      await $.set(C, "f11", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["NAME_ORIGINAL_SCRIPT"])), "Text")));
      await $.set(C, "f12", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["COMMENTS1"])), "Text")));
      await $.set(C, "f13", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f12")), 1, 800]))])));
      await $.set(C, "f14", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f12")), 801, 800]))])));
      await $.set(C, "f15", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f12")), 1602, 800]))])));
      await $.set(C, "f16", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f12")), 2403, 800]))])));
      { const $t78 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), "Count")), 1);
        await $.set(C, "j", 0);
        let $t79 = true;
        for (;;) {
          if (!$t79) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
          $t79 = false;
          if (!($.ord((await $.v(C, "j"))) <= $.ord($t78))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "NATIONALITY"))) {
            await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), [(await $.v(C, "j"))])));
            await $.set(C, "f17", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["VALUE"])), "Text")));
          }
          if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "INDIVIDUAL_DATE_OF_BIRTH"))) {
            await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), [(await $.v(C, "j"))])));
            await $.set(C, "f18", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["TYPE_OF_DATE"])), "Text")));
            await $.set(C, "f19", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["YEAR"])), "Text")));
          }
          await $.tick();
        }
      }
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", (await $.v(C, "f1")), "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_SECOND_NAME", (await $.v(C, "f5")), "p_THIRD_NAME", (await $.v(C, "f6")), "p_FOURTH_NAME", (await $.v(C, "f7")), "p_UN_LIST_TYPE", (await $.v(C, "f8")), "p_REFERENCE_NUMBER", (await $.v(C, "f9")), "p_LISTED_ON", (await $.v(C, "f10")), "p_NAME_ORIGINAL_SCRIPT", (await $.v(C, "f11")), "p_COMMENTS1", (await $.v(C, "f13")), "p_COMMENTS2", (await $.v(C, "f14")), "p_COMMENTS3", (await $.v(C, "f15")), "p_COMMENTS4", (await $.v(C, "f16")), "p_NATIONALITY_VALUE", (await $.v(C, "f17")), "p_TYPE_OF_DATE", (await $.v(C, "f18")), "p_YEAR", (await $.v(C, "f19")), "p_xml_type", L0["d_xml_type"]]])));
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.add($.fdiv($.mul(L0["z"], 25), (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count"))), 1)])));
      L0["z"] = $.add(L0["z"], 1);
      await $.tick();
    }
  }
  { const $t80 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count")), 1);
    await $.set(C, "i", 0);
    let $t81 = true;
    for (;;) {
      if (!$t81) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
      $t81 = false;
      if (!($.ord((await $.v(C, "i"))) <= $.ord($t80))) break;
      await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])));
      { const $t82 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), "Count")), 1);
        await $.set(C, "j", 0);
        let $t83 = true;
        for (;;) {
          if (!$t83) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
          $t83 = false;
          if (!($.ord((await $.v(C, "j"))) <= $.ord($t82))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "INDIVIDUAL_ALIAS"))) {
            await $.set(C, "xmlNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), [(await $.v(C, "j"))])));
            await $.set(C, "f1", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["DATAID"])), "Text")));
            await $.set(C, "f2", (await $.mv((await $.idx((await $.mv((await $.v(C, "xmlNode")), "ChildNodes")), ["QUALITY"])), "Text")));
            await $.set(C, "f3", (await $.mv((await $.idx((await $.mv((await $.v(C, "xmlNode")), "ChildNodes")), ["ALIAS_NAME"])), "Text")));
            if ($.truthy($.ne((await $.v(C, "f2")), ""))) {
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f1")), "p_name", (await $.v(C, "f3")), "p_xml_type", L0["d_xml_type"]]])));
            }
          }
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.add($.fdiv($.mul(L0["z"], 50), (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["INDIVIDUALS"])), "ChildNodes")), "Count"))), 1)])));
      L0["z"] = $.add(L0["z"], 1);
      await $.tick();
    }
  }
  await $.set(C, "f1", "");
  await $.set(C, "f2", "");
  await $.set(C, "f3", "");
  await $.set(C, "f4", "");
  await $.set(C, "f5", "");
  await $.set(C, "f6", "");
  await $.set(C, "f7", "");
  await $.set(C, "f8", "");
  await $.set(C, "f9", "");
  await $.set(C, "f10", "");
  await $.set(C, "f11", "");
  await $.set(C, "f12", "");
  { const $t84 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
    await $.set(C, "i", 0);
    let $t85 = true;
    for (;;) {
      if (!$t85) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
      $t85 = false;
      if (!($.ord((await $.v(C, "i"))) <= $.ord($t84))) break;
      await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [(await $.v(C, "i"))])));
      await $.set(C, "f1", 0);
      L0["d_xml_type"] = 1;
      await $.set(C, "f2", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["DATAID"])), "Text")));
      await $.set(C, "f3", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["VERSIONNUM"])), "Text")));
      await $.set(C, "f4", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["FIRST_NAME"])), "Text")));
      await $.set(C, "f5", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["UN_LIST_TYPE"])), "Text")));
      await $.set(C, "f6", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["REFERENCE_NUMBER"])), "Text")));
      await $.set(C, "f7", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["LISTED_ON"])), "Text")));
      await $.set(C, "f8", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["COMMENTS1"])), "Text")));
      await $.set(C, "f9", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1, 800]))])));
      await $.set(C, "f10", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 801, 800]))])));
      await $.set(C, "f11", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 1602, 800]))])));
      await $.set(C, "f12", (await $.call(C, "Trim", [(await $.call(C, "Copy", [(await $.v(C, "f8")), 2403, 800]))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_Tyepe", (await $.v(C, "f1")), "p_DATAID", (await $.v(C, "f2")), "p_VERSIONNUM", (await $.v(C, "f3")), "p_FIRST_NAME", (await $.v(C, "f4")), "p_UN_LIST_TYPE", (await $.v(C, "f5")), "p_REFERENCE_NUMBER", (await $.v(C, "f6")), "p_LISTED_ON", (await $.v(C, "f7")), "p_COMMENTS1", (await $.v(C, "f9")), "p_COMMENTS2", (await $.v(C, "f10")), "p_COMMENTS3", (await $.v(C, "f11")), "p_COMMENTS4", (await $.v(C, "f12")), "p_xml_type", L0["d_xml_type"]]])));
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.add($.fdiv($.mul(L0["z"], 75), (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count"))), 1)])));
      L0["z"] = $.add(L0["z"], 1);
      await $.tick();
    }
  }
  await $.set(C, "f1", "");
  await $.set(C, "f2", "");
  await $.set(C, "f3", "");
  { const $t86 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count")), 1);
    await $.set(C, "i", 0);
    let $t87 = true;
    for (;;) {
      if (!$t87) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
      $t87 = false;
      if (!($.ord((await $.v(C, "i"))) <= $.ord($t86))) break;
      await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [(await $.v(C, "i"))])));
      { const $t88 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), "Count")), 1);
        await $.set(C, "j", 0);
        let $t89 = true;
        for (;;) {
          if (!$t89) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
          $t89 = false;
          if (!($.ord((await $.v(C, "j"))) <= $.ord($t88))) break;
          if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), [(await $.v(C, "j"))])), "NodeName")), "ENTITY_ALIAS"))) {
            await $.set(C, "xmlNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["ENTITIES"])), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), [(await $.v(C, "j"))])));
            await $.set(C, "f1", (await $.mv((await $.idx((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), ["DATAID"])), "Text")));
            await $.set(C, "f2", (await $.mv((await $.idx((await $.mv((await $.v(C, "xmlNode")), "ChildNodes")), ["QUALITY"])), "Text")));
            await $.set(C, "f3", (await $.mv((await $.idx((await $.mv((await $.v(C, "xmlNode")), "ChildNodes")), ["ALIAS_NAME"])), "Text")));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f1")), "p_name", (await $.v(C, "f3")), "p_xml_type", L0["d_xml_type"]]])));
          }
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.add($.fdiv($.mul(L0["z"], 100), (await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), ["ENTITIES"])), "ChildNodes")), "Count"))), 1)])));
      L0["z"] = $.add(L0["z"], 1);
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "MessageDlg", ["XML fayli uğurla oxundu", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge_cust")), "Progress", 0);
  await $.mset((await $.v(C, "panle_Gauge")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "Xml2Click", async function Xml2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "d_xml_type": 0, "z": 0, "x": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panle_Gauge")), "Visible", true);
  { const $t90 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "XmlFile")), "ChildNodes")), "Nodes")), ["sdnList"])), "ChildNodes")), "Count")), 1);
    await $.set(C, "i", 0);
    let $t91 = true;
    for (;;) {
      if (!$t91) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
      $t91 = false;
      if (!($.ord((await $.v(C, "i"))) <= $.ord($t90))) break;
      await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "XmlFile")), "ChildNodes")), "Nodes")), ["sdnList"])), "ChildNodes")), [(await $.v(C, "i"))])));
      L0["d_xml_type"] = 2;
      if ($.truthy($.eq((await $.mv((await $.v(C, "CustomerNode")), "NodeName")), "sdnEntry"))) {
        if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["sdnType"])), "text")), "Individual"))) {
          await $.set(C, "f1", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["uid"])), "text")));
          await $.set(C, "f2", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["firstName"])), "text")));
          await $.set(C, "f3", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["lastName"])), "text")));
          await $.set(C, "f4", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["sdnType"])), "text")));
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_dataid", (await $.v(C, "f1")), "p_FIRST_NAME", (await $.v(C, "f2")), "p_SECOND_NAME", (await $.v(C, "f3")), "p_xml_type", L0["d_xml_type"]]])));
          await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), "Nodes")), [(await $.v(C, "i"))])), "ChildNodes")), ["programList"])), "ChildNodes")), ["program"])), "text", []);
          await $.set(C, "f2", "");
          await $.set(C, "f3", "");
          await $.set(C, "f4", "");
          { const $t92 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), "Nodes")), [(await $.v(C, "i"))])), "ChildNodes")), ["akaList"])), "ChildNodes")), "Count")), 1);
            await $.set(C, "j", 0);
            let $t93 = true;
            for (;;) {
              if (!$t93) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
              $t93 = false;
              if (!($.ord((await $.v(C, "j"))) <= $.ord($t92))) break;
              await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), ["akaList"])), "ChildNodes")), [(await $.v(C, "j"))])));
              if ($.truthy($.eq((await $.mv((await $.v(C, "CustomerNode")), "NodeName")), "aka"))) {
                await $.set(C, "f2", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["firstName"])), "text")));
                await $.set(C, "f3", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["lastName"])), "text")));
                await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f1")), "p_NAME", (await $.v(C, "f2")), "p_NAME1", (await $.v(C, "f3")), "p_xml_type", L0["d_xml_type"]]])));
              }
              await $.tick();
            }
          }
        }
      }
      if ($.truthy($.eq((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["sdnType"])), "text")), "Entity"))) {
        await $.set(C, "f1", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["uid"])), "text")));
        await $.set(C, "f2", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["lastName"])), "text")));
        await $.set(C, "f3", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["remarks"])), "text")));
        await $.set(C, "f4", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["sdnType"])), "text")));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_dataid", (await $.v(C, "f1")), "p_FIRST_NAME", (await $.v(C, "f2")), "p_xml_type", L0["d_xml_type"]]])));
        await $.mcall((await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), "Nodes")), [(await $.v(C, "i"))])), "ChildNodes")), ["programList"])), "ChildNodes")), ["program"])), "text", []);
        { const $t94 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), "Nodes")), [(await $.v(C, "i"))])), "ChildNodes")), ["akaList"])), "ChildNodes")), "Count")), 1);
          await $.set(C, "j", 0);
          let $t95 = true;
          for (;;) {
            if (!$t95) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
            $t95 = false;
            if (!($.ord((await $.v(C, "j"))) <= $.ord($t94))) break;
            await $.set(C, "CustomerNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.idx((await $.mv((await $.v(C, "MainNode")), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), ["akaList"])), "ChildNodes")), [(await $.v(C, "j"))])));
            if ($.truthy($.eq((await $.mv((await $.v(C, "CustomerNode")), "NodeName")), "aka"))) {
              await $.set(C, "f2", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "CustomerNode")), "ChildNodes")), "Nodes")), ["lastName"])), "text")));
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f1")), "p_NAME", (await $.v(C, "f2")), "p_xml_type", L0["d_xml_type"]]])));
            }
            await $.tick();
          }
        }
      }
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.add($.fdiv($.mul(L0["z"], 100), (await $.mv((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "XmlFile")), "ChildNodes")), "Nodes")), ["sdnList"])), "ChildNodes")), "Count"))), 1)])));
      L0["z"] = $.add(L0["z"], 1);
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "MessageDlg", ["XML fayli uğurla oxundu", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge_cust")), "Progress", 0);
  await $.mset((await $.v(C, "panle_Gauge")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "Xml3Click", async function Xml3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "z": 0, "a": 0, "d_xml_type": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "panle_Gauge")), "Visible", true);
  { const $t96 = $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "XmlFile")), "DocumentElement")), "ChildNodes")), "Count")), 1);
    await $.set(C, "i", 0);
    let $t97 = true;
    for (;;) {
      if (!$t97) { await $.set(C, "i", $.succ((await $.v(C, "i")), 1)); }
      $t97 = false;
      if (!($.ord((await $.v(C, "i"))) <= $.ord($t96))) break;
      L0["a"] = $.add((await $.v(C, "i")), 1);
      await $.set(C, "f1", L0["a"]);
      L0["d_xml_type"] = 3;
      { const $t98 = $.sub((await $.mv((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "XmlFile")), "DocumentElement")), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), "Count")), 1);
        await $.set(C, "j", 0);
        let $t99 = true;
        for (;;) {
          if (!$t99) { await $.set(C, "j", $.succ((await $.v(C, "j")), 1)); }
          $t99 = false;
          if (!($.ord((await $.v(C, "j"))) <= $.ord($t98))) break;
          await $.set(C, "MainNode", (await $.idx((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "XmlFile")), "DocumentElement")), "ChildNodes")), [(await $.v(C, "i"))])), "ChildNodes")), [(await $.v(C, "j"))])));
          if ($.truthy($.eq((await $.mv((await $.v(C, "MainNode")), "NodeName")), "nameAlias"))) {
            await $.set(C, "f2", (await $.idx((await $.mv((await $.v(C, "MainNode")), "Attributes")), ["firstName"])));
            await $.set(C, "f3", (await $.idx((await $.mv((await $.v(C, "MainNode")), "Attributes")), ["lastName"])));
            await $.set(C, "f4", (await $.idx((await $.mv((await $.v(C, "MainNode")), "Attributes")), ["middleName"])));
            await $.set(C, "f5", (await $.idx((await $.mv((await $.v(C, "MainNode")), "Attributes")), ["wholeName"])));
            if ($.truthy($.ne((await $.v(C, "f20")), (await $.v(C, "f1"))))) {
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_cust_blackXML", ["p_dataid", (await $.v(C, "f1")), "p_FIRST_NAME", $.add($.add($.add($.add((await $.v(C, "f2")), " "), (await $.v(C, "f3"))), " "), (await $.v(C, "f4"))), "p_SECOND_NAME", (await $.v(C, "f5")), "p_xml_type", L0["d_xml_type"]]])));
            }
            await $.set(C, "f20", (await $.v(C, "f1")));
            if ($.truthy($.eq((await $.v(C, "f20")), (await $.v(C, "f1"))))) {
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["add_customers_black_namexml", ["p_dataid", (await $.v(C, "f1")), "p_name", (await $.v(C, "f5")), "p_xml_type", L0["d_xml_type"]]])));
            }
          }
          await $.tick();
        }
      }
      await $.mcall((await $.v(C, "Application")), "ProcessMessages", []);
      await $.mset((await $.v(C, "Gauge_cust")), "Progress", (await $.call(C, "Trunc", [$.add($.fdiv($.mul(L0["z"], 100), (await $.mv((await $.mv((await $.mv((await $.v(C, "XmlFile")), "DocumentElement")), "ChildNodes")), "Count"))), 1)])));
      L0["z"] = $.add(L0["z"], 1);
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "MessageDlg", ["XML fayli uğurla oxundu", (await $.v(C, "mtInformation")), [(await $.v(C, "mbOk"))], 0])));
  await $.mset((await $.v(C, "Gauge_cust")), "Progress", 0);
  await $.mset((await $.v(C, "panle_Gauge")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "yerli1Click", async function yerli1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Fayl vasitəsilə yüklənmiş əvvəlki məlumatlar silinəcək. Davam edilsin?", [""]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["del_cust_black", ["p_id", 1]])));
    await $.stmt((await $.call(C, "ReadRemoteXML_yerli", ["http://hms.gov.az/uploads/list/1/4ca3eca254db23e131d33199bfe22f7c.xml?v=1755866308"])));
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "i": 0, "p": 0, "k": 0, "j": 0, "p1": 0, "k1": 0, "c": 0, "findtext": '', "sbegin": '', "send": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "LoadFromFile", ["C:\\Users\\Teymur\\Desktop\\Vafa.xml"])));
  L0["sbegin"] = "<sanctionEntity";
  L0["send"] = "</sanctionEntity";
  L0["p"] = 0;
  L0["k"] = 0;
  L0["p1"] = 0;
  L0["k1"] = 0;
  L0["c"] = 0;
  { const $t100 = $.sub((await $.mv((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "Count")), 1);
    L0["i"] = 0;
    let $t101 = true;
    for (;;) {
      if (!$t101) { L0["i"] = $.succ(L0["i"], 1); }
      $t101 = false;
      if (!($.ord(L0["i"]) <= $.ord($t100))) break;
      L0["findtext"] = (await $.idx((await $.mv((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "Strings")), [L0["i"]]));
      if ($.truthy($.gt((await $.call(C, "AnsiPos", [L0["sbegin"], L0["findtext"]])), 0))) {
        L0["p"] = L0["i"];
      }
      if ($.truthy($.gt((await $.call(C, "AnsiPos", [L0["send"], L0["findtext"]])), 0))) {
        L0["k"] = L0["i"];
      }
      if ($.truthy((await $.and_(($.gt(L0["p"], L0["p1"])), async () => ($.gt(L0["k"], L0["k1"])))))) {
        L0["c"] = $.add(L0["c"], 1);
        await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
        await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
        await $.mcall((await $.v(C, "OracleDataSet1")), "first", []);
        { const $t102 = $.sub((await $.mv((await $.v(C, "OracleDataSet1")), "RecordCount")), 1);
          L0["s"] = 0;
          let $t103 = true;
          for (;;) {
            if (!$t103) { L0["s"] = $.succ(L0["s"], 1); }
            $t103 = false;
            if (!($.ord(L0["s"]) <= $.ord($t102))) break;
            await $.stmt((await $.call(C, "showmessage", [(await $.mv((await $.v(C, "OracleDataSet1FILD")), "AsString"))])));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["report_tax", ["v_id", L0["c"], "tx", (await $.mv((await $.v(C, "OracleDataSet1FILD")), "AsString"))]])));
            await $.mcall((await $.v(C, "OracleDataSet1")), "Next", []);
            await $.tick();
          }
        }
        { const $t104 = L0["k"];
          L0["j"] = L0["p"];
          let $t105 = true;
          for (;;) {
            if (!$t105) { L0["j"] = $.succ(L0["j"], 1); }
            $t105 = false;
            if (!($.ord(L0["j"]) <= $.ord($t104))) break;
            L0["findtext"] = (await $.idx((await $.mv((await $.mv((await $.v(C, "RichEdit1")), "Lines")), "Strings")), [L0["j"]]));
            await $.stmt((await $.call(C, "ShowMessage", [(await $.call(C, "inttostr", [L0["c"]]))])));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "RichEdit2")), "Lines")), "Add", [L0["findtext"]])));
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["aa", ["c", (await $.call(C, "inttostr", [L0["c"]])), "aa", L0["findtext"]]])));
            await $.tick();
          }
        }
        L0["p1"] = L0["p"];
        L0["k1"] = L0["k"];
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "isertbtnClick", async function isertbtnClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "x", 1);
  {
    const $t106 = (await $.v(C, "InsForm"));
    await $.mset((await $.wv([$t106], "edit1", C, false)), "text", "");
    await $.mset((await $.wv([$t106], "edit2", C, false)), "text", "");
    await $.mset((await $.wv([$t106], "edit3", C, false)), "text", "");
    await $.mset((await $.wv([$t106], "edit4", C, false)), "text", "");
    await $.mset((await $.wv([$t106], "edit5", C, false)), "text", "");
    await $.mset((await $.wv([$t106], "edit6", C, false)), "text", "");
    await $.mset((await $.wv([$t106], "edit7", C, false)), "text", "");
    await $.mset((await $.wv([$t106], "edit8", C, false)), "text", "");
    await $.mset((await $.wv([$t106], "DBLookupComboBox3", C, false)), "KeyValue", "");
    await $.mset((await $.wv([$t106], "DBLookupComboBox2", C, false)), "KeyValue", "");
    await $.mset((await $.wv([$t106], "DBLookupComboBox1", C, false)), "KeyValue", 1);
    await $.mset((await $.wv([$t106], "DBLookupComboBox4", C, false)), "KeyValue", "");
    await $.mset((await $.wv([$t106], "DBEdit1", C, false)), "Text", "");
  }
  await $.mcall((await $.v(C, "InsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "x", 2);
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_date"])), "asdatetime")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["birthdate"])), "asdatetime")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit2")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["lastname"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit4")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["middlename"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit3")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_pin"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit5")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_organ"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit6")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_num"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit7")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_serie"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit8")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox1")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_type"])), "asinteger")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox2")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["adrs_city"])), "asinteger")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox3")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["adrs_state"])), "asinteger")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox4")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["gender"])), "asinteger")));
  await $.mcall((await $.v(C, "InsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "N1718sanksiyasiyahs1Click", async function N1718sanksiyasiyahs1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Fayl vasitəsilə yüklənmiş əvvəlki məlumatlar silinəcək. Davam edilsin?", [""]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.set(C, "d_xml_type", 3);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["delete_xml", ["v_id", (await $.v(C, "d_xml_type"))]])));
    await $.stmt((await $.call(C, "ReadRemoteXML_xarci3", ["http://hms.gov.az/uploads/list/8/ddaf3ccbb7a67df7badfbcc13bfe8d36.xml?v=1755868081"])));
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "N1988sanksiyasiyahs1Click", async function N1988sanksiyasiyahs1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Fayl vasitəsilə yüklənmiş əvvəlki məlumatlar silinəcək. Davam edilsin?", [""]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.set(C, "d_xml_type", 2);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["delete_xml", ["v_id", (await $.v(C, "d_xml_type"))]])));
    await $.stmt((await $.call(C, "ReadRemoteXML_xarci2", ["http://hms.gov.az/uploads/list/6/c29bc235b831e972379bfba9f25ad955.xml?v=1755868048"])));
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel1")), "Visible", $.not((await $.mv((await $.v(C, "Panel1")), "Visible"))));
  await $.mset((await $.v(C, "N1")), "Checked", (await $.mv((await $.v(C, "Panel1")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "N2231siyahs1Click", async function N2231siyahs1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["Fayl vasitəsilə yüklənmiş əvvəlki məlumatlar silinəcək. Davam edilsin?", [""]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.set(C, "d_xml_type", 4);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["delete_xml", ["v_id", (await $.v(C, "d_xml_type"))]])));
    await $.stmt((await $.call(C, "ReadRemoteXML_xarci4", ["http://hms.gov.az/uploads/list/9/972ea547f7be07367b00d3141f8fe95c.xml?v=1755868176"])));
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "ods_blecxml")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["              Silinsin?", ["p_id"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["del_cust_black", ["p_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "FieldByName", ["id"])), "asinteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "EditSearchChange", async function EditSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditSearch")), "Text"))])), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Close", []);
    { const $t107 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
      if ($.eq($t107, 0)) {
        { const $t108 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL")), [7], $.add($.add("and lower(name) like '", (await $.call(C, "LowerCase", [(await $.mv((await $.v(C, "EditSearch")), "Text"))]))), "%'")); if ($t108 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL", $t108); } }
      }
      else if ($.eq($t107, 1)) {
        { const $t109 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL")), [7], $.add($.add("and lower(lastname) like '", (await $.call(C, "LowerCase", [(await $.mv((await $.v(C, "EditSearch")), "Text"))]))), "%'")); if ($t109 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL", $t109); } }
      }
      else if ($.eq($t107, 2)) {
        { const $t110 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL")), [7], $.add($.add("and lower(middlename) like '", (await $.call(C, "LowerCase", [(await $.mv((await $.v(C, "EditSearch")), "Text"))]))), "%'")); if ($t110 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL", $t110); } }
      }
      else if ($.eq($t107, 3)) {
        { const $t111 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL")), [7], $.add($.add("and lower(fullname) like '", (await $.call(C, "LowerCase", [(await $.mv((await $.v(C, "EditSearch")), "Text"))]))), "%'")); if ($t111 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL", $t111); } }
      }
    }
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Open", []);
  } else {
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Close", []);
    { const $t112 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL")), [7], ""); if ($t112 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL", $t112); } }
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel2")), "Visible", $.not((await $.mv((await $.v(C, "Panel2")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton7")), "Down", (await $.mv((await $.v(C, "Panel2")), "Visible")));
  await $.mset((await $.v(C, "CheckBox1")), "Checked", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
    await $.mcall((await $.v(C, "Evanescence1")), "CheckAll", []);
  } else {
    await $.mcall((await $.v(C, "Evanescence1")), "UncheckAll", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "Evanescence1")), "GetCheckedKeyList")), "Count")), 0))) {
    await $.set(C, "ADDITIONALPARAMS", " and a.adrs_state=0");
  } else {
    await $.set(C, "ADDITIONALPARAMS", "");
  }
  await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Close", []);
  { const $t113 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL")), [8], (await $.v(C, "ADDITIONALPARAMS"))); if ($t113 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL", $t113); } }
  await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "Evanescence1ClickCheck", async function Evanescence1ClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "additionalparams": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.ne((await $.mv((await $.mv((await $.v(C, "Evanescence1")), "GetCheckedKeyList")), "Count")), (await $.mv((await $.mv((await $.v(C, "Evanescence1")), "Items")), "Count")))))) {
    L0["additionalparams"] = $.add($.add($.add($.add(L0["additionalparams"], " and a.adrs_state in("), (await $.mv((await $.mv((await $.v(C, "Evanescence1")), "GetCheckedKeyList")), "CommaText"))), ")"), "\r\n");
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "Evanescence1")), "GetCheckedKeyList")), "Count")), 0))) {
    L0["additionalparams"] = " and a.adrs_state=0";
  }
  await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Close", []);
  { const $t114 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL")), [8], L0["additionalparams"]); if ($t114 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "SQL", $t114); } }
  await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "N3Click", async function N3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "x", 1);
  {
    const $t115 = (await $.v(C, "InsForm"));
    await $.mset((await $.wv([$t115], "edit1", C, false)), "text", "");
    await $.mset((await $.wv([$t115], "edit2", C, false)), "text", "");
    await $.mset((await $.wv([$t115], "edit3", C, false)), "text", "");
    await $.mset((await $.wv([$t115], "edit4", C, false)), "text", "");
    await $.mset((await $.wv([$t115], "edit5", C, false)), "text", "");
    await $.mset((await $.wv([$t115], "edit6", C, false)), "text", "");
    await $.mset((await $.wv([$t115], "edit7", C, false)), "text", "");
    await $.mset((await $.wv([$t115], "edit8", C, false)), "text", "");
    await $.mset((await $.wv([$t115], "DBLookupComboBox3", C, false)), "KeyValue", "");
    await $.mset((await $.wv([$t115], "DBLookupComboBox2", C, false)), "KeyValue", "");
    await $.mset((await $.wv([$t115], "DBLookupComboBox1", C, false)), "KeyValue", 1);
    await $.mset((await $.wv([$t115], "DBLookupComboBox4", C, false)), "KeyValue", "");
    await $.mset((await $.wv([$t115], "DBEdit1", C, false)), "Text", "");
  }
  await $.mcall((await $.v(C, "InsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "N4Click", async function N4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit2")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["lastname"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit4")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["middlename"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit3")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_pin"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit5")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_organ"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit6")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_num"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit7")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_serie"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit8")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox1")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_type"])), "asinteger")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox2")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["adrs_city"])), "asinteger")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox3")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["adrs_state"])), "asinteger")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox4")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["gender"])), "asinteger")));
  await $.set(C, "x", 2);
  await $.mcall((await $.v(C, "InsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "N5Click", async function N5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["             Silinsin?", ["p_id"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "OraclePackage1")), "CallProcedure", ["del_cust_black", ["p_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "FieldByName", ["id"])), "asinteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "N7Click", async function N7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel2")), "Visible", $.not((await $.mv((await $.v(C, "Panel2")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton7")), "Down", (await $.mv((await $.v(C, "Panel2")), "Visible")));
  await $.mset((await $.v(C, "CheckBox1")), "Checked", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Panel1")), "Visible", $.not((await $.mv((await $.v(C, "Panel1")), "Visible"))));
  await $.mset((await $.v(C, "ToolButton9")), "Down", (await $.mv((await $.v(C, "Panel1")), "Visible")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "x", 2);
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_date"])), "asdatetime")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["birthdate"])), "asdatetime")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["name"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit2")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["lastname"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit4")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["middlename"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit3")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_pin"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit5")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_organ"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit6")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_num"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit7")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_serie"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "edit8")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["address"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox1")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["doc_type"])), "asinteger")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox2")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["adrs_city"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox3")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["citizenship"])), "asstring")));
  await $.mset((await $.mv((await $.v(C, "InsForm")), "DBLookupComboBox4")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "fieldbyname", ["gender"])), "asinteger")));
  await $.mcall((await $.v(C, "InsForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  if ($.truthy((await $.or_(($.not((await $.v(C, "EnableColoring")))), async () => ($.eq((await $.mv((await $.v(C, "ods_hms")), "RecordCount")), 0)))))) {
    await $.stmt((await $.mcall((await $.v(C, "DBGrid2")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
    return L0.result;
  }
  L0["s"] = (await $.call(C, "LowerCase", [(await $.mv((await $.mcall((await $.v(C, "ods_hms")), "FieldByName", ["main_status"])), "AsString"))]));
  if ($.truthy($.eq(L0["s"], "match"))) {
    await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Canvas")), "Brush")), "Color", (await $.v(C, "clRed")));
    await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Canvas")), "Font")), "Color", (await $.v(C, "clWhite")));
  } else {
    if ($.truthy($.eq(L0["s"], "close"))) {
      await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Canvas")), "Brush")), "Color", (await $.v(C, "clYellow")));
      await $.mset((await $.mv((await $.mv((await $.v(C, "DBGrid2")), "Canvas")), "Font")), "Color", (await $.v(C, "clBlack")));
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "DBGrid2")), "DefaultDrawColumnCell", [L0["rect"], L0["datacol"], L0["column"], L0["state"]])));
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TBlackInst", "ToolButton10Click", async function ToolButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "formCon")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBlackInst", "ToolButton11Click", async function ToolButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "excel": null, "m": 0, "n": 0, "b": '', "v_date": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["xlcelltypelast"] = 11;
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
