// Generated from PCustServiceFormImpl1.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PCustServiceFormImpl1", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ActiveX", "AxCtrls", "PCustService_TLB", "StdVcl", "StdCtrls", "Grids", "DBGrids", "ExtCtrls", "Buttons", "ComCtrls", "ExtDlgs", "jpeg", "Menus", "XFSCtrls", "dblookup", "DBCtrls", "ShellApi", "PlatformDefaultStyleActnCtrls", "ActnPopup", "ToolWin", "Oracledata", "Variants", "DBGridEh", "Mask", "FormTransaction1Lmpl", "DB", "ImgList", "XDBGrids", "DBCtrlsEh", "DBLookupEh", "Oracle", "DBGridEhGrouping", "GridsEh", "CMCurrencyEdit", "TeEngine", "TeeProcs", "Chart", "Dialogs", "OleServer", "ExcelXP", "IOUtils", "ShlObj", "ComObj", "ComServ", "UnitDataModPCustService", "UnitTransaction", "addcombobox", "sboapiDataModuleImpl", "SBTranslateProc", "Creditİmpl", "DepozLmpl", "FormTransaction2Lmpl", "FormTransaction3Lmpl", "AccountPropertiesFLmpl", "AccountPropertiesLmpl", "AccounFlagsLmpl", "FormIntervalLmpl", "FormOperationLmpl", "CurrencyToHR_Azeri_Impl", "FormStatmentlmpl", "SMSFormİmpl", "AccountPropertiesEditFLmpl", "UnitFrm_Zoom", "Unit_Phys_fs", "MainFormIMPL", "CustomersImpl", "Pcust_CO_BookmarkSetupUnit", "Pcust_CO_BookmarkAddEditUnit", "HesabUnit", "Unit_quality", "Unit_id_quality", "OrderPrintUnit_tarif", "ExpUnittrans", "Unitembassy", "UnitEmbasyTrans", "Pcust_CO_frmWReportUnit", "Unitcust_potencial", "Unitqaime", "Unit8", "frommasinUni", "CommonDecls", "Unit_Other", "PEPUnit", "Printers", "SynPdf"]);
  const C = [U];
  U.enumType("toperationmode", 3);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omDelete", 2);
  U.defClass("TPCustServiceForm", "TActiveForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "popupactionbar1": {"name": "PopupActionBar1", "type": "TPopupActionBar"}, "kreditler": {"name": "Kreditler", "type": "TMenuItem"}, "depozit1": {"name": "Depozit1", "type": "TMenuItem"}, "plastikkartlar": {"name": "PlastikKartlar", "type": "TMenuItem"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "məhsullar": {"name": "Məhsullar", "type": "TToolButton"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "köçermeler": {"name": "Köçermeler", "type": "TToolButton"}, "əməliyyat": {"name": "Əməliyyat", "type": "TToolButton"}, "popupactionbar2": {"name": "PopupActionBar2", "type": "TPopupActionBar"}, "popupactionbar3": {"name": "PopupActionBar3", "type": "TPopupActionBar"}, "azps1": {"name": "AZPS1", "type": "TMenuItem"}, "swft1": {"name": "SWFT1", "type": "TMenuItem"}, "memorialorder1": {"name": "Memorialorder1", "type": "TMenuItem"}, "kassaorderi1": {"name": "Kassaorderi1", "type": "TMenuItem"}, "mliyyatlar1": {"name": "mliyyatlar1", "type": "TMenuItem"}, "popupcustomers": {"name": "PopUpCustomers", "type": "TPopupActionBar"}, "custsearch1": {"name": "CustSearch1", "type": "TMenuItem"}, "custadd1": {"name": "CustAdd1", "type": "TMenuItem"}, "custedit1": {"name": "CustEdit1", "type": "TMenuItem"}, "custclose1": {"name": "CustClose1", "type": "TMenuItem"}, "custclear1": {"name": "CustClear1", "type": "TMenuItem"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "cus_imagelist": {"name": "Cus_ImageList", "type": "TImageList"}, "panel_bsproc": {"name": "Panel_BsProc", "type": "TPanel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "popupaccountpropertiesf": {"name": "PopupAccountPropertiesF", "type": "TPopupActionBar"}, "hesabamaq1": {"name": "HesabAmaq1", "type": "TMenuItem"}, "hesabdanxar2": {"name": "Hesabdanxar2", "type": "TMenuItem"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "pm_xdbgrid1": {"name": "PM_XdbGrid1", "type": "TPopupMenu"}, "yaddasaxla1": {"name": "Yaddasaxla1", "type": "TMenuItem"}, "maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "maingrid2": {"name": "MainGrid2", "type": "TXDBGrid"}, "sm_email": {"name": "SM_Email", "type": "TToolButton"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet7": {"name": "TabSheet7", "type": "TTabSheet"}, "tabsheet8": {"name": "TabSheet8", "type": "TTabSheet"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xflaeditfirstname": {"name": "XFLaEditFirstName", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflaeditpatronymic": {"name": "XFLaEditPatronymic", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflaeditlastname": {"name": "XFLaEditLastName", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel35": {"name": "XFLabel35", "type": "TXFLabel"}, "xflabel36": {"name": "XFLabel36", "type": "TXFLabel"}, "btnfullnamegenerator": {"name": "BtnFullNameGenerator", "type": "TSpeedButton"}, "editlastname": {"name": "EditLastName", "type": "TEdit"}, "editpatronymic": {"name": "EditPatronymic", "type": "TEdit"}, "editfirstname": {"name": "EditFirstName", "type": "TEdit"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "editshort_name1": {"name": "EditShort_name1", "type": "TEdit"}, "tabsheet10": {"name": "TabSheet10", "type": "TTabSheet"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "xflacbox": {"name": "XFLaCBox", "type": "TXFLabel"}, "xflacboxgroup": {"name": "XFLaCBoxGroup", "type": "TXFLabel"}, "xflacombobox3": {"name": "XFLaComboBox3", "type": "TXFLabel"}, "cboxgroup": {"name": "CBoxGroup", "type": "TComboBox"}, "combobox3": {"name": "ComboBox3", "type": "TComboBox"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xflacboxdoctype": {"name": "XFLaCBoxDocType", "type": "TXFLabel"}, "xfladocser": {"name": "XFLaDocSer", "type": "TXFLabel"}, "xflacboxdocplace": {"name": "XFLaCBoxDocPlace", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "xflabel29": {"name": "XFLabel29", "type": "TXFLabel"}, "editdocserie": {"name": "EditDocSerie", "type": "TEdit"}, "editdocnumber": {"name": "EditDocNumber", "type": "TEdit"}, "cboxdoctype": {"name": "CBoxDocType", "type": "TDBLookupComboBox"}, "editpincode": {"name": "EditPINCode", "type": "TEdit"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "xflabel22": {"name": "XFLabel22", "type": "TXFLabel"}, "editphonecity": {"name": "EditPhoneCity", "type": "TEdit"}, "tabsheet9": {"name": "TabSheet9", "type": "TTabSheet"}, "xfpanel18": {"name": "XFPanel18", "type": "TXFPanel"}, "xfpanel16": {"name": "XFPanel16", "type": "TXFPanel"}, "xfbutton18": {"name": "XFButton18", "type": "TXFButton"}, "xfbutton19": {"name": "XFButton19", "type": "TXFButton"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "memonotes": {"name": "MemoNotes", "type": "TMemo"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xflabel30": {"name": "XFLabel30", "type": "TXFLabel"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "xflabel31": {"name": "XFLabel31", "type": "TXFLabel"}, "xflabel32": {"name": "XFLabel32", "type": "TXFLabel"}, "xflabel33": {"name": "XFLabel33", "type": "TXFLabel"}, "xflabel34": {"name": "XFLabel34", "type": "TXFLabel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "xfbitbtn11": {"name": "XFBitBtn11", "type": "TXFBitBtn"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanelteyp": {"name": "XFPanelTeyp", "type": "TXFPanel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "editid": {"name": "EditID", "type": "TEdit"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xflacboxdoctype1": {"name": "XFLaCBoxDocType1", "type": "TXFLabel"}, "xfladocser1": {"name": "XFLaDocSer1", "type": "TXFLabel"}, "cboxdoctype1": {"name": "CBoxDocType1", "type": "TDBLookupComboBox"}, "editdocserie1": {"name": "EditDocSerie1", "type": "TEdit"}, "editdocnumber1": {"name": "EditDocNumber1", "type": "TEdit"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xflaedititn": {"name": "XFLaEditITN", "type": "TXFLabel"}, "xfradiogroupcust_type": {"name": "XFRadioGroupCust_type", "type": "TXFRadioGroup"}, "edititn": {"name": "EditITN", "type": "TEdit"}, "xfradiogroupcust_type1": {"name": "XFRadioGroupCust_type1", "type": "TXFRadioGroup"}, "hesabnredaktedilmesi1": {"name": "HesabnRedaktedilmesi1", "type": "TMenuItem"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "yenikreditinverilmsi1": {"name": "Yenikreditinverilmsi1", "type": "TMenuItem"}, "mtrininkreditlri1": {"name": "Mtrininkreditlri1", "type": "TMenuItem"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "actionareacb": {"name": "ActionAreaCB", "type": "TComboBox"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "tabsheet11": {"name": "TabSheet11", "type": "TTabSheet"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "xflabel37": {"name": "XFLabel37", "type": "TXFLabel"}, "xflabel61": {"name": "XFLabel61", "type": "TXFLabel"}, "xflabel62": {"name": "XFLabel62", "type": "TXFLabel"}, "xflabel63": {"name": "XFLabel63", "type": "TXFLabel"}, "xflabel64": {"name": "XFLabel64", "type": "TXFLabel"}, "xflabel65": {"name": "XFLabel65", "type": "TXFLabel"}, "xflabel66": {"name": "XFLabel66", "type": "TXFLabel"}, "editfullname": {"name": "EditFullName", "type": "TEdit"}, "organizationtypecb": {"name": "OrganizationTypeCB", "type": "TComboBox"}, "branchcb": {"name": "BranchCB", "type": "TComboBox"}, "taxareacb": {"name": "TaXAreaCB", "type": "TComboBox"}, "editshort_name": {"name": "EditShort_name", "type": "TEdit"}, "dblc_incorp_cntr": {"name": "DBLC_INCORP_CNTR", "type": "TDBLookupComboBox"}, "db_incorp_state": {"name": "DB_INCORP_STATE", "type": "TEdit"}, "incor_number": {"name": "incor_number", "type": "TEdit"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xflabel38": {"name": "XFLabel38", "type": "TXFLabel"}, "xflabel39": {"name": "XFLabel39", "type": "TXFLabel"}, "xflabel40": {"name": "XFLabel40", "type": "TXFLabel"}, "xflabel43": {"name": "XFLabel43", "type": "TXFLabel"}, "xflabel44": {"name": "XFLabel44", "type": "TXFLabel"}, "xflabel45": {"name": "XFLabel45", "type": "TXFLabel"}, "xflabel46": {"name": "XFLabel46", "type": "TXFLabel"}, "xflabel47": {"name": "XFLabel47", "type": "TXFLabel"}, "xflabel48": {"name": "XFLabel48", "type": "TXFLabel"}, "xflabel49": {"name": "XFLabel49", "type": "TXFLabel"}, "xflabel51": {"name": "XFLabel51", "type": "TXFLabel"}, "xflabel52": {"name": "XFLabel52", "type": "TXFLabel"}, "xflabel54": {"name": "XFLabel54", "type": "TXFLabel"}, "xflabel55": {"name": "XFLabel55", "type": "TXFLabel"}, "xflabel56": {"name": "XFLabel56", "type": "TXFLabel"}, "xflabel58": {"name": "XFLabel58", "type": "TXFLabel"}, "xflabel59": {"name": "XFLabel59", "type": "TXFLabel"}, "xflabel60": {"name": "XFLabel60", "type": "TXFLabel"}, "citybyconcttype": {"name": "CityByConctType", "type": "TDBLookupComboBox"}, "countrybyconcttype": {"name": "CountryByConctType", "type": "TDBLookupComboBox"}, "dbedit_countrycode": {"name": "DBEdit_CountryCode", "type": "TDBEdit"}, "tph_country_prefix": {"name": "tph_country_prefix", "type": "TDBLookupComboBox"}, "tph_communication_type": {"name": "tph_communication_type", "type": "TDBLookupComboBox"}, "db_tph_state": {"name": "db_tph_state", "type": "TEdit"}, "db_tph_adress": {"name": "db_tph_adress", "type": "TEdit"}, "db_tph_number": {"name": "Db_tph_number", "type": "TEdit"}, "db_tph_extension": {"name": "Db_tph_extension", "type": "TEdit"}, "db_tph_zip": {"name": "DB_tph_zip", "type": "TEdit"}, "xflabel67": {"name": "XFLabel67", "type": "TXFLabel"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xflacboxbirthcity": {"name": "XFLaCBoxBirthCity", "type": "TXFLabel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "xflacboxbirthstate": {"name": "XFLaCBoxBirthState", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "editaddress": {"name": "EditAddress", "type": "TEdit"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "fakt_adrs_state": {"name": "Fakt_Adrs_State", "type": "TDBLookupComboBox"}, "fakt_adrs_city": {"name": "Fakt_Adrs_City", "type": "TDBLookupComboBox"}, "zipfakt": {"name": "ZipFakt", "type": "TEdit"}, "editaddressfactical": {"name": "EditAddressFactical", "type": "TEdit"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "xflabel50": {"name": "XFLabel50", "type": "TXFLabel"}, "xflabel68": {"name": "XFLabel68", "type": "TXFLabel"}, "xflabel69": {"name": "XFLabel69", "type": "TXFLabel"}, "xflabel70": {"name": "XFLabel70", "type": "TXFLabel"}, "xflabel71": {"name": "XFLabel71", "type": "TXFLabel"}, "dbcbox_citizenship3": {"name": "DBCBox_Citizenship3", "type": "TDBLookupComboBox"}, "dbcbox_citizenship2": {"name": "DBCBox_Citizenship2", "type": "TDBLookupComboBox"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xflabel72": {"name": "XFLabel72", "type": "TXFLabel"}, "xflabel73": {"name": "XFLabel73", "type": "TXFLabel"}, "issue_country": {"name": "issue_country", "type": "TDBLookupComboBox"}, "xflabel74": {"name": "XFLabel74", "type": "TXFLabel"}, "xflabel75": {"name": "XFLabel75", "type": "TXFLabel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "work_place": {"name": "Work_Place", "type": "TEdit"}, "work_post": {"name": "Work_Post", "type": "TEdit"}, "work_address": {"name": "Work_Address", "type": "TEdit"}, "work_phone": {"name": "Work_Phone", "type": "TEdit"}, "xflabel76": {"name": "XFLabel76", "type": "TXFLabel"}, "xflabel77": {"name": "XFLabel77", "type": "TXFLabel"}, "xflabel78": {"name": "XFLabel78", "type": "TXFLabel"}, "xflabel79": {"name": "XFLabel79", "type": "TXFLabel"}, "xflabel80": {"name": "XFLabel80", "type": "TXFLabel"}, "xflabel81": {"name": "XFLabel81", "type": "TXFLabel"}, "xflabel82": {"name": "XFLabel82", "type": "TXFLabel"}, "xflabel83": {"name": "XFLabel83", "type": "TXFLabel"}, "xflabel84": {"name": "XFLabel84", "type": "TXFLabel"}, "xflabel85": {"name": "XFLabel85", "type": "TXFLabel"}, "xflabel86": {"name": "XFLabel86", "type": "TXFLabel"}, "xflabel87": {"name": "XFLabel87", "type": "TXFLabel"}, "image3": {"name": "Image3", "type": "TImage"}, "image1": {"name": "Image1", "type": "TImage"}, "image2": {"name": "Image2", "type": "TImage"}, "image4": {"name": "Image4", "type": "TImage"}, "xflabel23": {"name": "XFLabel23", "type": "TXFLabel"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit_url": {"name": "Edit_url", "type": "TEdit"}, "xflabel53": {"name": "XFLabel53", "type": "TXFLabel"}, "xflabel88": {"name": "XFLabel88", "type": "TXFLabel"}, "hhh1": {"name": "hhh1", "type": "TMenuItem"}, "xflabel89": {"name": "XFLabel89", "type": "TXFLabel"}, "xflabel90": {"name": "XFLabel90", "type": "TXFLabel"}, "xflabel91": {"name": "XFLabel91", "type": "TXFLabel"}, "editbic": {"name": "EditBic", "type": "TEdit"}, "xflabel93": {"name": "XFLabel93", "type": "TXFLabel"}, "xflabel94": {"name": "XFLabel94", "type": "TXFLabel"}, "combobox_risk": {"name": "ComboBox_risk", "type": "TDBLookupComboBox"}, "cboxbirthstate": {"name": "CBoxBirthState", "type": "TDBLookupComboBox"}, "cboxbirthcity": {"name": "CBoxBirthCity", "type": "TDBLookupComboBox"}, "cboxaddresscity": {"name": "CBoxAddressCity", "type": "TDBLookupComboBox"}, "labelsamelydate": {"name": "LabelSamelyDate", "type": "TXFLabel"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "xflabel95": {"name": "XFLabel95", "type": "TXFLabel"}, "xflabel96": {"name": "XFLabel96", "type": "TXFLabel"}, "comb_riskdescid": {"name": "Comb_riskdescid", "type": "TDBLookupComboBox"}, "xfbitcontinue": {"name": "XFBitcontinue", "type": "TXFBitBtn"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}, "cboxdocplace2": {"name": "CBoxDocPlace2", "type": "TComboBox"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "xflabel97": {"name": "XFLabel97", "type": "TXFLabel"}, "xflabel98": {"name": "XFLabel98", "type": "TXFLabel"}, "xflabel99": {"name": "XFLabel99", "type": "TXFLabel"}, "xhks1": {"name": "XHKS1", "type": "TMenuItem"}, "tph_contact_type": {"name": "tph_contact_type", "type": "TDBLookupComboBox"}, "address_type": {"name": "Address_type", "type": "TDBLookupComboBox"}, "xflabel100": {"name": "XFLabel100", "type": "TXFLabel"}, "xflabel101": {"name": "XFLabel101", "type": "TXFLabel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "xfbutton6": {"name": "XFButton6", "type": "TXFButton"}, "button3": {"name": "Button3", "type": "TButton"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel25": {"name": "XFLabel25", "type": "TXFLabel"}, "xflabel26": {"name": "XFLabel26", "type": "TXFLabel"}, "xflabel27": {"name": "XFLabel27", "type": "TXFLabel"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "dtp_ustav": {"name": "Dtp_Ustav", "type": "TDBDateTimeEditEh"}, "dpt_nal": {"name": "Dpt_Nal", "type": "TDBDateTimeEditEh"}, "dateti_samelydate": {"name": "DateTi_samelydate", "type": "TDBDateTimeEditEh"}, "dtpickerbirthdate": {"name": "DTPickerBirthDate", "type": "TDBDateTimeEditEh"}, "dtpickerdocdate": {"name": "DTPickerDocDate", "type": "TDBDateTimeEditEh"}, "dtpickerdocexpirydate": {"name": "DTPickerDocExpiryDate", "type": "TDBDateTimeEditEh"}, "xflabel28": {"name": "XFLabel28", "type": "TXFLabel"}, "xflabel57": {"name": "XFLabel57", "type": "TXFLabel"}, "cbox": {"name": "CBox", "type": "TDBLookupComboBox"}, "xflabel102": {"name": "XFLabel102", "type": "TXFLabel"}, "xflabel104": {"name": "XFLabel104", "type": "TXFLabel"}, "xflabel105": {"name": "XFLabel105", "type": "TXFLabel"}, "db_work_vid_sob": {"name": "Db_WORK_VID_SOB", "type": "TDBLookupComboBox"}, "db_work_otrasli": {"name": "Db_WORK_OTRASLI", "type": "TDBLookupComboBox"}, "dmtapr1": {"name": "dmtapr1", "type": "TMenuItem"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton10": {"name": "ToolButton10", "type": "TToolButton"}, "toolbutton11": {"name": "ToolButton11", "type": "TToolButton"}, "müqavilə_capı": {"name": "Müqavilə_capı", "type": "TPopupMenu"}, "mqavilapsazlama1": {"name": "Mqavilapsazlama1", "type": "TMenuItem"}, "ddd1": {"name": "ddd1", "type": "TMenuItem"}, "timer2": {"name": "Timer2", "type": "TTimer"}, "xflabel_tipacc": {"name": "XFLabel_tipacc", "type": "TXFLabel"}, "sazlama1": {"name": "Sazlama1", "type": "TMenuItem"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "id_quality_dblookupcomboboxeh": {"name": "id_quality_DBLookupComboboxEh", "type": "TDBLookupComboboxEh"}, "buttonmeyar": {"name": "ButtonMeyar", "type": "TXFButton"}, "xflepincode1": {"name": "XFLEPINCode1", "type": "TXFLabel"}, "xflabel92": {"name": "XFLabel92", "type": "TXFLabel"}, "editpincode1": {"name": "EditPINCode1", "type": "TEdit"}, "rbtnresident": {"name": "RBtnResident", "type": "TXFRadioButton"}, "xflabel41": {"name": "XFLabel41", "type": "TXFLabel"}, "rbtnnoresident": {"name": "RBtnNoResident", "type": "TXFRadioButton"}, "xflabel42": {"name": "XFLabel42", "type": "TXFLabel"}, "xflabel106": {"name": "XFLabel106", "type": "TXFLabel"}, "dblocbox_fakt_adress_owner": {"name": "DBLoCbox_fakt_adress_owner", "type": "TDBLookupComboBox"}, "xflabel107": {"name": "XFLabel107", "type": "TXFLabel"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "image5": {"name": "Image5", "type": "TImage"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "openpicturedialog1": {"name": "OpenPictureDialog1", "type": "TOpenPictureDialog"}, "opendialog1": {"name": "OpenDialog1", "type": "TOpenDialog"}, "editphonemob": {"name": "EditPhoneMob", "type": "TMaskEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "button4": {"name": "Button4", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "xflabel103": {"name": "XFLabel103", "type": "TXFLabel"}, "edit_monthlyprofit": {"name": "Edit_MONTHLYPROFIT", "type": "TEdit"}, "xflabel108": {"name": "XFLabel108", "type": "TXFLabel"}, "xflabel110": {"name": "XFLabel110", "type": "TXFLabel"}, "xflabel111": {"name": "XFLabel111", "type": "TXFLabel"}, "edit_activity": {"name": "Edit_activity", "type": "TEdit"}, "edit_profession": {"name": "Edit_profession", "type": "TEdit"}, "edit_source_of_income": {"name": "Edit_source_of_income", "type": "TEdit"}, "xflabel112": {"name": "XFLabel112", "type": "TXFLabel"}, "xflabel113": {"name": "XFLabel113", "type": "TXFLabel"}, "xflabel114": {"name": "XFLabel114", "type": "TXFLabel"}, "qeydlr1": {"name": "Qeydlr1", "type": "TMenuItem"}, "xflabel115": {"name": "XFLabel115", "type": "TXFLabel"}, "xflabel116": {"name": "XFLabel116", "type": "TXFLabel"}, "xflabel117": {"name": "XFLabel117", "type": "TXFLabel"}, "xflabel109": {"name": "XFLabel109", "type": "TXFLabel"}, "dblookup_cust_compani": {"name": "DBLookup_cust_compani", "type": "TDBLookupComboBox"}, "xflabel120": {"name": "XFLabel120", "type": "TXFLabel"}, "xflabel121": {"name": "XFLabel121", "type": "TXFLabel"}, "edit_sferkod": {"name": "Edit_SFERKOD", "type": "TEdit"}, "xflabel122": {"name": "XFLabel122", "type": "TXFLabel"}, "tarif": {"name": "Tarif", "type": "TMenuItem"}, "mq1": {"name": "Mq1", "type": "TMenuItem"}, "xflabel123": {"name": "XFLabel123", "type": "TXFLabel"}, "dbdatetimeediteh_gerdat": {"name": "DBDateTimeEditEh_gerdat", "type": "TDBDateTimeEditEh"}, "edit_reg_no": {"name": "Edit_reg_no", "type": "TEdit"}, "cboxcitizenship": {"name": "CBoxCitizenship", "type": "TDBLookupComboBox"}, "expemmeliyyat1": {"name": "Expemmeliyyat1", "type": "TMenuItem"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1line": {"name": "OracleDataSet1LINE", "type": "TFloatField"}, "sefirlik1": {"name": "sefirlik1", "type": "TMenuItem"}, "mqavilapnominal1": {"name": "MqavilapNominal1", "type": "TMenuItem"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "xflabel124": {"name": "XFLabel124", "type": "TXFLabel"}, "xflabel125": {"name": "XFLabel125", "type": "TXFLabel"}, "xflabel126": {"name": "XFLabel126", "type": "TXFLabel"}, "xflabel127": {"name": "XFLabel127", "type": "TXFLabel"}, "xflabel128": {"name": "XFLabel128", "type": "TXFLabel"}, "potencialm1": {"name": "potencialm1", "type": "TMenuItem"}, "xflabel130": {"name": "XFLabel130", "type": "TXFLabel"}, "xflabel132": {"name": "XFLabel132", "type": "TXFLabel"}, "xflabel134": {"name": "XFLabel134", "type": "TXFLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TWideStringField"}, "oracledataset2name": {"name": "OracleDataSet2NAME", "type": "TWideStringField"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "xflacboxgender": {"name": "XFLaCBoxGender", "type": "TXFLabel"}, "xflabel118": {"name": "XFLabel118", "type": "TXFLabel"}, "cboxgender": {"name": "CBoxGender", "type": "TComboBox"}, "xflacboxfamstatus": {"name": "XFLaCBoxFamStatus", "type": "TXFLabel"}, "xflabel119": {"name": "XFLabel119", "type": "TXFLabel"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TComboBox"}, "qaime": {"name": "Qaime", "type": "TMenuItem"}, "odsxx1": {"name": "odsxx1", "type": "TOracleDataSet"}, "odsxx1id": {"name": "odsxx1ID", "type": "TFloatField"}, "odsxx1op_id": {"name": "odsxx1OP_ID", "type": "TFloatField"}, "odsxx1no_prov": {"name": "odsxx1NO_PROV", "type": "TWideStringField"}, "odsxx1dat": {"name": "odsxx1DAT", "type": "TDateTimeField"}, "odsxx1debt": {"name": "odsxx1DEBT", "type": "TFloatField"}, "odsxx1kredit": {"name": "odsxx1KREDIT", "type": "TFloatField"}, "odsxx1val_acc": {"name": "odsxx1VAL_ACC", "type": "TFloatField"}, "odsxx1vid_op": {"name": "odsxx1VID_OP", "type": "TIntegerField"}, "odsxx1ammount": {"name": "odsxx1AMMOUNT", "type": "TFloatField"}, "odsxx1lammount": {"name": "odsxx1LAMMOUNT", "type": "TFloatField"}, "odsxx1tim": {"name": "odsxx1TIM", "type": "TDateTimeField"}, "odsxx1shifr": {"name": "odsxx1SHIFR", "type": "TIntegerField"}, "odsxx1no_pack": {"name": "odsxx1NO_PACK", "type": "TIntegerField"}, "odsxx1kassa_b": {"name": "odsxx1KASSA_B", "type": "TWideStringField"}, "odsxx1kassa_z": {"name": "odsxx1KASSA_Z", "type": "TIntegerField"}, "odsxx1no_filial": {"name": "odsxx1NO_FILIAL", "type": "TIntegerField"}, "odsxx1sloj_prov": {"name": "odsxx1SLOJ_PROV", "type": "TIntegerField"}, "odsxx1bank_d": {"name": "odsxx1BANK_D", "type": "TFloatField"}, "odsxx1bank_k": {"name": "odsxx1BANK_K", "type": "TFloatField"}, "odsxx1no_doc": {"name": "odsxx1NO_DOC", "type": "TIntegerField"}, "odsxx1no_mem": {"name": "odsxx1NO_MEM", "type": "TIntegerField"}, "odsxx1d1": {"name": "odsxx1D1", "type": "TWideStringField"}, "odsxx1k1": {"name": "odsxx1K1", "type": "TWideStringField"}, "odsxx1rate_d": {"name": "odsxx1RATE_D", "type": "TFloatField"}, "odsxx1rate_c": {"name": "odsxx1RATE_C", "type": "TFloatField"}, "odsxx1parentid": {"name": "odsxx1PARENTID", "type": "TFloatField"}, "odsxx1currencyid_c": {"name": "odsxx1CURRENCYID_C", "type": "TIntegerField"}, "odsxx1ammount_c": {"name": "odsxx1AMMOUNT_C", "type": "TFloatField"}, "odsxx1name": {"name": "odsxx1NAME", "type": "TWideStringField"}, "odsxx1temptrid": {"name": "odsxx1TEMPTRID", "type": "TFloatField"}, "odsxx1rejectreason": {"name": "odsxx1REJECTREASON", "type": "TWideStringField"}, "odsxx1rejected": {"name": "odsxx1REJECTED", "type": "TFloatField"}, "odsxx1reportid": {"name": "odsxx1REPORTID", "type": "TFloatField"}, "odsxx1countrid": {"name": "odsxx1COUNTRID", "type": "TFloatField"}, "odsxx1committime": {"name": "odsxx1COMMITTIME", "type": "TDateTimeField"}, "odsxx1userinsert": {"name": "odsxx1USERINSERT", "type": "TWideStringField"}, "odsxx1usercommit": {"name": "odsxx1USERCOMMIT", "type": "TWideStringField"}, "odsxx1bdg_code": {"name": "odsxx1BDG_CODE", "type": "TWideStringField"}, "xflabel129": {"name": "XFLabel129", "type": "TXFLabel"}, "xflabel135": {"name": "XFLabel135", "type": "TXFLabel"}, "xflabel136": {"name": "XFLabel136", "type": "TXFLabel"}, "ods_masinaxtaris": {"name": "ods_masinAxtaris", "type": "TOracleDataSet"}, "panelmasin": {"name": "panelMasin", "type": "TXFPanel"}, "editmasin": {"name": "EditMasin", "type": "TEdit"}, "tonaj": {"name": "tonaj", "type": "TMenuItem"}, "button6": {"name": "Button6", "type": "TButton"}, "tabsheet12": {"name": "TabSheet12", "type": "TTabSheet"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel137": {"name": "XFLabel137", "type": "TXFLabel"}, "xflabel138": {"name": "XFLabel138", "type": "TXFLabel"}, "xflabel139": {"name": "XFLabel139", "type": "TXFLabel"}, "xflabel140": {"name": "XFLabel140", "type": "TXFLabel"}, "xflabel141": {"name": "XFLabel141", "type": "TXFLabel"}, "xflabel142": {"name": "XFLabel142", "type": "TXFLabel"}, "xflabel143": {"name": "XFLabel143", "type": "TXFLabel"}, "faktor_muq": {"name": "faktor_muq", "type": "TEdit"}, "faktor_hesab": {"name": "faktor_hesab", "type": "TEdit"}, "faktor_bank": {"name": "faktor_bank", "type": "TEdit"}, "faktor_bankkod": {"name": "faktor_bankkod", "type": "TEdit"}, "faktor_muxhesab": {"name": "faktor_muxhesab", "type": "TEdit"}, "faktor_swift": {"name": "faktor_swift", "type": "TEdit"}, "faktor_dat": {"name": "faktor_dat", "type": "TDBDateTimeEditEh"}, "cboxaddressstate": {"name": "CBoxAddressState", "type": "TDBLookupComboBox"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "xflabel133": {"name": "XFLabel133", "type": "TXFLabel"}, "oracledataset3id": {"name": "OracleDataSet3ID", "type": "TFloatField"}, "oracledataset3name": {"name": "OracleDataSet3NAME", "type": "TWideStringField"}, "xflabel145": {"name": "XFLabel145", "type": "TXFLabel"}, "xflabel131": {"name": "XFLabel131", "type": "TXFLabel"}, "xflabel144": {"name": "XFLabel144", "type": "TXFLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "other": {"name": "OTher", "type": "TMenuItem"}, "dblookupc_sfereday_kod": {"name": "DBLookupC_sfereday_kod", "type": "TDBLookupComboboxEh"}, "ods_custnote": {"name": "ods_custnote", "type": "TOracleDataSet"}, "ods_user": {"name": "ods_user", "type": "TOracleDataSet"}, "ods_tim": {"name": "ods_tim", "type": "TOracleDataSet"}, "ods_userfullname": {"name": "ods_userFULLNAME", "type": "TWideStringField"}, "ods_timtarix": {"name": "ods_timTARIX", "type": "TDateTimeField"}, "ods_timsaat": {"name": "ods_timSAAT", "type": "TWideStringField"}, "xfbitbtnhms": {"name": "XFBitBtnHMS", "type": "TXFBitBtn"}, "odsbankinfo": {"name": "odsbankinfo", "type": "TOracleDataSet"}, "odsbankinfoaz_name": {"name": "odsbankinfoAZ_NAME", "type": "TWideStringField"}, "hmsyoxlama1": {"name": "HMSYoxlama1", "type": "TMenuItem"}, "xfbutton7": {"name": "XFButton7", "type": "TXFButton"}, "xfcust": {"name": "XFCust", "type": "TXFBitBtn"}, "tabsheet13": {"name": "TabSheet13", "type": "TTabSheet"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xflabel146": {"name": "XFLabel146", "type": "TXFLabel"}, "edit_grop_name": {"name": "Edit_grop_name", "type": "TEdit"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "ods_cust_group": {"name": "ods_cust_group", "type": "TOracleDataSet"}, "dsrc_cust_group": {"name": "dsrc_cust_group", "type": "TDataSource"}, "dblookupcombob_grop": {"name": "DBLookupCombob_grop", "type": "TDBLookupComboboxEh"}, "xflabel147": {"name": "XFLabel147", "type": "TXFLabel"}, "dblookupcomb_bankkard": {"name": "DBLookupComb_BankKard", "type": "TDBLookupComboboxEh"}, "oracledataset5": {"name": "OracleDataSet5", "type": "TOracleDataSet"}, "datasource4": {"name": "DataSource4", "type": "TDataSource"}, "datasource5": {"name": "DataSource5", "type": "TDataSource"}, "oracledataset6": {"name": "OracleDataSet6", "type": "TOracleDataSet"}, "xflabel148": {"name": "XFLabel148", "type": "TXFLabel"}, "dblookupcomb_borrower_occupation": {"name": "DBLookupComb_borrower_occupation", "type": "TDBLookupComboboxEh"}, "datasource6": {"name": "DataSource6", "type": "TDataSource"}, "oracledataset7": {"name": "OracleDataSet7", "type": "TOracleDataSet"}, "datasource7": {"name": "DataSource7", "type": "TDataSource"}, "oracledataset8": {"name": "OracleDataSet8", "type": "TOracleDataSet"}, "xflabel151": {"name": "XFLabel151", "type": "TXFLabel"}, "dblookupcombobiflas": {"name": "DBLookupCombobiflas", "type": "TDBLookupComboboxEh"}, "datasource8": {"name": "DataSource8", "type": "TDataSource"}, "oracledataset9": {"name": "OracleDataSet9", "type": "TOracleDataSet"}, "oracledataset10": {"name": "OracleDataSet10", "type": "TOracleDataSet"}, "datasource9": {"name": "DataSource9", "type": "TDataSource"}, "xflabel152": {"name": "XFLabel152", "type": "TXFLabel"}, "dblookupcomb_borrower_bad": {"name": "DBLookupComb_borrower_bad", "type": "TDBLookupComboboxEh"}, "oracledataset9id": {"name": "OracleDataSet9ID", "type": "TWideStringField"}, "oracledataset9name": {"name": "OracleDataSet9NAME", "type": "TWideStringField"}, "oracledataset7id": {"name": "OracleDataSet7ID", "type": "TWideStringField"}, "oracledataset7name": {"name": "OracleDataSet7NAME", "type": "TWideStringField"}, "oracledataset8id": {"name": "OracleDataSet8ID", "type": "TWideStringField"}, "oracledataset8name": {"name": "OracleDataSet8NAME", "type": "TWideStringField"}, "oracledataset10id": {"name": "OracleDataSet10ID", "type": "TWideStringField"}, "oracledataset10name": {"name": "OracleDataSet10NAME", "type": "TWideStringField"}, "oracledataset6id": {"name": "OracleDataSet6ID", "type": "TWideStringField"}, "oracledataset6name": {"name": "OracleDataSet6NAME", "type": "TWideStringField"}, "oracledataset5id": {"name": "OracleDataSet5ID", "type": "TWideStringField"}, "oracledataset5name": {"name": "OracleDataSet5NAME", "type": "TWideStringField"}, "oracledataset4id": {"name": "OracleDataSet4ID", "type": "TWideStringField"}, "oracledataset4name": {"name": "OracleDataSet4NAME", "type": "TWideStringField"}, "xfbutton8": {"name": "XFButton8", "type": "TXFButton"}, "xfbutton9": {"name": "XFButton9", "type": "TXFButton"}, "panel_relative": {"name": "Panel_relative", "type": "TXFPanel"}, "xdbgrid2": {"name": "XDBGrid2", "type": "TXDBGrid"}, "xflabel153": {"name": "XFLabel153", "type": "TXFLabel"}, "xfbutton10": {"name": "XFButton10", "type": "TXFButton"}, "xflabel154": {"name": "XFLabel154", "type": "TXFLabel"}, "xflabel155": {"name": "XFLabel155", "type": "TXFLabel"}, "xflabel156": {"name": "XFLabel156", "type": "TXFLabel"}, "xflabel158": {"name": "XFLabel158", "type": "TXFLabel"}, "xflabel159": {"name": "XFLabel159", "type": "TXFLabel"}, "xflabel160": {"name": "XFLabel160", "type": "TXFLabel"}, "xflabel161": {"name": "XFLabel161", "type": "TXFLabel"}, "xflabel162": {"name": "XFLabel162", "type": "TXFLabel"}, "xflabel163": {"name": "XFLabel163", "type": "TXFLabel"}, "xflabel164": {"name": "XFLabel164", "type": "TXFLabel"}, "xflabel165": {"name": "XFLabel165", "type": "TXFLabel"}, "xflabel166": {"name": "XFLabel166", "type": "TXFLabel"}, "xflabel167": {"name": "XFLabel167", "type": "TXFLabel"}, "revenue": {"name": "Revenue", "type": "TEdit"}, "ebitda": {"name": "Ebitda", "type": "TEdit"}, "netprofit": {"name": "NetProfit", "type": "TEdit"}, "totalcapital": {"name": "TotalCapital", "type": "TEdit"}, "ebit": {"name": "Ebit", "type": "TEdit"}, "interestexpences": {"name": "InterestExpences", "type": "TEdit"}, "totalassets": {"name": "TotalAssets", "type": "TEdit"}, "totalassetsforeigncurrency": {"name": "TotalAssetsForeignCurrency", "type": "TEdit"}, "totalliabilitiesforeigncurrency": {"name": "TotalLiabilitiesForeignCurrency", "type": "TEdit"}, "xflabel157": {"name": "XFLabel157", "type": "TXFLabel"}, "totalliabilities": {"name": "TotalLiabilities", "type": "TEdit"}, "interestexpenceliabilities": {"name": "InterestExpenceLiabilities", "type": "TEdit"}, "foreigninterestexpenceliabilities": {"name": "ForeignInterestExpenceLiabilities", "type": "TEdit"}, "xflabel168": {"name": "XFLabel168", "type": "TXFLabel"}, "oracledataset11": {"name": "OracleDataSet11", "type": "TOracleDataSet"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "widestringfield2": {"name": "WideStringField2", "type": "TWideStringField"}, "datasource10": {"name": "DataSource10", "type": "TDataSource"}, "dblookupinsolvencystatus": {"name": "DBLookupInsolvencyStatus", "type": "TDBLookupComboboxEh"}, "reportingdate": {"name": "ReportingDate", "type": "TDBDateTimeEditEh"}, "reporttype": {"name": "ReportType", "type": "TDBLookupComboboxEh"}, "oracledataset12": {"name": "OracleDataSet12", "type": "TOracleDataSet"}, "oracledataset13": {"name": "OracleDataSet13", "type": "TOracleDataSet"}, "datasource11": {"name": "DataSource11", "type": "TDataSource"}, "datasource12": {"name": "DataSource12", "type": "TDataSource"}, "oracledataset13kod": {"name": "OracleDataSet13KOD", "type": "TWideStringField"}, "oracledataset13name": {"name": "OracleDataSet13NAME", "type": "TWideStringField"}, "pepyoxlama1": {"name": "PEPYoxlama1", "type": "TMenuItem"}, "xflabel149": {"name": "XFLabel149", "type": "TXFLabel"}, "dblookupcomb_idxal": {"name": "DBLookupComb_idxal", "type": "TDBLookupComboboxEh"}, "xflabel150": {"name": "XFLabel150", "type": "TXFLabel"}, "dblookupcomb_finance": {"name": "DBLookupComb_finance", "type": "TDBLookupComboboxEh"}, "fevents": {"name": "FEvents", "type": "IPCustServiceFormEvents"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}}, {});
  U.init(async () => {
    U.const("no_selected_trans", "Heç bir əməliyyat qeyd olunmayıb");
    U.var_("PCustServiceForm", null, "TPCustServiceForm");
    U.var_("Custname", '', "String");
    U.var_("CustID", 0, "integer");
    U.var_("odeme_trid", '', "String");
    U.var_("account_id", '', "String");
    U.var_("emeliyyat", '', "String");
    U.var_("tr", '', "String");
    U.var_("tacc", '', "String");
    U.var_("cust_nom", '', "String");
    U.var_("aa", '', "String");
    U.var_("t1", 0, "integer");
    U.var_("Acc_bal_cn", 0, "integer");
    U.var_("ConvertNominalToCust", false, "Boolean");
    U.var_("cntr_nam", false, "Boolean");
    U.var_("Path", '', "String");
    U.var_("Path_B", '', "String");
    U.var_("risk_descPERIOD", 0, "integer");
    U.var_("cust_elaqe_Transaction", 0, "integer");
    U.var_("ins_elaqe", 0, "integer");
    U.var_("note_id", '', "String");
    U.var_("contract_id", '', "String");
    U.var_("ds_recort", '', "String");
    U.var_("transid_sefrlik", 0, "integer");
    U.var_("ins_edit", false, "Boolean");
    U.var_("rtl_insert", 0, "integer");
  });
  U.func("GetPath", async function GetPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "imagespath": ''};
  L0["imagespath"] = (await $.call(C, "Format", ["%s\\..\\Env\\Customers", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))]]));
  await $.set(C, "Path", (await $.call(C, "Format", ["%s\\temp.jpg", [L0["imagespath"]]])));
  await $.set(C, "Path_B", (await $.call(C, "Format", ["%s\\blank.jpg", [L0["imagespath"]]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("SetComboWidth", async function SetComboWidth(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"c": $.copyArg(p0), result: undefined, "i": 0, "w": 0, "maxw": 0};
  await $.fixArgs(L0, ["c"]);
  await $.mset((await $.mv(L0["c"], "Canvas")), "Font", (await $.mv(L0["c"], "Font")));
  L0["maxw"] = (await $.mv(L0["c"], "Width"));
  { const $t1 = $.sub((await $.mv((await $.mv(L0["c"], "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      L0["w"] = $.add((await $.mcall((await $.mv(L0["c"], "Canvas")), "TextWidth", [(await $.idx((await $.mv(L0["c"], "Items")), [L0["i"]]))])), 30);
      if ($.truthy($.gt(L0["w"], L0["maxw"]))) {
        L0["maxw"] = L0["w"];
      }
      await $.tick();
    }
  }
  await $.stmt((await $.mcall(L0["c"], "Perform", [(await $.v(C, "CB_SETDROPPEDWIDTH")), L0["maxw"], 0])));
  return L0.result;
}, {"params": ["C"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.func("Fill_Edit", async function Fill_Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "f": null};
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "DScustimageStamp")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimageStamp")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t3) => { L0["f"] = $t3; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t4) => { L0["f"] = $t4; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t5) => { L0["f"] = $t5; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "DScustimageCUSTSIGN")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimageCUSTSIGN")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t9) => { L0["f"] = $t9; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "DScustimagePhoto")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimagephoto")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t11) => { L0["f"] = $t11; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t12) => { L0["f"] = $t12; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t13) => { L0["f"] = $t13; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t14) => { L0["f"] = $t14; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "DScustimageDOC_TYPE_IMAGE")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image4")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimageDOC_TYPE_IMAGE")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t15) => { L0["f"] = $t15; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t16) => { L0["f"] = $t16; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t17) => { L0["f"] = $t17; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image4")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t18) => { L0["f"] = $t18; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "Image4")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPCustServiceForm", "Acc_no_sub", async function Acc_no_sub(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "spos": 0};
  L0["c_err_message"] = " Table or View in Dataset \"%s\" does not exist! ";
  L0["spos"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SBOP")), "CallIntegerFunction", ["get_acc_no_sub", []]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_A")), "SetVariable", ["ACCSRCHPOS", L0["spos"]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPCustServiceForm", "DefinePropertyPages", async function DefinePropertyPages(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"definepropertypage": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["definepropertypage"]);
  return L0.result;
}, {"params": ["DefinePropertyPage"], "kind": "procedure", "ptypes": ["TDefinePropertyPage"]});
  U.method("TPCustServiceForm", "Depozit1Click", async function Depozit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_phys"])), "asinteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_fs"])), "AsInteger")), 1)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Fiziki şəxs və sahibkara yeni Depozit vermək  olmaz !"])));
    return L0.result;
  }
  await $.set(C, "tacc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  await $.set(C, "DepozitFrm", (await $.mcall((await $.v(C, "TDepozitFrm")), "Create", [Self])));
  await $.mcall((await $.v(C, "DepozitFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EbitdaKeyPress", async function EbitdaKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EbitKeyPress", async function EbitKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "Edit10Change", async function Edit10Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditFullName")), "Text", (await $.mv((await $.v(C, "edit10")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Edit10KeyPress", async function Edit10KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t19 = L0["sender"];
      await $.stmt((await $.wcall([$t19], "SelectNext", [(await $.wv([$t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t19], "True", C, false)), (await $.wv([$t19], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 2)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "Edit_grop_nameEnter", async function Edit_grop_nameEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupCombob_grop")), "KeyValue", (await $.mv((await $.v(C, "Edit_grop_name")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Edit_grop_nameKeyPress", async function Edit_grop_nameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupCombob_grop")), "KeyValue", (await $.mv((await $.v(C, "Edit_grop_name")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditAddressChange", async function EditAddressChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "ins_edit")), true))) {
    await $.mset((await $.v(C, "db_tph_adress")), "Text", (await $.mv((await $.v(C, "EditAddress")), "Text")));
    await $.mset((await $.v(C, "EditAddressFactical")), "Text", (await $.mv((await $.v(C, "EditAddress")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("ShowRedMessage", async function ShowRedMessage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"atext": $.copyArg(p0), result: false, "f": null, "l": null, "btnyes": null, "btnno": null};
  await $.fixArgs(L0, ["atext"]);
  L0["f"] = (await $.mcall((await $.v(C, "TForm")), "Create", [null]));
  try {
    await $.mset(L0["f"], "Caption", "Diqqət!");
    await $.mset(L0["f"], "Width", 660);
    await $.mset(L0["f"], "Height", 80);
    await $.mset(L0["f"], "Position", (await $.v(C, "poScreenCenter")));
    await $.mset(L0["f"], "BorderStyle", (await $.v(C, "bsDialog")));
    L0["l"] = (await $.mcall((await $.v(C, "TLabel")), "Create", [L0["f"]]));
    await $.mset(L0["l"], "Parent", L0["f"]);
    await $.mset(L0["l"], "Caption", L0["atext"]);
    await $.mset((await $.mv(L0["l"], "Font")), "Size", 10);
    await $.mset((await $.mv(L0["l"], "Font")), "Color", (await $.v(C, "clRed")));
    await $.mset((await $.mv(L0["l"], "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.mset(L0["l"], "AutoSize", true);
    await $.mset(L0["l"], "Left", 30);
    await $.mset(L0["l"], "Top", 5);
    L0["btnyes"] = (await $.mcall((await $.v(C, "TButton")), "Create", [L0["f"]]));
    await $.mset(L0["btnyes"], "Parent", L0["f"]);
    await $.mset(L0["btnyes"], "Caption", "Bəli");
    await $.mset(L0["btnyes"], "ModalResult", (await $.v(C, "mrYes")));
    await $.mset(L0["btnyes"], "Left", 220);
    await $.mset(L0["btnyes"], "Top", 30);
    await $.mset(L0["btnyes"], "Width", 80);
    await $.mset(L0["btnyes"], "Height", 22);
    L0["btnno"] = (await $.mcall((await $.v(C, "TButton")), "Create", [L0["f"]]));
    await $.mset(L0["btnno"], "Parent", L0["f"]);
    await $.mset(L0["btnno"], "Caption", "Xeyr");
    await $.mset(L0["btnno"], "ModalResult", (await $.v(C, "mrNo")));
    await $.mset(L0["btnno"], "Left", 320);
    await $.mset(L0["btnno"], "Top", 30);
    await $.mset(L0["btnno"], "Width", 80);
    await $.mset(L0["btnno"], "Height", 22);
    L0["result"] = ($.eq((await $.mv(L0["f"], "ShowModal")), (await $.v(C, "mrYes"))));
  } finally {
    await $.mcall(L0["f"], "Free", []);
  }
  return L0.result;
}, {"params": ["AText"], "kind": "function", "ptypes": ["String"]});
  U.method("TPCustServiceForm", "Messaj_jur", async function Messaj_jur(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "j": 0, "aa": ''};
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "nerezident"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel41")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel42")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel41")), "Visible", true);
    await $.mset((await $.v(C, "XFLabel42")), "Visible", true);
  }
  if ($.truthy($.eq("CUST_NAME", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_name"])), "FieldName"))))) {
    L0["aa"] = "name";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel24")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel24")), "Visible", true);
    }
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "inn"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel12")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel12")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "incorporation_cntr"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel62")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel62")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "incorporation_number"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel67")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel67")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "dat_ustav"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel66")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel66")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "dat_nal"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel101")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel101")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "risk_categ"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel90")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel90")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "riskdescid"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel95")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel95")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "SAMELYDATE"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel96")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel96")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "address_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel54")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel54")), "Visible", true);
  }
  if ($.truthy($.eq("COUNTRY_CODE_CUST", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["country_code_cust"])), "FieldName"))))) {
    L0["aa"] = "country_code";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel25")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel25")), "Visible", true);
    }
  }
  if ($.truthy($.eq("CITY_CUST", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["CITY_CUST"])), "FieldName"))))) {
    L0["aa"] = "city";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel55")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel55")), "Visible", true);
    }
  }
  if ($.truthy($.eq("ADDRESS_CUST", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["ADDRESS_CUST"])), "FieldName"))))) {
    L0["aa"] = "address";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel56")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel56")), "Visible", true);
    }
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "tph_contact_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel58")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel58")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "tph_communication_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel59")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel59")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "tph_number"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel60")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel60")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "doc_country"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel75")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel75")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "sfera_deycod"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel122")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel122")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "compani"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel121")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel121")), "Visible", true);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPCustServiceForm", "Mq1Click", async function Mq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "qrup": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QReportOrderTarif"))]))))) {
    await $.set(C, "QReportOrderTarif", (await $.mcall((await $.v(C, "TQReportOrderTarif")), "Create", [Self])));
  }
  {
    const $t20 = (await $.wobj(C, "DataModPCustService"));
    const $t21 = (await $.wv([$t20], "ods_tarifs", C, false));
    { const $t22 = await $.iset((await $.wv([$t20, $t21], "SQL", C, false)), [4], ""); if ($t22 !== undefined) { await $.wset([$t20, $t21], "SQL", $t22, C); } }
    if ($.truthy((await $.and_(((await $.mv((await $.wv([$t20, $t21], "ODS_Customers_Phys_FS", C, false)), "Active"))), async () => ($.ne((await $.mv((await $.wv([$t20, $t21], "ODS_Customers_Phys_FS", C, false)), "RecordCount")), 0)))))) {
      await $.wset([$t20, $t21], "qrup", (await $.mv((await $.mcall((await $.wv([$t20, $t21], "ODS_Customers_Phys_FS", C, false)), "FieldByName", ["GROUP_KLIE"])), "AsString")), { get: async () => L0["qrup"], set: async (v) => { L0["qrup"] = v; }, local: true });
      await $.stmt($.wcall([$t20, $t21], "close", [], C));
      { const $t23 = await $.iset((await $.wv([$t20, $t21], "SQL", C, false)), [4], $.add($.add((await $.idx((await $.wv([$t20, $t21], "SQL", C, false)), [4])), " where groupid="), (await $.wv([$t20, $t21], "qrup", { get: async () => L0["qrup"], set: async (v) => { L0["qrup"] = v; }, local: true }, false)))); if ($t23 !== undefined) { await $.wset([$t20, $t21], "SQL", $t23, C); } }
      await $.stmt($.wcall([$t20, $t21], "open", [], C));
      await $.mcall((await $.wv([$t20, $t21], "QReportOrderTarif", C, false)), "Preview", []);
    } else {
      await $.stmt((await $.wcall([$t20, $t21], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "MqavilapNominal1Click", async function MqavilapNominal1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.wobj(C, "DataModPCustService"));
    const $t25 = (await $.wv([$t24], "ODS_CUSTOMERS_PHYS_FS", C, false));
    if ($.truthy((await $.and_((await $.and_(((await $.wv([$t24, $t25], "Active", C, false))), async () => ($.ne((await $.wv([$t24, $t25], "RecordCount", C, false)), 0)))), async () => ($.eq((await $.mv((await $.wv([$t24, $t25], "ODS_Customers_Phys_FSCUST_TYPE", C, false)), "AsInteger")), 4)))))) {
      await $.mcall((await $.mv((await $.wv([$t24, $t25], "DataModPCustService", C, false)), "CustomerInfoDataSet_nom")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t24, $t25], "DataModPCustService", C, false)), "CustomerInfoDataSet_nom")), "SetVariable", ["v_id", (await $.mv((await $.wv([$t24, $t25], "ODS_Customers_Phys_FSID", C, false)), "AsInteger"))])));
      await $.mcall((await $.mv((await $.wv([$t24, $t25], "DataModPCustService", C, false)), "CustomerInfoDataSet_nom")), "Open", []);
      await $.mcall((await $.mv((await $.wv([$t24, $t25], "DataModPCustService", C, false)), "Templates")), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t24, $t25], "DataModPCustService", C, false)), "Templates")), "Open", []);
      await $.mcall((await $.mv((await $.wv([$t24, $t25], "Pcust_CO_frmWReportUnit", C, false)), "Ph_CO_frmWReport")), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t24, $t25], "ShowMessage", ["Nominal müştəri  seçilməyib !"], C)));
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Mqavilapsazlama1Click", async function Mqavilapsazlama1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Ph_CO_BookmarkSetupFrom", (await $.mcall((await $.v(C, "TPh_CO_BookmarkSetupFrom")), "Create", [Self])));
  await $.set(C, "Ph_CO_BookmarkAddEditForm", (await $.mcall((await $.v(C, "TPh_CO_BookmarkAddEditForm")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Templates")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Bookmarks")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Fields")), "Open", []);
  await $.mcall((await $.v(C, "Ph_CO_BookmarkSetupFrom")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Messaj_fs_phys_nom", async function Messaj_fs_phys_nom(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "j": 0, "aa": ''};
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "inn"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel12")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel12")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "nerezident"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel41")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel42")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel41")), "Visible", true);
    await $.mset((await $.v(C, "XFLabel42")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "doc_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel8")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel8")), "Visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel8")), "Visible")), false))) {
    await $.mset((await $.v(C, "XFLabel26")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel26")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "LastName"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel11")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel11")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "firstname"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel9")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel9")), "Visible", true);
  }
  if ($.truthy($.eq("PATRONYMIC", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["patronymic"])), "FieldName"))))) {
    L0["aa"] = "soname";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel10")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel10")), "Visible", true);
    }
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "citizenship"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel86")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel86")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "risk_categ"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel90")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel90")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "riskdescid"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel95")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel95")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "SAMELYDATE"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel96")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel96")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "birthplace"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel81")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel81")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "BIRTH_STATE"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel82")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel82")), "Visible", true);
  }
  if ($.truthy($.eq("BIRTHDATE", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["birthdate"])), "FieldName"))))) {
    L0["aa"] = "birthday";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel97")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel97")), "Visible", true);
    }
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "adrs_state"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel83")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel83")), "Visible", true);
  }
  if ($.truthy($.eq("ADRS_CITY", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["adrs_city"])), "FieldName"))))) {
    L0["aa"] = "city";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel84")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel84")), "Visible", true);
    }
  }
  if ($.truthy($.eq("ADRESS", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["adress"])), "FieldName"))))) {
    L0["aa"] = "address";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel80")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel80")), "Visible", true);
    }
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "fakt_country"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel68")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel68")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "fakt_adress"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel28")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel28")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "fakt_city"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel69")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel69")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "doc_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel87")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel87")), "Visible", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), false))) {
    await $.mset((await $.v(C, "XFLabel27")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel27")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "doc_country"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel75")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel75")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "e_mail"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel127")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel127")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "work_place"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel115")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel115")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "work_post"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel116")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel116")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "work_adress"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel117")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel117")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "sex"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel118")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel118")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "fam_status"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel119")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel119")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "phone_m"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel128")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel128")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "paspplace"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel85")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel85")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "paspdate"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel98")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel98")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "passexpire"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel99")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel99")), "Visible", true);
  }
  if ($.truthy($.eq("INFO_CONTACT_TYPE", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_contact_type"])), "FieldName"))))) {
    L0["aa"] = "contact_type";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel54")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel54")), "Visible", true);
    }
  }
  if ($.truthy($.eq("INFO_TPH_COUNTRY", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country"])), "FieldName"))))) {
    L0["aa"] = "tph_country";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel25")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel25")), "Visible", true);
    }
  }
  if ($.truthy($.eq("INFO_TPH_CITY", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_city"])), "FieldName"))))) {
    L0["aa"] = "tph_city";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel55")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel55")), "Visible", true);
    }
  }
  if ($.truthy($.eq("INFO_TPH_ADRESS", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_adress"])), "FieldName"))))) {
    L0["aa"] = "tph_adress";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel56")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel56")), "Visible", true);
    }
  }
  if ($.truthy($.eq("INFO_TPH_CONTACT_TYPE", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_contact_type"])), "FieldName"))))) {
    L0["aa"] = "tph_contact_type";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel58")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel58")), "Visible", true);
    }
  }
  if ($.truthy($.eq("INFO_TPH_COMMUNICATION_TYPE", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_communication_type"])), "FieldName"))))) {
    L0["aa"] = "tph_communication_type";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel59")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel59")), "Visible", true);
    }
  }
  if ($.truthy($.eq("INFO_TPH_NUMBER", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_number"])), "FieldName"))))) {
    L0["aa"] = "tph_number";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "XFLabel60")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "XFLabel60")), "Visible", true);
    }
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "work_vid_sob"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel104")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel104")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "work_otrasli"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel105")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel105")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "activity"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel112")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel112")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "profession"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel113")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel113")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["CUSTINFO", "source_of_income"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel114")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel114")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "sfera_deycod"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel122")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel122")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["customers", "compani"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel121")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel121")), "Visible", true);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPCustServiceForm", "CustAdd", async function CustAdd(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "c_name": '', "c_open_dat": 0, "c_op_id": 0, "c_inn": '', "c_group_klie": 0, "c_close_dat": 0, "c_nerezident": 0, "c_vid_sob": null, "c_prinad_kod": 0, "c_cust_type": 0, "c_cust_jur": null, "c_cust_phys": null, "c_cust_fs": null, "c_risk_categ": null, "d_risk_categ": null, "c_riskdescid": 0, "c_samelydate": null, "c_bik": '', "c_state_reyester_no": null, "c_reyester_dat": null, "c_category": 0, "c_address_typee": '', "d_name": '', "d_soname": '', "d_lastname": '', "d_passer": '', "d_birthday": null, "d_birthplace": '', "d_fam_status": 0, "d_address": '', "d_fakt_adress": '', "d_phone_h": '', "d_e_mail": '', "d_sex": 0, "d_paspnum": '', "d_adrs_state": '', "d_city": '', "d_doc_type": 0, "d_birth_state": '', "d_phone_m": '', "d_paspdate": null, "d_paspplace": '', "d_passpin": '', "d_citizenship": 0, "d_passexpire": null, "d_note": '', "c_org_sob": 0, "c_sfera_dey": 0, "c_otrasl": 0, "c_nalog_kod": 0, "c_short_name": '', "ms": null, "a": 0, "b": 0, "c": 0, "c_dat_ustav": null, "c_dpt_nal": null, "c_incorporation_number": '', "c_tph_contact_type": '', "c_tph_communication_type": '', "c_tph_number": '', "c_address_type": null, "c_address": '', "c_city": null, "c_country_code": null, "c_director_id": 0, "c_email": '', "c_url": '', "c_incorporation_state": '', "c_incorporation_cntr": null, "c_tph_extension": '', "c_tph_zip": '', "c_tph_country_prefix": '', "c_tph_state": '', "d_tph_contact_type": '', "d_tph_country": null, "d_tph_country_code": '', "d_tph_city": '', "d_tph_state": '', "d_tph_zip": '', "d_tph_country_prefix": '', "d_tph_adress": '', "d_tph_communication_type": '', "d_tph_number": '', "d_tph_extension": '', "d_contact_type": null, "d_url": '', "d_doc_country": 0, "d_citizenship2": 0, "d_citizenship3": 0, "d_fakt_country": 0, "d_fakt_city": 0, "d_fakt_zip": '', "d_work_place": '', "d_work_post": '', "d_work_adress": '', "d_work_phone": '', "d_work_otrasli": null, "d_work_vid_sob": null, "d_monthlyprofit": null, "c_id_quality": 0, "d_quality_id": 0, "c_name_quality": '', "d_fakt_adress_owner": 0, "c_compani": 0, "c_sfereday_kod": null, "d_activity": '', "d_profession": '', "d_source_of_income": '', "d_rescount": 0, "d_rescount1": 0, "d_rescount2": 0, "d_work_experience": '', "d_last_work_experience": '', "d_family_number": 0, "d_credit_history": '', "d_cust_involvement": '', "c_faktor_muq": '', "c_faktor_opendat": null, "c_faktor_accno": '', "c_faktor_bank": '', "c_faktor_bankkod": '', "c_faktor_muxaccno": '', "c_faktor_swift": '', "mobs": '', "black": '', "ins": 0, "ins1": 0, "d_iflas": '', "d_import_export": '', "d_financial_statement": '', "d_bank_card": '', "d_borrower_occupation": '', "d_borrower_bad": '', "d_reportingdate": null, "d_reporttype": '', "d_revenue": null, "d_ebitda": null, "d_ebit": null, "d_interestexpences": null, "d_netprofit": null, "d_totalassets": null, "d_totalassetsforeigncurrency": null, "d_totalliabilitiesforeigncurrency": null, "d_interestexpenceliabilities": null, "d_totalliabilities": null, "d_foreigninterestexpenceliabilities": null, "d_totalcapital": null, "d_insolvencystatus": ''};
  L0["c_cust_type"] = (-(1));
  L0["c_nerezident"] = 1;
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")), (-(1))))) {
    await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
    await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [1, "cust_type"]]))])));
    return L0.result;
  }
  { const $t26 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t26, 0)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel12")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditITN")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", ["VÖEN sahəsi boşdur"])));
          return L0.result;
        }
      }
    }
    else if ($.eq($t26, 1) || $.eq($t26, 4)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
          return L0.result;
        }
      }
      if ($.truthy(((await $.or_((await $.or_((await $.or_(((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 3])), "AZE")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))), async () => ((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "AA")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6)))))))))) {
        await $.stmt((await $.call(C, "ShowMessage", ["  FIN-i düzgün daxil edin  !"])));
        $.abort();
      }
    }
    else if ($.eq($t26, 2)) {
      if ($.truthy(($.eq((await $.mv((await $.v(C, "XFLabel12")), "Visible")), true)))) {
        if ($.truthy(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditITN")), "Text"))])), "")))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", ["VÖEN  sahəsi boşdur"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["pincodforced"])), "AsInteger")), 1))) {
        if ($.truthy(($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true)))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
            await $.stmt((await $.call(C, "showmessage", ["Pinkod  sahəsi boşdur"])));
            return L0.result;
          }
        }
      }
      if ($.truthy(((await $.or_((await $.or_((await $.or_(((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 3])), "AZE")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))), async () => ((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "AA")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6)))))))))) {
        await $.stmt((await $.call(C, "ShowMessage", ["  FIN-i düzgün daxil edin  !"])));
        $.abort();
      }
    }
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "XFLabel41")), "Visible")), true)), async () => ($.eq((await $.mv((await $.v(C, "XFLabel42")), "Visible")), true)))))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false)))))) {
      await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
      await $.stmt((await $.call(C, "ShowMessage", [" Rezident və ya  Qeyr Rezident Sahəsi seçilməyib  ! "])));
      return L0.result;
    }
  }
  { const $t27 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t27, 5)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel24")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFullName")), "Text"))])), ""))) {
          await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [2, "cust_İnsname"]]))])));
          return L0.result;
        }
      }
    }
    else if ($.eq($t27, 0)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel24")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFullName")), "Text"))])), ""))) {
          await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [2, "cust_İnsname"]]))])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel62")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue")), (-(1))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
          await $.stmt((await $.call(C, "ShowMessage", ["Mənsub olduğu ölkə sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel67")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "incor_number")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
          await $.stmt((await $.call(C, "ShowMessage", ["Dövlət qeydiyyat nömrəsi sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel66")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Dtp_Ustav")), "value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
          await $.stmt((await $.call(C, "showmessage", [" Nizamnaməsi qeydiyyata alındığı tarixi daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel101")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Dpt_Nal")), "value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
          await $.stmt((await $.call(C, "showmessage", [" DVM-də qeydə alındığı tarixi daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel90")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "ShowMessage", [" Risk kateqoriyası sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel95")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Comb_riskdescid")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", ["Risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel96")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", [" Eyniləşdirmə tarixi daxil edilməlidir!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (-(1))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "showmessage", ["  Kateqoriyası sahəsi Kodu  daxil edilməlidir!"])));
        return L0.result;
      }
      if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 2]))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), (-(1))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", ["  Bölgü meyarı sahəsi Kodu  daxil edilməlidir!"])));
          return L0.result;
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel122")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue")), (-(1))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["  Fəaliyyət sahəsi Kodu  daxil edilməlidir!"])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 2]))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel121")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookup_cust_compani")), "KeyValue")), (-(1))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["  ƏDV \\ Təsnifat kodu  daxil edilməlidir!"])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel54")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növü sahəsi  seçilməyib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel25")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel55")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel56")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel58")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel59")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel60")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
    }
    else if ($.eq($t27, 1) || $.eq($t27, 2) || $.eq($t27, 4)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel11")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditLastName")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [3, "custinfo_inslastname"]]))])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel9")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFirstName")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [4, "custinfo_İnsname"]]))])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel10")), "Visible")), true))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPatronymic")), "Text"))])), ""))) {
            await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [5, "custinfo_İnsasoname"]]))])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel118")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CBoxGender")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "ShowMessage", ["Cinsi sahesi doldurulmayib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel119")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CBoxFamStatus")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "ShowMessage", ["Ailə vəziyyəti sahesi doldurulmayib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel86")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxCitizenship")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "ShowMessage", ["Vətəndaşlığını daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel90")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "ShowMessage", [" Risk kateqoriyası sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel95")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Comb_riskdescid")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", [" Risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel96")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", [" Eyniləşdirmə tarixi daxil edilməlidir!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (-(1))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "showmessage", ["  Kateqoriyası sahəsi Kodu  daxil edilməlidir!"])));
        return L0.result;
      }
      if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 2]))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), (-(1))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", ["  Bölgü meyarı sahəsi Kodu  daxil edilməlidir!"])));
          return L0.result;
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel122")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue")), (-(1))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["  Fəaliyyət sahəsi Kodu  daxil edilməlidir!"])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 2]))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel121")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookup_cust_compani")), "KeyValue")), (-(1))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", [" ƏDV \\ Təsnifat kodu  daxil edilməlidir!"])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel81")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın ölkəsini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel82")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın şəhərini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel97")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerBirthDate")), "Value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "ShowMessage", [" Doğum tarixin daxil edin"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel83")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın ölkəsini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel84")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın şəhərini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel80")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditAddress")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanı sahəsi doldurulmayib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel68")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Fakt_Adrs_State")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın ölkəsini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel69")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Fakt_Adrs_City")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın şəhərini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel28")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditAddressFactical")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CBoxDocType")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "showmessage", ["Sənədin növünü  daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel75")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "issue_country")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi ölkəni daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel85")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CBoxDocPlace2")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi yeri daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel98")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerDocDate")), "Value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "ShowMessage", ["Sənədin verildiyi tarixi daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel99")), "Visible")), true))) {
        if ($.truthy(($.eq((await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "Value")), (await $.v(C, "null")))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "ShowMessage", ["Sənədin etibarlıq tarixin daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel54")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Address_type")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel25")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CountryByConctType")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel55")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CityByConctType")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel56")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel58")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel59")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel60")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel127")), "Visible")), true))) {
        if ($.truthy((await $.or_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditEmail")), "text"))])), "")), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "edit1")), "text"))])), "")))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Email  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel115")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Work_Place")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yerinin adı  sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel116")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Work_Post")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yerinin Vəzifəsi  sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel117")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Work_Address")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yerinin Ünvan  sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel104")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_WORK_VID_SOB")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yeri haqqında ümumi fəaliyyət sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel105")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_WORK_OTRASLI")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yeri haqqında  fəaliyyət sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel112")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_activity")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", [" Fəaliyyət istiqaməti sahəsi  doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel113")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_profession")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", [" Peşəsi sahəsi  doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel114")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_source_of_income")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", [" Gəlir mənbəyi  sahəsi  doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel128")), "Visible")), true))) {
        L0["mobs"] = (await $.call(C, "stringreplace", [(await $.mv((await $.v(C, "EditPhoneMob")), "Text")), "-", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
        L0["mobs"] = (await $.call(C, "stringreplace", [L0["mobs"], " ", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
        if ($.truthy($.lt((await $.call(C, "Length", [L0["mobs"]])), 9))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", [" Mobil telefon sahesi tam doldurulmayib !"])));
          return L0.result;
        }
      }
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "XFLabel8")), "Visible")), true)), async () => ($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), true)))))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false))) {
          await $.mset((await $.v(C, "EditDocSerie")), "Text", "");
        } else {
          if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie")), "Text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
            await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
            return L0.result;
          }
        }
      }
      L0["d_passer"] = (await $.mv((await $.v(C, "EditDocSerie")), "Text"));
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "XFLabel8")), "Visible")), true)), async () => ($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), true)))))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false))) {
          await $.mset((await $.v(C, "EditDocNumber")), "Text", "");
        } else {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocNumber")), "Text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
            await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
            return L0.result;
          }
        }
      }
      L0["d_paspnum"] = (await $.mv((await $.v(C, "EditDocNumber")), "Text"));
      if ($.truthy($.ne(($.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text")))), ""))) {
        L0["c"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passer_panum", $.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"))]]));
        if ($.truthy($.ne(L0["c"], (-(1))))) {
          await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add($.add($.add((await $.call(C, "inttostr", [L0["c"]])), " -ID i  üçün "), (await $.mv((await $.v(C, "EditDocSerie1")), "Text"))), " /"), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), "  Sənədin  seryasi mövcuddur!")])));
          return L0.result;
        }
      }
      if ($.truthy(($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
        L0["b"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passpin", (await $.mv((await $.v(C, "EditPINCode1")), "Text"))]]));
        if ($.truthy($.ne(L0["b"], (-(1))))) {
          await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["b"]])), " -ID i üçün "), (await $.mv((await $.v(C, "EditPINCode1")), "Text"))), "  Pinkod mövcuddur!")])));
          return L0.result;
        }
      }
      L0["d_passpin"] = (await $.mv((await $.v(C, "EditPINCode")), "Text"));
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
    L0["a"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_inn", (await $.mv((await $.v(C, "EditITN")), "Text"))]]));
    if ($.truthy($.ne(L0["a"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["a"]])), " -ID i  üçün  "), (await $.mv((await $.v(C, "EditITN")), "Text"))), "  VÖEN mövcuddur!")])));
      return L0.result;
    }
  }
  L0["c_inn"] = (await $.mv((await $.v(C, "EditITN")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxGroup")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGroup")), "Text")), []])));
    L0["c_group_klie"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_group_klie"] = 0;
  }
  if ($.truthy((await $.mv((await $.v(C, "RBtnResident")), "Checked")))) {
    L0["c_nerezident"] = 1;
  }
  if ($.truthy((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")))) {
    L0["c_nerezident"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBox")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "CBox")), "Text")), []])));
    L0["c_vid_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_vid_sob"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox3")), "Text")), []])));
    L0["c_prinad_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_prinad_kod"] = 0;
  }
  { const $t28 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t28, 0)) {
      L0["c_cust_type"] = 0;
      L0["c_cust_jur"] = 1;
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t28, 1)) {
      L0["c_cust_type"] = 1;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = 1;
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t28, 2)) {
      L0["c_cust_type"] = 2;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = 1;
    }
    else if ($.eq($t28, 3)) {
      await $.stmt((await $.call(C, "showmessage", ["Fiziki şəxs və fiziki sahibkara əlavə etmek olmaz"])));
      return L0.result;
    }
    else if ($.eq($t28, 4)) {
      L0["c_cust_type"] = 4;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t28, 5)) {
      L0["c_cust_type"] = 5;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
  }
  L0["d_name"] = (await $.mv((await $.v(C, "EditFirstName")), "Text"));
  L0["d_soname"] = (await $.mv((await $.v(C, "EditPatronymic")), "Text"));
  L0["d_lastname"] = (await $.mv((await $.v(C, "EditLastName")), "Text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")), 5))) {
    L0["c_name"] = (await $.mv((await $.v(C, "DBLookupCombob_grop")), "Text"));
  } else {
    if ($.truthy($.ne((await $.mv((await $.v(C, "EditFullName")), "Text")), ""))) {
      L0["c_name"] = (await $.mv((await $.v(C, "EditFullName")), "Text"));
    } else {
      L0["c_name"] = $.add($.add($.add($.add((await $.mv((await $.v(C, "EditLastName")), "Text")), " "), (await $.mv((await $.v(C, "EditFirstName")), "Text"))), " "), (await $.mv((await $.v(C, "EditPatronymic")), "Text")));
    }
  }
  L0["c_short_name"] = (await $.mv((await $.v(C, "EditShort_name")), "text"));
  L0["d_birthday"] = (await $.mv((await $.v(C, "DTPickerBirthDate")), "Value"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_birthplace"] = (await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue"));
  } else {
    L0["d_birthplace"] = "";
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxFamStatus")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), []])));
    L0["d_fam_status"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["d_fam_status"] = 0;
  }
  L0["d_address"] = (await $.mv((await $.v(C, "EditAddress")), "Text"));
  L0["d_fakt_adress"] = (await $.mv((await $.v(C, "EditAddressFactical")), "Text"));
  L0["d_phone_h"] = (await $.mv((await $.v(C, "EditPhoneCity")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxGender")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGender")), "Text")), []])));
    L0["d_sex"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["d_sex"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_adrs_state"] = (await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue"));
  } else {
    L0["d_adrs_state"] = "";
  }
  L0["d_city"] = (await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue"));
  L0["d_paspplace"] = (await $.mv((await $.v(C, "CBoxDocPlace2")), "text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
  } else {
    if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxDocType")), "KeyValue")), (-(1))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxDocType")), "Text")), []])));
      L0["d_doc_type"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"));
    } else {
      L0["d_doc_type"] = 0;
    }
  }
  L0["d_birth_state"] = (await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue"));
  L0["d_phone_m"] = (await $.mv((await $.v(C, "EditPhoneMob")), "Text"));
  L0["d_paspdate"] = (await $.mv((await $.v(C, "DTPickerDocDate")), "Value"));
  L0["d_note"] = (await $.mv((await $.v(C, "MemoNotes")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxCitizenship")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_citizenship"] = (await $.mv((await $.v(C, "CBoxCitizenship")), "KeyValue"));
  } else {
    L0["d_citizenship"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_rescount"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
  } else {
    L0["d_rescount"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_rescount1"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"));
  } else {
    L0["d_rescount1"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_rescount2"] = (await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue"));
  } else {
    L0["d_rescount2"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_work_experience"] = (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text"));
  } else {
    L0["d_work_experience"] = "";
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_last_work_experience"] = (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Value"));
  } else {
    L0["d_last_work_experience"] = "";
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["c_category"] = (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"));
  } else {
    L0["c_category"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "edit3")), "Text")), ""))) {
    L0["d_family_number"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit3")), "Text"))]));
  } else {
    L0["d_family_number"] = 0;
  }
  L0["d_cust_involvement"] = (await $.mv((await $.v(C, "edit2")), "Text"));
  L0["d_passexpire"] = (await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "Value"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "OrganizationTypeCB")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "OrganizationTypeCB")), "Text")), []])));
    L0["c_org_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_org_sob"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "ActionAreaCB")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "ActionAreaCB")), "Text")), []])));
    L0["c_sfera_dey"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_sfera_dey"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Comb_riskdescid")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUST_RISK_DESC")), "Locate", ["name", (await $.mv((await $.v(C, "Comb_riskdescid")), "Text")), []])));
    L0["c_riskdescid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUST_RISK_DESC")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_riskdescid"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "BranchCB")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "Locate", ["name", (await $.mv((await $.v(C, "BranchCB")), "Text")), []])));
    L0["c_otrasl"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_otrasl"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "TaXAreaCB")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "TaXAreaCB")), "Text")), []])));
    L0["c_nalog_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_nalog_kod"] = 0;
  }
  L0["d_doc_country"] = (await $.mv((await $.v(C, "issue_country")), "KeyValue"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBCBox_Citizenship2")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_citizenship2"] = (await $.mv((await $.v(C, "DBCBox_Citizenship2")), "KeyValue"));
  } else {
    L0["d_citizenship2"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBCBox_Citizenship3")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_citizenship3"] = (await $.mv((await $.v(C, "DBCBox_Citizenship3")), "KeyValue"));
  } else {
    L0["d_citizenship3"] = 0;
  }
  L0["c_samelydate"] = (await $.mv((await $.v(C, "DateTi_samelydate")), "Value"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Fakt_Adrs_State")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_fakt_country"] = (await $.mv((await $.v(C, "Fakt_Adrs_State")), "KeyValue"));
  } else {
    L0["d_fakt_country"] = 0;
  }
  L0["d_fakt_city"] = (await $.mv((await $.v(C, "Fakt_Adrs_City")), "KeyValue"));
  L0["d_fakt_zip"] = (await $.mv((await $.v(C, "ZipFakt")), "Text"));
  L0["d_work_place"] = (await $.mv((await $.v(C, "Work_Place")), "Text"));
  L0["d_work_post"] = (await $.mv((await $.v(C, "Work_Post")), "Text"));
  L0["d_work_adress"] = (await $.mv((await $.v(C, "Work_Address")), "Text"));
  L0["d_work_phone"] = (await $.mv((await $.v(C, "Work_Phone")), "Text"));
  L0["c_dat_ustav"] = (await $.mv((await $.v(C, "Dtp_Ustav")), "value"));
  L0["c_dpt_nal"] = (await $.mv((await $.v(C, "Dpt_Nal")), "Value"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")), 5))) {
    L0["c_incorporation_number"] = (await $.mv((await $.v(C, "Edit_grop_name")), "Text"));
  } else {
    L0["c_incorporation_number"] = (await $.mv((await $.v(C, "incor_number")), "Text"));
  }
  L0["c_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
  L0["c_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
  L0["c_tph_number"] = (await $.mv((await $.v(C, "Db_tph_number")), "Text"));
  L0["c_address_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
  L0["c_address"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
  L0["c_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
  L0["c_country_code"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
  L0["c_email"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
  L0["c_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
  L0["c_incorporation_state"] = (await $.mv((await $.v(C, "DB_INCORP_STATE")), "Text"));
  L0["c_incorporation_cntr"] = (await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue"));
  L0["c_tph_extension"] = (await $.mv((await $.v(C, "Db_tph_extension")), "Text"));
  L0["c_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
  L0["c_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
  L0["c_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
  L0["d_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
  L0["d_tph_country"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
  L0["d_tph_country_code"] = (await $.mv((await $.v(C, "DBEdit_CountryCode")), "Text"));
  L0["d_tph_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
  L0["d_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
  L0["d_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
  L0["d_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
  L0["d_tph_adress"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
  L0["d_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
  L0["d_tph_number"] = (await $.mv((await $.v(C, "db_tph_number")), "Text"));
  L0["d_tph_extension"] = (await $.mv((await $.v(C, "db_tph_extension")), "Text"));
  L0["d_contact_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
  L0["d_e_mail"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
  L0["d_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
  L0["d_activity"] = (await $.mv((await $.v(C, "Edit_activity")), "Text"));
  L0["d_profession"] = (await $.mv((await $.v(C, "edit_profession")), "Text"));
  L0["d_source_of_income"] = (await $.mv((await $.v(C, "edit_source_of_income")), "Text"));
  L0["c_faktor_muq"] = (await $.mv((await $.v(C, "faktor_muq")), "Text"));
  L0["c_faktor_opendat"] = (await $.mv((await $.v(C, "faktor_dat")), "Value"));
  L0["c_faktor_accno"] = (await $.mv((await $.v(C, "faktor_hesab")), "Text"));
  L0["c_faktor_bank"] = (await $.mv((await $.v(C, "faktor_bank")), "Text"));
  L0["c_faktor_bankkod"] = (await $.mv((await $.v(C, "faktor_bankkod")), "Text"));
  L0["c_faktor_muxaccno"] = (await $.mv((await $.v(C, "faktor_muxhesab")), "Text"));
  L0["c_faktor_swift"] = (await $.mv((await $.v(C, "faktor_swift")), "Text"));
  L0["c_name_quality"] = (await $.mv((await $.v(C, "id_quality_DBLookupComboboxEh")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "id_quality_DBLookupComboboxEh")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality")), "Locate", ["name", (await $.mv((await $.v(C, "id_quality_DBLookupComboboxEh")), "Text")), []])));
    L0["c_id_quality"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality")), "FieldByName", ["ID"])), "AsInteger"));
    L0["d_quality_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_id_quality"] = 0;
    L0["d_quality_id"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLoCbox_fakt_adress_owner")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_fakt_adress_owner")), "Locate", ["name", (await $.mv((await $.v(C, "DBLoCbox_fakt_adress_owner")), "Text")), []])));
    L0["d_fakt_adress_owner"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_fakt_adress_owner")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["d_fakt_adress_owner"] = 0;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [" Yaddaşa yazmaq istəyirsinizmi ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    { const $t29 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
      if ($.eq($t29, 0)) {
        if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox_risk")), "KeyValue")), (-(1))))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
          L0["c_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_risk")), "FieldByName", ["ID"])), "AsInteger"));
        } else {
          L0["c_risk_categ"] = 0;
        }
        L0["d_risk_categ"] = "";
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")), 5))) {
          L0["c_incorporation_number"] = (await $.mv((await $.v(C, "Edit_grop_name")), "Text"));
        } else {
          L0["c_incorporation_number"] = (await $.mv((await $.v(C, "incor_number")), "Text"));
        }
        L0["c_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
        L0["c_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
        L0["c_tph_number"] = (await $.mv((await $.v(C, "Db_tph_number")), "Text"));
        L0["c_address_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
        L0["c_address"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
        L0["c_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
        L0["c_country_code"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
        L0["c_dat_ustav"] = (await $.mv((await $.v(C, "Dtp_Ustav")), "value"));
        L0["c_dpt_nal"] = (await $.mv((await $.v(C, "dpt_nal")), "Value"));
        L0["c_email"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
        L0["c_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
        L0["c_incorporation_state"] = (await $.mv((await $.v(C, "DB_INCORP_STATE")), "Text"));
        L0["c_incorporation_cntr"] = (await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue"));
        L0["c_tph_extension"] = (await $.mv((await $.v(C, "Db_tph_extension")), "Text"));
        L0["c_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
        L0["c_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
        L0["c_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
        L0["c_bik"] = (await $.mv((await $.v(C, "editbic")), "Text"));
        L0["c_state_reyester_no"] = (await $.mv((await $.v(C, "Edit_reg_no")), "Text"));
        L0["c_reyester_dat"] = (await $.mv((await $.v(C, "DBDateTimeEditEh_gerdat")), "Value"));
        L0["d_tph_contact_type"] = "";
        L0["d_tph_country"] = "";
        L0["d_tph_country_code"] = "";
        L0["d_tph_city"] = "";
        L0["d_tph_state"] = "";
        L0["d_tph_zip"] = "";
        L0["d_tph_country_prefix"] = "";
        L0["d_tph_adress"] = "";
        L0["d_tph_communication_type"] = "";
        L0["d_tph_number"] = "";
        L0["d_tph_extension"] = "";
        L0["d_contact_type"] = "";
        L0["d_e_mail"] = "";
        L0["d_url"] = "";
      }
      else if ($.eq($t29, 1) || $.eq($t29, 2) || $.eq($t29, 3) || $.eq($t29, 4)) {
        if ($.truthy($.ne((await $.mv((await $.v(C, "edit_MONTHLYPROFIT")), "Text")), ""))) {
          L0["d_monthlyprofit"] = (await $.mv((await $.v(C, "edit_MONTHLYPROFIT")), "Text"));
        } else {
          L0["d_monthlyprofit"] = (-(1));
        }
        if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox_risk")), "KeyValue")), (-(1))))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
          L0["d_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_risk")), "FieldByName", ["ID"])), "AsInteger"));
        } else {
          L0["d_risk_categ"] = 0;
        }
        L0["c_risk_categ"] = "";
        L0["d_work_otrasli"] = (await $.mv((await $.v(C, "Db_WORK_OTRASLI")), "KeyValue"));
        L0["d_work_vid_sob"] = (await $.mv((await $.v(C, "Db_WORK_VID_SOB")), "KeyValue"));
        L0["d_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
        L0["d_tph_country"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
        L0["d_tph_country_code"] = (await $.mv((await $.v(C, "DBEdit_CountryCode")), "Text"));
        L0["d_tph_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
        L0["d_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
        L0["d_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
        L0["d_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
        L0["d_tph_adress"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
        L0["d_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
        L0["d_tph_number"] = (await $.mv((await $.v(C, "db_tph_number")), "Text"));
        L0["d_tph_extension"] = (await $.mv((await $.v(C, "db_tph_extension")), "Text"));
        L0["d_contact_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
        L0["d_e_mail"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
        L0["d_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
        L0["c_bik"] = "";
        L0["c_state_reyester_no"] = "";
        L0["c_reyester_dat"] = "";
        L0["c_incorporation_number"] = "";
        L0["c_tph_contact_type"] = "";
        L0["c_tph_communication_type"] = "";
        L0["c_tph_number"] = "";
        L0["c_address_type"] = "";
        L0["c_address"] = "";
        L0["c_city"] = "";
        L0["c_country_code"] = "";
        L0["c_email"] = "";
        L0["c_url"] = "";
        L0["c_incorporation_state"] = "";
        L0["c_incorporation_cntr"] = "";
        L0["c_tph_extension"] = "";
        L0["c_tph_zip"] = "";
        L0["c_tph_country_prefix"] = "";
        L0["c_tph_state"] = "";
        L0["c_email"] = "";
        L0["c_compani"] = (-(1));
        L0["c_sfereday_kod"] = (-(1));
      }
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookup_cust_compani")), "KeyValue")), (-(1))))) {
      L0["c_compani"] = (await $.mv((await $.v(C, "DBLookup_cust_compani")), "KeyValue"));
    } else {
      L0["c_compani"] = (-(1));
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue")), (-(1))))) {
      L0["c_sfereday_kod"] = (await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue"));
    } else {
      L0["c_sfereday_kod"] = (-(1));
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupCombobiflas")), "KeyValue"))]))))) {
      L0["d_iflas"] = (await $.mv((await $.v(C, "DBLookupCombobiflas")), "Text"));
    } else {
      L0["d_iflas"] = "";
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComb_idxal")), "KeyValue"))]))))) {
      L0["d_import_export"] = (await $.mv((await $.v(C, "DBLookupComb_idxal")), "value"));
    } else {
      L0["d_import_export"] = "";
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComb_finance")), "KeyValue"))]))))) {
      L0["d_financial_statement"] = (await $.mv((await $.v(C, "DBLookupComb_finance")), "value"));
    } else {
      L0["d_financial_statement"] = "";
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComb_BankKard")), "KeyValue"))]))))) {
      L0["d_bank_card"] = (await $.mv((await $.v(C, "DBLookupComb_BankKard")), "value"));
    } else {
      L0["d_bank_card"] = "";
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComb_borrower_occupation")), "KeyValue"))]))))) {
      L0["d_borrower_occupation"] = (await $.mv((await $.v(C, "DBLookupComb_borrower_occupation")), "value"));
    } else {
      L0["d_borrower_occupation"] = "";
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComb_borrower_bad")), "KeyValue"))]))))) {
      L0["d_borrower_bad"] = (await $.mv((await $.v(C, "DBLookupComb_borrower_bad")), "text"));
    } else {
      L0["d_borrower_bad"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "ReportingDate")), "value")), (await $.v(C, "null"))))) {
      L0["d_reportingdate"] = (await $.mv((await $.v(C, "ReportingDate")), "Value"));
    } else {
      L0["d_reportingdate"] = "";
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "ReportType")), "KeyValue"))]))))) {
      L0["d_reporttype"] = (await $.mv((await $.v(C, "ReportType")), "KeyValue"));
    } else {
      L0["d_reporttype"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Revenue")), "text")), ""))) {
      L0["d_revenue"] = (await $.mv((await $.v(C, "Revenue")), "text"));
    } else {
      L0["d_revenue"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Ebitda")), "text")), ""))) {
      L0["d_ebitda"] = (await $.mv((await $.v(C, "Ebitda")), "text"));
    } else {
      L0["d_ebitda"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Ebit")), "text")), ""))) {
      L0["d_ebit"] = (await $.mv((await $.v(C, "Ebit")), "text"));
    } else {
      L0["d_ebit"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "InterestExpences")), "text")), ""))) {
      L0["d_interestexpences"] = (await $.mv((await $.v(C, "InterestExpences")), "text"));
    } else {
      L0["d_interestexpences"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "InterestExpenceLiabilities")), "text")), ""))) {
      L0["d_interestexpenceliabilities"] = (await $.mv((await $.v(C, "InterestExpenceLiabilities")), "text"));
    } else {
      L0["d_interestexpenceliabilities"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "NetProfit")), "text")), ""))) {
      L0["d_netprofit"] = (await $.mv((await $.v(C, "NetProfit")), "text"));
    } else {
      L0["d_netprofit"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalAssets")), "text")), ""))) {
      L0["d_totalassets"] = (await $.mv((await $.v(C, "TotalAssets")), "text"));
    } else {
      L0["d_totalassets"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalAssetsForeignCurrency")), "text")), ""))) {
      L0["d_totalassetsforeigncurrency"] = (await $.mv((await $.v(C, "TotalAssetsForeignCurrency")), "text"));
    } else {
      L0["d_totalassetsforeigncurrency"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalLiabilitiesForeignCurrency")), "text")), ""))) {
      L0["d_totalliabilitiesforeigncurrency"] = (await $.mv((await $.v(C, "TotalLiabilitiesForeignCurrency")), "text"));
    } else {
      L0["d_totalliabilitiesforeigncurrency"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalLiabilities")), "text")), ""))) {
      L0["d_totalliabilities"] = (await $.mv((await $.v(C, "TotalLiabilities")), "text"));
    } else {
      L0["d_totalliabilities"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "ForeignInterestExpenceLiabilities")), "text")), ""))) {
      L0["d_foreigninterestexpenceliabilities"] = (await $.mv((await $.v(C, "ForeignInterestExpenceLiabilities")), "text"));
    } else {
      L0["d_foreigninterestexpenceliabilities"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalCapital")), "text")), ""))) {
      L0["d_totalcapital"] = (await $.mv((await $.v(C, "TotalCapital")), "text"));
    } else {
      L0["d_totalcapital"] = 0;
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupInsolvencyStatus")), "KeyValue"))]))))) {
      L0["d_insolvencystatus"] = (await $.call(C, "VarToStr", [(await $.mv((await $.v(C, "DBLookupInsolvencyStatus")), "KeyValue"))]));
    } else {
      L0["d_insolvencystatus"] = "";
    }
    if ($.truthy($.eq(L0["c_cust_type"], 0))) {
      L0["black"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallStringFunction", ["GET_WORLD_YOXLAMA", [(await $.call(C, "trim", [L0["c_name"]])), (await $.v(C, "null"))]]));
    }
    if ($.truthy($.ne(L0["c_cust_type"], 0))) {
      L0["black"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallStringFunction", ["GET_WORLD_YOXLAMA", [($.add($.add($.add($.add((await $.call(C, "trim", [L0["d_lastname"]])), " "), (await $.call(C, "trim", [L0["d_name"]]))), " "), (await $.call(C, "trim", [L0["d_soname"]])))), L0["d_birthday"]]]));
    }
    if ($.truthy($.eq(L0["black"], ""))) {
      L0["ins"] = 1;
    }
    if ($.truthy($.ne(L0["black"], ""))) {
      if ($.truthy((await $.call(C, "ShowRedMessage", [$.add(L0["black"], "  DIQQET Bu Müştəri qara siyahıdadı Risk şöbəsinə müraciət  edin !")])))) {
        L0["ins"] = 1;
      } else {
        L0["ins"] = (-(1));
      }
    }
    if ($.truthy($.eq(L0["ins"], 1))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["add_customers_prosess", [L0["c_name"], L0["c_short_name"], (await $.v(C, "date")), L0["c_inn"], L0["c_group_klie"], (await $.v(C, "date")), L0["c_nerezident"], L0["c_vid_sob"], L0["c_prinad_kod"], L0["c_cust_type"], L0["c_cust_jur"], L0["c_cust_phys"], L0["c_cust_fs"], L0["c_bik"], L0["c_risk_categ"], L0["d_risk_categ"], L0["c_riskdescid"], L0["c_samelydate"], L0["c_category"], L0["d_name"], L0["d_soname"], L0["d_lastname"], L0["d_passer"], L0["d_birthday"], L0["d_birthplace"], L0["d_fam_status"], L0["d_address"], L0["d_fakt_adress"], L0["d_doc_country"], L0["d_citizenship2"], L0["d_citizenship3"], L0["d_fakt_country"], L0["d_fakt_city"], L0["d_fakt_zip"], L0["d_work_place"], L0["d_work_post"], L0["d_work_adress"], L0["d_work_phone"], L0["d_phone_h"], L0["d_e_mail"], L0["d_sex"], L0["d_paspnum"], L0["d_adrs_state"], L0["d_city"], L0["d_doc_type"], L0["d_birth_state"], L0["d_phone_m"], L0["d_paspdate"], L0["d_paspplace"], L0["d_passpin"], L0["d_citizenship"], L0["d_passexpire"], L0["d_note"], L0["c_org_sob"], L0["c_sfera_dey"], L0["c_otrasl"], L0["c_nalog_kod"], L0["c_incorporation_number"], L0["c_tph_contact_type"], L0["c_tph_communication_type"], L0["c_tph_number"], L0["c_address_type"], L0["c_address"], L0["c_city"], L0["c_country_code"], L0["c_dat_ustav"], L0["c_dpt_nal"], L0["c_email"], L0["c_url"], L0["c_incorporation_state"], L0["c_incorporation_cntr"], L0["c_tph_extension"], L0["c_tph_zip"], L0["c_tph_country_prefix"], L0["c_tph_state"], L0["d_tph_contact_type"], L0["d_tph_country"], L0["d_tph_country_code"], L0["d_tph_city"], L0["d_tph_state"], L0["d_tph_zip"], L0["d_tph_country_prefix"], L0["d_tph_adress"], L0["d_tph_communication_type"], L0["d_tph_number"], L0["d_tph_extension"], L0["d_contact_type"], L0["d_url"], L0["d_work_otrasli"], L0["d_work_vid_sob"], L0["d_monthlyprofit"], L0["c_id_quality"], L0["c_name_quality"], L0["d_quality_id"], L0["c_compani"], L0["c_sfereday_kod"], L0["c_state_reyester_no"], L0["c_reyester_dat"], L0["d_fakt_adress_owner"], L0["d_activity"], L0["d_profession"], L0["d_source_of_income"], L0["d_rescount"], L0["d_rescount1"], L0["d_rescount2"], L0["d_work_experience"], L0["d_last_work_experience"], L0["d_family_number"], L0["d_credit_history"], L0["d_cust_involvement"], L0["c_faktor_muq"], L0["c_faktor_opendat"], L0["c_faktor_accno"], L0["c_faktor_bank"], L0["c_faktor_bankkod"], L0["c_faktor_muxaccno"], L0["c_faktor_swift"], (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), L0["d_iflas"], L0["d_import_export"], L0["d_financial_statement"], L0["d_bank_card"], L0["d_borrower_occupation"], L0["d_borrower_bad"], L0["d_reportingdate"], L0["d_reporttype"], L0["d_revenue"], L0["d_ebitda"], L0["d_ebit"], L0["d_interestexpences"], L0["d_netprofit"], L0["d_totalassets"], L0["d_totalassetsforeigncurrency"], L0["d_totalliabilitiesforeigncurrency"], L0["d_interestexpenceliabilities"], L0["d_totalliabilities"], L0["d_foreigninterestexpenceliabilities"], L0["d_totalcapital"], L0["d_insolvencystatus"]]])));
      await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Open", []);
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS2")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS2")), "Open", []);
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Last", []);
      await $.mset((await $.v(C, "PageControl1")), "TabIndex", 0);
      await $.mset((await $.v(C, "XFCust")), "Visible", false);
      await $.mset((await $.v(C, "XFBitBtnHMS")), "Visible", false);
      await $.mset((await $.v(C, "XFButton4")), "Visible", true);
      await $.mset((await $.v(C, "XFButton5")), "Visible", true);
      await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", true);
      await $.set(C, "ins_edit", false);
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TPCustServiceForm", "EditShort_name1Change", async function EditShort_name1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditShort_name")), "Text", (await $.mv((await $.v(C, "EditShort_name1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditShort_nameChange", async function EditShort_nameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditShort_name1")), "Text", (await $.mv((await $.v(C, "EditShort_name")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditShort_nameKeyPress", async function EditShort_nameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t30 = L0["sender"];
      await $.stmt((await $.wcall([$t30], "SelectNext", [(await $.wv([$t30], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t30], "True", C, false)), (await $.wv([$t30], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "Edit_reg_noKeyPress", async function Edit_reg_noKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "Edit_SFERKODEnter", async function Edit_SFERKODEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue", (await $.mv((await $.v(C, "Edit_SFERKOD")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Edit_SFERKODKeyPress", async function Edit_SFERKODKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue", (await $.mv((await $.v(C, "Edit_SFERKOD")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditDocNumber1Change", async function EditDocNumber1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocNumber")), "Text", (await $.mv((await $.v(C, "EditDocNumber1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditDocNumberChange", async function EditDocNumberChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocNumber1")), "Text", (await $.mv((await $.v(C, "EditDocNumber")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditDocSerie1Change", async function EditDocSerie1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocSerie")), "Text", (await $.mv((await $.v(C, "EditDocSerie1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditDocSerieChange", async function EditDocSerieChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocSerie1")), "Text", (await $.mv((await $.v(C, "EditDocSerie")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditDocSerieKeyPress", async function EditDocSerieKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t31 = L0["sender"];
      await $.stmt((await $.wcall([$t31], "SelectNext", [(await $.wv([$t31], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t31], "True", C, false)), (await $.wv([$t31], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "A")), async () => ($.gt((await $.call(C, "Upcase", [(await L0["key"].get())])), "Z")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditEmailKeyPress", async function EditEmailKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t32 = L0["sender"];
      await $.stmt((await $.wcall([$t32], "SelectNext", [(await $.wv([$t32], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t32], "True", C, false)), (await $.wv([$t32], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditFirstNameKeyPress", async function EditFirstNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t33 = L0["sender"];
      await $.stmt((await $.wcall([$t33], "SelectNext", [(await $.wv([$t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t33], "True", C, false)), (await $.wv([$t33], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditFullNameChange", async function EditFullNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditFullName")), "Text")), ""))) {
    await $.mset((await $.v(C, "EditShort_name")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "convertpack")), "CallstringFunction", ["CONVERT_INT", [(await $.mv((await $.v(C, "EditFullName")), "Text"))]])));
    await $.mset((await $.v(C, "edit10")), "Text", (await $.mv((await $.v(C, "EditFullName")), "Text")));
  } else {
    await $.mset((await $.v(C, "EditShort_name")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditFullNameExit", async function EditFullNameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditFullName")), "Text")), ""))) {
    await $.mset((await $.v(C, "EditShort_name")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "convertpack")), "CallstringFunction", ["CONVERT_INT", [(await $.mv((await $.v(C, "EditFullName")), "Text"))]])));
    await $.mset((await $.v(C, "edit10")), "Text", (await $.mv((await $.v(C, "EditFullName")), "Text")));
  } else {
    await $.mset((await $.v(C, "EditShort_name")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditFullNameKeyPress", async function EditFullNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t34 = L0["sender"];
      await $.stmt((await $.wcall([$t34], "SelectNext", [(await $.wv([$t34], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t34], "True", C, false)), (await $.wv([$t34], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditIDChange", async function EditIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "editid")), "Text")), (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"))])))))) {
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t35 = L0["sender"];
      await $.stmt((await $.wcall([$t35], "SelectNext", [(await $.wv([$t35], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "Upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditITNKeyPress", async function EditITNKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t36 = L0["sender"];
      await $.stmt((await $.wcall([$t36], "SelectNext", [(await $.wv([$t36], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t36], "True", C, false)), (await $.wv([$t36], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditLastNameKeyPress", async function EditLastNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t37 = L0["sender"];
      await $.stmt((await $.wcall([$t37], "SelectNext", [(await $.wv([$t37], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t37], "True", C, false)), (await $.wv([$t37], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditMasinKeyPress", async function EditMasinKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = (await $.wobj(C, "ods_masinAxtaris"));
    await $.stmt($.wcall([$t38], "close", [], C));
    await $.stmt((await $.wcall([$t38], "SetVariable", ["v_accno", (await $.mv((await $.wv([$t38], "EditMasin", C, false)), "Text"))], C)));
    await $.stmt($.wcall([$t38], "open", [], C));
    if ($.truthy($.gt((await $.mv((await $.wv([$t38], "ods_masinAxtaris", C, false)), "RecordCount")), 1))) {
      {
        const $t39 = (await $.mv((await $.wv([$t38], "FormMasin", C, false)), "ods_masin"));
        await $.stmt($.wcall([$t38, $t39], "close", [], C));
        await $.stmt((await $.wcall([$t38, $t39], "SetVariable", ["v_accno", (await $.mv((await $.wv([$t38, $t39], "EditMasin", C, false)), "Text"))], C)));
        await $.stmt($.wcall([$t38, $t39], "open", [], C));
        await $.mcall((await $.wv([$t38, $t39], "FormMasin", C, false)), "ShowModal", []);
      }
    } else {
      await $.mset((await $.wv([$t38], "editid", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t38], "ods_masinAxtaris", C, false)), "FieldByName", ["kli_id"])), "AsString")));
    }
  }
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "EditIDKeyPress", [L0["sender"], $.ref(async () => (await L0["key"].get()), async ($t40) => { await L0["key"].set($t40); })])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditPatronymicKeyPress", async function EditPatronymicKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t41 = L0["sender"];
      await $.stmt((await $.wcall([$t41], "SelectNext", [(await $.wv([$t41], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t41], "True", C, false)), (await $.wv([$t41], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditPhoneCityKeyPress", async function EditPhoneCityKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t42 = L0["sender"];
      await $.stmt((await $.wcall([$t42], "SelectNext", [(await $.wv([$t42], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t42], "True", C, false)), (await $.wv([$t42], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", "+"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "EditPhoneMobChange", async function EditPhoneMobChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TMaskEdit", [L0["sender"]])), "Modified", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditPINCode1Change", async function EditPINCode1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditPINCode")), "Text", (await $.mv((await $.v(C, "EditPINCode1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EditPINCodeChange", async function EditPINCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditPINCode1")), "Text", (await $.mv((await $.v(C, "EditPINCode")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "EventSinkChanged", async function EventSinkChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"eventsink": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["eventsink"]);
  await $.set(C, "FEvents", L0["eventsink"]);
  return L0.result;
}, {"params": ["EventSink"], "kind": "procedure", "ptypes": ["IUnknown"]});
  U.method("TPCustServiceForm", "Expemmeliyyat1Click", async function Expemmeliyyat1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t43 = (await $.wobj(C, "DataModPCustService"));
    const $t44 = (await $.wv([$t43], "ODS_CUSTOMERS_PHYS_FS", C, false));
    if ($.truthy((await $.and_(((await $.wv([$t43, $t44], "Active", C, false))), async () => ($.ne((await $.wv([$t43, $t44], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t43, $t44], "Formepxtrans", (await $.mcall((await $.wv([$t43, $t44], "TFormepxtrans", C, false)), "Create", [Self])), C);
      await $.mcall((await $.wv([$t43, $t44], "Formepxtrans", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t43, $t44], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "faktor_muxhesabChange", async function faktor_muxhesabChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ForeignInterestExpenceLiabilitiesKeyPress", async function ForeignInterestExpenceLiabilitiesKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "ImgPhotoDblClick", async function ImgPhotoDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Initialize", async function Initialize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.inherited(Self, "TPCustServiceForm", "Initialize", null, arguments);
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
  U.method("TPCustServiceForm", "InterestExpenceLiabilitiesKeyPress", async function InterestExpenceLiabilitiesKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "InterestExpencesKeyPress", async function InterestExpencesKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "issue_countryClick", async function issue_countryClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Get_Active", async function Get_Active(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Active"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_AutoScroll", async function Get_AutoScroll(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoScroll"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_AutoSize", async function Get_AutoSize(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "AutoSize"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_AxBorderStyle", async function Get_AxBorderStyle(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "ord", [(await $.v(C, "AxBorderStyle"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_Caption", async function Get_Caption(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "Caption"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_Color", async function Get_Color(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "OLE_COLOR", [(await $.v(C, "Color"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_Cursor", async function Get_Cursor(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.call(C, "Smallint", [(await $.v(C, "Cursor"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_DoubleBuffered", async function Get_DoubleBuffered(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DoubleBuffered"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_DropTarget", async function Get_DropTarget(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "DropTarget"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_Enabled", async function Get_Enabled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Enabled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_Font", async function Get_Font(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  await $.stmt((await $.call(C, "GetOleFont", [(await $.v(C, "Font")), L0["result"]])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_HelpFile", async function Get_HelpFile(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["result"] = (await $.call(C, "WideString", [(await $.v(C, "HelpFile"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_KeyPreview", async function Get_KeyPreview(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "KeyPreview"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_PixelsPerInch", async function Get_PixelsPerInch(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "PixelsPerInch"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_PrintScale", async function Get_PrintScale(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: null};
  L0["result"] = (await $.call(C, "ord", [(await $.v(C, "PrintScale"))]));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_Scaled", async function Get_Scaled(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Scaled"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_Visible", async function Get_Visible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = (await $.v(C, "Visible"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "Get_VisibleDockClientCount", async function Get_VisibleDockClientCount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["result"] = (await $.v(C, "VisibleDockClientCount"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "HesabAmaq1Click", async function HesabAmaq1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "acc_bal_cn", 0);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
    await $.stmt((await $.call(C, "showmessage", ["Nomina  hesab açmaq olmaz     !"])));
    return L0.result;
  }
  await $.set(C, "tAcc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  if ($.truthy($.ne((await $.v(C, "tacc")), ""))) {
    await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "", (await $.v(C, "tAcc"))])));
    if ($.truthy($.eq((await $.v(C, "cradd")), 1))) {
      {
        const $t45 = (await $.wobj(C, "DataModPCustService"));
        const $t46 = (await $.wv([$t45], "ODS_CUSTOMERS_PHYS_FS", C, false));
        if ($.truthy((await $.wv([$t45, $t46], "Active", C, false)))) {
          await $.stmt($.wcall([$t45, $t46], "close", [], C));
        }
        await $.stmt((await $.wcall([$t45, $t46], "SetVariable", [":custid", (await $.wv([$t45, $t46], "tacc", C, false))], C)));
        await $.stmt($.wcall([$t45, $t46], "open", [], C));
      }
    }
  } else {
    await $.stmt((await $.call(C, "showmessage", ["   Məlumat seçilməyib  ! "])));
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Hesabdanxar2Click", async function Hesabdanxar2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "x": 0, "a": '', "n": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormStatement", (await $.mcall((await $.v(C, "TFormStatement")), "Create", [Self])));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominalin  hesablarına baxmaq olmaz     !"])));
    return L0.result;
  }
  { const $t47 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger"));
    if ($.eq($t47, 0) || $.eq($t47, 1) || $.eq($t47, 2)) {
      {
        const $t48 = (await $.wobj(C, "DataModPCustService"));
        const $t49 = (await $.wv([$t48], "ODS_CUSTOMERS_PHYS_FS", C, false));
        if ($.truthy((await $.and_(((await $.wv([$t48, $t49], "Active", C, false))), async () => ($.ne((await $.wv([$t48, $t49], "RecordCount", C, false)), 0)))))) {
          await $.wset([$t48, $t49], "a", $.add(" in ", (await $.wcall([$t48, $t49], "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t48, $t49], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger"))], C))), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
          await $.wset([$t48, $t49], "FormStatement", (await $.mcall((await $.wv([$t48, $t49], "TFormStatement", C, false)), "Create", [Self])), C);
          await $.mcall((await $.wv([$t48, $t49], "ODS_State", C, false)), "Close", []);
          await $.stmt((await $.mcall((await $.wv([$t48, $t49], "ODS_State", C, false)), "SetVariable", ["custid", (await $.mv((await $.wcall([$t48, $t49], "FieldByName", ["ID"], C)), "AsInteger"))])));
          await $.stmt((await $.mcall((await $.wv([$t48, $t49], "ODS_State", C, false)), "SetVariable", ["custtype", (await $.wv([$t48, $t49], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))])));
          await $.mcall((await $.wv([$t48, $t49], "ODS_State", C, false)), "Open", []);
          await $.mcall((await $.wv([$t48, $t49], "FormStatement", C, false)), "ShowModal", []);
        } else {
          await $.stmt((await $.wcall([$t48, $t49], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
          return L0.result;
        }
      }
    }
    else if ($.eq($t47, 3)) {
      {
        const $t50 = (await $.wobj(C, "DataModPCustService"));
        const $t51 = (await $.wv([$t50], "ODS_CUSTOMERS_PHYS_FS", C, false));
        if ($.truthy((await $.and_(((await $.wv([$t50, $t51], "Active", C, false))), async () => ($.ne((await $.wv([$t50, $t51], "RecordCount", C, false)), 0)))))) {
          { const $t52 = (await $.mv((await $.wv([$t50, $t51], "XFRadioGroup1", C, false)), "ItemIndex"));
            if ($.eq($t52, (-(1)))) {
              await $.wset([$t50, $t51], "x", 10, { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true });
            }
            else if ($.eq($t52, 0)) {
              await $.wset([$t50, $t51], "a", " in 1", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
            }
            else if ($.eq($t52, 1)) {
              await $.wset([$t50, $t51], "a", " in 2", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
            }
          }
          if ($.truthy($.eq((await $.wv([$t50, $t51], "x", { get: async () => L0["x"], set: async (v) => { L0["x"] = v; }, local: true }, false)), 10))) {
            await $.wset([$t50, $t51], "n", "0,1,2,3,4", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true });
            await $.wset([$t50, $t51], "a", $.add($.add(" in (", (await $.wv([$t50, $t51], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false))), ")"), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
            await $.mcall((await $.wv([$t50, $t51], "ODS_State", C, false)), "Close", []);
            await $.stmt((await $.mcall((await $.wv([$t50, $t51], "ODS_State", C, false)), "SetVariable", ["custid", (await $.mv((await $.wcall([$t50, $t51], "FieldByName", ["ID"], C)), "AsInteger"))])));
            await $.stmt((await $.mcall((await $.wv([$t50, $t51], "ODS_State", C, false)), "SetVariable", ["custtype", (await $.wv([$t50, $t51], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))])));
            await $.mcall((await $.wv([$t50, $t51], "ODS_State", C, false)), "Open", []);
          } else {
            await $.mcall((await $.wv([$t50, $t51], "ODS_State", C, false)), "Close", []);
            await $.stmt((await $.mcall((await $.wv([$t50, $t51], "ODS_State", C, false)), "SetVariable", ["custid", (await $.mv((await $.wcall([$t50, $t51], "FieldByName", ["ID"], C)), "AsInteger"))])));
            await $.stmt((await $.mcall((await $.wv([$t50, $t51], "ODS_State", C, false)), "SetVariable", ["custtype", (await $.wv([$t50, $t51], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))])));
            await $.mcall((await $.wv([$t50, $t51], "ODS_State", C, false)), "Open", []);
          }
          await $.mcall((await $.wv([$t50, $t51], "FormStatement", C, false)), "ShowModal", []);
        } else {
          await $.stmt((await $.wcall([$t50, $t51], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
          return L0.result;
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "HesabnRedaktedilmesi1Click", async function HesabnRedaktedilmesi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "acc_bal_cn", 1);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominalın  hesablarını redakte etmek olmaz     !"])));
    return L0.result;
  }
  if ($.truthy((await $.and_(((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active"))), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "RecordCount")), 0)))))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["cus_tip", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "asinteger"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["nerezident"])), "asinteger"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["sferad_ey", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["sfera_dey"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "open", []);
  }
  {
    const $t53 = (await $.wobj(C, "DataModPCustService"));
    const $t54 = (await $.wv([$t53], "ODS_CUSTOMERS_PHYS_FS", C, false));
    if ($.truthy((await $.and_(((await $.wv([$t53, $t54], "Active", C, false))), async () => ($.ne((await $.wv([$t53, $t54], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t53, $t54], "AccountPropertiesEditF", (await $.mcall((await $.wv([$t53, $t54], "TAccountPropertiesEditF", C, false)), "Create", [Self])), C);
      await $.mcall((await $.wv([$t53, $t54], "Ods_closAccount", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t53, $t54], "Ods_closAccount", C, false)), "SetVariable", ["id", (await $.mv((await $.wcall([$t53, $t54], "FieldByName", ["id"], C)), "AsInteger"))])));
      await $.mcall((await $.wv([$t53, $t54], "Ods_closAccount", C, false)), "Open", []);
      await $.mcall((await $.wv([$t53, $t54], "AccountPropertiesEditF", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t53, $t54], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "hhh1Click", async function hhh1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin1", ["Open_account.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "HMSYoxlama1Click", async function HMSYoxlama1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "XFBitBtnHMSClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "_Set_Font", async function _Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.asRef(p0), result: undefined};
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), (await L0["value"].get())])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPCustServiceForm", "ActivateEvent", async function ActivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnActivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ActiveFormCreate", async function ActiveFormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "tt": 0, "a": '', "n": '', "line": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ins_edit", false);
  await $.set(C, "Ph_CO_frmWReport", (await $.mcall((await $.v(C, "TPh_CO_frmWReport")), "Create", [Self])));
  await $.mcall((await $.v(C, "ods_user")), "Open", []);
  await $.mcall((await $.v(C, "ods_tim")), "Open", []);
  await $.mcall((await $.v(C, "odsbankinfo")), "Open", []);
  await $.mcall((await $.v(C, "ods_cust_group")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet4")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet5")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet6")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet7")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet8")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet9")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet10")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet11")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet12")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet13")), "open", []);
  await $.mset((await $.v(C, "Panel_relative")), "Visible", false);
  await $.mset((await $.v(C, "LabelSamelyDate")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel_tipacc")), "Visible", false);
  await $.mset((await $.v(C, "RBtnResident")), "Checked", true);
  await $.set(C, "PCustServiceForm", Self);
  await $.set(C, "DataModPCustService", (await $.mcall((await $.v(C, "TDataModPCustService")), "Create", [Self])));
  await $.stmt($.call(C, "Fill_Edit", []));
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", 0);
  await $.set(C, "FormInterval", (await $.mcall((await $.v(C, "TFormInterval")), "Create", [Self])));
  await $.set(C, "FormMasin", (await $.mcall((await $.v(C, "TFormMasin")), "Create", [Self])));
  await $.set(C, "ConvertNominalToCust", false);
  await $.set(C, "pep_change", (await $.mcall((await $.v(C, "Tpep_change")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Odscountries")), "First", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxGender")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "First", []);
    { const $t55 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t56 = true;
      for (;;) {
        if (!$t56) { L0["i"] = $.succ(L0["i"], 1); }
        $t56 = false;
        if (!($.ord(L0["i"]) <= $.ord($t55))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxGender")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "OrganizationTypeCB")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "First", []);
    { const $t57 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t58 = true;
      for (;;) {
        if (!$t58) { L0["i"] = $.succ(L0["i"], 1); }
        $t58 = false;
        if (!($.ord(L0["i"]) <= $.ord($t57))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "OrganizationTypeCB")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ActionAreaCB")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "First", []);
    { const $t59 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t60 = true;
      for (;;) {
        if (!$t60) { L0["i"] = $.succ(L0["i"], 1); }
        $t60 = false;
        if (!($.ord(L0["i"]) <= $.ord($t59))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ActionAreaCB")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "BranchCB")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "First", []);
    { const $t61 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t62 = true;
      for (;;) {
        if (!$t62) { L0["i"] = $.succ(L0["i"], 1); }
        $t62 = false;
        if (!($.ord(L0["i"]) <= $.ord($t61))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "BranchCB")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "TaXAreaCB")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "First", []);
    { const $t63 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t64 = true;
      for (;;) {
        if (!$t64) { L0["i"] = $.succ(L0["i"], 1); }
        $t64 = false;
        if (!($.ord(L0["i"]) <= $.ord($t63))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "TaXAreaCB")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxFamStatus")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "First", []);
    { const $t65 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t66 = true;
      for (;;) {
        if (!$t66) { L0["i"] = $.succ(L0["i"], 1); }
        $t66 = false;
        if (!($.ord(L0["i"]) <= $.ord($t65))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxFamStatus")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxGroup")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "First", []);
    { const $t67 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t68 = true;
      for (;;) {
        if (!$t68) { L0["i"] = $.succ(L0["i"], 1); }
        $t68 = false;
        if (!($.ord(L0["i"]) <= $.ord($t67))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxGroup")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "FieldByName", ["NAME"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ComboBox3")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "First", []);
    { const $t69 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t70 = true;
      for (;;) {
        if (!$t70) { L0["i"] = $.succ(L0["i"], 1); }
        $t70 = false;
        if (!($.ord(L0["i"]) <= $.ord($t69))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox3")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "FieldByName", ["NAME"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "Next", []);
        await $.stmt((await $.call(C, "SetComboWidth", [(await $.v(C, "ComboBox3"))])));
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxDocPlace2")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "odsPassDeps")), "First", []);
    { const $t71 = $.sub((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "odsPassDeps")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t72 = true;
      for (;;) {
        if (!$t72) { L0["i"] = $.succ(L0["i"], 1); }
        $t72 = false;
        if (!($.ord(L0["i"]) <= $.ord($t71))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxDocPlace2")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "odsPassDeps")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "odsPassDeps")), "Next", []);
        await $.tick();
      }
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProc")), "open", []);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", 1);
  await $.stmt($.call(C, "Messaj_fs_phys_nom", []));
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Köçermeler"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Köçermeler")), "Visible", false);
    await $.mset((await $.v(C, "ToolButton4")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Köçermeler")), "Visible", true);
    await $.mset((await $.v(C, "ToolButton4")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "XHKS1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "XHKS1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XHKS1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "AZPS1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "AZPS1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "AZPS1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "SWFT1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "SWFT1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "SWFT1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Məhsullar"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Məhsullar")), "Visible", false);
    await $.mset((await $.v(C, "ToolButton8")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Məhsullar")), "Visible", true);
    await $.mset((await $.v(C, "ToolButton8")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Kreditler"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Kreditler")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Kreditler")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Yenikreditinverilmsi1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Yenikreditinverilmsi1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Yenikreditinverilmsi1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Mtrininkreditlri1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Mtrininkreditlri1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Mtrininkreditlri1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Depozit1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Depozit1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Depozit1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "PlastikKartlar"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "PlastikKartlar")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "PlastikKartlar")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Əməliyyat"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Əməliyyat")), "Visible", false);
    await $.mset((await $.v(C, "ToolButton7")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Əməliyyat")), "Visible", true);
    await $.mset((await $.v(C, "ToolButton7")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "SM_Email"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "SM_Email")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "SM_Email")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "ToolButton7"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "ToolButton7")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "ToolButton7")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "ToolButton6"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "ToolButton6")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "ToolButton6")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Expemmeliyyat1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Expemmeliyyat1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Expemmeliyyat1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Qaime"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Qaime")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Qaime")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "tonaj"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "tonaj")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "tonaj")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "dmtapr1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "dmtapr1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "dmtapr1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "HesabAmaq1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "HesabAmaq1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "HesabAmaq1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Hesabdanxar2"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Hesabdanxar2")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Hesabdanxar2")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "ToolButton1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "ToolButton1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "ToolButton1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "potencialm1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "potencialm1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "potencialm1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Sazlama1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Sazlama1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Sazlama1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "Qeydlr1"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Qeydlr1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Qeydlr1")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "panelMasin"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "panelMasin")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "panelMasin")), "Visible", true);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllComponents", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TarifClick", async function TarifClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "QReportOrderTarif"))]))))) {
    await $.set(C, "QReportOrderTarif", (await $.mcall((await $.v(C, "TQReportOrderTarif")), "Create", [Self])));
  }
  {
    const $t73 = (await $.wobj(C, "DataModPCustService"));
    const $t74 = (await $.wv([$t73], "ods_tarifs", C, false));
    await $.stmt($.wcall([$t73, $t74], "close", [], C));
    { const $t75 = await $.iset((await $.wv([$t73, $t74], "SQL", C, false)), [4], ""); if ($t75 !== undefined) { await $.wset([$t73, $t74], "SQL", $t75, C); } }
    await $.stmt($.wcall([$t73, $t74], "open", [], C));
  }
  await $.mcall((await $.v(C, "QReportOrderTarif")), "Preview", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "AZPS1Click", async function AZPS1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominalın plastik kartlarına  əməliyyat vermek olmaz   !"])));
    return L0.result;
  }
  await $.set(C, "tr", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  if ($.truthy($.ne((await $.v(C, "tr")), ""))) {
    await $.stmt((await $.call(C, "LoadPlugin2", ["filereport.bpl", "azips", (await $.v(C, "tr"))])));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["    Heçbir məlumat seçilməyib  ! "])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormZoom", (await $.mcall((await $.v(C, "TFormZoom")), "Create", [Self])));
  await $.mset((await $.v(C, "FormZoom")), "Height", (await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Height")));
  await $.mset((await $.v(C, "FormZoom")), "Width", (await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Height", (await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Height")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Width", (await $.mv((await $.mv((await $.v(C, "Image1")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Picture", (await $.mv((await $.v(C, "Image1")), "Picture")));
  await $.mcall((await $.v(C, "FormZoom")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormZoom", (await $.mcall((await $.v(C, "TFormZoom")), "Create", [Self])));
  await $.mset((await $.v(C, "FormZoom")), "Height", (await $.mv((await $.mv((await $.v(C, "Image2")), "Picture")), "Height")));
  await $.mset((await $.v(C, "FormZoom")), "Width", (await $.mv((await $.mv((await $.v(C, "Image2")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Height", (await $.mv((await $.mv((await $.v(C, "Image2")), "Picture")), "Height")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Width", (await $.mv((await $.mv((await $.v(C, "Image2")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Picture", (await $.mv((await $.v(C, "Image2")), "Picture")));
  await $.mcall((await $.v(C, "FormZoom")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormZoom", (await $.mcall((await $.v(C, "TFormZoom")), "Create", [Self])));
  await $.mset((await $.v(C, "FormZoom")), "Height", (await $.mv((await $.mv((await $.v(C, "Image3")), "Picture")), "Height")));
  await $.mset((await $.v(C, "FormZoom")), "Width", (await $.mv((await $.mv((await $.v(C, "Image3")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Height", (await $.mv((await $.mv((await $.v(C, "Image3")), "Picture")), "Height")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Width", (await $.mv((await $.mv((await $.v(C, "Image3")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Picture", (await $.mv((await $.v(C, "Image3")), "Picture")));
  await $.mcall((await $.v(C, "FormZoom")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormZoom", (await $.mcall((await $.v(C, "TFormZoom")), "Create", [Self])));
  await $.mset((await $.v(C, "FormZoom")), "Height", (await $.mv((await $.mv((await $.v(C, "Image4")), "Picture")), "Height")));
  await $.mset((await $.v(C, "FormZoom")), "Width", (await $.mv((await $.mv((await $.v(C, "Image4")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Height", (await $.mv((await $.mv((await $.v(C, "Image4")), "Picture")), "Height")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Width", (await $.mv((await $.mv((await $.v(C, "Image4")), "Picture")), "Width")));
  await $.mset((await $.mv((await $.v(C, "FormZoom")), "Image1")), "Picture", (await $.mv((await $.v(C, "Image4")), "Picture")));
  await $.mcall((await $.v(C, "FormZoom")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "BtnBackClick", async function BtnBackClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", $.sub((await $.mv((await $.v(C, "PageControl1")), "TabIndex")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "BtnFullNameGeneratorClick", async function BtnFullNameGeneratorClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "EditFirstName")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditPatronymic")), "Text")), "")))), async () => ($.eq((await $.mv((await $.v(C, "EditLastName")), "Text")), "")))))) {
    await $.mset((await $.v(C, "edit10")), "Text", "");
  } else {
    await $.mset((await $.v(C, "Edit10")), "Text", $.add($.add($.add($.add((await $.mv((await $.v(C, "EditLastName")), "Text")), " "), (await $.mv((await $.v(C, "EditFirstName")), "Text"))), " "), (await $.mv((await $.v(C, "EditPatronymic")), "Text"))));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "BtnNextClick", async function BtnNextClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", $.add((await $.mv((await $.v(C, "PageControl1")), "TabIndex")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "FormCusNom", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "TransactionEditForm", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "tacc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "ForOperation", (await $.v(C, "tacc"))])));
  if ($.truthy($.eq((await $.v(C, "cradd")), 1))) {
    {
      const $t76 = (await $.wobj(C, "DataModPCustService"));
      const $t77 = (await $.wv([$t76], "ODS_CUSTOMERS_PHYS_FS", C, false));
      if ($.truthy((await $.wv([$t76, $t77], "Active", C, false)))) {
        await $.stmt($.wcall([$t76, $t77], "close", [], C));
      }
      await $.stmt((await $.wcall([$t76, $t77], "SetVariable", [":custid", (await $.wv([$t76, $t77], "tacc", C, false))], C)));
      await $.stmt($.wcall([$t76, $t77], "open", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "aa", (await $.call(C, "inttostr", [2])));
  await $.stmt((await $.call(C, "showmessage", [(await $.v(C, "aa"))])));
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "smsunit", (await $.v(C, "aa"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "note_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  await $.stmt((await $.call(C, "LoadPlugin3", ["Sb_General.bpl", "note", (await $.v(C, "note_id")), ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "tacc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  if ($.truthy($.ne((await $.v(C, "tacc")), ""))) {
    await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "Cust_contact_relatives", (await $.v(C, "tacc"))])));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["    Heçbir məlumat seçilməyib  ! "])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "DrawCheckBox", async function DrawCheckBox(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"canvas": $.copyArg(p0), "x": $.copyArg(p1), "y": $.copyArg(p2), "checked": $.copyArg(p3), result: undefined};
  await $.fixArgs(L0, ["canvas", "x", "y", "checked"]);
  await $.stmt((await $.mcall(L0["canvas"], "Rectangle", [L0["x"], L0["y"], $.add(L0["x"], 12), $.add(L0["y"], 12)])));
  if ($.truthy(L0["checked"])) {
    await $.stmt((await $.mcall(L0["canvas"], "MoveTo", [L0["x"], L0["y"]])));
    await $.stmt((await $.mcall(L0["canvas"], "LineTo", [$.add(L0["x"], 12), $.add(L0["y"], 12)])));
    await $.stmt((await $.mcall(L0["canvas"], "MoveTo", [$.add(L0["x"], 12), L0["y"]])));
    await $.stmt((await $.mcall(L0["canvas"], "LineTo", [L0["x"], $.add(L0["y"], 12)])));
  }
  return L0.result;
}, {"params": ["Canvas", "X", "Y", "Checked"], "kind": "procedure", "ptypes": ["TCanvas", "Integer", "Integer", "Boolean"]});
  U.method("TPCustServiceForm", "CBoxAddressCityCloseUp", async function CBoxAddressCityCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Fakt_Adrs_City")), "KeyValue", (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "Odscities1id")), "AsInteger")));
  await $.mset((await $.v(C, "CityByConctType")), "KeyValue", (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "Odscities1id")), "AsInteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CBoxBirthStateChange", async function CBoxBirthStateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CBoxDocType1Click", async function CBoxDocType1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue")), (await $.v(C, "null"))))) {
    {
      const $t78 = (await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes"));
      if ($.truthy($.eq((await $.mv((await $.wcall([$t78], "FieldByName", ["pincodforced"], C)), "AsInteger")), 1))) {
        await $.mset((await $.wv([$t78], "EditPINCode1", C, false)), "MaxLength", 7);
        await $.mset((await $.wv([$t78], "EditDocNumber1", C, false)), "MaxLength", 8);
      } else {
        await $.mset((await $.wv([$t78], "EditPINCode1", C, false)), "MaxLength", 50);
        await $.mset((await $.wv([$t78], "EditDocNumber1", C, false)), "MaxLength", 50);
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["pincodforced"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "XFLabel92")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFLabel92")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CBoxDocType1CloseUp", async function CBoxDocType1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["name"])), "AsString"))))) {
    await $.mset((await $.v(C, "EditDocSerie1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["series"])), "AsString")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), ""))) {
    await $.mset((await $.v(C, "issue_country")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CBoxDocTypeClick", async function CBoxDocTypeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxDocType")), "KeyValue")), (await $.v(C, "null"))))) {
    {
      const $t79 = (await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes"));
      if ($.truthy($.eq((await $.mv((await $.wcall([$t79], "FieldByName", ["pincodforced"], C)), "AsInteger")), 1))) {
        await $.mset((await $.wv([$t79], "EditPINCode", C, false)), "MaxLength", 7);
        await $.mset((await $.wv([$t79], "EditDocNumber", C, false)), "MaxLength", 8);
      } else {
        await $.mset((await $.wv([$t79], "EditPINCode", C, false)), "MaxLength", 50);
        await $.mset((await $.wv([$t79], "EditDocNumber", C, false)), "MaxLength", 50);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CBoxDocTypeCloseUp", async function CBoxDocTypeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", (await $.mv((await $.v(C, "CBoxDocType")), "KeyValue")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType")), "text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["name"])), "AsString"))))) {
    await $.mset((await $.v(C, "EditDocSerie")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["series"])), "AsString")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), ""))) {
    await $.mset((await $.v(C, "issue_country")), "KeyValue", (-(1)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ClickEvent", async function ClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ComboBox1Change", async function ComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ComboBox3CloseUp", async function ComboBox3CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), 0))) {
    await $.mset((await $.v(C, "XFButton7")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFButton7")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ComboBox_riskCloseUp", async function ComboBox_riskCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t80 = (await $.wobj(C, "DataModPCustService"));
    const $t81 = (await $.wv([$t80], "ODS_risk", C, false));
    { const $t82 = (await $.mv((await $.mcall((await $.wv([$t80, $t81], "ODS_risk", C, false)), "FieldByName", ["id"])), "AsInteger"));
      if ($.eq($t82, 1)) {
        await $.mcall((await $.wv([$t80, $t81], "ods_months_sysdat", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t80, $t81], "ods_months_sysdat", C, false)), "SetVariable", [":V_MONTHS", 24])));
        await $.mcall((await $.wv([$t80, $t81], "ods_months_sysdat", C, false)), "open", []);
        await $.mset((await $.wv([$t80, $t81], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t80, $t81], "DataModPCustService", C, false)), "ods_months_sysdat")), "FieldByName", ["dat"])), "AsVariant")));
      }
      else if ($.eq($t82, 2)) {
        await $.mcall((await $.wv([$t80, $t81], "ods_months_sysdat", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t80, $t81], "ods_months_sysdat", C, false)), "SetVariable", [":V_MONTHS", 12])));
        await $.mcall((await $.wv([$t80, $t81], "ods_months_sysdat", C, false)), "open", []);
        await $.mset((await $.wv([$t80, $t81], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t80, $t81], "DataModPCustService", C, false)), "ods_months_sysdat")), "FieldByName", ["dat"])), "AsVariant")));
      }
      else if ($.eq($t82, 3)) {
        await $.mcall((await $.wv([$t80, $t81], "ods_months_sysdat", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t80, $t81], "ods_months_sysdat", C, false)), "SetVariable", [":V_MONTHS", 6])));
        await $.mcall((await $.wv([$t80, $t81], "ods_months_sysdat", C, false)), "open", []);
        await $.mset((await $.wv([$t80, $t81], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t80, $t81], "DataModPCustService", C, false)), "ods_months_sysdat")), "FieldByName", ["dat"])), "AsVariant")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CreateEvent", async function CreateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnCreate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CustAdd1Click", async function CustAdd1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cust_elaqe_Transaction", 0);
  await $.set(C, "ins_elaqe", 0);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  await $.mset((await $.v(C, "id_quality_DBLookupComboboxEh")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality")), "Lookup", ["name", "Yüksək", "id"])));
  await $.mset((await $.idx((await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "controls")), [3])), "Enabled", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [9])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [10])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [11])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [12])), "TabVisible", false);
  await $.mset((await $.v(C, "XFBitcontinue")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type1")), "Visible", true);
  await $.mset((await $.v(C, "XFButton4")), "Visible", false);
  await $.mset((await $.v(C, "XFButton5")), "Visible", false);
  await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", false);
  await $.set(C, "ins_edit", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CustClear1Click", async function CustClear1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": '', "n": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t83 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProc"));
    await $.stmt($.wcall([$t83], "close", [], C));
    await $.stmt((await $.wcall([$t83], "SetVariable", ["custtype", (await $.wv([$t83], "null", C, false))], C)));
    await $.stmt((await $.wcall([$t83], "SetVariable", ["ids", (await $.wv([$t83], "null", C, false))], C)));
    await $.stmt($.wcall([$t83], "open", [], C));
  }
  await $.mset((await $.v(C, "id_quality_DBLookupComboboxEh")), "Enabled", true);
  await $.mset((await $.v(C, "ButtonMeyar")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "XFRadioGroup1")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Enabled", true);
  await $.mset((await $.v(C, "Comb_riskdescid")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "ComboBox_risk")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "DateTi_samelydate")), "clear", []);
  await $.mset((await $.v(C, "DBLookup_cust_compani")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Edit_SFERKOD")), "Clear", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditMasin")), "Visible")), true))) {
    await $.mcall((await $.v(C, "EditMasin")), "Clear", []);
  }
  await $.mset((await $.v(C, "LabelSamelyDate")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel_tipacc")), "Visible", false);
  await $.mcall((await $.v(C, "EditBic")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_reg_no")), "Clear", []);
  await $.mcall((await $.v(C, "DBDateTimeEditEh_gerdat")), "Clear", []);
  await $.mset((await $.v(C, "CBox")), "Enabled", true);
  await $.mset((await $.v(C, "ActionAreaCB")), "Enabled", true);
  await $.mset((await $.v(C, "XFButton4")), "Visible", true);
  await $.mset((await $.v(C, "XFButton5")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type1")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "XFCust")), "Visible", false);
  await $.mset((await $.v(C, "XFBitBtnHMS")), "Visible", false);
  await $.mset((await $.v(C, "XFBitcontinue")), "Visible", false);
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", 0);
  await $.mcall((await $.v(C, "EditID")), "Clear", []);
  await $.mcall((await $.v(C, "EditFirstName")), "Clear", []);
  await $.mcall((await $.v(C, "EditPatronymic")), "Clear", []);
  await $.mcall((await $.v(C, "EditLastName")), "Clear", []);
  await $.mcall((await $.v(C, "EditFullName")), "Clear", []);
  await $.mcall((await $.v(C, "EditPINCode")), "Clear", []);
  await $.mcall((await $.v(C, "EditITN")), "Clear", []);
  await $.mset((await $.v(C, "EditITN")), "Enabled", true);
  await $.mset((await $.v(C, "XFLaEditITN")), "Enabled", true);
  await $.mset((await $.v(C, "CBoxCitizenship")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CBoxGender")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBoxFamStatus")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBoxGroup")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBox")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "ComboBox3")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "EditDocSerie")), "Clear", []);
  await $.mcall((await $.v(C, "EditDocNumber")), "Clear", []);
  await $.mset((await $.v(C, "CBoxDocPlace2")), "text", "");
  await $.mset((await $.v(C, "CBoxBirthState")), "KeyValue", "");
  await $.mset((await $.v(C, "CBoxBirthCity")), "KeyValue", "");
  await $.mset((await $.v(C, "CBoxAddressState")), "KeyValue", "");
  await $.mset((await $.v(C, "CBoxAddressCity")), "KeyValue", "");
  await $.mset((await $.v(C, "OrganizationTypeCB")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "ActionAreaCB")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "BranchCB")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "TaXAreaCB")), "ItemIndex", (-(1)));
  await $.mcall((await $.v(C, "EditAddress")), "Clear", []);
  await $.mcall((await $.v(C, "EditAddressFactical")), "Clear", []);
  await $.mcall((await $.v(C, "EditPhoneMob")), "Clear", []);
  await $.mcall((await $.v(C, "EditPhoneCity")), "Clear", []);
  await $.mcall((await $.v(C, "EditEmail")), "Clear", []);
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  await $.mset((await $.v(C, "RBtnResident")), "Checked", false);
  await $.mset((await $.v(C, "RBtnNoResident")), "Checked", false);
  await $.mcall((await $.v(C, "faktor_muq")), "Clear", []);
  await $.mcall((await $.v(C, "faktor_hesab")), "Clear", []);
  await $.mcall((await $.v(C, "faktor_bank")), "Clear", []);
  await $.mcall((await $.v(C, "faktor_bankkod")), "Clear", []);
  await $.mcall((await $.v(C, "faktor_swift")), "Clear", []);
  await $.mcall((await $.v(C, "faktor_muxhesab")), "Clear", []);
  await $.mcall((await $.v(C, "faktor_dat")), "Clear", []);
  await $.mcall((await $.v(C, "DTPickerDocDate")), "clear", []);
  await $.mcall((await $.v(C, "DTPickerDocExpiryDate")), "clear", []);
  await $.mcall((await $.v(C, "DTPickerBirthDate")), "clear", []);
  await $.mcall((await $.v(C, "Dtp_Ustav")), "clear", []);
  await $.mcall((await $.v(C, "dpt_nal")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active", false);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_custinfo")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Pozition")), "Close", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComb_BankKard")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComb_borrower_occupation")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComb_idxal")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComb_finance")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupCombobiflas")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComb_borrower_bad")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Panel_relative")), "Visible", false);
  await $.mcall((await $.v(C, "ReportingDate")), "Clear", []);
  await $.mset((await $.v(C, "ReportType")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Revenue")), "Clear", []);
  await $.mcall((await $.v(C, "Ebitda")), "Clear", []);
  await $.mcall((await $.v(C, "Ebit")), "Clear", []);
  await $.mcall((await $.v(C, "InterestExpences")), "Clear", []);
  await $.mcall((await $.v(C, "NetProfit")), "Clear", []);
  await $.mcall((await $.v(C, "TotalAssets")), "Clear", []);
  await $.mcall((await $.v(C, "TotalAssetsForeignCurrency")), "Clear", []);
  await $.mcall((await $.v(C, "TotalLiabilitiesForeignCurrency")), "Clear", []);
  await $.mcall((await $.v(C, "InterestExpenceLiabilities")), "Clear", []);
  await $.mcall((await $.v(C, "TotalLiabilities")), "Clear", []);
  await $.mcall((await $.v(C, "ForeignInterestExpenceLiabilities")), "Clear", []);
  await $.mcall((await $.v(C, "TotalCapital")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupInsolvencyStatus")), "KeyValue", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active")), false))) {
    { const $t84 = 11;
      L0["i"] = 0;
      let $t85 = true;
      for (;;) {
        if (!$t85) { L0["i"] = $.succ(L0["i"], 1); }
        $t85 = false;
        if (!($.ord(L0["i"]) <= $.ord($t84))) break;
        await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [L0["i"]])), "Visible", true);
        await $.tick();
      }
    }
  }
  await $.mcall((await $.v(C, "MemoNotes")), "Clear", []);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [9])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [10])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [11])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [12])), "TabVisible", true);
  await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", true);
  await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", true);
  await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", true);
  await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", true);
  await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", true);
  await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", true);
  await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", true);
  await $.mset((await $.v(C, "EditPINCode1")), "Enabled", true);
  await $.mset((await $.v(C, "XFBitBtn2")), "Visible", false);
  await $.mset((await $.v(C, "Db_WORK_VID_SOB")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Db_WORK_OTRASLI")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Edit_MONTHLYPROFIT")), "Clear", []);
  await $.mcall((await $.v(C, "incor_number")), "Clear", []);
  await $.mset((await $.v(C, "tph_contact_type")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "tph_communication_type")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Db_tph_number")), "Clear", []);
  await $.mset((await $.v(C, "Address_type")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "db_tph_adress")), "clear", []);
  await $.mset((await $.v(C, "CityByConctType")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CountryByConctType")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Edit_url")), "Clear", []);
  await $.mcall((await $.v(C, "DB_INCORP_STATE")), "Clear", []);
  await $.mset((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Db_tph_extension")), "Clear", []);
  await $.mcall((await $.v(C, "DB_tph_zip")), "Clear", []);
  await $.mset((await $.v(C, "tph_country_prefix")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "db_tph_state")), "Clear", []);
  await $.mset((await $.v(C, "issue_country")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBCBox_Citizenship2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBCBox_Citizenship3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Fakt_Adrs_State")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLoCbox_fakt_adress_owner")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Fakt_Adrs_City")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "ZipFakt")), "Clear", []);
  await $.mcall((await $.v(C, "Work_Place")), "Clear", []);
  await $.mcall((await $.v(C, "Work_Post")), "Clear", []);
  await $.mcall((await $.v(C, "Work_Address")), "Clear", []);
  await $.mcall((await $.v(C, "Work_Phone")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_activity")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_profession")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_source_of_income")), "Clear", []);
  await $.mcall((await $.v(C, "edit10")), "Clear", []);
  await $.mset((await $.v(C, "id_quality_DBLookupComboboxEh")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "XFLabel12")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel41")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel42")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel8")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel24")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel62")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel67")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel66")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel101")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel9")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel10")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel11")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel86")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel90")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel95")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel96")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel81")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel82")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel97")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel83")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel84")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel80")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel68")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel69")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel87")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel85")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel75")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel98")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel99")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel54")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel25")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel55")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel56")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel58")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel59")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel60")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel26")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel27")), "Visible", false);
  await $.mset((await $.v(C, "XFLabel28")), "Visible", false);
  await $.set(C, "ins_edit", false);
  await $.mcall((await $.v(C, "Edit_grop_name")), "Clear", []);
  await $.set(C, "cust_elaqe_Transaction", 0);
  await $.set(C, "ins_elaqe", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CustClose1Click", async function CustClose1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [10, "close_cust"]])), ["c_id"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["close_customers_prosess", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Refresh", []);
    await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CustEdit1Click", async function CustEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_id": 0, "c_name": '', "c_open_dat": 0, "c_op_id": 0, "c_inn": '', "c_group_klie": 0, "c_close_dat": 0, "c_nerezident": 0, "c_vid_sob": null, "c_prinad_kod": 0, "c_cust_type": 0, "c_cust_jur": null, "c_cust_phys": null, "c_cust_fs": null, "c_bik": '', "c_state_reyester_no": null, "c_reyester_dat": null, "c_risk_categ": null, "d_risk_categ": null, "c_riskdescid": 0, "c_samelydate": null, "c_category": 0, "d_name": '', "d_soname": '', "d_lastname": '', "d_passer": '', "d_birthday": null, "d_birthplace": '', "d_fam_status": 0, "d_address": '', "d_fakt_adress": '', "d_phone_h": '', "d_e_mail": '', "d_sex": 0, "d_paspnum": '', "d_adrs_state": '', "d_city": '', "d_doc_type": 0, "d_birth_state": '', "d_phone_m": '', "d_paspdate": null, "d_paspplace": '', "d_passpin": '', "d_citizenship": 0, "d_passexpire": null, "d_note": '', "c_editid": 0, "c_org_sob": 0, "c_sfera_dey": 0, "c_otrasl": 0, "c_nalog_kod": 0, "c_short_name": '', "a": 0, "b": 0, "c": 0, "c_incorporation_number": '', "c_tph_contact_type": '', "c_tph_communication_type": '', "c_tph_number": '', "c_address_type": '', "c_address": '', "c_city": null, "c_country_code": null, "c_director_id": 0, "c_dat_ustav": null, "c_dpt_nal": null, "c_email": '', "c_url": '', "c_incorporation_state": '', "c_incorporation_cntr": null, "c_tph_extension": '', "c_tph_zip": '', "c_tph_country_prefix": '', "c_tph_state": '', "d_tph_contact_type": '', "d_tph_country": null, "d_tph_country_code": '', "d_tph_city": null, "d_tph_state": '', "d_tph_zip": '', "d_tph_country_prefix": '', "d_tph_adress": '', "d_tph_communication_type": '', "d_tph_number": '', "d_tph_extension": '', "d_contact_type": '', "d_url": '', "d_doc_country": 0, "d_citizenship2": 0, "d_citizenship3": 0, "d_fakt_country": 0, "d_fakt_city": 0, "d_fakt_zip": '', "d_work_place": '', "d_work_post": '', "d_work_adress": '', "d_work_phone": '', "d_work_otrasli": null, "d_work_vid_sob": null, "d_monthlyprofit": null, "c_id_quality": 0, "d_quality_id": 0, "c_name_quality": '', "d_fakt_adress_owner": 0, "c_compani": 0, "c_sfereday_kod": null, "d_activity": '', "d_profession": '', "d_source_of_income": '', "d_rescount": 0, "d_rescount1": 0, "d_rescount2": 0, "d_work_experience": '', "d_last_work_experience": '', "d_family_number": 0, "d_credit_history": '', "d_cust_involvement": '', "c_faktor_muq": '', "c_faktor_opendat": null, "c_faktor_accno": '', "c_faktor_bank": '', "c_faktor_bankkod": '', "c_faktor_muxaccno": '', "c_faktor_swift": '', "mobs": '', "black": '', "ins": 0, "d_iflas": '', "d_import_export": '', "d_financial_statement": '', "d_bank_card": '', "d_borrower_occupation": '', "d_borrower_bad": '', "d_reportingdate": null, "d_reporttype": '', "d_revenue": null, "d_ebitda": null, "d_ebit": null, "d_interestexpences": null, "d_netprofit": null, "d_totalassets": null, "d_totalassetsforeigncurrency": null, "d_totalliabilitiesforeigncurrency": null, "d_interestexpenceliabilities": null, "d_totalliabilities": null, "d_foreigninterestexpenceliabilities": null, "d_totalcapital": null, "d_insolvencystatus": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "t1", 1);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "SB_ACA")), "CallProcedure", ["CheckObjectAccess", ["PCUSTSERVICE", "update"]])));
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditID")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Heç bir məlumat seseçilməyib !"])));
    return L0.result;
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 3)), async () => ($.ne((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 3)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Fiziki şəxs və sahibkarı Fiziki şəxsə və sahibkara çevirmek olmaz !"])));
    return L0.result;
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4)), async () => ($.eq((await $.v(C, "ConvertNominalToCust")), false)))))) {
    if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 1, 2, 3]))) {
      await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [6, "edit_Nom_Cust"]]))])));
      return L0.result;
    }
  } else {
    if ($.truthy($.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), [0, 1, 2, 3]))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 4))) {
        await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [7, "edit_cust_nom"]]))])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), (-(1))))) {
    await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
    await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [1, "cust_type"]]))])));
    return L0.result;
  }
  { const $t86 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t86, 0)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel12")), "Visible")), true))) {
        if ($.truthy(($.eq((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", ["VÖEN sahəsi boşdur"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (-(1))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "showmessage", ["  Kateqoriyası sahəsi Kodu  daxil edilməlidir!"])));
        return L0.result;
      }
    }
    else if ($.eq($t86, 1) || $.eq($t86, 4)) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["pincodforced"])), "AsInteger")), 1))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true))) {
          if ($.truthy(($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
            await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
            return L0.result;
          }
        }
      }
      if ($.truthy(((await $.or_((await $.or_((await $.or_(((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 3])), "AZE")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))), async () => ((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "AA")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6)))))))))) {
        await $.stmt((await $.call(C, "ShowMessage", ["  FIN-i düzgün daxil edin  !"])));
        $.abort();
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (-(1))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "showmessage", ["  Kateqoriyası sahəsi Kodu  daxil edilməlidir!"])));
        return L0.result;
      }
    }
    else if ($.eq($t86, 2)) {
      if ($.truthy(($.eq((await $.mv((await $.v(C, "XFLabel12")), "Visible")), true)))) {
        if ($.truthy(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditITN")), "Text"))])), "")))) {
          await $.stmt((await $.call(C, "showmessage", ["VÖEN  sahəsi boşdur"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["pincodforced"])), "AsInteger")), 1))) {
        if ($.truthy(($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true)))) {
          if ($.truthy(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), "")))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
            await $.stmt((await $.call(C, "showmessage", ["Pinkod  sahəsi boşdur"])));
            return L0.result;
          }
        }
      }
      if ($.truthy(((await $.or_((await $.or_((await $.or_(((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 3])), "AZE")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))), async () => ((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "AA")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6)))))))))) {
        await $.stmt((await $.call(C, "ShowMessage", ["  FIN-i düzgün daxil edin  !"])));
        $.abort();
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (-(1))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "showmessage", ["  Kateqoriyası sahəsi Kodu  daxil edilməlidir!"])));
        return L0.result;
      }
    }
  }
  {
    const $t87 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_Customers_PhysFS_yoxlama"));
    await $.stmt($.wcall([$t87], "close", [], C));
    await $.stmt((await $.wcall([$t87], "SetVariable", ["ID_YOXLAMA", (await $.wcall([$t87], "strtoint", [(await $.mv((await $.wv([$t87], "EditID", C, false)), "Text"))], C))], C)));
    await $.stmt($.wcall([$t87], "Open", [], C));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["inn"])), "AsString"))))) {
    if ($.truthy(($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
      if ($.truthy(($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
        L0["a"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_inn", (await $.mv((await $.v(C, "EditITN")), "Text"))]]));
      }
      if ($.truthy($.ne(L0["a"], (-(1))))) {
        await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["a"]])), " -ID i  üçün  "), (await $.mv((await $.v(C, "EditITN")), "Text"))), "  VÖEN mövcuddur!")])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["passpin"])), "AsString"))))) {
    if ($.truthy(($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passpin", (await $.mv((await $.v(C, "EditPINCode1")), "Text"))]]));
      if ($.truthy($.ne(L0["b"], (-(1))))) {
        await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["b"]])), " -ID i  üçün "), (await $.mv((await $.v(C, "EditPINCode1")), "Text"))), "  Pinkod mövcuddur!")])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["passport"])), "AsString"))))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "EditDocNumber1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["passp_number"])), "AsString"))))) {
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false)), async () => ($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false)))))) {
      } else {
        if ($.truthy((await $.or_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text"))])), "")), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocNumber1")), "Text"))])), "")))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
          return L0.result;
        } else {
          if ($.truthy($.ne(($.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text")))), ""))) {
            L0["c"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passer_panum", $.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"))]]));
            if ($.truthy($.ne(L0["c"], (-(1))))) {
              await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add($.add($.add((await $.call(C, "inttostr", [L0["c"]])), " -ID i  üçün "), (await $.mv((await $.v(C, "EditDocSerie1")), "Text"))), " /"), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), "  Sənədin  seryasi mövcuddur!")])));
              return L0.result;
            }
          }
        }
      }
    }
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "XFLabel8")), "Visible")), true)), async () => ($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), true)))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false))) {
      await $.mset((await $.v(C, "EditDocSerie")), "Text", "");
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie")), "Text")), ""))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
        await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
        return L0.result;
      }
    }
  }
  L0["d_passer"] = (await $.mv((await $.v(C, "EditDocSerie")), "Text"));
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "XFLabel8")), "Visible")), true)), async () => ($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), true)))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false))) {
      await $.mset((await $.v(C, "EditDocNumber")), "Text", "");
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber")), "Text")), ""))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
        await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
        return L0.result;
      }
    }
  }
  L0["d_paspnum"] = (await $.mv((await $.v(C, "EditDocNumber")), "Text"));
  { const $t88 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t88, 0)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel24")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFullName")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
          await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [2, "cust_İnsname"]]))])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel62")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue")), (-(1))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
          await $.stmt((await $.call(C, "ShowMessage", ["Mənsub olduğu ölkə sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel67")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "incor_number")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
          await $.stmt((await $.call(C, "ShowMessage", ["Dövlət qeydiyyat nömrəsi sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel66")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Dtp_Ustav")), "value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
          await $.stmt((await $.call(C, "showmessage", [" Nizamnaməsi qeydiyyata alındığı tarixi daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel101")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Dpt_nal")), "value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
          await $.stmt((await $.call(C, "showmessage", [" DVM-də qeydə alındığı tarixi daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel90")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "ShowMessage", [" Risk kateqoriyası sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel95")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Comb_riskdescid")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", [" Risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel96")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", ["Eyniləşdirmə tarixi daxil edilməlidir!"])));
          return L0.result;
        }
      }
      if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 2]))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel122")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue")), (-(1))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["  Fəaliyyət sahəsi Kodu  daxil edilməlidir!"])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 2]))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel121")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookup_cust_compani")), "KeyValue")), (-(1))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["ƏDV \\ Təsnifat kodu  daxil edilməlidir!"])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel54")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel25")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel55")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel56")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel58")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel59")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel60")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
    }
    else if ($.eq($t88, 1) || $.eq($t88, 2) || $.eq($t88, 3) || $.eq($t88, 4)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel11")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditLastName")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [3, "custinfo_inslastname"]]))])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel9")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFirstName")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [4, "custinfo_İnsname"]]))])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel10")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPatronymic")), "Text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
            await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [5, "custinfo_İnsasoname"]]))])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel118")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CBoxGender")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "ShowMessage", ["Cinsi sahesi doldurulmayib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel119")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CBoxFamStatus")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "ShowMessage", ["Ailə vəziyyəti sahesi doldurulmayib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel86")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxCitizenship")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
          await $.stmt((await $.call(C, "ShowMessage", ["Vətəndaşlığını daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel90")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "ShowMessage", ["Risk kateqoriyası sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel95")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Comb_riskdescid")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", ["Risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel96")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
          await $.stmt((await $.call(C, "showmessage", ["Eyniləşdirmə tarixi daxil edilməlidir!"])));
          return L0.result;
        }
      }
      if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 2]))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel122")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue")), (-(1))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["  Fəaliyyət sahəsi Kodu  daxil edilməlidir!"])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 2]))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel121")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookup_cust_compani")), "KeyValue")), (-(1))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["ƏDV \\ Təsnifat kodu  daxil edilməlidir!"])));
            return L0.result;
          }
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel81")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın ölkəsini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel82")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın şəhərini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel97")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerBirthDate")), "Value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "ShowMessage", ["Doğum tarixin daxil edin"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel83")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın ölkəsini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel84")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın şəhərini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel80")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "EditAddress")), "Text")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanı sahəsi doldurulmayib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel68")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Fakt_Adrs_State")), "Text")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın ölkəsini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel69")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Fakt_Adrs_City")), "Text")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın şəhərini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel28")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "EditAddressFactical")), "Text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
          await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType")), "Text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "showmessage", ["Sənədin növünü  daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel75")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "issue_country")), "Text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi ölkəni daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel85")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocPlace2")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi yeri daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel98")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerDocDate")), "Value")), (await $.v(C, "null"))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "ShowMessage", ["Sənədin verildiyi tarixi daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel99")), "Visible")), true))) {
        if ($.truthy(($.eq((await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "Value")), (await $.v(C, "null")))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
          await $.stmt((await $.call(C, "ShowMessage", ["Sənədin etibarlıq tarixin daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel54")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel25")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel55")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel56")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel58")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel59")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel60")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel127")), "Visible")), true))) {
        if ($.truthy((await $.or_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditEmail")), "text"))])), "")), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "edit1")), "text"))])), "")))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
          await $.stmt((await $.call(C, "ShowMessage", ["Email  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel115")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Work_Place")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yerinin adı  sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel116")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Work_Post")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yerinin Vəzifəsi  sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel117")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Work_Address")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yerinin Ünvan  sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel104")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Db_WORK_VID_SOB")), "text")), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yeri haqqında ümumi fəaliyyət sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel105")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_WORK_OTRASLI")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", ["İş yeri haqqında  fəaliyyət sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel112")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_activity")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", [" Fəaliyyət istiqaməti sahəsi  doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel113")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_profession")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", [" Peşəsi sahəsi  doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel114")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_source_of_income")), "text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", [" Gəlir mənbəyi  sahəsi  doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel128")), "Visible")), true))) {
        L0["mobs"] = (await $.call(C, "stringreplace", [(await $.mv((await $.v(C, "EditPhoneMob")), "Text")), "-", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
        L0["mobs"] = (await $.call(C, "stringreplace", [L0["mobs"], " ", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
        if ($.truthy($.lt((await $.call(C, "Length", [L0["mobs"]])), 9))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 7);
          await $.stmt((await $.call(C, "ShowMessage", [" Mobil telefon sahesi tam doldurulmayib !"])));
          return L0.result;
        }
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 5))) {
    L0["c_name"] = (await $.mv((await $.v(C, "DBLookupCombob_grop")), "Text"));
  } else {
    L0["c_name"] = (await $.mv((await $.v(C, "EditFullName")), "Text"));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")), 5))) {
    L0["c_incorporation_number"] = (await $.mv((await $.v(C, "Edit_grop_name")), "Text"));
  }
  L0["c_inn"] = (await $.mv((await $.v(C, "EditITN")), "Text"));
  L0["c_short_name"] = (await $.mv((await $.v(C, "EditShort_name")), "Text"));
  L0["c_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditID")), "Text"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGroup")), "Text")), []])));
  L0["c_group_klie"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "FieldByName", ["ID"])), "AsInteger"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), true))) {
    L0["c_nerezident"] = 1;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), true))) {
    L0["c_nerezident"] = 0;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "CBox")), "Text")), []])));
  L0["c_vid_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData")), "FieldByName", ["ID"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox3")), "Text")), []])));
  L0["c_prinad_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "FieldByName", ["ID"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUST_RISK_DESC")), "Locate", ["name", (await $.mv((await $.v(C, "Comb_riskdescid")), "Text")), []])));
  L0["c_riskdescid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUST_RISK_DESC")), "FieldByName", ["ID"])), "AsInteger"));
  L0["c_samelydate"] = (await $.mv((await $.v(C, "DateTi_samelydate")), "Value"));
  { const $t89 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t89, 0)) {
      L0["c_cust_type"] = 0;
      await $.mset((await $.v(C, "EditPINCode1")), "Text", "");
      L0["c_cust_jur"] = 1;
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t89, 1)) {
      L0["c_cust_type"] = 1;
      await $.mset((await $.v(C, "EditITN")), "Text", "");
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = 1;
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t89, 2)) {
      L0["c_cust_type"] = 2;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = 1;
    }
    else if ($.eq($t89, 3)) {
      L0["c_cust_type"] = 3;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = 1;
      L0["c_cust_fs"] = 1;
    }
    else if ($.eq($t89, 4)) {
      L0["c_cust_type"] = 4;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t89, 5)) {
      L0["c_cust_type"] = 5;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_phys"])), "AsInteger")), 1)), async () => ((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_fs"])), "isnull"))))), async () => ($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 2)))))) {
    L0["c_cust_phys"] = 1;
    L0["c_cust_fs"] = 1;
    L0["c_cust_type"] = 3;
  }
  L0["d_name"] = (await $.mv((await $.v(C, "EditFirstName")), "Text"));
  L0["d_soname"] = (await $.mv((await $.v(C, "EditPatronymic")), "Text"));
  L0["d_lastname"] = (await $.mv((await $.v(C, "EditLastName")), "Text"));
  L0["d_birthday"] = (await $.mv((await $.v(C, "DTPickerBirthDate")), "Value"));
  L0["d_birthplace"] = (await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), []])));
  L0["d_fam_status"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "FieldByName", ["ID"])), "AsInteger"));
  L0["d_address"] = (await $.mv((await $.v(C, "EditAddress")), "Text"));
  L0["d_fakt_adress"] = (await $.mv((await $.v(C, "EditAddressFactical")), "Text"));
  L0["d_phone_h"] = (await $.mv((await $.v(C, "EditPhoneCity")), "Text"));
  L0["d_e_mail"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGender")), "Text")), []])));
  L0["d_sex"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "FieldByName", ["id"])), "AsInteger"));
  L0["d_adrs_state"] = (await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue"));
  L0["d_city"] = (await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
    L0["d_doc_type"] = 0;
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxDocType1")), "Text")), []])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxDocType1")), "Text")), []])));
    if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Text")), ""))) {
      L0["d_doc_type"] = 0;
    } else {
      L0["d_doc_type"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"));
    }
  }
  L0["d_birth_state"] = (await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue"));
  L0["d_phone_m"] = (await $.mv((await $.v(C, "EditPhoneMob")), "Text"));
  L0["d_paspdate"] = (await $.mv((await $.v(C, "DTPickerDocDate")), "Value"));
  L0["d_paspplace"] = (await $.mv((await $.v(C, "CBoxDocPlace2")), "text"));
  L0["d_passpin"] = (await $.mv((await $.v(C, "EditPINCode")), "Text"));
  L0["d_note"] = (await $.mv((await $.v(C, "MemoNotes")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxCitizenship")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_citizenship"] = (await $.mv((await $.v(C, "CBoxCitizenship")), "KeyValue"));
  } else {
    L0["d_citizenship"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_rescount"] = (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"));
  } else {
    L0["d_rescount"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_rescount1"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"));
  } else {
    L0["d_rescount1"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_rescount2"] = (await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue"));
  } else {
    L0["d_rescount2"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_work_experience"] = (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text"));
  } else {
    L0["d_work_experience"] = "";
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_last_work_experience"] = (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Value"));
  } else {
    L0["d_last_work_experience"] = "";
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["c_category"] = (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"));
  } else {
    L0["c_category"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "edit3")), "Text")), ""))) {
    L0["d_family_number"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit3")), "Text"))]));
  } else {
    L0["d_family_number"] = 0;
  }
  L0["d_cust_involvement"] = (await $.mv((await $.v(C, "edit2")), "Text"));
  L0["d_passexpire"] = (await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "Value"));
  L0["c_editid"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "EditID")), "Text"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "OrganizationTypeCB")), "Text")), []])));
  L0["c_org_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "ActionAreaCB")), "Text")), []])));
  L0["c_sfera_dey"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "Locate", ["name", (await $.mv((await $.v(C, "BranchCB")), "Text")), []])));
  L0["c_otrasl"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "TaxAreaCB")), "Text")), []])));
  L0["c_nalog_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "FieldByName", ["id"])), "AsInteger"));
  L0["d_doc_country"] = (await $.mv((await $.v(C, "issue_country")), "KeyValue"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBCBox_Citizenship2")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_citizenship2"] = (await $.mv((await $.v(C, "DBCBox_Citizenship2")), "KeyValue"));
  } else {
    L0["d_citizenship2"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBCBox_Citizenship3")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_citizenship3"] = (await $.mv((await $.v(C, "DBCBox_Citizenship3")), "KeyValue"));
  } else {
    L0["d_citizenship3"] = 0;
  }
  L0["d_fakt_country"] = (await $.mv((await $.v(C, "Fakt_Adrs_State")), "KeyValue"));
  L0["d_fakt_city"] = (await $.mv((await $.v(C, "Fakt_Adrs_City")), "KeyValue"));
  L0["d_fakt_zip"] = (await $.mv((await $.v(C, "ZipFakt")), "Text"));
  L0["d_work_place"] = (await $.mv((await $.v(C, "Work_Place")), "Text"));
  L0["d_work_post"] = (await $.mv((await $.v(C, "Work_Post")), "Text"));
  L0["d_work_adress"] = (await $.mv((await $.v(C, "Work_Address")), "Text"));
  L0["d_work_phone"] = (await $.mv((await $.v(C, "Work_Phone")), "Text"));
  L0["c_dat_ustav"] = (await $.mv((await $.v(C, "Dtp_Ustav")), "value"));
  L0["c_dpt_nal"] = (await $.mv((await $.v(C, "dpt_nal")), "Value"));
  L0["c_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
  L0["c_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
  L0["c_tph_number"] = (await $.mv((await $.v(C, "Db_tph_number")), "Text"));
  L0["c_address_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
  L0["c_address"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
  L0["c_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
  L0["c_country_code"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
  L0["c_email"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
  L0["c_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
  L0["c_incorporation_state"] = (await $.mv((await $.v(C, "DB_INCORP_STATE")), "Text"));
  L0["c_incorporation_cntr"] = (await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue"));
  L0["c_tph_extension"] = (await $.mv((await $.v(C, "Db_tph_extension")), "Text"));
  L0["c_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
  L0["c_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
  L0["c_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
  L0["d_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
  L0["d_tph_country"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
  L0["d_tph_country_code"] = (await $.mv((await $.v(C, "DBEdit_CountryCode")), "Text"));
  L0["d_tph_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
  L0["d_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
  L0["d_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
  L0["d_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
  L0["d_tph_adress"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
  L0["d_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
  L0["d_tph_number"] = (await $.mv((await $.v(C, "db_tph_number")), "Text"));
  L0["d_tph_extension"] = (await $.mv((await $.v(C, "db_tph_extension")), "Text"));
  L0["d_contact_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
  L0["d_e_mail"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
  L0["d_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
  L0["d_activity"] = (await $.mv((await $.v(C, "edit_activity")), "Text"));
  L0["d_profession"] = (await $.mv((await $.v(C, "edit_profession")), "Text"));
  L0["d_source_of_income"] = (await $.mv((await $.v(C, "edit_source_of_income")), "text"));
  L0["c_faktor_muq"] = (await $.mv((await $.v(C, "faktor_muq")), "Text"));
  L0["c_faktor_opendat"] = (await $.mv((await $.v(C, "faktor_dat")), "Value"));
  L0["c_faktor_accno"] = (await $.mv((await $.v(C, "faktor_hesab")), "Text"));
  L0["c_faktor_bank"] = (await $.mv((await $.v(C, "faktor_bank")), "Text"));
  L0["c_faktor_bankkod"] = (await $.mv((await $.v(C, "faktor_bankkod")), "Text"));
  L0["c_faktor_muxaccno"] = (await $.mv((await $.v(C, "faktor_muxhesab")), "Text"));
  L0["c_faktor_swift"] = (await $.mv((await $.v(C, "faktor_swift")), "Text"));
  L0["c_name_quality"] = (await $.mv((await $.v(C, "id_quality_DBLookupComboboxEh")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "id_quality_DBLookupComboboxEh")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality")), "Locate", ["name", (await $.mv((await $.v(C, "id_quality_DBLookupComboboxEh")), "Text")), []])));
    L0["c_id_quality"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality")), "FieldByName", ["ID"])), "AsInteger"));
    L0["d_quality_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_quality")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_id_quality"] = 0;
    L0["d_quality_id"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLoCbox_fakt_adress_owner")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_fakt_adress_owner")), "Locate", ["name", (await $.mv((await $.v(C, "DBLoCbox_fakt_adress_owner")), "Text")), []])));
    L0["d_fakt_adress_owner"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_fakt_adress_owner")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["d_fakt_adress_owner"] = 0;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Dəyşikliki Yadda saxlanılsınmı ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    { const $t90 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
      if ($.eq($t90, 5)) {
        L0["c_incorporation_number"] = (await $.mv((await $.v(C, "Edit_grop_name")), "Text"));
      }
      else if ($.eq($t90, 0)) {
        if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox_risk")), "KeyValue")), (-(1))))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
          L0["c_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_risk")), "FieldByName", ["ID"])), "AsInteger"));
        } else {
          L0["c_risk_categ"] = 0;
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
        L0["c_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_risk")), "FieldByName", ["ID"])), "AsInteger"));
        L0["d_risk_categ"] = "";
        L0["c_incorporation_number"] = (await $.mv((await $.v(C, "incor_number")), "Text"));
        L0["c_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
        L0["c_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
        L0["c_tph_number"] = (await $.mv((await $.v(C, "Db_tph_number")), "Text"));
        L0["c_address_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
        L0["c_address"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
        L0["c_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
        L0["c_country_code"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
        L0["c_dat_ustav"] = (await $.mv((await $.v(C, "Dtp_Ustav")), "value"));
        L0["c_dpt_nal"] = (await $.mv((await $.v(C, "dpt_nal")), "Value"));
        L0["c_email"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
        L0["c_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
        L0["c_incorporation_state"] = (await $.mv((await $.v(C, "DB_INCORP_STATE")), "Text"));
        L0["c_incorporation_cntr"] = (await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue"));
        L0["c_tph_extension"] = (await $.mv((await $.v(C, "Db_tph_extension")), "Text"));
        L0["c_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
        L0["c_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
        L0["c_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
        L0["c_bik"] = (await $.mv((await $.v(C, "EditBic")), "text"));
        L0["c_state_reyester_no"] = (await $.mv((await $.v(C, "Edit_reg_no")), "Text"));
        L0["c_reyester_dat"] = (await $.mv((await $.v(C, "DBDateTimeEditEh_gerdat")), "Value"));
        L0["d_tph_contact_type"] = "";
        L0["d_tph_country"] = "";
        L0["d_tph_country_code"] = "";
        L0["d_tph_city"] = "";
        L0["d_tph_state"] = "";
        L0["d_tph_zip"] = "";
        L0["d_tph_country_prefix"] = "";
        L0["d_tph_adress"] = "";
        L0["d_tph_communication_type"] = "";
        L0["d_tph_number"] = "";
        L0["d_tph_extension"] = "";
        L0["d_contact_type"] = "";
        L0["d_e_mail"] = "";
        L0["d_url"] = "";
        L0["c_faktor_muq"] = (await $.mv((await $.v(C, "faktor_muq")), "Text"));
        L0["c_faktor_opendat"] = (await $.mv((await $.v(C, "faktor_dat")), "Value"));
        L0["c_faktor_accno"] = (await $.mv((await $.v(C, "faktor_hesab")), "Text"));
        L0["c_faktor_bank"] = (await $.mv((await $.v(C, "faktor_bank")), "Text"));
        L0["c_faktor_bankkod"] = (await $.mv((await $.v(C, "faktor_bankkod")), "Text"));
        L0["c_faktor_muxaccno"] = (await $.mv((await $.v(C, "faktor_muxhesab")), "Text"));
        L0["c_faktor_swift"] = (await $.mv((await $.v(C, "faktor_swift")), "Text"));
      }
      else if ($.eq($t90, 1) || $.eq($t90, 2) || $.eq($t90, 3) || $.eq($t90, 4)) {
        if ($.truthy($.ne((await $.mv((await $.v(C, "edit_MONTHLYPROFIT")), "Text")), ""))) {
          L0["d_monthlyprofit"] = (await $.mv((await $.v(C, "edit_MONTHLYPROFIT")), "Text"));
        } else {
          L0["d_monthlyprofit"] = 0;
        }
        if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox_risk")), "KeyValue")), (-(1))))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
          L0["d_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_risk")), "FieldByName", ["ID"])), "AsInteger"));
        } else {
          L0["d_risk_categ"] = 0;
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
        L0["d_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_risk")), "FieldByName", ["ID"])), "AsInteger"));
        L0["c_risk_categ"] = "";
        L0["d_work_otrasli"] = (await $.mv((await $.v(C, "Db_WORK_OTRASLI")), "KeyValue"));
        L0["d_work_vid_sob"] = (await $.mv((await $.v(C, "Db_WORK_VID_SOB")), "KeyValue"));
        L0["d_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
        L0["d_tph_country"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
        L0["d_tph_country_code"] = (await $.mv((await $.v(C, "DBEdit_CountryCode")), "Text"));
        L0["d_tph_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
        L0["d_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
        L0["d_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
        L0["d_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
        L0["d_tph_adress"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
        L0["d_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
        L0["d_tph_number"] = (await $.mv((await $.v(C, "db_tph_number")), "Text"));
        L0["d_tph_extension"] = (await $.mv((await $.v(C, "db_tph_extension")), "Text"));
        L0["d_contact_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
        L0["d_e_mail"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
        L0["d_url"] = (await $.mv((await $.v(C, "edit_url")), "Text"));
        L0["c_bik"] = "";
        L0["c_state_reyester_no"] = "";
        L0["c_reyester_dat"] = "";
        L0["c_incorporation_number"] = "";
        L0["c_tph_contact_type"] = "";
        L0["c_tph_communication_type"] = "";
        L0["c_tph_number"] = "";
        L0["c_address_type"] = "";
        L0["c_address"] = "";
        L0["c_city"] = "";
        L0["c_country_code"] = "";
        L0["c_email"] = "";
        L0["c_url"] = "";
        L0["c_incorporation_state"] = "";
        L0["c_incorporation_cntr"] = "";
        L0["c_tph_extension"] = "";
        L0["c_tph_zip"] = "";
        L0["c_tph_country_prefix"] = "";
        L0["c_tph_state"] = "";
        L0["c_email"] = "";
        L0["c_compani"] = (-(1));
        L0["c_sfereday_kod"] = (-(1));
      }
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookup_cust_compani")), "KeyValue")), (-(1))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_compani")), "Locate", ["name", (await $.mv((await $.v(C, "DBLookup_cust_compani")), "Text")), []])));
      L0["c_compani"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_compani")), "FieldByName", ["id"])), "AsInteger"));
    } else {
      L0["c_compani"] = (-(1));
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "KeyValue")), (-(1))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Ods_cust_compani")), "Locate", ["name", (await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "Text")), []])));
      L0["c_sfereday_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_sferadey_cod")), "FieldByName", ["id"])), "AsVariant"));
    } else {
      L0["c_sfereday_kod"] = (-(1));
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupCombobiflas")), "KeyValue")), (await $.v(C, "null"))))) {
      L0["d_iflas"] = (await $.mv((await $.v(C, "DBLookupCombobiflas")), "Text"));
    } else {
      L0["d_iflas"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComb_idxal")), "KeyValue")), (await $.v(C, "null"))))) {
      L0["d_import_export"] = (await $.mv((await $.v(C, "DBLookupComb_idxal")), "value"));
    } else {
      L0["d_import_export"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComb_finance")), "KeyValue")), (await $.v(C, "null"))))) {
      L0["d_financial_statement"] = (await $.mv((await $.v(C, "DBLookupComb_finance")), "value"));
    } else {
      L0["d_financial_statement"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComb_BankKard")), "KeyValue")), (await $.v(C, "null"))))) {
      L0["d_bank_card"] = (await $.mv((await $.v(C, "DBLookupComb_BankKard")), "value"));
    } else {
      L0["d_bank_card"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComb_borrower_occupation")), "KeyValue")), (await $.v(C, "null"))))) {
      L0["d_borrower_occupation"] = (await $.mv((await $.v(C, "DBLookupComb_borrower_occupation")), "value"));
    } else {
      L0["d_borrower_occupation"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComb_borrower_bad")), "KeyValue")), (await $.v(C, "null"))))) {
      L0["d_borrower_bad"] = (await $.mv((await $.v(C, "DBLookupComb_borrower_bad")), "text"));
    } else {
      L0["d_borrower_bad"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "ReportingDate")), "value")), (await $.v(C, "null"))))) {
      L0["d_reportingdate"] = (await $.mv((await $.v(C, "ReportingDate")), "Value"));
    } else {
      L0["d_reportingdate"] = "";
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "ReportType")), "KeyValue"))]))))) {
      L0["d_reporttype"] = (await $.mv((await $.v(C, "ReportType")), "KeyValue"));
    } else {
      L0["d_reporttype"] = "";
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Revenue")), "text")), ""))) {
      L0["d_revenue"] = (await $.mv((await $.v(C, "Revenue")), "text"));
    } else {
      L0["d_revenue"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Ebitda")), "text")), ""))) {
      L0["d_ebitda"] = (await $.mv((await $.v(C, "Ebitda")), "text"));
    } else {
      L0["d_ebitda"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "Ebit")), "text")), ""))) {
      L0["d_ebit"] = (await $.mv((await $.v(C, "Ebit")), "text"));
    } else {
      L0["d_ebit"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "InterestExpences")), "text")), ""))) {
      L0["d_interestexpences"] = (await $.mv((await $.v(C, "InterestExpences")), "text"));
    } else {
      L0["d_interestexpences"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "InterestExpenceLiabilities")), "text")), ""))) {
      L0["d_interestexpenceliabilities"] = (await $.mv((await $.v(C, "InterestExpenceLiabilities")), "text"));
    } else {
      L0["d_interestexpenceliabilities"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "NetProfit")), "text")), ""))) {
      L0["d_netprofit"] = (await $.mv((await $.v(C, "NetProfit")), "text"));
    } else {
      L0["d_netprofit"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalAssets")), "text")), ""))) {
      L0["d_totalassets"] = (await $.mv((await $.v(C, "TotalAssets")), "text"));
    } else {
      L0["d_totalassets"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalAssetsForeignCurrency")), "text")), ""))) {
      L0["d_totalassetsforeigncurrency"] = (await $.mv((await $.v(C, "TotalAssetsForeignCurrency")), "text"));
    } else {
      L0["d_totalassetsforeigncurrency"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalLiabilitiesForeignCurrency")), "text")), ""))) {
      L0["d_totalliabilitiesforeigncurrency"] = (await $.mv((await $.v(C, "TotalLiabilitiesForeignCurrency")), "text"));
    } else {
      L0["d_totalliabilitiesforeigncurrency"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalLiabilities")), "text")), ""))) {
      L0["d_totalliabilities"] = (await $.mv((await $.v(C, "TotalLiabilities")), "text"));
    } else {
      L0["d_totalliabilities"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "ForeignInterestExpenceLiabilities")), "text")), ""))) {
      L0["d_foreigninterestexpenceliabilities"] = (await $.mv((await $.v(C, "ForeignInterestExpenceLiabilities")), "text"));
    } else {
      L0["d_foreigninterestexpenceliabilities"] = 0;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "TotalCapital")), "text")), ""))) {
      L0["d_totalcapital"] = (await $.mv((await $.v(C, "TotalCapital")), "text"));
    } else {
      L0["d_totalcapital"] = 0;
    }
    if ($.truthy($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupInsolvencyStatus")), "KeyValue"))]))))) {
      L0["d_insolvencystatus"] = (await $.call(C, "VarToStr", [(await $.mv((await $.v(C, "DBLookupInsolvencyStatus")), "KeyValue"))]));
    } else {
      L0["d_insolvencystatus"] = "";
    }
    if ($.truthy($.eq(L0["c_cust_type"], 0))) {
      L0["black"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallStringFunction", ["get_world_yoxlama", [(await $.call(C, "trim", [L0["c_name"]])), (await $.v(C, "null"))]]));
    }
    if ($.truthy($.ne(L0["c_cust_type"], 0))) {
      L0["black"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallStringFunction", ["get_world_yoxlama", [($.add($.add($.add($.add((await $.call(C, "trim", [L0["d_lastname"]])), " "), (await $.call(C, "trim", [L0["d_name"]]))), " "), (await $.call(C, "trim", [L0["d_soname"]])))), L0["d_birthday"]]]));
    }
    if ($.truthy($.eq(L0["black"], ""))) {
      L0["ins"] = 1;
    }
    if ($.truthy($.ne(L0["black"], ""))) {
      if ($.truthy((await $.call(C, "ShowRedMessage", [$.add(L0["black"], "  DIQQET Bu Müştəri qara siyahıdadı Risk şöbəsinə müraciət  edin !")])))) {
        L0["ins"] = 1;
      } else {
        L0["ins"] = (-(1));
      }
    }
    if ($.truthy($.eq(L0["ins"], 1))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["edit_customers_prosess", [L0["c_id"], L0["c_name"], L0["c_short_name"], L0["c_inn"], L0["c_group_klie"], L0["c_nerezident"], L0["c_vid_sob"], L0["c_prinad_kod"], L0["c_cust_type"], L0["c_cust_jur"], L0["c_cust_phys"], L0["c_cust_fs"], L0["c_bik"], L0["c_risk_categ"], L0["d_risk_categ"], L0["c_riskdescid"], L0["c_samelydate"], L0["c_category"], L0["d_name"], L0["d_soname"], L0["d_lastname"], L0["d_passer"], L0["d_birthday"], L0["d_birthplace"], L0["d_fam_status"], L0["d_address"], L0["d_fakt_adress"], L0["d_doc_country"], L0["d_citizenship2"], L0["d_citizenship3"], L0["d_fakt_country"], L0["d_fakt_city"], L0["d_fakt_zip"], L0["d_work_place"], L0["d_work_post"], L0["d_work_adress"], L0["d_work_phone"], L0["d_phone_h"], L0["d_e_mail"], L0["d_sex"], L0["d_paspnum"], L0["d_adrs_state"], L0["d_city"], L0["d_doc_type"], L0["d_birth_state"], L0["d_phone_m"], L0["d_paspdate"], L0["d_paspplace"], L0["d_passpin"], L0["d_citizenship"], L0["d_passexpire"], L0["d_note"], L0["c_org_sob"], L0["c_sfera_dey"], L0["c_otrasl"], L0["c_nalog_kod"], L0["c_incorporation_number"], L0["c_tph_contact_type"], L0["c_tph_communication_type"], L0["c_tph_number"], L0["c_address_type"], L0["c_address"], L0["c_city"], L0["c_country_code"], L0["c_dat_ustav"], L0["c_dpt_nal"], L0["c_email"], L0["c_url"], L0["c_incorporation_state"], L0["c_incorporation_cntr"], L0["c_tph_extension"], L0["c_tph_zip"], L0["c_tph_country_prefix"], L0["c_tph_state"], L0["d_tph_contact_type"], L0["d_tph_country"], L0["d_tph_country_code"], L0["d_tph_city"], L0["d_tph_state"], L0["d_tph_zip"], L0["d_tph_country_prefix"], L0["d_tph_adress"], L0["d_tph_communication_type"], L0["d_tph_number"], L0["d_tph_extension"], L0["d_contact_type"], L0["d_url"], L0["d_work_otrasli"], L0["d_work_vid_sob"], L0["d_monthlyprofit"], L0["c_id_quality"], L0["c_name_quality"], L0["d_quality_id"], L0["c_compani"], L0["c_sfereday_kod"], L0["c_state_reyester_no"], L0["c_reyester_dat"], L0["d_fakt_adress_owner"], L0["d_activity"], L0["d_profession"], L0["d_source_of_income"], L0["d_rescount"], L0["d_rescount1"], L0["d_rescount2"], L0["d_work_experience"], L0["d_last_work_experience"], L0["d_family_number"], L0["d_credit_history"], L0["d_cust_involvement"], L0["c_faktor_muq"], L0["c_faktor_opendat"], L0["c_faktor_accno"], L0["c_faktor_bank"], L0["c_faktor_bankkod"], L0["c_faktor_muxaccno"], L0["c_faktor_swift"], (await $.v(C, "null")), (await $.v(C, "null")), (await $.v(C, "null")), L0["d_iflas"], L0["d_import_export"], L0["d_financial_statement"], L0["d_bank_card"], L0["d_borrower_occupation"], L0["d_borrower_bad"], L0["d_reportingdate"], L0["d_reporttype"], L0["d_revenue"], L0["d_ebitda"], L0["d_ebit"], L0["d_interestexpences"], L0["d_netprofit"], L0["d_totalassets"], L0["d_totalassetsforeigncurrency"], L0["d_totalliabilitiesforeigncurrency"], L0["d_interestexpenceliabilities"], L0["d_totalliabilities"], L0["d_foreigninterestexpenceliabilities"], L0["d_totalcapital"], L0["d_insolvencystatus"]]])));
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Refresh", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Locate", ["id", L0["c_id"], []])));
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS2")), "Close", []);
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS2")), "Open", []);
      await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
      await $.set(C, "cust_elaqe_Transaction", 0);
      await $.set(C, "ins_elaqe", 0);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "CustSearch1Click", async function CustSearch1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_citizen_countries": '', "v_sex": '', "v_fam_status": '', "v_vid_sob": '', "v_group_klie": '', "v_prinad": '', "v_doc_types": '', "v_paspdate": '', "v_passexpire": '', "v_birthdate": '', "v_nerezident": '', "v_cust_type": '', "c_org_sob": '', "c_sfera_dey": '', "c_otrasl": '', "c_nalog_kod": '', "d": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active", true);
  if ($.truthy(((await $.or_(($.ne((await $.mv((await $.v(C, "CBoxGender")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "CBoxGender")), "ItemIndex")), (-(1))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGender")), "Text")), []])));
    L0["v_sex"] = $.add(" and nvl(sex,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsGender")), "FieldByName", ["ID"])), "asstring")));
  } else {
    L0["v_sex"] = "";
  }
  if ($.truthy(((await $.or_(($.ne((await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "CBoxFamStatus")), "ItemIndex")), (-(1))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), []])));
    L0["v_fam_status"] = $.add(" and nvl(fam_status,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OdsFamstatus")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_fam_status"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "CBoxGroup")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "CBoxGroup")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGroup")), "Text")), []])));
    L0["v_group_klie"] = $.add(" and nvl(group_klie,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ClientGroupData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_group_klie"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "CBox")), "KeyValue")), 0)), async () => ($.eq((await $.mv((await $.v(C, "CBox")), "KeyValue")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "CBox")), "Text")), []])));
    L0["v_vid_sob"] = $.add(" and nvl(vid_sob,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_vid_sob"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "OrganizationTypeCB")), "ItemIndex")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "OrganizationTypeCB")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "OrganizationTypeCB")), "Text")), []])));
    L0["c_org_sob"] = $.add(" and+ nvl(org_sob ,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "OrganizationTypeData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["c_org_sob"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "ActionAreaCB")), "ItemIndex")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "ActionAreaCB")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "ActionAreaCB")), "Text")), []])));
    L0["c_sfera_dey"] = $.add(" and+ nvl(sfera_dey ,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ActionAreaData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["c_sfera_dey"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "BranchCB")), "ItemIndex")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "BranchCB")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "Locate", ["name", (await $.mv((await $.v(C, "BranchCB")), "Text")), []])));
    L0["c_otrasl"] = $.add(" and+ nvl(otrasl,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "BranchData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["c_otrasl"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "TaxAreaCb")), "ItemIndex")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "TaxAreaCb")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "locate", ["name", (await $.mv((await $.v(C, "TaxAreaCb")), "Text")), []])));
    L0["c_nalog_kod"] = $.add(" and+nvl(nalog_kod,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "TaxAreaData")), "FieldByName", ["ID"])), "asstring")));
  } else {
    L0["c_nalog_kod"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox3")), "Text")), []])));
    L0["v_prinad"] = $.add(" and nvl(prinad_kod,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "RelationData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_prinad"] = "";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
  } else {
    L0["d"] = (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"));
  }
  if ($.truthy((await $.or_((await $.or_(($.eq(L0["d"], (await $.v(C, "null")))), async () => ($.eq((await $.call(C, "VarToStr", [L0["d"]])), "")))), async () => ($.eq(L0["d"], (-(1)))))))) {
    L0["v_doc_types"] = "";
  } else {
    L0["v_doc_types"] = $.add(" and doc_type=", (await $.call(C, "VarToStr", [L0["d"]])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), true))) {
    L0["v_nerezident"] = " and  nerezident=1";
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), true))) {
      L0["v_nerezident"] = " and  nerezident=0";
    } else {
      L0["v_nerezident"] = "";
    }
  }
  { const $t91 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t91, 0)) {
      L0["v_cust_type"] = "and cust_type=0";
    }
    else if ($.eq($t91, 1)) {
      L0["v_cust_type"] = "and cust_phys =1";
      await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 0);
    }
    else if ($.eq($t91, 2)) {
      L0["v_cust_type"] = "and cust_fs =1";
      await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 1);
    }
    else if ($.eq($t91, 3)) {
      L0["v_cust_type"] = "and cust_type=3";
    }
    else if ($.eq($t91, 4)) {
      L0["v_cust_type"] = "and cust_type =4";
    }
    else if ($.eq($t91, 5)) {
      L0["v_cust_type"] = "and cust_type =5";
    }
  }
  {
    const $t92 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS"));
    { const $t93 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], ""); if ($t93 !== undefined) { await $.wset([$t92], "SQL", $t93, C); } }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditID", C, false)), "Text")), ""))) {
      { const $t94 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and ID = "), (await $.mv((await $.wv([$t92], "EditID", C, false)), "Text")))); if ($t94 !== undefined) { await $.wset([$t92], "SQL", $t94, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditFirstName", C, false)), "Text")), ""))) {
      { const $t95 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(FIRSTNAME) like upper('%"), (await $.mv((await $.wv([$t92], "EditFirstName", C, false)), "Text"))), "%')")); if ($t95 !== undefined) { await $.wset([$t92], "SQL", $t95, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditPatronymic", C, false)), "Text")), ""))) {
      { const $t96 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(PATRONYMIC) like upper('%"), (await $.mv((await $.wv([$t92], "EditPatronymic", C, false)), "Text"))), "%')")); if ($t96 !== undefined) { await $.wset([$t92], "SQL", $t96, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditLastName", C, false)), "Text")), ""))) {
      { const $t97 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(LASTNAME) like upper('%"), (await $.mv((await $.wv([$t92], "EditLastName", C, false)), "Text"))), "%')")); if ($t97 !== undefined) { await $.wset([$t92], "SQL", $t97, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditFullName", C, false)), "Text")), ""))) {
      { const $t98 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(CUST_NAME) like upper('%"), (await $.mv((await $.wv([$t92], "EditFullName", C, false)), "Text"))), "%')")); if ($t98 !== undefined) { await $.wset([$t92], "SQL", $t98, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditShort_name", C, false)), "Text")), ""))) {
      { const $t99 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(SHORT_NAME) like upper('%"), (await $.mv((await $.wv([$t92], "EditShort_name", C, false)), "Text"))), "%')")); if ($t99 !== undefined) { await $.wset([$t92], "SQL", $t99, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditPINCode1", C, false)), "Text")), ""))) {
      { const $t100 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and PASSPIN = '"), (await $.mv((await $.wv([$t92], "EditPINCode1", C, false)), "Text"))), "'")); if ($t100 !== undefined) { await $.wset([$t92], "SQL", $t100, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditITN", C, false)), "Text")), ""))) {
      { const $t101 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and INN = '"), (await $.mv((await $.wv([$t92], "EditITN", C, false)), "Text"))), "'")); if ($t101 !== undefined) { await $.wset([$t92], "SQL", $t101, C); } }
    }
    { const $t102 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), (await $.wv([$t92], "v_citizen_countries", { get: async () => L0["v_citizen_countries"], set: async (v) => { L0["v_citizen_countries"] = v; }, local: true }, false)))); if ($t102 !== undefined) { await $.wset([$t92], "SQL", $t102, C); } }
    { const $t103 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), (await $.wv([$t92], "v_sex", { get: async () => L0["v_sex"], set: async (v) => { L0["v_sex"] = v; }, local: true }, false)))); if ($t103 !== undefined) { await $.wset([$t92], "SQL", $t103, C); } }
    { const $t104 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), (await $.wv([$t92], "v_fam_status", { get: async () => L0["v_fam_status"], set: async (v) => { L0["v_fam_status"] = v; }, local: true }, false)))); if ($t104 !== undefined) { await $.wset([$t92], "SQL", $t104, C); } }
    { const $t105 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), (await $.wv([$t92], "v_doc_types", { get: async () => L0["v_doc_types"], set: async (v) => { L0["v_doc_types"] = v; }, local: true }, false)))); if ($t105 !== undefined) { await $.wset([$t92], "SQL", $t105, C); } }
    if ($.truthy($.not((await $.mv((await $.wv([$t92], "EditDocSerie1", C, false)), "Enabled"))))) {
      await $.mset((await $.wv([$t92], "EditDocSerie", C, false)), "Text", "");
    } else {
      if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditDocSerie", C, false)), "Text")), ""))) {
        { const $t106 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(PASSPORT) like upper('%"), (await $.mv((await $.wv([$t92], "EditDocSerie", C, false)), "Text"))), "%')")); if ($t106 !== undefined) { await $.wset([$t92], "SQL", $t106, C); } }
      }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditDocNumber", C, false)), "Text")), ""))) {
      { const $t107 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(PASSP_NUMBER) like upper('%"), (await $.mv((await $.wv([$t92], "EditDocNumber", C, false)), "Text"))), "%')")); if ($t107 !== undefined) { await $.wset([$t92], "SQL", $t107, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "CBoxDocPlace2", C, false)), "Text")), ""))) {
      { const $t108 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(PASPPLACE) like upper('%"), (await $.mv((await $.wv([$t92], "CBoxDocPlace2", C, false)), "Text"))), "%')")); if ($t108 !== undefined) { await $.wset([$t92], "SQL", $t108, C); } }
    }
    { const $t109 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), (await $.wv([$t92], "v_PASPDATE", { get: async () => L0["v_paspdate"], set: async (v) => { L0["v_paspdate"] = v; }, local: true }, false)))); if ($t109 !== undefined) { await $.wset([$t92], "SQL", $t109, C); } }
    { const $t110 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), (await $.wv([$t92], "v_passexpire", { get: async () => L0["v_passexpire"], set: async (v) => { L0["v_passexpire"] = v; }, local: true }, false)))); if ($t110 !== undefined) { await $.wset([$t92], "SQL", $t110, C); } }
    { const $t111 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), (await $.wv([$t92], "v_birthdate", { get: async () => L0["v_birthdate"], set: async (v) => { L0["v_birthdate"] = v; }, local: true }, false)))); if ($t111 !== undefined) { await $.wset([$t92], "SQL", $t111, C); } }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "CBoxBirthState", C, false)), "Text")), ""))) {
      { const $t112 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(BIRTHPLACE) like upper('%"), (await $.mv((await $.wv([$t92], "CBoxBirthState", C, false)), "Text"))), "%')")); if ($t112 !== undefined) { await $.wset([$t92], "SQL", $t112, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "CBoxBirthCity", C, false)), "KeyValue")), ""))) {
      { const $t113 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(BIRTH_STATE) like upper('%"), (await $.mv((await $.wv([$t92], "CBoxBirthCity", C, false)), "Text"))), "%')")); if ($t113 !== undefined) { await $.wset([$t92], "SQL", $t113, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "CBoxAddressState", C, false)), "Text")), ""))) {
      { const $t114 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(ADRS_STATE) like upper('%"), (await $.mv((await $.wv([$t92], "CBoxAddressState", C, false)), "Text"))), "%')")); if ($t114 !== undefined) { await $.wset([$t92], "SQL", $t114, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "CBoxAddressCity", C, false)), "KeyValue")), ""))) {
      { const $t115 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(ADRS_CITY) like upper('%"), (await $.mv((await $.wv([$t92], "CBoxAddressCity", C, false)), "Text"))), "%')")); if ($t115 !== undefined) { await $.wset([$t92], "SQL", $t115, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditAddress", C, false)), "Text")), ""))) {
      { const $t116 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(ADRESS) like upper('%"), (await $.mv((await $.wv([$t92], "EditAddress", C, false)), "Text"))), "%')")); if ($t116 !== undefined) { await $.wset([$t92], "SQL", $t116, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditAddressFactical", C, false)), "Text")), ""))) {
      { const $t117 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(FAKT_ADRESS) like upper('%"), (await $.mv((await $.wv([$t92], "EditAddressFactical", C, false)), "Text"))), "%')")); if ($t117 !== undefined) { await $.wset([$t92], "SQL", $t117, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t92], "EditPhoneCity", C, false)), "Text")), ""))) {
      { const $t118 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), " and upper(PHONE) like upper('%"), (await $.mv((await $.wv([$t92], "EditPhoneCity", C, false)), "Text"))), "%')")); if ($t118 !== undefined) { await $.wset([$t92], "SQL", $t118, C); } }
    }
    { const $t119 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), (await $.wv([$t92], "v_nerezident", { get: async () => L0["v_nerezident"], set: async (v) => { L0["v_nerezident"] = v; }, local: true }, false)))); if ($t119 !== undefined) { await $.wset([$t92], "SQL", $t119, C); } }
    { const $t120 = await $.iset((await $.wv([$t92], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t92], "SQL", C, false)), [8])), (await $.wv([$t92], "v_CUST_TYPE", { get: async () => L0["v_cust_type"], set: async (v) => { L0["v_cust_type"] = v; }, local: true }, false)))); if ($t120 !== undefined) { await $.wset([$t92], "SQL", $t120, C); } }
    await $.stmt($.wcall([$t92], "Close", [], C));
    await $.stmt($.wcall([$t92], "Open", [], C));
    if ($.truthy((await $.wv([$t92], "IsEmpty", C, false)))) {
      await $.stmt((await $.wcall([$t92], "MessageDlg", ["Heç bir məlumat tapılmadı", (await $.wv([$t92], "mtInformation", C, false)), [(await $.wv([$t92], "mbOK", C, false))], 0], C)));
      return L0.result;
    }
    await $.wset([$t92], "ds_recort", (await $.mv((await $.mv((await $.mv((await $.wv([$t92], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "SQL")), "Text")), C);
    await $.mcall((await $.mv((await $.wv([$t92], "DataModPCustService", C, false)), "ODS_Pozition")), "Open", []);
    if ($.truthy(($.eq((await $.wv([$t92], "RecordCount", C, false)), 1)))) {
      await $.stmt((await $.wcall([$t92], "MainGridDblClick", [(await $.wv([$t92], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
    await $.mset((await $.wv([$t92], "XFCust", C, false)), "Visible", (await $.wv([$t92], "false", C, false)));
    await $.mset((await $.wv([$t92], "XFBitBtnHMS", C, false)), "Visible", (await $.wv([$t92], "false", C, false)));
  }
  { const $t121 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t121, 0)) {
      L0["v_cust_type"] = "and cust_type=0";
    }
    else if ($.eq($t121, 1)) {
      L0["v_cust_type"] = "and cust_phys =1";
      await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 0);
    }
    else if ($.eq($t121, 2)) {
      L0["v_cust_type"] = "and cust_fs =1";
      await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", 1);
    }
    else if ($.eq($t121, 3)) {
      L0["v_cust_type"] = "and cust_type=3";
    }
    else if ($.eq($t121, 4)) {
      L0["v_cust_type"] = "and cust_type =4";
    }
    else if ($.eq($t121, 5)) {
      L0["v_cust_type"] = "and cust_type =5";
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "DBGrid2TitleClick", async function DBGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": ''};
  await $.fixArgs(L0, ["column"]);
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  await $.stmt((await $.call(C, "ShowMessage", [L0["titlename"]])));
  {
    const $t122 = (await $.wobj(C, "DataModPCustService"));
    const $t123 = (await $.wv([$t122], "ODS_CUSTOMERS_PHYS_FS", C, false));
    await $.stmt($.wcall([$t122, $t123], "Close", [], C));
    await $.stmt((await $.wcall([$t122, $t123], "SetVariable", ["TITLE", (await $.wv([$t122, $t123], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t122, $t123], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TPCustServiceForm", "DblClickEvent", async function DblClickEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDblClick", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "DBLookupCombob_gropCloseUp", async function DBLookupCombob_gropCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupCombob_grop")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "Edit_grop_name")), "Text", (await $.mv((await $.v(C, "DBLookupCombob_grop")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TPCustServiceForm", "DBLookupC_sfereday_kodCloseUp", async function DBLookupC_sfereday_kodCloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "KeyVAlue")), (await $.v(C, "null"))))) {
    await $.mset((await $.v(C, "Edit_SFERKOD")), "Text", (await $.mv((await $.v(C, "DBLookupC_sfereday_kod")), "KeyVAlue")));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TPCustServiceForm", "Db_WORK_VID_SOBCloseUp", async function Db_WORK_VID_SOBCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t124 = (await $.wobj(C, "DataModPCustService"));
    await $.mcall((await $.wv([$t124], "Ods_WORK_OTRASLI", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t124], "Ods_WORK_OTRASLI", C, false)), "SetVariable", ["v_vid_sop_id", (await $.mv((await $.mcall((await $.wv([$t124], "Ods_WORK_VID_SOB", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t124], "Ods_WORK_OTRASLI", C, false)), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ddd1Click", async function ddd1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t125 = (await $.wobj(C, "DataModPCustService"));
    const $t126 = (await $.wv([$t125], "ODS_CUSTOMERS_PHYS_FS", C, false));
    if ($.truthy((await $.and_(((await $.wv([$t125, $t126], "Active", C, false))), async () => ($.ne((await $.wv([$t125, $t126], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t125, $t126], "Cust_Account", (await $.mcall((await $.wv([$t125, $t126], "TCust_Account", C, false)), "Create", [Self])), C);
      await $.mcall((await $.wv([$t125, $t126], "Ods_HesabCap", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t125, $t126], "Ods_HesabCap", C, false)), "SetVariable", ["id", (await $.mv((await $.wcall([$t125, $t126], "FieldByName", ["id"], C)), "AsInteger"))])));
      await $.mcall((await $.wv([$t125, $t126], "Ods_HesabCap", C, false)), "Open", []);
      await $.mcall((await $.wv([$t125, $t126], "Cust_Account", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t125, $t126], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "DeactivateEvent", async function DeactivateEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDeactivate", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "DestroyEvent", async function DestroyEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnDestroy", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "dmtapr1Click", async function dmtapr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "FormPaymentOrder", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "LoadPlugin2", async function LoadPlugin2(Self, p0, p1, p2) {
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
  U.method("TPCustServiceForm", "LoadPlugin3", async function LoadPlugin3(Self, p0, p1, p2, p3) {
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
  U.method("TPCustServiceForm", "LoadPlugin1", async function LoadPlugin1(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], ""])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TPCustServiceForm", "PlastikKartlarClick", async function PlastikKartlarClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_phys"])), "asinteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_fs"])), "AsInteger")), 1)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Fiziki şəxs və sahibkara  Plastik kart  vermək olmaz !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominalın plastik kartlarına  əməliyyat vermek olmaz   !"])));
    return L0.result;
  }
  await $.set(C, "tr", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  if ($.truthy($.ne((await $.v(C, "tr")), ""))) {
    await $.stmt((await $.call(C, "LoadPlugin2", ["filereport.bpl", "card", (await $.v(C, "tr"))])));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["    Heç bir məlumat seçilməyib  ! "])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "potencialm1Click", async function potencialm1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form_custPotencial", (await $.mcall((await $.v(C, "tForm_custPotencial")), "create", [Self])));
  await $.mcall((await $.v(C, "Form_custPotencial")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "QaimeClick", async function QaimeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t127 = (await $.wobj(C, "DataModPCustService"));
    const $t128 = (await $.wv([$t127], "ODS_CUSTOMERS_PHYS_FS", C, false));
    if ($.truthy((await $.and_(((await $.wv([$t127, $t128], "Active", C, false))), async () => ($.ne((await $.wv([$t127, $t128], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t127, $t128], "FormQaime", (await $.mcall((await $.wv([$t127, $t128], "TFormQaime", C, false)), "create", [Self])), C);
      await $.mcall((await $.wv([$t127, $t128], "FormQaime", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t127, $t128], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Qeydlr1Click", async function Qeydlr1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active")), false))) {
    await $.stmt((await $.call(C, "ShowMessage", ["       Heç bir müştəri seçilməyib     !"])));
    return L0.result;
  } else {
    await $.set(C, "note_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  }
  await $.stmt((await $.call(C, "LoadPlugin3", ["Sb_General.bpl", "note", (await $.v(C, "note_id")), ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Kassaorderi1Click", async function Kassaorderi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormInterval")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "KeyPressEvent", async function KeyPressEvent(Self, p0, p1) {
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
  U.method("TPCustServiceForm", "PaintEvent", async function PaintEvent(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "FEvents")), null))) {
    await $.mcall((await $.v(C, "FEvents")), "OnPaint", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "PEPYoxlama1Click", async function PEPYoxlama1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t129 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_Customers_Phys_FS"));
    if ($.truthy((await $.or_($.not((await $.wv([$t129], "Active", C, false))), async () => (await $.wv([$t129], "IsEmpty", C, false)))))) {
      await $.stmt((await $.wcall([$t129], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
      return L0.result;
    }
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t129], "DataModPCustService", C, false)), "ODS_Customers_Phys_FSCUST_TYPE")), "AsInteger")), 0))) {
      await $.mset((await $.mv((await $.wv([$t129], "Pep_change", C, false)), "Edit1")), "Text", (await $.mv((await $.mv((await $.wv([$t129], "DataModPCustService", C, false)), "ODS_Customers_Phys_FSfirstname")), "AsString")));
      await $.mset((await $.mv((await $.wv([$t129], "Pep_change", C, false)), "Edit2")), "Text", (await $.mv((await $.mv((await $.wv([$t129], "DataModPCustService", C, false)), "ODS_Customers_Phys_FSlastname")), "AsString")));
    } else {
      await $.mset((await $.mv((await $.wv([$t129], "Pep_change", C, false)), "Edit1")), "Text", (await $.mv((await $.mv((await $.wv([$t129], "DataModPCustService", C, false)), "ODS_Customers_Phys_FSCUST_NAME")), "AsString")));
    }
    await $.mcall((await $.wv([$t129], "Pep_change", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "RBtnNoResidentClick", async function RBtnNoResidentClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cntr_nam", false);
  await $.mset((await $.v(C, "EditDocSerie")), "Text", "");
  await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "EditDocNumber1")), "MaxLength", 100);
  await $.mset((await $.v(C, "EditDocNumber")), "MaxLength", 100);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "RBtnResidentClick", async function RBtnResidentClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cntr_nam", true);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), true))) {
    await $.mset((await $.v(C, "EditDocSerie")), "Text", "AZE");
    await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", 1);
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", 1);
    await $.mset((await $.v(C, "EditPINCode")), "MaxLength", 7);
    await $.mset((await $.v(C, "EditPINCode1")), "MaxLength", 7);
    await $.mset((await $.v(C, "EditDocNumber1")), "MaxLength", 8);
    await $.mset((await $.v(C, "EditDocNumber")), "MaxLength", 8);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "RevenueKeyPress", async function RevenueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "KreditlerClick", async function KreditlerClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CreditFrm", (await $.mcall((await $.v(C, "TCreditFrm")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "MainGrid1TitleBtnClick", async function MainGrid1TitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t130 = L0["sender"];
    const $t131 = (await $.wcall([$t130], "TOracleDataSet", [(await $.mv((await $.wv([$t130], "DataSource", C, false)), "DataSet"))], C));
    await $.mset((await $.wv([$t130, $t131], "Screen", C, false)), "Cursor", (await $.wv([$t130, $t131], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t130, $t131], "SetVariable", ["SIRA", (await $.wv([$t130, $t131], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t130, $t131], "Refresh", [], C));
    await $.mset((await $.wv([$t130, $t131], "Screen", C, false)), "Cursor", (await $.wv([$t130, $t131], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TPCustServiceForm", "MainGrid2DblClick", async function MainGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "sm_dat": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_custinfoPRINAD_KOD")), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFButton7")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFButton7")), "Visible", false);
  }
  {
    const $t132 = (await $.mv((await $.v(C, "DataModPCustService")), "DScustimage"));
    await $.stmt($.wcall([$t132], "close", [], C));
    await $.stmt((await $.wcall([$t132], "SetVariable", ["cust_id", (await $.mv((await $.mv((await $.wv([$t132], "DataModPCustService", C, false)), "ODS_custinfoIDCUSTINFO")), "AsInteger"))], C)));
    await $.stmt($.wcall([$t132], "Open", [], C));
  }
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_custinfo")), "Active")))) {
    {
      const $t133 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_custinfo"));
      if ($.truthy($.gt((await $.wv([$t133], "RecordCount", C, false)), 0))) {
        await $.mset((await $.wv([$t133], "EditID", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["ID"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditFirstName", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["FirstName"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditPatronymic", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["Patronymic"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["LastName"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditFullName", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["Cust_Name"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditPINCode", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["passPIN"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditITN", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["inn"], C)), "AsString")));
        { const $t134 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["Nerezident"])), "AsInteger"));
          if ($.eq($t134, 0)) {
            await $.mset((await $.wv([$t133], "RBtnNoResident", C, false)), "Checked", (await $.wv([$t133], "True", C, false)));
          }
          else if ($.eq($t134, 1)) {
            await $.mset((await $.wv([$t133], "RBtnResident", C, false)), "Checked", (await $.wv([$t133], "True", C, false)));
          }
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["CUST_type"])), "isNull"))))) {
          await $.mset((await $.wv([$t133], "XFRadioGroupCust_type", C, false)), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["CUST_type"])), "AsInteger")));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["citizenship"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "CBoxCitizenship", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["citizenship"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "CBoxCitizenship", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["sex"])), "isNull"))))) {
          await $.mset((await $.wv([$t133], "CBoxGender", C, false)), "ItemIndex", (await $.wcall([$t133], "combobox_open", [(await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), (await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "OdsGender")), (await $.wv([$t133], "CBoxGender", C, false)), "sex", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t133], "CBoxGender", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["fam_status"])), "isNull"))))) {
          await $.mset((await $.wv([$t133], "CBoxFamStatus", C, false)), "ItemIndex", (await $.wcall([$t133], "combobox_open", [(await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), (await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "OdsFamstatus")), (await $.wv([$t133], "CBoxFamStatus", C, false)), "fam_status", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t133], "CBoxFamStatus", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["group_klie"])), "isNull"))))) {
          await $.mset((await $.wv([$t133], "CBoxGroup", C, false)), "ItemIndex", (await $.wcall([$t133], "combobox_open", [(await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), (await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ClientGroupData")), (await $.wv([$t133], "CBoxGroup", C, false)), "group_klie", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t133], "CBoxGroup", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["vid_sob"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "CBox", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["vid_sob"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "CBox", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["prinad_kod"])), "isNull"))))) {
          await $.mset((await $.wv([$t133], "ComboBox3", C, false)), "ItemIndex", (await $.wcall([$t133], "combobox_open", [(await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), (await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "RelationData")), (await $.wv([$t133], "ComboBox3", C, false)), "prinad_kod", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t133], "ComboBox3", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["DOC_TYPE"])), "isNull"))))) {
          await $.mset((await $.wv([$t133], "CBoxDocType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["DOC_TYPE"])), "AsInteger")));
          await $.mset((await $.wv([$t133], "CBoxDocType1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["DOC_TYPE"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t133], "CBoxDocType", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t133], "CBoxDocType1", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["doc_country"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "issue_country", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["doc_country"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "issue_country", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["riskdescid"])), "isnull"))))) {
          await $.mset((await $.wv([$t133], "Comb_riskdescid", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["riskdescid"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t133], "Comb_riskdescid", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["citizenship2"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "DBCBox_Citizenship2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["citizenship2"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "DBCBox_Citizenship2", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["citizenship3"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "DBCBox_Citizenship3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["citizenship3"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "DBCBox_Citizenship3", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["rezd_country"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "DBLookupComboBox1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["rezd_country"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "DBLookupComboBox1", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["rezd_country1"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["rezd_country1"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "DBLookupComboBox2", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["rezd_country2"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "DBLookupComboBox3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["rezd_country2"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "DBLookupComboBox3", C, false)), "KeyValue", 0);
        }
        await $.mset((await $.wv([$t133], "DBLookupComboboxEh1", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["work_experience"])), "AsString")));
        await $.mset((await $.wv([$t133], "DBLookupComboboxEh2", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["last_work_experience"])), "AsString")));
        await $.mset((await $.wv([$t133], "DBLookupComboboxEh3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["category"])), "AsInteger")));
        await $.mset((await $.wv([$t133], "edit2", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["cust_involvement"])), "AsString")));
        await $.mset((await $.wv([$t133], "edit3", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["family_number"])), "AsString")));
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["fakt_country"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "Fakt_Adrs_State", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["fakt_country"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "Fakt_Adrs_State", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["fakt_city"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "Fakt_Adrs_City", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["fakt_city"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "Fakt_Adrs_City", C, false)), "KeyValue", (-(1)));
        }
        await $.mset((await $.wv([$t133], "ZipFakt", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["fakt_zip"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "Work_Place", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["work_place"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "Work_Post", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["work_post"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "Work_Address", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["work_adress"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "Work_Phone", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["work_phone"], C)), "AsString")));
        { const $t135 = (await $.mv((await $.wv([$t133], "XFRadioGroupCust_type", C, false)), "ItemIndex"));
          if ($.eq($t135, 0)) {
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["risk_categ"])), "isnull"))))) {
              await $.mset((await $.wv([$t133], "ComboBox_risk", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["risk_categ"])), "AsInteger")));
            } else {
              await $.mset((await $.wv([$t133], "ComboBox_risk", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["Address_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "Address_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["Address_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "Address_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["tph_contact_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "tph_contact_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["tph_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "tph_contact_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["tph_communication_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "tph_communication_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["tph_communication_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "tph_communication_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["country_code_cust"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "CountryByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["country_code_cust"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "CountryByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["city_cust"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "CityByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["city_cust"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "CityByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["incorporation_cntr"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "DBLC_INCORP_CNTR", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["incorporation_cntr"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "DBLC_INCORP_CNTR", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["tph_country_prefix"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "tph_country_prefix", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["tph_country_prefix"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "tph_country_prefix", C, false)), "KeyValue", (-(1)));
            }
            await $.mset((await $.wv([$t133], "incor_number", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["incorporation_number"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "Db_tph_number", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["TPH_NUMBER"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "db_tph_adress", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["ADDRESS_CUST"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "Edit_url", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["url_cust"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "DB_INCORP_STATE", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["incorporation_state"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "Db_tph_extension", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["tph_extension"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "DB_tph_zip", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["tph_zip"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "db_tph_state", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["TPH_STATE"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "EditEmail", C, false)), "Text", (await $.wcall([$t133], "copy", [(await $.mv((await $.wcall([$t133], "FieldByName", ["email_cust"], C)), "AsString")), 0, $.sub((await $.wcall([$t133], "pos", ["@", (await $.mv((await $.wcall([$t133], "FieldByName", ["email_cust"], C)), "AsString"))], C)), 1)], C)));
            await $.mset((await $.wv([$t133], "Edit1", C, false)), "Text", (await $.wcall([$t133], "copy", [(await $.mv((await $.wcall([$t133], "FieldByName", ["email_cust"], C)), "AsString")), $.add((await $.wcall([$t133], "pos", ["@", (await $.mv((await $.wcall([$t133], "FieldByName", ["email_cust"], C)), "AsString"))], C)), 1), (await $.wcall([$t133], "length", [(await $.mv((await $.wcall([$t133], "FieldByName", ["email_cust"], C)), "AsString"))], C))], C)));
            await $.mset((await $.wv([$t133], "EditBic", C, false)), "text", (await $.mv((await $.wcall([$t133], "FieldByName", ["bik"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "Edit_reg_no", C, false)), "Text", (await $.wcall([$t133], "inttostr", [(await $.mv((await $.wcall([$t133], "FieldByName", ["state_reyester_no"], C)), "AsLargeInt"))], C)));
            await $.mset((await $.wv([$t133], "DBDateTimeEditEh_gerdat", C, false)), "Value", (await $.mv((await $.wcall([$t133], "FieldByName", ["reyester_dat"], C)), "AsVariant")));
          }
          else if ($.eq($t135, 1) || $.eq($t135, 2) || $.eq($t135, 3) || $.eq($t135, 4)) {
            await $.mset((await $.wv([$t133], "edit_MONTHLYPROFIT", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["MONTHLYPROFIT"])), "AsString")));
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["cust_risk_categ"])), "isnull"))))) {
              await $.mset((await $.wv([$t133], "ComboBox_risk", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["cust_risk_categ"])), "AsInteger")));
            } else {
              await $.mset((await $.wv([$t133], "ComboBox_risk", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_contact_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "tph_contact_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "tph_contact_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_country"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "CountryByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_country"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "CountryByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_city"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "CityByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_city"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "CityByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_country_prefix"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "tph_country_prefix", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_country_prefix"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "tph_country_prefix", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_communication_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "tph_communication_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_tph_communication_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "tph_communication_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_contact_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "Address_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["info_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "Address_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["fakt_adress_owner"])), "IsNull"))))) {
              await $.mset((await $.wv([$t133], "DBLoCbox_fakt_adress_owner", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["fakt_adress_owner"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t133], "DBLoCbox_fakt_adress_owner", C, false)), "KeyValue", (-(1)));
            }
            await $.mset((await $.wv([$t133], "db_tph_state", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["info_tph_state"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "DB_tph_zip", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["info_tph_zip"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "db_tph_adress", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["info_tph_adress"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "db_tph_number", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["info_tph_number"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "db_tph_extension", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["info_tph_extension"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "EditEmail", C, false)), "Text", (await $.wcall([$t133], "copy", [(await $.mv((await $.wcall([$t133], "FieldByName", ["email"], C)), "AsString")), 0, $.sub((await $.wcall([$t133], "pos", ["@", (await $.mv((await $.wcall([$t133], "FieldByName", ["email"], C)), "AsString"))], C)), 1)], C)));
            await $.mset((await $.wv([$t133], "Edit1", C, false)), "Text", (await $.wcall([$t133], "copy", [(await $.mv((await $.wcall([$t133], "FieldByName", ["email"], C)), "AsString")), $.add((await $.wcall([$t133], "pos", ["@", (await $.mv((await $.wcall([$t133], "FieldByName", ["email"], C)), "AsString"))], C)), 1), (await $.wcall([$t133], "length", [(await $.mv((await $.wcall([$t133], "FieldByName", ["email"], C)), "AsString"))], C))], C)));
            await $.mset((await $.wv([$t133], "Edit_url", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["url"], C)), "AsString")));
            await $.mset((await $.wv([$t133], "Db_WORK_OTRASLI", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["WORK_OTRASLI"])), "AsString")));
            await $.mset((await $.wv([$t133], "Db_WORK_VID_SOB", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["WORK_VID_SOB"])), "AsString")));
          }
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["compani"])), "isnull"))))) {
          await $.mset((await $.wv([$t133], "DBLookup_cust_compani", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["compani"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t133], "DBLookup_cust_compani", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["sfera_deycod"])), "isnull"))))) {
          await $.mset((await $.wv([$t133], "DBLookupC_sfereday_kod", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["sfera_deycod"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t133], "DBLookupC_sfereday_kod", C, false)), "KeyValue", (-(1)));
        }
        await $.mset((await $.wv([$t133], "Edit_SFERKOD", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["sfera_deycod"])), "AsString")));
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["org_sob"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "OrganizationTypeCB", C, false)), "ItemIndex", (await $.wcall([$t133], "combobox_open", [(await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), (await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "OrganizationTypeData")), (await $.wv([$t133], "OrganizationTypeCB", C, false)), "org_sob", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t133], "OrganizationTypeCB", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["sfera_dey"])), "IsNull"))))) {
          await $.mset((await $.wv([$t133], "ActionAreaCB", C, false)), "ItemIndex", (await $.wcall([$t133], "combobox_open", [(await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), (await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ActionAreaData")), (await $.wv([$t133], "ActionAreaCB", C, false)), "sfera_dey", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t133], "ActionAreaCB", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["otrasl"])), "isnull"))))) {
          await $.mset((await $.wv([$t133], "BranchCB", C, false)), "ItemIndex", (await $.wcall([$t133], "combobox_open", [(await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), (await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "BranchData")), (await $.wv([$t133], "BranchCB", C, false)), "otrasl", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t133], "BranchCB", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["nalog_kod"])), "isnull"))))) {
          await $.mset((await $.wv([$t133], "TaxAreaCb", C, false)), "ItemIndex", (await $.wcall([$t133], "combobox_open", [(await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), (await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "TaxAreaData")), (await $.wv([$t133], "TaxAreaCb", C, false)), "nalog_kod", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t133], "TaxAreaCb", C, false)), "ItemIndex", (-(1)));
        }
        await $.mset((await $.wv([$t133], "EditShort_name", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["Short_name"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditDocSerie", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["passport"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditDocNumber", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["passp_number"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "CBoxDocPlace2", C, false)), "text", (await $.mv((await $.wcall([$t133], "FieldByName", ["paspplace"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "MemoNotes", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["note"], C)), "AsString")));
        if ($.truthy((await $.wcall([$t133], "VarIsNull", [(await $.mv((await $.wcall([$t133], "FieldByName", ["paspdate"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t133], "DTPickerDocDate", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t133], "DTPickerDocDate", C, false)), "Value", (await $.mv((await $.wcall([$t133], "FieldByName", ["paspdate"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t133], "VarIsNull", [(await $.mv((await $.wcall([$t133], "FieldByName", ["passexpire"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t133], "DTPickerDocExpiryDate", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t133], "DTPickerDocExpiryDate", C, false)), "Value", (await $.mv((await $.wcall([$t133], "FieldByName", ["passexpire"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t133], "VarIsNull", [(await $.mv((await $.wcall([$t133], "FieldByName", ["birthdate"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t133], "DTPickerBirthDate", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t133], "DTPickerBirthDate", C, false)), "Value", (await $.mv((await $.wcall([$t133], "FieldByName", ["birthdate"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t133], "VarIsNull", [(await $.mv((await $.wcall([$t133], "FieldByName", ["dat_ustav"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t133], "Dtp_Ustav", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t133], "Dtp_Ustav", C, false)), "Value", (await $.mv((await $.wcall([$t133], "FieldByName", ["dat_ustav"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t133], "VarIsNull", [(await $.mv((await $.wcall([$t133], "FieldByName", ["dat_nal"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t133], "Dpt_nal", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t133], "Dpt_nal", C, false)), "Value", (await $.mv((await $.wcall([$t133], "FieldByName", ["dat_nal"], C)), "AsVariant")));
        }
        await $.mset((await $.wv([$t133], "CBoxBirthState", C, false)), "KeyValue", (await $.mv((await $.wcall([$t133], "FieldByName", ["birthplace"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "CBoxBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t133], "FieldByName", ["BIRTH_STATE"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "CBoxAddressState", C, false)), "KeyValue", (await $.mv((await $.wcall([$t133], "FieldByName", ["adrs_state"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "CBoxAddressCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t133], "FieldByName", ["adrs_city"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditAddress", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["adress"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditAddressFactical", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["fakt_adress"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditPhoneMob", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["PHONE_MOB"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "EditPhoneCity", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["phone"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "Edit_activity", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["activity"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "Edit_profession", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["profession"], C)), "AsString")));
        await $.mset((await $.wv([$t133], "Edit_source_of_income", C, false)), "Text", (await $.mv((await $.wcall([$t133], "FieldByName", ["source_of_income"], C)), "AsString")));
        await $.stmt($.wcall([$t133], "Fill_Edit", [], C));
        await $.wset([$t133], "risk_descPERIOD", (await $.mv((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_CUST_RISK_DESCDATE_PERIOD")), "AsInteger")), C);
        if ($.truthy((await $.wcall([$t133], "VarIsNull", [(await $.mv((await $.wcall([$t133], "FieldByName", ["SAMELYDATE"], C)), "AsVariant"))], C)))) {
          await $.wset([$t133], "Sm_dat", (await $.wv([$t133], "null", C, false)), { get: async () => L0["sm_dat"], set: async (v) => { L0["sm_dat"] = v; }, local: true });
          await $.mset((await $.wv([$t133], "DateTi_samelydate", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t133], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.wcall([$t133], "FieldByName", ["SAMELYDATE"], C)), "AsVariant")));
        }
        if ($.truthy($.not(((await $.mv((await $.wcall([$t133], "FieldByName", ["SAMELYDATE"], C)), "isNUll")))))) {
          if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ods_SysdateTEK_DAT")), "AsDateTime")), (await $.wcall([$t133], "IncMonth", [(await $.mv((await $.wcall([$t133], "FieldByName", ["SAMELYDATE"], C)), "AsDatetime")), (await $.wv([$t133], "risk_descPERIOD", C, false))], C))))) {
            await $.mset((await $.wv([$t133], "LabelSamelyDate", C, false)), "Caption", "Bugün  eyniləşdirmə tarixidir !");
            await $.mset((await $.wv([$t133], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t133], "True", C, false)));
            await $.mset((await $.wv([$t133], "Timer1", C, false)), "Enabled", (await $.wv([$t133], "True", C, false)));
          } else {
            if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ods_SysdateTEK_DAT")), "AsDateTime")), (await $.wcall([$t133], "IncMonth", [(await $.mv((await $.wcall([$t133], "FieldByName", ["SAMELYDATE"], C)), "AsDatetime")), (await $.wv([$t133], "risk_descPERIOD", C, false))], C))))) {
              await $.mset((await $.wv([$t133], "LabelSamelyDate", C, false)), "Caption", "Eyniləşdirmə tarixi bitmişdir !");
              await $.mset((await $.wv([$t133], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.wv([$t133], "Timer1", C, false)), "Enabled", (await $.wv([$t133], "True", C, false)));
            } else {
              await $.mset((await $.wv([$t133], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t133], "False", C, false)));
              await $.mset((await $.wv([$t133], "Timer1", C, false)), "Enabled", (await $.wv([$t133], "False", C, false)));
            }
          }
        } else {
          await $.mset((await $.wv([$t133], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t133], "False", C, false)));
          await $.mset((await $.wv([$t133], "Timer1", C, false)), "Enabled", (await $.wv([$t133], "False", C, false)));
        }
        if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "RecordCount")), 1))) {
          await $.mset((await $.wv([$t133], "ButtonMeyar", C, false)), "Visible", (await $.wv([$t133], "true", C, false)));
        }
        if ($.truthy($.ne((await $.mv((await $.wv([$t133], "id_quality_DBLookupComboboxEh", C, false)), "Text")), ""))) {
          await $.mset((await $.wv([$t133], "id_quality_DBLookupComboboxEh", C, false)), "Enabled", (await $.wv([$t133], "false", C, false)));
        }
        await $.mset((await $.wv([$t133], "DBLookupCombobiflas", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["iflas"])), "AsString")));
        await $.mset((await $.wv([$t133], "DBLookupComb_idxal", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["import_export"])), "AsString")));
        await $.mset((await $.wv([$t133], "DBLookupComb_finance", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["financial_statement"])), "AsString")));
        await $.mset((await $.wv([$t133], "DBLookupComb_BankKard", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["bank_card"])), "AsString")));
        await $.mset((await $.wv([$t133], "DBLookupComb_borrower_occupation", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["borrower_occupation"])), "AsString")));
        await $.mset((await $.wv([$t133], "DBLookupComb_borrower_bad", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["borrower_bad"])), "AsString")));
        await $.mset((await $.wv([$t133], "ReportingDate", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["ReportingDate"])), "AsVariant")));
        await $.mset((await $.wv([$t133], "ReportType", C, false)), "Value", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["ReportType"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "Revenue", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["Revenue"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "Ebitda", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["Ebitda"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "Ebit", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["Ebit"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "InterestExpences", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["InterestExpences"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "NetProfit", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["NetProfit"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "TotalAssets", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["TotalAssets"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "TotalAssetsForeignCurrency", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["TotalAssetsForeignCurrency"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "TotalLiabilitiesForeignCurrency", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["TotalLiabilitiesForeignCurr"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "InterestExpenceLiabilities", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["InterestExpenceLiabilities"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "TotalLiabilities", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["TotalLiabilities"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "ForeignInterestExpenceLiabilities", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["FOREIGNINTERESTEXPENCE"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "TotalCapital", C, false)), "Text", (await $.wcall([$t133], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["TotalCapital"])), "value"))], C)));
        await $.mset((await $.wv([$t133], "DBLookupInsolvencyStatus", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t133], "DataModPCustService", C, false)), "ODS_custinfo")), "FieldByName", ["InsolvencyStatus"])), "AsVariant")));
        await $.mset((await $.wv([$t133], "XFPanelTeyp", C, false)), "Visible", (await $.wv([$t133], "true", C, false)));
        await $.mset((await $.wv([$t133], "XFBitcontinue", C, false)), "Visible", (await $.wv([$t133], "false", C, false)));
        await $.mset((await $.wv([$t133], "XFButton4", C, false)), "Visible", (await $.wv([$t133], "true", C, false)));
        await $.mset((await $.wv([$t133], "XFButton5", C, false)), "Visible", (await $.wv([$t133], "true", C, false)));
        await $.mset((await $.wv([$t133], "XFRadioGroupCust_type", C, false)), "Visible", (await $.wv([$t133], "true", C, false)));
        await $.mset((await $.wv([$t133], "XFRadioGroupCust_type1", C, false)), "Visible", (await $.wv([$t133], "false", C, false)));
        if ($.truthy($.ne((await $.mv((await $.wv([$t133], "EditID", C, false)), "Text")), ""))) {
          { const $t136 = (await $.mv((await $.wv([$t133], "XFRadioGroupCust_type", C, false)), "ItemIndex"));
            if ($.eq($t136, 0)) {
              await $.mset((await $.wv([$t133], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t133], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t133], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t133], "true", C, false)));
            }
            else if ($.eq($t136, 1)) {
              await $.mset((await $.wv([$t133], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t133], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [2])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [3])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [4])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [5])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [6])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [7])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [8])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [9])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [1])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "columns")), "Items")), [11])), "Visible", (await $.wv([$t133], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t133], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t133], "true", C, false)));
            }
            else if ($.eq($t136, 2)) {
              await $.mset((await $.wv([$t133], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t133], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t133], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t133], "true", C, false)));
            }
            else if ($.eq($t136, 3)) {
              await $.mset((await $.wv([$t133], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t133], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t133], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t133], "true", C, false)));
            }
            else if ($.eq($t136, 4)) {
              await $.mset((await $.wv([$t133], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t133], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t133], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t133], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t133], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t133], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t133], "true", C, false)));
            }
          }
        }
        await $.mcall((await $.wv([$t133], "CustSearch1", C, false)), "Click", []);
      }
    }
  }
  {
    const $t137 = (await $.wobj(C, "DataModPCustService"));
    await $.mcall((await $.wv([$t137], "ODS_account_tipacc", C, false)), "Close", []);
    await $.mcall((await $.wv([$t137], "ODS_account_tipacc", C, false)), "ClearVariables", []);
    await $.stmt((await $.mcall((await $.wv([$t137], "ODS_account_tipacc", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t137], "ODS_custinfo", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t137], "ODS_account_tipacc", C, false)), "Open", []);
    { const $t138 = (await $.mv((await $.wv([$t137], "ODS_account_tipacc", C, false)), "RecordCount"));
      await $.wset([$t137], "I", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t139 = true;
      for (;;) {
        if (!$t139) { await $.wset([$t137], "I", $.succ((await $.wv([$t137], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t139 = false;
        if (!($.ord((await $.wv([$t137], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t138))) break;
        if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t137], "ODS_account_tipacc", C, false)), "FieldByName", ["TIPACC"])), "AsString")), ""))) {
          await $.mset((await $.wv([$t137], "XFLabel_tipacc", C, false)), "Caption", "Hesabı Sərancamdadır   !");
          await $.mset((await $.wv([$t137], "XFLabel_tipacc", C, false)), "Visible", (await $.wv([$t137], "True", C, false)));
          await $.mset((await $.wv([$t137], "Timer2", C, false)), "Enabled", (await $.wv([$t137], "True", C, false)));
          return L0.result;
        } else {
          await $.mset((await $.wv([$t137], "XFLabel_tipacc", C, false)), "Visible", (await $.wv([$t137], "false", C, false)));
          await $.mset((await $.wv([$t137], "Timer2", C, false)), "Enabled", (await $.wv([$t137], "false", C, false)));
        }
        await $.mcall((await $.wv([$t137], "ODS_account_tipacc", C, false)), "Next", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "MainGrid2TitleClick", async function MainGrid2TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TPCustServiceForm", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": '', "b": '', "sm_dat": null, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Customers_Phys_FSPRINAD_KOD")), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFButton7")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFButton7")), "Visible", false);
  }
  {
    const $t140 = (await $.mv((await $.v(C, "DataModPCustService")), "DScustimage"));
    await $.stmt($.wcall([$t140], "close", [], C));
    await $.stmt((await $.wcall([$t140], "SetVariable", ["cust_id", (await $.mv((await $.mv((await $.wv([$t140], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FSIDCUSTINFO")), "AsInteger"))], C)));
    await $.stmt($.wcall([$t140], "Open", [], C));
  }
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active")))) {
    {
      const $t141 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS"));
      if ($.truthy($.gt((await $.wv([$t141], "RecordCount", C, false)), 0))) {
        await $.mset((await $.wv([$t141], "EditID", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["ID"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditFirstName", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["FirstName"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditPatronymic", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["Patronymic"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["LastName"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditFullName", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["Cust_Name"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditPINCode", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["passPIN"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditITN", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["inn"], C)), "AsString")));
        { const $t142 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Nerezident"])), "AsInteger"));
          if ($.eq($t142, 0)) {
            await $.mset((await $.wv([$t141], "RBtnNoResident", C, false)), "Checked", (await $.wv([$t141], "True", C, false)));
          }
          else if ($.eq($t142, 1)) {
            await $.mset((await $.wv([$t141], "RBtnResident", C, false)), "Checked", (await $.wv([$t141], "True", C, false)));
          }
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["CUST_type"])), "isNull"))))) {
          await $.mset((await $.wv([$t141], "XFRadioGroupCust_type", C, false)), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["CUST_type"])), "AsInteger")));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "CBoxCitizenship", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "CBoxCitizenship", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["sex"])), "isNull"))))) {
          await $.mset((await $.wv([$t141], "CBoxGender", C, false)), "ItemIndex", (await $.wcall([$t141], "combobox_open", [(await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "OdsGender")), (await $.wv([$t141], "CBoxGender", C, false)), "sex", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t141], "CBoxGender", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fam_status"])), "isNull"))))) {
          await $.mset((await $.wv([$t141], "CBoxFamStatus", C, false)), "ItemIndex", (await $.wcall([$t141], "combobox_open", [(await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "OdsFamstatus")), (await $.wv([$t141], "CBoxFamStatus", C, false)), "fam_status", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t141], "CBoxFamStatus", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["group_klie"])), "isNull"))))) {
          await $.mset((await $.wv([$t141], "CBoxGroup", C, false)), "ItemIndex", (await $.wcall([$t141], "combobox_open", [(await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ClientGroupData")), (await $.wv([$t141], "CBoxGroup", C, false)), "group_klie", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t141], "CBoxGroup", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["vid_sob"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "CBox", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["vid_sob"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "CBox", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["prinad_kod"])), "isNull"))))) {
          await $.mset((await $.wv([$t141], "ComboBox3", C, false)), "ItemIndex", (await $.wcall([$t141], "combobox_open", [(await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "RelationData")), (await $.wv([$t141], "ComboBox3", C, false)), "prinad_kod", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t141], "ComboBox3", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["DOC_TYPE"])), "isNull"))))) {
          await $.mset((await $.wv([$t141], "CBoxDocType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["DOC_TYPE"])), "AsInteger")));
          await $.mset((await $.wv([$t141], "CBoxDocType1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["DOC_TYPE"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t141], "CBoxDocType", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t141], "CBoxDocType1", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["quality_id"])), "isNull"))))) {
          await $.mset((await $.wv([$t141], "id_quality_DBLookupComboboxEh", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["quality_id"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t141], "id_quality_DBLookupComboboxEh", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["doc_country"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "issue_country", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["doc_country"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "issue_country", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["riskdescid"])), "isnull"))))) {
          await $.mset((await $.wv([$t141], "Comb_riskdescid", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["riskdescid"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t141], "Comb_riskdescid", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship2"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "DBCBox_Citizenship2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship2"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "DBCBox_Citizenship2", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship3"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "DBCBox_Citizenship3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship3"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "DBCBox_Citizenship3", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["rezd_country"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "DBLookupComboBox1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["rezd_country"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "DBLookupComboBox1", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["rezd_country1"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["rezd_country1"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "DBLookupComboBox2", C, false)), "KeyValue", 0);
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["rezd_country2"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "DBLookupComboBox3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["rezd_country2"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "DBLookupComboBox3", C, false)), "KeyValue", 0);
        }
        await $.mset((await $.wv([$t141], "DBLookupComboboxEh1", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["work_experience"])), "AsString")));
        await $.mset((await $.wv([$t141], "DBLookupComboboxEh2", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["last_work_experience"])), "AsString")));
        await $.mset((await $.wv([$t141], "DBLookupComboboxEh3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["category"])), "AsInteger")));
        await $.mset((await $.wv([$t141], "edit2", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_involvement"])), "AsString")));
        await $.mset((await $.wv([$t141], "edit3", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["family_number"])), "AsString")));
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_country"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "Fakt_Adrs_State", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_country"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "Fakt_Adrs_State", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_city"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "Fakt_Adrs_City", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_city"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "Fakt_Adrs_City", C, false)), "KeyValue", (-(1)));
        }
        await $.mset((await $.wv([$t141], "ZipFakt", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["fakt_zip"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "Work_Place", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["work_place"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "Work_Post", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["work_post"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "Work_Address", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["work_adress"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "Work_Phone", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["work_phone"], C)), "AsString")));
        { const $t143 = (await $.mv((await $.wv([$t141], "XFRadioGroupCust_type", C, false)), "ItemIndex"));
          if ($.eq($t143, 0)) {
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["risk_categ"])), "isnull"))))) {
              await $.mset((await $.wv([$t141], "ComboBox_risk", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["risk_categ"])), "AsInteger")));
            } else {
              await $.mset((await $.wv([$t141], "ComboBox_risk", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Address_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "Address_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Address_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "Address_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_contact_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "tph_contact_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "tph_contact_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_communication_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "tph_communication_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_communication_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "tph_communication_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["country_code_cust"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "CountryByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["country_code_cust"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "CountryByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["city_cust"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "CityByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["city_cust"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "CityByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["incorporation_cntr"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "DBLC_INCORP_CNTR", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["incorporation_cntr"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "DBLC_INCORP_CNTR", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_country_prefix"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "tph_country_prefix", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_country_prefix"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "tph_country_prefix", C, false)), "KeyValue", (-(1)));
            }
            await $.mset((await $.wv([$t141], "incor_number", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["incorporation_number"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "Db_tph_number", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["TPH_NUMBER"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "db_tph_adress", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["ADDRESS_CUST"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "Edit_url", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["url_cust"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "DB_INCORP_STATE", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["incorporation_state"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "Db_tph_extension", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["tph_extension"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "DB_tph_zip", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["tph_zip"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "db_tph_state", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["TPH_STATE"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "EditEmail", C, false)), "Text", (await $.wcall([$t141], "copy", [(await $.mv((await $.wcall([$t141], "FieldByName", ["email_cust"], C)), "AsString")), 0, $.sub((await $.wcall([$t141], "pos", ["@", (await $.mv((await $.wcall([$t141], "FieldByName", ["email_cust"], C)), "AsString"))], C)), 1)], C)));
            await $.mset((await $.wv([$t141], "Edit1", C, false)), "Text", (await $.wcall([$t141], "copy", [(await $.mv((await $.wcall([$t141], "FieldByName", ["email_cust"], C)), "AsString")), $.add((await $.wcall([$t141], "pos", ["@", (await $.mv((await $.wcall([$t141], "FieldByName", ["email_cust"], C)), "AsString"))], C)), 1), (await $.wcall([$t141], "length", [(await $.mv((await $.wcall([$t141], "FieldByName", ["email_cust"], C)), "AsString"))], C))], C)));
            await $.mset((await $.wv([$t141], "EditBic", C, false)), "text", (await $.mv((await $.wcall([$t141], "FieldByName", ["bik"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "Edit_reg_no", C, false)), "Text", (await $.wcall([$t141], "inttostr", [(await $.mv((await $.wcall([$t141], "FieldByName", ["state_reyester_no"], C)), "AsLargeInt"))], C)));
            await $.mset((await $.wv([$t141], "DBDateTimeEditEh_gerdat", C, false)), "Value", (await $.mv((await $.wcall([$t141], "FieldByName", ["reyester_dat"], C)), "AsVariant")));
            await $.mset((await $.wv([$t141], "faktor_muq", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["faktor_muq"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "faktor_dat", C, false)), "Value", (await $.mv((await $.wcall([$t141], "FieldByName", ["faktor_opendat"], C)), "AsVariant")));
            await $.mset((await $.wv([$t141], "faktor_hesab", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["faktor_accno"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "faktor_bank", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["faktor_bank"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "faktor_bankkod", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["faktor_bankkod"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "faktor_muxhesab", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["faktor_muxaccno"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "faktor_swift", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["faktor_swift"], C)), "AsString")));
          }
          else if ($.eq($t143, 5)) {
            if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Cust_Name"])), "AsString")), ""))) {
              await $.mset((await $.wv([$t141], "DBLookupCombob_grop", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["Cust_Name"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "DBLookupCombob_grop", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["incorporation_number"])), "AsString")), ""))) {
              await $.mset((await $.wv([$t141], "Edit_grop_name", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["incorporation_number"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "Edit_grop_name", C, false)), "text", "");
            }
          }
          else if ($.eq($t143, 1) || $.eq($t143, 2) || $.eq($t143, 3) || $.eq($t143, 4)) {
            await $.mset((await $.wv([$t141], "edit_MONTHLYPROFIT", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["MONTHLYPROFIT"])), "AsString")));
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_risk_categ"])), "isnull"))))) {
              await $.mset((await $.wv([$t141], "ComboBox_risk", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["cust_risk_categ"])), "AsInteger")));
            } else {
              await $.mset((await $.wv([$t141], "ComboBox_risk", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_contact_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "tph_contact_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "tph_contact_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "CountryByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "CountryByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_city"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "CityByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_city"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "CityByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country_prefix"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "tph_country_prefix", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country_prefix"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "tph_country_prefix", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_communication_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "tph_communication_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_communication_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "tph_communication_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_contact_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "Address_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "Address_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_adress_owner"])), "IsNull"))))) {
              await $.mset((await $.wv([$t141], "DBLoCbox_fakt_adress_owner", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_adress_owner"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t141], "DBLoCbox_fakt_adress_owner", C, false)), "KeyValue", (-(1)));
            }
            await $.mset((await $.wv([$t141], "db_tph_state", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["info_tph_state"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "DB_tph_zip", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["info_tph_zip"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "db_tph_adress", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["info_tph_adress"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "db_tph_number", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["info_tph_number"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "db_tph_extension", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["info_tph_extension"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "EditEmail", C, false)), "Text", (await $.wcall([$t141], "copy", [(await $.mv((await $.wcall([$t141], "FieldByName", ["email"], C)), "AsString")), 0, $.sub((await $.wcall([$t141], "pos", ["@", (await $.mv((await $.wcall([$t141], "FieldByName", ["email"], C)), "AsString"))], C)), 1)], C)));
            await $.mset((await $.wv([$t141], "Edit1", C, false)), "Text", (await $.wcall([$t141], "copy", [(await $.mv((await $.wcall([$t141], "FieldByName", ["email"], C)), "AsString")), $.add((await $.wcall([$t141], "pos", ["@", (await $.mv((await $.wcall([$t141], "FieldByName", ["email"], C)), "AsString"))], C)), 1), (await $.wcall([$t141], "length", [(await $.mv((await $.wcall([$t141], "FieldByName", ["email"], C)), "AsString"))], C))], C)));
            await $.mset((await $.wv([$t141], "Edit_url", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["url"], C)), "AsString")));
            await $.mset((await $.wv([$t141], "Db_WORK_OTRASLI", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["WORK_OTRASLI"])), "AsString")));
            await $.mset((await $.wv([$t141], "Db_WORK_VID_SOB", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["WORK_VID_SOB"])), "AsString")));
          }
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["compani"])), "isnull"))))) {
          await $.mset((await $.wv([$t141], "DBLookup_cust_compani", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["compani"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t141], "DBLookup_cust_compani", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["sfera_deycod"])), "isnull"))))) {
          await $.mset((await $.wv([$t141], "DBLookupC_sfereday_kod", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["sfera_deycod"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t141], "DBLookupC_sfereday_kod", C, false)), "KeyValue", (-(1)));
        }
        await $.mset((await $.wv([$t141], "Edit_SFERKOD", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["sfera_deycod"])), "AsString")));
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["org_sob"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "OrganizationTypeCB", C, false)), "ItemIndex", (await $.wcall([$t141], "combobox_open", [(await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "OrganizationTypeData")), (await $.wv([$t141], "OrganizationTypeCB", C, false)), "org_sob", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t141], "OrganizationTypeCB", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["sfera_dey"])), "IsNull"))))) {
          await $.mset((await $.wv([$t141], "ActionAreaCB", C, false)), "ItemIndex", (await $.wcall([$t141], "combobox_open", [(await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ActionAreaData")), (await $.wv([$t141], "ActionAreaCB", C, false)), "sfera_dey", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t141], "ActionAreaCB", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["otrasl"])), "isnull"))))) {
          await $.mset((await $.wv([$t141], "BranchCB", C, false)), "ItemIndex", (await $.wcall([$t141], "combobox_open", [(await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "BranchData")), (await $.wv([$t141], "BranchCB", C, false)), "otrasl", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t141], "BranchCB", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["nalog_kod"])), "isnull"))))) {
          await $.mset((await $.wv([$t141], "TaxAreaCb", C, false)), "ItemIndex", (await $.wcall([$t141], "combobox_open", [(await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "TaxAreaData")), (await $.wv([$t141], "TaxAreaCb", C, false)), "nalog_kod", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t141], "TaxAreaCb", C, false)), "ItemIndex", (-(1)));
        }
        await $.mset((await $.wv([$t141], "CBoxDocPlace2", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["paspplace"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditShort_name", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["Short_name"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditDocSerie", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["passport"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditDocNumber", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["passp_number"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "MemoNotes", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["note"], C)), "AsString")));
        if ($.truthy((await $.wcall([$t141], "VarIsNull", [(await $.mv((await $.wcall([$t141], "FieldByName", ["paspdate"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t141], "DTPickerDocDate", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t141], "DTPickerDocDate", C, false)), "Value", (await $.mv((await $.wcall([$t141], "FieldByName", ["paspdate"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t141], "VarIsNull", [(await $.mv((await $.wcall([$t141], "FieldByName", ["passexpire"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t141], "DTPickerDocExpiryDate", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t141], "DTPickerDocExpiryDate", C, false)), "Value", (await $.mv((await $.wcall([$t141], "FieldByName", ["passexpire"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t141], "VarIsNull", [(await $.mv((await $.wcall([$t141], "FieldByName", ["birthdate"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t141], "DTPickerBirthDate", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t141], "DTPickerBirthDate", C, false)), "Value", (await $.mv((await $.wcall([$t141], "FieldByName", ["birthdate"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t141], "VarIsNull", [(await $.mv((await $.wcall([$t141], "FieldByName", ["dat_ustav"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t141], "Dtp_Ustav", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t141], "Dtp_Ustav", C, false)), "Value", (await $.mv((await $.wcall([$t141], "FieldByName", ["dat_ustav"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t141], "VarIsNull", [(await $.mv((await $.wcall([$t141], "FieldByName", ["dat_nal"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t141], "Dpt_nal", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t141], "Dpt_nal", C, false)), "Value", (await $.mv((await $.wcall([$t141], "FieldByName", ["dat_nal"], C)), "AsVariant")));
        }
        await $.mset((await $.wv([$t141], "CBoxBirthState", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141], "FieldByName", ["birthplace"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "CBoxBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141], "FieldByName", ["BIRTH_STATE"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "CBoxAddressState", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141], "FieldByName", ["adrs_state"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "CBoxAddressCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t141], "FieldByName", ["adrs_city"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditAddress", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["adress"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditAddressFactical", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["fakt_adress"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditPhoneMob", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["PHONE_MOB"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "EditPhoneCity", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["phone"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "Edit_activity", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["activity"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "Edit_profession", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["profession"], C)), "AsString")));
        await $.mset((await $.wv([$t141], "Edit_source_of_income", C, false)), "Text", (await $.mv((await $.wcall([$t141], "FieldByName", ["source_of_income"], C)), "AsString")));
        await $.stmt($.wcall([$t141], "Fill_Edit", [], C));
        if ($.truthy((await $.wcall([$t141], "VarIsNull", [(await $.mv((await $.wcall([$t141], "FieldByName", ["SAMELYDATE"], C)), "AsVariant"))], C)))) {
          await $.wset([$t141], "Sm_dat", (await $.wv([$t141], "null", C, false)), { get: async () => L0["sm_dat"], set: async (v) => { L0["sm_dat"] = v; }, local: true });
          await $.mset((await $.wv([$t141], "DateTi_samelydate", C, false)), "text", "");
        } else {
          await $.mset((await $.wv([$t141], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.wcall([$t141], "FieldByName", ["SAMELYDATE"], C)), "AsVariant")));
        }
        await $.wset([$t141], "risk_descPERIOD", (await $.mv((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUST_RISK_DESCDATE_PERIOD")), "AsInteger")), C);
        if ($.truthy($.not(((await $.mv((await $.wcall([$t141], "FieldByName", ["SAMELYDATE"], C)), "isNUll")))))) {
          if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ods_SysdateTEK_DAT")), "AsDateTime")), (await $.wcall([$t141], "IncMonth", [(await $.mv((await $.wcall([$t141], "FieldByName", ["SAMELYDATE"], C)), "AsDatetime")), (await $.wv([$t141], "risk_descPERIOD", C, false))], C))))) {
            await $.mset((await $.wv([$t141], "LabelSamelyDate", C, false)), "Caption", "Bugün  eyniləşdirmə tarixidir !");
            await $.mset((await $.wv([$t141], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t141], "True", C, false)));
            await $.mset((await $.wv([$t141], "Timer1", C, false)), "Enabled", (await $.wv([$t141], "True", C, false)));
          } else {
            if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ods_SysdateTEK_DAT")), "AsDateTime")), (await $.wcall([$t141], "IncMonth", [(await $.mv((await $.wcall([$t141], "FieldByName", ["SAMELYDATE"], C)), "AsDatetime")), (await $.wv([$t141], "risk_descPERIOD", C, false))], C))))) {
              await $.mset((await $.wv([$t141], "LabelSamelyDate", C, false)), "Caption", "Eyniləşdirmə tarixi bitmişdir !");
              await $.mset((await $.wv([$t141], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.wv([$t141], "Timer1", C, false)), "Enabled", (await $.wv([$t141], "True", C, false)));
            } else {
              await $.mset((await $.wv([$t141], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t141], "False", C, false)));
              await $.mset((await $.wv([$t141], "Timer1", C, false)), "Enabled", (await $.wv([$t141], "False", C, false)));
            }
          }
        } else {
          await $.mset((await $.wv([$t141], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t141], "False", C, false)));
          await $.mset((await $.wv([$t141], "Timer1", C, false)), "Enabled", (await $.wv([$t141], "False", C, false)));
        }
        if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "RecordCount")), 1))) {
          await $.mset((await $.wv([$t141], "ButtonMeyar", C, false)), "Visible", (await $.wv([$t141], "true", C, false)));
        }
        if ($.truthy($.ne((await $.mv((await $.wv([$t141], "id_quality_DBLookupComboboxEh", C, false)), "Text")), ""))) {
          await $.mset((await $.wv([$t141], "id_quality_DBLookupComboboxEh", C, false)), "Enabled", (await $.wv([$t141], "false", C, false)));
        }
        await $.mset((await $.wv([$t141], "DBLookupCombobiflas", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["iflas"])), "AsString")));
        await $.mset((await $.wv([$t141], "DBLookupComb_idxal", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["import_export"])), "AsString")));
        await $.mset((await $.wv([$t141], "DBLookupComb_finance", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["financial_statement"])), "AsString")));
        await $.mset((await $.wv([$t141], "DBLookupComb_BankKard", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["bank_card"])), "AsString")));
        await $.mset((await $.wv([$t141], "DBLookupComb_borrower_occupation", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["borrower_occupation"])), "AsString")));
        await $.mset((await $.wv([$t141], "DBLookupComb_borrower_bad", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["borrower_bad"])), "AsString")));
        await $.mset((await $.wv([$t141], "ReportingDate", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["ReportingDate"])), "AsVariant")));
        await $.mset((await $.wv([$t141], "ReportType", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["ReportType"])), "AsString")));
        await $.mset((await $.wv([$t141], "Revenue", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Revenue"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "Ebitda", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Ebitda"])), "value"))], C)));
        await $.mset((await $.wv([$t141], "Ebit", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Ebit"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "InterestExpences", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["InterestExpences"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "NetProfit", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["NetProfit"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "TotalAssets", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["TotalAssets"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "TotalAssetsForeignCurrency", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["TotalAssetsForeignCurrency"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "TotalLiabilitiesForeignCurrency", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["TotalLiabilitiesForeignCurr"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "InterestExpenceLiabilities", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["InterestExpenceLiabilities"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "TotalLiabilities", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["TotalLiabilities"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "ForeignInterestExpenceLiabilities", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["FOREIGNINTERESTEXPENCE"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "TotalCapital", C, false)), "Text", (await $.wcall([$t141], "VarToStr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["TotalCapital"])), "Value"))], C)));
        await $.mset((await $.wv([$t141], "DBLookupInsolvencyStatus", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["InsolvencyStatus"])), "AsVariant")));
        await $.mset((await $.wv([$t141], "XFPanelTeyp", C, false)), "Visible", (await $.wv([$t141], "true", C, false)));
        await $.mset((await $.wv([$t141], "XFBitcontinue", C, false)), "Visible", (await $.wv([$t141], "false", C, false)));
        await $.mset((await $.wv([$t141], "XFButton4", C, false)), "Visible", (await $.wv([$t141], "true", C, false)));
        await $.mset((await $.wv([$t141], "XFButton5", C, false)), "Visible", (await $.wv([$t141], "true", C, false)));
        await $.mset((await $.wv([$t141], "XFRadioGroupCust_type", C, false)), "Visible", (await $.wv([$t141], "true", C, false)));
        await $.mset((await $.wv([$t141], "XFRadioGroupCust_type1", C, false)), "Visible", (await $.wv([$t141], "false", C, false)));
        if ($.truthy($.ne((await $.mv((await $.wv([$t141], "EditID", C, false)), "Text")), ""))) {
          { const $t144 = (await $.mv((await $.wv([$t141], "XFRadioGroupCust_type", C, false)), "ItemIndex"));
            if ($.eq($t144, 0)) {
              await $.mset((await $.wv([$t141], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t141], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t141], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t141], "true", C, false)));
            }
            else if ($.eq($t144, 1)) {
              await $.mset((await $.wv([$t141], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t141], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [2])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [3])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [4])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [5])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [6])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [7])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [8])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [9])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [1])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "columns")), "Items")), [11])), "Visible", (await $.wv([$t141], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t141], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t141], "true", C, false)));
            }
            else if ($.eq($t144, 2)) {
              await $.mset((await $.wv([$t141], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t141], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t141], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t141], "true", C, false)));
            }
            else if ($.eq($t144, 3)) {
              await $.mset((await $.wv([$t141], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t141], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t141], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t141], "true", C, false)));
            }
            else if ($.eq($t144, 4)) {
              await $.mset((await $.wv([$t141], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t141], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t141], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t141], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t141], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t141], "PageControl1", C, false)), "pages")), [10])), "TabVisible", (await $.wv([$t141], "true", C, false)));
            }
          }
        }
      }
      { const $t145 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger"));
        if ($.eq($t145, 0) || $.eq($t145, 1) || $.eq($t145, 2)) {
          {
            const $t146 = (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_BusProc"));
            await $.stmt($.wcall([$t141, $t146], "close", [], C));
            await $.wset([$t141, $t146], "a", (await $.wcall([$t141, $t146], "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141, $t146], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger"))], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
            await $.stmt((await $.wcall([$t141, $t146], "SetVariable", ["custtype", (await $.wcall([$t141, $t146], "strtoint", [(await $.wv([$t141, $t146], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false))], C))], C)));
            await $.stmt((await $.wcall([$t141, $t146], "SetVariable", ["ids", (await $.wcall([$t141, $t146], "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141, $t146], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"))], C))], C)));
            await $.stmt($.wcall([$t141, $t146], "open", [], C));
          }
        }
        else if ($.eq($t145, 3)) {
          {
            const $t147 = (await $.mv((await $.wv([$t141], "DataModPCustService", C, false)), "ODS_BusProc"));
            if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t141, $t147], "PCustServiceForm", C, false)), "XFRadioGroup1")), "Visible")), (await $.wv([$t141, $t147], "false", C, false))))) {
              await $.stmt($.wcall([$t141, $t147], "close", [], C));
              await $.stmt((await $.wcall([$t141, $t147], "SetVariable", ["custtype", 10], C)));
              await $.stmt((await $.wcall([$t141, $t147], "SetVariable", ["ids", (await $.wcall([$t141, $t147], "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t141, $t147], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"))], C))], C)));
              await $.stmt($.wcall([$t141, $t147], "open", [], C));
            }
          }
        }
      }
    }
  }
  {
    const $t148 = (await $.wobj(C, "DataModPCustService"));
    await $.mcall((await $.wv([$t148], "ODS_account_tipacc", C, false)), "Close", []);
    await $.mcall((await $.wv([$t148], "ODS_account_tipacc", C, false)), "ClearVariables", []);
    await $.stmt((await $.mcall((await $.wv([$t148], "ODS_account_tipacc", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.wv([$t148], "ODS_CUSTOMERS_PHYS_FS", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t148], "ODS_account_tipacc", C, false)), "Open", []);
    { const $t149 = (await $.mv((await $.wv([$t148], "ODS_account_tipacc", C, false)), "RecordCount"));
      await $.wset([$t148], "I", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t150 = true;
      for (;;) {
        if (!$t150) { await $.wset([$t148], "I", $.succ((await $.wv([$t148], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t150 = false;
        if (!($.ord((await $.wv([$t148], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t149))) break;
        if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t148], "ODS_account_tipacc", C, false)), "FieldByName", ["TIPACC"])), "AsString")), ""))) {
          await $.mset((await $.wv([$t148], "XFLabel_tipacc", C, false)), "Caption", "Hesabı Sərancamdadır   !");
          await $.mset((await $.wv([$t148], "XFLabel_tipacc", C, false)), "Visible", (await $.wv([$t148], "True", C, false)));
          await $.mset((await $.wv([$t148], "Timer2", C, false)), "Enabled", (await $.wv([$t148], "True", C, false)));
          return L0.result;
        } else {
          await $.mset((await $.wv([$t148], "XFLabel_tipacc", C, false)), "Visible", (await $.wv([$t148], "false", C, false)));
          await $.mset((await $.wv([$t148], "Timer2", C, false)), "Enabled", (await $.wv([$t148], "false", C, false)));
        }
        await $.mcall((await $.wv([$t148], "ODS_account_tipacc", C, false)), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue")), (await $.v(C, "null"))))) {
    {
      const $t151 = (await $.mv((await $.v(C, "DataModPCustService")), "OdsDoctaypes"));
      if ($.truthy($.eq((await $.mv((await $.wcall([$t151], "FieldByName", ["pincodforced"], C)), "AsInteger")), 1))) {
        await $.mset((await $.wv([$t151], "EditPINCode1", C, false)), "MaxLength", 7);
        await $.mset((await $.wv([$t151], "EditDocNumber1", C, false)), "MaxLength", 8);
      } else {
        await $.mset((await $.wv([$t151], "EditPINCode1", C, false)), "MaxLength", 50);
        await $.mset((await $.wv([$t151], "EditDocNumber1", C, false)), "MaxLength", 50);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "MainGridTitleBtnClick", async function MainGridTitleBtnClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "acol": $.copyArg(p1), "column": $.copyArg(p2), result: undefined, "sortfield": ''};
  await $.fixArgs(L0, ["sender", "acol", "column"]);
  L0["sortfield"] = (await $.mv(L0["column"], "FieldName"));
  if ($.truthy($.eq((await $.mv((await $.mv(L0["column"], "Title")), "SortMarker")), (await $.v(C, "smDownEh"))))) {
    L0["sortfield"] = $.add(L0["sortfield"], " DESC");
  }
  {
    const $t152 = L0["sender"];
    const $t153 = (await $.wcall([$t152], "TOracleDataSet", [(await $.mv((await $.wv([$t152], "DataSource", C, false)), "DataSet"))], C));
    await $.mset((await $.wv([$t152, $t153], "Screen", C, false)), "Cursor", (await $.wv([$t152, $t153], "crSQLWait", C, false)));
    await $.stmt((await $.wcall([$t152, $t153], "SetVariable", ["title", (await $.wv([$t152, $t153], "SortField", { get: async () => L0["sortfield"], set: async (v) => { L0["sortfield"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t152, $t153], "Refresh", [], C));
    await $.mset((await $.wv([$t152, $t153], "Screen", C, false)), "Cursor", (await $.wv([$t152, $t153], "crDefault", C, false)));
  }
  return L0.result;
}, {"params": ["Sender", "ACol", "Column"], "kind": "procedure", "ptypes": ["TObject", "Integer", "TColumnEh"]});
  U.method("TPCustServiceForm", "MainGridTitleClick", async function MainGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t154 = (await $.wobj(C, "DataModPCustService"));
    const $t155 = (await $.wv([$t154], "ODS_CUSTOMERS_PHYS_FS", C, false));
    await $.stmt($.wcall([$t154, $t155], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t154, $t155], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t154, $t155], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t154, $t155], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t154, $t155], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t154, $t155], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t154, $t155], "open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TPCustServiceForm", "Memorialorder1Click", async function Memorialorder1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormInterval")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Mtrininkreditlri1Click", async function Mtrininkreditlri1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CommonDBGrid", (await $.mv((await $.v(C, "CreditFrm")), "MainGrid")));
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_phys"])), "asinteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_fs"])), "AsInteger")), 1)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Fiziki şəxs və sahibkarların  kreditlərinə baxmaq olmaz !"])));
    return L0.result;
  }
  {
    const $t156 = (await $.wobj(C, "DataModPCustService"));
    const $t157 = (await $.wv([$t156], "CreditDSet", C, false));
    if ($.truthy((await $.wv([$t156, $t157], "Active", C, false)))) {
      await $.stmt($.wcall([$t156, $t157], "close", [], C));
    }
    await $.stmt((await $.wcall([$t156, $t157], "SetVariable", [":custid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t156, $t157], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "asinteger"))], C)));
    await $.stmt($.wcall([$t156, $t157], "open", [], C));
  }
  await $.mcall((await $.v(C, "CreditFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "NetProfitKeyPress", async function NetProfitKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "OTherClick", async function OTherClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Form_other", (await $.mcall((await $.v(C, "TForm_other")), "create", [Self])));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active")), false))) {
    await $.stmt((await $.call(C, "ShowMessage", ["       Heç bir müştəri seçilməyib     !"])));
    return L0.result;
  } else {
    await $.mcall((await $.v(C, "Form_other")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "tonajClick", async function tonajClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Form8"))]))))) {
    await $.set(C, "Form8", (await $.mcall((await $.v(C, "TForm8")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "Form8")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Sazlama1Click", async function Sazlama1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Quality", (await $.mcall((await $.v(C, "TQuality")), "create", [Self])));
  await $.mcall((await $.v(C, "Quality")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "sefirlik1Click", async function sefirlik1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t158 = (await $.wobj(C, "DataModPCustService"));
    const $t159 = (await $.wv([$t158], "ODS_CUSTOMERS_PHYS_FS", C, false));
    if ($.truthy((await $.and_(((await $.wv([$t158, $t159], "Active", C, false))), async () => ($.ne((await $.wv([$t158, $t159], "RecordCount", C, false)), 0)))))) {
      await $.wset([$t158, $t159], "tacc", (await $.mv((await $.wcall([$t158, $t159], "FieldByName", ["id"], C)), "AsString")), C);
      await $.wset([$t158, $t159], "Form_embassy", (await $.mcall((await $.wv([$t158, $t159], "TForm_embassy", C, false)), "Create", [Self])), C);
      await $.mcall((await $.wv([$t158, $t159], "Form_embassy", C, false)), "ShowModal", []);
    } else {
      await $.stmt((await $.wcall([$t158, $t159], "ShowMessage", ["Heç bir məlumat seçilməyib !"], C)));
      return L0.result;
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Set_AutoScroll", async function Set_AutoScroll(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoScroll", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPCustServiceForm", "Set_AutoSize", async function Set_AutoSize(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AutoSize", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPCustServiceForm", "Set_AxBorderStyle", async function Set_AxBorderStyle(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "AxBorderStyle", (await $.call(C, "TActiveFormBorderStyle", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxActiveFormBorderStyle"]});
  U.method("TPCustServiceForm", "Set_Caption", async function Set_Caption(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Caption", (await $.call(C, "TCaption", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPCustServiceForm", "Set_Color", async function Set_Color(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Color", (await $.call(C, "TColor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["OLE_COLOR"]});
  U.method("TPCustServiceForm", "Set_Cursor", async function Set_Cursor(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Cursor", (await $.call(C, "TCursor", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Smallint"]});
  U.method("TPCustServiceForm", "Set_DoubleBuffered", async function Set_DoubleBuffered(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DoubleBuffered", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPCustServiceForm", "Set_DropTarget", async function Set_DropTarget(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "DropTarget", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPCustServiceForm", "Set_Enabled", async function Set_Enabled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Enabled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPCustServiceForm", "Set_Font", async function Set_Font(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.stmt((await $.call(C, "SetOleFont", [(await $.v(C, "Font")), L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["IFontDisp"]});
  U.method("TPCustServiceForm", "Set_HelpFile", async function Set_HelpFile(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "HelpFile", (await $.call(C, "String", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WideString"]});
  U.method("TPCustServiceForm", "Set_KeyPreview", async function Set_KeyPreview(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "KeyPreview", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPCustServiceForm", "Set_PixelsPerInch", async function Set_PixelsPerInch(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PixelsPerInch", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TPCustServiceForm", "Set_PrintScale", async function Set_PrintScale(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "PrintScale", (await $.call(C, "TPrintScale", [L0["value"]])));
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TxPrintScale"]});
  U.method("TPCustServiceForm", "Set_Scaled", async function Set_Scaled(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Scaled", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPCustServiceForm", "Set_Visible", async function Set_Visible(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "Visible", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["WordBool"]});
  U.method("TPCustServiceForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "custsign": null, "jpg": null, "bmp": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["custsign"] = (await $.mv((await $.v(C, "TPicture")), "Create"));
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
      }
    } catch ($t160) {
      $.rethrowControl($t160);
      $.handled($t160);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "Edit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "FieldByName", ["CUSTSIGN"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "photo": null, "jpg": null, "bmp": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["photo"] = (await $.mv((await $.v(C, "TPicture")), "Create"));
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
      }
    } catch ($t161) {
      $.rethrowControl($t161);
      $.handled($t161);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "Edit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "FieldByName", ["Photo"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "stamp": null, "jpg": null, "bmp": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["stamp"] = (await $.mv((await $.v(C, "TPicture")), "Create"));
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
      }
    } catch ($t162) {
      $.rethrowControl($t162);
      $.handled($t162);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "Edit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "FieldByName", ["STAMP"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "photo": null, "jpg": null, "bmp": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["photo"] = (await $.mv((await $.v(C, "TPicture")), "Create"));
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image4")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image4")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
      }
    } catch ($t163) {
      $.rethrowControl($t163);
      $.handled($t163);
      await $.stmt((await $.call(C, "ShowMessage", ["Error during picture loading"])));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "Edit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image4")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "FieldByName", ["doc_type_image"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "DScustimage")), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "SWFT1Click", async function SWFT1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominala plastik kartlarına  əməliyyat vermek olmaz   !"])));
    return L0.result;
  }
  await $.set(C, "tr", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  if ($.truthy($.ne((await $.v(C, "tr")), ""))) {
    await $.stmt((await $.call(C, "LoadPlugin2", ["filereport.bpl", "swift", (await $.v(C, "tr"))])));
  } else {
    await $.stmt((await $.call(C, "showmessage", ["    Heç bir Məlumat seçilməyib  ! "])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TabSheet10Show", async function TabSheet10Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CBoxGroup")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TabSheet1Show", async function TabSheet1Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditLastName")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TabSheet3Show", async function TabSheet3Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditPINCode")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TabSheet5Show", async function TabSheet5Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TabSheet6Show", async function TabSheet6Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "GetPath", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TabSheet7Show", async function TabSheet7Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFPanelTeyp")), "Visible")), true))) {
    await $.mcall((await $.v(C, "editid")), "SetFocus", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TabSheet8Show", async function TabSheet8Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditFullName")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "LabelSamelyDate")), "Font")), "Color")), (await $.v(C, "clblack"))))) {
    await $.mset((await $.mv((await $.v(C, "LabelSamelyDate")), "Font")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.mv((await $.v(C, "LabelSamelyDate")), "Font")), "Color", (await $.v(C, "clblack")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Timer2Timer", async function Timer2Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "XFLabel_tipacc")), "Font")), "Color")), (await $.v(C, "clblack"))))) {
    await $.mset((await $.mv((await $.v(C, "XFLabel_tipacc")), "Font")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.mv((await $.v(C, "XFLabel_tipacc")), "Font")), "Color", (await $.v(C, "clblack")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TabSheet2Show", async function TabSheet2Show(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ƏməliyyatClick", async function ƏməliyyatClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_custid": '', "bdat": 0, "edat": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormOperation", (await $.mcall((await $.v(C, "TFormOperation")), "Create", [Self])));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominala əməliyyatlarına baxmaq olmaz     !"])));
    return L0.result;
  }
  {
    const $t164 = (await $.wobj(C, "DataModPCustService"));
    if ($.truthy($.eq((await $.mv((await $.wv([$t164], "ODS_CUSTOMERS_PHYS_FS", C, false)), "Active")), (await $.wv([$t164], "false", C, false))))) {
      await $.mcall((await $.wv([$t164], "ODS_sb_business_opers", C, false)), "Close", []);
      await $.mcall((await $.wv([$t164], "ODS_sb_business_opers", C, false)), "Open", []);
      { const $t165 = await $.iset((await $.mv((await $.wv([$t164], "ODS_sb_business_opers", C, false)), "SQl")), [2], ""); if ($t165 !== undefined) { await $.mset((await $.wv([$t164], "ODS_sb_business_opers", C, false)), "SQl", $t165); } }
      await $.mcall((await $.wv([$t164], "ODS_trancation", C, false)), "Open", []);
    } else {
      {
        const $t166 = (await $.wv([$t164], "DataModPCustService", C, false));
        if ($.truthy((await $.and_(($.eq((await $.mv((await $.wv([$t164, $t166], "ODS_CUSTOMERS_PHYS_FS", C, false)), "Active")), (await $.wv([$t164, $t166], "True", C, false)))), async () => ($.gt((await $.mv((await $.wv([$t164, $t166], "ODS_CUSTOMERS_PHYS_FS", C, false)), "RecordCount")), 0)))))) {
          await $.wset([$t164, $t166], "v_custid", (await $.wcall([$t164, $t166], "inttostr", [(await $.mv((await $.wv([$t164, $t166], "ODS_CUSTOMERS_PHYS_FSID", C, false)), "AsInteger"))], C)), { get: async () => L0["v_custid"], set: async (v) => { L0["v_custid"] = v; }, local: true });
          await $.mcall((await $.wv([$t164, $t166], "ODS_sb_business_opers", C, false)), "Close", []);
          { const $t167 = await $.iset((await $.mv((await $.wv([$t164, $t166], "ODS_sb_business_opers", C, false)), "SQl")), [2], $.add($.add($.add($.add("and b.parentid in (select id   FROM transactions_busnes_pros where (custid_cred =", (await $.wv([$t164, $t166], "v_custid", { get: async () => L0["v_custid"], set: async (v) => { L0["v_custid"] = v; }, local: true }, false))), ") or (custid_debt="), (await $.wv([$t164, $t166], "v_custid", { get: async () => L0["v_custid"], set: async (v) => { L0["v_custid"] = v; }, local: true }, false))), "))")); if ($t167 !== undefined) { await $.mset((await $.wv([$t164, $t166], "ODS_sb_business_opers", C, false)), "SQl", $t167); } }
          await $.mcall((await $.wv([$t164, $t166], "ODS_sb_business_opers", C, false)), "Open", []);
        } else {
          await $.mcall((await $.wv([$t164, $t166], "ODS_sb_business_opers", C, false)), "Close", []);
          { const $t168 = await $.iset((await $.mv((await $.wv([$t164, $t166], "ODS_sb_business_opers", C, false)), "SQl")), [2], ""); if ($t168 !== undefined) { await $.mset((await $.wv([$t164, $t166], "ODS_sb_business_opers", C, false)), "SQl", $t168); } }
          await $.mcall((await $.wv([$t164, $t166], "ODS_sb_business_opers", C, false)), "Open", []);
        }
      }
      await $.mset((await $.mv((await $.wv([$t164], "FormOperation", C, false)), "memo1")), "Text", (await $.mv((await $.mv((await $.wv([$t164], "ODS_sb_business_opers", C, false)), "sql")), "text")));
      await $.mcall((await $.wv([$t164], "ODS_trancation", C, false)), "Open", []);
    }
    await $.mcall((await $.wv([$t164], "FormOperation", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProc")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProc")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "TotalAssetsForeignCurrencyKeyPress", async function TotalAssetsForeignCurrencyKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), (await $.mv((await $.v(C, "FormatSettings")), "DecimalSeparator"))]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), (await $.mv((await $.v(C, "FormatSettings")), "DecimalSeparator")))), async () => ($.gt((await $.call(C, "Pos", [(await $.mv((await $.v(C, "FormatSettings")), "DecimalSeparator")), (await $.mv((await $.v(C, "TotalAssetsForeignCurrency")), "Text"))])), 0)))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "TotalAssetsKeyPress", async function TotalAssetsKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "TotalCapitalKeyPress", async function TotalCapitalKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "TotalLiabilitiesForeignCurrencyKeyPress", async function TotalLiabilitiesForeignCurrencyKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "TotalLiabilitiesKeyPress", async function TotalLiabilitiesKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ","]))))) {
    if ($.truthy($.ne((await $.call(C, "Ord", [(await L0["key"].get())])), 8))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPCustServiceForm", "SM_EmailClick", async function SM_EmailClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0, "willrefresh": false};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "SMSForm", (await $.mcall((await $.v(C, "TSMSForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "SMSForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFBitBtn11Click", async function XFBitBtn11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "PageControl1")), "SelectNextPage", [false, true])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "PageControl1")), "SelectNextPage", [true, true])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "d_passpin": '', "p_cust_type": 0, "b": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "XFBitBtn2")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 4))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [8, "Nom_Cust"]]))])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [9, "nom_cust_insert"]]))), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.set(C, "ConvertNominalToCust", true);
    await $.mcall((await $.v(C, "CustEdit1")), "Click", []);
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ExtractMainStatus", async function ExtractMainStatus(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy((await $.call(C, "SameText", [(await $.call(C, "Copy", [L0["s"], 1, 5])), "Match"])))) {
    L0["result"] = "Match";
  } else {
    if ($.truthy((await $.call(C, "SameText", [(await $.call(C, "Copy", [L0["s"], 1, 5])), "Close"])))) {
      L0["result"] = "Close";
    } else {
      if ($.truthy((await $.call(C, "SameText", [(await $.call(C, "Copy", [L0["s"], 1, 8])), "No Match"])))) {
        L0["result"] = "No Match";
      } else {
        L0["result"] = L0["s"];
      }
    }
  }
  return L0.result;
}, {"params": ["S"], "kind": "function", "ptypes": ["String"]});
  U.func("GetDesktopPath", async function GetDesktopPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "path": $.sarr()};
  await $.stmt((await $.call(C, "SHGetFolderPath", [0, (await $.v(C, "CSIDL_DESKTOPDIRECTORY")), 0, 0, L0["path"]])));
  L0["result"] = L0["path"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPCustServiceForm", "XFBitBtnHMSClick", async function XFBitBtnHMSClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "pdf": null, "filename": '', "chek": '', "hms": '', "dat": null, "blo": false, "blo1": false, "blo2": false, "full_name": '', "name": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["blo"] = false;
  L0["blo1"] = false;
  L0["blo2"] = false;
  L0["dat"] = (await $.mv((await $.v(C, "DTPickerBirthDate")), "Value"));
  L0["filename"] = (await $.mcall((await $.v(C, "TPath")), "Combine", [(await $.v(C, "GetDesktopPath")), $.add($.add("PEP", (await $.call(C, "FormatDateTime", ["yyyymmdd_hhnnss", (await $.v(C, "Now"))]))), ".pdf")]));
  L0["pdf"] = (await $.mv((await $.v(C, "TPdfDocumentGDI")), "Create"));
  try {
    await $.mset(L0["pdf"], "DefaultPaperSize", (await $.v(C, "psA4")));
    await $.mcall(L0["pdf"], "AddPage", []);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Name", "Tahoma");
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 16);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [15, 10, "1. Ümumi məlumatlar"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 40, "1. Hesabat hazırlayan təşkilat:"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [90, 60, (await $.mv((await $.v(C, "odsbankinfoAZ_NAME")), "AsString"))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 90, "2. Skrininqi aparan əməkdaş:"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [90, 110, (await $.mv((await $.v(C, "ods_userFULLNAME")), "AsString"))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 140, "3. Skrininq tarixi:"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [90, 160, (await $.mv((await $.v(C, "ods_timTARIX")), "AsVariant"))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 190, "4. Skrininq vaxtı:"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [90, 210, (await $.mv((await $.v(C, "ods_timSAAT")), "AsVariant"))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 240, "5. Skrininq növü:"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [90, 260, "Manual"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Pen")), "Width", 2);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Pen")), "Color", (await $.v(C, "clBlack")));
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "MoveTo", [15, 290])));
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "LineTo", [780, 290])));
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 0))) {
      L0["full_name"] = (await $.mv((await $.v(C, "EditFullName")), "Text"));
      L0["name"] = (await $.mv((await $.v(C, "EditFullName")), "Text"));
    } else {
      L0["full_name"] = $.add($.add((await $.mv((await $.v(C, "EditLastName")), "Text")), (await $.mv((await $.v(C, "EditFirstName")), "Text"))), (await $.mv((await $.v(C, "EditPatronymic")), "Text")));
      L0["name"] = (await $.mv((await $.v(C, "EditFirstName")), "Text"));
    }
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 16);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [15, 310, "2. Müştəriyə aid məlumatlar"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [15, 330, "(Hər bir skrininq üçün müqayisə olunan müştərilərin identifikasiya məlumatları)"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 350, $.add("1. Ad   ", L0["name"])])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 370, $.add("2. Soyad   ", (await $.mv((await $.v(C, "EditLastName")), "Text")))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 390, $.add("3. Ata adı  ", (await $.mv((await $.v(C, "EditPatronymic")), "Text")))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 410, $.add("4. Doğum tarixi  ", (await $.call(C, "VarToStr", [L0["dat"]])))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 430, $.add("5. Vətəndaşlıqı  ", (await $.mv((await $.v(C, "CBoxCitizenship")), "Text")))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 450, $.add($.add("6. Pasport nömrəsi  ", (await $.mv((await $.v(C, "EditDocSerie1")), "Text"))), (await $.mv((await $.v(C, "EditDocNumber1")), "Text")))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 470, $.add("7. PİN Kod  ", (await $.mv((await $.v(C, "EditPINCode1")), "Text")))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", []);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [50, 490, $.add("8. Doğulduğu yer  ", (await $.mv((await $.v(C, "CBoxBirthCity")), "Text")))])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Pen")), "Width", 2);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Pen")), "Color", (await $.v(C, "clBlack")));
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "MoveTo", [15, 520])));
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "LineTo", [780, 520])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 16);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [15, 540, "3. Skrininq nəticəsi"])));
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Size", 14);
    await $.mset((await $.mv((await $.mv(L0["pdf"], "VCLCanvas")), "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [90, 565, "Uyğunluq statusu:"])));
    L0["chek"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallStringFunction", ["get_world_yoxlama", [L0["full_name"], L0["dat"]]]));
    L0["hms"] = (await $.call(C, "ExtractMainStatus", [L0["chek"]]));
    if ($.truthy($.eq(L0["hms"], "Match"))) {
      L0["blo"] = true;
    } else {
      L0["blo"] = false;
    }
    if ($.truthy($.eq(L0["hms"], "Close"))) {
      L0["blo1"] = true;
    } else {
      L0["blo1"] = false;
    }
    if ($.truthy($.eq(L0["hms"], "No Match"))) {
      L0["blo2"] = true;
    } else {
      L0["blo2"] = false;
    }
    await $.stmt((await $.call(C, "DrawCheckBox", [(await $.mv(L0["pdf"], "VCLCanvas")), 110, 598, L0["blo"]])));
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [125, 590, "Match (Uyğunluq var) 80-100%"])));
    await $.stmt((await $.call(C, "DrawCheckBox", [(await $.mv(L0["pdf"], "VCLCanvas")), 110, 615, L0["blo1"]])));
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [125, 610, "Close Match (Yaxın uyğunluq) 50-79%"])));
    await $.stmt((await $.call(C, "DrawCheckBox", [(await $.mv(L0["pdf"], "VCLCanvas")), 110, 635, L0["blo2"]])));
    await $.stmt((await $.mcall((await $.mv(L0["pdf"], "VCLCanvas")), "TextOut", [125, 630, "No Match (Uyğunluq yoxdur) 0-49%"])));
    if ($.truthy((await $.call(C, "FileExists", [L0["filename"]])))) {
      await $.stmt((await $.call(C, "DeleteFile", [L0["filename"]])));
    }
    await $.stmt((await $.mcall(L0["pdf"], "SaveToFile", [L0["filename"]])));
    await $.stmt((await $.call(C, "ShellExecute", [0, "open", (await $.call(C, "PChar", [L0["filename"]])), null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
  } finally {
    await $.mcall(L0["pdf"], "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFBitcontinueClick", async function XFBitcontinueClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "a": 0, "b": 0, "c": 0, "d_doc_type": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")), (-(1)))))) {
    await $.stmt((await $.call(C, "showmessage", [(await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "msg_control")), "CallStringFunction", ["GetMessage", [1, "cust_type"]]))])));
    return L0.result;
  }
  { const $t169 = (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex"));
    if ($.eq($t169, 0)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel12")), "Visible")), true))) {
        if ($.truthy(($.eq((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", ["VÖEN sahəsi boşdur"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (-(1))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "showmessage", ["  Kateqoriyası sahəsi Kodu  daxil edilməlidir!"])));
        return L0.result;
      }
    }
    else if ($.eq($t169, 1) || $.eq($t169, 4)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
          return L0.result;
        }
      }
      if ($.truthy(($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true)))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), (await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocNumber1")), "Text"))]))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", ["PİN Kod və Senedin  Seriya nömresi eynidir  !"])));
          return L0.result;
        }
      }
      if ($.truthy(((await $.or_((await $.or_((await $.or_(((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 3])), "AZE")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))), async () => ((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "AA")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6)))))))))) {
        await $.stmt((await $.call(C, "ShowMessage", ["  FIN-i düzgün daxil edin  !"])));
        $.abort();
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (-(1))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "showmessage", ["  Kateqoriyası sahəsi Kodu  daxil edilməlidir!"])));
        return L0.result;
      }
    }
    else if ($.eq($t169, 2)) {
      if ($.truthy(($.eq((await $.mv((await $.v(C, "XFLabel12")), "Visible")), true)))) {
        if ($.truthy(($.eq((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", ["VÖEN  sahəsi boşdur"])));
          return L0.result;
        }
      }
      if ($.truthy(($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true)))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), ""))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", [" Pinkod sahəsi boşdur"])));
          return L0.result;
        }
      }
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "XFLabel12")), "Visible")), true)), async () => ($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true)))))) {
        if ($.truthy($.eq(((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))]))), ((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditITN")), "Text"))])))))) {
          await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
          await $.stmt((await $.call(C, "showmessage", ["VÖEN və PİN Kod  eynidir  !"])));
          return L0.result;
        }
      }
      if ($.truthy(((await $.or_((await $.or_((await $.or_(((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 3])), "AZE")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))), async () => ((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "AA")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 7))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "MY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6))))))), async () => ((await $.and_((await $.and_((await $.and_(($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 5)))), async () => ($.eq((await $.call(C, "Copy", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text")), 1, 2])), "DY")))), async () => ($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), 6)))))))))) {
        await $.stmt((await $.call(C, "ShowMessage", ["  FIN-i düzgün daxil edin  !"])));
        $.abort();
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), (-(1))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "showmessage", ["  Kateqoriyası sahəsi Kodu  daxil edilməlidir!"])));
        return L0.result;
      }
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
    L0["a"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_inn", (await $.mv((await $.v(C, "EditITN")), "Text"))]]));
    if ($.truthy($.ne(L0["a"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["a"]])), " -ID i üçün  "), (await $.mv((await $.v(C, "EditITN")), "Text"))), "  VÖEN mövcuddur!")])));
      return L0.result;
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
    L0["b"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passpin", (await $.mv((await $.v(C, "EditPINCode1")), "Text"))]]));
    if ($.truthy($.ne(L0["b"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["b"]])), " -ID i üçün "), (await $.mv((await $.v(C, "EditPINCode1")), "Text"))), "  Pinkod mövcuddur!")])));
      return L0.result;
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "XFLabel41")), "Visible")), true)), async () => ($.eq((await $.mv((await $.v(C, "XFLabel42")), "Visible")), true)))))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false)))))) {
      await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
      await $.stmt((await $.call(C, "ShowMessage", [" Rezident və ya  Qeyr Rezident Sahəsi seçilməyib  ! "])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel8")), "Visible")), true))) {
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false)), async () => ($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false)))))) {
    } else {
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Text")), "")))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
        return L0.result;
      } else {
        if ($.truthy($.ne(($.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text")))), ""))) {
          L0["c"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passer_panum", $.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"))]]));
          if ($.truthy($.ne(L0["c"], (-(1))))) {
            await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add($.add($.add((await $.call(C, "inttostr", [L0["c"]])), " -ID i üçün "), (await $.mv((await $.v(C, "EditDocSerie1")), "Text"))), " /"), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), "  Sənədin  seryasi mövcuddur!")])));
            return L0.result;
          }
        }
      }
    }
  }
  await $.mset((await $.v(C, "XFBitcontinue")), "Visible", false);
  await $.mset((await $.v(C, "XFCust")), "Visible", true);
  await $.mset((await $.v(C, "XFBitBtnHMS")), "Visible", true);
  await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", false);
  await $.mset((await $.v(C, "XFButton4")), "Visible", false);
  await $.mset((await $.v(C, "XFButton5")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type1")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")));
  if ($.truthy($.eq((await $.v(C, "cntr_nam")), true))) {
    await $.mset((await $.v(C, "CBoxCitizenship")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Odscountries")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_rescount")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
    await $.mset((await $.v(C, "DBCBox_Citizenship2")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Citizenship2")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
    await $.mset((await $.v(C, "DBCBox_Citizenship3")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Citizenship3")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_rescount1")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
    await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_rescount2")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
    await $.mset((await $.v(C, "CBoxBirthState")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Odscountries1")), "Lookup", ["CNTR_NAME", "Azərbaycan", "CNTR_NAME"])));
    await $.mset((await $.v(C, "CBoxAddressState")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Odscountries2")), "Lookup", ["CNTR_NAME", "Azərbaycan", "CNTR_NAME"])));
    await $.mset((await $.v(C, "Fakt_Adrs_State")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODSFakt_Adrs_Country")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
    await $.mset((await $.v(C, "CountryByConctType")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "CountryByConctType")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
  } else {
    await $.mset((await $.v(C, "CBoxCitizenship")), "KeyValue", "");
    await $.mset((await $.v(C, "DBCBox_Citizenship2")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Citizenship2")), "Lookup", ["CNTR_NAME", "Yox", "id"])));
    await $.mset((await $.v(C, "DBCBox_Citizenship3")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_rescount2")), "Lookup", ["CNTR_NAME", "Yox", "id"])));
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_rescount")), "Lookup", ["CNTR_NAME", "Yox", "id"])));
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_rescount1")), "Lookup", ["CNTR_NAME", "Yox", "id"])));
    await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_rescount2")), "Lookup", ["CNTR_NAME", "Yox", "id"])));
  }
  await $.mset((await $.v(C, "DBLookupCombobiflas")), "Text", "Xeyr");
  await $.mset((await $.v(C, "DBLookupComb_borrower_bad")), "Text", "Xeyr");
  { const $t170 = (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex"));
    if ($.eq($t170, 5)) {
      await $.mcall((await $.v(C, "TabSheet13")), "Show", []);
    }
    else if ($.eq($t170, 0)) {
      await $.mcall((await $.v(C, "TabSheet8")), "Show", []);
    }
    else if ($.eq($t170, 1) || $.eq($t170, 2) || $.eq($t170, 3) || $.eq($t170, 4)) {
      await $.mcall((await $.v(C, "TabSheet1")), "Show", []);
    }
  }
  { const $t171 = (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex"));
    if ($.eq($t171, 0) || $.eq($t171, 1) || $.eq($t171, 2)) {
      await $.mcall((await $.v(C, "Pep_change")), "ShowModal", []);
    }
  }
  await $.stmt((await $.call(C, "MainGridDblClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton10Click", async function XFButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [" Əlaqə ləğv olunsunmu   ?", ["c_custid2"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["del_customers_bank_stetment", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_bank_stetment")), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_bank_stetment")), "FieldByName", ["custid1"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_bank_stetment")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton11Click", async function XFButton11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton12Click", async function XFButton12Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton13Click", async function XFButton13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton14Click", async function XFButton14Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton15Click", async function XFButton15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton18Click", async function XFButton18Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "custid": 0, "custid2": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS2")), "FieldByName", ["id"])), "AsInteger")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 0)))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["  Fiziki şəxsə vəzifə vermək olmaz   !"])));
    return L0.result;
  }
  L0["custid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["add_cust_relations", [L0["custid"], L0["custid2"]]])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Pozition")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Locate", ["id", L0["custid"], []])));
  await $.mset((await $.v(C, "XFButton18")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton19Click", async function XFButton19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "custid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [" Əlaqə ləğv olunsunmu   ?", ["c_custid2"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["del_customers_relations", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Pozition")), "FieldByName", ["custid"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Pozition")), "FieldByName", ["custid2"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Pozition")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Locate", ["id", L0["custid"], []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [" Silinsin?", ["c_id"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["del_customers_prosess", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin1", ["NominalCustomers.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ShellExecuteA", [(await $.v(C, "Handle")), "open", "NewProject.chm", null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "ButtonMeyarClick", async function ButtonMeyarClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cust_quality": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Formid_quality", (await $.mcall((await $.v(C, "TFormid_quality")), "create", [Self])));
  {
    const $t172 = (await $.wobj(C, "DataModPCustService"));
    await $.mcall((await $.wv([$t172], "Ods_cust_id_quality1", C, false)), "close", []);
    await $.mcall((await $.wv([$t172], "Ods_custid_quality", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t172], "Ods_custid_quality", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t172], "ODS_Customers_Phys_FS", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.wv([$t172], "Ods_cust_id_quality1", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t172], "ODS_Customers_Phys_FS", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t172], "Ods_custid_quality", C, false)), "open", []);
    await $.mcall((await $.wv([$t172], "Ods_cust_id_quality1", C, false)), "open", []);
  }
  await $.mcall((await $.v(C, "Formid_quality")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton6Click", async function XFButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cust_elaqe_Transaction", 1);
  await $.set(C, "ins_elaqe", 1);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCustomers"))]))))) {
    await $.set(C, "FormCustomers", (await $.mcall((await $.v(C, "TFormCustomers")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormCustomers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton7Click", async function XFButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cust_elaqe_Transaction", 1);
  await $.set(C, "ins_elaqe", 2);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCustomers"))]))))) {
    await $.set(C, "FormCustomers", (await $.mcall((await $.v(C, "TFormCustomers")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormCustomers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton8Click", async function XFButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "cust_elaqe_Transaction", 1);
  await $.set(C, "ins_elaqe", 3);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCustomers"))]))))) {
    await $.set(C, "FormCustomers", (await $.mcall((await $.v(C, "TFormCustomers")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormCustomers")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFButton9Click", async function XFButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [" Əlaqə ləğv olunsunmu   ?", ["c_custid2"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["del_customers_grop", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_cust_group_info")), "FieldByName", ["custid1"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_cust_group_info")), "FieldByName", ["custid2"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ods_cust_group_info")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFCustClick", async function XFCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "t1", 1);
  await $.stmt($.call(C, "CustAdd", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFRadioGroup1Click", async function XFRadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t173 = (await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "XFRadioGroup1")), "ItemIndex"));
    if ($.eq($t173, 0)) {
      {
        const $t174 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProc"));
        await $.stmt($.wcall([$t174], "close", [], C));
        await $.stmt((await $.wcall([$t174], "SetVariable", ["custtype", 1], C)));
        await $.stmt($.wcall([$t174], "open", [], C));
      }
    }
    else if ($.eq($t173, 1)) {
      {
        const $t175 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_BusProc"));
        await $.stmt($.wcall([$t175], "close", [], C));
        await $.stmt((await $.wcall([$t175], "SetVariable", ["custtype", 2], C)));
        await $.stmt($.wcall([$t175], "open", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFRadioGroupCust_type1Click", async function XFRadioGroupCust_type1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t176 = (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex"));
    if ($.eq($t176, 1) || $.eq($t176, 2) || $.eq($t176, 3) || $.eq($t176, 4)) {
      {
        const $t177 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_WORK_VID_SOB"));
        { const $t178 = await $.iset((await $.wv([$t177], "Sql", C, false)), [4], ""); if ($t178 !== undefined) { await $.wset([$t177], "Sql", $t178, C); } }
        await $.stmt($.wcall([$t177], "Close", [], C));
        { const $t179 = await $.iset((await $.wv([$t177], "SQl", C, false)), [4], $.add((await $.idx((await $.wv([$t177], "sql", C, false)), [4])), "and cust_type in(-1,1)")); if ($t179 !== undefined) { await $.wset([$t177], "SQl", $t179, C); } }
        await $.stmt($.wcall([$t177], "Open", [], C));
      }
    }
  }
  { const $t180 = (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex"));
    if ($.eq($t180, 0)) {
      {
        const $t181 = (await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData"));
        { const $t182 = await $.iset((await $.wv([$t181], "Sql", C, false)), [4], ""); if ($t182 !== undefined) { await $.wset([$t181], "Sql", $t182, C); } }
        await $.stmt($.wcall([$t181], "Close", [], C));
        { const $t183 = await $.iset((await $.wv([$t181], "SQl", C, false)), [4], $.add((await $.idx((await $.wv([$t181], "sql", C, false)), [4])), "and cust_type in(-1,0)")); if ($t183 !== undefined) { await $.wset([$t181], "SQl", $t183, C); } }
        await $.stmt($.wcall([$t181], "Open", [], C));
      }
    }
    else if ($.eq($t180, 1) || $.eq($t180, 2) || $.eq($t180, 3) || $.eq($t180, 4)) {
      {
        const $t184 = (await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData"));
        { const $t185 = await $.iset((await $.wv([$t184], "Sql", C, false)), [4], ""); if ($t185 !== undefined) { await $.wset([$t184], "Sql", $t185, C); } }
        await $.stmt($.wcall([$t184], "Close", [], C));
        { const $t186 = await $.iset((await $.wv([$t184], "SQl", C, false)), [4], $.add((await $.idx((await $.wv([$t184], "sql", C, false)), [4])), "and cust_type in(-1,1)")); if ($t186 !== undefined) { await $.wset([$t184], "SQl", $t186, C); } }
        await $.stmt($.wcall([$t184], "Open", [], C));
      }
    }
  }
  { const $t187 = (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex"));
    if ($.eq($t187, 0) || $.eq($t187, 5)) {
      await $.stmt($.call(C, "Messaj_jur", []));
      await $.mset((await $.v(C, "XFLaEditITN")), "Enabled", true);
      await $.mset((await $.v(C, "EditITN")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", false);
      await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", false);
      await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", false);
      await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", false);
      await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", false);
      await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", false);
      await $.mset((await $.v(C, "EditPINCode1")), "Enabled", false);
      await $.mcall((await $.v(C, "EditPINCode1")), "clear", []);
    }
    else if ($.eq($t187, 1) || $.eq($t187, 4)) {
      await $.stmt($.call(C, "Messaj_fs_phys_nom", []));
      await $.mset((await $.v(C, "EditITN")), "Enabled", false);
      await $.mset((await $.v(C, "XFLaEditITN")), "Enabled", false);
      await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", true);
      await $.mset((await $.v(C, "EditPINCode1")), "Enabled", true);
    }
    else if ($.eq($t187, 2)) {
      await $.stmt($.call(C, "Messaj_fs_phys_nom", []));
      await $.mset((await $.v(C, "CBoxCitizenship")), "KeyValue", 1);
      await $.mset((await $.v(C, "DBCBox_Citizenship2")), "KeyValue", 1);
      await $.mset((await $.v(C, "DBCBox_Citizenship3")), "KeyValue", 1);
      await $.mset((await $.v(C, "Fakt_Adrs_State")), "KeyValue", 1);
      await $.mset((await $.v(C, "CountryByConctType")), "KeyValue", 1);
      await $.mset((await $.v(C, "EditITN")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaEditITN")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", true);
      await $.mset((await $.v(C, "EditPINCode1")), "Enabled", true);
      await $.mcall((await $.v(C, "EditPINCode1")), "clear", []);
      await $.mcall((await $.v(C, "EditITN")), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "XFRadioGroupCust_typeClick", async function XFRadioGroupCust_typeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t188 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t188, 1) || $.eq($t188, 2) || $.eq($t188, 3) || $.eq($t188, 4)) {
      {
        const $t189 = (await $.mv((await $.v(C, "DataModPCustService")), "Ods_WORK_VID_SOB"));
        { const $t190 = await $.iset((await $.wv([$t189], "Sql", C, false)), [4], ""); if ($t190 !== undefined) { await $.wset([$t189], "Sql", $t190, C); } }
        await $.stmt($.wcall([$t189], "Close", [], C));
        { const $t191 = await $.iset((await $.wv([$t189], "SQl", C, false)), [4], $.add((await $.idx((await $.wv([$t189], "sql", C, false)), [4])), "and cust_type in(-1,1)")); if ($t191 !== undefined) { await $.wset([$t189], "SQl", $t191, C); } }
        await $.stmt($.wcall([$t189], "Open", [], C));
      }
    }
  }
  { const $t192 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t192, 0)) {
      {
        const $t193 = (await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData"));
        { const $t194 = await $.iset((await $.wv([$t193], "Sql", C, false)), [2], ""); if ($t194 !== undefined) { await $.wset([$t193], "Sql", $t194, C); } }
        await $.stmt($.wcall([$t193], "Close", [], C));
        { const $t195 = await $.iset((await $.wv([$t193], "SQl", C, false)), [4], $.add((await $.idx((await $.wv([$t193], "sql", C, false)), [5])), "and cust_type in(-1,0)")); if ($t195 !== undefined) { await $.wset([$t193], "SQl", $t195, C); } }
        await $.stmt($.wcall([$t193], "Open", [], C));
      }
    }
    else if ($.eq($t192, 1) || $.eq($t192, 2) || $.eq($t192, 3) || $.eq($t192, 4)) {
      {
        const $t196 = (await $.mv((await $.v(C, "DataModPCustService")), "EstateTypeData"));
        { const $t197 = await $.iset((await $.wv([$t196], "Sql", C, false)), [2], ""); if ($t197 !== undefined) { await $.wset([$t196], "Sql", $t197, C); } }
        await $.stmt($.wcall([$t196], "Close", [], C));
        { const $t198 = await $.iset((await $.wv([$t196], "SQl", C, false)), [4], $.add((await $.idx((await $.wv([$t196], "sql", C, false)), [5])), "and cust_type in(-1,1)")); if ($t198 !== undefined) { await $.wset([$t196], "SQl", $t198, C); } }
        await $.stmt($.wcall([$t196], "Open", [], C));
      }
    }
  }
  { const $t199 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t199, 0)) {
      await $.stmt($.call(C, "Messaj_jur", []));
      await $.mset((await $.v(C, "XFLaEditITN")), "Enabled", true);
      await $.mset((await $.v(C, "EditITN")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", false);
      await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", false);
      await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", false);
      await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", false);
      await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", false);
      await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", false);
      await $.mset((await $.v(C, "EditPINCode1")), "Enabled", false);
      await $.mcall((await $.v(C, "EditPINCode1")), "clear", []);
      await $.mset((await $.v(C, "CBox")), "Enabled", true);
      await $.mset((await $.v(C, "ActionAreaCB")), "Enabled", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [11])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [12])), "TabVisible", false);
      await $.mset((await $.v(C, "XFRadioGroup1")), "Visible", false);
      await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Enabled", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [2])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [3])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [4])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [5])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [6])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [7])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [8])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [9])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [1])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [11])), "Visible", true);
    }
    else if ($.eq($t199, 1) || $.eq($t199, 4)) {
      await $.stmt($.call(C, "Messaj_fs_phys_nom", []));
      await $.mset((await $.v(C, "EditITN")), "Enabled", false);
      await $.mset((await $.v(C, "XFLaEditITN")), "Enabled", false);
      await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", true);
      await $.mset((await $.v(C, "EditPINCode1")), "Enabled", true);
      await $.mset((await $.v(C, "CBox")), "Enabled", false);
      await $.mset((await $.v(C, "ActionAreaCB")), "Enabled", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [11])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [12])), "TabVisible", false);
      await $.mset((await $.v(C, "XFRadioGroup1")), "Visible", false);
      await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Enabled", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [2])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [3])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [4])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [5])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [6])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [7])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [8])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [9])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [1])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [11])), "Visible", true);
    }
    else if ($.eq($t199, 2)) {
      await $.stmt($.call(C, "Messaj_fs_phys_nom", []));
      await $.mset((await $.v(C, "EditITN")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaEditITN")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", true);
      await $.mset((await $.v(C, "EditPINCode1")), "Enabled", true);
      await $.mset((await $.v(C, "CBox")), "Enabled", true);
      await $.mset((await $.v(C, "ActionAreaCB")), "Enabled", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [11])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [12])), "TabVisible", false);
      await $.mset((await $.v(C, "XFRadioGroup1")), "Visible", false);
      await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Enabled", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [2])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [3])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [4])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [5])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [6])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [7])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [8])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [9])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [1])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [11])), "Visible", true);
    }
    else if ($.eq($t199, 3)) {
      await $.stmt($.call(C, "Messaj_fs_phys_nom", []));
      await $.mset((await $.v(C, "EditITN")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaEditITN")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", true);
      await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", true);
      await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", true);
      await $.mset((await $.v(C, "EditPINCode1")), "Enabled", true);
      await $.mset((await $.v(C, "CBox")), "Enabled", true);
      await $.mset((await $.v(C, "ActionAreaCB")), "Enabled", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [11])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [12])), "TabVisible", false);
      await $.mset((await $.v(C, "XFRadioGroup1")), "Visible", true);
      await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Enabled", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [2])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [3])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [4])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [5])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [6])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [7])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [8])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [9])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [1])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [11])), "Visible", true);
    }
    else if ($.eq($t199, 5)) {
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [9])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [11])), "TabVisible", false);
      await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [12])), "TabVisible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [2])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [3])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [4])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [5])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [6])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [7])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [8])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [9])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [1])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "Columns")), "Items")), [11])), "Visible", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), "cust_name": $.copyArg(p2), "cust_id": $.copyArg(p3), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam", "cust_name", "cust_id"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"], L0["cust_name"], L0["cust_id"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam", "Cust_name", "Cust_ID"], "kind": "procedure", "ptypes": ["String", "String", "String", "integer"]});
  U.method("TPCustServiceForm", "XKS1Click", async function XKS1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominala  XÖHKS emeliyyatları etmek olmaz   !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Active")), false))) {
    await $.stmt((await $.call(C, "ShowMessage", ["       Heç bir məlumat seçilməyib     !"])));
    return L0.result;
  } else {
    await $.set(C, "CustID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asinteger")));
  }
  await $.set(C, "CustName", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Cust_name"])), "AsString")));
  await $.stmt((await $.call(C, "LoadPlugin", ["PcustXohks.bpl", "Main", (await $.v(C, "CustName")), (await $.v(C, "CustID"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Yaddasaxla1Click", async function Yaddasaxla1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Pozition")), "State")), (await $.v(C, "dsedit"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Pozition")), "Post", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPCustServiceForm", "Yenikreditinverilmsi1Click", async function Yenikreditinverilmsi1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_blackcust": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CommonDBGrid", (await $.mv((await $.v(C, "CreditFrm")), "MainGrid")));
  await $.set(C, "tr", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "Asstring")));
  if ($.truthy($.ne((await $.v(C, "tr")), ""))) {
    {
      const $t200 = (await $.mv((await $.v(C, "DataModPCustService")), "ods_cust_notes"));
      await $.stmt($.wcall([$t200], "close", [], C));
      await $.stmt((await $.wcall([$t200], "SetVariable", ["v_custid", (await $.wv([$t200], "tr", C, false))], C)));
      await $.stmt($.wcall([$t200], "open", [], C));
      if ($.truthy($.gt((await $.wv([$t200], "RecordCount", C, false)), 0))) {
        await $.stmt((await $.wcall([$t200], "ShowMessage", ["Diqqet Bu Musteri imtina olunmuşlar siyahısındadır"], C)));
        return L0.result;
      }
    }
    {
      const $t201 = (await $.wobj(C, "ods_custnote"));
      await $.stmt($.wcall([$t201], "close", [], C));
      await $.stmt((await $.wcall([$t201], "SetVariable", ["v_id", (await $.wv([$t201], "tr", C, false))], C)));
      await $.stmt($.wcall([$t201], "open", [], C));
      if ($.truthy($.gt((await $.wv([$t201], "RecordCount", C, false)), 0))) {
        await $.stmt((await $.wcall([$t201], "LoadPlugin3", ["Sb_General.bpl", "note", (await $.wv([$t201], "tr", C, false)), ""], C)));
      }
    }
    {
      const $t202 = (await $.wobj(C, "DataModPCustService"));
      const $t203 = (await $.wv([$t202], "CreditDSet", C, false));
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t202, $t203], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "asinteger")), 0))) {
        await $.mcall((await $.wv([$t202, $t203], "Pep_change", C, false)), "ShowModal", []);
      }
    }
    await $.stmt((await $.call(C, "LoadPlugin2", ["CM_RETIL.bpl", "", (await $.v(C, "tr"))])));
    if ($.truthy($.eq((await $.v(C, "cradd")), 1))) {
      {
        const $t204 = (await $.wobj(C, "DataModPCustService"));
        const $t205 = (await $.wv([$t204], "CreditDSet", C, false));
        if ($.truthy((await $.wv([$t204, $t205], "Active", C, false)))) {
          await $.stmt($.wcall([$t204, $t205], "close", [], C));
        }
        await $.stmt((await $.wcall([$t204, $t205], "SetVariable", [":custid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t204, $t205], "DataModPCustService", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "asinteger"))], C)));
        await $.stmt($.wcall([$t204, $t205], "open", [], C));
        await $.wset([$t204, $t205], "rtl_insert", 1, C);
        await $.mcall((await $.wv([$t204, $t205], "CreditFrm", C, false)), "ShowModal", []);
        await $.wset([$t204, $t205], "rtl_insert", 0, C);
      }
    }
  } else {
    await $.stmt((await $.call(C, "showmessage", ["    Heç bir məlumat seçilməyib  ! "])));
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
