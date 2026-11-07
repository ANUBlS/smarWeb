// Generated from P_CO_Cust.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_CO_Cust", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "Mask", "ComCtrls", "ExtCtrls", "dblookup", "Buttons", "Variants", "DBCtrlsEh", "DBGridEh", "XFSCtrls", "DBLookupEh", "PEPUnit9", "P_Datamod_Unit", "sboapiDataModuleImpl", "SBTranslateProc", "FSCustInfoFormImpl", "addcombobox", "Unit_id_quality", "phy_cust_Unit"]);
  const C = [U];
  U.defClass("TP_CO_Cust_Form", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "editserial": {"name": "EditSerial", "type": "TEdit"}, "editpassport": {"name": "EditPassport", "type": "TEdit"}, "label29": {"name": "Label29", "type": "TLabel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "editphone": {"name": "EditPhone", "type": "TMaskEdit"}, "label18": {"name": "Label18", "type": "TLabel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "editbyrname": {"name": "EditByrName", "type": "TEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "cboxsex": {"name": "CBoxSex", "type": "TComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TComboBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dblcboxvidsob": {"name": "DBLCBoxVidSob", "type": "TDBLookupComboBox"}, "dblgroup": {"name": "dblGroup", "type": "TDBLookupComboBox"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "label16": {"name": "Label16", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "dblcboxprinad": {"name": "DBLCBoxPrinad", "type": "TDBLookupComboBox"}, "label26": {"name": "Label26", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "cboxpassplace": {"name": "CBoxPassPlace", "type": "TComboBox"}, "editpincode": {"name": "EditPINCode", "type": "TEdit"}, "checkbox_phys": {"name": "CheckBox_Phys", "type": "TCheckBox"}, "checkbox_fs": {"name": "CheckBox_FS", "type": "TCheckBox"}, "edit_voen": {"name": "Edit_voen", "type": "TEdit"}, "label25": {"name": "Label25", "type": "TLabel"}, "radiobutton_rez": {"name": "RadioButton_Rez", "type": "TRadioButton"}, "radiobutton_nerez": {"name": "RadioButton_NeRez", "type": "TRadioButton"}, "cust_inform": {"name": "Cust_Inform", "type": "TButton"}, "label31": {"name": "Label31", "type": "TLabel"}, "db_category": {"name": "DB_CATEGORY", "type": "TDBLookupComboBox"}, "label32": {"name": "Label32", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "note_memo": {"name": "Note_Memo", "type": "TMemo"}, "label34": {"name": "Label34", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "dbcbox_citizenship": {"name": "DBCBox_Citizenship", "type": "TDBLookupComboBox"}, "dbcbox_doctype": {"name": "DBCBox_DocTYPE", "type": "TDBLookupComboBox"}, "paneladditional": {"name": "PanelAdditional", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label36": {"name": "Label36", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "label39": {"name": "Label39", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "fakt_adrs_city": {"name": "Fakt_Adrs_City", "type": "TDBLookupComboBox"}, "zipfakt": {"name": "ZipFakt", "type": "TEdit"}, "faktadress": {"name": "FaktAdress", "type": "TEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "label40": {"name": "Label40", "type": "TLabel"}, "dbcbox_citizenship2": {"name": "DBCBox_Citizenship2", "type": "TDBLookupComboBox"}, "label42": {"name": "Label42", "type": "TLabel"}, "dbcbox_citizenship3": {"name": "DBCBox_Citizenship3", "type": "TDBLookupComboBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "c": {"name": "c", "type": "TLabel"}, "label44": {"name": "Label44", "type": "TLabel"}, "label45": {"name": "Label45", "type": "TLabel"}, "label46": {"name": "Label46", "type": "TLabel"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "address_type": {"name": "Address_type", "type": "TDBLookupComboBox"}, "label47": {"name": "Label47", "type": "TLabel"}, "label48": {"name": "Label48", "type": "TLabel"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "work_place": {"name": "Work_Place", "type": "TEdit"}, "work_post": {"name": "Work_Post", "type": "TEdit"}, "work_address": {"name": "Work_Address", "type": "TEdit"}, "work_phone": {"name": "Work_Phone", "type": "TEdit"}, "countrybyconcttype": {"name": "CountryByConctType", "type": "TDBLookupComboBox"}, "citybyconcttype": {"name": "CityByConctType", "type": "TDBLookupComboBox"}, "label54": {"name": "Label54", "type": "TLabel"}, "tph_zip": {"name": "tph_zip", "type": "TEdit"}, "tph_state": {"name": "tph_state", "type": "TEdit"}, "tph_adress": {"name": "tph_adress", "type": "TEdit"}, "label51": {"name": "Label51", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "tph_contact_type": {"name": "tph_contact_type", "type": "TDBLookupComboBox"}, "tph_communication_type": {"name": "tph_communication_type", "type": "TDBLookupComboBox"}, "label56": {"name": "Label56", "type": "TLabel"}, "tph_country_prefix": {"name": "tph_country_prefix", "type": "TDBLookupComboBox"}, "label57": {"name": "Label57", "type": "TLabel"}, "tph_number": {"name": "tph_number", "type": "TEdit"}, "label58": {"name": "Label58", "type": "TLabel"}, "tph_extension": {"name": "tph_extension", "type": "TEdit"}, "label59": {"name": "Label59", "type": "TLabel"}, "issue_country": {"name": "issue_country", "type": "TDBLookupComboBox"}, "dbedit_countrycode": {"name": "DBEdit_CountryCode", "type": "TDBEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "editbirthcity": {"name": "EditBirthCity", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "adrs_city": {"name": "Adrs_City", "type": "TDBLookupComboBox"}, "adrs_state": {"name": "Adrs_State", "type": "TDBLookupComboBox"}, "editadress": {"name": "EditAdress", "type": "TEdit"}, "zipq": {"name": "ZipQ", "type": "TEdit"}, "label60": {"name": "Label60", "type": "TLabel"}, "label61": {"name": "Label61", "type": "TLabel"}, "label62": {"name": "Label62", "type": "TLabel"}, "label63": {"name": "Label63", "type": "TLabel"}, "label64": {"name": "Label64", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "label67": {"name": "Label67", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "label69": {"name": "Label69", "type": "TLabel"}, "label70": {"name": "Label70", "type": "TLabel"}, "label71": {"name": "Label71", "type": "TLabel"}, "label72": {"name": "Label72", "type": "TLabel"}, "label73": {"name": "Label73", "type": "TLabel"}, "edit_firstname": {"name": "Edit_FirstName", "type": "TEdit"}, "edit_lastname": {"name": "Edit_LastName", "type": "TEdit"}, "edit_middlename": {"name": "Edit_MiddleName", "type": "TEdit"}, "label74": {"name": "Label74", "type": "TLabel"}, "label75": {"name": "Label75", "type": "TLabel"}, "label76": {"name": "Label76", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label77": {"name": "Label77", "type": "TLabel"}, "label78": {"name": "Label78", "type": "TLabel"}, "label79": {"name": "Label79", "type": "TLabel"}, "label80": {"name": "Label80", "type": "TLabel"}, "label81": {"name": "Label81", "type": "TLabel"}, "label82": {"name": "Label82", "type": "TLabel"}, "label83": {"name": "Label83", "type": "TLabel"}, "label84": {"name": "Label84", "type": "TLabel"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "dblc_riskcateg": {"name": "DBLC_RiskCateg", "type": "TDBLookupComboBox"}, "label85": {"name": "Label85", "type": "TLabel"}, "dtpickpassp": {"name": "DTPickPassp", "type": "TDBDateTimeEditEh"}, "dtpickdocend": {"name": "DTPickDocEnd", "type": "TDBDateTimeEditEh"}, "dtpbirthdate": {"name": "DTPBirthDate", "type": "TDBDateTimeEditEh"}, "label86": {"name": "Label86", "type": "TLabel"}, "label88": {"name": "Label88", "type": "TLabel"}, "label89": {"name": "Label89", "type": "TLabel"}, "dblc_workcontacttype": {"name": "DBLC_WorkContactType", "type": "TDBLookupComboBox"}, "label43": {"name": "Label43", "type": "TLabel"}, "dblc_workcountry": {"name": "DBLC_workCountry", "type": "TDBLookupComboBox"}, "dblc_workcity": {"name": "DBLC_WorkCity", "type": "TDBLookupComboBox"}, "label90": {"name": "Label90", "type": "TLabel"}, "label91": {"name": "Label91", "type": "TLabel"}, "label92": {"name": "Label92", "type": "TLabel"}, "editworkstate": {"name": "EditWorkState", "type": "TEdit"}, "editworkzip": {"name": "EditWorkZip", "type": "TEdit"}, "label93": {"name": "Label93", "type": "TLabel"}, "dblc_workphconttype": {"name": "DBLC_WorkPhContType", "type": "TDBLookupComboBox"}, "label94": {"name": "Label94", "type": "TLabel"}, "label95": {"name": "Label95", "type": "TLabel"}, "dblc_workcomntype": {"name": "DBLC_WorkComnType", "type": "TDBLookupComboBox"}, "label96": {"name": "Label96", "type": "TLabel"}, "label97": {"name": "Label97", "type": "TLabel"}, "editworkext": {"name": "EditWorkExt", "type": "TEdit"}, "dblc_workphonecode": {"name": "DBLC_WorkPhoneCode", "type": "TDBLookupComboBox"}, "editworkphopcode": {"name": "EditWorkPhOpCode", "type": "TEdit"}, "label98": {"name": "Label98", "type": "TLabel"}, "editwebadrs": {"name": "EditWebAdrs", "type": "TEdit"}, "dblc_custriskdesc": {"name": "DBLC_CustRiskDesc", "type": "TDBLookupComboBox"}, "label99": {"name": "Label99", "type": "TLabel"}, "label1000": {"name": "Label1000", "type": "TLabel"}, "dbdatetimesamelydate": {"name": "DBDateTimeSamelyDate", "type": "TDBDateTimeEditEh"}, "sbtncheckpasp": {"name": "SBtnCheckPasp", "type": "TSpeedButton"}, "labelsamelydate": {"name": "LabelSamelyDate", "type": "TLabel"}, "timer1": {"name": "Timer1", "type": "TTimer"}, "label101": {"name": "Label101", "type": "TLabel"}, "birthplace": {"name": "BirthPlace", "type": "TDBLookupComboBox"}, "fakt_adrs_state": {"name": "Fakt_Adrs_State", "type": "TDBLookupComboBox"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "id_quality_dblookupcomboboxeh": {"name": "id_quality_DBLookupComboboxEh", "type": "TDBLookupComboboxEh"}, "buttonmeyar": {"name": "ButtonMeyar", "type": "TXFButton"}, "sendsms": {"name": "sendSMS", "type": "TXFCheckBox"}, "label87": {"name": "Label87", "type": "TLabel"}, "label100": {"name": "Label100", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "label102": {"name": "Label102", "type": "TLabel"}, "editmobil": {"name": "EditMobil", "type": "TMaskEdit"}, "tempvalue": {"name": "TempValue", "type": "String"}}, {});
  U.init(async () => {
    U.var_("P_CO_Cust_Form", null, "TP_CO_Cust_Form");
    U.var_("AddUpd", false, "Boolean");
    U.var_("p_cust_type", 0, "integer");
    U.var_("v_sendsms", 0, "integer");
    U.var_("v_aze", '', "String");
    U.var_("form_is_full", false, "Boolean");
  });
  U.method("TP_CO_Cust_Form", "ChechPasp", async function ChechPasp(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "v_custtype": ''};
  if ($.truthy($.eq((await $.mv((await $.v(C, "label9")), "Visible")), true))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "RadioButton_Rez")), "Checked")), true)), async () => ((await $.or_(($.eq((await $.mv((await $.v(C, "EditSerial")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditPassport")), "Text")), ""))))))))) {
      await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clRed")));
      await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clRed")));
      await $.stmt((await $.call(C, "ShowMessage", ["Pasport məlumatlarını daxil edin!"])));
      return L0.result;
    }
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "label9")), "Visible")), true))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "EditPassport")), "Text")), ""))) {
        await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clRed")));
        await $.stmt((await $.call(C, "ShowMessage", ["Pasport məlumatlarını daxil edin!"])));
        return L0.result;
      }
    } else {
      await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clLime")));
      await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clLime")));
    }
  }
  {
    const $t1 = (await $.mv((await $.v(C, "P_Datamodule")), "Pasp"));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["pNum", $.add((await $.mv((await $.wv([$t1], "EditSerial", C, false)), "Text")), (await $.mv((await $.wv([$t1], "EditPassport", C, false)), "Text")))], C)));
    if ($.truthy($.not((await $.wv([$t1], "Active", C, false))))) {
      await $.stmt($.wcall([$t1], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t1], "Refresh", [], C));
    }
  }
  { const $t2 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "FieldByName", ["CUST_TYPE"])), "AsInteger"));
    if ($.eq($t2, 1)) {
      L0["v_custtype"] = "Fiziki";
    }
    else if ($.eq($t2, 3)) {
      L0["v_custtype"] = "Fiziki və sahibkar";
    }
    else if ($.eq($t2, 4)) {
      L0["v_custtype"] = "Nominal";
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.v(C, "AddUpd")), true)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "RecordCount")), 0)))))) {
    await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clRed")));
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add("Pasport №-si ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "FieldByName", ["ID"])), "AsString"))), " ID-li "), L0["v_custtype"]), " müştəri üçün qeydiyyatdan keçmişdir!")])));
    return L0.result;
  } else {
    await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clLime")));
    await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clLime")));
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.v(C, "AddUpd")), false)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "RecordCount")), 0)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "FieldByName", ["ID"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "FieldByName", ["ID"])), "AsString")))))))) {
    await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clRed")));
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add("Pasport №-si ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "FieldByName", ["ID"])), "AsString"))), " ID-li "), L0["v_custtype"]), " müştəri üçün qeydiyyatdan keçmişdir!")])));
    return L0.result;
  } else {
    await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clLime")));
    await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clLime")));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "P_Datamodule")), "paspin"));
    await $.stmt((await $.wcall([$t3], "SetVariable", ["pPin", (await $.mv((await $.wv([$t3], "EditPINCode", C, false)), "Text"))], C)));
    if ($.truthy($.not((await $.wv([$t3], "Active", C, false))))) {
      await $.stmt($.wcall([$t3], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t3], "Refresh", [], C));
    }
  }
  { const $t4 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "FieldByName", ["CUST_TYPE"])), "AsInteger"));
    if ($.eq($t4, 1)) {
      L0["v_custtype"] = "Fiziki";
    }
    else if ($.eq($t4, 3)) {
      L0["v_custtype"] = "Fiziki və sahibkar";
    }
    else if ($.eq($t4, 4)) {
      L0["v_custtype"] = "Nominal";
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.v(C, "AddUpd")), true)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "RecordCount")), 0)))))) {
    await $.mset((await $.v(C, "EditPINCode")), "Color", (await $.v(C, "clRed")));
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add("Pinkod №-si ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "FieldByName", ["ID"])), "AsString"))), " ID-li "), L0["v_custtype"]), " müştəri üçün qeydiyyatdan keçmişdir!")])));
    return L0.result;
  } else {
    await $.mset((await $.v(C, "EditPINCode")), "Color", (await $.v(C, "clLime")));
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.v(C, "AddUpd")), false)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "RecordCount")), 0)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "FieldByName", ["ID"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "FieldByName", ["ID"])), "AsString")))))))) {
    await $.mset((await $.v(C, "EditPINCode")), "Color", (await $.v(C, "clRed")));
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add("Pinkod №-si ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "FieldByName", ["ID"])), "AsString"))), " ID-li "), L0["v_custtype"]), " müştəri üçün qeydiyyatdan keçmişdir!")])));
    return L0.result;
  } else {
    await $.mset((await $.v(C, "EditPINCode")), "Color", (await $.v(C, "clLime")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_CO_Cust_Form", "SBtnCheckPaspClick", async function SBtnCheckPaspClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ChechPasp", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "SelectSettings", async function SelectSettings(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "risk_descperiod": 0};
  {
    const $t5 = (await $.mv((await $.v(C, "P_Datamodule")), "P_Customers"));
    await $.mset((await $.wv([$t5], "EditByrName", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["CUST_NAME"], C)), "AsString")));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t5], "FieldByName", ["NEREZIDENT"], C)), "AsInteger")), 1))) {
      await $.mset((await $.wv([$t5], "RadioButton_Rez", C, false)), "Checked", (await $.wv([$t5], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t5], "RadioButton_NeRez", C, false)), "Checked", (await $.wv([$t5], "true", C, false)));
    }
    await $.mset((await $.wv([$t5], "BirthPlace", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["BIRTHPLACE"], C)), "AsString")));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t5], "FieldByName", ["send_sms"], C)), "AsInteger")), 1))) {
      await $.mset((await $.wv([$t5], "sendSMS", C, false)), "Checked", (await $.wv([$t5], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t5], "sendSMS", C, false)), "Checked", (await $.wv([$t5], "false", C, false)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["BIRTHDATE"], C)), "isNUll")))))) {
      await $.mset((await $.wv([$t5], "DTPBirthDate", C, false)), "Value", (await $.wcall([$t5], "int", [(await $.mv((await $.wcall([$t5], "FieldByName", ["BIRTHDATE"], C)), "AsVariant"))], C)));
    } else {
      await $.mset((await $.wv([$t5], "DTPBirthDate", C, false)), "Value", (await $.wv([$t5], "null", C, false)));
    }
    await $.mset((await $.wv([$t5], "EditBirthCity", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["BIRTH_STATE"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "EditAdress", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["ADRESS"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Fakt_Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5], "FieldByName", ["fakt_country"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Fakt_Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5], "FieldByName", ["fakt_city"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "FaktAdress", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["fakt_adress"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["EMAIL"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["passp_number"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["PASSPORT"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["phone_mob"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["PHONE"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "CBoxFamStatus", C, false)), "ItemIndex", $.sub((await $.mv((await $.wcall([$t5], "FieldByName", ["FAM_STATUS"], C)), "AsInteger")), 1));
    await $.mset((await $.wv([$t5], "CBoxSex", C, false)), "ItemIndex", $.sub((await $.mv((await $.wcall([$t5], "FieldByName", ["SEX"], C)), "AsInteger")), 1));
    await $.mset((await $.wv([$t5], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["email"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "dblGroup", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["group_klie"], C)), "AsVariant")));
    await $.mset((await $.wv([$t5], "Adrs_State", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["ADRS_STATE"], C)), "AsWideString")));
    await $.mset((await $.wv([$t5], "Adrs_City", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["ADRS_CITY"], C)), "AsWideString")));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["Passp_date"], C)), "isNUll")))))) {
      await $.mset((await $.wv([$t5], "DTPickPassp", C, false)), "Value", (await $.mv((await $.wcall([$t5], "FieldByName", ["Passp_date"], C)), "AsVariant")));
    } else {
      await $.mset((await $.wv([$t5], "DTPickPassp", C, false)), "Value", (await $.wv([$t5], "null", C, false)));
    }
    await $.mset((await $.wv([$t5], "DBLCBoxVidSob", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["Vid_Sob"], C)), "AsVariant")));
    await $.mset((await $.wv([$t5], "DBLCBoxPrinad", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["Prinad"], C)), "AsVariant")));
    await $.mset((await $.wv([$t5], "DBCBox_DocTYPE", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["Doc_Type"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5], "CBoxPassPlace", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["PaspPlace"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "EditPINCode", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["PassPIN"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Edit_voen", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["INN"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "DB_CATEGORY", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["Category"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5], "DBCBox_Citizenship", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["Citizenship"], C)), "AsInteger")));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["PASSEXPIRE"], C)), "isNUll")))))) {
      await $.mset((await $.wv([$t5], "DTPickDocEnd", C, false)), "Value", (await $.mv((await $.wcall([$t5], "FieldByName", ["PASSEXPIRE"], C)), "AsVariant")));
    } else {
      await $.mset((await $.wv([$t5], "DTPickDocEnd", C, false)), "Value", (await $.wv([$t5], "null", C, false)));
    }
    await $.mset((await $.wv([$t5], "Note_Memo", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["NOTE"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "DBCBox_Citizenship2", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["citizenship2"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5], "DBCBox_Citizenship3", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["citizenship3"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5], "issue_country", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["doc_country"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["reg_zip"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "ZipFakt", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["fakt_zip"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Work_Place", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["work_place"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Work_Post", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["work_post"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Work_Address", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["work_adress"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Work_Phone", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["work_phone"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Address_type", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["contact_type"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "CountryByConctType", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_country"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5], "CityByConctType", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_city"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5], "tph_state", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_state"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "tph_zip", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_zip"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "tph_adress", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_adress"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "tph_contact_type", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_contact_type"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "tph_communication_type", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_communication_type"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "tph_country_prefix", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_country_prefix"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5], "tph_number", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_number"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "tph_extension", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["tph_extension"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Edit_FirstName", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["name"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Edit_LastName", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["lastname"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "Edit_MiddleName", C, false)), "text", (await $.mv((await $.wcall([$t5], "FieldByName", ["soname"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "DBLC_RiskCateg", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5], "FieldByName", ["risk_categ"], C)), "AsInteger")));
    await $.mset((await $.wv([$t5], "DBLC_CustRiskDesc", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5], "FieldByName", ["RISKDESCID"], C)), "AsInteger")));
    await $.wset([$t5], "risk_descPERIOD", (await $.mv((await $.mv((await $.wv([$t5], "P_DataModule", C, false)), "cust_risk_descDATE_PERIOD")), "AsInteger")), { get: async () => L0["risk_descperiod"], set: async (v) => { L0["risk_descperiod"] = v; }, local: true });
    await $.mset((await $.wv([$t5], "edit2", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["monthlyprofit"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "edit3", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["additonal_income"], C)), "AsString")));
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["SAMELYDATE"], C)), "isNUll")))))) {
      await $.mset((await $.wv([$t5], "DBDateTimeSamelyDate", C, false)), "Value", (await $.mv((await $.wcall([$t5], "FieldByName", ["SAMELYDATE"], C)), "AsVariant")));
    } else {
      await $.mset((await $.wv([$t5], "DBDateTimeSamelyDate", C, false)), "Value", (await $.wv([$t5], "null", C, false)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["SAMELYDATE"], C)), "isNUll")))))) {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t5], "P_Datamodule", C, false)), "SysdatTEK_DAT")), "AsDateTime")), (await $.wcall([$t5], "IncMonth", [(await $.mv((await $.wcall([$t5], "FieldByName", ["SAMELYDATE"], C)), "AsDatetime")), (await $.wv([$t5], "risk_descPERIOD", { get: async () => L0["risk_descperiod"], set: async (v) => { L0["risk_descperiod"] = v; }, local: true }, false))], C))))) {
        await $.mset((await $.wv([$t5], "LabelSamelyDate", C, false)), "Caption", "Diqqət: Bugün bu müştərinin eyniləşdirmə tarixidir!");
        await $.mset((await $.wv([$t5], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t5], "True", C, false)));
        await $.mset((await $.wv([$t5], "Timer1", C, false)), "Enabled", (await $.wv([$t5], "True", C, false)));
        await $.stmt($.wcall([$t5], "OpenAdditional", [], C));
      } else {
        if ($.truthy($.gt((await $.mv((await $.mv((await $.wv([$t5], "P_Datamodule", C, false)), "SysdatTEK_DAT")), "AsDateTime")), (await $.wcall([$t5], "IncMonth", [(await $.mv((await $.wcall([$t5], "FieldByName", ["SAMELYDATE"], C)), "AsDatetime")), (await $.wv([$t5], "risk_descPERIOD", { get: async () => L0["risk_descperiod"], set: async (v) => { L0["risk_descperiod"] = v; }, local: true }, false))], C))))) {
          await $.mset((await $.wv([$t5], "LabelSamelyDate", C, false)), "Caption", "Diqqət: Müştərinin eyniləşdirmə tarixi bitmişdir!");
          await $.mset((await $.wv([$t5], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t5], "True", C, false)));
          await $.mset((await $.wv([$t5], "Timer1", C, false)), "Enabled", (await $.wv([$t5], "True", C, false)));
          await $.stmt($.wcall([$t5], "OpenAdditional", [], C));
        } else {
          await $.mset((await $.wv([$t5], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t5], "False", C, false)));
          await $.mset((await $.wv([$t5], "Timer1", C, false)), "Enabled", (await $.wv([$t5], "False", C, false)));
        }
      }
    } else {
      await $.mset((await $.wv([$t5], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t5], "False", C, false)));
      await $.mset((await $.wv([$t5], "Timer1", C, false)), "Enabled", (await $.wv([$t5], "False", C, false)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["quality_id"], C)), "isNUll")))))) {
      await $.mset((await $.wv([$t5], "id_quality_DBLookupComboboxEh", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5], "FieldByName", ["quality_id"], C)), "AsInteger")));
    }
    await $.mset((await $.wv([$t5], "DBLC_WorkContactType", C, false)), "KeyValue", "A");
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_CNTR"], C)), "isNUll")))))) {
      await $.mset((await $.wv([$t5], "DBLC_workCountry", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_CNTR"], C)), "AsInteger")));
    } else {
      await $.mset((await $.wv([$t5], "DBLC_workCountry", C, false)), "KeyValue", (await $.wv([$t5], "null", C, false)));
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_CITY"], C)), "isNUll")))))) {
      await $.mset((await $.wv([$t5], "DBLC_WorkCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_CITY"], C)), "AsInteger")));
    } else {
      await $.mset((await $.wv([$t5], "DBLC_WorkCity", C, false)), "KeyValue", (await $.wv([$t5], "null", C, false)));
    }
    await $.mset((await $.wv([$t5], "EditWorkState", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_STATE"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "EditWorkZip", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_ZIP"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "DBLC_WorkPhContType", C, false)), "KeyValue", "A");
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_PHONE_SPEC"], C)), "isNUll")))))) {
      await $.mset((await $.wv([$t5], "DBLC_WorkComnType", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_PHONE_SPEC"], C)), "AsString")));
    } else {
      await $.mset((await $.wv([$t5], "DBLC_WorkComnType", C, false)), "KeyValue", "");
    }
    if ($.truthy($.not(((await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_PHCODE"], C)), "isNUll")))))) {
      await $.mset((await $.wv([$t5], "DBLC_WorkPhoneCode", C, false)), "KeyValue", (await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_PHCODE"], C)), "AsInteger")));
    } else {
      await $.mset((await $.wv([$t5], "DBLC_WorkPhoneCode", C, false)), "KeyValue", 0);
    }
    await $.mset((await $.wv([$t5], "EditWorkPhOpCode", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_PHOPPREF"], C)), "AsString")));
    await $.mset((await $.wv([$t5], "EditWorkExt", C, false)), "Text", (await $.mv((await $.wcall([$t5], "FieldByName", ["WORK_PHEXT"], C)), "AsString")));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t5], "FieldByName", ["homeland_war"], C)), "AsInteger")), 1))) {
      await $.mset((await $.wv([$t5], "CheckBox1", C, false)), "Checked", (await $.wv([$t5], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t5], "CheckBox1", C, false)), "Checked", (await $.wv([$t5], "false", C, false)));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t5], "FieldByName", ["CUST_TYPE"], C)), "AsInteger")), 1))) {
      await $.mset((await $.wv([$t5], "CheckBox_Phys", C, false)), "Checked", (await $.wv([$t5], "true", C, false)));
      await $.mset((await $.wv([$t5], "CheckBox_FS", C, false)), "Checked", (await $.wv([$t5], "False", C, false)));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t5], "FieldByName", ["CUST_TYPE"], C)), "AsInteger")), 2))) {
      await $.mset((await $.wv([$t5], "CheckBox_Phys", C, false)), "Checked", (await $.wv([$t5], "False", C, false)));
      await $.mset((await $.wv([$t5], "CheckBox_FS", C, false)), "Checked", (await $.wv([$t5], "true", C, false)));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t5], "FieldByName", ["CUST_TYPE"], C)), "AsInteger")), 3))) {
      await $.mset((await $.wv([$t5], "CheckBox_Phys", C, false)), "Checked", (await $.wv([$t5], "true", C, false)));
      await $.mset((await $.wv([$t5], "CheckBox_FS", C, false)), "Checked", (await $.wv([$t5], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_CO_Cust_Form", "sendSMSClick", async function sendSMSClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "sendSMS")), "Checked")), true))) {
    await $.set(C, "v_sendsms", 1);
  } else {
    await $.set(C, "v_sendsms", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "Timer1Timer", async function Timer1Timer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "LabelSamelyDate")), "Font")), "Color")), (await $.v(C, "clGreen"))))) {
    await $.mset((await $.mv((await $.v(C, "LabelSamelyDate")), "Font")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.mv((await $.v(C, "LabelSamelyDate")), "Font")), "Color", (await $.v(C, "clGreen")));
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
    await $.mset(L0["f"], "Width", 650);
    await $.mset(L0["f"], "Height", 120);
    await $.mset(L0["f"], "Position", (await $.v(C, "poScreenCenter")));
    await $.mset(L0["f"], "BorderStyle", (await $.v(C, "bsDialog")));
    L0["l"] = (await $.mcall((await $.v(C, "TLabel")), "Create", [L0["f"]]));
    await $.mset(L0["l"], "Parent", L0["f"]);
    await $.mset(L0["l"], "Caption", L0["atext"]);
    await $.mset((await $.mv(L0["l"], "Font")), "Size", 12);
    await $.mset((await $.mv(L0["l"], "Font")), "Color", (await $.v(C, "clRed")));
    await $.mset((await $.mv(L0["l"], "Font")), "Style", [(await $.v(C, "fsBold"))]);
    await $.mset(L0["l"], "AutoSize", true);
    await $.mset(L0["l"], "Left", 30);
    await $.mset(L0["l"], "Top", 30);
    L0["btnyes"] = (await $.mcall((await $.v(C, "TButton")), "Create", [L0["f"]]));
    await $.mset(L0["btnyes"], "Parent", L0["f"]);
    await $.mset(L0["btnyes"], "Caption", "Bəli");
    await $.mset(L0["btnyes"], "ModalResult", (await $.v(C, "mrYes")));
    await $.mset(L0["btnyes"], "Left", 200);
    await $.mset(L0["btnyes"], "Top", 70);
    await $.mset(L0["btnyes"], "Width", 80);
    await $.mset(L0["btnyes"], "Height", 22);
    L0["btnno"] = (await $.mcall((await $.v(C, "TButton")), "Create", [L0["f"]]));
    await $.mset(L0["btnno"], "Parent", L0["f"]);
    await $.mset(L0["btnno"], "Caption", "Xeyr");
    await $.mset(L0["btnno"], "ModalResult", (await $.v(C, "mrNo")));
    await $.mset(L0["btnno"], "Left", 300);
    await $.mset(L0["btnno"], "Top", 70);
    await $.mset(L0["btnno"], "Width", 80);
    await $.mset(L0["btnno"], "Height", 22);
    L0["result"] = ($.eq((await $.mv(L0["f"], "ShowModal")), (await $.v(C, "mrYes"))));
  } finally {
    await $.mcall(L0["f"], "Free", []);
  }
  return L0.result;
}, {"params": ["AText"], "kind": "function", "ptypes": ["String"]});
  U.method("TP_CO_Cust_Form", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "p_cust_name": '', "p_passport": '', "p_birthdate": null, "p_birthplace": null, "p_fam_status": 0, "p_adress": '', "p_faktadress": '', "p_phone": '', "p_sendsms": 0, "p_email": '', "p_sex": 0, "p_passp_number": '', "p_adrs_state": null, "p_adrs_city": null, "p_birthcity": null, "p_phone_mob": '', "p_passp_date": null, "p_nerezident": 0, "p_passplace": '', "p_pincode": '', "p_category": 0, "p_citizenship": null, "p_passexpire": null, "p_doctype": null, "p_note": '', "p_reg_zip": '', "p_doc_country": null, "p_citizenship2": 0, "p_citizenship3": null, "p_fakt_country": null, "p_fakt_city": null, "p_fakt_zip": '', "p_work_place": '', "p_work_post": '', "p_work_adress": '', "p_work_phone": '', "p_tph_contact_type": null, "p_tph_country": null, "p_tph_country_code": '', "p_tph_city": null, "p_tph_state": '', "p_tph_zip": '', "p_tph_country_prefix": 0, "p_tph_adress": '', "p_tph_communication_type": null, "p_tph_number": '', "p_tph_extension": '', "p_contact_type": null, "p_lastname": '', "p_firstname": '', "p_middlename": '', "p_risk_categ": null, "p_riskdescid": null, "p_samelydate": null, "p_work_adrs_spec": '', "p_work_city": 0, "p_work_state": '', "p_work_zip": '', "p_work_cntr": 0, "p_work_phone_spec": '', "p_work_phconttype": '', "p_work_phoppref": '', "p_work_phext": '', "p_work_phcode": 0, "p_quality_id": 0, "v_custtype": '', "v_homeland_war": 0, "mobs": '', "c_cust_type": 0, "ins": 0, "ins1": 0, "black": '', "dashpos": 0, "percentpos": 0, "scorestr": '', "score": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Label76")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_LastName")), "Text"))])), "")))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin soyadı daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Label75")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_FirstName")), "Text"))])), "")))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adı daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioButton_NeRez")), "Checked")), false))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Label74")), "Visible")), true))) {
      if ($.truthy(($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "Edit_MiddleName")), "Text"))])), "")))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin ata adı daxil edilməlidir!"])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Label9")), "Visible")), true))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "RadioButton_Rez")), "Checked")), true)), async () => ((await $.or_(($.eq((await $.mv((await $.v(C, "EditSerial")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditPassport")), "Text")), ""))))))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Pasport məlumatlarını daxil edin"])));
      return L0.result;
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "EditPassport")), "Text")), ""))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Pasport məlumatlarını daxil edin"])));
        return L0.result;
      }
    }
  }
  {
    const $t6 = (await $.mv((await $.v(C, "P_Datamodule")), "Pasp"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.stmt((await $.wcall([$t6], "SetVariable", ["pNum", $.add((await $.mv((await $.wv([$t6], "EditSerial", C, false)), "Text")), (await $.mv((await $.wv([$t6], "EditPassport", C, false)), "Text")))], C)));
    await $.stmt($.wcall([$t6], "Open", [], C));
  }
  { const $t7 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "FieldByName", ["CUST_TYPE"])), "AsInteger"));
    if ($.eq($t7, 1)) {
      L0["v_custtype"] = "Fiziki";
    }
    else if ($.eq($t7, 3)) {
      L0["v_custtype"] = "Fiziki və sahibkar";
    }
    else if ($.eq($t7, 4)) {
      L0["v_custtype"] = "Nominal";
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.v(C, "AddUpd")), true)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "RecordCount")), 0)))))) {
    await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clRed")));
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add("Pasport №-si ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "FieldByName", ["ID"])), "AsString"))), " ID-li "), L0["v_custtype"]), " müştəri üçün qeydiyyatdan keçmişdir!")])));
    return L0.result;
  } else {
    await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clLime")));
    await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clLime")));
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.v(C, "AddUpd")), false)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "RecordCount")), 0)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "FieldByName", ["ID"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "FieldByName", ["ID"])), "AsString")))))))) {
    await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clRed")));
    await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add("Pasport №-si ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Pasp")), "FieldByName", ["ID"])), "AsString"))), " ID-li "), L0["v_custtype"]), " müştəri üçün qeydiyyatdan keçmişdir!")])));
    return L0.result;
  } else {
    await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clLime")));
    await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clLime")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label86")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DTPickPassp")), "Value")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Sənədin verildiyi tarixi daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label101")), "Visible")), true))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "DTPickDocEnd")), "Value")), (await $.v(C, "null")))), async () => ($.eq((await $.mv((await $.v(C, "DBCBox_DocTYPE")), "KeyValue")), 1)))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Sənədin etibarlıq tarixin daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label88")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DTPBirthDate")), "Value")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin doğum tarixin daxil edin"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label5")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLCBoxVidSob")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Mülkiyyət növünü daxil edin"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label60")), "Visible")), true))) {
    if ($.truthy((await $.and_(((await $.mv((await $.v(C, "CheckBox_FS")), "Checked"))), async () => ($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_voen")), "Text"))])), "")))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["VÖEN daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.not(((await $.or_(((await $.mv((await $.v(C, "CheckBox_Phys")), "Checked"))), async () => ((await $.mv((await $.v(C, "CheckBox_FS")), "Checked"))))))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin tipi seçilməyib"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Label16")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CBoxSex")), "Text"))])), "")))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin cinsi daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label82")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "CBoxPassPlace")), "Text"))])), "")))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Pasportun verildiyi yer daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label70")), "Visible")), true))) {
    if ($.truthy((await $.and_(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "EditPINCode")), "Text"))])), "")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Doc_Types")), "FieldByName", ["PinCodForced"])), "asInteger")), 1)))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Pasportun Pin kodu daxil edilməlidir!"])));
      return L0.result;
    }
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Doc_Types")), "FieldByName", ["symbol"])), "AsString")), "D")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Doc_Types")), "FieldByName", ["symbol"])), "AsString")), "C")))))) {
      if ($.truthy($.lt((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode")), "text"))])), 5))) {
        await $.stmt((await $.call(C, "showmessage", ["Əcnəbilər üçün Pin kod 5 ve ya 6 simvoldan  az olmaz   !"])));
        return L0.result;
      }
    } else {
      if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditPINCode")), "text"))])), 7))) {
        await $.stmt((await $.call(C, "showmessage", ["Pin kod 7 simvoldan  az olmaz   !"])));
        return L0.result;
      }
    }
    {
      const $t8 = (await $.mv((await $.v(C, "P_Datamodule")), "paspin"));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["pPin", (await $.mv((await $.wv([$t8], "EditPINCode", C, false)), "Text"))], C)));
      if ($.truthy($.not((await $.wv([$t8], "Active", C, false))))) {
        await $.stmt($.wcall([$t8], "Open", [], C));
      } else {
        await $.stmt($.wcall([$t8], "Refresh", [], C));
      }
    }
    { const $t9 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "FieldByName", ["CUST_TYPE"])), "AsInteger"));
      if ($.eq($t9, 1)) {
        L0["v_custtype"] = "Fiziki";
      }
      else if ($.eq($t9, 3)) {
        L0["v_custtype"] = "Fiziki və sahibkar";
      }
      else if ($.eq($t9, 4)) {
        L0["v_custtype"] = "Nominal";
      }
    }
    if ($.truthy((await $.and_(($.eq((await $.v(C, "AddUpd")), true)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "RecordCount")), 0)))))) {
      await $.mset((await $.v(C, "EditPINCode")), "Color", (await $.v(C, "clRed")));
      await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add("Pinkod №-si ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "FieldByName", ["ID"])), "AsString"))), " ID-li "), L0["v_custtype"]), " müştəri üçün qeydiyyatdan keçmişdir!")])));
      return L0.result;
    } else {
      await $.mset((await $.v(C, "EditPINCode")), "Color", (await $.v(C, "clLime")));
    }
    if ($.truthy((await $.and_((await $.and_(($.eq((await $.v(C, "AddUpd")), false)), async () => ($.ne((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "RecordCount")), 0)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "FieldByName", ["ID"])), "AsString")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "FieldByName", ["ID"])), "AsString")))))))) {
      await $.mset((await $.v(C, "EditPINCode")), "Color", (await $.v(C, "clRed")));
      await $.stmt((await $.call(C, "ShowMessage", [$.add($.add($.add($.add("Pinkod №-si ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Paspin")), "FieldByName", ["ID"])), "AsString"))), " ID-li "), L0["v_custtype"]), " müştəri üçün qeydiyyatdan keçmişdir!")])));
      return L0.result;
    } else {
      await $.mset((await $.v(C, "EditPINCode")), "Color", (await $.v(C, "clLime")));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label23")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditAdress")), "Text"))])), "")))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin qeydiyyat ünvanı daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label10")), "Visible")), true))) {
    L0["mobs"] = (await $.call(C, "stringreplace", [(await $.mv((await $.v(C, "EditMobil")), "Text")), "-", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
    L0["mobs"] = (await $.call(C, "stringreplace", [L0["mobs"], " ", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]));
    if ($.truthy($.lt((await $.call(C, "Length", [L0["mobs"]])), 9))) {
      await $.stmt((await $.call(C, "ShowMessage", [" Mobil telefon sahesi tam doldurulmayib !"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label28")), "Visible")), true))) {
    if ($.truthy($.eq((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditPhone")), "Text"))])), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin şəhər telefon nömrəsi daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_cust_name"] = (await $.mv((await $.v(C, "EditByrName")), "Text"));
  L0["p_passport"] = (await $.mv((await $.v(C, "EditPassport")), "Text"));
  L0["p_birthdate"] = (await $.mv((await $.v(C, "DTPBirthDate")), "Value"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "LABEL80")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "BirthPlace")), "keyvalue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Müştərinin doğulduğu ölkə daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label81")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "EditBirthCity")), "keyvalue")), "")))) {
      await $.stmt((await $.call(C, "showmessage", ["Müştərinin doğulduğu şəhər daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label83")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "FaktAdress")), "Text"))])), "")))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin faktiki ünvanı daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_birthcity"] = (await $.mv((await $.v(C, "EditBirthCity")), "keyvalue"));
  L0["p_birthplace"] = (await $.mv((await $.v(C, "BirthPlace")), "keyvalue"));
  L0["p_faktadress"] = (await $.mv((await $.v(C, "FaktAdress")), "Text"));
  L0["p_adress"] = (await $.mv((await $.v(C, "EditAdress")), "Text"));
  L0["p_phone"] = (await $.mv((await $.v(C, "EditPhone")), "Text"));
  L0["p_sendsms"] = (await $.v(C, "v_sendsms"));
  L0["p_email"] = (await $.mv((await $.v(C, "EditEmail")), "Text"));
  L0["p_passp_number"] = (await $.mv((await $.v(C, "EditSerial")), "Text"));
  L0["p_birthcity"] = (await $.mv((await $.v(C, "EditBirthCity")), "Text"));
  L0["p_phone_mob"] = (await $.mv((await $.v(C, "EditMobil")), "Text"));
  L0["p_passp_date"] = (await $.mv((await $.v(C, "DTPickPassp")), "Value"));
  L0["p_passplace"] = (await $.mv((await $.v(C, "CBoxPassPlace")), "Text"));
  L0["p_lastname"] = (await $.mv((await $.v(C, "Edit_LastName")), "Text"));
  L0["p_firstname"] = (await $.mv((await $.v(C, "Edit_FirstName")), "Text"));
  L0["p_middlename"] = (await $.mv((await $.v(C, "Edit_MiddleName")), "Text"));
  L0["p_pincode"] = (await $.mv((await $.v(C, "EditPINCode")), "Text"));
  L0["p_category"] = (await $.mv((await $.v(C, "DB_CATEGORY")), "keyvalue"));
  L0["p_fam_status"] = $.add((await $.mv((await $.v(C, "CBoxFamStatus")), "ItemIndex")), 1);
  L0["p_sex"] = $.add((await $.mv((await $.v(C, "CBoxSex")), "ItemIndex")), 1);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Label62")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "DBCBox_Citizenship")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt((await $.call(C, "showmessage", ["Müştərinin vətəndaşlığı daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label63")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "DBCBox_DocTYPE")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt((await $.call(C, "showmessage", ["Sənədin növü daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_citizenship"] = (await $.mv((await $.v(C, "DBCBox_Citizenship")), "keyvalue"));
  L0["p_doctype"] = (await $.mv((await $.v(C, "DBCBox_DocTYPE")), "keyvalue"));
  L0["p_passexpire"] = (await $.mv((await $.v(C, "DTPickDocEnd")), "Value"));
  L0["p_note"] = (await $.mv((await $.v(C, "Note_Memo")), "Text"));
  L0["p_reg_zip"] = (await $.mv((await $.v(C, "ZipQ")), "Text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "label64")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "issue_country")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt((await $.call(C, "showmessage", ["Sənədin verildiyi ölkə daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label21")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "Adrs_State")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt((await $.call(C, "showmessage", ["Müştərinin qeydiyyatda olduğu ölkə daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label77")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "Adrs_City")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt((await $.call(C, "showmessage", ["Müştərinin qeydiyyatda olduğu şəhər daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_doc_country"] = (await $.mv((await $.v(C, "issue_country")), "keyvalue"));
  L0["p_adrs_state"] = (await $.mv((await $.v(C, "Adrs_State")), "KeyValue"));
  L0["p_adrs_city"] = (await $.mv((await $.v(C, "Adrs_City")), "KeyValue"));
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBCBox_Citizenship2")), "keyvalue")), (await $.v(C, "null"))))))) {
    L0["p_citizenship2"] = (await $.mv((await $.v(C, "DBCBox_Citizenship2")), "keyvalue"));
  } else {
    L0["p_citizenship2"] = 0;
  }
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBCBox_Citizenship3")), "keyvalue")), (await $.v(C, "null"))))))) {
    L0["p_citizenship3"] = (await $.mv((await $.v(C, "DBCBox_Citizenship3")), "keyvalue"));
  } else {
    L0["p_citizenship3"] = 0;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "LABEL78")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "Fakt_Adrs_State")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt((await $.call(C, "showmessage", ["Müştərinin faktiki yaşadığı ölkə daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label79")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "Fakt_Adrs_City")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt((await $.call(C, "showmessage", ["Müştərinin faktiki yaşadığı şəhər daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_fakt_country"] = (await $.mv((await $.v(C, "Fakt_Adrs_State")), "keyvalue"));
  L0["p_fakt_city"] = (await $.mv((await $.v(C, "Fakt_Adrs_City")), "keyvalue"));
  L0["p_fakt_zip"] = (await $.mv((await $.v(C, "ZipFakt")), "Text"));
  L0["p_work_place"] = (await $.mv((await $.v(C, "Work_Place")), "Text"));
  L0["p_work_post"] = (await $.mv((await $.v(C, "Work_Post")), "Text"));
  L0["p_work_adress"] = (await $.mv((await $.v(C, "Work_Address")), "Text"));
  L0["p_work_phone"] = (await $.mv((await $.v(C, "Work_Phone")), "Text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "label61")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "keyvalue")), (await $.v(C, "null"))))) {
      await $.stmt($.call(C, "OpenAdditional", []));
      await $.stmt((await $.call(C, "showmessage", ["Əlaqə növü daxil edilməlidir!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label65")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "CountryByConctType")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt($.call(C, "OpenAdditional", []));
      await $.stmt((await $.call(C, "showmessage", ["Əlaqə növünə görə ölkə daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_contact_type"] = (await $.mv((await $.v(C, "Address_type")), "keyvalue"));
  L0["p_tph_country"] = (await $.mv((await $.v(C, "CountryByConctType")), "keyvalue"));
  L0["p_tph_country_code"] = (await $.mv((await $.v(C, "DBEdit_CountryCode")), "Text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "label66")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "CityByConctType")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt($.call(C, "OpenAdditional", []));
      await $.stmt((await $.call(C, "showmessage", ["Əlaqə növünə görə şəhər daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_tph_city"] = (await $.mv((await $.v(C, "CityByConctType")), "keyvalue"));
  L0["p_tph_state"] = (await $.mv((await $.v(C, "tph_state")), "Text"));
  L0["p_tph_zip"] = (await $.mv((await $.v(C, "tph_zip")), "Text"));
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "tph_country_prefix")), "keyvalue")), (await $.v(C, "null"))))))) {
    L0["p_tph_country_prefix"] = (await $.mv((await $.v(C, "tph_country_prefix")), "keyvalue"));
  } else {
    L0["p_tph_country_prefix"] = 0;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label84")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "tph_adress")), "Text"))])), "")))) {
      await $.stmt($.call(C, "OpenAdditional", []));
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin əlaqə növünə görə ünvanı daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_tph_adress"] = (await $.mv((await $.v(C, "tph_adress")), "Text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "label68")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "tph_communication_type")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt($.call(C, "OpenAdditional", []));
      await $.stmt((await $.call(C, "showmessage", ["Rabitə növünə görə telefon nömrəsinin tipi daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_tph_communication_type"] = (await $.mv((await $.v(C, "tph_communication_type")), "keyvalue"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "label69")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "tph_number")), "Text"))])), "")))) {
      await $.stmt($.call(C, "OpenAdditional", []));
      await $.stmt((await $.call(C, "showmessage", ["Əlaqə növünə görə nömrə daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_tph_number"] = (await $.mv((await $.v(C, "tph_number")), "Text"));
  L0["p_tph_extension"] = (await $.mv((await $.v(C, "tph_extension")), "Text"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "label67")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "tph_contact_type")), "keyvalue")), (await $.v(C, "null")))))) {
      await $.stmt($.call(C, "OpenAdditional", []));
      await $.stmt((await $.call(C, "showmessage", ["Əlaqə növünə görə telefon nömrəsinin tipi daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_tph_contact_type"] = (await $.mv((await $.v(C, "tph_contact_type")), "keyvalue"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioButton_Rez")), "Checked")), true))) {
    L0["p_nerezident"] = 1;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioButton_NeRez")), "Checked")), true))) {
    L0["p_nerezident"] = 0;
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "CheckBox_Phys")), "Checked"))), async () => $.not(((await $.mv((await $.v(C, "CheckBox_FS")), "Checked")))))))) {
    await $.set(C, "p_cust_type", 1);
  }
  if ($.truthy((await $.and_($.not(((await $.mv((await $.v(C, "CheckBox_Phys")), "Checked")))), async () => ((await $.mv((await $.v(C, "CheckBox_FS")), "Checked"))))))) {
    await $.set(C, "p_cust_type", 2);
  }
  if ($.truthy((await $.and_(((await $.mv((await $.v(C, "CheckBox_Phys")), "Checked"))), async () => ((await $.mv((await $.v(C, "CheckBox_FS")), "Checked"))))))) {
    await $.set(C, "p_cust_type", 3);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label89")), "Visible")), true))) {
    if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "DBLC_RiskCateg")), "text"))])), ""))) {
      await $.stmt($.call(C, "OpenAdditional", []));
      await $.stmt((await $.call(C, "showmessage", ["Müştərinin risk kateqoriyası daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_risk_categ"] = (await $.mv((await $.v(C, "DBLC_RiskCateg")), "KeyValue"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "label1000")), "Visible")), true))) {
    if ($.truthy(($.eq((await $.mv((await $.v(C, "DBDateTimeSamelyDate")), "value")), (await $.v(C, "null")))))) {
      await $.stmt($.call(C, "OpenAdditional", []));
      await $.stmt((await $.call(C, "showmessage", ["Müştərinin eyniləşdirmə tarixi daxil edilməlidir!"])));
      return L0.result;
    }
  }
  L0["p_samelydate"] = (await $.mv((await $.v(C, "DBDateTimeSamelyDate")), "Value"));
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLC_CustRiskDesc")), "keyvalue")), (await $.v(C, "null"))))))) {
    L0["p_riskdescid"] = (await $.mv((await $.v(C, "DBLC_CustRiskDesc")), "KeyValue"));
  }
  L0["p_work_adrs_spec"] = "A";
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLC_WorkCity")), "KeyValue")), (await $.v(C, "null"))))))) {
    L0["p_work_city"] = (await $.mv((await $.v(C, "DBLC_WorkCity")), "KeyValue"));
  }
  L0["p_work_state"] = (await $.mv((await $.v(C, "EditWorkState")), "Text"));
  L0["p_work_zip"] = (await $.mv((await $.v(C, "EditWorkZip")), "Text"));
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLC_workCountry")), "KeyValue")), (await $.v(C, "null"))))))) {
    L0["p_work_cntr"] = (await $.mv((await $.v(C, "DBLC_workCountry")), "KeyValue"));
  }
  if ($.truthy($.not(($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "DBLC_WorkComnType")), "KeyValue"))])), ""))))) {
    L0["p_work_phone_spec"] = (await $.mv((await $.v(C, "DBLC_WorkComnType")), "KeyValue"));
  } else {
    L0["p_work_phone_spec"] = "";
  }
  L0["p_work_phconttype"] = "A";
  L0["p_work_phoppref"] = (await $.mv((await $.v(C, "EditWorkPhOpCode")), "Text"));
  L0["p_work_phext"] = (await $.mv((await $.v(C, "EditWorkExt")), "Text"));
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLC_WorkPhoneCode")), "KeyValue")), (await $.v(C, "null"))))))) {
    L0["p_work_phcode"] = (await $.mv((await $.v(C, "DBLC_WorkPhoneCode")), "KeyValue"));
  } else {
    L0["p_work_phcode"] = (await $.v(C, "null"));
  }
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "id_quality_DBLookupComboboxEh")), "KeyValue")), (await $.v(C, "null"))))))) {
    L0["p_quality_id"] = (await $.mv((await $.v(C, "id_quality_DBLookupComboboxEh")), "KeyValue"));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), false))) {
    L0["v_homeland_war"] = 0;
  } else {
    L0["v_homeland_war"] = 1;
  }
  if ($.truthy((await $.and_((await $.and_(($.ne(L0["p_lastname"], "")), async () => ($.ne(L0["p_firstname"], "")))), async () => ($.ne((await $.v(C, "pep_chek")), (-(1)))))))) {
    await $.set(C, "Pep_change", (await $.mcall((await $.v(C, "TPep_change")), "Create", [null])));
    await $.mset((await $.v(C, "Pep_change")), "Position", (await $.v(C, "poMainFormCenter")));
    await $.mset((await $.mv((await $.v(C, "Pep_change")), "Edit1")), "Text", L0["p_lastname"]);
    await $.mset((await $.mv((await $.v(C, "Pep_change")), "Edit2")), "Text", L0["p_firstname"]);
    await $.mcall((await $.v(C, "Pep_change")), "ShowModal", []);
    return L0.result;
  }
  L0["black"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "PG_PCustService")), "CallStringFunction", ["GET_WORLD_YOXLAMA", [($.add($.add($.add($.add((await $.call(C, "trim", [L0["p_lastname"]])), " "), (await $.call(C, "trim", [L0["p_firstname"]]))), " "), (await $.call(C, "trim", [L0["p_middlename"]])))), L0["p_birthdate"]]]));
  L0["dashpos"] = (await $.call(C, "Pos", ["--", L0["black"]]));
  L0["percentpos"] = (await $.call(C, "Pos", ["%", L0["black"]]));
  if ($.truthy((await $.and_(($.gt(L0["dashpos"], 0)), async () => ($.gt(L0["percentpos"], L0["dashpos"])))))) {
    L0["scorestr"] = (await $.call(C, "Copy", [L0["black"], $.add(L0["dashpos"], 2), $.sub(L0["percentpos"], ($.add(L0["dashpos"], 2)))]));
    L0["scorestr"] = (await $.call(C, "Trim", [L0["scorestr"]]));
    L0["score"] = (await $.call(C, "StrToIntDef", [L0["scorestr"], 0]));
    if ($.truthy($.ge(L0["score"], 86))) {
      if ($.truthy((await $.call(C, "ShowRedMessage", ["DIQQƏT! Bu müştəri Beynəlxalq  siyahıdadır! Risk şöbəsinə müraciət edin!"])))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Davam edilir..."])));
        L0["ins1"] = 1;
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyat dayandırıldı."])));
        L0["ins1"] = (-(1));
        return L0.result;
      }
    }
  } else {
    if ($.truthy($.gt((await $.call(C, "Pos", ["Match--Yoxlanildi yerli", L0["black"]])), 0))) {
      await $.stmt((await $.call(C, "ShowMessage", ["DIQQƏT! Bu müştəri qara siyahıdadır! Risk şöbəsinə müraciət edin!"])));
      return L0.result;
    }
  }
  if ($.truthy(($.gt((await $.mv((await $.mv((await $.mv((await $.v(C, "Pep_change")), "Memo1")), "Lines")), "Count")), 2)))) {
    if ($.truthy((await $.call(C, "ShowRedMessage", ["DIQQƏT! Bu müştəri siyasi nufuzlu şəxslər siyahısındadı! Risk şöbəsinə müraciət edin!"])))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Davam edilir..."])));
      L0["ins"] = 1;
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyat dayandırıldı."])));
      L0["ins"] = (-(1));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.v(C, "AddUpd")), true))) {
    {
      const $t10 = (await $.wobj(C, "P_Datamodule"));
      await $.wset([$t10], "p_ID", (await $.mcall((await $.wv([$t10], "phys_fs_customers", C, false)), "CallIntegerFunction", ["add_p_customers", [(await $.wv([$t10], "p_cust_name", { get: async () => L0["p_cust_name"], set: async (v) => { L0["p_cust_name"] = v; }, local: true }, false)), (await $.wv([$t10], "p_quality_id", { get: async () => L0["p_quality_id"], set: async (v) => { L0["p_quality_id"] = v; }, local: true }, false)), (await $.wv([$t10], "p_passp_number", { get: async () => L0["p_passp_number"], set: async (v) => { L0["p_passp_number"] = v; }, local: true }, false)), (await $.wv([$t10], "p_birthdate", { get: async () => L0["p_birthdate"], set: async (v) => { L0["p_birthdate"] = v; }, local: true }, false)), (await $.wv([$t10], "p_birthplace", { get: async () => L0["p_birthplace"], set: async (v) => { L0["p_birthplace"] = v; }, local: true }, false)), (await $.wv([$t10], "p_fam_status", { get: async () => L0["p_fam_status"], set: async (v) => { L0["p_fam_status"] = v; }, local: true }, false)), (await $.wv([$t10], "p_adress", { get: async () => L0["p_adress"], set: async (v) => { L0["p_adress"] = v; }, local: true }, false)), (await $.wv([$t10], "p_faktAdress", { get: async () => L0["p_faktadress"], set: async (v) => { L0["p_faktadress"] = v; }, local: true }, false)), (await $.wv([$t10], "p_phone", { get: async () => L0["p_phone"], set: async (v) => { L0["p_phone"] = v; }, local: true }, false)), (await $.wv([$t10], "p_email", { get: async () => L0["p_email"], set: async (v) => { L0["p_email"] = v; }, local: true }, false)), (await $.wv([$t10], "p_sex", { get: async () => L0["p_sex"], set: async (v) => { L0["p_sex"] = v; }, local: true }, false)), (await $.wv([$t10], "p_passport", { get: async () => L0["p_passport"], set: async (v) => { L0["p_passport"] = v; }, local: true }, false)), (await $.wv([$t10], "p_adrs_state", { get: async () => L0["p_adrs_state"], set: async (v) => { L0["p_adrs_state"] = v; }, local: true }, false)), (await $.wv([$t10], "p_adrs_city", { get: async () => L0["p_adrs_city"], set: async (v) => { L0["p_adrs_city"] = v; }, local: true }, false)), (await $.wv([$t10], "p_birthCity", { get: async () => L0["p_birthcity"], set: async (v) => { L0["p_birthcity"] = v; }, local: true }, false)), (await $.wv([$t10], "p_phone_mob", { get: async () => L0["p_phone_mob"], set: async (v) => { L0["p_phone_mob"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t10], "Edit_voen", C, false)), "Text")), (await $.mv((await $.wv([$t10], "dblGroup", C, false)), "keyvalue")), (await $.wv([$t10], "p_passp_date", { get: async () => L0["p_passp_date"], set: async (v) => { L0["p_passp_date"] = v; }, local: true }, false)), (await $.wv([$t10], "p_nerezident", { get: async () => L0["p_nerezident"], set: async (v) => { L0["p_nerezident"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t10], "DBLCBoxVidSob", C, false)), "keyvalue")), (await $.mv((await $.wv([$t10], "DBLCBoxPrinad", C, false)), "keyvalue")), (await $.wv([$t10], "p_PassPlace", { get: async () => L0["p_passplace"], set: async (v) => { L0["p_passplace"] = v; }, local: true }, false)), (await $.wv([$t10], "p_PINCode", { get: async () => L0["p_pincode"], set: async (v) => { L0["p_pincode"] = v; }, local: true }, false)), (await $.wv([$t10], "p_Citizenship", { get: async () => L0["p_citizenship"], set: async (v) => { L0["p_citizenship"] = v; }, local: true }, false)), (await $.wv([$t10], "p_PASSEXPIRE", { get: async () => L0["p_passexpire"], set: async (v) => { L0["p_passexpire"] = v; }, local: true }, false)), (await $.wv([$t10], "p_DocType", { get: async () => L0["p_doctype"], set: async (v) => { L0["p_doctype"] = v; }, local: true }, false)), (await $.wv([$t10], "p_Note", { get: async () => L0["p_note"], set: async (v) => { L0["p_note"] = v; }, local: true }, false)), (await $.wv([$t10], "p_cust_type", C, false)), (await $.wv([$t10], "p_category", { get: async () => L0["p_category"], set: async (v) => { L0["p_category"] = v; }, local: true }, false)), (await $.wv([$t10], "p_reg_zip", { get: async () => L0["p_reg_zip"], set: async (v) => { L0["p_reg_zip"] = v; }, local: true }, false)), (await $.wv([$t10], "p_doc_country", { get: async () => L0["p_doc_country"], set: async (v) => { L0["p_doc_country"] = v; }, local: true }, false)), (await $.wv([$t10], "p_citizenship2", { get: async () => L0["p_citizenship2"], set: async (v) => { L0["p_citizenship2"] = v; }, local: true }, false)), (await $.wv([$t10], "p_citizenship3", { get: async () => L0["p_citizenship3"], set: async (v) => { L0["p_citizenship3"] = v; }, local: true }, false)), (await $.wv([$t10], "p_fakt_country", { get: async () => L0["p_fakt_country"], set: async (v) => { L0["p_fakt_country"] = v; }, local: true }, false)), (await $.wv([$t10], "p_fakt_city", { get: async () => L0["p_fakt_city"], set: async (v) => { L0["p_fakt_city"] = v; }, local: true }, false)), (await $.wv([$t10], "p_fakt_zip", { get: async () => L0["p_fakt_zip"], set: async (v) => { L0["p_fakt_zip"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_place", { get: async () => L0["p_work_place"], set: async (v) => { L0["p_work_place"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_post", { get: async () => L0["p_work_post"], set: async (v) => { L0["p_work_post"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_adress", { get: async () => L0["p_work_adress"], set: async (v) => { L0["p_work_adress"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_phone", { get: async () => L0["p_work_phone"], set: async (v) => { L0["p_work_phone"] = v; }, local: true }, false)), (await $.wv([$t10], "p_Contact_type", { get: async () => L0["p_contact_type"], set: async (v) => { L0["p_contact_type"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_country", { get: async () => L0["p_tph_country"], set: async (v) => { L0["p_tph_country"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_country_code", { get: async () => L0["p_tph_country_code"], set: async (v) => { L0["p_tph_country_code"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_city", { get: async () => L0["p_tph_city"], set: async (v) => { L0["p_tph_city"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_state", { get: async () => L0["p_tph_state"], set: async (v) => { L0["p_tph_state"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_zip", { get: async () => L0["p_tph_zip"], set: async (v) => { L0["p_tph_zip"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_country_prefix", { get: async () => L0["p_tph_country_prefix"], set: async (v) => { L0["p_tph_country_prefix"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_adress", { get: async () => L0["p_tph_adress"], set: async (v) => { L0["p_tph_adress"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_communication_type", { get: async () => L0["p_tph_communication_type"], set: async (v) => { L0["p_tph_communication_type"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_number", { get: async () => L0["p_tph_number"], set: async (v) => { L0["p_tph_number"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_extension", { get: async () => L0["p_tph_extension"], set: async (v) => { L0["p_tph_extension"] = v; }, local: true }, false)), (await $.wv([$t10], "p_tph_contact_type", { get: async () => L0["p_tph_contact_type"], set: async (v) => { L0["p_tph_contact_type"] = v; }, local: true }, false)), (await $.wv([$t10], "p_Lastname", { get: async () => L0["p_lastname"], set: async (v) => { L0["p_lastname"] = v; }, local: true }, false)), (await $.wv([$t10], "p_FirstName", { get: async () => L0["p_firstname"], set: async (v) => { L0["p_firstname"] = v; }, local: true }, false)), (await $.wv([$t10], "p_MiddleName", { get: async () => L0["p_middlename"], set: async (v) => { L0["p_middlename"] = v; }, local: true }, false)), (await $.wv([$t10], "p_risk_categ", { get: async () => L0["p_risk_categ"], set: async (v) => { L0["p_risk_categ"] = v; }, local: true }, false)), (await $.wv([$t10], "p_RISKDESCID", { get: async () => L0["p_riskdescid"], set: async (v) => { L0["p_riskdescid"] = v; }, local: true }, false)), (await $.wv([$t10], "p_samelydate", { get: async () => L0["p_samelydate"], set: async (v) => { L0["p_samelydate"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_adrs_spec", { get: async () => L0["p_work_adrs_spec"], set: async (v) => { L0["p_work_adrs_spec"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_city", { get: async () => L0["p_work_city"], set: async (v) => { L0["p_work_city"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_state", { get: async () => L0["p_work_state"], set: async (v) => { L0["p_work_state"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_zip", { get: async () => L0["p_work_zip"], set: async (v) => { L0["p_work_zip"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_cntr", { get: async () => L0["p_work_cntr"], set: async (v) => { L0["p_work_cntr"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_phone_spec", { get: async () => L0["p_work_phone_spec"], set: async (v) => { L0["p_work_phone_spec"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_phconttype", { get: async () => L0["p_work_phconttype"], set: async (v) => { L0["p_work_phconttype"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_phoppref", { get: async () => L0["p_work_phoppref"], set: async (v) => { L0["p_work_phoppref"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_phext", { get: async () => L0["p_work_phext"], set: async (v) => { L0["p_work_phext"] = v; }, local: true }, false)), (await $.wv([$t10], "p_work_phcode", { get: async () => L0["p_work_phcode"], set: async (v) => { L0["p_work_phcode"] = v; }, local: true }, false)), (await $.wv([$t10], "p_sendsms", { get: async () => L0["p_sendsms"], set: async (v) => { L0["p_sendsms"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t10], "edit2", C, false)), "Text")), (await $.mv((await $.wv([$t10], "edit3", C, false)), "Text")), (await $.wv([$t10], "v_homeland_war", { get: async () => L0["v_homeland_war"], set: async (v) => { L0["v_homeland_war"] = v; }, local: true }, false))]])), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
      await $.mset((await $.wv([$t10], "Edit_LastName", C, false)), "Text", "");
      await $.mset((await $.wv([$t10], "Edit_FirstName", C, false)), "Text", "");
      await $.mset((await $.wv([$t10], "Edit_MiddleName", C, false)), "Text", "");
      await $.mset((await $.wv([$t10], "EditByrName", C, false)), "Text", "");
      await $.mset((await $.wv([$t10], "EditPassport", C, false)), "Text", "");
      await $.mset((await $.wv([$t10], "EditMobil", C, false)), "Text", "");
      await $.mset((await $.wv([$t10], "EditPhone", C, false)), "Text", "");
      await $.mset((await $.wv([$t10], "EditEmail", C, false)), "Text", "");
      await $.mset((await $.wv([$t10], "Edit_voen", C, false)), "Text", "");
      await $.mset((await $.wv([$t10], "CheckBox_Phys", C, false)), "Checked", (await $.wv([$t10], "False", C, false)));
      await $.mset((await $.wv([$t10], "CheckBox_FS", C, false)), "Checked", (await $.wv([$t10], "False", C, false)));
      await $.mset((await $.wv([$t10], "CheckBox1", C, false)), "Checked", (await $.wv([$t10], "false", C, false)));
      await $.mset((await $.wv([$t10], "RadioButton_Rez", C, false)), "Checked", (await $.wv([$t10], "true", C, false)));
    }
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "Last", []);
  }
  if ($.truthy($.eq((await $.v(C, "AddUpd")), false))) {
    {
      const $t11 = (await $.wobj(C, "P_Datamodule"));
      await $.wset([$t11], "p_ID", (await $.mv((await $.mcall((await $.wv([$t11], "P_Customers", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
      await $.wset([$t11], "p_ID", (await $.mcall((await $.wv([$t11], "phys_fs_customers", C, false)), "CallIntegerFunction", ["upd_p_customes", [(await $.wv([$t11], "p_ID", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false)), (await $.wv([$t11], "p_cust_name", { get: async () => L0["p_cust_name"], set: async (v) => { L0["p_cust_name"] = v; }, local: true }, false)), (await $.wv([$t11], "p_quality_id", { get: async () => L0["p_quality_id"], set: async (v) => { L0["p_quality_id"] = v; }, local: true }, false)), (await $.wv([$t11], "p_passp_number", { get: async () => L0["p_passp_number"], set: async (v) => { L0["p_passp_number"] = v; }, local: true }, false)), (await $.wv([$t11], "p_birthdate", { get: async () => L0["p_birthdate"], set: async (v) => { L0["p_birthdate"] = v; }, local: true }, false)), (await $.wv([$t11], "p_birthplace", { get: async () => L0["p_birthplace"], set: async (v) => { L0["p_birthplace"] = v; }, local: true }, false)), (await $.wv([$t11], "p_fam_status", { get: async () => L0["p_fam_status"], set: async (v) => { L0["p_fam_status"] = v; }, local: true }, false)), (await $.wv([$t11], "p_adress", { get: async () => L0["p_adress"], set: async (v) => { L0["p_adress"] = v; }, local: true }, false)), (await $.wv([$t11], "p_faktAdress", { get: async () => L0["p_faktadress"], set: async (v) => { L0["p_faktadress"] = v; }, local: true }, false)), (await $.wv([$t11], "p_phone", { get: async () => L0["p_phone"], set: async (v) => { L0["p_phone"] = v; }, local: true }, false)), (await $.wv([$t11], "p_email", { get: async () => L0["p_email"], set: async (v) => { L0["p_email"] = v; }, local: true }, false)), (await $.wv([$t11], "p_sex", { get: async () => L0["p_sex"], set: async (v) => { L0["p_sex"] = v; }, local: true }, false)), (await $.wv([$t11], "p_passport", { get: async () => L0["p_passport"], set: async (v) => { L0["p_passport"] = v; }, local: true }, false)), (await $.wv([$t11], "p_adrs_state", { get: async () => L0["p_adrs_state"], set: async (v) => { L0["p_adrs_state"] = v; }, local: true }, false)), (await $.wv([$t11], "p_adrs_city", { get: async () => L0["p_adrs_city"], set: async (v) => { L0["p_adrs_city"] = v; }, local: true }, false)), (await $.wv([$t11], "p_birthCity", { get: async () => L0["p_birthcity"], set: async (v) => { L0["p_birthcity"] = v; }, local: true }, false)), (await $.wv([$t11], "p_phone_mob", { get: async () => L0["p_phone_mob"], set: async (v) => { L0["p_phone_mob"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t11], "Edit_voen", C, false)), "Text")), (await $.mv((await $.wv([$t11], "dblGroup", C, false)), "keyvalue")), (await $.mv((await $.wv([$t11], "DBLCBoxVidSob", C, false)), "keyvalue")), (await $.mv((await $.wv([$t11], "DBLCBoxPrinad", C, false)), "keyvalue")), (await $.wv([$t11], "p_nerezident", { get: async () => L0["p_nerezident"], set: async (v) => { L0["p_nerezident"] = v; }, local: true }, false)), (await $.wv([$t11], "p_passp_date", { get: async () => L0["p_passp_date"], set: async (v) => { L0["p_passp_date"] = v; }, local: true }, false)), (await $.wv([$t11], "p_PassPlace", { get: async () => L0["p_passplace"], set: async (v) => { L0["p_passplace"] = v; }, local: true }, false)), (await $.wv([$t11], "p_PINCode", { get: async () => L0["p_pincode"], set: async (v) => { L0["p_pincode"] = v; }, local: true }, false)), (await $.wv([$t11], "p_Citizenship", { get: async () => L0["p_citizenship"], set: async (v) => { L0["p_citizenship"] = v; }, local: true }, false)), (await $.wv([$t11], "p_PASSEXPIRE", { get: async () => L0["p_passexpire"], set: async (v) => { L0["p_passexpire"] = v; }, local: true }, false)), (await $.wv([$t11], "p_DocType", { get: async () => L0["p_doctype"], set: async (v) => { L0["p_doctype"] = v; }, local: true }, false)), (await $.wv([$t11], "p_Note", { get: async () => L0["p_note"], set: async (v) => { L0["p_note"] = v; }, local: true }, false)), (await $.wv([$t11], "p_cust_type", C, false)), (await $.wv([$t11], "p_category", { get: async () => L0["p_category"], set: async (v) => { L0["p_category"] = v; }, local: true }, false)), (await $.wv([$t11], "p_reg_zip", { get: async () => L0["p_reg_zip"], set: async (v) => { L0["p_reg_zip"] = v; }, local: true }, false)), (await $.wv([$t11], "p_doc_country", { get: async () => L0["p_doc_country"], set: async (v) => { L0["p_doc_country"] = v; }, local: true }, false)), (await $.wv([$t11], "p_citizenship2", { get: async () => L0["p_citizenship2"], set: async (v) => { L0["p_citizenship2"] = v; }, local: true }, false)), (await $.wv([$t11], "p_citizenship3", { get: async () => L0["p_citizenship3"], set: async (v) => { L0["p_citizenship3"] = v; }, local: true }, false)), (await $.wv([$t11], "p_fakt_country", { get: async () => L0["p_fakt_country"], set: async (v) => { L0["p_fakt_country"] = v; }, local: true }, false)), (await $.wv([$t11], "p_fakt_city", { get: async () => L0["p_fakt_city"], set: async (v) => { L0["p_fakt_city"] = v; }, local: true }, false)), (await $.wv([$t11], "p_fakt_zip", { get: async () => L0["p_fakt_zip"], set: async (v) => { L0["p_fakt_zip"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_place", { get: async () => L0["p_work_place"], set: async (v) => { L0["p_work_place"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_post", { get: async () => L0["p_work_post"], set: async (v) => { L0["p_work_post"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_adress", { get: async () => L0["p_work_adress"], set: async (v) => { L0["p_work_adress"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_phone", { get: async () => L0["p_work_phone"], set: async (v) => { L0["p_work_phone"] = v; }, local: true }, false)), (await $.wv([$t11], "p_Contact_type", { get: async () => L0["p_contact_type"], set: async (v) => { L0["p_contact_type"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_country", { get: async () => L0["p_tph_country"], set: async (v) => { L0["p_tph_country"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_country_code", { get: async () => L0["p_tph_country_code"], set: async (v) => { L0["p_tph_country_code"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_city", { get: async () => L0["p_tph_city"], set: async (v) => { L0["p_tph_city"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_state", { get: async () => L0["p_tph_state"], set: async (v) => { L0["p_tph_state"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_zip", { get: async () => L0["p_tph_zip"], set: async (v) => { L0["p_tph_zip"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_country_prefix", { get: async () => L0["p_tph_country_prefix"], set: async (v) => { L0["p_tph_country_prefix"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_adress", { get: async () => L0["p_tph_adress"], set: async (v) => { L0["p_tph_adress"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_communication_type", { get: async () => L0["p_tph_communication_type"], set: async (v) => { L0["p_tph_communication_type"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_number", { get: async () => L0["p_tph_number"], set: async (v) => { L0["p_tph_number"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_extension", { get: async () => L0["p_tph_extension"], set: async (v) => { L0["p_tph_extension"] = v; }, local: true }, false)), (await $.wv([$t11], "p_tph_contact_type", { get: async () => L0["p_tph_contact_type"], set: async (v) => { L0["p_tph_contact_type"] = v; }, local: true }, false)), (await $.wv([$t11], "p_Lastname", { get: async () => L0["p_lastname"], set: async (v) => { L0["p_lastname"] = v; }, local: true }, false)), (await $.wv([$t11], "p_FirstName", { get: async () => L0["p_firstname"], set: async (v) => { L0["p_firstname"] = v; }, local: true }, false)), (await $.wv([$t11], "p_MiddleName", { get: async () => L0["p_middlename"], set: async (v) => { L0["p_middlename"] = v; }, local: true }, false)), (await $.wv([$t11], "p_risk_categ", { get: async () => L0["p_risk_categ"], set: async (v) => { L0["p_risk_categ"] = v; }, local: true }, false)), (await $.wv([$t11], "p_RISKDESCID", { get: async () => L0["p_riskdescid"], set: async (v) => { L0["p_riskdescid"] = v; }, local: true }, false)), (await $.wv([$t11], "p_samelydate", { get: async () => L0["p_samelydate"], set: async (v) => { L0["p_samelydate"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_adrs_spec", { get: async () => L0["p_work_adrs_spec"], set: async (v) => { L0["p_work_adrs_spec"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_city", { get: async () => L0["p_work_city"], set: async (v) => { L0["p_work_city"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_state", { get: async () => L0["p_work_state"], set: async (v) => { L0["p_work_state"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_zip", { get: async () => L0["p_work_zip"], set: async (v) => { L0["p_work_zip"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_cntr", { get: async () => L0["p_work_cntr"], set: async (v) => { L0["p_work_cntr"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_phone_spec", { get: async () => L0["p_work_phone_spec"], set: async (v) => { L0["p_work_phone_spec"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_phconttype", { get: async () => L0["p_work_phconttype"], set: async (v) => { L0["p_work_phconttype"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_phoppref", { get: async () => L0["p_work_phoppref"], set: async (v) => { L0["p_work_phoppref"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_phext", { get: async () => L0["p_work_phext"], set: async (v) => { L0["p_work_phext"] = v; }, local: true }, false)), (await $.wv([$t11], "p_work_phcode", { get: async () => L0["p_work_phcode"], set: async (v) => { L0["p_work_phcode"] = v; }, local: true }, false)), (await $.wv([$t11], "p_sendsms", { get: async () => L0["p_sendsms"], set: async (v) => { L0["p_sendsms"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t11], "edit2", C, false)), "Text")), (await $.mv((await $.wv([$t11], "edit3", C, false)), "Text")), (await $.wv([$t11], "v_homeland_war", { get: async () => L0["v_homeland_war"], set: async (v) => { L0["v_homeland_war"] = v; }, local: true }, false))]])), { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true });
      await $.mcall((await $.mv((await $.wv([$t11], "P_Datamodule", C, false)), "P_Customers")), "Close", []);
    }
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "Open", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "Locate", ["id", L0["p_id"], []])));
  }
  await $.mcall((await $.v(C, "P_CO_Cust_Form")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "BirthPlaceKeyPress", async function BirthPlaceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "form_is_full")))) {
    await $.set(C, "form_is_full", false);
    await $.mset((await $.v(C, "BitBtn1")), "Caption", ">>>");
    await $.mset((await $.v(C, "P_CO_Cust_Form")), "Width", 537);
  } else {
    await $.mset((await $.v(C, "BitBtn1")), "Caption", "<<<");
    await $.mset((await $.v(C, "P_CO_Cust_Form")), "Width", 1069);
    await $.set(C, "form_is_full", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "OpenAdditional", async function OpenAdditional(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "BitBtn1")), "Caption", "<<<");
  await $.mset((await $.v(C, "P_CO_Cust_Form")), "Width", 1069);
  await $.set(C, "form_is_full", true);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_CO_Cust_Form", "EditBirthCityKeyPress", async function EditBirthCityKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "DBCBox_DocTYPEExit", async function DBCBox_DocTYPEExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBCBox_DocTYPE")), "text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Doc_Types")), "FieldByName", ["name"])), "AsString"))))) {
    await $.mset((await $.v(C, "EditSerial")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Doc_Types")), "FieldByName", ["series"])), "AsString")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditSerial")), "Text")), ""))) {
    await $.mset((await $.v(C, "issue_country")), "KeyValue", (-(1)));
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Doc_Types")), "FieldByName", ["symbol"])), "AsString")), "D")), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Doc_Types")), "FieldByName", ["symbol"])), "AsString")), "C")))))) {
    await $.mset((await $.v(C, "EditPINCode")), "MaxLength", 5);
    await $.mset((await $.v(C, "EditPINCode")), "MaxLength", 6);
  } else {
    await $.mset((await $.v(C, "EditPINCode")), "MaxLength", 7);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "DBEdit2Change", async function DBEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "pcid": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "CheckBox_FSClick", async function CheckBox_FSClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox_FS")), "Checked")))) {
    await $.mset((await $.v(C, "Edit_voen")), "Enabled", true);
    await $.mset((await $.v(C, "Edit_voen")), "Color", (await $.v(C, "clWhite")));
    await $.mset((await $.v(C, "Cust_Inform")), "Enabled", true);
  } else {
    await $.mcall((await $.v(C, "Edit_voen")), "Clear", []);
    await $.mset((await $.v(C, "Edit_voen")), "Enabled", false);
    await $.mset((await $.v(C, "Edit_voen")), "Color", (await $.v(C, "clScrollBar")));
    await $.mset((await $.v(C, "Cust_Inform")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "Cust_InformClick", async function Cust_InformClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "CustomerInfoForm"))]))))) {
    await $.set(C, "CustomerInfoForm", (await $.mcall((await $.v(C, "TCustomerInfoForm")), "Create", [Self])));
  }
  {
    const $t12 = (await $.wobj(C, "CustomerInfoForm"));
    const $t13 = (await $.wv([$t12], "CustInfoData", C, false));
    await $.stmt($.wcall([$t12, $t13], "ClearVariables", [], C));
    await $.stmt($.wcall([$t12, $t13], "Close", [], C));
    await $.stmt((await $.wcall([$t12, $t13], "SetVariable", ["customerid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t12, $t13], "P_Datamodule", C, false)), "P_Customers")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t12, $t13], "Open", [], C));
    await $.stmt($.wcall([$t12, $t13], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.wobj(C, "P_Datamodule"));
    await $.mcall((await $.wv([$t14], "Sysdat", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "Cities", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "Ad_Cities", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "ODS_PasspDeps", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "P_Categ", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "DS_issue_country", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "Doc_Types", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "Citizenship", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "Citizenship2", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "Citizenship3", C, false)), "Open", []);
    await $.stmt((await $.wcall([$t14], "combobox_add", [(await $.wv([$t14], "ODS_PasspDeps", C, false)), (await $.wv([$t14], "CBoxPassPlace", C, false)), "NAME"], C)));
    await $.mcall((await $.wv([$t14], "ODS_VidSob", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "ODS_Prinad", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "ODSCustGroup", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "Cities", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "DSFakt_Adrs_City", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "ds_mmx_communication_type", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "ds_mmx_contact_type", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "ds_tph_contact_type", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "DSCityByConctType", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "ds_tph_country_prefix", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "CUST_RISK_CATEG", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "work_contact_type", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "WorkCity", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "WorkPhContactType", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "WorkPhComnType", C, false)), "Open", []);
    await $.mcall((await $.wv([$t14], "WorkCntrPrefix", C, false)), "Open", []);
    if ($.truthy($.eq((await $.wv([$t14], "AddUpd", C, false)), (await $.wv([$t14], "true", C, false))))) {
      await $.mset((await $.wv([$t14], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "issue_country", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "Adrs_City", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "EditBirthCity", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "Fakt_Adrs_City", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "Address_type", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "CityByConctType", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "tph_contact_type", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "tph_communication_type", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "Adrs_City", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "DBLC_RiskCateg", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mcall((await $.wv([$t14], "EditByrName", C, false)), "Clear", []);
      await $.mset((await $.wv([$t14], "CBoxSex", C, false)), "Text", "");
      await $.mset((await $.wv([$t14], "CBoxSex", C, false)), "ItemIndex", (-(1)));
      await $.mset((await $.wv([$t14], "CBoxFamStatus", C, false)), "Text", "");
      await $.mset((await $.wv([$t14], "CBoxFamStatus", C, false)), "ItemIndex", (-(1)));
      await $.mset((await $.wv([$t14], "DB_CATEGORY", C, false)), "keyvalue", 0);
      await $.mcall((await $.wv([$t14], "EditPassport", C, false)), "Clear", []);
      await $.mset((await $.wv([$t14], "CBoxPassPlace", C, false)), "Text", "");
      await $.mcall((await $.wv([$t14], "EditPINCode", C, false)), "Clear", []);
      await $.mset((await $.wv([$t14], "DTPBirthDate", C, false)), "Value", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "DTPickPassp", C, false)), "Value", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "DTPickDocEnd", C, false)), "Value", (await $.wv([$t14], "null", C, false)));
      await $.mcall((await $.wv([$t14], "Cities", C, false)), "First", []);
      await $.mcall((await $.wv([$t14], "Ad_Cities", C, false)), "First", []);
      await $.mcall((await $.wv([$t14], "EditAdress", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "FaktAdress", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "EditMobil", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "EditPhone", C, false)), "Clear", []);
      await $.mset((await $.wv([$t14], "sendSMS", C, false)), "Checked", (await $.wv([$t14], "false", C, false)));
      await $.mcall((await $.wv([$t14], "EditEmail", C, false)), "Clear", []);
      await $.mset((await $.wv([$t14], "dblGroup", C, false)), "keyvalue", 0);
      await $.mset((await $.wv([$t14], "DBLCBoxVidSob", C, false)), "keyvalue", 0);
      await $.mset((await $.wv([$t14], "DBLCBoxPrinad", C, false)), "keyvalue", 0);
      await $.mset((await $.wv([$t14], "RadioButton_Rez", C, false)), "Checked", (await $.wv([$t14], "true", C, false)));
      await $.mset((await $.wv([$t14], "CheckBox_Phys", C, false)), "Checked", (await $.wv([$t14], "true", C, false)));
      await $.mset((await $.wv([$t14], "CheckBox_FS", C, false)), "Checked", (await $.wv([$t14], "False", C, false)));
      await $.mset((await $.wv([$t14], "CheckBox1", C, false)), "Checked", (await $.wv([$t14], "false", C, false)));
      await $.mset((await $.wv([$t14], "Edit_voen", C, false)), "Enabled", (await $.wv([$t14], "False", C, false)));
      await $.mcall((await $.wv([$t14], "ZipQ", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "ZipFakt", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "Work_Place", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "Work_Post", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "Work_Address", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "Work_Phone", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "tph_state", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "tph_zip", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "tph_adress", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "tph_number", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "tph_extension", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "Edit_FirstName", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "Edit_LastName", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "Edit_MiddleName", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "Note_Memo", C, false)), "Clear", []);
      await $.mset((await $.wv([$t14], "DBDateTimeSamelyDate", C, false)), "Value", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "DBLC_CustRiskDesc", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mset((await $.wv([$t14], "DBLC_WorkContactType", C, false)), "KeyValue", "A");
      await $.mset((await $.wv([$t14], "DBLC_WorkCity", C, false)), "KeyValue", (await $.wv([$t14], "null", C, false)));
      await $.mcall((await $.wv([$t14], "EditWorkState", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "EditWorkZip", C, false)), "Clear", []);
      await $.mset((await $.wv([$t14], "DBLC_WorkPhContType", C, false)), "KeyValue", "A");
      await $.mset((await $.wv([$t14], "DBLC_WorkComnType", C, false)), "KeyValue", "A");
      await $.mset((await $.wv([$t14], "DBLC_WorkPhoneCode", C, false)), "KeyValue", 994);
      await $.mcall((await $.wv([$t14], "EditWorkPhOpCode", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "EditWorkExt", C, false)), "Clear", []);
      await $.mset((await $.wv([$t14], "EditSerial", C, false)), "Color", (await $.wv([$t14], "clWindow", C, false)));
      await $.mset((await $.wv([$t14], "EditPassport", C, false)), "Color", (await $.wv([$t14], "clWindow", C, false)));
      await $.mset((await $.wv([$t14], "LabelSamelyDate", C, false)), "Visible", (await $.wv([$t14], "False", C, false)));
      await $.mset((await $.wv([$t14], "Timer1", C, false)), "Enabled", (await $.wv([$t14], "False", C, false)));
      await $.mcall((await $.wv([$t14], "edit2", C, false)), "Clear", []);
      await $.mcall((await $.wv([$t14], "edit3", C, false)), "Clear", []);
    }
    if ($.truthy($.eq((await $.wv([$t14], "AddUpd", C, false)), (await $.wv([$t14], "False", C, false))))) {
      await $.stmt($.wcall([$t14], "SelectSettings", [], C));
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "pep_chek", 1);
  await $.set(C, "ins_edit", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TP_CO_Cust_Form", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "j": 0, "aa": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "LastName"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label76")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label76")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "firstname"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label75")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label75")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "soname"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label74")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label74")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "sex"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label16")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label16")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "Citizenship"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label62")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label62")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "Doc_Type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label63")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label63")), "Visible", true);
  }
  if ($.truthy($.eq("PASSPORT", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["passport"])), "FieldName"))))) {
    L0["aa"] = "passer";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "Label9")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "Label9")), "Visible", true);
    }
  }
  if ($.truthy($.eq("PASSP_DATE", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["passp_date"])), "FieldName"))))) {
    L0["aa"] = "paspdate";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "Label86")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "Label86")), "Visible", true);
    }
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "passexpire"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label101")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label101")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "doc_country"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label64")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label64")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "PaspPlace"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label82")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label82")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "passpin"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label70")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label70")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "fakt_country"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label21")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label21")), "Visible", true);
  }
  if ($.truthy($.eq("ADRS_CITY", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["adrs_city"])), "FieldName"))))) {
    L0["aa"] = "city";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "Label77")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "Label77")), "Visible", true);
    }
  }
  if ($.truthy($.eq("ADRESS", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["adress"])), "FieldName"))))) {
    L0["aa"] = "address";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "Label23")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "Label23")), "Visible", true);
    }
  }
  if ($.truthy($.eq("PHONE_MOB", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["phone_mob"])), "FieldName"))))) {
    L0["aa"] = "phone";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "Label10")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "Label10")), "Visible", true);
    }
  }
  if ($.truthy($.eq("PHONE", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["phone"])), "FieldName"))))) {
    L0["aa"] = "phone_h";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "Label28")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "Label28")), "Visible", true);
    }
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["customers", "vid_sob"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label5")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label5")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "BIRTHPLACE"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "LabeL80")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "LabeL80")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "BIRTH_STATE"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "LabeL81")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "LabeL81")), "Visible", true);
  }
  if ($.truthy($.eq("BIRTHDATE", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "P_Customers")), "FieldByName", ["BIRTHDATE"])), "FieldName"))))) {
    L0["aa"] = "birthday";
    L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", L0["aa"]]]));
    if ($.truthy($.eq(L0["j"], 0))) {
      await $.mset((await $.v(C, "Label88")), "Visible", false);
    } else {
      await $.mset((await $.v(C, "Label88")), "Visible", true);
    }
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "fakt_country"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label78")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label78")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "fakt_city"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label79")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label79")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "fakt_adress"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label83")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label83")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "tph_contact_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label61")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label61")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "tph_country"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label65")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label65")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "tph_city"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label66")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label66")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "tph_adress"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label84")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label84")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "contact_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label67")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label67")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "tph_communication_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label68")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label68")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["custinfo", "tph_number"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label69")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label69")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["customers", "risk_categ"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label89")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label89")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["customers", "SAMELYDATE"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label1000")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label1000")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "phys_fs_customers")), "CallIntegerFunction", ["get_Messaj", ["customers", "inn"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label60")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label60")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "ins_edit")), true))) {
    await $.mset((await $.mv((await $.v(C, "P_CO_Cust_Form")), "BtnOK")), "Visible", false);
  }
  if ($.truthy($.eq((await $.v(C, "ins_edit")), false))) {
    await $.mset((await $.mv((await $.v(C, "P_CO_Cust_Form")), "BtnOK")), "Visible", true);
  }
  await $.set(C, "v_aze", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "FieldByName", ["PASSPORT"])), "AsString")));
  await $.set(C, "form_is_full", false);
  await $.mset((await $.v(C, "P_CO_Cust_Form")), "Width", 537);
  await $.mset((await $.v(C, "BitBtn1")), "Caption", ">>>");
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Country")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Ad_Country")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "DSFakt_Adrs_Country")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "WorkCountry")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "DSCountryByConctType")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Citizenship")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Citizenship2")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Citizenship3")), "Open", []);
  await $.mset((await $.v(C, "DBCBox_Citizenship")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Citizenship")), "Lookup", ["cntr_name", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "DBCBox_Citizenship2")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Citizenship2")), "Lookup", ["cntr_name", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "DBCBox_Citizenship3")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Citizenship3")), "Lookup", ["cntr_name", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "Adrs_State")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Ad_Country")), "Lookup", ["cntr_name", "Azərbaycan", "cntr_name"])));
  await $.mset((await $.v(C, "BirthPlace")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "Country")), "Lookup", ["cntr_name", "Azərbaycan", "cntr_name"])));
  await $.mset((await $.v(C, "Fakt_Adrs_State")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "DSFakt_Adrs_Country")), "Lookup", ["cntr_name", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "DBLC_workCountry")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "WorkCountry")), "Lookup", ["cntr_name", "Azərbaycan", "id"])));
  await $.mset((await $.v(C, "CountryByConctType")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "DSCountryByConctType")), "Lookup", ["cntr_name", "Azərbaycan", "id"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "RadioButton_NeRezClick", async function RadioButton_NeRezClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioButton_NeRez")), "Checked")), true))) {
    await $.mset((await $.v(C, "Label75")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioButton_NeRez")), "Checked")), true))) {
    await $.mset((await $.v(C, "Edit1")), "Text", "Azərbaycan");
  }
  {
    const $t15 = (await $.mv((await $.v(C, "P_Datamodule")), "Ad_Country"));
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t15], "SQL", C, false)), "Add", [$.add($.add("Select * from countries where cntr_name<>'", (await $.mv((await $.wv([$t15], "Edit1", C, false)), "Text"))), "' order by cntr_name")])));
    await $.stmt($.wcall([$t15], "Open", [], C));
    await $.mset((await $.wv([$t15], "Adrs_State", C, false)), "keyvalue", (await $.mv((await $.wcall([$t15], "FieldByName", ["cntr_name"], C)), "AsString")));
    await $.mset((await $.wv([$t15], "EditSerial", C, false)), "Text", " ");
    await $.mset((await $.wv([$t15], "DBCBox_DocTYPE", C, false)), "KeyValue", (-(1)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioButton_NeRez")), "Checked")), false))) {
    {
      const $t16 = (await $.mv((await $.v(C, "P_Datamodule")), "Ad_Country"));
      await $.stmt($.wcall([$t16], "Close", [], C));
      await $.mcall((await $.wv([$t16], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t16], "SQL", C, false)), "Add", ["Select * from countries  "])));
      await $.stmt($.wcall([$t16], "Open", [], C));
      await $.mset((await $.wv([$t16], "Adrs_State", C, false)), "keyvalue", "Azərbaycan");
      await $.mset((await $.wv([$t16], "Adrs_City", C, false)), "keyvalue", "Bakı");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "RadioButton_RezClick", async function RadioButton_RezClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioButton_Rez")), "Checked")), false))) {
    await $.mset((await $.v(C, "Edit1")), "Text", "Azərbaycan");
  }
  {
    const $t17 = (await $.mv((await $.v(C, "P_Datamodule")), "Ad_Country"));
    await $.stmt($.wcall([$t17], "Close", [], C));
    await $.mcall((await $.wv([$t17], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t17], "SQL", C, false)), "Add", ["Select c.* from countries c where lower(c.cntr_name)<>lower('yox') and c.cntr_name<>'Azərbaycan' order by c.cntr_name "])));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.mset((await $.wv([$t17], "Adrs_State", C, false)), "keyvalue", (await $.mv((await $.wcall([$t17], "FieldByName", ["cntr_name"], C)), "AsString")));
    await $.mset((await $.wv([$t17], "EditSerial", C, false)), "Text", " ");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioButton_Rez")), "Checked")), true))) {
    {
      const $t18 = (await $.mv((await $.v(C, "P_Datamodule")), "Ad_Country"));
      await $.stmt($.wcall([$t18], "Close", [], C));
      await $.mcall((await $.wv([$t18], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t18], "SQL", C, false)), "Add", ["select c.rowid,c.* from  countries c where lower(c.cntr_name)<>lower('yox') order by c.cntr_name "])));
      await $.stmt($.wcall([$t18], "Open", [], C));
      await $.mset((await $.wv([$t18], "Adrs_State", C, false)), "keyvalue", "Azərbaycan");
      await $.mset((await $.wv([$t18], "Adrs_City", C, false)), "keyvalue", "Bakı");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "EditByrNameKeyPress", async function EditByrNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t19 = L0["sender"];
        { const $t20 = (await $.wv([$t19], "Tag", C, false));
          if ($.eq($t20, 1)) {
            await $.stmt((await $.wcall([$t19], "SelectNext", [(await $.wv([$t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t19], "true", C, false)), (await $.wv([$t19], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "DTPBirthDateKeyPress", async function DTPBirthDateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t21 = L0["sender"];
        { const $t22 = (await $.wv([$t21], "Tag", C, false));
          if ($.eq($t22, 1)) {
            await $.stmt((await $.wcall([$t21], "SelectNext", [(await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t21], "true", C, false)), (await $.wv([$t21], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "CBoxSexKeyPress", async function CBoxSexKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t23 = L0["sender"];
        { const $t24 = (await $.wv([$t23], "Tag", C, false));
          if ($.eq($t24, 1)) {
            await $.stmt((await $.wcall([$t23], "SelectNext", [(await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t23], "true", C, false)), (await $.wv([$t23], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "CBoxFamStatusKeyPress", async function CBoxFamStatusKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t25 = L0["sender"];
        { const $t26 = (await $.wv([$t25], "Tag", C, false));
          if ($.eq($t26, 1)) {
            await $.stmt((await $.wcall([$t25], "SelectNext", [(await $.wv([$t25], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t25], "true", C, false)), (await $.wv([$t25], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "EditAdressKeyPress", async function EditAdressKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t27 = L0["sender"];
        { const $t28 = (await $.wv([$t27], "Tag", C, false));
          if ($.eq($t28, 1)) {
            await $.stmt((await $.wcall([$t27], "SelectNext", [(await $.wv([$t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t27], "true", C, false)), (await $.wv([$t27], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "EditEmailKeyPress", async function EditEmailKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t29 = L0["sender"];
        { const $t30 = (await $.wv([$t29], "Tag", C, false));
          if ($.eq($t30, 1)) {
            await $.stmt((await $.wcall([$t29], "SelectNext", [(await $.wv([$t29], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t29], "true", C, false)), (await $.wv([$t29], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "EditSerialChange", async function EditSerialChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.v(C, "v_aze")), (await $.mv((await $.v(C, "EditSerial")), "Text"))))) {
    await $.mcall((await $.v(C, "EditPassport")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "EditSerialKeyPress", async function EditSerialKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t31 = L0["sender"];
        { const $t32 = (await $.wv([$t31], "Tag", C, false));
          if ($.eq($t32, 1)) {
            await $.stmt((await $.wcall([$t31], "SelectNext", [(await $.wv([$t31], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t31], "true", C, false)), (await $.wv([$t31], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "Edit_LastNameChange", async function Edit_LastNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditByrName")), "Text", $.add($.add($.add($.add((await $.mv((await $.v(C, "Edit_LastName")), "Text")), " "), (await $.mv((await $.v(C, "Edit_FirstName")), "Text"))), " "), (await $.mv((await $.v(C, "Edit_MiddleName")), "Text"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "EditPassportChange", async function EditPassportChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditSerial")), "Text")), "AZE"))) {
    await $.mset((await $.v(C, "EditPassport")), "MaxLength", 8);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditSerial")), "Text")), "AA"))) {
    await $.mset((await $.v(C, "EditPassport")), "MaxLength", 7);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "EditPassportClick", async function EditPassportClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditSerial")), "Text")), "AZE"))) {
    await $.mset((await $.v(C, "EditPassport")), "MaxLength", 8);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditSerial")), "Text")), "AA"))) {
    await $.mset((await $.v(C, "EditPassport")), "MaxLength", 7);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "EditPassportExit", async function EditPassportExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ChechPasp", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "EditPassportKeyPress", async function EditPassportKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t33 = L0["sender"];
        { const $t34 = (await $.wv([$t33], "Tag", C, false));
          if ($.eq($t34, 1)) {
            await $.stmt((await $.wcall([$t33], "SelectNext", [(await $.wv([$t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t33], "true", C, false)), (await $.wv([$t33], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "EditPINCodeExit", async function EditPINCodeExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "ChechPasp", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "BtnOKKeyPress", async function BtnOKKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t35 = L0["sender"];
        { const $t36 = (await $.wv([$t35], "Tag", C, false));
          if ($.eq($t36, 1)) {
            await $.stmt((await $.wcall([$t35], "SelectNext", [(await $.wv([$t35], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t35], "true", C, false)), (await $.wv([$t35], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.func("LoadPlugin2", async function LoadPlugin2(Self, p0, p1, p2) {
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
  U.method("TP_CO_Cust_Form", "ButtonMeyarClick", async function ButtonMeyarClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cust_quality": 0, "id": 0, "custid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Formid_quality", (await $.mcall((await $.v(C, "TFormid_quality")), "create", [Self])));
  {
    const $t37 = (await $.wobj(C, "P_DataModule"));
    await $.mcall((await $.wv([$t37], "Ods_cust_id_quality1", C, false)), "close", []);
    await $.mcall((await $.wv([$t37], "Ods_custid_quality", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t37], "Ods_custid_quality", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t37], "p_Customers", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.wv([$t37], "Ods_cust_id_quality1", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t37], "p_Customers", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t37], "Ods_custid_quality", C, false)), "open", []);
    await $.mcall((await $.wv([$t37], "Ods_cust_id_quality1", C, false)), "open", []);
  }
  await $.mcall((await $.v(C, "Formid_quality")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "EditMobilChange", async function EditMobilChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TMaskEdit", [L0["sender"]])), "Modified", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_Cust_Form", "EditMobilKeyPress", async function EditMobilKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t38 = L0["sender"];
        { const $t39 = (await $.wv([$t38], "Tag", C, false));
          if ($.eq($t39, 1)) {
            await $.stmt((await $.wcall([$t38], "SelectNext", [(await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t38], "true", C, false)), (await $.wv([$t38], "true", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_CO_Cust_Form", "BtnCancelClick", async function BtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
