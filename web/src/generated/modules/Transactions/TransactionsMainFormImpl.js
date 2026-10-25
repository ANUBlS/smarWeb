// Generated from TransactionsMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TransactionsMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ExtCtrls", "Db", "OracleData", "Menus", "ImgList", "ActnList", "Mask", "DBCtrls", "StdCtrls", "Grids", "DBGrids", "CurrencyEdit", "DBViewComboBox", "ComCtrls", "ToolWin", "Buttons", "ActiveX", "AxCtrls", "Transactions_TLB", "StdVcl", "SBPlgAx50_TLB", "SBSrvIntf", "SBTransaction", "HintBox", "SearchCombo", "ComObj", "ComServ", "TransactionPropertiesForm_Unit", "TransactionsDataModuleImpl", "TrDescrForm_Unit", "SBCore", "TemporaryTransactionCommitFormImpl", "SBSettings"]);
  const C = [U];
  U.defClass("TTransactionsMainForm", "TActiveForm", {"trsactionlist": {"name": "TrsActionList", "type": "TActionList"}, "addtransaction": {"name": "AddTransaction", "type": "TAction"}, "edittransaction": {"name": "EditTransaction", "type": "TAction"}, "deletetransaction": {"name": "DeleteTransaction", "type": "TAction"}, "refreshaction": {"name": "RefreshAction", "type": "TAction"}, "togglefilteraction": {"name": "ToggleFilterAction", "type": "TAction"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "n1": {"name": "N1", "type": "TMenuItem"}, "edittransaction1": {"name": "EditTransaction1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "filtergb": {"name": "FilterGB", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "bevel2": {"name": "Bevel2", "type": "TBevel"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "resetfilter": {"name": "ResetFilter", "type": "TAction"}, "usefilter": {"name": "UseFilter", "type": "TAction"}, "controlbar1": {"name": "ControlBar1", "type": "TControlBar"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "pagecontrol2": {"name": "PageControl2", "type": "TPageControl"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "label2": {"name": "Label2", "type": "TLabel"}, "debitbalancecb": {"name": "DebitBalanceCB", "type": "TDBViewComboBox"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "debitaccountcb": {"name": "DebitAccountCB", "type": "TDBViewComboBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "debitcurrencycb": {"name": "DebitCurrencyCB", "type": "TDBViewComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "pagecontrol3": {"name": "PageControl3", "type": "TPageControl"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "dbtext3": {"name": "DBText3", "type": "TDBText"}, "label5": {"name": "Label5", "type": "TLabel"}, "creditbalancecb": {"name": "CreditBalanceCB", "type": "TDBViewComboBox"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "dbtext4": {"name": "DBText4", "type": "TDBText"}, "creditaccountcb": {"name": "CreditAccountCB", "type": "TDBViewComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "creditcurrencycb": {"name": "CreditCurrencyCB", "type": "TDBViewComboBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "filteractionlist": {"name": "FilterActionList", "type": "TActionList"}, "filternationalcurrency": {"name": "FilterNationalCurrency", "type": "TAction"}, "filterforeigncurrency": {"name": "FilterForeignCurrency", "type": "TAction"}, "filtermultycurrency": {"name": "FilterMultyCurrency", "type": "TAction"}, "filterratedifference": {"name": "FilterRateDifference", "type": "TAction"}, "filterprofitdebit": {"name": "FilterProfitDebit", "type": "TAction"}, "filtertransactionsselected": {"name": "FilterTransactionsSelected", "type": "TAction"}, "filterdebituse": {"name": "FilterDebitUse", "type": "TAction"}, "filtercredituse": {"name": "FilterCreditUse", "type": "TAction"}, "filtertransactionsall": {"name": "FilterTransactionsAll", "type": "TAction"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "bevel3": {"name": "Bevel3", "type": "TBevel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "toolbar3": {"name": "ToolBar3", "type": "TToolBar"}, "transactionidsearchedit": {"name": "TransactionIDSearchEdit", "type": "TEdit"}, "transactiondebitaccnosearchedit": {"name": "TransactionDebitAccNoSearchEdit", "type": "TEdit"}, "transactiondebetcurrencysearchedit": {"name": "TransactionDebetCurrencySearchEdit", "type": "TEdit"}, "transactioncreditaccnosearchedit": {"name": "TransactionCreditAccNoSearchEdit", "type": "TEdit"}, "transactioncreditcurrencysearchedit": {"name": "TransactionCreditCurrencySearchEdit", "type": "TEdit"}, "transactiondebitamountsearchedit": {"name": "TransactionDebitAmountSearchEdit", "type": "TEdit"}, "transactioncreditamountsearchedit": {"name": "TransactionCreditAmountSearchEdit", "type": "TEdit"}, "browsegrid": {"name": "BrowseGrid", "type": "TDBGrid"}, "debitaccountdata": {"name": "DebitAccountData", "type": "TOracleDataSet"}, "debitaccountdataid": {"name": "DebitAccountDataID", "type": "TFloatField"}, "debitaccountdataaccountno": {"name": "DebitAccountDataACCOUNTNO", "type": "TStringField"}, "debitaccountdataname": {"name": "DebitAccountDataNAME", "type": "TStringField"}, "debitaccountssource": {"name": "DebitAccountsSource", "type": "TDataSource"}, "creditaccountdata": {"name": "CreditAccountData", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "stringfield1": {"name": "StringField1", "type": "TStringField"}, "stringfield2": {"name": "StringField2", "type": "TStringField"}, "creditaccountssource": {"name": "CreditAccountsSource", "type": "TDataSource"}, "debitbalancedata": {"name": "DebitBalanceData", "type": "TOracleDataSet"}, "debitbalancesource": {"name": "DebitBalanceSource", "type": "TDataSource"}, "creditbalancesource": {"name": "CreditBalanceSource", "type": "TDataSource"}, "creditbalancedata": {"name": "CreditBalanceData", "type": "TOracleDataSet"}, "debitcurrencydata": {"name": "DebitCurrencyData", "type": "TOracleDataSet"}, "debitcurrency": {"name": "DebitCurrency", "type": "TDataSource"}, "creditcurrency": {"name": "CreditCurrency", "type": "TDataSource"}, "creditcurrencydata": {"name": "CreditCurrencyData", "type": "TOracleDataSet"}, "tabsheet7": {"name": "TabSheet7", "type": "TTabSheet"}, "filterdebitamount": {"name": "FilterDebitAmount", "type": "TAction"}, "filtercreditamount": {"name": "FilterCreditAmount", "type": "TAction"}, "filterlamount": {"name": "FilterLAmount", "type": "TAction"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "radiobutton3": {"name": "RadioButton3", "type": "TRadioButton"}, "radiobutton4": {"name": "RadioButton4", "type": "TRadioButton"}, "radiobutton5": {"name": "RadioButton5", "type": "TRadioButton"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "amountedit": {"name": "AmountEdit", "type": "TCurrencyEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "lessbutton": {"name": "LessButton", "type": "TSpeedButton"}, "equalbutton": {"name": "EqualButton", "type": "TSpeedButton"}, "morebutton": {"name": "MoreButton", "type": "TSpeedButton"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "filteramountuse": {"name": "FilterAmountUse", "type": "TAction"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "filteramountapply": {"name": "FilterAmountApply", "type": "TAction"}, "notequalbutton": {"name": "NotEqualButton", "type": "TSpeedButton"}, "tabsheet8": {"name": "TabSheet8", "type": "TTabSheet"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "listbox1": {"name": "ListBox1", "type": "TListBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "listbox2": {"name": "ListBox2", "type": "TListBox"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "orderaddfield": {"name": "OrderAddField", "type": "TAction"}, "orderremovefield": {"name": "OrderRemoveField", "type": "TAction"}, "orderfieldup": {"name": "OrderFieldUp", "type": "TAction"}, "orderfielddown": {"name": "OrderFieldDown", "type": "TAction"}, "committransaction": {"name": "CommitTransaction", "type": "TAction"}, "committransaction1": {"name": "CommitTransaction1", "type": "TMenuItem"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "filtercommited": {"name": "FilterCommited", "type": "TAction"}, "filterrejected": {"name": "FilterRejected", "type": "TAction"}, "filterdelayed": {"name": "FilterDelayed", "type": "TAction"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "rejecttransaction": {"name": "RejectTransaction", "type": "TAction"}, "logmemo": {"name": "LogMemo", "type": "TMemo"}, "hintspanel": {"name": "HintsPanel", "type": "TPanel"}, "rejectreasonpanel": {"name": "RejectReasonPanel", "type": "TPanel"}, "rejectreasondbedit": {"name": "RejectReasonDBEdit", "type": "TDBEdit"}, "destinationpanel": {"name": "DestinationPanel", "type": "TPanel"}, "destinationedit": {"name": "DestinationEdit", "type": "TDBEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "rejectedpaintbox": {"name": "RejectedPaintBox", "type": "TPaintBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "selectallaction": {"name": "SelectAllAction", "type": "TAction"}, "n4": {"name": "N4", "type": "TMenuItem"}, "selectallaction1": {"name": "SelectAllAction1", "type": "TMenuItem"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "checkbox9": {"name": "CheckBox9", "type": "TCheckBox"}, "checkbox10": {"name": "CheckBox10", "type": "TCheckBox"}, "checkbox11": {"name": "CheckBox11", "type": "TCheckBox"}, "reject1": {"name": "Reject1", "type": "TMenuItem"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "datepanel": {"name": "DatePanel", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "systemdatelabel": {"name": "SystemDateLabel", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "fromdateedit": {"name": "FromDateEdit", "type": "TDateTimePicker"}, "todateedit": {"name": "ToDateEdit", "type": "TDateTimePicker"}, "tabsheet9": {"name": "TabSheet9", "type": "TTabSheet"}, "orderfieldcb": {"name": "OrderFieldCB", "type": "TComboBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "transactiontransactiondatesearchedit": {"name": "TransactionTransactionDateSearchEdit", "type": "TEdit"}, "transactionlamountsearchedit": {"name": "TransactionLAmountSearchEdit", "type": "TEdit"}, "firstrec": {"name": "FirstRec", "type": "TAction"}, "lastrec": {"name": "LastRec", "type": "TAction"}, "n5": {"name": "N5", "type": "TMenuItem"}, "firstrec1": {"name": "FirstRec1", "type": "TMenuItem"}, "lastrec1": {"name": "LastRec1", "type": "TMenuItem"}, "hintbox": {"name": "HintBox", "type": "THintBox"}, "commisionviewer": {"name": "CommisionViewer", "type": "TDBGrid"}, "popupmenu2": {"name": "PopupMenu2", "type": "TPopupMenu"}, "n6": {"name": "N6", "type": "TMenuItem"}, "actioncommision": {"name": "ActionCommision", "type": "TAction"}, "n7": {"name": "N7", "type": "TMenuItem"}, "splitter1": {"name": "Splitter1", "type": "TSplitter"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "scbcfilial": {"name": "scbCFilial", "type": "TSearchCombo"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "scbdfilial": {"name": "scbDFilial", "type": "TSearchCombo"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "scboperator": {"name": "scbOperator", "type": "TSearchCombo"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "fjustcreated": {"name": "FJustCreated", "type": "Boolean"}, "fevents": {"name": "FEvents", "type": "ITransactionsMainFormEvents"}, "frefreshonfilterchange": {"name": "FRefreshOnFilterChange", "type": "Boolean"}, "famountcondition": {"name": "FAmountCondition", "type": "String"}, "fviewmode": {"name": "FViewMode", "type": "Boolean"}, "fdelayedbydefault": {"name": "FDelayedByDefault", "type": "Boolean"}, "fselectionchanged": {"name": "FSelectionChanged", "type": "array"}, "fcurrentdateonly": {"name": "FCurrentDateOnly", "type": "Boolean"}, "ffromdate": {"name": "FFromDate", "type": "TDateTime"}, "ftodate": {"name": "FToDate", "type": "TDateTime"}, "fcurrentdate": {"name": "FCurrentDate", "type": "TDateTime"}, "fupdatechangemode": {"name": "FUpdateChangeMode", "type": "Boolean"}, "flastallowtransactionupdate": {"name": "FLastAllowTransactionUpdate", "type": "Boolean"}, "iscommisiontransaction": {"name": "isCommisionTransaction", "type": "boolean"}, "factionfirstlyexecute": {"name": "FActionFirstlyExecute", "type": "boolean"}}, {"refreshonfilterchange": {"name": "RefreshOnFilterChange", "read": "FRefreshOnFilterChange", "write": "FRefreshOnFilterChange"}, "viewmode": {"name": "ViewMode", "read": "FViewMode", "write": "SetViewMode"}, "currentdateonly": {"name": "CurrentDateOnly", "read": "FCurrentDateOnly", "write": "SetCurrentDateOnly"}});
  U.fieldInit("TTransactionsMainForm", "fselectionchanged", () => $.sarr());
  U.init(async () => {
    U.const("FlagSet_Commited", 0);
    U.const("FlagSet_Rejected", 1);
    U.const("MaxFlagSet", 2);
    U.const("FlagSets", [[(await $.v(C, "atsDelayed")), (await $.v(C, "atsRejected"))], [(await $.v(C, "atsDelayed")), (await $.v(C, "atsRejected"))]]);
  });
  U.method("TTransactionsMainForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TTransactionsMainForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TTransactionsMainForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TTransactionsMainForm", "Initialize", null, arguments);
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
  U.method("TTransactionsMainForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTransactionsMainForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TTransactionsMainForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionsMainForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionsMainForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TTransactionsMainForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTransactionsMainForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TTransactionsMainForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TTransactionsMainForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionsMainForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionsMainForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionsMainForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TTransactionsMainForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TTransactionsMainForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionsMainForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TTransactionsMainForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TTransactionsMainForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionsMainForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TTransactionsMainForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FRefreshOnFilterChange", true);
  await $.set(C, "FActionFirstlyExecute", true);
  { const $t1 = $.sub((await $.v(C, "MaxFlagSet")), 1);
    L0["index"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["index"] = $.succ(L0["index"], 1); }
      $t2 = false;
      if (!($.ord(L0["index"]) <= $.ord($t1))) break;
      { const $t3 = await $.iset((await $.v(C, "FSelectionChanged")), [L0["index"]], true); if ($t3 !== undefined) { await $.set(C, "FSelectionChanged", $t3); } }
      await $.tick();
    }
  }
  await $.set(C, "FUpdateChangeMode", true);
  await $.set(C, "TrDescrForm", (await $.mcall((await $.v(C, "TTrDescrForm")), "Create", [Self])));
  await $.set(C, "TransactionsDataModule", (await $.mcall((await $.v(C, "TTransactionsDataModule")), "Create", [null])));
  await $.mset((await $.v(C, "TransactionsDataModule")), "MainForm", Self);
  await $.set(C, "FJustCreated", true);
  await $.set(C, "TransactionPropertiesForm", (await $.mcall((await $.v(C, "TTransactionPropertiesForm")), "Create", [null])));
  await $.set(C, "FFromDate", (-(1)));
  await $.set(C, "FToDate", (-(1)));
  await $.mset((await $.v(C, "SystemDateLabel")), "Caption", (await $.call(C, "DateToStr", [(await $.v(C, "Sb_GetSystemDate"))])));
  await $.mset((await $.v(C, "FromDateEdit")), "DateTime", (await $.v(C, "Sb_GetSystemDate")));
  await $.stmt((await $.mcall((await $.v(C, "FromDateEdit")), "OnChange", [(await $.v(C, "FromDateEdit"))])));
  await $.mset((await $.v(C, "ToDateEdit")), "DateTime", (await $.mv((await $.v(C, "FromDateEdit")), "DateTime")));
  await $.stmt((await $.mcall((await $.v(C, "ToDateEdit")), "OnChange", [(await $.v(C, "ToDateEdit"))])));
  await $.set(C, "FDelayedByDefault", (await $.call(C, "Sb_GetOption", ["SBTransactionsDelayedByDefault"])));
  await $.mset((await $.v(C, "TransactionsDataModule")), "TransactionsDelayedByDefault", (await $.v(C, "FDelayedByDefault")));
  await $.mset((await $.v(C, "OrderFieldCB")), "ItemIndex", 0);
  await $.set(C, "FCurrentDate", (await $.call(C, "Sb_GetSystemDate", [])));
  await $.set(C, "FRefreshOnFilterChange", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "ActiveFormActivate", async function ActiveFormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.v(C, "FJustCreated"))))) {
    await $.set(C, "FJustCreated", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "ActiveFormDestroy", async function ActiveFormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "TransactionPropertiesForm")), "Release", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "AddTransactionExecute", async function AddTransactionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "TransactionPropertiesForm"));
    await $.wset([$t4], "TransactionDate", (await $.mv((await $.wv([$t4], "ToDateEdit", C, false)), "DateTime")), C);
    if ($.truthy((await $.wv([$t4], "New", C, false)))) {
      await $.stmt($.wcall([$t4], "UpdateToDate", [], C));
      await $.mcall((await $.wv([$t4], "RefreshAction", C, false)), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "DeleteTransactionUpdate", async function DeleteTransactionUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = L0["sender"];
    await $.wset([$t5], "Enabled", (await $.and_((await $.and_((await $.and_((await $.mv((await $.wv([$t5], "BrowseGrid", C, false)), "Focused")), async () => (await $.wv([$t5], "AllowTransactionUpdate", C, false)))), async () => (await $.mv((await $.mv((await $.mv((await $.wv([$t5], "TransactionsDataModule", C, false)), "Transactions")), "DataSet")), "Active")))), async () => ($.ne((await $.mv((await $.mv((await $.mv((await $.wv([$t5], "TransactionsDataModule", C, false)), "Transactions")), "DataSet")), "RecordCount")), 0)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "DeleteTransactionExecute", async function DeleteTransactionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "deleteall": false, "deletethis": false, "index": 0, "processedcount": 0, "deleted": false};
  await $.fixArgs(L0, ["sender"]);
  L0["deleted"] = false;
  {
    const $t6 = (await $.v(C, "BrowseGrid"));
    const $t7 = (await $.wv([$t6], "SelectedRows", C, false));
    const $t8 = (await $.mv((await $.wv([$t6, $t7], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t6, $t7, $t8], "Count", C, false)), 0))) {
      await $.wset([$t6, $t7, $t8], "CurrentRowSelected", $.ne((await $.wv([$t6, $t7, $t8], "RecordCount", C, false)), 0), C);
    }
    await $.wset([$t6, $t7, $t8], "DeleteAll", (await $.wv([$t6, $t7, $t8], "False", C, false)), { get: async () => L0["deleteall"], set: async (v) => { L0["deleteall"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "ProcessedCount", 0, { get: async () => L0["processedcount"], set: async (v) => { L0["processedcount"] = v; }, local: true });
    await $.wset([$t6, $t7, $t8], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
    while ($.truthy($.lt((await $.wv([$t6, $t7, $t8], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), (await $.wv([$t6, $t7, $t8], "Count", C, false))))) {
      await $.stmt((await $.wcall([$t6, $t7, $t8], "GotoBookmark", [(await $.wcall([$t6, $t7, $t8], "TBookmark", [(await $.idx((await $.wv([$t6, $t7, $t8], "Items", C, false)), [(await $.wv([$t6, $t7, $t8], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
      await $.wset([$t6, $t7, $t8], "DeleteThis", (await $.wv([$t6, $t7, $t8], "False", C, false)), { get: async () => L0["deletethis"], set: async (v) => { L0["deletethis"] = v; }, local: true });
      if ($.truthy($.not((await $.wv([$t6, $t7, $t8], "DeleteAll", { get: async () => L0["deleteall"], set: async (v) => { L0["deleteall"] = v; }, local: true }, false))))) {
        { const $t9 = (await $.wcall([$t6, $t7, $t8], "MessageDlg", [(await $.wcall([$t6, $t7, $t8], "Format", ["Əməliyyat #%d silinsinmi?", [(await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["ID"], C)), "AsInteger"))]], C)), (await $.wv([$t6, $t7, $t8], "mtConfirmation", C, false)), [(await $.wv([$t6, $t7, $t8], "mbYes", C, false)), (await $.wv([$t6, $t7, $t8], "mbNo", C, false)), (await $.wv([$t6, $t7, $t8], "mbAll", C, false)), (await $.wv([$t6, $t7, $t8], "mbCancel", C, false))], 0], C));
          if ($.eq($t9, (await $.wv([$t6, $t7, $t8], "mrYes", C, false)))) {
            await $.wset([$t6, $t7, $t8], "DeleteThis", (await $.wv([$t6, $t7, $t8], "True", C, false)), { get: async () => L0["deletethis"], set: async (v) => { L0["deletethis"] = v; }, local: true });
          }
          else if ($.eq($t9, (await $.wv([$t6, $t7, $t8], "mrAll", C, false)))) {
            if ($.truthy($.eq((await $.wcall([$t6, $t7, $t8], "MessageDlg", [(await $.wcall([$t6, $t7, $t8], "Format", ["%d əməliyyatlar silinsinmi?", [$.sub((await $.wv([$t6, $t7, $t8], "Count", C, false)), (await $.wv([$t6, $t7, $t8], "ProcessedCount", { get: async () => L0["processedcount"], set: async (v) => { L0["processedcount"] = v; }, local: true }, false)))]], C)), (await $.wv([$t6, $t7, $t8], "mtConfirmation", C, false)), [(await $.wv([$t6, $t7, $t8], "mbYes", C, false)), (await $.wv([$t6, $t7, $t8], "mbCancel", C, false))], 0], C)), (await $.wv([$t6, $t7, $t8], "mrYes", C, false))))) {
              await $.wset([$t6, $t7, $t8], "DeleteAll", (await $.wv([$t6, $t7, $t8], "True", C, false)), { get: async () => L0["deleteall"], set: async (v) => { L0["deleteall"] = v; }, local: true });
              await $.wset([$t6, $t7, $t8], "DeleteThis", (await $.wv([$t6, $t7, $t8], "True", C, false)), { get: async () => L0["deletethis"], set: async (v) => { L0["deletethis"] = v; }, local: true });
            } else {
              await $.stmt((await $.wcall([$t6, $t7, $t8], "dec", [$.ref(async () => (await $.wv([$t6, $t7, $t8], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), async ($t10) => { await $.wset([$t6, $t7, $t8], "Index", $t10, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); })], C)));
            }
          }
          else if ($.eq($t9, (await $.wv([$t6, $t7, $t8], "mrCancel", C, false)))) {
            break;
          }
        }
      } else {
        await $.wset([$t6, $t7, $t8], "DeleteThis", (await $.wv([$t6, $t7, $t8], "True", C, false)), { get: async () => L0["deletethis"], set: async (v) => { L0["deletethis"] = v; }, local: true });
      }
      if ($.truthy((await $.wv([$t6, $t7, $t8], "DeleteThis", { get: async () => L0["deletethis"], set: async (v) => { L0["deletethis"] = v; }, local: true }, false)))) {
        {
          const $t11 = (await $.mv((await $.wv([$t6, $t7, $t8], "TransactionsDataModule", C, false)), "Transactions"));
          await $.stmt((await $.wcall([$t6, $t7, $t8, $t11], "Sb_DeleteTransaction", [(await $.mv((await $.wcall([$t6, $t7, $t8, $t11], "FieldByName", ["ID"], C)), "AsInteger")), (await $.wv([$t6, $t7, $t8, $t11], "AddTransactionStdFlags", C, false))], C)));
          await $.stmt($.wcall([$t6, $t7, $t8, $t11], "Sb_Commit", [], C));
          await $.wset([$t6, $t7, $t8, $t11], "Deleted", (await $.wv([$t6, $t7, $t8, $t11], "True", C, false)), { get: async () => L0["deleted"], set: async (v) => { L0["deleted"] = v; }, local: true });
        }
      }
      await $.stmt((await $.wcall([$t6, $t7, $t8], "Inc", [$.ref(async () => (await $.wv([$t6, $t7, $t8], "ProcessedCount", { get: async () => L0["processedcount"], set: async (v) => { L0["processedcount"] = v; }, local: true }, false)), async ($t12) => { await $.wset([$t6, $t7, $t8], "ProcessedCount", $t12, { get: async () => L0["processedcount"], set: async (v) => { L0["processedcount"] = v; }, local: true }); })], C)));
      await $.stmt((await $.wcall([$t6, $t7, $t8], "Inc", [$.ref(async () => (await $.wv([$t6, $t7, $t8], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), async ($t13) => { await $.wset([$t6, $t7, $t8], "Index", $t13, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); })], C)));
      await $.tick();
    }
  }
  if ($.truthy(L0["deleted"])) {
    await $.mcall((await $.v(C, "RefreshAction")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "EditTransactionExecute", async function EditTransactionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "TransactionPropertiesForm"));
    if ($.truthy((await $.wcall([$t14], "View", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14], "TransactionsDataModule", C, false)), "Transactions")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), $.not((await $.wv([$t14], "AllowTransactionUpdate", C, false)))], C)))) {
      await $.stmt($.wcall([$t14], "UpdateToDate", [], C));
      await $.mcall((await $.wv([$t14], "RefreshAction", C, false)), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "RefreshActionExecute", async function RefreshActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "savedpos": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["buildquery"] = $.fn(async function BuildQuery() {
  const L1 = {result: '', "nationalcurrency": false, "foreigncurrency": false, "multycurrency": false, "debitcredit": false, "ratedifference": false, "profitdebit": false, "debitbalance": 0, "creditbalance": 0, "debitaccid": 0, "creditaccid": 0, "debitcurrencyid": 0, "creditcurrencyid": 0, "filialdebitid": 0, "filialcreditid": 0, "operatorid": 0, "amountcondition": '', "orderfields": ''};
  L1["booltoint"] = $.fn(async function BoolToInt(p0) {
  const L2 = {"value": $.copyArg(p0), result: 0};
  await $.fixArgs(L2, ["value"]);
  if ($.truthy(L2["value"])) {
    L2["result"] = 1;
  } else {
    L2["result"] = 0;
  }
  return L2.result;
});
  if ($.truthy((await $.mv((await $.v(C, "FilterTransactionsAll")), "Checked")))) {
    L1["nationalcurrency"] = true;
    L1["foreigncurrency"] = true;
    L1["multycurrency"] = true;
    L1["debitcredit"] = true;
    L1["ratedifference"] = true;
    L1["profitdebit"] = true;
  } else {
    L1["nationalcurrency"] = (await $.mv((await $.v(C, "FilterNationalCurrency")), "Checked"));
    L1["foreigncurrency"] = (await $.mv((await $.v(C, "FilterForeignCurrency")), "Checked"));
    L1["multycurrency"] = (await $.mv((await $.v(C, "FilterMultyCurrency")), "Checked"));
    L1["debitcredit"] = (await $.mv((await $.v(C, "FilterProfitDebit")), "Checked"));
    L1["ratedifference"] = (await $.mv((await $.v(C, "FilterRateDifference")), "Checked"));
    L1["profitdebit"] = (await $.mv((await $.v(C, "FilterProfitDebit")), "Checked"));
  }
  if ($.truthy($.gt((await $.mv((await $.v(C, "scbDFilial")), "ItemIndex")), 0))) {
    L1["filialdebitid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionsDataModule")), "FilialsData")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L1["filialdebitid"] = (-(1));
  }
  if ($.truthy($.gt((await $.mv((await $.v(C, "scbCFilial")), "ItemIndex")), 0))) {
    L1["filialcreditid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionsDataModule")), "FilialsCData")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L1["filialcreditid"] = (-(1));
  }
  if ($.truthy($.gt((await $.mv((await $.v(C, "scbOperator")), "ItemIndex")), 0))) {
    L1["operatorid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "TransactionsDataModule")), "UsData")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L1["operatorid"] = (-(1));
  }
  if ($.truthy((await $.mv((await $.v(C, "FilterDebitUse")), "Checked")))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "DebitBalanceCB")), "ItemIndex")), (-(1))))) {
      L1["debitbalance"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DebitBalanceSource")), "DataSet")), "FieldByName", ["No"])), "AsInteger"));
    } else {
      L1["debitbalance"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DebitAccountCB")), "ItemIndex")), (-(1))))) {
      L1["debitaccid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DebitAccountsSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
    } else {
      L1["debitaccid"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DebitCurrencyCB")), "ItemIndex")), (-(1))))) {
      L1["debitcurrencyid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DebitCurrency")), "DataSet")), "FieldByName", ["CurrencyID"])), "AsInteger"));
    } else {
      L1["debitcurrencyid"] = (-(1));
    }
  } else {
    L1["debitbalance"] = 0;
    L1["debitaccid"] = 0;
    L1["debitcurrencyid"] = (-(1));
  }
  if ($.truthy((await $.mv((await $.v(C, "FilterCreditUse")), "Checked")))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "CreditBalanceCB")), "ItemIndex")), (-(1))))) {
      L1["creditbalance"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CreditBalanceSource")), "DataSet")), "FieldByName", ["No"])), "AsInteger"));
    } else {
      L1["creditbalance"] = 0;
    }
    if ($.truthy($.gt((await $.mv((await $.v(C, "CreditAccountCB")), "ItemIndex")), (-(1))))) {
      L1["creditaccid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CreditAccountsSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
    } else {
      L1["creditaccid"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "CreditCurrencyCB")), "ItemIndex")), (-(1))))) {
      L1["creditcurrencyid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CreditCurrency")), "DataSet")), "FieldByName", ["CurrencyID"])), "AsInteger"));
    } else {
      L1["creditcurrencyid"] = (-(1));
    }
  } else {
    L1["creditbalance"] = 0;
    L1["creditaccid"] = 0;
    L1["creditcurrencyid"] = (-(1));
  }
  if ($.truthy((await $.mv((await $.v(C, "FilterAmountUse")), "Checked")))) {
    L1["amountcondition"] = (await $.call(C, "Format", ["(%s)", [(await $.v(C, "FAmountCondition"))]]));
  } else {
    L1["amountcondition"] = "";
  }
  { const $t15 = (await $.mv((await $.v(C, "OrderFieldCB")), "ItemIndex"));
    if ($.eq($t15, 0)) {
      L1["orderfields"] = "p.ID";
    }
    else if ($.eq($t15, 1)) {
      L1["orderfields"] = "p.DebitAccNo";
    }
    else if ($.eq($t15, 2)) {
      L1["orderfields"] = "p.CreditAccNo";
    }
    else if ($.eq($t15, 3)) {
      L1["orderfields"] = "p.DebitCurrencySName";
    }
    else if ($.eq($t15, 4)) {
      L1["orderfields"] = "p.CreditCurrencySName";
    }
    else if ($.eq($t15, 5)) {
      L1["orderfields"] = "p.DebitAmount";
    }
    else if ($.eq($t15, 6)) {
      L1["orderfields"] = "p.CreditAmount";
    }
    else if ($.eq($t15, 7)) {
      L1["orderfields"] = "p.LAmount";
    }
    else {
      L1["orderfields"] = "";
    }
  }
  if ($.truthy($.ne(L1["orderfields"], ""))) {
    L1["orderfields"] = (await $.call(C, "Format", ["p.TransactionDate, %s", [L1["orderfields"]]]));
  } else {
    L1["orderfields"] = "p.TransactionDate";
  }
  {
    const $t16 = (await $.mv((await $.v(C, "TransactionsDataModule")), "SBReport"));
    await $.wset([$t16], "Result", (await $.wcall([$t16], "CallStringFunction", ["TrBuildQuery", ["FromDate", (await $.wv([$t16], "FFromDate", C, false)), "ToDate", (await $.wv([$t16], "FToDate", C, false)), "NationalCurrency", (await $.wv([$t16], "NationalCurrency", { get: async () => L1["nationalcurrency"], set: async (v) => { L1["nationalcurrency"] = v; }, local: true }, false)), "ForeignCurrency", (await $.wv([$t16], "ForeignCurrency", { get: async () => L1["foreigncurrency"], set: async (v) => { L1["foreigncurrency"] = v; }, local: true }, false)), "MultyCurrency", (await $.wv([$t16], "MultyCurrency", { get: async () => L1["multycurrency"], set: async (v) => { L1["multycurrency"] = v; }, local: true }, false)), "RateDifference", (await $.wv([$t16], "RateDifference", { get: async () => L1["ratedifference"], set: async (v) => { L1["ratedifference"] = v; }, local: true }, false)), "ProfitDebit", (await $.wv([$t16], "ProfitDebit", { get: async () => L1["profitdebit"], set: async (v) => { L1["profitdebit"] = v; }, local: true }, false)), "DebitCredit", (await $.wv([$t16], "DebitCredit", { get: async () => L1["debitcredit"], set: async (v) => { L1["debitcredit"] = v; }, local: true }, false)), "DebitBalance", (await $.wv([$t16], "DebitBalance", { get: async () => L1["debitbalance"], set: async (v) => { L1["debitbalance"] = v; }, local: true }, false)), "CreditBalance", (await $.wv([$t16], "CreditBalance", { get: async () => L1["creditbalance"], set: async (v) => { L1["creditbalance"] = v; }, local: true }, false)), "DebitAccID", (await $.wv([$t16], "DebitAccID", { get: async () => L1["debitaccid"], set: async (v) => { L1["debitaccid"] = v; }, local: true }, false)), "CreditAccID", (await $.wv([$t16], "CreditAccID", { get: async () => L1["creditaccid"], set: async (v) => { L1["creditaccid"] = v; }, local: true }, false)), "DebitCurrencyID", (await $.wv([$t16], "DebitCurrencyID", { get: async () => L1["debitcurrencyid"], set: async (v) => { L1["debitcurrencyid"] = v; }, local: true }, false)), "CreditCurrencyID", (await $.wv([$t16], "CreditCurrencyID", { get: async () => L1["creditcurrencyid"], set: async (v) => { L1["creditcurrencyid"] = v; }, local: true }, false)), "DebitAmount", 0, "CreditAmount", 0, "LAmount", 0, "OrderBy", (await $.wv([$t16], "OrderFields", { get: async () => L1["orderfields"], set: async (v) => { L1["orderfields"] = v; }, local: true }, false)), "CustomBoolPrefix", "AND", "CustomCondition", (await $.wv([$t16], "AmountCondition", { get: async () => L1["amountcondition"], set: async (v) => { L1["amountcondition"] = v; }, local: true }, false)), "Delayed", (await $.mv((await $.wv([$t16], "FilterDelayed", C, false)), "Checked")), "Commited", (await $.mv((await $.wv([$t16], "FilterCommited", C, false)), "Checked")), "Rejected", (await $.mv((await $.wv([$t16], "FilterRejected", C, false)), "Checked")), "FilialsDebit", (await $.wv([$t16], "FilialDebitId", { get: async () => L1["filialdebitid"], set: async (v) => { L1["filialdebitid"] = v; }, local: true }, false)), "FilialsCredit", (await $.wv([$t16], "FilialCreditId", { get: async () => L1["filialcreditid"], set: async (v) => { L1["filialcreditid"] = v; }, local: true }, false)), "OperatorId", (await $.wv([$t16], "OperatorId", { get: async () => L1["operatorid"], set: async (v) => { L1["operatorid"] = v; }, local: true }, false))]], C)), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "LogMemo")), "Lines")), "Add", ["Refresh"])));
  return L1.result;
});
  if ($.truthy((await $.and_(($.ne((await $.v(C, "FFromDate")), (-(1)))), async () => ($.ne((await $.v(C, "FToDate")), (-(1)))))))) {
    if ($.truthy($.gt((await $.v(C, "FFromDate")), (await $.v(C, "FToDate"))))) {
      await $.stmt((await $.call(C, "MessageDlg", ["Tarixləri düzqün daxil edin", (await $.v(C, "mtError")), [(await $.v(C, "mbOk"))], 0])));
    } else {
      {
        const $t17 = (await $.mv((await $.v(C, "TransactionsDataModule")), "TransactionsData"));
        await $.wset([$t17], "SavedPos", (await $.wv([$t17], "RecNo", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
        await $.stmt($.wcall([$t17], "Close", [], C));
        {
          const $t18 = (await $.wv([$t17], "SQL", C, false));
          await $.wset([$t17, $t18], "Text", (await $.wv([$t17, $t18], "BuildQuery", { get: async () => L0["buildquery"], set: async (v) => { L0["buildquery"] = v; }, local: true }, false)), C);
        }
        await $.stmt($.wcall([$t17], "Open", [], C));
        if ($.truthy($.ge((await $.wv([$t17], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false)), (await $.wv([$t17], "RecordCount", C, false))))) {
          if ($.truthy($.ne((await $.wv([$t17], "RecordCount", C, false)), 0))) {
            await $.wset([$t17], "RecNo", (await $.wv([$t17], "RecordCount", C, false)), C);
          }
        } else {
          await $.wset([$t17], "RecNo", (await $.wv([$t17], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false)), C);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "ToggleFilterActionExecute", async function ToggleFilterActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = L0["sender"];
    await $.wset([$t19], "Checked", $.not((await $.wv([$t19], "Checked", C, false))), C);
    await $.mset((await $.wv([$t19], "FilterGB", C, false)), "Visible", (await $.wv([$t19], "Checked", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "CommitTransactionUpdate", async function CommitTransactionUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = L0["sender"];
    const $t21 = (await $.mv((await $.mv((await $.wv([$t20], "TransactionsDataModule", C, false)), "Transactions")), "DataSet"));
    await $.wset([$t20, $t21], "Enabled", (await $.and_((await $.and_((await $.wv([$t20, $t21], "Active", C, false)), async () => ($.ne((await $.wv([$t20, $t21], "RecordCount", C, false)), 0)))), async () => (await $.wcall([$t20, $t21], "ThereAreStatus", [(await $.wv([$t20, $t21], "FlagSet_Commited", C, false))], C)))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "CommitTransactionExecute", async function CommitTransactionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tempid": 0, "ids": null, "idindex": 0, "index": 0, "status": 0, "commited": false};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.v(C, "BrowseGrid"));
    const $t23 = (await $.wv([$t22], "SelectedRows", C, false));
    const $t24 = (await $.mv((await $.wv([$t22, $t23], "DataSource", C, false)), "DataSet"));
    if ($.truthy($.eq((await $.wv([$t22, $t23, $t24], "Count", C, false)), 0))) {
      await $.stmt((await $.wcall([$t22, $t23, $t24], "SetLength", [$.ref(async () => (await $.wv([$t22, $t23, $t24], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t25) => { await $.wset([$t22, $t23, $t24], "IDs", $t25, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), 1], C)));
      { const $t26 = await $.iset((await $.wv([$t22, $t23, $t24], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), [0], (await $.mv((await $.wcall([$t22, $t23, $t24], "FieldByName", ["ID"], C)), "AsString"))); if ($t26 !== undefined) { await $.wset([$t22, $t23, $t24], "IDs", $t26, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); } }
    } else {
      await $.wset([$t22, $t23, $t24], "IDIndex", 0, { get: async () => L0["idindex"], set: async (v) => { L0["idindex"] = v; }, local: true });
      await $.stmt($.wcall([$t22, $t23, $t24], "DisableControls", [], C));
      try {
        { const $t27 = $.sub((await $.wv([$t22, $t23, $t24], "Count", C, false)), 1);
          await $.wset([$t22, $t23, $t24], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
          let $t28 = true;
          for (;;) {
            if (!$t28) { await $.wset([$t22, $t23, $t24], "Index", $.succ((await $.wv([$t22, $t23, $t24], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
            $t28 = false;
            if (!($.ord((await $.wv([$t22, $t23, $t24], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t27))) break;
            await $.stmt((await $.wcall([$t22, $t23, $t24], "GotoBookmark", [(await $.wcall([$t22, $t23, $t24], "TBookmark", [(await $.idx((await $.wv([$t22, $t23, $t24], "Items", C, false)), [(await $.wv([$t22, $t23, $t24], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
            await $.wset([$t22, $t23, $t24], "Status", (await $.mv((await $.wcall([$t22, $t23, $t24], "FieldByname", ["Status"], C)), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
            if ($.truthy($.in_((await $.wv([$t22, $t23, $t24], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), [(await $.wv([$t22, $t23, $t24], "atsDelayed", C, false)), (await $.wv([$t22, $t23, $t24], "atsRejected", C, false))]))) {
              await $.stmt((await $.wcall([$t22, $t23, $t24], "SetLength", [$.ref(async () => (await $.wv([$t22, $t23, $t24], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), async ($t29) => { await $.wset([$t22, $t23, $t24], "IDs", $t29, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); }), $.add((await $.wv([$t22, $t23, $t24], "IDIndex", { get: async () => L0["idindex"], set: async (v) => { L0["idindex"] = v; }, local: true }, false)), 1)], C)));
              { const $t30 = await $.iset((await $.wv([$t22, $t23, $t24], "IDs", { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }, false)), [(await $.wv([$t22, $t23, $t24], "IDIndex", { get: async () => L0["idindex"], set: async (v) => { L0["idindex"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t22, $t23, $t24], "FieldByName", ["ID"], C)), "AsString"))); if ($t30 !== undefined) { await $.wset([$t22, $t23, $t24], "IDs", $t30, { get: async () => L0["ids"], set: async (v) => { L0["ids"] = v; }, local: true }); } }
              await $.stmt((await $.wcall([$t22, $t23, $t24], "Inc", [$.ref(async () => (await $.wv([$t22, $t23, $t24], "IDIndex", { get: async () => L0["idindex"], set: async (v) => { L0["idindex"] = v; }, local: true }, false)), async ($t31) => { await $.wset([$t22, $t23, $t24], "IDIndex", $t31, { get: async () => L0["idindex"], set: async (v) => { L0["idindex"] = v; }, local: true }); })], C)));
            }
            await $.tick();
          }
        }
      } finally {
        await $.stmt($.wcall([$t22, $t23, $t24], "EnableControls", [], C));
      }
    }
  }
  L0["tempid"] = (await $.call(C, "Sb_CommitDelayedTransactions", [L0["ids"], false]));
  {
    const $t32 = (await $.mcall((await $.v(C, "TTemporaryTransactionCommitForm")), "Create", [Self]));
    try {
      await $.wset([$t32], "Commited", (await $.wcall([$t32], "Execute", [(await $.wv([$t32], "TempID", { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true }, false)), "Tastig edilmasi", (await $.wv([$t32], "False", C, false)), (await $.wv([$t32], "False", C, false))], C)), { get: async () => L0["commited"], set: async (v) => { L0["commited"] = v; }, local: true });
    } finally {
      await $.stmt($.wcall([$t32], "Release", [], C));
    }
  }
  await $.stmt((await $.call(C, "Sb_TransactionsTempDelete", [L0["tempid"]])));
  if ($.truthy(L0["commited"])) {
    await $.stmt((await $.call(C, "Sb_CommitDelayedTransactions", [L0["ids"], true])));
  }
  await $.stmt($.call(C, "Sb_Commit", []));
  if ($.truthy(L0["commited"])) {
    await $.mcall((await $.v(C, "RefreshAction")), "Execute", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "RejectTransactionUpdate", async function RejectTransactionUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = L0["sender"];
    const $t34 = (await $.mv((await $.mv((await $.wv([$t33], "TransactionsDataModule", C, false)), "Transactions")), "DataSet"));
    await $.wset([$t33, $t34], "Enabled", (await $.and_((await $.and_((await $.wv([$t33, $t34], "Active", C, false)), async () => ($.ne((await $.wv([$t33, $t34], "RecordCount", C, false)), 0)))), async () => ((await $.wcall([$t33, $t34], "ThereAreStatus", [(await $.wv([$t33, $t34], "FlagSet_Rejected", C, false))], C))))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "RejectTransactionExecute", async function RejectTransactionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "rejectreason": '', "updated": false, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["processrow"] = $.fn(async function ProcessRow() {
  const L1 = {result: undefined, "status": 0};
  {
    const $t35 = (await $.mv((await $.mv((await $.v(C, "TransactionsDataModule")), "Transactions")), "DataSet"));
    await $.wset([$t35], "Status", (await $.mv((await $.wcall([$t35], "FieldByName", ["Status"], C)), "AsInteger")), { get: async () => L1["status"], set: async (v) => { L1["status"] = v; }, local: true });
    if ($.truthy($.in_((await $.wv([$t35], "Status", { get: async () => L1["status"], set: async (v) => { L1["status"] = v; }, local: true }, false)), [(await $.wv([$t35], "atsDelayed", C, false)), (await $.wv([$t35], "atsRejected", C, false))]))) {
      await $.stmt((await $.wcall([$t35], "Sb_RejectTransaction", [(await $.mv((await $.wcall([$t35], "FieldByName", ["ID"], C)), "AsInteger")), (await $.wv([$t35], "RejectReason", { get: async () => L0["rejectreason"], set: async (v) => { L0["rejectreason"] = v; }, local: true }, false))], C)));
      await $.wset([$t35], "Updated", (await $.wv([$t35], "True", C, false)), { get: async () => L0["updated"], set: async (v) => { L0["updated"] = v; }, local: true });
    }
  }
  return L1.result;
});
  if ($.truthy((await $.call(C, "InputQuery", ["Tayinatini daxil edin", "Tayinat: ", L0["rejectreason"]])))) {
    L0["updated"] = false;
    try {
      {
        const $t37 = (await $.v(C, "BrowseGrid"));
        const $t38 = (await $.wv([$t37], "SelectedRows", C, false));
        const $t39 = (await $.mv((await $.wv([$t37, $t38], "DataSource", C, false)), "DataSet"));
        if ($.truthy($.eq((await $.wv([$t37, $t38, $t39], "Count", C, false)), 0))) {
          await $.stmt($.wcall([$t37, $t38, $t39], "ProcessRow", [], { get: async () => L0["processrow"], set: async (v) => { L0["processrow"] = v; }, local: true }));
        } else {
          { const $t40 = $.sub((await $.wv([$t37, $t38, $t39], "Count", C, false)), 1);
            await $.wset([$t37, $t38, $t39], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
            let $t41 = true;
            for (;;) {
              if (!$t41) { await $.wset([$t37, $t38, $t39], "Index", $.succ((await $.wv([$t37, $t38, $t39], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
              $t41 = false;
              if (!($.ord((await $.wv([$t37, $t38, $t39], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t40))) break;
              await $.stmt((await $.wcall([$t37, $t38, $t39], "GotoBookmark", [(await $.wcall([$t37, $t38, $t39], "TBookmark", [(await $.idx((await $.wv([$t37, $t38, $t39], "Items", C, false)), [(await $.wv([$t37, $t38, $t39], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
              await $.stmt($.wcall([$t37, $t38, $t39], "ProcessRow", [], { get: async () => L0["processrow"], set: async (v) => { L0["processrow"] = v; }, local: true }));
              await $.tick();
            }
          }
        }
      }
    } catch ($t36) {
      $.rethrowControl($t36);
      $.handled($t36);
      await $.stmt($.call(C, "Sb_Rollback", []));
      throw $t36;
    }
    if ($.truthy(L0["updated"])) {
      await $.stmt($.call(C, "Sb_Commit", []));
      await $.mcall((await $.v(C, "RefreshAction")), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "SelectAllActionExecute", async function SelectAllActionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t42 = (await $.v(C, "BrowseGrid"));
    const $t43 = (await $.wv([$t42], "SelectedRows", C, false));
    const $t44 = (await $.mv((await $.wv([$t42, $t43], "DataSource", C, false)), "DataSet"));
    await $.stmt($.wcall([$t42, $t43, $t44], "DisableControls", [], C));
    try {
      await $.stmt($.wcall([$t42, $t43, $t44], "First", [], C));
      while ($.truthy($.not((await $.wv([$t42, $t43, $t44], "Eof", C, false))))) {
        await $.wset([$t42, $t43, $t44], "CurrentRowSelected", (await $.wv([$t42, $t43, $t44], "True", C, false)), C);
        await $.stmt($.wcall([$t42, $t43, $t44], "Next", [], C));
        await $.tick();
      }
    } finally {
      await $.stmt($.wcall([$t42, $t43, $t44], "EnableControls", [], C));
    }
    await $.stmt($.wcall([$t42, $t43, $t44], "TransactionScrolled", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "BrowseGridDblClick", async function BrowseGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditTransaction")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "TransactionIDSearchEditChange", async function TransactionIDSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Clear", []);
  {
    const $t45 = (await $.mv((await $.v(C, "TransactionsDataModule")), "TransactionsData"));
    const $t46 = (await $.wv([$t45], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.ne((await $.wv([$t45, $t46], "Text", C, false)), ""))) {
      await $.stmt((await $.wcall([$t45, $t46], "SearchRecord", [(await $.wcall([$t45, $t46], "Copy", [(await $.wv([$t45, $t46], "Name", C, false)), 12, $.sub((await $.wcall([$t45, $t46], "Length", [(await $.wv([$t45, $t46], "Name", C, false))], C)), 21)], C)), (await $.wv([$t45, $t46], "Text", C, false)), [(await $.wv([$t45, $t46], "srForward", C, false)), (await $.wv([$t45, $t46], "srFromBeginning", C, false)), (await $.wv([$t45, $t46], "srIgnoreCase", C, false)), (await $.wv([$t45, $t46], "srPartialMatch", C, false))]], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "TransactionIDSearchEditExit", async function TransactionIDSearchEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t47 = L0["sender"];
    await $.wset([$t47], "Text", "", C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "N3DrawItem", async function N3DrawItem(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acanvas": $.copyArg(p1), "arect": $.copyArg(p2), "selected": $.copyArg(p3), result: undefined, "linebottom": 0, "stext": '', "bar": null};
  await $.fixArgs(L0, ["sender", "acanvas", "arect", "selected"]);
  {
    const $t48 = L0["acanvas"];
    const $t49 = (await $.wv([$t48], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    {
      const $t50 = (await $.wv([$t48, $t49], "Font", C, false));
      await $.wset([$t48, $t49, $t50], "Name", "Azl Sans Serif", C);
      await $.wset([$t48, $t49, $t50], "Charset", (await $.wv([$t48, $t49, $t50], "RUSSIAN_CHARSET", C, false)), C);
      if ($.truthy((await $.wv([$t48, $t49, $t50], "Default", C, false)))) {
        await $.wset([$t48, $t49, $t50], "Style", [(await $.wv([$t48, $t49, $t50], "fsBold", C, false))], C);
      }
    }
    if ($.truthy($.eq((await $.wv([$t48, $t49], "Caption", C, false)), "-"))) {
      await $.mset((await $.wv([$t48, $t49], "Pen", C, false)), "Color", (await $.wv([$t48, $t49], "clBlack", C, false)));
      await $.wset([$t48, $t49], "LineBottom", $.sub(($.add((await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), $.idiv(($.sub((await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Bottom")), (await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")))), 2))), 1), { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true });
      await $.stmt((await $.wcall([$t48, $t49], "MoveTo", [(await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t48, $t49], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t48, $t49], "LineTo", [(await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t48, $t49], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t48, $t49], "inc", [$.ref(async () => (await $.wv([$t48, $t49], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false)), async ($t51) => { await $.wset([$t48, $t49], "LineBottom", $t51, { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }); })], C)));
      await $.mset((await $.wv([$t48, $t49], "Pen", C, false)), "Color", (await $.wv([$t48, $t49], "clWhite", C, false)));
      await $.stmt((await $.wcall([$t48, $t49], "MoveTo", [(await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.wv([$t48, $t49], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t48, $t49], "LineTo", [(await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wv([$t48, $t49], "LineBottom", { get: async () => L0["linebottom"], set: async (v) => { L0["linebottom"] = v; }, local: true }, false))], C)));
    } else {
      if ($.truthy((await $.wv([$t48, $t49], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
        await $.mset((await $.wv([$t48, $t49], "Brush", C, false)), "Color", (await $.wv([$t48, $t49], "clNavy", C, false)));
        if ($.truthy((await $.wv([$t48, $t49], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t48, $t49], "Font", C, false)), "Color", (await $.wv([$t48, $t49], "clWhite", C, false)));
        } else {
          await $.mset((await $.wv([$t48, $t49], "Font", C, false)), "Color", (await $.wv([$t48, $t49], "clSilver", C, false)));
        }
      } else {
        await $.mset((await $.wv([$t48, $t49], "Brush", C, false)), "Color", (await $.wv([$t48, $t49], "clBtnFace", C, false)));
        if ($.truthy((await $.wv([$t48, $t49], "Enabled", C, false)))) {
          await $.mset((await $.wv([$t48, $t49], "Font", C, false)), "Color", (await $.wv([$t48, $t49], "clBlack", C, false)));
        } else {
          await $.mset((await $.wv([$t48, $t49], "Font", C, false)), "Color", (await $.wv([$t48, $t49], "clGrayText", C, false)));
        }
      }
      await $.wset([$t48, $t49], "Bar", (await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true });
      await $.stmt((await $.wcall([$t48, $t49], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t48, $t49], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t52) => { await $.mset((await $.wv([$t48, $t49], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t52); }), 22], C)));
      await $.stmt((await $.wcall([$t48, $t49], "FillRect", [(await $.wv([$t48, $t49], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t48, $t49], "TextOut", [$.add((await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 22), $.add((await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t48, $t49], "Caption", C, false))], C)));
    }
    await $.wset([$t48, $t49], "SText", (await $.wcall([$t48, $t49], "ShortCutToText", [(await $.wv([$t48, $t49], "ShortCut", C, false))], C)), { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true });
    await $.stmt((await $.wcall([$t48, $t49], "TextOut", [$.sub($.sub((await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Right")), (await $.wcall([$t48, $t49], "TextWidth", [(await $.wv([$t48, $t49], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C))), 2), $.add((await $.mv((await $.wv([$t48, $t49], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1), (await $.wv([$t48, $t49], "SText", { get: async () => L0["stext"], set: async (v) => { L0["stext"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t48, $t49], "ImageIndex", C, false)), (-(1))))) {
      {
        const $t53 = (await $.wv([$t48, $t49], "GetParentMenu", C, false));
        if ($.truthy((await $.wcall([$t48, $t49, $t53], "Assigned", [(await $.wv([$t48, $t49, $t53], "Images", C, false))], C)))) {
          if ($.truthy((await $.wv([$t48, $t49, $t53], "Checked", C, false)))) {
            await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $.add((await $.mv((await $.wv([$t48, $t49, $t53], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), 1));
            await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $.add((await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), 16));
            await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $.add((await $.mv((await $.wv([$t48, $t49, $t53], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), 1));
            await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $.add((await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), 16));
            await $.mset((await $.mv((await $.wv([$t48, $t49, $t53], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t48, $t49, $t53], "clBtnShadow", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t48, $t49, $t53], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t48, $t49, $t53], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t54) => { await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t54); }), 2], C)));
            await $.stmt((await $.wcall([$t48, $t49, $t53], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t55) => { await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t55); }), 2], C)));
            await $.stmt((await $.wcall([$t48, $t49, $t53], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t56) => { await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t56); }), 2], C)));
            await $.stmt((await $.wcall([$t48, $t49, $t53], "Inc", [$.ref(async () => (await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t57) => { await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t57); }), 2], C)));
            await $.mset((await $.mv((await $.wv([$t48, $t49, $t53], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t48, $t49, $t53], "clBtnHighlight", C, false)));
            await $.stmt((await $.mcall((await $.wv([$t48, $t49, $t53], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FrameRect", [(await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
            await $.stmt((await $.wcall([$t48, $t49, $t53], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left")), async ($t58) => { await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Left", $t58); }), 1], C)));
            await $.stmt((await $.wcall([$t48, $t49, $t53], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right")), async ($t59) => { await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Right", $t59); }), 1], C)));
            await $.stmt((await $.wcall([$t48, $t49, $t53], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top")), async ($t60) => { await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Top", $t60); }), 1], C)));
            await $.stmt((await $.wcall([$t48, $t49, $t53], "Dec", [$.ref(async () => (await $.mv((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom")), async ($t61) => { await $.mset((await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false)), "Bottom", $t61); }), 1], C)));
            if ($.truthy((await $.wv([$t48, $t49, $t53], "Selected", { get: async () => L0["selected"], set: async (v) => { L0["selected"] = v; }, local: true }, false)))) {
              await $.mset((await $.mv((await $.wv([$t48, $t49, $t53], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t48, $t49, $t53], "clBtnFace", C, false)));
            } else {
              await $.mset((await $.mv((await $.wv([$t48, $t49, $t53], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "Brush")), "Color", (await $.wv([$t48, $t49, $t53], "clBtnHighlight", C, false)));
            }
            await $.stmt((await $.mcall((await $.wv([$t48, $t49, $t53], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), "FillRect", [(await $.wv([$t48, $t49, $t53], "Bar", { get: async () => L0["bar"], set: async (v) => { L0["bar"] = v; }, local: true }, false))])));
          }
          await $.stmt((await $.mcall((await $.wv([$t48, $t49, $t53], "Images", C, false)), "Draw", [(await $.wv([$t48, $t49, $t53], "ACanvas", { get: async () => L0["acanvas"], set: async (v) => { L0["acanvas"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t48, $t49, $t53], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t48, $t49, $t53], "ARect", { get: async () => L0["arect"], set: async (v) => { L0["arect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t48, $t49, $t53], "ImageIndex", C, false)), (await $.wv([$t48, $t49, $t53], "Enabled", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "ACanvas", "ARect", "Selected"], "kind": "procedure", "ptypes": ["TObject", "TCanvas", "TRect", "Boolean"]});
  U.method("TTransactionsMainForm", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToggleFilterAction")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "ToggleRBFilterAction", async function ToggleRBFilterAction(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["setifspecified"] = $.fn(async function SetIfSpecified(p0) {
  const L1 = {"action": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["action"]);
  await $.mset(L1["action"], "Checked", $.eq(L0["sender"], L1["action"]));
  return L1.result;
});
  await $.stmt((await $.callv(L0["setifspecified"], [(await $.v(C, "FilterTransactionsSelected"))])));
  await $.stmt((await $.callv(L0["setifspecified"], [(await $.v(C, "FilterTransactionsAll"))])));
  await $.stmt($.call(C, "FilterChanged", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "FilterNationalCurrencyExecute", async function FilterNationalCurrencyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t62 = L0["sender"];
    await $.wset([$t62], "Checked", $.not((await $.wv([$t62], "Checked", C, false))), C);
    if ($.truthy($.not(((await $.or_((await $.or_((await $.or_((await $.or_((await $.mv((await $.wv([$t62], "FilterNationalCurrency", C, false)), "Checked")), async () => (await $.mv((await $.wv([$t62], "FilterForeignCurrency", C, false)), "Checked")))), async () => (await $.mv((await $.wv([$t62], "FilterMultyCurrency", C, false)), "Checked")))), async () => (await $.mv((await $.wv([$t62], "FilterRateDifference", C, false)), "Checked")))), async () => (await $.mv((await $.wv([$t62], "FilterProfitDebit", C, false)), "Checked")))))))) {
      await $.wset([$t62], "Checked", (await $.wv([$t62], "True", C, false)), C);
      await $.stmt((await $.mcall((await $.wv([$t62], "HintBox", C, false)), "ShowMessage", ["Can'not unselect all checkboxes - nothing to view"])));
    }
  }
  await $.mcall((await $.v(C, "FilterTransactionsSelected")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "MouseWheelHandler", async function MouseWheelHandler(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "step": 0, "i": 0};
  if ($.truthy((await $.mv((await $.v(C, "BrowseGrid")), "Focused")))) {
    await $.mcall((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Clear", []);
    {
      const $t63 = (await $.call(C, "TCMMouseWheel", [(await L0["message"].get())]));
      const $t64 = (await $.mv((await $.mv((await $.wv([$t63], "TransactionsDataModule", C, false)), "Transactions")), "DataSet"));
      if ($.truthy($.in_((await $.wv([$t63, $t64], "ssCtrl", C, false)), (await $.wv([$t63, $t64], "ShiftState", C, false))))) {
        await $.wset([$t63, $t64], "Step", 3, { get: async () => L0["step"], set: async (v) => { L0["step"] = v; }, local: true });
      } else {
        await $.wset([$t63, $t64], "Step", 1, { get: async () => L0["step"], set: async (v) => { L0["step"] = v; }, local: true });
      }
      if ($.truthy($.lt((await $.wv([$t63, $t64], "WheelDelta", C, false)), 0))) {
        { const $t65 = (await $.wv([$t63, $t64], "Step", { get: async () => L0["step"], set: async (v) => { L0["step"] = v; }, local: true }, false));
          await $.wset([$t63, $t64], "I", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t66 = true;
          for (;;) {
            if (!$t66) { await $.wset([$t63, $t64], "I", $.succ((await $.wv([$t63, $t64], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t66 = false;
            if (!($.ord((await $.wv([$t63, $t64], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t65))) break;
            await $.stmt($.wcall([$t63, $t64], "Next", [], C));
            await $.tick();
          }
        }
      } else {
        { const $t67 = (await $.wv([$t63, $t64], "Step", { get: async () => L0["step"], set: async (v) => { L0["step"] = v; }, local: true }, false));
          await $.wset([$t63, $t64], "I", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t68 = true;
          for (;;) {
            if (!$t68) { await $.wset([$t63, $t64], "I", $.succ((await $.wv([$t63, $t64], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t68 = false;
            if (!($.ord((await $.wv([$t63, $t64], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t67))) break;
            await $.stmt($.wcall([$t63, $t64], "Prior", [], C));
            await $.tick();
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Message"], "kind": "procedure", "ptypes": ["TMessage"]});
  U.method("TTransactionsMainForm", "FilterChanged", async function FilterChanged(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.v(C, "FRefreshOnFilterChange")))) {
    await $.mcall((await $.v(C, "RefreshAction")), "Execute", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionsMainForm", "FilterDebitUseExecute", async function FilterDebitUseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t69 = L0["sender"];
    await $.wset([$t69], "Checked", $.not((await $.wv([$t69], "Checked", C, false))), C);
  }
  await $.stmt($.call(C, "FilterChanged", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "AccsFilterChanged", async function AccsFilterChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.stmt($.call(C, "FilterChanged", []));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TTransactionsMainForm", "DebitBalanceCBEnter", async function DebitBalanceCBEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebitAccountCB")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "DebitCurrencyCB")), "ItemIndex", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "DebitAccountCBEnter", async function DebitAccountCBEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebitBalanceCB")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "DebitCurrencyCB")), "ItemIndex", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "CreditBalanceCBEnter", async function CreditBalanceCBEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccountCB")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CreditCurrencyCB")), "ItemIndex", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "CreditAccountCBEnter", async function CreditAccountCBEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditBalanceCB")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CreditCurrencyCB")), "ItemIndex", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "DebitCurrencyCBEnter", async function DebitCurrencyCBEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebitBalanceCB")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "DebitAccountCB")), "ItemIndex", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "CreditCurrencyCBEnter", async function CreditCurrencyCBEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditBalanceCB")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CreditAccountCB")), "ItemIndex", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "FilterAmountApplyExecute", async function FilterAmountApplyExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fieldname": '', "sign": '', "value": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "FilterDebitAmount")), "Checked")))) {
    L0["fieldname"] = "Ammount";
  } else {
    if ($.truthy((await $.mv((await $.v(C, "FilterCreditAmount")), "Checked")))) {
      L0["fieldname"] = "Ammount_C";
    } else {
      if ($.truthy((await $.mv((await $.v(C, "FilterLAmount")), "Checked")))) {
        L0["fieldname"] = "LAmmount";
      } else {
        throw $.raise((await $.mcall((await $.v(C, "EInvalidOperation")), "Create", ["No one of amount filter checkboxes checked"])));
      }
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "LessButton")), "Down")))) {
    L0["sign"] = "<=";
  } else {
    if ($.truthy((await $.mv((await $.v(C, "EqualButton")), "Down")))) {
      L0["sign"] = "=";
    } else {
      if ($.truthy((await $.mv((await $.v(C, "MoreButton")), "Down")))) {
        L0["sign"] = ">=";
      } else {
        if ($.truthy((await $.mv((await $.v(C, "NotEqualButton")), "Down")))) {
          L0["sign"] = "<>";
        } else {
          throw $.raise((await $.mcall((await $.v(C, "EInvalidOperation")), "Create", ["No one of sign buttons not checked"])));
        }
      }
    }
  }
  L0["value"] = (await $.call(C, "CurrToStrF", [(await $.mv((await $.v(C, "AmountEdit")), "Value")), (await $.v(C, "ffGeneral")), 2]));
  await $.set(C, "FAmountCondition", (await $.call(C, "Format", ["(p.%s %s %s)", [L0["fieldname"], L0["sign"], L0["value"]]])));
  await $.stmt($.call(C, "FilterChanged", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "FilterAmountUseExecute", async function FilterAmountUseExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t70 = L0["sender"];
    await $.wset([$t70], "Checked", $.not((await $.wv([$t70], "Checked", C, false))), C);
  }
  await $.mcall((await $.v(C, "FilterAmountApply")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "FilterDebitAmountExecute", async function FilterDebitAmountExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["setifspecified"] = $.fn(async function SetIfSpecified(p0) {
  const L1 = {"action": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["action"]);
  await $.mset(L1["action"], "Checked", $.eq(L0["sender"], L1["action"]));
  return L1.result;
});
  await $.stmt((await $.callv(L0["setifspecified"], [(await $.v(C, "FilterDebitAmount"))])));
  await $.stmt((await $.callv(L0["setifspecified"], [(await $.v(C, "FilterCreditAmount"))])));
  await $.stmt((await $.callv(L0["setifspecified"], [(await $.v(C, "FilterLAmount"))])));
  await $.mcall((await $.v(C, "FilterAmountApply")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "LessButtonClick", async function LessButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FilterAmountApply")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "Get_Icon", async function Get_Icon(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["iconindex"] = 6;
  await $.stmt((await $.mcall((await $.v(C, "ImageList")), "GetIcon", [L0["iconindex"], (await $.v(C, "Icon"))])));
  L0["result"] = (await $.mv((await $.v(C, "Icon")), "Handle"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "Set_Params", async function Set_Params(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"name": $.copyArg(p0), "value": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["name", "value"]);
  if ($.truthy($.eq(L0["name"], "ViewMode"))) {
    await $.set(C, "ViewMode", $.eq(L0["value"], "Commited"));
  } else {
    if ($.truthy($.eq(L0["name"], "CurrentDateOnly"))) {
      await $.set(C, "CurrentDateOnly", L0["value"]);
    }
  }
  return L0.result;
}, {"params": ["Name", "Value"], "kind": "procedure", "ptypes": ["WideString", "OleVariant"]});
  U.method("TTransactionsMainForm", "SetViewMode", async function SetViewMode(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy((await $.or_(($.ne((await $.v(C, "FViewMode")), L0["value"])), async () => ($.not((await $.mv((await $.mv((await $.mv((await $.v(C, "TransactionsDataModule")), "Transactions")), "DataSet")), "Active")))))))) {
    await $.set(C, "FViewMode", L0["value"]);
    if ($.truthy((await $.v(C, "FViewMode")))) {
      await $.set(C, "Caption", "Tastiq olunmus amaliyyatlar");
    } else {
      await $.set(C, "Caption", "Delayed transactions");
    }
    await $.mcall((await $.v(C, "RefreshAction")), "Execute", []);
    await $.stmt($.call(C, "UpdateActions", []));
  }
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TTransactionsMainForm", "ToggleChecked", async function ToggleChecked(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t71 = L0["sender"];
    await $.wset([$t71], "Checked", $.not((await $.wv([$t71], "Checked", C, false))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "BrowseGridDrawColumnCell", async function BrowseGridDrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined, "imageindex": 0};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t72 = L0["sender"];
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t72], "DataSource", C, false)), "DataSet")), "RecordCount")), 0))) {
      { const $t73 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger"));
        if ($.eq($t73, (await $.wv([$t72], "atsCommited", C, false)))) {
          await $.wset([$t72], "ImageIndex", 7, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t73, (await $.wv([$t72], "atsRejected", C, false)))) {
          await $.wset([$t72], "ImageIndex", 8, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else if ($.eq($t73, (await $.wv([$t72], "atsDelayed", C, false)))) {
          await $.wset([$t72], "ImageIndex", 9, { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
        }
        else {
          if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t72], "DataSource", C, false)), "DataSet")), "State")), (await $.wv([$t72], "dsInsert", C, false))))) {
            throw $.raise((await $.mcall((await $.wv([$t72], "EDataCorrupted", C, false)), "CreateFmt", ["Unknown state in transactions dataset: %d, ID=%d", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DataSource", C, false)), "DataSet")), "FieldByName", ["Status"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t72], "DataSource", C, false)), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]])));
          } else {
            await $.wset([$t72], "ImageIndex", (-(1)), { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true });
          }
        }
      }
      if ($.truthy((await $.and_(($.eq((await $.wv([$t72], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)), async () => ($.ne((await $.wv([$t72], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (-(1)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t72], "ImageList", C, false)), "Draw", [(await $.wv([$t72], "Canvas", C, false)), (await $.mv((await $.wv([$t72], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Left")), (await $.mv((await $.wv([$t72], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "Top")), (await $.wv([$t72], "ImageIndex", { get: async () => L0["imageindex"], set: async (v) => { L0["imageindex"] = v; }, local: true }, false)), (await $.wv([$t72], "True", C, false))])));
      } else {
        await $.stmt((await $.wcall([$t72], "DefaultDrawColumnCell", [(await $.wv([$t72], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t72], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t72], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t72], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TTransactionsMainForm", "TransactionScrolled", async function TransactionScrolled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "index": 0};
  if ($.truthy($.not((await $.mv((await $.mv((await $.mv((await $.v(C, "TransactionsDataModule")), "Transactions")), "DataSet")), "ControlsDisabled"))))) {
    await $.mset((await $.v(C, "RejectReasonPanel")), "Enabled", $.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "TransactionsDataModule")), "Transactions")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), (await $.v(C, "atsRejected"))));
    await $.mcall((await $.v(C, "RejectedPaintBox")), "Repaint", []);
    { const $t74 = $.sub((await $.v(C, "MaxFlagSet")), 1);
      L0["index"] = 0;
      let $t75 = true;
      for (;;) {
        if (!$t75) { L0["index"] = $.succ(L0["index"], 1); }
        $t75 = false;
        if (!($.ord(L0["index"]) <= $.ord($t74))) break;
        { const $t76 = await $.iset((await $.v(C, "FSelectionChanged")), [L0["index"]], true); if ($t76 !== undefined) { await $.set(C, "FSelectionChanged", $t76); } }
        await $.tick();
      }
    }
    await $.set(C, "FUpdateChangeMode", true);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionsMainForm", "RejectedPaintBoxPaint", async function RejectedPaintBoxPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t77 = L0["sender"];
    await $.stmt((await $.mcall((await $.wv([$t77], "ImageList", C, false)), "Draw", [(await $.wv([$t77], "Canvas", C, false)), 0, 0, 8, $.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t77], "TransactionsDataModule", C, false)), "Transactions")), "DataSet")), "FieldByName", ["status"])), "AsInteger")), (await $.wv([$t77], "atsRejected", C, false)))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "ThereAreStatus", async function ThereAreStatus(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"flagset": $.copyArg(p0), result: false, "savedpos": null, "index": 0};
  await $.fixArgs(L0, ["flagset"]);
  L0["lastselection"] = [false, false];
  L0["checkrow"] = $.fn(async function CheckRow() {
  const L1 = {result: undefined};
  L1["result"] = $.in_((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "DataSource")), "DataSet")), "FieldByName", ["Status"])), "AsInteger")), (await $.idx((await $.v(C, "FlagSets")), [L0["flagset"]])));
  return L1.result;
});
  if ($.truthy((await $.idx((await $.v(C, "FSelectionChanged")), [L0["flagset"]])))) {
    {
      const $t78 = (await $.v(C, "BrowseGrid"));
      const $t79 = (await $.mv((await $.wv([$t78], "DataSource", C, false)), "DataSet"));
      const $t80 = (await $.wv([$t78, $t79], "SelectedRows", C, false));
      if ($.truthy((await $.or_(($.eq((await $.wv([$t78, $t79, $t80], "Count", C, false)), 1)), async () => ($.eq((await $.wv([$t78, $t79, $t80], "Count", C, false)), 0)))))) {
        await $.stmt($.wcall([$t78, $t79, $t80], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
      } else {
        await $.stmt($.wcall([$t78, $t79, $t80], "DisableControls", [], C));
        await $.wset([$t78, $t79, $t80], "SavedPos", (await $.wv([$t78, $t79, $t80], "GetBookmark", C, false)), { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true });
        try {
          { const $t81 = $.sub((await $.wv([$t78, $t79, $t80], "Count", C, false)), 1);
            await $.wset([$t78, $t79, $t80], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
            let $t82 = true;
            for (;;) {
              if (!$t82) { await $.wset([$t78, $t79, $t80], "Index", $.succ((await $.wv([$t78, $t79, $t80], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
              $t82 = false;
              if (!($.ord((await $.wv([$t78, $t79, $t80], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t81))) break;
              await $.stmt((await $.wcall([$t78, $t79, $t80], "GotoBookmark", [(await $.wcall([$t78, $t79, $t80], "TBookmark", [(await $.idx((await $.wv([$t78, $t79, $t80], "Items", C, false)), [(await $.wv([$t78, $t79, $t80], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
              await $.stmt($.wcall([$t78, $t79, $t80], "CheckRow", [], { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }));
              if ($.truthy((await $.wv([$t78, $t79, $t80], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)))) {
                break;
              }
              await $.tick();
            }
          }
        } finally {
          await $.stmt((await $.wcall([$t78, $t79, $t80], "GotoBookmark", [(await $.wv([$t78, $t79, $t80], "SavedPos", { get: async () => L0["savedpos"], set: async (v) => { L0["savedpos"] = v; }, local: true }, false))], C)));
          await $.stmt($.wcall([$t78, $t79, $t80], "EnableControls", [], C));
        }
      }
    }
    { const $t83 = await $.iset(L0["lastselection"], [L0["flagset"]], L0["result"]); if ($t83 !== undefined) { L0["lastselection"] = $t83; } }
    { const $t84 = await $.iset((await $.v(C, "FSelectionChanged")), [L0["flagset"]], false); if ($t84 !== undefined) { await $.set(C, "FSelectionChanged", $t84); } }
  } else {
    L0["result"] = (await $.idx(L0["lastselection"], [L0["flagset"]]));
  }
  return L0.result;
}, {"params": ["FlagSet"], "kind": "function", "ptypes": ["Integer"]});
  U.method("TTransactionsMainForm", "SetCurrentDateOnly", async function SetCurrentDateOnly(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FCurrentDateOnly", L0["value"]);
  await $.mset((await $.v(C, "DatePanel")), "Visible", (await $.v(C, "CurrentDateOnly")));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TTransactionsMainForm", "FromDateEditChange", async function FromDateEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t85 = L0["sender"];
    if ($.truthy($.ne((await $.wv([$t85], "DateTime", C, false)), (await $.wv([$t85], "FFromDate", C, false))))) {
      await $.wset([$t85], "FFromDate", (await $.wv([$t85], "DateTime", C, false)), C);
      await $.mcall((await $.wv([$t85], "RefreshAction", C, false)), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "ToDateEditChange", async function ToDateEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t86 = L0["sender"];
    if ($.truthy($.ne((await $.wv([$t86], "DateTime", C, false)), (await $.wv([$t86], "FToDate", C, false))))) {
      await $.wset([$t86], "FToDate", (await $.wv([$t86], "DateTime", C, false)), C);
      await $.mcall((await $.wv([$t86], "RefreshAction", C, false)), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "UpdateToDate", async function UpdateToDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t87 = (await $.v(C, "TransactionPropertiesForm"));
    await $.mset((await $.wv([$t87], "ToDateEdit", C, false)), "DateTime", (await $.wv([$t87], "TransactionDate", C, false)));
    await $.wset([$t87], "FToDate", (await $.wv([$t87], "TransactionDate", C, false)), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TTransactionsMainForm", "OrderFieldCBChange", async function OrderFieldCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "RefreshAction")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "FirstRecExecute", async function FirstRecExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TransactionsDataModule")), "TransactionsData")), "First", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "LastRecExecute", async function LastRecExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "TransactionsDataModule")), "TransactionsData")), "Last", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "FirstRecUpdate", async function FirstRecUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Clear", []);
  {
    const $t88 = L0["sender"];
    const $t89 = (await $.mv((await $.wv([$t88], "TransactionsDataModule", C, false)), "TransactionsData"));
    await $.wset([$t88, $t89], "Enabled", $.ne((await $.wv([$t88, $t89], "RecNo", C, false)), 1), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "LastRecUpdate", async function LastRecUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "BrowseGrid")), "SelectedRows")), "Clear", []);
  {
    const $t90 = L0["sender"];
    const $t91 = (await $.mv((await $.wv([$t90], "TransactionsDataModule", C, false)), "TransactionsData"));
    await $.wset([$t90, $t91], "Enabled", $.ne((await $.wv([$t90, $t91], "RecNo", C, false)), (await $.wv([$t90, $t91], "RecordCount", C, false))), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "AllowTransactionUpdate", async function AllowTransactionUpdate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "index": 0, "lastpos": null};
  L0["checkrow"] = $.fn(async function CheckRow() {
  const L1 = {result: false};
  {
    const $t92 = (await $.mv((await $.mv((await $.v(C, "BrowseGrid")), "DataSource")), "DataSet"));
    await $.wset([$t92], "Result", $.eq((await $.mv((await $.wcall([$t92], "FieldByName", ["TransactionDate"], C)), "AsDateTime")), (await $.wv([$t92], "FCurrentDate", C, false))), { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true });
  }
  return L1.result;
});
  if ($.truthy((await $.v(C, "FUpdateChangeMode")))) {
    L0["result"] = true;
    {
      const $t93 = (await $.v(C, "BrowseGrid"));
      const $t94 = (await $.mv((await $.wv([$t93], "DataSource", C, false)), "DataSet"));
      const $t95 = (await $.wv([$t93, $t94], "SelectedRows", C, false));
      if ($.truthy((await $.or_(($.eq((await $.wv([$t93, $t94, $t95], "Count", C, false)), 0)), async () => ($.eq((await $.wv([$t93, $t94, $t95], "Count", C, false)), 1)))))) {
        await $.wset([$t93, $t94, $t95], "Result", (await $.wv([$t93, $t94, $t95], "CheckRow", { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      } else {
        await $.stmt($.wcall([$t93, $t94, $t95], "DisableControls", [], C));
        await $.wset([$t93, $t94, $t95], "LastPos", (await $.wv([$t93, $t94, $t95], "GetBookmark", C, false)), { get: async () => L0["lastpos"], set: async (v) => { L0["lastpos"] = v; }, local: true });
        try {
          { const $t96 = $.sub((await $.wv([$t93, $t94, $t95], "Count", C, false)), 1);
            await $.wset([$t93, $t94, $t95], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
            let $t97 = true;
            for (;;) {
              if (!$t97) { await $.wset([$t93, $t94, $t95], "Index", $.succ((await $.wv([$t93, $t94, $t95], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
              $t97 = false;
              if (!($.ord((await $.wv([$t93, $t94, $t95], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t96))) break;
              await $.stmt((await $.wcall([$t93, $t94, $t95], "GotoBookmark", [(await $.wcall([$t93, $t94, $t95], "TBookmark", [(await $.idx((await $.wv([$t93, $t94, $t95], "Items", C, false)), [(await $.wv([$t93, $t94, $t95], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]))], C))], C)));
              await $.wset([$t93, $t94, $t95], "Result", (await $.wv([$t93, $t94, $t95], "CheckRow", { get: async () => L0["checkrow"], set: async (v) => { L0["checkrow"] = v; }, local: true }, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              if ($.truthy($.not((await $.wv([$t93, $t94, $t95], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false))))) {
                break;
              }
              await $.tick();
            }
          }
        } finally {
          await $.stmt((await $.wcall([$t93, $t94, $t95], "GotoBookmark", [(await $.wv([$t93, $t94, $t95], "LastPos", { get: async () => L0["lastpos"], set: async (v) => { L0["lastpos"] = v; }, local: true }, false))], C)));
          await $.stmt($.wcall([$t93, $t94, $t95], "EnableControls", [], C));
        }
      }
    }
    await $.set(C, "FUpdateChangeMode", false);
    await $.set(C, "FLastAllowTransactionUpdate", L0["result"]);
  } else {
    L0["result"] = (await $.v(C, "FLastAllowTransactionUpdate"));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TTransactionsMainForm", "CommisionViewerEnter", async function CommisionViewerEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "isCommisionTransaction", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "CommisionViewerExit", async function CommisionViewerExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "isCommisionTransaction", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "CommisionViewerDblClick", async function CommisionViewerDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tempdebit": 0, "tempcredit": 0, "tempdebitcurrency": 0, "tempcreditcurrency": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.mv((await $.mv((L0["sender"]), "DataSource")), "DataSet")), "IsEmpty")))))) {
    {
      const $t98 = (await $.v(C, "TransactionPropertiesForm"));
      const $t99 = (await $.wv([$t98], "TransactionsDataModule", C, false));
      await $.wset([$t98, $t99], "TempDebit", (await $.mv((await $.mcall((await $.wv([$t98, $t99], "ODSCommisionTrans", C, false)), "FieldByName", ["Debt"])), "AsInteger")), { get: async () => L0["tempdebit"], set: async (v) => { L0["tempdebit"] = v; }, local: true });
      await $.wset([$t98, $t99], "TempCredit", (await $.mv((await $.mcall((await $.wv([$t98, $t99], "ODSCommisionTrans", C, false)), "FieldByName", ["Credit"])), "AsInteger")), { get: async () => L0["tempcredit"], set: async (v) => { L0["tempcredit"] = v; }, local: true });
      await $.wset([$t98, $t99], "TempDebitCurrency", (await $.wcall([$t98, $t99], "AccountCurrencyID", [(await $.mv((await $.mcall((await $.wv([$t98, $t99], "ODSCommisionTrans", C, false)), "FieldByName", ["Debt"])), "AsInteger"))], C)), { get: async () => L0["tempdebitcurrency"], set: async (v) => { L0["tempdebitcurrency"] = v; }, local: true });
      await $.wset([$t98, $t99], "TempCreditCurrency", (await $.wcall([$t98, $t99], "AccountCurrencyID", [(await $.mv((await $.mcall((await $.wv([$t98, $t99], "ODSCommisionTrans", C, false)), "FieldByName", ["Credit"])), "AsInteger"))], C)), { get: async () => L0["tempcreditcurrency"], set: async (v) => { L0["tempcreditcurrency"] = v; }, local: true });
      await $.wset([$t98, $t99], "TransactionDate", (await $.mv((await $.wv([$t98, $t99], "ToDateEdit", C, false)), "DateTime")), C);
      await $.wset([$t98, $t99], "FMode", (await $.wv([$t98, $t99], "tmNew", C, false)), C);
      await $.wset([$t98, $t99], "Caption", "Adding new transaction", C);
      await $.stmt($.wcall([$t98, $t99], "Reset", [], C));
      await $.wset([$t98, $t99], "FReadOnly", (await $.wv([$t98, $t99], "False", C, false)), C);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t98, $t99], "DebitCurrency", C, false)), "DataSet")), "Locate", ["ID", (await $.wv([$t98, $t99], "TempDebitCurrency", { get: async () => L0["tempdebitcurrency"], set: async (v) => { L0["tempdebitcurrency"] = v; }, local: true }, false)), []])));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t98, $t99], "CreditCurrency", C, false)), "DataSet")), "Locate", ["ID", (await $.wv([$t98, $t99], "TempCreditCurrency", { get: async () => L0["tempcreditcurrency"], set: async (v) => { L0["tempcreditcurrency"] = v; }, local: true }, false)), []])));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t98, $t99], "DebitAccs", C, false)), "DataSet")), "Locate", ["ID", (await $.wv([$t98, $t99], "TempDebit", { get: async () => L0["tempdebit"], set: async (v) => { L0["tempdebit"] = v; }, local: true }, false)), []])));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t98, $t99], "CreditAccs", C, false)), "DataSet")), "Locate", ["ID", (await $.wv([$t98, $t99], "TempCredit", { get: async () => L0["tempcredit"], set: async (v) => { L0["tempcredit"] = v; }, local: true }, false)), []])));
      await $.mset((await $.mcall((await $.mv((await $.wv([$t98, $t99], "Transactions", C, false)), "DataSet")), "FieldByName", ["Name"])), "AsString", (await $.mv((await $.mcall((await $.wv([$t98, $t99], "ODSCommisionTrans", C, false)), "FieldByName", ["Assignment"])), "AsString")));
      await $.stmt($.wcall([$t98, $t99], "ShowModal", [], C));
      await $.stmt($.wcall([$t98, $t99], "UpdateToDate", [], C));
      await $.mcall((await $.wv([$t98, $t99], "RefreshAction", C, false)), "Execute", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "AccountCurrencyID", async function AccountCurrencyID(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"accountid": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["accountid"]);
  L0["cname"] = "GetAccountCurrencyID";
  {
    const $t100 = (await $.mv((await $.v(C, "TransactionsDataModule")), "OPComplexTrans"));
    await $.wset([$t100], "Result", (await $.wcall([$t100], "CallIntegerFunction", [(await $.wv([$t100], "cName", { get: async () => L0["cname"], set: async (v) => { L0["cname"] = v; }, local: true }, false)), [(await $.wv([$t100], "accountID", { get: async () => L0["accountid"], set: async (v) => { L0["accountid"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["accountID"], "kind": "function", "ptypes": ["longint"]});
  U.method("TTransactionsMainForm", "N6Click", async function N6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "CommisionViewer")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "ActionCommisionExecute", async function ActionCommisionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CommisionViewer")), "Visible", $.not((await $.mv((await $.v(C, "CommisionViewer")), "Visible"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "scbOperatorChange", async function scbOperatorChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "FilterChanged", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransactionsMainForm", "ToolButton11Click", async function ToolButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["cs_name"] = "EXCHANGE_CALLBACK";
  {
    const $t101 = (await $.mv((await $.v(C, "TransactionsDataModule")), "OraclePackage"));
    await $.stmt((await $.wcall([$t101], "CallProcedure", [(await $.wv([$t101], "cs_name", { get: async () => L0["cs_name"], set: async (v) => { L0["cs_name"] = v; }, local: true }, false)), []], C)));
  }
  await $.stmt($.call(C, "Sb_Commit", []));
  await $.mcall((await $.v(C, "RefreshAction")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
