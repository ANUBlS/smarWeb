// Generated from TrancheCreditCardsUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TrancheCreditCardsUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CMExcelExport", "CommonDecls", "TrCTransactionUnit", "TrCreditCDatModImpl", "TrProgressUnit", "sbsystem"]);
  const C = [U];
  U.defClass("TMainTrForm", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "trdtp": {"name": "TrDTP", "type": "TDateTimePicker"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbcfilial": {"name": "DBCFilial", "type": "TDBLookupComboboxEh"}, "label2": {"name": "Label2", "type": "TLabel"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "cmexcelexport": {"name": "CMExcelExport", "type": "TCMExcelExport"}}, {});
  U.init(async () => {
    U.var_("MainTrForm", null, "TMainTrForm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "MainTrForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainTrForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CreditCardDatMod", (await $.mcall((await $.v(C, "TCreditCardDatMod")), "Create", [Self])));
  await $.set(C, "CreditCartdsForm", (await $.mcall((await $.v(C, "TCreditCartdsForm")), "Create", [Self])));
  await $.set(C, "TrProgressForm", (await $.mcall((await $.v(C, "TTrProgressForm")), "Create", [Self])));
  await $.mset((await $.v(C, "TrDTP")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  await $.mset((await $.v(C, "DBCFilial")), "KeyValue", (await $.v(C, "Get_BranchID")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainTrForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CreditCardDatMod")), "Free", []);
  await $.mcall((await $.v(C, "CreditCartdsForm")), "Free", []);
  await $.mcall((await $.v(C, "TrProgressForm")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainTrForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TMainTrForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TMainTrForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "trdate": 0, "credid": 0, "credcount": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["trdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "TrDTP")), "DateTime"))]))]));
  {
    const $t1 = (await $.wobj(C, "CreditCardDatMod"));
    const $t2 = (await $.wv([$t1], "CM_CARDS", C, false));
    await $.mcall((await $.wv([$t1, $t2], "Session", C, false)), "Commit", []);
    await $.mcall((await $.wv([$t1, $t2], "CreditCards", C, false)), "CloseAll", []);
    await $.mset((await $.mv((await $.wv([$t1, $t2], "CreditCards", C, false)), "SQL")), "Text", (await $.wcall([$t1, $t2], "CallStringFunction", ["Get_CreditCards", [(await $.mv((await $.wv([$t1, $t2], "DBCFilial", C, false)), "KeyValue"))]], C)));
    await $.mcall((await $.wv([$t1, $t2], "CreditCards", C, false)), "open", []);
    await $.mcall((await $.wv([$t1, $t2], "CreditCards", C, false)), "First", []);
    await $.wset([$t1, $t2], "CredCount", (await $.mv((await $.wv([$t1, $t2], "CreditCards", C, false)), "RecordCount")), { get: async () => L0["credcount"], set: async (v) => { L0["credcount"] = v; }, local: true });
    {
      const $t3 = (await $.wv([$t1, $t2], "TrProgressForm", C, false));
      const $t4 = (await $.wv([$t1, $t2, $t3], "TrPrB", C, false));
      await $.wset([$t1, $t2, $t3, $t4], "Max", (await $.wv([$t1, $t2, $t3, $t4], "CredCount", { get: async () => L0["credcount"], set: async (v) => { L0["credcount"] = v; }, local: true }, false)), C);
      await $.wset([$t1, $t2, $t3, $t4], "Position", 0, C);
      await $.wset([$t1, $t2, $t3, $t4], "Step", 1, C);
    }
    await $.mcall((await $.wv([$t1, $t2], "TrProgressForm", C, false)), "Show", []);
    while ($.truthy($.not((await $.mv((await $.wv([$t1, $t2], "CreditCards", C, false)), "Eof"))))) {
      await $.wset([$t1, $t2], "CredID", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "CreditCards", C, false)), "FieldByName", ["ID"])), "AsInteger")), { get: async () => L0["credid"], set: async (v) => { L0["credid"] = v; }, local: true });
      await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["Tranche_CreditCards", [(await $.wv([$t1, $t2], "CredID", { get: async () => L0["credid"], set: async (v) => { L0["credid"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "TrDate", { get: async () => L0["trdate"], set: async (v) => { L0["trdate"] = v; }, local: true }, false))]], C)));
      await $.mset((await $.mv((await $.wv([$t1, $t2], "TrProgressForm", C, false)), "TrPrB")), "Position", (await $.mv((await $.wv([$t1, $t2], "CreditCards", C, false)), "RecNo")));
      await $.mcall((await $.wv([$t1, $t2], "CreditCards", C, false)), "Next", []);
      await $.mcall((await $.wv([$t1, $t2], "CommonApplication", C, false)), "ProcessMessages", []);
      await $.tick();
    }
    await $.mcall((await $.wv([$t1, $t2], "TrProgressForm", C, false)), "Close", []);
    if ($.truthy((await $.mv((await $.wv([$t1, $t2], "Transactions", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t1, $t2], "Transactions", C, false)), "Refresh", []);
    }
    await $.mcall((await $.wv([$t1, $t2], "Transactions", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1, $t2], "CreditCartdsForm", C, false)), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainTrForm", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "brid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["brid"] = (await $.mv((await $.v(C, "DBCFilial")), "KeyValue"));
  {
    const $t5 = (await $.wobj(C, "CreditCardDatMod"));
    const $t6 = (await $.wv([$t5], "Controls", C, false));
    await $.stmt($.wcall([$t5, $t6], "CloseAll", [], C));
    await $.mset((await $.wv([$t5, $t6], "SQL", C, false)), "Text", (await $.mcall((await $.wv([$t5, $t6], "CM_CARDS", C, false)), "callStringFunction", ["Control_CreditCards", [(await $.wv([$t5, $t6], "BrID", { get: async () => L0["brid"], set: async (v) => { L0["brid"] = v; }, local: true }, false))]])));
    await $.stmt($.wcall([$t5, $t6], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t5, $t6], "RecordCount", C, false)), 0))) {
      await $.stmt((await $.wcall([$t5, $t6], "ShowMessage", ["Heç bir əməliyyat aparılmayıb"], C)));
      return L0.result;
    }
  }
  {
    const $t7 = (await $.wobj(C, "CMExcelExport"));
    await $.stmt($.wcall([$t7], "Connect", [], C));
    await $.stmt((await $.wcall([$t7], "ExportDataset", [(await $.mv((await $.wv([$t7], "CreditCardDatMod", C, false)), "Controls")), "Yoxlama", (await $.wv([$t7], "true", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "MainTrForm", (await $.mcall((await $.v(C, "TMainTrForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
