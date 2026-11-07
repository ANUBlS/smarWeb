// Generated from PurImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PurImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "ComCtrls", "StdCtrls", "Buttons", "ExtCtrls", "Db", "OracleData", "CMExcelExport", "Oracle", "Gauges", "CommonDecls", "sbsystem", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TPurFrm", "TForm", {"datasource1": {"name": "DataSource1", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset3": {"name": "OracleDataSet3", "type": "TOracleDataSet"}, "main": {"name": "Main", "type": "TOracleDataSet"}, "mainid": {"name": "MainID", "type": "TFloatField"}, "mainnumberofcredit": {"name": "MainNUMBEROFCREDIT", "type": "TWideStringField"}, "maindsdesigner": {"name": "MainDSDesigner", "type": "TWideStringField"}, "maindsdesigner2": {"name": "MainDSDesigner2", "type": "TWideStringField"}, "maindsdesigner3": {"name": "MainDSDesigner3", "type": "TWideStringField"}, "maindsdesigner4": {"name": "MainDSDesigner4", "type": "TWideStringField"}, "maindsdesigner5": {"name": "MainDSDesigner5", "type": "TWideStringField"}, "maindsdesigner6": {"name": "MainDSDesigner6", "type": "TWideStringField"}, "maindsdesigner7": {"name": "MainDSDesigner7", "type": "TWideStringField"}, "maincreditlineamount": {"name": "MainCREDITLINEAMOUNT", "type": "TFloatField"}, "mainekvalent": {"name": "MainEKVALENT", "type": "TFloatField"}, "mainval_name": {"name": "MainVAL_NAME", "type": "TWideStringField"}, "mainborcalan": {"name": "MainBORCALAN", "type": "TWideStringField"}, "maindescription": {"name": "MainDESCRIPTION", "type": "TWideStringField"}, "maindateofconclusion": {"name": "MainDATEOFCONCLUSION", "type": "TDateTimeField"}, "mainduedatefirstcontract": {"name": "MainDUEDATEFIRSTCONTRACT", "type": "TDateTimeField"}, "mainduedatelastcontract": {"name": "MainDUEDATELASTCONTRACT", "type": "TDateTimeField"}, "mainvaxtibitmish": {"name": "MainVAXTIBITMISH", "type": "TFloatField"}, "mainhesablanmayan": {"name": "MainHESABLANMAYAN", "type": "TFloatField"}, "mainannualyinterestrate": {"name": "MainANNUALYINTERESTRATE", "type": "TFloatField"}, "mainannualyoverduerate": {"name": "MainANNUALYOVERDUERATE", "type": "TFloatField"}, "maindescription_1": {"name": "MainDESCRIPTION_1", "type": "TWideStringField"}, "mainpledgeprice": {"name": "MainPLEDGEPRICE", "type": "TFloatField"}, "mainpledgename": {"name": "MainPLEDGENAME", "type": "TWideStringField"}, "mainrezdent": {"name": "MainREZDENT", "type": "TWideStringField"}, "mainmulkiyyetnovu": {"name": "MainMulkiyyetnovu", "type": "TWideStringField"}, "mainkreditinalunmameqsedi": {"name": "MainKreditinalunmameqsedi", "type": "TWideStringField"}, "mainborcalanunsektoru": {"name": "MainBorcalanunsektoru", "type": "TWideStringField"}, "mainborcalaninfaliyyeti": {"name": "MainBorcalaninfaliyyeti", "type": "TWideStringField"}, "mainborcalaninfaliyyetnovu": {"name": "MainBorcalaninfaliyyetnovu", "type": "TWideStringField"}, "mainfaizleruzreborclar": {"name": "Mainfaizleruzreborclar", "type": "TFloatField"}, "mainfaizleruzreborclarek": {"name": "MainFaizleruzreborclarek", "type": "TFloatField"}, "maincariborclar": {"name": "MainCariborclar", "type": "TFloatField"}, "maincariborclarek": {"name": "MainCariborclarEK", "type": "TFloatField"}, "maingecgun": {"name": "MainGECGUN", "type": "TFloatField"}, "mainds_rest": {"name": "MainDS_REST", "type": "TFloatField"}, "maindsrest_ek": {"name": "MainDSREST_EK", "type": "TFloatField"}, "maindsinterestrest": {"name": "MainDSINTERESTREST", "type": "TFloatField"}, "maindsint_ek": {"name": "MainDSINT_EK", "type": "TFloatField"}, "maindsduerest": {"name": "MainDSDUEREST", "type": "TFloatField"}, "maindsduerest_ek": {"name": "MainDSDUEREST_EK", "type": "TFloatField"}, "maindsdueinterestrest": {"name": "MainDSDUEINTERESTREST", "type": "TFloatField"}, "maindsdoeint_ek": {"name": "MainDSDOEINT_EK", "type": "TFloatField"}, "sysdat": {"name": "SysDat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "SysDatTEK_DAT", "type": "TDateTimeField"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "cemset": {"name": "CemSet", "type": "TOracleDataSet"}, "cemsetmulkiyyetnovu": {"name": "CemSetMulkiyyetnovu", "type": "TWideStringField"}, "cemsetborcalanunsektoru": {"name": "CemSetBorcalanunsektoru", "type": "TWideStringField"}, "cemsetborcalaninfaliyyeti": {"name": "CemSetBorcalaninfaliyyeti", "type": "TWideStringField"}, "cemsetborcalaninfaliyyetnovu": {"name": "CemSetBorcalaninfaliyyetnovu", "type": "TWideStringField"}, "cemsetsumcreditlineamount": {"name": "CemSetSUMCREDITLINEAMOUNT", "type": "TFloatField"}, "cemsetsumekvalent": {"name": "CemSetSUMEKVALENT", "type": "TFloatField"}, "cemsetsumhesablanmayan": {"name": "CemSetSUMHESABLANMAYAN", "type": "TFloatField"}, "cemsetsumds_rest": {"name": "CemSetSUMDS_REST", "type": "TFloatField"}, "cemsetsumdsrest_ek": {"name": "CemSetSUMDSREST_EK", "type": "TFloatField"}, "cemsetsumdsinterestrest": {"name": "CemSetSUMDSINTERESTREST", "type": "TFloatField"}, "cemsetsumdsint_ek": {"name": "CemSetSUMDSINT_EK", "type": "TFloatField"}, "cemsetsumdsduerest": {"name": "CemSetSUMDSDUEREST", "type": "TFloatField"}, "cemsetsumdsduerest_ek": {"name": "CemSetSUMDSDUEREST_EK", "type": "TFloatField"}, "cemsetsumdsdueinterestrest": {"name": "CemSetSUMDSDUEINTERESTREST", "type": "TFloatField"}, "cemsetsumdsdoeint_ek": {"name": "CemSetSUMDSDOEINT_EK", "type": "TFloatField"}, "cemsetsumfaizleruzreborclar": {"name": "CemSetSUMFAIZLERUZREBORCLAR", "type": "TFloatField"}, "cemsetsumfaizleruzreborclarek": {"name": "CemSetSUMFAIZLERUZREBORCLAREK", "type": "TFloatField"}, "cemsetsumcariborclar": {"name": "CemSetSUMCARIBORCLAR", "type": "TFloatField"}, "cemsetsumcariborclarek": {"name": "CemSetSUMCARIBORCLAREK", "type": "TFloatField"}, "cemsets_kodu": {"name": "CemSetS_KODU", "type": "TWideStringField"}, "cemsetf_kodu": {"name": "CemSetF_KODU", "type": "TWideStringField"}, "cemsetfn_kodu": {"name": "CemSetFN_KODU", "type": "TWideStringField"}, "active": {"name": "Active", "type": "TOracleDataSet"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "cemsetm_kodu": {"name": "CemSetM_KODU", "type": "TWideStringField"}, "cemsetname": {"name": "CemSetNAME", "type": "TWideStringField"}, "cemsetcode": {"name": "CemSetCODE", "type": "TWideStringField"}, "oracledataset4": {"name": "OracleDataSet4", "type": "TOracleDataSet"}, "mainadi": {"name": "MainADI", "type": "TFloatField"}, "mainmeqsedli": {"name": "MainMEQSEDLI", "type": "TFloatField"}, "cemsetsumadi": {"name": "CemSetSUMADI", "type": "TFloatField"}, "cemsetsummeqsedli": {"name": "CemSetSUMMEQSEDLI", "type": "TFloatField"}, "cemsetval_name": {"name": "CemSetVAL_NAME", "type": "TWideStringField"}, "maindsdesigner130": {"name": "MainDSDesigner130", "type": "TFloatField"}, "maindsdesigner3160": {"name": "MainDSDesigner3160", "type": "TFloatField"}, "maindsdesigner6190": {"name": "MainDSDesigner6190", "type": "TFloatField"}, "maindsdesigner91120": {"name": "MainDSDesigner91120", "type": "TFloatField"}, "maindsdesigner121150": {"name": "MainDSDesigner121150", "type": "TFloatField"}, "maindsdesigner151180": {"name": "MainDSDesigner151180", "type": "TFloatField"}, "maindsdesigner181210": {"name": "MainDSDesigner181210", "type": "TFloatField"}, "maindsdesigner211240": {"name": "MainDSDesigner211240", "type": "TFloatField"}, "maindsdesigner241270": {"name": "MainDSDesigner241270", "type": "TFloatField"}, "maindsdesigner271300": {"name": "MainDSDesigner271300", "type": "TFloatField"}, "maindsdesigner301330": {"name": "MainDSDesigner301330", "type": "TFloatField"}, "maindsdesigner331365": {"name": "MainDSDesigner331365", "type": "TFloatField"}, "mainbirildenartiq": {"name": "MainBirildenartiq", "type": "TFloatField"}, "cemsetsum130": {"name": "CemSetSUM130", "type": "TFloatField"}, "cemsetsum3160": {"name": "CemSetSUM3160", "type": "TFloatField"}, "cemsetsum6190": {"name": "CemSetSUM6190", "type": "TFloatField"}, "cemsetsum91120": {"name": "CemSetSUM91120", "type": "TFloatField"}, "cemsetsum121150": {"name": "CemSetSUM121150", "type": "TFloatField"}, "cemsetsum151180": {"name": "CemSetSUM151180", "type": "TFloatField"}, "cemsetsum181210": {"name": "CemSetSUM181210", "type": "TFloatField"}, "cemsetsum211240": {"name": "CemSetSUM211240", "type": "TFloatField"}, "cemsetsum241270": {"name": "CemSetSUM241270", "type": "TFloatField"}, "cemsetsum271300": {"name": "CemSetSUM271300", "type": "TFloatField"}, "cemsetsum301330": {"name": "CemSetSUM301330", "type": "TFloatField"}, "cemsetsum331365": {"name": "CemSetSUM331365", "type": "TFloatField"}, "cemsetsumbirildenartiq": {"name": "CemSetSUMBIRILDENARTIQ", "type": "TFloatField"}, "cemsetsumuzadilmishdar": {"name": "CemSetSUMUZADILMISHDAR", "type": "TFloatField"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "gauge1": {"name": "Gauge1", "type": "TGauge"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "cbavalute": {"name": "CBaValute", "type": "TCheckBox"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "cbpersons": {"name": "CBPersons", "type": "TCheckBox"}, "lcbpersons": {"name": "LCBPersons", "type": "TDBLookupComboBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "cem": {"name": "Cem", "type": "TCheckBox"}, "animate1": {"name": "Animate1", "type": "TAnimate"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "odenish": {"name": "odenish", "type": "TOracleDataSet"}, "cemsetsum0": {"name": "CemSetSUM0", "type": "TFloatField"}, "cemsetsum2": {"name": "CemSetSUM2", "type": "TFloatField"}, "cemsetsum10": {"name": "CemSetSUM10", "type": "TFloatField"}, "cemsetsum30": {"name": "CemSetSUM30", "type": "TFloatField"}, "cemsetsum60": {"name": "CemSetSUM60", "type": "TFloatField"}, "cemsetsum100": {"name": "CemSetSUM100", "type": "TFloatField"}, "girov": {"name": "Girov", "type": "TOracleDataSet"}, "cmexcelexport1": {"name": "CMExcelExport1", "type": "TCMExcelExport"}, "girovsay": {"name": "GirovSAY", "type": "TFloatField"}, "girovdescription": {"name": "GirovDESCRIPTION", "type": "TWideStringField"}, "girovqaliq": {"name": "GirovQALIQ", "type": "TFloatField"}, "girovgirov": {"name": "GirovGIROV", "type": "TFloatField"}, "girovqenaitbexsh": {"name": "GirovQENAITBEXSH", "type": "TFloatField"}, "girovnezaretalt": {"name": "GirovNEZARETALT", "type": "TFloatField"}, "girovmeqsedli": {"name": "GirovMEQSEDLI", "type": "TFloatField"}, "girovtehlukeli": {"name": "GirovTEHLUKELI", "type": "TFloatField"}, "girovumudsuz": {"name": "GirovUMUDSUZ", "type": "TFloatField"}, "girovtesnifata_daxil_edilmemish": {"name": "GirovTESNIFATA_DAXIL_EDILMEMISH", "type": "TFloatField"}, "cemsetsumgirov": {"name": "CemSetSUMGIROV", "type": "TFloatField"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "datetimepicker4": {"name": "DateTimePicker4", "type": "TDateTimePicker"}, "adiyyat": {"name": "adiyyat", "type": "TOracleDataSet"}, "adiyyatd": {"name": "adiyyatD", "type": "TWideStringField"}, "adiyyatfullcount": {"name": "adiyyatFULLCOUNT", "type": "TFloatField"}, "adiyyatfulltrancve": {"name": "adiyyatFULLTRANCVE", "type": "TFloatField"}, "adiyyatvalcount": {"name": "adiyyatVALCOUNT", "type": "TFloatField"}, "adiyyatvaltran": {"name": "adiyyatVALTRAN", "type": "TFloatField"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "oracledataset5": {"name": "OracleDataSet5", "type": "TOracleDataSet"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "datetimepicker5": {"name": "DateTimePicker5", "type": "TDateTimePicker"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "oracledataset5name": {"name": "OracleDataSet5NAME", "type": "TWideStringField"}, "oracledataset5qaliq": {"name": "OracleDataSet5QALIQ", "type": "TFloatField"}, "oracledataset5rpercent": {"name": "OracleDataSet5RPERCENT", "type": "TWideStringField"}, "oracledataset5pledgeprice": {"name": "OracleDataSet5PLEDGEPRICE", "type": "TFloatField"}, "oracledataset5description": {"name": "OracleDataSet5DESCRIPTION", "type": "TWideStringField"}, "oracledataset5name_1": {"name": "OracleDataSet5NAME_1", "type": "TWideStringField"}, "oracledataset5boorowerid": {"name": "OracleDataSet5BOOROWERID", "type": "TFloatField"}, "oracledataset5id": {"name": "OracleDataSet5ID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.const("rsErrorUsrGrp", "Ən azı bir istifadəçi qurupu seçilməlidir!");
    U.const("rsErrorPersonaltype", "Ən azı bir müştəri tipi seçilməlidir !");
    U.const("rsInfScriptStarted", "Hesabat alınır ");
    U.const("rsPleaseWait", "Zəhmət olmasa bir az gözləyin!  ");
    U.const("rsInfRowsExported", "%d sətir ixrac olundu");
    U.const("rsInfExportFinished", "İxrac qurtardı");
    U.var_("PurFrm", null, "TPurFrm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "PurFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TPurFrm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dy": 0, "dm": 0, "dd": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "open", []);
  await $.mcall((await $.v(C, "Active")), "open", []);
  await $.mcall((await $.v(C, "SysDat")), "open", []);
  await $.stmt((await $.call(C, "DecodeDate", [(await $.mv((await $.mcall((await $.v(C, "SysDat")), "fieldbyname", ["tek_dat"])), "AsDateTime")), $.ref(async () => L0["dy"], async ($t1) => { L0["dy"] = $t1; }), $.ref(async () => L0["dm"], async ($t2) => { L0["dm"] = $t2; }), $.ref(async () => L0["dd"], async ($t3) => { L0["dd"] = $t3; })])));
  if ($.truthy($.eq($.sub(L0["dm"], 1), 0))) {
    L0["dm"] = 12;
    L0["dy"] = L0["dy"];
  } else {
    L0["dm"] = L0["dm"];
  }
  await $.mset((await $.v(C, "DateTimePicker3")), "DateTime", (await $.call(C, "EncodeDate", [L0["dy"], L0["dm"], 1])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "closeall", []);
  await $.mcall((await $.v(C, "OracleDataSet2")), "closeall", []);
  await $.mcall((await $.v(C, "OracleDataSet3")), "closeall", []);
  await $.mcall((await $.v(C, "oracledataset5")), "closeall", []);
  await $.mcall((await $.v(C, "SysDat")), "closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "SysDat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "SysDat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker3")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "SysDat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "SysDat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "SysDat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "BuildFilterString", async function BuildFilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "and "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t4) => { L0["result"] = $t4; }), "cu.VID_SOB", (await $.mv((await $.v(C, "CBPersons")), "Checked")), (await $.mv((await $.v(C, "LCBPersons")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t5) => { L0["result"] = $t5; }), "p.BRANCHID", (await $.mv((await $.v(C, "CheckBox2")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t6) => { L0["result"] = $t6; }), "p.CURRENCY", (await $.mv((await $.v(C, "CheckBox1")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPurFrm", "BuildFilterString1", async function BuildFilterString1(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["concatfilter"] = $.fn(async function ConcatFilter(p0, p1, p2, p3) {
  const L1 = {"s": $.asRef(p0), "prefix": $.copyArg(p1), "checked": $.copyArg(p2), "keyvalue": $.copyArg(p3), result: undefined, "temp": ''};
  await $.fixArgs(L1, ["prefix", "checked", "keyvalue"]);
  L1["csformat"] = "(%s=%s)";
  if ($.truthy(L1["checked"])) {
    L1["temp"] = (await $.call(C, "Format", [L1["csformat"], [L1["prefix"], L1["keyvalue"]]]));
    if ($.truthy($.eq((await L1["s"].get()), ""))) {
      await L1["s"].set(L1["temp"]);
    } else {
      await L1["s"].set($.add($.add((await L1["s"].get()), "and "), L1["temp"]));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t7) => { L0["result"] = $t7; }), "p.BRANCHID", (await $.mv((await $.v(C, "CheckBox3")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue"))])));
  await $.stmt((await $.callv(L0["concatfilter"], [$.ref(async () => L0["result"], async ($t8) => { L0["result"] = $t8; }), "p.CURRENCY", (await $.mv((await $.v(C, "CheckBox4")), "Checked")), (await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPurFrm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0, "filterstr": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LogInformation", [(await $.v(C, "rsInfScriptStarted"))])));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["filterstr"] = "";
  if ($.truthy((await $.mv((await $.v(C, "cem")), "Checked")))) {
    await $.mcall((await $.v(C, "active")), "first", []);
    await $.mset((await $.v(C, "Gauge1")), "Visible", true);
    L0["i"] = 1;
    {
      const $t9 = (await $.wobj(C, "active"));
      while ($.truthy($.not((await $.wv([$t9], "EOF", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t9], "OraclePackage1", C, false)), "CallProcedure", ["Gec_gun", ["p_id", (await $.mv((await $.wcall([$t9], "FieldByName", ["ID"], C)), "AsInteger")), "p_date", (await $.wv([$t9], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))]])));
        await $.mset((await $.wv([$t9], "Gauge1", C, false)), "Progress", (await $.wcall([$t9], "trunc", [$.fdiv($.mul((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 20), (await $.wv([$t9], "RecordCount", C, false)))], C)));
        await $.wset([$t9], "i", $.add((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        await $.stmt($.wcall([$t9], "Next", [], C));
        await $.tick();
      }
    }
    {
      const $t10 = (await $.wobj(C, "CemSet"));
      await $.mset((await $.wv([$t10], "Gauge1", C, false)), "Progress", 35);
      if ($.truthy((await $.wv([$t10], "Active", C, false)))) {
        await $.stmt($.wcall([$t10], "CloseAll", [], C));
      }
      await $.mset((await $.wv([$t10], "Gauge1", C, false)), "Progress", 50);
      await $.stmt((await $.wcall([$t10], "SetVariable", ["dat", (await $.wv([$t10], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
      if ($.truthy($.ne((await $.wv([$t10], "BuildFilterString", C, false)), ""))) {
        await $.wset([$t10], "FilterStr", $.add(" where ", (await $.wv([$t10], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
        { const $t11 = await $.iset((await $.wv([$t10], "SQL", C, false)), [13], (await $.wv([$t10], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t11 !== undefined) { await $.wset([$t10], "SQL", $t11, C); } }
      } else {
        { const $t12 = await $.iset((await $.wv([$t10], "SQL", C, false)), [13], ""); if ($t12 !== undefined) { await $.wset([$t10], "SQL", $t12, C); } }
      }
      await $.stmt($.wcall([$t10], "open", [], C));
      await $.mset((await $.wv([$t10], "Gauge1", C, false)), "Progress", 80);
      await $.stmt((await $.wcall([$t10], "LogInformation", [(await $.wv([$t10], "rsPleaseWait", C, false))], C)));
      {
        const $t13 = (await $.wv([$t10], "ExcelExport", C, false));
        await $.mset((await $.wv([$t10, $t13], "Gauge1", C, false)), "Progress", 88);
        await $.stmt($.wcall([$t10, $t13], "Connect", [], C));
        await $.stmt((await $.wcall([$t10, $t13], "ExportDataset", [(await $.wv([$t10, $t13], "CemSet", C, false)), "Purdensal cem", (await $.wv([$t10, $t13], "True", C, false)), (await $.wv([$t10, $t13], "false", C, false))], C)));
        await $.stmt($.wcall([$t10, $t13], "Disconnect", [], C));
        await $.mset((await $.wv([$t10, $t13], "Gauge1", C, false)), "Progress", 95);
      }
      await $.mset((await $.wv([$t10], "Gauge1", C, false)), "Progress", 100);
      await $.mset((await $.wv([$t10], "Gauge1", C, false)), "Visible", (await $.wv([$t10], "false", C, false)));
      await $.stmt((await $.wcall([$t10], "LogInformation", [(await $.wv([$t10], "rsInfExportFinished", C, false))], C)));
    }
  } else {
    await $.mset((await $.v(C, "Animate1")), "Visible", true);
    await $.mset((await $.v(C, "Animate1")), "Active", true);
    await $.mset((await $.v(C, "Animate1")), "CommonAVI", (await $.v(C, "aviCopyFile")));
    {
      const $t14 = (await $.wobj(C, "active"));
      while ($.truthy($.not((await $.wv([$t14], "EOF", C, false))))) {
        await $.stmt((await $.mcall((await $.wv([$t14], "OraclePackage1", C, false)), "CallProcedure", ["Gec_gun", ["p_id", (await $.mv((await $.wcall([$t14], "FieldByName", ["ID"], C)), "AsInteger")), "p_date", (await $.wv([$t14], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))]])));
        await $.stmt($.wcall([$t14], "Next", [], C));
        await $.tick();
      }
    }
    {
      const $t15 = (await $.wobj(C, "main"));
      if ($.truthy((await $.wv([$t15], "Active", C, false)))) {
        await $.stmt($.wcall([$t15], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t15], "SetVariable", ["dat", (await $.wv([$t15], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
      if ($.truthy($.ne((await $.wv([$t15], "BuildFilterString", C, false)), ""))) {
        await $.wset([$t15], "FilterStr", $.add(" and ", (await $.wv([$t15], "BuildFilterString", C, false))), { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true });
        { const $t16 = await $.iset((await $.wv([$t15], "SQL", C, false)), [64], (await $.wv([$t15], "FilterStr", { get: async () => L0["filterstr"], set: async (v) => { L0["filterstr"] = v; }, local: true }, false))); if ($t16 !== undefined) { await $.wset([$t15], "SQL", $t16, C); } }
      } else {
        { const $t17 = await $.iset((await $.wv([$t15], "SQL", C, false)), [64], ""); if ($t17 !== undefined) { await $.wset([$t15], "SQL", $t17, C); } }
      }
      await $.stmt($.wcall([$t15], "open", [], C));
      await $.stmt((await $.wcall([$t15], "LogInformation", [(await $.wv([$t15], "rsPleaseWait", C, false))], C)));
      {
        const $t18 = (await $.wv([$t15], "ExcelExport", C, false));
        await $.stmt($.wcall([$t15, $t18], "Connect", [], C));
        await $.stmt((await $.wcall([$t15, $t18], "ExportDataset", [(await $.wv([$t15, $t18], "Main", C, false)), "Purdensal", (await $.wv([$t15, $t18], "True", C, false)), (await $.wv([$t15, $t18], "false", C, false))], C)));
        await $.stmt($.wcall([$t15, $t18], "Disconnect", [], C));
      }
      await $.stmt((await $.wcall([$t15], "LogInformation", [(await $.wv([$t15], "rsInfExportFinished", C, false))], C)));
      await $.mset((await $.wv([$t15], "Animate1", C, false)), "Visible", (await $.wv([$t15], "false", C, false)));
      await $.mset((await $.wv([$t15], "Animate1", C, false)), "Active", (await $.wv([$t15], "false", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]));
  {
    const $t19 = (await $.wobj(C, "odenish"));
    if ($.truthy((await $.wv([$t19], "Active", C, false)))) {
      await $.stmt($.wcall([$t19], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t19], "SetVariable", ["dat", (await $.wv([$t19], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t19], "open", [], C));
  }
  {
    const $t20 = (await $.wobj(C, "Girov"));
    if ($.truthy((await $.wv([$t20], "Active", C, false)))) {
      await $.stmt($.wcall([$t20], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t20], "SetVariable", ["dat", (await $.wv([$t20], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t20], "open", [], C));
  }
  {
    const $t21 = (await $.wobj(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t21], "Connect", [], C));
    await $.stmt((await $.wcall([$t21], "ExportDataset", [(await $.wv([$t21], "Girov", C, false)), "prugirov", (await $.wv([$t21], "True", C, false)), (await $.wv([$t21], "false", C, false))], C)));
    await $.stmt((await $.wcall([$t21], "ExportDataset", [(await $.wv([$t21], "odenish", C, false)), "ODMBC", (await $.wv([$t21], "True", C, false)), (await $.wv([$t21], "false", C, false))], C)));
    await $.stmt($.wcall([$t21], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "CemClick", async function CemClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "cem")), "Checked")), true))) {
    await $.mset((await $.v(C, "GroupBox6")), "Enabled", false);
    await $.mset((await $.v(C, "GroupBox2")), "Enabled", false);
    await $.mset((await $.v(C, "GroupBox1")), "Enabled", false);
    await $.mset((await $.v(C, "GroupBox3")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "GroupBox6")), "Enabled", true);
    await $.mset((await $.v(C, "GroupBox2")), "Enabled", true);
    await $.mset((await $.v(C, "GroupBox1")), "Enabled", true);
    await $.mset((await $.v(C, "GroupBox3")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "b_dat": 0, "e_dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["b_dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker3")), "DateTime"))]))]));
  L0["e_dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker4")), "DateTime"))]))]));
  {
    const $t22 = (await $.wobj(C, "adiyyat"));
    if ($.truthy((await $.wv([$t22], "Active", C, false)))) {
      await $.stmt($.wcall([$t22], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t22], "SetVariable", ["bdat", (await $.wv([$t22], "b_dat", { get: async () => L0["b_dat"], set: async (v) => { L0["b_dat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t22], "SetVariable", ["edat", (await $.wv([$t22], "e_dat", { get: async () => L0["e_dat"], set: async (v) => { L0["e_dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t22], "open", [], C));
  }
  {
    const $t23 = (await $.wobj(C, "CMExcelExport1"));
    await $.stmt($.wcall([$t23], "Connect", [], C));
    await $.stmt((await $.wcall([$t23], "ExportDataset", [(await $.wv([$t23], "adiyyat", C, false)), "Adiyyat", (await $.wv([$t23], "True", C, false)), (await $.wv([$t23], "false", C, false))], C)));
    await $.stmt($.wcall([$t23], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPurFrm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "e_dat": 0, "e_filterstr": '', "e_edit": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Kreditin meglegi sahesi bosdur "])));
    return L0.result;
  }
  L0["e_dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker5")), "DateTime"))]))]));
  L0["e_edit"] = (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "edit1")), "text"))]));
  {
    const $t24 = (await $.wobj(C, "OracleDataSet5"));
    if ($.truthy((await $.wv([$t24], "Active", C, false)))) {
      await $.stmt($.wcall([$t24], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t24], "SetVariable", ["dat", (await $.wv([$t24], "e_dat", { get: async () => L0["e_dat"], set: async (v) => { L0["e_dat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.ne((await $.wv([$t24], "BuildFilterString1", C, false)), ""))) {
      await $.wset([$t24], "e_FilterStr", $.add($.add($.add($.add(" and ", (await $.wv([$t24], "BuildFilterString1", C, false))), " and cs.qaliq> "), (await $.mv((await $.wv([$t24], "edit1", C, false)), "text"))), "/op.ostat"), { get: async () => L0["e_filterstr"], set: async (v) => { L0["e_filterstr"] = v; }, local: true });
      { const $t25 = await $.iset((await $.wv([$t24], "SQL", C, false)), [24], (await $.wv([$t24], "e_FilterStr", { get: async () => L0["e_filterstr"], set: async (v) => { L0["e_filterstr"] = v; }, local: true }, false))); if ($t25 !== undefined) { await $.wset([$t24], "SQL", $t25, C); } }
    } else {
      { const $t26 = await $.iset((await $.wv([$t24], "SQL", C, false)), [24], $.add($.add(" and cs.qaliq> ", (await $.mv((await $.wv([$t24], "edit1", C, false)), "text"))), "/op.ostat")); if ($t26 !== undefined) { await $.wset([$t24], "SQL", $t26, C); } }
    }
    await $.stmt($.wcall([$t24], "open", [], C));
    await $.stmt((await $.wcall([$t24], "LogInformation", [(await $.wv([$t24], "rsPleaseWait", C, false))], C)));
    {
      const $t27 = (await $.wv([$t24], "ExcelExport", C, false));
      await $.stmt($.wcall([$t24, $t27], "Connect", [], C));
      await $.stmt((await $.wcall([$t24, $t27], "ExportDataset", [(await $.wv([$t24, $t27], "OracleDataSet5", C, false)), "Iri kreditler", (await $.wv([$t24, $t27], "True", C, false)), (await $.wv([$t24, $t27], "false", C, false))], C)));
      await $.stmt($.wcall([$t24, $t27], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "PurFrm", (await $.mcall((await $.v(C, "TPurFrm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
