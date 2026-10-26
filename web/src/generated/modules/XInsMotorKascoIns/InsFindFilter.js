// Generated from InsFindFilter.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsFindFilter", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "Db", "PlgModalContainer", "Oracle", "OracleData", "CurrencyEdit", "Buttons", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "ExtCtrls", "InsMotorKascoImpl"]);
  const C = [U];
  U.defClass("TfmFind", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "plmain": {"name": "plMain", "type": "TPanel"}, "lbdbcbcustname": {"name": "lbDBCBCustName", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "lbbank": {"name": "lbBank", "type": "TLabel"}, "gbobject": {"name": "gbObject", "type": "TGroupBox"}, "lbinstype": {"name": "lbInsType", "type": "TLabel"}, "lbinsmodel": {"name": "lbInsModel", "type": "TLabel"}, "lbinsstatenum": {"name": "lbInsStateNum", "type": "TLabel"}, "lbinsenginenum": {"name": "lbInsEngineNum", "type": "TLabel"}, "lbinsoutputyear": {"name": "lbInsOutputYear", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "edinsuredstatenum": {"name": "edInsuredStateNum", "type": "TEdit"}, "edinsuredenginenum": {"name": "edInsuredEngineNum", "type": "TEdit"}, "cbinsuredmark": {"name": "cbInsuredMark", "type": "TDBLookupComboBox"}, "cbinsuredmodel": {"name": "cbInsuredModel", "type": "TDBLookupComboBox"}, "plinsperiod": {"name": "plInsPeriod", "type": "TGroupBox"}, "lbdrivecost": {"name": "lbDriveCost", "type": "TLabel"}, "lbinsfranshiz": {"name": "lbInsFranshiz", "type": "TLabel"}, "lbbegindate": {"name": "lbBeginDate", "type": "TLabel"}, "lbenddate": {"name": "lbEndDate", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "edbegin_date": {"name": "edBegin_Date", "type": "TDateTimePicker"}, "edend_date": {"name": "edEnd_Date", "type": "TDateTimePicker"}, "cbbank_id": {"name": "cbBank_id", "type": "TDBLookupComboBox"}, "cbkli_id": {"name": "cbKLI_ID", "type": "TDBLookupComboBox"}, "odscusts": {"name": "ODSCusts", "type": "TOracleDataSet"}, "odscustsid": {"name": "ODSCustsID", "type": "TIntegerField"}, "odscustsname": {"name": "ODSCustsNAME", "type": "TStringField"}, "odscustsaddress": {"name": "ODSCustsADDRESS", "type": "TStringField"}, "dscusts": {"name": "DSCusts", "type": "TDataSource"}, "pkgmotorkasco": {"name": "pkgMotorKasco", "type": "TOraclePackage"}, "pmcsuggestion": {"name": "pmcSuggestion", "type": "TPlgModalContainer"}, "opcommon": {"name": "OPCOMMON", "type": "TOraclePackage"}, "dsbeneficiary": {"name": "DSBeneficiary", "type": "TDataSource"}, "odsbeneficiary": {"name": "ODSBeneficiary", "type": "TOracleDataSet"}, "odsbeneficiaryid": {"name": "ODSBeneficiaryID", "type": "TFloatField"}, "odsbeneficiaryname": {"name": "ODSBeneficiaryNAME", "type": "TStringField"}, "odsbeneficiaryaddress": {"name": "ODSBeneficiaryADDRESS", "type": "TStringField"}, "odsbeneficiaryphone": {"name": "ODSBeneficiaryPHONE", "type": "TStringField"}, "odsbeneficiarybanking_details": {"name": "ODSBeneficiaryBANKING_DETAILS", "type": "TStringField"}, "odsmodels": {"name": "ODSModels", "type": "TOracleDataSet"}, "odsmodelsid": {"name": "ODSModelsID", "type": "TFloatField"}, "odsmodelsname": {"name": "ODSModelsNAME", "type": "TStringField"}, "odsmodelsmark_id": {"name": "ODSModelsMARK_ID", "type": "TFloatField"}, "odsmodelscalcoptions": {"name": "ODSModelsCALCOPTIONS", "type": "TIntegerField"}, "odsmarks": {"name": "ODSMarks", "type": "TOracleDataSet"}, "odsmarksid": {"name": "ODSMarksID", "type": "TFloatField"}, "odsmarksname": {"name": "ODSMarksNAME", "type": "TStringField"}, "odsmarksstate_id": {"name": "ODSMarksSTATE_ID", "type": "TFloatField"}, "odsmarkscalcoptions": {"name": "ODSMarksCALCOPTIONS", "type": "TIntegerField"}, "dsmodels": {"name": "DSModels", "type": "TDataSource"}, "dsmarks": {"name": "DSMarks", "type": "TDataSource"}, "odsbanks": {"name": "ODSBanks", "type": "TOracleDataSet"}, "odsbanksid": {"name": "ODSBanksID", "type": "TFloatField"}, "odsbanksname": {"name": "ODSBanksNAME", "type": "TStringField"}, "dsbanks": {"name": "DSBanks", "type": "TDataSource"}, "odsfranshiz": {"name": "ODSFranshiz", "type": "TOracleDataSet"}, "odsfranshizid": {"name": "ODSFranshizID", "type": "TFloatField"}, "odsfranshizmonth_id": {"name": "ODSFranshizMONTH_ID", "type": "TFloatField"}, "odsfranshizammount": {"name": "ODSFranshizAMMOUNT", "type": "TFloatField"}, "odsmonths": {"name": "ODSMonths", "type": "TOracleDataSet"}, "odsmonthsid": {"name": "ODSMonthsID", "type": "TFloatField"}, "odsmonthsrelease_id": {"name": "ODSMonthsRELEASE_ID", "type": "TFloatField"}, "odsmonthscount": {"name": "ODSMonthsCOUNT", "type": "TFloatField"}, "dsfranshiz": {"name": "DSFranshiz", "type": "TDataSource"}, "dsmonths": {"name": "DSMonths", "type": "TDataSource"}, "odsreliasedates": {"name": "ODSReliaseDates", "type": "TOracleDataSet"}, "odsreliasedatesid": {"name": "ODSReliaseDatesID", "type": "TFloatField"}, "odsreliasedatesbegindate": {"name": "ODSReliaseDatesBEGINDATE", "type": "TDateTimeField"}, "odsreliasedatesenddate": {"name": "ODSReliaseDatesENDDATE", "type": "TDateTimeField"}, "odsreliasedatesstate_id": {"name": "ODSReliaseDatesSTATE_ID", "type": "TFloatField"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "bitbtn4": {"name": "BitBtn4", "type": "TBitBtn"}, "edinssumm": {"name": "edInsSumm", "type": "TEdit"}, "label25": {"name": "Label25", "type": "TLabel"}, "ckbfilter": {"name": "ckbFilter", "type": "TCheckBox"}, "bitbtn5": {"name": "BitBtn5", "type": "TBitBtn"}, "edinsuredoutputyear": {"name": "edInsuredOutputYear", "type": "TEdit"}, "edpolicy_num": {"name": "edPolicy_Num", "type": "TEdit"}, "edfranshiz": {"name": "edFranshiz", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "edammount": {"name": "edAmmount", "type": "TEdit"}, "cbinsuredtype": {"name": "cbInsuredType", "type": "TDBLookupComboBox"}, "cbinclude": {"name": "cbInclude", "type": "TCheckBox"}}, {});
  U.init(async () => {
    try { U.const("tcalcexception", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    try { U.const("toutputyear", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    U.var_("fmFind", null, "TfmFind");
  });
  U.method("TfmFind", "edInsuredOutputYearKeyPress", async function edInsuredOutputYearKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmFind", "cbKLI_IDClick", async function cbKLI_IDClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "key": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "edInsuredOutputYearKeyPress", [L0["sender"], $.ref(async () => L0["key"], async ($t1) => { L0["key"] = $t1; })])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmFind", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "ODSReliaseDates"));
    try {
      await $.stmt($.wcall([$t2], "Close", [], C));
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t2], "ODSMarks", C, false)), "FieldByName", ["calcoptions"])), "asInteger")), 1)))) {
        throw $.raise((await $.mcall((await $.wv([$t2], "TCalcException", C, false)), "Create", ["Verilmish avtomobil markasi ucun franshiza yoxdur"])));
      }
      if ($.truthy($.eq((await $.mv((await $.wv([$t2], "edInsuredOutputYear", C, false)), "Text")), ""))) {
        throw $.raise((await $.mcall((await $.wv([$t2], "TOutputYear", C, false)), "Create", ["Avtomobilin buraxilish ilini daxil edin"])));
      }
      await $.stmt((await $.wcall([$t2], "SetVariable", ["state", (await $.mv((await $.mcall((await $.wv([$t2], "ODSMarks", C, false)), "fieldbyName", ["state_id"])), "asInteger"))], C)));
      await $.stmt((await $.wcall([$t2], "SetVariable", ["releaseyear", (await $.wcall([$t2], "StrToInt", [(await $.mv((await $.wv([$t2], "edInsuredOutputYear", C, false)), "Text"))], C))], C)));
      await $.stmt($.wcall([$t2], "Open", [], C));
      await $.mcall((await $.wv([$t2], "ODSMonths", C, false)), "Open", []);
      await $.mcall((await $.wv([$t2], "ODSFranshiz", C, false)), "Open", []);
    } catch ($t3) {
      $.rethrowControl($t3);
      if ($.excIs($t3, "Exception")) {
        L0["e"] = $.exc($t3);
        await $.stmt((await $.wcall([$t2], "MessageDlg", [(await $.mv((await $.wv([$t2], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")), (await $.wv([$t2], "mtInformation", C, false)), [(await $.wv([$t2], "mbOK", C, false))], 0], C)));
      }
      else { throw $t3; }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("GetFieldName", async function GetFieldName(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: ''};
  await $.fixArgs(L0, ["value"]);
  if ($.truthy($.ge((await $.call(C, "Length", [L0["value"]])), 3))) {
    L0["result"] = (await $.call(C, "Copy", [L0["value"], 3, $.sub((await $.call(C, "Length", [L0["value"]])), 2)]));
  }
  return L0.result;
}, {"params": ["value"], "kind": "function", "ptypes": ["String"]});
  U.method("TfmFind", "GetConditions", async function GetConditions(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ownerobj": $.copyArg(p0), "fields": $.asRef(p1), result: null, "i": 0, "varval": null, "l": 0};
  await $.fixArgs(L0, ["ownerobj"]);
  L0["addval"] = $.fn(async function addVal(p0, p1) {
  const L1 = {"val": $.copyArg(p0), "vartype": (p1 === undefined ? (await $.v(C, "varInteger")) : p1), result: undefined, "idx": 0};
  await $.fixArgs(L1, ["val", "vartype"]);
  if ($.truthy((await $.call(C, "VarIsEmpty", [L0["varval"]])))) {
    L0["varval"] = (await $.call(C, "VarArrayCreate", [[0, 0], (await $.v(C, "varVariant"))]));
    L1["idx"] = 0;
  } else {
    await $.stmt((await $.call(C, "VarArrayRedim", [L0["varval"], $.add((await $.call(C, "VarArrayHighBound", [L0["varval"], (await $.call(C, "VarArrayDimCount", [L0["varval"]]))])), 1)])));
    L1["idx"] = (await $.call(C, "VarArrayHighBound", [L0["varval"], (await $.call(C, "VarArrayDimCount", [L0["varval"]]))]));
  }
  { const $t4 = await $.iset(L0["varval"], [L1["idx"]], (await $.call(C, "VarAsType", [L1["val"], L1["vartype"]]))); if ($t4 !== undefined) { L0["varval"] = $t4; } }
  return L1.result;
});
  {
    const $t5 = L0["ownerobj"];
    { const $t6 = $.sub((await $.wv([$t5], "ControlCount", C, false)), 1);
      await $.wset([$t5], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t7 = true;
      for (;;) {
        if (!$t7) { await $.wset([$t5], "i", $.succ((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t7 = false;
        if (!($.ord((await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t6))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), ""))) {
            await $.wset([$t5], "Fields", $.add($.add((await $.wv([$t5], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t5], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t5], "addVal", [(await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), (await $.wv([$t5], "varString", C, false))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          if ($.truthy($.ne((await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex")), (-(1))))) {
            await $.wset([$t5], "Fields", $.add($.add((await $.wv([$t5], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t5], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t5], "addVal", [(await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "ItemIndex"))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          if ($.truthy($.not((await $.wcall([$t5], "varIsNull", [(await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "KeyValue"))], C))))) {
            await $.wset([$t5], "Fields", $.add($.add((await $.wv([$t5], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t5], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.stmt((await $.wcall([$t5], "addVal", [(await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "keyValue"))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          if ($.truthy($.ne((await $.wcall([$t5], "Trunc", [(await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "DateTime"))], C)), 0))) {
            await $.wset([$t5], "Fields", $.add($.add((await $.wv([$t5], "Fields", { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true }, false)), ";"), (await $.wcall([$t5], "GetFieldName", [(await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Name"))], C))), { get: async () => await L0["fields"].get(), set: async (v) => { await L0["fields"].set(v); }, local: true });
            await $.wset([$t5], "l", (await $.mv(((await $.idx((await $.wv([$t5], "controls", C, false)), [(await $.wv([$t5], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Date")), { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true });
            await $.stmt((await $.wcall([$t5], "addVal", [(await $.wv([$t5], "l", { get: async () => L0["l"], set: async (v) => { L0["l"] = v; }, local: true }, false)), (await $.wv([$t5], "varDate", C, false))], { get: async () => L0["addval"], set: async (v) => { L0["addval"] = v; }, local: true })));
          }
        }
        await $.tick();
      }
    }
  }
  await L0["fields"].set((await $.call(C, "lowercase", [(await $.call(C, "copy", [(await L0["fields"].get()), 2, $.sub((await $.call(C, "Length", [(await L0["fields"].get())])), 1)]))])));
  L0["result"] = L0["varval"];
  return L0.result;
}, {"params": ["OwnerObj", "Fields"], "kind": "function", "ptypes": ["TCustomControl", "String"]});
  U.func("VarArrConcat", async function VarArrConcat(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"v1": $.copyArg(p0), "v2": $.copyArg(p1), result: null, "v1highbound": 0, "v2highbound": 0, "i": 0, "res": null};
  await $.fixArgs(L0, ["v1", "v2"]);
  if ($.truthy((await $.call(C, "VarIsArray", [L0["v1"]])))) {
    L0["result"] = L0["v1"];
  } else {
    L0["result"] = L0["v2"];
    return L0.result;
  }
  if ($.truthy(($.not((await $.call(C, "VarIsArray", [L0["v2"]])))))) {
    return L0.result;
  }
  L0["res"] = L0["v1"];
  L0["v1highbound"] = (await $.call(C, "VarArrayHighBound", [L0["v1"], (await $.call(C, "VarArrayDimCount", [L0["v1"]]))]));
  L0["v2highbound"] = (await $.call(C, "VarArrayHighBound", [L0["v2"], (await $.call(C, "VarArrayDimCount", [L0["v2"]]))]));
  await $.stmt((await $.call(C, "VarArrayRedim", [L0["res"], $.add($.add(L0["v1highbound"], L0["v2highbound"]), 1)])));
  { const $t8 = L0["v2highbound"];
    L0["i"] = 0;
    let $t9 = true;
    for (;;) {
      if (!$t9) { L0["i"] = $.succ(L0["i"], 1); }
      $t9 = false;
      if (!($.ord(L0["i"]) <= $.ord($t8))) break;
      { const $t10 = await $.iset(L0["res"], [$.add($.add(L0["v1highbound"], L0["i"]), 1)], (await $.idx(L0["v2"], [L0["i"]]))); if ($t10 !== undefined) { L0["res"] = $t10; } }
      await $.tick();
    }
  }
  L0["result"] = L0["res"];
  return L0.result;
}, {"params": ["V1", "V2"], "kind": "function", "ptypes": ["Variant", "Variant"]});
  U.method("TfmFind", "GetAllObjConditions", async function GetAllObjConditions(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"fields": $.asRef(p0), result: null, "tmp": '', "val": null};
  L0["val"] = (await $.call(C, "GetConditions", [(await $.v(C, "plMain")), $.ref(async () => L0["tmp"], async ($t11) => { L0["tmp"] = $t11; })]));
  await L0["fields"].set(L0["tmp"]);
  L0["val"] = (await $.call(C, "VarArrConcat", [L0["val"], (await $.call(C, "GetConditions", [(await $.v(C, "gbObject")), $.ref(async () => L0["tmp"], async ($t12) => { L0["tmp"] = $t12; })]))]));
  if ($.truthy((await $.and_(($.ne(L0["tmp"], "")), async () => ($.ne((await L0["fields"].get()), "")))))) {
    L0["tmp"] = $.add(";", L0["tmp"]);
  }
  await L0["fields"].set($.add((await L0["fields"].get()), L0["tmp"]));
  L0["val"] = (await $.call(C, "VarArrConcat", [L0["val"], (await $.call(C, "GetConditions", [(await $.v(C, "plInsPeriod")), $.ref(async () => L0["tmp"], async ($t13) => { L0["tmp"] = $t13; })]))]));
  if ($.truthy((await $.and_(($.ne(L0["tmp"], "")), async () => ($.ne((await L0["fields"].get()), "")))))) {
    L0["tmp"] = $.add(";", L0["tmp"]);
  }
  await L0["fields"].set($.add((await L0["fields"].get()), L0["tmp"]));
  L0["result"] = L0["val"];
  return L0.result;
}, {"params": ["Fields"], "kind": "function", "ptypes": ["String"]});
  U.method("TfmFind", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "val": null, "fields": '', "f": false};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = false;
  L0["val"] = (await $.call(C, "GetAllObjConditions", [$.ref(async () => L0["fields"], async ($t14) => { L0["fields"] = $t14; })]));
  if ($.truthy((await $.or_(($.ne((await $.call(C, "trunc", [(await $.mv((await $.v(C, "edbegin_Date")), "Date"))])), 0)), async () => ($.ne((await $.call(C, "trunc", [(await $.mv((await $.v(C, "edEnd_Date")), "Date"))])), 0)))))) {
    L0["f"] = true;
  }
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    {
      const $t15 = (await $.v(C, "fmInsMotorKasco"));
      if ($.truthy((await $.wv([$t15], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false)))) {
        if ($.truthy($.not((await $.mcall((await $.wv([$t15], "ODSMotorKasco", C, false)), "Locate", [(await $.wv([$t15], "Fields", { get: async () => L0["fields"], set: async (v) => { L0["fields"] = v; }, local: true }, false)), (await $.wv([$t15], "Val", { get: async () => L0["val"], set: async (v) => { L0["val"] = v; }, local: true }, false)), [(await $.wv([$t15], "loPartialKey", C, false)), (await $.wv([$t15], "loCaseInsensitive", C, false))]]))))) {
          await $.stmt((await $.wcall([$t15], "MessageDlg", ["Verilmiş parametrlərə uyğun müştəri tapılmadı!", (await $.wv([$t15], "mtWarning", C, false)), [(await $.wv([$t15], "mbOk", C, false))], 0], C)));
        }
      }
      if ($.truthy($.not((await $.wv([$t15], "f", { get: async () => L0["f"], set: async (v) => { L0["f"] = v; }, local: true }, false))))) {
        if ($.truthy($.not((await $.mcall((await $.wv([$t15], "ODSMotorKasco", C, false)), "Locate", [(await $.wv([$t15], "Fields", { get: async () => L0["fields"], set: async (v) => { L0["fields"] = v; }, local: true }, false)), (await $.wv([$t15], "Val", { get: async () => L0["val"], set: async (v) => { L0["val"] = v; }, local: true }, false)), [(await $.wv([$t15], "loCaseInSensitive", C, false))]]))))) {
          await $.stmt((await $.wcall([$t15], "MessageDlg", ["Verilmiş parametrlərə uyğun müştəri tapılmadı!", (await $.wv([$t15], "mtWarning", C, false)), [(await $.wv([$t15], "mbOk", C, false))], 0], C)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmFind", "ClearControlElements", async function ClearControlElements(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"ownerobj": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["ownerobj"]);
  {
    const $t16 = L0["ownerobj"];
    { const $t17 = $.sub((await $.wv([$t16], "ControlCount", C, false)), 1);
      await $.wset([$t16], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t18 = true;
      for (;;) {
        if (!$t18) { await $.wset([$t16], "i", $.succ((await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t18 = false;
        if (!($.ord((await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t17))) break;
        if ($.truthy($.is_((await $.idx((await $.wv([$t16], "controls", C, false)), [(await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TEdit"))) {
          await $.mset((await $.idx((await $.wv([$t16], "controls", C, false)), [(await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Text", "");
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t16], "controls", C, false)), [(await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t16], "controls", C, false)), [(await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ItemIndex", (-(1)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t16], "controls", C, false)), [(await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDBLookupComboBox"))) {
          await $.mset((await $.idx((await $.wv([$t16], "controls", C, false)), [(await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "KeyValue", (await $.wv([$t16], "null", C, false)));
        }
        if ($.truthy($.is_((await $.idx((await $.wv([$t16], "controls", C, false)), [(await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "TDateTimePicker"))) {
          await $.mset((await $.idx((await $.wv([$t16], "controls", C, false)), [(await $.wv([$t16], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "DateTime", (await $.wcall([$t16], "StrToDate", ["30/12/1899"], C)));
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["OwnerObj"], "kind": "procedure", "ptypes": ["TCustomControl"]});
  U.method("TfmFind", "BitBtn5Click", async function BitBtn5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ClearControlElements", [(await $.v(C, "plMain"))])));
  await $.stmt((await $.call(C, "ClearControlElements", [(await $.v(C, "gbObject"))])));
  await $.stmt((await $.call(C, "ClearControlElements", [(await $.v(C, "plInsPeriod"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmFind", "GetFilterSring", async function GetFilterSring(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: '', "fields": '', "str": '', "i": 0, "p": 0, "val": null, "value": ''};
  L0["val"] = (await $.call(C, "GetAllObjConditions", [$.ref(async () => L0["fields"], async ($t19) => { L0["fields"] = $t19; })]));
  if ($.truthy($.not((await $.call(C, "VarIsEmpty", [L0["val"]]))))) {
    { const $t20 = (await $.call(C, "VarArrayHighBound", [L0["val"], (await $.call(C, "VarArrayDimCount", [L0["val"]]))]));
      L0["i"] = 0;
      let $t21 = true;
      for (;;) {
        if (!$t21) { L0["i"] = $.succ(L0["i"], 1); }
        $t21 = false;
        if (!($.ord(L0["i"]) <= $.ord($t20))) break;
        { const $t22 = (await $.call(C, "pos", [";", L0["fields"]]));
          if ($.eq($t22, 0)) {
            L0["p"] = $.add((await $.call(C, "Length", [L0["fields"]])), 1);
          }
          else {
            L0["p"] = (await $.call(C, "pos", [";", L0["fields"]]));
          }
        }
        if ($.truthy($.gt(L0["i"], 0))) {
          L0["str"] = $.add(L0["str"], " and ");
        }
        { const $t23 = (await $.call(C, "VarType", [(await $.idx(L0["val"], [L0["i"]]))]));
          if ($.eq($t23, (await $.v(C, "varInteger")))) {
            L0["value"] = (await $.call(C, "VarToStr", [(await $.idx(L0["val"], [L0["i"]]))]));
          }
          else if ($.eq($t23, (await $.v(C, "varOleStr")))) {
            L0["value"] = $.add($.add("'", (await $.idx(L0["val"], [L0["i"]]))), "'");
          }
          else if ($.eq($t23, (await $.v(C, "varDate")))) {
            L0["value"] = $.add($.add("'", (await $.call(C, "DateToStr", [(await $.call(C, "Trunc", [(await $.idx(L0["val"], [L0["i"]]))]))]))), "'");
          }
        }
        L0["str"] = $.add($.add($.add($.add($.add(L0["str"], " ( "), (await $.call(C, "copy", [L0["fields"], 1, $.sub(L0["p"], 1)]))), "="), L0["value"]), " ) ");
        L0["fields"] = (await $.call(C, "Copy", [L0["fields"], $.add(L0["p"], 1), $.sub((await $.call(C, "length", [L0["fields"]])), L0["p"])]));
        await $.tick();
      }
    }
  }
  L0["result"] = L0["str"];
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TfmFind", "BitBtn4Click", async function BitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.v(C, "fmInsMotorKasco"));
    const $t25 = (await $.wv([$t24], "ODSMotorKasco", C, false));
    if ($.truthy((await $.mv((await $.wv([$t24, $t25], "cbInclude", C, false)), "Checked")))) {
      await $.wset([$t24, $t25], "Filter", $.add($.add($.add($.add($.add("(begin_date >=", (await $.wcall([$t24, $t25], "FloatToStr", [(await $.wcall([$t24, $t25], "trunc", [(await $.mv((await $.wv([$t24, $t25], "edbegin_Date", C, false)), "Date"))], C))], C))), ") and ("), "end_date <="), (await $.wcall([$t24, $t25], "FloatToStr", [(await $.wcall([$t24, $t25], "trunc", [(await $.mv((await $.wv([$t24, $t25], "edEnd_Date", C, false)), "Date"))], C))], C))), ")"), C);
    } else {
      await $.wset([$t24, $t25], "Filter", (await $.wv([$t24, $t25], "GetFilterSring", C, false)), C);
    }
    await $.wset([$t24, $t25], "Filtered", (await $.and_(((await $.mv((await $.wv([$t24, $t25], "ckbFilter", C, false)), "Checked"))), async () => ($.ne((await $.wv([$t24, $t25], "Filter", C, false)), "")))), C);
    await $.mset((await $.wv([$t24, $t25], "cbInclude", C, false)), "Checked", (await $.wv([$t24, $t25], "false", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
