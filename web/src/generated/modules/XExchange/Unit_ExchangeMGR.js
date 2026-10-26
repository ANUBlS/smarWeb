// Generated from Unit_ExchangeMGR.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_ExchangeMGR", ["Windows", "Messages", "SysUtils", "Db", "DBTables", "ExtCtrls", "Dialogs", "ImgList", "Variants", "Controls", "Menus", "DBCtrls", "StdCtrls", "ComCtrls", "Buttons", "DBGrids", "Mask", "Grids", "DBGridEh", "ToolWin", "Classes", "Graphics", "Forms", "ActiveX", "AxCtrls", "ExchangeMGR_TLB", "StdVcl", "ShellApi", "CMExcelExport", "DBGridEhGrouping", "GridsEh", "ComObj", "ComServ", "UnitDateExch", "UnitRate", "UnitExchange", "UnitPurchase", "UnitProcAndFunc", "UnitSelling", "UnitRemainder", "UnitExAccModify", "UnitAddExch", "UnitEditExch", "IniFiles", "UnitRep", "UnitAdmin", "UnitRepTurn", "UNITRATEOPEN", "sboapiDataModuleImpl", "SBTranslateProc", "UnitParametr", "UnitExchRep", "UnitRepX", "UnitReestr", "UnitFormReester", "UnitReestrEnd", "UnitFastReport", "UnitToplam", "UnitRemandirReport", "UnitExchAccount", "UnitResursGive", "UnitResursReturn"]);
  const C = [U];
  U.const("sePurchaseInsert", 0);
  U.const("sePurchaseEdit", 1);
  U.const("seSellingInsert", 2);
  U.const("seSellingEdit", 3);
  U.const("seExchangeInsert", 4);
  U.const("seExchangeEdit", 5);
  $.defRecord("ttrans", {"status": () => 0, "operator_id": () => 0, "trans_date": () => 0, "debit_amount": () => 0, "l_amount": () => 0, "fee_amount": () => 0, "val_course": () => 0, "trans_name": () => '', "cust_name": () => '', "cust_lname": () => '', "cust_passport": () => '', "exch_name": () => '', "val_id": () => 0, "ex_id": () => 0, "cust_father": () => '', "cust_date": () => null, "cust_confirm": () => '', "cust_giving_member": () => '', "val_nb_course": () => 0, "op_time": () => 0, "val_name": () => '', "val_changed_name": () => '', "val_changed_id": () => 0, "val_changed_course": () => 0, "cust_country": () => '', "country": () => '', "transclose": () => 0, "sessionname": () => '', "rdebitamount": () => 0, "rlamount": () => 0, "cashless": () => 0});
  U.defClass("TExchangeMGR_X", "TActiveForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "pagecontrol": {"name": "PageControl", "type": "TPageControl"}, "tabshmain": {"name": "TabShMain", "type": "TTabSheet"}, "toolbar": {"name": "ToolBar", "type": "TToolBar"}, "tba": {"name": "TBA", "type": "TToolButton"}, "toolbtnadd": {"name": "ToolBtnAdd", "type": "TToolButton"}, "tbs": {"name": "TBS", "type": "TToolButton"}, "toolbtnedit": {"name": "ToolBtnEdit", "type": "TToolButton"}, "tbd": {"name": "TBD", "type": "TToolButton"}, "toolbtndelete": {"name": "ToolBtnDelete", "type": "TToolButton"}, "tbf": {"name": "TBF", "type": "TToolButton"}, "toolbutton15": {"name": "ToolButton15", "type": "TToolButton"}, "toolbutton23": {"name": "ToolButton23", "type": "TToolButton"}, "gridmaster": {"name": "GridMaster", "type": "TDBGridEh"}, "panelstyle": {"name": "PanelStyle", "type": "TPanel"}, "tabshtrans": {"name": "TabShTrans", "type": "TTabSheet"}, "panelm": {"name": "PanelM", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dtp_system_date": {"name": "DTP_System_Date", "type": "TDateTimePicker"}, "dtp_system_time": {"name": "DTP_System_Time", "type": "TDateTimePicker"}, "toolbaroper": {"name": "ToolBarOper", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "toolbtnaddtrans": {"name": "ToolBtnAddTrans", "type": "TToolButton"}, "tbtnedittrans": {"name": "TBtnEditTrans", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbtnfile": {"name": "ToolBtnFile", "type": "TToolButton"}, "tbreturntransclose": {"name": "TBReturnTransClose", "type": "TToolButton"}, "tlbostat": {"name": "TlBOstat", "type": "TToolButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgridehtrans": {"name": "DBGridEhTrans", "type": "TDBGridEh"}, "panelsearch": {"name": "PanelSearch", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "edit_src_amount": {"name": "Edit_Src_Amount", "type": "TEdit"}, "edit_src_ekv_amount": {"name": "Edit_Src_Ekv_Amount", "type": "TEdit"}, "edit_src_fee": {"name": "Edit_Src_Fee", "type": "TEdit"}, "edit_src_course": {"name": "Edit_Src_Course", "type": "TEdit"}, "dbeditsum": {"name": "DBEditSum", "type": "TDBEdit"}, "tabshrate": {"name": "TabShRate", "type": "TTabSheet"}, "dbgridrate": {"name": "DBGridRate", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "toolbarrate": {"name": "ToolBarRate", "type": "TToolBar"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "dtp_rate_date": {"name": "DTP_Rate_Date", "type": "TDateTimePicker"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "dbnavrate": {"name": "DBNavRate", "type": "TDBNavigator"}, "toolbutton13": {"name": "ToolButton13", "type": "TToolButton"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "toolbutton14": {"name": "ToolButton14", "type": "TToolButton"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "popupmenu": {"name": "PopupMenu", "type": "TPopupMenu"}, "purchase": {"name": "Purchase", "type": "TMenuItem"}, "selling": {"name": "Selling", "type": "TMenuItem"}, "exchangecurrency": {"name": "ExchangeCurrency", "type": "TMenuItem"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "opendialog": {"name": "OpenDialog", "type": "TOpenDialog"}, "savedialog": {"name": "SaveDialog", "type": "TSaveDialog"}, "timer": {"name": "Timer", "type": "TTimer"}, "toolbutton25": {"name": "ToolButton25", "type": "TToolButton"}, "toolbutton26": {"name": "ToolButton26", "type": "TToolButton"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "paneltop": {"name": "PanelTop", "type": "TPanel"}, "btnfile": {"name": "BtnFile", "type": "TBitBtn"}, "btntrans": {"name": "BtnTrans", "type": "TBitBtn"}, "progressbar": {"name": "ProgressBar", "type": "TProgressBar"}, "btnalltrans": {"name": "BtnAllTrans", "type": "TBitBtn"}, "chbox_flags": {"name": "ChBox_Flags", "type": "TCheckBox"}, "querytrans": {"name": "QueryTrans", "type": "TQuery"}, "dsquerytrans": {"name": "DSQueryTrans", "type": "TDataSource"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheettrans": {"name": "TabSheetTrans", "type": "TTabSheet"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panelleft": {"name": "PanelLeft", "type": "TPanel"}, "groupboxdat": {"name": "GroupBoxDat", "type": "TGroupBox"}, "dtp_begin": {"name": "DTP_Begin", "type": "TDateTimePicker"}, "dtp_end": {"name": "DTP_End", "type": "TDateTimePicker"}, "groupboxstatus": {"name": "GroupBoxStatus", "type": "TGroupBox"}, "cbox_status": {"name": "CBox_Status", "type": "TComboBox"}, "panelfilter": {"name": "PanelFilter", "type": "TPanel"}, "groupboxcurrency": {"name": "GroupBoxCurrency", "type": "TGroupBox"}, "dblc_currency": {"name": "DBLC_Currency", "type": "TDBLookupComboBox"}, "chboxcurrency": {"name": "ChBoxCurrency", "type": "TCheckBox"}, "btnsearch": {"name": "BtnSearch", "type": "TBitBtn"}, "btnprint": {"name": "BtnPrint", "type": "TBitBtn"}, "groupboxexchange": {"name": "GroupBoxExchange", "type": "TGroupBox"}, "dblc_exchange": {"name": "DBLC_Exchange", "type": "TDBLookupComboBox"}, "chboxexchange": {"name": "ChBoxExchange", "type": "TCheckBox"}, "panelclient": {"name": "PanelClient", "type": "TPanel"}, "tabsheetrate": {"name": "TabSheetRate", "type": "TTabSheet"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dtp_dat": {"name": "DTP_Dat", "type": "TDateTimePicker"}, "dblc_exch_rate": {"name": "DBLC_Exch_Rate", "type": "TDBLookupComboBox"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "dbgrideh3": {"name": "DBGridEh3", "type": "TDBGridEh"}, "toolbutton27": {"name": "ToolButton27", "type": "TToolButton"}, "toolbutton29": {"name": "ToolButton29", "type": "TToolButton"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbgrideh4": {"name": "DBGridEh4", "type": "TDBGridEh"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dblcbdelete": {"name": "DBLCBDelete", "type": "TDBLookupComboBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "bitbtn7": {"name": "BitBtn7", "type": "TBitBtn"}, "toolbutton30": {"name": "ToolButton30", "type": "TToolButton"}, "toolbutton31": {"name": "ToolButton31", "type": "TToolButton"}, "label11": {"name": "Label11", "type": "TLabel"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton12": {"name": "ToolButton12", "type": "TToolButton"}, "toolbutton21": {"name": "ToolButton21", "type": "TToolButton"}, "toolbutton24": {"name": "ToolButton24", "type": "TToolButton"}, "toolbutton28": {"name": "ToolButton28", "type": "TToolButton"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "bitbtn8": {"name": "BitBtn8", "type": "TBitBtn"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "datetimepicker4": {"name": "DateTimePicker4", "type": "TDateTimePicker"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "bitbtn9": {"name": "BitBtn9", "type": "TBitBtn"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "dbcb_toplam": {"name": "DBCB_Toplam", "type": "TDBLookupComboBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "bitbtn10": {"name": "BitBtn10", "type": "TBitBtn"}, "dbgridreporting": {"name": "DBGridReporting", "type": "TDBGrid"}, "tabremainder": {"name": "TabRemainder", "type": "TTabSheet"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton32": {"name": "ToolButton32", "type": "TToolButton"}, "dtp_remainder_date": {"name": "DTP_Remainder_Date", "type": "TDateTimePicker"}, "toolbutton35": {"name": "ToolButton35", "type": "TToolButton"}, "bitbtn12": {"name": "BitBtn12", "type": "TBitBtn"}, "dbgridremain": {"name": "DBGridRemain", "type": "TDBGrid"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dtp_datereestr": {"name": "DTP_DateReestr", "type": "TDateTimePicker"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "bitbtn11": {"name": "BitBtn11", "type": "TBitBtn"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "bitbtn13": {"name": "BitBtn13", "type": "TBitBtn"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "dbgrideh2": {"name": "DBGridEh2", "type": "TDBGridEh"}, "tabshresurs": {"name": "TabShResurs", "type": "TTabSheet"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "datetimepicker5": {"name": "DateTimePicker5", "type": "TDateTimePicker"}, "datetimepicker6": {"name": "DateTimePicker6", "type": "TDateTimePicker"}, "toolbar2": {"name": "ToolBar2", "type": "TToolBar"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "toolbutton22": {"name": "ToolButton22", "type": "TToolButton"}, "toolbutton33": {"name": "ToolButton33", "type": "TToolButton"}, "toolbutton34": {"name": "ToolButton34", "type": "TToolButton"}, "toolbutton36": {"name": "ToolButton36", "type": "TToolButton"}, "toolbutton37": {"name": "ToolButton37", "type": "TToolButton"}, "toolbutton38": {"name": "ToolButton38", "type": "TToolButton"}, "toolbutton39": {"name": "ToolButton39", "type": "TToolButton"}, "toolbutton42": {"name": "ToolButton42", "type": "TToolButton"}, "toolbutton45": {"name": "ToolButton45", "type": "TToolButton"}, "toolbutton48": {"name": "ToolButton48", "type": "TToolButton"}, "toolbutton49": {"name": "ToolButton49", "type": "TToolButton"}, "toolbutton47": {"name": "ToolButton47", "type": "TToolButton"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "dtp_datefilial": {"name": "DTP_DateFilial", "type": "TDateTimePicker"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "panel29": {"name": "Panel29", "type": "TPanel"}, "panel30": {"name": "Panel30", "type": "TPanel"}, "panel31": {"name": "Panel31", "type": "TPanel"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "panel33": {"name": "Panel33", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "panel34": {"name": "Panel34", "type": "TPanel"}, "panel35": {"name": "Panel35", "type": "TPanel"}, "panel36": {"name": "Panel36", "type": "TPanel"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "panel37": {"name": "Panel37", "type": "TPanel"}, "panel38": {"name": "Panel38", "type": "TPanel"}, "panel39": {"name": "Panel39", "type": "TPanel"}, "bitbtn14": {"name": "BitBtn14", "type": "TBitBtn"}, "popupmenuresurs": {"name": "PopupMenuResurs", "type": "TPopupMenu"}, "givingresurs": {"name": "GivingResurs", "type": "TMenuItem"}, "returnresurs": {"name": "ReturnResurs", "type": "TMenuItem"}, "filterradiogroup": {"name": "FilterRadioGroup", "type": "TRadioGroup"}, "panel47": {"name": "Panel47", "type": "TPanel"}, "panel48": {"name": "Panel48", "type": "TPanel"}, "panel50": {"name": "Panel50", "type": "TPanel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel51": {"name": "Panel51", "type": "TPanel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel52": {"name": "Panel52", "type": "TPanel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "fevents": {"name": "FEvents", "type": "IExchangeMGR_XEvents"}}, {});
  U.init(async () => {
    U.var_("ExchangeMGR_X", null, "TExchangeMGR_X");
    U.var_("StatusExchange", null, "TStatusExchange");
    U.var_("Trans", $.rec("ttrans"), "TTrans");
    U.var_("EditOrInsert", 0, "byte");
  });
  U.func("open_cust_data_sets", async function open_cust_data_sets(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "DataModExch"));
    await $.mcall((await $.wv([$t1], "ODSCust_Confirm", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSCust_Confirm", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODSCust_Country", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSCust_Country", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODSCust_Father", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSCust_Father", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODSCust_LName", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSCust_LName", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODSCust_Name", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSCust_Name", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODSGiving_Member", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSGiving_Member", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExchangeMGR_X", "InsertTransaction", async function InsertTransaction(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {
  const C = $.chain(Self, U);
  const L0 = {"status": $.copyArg(p0), "totable": $.copyArg(p1), "debitval": $.copyArg(p2), "kreditval": $.copyArg(p3), "debitaccno": $.copyArg(p4), "kreditaccno": $.copyArg(p5), "debitamount": $.copyArg(p6), "lamount": $.copyArg(p7), "debitrate": $.copyArg(p8), "kreditrate": $.copyArg(p9), "trname": $.copyArg(p10), "sessionname": $.copyArg(p11), result: undefined};
  await $.fixArgs(L0, ["status", "totable", "debitval", "kreditval", "debitaccno", "kreditaccno", "debitamount", "lamount", "debitrate", "kreditrate", "trname", "sessionname"]);
  {
    const $t2 = L0["totable"];
    await $.stmt($.wcall([$t2], "Insert", [], C));
    await $.mset((await $.wcall([$t2], "FieldByName", ["Status"], C)), "AsInteger", (await $.wv([$t2], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["DebitVal"], C)), "AsString", (await $.wv([$t2], "DebitVal", { get: async () => L0["debitval"], set: async (v) => { L0["debitval"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["KreditVal"], C)), "AsString", (await $.wv([$t2], "KreditVal", { get: async () => L0["kreditval"], set: async (v) => { L0["kreditval"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["DebitAccno"], C)), "AsString", (await $.wv([$t2], "DebitAccno", { get: async () => L0["debitaccno"], set: async (v) => { L0["debitaccno"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["KreditAccNo"], C)), "AsString", (await $.wv([$t2], "KreditAccno", { get: async () => L0["kreditaccno"], set: async (v) => { L0["kreditaccno"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["DebitAmount"], C)), "AsFloat", (await $.wv([$t2], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["LAmount"], C)), "AsFloat", (await $.wv([$t2], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["DebitRate"], C)), "AsFloat", (await $.wv([$t2], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["KreditRate"], C)), "AsFloat", (await $.wv([$t2], "KreditRate", { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["TrName"], C)), "AsString", (await $.wv([$t2], "TrName", { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t2], "FieldByName", ["SessionName"], C)), "AsString", (await $.wcall([$t2], "UpperCase", [(await $.mv((await $.mv((await $.mv((await $.wv([$t2], "DataModExch", C, false)), "OPExchMgr")), "Session")), "LogonUsername"))], C)));
    await $.stmt($.wcall([$t2], "Post", [], C));
  }
  return L0.result;
}, {"params": ["Status", "ToTable", "DebitVal", "KreditVal", "DebitAccno", "KreditAccNo", "DebitAmount", "LAmount", "DebitRate", "KreditRate", "TrName", "SessionName"], "kind": "procedure", "ptypes": ["Integer", "TTable", "String", "String", "String", "String", "Real", "Real", "Real", "Real", "String", "String"]});
  U.method("TExchangeMGR_X", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TExchangeMGR_X", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TExchangeMGR_X", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TExchangeMGR_X", "Initialize", null, arguments);
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
  U.method("TExchangeMGR_X", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "Ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TExchangeMGR_X", "GivingResursClick", async function GivingResursClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBA_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["EXCH_RESURSINSERT"]])));
  await $.mset((await $.v(C, "FormGivenResurs")), "VResInsert", false);
  await $.mcall((await $.v(C, "FormGivenResurs")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TExchangeMGR_X", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TExchangeMGR_X", "PageControl1MouseActivate", async function PageControl1MouseActivate(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), "hittest": $.copyArg(p5), "mouseactivate": $.asRef(p6), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y", "hittest"]);
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y", "HitTest", "MouseActivate"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer", "Integer", "TMouseActivate"]});
  U.method("TExchangeMGR_X", "PageControl1MouseDown", async function PageControl1MouseDown(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  if ($.truthy((await $.mv((await $.v(C, "DBLC_Exchange")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBLC_Exchange")), "SetFocus", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "DBLC_Currency")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBLC_Currency")), "SetFocus", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "DBLCBDelete")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBLCBDelete")), "SetFocus", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "DBLookupComboBox1")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBLookupComboBox1")), "SetFocus", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "DBCB_Toplam")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBCB_Toplam")), "SetFocus", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "DBLookupComboBox3")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBLookupComboBox3")), "SetFocus", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "DBLookupComboBox6")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBLookupComboBox6")), "SetFocus", []);
  }
  if ($.truthy((await $.mv((await $.v(C, "DBLookupComboBox5")), "CanFocus")))) {
    await $.mcall((await $.v(C, "DBLookupComboBox5")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TExchangeMGR_X", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExchangeMGR_X", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExchangeMGR_X", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TExchangeMGR_X", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TExchangeMGR_X", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TExchangeMGR_X", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TExchangeMGR_X", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExchangeMGR_X", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExchangeMGR_X", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExchangeMGR_X", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TExchangeMGR_X", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TExchangeMGR_X", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExchangeMGR_X", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TExchangeMGR_X", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TExchangeMGR_X", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExchangeMGR_X", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TExchangeMGR_X", "BitBtn10Click", async function BitBtn10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "FormToplam")), "frxReportToplam")), "ShowReport", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn11Click", async function BitBtn11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_beg_dat": 0, "dat": 0, "sdat": 0, "lastday": 0, "exch_no": 0, "val_id": 0, "calendar": false};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DataModExch"));
    try {
      await $.mset((await $.wv([$t3], "Screen", C, false)), "Cursor", (await $.wv([$t3], "crSQLWait", C, false)));
      await $.wset([$t3], "v_beg_dat", (await $.wcall([$t3], "Integer", [(await $.wcall([$t3], "Trunc", [(await $.mv((await $.wv([$t3], "DTP_DateReestr", C, false)), "DateTime"))], C))], C)), { get: async () => L0["v_beg_dat"], set: async (v) => { L0["v_beg_dat"] = v; }, local: true });
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t3], "DBLookupComboBox6", C, false)), "KeyValue")), (await $.wv([$t3], "null", C, false)))), async () => ($.eq((await $.mv((await $.wv([$t3], "DBLookupComboBox5", C, false)), "KeyValue")), (await $.wv([$t3], "null", C, false)))))))) {
        await $.stmt((await $.wcall([$t3], "ShowMessage", ["Vdm-i və valyutanı seçin!..."], C)));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.wv([$t3], "DBLookupComboBox6", C, false)), "KeyValue")), (await $.wv([$t3], "null", C, false)))))) {
        await $.stmt((await $.wcall([$t3], "ShowMessage", ["Vdm-i seçin!..."], C)));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.wv([$t3], "DBLookupComboBox5", C, false)), "KeyValue")), (await $.wv([$t3], "null", C, false)))))) {
        await $.stmt((await $.wcall([$t3], "ShowMessage", ["Valyutanı seçin!..."], C)));
        return L0.result;
      }
      await $.wset([$t3], "exch_no", (await $.mv((await $.wv([$t3], "DBLookupComboBox6", C, false)), "KeyValue")), { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true });
      await $.wset([$t3], "val_id", (await $.mv((await $.wv([$t3], "DBLookupComboBox5", C, false)), "KeyValue")), { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true });
      {
        const $t4 = (await $.wv([$t3], "ODSReestrReport", C, false));
        await $.stmt($.wcall([$t3, $t4], "close", [], C));
        await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["dat", (await $.wv([$t3, $t4], "v_beg_dat", { get: async () => L0["v_beg_dat"], set: async (v) => { L0["v_beg_dat"] = v; }, local: true }, false))], C)));
        await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["ex_id", (await $.wv([$t3, $t4], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false))], C)));
        if ($.truthy($.eq((await $.wv([$t3, $t4], "val_id", { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true }, false)), (-(1))))) {
          { const $t5 = await $.iset((await $.mv((await $.wv([$t3, $t4], "ODSReestrReport", C, false)), "SQL")), [18], ""); if ($t5 !== undefined) { await $.mset((await $.wv([$t3, $t4], "ODSReestrReport", C, false)), "SQL", $t5); } }
        } else {
          { const $t6 = await $.iset((await $.mv((await $.wv([$t3, $t4], "ODSReestrReport", C, false)), "SQL")), [18], $.add("and val_id=", (await $.wcall([$t3, $t4], "IntToStr", [(await $.wv([$t3, $t4], "val_id", { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true }, false))], C)))); if ($t6 !== undefined) { await $.mset((await $.wv([$t3, $t4], "ODSReestrReport", C, false)), "SQL", $t6); } }
        }
        await $.stmt($.wcall([$t3, $t4], "Open", [], C));
      }
    } finally {
      await $.mset((await $.wv([$t3], "Screen", C, false)), "Cursor", (await $.wv([$t3], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn12Click", async function BitBtn12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "DataModExch"));
    if ($.truthy((await $.mv((await $.wv([$t7], "ODSExRemainder", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t7], "ODSExRemainder", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn13Click", async function BitBtn13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0, "lastday": 0, "sdat": 0, "exch_no": 0, "val_id": 0, "calendar": false};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Active")))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Cədvəldə məlumat yoxdur!..."])));
    return L0.result;
  }
  if ($.truthy(($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0)))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Cədvəldə məlumat yoxdur!..."])));
    return L0.result;
  }
  L0["dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_DateReestr")), "DateTime"))]))]));
  L0["sdat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBOPDate")), "CallDateFunction", ["get_date", []]))]))]));
  L0["calendar"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Ex_Calendar", [L0["dat"]]]));
  L0["lastday"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallDateFunction", ["LastWorkDay_Calendar", [L0["dat"]]]));
  L0["val_id"] = (await $.mv((await $.v(C, "DBLookupComboBox5")), "KeyValue"));
  L0["exch_no"] = (await $.mv((await $.v(C, "DBLookupComboBox6")), "KeyValue"));
  {
    const $t8 = (await $.v(C, "FormReestrReport"));
    const $t9 = (await $.wv([$t8], "DataModExch", C, false));
    await $.mset((await $.wv([$t8, $t9], "QRBankName", C, false)), "Caption", $.add($.add($.add((await $.mv((await $.wv([$t8, $t9], "ODSBankInfoBANK", C, false)), "AsString")), " "), (await $.mv((await $.wv([$t8, $t9], "QRBankName", C, false)), "Caption"))), (await $.mv((await $.wv([$t8, $t9], "ODSExchOfficeEX_NO", C, false)), "AsString"))));
    await $.mset((await $.wv([$t8, $t9], "QRDateReestr", C, false)), "Caption", (await $.wcall([$t8, $t9], "DateTimeToStr", [(await $.wcall([$t8, $t9], "trunc", [(await $.mv((await $.wv([$t8, $t9], "DTP_DateReestr", C, false)), "DateTime"))], C))], C)));
    {
      const $t10 = (await $.wv([$t8, $t9], "ODSReestrOstat", C, false));
      await $.stmt($.wcall([$t8, $t9, $t10], "Close", [], C));
      await $.mcall((await $.wv([$t8, $t9, $t10], "SQL", C, false)), "Clear", []);
      if ($.truthy(($.ge((await $.wv([$t8, $t9, $t10], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t8, $t9, $t10], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t10], "SQL", C, false)), "Add", ["begin exch_mgr.ExRemainderSql(vdat=>:dat,v_exid=>:ex_id,sdat=>:sdat,result=>:result); end;"])));
      }
      if ($.truthy((await $.and_((await $.and_(($.lt((await $.wv([$t8, $t9, $t10], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t8, $t9, $t10], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)))), async () => (await $.wv([$t8, $t9, $t10], "Calendar", { get: async () => L0["calendar"], set: async (v) => { L0["calendar"] = v; }, local: true }, false)))), async () => ($.eq((await $.wv([$t8, $t9, $t10], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t8, $t9, $t10], "Lastday", { get: async () => L0["lastday"], set: async (v) => { L0["lastday"] = v; }, local: true }, false)))))))) {
        await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t10], "SQL", C, false)), "Add", ["begin exch_mgr.ExRemainderSql(vdat=>:dat,v_exid=>:ex_id,sdat=>:sdat,result=>:result); end;"])));
      }
      if ($.truthy((await $.and_(($.lt((await $.wv([$t8, $t9, $t10], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t8, $t9, $t10], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)))), async () => ((await $.or_($.not(((await $.wv([$t8, $t9, $t10], "Calendar", { get: async () => L0["calendar"], set: async (v) => { L0["calendar"] = v; }, local: true }, false)))), async () => ($.lt((await $.wv([$t8, $t9, $t10], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t8, $t9, $t10], "Lastday", { get: async () => L0["lastday"], set: async (v) => { L0["lastday"] = v; }, local: true }, false))))))))))) {
        await $.stmt((await $.mcall((await $.wv([$t8, $t9, $t10], "SQL", C, false)), "Add", ["begin exch_mgr.ExRemainderSql(vdat=>:dat,v_exid=>:ex_id,sdat=>:sdat,result=>:result); end;"])));
      }
      await $.stmt((await $.wcall([$t8, $t9, $t10], "SetVariable", ["dat", (await $.wv([$t8, $t9, $t10], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9, $t10], "SetVariable", ["sdat", (await $.wv([$t8, $t9, $t10], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9, $t10], "SetVariable", ["ex_id", (await $.wv([$t8, $t9, $t10], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false))], C)));
      if ($.truthy($.eq((await $.wv([$t8, $t9, $t10], "val_id", { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true }, false)), (-(1))))) {
        await $.wset([$t8, $t9, $t10], "Filtered", (await $.wv([$t8, $t9, $t10], "false", C, false)), C);
        await $.wset([$t8, $t9, $t10], "Filter", "", C);
        await $.wset([$t8, $t9, $t10], "Filtered", (await $.wv([$t8, $t9, $t10], "true", C, false)), C);
      } else {
        await $.wset([$t8, $t9, $t10], "Filtered", (await $.wv([$t8, $t9, $t10], "false", C, false)), C);
        await $.wset([$t8, $t9, $t10], "Filter", $.add("val_id=", (await $.wcall([$t8, $t9, $t10], "IntToStr", [(await $.wv([$t8, $t9, $t10], "val_id", { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true }, false))], C))), C);
        await $.wset([$t8, $t9, $t10], "Filtered", (await $.wv([$t8, $t9, $t10], "true", C, false)), C);
      }
      await $.stmt($.wcall([$t8, $t9, $t10], "Open", [], C));
    }
    await $.mcall((await $.wv([$t8, $t9], "ODSReestrReport", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t8, $t9], "ODSReestrReport", C, false)), "SetVariable", ["dat", (await $.wv([$t8, $t9], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))])));
    await $.stmt((await $.mcall((await $.wv([$t8, $t9], "ODSReestrReport", C, false)), "SetVariable", ["ex_id", (await $.wv([$t8, $t9], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t8, $t9], "ODSReestrReport", C, false)), "Open", []);
    await $.mcall((await $.wv([$t8, $t9], "ODSVDM", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t8, $t9], "ODSVDM", C, false)), "SetVariable", ["ex_id", (await $.wv([$t8, $t9], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t8, $t9], "ODSVDM", C, false)), "Open", []);
  }
  { const $t11 = await $.iset((await $.mv((await $.mv((await $.v(C, "FormFastReport")), "frxReport1")), "Variables")), ["Bdate"], (await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP_DateReestr")), "DateTime"))]))); if ($t11 !== undefined) { await $.mset((await $.mv((await $.v(C, "FormFastReport")), "frxReport1")), "Variables", $t11); } }
  await $.mcall((await $.mv((await $.v(C, "FormFastReport")), "frxReport1")), "ShowReport", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn14Click", async function BitBtn14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "xlapp": null, "sheet": null, "colum": null, "index": 0, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShowMessage", ["Texniki işlər gedir"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn1Click2", async function BitBtn1Click2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormRate")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "DBGrid2DrawColumnCell", async function DBGrid2DrawColumnCell(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t12 = (await $.v(C, "DBGrid2"));
    const $t13 = (await $.wv([$t12], "DataModExch", C, false));
    if ($.truthy(($.eq((await $.wv([$t12, $t13], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 0)))) {
      { const $t14 = (await $.mv((await $.mcall((await $.wv([$t12, $t13], "ODSResurs", C, false)), "FieldByName", ["status"])), "AsInteger"));
        if ($.eq($t14, 1)) {
          await $.stmt((await $.mcall((await $.wv([$t12, $t13], "ImageList", C, false)), "Draw", [(await $.wv([$t12, $t13], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t12, $t13], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t12, $t13], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 23, (await $.wv([$t12, $t13], "true", C, false))])));
        }
        else if ($.eq($t14, 2)) {
          await $.stmt((await $.mcall((await $.wv([$t12, $t13], "ImageList", C, false)), "Draw", [(await $.wv([$t12, $t13], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t12, $t13], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t12, $t13], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 24, (await $.wv([$t12, $t13], "true", C, false))])));
        }
      }
    }
    if ($.truthy(($.eq((await $.wv([$t12, $t13], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)))) {
      { const $t15 = (await $.mv((await $.mcall((await $.wv([$t12, $t13], "ODSResurs", C, false)), "FieldByName", ["commitstatus"])), "AsInteger"));
        if ($.eq($t15, 1)) {
          await $.stmt((await $.mcall((await $.wv([$t12, $t13], "ImageList", C, false)), "Draw", [(await $.wv([$t12, $t13], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t12, $t13], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t12, $t13], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 27, (await $.wv([$t12, $t13], "true", C, false))])));
        }
        else if ($.eq($t15, 2)) {
          await $.stmt((await $.mcall((await $.wv([$t12, $t13], "ImageList", C, false)), "Draw", [(await $.wv([$t12, $t13], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t12, $t13], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t12, $t13], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 29, (await $.wv([$t12, $t13], "true", C, false))])));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumn", "TGridDrawState"]});
  U.method("TExchangeMGR_X", "DBGridEhTransDrawColumnCell2", async function DBGridEhTransDrawColumnCell2(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "rect": $.copyArg(p1), "datacol": $.copyArg(p2), "column": $.copyArg(p3), "state": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "rect", "datacol", "column", "state"]);
  {
    const $t16 = (await $.v(C, "DBGridEhTrans"));
    const $t17 = (await $.wv([$t16], "DataModExch", C, false));
    if ($.truthy(($.eq((await $.wv([$t16, $t17], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 1)))) {
      { const $t18 = (await $.mv((await $.mcall((await $.wv([$t16, $t17], "ODSExchProvarch", C, false)), "FieldByName", ["status"])), "AsInteger"));
        if ($.eq($t18, 1)) {
          await $.stmt((await $.mcall((await $.wv([$t16, $t17], "ImageList", C, false)), "Draw", [(await $.wv([$t16, $t17], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 23, (await $.wv([$t16, $t17], "true", C, false))])));
        }
        else if ($.eq($t18, 2)) {
          await $.stmt((await $.mcall((await $.wv([$t16, $t17], "ImageList", C, false)), "Draw", [(await $.wv([$t16, $t17], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 24, (await $.wv([$t16, $t17], "true", C, false))])));
        }
        else if ($.eq($t18, 3)) {
          await $.stmt((await $.mcall((await $.wv([$t16, $t17], "ImageList", C, false)), "Draw", [(await $.wv([$t16, $t17], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 25, (await $.wv([$t16, $t17], "true", C, false))])));
        }
      }
    }
    if ($.truthy(($.eq((await $.wv([$t16, $t17], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), 10)))) {
      { const $t19 = (await $.mv((await $.mcall((await $.wv([$t16, $t17], "ODSExchProvarch", C, false)), "FieldByName", ["trans_close"])), "AsInteger"));
        if ($.eq($t19, 0)) {
          await $.stmt((await $.mcall((await $.wv([$t16, $t17], "ImageList", C, false)), "Draw", [(await $.wv([$t16, $t17], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 27, (await $.wv([$t16, $t17], "true", C, false))])));
        }
        else if ($.eq($t19, 1)) {
          await $.stmt((await $.mcall((await $.wv([$t16, $t17], "ImageList", C, false)), "Draw", [(await $.wv([$t16, $t17], "Canvas", C, false)), $.add((await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "left")), 2), (await $.mv((await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), "top")), 29, (await $.wv([$t16, $t17], "true", C, false))])));
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t16, $t17], "ODSExchProvarch", C, false)), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t16, $t17], "DefaultDrawColumnCell", [(await $.wv([$t16, $t17], "Rect", { get: async () => L0["rect"], set: async (v) => { L0["rect"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "DataCol", { get: async () => L0["datacol"], set: async (v) => { L0["datacol"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), (await $.wv([$t16, $t17], "State", { get: async () => L0["state"], set: async (v) => { L0["state"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Rect", "DataCol", "Column", "State"], "kind": "procedure", "ptypes": ["TObject", "TRect", "Integer", "TColumnEh", "TGridDrawState"]});
  U.method("TExchangeMGR_X", "DBGridEhTransMouseDown2", async function DBGridEhTransMouseDown2(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSSumTrans")), "SetVariable", ["ex_id", (await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "DataModExch")), "ODSExchOffice")), "fields")), [1])), "AsFloat"))])));
  await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSSumTrans")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer"]});
  U.method("TExchangeMGR_X", "DBGridEhTransTitleClick2", async function DBGridEhTransTitleClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  if ($.truthy((await $.mv((await $.mv(L0["column"], "Field")), "Calculated")))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  try {
    {
      const $t20 = (await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch"));
      await $.stmt((await $.wcall([$t20], "SetVariable", ["Title", (await $.wv([$t20], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t20], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumnEh"]});
  U.method("TExchangeMGR_X", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t21 = (await $.mv((await $.v(C, "DataModExch")), "ODSRatesFilial"));
    await $.stmt($.wcall([$t21], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.wv([$t21], "DBLookupComboBox2", C, false)), "KeyValue")), (-(1))))) {
      { const $t22 = await $.iset((await $.wv([$t21], "SQL", C, false)), [3], ""); if ($t22 !== undefined) { await $.wset([$t21], "SQL", $t22, C); } }
    } else {
      { const $t23 = await $.iset((await $.wv([$t21], "SQL", C, false)), [3], $.add("and ex_id=", (await $.wcall([$t21], "VarToStr", [(await $.mv((await $.wv([$t21], "DBLookupComboBox2", C, false)), "KeyValue"))], C)))); if ($t23 !== undefined) { await $.wset([$t21], "SQL", $t23, C); } }
    }
    await $.stmt((await $.wcall([$t21], "SetVariable", ["dat", (await $.wcall([$t21], "integer", [(await $.wcall([$t21], "trunc", [(await $.mv((await $.wv([$t21], "DTP_DateFilial", C, false)), "DateTime"))], C))], C))], C)));
    await $.stmt($.wcall([$t21], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "DBNavRateClick2", async function DBNavRateClick2(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "button"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBA_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["EXCH_UPDATE"]])));
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    { const $t24 = L0["button"];
      if ($.eq($t24, (await $.v(C, "nbInsert")))) {
        await $.mset((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchRate")), "FieldByName", ["dat"])), "AsDateTime", (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP_Rate_Date")), "DateTime"))]))])));
        await $.mset((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchRate")), "FieldByName", ["tim"])), "AsDateTime", (await $.mv((await $.v(C, "DTP_System_Time")), "DateTime")));
      }
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender", "Button"], "kind": "procedure", "ptypes": ["TObject", "TNavigateBtn"]});
  U.method("TExchangeMGR_X", "DTP_System_DateChange2", async function DTP_System_DateChange2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_System_Date")), "DateTime"))]))]));
  {
    const $t25 = (await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch"));
    await $.stmt($.wcall([$t25], "Close", [], C));
    await $.stmt((await $.wcall([$t25], "SetVariable", ["dat", (await $.wv([$t25], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t25], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Edit_Src_AmountChange2", async function Edit_Src_AmountChange2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Src_Amount")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch")), "Locate", ["debitamount", (await $.mv((await $.v(C, "Edit_Src_Amount")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGridEhTrans")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Edit_Src_AmountExit2", async function Edit_Src_AmountExit2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Edit_Src_CourseChange2", async function Edit_Src_CourseChange2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Src_Course")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch")), "Locate", ["op_course", (await $.mv((await $.v(C, "Edit_Src_Course")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGridEhTrans")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Edit_Src_CourseExit2", async function Edit_Src_CourseExit2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Edit_Src_Ekv_AmountChange2", async function Edit_Src_Ekv_AmountChange2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Src_Ekv_Amount")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch")), "Locate", ["Lamount", (await $.mv((await $.v(C, "Edit_Src_Ekv_Amount")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGridEhTrans")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Edit_Src_Ekv_AmountExit2", async function Edit_Src_Ekv_AmountExit2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Edit_Src_FeeChange2", async function Edit_Src_FeeChange2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_Src_Fee")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch")), "Locate", ["fee_amount", (await $.mv((await $.v(C, "Edit_Src_Fee")), "Text")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  await $.mset((await $.v(C, "DBGridEhTrans")), "Options", [(await $.v(C, "dgRowSelect")), (await $.v(C, "dgAlwaysShowEditor")), (await $.v(C, "dgTitles")), (await $.v(C, "dgIndicator")), (await $.v(C, "dgColumnResize")), (await $.v(C, "dgColLines")), (await $.v(C, "dgRowLines")), (await $.v(C, "dgTabs")), (await $.v(C, "dgAlwaysShowSelection")), (await $.v(C, "dgConfirmDelete")), (await $.v(C, "dgCancelOnExit")), (await $.v(C, "dgMultiSelect"))]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Edit_Src_FeeExit2", async function Edit_Src_FeeExit2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ExchangeCurrencyClick2", async function ExchangeCurrencyClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.v(C, "DataModExch"));
    if ($.truthy(($.not((await $.mv((await $.wv([$t26], "ODSExchRate", C, false)), "IsEmpty")))))) {
      await $.wset([$t26], "StatusExchange", (await $.wv([$t26], "seExchangeInsert", C, false)), C);
      await $.mcall((await $.wv([$t26], "FormExchange", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t26], "ShowMessage", ["Yeni kurslar daxil edin!!!"], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "FilterRadioGroupClick", async function FilterRadioGroupClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (await $.v(C, "DataModExch"));
    const $t28 = (await $.wv([$t27], "ODSExchProvarch", C, false));
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t27, $t28], "FilterRadioGroup", C, false)), "ItemIndex")), 0)), async () => ($.gt((await $.wv([$t27, $t28], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t27, $t28], "Filtered", (await $.wv([$t27, $t28], "False", C, false)), C);
      await $.wset([$t27, $t28], "Filter", "status=1", C);
      await $.wset([$t27, $t28], "Filtered", (await $.wv([$t27, $t28], "True", C, false)), C);
      await $.stmt($.wcall([$t27, $t28], "Refresh", [], C));
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t27, $t28], "FilterRadioGroup", C, false)), "ItemIndex")), 1)), async () => ($.gt((await $.wv([$t27, $t28], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t27, $t28], "Filtered", (await $.wv([$t27, $t28], "False", C, false)), C);
      await $.wset([$t27, $t28], "Filter", "status=2", C);
      await $.wset([$t27, $t28], "Filtered", (await $.wv([$t27, $t28], "True", C, false)), C);
    }
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t27, $t28], "FilterRadioGroup", C, false)), "ItemIndex")), 2)), async () => ($.eq((await $.wv([$t27, $t28], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t27, $t28], "Filtered", (await $.wv([$t27, $t28], "False", C, false)), C);
      await $.wset([$t27, $t28], "Filter", "", C);
      await $.wset([$t27, $t28], "Filtered", (await $.wv([$t27, $t28], "True", C, false)), C);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "PurchaseClick2", async function PurchaseClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (await $.v(C, "DataModExch"));
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t29], "DataModExch", C, false)), "SBA_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["EXCH_BUYINSERT"]])));
    await $.mcall((await $.wv([$t29], "ODSExchRate", C, false)), "Refresh", []);
    if ($.truthy(($.not((await $.mv((await $.wv([$t29], "ODSExchRate", C, false)), "IsEmpty")))))) {
      await $.wset([$t29], "StatusExchange", (await $.wv([$t29], "sePurchaseInsert", C, false)), C);
      await $.mcall((await $.wv([$t29], "ODSExchAcc", C, false)), "Open", []);
      await $.mcall((await $.wv([$t29], "FormPurchase", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t29], "ShowMessage", ["Yeni kurslar daxil edin!!!"], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ReturnResursClick", async function ReturnResursClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBA_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["EXCH_RETRUNRESURSINSERT"]])));
  await $.mset((await $.v(C, "FormResursRetrun")), "VRetrunInsert", false);
  await $.mcall((await $.v(C, "FormResursRetrun")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "SellingClick2", async function SellingClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t30 = (await $.v(C, "DataModExch"));
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t30], "DataModExch", C, false)), "SBA_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["EXCH_SELLINSERT"]])));
    await $.mcall((await $.wv([$t30], "ODSExchRate", C, false)), "Refresh", []);
    if ($.truthy(($.not((await $.mv((await $.wv([$t30], "ODSExchRate", C, false)), "IsEmpty")))))) {
      await $.wset([$t30], "StatusExchange", (await $.wv([$t30], "seSellingInsert", C, false)), C);
      await $.mcall((await $.wv([$t30], "ODSExchAcc", C, false)), "Open", []);
      await $.mcall((await $.wv([$t30], "FormSelling", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t30], "ShowMessage", ["Yeni kurslar daxil edin!!!"], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "TabRemainderShow", async function TabRemainderShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.v(C, "DataModExch"));
    const $t32 = (await $.wv([$t31], "OPExchMgr", C, false));
    await $.wset([$t31, $t32], "F", (await $.wcall([$t31, $t32], "CallIntegerFunction", ["ex_date_change", []], C)), { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true });
    { const $t33 = (await $.wv([$t31, $t32], "F", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false));
      if ($.eq($t33, 0)) {
        await $.stmt((await $.mcall((await $.wv([$t31, $t32], "OPExchMgr", C, false)), "CallProcedure", ["Ex_RemainderProv_Change", [(await $.mv((await $.wv([$t31, $t32], "ODSExchOfficeEX_NO", C, false)), "AsInteger"))]])));
      }
      else if ($.eq($t33, 1)) {
        await $.stmt((await $.mcall((await $.wv([$t31, $t32], "OPExchMgr", C, false)), "CallProcedure", ["Ex_RemainderLaz_Change", [(await $.mv((await $.wv([$t31, $t32], "ODSExchOfficeEX_NO", C, false)), "AsInteger"))]])));
      }
      else if ($.eq($t33, 2)) {
        return L0.result;
      }
    }
    if ($.truthy((await $.mv((await $.wv([$t31, $t32], "ODSExRemainder", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t31, $t32], "ODSExRemainder", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "TabShRateShow", async function TabShRateShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "delta": false};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchRate")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "TBReturnTransCloseClick2", async function TBReturnTransCloseClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_System_Date")), "DateTime"))]))]));
  {
    const $t34 = (await $.v(C, "DataModExch"));
    if ($.truthy($.eq((await $.wcall([$t34], "MessageDLG", [(await $.wcall([$t34], "Pchar", ["Əməliyyat təsdiq olunmamış formaya gələcək!!! Əminsiniz ? "], C)), (await $.wv([$t34], "mtConfirmation", C, false)), [(await $.wv([$t34], "mbYes", C, false)), (await $.wv([$t34], "mbNo", C, false))], 0], C)), (await $.wv([$t34], "mrYes", C, false))))) {
      await $.stmt((await $.mcall((await $.wv([$t34], "OPExchMgr", C, false)), "CallProcedure", ["trans_return_close", [(await $.mv((await $.mcall((await $.wv([$t34], "ODSExchProvarch", C, false)), "FieldByName", ["id"])), "AsInteger")), (await $.wv([$t34], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))]])));
      await $.mcall((await $.wv([$t34], "ODSExchProvarch", C, false)), "Refresh", []);
    } else {
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "TBtnEditTransClick2", async function TBtnEditTransClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "TimerTimer", async function TimerTimer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "BitBtn8Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "BitBtn12Click", [L0["sender"]])));
  await $.stmt((await $.call(C, "TimerTimer2", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "TimerTimer2", async function TimerTimer2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTP_System_Time")), "Time", (await $.mv((await $.mv((await $.v(C, "DataModExch")), "ODSSysdatSSDAT")), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "TlBOstatClick2", async function TlBOstatClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.v(C, "DataModExch"));
    if ($.truthy((await $.mv((await $.wv([$t35], "ODSExRemainder", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t35], "ODSExRemainder", C, false)), "Refresh", []);
    }
  }
  await $.mset((await $.mv((await $.v(C, "FormRemainder")), "DateTimePicker1")), "DateTime", (await $.mv((await $.v(C, "DTP_System_Date")), "DateTime")));
  await $.mcall((await $.v(C, "FormRemainder")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolBtnAddClick2", async function ToolBtnAddClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.v(C, "DataModExch"));
    const $t37 = (await $.wv([$t36], "ODSExchOffice", C, false));
    if ($.truthy($.eq((await $.wcall([$t36, $t37], "UpperCase", [(await $.mv((await $.wv([$t36, $t37], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t36, $t37], "ODSFilial", C, false)), "Close", []);
      await $.mcall((await $.wv([$t36, $t37], "ODSFilial", C, false)), "Open", []);
      await $.mcall((await $.wv([$t36, $t37], "FormAddExch", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t36, $t37], "Application", C, false)), "MessageBox", ["Hüququnuz Yoxdur!", "FormAddExch", 0])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolBtnDeleteClick2", async function ToolBtnDeleteClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = (await $.v(C, "DataModExch"));
    if ($.truthy($.eq((await $.wcall([$t38], "UpperCase", [(await $.mv((await $.mv((await $.wv([$t38], "ODSExchOffice", C, false)), "Session")), "LogonUsername"))], C)), "SMART"))) {
      if ($.truthy($.eq((await $.wcall([$t38], "MessageDLG", [(await $.wcall([$t38], "Pchar", ["Silmək istəyirsiniz? "], C)), (await $.wv([$t38], "mtConfirmation", C, false)), [(await $.wv([$t38], "mbYes", C, false)), (await $.wv([$t38], "mbNo", C, false))], 0], C)), (await $.wv([$t38], "mrYes", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t38], "OPExchMgr", C, false)), "CallProcedure", ["ex_office_delete", [(await $.mv((await $.mcall((await $.wv([$t38], "ODSExchOffice", C, false)), "FieldByName", ["id"])), "asinteger"))]])));
        await $.mcall((await $.wv([$t38], "ODSExchOffice", C, false)), "Refresh", []);
      }
    } else {
      await $.stmt((await $.mcall((await $.wv([$t38], "Application", C, false)), "MessageBox", ["Hüququnuz Yoxdur!", "ODSExchOffice", 0])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolBtnEditClick2", async function ToolBtnEditClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t39 = (await $.v(C, "DataModExch"));
    const $t40 = (await $.wv([$t39], "ODSExchOffice", C, false));
    if ($.truthy($.eq((await $.wcall([$t39, $t40], "UpperCase", [(await $.mv((await $.wv([$t39, $t40], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t39, $t40], "ODSFilial", C, false)), "Close", []);
      await $.mcall((await $.wv([$t39, $t40], "ODSFilial", C, false)), "Open", []);
      await $.mcall((await $.wv([$t39, $t40], "FormEditExch", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t39, $t40], "Application", C, false)), "MessageBox", ["Hüququnuz Yoxdur!", "FormEditExch", 0])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolBtnFileClick2", async function ToolBtnFileClick2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "dat": 0, "status": 0, "totable": null, "debitval": '', "kreditval": '', "debitaccno": '', "kreditaccno": '', "debitamount": 0, "lamount": 0, "debitrate": 0, "kreditrate": 0, "trname": '', "sessionname": '', "feedebitaccno": '', "feekreditaccno": '', "feedebitamount": 0, "feetrname": '', "feetrname_l": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (await $.v(C, "DataModExch"));
    await $.wset([$t41], "dat", (await $.wcall([$t41], "Integer", [(await $.wcall([$t41], "Trunc", [(await $.mv((await $.wv([$t41], "DTP_System_Date", C, false)), "DateTime"))], C))], C)), { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true });
    try {
      await $.mset((await $.wv([$t41], "Screen", C, false)), "Cursor", (await $.wv([$t41], "crSQLWait", C, false)));
      await $.mset((await $.wv([$t41], "SaveDialog", C, false)), "FileName", $.add($.add($.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.mcall((await $.wv([$t41], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsString")), "_"), (await $.wcall([$t41], "FormatDateTime", ["dd", (await $.wv([$t41], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C))), (await $.wcall([$t41], "FormatDateTime", ["mm", (await $.wv([$t41], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C))), (await $.wcall([$t41], "FormatDateTime", ["yyyy", (await $.wv([$t41], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C))), "_"), (await $.wcall([$t41], "FormatDateTime", ["hh", (await $.mv((await $.wv([$t41], "DTP_System_Time", C, false)), "Time"))], C))), (await $.wcall([$t41], "FormatDateTime", ["mm", (await $.mv((await $.wv([$t41], "DTP_System_Time", C, false)), "Time"))], C))), (await $.wcall([$t41], "FormatDateTime", ["ss", (await $.mv((await $.wv([$t41], "DTP_System_Time", C, false)), "Time"))], C))), ".db"));
      if ($.truthy((await $.mv((await $.wv([$t41], "SaveDialog", C, false)), "Execute")))) {
        {
          const $t42 = (await $.wv([$t41], "TableAddFile", C, false));
          await $.wset([$t41, $t42], "Active", (await $.wv([$t41, $t42], "False", C, false)), C);
          await $.wset([$t41, $t42], "DatabaseName", (await $.wcall([$t41, $t42], "ExtractFilePath", [(await $.mv((await $.wv([$t41, $t42], "SaveDialog", C, false)), "FileName"))], C)), C);
          await $.wset([$t41, $t42], "TableType", (await $.wv([$t41, $t42], "ttParadox", C, false)), C);
          await $.wset([$t41, $t42], "TableName", (await $.mv((await $.wv([$t41, $t42], "SaveDialog", C, false)), "FileName")), C);
          {
            const $t43 = (await $.wv([$t41, $t42], "FieldDefs", C, false));
            await $.stmt($.wcall([$t41, $t42, $t43], "Clear", [], C));
            {
              const $t44 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t44], "Name", "Status", C);
              await $.wset([$t41, $t42, $t43, $t44], "DataType", (await $.wv([$t41, $t42, $t43, $t44], "ftInteger", C, false)), C);
            }
            {
              const $t45 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t45], "Name", "DebitVal", C);
              await $.wset([$t41, $t42, $t43, $t45], "DataType", (await $.wv([$t41, $t42, $t43, $t45], "ftString", C, false)), C);
              await $.wset([$t41, $t42, $t43, $t45], "Size", 3, C);
            }
            {
              const $t46 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t46], "Name", "KreditVal", C);
              await $.wset([$t41, $t42, $t43, $t46], "DataType", (await $.wv([$t41, $t42, $t43, $t46], "ftString", C, false)), C);
              await $.wset([$t41, $t42, $t43, $t46], "Size", 3, C);
            }
            {
              const $t47 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t47], "Name", "DebitAccNo", C);
              await $.wset([$t41, $t42, $t43, $t47], "DataType", (await $.wv([$t41, $t42, $t43, $t47], "ftString", C, false)), C);
              await $.wset([$t41, $t42, $t43, $t47], "Size", 30, C);
            }
            {
              const $t48 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t48], "Name", "KreditAccNo", C);
              await $.wset([$t41, $t42, $t43, $t48], "DataType", (await $.wv([$t41, $t42, $t43, $t48], "ftString", C, false)), C);
              await $.wset([$t41, $t42, $t43, $t48], "Size", 30, C);
            }
            {
              const $t49 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t49], "Name", "DebitAmount", C);
              await $.wset([$t41, $t42, $t43, $t49], "DataType", (await $.wv([$t41, $t42, $t43, $t49], "ftFloat", C, false)), C);
            }
            {
              const $t50 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t50], "Name", "LAmount", C);
              await $.wset([$t41, $t42, $t43, $t50], "DataType", (await $.wv([$t41, $t42, $t43, $t50], "ftFloat", C, false)), C);
            }
            {
              const $t51 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t51], "Name", "DebitRate", C);
              await $.wset([$t41, $t42, $t43, $t51], "DataType", (await $.wv([$t41, $t42, $t43, $t51], "ftFloat", C, false)), C);
            }
            {
              const $t52 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t52], "Name", "KreditRate", C);
              await $.wset([$t41, $t42, $t43, $t52], "DataType", (await $.wv([$t41, $t42, $t43, $t52], "ftFloat", C, false)), C);
            }
            {
              const $t53 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t53], "Name", "TrName", C);
              await $.wset([$t41, $t42, $t43, $t53], "DataType", (await $.wv([$t41, $t42, $t43, $t53], "ftString", C, false)), C);
              await $.wset([$t41, $t42, $t43, $t53], "Size", 255, C);
            }
            {
              const $t54 = (await $.wv([$t41, $t42, $t43], "AddFieldDef", C, false));
              await $.wset([$t41, $t42, $t43, $t54], "Name", "SessionName", C);
              await $.wset([$t41, $t42, $t43, $t54], "DataType", (await $.wv([$t41, $t42, $t43, $t54], "ftString", C, false)), C);
              await $.wset([$t41, $t42, $t43, $t54], "Size", 50, C);
            }
          }
          await $.stmt($.wcall([$t41, $t42], "CreateTable", [], C));
        }
        await $.wset([$t41], "ToTable", (await $.wv([$t41], "TableAddFile", C, false)), { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true });
        await $.mcall((await $.wv([$t41], "ToTable", { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true }, false)), "Close", []);
        await $.mcall((await $.wv([$t41], "ToTable", { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true }, false)), "Open", []);
        await $.mcall((await $.wv([$t41], "ToTable", { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true }, false)), "First", []);
        await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "SetVariable", ["dat", (await $.wv([$t41], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "Open", []);
        if ($.truthy(((await $.and_(($.eq((await $.mv((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "Active")), (await $.wv([$t41], "true", C, false)))), async () => ($.not((await $.mv((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "IsEmpty"))))))))) {
          await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "First", []);
          { const $t55 = (await $.mv((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "RecordCount"));
            await $.wset([$t41], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
            let $t56 = true;
            for (;;) {
              if (!$t56) { await $.wset([$t41], "i", $.succ((await $.wv([$t41], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
              $t56 = false;
              if (!($.ord((await $.wv([$t41], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t55))) break;
              await $.wset([$t41], "Status", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["status"])), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
              await $.wset([$t41], "DebitAmount", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["debitamount"])), "AsFloat")), { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true });
              await $.wset([$t41], "LAmount", $.mul((await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["debitamount"])), "AsFloat")), (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_nb_course"])), "AsFloat"))), { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true });
              await $.wset([$t41], "TrName", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["oper_name"])), "AsString")), { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true });
              await $.wset([$t41], "feeTrName", "Valyuta dəyişmə əməliyyatından gələn gəlir", { get: async () => L0["feetrname"], set: async (v) => { L0["feetrname"] = v; }, local: true });
              await $.wset([$t41], "feeTrName_L", "Valyuta dəyişmə əməliyyatından gələn zərər", { get: async () => L0["feetrname_l"], set: async (v) => { L0["feetrname_l"] = v; }, local: true });
              await $.wset([$t41], "feeDebitAmount", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["fee_amount"])), "AsFloat")), { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true });
              await $.wset([$t41], "feeDebitAccno", (await $.mcall((await $.wv([$t41], "OPExchMgr", C, false)), "CallStringFunction", ["get_profit_no", [(await $.mv((await $.mcall((await $.wv([$t41], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_id"])), "AsInteger"))]])), { get: async () => L0["feedebitaccno"], set: async (v) => { L0["feedebitaccno"] = v; }, local: true });
              await $.wset([$t41], "feeKreditAccNo", (await $.mcall((await $.wv([$t41], "OPExchMgr", C, false)), "CallStringFunction", ["get_harm_no", [(await $.mv((await $.mcall((await $.wv([$t41], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_id"])), "AsInteger"))]])), { get: async () => L0["feekreditaccno"], set: async (v) => { L0["feekreditaccno"] = v; }, local: true });
              { const $t57 = (await $.wv([$t41], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false));
                if ($.eq($t57, 1) || $.eq($t57, 4)) {
                  await $.wset([$t41], "DebitVal", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_name"])), "AsString")), { get: async () => L0["debitval"], set: async (v) => { L0["debitval"] = v; }, local: true });
                  await $.wset([$t41], "KreditVal", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_changed_name"])), "AsString")), { get: async () => L0["kreditval"], set: async (v) => { L0["kreditval"] = v; }, local: true });
                  await $.wset([$t41], "DebitRate", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["OP_COURSE"])), "AsFloat")), { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true });
                  await $.wset([$t41], "KreditRate", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["VAL_CHANGED_COURSE"])), "AsFloat")), { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true });
                  await $.wset([$t41], "KreditAccNo", (await $.mcall((await $.wv([$t41], "OPExchMgr", C, false)), "CallStringFunction", ["get_purchase_no", [(await $.mv((await $.mcall((await $.wv([$t41], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_id"])), "AsInteger"))]])), { get: async () => L0["kreditaccno"], set: async (v) => { L0["kreditaccno"] = v; }, local: true });
                  await $.wset([$t41], "DebitAccno", (await $.mcall((await $.wv([$t41], "OPExchMgr", C, false)), "CallStringFunction", ["get_selling_no", [(await $.mv((await $.mcall((await $.wv([$t41], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_id"])), "AsInteger"))]])), { get: async () => L0["debitaccno"], set: async (v) => { L0["debitaccno"] = v; }, local: true });
                  await $.stmt((await $.wcall([$t41], "InsertTransaction", [(await $.wv([$t41], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), (await $.wv([$t41], "ToTable", { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true }, false)), (await $.wv([$t41], "DebitVal", { get: async () => L0["debitval"], set: async (v) => { L0["debitval"] = v; }, local: true }, false)), (await $.wv([$t41], "KreditVal", { get: async () => L0["kreditval"], set: async (v) => { L0["kreditval"] = v; }, local: true }, false)), (await $.wv([$t41], "DebitAccno", { get: async () => L0["debitaccno"], set: async (v) => { L0["debitaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "KreditAccNo", { get: async () => L0["kreditaccno"], set: async (v) => { L0["kreditaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)), (await $.wv([$t41], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.wv([$t41], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), (await $.wv([$t41], "KreditRate", { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true }, false)), (await $.wv([$t41], "TrName", { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true }, false)), (await $.wv([$t41], "SessionName", { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true }, false))], C)));
                  if ($.truthy(($.lt((await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false)), 0)))) {
                    await $.stmt((await $.wcall([$t41], "InsertTransaction", [(await $.wv([$t41], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), (await $.wv([$t41], "ToTable", { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true }, false)), "AZN", "AZN", (await $.wv([$t41], "feeKreditAccNo", { get: async () => L0["feekreditaccno"], set: async (v) => { L0["feekreditaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "KreditAccNo", { get: async () => L0["kreditaccno"], set: async (v) => { L0["kreditaccno"] = v; }, local: true }, false)), (await $.wcall([$t41], "ABS", [(await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false))], C)), (await $.wcall([$t41], "ABS", [(await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false))], C)), 1, 1, (await $.wv([$t41], "feeTrName_L", { get: async () => L0["feetrname_l"], set: async (v) => { L0["feetrname_l"] = v; }, local: true }, false)), (await $.wv([$t41], "SessionName", { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true }, false))], C)));
                  } else {
                    await $.stmt((await $.wcall([$t41], "InsertTransaction", [(await $.wv([$t41], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), (await $.wv([$t41], "ToTable", { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true }, false)), "AZN", "AZN", (await $.wv([$t41], "KreditAccNo", { get: async () => L0["kreditaccno"], set: async (v) => { L0["kreditaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "feeDebitAccNo", { get: async () => L0["feedebitaccno"], set: async (v) => { L0["feedebitaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false)), (await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false)), 1, 1, (await $.wv([$t41], "feeTrName", { get: async () => L0["feetrname"], set: async (v) => { L0["feetrname"] = v; }, local: true }, false)), (await $.wv([$t41], "SessionName", { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true }, false))], C)));
                  }
                }
                else if ($.eq($t57, 2) || $.eq($t57, 5)) {
                  await $.wset([$t41], "DebitVal", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_changed_name"])), "AsString")), { get: async () => L0["debitval"], set: async (v) => { L0["debitval"] = v; }, local: true });
                  await $.wset([$t41], "KreditVal", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_name"])), "AsString")), { get: async () => L0["kreditval"], set: async (v) => { L0["kreditval"] = v; }, local: true });
                  await $.wset([$t41], "KreditRate", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["VAL_CHANGED_COURSE"])), "AsFloat")), { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true });
                  await $.wset([$t41], "DebitRate", (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["OP_COURSE"])), "AsFloat")), { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true });
                  await $.wset([$t41], "KreditAccNo", (await $.mcall((await $.wv([$t41], "OPExchMgr", C, false)), "CallStringFunction", ["get_selling_no", [(await $.mv((await $.mcall((await $.wv([$t41], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_id"])), "AsInteger"))]])), { get: async () => L0["kreditaccno"], set: async (v) => { L0["kreditaccno"] = v; }, local: true });
                  await $.wset([$t41], "DebitAccno", (await $.mcall((await $.wv([$t41], "OPExchMgr", C, false)), "CallStringFunction", ["get_purchase_no", [(await $.mv((await $.mcall((await $.wv([$t41], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "FieldByName", ["val_id"])), "AsInteger"))]])), { get: async () => L0["debitaccno"], set: async (v) => { L0["debitaccno"] = v; }, local: true });
                  await $.stmt((await $.wcall([$t41], "InsertTransaction", [(await $.wv([$t41], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), (await $.wv([$t41], "ToTable", { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true }, false)), (await $.wv([$t41], "DebitVal", { get: async () => L0["debitval"], set: async (v) => { L0["debitval"] = v; }, local: true }, false)), (await $.wv([$t41], "KreditVal", { get: async () => L0["kreditval"], set: async (v) => { L0["kreditval"] = v; }, local: true }, false)), (await $.wv([$t41], "DebitAccno", { get: async () => L0["debitaccno"], set: async (v) => { L0["debitaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "KreditAccNo", { get: async () => L0["kreditaccno"], set: async (v) => { L0["kreditaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)), (await $.wv([$t41], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.wv([$t41], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), (await $.wv([$t41], "KreditRate", { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true }, false)), (await $.wv([$t41], "TrName", { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true }, false)), (await $.wv([$t41], "SessionName", { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true }, false))], C)));
                  if ($.truthy(($.lt((await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false)), 0)))) {
                    await $.stmt((await $.wcall([$t41], "InsertTransaction", [(await $.wv([$t41], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), (await $.wv([$t41], "ToTable", { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true }, false)), "AZN", "AZN", (await $.wv([$t41], "feeKreditAccNo", { get: async () => L0["feekreditaccno"], set: async (v) => { L0["feekreditaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "DebitAccno", { get: async () => L0["debitaccno"], set: async (v) => { L0["debitaccno"] = v; }, local: true }, false)), (await $.wcall([$t41], "ABS", [(await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false))], C)), (await $.wcall([$t41], "ABS", [(await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false))], C)), 1, 1, (await $.wv([$t41], "feeTrName_L", { get: async () => L0["feetrname_l"], set: async (v) => { L0["feetrname_l"] = v; }, local: true }, false)), (await $.wv([$t41], "SessionName", { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true }, false))], C)));
                  } else {
                    await $.stmt((await $.wcall([$t41], "InsertTransaction", [(await $.wv([$t41], "Status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), (await $.wv([$t41], "ToTable", { get: async () => L0["totable"], set: async (v) => { L0["totable"] = v; }, local: true }, false)), "AZN", "AZN", (await $.wv([$t41], "DebitAccno", { get: async () => L0["debitaccno"], set: async (v) => { L0["debitaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "feeDebitAccno", { get: async () => L0["feedebitaccno"], set: async (v) => { L0["feedebitaccno"] = v; }, local: true }, false)), (await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false)), (await $.wv([$t41], "feeDebitAmount", { get: async () => L0["feedebitamount"], set: async (v) => { L0["feedebitamount"] = v; }, local: true }, false)), 1, 1, (await $.wv([$t41], "feeTrName", { get: async () => L0["feetrname"], set: async (v) => { L0["feetrname"] = v; }, local: true }, false)), (await $.wv([$t41], "SessionName", { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true }, false))], C)));
                  }
                }
              }
              await $.mcall((await $.wv([$t41], "ODSExchProvarchTrans", C, false)), "Next", []);
              await $.tick();
            }
          }
          await $.stmt((await $.mcall((await $.wv([$t41], "OPExchMgr", C, false)), "CallProcedure", ["trans_closing", [(await $.mv((await $.mcall((await $.wv([$t41], "ODSExchOffice", C, false)), "FieldByName", ["ex_no"])), "AsInteger")), (await $.wv([$t41], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))]])));
        } else {
          await $.stmt((await $.wcall([$t41], "ShowMessage", ["Heç bir əməliyyat yoxdur!!!"], C)));
        }
      }
    } finally {
      await $.mset((await $.wv([$t41], "Screen", C, false)), "Cursor", (await $.wv([$t41], "crDefault", C, false)));
      await $.mcall((await $.wv([$t41], "TableAddFile", C, false)), "Close", []);
      await $.mcall((await $.wv([$t41], "ODSExchProvarch", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton11Click2", async function ToolButton11Click2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    {
      const $t58 = (await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch"));
      await $.stmt($.wcall([$t58], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton15Click2", async function ToolButton15Click2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy($.eq(L0["usrname"], "SMART"))) {
    if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), true))) {
      await $.stmt((await $.call(C, "ShellExecute", [0, null, (await $.call(C, "PChar", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "paramstr", [0]))])), "Exchange.ini")])), null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
    }
  } else {
    await $.stmt((await $.mcall((await $.v(C, "Application")), "MessageBox", ["Hüququnuz Yoxdur!", "Ini", 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton17Click", async function ToolButton17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccount", (await $.mcall((await $.v(C, "TFormAccount")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormAccount")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton1Click2", async function ToolButton1Click2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "ExchRep")), "RadioButton2")), "Checked", true);
  await $.stmt((await $.mcall((await $.v(C, "ExchRep")), "Button1Click", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton6Click2", async function ToolButton6Click2(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t59 = (await $.v(C, "DataModExch"));
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t59], "DataModExch", C, false)), "SBA_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["EXCH_DELETE"]])));
    if ($.truthy($.eq((await $.mv((await $.wv([$t59], "ODSExchProvarch", C, false)), "RecordCount")), 0))) {
      return L0.result;
    }
    if ($.truthy((await $.and_(((await $.or_(($.eq((await $.mv((await $.mcall((await $.wv([$t59], "ODSExchProvarch", C, false)), "FieldByName", ["trans_close"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t59], "ODSExchProvarch", C, false)), "FieldByName", ["trans_close"])), "AsInteger")), 0))))), async () => ($.eq((await $.wcall([$t59], "MessageDLG", [(await $.wcall([$t59], "Pchar", ["Silmək istəyirsiniz? "], C)), (await $.wv([$t59], "mtConfirmation", C, false)), [(await $.wv([$t59], "mbYes", C, false)), (await $.wv([$t59], "mbNo", C, false))], 0], C)), (await $.wv([$t59], "mrYes", C, false)))))))) {
      await $.stmt((await $.mcall((await $.wv([$t59], "OPExchMgr", C, false)), "CallProcedure", ["ex_provarch_delete", [(await $.mv((await $.mcall((await $.wv([$t59], "ODSExchProvarch", C, false)), "fieldbyname", ["status"])), "asinteger")), (await $.mv((await $.mcall((await $.wv([$t59], "ODSExchProvarch", C, false)), "fieldbyname", ["id"])), "asinteger"))]])));
      await $.mcall((await $.mv((await $.wv([$t59], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
      await $.mcall((await $.wv([$t59], "ODSExchProvarch", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t59], "ODSExchRate", C, false)), "Refresh", []);
      if ($.truthy((await $.mv((await $.wv([$t59], "ODSExRemainder", C, false)), "Active")))) {
        await $.mcall((await $.wv([$t59], "ODSExRemainder", C, false)), "Refresh", []);
      }
    } else {
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ActiveFormActivate", async function ActiveFormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0, "sdat": 0, "calendar": false, "scalendar": false, "lastday": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ExchangeMGR_X", Self);
  await $.set(C, "DataModExch", (await $.mcall((await $.v(C, "TDataModExch")), "Create", [Self])));
  await $.set(C, "FormGivenResurs", (await $.mcall((await $.v(C, "TFormGivenResurs")), "Create", [Self])));
  await $.set(C, "FormResursRetrun", (await $.mcall((await $.v(C, "TFormResursRetrun")), "Create", [Self])));
  await $.set(C, "FormRep", (await $.mcall((await $.v(C, "TFormRep")), "Create", [Self])));
  await $.set(C, "FormRepX", (await $.mcall((await $.v(C, "TFormRepX")), "Create", [Self])));
  await $.set(C, "FormSelling", (await $.mcall((await $.v(C, "TFormSelling")), "Create", [Self])));
  await $.set(C, "FormEditExch", (await $.mcall((await $.v(C, "TFormEditExch")), "Create", [Self])));
  await $.set(C, "FormExchange", (await $.mcall((await $.v(C, "TFormExchange")), "Create", [Self])));
  await $.set(C, "FormPurchase", (await $.mcall((await $.v(C, "TFormPurchase")), "Create", [Self])));
  await $.set(C, "FormRate", (await $.mcall((await $.v(C, "TFormRate")), "Create", [Self])));
  await $.set(C, "FormRemainder", (await $.mcall((await $.v(C, "TFormRemainder")), "Create", [Self])));
  await $.set(C, "FormAddExch", (await $.mcall((await $.v(C, "TFormAddExch")), "Create", [Self])));
  await $.set(C, "FormAdmin", (await $.mcall((await $.v(C, "TFormAdmin")), "Create", [Self])));
  await $.set(C, "FormParametr", (await $.mcall((await $.v(C, "TFormParametr")), "Create", [Self])));
  await $.set(C, "QRepTurn", (await $.mcall((await $.v(C, "TQRepTurn")), "Create", [Self])));
  await $.set(C, "ExchRep", (await $.mcall((await $.v(C, "TExchRep")), "Create", [Self])));
  await $.set(C, "FormReestrReport", (await $.mcall((await $.v(C, "TFormReestrReport")), "Create", [Self])));
  await $.set(C, "FormReestr", (await $.mcall((await $.v(C, "TFormReestr")), "Create", [Self])));
  await $.set(C, "FormReestrEnd", (await $.mcall((await $.v(C, "TFormReestrEnd")), "Create", [Self])));
  await $.set(C, "FormFastReport", (await $.mcall((await $.v(C, "TFormFastReport")), "Create", [Self])));
  await $.set(C, "FormToplam", (await $.mcall((await $.v(C, "TFormToplam")), "Create", [Self])));
  await $.set(C, "FormRemandirReport", (await $.mcall((await $.v(C, "TFormRemandirReport")), "Create", [Self])));
  {
    const $t60 = (await $.v(C, "DataModExch"));
    await $.mcall((await $.wv([$t60], "ODSSysdat", C, false)), "Close", []);
    await $.mcall((await $.wv([$t60], "ODSSysdat", C, false)), "Open", []);
    await $.mset((await $.wv([$t60], "DTP_Begin", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DTP_End", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DTP_Dat", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DateTimePicker1", C, false)), "date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DateTimePicker2", C, false)), "date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DateTimePicker3", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DateTimePicker4", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DateTimePicker5", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DTP_DateReestr", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DTP_System_Date", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DTP_DateFilial", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DTP_Rate_Date", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DTP_System_Time", C, false)), "Time", (await $.mv((await $.wv([$t60], "ODSSysdatSTIME", C, false)), "AsDateTime")));
    await $.mset((await $.wv([$t60], "DTP_Remainder_Date", C, false)), "Date", (await $.mv((await $.wv([$t60], "ODSSysdatSSDAT", C, false)), "AsDateTime")));
  }
  await $.mset((await $.v(C, "CBox_Status")), "ItemIndex", 0);
  await $.mset((await $.v(C, "ComboBox1")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DBLC_Exchange")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Currency")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLC_Exch_Rate")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "FilterRadioGroup")), "ItemIndex", 2);
  L0["dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_System_Date")), "DateTime"))]))]));
  L0["sdat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBOPDate")), "CallDateFunction", ["get_date", []]))]))]));
  L0["calendar"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Ex_Calendar", [L0["dat"]]]));
  L0["scalendar"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Ex_Calendar", [L0["sdat"]]]));
  L0["lastday"] = (await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallDateFunction", ["LastWorkDay_Calendar", [L0["dat"]]]));
  if ($.truthy(($.le(L0["sdat"], L0["dat"])))) {
    try {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
      {
        const $t61 = (await $.v(C, "DataModExch"));
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t61], "DataModExch", C, false)), "OPExchMgr")), "CallProcedure", ["NextResurs", [(await $.wv([$t61], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))]])));
        await $.stmt($.wcall([$t61], "open_cust_data_sets", [], C));
        await $.mcall((await $.wv([$t61], "ODSSumTrans", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSExchOffice", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSVDMAll", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSDeleteVDM", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSToplamVDM", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSExchProvarch", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t61], "ODSExchProvarch", C, false)), "SetVariable", ["dat", (await $.wv([$t61], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t61], "ODSExchProvarch", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSExchRate", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t61], "ODSExchRate", C, false)), "SetVariable", ["dat", (await $.wv([$t61], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t61], "ODSExchRate", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODS_RFilial", C, false)), "Close", []);
        await $.mcall((await $.wv([$t61], "ODS_RFilial", C, false)), "Open", []);
        await $.mset((await $.wv([$t61], "DBLookupComboBox2", C, false)), "KeyValue", (-(1)));
        await $.stmt((await $.wcall([$t61], "DBLookupComboBox2Click", [(await $.wv([$t61], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
        await $.mcall((await $.wv([$t61], "ODSExchRateAll", C, false)), "Close", []);
        await $.mcall((await $.wv([$t61], "ODSExchRateAll", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSExchRateOther", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t61], "ODSExchRateOther", C, false)), "SetVariable", ["dat", (await $.wv([$t61], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t61], "ODSExchRateOther", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "Kurs", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t61], "Kurs", C, false)), "SetVariable", ["datdate", (await $.wv([$t61], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t61], "kurs", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSAvalute", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSValute", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSAvaluteDelete", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSAvaluteToplam", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSResursValyuta", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSResurs", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t61], "ODSResurs", C, false)), "SetVariable", ["vdat", (await $.wv([$t61], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))])));
        await $.mcall((await $.wv([$t61], "ODSResurs", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSVdmResurs", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSRResursValyuta", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSVdmRResurs", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSReestrVdm", C, false)), "Open", []);
        await $.mcall((await $.wv([$t61], "ODSReestrValyuta", C, false)), "Open", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t61], "DataModExch", C, false)), "ODSSumTrans")), "SetVariable", ["ex_id", (await $.mv((await $.idx((await $.mv((await $.mv((await $.wv([$t61], "DataModExch", C, false)), "ODSExchOffice")), "fields")), [1])), "AsFloat"))])));
        await $.mcall((await $.mv((await $.wv([$t61], "DataModExch", C, false)), "ODSSumTrans")), "Refresh", []);
        {
          const $t62 = (await $.wv([$t61], "ODSExRemainder", C, false));
          await $.stmt($.wcall([$t61, $t62], "Close", [], C));
          await $.mcall((await $.wv([$t61, $t62], "SQL", C, false)), "Clear", []);
          if ($.truthy(($.eq((await $.wv([$t61, $t62], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t61, $t62], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)))))) {
            await $.stmt((await $.mcall((await $.wv([$t61, $t62], "SQL", C, false)), "Add", ["begin exch_mgr.ExRemainderSql(vdat=>:dat,v_exid=>:ex_id,sdat=>:sdat,result=>:result); end;"])));
          }
          if ($.truthy((await $.and_((await $.and_(($.lt((await $.wv([$t61, $t62], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t61, $t62], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)))), async () => (await $.wv([$t61, $t62], "Calendar", { get: async () => L0["calendar"], set: async (v) => { L0["calendar"] = v; }, local: true }, false)))), async () => ($.eq((await $.wv([$t61, $t62], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t61, $t62], "Lastday", { get: async () => L0["lastday"], set: async (v) => { L0["lastday"] = v; }, local: true }, false)))))))) {
            await $.stmt((await $.mcall((await $.wv([$t61, $t62], "SQL", C, false)), "Add", ["begin exch_mgr.ExRemainderSql(vdat=>:dat,v_exid=>:ex_id,sdat=>:sdat,result=>:result); end;"])));
          }
          if ($.truthy((await $.and_(($.lt((await $.wv([$t61, $t62], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t61, $t62], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)))), async () => ((await $.or_($.not(((await $.wv([$t61, $t62], "Calendar", { get: async () => L0["calendar"], set: async (v) => { L0["calendar"] = v; }, local: true }, false)))), async () => ($.lt((await $.wv([$t61, $t62], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false)), (await $.wv([$t61, $t62], "Lastday", { get: async () => L0["lastday"], set: async (v) => { L0["lastday"] = v; }, local: true }, false))))))))))) {
            await $.stmt((await $.mcall((await $.wv([$t61, $t62], "SQL", C, false)), "Add", ["begin exch_mgr.ExRemainderSql(vdat=>:dat,v_exid=>:ex_id,sdat=>:sdat,result=>:result); end;"])));
          }
          if ($.truthy((await $.and_((await $.wv([$t61, $t62], "Calendar", { get: async () => L0["calendar"], set: async (v) => { L0["calendar"] = v; }, local: true }, false)), async () => (await $.wv([$t61, $t62], "SCalendar", { get: async () => L0["scalendar"], set: async (v) => { L0["scalendar"] = v; }, local: true }, false)))))) {
            await $.stmt((await $.wcall([$t61, $t62], "ShowMessage", ["Sistem tarixi təqvimdə iştrak edir!!!.Sistem tarixini təqvimdən çıxardın!!!!!"], C)));
            return L0.result;
          }
          await $.stmt((await $.mcall((await $.wv([$t61, $t62], "ODSExRemainder", C, false)), "SetVariable", ["dat", (await $.wv([$t61, $t62], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))])));
          await $.stmt((await $.mcall((await $.wv([$t61, $t62], "ODSExRemainder", C, false)), "SetVariable", ["sdat", (await $.wv([$t61, $t62], "sdat", { get: async () => L0["sdat"], set: async (v) => { L0["sdat"] = v; }, local: true }, false))])));
          await $.stmt($.wcall([$t61, $t62], "Open", [], C));
        }
      }
    } finally {
      await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Sistemin tarixi Cari tarixdən böyükdür!!!!!!"])));
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateExchComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton20Click", async function ToolButton20Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    {
      const $t63 = (await $.mv((await $.v(C, "DataModExch")), "ODSResurs"));
      await $.stmt($.wcall([$t63], "Refresh", [], C));
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton25Click", async function ToolButton25Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormAdmin")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BtnAllTransClick", async function BtnAllTransClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "selectstr": '', "fromstr": '', "groupstr": '', "querystr": '', "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), true))) {
    await $.set(C, "T", 2);
    if ($.truthy((await $.mv((await $.v(C, "OpenDialog")), "Execute")))) {
      L0["selectstr"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" SELECT ", "DebitVal,"), "KreditVal,"), "DebitAccNo,"), "KreditAccNo,"), "sum(DebitAmount)"), " as "), " DebitAmount,"), "sum(LAmount)    "), " as "), " LAmount,"), "DebitRate,"), "KreditRate,"), "SessionName,"), "min(TrName)"), " as "), " TrName ");
      L0["fromstr"] = $.add($.add($.add(" FROM  ", "\""), (await $.mv((await $.v(C, "OpenDialog")), "FileName"))), "\"");
      L0["groupstr"] = $.add($.add($.add($.add($.add($.add($.add(" GROUP BY  ", "DebitVal,"), "KreditVal,"), "DebitAccNo,"), "KreditAccNo,"), "DebitRate,"), "SessionName,"), "KreditRate ");
      L0["querystr"] = $.add($.add(L0["selectstr"], L0["fromstr"]), L0["groupstr"]);
      {
        const $t64 = (await $.v(C, "DataModExch"));
        const $t65 = (await $.wv([$t64], "QueryTrans", C, false));
        await $.stmt($.wcall([$t64, $t65], "Close", [], C));
        await $.mcall((await $.wv([$t64, $t65], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t64, $t65], "SQL", C, false)), "Add", [(await $.wv([$t64, $t65], "QueryStr", { get: async () => L0["querystr"], set: async (v) => { L0["querystr"] = v; }, local: true }, false))])));
        await $.stmt($.wcall([$t64, $t65], "Open", [], C));
        await $.mset((await $.wv([$t64, $t65], "DBGridEh1", C, false)), "DataSource", (await $.wv([$t64, $t65], "DSQueryTrans", C, false)));
      }
    } else {
      return L0.result;
    }
    if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), false))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Giriş hüququ yoxdur!!!"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BtnFileClick", async function BtnFileClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), true))) {
    await $.set(C, "T", 1);
    if ($.truthy((await $.mv((await $.v(C, "OpenDialog")), "Execute")))) {
      {
        const $t66 = (await $.mv((await $.v(C, "DataModExch")), "TableAddFile"));
        await $.wset([$t66], "TableName", (await $.mv((await $.wv([$t66], "OpenDialog", C, false)), "FileName")), C);
        await $.wset([$t66], "Active", (await $.wv([$t66], "false", C, false)), C);
        await $.wset([$t66], "Active", (await $.wv([$t66], "true", C, false)), C);
        await $.mset((await $.wv([$t66], "DBGridEh1", C, false)), "DataSource", (await $.mv((await $.wv([$t66], "DataModExch", C, false)), "DSAddFile")));
      }
    } else {
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), false))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Giriş hüququ yoxdur!!!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BtnTransClick", async function BtnTransClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "debitaccid": 0, "kreditaccid": 0, "cashaccid": 0, "puraccid": 0, "debitamount": 0, "creditamount": 0, "lamount": 0, "status": 0, "debitrate": 0, "kreditrate": 0, "trname": '', "a_flags": false, "usrname": '', "sessionname": '', "userid": 0, "externalusername": '', "ini": null, "inifile": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["a_flags"] = (await $.mv((await $.v(C, "ChBox_Flags")), "Checked"));
  {
    const $t67 = (await $.v(C, "DataModExch"));
    { const $t68 = (await $.wv([$t67], "T", C, false));
      if ($.eq($t68, 1)) {
        try {
          await $.mset((await $.wv([$t67], "Screen", C, false)), "Cursor", (await $.wv([$t67], "crSQLWait", C, false)));
          await $.mset((await $.wv([$t67], "ProgressBar", C, false)), "Position", 0);
          if ($.truthy((await $.or_(($.not((await $.mv((await $.wv([$t67], "TableAddFile", C, false)), "IsEmpty")))), async () => ($.eq((await $.mv((await $.wv([$t67], "TableAddFile", C, false)), "Active")), (await $.wv([$t67], "true", C, false)))))))) {
            await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "First", []);
            await $.wset([$t67], "IniFile", "\\Exchange.ini", { get: async () => L0["inifile"], set: async (v) => { L0["inifile"] = v; }, local: true });
            await $.wset([$t67], "Ini", (await $.mcall((await $.wv([$t67], "TIniFile", C, false)), "Create", [$.add((await $.wcall([$t67], "ExtractFilePath", [(await $.wcall([$t67], "ParamStr", [0], C))], C)), (await $.wv([$t67], "IniFile", { get: async () => L0["inifile"], set: async (v) => { L0["inifile"] = v; }, local: true }, false)))])), { get: async () => L0["ini"], set: async (v) => { L0["ini"] = v; }, local: true });
            await $.wset([$t67], "usrname", (await $.mcall((await $.wv([$t67], "Ini", { get: async () => L0["ini"], set: async (v) => { L0["ini"] = v; }, local: true }, false)), "ReadString", ["Session", "ExternalUsername", ""])), { get: async () => L0["usrname"], set: async (v) => { L0["usrname"] = v; }, local: true });
            await $.mcall((await $.wv([$t67], "ODSExp_Provarch", C, false)), "Open", []);
            { const $t69 = (await $.mv((await $.wv([$t67], "TableAddFile", C, false)), "RecordCount"));
              await $.wset([$t67], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
              let $t70 = true;
              for (;;) {
                if (!$t70) { await $.wset([$t67], "i", $.succ((await $.wv([$t67], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                $t70 = false;
                if (!($.ord((await $.wv([$t67], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t69))) break;
                await $.wset([$t67], "DebitAccId", (await $.mcall((await $.wv([$t67], "sb_transaction", C, false)), "CallIntegerFunction", ["Get_Acc_Id", [(await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["DebitAccNo"])), "AsString"))]])), { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true });
                await $.wset([$t67], "KreditAccId", (await $.mcall((await $.wv([$t67], "sb_transaction", C, false)), "CallIntegerFunction", ["Get_Acc_Id", [(await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["KreditAccNo"])), "AsString"))]])), { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true });
                await $.wset([$t67], "DebitAmount", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "fieldbyname", ["DebitAmount"])), "AsFloat")), { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true });
                await $.wset([$t67], "CreditAmount", (await $.wv([$t67], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)), { get: async () => L0["creditamount"], set: async (v) => { L0["creditamount"] = v; }, local: true });
                await $.wset([$t67], "Status", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "fieldbyname", ["Status"])), "AsInteger")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
                await $.wset([$t67], "LAmount", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["LAmount"])), "AsFloat")), { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true });
                await $.wset([$t67], "DebitRate", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["DebitRate"])), "AsFloat")), { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true });
                await $.wset([$t67], "KreditRate", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["KreditRate"])), "AsFloat")), { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true });
                await $.wset([$t67], "TrName", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["TrName"])), "AsString")), { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true });
                await $.wset([$t67], "SessionName", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["SessionName"])), "AsString")), { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true });
                await $.wset([$t67], "UserID", (await $.mcall((await $.mv((await $.wv([$t67], "DataModExch", C, false)), "OPExchMgr")), "CallIntegerFunction", ["ReturnUserId", [(await $.wv([$t67], "SessionName", { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true }, false))]])), { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true });
                await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "Insert", []);
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["D_ACC_NO"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["DebitAccNo"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["C_ACC_NO"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["KreditAccNo"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["D_VAL_NAME"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["DebitVal"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["C_VAL_NAME"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["KreditVal"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["AMMOUNT"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["DebitAmount"])), "AsFloat")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["LAMMOUNT"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["LAmount"])), "AsFloat")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["D_RATE"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["DebitRate"])), "AsFloat")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["C_RATE"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["KreditRate"])), "AsFloat")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["ASSIGMENT"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["TrName"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["SESSIONNAME"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "FieldByName", ["SessionName"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["dat"])), "asDateTime", (await $.wv([$t67], "Date", C, false)));
                await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "Post", []);
                if ($.truthy($.ne((await $.wcall([$t67], "trim", [(await $.wcall([$t67], "FloatToStr", [(await $.wv([$t67], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false))], C))], C)), "1"))) {
                  if ($.truthy($.eq((await $.wv([$t67], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 1))) {
                    await $.wset([$t67], "r", (await $.mcall((await $.wv([$t67], "sb_transaction", C, false)), "CallIntegerFunction", ["ex_transaction_db", [(await $.wv([$t67], "DebitAccId", { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true }, false)), (await $.wv([$t67], "KreditAccId", { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true }, false)), (await $.wv([$t67], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)), (await $.wv([$t67], "CreditAmount", { get: async () => L0["creditamount"], set: async (v) => { L0["creditamount"] = v; }, local: true }, false)), (await $.wv([$t67], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.wv([$t67], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), (await $.wv([$t67], "KreditRate", { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true }, false)), (await $.wv([$t67], "TrName", { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true }, false)), (await $.wv([$t67], "a_Flags", { get: async () => L0["a_flags"], set: async (v) => { L0["a_flags"] = v; }, local: true }, false)), (await $.wv([$t67], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false))]])), C);
                  } else {
                    await $.wset([$t67], "r", (await $.mcall((await $.wv([$t67], "sb_transaction", C, false)), "CallIntegerFunction", ["ex_transaction_additional_db", [(await $.wv([$t67], "DebitAccId", { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true }, false)), (await $.wv([$t67], "KreditAccId", { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true }, false)), (await $.wv([$t67], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)), (await $.wv([$t67], "CreditAmount", { get: async () => L0["creditamount"], set: async (v) => { L0["creditamount"] = v; }, local: true }, false)), (await $.wv([$t67], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.wv([$t67], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), (await $.wv([$t67], "KreditRate", { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true }, false)), (await $.wv([$t67], "TrName", { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true }, false)), (await $.wv([$t67], "a_Flags", { get: async () => L0["a_flags"], set: async (v) => { L0["a_flags"] = v; }, local: true }, false)), (await $.wv([$t67], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false))]])), C);
                  }
                }
                await $.mset((await $.wv([$t67], "ProgressBar", C, false)), "Position", $.idiv($.mul((await $.mv((await $.wv([$t67], "TableAddFile", C, false)), "RecordCount")), 100), (await $.wv([$t67], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))));
                await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "Next", []);
                await $.tick();
              }
            }
            await $.stmt((await $.wcall([$t67], "DeleteFile", [(await $.mv((await $.wv([$t67], "OpenDialog", C, false)), "FileName"))], C)));
          } else {
            await $.stmt((await $.wcall([$t67], "ShowMessage", ["Faylı seçin!!"], C)));
          }
        } finally {
          await $.mcall((await $.mv((await $.mv((await $.wv([$t67], "DataModExch", C, false)), "OPExchMgr")), "Session")), "Commit", []);
          await $.mset((await $.wv([$t67], "Screen", C, false)), "Cursor", (await $.wv([$t67], "crDefault", C, false)));
          await $.mset((await $.wv([$t67], "ProgressBar", C, false)), "Position", 0);
          await $.mcall((await $.wv([$t67], "TableAddFile", C, false)), "Close", []);
        }
      }
      else if ($.eq($t68, 2)) {
        try {
          await $.mset((await $.wv([$t67], "Screen", C, false)), "Cursor", (await $.wv([$t67], "crSQLWait", C, false)));
          await $.mset((await $.wv([$t67], "ProgressBar", C, false)), "Position", 0);
          if ($.truthy((await $.or_(($.not((await $.mv((await $.wv([$t67], "QueryTrans", C, false)), "IsEmpty")))), async () => ($.eq((await $.mv((await $.wv([$t67], "QueryTrans", C, false)), "Active")), (await $.wv([$t67], "true", C, false)))))))) {
            await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "First", []);
            { const $t71 = (await $.mv((await $.wv([$t67], "QueryTrans", C, false)), "RecordCount"));
              await $.wset([$t67], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
              let $t72 = true;
              for (;;) {
                if (!$t72) { await $.wset([$t67], "i", $.succ((await $.wv([$t67], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                $t72 = false;
                if (!($.ord((await $.wv([$t67], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t71))) break;
                await $.mcall((await $.wv([$t67], "ODSExp_Provarch", C, false)), "Open", []);
                await $.wset([$t67], "DebitAccId", (await $.mcall((await $.wv([$t67], "sb_transaction", C, false)), "CallIntegerFunction", ["Get_Acc_Id", [(await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["DebitAccNo"])), "AsString"))]])), { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true });
                await $.wset([$t67], "KreditAccId", (await $.mcall((await $.wv([$t67], "sb_transaction", C, false)), "CallIntegerFunction", ["Get_Acc_Id", [(await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["KreditAccNo"])), "AsString"))]])), { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true });
                await $.wset([$t67], "DebitAmount", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "fieldbyname", ["DebitAmount"])), "AsFloat")), { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true });
                await $.wset([$t67], "CreditAmount", (await $.wv([$t67], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)), { get: async () => L0["creditamount"], set: async (v) => { L0["creditamount"] = v; }, local: true });
                await $.wset([$t67], "LAmount", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["LAmount"])), "AsFloat")), { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true });
                await $.wset([$t67], "DebitRate", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["DebitRate"])), "AsFloat")), { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true });
                await $.wset([$t67], "KreditRate", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["KreditRate"])), "AsFloat")), { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true });
                await $.wset([$t67], "TrName", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["TrName"])), "AsString")), { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true });
                await $.wset([$t67], "SessionName", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["SessionName"])), "AsString")), { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true });
                await $.wset([$t67], "UserID", (await $.mcall((await $.mv((await $.wv([$t67], "DataModExch", C, false)), "OPExchMgr")), "CallIntegerFunction", ["ReturnUserId", [(await $.wv([$t67], "SessionName", { get: async () => L0["sessionname"], set: async (v) => { L0["sessionname"] = v; }, local: true }, false))]])), { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true });
                await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "Insert", []);
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["D_ACC_NO"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["DebitAccNo"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["C_ACC_NO"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["KreditAccNo"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["D_VAL_NAME"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["DebitVal"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["C_VAL_NAME"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["KreditVal"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["AMMOUNT"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["DebitAmount"])), "AsFloat")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["LAMMOUNT"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["LAmount"])), "AsFloat")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["D_RATE"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["DebitRate"])), "AsFloat")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["C_RATE"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["KreditRate"])), "AsFloat")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["ASSIGMENT"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["TrName"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["SESSIONNAME"])), "asstring", (await $.mv((await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "FieldByName", ["SessionName"])), "AsString")));
                await $.mset((await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "fieldbyname", ["dat"])), "asDateTime", (await $.wv([$t67], "Date", C, false)));
                await $.mcall((await $.wv([$t67], "ODSEXp_Provarch", C, false)), "Post", []);
                if ($.truthy($.eq((await $.wcall([$t67], "trim", [(await $.wcall([$t67], "FloatToStr", [(await $.wv([$t67], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false))], C))], C)), "1"))) {
                  await $.wset([$t67], "r", (await $.mcall((await $.wv([$t67], "sb_transaction", C, false)), "CallIntegerFunction", ["ex_transaction_additional_db", [(await $.wv([$t67], "DebitAccId", { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true }, false)), (await $.wv([$t67], "KreditAccId", { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true }, false)), (await $.wv([$t67], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)), (await $.wv([$t67], "CreditAmount", { get: async () => L0["creditamount"], set: async (v) => { L0["creditamount"] = v; }, local: true }, false)), (await $.wv([$t67], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.wv([$t67], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), (await $.wv([$t67], "KreditRate", { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true }, false)), (await $.wv([$t67], "TrName", { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true }, false)), (await $.wv([$t67], "a_Flags", { get: async () => L0["a_flags"], set: async (v) => { L0["a_flags"] = v; }, local: true }, false)), (await $.wv([$t67], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false))]])), C);
                } else {
                  await $.wset([$t67], "r", (await $.mcall((await $.wv([$t67], "sb_transaction", C, false)), "CallIntegerFunction", ["ex_transaction_db", [(await $.wv([$t67], "DebitAccId", { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true }, false)), (await $.wv([$t67], "KreditAccId", { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true }, false)), (await $.wv([$t67], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)), (await $.wv([$t67], "CreditAmount", { get: async () => L0["creditamount"], set: async (v) => { L0["creditamount"] = v; }, local: true }, false)), (await $.wv([$t67], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)), (await $.wv([$t67], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)), (await $.wv([$t67], "KreditRate", { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true }, false)), (await $.wv([$t67], "TrName", { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true }, false)), (await $.wv([$t67], "a_Flags", { get: async () => L0["a_flags"], set: async (v) => { L0["a_flags"] = v; }, local: true }, false)), (await $.wv([$t67], "UserID", { get: async () => L0["userid"], set: async (v) => { L0["userid"] = v; }, local: true }, false))]])), C);
                }
                await $.mset((await $.wv([$t67], "ProgressBar", C, false)), "Position", $.idiv($.mul((await $.mv((await $.wv([$t67], "QueryTrans", C, false)), "RecordCount")), 100), (await $.wv([$t67], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))));
                await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "Next", []);
                await $.tick();
              }
            }
            await $.stmt((await $.wcall([$t67], "DeleteFile", [(await $.mv((await $.wv([$t67], "OpenDialog", C, false)), "FileName"))], C)));
          } else {
            await $.stmt((await $.wcall([$t67], "ShowMessage", ["Faylı seçin!!"], C)));
          }
        } finally {
          await $.mcall((await $.mv((await $.mv((await $.wv([$t67], "DataModExch", C, false)), "OPExchMgr")), "Session")), "Commit", []);
          await $.mset((await $.wv([$t67], "Screen", C, false)), "Cursor", (await $.wv([$t67], "crDefault", C, false)));
          await $.mset((await $.wv([$t67], "ProgressBar", C, false)), "Position", 0);
          await $.mcall((await $.wv([$t67], "QueryTrans", C, false)), "Close", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t73 = (await $.v(C, "DataModExch"));
    await $.mcall((await $.wv([$t73], "ODSRateTurn", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t73], "ODSRateTurn", C, false)), "SetVariable", ["dat", (await $.wcall([$t73], "Integer", [(await $.wcall([$t73], "Trunc", [(await $.mv((await $.wv([$t73], "DTP_Dat", C, false)), "DateTime"))], C))], C))])));
    await $.mcall((await $.wv([$t73], "ODSRateTurn", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BtnPrintClick", async function BtnPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "QRepTurn")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BtnSearchClick", async function BtnSearchClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_beg_dat": 0, "v_end_dat": 0, "val_id": 0, "status": 0, "exch_no": 0, "query_str": '', "s": '', "st": '', "vt": '', "et": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t74 = (await $.v(C, "DataModExch"));
    try {
      await $.mset((await $.wv([$t74], "Screen", C, false)), "Cursor", (await $.wv([$t74], "crSQLWait", C, false)));
      await $.wset([$t74], "v_beg_dat", (await $.wcall([$t74], "Integer", [(await $.wcall([$t74], "Trunc", [(await $.mv((await $.wv([$t74], "DTP_Begin", C, false)), "DateTime"))], C))], C)), { get: async () => L0["v_beg_dat"], set: async (v) => { L0["v_beg_dat"] = v; }, local: true });
      await $.wset([$t74], "v_end_dat", (await $.wcall([$t74], "Integer", [(await $.wcall([$t74], "Trunc", [(await $.mv((await $.wv([$t74], "DTP_End", C, false)), "DateTime"))], C))], C)), { get: async () => L0["v_end_dat"], set: async (v) => { L0["v_end_dat"] = v; }, local: true });
      if ($.truthy($.eq((await $.mv((await $.wv([$t74], "DBLC_Currency", C, false)), "KeyValue")), (await $.wv([$t74], "null", C, false))))) {
        await $.wset([$t74], "val_id", (-(1)), { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true });
      } else {
        await $.wset([$t74], "val_id", (await $.mv((await $.wv([$t74], "DBLC_Currency", C, false)), "KeyValue")), { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true });
      }
      await $.wset([$t74], "status", (await $.mv((await $.wv([$t74], "CBox_Status", C, false)), "ItemIndex")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
      if ($.truthy($.eq((await $.mv((await $.wv([$t74], "DBLC_Exchange", C, false)), "KeyValue")), (await $.wv([$t74], "null", C, false))))) {
        await $.wset([$t74], "exch_no", (-(1)), { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true });
      } else {
        await $.wset([$t74], "exch_no", (await $.mv((await $.wv([$t74], "DBLC_Exchange", C, false)), "KeyValue")), { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true });
      }
      await $.wset([$t74], "query_str", (await $.mcall((await $.wv([$t74], "OPExchMgr", C, false)), "CallStringFunction", ["Get_Turn_Over_Str", [(await $.wv([$t74], "v_beg_dat", { get: async () => L0["v_beg_dat"], set: async (v) => { L0["v_beg_dat"] = v; }, local: true }, false)), (await $.wv([$t74], "v_end_dat", { get: async () => L0["v_end_dat"], set: async (v) => { L0["v_end_dat"] = v; }, local: true }, false)), (await $.wv([$t74], "val_id", { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true }, false)), (await $.wv([$t74], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), (await $.wv([$t74], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false))]])), { get: async () => L0["query_str"], set: async (v) => { L0["query_str"] = v; }, local: true });
      await $.mcall((await $.wv([$t74], "ODSTraffics", C, false)), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t74], "ODSTraffics", C, false)), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t74], "ODSTraffics", C, false)), "SQL")), "Add", [(await $.wv([$t74], "query_str", { get: async () => L0["query_str"], set: async (v) => { L0["query_str"] = v; }, local: true }, false))])));
      await $.mcall((await $.wv([$t74], "ODSTraffics", C, false)), "Open", []);
      if ($.truthy($.gt((await $.wv([$t74], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), 0))) {
        await $.wset([$t74], "St", $.add($.add("and (status=", (await $.wcall([$t74], "IntToStr", [(await $.wv([$t74], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false))], C))), ")"), { get: async () => L0["st"], set: async (v) => { L0["st"] = v; }, local: true });
      } else {
        await $.wset([$t74], "St", "", { get: async () => L0["st"], set: async (v) => { L0["st"] = v; }, local: true });
      }
      if ($.truthy($.gt((await $.wv([$t74], "val_id", { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true }, false)), (-(1))))) {
        await $.wset([$t74], "Vt", $.add($.add("and (val_id=", (await $.wcall([$t74], "vartostr", [(await $.wv([$t74], "val_id", { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true }, false))], C))), ")"), { get: async () => L0["vt"], set: async (v) => { L0["vt"] = v; }, local: true });
      } else {
        await $.wset([$t74], "Vt", "", { get: async () => L0["vt"], set: async (v) => { L0["vt"] = v; }, local: true });
      }
      if ($.truthy($.gt((await $.wv([$t74], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false)), (-(1))))) {
        await $.wset([$t74], "Et", $.add($.add(" and (ex_id=", (await $.wcall([$t74], "vartostr", [(await $.wv([$t74], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false))], C))), ")"), { get: async () => L0["et"], set: async (v) => { L0["et"] = v; }, local: true });
      } else {
        await $.wset([$t74], "Et", "", { get: async () => L0["et"], set: async (v) => { L0["et"] = v; }, local: true });
      }
      await $.wset([$t74], "S", $.add($.add((await $.wv([$t74], "St", { get: async () => L0["st"], set: async (v) => { L0["st"] = v; }, local: true }, false)), (await $.wv([$t74], "Vt", { get: async () => L0["vt"], set: async (v) => { L0["vt"] = v; }, local: true }, false))), (await $.wv([$t74], "Et", { get: async () => L0["et"], set: async (v) => { L0["et"] = v; }, local: true }, false))), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
      await $.mcall((await $.mv((await $.wv([$t74], "DataModExch", C, false)), "Amountsum")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t74], "DataModExch", C, false)), "Amountsum")), "SetVariable", ["dat1", (await $.wv([$t74], "v_beg_dat", { get: async () => L0["v_beg_dat"], set: async (v) => { L0["v_beg_dat"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t74], "DataModExch", C, false)), "Amountsum")), "SetVariable", ["dat2", (await $.wv([$t74], "v_end_dat", { get: async () => L0["v_end_dat"], set: async (v) => { L0["v_end_dat"] = v; }, local: true }, false))])));
      { const $t75 = await $.iset((await $.mv((await $.mv((await $.wv([$t74], "DataModExch", C, false)), "Amountsum")), "Sql")), [5], (await $.wv([$t74], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t75 !== undefined) { await $.mset((await $.mv((await $.wv([$t74], "DataModExch", C, false)), "Amountsum")), "Sql", $t75); } }
      await $.mcall((await $.mv((await $.wv([$t74], "DataModExch", C, false)), "Amountsum")), "Open", []);
    } finally {
      await $.mset((await $.wv([$t74], "Screen", C, false)), "Cursor", (await $.wv([$t74], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ChBoxCurrencyClick", async function ChBoxCurrencyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChBoxCurrency")), "Checked")), false))) {
    await $.mset((await $.v(C, "DBLC_Currency")), "KeyValue", (-(1)));
  } else {
    await $.mset((await $.v(C, "DBLC_Currency")), "KeyValue", 1);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ChBoxExchangeClick", async function ChBoxExchangeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChBoxExchange")), "Checked")), false))) {
    await $.mset((await $.v(C, "DBLC_Exchange")), "KeyValue", (-(1)));
  } else {
    await $.mset((await $.v(C, "DBLC_Exchange")), "KeyValue", 1);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "Insertprovarch", async function Insertprovarch(Self, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
  const C = $.chain(Self, U);
  const L0 = {"debitval": $.copyArg(p0), "kreditval": $.copyArg(p1), "debitaccno": $.copyArg(p2), "kreditaccno": $.copyArg(p3), "debitamount": $.copyArg(p4), "lamount": $.copyArg(p5), "debitrate": $.copyArg(p6), "kreditrate": $.copyArg(p7), "trname": $.copyArg(p8), result: undefined};
  await $.fixArgs(L0, ["debitval", "kreditval", "debitaccno", "kreditaccno", "debitamount", "lamount", "debitrate", "kreditrate", "trname"]);
  {
    const $t76 = (await $.v(C, "DataModExch"));
    const $t77 = (await $.wv([$t76], "ODSEXp_Provarch", C, false));
    await $.stmt($.wcall([$t76, $t77], "open", [], C));
    await $.stmt($.wcall([$t76, $t77], "Insert", [], C));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["D_VAL_NAME"], C)), "asstring", (await $.wv([$t76, $t77], "DebitVal", { get: async () => L0["debitval"], set: async (v) => { L0["debitval"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["C_VAL_NAME"], C)), "asstring", (await $.wv([$t76, $t77], "KreditVal", { get: async () => L0["kreditval"], set: async (v) => { L0["kreditval"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["D_ACC_NO"], C)), "asstring", (await $.wv([$t76, $t77], "DebitAccno", { get: async () => L0["debitaccno"], set: async (v) => { L0["debitaccno"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["C_ACC_NO"], C)), "asstring", (await $.wv([$t76, $t77], "KreditAccNo", { get: async () => L0["kreditaccno"], set: async (v) => { L0["kreditaccno"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["AMMOUNT"], C)), "AsFloat", (await $.wv([$t76, $t77], "DebitAmount", { get: async () => L0["debitamount"], set: async (v) => { L0["debitamount"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["LAMMOUNT"], C)), "AsFloat", (await $.wv([$t76, $t77], "LAmount", { get: async () => L0["lamount"], set: async (v) => { L0["lamount"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["D_RATE"], C)), "AsFloat", (await $.wv([$t76, $t77], "DebitRate", { get: async () => L0["debitrate"], set: async (v) => { L0["debitrate"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["C_RATE"], C)), "AsFloat", (await $.wv([$t76, $t77], "KreditRate", { get: async () => L0["kreditrate"], set: async (v) => { L0["kreditrate"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["ASSIGMENT"], C)), "asstring", (await $.wv([$t76, $t77], "TrName", { get: async () => L0["trname"], set: async (v) => { L0["trname"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["SESSIONNAME"], C)), "asstring", (await $.wcall([$t76, $t77], "UpperCase", [(await $.mv((await $.mv((await $.wv([$t76, $t77], "OPExchMgr", C, false)), "Session")), "LogonUsername"))], C)));
    await $.mset((await $.wcall([$t76, $t77], "fieldbyname", ["dat"], C)), "asDateTime", (await $.wv([$t76, $t77], "Date", C, false)));
    await $.stmt($.wcall([$t76, $t77], "Post", [], C));
  }
  return L0.result;
}, {"params": ["DebitVal", "KreditVal", "DebitAccno", "KreditAccNo", "DebitAmount", "LAmount", "DebitRate", "KreditRate", "TrName"], "kind": "procedure", "ptypes": ["String", "String", "String", "String", "Real", "Real", "Real", "Real", "String"]});
  U.method("TExchangeMGR_X", "ToolButton27Click", async function ToolButton27Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "dat": 0, "debitaccid": 0, "kreditaccid": 0, "cashaccid": 0, "puraccid": 0, "debitamount": 0, "creditamount": 0, "lamount": 0, "status": 0, "debitrate": 0, "kreditrate": 0, "trname": '', "a_flags": false, "userid": 0, "feetrname": '', "feetrname_l": '', "feedebitamount": 0, "feedebitaccno": '', "feekreditaccno": '', "debitval": '', "kreditval": '', "kreditaccno": '', "debitaccno": '', "cashaccno": '', "puraccno": '', "id": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBA_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["EXCH_TRANS"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch")), "FieldByName", ["trans_close"])), "AsInteger")), 1))) {
    return L0.result;
  }
  {
    const $t78 = (await $.v(C, "DataModExch"));
    await $.wset([$t78], "resultID", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["id"])), "AsInteger")), C);
    await $.mset((await $.wv([$t78], "Trans", C, false)), "ex_id", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["ex_id"])), "AsInteger")));
    await $.mset((await $.wv([$t78], "Trans", C, false)), "val_id", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["val_id"])), "AsInteger")));
    await $.mset((await $.wv([$t78], "Trans", C, false)), "debit_amount", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["debitamount"])), "AsFloat")));
    await $.mset((await $.wv([$t78], "Trans", C, false)), "l_amount", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["lamount"])), "AsFloat")));
    await $.mcall((await $.wv([$t78], "ODSExRemainder", C, false)), "close", []);
    await $.mset((await $.wv([$t78], "ODSExRemainder", C, false)), "filtered", (await $.wv([$t78], "false", C, false)));
    await $.mset((await $.wv([$t78], "ODSExRemainder", C, false)), "filter", $.add("val_id=", (await $.wcall([$t78], "Inttostr", [(await $.mv((await $.wv([$t78], "Trans", C, false)), "val_id"))], C))));
    await $.mset((await $.wv([$t78], "ODSExRemainder", C, false)), "filtered", (await $.wv([$t78], "true", C, false)));
    await $.mcall((await $.wv([$t78], "ODSExRemainder", C, false)), "open", []);
    await $.mset((await $.wv([$t78], "Trans", C, false)), "RDebitAmount", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExRemainder", C, false)), "FieldByName", ["CURRENT_OSTAT"])), "AsFloat")));
    await $.mcall((await $.wv([$t78], "ODSExRemainder", C, false)), "close", []);
    await $.mset((await $.wv([$t78], "ODSExRemainder", C, false)), "filtered", (await $.wv([$t78], "false", C, false)));
    await $.mset((await $.wv([$t78], "ODSExRemainder", C, false)), "filter", "(val_id=0)");
    await $.mset((await $.wv([$t78], "ODSExRemainder", C, false)), "filtered", (await $.wv([$t78], "true", C, false)));
    await $.mcall((await $.wv([$t78], "ODSExRemainder", C, false)), "open", []);
    await $.mset((await $.wv([$t78], "Trans", C, false)), "RLAmount", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExRemainder", C, false)), "FieldByName", ["CURRENT_OSTAT"])), "AsFloat")));
    await $.mcall((await $.wv([$t78], "ODSExRemainder", C, false)), "close", []);
    await $.mset((await $.wv([$t78], "ODSExRemainder", C, false)), "filtered", (await $.wv([$t78], "false", C, false)));
    await $.mset((await $.wv([$t78], "ODSExRemainder", C, false)), "filter", "");
    await $.mcall((await $.wv([$t78], "ODSExRemainder", C, false)), "open", []);
    await $.mset((await $.wv([$t78], "Trans", C, false)), "trans_date", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["dat"])), "AsDateTime")));
    await $.mset((await $.wv([$t78], "Trans", C, false)), "val_course", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["op_course"])), "AsFloat")));
    await $.mset((await $.wv([$t78], "Trans", C, false)), "val_changed_course", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["val_changed_course"])), "AsFloat")));
    await $.mset((await $.wv([$t78], "Trans", C, false)), "val_nb_course", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["val_nb_course"])), "AsFloat")));
    await $.mset((await $.wv([$t78], "Trans", C, false)), "trans_name", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["oper_name"])), "AsString")));
    await $.wset([$t78], "a_Flags", (await $.wv([$t78], "false", C, false)), { get: async () => L0["a_flags"], set: async (v) => { L0["a_flags"] = v; }, local: true });
    await $.mset((await $.wv([$t78], "Trans", C, false)), "operator_id", (await $.mcall((await $.wv([$t78], "OPExchMgr", C, false)), "CallIntegerFunction", ["UserID", []])));
    await $.mset((await $.wv([$t78], "Trans", C, false)), "status", (await $.mv((await $.mcall((await $.wv([$t78], "ODSExchProvarch", C, false)), "FieldByName", ["status"])), "AsInteger")));
    await $.stmt((await $.mcall((await $.wv([$t78], "OPExchMgr", C, false)), "CallProcedure", ["calculate_remainder", [(await $.mv((await $.wv([$t78], "Trans", C, false)), "status")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "trans_date")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_id")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "debit_amount")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "l_amount")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "RDebitAmount")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "RLAmount"))]])));
    await $.wset([$t78], "KreditAccId", (await $.mcall((await $.wv([$t78], "OPExchMgr", C, false)), "CallStringFunction", ["get_purchase_no", [(await $.mv((await $.wv([$t78], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_id"))]])), { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true });
    await $.wset([$t78], "DebitAccId", (await $.mcall((await $.wv([$t78], "OPExchMgr", C, false)), "CallStringFunction", ["get_selling_no", [(await $.mv((await $.wv([$t78], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_id"))]])), { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true });
    await $.wset([$t78], "CashAccId", (await $.mcall((await $.wv([$t78], "OPExchMgr", C, false)), "CallStringFunction", ["get_cash_acc_no", [(await $.mv((await $.wv([$t78], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_id"))]])), { get: async () => L0["cashaccid"], set: async (v) => { L0["cashaccid"] = v; }, local: true });
    await $.wset([$t78], "PurAccId", (await $.mcall((await $.wv([$t78], "OPExchMgr", C, false)), "CallStringFunction", ["get_pur_acc_no", [(await $.mv((await $.wv([$t78], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_id"))]])), { get: async () => L0["puraccid"], set: async (v) => { L0["puraccid"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wv([$t78], "Trans", C, false)), "status")), 1))) {
      await $.wset([$t78], "s", (await $.mcall((await $.wv([$t78], "sb_transaction", C, false)), "CallIntegerFunction", ["ex_transaction", [(await $.wv([$t78], "resultID", C, false)), (await $.wv([$t78], "DebitAccId", { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true }, false)), (await $.wv([$t78], "KreditAccId", { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true }, false)), (await $.wv([$t78], "CashAccId", { get: async () => L0["cashaccid"], set: async (v) => { L0["cashaccid"] = v; }, local: true }, false)), (await $.wv([$t78], "PurAccId", { get: async () => L0["puraccid"], set: async (v) => { L0["puraccid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t78], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "debit_amount")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "debit_amount")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "l_amount")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_course")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_changed_course")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_nb_course")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "trans_name")), (await $.wv([$t78], "a_Flags", { get: async () => L0["a_flags"], set: async (v) => { L0["a_flags"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t78], "Trans", C, false)), "operator_id"))]])), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    } else {
      await $.wset([$t78], "s", (await $.mcall((await $.wv([$t78], "sb_transaction", C, false)), "CallIntegerFunction", ["ex_transaction_additional", [(await $.wv([$t78], "resultID", C, false)), (await $.wv([$t78], "KreditAccId", { get: async () => L0["kreditaccid"], set: async (v) => { L0["kreditaccid"] = v; }, local: true }, false)), (await $.wv([$t78], "DebitAccId", { get: async () => L0["debitaccid"], set: async (v) => { L0["debitaccid"] = v; }, local: true }, false)), (await $.wv([$t78], "CashAccId", { get: async () => L0["cashaccid"], set: async (v) => { L0["cashaccid"] = v; }, local: true }, false)), (await $.wv([$t78], "PurAccId", { get: async () => L0["puraccid"], set: async (v) => { L0["puraccid"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t78], "Trans", C, false)), "ex_id")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "debit_amount")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "debit_amount")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "l_amount")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_changed_course")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_course")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "val_nb_course")), (await $.mv((await $.wv([$t78], "Trans", C, false)), "trans_name")), (await $.wv([$t78], "a_Flags", { get: async () => L0["a_flags"], set: async (v) => { L0["a_flags"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t78], "Trans", C, false)), "operator_id"))]])), { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true });
    }
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSExchProvarch")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton29Click", async function ToolButton29Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton31Click", async function ToolButton31Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataModExch")), "ODSExOffice")), "Active", true);
  await $.mset((await $.mv((await $.v(C, "DataModExch")), "ODSExAdminIn")), "Active", true);
  {
    const $t79 = (await $.mv((await $.v(C, "DataModExch")), "ODSParametr"));
    await $.stmt($.wcall([$t79], "Open", [], C));
    if ($.truthy($.eq((await $.wcall([$t79], "UpperCase", [(await $.mv((await $.wv([$t79], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t79], "FormParametr", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t79], "Application", C, false)), "MessageBox", ["Hüququnuz Yoxdur!", "FormParametr", 0])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton34Click", async function ToolButton34Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBA_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["EXCH_RESURSCOMMIT"]])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModExch")), "ODSResurs")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSResurs")), "FieldByName", ["commitstatus"])), "AsInteger")), 2))) {
    return L0.result;
  }
  {
    const $t80 = (await $.v(C, "DataModExch"));
    await $.stmt((await $.mcall((await $.wv([$t80], "OPExchMgr", C, false)), "CallProcedure", ["VDMResursTransaction", [(await $.mv((await $.mcall((await $.wv([$t80], "ODSResurs", C, false)), "fieldbyname", ["id"])), "asinteger"))]])));
  }
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
  await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSResurs")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton38Click", async function ToolButton38Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t81 = (await $.v(C, "DataModExch"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t81], "ODSResurs", C, false)), "RecordCount")), 0))) {
      return L0.result;
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t81], "ODSResurs", C, false)), "FieldByName", ["commitstatus"])), "AsInteger")), 1)), async () => ($.eq((await $.wcall([$t81], "MessageDLG", [(await $.wcall([$t81], "Pchar", ["Geri qaytarılımış resurs silmək istəyirsiniz? "], C)), (await $.wv([$t81], "mtConfirmation", C, false)), [(await $.wv([$t81], "mbYes", C, false)), (await $.wv([$t81], "mbNo", C, false))], 0], C)), (await $.wv([$t81], "mrYes", C, false)))))))) {
      await $.stmt((await $.mcall((await $.wv([$t81], "OPExchMgr", C, false)), "CallProcedure", ["VDMResursDelete", [(await $.mv((await $.mcall((await $.wv([$t81], "ODSResurs", C, false)), "fieldbyname", ["id"])), "asinteger"))]])));
      await $.mcall((await $.wv([$t81], "ODSResurs", C, false)), "Refresh", []);
    } else {
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "ToolButton48Click", async function ToolButton48Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModExch")), "ODSResurs")), "RecordCount")), 0))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSResurs")), "FieldByName", ["commitstatus"])), "AsInteger")), 2))) {
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSResurs")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "FormGivenResurs")), "VResInsert", true);
    await $.mcall((await $.v(C, "FormGivenResurs")), "ShowModal", []);
  } else {
    await $.mset((await $.v(C, "FormResursRetrun")), "VRetrunInsert", true);
    await $.mcall((await $.v(C, "FormResursRetrun")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh2")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat tapılmadı!..."])));
    return L0.result;
  }
  {
    const $t82 = (await $.v(C, "CMExcelExport1"));
    await $.mcall((await $.mv((await $.mv((await $.wv([$t82], "DBGridEh2", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t82], "Connect", [], C));
    await $.stmt((await $.wcall([$t82], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t82], "DBGridEh2", C, false)), "DataSource")), "DataSet")), "Əməliyyatlar", (await $.wv([$t82], "true", C, false)), (await $.wv([$t82], "true", C, false))], C)));
    await $.stmt($.wcall([$t82], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh3")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat tapılmadı!..."])));
    return L0.result;
  }
  {
    const $t83 = (await $.v(C, "CMExcelExport1"));
    await $.mcall((await $.mv((await $.mv((await $.wv([$t83], "DBGridEh3", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t83], "Connect", [], C));
    await $.stmt((await $.wcall([$t83], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t83], "DBGridEh3", C, false)), "DataSource")), "DataSet")), "Kurslar", (await $.wv([$t83], "true", C, false)), (await $.wv([$t83], "true", C, false))], C)));
    await $.stmt($.wcall([$t83], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn5Click", async function BitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_beg_dat": 0, "v_end_dat": 0, "val_id": 0, "status": 0, "exch_no": 0, "query_str": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t84 = (await $.v(C, "DataModExch"));
    try {
      await $.mset((await $.wv([$t84], "Screen", C, false)), "Cursor", (await $.wv([$t84], "crSQLWait", C, false)));
      await $.wset([$t84], "v_beg_dat", (await $.wcall([$t84], "Integer", [(await $.wcall([$t84], "Trunc", [(await $.mv((await $.wv([$t84], "DateTimePicker1", C, false)), "DateTime"))], C))], C)), { get: async () => L0["v_beg_dat"], set: async (v) => { L0["v_beg_dat"] = v; }, local: true });
      await $.wset([$t84], "v_end_dat", (await $.wcall([$t84], "Integer", [(await $.wcall([$t84], "Trunc", [(await $.mv((await $.wv([$t84], "DateTimePicker2", C, false)), "DateTime"))], C))], C)), { get: async () => L0["v_end_dat"], set: async (v) => { L0["v_end_dat"] = v; }, local: true });
      if ($.truthy($.eq((await $.mv((await $.wv([$t84], "DBLookupComboBox1", C, false)), "KeyValue")), (await $.wv([$t84], "null", C, false))))) {
        await $.wset([$t84], "val_id", (-(1)), { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true });
      } else {
        await $.wset([$t84], "val_id", (await $.mv((await $.wv([$t84], "DBLookupComboBox1", C, false)), "KeyValue")), { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true });
      }
      await $.wset([$t84], "status", (await $.mv((await $.wv([$t84], "ComboBox1", C, false)), "ItemIndex")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
      if ($.truthy($.eq((await $.mv((await $.wv([$t84], "DBLCBDelete", C, false)), "KeyValue")), (await $.wv([$t84], "null", C, false))))) {
        await $.wset([$t84], "exch_no", (-(1)), { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true });
      } else {
        await $.wset([$t84], "exch_no", (await $.mv((await $.wv([$t84], "DBLCBDelete", C, false)), "KeyValue")), { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true });
      }
      await $.wset([$t84], "query_str", (await $.mcall((await $.wv([$t84], "OPExchMgr", C, false)), "CallStringFunction", ["Get_Turn_Over_StrDel", [(await $.wv([$t84], "v_beg_dat", { get: async () => L0["v_beg_dat"], set: async (v) => { L0["v_beg_dat"] = v; }, local: true }, false)), (await $.wv([$t84], "v_end_dat", { get: async () => L0["v_end_dat"], set: async (v) => { L0["v_end_dat"] = v; }, local: true }, false)), (await $.wv([$t84], "val_id", { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true }, false)), (await $.wv([$t84], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), (await $.wv([$t84], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false))]])), { get: async () => L0["query_str"], set: async (v) => { L0["query_str"] = v; }, local: true });
      await $.mcall((await $.wv([$t84], "ODSDel_ExProvarch", C, false)), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t84], "ODSDel_ExProvarch", C, false)), "SQL")), "Clear", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t84], "ODSDel_ExProvarch", C, false)), "SQL")), "Add", [(await $.wv([$t84], "query_str", { get: async () => L0["query_str"], set: async (v) => { L0["query_str"] = v; }, local: true }, false))])));
      await $.mcall((await $.wv([$t84], "ODSDel_ExProvarch", C, false)), "Open", []);
    } finally {
      await $.mset((await $.wv([$t84], "Screen", C, false)), "Cursor", (await $.wv([$t84], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn6Click", async function BitBtn6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "ini": null, "bankname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["ini"] = (await $.mcall((await $.v(C, "TIniFile")), "Create", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "paramstr", [0]))])), "Exchange.ini")]));
  L0["bankname"] = (await $.mcall(L0["ini"], "ReadString", ["BankName", "name", ""]));
  L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSTraffics")), "FieldByName", ["id"])), "AsInteger"));
  {
    const $t85 = (await $.mv((await $.v(C, "DataModExch")), "ODSReport"));
    await $.stmt($.wcall([$t85], "Close", [], C));
    await $.stmt((await $.wcall([$t85], "SetVariable", ["p_id", (await $.wv([$t85], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t85], "Open", [], C));
  }
  {
    const $t86 = (await $.mv((await $.v(C, "DataModExch")), "ODSReport"));
    const $t87 = (await $.wv([$t86], "FormRep", C, false));
    await $.mset((await $.wv([$t86, $t87], "LabelBankName", C, false)), "Caption", (await $.wv([$t86, $t87], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
    await $.mset((await $.wv([$t86, $t87], "LabelBankNameCopy", C, false)), "Caption", (await $.wv([$t86, $t87], "BankName", { get: async () => L0["bankname"], set: async (v) => { L0["bankname"] = v; }, local: true }, false)));
    { const $t88 = (await $.mv((await $.wcall([$t86, $t87], "FieldByName", ["Status"], C)), "AsInteger"));
      if ($.eq($t88, 1)) {
        await $.mset((await $.wv([$t86, $t87], "LabelStatus", C, false)), "Caption", "XARİCİ VALYUTANIN ALIŞI");
        await $.mset((await $.wv([$t86, $t87], "LabelDate", C, false)), "Caption", (await $.wcall([$t86, $t87], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t86, $t87], "LabelTime", C, false)), "Caption", (await $.wcall([$t86, $t87], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t86, $t87], "LabelCustomer", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_father"], C)), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "LabelPassport", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_passport"], C)), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "LabelCourse", C, false)), "Caption", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_course"], C)), "AsString")));
        await $.mset((await $.wv([$t86, $t87], "LabelDifference", C, false)), "Caption", "");
        await $.mset((await $.wv([$t86, $t87], "QRLabel20", C, false)), "Caption", $.add($.add("VÖEN", "  "), (await $.mv((await $.mcall((await $.mv((await $.wv([$t86, $t87], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "QRLabel25", C, false)), "Caption", $.add($.add("VÖEN", "  "), (await $.mv((await $.mcall((await $.mv((await $.wv([$t86, $t87], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "LabelStatusCopy", C, false)), "Caption", "XARİCİ VALYUTANIN ALIŞI");
        await $.mset((await $.wv([$t86, $t87], "LabelDateCopy", C, false)), "Caption", (await $.wcall([$t86, $t87], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t86, $t87], "LabelTimeCopy", C, false)), "Caption", (await $.wcall([$t86, $t87], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t86, $t87], "LabelCustomerCopy", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_father"], C)), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "LabelPassportCopy", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_passport"], C)), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "LabelCourseCopy", C, false)), "Caption", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_course"], C)), "AsString")));
        await $.mset((await $.wv([$t86, $t87], "LabelDifferenceCopy", C, false)), "Caption", "");
        await $.mset((await $.wv([$t86, $t87], "QRLabel20", C, false)), "Caption", $.add($.add("VÖEN", "  "), (await $.mv((await $.mcall((await $.mv((await $.wv([$t86, $t87], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "QRLabel25", C, false)), "Caption", $.add($.add("VÖEN", "  "), (await $.mv((await $.mcall((await $.mv((await $.wv([$t86, $t87], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString"))));
        await $.mcall((await $.wv([$t86, $t87], "QuickRep", C, false)), "Preview", []);
      }
      else if ($.eq($t88, 2)) {
        await $.mset((await $.wv([$t86, $t87], "LabelStatus", C, false)), "Caption", "XARİCİ VALYUTANIN SATIŞI");
        await $.mset((await $.wv([$t86, $t87], "LabelDate", C, false)), "Caption", (await $.wcall([$t86, $t87], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t86, $t87], "LabelTime", C, false)), "Caption", (await $.wcall([$t86, $t87], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t86, $t87], "LabelCustomer", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_father"], C)), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "LabelPassport", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_passport"], C)), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "LabelCourse", C, false)), "Caption", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_course"], C)), "AsString")));
        await $.mset((await $.wv([$t86, $t87], "LabelDifference", C, false)), "Caption", "");
        await $.mset((await $.wv([$t86, $t87], "QRLabel20", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t86, $t87], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString")));
        await $.mset((await $.wv([$t86, $t87], "QRLabel25", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t86, $t87], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString")));
        await $.mset((await $.wv([$t86, $t87], "LabelStatusCopy", C, false)), "Caption", "XARİCİ VALYUTANIN SATIŞI");
        await $.mset((await $.wv([$t86, $t87], "LabelDateCopy", C, false)), "Caption", (await $.wcall([$t86, $t87], "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t86, $t87], "LabelTimeCopy", C, false)), "Caption", (await $.wcall([$t86, $t87], "FormatDateTime", ["hh:mm:ss", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_time"], C)), "AsDateTime"))], C)));
        await $.mset((await $.wv([$t86, $t87], "LabelCustomerCopy", C, false)), "Caption", $.add($.add($.add($.add((await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_name"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_lname"], C)), "AsString"))), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_father"], C)), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "LabelPassportCopy", C, false)), "Caption", $.add($.add((await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["country"], C)), "AsString")), " "), (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["cust_passport"], C)), "AsString"))));
        await $.mset((await $.wv([$t86, $t87], "LabelCourseCopy", C, false)), "Caption", (await $.mv((await $.wcall([$t86, $t87], "fieldbyname", ["op_course"], C)), "AsString")));
        await $.mset((await $.wv([$t86, $t87], "LabelDifferenceCopy", C, false)), "Caption", "");
        await $.mset((await $.wv([$t86, $t87], "QRLabel20", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t86, $t87], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString")));
        await $.mset((await $.wv([$t86, $t87], "QRLabel25", C, false)), "Caption", (await $.mv((await $.mcall((await $.mv((await $.wv([$t86, $t87], "DataModExch", C, false)), "ODSBankInfo")), "fieldbyname", ["INN"])), "AsString")));
        await $.mcall((await $.wv([$t86, $t87], "QuickRep", C, false)), "Preview", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn7Click", async function BitBtn7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh4")), "DataSource")), "DataSet")), "Active")))))) {
    await $.mcall((await $.mv((await $.v(C, "DataModExch")), "ODSDel_ExProvarch")), "Open", []);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "DBGridEh4")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat tapılmadı!..."])));
    return L0.result;
  }
  {
    const $t89 = (await $.v(C, "CMExcelExport1"));
    await $.mcall((await $.mv((await $.mv((await $.wv([$t89], "DBGridEh4", C, false)), "DataSource")), "DataSet")), "Last", []);
    await $.stmt($.wcall([$t89], "Connect", [], C));
    await $.stmt((await $.wcall([$t89], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t89], "DBGridEh4", C, false)), "DataSource")), "DataSet")), "Silinmiş Əməliyyatlar", (await $.wv([$t89], "true", C, false)), (await $.wv([$t89], "true", C, false))], C)));
    await $.stmt($.wcall([$t89], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn8Click", async function BitBtn8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "delta": false};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t90 = (await $.v(C, "DataModExch"));
    if ($.truthy((await $.mv((await $.wv([$t90], "ODSExchRate", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t90], "ODSExchRate", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "BitBtn9Click", async function BitBtn9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_beg_dat": 0, "v_end_dat": 0, "val_id": 0, "status": 0, "exch_no": 0, "query_str": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t91 = (await $.v(C, "DataModExch"));
    try {
      await $.mset((await $.wv([$t91], "Screen", C, false)), "Cursor", (await $.wv([$t91], "crSQLWait", C, false)));
      await $.wset([$t91], "v_beg_dat", (await $.wcall([$t91], "Integer", [(await $.wcall([$t91], "Trunc", [(await $.mv((await $.wv([$t91], "DateTimePicker3", C, false)), "DateTime"))], C))], C)), { get: async () => L0["v_beg_dat"], set: async (v) => { L0["v_beg_dat"] = v; }, local: true });
      await $.wset([$t91], "v_end_dat", (await $.wcall([$t91], "Integer", [(await $.wcall([$t91], "Trunc", [(await $.mv((await $.wv([$t91], "DateTimePicker4", C, false)), "DateTime"))], C))], C)), { get: async () => L0["v_end_dat"], set: async (v) => { L0["v_end_dat"] = v; }, local: true });
      if ($.truthy((await $.mv((await $.wv([$t91], "CheckBox4", C, false)), "Checked")))) {
        if ($.truthy($.eq((await $.mv((await $.wv([$t91], "DBCB_Toplam", C, false)), "KeyValue")), (await $.wv([$t91], "null", C, false))))) {
          await $.wset([$t91], "exch_no", (-(1)), { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true });
        } else {
          await $.wset([$t91], "exch_no", (await $.mv((await $.wv([$t91], "DBCB_Toplam", C, false)), "KeyValue")), { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true });
        }
      }
      if ($.truthy((await $.mv((await $.wv([$t91], "CheckBox3", C, false)), "Checked")))) {
        if ($.truthy($.eq((await $.mv((await $.wv([$t91], "DBLookupComboBox3", C, false)), "KeyValue")), (await $.wv([$t91], "null", C, false))))) {
          await $.wset([$t91], "val_id", (-(1)), { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true });
        } else {
          await $.wset([$t91], "val_id", (await $.mv((await $.wv([$t91], "DBLookupComboBox3", C, false)), "KeyValue")), { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true });
        }
      }
      await $.wset([$t91], "status", (await $.mv((await $.wv([$t91], "ComboBox1", C, false)), "ItemIndex")), { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
      await $.mcall((await $.wv([$t91], "ODSReporting", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t91], "ODSReporting", C, false)), "SetVariable", ["bdat", (await $.wv([$t91], "v_beg_dat", { get: async () => L0["v_beg_dat"], set: async (v) => { L0["v_beg_dat"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t91], "ODSReporting", C, false)), "SetVariable", ["edat", (await $.wv([$t91], "v_end_dat", { get: async () => L0["v_end_dat"], set: async (v) => { L0["v_end_dat"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t91], "ODSReporting", C, false)), "SetVariable", ["val_id", (await $.wv([$t91], "val_id", { get: async () => L0["val_id"], set: async (v) => { L0["val_id"] = v; }, local: true }, false))])));
      await $.stmt((await $.mcall((await $.wv([$t91], "ODSReporting", C, false)), "SetVariable", ["val_name", (await $.mv((await $.wv([$t91], "DBLookupComboBox3", C, false)), "Text"))])));
      if ($.truthy($.ne((await $.wv([$t91], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false)), (-(1))))) {
        { const $t92 = await $.iset((await $.mv((await $.wv([$t91], "ODSReporting", C, false)), "sql")), [15], $.add("where p.ex_no=", (await $.wcall([$t91], "IntToStr", [(await $.wv([$t91], "exch_no", { get: async () => L0["exch_no"], set: async (v) => { L0["exch_no"] = v; }, local: true }, false))], C)))); if ($t92 !== undefined) { await $.mset((await $.wv([$t91], "ODSReporting", C, false)), "sql", $t92); } }
      } else {
        { const $t93 = await $.iset((await $.mv((await $.wv([$t91], "ODSReporting", C, false)), "sql")), [15], ""); if ($t93 !== undefined) { await $.mset((await $.wv([$t91], "ODSReporting", C, false)), "sql", $t93); } }
      }
      await $.mcall((await $.wv([$t91], "ODSReporting", C, false)), "Open", []);
    } finally {
      await $.mset((await $.wv([$t91], "Screen", C, false)), "Cursor", (await $.wv([$t91], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), false))) {
    await $.mset((await $.v(C, "DBLC_Exchange")), "KeyValue", (-(1)));
  } else {
    await $.mset((await $.v(C, "DBLC_Exchange")), "KeyValue", 1);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExchangeMGR_X", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    await $.mset((await $.v(C, "DBLC_Currency")), "KeyValue", (-(1)));
  } else {
    await $.mset((await $.v(C, "DBLC_Currency")), "KeyValue", 1);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
