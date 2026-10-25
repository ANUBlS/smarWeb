// Generated from UnitCustProps.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitCustProps", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "DBCtrls", "ExtCtrls", "StdCtrls", "Mask", "ComCtrls", "SBCustomer", "Db", "Variants", "DBCtrlsEh", "Buttons", "ToolWin", "Grids", "DBGrids", "CustomersImpl", "CO_CustRelations", "DBGridEh", "XFSCtrls", "DBLookupEh", "CO_datamod_impl", "OracleData", "SBCore", "CustInfoFormImpl", "SBTranslateProc", "sboapiDataModuleImpl", "CO_PhotoLogo", "Unit_id_quality", "Pep_changeUnit", "customers_operation_impl"]);
  const C = [U];
  U.defClass("TFrmCustProps", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "opendateedit": {"name": "OpenDateEdit", "type": "TDateTimePicker"}, "nameedit": {"name": "NameEdit", "type": "TDBEdit"}, "relationcb": {"name": "RelationCB", "type": "TDBLookupComboBox"}, "groupcb": {"name": "GroupCB", "type": "TDBLookupComboBox"}, "estatetypecb": {"name": "EstateTypeCB", "type": "TDBLookupComboBox"}, "organizationtypecb": {"name": "OrganizationTypeCB", "type": "TDBLookupComboBox"}, "actionareacb": {"name": "ActionAreaCB", "type": "TDBLookupComboBox"}, "branchcb": {"name": "BranchCB", "type": "TDBLookupComboBox"}, "clientclosedcb": {"name": "ClientClosedCB", "type": "TCheckBox"}, "clientclosedpanel": {"name": "ClientClosedPanel", "type": "TPanel"}, "closedateedit": {"name": "CloseDateEdit", "type": "TDateTimePicker"}, "isnotresidentcb": {"name": "IsNotResidentCB", "type": "TDBCheckBox"}, "okpocodeedit": {"name": "OKPOCodeEdit", "type": "TDBEdit"}, "tazareacb": {"name": "TazAreaCB", "type": "TDBLookupComboBox"}, "taxidedit": {"name": "TaxIDEdit", "type": "TDBEdit"}, "bankidedit": {"name": "BankIDEdit", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "infoview": {"name": "InfoView", "type": "TAction"}, "ipinfoview": {"name": "IpInfoView", "type": "TAction"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "label47": {"name": "Label47", "type": "TLabel"}, "label48": {"name": "Label48", "type": "TLabel"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "label56": {"name": "Label56", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "label58": {"name": "Label58", "type": "TLabel"}, "label61": {"name": "Label61", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "label67": {"name": "Label67", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "label69": {"name": "Label69", "type": "TLabel"}, "address_type": {"name": "Address_type", "type": "TDBLookupComboBox"}, "countrybyconcttype": {"name": "CountryByConctType", "type": "TDBLookupComboBox"}, "citybyconcttype": {"name": "CityByConctType", "type": "TDBLookupComboBox"}, "tph_contact_type": {"name": "tph_contact_type", "type": "TDBLookupComboBox"}, "tph_communication_type": {"name": "tph_communication_type", "type": "TDBLookupComboBox"}, "tph_country_prefix": {"name": "tph_country_prefix", "type": "TDBLookupComboBox"}, "dbedit_countrycode": {"name": "DBEdit_CountryCode", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "db_tph_number": {"name": "Db_tph_number", "type": "TDBEdit"}, "db_tph_extension": {"name": "Db_tph_extension", "type": "TDBEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "db_tph_state": {"name": "db_tph_state", "type": "TDBEdit"}, "db_tph_zip": {"name": "DB_tph_zip", "type": "TDBEdit"}, "db_tph_adress": {"name": "db_tph_adress", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dblc_incorp_cntr": {"name": "DBLC_INCORP_CNTR", "type": "TDBLookupComboBox"}, "db_incorp_state": {"name": "DB_INCORP_STATE", "type": "TDBEdit"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "dblc_riskcateg": {"name": "DBLC_RiskCateg", "type": "TDBLookupComboBox"}, "dpt_nal": {"name": "Dpt_Nal", "type": "TDBDateTimeEditEh"}, "dtp_ustav": {"name": "Dtp_Ustav", "type": "TDBDateTimeEditEh"}, "label29": {"name": "Label29", "type": "TLabel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "dblc_cust_risk_desc": {"name": "DBLC_cust_risk_desc", "type": "TDBLookupComboBox"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "dbdatetimesamelydate": {"name": "DBDateTimeSamelyDate", "type": "TDBDateTimeEditEh"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "id_quality_dblookupcomboboxeh": {"name": "id_quality_DBLookupComboboxEh", "type": "TDBLookupComboboxEh"}, "buttonmeyar": {"name": "ButtonMeyar", "type": "TXFButton"}, "label32": {"name": "Label32", "type": "TLabel"}, "fcustomerparams": {"name": "FCustomerParams", "type": "TCustomer"}, "fclientclosed": {"name": "FClientClosed", "type": "Boolean"}, "fchanged": {"name": "FChanged", "type": "Boolean"}}, {"customerparams": {"name": "CustomerParams", "read": "FCustomerParams", "write": "SetCustomerParams"}, "clientclosed": {"name": "ClientClosed", "read": "FClientClosed", "write": "SetClientClosed"}});
  U.fieldInit("TFrmCustProps", "fcustomerparams", () => $.rec("tcustomer"));
  U.init(async () => {
    U.var_("FrmCustProps", null, "TFrmCustProps");
  });
  U.method("TFrmCustProps", "New", async function New(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  await $.stmt($.call(C, "Reset", []));
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "Insert", []);
  await $.mset((await $.v(C, "InfoView")), "Visible", false);
  await $.mset((await $.v(C, "ToolButton2")), "Visible", false);
  await $.mset((await $.v(C, "Dtp_Ustav")), "Value", (await $.v(C, "null")));
  await $.mset((await $.v(C, "Dpt_Nal")), "Value", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBDateTimeSamelyDate")), "Value", (await $.v(C, "null")));
  await $.mset((await $.v(C, "id_quality_DBLookupComboboxEh")), "Enabled", true);
  await $.mset((await $.mv((await $.v(C, "FrmCustProps")), "id_quality_DBLookupComboboxEh")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Ods_cust_quality")), "Lookup", ["name", "Yüksək", "id"])));
  await $.mset((await $.v(C, "ButtonMeyar")), "Visible", false);
  await $.stmt($.call(C, "ShowModal", []));
  L0["result"] = (await $.v(C, "FChanged"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmCustProps", "Edit", async function Edit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined, "customer": $.rec("tcustomer")};
  await $.fixArgs(L0, ["id"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OracleDataSet1")), "Edit", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "Edit", []);
  await $.stmt((await $.call(C, "Sb_GetCustomer", [L0["id"], $.ref(async () => L0["customer"], async ($t1) => { L0["customer"] = $t1; })])));
  await $.set(C, "CustomerParams", L0["customer"]);
  await $.mset((await $.v(C, "InfoView")), "Visible", true);
  if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["dat_ustav"])), "IsNull"))))) {
    await $.mset((await $.v(C, "Dtp_Ustav")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["dat_ustav"])), "AsVariant")));
  } else {
    await $.mset((await $.v(C, "Dtp_Ustav")), "Value", (await $.v(C, "null")));
  }
  if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["dat_nal"])), "IsNull"))))) {
    await $.mset((await $.v(C, "Dpt_Nal")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["dat_nal"])), "AsVariant")));
  } else {
    await $.mset((await $.v(C, "Dpt_Nal")), "Value", (await $.v(C, "null")));
  }
  if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["samelydate"])), "IsNull"))))) {
    await $.mset((await $.v(C, "DBDateTimeSamelyDate")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["samelydate"])), "AsVariant")));
  } else {
    await $.mset((await $.v(C, "DBDateTimeSamelyDate")), "Value", (await $.v(C, "null")));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "RecordCount")), 0))) {
    await $.mset((await $.v(C, "ButtonMeyar")), "Visible", true);
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "id_quality_DBLookupComboboxEh")), "Text")), ""))) {
    await $.mset((await $.v(C, "id_quality_DBLookupComboboxEh")), "Enabled", false);
  }
  await $.mset((await $.v(C, "ToolButton2")), "Visible", true);
  await $.mset((await $.v(C, "ToolButton2")), "Enabled", true);
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": ["ID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFrmCustProps", "Reset", async function Reset(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "currentday": 0};
  await $.set(C, "FChanged", false);
  L0["currentday"] = (await $.call(C, "Sb_GetSystemDate", []));
  await $.mset((await $.v(C, "OpenDateEdit")), "DateTime", L0["currentday"]);
  await $.mset((await $.v(C, "CloseDateEdit")), "DateTime", L0["currentday"]);
  await $.set(C, "ClientClosed", false);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmCustProps", "SetCustomerParams", async function SetCustomerParams(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"customer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["customer"]);
  await $.set(C, "FCustomerParams", L0["customer"]);
  {
    const $t2 = (await $.v(C, "CustomerParams"));
    await $.mset((await $.wv([$t2], "OpenDateEdit", C, false)), "DateTime", (await $.wv([$t2], "OpenDate", C, false)));
    await $.mset((await $.wv([$t2], "CloseDateEdit", C, false)), "DateTime", (await $.wv([$t2], "CloseDate", C, false)));
    await $.wset([$t2], "ClientClosed", $.ne((await $.wv([$t2], "CloseDate", C, false)), (await $.wv([$t2], "NullDate", C, false))), C);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t2], "CO_DataMod", C, false)), "Relation")), "DataSet")), "Locate", ["ID", (await $.wv([$t2], "RelationID", C, false)), []])));
  }
  return L0.result;
}, {"params": ["Customer"], "kind": "procedure", "ptypes": ["TCustomer"]});
  U.method("TFrmCustProps", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FrmLoqo"))]))))) {
    await $.set(C, "FrmLoqo", (await $.mcall((await $.v(C, "TFrmLoqo")), "Create", [Self])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ToolButton1")), "Down")), true))) {
    await $.mcall((await $.v(C, "FrmLoqo")), "Show", []);
  } else {
    await $.mcall((await $.v(C, "FrmLoqo")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCustProps", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "custids": '', "i": 0, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FormCustRelations"))]))))) {
    await $.set(C, "FormCustRelations", (await $.mcall((await $.v(C, "TFormCustRelations")), "Create", [Self])));
  }
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "SetVariable", ["v_custid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "First", []);
  L0["custids"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "FieldByName", ["CUSTID2"])), "AsString"));
  { const $t3 = $.sub((await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "RecordCount")), 1);
    L0["i"] = 1;
    let $t4 = true;
    for (;;) {
      if (!$t4) { L0["i"] = $.succ(L0["i"], 1); }
      $t4 = false;
      if (!($.ord(L0["i"]) <= $.ord($t3))) break;
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "Next", []);
      L0["custids"] = $.add($.add(L0["custids"], ","), (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Customers_relations")), "FieldByName", ["CUSTID2"])), "AsString")));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "FormCustRelations")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("ShowRedMessage", async function ShowRedMessage(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"atext": $.copyArg(p0), result: false, "f": null, "l": null, "btnyes": null, "btnno": null};
  await $.fixArgs(L0, ["atext"]);
  L0["f"] = (await $.mcall((await $.v(C, "TForm")), "Create", [null]));
  try {
    await $.mset(L0["f"], "Caption", "Diqqət!");
    await $.mset(L0["f"], "Width", 600);
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
  U.method("TFrmCustProps", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "black": '', "ins": 0, "ins1": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "label27")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "NameEdit")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adını daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin qısa adını daxil edin!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label21")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin dövlət qeydiyyat nömrəsini daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label29")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLC_RiskCateg")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin risk kateqoriyasını daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label26")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "TaxIDEdit")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin vöen-nin daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label23")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Dpt_Nal")), "Value")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin DVM-də qeydə alındığı tarixi daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label22")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Dtp_Ustav")), "Value")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin Nizamnaməsi qeydə alındığı tarixi daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label31")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBDateTimeSamelyDate")), "Value")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin Eyniləşdirmə tarixini daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label24")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLC_INCORP_CNTR")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hüquqi şəxsin mənsub olduğu ölkəni daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label61")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Address_type")), "KeyValue")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin əlaqə növün daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label65")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "CountryByConctType")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin əlaqə növünə görə ölkəni daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label66")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "CityByConctType")), "KeyValue")), (await $.v(C, "null"))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin əlaqə növünə görə şəhəri daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label25")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "db_tph_adress")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin əlaqə növünə görə adresin daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label67")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "tph_contact_type")), "KeyValue")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin Əlaqə növünə görə telefon nömrəsinin tipin daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label68")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "tph_communication_type")), "KeyValue")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin Rabitə növünə görə telefon nömrəsinin tipin daxil edin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "label69")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Db_tph_number")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin əlaqə növünə görə telefon nömrəsini daxil edin!"])));
      return L0.result;
    }
  }
  {
    const $t5 = (await $.mv((await $.v(C, "CO_DataMod")), "Customers"));
    await $.wset([$t5], "FChanged", (await $.wv([$t5], "True", C, false)), C);
    await $.mset((await $.wcall([$t5], "FieldByName", ["ID"], C)), "Required", (await $.wv([$t5], "False", C, false)));
    await $.mset((await $.wcall([$t5], "FieldByName", ["OPEN_DAT"], C)), "AsDateTime", (await $.mv((await $.wv([$t5], "OpenDateEdit", C, false)), "DateTime")));
    await $.mset((await $.wcall([$t5], "FieldByName", ["Dat_Nal"], C)), "AsVariant", (await $.mv((await $.wv([$t5], "Dpt_Nal", C, false)), "Value")));
    await $.mset((await $.wcall([$t5], "FieldByName", ["Dat_Ustav"], C)), "AsVariant", (await $.mv((await $.wv([$t5], "Dtp_Ustav", C, false)), "Value")));
    await $.mset((await $.wcall([$t5], "FieldByName", ["SamelyDate"], C)), "AsVariant", (await $.mv((await $.wv([$t5], "DBDateTimeSamelyDate", C, false)), "Value")));
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.wv([$t5], "NameEdit", C, false)), "Text")), "")), async () => ($.ne((await $.wv([$t5], "pep_chek", C, false)), (-(1)))))))) {
      await $.wset([$t5], "Pep_change", (await $.mcall((await $.wv([$t5], "TPep_change", C, false)), "Create", [null])), C);
      await $.mset((await $.wv([$t5], "Pep_change", C, false)), "Position", (await $.wv([$t5], "poMainFormCenter", C, false)));
      await $.mcall((await $.wv([$t5], "Pep_change", C, false)), "ShowModal", []);
      return L0.result;
    }
    await $.wset([$t5], "black", (await $.mcall((await $.mv((await $.wv([$t5], "CO_DataMod", C, false)), "PG_PCustService")), "CallStringFunction", ["GET_WORLD_YOXLAMA", [(await $.wcall([$t5], "trim", [(await $.mv((await $.wv([$t5], "NameEdit", C, false)), "Text"))], C)), (await $.wv([$t5], "null", C, false))]])), { get: async () => L0["black"], set: async (v) => { L0["black"] = v; }, local: true });
    if ($.truthy(($.ne((await $.wv([$t5], "black", { get: async () => L0["black"], set: async (v) => { L0["black"] = v; }, local: true }, false)), "")))) {
      if ($.truthy((await $.wcall([$t5], "ShowRedMessage", ["DIQQƏT! Bu müştəri qara siyahıdadır! Risk şöbəsinə müraciət edin!"], C)))) {
        await $.stmt((await $.wcall([$t5], "ShowMessage", ["Davam edilir..."], C)));
        await $.wset([$t5], "ins1", 1, { get: async () => L0["ins1"], set: async (v) => { L0["ins1"] = v; }, local: true });
      } else {
        await $.stmt((await $.wcall([$t5], "ShowMessage", ["Əməliyyat dayandırıldı."], C)));
        await $.wset([$t5], "ins1", (-(1)), { get: async () => L0["ins1"], set: async (v) => { L0["ins1"] = v; }, local: true });
        return L0.result;
      }
    }
    if ($.truthy(($.gt((await $.mv((await $.mv((await $.mv((await $.wv([$t5], "Pep_change", C, false)), "Memo1")), "Lines")), "Count")), 2)))) {
      if ($.truthy((await $.wcall([$t5], "ShowRedMessage", ["DIQQƏT! Bu müştəri siyasi nufuzlu şəxslər siyahısındadı! Risk şöbəsinə müraciət edin!"], C)))) {
        await $.stmt((await $.wcall([$t5], "ShowMessage", ["Davam edilir..."], C)));
        await $.wset([$t5], "ins", 1, { get: async () => L0["ins"], set: async (v) => { L0["ins"] = v; }, local: true });
      } else {
        await $.stmt((await $.wcall([$t5], "ShowMessage", ["Əməliyyat dayandırıldı."], C)));
        await $.wset([$t5], "ins", (-(1)), { get: async () => L0["ins"], set: async (v) => { L0["ins"] = v; }, local: true });
        return L0.result;
      }
    }
    await $.stmt($.wcall([$t5], "Post", [], C));
    await $.stmt((await $.wcall([$t5], "ApplyUpdates", [[(await $.wv([$t5], "aaInsert", C, false)), (await $.wv([$t5], "aaUpdate", C, false))]], C)));
    await $.stmt($.wcall([$t5], "CommitUpdates", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCustProps", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCustProps", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmCustProps", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "CO_DataMod")), "Customers"));
    if ($.truthy($.eq((await $.wv([$t6], "State", C, false)), (await $.wv([$t6], "dsInsert", C, false))))) {
      await $.stmt($.wcall([$t6], "Cancel", [], C));
      await $.stmt($.wcall([$t6], "CancelUpdates", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmCustProps", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "j": 0, "aa": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "CO_DataMod"));
    await $.mcall((await $.wv([$t7], "Customers", C, false)), "Open", []);
    await $.mcall((await $.wv([$t7], "RelationData", C, false)), "Open", []);
    await $.mcall((await $.wv([$t7], "ClientGroupData", C, false)), "Open", []);
    await $.mcall((await $.wv([$t7], "EstateTypeData", C, false)), "Open", []);
    await $.mcall((await $.wv([$t7], "OrganizationTypeData", C, false)), "Open", []);
    await $.mcall((await $.wv([$t7], "ActionAreaData", C, false)), "Open", []);
    await $.mcall((await $.wv([$t7], "BranchData", C, false)), "Open", []);
    await $.mcall((await $.wv([$t7], "TaxAreaData", C, false)), "Open", []);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "open_dat"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label28")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label28")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "name"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label27")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label27")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "risk_categ"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label29")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label29")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "samelydate"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label31")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label31")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "inn"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label26")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label26")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "dat_ustav"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label22")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label22")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "incorporation_cntr"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label24")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label24")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "address_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label61")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label61")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "city"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label66")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label66")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "address"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label25")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label25")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "tph_contact_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label67")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label67")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "tph_communication_type"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label68")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label68")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "tph_number"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label69")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label69")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "incorporation_number"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label21")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label21")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "dat_nal"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label23")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label23")), "Visible", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallIntegerFunction", ["get_Messaj", ["customers", "country_code"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "Label65")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Label65")), "Visible", true);
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCustProps", "SetClientClosed", async function SetClientClosed(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FClientClosed", L0["value"]);
  await $.mset((await $.v(C, "CloseDateEdit")), "Enabled", L0["value"]);
  await $.mset((await $.v(C, "ClientClosedCB")), "Checked", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TFrmCustProps", "ButtonMeyarClick", async function ButtonMeyarClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "cust_quality": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Formid_quality", (await $.mcall((await $.v(C, "TFormid_quality")), "create", [Self])));
  {
    const $t8 = (await $.v(C, "CO_DataMod"));
    await $.mcall((await $.wv([$t8], "Ods_cust_id_quality1", C, false)), "close", []);
    await $.mcall((await $.wv([$t8], "Ods_custid_quality", C, false)), "close", []);
    await $.stmt((await $.mcall((await $.wv([$t8], "Ods_custid_quality", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t8], "Customers", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.stmt((await $.mcall((await $.wv([$t8], "Ods_cust_id_quality1", C, false)), "SetVariable", ["custid", (await $.mv((await $.mcall((await $.wv([$t8], "Customers", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t8], "Ods_custid_quality", C, false)), "open", []);
    await $.mcall((await $.wv([$t8], "Ods_cust_id_quality1", C, false)), "open", []);
  }
  await $.mcall((await $.v(C, "Formid_quality")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCustProps", "ClientClosedCBClick", async function ClientClosedCBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ClientClosed", (await $.mv((L0["sender"]), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCustProps", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "SelectNext", [(await $.v(C, "ActiveControl")), true, true])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCustProps", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmCustProps", "Dpt_Nal1Change", async function Dpt_Nal1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "CO_DataMod"));
    const $t10 = (await $.wv([$t9], "Customers", C, false));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", [$.add("dat", ((await $.wcall([$t9, $t10], "copy", [(await $.mv(((await $.wv([$t9, $t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "name")), 4, 10], C))))], C)), "Value", (await $.mv(((await $.wv([$t9, $t10], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "DateTime")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
