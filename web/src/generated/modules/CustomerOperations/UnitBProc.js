// Generated from UnitBProc.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitBProc", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "CO_datamod_impl", "CO_Transact_Unitp", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormBProc", "TForm", {"dbgridbussproc": {"name": "DBGridBussProc", "type": "TDBGrid"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "btnclose": {"name": "BtnClose", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("FormBProc", null, "TFormBProc");
  });
  U.method("TFormBProc", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "ODS_BussProc")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBProc", "DBGridBussProcDblClick", async function DBGridBussProcDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CO_Transactions", (await $.mcall((await $.v(C, "TCO_Transactions")), "Create", [Self])));
  {
    const $t1 = (await $.v(C, "CO_Transactions"));
    const $t2 = (await $.wv([$t1], "CO_DataMod", C, false));
    await $.mset((await $.wv([$t1, $t2], "DBEditDebtAccNo", C, false)), "Text", "");
    await $.mset((await $.wv([$t1, $t2], "DBEditDebtAccName", C, false)), "Text", "");
    await $.mset((await $.wv([$t1, $t2], "CreditAccSearchEdit", C, false)), "Text", "");
    await $.mset((await $.wv([$t1, $t2], "DBEditCredAccNo", C, false)), "Text", "");
    await $.mset((await $.wv([$t1, $t2], "DBEditCredAccName", C, false)), "Text", "");
    await $.mset((await $.wv([$t1, $t2], "CredCurCode", C, false)), "Text", "0");
    await $.mset((await $.wv([$t1, $t2], "DebtCurCode", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Account", C, false)), "FieldByName", ["AccValCode"])), "AsString")));
    await $.mset((await $.wv([$t1, $t2], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Account", C, false)), "FieldByName", ["AccNo"])), "AsString")));
    await $.mset((await $.wv([$t1, $t2], "DBLookupDebtAcc", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "Account", C, false)), "FieldByName", ["AccNo"])), "AsString")));
    await $.stmt((await $.wcall([$t1, $t2], "DBLookupDebtAccClick", [(await $.wv([$t1, $t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CO_Transactions")), "ShowModal")), (await $.v(C, "IDOK"))))) {
    {
      const $t3 = (await $.v(C, "CO_Transactions"));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t3], "CO_DataMod", C, false)), "OrPack_BussProc")), "CallProcedure", ["execbprocess", [(await $.mv((await $.mv((await $.wv([$t3], "CO_DataMod", C, false)), "ODS_BussProcID")), "AsVariant")), (await $.wcall([$t3], "StrToInt", [(await $.mv((await $.wv([$t3], "Acc_id", C, false)), "Text"))], C)), (await $.wcall([$t3], "StrToInt", [(await $.mv((await $.wv([$t3], "Acc_id_", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t3], "DebtValue", C, false)), "Value")), (await $.mv((await $.wv([$t3], "CreditValue", C, false)), "Value")), (await $.mv((await $.wv([$t3], "Ekv", C, false)), "Value")), (await $.mv((await $.wv([$t3], "CashSymbolLookUp", C, false)), "KeyValue")), (await $.mv((await $.wv([$t3], "ConvertationSymbolLookUp", C, false)), "KeyValue")), (await $.mv((await $.wv([$t3], "DBEditTransName", C, false)), "Text")), (await $.mv((await $.wv([$t3], "ReportIDLookUp", C, false)), "KeyValue")), (await $.mv((await $.wv([$t3], "CountrIDLookUp", C, false)), "KeyValue"))]])));
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t3], "CO_DataMod", C, false)), "OrPack_BussProc")), "CallProcedure", ["commitprocs", []])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormBProc", "BtnCloseClick", async function BtnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
