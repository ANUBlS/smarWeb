// Generated from DashinmazImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DashinmazImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEh", "DBCtrlsEh", "StdCtrls", "ExtCtrls", "Mask", "DBLookupEh", "Buttons", "DBCtrls", "HintBox", "jpeg", "DB", "OracleData", "CheckLst", "CMDBSearchEdit", "ComCtrls", "DataMGuarantee", "sboapiDataModuleImpl", "FormGuarpldginfolmpl", "GuaranteeMgrImpl", "SBTranslateProc", "FormGuarAddlmpl", "Unitcust", "OpenAccountImpl"]);
  const C = [U];
  U.defClass("TFrmDashinmaz", "TForm", {"panel9": {"name": "Panel9", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "label155": {"name": "Label155", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "speedbutton11": {"name": "SpeedButton11", "type": "TSpeedButton"}, "speedbutton12": {"name": "SpeedButton12", "type": "TSpeedButton"}, "label29": {"name": "Label29", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "speedbutton13": {"name": "SpeedButton13", "type": "TSpeedButton"}, "speedbutton14": {"name": "SpeedButton14", "type": "TSpeedButton"}, "label35": {"name": "Label35", "type": "TLabel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "speedbutton15": {"name": "SpeedButton15", "type": "TSpeedButton"}, "speedbutton16": {"name": "SpeedButton16", "type": "TSpeedButton"}, "label157": {"name": "Label157", "type": "TLabel"}, "label154": {"name": "Label154", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "inuse_rg": {"name": "InUse_rg", "type": "TRadioGroup"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbnumberediteh2": {"name": "DBNumberEditEh2", "type": "TDBNumberEditEh"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbnumberediteh3": {"name": "DBNumberEditEh3", "type": "TDBNumberEditEh"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbnumberediteh4": {"name": "DBNumberEditEh4", "type": "TDBNumberEditEh"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbnumberediteh6": {"name": "DBNumberEditEh6", "type": "TDBNumberEditEh"}, "label10": {"name": "Label10", "type": "TLabel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "label17": {"name": "Label17", "type": "TLabel"}, "spcompany": {"name": "spcompany", "type": "TSpeedButton"}, "dbedit8": {"name": "DBEdit8", "type": "TDBLookupComboboxEh"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "speedbutton33": {"name": "SpeedButton33", "type": "TSpeedButton"}, "speedbutton34": {"name": "SpeedButton34", "type": "TSpeedButton"}, "label22": {"name": "Label22", "type": "TLabel"}, "dbediteh12": {"name": "DBEditEh12", "type": "TDBEditEh"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "speedbutton35": {"name": "SpeedButton35", "type": "TSpeedButton"}, "speedbutton36": {"name": "SpeedButton36", "type": "TSpeedButton"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbdatetimeediteh4": {"name": "DBDateTimeEditEh4", "type": "TDBDateTimeEditEh"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbnumberediteh8": {"name": "DBNumberEditEh8", "type": "TDBNumberEditEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbnumberediteh9": {"name": "DBNumberEditEh9", "type": "TDBNumberEditEh"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label116": {"name": "Label116", "type": "TLabel"}, "label152": {"name": "Label152", "type": "TLabel"}, "label117": {"name": "Label117", "type": "TLabel"}, "label118": {"name": "Label118", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "dbdatetimeediteh5": {"name": "DBDateTimeEditEh5", "type": "TDBDateTimeEditEh"}, "dblookupcomboboxeh26": {"name": "DBLookupComboboxEh26", "type": "TDBLookupComboboxEh"}, "image1": {"name": "Image1", "type": "TImage"}, "hintbox1": {"name": "HintBox1", "type": "THintBox"}, "speedbutton38": {"name": "SpeedButton38", "type": "TSpeedButton"}, "speedbutton39": {"name": "SpeedButton39", "type": "TSpeedButton"}, "companysrc": {"name": "CompanySrc", "type": "TDataSource"}, "companyset": {"name": "CompanySet", "type": "TOracleDataSet"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "checklistbox1": {"name": "CheckListBox1", "type": "TCheckListBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "label19": {"name": "Label19", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "ods_phys": {"name": "ods_phys", "type": "TOracleDataSet"}, "ods_mkt": {"name": "ods_mkt", "type": "TOracleDataSet"}, "ods_physful_name": {"name": "ods_physFUL_NAME", "type": "TWideStringField"}, "ods_physpasport": {"name": "ods_physPASPORT", "type": "TWideStringField"}, "ods_physpinko": {"name": "ods_physPINKO", "type": "TWideStringField"}, "ods_mktid": {"name": "ods_mktID", "type": "TIntegerField"}, "ods_mktname": {"name": "ods_mktNAME", "type": "TWideStringField"}, "ods_mktinn": {"name": "ods_mktINN", "type": "TWideStringField"}, "ods_physidcust": {"name": "ods_physIDCUST", "type": "TFloatField"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "label26": {"name": "Label26", "type": "TLabel"}, "dbnumberediteh10": {"name": "DBNumberEditEh10", "type": "TDBNumberEditEh"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "ods_mutex": {"name": "ods_mutex", "type": "TOracleDataSet"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "widestringfield2": {"name": "WideStringField2", "type": "TWideStringField"}, "widestringfield3": {"name": "WideStringField3", "type": "TWideStringField"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label27": {"name": "Label27", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "label32": {"name": "Label32", "type": "TLabel"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "ods_borc": {"name": "ODS_borc", "type": "TOracleDataSet"}, "ods_borcidcust": {"name": "ODS_borcIDCUST", "type": "TFloatField"}, "ods_borcful_name": {"name": "ODS_borcFUL_NAME", "type": "TWideStringField"}, "ods_borcpasport": {"name": "ODS_borcPASPORT", "type": "TWideStringField"}, "ods_borcpinko": {"name": "ODS_borcPINKO", "type": "TWideStringField"}, "label34": {"name": "Label34", "type": "TLabel"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "companysetid": {"name": "CompanySetID", "type": "TFloatField"}, "companysetname": {"name": "CompanySetNAME", "type": "TWideStringField"}, "companysetaddres": {"name": "CompanySetADDRES", "type": "TWideStringField"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "label30": {"name": "Label30", "type": "TLabel"}, "dbnumberediteh7": {"name": "DBNumberEditEh7", "type": "TDBNumberEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "ods_borc2": {"name": "ODS_borc2", "type": "TOracleDataSet"}, "button2": {"name": "Button2", "type": "TButton"}, "ods_borc2idcust": {"name": "ODS_borc2IDCUST", "type": "TFloatField"}, "ods_borc2ful_name": {"name": "ODS_borc2FUL_NAME", "type": "TWideStringField"}, "ods_borc2pasport": {"name": "ODS_borc2PASPORT", "type": "TWideStringField"}, "ods_borc2pinko": {"name": "ODS_borc2PINKO", "type": "TWideStringField"}, "dbnumberediteh11": {"name": "DBNumberEditEh11", "type": "TDBNumberEditEh"}}, {});
  U.init(async () => {
    U.var_("FrmDashinmaz", null, "TFrmDashinmaz");
  });
  U.method("TFrmDashinmaz", "CheckListBox1ClickCheck", async function CheckListBox1ClickCheck(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t1 = (await $.mv((await $.v(C, "CheckListBox1")), "ItemIndex"));
    if ($.eq($t1, 0)) {
      { const $t2 = await $.iset((await $.mv((await $.v(C, "CheckListBox1")), "Checked")), [1], false); if ($t2 !== undefined) { await $.mset((await $.v(C, "CheckListBox1")), "Checked", $t2); } }
      if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "Checked")), [0])), true))) {
        await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "FormCusNom", ""])));
      }
      {
        const $t3 = (await $.v(C, "ods_phys"));
        await $.stmt($.wcall([$t3], "close", [], C));
        await $.stmt((await $.wcall([$t3], "SetVariable", ["v_id", (await $.wv([$t3], "nomid", C, false))], C)));
        await $.stmt($.wcall([$t3], "open", [], C));
        await $.mset((await $.wv([$t3], "edit4", C, false)), "Text", (await $.wcall([$t3], "IntToStr", [(await $.wv([$t3], "nomid", C, false))], C)));
        await $.mset((await $.wv([$t3], "edit5", C, false)), "Text", (await $.mv((await $.wv([$t3], "ods_physFUL_NAME", C, false)), "AsString")));
        await $.mset((await $.wv([$t3], "edit6", C, false)), "Text", (await $.mv((await $.wv([$t3], "ods_physPINKO", C, false)), "AsString")));
        await $.wset([$t3], "sex_satici", (await $.wv([$t3], "nomid", C, false)), C);
        await $.wset([$t3], "mkt_id", 1, C);
      }
    }
    else if ($.eq($t1, 1)) {
      { const $t4 = await $.iset((await $.mv((await $.v(C, "CheckListBox1")), "Checked")), [0], false); if ($t4 !== undefined) { await $.mset((await $.v(C, "CheckListBox1")), "Checked", $t4); } }
      if ($.truthy($.eq((await $.idx((await $.mv((await $.v(C, "CheckListBox1")), "Checked")), [1])), true))) {
        await $.set(C, "mkt_id", 2);
        await $.set(C, "FormCUT", (await $.mcall((await $.v(C, "TFormCUT")), "Create", [Self])));
        await $.mcall((await $.v(C, "FormCUT")), "ShowModal", []);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDashinmaz", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    {
      const $t5 = (await $.v(C, "ods_mutex"));
      await $.stmt($.wcall([$t5], "close", [], C));
      await $.stmt((await $.wcall([$t5], "SetVariable", ["v_id", (await $.mv((await $.wv([$t5], "DBEdit1", C, false)), "Text"))], C)));
      await $.stmt($.wcall([$t5], "open", [], C));
    }
  }
  await $.mset((await $.v(C, "DBEditEh12")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_mutex")), "FieldByName", ["ful_name"])), "AsString")));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmDashinmaz", "DBEdit8CloseUp", async function DBEdit8CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.mset((await $.v(C, "DBEditEh5")), "Text", (await $.mv((await $.mcall((await $.v(C, "CompanySet")), "FieldByName", ["addres"])), "AsString")));
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFrmDashinmaz", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmDashinmaz", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "edit8")), "Clear", []);
  { const $t6 = await $.iset((await $.mv((await $.v(C, "CheckListBox1")), "Checked")), [0], false); if ($t6 !== undefined) { await $.mset((await $.v(C, "CheckListBox1")), "Checked", $t6); } }
  { const $t7 = await $.iset((await $.mv((await $.v(C, "CheckListBox1")), "Checked")), [1], false); if ($t7 !== undefined) { await $.mset((await $.v(C, "CheckListBox1")), "Checked", $t7); } }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmDashinmaz", "LoadPlugin2", async function LoadPlugin2(Self, p0, p1, p2) {
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
  U.method("TFrmDashinmaz", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDashinmaz", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmDashinmaz", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "form_edit_ins")), true))) {
    {
      const $t8 = (await $.v(C, "ODS_borc"));
      await $.stmt($.wcall([$t8], "close", [], C));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["v_id", (await $.mv((await $.mv((await $.wv([$t8], "DataMGuarante", C, false)), "DataSetGuaranteeBIRGE_BORCID")), "AsInteger"))], C)));
      await $.stmt($.wcall([$t8], "open", [], C));
      {
        const $t9 = (await $.wv([$t8], "ODS_borc2", C, false));
        await $.stmt($.wcall([$t8, $t9], "close", [], C));
        await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["v_id", (await $.mv((await $.mv((await $.wv([$t8, $t9], "DataMGuarante", C, false)), "DataSetGuaranteeBIRGE_BORCID2")), "AsInteger"))], C)));
        await $.stmt($.wcall([$t8, $t9], "open", [], C));
        await $.mset((await $.wv([$t8, $t9], "edit7", C, false)), "Text", (await $.mv((await $.wv([$t8, $t9], "ODS_borc2FUL_NAME", C, false)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "edit8", C, false)), "Text", (await $.mv((await $.wv([$t8, $t9], "ODS_borcFUL_NAME", C, false)), "AsString")));
        await $.wset([$t8, $t9], "birg_borcid2", (await $.mv((await $.mv((await $.wv([$t8, $t9], "DataMGuarante", C, false)), "DataSetGuaranteeBIRGE_BORCID2")), "AsInteger")), C);
        await $.wset([$t8, $t9], "birg_borcid", (await $.mv((await $.mv((await $.wv([$t8, $t9], "DataMGuarante", C, false)), "DataSetGuaranteeBIRGE_BORCID")), "AsInteger")), C);
        await $.wset([$t8, $t9], "mkt_id", (await $.mv((await $.mv((await $.wv([$t8, $t9], "DataMGuarante", C, false)), "DataSetGuaranteeMKT")), "AsInteger")), C);
        await $.wset([$t8, $t9], "satici_id", (await $.mv((await $.mv((await $.wv([$t8, $t9], "DataMGuarante", C, false)), "DataSetGuaranteeSATICI")), "AsInteger")), C);
        await $.wset([$t8, $t9], "sex_satici", (await $.mv((await $.mv((await $.wv([$t8, $t9], "DataMGuarante", C, false)), "DataSetGuaranteeSEX_SATICI")), "AsInteger")), C);
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDashinmaz", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "FormCusNom", ""])));
  {
    const $t10 = (await $.v(C, "ods_borc"));
    await $.stmt($.wcall([$t10], "close", [], C));
    await $.stmt((await $.wcall([$t10], "SetVariable", ["v_id", (await $.wv([$t10], "nomid", C, false))], C)));
    await $.stmt($.wcall([$t10], "open", [], C));
    await $.wset([$t10], "birg_borcid", (await $.wv([$t10], "nomid", C, false)), C);
  }
  await $.mset((await $.v(C, "edit8")), "Text", (await $.mv((await $.v(C, "ODS_borcFUL_NAME")), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDashinmaz", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin2", ["Sb_General.bpl", "FormCusNom", ""])));
  {
    const $t11 = (await $.v(C, "ods_borc2"));
    await $.stmt($.wcall([$t11], "close", [], C));
    await $.stmt((await $.wcall([$t11], "SetVariable", ["v_id", (await $.wv([$t11], "nomid", C, false))], C)));
    await $.stmt($.wcall([$t11], "open", [], C));
    await $.wset([$t11], "birg_borcid2", (await $.wv([$t11], "nomid", C, false)), C);
  }
  await $.mset((await $.v(C, "edit7")), "Text", (await $.mv((await $.v(C, "ODS_borc2FUL_NAME")), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDashinmaz", "CheckFields", async function CheckFields(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rs_checkfields"] = "\"%s\" - sahəsi boşdur!";
  L0["showmsg"] = $.fn(async function ShowMsg(p0) {
  const L1 = {"message": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["message"]);
  await $.stmt((await $.mcall((await $.v(C, "HintBox1")), "ShowMessage", [L1["message"]])));
  $.abort();
  return L1.result;
});
  L0["checkfieldbyname"] = $.fn(async function CheckFieldByName(p0) {
  const L1 = {"fieldname": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["fieldname"]);
  if ($.truthy((await $.mv(L1["fieldname"], "IsNull")))) {
    await $.stmt((await $.callv(L0["showmsg"], [(await $.call(C, "Format", [L0["rs_checkfields"], [(await $.mv(L1["fieldname"], "DisplayName"))]]))])));
  }
  return L1.result;
});
  L0["checkfieldbynames"] = $.fn(async function CheckFieldByNames() {
  const L1 = {result: undefined};
  {
    const $t12 = (await $.v(C, "DataMGuarante"));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["checkfieldbynames"], []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmDashinmaz", "SaveChg", async function SaveChg(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckListBox1")), "ItemIndex")), 0))) {
    await $.set(C, "satici_id", (-(1)));
  }
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgeid")), "asinteger")), 1))) {
    await $.stmt($.call(C, "CheckFields", []));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "Guarante")), "CallProcedure", ["Guarantee_Add2", [(await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_did")), "asinteger")), 0, (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgeid")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgename")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dholdername")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dholderaddress")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_danyinfotodisting")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dregistryno")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dregistryagency")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dregistrydate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgeinuse")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgeinsurant")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dinsuranceagency")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dinsuranceamount")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dinsurancedate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgepricetorpaqha")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgepriceevkv")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dinsuranceright")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dinsuranceid")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgeid_p")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dgqname")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dgqpaspnum")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dgqpaspyer")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dgqpaspdate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dgqadress")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dreyster")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dseryamh")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dgqtel")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgeprice")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dpledgsorts")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dcompany")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dcompanydat")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dcompanyexpert")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dCARDID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dOUTCOLLATERALACCID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dDECASTATUS")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dGQTELMOB")), "Asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dGQTELHOME")), "Asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dGQTELWORK")), "Asstring")), "", (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dREZERVEAMMOUNT")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dFAIZ")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dGQCITY")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dGQVILLAGE")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dAFTOBANNO")), "Asstring")), 2, (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dGENERALAREA")), "AsFloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dLIVINGAREA")), "AsFloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dSOILAREA")), "AsFloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dADRESS")), "AsString")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dMENZIL_NO")), "AsString")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dOTAQ_SAY")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dBINA_MERTEBE")), "AsInteger")), (await $.v(C, "mkt_id")), (await $.v(C, "satici_id")), (await $.v(C, "sex_satici")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dMUQ_FERIQLENDIRMEK")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dMULKIYET_NOV")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dAYLIQ_ODESNIS")), "AsFloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dCUSTID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dILK_ODESNIS")), "AsFloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dSEHER")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dALQ_SAT_TARIX")), "AsDateTime")), (await $.v(C, "birg_borcid")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dcompayny_ammount")), "AsFloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dGI_QIMETL_UNVAN")), "AsString")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dCRED_QAYTAR_TARIX")), "AsDateTime")), (await $.v(C, "birg_borcid2"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmDashinmaz", "SpeedButton38Click", async function SpeedButton38Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "str_field": '', "cnt": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataMGuarante")), "MainDset_dPLEDGEINUSE")), "asinteger", (await $.mv((await $.mv((await $.v(C, "FormGuarAdd")), "InUse_rg")), "ItemIndex")));
  L0["cnt"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEditEh8")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Girovun adı,");
  }
  L0["cnt"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Çeşidi,");
  }
  L0["cnt"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBNumberEditEh5")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Girovun bazar dəyəri,");
  }
  L0["str_field"] = $.add(L0["str_field"], " Seçilməyib! ");
  if ($.truthy($.eq(L0["cnt"], 0))) {
    await $.mcall((await $.v(C, "DBEdit13")), "SetFocus", []);
    await $.stmt($.call(C, "SaveChg", []));
    await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee")), "refresh", []);
  } else {
    await $.stmt((await $.mcall((await $.v(C, "HintBox1")), "ShowMessage", [$.add($.add("Verilənlər  ", "\r "), L0["str_field"])])));
    return L0.result;
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDashinmaz", "SpeedButton39Click", async function SpeedButton39Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
