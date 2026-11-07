// Generated from BPMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("BPMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "variants", "StdCtrls", "ExtCtrls", "Mask", "DBCtrls", "DBCtrlsEh", "ActnList", "DBLookupEh", "Grids", "DBGrids", "Db", "OracleData", "ComCtrls", "CMHintBox", "DBGridEh", "CommonDecls", "sboapiDataModuleImpl", "sbsystem", "BPDataModuleImpl", "SBTranslateProc", "YoneltmeImpl"]);
  const C = [U];
  U.defClass("TBPMainForm", "TForm", {"pcmain": {"name": "pcMain", "type": "TPageControl"}, "tsbp": {"name": "tsBP", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEditEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "editcrdno": {"name": "EditCrdNo", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "dbnumberediteh2": {"name": "DBNumberEditEh2", "type": "TDBNumberEditEh"}, "dbnumberediteh3": {"name": "DBNumberEditEh3", "type": "TDBNumberEditEh"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEditEh"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEditEh"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEditEh"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEditEh"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEditEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "actionslist": {"name": "ActionsList", "type": "TActionList"}, "actionsave": {"name": "ActionSave", "type": "TAction"}, "actiondismis": {"name": "ActionDismis", "type": "TAction"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEditEh"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEditEh"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEditEh"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEditEh"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEditEh"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEditEh"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEditEh"}, "tslm": {"name": "tsLM", "type": "TTabSheet"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "action1": {"name": "Action1", "type": "TAction"}, "action2": {"name": "Action2", "type": "TAction"}, "action3": {"name": "Action3", "type": "TAction"}, "action4": {"name": "Action4", "type": "TAction"}, "action5": {"name": "Action5", "type": "TAction"}, "creditinfo": {"name": "CreditInfo", "type": "TOracleDataSet"}, "dscreditinfo": {"name": "DSCreditInfo", "type": "TDataSource"}, "datasource2": {"name": "DataSource2", "type": "TDataSource"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oracledataset1id": {"name": "OracleDataSet1ID", "type": "TFloatField"}, "oracledataset1creditid": {"name": "OracleDataSet1CREDITID", "type": "TFloatField"}, "oracledataset1protocol": {"name": "OracleDataSet1PROTOCOL", "type": "TFloatField"}, "oracledataset1paragraph": {"name": "OracleDataSet1PARAGRAPH", "type": "TFloatField"}, "oracledataset1grantdate": {"name": "OracleDataSet1GRANTDATE", "type": "TDateTimeField"}, "oracledataset1givedate": {"name": "OracleDataSet1GIVEDATE", "type": "TDateTimeField"}, "oracledataset1measurecode": {"name": "OracleDataSet1MEASURECODE", "type": "TFloatField"}, "oracledataset1totalamount": {"name": "OracleDataSet1TOTALAMOUNT", "type": "TFloatField"}, "oracledataset1maindebt": {"name": "OracleDataSet1MAINDEBT", "type": "TFloatField"}, "oracledataset1num": {"name": "OracleDataSet1NUM", "type": "TFloatField"}, "oracledataset1measuredesc": {"name": "OracleDataSet1MeasureDesc", "type": "TWideStringField"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEditEh"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEditEh"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEditEh"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEditEh"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEditEh"}, "dbnumberediteh4": {"name": "DBNumberEditEh4", "type": "TDBNumberEditEh"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "button5": {"name": "Button5", "type": "TButton"}, "button6": {"name": "Button6", "type": "TButton"}, "button7": {"name": "Button7", "type": "TButton"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "oracledataset2id": {"name": "OracleDataSet2ID", "type": "TFloatField"}, "oracledataset2activeindicator1": {"name": "OracleDataSet2ACTIVEINDICATOR1", "type": "TWideStringField"}, "oracledataset2activeindicator2": {"name": "OracleDataSet2ACTIVEINDICATOR2", "type": "TWideStringField"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "tsgrantt": {"name": "tsGrantT", "type": "TTabSheet"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEditEh"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "edcreditno": {"name": "edCreditNo", "type": "TEdit"}, "gtmachinesdataset": {"name": "GTMachinesDataSet", "type": "TOracleDataSet"}, "gtmachinesdatasetcreditid": {"name": "GTMachinesDataSetCREDITID", "type": "TFloatField"}, "gtmachinesdatasetmachineid": {"name": "GTMachinesDataSetMACHINEID", "type": "TFloatField"}, "gtmachinesdatasetgrantyear": {"name": "GTMachinesDataSetGRANTYEAR", "type": "TIntegerField"}, "gtmachinesdatasetgrantdate": {"name": "GTMachinesDataSetGRANTDATE", "type": "TDateTimeField"}, "gtmachinesdatasetmachineammount": {"name": "GTMachinesDataSetMACHINEAMMOUNT", "type": "TFloatField"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "machinesdataset": {"name": "MachinesDataSet", "type": "TOracleDataSet"}, "machinesdatasrc": {"name": "MachinesDataSrc", "type": "TDataSource"}, "machinesdatasetid": {"name": "MachinesDataSetID", "type": "TFloatField"}, "machinesdatasetmachinename": {"name": "MachinesDataSetMACHINENAME", "type": "TWideStringField"}, "machinesdatasetdescription": {"name": "MachinesDataSetDESCRIPTION", "type": "TWideStringField"}, "grantdatasrc": {"name": "GrantDataSrc", "type": "TDataSource"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "label32": {"name": "Label32", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "dbnumberediteh6": {"name": "DBNumberEditEh6", "type": "TDBNumberEditEh"}, "dbnumberediteh7": {"name": "DBNumberEditEh7", "type": "TDBNumberEditEh"}, "button8": {"name": "Button8", "type": "TButton"}, "button9": {"name": "Button9", "type": "TButton"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEditEh"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "cmhintbox1": {"name": "CMHintBox1", "type": "TCMHintBox"}, "oracledataset2description": {"name": "OracleDataSet2DESCRIPTION", "type": "TWideStringField"}, "button10": {"name": "Button10", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("BPMainForm", null, "TBPMainForm");
    U.var_("CrdID", 0, "Integer");
  });
  U.method("TBPMainForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "BPDataModule", (await $.mcall((await $.v(C, "TBPDataModule")), "Create", [Self])));
  { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
      $t2 = false;
      if (!($.ord(L0["i"]) <= $.ord($t1))) break;
      if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), 12))) {
        await $.mcall((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Open", []);
      }
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "pcMain")), "ActivePageIndex", 0);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BPDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], "BP"))) {
    await $.mcall((await $.v(C, "BPMainForm")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TBPMainForm", "ActionSaveUpdate", async function ActionSaveUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", (await $.mv((await $.mv((await $.v(C, "BPDataModule")), "BPData")), "Modified")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "ActionSaveExecute", async function ActionSaveExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Dövür sahəsi boşdur !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh9")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Qərar sahəsi boşdur !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["RAyon sahəsi boşdur !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Kənt sahəsi boşdur !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.mcall((await $.v(C, "CMHintBox1")), "ShowMessage", ["Məhsulun tipi sahəsi boşdur !"])));
    return L0.result;
  }
  {
    const $t3 = (await $.mv((await $.v(C, "BPDataModule")), "BPData"));
    await $.stmt($.wcall([$t3], "Post", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "ActionDismisExecute", async function ActionDismisExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "BPDataModule")), "BPData"));
    await $.stmt($.wcall([$t4], "Cancel", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "temp": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsformcaption"] = "%s Nömrəli kredit haqqında məlumat";
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["rsformcaption"], [(await $.v(C, "Get_SelectedCrdNo"))]])));
  await $.mset((await $.v(C, "EditCrdNo")), "Text", (await $.v(C, "Get_SelectedCrdNo")));
  await $.mset((await $.v(C, "edCreditNo")), "Text", (await $.v(C, "Get_SelectedCrdNo")));
  await $.set(C, "CrdID", (await $.v(C, "Get_SelectedCrdID")));
  await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
  {
    const $t5 = (await $.wobj(C, "OracleDataSet1"));
    if ($.truthy((await $.wv([$t5], "Active", C, false)))) {
      await $.stmt($.wcall([$t5], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t5], "SetVariable", ["CreditID", (await $.wv([$t5], "CrdID", C, false))], C)));
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  {
    const $t6 = (await $.wobj(C, "CreditInfo"));
    if ($.truthy((await $.wv([$t6], "Active", C, false)))) {
      await $.stmt($.wcall([$t6], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t6], "SetVariable", ["CreditID", (await $.wv([$t6], "CrdID", C, false))], C)));
    await $.stmt($.wcall([$t6], "Open", [], C));
  }
  {
    const $t7 = (await $.wobj(C, "BPDataModule"));
    {
      const $t8 = (await $.wv([$t7], "CreditInfo", C, false));
      if ($.truthy((await $.wv([$t7, $t8], "Active", C, false)))) {
        await $.stmt($.wcall([$t7, $t8], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t7, $t8], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t7, $t8], "SetVariable", ["CreditID", (await $.wv([$t7, $t8], "Get_SelectedCrdID", C, false))], C)));
      await $.stmt($.wcall([$t7, $t8], "Open", [], C));
    }
    {
      const $t9 = (await $.wv([$t7], "PortInf", C, false));
      if ($.truthy((await $.wv([$t7, $t9], "Active", C, false)))) {
        await $.stmt($.wcall([$t7, $t9], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t7, $t9], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t7, $t9], "SetVariable", ["CreditID", (await $.wv([$t7, $t9], "Get_SelectedCrdID", C, false))], C)));
      await $.stmt($.wcall([$t7, $t9], "Open", [], C));
    }
    await $.mset((await $.idx((await $.mv((await $.wv([$t7], "pcMain", C, false)), "Pages")), [2])), "Enabled", $.eq((await $.mv((await $.wv([$t7], "PortInfPROJECTID", C, false)), "AsInteger")), 3));
    {
      const $t10 = (await $.wv([$t7], "GTMachinesDataSet", C, false));
      if ($.truthy((await $.wv([$t7, $t10], "Active", C, false)))) {
        await $.stmt($.wcall([$t7, $t10], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t7, $t10], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t7, $t10], "SetVariable", ["CreditID", (await $.wv([$t7, $t10], "Get_SelectedCrdID", C, false))], C)));
      await $.stmt($.wcall([$t7, $t10], "Open", [], C));
      await $.stmt($.wcall([$t7, $t10], "Edit", [], C));
      if ($.truthy((await $.mv((await $.wcall([$t7, $t10], "FieldByName", ["CreditID"], C)), "IsNull")))) {
        await $.mset((await $.wcall([$t7, $t10], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.wv([$t7, $t10], "Get_SelectedCrdID", C, false)));
      }
    }
    {
      const $t11 = (await $.wv([$t7], "BPData", C, false));
      if ($.truthy((await $.wv([$t7, $t11], "Active", C, false)))) {
        await $.stmt($.wcall([$t7, $t11], "CloseAll", [], C));
      }
      await $.stmt($.wcall([$t7, $t11], "ClearVariables", [], C));
      await $.stmt((await $.wcall([$t7, $t11], "SetVariable", ["CreditID", (await $.wv([$t7, $t11], "Get_SelectedCrdID", C, false))], C)));
      await $.stmt($.wcall([$t7, $t11], "Open", [], C));
      await $.stmt($.wcall([$t7, $t11], "Edit", [], C));
      if ($.truthy((await $.mv((await $.wcall([$t7, $t11], "FieldByName", ["CreditID"], C)), "IsNull")))) {
        await $.mset((await $.wcall([$t7, $t11], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.wv([$t7, $t11], "Get_SelectedCrdID", C, false)));
      }
      if ($.truthy($.not((await $.mv((await $.wcall([$t7, $t11], "FieldByName", ["VillageID"], C)), "IsNull"))))) {
        await $.mset((await $.wv([$t7, $t11], "DBLookupComboboxEh4", C, false)), "KeyValue", (await $.mcall((await $.wv([$t7, $t11], "CM_AKF", C, false)), "CallIntegerFunction", ["BPCreditDistrictID", [(await $.wv([$t7, $t11], "Get_SelectedCrdID", C, false))]])));
        await $.wset([$t7, $t11], "Temp", (await $.mv((await $.wcall([$t7, $t11], "FieldByName", ["VILLAGEID"], C)), "Value")), { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true });
        await $.mset((await $.wv([$t7, $t11], "DBLookupComboboxEh5", C, false)), "KeyValue", (await $.wv([$t7, $t11], "Null", C, false)));
        await $.mset((await $.wv([$t7, $t11], "DBLookupComboboxEh5", C, false)), "KeyValue", (await $.wv([$t7, $t11], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)));
      }
      if ($.truthy($.not((await $.mv((await $.wcall([$t7, $t11], "FieldByName", ["AKPURPOSE"], C)), "IsNull"))))) {
        await $.mset((await $.wv([$t7, $t11], "DBLookupComboboxEh6", C, false)), "KeyValue", (await $.mcall((await $.wv([$t7, $t11], "CM_AKF", C, false)), "CallIntegerFunction", ["BPCreditAKTargetID", [(await $.wv([$t7, $t11], "Get_SelectedCrdID", C, false))]])));
        await $.wset([$t7, $t11], "Temp", (await $.mv((await $.wcall([$t7, $t11], "FieldByName", ["AKPURPOSE"], C)), "Value")), { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true });
        await $.mset((await $.wv([$t7, $t11], "DBLookupComboboxEh7", C, false)), "KeyValue", (await $.wv([$t7, $t11], "Null", C, false)));
        await $.mset((await $.wv([$t7, $t11], "DBLookupComboboxEh7", C, false)), "KeyValue", (await $.wv([$t7, $t11], "Temp", { get: async () => L0["temp"], set: async (v) => { L0["temp"] = v; }, local: true }, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "DBLookupComboboxEh1KeyValueChanged", async function DBLookupComboboxEh1KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t12], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t12], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "DBLookupComboboxEh3Change", async function DBLookupComboboxEh3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue")), 14))) {
    await $.mset((await $.v(C, "Button10")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "Button10")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.wobj(C, "BPDataModule"));
    await $.mcall((await $.wv([$t13], "BPData", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t13], "CreditInfo", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TBPMainForm", "Action1Execute", async function Action1Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Insert", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "Action2Execute", async function Action2Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "Action3Execute", async function Action3Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Cancel", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "Action4Execute", async function Action4Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "Action5Execute", async function Action5Execute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Delete", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "Action2Update", async function Action2Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "OracleDataSet1")), "Active")))) {
    await $.mset(L0["sender"], "Enabled", (await $.mv((await $.v(C, "OracleDataSet1")), "Modified")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "Action5Update", async function Action5Update(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", $.gt((await $.mv((await $.v(C, "OracleDataSet1")), "RecordCount")), 0));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "OracleDataSet1AfterPost", async function OracleDataSet1AfterPost(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "b": null};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t14 = L0["dataset"];
    await $.wset([$t14], "B", (await $.wv([$t14], "GetBookmark", C, false)), { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true });
    await $.stmt($.wcall([$t14], "Refresh", [], C));
    await $.stmt((await $.wcall([$t14], "GotoBookmark", [(await $.wv([$t14], "B", { get: async () => L0["b"], set: async (v) => { L0["b"] = v; }, local: true }, false))], C)));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TBPMainForm", "pcMainChange", async function pcMainChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "crdid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rslmcaption"] = "%s nömrəli müqavilə . Hüquqi tədbirlər";
  L0["rsbpcaption"] = "%s nömrəli kredit üçün Biznes - Plan";
  L0["rsgtcaption"] = "%s nömrəli kreditin Qrant texnikası";
  if ($.truthy($.eq((await $.mv((await $.v(C, "pcMain")), "ActivePage")), (await $.v(C, "tsLM"))))) {
    L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
    await $.mcall((await $.v(C, "OracleDataSet2")), "Open", []);
    {
      const $t15 = (await $.wobj(C, "OracleDataSet1"));
      if ($.truthy((await $.wv([$t15], "Active", C, false)))) {
        await $.stmt($.wcall([$t15], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t15], "SetVariable", ["CreditID", (await $.wv([$t15], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t15], "Open", [], C));
    }
    {
      const $t16 = (await $.wobj(C, "CreditInfo"));
      if ($.truthy((await $.wv([$t16], "Active", C, false)))) {
        await $.stmt($.wcall([$t16], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t16], "SetVariable", ["CreditID", (await $.wv([$t16], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t16], "Open", [], C));
    }
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "pcMain")), "ActivePage")), (await $.v(C, "tsBP"))))) {
      await $.mset((await $.v(C, "EditCrdNo")), "Text", (await $.v(C, "Get_SelectedCrdNo")));
      {
        const $t17 = (await $.wobj(C, "BPDataModule"));
        {
          const $t18 = (await $.wv([$t17], "CreditInfo", C, false));
          if ($.truthy((await $.wv([$t17, $t18], "Active", C, false)))) {
            await $.stmt($.wcall([$t17, $t18], "CloseAll", [], C));
          }
          await $.stmt($.wcall([$t17, $t18], "ClearVariables", [], C));
          await $.stmt((await $.wcall([$t17, $t18], "SetVariable", ["CreditID", (await $.wv([$t17, $t18], "Get_SelectedCrdID", C, false))], C)));
          await $.stmt($.wcall([$t17, $t18], "Open", [], C));
        }
        {
          const $t19 = (await $.wv([$t17], "BPData", C, false));
          if ($.truthy((await $.wv([$t17, $t19], "Active", C, false)))) {
            await $.stmt($.wcall([$t17, $t19], "CloseAll", [], C));
          }
          await $.stmt($.wcall([$t17, $t19], "ClearVariables", [], C));
          await $.stmt((await $.wcall([$t17, $t19], "SetVariable", ["CreditID", (await $.wv([$t17, $t19], "Get_SelectedCrdID", C, false))], C)));
          await $.stmt($.wcall([$t17, $t19], "Open", [], C));
          await $.stmt($.wcall([$t17, $t19], "Edit", [], C));
          if ($.truthy((await $.mv((await $.wcall([$t17, $t19], "FieldByName", ["CreditID"], C)), "IsNull")))) {
            await $.mset((await $.wcall([$t17, $t19], "FieldByName", ["CreditID"], C)), "AsInteger", (await $.wv([$t17, $t19], "Get_SelectedCrdID", C, false)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "OracleDataSet1AfterInsert", async function OracleDataSet1AfterInsert(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["dataset"]);
  await $.mset((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["CreditID"])), "AsInteger", (await $.v(C, "Get_SelectedCrdID")));
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TBPMainForm", "Button10Click", async function Button10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "YoneltmeFrm", (await $.mcall((await $.v(C, "TYoneltmeFrm")), "Create", [Self])));
  await $.mcall((await $.v(C, "YoneltmeFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "Button8Click", async function Button8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GTMachinesDataSet")), "Post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TBPMainForm", "Button9Click", async function Button9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GTMachinesDataSet")), "Cancel", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "BPMainForm", (await $.mcall((await $.v(C, "TBPMainForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
