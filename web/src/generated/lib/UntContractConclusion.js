// Generated from UntContractConclusion.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntContractConclusion", ["Windows", "Buttons", "StdCtrls", "ComCtrls", "Mask", "DBCtrls", "Controls", "ExtCtrls", "Classes", "Forms", "SysUtils", "Db", "Messages", "Dialogs", "Graphics", "Grids", "DBGrids", "SearchEdit", "DBViewComboBox", "CurrencyEdit", "StoredProgramsUnit", "UntConclusionDataModule", "sbcmMainDataModule"]);
  const C = [U];
  U.const("pmNormal", 0);
  U.const("pmOverdue", 1);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.defClass("EInvalidPercents", "Exception", {}, {});
  U.defClass("TFrmContract", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "gbgrandaccs": {"name": "GBGrandAccs", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "gbreserveaccs": {"name": "GBReserveAccs", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "gboverdueaccs": {"name": "GBOverdueAccs", "type": "TGroupBox"}, "gboverdueinterestaccs": {"name": "GBOverdueInterestAccs", "type": "TGroupBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "gbstopcalcdate": {"name": "GBStopCalcDate", "type": "TGroupBox"}, "dtpstopcalcdate": {"name": "DTPStopCalcDate", "type": "TDateTimePicker"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "contractnumedit": {"name": "ContractNumEdit", "type": "TEdit"}, "gbreliability": {"name": "GBReliability", "type": "TGroupBox"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "gbmountlypayment": {"name": "GBMountlyPayment", "type": "TGroupBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "cbmountlyrent": {"name": "CBMountlyRent", "type": "TCheckBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "percentedit": {"name": "PercentEdit", "type": "TEdit"}, "cbconstant": {"name": "CBConstant", "type": "TCheckBox"}, "sbbrowse": {"name": "SBBrowse", "type": "TSpeedButton"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "gboverduepercent": {"name": "GBOverduePercent", "type": "TGroupBox"}, "sboverduebrowse": {"name": "SBOverdueBrowse", "type": "TSpeedButton"}, "overduepercentedit": {"name": "OverduePercentEdit", "type": "TEdit"}, "cboverdueconstant": {"name": "CBOverdueConstant", "type": "TCheckBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "mounthlyamount": {"name": "MounthlyAmount", "type": "TEdit"}, "mounthlypercent": {"name": "MounthlyPercent", "type": "TEdit"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "gbpledge": {"name": "GBPledge", "type": "TGroupBox"}, "groupbox18": {"name": "GroupBox18", "type": "TGroupBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "grandaccs": {"name": "GrandAccs", "type": "TSearchEdit"}, "clientaccs": {"name": "ClientAccs", "type": "TSearchEdit"}, "reserveaccs": {"name": "ReserveAccs", "type": "TSearchEdit"}, "interestaccs": {"name": "InterestAccs", "type": "TSearchEdit"}, "overdueaccs": {"name": "OverdueAccs", "type": "TSearchEdit"}, "overdueinterestaccs": {"name": "OverdueInterestAccs", "type": "TSearchEdit"}, "reliabilitypercentedit": {"name": "ReliabilityPercentEdit", "type": "TEdit"}, "grandnames": {"name": "GrandNames", "type": "TDBViewComboBox"}, "clientnames": {"name": "ClientNames", "type": "TDBViewComboBox"}, "reliabilitynames": {"name": "ReliabilityNames", "type": "TDBViewComboBox"}, "interestnames": {"name": "InterestNames", "type": "TDBViewComboBox"}, "overduenames": {"name": "OverdueNames", "type": "TDBViewComboBox"}, "overdueinterestnames": {"name": "OverdueInterestNames", "type": "TDBViewComboBox"}, "reliabilityviewer": {"name": "ReliabilityViewer", "type": "TDBViewComboBox"}, "cbclienttype": {"name": "CBClientType", "type": "TDBViewComboBox"}, "cbpledgetype": {"name": "CBPledgeType", "type": "TDBViewComboBox"}, "cbcontracttype": {"name": "CBContractType", "type": "TDBViewComboBox"}, "currencygroupbox": {"name": "CurrencyGroupBox", "type": "TGroupBox"}, "currencyviewer": {"name": "CurrencyViewer", "type": "TDBViewComboBox"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "currencyedit": {"name": "CurrencyEdit", "type": "TEdit"}, "dbtextcurrency": {"name": "DBTextCurrency", "type": "TDBText"}, "pledgepriceedit": {"name": "PledgePriceEdit", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "btnapply": {"name": "BtnApply", "type": "TButton"}, "btnclose": {"name": "BtnClose", "type": "TButton"}, "amountedit": {"name": "AmountEdit", "type": "TCurrencyEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "overduereserveaccs": {"name": "OverdueReserveAccs", "type": "TSearchEdit"}, "overduereservenames": {"name": "OverdueReserveNames", "type": "TDBViewComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "overduereliabilityviewer": {"name": "OverdueReliabilityViewer", "type": "TDBViewComboBox"}, "faccountsid": {"name": "FAccountsID", "type": "TAccountsID"}, "fopmode": {"name": "FOpMode", "type": "TOperationMode"}, "fcontracttype": {"name": "FContractType", "type": "Integer"}, "floatabledate": {"name": "FloatableDate", "type": "TFloatableDate"}, "floatablepercent": {"name": "FloatablePercent", "type": "TFloatablePercent"}, "iscontrolreseting": {"name": "IsControlReseting", "type": "Boolean"}}, {});
  U.fieldInit("TFrmContract", "faccountsid", () => $.sarr());
  U.fieldInit("TFrmContract", "floatabledate", () => []);
  U.fieldInit("TFrmContract", "floatablepercent", () => []);
  U.init(async () => {
    U.const("_SEARCHED", 33);
    U.var_("FrmContract", null, "TFrmContract");
  });
  U.method("TFrmContract", "FindOtherAccounts", async function FindOtherAccounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "custid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  try {
    L0["custid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "DataSource")), "DataSet")), "FieldByName", ["CustID"])), "AsInteger"));
    { const $t1 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t2 = true;
      for (;;) {
        if (!$t2) { L0["i"] = $.succ(L0["i"], 1); }
        $t2 = false;
        if (!($.ord(L0["i"]) <= $.ord($t1))) break;
        if ($.truthy((await $.and_(($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSearchEdit")), async () => ($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Tag")), (await $.v(C, "_SEARCHED")))))))) {
          {
            const $t3 = (await $.call(C, "TSearchEdit", [(await $.idx((await $.v(C, "Components")), [L0["i"]]))]));
            if ($.truthy((await $.mcall((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "Locate", ["CustID", (await $.wv([$t3], "CustID", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), []])))) {
              if ($.truthy((await $.and_(($.gt((await $.mv((await $.mv((await $.wv([$t3], "Partnership", C, false)), "Items")), "Count")), 0)), async () => ($.lt((await $.mv((await $.wv([$t3], "Partnership", C, false)), "ItemIndex")), 0)))))) {
                await $.mset((await $.wv([$t3], "Partnership", C, false)), "ItemIndex", 0);
              }
              await $.stmt((await $.mcall((await $.wv([$t3], "Partnership", C, false)), "OnChange", [(await $.wv([$t3], "Partnership", C, false))])));
            }
          }
        }
        await $.tick();
      }
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "CheckingAccounts", async function CheckingAccounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sedit": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["sedit"]);
  L0["result"] = (-(1));
  {
    const $t4 = L0["sedit"];
    if ($.truthy($.ne((await $.wv([$t4], "Text", C, false)), ""))) {
      if ($.truthy((await $.and_((await $.mv((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "Active")), async () => ($.gt((await $.mv((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "RecordCount")), 0)))))) {
        await $.wset([$t4], "Result", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataSource", C, false)), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["SEdit"], "kind": "function", "ptypes": ["TSearchEdit"]});
  U.method("TFrmContract", "ContractConclusion", async function ContractConclusion(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"opmode": $.copyArg(p0), "contracttype": $.copyArg(p1), result: undefined, "opendate": 0, "closedate": 0, "stopcalcdate": 0, "amount": 0, "mamount": 0, "mpercent": 0, "pledgeprice": 0};
  await $.fixArgs(L0, ["opmode", "contracttype"]);
  try {
    L0["opendate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOpenDate")), "DateTime"))]));
    L0["closedate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPCloseDate")), "DateTime"))]));
    L0["stopcalcdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPStopCalcDate")), "DateTime"))]));
    L0["amount"] = (await $.mv((await $.v(C, "AmountEdit")), "Value"));
    L0["pledgeprice"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "PledgePriceEdit")), "Text"))]));
    if ($.truthy((await $.mv((await $.v(C, "CBMountlyRent")), "Checked")))) {
      L0["mamount"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "MounthlyAmount")), "Text"))]));
      L0["mpercent"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "MounthlyPercent")), "Text"))]));
    } else {
      L0["mamount"] = 0;
      L0["mpercent"] = 0;
    }
    await $.stmt($.call(C, "InitPercents", []));
    {
      const $t5 = (await $.v(C, "DataModContract"));
      {
        const $t6 = (await $.wv([$t5], "ContractPack", C, false));
        if ($.truthy($.eq((await $.wv([$t5, $t6], "FOpMode", C, false)), (await $.wv([$t5, $t6], "omInsert", C, false))))) {
          await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", ["NewContract", [(await $.wv([$t5, $t6], "ContractType", { get: async () => L0["contracttype"], set: async (v) => { L0["contracttype"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "OpenDate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "CloseDate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5, $t6], "ContractNumEdit", C, false)), "Text")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "CBContractType", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "CBPledgeType", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "ReliabilityViewer", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "CBClientType", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value")), (await $.wv([$t5, $t6], "PledgePrice", { get: async () => L0["pledgeprice"], set: async (v) => { L0["pledgeprice"] = v; }, local: true }, false)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "GrandAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "ClientAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "ReserveAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "InterestAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "OverdueAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "OverdueInterestAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "OverdueReserveAccs", C, false))], C)), (await $.wv([$t5, $t6], "StopCalcDate", { get: async () => L0["stopcalcdate"], set: async (v) => { L0["stopcalcdate"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "MAmount", { get: async () => L0["mamount"], set: async (v) => { L0["mamount"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "MPercent", { get: async () => L0["mpercent"], set: async (v) => { L0["mpercent"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "OverdueReliabilityViewer", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value"))]], C)));
        } else {
          await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", ["UpdateingContract", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t5, $t6], "MainDataModule", C, false)), "Contracts")), "FieldByName", ["ID"])), "Value")), (await $.wv([$t5, $t6], "ContractType", { get: async () => L0["contracttype"], set: async (v) => { L0["contracttype"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "OpenDate", { get: async () => L0["opendate"], set: async (v) => { L0["opendate"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "CloseDate", { get: async () => L0["closedate"], set: async (v) => { L0["closedate"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "Amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t5, $t6], "ContractNumEdit", C, false)), "Text")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "CBContractType", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "CBPledgeType", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "ReliabilityViewer", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "CBClientType", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value")), (await $.wv([$t5, $t6], "PledgePrice", { get: async () => L0["pledgeprice"], set: async (v) => { L0["pledgeprice"] = v; }, local: true }, false)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "GrandAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "ClientAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "ReserveAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "InterestAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "OverdueAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "OverdueInterestAccs", C, false))], C)), (await $.wcall([$t5, $t6], "CheckingAccounts", [(await $.wv([$t5, $t6], "OverdueReserveAccs", C, false))], C)), (await $.wv([$t5, $t6], "StopCalcDate", { get: async () => L0["stopcalcdate"], set: async (v) => { L0["stopcalcdate"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "MAmount", { get: async () => L0["mamount"], set: async (v) => { L0["mamount"] = v; }, local: true }, false)), (await $.wv([$t5, $t6], "MPercent", { get: async () => L0["mpercent"], set: async (v) => { L0["mpercent"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5, $t6], "OverdueReliabilityViewer", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "Value"))]], C)));
        }
      }
    }
  } finally {
    if ($.truthy((await $.and_((await $.call(C, "SBCMPercentAssigned", [(await $.v(C, "pmNormal"))])), async () => (await $.call(C, "SBCMPercentAssigned", [(await $.v(C, "pmOverdue"))])))))) {
      await $.stmt($.call(C, "FreePercents", []));
    }
  }
  return L0.result;
}, {"params": ["opMode", "ContractType"], "kind": "procedure", "ptypes": ["TOperationMode", "Integer"]});
  U.method("TFrmContract", "CheckDateSequnce", async function CheckDateSequnce(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"floatdate": $.copyArg(p0), "mode": $.copyArg(p1), result: null, "succesfuly": false, "index": 0};
  await $.fixArgs(L0, ["floatdate", "mode"]);
  L0["succesfuly"] = true;
  L0["index"] = 0;
  while ($.truthy((await $.and_(L0["succesfuly"], async () => ($.le(L0["index"], $.sub((await $.call(C, "High", [(await $.idx((await $.v(C, "FloatableDate")), [L0["mode"]]))])), 1))))))) {
    L0["succesfuly"] = $.lt((await $.idx((await $.idx(L0["floatdate"], [L0["mode"]])), [L0["index"]])), (await $.idx((await $.idx(L0["floatdate"], [L0["mode"]])), [$.add(L0["index"], 1)])));
    L0["index"] = $.add(L0["index"], 1);
    await $.tick();
  }
  L0["result"] = L0["succesfuly"];
  return L0.result;
}, {"params": ["FloatDate", "Mode"], "kind": "function", "ptypes": ["TFloatableDate", "TPercentMode"]});
  U.method("TFrmContract", "IncludePercents", async function IncludePercents(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "index": 0, "percentcount": 0, "percentmode": null};
  L0["percentmode"] = (await $.v(C, "pmNormal"));
  L0["percentcount"] = (await $.mv((await $.mv((await $.v(C, "MainDataModule")), "Interests")), "RecordCount"));
  if ($.truthy($.gt(L0["percentcount"], 1))) {
    {
      const $t7 = (await $.mv((await $.v(C, "MainDataModule")), "Interests"));
      await $.stmt((await $.wcall([$t7], "SetLength", [$.ref(async () => (await $.idx((await $.wv([$t7], "FloatableDate", C, false)), [(await $.wv([$t7], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))])), async ($t8) => { { const $t9 = await $.iset((await $.wv([$t7], "FloatableDate", C, false)), [(await $.wv([$t7], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))], $t8); if ($t9 !== undefined) { await $.wset([$t7], "FloatableDate", $t9, C); } } }), (await $.wv([$t7], "PercentCount", { get: async () => L0["percentcount"], set: async (v) => { L0["percentcount"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t7], "SetLength", [$.ref(async () => (await $.idx((await $.wv([$t7], "FloatablePercent", C, false)), [(await $.wv([$t7], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))])), async ($t10) => { { const $t11 = await $.iset((await $.wv([$t7], "FloatablePercent", C, false)), [(await $.wv([$t7], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))], $t10); if ($t11 !== undefined) { await $.wset([$t7], "FloatablePercent", $t11, C); } } }), (await $.wv([$t7], "PercentCount", { get: async () => L0["percentcount"], set: async (v) => { L0["percentcount"] = v; }, local: true }, false))], C)));
      await $.mset((await $.wv([$t7], "CBConstant", C, false)), "Checked", (await $.wv([$t7], "False", C, false)));
      await $.stmt($.wcall([$t7], "First", [], C));
      await $.wset([$t7], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      while ($.truthy($.not((await $.wv([$t7], "EOF", C, false))))) {
        { const $t12 = await $.iset((await $.idx((await $.wv([$t7], "FloatableDate", C, false)), [(await $.wv([$t7], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))])), [(await $.wv([$t7], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], (await $.wcall([$t7], "Trunc", [(await $.mv((await $.wcall([$t7], "FieldByName", ["HDate"], C)), "AsDateTime"))], C))); if ($t12 !== undefined) { { const $t13 = await $.iset((await $.wv([$t7], "FloatableDate", C, false)), [(await $.wv([$t7], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))], $t12); if ($t13 !== undefined) { await $.wset([$t7], "FloatableDate", $t13, C); } } } }
        { const $t14 = await $.iset((await $.idx((await $.wv([$t7], "FloatablePercent", C, false)), [(await $.wv([$t7], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))])), [(await $.wv([$t7], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t7], "FieldByName", ["Interest"], C)), "AsFloat"))); if ($t14 !== undefined) { { const $t15 = await $.iset((await $.wv([$t7], "FloatablePercent", C, false)), [(await $.wv([$t7], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))], $t14); if ($t15 !== undefined) { await $.wset([$t7], "FloatablePercent", $t15, C); } } } }
        await $.stmt((await $.wcall([$t7], "Inc", [$.ref(async () => (await $.wv([$t7], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), async ($t16) => { await $.wset([$t7], "Index", $t16, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); })], C)));
        await $.stmt($.wcall([$t7], "Next", [], C));
        await $.tick();
      }
    }
  } else {
    await $.mset((await $.v(C, "CBConstant")), "Checked", true);
    await $.mset((await $.v(C, "PercentEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Interests")), "FieldByName", ["Interest"])), "AsString")));
  }
  L0["percentmode"] = (await $.v(C, "pmOverdue"));
  L0["percentcount"] = (await $.mv((await $.mv((await $.v(C, "MainDataModule")), "OverdueInterests")), "RecordCount"));
  if ($.truthy($.gt(L0["percentcount"], 1))) {
    {
      const $t17 = (await $.mv((await $.v(C, "MainDataModule")), "OverdueInterests"));
      await $.stmt((await $.wcall([$t17], "SetLength", [$.ref(async () => (await $.idx((await $.wv([$t17], "FloatableDate", C, false)), [(await $.wv([$t17], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))])), async ($t18) => { { const $t19 = await $.iset((await $.wv([$t17], "FloatableDate", C, false)), [(await $.wv([$t17], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))], $t18); if ($t19 !== undefined) { await $.wset([$t17], "FloatableDate", $t19, C); } } }), (await $.wv([$t17], "PercentCount", { get: async () => L0["percentcount"], set: async (v) => { L0["percentcount"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t17], "SetLength", [$.ref(async () => (await $.idx((await $.wv([$t17], "FloatablePercent", C, false)), [(await $.wv([$t17], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))])), async ($t20) => { { const $t21 = await $.iset((await $.wv([$t17], "FloatablePercent", C, false)), [(await $.wv([$t17], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))], $t20); if ($t21 !== undefined) { await $.wset([$t17], "FloatablePercent", $t21, C); } } }), (await $.wv([$t17], "PercentCount", { get: async () => L0["percentcount"], set: async (v) => { L0["percentcount"] = v; }, local: true }, false))], C)));
      await $.mset((await $.wv([$t17], "CBOverdueConstant", C, false)), "Checked", (await $.wv([$t17], "False", C, false)));
      await $.stmt($.wcall([$t17], "First", [], C));
      await $.wset([$t17], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      while ($.truthy($.not((await $.wv([$t17], "EOF", C, false))))) {
        { const $t22 = await $.iset((await $.idx((await $.wv([$t17], "FloatableDate", C, false)), [(await $.wv([$t17], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))])), [(await $.wv([$t17], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], (await $.wcall([$t17], "Trunc", [(await $.mv((await $.wcall([$t17], "FieldByName", ["HDate"], C)), "AsDateTime"))], C))); if ($t22 !== undefined) { { const $t23 = await $.iset((await $.wv([$t17], "FloatableDate", C, false)), [(await $.wv([$t17], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))], $t22); if ($t23 !== undefined) { await $.wset([$t17], "FloatableDate", $t23, C); } } } }
        { const $t24 = await $.iset((await $.idx((await $.wv([$t17], "FloatablePercent", C, false)), [(await $.wv([$t17], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))])), [(await $.wv([$t17], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))], (await $.mv((await $.wcall([$t17], "FieldByName", ["OverdueInterest"], C)), "AsFloat"))); if ($t24 !== undefined) { { const $t25 = await $.iset((await $.wv([$t17], "FloatablePercent", C, false)), [(await $.wv([$t17], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))], $t24); if ($t25 !== undefined) { await $.wset([$t17], "FloatablePercent", $t25, C); } } } }
        await $.stmt((await $.wcall([$t17], "Inc", [$.ref(async () => (await $.wv([$t17], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), async ($t26) => { await $.wset([$t17], "Index", $t26, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); })], C)));
        await $.stmt($.wcall([$t17], "Next", [], C));
        await $.tick();
      }
    }
  } else {
    await $.mset((await $.v(C, "CBOverdueConstant")), "Checked", true);
    await $.mset((await $.v(C, "OverduePercentEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "OverdueInterests")), "FieldByName", ["OverdueInterest"])), "AsString")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmContract", "FreePercents", async function FreePercents(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t27 = (await $.mv((await $.v(C, "DataModContract")), "ContractPack"));
    await $.stmt((await $.wcall([$t27], "CallProcedure", ["Free", []], C)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmContract", "InitPercents", async function InitPercents(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "currentdate": 0, "i": 0};
  if ($.truthy((await $.and_((await $.call(C, "CheckDateSequnce", [(await $.v(C, "FloatableDate")), (await $.v(C, "pmNormal"))])), async () => (await $.call(C, "CheckDateSequnce", [(await $.v(C, "FloatableDate")), (await $.v(C, "pmOverdue"))])))))) {
    {
      const $t28 = (await $.mv((await $.v(C, "DataModContract")), "ContractPack"));
      if ($.truthy((await $.mv((await $.wv([$t28], "CBConstant", C, false)), "Checked")))) {
        await $.stmt((await $.wcall([$t28], "CallProcedure", ["Init", [0, 1]], C)));
        await $.wset([$t28], "CurrentDate", (await $.wcall([$t28], "Trunc", [(await $.mv((await $.wv([$t28], "DTPOpenDate", C, false)), "DateTime"))], C)), { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true });
        await $.stmt((await $.wcall([$t28], "CallProcedure", ["AddValue", [0, (await $.wv([$t28], "CurrentDate", { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true }, false)), (await $.wcall([$t28], "StrToFloat", [(await $.mv((await $.wv([$t28], "PercentEdit", C, false)), "Text"))], C))]], C)));
      } else {
        if ($.truthy((await $.wcall([$t28], "Assigned", [(await $.idx((await $.wv([$t28], "FloatableDate", C, false)), [(await $.wv([$t28], "pmNormal", C, false))]))], C)))) {
          await $.stmt((await $.wcall([$t28], "CallProcedure", ["Init", [0, $.add((await $.wcall([$t28], "High", [(await $.idx((await $.wv([$t28], "FloatablePercent", C, false)), [(await $.wv([$t28], "pmNormal", C, false))]))], C)), 1)]], C)));
          { const $t29 = (await $.wcall([$t28], "High", [(await $.idx((await $.wv([$t28], "FloatablePercent", C, false)), [(await $.wv([$t28], "pmNormal", C, false))]))], C));
            await $.wset([$t28], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
            let $t30 = true;
            for (;;) {
              if (!$t30) { await $.wset([$t28], "I", $.succ((await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
              $t30 = false;
              if (!($.ord((await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t29))) break;
              await $.wset([$t28], "CurrentDate", (await $.idx((await $.idx((await $.wv([$t28], "FloatableDate", C, false)), [(await $.wv([$t28], "pmNormal", C, false))])), [(await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true });
              await $.stmt((await $.wcall([$t28], "CallProcedure", ["AddValue", [0, (await $.wv([$t28], "CurrentDate", { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true }, false)), (await $.idx((await $.idx((await $.wv([$t28], "FloatablePercent", C, false)), [(await $.wv([$t28], "pmNormal", C, false))])), [(await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))]], C)));
              await $.tick();
            }
          }
        } else {
          await $.stmt((await $.mcall((await $.wv([$t28], "EInvalidPercents", C, false)), "Create", ["Invalid Percents!"])));
        }
      }
      if ($.truthy((await $.mv((await $.wv([$t28], "CBOverdueConstant", C, false)), "Checked")))) {
        await $.stmt((await $.wcall([$t28], "CallProcedure", ["Init", [1, 1]], C)));
        await $.wset([$t28], "CurrentDate", (await $.wcall([$t28], "Trunc", [(await $.mv((await $.wv([$t28], "DTPOpenDate", C, false)), "DateTime"))], C)), { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true });
        await $.stmt((await $.wcall([$t28], "CallProcedure", ["AddValue", [1, (await $.wv([$t28], "CurrentDate", { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true }, false)), (await $.wcall([$t28], "StrToFloat", [(await $.mv((await $.wv([$t28], "OverduePercentEdit", C, false)), "Text"))], C))]], C)));
      } else {
        if ($.truthy((await $.wcall([$t28], "Assigned", [(await $.idx((await $.wv([$t28], "FloatableDate", C, false)), [(await $.wv([$t28], "pmOverdue", C, false))]))], C)))) {
          await $.stmt((await $.wcall([$t28], "CallProcedure", ["Init", [1, $.add((await $.wcall([$t28], "High", [(await $.idx((await $.wv([$t28], "FloatablePercent", C, false)), [(await $.wv([$t28], "pmOverdue", C, false))]))], C)), 1)]], C)));
          { const $t31 = (await $.wcall([$t28], "High", [(await $.idx((await $.wv([$t28], "FloatablePercent", C, false)), [(await $.wv([$t28], "pmOverdue", C, false))]))], C));
            await $.wset([$t28], "I", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
            let $t32 = true;
            for (;;) {
              if (!$t32) { await $.wset([$t28], "I", $.succ((await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
              $t32 = false;
              if (!($.ord((await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t31))) break;
              await $.wset([$t28], "CurrentDate", (await $.idx((await $.idx((await $.wv([$t28], "FloatableDate", C, false)), [(await $.wv([$t28], "pmOverdue", C, false))])), [(await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true });
              await $.stmt((await $.wcall([$t28], "CallProcedure", ["AddValue", [1, (await $.wv([$t28], "CurrentDate", { get: async () => L0["currentdate"], set: async (v) => { L0["currentdate"] = v; }, local: true }, false)), (await $.idx((await $.idx((await $.wv([$t28], "FloatablePercent", C, false)), [(await $.wv([$t28], "pmOverdue", C, false))])), [(await $.wv([$t28], "I", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))]], C)));
              await $.tick();
            }
          }
        } else {
          throw $.raise((await $.mcall((await $.wv([$t28], "EInvalidPercents", C, false)), "Create", ["Invalid Percents!!"])));
        }
      }
    }
  } else {
    throw $.raise((await $.mcall((await $.v(C, "EInvalidPercents")), "Create", ["Invalid Percents!!!"])));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmContract", "LoadingAccounts", async function LoadingAccounts(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"params": $.copyArg(p0), result: undefined, "currentcurrency": 0};
  await $.fixArgs(L0, ["params"]);
  {
    const $t33 = (await $.v(C, "DataModContract"));
    await $.wset([$t33], "CurrentCurrency", (await $.mv((await $.mcall((await $.mv((await $.wv([$t33], "MainDataModule", C, false)), "Contracts")), "FieldByName", ["ContractCurrencyID"])), "AsInteger")), { get: async () => L0["currentcurrency"], set: async (v) => { L0["currentcurrency"] = v; }, local: true });
    await $.stmt((await $.mcall((await $.wv([$t33], "CurrencyDataSet", C, false)), "Locate", ["CurrencyID", (await $.wv([$t33], "CurrentCurrency", { get: async () => L0["currentcurrency"], set: async (v) => { L0["currentcurrency"] = v; }, local: true }, false)), []])));
    await $.mset((await $.wv([$t33], "CurrencyEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t33], "CurrencyDataSet", C, false)), "FieldByName", ["CurrencyID"])), "AsString")));
    await $.stmt($.wcall([$t33], "ResetContrls", [], C));
    await $.stmt((await $.wcall([$t33], "LoadAccount", [(await $.wv([$t33], "GrandAccs", C, false)), (await $.idx((await $.wv([$t33], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), [0]))], C)));
    await $.stmt((await $.wcall([$t33], "LoadAccount", [(await $.wv([$t33], "ClientAccs", C, false)), (await $.idx((await $.wv([$t33], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), [1]))], C)));
    await $.stmt((await $.wcall([$t33], "LoadAccount", [(await $.wv([$t33], "ReserveAccs", C, false)), (await $.idx((await $.wv([$t33], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), [2]))], C)));
    await $.stmt((await $.wcall([$t33], "LoadAccount", [(await $.wv([$t33], "InterestAccs", C, false)), (await $.idx((await $.wv([$t33], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), [3]))], C)));
    await $.stmt((await $.wcall([$t33], "LoadAccount", [(await $.wv([$t33], "OverdueAccs", C, false)), (await $.idx((await $.wv([$t33], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), [4]))], C)));
    await $.stmt((await $.wcall([$t33], "LoadAccount", [(await $.wv([$t33], "OverdueInterestAccs", C, false)), (await $.idx((await $.wv([$t33], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), [5]))], C)));
    await $.stmt((await $.wcall([$t33], "LoadAccount", [(await $.wv([$t33], "OverdueReserveAccs", C, false)), (await $.idx((await $.wv([$t33], "Params", { get: async () => L0["params"], set: async (v) => { L0["params"] = v; }, local: true }, false)), [6]))], C)));
  }
  return L0.result;
}, {"params": ["Params"], "kind": "procedure", "ptypes": ["TAccountsID"]});
  U.method("TFrmContract", "LoadAccount", async function LoadAccount(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sedit": $.copyArg(p0), "accountid": (p1 === undefined ? (-(1)) : p1), result: undefined};
  await $.fixArgs(L0, ["sedit", "accountid"]);
  if ($.truthy((await $.and_((await $.and_((await $.mv((await $.mv((await $.mv(L0["sedit"], "DataSource")), "DataSet")), "Active")), async () => ($.gt((await $.mv((await $.mv((await $.mv(L0["sedit"], "DataSource")), "DataSet")), "RecordCount")), 0)))), async () => (await $.mcall((await $.mv((await $.mv(L0["sedit"], "DataSource")), "DataSet")), "Locate", ["ID", L0["accountid"], []])))))) {
    await $.mset(L0["sedit"], "Text", (await $.mv((await $.mcall((await $.mv((await $.mv(L0["sedit"], "DataSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
    if ($.truthy((await $.and_((await $.call(C, "Assigned", [(await $.mv(L0["sedit"], "PartnerShip"))])), async () => ($.eq((await $.mv((await $.mv(L0["sedit"], "PartnerShip")), "ItemIndex")), (-(1)))))))) {
      await $.mset((await $.mv(L0["sedit"], "PartnerShip")), "ItemIndex", 0);
    }
  } else {
    await $.mset(L0["sedit"], "Text", "");
    await $.mset((await $.mv(L0["sedit"], "Partnership")), "ItemIndex", (-(1)));
  }
  return L0.result;
}, {"params": ["SEdit", "AccountID"], "kind": "procedure", "ptypes": ["TSearchEdit", "LongInt"]});
  U.method("TFrmContract", "Push", async function Push(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"floatdate": $.asRef(p0), "value": $.copyArg(p1), "mode": $.copyArg(p2), result: undefined, "datacount": 0};
  await $.fixArgs(L0, ["value", "mode"]);
  L0["datacount"] = $.add((await $.call(C, "High", [(await $.idx((await L0["floatdate"].get()), [L0["mode"]]))])), 2);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.idx((await L0["floatdate"].get()), [L0["mode"]])), async ($t34) => { { const $t35 = await $.iset((await L0["floatdate"].get()), [L0["mode"]], $t34); if ($t35 !== undefined) { await L0["floatdate"].set($t35); } } }), L0["datacount"]])));
  { const $t36 = await $.iset((await $.idx((await L0["floatdate"].get()), [L0["mode"]])), [$.sub(L0["datacount"], 1)], L0["value"]); if ($t36 !== undefined) { { const $t37 = await $.iset((await L0["floatdate"].get()), [L0["mode"]], $t36); if ($t37 !== undefined) { await L0["floatdate"].set($t37); } } } }
  return L0.result;
}, {"params": ["FloatDate", "Value", "Mode"], "kind": "procedure", "ptypes": ["TFloatableDate", "Int64", "TPercentMode"]});
  U.method("TFrmContract", "LoadContractProperties", async function LoadContractProperties(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t38 = (await $.mv((await $.v(C, "MainDataModule")), "Contracts"));
    { const $t39 = await $.iset((await $.wv([$t38], "FAccountsID", C, false)), [0], (await $.mv((await $.wcall([$t38], "FieldByName", ["ContractAccID"], C)), "AsInteger"))); if ($t39 !== undefined) { await $.wset([$t38], "FAccountsID", $t39, C); } }
    { const $t40 = await $.iset((await $.wv([$t38], "FAccountsID", C, false)), [1], (await $.mv((await $.wcall([$t38], "FieldByName", ["ClientAccID"], C)), "AsInteger"))); if ($t40 !== undefined) { await $.wset([$t38], "FAccountsID", $t40, C); } }
    { const $t41 = await $.iset((await $.wv([$t38], "FAccountsID", C, false)), [2], (await $.mv((await $.wcall([$t38], "FieldByName", ["ReserveAccID"], C)), "AsInteger"))); if ($t41 !== undefined) { await $.wset([$t38], "FAccountsID", $t41, C); } }
    { const $t42 = await $.iset((await $.wv([$t38], "FAccountsID", C, false)), [3], (await $.mv((await $.wcall([$t38], "FieldByName", ["InterestAccID"], C)), "AsInteger"))); if ($t42 !== undefined) { await $.wset([$t38], "FAccountsID", $t42, C); } }
    { const $t43 = await $.iset((await $.wv([$t38], "FAccountsID", C, false)), [4], (await $.mv((await $.wcall([$t38], "FieldByName", ["OverdueAccID"], C)), "AsInteger"))); if ($t43 !== undefined) { await $.wset([$t38], "FAccountsID", $t43, C); } }
    { const $t44 = await $.iset((await $.wv([$t38], "FAccountsID", C, false)), [5], (await $.mv((await $.wcall([$t38], "FieldByName", ["OverdueInterestAccID"], C)), "AsInteger"))); if ($t44 !== undefined) { await $.wset([$t38], "FAccountsID", $t44, C); } }
    { const $t45 = await $.iset((await $.wv([$t38], "FAccountsID", C, false)), [6], (await $.mv((await $.wcall([$t38], "FieldByName", ["OverdueReserveAccID"], C)), "AsInteger"))); if ($t45 !== undefined) { await $.wset([$t38], "FAccountsID", $t45, C); } }
  }
  await $.stmt((await $.call(C, "LoadingAccounts", [(await $.v(C, "FAccountsID"))])));
  await $.stmt($.call(C, "IncludePercents", []));
  {
    const $t46 = (await $.v(C, "MainDataModule"));
    {
      const $t47 = (await $.wv([$t46], "Contracts", C, false));
      await $.mset((await $.wv([$t46, $t47], "ContractNumEdit", C, false)), "Text", (await $.mv((await $.wcall([$t46, $t47], "FieldByName", ["ContractNo"], C)), "AsString")));
      await $.mset((await $.wv([$t46, $t47], "AmountEdit", C, false)), "Text", (await $.mv((await $.wcall([$t46, $t47], "FieldByName", ["Amount"], C)), "AsString")));
      await $.mset((await $.wv([$t46, $t47], "PledgePriceEdit", C, false)), "Text", (await $.mv((await $.wcall([$t46, $t47], "FieldByName", ["PledgePrice"], C)), "AsString")));
      await $.mset((await $.wv([$t46, $t47], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t46, $t47], "FieldByName", ["OpenDate"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t46, $t47], "DTPCloseDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t46, $t47], "FieldByName", ["CloseDate"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t46, $t47], "DTPStopCalcDate", C, false)), "DateTime", (await $.mv((await $.wcall([$t46, $t47], "FieldByName", ["StopCalculationDate"], C)), "AsDateTime")));
    }
    if ($.truthy((await $.mcall((await $.mv((await $.wv([$t46], "DataModContract", C, false)), "ReliabilityDataSet")), "Locate", ["ID", (await $.mv((await $.mcall((await $.wv([$t46], "Reliability", C, false)), "FieldByName", ["ID"])), "Value")), []])))) {
      await $.mset((await $.wv([$t46], "ReliabilityViewer", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t46], "ReliabilityViewer", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.wv([$t46], "Reliability", C, false)), "FieldByName", ["Reliability"])), "AsString"))])));
      await $.mset((await $.wv([$t46], "ReliabilityPercentEdit", C, false)), "Text", $.add((await $.mv((await $.mcall((await $.wv([$t46], "Reliability", C, false)), "FieldByName", ["Percent"])), "AsString")), "%"));
    }
    if ($.truthy((await $.mcall((await $.mv((await $.wv([$t46], "DataModContract", C, false)), "OverdueReliabilityData")), "Locate", ["ID", (await $.mv((await $.mcall((await $.wv([$t46], "OverdueReliability", C, false)), "FieldByName", ["ID"])), "Value")), []])))) {
      await $.mset((await $.wv([$t46], "OverdueReliabilityViewer", C, false)), "ItemIndex", (await $.mcall((await $.mv((await $.wv([$t46], "OverdueReliabilityViewer", C, false)), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.wv([$t46], "OverdueReliability", C, false)), "FieldByName", ["Reliability"])), "AsString"))])));
      await $.mset((await $.wv([$t46], "Edit1", C, false)), "Text", $.add((await $.mv((await $.mcall((await $.wv([$t46], "OverdueReliability", C, false)), "FieldByName", ["Percent"])), "AsString")), "%"));
    }
    {
      const $t48 = (await $.wv([$t46], "CBPledgeType", C, false));
      if ($.truthy((await $.mcall((await $.mv((await $.wv([$t46, $t48], "DataModContract", C, false)), "PledgeTypesDataSet")), "Locate", ["ID", (await $.mv((await $.mcall((await $.wv([$t46, $t48], "Pledges", C, false)), "FieldByName", ["ID"])), "Value")), []])))) {
        await $.wset([$t46, $t48], "ItemIndex", (await $.mcall((await $.wv([$t46, $t48], "Items", C, false)), "IndexOf", [(await $.mv((await $.mcall((await $.wv([$t46, $t48], "Pledges", C, false)), "FieldByName", ["Type"])), "AsString"))])), C);
      }
    }
    {
      const $t49 = (await $.wv([$t46], "CBClientType", C, false));
      if ($.truthy((await $.mcall((await $.mv((await $.wv([$t46, $t49], "DataModContract", C, false)), "ClientCategoriesDataSet")), "Locate", ["ID", (await $.mv((await $.mcall((await $.wv([$t46, $t49], "Categories", C, false)), "FieldByName", ["ID"])), "Value")), []])))) {
        await $.wset([$t46, $t49], "ItemIndex", (await $.mcall((await $.wv([$t46, $t49], "Items", C, false)), "IndexOf", [(await $.mv((await $.mcall((await $.wv([$t46, $t49], "Categories", C, false)), "FieldByName", ["Category"])), "AsString"))])), C);
      }
    }
    {
      const $t50 = (await $.wv([$t46], "CBContractType", C, false));
      if ($.truthy((await $.mcall((await $.mv((await $.wv([$t46, $t50], "DataModContract", C, false)), "CreditTypeDataSet")), "Locate", ["ID", (await $.mv((await $.mcall((await $.wv([$t46, $t50], "ContractType", C, false)), "FieldByName", ["ID"])), "Value")), []])))) {
        await $.wset([$t46, $t50], "ItemIndex", (await $.mcall((await $.wv([$t46, $t50], "Items", C, false)), "IndexOf", [(await $.mv((await $.mcall((await $.wv([$t46, $t50], "ContractType", C, false)), "FieldByName", ["Type"])), "AsString"))])), C);
      }
    }
    {
      const $t51 = (await $.wv([$t46], "Contracts", C, false));
      if ($.truthy((await $.or_(($.gt((await $.mv((await $.wcall([$t46, $t51], "FieldByName", ["ReguiredAmountDEC"], C)), "AsFloat")), 0)), async () => ($.gt((await $.mv((await $.wcall([$t46, $t51], "FieldByName", ["ReguiredPercentDEC"], C)), "AsFloat")), 0)))))) {
        await $.mset((await $.wv([$t46, $t51], "CBMountlyRent", C, false)), "Checked", (await $.wv([$t46, $t51], "True", C, false)));
        await $.mset((await $.wv([$t46, $t51], "MounthlyAmount", C, false)), "Text", (await $.mv((await $.wcall([$t46, $t51], "FieldByName", ["ReguiredAmountDEC"], C)), "AsString")));
        await $.mset((await $.wv([$t46, $t51], "MounthlyPercent", C, false)), "Text", (await $.mv((await $.wcall([$t46, $t51], "FieldByName", ["ReguiredPercentDEC"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmContract", "SBCMPercentAssigned", async function SBCMPercentAssigned(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"percentmode": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["percentmode"]);
  L0["modetoint"] = $.fn(async function ModeToInt(p0) {
  const L1 = {"pmode": $.copyArg(p0), result: 0};
  await $.fixArgs(L1, ["pmode"]);
  if ($.truthy($.eq(L1["pmode"], (await $.v(C, "pmNormal"))))) {
    L1["result"] = 0;
  } else {
    L1["result"] = 1;
  }
  return L1.result;
});
  {
    const $t52 = (await $.mv((await $.v(C, "DataModContract")), "ContractPack"));
    await $.wset([$t52], "Result", (await $.wcall([$t52], "CallBooleanFunction", ["CheckAssigned", [(await $.wcall([$t52], "ModeToInt", [(await $.wv([$t52], "PercentMode", { get: async () => L0["percentmode"], set: async (v) => { L0["percentmode"] = v; }, local: true }, false))], { get: async () => L0["modetoint"], set: async (v) => { L0["modetoint"] = v; }, local: true }))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["PercentMode"], "kind": "function", "ptypes": ["TPercentMode"]});
  U.method("TFrmContract", "ResetControl", async function ResetControl(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"control": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["control"]);
  await $.mset(L0["control"], "Text", "");
  await $.mcall((await $.mv(L0["control"], "Partnership")), "RefreshList", []);
  await $.mset((await $.mv(L0["control"], "Partnership")), "ItemIndex", (-(1)));
  return L0.result;
}, {"params": ["Control"], "kind": "procedure", "ptypes": ["TSearchEdit"]});
  U.method("TFrmContract", "ResetContrls", async function ResetContrls(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "IsControlReseting", true);
  await $.stmt((await $.call(C, "ResetControl", [(await $.v(C, "GrandAccs"))])));
  await $.stmt((await $.call(C, "ResetControl", [(await $.v(C, "ClientAccs"))])));
  await $.stmt((await $.call(C, "ResetControl", [(await $.v(C, "ReserveAccs"))])));
  await $.stmt((await $.call(C, "ResetControl", [(await $.v(C, "InterestAccs"))])));
  await $.stmt((await $.call(C, "ResetControl", [(await $.v(C, "OverdueAccs"))])));
  await $.stmt((await $.call(C, "ResetControl", [(await $.v(C, "OverdueInterestAccs"))])));
  await $.stmt((await $.call(C, "ResetControl", [(await $.v(C, "OverdueReserveAccs"))])));
  await $.set(C, "IsControlReseting", false);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmContract", "Reset", async function Reset(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "idx": 0};
  await $.stmt($.call(C, "ResetContrls", []));
  await $.mset((await $.v(C, "CurrencyEdit")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModContract")), "CurrencyDataSet")), "FieldByName", ["CurrencyID"])), "AsString")));
  { const $t53 = 5;
    L0["idx"] = 0;
    let $t54 = true;
    for (;;) {
      if (!$t54) { L0["idx"] = $.succ(L0["idx"], 1); }
      $t54 = false;
      if (!($.ord(L0["idx"]) <= $.ord($t53))) break;
      { const $t55 = await $.iset((await $.v(C, "FAccountsID")), [L0["idx"]], (-(1))); if ($t55 !== undefined) { await $.set(C, "FAccountsID", $t55); } }
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "DTPOpenDate")), "DateTime", (await $.v(C, "GetBankDate")));
  await $.mset((await $.v(C, "DTPCloseDate")), "DateTime", (await $.v(C, "GetBankDate")));
  await $.mset((await $.v(C, "DTPStopCalcDate")), "DateTime", (await $.v(C, "GetBankDate")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmContract", "Pop", async function Pop(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"floatpercent": $.asRef(p0), "index": $.copyArg(p1), "mode": $.copyArg(p2), result: undefined, "idx": 0, "count": 0};
  await $.fixArgs(L0, ["index", "mode"]);
  L0["count"] = (await $.call(C, "High", [(await $.idx((await L0["floatpercent"].get()), [L0["mode"]]))]));
  { const $t56 = $.sub(L0["count"], 1);
    L0["idx"] = L0["index"];
    let $t57 = true;
    for (;;) {
      if (!$t57) { L0["idx"] = $.succ(L0["idx"], 1); }
      $t57 = false;
      if (!($.ord(L0["idx"]) <= $.ord($t56))) break;
      { const $t58 = await $.iset((await $.idx((await L0["floatpercent"].get()), [L0["mode"]])), [L0["idx"]], (await $.idx((await $.idx((await L0["floatpercent"].get()), [L0["mode"]])), [$.add(L0["idx"], 1)]))); if ($t58 !== undefined) { { const $t59 = await $.iset((await L0["floatpercent"].get()), [L0["mode"]], $t58); if ($t59 !== undefined) { await L0["floatpercent"].set($t59); } } } }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.idx((await L0["floatpercent"].get()), [L0["mode"]])), async ($t60) => { { const $t61 = await $.iset((await L0["floatpercent"].get()), [L0["mode"]], $t60); if ($t61 !== undefined) { await L0["floatpercent"].set($t61); } } }), L0["count"]])));
  return L0.result;
}, {"params": ["FloatPercent", "Index", "Mode"], "kind": "procedure", "ptypes": ["TFloatablePercent", "Integer", "TPercentMode"]});
  U.method("TFrmContract", "Pop", async function Pop(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"floatdate": $.asRef(p0), "index": $.copyArg(p1), "mode": $.copyArg(p2), result: undefined, "idx": 0, "count": 0};
  await $.fixArgs(L0, ["index", "mode"]);
  L0["count"] = (await $.call(C, "High", [(await $.idx((await L0["floatdate"].get()), [L0["mode"]]))]));
  { const $t62 = $.sub(L0["count"], 1);
    L0["idx"] = L0["index"];
    let $t63 = true;
    for (;;) {
      if (!$t63) { L0["idx"] = $.succ(L0["idx"], 1); }
      $t63 = false;
      if (!($.ord(L0["idx"]) <= $.ord($t62))) break;
      { const $t64 = await $.iset((await $.idx((await L0["floatdate"].get()), [L0["mode"]])), [L0["idx"]], (await $.idx((await $.idx((await L0["floatdate"].get()), [L0["mode"]])), [$.add(L0["idx"], 1)]))); if ($t64 !== undefined) { { const $t65 = await $.iset((await L0["floatdate"].get()), [L0["mode"]], $t64); if ($t65 !== undefined) { await L0["floatdate"].set($t65); } } } }
      await $.tick();
    }
  }
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.idx((await L0["floatdate"].get()), [L0["mode"]])), async ($t66) => { { const $t67 = await $.iset((await L0["floatdate"].get()), [L0["mode"]], $t66); if ($t67 !== undefined) { await L0["floatdate"].set($t67); } } }), L0["count"]])));
  return L0.result;
}, {"params": ["FloatDate", "Index", "Mode"], "kind": "procedure", "ptypes": ["TFloatableDate", "Integer", "TPercentMode"]});
  U.method("TFrmContract", "Push", async function Push(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"floatpercent": $.asRef(p0), "value": $.copyArg(p1), "mode": $.copyArg(p2), result: undefined, "datacount": 0};
  await $.fixArgs(L0, ["value", "mode"]);
  L0["datacount"] = $.add((await $.call(C, "High", [(await $.idx((await L0["floatpercent"].get()), [L0["mode"]]))])), 2);
  await $.stmt((await $.call(C, "SetLength", [$.ref(async () => (await $.idx((await L0["floatpercent"].get()), [L0["mode"]])), async ($t68) => { { const $t69 = await $.iset((await L0["floatpercent"].get()), [L0["mode"]], $t68); if ($t69 !== undefined) { await L0["floatpercent"].set($t69); } } }), L0["datacount"]])));
  { const $t70 = await $.iset((await $.idx((await L0["floatpercent"].get()), [L0["mode"]])), [$.sub(L0["datacount"], 1)], L0["value"]); if ($t70 !== undefined) { { const $t71 = await $.iset((await L0["floatpercent"].get()), [L0["mode"]], $t70); if ($t71 !== undefined) { await L0["floatpercent"].set($t71); } } } }
  return L0.result;
}, {"params": ["FloatPercent", "Value", "Mode"], "kind": "procedure", "ptypes": ["TFloatablePercent", "Real", "TPercentMode"]});
  U.method("TFrmContract", "CBMountlyRentClick", async function CBMountlyRentClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MounthlyAmount")), "Enabled", (await $.mv((await $.v(C, "CBMountlyRent")), "Checked")));
  await $.mset((await $.v(C, "MounthlyPercent")), "Enabled", (await $.mv((await $.v(C, "CBMountlyRent")), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "CBConstantClick", async function CBConstantClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SBBrowse")), "Enabled", $.not((await $.mv((await $.v(C, "CBConstant")), "Checked"))));
  await $.mset((await $.v(C, "PercentEdit")), "Enabled", (await $.mv((await $.v(C, "CBConstant")), "Checked")));
  if ($.truthy((await $.mv((await $.v(C, "PercentEdit")), "Enabled")))) {
    await $.mset((await $.v(C, "PercentEdit")), "Color", (await $.v(C, "clWhite")));
  } else {
    await $.mset((await $.v(C, "PercentEdit")), "Color", (await $.v(C, "clInactiveCaption")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "SBBrowseClick", async function SBBrowseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "CBOverdueConstantClick", async function CBOverdueConstantClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "SBOverdueBrowse")), "Enabled", $.not((await $.mv((await $.v(C, "CBOverdueConstant")), "Checked"))));
  await $.mset((await $.v(C, "OverduePercentEdit")), "Enabled", (await $.mv((await $.v(C, "CBOverdueConstant")), "Checked")));
  if ($.truthy((await $.mv((await $.v(C, "OverduePercentEdit")), "Enabled")))) {
    await $.mset((await $.v(C, "OverduePercentEdit")), "Color", (await $.v(C, "clWhite")));
  } else {
    await $.mset((await $.v(C, "OverduePercentEdit")), "Color", (await $.v(C, "clInactiveCaption")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "Assigned", [(await $.idx((await $.v(C, "FloatableDate")), [(await $.v(C, "pmNormal"))]))])))) {
    await $.stmt((await $.call(C, "Finalize", [(await $.idx((await $.v(C, "FloatableDate")), [(await $.v(C, "pmNormal"))]))])));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.idx((await $.v(C, "FloatableDate")), [(await $.v(C, "pmOverdue"))]))])))) {
    await $.stmt((await $.call(C, "Finalize", [(await $.idx((await $.v(C, "FloatableDate")), [(await $.v(C, "pmOverdue"))]))])));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.idx((await $.v(C, "FloatablePercent")), [(await $.v(C, "pmNormal"))]))])))) {
    await $.stmt((await $.call(C, "Finalize", [(await $.idx((await $.v(C, "FloatablePercent")), [(await $.v(C, "pmNormal"))]))])));
  }
  if ($.truthy((await $.call(C, "Assigned", [(await $.idx((await $.v(C, "FloatablePercent")), [(await $.v(C, "pmOverdue"))]))])))) {
    await $.stmt((await $.call(C, "Finalize", [(await $.idx((await $.v(C, "FloatablePercent")), [(await $.v(C, "pmOverdue"))]))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t72 = (await $.v(C, "DataModContract"));
    await $.mcall((await $.wv([$t72], "CurrencyDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "GrandAcc", C, false)), "Open", []);
    if ($.truthy($.eq((await $.wcall([$t72], "SBCMGetOption", ["cmrCurrencyFilter"], C)), "OFF"))) {
      {
        const $t73 = (await $.wv([$t72], "ClientAcc", C, false));
        { const $t74 = await $.iset((await $.wv([$t72, $t73], "SQL", C, false)), [9], ""); if ($t74 !== undefined) { await $.wset([$t72, $t73], "SQL", $t74, C); } }
        await $.stmt($.wcall([$t72, $t73], "DeleteVariables", [], C));
        await $.wset([$t72, $t73], "Master", null, C);
        await $.wset([$t72, $t73], "MasterFields", "", C);
        await $.wset([$t72, $t73], "DetailFields", "", C);
      }
    }
    await $.wset([$t72], "IsControlReseting", (await $.wv([$t72], "False", C, false)), C);
    await $.mcall((await $.wv([$t72], "ClientAcc", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "ReserveAcc", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "InterestAcc", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "OverdueAcc", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "OverdueInterestAcc", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "ReliabilityDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "ClientCategoriesDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "PledgeTypesDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "CreditTypeDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "OverdueReserveAcc", C, false)), "Open", []);
    await $.mcall((await $.wv([$t72], "OverdueReliabilityData", C, false)), "Open", []);
  }
  await $.stmt($.call(C, "Reset", []));
  if ($.truthy($.eq((await $.v(C, "FOpMode")), (await $.v(C, "omEdit"))))) {
    await $.stmt($.call(C, "LoadContractProperties", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "BtnApplyClick", async function BtnApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    await $.stmt((await $.call(C, "ContractConclusion", [(await $.v(C, "FOpMode")), (await $.v(C, "FContractType"))])));
    await $.set(C, "ModalResult", (await $.v(C, "mrOk")));
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "AmountEditKeyPress", async function AmountEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", (await $.call(C, "Chr", [(await $.v(C, "VK_DELETE"))])), "."]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContract", "GrandNamesChange", async function GrandNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "GrandAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "ClientNamesChange", async function ClientNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ClientAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "ReliabilityNamesChange", async function ReliabilityNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReserveAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "InterestNamesChange", async function InterestNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "InterestAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "OverdueNamesChange", async function OverdueNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OverdueAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "OverdueInterestNamesChange", async function OverdueInterestNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OverdueInterestAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "ReliabilityViewerChange", async function ReliabilityViewerChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ReliabilityPercentEdit")), "Text", $.add((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "ReliabilityViewer")), "ListSource")), "DataSet")), "FieldByName", ["Percent"])), "AsString")), "%"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "CurrencyEditKeyDown", async function CurrencyEditKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_RETURN"))))) {
    {
      const $t75 = (await $.mv((await $.v(C, "DataModContract")), "CurrencyDataSet"));
      if ($.truthy($.not((await $.wcall([$t75], "Locate", ["CurrencyID", (await $.mv(((await $.wv([$t75], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Text")), []], C))))) {
        await $.mset((await $.wv([$t75], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), "Text", (await $.mv((await $.wcall([$t75], "FieldByName", ["CurrencyID"], C)), "AsString")));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmContract", "CurrencyViewerChange", async function CurrencyViewerChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t76 = (await $.mv((await $.v(C, "DataModContract")), "CurrencyDataSet"));
    await $.mset((await $.wv([$t76], "CurrencyEdit", C, false)), "Text", (await $.mv((await $.wcall([$t76], "FieldByName", ["CurrencyID"], C)), "AsString")));
    await $.stmt($.wcall([$t76], "ResetContrls", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t77 = (await $.v(C, "DataModContract"));
    await $.mcall((await $.wv([$t77], "CurrencyDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "GrandAcc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "ClientAcc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "ReserveAcc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "InterestAcc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "OverdueAcc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "OverdueInterestAcc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "PledgeTypesDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "OverdueReserveAcc", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "ReliabilityDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "ClientCategoriesDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "CreditTypeDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "CurrencyDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t77], "OverdueReliabilityData", C, false)), "CloseAll", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmContract", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModContract", (await $.mcall((await $.v(C, "TDataModContract")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "AmountEditExit", async function AmountEditExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "GrandAccsChange", async function GrandAccsChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.v(C, "IsControlReseting"))))) {
    if ($.truthy($.eq((await $.call(C, "SBCMGetOption", ["cmrAutoSearchAccount"])), "ON"))) {
      if ($.truthy($.eq((await $.v(C, "FOpMode")), (await $.v(C, "omInsert"))))) {
        await $.stmt((await $.call(C, "FindOtherAccounts", [L0["sender"]])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "BtnClose")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContract", "OverdueReliabilityViewerChange", async function OverdueReliabilityViewerChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit1")), "Text", $.add((await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["Percent"])), "AsString")), "%"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "OverdueReserveNamesChange", async function OverdueReserveNamesChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "OverdueReserveAccs")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((L0["sender"]), "ListSource")), "DataSet")), "FieldByName", ["AccNo"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
