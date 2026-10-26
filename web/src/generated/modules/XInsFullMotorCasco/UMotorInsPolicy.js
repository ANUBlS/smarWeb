// Generated from UMotorInsPolicy.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UMotorInsPolicy", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Mask", "DBCtrls", "Buttons", "ExtCtrls", "DB", "HintBox", "INSWordExporter", "DataUnitFullMotor"]);
  const C = [U];
  U.defClass("TFormPolicy", "TForm", {"groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "enum": {"name": "ENum", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label30": {"name": "Label30", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "enumberp": {"name": "ENumberP", "type": "TDBEdit"}, "etotalmedical": {"name": "ETotalMedical", "type": "TDBEdit"}, "etotallimit": {"name": "ETotalLimit", "type": "TDBEdit"}, "elimitper": {"name": "ELimitPer", "type": "TDBEdit"}, "emedicalexpen": {"name": "EMedicalExpen", "type": "TDBEdit"}, "epremiuumins": {"name": "EPremiuumIns", "type": "TDBEdit"}, "inswordexporter1": {"name": "INSWordExporter1", "type": "TINSWordExporter"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FormPolicy", null, "TFormPolicy");
  });
  U.method("TFormPolicy", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "DataModuleFullMotor"));
    await $.mcall((await $.wv([$t1], "Policy", C, false)), "Post", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "Policy", C, false)), "RefreshRecord", [])));
    {
      const $t2 = (await $.wv([$t1], "ODSContracts", C, false));
      if ($.truthy($.in_((await $.wv([$t1, $t2], "State", C, false)), [(await $.wv([$t1, $t2], "dsEdit", C, false)), (await $.wv([$t1, $t2], "dsInsert", C, false))]))) {
        await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["policy_id"], C)), "asFloat", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Policy", C, false)), "FieldByName", ["id"])), "asFloat")));
        await $.stmt($.wcall([$t1, $t2], "Post", [], C));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormPolicy", "LoadData", async function LoadData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t3 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Policy"));
    await $.mset((await $.wv([$t3], "ENum", C, false)), "Text", (await $.mv((await $.wcall([$t3], "FieldByName", ["POLICYNUM"], C)), "AsString")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormPolicy", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPolicy", "DBLookupComboBox1KeyPress", async function DBLookupComboBox1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t4 = L0["sender"];
        await $.stmt((await $.wcall([$t4], "SelectNext", [(await $.wv([$t4], "ActiveControl", C, false)), (await $.wv([$t4], "False", C, false)), (await $.wv([$t4], "True", C, false))], C)));
      }
    } else {
      {
        const $t5 = L0["sender"];
        await $.stmt((await $.wcall([$t5], "SelectNext", [(await $.wv([$t5], "ActiveControl", C, false)), (await $.wv([$t5], "True", C, false)), (await $.wv([$t5], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPolicy", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["action"].set((await $.v(C, "cafree")));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormPolicy", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "DataModuleFullMotor"));
    await $.mcall((await $.wv([$t6], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t6], "Suggestionmk_id", C, false)), "value"))])));
    await $.mcall((await $.wv([$t6], "ODSContracts", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t6], "Policy", C, false)), "State")), (await $.wv([$t6], "dsEdit", C, false))))) {
      await $.wset([$t6], "Caption", $.add((await $.wv([$t6], "Caption", C, false)), "  (redakte)"), C);
      await $.mset((await $.wv([$t6], "btPrint", C, false)), "Enabled", (await $.wv([$t6], "true", C, false)));
      await $.mset((await $.wv([$t6], "btApply", C, false)), "Enabled", (await $.wv([$t6], "true", C, false)));
    } else {
      await $.wset([$t6], "Caption", $.add((await $.wv([$t6], "Caption", C, false)), "  (elave etmek)"), C);
    }
  }
  await $.stmt((await $.call(C, "LoadData", [])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPolicy", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveData", []));
  {
    const $t7 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Policy"));
    if ($.truthy($.in_((await $.wv([$t7], "State", C, false)), [(await $.wv([$t7], "dsInsert", C, false)), (await $.wv([$t7], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t7], "Post", [], C));
    }
    await $.stmt($.wcall([$t7], "RefreshRecord", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPolicy", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Emeliyyat aparilsin?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.call(C, "AddTransh", [])));
  }
  {
    const $t8 = (await $.v(C, "INSWordExporter1"));
    const $t9 = (await $.wv([$t8], "DataModuleFullMotor", C, false));
    await $.stmt((await $.mcall((await $.wv([$t8, $t9], "AValute", C, false)), "Locate", ["valute", (await $.mv((await $.wv([$t8, $t9], "ODSCOntractsValute_ID", C, false)), "Value")), []])));
    await $.stmt((await $.mcall((await $.wv([$t8, $t9], "Ins_PRep", C, false)), "Locate", ["ID", (await $.mv((await $.wv([$t8, $t9], "Ins_MotorFullID", C, false)), "Value")), []])));
    await $.wset([$t8, $t9], "FileName", $.add((await $.wcall([$t8, $t9], "ExtractFilePath", [(await $.mv((await $.wv([$t8, $t9], "Application", C, false)), "ExeName"))], C)), "\\MotorFullPolicys.doc"), C);
    await $.stmt((await $.wcall([$t8, $t9], "Open", [(await $.wv([$t8, $t9], "False", C, false))], C)));
    if ($.truthy($.not((await $.mv((await $.wv([$t8, $t9], "Ins_PRepName", C, false)), "IsNull"))))) {
      await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Insured1", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepName", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t8, $t9], "SuggestionEndDate", C, false)), "IsNull"))))) {
      await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Date1", (await $.wcall([$t8, $t9], "DateToStr", [(await $.mv((await $.wv([$t8, $t9], "SuggestionEndDate", C, false)), "value"))], C)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "False", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Date2", (await $.wcall([$t8, $t9], "DateToStr", [(await $.mv((await $.wv([$t8, $t9], "SuggestionEndDate", C, false)), "value"))], C)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "False", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    }
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Agent", (await $.mv((await $.wv([$t8, $t9], "ODSAgentsName", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["PolicyN", (await $.mv((await $.wv([$t8, $t9], "ODSContractsPolicy_Num", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Beneficiary", (await $.mv((await $.wv([$t8, $t9], "ODSBeneficiaryName", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepName", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["AInsured", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepAddress", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["TInsured", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepPhone", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Geo", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuranceGeographicalLimit", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Model", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuredModel", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Year", (await $.wcall([$t8, $t9], "InTToStr", [(await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuredoutputYear", C, false)), "value"))], C)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Color", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuredColor", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Type", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuredType", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Capacity", (await $.wcall([$t8, $t9], "IntToStr", [(await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuredNumSeats", C, false)), "value"))], C)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Engine", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuredEngineNum", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Body", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuredBody", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Chassis", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuredChassisNum", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Plate", (await $.mv((await $.wv([$t8, $t9], "Ins_PRepInsuredStateNum", C, false)), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    if ($.truthy($.not((await $.mv((await $.idx((await $.mv((await $.wv([$t8, $t9], "Franshiz", C, false)), "Fields")), [1])), "IsNull"))))) {
      await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Deductible", (await $.mv((await $.idx((await $.mv((await $.wv([$t8, $t9], "Franshiz", C, false)), "Fields")), [1])), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t8, $t9], "SuggestionInsuranceSum", C, false)), "IsNull"))))) {
      await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["SumInsured", (await $.wcall([$t8, $t9], "CurrToStr", [(await $.mv((await $.wv([$t8, $t9], "SuggestionInsuranceSum", C, false)), "value"))], C)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t8, $t9], "ODSContractsAmmount", C, false)), "IsNull"))))) {
      await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["InsPrem", (await $.wcall([$t8, $t9], "CurrToStr", [(await $.mv((await $.wv([$t8, $t9], "ODSContractsAmmount", C, false)), "value"))], C)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    }
    if ($.truthy($.not((await $.mv((await $.idx((await $.mv((await $.wv([$t8, $t9], "AValute", C, false)), "Fields")), [0])), "IsNull"))))) {
      await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Currency", (await $.mv((await $.idx((await $.mv((await $.wv([$t8, $t9], "AValute", C, false)), "Fields")), [0])), "value")), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "False", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
    }
    await $.mcall((await $.wv([$t8, $t9], "MoreThan", C, false)), "First", []);
    { const $t10 = $.sub((await $.mv((await $.wv([$t8, $t9], "MoreThan", C, false)), "RecordCount")), 1);
      await $.wset([$t8, $t9], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t11 = true;
      for (;;) {
        if (!$t11) { await $.wset([$t8, $t9], "i", $.succ((await $.wv([$t8, $t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t11 = false;
        if (!($.ord((await $.wv([$t8, $t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t10))) break;
        if ($.truthy((await $.mv((await $.idx((await $.mv((await $.wv([$t8, $t9], "MoreThan", C, false)), "Fields")), [0])), "IsNull")))) {
          continue;
        }
        await $.stmt((await $.wcall([$t8, $t9], "SetBookmark", ["Drivers", $.add((await $.mv((await $.idx((await $.mv((await $.wv([$t8, $t9], "MoreThan", C, false)), "Fields")), [0])), "value")), "\r\n"), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), (await $.wv([$t8, $t9], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t8, $t9], "False", C, false))], C)));
        await $.mcall((await $.wv([$t8, $t9], "MoreThan", C, false)), "Next", []);
        await $.tick();
      }
    }
    await $.stmt($.wcall([$t8, $t9], "Show", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPolicy", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveData", []));
  {
    const $t12 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Policy"));
    if ($.truthy($.in_((await $.wv([$t12], "State", C, false)), [(await $.wv([$t12], "dsInsert", C, false)), (await $.wv([$t12], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t12], "Post", [], C));
    }
    await $.stmt($.wcall([$t12], "RefreshRecord", [], C));
  }
  await $.mset((await $.v(C, "btPrint")), "Enabled", true);
  await $.mset((await $.v(C, "btApply")), "Enabled", false);
  await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "Policy")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPolicy", "ENumChange", async function ENumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPolicy", "AddTransh", async function AddTransh(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t13 = (await $.v(C, "DataModuleFullMotor"));
    const $t14 = (await $.wv([$t13], "OPCOMMON", C, false));
    await $.stmt((await $.mcall((await $.wv([$t13, $t14], "Ins_PRep", C, false)), "Locate", ["ID", (await $.mv((await $.wv([$t13, $t14], "Ins_MotorFullID", C, false)), "Value")), []])));
    await $.mcall((await $.wv([$t13, $t14], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t13, $t14], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t13, $t14], "Ins_MotorFullID", C, false)), "Value"))])));
    await $.mcall((await $.wv([$t13, $t14], "ODSContracts", C, false)), "Open", []);
    if ($.truthy($.gt((await $.wcall([$t13, $t14], "CallIntegerFunction", ["addtransaction", [(await $.mv((await $.mcall((await $.wv([$t13, $t14], "ODSContracts", C, false)), "FieldByName", ["LOANACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t13, $t14], "ODSContracts", C, false)), "FieldByName", ["CURRACC_ID"])), "asFloat")), (await $.mv((await $.mcall((await $.wv([$t13, $t14], "ODSContracts", C, false)), "FieldByName", ["AMMOUNT"])), "asFloat"))]], C)), 0))) {
      await $.stmt((await $.wcall([$t13, $t14], "MessageDlg", ["Emeliyyat kecirildi.", (await $.wv([$t13, $t14], "mtInformation", C, false)), [(await $.wv([$t13, $t14], "mbOK", C, false))], 0], C)));
    }
    await $.stmt($.wcall([$t13, $t14], "Close", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  return U;
}
