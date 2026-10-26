// Generated from UInsSuggest.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UInsSuggest", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "Buttons", "Mask", "ExtCtrls", "Quickrpt", "QRCtrls", "HintBox", "DB", "INSWordExporter", "ComCtrls", "DataUnitFullMotor", "USReport", "URiskTypes"]);
  const C = [U];
  U.defClass("TFormSuggestion", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "inswordexporter1": {"name": "INSWordExporter1", "type": "TINSWordExporter"}, "lbbookmarks": {"name": "lbBookmarks", "type": "TListBox"}, "dblookupcomboboxrisk": {"name": "DBLookupComboBoxRisk", "type": "TDBLookupComboBox"}, "memrisk": {"name": "memRisk", "type": "TMemo"}, "btrisksadd": {"name": "btRisksAdd", "type": "TBitBtn"}, "cbrisks": {"name": "cbRisks", "type": "TCheckBox"}, "dblookupcomboboxfranshiz": {"name": "DBLookupComboBoxFranshiz", "type": "TDBLookupComboBox"}, "memfrashize": {"name": "memFrashize", "type": "TMemo"}, "cbfranshiz": {"name": "cbFranshiz", "type": "TCheckBox"}, "dblookupcomboboxcondition": {"name": "DBLookupComboBoxCondition", "type": "TDBLookupComboBox"}, "cbconditions": {"name": "cbConditions", "type": "TCheckBox"}, "memconditions": {"name": "memConditions", "type": "TMemo"}, "dtpcontractdate": {"name": "DTPContractDate", "type": "TDateTimePicker"}, "btprint": {"name": "btPrint", "type": "TBitBtn"}, "btapply": {"name": "btApply", "type": "TBitBtn"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("FormSuggestion", null, "TFormSuggestion");
  });
  U.method("TFormSuggestion", "SaveData", async function SaveData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = false;
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbRisks")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Risks"));
      await $.stmt($.wcall([$t1], "Insert", [], C));
      await $.mset((await $.wcall([$t1], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t1], "memRisk", C, false)), "Text")));
      await $.stmt($.wcall([$t1], "Post", [], C));
      await $.stmt($.wcall([$t1], "RefreshRecord", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbFranshiz")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Franshiz"));
      await $.stmt($.wcall([$t2], "Insert", [], C));
      await $.mset((await $.wcall([$t2], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t2], "memFrashize", C, false)), "Text")));
      await $.stmt($.wcall([$t2], "Post", [], C));
      await $.stmt($.wcall([$t2], "RefreshRecord", [], C));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "cbConditions")), "State")), (await $.v(C, "cbChecked"))))) {
    {
      const $t3 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Conditions"));
      await $.stmt($.wcall([$t3], "Insert", [], C));
      await $.mset((await $.wcall([$t3], "FieldByName", ["name"], C)), "asString", (await $.mv((await $.wv([$t3], "memConditions", C, false)), "Text")));
      await $.stmt($.wcall([$t3], "Post", [], C));
      await $.stmt($.wcall([$t3], "RefreshRecord", [], C));
    }
  }
  {
    const $t4 = (await $.v(C, "DataModuleFullMotor"));
    const $t5 = (await $.mv((await $.wv([$t4], "DataModuleFullMotor", C, false)), "Suggestion"));
    await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["mk_id"], C)), "AsFloat", (await $.mv((await $.wv([$t4, $t5], "Ins_MotorFullid", C, false)), "Value")));
    await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["rsk_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4, $t5], "Risks", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["frz_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4, $t5], "Franshiz", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["cndt_id"], C)), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4, $t5], "Conditions", C, false)), "FieldByName", ["id"])), "asFloat")));
    await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["enddate"], C)), "AsDateTime", (await $.mv((await $.wv([$t4, $t5], "DTPContractDate", C, false)), "DateTime")));
    await $.stmt($.wcall([$t4, $t5], "Post", [], C));
    await $.stmt((await $.wcall([$t4, $t5], "RefreshRecord", [], C)));
    await $.mcall((await $.wv([$t4, $t5], "ODSContracts", C, false)), "Edit", []);
    await $.mset((await $.mcall((await $.wv([$t4, $t5], "ODSContracts", C, false)), "FieldByName", ["sugg_id"])), "AsFloat", (await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["id"], C)), "asFloat")));
    await $.mset((await $.mcall((await $.wv([$t4, $t5], "ODSContracts", C, false)), "FieldByName", ["ins_date"])), "AsDateTime", (await $.mv((await $.wv([$t4, $t5], "DTPContractDate", C, false)), "DateTime")));
    await $.mcall((await $.wv([$t4, $t5], "ODSContracts", C, false)), "Post", []);
    await $.wset([$t4, $t5], "result", (await $.wv([$t4, $t5], "True", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFormSuggestion", "LoadData", async function LoadData(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Suggestion"));
    await $.mset((await $.wv([$t6], "DTPContractDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t6], "FieldByName", ["enddate"], C)), "AsDateTime")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormSuggestion", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "SaveData")))) {
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "Suggestion")), "RefreshRecord", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["action"].set((await $.v(C, "caFree")));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormSuggestion", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ModalResult", (await $.v(C, "mrCancel")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "DBEdit4KeyPress", async function DBEdit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t7 = L0["sender"];
        await $.stmt((await $.wcall([$t7], "SelectNext", [(await $.wv([$t7], "ActiveControl", C, false)), (await $.wv([$t7], "False", C, false)), (await $.wv([$t7], "True", C, false))], C)));
      }
    } else {
      {
        const $t8 = L0["sender"];
        await $.stmt((await $.wcall([$t8], "SelectNext", [(await $.wv([$t8], "ActiveControl", C, false)), (await $.wv([$t8], "True", C, false)), (await $.wv([$t8], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormSuggestion", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "DataModuleFullMotor"));
    await $.mcall((await $.wv([$t9], "ODSContracts", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t9], "Suggestionmk_id", C, false)), "value"))])));
    await $.mcall((await $.wv([$t9], "ODSContracts", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "Suggestion", C, false)), "State")), (await $.wv([$t9], "dsEdit", C, false))))) {
      await $.wset([$t9], "Caption", $.add((await $.wv([$t9], "Caption", C, false)), "  (redakte)"), C);
      await $.mset((await $.wv([$t9], "btPrint", C, false)), "Enabled", (await $.wv([$t9], "true", C, false)));
      await $.mset((await $.wv([$t9], "btApply", C, false)), "Enabled", (await $.wv([$t9], "true", C, false)));
    } else {
      await $.wset([$t9], "Caption", $.add((await $.wv([$t9], "Caption", C, false)), "  (elave etmek)"), C);
    }
    await $.mcall((await $.wv([$t9], "Risks", C, false)), "Open", []);
    await $.mcall((await $.wv([$t9], "Conditions", C, false)), "Open", []);
    await $.mcall((await $.wv([$t9], "Franshiz", C, false)), "Open", []);
  }
  await $.stmt((await $.call(C, "LoadData", [])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "btPrintClick", async function btPrintClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "day": 0, "month": 0, "year": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["months"] = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
  {
    const $t10 = (await $.v(C, "DataModuleFullMotor"));
    await $.stmt((await $.mcall((await $.wv([$t10], "Ins_Rep", C, false)), "Locate", ["ID", (await $.mv((await $.wv([$t10], "Ins_MotorFullID", C, false)), "Value")), []])));
  }
  {
    const $t11 = (await $.v(C, "INSWordExporter1"));
    await $.wset([$t11], "FileName", $.add((await $.wcall([$t11], "ExtractFilePath", [(await $.mv((await $.wv([$t11], "Application", C, false)), "ExeName"))], C)), "\\MotorFullSuggest.doc"), C);
    {
      const $t12 = (await $.wv([$t11], "DataModuleFullMotor", C, false));
      await $.stmt((await $.wcall([$t11, $t12], "Open", [(await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "DecodeDate", [(await $.mv((await $.wv([$t11, $t12], "SuggestionENDDATE", C, false)), "AsDateTime")), $.ref(async () => (await $.wv([$t11, $t12], "year", { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }, false)), async ($t13) => { await $.wset([$t11, $t12], "year", $t13, { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t11, $t12], "month", { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }, false)), async ($t14) => { await $.wset([$t11, $t12], "month", $t14, { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }); }), $.ref(async () => (await $.wv([$t11, $t12], "day", { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }, false)), async ($t15) => { await $.wset([$t11, $t12], "day", $t15, { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }); })], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["Insured", (await $.mv((await $.wv([$t11, $t12], "CustomersName", C, false)), "value")), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["IAddress", (await $.mv((await $.wv([$t11, $t12], "CustomersADDRESS", C, false)), "value")), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["RAddress", (await $.mv((await $.wv([$t11, $t12], "SuggestionRISKADDRESS", C, false)), "value")), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["IValue", (await $.wcall([$t11, $t12], "CurrToStr", [(await $.mv((await $.wv([$t11, $t12], "SuggestionInsuranceSum", C, false)), "value"))], C)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["ISum", (await $.wcall([$t11, $t12], "CurrToStr", [(await $.mv((await $.wv([$t11, $t12], "ODSContractsAmmount", C, false)), "value"))], C)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["EndDate", $.add($.add($.add($.add((await $.wcall([$t11, $t12], "IntToStr", [(await $.wv([$t11, $t12], "day", { get: async () => L0["day"], set: async (v) => { L0["day"] = v; }, local: true }, false))], C)), "    "), (await $.idx((await $.wv([$t11, $t12], "months", { get: async () => L0["months"], set: async (v) => { L0["months"] = v; }, local: true }, false)), [(await $.wv([$t11, $t12], "month", { get: async () => L0["month"], set: async (v) => { L0["month"] = v; }, local: true }, false))]))), "    "), (await $.wcall([$t11, $t12], "IntToStr", [(await $.wv([$t11, $t12], "year", { get: async () => L0["year"], set: async (v) => { L0["year"] = v; }, local: true }, false))], C))), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "False", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["IPeriod", $.add($.add((await $.wcall([$t11, $t12], "DateToStr", [(await $.mv((await $.wv([$t11, $t12], "ODSContractsBegin_Date", C, false)), "Value"))], C)), " - "), (await $.wcall([$t11, $t12], "DateToStr", [(await $.mv((await $.wv([$t11, $t12], "ODSContractsEnd_Date", C, false)), "Value"))], C))), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "False", C, false)), 10, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["IRisks", (await $.mv((await $.idx((await $.mv((await $.wv([$t11, $t12], "Risks", C, false)), "Fields")), [1])), "value")), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["IFrans", (await $.mv((await $.idx((await $.mv((await $.wv([$t11, $t12], "Franshiz", C, false)), "Fields")), [1])), "value")), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["ICond", (await $.mv((await $.idx((await $.mv((await $.wv([$t11, $t12], "Conditions", C, false)), "Fields")), [1])), "value")), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
      await $.stmt((await $.wcall([$t11, $t12], "SetBookmark", ["Insured2", (await $.mv((await $.wv([$t11, $t12], "CustomersName", C, false)), "value")), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "false", C, false)), (await $.wv([$t11, $t12], "False", C, false)), (await $.wv([$t11, $t12], "false", C, false)), 8, "Arial AzLat", (await $.wv([$t11, $t12], "False", C, false))], C)));
    }
    await $.stmt($.wcall([$t11], "Show", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "btRisksAddClick", async function btRisksAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "DataModuleFullMotor"));
    await $.mcall((await $.wv([$t16], "Risktypes", C, false)), "Open", []);
    {
      const $t17 = (await $.mcall((await $.wv([$t16], "TfmRiskTypes", C, false)), "Create", [Self]));
      await $.stmt($.wcall([$t16, $t17], "ShowModal", [], C));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t16], "memRisk", C, false)), "Text")), ""))) {
      await $.mset((await $.wv([$t16], "cbRisks", C, false)), "State", (await $.wv([$t16], "cbChecked", C, false)));
    }
    await $.mcall((await $.wv([$t16], "Risktypes", C, false)), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "DBLookupComboBoxRiskClick", async function DBLookupComboBoxRiskClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Risks"));
    await $.mset((await $.wv([$t18], "memRisk", C, false)), "Text", (await $.mv((await $.wcall([$t18], "FieldByName", ["name"], C)), "asString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "DBLookupComboBoxFranshizClick", async function DBLookupComboBoxFranshizClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t19 = (await $.mv((await $.v(C, "DataModulefullMotor")), "Franshiz"));
    await $.mset((await $.wv([$t19], "memFrashize", C, false)), "Text", (await $.mv((await $.wcall([$t19], "FieldByName", ["name"], C)), "asString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "memConditionsChange", async function memConditionsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DTPContractDateChange", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "DBLookupComboBoxConditionClick", async function DBLookupComboBoxConditionClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.mv((await $.v(C, "DataModulefullMotor")), "Conditions"));
    await $.mset((await $.wv([$t20], "memConditions", C, false)), "Text", (await $.mv((await $.wcall([$t20], "FieldByName", ["name"], C)), "asString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "DTPContractDateChange", async function DTPContractDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBEdit4KeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t21) => { L0["key"] = $t21; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "btApplyClick", async function btApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "SaveData", [])))) {
    await $.mset((await $.v(C, "btPrint")), "Enabled", true);
    await $.mset((await $.v(C, "btApply")), "Enabled", false);
    await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "Suggestion")), "Edit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormSuggestion", "DBEdit4Change", async function DBEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btApply")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
