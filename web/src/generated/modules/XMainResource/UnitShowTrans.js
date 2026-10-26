// Generated from UnitShowTrans.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitShowTrans", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "ComCtrls", "StdCtrls", "Buttons", "DBGridEhGrouping", "GridsEh", "UnitData", "UnitUpdTrans", "MainResourceImpl", "sboapiDataModuleImpl", "SBTranslateProc", "UnitInsWares"]);
  const C = [U];
  U.defClass("TFormShowTrans", "TForm", {"dbgridehshowtrans": {"name": "DBGridEhShowTrans", "type": "TDBGridEh"}, "btntrans": {"name": "BtnTrans", "type": "TBitBtn"}, "progressbar": {"name": "ProgressBar", "type": "TProgressBar"}, "btntransshow": {"name": "BtnTransShow", "type": "TBitBtn"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("FormShowTrans", null, "TFormShowTrans");
  });
  U.method("TFormShowTrans", "BtnTransClick", async function BtnTransClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "v_debitid": 0, "v_creditid": 0, "v_amount": 0, "v_trname": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "lazy")), "Refresh", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares")), "FieldByName", ["trans_date"])), "AsDateTime"))))) {
    {
      const $t1 = (await $.v(C, "DataModWares"));
      { const $t2 = (await $.wv([$t1], "New_Or_Calc_Wares_Trans", C, false));
        if ($.eq($t2, 1)) {
          if ($.truthy($.not((await $.mv((await $.wv([$t1], "ODSCalcWares", C, false)), "IsEmpty"))))) {
            await $.mset((await $.wv([$t1], "ProgressBar", C, false)), "Position", 0);
            await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "First", []);
            { const $t3 = (await $.mv((await $.wv([$t1], "ODSCalcWares", C, false)), "RecordCount"));
              await $.wset([$t1], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
              let $t4 = true;
              for (;;) {
                if (!$t4) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                $t4 = false;
                if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t3))) break;
                await $.wset([$t1], "v_debitid", (await $.mv((await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "fieldbyname", ["debt_acc"])), "AsFloat")), { get: async () => L0["v_debitid"], set: async (v) => { L0["v_debitid"] = v; }, local: true });
                await $.wset([$t1], "v_creditid", (await $.mv((await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "fieldbyname", ["cred_acc"])), "AsFloat")), { get: async () => L0["v_creditid"], set: async (v) => { L0["v_creditid"] = v; }, local: true });
                await $.wset([$t1], "v_amount", (await $.mv((await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "fieldbyname", ["debt_amount"])), "AsFloat")), { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true });
                await $.wset([$t1], "v_trname", (await $.mv((await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "fieldbyname", ["group_name"])), "AsString")), { get: async () => L0["v_trname"], set: async (v) => { L0["v_trname"] = v; }, local: true });
                await $.mset((await $.wv([$t1], "ProgressBar", C, false)), "Position", $.idiv($.mul((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 100), (await $.mv((await $.wv([$t1], "ODSCalcWares", C, false)), "RecordCount"))));
                await $.stmt((await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "CallProcedure", ["settransaction", [(await $.wv([$t1], "v_debitid", { get: async () => L0["v_debitid"], set: async (v) => { L0["v_debitid"] = v; }, local: true }, false)), (await $.wv([$t1], "v_creditid", { get: async () => L0["v_creditid"], set: async (v) => { L0["v_creditid"] = v; }, local: true }, false)), (await $.wv([$t1], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), (await $.wv([$t1], "v_trname", { get: async () => L0["v_trname"], set: async (v) => { L0["v_trname"] = v; }, local: true }, false)), (await $.wv([$t1], "p_id", C, false))]])));
                await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "Next", []);
                await $.tick();
              }
            }
            await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "Close", []);
            await $.mcall((await $.mv((await $.wv([$t1], "ODSCalcWares", C, false)), "SQL")), "Clear", []);
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "ODSCalcWares", C, false)), "SQL")), "Add", ["delete from wares_all_trans"])));
            await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "ExecSQL", []);
            await $.mset((await $.wv([$t1], "ProgressBar", C, false)), "Position", 0);
            await $.stmt((await $.wcall([$t1], "ShowMessage", ["Əməliyyatlar günün sənədlərinə göndərildi!"], C)));
            await $.stmt($.wcall([$t1], "close", [], C));
          } else {
            await $.stmt((await $.wcall([$t1], "ShowMessage", ["Heç bir sənəd yoxdur!"], C)));
          }
        }
        else if ($.eq($t2, 2) || $.eq($t2, 3) || $.eq($t2, 4)) {
          if ($.truthy($.not((await $.mv((await $.wv([$t1], "ODSCalcWares", C, false)), "IsEmpty"))))) {
            await $.mset((await $.wv([$t1], "ProgressBar", C, false)), "Position", 0);
            await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "First", []);
            { const $t5 = (await $.mv((await $.wv([$t1], "odscalcwares", C, false)), "RecordCount"));
              await $.wset([$t1], "i", 1, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
              let $t6 = true;
              for (;;) {
                if (!$t6) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
                $t6 = false;
                if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t5))) break;
                await $.wset([$t1], "v_debitid", (await $.mv((await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "fieldbyname", ["debt_acc"])), "AsFloat")), { get: async () => L0["v_debitid"], set: async (v) => { L0["v_debitid"] = v; }, local: true });
                await $.wset([$t1], "v_creditid", (await $.mv((await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "fieldbyname", ["cred_acc"])), "AsFloat")), { get: async () => L0["v_creditid"], set: async (v) => { L0["v_creditid"] = v; }, local: true });
                await $.wset([$t1], "v_amount", (await $.mv((await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "fieldbyname", ["debt_amount"])), "AsFloat")), { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true });
                await $.wset([$t1], "v_trname", (await $.mv((await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "fieldbyname", ["group_name"])), "AsString")), { get: async () => L0["v_trname"], set: async (v) => { L0["v_trname"] = v; }, local: true });
                await $.mset((await $.wv([$t1], "ProgressBar", C, false)), "Position", $.idiv(100, (await $.mv((await $.wv([$t1], "ODSCalcWares", C, false)), "RecordCount"))));
                await $.stmt((await $.mcall((await $.wv([$t1], "SB_MAIN_RESOURCE", C, false)), "CallProcedure", ["set_transaction_new", [(await $.wv([$t1], "v_debitid", { get: async () => L0["v_debitid"], set: async (v) => { L0["v_debitid"] = v; }, local: true }, false)), (await $.wv([$t1], "v_creditid", { get: async () => L0["v_creditid"], set: async (v) => { L0["v_creditid"] = v; }, local: true }, false)), (await $.wv([$t1], "v_amount", { get: async () => L0["v_amount"], set: async (v) => { L0["v_amount"] = v; }, local: true }, false)), (await $.wv([$t1], "v_trname", { get: async () => L0["v_trname"], set: async (v) => { L0["v_trname"] = v; }, local: true }, false)), (await $.wv([$t1], "p_id", C, false))]])));
                await $.mcall((await $.wv([$t1], "odscalcwares", C, false)), "Next", []);
                await $.tick();
              }
            }
            await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "Close", []);
            await $.mcall((await $.mv((await $.wv([$t1], "ODSCalcWares", C, false)), "SQL")), "Clear", []);
            await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "ODSCalcWares", C, false)), "SQL")), "Add", ["delete from wares_all_trans"])));
            await $.mcall((await $.wv([$t1], "ODSCalcWares", C, false)), "ExecSQL", []);
            await $.mset((await $.wv([$t1], "ProgressBar", C, false)), "Position", 0);
            await $.stmt((await $.wcall([$t1], "ShowMessage", ["Əməliyyatlar günün sənədlərinə göndərildi!"], C)));
            await $.stmt($.wcall([$t1], "close", [], C));
          } else {
            await $.stmt((await $.wcall([$t1], "ShowMessage", ["Heç bir sənəd yoxdur!"], C)));
          }
        }
      }
    }
  } else {
    await $.mset((await $.v(C, "BtnTrans")), "Enabled", false);
    await $.stmt((await $.call(C, "ShowMessage", ["Əməliyyatlar artıq günün sənədlərinə göndərilib!!!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormShowTrans", "BtnTransShowClick", async function BtnTransShowClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t7 = (await $.v(C, "New_Or_Calc_Wares_Trans"));
    if ($.eq($t7, 1)) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["wares_all_transaction", []])));
      {
        const $t8 = (await $.v(C, "DataModWares"));
        await $.mcall((await $.wv([$t8], "ODSCalcWares", C, false)), "Close", []);
        await $.mcall((await $.mv((await $.wv([$t8], "ODSCalcWares", C, false)), "SQL")), "Clear", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t8], "ODSCalcWares", C, false)), "SQL")), "Add", [$.add($.add($.add("select W.*,", "SB_MAIN_RESOURCE.GetAccountNumber(W.debt_acc) as DebtAccNo,"), "SB_MAIN_RESOURCE.GetAccountNumber(W.cred_acc) as CredAccNo "), " from wares_all_trans W")])));
        await $.mcall((await $.wv([$t8], "ODSCalcWares", C, false)), "Open", []);
        await $.stmt($.wcall([$t8], "Refresh", [], C));
      }
    }
    else if ($.eq($t7, 2) || $.eq($t7, 3)) {
      {
        const $t9 = (await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares"));
        await $.stmt($.wcall([$t9], "Close", [], C));
        await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t9], "SQL", C, false)), "Add", [$.add($.add($.add("select W.*,", "SB_MAIN_RESOURCE.GetAccountNumber(W.debt_acc) as DebtAccNo,"), "SB_MAIN_RESOURCE.GetAccountNumber(W.cred_acc) as CredAccNo "), " from wares_all_trans W")])));
        await $.stmt($.wcall([$t9], "Open", [], C));
        await $.stmt($.wcall([$t9], "Refresh", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormShowTrans", "DBGridEhShowTransKeyDown", async function DBGridEhShowTransKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_up"))))) {
    await $.mset((await $.v(C, "DateTimePicker1")), "Visible", true);
  }
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "vk_down"))))) {
    await $.mset((await $.v(C, "DateTimePicker1")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormShowTrans", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModWares")), "lazy")), "Refresh", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "lazy")), "FieldByName", ["in_date"])), "AsDateTime")));
  { const $t10 = (await $.v(C, "New_Or_Calc_Wares_Trans"));
    if ($.eq($t10, 1)) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["wares_all_transaction", []])));
      {
        const $t11 = (await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares"));
        await $.stmt($.wcall([$t11], "Close", [], C));
        await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t11], "SQL", C, false)), "Add", [$.add($.add($.add("select W.*,", "SB_MAIN_RESOURCE.GetAccountNumber(W.debt_acc) as DebtAccNo,"), "SB_MAIN_RESOURCE.GetAccountNumber(W.cred_acc) as CredAccNo "), " from wares_all_trans W")])));
        await $.stmt($.wcall([$t11], "Open", [], C));
        await $.stmt($.wcall([$t11], "Refresh", [], C));
      }
    }
    else if ($.eq($t10, 4)) {
      {
        const $t12 = (await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares"));
        await $.stmt($.wcall([$t12], "Close", [], C));
        await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t12], "SQL", C, false)), "Add", [$.add($.add($.add("select W.*,", "SB_MAIN_RESOURCE.GetAccountNumber(W.debt_acc) as DebtAccNo,"), "SB_MAIN_RESOURCE.GetAccountNumber(W.cred_acc) as CredAccNo "), " from wares_all_trans W")])));
        await $.stmt($.wcall([$t12], "Open", [], C));
        await $.stmt($.wcall([$t12], "Refresh", [], C));
      }
    }
    else if ($.eq($t10, 2) || $.eq($t10, 3)) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["wares_all_transaction2", []])));
      {
        const $t13 = (await $.mv((await $.v(C, "DataModWares")), "ODSCalcWares"));
        await $.stmt($.wcall([$t13], "Close", [], C));
        await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
        await $.stmt((await $.mcall((await $.wv([$t13], "SQL", C, false)), "Add", [$.add($.add($.add("select W.*,", "SB_MAIN_RESOURCE.GetAccountNumber(W.debt_acc) as DebtAccNo,"), "SB_MAIN_RESOURCE.GetAccountNumber(W.cred_acc) as CredAccNo "), " from wares_all_trans W")])));
        await $.stmt($.wcall([$t13], "Open", [], C));
        await $.stmt($.wcall([$t13], "Refresh", [], C));
      }
    }
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
