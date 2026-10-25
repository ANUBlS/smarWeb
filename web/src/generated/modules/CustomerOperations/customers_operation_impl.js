// Generated from customers_operation_impl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("customers_operation_impl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "customer_operations_TLB", "StdVcl", "StdCtrls", "SearchCombo", "ExtCtrls", "ComCtrls", "Grids", "DBGrids", "ToolWin", "Buttons", "Db", "OracleData", "ImgList", "Menus", "ActnList", "Mask", "DBCtrls", "Variants", "ComObj", "ComServ", "SBCore", "SBCustomer", "sboapiDataModuleImpl", "UnitFrmZoom", "co_properties_unit", "co_commission_unit", "CO_TransactionPropertiesImpl", "co_statement_impl", "co_st_check", "co_memorial", "CO_Interval_unit", "InFormUnit", "OutForm_Unit", "CO_In_Unit", "CO_Out_Unit", "TransactionDataModuleUnit", "FormAcc_Unit", "CurrencyToHR_Azeri_Impl", "CO_reportUnit", "CO_AccSettings_Unit", "P_AccState_Unit", "P_AccTransaction_Unit", "P_Interval_Unit", "CO_Transact_Unitp", "UnitCustProps", "uAccViewFormImpl", "uTrViewFormImpl", "UnitBProc", "co_Order_Rep_unit", "co_order_qrep_unit", "BookmarkSetup", "CO_TemplateAddEditUnt", "CO_BookmarkAddEditunt", "CO_frmWReportImpl", "UnitOrderInfo", "SBTranslateProc", "CO_datamod_impl"]);
  const C = [U];
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omCommission", 2);
  U.const("tsCommit", 0);
  U.const("tsDelete", 1);
  U.const("tsReject", 2);
  U.const("aotAccNo", 0);
  U.const("aotAccName", 1);
  U.const("aotAccCurrency", 2);
  U.const("aotAccOpenDate", 3);
  U.const("aotNoOrder", 4);
  U.defClass("TCO_Main", "TActiveForm", {"customergb": {"name": "CustomerGB", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "customersearchbar": {"name": "CustomerSearchBar", "type": "TToolBar"}, "editid": {"name": "EditID", "type": "TEdit"}, "editinn": {"name": "EditINN", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "dbgridcustomers": {"name": "DBGridCustomers", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgridaccounts": {"name": "DBGridAccounts", "type": "TDBGrid"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "controlbar2": {"name": "ControlBar2", "type": "TControlBar"}, "accountviewsettingspanel": {"name": "AccountViewSettingsPanel", "type": "TPanel"}, "accountsorderpanel": {"name": "AccountsOrderPanel", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "searchacc": {"name": "SearchAcc", "type": "TEdit"}, "accountcurrencypanel": {"name": "AccountCurrencyPanel", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "searchname": {"name": "SearchName", "type": "TEdit"}, "popupmenuaccounts": {"name": "PopupMenuAccounts", "type": "TPopupMenu"}, "n7": {"name": "N7", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n11": {"name": "N11", "type": "TMenuItem"}, "transoutgoing": {"name": "TransOutgoing", "type": "TMenuItem"}, "transincoming": {"name": "TransIncoming", "type": "TMenuItem"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "dbgridtransactions": {"name": "DBGridTransactions", "type": "TDBGrid"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "popupmenutransactions": {"name": "PopupMenuTransactions", "type": "TPopupMenu"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "d1": {"name": "D1", "type": "TMenuItem"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionshowfilter": {"name": "ActionShowFilter", "type": "TAction"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "actionselectall": {"name": "ActionSelectAll", "type": "TAction"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "actionloadfilters": {"name": "ActionLoadFilters", "type": "TAction"}, "actionfilter": {"name": "ActionFilter", "type": "TAction"}, "actionstepcommit": {"name": "ActionStepCommit", "type": "TAction"}, "actionreject": {"name": "ActionReject", "type": "TAction"}, "actioncommission": {"name": "ActionCommission", "type": "TAction"}, "popupmenucustomers": {"name": "PopupMenuCustomers", "type": "TPopupMenu"}, "n9": {"name": "N9", "type": "TMenuItem"}, "n13": {"name": "N13", "type": "TMenuItem"}, "n14": {"name": "N14", "type": "TMenuItem"}, "n15": {"name": "N15", "type": "TMenuItem"}, "n16": {"name": "N16", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "transdebit": {"name": "TransDebit", "type": "TMenuItem"}, "n18": {"name": "N18", "type": "TMenuItem"}, "n101": {"name": "N101", "type": "TMenuItem"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "refresh": {"name": "Refresh", "type": "TAction"}, "actsettings": {"name": "actSettings", "type": "TAction"}, "add": {"name": "Add", "type": "TAction"}, "n19": {"name": "N19", "type": "TMenuItem"}, "n20": {"name": "N20", "type": "TMenuItem"}, "dateedit": {"name": "DateEdit", "type": "TMaskEdit"}, "transcredit": {"name": "TransCredit", "type": "TMenuItem"}, "complextrd": {"name": "ComplexTrD", "type": "TMenuItem"}, "n21": {"name": "N21", "type": "TMenuItem"}, "n22": {"name": "N22", "type": "TMenuItem"}, "n23": {"name": "N23", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "editname1": {"name": "EditNAME1", "type": "TEdit"}, "kredit1": {"name": "Kredit1", "type": "TMenuItem"}, "debet1": {"name": "Debet1", "type": "TMenuItem"}, "qeyid1": {"name": "Qeyid1", "type": "TMenuItem"}, "fevents": {"name": "FEvents", "type": "IActiveFormXEvents"}, "fuseaccorder": {"name": "FUseAccOrder", "type": "Boolean"}, "faccorder": {"name": "FAccOrder", "type": "TAccOrder"}, "fcurrentdate": {"name": "FCurrentDate", "type": "TDateTime"}, "requiredorderbyfield": {"name": "RequiredOrderByField", "type": "variant"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}, "lasttransactionid": {"name": "LastTransactionID", "type": "Longint"}, "transactionstate": {"name": "TransactionState", "type": "TTransactionState"}, "pluginhandle": {"name": "PluginHandle", "type": "THandle"}, "exportproc": {"name": "exportproc", "type": "Procedure"}}, {"currentdate": {"name": "CurrentDate", "read": "FCurrentDate", "write": "SetCurrentDate"}, "useaccorder": {"name": "UseAccOrder", "read": "FUseAccOrder"}, "accorder": {"name": "AccOrder", "read": "FAccOrder"}});
  U.init(async () => {
    U.const("tsDelayed", 1);
    U.const("tsCommited", 2);
    U.const("tsRejected", 3);
    U.const("BooleanPrefix", " AND ");
    U.const("cs_CommitInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "Təsdiqlənmiş əməliyyatlar: %d"), "\r"), "Təsdiqlənməmiş əməliyyatlar: %d"));
    U.const("cs_RejectInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "İnkar edilmiş əməliyyatlar: %d"), "\r"), "İnkar edilməmiş əməliyyatlar: %d"));
    U.var_("OperationIDs", null, "TStringList");
    U.var_("CurrencyIDs", null, "TStringList");
    U.var_("DB_HesabID", '', "String");
    U.var_("CR_HesabID", '', "String");
    U.var_("note_id", '', "String");
    U.var_("contract_id", '', "String");
    U.var_("pep_chek", 0, "integer");
  });
  U.method("TCO_Main", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TCO_Main", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TCO_Main", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TCO_Main", "Initialize", null, arguments);
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
  U.method("TCO_Main", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "DBGridCustomers", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "LoadPlugin2", async function LoadPlugin2(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "pluginparam2": $.copyArg(p2), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "pluginparam2"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam2"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "PluginParam2"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TCO_Main", "LoadPlugin3", async function LoadPlugin3(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "pluginparam2": $.copyArg(p2), "pluginparam3": $.copyArg(p3), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "pluginparam2", "pluginparam3"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["pluginparam2"], L0["pluginparam3"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "PluginParam2", "PluginParam3"], "kind": "procedure", "ptypes": ["String", "String", "String", "String"]});
  U.method("TCO_Main", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCO_Main", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCO_Main", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "Debet1Click", async function Debet1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["  Hecbir hesab qeyd edilmeyib   !"])));
    return L0.result;
  } else {
    await $.set(C, "DB_HesabID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["id"])), "Asstring")));
  }
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "DB_Hesab", (await $.v(C, "DB_HesabID"))])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TCO_Main", "Kredit1Click", async function Kredit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["  Hecbir hesab qeyd edilmeyib   !"])));
    return L0.result;
  } else {
    await $.set(C, "CR_HesabID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["id"])), "Asstring")));
  }
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "CR_Hesab", (await $.v(C, "CR_HesabID"))])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TCO_Main", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCO_Main", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TCO_Main", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TCO_Main", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TCO_Main", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TCO_Main", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCO_Main", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TCO_Main", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TCO_Main", "FlagEnabled", async function FlagEnabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"flag": $.copyArg(p0), result: false, "savedpos": null, "index": 0};
  await $.fixArgs(L0, ["flag"]);
  L0["checkrow"] = $.fn(async function CheckRow() {
  const L1 = {result: undefined};
  L1["result"] = $.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger")), L0["flag"]);
  return L1.result;
});
  L0["result"] = false;
  {
    const $t3 = (await $.v(C, "DBGridTransactions"));
    const $t4 = (await $.wv([$t3], "SelectedRows", C, false));
    const $t5 = (await $.mv((await $.wv([$t3, $t4], "DataSource", C, false)), "DataSet"));
    if ($.truthy((await $.or_(($.eq((await $.wv([$t3, $t4, $t5], "Count", C, false)), 1)), async () => ($.eq((await $.wv([$t3, $t4, $t5], "Count", C, false)), 0)))))) {
      await $.stmt($.wcall([$t3, $t4, $t5], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
    } else {
      await $.stmt($.wcall([$t3, $t4, $t5], "DisableControls", [], C));
      await $.wset([$t3, $t4, $t5], "SavedPos", (await $.wv([$t3, $t4, $t5], "GetBookmark", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
      try {
        { const $t6 = $.sub((await $.wv([$t3, $t4, $t5], "Count", C, false)), 1);
          await $.wset([$t3, $t4, $t5], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
          let $t7 = true;
          for (;;) {
            if (!$t7) { await $.wset([$t3, $t4, $t5], "Index", $.succ((await $.wv([$t3, $t4, $t5], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
            $t7 = false;
            if (!($.ord((await $.wv([$t3, $t4, $t5], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t6))) break;
            await $.stmt((await $.wcall([$t3, $t4, $t5], "GotoBookmark", [(await $.wcall([$t3, $t4, $t5], "TBookmark", [(await $.idx((await $.wv([$t3, $t4, $t5], "Items", C, false)), [(await $.wv([$t3, $t4, $t5], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
            await $.stmt($.wcall([$t3, $t4, $t5], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
            if ($.truthy((await $.wv([$t3, $t4, $t5], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
              break;
            }
            await $.tick();
          }
        }
      } finally {
        await $.stmt((await $.wcall([$t3, $t4, $t5], "GotoBookmark", [(await $.wv([$t3, $t4, $t5], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t3, $t4, $t5], "EnableControls", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Flag"], "kind": "function", "ptypes": ["Word"]});
  U.method("TCO_Main", "InitData", async function InitData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  {
    const $t8 = (await $.v(C, "CO_Datamod"));
    { const $t9 = $.sub((await $.wv([$t8], "ComponentCount", C, false)), 1);
      await $.wset([$t8], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t10 = true;
      for (;;) {
        if (!$t10) { await $.wset([$t8], "i", $.succ((await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t10 = false;
        if (!($.ord((await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t9))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t8], "Components", C, false)), [(await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDataSet")))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t8], "Components", C, false)), [(await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Tag")), 1))) {
            try {
              await $.mcall((await $.idx((await $.wv([$t8], "Components", C, false)), [(await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Open", []);
            } catch ($t11) {
              $.rethrowControl($t11);
              $.handled($t11);
              throw $.raise((await $.mcall((await $.wv([$t8], "Exception", C, false)), "Create", [(await $.wcall([$t8], "Format", [(await $.wv([$t8], "c_err_message", { get: async () => L0["c_err_message"], set: async (v) => { L0["c_err_message"] = v; }, local: true }, false)), [(await $.mv(((await $.idx((await $.wv([$t8], "Components", C, false)), [(await $.wv([$t8], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))]], C))])));
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Main", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_Datamod", (await $.mcall((await $.v(C, "TCO_DataMod")), "Create", [Self])));
  await $.set(C, "CO_BookmarkAddEditForm", (await $.mcall((await $.v(C, "TCO_BookmarkAddEditForm")), "Create", [Self])));
  {
    const $t12 = (await $.v(C, "CO_Datamod"));
    await $.mcall((await $.wv([$t12], "Customers", C, false)), "Open", []);
    await $.wset([$t12], "CurrentDate", (await $.mv((await $.mcall((await $.wv([$t12], "Sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), C);
    await $.wset([$t12], "TransactionState", (await $.wv([$t12], "tsDelete", C, false)), C);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("MenuShrift", async function MenuShrift(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TCO_Main", "SetCurrentDate", async function SetCurrentDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FCurrentDate", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.method("TCO_Main", "ExtractMonth", async function ExtractMonth(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"datetime": $.copyArg(p0), "decimalsymbol": $.copyArg(p1), result: '', "year": 0, "month": 0, "day": 0};
  await $.fixArgs(L0, ["datetime", "decimalsymbol"]);
  L0["months"] = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
  await $.stmt((await $.call(C, "DecodeDate", [L0["datetime"], $.ref(async () => L0["year"], async ($t13) => { L0["year"] = $t13; }), $.ref(async () => L0["month"], async ($t14) => { L0["month"] = $t14; }), $.ref(async () => L0["day"], async ($t15) => { L0["day"] = $t15; })])));
  L0["result"] = $.add($.add($.add($.add((await $.call(C, "IntToStr", [L0["day"]])), L0["decimalsymbol"]), (await $.idx(L0["months"], [L0["month"]]))), L0["decimalsymbol"]), (await $.call(C, "IntToStr", [L0["year"]])));
  return L0.result;
}, {"params": ["DateTime", "DecimalSymbol"], "kind": "function", "ptypes": ["TDateTime", "String"]});
  U.method("TCO_Main", "CustomerIDSearchEditExit", async function CustomerIDSearchEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "GotoTransaction", async function GotoTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  {
    const $t16 = (await $.mv((await $.v(C, "TransactionDataModule")), "Transactions"));
    await $.stmt((await $.wcall([$t16], "Locate", ["ID", (await $.wv([$t16], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), []], C)));
  }
  return L0.result;
}, {"params": ["ID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TCO_Main", "Focus", async function Focus(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.mv((await $.v(C, "DBGridTransactions")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBGridTransactions")), "SetFocus", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Main", "DBGridAccountsCellClick", async function DBGridAccountsCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "SearchAcc")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["AccNo"])), "AsString")));
  await $.mset((await $.v(C, "SearchName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["AccName"])), "AsString")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCO_Main", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir hesab qeyd olunmayıb"])));
    return L0.result;
  } else {
    try {
      await $.set(C, "CO_St_Form", (await $.mcall((await $.v(C, "TCO_St_Form")), "Create", [Self])));
      await $.mcall((await $.v(C, "CO_St_Form")), "Showmodal", []);
    } finally {
      await $.mcall((await $.v(C, "CO_St_Form")), "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir hesab qeyd olunmayıb"])));
    return L0.result;
  } else {
    await $.set(C, "CO_MemorialForm", (await $.mcall((await $.v(C, "TCO_MemorialForm")), "Create", [Self])));
    await $.set(C, "FormInterval", (await $.mcall((await $.v(C, "TFormInterval")), "Create", [Self])));
    {
      const $t17 = (await $.v(C, "FormInterval"));
      await $.mset((await $.wv([$t17], "StartDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t17], "CO_Datamod", C, false)), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
      await $.mset((await $.wv([$t17], "EndDateEdit", C, false)), "DateTime", (await $.mv((await $.wv([$t17], "StartDateEdit", C, false)), "DateTime")));
      if ($.truthy($.eq((await $.wv([$t17], "Showmodal", C, false)), (await $.wv([$t17], "mrOK", C, false))))) {
        await $.wset([$t17], "AStartDate", (await $.mv((await $.wv([$t17], "StartDateEdit", C, false)), "DateTime")), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
        await $.wset([$t17], "AEndDate", (await $.mv((await $.wv([$t17], "EndDateEdit", C, false)), "DateTime")), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
        {
          const $t18 = (await $.wv([$t17], "CO_MemorialForm", C, false));
          await $.stmt((await $.wcall([$t17, $t18], "OpenDataControls", [(await $.wv([$t17, $t18], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false)), (await $.wv([$t17, $t18], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false))], C)));
          await $.stmt($.wcall([$t17, $t18], "Showmodal", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "CO_Datamod")), "Customers"));
    await $.stmt($.wcall([$t19], "Close", [], C));
    await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t19], "SQL", C, false)), "Add", [$.add($.add("Select * From customers Where inn='", (await $.mv((await $.wv([$t19], "EditINN", C, false)), "Text"))), "'")])));
    await $.stmt($.wcall([$t19], "Open", [], C));
    await $.mset((await $.wv([$t19], "DBGridAccounts", C, false)), "Options", [(await $.wv([$t19], "dgRowSelect", C, false)), (await $.wv([$t19], "dgAlwaysShowEditor", C, false)), (await $.wv([$t19], "dgTitles", C, false)), (await $.wv([$t19], "dgIndicator", C, false)), (await $.wv([$t19], "dgColumnResize", C, false)), (await $.wv([$t19], "dgColLines", C, false)), (await $.wv([$t19], "dgRowLines", C, false)), (await $.wv([$t19], "dgTabs", C, false)), (await $.wv([$t19], "dgAlwaysShowSelection", C, false)), (await $.wv([$t19], "dgConfirmDelete", C, false)), (await $.wv([$t19], "dgCancelOnExit", C, false)), (await $.wv([$t19], "dgMultiSelect", C, false))]);
    {
      const $t20 = (await $.mv((await $.wv([$t19], "CO_Datamod", C, false)), "Account"));
      await $.stmt($.wcall([$t19, $t20], "Close", [], C));
      await $.mcall((await $.wv([$t19, $t20], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t19, $t20], "SQL", C, false)), "Add", [$.add($.add("select * from juraccs where ACCKLID='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19, $t20], "CO_Datamod", C, false)), "Customers")), "FieldByName", ["ID"])), "AsString"))), "' ")])));
      await $.stmt($.wcall([$t19, $t20], "Open", [], C));
      await $.stmt($.wcall([$t19, $t20], "Refresh", [], C));
      {
        const $t21 = (await $.mv((await $.wv([$t19, $t20], "CO_Datamod", C, false)), "provarch"));
        await $.stmt($.wcall([$t19, $t20, $t21], "Close", [], C));
        await $.mcall((await $.wv([$t19, $t20, $t21], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t19, $t20, $t21], "SQL", C, false)), "Add", [$.add($.add($.add($.add("select * from prov_t where debit = '", (await $.mv((await $.mcall((await $.mv((await $.wv([$t19, $t20, $t21], "CO_Datamod", C, false)), "Account")), "FieldByName", ["accno"])), "AsString"))), "' or credit = '"), (await $.mv((await $.mcall((await $.mv((await $.wv([$t19, $t20, $t21], "CO_Datamod", C, false)), "Account")), "FieldByName", ["accno"])), "AsString"))), "' ")])));
        await $.stmt($.wcall([$t19, $t20, $t21], "Open", [], C));
        await $.stmt($.wcall([$t19, $t20, $t21], "Refresh", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "TransOutgoingClick", async function TransOutgoingClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RichEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["TipAcc"])), "AsString")));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir hesab qeyd olunmayıb"])));
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["C", 0, (await $.call(C, "Length", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])), []])), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesaba Kredit həbsi qoyulub"])));
      return L0.result;
    } else {
      {
        const $t22 = (await $.v(C, "CO_TransTypeIncOut"));
        await $.wset([$t22], "CO_TransTypeIncOut", (await $.mcall((await $.wv([$t22], "TCO_TransTypeIncOUT", C, false)), "Create", [Self])), C);
        await $.wset([$t22], "IncOut", 2, C);
        await $.stmt($.wcall([$t22], "Showmodal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "TransIncomingClick", async function TransIncomingClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RichEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["TipAcc"])), "AsString")));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir hesab qeyd olunmayıb"])));
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["D", 0, (await $.call(C, "Length", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])), []])), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesaba Debet həbsi qoyulub"])));
      return L0.result;
    } else {
      {
        const $t23 = (await $.v(C, "CO_TransTypeIncOut"));
        await $.wset([$t23], "CO_TransTypeIncOut", (await $.mcall((await $.wv([$t23], "TCO_TransTypeIncOUT", C, false)), "Create", [Self])), C);
        await $.wset([$t23], "IncOut", 1, C);
        await $.stmt($.wcall([$t23], "Showmodal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "SearchAccKeyPress", async function SearchAccKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "acc_no": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await L0["key"].get()), "\r"))))) {
    return L0.result;
  }
  {
    const $t24 = (await $.v(C, "CO_Datamod"));
    const $t25 = (await $.wv([$t24], "Account", C, false));
    if ($.truthy($.not(($.eq((await $.mv((await $.wv([$t24, $t25], "Customers", C, false)), "State")), (await $.wv([$t24, $t25], "dsInsert", C, false))))))) {
      await $.stmt((await $.wcall([$t24, $t25], "SetVariable", ["CID", (await $.wv([$t24, $t25], "null", C, false))], C)));
    }
    await $.stmt((await $.wcall([$t24, $t25], "SetVariable", ["p_AccNO", $.add((await $.mv((await $.wv([$t24, $t25], "SearchAcc", C, false)), "Text")), "%")], C)));
    if ($.truthy($.not((await $.wv([$t24, $t25], "Active", C, false))))) {
      await $.stmt($.wcall([$t24, $t25], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t24, $t25], "Refresh", [], C));
    }
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "RecordCount")), 0))) {
    L0["acc_no"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["ACCNO"])), "AsVariant"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Customers")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["ACCKLID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "Locate", ["ACCNO", L0["acc_no"], [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Main", "DBGridTransactionsDrawColumnCell", async function DBGridTransactionsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t26 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t26], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t27 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t26], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t27, (await $.wv([$t26], "tsCommited", C, false)))) {
          await $.wset([$t26], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "tsRejected", C, false)))) {
          await $.wset([$t26], "ImageIndex", 8, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t27, (await $.wv([$t26], "tsDelayed", C, false)))) {
          await $.wset([$t26], "ImageIndex", 9, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t26], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t26], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t26], "ImageList", C, false)), "Draw", [(await $.wv([$t26], "Canvas", C, false)), (await $.mv((await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t26], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t26], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t26], "DefaultDrawColumnCell", [(await $.wv([$t26], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t26], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t26], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t26], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TCO_Main", "SearchAccKeyDown", async function SearchAccKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.v(C, "EditINN")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditID")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "EditName")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "DateEdit")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "SearchName")), "Text")), "")))))) {
    await $.mset((await $.v(C, "EditID")), "Text", "");
  }
  await $.mset((await $.v(C, "EditINN")), "Text", "");
  await $.mset((await $.v(C, "DateEdit")), "Text", "");
  await $.mset((await $.v(C, "SearchName")), "Text", "");
  await $.mset((await $.v(C, "EditName")), "Text", "");
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_Main", "SearchNameKeyUp", async function SearchNameKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_return"))))) {
    {
      const $t28 = (await $.mv((await $.v(C, "CO_Datamod")), "Account"));
      await $.stmt($.wcall([$t28], "Close", [], C));
      await $.mcall((await $.wv([$t28], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t28], "SQL", C, false)), "Add", [$.add($.add("Select * from juraccs Where upper(accname) like upper('%", (await $.mv((await $.wv([$t28], "SearchName", C, false)), "Text"))), "%') and rownum=1")])));
      await $.stmt($.wcall([$t28], "Open", [], C));
      await $.mset((await $.wv([$t28], "DBGridAccounts", C, false)), "Options", [(await $.wv([$t28], "dgRowSelect", C, false)), (await $.wv([$t28], "dgAlwaysShowEditor", C, false)), (await $.wv([$t28], "dgTitles", C, false)), (await $.wv([$t28], "dgIndicator", C, false)), (await $.wv([$t28], "dgColumnResize", C, false)), (await $.wv([$t28], "dgColLines", C, false)), (await $.wv([$t28], "dgRowLines", C, false)), (await $.wv([$t28], "dgTabs", C, false)), (await $.wv([$t28], "dgAlwaysShowSelection", C, false)), (await $.wv([$t28], "dgConfirmDelete", C, false)), (await $.wv([$t28], "dgCancelOnExit", C, false)), (await $.wv([$t28], "dgMultiSelect", C, false))]);
      {
        const $t29 = (await $.mv((await $.wv([$t28], "CO_Datamod", C, false)), "Customers"));
        await $.stmt((await $.wcall([$t28, $t29], "Locate", ["id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t28, $t29], "CO_Datamod", C, false)), "Account")), "FieldByName", ["accklid"])), "AsVariant")), []], C)));
        await $.mset((await $.wv([$t28, $t29], "DBGridAccounts", C, false)), "Options", [(await $.wv([$t28, $t29], "dgRowSelect", C, false)), (await $.wv([$t28, $t29], "dgAlwaysShowEditor", C, false)), (await $.wv([$t28, $t29], "dgTitles", C, false)), (await $.wv([$t28, $t29], "dgIndicator", C, false)), (await $.wv([$t28, $t29], "dgColumnResize", C, false)), (await $.wv([$t28, $t29], "dgColLines", C, false)), (await $.wv([$t28, $t29], "dgRowLines", C, false)), (await $.wv([$t28, $t29], "dgTabs", C, false)), (await $.wv([$t28, $t29], "dgAlwaysShowSelection", C, false)), (await $.wv([$t28, $t29], "dgConfirmDelete", C, false)), (await $.wv([$t28, $t29], "dgCancelOnExit", C, false)), (await $.wv([$t28, $t29], "dgMultiSelect", C, false))]);
        {
          const $t30 = (await $.mv((await $.wv([$t28, $t29], "CO_Datamod", C, false)), "Transactions"));
          await $.stmt($.wcall([$t28, $t29, $t30], "Close", [], C));
          await $.mcall((await $.wv([$t28, $t29, $t30], "SQL", C, false)), "Clear", []);
          await $.stmt((await $.mcall((await $.wv([$t28, $t29, $t30], "SQL", C, false)), "Add", [$.add($.add($.add($.add("select * from transactionsp where debitid = '", (await $.mv((await $.wv([$t28, $t29, $t30], "DBEdit1", C, false)), "Text"))), "' or creditid = '"), (await $.mv((await $.wv([$t28, $t29, $t30], "DBEdit1", C, false)), "Text"))), "'  ")])));
          await $.stmt($.wcall([$t28, $t29, $t30], "Open", [], C));
          await $.stmt($.wcall([$t28, $t29, $t30], "Refresh", [], C));
          await $.mset((await $.wv([$t28, $t29, $t30], "DBGridAccounts", C, false)), "Options", [(await $.wv([$t28, $t29, $t30], "dgRowSelect", C, false)), (await $.wv([$t28, $t29, $t30], "dgAlwaysShowEditor", C, false)), (await $.wv([$t28, $t29, $t30], "dgTitles", C, false)), (await $.wv([$t28, $t29, $t30], "dgIndicator", C, false)), (await $.wv([$t28, $t29, $t30], "dgColumnResize", C, false)), (await $.wv([$t28, $t29, $t30], "dgColLines", C, false)), (await $.wv([$t28, $t29, $t30], "dgRowLines", C, false)), (await $.wv([$t28, $t29, $t30], "dgTabs", C, false)), (await $.wv([$t28, $t29, $t30], "dgAlwaysShowSelection", C, false)), (await $.wv([$t28, $t29, $t30], "dgConfirmDelete", C, false)), (await $.wv([$t28, $t29, $t30], "dgCancelOnExit", C, false)), (await $.wv([$t28, $t29, $t30], "dgMultiSelect", C, false))]);
          if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.wv([$t28, $t29, $t30], "EditINN", C, false)), "Text")), "")), async () => ($.ne((await $.mv((await $.wv([$t28, $t29, $t30], "EditID", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t28, $t29, $t30], "EditName", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t28, $t29, $t30], "DateEdit", C, false)), "Text")), "")))), async () => ($.ne((await $.mv((await $.wv([$t28, $t29, $t30], "SearchAcc", C, false)), "Text")), "")))))) {
            await $.mset((await $.wv([$t28, $t29, $t30], "EditID", C, false)), "Text", "");
          }
          await $.mset((await $.wv([$t28, $t29, $t30], "EditINN", C, false)), "Text", "");
          await $.mset((await $.wv([$t28, $t29, $t30], "DateEdit", C, false)), "Text", "");
          await $.mset((await $.wv([$t28, $t29, $t30], "SearchAcc", C, false)), "Text", "");
          await $.mset((await $.wv([$t28, $t29, $t30], "EditName", C, false)), "Text", "");
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_Main", "GetCustomerInfo", async function GetCustomerInfo(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"custid": $.copyArg(p0), "custname": $.asRef(p1), "custinn": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["custid"]);
  {
    const $t31 = (await $.mv((await $.v(C, "CO_Datamod")), "OPCash"));
    await $.stmt((await $.wcall([$t31], "CallProcedure", ["GetCustomerInfo", [(await $.wv([$t31], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), "", ""]], C)));
    await $.wset([$t31], "CustInn", (await $.wcall([$t31], "GetParameter", [1], C)), { get: async () => await L0["custinn"].get(), set: async (v) => { await L0["custinn"].set(v); }, local: true });
    await $.wset([$t31], "CustName", (await $.wcall([$t31], "GetParameter", [2], C)), { get: async () => await L0["custname"].get(), set: async (v) => { await L0["custname"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["CustID", "CustName", "CustInn"], "kind": "procedure", "ptypes": ["Integer", "String", "String"]});
  U.method("TCO_Main", "DBGridTransactionsTitleClick", async function DBGridTransactionsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t32 = (await $.mv((await $.v(C, "CO_Datamod")), "Transactions"));
    await $.stmt((await $.wcall([$t32], "SetVariable", ["Title", (await $.wv([$t32], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t32], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCO_Main", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "valutename": '', "withmanat": '', "nomanat": '', "withcoin": '', "manatposition": 0, "i": 0, "custname": '', "custinn": '', "transactionid": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir əməliyyat qeyd edilməyib"])));
    return L0.result;
  } else {
    L0["nomanat"] = "";
    try {
      {
        const $t33 = (await $.mv((await $.v(C, "CO_Datamod")), "Transactions"));
        await $.stmt((await $.wcall([$t33], "GetCustomerInfo", [(await $.mv((await $.wcall([$t33], "FieldByName", ["creditid"], C)), "AsInteger")), $.ref(async () => (await $.wv([$t33], "CustName", { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }, false)), async ($t34) => { await $.wset([$t33], "CustName", $t34, { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t33], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)), async ($t35) => { await $.wset([$t33], "CustInn", $t35, { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }); })], C)));
        await $.wset([$t33], "TransactionID", (await $.mv((await $.wcall([$t33], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
        await $.wset([$t33], "Filter", $.add(" ID=", (await $.wv([$t33], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))), C);
        await $.wset([$t33], "Filtered", (await $.wv([$t33], "True", C, false)), C);
      }
      {
        const $t36 = (await $.v(C, "CO_Datamod"));
        const $t37 = (await $.wv([$t36], "ODSValuteName", C, false));
        await $.stmt($.wcall([$t36, $t37], "Close", [], C));
        await $.stmt((await $.wcall([$t36, $t37], "SetVariable", ["valute", (await $.mv((await $.mcall((await $.wv([$t36, $t37], "Transactions", C, false)), "FieldByName", ["debitcurrencyid"])), "Value"))], C)));
        await $.mcall((await $.wv([$t36, $t37], "ODSValuteName", C, false)), "Open", []);
        await $.wset([$t36, $t37], "ValuteName", (await $.wcall([$t36, $t37], "AnsiLowerCase", [(await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["Valu_name"], C)), "AsString"))], C)), { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true });
      }
      L0["withmanat"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["creditamount"])), "AsFloat"))])), 0, [0]]));
      L0["manatposition"] = (await $.call(C, "POS", ["manat", L0["withmanat"]]));
      if ($.truthy($.gt(L0["manatposition"], 0))) {
        { const $t38 = $.sub(L0["manatposition"], 1);
          L0["i"] = 1;
          let $t39 = true;
          for (;;) {
            if (!$t39) { L0["i"] = $.succ(L0["i"], 1); }
            $t39 = false;
            if (!($.ord(L0["i"]) <= $.ord($t38))) break;
            L0["nomanat"] = $.add(L0["nomanat"], (await $.idx(L0["withmanat"], [L0["i"]])));
            await $.tick();
          }
        }
      }
      L0["withcoin"] = (await $.call(C, "FloatToStr", [(await $.call(C, "Frac", [(await $.call(C, "StrToFloat", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["creditamount"])), "AsString"))]))]))]));
      if ($.truthy($.ne(L0["withcoin"], "0"))) {
        await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t40) => { L0["withcoin"] = $t40; }), 1, 2])));
        if ($.truthy($.lt((await $.call(C, "Length", [L0["withcoin"]])), 2))) {
          L0["withcoin"] = $.add(L0["withcoin"], "0");
        } else {
          if ($.truthy($.gt((await $.call(C, "Length", [L0["withcoin"]])), 2))) {
            await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t41) => { L0["withcoin"] = $t41; }), 3, (await $.call(C, "Length", [L0["withcoin"]]))])));
          }
        }
        L0["withcoin"] = $.add($.add(L0["withcoin"], " "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSValuteName")), "FieldByName", ["valu_bala"])), "AsString")));
      } else {
        L0["withcoin"] = "";
      }
      L0["valutename"] = (await $.call(C, "AnsiLowerCase", [$.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSValuteName")), "FieldByName", ["Valu_name"])), "AsString")), "  "), L0["withcoin"])]));
      if ($.truthy($.eq(L0["nomanat"], (await $.v(C, "EmptyStr"))))) {
        L0["nomanat"] = "0 ";
      }
      if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CO_Report"))]))))) {
        await $.set(C, "CO_Report", (await $.mcall((await $.v(C, "TCO_Report")), "Create", [Self])));
      }
      await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASHINFO")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASHINFO")), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASHINFO")), "Open", []);
      await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Trdestination")), "Refresh", []);
      await $.mcall((await $.mv((await $.v(C, "CO_Report")), "ODSBank")), "Open", []);
      await $.mset((await $.mv((await $.v(C, "CO_Report")), "QRAMMOUNT1")), "Caption", $.add(L0["nomanat"], L0["valutename"]));
      await $.mset((await $.mv((await $.v(C, "CO_Report")), "QRAMMOUNT2")), "Caption", $.add(L0["nomanat"], L0["valutename"]));
      await $.mcall((await $.v(C, "CO_Report")), "Preview", []);
    } finally {
      {
        const $t42 = (await $.mv((await $.v(C, "CO_Datamod")), "Transactions"));
        await $.wset([$t42], "Filtered", (await $.wv([$t42], "False", C, false)), C);
      }
      await $.mcall((await $.mv((await $.v(C, "CO_Report")), "ODSBank")), "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "CommitTransaction", async function CommitTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionid"]);
  {
    const $t43 = (await $.mv((await $.v(C, "CO_Datamod")), "SBTransaction"));
    await $.wset([$t43], "Result", (await $.wcall([$t43], "CallIntegerFunction", [(await $.wv([$t43], "cs_commit_transaction", C, false)), ["TransactionID", (await $.wv([$t43], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t43], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "function", "ptypes": ["Longint"]});
  U.method("TCO_Main", "SBCommit", async function SBCommit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCO_Main", "N8Click", async function N8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["commitedcount"] = 0;
  L0["errorcount"] = 0;
  L0["willrefresh"] = false;
  {
    const $t44 = (await $.v(C, "TransactionDataModule"));
    const $t45 = (await $.wv([$t44], "DBGridTransactions", C, false));
    const $t46 = (await $.wv([$t44, $t45], "SelectedRows", C, false));
    const $t47 = (await $.mv((await $.wv([$t44, $t45, $t46], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wcall([$t44, $t45, $t46, $t47], "MessageDlg", ["Əməliyyatlar təsdiqlənsin?", (await $.wv([$t44, $t45, $t46, $t47], "mtConfirmation", C, false)), [(await $.wv([$t44, $t45, $t46, $t47], "mbYes", C, false)), (await $.wv([$t44, $t45, $t46, $t47], "mbCancel", C, false))], 0], C)), (await $.wv([$t44, $t45, $t46, $t47], "mrYes", C, false))))) {
      await $.stmt($.wcall([$t44, $t45, $t46, $t47], "DisableControls", [], C));
      try {
        await $.mcall((await $.wv([$t44, $t45, $t46, $t47], "Application", C, false)), "ProcessMessages", []);
        if ($.truthy($.eq((await $.wv([$t44, $t45, $t46, $t47], "Count", C, false)), 0))) {
          await $.wset([$t44, $t45, $t46, $t47], "CurrentRowSelected", (await $.wv([$t44, $t45, $t46, $t47], "True", C, false)), C);
        }
        { const $t48 = $.sub((await $.wv([$t44, $t45, $t46, $t47], "Count", C, false)), 1);
          await $.wset([$t44, $t45, $t46, $t47], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t49 = true;
          for (;;) {
            if (!$t49) { await $.wset([$t44, $t45, $t46, $t47], "i", $.succ((await $.wv([$t44, $t45, $t46, $t47], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t49 = false;
            if (!($.ord((await $.wv([$t44, $t45, $t46, $t47], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t48))) break;
            try {
              await $.stmt((await $.wcall([$t44, $t45, $t46, $t47], "GotoBookmark", [(await $.wcall([$t44, $t45, $t46, $t47], "TBookmark", [(await $.idx((await $.wv([$t44, $t45, $t46, $t47], "Items", C, false)), [(await $.wv([$t44, $t45, $t46, $t47], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
              await $.wset([$t44, $t45, $t46, $t47], "Status", (await $.mv((await $.wcall([$t44, $t45, $t46, $t47], "FieldByName", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
              if ($.truthy($.in_((await $.wv([$t44, $t45, $t46, $t47], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t44, $t45, $t46, $t47], "tsDelayed", C, false)), (await $.wv([$t44, $t45, $t46, $t47], "tsRejected", C, false))]))) {
                await $.wset([$t44, $t45, $t46, $t47], "ID", (await $.mv((await $.wcall([$t44, $t45, $t46, $t47], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                await $.stmt((await $.wcall([$t44, $t45, $t46, $t47], "CommitTransaction", [(await $.wv([$t44, $t45, $t46, $t47], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
                await $.wset([$t44, $t45, $t46, $t47], "WillRefresh", (await $.wv([$t44, $t45, $t46, $t47], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
                await $.stmt((await $.wcall([$t44, $t45, $t46, $t47], "Inc", [$.ref(async () => (await $.wv([$t44, $t45, $t46, $t47], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t51) => { await $.wset([$t44, $t45, $t46, $t47], "CommitedCount", $t51, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                await $.stmt((await $.wcall([$t44, $t45, $t46, $t47], "SBCommit", [], C)));
              }
            } catch ($t50) {
              $.rethrowControl($t50);
              if ($.excIs($t50, "Exception")) {
                L0["e"] = $.exc($t50);
                await $.wset([$t44, $t45, $t46, $t47], "LastErrorMessage", (await $.mv((await $.wv([$t44, $t45, $t46, $t47], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                await $.stmt((await $.wcall([$t44, $t45, $t46, $t47], "Inc", [$.ref(async () => (await $.wv([$t44, $t45, $t46, $t47], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t52) => { await $.wset([$t44, $t45, $t46, $t47], "ErrorCount", $t52, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                continue;
              }
              else { throw $t50; }
            }
            await $.tick();
          }
        }
      } finally {
        if ($.truthy($.gt((await $.wv([$t44, $t45, $t46, $t47], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
          if ($.truthy($.eq((await $.wv([$t44, $t45, $t46, $t47], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
            await $.stmt((await $.wcall([$t44, $t45, $t46, $t47], "MessageDlg", [(await $.wv([$t44, $t45, $t46, $t47], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t44, $t45, $t46, $t47], "mtConfirmation", C, false)), [(await $.wv([$t44, $t45, $t46, $t47], "mbOk", C, false))], 0], C)));
          } else {
            await $.stmt((await $.wcall([$t44, $t45, $t46, $t47], "MessageDlg", [(await $.wcall([$t44, $t45, $t46, $t47], "Format", [(await $.wv([$t44, $t45, $t46, $t47], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t44, $t45, $t46, $t47], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t44, $t45, $t46, $t47], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t44, $t45, $t46, $t47], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t44, $t45, $t46, $t47], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t44, $t45, $t46, $t47], "mtConfirmation", C, false)), [(await $.wv([$t44, $t45, $t46, $t47], "mbOk", C, false))], 0], C)));
          }
        }
        await $.stmt($.wcall([$t44, $t45, $t46, $t47], "EnableControls", [], C));
        if ($.truthy((await $.wv([$t44, $t45, $t46, $t47], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
          await $.wset([$t44, $t45, $t46, $t47], "TransactionState", (await $.wv([$t44, $t45, $t46, $t47], "tsCommit", C, false)), C);
          await $.mcall((await $.mv((await $.wv([$t44, $t45, $t46, $t47], "CO_Datamod", C, false)), "Transactions")), "Close", []);
          await $.mcall((await $.mv((await $.wv([$t44, $t45, $t46, $t47], "CO_Datamod", C, false)), "Transactions")), "Open", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "CommitTransactions", async function CommitTransactions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionids": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionids"]);
  {
    const $t53 = (await $.mv((await $.v(C, "CO_Datamod")), "SBTransaction"));
    await $.wset([$t53], "Result", (await $.wcall([$t53], "CallIntegerFunction", [(await $.wv([$t53], "cs_commit_delayed_transactions", C, false)), ["OverloadIDsStr", (await $.wv([$t53], "TransactionIDs", { get: async () => L0["transactionids"], set: async (v) => { L0["transactionids"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t53], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionIDs"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TCO_Main", "D1Click", async function D1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t54 = (await $.v(C, "DBGridTransactions"));
    const $t55 = (await $.wv([$t54], "SelectedRows", C, false));
    const $t56 = (await $.mv((await $.wv([$t54, $t55], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t54, $t55, $t56], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t54, $t55, $t56], "Inc", [$.ref(async () => (await $.wv([$t54, $t55, $t56], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t57) => { await $.wset([$t54, $t55, $t56], "TrCount", $t57, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t54, $t55, $t56], "IDs", (await $.mv((await $.wcall([$t54, $t55, $t56], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t54, $t55, $t56], "DisableControls", [], C));
      try {
        { const $t58 = $.sub((await $.wv([$t54, $t55, $t56], "Count", C, false)), 1);
          await $.wset([$t54, $t55, $t56], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t59 = true;
          for (;;) {
            if (!$t59) { await $.wset([$t54, $t55, $t56], "i", $.succ((await $.wv([$t54, $t55, $t56], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t59 = false;
            if (!($.ord((await $.wv([$t54, $t55, $t56], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t58))) break;
            await $.stmt((await $.wcall([$t54, $t55, $t56], "GotoBookmark", [(await $.wcall([$t54, $t55, $t56], "TBookmark", [(await $.idx((await $.wv([$t54, $t55, $t56], "Items", C, false)), [(await $.wv([$t54, $t55, $t56], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t54, $t55, $t56], "Status", (await $.mv((await $.wcall([$t54, $t55, $t56], "FieldByName", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t54, $t55, $t56], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t54, $t55, $t56], "tsDelayed", C, false)), (await $.wv([$t54, $t55, $t56], "tsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t54, $t55, $t56], "Inc", [$.ref(async () => (await $.wv([$t54, $t55, $t56], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t60) => { await $.wset([$t54, $t55, $t56], "TrCount", $t60, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t54, $t55, $t56], "IDs", $.add($.add((await $.wv([$t54, $t55, $t56], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t54, $t55, $t56], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t54, $t55, $t56], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t54, $t55, $t56], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t61) => { await $.wset([$t54, $t55, $t56], "IDs", $t61, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t54, $t55, $t56], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyat təsdiqlənsin?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t62 = (await $.v(C, "TransactionDataModule"));
      await $.stmt((await $.wcall([$t62], "CommitTransactions", [(await $.wv([$t62], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t62], "SBCommit", [], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "ActionStepCommitExecute", async function ActionStepCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": '', "qaccid": 0, "qtrid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir əməliyyat qeyd edilməyib"])));
    return L0.result;
  } else {
    L0["commitedcount"] = 0;
    L0["errorcount"] = 0;
    L0["willrefresh"] = false;
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["Status"])), "AsInteger")), 2))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyat artıq təsdiqlənib!"])));
    } else {
      {
        const $t63 = (await $.v(C, "TransactionDataModule"));
        const $t64 = (await $.wv([$t63], "DBGridTransactions", C, false));
        const $t65 = (await $.wv([$t63, $t64], "SelectedRows", C, false));
        const $t66 = (await $.mv((await $.wv([$t63, $t64, $t65], "DataSource", C, false)), "DataSet"));
        if ($.truthy($.eq((await $.wcall([$t63, $t64, $t65, $t66], "MessageDlg", ["Əməliyyatlar təsdiqlənsin?", (await $.wv([$t63, $t64, $t65, $t66], "mtConfirmation", C, false)), [(await $.wv([$t63, $t64, $t65, $t66], "mbYes", C, false)), (await $.wv([$t63, $t64, $t65, $t66], "mbCancel", C, false))], 0], C)), (await $.wv([$t63, $t64, $t65, $t66], "mrYes", C, false))))) {
          await $.stmt($.wcall([$t63, $t64, $t65, $t66], "DisableControls", [], C));
          try {
            await $.mcall((await $.wv([$t63, $t64, $t65, $t66], "Application", C, false)), "ProcessMessages", []);
            if ($.truthy($.eq((await $.wv([$t63, $t64, $t65, $t66], "Count", C, false)), 0))) {
              await $.wset([$t63, $t64, $t65, $t66], "CurrentRowSelected", (await $.wv([$t63, $t64, $t65, $t66], "True", C, false)), C);
            }
            { const $t67 = $.sub((await $.wv([$t63, $t64, $t65, $t66], "Count", C, false)), 1);
              await $.wset([$t63, $t64, $t65, $t66], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
              let $t68 = true;
              for (;;) {
                if (!$t68) { await $.wset([$t63, $t64, $t65, $t66], "i", $.succ((await $.wv([$t63, $t64, $t65, $t66], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                $t68 = false;
                if (!($.ord((await $.wv([$t63, $t64, $t65, $t66], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t67))) break;
                try {
                  await $.stmt((await $.wcall([$t63, $t64, $t65, $t66], "GotoBookmark", [(await $.wcall([$t63, $t64, $t65, $t66], "TBookmark", [(await $.idx((await $.wv([$t63, $t64, $t65, $t66], "Items", C, false)), [(await $.wv([$t63, $t64, $t65, $t66], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
                  await $.wset([$t63, $t64, $t65, $t66], "Status", (await $.mv((await $.wcall([$t63, $t64, $t65, $t66], "FieldByName", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
                  if ($.truthy($.in_((await $.wv([$t63, $t64, $t65, $t66], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t63, $t64, $t65, $t66], "tsDelayed", C, false)), (await $.wv([$t63, $t64, $t65, $t66], "tsRejected", C, false))]))) {
                    await $.wset([$t63, $t64, $t65, $t66], "ID", (await $.mv((await $.wcall([$t63, $t64, $t65, $t66], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t63, $t64, $t65, $t66], "CommitTransaction", [(await $.wv([$t63, $t64, $t65, $t66], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
                    await $.wset([$t63, $t64, $t65, $t66], "WillRefresh", (await $.wv([$t63, $t64, $t65, $t66], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t63, $t64, $t65, $t66], "Inc", [$.ref(async () => (await $.wv([$t63, $t64, $t65, $t66], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t70) => { await $.wset([$t63, $t64, $t65, $t66], "CommitedCount", $t70, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                    await $.stmt((await $.wcall([$t63, $t64, $t65, $t66], "SBCommit", [], C)));
                  }
                } catch ($t69) {
                  $.rethrowControl($t69);
                  if ($.excIs($t69, "Exception")) {
                    L0["e"] = $.exc($t69);
                    await $.wset([$t63, $t64, $t65, $t66], "LastErrorMessage", (await $.mv((await $.wv([$t63, $t64, $t65, $t66], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t63, $t64, $t65, $t66], "Inc", [$.ref(async () => (await $.wv([$t63, $t64, $t65, $t66], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t71) => { await $.wset([$t63, $t64, $t65, $t66], "ErrorCount", $t71, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                    continue;
                  }
                  else { throw $t69; }
                }
                await $.tick();
              }
            }
          } finally {
            if ($.truthy($.gt((await $.wv([$t63, $t64, $t65, $t66], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
              if ($.truthy($.eq((await $.wv([$t63, $t64, $t65, $t66], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
                await $.stmt((await $.wcall([$t63, $t64, $t65, $t66], "MessageDlg", [(await $.wv([$t63, $t64, $t65, $t66], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t63, $t64, $t65, $t66], "mtConfirmation", C, false)), [(await $.wv([$t63, $t64, $t65, $t66], "mbOk", C, false))], 0], C)));
              } else {
                await $.stmt((await $.wcall([$t63, $t64, $t65, $t66], "MessageDlg", [(await $.wcall([$t63, $t64, $t65, $t66], "Format", [(await $.wv([$t63, $t64, $t65, $t66], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t63, $t64, $t65, $t66], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t63, $t64, $t65, $t66], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t63, $t64, $t65, $t66], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t63, $t64, $t65, $t66], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t63, $t64, $t65, $t66], "mtConfirmation", C, false)), [(await $.wv([$t63, $t64, $t65, $t66], "mbOk", C, false))], 0], C)));
              }
            }
            await $.stmt($.wcall([$t63, $t64, $t65, $t66], "EnableControls", [], C));
            if ($.truthy((await $.wv([$t63, $t64, $t65, $t66], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
              await $.wset([$t63, $t64, $t65, $t66], "TransactionState", (await $.wv([$t63, $t64, $t65, $t66], "tsCommit", C, false)), C);
              await $.wset([$t63, $t64, $t65, $t66], "qtrid", (await $.mv((await $.mv((await $.wv([$t63, $t64, $t65, $t66], "CO_Datamod", C, false)), "TransactionsID")), "AsInteger")), { get: async () => L0["qtrid"], set: async (v) => { L0["qtrid"] = v; }, local: true });
              await $.wset([$t63, $t64, $t65, $t66], "qaccid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t63, $t64, $t65, $t66], "CO_Datamod", C, false)), "Account")), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["qaccid"], set: async (v) => { L0["qaccid"] = v; }, local: true });
              await $.mcall((await $.mv((await $.wv([$t63, $t64, $t65, $t66], "CO_Datamod", C, false)), "Transactions")), "Close", []);
              await $.mcall((await $.mv((await $.wv([$t63, $t64, $t65, $t66], "CO_Datamod", C, false)), "Transactions")), "Open", []);
              await $.mcall((await $.mv((await $.wv([$t63, $t64, $t65, $t66], "CO_Datamod", C, false)), "Account")), "Close", []);
              await $.mcall((await $.mv((await $.wv([$t63, $t64, $t65, $t66], "CO_Datamod", C, false)), "Account")), "Open", []);
              await $.stmt((await $.mcall((await $.mv((await $.wv([$t63, $t64, $t65, $t66], "CO_Datamod", C, false)), "Account")), "Locate", ["id", (await $.wv([$t63, $t64, $t65, $t66], "qaccid", { get: async () => L0["qaccid"], set: async (v) => { L0["qaccid"] = v; }, local: true }, false)), []])));
              await $.stmt((await $.mcall((await $.mv((await $.wv([$t63, $t64, $t65, $t66], "CO_Datamod", C, false)), "Transactions")), "Locate", ["id", (await $.wv([$t63, $t64, $t65, $t66], "qtrid", { get: async () => L0["qtrid"], set: async (v) => { L0["qtrid"] = v; }, local: true }, false)), []])));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "ActionCommitExecute", async function ActionCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t72 = (await $.v(C, "DBGridTransactions"));
    const $t73 = (await $.wv([$t72], "SelectedRows", C, false));
    const $t74 = (await $.mv((await $.wv([$t72, $t73], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t72, $t73, $t74], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t72, $t73, $t74], "Inc", [$.ref(async () => (await $.wv([$t72, $t73, $t74], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t75) => { await $.wset([$t72, $t73, $t74], "TrCount", $t75, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t72, $t73, $t74], "IDs", (await $.mv((await $.wcall([$t72, $t73, $t74], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t72, $t73, $t74], "DisableControls", [], C));
      try {
        { const $t76 = $.sub((await $.wv([$t72, $t73, $t74], "Count", C, false)), 1);
          await $.wset([$t72, $t73, $t74], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t77 = true;
          for (;;) {
            if (!$t77) { await $.wset([$t72, $t73, $t74], "i", $.succ((await $.wv([$t72, $t73, $t74], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t77 = false;
            if (!($.ord((await $.wv([$t72, $t73, $t74], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t76))) break;
            await $.stmt((await $.wcall([$t72, $t73, $t74], "GotoBookmark", [(await $.wcall([$t72, $t73, $t74], "TBookmark", [(await $.idx((await $.wv([$t72, $t73, $t74], "Items", C, false)), [(await $.wv([$t72, $t73, $t74], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t72, $t73, $t74], "Status", (await $.mv((await $.wcall([$t72, $t73, $t74], "FieldByName", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t72, $t73, $t74], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t72, $t73, $t74], "tsDelayed", C, false)), (await $.wv([$t72, $t73, $t74], "tsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t72, $t73, $t74], "Inc", [$.ref(async () => (await $.wv([$t72, $t73, $t74], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t78) => { await $.wset([$t72, $t73, $t74], "TrCount", $t78, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t72, $t73, $t74], "IDs", $.add($.add((await $.wv([$t72, $t73, $t74], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t72, $t73, $t74], "FieldByName", ["ID"], C)), "AsString"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t72, $t73, $t74], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t72, $t73, $t74], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t79) => { await $.wset([$t72, $t73, $t74], "IDs", $t79, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t72, $t73, $t74], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyat təsdiqlənsin?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t80 = (await $.v(C, "TransactionDataModule"));
      await $.stmt((await $.wcall([$t80], "CommitTransactions", [(await $.wv([$t80], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t80], "SBCommit", [], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DBGridCustomersCellClick", async function DBGridCustomersCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.or_((await $.or_(($.ne((await $.mv((await $.v(C, "EditINN")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditName")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "DateEdit")), "Text")), "")))))) {
    await $.mset((await $.v(C, "EditINN")), "Text", "");
    await $.mset((await $.v(C, "DateEdit")), "Text", "");
    await $.mset((await $.v(C, "EditName")), "Text", "");
  }
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "IsEmpty"))))) {
    if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["ACCNO"])), "IsNull"))))) {
      await $.mset((await $.v(C, "SearchAcc")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["ACCNO"])), "AsVariant")));
    } else {
      await $.mset((await $.v(C, "SearchAcc")), "Text", "");
    }
    if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["ACCNAME"])), "IsNull"))))) {
      await $.mset((await $.v(C, "SearchName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["ACCNAME"])), "AsVariant")));
    } else {
      await $.mset((await $.v(C, "SearchName")), "Text", "");
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCO_Main", "N9Click", async function N9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Customers")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Customers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N13Click", async function N13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "P_AccState", (await $.mcall((await $.v(C, "TP_AccState")), "Create", [Self])));
  {
    const $t81 = (await $.mv((await $.v(C, "CO_Datamod")), "Account"));
    if ($.truthy((await $.wv([$t81], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t81], "ShowMessage", ["Heç bir hesab qeyd olunmayıb"], C)));
      return L0.result;
    } else {
      {
        const $t82 = (await $.wv([$t81], "P_AccState", C, false));
        await $.stmt($.wcall([$t81, $t82], "Showmodal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N14Click", async function N14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormAccount"))]))))) {
    await $.set(C, "FormAccount", (await $.mcall((await $.v(C, "TFormAccount")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormAccount")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N15Click", async function N15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccTransaction", (await $.mcall((await $.v(C, "TFormAccTransaction")), "Create", [Self])));
  await $.set(C, "P_interval", (await $.mcall((await $.v(C, "TP_Interval")), "Create", [Self])));
  {
    const $t83 = (await $.mv((await $.v(C, "CO_Datamod")), "Account"));
    if ($.truthy((await $.wv([$t83], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t83], "ShowMessage", ["Heç bir hesab qeyd olunmayıb"], C)));
      return L0.result;
    } else {
      await $.mcall((await $.mv((await $.wv([$t83], "CO_Datamod", C, false)), "Sysdat")), "Open", []);
      {
        const $t84 = (await $.wv([$t83], "P_interval", C, false));
        await $.mset((await $.wv([$t83, $t84], "StartDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t83, $t84], "CO_Datamod", C, false)), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
        await $.mset((await $.wv([$t83, $t84], "EndDateEdit", C, false)), "DateTime", (await $.mv((await $.wv([$t83, $t84], "StartDateEdit", C, false)), "DateTime")));
        if ($.truthy($.eq((await $.wv([$t83, $t84], "Showmodal", C, false)), (await $.wv([$t83, $t84], "mrOK", C, false))))) {
          await $.wset([$t83, $t84], "AStartDate", (await $.mv((await $.wv([$t83, $t84], "StartDateEdit", C, false)), "DateTime")), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
          await $.wset([$t83, $t84], "AEndDate", (await $.mv((await $.wv([$t83, $t84], "EndDateEdit", C, false)), "DateTime")), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
          {
            const $t85 = (await $.wv([$t83, $t84], "FormAccTransaction", C, false));
            await $.stmt((await $.wcall([$t83, $t84, $t85], "OpenDataControls", [(await $.wv([$t83, $t84, $t85], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false)), (await $.wv([$t83, $t84, $t85], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false))], C)));
            await $.stmt($.wcall([$t83, $t84, $t85], "Showmodal", [], C));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N16Click", async function N16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_AccSettings", (await $.mcall((await $.v(C, "TCO_AccSettings")), "Create", [Self])));
  await $.mcall((await $.v(C, "CO_AccSettings")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "TransDebitClick", async function TransDebitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RichEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["TipAcc"])), "AsString")));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir hesab qeyd olunmayıb"])));
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["D", 0, (await $.call(C, "Length", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])), []])), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesaba Debet həbsi qoyulub"])));
      return L0.result;
    } else {
      if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "co_Transactions"))]))))) {
        await $.set(C, "co_Transactions", (await $.mcall((await $.v(C, "TCO_Transactions")), "Create", [Self])));
      }
      {
        const $t86 = (await $.v(C, "co_Transactions"));
        await $.wset([$t86], "TransTypeIncOutDC", 3, C);
        await $.stmt($.wcall([$t86], "Showmodal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DeleteTransaction", async function DeleteTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["transactionid"]);
  {
    const $t87 = (await $.mv((await $.v(C, "CO_Datamod")), "SBTransaction"));
    await $.stmt((await $.wcall([$t87], "CallProcedure", [(await $.wv([$t87], "cs_del_transaction", C, false)), ["TransactionID", (await $.wv([$t87], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TCO_Main", "N18Click", async function N18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0, "qaccid": 0, "qtrid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["Transaction", "delete"]])));
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  {
    const $t88 = (await $.v(C, "DBGridTransactions"));
    const $t89 = (await $.wv([$t88], "SelectedRows", C, false));
    const $t90 = (await $.mv((await $.wv([$t88, $t89], "DataSource", C, false)), "DataSet"));
    const $t91 = (await $.wv([$t88, $t89, $t90], "CO_Datamod", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t88, $t89, $t90, $t91], "Count", C, false)), 0))) {
        await $.wset([$t88, $t89, $t90, $t91], "CurrentRowSelected", (await $.wv([$t88, $t89, $t90, $t91], "True", C, false)), C);
      }
      { const $t92 = $.sub((await $.wv([$t88, $t89, $t90, $t91], "Count", C, false)), 1);
        await $.wset([$t88, $t89, $t90, $t91], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t93 = true;
        for (;;) {
          if (!$t93) { await $.wset([$t88, $t89, $t90, $t91], "Index", $.succ((await $.wv([$t88, $t89, $t90, $t91], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t93 = false;
          if (!($.ord((await $.wv([$t88, $t89, $t90, $t91], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t92))) break;
          await $.stmt((await $.wcall([$t88, $t89, $t90, $t91], "GotoBookmark", [(await $.wcall([$t88, $t89, $t90, $t91], "Pointer", [(await $.idx((await $.wv([$t88, $t89, $t90, $t91], "Items", C, false)), [(await $.wv([$t88, $t89, $t90, $t91], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t88, $t89, $t90, $t91], "TransactionID", (await $.mv((await $.wcall([$t88, $t89, $t90, $t91], "FieldByName", ["ID"], C)), "AsInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t88, $t89, $t90, $t91], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t94 = (await $.wcall([$t88, $t89, $t90, $t91], "MessageDlg", [(await $.wcall([$t88, $t89, $t90, $t91], "Format", ["Əməliyyat #%d ləğv edilsin?", [(await $.wv([$t88, $t89, $t90, $t91], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t88, $t89, $t90, $t91], "mtConfirmation", C, false)), [(await $.wv([$t88, $t89, $t90, $t91], "mbYes", C, false)), (await $.wv([$t88, $t89, $t90, $t91], "mbNo", C, false)), (await $.wv([$t88, $t89, $t90, $t91], "mbCancel", C, false)), (await $.wv([$t88, $t89, $t90, $t91], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t94, (await $.wv([$t88, $t89, $t90, $t91], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t94, (await $.wv([$t88, $t89, $t90, $t91], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t94, (await $.wv([$t88, $t89, $t90, $t91], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t88, $t89, $t90, $t91], "MessageDlg", [(await $.wcall([$t88, $t89, $t90, $t91], "Format", ["%d sayda əməliyyat ləğv edilsin?", [$.sub((await $.wv([$t88, $t89, $t90, $t91], "Count", C, false)), (await $.wv([$t88, $t89, $t90, $t91], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t88, $t89, $t90, $t91], "mtConfirmation", C, false)), [(await $.wv([$t88, $t89, $t90, $t91], "mbYes", C, false)), (await $.wv([$t88, $t89, $t90, $t91], "mbCancel", C, false))], 0], C)), (await $.wv([$t88, $t89, $t90, $t91], "mrYes", C, false))))) {
                  await $.wset([$t88, $t89, $t90, $t91], "WaitNextConfirm", (await $.wv([$t88, $t89, $t90, $t91], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t88, $t89, $t90, $t91], "Application", C, false)), "ProcessMessages", []);
          {
            const $t95 = (await $.wv([$t88, $t89, $t90, $t91], "ODS_VidOPTrDel", C, false));
            await $.stmt($.wcall([$t88, $t89, $t90, $t91, $t95], "Close", [], C));
            await $.stmt((await $.wcall([$t88, $t89, $t90, $t91, $t95], "SetVariable", ["v_ID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t88, $t89, $t90, $t91, $t95], "DBGridTransactions", C, false)), "DataSource")), "DataSet")), "FieldByName", ["OperationCode"])), "AsInteger"))], C)));
            await $.stmt($.wcall([$t88, $t89, $t90, $t91, $t95], "Open", [], C));
          }
          if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t88, $t89, $t90, $t91], "ODS_VidOPTrDel", C, false)), "FieldByName", ["Cnt"])), "AsInteger")), 1))) {
            await $.stmt((await $.wcall([$t88, $t89, $t90, $t91], "ShowMessage", ["Bu tip əməliyyatı bu moduldan ləğv etmək olmaz"], C)));
            continue;
          }
          if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t88, $t89, $t90, $t91], "DBGridTransactions", C, false)), "SelectedRows")), "Count")), 1))) {
            try {
              await $.stmt((await $.wcall([$t88, $t89, $t90, $t91], "DeleteTransaction", [(await $.wv([$t88, $t89, $t90, $t91], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
            } catch ($t96) {
              $.rethrowControl($t96);
              $.handled($t96);
            }
          } else {
            await $.stmt((await $.wcall([$t88, $t89, $t90, $t91], "DeleteTransaction", [(await $.wv([$t88, $t89, $t90, $t91], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
          }
          await $.wset([$t88, $t89, $t90, $t91], "WillRefresh", (await $.wv([$t88, $t89, $t90, $t91], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.stmt($.wcall([$t88, $t89, $t90, $t91], "SBCommit", [], C));
          await $.wset([$t88, $t89, $t90, $t91], "TransactionState", (await $.wv([$t88, $t89, $t90, $t91], "tsDelete", C, false)), C);
          await $.tick();
        }
      }
    } finally {
    }
  }
  L0["qtrid"] = (await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "TransactionsID")), "AsInteger"));
  L0["qaccid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["ID"])), "AsInteger"));
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "Open", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "Locate", ["ID", L0["qtrid"], []])));
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "Open", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "Locate", ["ID", L0["qaccid"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "AddExecute", async function AddExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FrmCustProps"))]))))) {
    await $.set(C, "FrmCustProps", (await $.mcall((await $.v(C, "TFrmCustProps")), "Create", [Self])));
  }
  if ($.truthy((await $.mv((await $.v(C, "FrmCustProps")), "New")))) {
    await $.mcall((await $.v(C, "Refresh")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "RefreshExecute", async function RefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "savedpos": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t97 = (await $.mv((await $.v(C, "CO_Datamod")), "Customers"));
    await $.wset([$t97], "SavedPos", (await $.wv([$t97], "RecNo", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
    await $.stmt($.wcall([$t97], "Close", [], C));
    await $.stmt($.wcall([$t97], "Open", [], C));
    if ($.truthy($.gt((await $.wv([$t97], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false)), (await $.wv([$t97], "RecordCount", C, false))))) {
      await $.wset([$t97], "RecNo", (await $.wv([$t97], "RecordCount", C, false)), C);
    } else {
      await $.wset([$t97], "RecNo", (await $.wv([$t97], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N19Click", async function N19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FrmCustProps"))]))))) {
    await $.set(C, "FrmCustProps", (await $.mcall((await $.v(C, "TFrmCustProps")), "Create", [Self])));
  }
  await $.stmt((await $.mcall((await $.v(C, "FrmCustProps")), "Edit", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "CustData")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.v(C, "Refresh")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N20Click", async function N20Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Müştərinin açıq hesabları var", (await $.v(C, "mtError")), [(await $.v(C, "mbOk"))], 0])));
  } else {
    if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Müştəri qeydiyyatdan çıxarılsın?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
      await $.stmt((await $.call(C, "Sb_CloseCustomer", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "CustData")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.v(C, "Refresh")), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DateEditKeyUp", async function DateEditKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_return"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Customers")), "Locate", ["OPEN_DAT", (await $.call(C, "variant", [(await $.mv((L0["sender"]), "Text"))])), []])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_Main", "EditNameKeyPress", async function EditNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "EditNAME1")), "Text", (await $.mv((await $.v(C, "EditName")), "Text")));
    {
      const $t98 = (await $.v(C, "EditNAME1"));
      await $.wset([$t98], "Text", (await $.wcall([$t98], "StringReplace", [(await $.wv([$t98], "Text", C, false)), "i", "`", [(await $.wv([$t98], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t98], "Text", (await $.wcall([$t98], "StringReplace", [(await $.wv([$t98], "Text", C, false)), "I", "`", [(await $.wv([$t98], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t98], "Text", (await $.wcall([$t98], "StringReplace", [(await $.wv([$t98], "Text", C, false)), "İ", "`", [(await $.wv([$t98], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t98], "Text", (await $.wcall([$t98], "StringReplace", [(await $.wv([$t98], "Text", C, false)), "I", "`", [(await $.wv([$t98], "rfReplaceAll", C, false))]], C)), C);
      await $.wset([$t98], "Text", (await $.wcall([$t98], "StringReplace", [(await $.wv([$t98], "Text", C, false)), "ı", "`", [(await $.wv([$t98], "rfReplaceAll", C, false))]], C)), C);
    }
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [(await $.v(C, "EditNAME1"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Main", "EditNameKeyUp", async function EditNameKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_Main", "EditINNKeyPress", async function EditINNKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Main", "EditINNKeyUp", async function EditINNKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_Main", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Main", "EditIDKeyUp", async function EditIDKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_Main", "DBGridCustomersDblClick", async function DBGridCustomersDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "N19Click", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DBGridCustomersKeyUp", async function DBGridCustomersKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_return"))))) {
    await $.stmt((await $.call(C, "DBGridCustomersCellClick", [(await $.idx((await $.mv((await $.v(C, "DBGridCustomers")), "columns")), [0]))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_Main", "DBGridAccountsKeyUp", async function DBGridAccountsKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_return"))))) {
    await $.stmt((await $.call(C, "DBGridAccountsCellClick", [(await $.idx((await $.mv((await $.v(C, "DBGridAccounts")), "columns")), [0]))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_Main", "TransCreditClick", async function TransCreditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RichEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "FieldByName", ["TipAcc"])), "AsString")));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir hesab qeyd olunmayıb"])));
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["C", 0, (await $.call(C, "Length", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])), []])), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesaba Kredit həbsi qoyulub"])));
      return L0.result;
    } else {
      if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "co_Transactions"))]))))) {
        await $.set(C, "co_Transactions", (await $.mcall((await $.v(C, "TCO_Transactions")), "Create", [Self])));
      }
      {
        const $t99 = (await $.v(C, "co_Transactions"));
        const $t100 = (await $.wv([$t99], "CO_Datamod", C, false));
        await $.wset([$t99, $t100], "TransTypeIncOutDC", 4, C);
        await $.stmt($.wcall([$t99, $t100], "Showmodal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DBGridAccountsDblClick", async function DBGridAccountsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmAccInfo", (await $.mcall((await $.v(C, "TfrmAccInfo")), "Create", [Self])));
  {
    const $t101 = (await $.v(C, "frmAccInfo"));
    const $t102 = (await $.wv([$t101], "CO_Datamod", C, false));
    await $.wset([$t101, $t102], "AccountID", (await $.mv((await $.mcall((await $.wv([$t101, $t102], "Account", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.stmt($.wcall([$t101, $t102], "ShowAccInfo", [], C));
    await $.stmt($.wcall([$t101, $t102], "Showmodal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DBGridTransactionsDblClick", async function DBGridTransactionsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmTrView", (await $.mcall((await $.v(C, "TfrmTrView")), "Create", [Self])));
  {
    const $t103 = (await $.v(C, "frmTrView"));
    const $t104 = (await $.wv([$t103], "CO_Datamod", C, false));
    await $.wset([$t103, $t104], "TrID", (await $.mv((await $.mcall((await $.wv([$t103, $t104], "Transactions", C, false)), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.stmt($.wcall([$t103, $t104], "ShowTrInfo", [], C));
    await $.stmt($.wcall([$t103, $t104], "Showmodal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "PopupMenuTransactionsPopup", async function PopupMenuTransactionsPopup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASH")), "Open", []);
  await $.mset((await $.v(C, "N6")), "Enabled", (await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["DEBITBALCN"])), "AsString")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASH")), "FieldByName", ["CASHBALANCENATIONAL"])), "AsInteger"))])))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["DEBITBALCN"])), "AsString")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASH")), "FieldByName", ["CASHBALANCEENGLISH"])), "AsInteger"))])))))));
  await $.mset((await $.v(C, "N21")), "Enabled", (await $.or_(((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["DEBITBALCN"])), "AsString")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASH")), "FieldByName", ["CASHBALANCENATIONAL"])), "AsInteger"))])))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["DEBITBALCN"])), "AsString")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASH")), "FieldByName", ["CASHBALANCEENGLISH"])), "AsInteger"))]))))))), async () => ((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["CREDITBALCN"])), "AsString")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASH")), "FieldByName", ["CASHBALANCENATIONAL"])), "AsInteger"))])))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["CREDITBALCN"])), "AsString")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASH")), "FieldByName", ["CASHBALANCEENGLISH"])), "AsInteger"))]))))))))));
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSCASH")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "Qeyid1Click", async function Qeyid1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "note_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["id"])), "Asstring")));
  await $.stmt((await $.call(C, "LoadPlugin3", ["Sb_General.bpl", "note", (await $.v(C, "note_id")), ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "ComplexTrDClick", async function ComplexTrDClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir hesab qeyd olunmayıb"])));
    return L0.result;
  } else {
    await $.set(C, "FormBProc", (await $.mcall((await $.v(C, "TFormBProc")), "Create", [Self])));
    await $.mcall((await $.v(C, "FormBProc")), "Showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N21Click", async function N21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "transactionid": '', "saveplace": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "Open", []);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QRep_Order"))]))))) {
    await $.set(C, "QRep_Order", (await $.mcall((await $.v(C, "TQRep_Order")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QuickRep_Order"))]))))) {
    await $.set(C, "QuickRep_Order", (await $.mcall((await $.v(C, "TQuickRep_Order")), "Create", [Self])));
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["HANDOVER"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape6")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel5")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape37")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel47")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape23")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel23")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["HANDOVER"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape6")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel5")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape37")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel47")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape23")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel23")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Chief"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape2")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel48")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape38")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel10")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape24")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel28")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Chief"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape2")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel48")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape38")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel10")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape24")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel28")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Operator"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape40")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel49")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape25")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel31")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape4")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel11")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Operator"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape40")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel49")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape25")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel31")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape4")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel11")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Cashier"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape41")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel50")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape26")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel32")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape5")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel12")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Cashier"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape41")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel50")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape26")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel32")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape5")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel12")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Controller"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape82")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel83")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape84")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel85")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape86")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel87")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Controller"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape82")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel83")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape84")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel85")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRShape86")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QRep_Order")), "QRLabel87")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Amount"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape3")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel11")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape29")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel47")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape18")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel12")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["Amount"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape3")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel11")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape29")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel47")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape18")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel12")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["chief_out"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape19")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel14")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape32")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel9")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape33")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel39")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["chief_out"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape19")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel14")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape32")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel9")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape33")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel39")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["accountant"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape31")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel16")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape30")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel40")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape20")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel10")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["accountant"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape31")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel16")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape30")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel40")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape20")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel10")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["operator_out"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape35")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel50")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape34")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel42")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape5")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel4")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["operator_out"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape35")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel50")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape34")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel42")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape5")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel4")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["cashier_out"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape21")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel46")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape14")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel3")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape13")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel52")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["cashier_out"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape21")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel46")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape14")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel3")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape13")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel52")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["controller_out"])), "AsString"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape91")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel90")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape93")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel92")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape95")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel94")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "FieldByName", ["controller_out"])), "AsString"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape91")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel90")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape93")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel92")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRShape95")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickRep_Order")), "QRLabel94")), "Enabled", false);
  }
  try {
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSLogo")), "Open", []);
    {
      const $t105 = (await $.mv((await $.v(C, "CO_Datamod")), "Transactions"));
      await $.wset([$t105], "TransactionID", (await $.mv((await $.wcall([$t105], "FieldByName", ["ID"], C)), "AsString")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.wset([$t105], "Filter", $.add(" ID=", (await $.wv([$t105], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))), C);
      await $.wset([$t105], "Filtered", (await $.wv([$t105], "True", C, false)), C);
      if ($.truthy((await $.wcall([$t105], "IOCheck", [(await $.mv((await $.wcall([$t105], "FieldByName", ["debitbalance"], C)), "AsInteger"))], C)))) {
        await $.stmt((await $.wcall([$t105], "CreateOrderRpt", [(await $.wv([$t105], "False", C, false)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t105], "CO_Datamod", C, false)), "Customers")), "FieldByName", ["ID"])), "AsInteger"))], C)));
      } else {
        await $.stmt((await $.wcall([$t105], "CreateOrderRpt", [(await $.wv([$t105], "True", C, false)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t105], "CO_Datamod", C, false)), "Customers")), "FieldByName", ["ID"])), "AsInteger"))], C)));
      }
    }
  } finally {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "GotoBookmark", [(await $.call(C, "Pointer", [L0["saveplace"]]))])));
    await $.mset((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "Filtered", false);
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ODSLogo")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Settings")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "IOCheck", async function IOCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"reference": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["reference"]);
  {
    const $t106 = (await $.mv((await $.v(C, "CO_Datamod")), "OPCash"));
    await $.wset([$t106], "Result", (await $.wcall([$t106], "CallBooleanFunction", ["CheckOICome", [(await $.wv([$t106], "Reference", { get: async () => L0["reference"], set: async (v) => { L0["reference"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Reference"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TCO_Main", "GetBankInfo", async function GetBankInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"bankname": $.asRef(p0), "bankinn": $.asRef(p1), result: undefined};
  {
    const $t107 = (await $.mv((await $.v(C, "CO_Datamod")), "OPCash"));
    await $.stmt((await $.wcall([$t107], "CallProcedure", ["GetBankInfo", [(await $.wv([$t107], "BankName", { get: async () => await L0["bankname"].get(), set: async (v) => { await L0["bankname"].set(v); }, local: true }, false)), (await $.wv([$t107], "BankInn", { get: async () => await L0["bankinn"].get(), set: async (v) => { await L0["bankinn"].set(v); }, local: true }, false))]], C)));
    await $.wset([$t107], "BankName", (await $.wcall([$t107], "GetParameter", [0], C)), { get: async () => await L0["bankname"].get(), set: async (v) => { await L0["bankname"].set(v); }, local: true });
    await $.wset([$t107], "BankInn", (await $.wcall([$t107], "GetParameter", [1], C)), { get: async () => await L0["bankinn"].get(), set: async (v) => { await L0["bankinn"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["BankName", "BankInn"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TCO_Main", "CreateOrderRpt", async function CreateOrderRpt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"iocome": $.copyArg(p0), "custid": $.copyArg(p1), result: undefined, "bankname": '', "bankinn": '', "custname": '', "custinn": '', "v": null, "withmanat": '', "withcoin": '', "manatposition": 0, "i": 0, "valutename": '', "nomanat": ''};
  await $.fixArgs(L0, ["iocome", "custid"]);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "dscashinfo")), "CloseAll", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "dscashinfo")), "SetVariable", [":id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "dscashinfo")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "dscashinfo")), "Refresh", []);
  L0["v"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["TRANSACTIONDATE"])), "AsDateTime"))]))]));
  L0["nomanat"] = "";
  await $.stmt((await $.call(C, "GetBankInfo", [$.ref(async () => L0["bankname"], async ($t108) => { L0["bankname"] = $t108; }), $.ref(async () => L0["bankinn"], async ($t109) => { L0["bankinn"] = $t109; })])));
  await $.stmt((await $.call(C, "GetCustomerInfo", [L0["custid"], $.ref(async () => L0["custname"], async ($t110) => { L0["custname"] = $t110; }), $.ref(async () => L0["custinn"], async ($t111) => { L0["custinn"] = $t111; })])));
  if ($.truthy($.not(L0["iocome"]))) {
    L0["withmanat"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["creditamount"])), "AsFloat"))])), 0, [0]]));
  } else {
    L0["withmanat"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "Trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Transactions")), "FieldByName", ["debitamount"])), "AsFloat"))])), 0, [0]]));
  }
  L0["manatposition"] = (await $.call(C, "POS", ["manat", L0["withmanat"]]));
  if ($.truthy($.gt(L0["manatposition"], 0))) {
    { const $t112 = $.sub(L0["manatposition"], 1);
      L0["i"] = 1;
      let $t113 = true;
      for (;;) {
        if (!$t113) { L0["i"] = $.succ(L0["i"], 1); }
        $t113 = false;
        if (!($.ord(L0["i"]) <= $.ord($t112))) break;
        L0["nomanat"] = $.add($.add(L0["nomanat"], ""), (await $.idx(L0["withmanat"], [L0["i"]])));
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq(L0["nomanat"], (await $.v(C, "EmptyStr"))))) {
    L0["nomanat"] = "0 ";
  }
  {
    const $t114 = (await $.v(C, "CO_Datamod"));
    await $.mcall((await $.wv([$t114], "ODSValuteName", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t114], "ODSValuteName", C, false)), "SetVariable", ["valute", (await $.mv((await $.mcall((await $.wv([$t114], "Transactions", C, false)), "FieldByName", ["DEBITCURRENCYID"])), "Value"))])));
    await $.mcall((await $.wv([$t114], "ODSValuteName", C, false)), "Open", []);
    await $.wset([$t114], "WithCoin", (await $.wcall([$t114], "CurrToStr", [(await $.wcall([$t114], "Frac", [(await $.wcall([$t114], "StrToFloat", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t114], "CO_Datamod", C, false)), "Transactions")), "FieldByName", ["DEBITAMOUNT"])), "AsString"))], C))], C))], C)), { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true });
    if ($.truthy($.ne((await $.wv([$t114], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false)), "0"))) {
      await $.stmt((await $.wcall([$t114], "Delete", [$.ref(async () => (await $.wv([$t114], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false)), async ($t115) => { await $.wset([$t114], "WithCoin", $t115, { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }); }), 1, 2], C)));
      if ($.truthy($.lt((await $.wcall([$t114], "Length", [(await $.wv([$t114], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false))], C)), 2))) {
        await $.wset([$t114], "WithCoin", $.add((await $.wv([$t114], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false)), "0"), { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true });
      } else {
        if ($.truthy($.gt((await $.wcall([$t114], "Length", [(await $.wv([$t114], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false))], C)), 2))) {
          await $.stmt((await $.wcall([$t114], "Delete", [$.ref(async () => (await $.wv([$t114], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false)), async ($t116) => { await $.wset([$t114], "WithCoin", $t116, { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }); }), 3, (await $.wcall([$t114], "Length", [(await $.wv([$t114], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false))], C))], C)));
        }
      }
      await $.wset([$t114], "ValuteName", ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t114], "ODSValuteName", C, false)), "FieldByName", ["Valu_name"])), "AsString")), " "), (await $.wv([$t114], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false))), " "), (await $.mv((await $.mcall((await $.wv([$t114], "ODSValuteName", C, false)), "FieldByName", ["valu_bala"])), "AsString")))), { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true });
    } else {
      await $.wset([$t114], "ValuteName", ((await $.mv((await $.mcall((await $.wv([$t114], "ODSValuteName", C, false)), "FieldByName", ["Valu_name"])), "AsString"))), { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true });
    }
  }
  if ($.truthy($.not(L0["iocome"]))) {
    {
      const $t117 = (await $.v(C, "QRep_Order"));
      await $.mcall((await $.mv((await $.wv([$t117], "CO_Datamod", C, false)), "ODSCASHINFO")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t117], "CO_Datamod", C, false)), "ODSCASHINFO")), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t117], "CO_Datamod", C, false)), "Transactions")), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.wv([$t117], "CO_Datamod", C, false)), "ODSCASHINFO")), "Open", []);
      await $.mcall((await $.mv((await $.wv([$t117], "CO_Datamod", C, false)), "Transactions")), "Refresh", []);
      await $.mset((await $.wv([$t117], "QRLBankName", C, false)), "Caption", (await $.wv([$t117], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t117], "QRLBankName1", C, false)), "Caption", (await $.wv([$t117], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t117], "QRLBankName2", C, false)), "Caption", (await $.wv([$t117], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t117], "QRLBankInn", C, false)), "Caption", (await $.wv([$t117], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t117], "QRLBankInn1", C, false)), "Caption", (await $.wv([$t117], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t117], "QRLBankInn2", C, false)), "Caption", (await $.wv([$t117], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t117], "QRInn", C, false)), "Caption", (await $.wv([$t117], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t117], "QRInn1", C, false)), "Caption", (await $.wv([$t117], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t117], "QRInn2", C, false)), "Caption", (await $.wv([$t117], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t117], "QRLAmount", C, false)), "Caption", $.add($.add((await $.wv([$t117], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t117], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t117], "QRLAmount1", C, false)), "Caption", $.add($.add((await $.wv([$t117], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t117], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t117], "QRLAmount2", C, false)), "Caption", $.add($.add((await $.wv([$t117], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t117], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.stmt($.wcall([$t117], "Preview", [], C));
    }
  } else {
    {
      const $t118 = (await $.v(C, "QuickRep_Order"));
      await $.mcall((await $.mv((await $.wv([$t118], "CO_Datamod", C, false)), "ODSCASHINFO")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t118], "CO_Datamod", C, false)), "ODSCASHINFO")), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t118], "CO_Datamod", C, false)), "Transactions")), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.wv([$t118], "CO_Datamod", C, false)), "ODSCASHINFO")), "Open", []);
      await $.mcall((await $.mv((await $.wv([$t118], "CO_Datamod", C, false)), "Transactions")), "Refresh", []);
      await $.mset((await $.wv([$t118], "QRLBankInn", C, false)), "Caption", (await $.wv([$t118], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t118], "QRLBankInn1", C, false)), "Caption", (await $.wv([$t118], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t118], "QRLBankInn2", C, false)), "Caption", (await $.wv([$t118], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t118], "QRLBankName", C, false)), "Caption", (await $.wv([$t118], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t118], "QRLBankName1", C, false)), "Caption", (await $.wv([$t118], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t118], "QRLBankName2", C, false)), "Caption", (await $.wv([$t118], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t118], "QRInn1", C, false)), "Caption", (await $.wv([$t118], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t118], "QRInn2", C, false)), "Caption", (await $.wv([$t118], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t118], "QRInn3", C, false)), "Caption", (await $.wv([$t118], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t118], "QRLAmmount", C, false)), "Caption", $.add($.add((await $.wv([$t118], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t118], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t118], "QRLAmmount1", C, false)), "Caption", $.add($.add((await $.wv([$t118], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t118], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t118], "QRLAmmount2", C, false)), "Caption", $.add($.add((await $.wv([$t118], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t118], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.stmt($.wcall([$t118], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": ["IOCome", "CustID"], "kind": "procedure", "ptypes": ["Boolean", "Longint"]});
  U.method("TCO_Main", "N23Click", async function N23Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CO_Datamod")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir hesab qeyd olunmayıb"])));
    return L0.result;
  } else {
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "CustomerInfoDataSet")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "CustomerInfoDataSet")), "SetVariable", ["ContractID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridAccounts")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "CustomerInfoDataSet")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Templates")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Templates")), "Open", []);
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CO_frmWReport"))]))))) {
      await $.set(C, "CO_frmWReport", (await $.mcall((await $.v(C, "TCO_frmWReport")), "Create", [Self])));
    }
    await $.mcall((await $.mv((await $.v(C, "CO_frmWReportImpl")), "CO_frmWReport")), "Showmodal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "N22Click", async function N22Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Templates")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Bookmarks")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Fields")), "Open", []);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CO_BookmarkSetup"))]))))) {
    await $.set(C, "CO_BookmarkSetup", (await $.mcall((await $.v(C, "TCO_BookmarkSetup")), "Create", [Self])));
  }
  await $.mcall((await $.mv((await $.v(C, "BookmarkSetup")), "CO_BookmarkSetup")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Main", "DBGridCustomersTitleClick", async function DBGridCustomersTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t119 = (await $.mv((await $.v(C, "CO_Datamod")), "Customers"));
    await $.stmt((await $.wcall([$t119], "SetVariable", ["Title", (await $.mv((await $.wv([$t119], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName"))], C)));
    await $.stmt($.wcall([$t119], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCO_Main", "N1Click", async function N1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormOrderInfo"))]))))) {
    await $.set(C, "FormOrderInfo", (await $.mcall((await $.v(C, "TFormOrderInfo")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormOrderInfo")), "Showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
