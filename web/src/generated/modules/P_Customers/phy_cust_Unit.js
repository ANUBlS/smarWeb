// Generated from phy_cust_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("phy_cust_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "ActiveX", "AxCtrls", "P_Customers_TLB", "StdVcl", "ActnList", "Oracle", "Oracledata", "ImgList", "Menus", "Mask", "DBCtrls", "StdCtrls", "ExtCtrls", "Grids", "DBGrids", "ToolWin", "ComCtrls", "Variants", "OleServer", "ExcelXP", "ComObj", "ComServ", "SBCore", "P_CO_Cust", "P_Datamod_Unit", "sboapiDataModuleImpl", "P_CO_Account_Unit", "p_CO_Statement_Unit", "P_CO_ST_Unit", "P_CO_Memorial_Unit", "CurrencyToHR_Azeri_Impl", "P_CO_Interval", "P_CO_Cust_Settings", "P_Inform_Unit", "P_OutForm_Unit", "P_CO_Out_Unit", "P_CO_In_Form", "P_Upd_Cust_Form", "P_CO_Report_Unit", "P_AccSettings_Unit", "P_AccState_Unit", "P_AccTransaction_Unit", "P_Interval", "P_Transaction_Unit", "uAccViewFormImpl", "uTrViewFormImpl", "P_QREP_ORDER", "P_QREPORT_ORDER", "Ph_CO_BookmarkSetupUnit", "Ph_CO_BookmarkAddEditUnit", "Ph_CO_TemplAddEditUnit", "P_CO_frmWReportUnit", "SBTranslateProc", "p_UnitOrderInfo", "p_ImzaNumReport", "Unit9Form_other", "UnitFormcust_other_change", "PEPUnit9"]);
  const C = [U];
  U.enumType("toperationmode", 3);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omCommission", 2);
  U.enumType("ttransactionstate", 3);
  U.const("tsCommit", 0);
  U.const("tsDelete", 1);
  U.const("tsReject", 2);
  U.defClass("TP_Customers_Form", "TActiveForm", {"customergb": {"name": "CustomerGB", "type": "TGroupBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "customersearchbar": {"name": "CustomerSearchBar", "type": "TToolBar"}, "editid": {"name": "EditID", "type": "TEdit"}, "editpassp_number": {"name": "EditPassp_number", "type": "TEdit"}, "editcust_name": {"name": "EditCUST_NAME", "type": "TEdit"}, "dateedit": {"name": "DateEdit", "type": "TMaskEdit"}, "dbgridcustomers": {"name": "DBGridCustomers", "type": "TDBGrid"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbgridaccounts": {"name": "DBGridAccounts", "type": "TDBGrid"}, "controlbar2": {"name": "ControlBar2", "type": "TControlBar"}, "accountviewsettingspanel": {"name": "AccountViewSettingsPanel", "type": "TPanel"}, "accountsorderpanel": {"name": "AccountsOrderPanel", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "searchacc": {"name": "SearchAcc", "type": "TEdit"}, "accountcurrencypanel": {"name": "AccountCurrencyPanel", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "searchedit": {"name": "SearchEdit", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbgridtransactions": {"name": "DBGridTransactions", "type": "TDBGrid"}, "popmenuaccounts": {"name": "PopMenuAccounts", "type": "TPopupMenu"}, "n3": {"name": "N3", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "n7": {"name": "N7", "type": "TMenuItem"}, "transincoming": {"name": "TransIncoming", "type": "TMenuItem"}, "transoutgoing": {"name": "TransOutgoing", "type": "TMenuItem"}, "n10": {"name": "N10", "type": "TMenuItem"}, "n11": {"name": "N11", "type": "TMenuItem"}, "popmenutransactions": {"name": "PopMenuTransactions", "type": "TPopupMenu"}, "n5": {"name": "N5", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "n8": {"name": "N8", "type": "TMenuItem"}, "d1": {"name": "D1", "type": "TMenuItem"}, "actionlist": {"name": "ActionList", "type": "TActionList"}, "actionrefresh": {"name": "ActionRefresh", "type": "TAction"}, "actioninsert": {"name": "ActionInsert", "type": "TAction"}, "actionedit": {"name": "ActionEdit", "type": "TAction"}, "actiondelete": {"name": "ActionDelete", "type": "TAction"}, "actionshowfilter": {"name": "ActionShowFilter", "type": "TAction"}, "actionspeedsearch": {"name": "ActionSpeedSearch", "type": "TAction"}, "actionselectall": {"name": "ActionSelectAll", "type": "TAction"}, "actioncommit": {"name": "ActionCommit", "type": "TAction"}, "actionloadfilters": {"name": "ActionLoadFilters", "type": "TAction"}, "actionfilter": {"name": "ActionFilter", "type": "TAction"}, "actionstepcommit": {"name": "ActionStepCommit", "type": "TAction"}, "actionreject": {"name": "ActionReject", "type": "TAction"}, "actioncommission": {"name": "ActionCommission", "type": "TAction"}, "popmenucustomers": {"name": "PopMenuCustomers", "type": "TPopupMenu"}, "pm_custadd": {"name": "PM_CustAdd", "type": "TMenuItem"}, "editserial": {"name": "EditSerial", "type": "TEdit"}, "pm_custrefresh": {"name": "PM_CustRefresh", "type": "TMenuItem"}, "pm_custclose": {"name": "PM_CustClose", "type": "TMenuItem"}, "pm_custedit": {"name": "PM_CustEdit", "type": "TMenuItem"}, "n18": {"name": "N18", "type": "TMenuItem"}, "n19": {"name": "N19", "type": "TMenuItem"}, "n20": {"name": "N20", "type": "TMenuItem"}, "n21": {"name": "N21", "type": "TMenuItem"}, "n12": {"name": "N12", "type": "TMenuItem"}, "transdebit": {"name": "TransDebit", "type": "TMenuItem"}, "n17": {"name": "N17", "type": "TMenuItem"}, "transcredit": {"name": "TransCredit", "type": "TMenuItem"}, "n23": {"name": "N23", "type": "TMenuItem"}, "richedit1": {"name": "RichEdit1", "type": "TRichEdit"}, "n24": {"name": "N24", "type": "TMenuItem"}, "n25": {"name": "N25", "type": "TMenuItem"}, "editinn": {"name": "EditINN", "type": "TEdit"}, "ordernfo1": {"name": "Ordernfo1", "type": "TMenuItem"}, "mzanmumsininap1": {"name": "mzanmumsininap1", "type": "TMenuItem"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "editname1": {"name": "EditNAME1", "type": "TEdit"}, "mazanmunsiniexcelat1": {"name": "mazanmunsiniexcelat1", "type": "TMenuItem"}, "dscustomer_info1": {"name": "DSCustomer_Info1", "type": "TOracleDataSet"}, "dscustomer_info1name": {"name": "DSCustomer_Info1NAME", "type": "TWideStringField"}, "dscustomer_info1id": {"name": "DSCustomer_Info1ID", "type": "TIntegerField"}, "dscustomer_info1idcust": {"name": "DSCustomer_Info1IDCUST", "type": "TFloatField"}, "dscustomer_info1pasport": {"name": "DSCustomer_Info1PASPORT", "type": "TWideStringField"}, "dscustomer_info1phone_h": {"name": "DSCustomer_Info1PHONE_H", "type": "TWideStringField"}, "dscustomer_info1phone_m": {"name": "DSCustomer_Info1PHONE_M", "type": "TWideStringField"}, "dscustomer_info1address": {"name": "DSCustomer_Info1ADDRESS", "type": "TWideStringField"}, "dscustomer_info1paspplace": {"name": "DSCustomer_Info1PASPPLACE", "type": "TWideStringField"}, "dscustomer_info1paspdate": {"name": "DSCustomer_Info1PASPDATE", "type": "TDateTimeField"}, "dscustomer_info1acc_no": {"name": "DSCustomer_Info1ACC_NO", "type": "TWideStringField"}, "dscustomer_info1inn": {"name": "DSCustomer_Info1INN", "type": "TWideStringField"}, "excelapplication1": {"name": "ExcelApplication1", "type": "TExcelApplication"}, "bankinfo1": {"name": "Bankinfo1", "type": "TOracleDataSet"}, "bankinfo1tarix": {"name": "Bankinfo1TARIX", "type": "TWideStringField"}, "bankinfo1tam_adress": {"name": "Bankinfo1TAM_ADRESS", "type": "TWideStringField"}, "bankinfo1kod_b": {"name": "Bankinfo1KOD_B", "type": "TFloatField"}, "bankinfo1bank": {"name": "Bankinfo1BANK", "type": "TWideStringField"}, "bankinfo1az_name": {"name": "Bankinfo1AZ_NAME", "type": "TWideStringField"}, "bankinfo1krno": {"name": "Bankinfo1KRNO", "type": "TWideStringField"}, "bankinfo1inn": {"name": "Bankinfo1INN", "type": "TWideStringField"}, "bankinfo1seher": {"name": "Bankinfo1SEHER", "type": "TWideStringField"}, "bankinfo1adress": {"name": "Bankinfo1ADRESS", "type": "TWideStringField"}, "bankinfo1sedr": {"name": "Bankinfo1SEDR", "type": "TWideStringField"}, "bankinfo1buhaltr": {"name": "Bankinfo1BUHALTR", "type": "TWideStringField"}, "bankinfo1tel": {"name": "Bankinfo1TEL", "type": "TWideStringField"}, "bankinfo1fax": {"name": "Bankinfo1FAX", "type": "TWideStringField"}, "bankinfo1swift": {"name": "Bankinfo1SWIFT", "type": "TWideStringField"}, "bankinfo1telex": {"name": "Bankinfo1TELEX", "type": "TWideStringField"}, "bankinfo1email": {"name": "Bankinfo1EMAIL", "type": "TWideStringField"}, "bankinfo1post_in": {"name": "Bankinfo1POST_IN", "type": "TWideStringField"}, "bankinfo1kod_fil": {"name": "Bankinfo1KOD_FIL", "type": "TIntegerField"}, "bankinfo1filial": {"name": "Bankinfo1FILIAL", "type": "TWideStringField"}, "bankinfo1adres_fil": {"name": "Bankinfo1ADRES_FIL", "type": "TWideStringField"}, "bankinfo1tel_fil": {"name": "Bankinfo1TEL_FIL", "type": "TWideStringField"}, "bankinfo1fax_fil": {"name": "Bankinfo1FAX_FIL", "type": "TWideStringField"}, "bankinfo1swift_fil": {"name": "Bankinfo1SWIFT_FIL", "type": "TWideStringField"}, "bankinfo1telex_fil": {"name": "Bankinfo1TELEX_FIL", "type": "TWideStringField"}, "bankinfo1postin_fil": {"name": "Bankinfo1POSTIN_FIL", "type": "TWideStringField"}, "bankinfo1seher_fil": {"name": "Bankinfo1SEHER_FIL", "type": "TWideStringField"}, "bankinfo1inn_fil": {"name": "Bankinfo1INN_FIL", "type": "TWideStringField"}, "bankinfo1krno_fil": {"name": "Bankinfo1KRNO_FIL", "type": "TWideStringField"}, "bankinfo1sedrfil": {"name": "Bankinfo1SEDRFIL", "type": "TWideStringField"}, "bankinfo1buhal_fil": {"name": "Bankinfo1BUHAL_FIL", "type": "TWideStringField"}, "bankinfo1kod_bfil": {"name": "Bankinfo1KOD_BFIL", "type": "TFloatField"}, "bankinfo1nb": {"name": "Bankinfo1NB", "type": "TIntegerField"}, "bankinfo1val_mov": {"name": "Bankinfo1VAL_MOV", "type": "TWideStringField"}, "bankinfo1logo": {"name": "Bankinfo1LOGO", "type": "TBlobField"}, "bankinfo1link": {"name": "Bankinfo1LINK", "type": "TWideStringField"}, "bankinfo1sdv": {"name": "Bankinfo1SDV", "type": "TFloatField"}, "bankinfo1svm": {"name": "Bankinfo1SVM", "type": "TFloatField"}, "bankinfo1bf": {"name": "Bankinfo1BF", "type": "TFloatField"}, "bankinfo1managertitle": {"name": "Bankinfo1MANAGERTITLE", "type": "TWideStringField"}, "bankinfo1accountanttitle": {"name": "Bankinfo1ACCOUNTANTTITLE", "type": "TWideStringField"}, "bankinfo1svm_currencyid": {"name": "Bankinfo1SVM_CURRENCYID", "type": "TFloatField"}, "bankinfo1capital": {"name": "Bankinfo1CAPITAL", "type": "TFloatField"}, "bankinfo1assistant": {"name": "Bankinfo1ASSISTANT", "type": "TWideStringField"}, "bankinfo1assistanttitle": {"name": "Bankinfo1ASSISTANTTITLE", "type": "TWideStringField"}, "bankinfo1reg_no": {"name": "Bankinfo1REG_NO", "type": "TWideStringField"}, "bankinfo1license_no": {"name": "Bankinfo1LICENSE_NO", "type": "TWideStringField"}, "bankinfo1fond_reg_no": {"name": "Bankinfo1FOND_REG_NO", "type": "TWideStringField"}, "bankinfo1license_fil": {"name": "Bankinfo1LICENSE_FIL", "type": "TWideStringField"}, "sas1": {"name": "sas1", "type": "TMenuItem"}, "cr1": {"name": "cr1", "type": "TMenuItem"}, "qeytlr1": {"name": "Qeytlr1", "type": "TMenuItem"}, "bussnesprosses1": {"name": "BussnesProsses1", "type": "TMenuItem"}, "qohumlar1": {"name": "Qohumlar1", "type": "TMenuItem"}, "baxmaq1": {"name": "Baxmaq1", "type": "TMenuItem"}, "editpasspin": {"name": "EditPASSPIN", "type": "TEdit"}, "digermelumat": {"name": "digerMelumat", "type": "TMenuItem"}, "button1": {"name": "Button1", "type": "TButton"}, "pluginhandle": {"name": "PluginHandle", "type": "THandle"}, "exportproc": {"name": "exportproc", "type": "Procedure"}, "fevents": {"name": "FEvents", "type": "IActiveFormXEvents"}, "transactionstate": {"name": "TransactionState", "type": "TTransactionState"}}, {});
  U.init(async () => {
    U.const("tsDelayed", 1);
    U.const("tsCommited", 2);
    U.const("tsRejected", 3);
    U.const("BooleanPrefix", " AND ");
    U.const("cs_CommitInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "Təsdiqlənmiş əməliyyatlar: %d"), "\r"), "Təsdiqlənməmiş əməliyyatlar: %d"));
    U.const("cs_RejectInformation", $.add($.add($.add($.add("Ümumi əməliyyatlar: %d", "\r"), "İnkar edilmiş əməliyyatlar: %d"), "\r"), "İnkar edilməmiş əməliyyatlar: %d"));
    U.const("no_selected_account", "Heç bir hesab qeyd edilməyib!");
    U.const("DebetArest_On_Account", "Hesaba Debet Arest qoyulub!");
    U.const("KreditArest_On_Account", "Hesaba Kredit Arest qoyulub!");
    U.const("no_selected_cust", "Heç bir müştəri qeyd olunmayıb");
    U.const("no_selected_trans", "Heç bir əməliyyat qeyd olunmayıb");
    U.var_("DB_HesabID", '', "String");
    U.var_("CR_HesabID", '', "String");
    U.var_("tacc", '', "String");
    U.var_("p_tacc", '', "String");
    U.var_("p_custid", '', "String");
    U.var_("note_id", '', "String");
    U.var_("contract_id", '', "String");
    U.var_("ins_edit", false, "Boolean");
    U.var_("P_Customers_Form", null, "TP_Customers_Form");
    U.var_("pep_chek", 0, "integer");
  });
  U.method("TP_Customers_Form", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TP_Customers_Form", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TP_Customers_Form", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TP_Customers_Form", "Initialize", null, arguments);
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
  U.method("TP_Customers_Form", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TP_Customers_Form", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TP_Customers_Form", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "digerMelumatClick", async function digerMelumatClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Formcust_other"))]))))) {
    await $.set(C, "Formcust_other", (await $.mcall((await $.v(C, "TFormcust_other")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "Formcust_other")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TP_Customers_Form", "LoadPlugin2", async function LoadPlugin2(Self, p0, p1, p2) {
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
  U.method("TP_Customers_Form", "LoadPlugin3", async function LoadPlugin3(Self, p0, p1, p2, p3) {
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
  U.method("TP_Customers_Form", "mazanmunsiniexcelat1Click", async function mazanmunsiniexcelat1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cust_id": 0, "acc_id": 0, "v": null, "sheet": null, "sheets": null, "a": 0, "cell": 0, "row": 0, "i": 0, "j": 0, "e_row1": 0, "openedxlscnt": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExcelApplication1")), "Disconnect", []);
  L0["v"] = (await $.mv((await $.v(C, "ExcelApplication1")), "Application"));
  await $.mcall((await $.v(C, "ExcelApplication1")), "Connect", []);
  await $.stmt((await $.mcall((await $.mv(L0["v"], "Workbooks")), "Open", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))])), "cust_excel.xlsx")])));
  { const $t1 = 100;
    L0["openedxlscnt"] = 1;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["openedxlscnt"] = $.succ(L0["openedxlscnt"], 1); }
      $t2 = false;
      if (!($.ord(L0["openedxlscnt"]) <= $.ord($t1))) break;
      try {
        L0["sheet"] = (await $.idx((await $.mv((await $.idx((await $.mv(L0["v"], "Workbooks")), [L0["openedxlscnt"]])), "Worksheets")), ["Sheet1"]));
        await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["B1:B60000"])), "ColumnWidth", 30);
        await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["C1:B60000"])), "ColumnWidth", 30);
        await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["D1:B60000"])), "ColumnWidth", 30);
        await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["E1:B60000"])), "ColumnWidth", 25);
        await $.mset((await $.idx((await $.mv(L0["sheet"], "Range")), ["F1:B60000"])), "ColumnWidth", 25);
        break;
      } catch ($t3) {
        $.rethrowControl($t3);
        $.handled($t3);
      }
      await $.tick();
    }
  }
  L0["sheets"] = (await $.mv(L0["v"], "Sheets"));
  await $.mcall((await $.idx((await $.mv(L0["sheets"], "Item")), ["Sheet1"])), "Activate", []);
  {
    const $t4 = (await $.wobj(C, "DSCustomer_Info1"));
    if ($.truthy((await $.wv([$t4], "Active", C, false)))) {
      await $.stmt($.wcall([$t4], "Close", [], C));
    }
    await $.wset([$t4], "cust_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "P_DataModule", C, false)), "Account")), "FieldByName", ["custID"])), "asInteger")), { get: async () => L0["cust_id"], set: async (v) => { L0["cust_id"] = v; }, local: true });
    await $.wset([$t4], "acc_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "P_DataModule", C, false)), "Account")), "FieldByName", ["ID"])), "asInteger")), { get: async () => L0["acc_id"], set: async (v) => { L0["acc_id"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "SetVariable", ["CUST_ID", (await $.wv([$t4], "cust_id", { get: async () => L0["cust_id"], set: async (v) => { L0["cust_id"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "SetVariable", ["Acc_id", (await $.wv([$t4], "acc_id", { get: async () => L0["acc_id"], set: async (v) => { L0["acc_id"] = v; }, local: true }, false))])));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [9, 3])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t5 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [9, 3], (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["name"])), "asstring"))); if ($t5 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t5); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [11, 4])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t6 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [11, 4], (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["PASPORT"])), "asstring"))); if ($t6 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t6); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [12, 3])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t7 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [12, 3], (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["PASPDATE"])), "AsDateTime"))); if ($t7 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t7); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [12, 5])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t8 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [12, 5], (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["PASPPLACE"])), "AsString"))); if ($t8 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t8); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [13, 2])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t9 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [13, 2], (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["ADDRESS"])), "AsString"))); if ($t9 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t9); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [14, 3])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t10 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [14, 3], (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["PHONE_H"])), "AsString"))); if ($t10 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t10); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [14, 5])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t11 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [14, 5], (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["PHONE_M"])), "AsString"))); if ($t11 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t11); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [15, 3])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t12 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [15, 3], (await $.mv((await $.mcall((await $.wv([$t4], "Bankinfo1", C, false)), "FieldByName", ["BANK"])), "AsString"))); if ($t12 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t12); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [14, 7])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t13 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [14, 7], (await $.mv((await $.mcall((await $.wv([$t4], "Bankinfo1", C, false)), "FieldByName", ["TARIX"])), "AsString"))); if ($t13 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t13); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [13, 6])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t14 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [13, 6], (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["inn"])), "AsString"))); if ($t14 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t14); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [16, 3])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t15 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [16, 3], (await $.mv((await $.mcall((await $.wv([$t4], "Bankinfo1", C, false)), "FieldByName", ["SWIFT"])), "AsString"))); if ($t15 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t15); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [17, 3])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t16 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [17, 3], (await $.mv((await $.mcall((await $.wv([$t4], "Bankinfo1", C, false)), "FieldByName", ["TAM_ADRESS"])), "AsString"))); if ($t16 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t16); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [26, 6])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    await $.mset((await $.idx((await $.mv((await $.wv([$t4], "sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [26, 7])), "numberformat", (await $.wcall([$t4], "ansichar", ["@"], C)));
    { const $t17 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [26, 7], $.add((await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["ACC_NO"])), "AsString")), " №-li hesab")); if ($t17 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t17); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [31, 2])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t18 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [31, 2], $.add("1.", (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["name"])), "AsString")))); if ($t18 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t18); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [32, 2])), "Font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t19 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells")), [32, 2], $.add("2.", (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["name"])), "AsString")))); if ($t19 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "Cells", $t19); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [36, 3])), "font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t20 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [36, 3], (await $.mv((await $.mcall((await $.wv([$t4], "Bankinfo1", C, false)), "FieldByName", ["SEDRFIL"])), "AsString"))); if ($t20 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells", $t20); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [39, 4])), "font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t21 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [39, 4], (await $.mv((await $.mcall((await $.wv([$t4], "DSCustomer_Info1", C, false)), "FieldByName", ["name"])), "AsString"))); if ($t21 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells", $t21); } }
    await $.mset((await $.mv((await $.idx((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [46, 4])), "font")), "Bold", (await $.wv([$t4], "true", C, false)));
    { const $t22 = await $.iset((await $.mv((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells")), [46, 4], (await $.mv((await $.mcall((await $.wv([$t4], "Bankinfo1", C, false)), "FieldByName", ["TARIX"])), "AsString"))); if ($t22 !== undefined) { await $.mset((await $.wv([$t4], "Sheet", { get: async () => L0["sheet"], set: async (v) => { L0["sheet"] = v; }, local: true }, false)), "cells", $t22); } }
    { const $t23 = await $.iset((await $.mv((await $.wv([$t4], "ExcelApplication1", C, false)), "Visible")), [0], (await $.wv([$t4], "True", C, false))); if ($t23 !== undefined) { await $.mset((await $.wv([$t4], "ExcelApplication1", C, false)), "Visible", $t23); } }
    await $.mcall((await $.wv([$t4], "ExcelApplication1", C, false)), "Disconnect", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "mzanmumsininap1Click", async function mzanmumsininap1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fil": 0, "cust_id": 0, "acc_id": 0, "tarix": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_account"))])));
    return L0.result;
  } else {
    if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "P_CO_ImzaNumReport"))]))))) {
      await $.set(C, "P_CO_ImzaNumReport", (await $.mcall((await $.v(C, "TP_CO_ImzaNumReport")), "Create", [Self])));
    }
    L0["fil"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["filial"])), "asInteger"));
    await $.mcall((await $.mv((await $.v(C, "P_CO_ImzaNumReport")), "Bankinfo")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_CO_ImzaNumReport")), "Bankinfo")), "SetVariable", ["v_kod_fil", L0["fil"]])));
    await $.mcall((await $.mv((await $.v(C, "P_CO_ImzaNumReport")), "Bankinfo")), "Open", []);
    L0["cust_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["custID"])), "asInteger"));
    L0["acc_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["ID"])), "asInteger"));
    await $.mcall((await $.mv((await $.v(C, "P_CO_ImzaNumReport")), "DSCustomer_Info")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_CO_ImzaNumReport")), "DSCustomer_Info")), "SetVariable", ["CUST_ID", L0["cust_id"]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_CO_ImzaNumReport")), "DSCustomer_Info")), "SetVariable", ["Acc_id", L0["acc_id"]])));
    await $.mcall((await $.mv((await $.v(C, "P_CO_ImzaNumReport")), "DSCustomer_Info")), "Open", []);
    await $.mcall((await $.v(C, "P_CO_ImzaNumReport")), "PreviewModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TP_Customers_Form", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TP_Customers_Form", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TP_Customers_Form", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TP_Customers_Form", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TP_Customers_Form", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TP_Customers_Form", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TP_Customers_Form", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TP_Customers_Form", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TP_Customers_Form", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TP_Customers_Form", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TP_Customers_Form", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TP_Customers_Form", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TP_Customers_Form", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TP_Customers_Form", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TP_Customers_Form", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TP_Customers_Form", "EditINNKeyPress", async function EditINNKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Customers_Form", "EditINNKeyUp", async function EditINNKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TP_Customers_Form", "PM_CustAddClick", async function PM_CustAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "P_CO_Cust_Form"))]))))) {
    await $.set(C, "P_CO_Cust_Form", (await $.mcall((await $.v(C, "TP_CO_Cust_Form")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Pep_change"))]))))) {
    await $.set(C, "Pep_change", (await $.mcall((await $.v(C, "TPep_change")), "Create", [Self])));
  }
  {
    const $t24 = (await $.wobj(C, "P_CO_Cust_Form"));
    await $.wset([$t24], "AddUpd", (await $.wv([$t24], "True", C, false)), C);
    await $.mset((await $.wv([$t24], "id_quality_DBLookupComboboxEh", C, false)), "Enabled", (await $.wv([$t24], "true", C, false)));
    await $.mset((await $.wv([$t24], "id_quality_DBLookupComboboxEh", C, false)), "KeyValue", (await $.mcall((await $.mv((await $.wv([$t24], "P_DataModule", C, false)), "Ods_cust_quality")), "Lookup", ["name", "Yüksək", "id"])));
    await $.mset((await $.wv([$t24], "ButtonMeyar", C, false)), "Visible", (await $.wv([$t24], "false", C, false)));
    await $.stmt($.wcall([$t24], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "CommitTransaction", async function CommitTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionid"]);
  {
    const $t25 = (await $.mv((await $.v(C, "P_DataModule")), "SB_TRANSACTION"));
    await $.wset([$t25], "Result", (await $.wcall([$t25], "CallIntegerFunction", [(await $.wv([$t25], "cs_commit_transaction", C, false)), ["TransactionID", (await $.wv([$t25], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t25], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "function", "ptypes": ["Longint"]});
  U.method("TP_Customers_Form", "CommitTransactions", async function CommitTransactions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionids": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["transactionids"]);
  {
    const $t26 = (await $.mv((await $.v(C, "P_DataModule")), "SB_TRANSACTION"));
    await $.wset([$t26], "Result", (await $.wcall([$t26], "CallIntegerFunction", [(await $.wv([$t26], "cs_commit_delayed_transactions", C, false)), ["OverloadIDsStr", (await $.wv([$t26], "TransactionIDs", { get: async () => L0["transactionids"], set: async (v) => { L0["transactionids"] = v; }, local: true }, false)), "CommitTemp", (await $.wv([$t26], "True", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["TransactionIDs"], "kind": "function", "ptypes": ["WideString"]});
  U.method("TP_Customers_Form", "cr1Click", async function cr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["  Hecbir hesab qeyd edilmeyib   !"])));
    return L0.result;
  } else {
    await $.set(C, "CR_HesabID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["id"])), "Asstring")));
  }
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "CR_Hesab", (await $.v(C, "CR_HesabID"))])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "SearchAccKeyDown", async function SearchAccKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.v(C, "EditPassp_number")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditID")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "EditCUST_NAME")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "DateEdit")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "SearchEdit")), "Text")), "")))))) {
    await $.mset((await $.v(C, "EditID")), "Text", "");
  }
  await $.mset((await $.v(C, "EditPassp_number")), "Text", "");
  await $.mset((await $.v(C, "DateEdit")), "Text", "");
  await $.mset((await $.v(C, "EditCUST_NAME")), "Text", "");
  await $.mset((await $.v(C, "SearchEdit")), "Text", "");
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TP_Customers_Form", "AccSelKliID", async function AccSelKliID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t27 = (await $.mv((await $.v(C, "P_DataModule")), "Account"));
    await $.stmt($.wcall([$t27], "Close", [], C));
    await $.mcall((await $.wv([$t27], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t27], "SQL", C, false)), "add", [$.add($.add("select * from fizaccs where custid='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t27], "P_DataModule", C, false)), "P_Customers")), "FieldByName", ["ID"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t27], "Open", [], C));
    await $.stmt($.wcall([$t27], "Refresh", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_Customers_Form", "SearchAccKeyPress", async function SearchAccKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "acc_no": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await L0["key"].get()), "\r"))))) {
    return L0.result;
  }
  {
    const $t28 = (await $.wobj(C, "P_DataModule"));
    const $t29 = (await $.wv([$t28], "Account", C, false));
    if ($.truthy($.not(($.eq((await $.mv((await $.wv([$t28, $t29], "P_Customers", C, false)), "State")), (await $.wv([$t28, $t29], "dsInsert", C, false))))))) {
      await $.stmt((await $.wcall([$t28, $t29], "SetVariable", ["CID", (await $.wv([$t28, $t29], "null", C, false))], C)));
    }
    await $.stmt((await $.wcall([$t28, $t29], "SetVariable", ["p_AccNO", $.add((await $.mv((await $.wv([$t28, $t29], "SearchAcc", C, false)), "Text")), "%")], C)));
    if ($.truthy($.not((await $.wv([$t28, $t29], "Active", C, false))))) {
      await $.stmt($.wcall([$t28, $t29], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t28, $t29], "Refresh", [], C));
    }
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "RecordCount")), 0))) {
    L0["acc_no"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["ACCNO"])), "asVariant"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["CUSTID"])), "asInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "Locate", ["ACCNO", L0["acc_no"], [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Customers_Form", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "P_Customers_Form", Self);
  await $.set(C, "P_DataModule", (await $.mcall((await $.v(C, "TP_DataModule")), "Create", [Self])));
  await $.set(C, "Ph_CO_BookmarkSetupFrom", (await $.mcall((await $.v(C, "TPh_CO_BookmarkSetupFrom")), "Create", [Self])));
  await $.set(C, "Ph_CO_BookmarkAddEditForm", (await $.mcall((await $.v(C, "TPh_CO_BookmarkAddEditForm")), "Create", [Self])));
  await $.set(C, "Ph_CO_frmWReport", (await $.mcall((await $.v(C, "TPh_CO_frmWReport")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Sysdat")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "Baxmaq1Click", async function Baxmaq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ins_edit", true);
  await $.stmt((await $.call(C, "PM_CustEditClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "BussnesProsses1Click", async function BussnesProsses1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "p_tacc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["id"])), "AsString")));
  await $.set(C, "p_custid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["id"])), "AsString")));
  await $.stmt((await $.call(C, "LoadPlugin3", ["Sb_General.bpl", "bussPuroc", (await $.v(C, "p_custid")), (await $.v(C, "P_tacc"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Formcust_other"))]))))) {
    await $.set(C, "Formcust_other", (await $.call(C, "TFormcust_other", [Self])));
  }
  await $.mcall((await $.v(C, "Formcust_other")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  if ($.truthy($.not(((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Active")))))) {
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Open", []);
  }
  {
    const $t30 = L0["sender"];
    await $.wset([$t30], "SearchField", (await $.wcall([$t30], "copy", [(await $.wv([$t30], "Name", C, false)), 5, (await $.wcall([$t30], "length", [(await $.wv([$t30], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t31 = (await $.wcall([$t30], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t30], "DBGridCustomers", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t30, $t31], "SearchRecord", [(await $.wv([$t30, $t31], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t30, $t31], "Text", C, false)), $.add((await $.wv([$t30, $t31], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t30, $t31], "srFromCurrent", C, false)), (await $.wv([$t30, $t31], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t30, $t31], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t30, $t31], "mtInformation", C, false)), [(await $.wv([$t30, $t31], "mbNo", C, false)), (await $.wv([$t30, $t31], "mbYes", C, false))], 0], C)), (await $.wv([$t30, $t31], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t30, $t31], "SearchRecord", [(await $.wv([$t30, $t31], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t30, $t31], "Text", C, false)), $.add((await $.wv([$t30, $t31], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t30, $t31], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t30, $t31], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t30, $t31], "mtInformation", C, false)), [(await $.wv([$t30, $t31], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
    if ($.truthy($.eq((await $.wv([$t30], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), "NAME1"))) {
      await $.wset([$t30], "SearchField", "CUST_NAME", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "SearchEditKeyPress", async function SearchEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Customers_Form", "N10Click", async function N10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_account"))])));
    return L0.result;
  } else {
    await $.set(C, "P_CO_St", (await $.mcall((await $.v(C, "TP_CO_St")), "Create", [Self])));
    await $.mcall((await $.v(C, "P_CO_St")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "N11Click", async function N11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "P_CO_MemorialForm", (await $.mcall((await $.v(C, "TP_CO_MemorialForm")), "Create", [Self])));
  await $.set(C, "P_CO_IntervalForm", (await $.mcall((await $.v(C, "TP_CO_IntervalForm")), "Create", [Self])));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_account"))])));
    return L0.result;
  } else {
    {
      const $t32 = (await $.wobj(C, "P_CO_IntervalForm"));
      await $.mset((await $.wv([$t32], "StartDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t32], "P_DataModule", C, false)), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
      await $.mset((await $.wv([$t32], "EndDateEdit", C, false)), "DateTime", (await $.mv((await $.wv([$t32], "StartDateEdit", C, false)), "DateTime")));
      if ($.truthy($.eq((await $.wv([$t32], "ShowModal", C, false)), (await $.wv([$t32], "mrOK", C, false))))) {
        await $.wset([$t32], "AStartDate", (await $.mv((await $.wv([$t32], "StartDateEdit", C, false)), "DateTime")), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
        await $.wset([$t32], "AEndDate", (await $.mv((await $.wv([$t32], "EndDateEdit", C, false)), "DateTime")), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
        {
          const $t33 = (await $.wv([$t32], "P_CO_MemorialForm", C, false));
          await $.stmt((await $.wcall([$t32, $t33], "OpenDataControls", [(await $.wv([$t32, $t33], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false)), (await $.wv([$t32, $t33], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false))], C)));
          await $.stmt($.wcall([$t32, $t33], "ShowModal", [], C));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DBGridTransactionsDrawColumnCell", async function DBGridTransactionsDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  L0["imageindex"] = (-(1));
  {
    const $t34 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t34], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t35 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t34], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "asInteger"));
        if ($.eq($t35, (await $.wv([$t34], "tsCommited", C, false)))) {
          await $.wset([$t34], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t35, (await $.wv([$t34], "tsRejected", C, false)))) {
          await $.wset([$t34], "ImageIndex", 8, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t35, (await $.wv([$t34], "tsDelayed", C, false)))) {
          await $.wset([$t34], "ImageIndex", 9, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t34], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t34], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t34], "ImageList", C, false)), "Draw", [(await $.wv([$t34], "Canvas", C, false)), (await $.mv((await $.wv([$t34], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t34], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t34], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t34], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t34], "DefaultDrawColumnCell", [(await $.wv([$t34], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t34], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t34], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t34], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TP_Customers_Form", "DBGridTransactionsTitleClick", async function DBGridTransactionsTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t36 = (await $.mv((await $.v(C, "P_DataModule")), "Transactions"));
    await $.stmt((await $.wcall([$t36], "SetVariable", ["Title", (await $.wv([$t36], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t36], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TP_Customers_Form", "PM_CustCloseClick", async function PM_CustCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_id1": 0, "v_name": '', "v_closedat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["table_name"] = "Customers_Physical";
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_cust"))])));
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "RecordCount")), 0))) {
      await $.stmt((await $.call(C, "MessageDlg", ["Aktiv hesabları olan müştərini bağlamaq olmaz", (await $.v(C, "mtError")), [(await $.v(C, "mbOk"))], 0])));
    } else {
      {
        const $t37 = (await $.wobj(C, "P_DataModule"));
        await $.wset([$t37], "v_id1", (await $.mv((await $.mcall((await $.wv([$t37], "P_Customers", C, false)), "FieldByName", ["ID"])), "asInteger")), { get: async () => L0["v_id1"], set: async (v) => { L0["v_id1"] = v; }, local: true });
        await $.wset([$t37], "v_name", (await $.mv((await $.mcall((await $.wv([$t37], "P_Customers", C, false)), "FieldByName", ["cust_name"])), "asstring")), { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true });
        await $.wset([$t37], "v_closedat", (await $.wcall([$t37], "trunc", [(await $.mv((await $.wv([$t37], "SysdatTEK_DAT", C, false)), "AsDateTime"))], C)), { get: async () => L0["v_closedat"], set: async (v) => { L0["v_closedat"] = v; }, local: true });
        if ($.truthy($.eq((await $.wcall([$t37], "MessageDlg", [(await $.wcall([$t37], "Format", ["%s adlı müştəri silinsin?", [(await $.wv([$t37], "v_name", { get: async () => L0["v_name"], set: async (v) => { L0["v_name"] = v; }, local: true }, false))]], C)), (await $.wv([$t37], "mtConfirmation", C, false)), (await $.wv([$t37], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t37], "mrYes", C, false))))) {
          await $.stmt((await $.mcall((await $.wv([$t37], "SBOP", C, false)), "CallProcedure", ["close_customer", ["v_id", (await $.wv([$t37], "v_id1", { get: async () => L0["v_id1"], set: async (v) => { L0["v_id1"] = v; }, local: true }, false)), "currentdate", (await $.wv([$t37], "v_closedat", { get: async () => L0["v_closedat"], set: async (v) => { L0["v_closedat"] = v; }, local: true }, false)), "result", 1]])));
          await $.mcall((await $.wv([$t37], "P_Customers", C, false)), "Close", []);
          await $.mcall((await $.wv([$t37], "P_Customers", C, false)), "Open", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "TransOutgoingClick", async function TransOutgoingClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RichEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["TipAcc"])), "asstring")));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["no_selected_account"])));
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["D", 0, (await $.call(C, "Length", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])), []])), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "DebetArest_On_Account"))])));
      return L0.result;
    } else {
      {
        const $t38 = (await $.wobj(C, "P_CO_TransTypeIncOut"));
        await $.wset([$t38], "P_CO_TransTypeIncOut", (await $.mcall((await $.wv([$t38], "TP_CO_TransTypeIncOUT", C, false)), "Create", [Self])), C);
        await $.wset([$t38], "IncOut", 2, C);
        await $.stmt($.wcall([$t38], "ShowModal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "TransIncomingClick", async function TransIncomingClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RichEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["TipAcc"])), "asstring")));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_account"))])));
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["D", 0, (await $.call(C, "Length", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])), []])), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "DebetArest_On_Account"))])));
      return L0.result;
    } else {
      {
        const $t39 = (await $.wobj(C, "P_CO_TransTypeIncOut"));
        await $.wset([$t39], "P_CO_TransTypeIncOut", (await $.mcall((await $.wv([$t39], "TP_CO_TransTypeIncOUT", C, false)), "Create", [Self])), C);
        await $.wset([$t39], "IncOut", 1, C);
        await $.stmt($.wcall([$t39], "ShowModal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "ideditChange", async function ideditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "EditPassp_numberChange", async function EditPassp_numberChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditPassp_number")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Locate", ["PASSP_NUMBER", (await $.mv((await $.v(C, "EditPassp_number")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGridCustomers")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t40 = (await $.mv((await $.v(C, "P_DataModule")), "Account"));
    await $.stmt($.wcall([$t40], "Close", [], C));
    await $.mcall((await $.wv([$t40], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t40], "SQL", C, false)), "add", [$.add($.add("select * from fizaccs where custid='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t40], "P_DataModule", C, false)), "P_Customers")), "FieldByName", ["ID"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t40], "Open", [], C));
    await $.stmt($.wcall([$t40], "Refresh", [], C));
    {
      const $t41 = (await $.mv((await $.wv([$t40], "P_DataModule", C, false)), "Transactions"));
      await $.stmt($.wcall([$t40, $t41], "Close", [], C));
      await $.mcall((await $.wv([$t40, $t41], "SQL", C, false)), "clear", []);
      await $.stmt((await $.mcall((await $.wv([$t40, $t41], "SQL", C, false)), "add", [$.add($.add($.add($.add("select * from transactionsp where debitid = '", (await $.mv((await $.wv([$t40, $t41], "DBEdit1", C, false)), "Text"))), "' or creditid = '"), (await $.mv((await $.wv([$t40, $t41], "DBEdit1", C, false)), "Text"))), "' ")])));
      await $.stmt($.wcall([$t40, $t41], "Open", [], C));
      await $.stmt($.wcall([$t40, $t41], "Refresh", [], C));
      if ($.truthy(($.ne((await $.mv((await $.wv([$t40, $t41], "EditPassp_number", C, false)), "Text")), "")))) {
        await $.mset((await $.wv([$t40, $t41], "EditID", C, false)), "Text", "");
      }
      await $.mset((await $.wv([$t40, $t41], "SearchAcc", C, false)), "Text", "");
      await $.mset((await $.wv([$t40, $t41], "DateEdit", C, false)), "Text", "");
      await $.mset((await $.wv([$t40, $t41], "EditCUST_NAME", C, false)), "Text", "");
      await $.mset((await $.wv([$t40, $t41], "SearchEdit", C, false)), "Text", "");
      await $.mset((await $.wv([$t40, $t41], "EditSerial", C, false)), "Text", "");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "EditSerialChange", async function EditSerialChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditSerial")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Locate", ["passport", (await $.mv((await $.v(C, "EditSerial")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGridCustomers")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t42 = (await $.mv((await $.v(C, "P_DataModule")), "Account"));
    await $.stmt($.wcall([$t42], "Close", [], C));
    await $.mcall((await $.wv([$t42], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t42], "SQL", C, false)), "add", [$.add($.add("select * from fizaccs where custid='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t42], "P_DataModule", C, false)), "P_Customers")), "FieldByName", ["ID"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t42], "Open", [], C));
    await $.stmt($.wcall([$t42], "Refresh", [], C));
    {
      const $t43 = (await $.mv((await $.wv([$t42], "P_DataModule", C, false)), "Transactions"));
      await $.stmt($.wcall([$t42, $t43], "Close", [], C));
      await $.mcall((await $.wv([$t42, $t43], "SQL", C, false)), "clear", []);
      await $.stmt((await $.mcall((await $.wv([$t42, $t43], "SQL", C, false)), "add", [$.add($.add($.add($.add("select * from transactionsp where debitid = '", (await $.mv((await $.wv([$t42, $t43], "DBEdit1", C, false)), "Text"))), "' or creditid = '"), (await $.mv((await $.wv([$t42, $t43], "DBEdit1", C, false)), "Text"))), "' ")])));
      await $.stmt($.wcall([$t42, $t43], "Open", [], C));
      await $.stmt($.wcall([$t42, $t43], "Refresh", [], C));
      if ($.truthy(($.ne((await $.mv((await $.wv([$t42, $t43], "EditSerial", C, false)), "Text")), "")))) {
        await $.mset((await $.wv([$t42, $t43], "EditID", C, false)), "Text", "");
      }
      await $.mset((await $.wv([$t42, $t43], "SearchAcc", C, false)), "Text", "");
      await $.mset((await $.wv([$t42, $t43], "DateEdit", C, false)), "Text", "");
      await $.mset((await $.wv([$t42, $t43], "EditCUST_NAME", C, false)), "Text", "");
      await $.mset((await $.wv([$t42, $t43], "SearchEdit", C, false)), "Text", "");
      await $.mset((await $.wv([$t42, $t43], "EditPassp_number", C, false)), "Text", "");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "nameditChange", async function nameditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Open", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "SearchEdit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Locate", ["cust_name", (await $.mv((await $.v(C, "EditCUST_NAME")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGridCustomers")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  {
    const $t44 = (await $.mv((await $.v(C, "P_DataModule")), "Account"));
    await $.stmt($.wcall([$t44], "Close", [], C));
    await $.mcall((await $.wv([$t44], "SQL", C, false)), "clear", []);
    await $.stmt((await $.mcall((await $.wv([$t44], "SQL", C, false)), "add", [$.add($.add("select * from fizaccs where custid='", (await $.mv((await $.mcall((await $.mv((await $.wv([$t44], "P_DataModule", C, false)), "P_Customers")), "FieldByName", ["ID"])), "asstring"))), "' ")])));
    await $.stmt($.wcall([$t44], "Open", [], C));
    await $.stmt($.wcall([$t44], "Refresh", [], C));
    {
      const $t45 = (await $.mv((await $.wv([$t44], "P_DataModule", C, false)), "Transactions"));
      await $.stmt($.wcall([$t44, $t45], "Close", [], C));
      await $.mcall((await $.wv([$t44, $t45], "SQL", C, false)), "clear", []);
      await $.stmt((await $.mcall((await $.wv([$t44, $t45], "SQL", C, false)), "add", [$.add($.add($.add($.add("select * from transactionsp where debitid = '", (await $.mv((await $.wv([$t44, $t45], "DBEdit1", C, false)), "Text"))), "' or creditid = '"), (await $.mv((await $.wv([$t44, $t45], "DBEdit1", C, false)), "Text"))), "' ")])));
      await $.stmt($.wcall([$t44, $t45], "Open", [], C));
      await $.stmt($.wcall([$t44, $t45], "Refresh", [], C));
      if ($.truthy(($.ne((await $.mv((await $.wv([$t44, $t45], "EditCUST_NAME", C, false)), "Text")), "")))) {
        await $.mset((await $.wv([$t44, $t45], "EditID", C, false)), "Text", "");
      }
      await $.mset((await $.wv([$t44, $t45], "SearchAcc", C, false)), "Text", "");
      await $.mset((await $.wv([$t44, $t45], "DateEdit", C, false)), "Text", "");
      await $.mset((await $.wv([$t44, $t45], "EditCUST_NAME", C, false)), "Text", "");
      await $.mset((await $.wv([$t44, $t45], "EditSerial", C, false)), "Text", "");
      await $.mset((await $.wv([$t44, $t45], "EditPassp_number", C, false)), "Text", "");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "PM_CustRefreshClick", async function PM_CustRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DBGridCustomersCellClick", async function DBGridCustomersCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.or_((await $.or_((await $.or_(($.ne((await $.mv((await $.v(C, "EditSerial")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "EditCUST_NAME")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "DateEdit")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "EditPassp_number")), "Text")), "")))))) {
    await $.mset((await $.v(C, "EditPassp_number")), "Text", "");
    await $.mset((await $.v(C, "EditSerial")), "Text", "");
    await $.mset((await $.v(C, "DateEdit")), "Text", "");
    await $.mset((await $.v(C, "EditCUST_NAME")), "Text", "");
  }
  if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["ACCNO"])), "IsNull"))))) {
    await $.mset((await $.v(C, "SearchAcc")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["ACCNO"])), "asVariant")));
  } else {
    await $.mset((await $.v(C, "SearchAcc")), "Text", "");
  }
  if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["ACCNAME"])), "IsNull"))))) {
    await $.mset((await $.v(C, "SearchEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["ACCNAME"])), "asVariant")));
  } else {
    await $.mset((await $.v(C, "SearchEdit")), "Text", "");
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TP_Customers_Form", "SBCommit", async function SBCommit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_Customers_Form", "PM_CustEditClick", async function PM_CustEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "csid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_cust"))])));
    return L0.result;
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "P_CO_Cust_Form"))]))))) {
    await $.set(C, "P_CO_Cust_Form", (await $.mcall((await $.v(C, "TP_CO_Cust_Form")), "Create", [Self])));
  }
  {
    const $t46 = (await $.wobj(C, "P_CO_Cust_Form"));
    await $.wset([$t46], "AddUpd", (await $.wv([$t46], "False", C, false)), C);
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.wv([$t46], "P_DataModule", C, false)), "p_Customers")), "FieldByName", ["quality_id"])), "AsInteger")), 0))) {
      await $.mset((await $.wv([$t46], "ButtonMeyar", C, false)), "Visible", (await $.wv([$t46], "true", C, false)));
      await $.mset((await $.wv([$t46], "id_quality_DBLookupComboboxEh", C, false)), "Enabled", (await $.wv([$t46], "false", C, false)));
    }
    await $.stmt($.wcall([$t46], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DBGridCustomersDblClick", async function DBGridCustomersDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["P_CUSTOMERS", "update"]])));
  await $.stmt((await $.call(C, "PM_CustEditClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "EditSerialKeyPress", async function EditSerialKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Customers_Form", "ActionCommitExecute", async function ActionCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "ids": '', "status": 0, "trcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ids"] = "";
  L0["trcount"] = 0;
  {
    const $t47 = (await $.wobj(C, "DBGridTransactions"));
    const $t48 = (await $.wv([$t47], "SelectedRows", C, false));
    const $t49 = (await $.mv((await $.wv([$t47, $t48], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t47, $t48, $t49], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t47, $t48, $t49], "inc", [$.ref(async () => (await $.wv([$t47, $t48, $t49], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t50) => { await $.wset([$t47, $t48, $t49], "TrCount", $t50, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
      await $.wset([$t47, $t48, $t49], "IDs", (await $.mv((await $.wcall([$t47, $t48, $t49], "FieldByName", ["ID"], C)), "asstring")), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
    } else {
      await $.stmt($.wcall([$t47, $t48, $t49], "DisableControls", [], C));
      try {
        { const $t51 = $.sub((await $.wv([$t47, $t48, $t49], "Count", C, false)), 1);
          await $.wset([$t47, $t48, $t49], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t52 = true;
          for (;;) {
            if (!$t52) { await $.wset([$t47, $t48, $t49], "i", $.succ((await $.wv([$t47, $t48, $t49], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t52 = false;
            if (!($.ord((await $.wv([$t47, $t48, $t49], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t51))) break;
            await $.stmt((await $.wcall([$t47, $t48, $t49], "GotoBookmark", [(await $.wcall([$t47, $t48, $t49], "TBookmark", [(await $.idx((await $.wv([$t47, $t48, $t49], "Items", C, false)), [(await $.wv([$t47, $t48, $t49], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t47, $t48, $t49], "Status", (await $.mv((await $.wcall([$t47, $t48, $t49], "FieldByName", ["Status"], C)), "asInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t47, $t48, $t49], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t47, $t48, $t49], "tsDelayed", C, false)), (await $.wv([$t47, $t48, $t49], "tsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t47, $t48, $t49], "inc", [$.ref(async () => (await $.wv([$t47, $t48, $t49], "TrCount", { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }, false)), async ($t53) => { await $.wset([$t47, $t48, $t49], "TrCount", $t53, { get: async () => L0["trcount"], set: async (v) => { L0["trcount"] = v; }, local: true }); })], C)));
              await $.wset([$t47, $t48, $t49], "IDs", $.add($.add((await $.wv([$t47, $t48, $t49], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), ","), (await $.mv((await $.wcall([$t47, $t48, $t49], "FieldByName", ["ID"], C)), "asstring"))), { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true });
            }
            await $.tick();
          }
        }
        await $.stmt((await $.mcall((await $.wv([$t47, $t48, $t49], "System", C, false)), "Delete", [$.ref(async () => (await $.wv([$t47, $t48, $t49], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t54) => { await $.wset([$t47, $t48, $t49], "IDs", $t54, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1, 1])));
      } finally {
        await $.stmt($.wcall([$t47, $t48, $t49], "EnableControls", [], C));
      }
    }
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", ["%d sayda əməliyyat təsdiqlənsin?", [L0["trcount"]]])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t55 = (await $.wobj(C, "P_DataModule"));
      await $.stmt((await $.wcall([$t55], "CommitTransactions", [(await $.wv([$t55], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t55], "SBCommit", [], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "ActionStepCommitExecute", async function ActionStepCommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false, "status": 0, "commitedcount": 0, "errorcount": 0, "lasterrormessage": '', "qaccid": 0, "qtrid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_trans"))])));
    return L0.result;
  } else {
    L0["commitedcount"] = 0;
    L0["errorcount"] = 0;
    L0["willrefresh"] = false;
    {
      const $t56 = (await $.wobj(C, "P_DataModule"));
      const $t57 = (await $.wv([$t56], "DBGridTransactions", C, false));
      const $t58 = (await $.wv([$t56, $t57], "SelectedRows", C, false));
      const $t59 = (await $.mv((await $.wv([$t56, $t57, $t58], "DataSource", C, false)), "DataSet"));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t56, $t57, $t58, $t59], "P_DataModule", C, false)), "Transactions")), "FieldByName", ["Status"])), "asInteger")), 2))) {
        await $.stmt((await $.wcall([$t56, $t57, $t58, $t59], "ShowMessage", ["Əməliyyat artıq təsdiqlənib"], C)));
      } else {
        if ($.truthy($.eq((await $.wcall([$t56, $t57, $t58, $t59], "MessageDlg", ["Əməliyyatlar təsdiqlənsin?", (await $.wv([$t56, $t57, $t58, $t59], "mtConfirmation", C, false)), [(await $.wv([$t56, $t57, $t58, $t59], "mbYes", C, false)), (await $.wv([$t56, $t57, $t58, $t59], "mbCancel", C, false))], 0], C)), (await $.wv([$t56, $t57, $t58, $t59], "mrYes", C, false))))) {
          await $.stmt($.wcall([$t56, $t57, $t58, $t59], "DisableControls", [], C));
          try {
            await $.mcall((await $.wv([$t56, $t57, $t58, $t59], "Application", C, false)), "ProcessMessages", []);
            if ($.truthy($.eq((await $.wv([$t56, $t57, $t58, $t59], "Count", C, false)), 0))) {
              await $.wset([$t56, $t57, $t58, $t59], "CurrentRowSelected", (await $.wv([$t56, $t57, $t58, $t59], "True", C, false)), C);
            }
            { const $t60 = $.sub((await $.wv([$t56, $t57, $t58, $t59], "Count", C, false)), 1);
              await $.wset([$t56, $t57, $t58, $t59], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
              let $t61 = true;
              for (;;) {
                if (!$t61) { await $.wset([$t56, $t57, $t58, $t59], "i", $.succ((await $.wv([$t56, $t57, $t58, $t59], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                $t61 = false;
                if (!($.ord((await $.wv([$t56, $t57, $t58, $t59], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t60))) break;
                try {
                  await $.stmt((await $.wcall([$t56, $t57, $t58, $t59], "GotoBookmark", [(await $.wcall([$t56, $t57, $t58, $t59], "TBookmark", [(await $.idx((await $.wv([$t56, $t57, $t58, $t59], "Items", C, false)), [(await $.wv([$t56, $t57, $t58, $t59], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))], C))], C)));
                  await $.wset([$t56, $t57, $t58, $t59], "Status", (await $.mv((await $.wcall([$t56, $t57, $t58, $t59], "FieldByName", ["Status"], C)), "asInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
                  if ($.truthy($.in_((await $.wv([$t56, $t57, $t58, $t59], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t56, $t57, $t58, $t59], "tsDelayed", C, false)), (await $.wv([$t56, $t57, $t58, $t59], "tsRejected", C, false))]))) {
                    await $.wset([$t56, $t57, $t58, $t59], "ID", (await $.mv((await $.wcall([$t56, $t57, $t58, $t59], "FieldByName", ["ID"], C)), "asInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t56, $t57, $t58, $t59], "CommitTransaction", [(await $.wv([$t56, $t57, $t58, $t59], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
                    await $.wset([$t56, $t57, $t58, $t59], "WillRefresh", (await $.wv([$t56, $t57, $t58, $t59], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t56, $t57, $t58, $t59], "inc", [$.ref(async () => (await $.wv([$t56, $t57, $t58, $t59], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), async ($t63) => { await $.wset([$t56, $t57, $t58, $t59], "CommitedCount", $t63, { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }); })], C)));
                    await $.stmt((await $.wcall([$t56, $t57, $t58, $t59], "SBCommit", [], C)));
                  }
                } catch ($t62) {
                  $.rethrowControl($t62);
                  if ($.excIs($t62, "Exception")) {
                    L0["e"] = $.exc($t62);
                    await $.wset([$t56, $t57, $t58, $t59], "LastErrorMessage", (await $.mv((await $.wv([$t56, $t57, $t58, $t59], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true });
                    await $.stmt((await $.wcall([$t56, $t57, $t58, $t59], "inc", [$.ref(async () => (await $.wv([$t56, $t57, $t58, $t59], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), async ($t64) => { await $.wset([$t56, $t57, $t58, $t59], "ErrorCount", $t64, { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }); })], C)));
                    continue;
                  }
                  else { throw $t62; }
                }
                await $.tick();
              }
            }
          } finally {
            if ($.truthy($.gt((await $.wv([$t56, $t57, $t58, $t59], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 0))) {
              if ($.truthy($.eq((await $.wv([$t56, $t57, $t58, $t59], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false)), 1))) {
                await $.stmt((await $.wcall([$t56, $t57, $t58, $t59], "MessageDlg", [(await $.wv([$t56, $t57, $t58, $t59], "LastErrorMessage", { get: async () => L0["lasterrormessage"], set: async (v) => { L0["lasterrormessage"] = v; }, local: true }, false)), (await $.wv([$t56, $t57, $t58, $t59], "mtConfirmation", C, false)), [(await $.wv([$t56, $t57, $t58, $t59], "mbOk", C, false))], 0], C)));
              } else {
                await $.stmt((await $.wcall([$t56, $t57, $t58, $t59], "MessageDlg", [(await $.wcall([$t56, $t57, $t58, $t59], "Format", [(await $.wv([$t56, $t57, $t58, $t59], "cs_CommitInformation", C, false)), [$.add((await $.wv([$t56, $t57, $t58, $t59], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t56, $t57, $t58, $t59], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))), (await $.wv([$t56, $t57, $t58, $t59], "CommitedCount", { get: async () => L0["commitedcount"], set: async (v) => { L0["commitedcount"] = v; }, local: true }, false)), (await $.wv([$t56, $t57, $t58, $t59], "ErrorCount", { get: async () => L0["errorcount"], set: async (v) => { L0["errorcount"] = v; }, local: true }, false))]], C)), (await $.wv([$t56, $t57, $t58, $t59], "mtConfirmation", C, false)), [(await $.wv([$t56, $t57, $t58, $t59], "mbOk", C, false))], 0], C)));
              }
            }
            await $.stmt($.wcall([$t56, $t57, $t58, $t59], "EnableControls", [], C));
            if ($.truthy((await $.wv([$t56, $t57, $t58, $t59], "WillRefresh", { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true }, false)))) {
              await $.wset([$t56, $t57, $t58, $t59], "TransactionState", (await $.wv([$t56, $t57, $t58, $t59], "tsCommit", C, false)), C);
              await $.wset([$t56, $t57, $t58, $t59], "qaccid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t56, $t57, $t58, $t59], "P_DataModule", C, false)), "Account")), "FieldByName", ["ID"])), "asInteger")), { get: async () => L0["qaccid"], set: async (v) => { L0["qaccid"] = v; }, local: true });
              await $.wset([$t56, $t57, $t58, $t59], "qtrid", (await $.mv((await $.mv((await $.wv([$t56, $t57, $t58, $t59], "P_DataModule", C, false)), "TransactionsID")), "asInteger")), { get: async () => L0["qtrid"], set: async (v) => { L0["qtrid"] = v; }, local: true });
              await $.mcall((await $.mv((await $.wv([$t56, $t57, $t58, $t59], "P_DataModule", C, false)), "Transactions")), "Close", []);
              await $.mcall((await $.mv((await $.wv([$t56, $t57, $t58, $t59], "P_DataModule", C, false)), "Transactions")), "Open", []);
              await $.mcall((await $.mv((await $.wv([$t56, $t57, $t58, $t59], "P_DataModule", C, false)), "Account")), "Close", []);
              await $.mcall((await $.mv((await $.wv([$t56, $t57, $t58, $t59], "P_DataModule", C, false)), "Account")), "Open", []);
              await $.stmt((await $.mcall((await $.mv((await $.wv([$t56, $t57, $t58, $t59], "P_DataModule", C, false)), "Account")), "Locate", ["id", (await $.wv([$t56, $t57, $t58, $t59], "qaccid", { get: async () => L0["qaccid"], set: async (v) => { L0["qaccid"] = v; }, local: true }, false)), []])));
              await $.stmt((await $.mcall((await $.mv((await $.wv([$t56, $t57, $t58, $t59], "P_DataModule", C, false)), "Transactions")), "Locate", ["id", (await $.wv([$t56, $t57, $t58, $t59], "qtrid", { get: async () => L0["qtrid"], set: async (v) => { L0["qtrid"] = v; }, local: true }, false)), []])));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "GetCustomerInfo", async function GetCustomerInfo(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"custid": $.copyArg(p0), "custname": $.asRef(p1), "custinn": $.asRef(p2), result: undefined};
  await $.fixArgs(L0, ["custid"]);
  {
    const $t65 = (await $.mv((await $.v(C, "P_DataModule")), "OPCash"));
    await $.stmt((await $.wcall([$t65], "CallProcedure", ["GetCustomerInfo", [(await $.wv([$t65], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), "", ""]], C)));
    await $.wset([$t65], "CustInn", (await $.wcall([$t65], "GetParameter", [1], C)), { get: async () => await L0["custinn"].get(), set: async (v) => { await L0["custinn"].set(v); }, local: true });
    await $.wset([$t65], "CustName", (await $.wcall([$t65], "GetParameter", [2], C)), { get: async () => await L0["custname"].get(), set: async (v) => { await L0["custname"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["CustID", "CustName", "CustInn"], "kind": "procedure", "ptypes": ["Integer", "String", "String"]});
  U.method("TP_Customers_Form", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "valutename": '', "withmanat": '', "nomanat": '', "withcoin": '', "manatposition": 0, "i": 0, "custname": '', "custinn": '', "transactionid": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_trans"))])));
    return L0.result;
  } else {
    L0["nomanat"] = "";
    try {
      {
        const $t66 = (await $.mv((await $.v(C, "P_DataModule")), "Transactions"));
        await $.stmt((await $.wcall([$t66], "GetCustomerInfo", [(await $.mv((await $.wcall([$t66], "FieldByName", ["creditid"], C)), "asInteger")), $.ref(async () => (await $.wv([$t66], "CustName", { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }, false)), async ($t67) => { await $.wset([$t66], "CustName", $t67, { get: async () => L0["custname"], set: async (v) => { L0["custname"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t66], "CustInn", { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }, false)), async ($t68) => { await $.wset([$t66], "CustInn", $t68, { get: async () => L0["custinn"], set: async (v) => { L0["custinn"] = v; }, local: true }); })], C)));
        await $.wset([$t66], "TransactionID", (await $.mv((await $.wcall([$t66], "FieldByName", ["ID"], C)), "asstring")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
        await $.wset([$t66], "Filter", $.add(" ID=", (await $.wv([$t66], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))), C);
        await $.wset([$t66], "Filtered", (await $.wv([$t66], "True", C, false)), C);
      }
      {
        const $t69 = (await $.wobj(C, "P_DataModule"));
        const $t70 = (await $.wv([$t69], "ODSValuteName", C, false));
        await $.stmt($.wcall([$t69, $t70], "Close", [], C));
        await $.stmt((await $.wcall([$t69, $t70], "SetVariable", ["valute", (await $.mv((await $.mcall((await $.wv([$t69, $t70], "Transactions", C, false)), "FieldByName", ["debitcurrencyid"])), "Value"))], C)));
        await $.mcall((await $.wv([$t69, $t70], "ODSValuteName", C, false)), "Open", []);
        await $.wset([$t69, $t70], "ValuteName", (await $.wcall([$t69, $t70], "AnsiLowerCase", [(await $.mv((await $.wcall([$t69, $t70], "FieldByName", ["Valu_name"], C)), "asstring"))], C)), { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true });
      }
      L0["withmanat"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "FieldByName", ["creditamount"])), "AsFloat"))])), 0, [0]]));
      L0["manatposition"] = (await $.call(C, "POS", ["manat", L0["withmanat"]]));
      if ($.truthy($.gt(L0["manatposition"], 0))) {
        { const $t71 = $.sub(L0["manatposition"], 1);
          L0["i"] = 1;
          let $t72 = true;
          for (;;) {
            if (!$t72) { L0["i"] = $.succ(L0["i"], 1); }
            $t72 = false;
            if (!($.ord(L0["i"]) <= $.ord($t71))) break;
            L0["nomanat"] = $.add(L0["nomanat"], (await $.idx(L0["withmanat"], [L0["i"]])));
            await $.tick();
          }
        }
      }
      L0["withcoin"] = (await $.call(C, "FloatToStr", [(await $.call(C, "Frac", [(await $.call(C, "StrToFloat", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "FieldByName", ["creditamount"])), "asstring"))]))]))]));
      if ($.truthy($.ne(L0["withcoin"], "0"))) {
        await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t73) => { L0["withcoin"] = $t73; }), 1, 2])));
        if ($.truthy($.lt((await $.call(C, "Length", [L0["withcoin"]])), 2))) {
          L0["withcoin"] = $.add(L0["withcoin"], "0");
        } else {
          if ($.truthy($.gt((await $.call(C, "Length", [L0["withcoin"]])), 2))) {
            await $.stmt((await $.call(C, "Delete", [$.ref(async () => L0["withcoin"], async ($t74) => { L0["withcoin"] = $t74; }), 3, (await $.call(C, "Length", [L0["withcoin"]]))])));
          }
        }
        L0["withcoin"] = $.add($.add(L0["withcoin"], " "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ODSValuteName")), "FieldByName", ["valu_bala"])), "asstring")));
      } else {
        L0["withcoin"] = "";
      }
      L0["valutename"] = (await $.call(C, "AnsiLowerCase", [$.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ODSValuteName")), "FieldByName", ["Valu_name"])), "asstring")), "  "), L0["withcoin"])]));
      if ($.truthy($.eq(L0["nomanat"], (await $.v(C, "EmptyStr"))))) {
        L0["nomanat"] = "0 ";
      }
      if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "P_CO_Report"))]))))) {
        await $.set(C, "P_CO_Report", (await $.mcall((await $.v(C, "TP_CO_Report")), "Create", [Self])));
      }
      await $.mcall((await $.mv((await $.v(C, "P_CO_Report")), "ODSBank")), "Open", []);
      await $.mset((await $.mv((await $.v(C, "P_CO_Report")), "QRAMMOUNT1")), "Caption", $.add(L0["nomanat"], L0["valutename"]));
      await $.mset((await $.mv((await $.v(C, "P_CO_Report")), "QRAMMOUNT2")), "Caption", $.add(L0["nomanat"], L0["valutename"]));
      await $.mcall((await $.v(C, "P_CO_Report")), "Preview", []);
    } finally {
      {
        const $t75 = (await $.mv((await $.v(C, "P_DataModule")), "Transactions"));
        await $.wset([$t75], "Filtered", (await $.wv([$t75], "False", C, false)), C);
      }
      await $.mcall((await $.mv((await $.v(C, "P_CO_Report")), "ODSBank")), "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DBGridAccountsCellClick", async function DBGridAccountsCellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "SearchAcc")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["AccNo"])), "asstring")));
  await $.mset((await $.v(C, "SearchEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["AccName"])), "asstring")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TP_Customers_Form", "N19Click", async function N19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "P_AccState", (await $.mcall((await $.v(C, "TP_AccState")), "Create", [Self])));
  {
    const $t76 = (await $.mv((await $.v(C, "P_DataModule")), "Account"));
    if ($.truthy((await $.wv([$t76], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t76], "ShowMessage", [(await $.wv([$t76], "no_selected_account", C, false))], C)));
      return L0.result;
    } else {
      {
        const $t77 = (await $.wv([$t76], "P_AccState", C, false));
        await $.stmt($.wcall([$t76, $t77], "ShowModal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "N20Click", async function N20Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "astartdate": 0, "aenddate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccTransaction", (await $.mcall((await $.v(C, "TFormAccTransaction")), "Create", [Self])));
  await $.set(C, "FormInterval", (await $.mcall((await $.v(C, "TFormInterval")), "Create", [Self])));
  {
    const $t78 = (await $.mv((await $.v(C, "P_DataModule")), "Account"));
    if ($.truthy((await $.wv([$t78], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t78], "ShowMessage", [(await $.wv([$t78], "no_selected_account", C, false))], C)));
      return L0.result;
    } else {
      await $.mcall((await $.mv((await $.wv([$t78], "P_DataModule", C, false)), "Sysdat")), "Open", []);
      {
        const $t79 = (await $.wv([$t78], "FormInterval", C, false));
        await $.mset((await $.wv([$t78, $t79], "StartDateEdit", C, false)), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.wv([$t78, $t79], "P_DataModule", C, false)), "Sysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
        await $.mset((await $.wv([$t78, $t79], "EndDateEdit", C, false)), "DateTime", (await $.mv((await $.wv([$t78, $t79], "StartDateEdit", C, false)), "DateTime")));
        if ($.truthy($.eq((await $.wv([$t78, $t79], "ShowModal", C, false)), (await $.wv([$t78, $t79], "mrOK", C, false))))) {
          await $.wset([$t78, $t79], "AStartDate", (await $.mv((await $.wv([$t78, $t79], "StartDateEdit", C, false)), "DateTime")), { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true });
          await $.wset([$t78, $t79], "AEndDate", (await $.mv((await $.wv([$t78, $t79], "EndDateEdit", C, false)), "DateTime")), { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true });
          {
            const $t80 = (await $.wv([$t78, $t79], "FormAccTransaction", C, false));
            await $.stmt((await $.wcall([$t78, $t79, $t80], "OpenDataControls", [(await $.wv([$t78, $t79, $t80], "AStartDate", { get: async () => L0["astartdate"], set: async (v) => { L0["astartdate"] = v; }, local: true }, false)), (await $.wv([$t78, $t79, $t80], "AEndDate", { get: async () => L0["aenddate"], set: async (v) => { L0["aenddate"] = v; }, local: true }, false))], C)));
            await $.stmt($.wcall([$t78, $t79, $t80], "ShowModal", [], C));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "N21Click", async function N21Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "P_AccSettings", (await $.mcall((await $.v(C, "TP_AccSettings")), "Create", [Self])));
  await $.mcall((await $.v(C, "P_AccSettings")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "N18Click", async function N18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "P_CO_Account_Form", (await $.mcall((await $.v(C, "TP_CO_Account_Form")), "Create", [Self])));
  await $.mcall((await $.v(C, "P_CO_Account_Form")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DeleteTransaction", async function DeleteTransaction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"transactionid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["transactionid"]);
  {
    const $t81 = (await $.mv((await $.v(C, "P_DataModule")), "SB_TRANSACTION"));
    await $.stmt((await $.wcall([$t81], "CallProcedure", [(await $.wv([$t81], "cs_del_transaction", C, false)), ["TransactionID", (await $.wv([$t81], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)));
  }
  return L0.result;
}, {"params": ["TransactionID"], "kind": "procedure", "ptypes": ["Longint"]});
  U.method("TP_Customers_Form", "N17Click", async function N17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "waitnextconfirm": false, "willrefresh": false, "transactionid": 0, "qaccid": 0, "qtrid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["Transaction", "delete"]])));
  L0["waitnextconfirm"] = true;
  L0["willrefresh"] = false;
  {
    const $t82 = (await $.wobj(C, "DBGridTransactions"));
    const $t83 = (await $.wv([$t82], "SelectedRows", C, false));
    const $t84 = (await $.mv((await $.wv([$t82, $t83], "DataSource", C, false)), "DataSet"));
    const $t85 = (await $.wv([$t82, $t83, $t84], "P_DataModule", C, false));
    try {
      if ($.truthy($.eq((await $.wv([$t82, $t83, $t84, $t85], "Count", C, false)), 0))) {
        await $.wset([$t82, $t83, $t84, $t85], "CurrentRowSelected", (await $.wv([$t82, $t83, $t84, $t85], "True", C, false)), C);
      }
      { const $t86 = $.sub((await $.wv([$t82, $t83, $t84, $t85], "Count", C, false)), 1);
        await $.wset([$t82, $t83, $t84, $t85], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t87 = true;
        for (;;) {
          if (!$t87) { await $.wset([$t82, $t83, $t84, $t85], "Index", $.succ((await $.wv([$t82, $t83, $t84, $t85], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t87 = false;
          if (!($.ord((await $.wv([$t82, $t83, $t84, $t85], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t86))) break;
          await $.stmt((await $.wcall([$t82, $t83, $t84, $t85], "GotoBookmark", [(await $.wcall([$t82, $t83, $t84, $t85], "Pointer", [(await $.idx((await $.wv([$t82, $t83, $t84, $t85], "Items", C, false)), [(await $.wv([$t82, $t83, $t84, $t85], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
          await $.wset([$t82, $t83, $t84, $t85], "TransactionID", (await $.mv((await $.wcall([$t82, $t83, $t84, $t85], "FieldByName", ["ID"], C)), "asInteger")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
          if ($.truthy((await $.wv([$t82, $t83, $t84, $t85], "WaitNextConfirm", { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true }, false)))) {
            { const $t88 = (await $.wcall([$t82, $t83, $t84, $t85], "MessageDlg", [(await $.wcall([$t82, $t83, $t84, $t85], "Format", ["Əməliyyat #%d Silinsin?", [(await $.wv([$t82, $t83, $t84, $t85], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))]], C)), (await $.wv([$t82, $t83, $t84, $t85], "mtConfirmation", C, false)), [(await $.wv([$t82, $t83, $t84, $t85], "mbYes", C, false)), (await $.wv([$t82, $t83, $t84, $t85], "mbNo", C, false)), (await $.wv([$t82, $t83, $t84, $t85], "mbCancel", C, false)), (await $.wv([$t82, $t83, $t84, $t85], "mbYesToAll", C, false))], 0], C));
              if ($.eq($t88, (await $.wv([$t82, $t83, $t84, $t85], "mrNo", C, false)))) {
                continue;
              }
              else if ($.eq($t88, (await $.wv([$t82, $t83, $t84, $t85], "mrCancel", C, false)))) {
                break;
              }
              else if ($.eq($t88, (await $.wv([$t82, $t83, $t84, $t85], "mrYesToAll", C, false)))) {
                if ($.truthy($.eq((await $.wcall([$t82, $t83, $t84, $t85], "MessageDlg", [(await $.wcall([$t82, $t83, $t84, $t85], "Format", ["%d sayda əməliyyat silinsin?", [$.sub((await $.wv([$t82, $t83, $t84, $t85], "Count", C, false)), (await $.wv([$t82, $t83, $t84, $t85], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)))]], C)), (await $.wv([$t82, $t83, $t84, $t85], "mtConfirmation", C, false)), [(await $.wv([$t82, $t83, $t84, $t85], "mbYes", C, false)), (await $.wv([$t82, $t83, $t84, $t85], "mbCancel", C, false))], 0], C)), (await $.wv([$t82, $t83, $t84, $t85], "mrYes", C, false))))) {
                  await $.wset([$t82, $t83, $t84, $t85], "WaitNextConfirm", (await $.wv([$t82, $t83, $t84, $t85], "False", C, false)), { get: async () => L0["waitnextconfirm"], set: async (v) => { L0["waitnextconfirm"] = v; }, local: true });
                } else {
                  continue;
                }
              }
            }
          }
          await $.mcall((await $.wv([$t82, $t83, $t84, $t85], "Application", C, false)), "ProcessMessages", []);
          {
            const $t89 = (await $.wv([$t82, $t83, $t84, $t85], "ODS_VidOPTrDel", C, false));
            await $.stmt($.wcall([$t82, $t83, $t84, $t85, $t89], "Close", [], C));
            await $.stmt((await $.wcall([$t82, $t83, $t84, $t85, $t89], "SetVariable", ["v_ID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t82, $t83, $t84, $t85, $t89], "DBGridTransactions", C, false)), "DataSource")), "DataSet")), "FieldByName", ["OperationCode"])), "asInteger"))], C)));
            await $.stmt($.wcall([$t82, $t83, $t84, $t85, $t89], "Open", [], C));
          }
          if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t82, $t83, $t84, $t85], "ODS_VidOPTrDel", C, false)), "FieldByName", ["Cnt"])), "asInteger")), 1))) {
            await $.stmt((await $.wcall([$t82, $t83, $t84, $t85], "ShowMessage", ["Bu tip əməliyyatı bu moduldan silmək olmaz"], C)));
            continue;
          }
          if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t82, $t83, $t84, $t85], "DBGridTransactions", C, false)), "SelectedRows")), "Count")), 1))) {
            try {
              await $.stmt((await $.wcall([$t82, $t83, $t84, $t85], "DeleteTransaction", [(await $.wv([$t82, $t83, $t84, $t85], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
            } catch ($t90) {
              $.rethrowControl($t90);
              $.handled($t90);
            }
          } else {
            await $.stmt((await $.wcall([$t82, $t83, $t84, $t85], "DeleteTransaction", [(await $.wv([$t82, $t83, $t84, $t85], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))], C)));
          }
          await $.wset([$t82, $t83, $t84, $t85], "WillRefresh", (await $.wv([$t82, $t83, $t84, $t85], "True", C, false)), { get: async () => L0["willrefresh"], set: async (v) => { L0["willrefresh"] = v; }, local: true });
          await $.stmt($.wcall([$t82, $t83, $t84, $t85], "SBCommit", [], C));
          await $.wset([$t82, $t83, $t84, $t85], "TransactionState", (await $.wv([$t82, $t83, $t84, $t85], "tsDelete", C, false)), C);
          await $.tick();
        }
      }
    } finally {
    }
  }
  L0["qaccid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["ID"])), "asInteger"));
  L0["qtrid"] = (await $.mv((await $.mv((await $.v(C, "P_DataModule")), "TransactionsID")), "asInteger"));
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "Open", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "Locate", ["ID", L0["qaccid"], []])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Locate", ["ID", L0["qtrid"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DBGridCustomersKeyUp", async function DBGridCustomersKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TP_Customers_Form", "DBGridCustomersTitleClick", async function DBGridCustomersTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t91 = (await $.mv((await $.v(C, "P_DataModule")), "P_Customers"));
    await $.stmt((await $.wcall([$t91], "SetVariable", ["Title", (await $.wv([$t91], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t91], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TP_Customers_Form", "DateEditKeyUp", async function DateEditKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_return"))))) {
    {
      const $t92 = (await $.wobj(C, "P_DataModule"));
      const $t93 = (await $.wv([$t92], "P_Customers", C, false));
      await $.stmt((await $.wcall([$t92, $t93], "Locate", ["OPENDATE", (await $.wcall([$t92, $t93], "Variant", [(await $.mv(((await $.wv([$t92, $t93], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text"))], C)), []], C)));
      await $.stmt($.wcall([$t92, $t93], "AccSelKliID", [], C));
      await $.mcall((await $.mv((await $.wv([$t92, $t93], "TransactionsData", C, false)), "DataSet")), "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TP_Customers_Form", "DBGridAccountsKeyUp", async function DBGridAccountsKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_return"))))) {
    await $.stmt((await $.call(C, "DBGridAccountsCellClick", [(await $.idx((await $.mv((await $.v(C, "DBGridAccounts")), "Columns")), [0]))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TP_Customers_Form", "EditPassp_numberKeyPress", async function EditPassp_numberKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Customers_Form", "EditPassp_numberKeyUp", async function EditPassp_numberKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "EditPassp_number")), "Text")), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Locate", ["Passp_number", (await $.mv((await $.v(C, "EditPassp_number")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TP_Customers_Form", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Customers_Form", "EditIDKeyUp", async function EditIDKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TP_Customers_Form", "EditSerialKeyUp", async function EditSerialKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "EditSerial")), "Text")), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "Locate", ["Passport", (await $.mv((await $.v(C, "EditSerial")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TP_Customers_Form", "EditPASSPINKeyPress", async function EditPASSPINKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Customers_Form", "EditCUST_NAMEKeyPress", async function EditCUST_NAMEKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "EditNAME1")), "Text", (await $.mv((await $.v(C, "EditCUST_NAME")), "Text")));
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [(await $.v(C, "EditNAME1"))])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Customers_Form", "EditCUST_NAMEKeyUp", async function EditCUST_NAMEKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TP_Customers_Form", "Ordernfo1Click", async function Ordernfo1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormOrderInfo"))]))))) {
    await $.set(C, "FormOrderInfo", (await $.mcall((await $.v(C, "TFormOrderInfo")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormOrderInfo")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DBGridAccountsDblClick", async function DBGridAccountsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmAccInfo", (await $.mcall((await $.v(C, "TfrmAccInfo")), "Create", [Self])));
  {
    const $t94 = (await $.wobj(C, "frmAccInfo"));
    const $t95 = (await $.wv([$t94], "P_DataModule", C, false));
    await $.wset([$t94, $t95], "AccountID", (await $.mv((await $.mcall((await $.wv([$t94, $t95], "Account", C, false)), "FieldByName", ["ID"])), "asInteger")), C);
    await $.stmt($.wcall([$t94, $t95], "ShowAccInfo", [], C));
    await $.stmt($.wcall([$t94, $t95], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "DBGridTransactionsDblClick", async function DBGridTransactionsDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmTrView", (await $.mcall((await $.v(C, "TfrmTrView")), "Create", [Self])));
  {
    const $t96 = (await $.wobj(C, "frmTrView"));
    const $t97 = (await $.wv([$t96], "P_DataModule", C, false));
    await $.wset([$t96, $t97], "TrID", (await $.mv((await $.mcall((await $.wv([$t96, $t97], "Transactions", C, false)), "FieldByName", ["ID"])), "asInteger")), C);
    await $.stmt($.wcall([$t96, $t97], "ShowTrInfo", [], C));
    await $.stmt($.wcall([$t96, $t97], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "PopMenuTransactionsPopup", async function PopMenuTransactionsPopup(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "Open", []);
  await $.mset((await $.v(C, "N6")), "Enabled", (await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["DEBITBALCN"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["CASHBALANCENATIONAL"])), "asInteger"))])))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["DEBITBALCN"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["CASHBALANCEENGLISH"])), "asInteger"))])))))));
  await $.mset((await $.v(C, "N23")), "Enabled", (await $.or_(((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["DEBITBALCN"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["CASHBALANCENATIONAL"])), "asInteger"))])))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["DEBITBALCN"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["CASHBALANCEENGLISH"])), "asInteger"))]))))))), async () => ((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["CREDITBALCN"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["CASHBALANCENATIONAL"])), "asInteger"))])))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "FieldByName", ["CREDITBALCN"])), "asstring")), (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["CASHBALANCEENGLISH"])), "asInteger"))]))))))))));
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "Qeytlr1Click", async function Qeytlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "note_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["id"])), "Asstring")));
  await $.stmt((await $.call(C, "LoadPlugin3", ["Sb_General.bpl", "note", (await $.v(C, "note_id")), ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "Qohumlar1Click", async function Qohumlar1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "tacc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["id"])), "Asstring")));
  if ($.truthy($.ne((await $.v(C, "tacc")), ""))) {
    await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "Cust_contact_relatives", (await $.v(C, "tacc"))])));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["    Heçbir məlumat seçilməyib  ! "])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "sas1Click", async function sas1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["  Hecbir hesab qeyd edilmeyib   !"])));
    return L0.result;
  } else {
    await $.set(C, "DB_HesabID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["id"])), "Asstring")));
  }
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "DB_Hesab", (await $.v(C, "DB_HesabID"))])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridTransactions")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "N23Click", async function N23Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "transactionid": '', "saveplace": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "Open", []);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "PQRep_Order"))]))))) {
    await $.set(C, "PQRep_Order", (await $.mcall((await $.v(C, "TPQRep_Order")), "Create", [Self])));
  }
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QuickReportORDER"))]))))) {
    await $.set(C, "QuickReportORDER", (await $.mcall((await $.v(C, "TQuickReportORDER")), "Create", [Self])));
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["HANDOVER"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape6")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel5")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape37")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel47")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape23")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel23")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["HANDOVER"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape6")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel5")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape37")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel47")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape23")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel23")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Chief"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape2")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel48")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape38")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel10")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape24")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel28")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Chief"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape2")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel48")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape38")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel10")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape24")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel28")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Operator"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape40")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel49")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape25")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel31")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape4")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel11")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Operator"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape40")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel49")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape25")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel31")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape4")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel11")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Cashier"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape41")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel50")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape26")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel32")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape5")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel12")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Cashier"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape41")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel50")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape26")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel32")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape5")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel12")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Controller"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape82")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel83")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape84")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel85")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape86")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel87")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Controller"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape82")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel83")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape84")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel85")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRShape86")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "PQRep_Order")), "QRLabel87")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Amount"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape3")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel11")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape29")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel47")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape18")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel12")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["Amount"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape3")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel11")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape29")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel47")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape18")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel12")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["chief_out"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape19")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel14")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape32")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel9")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape33")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel39")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["chief_out"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape19")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel14")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape32")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel9")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape33")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel39")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["accountant"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape31")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel16")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape30")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel40")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape20")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel10")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["accountant"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape31")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel16")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape30")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel40")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape20")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel10")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["operator_out"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape35")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel50")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape34")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel42")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape5")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel4")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["operator_out"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape35")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel50")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape34")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel42")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape5")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel4")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["cashier_out"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape21")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel46")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape14")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel3")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape13")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel52")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["cashier_out"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape21")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel46")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape14")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel3")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape13")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel52")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["controller_out"])), "asstring"))])), "1"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape91")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel90")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape93")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel92")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape95")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel94")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "FieldByName", ["controller_out"])), "asstring"))])), "0"))) {
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape91")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel90")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape93")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel92")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRShape95")), "Enabled", false);
    await $.mset((await $.mv((await $.v(C, "QuickReportORDER")), "QRLabel94")), "Enabled", false);
  }
  try {
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ODSLogo")), "Open", []);
    {
      const $t98 = (await $.mv((await $.v(C, "P_DataModule")), "Transactions"));
      await $.wset([$t98], "TransactionID", (await $.mv((await $.wcall([$t98], "FieldByName", ["ID"], C)), "asstring")), { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true });
      await $.wset([$t98], "Filter", $.add(" ID=", (await $.wv([$t98], "TransactionID", { get: async () => L0["transactionid"], set: async (v) => { L0["transactionid"] = v; }, local: true }, false))), C);
      await $.wset([$t98], "Filtered", (await $.wv([$t98], "True", C, false)), C);
      if ($.truthy((await $.wcall([$t98], "IOCheck", [(await $.mv((await $.wcall([$t98], "FieldByName", ["debitbalance"], C)), "asInteger"))], C)))) {
        await $.stmt((await $.wcall([$t98], "CreateOrderRpt", [(await $.wv([$t98], "False", C, false)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t98], "P_DataModule", C, false)), "customers")), "FieldByName", ["ID"])), "asInteger"))], C)));
      } else {
        await $.stmt((await $.wcall([$t98], "CreateOrderRpt", [(await $.wv([$t98], "True", C, false)), (await $.mv((await $.mcall((await $.mv((await $.wv([$t98], "P_DataModule", C, false)), "customers")), "FieldByName", ["ID"])), "asInteger"))], C)));
      }
    }
  } finally {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "GotoBookmark", [(await $.call(C, "Pointer", [L0["saveplace"]]))])));
    await $.mset((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "Filtered", false);
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "ODSLogo")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "settings")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "IOCheck", async function IOCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"reference": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["reference"]);
  {
    const $t99 = (await $.mv((await $.v(C, "P_DataModule")), "OPCash"));
    await $.wset([$t99], "Result", (await $.wcall([$t99], "CallBooleanFunction", ["CheckOICome", [(await $.wv([$t99], "Reference", { get: async () => L0["reference"], set: async (v) => { L0["reference"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["Reference"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TP_Customers_Form", "GetBankInfo", async function GetBankInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"bankname": $.asRef(p0), "bankinn": $.asRef(p1), result: undefined};
  {
    const $t100 = (await $.mv((await $.v(C, "P_DataModule")), "OPCash"));
    await $.stmt((await $.wcall([$t100], "CallProcedure", ["GetBankInfo", [(await $.wv([$t100], "BankName", { get: async () => await L0["bankname"].get(), set: async (v) => { await L0["bankname"].set(v); }, local: true }, false)), (await $.wv([$t100], "BankInn", { get: async () => await L0["bankinn"].get(), set: async (v) => { await L0["bankinn"].set(v); }, local: true }, false))]], C)));
    await $.wset([$t100], "BankName", (await $.wcall([$t100], "GetParameter", [0], C)), { get: async () => await L0["bankname"].get(), set: async (v) => { await L0["bankname"].set(v); }, local: true });
    await $.wset([$t100], "BankInn", (await $.wcall([$t100], "GetParameter", [1], C)), { get: async () => await L0["bankinn"].get(), set: async (v) => { await L0["bankinn"].set(v); }, local: true });
  }
  return L0.result;
}, {"params": ["BankName", "BankInn"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TP_Customers_Form", "CreateOrderRpt", async function CreateOrderRpt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"iocome": $.copyArg(p0), "custid": $.copyArg(p1), result: undefined, "bankname": '', "bankinn": '', "custname": '', "custinn": '', "v": null, "withmanat": '', "withcoin": '', "manatposition": 0, "i": 0, "valutename": '', "nomanat": ''};
  await $.fixArgs(L0, ["iocome", "custid"]);
  L0["v"] = (await $.call(C, "Integer", [(await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "FieldByName", ["TRANSACTIONDATE"])), "AsDateTime"))]))]));
  L0["nomanat"] = "";
  await $.stmt((await $.call(C, "GetBankInfo", [$.ref(async () => L0["bankname"], async ($t101) => { L0["bankname"] = $t101; }), $.ref(async () => L0["bankinn"], async ($t102) => { L0["bankinn"] = $t102; })])));
  await $.stmt((await $.call(C, "GetCustomerInfo", [L0["custid"], $.ref(async () => L0["custname"], async ($t103) => { L0["custname"] = $t103; }), $.ref(async () => L0["custinn"], async ($t104) => { L0["custinn"] = $t104; })])));
  if ($.truthy($.not(L0["iocome"]))) {
    L0["withmanat"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "FieldByName", ["creditamount"])), "AsFloat"))])), 0, [0]]));
  } else {
    L0["withmanat"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "trunc", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Transactions")), "FieldByName", ["debitamount"])), "AsFloat"))])), 0, [0]]));
  }
  L0["manatposition"] = (await $.call(C, "POS", ["manat", L0["withmanat"]]));
  if ($.truthy($.gt(L0["manatposition"], 0))) {
    { const $t105 = $.sub(L0["manatposition"], 1);
      L0["i"] = 1;
      let $t106 = true;
      for (;;) {
        if (!$t106) { L0["i"] = $.succ(L0["i"], 1); }
        $t106 = false;
        if (!($.ord(L0["i"]) <= $.ord($t105))) break;
        L0["nomanat"] = $.add($.add(L0["nomanat"], ""), (await $.idx(L0["withmanat"], [L0["i"]])));
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq(L0["nomanat"], (await $.v(C, "EmptyStr"))))) {
    L0["nomanat"] = "0 ";
  }
  {
    const $t107 = (await $.wobj(C, "P_DataModule"));
    await $.mcall((await $.wv([$t107], "ODSValuteName", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t107], "ODSValuteName", C, false)), "SetVariable", ["valute", (await $.mv((await $.mcall((await $.wv([$t107], "Transactions", C, false)), "FieldByName", ["DEBITCURRENCYID"])), "Value"))])));
    await $.mcall((await $.wv([$t107], "ODSValuteName", C, false)), "Open", []);
    await $.wset([$t107], "WithCoin", (await $.wcall([$t107], "CurrToStr", [(await $.wcall([$t107], "Frac", [(await $.wcall([$t107], "StrToFloat", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t107], "P_DataModule", C, false)), "Transactions")), "FieldByName", ["DEBITAMOUNT"])), "asstring"))], C))], C))], C)), { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true });
    if ($.truthy($.ne((await $.wv([$t107], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false)), "0"))) {
      await $.stmt((await $.wcall([$t107], "Delete", [$.ref(async () => (await $.wv([$t107], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false)), async ($t108) => { await $.wset([$t107], "WithCoin", $t108, { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }); }), 1, 2], C)));
      if ($.truthy($.lt((await $.wcall([$t107], "Length", [(await $.wv([$t107], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false))], C)), 2))) {
        await $.wset([$t107], "WithCoin", $.add((await $.wv([$t107], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false)), "0"), { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true });
      } else {
        if ($.truthy($.gt((await $.wcall([$t107], "Length", [(await $.wv([$t107], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false))], C)), 2))) {
          await $.stmt((await $.wcall([$t107], "Delete", [$.ref(async () => (await $.wv([$t107], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false)), async ($t109) => { await $.wset([$t107], "WithCoin", $t109, { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }); }), 3, (await $.wcall([$t107], "Length", [(await $.wv([$t107], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false))], C))], C)));
        }
      }
      await $.wset([$t107], "ValuteName", ($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t107], "ODSValuteName", C, false)), "FieldByName", ["Valu_name"])), "asstring")), " "), (await $.wv([$t107], "WithCoin", { get: async () => L0["withcoin"], set: async (v) => { L0["withcoin"] = v; }, local: true }, false))), " "), (await $.mv((await $.mcall((await $.wv([$t107], "ODSValuteName", C, false)), "FieldByName", ["valu_bala"])), "asstring")))), { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true });
    } else {
      await $.wset([$t107], "ValuteName", ((await $.mv((await $.mcall((await $.wv([$t107], "ODSValuteName", C, false)), "FieldByName", ["Valu_name"])), "asstring"))), { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true });
    }
  }
  if ($.truthy($.not(L0["iocome"]))) {
    {
      const $t110 = (await $.wobj(C, "PQRep_Order"));
      await $.mcall((await $.mv((await $.wv([$t110], "P_DataModule", C, false)), "ODSCashInfo")), "Refresh", []);
      await $.mcall((await $.mv((await $.wv([$t110], "P_DataModule", C, false)), "Transactions")), "Refresh", []);
      await $.mset((await $.wv([$t110], "QRLBankName", C, false)), "Caption", (await $.wv([$t110], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t110], "QRLBankName1", C, false)), "Caption", (await $.wv([$t110], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t110], "QRLBankName2", C, false)), "Caption", (await $.wv([$t110], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t110], "QRLBankInn", C, false)), "Caption", (await $.wv([$t110], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t110], "QRLBankInn1", C, false)), "Caption", (await $.wv([$t110], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t110], "QRLBankInn2", C, false)), "Caption", (await $.wv([$t110], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t110], "QRInn", C, false)), "Enabled", (await $.wv([$t110], "False", C, false)));
      await $.mset((await $.wv([$t110], "QRInn1", C, false)), "Enabled", (await $.wv([$t110], "False", C, false)));
      await $.mset((await $.wv([$t110], "QRInn2", C, false)), "Enabled", (await $.wv([$t110], "False", C, false)));
      await $.mset((await $.wv([$t110], "QRLAmount", C, false)), "Caption", $.add($.add((await $.wv([$t110], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t110], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t110], "QRLAmount1", C, false)), "Caption", $.add($.add((await $.wv([$t110], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t110], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t110], "QRLAmount2", C, false)), "Caption", $.add($.add((await $.wv([$t110], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t110], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.stmt($.wcall([$t110], "Preview", [], C));
    }
  } else {
    {
      const $t111 = (await $.wobj(C, "QuickReportORDER"));
      await $.mcall((await $.mv((await $.wv([$t111], "P_DataModule", C, false)), "ODSCashInfo")), "Refresh", []);
      await $.mcall((await $.mv((await $.wv([$t111], "P_DataModule", C, false)), "Transactions")), "Refresh", []);
      await $.mset((await $.wv([$t111], "QRLBankInn", C, false)), "Caption", (await $.wv([$t111], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t111], "QRLBankInn1", C, false)), "Caption", (await $.wv([$t111], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t111], "QRLBankInn2", C, false)), "Caption", (await $.wv([$t111], "BankInn", { get: async () => L0["bankinn"], set: async (v) => { L0["bankinn"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t111], "QRLBankName", C, false)), "Caption", (await $.wv([$t111], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t111], "QRLBankName1", C, false)), "Caption", (await $.wv([$t111], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t111], "QRLBankName2", C, false)), "Caption", (await $.wv([$t111], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t111], "QRInn1", C, false)), "Enabled", (await $.wv([$t111], "False", C, false)));
      await $.mset((await $.wv([$t111], "QRInn2", C, false)), "Enabled", (await $.wv([$t111], "False", C, false)));
      await $.mset((await $.wv([$t111], "QRInn3", C, false)), "Enabled", (await $.wv([$t111], "False", C, false)));
      await $.mset((await $.wv([$t111], "QRLAmmount", C, false)), "Caption", $.add($.add((await $.wv([$t111], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t111], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t111], "QRLAmmount1", C, false)), "Caption", $.add($.add((await $.wv([$t111], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t111], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.mset((await $.wv([$t111], "QRLAmmount2", C, false)), "Caption", $.add($.add((await $.wv([$t111], "NoManat", { get: async () => L0["nomanat"], set: async (v) => { L0["nomanat"] = v; }, local: true }, false)), ""), (await $.wv([$t111], "ValuteName", { get: async () => L0["valutename"], set: async (v) => { L0["valutename"] = v; }, local: true }, false))));
      await $.stmt($.wcall([$t111], "Preview", [], C));
    }
  }
  return L0.result;
}, {"params": ["IOCome", "CustID"], "kind": "procedure", "ptypes": ["Boolean", "Longint"]});
  U.method("TP_Customers_Form", "N24Click", async function N24Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Templates")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Bookmarks")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Fields")), "Open", []);
  await $.mcall((await $.v(C, "Ph_CO_BookmarkSetupFrom")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "N25Click", async function N25Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_account"))])));
    return L0.result;
  } else {
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CustomerInfoDataSet")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CustomerInfoDataSet")), "SetVariable", ["ContractID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGridAccounts")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "asInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CustomerInfoDataSet")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Templates")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Templates")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "P_CO_frmWReportUnit")), "Ph_CO_frmWReport")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "TransDebitClick", async function TransDebitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RichEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["TipAcc"])), "asstring")));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_account"))])));
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["D", 0, (await $.call(C, "Length", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])), []])), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "DebetArest_On_Account"))])));
      return L0.result;
    } else {
      if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "P_Transaction"))]))))) {
        await $.set(C, "P_Transaction", (await $.mcall((await $.v(C, "TP_Transaction")), "Create", [Self])));
      }
      {
        const $t112 = (await $.wobj(C, "P_Transaction"));
        await $.wset([$t112], "TransTypeIncOutDC", 3, C);
        await $.stmt($.wcall([$t112], "ShowModal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Customers_Form", "TransCreditClick", async function TransCreditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RichEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Account")), "FieldByName", ["TipAcc"])), "asstring")));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_DataModule")), "Account")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_account"))])));
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mcall((await $.v(C, "RichEdit1")), "FindText", ["C", 0, (await $.call(C, "Length", [(await $.mv((await $.v(C, "RichEdit1")), "Text"))])), []])), (-(1))))) {
      await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "KreditArest_On_Account"))])));
      return L0.result;
    } else {
      if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "P_Transaction"))]))))) {
        await $.set(C, "P_Transaction", (await $.mcall((await $.v(C, "TP_Transaction")), "Create", [Self])));
      }
      {
        const $t113 = (await $.wobj(C, "P_Transaction"));
        const $t114 = (await $.wv([$t113], "P_DataModule", C, false));
        await $.wset([$t113, $t114], "TransTypeIncOutDC", 4, C);
        await $.stmt($.wcall([$t113, $t114], "ShowModal", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
