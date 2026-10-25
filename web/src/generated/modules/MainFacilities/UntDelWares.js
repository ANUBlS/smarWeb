// Generated from UntDelWares.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntDelWares", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "ExtCtrls", "DB", "MFDataModule", "SBTransaction", "UntMainFacilitiesImpl"]);
  const C = [U];
  U.defClass("TFrmDelWares", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "eout_num": {"name": "EOut_num", "type": "TEdit"}, "dtpout": {"name": "DTPOUT", "type": "TDateTimePicker"}, "ecause_out": {"name": "ECause_out", "type": "TEdit"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "eoffdate": {"name": "EOffDate", "type": "TEdit"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("FrmDelWares", null, "TFrmDelWares");
  });
  U.method("TFrmDelWares", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "MainFacilities"));
    await $.mset((await $.wv([$t1], "DTPOUT", C, false)), "DateTime", (await $.wv([$t1], "GetPresentDate", C, false)));
    await $.mset((await $.wv([$t1], "EOffDate", C, false)), "Text", (await $.wcall([$t1], "FormatDateTime", ["dd-mmm-yyyy", (await $.wv([$t1], "GetPresentDate", C, false))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDelWares", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy(($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmDelWares", "DTPOUTChange", async function DTPOUTChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EOffDate")), "Text", (await $.call(C, "FormatDateTime", ["dd-mmm-yyyy", (await $.mv((L0["sender"]), "Date"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDelWares", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmDelWares", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tempid": 0, "outdate": 0, "transaction": $.rec("ttransaction")};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Are you sure to delete this wares?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    L0["outdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPOUT")), "DateTime"))]));
    {
      const $t2 = (await $.v(C, "MainFDataModule"));
      await $.stmt((await $.mcall((await $.wv([$t2], "OPViewWares", C, false)), "CallProcedure", ["add_archive_wares1", [(await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["GROUPSID"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Name"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Inventar"])), "Asstring")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Inventar_date"])), "AsDateTime")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["First_price"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Balance_price"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["In_date"])), "AsDateTime")), (await $.wv([$t2], "OUTDate", { get: async () => L0["outdate"], set: async (v) => { L0["outdate"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["In_num"])), "AsInteger")), (await $.wcall([$t2], "StrToInt", [(await $.mv((await $.wv([$t2], "EOut_num", C, false)), "text"))], C)), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Amort"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["AllAmort"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Producer_plane"])), "AsString")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["FXM"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Sector_cod"])), "AsInteger")), (await $.mv((await $.wv([$t2], "ECause_out", C, false)), "text")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Modern_date"])), "AsDateTime")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Modern_summa"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Modern_num"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Repair_date"])), "AsDateTime")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Repair_summa"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Repair_num"])), "AsInteger")), (await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["Amort_date"])), "AsDateTime"))]])));
      if ($.truthy((await $.mcall((await $.wv([$t2], "OPViewWares", C, false)), "CallBooleanFunction", ["CheckForTakeOff", [(await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])))) {
        {
          const $t3 = (await $.wv([$t2], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false));
          await $.wset([$t2, $t3], "Size", 0, C);
          await $.wset([$t2, $t3], "TransactionDate", (await $.wv([$t2, $t3], "OUTDate", { get: async () => L0["outdate"], set: async (v) => { L0["outdate"] = v; }, local: true }, false)), C);
          await $.wset([$t2, $t3], "hDebit", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "ViewGroup", C, false)), "FieldByName", ["amort_account"])), "value")), C);
          await $.wset([$t2, $t3], "hCredit", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "ViewGroup", C, false)), "FieldByName", ["main_account"])), "value")), C);
          await $.wset([$t2, $t3], "DebitAmount", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "ViewWares", C, false)), "FieldByName", ["first_price"])), "value")), C);
          await $.wset([$t2, $t3], "CreditAmount", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "ViewWares", C, false)), "FieldByName", ["first_price"])), "value")), C);
          await $.wset([$t2, $t3], "LAmount", (await $.mv((await $.mcall((await $.wv([$t2, $t3], "ViewWares", C, false)), "FieldByName", ["first_price"])), "value")), C);
          await $.wset([$t2, $t3], "DebitRate", 1, C);
          await $.wset([$t2, $t3], "CreditRate", 1, C);
          await $.wset([$t2, $t3], "ParentID", 0, C);
          await $.wset([$t2, $t3], "DebitBankID", 0, C);
          await $.wset([$t2, $t3], "CreditBankID", 0, C);
          await $.wset([$t2, $t3], "FilialID", 0, C);
          await $.wset([$t2, $t3], "PackageNumber", 0, C);
          await $.wset([$t2, $t3], "InbalanceChar", 0, C);
          await $.wset([$t2, $t3], "OutBalanceChar", 0, C);
          await $.wset([$t2, $t3], "CypherCode", 0, C);
          await $.wset([$t2, $t3], "OperationCode", 0, C);
          await $.wset([$t2, $t3], "TransactionID", (-(1)), C);
          await $.wset([$t2, $t3], "TrName", "Əsas vəsaitin hesabdan silinməsi", C);
          await $.wset([$t2, $t3], "IsRoot", (await $.wv([$t2, $t3], "true", C, false)), C);
          await $.wset([$t2, $t3], "ArchiveID", 0, C);
        }
        await $.wset([$t2], "TempID", (await $.wcall([$t2], "SB_AddTransaction", [$.ref(async () => (await $.wv([$t2], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false)), async ($t4) => { await $.wset([$t2], "Transaction", $t4, { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }); }), []], C)), { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t2], "OPViewWares", C, false)), "CallProcedure", ["SetTransactions", [(await $.wv([$t2], "TempID", { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t2], "ViewGroup", C, false)), "FieldByName", ["ID"])), "value"))]])));
      } else {
        {
          const $t5 = (await $.wv([$t2], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false));
          await $.wset([$t2, $t5], "Size", 0, C);
          await $.wset([$t2, $t5], "TransactionDate", (await $.wv([$t2, $t5], "OUTDate", { get: async () => L0["outdate"], set: async (v) => { L0["outdate"] = v; }, local: true }, false)), C);
          await $.wset([$t2, $t5], "hDebit", (await $.mv((await $.mcall((await $.wv([$t2, $t5], "ViewGroup", C, false)), "FieldByName", ["amort_account"])), "value")), C);
          await $.wset([$t2, $t5], "hCredit", (await $.mv((await $.mcall((await $.wv([$t2, $t5], "ViewGroup", C, false)), "FieldByName", ["main_account"])), "value")), C);
          await $.wset([$t2, $t5], "DebitAmount", (await $.mv((await $.mcall((await $.wv([$t2, $t5], "ViewWares", C, false)), "FieldByName", ["first_price"])), "value")), C);
          await $.wset([$t2, $t5], "CreditAmount", (await $.mv((await $.mcall((await $.wv([$t2, $t5], "ViewWares", C, false)), "FieldByName", ["first_price"])), "value")), C);
          await $.wset([$t2, $t5], "LAmount", (await $.mv((await $.mcall((await $.wv([$t2, $t5], "ViewWares", C, false)), "FieldByName", ["first_price"])), "value")), C);
          await $.wset([$t2, $t5], "DebitRate", 1, C);
          await $.wset([$t2, $t5], "CreditRate", 1, C);
          await $.wset([$t2, $t5], "ParentID", 0, C);
          await $.wset([$t2, $t5], "DebitBankID", 0, C);
          await $.wset([$t2, $t5], "CreditBankID", 0, C);
          await $.wset([$t2, $t5], "FilialID", 0, C);
          await $.wset([$t2, $t5], "PackageNumber", 0, C);
          await $.wset([$t2, $t5], "InbalanceChar", 0, C);
          await $.wset([$t2, $t5], "OutBalanceChar", 0, C);
          await $.wset([$t2, $t5], "CypherCode", 0, C);
          await $.wset([$t2, $t5], "OperationCode", 0, C);
          await $.wset([$t2, $t5], "TransactionID", (-(1)), C);
          await $.wset([$t2, $t5], "TrName", "Tam amortizasiya olunmamış əsas vəsaitin hesabdan silinməsi", C);
          await $.wset([$t2, $t5], "IsRoot", (await $.wv([$t2, $t5], "true", C, false)), C);
          await $.wset([$t2, $t5], "ArchiveID", 0, C);
        }
        await $.wset([$t2], "TempID", (await $.wcall([$t2], "SB_AddTransaction", [$.ref(async () => (await $.wv([$t2], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false)), async ($t6) => { await $.wset([$t2], "Transaction", $t6, { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }); }), []], C)), { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t2], "OPViewWares", C, false)), "CallProcedure", ["SetTransactions", [(await $.wv([$t2], "TempID", { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t2], "ViewGroup", C, false)), "FieldByName", ["ID"])), "value"))]])));
        {
          const $t7 = (await $.wv([$t2], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false));
          await $.wset([$t2, $t7], "Size", 0, C);
          await $.wset([$t2, $t7], "TransactionDate", (await $.wv([$t2, $t7], "OUTDate", { get: async () => L0["outdate"], set: async (v) => { L0["outdate"] = v; }, local: true }, false)), C);
          await $.wset([$t2, $t7], "hDebit", (await $.mv((await $.mcall((await $.wv([$t2, $t7], "ViewGroup", C, false)), "FieldByName", ["sale_account"])), "value")), C);
          await $.wset([$t2, $t7], "hCredit", (await $.mv((await $.mcall((await $.wv([$t2, $t7], "ViewGroup", C, false)), "FieldByName", ["amort_account"])), "value")), C);
          await $.wset([$t2, $t7], "DebitAmount", (await $.mv((await $.mcall((await $.wv([$t2, $t7], "ViewWares", C, false)), "FieldByName", ["balance_price"])), "value")), C);
          await $.wset([$t2, $t7], "CreditAmount", (await $.mv((await $.mcall((await $.wv([$t2, $t7], "ViewWares", C, false)), "FieldByName", ["balance_price"])), "value")), C);
          await $.wset([$t2, $t7], "LAmount", (await $.mv((await $.mcall((await $.wv([$t2, $t7], "ViewWares", C, false)), "FieldByName", ["balance_price"])), "value")), C);
          await $.wset([$t2, $t7], "DebitRate", 1, C);
          await $.wset([$t2, $t7], "CreditRate", 1, C);
          await $.wset([$t2, $t7], "ParentID", 0, C);
          await $.wset([$t2, $t7], "DebitBankID", 0, C);
          await $.wset([$t2, $t7], "CreditBankID", 0, C);
          await $.wset([$t2, $t7], "FilialID", 0, C);
          await $.wset([$t2, $t7], "PackageNumber", 0, C);
          await $.wset([$t2, $t7], "InbalanceChar", 0, C);
          await $.wset([$t2, $t7], "OutBalanceChar", 0, C);
          await $.wset([$t2, $t7], "CypherCode", 0, C);
          await $.wset([$t2, $t7], "OperationCode", 0, C);
          await $.wset([$t2, $t7], "TransactionID", (-(1)), C);
          await $.wset([$t2, $t7], "TrName", "Əsas vəsaitin hesabdan silinməsindən yaranan zərər", C);
          await $.wset([$t2, $t7], "IsRoot", (await $.wv([$t2, $t7], "true", C, false)), C);
          await $.wset([$t2, $t7], "ArchiveID", 0, C);
        }
        await $.wset([$t2], "TempID", (await $.wcall([$t2], "SB_AddTransaction", [$.ref(async () => (await $.wv([$t2], "Transaction", { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }, false)), async ($t8) => { await $.wset([$t2], "Transaction", $t8, { get: async () => L0["transaction"], set: async (v) => { L0["transaction"] = v; }, local: true }); }), []], C)), { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t2], "OPViewWares", C, false)), "CallProcedure", ["SetTransactions", [(await $.wv([$t2], "TempID", { get: async () => L0["tempid"], set: async (v) => { L0["tempid"] = v; }, local: true }, false)), (await $.mv((await $.mcall((await $.wv([$t2], "ViewGroup", C, false)), "FieldByName", ["ID"])), "value"))]])));
      }
      await $.stmt((await $.mcall((await $.wv([$t2], "OPViewWares", C, false)), "CallProcedure", ["delete_wares", [(await $.mv((await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "FieldByName", ["ID"])), "AsInteger"))]])));
      await $.mcall((await $.wv([$t2], "ViewWares", C, false)), "Refresh", []);
    }
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
