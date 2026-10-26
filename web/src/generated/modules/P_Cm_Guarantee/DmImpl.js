// Generated from DmImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("DmImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "Oracle", "sboapiDataModuleImpl", "GuaranteImpl"]);
  const C = [U];
  U.defClass("TGurDm", "TDataModule", {"maindsrc": {"name": "MainDSrc", "type": "TDataSource"}, "pledges": {"name": "Pledges", "type": "TOracleDataSet"}, "datasrcpledges": {"name": "DataSrcPledges", "type": "TDataSource"}, "pledgsortsdatsrc": {"name": "pledgsortsDatSrc", "type": "TDataSource"}, "pledgsorts": {"name": "pledgsorts", "type": "TOracleDataSet"}, "pledgsortsid": {"name": "pledgsortsID", "type": "TFloatField"}, "pledgsortsname": {"name": "pledgsortsNAME", "type": "TWideStringField"}, "guarante": {"name": "Guarante", "type": "TOraclePackage"}, "companydset": {"name": "CompanyDSet", "type": "TOracleDataSet"}, "companysrc": {"name": "CompanySrc", "type": "TDataSource"}, "oraclequery1": {"name": "OracleQuery1", "type": "TOracleQuery"}, "maxid": {"name": "maxid", "type": "TOracleDataSet"}, "maxidmid": {"name": "maxidMID", "type": "TFloatField"}, "balisrc": {"name": "BaliSrc", "type": "TDataSource"}, "balidset": {"name": "BAliDSet", "type": "TOracleDataSet"}, "balidsetcreditid": {"name": "BAliDSetCREDITID", "type": "TFloatField"}, "balidsetcardid": {"name": "BAliDSetCARDID", "type": "TFloatField"}, "balidsetguarantorname": {"name": "BAliDSetGUARANTORNAME", "type": "TWideStringField"}, "balidsetguarantorid": {"name": "BAliDSetGUARANTORID", "type": "TWideStringField"}, "balidsetguarantorsalary": {"name": "BAliDSetGUARANTORSALARY", "type": "TWideStringField"}, "balidsetzaminwork1": {"name": "BAliDSetZAMINWORK1", "type": "TWideStringField"}, "balidsetzaminadres1": {"name": "BAliDSetZAMINADRES1", "type": "TWideStringField"}, "balidsetzamintel1": {"name": "BAliDSetZAMINTEL1", "type": "TWideStringField"}, "balidsetzmpaspyer1": {"name": "BAliDSetZMPASPYER1", "type": "TWideStringField"}, "balidsetzmpaspdat1": {"name": "BAliDSetZMPASPDAT1", "type": "TDateTimeField"}, "balidsetzmtelmob1": {"name": "BAliDSetZMTELMOB1", "type": "TWideStringField"}, "credit": {"name": "Credit", "type": "TOracleDataSet"}, "creditcreditid": {"name": "CreditCREDITID", "type": "TFloatField"}, "inssrc": {"name": "InsSrc", "type": "TDataSource"}, "maindset": {"name": "MainDSet", "type": "TOracleDataSet"}, "maindsetcreditid": {"name": "MainDSetCREDITID", "type": "TFloatField"}, "maindsetpledgeid": {"name": "MainDSetPLEDGEID", "type": "TFloatField"}, "maindsetpledgename": {"name": "MainDSetPLEDGENAME", "type": "TWideStringField"}, "maindsetholdername": {"name": "MainDSetHOLDERNAME", "type": "TWideStringField"}, "maindsetholderaddress": {"name": "MainDSetHOLDERADDRESS", "type": "TWideStringField"}, "maindsetanyinfotodisting": {"name": "MainDSetANYINFOTODISTING", "type": "TWideStringField"}, "maindsetregistryno": {"name": "MainDSetREGISTRYNO", "type": "TWideStringField"}, "maindsetregistryagency": {"name": "MainDSetREGISTRYAGENCY", "type": "TWideStringField"}, "maindsetregistrydate": {"name": "MainDSetREGISTRYDATE", "type": "TDateTimeField"}, "maindsetpledgeinuse": {"name": "MainDSetPLEDGEINUSE", "type": "TFloatField"}, "maindsetpledgeinsurant": {"name": "MainDSetPLEDGEINSURANT", "type": "TFloatField"}, "maindsetinsuranceagency": {"name": "MainDSetINSURANCEAGENCY", "type": "TFloatField"}, "maindsetinsuranceamount": {"name": "MainDSetINSURANCEAMOUNT", "type": "TFloatField"}, "maindsetinsurancedate": {"name": "MainDSetINSURANCEDATE", "type": "TDateTimeField"}, "maindsetpledgepriceevkv": {"name": "MainDSetPLEDGEPRICEEVKV", "type": "TFloatField"}, "maindsetpledgepricetorpaqha": {"name": "MainDSetPLEDGEPRICETORPAQHA", "type": "TFloatField"}, "maindsettemp": {"name": "MainDSetTEMP", "type": "TWideStringField"}, "maindsetinsuranceright": {"name": "MainDSetINSURANCERIGHT", "type": "TFloatField"}, "maindsetinsuranceid": {"name": "MainDSetINSURANCEID", "type": "TWideStringField"}, "maindsetpledgeid_p": {"name": "MainDSetPLEDGEID_P", "type": "TFloatField"}, "maindsetgqname": {"name": "MainDSetGQNAME", "type": "TWideStringField"}, "maindsetgqpaspnum": {"name": "MainDSetGQPASPNUM", "type": "TWideStringField"}, "maindsetgqpaspyer": {"name": "MainDSetGQPASPYER", "type": "TWideStringField"}, "maindsetgqpaspdate": {"name": "MainDSetGQPASPDATE", "type": "TDateTimeField"}, "maindsetgqadress": {"name": "MainDSetGQADRESS", "type": "TWideStringField"}, "maindsetreyster": {"name": "MainDSetREYSTER", "type": "TWideStringField"}, "maindsetseryamh": {"name": "MainDSetSERYAMH", "type": "TWideStringField"}, "maindsetgqtel": {"name": "MainDSetGQTEL", "type": "TWideStringField"}, "maindsetpledgeprice": {"name": "MainDSetPLEDGEPRICE", "type": "TFloatField"}, "maindsetpledgsorts": {"name": "MainDSetPLEDGSORTS", "type": "TFloatField"}, "maindsetcompany": {"name": "MainDSetCOMPANY", "type": "TFloatField"}, "maindsetcompanydat": {"name": "MainDSetCOMPANYDAT", "type": "TDateTimeField"}, "maindsetcompanyexpert": {"name": "MainDSetCOMPANYEXPERT", "type": "TWideStringField"}, "maindsetcardid": {"name": "MainDSetCARDID", "type": "TFloatField"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("GurDm", null, "TGurDm");
  });
  U.method("TGurDm", "BAliDSetAfterOpen", async function BAliDSetAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t1 = L0["dataset"];
    const $t2 = (await $.mv((await $.wv([$t1], "FrmGuarante", C, false)), "Panel"));
    await $.mcall((await $.wv([$t1, $t2], "Tabs", C, false)), "Clear", []);
    { const $t3 = $.sub((await $.wv([$t1, $t2], "RecordCount", C, false)), 1);
      await $.wset([$t1, $t2], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t4 = true;
      for (;;) {
        if (!$t4) { await $.wset([$t1, $t2], "Index", $.succ((await $.wv([$t1, $t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t4 = false;
        if (!($.ord((await $.wv([$t1, $t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t3))) break;
        await $.stmt((await $.mcall((await $.wv([$t1, $t2], "Tabs", C, false)), "Add", [(await $.wcall([$t1, $t2], "Format", [" Zamin  №%d ", [(await $.wv([$t1, $t2], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]], C))])));
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.wv([$t1, $t2], "recordcount", C, false)), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t1, $t2], "tabs", C, false)), "Add", [((await $.wcall([$t1, $t2], "Format", [" Zamin №%d ", [0]], C)))])));
    }
    await $.stmt($.wcall([$t1, $t2], "First", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TGurDm", "DataModuleCreate", async function DataModuleCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Pledges")), "Open", []);
  await $.mcall((await $.v(C, "pledgsorts")), "Open", []);
  await $.mcall((await $.v(C, "CompanyDSet")), "Open", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGurDm", "DataModuleDestroy", async function DataModuleDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Pledges")), "close", []);
  await $.mcall((await $.v(C, "pledgsorts")), "Close", []);
  await $.mcall((await $.v(C, "CompanyDSet")), "CloseAll", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TGurDm", "oracMainDSet1AfterOpen", async function oracMainDSet1AfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t5 = L0["dataset"];
    const $t6 = (await $.mv((await $.wv([$t5], "FrmGuarante", C, false)), "Panel2"));
    await $.mcall((await $.wv([$t5, $t6], "Tabs", C, false)), "Clear", []);
    { const $t7 = $.sub((await $.wv([$t5, $t6], "RecordCount", C, false)), 1);
      await $.wset([$t5, $t6], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t8 = true;
      for (;;) {
        if (!$t8) { await $.wset([$t5, $t6], "Index", $.succ((await $.wv([$t5, $t6], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t8 = false;
        if (!($.ord((await $.wv([$t5, $t6], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t7))) break;
        await $.stmt((await $.mcall((await $.wv([$t5, $t6], "Tabs", C, false)), "Add", [(await $.wcall([$t5, $t6], "Format", ["Girov №%d ", [(await $.wv([$t5, $t6], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]], C))])));
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.wv([$t5, $t6], "recordcount", C, false)), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t5, $t6], "tabs", C, false)), "Add", [((await $.wcall([$t5, $t6], "Format", ["Girov №%d ", [0]], C)))])));
    }
    await $.stmt($.wcall([$t5, $t6], "First", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  U.method("TGurDm", "MainDSetAfterOpen", async function MainDSetAfterOpen(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"dataset": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["dataset"]);
  {
    const $t9 = L0["dataset"];
    const $t10 = (await $.mv((await $.wv([$t9], "FrmGuarante", C, false)), "Panel2"));
    await $.mcall((await $.wv([$t9, $t10], "Tabs", C, false)), "Clear", []);
    { const $t11 = $.sub((await $.wv([$t9, $t10], "RecordCount", C, false)), 1);
      await $.wset([$t9, $t10], "Index", 0, { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
      let $t12 = true;
      for (;;) {
        if (!$t12) { await $.wset([$t9, $t10], "Index", $.succ((await $.wv([$t9, $t10], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }); }
        $t12 = false;
        if (!($.ord((await $.wv([$t9, $t10], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))) <= $.ord($t11))) break;
        await $.stmt((await $.mcall((await $.wv([$t9, $t10], "Tabs", C, false)), "Add", [(await $.wcall([$t9, $t10], "Format", ["Girov №%d ", [(await $.wv([$t9, $t10], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false))]], C))])));
        await $.tick();
      }
    }
    if ($.truthy($.eq((await $.wv([$t9, $t10], "recordcount", C, false)), 0))) {
      await $.stmt((await $.mcall((await $.wv([$t9, $t10], "tabs", C, false)), "Add", [((await $.wcall([$t9, $t10], "Format", ["Girov №%d ", [0]], C)))])));
    }
    await $.stmt($.wcall([$t9, $t10], "First", [], C));
  }
  return L0.result;
}, {"params": ["DataSet"], "kind": "procedure", "ptypes": ["TDataSet"]});
  return U;
}
