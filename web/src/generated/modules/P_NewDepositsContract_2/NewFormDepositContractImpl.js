// Generated from NewFormDepositContractImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewFormDepositContractImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CMDBSearchEdit", "ComCtrls", "Variants", "DBCtrls", "Buttons", "HintBox", "DB", "DBGridEh", "XFSCtrls", "DateUtils", "NewContractCommonDecls", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl", "NewDepositsContractImpl", "NewDepozitAccno", "NewFormCreditImpl"]);
  const C = [U];
  U.defClass("TNewFormDepositContract", "TForm", {"buttonpanel": {"name": "ButtonPanel", "type": "TXFPanel"}, "refreshlistlbl": {"name": "RefreshListLbl", "type": "TLabel"}, "lbluser": {"name": "Lbluser", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "contracthint": {"name": "ContractHint", "type": "THintBox"}, "thirdpersonnamepanel": {"name": "ThirdPersonNamePanel", "type": "TXFPanel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "prolonqasiyapanel": {"name": "ProlonqasiyaPanel", "type": "TXFPanel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "custtypepanel": {"name": "CustTypePanel", "type": "TXFPanel"}, "custtypelabel": {"name": "CustTypeLabel", "type": "TXFLabel"}, "custcategorypanel": {"name": "CustCategoryPanel", "type": "TXFPanel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "periodafterpercentpanel": {"name": "PeriodAfterPercentPanel", "type": "TXFPanel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "periodbeforepercentpanel": {"name": "PeriodBeforePercentPanel", "type": "TXFPanel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "percentpanel": {"name": "PercentPanel", "type": "TXFPanel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "closedatpanel": {"name": "CloseDatPanel", "type": "TXFPanel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "dtclose": {"name": "DTCLOSE", "type": "TDBDateTimeEditEh"}, "opendatpanel": {"name": "OpenDatPanel", "type": "TXFPanel"}, "xflabel111": {"name": "XFLabel111", "type": "TXFLabel"}, "dtopen": {"name": "DTOPEN", "type": "TDBDateTimeEditEh"}, "contractnumpanel": {"name": "ContractNumPanel", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "contractno": {"name": "Contractno", "type": "TDBEditEh"}, "capitalperiodpanel": {"name": "CapitalPeriodPanel", "type": "TXFPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "xflu6": {"name": "XFLU6", "type": "TXFLabel"}, "lcbcapper": {"name": "LCBCapPer", "type": "TDBLookupComboboxEh"}, "pecentdatepanel": {"name": "PecentDatePanel", "type": "TXFPanel"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "xflu8": {"name": "XFLU8", "type": "TXFLabel"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "periodpanel": {"name": "PeriodPanel", "type": "TXFPanel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflu5": {"name": "XFLU5", "type": "TXFLabel"}, "lcbperiods": {"name": "LCBPeriods", "type": "TDBLookupComboboxEh"}, "depamountpanel": {"name": "DepAmountPanel", "type": "TXFPanel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflu4": {"name": "XFLU4", "type": "TXFLabel"}, "dbnumberediteh": {"name": "DBNumberEditeh", "type": "TDBNumberEditEh"}, "valyutapanel": {"name": "ValyutaPanel", "type": "TXFPanel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflu3": {"name": "XFLU3", "type": "TXFLabel"}, "dblcbvalutes": {"name": "DBLCBValutes", "type": "TDBLookupComboboxEh"}, "deptypepanel": {"name": "DepTypePanel", "type": "TXFPanel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflu2": {"name": "XFLU2", "type": "TXFLabel"}, "contracttypes": {"name": "ContractTypes", "type": "TDBLookupComboboxEh"}, "filialpanel": {"name": "FilialPanel", "type": "TXFPanel"}, "xfilial": {"name": "XFilial", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "dblcbfilial": {"name": "DBLCBFilial", "type": "TDBEditEh"}, "custnamepanel": {"name": "CustNamePanel", "type": "TXFPanel"}, "xflabel30": {"name": "XFLabel30", "type": "TXFLabel"}, "xflabel31": {"name": "XFLabel31", "type": "TXFLabel"}, "dbeditname": {"name": "DBEditName", "type": "TDBEditEh"}, "custnompanel": {"name": "CustNomPanel", "type": "TXFPanel"}, "xcustnompanel": {"name": "XCustNomPanel", "type": "TXFLabel"}, "xflu1": {"name": "XFLU1", "type": "TXFLabel"}, "dbeditnumber": {"name": "DBEditNumber", "type": "TDBEditEh"}, "cbpersons": {"name": "CBPersons", "type": "TDBEditEh"}, "cbcategories": {"name": "CBCategories", "type": "TDBEditEh"}, "chautopr": {"name": "ChAutopr", "type": "TDBLookupComboboxEh"}, "dbeditpercent": {"name": "DBEditPercent", "type": "TDBNumberEditEh"}, "creditparticepatepanel": {"name": "CreditParticepatePanel", "type": "TXFPanel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xfpanel22": {"name": "XFPanel22", "type": "TXFPanel"}, "plasticcardpanel": {"name": "PlasticCardPanel", "type": "TXFPanel"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "xflu7": {"name": "XFLU7", "type": "TXFLabel"}, "comboboxcard": {"name": "ComboBoxCard", "type": "TComboBox"}, "agentpanel": {"name": "AgentPanel", "type": "TXFPanel"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "dbeditagentid": {"name": "DBEditAgentid", "type": "TDBEditEh"}, "dbduepercent": {"name": "DBDUEPercent", "type": "TDBNumberEditEh"}, "dboverduepercent": {"name": "DBOVERDUEPercent", "type": "TDBNumberEditEh"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "thirdperson": {"name": "ThirdPerson", "type": "TDBEditEh"}, "comboboxprizepanel": {"name": "ComboBoxPrizePanel", "type": "TXFPanel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "comboboxprize": {"name": "ComboBoxPrize", "type": "TComboBox"}, "dblookuppercent": {"name": "DBLookupPercent", "type": "TDBLookupComboboxEh"}, "finserted": {"name": "FInserted", "type": "Boolean"}, "fcommited": {"name": "FCommited", "type": "Boolean"}, "fedited": {"name": "FEdited", "type": "Boolean"}, "fclienttype": {"name": "FClientType", "type": "integer"}, "fpersonstype": {"name": "FPersonstype", "type": "integer"}, "fdeppersetid": {"name": "FDepPerSetid", "type": "integer"}, "fprize": {"name": "FPrize", "type": "integer"}, "ftocard": {"name": "FTocard", "type": "integer"}}, {});
  U.init(async () => {
    U.const("csAddContract", "InsertContract");
    U.const("csEditContract", "EditContract");
    U.const("csLookContract", "LookContract");
    U.var_("NewFormDepositContract", null, "TNewFormDepositContract");
    U.var_("OIntRate", 0, "real");
    U.var_("DIntRate", 0, "real");
    U.var_("IntRate", '', "String");
  });
  U.method("TNewFormDepositContract", "GenAnnualInt", async function GenAnnualInt(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "depositid": 0, "currencyid": 0, "periodid": 0, "capitalperid": 0, "checksett": false, "r": false, "amount": 0};
  {
    const $t1 = (await $.v(C, "NewDataModDepositsContract"));
    const $t2 = (await $.wv([$t1], "dm_contract", C, false));
    const $t3 = (await $.wv([$t1, $t2], "DepositPorps", C, false));
    await $.wset([$t1, $t2, $t3], "DepositID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "ContractTypes", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["depositid"], set: async (v) => { L0["depositid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "CurrencyID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLCBValutes", C, false)), "ListSource")), "DataSet")), "FieldByName", ["valute"])), "AsInteger")), { get: async () => L0["currencyid"], set: async (v) => { L0["currencyid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "PeriodID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "LCBPeriods", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["periodid"], set: async (v) => { L0["periodid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "CapitalperID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "LCBCapPer", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["capitalperid"], set: async (v) => { L0["capitalperid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "Amount", (await $.mv((await $.wv([$t1, $t2, $t3], "DBNumberEditEh", C, false)), "Value")), { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "PanelInsertVizible", async function PanelInsertVizible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0};
  await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DmContractType")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DmContractType")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DmContractType")), "First", []);
  {
    const $t4 = (await $.v(C, "NewDataModDepositsContract"));
    { const $t5 = $.sub((await $.mv((await $.wv([$t4], "DmContractType", C, false)), "RecordCount")), 1);
      await $.wset([$t4], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t6 = true;
      for (;;) {
        if (!$t6) { await $.wset([$t4], "i", $.succ((await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t6 = false;
        if (!($.ord((await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t5))) break;
        { const $t7 = $.sub((await $.mv((await $.wv([$t4], "NewFormDepositContract", C, false)), "ComponentCount")), 1);
          await $.wset([$t4], "j", 0, { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
          let $t8 = true;
          for (;;) {
            if (!$t8) { await $.wset([$t4], "j", $.succ((await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), 1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
            $t8 = false;
            if (!($.ord((await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) <= $.ord($t7))) break;
            if ($.truthy($.is_((await $.idx((await $.mv((await $.wv([$t4], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TXFPanel"))) {
              if ($.truthy(($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t4], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), (await $.mv((await $.wv([$t4], "DmContractTypeNAME", C, false)), "AsString")))))) {
                if ($.truthy($.eq((await $.mv((await $.wv([$t4], "DmContractTypePANELTYPE", C, false)), "AsInteger")), 1))) {
                  await $.mset((await $.idx((await $.mv((await $.wv([$t4], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t4], "True", C, false)));
                  await $.mset((await $.idx((await $.mv((await $.wv([$t4], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Top", (await $.mv((await $.wv([$t4], "DmContractTypeTOPID", C, false)), "AsInteger")));
                } else {
                  await $.mset((await $.idx((await $.mv((await $.wv([$t4], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t4], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t4], "False", C, false)));
                }
              }
            }
            await $.tick();
          }
        }
        await $.mcall((await $.wv([$t4], "DmContractType", C, false)), "Next", []);
        await $.tick();
      }
    }
  }
  await $.mset((await $.v(C, "NewFormDepositContract")), "Height", (await $.v(C, "ClientHeight")));
  await $.mset((await $.v(C, "NewFormDepositContract")), "Position", (await $.v(C, "poScreenCenter")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "PanelUpdateVizible", async function PanelUpdateVizible(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "j": 0, "k": 0, "n": 0, "s": ''};
  await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DmContractType")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DmContractType")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DmContractType")), "First", []);
  L0["n"] = $.sub((await $.mv((await $.v(C, "NewFormDepositContract")), "ComponentCount")), 1);
  {
    const $t9 = (await $.v(C, "NewDataModDepositsContract"));
    { const $t10 = $.sub((await $.mv((await $.wv([$t9], "DmContractType", C, false)), "RecordCount")), 1);
      await $.wset([$t9], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t11 = true;
      for (;;) {
        if (!$t11) { await $.wset([$t9], "i", $.succ((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t11 = false;
        if (!($.ord((await $.wv([$t9], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t10))) break;
        { const $t12 = 0;
          await $.wset([$t9], "j", (await $.wv([$t9], "n", { get: async () => L0["n"], set: async (v) => { L0["n"] = v; }, local: true }, false)), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true });
          let $t13 = true;
          for (;;) {
            if (!$t13) { await $.wset([$t9], "j", $.succ((await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false)), -1), { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }); }
            $t13 = false;
            if (!($.ord((await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))) >= $.ord($t12))) break;
            if ($.truthy($.is_((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TXFPanel"))) {
              if ($.truthy(($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), (await $.mv((await $.wv([$t9], "DmContractTypeNAME", C, false)), "AsString")))))) {
                if ($.truthy($.ne((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), "ThirdPersonNamePanel"))) {
                  await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Align", (await $.wv([$t9], "alNone", C, false)));
                  await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Visible", (await $.wv([$t9], "True", C, false)));
                  await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Top", (await $.mv((await $.wv([$t9], "DmContractTypeTOPID", C, false)), "AsInteger")));
                  await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Align", (await $.wv([$t9], "alTop", C, false)));
                  await $.mcall((await $.wv([$t9], "DmContractType", C, false)), "Next", []);
                }
              }
            }
            if ($.truthy(($.is_((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TXFLabel")))) {
              if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), "XFLU1")), async () => ($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), "XFLU2")))), async () => ($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), "XFLU3")))), async () => ($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), "XFLU4")))), async () => ($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), "XFLU5")))), async () => ($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), "XFLU6")))), async () => ($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), "XFLU7")))), async () => ($.eq((await $.mv(((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))]))), "Name")), "XFLU8")))))) {
                await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Left", 3);
              } else {
                await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Left", 12);
              }
            }
            if ($.truthy(($.is_((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TDBDateTimeEditEh")))) {
              await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Left", 193);
            }
            if ($.truthy($.is_((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TDBEditEh"))) {
              await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Left", 193);
            }
            if ($.truthy($.is_((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TDBLookupComboboxEh"))) {
              await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Left", 193);
            }
            if ($.truthy($.is_((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "TDBNumberEditEh"))) {
              await $.mset((await $.idx((await $.mv((await $.wv([$t9], "NewFormDepositContract", C, false)), "Components")), [(await $.wv([$t9], "j", { get: async () => L0["j"], set: async (v) => { L0["j"] = v; }, local: true }, false))])), "Left", 193);
            }
            await $.tick();
          }
        }
        await $.tick();
      }
    }
  }
  await $.mset((await $.v(C, "NewFormDepositContract")), "Height", (await $.v(C, "ClientHeight")));
  await $.mset((await $.v(C, "NewFormDepositContract")), "Position", (await $.v(C, "poScreenCenter")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "LCBCapPerChange", async function LCBCapPerChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "period": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "NewDataModDepositsContract"));
    const $t15 = (await $.wv([$t14], "SaveDeposit", C, false));
    const $t16 = (await $.wv([$t14, $t15], "DepositPorps", C, false));
    const $t17 = (await $.wv([$t14, $t15, $t16], "Dm_Contract", C, false));
    if ($.truthy((await $.wv([$t14, $t15, $t16, $t17], "Active", C, false)))) {
      await $.wset([$t14, $t15, $t16, $t17], "period", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15, $t16, $t17], "LCBPeriods", C, false)), "ListSource")), "DataSet")), "FieldByName", ["period"])), "AsInteger")), { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true });
      await $.wset([$t14, $t15, $t16, $t17], "periodtype", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15, $t16, $t17], "LCBPeriods", C, false)), "ListSource")), "DataSet")), "FieldByName", ["period_type"])), "AsString")), C);
      await $.wset([$t14, $t15, $t16, $t17], "depid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15, $t16, $t17], "ContractTypes", C, false)), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), C);
      await $.wset([$t14, $t15, $t16, $t17], "periodid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15, $t16, $t17], "LCBPeriods", C, false)), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), C);
      await $.wset([$t14, $t15, $t16, $t17], "capitalperid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15, $t16, $t17], "LCBCapPer", C, false)), "ListSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), C);
      await $.wset([$t14, $t15, $t16, $t17], "currency", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DBLCBValutes", C, false)), "ListSource")), "DataSet")), "FieldByName", ["valute"])), "AsInteger")), C);
      if ($.truthy($.not((await $.wcall([$t14, $t15, $t16, $t17], "VarIsNull", [(await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DBNumberEditeh", C, false)), "Value"))], C))))) {
        await $.wset([$t14, $t15, $t16, $t17], "amount", (await $.wcall([$t14, $t15, $t16, $t17], "StrToFloat", [(await $.wcall([$t14, $t15, $t16, $t17], "VarToStr", [(await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DBNumberEditeh", C, false)), "Value"))], C))], C)), C);
      } else {
        await $.wset([$t14, $t15, $t16, $t17], "amount", 0.0, C);
      }
      if ($.truthy($.eq((await $.wv([$t14, $t15, $t16, $t17], "periodtype", C, false)), "İL"))) {
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DepositPorpsCloseDate", C, false)), "AsDateTime", (await $.wcall([$t14, $t15, $t16, $t17], "IncYear", [(await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DepositPorpsOpenDate", C, false)), "AsDateTime")), (await $.wv([$t14, $t15, $t16, $t17], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy($.eq((await $.wv([$t14, $t15, $t16, $t17], "periodtype", C, false)), "AY"))) {
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DepositPorpsCloseDate", C, false)), "AsDateTime", (await $.wcall([$t14, $t15, $t16, $t17], "IncMonth", [(await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DepositPorpsOpenDate", C, false)), "AsDateTime")), (await $.wv([$t14, $t15, $t16, $t17], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false))], C)));
      }
      if ($.truthy($.eq((await $.wv([$t14, $t15, $t16, $t17], "periodtype", C, false)), "GÜN"))) {
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DepositPorpsCloseDate", C, false)), "AsDateTime", $.add((await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DepositPorpsOpenDate", C, false)), "AsDateTime")), (await $.wv([$t14, $t15, $t16, $t17], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false))));
      }
      if ($.truthy($.eq((await $.wv([$t14, $t15, $t16, $t17], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), 0))) {
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DtClose", C, false)), "Enabled", (await $.wv([$t14, $t15, $t16, $t17], "False", C, false)));
      } else {
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DtClose", C, false)), "Enabled", (await $.wv([$t14, $t15, $t16, $t17], "True", C, false)));
      }
      await $.mcall((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettings", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettings", C, false)), "SetVariable", ["depid", (await $.wv([$t14, $t15, $t16, $t17], "depid", C, false))])));
      await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettings", C, false)), "SetVariable", ["periodid", (await $.wv([$t14, $t15, $t16, $t17], "periodid", C, false))])));
      await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettings", C, false)), "SetVariable", ["capitalid", (await $.wv([$t14, $t15, $t16, $t17], "capitalperid", C, false))])));
      await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettings", C, false)), "SetVariable", ["currencyid", (await $.wv([$t14, $t15, $t16, $t17], "currency", C, false))])));
      await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettings", C, false)), "SetVariable", ["amount", (await $.wv([$t14, $t15, $t16, $t17], "amount", C, false))])));
      await $.mcall((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettings", C, false)), "Open", []);
      if ($.truthy($.gt((await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettings", C, false)), "RecordCount")), 1))) {
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DBLookupPercent", C, false)), "Visible", (await $.wv([$t14, $t15, $t16, $t17], "True", C, false)));
      } else {
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DBLookupPercent", C, false)), "Visible", (await $.wv([$t14, $t15, $t16, $t17], "False", C, false)));
      }
      if ($.truthy((await $.wv([$t14, $t15, $t16, $t17], "FInserted", C, false)))) {
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DbEditPercent", C, false)), "Value", (await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettingsInterestRate", C, false)), "AsFloat")));
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DbDuePercent", C, false)), "Value", (await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettingsDueIntRate", C, false)), "AsFloat")));
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DbOverDuePercent", C, false)), "Value", (await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettingsBefoIntRate", C, false)), "AsFloat")));
      } else {
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DbEditPercent", C, false)), "Value", (await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DepositPorpsINTEREST", C, false)), "AsFloat")));
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DbDuePercent", C, false)), "Value", (await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DepositPorpsDUEINTEREST", C, false)), "AsFloat")));
        await $.mset((await $.wv([$t14, $t15, $t16, $t17], "DbOverDuePercent", C, false)), "Value", (await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DepositPorpsOVERDUEINTEREST", C, false)), "AsFloat")));
      }
      await $.wset([$t14, $t15, $t16, $t17], "FDepPerSetid", (await $.mv((await $.wv([$t14, $t15, $t16, $t17], "DmDepositPerSettingsID", C, false)), "AsInteger")), C);
      await $.mcall((await $.wv([$t14, $t15, $t16, $t17], "DmProlanqasiya", C, false)), "Close", []);
      await $.mcall((await $.wv([$t14, $t15, $t16, $t17], "DmProlanqasiya", C, false)), "Open", []);
      await $.mset((await $.wv([$t14, $t15, $t16, $t17], "ChAutopr", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t16, $t17], "FieldByName", ["prolanid"], C)), "AsInteger")));
    }
    await $.wset([$t14, $t15, $t16, $t17], "period", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t14, $t15, $t16, $t17], "LCBCapPer", C, false)), "ListSource")), "DataSet")), "FieldByName", ["period"])), "AsInteger")), { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true });
    if ($.truthy($.gt((await $.wv([$t14, $t15, $t16, $t17], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), 0))) {
      {
        const $t18 = (await $.wv([$t14, $t15, $t16, $t17], "NewDataModDepositsContract", C, false));
        const $t19 = (await $.wv([$t14, $t15, $t16, $t17, $t18], "DepositPorps", C, false));
        await $.mset((await $.wcall([$t14, $t15, $t16, $t17, $t18, $t19], "FieldByName", ["FIRSTINTERESTPAYDAT"], C)), "AsDateTime", (await $.wcall([$t14, $t15, $t16, $t17, $t18, $t19], "IncMonth", [(await $.mv((await $.wcall([$t14, $t15, $t16, $t17, $t18, $t19], "FieldByName", ["OpenDate"], C)), "AsDateTime")), $.idiv((await $.wv([$t14, $t15, $t16, $t17, $t18, $t19], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), 30)], C)));
      }
    } else {
      {
        const $t20 = (await $.wv([$t14, $t15, $t16, $t17], "NewDataModDepositsContract", C, false));
        const $t21 = (await $.wv([$t14, $t15, $t16, $t17, $t20], "DepositPorps", C, false));
        await $.mset((await $.wcall([$t14, $t15, $t16, $t17, $t20, $t21], "FieldByName", ["FIRSTINTERESTPAYDAT"], C)), "AsDateTime", (await $.wcall([$t14, $t15, $t16, $t17, $t20, $t21], "IncMonth", [(await $.mv((await $.wcall([$t14, $t15, $t16, $t17, $t20, $t21], "FieldByName", ["OpenDate"], C)), "AsDateTime")), (await $.wv([$t14, $t15, $t16, $t17, $t20, $t21], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false))], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "LCBCapPerKeyPress", async function LCBCapPerKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFormDepositContract", "LCBPeriodsChange", async function LCBPeriodsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "LCBPeriodsKeyValueChanged", async function LCBPeriodsKeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "LCBPeriods")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepCapperiod")), "CloseAll", []);
  } else {
    await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepCapperiod")), "CloseAll", []);
    await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepCapperiod")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "BitBtnCancelClick", async function BitBtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SaveState", [false])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "BitBtnCloseClick", async function BitBtnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "CBCategories1KeyPress", async function CBCategories1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t22 = L0["sender"];
        { const $t23 = (await $.wv([$t22], "Tag", C, false));
          if ($.eq($t23, 1) || $.eq($t23, 3)) {
            await $.stmt((await $.wcall([$t22], "SelectNext", [(await $.wv([$t22], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t22], "True", C, false)), (await $.wv([$t22], "True", C, false))], C)));
          }
          else if ($.eq($t23, 2)) {
            await $.mcall((await $.wv([$t22], "DBLCBValutes", C, false)), "SetFocus", []);
          }
        }
        await $.wset([$t22], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFormDepositContract", "CheckNeedsFields", async function CheckNeedsFields(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["sdefemptyfieldmessage"] = "\"%s\" sahəsinə qiymət daxil olunmayıb! ";
  L0["showmessage"] = $.fn(async function ShowMessage(p0) {
  const L1 = {"message": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["message"]);
  await $.stmt((await $.mcall((await $.v(C, "ContractHint")), "ShowMessage", [L1["message"]])));
  $.abort();
  return L1.result;
});
  L0["check"] = $.fn(async function Check(p0, p1, p2) {
  const L1 = {"field": $.copyArg(p0), "message": (p1 === undefined ? (await $.v(C, "sDefEmptyFieldMessage")) : p1), "fieldname": (p2 === undefined ? "" : p2), result: undefined};
  await $.fixArgs(L1, ["field", "message", "fieldname"]);
  if ($.truthy((await $.mv(L1["field"], "IsNull")))) {
    if ($.truthy(($.eq(L1["fieldname"], "")))) {
      L1["fieldname"] = (await $.mv(L1["field"], "DisplayName"));
    }
    L1["message"] = (await $.call(C, "Format", [L1["message"], [L1["fieldname"]]]));
    await $.stmt((await $.callv(L0["showmessage"], [L1["message"]])));
  }
  return L1.result;
});
  L0["checkbyname"] = $.fn(async function CheckByName(p0) {
  const L1 = {"fieldname": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["fieldname"]);
  {
    const $t24 = (await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepositPorps"));
    await $.stmt((await $.wcall([$t24], "Check", [(await $.wcall([$t24], "FieldByName", [(await $.wv([$t24], "FieldName", { get: async () => L1["fieldname"], set: async (v) => { L1["fieldname"] = v; }, local: true }, false))], C))], { get: async () => L0["check"], set: async (v) => { L0["check"] = v; }, local: true })));
  }
  return L1.result;
});
  L0["checkbynames"] = $.fn(async function CheckByNames(p0) {
  const L1 = {"names": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L1, ["names"]);
  { const $t25 = (await $.lowHigh("high", "Names", async () => L1["names"]));
    L1["index"] = (await $.lowHigh("low", "Names", async () => L1["names"]));
    let $t26 = true;
    for (;;) {
      if (!$t26) { L1["index"] = $.succ(L1["index"], 1); }
      $t26 = false;
      if (!($.ord(L1["index"]) <= $.ord($t25))) break;
      await $.stmt((await $.callv(L0["checkbyname"], [(await $.idx(L1["names"], [L1["index"]]))])));
      await $.tick();
    }
  }
  return L1.result;
});
  await $.stmt((await $.callv(L0["checkbynames"], [["CUSTOMERID", "CONTRACTTYPE", "CURRENCY", "CONTRACTNO", "AMOUNT", "OPENDATE", "CLOSEDATE", "PERIODID", "CAPITALPERID"]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "ComboBoxCardChange", async function ComboBoxCardChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FTocard", (await $.mv((await $.v(C, "ComboBoxCard")), "ItemIndex")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "ContractTypesChange", async function ContractTypesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FPrize", (await $.mv((await $.v(C, "ComboBoxPrize")), "ItemIndex")));
  {
    const $t27 = (await $.v(C, "NewDataModDepositsContract"));
    if ($.truthy((await $.and_(($.eq((await $.wv([$t27], "csAddContract", C, false)), "InsertContract")), async () => (await $.wcall([$t27], "varisnull", [(await $.mv((await $.wv([$t27], "ContractTypes", C, false)), "KeyValue"))], C)))))) {
      await $.mcall((await $.wv([$t27], "DepPeriods", C, false)), "CloseAll", []);
      await $.mcall((await $.wv([$t27], "DepCapperiod", C, false)), "CloseAll", []);
      await $.mcall((await $.wv([$t27], "DmDepositPerSettings", C, false)), "CloseAll", []);
    } else {
      await $.mcall((await $.wv([$t27], "DepPeriods", C, false)), "CloseAll", []);
      await $.mcall((await $.wv([$t27], "DepPeriods", C, false)), "open", []);
      await $.mcall((await $.wv([$t27], "DepCapperiod", C, false)), "CloseAll", []);
      await $.mcall((await $.wv([$t27], "DepCapperiod", C, false)), "open", []);
      if ($.truthy((await $.wv([$t27], "FInserted", C, false)))) {
        await $.mset((await $.wv([$t27], "DepositPorpsCONTRACTNO", C, false)), "AsString", (await $.mcall((await $.wv([$t27], "dm_contract", C, false)), "CallStringFunction", ["getcontractno", ["dtid", (await $.mv((await $.wv([$t27], "DepositTypesID", C, false)), "AsInteger")), "filialid", (await $.mv((await $.wv([$t27], "FilalsID", C, false)), "AsInteger")), "przid", (await $.wv([$t27], "FPrize", C, false))]])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "ContractTypesKeyPress", async function ContractTypesKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt($.call(C, "GenAnnualInt", []));
  }
  await $.stmt((await $.call(C, "DBLCBFilialKeyPress", [L0["sender"], $.ref(async () => (await L0["key"].get()), async ($t28) => { await L0["key"].set($t28); })])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFormDepositContract", "DBEditNumberChange", async function DBEditNumberChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "st": '', "valkod": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["st"] = "0";
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBEditNumber")), "Text")), ""))) {
    L0["st"] = (await $.call(C, "VarToStr", [(await $.mv((await $.v(C, "DBEditNumber")), "Value"))]));
  }
  {
    const $t29 = (await $.v(C, "NewDataModDepositsContract"));
    await $.mcall((await $.wv([$t29], "Customers", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t29], "Customers", C, false)), "SetVariable", ["custid", (await $.wcall([$t29], "strtoint", [(await $.wv([$t29], "St", { get: async () => L0["st"], set: async (v) => { L0["st"] = v; }, local: true }, false))], C))])));
    await $.mcall((await $.wv([$t29], "Customers", C, false)), "Open", []);
    await $.mset((await $.wv([$t29], "DBEditName", C, false)), "Text", (await $.mv((await $.wv([$t29], "CustomersNAME", C, false)), "AsString")));
    await $.wset([$t29], "FPersonstype", (await $.mv((await $.wv([$t29], "CustomersCUST_TYPE", C, false)), "AsInteger")), C);
    await $.mset((await $.wv([$t29], "CBPersons", C, false)), "Text", (await $.mv((await $.wv([$t29], "CustomersCUSTTYPE_NAME", C, false)), "AsString")));
    await $.mcall((await $.wv([$t29], "ClientTypes", C, false)), "Close", []);
    if ($.truthy($.gt((await $.mv((await $.wv([$t29], "Customers", C, false)), "RecordCount")), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t29], "ClientTypes", C, false)), "SetVariable", ["custcategory", (await $.mv((await $.wv([$t29], "CustomersCUST_TYPE", C, false)), "AsInteger"))])));
      await $.stmt((await $.mcall((await $.wv([$t29], "ClientTypes", C, false)), "SetVariable", ["rezcategory", (await $.mv((await $.wv([$t29], "CustomersNEREZIDENT", C, false)), "AsInteger"))])));
      await $.wset([$t29], "valkod", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t29], "DBLCBValutes", C, false)), "ListSource")), "DataSet")), "FieldByName", ["valute"])), "AsInteger")), { get: async () => L0["valkod"], set: async (v) => { L0["valkod"] = v; }, local: true });
      if ($.truthy($.ne((await $.wv([$t29], "valkod", { get: async () => L0["valkod"], set: async (v) => { L0["valkod"] = v; }, local: true }, false)), 0))) {
        await $.stmt((await $.mcall((await $.wv([$t29], "ClientTypes", C, false)), "SetVariable", ["valcategory", 1])));
      } else {
        await $.stmt((await $.mcall((await $.wv([$t29], "ClientTypes", C, false)), "SetVariable", ["valcategory", 0])));
      }
      await $.mcall((await $.wv([$t29], "ClientTypes", C, false)), "Open", []);
      await $.wset([$t29], "FClientType", (await $.mv((await $.wv([$t29], "ClientTypesID", C, false)), "AsInteger")), C);
      await $.mset((await $.wv([$t29], "CBCategories", C, false)), "Text", (await $.mv((await $.wv([$t29], "ClientTypesCATEGORY", C, false)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "DBEditNumberKeyPress", async function DBEditNumberKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t30 = L0["sender"];
        { const $t31 = (await $.wv([$t30], "Tag", C, false));
          if ($.eq($t31, 1) || $.eq($t31, 3)) {
            await $.stmt((await $.wcall([$t30], "SelectNext", [(await $.wv([$t30], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t30], "True", C, false)), (await $.wv([$t30], "True", C, false))], C)));
          }
          else if ($.eq($t31, 2)) {
            await $.mcall((await $.wv([$t30], "ContractTypes", C, false)), "SetFocus", []);
          }
        }
        await $.wset([$t30], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFormDepositContract", "DBLCBFilialKeyPress", async function DBLCBFilialKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t32 = L0["sender"];
        { const $t33 = (await $.wv([$t32], "Tag", C, false));
          if ($.eq($t33, 1) || $.eq($t33, 3)) {
            await $.stmt((await $.wcall([$t32], "SelectNext", [(await $.wv([$t32], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t32], "True", C, false)), (await $.wv([$t32], "True", C, false))], C)));
          }
          else if ($.eq($t33, 2)) {
            await $.mcall((await $.wv([$t32], "ContractTypes", C, false)), "SetFocus", []);
          }
        }
        await $.wset([$t32], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFormDepositContract", "DBNumberEditehChange", async function DBNumberEditehChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "DBNumberEditehKeyPress", async function DBNumberEditehKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt($.call(C, "GenAnnualInt", []));
  }
  await $.stmt((await $.call(C, "DBLCBFilialKeyPress", [L0["sender"], $.ref(async () => (await L0["key"].get()), async ($t34) => { await L0["key"].set($t34); })])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "resultop": 0};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], (await $.v(C, "csAddContract"))))) {
    await $.mcall((await $.v(C, "NewFormDepositContract")), "PanelInsertVizible", []);
    await $.mset((await $.mv((await $.v(C, "NewFormDepositContract")), "XFBitBtn1")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "NewFormDepositContract")), "XFBitBtn2")), "Visible", true);
    {
      const $t35 = (await $.v(C, "NewDataModDepositsContract"));
      const $t36 = (await $.wv([$t35], "DepositTypes", C, false));
      await $.stmt($.wcall([$t35, $t36], "Close", [], C));
      await $.wset([$t35, $t36], "Filtered", (await $.wv([$t35, $t36], "false", C, false)), C);
      await $.wset([$t35, $t36], "Filter", "status=0", C);
      await $.wset([$t35, $t36], "Filtered", (await $.wv([$t35, $t36], "True", C, false)), C);
      await $.stmt($.wcall([$t35, $t36], "Open", [], C));
    }
    {
      const $t37 = (await $.v(C, "NewDataModDepositsContract"));
      const $t38 = (await $.wv([$t37], "Filals", C, false));
      await $.wset([$t37, $t38], "Filtered", (await $.wv([$t37, $t38], "False", C, false)), C);
      await $.wset([$t37, $t38], "Filter", "", C);
    }
    L0["resultop"] = (await $.mv((await $.v(C, "NewFormDepositContract")), "New"));
  }
  if ($.truthy($.eq(L0["s"], (await $.v(C, "csEditContract"))))) {
    await $.mcall((await $.v(C, "NewFormDepositContract")), "PanelUpdateVizible", []);
    await $.mset((await $.mv((await $.v(C, "NewFormDepositContract")), "XFBitBtn1")), "Visible", true);
    await $.mset((await $.mv((await $.v(C, "NewFormDepositContract")), "XFBitBtn2")), "Visible", true);
    {
      const $t39 = (await $.v(C, "NewDataModDepositsContract"));
      const $t40 = (await $.wv([$t39], "DepositTypes", C, false));
      await $.stmt($.wcall([$t39, $t40], "Close", [], C));
      await $.wset([$t39, $t40], "Filtered", (await $.wv([$t39, $t40], "false", C, false)), C);
      await $.wset([$t39, $t40], "Filter", "", C);
      await $.stmt($.wcall([$t39, $t40], "Open", [], C));
    }
    L0["resultop"] = (await $.mv((await $.v(C, "NewFormDepositContract")), "Edit"));
  }
  if ($.truthy($.eq(L0["s"], (await $.v(C, "csLookContract"))))) {
    await $.mcall((await $.v(C, "NewFormDepositContract")), "PanelUpdateVizible", []);
    await $.mset((await $.mv((await $.v(C, "NewFormDepositContract")), "XFBitBtn1")), "Visible", false);
    await $.mset((await $.mv((await $.v(C, "NewFormDepositContract")), "XFBitBtn2")), "Visible", false);
    {
      const $t41 = (await $.v(C, "NewDataModDepositsContract"));
      const $t42 = (await $.wv([$t41], "DepositTypes", C, false));
      await $.stmt($.wcall([$t41, $t42], "Close", [], C));
      await $.wset([$t41, $t42], "Filtered", (await $.wv([$t41, $t42], "false", C, false)), C);
      await $.wset([$t41, $t42], "Filter", "", C);
      await $.stmt($.wcall([$t41, $t42], "Open", [], C));
    }
    L0["resultop"] = (await $.mv((await $.v(C, "NewFormDepositContract")), "Edit"));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewFormDepositContract", "AddContract", async function AddContract(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t43 = (await $.v(C, "NewDataModDepositsContract"));
    const $t44 = (await $.wv([$t43], "DepositPorps", C, false));
    if ($.truthy((await $.wv([$t43, $t44], "Active", C, false)))) {
      await $.stmt($.wcall([$t43, $t44], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t43, $t44], "SetVariable", ["CONTRACTID", 0], C)));
    await $.stmt($.wcall([$t43, $t44], "Open", [], C));
    await $.stmt($.wcall([$t43, $t44], "Insert", [], C));
    await $.mset((await $.wcall([$t43, $t44], "FieldByName", ["CURRENCY"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t43, $t44], "FieldByName", ["Branchid"], C)), "AsInteger", (await $.wv([$t43, $t44], "Get_FilialID", C, false)));
    await $.mset((await $.wcall([$t43, $t44], "FieldByName", ["OpenDate"], C)), "AsDateTime", (await $.wv([$t43, $t44], "Date", C, false)));
    await $.mset((await $.wcall([$t43, $t44], "FieldByName", ["Closedate"], C)), "AsDateTime", (await $.wv([$t43, $t44], "Date", C, false)));
    await $.mset((await $.wcall([$t43, $t44], "FieldByName", ["FIRSTINTERESTPAYDAT"], C)), "AsDateTime", (await $.wv([$t43, $t44], "Date", C, false)));
    await $.mset((await $.wcall([$t43, $t44], "FieldByName", ["Amount"], C)), "AsVariant", "0.00");
    await $.mset((await $.wcall([$t43, $t44], "FieldbyName", ["dueinterest"], C)), "AsVariant", "0.00");
    await $.mset((await $.wcall([$t43, $t44], "FieldbyName", ["overdueinterest"], C)), "AsVariant", "0.00");
    await $.mset((await $.wcall([$t43, $t44], "FieldByName", ["prizeid"], C)), "AsInteger", (await $.mv((await $.wv([$t43, $t44], "ComboBoxPrize", C, false)), "ItemIndex")));
    await $.mset((await $.wcall([$t43, $t44], "FieldByName", ["ToCard"], C)), "AsInteger", (await $.mv((await $.wv([$t43, $t44], "ComboBoxCard", C, false)), "ItemIndex")));
    await $.mset((await $.wv([$t43, $t44], "DBEditAgentid", C, false)), "Value", 0);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "EditContract", async function EditContract(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["locateaccounts"] = $.fn(async function LocateAccounts(p0) {
  const L1 = {"lookupcontrol": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["lookupcontrol"]);
  {
    const $t45 = L1["lookupcontrol"];
    if ($.truthy((await $.and_(($.not((await $.wcall([$t45], "VarIsNull", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t45], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t45], "DataField", C, false))])), "AsVariant"))], C)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t45], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t45], "DataField", C, false))])), "AsInteger")), 0)))))) {
      await $.wset([$t45], "KeyValue", (await $.wv([$t45], "Null", C, false)), C);
      await $.wset([$t45], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t45], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t45], "KeyField", C, false))])), "AsInteger")), C);
    }
  }
  return L1.result;
});
  await $.set(C, "FInserted", false);
  {
    const $t46 = (await $.v(C, "NewDataModDepositsContract"));
    const $t47 = (await $.wv([$t46], "DepositPorps", C, false));
    if ($.truthy((await $.wv([$t46, $t47], "Active", C, false)))) {
      await $.stmt($.wcall([$t46, $t47], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t46, $t47], "SetVariable", ["CONTRACTID", (await $.wv([$t46, $t47], "Get_SelectedContID", C, false))], C)));
    await $.stmt($.wcall([$t46, $t47], "Open", [], C));
    await $.stmt($.wcall([$t46, $t47], "Edit", [], C));
    {
      const $t48 = (await $.wv([$t46, $t47], "Filals", C, false));
      await $.wset([$t46, $t47, $t48], "Filtered", (await $.wv([$t46, $t47, $t48], "False", C, false)), C);
      await $.wset([$t46, $t47, $t48], "Filter", $.add("id=", (await $.wcall([$t46, $t47, $t48], "IntToStr", [(await $.mv((await $.wv([$t46, $t47, $t48], "DepositPorpsBRANCHID", C, false)), "AsInteger"))], C))), C);
      await $.wset([$t46, $t47, $t48], "Filtered", (await $.wv([$t46, $t47, $t48], "True", C, false)), C);
    }
    await $.mset((await $.wv([$t46, $t47], "ComboBoxPrize", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t46, $t47], "FieldByName", ["prizeid"], C)), "AsInteger")));
    await $.mset((await $.wv([$t46, $t47], "ComboBoxCard", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t46, $t47], "FieldByName", ["tocard"], C)), "AsInteger")));
    await $.wset([$t46, $t47], "FEdited", (await $.wv([$t46, $t47], "True", C, false)), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewFormDepositContract", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "FCommited")))) {
    await $.stmt((await $.call(C, "RefreshWithSavely", [true])));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TNewFormDepositContract", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["canclose"].set((await $.or_(($.not((await $.mv((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepositPorps")), "Modified")))), async () => ($.eq((await $.call(C, "MessageDlg", [$.add($.add("Dəyişiklər qeyd olunmayacaq !", "\r"), "Əminsiniz?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")))))));
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TNewFormDepositContract", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "NewDataModDepositsContract", (await $.mcall((await $.v(C, "TNewDataModDepositsContract")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NewDataModDepositsContract")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F5"))))) {
    await $.stmt((await $.mcall((await $.v(C, "RefreshListLbl")), "OnClick", [null])));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TNewFormDepositContract", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFormDepositContract", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DBEditNumber")), "SetFocus", []);
  await $.mset((await $.v(C, "ThirdPerson")), "ReadOnly", true);
  await $.mset((await $.v(C, "ThirdPerson")), "Color", (await $.v(C, "clBtnFace")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "ShowAccounts", async function ShowAccounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "customerid": 0};
  {
    const $t49 = (await $.v(C, "NewDataModDepositsContract"));
    const $t50 = (await $.wv([$t49], "DepositPorps", C, false));
    await $.wset([$t49, $t50], "CustomerID", (await $.mv((await $.wcall([$t49, $t50], "FieldByName", ["CustomerID"], C)), "AsInteger")), { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true });
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ThirdPerson")), "ReadOnly")))) {
    await $.mset((await $.v(C, "ThirdPerson")), "ReadOnly", false);
    await $.mset((await $.v(C, "ThirdPerson")), "Color", (await $.v(C, "clWhite")));
  } else {
    await $.mset((await $.v(C, "ThirdPerson")), "ReadOnly", true);
    await $.mset((await $.v(C, "ThirdPerson")), "Color", (await $.v(C, "clBtnFace")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "AddAccount", async function AddAccount(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "r": 0, "i": 0};
  {
    const $t51 = (await $.v(C, "NewDataModDepositsContract"));
    const $t52 = (await $.wv([$t51], "ODSAccno", C, false));
    await $.stmt((await $.mcall((await $.wv([$t51, $t52], "dm_contract", C, false)), "CallProcedure", ["dmgenerateaccountnumber", ["DmType", (await $.mv((await $.wv([$t51, $t52], "ContractTypes", C, false)), "Value")), "Filialid", (await $.mv((await $.mv((await $.wv([$t51, $t52], "NewDataModDepositsContract", C, false)), "FilalsID")), "AsInteger")), "CustomerID", (await $.mv((await $.wv([$t51, $t52], "DBEditNumber", C, false)), "Value")), "Valid", (await $.mv((await $.wv([$t51, $t52], "DBLCBValutes", C, false)), "Value")), "begindat", (await $.mv((await $.wv([$t51, $t52], "DTOPEN", C, false)), "Value")), "enddate", (await $.mv((await $.wv([$t51, $t52], "DTCLOSE", C, false)), "Value")), "cardcode", (await $.mv((await $.wv([$t51, $t52], "ComboBoxCard", C, false)), "ItemIndex")), "contractid", (await $.mv((await $.wv([$t51, $t52], "SaveDeposit", C, false)), "contractid"))]])));
    await $.mcall((await $.wv([$t51, $t52], "ODSAccno", C, false)), "Close", []);
    await $.mcall((await $.wv([$t51, $t52], "ODSAccno", C, false)), "Open", []);
    {
      const $t53 = (await $.wv([$t51, $t52], "ODSAccno", C, false));
      await $.stmt($.wcall([$t51, $t52, $t53], "First", [], C));
      { const $t54 = $.sub((await $.wv([$t51, $t52, $t53], "RecordCount", C, false)), 1);
        await $.wset([$t51, $t52, $t53], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t55 = true;
        for (;;) {
          if (!$t55) { await $.wset([$t51, $t52, $t53], "I", $.succ((await $.wv([$t51, $t52, $t53], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t55 = false;
          if (!($.ord((await $.wv([$t51, $t52, $t53], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t54))) break;
          {
            const $t56 = (await $.wv([$t51, $t52, $t53], "NewFormDepositContract", C, false));
            await $.wset([$t51, $t52, $t53, $t56], "R", (await $.mcall((await $.wv([$t51, $t52, $t53, $t56], "dm_contract", C, false)), "CallIntegerFunction", ["getaddaccount", ["p_id", (await $.wv([$t51, $t52, $t53, $t56], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), "v_contractid", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "SaveDeposit", C, false)), "contractid")), "v_customerid", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoCUSTOMERID", C, false)), "asinteger")), "v_accno", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoACCNO", C, false)), "AsString")), "v_val_id", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoVAL_ID", C, false)), "AsInteger")), "v_nameaccno", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoNAMEACCNO", C, false)), "AsString")), "v_opendat", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoOPENDAT", C, false)), "AsDateTime")), "v_old_balcn", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoOLD_BALCN", C, false)), "AsInteger")), "v_new_balcn", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoNEW_BALCN", C, false)), "AsInteger")), "v_filial", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoFILIAL", C, false)), "AsInteger")), "v_fieldname", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoDEPOSITFIELDACCNO", C, false)), "AsString")), "v_simvoltype", (await $.mv((await $.wv([$t51, $t52, $t53, $t56], "ODSAccnoSIMVOLTYPE", C, false)), "AsInteger"))]])), { get: async () => L0["r"], set: async (v) => { L0["r"] = v; }, local: true });
          }
          await $.stmt($.wcall([$t51, $t52, $t53], "Next", [], C));
          await $.tick();
        }
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckNeedsFields", []));
  await $.stmt($.call(C, "SaveDeposits", []));
  await $.stmt((await $.call(C, "SaveState", [true])));
  await $.set(C, "FCommited", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "SaveState", [false])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "XFBitBtn3Click", async function XFBitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  await $.set(C, "FInserted", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "XFPanel22Click", async function XFPanel22Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.v(C, "FInserted"))))) {
    await $.set(C, "FormCredit", (await $.mcall((await $.v(C, "TFormCredit")), "Create", [Self])));
    await $.mcall((await $.v(C, "FormCredit")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "New", async function New(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["rs_newcontract"] = "Müqavilənin  əlavə olunması";
  await $.set(C, "FInserted", true);
  await $.stmt($.call(C, "AddContract", []));
  await $.set(C, "Caption", L0["rs_newcontract"]);
  await $.mset((await $.v(C, "Lbluser")), "Visible", false);
  await $.mset((await $.v(C, "Label13")), "Visible", false);
  await $.mset((await $.v(C, "ComboBoxPrize")), "ItemIndex", 0);
  await $.mset((await $.v(C, "ComboBoxCard")), "ItemIndex", 0);
  L0["result"] = (await $.v(C, "ShowModal"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewFormDepositContract", "Edit", async function Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "fcontractno": ''};
  L0["rs_editcontract"] = "%s № li müqavilənin redaktə olunması";
  L0["fcontractno"] = (await $.v(C, "Get_SelectedContNo"));
  await $.stmt($.call(C, "EditContract", []));
  await $.set(C, "Caption", (await $.call(C, "Format", [L0["rs_editcontract"], [L0["fcontractno"]]])));
  await $.mset((await $.v(C, "Lbluser")), "Visible", true);
  await $.mset((await $.v(C, "Label13")), "Visible", true);
  await $.mset((await $.v(C, "Lbluser")), "Caption", (await $.mv((await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepositPorps")), "FieldByName", ["username"])), "AsString")));
  L0["result"] = (await $.v(C, "ShowModal"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TNewFormDepositContract", "SaveDeposits", async function SaveDeposits(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t57 = (await $.v(C, "NewDataModDepositsContract"));
    const $t58 = (await $.wv([$t57], "DepositPorps", C, false));
    const $t59 = (await $.wv([$t57, $t58], "SaveDeposit", C, false));
    await $.mset((await $.wcall([$t57, $t58, $t59], "FieldByName", ["agentid"], C)), "AsVariant", (await $.mv((await $.wv([$t57, $t58, $t59], "DBEditAgentid", C, false)), "Value")));
    await $.mset((await $.wcall([$t57, $t58, $t59], "FieldByName", ["clienttype"], C)), "AsInteger", (await $.wv([$t57, $t58, $t59], "FClientType", C, false)));
    await $.mset((await $.wcall([$t57, $t58, $t59], "FieldByName", ["personaltype"], C)), "AsInteger", (await $.wv([$t57, $t58, $t59], "FPersonstype", C, false)));
    await $.mset((await $.wcall([$t57, $t58, $t59], "FieldByName", ["deppersetid"], C)), "AsInteger", (await $.wv([$t57, $t58, $t59], "FDepPerSetid", C, false)));
    await $.mset((await $.wcall([$t57, $t58, $t59], "FieldByName", ["tocard"], C)), "AsInteger", (await $.wv([$t57, $t58, $t59], "FTocard", C, false)));
    await $.mset((await $.wcall([$t57, $t58, $t59], "FieldByName", ["prizeid"], C)), "AsInteger", (await $.wv([$t57, $t58, $t59], "FPrize", C, false)));
    await $.wset([$t57, $t58, $t59], "contractid", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["id"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "TypeD", 3, C);
    await $.wset([$t57, $t58, $t59], "ContractNo", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["Contractno"], C)), "AsString")), C);
    await $.wset([$t57, $t58, $t59], "opendate", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["opendate"], C)), "AsDateTime")), C);
    await $.wset([$t57, $t58, $t59], "CloseDate", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["CloseDate"], C)), "AsDateTime")), C);
    await $.wset([$t57, $t58, $t59], "amount", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["amount"], C)), "AsFloat")), C);
    await $.wset([$t57, $t58, $t59], "contracttype", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["contracttype"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "clienttype", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["clienttype"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "branchid", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["branchid"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "currency", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["currency"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "personaltype", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["personaltype"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "customerid", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["customerid"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "interest", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["interest"], C)), "AsFloat")), C);
    await $.wset([$t57, $t58, $t59], "overdueinterest", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["dueinterest"], C)), "AsFloat")), C);
    await $.wset([$t57, $t58, $t59], "dueinterest", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["overdueinterest"], C)), "AsFloat")), C);
    await $.wset([$t57, $t58, $t59], "FirstPayDateforInt", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["firstinterestpaydat"], C)), "AsDateTime")), C);
    await $.wset([$t57, $t58, $t59], "PeriodID", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldbyName", ["PeriodID"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "CapitalperID", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldbyName", ["CapitalperID"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "autopr", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldbyName", ["PROLANID"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "tocard", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["tocard"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "personsid", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["personsid"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "agentid", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["agentid"], C)), "AsVariant")), C);
    await $.wset([$t57, $t58, $t59], "prizeid", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["prizeid"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "deppersetid", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["deppersetid"], C)), "AsInteger")), C);
    await $.wset([$t57, $t58, $t59], "bonusstatus", (await $.mv((await $.wcall([$t57, $t58, $t59], "FieldByName", ["bonusstatus"], C)), "AsInteger")), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "SaveState", async function SaveState(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"save": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["save"]);
  {
    const $t60 = (await $.v(C, "NewDataModDepositsContract"));
    const $t61 = (await $.wv([$t60], "DepositPorps", C, false));
    if ($.truthy((await $.wv([$t60, $t61], "Save", { get: async () => L0["save"], set: async (v) => { L0["save"] = v; }, local: true }, false)))) {
      await $.stmt($.wcall([$t60, $t61], "Post", [], C));
    } else {
      await $.stmt($.wcall([$t60, $t61], "Cancel", [], C));
    }
    if ($.truthy((await $.wv([$t60, $t61], "FInserted", C, false)))) {
      if ($.truthy((await $.wv([$t60, $t61], "Save", { get: async () => L0["save"], set: async (v) => { L0["save"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t60, $t61], "AddAccount", [], C));
        await $.stmt($.wcall([$t60, $t61], "AddContract", [], C));
      } else {
        await $.stmt($.wcall([$t60, $t61], "Cancel", [], C));
      }
      await $.mcall((await $.wv([$t60, $t61], "DBLCBFilial", C, false)), "SetFocus", []);
    } else {
      await $.mcall(Self, "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Save"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TNewFormDepositContract", "RefreshListLblClick", async function RefreshListLblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t62 = (await $.v(C, "NewDataModDepositsContract"));
    await $.stmt($.wcall([$t62], "RefreshDataSets", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "RefreshAllDeposits", async function RefreshAllDeposits(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "bookm": null};
  if ($.truthy((await $.v(C, "FCommited")))) {
    await $.stmt((await $.call(C, "RefreshWithSavely", [true])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewFormDepositContract", (await $.mcall((await $.v(C, "TNewFormDepositContract")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
