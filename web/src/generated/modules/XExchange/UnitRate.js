// Generated from UnitRate.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitRate", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "Grids", "DBGrids", "StdCtrls", "Buttons", "ComCtrls", "UnitDateExch", "sboapiDataModuleImpl", "SBTranslateProc", "Unit_ExchangeMGR"]);
  const C = [U];
  U.defClass("TFormRate", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "dbgridrate": {"name": "DBGridRate", "type": "TDBGrid"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dtp_rate_date": {"name": "DTP_Rate_Date", "type": "TDateTimePicker"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}}, {});
  U.init(async () => {
    U.var_("FormRate", null, "TFormRate");
  });
  U.method("TFormRate", "InsertExchangeRate", async function InsertExchangeRate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "i": 0, "dat": 0};
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    {
      const $t1 = (await $.v(C, "DataModExch"));
      if ($.truthy($.gt((await $.mv((await $.wv([$t1], "ODSExchRate", C, false)), "RecordCount")), 0))) {
        await $.mcall((await $.wv([$t1], "ODSExchRatearchive", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t1], "ODSExchRatearchive", C, false)), "SetVariable", ["dat", (await $.wcall([$t1], "Integer", [(await $.wcall([$t1], "Trunc", [(await $.mv((await $.wv([$t1], "DTP_Rate_Date", C, false)), "Date"))], C))], C))])));
        await $.mcall((await $.wv([$t1], "ODSExchRatearchive", C, false)), "Open", []);
        await $.mcall((await $.wv([$t1], "ODSExchRateDelete", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t1], "ODSExchRateDelete", C, false)), "SetVariable", ["dat", (await $.wcall([$t1], "Integer", [(await $.wcall([$t1], "Trunc", [(await $.mv((await $.wv([$t1], "DTP_Rate_Date", C, false)), "Date"))], C))], C))])));
        await $.mcall((await $.wv([$t1], "ODSExchRateDelete", C, false)), "Open", []);
        await $.mcall((await $.mv((await $.wv([$t1], "ODSExchRateDelete", C, false)), "Session")), "Commit", []);
      }
      await $.mcall((await $.wv([$t1], "ODSRateInsert", C, false)), "First", []);
      { const $t2 = (await $.mv((await $.wv([$t1], "ODSRateInsert", C, false)), "RecordCount"));
        await $.wset([$t1], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t3 = true;
        for (;;) {
          if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t3 = false;
          if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
          await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "Insert", []);
          await $.mset((await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "FieldByName", ["val_id"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t1], "ODSRateInsert", C, false)), "FieldByName", ["val_id"])), "AsInteger")));
          await $.mset((await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "FieldByName", ["val_name"])), "AsString", (await $.mv((await $.mcall((await $.wv([$t1], "ODSRateInsert", C, false)), "FieldByName", ["val_name"])), "AsString")));
          await $.mset((await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "FieldByName", ["val_full_name"])), "AsString", (await $.mv((await $.mcall((await $.wv([$t1], "ODSRateInsert", C, false)), "FieldByName", ["val_full_name"])), "AsString")));
          await $.mset((await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "FieldByName", ["val_purchase_course"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t1], "ODSRateInsert", C, false)), "FieldByName", ["val_purchase_course"])), "AsFloat")));
          await $.mset((await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "FieldByName", ["val_selling_course"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t1], "ODSRateInsert", C, false)), "FieldByName", ["val_selling_course"])), "AsFloat")));
          await $.mset((await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "FieldByName", ["val_nb_course"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t1], "ODSRateInsert", C, false)), "FieldByName", ["val_nb_course"])), "AsFloat")));
          await $.mset((await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "FieldByName", ["dat"])), "AsDateTime", (await $.wcall([$t1], "Integer", [(await $.wcall([$t1], "Trunc", [(await $.mv((await $.wv([$t1], "DTP_Rate_Date", C, false)), "Date"))], C))], C)));
          await $.mset((await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "FieldByName", ["Tim"])), "AsDateTime", (await $.mv((await $.mcall((await $.wv([$t1], "ODSRateInsert", C, false)), "FieldByName", ["TIM"])), "AsDateTime")));
          await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "Post", []);
          await $.mcall((await $.wv([$t1], "ODSRateInsert", C, false)), "Next", []);
          await $.tick();
        }
      }
      await $.mcall((await $.wv([$t1], "ODSExchRate", C, false)), "Refresh", []);
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormRate", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "exid": 0, "i": 0, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
    {
      const $t4 = (await $.v(C, "DataModExch"));
      await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "First", []);
      { const $t5 = (await $.mv((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "RecordCount"));
        await $.wset([$t4], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
        let $t6 = true;
        for (;;) {
          if (!$t6) { await $.wset([$t4], "i", $.succ((await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
          $t6 = false;
          if (!($.ord((await $.wv([$t4], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t5))) break;
          await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "Insert", []);
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["val_id"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "FieldByName", ["val_kod"])), "AsInteger")));
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["ex_id"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "FieldByName", ["ex_id"])), "AsInteger")));
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["dat"])), "AsDateTime", (await $.wcall([$t4], "Integer", [(await $.wcall([$t4], "Trunc", [(await $.mv((await $.wv([$t4], "DTP_Rate_Date", C, false)), "Date"))], C))], C)));
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["ftpe_ostat"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "FieldByName", ["ftpe_ostat"])), "AsFloat")));
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["pefr_ostat"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "FieldByName", ["pefr_ostat"])), "AsFloat")));
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["first_ostat"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "FieldByName", ["first_ostat"])), "AsFloat")));
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["current_ostat"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "FieldByName", ["current_ostat"])), "AsFloat")));
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["purchase_turn"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "FieldByName", ["purchase_turn"])), "AsFloat")));
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["selling_turn"])), "AsFloat", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "FieldByName", ["selling_turn"])), "AsFloat")));
          await $.mset((await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "FieldByName", ["Tim"])), "AsDateTime", (await $.mv((await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "FieldByName", ["TIM"])), "AsDateTime")));
          await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "Post", []);
          await $.mcall((await $.wv([$t4], "ODSExRemainderInsert", C, false)), "Next", []);
          await $.tick();
        }
      }
      await $.mcall((await $.wv([$t4], "ODSExRemainder", C, false)), "Refresh", []);
      await $.mcall((await $.wv([$t4], "ODSExchRateOther", C, false)), "Refresh", []);
    }
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRate", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SetExchangeRate", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormRate", "SetExchangeRate", async function SetExchangeRate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "dat": 0, "ftime": 0, "sysdate": 0};
  await $.mset((await $.v(C, "DTP_Rate_Date")), "Date", (await $.v(C, "Date")));
  await $.mset((await $.v(C, "DTP_Rate_Date")), "Time", (await $.v(C, "Time")));
  L0["ftime"] = (await $.mv((await $.v(C, "DTP_Rate_Date")), "DateTime"));
  L0["dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_Rate_Date")), "DateTime"))]))]));
  L0["sysdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBOPDate")), "CallDateFunction", ["get_date", []]))]))]));
  {
    const $t7 = (await $.mv((await $.v(C, "DataModExch")), "ODSRateInsert"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t7], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add("select operkurs.val_kod val_id,(select val_name from avalute where valute=operkurs.val_kod)  val_name,", "(select valu_name from avalute where valute=operkurs.val_kod) val_full_name,"), "operkurs.buy_rate  val_purchase_course, operkurs.sell_rate val_selling_course,operkurs.ostat val_nb_course,"), ":dat as dat,"), ":Tim as Tim"), " from operkurs where operkurs.val_kod<>0 and dat=:dat")])));
    await $.stmt((await $.wcall([$t7], "SetVariable", ["dat", (await $.wv([$t7], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t7], "SetVariable", ["Tim", (await $.wv([$t7], "FTime", { get: async () => L0["ftime"], set: async (v) => { L0["ftime"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t7], "Open", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormRate", "SetExchangeRemainder", async function SetExchangeRemainder(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"v_exno": $.copyArg(p0), result: undefined, "dat": 0, "ftime": 0, "sysdate": 0};
  await $.fixArgs(L0, ["v_exno"]);
  await $.mset((await $.v(C, "DTP_Rate_Date")), "Date", (await $.v(C, "Date")));
  await $.mset((await $.v(C, "DTP_Rate_Date")), "Time", (await $.v(C, "Time")));
  L0["ftime"] = (await $.mv((await $.v(C, "DTP_Rate_Date")), "DateTime"));
  L0["dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTP_Rate_Date")), "DateTime"))]))]));
  L0["sysdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DataModExch")), "SBOPDate")), "CallDateFunction", ["get_date", []]))]))]));
  if ($.truthy($.eq(L0["sysdate"], L0["dat"]))) {
    {
      const $t8 = (await $.mv((await $.v(C, "DataModExch")), "ODSExRemainderInsert"));
      await $.stmt($.wcall([$t8], "Close", [], C));
      await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t8], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("SELECT   t.val_kod,", "(SELECT   NVL (SUM (ammount), 0) FROM provdoc"), " WHERE debt = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   kredit = (select pur_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)) ftpe_ostat,"), "NVL((SELECT  SUM(ammount) FROM provdoc"), " WHERE kredit = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   debt = (select pur_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)),0) pefr_ostat,"), "abs(tp.ostat) first_ostat,"), "0 purchase_turn,"), "0 selling_turn,"), "(NVL (ABS (l.ostat), 0)"), "-(SELECT NVL (SUM (ammount), 0) FROM provdoc"), " WHERE debt = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   kredit = (select pur_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod))"), "+ (SELECT   NVL (SUM (ammount), 0) FROM provdoc"), " WHERE debt = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   kredit = (select pur_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod))) current_ostat,"), ":ex_id as ex_id,"), ":dat AS dat,"), ":tim AS tim"), " FROM temprate t,tenostat l,tempost tp WHERE  l.acc_id=(SELECT selling_acc_id from ex_accounts WHERE ex_id=:ex_id AND val_id=t.val_kod)"), "AND l.acc_id=tp.acc_id "), "AND t.val_kod <> 0"), "  UNION  "), "SELECT   t.val_kod,"), "(SELECT   NVL (SUM (ammount), 0)FROM provdoc"), " WHERE debt = (SELECT MAX (purchase_acc_id) FROM ex_accounts WHERE ex_id=:ex_id)"), " AND   kredit=(SELECT MAX (cash_acc_id) FROM   ex_accounts WHERE  ex_id=:ex_id)) ftpe_ostat,"), "NVL((SELECT  SUM(ammount) FROM provdoc"), " WHERE kredit = (select purchase_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND  debt = (SELECT  MAX (cash_acc_id) from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)),0) pefr_ostat,"), "abs(tp.ostat) first_ostat,"), "0 purchase_turn,"), "0 selling_turn,"), "(NVL (ABS (l.ostat), 0)"), "- (SELECT   NVL (SUM (ammount), 0)FROM provdoc"), " WHERE   debt = (SELECT MAX (purchase_acc_id) FROM ex_accounts WHERE ex_id=:ex_id)"), " AND     kredit=(SELECT MAX (cash_acc_id) FROM   ex_accounts WHERE  ex_id=:ex_id))"), "+ (SELECT   NVL (SUM (ammount), 0)FROM provdoc"), " WHERE debt = (SELECT MAX (cash_acc_id ) FROM ex_accounts WHERE ex_id=:ex_id)"), " AND   kredit=(SELECT MAX (purchase_acc_id) FROM   ex_accounts WHERE  ex_id=:ex_id))) current_ostat,"), ":ex_id as ex_id,"), ":dat AS dat,"), ":tim AS tim"), " FROM temprate t,tenostat l,tempost tp WHERE  l.acc_id=(select max(purchase_acc_id) from ex_accounts where ex_id=:ex_id)"), "AND l.acc_id=tp.acc_id "), "AND t.val_kod =0 ORDER BY  val_kod")])));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["dat", (await $.wv([$t8], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t8], "SetVariable", ["Tim", (await $.wv([$t8], "FTime", { get: async () => L0["ftime"], set: async (v) => { L0["ftime"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t8], "Open", [], C));
    }
  }
  if ($.truthy($.lt(L0["sysdate"], L0["dat"]))) {
    {
      const $t9 = (await $.mv((await $.v(C, "DataModExch")), "ODSExRemainderInsert"));
      await $.stmt($.wcall([$t9], "Close", [], C));
      await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t9], "SQL", C, false)), "Add", [$.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add("SELECT   t.val_kod,", "(SELECT   NVL (SUM (ammount), 0) FROM lazytransaction"), " WHERE debt = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   kredit = (select pur_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   dat = :dat) ftpe_ostat,"), "NVL((SELECT  SUM(ammount) FROM lazytransaction"), " WHERE kredit = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   debt = (select pur_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND dat = :dat),0) pefr_ostat,"), "( NVL (ABS (l.ostat), 0)"), "-(SELECT   NVL (SUM (ammount), 0) FROM  lazytransaction"), " WHERE debt = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND kredit = (select pur_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND dat = :dat)"), "+ (SELECT NVL(SUM(ammount),0)from lazytransaction "), " WHERE debt = (select pur_acc_id  from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND kredit = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND dat = :dat)) first_ostat,"), "0 purchase_turn,"), "0 selling_turn,"), "(NVL (ABS (l.ostat), 0)"), "-(SELECT NVL (SUM (ammount), 0) FROM lazytransaction"), " WHERE debt = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   kredit = (select pur_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   dat = :dat)"), "+ (SELECT   NVL (SUM (ammount), 0) FROM lazytransaction"), " WHERE debt = (select selling_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   kredit = (select pur_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND   dat = :dat)) current_ostat,"), ":ex_id as ex_id,"), ":dat AS dat,"), ":tim AS tim"), " FROM temprate t,lazyrest l WHERE  l.acc_id=(SELECT selling_acc_id from ex_accounts WHERE ex_id=:ex_id AND val_id=t.val_kod)"), "AND t.val_kod <> 0"), "  UNION  "), "SELECT   t.val_kod,"), "(SELECT   NVL (SUM (ammount), 0)FROM lazytransaction"), " WHERE debt = (SELECT MAX (purchase_acc_id) FROM ex_accounts WHERE ex_id=:ex_id)"), " AND   kredit=(SELECT MAX (cash_acc_id) FROM   ex_accounts WHERE  ex_id=:ex_id)"), " AND   dat = :dat) ftpe_ostat,"), "NVL((SELECT  SUM(ammount) FROM lazytransaction"), " WHERE kredit = (select purchase_acc_id from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND  debt = (SELECT  MAX (cash_acc_id) from ex_accounts where ex_id=:ex_id and val_id=t.val_kod)"), " AND dat = :dat),0) pefr_ostat,"), "( NVL (ABS (l.ostat), 0)"), "-(SELECT   NVL (SUM (ammount), 0) FROM  lazytransaction"), " WHERE debt =(select max(purchase_acc_id) from ex_accounts where ex_id=:ex_id)"), " AND kredit =(select max(cash_acc_id) from ex_accounts where ex_id=:ex_id)"), " AND dat = :dat)"), "+(select NVL (SUM (ammount), 0) from lazytransaction"), " WHERE debt =(select max(cash_acc_id) from ex_accounts where ex_id=:ex_id)"), " AND kredit =(select max(purchase_acc_id) from ex_accounts where ex_id=:ex_id)"), " AND dat = :dat) )first_ostat,"), "0 purchase_turn,"), "0 selling_turn,"), "(NVL (ABS (l.ostat), 0)"), "- (SELECT   NVL (SUM (ammount), 0)FROM lazytransaction"), " WHERE   debt = (SELECT MAX (purchase_acc_id) FROM ex_accounts WHERE ex_id=:ex_id)"), " AND     kredit=(SELECT MAX (cash_acc_id) FROM   ex_accounts WHERE  ex_id=:ex_id)"), " AND     dat = :dat)"), "+ (SELECT   NVL (SUM (ammount), 0)FROM lazytransaction"), " WHERE debt = (SELECT MAX (cash_acc_id ) FROM ex_accounts WHERE ex_id=:ex_id)"), " AND   kredit=(SELECT MAX (purchase_acc_id) FROM   ex_accounts WHERE  ex_id=:ex_id)"), " AND   dat = :dat)) current_ostat,"), ":ex_id as ex_id,"), ":dat AS dat,"), ":tim AS tim"), " FROM temprate t,lazyrest l WHERE  l.acc_id=(select max(purchase_acc_id) from ex_accounts where ex_id=:ex_id)"), "AND t.val_kod =0 ORDER BY  val_kod")])));
      await $.stmt((await $.wcall([$t9], "SetVariable", ["dat", (await $.wv([$t9], "Dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t9], "SetVariable", ["Tim", (await $.wv([$t9], "FTime", { get: async () => L0["ftime"], set: async (v) => { L0["ftime"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t9], "Open", [], C));
    }
  }
  return L0.result;
}, {"params": ["v_exno"], "kind": "procedure", "ptypes": ["integer"]});
  U.method("TFormRate", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
