// Generated from NominalCust.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NominalCust", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGrids", "ExtCtrls", "Grids", "XDBGrids", "StdCtrls", "XFSCtrls", "DBCtrls", "Mask", "DBCtrlsEh", "Buttons", "ComCtrls", "ToolWin", "PlatformDefaultStyleActnCtrls", "Menus", "ActnPopup", "db", "ExtDlgs", "ImgList", "jpeg", "NomCustDataImpl", "addcombobox"]);
  const C = [U];
  U.defClass("ENoDepositSelected", "Exception", {}, {});
  U.defClass("TNomCust", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet7": {"name": "TabSheet7", "type": "TTabSheet"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanelteyp": {"name": "XFPanelTeyp", "type": "TXFPanel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "editid": {"name": "EditID", "type": "TEdit"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xflabel41": {"name": "XFLabel41", "type": "TXFLabel"}, "xflabel42": {"name": "XFLabel42", "type": "TXFLabel"}, "xflacboxdoctype1": {"name": "XFLaCBoxDocType1", "type": "TXFLabel"}, "xfladocser1": {"name": "XFLaDocSer1", "type": "TXFLabel"}, "rbtnnoresident": {"name": "RBtnNoResident", "type": "TXFRadioButton"}, "cboxdoctype1": {"name": "CBoxDocType1", "type": "TDBLookupComboBox"}, "editdocserie1": {"name": "EditDocSerie1", "type": "TEdit"}, "editdocnumber1": {"name": "EditDocNumber1", "type": "TEdit"}, "rbtnresident": {"name": "RBtnResident", "type": "TXFRadioButton"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xflaedititn": {"name": "XFLaEditITN", "type": "TXFLabel"}, "xflepincode1": {"name": "XFLEPINCode1", "type": "TXFLabel"}, "xflabel92": {"name": "XFLabel92", "type": "TXFLabel"}, "xfradiogroupcust_type": {"name": "XFRadioGroupCust_type", "type": "TXFRadioGroup"}, "edititn": {"name": "EditITN", "type": "TEdit"}, "editpincode1": {"name": "EditPINCode1", "type": "TEdit"}, "xfradiogroupcust_type1": {"name": "XFRadioGroupCust_type1", "type": "TXFRadioGroup"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "tabsheet8": {"name": "TabSheet8", "type": "TTabSheet"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "xflabel37": {"name": "XFLabel37", "type": "TXFLabel"}, "xflabel61": {"name": "XFLabel61", "type": "TXFLabel"}, "xflabel62": {"name": "XFLabel62", "type": "TXFLabel"}, "xflabel63": {"name": "XFLabel63", "type": "TXFLabel"}, "xflabel64": {"name": "XFLabel64", "type": "TXFLabel"}, "xflabel65": {"name": "XFLabel65", "type": "TXFLabel"}, "xflabel66": {"name": "XFLabel66", "type": "TXFLabel"}, "xflabel67": {"name": "XFLabel67", "type": "TXFLabel"}, "xflabel91": {"name": "XFLabel91", "type": "TXFLabel"}, "editfullname": {"name": "EditFullName", "type": "TEdit"}, "organizationtypecb": {"name": "OrganizationTypeCB", "type": "TComboBox"}, "branchcb": {"name": "BranchCB", "type": "TComboBox"}, "taxareacb": {"name": "TaXAreaCB", "type": "TComboBox"}, "editshort_name": {"name": "EditShort_name", "type": "TEdit"}, "dblc_incorp_cntr": {"name": "DBLC_INCORP_CNTR", "type": "TDBLookupComboBox"}, "dtp_ustav": {"name": "Dtp_Ustav", "type": "TDateTimePicker"}, "db_incorp_state": {"name": "DB_INCORP_STATE", "type": "TEdit"}, "incor_number": {"name": "incor_number", "type": "TEdit"}, "editbic": {"name": "EditBic", "type": "TEdit"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xflaeditfirstname": {"name": "XFLaEditFirstName", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflaeditpatronymic": {"name": "XFLaEditPatronymic", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflaeditlastname": {"name": "XFLaEditLastName", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel35": {"name": "XFLabel35", "type": "TXFLabel"}, "xflabel36": {"name": "XFLabel36", "type": "TXFLabel"}, "btnfullnamegenerator": {"name": "BtnFullNameGenerator", "type": "TSpeedButton"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xflabel72": {"name": "XFLabel72", "type": "TXFLabel"}, "xflabel73": {"name": "XFLabel73", "type": "TXFLabel"}, "xflabel86": {"name": "XFLabel86", "type": "TXFLabel"}, "editlastname": {"name": "EditLastName", "type": "TEdit"}, "editpatronymic": {"name": "EditPatronymic", "type": "TEdit"}, "editfirstname": {"name": "EditFirstName", "type": "TEdit"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "editshort_name1": {"name": "EditShort_name1", "type": "TEdit"}, "dbcbox_citizenship3": {"name": "DBCBox_Citizenship3", "type": "TDBLookupComboBox"}, "dbcbox_citizenship2": {"name": "DBCBox_Citizenship2", "type": "TDBLookupComboBox"}, "cboxcitizenship": {"name": "CBoxCitizenship", "type": "TComboBox"}, "tabsheet10": {"name": "TabSheet10", "type": "TTabSheet"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "xflacbox": {"name": "XFLaCBox", "type": "TXFLabel"}, "xflacboxgroup": {"name": "XFLaCBoxGroup", "type": "TXFLabel"}, "xflacombobox3": {"name": "XFLaComboBox3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel89": {"name": "XFLabel89", "type": "TXFLabel"}, "xflabel90": {"name": "XFLabel90", "type": "TXFLabel"}, "xflabel93": {"name": "XFLabel93", "type": "TXFLabel"}, "xflabel94": {"name": "XFLabel94", "type": "TXFLabel"}, "xflabel95": {"name": "XFLabel95", "type": "TXFLabel"}, "xflabel96": {"name": "XFLabel96", "type": "TXFLabel"}, "cbox": {"name": "CBox", "type": "TComboBox"}, "cboxgroup": {"name": "CBoxGroup", "type": "TComboBox"}, "combobox3": {"name": "ComboBox3", "type": "TComboBox"}, "actionareacb": {"name": "ActionAreaCB", "type": "TComboBox"}, "combobox_risk": {"name": "ComboBox_risk", "type": "TDBLookupComboBox"}, "dateti_samelydate": {"name": "DateTi_samelydate", "type": "TDBDateTimeEditEh"}, "comb_riskdescid": {"name": "Comb_riskdescid", "type": "TDBLookupComboBox"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xflacboxbirthcity": {"name": "XFLaCBoxBirthCity", "type": "TXFLabel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "xflacboxbirthstate": {"name": "XFLaCBoxBirthState", "type": "TXFLabel"}, "xflabel81": {"name": "XFLabel81", "type": "TXFLabel"}, "xflabel82": {"name": "XFLabel82", "type": "TXFLabel"}, "dtpickerbirthdate": {"name": "DTPickerBirthDate", "type": "TDateTimePicker"}, "cboxbirthstate": {"name": "CBoxBirthState", "type": "TDBLookupComboBox"}, "cboxbirthcity": {"name": "CBoxBirthCity", "type": "TDBLookupComboBox"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "xflabel80": {"name": "XFLabel80", "type": "TXFLabel"}, "xflabel83": {"name": "XFLabel83", "type": "TXFLabel"}, "xflabel84": {"name": "XFLabel84", "type": "TXFLabel"}, "editaddress": {"name": "EditAddress", "type": "TEdit"}, "cboxaddressstate": {"name": "CBoxAddressState", "type": "TDBLookupComboBox"}, "cboxaddresscity": {"name": "CBoxAddressCity", "type": "TDBLookupComboBox"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "xflabel50": {"name": "XFLabel50", "type": "TXFLabel"}, "xflabel68": {"name": "XFLabel68", "type": "TXFLabel"}, "xflabel69": {"name": "XFLabel69", "type": "TXFLabel"}, "xflabel70": {"name": "XFLabel70", "type": "TXFLabel"}, "xflabel71": {"name": "XFLabel71", "type": "TXFLabel"}, "fakt_adrs_state": {"name": "Fakt_Adrs_State", "type": "TDBLookupComboBox"}, "fakt_adrs_city": {"name": "Fakt_Adrs_City", "type": "TDBLookupComboBox"}, "zipfakt": {"name": "ZipFakt", "type": "TEdit"}, "editaddressfactical": {"name": "EditAddressFactical", "type": "TEdit"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xflacboxdoctype": {"name": "XFLaCBoxDocType", "type": "TXFLabel"}, "xfladocser": {"name": "XFLaDocSer", "type": "TXFLabel"}, "xflacboxdocplace": {"name": "XFLaCBoxDocPlace", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "xflabel29": {"name": "XFLabel29", "type": "TXFLabel"}, "xflabel74": {"name": "XFLabel74", "type": "TXFLabel"}, "xflabel75": {"name": "XFLabel75", "type": "TXFLabel"}, "xflabel85": {"name": "XFLabel85", "type": "TXFLabel"}, "xflabel87": {"name": "XFLabel87", "type": "TXFLabel"}, "editdocserie": {"name": "EditDocSerie", "type": "TEdit"}, "editdocnumber": {"name": "EditDocNumber", "type": "TEdit"}, "dtpickerdocdate": {"name": "DTPickerDocDate", "type": "TDateTimePicker"}, "dtpickerdocexpirydate": {"name": "DTPickerDocExpiryDate", "type": "TDateTimePicker"}, "cboxdoctype": {"name": "CBoxDocType", "type": "TDBLookupComboBox"}, "editpincode": {"name": "EditPINCode", "type": "TEdit"}, "issue_country1": {"name": "issue_country1", "type": "TDBLookupComboBox"}, "cboxdocplace5": {"name": "CBoxDocPlace5", "type": "TComboBox"}, "tabsheet11": {"name": "TabSheet11", "type": "TTabSheet"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xflabel38": {"name": "XFLabel38", "type": "TXFLabel"}, "xflabel39": {"name": "XFLabel39", "type": "TXFLabel"}, "xflabel40": {"name": "XFLabel40", "type": "TXFLabel"}, "xflabel43": {"name": "XFLabel43", "type": "TXFLabel"}, "xflabel44": {"name": "XFLabel44", "type": "TXFLabel"}, "xflabel45": {"name": "XFLabel45", "type": "TXFLabel"}, "xflabel46": {"name": "XFLabel46", "type": "TXFLabel"}, "xflabel47": {"name": "XFLabel47", "type": "TXFLabel"}, "xflabel48": {"name": "XFLabel48", "type": "TXFLabel"}, "xflabel49": {"name": "XFLabel49", "type": "TXFLabel"}, "xflabel51": {"name": "XFLabel51", "type": "TXFLabel"}, "xflabel52": {"name": "XFLabel52", "type": "TXFLabel"}, "xflabel54": {"name": "XFLabel54", "type": "TXFLabel"}, "xflabel55": {"name": "XFLabel55", "type": "TXFLabel"}, "xflabel56": {"name": "XFLabel56", "type": "TXFLabel"}, "xflabel57": {"name": "XFLabel57", "type": "TXFLabel"}, "xflabel58": {"name": "XFLabel58", "type": "TXFLabel"}, "xflabel59": {"name": "XFLabel59", "type": "TXFLabel"}, "xflabel60": {"name": "XFLabel60", "type": "TXFLabel"}, "xflabel23": {"name": "XFLabel23", "type": "TXFLabel"}, "xflabel53": {"name": "XFLabel53", "type": "TXFLabel"}, "xflabel88": {"name": "XFLabel88", "type": "TXFLabel"}, "address_type": {"name": "Address_type", "type": "TDBLookupComboBox"}, "citybyconcttype": {"name": "CityByConctType", "type": "TDBLookupComboBox"}, "countrybyconcttype": {"name": "CountryByConctType", "type": "TDBLookupComboBox"}, "dbedit_countrycode": {"name": "DBEdit_CountryCode", "type": "TDBEdit"}, "tph_country_prefix": {"name": "tph_country_prefix", "type": "TDBLookupComboBox"}, "tph_contact_type": {"name": "tph_contact_type", "type": "TDBLookupComboBox"}, "tph_communication_type": {"name": "tph_communication_type", "type": "TDBLookupComboBox"}, "db_tph_adress": {"name": "db_tph_adress", "type": "TEdit"}, "db_tph_zip": {"name": "DB_tph_zip", "type": "TEdit"}, "db_tph_number": {"name": "Db_tph_number", "type": "TEdit"}, "db_tph_extension": {"name": "Db_tph_extension", "type": "TEdit"}, "db_tph_state": {"name": "db_tph_state", "type": "TEdit"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit_url": {"name": "Edit_url", "type": "TEdit"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "xflabel22": {"name": "XFLabel22", "type": "TXFLabel"}, "xflacboxgender": {"name": "XFLaCBoxGender", "type": "TXFLabel"}, "xflacboxfamstatus": {"name": "XFLaCBoxFamStatus", "type": "TXFLabel"}, "editphonemob": {"name": "EditPhoneMob", "type": "TEdit"}, "editphonecity": {"name": "EditPhoneCity", "type": "TEdit"}, "cboxgender": {"name": "CBoxGender", "type": "TComboBox"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TComboBox"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xflabel76": {"name": "XFLabel76", "type": "TXFLabel"}, "xflabel77": {"name": "XFLabel77", "type": "TXFLabel"}, "xflabel78": {"name": "XFLabel78", "type": "TXFLabel"}, "xflabel79": {"name": "XFLabel79", "type": "TXFLabel"}, "work_place": {"name": "Work_Place", "type": "TEdit"}, "work_post": {"name": "Work_Post", "type": "TEdit"}, "work_address": {"name": "Work_Address", "type": "TEdit"}, "work_phone": {"name": "Work_Phone", "type": "TEdit"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "memonotes": {"name": "MemoNotes", "type": "TMemo"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xflabel30": {"name": "XFLabel30", "type": "TXFLabel"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "xflabel31": {"name": "XFLabel31", "type": "TXFLabel"}, "xflabel32": {"name": "XFLabel32", "type": "TXFLabel"}, "xflabel33": {"name": "XFLabel33", "type": "TXFLabel"}, "xflabel34": {"name": "XFLabel34", "type": "TXFLabel"}, "image1": {"name": "Image1", "type": "TImage"}, "image2": {"name": "Image2", "type": "TImage"}, "image4": {"name": "Image4", "type": "TImage"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfcust": {"name": "XFCust", "type": "TXFBitBtn"}, "xfbitcontinue": {"name": "XFBitcontinue", "type": "TXFBitBtn"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "labelsamelydate": {"name": "LabelSamelyDate", "type": "TXFLabel"}, "popupcustomers": {"name": "PopUpCustomers", "type": "TPopupActionBar"}, "custsearch1": {"name": "CustSearch1", "type": "TMenuItem"}, "custadd1": {"name": "CustAdd1", "type": "TMenuItem"}, "custedit1": {"name": "CustEdit1", "type": "TMenuItem"}, "custclose1": {"name": "CustClose1", "type": "TMenuItem"}, "custclear1": {"name": "CustClear1", "type": "TMenuItem"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "cus_imagelist": {"name": "Cus_ImageList", "type": "TImageList"}, "openpicturedialog1": {"name": "OpenPictureDialog1", "type": "TOpenPictureDialog"}, "image3": {"name": "Image3", "type": "TImage"}}, {});
  U.init(async () => {
    U.var_("NomCust", null, "TNomCust");
    U.var_("Path", '', "String");
    U.var_("Path_B", '', "String");
    U.var_("tg", 0, "integer");
    U.var_("risk_descPERIOD", 0, "integer");
    U.var_("ConvertNominalToCust", false, "Boolean");
    U.var_("CommonGrid", null, "TXDBGrid");
  });
  U.method("TNomCust", "Timer1Timer", async function Timer1Timer(Self, p0) {
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
  U.func("Get_SelectedContID", async function Get_SelectedContID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "IsNull")))) {
    throw $.raise((await $.mcall((await $.v(C, "ENoDepositSelected")), "Create", ["Belə müştəri yoxdur !"])));
  }
  L0["result"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonGrid")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("GetPath", async function GetPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "imagespath": ''};
  L0["imagespath"] = (await $.call(C, "Format", ["%s\\..\\Env\\Customers", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))]]));
  await $.set(C, "Path", (await $.call(C, "Format", ["%s\\temp.jpg", [L0["imagespath"]]])));
  await $.set(C, "Path_B", (await $.call(C, "Format", ["%s\\blank.jpg", [L0["imagespath"]]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Fill_Edit", async function Fill_Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "f": null};
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "CustNomData")), "DScustimageStamp")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "NomCust")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimageStamp")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t1) => { L0["f"] = $t1; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t2) => { L0["f"] = $t2; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t3) => { L0["f"] = $t3; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "NomCust")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t4) => { L0["f"] = $t4; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "NomCust")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "CustNomData")), "DScustimageCUSTSIGN")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "NomCust")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimageCUSTSIGN")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t5) => { L0["f"] = $t5; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "NomCust")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "NomCust")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "CustNomData")), "DScustimagePhoto")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "NomCust")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimagephoto")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t9) => { L0["f"] = $t9; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t11) => { L0["f"] = $t11; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "NomCust")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t12) => { L0["f"] = $t12; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "NomCust")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "NomCust")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNomCust", "BtnFullNameGeneratorClick", async function BtnFullNameGeneratorClick(Self, p0) {
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
  U.method("TNomCust", "CBoxDocType1CloseUp", async function CBoxDocType1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CustNomData")), "odsPassDeps")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "odsPassDeps")), "SetVariable", ["v_doctype", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "CustNomData")), "odsPassDeps")), "Open", []);
  if ($.truthy($.ne((await $.v(C, "tg")), 1))) {
    await $.mcall((await $.mv((await $.v(C, "NomCust")), "CBoxDocPlace5")), "Clear", []);
    await $.stmt((await $.call(C, "combobox_add", [(await $.mv((await $.v(C, "CustNomData")), "odsPassDeps")), (await $.mv((await $.v(C, "NomCust")), "CBoxDocPlace5")), "NAME"])));
  }
  if ($.truthy($.not(((await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["Series"])), "isnull")))))) {
    await $.mset((await $.mv((await $.v(C, "NomCust")), "EditDocSerie")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["Series"])), "AsString")));
  }
  { const $t13 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["FORDOCTYPES"])), "AsInteger"));
    if ($.eq($t13, 0)) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DS_issue_country")), "Locate", ["SYMB", "AZ", [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
      await $.mset((await $.mv((await $.v(C, "NomCust")), "issue_country1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DS_issue_country")), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.mv((await $.v(C, "NomCust")), "issue_country1")), "Enabled", false);
    }
    else if ($.eq($t13, 1)) {
      await $.mset((await $.mv((await $.v(C, "NomCust")), "issue_country1")), "Enabled", true);
    }
  }
  await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["name"])), "AsString"))))) {
    await $.mset((await $.v(C, "EditDocSerie1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["series"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "CBoxDocTypeCloseUp", async function CBoxDocTypeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", (await $.mv((await $.v(C, "CBoxDocType")), "KeyValue")));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType")), "text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["name"])), "AsString"))))) {
    await $.mset((await $.v(C, "EditDocSerie")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["series"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "CustAdd", async function CustAdd(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "c_name": '', "c_open_dat": 0, "c_op_id": 0, "c_inn": '', "c_group_klie": 0, "c_close_dat": 0, "c_nerezident": 0, "c_vid_sob": 0, "c_prinad_kod": 0, "c_cust_type": 0, "c_cust_jur": null, "c_cust_phys": null, "c_cust_fs": null, "c_risk_categ": 0, "c_riskdescid": 0, "c_samelydate": 0, "c_bik": '', "c_category": 0, "c_address_typee": '', "d_name": '', "d_soname": '', "d_lastname": '', "d_passer": '', "d_birthday": 0, "d_birthplace": '', "d_fam_status": 0, "d_address": '', "d_fakt_adress": '', "d_phone_h": '', "d_e_mail": '', "d_sex": 0, "d_paspnum": '', "d_adrs_state": '', "d_city": '', "d_doc_type": 0, "d_birth_state": '', "d_phone_m": '', "d_paspdate": 0, "d_paspplace": '', "d_passpin": '', "d_citizenship": 0, "d_passexpire": 0, "d_note": '', "c_org_sob": 0, "c_sfera_dey": 0, "c_otrasl": 0, "c_nalog_kod": 0, "c_short_name": '', "ms": null, "a": 0, "b": 0, "c": 0, "c_dat_ustav": 0, "c_incorporation_number": '', "c_tph_contact_type": '', "c_tph_communication_type": '', "c_tph_number": '', "c_address_type": '', "c_address": '', "c_city": null, "c_country_code": null, "c_director_id": 0, "c_email": '', "c_url": '', "c_incorporation_state": '', "c_incorporation_cntr": null, "c_tph_extension": '', "c_tph_zip": '', "c_tph_country_prefix": '', "c_tph_state": '', "d_tph_contact_type": '', "d_tph_country": '', "d_tph_country_code": '', "d_tph_city": '', "d_tph_state": '', "d_tph_zip": '', "d_tph_country_prefix": '', "d_tph_adress": '', "d_tph_communication_type": '', "d_tph_number": '', "d_tph_extension": '', "d_contact_type": '', "d_url": '', "d_doc_country": 0, "d_citizenship2": 0, "d_citizenship3": 0, "d_fakt_country": 0, "d_fakt_city": 0, "d_fakt_zip": '', "d_work_place": '', "d_work_post": '', "d_work_adress": '', "d_work_phone": ''};
  L0["c_cust_type"] = (-(1));
  L0["c_nerezident"] = 1;
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.call(C, "ShowMessage", [" Yeni müştərini əlavə etmək üçün onun tipini seçin  !"])));
    return L0.result;
  }
  { const $t14 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t14, 0)) {
      if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditITN")), "Text"))])), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["VÖEN sahəsi boşdur"])));
        return L0.result;
      }
    }
    else if ($.eq($t14, 1) || $.eq($t14, 4)) {
      if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
        return L0.result;
      }
    }
    else if ($.eq($t14, 2)) {
      if ($.truthy((await $.and_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditITN")), "Text"))])), "")), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), "")))))) {
        await $.stmt((await $.call(C, "showmessage", ["VÖEN ve ya Pinkod sahəsi boşdur"])));
        return L0.result;
      }
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false)))))) {
    await $.stmt((await $.call(C, "ShowMessage", [" Rezident və ya  Qeyr Rezident Sahəsi seçilməyib  ! "])));
    return L0.result;
  }
  { const $t15 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t15, 0)) {
      if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFullName")), "Text"))])), ""))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adını daxil edin !"])));
        return L0.result;
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue")), (-(1))))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Hüquqi şəxsin mənsub olduğu ölkə sahəsi seçilməyib  !"])));
          return L0.result;
        } else {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "incor_number")), "text"))])), ""))) {
            await $.stmt((await $.call(C, "ShowMessage", ["Dövlət qeydiyyat nömrəsi sahəsi doldurulmayıb !"])));
            return L0.result;
          } else {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin risk kateqoriyası sahəsi doldurulmayıb !"])));
              return L0.result;
            } else {
              if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Comb_riskdescid")), "text"))])), ""))) {
                await $.stmt((await $.call(C, "showmessage", ["Müştərinin risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
                return L0.result;
              } else {
                if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
                  await $.stmt((await $.call(C, "showmessage", ["Müştərinin eyniləşdirmə tarixi daxil edilməlidir!"])));
                  return L0.result;
                } else {
                  if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
                    await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
                    return L0.result;
                  } else {
                    if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
                      await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
                      return L0.result;
                    } else {
                      if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
                        await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
                        return L0.result;
                      } else {
                        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
                          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
                          return L0.result;
                        } else {
                          if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
                            await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
                            return L0.result;
                          } else {
                            if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
                              await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
                              return L0.result;
                            } else {
                              if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
                                await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
                                return L0.result;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    else if ($.eq($t15, 1) || $.eq($t15, 2) || $.eq($t15, 4)) {
      if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditLastName")), "Text"))])), ""))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Soy adını daxil edin  !"])));
        return L0.result;
      } else {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFirstName")), "Text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adını daxil edin !"])));
          return L0.result;
        } else {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPatronymic")), "Text"))])), ""))) {
            await $.stmt((await $.call(C, "ShowMessage", ["Atasının adını daxil edin  !"])));
            return L0.result;
          } else {
            if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxCitizenship")), "text")), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Vətəndaşlığını daxil edin  !"])));
              return L0.result;
            } else {
              if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
                await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin risk kateqoriyası sahəsi doldurulmayıb !"])));
                return L0.result;
              } else {
                if ($.truthy($.eq((await $.mv((await $.v(C, "Comb_riskdescid")), "text")), ""))) {
                  await $.stmt((await $.call(C, "showmessage", ["Müştərinin risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
                  return L0.result;
                } else {
                  if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
                    await $.stmt((await $.call(C, "showmessage", ["Müştərinin eyniləşdirmə tarixi daxil edilməlidir!"])));
                    return L0.result;
                  } else {
                    if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue")), ""))) {
                      await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın ölkəsini daxil edin  !"])));
                      return L0.result;
                    } else {
                      if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue")), ""))) {
                        await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın şəhərini daxil edin  !"])));
                        return L0.result;
                      } else {
                        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue")), ""))) {
                          await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın ölkəsini daxil edin  !"])));
                          return L0.result;
                        } else {
                          if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue")), ""))) {
                            await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın şəhərini daxil edin  !"])));
                            return L0.result;
                          } else {
                            if ($.truthy($.eq((await $.mv((await $.v(C, "EditAddress")), "Text")), ""))) {
                              await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanı sahəsi doldurulmayib !"])));
                              return L0.result;
                            } else {
                              if ($.truthy($.eq((await $.mv((await $.v(C, "Fakt_Adrs_State")), "Text")), ""))) {
                                await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın ölkəsini daxil edin  !"])));
                                return L0.result;
                              } else {
                                if ($.truthy($.eq((await $.mv((await $.v(C, "Fakt_Adrs_City")), "Text")), ""))) {
                                  await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın şəhərini daxil edin  !"])));
                                  return L0.result;
                                } else {
                                  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType")), "Text")), ""))) {
                                    await $.stmt((await $.call(C, "showmessage", ["Sənədin növünü  daxil edin  !"])));
                                    return L0.result;
                                  } else {
                                    if ($.truthy($.eq((await $.mv((await $.v(C, "issue_country1")), "Text")), ""))) {
                                      await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi ölkəni daxil edin  !"])));
                                      return L0.result;
                                    } else {
                                      if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocPlace5")), "text")), ""))) {
                                        await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi yeri daxil edin  !"])));
                                        return L0.result;
                                      } else {
                                        if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
                                          await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
                                          return L0.result;
                                        } else {
                                          if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
                                            await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
                                            return L0.result;
                                          } else {
                                            if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
                                              await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
                                              return L0.result;
                                            } else {
                                              if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
                                                await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
                                                return L0.result;
                                              } else {
                                                if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
                                                  await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
                                                  return L0.result;
                                                } else {
                                                  if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
                                                    await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
                                                    return L0.result;
                                                  } else {
                                                    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
                                                      await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
                                                      return L0.result;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
    L0["a"] = (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_inn", (await $.mv((await $.v(C, "EditITN")), "Text"))]]));
    if ($.truthy($.ne(L0["a"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["a"]])), " -ID li Müştəri üçün  "), (await $.mv((await $.v(C, "EditITN")), "Text"))), "  VÖEN mövcuddur!")])));
      return L0.result;
    }
  }
  L0["c_inn"] = (await $.mv((await $.v(C, "EditITN")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxGroup")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGroup")), "Text")), []])));
    L0["c_group_klie"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_group_klie"] = 0;
  }
  if ($.truthy((await $.mv((await $.v(C, "RBtnResident")), "Checked")))) {
    L0["c_nerezident"] = 1;
  }
  if ($.truthy((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")))) {
    L0["c_nerezident"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBox")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "CBox")), "Text")), []])));
    L0["c_vid_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_vid_sob"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox3")), "Text")), []])));
    L0["c_prinad_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_prinad_kod"] = 0;
  }
  { const $t16 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t16, 0)) {
      L0["c_cust_type"] = 0;
      L0["c_cust_jur"] = 1;
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t16, 1)) {
      L0["c_cust_type"] = 1;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = 1;
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t16, 2)) {
      L0["c_cust_type"] = 2;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = 1;
    }
    else if ($.eq($t16, 3)) {
      await $.stmt((await $.call(C, "showmessage", ["Fiziki şəxs və fiziki sahibkara əlavə etmek olmaz"])));
      return L0.result;
    }
    else if ($.eq($t16, 4)) {
      L0["c_cust_type"] = 4;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
  }
  L0["d_name"] = (await $.mv((await $.v(C, "EditFirstName")), "Text"));
  L0["d_soname"] = (await $.mv((await $.v(C, "EditPatronymic")), "Text"));
  L0["d_lastname"] = (await $.mv((await $.v(C, "EditLastName")), "Text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "EditDocSerie")), "Text", "");
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie")), "Enabled")), false))) {
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie")), "Text")), ""))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
        return L0.result;
      } else {
        L0["d_passer"] = (await $.mv((await $.v(C, "EditDocSerie")), "Text"));
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "EditDocNumber")), "Text", "");
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false))) {
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber")), "Text")), ""))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
        return L0.result;
      } else {
        L0["d_paspnum"] = (await $.mv((await $.v(C, "EditDocNumber")), "Text"));
      }
    }
  }
  if ($.truthy($.ne(($.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text")))), ""))) {
    L0["c"] = (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passer_panum", $.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"))]]));
    if ($.truthy($.ne(L0["c"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add($.add($.add((await $.call(C, "inttostr", [L0["c"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditDocSerie1")), "Text"))), " /"), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), "  Sənədin  seryasi mövcuddur!")])));
      return L0.result;
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
    L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passpin", (await $.mv((await $.v(C, "EditPINCode1")), "Text"))]]));
    if ($.truthy($.ne(L0["b"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["b"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditPINCode1")), "Text"))), "  Pinkod mövcuddur!")])));
      return L0.result;
    }
  }
  L0["d_passpin"] = (await $.mv((await $.v(C, "EditPINCode")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditFullName")), "Text")), ""))) {
    L0["c_name"] = (await $.mv((await $.v(C, "EditFullName")), "Text"));
  } else {
    L0["c_name"] = $.add($.add($.add($.add((await $.mv((await $.v(C, "EditLastName")), "Text")), " "), (await $.mv((await $.v(C, "EditFirstName")), "Text"))), " "), (await $.mv((await $.v(C, "EditPatronymic")), "Text")));
  }
  L0["c_short_name"] = (await $.mv((await $.v(C, "EditShort_name")), "text"));
  L0["d_birthday"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPickerBirthDate")), "DateTime"))]))]));
  L0["d_birthplace"] = (await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxFamStatus")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), []])));
    L0["d_fam_status"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["d_fam_status"] = 0;
  }
  L0["d_address"] = (await $.mv((await $.v(C, "EditAddress")), "Text"));
  L0["d_fakt_adress"] = (await $.mv((await $.v(C, "EditAddressFactical")), "Text"));
  L0["d_phone_h"] = (await $.mv((await $.v(C, "EditPhoneCity")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxGender")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGender")), "Text")), []])));
    L0["d_sex"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["d_sex"] = 0;
  }
  L0["d_adrs_state"] = (await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue"));
  L0["d_city"] = (await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue"));
  L0["d_paspplace"] = (await $.mv((await $.v(C, "CBoxDocPlace5")), "text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
  } else {
    if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxDocType")), "KeyValue")), (-(1))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxDocType")), "Text")), []])));
      L0["d_doc_type"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"));
    } else {
      L0["d_doc_type"] = 0;
    }
  }
  L0["d_birth_state"] = (await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue"));
  L0["d_phone_m"] = (await $.mv((await $.v(C, "EditPhoneMob")), "Text"));
  L0["d_paspdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPickerDocDate")), "DateTime"))]))]));
  L0["d_note"] = (await $.mv((await $.v(C, "MemoNotes")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxCitizenship")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "Locate", ["CNTR_NAME", (await $.mv((await $.v(C, "CBoxCitizenship")), "Text")), []])));
    L0["d_citizenship"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["d_citizenship"] = 0;
  }
  L0["d_passexpire"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "DateTime"))]))]));
  if ($.truthy($.ne((await $.mv((await $.v(C, "OrganizationTypeCB")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "OrganizationTypeCB")), "Text")), []])));
    L0["c_org_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_org_sob"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "ActionAreaCB")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "ActionAreaCB")), "Text")), []])));
    L0["c_sfera_dey"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_sfera_dey"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox_risk")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
    L0["c_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_risk")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_risk_categ"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Comb_riskdescid")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUST_RISK_DESC")), "Locate", ["name", (await $.mv((await $.v(C, "Comb_riskdescid")), "Text")), []])));
    L0["c_riskdescid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUST_RISK_DESC")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_riskdescid"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "BranchCB")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "Locate", ["name", (await $.mv((await $.v(C, "BranchCB")), "Text")), []])));
    L0["c_otrasl"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_otrasl"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "TaXAreaCB")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "TaXAreaCB")), "Text")), []])));
    L0["c_nalog_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_nalog_kod"] = 0;
  }
  L0["d_doc_country"] = (await $.mv((await $.v(C, "issue_country1")), "KeyValue"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBCBox_Citizenship2")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_citizenship2"] = (await $.mv((await $.v(C, "DBCBox_Citizenship2")), "KeyValue"));
  } else {
    L0["d_citizenship2"] = 0;
  }
  if ($.truthy((await $.mv((await $.v(C, "DBCBox_Citizenship3")), "KeyValue")))) {
    L0["d_citizenship3"] = (await $.mv((await $.v(C, "DBCBox_Citizenship3")), "KeyValue"));
  } else {
    L0["d_citizenship3"] = 0;
  }
  L0["c_samelydate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTi_samelydate")), "Value"))]))]));
  L0["d_fakt_country"] = (await $.mv((await $.v(C, "Fakt_Adrs_State")), "KeyValue"));
  L0["d_fakt_city"] = (await $.mv((await $.v(C, "Fakt_Adrs_City")), "KeyValue"));
  L0["d_fakt_zip"] = (await $.mv((await $.v(C, "ZipFakt")), "Text"));
  L0["d_work_place"] = (await $.mv((await $.v(C, "Work_Place")), "Text"));
  L0["d_work_post"] = (await $.mv((await $.v(C, "Work_Post")), "Text"));
  L0["d_work_adress"] = (await $.mv((await $.v(C, "Work_Address")), "Text"));
  L0["d_work_phone"] = (await $.mv((await $.v(C, "Work_Phone")), "Text"));
  L0["c_dat_ustav"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "Dtp_Ustav")), "DateTime"))]))]));
  L0["c_incorporation_number"] = (await $.mv((await $.v(C, "incor_number")), "Text"));
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
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yeni Mustərini yaddaşa yazmaq istəyirsinizmi ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    { const $t17 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
      if ($.eq($t17, 0)) {
        L0["c_incorporation_number"] = (await $.mv((await $.v(C, "incor_number")), "Text"));
        L0["c_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
        L0["c_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
        L0["c_tph_number"] = (await $.mv((await $.v(C, "Db_tph_number")), "Text"));
        L0["c_address_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
        L0["c_address"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
        L0["c_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
        L0["c_country_code"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
        L0["c_dat_ustav"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "Dtp_Ustav")), "DateTime"))]))]));
        L0["c_email"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
        L0["c_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
        L0["c_incorporation_state"] = (await $.mv((await $.v(C, "DB_INCORP_STATE")), "Text"));
        L0["c_incorporation_cntr"] = (await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue"));
        L0["c_tph_extension"] = (await $.mv((await $.v(C, "Db_tph_extension")), "Text"));
        L0["c_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
        L0["c_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
        L0["c_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
        L0["c_bik"] = (await $.mv((await $.v(C, "editbic")), "Text"));
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
      else if ($.eq($t17, 1) || $.eq($t17, 2) || $.eq($t17, 3) || $.eq($t17, 4)) {
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
      }
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallProcedure", ["add_customers_prosess", [L0["c_name"], L0["c_short_name"], (await $.v(C, "date")), L0["c_inn"], L0["c_group_klie"], (await $.v(C, "date")), L0["c_nerezident"], L0["c_vid_sob"], L0["c_prinad_kod"], L0["c_cust_type"], L0["c_cust_jur"], L0["c_cust_phys"], L0["c_cust_fs"], L0["c_bik"], L0["c_risk_categ"], L0["c_riskdescid"], L0["c_samelydate"], L0["c_category"], L0["d_name"], L0["d_soname"], L0["d_lastname"], L0["d_passer"], L0["d_birthday"], L0["d_birthplace"], L0["d_fam_status"], L0["d_address"], L0["d_fakt_adress"], L0["d_doc_country"], L0["d_citizenship2"], L0["d_citizenship3"], L0["d_fakt_country"], L0["d_fakt_city"], L0["d_fakt_zip"], L0["d_work_place"], L0["d_work_post"], L0["d_work_adress"], L0["d_work_phone"], L0["d_phone_h"], L0["d_e_mail"], L0["d_sex"], L0["d_paspnum"], L0["d_adrs_state"], L0["d_city"], L0["d_doc_type"], L0["d_birth_state"], L0["d_phone_m"], L0["d_paspdate"], L0["d_paspplace"], L0["d_passpin"], L0["d_citizenship"], L0["d_passexpire"], L0["d_note"], L0["c_org_sob"], L0["c_sfera_dey"], L0["c_otrasl"], L0["c_nalog_kod"], L0["c_incorporation_number"], L0["c_tph_contact_type"], L0["c_tph_communication_type"], L0["c_tph_number"], L0["c_address_type"], L0["c_address"], L0["c_city"], L0["c_country_code"], L0["c_dat_ustav"], L0["c_email"], L0["c_url"], L0["c_incorporation_state"], L0["c_incorporation_cntr"], L0["c_tph_extension"], L0["c_tph_zip"], L0["c_tph_country_prefix"], L0["c_tph_state"], L0["d_tph_contact_type"], L0["d_tph_country"], L0["d_tph_country_code"], L0["d_tph_city"], L0["d_tph_state"], L0["d_tph_zip"], L0["d_tph_country_prefix"], L0["d_tph_adress"], L0["d_tph_communication_type"], L0["d_tph_number"], L0["d_tph_extension"], L0["d_contact_type"], L0["d_url"]]])));
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS2")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS2")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "Last", []);
    await $.mset((await $.v(C, "PageControl1")), "TabIndex", 0);
    await $.mset((await $.v(C, "XFCust")), "Visible", false);
    await $.mset((await $.v(C, "XFButton4")), "Visible", true);
    await $.mset((await $.v(C, "XFButton5")), "Visible", true);
    await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", true);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNomCust", "CustAdd1Click", async function CustAdd1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
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
  await $.mset((await $.v(C, "XFBitcontinue")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type1")), "Visible", true);
  await $.mset((await $.v(C, "XFButton4")), "Visible", false);
  await $.mset((await $.v(C, "XFButton5")), "Visible", false);
  await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "CustClear1Click", async function CustClear1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": '', "n": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit10")), "Clear", []);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Enabled", true);
  await $.mset((await $.v(C, "Comb_riskdescid")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "ComboBox_risk")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DateTi_samelydate")), "Value", (await $.v(C, "null")));
  await $.mset((await $.v(C, "LabelSamelyDate")), "Visible", false);
  await $.mcall((await $.v(C, "EditBic")), "Clear", []);
  await $.mset((await $.v(C, "CBox")), "Enabled", true);
  await $.mset((await $.v(C, "ActionAreaCB")), "Enabled", true);
  await $.mset((await $.v(C, "XFButton4")), "Visible", true);
  await $.mset((await $.v(C, "XFButton5")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type1")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "XFCust")), "Visible", false);
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
  await $.mset((await $.v(C, "CBoxCitizenship")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBoxGender")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBoxFamStatus")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBoxGroup")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBox")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "ComboBox3")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "EditDocSerie")), "Clear", []);
  await $.mcall((await $.v(C, "EditDocNumber")), "Clear", []);
  await $.mset((await $.v(C, "CBoxDocPlace5")), "text", "");
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
  await $.mset((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "Active", false);
  await $.mset((await $.v(C, "DTPickerDocDate")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_SYSDATE")), "FieldByName", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DTPickerDocExpiryDate")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_SYSDATE")), "FieldByName", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DTPickerBirthDate")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_SYSDATE")), "FieldByName", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "Dtp_Ustav")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_SYSDATE")), "FieldByName", ["tek_dat"])), "asdatetime")));
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
  await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", true);
  await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", true);
  await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", true);
  await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", true);
  await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", true);
  await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", true);
  await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", true);
  await $.mset((await $.v(C, "EditPINCode1")), "Enabled", true);
  await $.mset((await $.v(C, "XFBitBtn2")), "Visible", false);
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
  await $.mset((await $.v(C, "issue_country1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBCBox_Citizenship2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBCBox_Citizenship3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Fakt_Adrs_State")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Fakt_Adrs_City")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "ZipFakt")), "Clear", []);
  await $.mcall((await $.v(C, "Work_Place")), "Clear", []);
  await $.mcall((await $.v(C, "Work_Post")), "Clear", []);
  await $.mcall((await $.v(C, "Work_Address")), "Clear", []);
  await $.mcall((await $.v(C, "Work_Phone")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "CustClose1Click", async function CustClose1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4))) {
    await $.stmt((await $.call(C, "showmessage", ["Nominal müştəriyi bağlamaq  olmaz     !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [" Müştərini bağlamaq istəyirsinizmi    ? ", ["c_id"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallProcedure", ["close_customers_prosess", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "CustEdit1Click", async function CustEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_id": 0, "c_name": '', "c_open_dat": 0, "c_op_id": 0, "c_inn": '', "c_group_klie": 0, "c_close_dat": 0, "c_nerezident": 0, "c_vid_sob": 0, "c_prinad_kod": 0, "c_cust_type": 0, "c_cust_jur": null, "c_cust_phys": null, "c_cust_fs": null, "c_bik": '', "c_risk_categ": 0, "c_riskdescid": 0, "c_samelydate": 0, "c_category": 0, "d_name": '', "d_soname": '', "d_lastname": '', "d_passer": '', "d_birthday": 0, "d_birthplace": '', "d_fam_status": 0, "d_address": '', "d_fakt_adress": '', "d_phone_h": '', "d_e_mail": '', "d_sex": 0, "d_paspnum": '', "d_adrs_state": '', "d_city": '', "d_doc_type": 0, "d_birth_state": '', "d_phone_m": '', "d_paspdate": 0, "d_paspplace": '', "d_passpin": '', "d_citizenship": 0, "d_passexpire": 0, "d_note": '', "c_editid": 0, "c_org_sob": 0, "c_sfera_dey": 0, "c_otrasl": 0, "c_nalog_kod": 0, "c_short_name": '', "a": 0, "b": 0, "c": 0, "c_incorporation_number": '', "c_tph_contact_type": '', "c_tph_communication_type": '', "c_tph_number": '', "c_address_type": '', "c_address": '', "c_city": null, "c_country_code": null, "c_director_id": 0, "c_dat_ustav": 0, "c_email": '', "c_url": '', "c_incorporation_state": '', "c_incorporation_cntr": null, "c_tph_extension": '', "c_tph_zip": '', "c_tph_country_prefix": '', "c_tph_state": '', "d_tph_contact_type": '', "d_tph_country": null, "d_tph_country_code": '', "d_tph_city": null, "d_tph_state": '', "d_tph_zip": '', "d_tph_country_prefix": '', "d_tph_adress": '', "d_tph_communication_type": '', "d_tph_number": '', "d_tph_extension": '', "d_contact_type": '', "d_url": '', "d_doc_country": 0, "d_citizenship2": 0, "d_citizenship3": 0, "d_fakt_country": 0, "d_fakt_city": 0, "d_fakt_zip": '', "d_work_place": '', "d_work_post": '', "d_work_adress": '', "d_work_phone": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "tg", 1);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditID")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştəri seseçilməyib !"])));
    return L0.result;
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 3)), async () => ($.ne((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 3)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Fiziki şəxs və sahibkarı Fiziki şəxsə və sahibkara çevirmek olmaz !"])));
    return L0.result;
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 4)), async () => ($.eq((await $.v(C, "ConvertNominalToCust")), false)))))) {
    if ($.truthy($.in_((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), [0, 1, 2, 3]))) {
      await $.stmt((await $.call(C, "showmessage", ["Nominal müştəriyi Bankın müştərisinə çevirmək olmaz     !"])));
      return L0.result;
    }
  } else {
    if ($.truthy($.in_((await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), [0, 1, 2, 3]))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 4))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Bankın müştərisini Nominal Müştəriyə çevirmək olmaz! "])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.call(C, "ShowMessage", [" Müştərinin tipi seçilməyib !"])));
    return L0.result;
  }
  { const $t18 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t18, 0)) {
      if ($.truthy(($.eq((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
        await $.stmt((await $.call(C, "showmessage", ["VÖEN sahəsi boşdur"])));
        return L0.result;
      }
    }
    else if ($.eq($t18, 1) || $.eq($t18, 4)) {
      if ($.truthy(($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
        await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
        return L0.result;
      }
    }
    else if ($.eq($t18, 2)) {
      if ($.truthy((await $.and_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditITN")), "Text"))])), "")), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), "")))))) {
        await $.stmt((await $.call(C, "showmessage", ["VÖEN ve ya Pinkod sahəsi boşdur"])));
        return L0.result;
      }
    }
  }
  {
    const $t19 = (await $.mv((await $.v(C, "CustNomData")), "Ods_Customers_PhysFS_yoxlama"));
    await $.stmt($.wcall([$t19], "close", [], C));
    await $.stmt((await $.wcall([$t19], "SetVariable", ["ID_YOXLAMA", (await $.wcall([$t19], "strtoint", [(await $.mv((await $.wv([$t19], "EditID", C, false)), "Text"))], C))], C)));
    await $.stmt($.wcall([$t19], "Open", [], C));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["inn"])), "AsString"))))) {
    if ($.truthy(($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
      if ($.truthy(($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
        L0["a"] = (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_inn", (await $.mv((await $.v(C, "EditITN")), "Text"))]]));
      }
      if ($.truthy($.ne(L0["a"], (-(1))))) {
        await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["a"]])), " -ID li Müştəri üçün  "), (await $.mv((await $.v(C, "EditITN")), "Text"))), "  VÖEN mövcuddur!")])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["passpin"])), "AsString"))))) {
    if ($.truthy(($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passpin", (await $.mv((await $.v(C, "EditPINCode1")), "Text"))]]));
      if ($.truthy($.ne(L0["b"], (-(1))))) {
        await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["b"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditPINCode1")), "Text"))), "  Pinkod mövcuddur!")])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["passport"])), "AsString"))))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "EditDocNumber1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["passp_number"])), "AsString"))))) {
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false)), async () => ($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false)))))) {
      } else {
        if ($.truthy((await $.or_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text"))])), "")), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocNumber1")), "Text"))])), "")))))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
          return L0.result;
        } else {
          if ($.truthy($.ne(($.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text")))), ""))) {
            L0["c"] = (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passer_panum", $.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"))]]));
            if ($.truthy($.ne(L0["c"], (-(1))))) {
              await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add($.add($.add((await $.call(C, "inttostr", [L0["c"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditDocSerie1")), "Text"))), " /"), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), "  Sənədin  seryasi mövcuddur!")])));
              return L0.result;
            }
          }
        }
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "EditDocSerie")), "Text", "");
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false))) {
    } else {
      if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocSerie")), "Text"))])), ""))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb   !"])));
        return L0.result;
      } else {
        L0["d_passer"] = (await $.mv((await $.v(C, "EditDocSerie")), "Text"));
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "EditDocNumber")), "Text", "");
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false))) {
    } else {
      if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocNumber")), "Text"))])), ""))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb    !"])));
        return L0.result;
      } else {
        L0["d_paspnum"] = (await $.mv((await $.v(C, "EditDocNumber")), "Text"));
      }
    }
  }
  { const $t20 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t20, 0)) {
      if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFullName")), "Text"))])), ""))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adını daxil edin !"])));
        return L0.result;
      } else {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue")), (-(1))))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Hüquqi şəxsin mənsub olduğu ölkə sahəsi seçilməyib  !"])));
          return L0.result;
        } else {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "incor_number")), "text"))])), ""))) {
            await $.stmt((await $.call(C, "ShowMessage", ["Dövlət qeydiyyat nömrəsi sahəsi doldurulmayıb  !"])));
            return L0.result;
          } else {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin risk kateqoriyası sahəsi doldurulmayıb !"])));
              return L0.result;
            } else {
              if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Comb_riskdescid")), "text"))])), ""))) {
                await $.stmt((await $.call(C, "showmessage", ["Müştərinin risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
                return L0.result;
              } else {
                if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
                  await $.stmt((await $.call(C, "showmessage", ["Müştərinin eyniləşdirmə tarixi daxil edilməlidir!"])));
                  return L0.result;
                } else {
                  if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
                    await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
                    return L0.result;
                  } else {
                    if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
                      await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
                      return L0.result;
                    } else {
                      if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
                        await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
                        return L0.result;
                      } else {
                        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
                          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
                          return L0.result;
                        } else {
                          if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
                            await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
                            return L0.result;
                          } else {
                            if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
                              await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
                              return L0.result;
                            } else {
                              if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
                                await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
                                return L0.result;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    else if ($.eq($t20, 1) || $.eq($t20, 2) || $.eq($t20, 3) || $.eq($t20, 4)) {
      if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditLastName")), "Text"))])), ""))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Soy adını daxil edin  !"])));
        return L0.result;
      } else {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFirstName")), "Text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adını daxil edin !"])));
          return L0.result;
        } else {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPatronymic")), "Text"))])), ""))) {
            await $.stmt((await $.call(C, "ShowMessage", ["Atasının adını daxil edin  !"])));
            return L0.result;
          } else {
            if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxCitizenship")), "text")), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Vətəndaşlığını daxil edin  !"])));
              return L0.result;
            } else {
              if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
                await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin risk kateqoriyası sahəsi doldurulmayıb !"])));
                return L0.result;
              } else {
                if ($.truthy($.eq((await $.mv((await $.v(C, "Comb_riskdescid")), "text")), ""))) {
                  await $.stmt((await $.call(C, "showmessage", ["Müştərinin risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
                  return L0.result;
                } else {
                  if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
                    await $.stmt((await $.call(C, "showmessage", ["Müştərinin eyniləşdirmə tarixi daxil edilməlidir!"])));
                    return L0.result;
                  } else {
                    if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue")), ""))) {
                      await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın ölkəsini daxil edin  !"])));
                      return L0.result;
                    } else {
                      if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue")), ""))) {
                        await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın şəhərini daxil edin  !"])));
                        return L0.result;
                      } else {
                        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue")), ""))) {
                          await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın ölkəsini daxil edin  !"])));
                          return L0.result;
                        } else {
                          if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue")), ""))) {
                            await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın şəhərini daxil edin  !"])));
                            return L0.result;
                          } else {
                            if ($.truthy($.eq((await $.mv((await $.v(C, "EditAddress")), "Text")), ""))) {
                              await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanı sahəsi doldurulmayib !"])));
                              return L0.result;
                            } else {
                              if ($.truthy($.eq((await $.mv((await $.v(C, "Fakt_Adrs_State")), "Text")), ""))) {
                                await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın ölkəsini daxil edin  !"])));
                                return L0.result;
                              } else {
                                if ($.truthy($.eq((await $.mv((await $.v(C, "Fakt_Adrs_City")), "Text")), ""))) {
                                  await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın şəhərini daxil edin  !"])));
                                  return L0.result;
                                } else {
                                  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType")), "Text")), ""))) {
                                    await $.stmt((await $.call(C, "showmessage", ["Sənədin növünü  daxil edin  !"])));
                                    return L0.result;
                                  } else {
                                    if ($.truthy($.eq((await $.mv((await $.v(C, "issue_country1")), "Text")), ""))) {
                                      await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi ölkəni daxil edin  !"])));
                                      return L0.result;
                                    } else {
                                      if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocPlace5")), "text")), ""))) {
                                        await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi yeri daxil edin  !"])));
                                        return L0.result;
                                      } else {
                                        if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
                                          await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
                                          return L0.result;
                                        } else {
                                          if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
                                            await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
                                            return L0.result;
                                          } else {
                                            if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
                                              await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
                                              return L0.result;
                                            } else {
                                              if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
                                                await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
                                                return L0.result;
                                              } else {
                                                if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
                                                  await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
                                                  return L0.result;
                                                } else {
                                                  if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
                                                    await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
                                                    return L0.result;
                                                  } else {
                                                    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
                                                      await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
                                                      return L0.result;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  L0["c_name"] = (await $.mv((await $.v(C, "EditFullName")), "Text"));
  L0["c_inn"] = (await $.mv((await $.v(C, "EditITN")), "Text"));
  L0["c_short_name"] = (await $.mv((await $.v(C, "EditShort_name")), "Text"));
  L0["c_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditID")), "Text"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGroup")), "Text")), []])));
  L0["c_group_klie"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "FieldByName", ["ID"])), "AsInteger"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), true))) {
    L0["c_nerezident"] = 1;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), true))) {
    L0["c_nerezident"] = 0;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "CBox")), "Text")), []])));
  L0["c_vid_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "FieldByName", ["ID"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox3")), "Text")), []])));
  L0["c_prinad_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "FieldByName", ["ID"])), "AsInteger"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox_risk")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
    L0["c_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_risk")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["c_risk_categ"] = 0;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ods_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
  L0["c_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ods_risk")), "FieldByName", ["ID"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUST_RISK_DESC")), "Locate", ["name", (await $.mv((await $.v(C, "Comb_riskdescid")), "Text")), []])));
  L0["c_riskdescid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUST_RISK_DESC")), "FieldByName", ["ID"])), "AsInteger"));
  L0["c_samelydate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTi_samelydate")), "Value"))]))]));
  { const $t21 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t21, 0)) {
      L0["c_cust_type"] = 0;
      await $.mset((await $.v(C, "EditPINCode1")), "Text", "");
      L0["c_cust_jur"] = 1;
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t21, 1)) {
      L0["c_cust_type"] = 1;
      await $.mset((await $.v(C, "EditITN")), "Text", "");
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = 1;
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t21, 2)) {
      L0["c_cust_type"] = 2;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = 1;
    }
    else if ($.eq($t21, 3)) {
      L0["c_cust_type"] = 3;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = 1;
      L0["c_cust_fs"] = 1;
    }
    else if ($.eq($t21, 4)) {
      L0["c_cust_type"] = 4;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_phys"])), "AsInteger")), 1)), async () => ((await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_fs"])), "isnull"))))), async () => ($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 2)))))) {
    await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", 3);
    L0["c_cust_phys"] = 1;
    L0["c_cust_fs"] = 1;
    L0["c_cust_type"] = 3;
  }
  L0["d_name"] = (await $.mv((await $.v(C, "EditFirstName")), "Text"));
  L0["d_soname"] = (await $.mv((await $.v(C, "EditPatronymic")), "Text"));
  L0["d_lastname"] = (await $.mv((await $.v(C, "EditLastName")), "Text"));
  L0["d_birthday"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPickerBirthDate")), "DateTime"))]))]));
  L0["d_birthplace"] = (await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), []])));
  L0["d_fam_status"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "FieldByName", ["ID"])), "AsInteger"));
  L0["d_address"] = (await $.mv((await $.v(C, "EditAddress")), "Text"));
  L0["d_fakt_adress"] = (await $.mv((await $.v(C, "EditAddressFactical")), "Text"));
  L0["d_phone_h"] = (await $.mv((await $.v(C, "EditPhoneCity")), "Text"));
  L0["d_e_mail"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGender")), "Text")), []])));
  L0["d_sex"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "FieldByName", ["id"])), "AsInteger"));
  L0["d_adrs_state"] = (await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue"));
  L0["d_city"] = (await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
    L0["d_doc_type"] = 0;
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxDocType1")), "Text")), []])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxDocType1")), "Text")), []])));
    if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Text")), ""))) {
      L0["d_doc_type"] = 0;
    } else {
      L0["d_doc_type"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"));
    }
  }
  L0["d_birth_state"] = (await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue"));
  L0["d_phone_m"] = (await $.mv((await $.v(C, "EditPhoneMob")), "Text"));
  L0["d_paspdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPickerDocDate")), "DateTime"))]))]));
  L0["d_paspplace"] = (await $.mv((await $.v(C, "CBoxDocPlace5")), "text"));
  L0["d_passpin"] = (await $.mv((await $.v(C, "EditPINCode")), "Text"));
  L0["d_note"] = (await $.mv((await $.v(C, "MemoNotes")), "Text"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "Locate", ["CNTR_NAME", (await $.mv((await $.v(C, "CBoxCitizenship")), "Text")), []])));
  L0["d_citizenship"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "FieldByName", ["ID"])), "AsInteger"));
  L0["d_passexpire"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "DateTime"))]))]));
  L0["c_editid"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "EditID")), "Text"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "OrganizationTypeCB")), "Text")), []])));
  L0["c_org_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "ActionAreaCB")), "Text")), []])));
  L0["c_sfera_dey"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "Locate", ["name", (await $.mv((await $.v(C, "BranchCB")), "Text")), []])));
  L0["c_otrasl"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "TaxAreaCB")), "Text")), []])));
  L0["c_nalog_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "FieldByName", ["id"])), "AsInteger"));
  L0["d_doc_country"] = (await $.mv((await $.v(C, "issue_country1")), "KeyValue"));
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
  L0["c_dat_ustav"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "Dtp_Ustav")), "DateTime"))]))]));
  L0["c_incorporation_number"] = (await $.mv((await $.v(C, "incor_number")), "Text"));
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
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Dəyşikliki Yadda saxlanılsınmı ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    { const $t22 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
      if ($.eq($t22, 0)) {
        L0["c_incorporation_number"] = (await $.mv((await $.v(C, "incor_number")), "Text"));
        L0["c_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
        L0["c_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
        L0["c_tph_number"] = (await $.mv((await $.v(C, "Db_tph_number")), "Text"));
        L0["c_address_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
        L0["c_address"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
        L0["c_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
        L0["c_country_code"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
        L0["c_dat_ustav"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "Dtp_Ustav")), "DateTime"))]))]));
        L0["c_email"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
        L0["c_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
        L0["c_incorporation_state"] = (await $.mv((await $.v(C, "DB_INCORP_STATE")), "Text"));
        L0["c_incorporation_cntr"] = (await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue"));
        L0["c_tph_extension"] = (await $.mv((await $.v(C, "Db_tph_extension")), "Text"));
        L0["c_tph_zip"] = (await $.mv((await $.v(C, "DB_tph_zip")), "Text"));
        L0["c_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue"));
        L0["c_tph_state"] = (await $.mv((await $.v(C, "db_tph_state")), "Text"));
        L0["c_bik"] = (await $.mv((await $.v(C, "EditBic")), "text"));
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
      else if ($.eq($t22, 1) || $.eq($t22, 2) || $.eq($t22, 3) || $.eq($t22, 4)) {
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
      }
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallProcedure", ["edit_customers_prosess", [L0["c_id"], L0["c_name"], L0["c_short_name"], (await $.v(C, "date")), L0["c_inn"], L0["c_group_klie"], L0["c_nerezident"], L0["c_vid_sob"], L0["c_prinad_kod"], L0["c_cust_type"], L0["c_cust_jur"], L0["c_cust_phys"], L0["c_cust_fs"], L0["c_bik"], L0["c_risk_categ"], L0["c_riskdescid"], (await $.call(C, "DateTimeToStr", [L0["c_samelydate"]])), L0["c_category"], L0["d_name"], L0["d_soname"], L0["d_lastname"], L0["d_passer"], (await $.call(C, "DateTimeToStr", [L0["d_birthday"]])), L0["d_birthplace"], L0["d_fam_status"], L0["d_address"], L0["d_fakt_adress"], L0["d_doc_country"], L0["d_citizenship2"], L0["d_citizenship3"], L0["d_fakt_country"], L0["d_fakt_city"], L0["d_fakt_zip"], L0["d_work_place"], L0["d_work_post"], L0["d_work_adress"], L0["d_work_phone"], L0["d_phone_h"], L0["d_e_mail"], L0["d_sex"], L0["d_paspnum"], L0["d_adrs_state"], L0["d_city"], L0["d_doc_type"], L0["d_birth_state"], L0["d_phone_m"], (await $.call(C, "DateTimeToStr", [L0["d_paspdate"]])), L0["d_paspplace"], L0["d_passpin"], L0["d_citizenship"], (await $.call(C, "DateTimeToStr", [L0["d_passexpire"]])), L0["d_note"], L0["c_org_sob"], L0["c_sfera_dey"], L0["c_otrasl"], L0["c_nalog_kod"], L0["c_incorporation_number"], L0["c_tph_contact_type"], L0["c_tph_communication_type"], L0["c_tph_number"], L0["c_address_type"], L0["c_address"], L0["c_city"], L0["c_country_code"], L0["c_dat_ustav"], L0["c_email"], L0["c_url"], L0["c_incorporation_state"], L0["c_incorporation_cntr"], L0["c_tph_extension"], L0["c_tph_zip"], L0["c_tph_country_prefix"], L0["c_tph_state"], L0["d_tph_contact_type"], L0["d_tph_country"], L0["d_tph_country_code"], L0["d_tph_city"], L0["d_tph_state"], L0["d_tph_zip"], L0["d_tph_country_prefix"], L0["d_tph_adress"], L0["d_tph_communication_type"], L0["d_tph_number"], L0["d_tph_extension"], L0["d_contact_type"], L0["d_url"]]])));
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "Locate", ["id", L0["c_id"], []])));
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS2")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS2")), "Open", []);
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "CustSearch1Click", async function CustSearch1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_citizen_countries": '', "v_sex": '', "v_fam_status": '', "v_vid_sob": '', "v_group_klie": '', "v_prinad": '', "v_doc_types": '', "v_paspdate": '', "v_passexpire": '', "v_birthdate": '', "v_nerezident": '', "v_cust_type": '', "c_org_sob": '', "c_sfera_dey": '', "c_otrasl": '', "c_nalog_kod": '', "d": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "CBoxCitizenship")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "CBoxCitizenship")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "Locate", ["CNTR_NAME", (await $.mv((await $.v(C, "CBoxCitizenship")), "Text")), []])));
    L0["v_citizen_countries"] = $.add(" and nvl(citizenship,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_citizen_countries"] = "";
  }
  if ($.truthy(((await $.or_(($.ne((await $.mv((await $.v(C, "CBoxGender")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "CBoxGender")), "ItemIndex")), (-(1))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGender")), "Text")), []])));
    L0["v_sex"] = $.add(" and nvl(sex,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "FieldByName", ["ID"])), "asstring")));
  } else {
    L0["v_sex"] = "";
  }
  if ($.truthy(((await $.or_(($.ne((await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "CBoxFamStatus")), "ItemIndex")), (-(1))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), []])));
    L0["v_fam_status"] = $.add(" and nvl(fam_status,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_fam_status"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "CBoxGroup")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "CBoxGroup")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGroup")), "Text")), []])));
    L0["v_group_klie"] = $.add(" and nvl(group_klie,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_group_klie"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "CBox")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "CBox")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "CBox")), "Text")), []])));
    L0["v_vid_sob"] = $.add(" and nvl(vid_sob,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_vid_sob"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "OrganizationTypeCB")), "ItemIndex")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "OrganizationTypeCB")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "OrganizationTypeCB")), "Text")), []])));
    L0["c_org_sob"] = $.add(" and+ nvl(org_sob ,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["c_org_sob"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "ActionAreaCB")), "ItemIndex")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "ActionAreaCB")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "ActionAreaCB")), "Text")), []])));
    L0["c_sfera_dey"] = $.add(" and+ nvl(sfera_dey ,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["c_sfera_dey"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "BranchCB")), "ItemIndex")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "BranchCB")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "Locate", ["name", (await $.mv((await $.v(C, "BranchCB")), "Text")), []])));
    L0["c_otrasl"] = $.add(" and+ nvl(otrasl,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["c_otrasl"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "TaxAreaCb")), "ItemIndex")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "TaxAreaCb")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "locate", ["name", (await $.mv((await $.v(C, "TaxAreaCb")), "Text")), []])));
    L0["c_nalog_kod"] = $.add(" and+nvl(nalog_kod,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "FieldByName", ["ID"])), "asstring")));
  } else {
    L0["c_nalog_kod"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox3")), "Text")), []])));
    L0["v_prinad"] = $.add(" and nvl(prinad_kod,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "FieldByName", ["ID"])), "AsString")));
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
  { const $t23 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t23, 0)) {
      L0["v_cust_type"] = "and cust_type=0";
    }
    else if ($.eq($t23, 1)) {
      L0["v_cust_type"] = "and cust_phys =1";
    }
    else if ($.eq($t23, 2)) {
      L0["v_cust_type"] = "and cust_fs =1";
    }
    else if ($.eq($t23, 3)) {
      L0["v_cust_type"] = "and cust_type=3";
    }
    else if ($.eq($t23, 4)) {
      L0["v_cust_type"] = "and cust_type =4";
    }
  }
  {
    const $t24 = (await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS"));
    { const $t25 = await $.iset((await $.wv([$t24], "Sql", C, false)), [8], ""); if ($t25 !== undefined) { await $.wset([$t24], "Sql", $t25, C); } }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditID", C, false)), "Text")), ""))) {
      { const $t26 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and ID = "), (await $.mv((await $.wv([$t24], "EditID", C, false)), "Text")))); if ($t26 !== undefined) { await $.wset([$t24], "SQL", $t26, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditFirstName", C, false)), "Text")), ""))) {
      { const $t27 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(FIRSTNAME),0) like upper ('%"), (await $.mv((await $.wv([$t24], "EditFirstName", C, false)), "Text"))), "%')")); if ($t27 !== undefined) { await $.wset([$t24], "SQL", $t27, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditPatronymic", C, false)), "Text")), ""))) {
      { const $t28 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(PATRONYMIC),0) like upper ('%"), (await $.mv((await $.wv([$t24], "EditPatronymic", C, false)), "Text"))), "%')")); if ($t28 !== undefined) { await $.wset([$t24], "SQL", $t28, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditLastName", C, false)), "Text")), ""))) {
      { const $t29 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(LastName),0) like upper ('%"), (await $.mv((await $.wv([$t24], "EditLastName", C, false)), "Text"))), "%')")); if ($t29 !== undefined) { await $.wset([$t24], "SQL", $t29, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditFullName", C, false)), "Text")), ""))) {
      { const $t30 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(Cust_Name),0) like upper ('%"), (await $.mv((await $.wv([$t24], "EditFullName", C, false)), "Text"))), "%')")); if ($t30 !== undefined) { await $.wset([$t24], "SQL", $t30, C); } }
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t24], "EditShort_name", C, false)), "Text")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t24], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Short_name"])), "AsString"))))) {
      if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditShort_name", C, false)), "Text")), ""))) {
        { const $t31 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(Short_name),0) like upper ('%"), (await $.mv((await $.wv([$t24], "EditShort_name", C, false)), "Text"))), "%')")); if ($t31 !== undefined) { await $.wset([$t24], "SQL", $t31, C); } }
      }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditPINCode1", C, false)), "Text")), ""))) {
      { const $t32 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and passPIN in("), "'"), (await $.mv((await $.wv([$t24], "EditPINCode1", C, false)), "Text"))), "'"), ")")); if ($t32 !== undefined) { await $.wset([$t24], "SQL", $t32, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditITN", C, false)), "Text")), ""))) {
      { const $t33 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and inn ="), "'"), (await $.mv((await $.wv([$t24], "EditITN", C, false)), "Text"))), "'")); if ($t33 !== undefined) { await $.wset([$t24], "SQL", $t33, C); } }
    }
    { const $t34 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_citizen_countries", { get: async () => L0["v_citizen_countries"], set: async (v) => { L0["v_citizen_countries"] = v; }, local: true }, false)))); if ($t34 !== undefined) { await $.wset([$t24], "SQL", $t34, C); } }
    { const $t35 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_sex", { get: async () => L0["v_sex"], set: async (v) => { L0["v_sex"] = v; }, local: true }, false)))); if ($t35 !== undefined) { await $.wset([$t24], "SQL", $t35, C); } }
    { const $t36 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_fam_status", { get: async () => L0["v_fam_status"], set: async (v) => { L0["v_fam_status"] = v; }, local: true }, false)))); if ($t36 !== undefined) { await $.wset([$t24], "SQL", $t36, C); } }
    { const $t37 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_vid_sob", { get: async () => L0["v_vid_sob"], set: async (v) => { L0["v_vid_sob"] = v; }, local: true }, false)))); if ($t37 !== undefined) { await $.wset([$t24], "SQL", $t37, C); } }
    { const $t38 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_group_klie", { get: async () => L0["v_group_klie"], set: async (v) => { L0["v_group_klie"] = v; }, local: true }, false)))); if ($t38 !== undefined) { await $.wset([$t24], "SQL", $t38, C); } }
    { const $t39 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_PRINAD", { get: async () => L0["v_prinad"], set: async (v) => { L0["v_prinad"] = v; }, local: true }, false)))); if ($t39 !== undefined) { await $.wset([$t24], "SQL", $t39, C); } }
    { const $t40 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_doc_types", { get: async () => L0["v_doc_types"], set: async (v) => { L0["v_doc_types"] = v; }, local: true }, false)))); if ($t40 !== undefined) { await $.wset([$t24], "SQL", $t40, C); } }
    { const $t41 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "c_org_sob", { get: async () => L0["c_org_sob"], set: async (v) => { L0["c_org_sob"] = v; }, local: true }, false)))); if ($t41 !== undefined) { await $.wset([$t24], "SQL", $t41, C); } }
    { const $t42 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "c_sfera_dey", { get: async () => L0["c_sfera_dey"], set: async (v) => { L0["c_sfera_dey"] = v; }, local: true }, false)))); if ($t42 !== undefined) { await $.wset([$t24], "SQL", $t42, C); } }
    { const $t43 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "c_otrasl", { get: async () => L0["c_otrasl"], set: async (v) => { L0["c_otrasl"] = v; }, local: true }, false)))); if ($t43 !== undefined) { await $.wset([$t24], "SQL", $t43, C); } }
    { const $t44 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "c_nalog_kod", { get: async () => L0["c_nalog_kod"], set: async (v) => { L0["c_nalog_kod"] = v; }, local: true }, false)))); if ($t44 !== undefined) { await $.wset([$t24], "SQL", $t44, C); } }
    if ($.truthy($.eq((await $.mv((await $.wv([$t24], "EditDocSerie1", C, false)), "Enabled")), (await $.wv([$t24], "false", C, false))))) {
      await $.mset((await $.wv([$t24], "EditDocSerie", C, false)), "Text", "");
    } else {
      if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditDocSerie", C, false)), "Text")), ""))) {
        { const $t45 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(passport),0) like upper('%"), (await $.mv((await $.wv([$t24], "EditDocSerie", C, false)), "Text"))), "%')")); if ($t45 !== undefined) { await $.wset([$t24], "SQL", $t45, C); } }
      }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditDocNumber", C, false)), "Text")), ""))) {
      { const $t46 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(passp_number),0) like upper('%"), (await $.mv((await $.wv([$t24], "EditDocNumber", C, false)), "Text"))), "%')")); if ($t46 !== undefined) { await $.wset([$t24], "SQL", $t46, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "CBoxDocPlace5", C, false)), "text")), ""))) {
      { const $t47 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(paspplace),0) like  upper('%"), (await $.mv((await $.wv([$t24], "CBoxDocPlace5", C, false)), "text"))), "%')")); if ($t47 !== undefined) { await $.wset([$t24], "SQL", $t47, C); } }
    }
    { const $t48 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_PASPDATE", { get: async () => L0["v_paspdate"], set: async (v) => { L0["v_paspdate"] = v; }, local: true }, false)))); if ($t48 !== undefined) { await $.wset([$t24], "SQL", $t48, C); } }
    { const $t49 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_passexpire", { get: async () => L0["v_passexpire"], set: async (v) => { L0["v_passexpire"] = v; }, local: true }, false)))); if ($t49 !== undefined) { await $.wset([$t24], "SQL", $t49, C); } }
    { const $t50 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_birthdate", { get: async () => L0["v_birthdate"], set: async (v) => { L0["v_birthdate"] = v; }, local: true }, false)))); if ($t50 !== undefined) { await $.wset([$t24], "SQL", $t50, C); } }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "CBoxBirthState", C, false)), "KeyValue")), ""))) {
      { const $t51 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(birthplace),0) like upper ('%"), (await $.mv((await $.wv([$t24], "CBoxBirthState", C, false)), "text"))), "%')")); if ($t51 !== undefined) { await $.wset([$t24], "SQL", $t51, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "CBoxBirthCity", C, false)), "KeyValue")), ""))) {
      { const $t52 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(BIRTH_STATE),0) like upper ('%"), (await $.mv((await $.wv([$t24], "CBoxBirthCity", C, false)), "text"))), "%')")); if ($t52 !== undefined) { await $.wset([$t24], "SQL", $t52, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "CBoxAddressState", C, false)), "KeyValue")), ""))) {
      { const $t53 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(adrs_state),0) like upper ('%"), (await $.mv((await $.wv([$t24], "CBoxAddressState", C, false)), "text"))), "%')")); if ($t53 !== undefined) { await $.wset([$t24], "SQL", $t53, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "CBoxAddressCity", C, false)), "KeyValue")), ""))) {
      { const $t54 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(adrs_city),0) like upper ('%"), (await $.mv((await $.wv([$t24], "CBoxAddressCity", C, false)), "text"))), "%')")); if ($t54 !== undefined) { await $.wset([$t24], "SQL", $t54, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditAddress", C, false)), "Text")), ""))) {
      { const $t55 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(adress ),0) like upper ('%"), (await $.mv((await $.wv([$t24], "EditAddress", C, false)), "Text"))), "%')")); if ($t55 !== undefined) { await $.wset([$t24], "SQL", $t55, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditAddressFactical", C, false)), "Text")), ""))) {
      { const $t56 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(fakt_adress),0) like upper ('%"), (await $.mv((await $.wv([$t24], "EditAddressFactical", C, false)), "Text"))), "%')")); if ($t56 !== undefined) { await $.wset([$t24], "SQL", $t56, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditPhoneMob", C, false)), "Text")), ""))) {
      { const $t57 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(phone_mob),0) like upper ('%"), (await $.mv((await $.wv([$t24], "EditPhoneMob", C, false)), "Text"))), "%')")); if ($t57 !== undefined) { await $.wset([$t24], "SQL", $t57, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t24], "EditPhoneCity", C, false)), "Text")), ""))) {
      { const $t58 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), " and nvl(upper(phone),0) like upper ('%"), (await $.mv((await $.wv([$t24], "EditPhoneCity", C, false)), "Text"))), "%')")); if ($t58 !== undefined) { await $.wset([$t24], "SQL", $t58, C); } }
    }
    { const $t59 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_nerezident", { get: async () => L0["v_nerezident"], set: async (v) => { L0["v_nerezident"] = v; }, local: true }, false)))); if ($t59 !== undefined) { await $.wset([$t24], "SQL", $t59, C); } }
    { const $t60 = await $.iset((await $.wv([$t24], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t24], "SQL", C, false)), [8])), (await $.wv([$t24], "v_CUST_TYPE", { get: async () => L0["v_cust_type"], set: async (v) => { L0["v_cust_type"] = v; }, local: true }, false)))); if ($t60 !== undefined) { await $.wset([$t24], "SQL", $t60, C); } }
    await $.mset((await $.wv([$t24], "Memo1", C, false)), "Text", $.add((await $.mv((await $.wv([$t24], "SQL", C, false)), "Text")), (await $.idx((await $.wv([$t24], "SQL", C, false)), [8]))));
    if ($.truthy((await $.wv([$t24], "Active", C, false)))) {
      await $.stmt($.wcall([$t24], "Refresh", [], C));
    } else {
      await $.stmt($.wcall([$t24], "Open", [], C));
    }
    if ($.truthy($.eq((await $.wv([$t24], "RecordCount", C, false)), 0))) {
      if ($.truthy($.eq((await $.wcall([$t24], "MessageDlg", ["Müştəri tapılmadı?", (await $.wv([$t24], "mtConfirmation", C, false)), [(await $.wv([$t24], "mbYes", C, false)), (await $.wv([$t24], "mbNo", C, false))], 0, (await $.wv([$t24], "mbYes", C, false))], C)), (await $.wv([$t24], "mrYes", C, false))))) {
        return L0.result;
      }
    }
    if ($.truthy(($.eq((await $.wv([$t24], "RecordCount", C, false)), 1)))) {
      await $.stmt((await $.wcall([$t24], "MainGridDblClick", [(await $.wv([$t24], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
    }
    await $.mset((await $.wv([$t24], "XFCust", C, false)), "Visible", (await $.wv([$t24], "false", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "Edit10Change", async function Edit10Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditFullName")), "Text", (await $.mv((await $.v(C, "edit10")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "Edit10KeyPress", async function Edit10KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t61 = L0["sender"];
      await $.stmt((await $.wcall([$t61], "SelectNext", [(await $.wv([$t61], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t61], "True", C, false)), (await $.wv([$t61], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNomCust", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t62 = L0["sender"];
      await $.stmt((await $.wcall([$t62], "SelectNext", [(await $.wv([$t62], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t62], "True", C, false)), (await $.wv([$t62], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNomCust", "EditDocNumber1Change", async function EditDocNumber1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocNumber")), "Text", (await $.mv((await $.v(C, "EditDocNumber1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditDocNumberChange", async function EditDocNumberChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocNumber1")), "Text", (await $.mv((await $.v(C, "EditDocNumber")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditDocSerie1Change", async function EditDocSerie1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocSerie")), "Text", (await $.mv((await $.v(C, "EditDocSerie1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditDocSerieChange", async function EditDocSerieChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocSerie1")), "Text", (await $.mv((await $.v(C, "EditDocSerie")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditEmailKeyPress", async function EditEmailKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t63 = L0["sender"];
      await $.stmt((await $.wcall([$t63], "SelectNext", [(await $.wv([$t63], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t63], "True", C, false)), (await $.wv([$t63], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNomCust", "EditFirstNameKeyPress", async function EditFirstNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t64 = L0["sender"];
      await $.stmt((await $.wcall([$t64], "SelectNext", [(await $.wv([$t64], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t64], "True", C, false)), (await $.wv([$t64], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNomCust", "EditFullNameChange", async function EditFullNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditFullName")), "Text")), ""))) {
    await $.mset((await $.v(C, "EditShort_name")), "Text", (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "convertpack")), "CallstringFunction", ["CONVERT_INT", [(await $.mv((await $.v(C, "EditFullName")), "Text"))]])));
    await $.mset((await $.v(C, "edit10")), "Text", (await $.mv((await $.v(C, "EditFullName")), "Text")));
  } else {
    await $.mset((await $.v(C, "EditShort_name")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditFullNameKeyPress", async function EditFullNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t65 = L0["sender"];
      await $.stmt((await $.wcall([$t65], "SelectNext", [(await $.wv([$t65], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t65], "True", C, false)), (await $.wv([$t65], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNomCust", "EditIDChange", async function EditIDChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "editid")), "Text")), (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"))])))))) {
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t66 = L0["sender"];
      await $.stmt((await $.wcall([$t66], "SelectNext", [(await $.wv([$t66], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t66], "True", C, false)), (await $.wv([$t66], "True", C, false))], C)));
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
  U.method("TNomCust", "EditITNKeyPress", async function EditITNKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t67 = L0["sender"];
      await $.stmt((await $.wcall([$t67], "SelectNext", [(await $.wv([$t67], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t67], "True", C, false)), (await $.wv([$t67], "True", C, false))], C)));
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
  U.method("TNomCust", "EditLastNameKeyPress", async function EditLastNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t68 = L0["sender"];
      await $.stmt((await $.wcall([$t68], "SelectNext", [(await $.wv([$t68], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t68], "True", C, false)), (await $.wv([$t68], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNomCust", "EditPatronymicKeyPress", async function EditPatronymicKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t69 = L0["sender"];
      await $.stmt((await $.wcall([$t69], "SelectNext", [(await $.wv([$t69], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t69], "True", C, false)), (await $.wv([$t69], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNomCust", "EditPINCode1Change", async function EditPINCode1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditPINCode")), "Text", (await $.mv((await $.v(C, "EditPINCode1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditPINCodeChange", async function EditPINCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditPINCode1")), "Text", (await $.mv((await $.v(C, "EditPINCode")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditShort_name1Change", async function EditShort_name1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditShort_name")), "Text", (await $.mv((await $.v(C, "EditShort_name1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditShort_nameChange", async function EditShort_nameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditShort_name1")), "Text", (await $.mv((await $.v(C, "EditShort_name")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "EditShort_nameKeyPress", async function EditShort_nameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t70 = L0["sender"];
      await $.stmt((await $.wcall([$t70], "SelectNext", [(await $.wv([$t70], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t70], "True", C, false)), (await $.wv([$t70], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNomCust", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": '', "n": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CustNomData", (await $.mcall((await $.v(C, "TCustNomData")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": '', "n": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "LabelSamelyDate")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", 1);
  await $.mset((await $.v(C, "RBtnResident")), "Checked", true);
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", 0);
  await $.stmt($.call(C, "Fill_Edit", []));
  await $.set(C, "ConvertNominalToCust", false);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxCitizenship")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "First", []);
    { const $t71 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t72 = true;
      for (;;) {
        if (!$t72) { L0["i"] = $.succ(L0["i"], 1); }
        $t72 = false;
        if (!($.ord(L0["i"]) <= $.ord($t71))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxCitizenship")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "FieldByName", ["CNTR_NAME"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "Odscountries")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxGender")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "First", []);
    { const $t73 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t74 = true;
      for (;;) {
        if (!$t74) { L0["i"] = $.succ(L0["i"], 1); }
        $t74 = false;
        if (!($.ord(L0["i"]) <= $.ord($t73))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxGender")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsGender")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "OrganizationTypeCB")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "First", []);
    { const $t75 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t76 = true;
      for (;;) {
        if (!$t76) { L0["i"] = $.succ(L0["i"], 1); }
        $t76 = false;
        if (!($.ord(L0["i"]) <= $.ord($t75))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "OrganizationTypeCB")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OrganizationTypeData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ActionAreaCB")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "First", []);
    { const $t77 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t78 = true;
      for (;;) {
        if (!$t78) { L0["i"] = $.succ(L0["i"], 1); }
        $t78 = false;
        if (!($.ord(L0["i"]) <= $.ord($t77))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ActionAreaCB")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ActionAreaData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "BranchCB")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "First", []);
    { const $t79 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t80 = true;
      for (;;) {
        if (!$t80) { L0["i"] = $.succ(L0["i"], 1); }
        $t80 = false;
        if (!($.ord(L0["i"]) <= $.ord($t79))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "BranchCB")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "BranchData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "TaXAreaCB")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "First", []);
    { const $t81 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t82 = true;
      for (;;) {
        if (!$t82) { L0["i"] = $.succ(L0["i"], 1); }
        $t82 = false;
        if (!($.ord(L0["i"]) <= $.ord($t81))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "TaXAreaCB")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "TaxAreaData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxFamStatus")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "First", []);
    { const $t83 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t84 = true;
      for (;;) {
        if (!$t84) { L0["i"] = $.succ(L0["i"], 1); }
        $t84 = false;
        if (!($.ord(L0["i"]) <= $.ord($t83))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxFamStatus")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "OdsFamstatus")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxGroup")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "First", []);
    { const $t85 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t86 = true;
      for (;;) {
        if (!$t86) { L0["i"] = $.succ(L0["i"], 1); }
        $t86 = false;
        if (!($.ord(L0["i"]) <= $.ord($t85))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxGroup")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "FieldByName", ["NAME"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ClientGroupData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBox")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "First", []);
    { const $t87 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t88 = true;
      for (;;) {
        if (!$t88) { L0["i"] = $.succ(L0["i"], 1); }
        $t88 = false;
        if (!($.ord(L0["i"]) <= $.ord($t87))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBox")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "FieldByName", ["NAME"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "EstateTypeData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ComboBox3")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "First", []);
    { const $t89 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t90 = true;
      for (;;) {
        if (!$t90) { L0["i"] = $.succ(L0["i"], 1); }
        $t90 = false;
        if (!($.ord(L0["i"]) <= $.ord($t89))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox3")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "FieldByName", ["NAME"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "RelationData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxDocPlace5")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "odsPassDeps")), "First", []);
    { const $t91 = $.sub((await $.mv((await $.mv((await $.v(C, "CustNomData")), "odsPassDeps")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t92 = true;
      for (;;) {
        if (!$t92) { L0["i"] = $.succ(L0["i"], 1); }
        $t92 = false;
        if (!($.ord(L0["i"]) <= $.ord($t91))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxDocPlace5")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "odsPassDeps")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "CustNomData")), "odsPassDeps")), "Next", []);
        await $.tick();
      }
    }
  }
  await $.mset((await $.v(C, "DTPickerDocDate")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_SYSDATE")), "FieldByName", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DTPickerDocExpiryDate")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_SYSDATE")), "FieldByName", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DTPickerBirthDate")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_SYSDATE")), "FieldByName", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "Dtp_Ustav")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_SYSDATE")), "FieldByName", ["tek_dat"])), "asdatetime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t93 = (await $.mv((await $.v(C, "CustNomData")), "DScustimage"));
    await $.stmt($.wcall([$t93], "close", [], C));
    await $.stmt((await $.wcall([$t93], "SetVariable", ["cust_id", (await $.mv((await $.mv((await $.wv([$t93], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FSIDCUSTINFO")), "AsInteger"))], C)));
    await $.stmt($.wcall([$t93], "Open", [], C));
  }
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "Active")))) {
    {
      const $t94 = (await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS"));
      if ($.truthy($.gt((await $.wv([$t94], "RecordCount", C, false)), 0))) {
        await $.mset((await $.wv([$t94], "EditID", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["ID"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditFirstName", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["FirstName"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditPatronymic", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["Patronymic"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["LastName"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditFullName", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["Cust_Name"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditPINCode", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["passPIN"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditITN", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["inn"], C)), "AsString")));
        { const $t95 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Nerezident"])), "AsInteger"));
          if ($.eq($t95, 0)) {
            await $.mset((await $.wv([$t94], "RBtnNoResident", C, false)), "Checked", (await $.wv([$t94], "True", C, false)));
          }
          else if ($.eq($t95, 1)) {
            await $.mset((await $.wv([$t94], "RBtnResident", C, false)), "Checked", (await $.wv([$t94], "True", C, false)));
          }
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["CUST_type"])), "isNull"))))) {
          await $.mset((await $.wv([$t94], "XFRadioGroupCust_type", C, false)), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["CUST_type"])), "AsInteger")));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship"])), "isNull"))))) {
          await $.mset((await $.wv([$t94], "CBoxCitizenship", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "Odscountries")), (await $.wv([$t94], "CBoxCitizenship", C, false)), "citizenship", "ID", "CNTR_NAME"], C)));
        } else {
          await $.mset((await $.wv([$t94], "CBoxCitizenship", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["sex"])), "isNull"))))) {
          await $.mset((await $.wv([$t94], "CBoxGender", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "OdsGender")), (await $.wv([$t94], "CBoxGender", C, false)), "sex", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t94], "CBoxGender", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fam_status"])), "isNull"))))) {
          await $.mset((await $.wv([$t94], "CBoxFamStatus", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "OdsFamstatus")), (await $.wv([$t94], "CBoxFamStatus", C, false)), "fam_status", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t94], "CBoxFamStatus", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["group_klie"])), "isNull"))))) {
          await $.mset((await $.wv([$t94], "CBoxGroup", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ClientGroupData")), (await $.wv([$t94], "CBoxGroup", C, false)), "group_klie", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t94], "CBoxGroup", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["vid_sob"])), "isNull"))))) {
          await $.mset((await $.wv([$t94], "CBox", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "EstateTypeData")), (await $.wv([$t94], "CBox", C, false)), "vid_sob", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t94], "CBox", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["prinad_kod"])), "isNull"))))) {
          await $.mset((await $.wv([$t94], "ComboBox3", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "RelationData")), (await $.wv([$t94], "ComboBox3", C, false)), "prinad_kod", "ID", "name"], C)));
        } else {
          await $.mset((await $.wv([$t94], "ComboBox3", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["DOC_TYPE"])), "isNull"))))) {
          await $.mset((await $.wv([$t94], "CBoxDocType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["DOC_TYPE"])), "AsInteger")));
          await $.mset((await $.wv([$t94], "CBoxDocType1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["DOC_TYPE"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t94], "CBoxDocType", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t94], "CBoxDocType1", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["doc_country"])), "IsNull"))))) {
          await $.mset((await $.wv([$t94], "issue_country1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["doc_country"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t94], "issue_country1", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["risk_categ"])), "isnull"))))) {
          await $.mset((await $.wv([$t94], "ComboBox_risk", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["risk_categ"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t94], "ComboBox_risk", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["riskdescid"])), "isnull"))))) {
          await $.mset((await $.wv([$t94], "Comb_riskdescid", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["riskdescid"])), "AsInteger")));
        } else {
          await $.mset((await $.wv([$t94], "Comb_riskdescid", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship2"])), "IsNull"))))) {
          await $.mset((await $.wv([$t94], "DBCBox_Citizenship2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship2"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t94], "DBCBox_Citizenship2", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship3"])), "IsNull"))))) {
          await $.mset((await $.wv([$t94], "DBCBox_Citizenship3", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship3"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t94], "DBCBox_Citizenship3", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_country"])), "IsNull"))))) {
          await $.mset((await $.wv([$t94], "Fakt_Adrs_State", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_country"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t94], "Fakt_Adrs_State", C, false)), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_city"])), "IsNull"))))) {
          await $.mset((await $.wv([$t94], "Fakt_Adrs_City", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_city"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t94], "Fakt_Adrs_City", C, false)), "KeyValue", (-(1)));
        }
        await $.mset((await $.wv([$t94], "ZipFakt", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["fakt_zip"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "Work_Place", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["work_place"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "Work_Post", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["work_post"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "Work_Address", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["work_adress"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "Work_Phone", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["work_phone"], C)), "AsString")));
        { const $t96 = (await $.mv((await $.wv([$t94], "XFRadioGroupCust_type", C, false)), "ItemIndex"));
          if ($.eq($t96, 0)) {
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Address_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "Address_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Address_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "Address_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_contact_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "tph_contact_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "tph_contact_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_communication_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "tph_communication_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_communication_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "tph_communication_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["country_code_cust"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "CountryByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["country_code_cust"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "CountryByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["city_cust"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "CityByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["city_cust"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "CityByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["incorporation_cntr"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "DBLC_INCORP_CNTR", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["incorporation_cntr"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "DBLC_INCORP_CNTR", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_country_prefix"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "tph_country_prefix", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["tph_country_prefix"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "tph_country_prefix", C, false)), "KeyValue", (-(1)));
            }
            await $.mset((await $.wv([$t94], "incor_number", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["incorporation_number"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "Db_tph_number", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["TPH_NUMBER"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "db_tph_adress", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["ADDRESS_CUST"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "Edit_url", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["url_cust"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "DB_INCORP_STATE", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["incorporation_state"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "Db_tph_extension", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["tph_extension"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "DB_tph_zip", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["tph_zip"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "db_tph_state", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["TPH_STATE"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "EditEmail", C, false)), "Text", (await $.wcall([$t94], "copy", [(await $.mv((await $.wcall([$t94], "FieldByName", ["email_cust"], C)), "AsString")), 0, $.sub((await $.wcall([$t94], "pos", ["@", (await $.mv((await $.wcall([$t94], "FieldByName", ["email_cust"], C)), "AsString"))], C)), 1)], C)));
            await $.mset((await $.wv([$t94], "Edit1", C, false)), "Text", (await $.wcall([$t94], "copy", [(await $.mv((await $.wcall([$t94], "FieldByName", ["email_cust"], C)), "AsString")), $.add((await $.wcall([$t94], "pos", ["@", (await $.mv((await $.wcall([$t94], "FieldByName", ["email_cust"], C)), "AsString"))], C)), 1), (await $.wcall([$t94], "length", [(await $.mv((await $.wcall([$t94], "FieldByName", ["email_cust"], C)), "AsString"))], C))], C)));
            await $.mset((await $.wv([$t94], "EditBic", C, false)), "text", (await $.mv((await $.wcall([$t94], "FieldByName", ["bik"], C)), "AsString")));
          }
          else if ($.eq($t96, 1) || $.eq($t96, 2) || $.eq($t96, 3) || $.eq($t96, 4)) {
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_contact_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "tph_contact_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "tph_contact_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "CountryByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "CountryByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_city"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "CityByConctType", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_city"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "CityByConctType", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country_prefix"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "tph_country_prefix", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country_prefix"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "tph_country_prefix", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_communication_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "tph_communication_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_communication_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "tph_communication_type", C, false)), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_contact_type"])), "IsNull"))))) {
              await $.mset((await $.wv([$t94], "Address_type", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.wv([$t94], "Address_type", C, false)), "KeyValue", (-(1)));
            }
            await $.mset((await $.wv([$t94], "db_tph_state", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["info_tph_state"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "DB_tph_zip", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["info_tph_zip"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "db_tph_adress", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["info_tph_adress"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "db_tph_number", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["info_tph_number"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "db_tph_extension", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["info_tph_extension"], C)), "AsString")));
            await $.mset((await $.wv([$t94], "EditEmail", C, false)), "Text", (await $.wcall([$t94], "copy", [(await $.mv((await $.wcall([$t94], "FieldByName", ["email"], C)), "AsString")), 0, $.sub((await $.wcall([$t94], "pos", ["@", (await $.mv((await $.wcall([$t94], "FieldByName", ["email"], C)), "AsString"))], C)), 1)], C)));
            await $.mset((await $.wv([$t94], "Edit1", C, false)), "Text", (await $.wcall([$t94], "copy", [(await $.mv((await $.wcall([$t94], "FieldByName", ["email"], C)), "AsString")), $.add((await $.wcall([$t94], "pos", ["@", (await $.mv((await $.wcall([$t94], "FieldByName", ["email"], C)), "AsString"))], C)), 1), (await $.wcall([$t94], "length", [(await $.mv((await $.wcall([$t94], "FieldByName", ["email"], C)), "AsString"))], C))], C)));
            await $.mset((await $.wv([$t94], "Edit_url", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["url"], C)), "AsString")));
          }
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["org_sob"])), "IsNull"))))) {
          await $.mset((await $.wv([$t94], "OrganizationTypeCB", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "OrganizationTypeData")), (await $.wv([$t94], "OrganizationTypeCB", C, false)), "org_sob", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t94], "OrganizationTypeCB", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["sfera_dey"])), "IsNull"))))) {
          await $.mset((await $.wv([$t94], "ActionAreaCB", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ActionAreaData")), (await $.wv([$t94], "ActionAreaCB", C, false)), "sfera_dey", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t94], "ActionAreaCB", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["otrasl"])), "isnull"))))) {
          await $.mset((await $.wv([$t94], "BranchCB", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "BranchData")), (await $.wv([$t94], "BranchCB", C, false)), "otrasl", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t94], "BranchCB", C, false)), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["nalog_kod"])), "isnull"))))) {
          await $.mset((await $.wv([$t94], "TaxAreaCb", C, false)), "ItemIndex", (await $.wcall([$t94], "combobox_open", [(await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t94], "CustNomData", C, false)), "TaxAreaData")), (await $.wv([$t94], "TaxAreaCb", C, false)), "nalog_kod", "id", "name"], C)));
        } else {
          await $.mset((await $.wv([$t94], "TaxAreaCb", C, false)), "ItemIndex", (-(1)));
        }
        await $.mset((await $.wv([$t94], "CBoxDocPlace5", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["paspplace"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditShort_name", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["Short_name"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditDocSerie", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["passport"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditDocNumber", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["passp_number"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "MemoNotes", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["note"], C)), "AsString")));
        if ($.truthy($.not((await $.mv((await $.wcall([$t94], "FieldByName", ["paspdate"], C)), "isNull"))))) {
          await $.mset((await $.wv([$t94], "DTPickerDocDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t94], "FieldByName", ["paspdate"], C)), "asdatetime")));
        }
        if ($.truthy($.not((await $.mv((await $.wcall([$t94], "FieldByName", ["passexpire"], C)), "isNull"))))) {
          await $.mset((await $.wv([$t94], "DTPickerDocExpiryDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t94], "FieldByName", ["passexpire"], C)), "asdatetime")));
        }
        if ($.truthy($.not((await $.mv((await $.wcall([$t94], "FieldByName", ["birthdate"], C)), "isNull"))))) {
          await $.mset((await $.wv([$t94], "DTPickerBirthDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t94], "FieldByName", ["birthdate"], C)), "asdatetime")));
        }
        if ($.truthy($.not((await $.mv((await $.wcall([$t94], "FieldByName", ["dat_ustav"], C)), "isNull"))))) {
          await $.mset((await $.wv([$t94], "Dtp_Ustav", C, false)), "DateTime", (await $.mv((await $.wcall([$t94], "FieldByName", ["dat_ustav"], C)), "asdatetime")));
        }
        await $.mset((await $.wv([$t94], "CBoxBirthState", C, false)), "KeyValue", (await $.mv((await $.wcall([$t94], "FieldByName", ["birthplace"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "CBoxBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t94], "FieldByName", ["BIRTH_STATE"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "CBoxAddressState", C, false)), "KeyValue", (await $.mv((await $.wcall([$t94], "FieldByName", ["adrs_state"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "CBoxAddressCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t94], "FieldByName", ["adrs_city"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditAddress", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["adress"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditAddressFactical", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["fakt_adress"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditPhoneMob", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["PHONE_MOB"], C)), "AsString")));
        await $.mset((await $.wv([$t94], "EditPhoneCity", C, false)), "Text", (await $.mv((await $.wcall([$t94], "FieldByName", ["phone"], C)), "AsString")));
        await $.stmt($.wcall([$t94], "Fill_Edit", [], C));
        await $.mset((await $.wv([$t94], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.wcall([$t94], "FieldByName", ["SAMELYDATE"], C)), "AsDateTime")));
        await $.wset([$t94], "risk_descPERIOD", (await $.mv((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ODS_CUST_RISK_DESCDATE_PERIOD")), "AsInteger")), C);
        if ($.truthy($.not(((await $.mv((await $.wcall([$t94], "FieldByName", ["SAMELYDATE"], C)), "isNUll")))))) {
          await $.mset((await $.wv([$t94], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.wcall([$t94], "FieldByName", ["SAMELYDATE"], C)), "AsDateTime")));
        } else {
          await $.mset((await $.wv([$t94], "DateTi_samelydate", C, false)), "Value", (await $.wv([$t94], "null", C, false)));
        }
        if ($.truthy($.not(((await $.mv((await $.wcall([$t94], "FieldByName", ["SAMELYDATE"], C)), "isNUll")))))) {
          if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ods_SysdateTEK_DAT")), "AsDateTime")), (await $.wcall([$t94], "IncMonth", [(await $.mv((await $.wcall([$t94], "FieldByName", ["SAMELYDATE"], C)), "AsDatetime")), (await $.wv([$t94], "risk_descPERIOD", C, false))], C))))) {
            await $.mset((await $.wv([$t94], "LabelSamelyDate", C, false)), "Caption", "Diqqət: Bugün bu müştərinin eyniləşdirmə tarixidir!");
            await $.mset((await $.wv([$t94], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t94], "True", C, false)));
            await $.mset((await $.wv([$t94], "Timer1", C, false)), "Enabled", (await $.wv([$t94], "True", C, false)));
          } else {
            if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t94], "CustNomData", C, false)), "ods_SysdateTEK_DAT")), "AsDateTime")), (await $.wcall([$t94], "IncMonth", [(await $.mv((await $.wcall([$t94], "FieldByName", ["SAMELYDATE"], C)), "AsDatetime")), (await $.wv([$t94], "risk_descPERIOD", C, false))], C))))) {
              await $.mset((await $.wv([$t94], "LabelSamelyDate", C, false)), "Caption", "Diqqət: Müştərinin eyniləşdirmə tarixi bitmişdir!");
              await $.mset((await $.wv([$t94], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.wv([$t94], "Timer1", C, false)), "Enabled", (await $.wv([$t94], "True", C, false)));
            } else {
              await $.mset((await $.wv([$t94], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.wv([$t94], "Timer1", C, false)), "Enabled", (await $.wv([$t94], "False", C, false)));
            }
          }
        } else {
          await $.mset((await $.wv([$t94], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t94], "False", C, false)));
          await $.mset((await $.wv([$t94], "Timer1", C, false)), "Enabled", (await $.wv([$t94], "False", C, false)));
        }
        await $.mset((await $.wv([$t94], "XFPanelTeyp", C, false)), "Visible", (await $.wv([$t94], "true", C, false)));
        await $.mset((await $.wv([$t94], "XFBitcontinue", C, false)), "Visible", (await $.wv([$t94], "false", C, false)));
        await $.mset((await $.wv([$t94], "XFButton4", C, false)), "Visible", (await $.wv([$t94], "true", C, false)));
        await $.mset((await $.wv([$t94], "XFButton5", C, false)), "Visible", (await $.wv([$t94], "true", C, false)));
        await $.mset((await $.wv([$t94], "XFRadioGroupCust_type", C, false)), "Visible", (await $.wv([$t94], "true", C, false)));
        await $.mset((await $.wv([$t94], "XFRadioGroupCust_type1", C, false)), "Visible", (await $.wv([$t94], "false", C, false)));
        if ($.truthy($.ne((await $.mv((await $.wv([$t94], "EditID", C, false)), "Text")), ""))) {
          { const $t97 = (await $.mv((await $.wv([$t94], "XFRadioGroupCust_type", C, false)), "ItemIndex"));
            if ($.eq($t97, 0)) {
              await $.mset((await $.wv([$t94], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t94], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t94], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t94], "true", C, false)));
            }
            else if ($.eq($t97, 1)) {
              await $.mset((await $.wv([$t94], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t94], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [2])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [3])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [4])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [5])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [6])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [7])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [8])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [9])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [1])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "columns")), "Items")), [11])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t94], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t94], "true", C, false)));
            }
            else if ($.eq($t97, 2)) {
              await $.mset((await $.wv([$t94], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t94], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t94], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t94], "true", C, false)));
            }
            else if ($.eq($t97, 3)) {
              await $.mset((await $.wv([$t94], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t94], "false", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t94], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t94], "true", C, false)));
            }
            else if ($.eq($t97, 4)) {
              await $.mset((await $.wv([$t94], "XFBitBtn2", C, false)), "Visible", (await $.wv([$t94], "true", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [2])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [3])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [4])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [5])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [6])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [7])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [8])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [9])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [1])), "Visible", (await $.wv([$t94], "False", C, false)));
              await $.mset((await $.idx((await $.mv((await $.mv((await $.wv([$t94], "MainGrid", C, false)), "Columns")), "Items")), [11])), "Visible", (await $.wv([$t94], "True", C, false)));
              await $.mset((await $.idx((await $.mv((await $.wv([$t94], "PageControl1", C, false)), "pages")), [9])), "TabVisible", (await $.wv([$t94], "true", C, false)));
            }
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "MainGridTitleClick", async function MainGridTitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  {
    const $t98 = (await $.v(C, "CustNomData"));
    const $t99 = (await $.wv([$t98], "ODS_CUSTOMERS_PHYS_FS", C, false));
    await $.stmt($.wcall([$t98, $t99], "Close", [], C));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t98, $t99], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "Title")), "MarkerIndex")), 2))) {
      await $.stmt((await $.wcall([$t98, $t99], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t98, $t99], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "ASC")], C)));
    } else {
      await $.stmt((await $.wcall([$t98, $t99], "SetVariable", ["title", $.add($.add((await $.mv((await $.wv([$t98, $t99], "Column", { get: async () => L0["column"], set: async (v) => { L0["column"] = v; }, local: true }, false)), "FieldName")), " "), "DESC")], C)));
    }
    await $.stmt($.wcall([$t98, $t99], "open", [], C));
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TNomCust", "RBtnNoResidentClick", async function RBtnNoResidentClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocSerie")), "Text", "");
  await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "EditDocNumber1")), "MaxLength", 100);
  await $.mset((await $.v(C, "EditDocNumber")), "MaxLength", 100);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "RBtnNoResidentKeyPress", async function RBtnNoResidentKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t100 = L0["sender"];
      await $.stmt((await $.wcall([$t100], "SelectNext", [(await $.wv([$t100], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t100], "True", C, false)), (await $.wv([$t100], "True", C, false))], C)));
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
  U.method("TNomCust", "RBtnResidentClick", async function RBtnResidentClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), true))) {
    await $.mset((await $.v(C, "EditPINCode")), "MaxLength", 10);
    await $.mset((await $.v(C, "EditDocSerie")), "Text", "AZE");
    await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", 1);
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", 1);
    await $.mset((await $.v(C, "EditDocNumber1")), "MaxLength", 10);
    await $.mset((await $.v(C, "EditDocNumber")), "MaxLength", 10);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "RBtnResidentKeyPress", async function RBtnResidentKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t101 = L0["sender"];
      await $.stmt((await $.wcall([$t101], "SelectNext", [(await $.wv([$t101], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t101], "True", C, false)), (await $.wv([$t101], "True", C, false))], C)));
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
  U.method("TNomCust", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "custsign": null, "jpg": null, "bmp": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["custsign"] = (await $.mv((await $.v(C, "TPicture")), "Create"));
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
    if ($.truthy($.eq(L0["exts"], "BMP"))) {
      await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
      await $.mset(L0["jpg"], "CompressionQuality", 100);
      await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
      await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimage")), "Edit", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimage")), "FieldByName", ["CUSTSIGN"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimage")), "Post", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "photo": null, "jpg": null, "bmp": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["photo"] = (await $.mv((await $.v(C, "TPicture")), "Create"));
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
    if ($.truthy($.eq(L0["exts"], "BMP"))) {
      await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
      await $.mset(L0["jpg"], "CompressionQuality", 100);
      await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
      await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimage")), "Edit", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimage")), "FieldByName", ["Photo"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimage")), "Post", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "stamp": null, "jpg": null, "bmp": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["stamp"] = (await $.mv((await $.v(C, "TPicture")), "Create"));
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDialog1")), "Execute")))) {
    L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
    if ($.truthy($.eq(L0["exts"], "BMP"))) {
      await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDialog1")), "FileName"))])));
      await $.mset(L0["jpg"], "CompressionQuality", 100);
      await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
      await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimage")), "Edit", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimage")), "FieldByName", ["STAMP"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.mcall((await $.mv((await $.v(C, "CustNomData")), "DScustimage")), "Post", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "d_passpin": '', "p_cust_type": 0, "b": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_type"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "XFBitBtn2")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), 4))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Nominal Müştəriyi  Bankın  müştərisinə çevirmek üçün onun tipini seçin  ! "])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Nominal Müştəriyi  Bankın  müştərisi kimi qeyd etmek isteyirsinizmi   ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.set(C, "ConvertNominalToCust", true);
    await $.mcall((await $.v(C, "CustEdit1")), "Click", []);
    await $.mcall((await $.mv((await $.v(C, "CustNomData")), "ODS_CUSTOMERS_PHYS_FS")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "XFBitcontinueClick", async function XFBitcontinueClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "a": 0, "b": 0, "c": 0, "d_doc_type": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")), (-(1)))))) {
    await $.stmt((await $.call(C, "showmessage", [" Yeni müştərini daxil etmək üçün onun tipini seçin   !"])));
    return L0.result;
  }
  { const $t102 = (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex"));
    if ($.eq($t102, 0)) {
      if ($.truthy(($.eq((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
        await $.stmt((await $.call(C, "showmessage", ["VÖEN sahəsi boşdur"])));
        return L0.result;
      }
    }
    else if ($.eq($t102, 1) || $.eq($t102, 4)) {
      if ($.truthy(($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
        await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
        return L0.result;
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))))) {
        await $.stmt((await $.call(C, "showmessage", ["PİN Kod və Senedin  Seriya nömresi eynidir  !"])));
        return L0.result;
      }
    }
    else if ($.eq($t102, 2)) {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "EditITN")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))))) {
        await $.stmt((await $.call(C, "showmessage", ["VÖEN ve ya Pinkod sahəsi boşdur"])));
        return L0.result;
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), (await $.mv((await $.v(C, "EditITN")), "Text"))))) {
        await $.stmt((await $.call(C, "showmessage", ["VÖEN və PİN Kod  eynidir  !"])));
        return L0.result;
      }
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditITN")), "Text")), "")))) {
    L0["a"] = (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_inn", (await $.mv((await $.v(C, "EditITN")), "Text"))]]));
    if ($.truthy($.ne(L0["a"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["a"]])), " -ID li Müştəri üçün  "), (await $.mv((await $.v(C, "EditITN")), "Text"))), "  VÖEN mövcuddur!")])));
      return L0.result;
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
    L0["b"] = (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passpin", (await $.mv((await $.v(C, "EditPINCode1")), "Text"))]]));
    if ($.truthy($.ne(L0["b"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["b"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditPINCode1")), "Text"))), "  Pinkod mövcuddur!")])));
      return L0.result;
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false)))))) {
    await $.stmt((await $.call(C, "ShowMessage", [" Rezident və ya  Qeyr Rezident Sahəsi seçilməyib  ! "])));
    return L0.result;
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false)), async () => ($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false)))))) {
  } else {
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Text")), "")))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
      return L0.result;
    } else {
      if ($.truthy($.ne(($.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text")))), ""))) {
        L0["c"] = (await $.mcall((await $.mv((await $.v(C, "CustNomData")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passer_panum", $.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"))]]));
        if ($.truthy($.ne(L0["c"], (-(1))))) {
          await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add($.add($.add((await $.call(C, "inttostr", [L0["c"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditDocSerie1")), "Text"))), " /"), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), "  Sənədin  seryasi mövcuddur!")])));
          return L0.result;
        }
      }
    }
  }
  await $.mset((await $.v(C, "XFBitcontinue")), "Visible", false);
  await $.mset((await $.v(C, "XFCust")), "Visible", true);
  await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", false);
  await $.mset((await $.v(C, "XFButton4")), "Visible", false);
  await $.mset((await $.v(C, "XFButton5")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type1")), "Visible", false);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex")));
  { const $t103 = (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex"));
    if ($.eq($t103, 0)) {
      await $.mcall((await $.v(C, "TabSheet8")), "Show", []);
    }
    else if ($.eq($t103, 1) || $.eq($t103, 2) || $.eq($t103, 3) || $.eq($t103, 4)) {
      await $.mcall((await $.v(C, "TabSheet1")), "Show", []);
    }
  }
  await $.stmt((await $.call(C, "MainGridDblClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "XFCustClick", async function XFCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "tg", 1);
  await $.stmt($.call(C, "CustAdd", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNomCust", "XFRadioGroupCust_type1Click", async function XFRadioGroupCust_type1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t104 = (await $.mv((await $.v(C, "XFRadioGroupCust_type1")), "ItemIndex"));
    if ($.eq($t104, 0)) {
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
    else if ($.eq($t104, 1) || $.eq($t104, 4)) {
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
    else if ($.eq($t104, 2)) {
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
  U.method("TNomCust", "XFRadioGroupCust_typeClick", async function XFRadioGroupCust_typeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t105 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t105, 0)) {
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
    else if ($.eq($t105, 1) || $.eq($t105, 4)) {
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
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [2])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [3])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [4])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [5])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [6])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [7])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [8])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [9])), "Visible", true);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [1])), "Visible", false);
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainGrid")), "columns")), "Items")), [11])), "Visible", false);
    }
    else if ($.eq($t105, 2)) {
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
    else if ($.eq($t105, 3)) {
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
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NomCust", (await $.mcall((await $.v(C, "TNomCust")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
