// Generated from NewFormDepositContractImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewFormDepositContractImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CMDBSearchEdit", "ComCtrls", "DBCtrls", "Buttons", "HintBox", "DB", "variants", "DBGridEh", "NewContractCommonDecls", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl", "NewDepositsContractImpl"]);
  const C = [U];
  U.defClass("TNewFormDepositContract", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "refreshlistlbl": {"name": "RefreshListLbl", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "lbluser": {"name": "Lbluser", "type": "TLabel"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "bitbtncancel": {"name": "BitBtnCancel", "type": "TBitBtn"}, "bitbtnclose": {"name": "BitBtnClose", "type": "TBitBtn"}, "contracthint": {"name": "ContractHint", "type": "THintBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "contracttypes": {"name": "ContractTypes", "type": "TDBLookupComboboxEh"}, "panel43": {"name": "Panel43", "type": "TPanel"}, "label98": {"name": "Label98", "type": "TLabel"}, "label99": {"name": "Label99", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "lcbperiods": {"name": "LCBPeriods", "type": "TDBLookupComboboxEh"}, "lcbcapper": {"name": "LCBCapPer", "type": "TDBLookupComboboxEh"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "dblcbvalutes": {"name": "DBLCBValutes", "type": "TDBLookupComboboxEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dto": {"name": "DTO", "type": "TDBDateTimeEditEh"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbnumberediteh3": {"name": "DBNumberEditEh3", "type": "TDBNumberEditEh"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbnumberediteh": {"name": "DBNumberEditeh", "type": "TDBNumberEditEh"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "label30": {"name": "Label30", "type": "TLabel"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "cmsearchedit2": {"name": "CMSearchEdit2", "type": "TCMSearchEdit"}, "dblookupcomboboxeh10": {"name": "DBLookupComboboxEh10", "type": "TDBLookupComboboxEh"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "cmsearchedit3": {"name": "CMSearchEdit3", "type": "TCMSearchEdit"}, "dblookupcomboboxeh11": {"name": "DBLookupComboboxEh11", "type": "TDBLookupComboboxEh"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "cmsearchedit4": {"name": "CMSearchEdit4", "type": "TCMSearchEdit"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "chautopr": {"name": "ChAutopr", "type": "TCheckBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "dblcbfilial": {"name": "DBLCBFilial", "type": "TDBLookupComboboxEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "cmsearchedit5": {"name": "CMSearchEdit5", "type": "TCMSearchEdit"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "cbcategories": {"name": "CBCategories", "type": "TDBLookupComboboxEh"}, "cbpersons": {"name": "CBPersons", "type": "TDBLookupComboboxEh"}, "finserted": {"name": "FInserted", "type": "Boolean"}, "fcommited": {"name": "FCommited", "type": "Boolean"}, "fedited": {"name": "FEdited", "type": "Boolean"}}, {});
  U.init(async () => {
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
    const $t2 = (await $.wv([$t1], "sbcm_contract", C, false));
    const $t3 = (await $.wv([$t1, $t2], "DepositPorps", C, false));
    await $.wset([$t1, $t2, $t3], "DepositID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "ContractTypes", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["depositid"], set: async (v) => { L0["depositid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "CurrencyID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "DBLCBValutes", C, false)), "ListSource")), "DataSet")), "FieldByName", ["valute"])), "AsInteger")), { get: async () => L0["currencyid"], set: async (v) => { L0["currencyid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "PeriodID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "LCBPeriods", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["periodid"], set: async (v) => { L0["periodid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "CapitalperID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t1, $t2, $t3], "LCBCapPer", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["capitalperid"], set: async (v) => { L0["capitalperid"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "Amount", (await $.mv((await $.wv([$t1, $t2, $t3], "DBNumberEditEh", C, false)), "Value")), { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true });
    await $.wset([$t1, $t2, $t3], "IntRate", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["INTEREST"], C)), "AsString")), C);
    await $.wset([$t1, $t2, $t3], "OIntRate", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["OVERDUEINTEREST"], C)), "AsFloat")), C);
    await $.wset([$t1, $t2, $t3], "DIntRate", (await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["DUEINTEREST"], C)), "AsFloat")), C);
    if ($.truthy((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.wv([$t1, $t2, $t3], "ContractTypes", C, false)), "KeyValue")), (await $.wv([$t1, $t2, $t3], "null", C, false)))), async () => ($.ne((await $.mv((await $.wv([$t1, $t2, $t3], "DBLCBValutes", C, false)), "KeyValue")), (await $.wv([$t1, $t2, $t3], "null", C, false)))))), async () => ($.ne((await $.mv((await $.wv([$t1, $t2, $t3], "LCBPeriods", C, false)), "KeyValue")), (await $.wv([$t1, $t2, $t3], "null", C, false)))))), async () => ($.ne((await $.mv((await $.wv([$t1, $t2, $t3], "LCBCapPer", C, false)), "KeyValue")), (await $.wv([$t1, $t2, $t3], "null", C, false)))))))) {
      await $.mset((await $.wcall([$t1, $t2, $t3], "FieldByName", ["INTEREST"], C)), "AsString", (await $.wcall([$t1, $t2, $t3], "CallFloatFunction", ["Get_DefaultContractRate", ["p_DepositType", (await $.wv([$t1, $t2, $t3], "DepositID", { get: async () => L0["depositid"], set: async (v) => { L0["depositid"] = v; }, local: true }, false)), "p_Currency", (await $.wv([$t1, $t2, $t3], "CurrencyID", { get: async () => L0["currencyid"], set: async (v) => { L0["currencyid"] = v; }, local: true }, false)), "p_periodID", (await $.wv([$t1, $t2, $t3], "PeriodID", { get: async () => L0["periodid"], set: async (v) => { L0["periodid"] = v; }, local: true }, false)), "p_CapitalperID", (await $.wv([$t1, $t2, $t3], "CapitalperID", { get: async () => L0["capitalperid"], set: async (v) => { L0["capitalperid"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t1, $t2, $t3], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "p_defint", (await $.wv([$t1, $t2, $t3], "True", C, false)), "p_defUntimeint", (await $.wv([$t1, $t2, $t3], "false", C, false))]], C)));
      await $.mset((await $.wcall([$t1, $t2, $t3], "FieldByName", ["OVERDUEINTEREST"], C)), "AsFloat", (await $.wcall([$t1, $t2, $t3], "CallFloatFunction", ["Get_DefaultContractRate", ["p_DepositType", (await $.wv([$t1, $t2, $t3], "DepositID", { get: async () => L0["depositid"], set: async (v) => { L0["depositid"] = v; }, local: true }, false)), "p_Currency", (await $.wv([$t1, $t2, $t3], "CurrencyID", { get: async () => L0["currencyid"], set: async (v) => { L0["currencyid"] = v; }, local: true }, false)), "p_periodID", (await $.wv([$t1, $t2, $t3], "PeriodID", { get: async () => L0["periodid"], set: async (v) => { L0["periodid"] = v; }, local: true }, false)), "p_CapitalperID", (await $.wv([$t1, $t2, $t3], "CapitalperID", { get: async () => L0["capitalperid"], set: async (v) => { L0["capitalperid"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t1, $t2, $t3], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "p_defint", (await $.wv([$t1, $t2, $t3], "false", C, false)), "p_defUntimeint", (await $.wv([$t1, $t2, $t3], "true", C, false))]], C)));
      await $.mset((await $.wcall([$t1, $t2, $t3], "FieldByName", ["DUEINTEREST"], C)), "AsFloat", (await $.wcall([$t1, $t2, $t3], "CallFloatFunction", ["Get_DefaultContractRate", ["p_DepositType", (await $.wv([$t1, $t2, $t3], "DepositID", { get: async () => L0["depositid"], set: async (v) => { L0["depositid"] = v; }, local: true }, false)), "p_Currency", (await $.wv([$t1, $t2, $t3], "CurrencyID", { get: async () => L0["currencyid"], set: async (v) => { L0["currencyid"] = v; }, local: true }, false)), "p_periodID", (await $.wv([$t1, $t2, $t3], "PeriodID", { get: async () => L0["periodid"], set: async (v) => { L0["periodid"] = v; }, local: true }, false)), "p_CapitalperID", (await $.wv([$t1, $t2, $t3], "CapitalperID", { get: async () => L0["capitalperid"], set: async (v) => { L0["capitalperid"] = v; }, local: true }, false)), "p_Amount", (await $.wv([$t1, $t2, $t3], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "p_defint", (await $.wv([$t1, $t2, $t3], "false", C, false)), "p_defUntimeint", (await $.wv([$t1, $t2, $t3], "false", C, false))]], C)));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "LCBCapPerChange", async function LCBCapPerChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "period": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["period"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "LCBCapPer")), "ListSource")), "DataSet")), "FieldByName", ["period"])), "AsInteger"));
  if ($.truthy($.gt(L0["period"], 0))) {
    {
      const $t4 = (await $.v(C, "NewDataModDepositsContract"));
      const $t5 = (await $.wv([$t4], "DepositPorps", C, false));
      await $.mset((await $.wcall([$t4, $t5], "FieldByName", ["FIRSTINTERESTPAYDAT"], C)), "AsDateTime", (await $.wcall([$t4, $t5], "IncMonth", [(await $.mv((await $.wcall([$t4, $t5], "FieldByName", ["OpenDate"], C)), "AsDateTime")), $.idiv((await $.wv([$t4, $t5], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), 30)], C)));
    }
  } else {
    {
      const $t6 = (await $.v(C, "NewDataModDepositsContract"));
      const $t7 = (await $.wv([$t6], "DepositPorps", C, false));
      await $.mset((await $.wcall([$t6, $t7], "FieldByName", ["FIRSTINTERESTPAYDAT"], C)), "AsDateTime", (await $.wcall([$t6, $t7], "IncMonth", [(await $.mv((await $.wcall([$t6, $t7], "FieldByName", ["OpenDate"], C)), "AsDateTime")), (await $.wv([$t6, $t7], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false))], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "LCBCapPerKeyPress", async function LCBCapPerKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ContractTypesKeyPress", [L0["sender"], $.ref(async () => (await L0["key"].get()), async ($t8) => { await L0["key"].set($t8); })])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFormDepositContract", "LCBPeriodsChange", async function LCBPeriodsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "period": 0, "period_type": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["period"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "LCBPeriods")), "ListSource")), "DataSet")), "FieldByName", ["period"])), "AsInteger"));
  L0["period_type"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "LCBPeriods")), "ListSource")), "DataSet")), "FieldByName", ["period_type"])), "AsString"));
  {
    const $t9 = (await $.v(C, "NewDataModDepositsContract"));
    const $t10 = (await $.wv([$t9], "DepositPorps", C, false));
    const $t11 = (await $.wv([$t9, $t10], "sbcm_contract", C, false));
    if ($.truthy($.eq((await $.wv([$t9, $t10, $t11], "period_type", { get: async () => L0["period_type"], set: async (v) => { L0["period_type"] = v; }, local: true }, false)), "Ay"))) {
      await $.mset((await $.wcall([$t9, $t10, $t11], "FieldByName", ["Closedate"], C)), "AsDateTime", (await $.wcall([$t9, $t10, $t11], "IncMonth", [(await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["OpenDate"], C)), "AsDateTime")), (await $.wv([$t9, $t10, $t11], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false))], C)));
    }
    if ($.truthy($.eq((await $.wv([$t9, $t10, $t11], "period_type", { get: async () => L0["period_type"], set: async (v) => { L0["period_type"] = v; }, local: true }, false)), "Gün"))) {
      await $.mset((await $.wcall([$t9, $t10, $t11], "FieldByName", ["Closedate"], C)), "AsDateTime", $.add((await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["OpenDate"], C)), "AsDateTime")), (await $.wv([$t9, $t10, $t11], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false))));
    }
    if ($.truthy($.eq((await $.wv([$t9, $t10, $t11], "period", { get: async () => L0["period"], set: async (v) => { L0["period"] = v; }, local: true }, false)), 0))) {
      await $.mset((await $.wv([$t9, $t10, $t11], "DBDateTimeEditEh2", C, false)), "Enabled", (await $.wv([$t9, $t10, $t11], "false", C, false)));
    } else {
      await $.mset((await $.wv([$t9, $t10, $t11], "DBDateTimeEditEh2", C, false)), "Enabled", (await $.wv([$t9, $t10, $t11], "true", C, false)));
    }
  }
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
  U.method("TNewFormDepositContract", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckNeedsFields", []));
  await $.stmt($.call(C, "SaveDeposits", []));
  await $.stmt((await $.call(C, "SaveState", [true])));
  await $.set(C, "FCommited", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "CBCategories1KeyPress", async function CBCategories1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t12 = L0["sender"];
        { const $t13 = (await $.wv([$t12], "Tag", C, false));
          if ($.eq($t13, 1) || $.eq($t13, 3)) {
            await $.stmt((await $.wcall([$t12], "SelectNext", [(await $.wv([$t12], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t12], "True", C, false)), (await $.wv([$t12], "True", C, false))], C)));
          }
          else if ($.eq($t13, 2)) {
            await $.mcall((await $.wv([$t12], "DBLCBValutes", C, false)), "SetFocus", []);
          }
        }
        await $.wset([$t12], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
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
    if ($.truthy($.eq(L1["fieldname"], ""))) {
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
    const $t14 = (await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepositPorps"));
    await $.stmt((await $.wcall([$t14], "Check", [(await $.wcall([$t14], "FieldByName", [(await $.wv([$t14], "FieldName", { get: async () => L1["fieldname"], set: async (v) => { L1["fieldname"] = v; }, local: true }, false))], C))], { get: async () => L0["check"], set: async (v) => { L0["check"] = v; }, local: true })));
  }
  return L1.result;
});
  L0["checkbynames"] = $.fn(async function CheckByNames(p0) {
  const L1 = {"names": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L1, ["names"]);
  { const $t15 = (await $.lowHigh("high", "Names", async () => L1["names"]));
    L1["index"] = (await $.lowHigh("low", "Names", async () => L1["names"]));
    let $t16 = true;
    for (;;) {
      if (!$t16) { L1["index"] = $.succ(L1["index"], 1); }
      $t16 = false;
      if (!($.ord(L1["index"]) <= $.ord($t15))) break;
      await $.stmt((await $.callv(L0["checkbyname"], [(await $.idx(L1["names"], [L1["index"]]))])));
      await $.tick();
    }
  }
  return L1.result;
});
  await $.stmt((await $.callv(L0["checkbynames"], [["BRANCHID", "CONTRACTNO", "OPENDATE", "CLOSEDATE", "INTEREST", "OVERDUEINTEREST", "CONTRACTTYPE", "CLIENTTYPE", "PERSONALTYPE", "CURRENCY", "AMOUNT", "CUSTOMERID"]])));
  {
    const $t17 = (await $.v(C, "NewDataModDepositsContract"));
    const $t18 = (await $.wv([$t17], "DepositPorps", C, false));
    const $t19 = (await $.wv([$t17, $t18], "sbcm_contract", C, false));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["ContractAccID"], C)), "AsInteger")), 0))) {
      await $.stmt((await $.wcall([$t17, $t18, $t19], "ShowMessage", ["Depozit Hesabı sahəsinə qiymət daxil olunmayıb! "], { get: async () => L0["showmessage"], set: async (v) => { L0["showmessage"] = v; }, local: true })));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["InterestAccID"], C)), "AsInteger")), 0))) {
      await $.stmt((await $.wcall([$t17, $t18, $t19], "ShowMessage", ["Faizlər Hesabı sahəsinə qiymət daxil olunmayıb! "], { get: async () => L0["showmessage"], set: async (v) => { L0["showmessage"] = v; }, local: true })));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["ClientAccID"], C)), "AsInteger")), 0))) {
      await $.stmt((await $.wcall([$t17, $t18, $t19], "ShowMessage", ["Müştəri Hesabı sahəsinə qiymət daxil olunmayıb! "], { get: async () => L0["showmessage"], set: async (v) => { L0["showmessage"] = v; }, local: true })));
    }
    if ($.truthy($.eq((await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["Booroweraccid"], C)), "AsInteger")), 0))) {
      await $.stmt((await $.wcall([$t17, $t18, $t19], "ShowMessage", ["Köçürmə Hesabı sahəsinə qiymət daxil olunmayıb! "], { get: async () => L0["showmessage"], set: async (v) => { L0["showmessage"] = v; }, local: true })));
    }
    if ($.truthy($.not((await $.wcall([$t17, $t18, $t19], "CallBooleanFunction", ["Check_BankAccount", ["p_categoryID", (await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["ClientType"], C)), "AsInteger")), "p_currencyID", (await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["CURRENCY"], C)), "AsInteger")), "p_BranchID", (await $.mv((await $.wcall([$t17, $t18, $t19], "FieldByName", ["BRANCHID"], C)), "AsInteger"))]], C))))) {
      await $.stmt((await $.wcall([$t17, $t18, $t19], "ShowMessage", ["Bu tip müqaviləyə \"depozitlərdə  faizlər üçün məxaric hesabı\" sazlanılmayıb! "], { get: async () => L0["showmessage"], set: async (v) => { L0["showmessage"] = v; }, local: true })));
    }
    {
      const $t20 = (await $.wv([$t17, $t18, $t19], "NewDataModDepositsContract", C, false));
      const $t21 = (await $.wv([$t17, $t18, $t19, $t20], "DepositTypes1", C, false));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20, $t21], "DepositTypes1", C, false)), "FieldByName", ["WITHDRAWTYPE"])), "AsString")), "BefoPercent"))) {
        if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t17, $t18, $t19, $t20, $t21], "DepositPorps", C, false)), "FieldByName", ["BEFO_INTERESTPEYTACCID"])), "AsInteger")), 0))) {
          await $.stmt((await $.wcall([$t17, $t18, $t19, $t20, $t21], "ShowMessage", ["Faizlərin əvvəlcədən ödənməsi hesabı sahəsinə qiymət daxil olunmayıb! "], { get: async () => L0["showmessage"], set: async (v) => { L0["showmessage"] = v; }, local: true })));
        }
      }
      return L0.result;
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "ContractTypesKeyPress", async function ContractTypesKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt($.call(C, "GenAnnualInt", []));
  }
  await $.stmt((await $.call(C, "DBLCBFilialKeyPress", [L0["sender"], $.ref(async () => (await L0["key"].get()), async ($t22) => { await L0["key"].set($t22); })])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFormDepositContract", "ContractTypesKeyValueChanged", async function ContractTypesKeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ContractTypes")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepPeriods")), "CloseAll", []);
    await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepCapperiod")), "CloseAll", []);
  } else {
    await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepPeriods")), "CloseAll", []);
    await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepPeriods")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepCapperiod")), "CloseAll", []);
    await $.mcall((await $.mv((await $.v(C, "NewDataModDepositsContract")), "DepCapperiod")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t23 = L0["sender"];
        { const $t24 = (await $.wv([$t23], "Tag", C, false));
          if ($.eq($t24, 1) || $.eq($t24, 3)) {
            await $.stmt((await $.wcall([$t23], "SelectNext", [(await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t23], "True", C, false)), (await $.wv([$t23], "True", C, false))], C)));
          }
          else if ($.eq($t24, 2)) {
            await $.mcall((await $.wv([$t23], "DBLCBValutes", C, false)), "SetFocus", []);
          }
        }
        await $.wset([$t23], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
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
        const $t25 = L0["sender"];
        { const $t26 = (await $.wv([$t25], "Tag", C, false));
          if ($.eq($t26, 1) || $.eq($t26, 3)) {
            await $.stmt((await $.wcall([$t25], "SelectNext", [(await $.wv([$t25], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t25], "True", C, false)), (await $.wv([$t25], "True", C, false))], C)));
          }
          else if ($.eq($t26, 2)) {
            await $.mcall((await $.wv([$t25], "DBLCBValutes", C, false)), "SetFocus", []);
          }
        }
        await $.wset([$t25], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFormDepositContract", "DBLookupComboboxEh11KeyValueChanged", async function DBLookupComboboxEh11KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t27], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t27], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "DBLookupComboboxEh2KeyValueChanged", async function DBLookupComboboxEh2KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t28], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t28], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "DBLookupComboboxEh9KeyValueChanged", async function DBLookupComboboxEh9KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t29 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t29], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t29], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "DBNumberEditehKeyPress", async function DBNumberEditehKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt($.call(C, "GenAnnualInt", []));
  }
  await $.stmt((await $.call(C, "DBLCBFilialKeyPress", [L0["sender"], $.ref(async () => (await L0["key"].get()), async ($t30) => { await L0["key"].set($t30); })])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "resultop": 0};
  await $.fixArgs(L0, ["s"]);
  L0["csaddcontract"] = "InsertContract";
  L0["cseditcontract"] = "EditContract";
  if ($.truthy($.eq(L0["s"], L0["csaddcontract"]))) {
    L0["resultop"] = (await $.mv((await $.v(C, "NewFormDepositContract")), "New"));
  }
  if ($.truthy($.eq(L0["s"], L0["cseditcontract"]))) {
    L0["resultop"] = (await $.mv((await $.v(C, "NewFormDepositContract")), "Edit"));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewFormDepositContract", "AddContract", async function AddContract(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t31 = (await $.v(C, "NewDataModDepositsContract"));
    const $t32 = (await $.wv([$t31], "DepositPorps", C, false));
    if ($.truthy((await $.wv([$t31, $t32], "Active", C, false)))) {
      await $.stmt($.wcall([$t31, $t32], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t31, $t32], "SetVariable", ["CONTRACTID", 0], C)));
    await $.stmt($.wcall([$t31, $t32], "Open", [], C));
    await $.stmt($.wcall([$t31, $t32], "Insert", [], C));
    await $.mset((await $.wcall([$t31, $t32], "FieldByName", ["CURRENCY"], C)), "AsInteger", 0);
    await $.mset((await $.wcall([$t31, $t32], "FieldByName", ["Branchid"], C)), "AsInteger", (await $.wv([$t31, $t32], "Get_FilialID", C, false)));
    await $.mset((await $.wcall([$t31, $t32], "FieldByName", ["OpenDate"], C)), "AsDateTime", (await $.wv([$t31, $t32], "Get_BankDate", C, false)));
    await $.mset((await $.wcall([$t31, $t32], "FieldByName", ["Closedate"], C)), "AsDateTime", (await $.wv([$t31, $t32], "Get_BankDate", C, false)));
    await $.mset((await $.wcall([$t31, $t32], "FieldByName", ["FIRSTINTERESTPAYDAT"], C)), "AsDateTime", (await $.wv([$t31, $t32], "Get_BankDate", C, false)));
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
    const $t33 = L1["lookupcontrol"];
    if ($.truthy((await $.and_(($.not((await $.wcall([$t33], "VarIsNull", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t33], "DataField", C, false))])), "AsVariant"))], C)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t33], "DataField", C, false))])), "AsInteger")), 0)))))) {
      await $.wset([$t33], "KeyValue", (await $.wv([$t33], "Null", C, false)), C);
      await $.wset([$t33], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t33], "KeyField", C, false))])), "AsInteger")), C);
    }
  }
  return L1.result;
});
  await $.set(C, "FInserted", false);
  {
    const $t34 = (await $.v(C, "NewDataModDepositsContract"));
    const $t35 = (await $.wv([$t34], "DepositPorps", C, false));
    if ($.truthy((await $.wv([$t34, $t35], "Active", C, false)))) {
      await $.stmt($.wcall([$t34, $t35], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t34, $t35], "SetVariable", ["CONTRACTID", (await $.wv([$t34, $t35], "Get_SelectedContID", C, false))], C)));
    await $.stmt($.wcall([$t34, $t35], "Open", [], C));
    await $.stmt($.wcall([$t34, $t35], "Edit", [], C));
    await $.stmt($.wcall([$t34, $t35], "ShowAccounts", [], C));
    await $.wset([$t34, $t35], "FEdited", (await $.wv([$t34, $t35], "True", C, false)), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
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
  await $.mcall((await $.v(C, "ContractTypes")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFormDepositContract", "ShowAccounts", async function ShowAccounts(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "customerid": 0, "contractaccid": 0, "interestaccid": 0, "clientaccid": 0, "booroweraccid": 0, "autopr": 0, "befo_interestpeytaccid": 0};
  {
    const $t36 = (await $.v(C, "NewDataModDepositsContract"));
    {
      const $t37 = (await $.wv([$t36], "DepositPorps", C, false));
      await $.wset([$t36, $t37], "CustomerID", (await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["CustomerID"], C)), "AsInteger")), { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true });
      await $.wset([$t36, $t37], "CONTRACTACCID", (await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["CONTRACTACCID"], C)), "AsInteger")), { get: async () => L0["contractaccid"], set: async (v) => { L0["contractaccid"] = v; }, local: true });
      await $.wset([$t36, $t37], "InterestAccID", (await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["InterestAccID"], C)), "AsInteger")), { get: async () => L0["interestaccid"], set: async (v) => { L0["interestaccid"] = v; }, local: true });
      await $.wset([$t36, $t37], "ClientAccID", (await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["ClientAccID"], C)), "AsInteger")), { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true });
      await $.wset([$t36, $t37], "Booroweraccid", (await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["Booroweraccid"], C)), "AsInteger")), { get: async () => L0["booroweraccid"], set: async (v) => { L0["booroweraccid"] = v; }, local: true });
      await $.wset([$t36, $t37], "Autopr", (await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["Autopr"], C)), "AsInteger")), { get: async () => L0["autopr"], set: async (v) => { L0["autopr"] = v; }, local: true });
      await $.wset([$t36, $t37], "BEFO_INTERESTPEYTACCID", (await $.mv((await $.wcall([$t36, $t37], "FieldByName", ["BEFO_INTERESTPEYTACCID"], C)), "AsInteger")), { get: async () => L0["befo_interestpeytaccid"], set: async (v) => { L0["befo_interestpeytaccid"] = v; }, local: true });
    }
    {
      const $t38 = (await $.wv([$t36], "DepositAccs", C, false));
      if ($.truthy((await $.wv([$t36, $t38], "Active", C, false)))) {
        await $.stmt($.wcall([$t36, $t38], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t36, $t38], "SetVariable", ["CustID", (await $.wv([$t36, $t38], "CustomerID", { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t36, $t38], "Open", [], C));
    }
    {
      const $t39 = (await $.wv([$t36], "InterestsAccs", C, false));
      if ($.truthy((await $.wv([$t36, $t39], "Active", C, false)))) {
        await $.stmt($.wcall([$t36, $t39], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t36, $t39], "SetVariable", ["CustID", (await $.wv([$t36, $t39], "CustomerID", { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t36, $t39], "Open", [], C));
    }
    {
      const $t40 = (await $.wv([$t36], "ClientAccs", C, false));
      if ($.truthy((await $.wv([$t36, $t40], "Active", C, false)))) {
        await $.stmt($.wcall([$t36, $t40], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t36, $t40], "SetVariable", ["CustID", (await $.wv([$t36, $t40], "CustomerID", { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t36, $t40], "Open", [], C));
    }
    {
      const $t41 = (await $.wv([$t36], "BoorowerAccs", C, false));
      if ($.truthy((await $.wv([$t36, $t41], "Active", C, false)))) {
        await $.stmt($.wcall([$t36, $t41], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t36, $t41], "SetVariable", ["CustID", (await $.wv([$t36, $t41], "CustomerID", { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t36, $t41], "Open", [], C));
    }
    {
      const $t42 = (await $.wv([$t36], "DSBEFO_INTERESTPEYTACC", C, false));
      if ($.truthy((await $.wv([$t36, $t42], "Active", C, false)))) {
        await $.stmt($.wcall([$t36, $t42], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t36, $t42], "SetVariable", ["CustID", (await $.wv([$t36, $t42], "CustomerID", { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t36, $t42], "Open", [], C));
    }
  }
  {
    const $t43 = (await $.v(C, "DBLookupComboboxEh9"));
    const $t44 = (await $.mv((await $.wv([$t43], "DataSource", C, false)), "DataSet"));
    await $.wset([$t43, $t44], "KeyValue", (await $.wv([$t43, $t44], "CONTRACTACCID", { get: async () => L0["contractaccid"], set: async (v) => { L0["contractaccid"] = v; }, local: true }, false)), C);
  }
  {
    const $t45 = (await $.v(C, "DBLookupComboboxEh10"));
    const $t46 = (await $.mv((await $.wv([$t45], "DataSource", C, false)), "DataSet"));
    await $.wset([$t45, $t46], "KeyValue", (await $.wv([$t45, $t46], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false)), C);
  }
  {
    const $t47 = (await $.v(C, "DBLookupComboboxEh11"));
    const $t48 = (await $.mv((await $.wv([$t47], "DataSource", C, false)), "DataSet"));
    await $.wset([$t47, $t48], "KeyValue", (await $.wv([$t47, $t48], "InterestAccID", { get: async () => L0["interestaccid"], set: async (v) => { L0["interestaccid"] = v; }, local: true }, false)), C);
  }
  {
    const $t49 = (await $.v(C, "DBLookupComboboxEh2"));
    const $t50 = (await $.mv((await $.wv([$t49], "DataSource", C, false)), "DataSet"));
    await $.wset([$t49, $t50], "KeyValue", (await $.wv([$t49, $t50], "Booroweraccid", { get: async () => L0["booroweraccid"], set: async (v) => { L0["booroweraccid"] = v; }, local: true }, false)), C);
  }
  if ($.truthy($.eq(L0["autopr"], 1))) {
    await $.mset((await $.v(C, "ChAutopr")), "Checked", true);
  } else {
    await $.mset((await $.v(C, "ChAutopr")), "Checked", false);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "New", async function New(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  L0["rs_newcontract"] = "Müqavilənin  əlavə olunması";
  await $.set(C, "FInserted", true);
  await $.stmt($.call(C, "AddContract", []));
  await $.set(C, "Caption", L0["rs_newcontract"]);
  await $.mset((await $.v(C, "Lbluser")), "Visible", false);
  await $.mset((await $.v(C, "Label13")), "Visible", false);
  await $.mset((await $.v(C, "ChAutopr")), "checked", true);
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
    const $t51 = (await $.v(C, "NewDataModDepositsContract"));
    const $t52 = (await $.wv([$t51], "DepositPorps", C, false));
    const $t53 = (await $.wv([$t51, $t52], "SaveDeposit", C, false));
    await $.wset([$t51, $t52, $t53], "TypeD", 3, C);
    await $.wset([$t51, $t52, $t53], "ContractNo", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["Contractno"], C)), "AsString")), C);
    await $.wset([$t51, $t52, $t53], "opendate", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["opendate"], C)), "AsDateTime")), C);
    await $.wset([$t51, $t52, $t53], "CloseDate", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["CloseDate"], C)), "AsDateTime")), C);
    await $.wset([$t51, $t52, $t53], "amount", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["amount"], C)), "AsFloat")), C);
    await $.wset([$t51, $t52, $t53], "contracttype", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["contracttype"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "clienttype", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["clienttype"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "branchid", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["branchid"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "currency", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["currency"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "personaltype", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["personaltype"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "customerid", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["customerid"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "interest", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["interest"], C)), "AsString")), C);
    await $.wset([$t51, $t52, $t53], "overdueinterest", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["overdueinterest"], C)), "AsFloat")), C);
    await $.wset([$t51, $t52, $t53], "dueinterest", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["dueinterest"], C)), "AsFloat")), C);
    await $.wset([$t51, $t52, $t53], "contractaccid", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["contractaccid"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "clientaccid", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["clientaccid"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "interestaccid", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["interestaccid"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "booroweraccid", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["booroweraccid"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "FirstPayDateforInt", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["firstinterestpaydat"], C)), "AsDateTime")), C);
    await $.wset([$t51, $t52, $t53], "PeriodID", (await $.mv((await $.wcall([$t51, $t52, $t53], "fieldbyName", ["PeriodID"], C)), "AsInteger")), C);
    await $.wset([$t51, $t52, $t53], "CapitalperID", (await $.mv((await $.wcall([$t51, $t52, $t53], "fieldbyName", ["CapitalperID"], C)), "AsInteger")), C);
    if ($.truthy((await $.mv((await $.wv([$t51, $t52, $t53], "ChAutopr", C, false)), "Checked")))) {
      await $.mset((await $.wcall([$t51, $t52, $t53], "fieldbyName", ["Autopr"], C)), "AsInteger", 1);
      await $.wset([$t51, $t52, $t53], "autopr", (await $.mv((await $.wcall([$t51, $t52, $t53], "fieldbyName", ["Autopr"], C)), "AsInteger")), C);
    } else {
      await $.mset((await $.wcall([$t51, $t52, $t53], "fieldbyName", ["Autopr"], C)), "AsInteger", 0);
      await $.wset([$t51, $t52, $t53], "autopr", (await $.mv((await $.wcall([$t51, $t52, $t53], "fieldbyName", ["Autopr"], C)), "AsInteger")), C);
    }
    await $.wset([$t51, $t52, $t53], "BEFO_INTERESTPEYTACCID", (await $.mv((await $.wcall([$t51, $t52, $t53], "FieldByName", ["BEFO_INTERESTPEYTACCID"], C)), "AsInteger")), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TNewFormDepositContract", "SaveState", async function SaveState(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"save": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["save"]);
  {
    const $t54 = (await $.v(C, "NewDataModDepositsContract"));
    const $t55 = (await $.wv([$t54], "DepositPorps", C, false));
    if ($.truthy((await $.wv([$t54, $t55], "Save", { get: async () => L0["save"], set: async (v) => { L0["save"] = v; }, local: true }, false)))) {
      await $.stmt($.wcall([$t54, $t55], "Post", [], C));
    } else {
      await $.stmt($.wcall([$t54, $t55], "Cancel", [], C));
    }
    if ($.truthy((await $.wv([$t54, $t55], "FInserted", C, false)))) {
      if ($.truthy((await $.wv([$t54, $t55], "Save", { get: async () => L0["save"], set: async (v) => { L0["save"] = v; }, local: true }, false)))) {
        await $.stmt($.wcall([$t54, $t55], "AddContract", [], C));
      } else {
        await $.stmt($.wcall([$t54, $t55], "Cancel", [], C));
      }
      await $.mcall((await $.wv([$t54, $t55], "DBLCBFilial", C, false)), "SetFocus", []);
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
    const $t56 = (await $.v(C, "NewDataModDepositsContract"));
    await $.stmt($.wcall([$t56], "RefreshDataSets", [], C));
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
