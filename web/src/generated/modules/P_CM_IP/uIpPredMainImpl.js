// Generated from uIpPredMainImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uIpPredMainImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "ComCtrls", "CMCurrencyEdit", "NLSLocalizer", "DBLookupEh", "Db", "OracleData", "DBCtrls", "Oracle", "Buttons", "CommonDecls", "SystemState", "CMOracleApiDataModuleImpl", "uIPYMReportImpl", "CurrencyToHR_Azeri_Impl", "uIPReestrReportImpl", "uIpReestr"]);
  const C = [U];
  U.defClass("TfrmIpPredMain", "TForm", {"odsipred": {"name": "ODSIPred", "type": "TOracleDataSet"}, "ipred": {"name": "IPred", "type": "TDataSource"}, "opkip": {"name": "OPKIP", "type": "TOraclePackage"}, "types": {"name": "Types", "type": "TDataSource"}, "odstypes": {"name": "ODSTypes", "type": "TOracleDataSet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "btnsave": {"name": "btnSave", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "localizer": {"name": "Localizer", "type": "TNLSLocalizer"}, "odsinsurances": {"name": "ODSInsurances", "type": "TOracleDataSet"}, "insurances": {"name": "Insurances", "type": "TDataSource"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "qiyms": {"name": "Qiyms", "type": "TDataSource"}, "odsqiyms": {"name": "ODSQiyms", "type": "TOracleDataSet"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "regions": {"name": "Regions", "type": "TDataSource"}, "odsexec": {"name": "ODSExec", "type": "TOracleDataSet"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "label37": {"name": "Label37", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "label39": {"name": "Label39", "type": "TLabel"}, "label40": {"name": "Label40", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "label42": {"name": "Label42", "type": "TLabel"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "dbediteh6": {"name": "DBEditEh6", "type": "TDBEditEh"}, "dbediteh7": {"name": "DBEditEh7", "type": "TDBEditEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBLookupComboboxEh"}, "dbediteh9": {"name": "DBEditEh9", "type": "TDBEditEh"}, "dbediteh10": {"name": "DBEditEh10", "type": "TDBEditEh"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "dbediteh11": {"name": "DBEditEh11", "type": "TDBEditEh"}, "datetimepicker4": {"name": "DateTimePicker4", "type": "TDateTimePicker"}, "dbediteh12": {"name": "DBEditEh12", "type": "TDBEditEh"}, "dbediteh13": {"name": "DBEditEh13", "type": "TDBEditEh"}, "datetimepicker5": {"name": "DateTimePicker5", "type": "TDateTimePicker"}, "label43": {"name": "Label43", "type": "TLabel"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel1": {"name": "Panel1", "type": "TTabControl"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "spbinsurances": {"name": "spbInsurances", "type": "TSpeedButton"}, "spbtypes": {"name": "spbTypes", "type": "TSpeedButton"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEditEh"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEditEh"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEditEh"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEditEh"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEditEh"}, "dbedit7": {"name": "DBEdit7", "type": "TDBLookupComboboxEh"}, "dbedit8": {"name": "DBEdit8", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEditEh"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEditEh"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEditEh"}, "dbedit11": {"name": "DBEdit11", "type": "TDateTimePicker"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEditEh"}, "dbedit13": {"name": "DBEdit13", "type": "TDateTimePicker"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEditEh"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEditEh"}, "dbedit16": {"name": "DBEdit16", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "edymno": {"name": "edymno", "type": "TEdit"}, "edymdesc": {"name": "edymdesc", "type": "TEdit"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "button4": {"name": "Button4", "type": "TButton"}, "odsipredcreditid": {"name": "ODSIPredCREDITID", "type": "TFloatField"}, "odsipredpredaddress": {"name": "ODSIPredPREDADDRESS", "type": "TStringField"}, "odsipredpredtype": {"name": "ODSIPredPREDTYPE", "type": "TFloatField"}, "odsipredpredplatz": {"name": "ODSIPredPREDPLATZ", "type": "TFloatField"}, "odsipredownername": {"name": "ODSIPredOWNERNAME", "type": "TStringField"}, "odsipredpredcost": {"name": "ODSIPredPREDCOST", "type": "TFloatField"}, "odsipredproplawno": {"name": "ODSIPredPROPLAWNO", "type": "TStringField"}, "odsipredproplawregno": {"name": "ODSIPredPROPLAWREGNO", "type": "TStringField"}, "odsipredcontractno": {"name": "ODSIPredCONTRACTNO", "type": "TStringField"}, "odsipredcontractdate": {"name": "ODSIPredCONTRACTDATE", "type": "TDateTimeField"}, "odsipredcontractnot": {"name": "ODSIPredCONTRACTNOT", "type": "TStringField"}, "odsipredpaperno": {"name": "ODSIPredPAPERNO", "type": "TStringField"}, "odsipredpaperdate": {"name": "ODSIPredPAPERDATE", "type": "TDateTimeField"}, "odsipredevaluater": {"name": "ODSIPredEVALUATER", "type": "TFloatField"}, "odsipredinsurancecompany": {"name": "ODSIPredINSURANCECOMPANY", "type": "TFloatField"}, "odsipredinsuranceamount": {"name": "ODSIPredINSURANCEAMOUNT", "type": "TFloatField"}, "odsipredinsuranceno": {"name": "ODSIPredINSURANCENO", "type": "TStringField"}, "odsipredinsurancedate": {"name": "ODSIPredINSURANCEDATE", "type": "TDateTimeField"}, "odsipredbankopendate": {"name": "ODSIPredBANKOPENDATE", "type": "TDateTimeField"}, "odsipredbankclosedate": {"name": "ODSIPredBANKCLOSEDATE", "type": "TDateTimeField"}, "odsipredgivenflatamt": {"name": "ODSIPredGIVENFLATAMT", "type": "TFloatField"}, "odsipredhandingactdate": {"name": "ODSIPredHANDINGACTDATE", "type": "TDateTimeField"}, "odsipredhandingactno": {"name": "ODSIPredHANDINGACTNO", "type": "TStringField"}, "odsipredresortdate": {"name": "ODSIPredRESORTDATE", "type": "TDateTimeField"}, "odsipredalevpredaddress": {"name": "ODSIPredALEVPREDADDRESS", "type": "TStringField"}, "odsipredalevpredtype": {"name": "ODSIPredALEVPREDTYPE", "type": "TFloatField"}, "odsipredalevpredplatz": {"name": "ODSIPredALEVPREDPLATZ", "type": "TFloatField"}, "odsipredalevownername": {"name": "ODSIPredALEVOWNERNAME", "type": "TStringField"}, "odsipredalevpredcost": {"name": "ODSIPredALEVPREDCOST", "type": "TFloatField"}, "odsipredalevproplawno": {"name": "ODSIPredALEVPROPLAWNO", "type": "TStringField"}, "odsipredalevproplawregno": {"name": "ODSIPredALEVPROPLAWREGNO", "type": "TStringField"}, "odsipredalevcontractno": {"name": "ODSIPredALEVCONTRACTNO", "type": "TStringField"}, "odsipredalevcontractdate": {"name": "ODSIPredALEVCONTRACTDATE", "type": "TDateTimeField"}, "odsipredalevcontractnot": {"name": "ODSIPredALEVCONTRACTNOT", "type": "TStringField"}, "odsipredalevpaperno": {"name": "ODSIPredALEVPAPERNO", "type": "TStringField"}, "odsipredalevpaperdate": {"name": "ODSIPredALEVPAPERDATE", "type": "TDateTimeField"}, "odsipredalevevaluater": {"name": "ODSIPredALEVEVALUATER", "type": "TFloatField"}, "odsipredalevinsurancecompany": {"name": "ODSIPredALEVINSURANCECOMPANY", "type": "TFloatField"}, "odsipredalevinsuranceamount": {"name": "ODSIPredALEVINSURANCEAMOUNT", "type": "TFloatField"}, "odsipredalevinsuranceno": {"name": "ODSIPredALEVINSURANCENO", "type": "TStringField"}, "odsipredalevinsurancedate": {"name": "ODSIPredALEVINSURANCEDATE", "type": "TDateTimeField"}, "odsipredregionid": {"name": "ODSIPredREGIONID", "type": "TFloatField"}, "odsipredalevregionid": {"name": "ODSIPredALEVREGIONID", "type": "TFloatField"}, "odsipredcardid": {"name": "ODSIPredCARDID", "type": "TFloatField"}, "odsipredpledgeinslastdate": {"name": "ODSIPredPLEDGEINSLASTDATE", "type": "TDateTimeField"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label45": {"name": "Label45", "type": "TLabel"}, "datetimepicker7": {"name": "DateTimePicker7", "type": "TDateTimePicker"}, "label46": {"name": "Label46", "type": "TLabel"}, "datetimepicker8": {"name": "DateTimePicker8", "type": "TDateTimePicker"}, "label47": {"name": "Label47", "type": "TLabel"}, "datetimepicker9": {"name": "DateTimePicker9", "type": "TDateTimePicker"}, "label48": {"name": "Label48", "type": "TLabel"}, "datetimepicker10": {"name": "DateTimePicker10", "type": "TDateTimePicker"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "datetimepicker11": {"name": "DateTimePicker11", "type": "TDateTimePicker"}, "datetimepicker12": {"name": "DateTimePicker12", "type": "TDateTimePicker"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "datetimepicker14": {"name": "DateTimePicker14", "type": "TDateTimePicker"}, "datetimepicker15": {"name": "DateTimePicker15", "type": "TDateTimePicker"}, "datetimepicker16": {"name": "DateTimePicker16", "type": "TDateTimePicker"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "bankopendat": {"name": "BankOpenDat", "type": "TDateTimePicker"}, "bankclosedat": {"name": "BankCloseDat", "type": "TDateTimePicker"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "label55": {"name": "Label55", "type": "TLabel"}, "datetimepicker17": {"name": "DateTimePicker17", "type": "TDateTimePicker"}, "label56": {"name": "Label56", "type": "TLabel"}, "datetimepicker18": {"name": "DateTimePicker18", "type": "TDateTimePicker"}, "odsipredyqiymdate": {"name": "ODSIPredYQIYMDATE", "type": "TDateTimeField"}, "odsipredpaperreregdate": {"name": "ODSIPredPAPERREREGDATE", "type": "TDateTimeField"}, "odsipredand1": {"name": "ODSIPredAND1", "type": "TDateTimeField"}, "odsipredand2": {"name": "ODSIPredAND2", "type": "TDateTimeField"}, "odsipredand3": {"name": "ODSIPredAND3", "type": "TDateTimeField"}, "odsipredand4": {"name": "ODSIPredAND4", "type": "TDateTimeField"}, "odsipredalqi1": {"name": "ODSIPredALQI1", "type": "TDateTimeField"}, "odsipredalqi2": {"name": "ODSIPredALQI2", "type": "TDateTimeField"}, "odsipredymd1": {"name": "ODSIPredYMD1", "type": "TDateTimeField"}, "odsipredymd2": {"name": "ODSIPredYMD2", "type": "TDateTimeField"}, "odsipredymd3": {"name": "ODSIPredYMD3", "type": "TDateTimeField"}, "odsipredymd4": {"name": "ODSIPredYMD4", "type": "TDateTimeField"}, "label57": {"name": "Label57", "type": "TLabel"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBLookupComboboxEh"}, "label58": {"name": "Label58", "type": "TLabel"}, "dbediteh14": {"name": "DBEditEh14", "type": "TDBEditEh"}, "button5": {"name": "Button5", "type": "TButton"}, "odsregions": {"name": "ODSRegions", "type": "TOracleDataSet"}, "button6": {"name": "Button6", "type": "TButton"}, "button7": {"name": "Button7", "type": "TButton"}, "odsipredpredarea": {"name": "ODSIPredPREDAREA", "type": "TFloatField"}, "odsipredalevpredarea": {"name": "ODSIPredALEVPREDAREA", "type": "TFloatField"}, "odsarazis": {"name": "ODSArazis", "type": "TOracleDataSet"}, "arazis": {"name": "Arazis", "type": "TDataSource"}, "label44": {"name": "Label44", "type": "TLabel"}, "datetimepicker6": {"name": "DateTimePicker6", "type": "TDateTimePicker"}, "label51": {"name": "Label51", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "datetimepicker13": {"name": "DateTimePicker13", "type": "TDateTimePicker"}, "crdinf": {"name": "crdInf", "type": "TOracleDataSet"}, "crdinfpurposeofcredit": {"name": "crdInfPURPOSEOFCREDIT", "type": "TStringField"}, "label59": {"name": "Label59", "type": "TLabel"}, "label60": {"name": "Label60", "type": "TLabel"}, "label61": {"name": "Label61", "type": "TLabel"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "odsipredtickno": {"name": "ODSIPredTICKNO", "type": "TStringField"}, "odsipredbuildid": {"name": "ODSIPredBUILDID", "type": "TFloatField"}, "odsipredprofitid": {"name": "ODSIPredPROFITID", "type": "TFloatField"}, "odsipredreisterid": {"name": "ODSIPredREISTERID", "type": "TFloatField"}, "buildingcompds": {"name": "buildingcompds", "type": "TDataSource"}, "profitdes": {"name": "profitdes", "type": "TDataSource"}, "reisterds": {"name": "reisterds", "type": "TDataSource"}, "buildingcomp": {"name": "buildingcomp", "type": "TOracleDataSet"}, "profit": {"name": "profit", "type": "TOracleDataSet"}, "reister": {"name": "reister", "type": "TOracleDataSet"}, "buildingcompid": {"name": "buildingcompID", "type": "TFloatField"}, "buildingcompname": {"name": "buildingcompNAME", "type": "TStringField"}, "profitid": {"name": "profitID", "type": "TFloatField"}, "profitname": {"name": "profitNAME", "type": "TStringField"}, "reisterid": {"name": "reisterID", "type": "TFloatField"}, "reistername": {"name": "reisterNAME", "type": "TStringField"}, "ednewname": {"name": "edNewName", "type": "TEdit"}}, {});
  U.init(async () => {
    U.const("rs_ipoteka_predmet", "%s nömrəli kreditin ipoteka predmeti");
    U.var_("frmIpPredMain", null, "TfrmIpPredMain");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmIpPredMain")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmIpPredMain", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "edNewName"))]))))) {
    await $.set(C, "edNewName", (await $.mcall((await $.v(C, "TEdit")), "Create", [Self])));
  }
  {
    const $t1 = (await $.wobj(C, "edNewName"));
    await $.wset([$t1], "Parent", (await $.wv([$t1], "Panel1", C, false)), C);
    await $.wset([$t1], "OnKeyDown", (await $.wv([$t1], "edNewNameClick", C, true)), C);
    await $.wset([$t1], "Visible", (await $.wv([$t1], "False", C, false)), C);
  }
  { const $t2 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
      $t3 = false;
      if (!($.ord(L0["i"]) <= $.ord($t2))) break;
      if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
      }
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "Localizer")), "Caption", (await $.call(C, "Format", [(await $.v(C, "rs_ipoteka_predmet")), [(await $.v(C, "Get_SelectedCrdNo"))]])));
  {
    const $t4 = (await $.wobj(C, "crdInf"));
    if ($.truthy((await $.wv([$t4], "active", C, false)))) {
      await $.stmt($.wcall([$t4], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t4], "SetVariable", ["crdid", (await $.wv([$t4], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t4], "Open", [], C));
  }
  {
    const $t5 = (await $.wobj(C, "ODSIPred"));
    if ($.truthy((await $.wv([$t5], "active", C, false)))) {
      await $.stmt($.wcall([$t5], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t5], "SetVariable", ["creditid", (await $.wv([$t5], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.stmt($.wcall([$t5], "edit", [], C));
    if ($.truthy((await $.mv((await $.wv([$t5], "ODSIPredPAPERNO", C, false)), "IsNull")))) {
      await $.mset((await $.wcall([$t5], "fieldByName", ["PAPERNO"], C)), "AsString", (await $.mv((await $.mcall((await $.wv([$t5], "crdInf", C, false)), "fieldByName", ["PURPOSEOFCREDIT"])), "AsString")));
    }
  }
  await $.mcall((await $.v(C, "ODSTypes")), "close", []);
  await $.mcall((await $.v(C, "ODSQiyms")), "close", []);
  await $.mcall((await $.v(C, "ODSInsurances")), "close", []);
  await $.mcall((await $.v(C, "ODSRegions")), "close", []);
  await $.mcall((await $.v(C, "ODSArazis")), "Close", []);
  await $.mcall((await $.v(C, "ODSTypes")), "Open", []);
  await $.mcall((await $.v(C, "ODSQiyms")), "Open", []);
  await $.mcall((await $.v(C, "ODSInsurances")), "open", []);
  await $.mcall((await $.v(C, "ODSRegions")), "open", []);
  await $.mcall((await $.v(C, "ODSArazis")), "Open", []);
  await $.mcall((await $.v(C, "buildingcomp")), "Open", []);
  await $.mcall((await $.v(C, "profit")), "Open", []);
  await $.mcall((await $.v(C, "reister")), "Open", []);
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  await $.mset((await $.v(C, "btnSave")), "Enabled", true);
  await $.stmt($.call(C, "FillDates", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "FillDates", async function FillDates(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredCONTRACTDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DBEdit11")), "Date", (await $.mv((await $.v(C, "ODSIPredCONTRACTDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DBEdit11")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredPAPERDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DBEdit13")), "Date", (await $.mv((await $.v(C, "ODSIPredPAPERDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DBEdit13")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredINSURANCEDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DBEdit16")), "Date", (await $.mv((await $.v(C, "ODSIPredINSURANCEDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DBEdit16")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredALEVCONTRACTDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker3")), "Date", (await $.mv((await $.v(C, "ODSIPredCONTRACTDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker3")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredALEVPAPERDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker4")), "Date", (await $.mv((await $.v(C, "ODSIPredPAPERDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker4")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredALEVINSURANCEDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker5")), "Date", (await $.mv((await $.v(C, "ODSIPredINSURANCEDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker5")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredBANKOPENDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "BankOpenDat")), "Date", (await $.mv((await $.v(C, "ODSIPredBANKOPENDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "BankOpenDat")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredBANKCLOSEDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "BankCloseDat")), "Date", (await $.mv((await $.v(C, "ODSIPredBANKCLOSEDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "BankCloseDat")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredRESORTDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker2")), "Date", (await $.mv((await $.v(C, "ODSIPredRESORTDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker2")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredHANDINGACTDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker1")), "Date", (await $.mv((await $.v(C, "ODSIPredHANDINGACTDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker1")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredPLEDGEINSLASTDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker6")), "Date", (await $.mv((await $.v(C, "ODSIPredPLEDGEINSLASTDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker6")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredYQIYMDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker17")), "Date", (await $.mv((await $.v(C, "ODSIPredYQIYMDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker17")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredPAPERREREGDATE")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker18")), "Date", (await $.mv((await $.v(C, "ODSIPredPAPERREREGDATE")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker18")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredAND1")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker7")), "Date", (await $.mv((await $.v(C, "ODSIPredAND1")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker7")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredAND2")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker8")), "Date", (await $.mv((await $.v(C, "ODSIPredAND2")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker8")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredAND3")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker9")), "Date", (await $.mv((await $.v(C, "ODSIPredAND3")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker9")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredAND4")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker10")), "Date", (await $.mv((await $.v(C, "ODSIPredAND4")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker10")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredALQI1")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker11")), "Date", (await $.mv((await $.v(C, "ODSIPredALQI1")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker11")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredALQI2")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker12")), "Date", (await $.mv((await $.v(C, "ODSIPredALQI2")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker12")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredYMD1")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker13")), "Date", (await $.mv((await $.v(C, "ODSIPredYMD1")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker13")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredYMD2")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker14")), "Date", (await $.mv((await $.v(C, "ODSIPredYMD2")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker14")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredYMD3")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker15")), "Date", (await $.mv((await $.v(C, "ODSIPredYMD3")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker15")), "Date", (await $.v(C, "Date")));
  }
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "ODSIPredYMD4")), "AsString"))])), ""))) {
    await $.mset((await $.v(C, "DateTimePicker16")), "Date", (await $.mv((await $.v(C, "ODSIPredYMD4")), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker16")), "Date", (await $.v(C, "Date")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmIpPredMain", "SaveChg", async function SaveChg(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "ODSIPredCONTRACTDATE")), "AsDateTime", (await $.call(C, "Int", [(await $.mv((await $.v(C, "DBEdit11")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredPAPERDATE")), "AsDateTime", (await $.call(C, "Int", [(await $.mv((await $.v(C, "DBEdit13")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredINSURANCEDATE")), "AsDateTime", (await $.call(C, "Int", [(await $.mv((await $.v(C, "DBEdit16")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredALEVCONTRACTDATE")), "AsDateTime", (await $.call(C, "Int", [(await $.mv((await $.v(C, "DateTimePicker3")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredALEVPAPERDATE")), "AsDateTime", (await $.call(C, "Int", [(await $.mv((await $.v(C, "DateTimePicker4")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredALEVINSURANCEDATE")), "AsDateTime", (await $.call(C, "Int", [(await $.mv((await $.v(C, "DateTimePicker5")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredBANKOPENDATE")), "AsDateTime", (await $.call(C, "Int", [(await $.mv((await $.v(C, "BankOpenDat")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredBANKCLOSEDATE")), "AsDateTime", (await $.call(C, "Int", [(await $.mv((await $.v(C, "BankCloseDat")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredRESORTDATE")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker2")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredHANDINGACTDATE")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker1")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredPLEDGEINSLASTDATE")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker6")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredYQIYMDATE")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker17")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredPAPERREREGDATE")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker18")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredAND1")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker7")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredAND2")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker8")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredAND3")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker9")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredAND4")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker10")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredALQI1")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker11")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredALQI2")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker12")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredYMD1")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker13")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredYMD2")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker14")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredYMD3")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker15")), "Date"))])));
  await $.mset((await $.v(C, "ODSIPredYMD4")), "AsDateTime", (await $.call(C, "int", [(await $.mv((await $.v(C, "DateTimePicker16")), "Date"))])));
  await $.stmt((await $.mcall((await $.v(C, "OPKIP")), "CallProcedure", ["ipAddEditInfo", [(await $.v(C, "Get_SelectedCrdID")), (await $.mv((await $.v(C, "ODSIPredCARDID")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredPREDADDRESS")), "AsString")), (await $.mv((await $.v(C, "ODSIPredPREDTYPE")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredPREDPLATZ")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredOWNERNAME")), "AsString")), (await $.mv((await $.v(C, "ODSIPredPREDCOST")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredPROPLAWNO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredPROPLAWREGNO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredCONTRACTNO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredCONTRACTDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredCONTRACTNOT")), "AsString")), (await $.mv((await $.v(C, "ODSIPredPAPERNO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredPAPERDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredEVALUATER")), "AsString")), (await $.mv((await $.v(C, "ODSIPredINSURANCECOMPANY")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredINSURANCEAMOUNT")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredINSURANCENO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredINSURANCEDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredBANKOPENDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredBANKCLOSEDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredGIVENFLATAMT")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredHANDINGACTDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredHANDINGACTNO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredRESORTDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredALEVPREDADDRESS")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVPREDTYPE")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredALEVPREDPLATZ")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredALEVOWNERNAME")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVPREDCOST")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredALEVPROPLAWNO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVPROPLAWREGNO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVCONTRACTNO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVCONTRACTDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredALEVCONTRACTNOT")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVPAPERNO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVPAPERDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredALEVEVALUATER")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVINSURANCECOMPANY")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredALEVINSURANCEAMOUNT")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredALEVINSURANCENO")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVINSURANCEDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredREGIONID")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredALEVREGIONID")), "AsFloat")), (await $.mv((await $.v(C, "ODSIPredPLEDGEINSLASTDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredYQIYMDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredPAPERREREGDATE")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredAND1")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredAND2")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredAND3")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredAND4")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredALQI1")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredALQI2")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredYMD1")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredYMD2")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredYMD3")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredYMD4")), "AsDateTime")), (await $.mv((await $.v(C, "ODSIPredPREDAREA")), "AsString")), (await $.mv((await $.v(C, "ODSIPredALEVPREDAREA")), "AsString")), (await $.mv((await $.v(C, "ODSIPredBUILDID")), "asInteger")), (await $.mv((await $.v(C, "ODSIPredPROFITID")), "asInteger")), (await $.mv((await $.v(C, "ODSIPredREISTERID")), "asInteger"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmIpPredMain", "btnSaveClick", async function btnSaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "savechg", []));
  await $.mset(L0["sender"], "enabled", false);
  {
    const $t6 = (await $.wobj(C, "ODSIPred"));
    if ($.truthy((await $.wv([$t6], "active", C, false)))) {
      await $.stmt($.wcall([$t6], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t6], "SetVariable", ["creditid", (await $.wv([$t6], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t6], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btnSave")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIPPredMain", "edNewNameClick", async function edNewNameClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "procname": '', "i": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.ne((await $.call(C, "Trim", [(await $.mv((L0["sender"]), "Text"))])), "")), async () => ($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))))) {
    if ($.truthy($.gt((await $.mv((L0["sender"]), "Left")), 200))) {
      L0["procname"] = "ipAddIns";
    } else {
      if ($.truthy($.lt((await $.v(C, "top")), 160))) {
        L0["procname"] = "ipAddType";
      } else {
        L0["procname"] = "ipAddQiym";
      }
    }
    await $.stmt((await $.mcall((await $.v(C, "OPKIP")), "CallProcedure", [L0["procname"], [(await $.mv((L0["sender"]), "Text"))]])));
    if ($.truthy($.lt((await $.mv((L0["sender"]), "Left")), 200))) {
      if ($.truthy($.lt((await $.v(C, "top")), 160))) {
        await $.mcall((await $.v(C, "ODSTypes")), "Refresh", []);
      } else {
        await $.mcall((await $.v(C, "ODSQiyms")), "Refresh", []);
      }
    } else {
      await $.mcall((await $.v(C, "ODSInsurances")), "Refresh", []);
    }
    await $.mset(L0["sender"], "Visible", false);
    { const $t7 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t8 = true;
      for (;;) {
        if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
        $t8 = false;
        if (!($.ord(L0["i"]) <= $.ord($t7))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  if ($.truthy(($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))) {
    await $.mset(L0["sender"], "Visible", false);
    { const $t9 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t10 = true;
      for (;;) {
        if (!$t10) { L0["i"] = $.succ(L0["i"], 1); }
        $t10 = false;
        if (!($.ord(L0["i"]) <= $.ord($t9))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmIpPredMain", "spbTypesClick", async function spbTypesClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "datasetname": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["datasetname"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "Name")), 4, $.sub((await $.call(C, "length", [(await $.mv((L0["sender"]), "Name"))])), 3)]));
  {
    const $t11 = (await $.wobj(C, "edNewName"));
    await $.wset([$t11], "Text", "", C);
    await $.wset([$t11], "width", 224, C);
    if ($.truthy($.eq((await $.wv([$t11], "DataSetName", { get: async () => L0["datasetname"], set: async (v) => { L0["datasetname"] = v; }, local: true }, false)), "Types"))) {
      await $.wset([$t11], "Left", 8, C);
      await $.wset([$t11], "top", (await $.mv(((await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Top")), C);
    } else {
      if ($.truthy($.eq((await $.wv([$t11], "DataSetName", { get: async () => L0["datasetname"], set: async (v) => { L0["datasetname"] = v; }, local: true }, false)), "Qiyms"))) {
        await $.wset([$t11], "Left", 8, C);
        await $.wset([$t11], "top", (await $.mv(((await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Top")), C);
      } else {
        await $.wset([$t11], "Left", 264, C);
        await $.wset([$t11], "top", (await $.mv(((await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Top")), C);
      }
    }
    await $.wset([$t11], "Visible", (await $.wv([$t11], "True", C, false)), C);
  }
  { const $t12 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t13 = true;
    for (;;) {
      if (!$t13) { L0["i"] = $.succ(L0["i"], 1); }
      $t13 = false;
      if (!($.ord(L0["i"]) <= $.ord($t12))) break;
      if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", false);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "DBEdit16Click", async function DBEdit16Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ODSIPredINSURANCEDATE")), "AsDateTime", (await $.mv((L0["sender"]), "Date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "DBEdit13Click", async function DBEdit13Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ODSIPredPAPERDATE")), "AsDateTime", (await $.mv((L0["sender"]), "Date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "DBEdit11Click", async function DBEdit11Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ODSIPredCONTRACTDATE")), "AsDateTime", (await $.mv((L0["sender"]), "Date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "qrpIPYM"))]))))) {
      await $.set(C, "qrpIPYM", (await $.mcall((await $.v(C, "TqrpIPYM")), "Create", [Self])));
    }
  } catch ($t14) {
    $.rethrowControl($t14);
    if ($.excIs($t14, "Exception")) {
      L0["e"] = $.exc($t14);
      await $.stmt((await $.call(C, "LogError", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t14; }
  }
  {
    const $t15 = (await $.wobj(C, "qrpIPYM"));
    const $t16 = (await $.wv([$t15], "ODSYMInfo", C, false));
    await $.stmt($.wcall([$t15, $t16], "Close", [], C));
    await $.stmt($.wcall([$t15, $t16], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t15, $t16], "SetVariable", ["CREDITID", (await $.wv([$t15, $t16], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t15, $t16], "Open", [], C));
    await $.mset((await $.wv([$t15, $t16], "lbYMStrAmount", C, false)), "Caption", (await $.wcall([$t15, $t16], "CurrencyToHR_Azeri", [(await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSYMInfo", C, false)), "FieldByName", ["YMAMOUNT"])), "AsFloat")), 2, [0]], C)));
    await $.mset((await $.wv([$t15, $t16], "lbYMStrAmount2", C, false)), "Caption", (await $.wcall([$t15, $t16], "CurrencyToHR_Azeri", [(await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSYMInfo", C, false)), "FieldByName", ["YMAMOUNT"])), "AsFloat")), 2, [0]], C)));
    if ($.truthy($.ne((await $.mv((await $.wv([$t15, $t16], "edymdesc", C, false)), "Text")), ""))) {
      await $.mset((await $.wv([$t15, $t16], "lbDesc1", C, false)), "Caption", (await $.mv((await $.wv([$t15, $t16], "edymdesc", C, false)), "Text")));
      await $.mset((await $.wv([$t15, $t16], "lbDesc2", C, false)), "Caption", (await $.mv((await $.wv([$t15, $t16], "edymdesc", C, false)), "Text")));
    } else {
      await $.mset((await $.wv([$t15, $t16], "lbDesc1", C, false)), "Caption", $.add($.add($.add($.add($.add($.add($.add($.add($.add("Əsas: Təhvil - Təslim aktı № ", (await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSIPred", C, false)), "FieldByName", ["HANDINGACTNO"])), "AsString"))), ", "), (await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSYMInfo", C, false)), "FieldByName", ["IPDATE"])), "AsString"))), " il"), "; "), "İpoteka kagızı "), (await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSIPred", C, false)), "FieldByName", ["PAPERNO"])), "AsString"))), ", "), (await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSIPred", C, false)), "FieldByName", ["PAPERREREGDATE"])), "AsString"))));
      await $.mset((await $.wv([$t15, $t16], "lbDesc2", C, false)), "Caption", $.add($.add($.add($.add($.add($.add($.add($.add("Əsas: Təhvil - Təslim aktı № ", (await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSIPred", C, false)), "FieldByName", ["HANDINGACTNO"])), "AsString"))), ", "), (await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSYMInfo", C, false)), "FieldByName", ["IPDATE"])), "AsString"))), "; "), "İpoteka kagızı "), (await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSIPred", C, false)), "FieldByName", ["PAPERNO"])), "AsString"))), ", "), (await $.mv((await $.mcall((await $.wv([$t15, $t16], "ODSIPred", C, false)), "FieldByName", ["PAPERREREGDATE"])), "AsString"))));
    }
    await $.mset((await $.wv([$t15, $t16], "lbNum1", C, false)), "Caption", (await $.mv((await $.wv([$t15, $t16], "edymno", C, false)), "Text")));
    await $.mset((await $.wv([$t15, $t16], "lbNum2", C, false)), "Caption", (await $.mv((await $.wv([$t15, $t16], "edymno", C, false)), "Text")));
    await $.stmt($.wcall([$t15, $t16], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "qrpIPYM"))]))))) {
      await $.set(C, "qrpIPYM", (await $.mcall((await $.v(C, "TqrpIPYM")), "Create", [Self])));
    }
  } catch ($t17) {
    $.rethrowControl($t17);
    if ($.excIs($t17, "Exception")) {
      L0["e"] = $.exc($t17);
      await $.stmt((await $.call(C, "LogError", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t17; }
  }
  {
    const $t18 = (await $.wobj(C, "qrpIPYM"));
    const $t19 = (await $.wv([$t18], "ODSYMInfo", C, false));
    await $.stmt($.wcall([$t18, $t19], "Close", [], C));
    await $.stmt($.wcall([$t18, $t19], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t18, $t19], "SetVariable", ["CREDITID", (await $.wv([$t18, $t19], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t18, $t19], "Open", [], C));
    await $.stmt((await $.mcall((await $.wv([$t18, $t19], "OPKIP", C, false)), "CallProcedure", ["tmaddnewticket", [(await $.wv([$t18, $t19], "Get_SelectedCrdID", C, false)), $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("Təhvil - Təslim aktı № ", (await $.mv((await $.mcall((await $.wv([$t18, $t19], "ODSIPred", C, false)), "FieldByName", ["HANDINGACTNO"])), "AsString"))), ", "), (await $.mv((await $.mcall((await $.wv([$t18, $t19], "ODSYMInfo", C, false)), "FieldByName", ["IPDATE"])), "AsString"))), "; "), "İpoteka kagızı "), (await $.mv((await $.mcall((await $.wv([$t18, $t19], "ODSIPred", C, false)), "FieldByName", ["PAPERNO"])), "AsString"))), ", "), (await $.mv((await $.mcall((await $.wv([$t18, $t19], "ODSIPred", C, false)), "FieldByName", ["PAPERREREGDATE"])), "AsString"))), "\r\n"), "İpoteka kağızına əsasən ipoteka kreditinin yenidən maliyyələşdirilməsi üçün.")]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "edymnoKeyDown", async function edymnoKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.or_(($.lt((await L0["key"].get()), 48)), async () => ($.gt((await L0["key"].get()), 57)))))) {
    await L0["key"].set(0);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TfrmIpPredMain", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "qrpReestrInfo"))]))))) {
      await $.set(C, "qrpReestrInfo", (await $.mcall((await $.v(C, "TqrpReestrInfo")), "Create", [Self])));
    }
  } catch ($t20) {
    $.rethrowControl($t20);
    if ($.excIs($t20, "Exception")) {
      L0["e"] = $.exc($t20);
      await $.stmt((await $.call(C, "LogError", [(await $.mv(L0["e"], "Message"))])));
    }
    else { throw $t20; }
  }
  {
    const $t21 = (await $.wobj(C, "qrpReestrInfo"));
    const $t22 = (await $.wv([$t21], "ODSReestrInfo", C, false));
    await $.stmt($.wcall([$t21, $t22], "Close", [], C));
    await $.stmt($.wcall([$t21, $t22], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t21, $t22], "SetVariable", ["CREDITID", (await $.wv([$t21, $t22], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t21, $t22], "Open", [], C));
    await $.mset((await $.wv([$t21, $t22], "lbTitle", C, false)), "Caption", (await $.wcall([$t21, $t22], "format", [(await $.wv([$t21, $t22], "fmtTitle", C, false)), [(await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["YMBANK"], C)), "AsString")), (await $.mv((await $.wcall([$t21, $t22], "FieldByName", ["MKBANK"], C)), "AsString")), (await $.wcall([$t21, $t22], "DateToStr", [(await $.wv([$t21, $t22], "date", C, false))], C)), "9"]], C)));
    await $.mset((await $.wv([$t21, $t22], "lbNo", C, false)), "Caption", (await $.wcall([$t21, $t22], "format", [(await $.wv([$t21, $t22], "fmtNo", C, false)), [(await $.mv((await $.wv([$t21, $t22], "edymno", C, false)), "text"))]], C)));
    await $.mset((await $.wv([$t21, $t22], "lbN", C, false)), "Caption", (await $.wcall([$t21, $t22], "CurrencyToHR_Azeri", [(await $.mv((await $.mcall((await $.wv([$t21, $t22], "ODSReestrInfo", C, false)), "FieldByName", ["NEWFINANCEAMOUNT"])), "AsFloat")), 2, [0]], C)));
    await $.mset((await $.wv([$t21, $t22], "lbC", C, false)), "Caption", (await $.wcall([$t21, $t22], "CurrencyToHR_Azeri", [(await $.mv((await $.mcall((await $.wv([$t21, $t22], "ODSReestrInfo", C, false)), "FieldByName", ["YMAMOUNT"])), "AsFloat")), 2, [0]], C)));
    await $.stmt($.wcall([$t21, $t22], "Preview", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.wobj(C, "ODSExec"));
    await $.stmt((await $.wcall([$t23], "SetVariable", ["cid", (await $.wv([$t23], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t23], "ExecSQL", [], C));
  }
  {
    const $t24 = (await $.wobj(C, "ODSIPred"));
    if ($.truthy((await $.wv([$t24], "active", C, false)))) {
      await $.stmt($.wcall([$t24], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t24], "SetVariable", ["creditid", (await $.wv([$t24], "Get_SelectedCrdID", C, false))], C)));
    await $.stmt($.wcall([$t24], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "savechg", []));
  await $.stmt((await $.mcall((await $.v(C, "OPKIP")), "CallProcedure", ["ipaddnewcard", [(await $.v(C, "Get_SelectedCrdID"))]])));
  {
    const $t25 = (await $.wobj(C, "Panel1"));
    const $t26 = (await $.wv([$t25], "odsipred", C, false));
    await $.stmt($.wcall([$t25, $t26], "Refresh", [], C));
    await $.wset([$t25, $t26], "recno", (await $.wv([$t25, $t26], "RecordCount", C, false)), C);
    await $.wset([$t25, $t26], "index", (await $.wv([$t25, $t26], "RecordCount", C, false)), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
    await $.wset([$t25, $t26], "TabIndex", (await $.mcall((await $.wv([$t25, $t26], "Tabs", C, false)), "Add", [(await $.wcall([$t25, $t26], "Format", ["Kart №%d", [$.sub((await $.wv([$t25, $t26], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1)]], C))])), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "Panel1Change", async function Panel1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "savechg", []));
  await $.mset((await $.v(C, "ODSIPred")), "RecNo", $.add((await $.mv((L0["sender"]), "TabIndex")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "Button7Click", async function Button7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "OPKIP")), "CallProcedure", ["ipdeletecard", [(await $.v(C, "get_selectedcrdid")), (await $.mv((await $.v(C, "ODSIPredCARDID")), "AsVariant"))]])));
  await $.mcall((await $.v(C, "ODSIPred")), "Refresh", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "Panel1")), "Tabs")), "Count")), 1))) {
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "Panel1")), "Tabs")), "Clear", []);
  { const $t27 = $.sub((await $.mv((await $.v(C, "ODSIPred")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t28 = true;
    for (;;) {
      if (!$t28) { L0["index"] = $.succ(L0["index"], 1); }
      $t28 = false;
      if (!($.ord(L0["index"]) <= $.ord($t27))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "panel1")), "Tabs")), "Add", [(await $.call(C, "Format", ["Kart №%d", [L0["index"]]]))])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIpPredMain", "ODSIPredAfterOpen", async function ODSIPredAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t29 = L0["dataset"];
    const $t30 = (await $.wv([$t29], "Panel1", C, false));
    await $.mcall((await $.wv([$t29, $t30], "Tabs", C, false)), "Clear", []);
    { const $t31 = $.sub((await $.wv([$t29, $t30], "RecordCount", C, false)), 1);
      await $.wset([$t29, $t30], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t32 = true;
      for (;;) {
        if (!$t32) { await $.wset([$t29, $t30], "Index", $.succ((await $.wv([$t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t32 = false;
        if (!($.ord((await $.wv([$t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t31))) break;
        await $.stmt((await $.mcall((await $.wv([$t29, $t30], "Tabs", C, false)), "Add", [(await $.wcall([$t29, $t30], "Format", ["Kart №%d", [(await $.wv([$t29, $t30], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]], C))])));
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.wv([$t29, $t30], "recordcount", C, false)), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t29, $t30], "tabs", C, false)), "Add", [((await $.wcall([$t29, $t30], "Format", ["Kart №%d", [0]], C)))])));
    }
    await $.stmt($.wcall([$t29, $t30], "First", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TfrmIpPredMain", "PageControl1Change", async function PageControl1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ODSIPred")), "RecNo", 1);
  await $.mset((await $.v(C, "Panel1")), "TabIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmIpPredMain", (await $.mcall((await $.v(C, "TfrmIpPredMain")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
