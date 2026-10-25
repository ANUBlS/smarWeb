// Generated from BalanceRefEditImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BalanceRefEditImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActiveX", "AxCtrls", "BalanceRefEdit_TLB", "StdVcl", "Db", "OracleData", "DBCtrls", "StdCtrls", "Mask", "Grids", "DBGrids", "ComCtrls", "ExtCtrls", "ToolWin", "XFSCtrls", "Oracle", "ComObj", "ComServ", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TBalanceRefEditX", "TActiveForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "dbnavigator": {"name": "DBNavigator", "type": "TDBNavigator"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "comboboxplan": {"name": "ComboBoxPlan", "type": "TComboBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbcheckbox1": {"name": "DBCheckBox1", "type": "TDBCheckBox"}, "dbcheckbox2": {"name": "DBCheckBox2", "type": "TDBCheckBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "balancedataset": {"name": "BalanceDataSet", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "comboboxtypeid_name": {"name": "ComboBoxTYPEID_NAME", "type": "TComboBox"}, "comboboxadditionaltypeid_name": {"name": "ComboBoxADDITIONALTYPEID_NAME", "type": "TComboBox"}, "cmbboxcurrposition": {"name": "CmbBoxCurrPosition", "type": "TComboBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "cmbboxcashincoming": {"name": "CmbBoxCashIncoming", "type": "TComboBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "closetypes": {"name": "CloseTypes", "type": "TDataSource"}, "closetypesdata": {"name": "CloseTypesData", "type": "TOracleDataSet"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbcheckbox3": {"name": "DBCheckBox3", "type": "TDBCheckBox"}, "balancedatasetbal_cn": {"name": "BalanceDataSetBAL_CN", "type": "TFloatField"}, "balancedatasettypeid": {"name": "BalanceDataSetTYPEID", "type": "TFloatField"}, "balancedatasetadditionaltypeid": {"name": "BalanceDataSetADDITIONALTYPEID", "type": "TFloatField"}, "balancedatasetaccgroup": {"name": "BalanceDataSetACCGROUP", "type": "TFloatField"}, "balancedatasetaccclass": {"name": "BalanceDataSetACCCLASS", "type": "TFloatField"}, "balancedatasetsaldo": {"name": "BalanceDataSetSALDO", "type": "TFloatField"}, "balancedatasetpart": {"name": "BalanceDataSetPART", "type": "TIntegerField"}, "balancedatasetbalname": {"name": "BalanceDataSetBALNAME", "type": "TWideStringField"}, "balancedatasetclosebalance": {"name": "BalanceDataSetCLOSEBALANCE", "type": "TFloatField"}, "balancedatasetratedifference": {"name": "BalanceDataSetRATEDIFFERENCE", "type": "TFloatField"}, "balancedatasetcurrencyposition": {"name": "BalanceDataSetCURRENCYPOSITION", "type": "TFloatField"}, "balancedatasettypeid_name": {"name": "BalanceDataSetTYPEID_NAME", "type": "TStringField"}, "balancedatasetadditionaltypeid_name": {"name": "BalanceDataSetADDITIONALTYPEID_NAME", "type": "TStringField"}, "balancedatasetsaldo_name": {"name": "BalanceDataSetSALDO_NAME", "type": "TWideStringField"}, "balancedatasetratedifference_name": {"name": "BalanceDataSetRATEDIFFERENCE_NAME", "type": "TWideStringField"}, "balancedatasetcurrencyposition_name": {"name": "BalanceDataSetCURRENCYPOSITION_NAME", "type": "TWideStringField"}, "balancedatasetcashincoming": {"name": "BalanceDataSetCASHINCOMING", "type": "TFloatField"}, "balancedatasetfromtrans": {"name": "BalanceDataSetFROMTRANS", "type": "TIntegerField"}, "balancedatasetcust_type": {"name": "BalanceDataSetCUST_TYPE", "type": "TIntegerField"}, "balancedatasetcust_type_name": {"name": "BalanceDataSetCUST_TYPE_NAME", "type": "TWideStringField"}, "cboxcusttype": {"name": "CBoxCustType", "type": "TComboBox"}, "closetypesdataid": {"name": "CloseTypesDataID", "type": "TFloatField"}, "closetypesdatadisplayname": {"name": "CloseTypesDataDISPLAYNAME", "type": "TWideStringField"}, "balancedatasetinter_valute": {"name": "BalanceDataSetINTER_VALUTE", "type": "TIntegerField"}, "balancedatasetresident": {"name": "BalanceDataSetRESIDENT", "type": "TIntegerField"}, "balancedatasetgovernment": {"name": "BalanceDataSetGOVERNMENT", "type": "TIntegerField"}, "balancedatasetsymb": {"name": "BalanceDataSetSYMB", "type": "TWideStringField"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "account_symbols": {"name": "account_symbols", "type": "TOracleDataSet"}, "label11": {"name": "Label11", "type": "TLabel"}, "balancedatasetinter_val_name": {"name": "BalanceDataSetInter_Val_Name", "type": "TWideStringField"}, "label12": {"name": "Label12", "type": "TLabel"}, "balancedatasetval": {"name": "BalanceDataSetVAL", "type": "TFloatField"}, "balancedatasetrez": {"name": "BalanceDataSetREZ", "type": "TFloatField"}, "balancedatasetsferadey": {"name": "BalanceDataSetSFERADEY", "type": "TFloatField"}, "balancedatasetacc_type": {"name": "BalanceDataSetACC_TYPE", "type": "TFloatField"}, "cbresident": {"name": "CBResident", "type": "TComboBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "cbdovlet": {"name": "CBDovlet", "type": "TComboBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "ods_type": {"name": "ODS_Type", "type": "TOracleDataSet"}, "ods_typeid": {"name": "ODS_TypeID", "type": "TFloatField"}, "ods_typename": {"name": "ODS_TypeNAME", "type": "TWideStringField"}, "balancedatasetacctype_name": {"name": "BalanceDataSetAccType_Name", "type": "TWideStringField"}, "odssferadey": {"name": "ODSSferadey", "type": "TOracleDataSet"}, "odssferadeyid": {"name": "ODSSferadeyID", "type": "TFloatField"}, "odssferadeyname": {"name": "ODSSferadeyNAME", "type": "TWideStringField"}, "balancedatasetsferadey_name": {"name": "BalanceDataSetSferadey_Name", "type": "TWideStringField"}, "balancedatasetresident_name": {"name": "BalanceDataSetResident_Name", "type": "TStringField"}, "balancedatasetgovernment_name": {"name": "BalanceDataSetGOVERNMENT_Name", "type": "TWideStringField"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "dbcheckbox4": {"name": "DBCheckBox4", "type": "TDBCheckBox"}, "balancedatasetgoaml": {"name": "BalanceDataSetGOAML", "type": "TIntegerField"}, "cb_millixarici": {"name": "CB_MilliXarici", "type": "TComboBox"}, "ods_vid": {"name": "ODS_VID", "type": "TOracleDataSet"}, "ods_vidid": {"name": "ODS_VIDID", "type": "TFloatField"}, "ods_vidname": {"name": "ODS_VIDNAME", "type": "TWideStringField"}, "balancedatasetvid": {"name": "BalanceDataSetVID", "type": "TWideStringField"}, "balancedatasetperiod": {"name": "BalanceDataSetPERIOD", "type": "TIntegerField"}, "cbperiod": {"name": "CBPeriod", "type": "TComboBox"}, "balancedatasetcr_period": {"name": "BalanceDataSetcr_period", "type": "TWideStringField"}, "label15": {"name": "Label15", "type": "TLabel"}, "ods_sector": {"name": "ODS_Sector", "type": "TOracleDataSet"}, "ods_sectorid": {"name": "ODS_SectorID", "type": "TFloatField"}, "ods_sectorname": {"name": "ODS_SectorNAME", "type": "TWideStringField"}, "ods_sectorkod": {"name": "ODS_SectorKOD", "type": "TWideStringField"}, "balancedatasetsector_id": {"name": "BalanceDataSetSECTOR_ID", "type": "TIntegerField"}, "balancedatasetsector_name": {"name": "BalanceDataSetSector_Name", "type": "TWideStringField"}, "balancedatasetsector_kod": {"name": "BalanceDataSetSector_Kod", "type": "TStringField"}, "label16": {"name": "Label16", "type": "TLabel"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "balancedatasetincome_rpt_name": {"name": "BalanceDataSetINCOME_RPT_NAME", "type": "TStringField"}, "balancedatasetlikvida": {"name": "BalanceDataSetLIKVIDA", "type": "TFloatField"}, "balancedatasetbank_balance": {"name": "BalanceDataSetBANK_BALANCE", "type": "TFloatField"}, "balancedatasetincome_rpt": {"name": "BalanceDataSetINCOME_RPT", "type": "TFloatField"}, "oraclesession1": {"name": "OracleSession1", "type": "TOracleSession"}, "fevents": {"name": "FEvents", "type": "IBalanceRefEditXEvents"}}, {});
  U.init(async () => {
  });
  U.method("TBalanceRefEditX", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TBalanceRefEditX", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TBalanceRefEditX", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TBalanceRefEditX", "Initialize", null, arguments);
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
  U.method("TBalanceRefEditX", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TBalanceRefEditX", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBalanceRefEditX", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CBDovletChange", async function CBDovletChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.mcall((await $.v(C, "BalanceDataSet")), "FieldByName", ["GOVERNMENT"])), "AsInteger", (await $.mv((await $.v(C, "CBDovlet")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CBoxCustTypeChange", async function CBoxCustTypeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.mcall((await $.v(C, "BalanceDataSet")), "FieldByName", ["CUST_TYPE"])), "AsInteger", (await $.mv((await $.v(C, "CBoxCustType")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CBPeriodChange", async function CBPeriodChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.mcall((await $.v(C, "BalanceDataSet")), "FieldByName", ["PERIOD"])), "AsInteger", (await $.mv((await $.v(C, "CBPeriod")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CBResidentChange", async function CBResidentChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.mcall((await $.v(C, "BalanceDataSet")), "FieldByName", ["Resident"])), "AsInteger", (await $.mv((await $.v(C, "CBResident")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CB_MilliXariciChange", async function CB_MilliXariciChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.mcall((await $.v(C, "BalanceDataSet")), "FieldByName", ["inter_valute"])), "AsInteger", (await $.mv((await $.v(C, "CB_MilliXarici")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TBalanceRefEditX", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TBalanceRefEditX", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBalanceRefEditX", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TBalanceRefEditX", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TBalanceRefEditX", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TBalanceRefEditX", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TBalanceRefEditX", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TBalanceRefEditX", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TBalanceRefEditX", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TBalanceRefEditX", "BalanceDataSetCalcFields", async function BalanceDataSetCalcFields(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  { const $t1 = (await $.mv((await $.v(C, "BalanceDataSetTYPEID")), "AsInteger"));
    if ($.eq($t1, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetTYPEID_NAME")), "Value", "Aktiv");
    }
    else if ($.eq($t1, 2)) {
      await $.mset((await $.v(C, "BalanceDataSetTYPEID_NAME")), "Value", "Passiv");
    }
    else if ($.eq($t1, 3)) {
      await $.mset((await $.v(C, "BalanceDataSetTYPEID_NAME")), "Value", "Aktiv-Passiv");
    }
  }
  { const $t2 = (await $.mv((await $.v(C, "BalanceDataSetINCOME_RPT")), "AsInteger"));
    if ($.eq($t2, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetINCOME_RPT_NAME")), "Value", "İştirak etmir");
    }
    else if ($.eq($t2, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetINCOME_RPT_NAME")), "Value", "İştirak edir");
    }
  }
  { const $t3 = (await $.mv((await $.v(C, "BalanceDataSetADDITIONALTYPEID")), "AsInteger"));
    if ($.eq($t3, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetADDITIONALTYPEID_NAME")), "Value", "Aktiv");
    }
    else if ($.eq($t3, 2)) {
      await $.mset((await $.v(C, "BalanceDataSetADDITIONALTYPEID_NAME")), "Value", "Passiv");
    }
    else if ($.eq($t3, 3)) {
      await $.mset((await $.v(C, "BalanceDataSetADDITIONALTYPEID_NAME")), "Value", "Aktiv-Passiv");
    }
  }
  { const $t4 = (await $.mv((await $.v(C, "BalanceDataSetRATEDIFFERENCE")), "AsInteger"));
    if ($.eq($t4, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetRATEDIFFERENCE_NAME")), "Value", "Hesablanmır");
    }
    else if ($.eq($t4, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetRATEDIFFERENCE_NAME")), "Value", "Hesablanır");
    }
  }
  { const $t5 = (await $.mv((await $.v(C, "BalanceDataSetSALDO")), "AsInteger"));
    if ($.eq($t5, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetSALDO_NAME")), "Value", "Nəzərə alınmır");
    }
    else if ($.eq($t5, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetSALDO_NAME")), "Value", "Nəzərə alınır");
    }
  }
  { const $t6 = (await $.mv((await $.v(C, "BalanceDataSetCURRENCYPOSITION")), "AsInteger"));
    if ($.eq($t6, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetCURRENCYPOSITION_NAME")), "Value", "Heç birində");
    }
    else if ($.eq($t6, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetCURRENCYPOSITION_NAME")), "Value", "Aktivlərdə");
    }
    else if ($.eq($t6, 2)) {
      await $.mset((await $.v(C, "BalanceDataSetCURRENCYPOSITION_NAME")), "Value", "Passivlərdə");
    }
    else if ($.eq($t6, 3)) {
      await $.mset((await $.v(C, "BalanceDataSetCURRENCYPOSITION_NAME")), "Value", "Hər birində");
    }
  }
  { const $t7 = (await $.mv((await $.v(C, "BalanceDataSetCUST_TYPE")), "AsInteger"));
    if ($.eq($t7, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetCUST_TYPE_NAME")), "Value", "Hüquqi şəxslər");
    }
    else if ($.eq($t7, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetCUST_TYPE_NAME")), "Value", "Fiziki şəxslər");
    }
    else if ($.eq($t7, 2)) {
      await $.mset((await $.v(C, "BalanceDataSetCUST_TYPE_NAME")), "Value", "Fiziki sahibkarlar");
    }
    else if ($.eq($t7, 3)) {
      await $.mset((await $.v(C, "BalanceDataSetCUST_TYPE_NAME")), "Value", "Fiziki şəxs və sahibkar");
    }
    else if ($.eq($t7, 5)) {
      await $.mset((await $.v(C, "BalanceDataSetCUST_TYPE_NAME")), "Value", "Bütün");
    }
  }
  { const $t8 = (await $.mv((await $.v(C, "BalanceDataSetINTER_VALUTE")), "AsInteger"));
    if ($.eq($t8, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetInter_Val_Name")), "Value", "Milli valyuta");
    }
    else if ($.eq($t8, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetInter_Val_Name")), "Value", "Xarici valyuta");
    }
    else if ($.eq($t8, 2)) {
      await $.mset((await $.v(C, "BalanceDataSetInter_Val_Name")), "Value", "Qiymətli metallar");
    }
  }
  { const $t9 = (await $.mv((await $.v(C, "BalanceDataSetRESIDENT")), "AsInteger"));
    if ($.eq($t9, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetRESIDENT_Name")), "Value", "Qeyri Rezident");
    }
    else if ($.eq($t9, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetRESIDENT_Name")), "Value", "Rezident");
    }
  }
  { const $t10 = (await $.mv((await $.v(C, "BalanceDataSetGOVERNMENT")), "AsInteger"));
    if ($.eq($t10, 0)) {
      await $.mset((await $.v(C, "BalanceDataSetGOVERNMENT_Name")), "Value", "Dövlət");
    }
    else if ($.eq($t10, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetGOVERNMENT_Name")), "Value", "Özəl");
    }
  }
  { const $t11 = (await $.mv((await $.v(C, "BalanceDataSetPERIOD")), "AsInteger"));
    if ($.eq($t11, 1)) {
      await $.mset((await $.v(C, "BalanceDataSetcr_period")), "Value", "Uzun müddətli kredit");
    }
    else if ($.eq($t11, 2)) {
      await $.mset((await $.v(C, "BalanceDataSetcr_period")), "Value", "Qısa müddətli kredit");
    }
    else {
      await $.mset((await $.v(C, "BalanceDataSetcr_period")), "Value", "yox");
    }
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TBalanceRefEditX", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Open", []);
  await $.mcall((await $.v(C, "ODS_Type")), "Open", []);
  await $.mcall((await $.v(C, "ODSSferadey")), "Open", []);
  await $.mcall((await $.v(C, "account_symbols")), "Open", []);
  await $.mcall((await $.v(C, "CloseTypesData")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "ComboBoxPlanChange", async function ComboBoxPlanChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t12 = (await $.mv((await $.v(C, "ComboBoxPlan")), "ItemIndex"));
    if ($.eq($t12, 0)) {
      { const $t13 = await $.iset((await $.mv((await $.v(C, "BalanceDataSet")), "SQL")), [1], "bal_spr1 b"); if ($t13 !== undefined) { await $.mset((await $.v(C, "BalanceDataSet")), "SQL", $t13); } }
    }
    else if ($.eq($t12, 1)) {
      { const $t14 = await $.iset((await $.mv((await $.v(C, "BalanceDataSet")), "SQL")), [1], "bal_spr2 b"); if ($t14 !== undefined) { await $.mset((await $.v(C, "BalanceDataSet")), "SQL", $t14); } }
    }
    else if ($.eq($t12, 2)) {
      { const $t15 = await $.iset((await $.mv((await $.v(C, "BalanceDataSet")), "SQL")), [1], "bal_spr3 b"); if ($t15 !== undefined) { await $.mset((await $.v(C, "BalanceDataSet")), "SQL", $t15); } }
    }
    else if ($.eq($t12, 3)) {
      { const $t16 = await $.iset((await $.mv((await $.v(C, "BalanceDataSet")), "SQL")), [1], "bal_spr4 b"); if ($t16 !== undefined) { await $.mset((await $.v(C, "BalanceDataSet")), "SQL", $t16); } }
    }
  }
  await $.mcall((await $.v(C, "BalanceDataSet")), "Close", []);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "BalanceDataSetAfterScroll", async function BalanceDataSetAfterScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.v(C, "ComboBoxTYPEID_NAME")), "ItemIndex", $.sub((await $.mv((await $.v(C, "BalanceDataSetTYPEID")), "asinteger")), 1));
  await $.mset((await $.v(C, "ComboBoxADDITIONALTYPEID_NAME")), "ItemIndex", $.sub((await $.mv((await $.v(C, "BalanceDataSetADDITIONALTYPEID")), "asinteger")), 1));
  await $.mset((await $.v(C, "CBoxCustType")), "Itemindex", (await $.mv((await $.v(C, "BalanceDataSetCust_Type")), "AsInteger")));
  await $.mset((await $.v(C, "CB_MilliXarici")), "ItemIndex", (await $.mv((await $.v(C, "BalanceDataSetINTER_VALUTE")), "AsInteger")));
  await $.mset((await $.v(C, "CBResident")), "ItemIndex", (await $.mv((await $.v(C, "BalanceDataSetResident")), "AsInteger")));
  await $.mset((await $.v(C, "CBDovlet")), "ItemIndex", (await $.mv((await $.v(C, "BalanceDataSetGOVERNMENT")), "AsInteger")));
  await $.mset((await $.v(C, "ComboBox1")), "ItemIndex", (await $.mv((await $.v(C, "BalanceDataSetINCOME_RPT")), "AsInteger")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TBalanceRefEditX", "ComboBoxTYPEID_NAMEChange", async function ComboBoxTYPEID_NAMEChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.v(C, "BalanceDataSetTYPEID")), "AsInteger", $.add((await $.mv((await $.v(C, "ComboBoxTYPEID_NAME")), "ItemIndex")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Open", []);
  await $.mcall((await $.v(C, "ODS_Sector")), "Open", []);
  await $.mcall((await $.v(C, "ODS_Type")), "Open", []);
  await $.mcall((await $.v(C, "ODSSferadey")), "Open", []);
  await $.mcall((await $.v(C, "ODS_VID")), "Open", []);
  await $.mcall((await $.v(C, "account_symbols")), "Open", []);
  await $.mcall((await $.v(C, "CloseTypesData")), "Open", []);
  await $.mset((await $.v(C, "ComboBoxTYPEID_NAME")), "ItemIndex", $.sub((await $.mv((await $.v(C, "BalanceDataSetTYPEID")), "asinteger")), 1));
  await $.mset((await $.v(C, "CmbBoxCurrPosition")), "ItemIndex", 0);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.mcall((await $.v(C, "BalanceDataSet")), "FieldByName", ["INCOME_RPT"])), "AsInteger", (await $.mv((await $.v(C, "ComboBox1")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "ComboBoxADDITIONALTYPEID_NAMEChange", async function ComboBoxADDITIONALTYPEID_NAMEChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.v(C, "BalanceDataSetADDITIONALTYPEID")), "AsInteger", $.add((await $.mv((await $.v(C, "ComboBoxADDITIONALTYPEID_NAME")), "ItemIndex")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "EditSearchChange", async function EditSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataSource1")), "DataSet")), "Locate", ["BAL_CN", (await $.mv((await $.v(C, "EditSearch")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CmbBoxCurrPositionChange", async function CmbBoxCurrPositionChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.v(C, "BalanceDataSetCURRENCYPOSITION")), "Value", (await $.mv((await $.v(C, "CmbBoxCurrPosition")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "CmbBoxCashIncomingChange", async function CmbBoxCashIncomingChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BalanceDataSet")), "Edit", []);
  await $.mset((await $.mcall((await $.v(C, "BalanceDataSet")), "FieldByName", ["CashIncoming"])), "AsInteger", (await $.mv((await $.v(C, "CmbBoxCashIncoming")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBalanceRefEditX", "DataSource1DataChange", async function DataSource1DataChange(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "field": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "field"]);
  await $.mset((await $.v(C, "CmbBoxCashIncoming")), "ItemIndex", (await $.mv((await $.v(C, "BalanceDataSetCASHINCOMING")), "AsInteger")));
  await $.mset((await $.v(C, "CmbBoxCurrPosition")), "ItemIndex", (await $.mv((await $.v(C, "BalanceDataSetCURRENCYPOSITION")), "AsInteger")));
  return L0.result;
}, {"params": ["Sender", "Field"], "kind": "procedure", "ptypes": ["TObject", "TField"]});
  return U;
}
