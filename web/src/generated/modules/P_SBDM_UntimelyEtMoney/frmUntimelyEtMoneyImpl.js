// Generated from frmUntimelyEtMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmUntimelyEtMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrlsEh", "StdCtrls", "ComCtrls", "Mask", "DBLookupEh", "ExtCtrls", "DBCtrls", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "CommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmUntimelyEtMoney", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "dbediteh6": {"name": "DBEditEh6", "type": "TDBEditEh"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "accountlistcb": {"name": "AccountListCB", "type": "TDBLookupComboboxEh"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "statictext12": {"name": "StaticText12", "type": "TStaticText"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "dbediteh7": {"name": "DBEditEh7", "type": "TDBEditEh"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "statictext13": {"name": "StaticText13", "type": "TStaticText"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "creditaccsdatsrc": {"name": "CreditAccsDatSrc", "type": "TDataSource"}, "creditaccs": {"name": "CreditAccs", "type": "TOracleDataSet"}, "creditaccsid": {"name": "CreditAccsID", "type": "TFloatField"}, "creditaccsacc_no": {"name": "CreditAccsACC_NO", "type": "Twidestringfield"}, "creditaccsname": {"name": "CreditAccsNAME", "type": "Twidestringfield"}, "sbcm_payment": {"name": "sbcm_payment", "type": "TOraclePackage"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "Twidestringfield"}, "depositinfoopendate": {"name": "DepositInfoOPENDATE", "type": "TDateTimeField"}, "depositinfoclosedate": {"name": "DepositInfoCLOSEDATE", "type": "TDateTimeField"}, "depositinfooverdueannualint": {"name": "DepositInfoOVERDUEANNUALINT", "type": "TFloatField"}, "depositinfocontractaccno": {"name": "DepositInfoCONTRACTACCNO", "type": "Twidestringfield"}, "depositinfoclientaccno": {"name": "DepositInfoCLIENTACCNO", "type": "Twidestringfield"}, "depositinfointerestaccno": {"name": "DepositInfoINTERESTACCNO", "type": "Twidestringfield"}, "depositinfofacticaldebt": {"name": "DepositInfoFACTICALDEBT", "type": "TFloatField"}, "depositinfofacticalinterestdebt": {"name": "DepositInfoFACTICALINTERESTDEBT", "type": "TFloatField"}, "dtpbankdate": {"name": "DTPBankDate", "type": "TDateTimePicker"}, "dtpcalcpercent": {"name": "DTPCalcPercent", "type": "TDateTimePicker"}, "depositaccno": {"name": "DepositAccno", "type": "TOracleDataSet"}, "dsdepositaccno": {"name": "DSDepositAccno", "type": "TDataSource"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "depositaccnoid": {"name": "DepositAccnoID", "type": "TFloatField"}, "depositaccnoacc_no": {"name": "DepositAccnoACC_NO", "type": "Twidestringfield"}, "depositaccnoval_name": {"name": "DepositAccnoVAL_NAME", "type": "Twidestringfield"}, "depositinfoannualint": {"name": "DepositInfoANNUALINT", "type": "Twidestringfield"}}, {});
  U.init(async () => {
    U.var_("frmUntimelyEtMoney", null, "TfrmUntimelyEtMoney");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "frmUntimelyEtMoney"));
    {
      const $t2 = (await $.wv([$t1], "DepositInfo", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["ContractID", (await $.wv([$t1, $t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    {
      const $t3 = (await $.wv([$t1], "CreditAccs", C, false));
      await $.stmt($.wcall([$t1, $t3], "Open", [], C));
      await $.mset((await $.wv([$t1, $t3], "AccountListCB", C, false)), "KeyValue", (await $.mv((await $.wcall([$t1, $t3], "FieldByName", ["ID"], C)), "AsInteger")));
    }
    {
      const $t4 = (await $.wv([$t1], "DepositAccno", C, false));
      if ($.truthy((await $.wv([$t1, $t4], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t4], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t4], "SetVariable", ["ContractID", (await $.wv([$t1, $t4], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Open", [], C));
    }
    await $.wset([$t1], "Caption", $.add((await $.wv([$t1], "Get_SelectedContNo", C, false)), " nömrəli depozitin vaxtından əvvəl ödənilməsi"), C);
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmUntimelyEtMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmUntimelyEtMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUntimelyEtMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmUntimelyEtMoney", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "commituntimeextmoney": false, "calcpercentdate": 0, "creditaccid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Depozitin vaxtından əvvəl ödənilməsi ...";
  L0["calcpercentdate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPCalcPercent")), "DateTime"))]))]));
  L0["creditaccid"] = (await $.mv((await $.mcall((await $.v(C, "DepositAccno")), "FieldByName", ["ID"])), "AsInteger"));
  {
    const $t5 = (await $.v(C, "sbcm_payment"));
    await $.stmt((await $.wcall([$t5], "CallProcedure", ["UntimeWithDrawMoney", ["ContractID", (await $.wv([$t5], "Get_SelectedContID", C, false)), "p_CalcPercentDate", (await $.wv([$t5], "CalcPercentDate", { get: async () => L0["calcpercentdate"], set: async (v) => { L0["calcpercentdate"] = v; }, local: true }, false)), "p_CreditAccID", (await $.wv([$t5], "CreditAccID", { get: async () => L0["creditaccid"], set: async (v) => { L0["creditaccid"] = v; }, local: true }, false))]], C)));
  }
  try {
    L0["commituntimeextmoney"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.v(C, "SBCM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", L0["commituntimeextmoney"]]])));
    if ($.truthy(L0["commituntimeextmoney"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t6) {
    $.rethrowControl($t6);
    $.handled($t6);
    await $.stmt((await $.mcall((await $.v(C, "SBCM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", false]])));
    throw $t6;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUntimelyEtMoney", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPCalcPercent")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "DepositInfo")), "FieldByName", ["OpenDate"])), "AsDateTime")));
  await $.mset((await $.v(C, "DTPBankDate")), "DateTime", (await $.v(C, "Get_BankDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmUntimelyEtMoney", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "sbcm_payment")), "Session")), "Rollback", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmUntimelyEtMoney", (await $.mcall((await $.v(C, "TfrmUntimelyEtMoney")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
