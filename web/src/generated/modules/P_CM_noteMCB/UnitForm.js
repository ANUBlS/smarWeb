// Generated from UnitForm.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitForm", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEh", "DBGridEhGrouping", "StdCtrls", "GridsEh", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "DB", "OracleData", "Oracle", "Grids", "DBGrids", "sboapiDataModuleImpl", "CommonDecls"]);
  const C = [U];
  U.defClass("TFormNote", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "ods_cel": {"name": "ods_cel", "type": "TOracleDataSet"}, "ods_celid": {"name": "ods_celID", "type": "TFloatField"}, "ods_celname": {"name": "ods_celNAME", "type": "TWideStringField"}, "dsrc_cel": {"name": "dsrc_cel", "type": "TDataSource"}, "ods_sector": {"name": "ods_sector", "type": "TOracleDataSet"}, "ods_sectorid": {"name": "ods_sectorID", "type": "TFloatField"}, "ods_sectorname": {"name": "ods_sectorNAME", "type": "TWideStringField"}, "dsrc_sector": {"name": "dsrc_sector", "type": "TDataSource"}, "ods_maliye": {"name": "ods_maliye", "type": "TOracleDataSet"}, "floatfield1": {"name": "FloatField1", "type": "TFloatField"}, "widestringfield1": {"name": "WideStringField1", "type": "TWideStringField"}, "dsrc_maliye": {"name": "dsrc_maliye", "type": "TDataSource"}, "ods_portstatus": {"name": "ods_portstatus", "type": "TOracleDataSet"}, "floatfield2": {"name": "FloatField2", "type": "TFloatField"}, "widestringfield2": {"name": "WideStringField2", "type": "TWideStringField"}, "ods_not": {"name": "ods_not", "type": "TOracleDataSet"}, "ods_notid": {"name": "ods_notID", "type": "TFloatField"}, "ods_notcreditid": {"name": "ods_notCREDITID", "type": "TFloatField"}, "ods_notpar1": {"name": "ods_notPAR1", "type": "TWideStringField"}, "ods_notpar2": {"name": "ods_notPAR2", "type": "TWideStringField"}, "ods_notpar3": {"name": "ods_notPAR3", "type": "TWideStringField"}, "ods_notpar4": {"name": "ods_notPAR4", "type": "TWideStringField"}, "ods_notpar5": {"name": "ods_notPAR5", "type": "TWideStringField"}, "ods_notpar6": {"name": "ods_notPAR6", "type": "TWideStringField"}, "ods_notpar7": {"name": "ods_notPAR7", "type": "TWideStringField"}, "ods_notpar8": {"name": "ods_notPAR8", "type": "TWideStringField"}, "ods_notpar9": {"name": "ods_notPAR9", "type": "TWideStringField"}, "ods_notpar10": {"name": "ods_notPAR10", "type": "TWideStringField"}, "ods_notpar11": {"name": "ods_notPAR11", "type": "TWideStringField"}, "ods_notpar12": {"name": "ods_notPAR12", "type": "TWideStringField"}, "ods_notpar13": {"name": "ods_notPAR13", "type": "TWideStringField"}, "ods_notpar14": {"name": "ods_notPAR14", "type": "TWideStringField"}, "ods_notpar15": {"name": "ods_notPAR15", "type": "TWideStringField"}, "dsrc_not": {"name": "dsrc_not", "type": "TDataSource"}, "dsrc_portstatus": {"name": "dsrc_portstatus", "type": "TDataSource"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "ods_group": {"name": "ods_group", "type": "TOracleDataSet"}, "dsrc_group": {"name": "dsrc_group", "type": "TDataSource"}, "ods_groupid": {"name": "ods_groupID", "type": "TFloatField"}, "ods_groupname": {"name": "ods_groupNAME", "type": "TWideStringField"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "dsrc_shedule": {"name": "dsrc_shedule", "type": "TDataSource"}, "ods_shedule": {"name": "ods_shedule", "type": "TOracleDataSet"}, "ods_sheduleid": {"name": "ods_sheduleID", "type": "TFloatField"}, "ods_shedulename": {"name": "ods_sheduleNAME", "type": "TWideStringField"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "edit13": {"name": "Edit13", "type": "TEdit"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "ods_notpar16": {"name": "ods_notPAR16", "type": "TWideStringField"}, "ods_notpar17": {"name": "ods_notPAR17", "type": "TWideStringField"}, "ods_notpar18": {"name": "ods_notPAR18", "type": "TWideStringField"}, "ods_notpar19": {"name": "ods_notPAR19", "type": "TWideStringField"}, "ods_notpar20": {"name": "ods_notPAR20", "type": "TWideStringField"}, "ods_notpar21": {"name": "ods_notPAR21", "type": "TWideStringField"}, "ods_notpar22": {"name": "ods_notPAR22", "type": "TWideStringField"}, "ods_notpar23": {"name": "ods_notPAR23", "type": "TDateTimeField"}, "ods_notpar24": {"name": "ods_notPAR24", "type": "TDateTimeField"}, "ods_bussnes": {"name": "ods_bussnes", "type": "TOracleDataSet"}, "dsrc_bussnes": {"name": "dsrc_bussnes", "type": "TDataSource"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "ods_newold": {"name": "ods_newOld", "type": "TOracleDataSet"}, "dsrc_newold": {"name": "dsrc_newOld", "type": "TDataSource"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "ods_hucrat": {"name": "ods_hucrat", "type": "TOracleDataSet"}, "dsrc_hucrat": {"name": "dsrc_hucrat", "type": "TDataSource"}, "ods_notpar25": {"name": "ods_notPAR25", "type": "TWideStringField"}, "label25": {"name": "Label25", "type": "TLabel"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "ods_hucratid": {"name": "ods_hucratID", "type": "TFloatField"}, "ods_hucratname": {"name": "ods_hucratNAME", "type": "TWideStringField"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "edit10": {"name": "edit10", "type": "TEdit"}, "edit11": {"name": "edit11", "type": "TEdit"}, "ods_notpar26": {"name": "ods_notPAR26", "type": "TWideStringField"}, "ods_notpar27": {"name": "ods_notPAR27", "type": "TWideStringField"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "ods_notpar28": {"name": "ods_notPAR28", "type": "TFloatField"}, "ods_notpar29": {"name": "ods_notPAR29", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("FormNote", null, "TFormNote");
    U.var_("creditid", 0, "integer");
    U.var_("edt", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FormNote")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormNote", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "edt")), 0))) {
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["Addcm_notesMCB", ["v_creditid", (await $.v(C, "creditid")), "v_par1", (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "v_par2", (await $.mv((await $.v(C, "edit1")), "Text")), "v_par3", (await $.mv((await $.v(C, "edit2")), "Text")), "v_par4", (await $.mv((await $.v(C, "edit3")), "Text")), "v_par5", (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "Text")), "v_par6", (await $.mv((await $.v(C, "edit4")), "Text")), "v_par7", (await $.mv((await $.v(C, "edit5")), "Text")), "v_par8", (await $.mv((await $.v(C, "Edit6")), "Text")), "v_par9", (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), "v_par10", (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), "v_par11", (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "Text")), "v_par12", (await $.mv((await $.v(C, "Edit7")), "Text")), "v_par13", (await $.mv((await $.v(C, "Edit8")), "Text")), "v_par14", (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "Text")), "v_par15", (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "Text")), "v_par16", (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "Text")), "v_par17", (await $.mv((await $.v(C, "DBLookupComboboxEh9")), "Text")), "v_par18", (await $.mv((await $.v(C, "Edit12")), "Text")), "v_par19", (await $.mv((await $.v(C, "Edit13")), "Text")), "v_par20", (await $.mv((await $.v(C, "Edit14")), "Text")), "v_par21", (await $.mv((await $.v(C, "Edit15")), "Text")), "v_par22", (await $.mv((await $.v(C, "Edit16")), "Text")), "v_par23", (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value")), "v_par24", (await $.mv((await $.v(C, "DBDateTimeEditEh2")), "Value")), "v_par25", (await $.mv((await $.v(C, "Edit9")), "text")), "v_par26", (await $.mv((await $.v(C, "Edit10")), "text")), "v_par27", (await $.mv((await $.v(C, "Edit11")), "text")), "v_par28", (await $.mv((await $.v(C, "Edit17")), "text")), "v_par29", (await $.mv((await $.v(C, "memo1")), "text"))]])));
  }
  if ($.truthy($.eq((await $.v(C, "edt")), 1))) {
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["UPDcm_notesMCB", ["v_id", (await $.mv((await $.v(C, "ods_notID")), "AsInteger")), "v_par1", (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "v_par2", (await $.mv((await $.v(C, "edit1")), "Text")), "v_par3", (await $.mv((await $.v(C, "edit2")), "Text")), "v_par4", (await $.mv((await $.v(C, "edit3")), "Text")), "v_par5", (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "Text")), "v_par6", (await $.mv((await $.v(C, "edit4")), "Text")), "v_par7", (await $.mv((await $.v(C, "edit5")), "Text")), "v_par8", (await $.mv((await $.v(C, "Edit6")), "Text")), "v_par9", (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), "v_par10", (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), "v_par11", (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "Text")), "v_par12", (await $.mv((await $.v(C, "Edit7")), "Text")), "v_par13", (await $.mv((await $.v(C, "Edit8")), "Text")), "v_par14", (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "Text")), "v_par15", (await $.mv((await $.v(C, "DBLookupComboboxEh8")), "Text")), "v_par16", (await $.mv((await $.v(C, "DBLookupComboboxEh7")), "Text")), "v_par17", (await $.mv((await $.v(C, "DBLookupComboboxEh9")), "Text")), "v_par18", (await $.mv((await $.v(C, "Edit12")), "Text")), "v_par19", (await $.mv((await $.v(C, "Edit13")), "Text")), "v_par20", (await $.mv((await $.v(C, "Edit14")), "Text")), "v_par21", (await $.mv((await $.v(C, "Edit15")), "Text")), "v_par22", (await $.mv((await $.v(C, "Edit16")), "Text")), "v_par23", (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value")), "v_par24", (await $.mv((await $.v(C, "DBDateTimeEditEh2")), "Value")), "v_par25", (await $.mv((await $.v(C, "Edit9")), "text")), "v_par26", (await $.mv((await $.v(C, "Edit10")), "text")), "v_par27", (await $.mv((await $.v(C, "Edit11")), "text")), "v_par28", (await $.mv((await $.v(C, "Edit17")), "text")), "v_par29", (await $.mv((await $.v(C, "memo1")), "text"))]])));
  }
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "edit8")), "Clear", []);
  await $.mcall((await $.v(C, "edit9")), "Clear", []);
  await $.mcall((await $.v(C, "edit12")), "Clear", []);
  await $.mcall((await $.v(C, "edit13")), "Clear", []);
  await $.mcall((await $.v(C, "edit14")), "Clear", []);
  await $.mcall((await $.v(C, "edit15")), "Clear", []);
  await $.mcall((await $.v(C, "edit16")), "Clear", []);
  await $.mcall((await $.v(C, "edit10")), "Clear", []);
  await $.mcall((await $.v(C, "edit11")), "Clear", []);
  await $.mcall((await $.v(C, "edit17")), "Clear", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh7")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh8")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh9")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Value", (-(1)));
  await $.mset((await $.v(C, "DBDateTimeEditEh2")), "Value", (-(1)));
  await $.mcall((await $.v(C, "ods_not")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNote", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormNote")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNote", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir  silinsin ?", (await $.v(C, "mtCOnfirmation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["delete_notesMCB", ["v_id", (await $.mv((await $.v(C, "ods_notID")), "AsInteger"))]])));
  }
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "edit8")), "Clear", []);
  await $.mcall((await $.v(C, "edit9")), "Clear", []);
  await $.mcall((await $.v(C, "edit12")), "Clear", []);
  await $.mcall((await $.v(C, "edit13")), "Clear", []);
  await $.mcall((await $.v(C, "edit14")), "Clear", []);
  await $.mcall((await $.v(C, "edit15")), "Clear", []);
  await $.mcall((await $.v(C, "edit16")), "Clear", []);
  await $.mcall((await $.v(C, "edit10")), "Clear", []);
  await $.mcall((await $.v(C, "edit11")), "Clear", []);
  await $.mcall((await $.v(C, "edit17")), "Clear", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh7")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh8")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh9")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Value", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBDateTimeEditEh2")), "Value", (await $.v(C, "null")));
  await $.mcall((await $.v(C, "ods_not")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNote", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Value", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBDateTimeEditEh2")), "Value", (await $.v(C, "null")));
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par1"])), "AsString")));
  await $.mset((await $.v(C, "edit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par2"])), "AsString")));
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par3"])), "AsString")));
  await $.mset((await $.v(C, "edit3")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par4"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par5"])), "AsString")));
  await $.mset((await $.v(C, "edit4")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par6"])), "AsString")));
  await $.mset((await $.v(C, "edit5")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par7"])), "AsString")));
  await $.mset((await $.v(C, "edit6")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par8"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par9"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupComboboxEh4")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par10"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par11"])), "AsString")));
  await $.mset((await $.v(C, "edit7")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par12"])), "AsString")));
  await $.mset((await $.v(C, "edit8")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par13"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par14"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupComboboxEh8")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par15"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupComboboxEh7")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par16"])), "AsString")));
  { const $t1 = await $.iset((await $.mv((await $.v(C, "ods_hucrat")), "SQL")), [11], ""); if ($t1 !== undefined) { await $.mset((await $.v(C, "ods_hucrat")), "SQL", $t1); } }
  await $.mcall((await $.v(C, "ods_hucrat")), "Close", []);
  { const $t2 = await $.iset((await $.mv((await $.v(C, "ods_hucrat")), "sql")), [11], $.add("where id=", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Value"))])))); if ($t2 !== undefined) { await $.mset((await $.v(C, "ods_hucrat")), "sql", $t2); } }
  await $.mcall((await $.v(C, "ods_hucrat")), "Open", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh9")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par17"])), "AsString")));
  await $.mset((await $.v(C, "edit12")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par18"])), "AsString")));
  await $.mset((await $.v(C, "edit13")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par19"])), "AsString")));
  await $.mset((await $.v(C, "edit14")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par20"])), "AsString")));
  await $.mset((await $.v(C, "edit15")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par21"])), "AsString")));
  await $.mset((await $.v(C, "edit16")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par22"])), "AsString")));
  await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Value", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par23"])), "AsVariant")));
  await $.mset((await $.v(C, "DBDateTimeEditEh2")), "Value", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par24"])), "AsVariant")));
  await $.mset((await $.v(C, "edit9")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par25"])), "AsString")));
  await $.mset((await $.v(C, "edit10")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par26"])), "AsString")));
  await $.mset((await $.v(C, "edit11")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par27"])), "AsString")));
  await $.mset((await $.v(C, "edit17")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par28"])), "AsString")));
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mcall((await $.v(C, "ods_not")), "FieldByName", ["par29"])), "AsString")));
  await $.set(C, "edt", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNote", "DBLookupComboboxEh4CloseUp", async function DBLookupComboboxEh4CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender", "accept"]);
  { const $t3 = await $.iset((await $.mv((await $.v(C, "ods_hucrat")), "SQL")), [11], ""); if ($t3 !== undefined) { await $.mset((await $.v(C, "ods_hucrat")), "SQL", $t3); } }
  await $.mcall((await $.v(C, "ods_hucrat")), "Close", []);
  { const $t4 = await $.iset((await $.mv((await $.v(C, "ods_hucrat")), "sql")), [11], $.add("where id=", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Value"))])))); if ($t4 !== undefined) { await $.mset((await $.v(C, "ods_hucrat")), "sql", $t4); } }
  await $.mcall((await $.v(C, "ods_hucrat")), "Open", []);
  L0["i"] = (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Value"));
  await $.mset((await $.v(C, "DBLookupComboboxEh9")), "Value", L0["i"]);
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormNote", "Edit10KeyPress", async function Edit10KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "Upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormNote", "Edit11KeyPress", async function Edit11KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "Upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormNote", "Edit17KeyPress", async function Edit17KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "Upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormNote", "Edit9KeyPress", async function Edit9KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.lt((await $.call(C, "upcase", [(await L0["key"].get())])), "0")), async () => ($.gt((await $.call(C, "Upcase", [(await L0["key"].get())])), "9")))))) {
    if ($.truthy(($.ne((await $.call(C, "ord", [(await L0["key"].get())])), 8)))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormNote", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit2")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mcall((await $.v(C, "edit5")), "Clear", []);
  await $.mcall((await $.v(C, "edit6")), "Clear", []);
  await $.mcall((await $.v(C, "edit7")), "Clear", []);
  await $.mcall((await $.v(C, "edit8")), "Clear", []);
  await $.mcall((await $.v(C, "edit9")), "Clear", []);
  await $.mcall((await $.v(C, "edit10")), "Clear", []);
  await $.mcall((await $.v(C, "edit11")), "Clear", []);
  await $.mcall((await $.v(C, "edit17")), "Clear", []);
  await $.mcall((await $.v(C, "memo1")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh7")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh8")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh9")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "ods_hucrat")), "Close", []);
  { const $t5 = await $.iset((await $.mv((await $.v(C, "ods_hucrat")), "SQL")), [10], ""); if ($t5 !== undefined) { await $.mset((await $.v(C, "ods_hucrat")), "SQL", $t5); } }
  await $.mcall((await $.v(C, "ods_hucrat")), "Open", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormNote", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "creditid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "CommonDBGrid")), "DataSource")), "DataSet")), "FieldByName", [(await $.v(C, "sID"))])), "AsInteger")));
  {
    const $t6 = (await $.wobj(C, "ods_not"));
    await $.stmt($.wcall([$t6], "close", [], C));
    await $.stmt((await $.wcall([$t6], "SetVariable", ["v_id", (await $.wv([$t6], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t6], "open", [], C));
    await $.wset([$t6], "edt", 0, C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormNote", (await $.mcall((await $.v(C, "TFormNote")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
