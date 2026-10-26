// Generated from NewFrmUntimelyEtMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewFrmUntimelyEtMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrlsEh", "StdCtrls", "ComCtrls", "Mask", "DBLookupEh", "ExtCtrls", "DBCtrls", "Db", "OracleData", "Oracle", "XFSCtrls", "CMCurrencyEdit", "sboapiDataModuleImpl", "NewCommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TNewFrmUntimelyEtMoney", "TForm", {"creditaccs": {"name": "CreditAccs", "type": "TOracleDataSet"}, "creditaccsid": {"name": "CreditAccsID", "type": "TFloatField"}, "creditaccsacc_no": {"name": "CreditAccsACC_NO", "type": "TWideStringField"}, "creditaccsname": {"name": "CreditAccsNAME", "type": "TWideStringField"}, "depositaccno": {"name": "DepositAccno", "type": "TOracleDataSet"}, "depositaccnoid": {"name": "DepositAccnoID", "type": "TFloatField"}, "depositaccnoacc_no": {"name": "DepositAccnoACC_NO", "type": "TWideStringField"}, "depositaccnoval_name": {"name": "DepositAccnoVAL_NAME", "type": "TWideStringField"}, "depositinfo": {"name": "DepositInfo", "type": "TOracleDataSet"}, "depositinfoname": {"name": "DepositInfoNAME", "type": "TWideStringField"}, "depositinfoopendate": {"name": "DepositInfoOPENDATE", "type": "TDateTimeField"}, "depositinfoclosedate": {"name": "DepositInfoCLOSEDATE", "type": "TDateTimeField"}, "depositinfocontractaccno": {"name": "DepositInfoCONTRACTACCNO", "type": "TWideStringField"}, "depositinfoclientaccno": {"name": "DepositInfoCLIENTACCNO", "type": "TWideStringField"}, "depositinfointerestaccno": {"name": "DepositInfoINTERESTACCNO", "type": "TWideStringField"}, "depositinfofacticaldebt": {"name": "DepositInfoFACTICALDEBT", "type": "TFloatField"}, "depositinfofacticalinterestdebt": {"name": "DepositInfoFACTICALINTERESTDEBT", "type": "TFloatField"}, "dm_payment": {"name": "dm_payment", "type": "TOraclePackage"}, "dsdepositaccno": {"name": "DSDepositAccno", "type": "TDataSource"}, "creditaccsdatsrc": {"name": "CreditAccsDatSrc", "type": "TDataSource"}, "depositinfodatsrc": {"name": "DepositInfoDatSrc", "type": "TDataSource"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "dbeditclient": {"name": "DBEditClient", "type": "TDBEditEh"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfstatictext1": {"name": "XFStaticText1", "type": "TXFStaticText"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfstatictext2": {"name": "XFStaticText2", "type": "TXFStaticText"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfstatictext3": {"name": "XFStaticText3", "type": "TXFStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "dbeditcontract": {"name": "DBEditContract", "type": "TDBEditEh"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xfstatictext4": {"name": "XFStaticText4", "type": "TXFStaticText"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xfstatictext5": {"name": "XFStaticText5", "type": "TXFStaticText"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xfstatictext6": {"name": "XFStaticText6", "type": "TXFStaticText"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfpanel16": {"name": "XFPanel16", "type": "TXFPanel"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "dbeditinterest": {"name": "DBEditInterest", "type": "TDBEditEh"}, "xfpanel18": {"name": "XFPanel18", "type": "TXFPanel"}, "xfstatictext7": {"name": "XFStaticText7", "type": "TXFStaticText"}, "xfpanel19": {"name": "XFPanel19", "type": "TXFPanel"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "xfstatictext8": {"name": "XFStaticText8", "type": "TXFStaticText"}, "xfpanel21": {"name": "XFPanel21", "type": "TXFPanel"}, "xfstatictext9": {"name": "XFStaticText9", "type": "TXFStaticText"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "xfpanel23": {"name": "XFPanel23", "type": "TXFPanel"}, "xfpanel24": {"name": "XFPanel24", "type": "TXFPanel"}, "xfstatictext10": {"name": "XFStaticText10", "type": "TXFStaticText"}, "xfpanel25": {"name": "XFPanel25", "type": "TXFPanel"}, "dtpoperation": {"name": "DTPOperation", "type": "TDateTimePicker"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "xfpanel32": {"name": "XFPanel32", "type": "TXFPanel"}, "xfpanel33": {"name": "XFPanel33", "type": "TXFPanel"}, "xfpanel34": {"name": "XFPanel34", "type": "TXFPanel"}, "depositinfoprolongationdate": {"name": "DepositInfoPROLONGATIONDATE", "type": "TDateTimeField"}, "xfpanel35": {"name": "XFPanel35", "type": "TXFPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "depositinfoannualint": {"name": "DepositInfoANNUALINT", "type": "TFloatField"}, "depositinfoostat": {"name": "DepositInfoOSTAT", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("NewFrmUntimelyEtMoney", null, "TNewFrmUntimelyEtMoney");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "NewFrmUntimelyEtMoney"));
    {
      const $t2 = (await $.wv([$t1], "DepositInfo", C, false));
      if ($.truthy((await $.wv([$t1, $t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2], "Close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2], "SetVariable", ["ContractID", (await $.wv([$t1, $t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Open", [], C));
    }
    await $.wset([$t1], "Caption", $.add((await $.wv([$t1], "Get_SelectedContNo", C, false)), " nömrəli depozitin vaxtından əvvəl ödənilməsi"), C);
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewFrmUntimelyEtMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewFrmUntimelyEtMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFrmUntimelyEtMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewFrmUntimelyEtMoney", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPOperation")), "DateTime", (await $.v(C, "Get_BankDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFrmUntimelyEtMoney", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "commituntimeextmoney": false, "calcpercentdate": 0, "creditaccid": 0, "calcbefopercent": 0, "p_facticalinterestdebt": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Depozitin vaxtından əvvəl ödənilməsi ...";
  L0["calcpercentdate"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPOperation")), "DateTime"))]))]));
  L0["calcbefopercent"] = (await $.mv((await $.v(C, "DBNumberEditEh1")), "Value"));
  {
    const $t3 = (await $.v(C, "dm_payment"));
    await $.stmt((await $.wcall([$t3], "CallProcedure", ["UntimeWithDrawMoney", ["ContractID", (await $.wv([$t3], "Get_SelectedContID", C, false)), "p_CalcPercentDate", (await $.wv([$t3], "CalcPercentDate", { get: async () => L0["calcpercentdate"], set: async (v) => { L0["calcpercentdate"] = v; }, local: true }, false)), "p_CalcBefoPercent", (await $.wv([$t3], "CalcBefoPercent", { get: async () => L0["calcbefopercent"], set: async (v) => { L0["calcbefopercent"] = v; }, local: true }, false))]], C)));
  }
  try {
    L0["commituntimeextmoney"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.v(C, "DM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", L0["commituntimeextmoney"]]])));
    if ($.truthy(L0["commituntimeextmoney"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t4) {
    $.rethrowControl($t4);
    $.handled($t4);
    await $.stmt((await $.mcall((await $.v(C, "DM_PAYMENT")), "CallProcedure", ["CommitWithDrawMoney", ["DoCommit", false]])));
    throw $t4;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewFrmUntimelyEtMoney", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "dm_payment")), "Session")), "Rollback", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewFrmUntimelyEtMoney", (await $.mcall((await $.v(C, "TNewFrmUntimelyEtMoney")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
