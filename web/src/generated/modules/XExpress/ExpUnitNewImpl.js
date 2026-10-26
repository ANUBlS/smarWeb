// Generated from ExpUnitNewImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ExpUnitNewImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ExtCtrls", "Mask", "DBCtrlsEh", "DBCtrls", "StdCtrls", "SearchEdit", "CMCurrencyEdit", "Buttons", "CMHintBox", "DB", "CurrencyToHR_Azeri_Impl", "Grids", "DBGrids", "Menus", "sboapiDataModuleImpl", "ExpDataModuleUnit", "UnitSearchCustName", "ExpUnitImpl", "ExpCustomersTypeUnit", "UnitSearchLegalCustName", "UnitNominalCustomers", "ExpressDecls", "ExpressManagerImpl", "ExpPasswordUnit", "UnitPaymentsCredit"]);
  const C = [U];
  U.defClass("TExpFormNew", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "label8": {"name": "Label8", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "radiogroup2": {"name": "RadioGroup2", "type": "TRadioGroup"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label151": {"name": "Label151", "type": "TLabel"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "mizk1": {"name": "mizk1", "type": "TMenuItem"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "button5": {"name": "Button5", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "cmhintbox1": {"name": "CMHintBox1", "type": "TCMHintBox"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "radiogroup3": {"name": "RadioGroup3", "type": "TRadioGroup"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "groupbox21": {"name": "GroupBox21", "type": "TGroupBox"}, "groupbox22": {"name": "GroupBox22", "type": "TGroupBox"}, "groupbox23": {"name": "GroupBox23", "type": "TGroupBox"}, "cmhintbox2": {"name": "CMHintBox2", "type": "TCMHintBox"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "cmhintbox3": {"name": "CMHintBox3", "type": "TCMHintBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "editcustid": {"name": "EditCustid", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "editlastnamei": {"name": "EditLastNameI", "type": "TEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "editnamei": {"name": "EditNameI", "type": "TEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "editsonamei": {"name": "EditSonameI", "type": "TEdit"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "editpincodei": {"name": "EditPINCodeI", "type": "TEdit"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "cboxpassplacei": {"name": "CBoxPassPlaceI", "type": "TDBLookupComboBox"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "editseriali": {"name": "EditSerialI", "type": "TEdit"}, "editpassporti": {"name": "EditPassportI", "type": "TEdit"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "filialnamei": {"name": "FilialNameI", "type": "TDBEdit"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "transrefedit": {"name": "TransRefEdit", "type": "TEdit"}, "label48": {"name": "Label48", "type": "TLabel"}, "panel29": {"name": "Panel29", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label153": {"name": "Label153", "type": "TLabel"}, "senderaccno": {"name": "SenderAccNo", "type": "TDBLookupComboBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label43": {"name": "Label43", "type": "TLabel"}, "label147": {"name": "Label147", "type": "TLabel"}, "label45": {"name": "Label45", "type": "TLabel"}, "label149": {"name": "Label149", "type": "TLabel"}, "valutename": {"name": "ValuteName", "type": "TDBLookupComboBox"}, "cmcurrencyedit": {"name": "CMCurrencyEdit", "type": "TEdit"}, "panel30": {"name": "Panel30", "type": "TPanel"}, "label46": {"name": "Label46", "type": "TLabel"}, "cmcurrencyedit2": {"name": "CMCurrencyEdit2", "type": "TCMCurrencyEdit"}, "cmcurrencyedit3": {"name": "CMCurrencyEdit3", "type": "TCMCurrencyEdit"}, "label47": {"name": "Label47", "type": "TLabel"}, "panel31": {"name": "Panel31", "type": "TPanel"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "label44": {"name": "Label44", "type": "TLabel"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "label152": {"name": "Label152", "type": "TLabel"}, "panel33": {"name": "Panel33", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel34": {"name": "Panel34", "type": "TPanel"}, "radiobutton3": {"name": "RadioButton3", "type": "TRadioButton"}, "radiobutton4": {"name": "RadioButton4", "type": "TRadioButton"}, "panel35": {"name": "Panel35", "type": "TPanel"}, "label25": {"name": "Label25", "type": "TLabel"}, "editcustidii": {"name": "EditCustidII", "type": "TEdit"}, "panel36": {"name": "Panel36", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "editlastnameii": {"name": "EditLastNameII", "type": "TEdit"}, "panel37": {"name": "Panel37", "type": "TPanel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "editnameii": {"name": "EditNameII", "type": "TEdit"}, "panel38": {"name": "Panel38", "type": "TPanel"}, "label29": {"name": "Label29", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "editsonameii": {"name": "EditSoNameII", "type": "TEdit"}, "panel39": {"name": "Panel39", "type": "TPanel"}, "panel40": {"name": "Panel40", "type": "TPanel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "editpincodeii": {"name": "EditPINCodeII", "type": "TEdit"}, "panel41": {"name": "Panel41", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "cboxpassplaceii": {"name": "CBoxPassPlaceII", "type": "TDBLookupComboBox"}, "label36": {"name": "Label36", "type": "TLabel"}, "panel42": {"name": "Panel42", "type": "TPanel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "editserialii": {"name": "EditSerialII", "type": "TEdit"}, "editpassportii": {"name": "EditPassportII", "type": "TEdit"}, "panel44": {"name": "Panel44", "type": "TPanel"}, "label88": {"name": "Label88", "type": "TLabel"}, "filialnameii": {"name": "FilialNameII", "type": "TDBLookupComboBox"}, "panel45": {"name": "Panel45", "type": "TPanel"}, "label89": {"name": "Label89", "type": "TLabel"}, "senderaccnoii": {"name": "SenderAccNoII", "type": "TDBLookupComboBox"}, "panel46": {"name": "Panel46", "type": "TPanel"}, "label90": {"name": "Label90", "type": "TLabel"}, "editdate": {"name": "EditDate", "type": "TEdit"}, "panel47": {"name": "Panel47", "type": "TPanel"}, "label91": {"name": "Label91", "type": "TLabel"}, "edittime": {"name": "EditTime", "type": "TEdit"}, "panel48": {"name": "Panel48", "type": "TPanel"}, "label92": {"name": "Label92", "type": "TLabel"}, "edit25": {"name": "Edit25", "type": "TEdit"}, "panel49": {"name": "Panel49", "type": "TPanel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "panel50": {"name": "Panel50", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "search1passpin": {"name": "Search1passpin", "type": "TEdit"}, "panel51": {"name": "Panel51", "type": "TPanel"}, "label16": {"name": "Label16", "type": "TLabel"}, "search1id": {"name": "Search1id", "type": "TEdit"}, "panel52": {"name": "Panel52", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "search1paspnum": {"name": "Search1paspnum", "type": "TEdit"}, "panel53": {"name": "Panel53", "type": "TPanel"}, "label19": {"name": "Label19", "type": "TLabel"}, "search1inn": {"name": "Search1inn", "type": "TEdit"}, "label41": {"name": "Label41", "type": "TLabel"}, "panel54": {"name": "Panel54", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "searchpasspin": {"name": "Searchpasspin", "type": "TEdit"}, "panel55": {"name": "Panel55", "type": "TPanel"}, "label76": {"name": "Label76", "type": "TLabel"}, "searchpaspnum": {"name": "Searchpaspnum", "type": "TEdit"}, "panel56": {"name": "Panel56", "type": "TPanel"}, "label102": {"name": "Label102", "type": "TLabel"}, "searchid": {"name": "Searchid", "type": "TEdit"}, "panel57": {"name": "Panel57", "type": "TPanel"}, "label103": {"name": "Label103", "type": "TLabel"}, "searchinn": {"name": "Searchinn", "type": "TEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "remitinfedit": {"name": "RemitInfEdit", "type": "TEdit"}, "panel58": {"name": "Panel58", "type": "TPanel"}, "label37": {"name": "Label37", "type": "TLabel"}, "search2passpin": {"name": "Search2passpin", "type": "TEdit"}, "panel59": {"name": "Panel59", "type": "TPanel"}, "search2paspnum": {"name": "Search2paspnum", "type": "TEdit"}, "label38": {"name": "Label38", "type": "TLabel"}, "panel60": {"name": "Panel60", "type": "TPanel"}, "label39": {"name": "Label39", "type": "TLabel"}, "search2id": {"name": "Search2id", "type": "TEdit"}, "panel61": {"name": "Panel61", "type": "TPanel"}, "label40": {"name": "Label40", "type": "TLabel"}, "search2inn": {"name": "Search2inn", "type": "TEdit"}, "panel62": {"name": "Panel62", "type": "TPanel"}, "radiobutton5": {"name": "RadioButton5", "type": "TRadioButton"}, "radiobutton6": {"name": "RadioButton6", "type": "TRadioButton"}, "panel63": {"name": "Panel63", "type": "TPanel"}, "label56": {"name": "Label56", "type": "TLabel"}, "editcustid2": {"name": "EditCustid2", "type": "TEdit"}, "panel64": {"name": "Panel64", "type": "TPanel"}, "label54": {"name": "Label54", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "editlastname2": {"name": "EditLastName2", "type": "TEdit"}, "panel65": {"name": "Panel65", "type": "TPanel"}, "label58": {"name": "Label58", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "editname2": {"name": "EditName2", "type": "TEdit"}, "panel66": {"name": "Panel66", "type": "TPanel"}, "label60": {"name": "Label60", "type": "TLabel"}, "label59": {"name": "Label59", "type": "TLabel"}, "editsoname2": {"name": "EditSoName2", "type": "TEdit"}, "panel67": {"name": "Panel67", "type": "TPanel"}, "panel68": {"name": "Panel68", "type": "TPanel"}, "label64": {"name": "Label64", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "editpincode2": {"name": "EditPINCode2", "type": "TEdit"}, "panel69": {"name": "Panel69", "type": "TPanel"}, "label63": {"name": "Label63", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "cboxpassplace2": {"name": "CBoxPassPlace2", "type": "TDBLookupComboBox"}, "panel70": {"name": "Panel70", "type": "TPanel"}, "label62": {"name": "Label62", "type": "TLabel"}, "label61": {"name": "Label61", "type": "TLabel"}, "editserial2": {"name": "EditSerial2", "type": "TEdit"}, "editpassport2": {"name": "EditPassport2", "type": "TEdit"}, "panel72": {"name": "Panel72", "type": "TPanel"}, "filialname2": {"name": "FilialName2", "type": "TDBLookupComboBox"}, "label137": {"name": "Label137", "type": "TLabel"}, "panel73": {"name": "Panel73", "type": "TPanel"}, "label136": {"name": "Label136", "type": "TLabel"}, "senderaccno2": {"name": "SenderAccNo2", "type": "TDBLookupComboBox"}, "panel74": {"name": "Panel74", "type": "TPanel"}, "label150": {"name": "Label150", "type": "TLabel"}, "warrantserial": {"name": "WarrantSerial", "type": "TEdit"}, "warrantpassport": {"name": "WarrantPassport", "type": "TEdit"}, "panel75": {"name": "Panel75", "type": "TPanel"}, "label148": {"name": "Label148", "type": "TLabel"}, "warrantopendate": {"name": "WarrantOpenDate", "type": "TDBDateTimeEditEh"}, "panel76": {"name": "Panel76", "type": "TPanel"}, "label146": {"name": "Label146", "type": "TLabel"}, "warrantclosedate": {"name": "WarrantCloseDate", "type": "TDBDateTimeEditEh"}, "panel77": {"name": "Panel77", "type": "TPanel"}, "memo2": {"name": "Memo2", "type": "TMemo"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "panel78": {"name": "Panel78", "type": "TPanel"}, "buttonnominal": {"name": "ButtonNominal", "type": "TButton"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "label42": {"name": "Label42", "type": "TLabel"}, "label49": {"name": "Label49", "type": "TLabel"}, "dbcbox_doctypei": {"name": "DBCBox_DocTYPEI", "type": "TDBLookupComboBox"}, "panel79": {"name": "Panel79", "type": "TPanel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "dateediti": {"name": "DateEditI", "type": "TDBDateTimeEditEh"}, "panel80": {"name": "Panel80", "type": "TPanel"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "editmobili": {"name": "EditMobilI", "type": "TEdit"}, "editphonei": {"name": "EditPhoneI", "type": "TEdit"}, "panel81": {"name": "Panel81", "type": "TPanel"}, "panel82": {"name": "Panel82", "type": "TPanel"}, "buttonnominal1": {"name": "ButtonNominal1", "type": "TButton"}, "panel43": {"name": "Panel43", "type": "TPanel"}, "label67": {"name": "Label67", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "dbcbox_doctypeii": {"name": "DBCBox_DocTYPEII", "type": "TDBLookupComboBox"}, "panel83": {"name": "Panel83", "type": "TPanel"}, "label71": {"name": "Label71", "type": "TLabel"}, "label72": {"name": "Label72", "type": "TLabel"}, "dateeditii": {"name": "DateEditII", "type": "TDBDateTimeEditEh"}, "panel84": {"name": "Panel84", "type": "TPanel"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "label73": {"name": "Label73", "type": "TLabel"}, "label75": {"name": "Label75", "type": "TLabel"}, "label77": {"name": "Label77", "type": "TLabel"}, "editmobilii": {"name": "EditMobilII", "type": "TEdit"}, "editphoneii": {"name": "EditPhoneII", "type": "TEdit"}, "panel85": {"name": "Panel85", "type": "TPanel"}, "panel86": {"name": "Panel86", "type": "TPanel"}, "button8": {"name": "Button8", "type": "TButton"}, "panel71": {"name": "Panel71", "type": "TPanel"}, "label78": {"name": "Label78", "type": "TLabel"}, "label79": {"name": "Label79", "type": "TLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "panel87": {"name": "Panel87", "type": "TPanel"}, "label80": {"name": "Label80", "type": "TLabel"}, "label81": {"name": "Label81", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "panel88": {"name": "Panel88", "type": "TPanel"}, "groupbox18": {"name": "GroupBox18", "type": "TGroupBox"}, "label82": {"name": "Label82", "type": "TLabel"}, "label84": {"name": "Label84", "type": "TLabel"}, "label85": {"name": "Label85", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "panel89": {"name": "Panel89", "type": "TPanel"}, "label69": {"name": "Label69", "type": "TLabel"}, "button6": {"name": "Button6", "type": "TButton"}, "fform": {"name": "FForm", "type": "integer"}, "rk": {"name": "Rk", "type": "boolean"}, "filedbatchs": {"name": "FiledBatchs", "type": "boolean"}, "filedincoming": {"name": "FiledIncoming", "type": "boolean"}, "fieldbatchsarchive": {"name": "FieldBatchsArchive", "type": "boolean"}, "filedincomingarchive": {"name": "FiledIncomingArchive", "type": "boolean"}}, {});
  U.init(async () => {
    U.var_("ExpFormNew", null, "TExpFormNew");
    U.var_("RBoolean", false, "boolean");
    U.var_("id", 0, "integer");
  });
  U.method("TExpFormNew", "FormDisable", async function FormDisable(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "Searchpaspnum")), "Enabled", false);
  await $.mset((await $.v(C, "Searchinn")), "Enabled", false);
  await $.mset((await $.v(C, "Searchpasspin")), "Enabled", false);
  await $.mset((await $.v(C, "Searchid")), "Enabled", false);
  await $.mset((await $.v(C, "Searchpaspnum")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "Searchinn")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "Searchpasspin")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "Searchid")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "RadioButton1")), "Enabled", false);
  await $.mset((await $.v(C, "RadioButton2")), "Enabled", false);
  await $.mset((await $.v(C, "EditLastNameI")), "Enabled", false);
  await $.mset((await $.v(C, "EditNameI")), "Enabled", false);
  await $.mset((await $.v(C, "EditSonameI")), "Enabled", false);
  await $.mset((await $.v(C, "EditPINCodeI")), "Enabled", false);
  await $.mset((await $.v(C, "CBoxPassPlaceI")), "Enabled", false);
  await $.mset((await $.v(C, "EditSerialI")), "Enabled", false);
  await $.mset((await $.v(C, "EditPassportI")), "Enabled", false);
  await $.mset((await $.v(C, "DBCBox_DocTYPEI")), "Enabled", false);
  await $.mset((await $.v(C, "DateEditI")), "Enabled", false);
  await $.mset((await $.v(C, "EditMobilI")), "Enabled", false);
  await $.mset((await $.v(C, "EditPhoneI")), "Enabled", false);
  await $.mset((await $.v(C, "ValuteName")), "Enabled", false);
  await $.mset((await $.v(C, "CMCurrencyEdit")), "Enabled", false);
  await $.mset((await $.v(C, "RemitInfEdit")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
  await $.mset((await $.v(C, "EditLastNameI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditNameI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditSonameI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditPINCodeI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "CBoxPassPlaceI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditSerialI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditPassportI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "DBCBox_DocTYPEI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "DateEditI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditMobilI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditPhoneI")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "ValuteName")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "CMCurrencyEdit")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "RemitInfEdit")), "Color", (await $.v(C, "clSilver")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "FormEnabled", async function FormEnabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "Searchpaspnum")), "Enabled", true);
  await $.mset((await $.v(C, "Searchinn")), "Enabled", true);
  await $.mset((await $.v(C, "Searchpasspin")), "Enabled", true);
  await $.mset((await $.v(C, "Searchid")), "Enabled", true);
  await $.mset((await $.v(C, "Searchpaspnum")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "Searchinn")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "Searchpasspin")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "Searchid")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "RadioButton1")), "Enabled", true);
  await $.mset((await $.v(C, "RadioButton2")), "Enabled", true);
  await $.mset((await $.v(C, "EditLastNameI")), "Enabled", true);
  await $.mset((await $.v(C, "EditNameI")), "Enabled", true);
  await $.mset((await $.v(C, "EditSonameI")), "Enabled", true);
  await $.mset((await $.v(C, "EditPINCodeI")), "Enabled", true);
  await $.mset((await $.v(C, "CBoxPassPlaceI")), "Enabled", true);
  await $.mset((await $.v(C, "EditSerialI")), "Enabled", true);
  await $.mset((await $.v(C, "EditPassportI")), "Enabled", true);
  await $.mset((await $.v(C, "DBCBox_DocTYPEI")), "Enabled", true);
  await $.mset((await $.v(C, "DateEditI")), "Enabled", true);
  await $.mset((await $.v(C, "EditMobilI")), "Enabled", true);
  await $.mset((await $.v(C, "EditPhoneI")), "Enabled", true);
  await $.mset((await $.v(C, "ValuteName")), "Enabled", true);
  await $.mset((await $.v(C, "CMCurrencyEdit")), "Enabled", true);
  await $.mset((await $.v(C, "RemitInfEdit")), "Enabled", true);
  await $.mset((await $.v(C, "ComboBox1")), "Enabled", true);
  await $.mset((await $.v(C, "EditLastNameI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditNameI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditSonameI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditPINCodeI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "CBoxPassPlaceI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditSerialI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditPassportI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "DBCBox_DocTYPEI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "DateEditI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditMobilI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditPhoneI")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "ValuteName")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "CMCurrencyEdit")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "RemitInfEdit")), "Color", (await $.v(C, "clWhite")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "FormTab2Enabled", async function FormTab2Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "Search1paspnum")), "Enabled", true);
  await $.mset((await $.v(C, "Search1inn")), "Enabled", true);
  await $.mset((await $.v(C, "Search1passpin")), "Enabled", true);
  await $.mset((await $.v(C, "Search1id")), "Enabled", true);
  await $.mset((await $.v(C, "Search1paspnum")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "Search1inn")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "Search1passpin")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "Search1id")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditLastNameII")), "Enabled", true);
  await $.mset((await $.v(C, "EditNameII")), "Enabled", true);
  await $.mset((await $.v(C, "EditSonameII")), "Enabled", true);
  await $.mset((await $.v(C, "EditLastNameII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditNameII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditSonameII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditPincodeII")), "Enabled", true);
  await $.mset((await $.v(C, "EditPincodeII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "CBoxPassPlaceII")), "Enabled", true);
  await $.mset((await $.v(C, "CBoxPassPlaceII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditSerialII")), "Enabled", true);
  await $.mset((await $.v(C, "EditSerialII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditPassportII")), "Enabled", true);
  await $.mset((await $.v(C, "EditPassportII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "FilialNameII")), "Enabled", true);
  await $.mset((await $.v(C, "FilialNameII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditPhoneII")), "Enabled", true);
  await $.mset((await $.v(C, "EditPhoneII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "EditMobilII")), "Enabled", true);
  await $.mset((await $.v(C, "EditMobilII")), "Color", (await $.v(C, "clWhite")));
  await $.mset((await $.v(C, "RadioButton3")), "Enabled", true);
  await $.mset((await $.v(C, "RadioButton4")), "Enabled", true);
  await $.mset((await $.v(C, "Label35")), "Visible", false);
  await $.mset((await $.v(C, "Label36")), "Visible", false);
  await $.mset((await $.v(C, "Label30")), "Visible", false);
  await $.mset((await $.v(C, "Label68")), "Visible", false);
  await $.mset((await $.v(C, "Label72")), "Visible", false);
  await $.mset((await $.v(C, "Label77")), "Visible", false);
  await $.mset((await $.v(C, "Button6")), "Visible", false);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "FormTab2Disable", async function FormTab2Disable(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "Search1paspnum")), "Enabled", false);
  await $.mset((await $.v(C, "Search1inn")), "Enabled", false);
  await $.mset((await $.v(C, "Search1passpin")), "Enabled", false);
  await $.mset((await $.v(C, "Search1id")), "Enabled", false);
  await $.mset((await $.v(C, "Search1paspnum")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "Search1inn")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "Search1passpin")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "Search1id")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditLastNameII")), "Enabled", false);
  await $.mset((await $.v(C, "EditNameII")), "Enabled", false);
  await $.mset((await $.v(C, "EditSonameII")), "Enabled", false);
  await $.mset((await $.v(C, "EditLastNameII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditNameII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditSonameII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditPincodeII")), "Enabled", false);
  await $.mset((await $.v(C, "EditPincodeII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "CBoxPassPlaceII")), "Enabled", false);
  await $.mset((await $.v(C, "CBoxPassPlaceII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditSerialII")), "Enabled", false);
  await $.mset((await $.v(C, "EditSerialII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditPassportII")), "Enabled", false);
  await $.mset((await $.v(C, "EditPassportII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "FilialNameII")), "Enabled", false);
  await $.mset((await $.v(C, "FilialNameII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditPhoneII")), "Enabled", false);
  await $.mset((await $.v(C, "EditPhoneII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "EditMobilII")), "Enabled", false);
  await $.mset((await $.v(C, "EditMobilII")), "Color", (await $.v(C, "clSilver")));
  await $.mset((await $.v(C, "RadioButton3")), "Enabled", false);
  await $.mset((await $.v(C, "RadioButton4")), "Enabled", false);
  await $.mset((await $.v(C, "Label35")), "Visible", false);
  await $.mset((await $.v(C, "Label36")), "Visible", false);
  await $.mset((await $.v(C, "Label30")), "Visible", false);
  await $.mset((await $.v(C, "Label68")), "Visible", false);
  await $.mset((await $.v(C, "Label72")), "Visible", false);
  await $.mset((await $.v(C, "Label77")), "Visible", false);
  await $.mset((await $.v(C, "Button6")), "Visible", false);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "clearall", async function clearall(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0, "k": 0, "z": 0};
  {
    const $t1 = (await $.v(C, "TabSheet1"));
    { const $t2 = $.sub((await $.wv([$t1], "ControlCount", C, false)), 1);
      await $.wset([$t1], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t1], "Controls", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TPanel")))) {
          {
            const $t4 = ((await $.idx((await $.wv([$t1], "Controls", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])));
            { const $t5 = $.sub((await $.wv([$t1, $t4], "ControlCount", C, false)), 1);
              await $.wset([$t1, $t4], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t6 = true;
              for (;;) {
                if (!$t6) { await $.wset([$t1, $t4], "j", $.succ((await $.wv([$t1, $t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t6 = false;
                if (!($.ord((await $.wv([$t1, $t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t5))) break;
                if ($.truthy(($.is_((await $.idx((await $.wv([$t1, $t4], "Controls", C, false)), [(await $.wv([$t1, $t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TGroupBox")))) {
                  {
                    const $t7 = ((await $.idx((await $.wv([$t1, $t4], "Controls", C, false)), [(await $.wv([$t1, $t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])));
                    { const $t8 = $.sub((await $.wv([$t1, $t4, $t7], "ControlCount", C, false)), 1);
                      await $.wset([$t1, $t4, $t7], "k", 0, { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
                      let $t9 = true;
                      for (;;) {
                        if (!$t9) { await $.wset([$t1, $t4, $t7], "k", $.succ((await $.wv([$t1, $t4, $t7], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), 1), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }); }
                        $t9 = false;
                        if (!($.ord((await $.wv([$t1, $t4, $t7], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))) <= $.ord($t8))) break;
                        if ($.truthy(($.is_((await $.idx((await $.wv([$t1, $t4, $t7], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TPanel")))) {
                          {
                            const $t10 = ((await $.idx((await $.wv([$t1, $t4, $t7], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])));
                            { const $t11 = $.sub((await $.wv([$t1, $t4, $t7, $t10], "ControlCount", C, false)), 1);
                              await $.wset([$t1, $t4, $t7, $t10], "z", 0, { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true });
                              let $t12 = true;
                              for (;;) {
                                if (!$t12) { await $.wset([$t1, $t4, $t7, $t10], "z", $.succ((await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), 1), { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }); }
                                $t12 = false;
                                if (!($.ord((await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))) <= $.ord($t11))) break;
                                if ($.truthy(($.is_((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TEdit")))) {
                                  if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))]))), "Name")), "CMCurrencyEdit"))) {
                                    await $.mset((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Text", "0.00");
                                  } else {
                                    await $.mcall((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                  }
                                }
                                if ($.truthy(($.is_((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TDBLookupComboBox")))) {
                                  if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))]))), "Name")), "FilialName"))) {
                                    await $.mset((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1, $t4, $t7, $t10], "ExpDataModule", C, false)), "FilialDataSet")), "FieldByName", ["id"])), "AsInteger")));
                                  } else {
                                    await $.mset((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "KeyValue", (-(1)));
                                  }
                                }
                                if ($.truthy(($.is_((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TDBDateTimeEditEh")))) {
                                  await $.mcall((await $.idx((await $.wv([$t1, $t4, $t7, $t10], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7, $t10], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                }
                                await $.tick();
                              }
                            }
                          }
                        }
                        if ($.truthy(($.is_((await $.idx((await $.wv([$t1, $t4, $t7], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TEdit")))) {
                          await $.mcall((await $.idx((await $.wv([$t1, $t4, $t7], "Controls", C, false)), [(await $.wv([$t1, $t4, $t7], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "Clear", []);
                        }
                        await $.tick();
                      }
                    }
                  }
                }
                if ($.truthy(($.is_((await $.idx((await $.wv([$t1, $t4], "Controls", C, false)), [(await $.wv([$t1, $t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TRadioGroup")))) {
                  await $.mset((await $.idx((await $.wv([$t1, $t4], "Controls", C, false)), [(await $.wv([$t1, $t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "ItemIndex", (-(1)));
                }
                await $.tick();
              }
            }
          }
        }
        await $.tick();
      }
    }
  }
  {
    const $t13 = (await $.v(C, "TabSheet2"));
    { const $t14 = $.sub((await $.wv([$t13], "ControlCount", C, false)), 1);
      await $.wset([$t13], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t15 = true;
      for (;;) {
        if (!$t15) { await $.wset([$t13], "i", $.succ((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t15 = false;
        if (!($.ord((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t14))) break;
        if ($.truthy(($.is_((await $.idx((await $.wv([$t13], "Controls", C, false)), [(await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TPanel")))) {
          {
            const $t16 = ((await $.idx((await $.wv([$t13], "Controls", C, false)), [(await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])));
            { const $t17 = $.sub((await $.wv([$t13, $t16], "ControlCount", C, false)), 1);
              await $.wset([$t13, $t16], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
              let $t18 = true;
              for (;;) {
                if (!$t18) { await $.wset([$t13, $t16], "j", $.succ((await $.wv([$t13, $t16], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                $t18 = false;
                if (!($.ord((await $.wv([$t13, $t16], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t17))) break;
                if ($.truthy(($.is_((await $.idx((await $.wv([$t13, $t16], "Controls", C, false)), [(await $.wv([$t13, $t16], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TGroupBox")))) {
                  {
                    const $t19 = ((await $.idx((await $.wv([$t13, $t16], "Controls", C, false)), [(await $.wv([$t13, $t16], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])));
                    { const $t20 = $.sub((await $.wv([$t13, $t16, $t19], "ControlCount", C, false)), 1);
                      await $.wset([$t13, $t16, $t19], "k", 0, { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
                      let $t21 = true;
                      for (;;) {
                        if (!$t21) { await $.wset([$t13, $t16, $t19], "k", $.succ((await $.wv([$t13, $t16, $t19], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), 1), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }); }
                        $t21 = false;
                        if (!($.ord((await $.wv([$t13, $t16, $t19], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))) <= $.ord($t20))) break;
                        if ($.truthy(($.is_((await $.idx((await $.wv([$t13, $t16, $t19], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TPanel")))) {
                          {
                            const $t22 = ((await $.idx((await $.wv([$t13, $t16, $t19], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])));
                            { const $t23 = $.sub((await $.wv([$t13, $t16, $t19, $t22], "ControlCount", C, false)), 1);
                              await $.wset([$t13, $t16, $t19, $t22], "z", 0, { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true });
                              let $t24 = true;
                              for (;;) {
                                if (!$t24) { await $.wset([$t13, $t16, $t19, $t22], "z", $.succ((await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), 1), { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }); }
                                $t24 = false;
                                if (!($.ord((await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))) <= $.ord($t23))) break;
                                if ($.truthy(($.is_((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TEdit")))) {
                                  if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))]))), "Name")), "EditDate"))) {
                                    await $.mcall((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                  }
                                }
                                if ($.truthy(($.is_((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TMaskEdit")))) {
                                  await $.mcall((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                }
                                if ($.truthy(($.is_((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TDBLookupComboBox")))) {
                                  await $.mset((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "KeyValue", (-(1)));
                                }
                                if ($.truthy(($.is_((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TDBDateTimeEditEh")))) {
                                  await $.mcall((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                }
                                if ($.truthy(($.is_((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TMemo")))) {
                                  await $.mcall((await $.idx((await $.wv([$t13, $t16, $t19, $t22], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19, $t22], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                }
                                await $.tick();
                              }
                            }
                          }
                        }
                        if ($.truthy(($.is_((await $.idx((await $.wv([$t13, $t16, $t19], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TEdit")))) {
                          await $.mcall((await $.idx((await $.wv([$t13, $t16, $t19], "Controls", C, false)), [(await $.wv([$t13, $t16, $t19], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "Clear", []);
                        }
                        await $.tick();
                      }
                    }
                  }
                }
                if ($.truthy(($.is_((await $.idx((await $.wv([$t13, $t16], "Controls", C, false)), [(await $.wv([$t13, $t16], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TRadioGroup")))) {
                  await $.mset((await $.idx((await $.wv([$t13, $t16], "Controls", C, false)), [(await $.wv([$t13, $t16], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "ItemIndex", (-(1)));
                }
                await $.tick();
              }
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "CMCurrencyEditChange", async function CMCurrencyEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "sum": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["sum"] = 0;
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((await $.v(C, "CMCurrencyEdit")), "Text"))])), 0))) {
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Text", "");
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "text", "");
    return L0.result;
  } else {
    if ($.truthy($.ne((await $.mv((await $.v(C, "EditCustid")), "text")), ""))) {
      L0["sum"] = $.add((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallFloatFunction", ["SumNominalid", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "EditCustid")), "text"))]))]])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CMCurrencyEdit")), "Text"))])));
    }
    if ($.truthy((await $.and_(($.ge((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CMCurrencyEdit")), "Text"))])), 20000)), async () => ((await $.or_(($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), (-(1)))), async () => ($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))))))))) {
      await $.mset((await $.v(C, "ButtonNominal")), "Enabled", true);
    } else {
      await $.mset((await $.v(C, "ButtonNominal")), "Enabled", false);
    }
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallFloatFunction", ["Exp_comissionoperation", [1, (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CMCurrencyEdit")), "Text"))]))]])));
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "Value", $.add((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CMCurrencyEdit")), "Text"))])), (await $.mv((await $.v(C, "CMCurrencyEdit2")), "Value"))));
    await $.mset((await $.v(C, "Edit15")), "Text", (await $.call(C, "Mani", [(await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CMCurrencyEdit")), "text"))]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "CMCurrencyEditExit", async function CMCurrencyEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "text": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = (await $.call(C, "pos", [".", (await $.mv((await $.v(C, "CMCurrencyEdit")), "Text"))]));
  if ($.truthy($.eq(L0["s"], 0))) {
    await $.mset((await $.v(C, "CMCurrencyEdit")), "Text", $.add((await $.mv((await $.v(C, "CMCurrencyEdit")), "Text")), ".00"));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "CMCurrencyEditKeyPress", async function CMCurrencyEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), ["\b", ...$.range("0","9"), (await $.v(C, "DecimalSeparator"))]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpFormNew", "CMCurrencyEditMouseActivate", async function CMCurrencyEditMouseActivate(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), "hittest": $.copyArg(p5), "mouseactivate": $.asRef(p6), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y", "hittest"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit")), "Text")), "0.00"))) {
    await $.mcall((await $.v(C, "CMCurrencyEdit")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y", "HitTest", "MouseActivate"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer", "Integer", "TMouseActivate"]});
  U.method("TExpFormNew", "ComboBox1Click", async function ComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "RemitInfEdit")), "Text", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "ComboBox1DropDown", async function ComboBox1DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "FormPaymentsCredit")), "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "clear", async function clear(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0, "k": 0, "z": 0};
  { const $t25 = (await $.mv((await $.v(C, "PageControl1")), "ActivePageIndex"));
    if ($.eq($t25, 0)) {
      {
        const $t26 = (await $.v(C, "TabSheet1"));
        { const $t27 = $.sub((await $.wv([$t26], "ControlCount", C, false)), 1);
          await $.wset([$t26], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t28 = true;
          for (;;) {
            if (!$t28) { await $.wset([$t26], "i", $.succ((await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t28 = false;
            if (!($.ord((await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t27))) break;
            if ($.truthy(($.is_((await $.idx((await $.wv([$t26], "Controls", C, false)), [(await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TPanel")))) {
              {
                const $t29 = ((await $.idx((await $.wv([$t26], "Controls", C, false)), [(await $.wv([$t26], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])));
                { const $t30 = $.sub((await $.wv([$t26, $t29], "ControlCount", C, false)), 1);
                  await $.wset([$t26, $t29], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
                  let $t31 = true;
                  for (;;) {
                    if (!$t31) { await $.wset([$t26, $t29], "j", $.succ((await $.wv([$t26, $t29], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                    $t31 = false;
                    if (!($.ord((await $.wv([$t26, $t29], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t30))) break;
                    if ($.truthy(($.is_((await $.idx((await $.wv([$t26, $t29], "Controls", C, false)), [(await $.wv([$t26, $t29], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TGroupBox")))) {
                      {
                        const $t32 = ((await $.idx((await $.wv([$t26, $t29], "Controls", C, false)), [(await $.wv([$t26, $t29], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])));
                        { const $t33 = $.sub((await $.wv([$t26, $t29, $t32], "ControlCount", C, false)), 1);
                          await $.wset([$t26, $t29, $t32], "k", 0, { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
                          let $t34 = true;
                          for (;;) {
                            if (!$t34) { await $.wset([$t26, $t29, $t32], "k", $.succ((await $.wv([$t26, $t29, $t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), 1), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }); }
                            $t34 = false;
                            if (!($.ord((await $.wv([$t26, $t29, $t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))) <= $.ord($t33))) break;
                            if ($.truthy(($.is_((await $.idx((await $.wv([$t26, $t29, $t32], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TPanel")))) {
                              {
                                const $t35 = ((await $.idx((await $.wv([$t26, $t29, $t32], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])));
                                { const $t36 = $.sub((await $.wv([$t26, $t29, $t32, $t35], "ControlCount", C, false)), 1);
                                  await $.wset([$t26, $t29, $t32, $t35], "z", 0, { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true });
                                  let $t37 = true;
                                  for (;;) {
                                    if (!$t37) { await $.wset([$t26, $t29, $t32, $t35], "z", $.succ((await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), 1), { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }); }
                                    $t37 = false;
                                    if (!($.ord((await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))) <= $.ord($t36))) break;
                                    if ($.truthy(($.is_((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TEdit")))) {
                                      if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))]))), "Name")), "CMCurrencyEdit"))) {
                                        await $.mset((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Text", "0.00");
                                      } else {
                                        await $.mcall((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                      }
                                    }
                                    if ($.truthy(($.is_((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TDBLookupComboBox")))) {
                                      if ($.truthy($.eq((await $.mv(((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))]))), "Name")), "FilialName"))) {
                                        await $.mset((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t26, $t29, $t32, $t35], "ExpDataModule", C, false)), "FilialDataSet")), "FieldByName", ["id"])), "AsInteger")));
                                      } else {
                                        await $.mset((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "KeyValue", (-(1)));
                                      }
                                    }
                                    if ($.truthy(($.is_((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TDBDateTimeEditEh")))) {
                                      await $.mcall((await $.idx((await $.wv([$t26, $t29, $t32, $t35], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32, $t35], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                    }
                                    await $.tick();
                                  }
                                }
                              }
                            }
                            if ($.truthy(($.is_((await $.idx((await $.wv([$t26, $t29, $t32], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TEdit")))) {
                              await $.mcall((await $.idx((await $.wv([$t26, $t29, $t32], "Controls", C, false)), [(await $.wv([$t26, $t29, $t32], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "Clear", []);
                            }
                            await $.tick();
                          }
                        }
                      }
                    }
                    if ($.truthy(($.is_((await $.idx((await $.wv([$t26, $t29], "Controls", C, false)), [(await $.wv([$t26, $t29], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TRadioGroup")))) {
                      await $.mset((await $.idx((await $.wv([$t26, $t29], "Controls", C, false)), [(await $.wv([$t26, $t29], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "ItemIndex", (-(1)));
                    }
                    await $.tick();
                  }
                }
              }
            }
            await $.tick();
          }
        }
      }
    }
    else if ($.eq($t25, 1)) {
      {
        const $t38 = (await $.v(C, "TabSheet2"));
        { const $t39 = $.sub((await $.wv([$t38], "ControlCount", C, false)), 1);
          await $.wset([$t38], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t40 = true;
          for (;;) {
            if (!$t40) { await $.wset([$t38], "i", $.succ((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t40 = false;
            if (!($.ord((await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t39))) break;
            if ($.truthy(($.is_((await $.idx((await $.wv([$t38], "Controls", C, false)), [(await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TPanel")))) {
              {
                const $t41 = ((await $.idx((await $.wv([$t38], "Controls", C, false)), [(await $.wv([$t38], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])));
                { const $t42 = $.sub((await $.wv([$t38, $t41], "ControlCount", C, false)), 1);
                  await $.wset([$t38, $t41], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
                  let $t43 = true;
                  for (;;) {
                    if (!$t43) { await $.wset([$t38, $t41], "j", $.succ((await $.wv([$t38, $t41], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                    $t43 = false;
                    if (!($.ord((await $.wv([$t38, $t41], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t42))) break;
                    if ($.truthy(($.is_((await $.idx((await $.wv([$t38, $t41], "Controls", C, false)), [(await $.wv([$t38, $t41], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TGroupBox")))) {
                      {
                        const $t44 = ((await $.idx((await $.wv([$t38, $t41], "Controls", C, false)), [(await $.wv([$t38, $t41], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])));
                        { const $t45 = $.sub((await $.wv([$t38, $t41, $t44], "ControlCount", C, false)), 1);
                          await $.wset([$t38, $t41, $t44], "k", 0, { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
                          let $t46 = true;
                          for (;;) {
                            if (!$t46) { await $.wset([$t38, $t41, $t44], "k", $.succ((await $.wv([$t38, $t41, $t44], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), 1), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }); }
                            $t46 = false;
                            if (!($.ord((await $.wv([$t38, $t41, $t44], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))) <= $.ord($t45))) break;
                            if ($.truthy(($.is_((await $.idx((await $.wv([$t38, $t41, $t44], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TPanel")))) {
                              {
                                const $t47 = ((await $.idx((await $.wv([$t38, $t41, $t44], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])));
                                { const $t48 = $.sub((await $.wv([$t38, $t41, $t44, $t47], "ControlCount", C, false)), 1);
                                  await $.wset([$t38, $t41, $t44, $t47], "z", 0, { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true });
                                  let $t49 = true;
                                  for (;;) {
                                    if (!$t49) { await $.wset([$t38, $t41, $t44, $t47], "z", $.succ((await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false)), 1), { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }); }
                                    $t49 = false;
                                    if (!($.ord((await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))) <= $.ord($t48))) break;
                                    if ($.truthy(($.is_((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TEdit")))) {
                                      if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))]))), "Name")), "EditDate"))) {
                                        if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))]))), "Name")), "EditTime"))) {
                                          await $.mcall((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                        }
                                      }
                                    }
                                    if ($.truthy(($.is_((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TMaskEdit")))) {
                                      await $.mcall((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                    }
                                    if ($.truthy(($.is_((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TDBLookupComboBox")))) {
                                      await $.mset((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "KeyValue", (-(1)));
                                    }
                                    if ($.truthy(($.is_((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TDBDateTimeEditEh")))) {
                                      await $.mcall((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                    }
                                    if ($.truthy(($.is_((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "TMemo")))) {
                                      await $.mcall((await $.idx((await $.wv([$t38, $t41, $t44, $t47], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44, $t47], "z", { get: async () => L0["z"], set: async (v) => { L0["z"] = v; }, local: true }, false))])), "Clear", []);
                                    }
                                    await $.tick();
                                  }
                                }
                              }
                            }
                            if ($.truthy(($.is_((await $.idx((await $.wv([$t38, $t41, $t44], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TEdit")))) {
                              await $.mcall((await $.idx((await $.wv([$t38, $t41, $t44], "Controls", C, false)), [(await $.wv([$t38, $t41, $t44], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "Clear", []);
                            }
                            await $.tick();
                          }
                        }
                      }
                    }
                    if ($.truthy(($.is_((await $.idx((await $.wv([$t38, $t41], "Controls", C, false)), [(await $.wv([$t38, $t41], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TRadioGroup")))) {
                      await $.mset((await $.idx((await $.wv([$t38, $t41], "Controls", C, false)), [(await $.wv([$t38, $t41], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "ItemIndex", (-(1)));
                    }
                    await $.tick();
                  }
                }
              }
            }
            await $.tick();
          }
        }
      }
    }
    else if ($.eq($t25, 2)) {
      {
        const $t50 = (await $.v(C, "TabSheet3"));
        { const $t51 = $.sub((await $.wv([$t50], "ControlCount", C, false)), 1);
          await $.wset([$t50], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
          let $t52 = true;
          for (;;) {
            if (!$t52) { await $.wset([$t50], "i", $.succ((await $.wv([$t50], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
            $t52 = false;
            if (!($.ord((await $.wv([$t50], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t51))) break;
            {
              const $t53 = ((await $.idx((await $.wv([$t50], "Controls", C, false)), [(await $.wv([$t50], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])));
              { const $t54 = $.sub((await $.wv([$t50, $t53], "ControlCount", C, false)), 1);
                await $.wset([$t50, $t53], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
                let $t55 = true;
                for (;;) {
                  if (!$t55) { await $.wset([$t50, $t53], "j", $.succ((await $.wv([$t50, $t53], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
                  $t55 = false;
                  if (!($.ord((await $.wv([$t50, $t53], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t54))) break;
                  if ($.truthy(($.is_((await $.idx((await $.wv([$t50, $t53], "Controls", C, false)), [(await $.wv([$t50, $t53], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TGroupBox")))) {
                    {
                      const $t56 = ((await $.idx((await $.wv([$t50, $t53], "Controls", C, false)), [(await $.wv([$t50, $t53], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])));
                      { const $t57 = $.sub((await $.wv([$t50, $t53, $t56], "ControlCount", C, false)), 1);
                        await $.wset([$t50, $t53, $t56], "k", 0, { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true });
                        let $t58 = true;
                        for (;;) {
                          if (!$t58) { await $.wset([$t50, $t53, $t56], "k", $.succ((await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false)), 1), { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }); }
                          $t58 = false;
                          if (!($.ord((await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))) <= $.ord($t57))) break;
                          if ($.truthy(($.is_((await $.idx((await $.wv([$t50, $t53, $t56], "Controls", C, false)), [(await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TEdit")))) {
                            await $.mcall((await $.idx((await $.wv([$t50, $t53, $t56], "Controls", C, false)), [(await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "Clear", []);
                          }
                          if ($.truthy(($.is_((await $.idx((await $.wv([$t50, $t53, $t56], "Controls", C, false)), [(await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TDBLookupComboBox")))) {
                            await $.mset((await $.idx((await $.wv([$t50, $t53, $t56], "Controls", C, false)), [(await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "KeyValue", (-(1)));
                          }
                          if ($.truthy(($.is_((await $.idx((await $.wv([$t50, $t53, $t56], "Controls", C, false)), [(await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TDBDateTimeEditEh")))) {
                            await $.mcall((await $.idx((await $.wv([$t50, $t53, $t56], "Controls", C, false)), [(await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "Clear", []);
                          }
                          if ($.truthy(($.is_((await $.idx((await $.wv([$t50, $t53, $t56], "Controls", C, false)), [(await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "TMemo")))) {
                            await $.mcall((await $.idx((await $.wv([$t50, $t53, $t56], "Controls", C, false)), [(await $.wv([$t50, $t53, $t56], "k", { get: async () => L0["k"], set: async (v) => { L0["k"] = v; }, local: true }, false))])), "Clear", []);
                          }
                          await $.tick();
                        }
                      }
                    }
                  }
                  if ($.truthy(($.is_((await $.idx((await $.wv([$t50, $t53], "Controls", C, false)), [(await $.wv([$t50, $t53], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TRadioGroup")))) {
                    await $.mset((await $.idx((await $.wv([$t50, $t53], "Controls", C, false)), [(await $.wv([$t50, $t53], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "ItemIndex", (-(1)));
                  }
                  await $.tick();
                }
              }
            }
            await $.tick();
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "Mani", async function Mani(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"currencyedit": $.copyArg(p0), result: '', "sr": '', "et": '', "s": 0, "st": 0};
  await $.fixArgs(L0, ["currencyedit"]);
  L0["sr"] = (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "trunc", [L0["currencyedit"]])), 0, [0]]));
  L0["s"] = (await $.call(C, "pos", ["manat", L0["sr"]]));
  await $.stmt((await $.call(C, "delete", [$.ref(async () => L0["sr"], async ($t59) => { L0["sr"] = $t59; }), L0["s"], 5])));
  L0["st"] = (await $.call(C, "round", [$.mul((await $.call(C, "frac", [L0["currencyedit"]])), 100)]));
  if ($.truthy($.ge(L0["currencyedit"], 1))) {
    if ($.truthy($.gt(L0["st"], 0))) {
      L0["et"] = $.add($.add($.add($.add($.add($.add(L0["sr"], ""), (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ValyutaDataSet")), "fieldbyname", ["VALU_NAME"])), "AsString"))), " "), (await $.call(C, "FloatToStr", [L0["st"]]))), " "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ValyutaDataSet")), "fieldbyname", ["Valu_Bala"])), "AsString")));
    } else {
      L0["et"] = $.add($.add($.add($.add("(", L0["sr"]), ")"), "  "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ValyutaDataSet")), "fieldbyname", ["VALU_NAME"])), "AsString")));
    }
  } else {
    L0["et"] = $.add($.add($.add($.add("(", (await $.call(C, "FloatToStr", [L0["st"]]))), ")"), "  "), (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ValyutaDataSet")), "fieldbyname", ["Valu_Bala"])), "AsString")));
  }
  L0.result = L0["et"];
  return L0.result;
}, {"params": ["CurrencyEdit"], "kind": "function", "ptypes": ["variant"]});
  U.method("TExpFormNew", "mizk1Click", async function mizk1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "RBoolean", true);
  await $.stmt($.call(C, "Clear", []));
  await $.stmt((await $.mcall((await $.v(C, "FormNominalCustomers")), "NominalClear", [(await $.v(C, "Rk"))])));
  { const $t60 = (await $.mv((await $.v(C, "PageControl1")), "ActivePageIndex"));
    if ($.eq($t60, 0)) {
      await $.stmt((await $.call(C, "RadioGroup1Click", [L0["sender"]])));
    }
    else if ($.eq($t60, 1)) {
      await $.stmt((await $.call(C, "RadioGroup2Click", [L0["sender"]])));
    }
    else if ($.eq($t60, 2)) {
      await $.stmt((await $.call(C, "RadioGroup3Click", [L0["sender"]])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "PageControl1Changing", async function PageControl1Changing(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "allowchange": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["allowchange"].set(false);
  return L0.result;
}, {"params": ["Sender", "AllowChange"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TExpFormNew", "EditLastName1KeyPress", async function EditLastName1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t61 = (await $.v(C, "ExpDataModule"));
      const $t62 = (await $.wv([$t61], "SendToDataSet", C, false));
      await $.wset([$t61, $t62], "Filter", $.add($.add($.add("LastName='", (await $.mv((await $.wv([$t61, $t62], "EditLastNameII", C, false)), "Text"))), ("*")), "'"), C);
      await $.wset([$t61, $t62], "Filtered", (await $.wv([$t61, $t62], "True", C, false)), C);
    }
    await $.mcall((await $.v(C, "FormSearchCustName")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpFormNew", "EditLastNameKeyPress", async function EditLastNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t63 = (await $.v(C, "ExpDataModule"));
      const $t64 = (await $.wv([$t63], "SendDataSet", C, false));
      await $.wset([$t63, $t64], "Filter", $.add($.add($.add("LastName='", (await $.mv((await $.wv([$t63, $t64], "EditLastNameI", C, false)), "Text"))), ("*")), "'"), C);
      await $.wset([$t63, $t64], "Filtered", (await $.wv([$t63, $t64], "True", C, false)), C);
    }
    await $.mcall((await $.v(C, "FormSearchCustName")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpFormNew", "EditNameKeyPress", async function EditNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    { const $t65 = (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"));
      if ($.eq($t65, 3)) {
        {
          const $t66 = (await $.v(C, "FormSearchLegalCustName"));
          await $.stmt($.wcall([$t66], "ShowModal", [], C));
        }
      }
      else {
        {
          const $t67 = (await $.v(C, "ExpDataModule"));
          const $t68 = (await $.wv([$t67], "SendDataSet", C, false));
          await $.wset([$t67, $t68], "Filter", $.add($.add($.add("name='", (await $.mv((await $.wv([$t67, $t68], "EditNameI", C, false)), "Text"))), ("*")), "'"), C);
          await $.wset([$t67, $t68], "Filtered", (await $.wv([$t67, $t68], "True", C, false)), C);
          await $.mcall((await $.wv([$t67, $t68], "FormSearchCustName", C, false)), "ShowModal", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpFormNew", "EditSonameKeyPress", async function EditSonameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t69 = (await $.v(C, "ExpDataModule"));
      const $t70 = (await $.wv([$t69], "SendDataSet", C, false));
      await $.wset([$t69, $t70], "Filter", $.add($.add($.add("soname='", (await $.mv((await $.wv([$t69, $t70], "EditSoNameI", C, false)), "Text"))), ("*")), "'"), C);
      await $.wset([$t69, $t70], "Filtered", (await $.wv([$t69, $t70], "True", C, false)), C);
    }
    await $.mcall((await $.v(C, "FormSearchCustName")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpFormNew", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpFormNew")), "Close", []);
  await $.set(C, "FForm", 0);
  await $.mset((await $.v(C, "ExpFormNew")), "FiledBatchs", false);
  await $.mset((await $.v(C, "ExpFormNew")), "FiledIncoming", false);
  if ($.truthy((await $.mv((await $.v(C, "CMCurrencyEdit")), "Enabled")))) {
    await $.mset((await $.v(C, "CMCurrencyEdit")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TExpFormNew", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = 0;
  { const $t71 = (await $.v(C, "FForm"));
    if ($.eq($t71, 0)) {
      await $.set(C, "RBoolean", false);
      if ($.truthy($.eq((await $.mv((await $.v(C, "ExpFormNew")), "FForm")), 0))) {
        await $.stmt((await $.mcall((await $.v(C, "FormNominalCustomers")), "NominalClear", [(await $.v(C, "Rk"))])));
      }
      if ($.truthy($.not(((await $.mv((await $.v(C, "TabSheet2")), "TabVisible")))))) {
        await $.mset((await $.v(C, "TabSheet2")), "TabVisible", true);
      }
      await $.stmt($.call(C, "FormEnabled", []));
      await $.stmt($.call(C, "FormTab2Enabled", []));
      await $.mset((await $.v(C, "mizk1")), "Enabled", true);
      if ($.truthy((await $.mv((await $.v(C, "TabSheet3")), "TabVisible")))) {
        await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
      }
      await $.mset((await $.v(C, "EditDate")), "Text", (await $.call(C, "DateToStr", [(await $.call(C, "trunc", [(await $.call(C, "StrToDateTime", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "SysdateDataSet")), "fieldbyname", ["dat"])), "AsString"))]))]))])));
      await $.mset((await $.v(C, "EditTime")), "Text", (await $.call(C, "TimeToStr", [(await $.v(C, "time"))])));
      await $.stmt($.call(C, "clearAll", []));
      await $.stmt((await $.call(C, "RadioGroup1Click", [L0["sender"]])));
      await $.stmt((await $.call(C, "RadioGroup2Click", [L0["sender"]])));
      await $.stmt((await $.call(C, "SpeedButton1Click", [L0["sender"]])));
      {
        const $t72 = (await $.v(C, "ExpDataModule"));
        await $.mcall((await $.wv([$t72], "FilialDataSet", C, false)), "Close", []);
        { const $t73 = await $.iset((await $.mv((await $.wv([$t72], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t73 !== undefined) { await $.mset((await $.wv([$t72], "FilialDataSet", C, false)), "SQL", $t73); } }
        { const $t74 = await $.iset((await $.mv((await $.wv([$t72], "FilialDataSet", C, false)), "SQL")), [1], "where id=(select filialid from sba_objinf where sysuserid=uid)"); if ($t74 !== undefined) { await $.mset((await $.wv([$t72], "FilialDataSet", C, false)), "SQL", $t74); } }
        await $.mcall((await $.wv([$t72], "FilialDataSet", C, false)), "Open", []);
      }
    }
    else if ($.eq($t71, 1)) {
      await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
      await $.mset((await $.v(C, "TabSheet2")), "TabVisible", true);
      await $.mset((await $.v(C, "CMCurrencyEdit")), "Enabled", true);
      if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0))) {
        await $.stmt($.call(C, "FormEnabled", []));
      } else {
        await $.stmt($.call(C, "FormDisable", []));
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup2")), "ItemIndex")), 0))) {
        await $.stmt($.call(C, "FormTab2Enabled", []));
      } else {
        await $.stmt($.call(C, "FormTab2Disable", []));
      }
      await $.stmt($.call(C, "Expedit", []));
    }
    else if ($.eq($t71, 2)) {
      await $.mset((await $.v(C, "mizk1")), "Enabled", false);
      await $.mset((await $.v(C, "Button6")), "Visible", true);
      await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
      await $.mset((await $.v(C, "TabSheet2")), "TabVisible", true);
      await $.mset((await $.v(C, "Label35")), "Visible", true);
      await $.mset((await $.v(C, "Label36")), "Visible", true);
      await $.mset((await $.v(C, "Label30")), "Visible", true);
      await $.mset((await $.v(C, "Label68")), "Visible", true);
      await $.mset((await $.v(C, "Label72")), "Visible", true);
      await $.mset((await $.v(C, "Label77")), "Visible", true);
      await $.stmt($.call(C, "ExpUpdate", []));
      L0["s"] = (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallFloatFunction", ["SumTakeid", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "EditCustidII")), "Text"))]))]]));
      if ($.truthy($.ge(L0["s"], 20000))) {
        await $.mset((await $.v(C, "ButtonNominal1")), "Visible", true);
      } else {
        await $.mset((await $.v(C, "ButtonNominal1")), "Visible", false);
      }
    }
    else if ($.eq($t71, 3)) {
      await $.mset((await $.v(C, "mizk1")), "Enabled", false);
      await $.mset((await $.v(C, "Button6")), "Visible", true);
      await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
      await $.mset((await $.v(C, "TabSheet2")), "TabVisible", true);
      await $.mset((await $.v(C, "Label35")), "Visible", true);
      await $.mset((await $.v(C, "Label36")), "Visible", true);
      await $.mset((await $.v(C, "Label30")), "Visible", true);
      await $.mset((await $.v(C, "Label68")), "Visible", true);
      await $.mset((await $.v(C, "Label72")), "Visible", true);
      await $.mset((await $.v(C, "Label77")), "Visible", true);
      await $.stmt($.call(C, "ExpUpdateIncoming", []));
      L0["s"] = (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallFloatFunction", ["SumTakeid", [(await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "EditCustidII")), "Text"))]))]]));
      if ($.truthy($.ge(L0["s"], 20000))) {
        await $.mset((await $.v(C, "ButtonNominal1")), "Visible", true);
      } else {
        await $.mset((await $.v(C, "ButtonNominal1")), "Visible", false);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t75 = (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"));
    if ($.eq($t75, (-(1))) || $.eq($t75, 0)) {
      await $.mset((await $.v(C, "Searchpasspin")), "Enabled", true);
      await $.mset((await $.v(C, "Searchpasspin")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Searchpaspnum")), "Enabled", true);
      await $.mset((await $.v(C, "Searchpaspnum")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Searchid")), "Enabled", true);
      await $.mset((await $.v(C, "Searchid")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Searchinn")), "Enabled", true);
      await $.mset((await $.v(C, "Searchinn")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditPINCodeI")), "Enabled", true);
      await $.mset((await $.v(C, "EditPINCodeI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "CBoxPassPlaceI")), "Enabled", true);
      await $.mset((await $.v(C, "CBoxPassPlaceI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditSerialI")), "Enabled", true);
      await $.mset((await $.v(C, "EditSerialI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditPassportI")), "Enabled", true);
      await $.mset((await $.v(C, "EditPassportI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditCustid")), "Enabled", false);
      await $.mset((await $.v(C, "EditCustid")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditNameI")), "Enabled", true);
      await $.mset((await $.v(C, "EditNameI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditLastNameI")), "Enabled", true);
      await $.mset((await $.v(C, "EditLastNameI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditSonameI")), "Enabled", true);
      await $.mset((await $.v(C, "EditSonameI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "DBCBox_DocTYPEI")), "Enabled", true);
      await $.mset((await $.v(C, "DBCBox_DocTYPEI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "DateEditI")), "Enabled", true);
      await $.mset((await $.v(C, "DateEditI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditMobilI")), "Enabled", true);
      await $.mset((await $.v(C, "EditMobilI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditPhoneI")), "Enabled", true);
      await $.mset((await $.v(C, "EditPhoneI")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "ValuteName")), "Enabled", true);
      await $.mset((await $.v(C, "ValuteName")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "CMCurrencyEdit")), "Enabled", true);
      await $.mset((await $.v(C, "CMCurrencyEdit")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "RemitInfEdit")), "Enabled", true);
      await $.mset((await $.v(C, "RemitInfEdit")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "RadioButton1")), "Enabled", true);
      await $.mset((await $.v(C, "RadioButton2")), "Enabled", true);
    }
    else if ($.eq($t75, 1) || $.eq($t75, 2) || $.eq($t75, 3) || $.eq($t75, 4)) {
      await $.mset((await $.v(C, "EditNameI")), "Enabled", false);
      await $.mset((await $.v(C, "EditNameI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditLastNameI")), "Enabled", false);
      await $.mset((await $.v(C, "EditLastNameI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditSonameI")), "Enabled", false);
      await $.mset((await $.v(C, "EditSonameI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "RadioButton1")), "Enabled", false);
      await $.mset((await $.v(C, "RadioButton2")), "Enabled", false);
      await $.mset((await $.v(C, "EditPINCodeI")), "Enabled", false);
      await $.mset((await $.v(C, "EditPINCodeI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "CBoxPassPlaceI")), "Enabled", false);
      await $.mset((await $.v(C, "CBoxPassPlaceI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditSerialI")), "Enabled", false);
      await $.mset((await $.v(C, "EditSerialI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditPassportI")), "Enabled", false);
      await $.mset((await $.v(C, "EditPassportI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "DBCBox_DocTYPEI")), "Enabled", false);
      await $.mset((await $.v(C, "DBCBox_DocTYPEI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "DateEditI")), "Enabled", false);
      await $.mset((await $.v(C, "DateEditI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditMobilI")), "Enabled", false);
      await $.mset((await $.v(C, "EditMobilI")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditPhoneI")), "Enabled", false);
      await $.mset((await $.v(C, "EditPhoneI")), "Color", (await $.v(C, "clSilver")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Search1passpinChange", async function Search1passpinChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "nam": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Search1passpin")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Search1paspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Search1id")), "Clear", []);
    await $.mcall((await $.v(C, "Search1inn")), "Clear", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Search1paspnum")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Search1passpin")), "Clear", []);
    await $.mcall((await $.v(C, "Search1id")), "Clear", []);
    await $.mcall((await $.v(C, "Search1inn")), "Clear", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Search1id")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Search1passpin")), "Clear", []);
    await $.mcall((await $.v(C, "Search1paspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Search1inn")), "Clear", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Search1inn")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Search1passpin")), "Clear", []);
    await $.mcall((await $.v(C, "Search1paspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Search1id")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Search1passpinKeyPress", async function Search1passpinKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = "";
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
      L0["s"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "name")), 8, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
      if ($.truthy($.eq(L0["s"], "passpin"))) {
        L0["s"] = $.add($.add("upper(", L0["s"]), ")");
      }
      L0["s"] = $.add($.add($.add($.add($.add($.add("(", L0["s"]), "="), "'"), (await $.mv((L0["sender"]), "text"))), "'"), ")");
      {
        const $t76 = (await $.v(C, "ExpDataModule"));
        const $t77 = (await $.wv([$t76], "SendToDataSet", C, false));
        await $.stmt($.wcall([$t76, $t77], "close", [], C));
        { const $t78 = await $.iset((await $.wv([$t76, $t77], "SQL", C, false)), [1], ""); if ($t78 !== undefined) { await $.wset([$t76, $t77], "SQL", $t78, C); } }
        { const $t79 = await $.iset((await $.wv([$t76, $t77], "SQL", C, false)), [1], $.add("where ", (await $.wv([$t76, $t77], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t79 !== undefined) { await $.wset([$t76, $t77], "SQL", $t79, C); } }
        await $.stmt($.wcall([$t76, $t77], "open", [], C));
        if ($.truthy($.eq((await $.wv([$t76, $t77], "RecordCount", C, false)), 0))) {
          await $.stmt((await $.wcall([$t76, $t77], "ShowMessage", ["Müştəri tapılmadı"], C)));
          await $.stmt($.wcall([$t76, $t77], "Clear", [], C));
          return L0.result;
        }
        if ($.truthy($.eq((await $.wv([$t76, $t77], "RecordCount", C, false)), 1))) {
          { const $t80 = (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["cust_type"], C)), "AsInteger"));
            if ($.eq($t80, 0)) {
              await $.mset((await $.wv([$t76, $t77], "RadioGroup2", C, false)), "ItemIndex", 3);
            }
            else if ($.eq($t80, 1)) {
              await $.mset((await $.wv([$t76, $t77], "RadioGroup2", C, false)), "ItemIndex", 1);
            }
            else if ($.eq($t80, 2)) {
              await $.mset((await $.wv([$t76, $t77], "RadioGroup2", C, false)), "ItemIndex", 2);
            }
            else if ($.eq($t80, 3)) {
              await $.mset((await $.wv([$t76, $t77], "RadioGroup2", C, false)), "ItemIndex", 4);
            }
            else if ($.eq($t80, 4)) {
              await $.mset((await $.wv([$t76, $t77], "RadioGroup2", C, false)), "ItemIndex", 0);
            }
          }
          if ($.truthy($.eq((await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["nerezident"], C)), "AsInteger")), 1))) {
            await $.mset((await $.wv([$t76, $t77], "RadioButton3", C, false)), "Checked", (await $.wv([$t76, $t77], "true", C, false)));
          } else {
            await $.mset((await $.wv([$t76, $t77], "RadioButton4", C, false)), "Checked", (await $.wv([$t76, $t77], "true", C, false)));
          }
          await $.mcall((await $.wv([$t76, $t77], "AccountDataSet1", C, false)), "Close", []);
          { const $t81 = await $.iset((await $.mv((await $.wv([$t76, $t77], "AccountDataSet1", C, false)), "SQL")), [2], ""); if ($t81 !== undefined) { await $.mset((await $.wv([$t76, $t77], "AccountDataSet1", C, false)), "SQL", $t81); } }
          await $.stmt((await $.mcall((await $.wv([$t76, $t77], "AccountDataSet1", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["id"], C)), "AsInteger"))])));
          await $.mcall((await $.wv([$t76, $t77], "AccountDataSet1", C, false)), "Open", []);
          await $.mset((await $.wv([$t76, $t77], "EditCustidII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["id"], C)), "AsString")));
          await $.mset((await $.wv([$t76, $t77], "EditLastNameII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["lastname"], C)), "AsString")));
          if ($.truthy($.eq((await $.mv((await $.wv([$t76, $t77], "RadioGroup2", C, false)), "ItemIndex")), 3))) {
            await $.mset((await $.wv([$t76, $t77], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["custname"], C)), "AsString")));
          } else {
            await $.mset((await $.wv([$t76, $t77], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["name"], C)), "AsString")));
          }
          await $.mset((await $.wv([$t76, $t77], "EditSonameII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["soname"], C)), "AsString")));
          await $.mset((await $.wv([$t76, $t77], "EditPINCodeII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["passpin"], C)), "AsString")));
          await $.mset((await $.wv([$t76, $t77], "CBoxPassPlaceII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["doc_type"], C)), "AsInteger")));
          await $.mset((await $.wv([$t76, $t77], "EditSerialII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["passer"], C)), "AsString")));
          await $.mset((await $.wv([$t76, $t77], "EditPassportII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["paspnum"], C)), "AsString")));
          await $.mset((await $.wv([$t76, $t77], "DBCBox_DocTYPEII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["paspplace"], C)), "AsString")));
          await $.mset((await $.wv([$t76, $t77], "DateEditII", C, false)), "Value", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["paspdate"], C)), "AsVariant")));
          await $.mset((await $.wv([$t76, $t77], "EditMobilII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["phone_m"], C)), "AsString")));
          await $.mset((await $.wv([$t76, $t77], "EditPhoneII", C, false)), "Text", (await $.mv((await $.wcall([$t76, $t77], "FieldByName", ["phone_h"], C)), "AsString")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpFormNew", "Search2passpinChange", async function Search2passpinChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Search2passpin")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Search2paspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Search2id")), "Clear", []);
    await $.mcall((await $.v(C, "Search2inn")), "Clear", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Search2paspnum")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Search2passpin")), "Clear", []);
    await $.mcall((await $.v(C, "Search2id")), "Clear", []);
    await $.mcall((await $.v(C, "Search2inn")), "Clear", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Search2id")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Search2passpin")), "Clear", []);
    await $.mcall((await $.v(C, "Search2paspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Search2inn")), "Clear", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Search2inn")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Search2passpin")), "Clear", []);
    await $.mcall((await $.v(C, "Search2paspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Search2id")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Search2passpinKeyPress", async function Search2passpinKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = "";
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
      L0["s"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "name")), 8, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
      L0["s"] = $.add($.add($.add($.add($.add($.add("(", L0["s"]), "="), "'"), (await $.mv((L0["sender"]), "text"))), "'"), ")");
      { const $t82 = (await $.mv((await $.v(C, "RadioGroup3")), "ItemIndex"));
        if ($.eq($t82, 0)) {
          L0["s"] = $.add($.add(L0["s"], " "), "and (Cust_type=4)");
        }
        else if ($.eq($t82, 1)) {
          L0["s"] = $.add($.add(L0["s"], " "), "and (Cust_type=1)");
        }
        else if ($.eq($t82, 2)) {
          L0["s"] = $.add($.add(L0["s"], " "), "and (Cust_type=2)");
        }
        else if ($.eq($t82, 3)) {
          L0["s"] = $.add($.add(L0["s"], " "), "and (Cust_type=0)");
        }
        else if ($.eq($t82, 4)) {
          L0["s"] = $.add($.add(L0["s"], " "), "and (Cust_type=3)");
        }
      }
      {
        const $t83 = (await $.v(C, "ExpDataModule"));
        const $t84 = (await $.wv([$t83], "TakeDataSet", C, false));
        await $.stmt($.wcall([$t83, $t84], "close", [], C));
        { const $t85 = await $.iset((await $.wv([$t83, $t84], "SQL", C, false)), [1], ""); if ($t85 !== undefined) { await $.wset([$t83, $t84], "SQL", $t85, C); } }
        { const $t86 = await $.iset((await $.wv([$t83, $t84], "SQL", C, false)), [1], $.add("where ", (await $.wv([$t83, $t84], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t86 !== undefined) { await $.wset([$t83, $t84], "SQL", $t86, C); } }
        await $.stmt($.wcall([$t83, $t84], "open", [], C));
        if ($.truthy($.eq((await $.wv([$t83, $t84], "RecordCount", C, false)), 0))) {
          await $.stmt((await $.wcall([$t83, $t84], "ShowMessage", ["Müştəri tapılmadı"], C)));
          await $.stmt($.wcall([$t83, $t84], "Clear", [], C));
          return L0.result;
        }
        if ($.truthy($.eq((await $.wv([$t83, $t84], "RecordCount", C, false)), 1))) {
          { const $t87 = (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["cust_type"], C)), "AsInteger"));
            if ($.eq($t87, 0)) {
              await $.mset((await $.wv([$t83, $t84], "RadioGroup3", C, false)), "ItemIndex", 3);
            }
            else if ($.eq($t87, 1)) {
              await $.mset((await $.wv([$t83, $t84], "RadioGroup3", C, false)), "ItemIndex", 1);
            }
            else if ($.eq($t87, 2)) {
              await $.mset((await $.wv([$t83, $t84], "RadioGroup3", C, false)), "ItemIndex", 2);
            }
            else if ($.eq($t87, 3)) {
              await $.mset((await $.wv([$t83, $t84], "RadioGroup3", C, false)), "ItemIndex", 4);
            }
            else if ($.eq($t87, 4)) {
              await $.mset((await $.wv([$t83, $t84], "RadioGroup3", C, false)), "ItemIndex", 0);
            }
          }
          if ($.truthy($.eq((await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["nerezident"], C)), "AsInteger")), 1))) {
            await $.mset((await $.wv([$t83, $t84], "RadioButton5", C, false)), "Checked", (await $.wv([$t83, $t84], "true", C, false)));
          } else {
            await $.mset((await $.wv([$t83, $t84], "RadioButton6", C, false)), "Checked", (await $.wv([$t83, $t84], "true", C, false)));
          }
          await $.mcall((await $.wv([$t83, $t84], "AccountDataSet2", C, false)), "Close", []);
          await $.stmt((await $.mcall((await $.wv([$t83, $t84], "AccountDataSet2", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["id"], C)), "AsInteger"))])));
          await $.mcall((await $.wv([$t83, $t84], "AccountDataSet2", C, false)), "Open", []);
          await $.mset((await $.wv([$t83, $t84], "EditCustid2", C, false)), "Text", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["id"], C)), "AsString")));
          await $.mset((await $.wv([$t83, $t84], "EditLastName2", C, false)), "Text", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["lastname"], C)), "AsString")));
          if ($.truthy($.eq((await $.mv((await $.wv([$t83, $t84], "RadioGroup3", C, false)), "ItemIndex")), 3))) {
            await $.mset((await $.wv([$t83, $t84], "EditName2", C, false)), "Text", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["custname"], C)), "AsString")));
          } else {
            await $.mset((await $.wv([$t83, $t84], "EditName2", C, false)), "Text", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["name"], C)), "AsString")));
          }
          await $.mset((await $.wv([$t83, $t84], "EditSoname2", C, false)), "Text", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["soname"], C)), "AsString")));
          if ($.truthy(($.eq((await $.mv((await $.wv([$t83, $t84], "RadioGroup3", C, false)), "ItemIndex")), 0)))) {
            await $.mset((await $.wv([$t83, $t84], "EditPINCode2", C, false)), "Text", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["passpin"], C)), "AsString")));
            await $.mset((await $.wv([$t83, $t84], "CBoxPassPlace2", C, false)), "KeyValue", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["doc_type"], C)), "AsInteger")));
            await $.mset((await $.wv([$t83, $t84], "EditSerial2", C, false)), "Text", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["passer"], C)), "AsString")));
            await $.mset((await $.wv([$t83, $t84], "EditPassport2", C, false)), "Text", (await $.mv((await $.wcall([$t83, $t84], "FieldByName", ["paspnum"], C)), "AsString")));
          }
        } else {
          if ($.truthy($.gt((await $.wv([$t83, $t84], "RecordCount", C, false)), 1))) {
            await $.mcall((await $.wv([$t83, $t84], "FormSearchLegalCustName", C, false)), "ShowModal", []);
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpFormNew", "SearchEditCustidChange", async function SearchEditCustidChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "SearchEditCustidExit", async function SearchEditCustidExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t88 = (await $.v(C, "ExpDataModule"));
    const $t89 = (await $.wv([$t88], "SendToDataSet", C, false));
    await $.wset([$t88, $t89], "Filter", "", C);
    await $.wset([$t88, $t89], "Filtered", (await $.wv([$t88, $t89], "False", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "SearchpasspinChange", async function SearchpasspinChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "nam": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Searchpasspin")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Searchpaspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Searchid")), "Clear", []);
    await $.mcall((await $.v(C, "Searchinn")), "Clear", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Searchpaspnum")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Searchpasspin")), "Clear", []);
    await $.mcall((await $.v(C, "Searchid")), "Clear", []);
    await $.mcall((await $.v(C, "Searchinn")), "Clear", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Searchid")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Searchpasspin")), "Clear", []);
    await $.mcall((await $.v(C, "Searchpaspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Searchinn")), "Clear", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((L0["sender"]), "Name")), "Searchinn")), async () => ($.ne((await $.mv((L0["sender"]), "Text")), "")))))) {
    await $.mcall((await $.v(C, "Searchpasspin")), "Clear", []);
    await $.mcall((await $.v(C, "Searchpaspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Searchid")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "SearchpasspinKeyPress", async function SearchpasspinKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = "";
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
      L0["s"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "name")), 7, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
      if ($.truthy($.eq(L0["s"], "passpin"))) {
        L0["s"] = $.add($.add("upper(", L0["s"]), ")");
      }
      L0["s"] = $.add($.add($.add($.add($.add($.add("(", L0["s"]), "="), "'"), (await $.mv((L0["sender"]), "text"))), "'"), ")");
      {
        const $t90 = (await $.v(C, "ExpDataModule"));
        const $t91 = (await $.wv([$t90], "SendDataSet", C, false));
        await $.stmt($.wcall([$t90, $t91], "close", [], C));
        { const $t92 = await $.iset((await $.wv([$t90, $t91], "SQL", C, false)), [1], ""); if ($t92 !== undefined) { await $.wset([$t90, $t91], "SQL", $t92, C); } }
        { const $t93 = await $.iset((await $.wv([$t90, $t91], "SQL", C, false)), [1], $.add("where ", (await $.wv([$t90, $t91], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false)))); if ($t93 !== undefined) { await $.wset([$t90, $t91], "SQL", $t93, C); } }
        await $.stmt($.wcall([$t90, $t91], "open", [], C));
        if ($.truthy($.eq((await $.wv([$t90, $t91], "RecordCount", C, false)), 0))) {
          await $.stmt((await $.wcall([$t90, $t91], "ShowMessage", ["Müştəri tapılmadı"], C)));
          await $.stmt($.wcall([$t90, $t91], "Clear", [], C));
          return L0.result;
        }
        if ($.truthy($.eq((await $.wv([$t90, $t91], "RecordCount", C, false)), 1))) {
          { const $t94 = (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["cust_type"], C)), "AsInteger"));
            if ($.eq($t94, 0)) {
              await $.mset((await $.wv([$t90, $t91], "RadioGroup1", C, false)), "ItemIndex", 3);
            }
            else if ($.eq($t94, 1)) {
              await $.mset((await $.wv([$t90, $t91], "RadioGroup1", C, false)), "ItemIndex", 1);
            }
            else if ($.eq($t94, 2)) {
              await $.mset((await $.wv([$t90, $t91], "RadioGroup1", C, false)), "ItemIndex", 2);
            }
            else if ($.eq($t94, 3)) {
              await $.mset((await $.wv([$t90, $t91], "RadioGroup1", C, false)), "ItemIndex", 4);
            }
            else if ($.eq($t94, 4)) {
              await $.mset((await $.wv([$t90, $t91], "RadioGroup1", C, false)), "ItemIndex", 0);
            }
          }
          if ($.truthy($.eq((await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["nerezident"], C)), "AsInteger")), 1))) {
            await $.mset((await $.wv([$t90, $t91], "RadioButton1", C, false)), "Checked", (await $.wv([$t90, $t91], "true", C, false)));
          } else {
            await $.mset((await $.wv([$t90, $t91], "RadioButton2", C, false)), "Checked", (await $.wv([$t90, $t91], "true", C, false)));
          }
          await $.mcall((await $.wv([$t90, $t91], "AccountDataSet", C, false)), "Close", []);
          { const $t95 = await $.iset((await $.mv((await $.wv([$t90, $t91], "AccountDataSet", C, false)), "SQL")), [2], ""); if ($t95 !== undefined) { await $.mset((await $.wv([$t90, $t91], "AccountDataSet", C, false)), "SQL", $t95); } }
          await $.stmt((await $.mcall((await $.wv([$t90, $t91], "AccountDataSet", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["id"], C)), "AsInteger"))])));
          await $.mcall((await $.wv([$t90, $t91], "AccountDataSet", C, false)), "Open", []);
          await $.mset((await $.wv([$t90, $t91], "EditCustid", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["id"], C)), "AsString")));
          await $.mset((await $.wv([$t90, $t91], "EditLastNameI", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["lastname"], C)), "AsString")));
          if ($.truthy($.eq((await $.mv((await $.wv([$t90, $t91], "RadioGroup1", C, false)), "ItemIndex")), 3))) {
            await $.mset((await $.wv([$t90, $t91], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["custname"], C)), "AsString")));
          } else {
            await $.mset((await $.wv([$t90, $t91], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["name"], C)), "AsString")));
          }
          await $.mset((await $.wv([$t90, $t91], "EditSonameI", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["soname"], C)), "AsString")));
          await $.mset((await $.wv([$t90, $t91], "EditPINCodeI", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["passpin"], C)), "AsString")));
          await $.mset((await $.wv([$t90, $t91], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["doc_type"], C)), "AsInteger")));
          await $.mset((await $.wv([$t90, $t91], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["passer"], C)), "AsString")));
          await $.mset((await $.wv([$t90, $t91], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["paspnum"], C)), "AsString")));
          await $.mset((await $.wv([$t90, $t91], "DBCBox_DocTYPEI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["paspplace"], C)), "AsString")));
          await $.mset((await $.wv([$t90, $t91], "DateEditI", C, false)), "Value", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["paspdate"], C)), "AsVariant")));
          await $.mset((await $.wv([$t90, $t91], "EditMobilI", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["phone_m"], C)), "AsString")));
          await $.mset((await $.wv([$t90, $t91], "EditPhoneI", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91], "FieldByName", ["phone_h"], C)), "AsString")));
          {
            const $t96 = (await $.wv([$t90, $t91], "FormNominalCustomers", C, false));
            const $t97 = (await $.wv([$t90, $t91, $t96], "ExpressVariables", C, false));
            await $.wset([$t90, $t91, $t96, $t97], "custid", (await $.mv((await $.wv([$t90, $t91, $t96, $t97], "ExpBatchsDataSetKLIID", C, false)), "AsString")), C);
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["passpin"], C)), "AsString")));
            if ($.truthy($.ne((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "Editpasspin", C, false)), "Text")), ""))) {
              await $.mset((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "RH", (await $.wv([$t90, $t91, $t96, $t97], "true", C, false)));
            }
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["lastname"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["name"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["soname"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["doc_type"], C)), "AsInteger")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["passer"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["paspnum"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["doc_country"], C)), "AsVariant")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["paspplace"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["paspdate"], C)), "AsVariant")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["passexpire"], C)), "AsVariant")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["citizenship"], C)), "AsInteger")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["sex"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["fam_status"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["birthplace"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["birth_state"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["birthday"], C)), "AsVariant")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["adrs_state"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["city"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["reg_zip"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["phone_m"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["phone_h"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["e_mail"], C)), "AsString")));
            await $.mset((await $.wv([$t90, $t91, $t96, $t97], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["address"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "Work_Place")), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_place"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_cntr"], C)), "AsVariant")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_city"], C)), "AsVariant")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "db_tph_state")), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_state"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_zip"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_adress"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_phone"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_phext"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t90, $t91, $t96, $t97], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text", (await $.mv((await $.wcall([$t90, $t91, $t96, $t97], "FieldByName", ["work_phcode"], C)), "AsString")));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TExpFormNew", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), (-(1))))) {
    await $.mset((await $.v(C, "SenderAccNo")), "KeyValue", (-(1)));
    await $.mset((await $.v(C, "SenderAccNo")), "Color", (await $.v(C, "cl3DLight")));
    await $.mset((await $.v(C, "SenderAccNo")), "Enabled", false);
  }
  { const $t98 = (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"));
    if ($.eq($t98, 1) || $.eq($t98, 2) || $.eq($t98, 3) || $.eq($t98, 4)) {
      if ($.truthy($.not(((await $.mv((await $.v(C, "SenderAccNo")), "Enabled")))))) {
        await $.mset((await $.v(C, "SenderAccNo")), "Enabled", true);
        await $.mset((await $.v(C, "SenderAccNo")), "Color", (await $.v(C, "clwhite")));
      } else {
        await $.mset((await $.v(C, "SenderAccNo")), "KeyValue", (-(1)));
        await $.mset((await $.v(C, "SenderAccNo")), "Color", (await $.v(C, "cl3DLight")));
        await $.mset((await $.v(C, "SenderAccNo")), "Enabled", false);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup2")), "ItemIndex")), (-(1))))) {
    await $.mset((await $.v(C, "SenderAccNoII")), "KeyValue", (-(1)));
    await $.mset((await $.v(C, "SenderAccNoII")), "Color", (await $.v(C, "cl3DLight")));
    await $.mset((await $.v(C, "SenderAccNoII")), "Enabled", false);
  }
  { const $t99 = (await $.mv((await $.v(C, "RadioGroup2")), "ItemIndex"));
    if ($.eq($t99, 1) || $.eq($t99, 2) || $.eq($t99, 3) || $.eq($t99, 4)) {
      if ($.truthy($.not(((await $.mv((await $.v(C, "SenderAccNoII")), "Enabled")))))) {
        await $.mset((await $.v(C, "SenderAccNoII")), "Enabled", true);
        await $.mset((await $.v(C, "SenderAccNoII")), "Color", (await $.v(C, "clwhite")));
      } else {
        await $.mset((await $.v(C, "SenderAccNoII")), "KeyValue", (-(1)));
        await $.mset((await $.v(C, "SenderAccNoII")), "Color", (await $.v(C, "cl3DLight")));
        await $.mset((await $.v(C, "SenderAccNoII")), "Enabled", false);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "FForm")), 0))) {
    await $.mset((await $.v(C, "EditTime")), "Text", (await $.call(C, "TimeToStr", [(await $.v(C, "Time"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "ValuteNameClick", async function ValuteNameClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CMCurrencyEdit")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), (-(1)))), async () => ($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), 0)))))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "EditPINCodeI")), "Text")), "")))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin pinkod sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "CBoxPassPlaceI")), "Text")), "")))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin sənədin növü sahəsi seçilməyib"])));
      return L0.result;
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "EditSerialI")), "Text")), "")))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin seriya sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "EditPassportI")), "Text")), "")))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin nömrə sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "DBCBox_DocTYPEI")), "Text")), "")))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin verən orqan sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DateEditI")), "Value"))])))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin verildiyi tarix sahəsi seçilməyib"])));
      return L0.result;
    }
    if ($.truthy(((await $.and_(($.eq((await $.mv((await $.v(C, "EditMobilI")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditPhoneI")), "Text")), ""))))))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin mobil və ya şəhər telefon sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "EditLastNameI")), "Text")), "")))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin soyadı sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "EditNameI")), "Text")), "")))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin adı sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy(($.eq((await $.mv((await $.v(C, "EditSonameI")), "Text")), "")))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin atasının adı sahəsi doldurulmayıb "])));
      return L0.result;
    }
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "ValuteName")), "Text")), "")))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Valyuta sahəsi seçilməyib "])));
    return L0.result;
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "CMCurrencyEdit")), "Text")), "0.00")))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Məbləğ sahəsi doldurulmayıb "])));
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "SenderAccNo")), "Enabled")), async () => ($.eq((await $.mv((await $.v(C, "SenderAccNo")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Göndərən şəxsin hesab sahəsi seçilməyib "])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RemitInfEdit")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Təyinat sahəsi doldurulmayıb "])));
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "ButtonNominal")), "Enabled")), async () => $.not(((await $.mv((await $.v(C, "FormNominalCustomers")), "RH")))))))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox3")), "ShowMessage", ["Nominal şəxsin bütün məlumatlar sahəsini doldur!"])));
    return L0.result;
  }
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Expadd", async function Expadd(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "status": 0, "optype": 0, "amount": 0, "val_cod": 0, "trans_ref": '', "remit_inf": '', "add_inf": '', "senddate": 0, "recdate": 0, "senddatetime": 0, "recdatetime": 0, "password": '', "s": '', "v_id": 0};
  {
    const $t100 = (await $.v(C, "ExpressVariables"));
    await $.wset([$t100], "custid", (await $.mv((await $.wv([$t100], "EditCustid", C, false)), "Text")), C);
    await $.wset([$t100], "doc_type", (await $.mv((await $.wv([$t100], "CBoxPassPlaceI", C, false)), "KeyValue")), C);
    await $.wset([$t100], "passpin", (await $.mv((await $.wv([$t100], "EditPINCodeI", C, false)), "Text")), C);
    await $.wset([$t100], "passer", (await $.mv((await $.wv([$t100], "EditSerialI", C, false)), "Text")), C);
    await $.wset([$t100], "paspnum", (await $.mv((await $.wv([$t100], "EditPassportI", C, false)), "Text")), C);
    await $.wset([$t100], "paspplace", (await $.mv((await $.wv([$t100], "DBCBox_DocTYPEI", C, false)), "KeyValue")), C);
    await $.wset([$t100], "paspdate", (await $.mv((await $.wv([$t100], "DateEditI", C, false)), "Value")), C);
    await $.wset([$t100], "lastname", (await $.mv((await $.wv([$t100], "EditLastNameI", C, false)), "Text")), C);
    await $.wset([$t100], "soname", (await $.mv((await $.wv([$t100], "EditSonameI", C, false)), "Text")), C);
    await $.wset([$t100], "name", (await $.mv((await $.wv([$t100], "EditNameI", C, false)), "Text")), C);
    await $.wset([$t100], "phone_m", (await $.mv((await $.wv([$t100], "EditMobilI", C, false)), "Text")), C);
    await $.wset([$t100], "phone_h", (await $.mv((await $.wv([$t100], "EditPhoneI", C, false)), "Text")), C);
    await $.wset([$t100], "filial", (await $.wcall([$t100], "StrToInt", [(await $.mv((await $.wv([$t100], "DBEdit1", C, false)), "Text"))], C)), C);
    await $.wset([$t100], "debetid", (await $.mv((await $.wv([$t100], "SenderAccNo", C, false)), "KeyValue")), C);
    { const $t101 = (await $.mv((await $.wv([$t100], "RadioGroup1", C, false)), "ItemIndex"));
      if ($.eq($t101, (-(1)))) {
        await $.wset([$t100], "v_cust_type", (-(1)), C);
      }
      else if ($.eq($t101, 0)) {
        await $.wset([$t100], "v_cust_type", 4, C);
      }
      else if ($.eq($t101, 1)) {
        await $.wset([$t100], "v_cust_type", 1, C);
      }
      else if ($.eq($t101, 2)) {
        await $.wset([$t100], "v_cust_type", 2, C);
      }
      else if ($.eq($t101, 3)) {
        await $.wset([$t100], "v_cust_type", 0, C);
      }
      else if ($.eq($t101, 4)) {
        await $.wset([$t100], "v_cust_type", 3, C);
      }
    }
    if ($.truthy((await $.mv((await $.wv([$t100], "RadioButton1", C, false)), "Checked")))) {
      await $.wset([$t100], "v_nerezident", 1, C);
    } else {
      await $.wset([$t100], "v_nerezident", 0, C);
    }
    await $.wset([$t100], "custidI", (await $.mv((await $.wv([$t100], "EditCustidII", C, false)), "Text")), C);
    await $.wset([$t100], "doc_typeI", (await $.mv((await $.wv([$t100], "CBoxPassPlaceII", C, false)), "KeyValue")), C);
    await $.wset([$t100], "passpinI", (await $.mv((await $.wv([$t100], "EditPincodeII", C, false)), "Text")), C);
    await $.wset([$t100], "passerI", (await $.mv((await $.wv([$t100], "EditSerialII", C, false)), "Text")), C);
    await $.wset([$t100], "paspnumI", (await $.mv((await $.wv([$t100], "EditPassportII", C, false)), "Text")), C);
    await $.wset([$t100], "paspplaceI", (await $.mv((await $.wv([$t100], "DBCBox_DocTYPEII", C, false)), "KeyValue")), C);
    await $.wset([$t100], "paspdateI", (await $.mv((await $.wv([$t100], "DateEditII", C, false)), "Value")), C);
    await $.wset([$t100], "lastnameI", (await $.mv((await $.wv([$t100], "EditLastNameII", C, false)), "Text")), C);
    await $.wset([$t100], "sonameI", (await $.mv((await $.wv([$t100], "EditSonameII", C, false)), "Text")), C);
    await $.wset([$t100], "nameI", (await $.mv((await $.wv([$t100], "EditNameII", C, false)), "Text")), C);
    await $.wset([$t100], "phone_mI", (await $.mv((await $.wv([$t100], "EditMobilII", C, false)), "Text")), C);
    await $.wset([$t100], "phone_hI", (await $.mv((await $.wv([$t100], "EditPhoneII", C, false)), "Text")), C);
    await $.wset([$t100], "filialI", (await $.mv((await $.wv([$t100], "FilialNameII", C, false)), "KeyValue")), C);
    await $.wset([$t100], "creditid", (await $.mv((await $.wv([$t100], "SenderAccNoII", C, false)), "KeyValue")), C);
    { const $t102 = (await $.mv((await $.wv([$t100], "RadioGroup2", C, false)), "ItemIndex"));
      if ($.eq($t102, (-(1)))) {
        await $.wset([$t100], "v_cust_typeI", (-(1)), C);
      }
      else if ($.eq($t102, 0)) {
        await $.wset([$t100], "v_cust_typeI", 4, C);
      }
      else if ($.eq($t102, 1)) {
        await $.wset([$t100], "v_cust_typeI", 1, C);
      }
      else if ($.eq($t102, 2)) {
        await $.wset([$t100], "v_cust_typeI", 2, C);
      }
      else if ($.eq($t102, 3)) {
        await $.wset([$t100], "v_cust_typeI", 0, C);
      }
      else if ($.eq($t102, 4)) {
        await $.wset([$t100], "v_cust_typeI", 3, C);
      }
    }
    if ($.truthy((await $.mv((await $.wv([$t100], "RadioButton3", C, false)), "Checked")))) {
      await $.wset([$t100], "v_nerezidentI", 1, C);
    } else {
      await $.wset([$t100], "v_nerezidentI", 0, C);
    }
    await $.wset([$t100], "status", 0, { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
    await $.wset([$t100], "optype", 1, { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true });
    await $.wset([$t100], "amount", (await $.wcall([$t100], "StrToFloat", [(await $.mv((await $.wv([$t100], "CMCurrencyEdit", C, false)), "Text"))], C)), { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true });
    await $.wset([$t100], "val_cod", (await $.mv((await $.wv([$t100], "ValuteName", C, false)), "KeyValue")), { get: async () => L0["val_cod"], set: async (v) => { L0["val_cod"] = v; }, local: true });
    await $.wset([$t100], "trans_ref", (await $.mcall((await $.mv((await $.wv([$t100], "ExpDataModule", C, false)), "EXPESSPAC")), "CallStringFunction", ["Getnewexpressreference", []])), { get: async () => L0["trans_ref"], set: async (v) => { L0["trans_ref"] = v; }, local: true });
    await $.wset([$t100], "remit_inf", (await $.mv((await $.wv([$t100], "RemitInfEdit", C, false)), "Text")), { get: async () => L0["remit_inf"], set: async (v) => { L0["remit_inf"] = v; }, local: true });
    await $.wset([$t100], "add_inf", (await $.mv((await $.wv([$t100], "Memo1", C, false)), "Text")), { get: async () => L0["add_inf"], set: async (v) => { L0["add_inf"] = v; }, local: true });
    await $.wset([$t100], "senddate", (await $.wcall([$t100], "StrToDate", [(await $.mv((await $.mv((await $.wv([$t100], "ExpressFrom", C, false)), "Edit1")), "Text"))], C)), { get: async () => L0["senddate"], set: async (v) => { L0["senddate"] = v; }, local: true });
    await $.wset([$t100], "senddatetime", (await $.wcall([$t100], "StrToTime", [(await $.mv((await $.mv((await $.wv([$t100], "ExpressFrom", C, false)), "Edit2")), "Text"))], C)), { get: async () => L0["senddatetime"], set: async (v) => { L0["senddatetime"] = v; }, local: true });
    await $.wset([$t100], "password", (await $.wcall([$t100], "IntToStr", [$.add((await $.wcall([$t100], "DateTimeToFileDate", [(await $.wv([$t100], "senddate", { get: async () => L0["senddate"], set: async (v) => { L0["senddate"] = v; }, local: true }, false))], C)), (await $.wcall([$t100], "random", [(await $.wcall([$t100], "DateTimeToFileDate", [(await $.wv([$t100], "senddatetime", { get: async () => L0["senddatetime"], set: async (v) => { L0["senddatetime"] = v; }, local: true }, false))], C))], C)))], C)), { get: async () => L0["password"], set: async (v) => { L0["password"] = v; }, local: true });
    await $.wset([$t100], "password", (await $.wcall([$t100], "IntToStr", [(await $.wcall([$t100], "random", [(await $.wcall([$t100], "StrToInt", [(await $.wv([$t100], "password", { get: async () => L0["password"], set: async (v) => { L0["password"] = v; }, local: true }, false))], C))], C))], C)), { get: async () => L0["password"], set: async (v) => { L0["password"] = v; }, local: true });
    await $.wset([$t100], "senddatetime", $.add((await $.wv([$t100], "senddate", { get: async () => L0["senddate"], set: async (v) => { L0["senddate"] = v; }, local: true }, false)), (await $.wv([$t100], "senddatetime", { get: async () => L0["senddatetime"], set: async (v) => { L0["senddatetime"] = v; }, local: true }, false))), { get: async () => L0["senddatetime"], set: async (v) => { L0["senddatetime"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t100], "FForm", C, false)), 0))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t100], "ExpDataModule", C, false)), "EXPESSPAC")), "CallProcedure", ["Exp_batchs_insert", ["v_cust_type", (await $.wv([$t100], "v_cust_type", C, false)), "v_nerezident", (await $.wv([$t100], "v_nerezident", C, false)), "v_custid", (await $.wv([$t100], "custid", C, false)), "v_debetid", (await $.wv([$t100], "debetid", C, false)), "v_filialid", (await $.wv([$t100], "filial", C, false)), "v_doc_type", (await $.wv([$t100], "doc_type", C, false)), "v_passpin", (await $.wv([$t100], "passpin", C, false)), "v_passer", (await $.wv([$t100], "passer", C, false)), "v_paspnum", (await $.wv([$t100], "paspnum", C, false)), "v_doc_country", (await $.wv([$t100], "doc_country", C, false)), "v_paspplace", (await $.wv([$t100], "paspplace", C, false)), "v_paspdate", (await $.wv([$t100], "paspdate", C, false)), "v_passexpire", (await $.wv([$t100], "passexpire", C, false)), "v_citizenship", (await $.wv([$t100], "citizenship", C, false)), "v_lastname", (await $.wv([$t100], "lastname", C, false)), "v_soname", (await $.wv([$t100], "soname", C, false)), "v_name", (await $.wv([$t100], "name", C, false)), "v_sex", (await $.wv([$t100], "sex", C, false)), "v_fam_status", (await $.wv([$t100], "fam_status", C, false)), "v_bbirthplace", (await $.wv([$t100], "bbirthplace", C, false)), "v_birth_state", (await $.wv([$t100], "birth_state", C, false)), "v_birthday", (await $.wv([$t100], "birthday", C, false)), "v_aadrs_state", (await $.wv([$t100], "aadrs_state", C, false)), "v_city", (await $.wv([$t100], "city", C, false)), "v_reg_zip", (await $.wv([$t100], "reg_zip", C, false)), "v_address", (await $.wv([$t100], "address", C, false)), "v_phone_m", (await $.wv([$t100], "phone_m", C, false)), "v_phone_h", (await $.wv([$t100], "phone_h", C, false)), "v_e_mail", (await $.wv([$t100], "e_mail", C, false)), "v_work_place", (await $.wv([$t100], "work_place", C, false)), "v_work_adrs_spec", (await $.wv([$t100], "work_adrs_spec", C, false)), "v_work_cntr", (await $.wv([$t100], "work_cntr", C, false)), "v_work_city", (await $.wv([$t100], "work_city", C, false)), "v_work_state", (await $.wv([$t100], "work_state", C, false)), "v_work_zip", (await $.wv([$t100], "work_zip", C, false)), "v_work_adress", (await $.wv([$t100], "work_adress", C, false)), "v_work_phone_spec", (await $.wv([$t100], "work_phone_spec", C, false)), "v_work_phconttype", (await $.wv([$t100], "work_phconttype", C, false)), "v_work_phoppref", (await $.wv([$t100], "work_phoppref", C, false)), "v_work_phone", (await $.wv([$t100], "work_phone", C, false)), "v_work_phext", (await $.wv([$t100], "work_phext", C, false)), "v_work_phcode", (await $.wv([$t100], "work_phcode", C, false)), "v_cust_type1", (await $.wv([$t100], "v_cust_typeI", C, false)), "v_nerezident1", (await $.wv([$t100], "v_nerezidentI", C, false)), "custid1", (await $.wv([$t100], "custidI", C, false)), "creditid", (await $.wv([$t100], "creditid", C, false)), "v_filialid1", (await $.wv([$t100], "filialI", C, false)), "v_doc_type1", (await $.wv([$t100], "doc_typeI", C, false)), "v_passpin1", (await $.wv([$t100], "passpinI", C, false)), "v_passer1", (await $.wv([$t100], "passerI", C, false)), "v_paspnum1", (await $.wv([$t100], "paspnumI", C, false)), "v_paspplace1", (await $.wv([$t100], "paspplaceI", C, false)), "v_lastname1", (await $.wv([$t100], "lastnameI", C, false)), "v_soname1", (await $.wv([$t100], "sonameI", C, false)), "v_name1", (await $.wv([$t100], "nameI", C, false)), "v_phone_m1", (await $.wv([$t100], "phone_mI", C, false)), "v_phone_h1", (await $.wv([$t100], "phone_hI", C, false)), "v_paspdate1", (await $.wv([$t100], "paspdateI", C, false)), "batchid", (await $.wv([$t100], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), "v_exid", (await $.wv([$t100], "exid", C, false)), "v_status", (await $.wv([$t100], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), "v_optype", (await $.wv([$t100], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), "v_amount", (await $.wv([$t100], "amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "v_val_cod", (await $.wv([$t100], "val_cod", { get: async () => L0["val_cod"], set: async (v) => { L0["val_cod"] = v; }, local: true }, false)), "v_trans_ref", (await $.wv([$t100], "trans_ref", { get: async () => L0["trans_ref"], set: async (v) => { L0["trans_ref"] = v; }, local: true }, false)), "v_remit_inf", (await $.wv([$t100], "remit_inf", { get: async () => L0["remit_inf"], set: async (v) => { L0["remit_inf"] = v; }, local: true }, false)), "v_add_inf", (await $.wv([$t100], "add_inf", { get: async () => L0["add_inf"], set: async (v) => { L0["add_inf"] = v; }, local: true }, false)), "v_senddate", (await $.wv([$t100], "senddate", { get: async () => L0["senddate"], set: async (v) => { L0["senddate"] = v; }, local: true }, false)), "v_senddatetime", (await $.wv([$t100], "senddatetime", { get: async () => L0["senddatetime"], set: async (v) => { L0["senddatetime"] = v; }, local: true }, false)), "v_password", (await $.wv([$t100], "password", { get: async () => L0["password"], set: async (v) => { L0["password"] = v; }, local: true }, false))]])));
    } else {
      await $.wset([$t100], "v_id", (await $.mv((await $.mv((await $.wv([$t100], "ExpDataModule", C, false)), "ExpBatchsDataSetID")), "AsInteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t100], "ExpDataModule", C, false)), "EXPESSPAC")), "CallProcedure", ["Exp_batchs_update", ["v_id", (await $.wv([$t100], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), "v_cust_type", (await $.wv([$t100], "v_cust_type", C, false)), "v_nerezident", (await $.wv([$t100], "v_nerezident", C, false)), "v_custid", (await $.wv([$t100], "custid", C, false)), "v_debetid", (await $.wv([$t100], "debetid", C, false)), "v_filialid", (await $.wv([$t100], "filial", C, false)), "v_doc_type", (await $.wv([$t100], "doc_type", C, false)), "v_passpin", (await $.wv([$t100], "passpin", C, false)), "v_passer", (await $.wv([$t100], "passer", C, false)), "v_paspnum", (await $.wv([$t100], "paspnum", C, false)), "v_doc_country", (await $.wv([$t100], "doc_country", C, false)), "v_paspplace", (await $.wv([$t100], "paspplace", C, false)), "v_paspdate", (await $.wv([$t100], "paspdate", C, false)), "v_passexpire", (await $.wv([$t100], "passexpire", C, false)), "v_citizenship", (await $.wv([$t100], "citizenship", C, false)), "v_lastname", (await $.wv([$t100], "lastname", C, false)), "v_soname", (await $.wv([$t100], "soname", C, false)), "v_name", (await $.wv([$t100], "name", C, false)), "v_sex", (await $.wv([$t100], "sex", C, false)), "v_fam_status", (await $.wv([$t100], "fam_status", C, false)), "v_bbirthplace", (await $.wv([$t100], "bbirthplace", C, false)), "v_birth_state", (await $.wv([$t100], "birth_state", C, false)), "v_birthday", (await $.wv([$t100], "birthday", C, false)), "v_aadrs_state", (await $.wv([$t100], "aadrs_state", C, false)), "v_city", (await $.wv([$t100], "city", C, false)), "v_reg_zip", (await $.wv([$t100], "reg_zip", C, false)), "v_address", (await $.wv([$t100], "address", C, false)), "v_phone_m", (await $.wv([$t100], "phone_m", C, false)), "v_phone_h", (await $.wv([$t100], "phone_h", C, false)), "v_e_mail", (await $.wv([$t100], "e_mail", C, false)), "v_work_place", (await $.wv([$t100], "work_place", C, false)), "v_work_adrs_spec", (await $.wv([$t100], "work_adrs_spec", C, false)), "v_work_cntr", (await $.wv([$t100], "work_cntr", C, false)), "v_work_city", (await $.wv([$t100], "work_city", C, false)), "v_work_state", (await $.wv([$t100], "work_state", C, false)), "v_work_zip", (await $.wv([$t100], "work_zip", C, false)), "v_work_adress", (await $.wv([$t100], "work_adress", C, false)), "v_work_phone_spec", (await $.wv([$t100], "work_phone_spec", C, false)), "v_work_phconttype", (await $.wv([$t100], "work_phconttype", C, false)), "v_work_phoppref", (await $.wv([$t100], "work_phoppref", C, false)), "v_work_phone", (await $.wv([$t100], "work_phone", C, false)), "v_work_phext", (await $.wv([$t100], "work_phext", C, false)), "v_work_phcode", (await $.wv([$t100], "work_phcode", C, false)), "v_cust_type1", (await $.wv([$t100], "v_cust_typeI", C, false)), "v_nerezident1", (await $.wv([$t100], "v_nerezidentI", C, false)), "custid1", (await $.wv([$t100], "custidI", C, false)), "creditid", (await $.wv([$t100], "creditid", C, false)), "v_filialid1", (await $.wv([$t100], "filialI", C, false)), "v_doc_type1", (await $.wv([$t100], "doc_typeI", C, false)), "v_passpin1", (await $.wv([$t100], "passpinI", C, false)), "v_passer1", (await $.wv([$t100], "passerI", C, false)), "v_paspnum1", (await $.wv([$t100], "paspnumI", C, false)), "v_paspplace1", (await $.wv([$t100], "paspplaceI", C, false)), "v_lastname1", (await $.wv([$t100], "lastnameI", C, false)), "v_soname1", (await $.wv([$t100], "sonameI", C, false)), "v_name1", (await $.wv([$t100], "nameI", C, false)), "v_phone_m1", (await $.wv([$t100], "phone_mI", C, false)), "v_phone_h1", (await $.wv([$t100], "phone_hI", C, false)), "v_paspdate1", (await $.wv([$t100], "paspdateI", C, false)), "batchid", (await $.wv([$t100], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), "v_exid", (await $.wv([$t100], "exid", C, false)), "v_status", (await $.wv([$t100], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)), "v_optype", (await $.wv([$t100], "optype", { get: async () => L0["optype"], set: async (v) => { L0["optype"] = v; }, local: true }, false)), "v_amount", (await $.wv([$t100], "amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "v_val_cod", (await $.wv([$t100], "val_cod", { get: async () => L0["val_cod"], set: async (v) => { L0["val_cod"] = v; }, local: true }, false)), "v_trans_ref", (await $.wv([$t100], "trans_ref", { get: async () => L0["trans_ref"], set: async (v) => { L0["trans_ref"] = v; }, local: true }, false)), "v_remit_inf", (await $.wv([$t100], "remit_inf", { get: async () => L0["remit_inf"], set: async (v) => { L0["remit_inf"] = v; }, local: true }, false)), "v_add_inf", (await $.wv([$t100], "add_inf", { get: async () => L0["add_inf"], set: async (v) => { L0["add_inf"] = v; }, local: true }, false)), "v_senddate", (await $.wv([$t100], "senddate", { get: async () => L0["senddate"], set: async (v) => { L0["senddate"] = v; }, local: true }, false)), "v_senddatetime", (await $.wv([$t100], "senddatetime", { get: async () => L0["senddatetime"], set: async (v) => { L0["senddatetime"] = v; }, local: true }, false)), "v_password", (await $.wv([$t100], "password", { get: async () => L0["password"], set: async (v) => { L0["password"] = v; }, local: true }, false))]])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "Expedit", async function Expedit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy((await $.mv((await $.v(C, "ExpFormNew")), "FiledBatchs")))) {
    {
      const $t103 = (await $.v(C, "ExpDataModule"));
      const $t104 = (await $.wv([$t103], "SendDataSet", C, false));
      await $.stmt($.wcall([$t103, $t104], "Close", [], C));
      { const $t105 = await $.iset((await $.wv([$t103, $t104], "SQl", C, false)), [1], ""); if ($t105 !== undefined) { await $.wset([$t103, $t104], "SQl", $t105, C); } }
      { const $t106 = await $.iset((await $.wv([$t103, $t104], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t103, $t104], "ExpBatchsDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t106 !== undefined) { await $.wset([$t103, $t104], "SQl", $t106, C); } }
      await $.stmt($.wcall([$t103, $t104], "Open", [], C));
      { const $t107 = (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["cust_type"], C)), "AsInteger"));
        if ($.eq($t107, 4)) {
          await $.mset((await $.wv([$t103, $t104], "RadioGroup1", C, false)), "ItemIndex", 0);
        }
        else if ($.eq($t107, 2)) {
          await $.mset((await $.wv([$t103, $t104], "RadioGroup1", C, false)), "ItemIndex", 2);
        }
        else if ($.eq($t107, 1)) {
          await $.mset((await $.wv([$t103, $t104], "RadioGroup1", C, false)), "ItemIndex", 1);
        }
        else if ($.eq($t107, 0)) {
          await $.mset((await $.wv([$t103, $t104], "RadioGroup1", C, false)), "ItemIndex", 3);
        }
      }
      { const $t108 = (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["nerezident"], C)), "AsInteger"));
        if ($.eq($t108, 1)) {
          await $.mset((await $.wv([$t103, $t104], "RadioButton1", C, false)), "Checked", (await $.wv([$t103, $t104], "true", C, false)));
        }
        else if ($.eq($t108, 0)) {
          await $.mset((await $.wv([$t103, $t104], "RadioButton2", C, false)), "Checked", (await $.wv([$t103, $t104], "true", C, false)));
        }
      }
      await $.mcall((await $.wv([$t103, $t104], "AccountDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t103, $t104], "AccountDataSet", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t103, $t104], "ExpBatchsDataSet", C, false)), "FieldByName", ["kliid"])), "AsInteger"))])));
      { const $t109 = await $.iset((await $.mv((await $.wv([$t103, $t104], "AccountDataSet", C, false)), "SQL")), [5], ""); if ($t109 !== undefined) { await $.mset((await $.wv([$t103, $t104], "AccountDataSet", C, false)), "SQL", $t109); } }
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.wv([$t103, $t104], "ExpBatchsDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (await $.wv([$t103, $t104], "null", C, false)))), async () => ($.ne((await $.mv((await $.mcall((await $.wv([$t103, $t104], "ExpBatchsDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (-(1)))))))) {
        { const $t110 = await $.iset((await $.mv((await $.wv([$t103, $t104], "AccountDataSet", C, false)), "SQL")), [5], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t103, $t104], "ExpBatchsDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsString")))); if ($t110 !== undefined) { await $.mset((await $.wv([$t103, $t104], "AccountDataSet", C, false)), "SQL", $t110); } }
      }
      await $.mcall((await $.wv([$t103, $t104], "AccountDataSet", C, false)), "Open", []);
      await $.mcall((await $.wv([$t103, $t104], "FilialDataSet", C, false)), "Close", []);
      { const $t111 = await $.iset((await $.mv((await $.wv([$t103, $t104], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t111 !== undefined) { await $.mset((await $.wv([$t103, $t104], "FilialDataSet", C, false)), "SQL", $t111); } }
      { const $t112 = await $.iset((await $.mv((await $.wv([$t103, $t104], "FilialDataSet", C, false)), "SQL")), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t103, $t104], "ExpBatchsDataSet", C, false)), "fieldbyname", ["filial"])), "AsString")))); if ($t112 !== undefined) { await $.mset((await $.wv([$t103, $t104], "FilialDataSet", C, false)), "SQL", $t112); } }
      await $.mcall((await $.wv([$t103, $t104], "FilialDataSet", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t103, $t104], "RadioGroup1", C, false)), "ItemIndex")), 4))) {
        await $.mset((await $.wv([$t103, $t104], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["custname"], C)), "AsString")));
      } else {
        await $.mset((await $.wv([$t103, $t104], "EditLastNameI", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104], "EditSonameI", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["soname"], C)), "AsString")));
      }
      await $.mset((await $.wv([$t103, $t104], "EditCustid", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t103, $t104], "ExpDataModule", C, false)), "ExpBatchsDataSetKLIID")), "AsString")));
      await $.mset((await $.wv([$t103, $t104], "EditPincodeI", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t103, $t104], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t103, $t104], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t103, $t104], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t103, $t104], "DBCBox_DocTYPEI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["paspplace"], C)), "AsString")));
      await $.mset((await $.wv([$t103, $t104], "DateEditI", C, false)), "Value", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["paspdate"], C)), "AsVariant")));
      await $.mset((await $.wv([$t103, $t104], "EditMobilI", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["phone_m"], C)), "AsString")));
      await $.mset((await $.wv([$t103, $t104], "EditPhoneI", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104], "FieldByName", ["phone_h"], C)), "AsString")));
      await $.mset((await $.wv([$t103, $t104], "ValuteName", C, false)), "KeyValue", (await $.mv((await $.wv([$t103, $t104], "ExpBatchsDataSetVAL_COD", C, false)), "AsInteger")));
      await $.mset((await $.wv([$t103, $t104], "CMCurrencyEdit", C, false)), "Text", (await $.mv((await $.wv([$t103, $t104], "ExpBatchsDataSetAMOUNT", C, false)), "AsString")));
      await $.mset((await $.wv([$t103, $t104], "TransRefEdit", C, false)), "Text", (await $.mv((await $.wv([$t103, $t104], "ExpBatchsDataSetTRANS_REF", C, false)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t103, $t104], "RadioGroup1", C, false)), "ItemIndex")), 0))) {
        await $.mset((await $.wv([$t103, $t104], "SenderAccNo", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t103, $t104], "AccountDataSet", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
      }
      await $.mset((await $.wv([$t103, $t104], "RemitInfEdit", C, false)), "Text", (await $.mv((await $.wv([$t103, $t104], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString")));
      {
        const $t113 = (await $.wv([$t103, $t104], "FormNominalCustomers", C, false));
        const $t114 = (await $.wv([$t103, $t104, $t113], "ExpressVariables", C, false));
        await $.wset([$t103, $t104, $t113, $t114], "custid", (await $.mv((await $.wv([$t103, $t104, $t113, $t114], "ExpBatchsDataSetKLIID", C, false)), "AsString")), C);
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["passpin"], C)), "AsString")));
        if ($.truthy($.ne((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "Editpasspin", C, false)), "Text")), ""))) {
          await $.mset((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "RH", (await $.wv([$t103, $t104, $t113, $t114], "true", C, false)));
        }
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["soname"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["doc_type"], C)), "AsInteger")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["passer"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["paspnum"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["doc_country"], C)), "AsVariant")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["paspplace"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["paspdate"], C)), "AsVariant")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["passexpire"], C)), "AsVariant")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["citizenship"], C)), "AsInteger")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["sex"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["fam_status"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["birthplace"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["birth_state"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["birthday"], C)), "AsVariant")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["adrs_state"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["city"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["reg_zip"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["phone_m"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["phone_h"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["e_mail"], C)), "AsString")));
        await $.mset((await $.wv([$t103, $t104, $t113, $t114], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["address"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "Work_Place")), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_place"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_cntr"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_city"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "db_tph_state")), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_state"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_zip"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_adress"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_phone"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_phext"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t103, $t104, $t113, $t114], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text", (await $.mv((await $.wcall([$t103, $t104, $t113, $t114], "FieldByName", ["work_phcode"], C)), "AsString")));
      }
    }
    {
      const $t115 = (await $.v(C, "ExpDataModule"));
      const $t116 = (await $.wv([$t115], "SendToDataSet", C, false));
      await $.stmt($.wcall([$t115, $t116], "Close", [], C));
      { const $t117 = await $.iset((await $.wv([$t115, $t116], "SQl", C, false)), [1], ""); if ($t117 !== undefined) { await $.wset([$t115, $t116], "SQl", $t117, C); } }
      { const $t118 = await $.iset((await $.wv([$t115, $t116], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mv((await $.wv([$t115, $t116], "ExpDataModule", C, false)), "ExpBatchsDataSetBKLIID")), "AsString")))); if ($t118 !== undefined) { await $.wset([$t115, $t116], "SQl", $t118, C); } }
      await $.stmt($.wcall([$t115, $t116], "Open", [], C));
      { const $t119 = (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["cust_type"], C)), "AsInteger"));
        if ($.eq($t119, 4)) {
          await $.mset((await $.wv([$t115, $t116], "RadioGroup2", C, false)), "ItemIndex", 0);
        }
        else if ($.eq($t119, 2)) {
          await $.mset((await $.wv([$t115, $t116], "RadioGroup2", C, false)), "ItemIndex", 2);
        }
        else if ($.eq($t119, 1)) {
          await $.mset((await $.wv([$t115, $t116], "RadioGroup2", C, false)), "ItemIndex", 1);
        }
        else if ($.eq($t119, 0)) {
          await $.mset((await $.wv([$t115, $t116], "RadioGroup2", C, false)), "ItemIndex", 3);
        }
      }
      { const $t120 = (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["nerezident"], C)), "AsInteger"));
        if ($.eq($t120, 1)) {
          await $.mset((await $.wv([$t115, $t116], "RadioButton3", C, false)), "Checked", (await $.wv([$t115, $t116], "true", C, false)));
        }
        else if ($.eq($t120, 0)) {
          await $.mset((await $.wv([$t115, $t116], "RadioButton4", C, false)), "Checked", (await $.wv([$t115, $t116], "true", C, false)));
        }
      }
      await $.mcall((await $.wv([$t115, $t116], "AccountDataSet1", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t115, $t116], "AccountDataSet1", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t115, $t116], "ExpBatchsDataSet", C, false)), "FieldByName", ["bkliid"])), "AsInteger"))])));
      { const $t121 = await $.iset((await $.mv((await $.wv([$t115, $t116], "AccountDataSet1", C, false)), "SQL")), [2], ""); if ($t121 !== undefined) { await $.mset((await $.wv([$t115, $t116], "AccountDataSet1", C, false)), "SQL", $t121); } }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t115, $t116], "ExpBatchsDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsVariant")), (await $.wv([$t115, $t116], "null", C, false))))) {
        { const $t122 = await $.iset((await $.mv((await $.wv([$t115, $t116], "AccountDataSet1", C, false)), "SQL")), [2], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t115, $t116], "ExpBatchsDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsString")))); if ($t122 !== undefined) { await $.mset((await $.wv([$t115, $t116], "AccountDataSet1", C, false)), "SQL", $t122); } }
      }
      await $.mcall((await $.wv([$t115, $t116], "AccountDataSet1", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t115, $t116], "RadioGroup2", C, false)), "ItemIndex")), 4))) {
        await $.mset((await $.wv([$t115, $t116], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["custname"], C)), "AsString")));
      } else {
        await $.mset((await $.wv([$t115, $t116], "EditLastNameII", C, false)), "Text", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t115, $t116], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t115, $t116], "EditSonameII", C, false)), "Text", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["soname"], C)), "AsString")));
      }
      await $.mset((await $.wv([$t115, $t116], "EditCustidII", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t115, $t116], "ExpDataModule", C, false)), "ExpBatchsDataSetBKLIID")), "AsString")));
      await $.mset((await $.wv([$t115, $t116], "EditPincodeII", C, false)), "Text", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t115, $t116], "CBoxPassPlaceII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t115, $t116], "EditSerialII", C, false)), "Text", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t115, $t116], "EditPassportII", C, false)), "Text", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t115, $t116], "FilialNameII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t115, $t116], "ExpBatchsDataSet", C, false)), "FieldByName", ["bfilial"])), "AsString")));
      await $.mset((await $.wv([$t115, $t116], "DBCBox_DocTYPEII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["paspplace"], C)), "AsString")));
      await $.mset((await $.wv([$t115, $t116], "DateEditII", C, false)), "Value", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["paspdate"], C)), "AsVariant")));
      await $.mset((await $.wv([$t115, $t116], "EditMobilII", C, false)), "Text", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["phone_m"], C)), "AsString")));
      await $.mset((await $.wv([$t115, $t116], "EditPhoneII", C, false)), "Text", (await $.mv((await $.wcall([$t115, $t116], "FieldByName", ["phone_h"], C)), "AsString")));
      await $.mset((await $.wv([$t115, $t116], "EditDate", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t115, $t116], "ExpBatchsDataSet", C, false)), "FieldByName", ["senddate"])), "AsString")));
      await $.mset((await $.wv([$t115, $t116], "EditTime", C, false)), "Text", (await $.wcall([$t115, $t116], "TimeToStr", [(await $.mv((await $.mcall((await $.wv([$t115, $t116], "ExpBatchsDataSet", C, false)), "FieldByName", ["senddatetime"])), "AsDateTime"))], C)));
      await $.mset((await $.wv([$t115, $t116], "Edit25", C, false)), "Text", (await $.mv((await $.wv([$t115, $t116], "ExpBatchsDataSetPASSWORD", C, false)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t115, $t116], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
        await $.mset((await $.wv([$t115, $t116], "SenderAccNoII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t115, $t116], "AccountDataSet1", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
      }
      await $.mset((await $.wv([$t115, $t116], "Memo1", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t115, $t116], "ExpBatchsDataSet", C, false)), "FieldByName", ["badd_inf"])), "AsString")));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "ExpFormNew")), "FiledIncoming")))) {
    {
      const $t123 = (await $.v(C, "ExpDataModule"));
      const $t124 = (await $.wv([$t123], "SendDataSet", C, false));
      await $.stmt($.wcall([$t123, $t124], "Close", [], C));
      { const $t125 = await $.iset((await $.wv([$t123, $t124], "SQl", C, false)), [1], ""); if ($t125 !== undefined) { await $.wset([$t123, $t124], "SQl", $t125, C); } }
      { const $t126 = await $.iset((await $.wv([$t123, $t124], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t123, $t124], "ExpIncomingDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t126 !== undefined) { await $.wset([$t123, $t124], "SQl", $t126, C); } }
      await $.stmt($.wcall([$t123, $t124], "Open", [], C));
      { const $t127 = (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["cust_type"], C)), "AsInteger"));
        if ($.eq($t127, 4)) {
          await $.mset((await $.wv([$t123, $t124], "RadioGroup1", C, false)), "ItemIndex", 0);
        }
        else if ($.eq($t127, 2)) {
          await $.mset((await $.wv([$t123, $t124], "RadioGroup1", C, false)), "ItemIndex", 2);
        }
        else if ($.eq($t127, 1)) {
          await $.mset((await $.wv([$t123, $t124], "RadioGroup1", C, false)), "ItemIndex", 1);
        }
        else if ($.eq($t127, 0)) {
          await $.mset((await $.wv([$t123, $t124], "RadioGroup1", C, false)), "ItemIndex", 3);
        }
      }
      { const $t128 = (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["nerezident"], C)), "AsInteger"));
        if ($.eq($t128, 1)) {
          await $.mset((await $.wv([$t123, $t124], "RadioButton1", C, false)), "Checked", (await $.wv([$t123, $t124], "true", C, false)));
        }
        else if ($.eq($t128, 0)) {
          await $.mset((await $.wv([$t123, $t124], "RadioButton2", C, false)), "Checked", (await $.wv([$t123, $t124], "true", C, false)));
        }
      }
      await $.mcall((await $.wv([$t123, $t124], "AccountDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t123, $t124], "AccountDataSet", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t123, $t124], "ExpIncomingDataSet", C, false)), "FieldByName", ["kliid"])), "AsInteger"))])));
      { const $t129 = await $.iset((await $.mv((await $.wv([$t123, $t124], "AccountDataSet", C, false)), "SQL")), [2], ""); if ($t129 !== undefined) { await $.mset((await $.wv([$t123, $t124], "AccountDataSet", C, false)), "SQL", $t129); } }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t123, $t124], "ExpIncomingDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (await $.wv([$t123, $t124], "null", C, false))))) {
        { const $t130 = await $.iset((await $.mv((await $.wv([$t123, $t124], "AccountDataSet", C, false)), "SQL")), [2], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t123, $t124], "ExpIncomingDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsString")))); if ($t130 !== undefined) { await $.mset((await $.wv([$t123, $t124], "AccountDataSet", C, false)), "SQL", $t130); } }
      }
      await $.mcall((await $.wv([$t123, $t124], "AccountDataSet", C, false)), "Open", []);
      await $.mcall((await $.wv([$t123, $t124], "FilialDataSet", C, false)), "Close", []);
      { const $t131 = await $.iset((await $.mv((await $.wv([$t123, $t124], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t131 !== undefined) { await $.mset((await $.wv([$t123, $t124], "FilialDataSet", C, false)), "SQL", $t131); } }
      { const $t132 = await $.iset((await $.mv((await $.wv([$t123, $t124], "FilialDataSet", C, false)), "SQL")), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t123, $t124], "ExpIncomingDataSet", C, false)), "fieldbyname", ["filial"])), "AsString")))); if ($t132 !== undefined) { await $.mset((await $.wv([$t123, $t124], "FilialDataSet", C, false)), "SQL", $t132); } }
      await $.mcall((await $.wv([$t123, $t124], "FilialDataSet", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t123, $t124], "RadioGroup1", C, false)), "ItemIndex")), 4))) {
        await $.mset((await $.wv([$t123, $t124], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["custname"], C)), "AsString")));
      } else {
        await $.mset((await $.wv([$t123, $t124], "EditLastNameI", C, false)), "Text", (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t123, $t124], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t123, $t124], "EditSonameI", C, false)), "Text", (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["soname"], C)), "AsString")));
      }
      await $.mset((await $.wv([$t123, $t124], "EditCustid", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t123, $t124], "ExpDataModule", C, false)), "ExpIncomingDataSetKLIID")), "AsString")));
      await $.mset((await $.wv([$t123, $t124], "EditPincodeI", C, false)), "Text", (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t123, $t124], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t123, $t124], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t123, $t124], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t123, $t124], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t123, $t124], "ValuteName", C, false)), "KeyValue", (await $.mv((await $.wv([$t123, $t124], "ExpIncomingDataSetVAL_COD", C, false)), "AsInteger")));
      await $.mset((await $.wv([$t123, $t124], "CMCurrencyEdit", C, false)), "Text", (await $.mv((await $.wv([$t123, $t124], "ExpIncomingDataSetAMOUNT", C, false)), "AsString")));
      await $.mset((await $.wv([$t123, $t124], "TransRefEdit", C, false)), "Text", (await $.mv((await $.wv([$t123, $t124], "ExpIncomingDataSetTRANS_REF", C, false)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t123, $t124], "RadioGroup1", C, false)), "ItemIndex")), 0))) {
        await $.mset((await $.wv([$t123, $t124], "SenderAccNo", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t123, $t124], "AccountDataSet", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
      }
      await $.mset((await $.wv([$t123, $t124], "RemitInfEdit", C, false)), "Text", (await $.mv((await $.wv([$t123, $t124], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString")));
    }
    {
      const $t133 = (await $.v(C, "ExpDataModule"));
      const $t134 = (await $.wv([$t133], "SendToDataSet", C, false));
      await $.stmt($.wcall([$t133, $t134], "Close", [], C));
      { const $t135 = await $.iset((await $.wv([$t133, $t134], "SQl", C, false)), [1], ""); if ($t135 !== undefined) { await $.wset([$t133, $t134], "SQl", $t135, C); } }
      { const $t136 = await $.iset((await $.wv([$t133, $t134], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mv((await $.wv([$t133, $t134], "ExpDataModule", C, false)), "ExpIncomingDataSetBKLIID")), "AsString")))); if ($t136 !== undefined) { await $.wset([$t133, $t134], "SQl", $t136, C); } }
      await $.stmt($.wcall([$t133, $t134], "Open", [], C));
      { const $t137 = (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["cust_type"], C)), "AsInteger"));
        if ($.eq($t137, 4)) {
          await $.mset((await $.wv([$t133, $t134], "RadioGroup2", C, false)), "ItemIndex", 0);
        }
        else if ($.eq($t137, 2)) {
          await $.mset((await $.wv([$t133, $t134], "RadioGroup2", C, false)), "ItemIndex", 2);
        }
        else if ($.eq($t137, 1)) {
          await $.mset((await $.wv([$t133, $t134], "RadioGroup2", C, false)), "ItemIndex", 1);
        }
        else if ($.eq($t137, 0)) {
          await $.mset((await $.wv([$t133, $t134], "RadioGroup2", C, false)), "ItemIndex", 3);
        }
      }
      { const $t138 = (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["nerezident"], C)), "AsInteger"));
        if ($.eq($t138, 1)) {
          await $.mset((await $.wv([$t133, $t134], "RadioButton3", C, false)), "Checked", (await $.wv([$t133, $t134], "true", C, false)));
        }
        else if ($.eq($t138, 0)) {
          await $.mset((await $.wv([$t133, $t134], "RadioButton4", C, false)), "Checked", (await $.wv([$t133, $t134], "true", C, false)));
        }
      }
      await $.mcall((await $.wv([$t133, $t134], "AccountDataSet1", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t133, $t134], "AccountDataSet1", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t133, $t134], "ExpIncomingDataSet", C, false)), "FieldByName", ["bkliid"])), "AsInteger"))])));
      { const $t139 = await $.iset((await $.mv((await $.wv([$t133, $t134], "AccountDataSet1", C, false)), "SQL")), [2], ""); if ($t139 !== undefined) { await $.mset((await $.wv([$t133, $t134], "AccountDataSet1", C, false)), "SQL", $t139); } }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t133, $t134], "ExpIncomingDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsVariant")), (await $.wv([$t133, $t134], "null", C, false))))) {
        { const $t140 = await $.iset((await $.mv((await $.wv([$t133, $t134], "AccountDataSet1", C, false)), "SQL")), [2], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t133, $t134], "ExpIncomingDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsString")))); if ($t140 !== undefined) { await $.mset((await $.wv([$t133, $t134], "AccountDataSet1", C, false)), "SQL", $t140); } }
      }
      await $.mcall((await $.wv([$t133, $t134], "AccountDataSet1", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t133, $t134], "RadioGroup2", C, false)), "ItemIndex")), 4))) {
        await $.mset((await $.wv([$t133, $t134], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["custname"], C)), "AsString")));
      } else {
        await $.mset((await $.wv([$t133, $t134], "EditLastNameII", C, false)), "Text", (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t133, $t134], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t133, $t134], "EditSonameII", C, false)), "Text", (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["soname"], C)), "AsString")));
      }
      await $.mset((await $.wv([$t133, $t134], "EditCustidII", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t133, $t134], "ExpDataModule", C, false)), "ExpIncomingDataSetBKLIID")), "AsString")));
      await $.mset((await $.wv([$t133, $t134], "EditPincodeII", C, false)), "Text", (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t133, $t134], "CBoxPassPlaceII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t133, $t134], "EditSerialII", C, false)), "Text", (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t133, $t134], "EditPassportII", C, false)), "Text", (await $.mv((await $.wcall([$t133, $t134], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t133, $t134], "FilialNameII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t133, $t134], "ExpIncomingDataSet", C, false)), "FieldByName", ["bfilial"])), "AsString")));
      await $.mset((await $.wv([$t133, $t134], "EditDate", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t133, $t134], "ExpIncomingDataSet", C, false)), "FieldByName", ["senddate"])), "AsString")));
      await $.mset((await $.wv([$t133, $t134], "EditTime", C, false)), "Text", (await $.wcall([$t133, $t134], "TimeToStr", [(await $.mv((await $.mcall((await $.wv([$t133, $t134], "ExpIncomingDataSet", C, false)), "FieldByName", ["senddatetime"])), "AsDateTime"))], C)));
      await $.mset((await $.wv([$t133, $t134], "Edit25", C, false)), "Text", "");
      if ($.truthy($.ne((await $.mv((await $.wv([$t133, $t134], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
        await $.mset((await $.wv([$t133, $t134], "SenderAccNoII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t133, $t134], "AccountDataSet1", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
      }
      await $.mset((await $.wv([$t133, $t134], "Memo1", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t133, $t134], "ExpIncomingDataSet", C, false)), "FieldByName", ["badd_inf"])), "AsString")));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "ExpFormNew")), "FieldBatchsArchive")))) {
    {
      const $t141 = (await $.v(C, "ExpDataModule"));
      const $t142 = (await $.wv([$t141], "SendDataSet", C, false));
      await $.stmt($.wcall([$t141, $t142], "Close", [], C));
      { const $t143 = await $.iset((await $.wv([$t141, $t142], "SQl", C, false)), [1], ""); if ($t143 !== undefined) { await $.wset([$t141, $t142], "SQl", $t143, C); } }
      { const $t144 = await $.iset((await $.wv([$t141, $t142], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t141, $t142], "ExpBatchsArchiveDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t144 !== undefined) { await $.wset([$t141, $t142], "SQl", $t144, C); } }
      await $.stmt($.wcall([$t141, $t142], "Open", [], C));
      { const $t145 = (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["cust_type"], C)), "AsInteger"));
        if ($.eq($t145, 4)) {
          await $.mset((await $.wv([$t141, $t142], "RadioGroup1", C, false)), "ItemIndex", 0);
        }
        else if ($.eq($t145, 2)) {
          await $.mset((await $.wv([$t141, $t142], "RadioGroup1", C, false)), "ItemIndex", 2);
        }
        else if ($.eq($t145, 1)) {
          await $.mset((await $.wv([$t141, $t142], "RadioGroup1", C, false)), "ItemIndex", 1);
        }
        else if ($.eq($t145, 0)) {
          await $.mset((await $.wv([$t141, $t142], "RadioGroup1", C, false)), "ItemIndex", 3);
        }
      }
      { const $t146 = (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["nerezident"], C)), "AsInteger"));
        if ($.eq($t146, 1)) {
          await $.mset((await $.wv([$t141, $t142], "RadioButton1", C, false)), "Checked", (await $.wv([$t141, $t142], "true", C, false)));
        }
        else if ($.eq($t146, 0)) {
          await $.mset((await $.wv([$t141, $t142], "RadioButton2", C, false)), "Checked", (await $.wv([$t141, $t142], "true", C, false)));
        }
      }
      await $.mcall((await $.wv([$t141, $t142], "AccountDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t141, $t142], "AccountDataSet", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t141, $t142], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["kliid"])), "AsInteger"))])));
      { const $t147 = await $.iset((await $.mv((await $.wv([$t141, $t142], "AccountDataSet", C, false)), "SQL")), [5], ""); if ($t147 !== undefined) { await $.mset((await $.wv([$t141, $t142], "AccountDataSet", C, false)), "SQL", $t147); } }
      if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.wv([$t141, $t142], "ExpBatchsDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (await $.wv([$t141, $t142], "null", C, false)))), async () => ($.ne((await $.mv((await $.mcall((await $.wv([$t141, $t142], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (-(1)))))))) {
        { const $t148 = await $.iset((await $.mv((await $.wv([$t141, $t142], "AccountDataSet", C, false)), "SQL")), [5], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t141, $t142], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsString")))); if ($t148 !== undefined) { await $.mset((await $.wv([$t141, $t142], "AccountDataSet", C, false)), "SQL", $t148); } }
      }
      await $.mcall((await $.wv([$t141, $t142], "AccountDataSet", C, false)), "Open", []);
      await $.mcall((await $.wv([$t141, $t142], "FilialDataSet", C, false)), "Close", []);
      { const $t149 = await $.iset((await $.mv((await $.wv([$t141, $t142], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t149 !== undefined) { await $.mset((await $.wv([$t141, $t142], "FilialDataSet", C, false)), "SQL", $t149); } }
      { const $t150 = await $.iset((await $.mv((await $.wv([$t141, $t142], "FilialDataSet", C, false)), "SQL")), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t141, $t142], "ExpBatchsArchiveDataSet", C, false)), "fieldbyname", ["filial"])), "AsString")))); if ($t150 !== undefined) { await $.mset((await $.wv([$t141, $t142], "FilialDataSet", C, false)), "SQL", $t150); } }
      await $.mcall((await $.wv([$t141, $t142], "FilialDataSet", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t141, $t142], "RadioGroup1", C, false)), "ItemIndex")), 4))) {
        await $.mset((await $.wv([$t141, $t142], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["custname"], C)), "AsString")));
      } else {
        await $.mset((await $.wv([$t141, $t142], "EditLastNameI", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142], "EditSonameI", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["soname"], C)), "AsString")));
      }
      await $.mset((await $.wv([$t141, $t142], "EditCustid", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t141, $t142], "ExpDataModule", C, false)), "ExpBatchsDataSetKLIID")), "AsString")));
      await $.mset((await $.wv([$t141, $t142], "EditPincodeI", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t141, $t142], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t141, $t142], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t141, $t142], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t141, $t142], "DBCBox_DocTYPEI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["paspplace"], C)), "AsString")));
      await $.mset((await $.wv([$t141, $t142], "DateEditI", C, false)), "Value", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["paspdate"], C)), "AsVariant")));
      await $.mset((await $.wv([$t141, $t142], "EditMobilI", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["phone_m"], C)), "AsString")));
      await $.mset((await $.wv([$t141, $t142], "EditPhoneI", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142], "FieldByName", ["phone_h"], C)), "AsString")));
      await $.mset((await $.wv([$t141, $t142], "ValuteName", C, false)), "KeyValue", (await $.mv((await $.wv([$t141, $t142], "ExpBatchsDataSetVAL_COD", C, false)), "AsInteger")));
      await $.mset((await $.wv([$t141, $t142], "CMCurrencyEdit", C, false)), "Text", (await $.mv((await $.wv([$t141, $t142], "ExpBatchsDataSetAMOUNT", C, false)), "AsString")));
      await $.mset((await $.wv([$t141, $t142], "TransRefEdit", C, false)), "Text", (await $.mv((await $.wv([$t141, $t142], "ExpBatchsDataSetTRANS_REF", C, false)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t141, $t142], "RadioGroup1", C, false)), "ItemIndex")), 0))) {
        await $.mset((await $.wv([$t141, $t142], "SenderAccNo", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t141, $t142], "AccountDataSet", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
      }
      await $.mset((await $.wv([$t141, $t142], "RemitInfEdit", C, false)), "Text", (await $.mv((await $.wv([$t141, $t142], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString")));
      {
        const $t151 = (await $.wv([$t141, $t142], "FormNominalCustomers", C, false));
        const $t152 = (await $.wv([$t141, $t142, $t151], "ExpressVariables", C, false));
        await $.wset([$t141, $t142, $t151, $t152], "custid", (await $.mv((await $.wv([$t141, $t142, $t151, $t152], "ExpBatchsDataSetKLIID", C, false)), "AsString")), C);
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["passpin"], C)), "AsString")));
        if ($.truthy($.ne((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "Editpasspin", C, false)), "Text")), ""))) {
          await $.mset((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "RH", (await $.wv([$t141, $t142, $t151, $t152], "true", C, false)));
        }
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["soname"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["doc_type"], C)), "AsInteger")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["passer"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["paspnum"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["doc_country"], C)), "AsVariant")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["paspplace"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["paspdate"], C)), "AsVariant")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["passexpire"], C)), "AsVariant")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["citizenship"], C)), "AsInteger")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["sex"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["fam_status"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["birthplace"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["birth_state"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["birthday"], C)), "AsVariant")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["adrs_state"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["city"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["reg_zip"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["phone_m"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["phone_h"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["e_mail"], C)), "AsString")));
        await $.mset((await $.wv([$t141, $t142, $t151, $t152], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["address"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "Work_Place")), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_place"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_cntr"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_city"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "db_tph_state")), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_state"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_zip"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_adress"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_phone"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_phext"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t141, $t142, $t151, $t152], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text", (await $.mv((await $.wcall([$t141, $t142, $t151, $t152], "FieldByName", ["work_phcode"], C)), "AsString")));
      }
    }
    {
      const $t153 = (await $.v(C, "ExpDataModule"));
      const $t154 = (await $.wv([$t153], "SendToDataSet", C, false));
      await $.stmt($.wcall([$t153, $t154], "Close", [], C));
      { const $t155 = await $.iset((await $.wv([$t153, $t154], "SQl", C, false)), [1], ""); if ($t155 !== undefined) { await $.wset([$t153, $t154], "SQl", $t155, C); } }
      { const $t156 = await $.iset((await $.wv([$t153, $t154], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mv((await $.wv([$t153, $t154], "ExpDataModule", C, false)), "ExpBatchsDataSetBKLIID")), "AsString")))); if ($t156 !== undefined) { await $.wset([$t153, $t154], "SQl", $t156, C); } }
      await $.stmt($.wcall([$t153, $t154], "Open", [], C));
      { const $t157 = (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["cust_type"], C)), "AsInteger"));
        if ($.eq($t157, 4)) {
          await $.mset((await $.wv([$t153, $t154], "RadioGroup2", C, false)), "ItemIndex", 0);
        }
        else if ($.eq($t157, 2)) {
          await $.mset((await $.wv([$t153, $t154], "RadioGroup2", C, false)), "ItemIndex", 2);
        }
        else if ($.eq($t157, 1)) {
          await $.mset((await $.wv([$t153, $t154], "RadioGroup2", C, false)), "ItemIndex", 1);
        }
        else if ($.eq($t157, 0)) {
          await $.mset((await $.wv([$t153, $t154], "RadioGroup2", C, false)), "ItemIndex", 3);
        }
      }
      { const $t158 = (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["nerezident"], C)), "AsInteger"));
        if ($.eq($t158, 1)) {
          await $.mset((await $.wv([$t153, $t154], "RadioButton3", C, false)), "Checked", (await $.wv([$t153, $t154], "true", C, false)));
        }
        else if ($.eq($t158, 0)) {
          await $.mset((await $.wv([$t153, $t154], "RadioButton4", C, false)), "Checked", (await $.wv([$t153, $t154], "true", C, false)));
        }
      }
      await $.mcall((await $.wv([$t153, $t154], "AccountDataSet1", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t153, $t154], "AccountDataSet1", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t153, $t154], "ExpBatchsDataSet", C, false)), "FieldByName", ["bkliid"])), "AsInteger"))])));
      { const $t159 = await $.iset((await $.mv((await $.wv([$t153, $t154], "AccountDataSet1", C, false)), "SQL")), [2], ""); if ($t159 !== undefined) { await $.mset((await $.wv([$t153, $t154], "AccountDataSet1", C, false)), "SQL", $t159); } }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t153, $t154], "ExpBatchsDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsVariant")), (await $.wv([$t153, $t154], "null", C, false))))) {
        { const $t160 = await $.iset((await $.mv((await $.wv([$t153, $t154], "AccountDataSet1", C, false)), "SQL")), [2], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t153, $t154], "ExpBatchsDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsString")))); if ($t160 !== undefined) { await $.mset((await $.wv([$t153, $t154], "AccountDataSet1", C, false)), "SQL", $t160); } }
      }
      await $.mcall((await $.wv([$t153, $t154], "AccountDataSet1", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t153, $t154], "RadioGroup2", C, false)), "ItemIndex")), 4))) {
        await $.mset((await $.wv([$t153, $t154], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["custname"], C)), "AsString")));
      } else {
        await $.mset((await $.wv([$t153, $t154], "EditLastNameII", C, false)), "Text", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t153, $t154], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t153, $t154], "EditSonameII", C, false)), "Text", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["soname"], C)), "AsString")));
      }
      await $.mset((await $.wv([$t153, $t154], "EditCustidII", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t153, $t154], "ExpDataModule", C, false)), "ExpBatchsDataSetBKLIID")), "AsString")));
      await $.mset((await $.wv([$t153, $t154], "EditPincodeII", C, false)), "Text", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t153, $t154], "CBoxPassPlaceII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t153, $t154], "EditSerialII", C, false)), "Text", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t153, $t154], "EditPassportII", C, false)), "Text", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t153, $t154], "FilialNameII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t153, $t154], "ExpBatchsDataSet", C, false)), "FieldByName", ["bfilial"])), "AsString")));
      await $.mset((await $.wv([$t153, $t154], "DBCBox_DocTYPEII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["paspplace"], C)), "AsString")));
      await $.mset((await $.wv([$t153, $t154], "DateEditII", C, false)), "Value", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["paspdate"], C)), "AsVariant")));
      await $.mset((await $.wv([$t153, $t154], "EditMobilII", C, false)), "Text", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["phone_m"], C)), "AsString")));
      await $.mset((await $.wv([$t153, $t154], "EditPhoneII", C, false)), "Text", (await $.mv((await $.wcall([$t153, $t154], "FieldByName", ["phone_h"], C)), "AsString")));
      await $.mset((await $.wv([$t153, $t154], "EditDate", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t153, $t154], "ExpBatchsDataSet", C, false)), "FieldByName", ["senddate"])), "AsString")));
      await $.mset((await $.wv([$t153, $t154], "EditTime", C, false)), "Text", (await $.wcall([$t153, $t154], "TimeToStr", [(await $.mv((await $.mcall((await $.wv([$t153, $t154], "ExpBatchsDataSet", C, false)), "FieldByName", ["senddatetime"])), "AsDateTime"))], C)));
      await $.mset((await $.wv([$t153, $t154], "Edit25", C, false)), "Text", (await $.mv((await $.wv([$t153, $t154], "ExpBatchsDataSetPASSWORD", C, false)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t153, $t154], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
        await $.mset((await $.wv([$t153, $t154], "SenderAccNoII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t153, $t154], "AccountDataSet1", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
      }
      await $.mset((await $.wv([$t153, $t154], "Memo1", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t153, $t154], "ExpBatchsDataSet", C, false)), "FieldByName", ["badd_inf"])), "AsString")));
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "ExpFormNew")), "FiledIncoming")))) {
    {
      const $t161 = (await $.v(C, "ExpDataModule"));
      const $t162 = (await $.wv([$t161], "SendDataSet", C, false));
      await $.stmt($.wcall([$t161, $t162], "Close", [], C));
      { const $t163 = await $.iset((await $.wv([$t161, $t162], "SQl", C, false)), [1], ""); if ($t163 !== undefined) { await $.wset([$t161, $t162], "SQl", $t163, C); } }
      { const $t164 = await $.iset((await $.wv([$t161, $t162], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t161, $t162], "ExpIncomingDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t164 !== undefined) { await $.wset([$t161, $t162], "SQl", $t164, C); } }
      await $.stmt($.wcall([$t161, $t162], "Open", [], C));
      { const $t165 = (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["cust_type"], C)), "AsInteger"));
        if ($.eq($t165, 4)) {
          await $.mset((await $.wv([$t161, $t162], "RadioGroup1", C, false)), "ItemIndex", 0);
        }
        else if ($.eq($t165, 2)) {
          await $.mset((await $.wv([$t161, $t162], "RadioGroup1", C, false)), "ItemIndex", 2);
        }
        else if ($.eq($t165, 1)) {
          await $.mset((await $.wv([$t161, $t162], "RadioGroup1", C, false)), "ItemIndex", 1);
        }
        else if ($.eq($t165, 0)) {
          await $.mset((await $.wv([$t161, $t162], "RadioGroup1", C, false)), "ItemIndex", 3);
        }
      }
      { const $t166 = (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["nerezident"], C)), "AsInteger"));
        if ($.eq($t166, 1)) {
          await $.mset((await $.wv([$t161, $t162], "RadioButton1", C, false)), "Checked", (await $.wv([$t161, $t162], "true", C, false)));
        }
        else if ($.eq($t166, 0)) {
          await $.mset((await $.wv([$t161, $t162], "RadioButton2", C, false)), "Checked", (await $.wv([$t161, $t162], "true", C, false)));
        }
      }
      await $.mcall((await $.wv([$t161, $t162], "AccountDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t161, $t162], "AccountDataSet", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t161, $t162], "ExpIncomingDataSet", C, false)), "FieldByName", ["kliid"])), "AsInteger"))])));
      { const $t167 = await $.iset((await $.mv((await $.wv([$t161, $t162], "AccountDataSet", C, false)), "SQL")), [2], ""); if ($t167 !== undefined) { await $.mset((await $.wv([$t161, $t162], "AccountDataSet", C, false)), "SQL", $t167); } }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t161, $t162], "ExpIncomingDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (await $.wv([$t161, $t162], "null", C, false))))) {
        { const $t168 = await $.iset((await $.mv((await $.wv([$t161, $t162], "AccountDataSet", C, false)), "SQL")), [2], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t161, $t162], "ExpIncomingDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsString")))); if ($t168 !== undefined) { await $.mset((await $.wv([$t161, $t162], "AccountDataSet", C, false)), "SQL", $t168); } }
      }
      await $.mcall((await $.wv([$t161, $t162], "AccountDataSet", C, false)), "Open", []);
      await $.mcall((await $.wv([$t161, $t162], "FilialDataSet", C, false)), "Close", []);
      { const $t169 = await $.iset((await $.mv((await $.wv([$t161, $t162], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t169 !== undefined) { await $.mset((await $.wv([$t161, $t162], "FilialDataSet", C, false)), "SQL", $t169); } }
      { const $t170 = await $.iset((await $.mv((await $.wv([$t161, $t162], "FilialDataSet", C, false)), "SQL")), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t161, $t162], "ExpIncomingDataSet", C, false)), "fieldbyname", ["filial"])), "AsString")))); if ($t170 !== undefined) { await $.mset((await $.wv([$t161, $t162], "FilialDataSet", C, false)), "SQL", $t170); } }
      await $.mcall((await $.wv([$t161, $t162], "FilialDataSet", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t161, $t162], "RadioGroup1", C, false)), "ItemIndex")), 4))) {
        await $.mset((await $.wv([$t161, $t162], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["custname"], C)), "AsString")));
      } else {
        await $.mset((await $.wv([$t161, $t162], "EditLastNameI", C, false)), "Text", (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t161, $t162], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t161, $t162], "EditSonameI", C, false)), "Text", (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["soname"], C)), "AsString")));
      }
      await $.mset((await $.wv([$t161, $t162], "EditCustid", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t161, $t162], "ExpDataModule", C, false)), "ExpIncomingDataSetKLIID")), "AsString")));
      await $.mset((await $.wv([$t161, $t162], "EditPincodeI", C, false)), "Text", (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t161, $t162], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t161, $t162], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t161, $t162], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t161, $t162], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t161, $t162], "ValuteName", C, false)), "KeyValue", (await $.mv((await $.wv([$t161, $t162], "ExpIncomingDataSetVAL_COD", C, false)), "AsInteger")));
      await $.mset((await $.wv([$t161, $t162], "CMCurrencyEdit", C, false)), "Text", (await $.mv((await $.wv([$t161, $t162], "ExpIncomingDataSetAMOUNT", C, false)), "AsString")));
      await $.mset((await $.wv([$t161, $t162], "TransRefEdit", C, false)), "Text", (await $.mv((await $.wv([$t161, $t162], "ExpIncomingDataSetTRANS_REF", C, false)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t161, $t162], "RadioGroup1", C, false)), "ItemIndex")), 0))) {
        await $.mset((await $.wv([$t161, $t162], "SenderAccNo", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t161, $t162], "AccountDataSet", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
      }
      await $.mset((await $.wv([$t161, $t162], "RemitInfEdit", C, false)), "Text", (await $.mv((await $.wv([$t161, $t162], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString")));
    }
    {
      const $t171 = (await $.v(C, "ExpDataModule"));
      const $t172 = (await $.wv([$t171], "SendToDataSet", C, false));
      await $.stmt($.wcall([$t171, $t172], "Close", [], C));
      { const $t173 = await $.iset((await $.wv([$t171, $t172], "SQl", C, false)), [1], ""); if ($t173 !== undefined) { await $.wset([$t171, $t172], "SQl", $t173, C); } }
      { const $t174 = await $.iset((await $.wv([$t171, $t172], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mv((await $.wv([$t171, $t172], "ExpDataModule", C, false)), "ExpIncomingDataSetBKLIID")), "AsString")))); if ($t174 !== undefined) { await $.wset([$t171, $t172], "SQl", $t174, C); } }
      await $.stmt($.wcall([$t171, $t172], "Open", [], C));
      { const $t175 = (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["cust_type"], C)), "AsInteger"));
        if ($.eq($t175, 4)) {
          await $.mset((await $.wv([$t171, $t172], "RadioGroup2", C, false)), "ItemIndex", 0);
        }
        else if ($.eq($t175, 2)) {
          await $.mset((await $.wv([$t171, $t172], "RadioGroup2", C, false)), "ItemIndex", 2);
        }
        else if ($.eq($t175, 1)) {
          await $.mset((await $.wv([$t171, $t172], "RadioGroup2", C, false)), "ItemIndex", 1);
        }
        else if ($.eq($t175, 0)) {
          await $.mset((await $.wv([$t171, $t172], "RadioGroup2", C, false)), "ItemIndex", 3);
        }
      }
      { const $t176 = (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["nerezident"], C)), "AsInteger"));
        if ($.eq($t176, 1)) {
          await $.mset((await $.wv([$t171, $t172], "RadioButton3", C, false)), "Checked", (await $.wv([$t171, $t172], "true", C, false)));
        }
        else if ($.eq($t176, 0)) {
          await $.mset((await $.wv([$t171, $t172], "RadioButton4", C, false)), "Checked", (await $.wv([$t171, $t172], "true", C, false)));
        }
      }
      await $.mcall((await $.wv([$t171, $t172], "AccountDataSet1", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t171, $t172], "AccountDataSet1", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t171, $t172], "ExpIncomingDataSet", C, false)), "FieldByName", ["bkliid"])), "AsInteger"))])));
      { const $t177 = await $.iset((await $.mv((await $.wv([$t171, $t172], "AccountDataSet1", C, false)), "SQL")), [2], ""); if ($t177 !== undefined) { await $.mset((await $.wv([$t171, $t172], "AccountDataSet1", C, false)), "SQL", $t177); } }
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t171, $t172], "ExpIncomingDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsVariant")), (await $.wv([$t171, $t172], "null", C, false))))) {
        { const $t178 = await $.iset((await $.mv((await $.wv([$t171, $t172], "AccountDataSet1", C, false)), "SQL")), [2], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t171, $t172], "ExpIncomingDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsString")))); if ($t178 !== undefined) { await $.mset((await $.wv([$t171, $t172], "AccountDataSet1", C, false)), "SQL", $t178); } }
      }
      await $.mcall((await $.wv([$t171, $t172], "AccountDataSet1", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t171, $t172], "RadioGroup2", C, false)), "ItemIndex")), 4))) {
        await $.mset((await $.wv([$t171, $t172], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["custname"], C)), "AsString")));
      } else {
        await $.mset((await $.wv([$t171, $t172], "EditLastNameII", C, false)), "Text", (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t171, $t172], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["name"], C)), "AsString")));
        await $.mset((await $.wv([$t171, $t172], "EditSonameII", C, false)), "Text", (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["soname"], C)), "AsString")));
      }
      await $.mset((await $.wv([$t171, $t172], "EditCustidII", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t171, $t172], "ExpDataModule", C, false)), "ExpIncomingDataSetBKLIID")), "AsString")));
      await $.mset((await $.wv([$t171, $t172], "EditPincodeII", C, false)), "Text", (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t171, $t172], "CBoxPassPlaceII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t171, $t172], "EditSerialII", C, false)), "Text", (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t171, $t172], "EditPassportII", C, false)), "Text", (await $.mv((await $.wcall([$t171, $t172], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t171, $t172], "FilialNameII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t171, $t172], "ExpIncomingDataSet", C, false)), "FieldByName", ["bfilial"])), "AsString")));
      await $.mset((await $.wv([$t171, $t172], "EditDate", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t171, $t172], "ExpIncomingDataSet", C, false)), "FieldByName", ["senddate"])), "AsString")));
      await $.mset((await $.wv([$t171, $t172], "EditTime", C, false)), "Text", (await $.wcall([$t171, $t172], "TimeToStr", [(await $.mv((await $.mcall((await $.wv([$t171, $t172], "ExpIncomingDataSet", C, false)), "FieldByName", ["senddatetime"])), "AsDateTime"))], C)));
      await $.mset((await $.wv([$t171, $t172], "Edit25", C, false)), "Text", "");
      if ($.truthy($.ne((await $.mv((await $.wv([$t171, $t172], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
        await $.mset((await $.wv([$t171, $t172], "SenderAccNoII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t171, $t172], "AccountDataSet1", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
      }
      await $.mset((await $.wv([$t171, $t172], "Memo1", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t171, $t172], "ExpIncomingDataSet", C, false)), "FieldByName", ["badd_inf"])), "AsString")));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "ExpUpdate", async function ExpUpdate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "result": 0};
  {
    const $t179 = (await $.v(C, "ExpDataModule"));
    const $t180 = (await $.wv([$t179], "SendDataSet", C, false));
    await $.stmt($.wcall([$t179, $t180], "Close", [], C));
    { const $t181 = await $.iset((await $.wv([$t179, $t180], "SQl", C, false)), [1], ""); if ($t181 !== undefined) { await $.wset([$t179, $t180], "SQl", $t181, C); } }
    { const $t182 = await $.iset((await $.wv([$t179, $t180], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t182 !== undefined) { await $.wset([$t179, $t180], "SQl", $t182, C); } }
    await $.stmt($.wcall([$t179, $t180], "Open", [], C));
    { const $t183 = (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["cust_type"], C)), "AsInteger"));
      if ($.eq($t183, 4)) {
        await $.mset((await $.wv([$t179, $t180], "RadioGroup1", C, false)), "ItemIndex", 0);
      }
      else if ($.eq($t183, 2)) {
        await $.mset((await $.wv([$t179, $t180], "RadioGroup1", C, false)), "ItemIndex", 2);
      }
      else if ($.eq($t183, 1)) {
        await $.mset((await $.wv([$t179, $t180], "RadioGroup1", C, false)), "ItemIndex", 1);
      }
      else if ($.eq($t183, 0)) {
        await $.mset((await $.wv([$t179, $t180], "RadioGroup1", C, false)), "ItemIndex", 3);
      }
    }
    { const $t184 = (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["nerezident"], C)), "AsInteger"));
      if ($.eq($t184, 1)) {
        await $.mset((await $.wv([$t179, $t180], "RadioButton1", C, false)), "Checked", (await $.wv([$t179, $t180], "true", C, false)));
      }
      else if ($.eq($t184, 0)) {
        await $.mset((await $.wv([$t179, $t180], "RadioButton2", C, false)), "Checked", (await $.wv([$t179, $t180], "true", C, false)));
      }
    }
    await $.mcall((await $.wv([$t179, $t180], "AccountDataSet", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t179, $t180], "AccountDataSet", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "FieldByName", ["kliid"])), "AsInteger"))])));
    { const $t185 = await $.iset((await $.mv((await $.wv([$t179, $t180], "AccountDataSet", C, false)), "SQL")), [5], ""); if ($t185 !== undefined) { await $.mset((await $.wv([$t179, $t180], "AccountDataSet", C, false)), "SQL", $t185); } }
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (await $.wv([$t179, $t180], "null", C, false)))), async () => ($.ne((await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (-(1)))))))) {
      { const $t186 = await $.iset((await $.mv((await $.wv([$t179, $t180], "AccountDataSet", C, false)), "SQL")), [5], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "FieldByName", ["debetaccid"])), "AsString")))); if ($t186 !== undefined) { await $.mset((await $.wv([$t179, $t180], "AccountDataSet", C, false)), "SQL", $t186); } }
    }
    await $.mcall((await $.wv([$t179, $t180], "AccountDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t179, $t180], "FilialDataSet", C, false)), "Close", []);
    { const $t187 = await $.iset((await $.mv((await $.wv([$t179, $t180], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t187 !== undefined) { await $.mset((await $.wv([$t179, $t180], "FilialDataSet", C, false)), "SQL", $t187); } }
    { const $t188 = await $.iset((await $.mv((await $.wv([$t179, $t180], "FilialDataSet", C, false)), "SQL")), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "fieldbyname", ["filial"])), "AsString")))); if ($t188 !== undefined) { await $.mset((await $.wv([$t179, $t180], "FilialDataSet", C, false)), "SQL", $t188); } }
    await $.mcall((await $.wv([$t179, $t180], "FilialDataSet", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t179, $t180], "RadioGroup1", C, false)), "ItemIndex")), 4))) {
      await $.mset((await $.wv([$t179, $t180], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["custname"], C)), "AsString")));
    } else {
      await $.mset((await $.wv([$t179, $t180], "EditLastNameI", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["lastname"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180], "EditSonameI", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["soname"], C)), "AsString")));
    }
    await $.mset((await $.wv([$t179, $t180], "EditCustid", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "fieldbyname", ["kliid"])), "AsString")));
    await $.mset((await $.wv([$t179, $t180], "EditPincodeI", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["passpin"], C)), "AsString")));
    await $.mset((await $.wv([$t179, $t180], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["doc_type"], C)), "AsInteger")));
    await $.mset((await $.wv([$t179, $t180], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["passer"], C)), "AsString")));
    await $.mset((await $.wv([$t179, $t180], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["paspnum"], C)), "AsString")));
    await $.mset((await $.wv([$t179, $t180], "DBCBox_DocTYPEI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["paspplace"], C)), "AsString")));
    await $.mset((await $.wv([$t179, $t180], "DateEditI", C, false)), "Value", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["paspdate"], C)), "AsVariant")));
    await $.mset((await $.wv([$t179, $t180], "EditMobilI", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["phone_m"], C)), "AsString")));
    await $.mset((await $.wv([$t179, $t180], "EditPhoneI", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180], "FieldByName", ["phone_h"], C)), "AsString")));
    await $.mset((await $.wv([$t179, $t180], "ValuteName", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "fieldbyname", ["VAL_COD"])), "AsInteger")));
    await $.mset((await $.wv([$t179, $t180], "CMCurrencyEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "fieldbyname", ["AMOUNT"])), "AsString")));
    await $.mset((await $.wv([$t179, $t180], "TransRefEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "fieldbyname", ["TRANS_REF"])), "AsString")));
    await $.mset((await $.wv([$t179, $t180], "RemitInfEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "ExpIncomingPassword", C, false)), "fieldbyname", ["REMIT_INF"])), "AsString")));
    if ($.truthy($.ne((await $.mv((await $.wv([$t179, $t180], "RadioGroup1", C, false)), "ItemIndex")), 0))) {
      await $.mset((await $.wv([$t179, $t180], "SenderAccNo", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t179, $t180], "AccountDataSet", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
    }
    await $.stmt($.wcall([$t179, $t180], "FormDisable", [], C));
    {
      const $t189 = (await $.wv([$t179, $t180], "FormNominalCustomers", C, false));
      const $t190 = (await $.wv([$t179, $t180, $t189], "ExpressVariables", C, false));
      await $.wset([$t179, $t180, $t189, $t190], "custid", (await $.mv((await $.mcall((await $.wv([$t179, $t180, $t189, $t190], "ExpIncomingPassword", C, false)), "fieldbyname", ["kliid"])), "AsString")), C);
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["passpin"], C)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "Editpasspin", C, false)), "Text")), ""))) {
        await $.mset((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "RH", (await $.wv([$t179, $t180, $t189, $t190], "true", C, false)));
      }
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["lastname"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["soname"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["doc_country"], C)), "AsVariant")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["paspplace"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["paspdate"], C)), "AsVariant")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["passexpire"], C)), "AsVariant")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["citizenship"], C)), "AsInteger")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["sex"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["fam_status"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["birthplace"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["birth_state"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["birthday"], C)), "AsVariant")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["adrs_state"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["city"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["reg_zip"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["phone_m"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["phone_h"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["e_mail"], C)), "AsString")));
      await $.mset((await $.wv([$t179, $t180, $t189, $t190], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["address"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "Work_Place")), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_place"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_cntr"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_city"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "db_tph_state")), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_state"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_zip"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_adress"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_phone"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_phext"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t179, $t180, $t189, $t190], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text", (await $.mv((await $.wcall([$t179, $t180, $t189, $t190], "FieldByName", ["work_phcode"], C)), "AsString")));
    }
  }
  {
    const $t191 = (await $.v(C, "ExpDataModule"));
    const $t192 = (await $.wv([$t191], "SendToDataSet", C, false));
    await $.stmt($.wcall([$t191, $t192], "Close", [], C));
    { const $t193 = await $.iset((await $.wv([$t191, $t192], "SQl", C, false)), [1], ""); if ($t193 !== undefined) { await $.wset([$t191, $t192], "SQl", $t193, C); } }
    { const $t194 = await $.iset((await $.wv([$t191, $t192], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "fieldbyname", ["BKLIID"])), "AsString")))); if ($t194 !== undefined) { await $.wset([$t191, $t192], "SQl", $t194, C); } }
    await $.stmt($.wcall([$t191, $t192], "Open", [], C));
    { const $t195 = (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["cust_type"], C)), "AsInteger"));
      if ($.eq($t195, 4)) {
        await $.mset((await $.wv([$t191, $t192], "RadioGroup2", C, false)), "ItemIndex", 0);
      }
      else if ($.eq($t195, 2)) {
        await $.mset((await $.wv([$t191, $t192], "RadioGroup2", C, false)), "ItemIndex", 2);
      }
      else if ($.eq($t195, 1)) {
        await $.mset((await $.wv([$t191, $t192], "RadioGroup2", C, false)), "ItemIndex", 1);
      }
      else if ($.eq($t195, 0)) {
        await $.mset((await $.wv([$t191, $t192], "RadioGroup2", C, false)), "ItemIndex", 3);
      }
    }
    { const $t196 = (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["nerezident"], C)), "AsInteger"));
      if ($.eq($t196, 1)) {
        await $.mset((await $.wv([$t191, $t192], "RadioButton3", C, false)), "Checked", (await $.wv([$t191, $t192], "true", C, false)));
      }
      else if ($.eq($t196, 0)) {
        await $.mset((await $.wv([$t191, $t192], "RadioButton4", C, false)), "Checked", (await $.wv([$t191, $t192], "true", C, false)));
      }
    }
    await $.mcall((await $.wv([$t191, $t192], "AccountDataSet1", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t191, $t192], "AccountDataSet1", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["bkliid"])), "AsInteger"))])));
    { const $t197 = await $.iset((await $.mv((await $.wv([$t191, $t192], "AccountDataSet1", C, false)), "SQL")), [2], ""); if ($t197 !== undefined) { await $.mset((await $.wv([$t191, $t192], "AccountDataSet1", C, false)), "SQL", $t197); } }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsVariant")), (await $.wv([$t191, $t192], "null", C, false))))) {
      { const $t198 = await $.iset((await $.mv((await $.wv([$t191, $t192], "AccountDataSet1", C, false)), "SQL")), [2], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["kreditaccid"])), "AsString")))); if ($t198 !== undefined) { await $.mset((await $.wv([$t191, $t192], "AccountDataSet1", C, false)), "SQL", $t198); } }
    }
    await $.mcall((await $.wv([$t191, $t192], "AccountDataSet1", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t191, $t192], "RadioGroup2", C, false)), "ItemIndex")), 4))) {
      await $.mset((await $.wv([$t191, $t192], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["custname"], C)), "AsString")));
    } else {
      await $.mset((await $.wv([$t191, $t192], "EditLastNameII", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["lastname"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192], "EditSonameII", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["soname"], C)), "AsString")));
    }
    await $.mset((await $.wv([$t191, $t192], "EditCustidII", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["bkliid"])), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "EditPincodeII", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["passpin"], C)), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "CBoxPassPlaceII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["doc_type"], C)), "AsInteger")));
    await $.mset((await $.wv([$t191, $t192], "EditSerialII", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["passer"], C)), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "EditPassportII", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["paspnum"], C)), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "FilialNameII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["bfilial"])), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "DBCBox_DocTYPEII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["paspplace"], C)), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "DateEditII", C, false)), "Value", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["paspdate"], C)), "AsVariant")));
    await $.mset((await $.wv([$t191, $t192], "EditMobilII", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["phone_m"], C)), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "EditPhoneII", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192], "FieldByName", ["phone_h"], C)), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "EditDate", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["senddate"])), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "EditTime", C, false)), "Text", (await $.wcall([$t191, $t192], "TimeToStr", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["senddatetime"])), "AsDateTime"))], C)));
    await $.mset((await $.wv([$t191, $t192], "Edit25", C, false)), "Text", "*********");
    {
      const $t199 = (await $.wv([$t191, $t192], "FormNominalCustomers", C, false));
      const $t200 = (await $.wv([$t191, $t192, $t199], "SendDataSet", C, false));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["lastname"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["soname"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["doc_country"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["paspplace"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["paspdate"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["passexpire"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["citizenship"], C)), "AsInteger")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["sex"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["fam_status"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["birthplace"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["birth_state"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["birthday"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["adrs_state"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["city"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["reg_zip"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["phone_m"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["phone_h"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["e_mail"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["address"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "Work_Place", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_place"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "Address_type", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "CountryByConctType", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_cntr"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "CityByConctType", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_city"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "db_tph_state", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_state"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "DB_tph_zip", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_zip"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "db_tph_adress", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_adress"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "tph_contact_type", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "tph_communication_type", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "tph_country_prefix", C, false)), "KeyValue", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "Db_tph_number", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_phone"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "Db_tph_extension", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_phext"], C)), "AsString")));
      await $.mset((await $.wv([$t191, $t192, $t199, $t200], "Db_tph_cod", C, false)), "Text", (await $.mv((await $.wcall([$t191, $t192, $t199, $t200], "FieldByName", ["work_phcode"], C)), "AsString")));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t191, $t192], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
      await $.mset((await $.wv([$t191, $t192], "SenderAccNoII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t191, $t192], "AccountDataSet1", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
    }
    await $.mset((await $.wv([$t191, $t192], "Memo1", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["badd_inf"])), "AsString")));
    await $.mset((await $.wv([$t191, $t192], "Search1paspnum", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
    await $.mset((await $.wv([$t191, $t192], "Search1inn", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
    await $.mset((await $.wv([$t191, $t192], "Search1passpin", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
    await $.mset((await $.wv([$t191, $t192], "Search1id", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
    await $.mset((await $.wv([$t191, $t192], "Search1paspnum", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
    await $.mset((await $.wv([$t191, $t192], "Search1inn", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
    await $.mset((await $.wv([$t191, $t192], "Search1passpin", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
    await $.mset((await $.wv([$t191, $t192], "Search1id", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
    await $.mset((await $.wv([$t191, $t192], "RadioButton3", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
    await $.mset((await $.wv([$t191, $t192], "RadioButton4", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
    await $.mset((await $.wv([$t191, $t192], "EditLastNameII", C, false)), "Enabled", (await $.wv([$t191, $t192], "false", C, false)));
    await $.mset((await $.wv([$t191, $t192], "EditNameII", C, false)), "Enabled", (await $.wv([$t191, $t192], "false", C, false)));
    await $.mset((await $.wv([$t191, $t192], "EditSonameII", C, false)), "Enabled", (await $.wv([$t191, $t192], "false", C, false)));
    await $.mset((await $.wv([$t191, $t192], "EditLastNameII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
    await $.mset((await $.wv([$t191, $t192], "EditNameII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
    await $.mset((await $.wv([$t191, $t192], "EditSonameII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
    await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "passpin"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wv([$t191, $t192], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
      if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t191, $t192], "EditPincodeII", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditPincodeII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t191, $t192], "EditPincodeII", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditPincodeII", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
      }
      await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "paspplace"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t191, $t192], "CBoxPassPlaceII", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
        await $.mset((await $.wv([$t191, $t192], "CBoxPassPlaceII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t191, $t192], "CBoxPassPlaceII", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
        await $.mset((await $.wv([$t191, $t192], "CBoxPassPlaceII", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
      }
      await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "passer"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t191, $t192], "EditSerialII", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditSerialII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t191, $t192], "EditSerialII", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditSerialII", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
      }
      await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "paspnum"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t191, $t192], "EditPassportII", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditPassportII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t191, $t192], "EditPassportII", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditPassportII", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
      }
      await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "doctype"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t191, $t192], "DBCBox_DocTYPEII", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
        await $.mset((await $.wv([$t191, $t192], "DBCBox_DocTYPEII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t191, $t192], "DBCBox_DocTYPEII", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
        await $.mset((await $.wv([$t191, $t192], "DBCBox_DocTYPEII", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
      }
      await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "paspdate"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t191, $t192], "DateEditII", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
        await $.mset((await $.wv([$t191, $t192], "DateEditII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t191, $t192], "DateEditII", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
        await $.mset((await $.wv([$t191, $t192], "DateEditII", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
      }
      await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "phone_m"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t191, $t192], "EditMobilII", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditMobilII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t191, $t192], "EditMobilII", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditMobilII", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
      }
      await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "phone_h"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t191, $t192], "EditPhoneII", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditPhoneII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t191, $t192], "EditPhoneII", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
        await $.mset((await $.wv([$t191, $t192], "EditPhoneII", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
      }
      await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "filial"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t191, $t192], "FilialNameII", C, false)), "Enabled", (await $.wv([$t191, $t192], "False", C, false)));
        await $.mset((await $.wv([$t191, $t192], "FilialNameII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t191, $t192], "FilialNameII", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
        await $.mset((await $.wv([$t191, $t192], "FilialNameII", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
      }
    }
    if ($.truthy((await $.mv((await $.wv([$t191, $t192], "SenderAccNoII", C, false)), "Enabled")))) {
      await $.mset((await $.wv([$t191, $t192], "SenderAccNoII", C, false)), "Enabled", (await $.wv([$t191, $t192], "false", C, false)));
      await $.mset((await $.wv([$t191, $t192], "SenderAccNoII", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
    }
    await $.wset([$t191, $t192], "Result", (await $.mcall((await $.wv([$t191, $t192], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t191, $t192], "ExpIncomingPassword", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "badd_inf"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t191, $t192], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
      await $.mset((await $.wv([$t191, $t192], "Memo1", C, false)), "Enabled", (await $.wv([$t191, $t192], "false", C, false)));
      await $.mset((await $.wv([$t191, $t192], "Memo1", C, false)), "Color", (await $.wv([$t191, $t192], "clSilver", C, false)));
    } else {
      await $.mset((await $.wv([$t191, $t192], "Memo1", C, false)), "Enabled", (await $.wv([$t191, $t192], "True", C, false)));
      await $.mset((await $.wv([$t191, $t192], "Memo1", C, false)), "Color", (await $.wv([$t191, $t192], "clWhite", C, false)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "ExpUpdateIncoming", async function ExpUpdateIncoming(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "result": 0};
  {
    const $t201 = (await $.v(C, "ExpDataModule"));
    const $t202 = (await $.wv([$t201], "SendDataSet", C, false));
    await $.stmt($.wcall([$t201, $t202], "Close", [], C));
    { const $t203 = await $.iset((await $.wv([$t201, $t202], "SQl", C, false)), [1], ""); if ($t203 !== undefined) { await $.wset([$t201, $t202], "SQl", $t203, C); } }
    { const $t204 = await $.iset((await $.wv([$t201, $t202], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")))); if ($t204 !== undefined) { await $.wset([$t201, $t202], "SQl", $t204, C); } }
    await $.stmt($.wcall([$t201, $t202], "Open", [], C));
    { const $t205 = (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["cust_type"], C)), "AsInteger"));
      if ($.eq($t205, 4)) {
        await $.mset((await $.wv([$t201, $t202], "RadioGroup1", C, false)), "ItemIndex", 0);
      }
      else if ($.eq($t205, 2)) {
        await $.mset((await $.wv([$t201, $t202], "RadioGroup1", C, false)), "ItemIndex", 2);
      }
      else if ($.eq($t205, 1)) {
        await $.mset((await $.wv([$t201, $t202], "RadioGroup1", C, false)), "ItemIndex", 1);
      }
      else if ($.eq($t205, 0)) {
        await $.mset((await $.wv([$t201, $t202], "RadioGroup1", C, false)), "ItemIndex", 3);
      }
    }
    { const $t206 = (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["nerezident"], C)), "AsInteger"));
      if ($.eq($t206, 1)) {
        await $.mset((await $.wv([$t201, $t202], "RadioButton1", C, false)), "Checked", (await $.wv([$t201, $t202], "true", C, false)));
      }
      else if ($.eq($t206, 0)) {
        await $.mset((await $.wv([$t201, $t202], "RadioButton2", C, false)), "Checked", (await $.wv([$t201, $t202], "true", C, false)));
      }
    }
    await $.mcall((await $.wv([$t201, $t202], "AccountDataSet", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t201, $t202], "AccountDataSet", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "FieldByName", ["kliid"])), "AsInteger"))])));
    { const $t207 = await $.iset((await $.mv((await $.wv([$t201, $t202], "AccountDataSet", C, false)), "SQL")), [5], ""); if ($t207 !== undefined) { await $.mset((await $.wv([$t201, $t202], "AccountDataSet", C, false)), "SQL", $t207); } }
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (await $.wv([$t201, $t202], "null", C, false)))), async () => ($.ne((await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsVariant")), (-(1)))))))) {
      { const $t208 = await $.iset((await $.mv((await $.wv([$t201, $t202], "AccountDataSet", C, false)), "SQL")), [5], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "FieldByName", ["debetaccid"])), "AsString")))); if ($t208 !== undefined) { await $.mset((await $.wv([$t201, $t202], "AccountDataSet", C, false)), "SQL", $t208); } }
    }
    await $.mcall((await $.wv([$t201, $t202], "AccountDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t201, $t202], "FilialDataSet", C, false)), "Close", []);
    { const $t209 = await $.iset((await $.mv((await $.wv([$t201, $t202], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t209 !== undefined) { await $.mset((await $.wv([$t201, $t202], "FilialDataSet", C, false)), "SQL", $t209); } }
    { const $t210 = await $.iset((await $.mv((await $.wv([$t201, $t202], "FilialDataSet", C, false)), "SQL")), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "fieldbyname", ["filial"])), "AsString")))); if ($t210 !== undefined) { await $.mset((await $.wv([$t201, $t202], "FilialDataSet", C, false)), "SQL", $t210); } }
    await $.mcall((await $.wv([$t201, $t202], "FilialDataSet", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t201, $t202], "RadioGroup1", C, false)), "ItemIndex")), 4))) {
      await $.mset((await $.wv([$t201, $t202], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["custname"], C)), "AsString")));
    } else {
      await $.mset((await $.wv([$t201, $t202], "EditLastNameI", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["lastname"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202], "EditNameI", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202], "EditSonameI", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["soname"], C)), "AsString")));
    }
    await $.mset((await $.wv([$t201, $t202], "EditCustid", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")));
    await $.mset((await $.wv([$t201, $t202], "EditPincodeI", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["passpin"], C)), "AsString")));
    await $.mset((await $.wv([$t201, $t202], "CBoxPassPlaceI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["doc_type"], C)), "AsInteger")));
    await $.mset((await $.wv([$t201, $t202], "EditSerialI", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["passer"], C)), "AsString")));
    await $.mset((await $.wv([$t201, $t202], "EditPassportI", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["paspnum"], C)), "AsString")));
    await $.mset((await $.wv([$t201, $t202], "DBCBox_DocTYPEI", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["paspplace"], C)), "AsString")));
    await $.mset((await $.wv([$t201, $t202], "DateEditI", C, false)), "Value", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["paspdate"], C)), "AsVariant")));
    await $.mset((await $.wv([$t201, $t202], "EditMobilI", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["phone_m"], C)), "AsString")));
    await $.mset((await $.wv([$t201, $t202], "EditPhoneI", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202], "FieldByName", ["phone_h"], C)), "AsString")));
    await $.mset((await $.wv([$t201, $t202], "ValuteName", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "fieldbyname", ["VAL_COD"])), "AsInteger")));
    await $.mset((await $.wv([$t201, $t202], "CMCurrencyEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "fieldbyname", ["AMOUNT"])), "AsString")));
    await $.mset((await $.wv([$t201, $t202], "TransRefEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "fieldbyname", ["TRANS_REF"])), "AsString")));
    await $.mset((await $.wv([$t201, $t202], "RemitInfEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "ExpIncomingDataSet", C, false)), "fieldbyname", ["REMIT_INF"])), "AsString")));
    if ($.truthy($.ne((await $.mv((await $.wv([$t201, $t202], "RadioGroup1", C, false)), "ItemIndex")), 0))) {
      await $.mset((await $.wv([$t201, $t202], "SenderAccNo", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t201, $t202], "AccountDataSet", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
    }
    await $.stmt($.wcall([$t201, $t202], "FormDisable", [], C));
    {
      const $t211 = (await $.wv([$t201, $t202], "FormNominalCustomers", C, false));
      const $t212 = (await $.wv([$t201, $t202, $t211], "ExpressVariables", C, false));
      await $.wset([$t201, $t202, $t211, $t212], "custid", (await $.mv((await $.mcall((await $.wv([$t201, $t202, $t211, $t212], "ExpIncomingDataSet", C, false)), "fieldbyname", ["kliid"])), "AsString")), C);
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["passpin"], C)), "AsString")));
      if ($.truthy($.ne((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "Editpasspin", C, false)), "Text")), ""))) {
        await $.mset((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "RH", (await $.wv([$t201, $t202, $t211, $t212], "true", C, false)));
      }
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["lastname"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["soname"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["doc_country"], C)), "AsVariant")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["paspplace"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["paspdate"], C)), "AsVariant")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["passexpire"], C)), "AsVariant")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["citizenship"], C)), "AsInteger")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["sex"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["fam_status"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["birthplace"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["birth_state"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["birthday"], C)), "AsVariant")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["adrs_state"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["city"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["reg_zip"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["phone_m"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["phone_h"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["e_mail"], C)), "AsString")));
      await $.mset((await $.wv([$t201, $t202, $t211, $t212], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["address"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "Work_Place")), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_place"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_cntr"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_city"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "db_tph_state")), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_state"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_zip"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_adress"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_phone"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_phext"], C)), "AsString")));
      await $.mset((await $.mv((await $.wv([$t201, $t202, $t211, $t212], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text", (await $.mv((await $.wcall([$t201, $t202, $t211, $t212], "FieldByName", ["work_phcode"], C)), "AsString")));
    }
  }
  {
    const $t213 = (await $.v(C, "ExpDataModule"));
    const $t214 = (await $.wv([$t213], "SendToDataSet", C, false));
    await $.stmt($.wcall([$t213, $t214], "Close", [], C));
    { const $t215 = await $.iset((await $.wv([$t213, $t214], "SQl", C, false)), [1], ""); if ($t215 !== undefined) { await $.wset([$t213, $t214], "SQl", $t215, C); } }
    { const $t216 = await $.iset((await $.wv([$t213, $t214], "SQl", C, false)), [1], $.add("where id=", (await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "fieldbyname", ["BKLIID"])), "AsString")))); if ($t216 !== undefined) { await $.wset([$t213, $t214], "SQl", $t216, C); } }
    await $.stmt($.wcall([$t213, $t214], "Open", [], C));
    { const $t217 = (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["cust_type"], C)), "AsInteger"));
      if ($.eq($t217, 4)) {
        await $.mset((await $.wv([$t213, $t214], "RadioGroup2", C, false)), "ItemIndex", 0);
      }
      else if ($.eq($t217, 2)) {
        await $.mset((await $.wv([$t213, $t214], "RadioGroup2", C, false)), "ItemIndex", 2);
      }
      else if ($.eq($t217, 1)) {
        await $.mset((await $.wv([$t213, $t214], "RadioGroup2", C, false)), "ItemIndex", 1);
      }
      else if ($.eq($t217, 0)) {
        await $.mset((await $.wv([$t213, $t214], "RadioGroup2", C, false)), "ItemIndex", 3);
      }
    }
    { const $t218 = (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["nerezident"], C)), "AsInteger"));
      if ($.eq($t218, 1)) {
        await $.mset((await $.wv([$t213, $t214], "RadioButton3", C, false)), "Checked", (await $.wv([$t213, $t214], "true", C, false)));
      }
      else if ($.eq($t218, 0)) {
        await $.mset((await $.wv([$t213, $t214], "RadioButton4", C, false)), "Checked", (await $.wv([$t213, $t214], "true", C, false)));
      }
    }
    await $.mcall((await $.wv([$t213, $t214], "AccountDataSet1", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t213, $t214], "AccountDataSet1", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["bkliid"])), "AsInteger"))])));
    { const $t219 = await $.iset((await $.mv((await $.wv([$t213, $t214], "AccountDataSet1", C, false)), "SQL")), [2], ""); if ($t219 !== undefined) { await $.mset((await $.wv([$t213, $t214], "AccountDataSet1", C, false)), "SQL", $t219); } }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsVariant")), (await $.wv([$t213, $t214], "null", C, false))))) {
      { const $t220 = await $.iset((await $.mv((await $.wv([$t213, $t214], "AccountDataSet1", C, false)), "SQL")), [2], $.add("and id=", (await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["kreditaccid"])), "AsString")))); if ($t220 !== undefined) { await $.mset((await $.wv([$t213, $t214], "AccountDataSet1", C, false)), "SQL", $t220); } }
    }
    await $.mcall((await $.wv([$t213, $t214], "AccountDataSet1", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t213, $t214], "RadioGroup2", C, false)), "ItemIndex")), 4))) {
      await $.mset((await $.wv([$t213, $t214], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["custname"], C)), "AsString")));
    } else {
      await $.mset((await $.wv([$t213, $t214], "EditLastNameII", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["lastname"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214], "EditNameII", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214], "EditSonameII", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["soname"], C)), "AsString")));
    }
    await $.mset((await $.wv([$t213, $t214], "EditCustidII", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["bkliid"])), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "EditPincodeII", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["passpin"], C)), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "CBoxPassPlaceII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["doc_type"], C)), "AsInteger")));
    await $.mset((await $.wv([$t213, $t214], "EditSerialII", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["passer"], C)), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "EditPassportII", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["paspnum"], C)), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "FilialNameII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["bfilial"])), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "DBCBox_DocTYPEII", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["paspplace"], C)), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "DateEditII", C, false)), "Value", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["paspdate"], C)), "AsVariant")));
    await $.mset((await $.wv([$t213, $t214], "EditMobilII", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["phone_m"], C)), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "EditPhoneII", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214], "FieldByName", ["phone_h"], C)), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "EditDate", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["senddate"])), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "EditTime", C, false)), "Text", (await $.wcall([$t213, $t214], "TimeToStr", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["senddatetime"])), "AsDateTime"))], C)));
    await $.mset((await $.wv([$t213, $t214], "Edit25", C, false)), "Text", "*********");
    {
      const $t221 = (await $.wv([$t213, $t214], "FormNominalCustomers", C, false));
      const $t222 = (await $.wv([$t213, $t214, $t221], "SendDataSet", C, false));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["passpin"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["lastname"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["name"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["soname"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["doc_type"], C)), "AsInteger")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["passer"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["paspnum"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["doc_country"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["paspplace"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["paspdate"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["passexpire"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["citizenship"], C)), "AsInteger")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["sex"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["fam_status"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["birthplace"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["birth_state"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["birthday"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["adrs_state"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["city"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["reg_zip"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["phone_m"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["phone_h"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["e_mail"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["address"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "Work_Place", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_place"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "Address_type", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "CountryByConctType", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_cntr"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "CityByConctType", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_city"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "db_tph_state", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_state"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "DB_tph_zip", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_zip"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "db_tph_adress", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_adress"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "tph_contact_type", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "tph_communication_type", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "tph_country_prefix", C, false)), "KeyValue", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "Db_tph_number", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_phone"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "Db_tph_extension", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_phext"], C)), "AsString")));
      await $.mset((await $.wv([$t213, $t214, $t221, $t222], "Db_tph_cod", C, false)), "Text", (await $.mv((await $.wcall([$t213, $t214, $t221, $t222], "FieldByName", ["work_phcode"], C)), "AsString")));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t213, $t214], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
      await $.mset((await $.wv([$t213, $t214], "SenderAccNoII", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t213, $t214], "AccountDataSet1", C, false)), "FieldByName", ["acc_no"])), "AsVariant")));
    }
    await $.mset((await $.wv([$t213, $t214], "Memo1", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["badd_inf"])), "AsString")));
    await $.mset((await $.wv([$t213, $t214], "Search1paspnum", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
    await $.mset((await $.wv([$t213, $t214], "Search1inn", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
    await $.mset((await $.wv([$t213, $t214], "Search1passpin", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
    await $.mset((await $.wv([$t213, $t214], "Search1id", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
    await $.mset((await $.wv([$t213, $t214], "Search1paspnum", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
    await $.mset((await $.wv([$t213, $t214], "Search1inn", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
    await $.mset((await $.wv([$t213, $t214], "Search1passpin", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
    await $.mset((await $.wv([$t213, $t214], "Search1id", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
    await $.mset((await $.wv([$t213, $t214], "RadioButton3", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
    await $.mset((await $.wv([$t213, $t214], "RadioButton4", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
    await $.mset((await $.wv([$t213, $t214], "EditLastNameII", C, false)), "Enabled", (await $.wv([$t213, $t214], "false", C, false)));
    await $.mset((await $.wv([$t213, $t214], "EditNameII", C, false)), "Enabled", (await $.wv([$t213, $t214], "false", C, false)));
    await $.mset((await $.wv([$t213, $t214], "EditSonameII", C, false)), "Enabled", (await $.wv([$t213, $t214], "false", C, false)));
    await $.mset((await $.wv([$t213, $t214], "EditLastNameII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
    await $.mset((await $.wv([$t213, $t214], "EditNameII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
    await $.mset((await $.wv([$t213, $t214], "EditSonameII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
    await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "passpin"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.eq((await $.mv((await $.wv([$t213, $t214], "RadioGroup2", C, false)), "ItemIndex")), 0))) {
      if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t213, $t214], "EditPincodeII", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditPincodeII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t213, $t214], "EditPincodeII", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditPincodeII", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
      }
      await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "paspplace"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t213, $t214], "CBoxPassPlaceII", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
        await $.mset((await $.wv([$t213, $t214], "CBoxPassPlaceII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t213, $t214], "CBoxPassPlaceII", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
        await $.mset((await $.wv([$t213, $t214], "CBoxPassPlaceII", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
      }
      await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "passer"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t213, $t214], "EditSerialII", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditSerialII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t213, $t214], "EditSerialII", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditSerialII", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
      }
      await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "paspnum"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t213, $t214], "EditPassportII", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditPassportII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t213, $t214], "EditPassportII", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditPassportII", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
      }
      await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "doctype"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t213, $t214], "DBCBox_DocTYPEII", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
        await $.mset((await $.wv([$t213, $t214], "DBCBox_DocTYPEII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t213, $t214], "DBCBox_DocTYPEII", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
        await $.mset((await $.wv([$t213, $t214], "DBCBox_DocTYPEII", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
      }
      await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "paspdate"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t213, $t214], "DateEditII", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
        await $.mset((await $.wv([$t213, $t214], "DateEditII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t213, $t214], "DateEditII", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
        await $.mset((await $.wv([$t213, $t214], "DateEditII", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
      }
      await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "phone_m"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t213, $t214], "EditMobilII", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditMobilII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t213, $t214], "EditMobilII", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditMobilII", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
      }
      await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "phone_h"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t213, $t214], "EditPhoneII", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditPhoneII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t213, $t214], "EditPhoneII", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
        await $.mset((await $.wv([$t213, $t214], "EditPhoneII", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
      }
      await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "filial"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
        await $.mset((await $.wv([$t213, $t214], "FilialNameII", C, false)), "Enabled", (await $.wv([$t213, $t214], "False", C, false)));
        await $.mset((await $.wv([$t213, $t214], "FilialNameII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
      } else {
        await $.mset((await $.wv([$t213, $t214], "FilialNameII", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
        await $.mset((await $.wv([$t213, $t214], "FilialNameII", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
      }
    }
    if ($.truthy((await $.mv((await $.wv([$t213, $t214], "SenderAccNoII", C, false)), "Enabled")))) {
      await $.mset((await $.wv([$t213, $t214], "SenderAccNoII", C, false)), "Enabled", (await $.wv([$t213, $t214], "false", C, false)));
      await $.mset((await $.wv([$t213, $t214], "SenderAccNoII", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
    }
    await $.wset([$t213, $t214], "Result", (await $.mcall((await $.wv([$t213, $t214], "Repair", C, false)), "CallIntegerFunction", ["RetrunFiledName", [(await $.mv((await $.mcall((await $.wv([$t213, $t214], "ExpIncomingDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), "badd_inf"]])), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t213, $t214], "Result", { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true }, false)), 1))) {
      await $.mset((await $.wv([$t213, $t214], "Memo1", C, false)), "Enabled", (await $.wv([$t213, $t214], "false", C, false)));
      await $.mset((await $.wv([$t213, $t214], "Memo1", C, false)), "Color", (await $.wv([$t213, $t214], "clSilver", C, false)));
    } else {
      await $.mset((await $.wv([$t213, $t214], "Memo1", C, false)), "Enabled", (await $.wv([$t213, $t214], "True", C, false)));
      await $.mset((await $.wv([$t213, $t214], "Memo1", C, false)), "Color", (await $.wv([$t213, $t214], "clWhite", C, false)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TExpFormNew", "RadioGroup2Click", async function RadioGroup2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "RBoolean", false);
  { const $t223 = (await $.mv((await $.v(C, "RadioGroup2")), "ItemIndex"));
    if ($.eq($t223, (-(1))) || $.eq($t223, 0)) {
      await $.mset((await $.v(C, "Search1passpin")), "Enabled", true);
      await $.mset((await $.v(C, "Search1passpin")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Search1paspnum")), "Enabled", true);
      await $.mset((await $.v(C, "Search1paspnum")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Search1id")), "Enabled", true);
      await $.mset((await $.v(C, "Search1id")), "Color", (await $.v(C, "clWhite")));
      if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup2")), "ItemIndex")), (-(1))))) {
        await $.mset((await $.v(C, "Search1inn")), "Enabled", true);
        await $.mset((await $.v(C, "Search1inn")), "Color", (await $.v(C, "clWhite")));
      } else {
        await $.mset((await $.v(C, "Search1inn")), "Enabled", false);
        await $.mset((await $.v(C, "Search1inn")), "Color", (await $.v(C, "clSilver")));
      }
      await $.mset((await $.v(C, "EditPINCodeII")), "Enabled", true);
      await $.mset((await $.v(C, "EditPINCodeII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "CBoxPassPlaceII")), "Enabled", true);
      await $.mset((await $.v(C, "CBoxPassPlaceII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditSerialII")), "Enabled", true);
      await $.mset((await $.v(C, "EditSerialII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditPassportII")), "Enabled", true);
      await $.mset((await $.v(C, "EditPassportII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditCustidII")), "Enabled", false);
      await $.mset((await $.v(C, "EditCustidII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditNameII")), "Enabled", true);
      await $.mset((await $.v(C, "EditNameII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditLastNameII")), "Enabled", true);
      await $.mset((await $.v(C, "EditLastNameII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditSonameII")), "Enabled", true);
      await $.mset((await $.v(C, "EditSonameII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "DBCBox_DocTYPEII")), "Enabled", true);
      await $.mset((await $.v(C, "DBCBox_DocTYPEII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "DateEditII")), "Enabled", true);
      await $.mset((await $.v(C, "DateEditII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditMobilII")), "Enabled", true);
      await $.mset((await $.v(C, "EditMobilII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditPhoneII")), "Enabled", true);
      await $.mset((await $.v(C, "EditPhoneII")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "RadioButton3")), "Enabled", true);
      await $.mset((await $.v(C, "RadioButton4")), "Enabled", true);
    }
    else if ($.eq($t223, 1) || $.eq($t223, 2) || $.eq($t223, 3) || $.eq($t223, 4)) {
      await $.mset((await $.v(C, "EditPINCodeII")), "Enabled", false);
      await $.mset((await $.v(C, "EditPINCodeII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "CBoxPassPlaceII")), "Enabled", false);
      await $.mset((await $.v(C, "CBoxPassPlaceII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditSerialII")), "Enabled", false);
      await $.mset((await $.v(C, "EditSerialII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditPassportII")), "Enabled", false);
      await $.mset((await $.v(C, "EditPassportII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditCustidII")), "Enabled", false);
      await $.mset((await $.v(C, "EditCustidII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditNameII")), "Enabled", false);
      await $.mset((await $.v(C, "EditNameII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditLastNameII")), "Enabled", false);
      await $.mset((await $.v(C, "EditLastNameII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditSonameII")), "Enabled", false);
      await $.mset((await $.v(C, "EditSonameII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "DBCBox_DocTYPEII")), "Enabled", false);
      await $.mset((await $.v(C, "DBCBox_DocTYPEII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "DateEditII")), "Enabled", false);
      await $.mset((await $.v(C, "DateEditII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditMobilII")), "Enabled", false);
      await $.mset((await $.v(C, "EditMobilII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditPhoneII")), "Enabled", false);
      await $.mset((await $.v(C, "EditPhoneII")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "RadioButton3")), "Enabled", false);
      await $.mset((await $.v(C, "RadioButton4")), "Enabled", false);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "RadioGroup3Click", async function RadioGroup3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "RBoolean", false);
  if ($.truthy($.eq((await $.v(C, "FForm")), 0))) {
    await $.stmt($.call(C, "Clear", []));
  }
  { const $t224 = (await $.mv((await $.v(C, "RadioGroup3")), "ItemIndex"));
    if ($.eq($t224, (-(1))) || $.eq($t224, 0)) {
      await $.mset((await $.v(C, "Search2passpin")), "Enabled", true);
      await $.mset((await $.v(C, "Search2passpin")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Search2paspnum")), "Enabled", true);
      await $.mset((await $.v(C, "Search2paspnum")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Search2id")), "Enabled", true);
      await $.mset((await $.v(C, "Search2id")), "Color", (await $.v(C, "clWhite")));
      if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup3")), "ItemIndex")), (-(1))))) {
        await $.mset((await $.v(C, "Search2inn")), "Enabled", true);
        await $.mset((await $.v(C, "Search2inn")), "Color", (await $.v(C, "clWhite")));
      } else {
        await $.mset((await $.v(C, "Search2inn")), "Enabled", false);
        await $.mset((await $.v(C, "Search2inn")), "Color", (await $.v(C, "clSilver")));
      }
      await $.mset((await $.v(C, "EditPINCode2")), "Enabled", true);
      await $.mset((await $.v(C, "EditPINCode2")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "CBoxPassPlace2")), "Enabled", true);
      await $.mset((await $.v(C, "CBoxPassPlace2")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditSerial2")), "Enabled", true);
      await $.mset((await $.v(C, "EditSerial2")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditPassport2")), "Enabled", true);
      await $.mset((await $.v(C, "EditPassport2")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditCustid2")), "Enabled", false);
      await $.mset((await $.v(C, "EditCustid2")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditLastName2")), "Enabled", true);
      await $.mset((await $.v(C, "EditLastName2")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditSoname2")), "Enabled", true);
      await $.mset((await $.v(C, "EditSoname2")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "SenderAccNo2")), "Enabled", false);
      await $.mset((await $.v(C, "SenderAccNo2")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "WarrantSerial")), "Enabled", true);
      await $.mset((await $.v(C, "WarrantSerial")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "WarrantPassport")), "Enabled", true);
      await $.mset((await $.v(C, "WarrantPassport")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "WarrantOpenDate")), "Enabled", true);
      await $.mset((await $.v(C, "WarrantOpenDate")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "WarrantCloseDate")), "Enabled", true);
      await $.mset((await $.v(C, "WarrantCloseDate")), "Color", (await $.v(C, "clWhite")));
    }
    else if ($.eq($t224, 1) || $.eq($t224, 2) || $.eq($t224, 3) || $.eq($t224, 4)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup3")), "ItemIndex")), 1))) {
        await $.mset((await $.v(C, "Search2passpin")), "Enabled", true);
        await $.mset((await $.v(C, "Search2passpin")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "Search2paspnum")), "Enabled", true);
        await $.mset((await $.v(C, "Search2paspnum")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "Search2id")), "Enabled", true);
        await $.mset((await $.v(C, "Search2id")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "Search2inn")), "Enabled", false);
        await $.mset((await $.v(C, "Search2inn")), "Color", (await $.v(C, "clSilver")));
        await $.mset((await $.v(C, "EditLastName2")), "Enabled", true);
        await $.mset((await $.v(C, "EditLastName2")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "EditSoname2")), "Enabled", true);
        await $.mset((await $.v(C, "EditSoname2")), "Color", (await $.v(C, "clWhite")));
      }
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "RadioGroup3")), "ItemIndex")), 2)), async () => ($.eq((await $.mv((await $.v(C, "RadioGroup3")), "ItemIndex")), 4)))))) {
        await $.mset((await $.v(C, "Search2passpin")), "Enabled", true);
        await $.mset((await $.v(C, "Search2passpin")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "Search2paspnum")), "Enabled", true);
        await $.mset((await $.v(C, "Search2paspnum")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "Search2id")), "Enabled", true);
        await $.mset((await $.v(C, "Search2id")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "Search2inn")), "Enabled", true);
        await $.mset((await $.v(C, "Search2inn")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "EditLastName2")), "Enabled", true);
        await $.mset((await $.v(C, "EditLastName2")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "EditSoname2")), "Enabled", true);
        await $.mset((await $.v(C, "EditSoname2")), "Color", (await $.v(C, "clWhite")));
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup3")), "ItemIndex")), 3))) {
        await $.mset((await $.v(C, "Search2passpin")), "Enabled", false);
        await $.mset((await $.v(C, "Search2passpin")), "Color", (await $.v(C, "clSilver")));
        await $.mset((await $.v(C, "Search2paspnum")), "Enabled", false);
        await $.mset((await $.v(C, "Search2paspnum")), "Color", (await $.v(C, "clSilver")));
        await $.mset((await $.v(C, "Search2id")), "Enabled", true);
        await $.mset((await $.v(C, "Search2id")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "Search2inn")), "Enabled", true);
        await $.mset((await $.v(C, "Search2inn")), "Color", (await $.v(C, "clWhite")));
        await $.mset((await $.v(C, "EditLastName2")), "Enabled", false);
        await $.mset((await $.v(C, "EditLastName2")), "Color", (await $.v(C, "clSilver")));
        await $.mset((await $.v(C, "EditSoname2")), "Enabled", false);
        await $.mset((await $.v(C, "EditSoname2")), "Color", (await $.v(C, "clSilver")));
      }
      await $.mset((await $.v(C, "EditPINCode2")), "Enabled", false);
      await $.mset((await $.v(C, "EditPINCode2")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "CBoxPassPlace2")), "Enabled", false);
      await $.mset((await $.v(C, "CBoxPassPlace2")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditSerial2")), "Enabled", false);
      await $.mset((await $.v(C, "EditSerial2")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditPassport2")), "Enabled", false);
      await $.mset((await $.v(C, "EditPassport2")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "EditCustid2")), "Enabled", false);
      await $.mset((await $.v(C, "EditCustid2")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "SenderAccNo2")), "Enabled", true);
      await $.mset((await $.v(C, "SenderAccNo2")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "WarrantSerial")), "Enabled", false);
      await $.mset((await $.v(C, "WarrantSerial")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "WarrantPassport")), "Enabled", false);
      await $.mset((await $.v(C, "WarrantPassport")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "WarrantOpenDate")), "Enabled", false);
      await $.mset((await $.v(C, "WarrantOpenDate")), "Color", (await $.v(C, "clSilver")));
      await $.mset((await $.v(C, "WarrantCloseDate")), "Enabled", false);
      await $.mset((await $.v(C, "WarrantCloseDate")), "Color", (await $.v(C, "clSilver")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "RemitInfEditKeyDown", async function RemitInfEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t225 = (await $.v(C, "ExpFormDestination"));
      const $t226 = (await $.wv([$t225], "ExpDataModule", C, false));
      await $.stmt($.wcall([$t225, $t226], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t225, $t226], "ModalResult", C, false)), (await $.wv([$t225, $t226], "mrOk", C, false))))) {
        await $.mset((await $.wv([$t225, $t226], "RemitInfEdit", C, false)), "Text", (await $.wv([$t225, $t226], "Value", C, false)));
      }
    }
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TExpFormNew", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "RadioGroup2")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "RadioGroup2")), "ItemIndex")), (-(1)))))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditLastNameII")), "Text")), ""))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin soyadı sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditNameII")), "Text")), ""))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin adı sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditSoNameII")), "Text")), ""))) {
      await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin atasının adı sahəsi doldurulmayıb "])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.v(C, "FForm")), 2))) {
      if ($.truthy(($.eq((await $.mv((await $.v(C, "EditPINCodeII")), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin pinkod sahəsi doldurulmayıb "])));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.v(C, "CBoxPassPlaceII")), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin sənədin növü sahəsi seçilməyib"])));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.v(C, "EditSerialII")), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin seriya sahəsi doldurulmayıb "])));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.v(C, "EditPassportII")), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin nömrə sahəsi doldurulmayıb "])));
        return L0.result;
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "FilialNameII")), "KeyValue")), (-(1))))) {
        await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin filial sahəsi seçilməyib "])));
        return L0.result;
      }
      if ($.truthy((await $.and_((await $.mv((await $.v(C, "ButtonNominal1")), "Visible")), async () => $.not(((await $.mv((await $.v(C, "FormNominalCustomers")), "RH")))))))) {
        await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Nominal şəxsin bütün məlumatlar sahəsini doldur!"])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FilialNameII")), "Text")), ""))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin filial sahəsi seçilməyib "])));
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.mv((await $.v(C, "SenderAccNoII")), "Enabled")), async () => ($.eq((await $.mv((await $.v(C, "SenderAccNoII")), "Text")), "")))))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Alan şəxsin hesab sahəsi seçilməyib "])));
    return L0.result;
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "TabSheet1")), "TabVisible"))), async () => ((await $.or_(($.eq((await $.v(C, "FForm")), 0)), async () => ($.eq((await $.v(C, "FForm")), 1))))))))) {
    await $.stmt($.call(C, "ExpAdd", []));
    await $.set(C, "id", (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "EXPESSPAC")), "GetParameter", [0])));
    await $.mcall((await $.v(C, "ExpFormNew")), "Close", []);
    await $.mcall((await $.v(C, "ExpCustomersType")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "Locate", ["ID", (await $.v(C, "ID")), []])));
  } else {
    {
      const $t227 = (await $.v(C, "ExpressVariables"));
      await $.wset([$t227], "custidI", (await $.mv((await $.wv([$t227], "EditCustidII", C, false)), "Text")), C);
      await $.wset([$t227], "doc_typeI", (await $.mv((await $.wv([$t227], "CBoxPassPlaceII", C, false)), "KeyValue")), C);
      await $.wset([$t227], "passpinI", (await $.mv((await $.wv([$t227], "EditPINCodeII", C, false)), "Text")), C);
      await $.wset([$t227], "passerI", (await $.mv((await $.wv([$t227], "EditSerialII", C, false)), "Text")), C);
      await $.wset([$t227], "paspnumI", (await $.mv((await $.wv([$t227], "EditPassportII", C, false)), "Text")), C);
      await $.wset([$t227], "filialI", (await $.mv((await $.wv([$t227], "FilialNameII", C, false)), "KeyValue")), C);
      await $.wset([$t227], "remit_infI", (await $.mv((await $.wv([$t227], "Memo1", C, false)), "Text")), C);
      await $.wset([$t227], "paspplaceI", (await $.mv((await $.wv([$t227], "DBCBox_DocTYPEII", C, false)), "KeyValue")), C);
      await $.wset([$t227], "paspdateI", (await $.mv((await $.wv([$t227], "DateEditII", C, false)), "Value")), C);
      await $.wset([$t227], "phone_mI", (await $.mv((await $.wv([$t227], "EditMobilII", C, false)), "Text")), C);
      await $.wset([$t227], "phone_hI", (await $.mv((await $.wv([$t227], "EditPhoneII", C, false)), "Text")), C);
      if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t227], "ExpDataModule", C, false)), "ExpIncomingPassword")), "RecordCount")), 0))) {
        await $.wset([$t227], "id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t227], "ExpDataModule", C, false)), "ExpIncomingPassword")), "FieldByName", ["id"])), "AsInteger")), C);
      } else {
        if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t227], "ExpDataModule", C, false)), "ExpIncomingDataSet")), "RecordCount")), 0))) {
          await $.wset([$t227], "id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t227], "ExpDataModule", C, false)), "ExpIncomingDataSet")), "FieldByName", ["id"])), "AsInteger")), C);
        }
      }
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t227], "ExpDataModule", C, false)), "EXPESSPAC")), "CallProcedure", ["ExpTakeUpdate", ["batchid", (await $.wv([$t227], "id", C, false)), "v_filialid", (await $.wv([$t227], "filialI", C, false)), "v_badd_inf", (await $.wv([$t227], "remit_infI", C, false)), "v_doc_type", (await $.wv([$t227], "doc_typeI", C, false)), "v_passpin", (await $.wv([$t227], "passpinI", C, false)), "v_passer", (await $.wv([$t227], "passerI", C, false)), "v_paspnum", (await $.wv([$t227], "paspnumI", C, false)), "v_doc_country", (await $.wv([$t227], "doc_country", C, false)), "v_paspplace", (await $.wv([$t227], "paspplaceI", C, false)), "v_paspdate", (await $.wv([$t227], "paspdateI", C, false)), "v_passexpire", (await $.wv([$t227], "passexpire", C, false)), "v_citizenship", (await $.wv([$t227], "citizenship", C, false)), "v_sex", (await $.wv([$t227], "sex", C, false)), "v_fam_status", (await $.wv([$t227], "fam_status", C, false)), "v_bbirthplace", (await $.wv([$t227], "bbirthplace", C, false)), "v_birth_state", (await $.wv([$t227], "birth_state", C, false)), "v_birthday", (await $.wv([$t227], "birthday", C, false)), "v_aadrs_state", (await $.wv([$t227], "aadrs_state", C, false)), "v_city", (await $.wv([$t227], "city", C, false)), "v_reg_zip", (await $.wv([$t227], "reg_zip", C, false)), "v_address", (await $.wv([$t227], "address", C, false)), "v_phone_m", (await $.wv([$t227], "phone_mI", C, false)), "v_phone_h", (await $.wv([$t227], "phone_hI", C, false)), "v_e_mail", (await $.wv([$t227], "e_mail", C, false)), "v_work_place", (await $.wv([$t227], "work_place", C, false)), "v_work_adrs_spec", (await $.wv([$t227], "work_adrs_spec", C, false)), "v_work_cntr", (await $.wv([$t227], "work_cntr", C, false)), "v_work_city", (await $.wv([$t227], "work_city", C, false)), "v_work_state", (await $.wv([$t227], "work_state", C, false)), "v_work_zip", (await $.wv([$t227], "work_zip", C, false)), "v_work_adress", (await $.wv([$t227], "work_adress", C, false)), "v_work_phone_spec", (await $.wv([$t227], "work_phone_spec", C, false)), "v_work_phconttype", (await $.wv([$t227], "work_phconttype", C, false)), "v_work_phoppref", (await $.wv([$t227], "work_phoppref", C, false)), "v_work_phone", (await $.wv([$t227], "work_phone", C, false)), "v_work_phext", (await $.wv([$t227], "work_phext", C, false)), "v_work_phcode", (await $.wv([$t227], "work_phcode", C, false))]])));
      await $.mcall((await $.wv([$t227], "ExpFormNew", C, false)), "Close", []);
      await $.mcall((await $.wv([$t227], "ExpPasswordForm", C, false)), "close", []);
    }
    await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpIncomingDataSet")), "Locate", ["ID", (await $.v(C, "ID")), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ExpFormNew")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": 0, "vid": 0, "custid2": null, "doc_type2": null, "passpin2": '', "passer2": null, "paspnum2": null, "doc_country2": null, "paspplace2": null, "paspdate2": null, "passexpire2": null, "citizenship7": null, "citizenship8": null, "citizenship9": null, "lastname2": '', "soname2": '', "name2": '', "sex2": null, "fam_status2": null, "bbirthplace2": '', "birth_state2": '', "birthday2": null, "aadrs_state2": '', "city2": null, "reg_zip2": null, "address2": null, "phone_m2": null, "phone_h2": null, "e_mail2": '', "filial2": 0, "v_nerezident2": 0, "v_cust_type2": 0, "v_inn2": '', "debetid2": null, "pfattorser": '', "pfattornum": '', "pfattorbdat": null, "pfattoredat": null, "addinf": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t228 = (await $.v(C, "ExpDataModule"));
    await $.wset([$t228], "vid", (await $.mv((await $.mcall((await $.wv([$t228], "ExpBatchsDataSet", C, false)), "fieldbyname", ["id"])), "AsInteger")), { get: async () => L0["vid"], set: async (v) => { L0["vid"] = v; }, local: true });
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t228], "RadioGroup3", C, false)), "ItemIndex")), (-(1)))), async () => ($.eq((await $.mv((await $.wv([$t228], "RadioGroup3", C, false)), "ItemIndex")), 0)))))) {
      if ($.truthy(($.eq((await $.mv((await $.wv([$t228], "EditPINCode2", C, false)), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.wv([$t228], "CMHintBox2", C, false)), "ShowMessage", ["Alan şəxsin Pinkod sahəsi doldurulmayıb "])));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.wv([$t228], "CBoxPassPlace2", C, false)), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.wv([$t228], "CMHintBox2", C, false)), "ShowMessage", ["Alan şəxsin sənədin növü sahəsi seçilməyib "])));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.wv([$t228], "EditSerial2", C, false)), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.wv([$t228], "CMHintBox2", C, false)), "ShowMessage", ["Alan şəxsin seriya sahəsi doldurulmayıb "])));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.wv([$t228], "EditPassport2", C, false)), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.wv([$t228], "CMHintBox2", C, false)), "ShowMessage", ["Alan şəxsin nömrə sahəsi doldurulmayıb "])));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.wv([$t228], "EditLastName2", C, false)), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.wv([$t228], "CMHintBox2", C, false)), "ShowMessage", ["Alan şəxsin soyadı sahəsi doldurulmayıb "])));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.wv([$t228], "EditName2", C, false)), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.wv([$t228], "CMHintBox2", C, false)), "ShowMessage", ["Alan şəxsin adı sahəsi doldurulmayıb "])));
        return L0.result;
      }
      if ($.truthy(($.eq((await $.mv((await $.wv([$t228], "EditSoname2", C, false)), "Text")), "")))) {
        await $.stmt((await $.mcall((await $.wv([$t228], "CMHintBox2", C, false)), "ShowMessage", ["Alan şəxsin atasının adı sahəsi doldurulmayıb "])));
        return L0.result;
      }
    }
    if ($.truthy((await $.and_((await $.mv((await $.wv([$t228], "SenderAccNo2", C, false)), "Enabled")), async () => ($.eq((await $.mv((await $.wv([$t228], "SenderAccNo2", C, false)), "Text")), "")))))) {
      await $.stmt((await $.mcall((await $.wv([$t228], "CMHintBox2", C, false)), "ShowMessage", ["Alan şəxsin hesab sahəsi seçilməyib "])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t228], "FilialName2", C, false)), "KeyValue")), (-(1))))) {
      await $.stmt((await $.mcall((await $.wv([$t228], "CMHintBox2", C, false)), "ShowMessage", ["Alan şəxsin filial sahəsi seçilməyib "])));
      return L0.result;
    }
    await $.wset([$t228], "custid2", (await $.mv((await $.wv([$t228], "EditCustid2", C, false)), "Text")), { get: async () => L0["custid2"], set: async (v) => { L0["custid2"] = v; }, local: true });
    await $.wset([$t228], "doc_type2", (await $.mv((await $.wv([$t228], "CBoxPassPlace2", C, false)), "KeyValue")), { get: async () => L0["doc_type2"], set: async (v) => { L0["doc_type2"] = v; }, local: true });
    await $.wset([$t228], "passpin2", (await $.mv((await $.wv([$t228], "EditPINCode2", C, false)), "Text")), { get: async () => L0["passpin2"], set: async (v) => { L0["passpin2"] = v; }, local: true });
    await $.wset([$t228], "passer2", (await $.mv((await $.wv([$t228], "EditSerial2", C, false)), "Text")), { get: async () => L0["passer2"], set: async (v) => { L0["passer2"] = v; }, local: true });
    await $.wset([$t228], "paspnum2", (await $.mv((await $.wv([$t228], "EditPassport2", C, false)), "Text")), { get: async () => L0["paspnum2"], set: async (v) => { L0["paspnum2"] = v; }, local: true });
    await $.wset([$t228], "lastname2", (await $.mv((await $.wv([$t228], "EditLastName2", C, false)), "Text")), { get: async () => L0["lastname2"], set: async (v) => { L0["lastname2"] = v; }, local: true });
    await $.wset([$t228], "soname2", (await $.mv((await $.wv([$t228], "EditSoName2", C, false)), "Text")), { get: async () => L0["soname2"], set: async (v) => { L0["soname2"] = v; }, local: true });
    await $.wset([$t228], "name2", (await $.mv((await $.wv([$t228], "EditName2", C, false)), "Text")), { get: async () => L0["name2"], set: async (v) => { L0["name2"] = v; }, local: true });
    await $.wset([$t228], "filial2", (await $.mv((await $.wv([$t228], "FilialName2", C, false)), "KeyValue")), { get: async () => L0["filial2"], set: async (v) => { L0["filial2"] = v; }, local: true });
    await $.wset([$t228], "debetid2", (await $.mv((await $.wv([$t228], "SenderAccNo2", C, false)), "KeyValue")), { get: async () => L0["debetid2"], set: async (v) => { L0["debetid2"] = v; }, local: true });
    await $.wset([$t228], "pfattorser", (await $.mv((await $.wv([$t228], "WarrantSerial", C, false)), "Text")), { get: async () => L0["pfattorser"], set: async (v) => { L0["pfattorser"] = v; }, local: true });
    await $.wset([$t228], "pfattornum", (await $.mv((await $.wv([$t228], "WarrantPassport", C, false)), "Text")), { get: async () => L0["pfattornum"], set: async (v) => { L0["pfattornum"] = v; }, local: true });
    await $.wset([$t228], "addinf", (await $.mv((await $.wv([$t228], "Memo2", C, false)), "Text")), { get: async () => L0["addinf"], set: async (v) => { L0["addinf"] = v; }, local: true });
    if ($.truthy((await $.wcall([$t228], "VarIsNull", [(await $.mv((await $.wv([$t228], "WarrantOpenDate", C, false)), "Value"))], C)))) {
      await $.wset([$t228], "pfattorbdat", (await $.wv([$t228], "Null", C, false)), { get: async () => L0["pfattorbdat"], set: async (v) => { L0["pfattorbdat"] = v; }, local: true });
    } else {
      await $.wset([$t228], "pfattorbdat", (await $.mv((await $.wv([$t228], "WarrantOpenDate", C, false)), "Value")), { get: async () => L0["pfattorbdat"], set: async (v) => { L0["pfattorbdat"] = v; }, local: true });
    }
    if ($.truthy((await $.wcall([$t228], "VarIsNull", [(await $.mv((await $.wv([$t228], "WarrantOpenDate", C, false)), "Value"))], C)))) {
      await $.wset([$t228], "pfattoredat", (await $.wv([$t228], "Null", C, false)), { get: async () => L0["pfattoredat"], set: async (v) => { L0["pfattoredat"] = v; }, local: true });
    } else {
      await $.wset([$t228], "pfattoredat", (await $.mv((await $.wv([$t228], "WarrantCloseDate", C, false)), "Value")), { get: async () => L0["pfattoredat"], set: async (v) => { L0["pfattoredat"] = v; }, local: true });
    }
    if ($.truthy((await $.mv((await $.wv([$t228], "RadioButton5", C, false)), "Checked")))) {
      await $.wset([$t228], "v_nerezident2", 0, { get: async () => L0["v_nerezident2"], set: async (v) => { L0["v_nerezident2"] = v; }, local: true });
    } else {
      await $.wset([$t228], "v_nerezident2", 1, { get: async () => L0["v_nerezident2"], set: async (v) => { L0["v_nerezident2"] = v; }, local: true });
    }
    { const $t229 = (await $.mv((await $.wv([$t228], "RadioGroup3", C, false)), "ItemIndex"));
      if ($.eq($t229, (-(1)))) {
        await $.wset([$t228], "v_cust_type2", (-(1)), { get: async () => L0["v_cust_type2"], set: async (v) => { L0["v_cust_type2"] = v; }, local: true });
      }
      else if ($.eq($t229, 0)) {
        await $.wset([$t228], "v_cust_type2", 4, { get: async () => L0["v_cust_type2"], set: async (v) => { L0["v_cust_type2"] = v; }, local: true });
      }
      else if ($.eq($t229, 1)) {
        await $.wset([$t228], "v_cust_type2", 1, { get: async () => L0["v_cust_type2"], set: async (v) => { L0["v_cust_type2"] = v; }, local: true });
      }
      else if ($.eq($t229, 2)) {
        await $.wset([$t228], "v_cust_type2", 2, { get: async () => L0["v_cust_type2"], set: async (v) => { L0["v_cust_type2"] = v; }, local: true });
      }
      else if ($.eq($t229, 3)) {
        await $.wset([$t228], "v_cust_type2", 0, { get: async () => L0["v_cust_type2"], set: async (v) => { L0["v_cust_type2"] = v; }, local: true });
      }
      else if ($.eq($t229, 4)) {
        await $.wset([$t228], "v_cust_type2", 3, { get: async () => L0["v_cust_type2"], set: async (v) => { L0["v_cust_type2"] = v; }, local: true });
      }
    }
    await $.stmt((await $.mcall((await $.wv([$t228], "EXPESSPAC", C, false)), "CallProcedure", ["Exp_batchs_recupdate", ["v_status", 3, "v_id", (await $.wv([$t228], "vid", { get: async () => L0["vid"], set: async (v) => { L0["vid"] = v; }, local: true }, false)), "custid", (await $.wv([$t228], "custid2", { get: async () => L0["custid2"], set: async (v) => { L0["custid2"] = v; }, local: true }, false)), "v_doc_type", (await $.wv([$t228], "doc_type2", { get: async () => L0["doc_type2"], set: async (v) => { L0["doc_type2"] = v; }, local: true }, false)), "v_passpin", (await $.wv([$t228], "passpin2", { get: async () => L0["passpin2"], set: async (v) => { L0["passpin2"] = v; }, local: true }, false)), "v_passer", (await $.wv([$t228], "passer2", { get: async () => L0["passer2"], set: async (v) => { L0["passer2"] = v; }, local: true }, false)), "v_paspnum", (await $.wv([$t228], "paspnum2", { get: async () => L0["paspnum2"], set: async (v) => { L0["paspnum2"] = v; }, local: true }, false)), "v_doc_country", (await $.wv([$t228], "doc_country2", { get: async () => L0["doc_country2"], set: async (v) => { L0["doc_country2"] = v; }, local: true }, false)), "v_paspplace", (await $.wv([$t228], "paspplace2", { get: async () => L0["paspplace2"], set: async (v) => { L0["paspplace2"] = v; }, local: true }, false)), "v_paspdate", (await $.wv([$t228], "paspdate2", { get: async () => L0["paspdate2"], set: async (v) => { L0["paspdate2"] = v; }, local: true }, false)), "v_passexpire", (await $.wv([$t228], "passexpire2", { get: async () => L0["passexpire2"], set: async (v) => { L0["passexpire2"] = v; }, local: true }, false)), "v_citizenship", (await $.wv([$t228], "citizenship7", { get: async () => L0["citizenship7"], set: async (v) => { L0["citizenship7"] = v; }, local: true }, false)), "v_citizenship2", (await $.wv([$t228], "citizenship8", { get: async () => L0["citizenship8"], set: async (v) => { L0["citizenship8"] = v; }, local: true }, false)), "v_citizenship3", (await $.wv([$t228], "citizenship9", { get: async () => L0["citizenship9"], set: async (v) => { L0["citizenship9"] = v; }, local: true }, false)), "v_lastname", (await $.wv([$t228], "lastname2", { get: async () => L0["lastname2"], set: async (v) => { L0["lastname2"] = v; }, local: true }, false)), "v_soname", (await $.wv([$t228], "soname2", { get: async () => L0["soname2"], set: async (v) => { L0["soname2"] = v; }, local: true }, false)), "v_name", (await $.wv([$t228], "name2", { get: async () => L0["name2"], set: async (v) => { L0["name2"] = v; }, local: true }, false)), "v_sex", (await $.wv([$t228], "sex2", { get: async () => L0["sex2"], set: async (v) => { L0["sex2"] = v; }, local: true }, false)), "v_fam_status", (await $.wv([$t228], "fam_status2", { get: async () => L0["fam_status2"], set: async (v) => { L0["fam_status2"] = v; }, local: true }, false)), "v_bbirthplace", (await $.wv([$t228], "bbirthplace2", { get: async () => L0["bbirthplace2"], set: async (v) => { L0["bbirthplace2"] = v; }, local: true }, false)), "v_birth_state", (await $.wv([$t228], "birth_state2", { get: async () => L0["birth_state2"], set: async (v) => { L0["birth_state2"] = v; }, local: true }, false)), "v_birthday", (await $.wv([$t228], "birthday2", { get: async () => L0["birthday2"], set: async (v) => { L0["birthday2"] = v; }, local: true }, false)), "v_aadrs_state", (await $.wv([$t228], "aadrs_state2", { get: async () => L0["aadrs_state2"], set: async (v) => { L0["aadrs_state2"] = v; }, local: true }, false)), "v_city", (await $.wv([$t228], "city2", { get: async () => L0["city2"], set: async (v) => { L0["city2"] = v; }, local: true }, false)), "v_reg_zip", (await $.wv([$t228], "reg_zip2", { get: async () => L0["reg_zip2"], set: async (v) => { L0["reg_zip2"] = v; }, local: true }, false)), "v_address", (await $.wv([$t228], "address2", { get: async () => L0["address2"], set: async (v) => { L0["address2"] = v; }, local: true }, false)), "v_phone_m", (await $.wv([$t228], "phone_m2", { get: async () => L0["phone_m2"], set: async (v) => { L0["phone_m2"] = v; }, local: true }, false)), "v_phone_h", (await $.wv([$t228], "phone_h2", { get: async () => L0["phone_h2"], set: async (v) => { L0["phone_h2"] = v; }, local: true }, false)), "v_e_mail", (await $.wv([$t228], "e_mail2", { get: async () => L0["e_mail2"], set: async (v) => { L0["e_mail2"] = v; }, local: true }, false)), "v_filial", (await $.wv([$t228], "filial2", { get: async () => L0["filial2"], set: async (v) => { L0["filial2"] = v; }, local: true }, false)), "v_nerezident", (await $.wv([$t228], "v_nerezident2", { get: async () => L0["v_nerezident2"], set: async (v) => { L0["v_nerezident2"] = v; }, local: true }, false)), "v_cust_type", (await $.wv([$t228], "v_cust_type2", { get: async () => L0["v_cust_type2"], set: async (v) => { L0["v_cust_type2"] = v; }, local: true }, false)), "v_inn", (await $.wv([$t228], "v_inn2", { get: async () => L0["v_inn2"], set: async (v) => { L0["v_inn2"] = v; }, local: true }, false)), "debetid", (await $.wv([$t228], "debetid2", { get: async () => L0["debetid2"], set: async (v) => { L0["debetid2"] = v; }, local: true }, false)), "v_pfattorser", (await $.wv([$t228], "pfattorser", { get: async () => L0["pfattorser"], set: async (v) => { L0["pfattorser"] = v; }, local: true }, false)), "v_pfattornum", (await $.wv([$t228], "pfattornum", { get: async () => L0["pfattornum"], set: async (v) => { L0["pfattornum"] = v; }, local: true }, false)), "v_pfattorbdat", (await $.wv([$t228], "pfattorbdat", { get: async () => L0["pfattorbdat"], set: async (v) => { L0["pfattorbdat"] = v; }, local: true }, false)), "v_pfattoredat", (await $.wv([$t228], "pfattoredat", { get: async () => L0["pfattoredat"], set: async (v) => { L0["pfattoredat"] = v; }, local: true }, false)), "addinf", (await $.wv([$t228], "addinf", { get: async () => L0["addinf"], set: async (v) => { L0["addinf"] = v; }, local: true }, false))]])));
    await $.mcall((await $.wv([$t228], "ExpIncomingDataSet", C, false)), "Refresh", []);
    await $.stmt((await $.mcall((await $.wv([$t228], "ExpIncomingDataSet", C, false)), "Locate", ["id", (await $.wv([$t228], "id", C, false)), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TabSheet3")), "TabVisible", false);
  await $.mset((await $.v(C, "TabSheet2")), "TabVisible", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "TabSheet1")), "TabVisible")))) {
    await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TabSheet3")), "Visible", true);
  if ($.truthy((await $.mv((await $.v(C, "TabSheet3")), "TabVisible")))) {
    await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "ButtonNominalClick", async function ButtonNominalClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Rk", true);
  {
    const $t230 = (await $.v(C, "FormNominalCustomers"));
    await $.mset((await $.wv([$t230], "Label53", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label54", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label55", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label56", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label57", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label61", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label62", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label63", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label64", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label65", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label66", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label67", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label68", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label69", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label70", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label71", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label72", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label73", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label74", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label75", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label76", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label77", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label78", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    await $.mset((await $.wv([$t230], "Label79", C, false)), "Visible", (await $.wv([$t230], "true", C, false)));
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t230], "ExpFormNew", C, false)), "RadioButton1")), "Checked")))) {
      await $.mset((await $.mv((await $.wv([$t230], "FormNominalCustomers", C, false)), "RadioButton1")), "Checked", (await $.wv([$t230], "True", C, false)));
      await $.mset((await $.mv((await $.wv([$t230], "FormNominalCustomers", C, false)), "RadioButton2")), "Checked", (await $.wv([$t230], "false", C, false)));
    } else {
      await $.mset((await $.mv((await $.wv([$t230], "FormNominalCustomers", C, false)), "RadioButton2")), "Checked", (await $.wv([$t230], "True", C, false)));
      await $.mset((await $.mv((await $.wv([$t230], "FormNominalCustomers", C, false)), "RadioButton1")), "Checked", (await $.wv([$t230], "false", C, false)));
    }
    await $.stmt($.wcall([$t230], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "CBoxPassPlaceIICloseUp", async function CBoxPassPlaceIICloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t231 = (await $.mv((await $.v(C, "CBoxPassPlaceII")), "KeyValue"));
    if ($.eq($t231, 1)) {
      await $.mset((await $.v(C, "EditSerialII")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet1")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerialII")), "ReadOnly", true);
      await $.mset((await $.v(C, "EditPassportII")), "MaxLength", 8);
      await $.mcall((await $.v(C, "EditPassportII")), "Clear", []);
    }
    else if ($.eq($t231, 2)) {
      await $.mset((await $.v(C, "EditSerialII")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet1")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerialII")), "ReadOnly", true);
      await $.mset((await $.v(C, "EditPassportII")), "MaxLength", 8);
      await $.mcall((await $.v(C, "EditPassportII")), "Clear", []);
    }
    else if ($.eq($t231, 3)) {
      await $.mset((await $.v(C, "EditSerialII")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet1")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerialII")), "ReadOnly", false);
      await $.mset((await $.v(C, "EditPassportII")), "MaxLength", 0);
      await $.mcall((await $.v(C, "EditPassportII")), "Clear", []);
    }
    else if ($.eq($t231, 4)) {
      await $.mset((await $.v(C, "EditSerialII")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet1")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerialII")), "ReadOnly", false);
      await $.mset((await $.v(C, "EditPassportII")), "MaxLength", 0);
      await $.mcall((await $.v(C, "EditPassportII")), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "CBoxPassPlace2CloseUp", async function CBoxPassPlace2CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t232 = (await $.mv((await $.v(C, "CBoxPassPlace2")), "KeyValue"));
    if ($.eq($t232, 1)) {
      await $.mset((await $.v(C, "EditSerial2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet2")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerial2")), "ReadOnly", true);
      await $.mset((await $.v(C, "EditPassport2")), "MaxLength", 8);
      await $.mcall((await $.v(C, "EditPassport2")), "Clear", []);
    }
    else if ($.eq($t232, 2)) {
      await $.mset((await $.v(C, "EditSerial2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet2")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerial2")), "ReadOnly", true);
      await $.mset((await $.v(C, "EditPassport2")), "MaxLength", 8);
      await $.mcall((await $.v(C, "EditPassport2")), "Clear", []);
    }
    else if ($.eq($t232, 3)) {
      await $.mset((await $.v(C, "EditSerial2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet2")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerial2")), "ReadOnly", false);
      await $.mset((await $.v(C, "EditPassport2")), "MaxLength", 0);
      await $.mcall((await $.v(C, "EditPassport2")), "Clear", []);
    }
    else if ($.eq($t232, 4)) {
      await $.mset((await $.v(C, "EditSerial2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet2")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerial2")), "ReadOnly", false);
      await $.mset((await $.v(C, "EditPassport2")), "MaxLength", 0);
      await $.mcall((await $.v(C, "EditPassport2")), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TExpFormNew", "CBoxPassPlaceICloseUp", async function CBoxPassPlaceICloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t233 = (await $.mv((await $.v(C, "CBoxPassPlaceI")), "KeyValue"));
    if ($.eq($t233, 1)) {
      await $.mset((await $.v(C, "EditSerialI")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerialI")), "ReadOnly", true);
      await $.mset((await $.v(C, "EditPassportI")), "MaxLength", 8);
      await $.mcall((await $.v(C, "EditPassportI")), "Clear", []);
    }
    else if ($.eq($t233, 2)) {
      await $.mset((await $.v(C, "EditSerialI")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerialI")), "ReadOnly", true);
      await $.mset((await $.v(C, "EditPassportI")), "MaxLength", 8);
      await $.mcall((await $.v(C, "EditPassportI")), "Clear", []);
    }
    else if ($.eq($t233, 3)) {
      await $.mset((await $.v(C, "EditSerialI")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerialI")), "ReadOnly", false);
      await $.mset((await $.v(C, "EditPassportI")), "MaxLength", 0);
      await $.mcall((await $.v(C, "EditPassportI")), "Clear", []);
    }
    else if ($.eq($t233, 4)) {
      await $.mset((await $.v(C, "EditSerialI")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerialI")), "ReadOnly", false);
      await $.mset((await $.v(C, "EditPassportI")), "MaxLength", 0);
      await $.mcall((await $.v(C, "EditPassportI")), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
