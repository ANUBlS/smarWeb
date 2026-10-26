// Generated from FormCustNomImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormCustNomImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ToolWin", "Buttons", "XFSCtrls", "StdCtrls", "Grids", "DBGrids", "ExtCtrls", "DBCtrls", "Mask", "DBCtrlsEh", "ImgList", "ExtDlgs", "Menus", "PlatformDefaultStyleActnCtrls", "ActnPopup", "db", "addcombobox1", "OpenAccountImpl", "XDBGrids", "DataCustNomImpl", "FormCustNom_GridImpl"]);
  const C = [U];
  U.defClass("TFormCustNom", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet7": {"name": "TabSheet7", "type": "TTabSheet"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanelteyp": {"name": "XFPanelTeyp", "type": "TXFPanel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "editid": {"name": "EditID", "type": "TEdit"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xflabel41": {"name": "XFLabel41", "type": "TXFLabel"}, "xflabel42": {"name": "XFLabel42", "type": "TXFLabel"}, "xflacboxdoctype1": {"name": "XFLaCBoxDocType1", "type": "TXFLabel"}, "xfladocser1": {"name": "XFLaDocSer1", "type": "TXFLabel"}, "rbtnnoresident": {"name": "RBtnNoResident", "type": "TXFRadioButton"}, "cboxdoctype1": {"name": "CBoxDocType1", "type": "TDBLookupComboBox"}, "editdocserie1": {"name": "EditDocSerie1", "type": "TEdit"}, "editdocnumber1": {"name": "EditDocNumber1", "type": "TEdit"}, "rbtnresident": {"name": "RBtnResident", "type": "TXFRadioButton"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xflepincode1": {"name": "XFLEPINCode1", "type": "TXFLabel"}, "xflabel92": {"name": "XFLabel92", "type": "TXFLabel"}, "xfradiogroupcust_type": {"name": "XFRadioGroupCust_type", "type": "TXFRadioGroup"}, "editpincode1": {"name": "EditPINCode1", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xflaeditfirstname": {"name": "XFLaEditFirstName", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflaeditpatronymic": {"name": "XFLaEditPatronymic", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflaeditlastname": {"name": "XFLaEditLastName", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel35": {"name": "XFLabel35", "type": "TXFLabel"}, "xflabel36": {"name": "XFLabel36", "type": "TXFLabel"}, "btnfullnamegenerator": {"name": "BtnFullNameGenerator", "type": "TSpeedButton"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "xflabel72": {"name": "XFLabel72", "type": "TXFLabel"}, "xflabel73": {"name": "XFLabel73", "type": "TXFLabel"}, "xflabel86": {"name": "XFLabel86", "type": "TXFLabel"}, "editlastname": {"name": "EditLastName", "type": "TEdit"}, "editpatronymic": {"name": "EditPatronymic", "type": "TEdit"}, "editfirstname": {"name": "EditFirstName", "type": "TEdit"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "editshort_name1": {"name": "EditShort_name1", "type": "TEdit"}, "dbcbox_citizenship3": {"name": "DBCBox_Citizenship3", "type": "TDBLookupComboBox"}, "dbcbox_citizenship2": {"name": "DBCBox_Citizenship2", "type": "TDBLookupComboBox"}, "tabsheet10": {"name": "TabSheet10", "type": "TTabSheet"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "xflacbox": {"name": "XFLaCBox", "type": "TXFLabel"}, "xflacboxgroup": {"name": "XFLaCBoxGroup", "type": "TXFLabel"}, "xflacombobox3": {"name": "XFLaComboBox3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel89": {"name": "XFLabel89", "type": "TXFLabel"}, "xflabel90": {"name": "XFLabel90", "type": "TXFLabel"}, "xflabel93": {"name": "XFLabel93", "type": "TXFLabel"}, "xflabel94": {"name": "XFLabel94", "type": "TXFLabel"}, "xflabel95": {"name": "XFLabel95", "type": "TXFLabel"}, "xflabel96": {"name": "XFLabel96", "type": "TXFLabel"}, "cbox": {"name": "CBox", "type": "TComboBox"}, "cboxgroup": {"name": "CBoxGroup", "type": "TComboBox"}, "combobox3": {"name": "ComboBox3", "type": "TComboBox"}, "actionareacb": {"name": "ActionAreaCB", "type": "TComboBox"}, "combobox_risk": {"name": "ComboBox_risk", "type": "TDBLookupComboBox"}, "dateti_samelydate": {"name": "DateTi_samelydate", "type": "TDBDateTimeEditEh"}, "comb_riskdescid": {"name": "Comb_riskdescid", "type": "TDBLookupComboBox"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xflacboxbirthcity": {"name": "XFLaCBoxBirthCity", "type": "TXFLabel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "xflacboxbirthstate": {"name": "XFLaCBoxBirthState", "type": "TXFLabel"}, "xflabel81": {"name": "XFLabel81", "type": "TXFLabel"}, "xflabel82": {"name": "XFLabel82", "type": "TXFLabel"}, "cboxbirthstate": {"name": "CBoxBirthState", "type": "TDBLookupComboBox"}, "cboxbirthcity": {"name": "CBoxBirthCity", "type": "TDBLookupComboBox"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "xflabel80": {"name": "XFLabel80", "type": "TXFLabel"}, "xflabel83": {"name": "XFLabel83", "type": "TXFLabel"}, "xflabel84": {"name": "XFLabel84", "type": "TXFLabel"}, "editaddress": {"name": "EditAddress", "type": "TEdit"}, "cboxaddressstate": {"name": "CBoxAddressState", "type": "TDBLookupComboBox"}, "cboxaddresscity": {"name": "CBoxAddressCity", "type": "TDBLookupComboBox"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "xflabel50": {"name": "XFLabel50", "type": "TXFLabel"}, "xflabel68": {"name": "XFLabel68", "type": "TXFLabel"}, "xflabel69": {"name": "XFLabel69", "type": "TXFLabel"}, "xflabel70": {"name": "XFLabel70", "type": "TXFLabel"}, "xflabel71": {"name": "XFLabel71", "type": "TXFLabel"}, "fakt_adrs_state": {"name": "Fakt_Adrs_State", "type": "TDBLookupComboBox"}, "fakt_adrs_city": {"name": "Fakt_Adrs_City", "type": "TDBLookupComboBox"}, "zipfakt": {"name": "ZipFakt", "type": "TEdit"}, "editaddressfactical": {"name": "EditAddressFactical", "type": "TEdit"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xflacboxdoctype": {"name": "XFLaCBoxDocType", "type": "TXFLabel"}, "xfladocser": {"name": "XFLaDocSer", "type": "TXFLabel"}, "xflacboxdocplace": {"name": "XFLaCBoxDocPlace", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "xflabel29": {"name": "XFLabel29", "type": "TXFLabel"}, "xflabel74": {"name": "XFLabel74", "type": "TXFLabel"}, "xflabel75": {"name": "XFLabel75", "type": "TXFLabel"}, "xflabel85": {"name": "XFLabel85", "type": "TXFLabel"}, "xflabel87": {"name": "XFLabel87", "type": "TXFLabel"}, "editdocserie": {"name": "EditDocSerie", "type": "TEdit"}, "editdocnumber": {"name": "EditDocNumber", "type": "TEdit"}, "cboxdoctype": {"name": "CBoxDocType", "type": "TDBLookupComboBox"}, "editpincode": {"name": "EditPINCode", "type": "TEdit"}, "issue_country": {"name": "issue_country", "type": "TDBLookupComboBox"}, "cboxdocplace2": {"name": "CBoxDocPlace2", "type": "TComboBox"}, "tabsheet11": {"name": "TabSheet11", "type": "TTabSheet"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xflabel38": {"name": "XFLabel38", "type": "TXFLabel"}, "xflabel39": {"name": "XFLabel39", "type": "TXFLabel"}, "xflabel40": {"name": "XFLabel40", "type": "TXFLabel"}, "xflabel43": {"name": "XFLabel43", "type": "TXFLabel"}, "xflabel44": {"name": "XFLabel44", "type": "TXFLabel"}, "xflabel45": {"name": "XFLabel45", "type": "TXFLabel"}, "xflabel46": {"name": "XFLabel46", "type": "TXFLabel"}, "xflabel47": {"name": "XFLabel47", "type": "TXFLabel"}, "xflabel48": {"name": "XFLabel48", "type": "TXFLabel"}, "xflabel49": {"name": "XFLabel49", "type": "TXFLabel"}, "xflabel51": {"name": "XFLabel51", "type": "TXFLabel"}, "xflabel52": {"name": "XFLabel52", "type": "TXFLabel"}, "xflabel54": {"name": "XFLabel54", "type": "TXFLabel"}, "xflabel55": {"name": "XFLabel55", "type": "TXFLabel"}, "xflabel56": {"name": "XFLabel56", "type": "TXFLabel"}, "xflabel25": {"name": "XFLabel25", "type": "TXFLabel"}, "xflabel58": {"name": "XFLabel58", "type": "TXFLabel"}, "xflabel59": {"name": "XFLabel59", "type": "TXFLabel"}, "xflabel60": {"name": "XFLabel60", "type": "TXFLabel"}, "xflabel23": {"name": "XFLabel23", "type": "TXFLabel"}, "xflabel53": {"name": "XFLabel53", "type": "TXFLabel"}, "xflabel88": {"name": "XFLabel88", "type": "TXFLabel"}, "address_type": {"name": "Address_type", "type": "TDBLookupComboBox"}, "citybyconcttype": {"name": "CityByConctType", "type": "TDBLookupComboBox"}, "countrybyconcttype": {"name": "CountryByConctType", "type": "TDBLookupComboBox"}, "dbedit_countrycode": {"name": "DBEdit_CountryCode", "type": "TDBEdit"}, "tph_contact_type": {"name": "tph_contact_type", "type": "TDBLookupComboBox"}, "tph_communication_type": {"name": "tph_communication_type", "type": "TDBLookupComboBox"}, "db_tph_adress": {"name": "db_tph_adress", "type": "TEdit"}, "db_tph_zip": {"name": "DB_tph_zip", "type": "TEdit"}, "db_tph_number": {"name": "Db_tph_number", "type": "TEdit"}, "db_tph_extension": {"name": "Db_tph_extension", "type": "TEdit"}, "db_tph_state": {"name": "db_tph_state", "type": "TEdit"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit_url": {"name": "Edit_url", "type": "TEdit"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "xflabel22": {"name": "XFLabel22", "type": "TXFLabel"}, "xflacboxgender": {"name": "XFLaCBoxGender", "type": "TXFLabel"}, "xflacboxfamstatus": {"name": "XFLaCBoxFamStatus", "type": "TXFLabel"}, "editphonemob": {"name": "EditPhoneMob", "type": "TEdit"}, "editphonecity": {"name": "EditPhoneCity", "type": "TEdit"}, "cboxgender": {"name": "CBoxGender", "type": "TComboBox"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TComboBox"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xflabel76": {"name": "XFLabel76", "type": "TXFLabel"}, "xflabel77": {"name": "XFLabel77", "type": "TXFLabel"}, "xflabel78": {"name": "XFLabel78", "type": "TXFLabel"}, "xflabel79": {"name": "XFLabel79", "type": "TXFLabel"}, "work_place": {"name": "Work_Place", "type": "TEdit"}, "work_post": {"name": "Work_Post", "type": "TEdit"}, "work_address": {"name": "Work_Address", "type": "TEdit"}, "work_phone": {"name": "Work_Phone", "type": "TEdit"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "memonotes": {"name": "MemoNotes", "type": "TMemo"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xflabel30": {"name": "XFLabel30", "type": "TXFLabel"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "xflabel31": {"name": "XFLabel31", "type": "TXFLabel"}, "xflabel32": {"name": "XFLabel32", "type": "TXFLabel"}, "xflabel33": {"name": "XFLabel33", "type": "TXFLabel"}, "xflabel34": {"name": "XFLabel34", "type": "TXFLabel"}, "image1": {"name": "Image1", "type": "TImage"}, "image2": {"name": "Image2", "type": "TImage"}, "image4": {"name": "Image4", "type": "TImage"}, "image3": {"name": "Image3", "type": "TImage"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfcust": {"name": "XFCust", "type": "TXFBitBtn"}, "xfbitcontinue": {"name": "XFBitcontinue", "type": "TXFBitBtn"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "btncust": {"name": "BtnCust", "type": "TToolButton"}, "popupcustomers": {"name": "PopUpCustomers", "type": "TPopupActionBar"}, "custsearch1": {"name": "CustSearch1", "type": "TMenuItem"}, "custadd1": {"name": "CustAdd1", "type": "TMenuItem"}, "custedit1": {"name": "CustEdit1", "type": "TMenuItem"}, "custclose1": {"name": "CustClose1", "type": "TMenuItem"}, "custclear1": {"name": "CustClear1", "type": "TMenuItem"}, "openpicturedialog1": {"name": "OpenPictureDialog1", "type": "TOpenPictureDialog"}, "cus_imagelist": {"name": "Cus_ImageList", "type": "TImageList"}, "tph_country_prefix": {"name": "tph_country_prefix", "type": "TDBLookupComboBox"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dtpickerbirthdate": {"name": "DTPickerBirthDate", "type": "TDBDateTimeEditEh"}, "xflabel28": {"name": "XFLabel28", "type": "TXFLabel"}, "xflabel98": {"name": "XFLabel98", "type": "TXFLabel"}, "dtpickerdocdate": {"name": "DTPickerDocDate", "type": "TDBDateTimeEditEh"}, "xflabel99": {"name": "XFLabel99", "type": "TXFLabel"}, "dtpickerdocexpirydate": {"name": "DTPickerDocExpiryDate", "type": "TDBDateTimeEditEh"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel27": {"name": "XFLabel27", "type": "TXFLabel"}, "xflabel108": {"name": "XFLabel108", "type": "TXFLabel"}, "xflabel112": {"name": "XFLabel112", "type": "TXFLabel"}, "edit_activity": {"name": "Edit_activity", "type": "TEdit"}, "edit_profession": {"name": "Edit_profession", "type": "TEdit"}, "xflabel113": {"name": "XFLabel113", "type": "TXFLabel"}, "xflabel110": {"name": "XFLabel110", "type": "TXFLabel"}, "xflabel111": {"name": "XFLabel111", "type": "TXFLabel"}, "xflabel114": {"name": "XFLabel114", "type": "TXFLabel"}, "edit_source_of_income": {"name": "Edit_source_of_income", "type": "TEdit"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "cboxcitizenship": {"name": "CBoxCitizenship", "type": "TDBLookupComboBox"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("FormCustNom", null, "TFormCustNom");
    U.var_("Path", '', "String");
    U.var_("Path_B", '', "String");
    U.var_("tg", 0, "integer");
    U.var_("risk_descPERIOD", 0, "integer");
    U.var_("ConvertNominalToCust", false, "Boolean");
  });
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
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "DScustimageStamp")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DScustimageStamp")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t1) => { L0["f"] = $t1; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t2) => { L0["f"] = $t2; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t3) => { L0["f"] = $t3; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t4) => { L0["f"] = $t4; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "DScustimageCUSTSIGN")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DScustimageCUSTSIGN")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t5) => { L0["f"] = $t5; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "DScustimagePhoto")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DScustimagephoto")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t9) => { L0["f"] = $t9; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t11) => { L0["f"] = $t11; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t12) => { L0["f"] = $t12; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormCustNom", "BtnFullNameGeneratorClick", async function BtnFullNameGeneratorClick(Self, p0) {
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
  U.method("TFormCustNom", "CBoxAddressCityCloseUp", async function CBoxAddressCityCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Fakt_Adrs_City")), "KeyValue", (await $.mv((await $.mv((await $.v(C, "DataCustNom")), "Odscities1id")), "AsInteger")));
  await $.mset((await $.v(C, "CityByConctType")), "KeyValue", (await $.mv((await $.mv((await $.v(C, "DataCustNom")), "Odscities1id")), "AsInteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "CBoxDocType1Click", async function CBoxDocType1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue")), (await $.v(C, "null"))))) {
    {
      const $t13 = (await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes"));
      if ($.truthy($.eq((await $.mv((await $.wcall([$t13], "FieldByName", ["pincodforced"], C)), "AsInteger")), 1))) {
        await $.mset((await $.wv([$t13], "EditPINCode1", C, false)), "MaxLength", 7);
        await $.mset((await $.wv([$t13], "EditDocNumber1", C, false)), "MaxLength", 8);
      } else {
        await $.mset((await $.wv([$t13], "EditPINCode1", C, false)), "MaxLength", 50);
        await $.mset((await $.wv([$t13], "EditDocNumber1", C, false)), "MaxLength", 50);
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "FieldByName", ["pincodforced"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "XFLabel92")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFLabel92")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "CBoxDocType1CloseUp", async function CBoxDocType1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue")));
  await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "SetVariable", ["v_doctype", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "Open", []);
  if ($.truthy($.ne((await $.v(C, "tg")), 1))) {
    await $.mcall((await $.mv((await $.v(C, "FormCustNom")), "CBoxDocPlace2")), "Clear", []);
    await $.stmt((await $.call(C, "combobox_add", [(await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), (await $.mv((await $.v(C, "FormCustNom")), "CBoxDocPlace2")), "NAME"])));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DS_issue_country")), "Locate", ["SYMB", "AZ", [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  await $.mset((await $.mv((await $.v(C, "FormCustNom")), "issue_country")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DS_issue_country")), "FieldByName", ["ID"])), "AsInteger")));
  { const $t14 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "FieldByName", ["FORDOCTYPES"])), "AsInteger"));
    if ($.eq($t14, 0)) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DS_issue_country")), "Locate", ["SYMB", "AZ", [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
      await $.mset((await $.mv((await $.v(C, "FormCustNom")), "issue_country")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DS_issue_country")), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.mv((await $.v(C, "FormCustNom")), "issue_country")), "Enabled", false);
    }
    else if ($.eq($t14, 1)) {
      await $.mset((await $.mv((await $.v(C, "FormCustNom")), "issue_country")), "Enabled", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "CBoxDocTypeCloseUp", async function CBoxDocTypeCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", (await $.mv((await $.v(C, "CBoxDocType")), "KeyValue")));
  await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "SetVariable", ["v_doctype", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "Open", []);
  if ($.truthy($.ne((await $.v(C, "tg")), 1))) {
    await $.mcall((await $.mv((await $.v(C, "FormCustNom")), "CBoxDocPlace2")), "Clear", []);
    await $.stmt((await $.call(C, "combobox_add", [(await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), (await $.mv((await $.v(C, "FormCustNom")), "CBoxDocPlace2")), "NAME"])));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DS_issue_country")), "Locate", ["SYMB", "AZ", [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  await $.mset((await $.mv((await $.v(C, "FormCustNom")), "issue_country")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DS_issue_country")), "FieldByName", ["ID"])), "AsInteger")));
  { const $t15 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "FieldByName", ["FORDOCTYPES"])), "AsInteger"));
    if ($.eq($t15, 0)) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DS_issue_country")), "Locate", ["SYMB", "AZ", [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
      await $.mset((await $.mv((await $.v(C, "FormCustNom")), "issue_country")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DS_issue_country")), "FieldByName", ["ID"])), "AsInteger")));
      await $.mset((await $.mv((await $.v(C, "FormCustNom")), "issue_country")), "Enabled", false);
    }
    else if ($.eq($t15, 1)) {
      await $.mset((await $.mv((await $.v(C, "FormCustNom")), "issue_country")), "Enabled", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "ComboBox_riskCloseUp", async function ComboBox_riskCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "DataCustNom"));
    const $t17 = (await $.wv([$t16], "ODS_risk", C, false));
    { const $t18 = (await $.mv((await $.mcall((await $.wv([$t16, $t17], "ODS_risk", C, false)), "FieldByName", ["id"])), "AsInteger"));
      if ($.eq($t18, 1)) {
        await $.mcall((await $.wv([$t16, $t17], "ods_months_sysdat", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t16, $t17], "ods_months_sysdat", C, false)), "SetVariable", [":V_MONTHS", 24])));
        await $.mcall((await $.wv([$t16, $t17], "ods_months_sysdat", C, false)), "open", []);
        await $.mset((await $.wv([$t16, $t17], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "DataCustNom", C, false)), "ods_months_sysdat")), "FieldByName", ["dat"])), "AsVariant")));
      }
      else if ($.eq($t18, 2)) {
        await $.mcall((await $.wv([$t16, $t17], "ods_months_sysdat", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t16, $t17], "ods_months_sysdat", C, false)), "SetVariable", [":V_MONTHS", 12])));
        await $.mcall((await $.wv([$t16, $t17], "ods_months_sysdat", C, false)), "open", []);
        await $.mset((await $.wv([$t16, $t17], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "DataCustNom", C, false)), "ods_months_sysdat")), "FieldByName", ["dat"])), "AsVariant")));
      }
      else if ($.eq($t18, 3)) {
        await $.mcall((await $.wv([$t16, $t17], "ods_months_sysdat", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t16, $t17], "ods_months_sysdat", C, false)), "SetVariable", [":V_MONTHS", 6])));
        await $.mcall((await $.wv([$t16, $t17], "ods_months_sysdat", C, false)), "open", []);
        await $.mset((await $.wv([$t16, $t17], "DateTi_samelydate", C, false)), "Value", (await $.mv((await $.mcall((await $.mv((await $.wv([$t16, $t17], "DataCustNom", C, false)), "ods_months_sysdat")), "FieldByName", ["dat"])), "AsVariant")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "CustAdd1Click", async function CustAdd1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  await $.mset((await $.v(C, "CBoxCitizenship")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBCBox_Citizenship2")), "KeyValue", 1);
  await $.mset((await $.v(C, "DBCBox_Citizenship3")), "KeyValue", 1);
  await $.mset((await $.v(C, "Fakt_Adrs_State")), "KeyValue", 1);
  await $.mset((await $.v(C, "CountryByConctType")), "KeyValue", 1);
  await $.mset((await $.v(C, "CBoxCitizenship")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "Odscountries")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "DBCBox_Citizenship2")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "Citizenship2")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "DBCBox_Citizenship3")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "Citizenship3")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "CBoxBirthState")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "Odscountries1")), "Lookup", ["CNTR_NAME", "Azərbaycan", "CNTR_NAME"])));
  await $.mset((await $.v(C, "CBoxAddressState")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "Odscountries2")), "Lookup", ["CNTR_NAME", "Azərbaycan", "CNTR_NAME"])));
  await $.mset((await $.v(C, "Fakt_Adrs_State")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODSFakt_Adrs_Country")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "CountryByConctType")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "CountryByConctType")), "Lookup", ["CNTR_NAME", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", 2);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", false);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", false);
  await $.mset((await $.v(C, "XFBitcontinue")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "XFButton4")), "Visible", false);
  await $.mset((await $.v(C, "XFButton5")), "Visible", false);
  await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "CustClear1Click", async function CustClear1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": '', "n": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit_activity")), "Clear", []);
  await $.mcall((await $.v(C, "edit_profession")), "Clear", []);
  await $.mcall((await $.v(C, "edit_source_of_income")), "Clear", []);
  await $.mset((await $.v(C, "BtnCust")), "Enabled", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "Controls")), [0])), "Enabled", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "Controls")), [1])), "Enabled", true);
  await $.mcall((await $.v(C, "Edit10")), "Clear", []);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Enabled", true);
  await $.mset((await $.v(C, "Comb_riskdescid")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "ComboBox_risk")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DateTi_samelydate")), "Value", (await $.v(C, "null")));
  await $.mset((await $.v(C, "CBox")), "Enabled", true);
  await $.mset((await $.v(C, "ActionAreaCB")), "Enabled", true);
  await $.mset((await $.v(C, "XFButton4")), "Visible", true);
  await $.mset((await $.v(C, "XFButton5")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Visible", true);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "XFCust")), "Visible", false);
  await $.mset((await $.v(C, "XFBitcontinue")), "Visible", false);
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", 0);
  await $.mcall((await $.v(C, "EditID")), "Clear", []);
  await $.mcall((await $.v(C, "EditFirstName")), "Clear", []);
  await $.mcall((await $.v(C, "EditPatronymic")), "Clear", []);
  await $.mcall((await $.v(C, "EditLastName")), "Clear", []);
  await $.mcall((await $.v(C, "EditPINCode")), "Clear", []);
  await $.mset((await $.v(C, "CBoxGender")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBoxFamStatus")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBoxGroup")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "CBox")), "ItemIndex", (-(1)));
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
  await $.mset((await $.v(C, "ActionAreaCB")), "ItemIndex", (-(1)));
  await $.mcall((await $.v(C, "EditAddress")), "Clear", []);
  await $.mcall((await $.v(C, "EditAddressFactical")), "Clear", []);
  await $.mcall((await $.v(C, "EditPhoneMob")), "Clear", []);
  await $.mcall((await $.v(C, "EditPhoneCity")), "Clear", []);
  await $.mcall((await $.v(C, "EditEmail")), "Clear", []);
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  await $.mset((await $.v(C, "RBtnResident")), "Checked", false);
  await $.mset((await $.v(C, "RBtnNoResident")), "Checked", false);
  await $.mset((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "Active", false);
  await $.mcall((await $.v(C, "MemoNotes")), "Clear", []);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", true);
  await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", true);
  await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", true);
  await $.mset((await $.v(C, "XFLaCBoxDocType1")), "Enabled", true);
  await $.mset((await $.v(C, "CBoxDocType1")), "Enabled", true);
  await $.mset((await $.v(C, "XFLaDocSer1")), "Enabled", true);
  await $.mset((await $.v(C, "EditDocSerie1")), "Enabled", true);
  await $.mset((await $.v(C, "EditDocNumber1")), "Enabled", true);
  await $.mset((await $.v(C, "XFLEPINCode1")), "Enabled", true);
  await $.mset((await $.v(C, "EditPINCode1")), "Enabled", true);
  await $.mset((await $.v(C, "tph_contact_type")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "tph_communication_type")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Db_tph_number")), "Clear", []);
  await $.mset((await $.v(C, "Address_type")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "db_tph_adress")), "clear", []);
  await $.mset((await $.v(C, "CityByConctType")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CountryByConctType")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Edit_url")), "Clear", []);
  await $.mcall((await $.v(C, "Db_tph_extension")), "Clear", []);
  await $.mcall((await $.v(C, "DB_tph_zip")), "Clear", []);
  await $.mset((await $.v(C, "tph_country_prefix")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "db_tph_state")), "Clear", []);
  await $.mset((await $.v(C, "issue_country")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CBoxCitizenship")), "KeyValue", (-(1)));
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
  U.method("TFormCustNom", "CustClose1Click", async function CustClose1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [(await $.call(C, "Format", [" Müştərini bağlamaq istəyirsinizmi    ? ", ["c_id"]])), (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "PG_PCustService")), "CallProcedure", ["close_customers_prosess", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "CustEdit1Click", async function CustEdit1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_id": 0, "c_name": '', "c_open_dat": 0, "c_op_id": 0, "c_inn": '', "c_group_klie": 0, "c_close_dat": 0, "c_nerezident": 0, "c_vid_sob": 0, "c_prinad_kod": 0, "c_cust_type": 0, "c_cust_jur": null, "c_cust_phys": null, "c_cust_fs": null, "c_bik": '', "c_risk_categ": null, "d_risk_categ": null, "c_riskdescid": 0, "c_samelydate": null, "c_category": 0, "d_name": '', "d_soname": '', "d_lastname": '', "d_passer": '', "d_birthday": null, "d_birthplace": '', "d_fam_status": 0, "d_address": '', "d_fakt_adress": '', "d_phone_h": '', "d_e_mail": '', "d_sex": 0, "d_paspnum": '', "d_adrs_state": '', "d_city": '', "d_doc_type": 0, "d_birth_state": '', "d_phone_m": '', "d_paspdate": null, "d_paspplace": '', "d_passpin": '', "d_citizenship": 0, "d_passexpire": null, "d_note": '', "c_editid": 0, "c_org_sob": 0, "c_sfera_dey": 0, "c_otrasl": 0, "c_nalog_kod": 0, "c_short_name": '', "a": 0, "b": 0, "c": 0, "c_incorporation_number": '', "c_tph_contact_type": '', "c_tph_communication_type": '', "c_tph_number": '', "c_address_type": '', "c_address": '', "c_city": null, "c_country_code": null, "c_director_id": 0, "c_dat_ustav": null, "c_dpt_nal": null, "c_email": '', "c_url": '', "c_incorporation_state": '', "c_incorporation_cntr": null, "c_tph_extension": '', "c_tph_zip": '', "c_tph_country_prefix": '', "c_tph_state": '', "d_tph_contact_type": '', "d_tph_country": null, "d_tph_country_code": '', "d_tph_city": null, "d_tph_state": '', "d_tph_zip": '', "d_tph_country_prefix": '', "d_tph_adress": '', "d_tph_communication_type": '', "d_tph_number": '', "d_tph_extension": '', "d_contact_type": '', "d_url": '', "d_doc_country": 0, "d_citizenship2": 0, "d_citizenship3": 0, "d_fakt_country": 0, "d_fakt_city": 0, "d_fakt_zip": '', "d_work_place": '', "d_work_post": '', "d_work_adress": '', "d_work_phone": '', "d_activity": '', "d_profession": '', "d_source_of_income": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "tg", 1);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditID")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştəri seseçilməyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.call(C, "ShowMessage", [" Müştərinin tipi seçilməyib !"])));
    return L0.result;
  }
  { const $t19 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t19, 2)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false))) {
          if ($.truthy(($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
            await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
            return L0.result;
          }
        }
      }
    }
  }
  {
    const $t20 = (await $.mv((await $.v(C, "DataCustNom")), "Ods_Customers_PhysFS_yoxlama"));
    await $.stmt($.wcall([$t20], "close", [], C));
    await $.stmt((await $.wcall([$t20], "SetVariable", ["ID_YOXLAMA", (await $.wcall([$t20], "strtoint", [(await $.mv((await $.wv([$t20], "EditID", C, false)), "Text"))], C))], C)));
    await $.stmt($.wcall([$t20], "Open", [], C));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["passpin"])), "AsString"))))) {
    if ($.truthy(($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
      L0["b"] = (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passpin", (await $.mv((await $.v(C, "EditPINCode1")), "Text"))]]));
      if ($.truthy($.ne(L0["b"], (-(1))))) {
        await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["b"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditPINCode1")), "Text"))), "  Pinkod mövcuddur!")])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["passport"])), "AsString"))))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "EditDocNumber1")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "Ods_Customers_PhysFS_yoxlama")), "FieldByName", ["passp_number"])), "AsString"))))) {
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false)), async () => ($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false)))))) {
      } else {
        if ($.truthy((await $.or_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocSerie1")), "Text"))])), "")), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditDocNumber1")), "Text"))])), "")))))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
          return L0.result;
        } else {
          if ($.truthy($.ne(($.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text")))), ""))) {
            L0["c"] = (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passer_panum", $.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"))]]));
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
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
      return L0.result;
    } else {
      L0["d_passer"] = (await $.mv((await $.v(C, "EditDocSerie")), "Text"));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "EditDocNumber")), "Text", "");
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
      return L0.result;
    } else {
      L0["d_paspnum"] = (await $.mv((await $.v(C, "EditDocNumber")), "Text"));
    }
  }
  { const $t21 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t21, 2)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel11")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditLastName")), "Text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Soy adını daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel9")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFirstName")), "Text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adını daxil edin !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel10")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPatronymic")), "Text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Atasının adını daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel90")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin risk kateqoriyası sahəsi doldurulmayıb !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel95")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Comb_riskdescid")), "text")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Müştərinin risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel96")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
          await $.stmt((await $.call(C, "showmessage", ["Müştərinin eyniləşdirmə tarixi daxil edilməlidir!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel81")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın ölkəsini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel82")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın şəhərini daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel2")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerBirthDate")), "Value")), (await $.v(C, "null"))))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin doğum tarixin daxil edin"])));
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
          await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType")), "Text")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Sənədin növünü  daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel75")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "issue_country")), "Text")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi ölkəni daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel85")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocPlace2")), "text")), ""))) {
          await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi yeri daxil edin  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel98")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerDocDate")), "Value")), (await $.v(C, "null"))))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Sənədin verildiyi tarixi daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel99")), "Visible")), true))) {
        if ($.truthy(($.eq((await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "Value")), (await $.v(C, "null")))))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Sənədin etibarlıq tarixin daxil edin!"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel54")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel25")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel55")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel56")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel58")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel59")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel60")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel112")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_activity")), "text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", [" Fəaliyyət istiqaməti sahəsi  doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel113")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_profession")), "text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", [" Peşəsi sahəsi  doldurulmayıb  !"])));
          return L0.result;
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel114")), "Visible")), true))) {
        if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_source_of_income")), "text"))])), ""))) {
          await $.stmt((await $.call(C, "ShowMessage", [" Gəlir mənbəyi  sahəsi  doldurulmayıb !"])));
          return L0.result;
        }
      }
    }
  }
  L0["c_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "EditID")), "Text"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGroup")), "Text")), []])));
  L0["c_group_klie"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "FieldByName", ["ID"])), "AsInteger"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), true))) {
    L0["c_nerezident"] = 1;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), true))) {
    L0["c_nerezident"] = 0;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "CBox")), "Text")), []])));
  L0["c_vid_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "FieldByName", ["ID"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox3")), "Text")), []])));
  L0["c_prinad_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "FieldByName", ["ID"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUST_RISK_DESC")), "Locate", ["name", (await $.mv((await $.v(C, "Comb_riskdescid")), "Text")), []])));
  L0["c_riskdescid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUST_RISK_DESC")), "FieldByName", ["ID"])), "AsInteger"));
  L0["c_samelydate"] = (await $.mv((await $.v(C, "DateTi_samelydate")), "Value"));
  { const $t22 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t22, 0)) {
      L0["c_cust_type"] = 1;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = 1;
      L0["c_cust_fs"] = "";
    }
    else if ($.eq($t22, 1)) {
      L0["c_cust_type"] = 2;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = 1;
    }
    else if ($.eq($t22, 2)) {
      L0["c_cust_type"] = 4;
      L0["c_cust_jur"] = "";
      L0["c_cust_phys"] = "";
      L0["c_cust_fs"] = "";
    }
  }
  L0["d_name"] = (await $.mv((await $.v(C, "EditFirstName")), "Text"));
  L0["d_soname"] = (await $.mv((await $.v(C, "EditPatronymic")), "Text"));
  L0["d_lastname"] = (await $.mv((await $.v(C, "EditLastName")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit10")), "Text")), ""))) {
    L0["c_name"] = (await $.mv((await $.v(C, "Edit10")), "Text"));
  } else {
    L0["c_name"] = $.add($.add($.add($.add((await $.mv((await $.v(C, "EditLastName")), "Text")), " "), (await $.mv((await $.v(C, "EditFirstName")), "Text"))), " "), (await $.mv((await $.v(C, "EditPatronymic")), "Text")));
  }
  L0["c_short_name"] = (await $.mv((await $.v(C, "EditShort_name1")), "text"));
  L0["d_birthday"] = (await $.mv((await $.v(C, "DTPickerBirthDate")), "Value"));
  L0["d_birthplace"] = (await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), []])));
  L0["d_fam_status"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "FieldByName", ["ID"])), "AsInteger"));
  L0["d_address"] = (await $.mv((await $.v(C, "EditAddress")), "Text"));
  L0["d_fakt_adress"] = (await $.mv((await $.v(C, "EditAddressFactical")), "Text"));
  L0["d_phone_h"] = (await $.mv((await $.v(C, "EditPhoneCity")), "Text"));
  L0["d_e_mail"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGender")), "Text")), []])));
  L0["d_sex"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "FieldByName", ["id"])), "AsInteger"));
  L0["d_adrs_state"] = (await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue"));
  L0["d_city"] = (await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
    L0["d_doc_type"] = 0;
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxDocType1")), "Text")), []])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxDocType1")), "Text")), []])));
    if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Text")), ""))) {
      L0["d_doc_type"] = 0;
    } else {
      L0["d_doc_type"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"));
    }
  }
  L0["d_birth_state"] = (await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue"));
  L0["d_phone_m"] = (await $.mv((await $.v(C, "EditPhoneMob")), "Text"));
  L0["d_paspdate"] = (await $.mv((await $.v(C, "DTPickerDocDate")), "Value"));
  L0["d_paspplace"] = (await $.mv((await $.v(C, "CBoxDocPlace2")), "text"));
  L0["d_passpin"] = (await $.mv((await $.v(C, "EditPINCode")), "Text"));
  L0["d_note"] = (await $.mv((await $.v(C, "MemoNotes")), "Text"));
  L0["d_passexpire"] = (await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "Value"));
  L0["c_editid"] = (await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "EditID")), "Text"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "ActionAreaCB")), "Text")), []])));
  L0["c_sfera_dey"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "FieldByName", ["id"])), "AsInteger"));
  L0["d_doc_country"] = (await $.mv((await $.v(C, "issue_country")), "KeyValue"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxCitizenship")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_citizenship"] = (await $.mv((await $.v(C, "CBoxCitizenship")), "KeyValue"));
  } else {
    L0["d_citizenship"] = 0;
  }
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
  L0["c_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
  L0["c_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
  L0["c_tph_number"] = (await $.mv((await $.v(C, "Db_tph_number")), "Text"));
  L0["c_address_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
  L0["c_address"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
  L0["c_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
  L0["c_country_code"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
  L0["c_email"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
  L0["c_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
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
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Dəyşikliki Yadda saxlanılsınmı ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    { const $t23 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
      if ($.eq($t23, 0) || $.eq($t23, 1) || $.eq($t23, 2)) {
        if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox_risk")), "KeyValue")), (-(1))))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
          L0["d_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_risk")), "FieldByName", ["ID"])), "AsInteger"));
        } else {
          L0["d_risk_categ"] = 0;
        }
        L0["c_risk_categ"] = "";
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
    await $.set(C, "nomid", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "PG_PCustService")), "CallIntegerFunction", ["get_edit_customers_prosess", [L0["c_id"], L0["c_name"], L0["c_short_name"], L0["c_inn"], L0["c_group_klie"], L0["c_nerezident"], L0["c_vid_sob"], L0["c_prinad_kod"], L0["c_cust_type"], L0["c_cust_jur"], L0["c_cust_phys"], L0["c_cust_fs"], L0["c_bik"], L0["c_risk_categ"], L0["d_risk_categ"], L0["c_riskdescid"], L0["c_samelydate"], L0["c_category"], L0["d_name"], L0["d_soname"], L0["d_lastname"], L0["d_passer"], L0["d_birthday"], L0["d_birthplace"], L0["d_fam_status"], L0["d_address"], L0["d_fakt_adress"], L0["d_doc_country"], L0["d_citizenship2"], L0["d_citizenship3"], L0["d_fakt_country"], L0["d_fakt_city"], L0["d_fakt_zip"], L0["d_work_place"], L0["d_work_post"], L0["d_work_adress"], L0["d_work_phone"], L0["d_phone_h"], L0["d_e_mail"], L0["d_sex"], L0["d_paspnum"], L0["d_adrs_state"], L0["d_city"], L0["d_doc_type"], L0["d_birth_state"], L0["d_phone_m"], L0["d_paspdate"], L0["d_paspplace"], L0["d_passpin"], L0["d_citizenship"], L0["d_passexpire"], L0["d_note"], L0["c_org_sob"], L0["c_sfera_dey"], L0["c_otrasl"], L0["c_nalog_kod"], L0["c_incorporation_number"], L0["c_tph_contact_type"], L0["c_tph_communication_type"], L0["c_tph_number"], L0["c_address_type"], L0["c_address"], L0["c_city"], L0["c_country_code"], L0["c_dat_ustav"], L0["c_dpt_nal"], L0["c_email"], L0["c_url"], L0["c_incorporation_state"], L0["c_incorporation_cntr"], L0["c_tph_extension"], L0["c_tph_zip"], L0["c_tph_country_prefix"], L0["c_tph_state"], L0["d_tph_contact_type"], L0["d_tph_country"], L0["d_tph_country_code"], L0["d_tph_city"], L0["d_tph_state"], L0["d_tph_zip"], L0["d_tph_country_prefix"], L0["d_tph_adress"], L0["d_tph_communication_type"], L0["d_tph_number"], L0["d_tph_extension"], L0["d_contact_type"], L0["d_url"], L0["d_activity"], L0["d_profession"], L0["d_source_of_income"]]])));
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "Locate", ["id", L0["c_id"], []])));
    await $.mset((await $.v(C, "OpenAccount")), "retrun_custid", (await $.v(C, "nomid")));
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "CustSearch1Click", async function CustSearch1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_citizen_countries": '', "v_sex": '', "v_fam_status": '', "v_vid_sob": '', "v_group_klie": '', "v_prinad": '', "v_doc_types": '', "v_paspdate": '', "v_passexpire": '', "v_birthdate": '', "v_nerezident": '', "v_cust_type": '', "c_org_sob": '', "c_sfera_dey": '', "c_otrasl": '', "c_nalog_kod": '', "d": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "Active", true);
  if ($.truthy(((await $.or_(($.ne((await $.mv((await $.v(C, "CBoxGender")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "CBoxGender")), "ItemIndex")), (-(1))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGender")), "Text")), []])));
    L0["v_sex"] = $.add(" and nvl(sex,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "FieldByName", ["ID"])), "asstring")));
  } else {
    L0["v_sex"] = "";
  }
  if ($.truthy(((await $.or_(($.ne((await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "CBoxFamStatus")), "ItemIndex")), (-(1))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), []])));
    L0["v_fam_status"] = $.add(" and nvl(fam_status,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_fam_status"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "CBoxGroup")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "CBoxGroup")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGroup")), "Text")), []])));
    L0["v_group_klie"] = $.add(" and nvl(group_klie,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_group_klie"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "CBox")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "CBox")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "CBox")), "Text")), []])));
    L0["v_vid_sob"] = $.add(" and nvl(vid_sob,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["v_vid_sob"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "ActionAreaCB")), "ItemIndex")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "ActionAreaCB")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "ActionAreaCB")), "Text")), []])));
    L0["c_sfera_dey"] = $.add(" and+ nvl(sfera_dey ,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "FieldByName", ["ID"])), "AsString")));
  } else {
    L0["c_sfera_dey"] = "";
  }
  if ($.truthy($.not(((await $.or_(($.eq((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), 0)), async () => ($.eq((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), (-(1)))))))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox3")), "Text")), []])));
    L0["v_prinad"] = $.add(" and nvl(prinad_kod,0)=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "FieldByName", ["ID"])), "AsString")));
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
  { const $t24 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t24, 0)) {
      L0["v_cust_type"] = "and cust_type =1";
    }
    else if ($.eq($t24, 1)) {
      L0["v_cust_type"] = "and cust_type =2";
    }
    else if ($.eq($t24, 2)) {
      L0["v_cust_type"] = "and cust_type =4";
    }
  }
  {
    const $t25 = (await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS"));
    { const $t26 = await $.iset((await $.wv([$t25], "Sql", C, false)), [8], ""); if ($t26 !== undefined) { await $.wset([$t25], "Sql", $t26, C); } }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditID", C, false)), "Text")), ""))) {
      { const $t27 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and ID = "), (await $.mv((await $.wv([$t25], "EditID", C, false)), "Text")))); if ($t27 !== undefined) { await $.wset([$t25], "SQL", $t27, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditFirstName", C, false)), "Text")), ""))) {
      { const $t28 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(FIRSTNAME),0) like upper ('%"), (await $.mv((await $.wv([$t25], "EditFirstName", C, false)), "Text"))), "%')")); if ($t28 !== undefined) { await $.wset([$t25], "SQL", $t28, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditPatronymic", C, false)), "Text")), ""))) {
      { const $t29 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(PATRONYMIC),0) like upper ('%"), (await $.mv((await $.wv([$t25], "EditPatronymic", C, false)), "Text"))), "%')")); if ($t29 !== undefined) { await $.wset([$t25], "SQL", $t29, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditLastName", C, false)), "Text")), ""))) {
      { const $t30 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(LastName),0) like upper ('%"), (await $.mv((await $.wv([$t25], "EditLastName", C, false)), "Text"))), "%')")); if ($t30 !== undefined) { await $.wset([$t25], "SQL", $t30, C); } }
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t25], "EditShort_name1", C, false)), "Text")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Short_name"])), "AsString"))))) {
      if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditShort_name1", C, false)), "Text")), ""))) {
        { const $t31 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(Short_name),0) like upper ('%"), (await $.mv((await $.wv([$t25], "EditShort_name1", C, false)), "Text"))), "%')")); if ($t31 !== undefined) { await $.wset([$t25], "SQL", $t31, C); } }
      }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditPINCode1", C, false)), "Text")), ""))) {
      { const $t32 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and passPIN in("), "'"), (await $.mv((await $.wv([$t25], "EditPINCode1", C, false)), "Text"))), "'"), ")")); if ($t32 !== undefined) { await $.wset([$t25], "SQL", $t32, C); } }
    }
    { const $t33 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_citizen_countries", { get: async () => L0["v_citizen_countries"], set: async (v) => { L0["v_citizen_countries"] = v; }, local: true }, false)))); if ($t33 !== undefined) { await $.wset([$t25], "SQL", $t33, C); } }
    { const $t34 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_sex", { get: async () => L0["v_sex"], set: async (v) => { L0["v_sex"] = v; }, local: true }, false)))); if ($t34 !== undefined) { await $.wset([$t25], "SQL", $t34, C); } }
    { const $t35 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_fam_status", { get: async () => L0["v_fam_status"], set: async (v) => { L0["v_fam_status"] = v; }, local: true }, false)))); if ($t35 !== undefined) { await $.wset([$t25], "SQL", $t35, C); } }
    { const $t36 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_vid_sob", { get: async () => L0["v_vid_sob"], set: async (v) => { L0["v_vid_sob"] = v; }, local: true }, false)))); if ($t36 !== undefined) { await $.wset([$t25], "SQL", $t36, C); } }
    { const $t37 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_group_klie", { get: async () => L0["v_group_klie"], set: async (v) => { L0["v_group_klie"] = v; }, local: true }, false)))); if ($t37 !== undefined) { await $.wset([$t25], "SQL", $t37, C); } }
    { const $t38 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_PRINAD", { get: async () => L0["v_prinad"], set: async (v) => { L0["v_prinad"] = v; }, local: true }, false)))); if ($t38 !== undefined) { await $.wset([$t25], "SQL", $t38, C); } }
    { const $t39 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_doc_types", { get: async () => L0["v_doc_types"], set: async (v) => { L0["v_doc_types"] = v; }, local: true }, false)))); if ($t39 !== undefined) { await $.wset([$t25], "SQL", $t39, C); } }
    { const $t40 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "c_org_sob", { get: async () => L0["c_org_sob"], set: async (v) => { L0["c_org_sob"] = v; }, local: true }, false)))); if ($t40 !== undefined) { await $.wset([$t25], "SQL", $t40, C); } }
    { const $t41 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "c_sfera_dey", { get: async () => L0["c_sfera_dey"], set: async (v) => { L0["c_sfera_dey"] = v; }, local: true }, false)))); if ($t41 !== undefined) { await $.wset([$t25], "SQL", $t41, C); } }
    { const $t42 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "c_otrasl", { get: async () => L0["c_otrasl"], set: async (v) => { L0["c_otrasl"] = v; }, local: true }, false)))); if ($t42 !== undefined) { await $.wset([$t25], "SQL", $t42, C); } }
    { const $t43 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "c_nalog_kod", { get: async () => L0["c_nalog_kod"], set: async (v) => { L0["c_nalog_kod"] = v; }, local: true }, false)))); if ($t43 !== undefined) { await $.wset([$t25], "SQL", $t43, C); } }
    if ($.truthy($.eq((await $.mv((await $.wv([$t25], "EditDocSerie1", C, false)), "Enabled")), (await $.wv([$t25], "false", C, false))))) {
      await $.mset((await $.wv([$t25], "EditDocSerie", C, false)), "Text", "");
    } else {
      if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditDocSerie", C, false)), "Text")), ""))) {
        { const $t44 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(passport),0) like upper('%"), (await $.mv((await $.wv([$t25], "EditDocSerie", C, false)), "Text"))), "%')")); if ($t44 !== undefined) { await $.wset([$t25], "SQL", $t44, C); } }
      }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditDocNumber", C, false)), "Text")), ""))) {
      { const $t45 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(passp_number),0) like upper('%"), (await $.mv((await $.wv([$t25], "EditDocNumber", C, false)), "Text"))), "%')")); if ($t45 !== undefined) { await $.wset([$t25], "SQL", $t45, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "CBoxDocPlace2", C, false)), "text")), ""))) {
      { const $t46 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(paspplace),0) like  upper('%"), (await $.mv((await $.wv([$t25], "CBoxDocPlace2", C, false)), "text"))), "%')")); if ($t46 !== undefined) { await $.wset([$t25], "SQL", $t46, C); } }
    }
    { const $t47 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_PASPDATE", { get: async () => L0["v_paspdate"], set: async (v) => { L0["v_paspdate"] = v; }, local: true }, false)))); if ($t47 !== undefined) { await $.wset([$t25], "SQL", $t47, C); } }
    { const $t48 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_passexpire", { get: async () => L0["v_passexpire"], set: async (v) => { L0["v_passexpire"] = v; }, local: true }, false)))); if ($t48 !== undefined) { await $.wset([$t25], "SQL", $t48, C); } }
    { const $t49 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_birthdate", { get: async () => L0["v_birthdate"], set: async (v) => { L0["v_birthdate"] = v; }, local: true }, false)))); if ($t49 !== undefined) { await $.wset([$t25], "SQL", $t49, C); } }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "CBoxBirthState", C, false)), "KeyValue")), ""))) {
      { const $t50 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(birthplace),0) like upper ('%"), (await $.mv((await $.wv([$t25], "CBoxBirthState", C, false)), "text"))), "%')")); if ($t50 !== undefined) { await $.wset([$t25], "SQL", $t50, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "CBoxBirthCity", C, false)), "KeyValue")), ""))) {
      { const $t51 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(BIRTH_STATE),0) like upper ('%"), (await $.mv((await $.wv([$t25], "CBoxBirthCity", C, false)), "text"))), "%')")); if ($t51 !== undefined) { await $.wset([$t25], "SQL", $t51, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "CBoxAddressState", C, false)), "KeyValue")), ""))) {
      { const $t52 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(adrs_state),0) like upper ('%"), (await $.mv((await $.wv([$t25], "CBoxAddressState", C, false)), "text"))), "%')")); if ($t52 !== undefined) { await $.wset([$t25], "SQL", $t52, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "CBoxAddressCity", C, false)), "KeyValue")), ""))) {
      { const $t53 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(adrs_city),0) like upper ('%"), (await $.mv((await $.wv([$t25], "CBoxAddressCity", C, false)), "text"))), "%')")); if ($t53 !== undefined) { await $.wset([$t25], "SQL", $t53, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditAddress", C, false)), "Text")), ""))) {
      { const $t54 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(adress ),0) like upper ('%"), (await $.mv((await $.wv([$t25], "EditAddress", C, false)), "Text"))), "%')")); if ($t54 !== undefined) { await $.wset([$t25], "SQL", $t54, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditAddressFactical", C, false)), "Text")), ""))) {
      { const $t55 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(fakt_adress),0) like upper ('%"), (await $.mv((await $.wv([$t25], "EditAddressFactical", C, false)), "Text"))), "%')")); if ($t55 !== undefined) { await $.wset([$t25], "SQL", $t55, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditPhoneMob", C, false)), "Text")), ""))) {
      { const $t56 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(phone_mob),0) like upper ('%"), (await $.mv((await $.wv([$t25], "EditPhoneMob", C, false)), "Text"))), "%')")); if ($t56 !== undefined) { await $.wset([$t25], "SQL", $t56, C); } }
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t25], "EditPhoneCity", C, false)), "Text")), ""))) {
      { const $t57 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add($.add($.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), " and nvl(upper(phone),0) like upper ('%"), (await $.mv((await $.wv([$t25], "EditPhoneCity", C, false)), "Text"))), "%')")); if ($t57 !== undefined) { await $.wset([$t25], "SQL", $t57, C); } }
    }
    { const $t58 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_nerezident", { get: async () => L0["v_nerezident"], set: async (v) => { L0["v_nerezident"] = v; }, local: true }, false)))); if ($t58 !== undefined) { await $.wset([$t25], "SQL", $t58, C); } }
    { const $t59 = await $.iset((await $.wv([$t25], "SQL", C, false)), [8], $.add((await $.idx((await $.wv([$t25], "SQL", C, false)), [8])), (await $.wv([$t25], "v_CUST_TYPE", { get: async () => L0["v_cust_type"], set: async (v) => { L0["v_cust_type"] = v; }, local: true }, false)))); if ($t59 !== undefined) { await $.wset([$t25], "SQL", $t59, C); } }
    await $.mset((await $.wv([$t25], "Memo1", C, false)), "Text", $.add((await $.mv((await $.wv([$t25], "SQL", C, false)), "Text")), (await $.idx((await $.wv([$t25], "SQL", C, false)), [8]))));
    if ($.truthy((await $.wv([$t25], "Active", C, false)))) {
      await $.stmt($.wcall([$t25], "Refresh", [], C));
    } else {
      await $.stmt($.wcall([$t25], "Open", [], C));
    }
    if ($.truthy($.eq((await $.wv([$t25], "RecordCount", C, false)), 0))) {
      if ($.truthy($.eq((await $.wcall([$t25], "MessageDlg", ["Müştəri tapılmadı?", (await $.wv([$t25], "mtConfirmation", C, false)), [(await $.wv([$t25], "mbYes", C, false)), (await $.wv([$t25], "mbNo", C, false))], 0, (await $.wv([$t25], "mbYes", C, false))], C)), (await $.wv([$t25], "mrYes", C, false))))) {
        return L0.result;
      }
    }
    await $.mset((await $.mv((await $.wv([$t25], "FormCustGrid", C, false)), "MainGrid")), "DataSource", (await $.mv((await $.wv([$t25], "DataCustNom", C, false)), "DS_CUSTOMERS_PHYS_FS")));
    await $.mcall((await $.wv([$t25], "FormCustGrid", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "Edit10Change", async function Edit10Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit10")), "Text")), ""))) {
    await $.mset((await $.v(C, "EditShort_name1")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "convertpack")), "CallstringFunction", ["CONVERT_INT", [(await $.mv((await $.v(C, "Edit10")), "Text"))]])));
  } else {
    await $.mset((await $.v(C, "EditShort_name1")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "Edit10KeyPress", async function Edit10KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t60 = L0["sender"];
      await $.stmt((await $.wcall([$t60], "SelectNext", [(await $.wv([$t60], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t60], "True", C, false)), (await $.wv([$t60], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormCustNom", "EditAddressChange", async function EditAddressChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditAddressFactical")), "Text", (await $.mv((await $.v(C, "EditAddress")), "Text")));
  await $.mset((await $.v(C, "db_tph_adress")), "Text", (await $.mv((await $.v(C, "EditAddress")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "EditDocNumber1Change", async function EditDocNumber1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocNumber")), "Text", (await $.mv((await $.v(C, "EditDocNumber1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "EditDocNumberChange", async function EditDocNumberChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocNumber1")), "Text", (await $.mv((await $.v(C, "EditDocNumber")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "EditDocSerie1Change", async function EditDocSerie1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocSerie")), "Text", (await $.mv((await $.v(C, "EditDocSerie1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "EditDocSerieChange", async function EditDocSerieChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDocSerie1")), "Text", (await $.mv((await $.v(C, "EditDocSerie")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "EditFirstNameKeyPress", async function EditFirstNameKeyPress(Self, p0, p1) {
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
  U.method("TFormCustNom", "EditIDKeyPress", async function EditIDKeyPress(Self, p0, p1) {
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
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "Upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormCustNom", "EditLastNameKeyPress", async function EditLastNameKeyPress(Self, p0, p1) {
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
  U.method("TFormCustNom", "EditPatronymicKeyPress", async function EditPatronymicKeyPress(Self, p0, p1) {
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
  U.method("TFormCustNom", "EditPINCode1Change", async function EditPINCode1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditPINCode")), "Text", (await $.mv((await $.v(C, "EditPINCode1")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "EditPINCode1KeyPress", async function EditPINCode1KeyPress(Self, p0, p1) {
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
  U.method("TFormCustNom", "EditPINCodeChange", async function EditPINCodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditPINCode1")), "Text", (await $.mv((await $.v(C, "EditPINCode")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormCustNom", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataCustNom", (await $.mcall((await $.v(C, "TDataCustNom")), "Create", [Self])));
  await $.set(C, "FormCustGrid", (await $.mcall((await $.v(C, "TFormCustGrid")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": '', "n": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex", 2);
  await $.mset((await $.v(C, "RBtnResident")), "Checked", true);
  await $.mset((await $.v(C, "PageControl1")), "TabIndex", 0);
  await $.stmt($.call(C, "Fill_Edit", []));
  await $.set(C, "ConvertNominalToCust", false);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxGender")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "First", []);
    { const $t66 = $.sub((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t67 = true;
      for (;;) {
        if (!$t67) { L0["i"] = $.succ(L0["i"], 1); }
        $t67 = false;
        if (!($.ord(L0["i"]) <= $.ord($t66))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxGender")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ActionAreaCB")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "First", []);
    { const $t68 = $.sub((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t69 = true;
      for (;;) {
        if (!$t69) { L0["i"] = $.succ(L0["i"], 1); }
        $t69 = false;
        if (!($.ord(L0["i"]) <= $.ord($t68))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ActionAreaCB")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxFamStatus")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "First", []);
    { const $t70 = $.sub((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t71 = true;
      for (;;) {
        if (!$t71) { L0["i"] = $.succ(L0["i"], 1); }
        $t71 = false;
        if (!($.ord(L0["i"]) <= $.ord($t70))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxFamStatus")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxGroup")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "First", []);
    { const $t72 = $.sub((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t73 = true;
      for (;;) {
        if (!$t73) { L0["i"] = $.succ(L0["i"], 1); }
        $t73 = false;
        if (!($.ord(L0["i"]) <= $.ord($t72))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxGroup")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "FieldByName", ["NAME"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBox")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "First", []);
    { const $t74 = $.sub((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t75 = true;
      for (;;) {
        if (!$t75) { L0["i"] = $.succ(L0["i"], 1); }
        $t75 = false;
        if (!($.ord(L0["i"]) <= $.ord($t74))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBox")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "FieldByName", ["NAME"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ComboBox3")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "First", []);
    { const $t76 = $.sub((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t77 = true;
      for (;;) {
        if (!$t77) { L0["i"] = $.succ(L0["i"], 1); }
        $t77 = false;
        if (!($.ord(L0["i"]) <= $.ord($t76))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox3")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "FieldByName", ["NAME"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "Next", []);
        await $.tick();
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "CBoxDocPlace2")), "Items")), "Count")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "First", []);
    { const $t78 = $.sub((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t79 = true;
      for (;;) {
        if (!$t79) { L0["i"] = $.succ(L0["i"], 1); }
        $t79 = false;
        if (!($.ord(L0["i"]) <= $.ord($t78))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBoxDocPlace2")), "Items")), "Add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "FieldByName", ["name"])), "AsString"))])));
        await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "Next", []);
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "RBtnNoResidentClick", async function RBtnNoResidentClick(Self, p0) {
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
  U.method("TFormCustNom", "RBtnNoResidentKeyPress", async function RBtnNoResidentKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t80 = L0["sender"];
      await $.stmt((await $.wcall([$t80], "SelectNext", [(await $.wv([$t80], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t80], "True", C, false)), (await $.wv([$t80], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormCustNom", "RBtnResidentClick", async function RBtnResidentClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), true))) {
    await $.stmt((await $.call(C, "CBoxDocType1CloseUp", [L0["sender"]])));
    await $.mset((await $.v(C, "EditPINCode")), "MaxLength", 10);
    await $.mset((await $.v(C, "EditDocSerie")), "Text", "AZE");
    await $.mset((await $.v(C, "CBoxDocType1")), "KeyValue", 1);
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", 1);
    await $.mset((await $.v(C, "EditDocNumber1")), "MaxLength", 10);
    await $.mset((await $.v(C, "EditDocNumber")), "MaxLength", 10);
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue")));
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "SetVariable", ["v_doctype", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "odsPassDeps")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "RBtnResidentKeyPress", async function RBtnResidentKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t81 = L0["sender"];
      await $.stmt((await $.wcall([$t81], "SelectNext", [(await $.wv([$t81], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t81], "True", C, false)), (await $.wv([$t81], "True", C, false))], C)));
    }
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormCustNom", "XFBitcontinueClick", async function XFBitcontinueClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "a": 0, "b": 0, "c": 0, "d_doc_type": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), (-(1)))))) {
    await $.stmt((await $.call(C, "showmessage", [" Yeni müştərini daxil etmək üçün onun tipini seçin   !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false))) {
    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))))) {
    await $.stmt((await $.call(C, "showmessage", ["PİN Kod və Senedin  Seriya nömresi eynidir  !"])));
    return L0.result;
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
    L0["b"] = (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passpin", (await $.mv((await $.v(C, "EditPINCode1")), "Text"))]]));
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
        L0["c"] = (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passer_panum", $.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"))]]));
        if ($.truthy($.ne(L0["c"], (-(1))))) {
          await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add($.add($.add((await $.call(C, "inttostr", [L0["c"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditDocSerie1")), "Text"))), " /"), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), "  Sənədin  seryasi mövcuddur!")])));
          return L0.result;
        }
        await $.mset((await $.v(C, "XFBitcontinue")), "Visible", false);
        await $.mset((await $.v(C, "XFCust")), "Visible", true);
        await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", false);
        await $.mset((await $.v(C, "XFButton4")), "Visible", false);
        await $.mset((await $.v(C, "XFButton5")), "Visible", false);
        await $.mset((await $.v(C, "XFRadioGroupCust_type")), "Visible", true);
        await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [1])), "TabVisible", true);
        await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [2])), "TabVisible", true);
        await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [3])), "TabVisible", true);
        await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [4])), "TabVisible", true);
        await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [5])), "TabVisible", true);
        await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [6])), "TabVisible", true);
        await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [7])), "TabVisible", true);
        await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", false);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0, "a": 0, "b": 0, "c": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OpenAccount")), "retrun_custid", (-(1)));
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger")), 0))) {
    { const $t82 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
      if ($.eq($t82, 2)) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false))) {
          if ($.truthy(($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
            await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
            return L0.result;
          }
        }
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditPINCode1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))))) {
      await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
      await $.stmt((await $.call(C, "showmessage", ["PİN Kod və Senedin  Seriya nömresi eynidir  !"])));
      return L0.result;
    }
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "RBtnResident")), "Checked")), false)), async () => ($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false)))))) {
      await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
      await $.stmt((await $.call(C, "ShowMessage", [" Rezident və ya  Qeyr Rezident Sahəsi seçilməyib  ! "])));
      return L0.result;
    }
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false)), async () => ($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false)))))) {
    } else {
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Text")), "")))))) {
        await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
        await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
        return L0.result;
      }
    }
    { const $t83 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
      if ($.eq($t83, 0) || $.eq($t83, 1) || $.eq($t83, 2)) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel11")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditLastName")), "Text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
            await $.stmt((await $.call(C, "ShowMessage", ["Soy adını daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel9")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFirstName")), "Text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
            await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adını daxil edin !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel10")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPatronymic")), "Text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 1);
            await $.stmt((await $.call(C, "ShowMessage", ["Atasının adını daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel90")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
            await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin risk kateqoriyası sahəsi doldurulmayıb !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel95")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "Comb_riskdescid")), "text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
            await $.stmt((await $.call(C, "showmessage", ["Müştərinin risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel96")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 2);
            await $.stmt((await $.call(C, "showmessage", ["Müştərinin eyniləşdirmə tarixi daxil edilməlidir!"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel81")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın ölkəsini daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel82")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın şəhərini daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel2")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerBirthDate")), "Value")), (await $.v(C, "null"))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin doğum tarixin daxil edin"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel83")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın ölkəsini daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel84")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanın şəhərini daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel80")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "EditAddress")), "Text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["Qeydiyyat ünvanı sahəsi doldurulmayib !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel68")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "Fakt_Adrs_State")), "Text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın ölkəsini daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel69")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "Fakt_Adrs_City")), "Text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın şəhərini daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel28")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "EditAddressFactical")), "Text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 3);
            await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType")), "Text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
            await $.stmt((await $.call(C, "showmessage", ["Sənədin növünü  daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel75")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "issue_country")), "Text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
            await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi ölkəni daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel85")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocPlace2")), "text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
            await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi yeri daxil edin  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel98")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerDocDate")), "Value")), (await $.v(C, "null"))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
            await $.stmt((await $.call(C, "ShowMessage", ["Sənədin verildiyi tarixi daxil edin!"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel99")), "Visible")), true))) {
          if ($.truthy(($.eq((await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "Value")), (await $.v(C, "null")))))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 4);
            await $.stmt((await $.call(C, "ShowMessage", ["Sənədin etibarlıq tarixin daxil edin!"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel54")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
            await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel25")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
            await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel55")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
            await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel56")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
            await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel58")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
            await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel59")), "Visible")), true))) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
            await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel60")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 5);
            await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel112")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_activity")), "text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
            await $.stmt((await $.call(C, "ShowMessage", [" Fəaliyyət istiqaməti sahəsi  doldurulmayıb  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel113")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_profession")), "text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
            await $.stmt((await $.call(C, "ShowMessage", [" Peşəsi sahəsi  doldurulmayıb  !"])));
            return L0.result;
          }
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel114")), "Visible")), true))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_source_of_income")), "text"))])), ""))) {
            await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 6);
            await $.stmt((await $.call(C, "ShowMessage", [" Gəlir mənbəyi  sahəsi  doldurulmayıb !"])));
            return L0.result;
          }
        }
      }
    }
    await $.stmt((await $.call(C, "CustEdit1Click", [L0["sender"]])));
  }
  await $.mcall((await $.v(C, "FormCustNom")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OpenAccount")), "retrun_custid", (-(1)));
  await $.mcall((await $.v(C, "FormCustNom")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustClear1")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "XFCustClick", async function XFCustClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_name": '', "c_open_dat": 0, "c_op_id": 0, "c_inn": '', "c_group_klie": 0, "c_close_dat": 0, "c_nerezident": 0, "c_vid_sob": 0, "c_prinad_kod": 0, "c_cust_type": 0, "c_cust_jur": null, "c_cust_phys": null, "c_cust_fs": null, "c_risk_categ": null, "d_risk_categ": null, "c_riskdescid": 0, "c_samelydate": null, "c_bik": '', "c_category": 0, "c_address_typee": '', "d_name": '', "d_soname": '', "d_lastname": '', "d_passer": '', "d_birthday": null, "d_birthplace": '', "d_fam_status": 0, "d_address": '', "d_fakt_adress": '', "d_phone_h": '', "d_e_mail": '', "d_sex": 0, "d_paspnum": '', "d_adrs_state": '', "d_city": '', "d_doc_type": 0, "d_birth_state": '', "d_phone_m": '', "d_paspdate": null, "d_paspplace": '', "d_passpin": '', "d_citizenship": 0, "d_passexpire": null, "d_note": '', "c_org_sob": 0, "c_sfera_dey": 0, "c_otrasl": 0, "c_nalog_kod": 0, "c_short_name": '', "ms": null, "a": 0, "b": 0, "c": 0, "c_dat_ustav": null, "c_dpt_nal": null, "c_incorporation_number": '', "c_tph_contact_type": '', "c_tph_communication_type": '', "c_tph_number": '', "c_address_type": null, "c_address": '', "c_city": null, "c_country_code": null, "c_director_id": 0, "c_email": '', "c_url": '', "c_incorporation_state": '', "c_incorporation_cntr": null, "c_tph_extension": '', "c_tph_zip": '', "c_tph_country_prefix": '', "c_tph_state": '', "d_tph_contact_type": '', "d_tph_country": '', "d_tph_country_code": '', "d_tph_city": '', "d_tph_state": '', "d_tph_zip": '', "d_tph_country_prefix": '', "d_tph_adress": '', "d_tph_communication_type": '', "d_tph_number": '', "d_tph_extension": '', "d_contact_type": null, "d_url": '', "d_doc_country": 0, "d_citizenship2": 0, "d_citizenship3": 0, "d_fakt_country": 0, "d_fakt_city": null, "d_fakt_zip": '', "d_work_place": '', "d_work_post": '', "d_work_adress": '', "d_work_phone": '', "d_activity": '', "d_profession": '', "d_source_of_income": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["c_cust_type"] = (-(1));
  L0["c_nerezident"] = 1;
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.call(C, "ShowMessage", [" Yeni müştərini əlavə etmək üçün onun tipini seçin  !"])));
    return L0.result;
  }
  { const $t84 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
    if ($.eq($t84, 0) || $.eq($t84, 1) || $.eq($t84, 2)) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel92")), "Visible")), true))) {
        if ($.truthy($.eq((await $.mv((await $.v(C, "RBtnNoResident")), "Checked")), false))) {
          if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode1")), "Text"))])), ""))) {
            await $.stmt((await $.call(C, "showmessage", ["Pinkod sahəsi boşdur"])));
            return L0.result;
          }
        }
      }
      { const $t85 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
        if ($.eq($t85, 0) || $.eq($t85, 1) || $.eq($t85, 2)) {
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel11")), "Visible")), true))) {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditLastName")), "Text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Soy adını daxil edin  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel9")), "Visible")), true))) {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditFirstName")), "Text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adını daxil edin !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel10")), "Visible")), true))) {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPatronymic")), "Text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Atasının adını daxil edin  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel90")), "Visible")), true))) {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "ComboBox_risk")), "text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin risk kateqoriyası sahəsi doldurulmayıb !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel95")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "Comb_riskdescid")), "text")), ""))) {
              await $.stmt((await $.call(C, "showmessage", ["Müştərinin risk kateqoriyasının təyinatı  sahəsi doldurulmayıb!"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel96")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "DateTi_samelydate")), "value")), (await $.v(C, "null"))))) {
              await $.stmt((await $.call(C, "showmessage", ["Müştərinin eyniləşdirmə tarixi daxil edilməlidir!"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel81")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue")), ""))) {
              await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın ölkəsini daxil edin  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel82")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue")), ""))) {
              await $.stmt((await $.call(C, "showmessage", ["Doğum haqqında məlumatın şəhərini daxil edin  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel2")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerBirthDate")), "Value")), (await $.v(C, "null"))))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin doğum tarixin daxil edin"])));
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
              await $.stmt((await $.call(C, "showmessage", ["Faktiki ünvanın daxil edin  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel87")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType")), "Text")), ""))) {
              await $.stmt((await $.call(C, "showmessage", ["Sənədin növünü  daxil edin  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel75")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "issue_country")), "Text")), ""))) {
              await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi ölkəni daxil edin  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel85")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocPlace2")), "text")), ""))) {
              await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi yeri daxil edin  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel98")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickerDocDate")), "Value")), (await $.v(C, "null"))))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Sənədin verildiyi tarixi daxil edin!"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel99")), "Visible")), true))) {
            if ($.truthy(($.eq((await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "Value")), (await $.v(C, "null")))))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Sənədin etibarlıq tarixin daxil edin!"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel54")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "text")), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["əlaqə növü sahəsi  seçilməyib !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel25")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "text")), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ölkə sahəsi seçilməyib  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel55")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "text")), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Şəhər sahəsi seçilməyib  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel56")), "Visible")), true))) {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "db_tph_adress")), "text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Ünvan  sahəsi doldurulmayıb  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel58")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "text")), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə telefon nömrəsinin tipi  sahəsi seçilməyib  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel59")), "Visible")), true))) {
            if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "text")), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Rabitə növünə görə telefon nömrəsinin tipi sahəsi seçilməyib  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel60")), "Visible")), true))) {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Db_tph_number")), "text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", ["Əlaqə növünə görə  Nömrə  sahəsi doldurulmayıb  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel112")), "Visible")), true))) {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_activity")), "text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", [" Fəaliyyət istiqaməti sahəsi  doldurulmayıb  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel113")), "Visible")), true))) {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_profession")), "text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", [" Peşəsi sahəsi  doldurulmayıb  !"])));
              return L0.result;
            }
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel114")), "Visible")), true))) {
            if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_source_of_income")), "text"))])), ""))) {
              await $.stmt((await $.call(C, "ShowMessage", [" Gəlir mənbəyi  sahəsi  doldurulmayıb !"])));
              return L0.result;
            }
          }
        }
      }
      if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxGroup")), "ItemIndex")), (-(1))))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGroup")), "Text")), []])));
        L0["c_group_klie"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ClientGroupData")), "FieldByName", ["ID"])), "AsInteger"));
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
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "Locate", ["name", (await $.mv((await $.v(C, "CBox")), "Text")), []])));
        L0["c_vid_sob"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "EstateTypeData")), "FieldByName", ["ID"])), "AsInteger"));
      } else {
        L0["c_vid_sob"] = 0;
      }
      if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox3")), "ItemIndex")), (-(1))))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox3")), "Text")), []])));
        L0["c_prinad_kod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "RelationData")), "FieldByName", ["ID"])), "AsInteger"));
      } else {
        L0["c_prinad_kod"] = 0;
      }
      { const $t86 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
        if ($.eq($t86, 0)) {
          L0["c_cust_type"] = 1;
          L0["c_cust_jur"] = "";
          L0["c_cust_phys"] = 1;
          L0["c_cust_fs"] = "";
        }
        else if ($.eq($t86, 1)) {
          L0["c_cust_type"] = 2;
          L0["c_cust_jur"] = "";
          L0["c_cust_phys"] = "";
          L0["c_cust_fs"] = 1;
        }
        else if ($.eq($t86, 2)) {
          L0["c_cust_type"] = 4;
          L0["c_cust_jur"] = "";
          L0["c_cust_phys"] = "";
          L0["c_cust_fs"] = "";
        }
      }
    }
  }
  L0["d_name"] = (await $.mv((await $.v(C, "EditFirstName")), "Text"));
  L0["d_soname"] = (await $.mv((await $.v(C, "EditPatronymic")), "Text"));
  L0["d_lastname"] = (await $.mv((await $.v(C, "EditLastName")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit10")), "Text")), ""))) {
    L0["c_name"] = (await $.mv((await $.v(C, "Edit10")), "Text"));
  } else {
    L0["c_name"] = $.add($.add($.add($.add((await $.mv((await $.v(C, "EditLastName")), "Text")), " "), (await $.mv((await $.v(C, "EditFirstName")), "Text"))), " "), (await $.mv((await $.v(C, "EditPatronymic")), "Text")));
  }
  L0["c_short_name"] = (await $.mv((await $.v(C, "EditShort_name1")), "text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "EditDocSerie")), "Text", "");
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocSerie")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
      return L0.result;
    } else {
      L0["d_passer"] = (await $.mv((await $.v(C, "EditDocSerie")), "Text"));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "EditDocNumber")), "Text", "");
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDocNumber")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Sənədin Seriya / N_si sahəsi tam doldurulmayıb     !"])));
      return L0.result;
    } else {
      L0["d_paspnum"] = (await $.mv((await $.v(C, "EditDocNumber")), "Text"));
    }
  }
  if ($.truthy($.ne(($.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text")))), ""))) {
    L0["c"] = (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passer_panum", $.add((await $.mv((await $.v(C, "EditDocSerie1")), "Text")), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), (await $.mv((await $.v(C, "CBoxDocType1")), "KeyValue"))]]));
    if ($.truthy($.ne(L0["c"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add($.add($.add((await $.call(C, "inttostr", [L0["c"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditDocSerie1")), "Text"))), " /"), (await $.mv((await $.v(C, "EditDocNumber1")), "Text"))), "  Sənədin  seryasi mövcuddur!")])));
      return L0.result;
    }
  }
  if ($.truthy(($.ne((await $.mv((await $.v(C, "EditPINCode1")), "Text")), "")))) {
    L0["b"] = (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "PG_PCustService")), "CallIntegerFunction", ["get_Add_cust_yoxlama", ["p_passpin", (await $.mv((await $.v(C, "EditPINCode1")), "Text"))]]));
    if ($.truthy($.ne(L0["b"], (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [$.add($.add($.add((await $.call(C, "inttostr", [L0["b"]])), " -ID li Müştəri üçün "), (await $.mv((await $.v(C, "EditPINCode1")), "Text"))), "  Pinkod mövcuddur!")])));
      return L0.result;
    }
  }
  L0["d_passpin"] = (await $.mv((await $.v(C, "EditPINCode")), "Text"));
  L0["d_birthday"] = (await $.mv((await $.v(C, "DTPickerBirthDate")), "Value"));
  L0["d_birthplace"] = (await $.mv((await $.v(C, "CBoxBirthState")), "KeyValue"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxFamStatus")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), []])));
    L0["d_fam_status"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsFamstatus")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["d_fam_status"] = 0;
  }
  L0["d_address"] = (await $.mv((await $.v(C, "EditAddress")), "Text"));
  L0["d_fakt_adress"] = (await $.mv((await $.v(C, "EditAddressFactical")), "Text"));
  L0["d_phone_h"] = (await $.mv((await $.v(C, "EditPhoneCity")), "Text"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxGender")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxGender")), "Text")), []])));
    L0["d_sex"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsGender")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["d_sex"] = 0;
  }
  L0["d_adrs_state"] = (await $.mv((await $.v(C, "CBoxAddressState")), "KeyValue"));
  L0["d_city"] = (await $.mv((await $.v(C, "CBoxAddressCity")), "KeyValue"));
  L0["d_paspplace"] = (await $.mv((await $.v(C, "CBoxDocPlace2")), "text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxDocType1")), "Enabled")), false))) {
    await $.mset((await $.v(C, "CBoxDocType")), "KeyValue", (-(1)));
  } else {
    if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxDocType")), "KeyValue")), (-(1))))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "Locate", ["name", (await $.mv((await $.v(C, "CBoxDocType")), "Text")), []])));
      L0["d_doc_type"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "OdsDoctaypes")), "FieldByName", ["ID"])), "AsInteger"));
    } else {
      L0["d_doc_type"] = 0;
    }
  }
  L0["d_birth_state"] = (await $.mv((await $.v(C, "CBoxBirthCity")), "KeyValue"));
  L0["d_phone_m"] = (await $.mv((await $.v(C, "EditPhoneMob")), "Text"));
  L0["d_paspdate"] = (await $.mv((await $.v(C, "DTPickerDocDate")), "Value"));
  L0["d_note"] = (await $.mv((await $.v(C, "MemoNotes")), "Text"));
  L0["d_passexpire"] = (await $.mv((await $.v(C, "DTPickerDocExpiryDate")), "Value"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "ActionAreaCB")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "Locate", ["name", (await $.mv((await $.v(C, "ActionAreaCB")), "Text")), []])));
    L0["c_sfera_dey"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ActionAreaData")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_sfera_dey"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "Comb_riskdescid")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUST_RISK_DESC")), "Locate", ["name", (await $.mv((await $.v(C, "Comb_riskdescid")), "Text")), []])));
    L0["c_riskdescid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUST_RISK_DESC")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["c_riskdescid"] = 0;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox_risk")), "KeyValue")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_risk")), "Locate", ["name", (await $.mv((await $.v(C, "ComboBox_risk")), "Text")), []])));
    L0["d_risk_categ"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_risk")), "FieldByName", ["ID"])), "AsInteger"));
  } else {
    L0["d_risk_categ"] = 0;
  }
  L0["d_doc_country"] = (await $.mv((await $.v(C, "issue_country")), "KeyValue"));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CBoxCitizenship")), "KeyValue")), (await $.v(C, "null"))))) {
    L0["d_citizenship"] = (await $.mv((await $.v(C, "CBoxCitizenship")), "KeyValue"));
  } else {
    L0["d_citizenship"] = 0;
  }
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
  L0["c_samelydate"] = (await $.mv((await $.v(C, "DateTi_samelydate")), "Value"));
  L0["d_fakt_country"] = (await $.mv((await $.v(C, "Fakt_Adrs_State")), "KeyValue"));
  L0["d_fakt_city"] = (await $.mv((await $.v(C, "Fakt_Adrs_City")), "KeyValue"));
  L0["d_fakt_zip"] = (await $.mv((await $.v(C, "ZipFakt")), "Text"));
  L0["d_work_place"] = (await $.mv((await $.v(C, "Work_Place")), "Text"));
  L0["d_work_post"] = (await $.mv((await $.v(C, "Work_Post")), "Text"));
  L0["d_work_adress"] = (await $.mv((await $.v(C, "Work_Address")), "Text"));
  L0["d_work_phone"] = (await $.mv((await $.v(C, "Work_Phone")), "Text"));
  L0["c_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue"));
  L0["c_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue"));
  L0["c_tph_number"] = (await $.mv((await $.v(C, "Db_tph_number")), "Text"));
  L0["c_address_type"] = (await $.mv((await $.v(C, "Address_type")), "KeyValue"));
  L0["c_address"] = (await $.mv((await $.v(C, "db_tph_adress")), "Text"));
  L0["c_city"] = (await $.mv((await $.v(C, "CityByConctType")), "KeyValue"));
  L0["c_country_code"] = (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue"));
  L0["c_email"] = $.add($.add((await $.mv((await $.v(C, "EditEmail")), "Text")), "@"), (await $.mv((await $.v(C, "Edit1")), "Text")));
  L0["c_url"] = (await $.mv((await $.v(C, "Edit_url")), "Text"));
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
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Yeni Mustərini yaddaşa yazmaq istəyirsinizmi ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    { const $t87 = (await $.mv((await $.v(C, "XFRadioGroupCust_type")), "ItemIndex"));
      if ($.eq($t87, 0) || $.eq($t87, 1) || $.eq($t87, 2)) {
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
        L0["c_risk_categ"] = "";
      }
    }
    await $.set(C, "nomid", (await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "PG_PCustService")), "CallIntegerFunction", ["get_add_customers_prosess", [L0["c_name"], L0["c_short_name"], (await $.v(C, "date")), L0["c_inn"], L0["c_group_klie"], (await $.v(C, "date")), L0["c_nerezident"], L0["c_vid_sob"], L0["c_prinad_kod"], L0["c_cust_type"], L0["c_cust_jur"], L0["c_cust_phys"], L0["c_cust_fs"], L0["c_bik"], L0["c_risk_categ"], L0["d_risk_categ"], L0["c_riskdescid"], L0["c_samelydate"], L0["c_category"], L0["d_name"], L0["d_soname"], L0["d_lastname"], L0["d_passer"], L0["d_birthday"], L0["d_birthplace"], L0["d_fam_status"], L0["d_address"], L0["d_fakt_adress"], L0["d_doc_country"], L0["d_citizenship2"], L0["d_citizenship3"], L0["d_fakt_country"], L0["d_fakt_city"], L0["d_fakt_zip"], L0["d_work_place"], L0["d_work_post"], L0["d_work_adress"], L0["d_work_phone"], L0["d_phone_h"], L0["d_e_mail"], L0["d_sex"], L0["d_paspnum"], L0["d_adrs_state"], L0["d_city"], L0["d_doc_type"], L0["d_birth_state"], L0["d_phone_m"], L0["d_paspdate"], L0["d_paspplace"], L0["d_passpin"], L0["d_citizenship"], L0["d_passexpire"], L0["d_note"], L0["c_org_sob"], L0["c_sfera_dey"], L0["c_otrasl"], L0["c_nalog_kod"], L0["c_incorporation_number"], L0["c_tph_contact_type"], L0["c_tph_communication_type"], L0["c_tph_number"], L0["c_address_type"], L0["c_address"], L0["c_city"], L0["c_country_code"], L0["c_dat_ustav"], L0["c_dpt_nal"], L0["c_email"], L0["c_url"], L0["c_incorporation_state"], L0["c_incorporation_cntr"], L0["c_tph_extension"], L0["c_tph_zip"], L0["c_tph_country_prefix"], L0["c_tph_state"], L0["d_tph_contact_type"], L0["d_tph_country"], L0["d_tph_country_code"], L0["d_tph_city"], L0["d_tph_state"], L0["d_tph_zip"], L0["d_tph_country_prefix"], L0["d_tph_adress"], L0["d_tph_communication_type"], L0["d_tph_number"], L0["d_tph_extension"], L0["d_contact_type"], L0["d_url"], L0["d_activity"], L0["d_profession"], L0["d_source_of_income"]]])));
    await $.mset((await $.v(C, "OpenAccount")), "retrun_custid", (await $.v(C, "nomid")));
    await $.mcall((await $.v(C, "CustSearch1")), "Click", []);
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "Last", []);
    await $.mset((await $.v(C, "XFCust")), "Visible", false);
    await $.mset((await $.v(C, "XFButton4")), "Visible", true);
    await $.mset((await $.v(C, "XFButton5")), "Visible", true);
    await $.mset((await $.v(C, "XFPanelTeyp")), "Visible", true);
    await $.mset((await $.idx((await $.mv((await $.v(C, "PageControl1")), "Pages")), [8])), "TabVisible", true);
    await $.mset((await $.v(C, "PageControl1")), "TabIndex", 8);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustNom", "XFRadioGroupCust_typeClick", async function XFRadioGroupCust_typeClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
