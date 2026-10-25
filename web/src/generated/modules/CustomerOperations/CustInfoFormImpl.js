// Generated from CustInfoFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustInfoFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ComCtrls", "Db", "OracleData", "ExtDlgs", "Buttons", "ImgList", "ToolWin", "Oracle", "Jpeg", "Variants", "Grids", "DBGrids", "SBCustomer", "sboapiDataModuleImpl", "UnitFrmZoom", "CO_datamod_impl", "SBTranslateProc", "CustomersImpl"]);
  const C = [U];
  U.defClass("TCustomerInfoForm", "TForm", {"tabcontrol": {"name": "TabControl", "type": "TTabControl"}, "custinfodata": {"name": "CustInfoData", "type": "TOracleDataSet"}, "custinfo": {"name": "CustInfo", "type": "TDataSource"}, "openpicturedlg": {"name": "OpenPictureDlg", "type": "TOpenPictureDialog"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "scrollbox1": {"name": "ScrollBox1", "type": "TScrollBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "odscustimages": {"name": "ODSCustImages", "type": "TOracleDataSet"}, "dscustimages": {"name": "DSCustImages", "type": "TDataSource"}, "odscustimagesid": {"name": "ODSCustImagesID", "type": "TFloatField"}, "odscustimagesphoto": {"name": "ODSCustImagesPHOTO", "type": "TBlobField"}, "odscustimagescustsign": {"name": "ODSCustImagesCUSTSIGN", "type": "TBlobField"}, "odscustimagesstamp": {"name": "ODSCustImagesSTAMP", "type": "TBlobField"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "edit13": {"name": "Edit13", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "image1": {"name": "Image1", "type": "TImage"}, "image2": {"name": "Image2", "type": "TImage"}, "passdeps": {"name": "passdeps", "type": "TDataSource"}, "odspassdeps": {"name": "odsPassDeps", "type": "TOracleDataSet"}, "custinfodataid": {"name": "CustInfoDataID", "type": "TFloatField"}, "custinfodataidcust": {"name": "CustInfoDataIDCUST", "type": "TFloatField"}, "custinfodatasoname": {"name": "CustInfoDataSONAME", "type": "TWideStringField"}, "custinfodataname": {"name": "CustInfoDataNAME", "type": "TWideStringField"}, "custinfodatalastname": {"name": "CustInfoDataLASTNAME", "type": "TWideStringField"}, "custinfodatabirthday": {"name": "CustInfoDataBIRTHDAY", "type": "TDateTimeField"}, "custinfodatabirthplace": {"name": "CustInfoDataBIRTHPLACE", "type": "TWideStringField"}, "custinfodatapasser": {"name": "CustInfoDataPASSER", "type": "TWideStringField"}, "custinfodatapaspnum": {"name": "CustInfoDataPASPNUM", "type": "TWideStringField"}, "custinfodatapaspdate": {"name": "CustInfoDataPASPDATE", "type": "TDateTimeField"}, "custinfodatapaspplace": {"name": "CustInfoDataPASPPLACE", "type": "TWideStringField"}, "custinfodatacity": {"name": "CustInfoDataCITY", "type": "TWideStringField"}, "custinfodataaddress": {"name": "CustInfoDataADDRESS", "type": "TWideStringField"}, "custinfodataworkplace": {"name": "CustInfoDataWORKPLACE", "type": "TWideStringField"}, "custinfodataphone_w": {"name": "CustInfoDataPHONE_W", "type": "TWideStringField"}, "custinfodataphone_h": {"name": "CustInfoDataPHONE_H", "type": "TWideStringField"}, "custinfodataphone_m": {"name": "CustInfoDataPHONE_M", "type": "TWideStringField"}, "custinfodatae_mail": {"name": "CustInfoDataE_MAIL", "type": "TWideStringField"}, "custinfodataurl": {"name": "CustInfoDataURL", "type": "TWideStringField"}, "custinfodatarecomendation": {"name": "CustInfoDataRECOMENDATION", "type": "TWideStringField"}, "custinfodatagaranted": {"name": "CustInfoDataGARANTED", "type": "TWideStringField"}, "custinfodataotv_passport": {"name": "CustInfoDataOTV_PASSPORT", "type": "TWideStringField"}, "custinfodataotv_issued": {"name": "CustInfoDataOTV_ISSUED", "type": "TWideStringField"}, "custinfodataotv_isdate": {"name": "CustInfoDataOTV_ISDATE", "type": "TWideStringField"}, "custinfodatanote": {"name": "CustInfoDataNOTE", "type": "TWideStringField"}, "custinfodatawork": {"name": "CustInfoDataWORK", "type": "TWideStringField"}, "label1": {"name": "Label1", "type": "TLabel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "image3": {"name": "Image3", "type": "TImage"}, "bitbtn6": {"name": "BitBtn6", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "fill_edit": {"name": "Fill_Edit", "type": "TButton"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "tdedit4": {"name": "TDEdit4", "type": "TDateTimePicker"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "label47": {"name": "Label47", "type": "TLabel"}, "label48": {"name": "Label48", "type": "TLabel"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "label56": {"name": "Label56", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "label58": {"name": "Label58", "type": "TLabel"}, "label61": {"name": "Label61", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "label67": {"name": "Label67", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "label69": {"name": "Label69", "type": "TLabel"}, "address_type": {"name": "Address_type", "type": "TDBLookupComboBox"}, "countrybyconcttype": {"name": "CountryByConctType", "type": "TDBLookupComboBox"}, "citybyconcttype": {"name": "CityByConctType", "type": "TDBLookupComboBox"}, "tph_zip": {"name": "tph_zip", "type": "TEdit"}, "tph_state": {"name": "tph_state", "type": "TEdit"}, "tph_adress": {"name": "tph_adress", "type": "TEdit"}, "tph_contact_type": {"name": "tph_contact_type", "type": "TDBLookupComboBox"}, "tph_communication_type": {"name": "tph_communication_type", "type": "TDBLookupComboBox"}, "tph_country_prefix": {"name": "tph_country_prefix", "type": "TDBLookupComboBox"}, "tph_number": {"name": "tph_number", "type": "TEdit"}, "tph_extension": {"name": "tph_extension", "type": "TEdit"}, "dbedit_countrycode": {"name": "DBEdit_CountryCode", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "edit19": {"name": "Edit19", "type": "TDBLookupComboBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "tdedit18": {"name": "TDEdit18", "type": "TDateTimePicker"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "custinfodatatest": {"name": "CustInfoDataTEST", "type": "TWideStringField"}, "custinfodatafam_status": {"name": "CustInfoDataFAM_STATUS", "type": "TIntegerField"}, "custinfodatasex": {"name": "CustInfoDataSEX", "type": "TIntegerField"}, "custinfodataadrs_state": {"name": "CustInfoDataADRS_STATE", "type": "TWideStringField"}, "custinfodatabirth_state": {"name": "CustInfoDataBIRTH_STATE", "type": "TWideStringField"}, "custinfodatafakt_adress": {"name": "CustInfoDataFAKT_ADRESS", "type": "TWideStringField"}, "custinfodatachild_info": {"name": "CustInfoDataCHILD_INFO", "type": "TWideStringField"}, "custinfodatadoc_type": {"name": "CustInfoDataDOC_TYPE", "type": "TFloatField"}, "custinfodatapasspin": {"name": "CustInfoDataPASSPIN", "type": "TWideStringField"}, "custinfodatacitizenship": {"name": "CustInfoDataCITIZENSHIP", "type": "TFloatField"}, "custinfodatapassexpire": {"name": "CustInfoDataPASSEXPIRE", "type": "TDateTimeField"}, "custinfodatareg_zip": {"name": "CustInfoDataREG_ZIP", "type": "TWideStringField"}, "custinfodatadoc_country": {"name": "CustInfoDataDOC_COUNTRY", "type": "TFloatField"}, "custinfodatacitizenship2": {"name": "CustInfoDataCITIZENSHIP2", "type": "TFloatField"}, "custinfodatacitizenship3": {"name": "CustInfoDataCITIZENSHIP3", "type": "TFloatField"}, "custinfodatafakt_country": {"name": "CustInfoDataFAKT_COUNTRY", "type": "TFloatField"}, "custinfodatafakt_city": {"name": "CustInfoDataFAKT_CITY", "type": "TFloatField"}, "custinfodatafakt_zip": {"name": "CustInfoDataFAKT_ZIP", "type": "TWideStringField"}, "custinfodatawork_place": {"name": "CustInfoDataWORK_PLACE", "type": "TWideStringField"}, "custinfodatawork_post": {"name": "CustInfoDataWORK_POST", "type": "TWideStringField"}, "custinfodatawork_adress": {"name": "CustInfoDataWORK_ADRESS", "type": "TWideStringField"}, "custinfodatawork_phone": {"name": "CustInfoDataWORK_PHONE", "type": "TWideStringField"}, "custinfodatatph_contact_type": {"name": "CustInfoDataTPH_CONTACT_TYPE", "type": "TWideStringField"}, "custinfodatatph_country": {"name": "CustInfoDataTPH_COUNTRY", "type": "TFloatField"}, "custinfodatatph_country_code": {"name": "CustInfoDataTPH_COUNTRY_CODE", "type": "TWideStringField"}, "custinfodatatph_city": {"name": "CustInfoDataTPH_CITY", "type": "TFloatField"}, "custinfodatatph_state": {"name": "CustInfoDataTPH_STATE", "type": "TWideStringField"}, "custinfodatatph_zip": {"name": "CustInfoDataTPH_ZIP", "type": "TWideStringField"}, "custinfodatatph_country_prefix": {"name": "CustInfoDataTPH_COUNTRY_PREFIX", "type": "TFloatField"}, "custinfodatatph_adress": {"name": "CustInfoDataTPH_ADRESS", "type": "TWideStringField"}, "custinfodatatph_communication_type": {"name": "CustInfoDataTPH_COMMUNICATION_TYPE", "type": "TWideStringField"}, "custinfodatatph_number": {"name": "CustInfoDataTPH_NUMBER", "type": "TWideStringField"}, "custinfodatatph_extension": {"name": "CustInfoDataTPH_EXTENSION", "type": "TWideStringField"}, "custinfodatacontact_type": {"name": "CustInfoDataCONTACT_TYPE", "type": "TWideStringField"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "cb_sex": {"name": "CB_SEX", "type": "TComboBox"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "dblc_citizenship": {"name": "DBLC_Citizenship", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dblc_workposts": {"name": "DBLC_WorkPosts", "type": "TDBLookupComboBox"}, "forgoaml": {"name": "forGoAml", "type": "TCheckBox"}, "custinfodatacuinfaml": {"name": "CustInfoDataCUINFAML", "type": "TIntegerField"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dblc_cicntr": {"name": "DBLC_CiCntr", "type": "TDBLookupComboBox"}, "dblc_cicity": {"name": "DBLC_CiCity", "type": "TDBLookupComboBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "tb_nokia": {"name": "TB_Nokia", "type": "TToolButton"}, "accowner": {"name": "AccOwner", "type": "TCheckBox"}, "kartopen": {"name": "KartOpen", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("CustomerInfoForm", null, "TCustomerInfoForm");
    U.var_("Path", '', "String");
    U.var_("Path_B", '', "String");
  });
  U.func("GetPath", async function GetPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "imagespath": ''};
  L0["imagespath"] = (await $.call(C, "Format", ["%s\\..\\Env\\Customers", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))]]));
  await $.set(C, "Path", (await $.call(C, "Format", ["%s\\temp.jpg", [L0["imagespath"]]])));
  await $.set(C, "Path_B", (await $.call(C, "Format", ["%s\\blank.jpg", [L0["imagespath"]]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCustomerInfoForm", "ViewCustInfo", async function ViewCustInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"customerid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["customerid"]);
  {
    const $t1 = (await $.v(C, "CustInfoData"));
    if ($.truthy($.eq((await $.wv([$t1], "RecordCount", C, false)), 0))) {
      await $.mcall((await $.wv([$t1], "ToolButton2", C, false)), "Click", []);
    }
    await $.stmt($.wcall([$t1], "GetPath", [], C));
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["CustomerID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCustomerInfoForm", "CustInfoDataAfterOpen", async function CustInfoDataAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["dataset"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Open", []);
  {
    const $t2 = (await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations"));
    const $t3 = (await $.wv([$t2], "TabControl", C, false));
    await $.mcall((await $.wv([$t2, $t3], "Tabs", C, false)), "Clear", []);
    await $.stmt($.wcall([$t2, $t3], "First", [], C));
    { const $t4 = $.sub((await $.wv([$t2, $t3], "RecordCount", C, false)), 1);
      await $.wset([$t2, $t3], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t5 = true;
      for (;;) {
        if (!$t5) { await $.wset([$t2, $t3], "Index", $.succ((await $.wv([$t2, $t3], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t5 = false;
        if (!($.ord((await $.wv([$t2, $t3], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t4))) break;
        await $.stmt($.wcall([$t2, $t3], "Next", [], C));
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t2, $t3], "First", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TCustomerInfoForm", "TabControlChange", async function TabControlChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ToolButton6")), "Click", []);
  await $.mset((await $.v(C, "CustInfoData")), "RecNo", $.add((await $.mv((L0["sender"]), "TabIndex")), 1));
  await $.mcall((await $.v(C, "Fill_Edit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "TB_NokiaClick", async function TB_NokiaClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCustomers"))]))))) {
    await $.set(C, "FormCustomers", (await $.mcall((await $.v(C, "TFormCustomers")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FormCustomers")), "ShowModal", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "FormCustomers")), "vCustId")), (-(1))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "sb_custInfo")), "CallProcedure", ["add_cust_relations", ["v_custid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["ID"])), "AsInteger")), "v_custid2", (await $.mv((await $.v(C, "FormCustomers")), "vCustId"))]])));
    await $.mcall((await $.v(C, "CustInfoData")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Refresh", []);
    {
      const $t6 = (await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations"));
      const $t7 = (await $.wv([$t6], "TabControl", C, false));
      await $.mcall((await $.wv([$t6, $t7], "Tabs", C, false)), "Clear", []);
      await $.stmt($.wcall([$t6, $t7], "First", [], C));
      { const $t8 = $.sub((await $.wv([$t6, $t7], "RecordCount", C, false)), 1);
        await $.wset([$t6, $t7], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t9 = true;
        for (;;) {
          if (!$t9) { await $.wset([$t6, $t7], "Index", $.succ((await $.wv([$t6, $t7], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t9 = false;
          if (!($.ord((await $.wv([$t6, $t7], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t8))) break;
          await $.stmt($.wcall([$t6, $t7], "Next", [], C));
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t6, $t7], "First", [], C));
    }
    await $.mcall((await $.v(C, "Fill_Edit")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "CustInfoDataApplyRecord", async function CustInfoDataApplyRecord(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.copyArg(p1), "applied": $.asRef(p2), "newrowid": $.asRef(p3), result: undefined, "info": $.rec("tcustomerinfo")};
  await $.fixArgs(L0, ["sender", "action"]);
  { const $t10 = L0["action"];
    if ($.eq($t10, "I")) {
      {
        const $t11 = L0["sender"];
        const $t12 = (await $.wv([$t11], "Info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false));
        await $.wset([$t11, $t12], "SurName", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["SoName"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "Name", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["Name"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "LastName", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["LastName"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "BirthDate", (await $.wcall([$t11, $t12], "Trunc", [(await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["BirthDay"], C)), "AsDateTime"))], C)), C);
        await $.wset([$t11, $t12], "BirthPlace", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["BirthPlace"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "passer", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["passer"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "paspnum", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["paspnum"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "paspdate", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["paspdate"], C)), "AsDateTime")), C);
        await $.wset([$t11, $t12], "paspplace", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["paspplace"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "City", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["City"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "Address", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["Address"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "WorkPlace", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["WorkPlace"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "PhoneWork", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["Phone_W"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "PhoneHome", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["Phone_H"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "PhoneCelular", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["Phone_M"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "Email", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["E_Mail"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "Url", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["Url"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "recomendation", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["recomendation"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "garanted", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["garanted"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "otv_passport", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["otv_passport"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "otv_issued", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["otv_issued"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "otv_isdate", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["otv_isdate"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "note", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["note"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "work", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["work"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "test", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["test"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "fam_status", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["fam_status"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "sex", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["sex"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "adrs_state", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["adrs_state"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "birth_state", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["birth_state"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "fakt_adress", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["fakt_adress"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "child_info", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["child_info"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "doc_type", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["doc_type"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "passpin", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["passpin"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "citizenship", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["citizenship"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "passexpire", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["passexpire"], C)), "AsDateTime")), C);
        await $.wset([$t11, $t12], "reg_zip", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["reg_zip"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "doc_country", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["doc_country"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "citizenship2", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["citizenship2"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "citizenship3", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["citizenship3"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "fakt_country", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["fakt_country"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "fakt_city", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["fakt_city"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "fakt_zip", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["fakt_zip"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "work_place", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["work_place"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "work_post", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["work_post"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "work_adress", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["work_adress"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "work_phone", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["work_phone"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "tph_contact_type", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_contact_type"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "tph_country", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_country"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "tph_country_code", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_country_code"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "tph_city", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_city"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "tph_state", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_state"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "tph_zip", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_zip"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "tph_country_prefix", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_country_prefix"], C)), "AsInteger")), C);
        await $.wset([$t11, $t12], "tph_adress", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_adress"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "tph_communication_type", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_communication_type"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "tph_number", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_number"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "tph_extension", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["tph_extension"], C)), "AsString")), C);
        await $.wset([$t11, $t12], "contact_type", (await $.mv((await $.wcall([$t11, $t12], "FieldByName", ["contact_type"], C)), "AsString")), C);
      }
      await $.stmt((await $.call(C, "Sb_AddCustomerInfo", [(await $.mv((await $.mcall(L0["sender"], "FieldByName", ["ID"])), "AsInteger")), L0["info"]])));
      await L0["applied"].set(true);
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action", "Applied", "NewRowId"], "kind": "procedure", "ptypes": ["TOracleDataSet", "Char", "Boolean", "String"]});
  U.method("TCustomerInfoForm", "refresh_customers_relations", async function refresh_customers_relations(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "custids": '', "i": 0};
  {
    const $t13 = (await $.v(C, "CustomerInfoForm"));
    await $.mcall((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers_relations")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers_relations")), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers_relations")), "Open", []);
    await $.mcall((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers_relations")), "First", []);
    await $.wset([$t13], "CustIDs", (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers_relations")), "FieldByName", ["CUSTID2"])), "AsString")), { get: async () => L0["custids"], set: async (v) => { L0["custids"] = v; }, local: true });
    if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers_relations")), "RecordCount")), 0))) {
      { const $t14 = $.sub((await $.mv((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers_relations")), "RecordCount")), 1);
        await $.wset([$t13], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t15 = true;
        for (;;) {
          if (!$t15) { await $.wset([$t13], "i", $.succ((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t15 = false;
          if (!($.ord((await $.wv([$t13], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t14))) break;
          await $.mcall((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers_relations")), "Next", []);
          await $.wset([$t13], "CustIDs", $.add($.add((await $.wv([$t13], "CustIDs", { get: async () => L0["custids"], set: async (v) => { L0["custids"] = v; }, local: true }, false)), ","), (await $.mv((await $.mcall((await $.mv((await $.wv([$t13], "CO_DataMod", C, false)), "Customers_relations")), "FieldByName", ["CUSTID2"])), "AsString"))), { get: async () => L0["custids"], set: async (v) => { L0["custids"] = v; }, local: true });
          await $.tick();
        }
      }
      {
        const $t16 = (await $.wv([$t13], "CustInfoData", C, false));
        await $.stmt($.wcall([$t13, $t16], "ClearVariables", [], C));
        await $.stmt($.wcall([$t13, $t16], "Close", [], C));
        await $.stmt((await $.wcall([$t13, $t16], "SetVariable", ["customerid", (await $.wv([$t13, $t16], "CustIDs", { get: async () => L0["custids"], set: async (v) => { L0["custids"] = v; }, local: true }, false))], C)));
        await $.stmt($.wcall([$t13, $t16], "Open", [], C));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCustomerInfoForm", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0, "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ToolButton6Click", [(await $.v(C, "ToolButton6"))])));
  L0["v_id"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "sb_custInfo")), "CallIntegerFunction", ["add_custinfo", ["vidcust", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["ID"])), "AsInteger"))]]));
  await $.stmt($.call(C, "refresh_customers_relations", []));
  await $.stmt((await $.mcall((await $.v(C, "CustInfoData")), "Locate", ["id", L0["v_id"], []])));
  await $.mcall((await $.v(C, "Fill_Edit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "sb_custInfo")), "CallProcedure", ["del_cust_relations", ["v_custid", (await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "CustomersID")), "AsInteger")), "v_custid2", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["IDCUST"])), "AsInteger"))]])));
  await $.stmt($.call(C, "refresh_customers_relations", []));
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "RecordCount")), 0))) {
    {
      const $t17 = (await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations"));
      const $t18 = (await $.wv([$t17], "TabControl", C, false));
      await $.mcall((await $.wv([$t17, $t18], "Tabs", C, false)), "Clear", []);
      await $.stmt($.wcall([$t17, $t18], "First", [], C));
      { const $t19 = $.sub((await $.wv([$t17, $t18], "RecordCount", C, false)), 1);
        await $.wset([$t17, $t18], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
        let $t20 = true;
        for (;;) {
          if (!$t20) { await $.wset([$t17, $t18], "Index", $.succ((await $.wv([$t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
          $t20 = false;
          if (!($.ord((await $.wv([$t17, $t18], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t19))) break;
          await $.stmt($.wcall([$t17, $t18], "Next", [], C));
          await $.tick();
        }
      }
      await $.stmt($.wcall([$t17, $t18], "First", [], C));
    }
  } else {
    await $.mcall((await $.v(C, "CustomerInfoForm")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "ToolButton6Click", async function ToolButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_cuinfaml": 0, "v_accowner": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit1")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin adı daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit2")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin soyadı daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit3")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin ata adı daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CB_SEX")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin cinsi daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLC_Citizenship")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin vətəndaşlığı daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "KeyValue")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin əlaqə növünə görə adress tipi daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin əlaqə növünə görə ölkəsi daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin əlaqə növünə görə şəhəri daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "tph_adress")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin əlaqə növünə görə adresi daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "KeyValue")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin əlaqə növünə görə telefon nömrəsinin tipi daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "KeyValue")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin rabitə növünə görə telefon nömrəsinin tipi daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.call(C, "trim", [(await $.mv((await $.v(C, "tph_number")), "Text"))])), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Müştərinin əlaqə növünə görə telefon nömrəsi daxil edilməlidir!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "forGoAml")), "Checked")), true))) {
    L0["v_cuinfaml"] = 1;
  } else {
    L0["v_cuinfaml"] = 0;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "AccOwner")), "Checked")), true))) {
    L0["v_accowner"] = 1;
  } else {
    L0["v_accowner"] = 0;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "sb_custInfo")), "CallProcedure", ["check_work_post", ["v_idcust", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["ID"])), "AsInteger")), "v_workpost", (await $.mv((await $.v(C, "DBLC_WorkPosts")), "KeyValue")), "v_cust", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["IDCust"])), "AsInteger")), "v_signatory", L0["v_cuinfaml"], "v_accowner", L0["v_accowner"]]])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "CustInfoData")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "TDEdit4")), "Date"))])));
    await $.mset((await $.v(C, "Edit18")), "Text", (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "TDEdit18")), "Date"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "sb_custInfo")), "CallProcedure", ["upd_custinfo", ["vid", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["ID"])), "AsInteger")), "vidcust", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["IDCust"])), "AsInteger")), "vsoname", (await $.mv((await $.v(C, "Edit3")), "Text")), "vname", (await $.mv((await $.v(C, "Edit1")), "Text")), "vlastname", (await $.mv((await $.v(C, "Edit2")), "Text")), "vbirthday", (await $.mv((await $.v(C, "Edit4")), "Text")), "vbirthplace", (await $.mv((await $.v(C, "DBLC_CiCntr")), "KeyValue")), "vpasser", (await $.mv((await $.v(C, "Edit16")), "Text")), "vpaspnum", (await $.mv((await $.v(C, "Edit17")), "Text")), "vpaspdate", (await $.mv((await $.v(C, "Edit18")), "Text")), "vpaspplace", (await $.mv((await $.v(C, "Edit19")), "Text")), "vcity", (await $.mv((await $.v(C, "DBLC_CiCity")), "KeyValue")), "vaddress", (await $.mv((await $.v(C, "Edit6")), "Text")), "vworkplace", (await $.mv((await $.v(C, "Edit8")), "Text")), "vphone_w", (await $.mv((await $.v(C, "Edit12")), "Text")), "vphone_h", (await $.mv((await $.v(C, "Edit11")), "Text")), "vphone_m", (await $.mv((await $.v(C, "Edit10")), "Text")), "ve_mail", (await $.mv((await $.v(C, "Edit13")), "Text")), "vurl", (await $.mv((await $.v(C, "Edit14")), "Text")), "vrecomendation", "", "vgaranted", (await $.mv((await $.v(C, "Edit15")), "Text")), "votv_passport", "", "votv_issued", "", "votv_isdate", "", "vnote", (await $.mv((await $.v(C, "Memo1")), "Text")), "vwork", (await $.mv((await $.v(C, "Edit9")), "Text")), "vtest", "", "vfam_status", "", "vsex", $.add((await $.mv((await $.v(C, "CB_SEX")), "ItemIndex")), 1), "vadrs_state", "", "vbirth_state", "", "vfakt_adress", "", "vchild_info", "", "vdoc_type", "", "vpasspin", "", "vcitizenship", (await $.mv((await $.v(C, "DBLC_Citizenship")), "KeyValue")), "vpassexpire", "", "vreg_zip", "", "vdoc_country", "", "vcitizenship2", "", "vcitizenship3", "", "vfakt_country", "", "vfakt_city", "", "vfakt_zip", "", "vwork_place", "", "vwork_post", "", "vwork_adress", "", "vwork_phone", "", "vtph_contact_type", (await $.mv((await $.v(C, "tph_contact_type")), "KeyValue")), "vtph_country", (await $.mv((await $.v(C, "CountryByConctType")), "KeyValue")), "vtph_country_code", (await $.mv((await $.v(C, "DBEdit_CountryCode")), "Text")), "vtph_city", (await $.mv((await $.v(C, "CityByConctType")), "KeyValue")), "vtph_state", (await $.mv((await $.v(C, "tph_state")), "Text")), "vtph_zip", (await $.mv((await $.v(C, "tph_zip")), "Text")), "vtph_country_prefix", (await $.mv((await $.v(C, "tph_country_prefix")), "KeyValue")), "vtph_adress", (await $.mv((await $.v(C, "tph_adress")), "Text")), "vtph_communication_type", (await $.mv((await $.v(C, "tph_communication_type")), "KeyValue")), "vtph_number", (await $.mv((await $.v(C, "tph_number")), "Text")), "vtph_extension", (await $.mv((await $.v(C, "tph_extension")), "Text")), "vcontact_type", (await $.mv((await $.v(C, "Address_type")), "KeyValue")), "vCUINFAML", L0["v_cuinfaml"]]])));
    await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
    try {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "ODSCustImages")), "FieldByName", ["PHOTO"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "ODSCustImages")), "FieldByName", ["CUSTSIGN"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "SaveToFile", [(await $.v(C, "Path"))])));
      await $.stmt((await $.mcall((await $.call(C, "TBlobField", [(await $.mcall((await $.v(C, "ODSCustImages")), "FieldByName", ["STAMP"]))])), "LoadFromFile", [(await $.v(C, "Path"))])));
    } catch ($t21) {
      $.rethrowControl($t21);
      $.handled($t21);
      await $.stmt((await $.call(C, "showmessage", ["Error during BlobOperation"])));
    }
    await $.mcall((await $.v(C, "CustInfoData")), "Refresh", []);
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CustInfoData")), "Cancel", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
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
  U.method("TCustomerInfoForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
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
  U.method("TCustomerInfoForm", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
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
  U.method("TCustomerInfoForm", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bmp": null, "jpg": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDlg")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
      }
    } catch ($t22) {
      $.rethrowControl($t22);
      $.handled($t22);
      await $.stmt((await $.call(C, "showmessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn5Click", async function BitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bmp": null, "jpg": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDlg")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
      }
    } catch ($t23) {
      $.rethrowControl($t23);
      $.handled($t23);
      await $.stmt((await $.call(C, "showmessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "BitBtn6Click", async function BitBtn6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bmp": null, "jpg": null, "exts": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["bmp"] = (await $.mv((await $.v(C, "TBitmap")), "Create"));
  L0["jpg"] = (await $.mv((await $.v(C, "TJpegImage")), "Create"));
  await $.mcall((await $.v(C, "ODSCustImages")), "Edit", []);
  if ($.truthy((await $.mv((await $.v(C, "OpenPictureDlg")), "Execute")))) {
    try {
      L0["exts"] = (await $.call(C, "copy", [(await $.call(C, "AnsiUpperCase", [(await $.call(C, "ExtractFileExt", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))]))])), 2, (await $.v(C, "MaxLongInt"))]));
      if ($.truthy($.eq(L0["exts"], "BMP"))) {
        await $.stmt((await $.mcall(L0["bmp"], "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
        await $.mset(L0["jpg"], "CompressionQuality", 100);
        await $.stmt((await $.mcall(L0["jpg"], "Assign", [L0["bmp"]])));
        await $.stmt((await $.mcall(L0["jpg"], "SaveToFile", [(await $.v(C, "Path"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.mv((await $.v(C, "OpenPictureDlg")), "FileName"))])));
      }
    } catch ($t24) {
      $.rethrowControl($t24);
      $.handled($t24);
      await $.stmt((await $.call(C, "showmessage", ["Error during picture loading"])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "Fill_EditClick", async function Fill_EditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": null};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSCustImages")), "Close", []);
  await $.mcall((await $.v(C, "ODSCustImages")), "Open", []);
  await $.mcall((await $.v(C, "odsPassDeps")), "Close", []);
  await $.mcall((await $.v(C, "odsPassDeps")), "Open", []);
  {
    const $t25 = (await $.mv((await $.v(C, "CO_DataMod")), "ODS_customers_relations"));
    await $.stmt($.wcall([$t25], "Close", [], C));
    await $.stmt((await $.wcall([$t25], "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.mv((await $.wv([$t25], "CO_DataMod", C, false)), "Customers")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    await $.stmt((await $.wcall([$t25], "SetVariable", ["v_custid2", (await $.mv((await $.mcall((await $.wv([$t25], "CustInfoData", C, false)), "FieldByName", ["idcust"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t25], "Open", [], C));
  }
  await $.mset((await $.v(C, "forGoAml")), "Checked", false);
  { const $t26 = (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["CUINFAML"])), "AsInteger"));
    if ($.eq($t26, 1)) {
      await $.mset((await $.v(C, "forGoAml")), "Checked", true);
    }
  }
  await $.mset((await $.v(C, "AccOwner")), "Checked", false);
  { const $t27 = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "ODS_customers_relations")), "FieldByName", ["accowner"])), "AsInteger"));
    if ($.eq($t27, 1)) {
      await $.mset((await $.v(C, "AccOwner")), "Checked", true);
    }
  }
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["name"])), "AsString")));
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["lastname"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["soname"])), "AsString")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["BIRTHDAY"])), "AsString")));
  await $.mset((await $.v(C, "DBLC_CiCntr")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["BIRTHPLACE"])), "AsString")));
  await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Address"])), "AsString")));
  await $.mset((await $.v(C, "DBLC_CiCity")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["City"])), "AsString")));
  await $.mset((await $.v(C, "Edit8")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["WorkPlace"])), "AsString")));
  await $.mset((await $.v(C, "Edit9")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Work"])), "AsString")));
  await $.mset((await $.v(C, "Edit10")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Phone_m"])), "AsString")));
  await $.mset((await $.v(C, "Edit11")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Phone_h"])), "AsString")));
  await $.mset((await $.v(C, "Edit12")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Phone_w"])), "AsString")));
  await $.mset((await $.v(C, "Edit13")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["e_mail"])), "AsString")));
  await $.mset((await $.v(C, "Edit14")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["url"])), "AsString")));
  await $.mset((await $.v(C, "Edit15")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Garanted"])), "AsString")));
  await $.mset((await $.v(C, "Edit16")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PasSer"])), "AsString")));
  await $.mset((await $.v(C, "Edit17")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PaspNum"])), "AsString")));
  await $.mset((await $.v(C, "Edit18")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PaspDate"])), "AsString")));
  await $.mset((await $.v(C, "Edit19")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["PaspPlace"])), "AsString")));
  await $.mset((await $.v(C, "Memo1")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["Note"])), "AsString")));
  await $.mset((await $.v(C, "CB_SEX")), "ItemIndex", $.sub((await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["SEX"])), "AsInteger")), 1));
  await $.mset((await $.v(C, "DBLC_Citizenship")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["citizenship"])), "AsInteger")));
  await $.mset((await $.v(C, "DBLC_WorkPosts")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "ODS_customers_relations")), "FieldByName", ["work_post"])), "AsInteger")));
  await $.mset((await $.v(C, "tph_adress")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_adress"])), "AsString")));
  await $.mset((await $.v(C, "tph_state")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_state"])), "AsString")));
  await $.mset((await $.v(C, "tph_zip")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_zip"])), "AsString")));
  await $.mset((await $.v(C, "tph_number")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_number"])), "AsString")));
  await $.mset((await $.v(C, "tph_extension")), "Text", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_extension"])), "AsString")));
  await $.mset((await $.v(C, "Address_type")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["contact_type"])), "AsString")));
  await $.mset((await $.v(C, "CountryByConctType")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_country"])), "AsString")));
  await $.mset((await $.v(C, "CityByConctType")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_city"])), "AsString")));
  await $.mset((await $.v(C, "tph_contact_type")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_contact_type"])), "AsString")));
  await $.mset((await $.v(C, "tph_communication_type")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_communication_type"])), "AsString")));
  await $.mset((await $.v(C, "tph_country_prefix")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "CustInfoData")), "FieldByName", ["tph_country_prefix"])), "AsString")));
  try {
    await $.mset((await $.v(C, "TDEdit4")), "Date", (await $.call(C, "strtodate", [(await $.mv((await $.v(C, "Edit4")), "Text"))])));
    await $.mset((await $.v(C, "TDEdit18")), "Date", (await $.call(C, "strtodate", [(await $.mv((await $.v(C, "Edit18")), "Text"))])));
  } catch ($t28) {
    $.rethrowControl($t28);
    $.handled($t28);
    await $.mset((await $.v(C, "TDEdit4")), "Date", (await $.v(C, "Date")));
    await $.mset((await $.v(C, "TDEdit18")), "Date", (await $.v(C, "Date")));
  }
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.v(C, "ODSCustImagesPHOTO")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ODSCustImagesPHOTO")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t29) => { L0["f"] = $t29; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t30) => { L0["f"] = $t30; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t31) => { L0["f"] = $t31; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t32) => { L0["f"] = $t32; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.v(C, "ODSCustImagesCUSTSIGN")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ODSCustImagesCUSTSIGN")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t33) => { L0["f"] = $t33; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t34) => { L0["f"] = $t34; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t35) => { L0["f"] = $t35; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t36) => { L0["f"] = $t36; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.v(C, "ODSCustImagesSTAMP")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ODSCustImagesSTAMP")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t37) => { L0["f"] = $t37; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t38) => { L0["f"] = $t38; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t39) => { L0["f"] = $t39; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t40) => { L0["f"] = $t40; })])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Fill_Edit")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TCustomerInfoForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerInfoForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
