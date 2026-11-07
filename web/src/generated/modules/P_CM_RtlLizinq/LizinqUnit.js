// Generated from LizinqUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("LizinqUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DB", "OracleData", "Oracle", "DBGridEh", "DBLookupEh", "sboapiDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TFormLizing", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "edit10": {"name": "Edit10", "type": "TEdit"}, "edit11": {"name": "Edit11", "type": "TEdit"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label23": {"name": "Label23", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "edit13": {"name": "Edit13", "type": "TEdit"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "label28": {"name": "Label28", "type": "TLabel"}, "edit19": {"name": "Edit19", "type": "TEdit"}, "edit20": {"name": "Edit20", "type": "TEdit"}, "edit21": {"name": "Edit21", "type": "TEdit"}, "edit22": {"name": "Edit22", "type": "TEdit"}, "edit23": {"name": "Edit23", "type": "TEdit"}, "edit24": {"name": "Edit24", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "ods_main": {"name": "ods_main", "type": "TOracleDataSet"}, "cm_credit": {"name": "cm_credit", "type": "TOraclePackage"}, "ods_maincreditid": {"name": "ods_mainCREDITID", "type": "TFloatField"}, "ods_mainli_obyekt_name_marka": {"name": "ods_mainLI_OBYEKT_NAME_MARKA", "type": "TWideStringField"}, "ods_mainold_number": {"name": "ods_mainOLD_NUMBER", "type": "TWideStringField"}, "ods_mainli_number_new": {"name": "ods_mainLI_NUMBER_NEW", "type": "TWideStringField"}, "ods_mainregistration_certificate_old": {"name": "ods_mainREGISTRATION_CERTIFICATE_OLD", "type": "TWideStringField"}, "ods_mainregistration_certificate_new": {"name": "ods_mainREGISTRATION_CERTIFICATE_NEW", "type": "TWideStringField"}, "ods_mainli_production_dat": {"name": "ods_mainLI_PRODUCTION_DAT", "type": "TDateTimeField"}, "ods_mainli_obyekt_color": {"name": "ods_mainLI_OBYEKT_COLOR", "type": "TWideStringField"}, "ods_mainli_obyekt_type": {"name": "ods_mainLI_OBYEKT_TYPE", "type": "TWideStringField"}, "ods_mainengine_no": {"name": "ods_mainENGINE_NO", "type": "TWideStringField"}, "ods_mainengine_ban": {"name": "ods_mainENGINE_BAN", "type": "TWideStringField"}, "ods_mainli_obyekt_worth": {"name": "ods_mainLI_OBYEKT_WORTH", "type": "TWideStringField"}, "ods_mainli_obyekt_proportion": {"name": "ods_mainLI_OBYEKT_PROPORTION", "type": "TWideStringField"}, "ods_mainli_obyekt_description": {"name": "ods_mainLI_OBYEKT_DESCRIPTION", "type": "TWideStringField"}, "ods_mainguarante_dat": {"name": "ods_mainGUARANTE_DAT", "type": "TDateTimeField"}, "ods_mainseller_name": {"name": "ods_mainSELLER_NAME", "type": "TWideStringField"}, "ods_mainseller_lastname": {"name": "ods_mainSELLER_LASTNAME", "type": "TWideStringField"}, "ods_mainseller_patronymicname": {"name": "ods_mainSELLER_PATRONYMICNAME", "type": "TWideStringField"}, "ods_mainseller_pincod": {"name": "ods_mainSELLER_PINCOD", "type": "TWideStringField"}, "ods_mainseller_passport": {"name": "ods_mainSELLER_PASSPORT", "type": "TWideStringField"}, "ods_mainseller_paspplace": {"name": "ods_mainSELLER_PASPPLACE", "type": "TWideStringField"}, "ods_mainseller_paspdate": {"name": "ods_mainSELLER_PASPDATE", "type": "TDateTimeField"}, "ods_mainseller_addres": {"name": "ods_mainSELLER_ADDRES", "type": "TWideStringField"}, "ods_mainrek_hesab": {"name": "ods_mainREK_HESAB", "type": "TWideStringField"}, "ods_mainrek_bankname": {"name": "ods_mainREK_BANKNAME", "type": "TWideStringField"}, "ods_mainrek_bank_mux": {"name": "ods_mainREK_BANK_MUX", "type": "TWideStringField"}, "ods_mainrek_ban_kod": {"name": "ods_mainREK_BAN_KOD", "type": "TWideStringField"}, "ods_mainrek_bank_siwft": {"name": "ods_mainREK_BANK_SIWFT", "type": "TWideStringField"}, "label29": {"name": "Label29", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1acc_no": {"name": "OracleDataSet1ACC_NO", "type": "TWideStringField"}, "oracledataset1accno": {"name": "OracleDataSet1ACCNO", "type": "TWideStringField"}, "ods_mainacc_id": {"name": "ods_mainACC_ID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("FormLizing", null, "TFormLizing");
    U.var_("creditid", 0, "integer");
    U.var_("edt", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "s2": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["s", "s2"]);
  await $.set(C, "creditid", L0["s2"]);
  await $.mcall((await $.v(C, "FormLizing")), "ShowModal", []);
  return L0.result;
}, {"params": ["s", "s2"], "kind": "procedure", "ptypes": ["String", "integer"]});
  U.method("TFormLizing", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "cm_credit")), "CallProcedure", ["insert_edit", [(await $.v(C, "creditid")), (await $.mv((await $.v(C, "edit1")), "Text")), (await $.mv((await $.v(C, "edit2")), "Text")), (await $.mv((await $.v(C, "edit3")), "Text")), (await $.mv((await $.v(C, "edit11")), "Text")), (await $.mv((await $.v(C, "edit12")), "Text")), (await $.mv((await $.v(C, "DBDateTimeEditEh2")), "Value")), (await $.mv((await $.v(C, "edit8")), "Text")), (await $.mv((await $.v(C, "edit7")), "Text")), (await $.mv((await $.v(C, "edit9")), "Text")), (await $.mv((await $.v(C, "edit6")), "Text")), (await $.mv((await $.v(C, "edit10")), "Text")), (await $.mv((await $.v(C, "edit4")), "Text")), (await $.mv((await $.v(C, "edit5")), "Text")), (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value")), (await $.mv((await $.v(C, "edit13")), "Text")), (await $.mv((await $.v(C, "edit14")), "Text")), (await $.mv((await $.v(C, "edit15")), "Text")), (await $.mv((await $.v(C, "edit16")), "Text")), (await $.mv((await $.v(C, "edit17")), "Text")), (await $.mv((await $.v(C, "edit18")), "Text")), (await $.mv((await $.v(C, "DBDateTimeEditEh3")), "Value")), (await $.mv((await $.v(C, "edit19")), "Text")), (await $.mv((await $.v(C, "edit20")), "Text")), (await $.mv((await $.v(C, "edit22")), "Text")), (await $.mv((await $.v(C, "edit21")), "Text")), (await $.mv((await $.v(C, "edit24")), "Text")), (await $.mv((await $.v(C, "edit23")), "Text")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Value"))]])));
  await $.mcall((await $.v(C, "Button2")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLizing", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormLizing")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormLizing", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit11")), "Clear", []);
  await $.mcall((await $.v(C, "edit12")), "Clear", []);
  await $.mset((await $.v(C, "DBDateTimeEditEh2")), "Value", (-(1)));
  await $.mcall((await $.v(C, "edit8")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "edit9")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.v(C, "edit10")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Value", (-(1)));
  await $.mcall((await $.v(C, "edit13")), "Clear", []);
  await $.mcall((await $.v(C, "edit14")), "Clear", []);
  await $.mcall((await $.v(C, "edit15")), "Clear", []);
  await $.mcall((await $.v(C, "edit16")), "Clear", []);
  await $.mcall((await $.v(C, "edit17")), "Clear", []);
  await $.mcall((await $.v(C, "edit18")), "Clear", []);
  await $.mset((await $.v(C, "DBDateTimeEditEh3")), "Value", (-(1)));
  await $.mcall((await $.v(C, "edit19")), "Clear", []);
  await $.mcall((await $.v(C, "edit20")), "Clear", []);
  await $.mcall((await $.v(C, "edit22")), "Clear", []);
  await $.mcall((await $.v(C, "edit21")), "Clear", []);
  await $.mcall((await $.v(C, "edit24")), "Clear", []);
  await $.mcall((await $.v(C, "edit23")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Value", (-(1)));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormLizing", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "ods_main"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["v_crid", (await $.wv([$t1], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
    if ($.truthy($.gt((await $.wv([$t1], "RecordCount", C, false)), 0))) {
      await $.mset((await $.wv([$t1], "edit1", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainLI_OBYEKT_NAME_MARKA", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit2", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainold_number", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit3", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainLi_number_new", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit11", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainRegistration_certificate_old", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit12", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainRegistration_certificate_old", C, false)), "AsString")));
      if ($.truthy((await $.wcall([$t1], "VarIsNull", [(await $.mv((await $.wv([$t1], "ods_mainLi_production_dat", C, false)), "AsVariant"))], C)))) {
        await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "Value", (-(1)));
      } else {
        await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "Value", (await $.mv((await $.wv([$t1], "ods_mainLi_production_dat", C, false)), "AsVariant")));
      }
      await $.mset((await $.wv([$t1], "edit8", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainli_obyekt_color", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit7", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainli_obyekt_type", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit9", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainEngine_no", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit6", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainEngine_ban", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit10", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainli_obyekt_worth", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit4", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainli_obyekt_proportion", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit5", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainli_obyekt_description", C, false)), "AsString")));
      if ($.truthy((await $.wcall([$t1], "VarIsNull", [(await $.mv((await $.wv([$t1], "ods_mainguarante_dat", C, false)), "AsVariant"))], C)))) {
        await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "Value", (-(1)));
      } else {
        await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "Value", (await $.mv((await $.wv([$t1], "ods_mainguarante_dat", C, false)), "AsVariant")));
      }
      await $.mset((await $.wv([$t1], "edit13", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainSeller_name", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit14", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainSeller_lastname", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit15", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainSeller_patronymicname", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit16", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainSeller_pincod", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit17", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainSeller_passport", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit18", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainSeller_paspplace", C, false)), "AsString")));
      if ($.truthy((await $.wcall([$t1], "VarIsNull", [(await $.mv((await $.wv([$t1], "ods_mainSeller_paspdate", C, false)), "AsVariant"))], C)))) {
        await $.mset((await $.wv([$t1], "DBDateTimeEditEh3", C, false)), "Value", (-(1)));
      } else {
        await $.mset((await $.wv([$t1], "DBDateTimeEditEh3", C, false)), "Value", (await $.mv((await $.wv([$t1], "ods_mainSeller_paspdate", C, false)), "AsVariant")));
      }
      await $.mset((await $.wv([$t1], "edit19", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainSeller_addres", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit20", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainRek_hesab", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit22", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainRek_bankname", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit21", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainRek_bank_mux", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit24", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainRek_ban_kod", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "edit23", C, false)), "Text", (await $.mv((await $.wv([$t1], "ods_mainRek_bank_siwft", C, false)), "AsString")));
      await $.mset((await $.wv([$t1], "DBLookupComboboxEh1", C, false)), "Value", (await $.mv((await $.wv([$t1], "ods_mainACC_ID", C, false)), "AsVariant")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormLizing", (await $.mcall((await $.v(C, "TFormLizing")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
