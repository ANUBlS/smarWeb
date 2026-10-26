// Generated from NewDepositsFrmAddMoneyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmAddMoneyImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CMCurrencyEdit", "ComCtrls", "ActnList", "DBGridEh", "XFSCtrls", "DBCtrls", "Grids", "DBGrids", "CurrencyEdit", "NewCommonDeclsImpl", "NewDepositsDMApplyMoneyImpl", "NewTemporaryTransactionsFormImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmAddMoney", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "buttoncommit": {"name": "ButtonCommit", "type": "TXFButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TXFButton"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xfstatictext1": {"name": "XFStaticText1", "type": "TXFStaticText"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xfstatictext2": {"name": "XFStaticText2", "type": "TXFStaticText"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xfstatictext3": {"name": "XFStaticText3", "type": "TXFStaticText"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xfstatictext5": {"name": "XFStaticText5", "type": "TXFStaticText"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xfstatictext4": {"name": "XFStaticText4", "type": "TXFStaticText"}, "xfpanel15": {"name": "XFPanel15", "type": "TXFPanel"}, "xfstatictext6": {"name": "XFStaticText6", "type": "TXFStaticText"}, "xfpanel16": {"name": "XFPanel16", "type": "TXFPanel"}, "xfstatictext7": {"name": "XFStaticText7", "type": "TXFStaticText"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "dbeditno": {"name": "DBEditNo", "type": "TDBEdit"}, "xfpanel18": {"name": "XFPanel18", "type": "TXFPanel"}, "dbeditcustname": {"name": "DBEditCustName", "type": "TDBEdit"}, "xfpanel19": {"name": "XFPanel19", "type": "TXFPanel"}, "dbeditaccno": {"name": "DBEditAccNo", "type": "TDBEdit"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "dbeditamount": {"name": "DBEditAmount", "type": "TDBEdit"}, "xfpanel21": {"name": "XFPanel21", "type": "TXFPanel"}, "dbeditpercent": {"name": "DBEditPercent", "type": "TDBEdit"}, "xfpanel22": {"name": "XFPanel22", "type": "TXFPanel"}, "dbeditdate": {"name": "DBEditDate", "type": "TDBEdit"}, "xfpanel23": {"name": "XFPanel23", "type": "TXFPanel"}, "cmcurrencyeditmoneysum": {"name": "CMCurrencyEditMoneySum", "type": "TCMCurrencyEdit"}, "xfpanel24": {"name": "XFPanel24", "type": "TXFPanel"}, "xfstatictext8": {"name": "XFStaticText8", "type": "TXFStaticText"}, "xfpanel25": {"name": "XFPanel25", "type": "TXFPanel"}, "cboxdescript": {"name": "CBoxDescript", "type": "TComboBox"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actntransaction": {"name": "ActnTransaction", "type": "TAction"}, "xfpanel26": {"name": "XFPanel26", "type": "TXFPanel"}, "xfpanel27": {"name": "XFPanel27", "type": "TXFPanel"}, "xfstatictext9": {"name": "XFStaticText9", "type": "TXFStaticText"}, "xfpanel28": {"name": "XFPanel28", "type": "TXFPanel"}, "xfpanel29": {"name": "XFPanel29", "type": "TXFPanel"}, "xfpanel30": {"name": "XFPanel30", "type": "TXFPanel"}, "xfstatictext10": {"name": "XFStaticText10", "type": "TXFStaticText"}, "xfpanel31": {"name": "XFPanel31", "type": "TXFPanel"}, "cmcurrencyeditostat": {"name": "CMCurrencyEditOstat", "type": "TCMCurrencyEdit"}, "dblookupclientaccno": {"name": "DBLookupClientAccNo", "type": "TDBLookupComboboxEh"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmAddMoney", null, "TNewDepositsFrmAddMoney");
    U.var_("counttransh", 0, "integer");
  });
  U.method("TNewDepositsFrmAddMoney", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmAddMoney", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddMoney", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmAddMoney", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "NewDepositsDMApplyMoney"));
    const $t2 = (await $.wv([$t1], "DepositInfo", C, false));
    const $t3 = (await $.wv([$t1, $t2], "dm_tranches", C, false));
    if ($.truthy((await $.wv([$t1, $t2, $t3], "Active", C, false)))) {
      await $.stmt($.wcall([$t1, $t2, $t3], "Refresh", [], C));
    }
  }
  await $.mset((await $.v(C, "CMCurrencyEditMoneySum")), "Text", "0.00");
  await $.mset((await $.v(C, "CBoxDescript")), "ItemIndex", 0);
  await $.mset((await $.v(C, "DBLookupClientAccNo")), "KeyValue", (-(1)));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddMoney", "AccnameListCBChange", async function AccnameListCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddMoney", "AccountListCBChange", async function AccountListCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddMoney", "ActnTransactionExecute", async function ActnTransactionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "pclientaccid": 0, "ptotal": 0, "ppercent": 0, "pcaccid": 0, "commitdepositmoney": false, "p_check1": 0, "p_check2": 0, "p_check3": 0, "pdescript": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Depozit yatrımı ...";
  {
    const $t4 = (await $.v(C, "NewDepositsDMApplyMoney"));
    await $.wset([$t4], "PClientAccID", (await $.mv((await $.wv([$t4], "DebitAccsID", C, false)), "AsInteger")), { get: async () => L0["pclientaccid"], set: async (v) => { L0["pclientaccid"] = v; }, local: true });
  }
  L0["ptotal"] = (await $.mv((await $.v(C, "CMCurrencyEditMoneySum")), "Value"));
  L0["ppercent"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DBEditPercent")), "Text"))]));
  L0["pdescript"] = (await $.mv((await $.v(C, "CBoxDescript")), "Text"));
  L0["pcaccid"] = (await $.mv((await $.v(C, "DBLookupClientAccNo")), "Value"));
  if ($.truthy($.eq(L0["ppercent"], 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Yatrımın % dərəcəsi 0 ola bilməz."])));
    return L0.result;
  }
  {
    const $t5 = (await $.v(C, "NewDepositsDMApplyMoney"));
    const $t6 = (await $.wv([$t5], "dm_tranches", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", ["depositmoney", ["ClientAccID", (await $.wv([$t5, $t6], "PClientAccID", { get: async () => L0["pclientaccid"], set: async (v) => { L0["pclientaccid"] = v; }, local: true }, false)), "PAccID", (await $.wv([$t5, $t6], "PCAccID", { get: async () => L0["pcaccid"], set: async (v) => { L0["pcaccid"] = v; }, local: true }, false)), "Contractid", (await $.wv([$t5, $t6], "Get_SelectedContID", C, false)), "Hdate", (await $.wv([$t5, $t6], "Get_BankDate", C, false)), "Total", (await $.wv([$t5, $t6], "PTotal", { get: async () => L0["ptotal"], set: async (v) => { L0["ptotal"] = v; }, local: true }, false)), "Percent", (await $.wv([$t5, $t6], "PPercent", { get: async () => L0["ppercent"], set: async (v) => { L0["ppercent"] = v; }, local: true }, false)), "Descript", (await $.wv([$t5, $t6], "PDescript", { get: async () => L0["pdescript"], set: async (v) => { L0["pdescript"] = v; }, local: true }, false)), "Usetransaction", (await $.wv([$t5, $t6], "true", C, false))]], C)));
  }
  try {
    L0["commitdepositmoney"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepositsDMApplyMoney")), "dm_tranches")), "CallProcedure", ["CommitDepositMoney", ["DoCommit", L0["commitdepositmoney"]]])));
    if ($.truthy(L0["commitdepositmoney"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t7) {
    $.rethrowControl($t7);
    $.handled($t7);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "NewDepositsDMApplyMoney")), "dm_tranches")), "CallProcedure", ["CommitDepositMoney", ["DoCommit", false]])));
    throw $t7;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddMoney", "ActnTransactionUpdate", async function ActnTransactionUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (L0["sender"]);
    await $.wset([$t8], "Enabled", $.gt((await $.mv((await $.wv([$t8], "CMCurrencyEditMoneySum", C, false)), "Value")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddMoney", "DBLookupClientAccNoChange", async function DBLookupClientAccNoChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupClientAccNo")), "KeyValue")), (-(1))))) {
    await $.mset((await $.v(C, "CMCurrencyEditOstat")), "Text", "0.00");
  } else {
    {
      const $t9 = (await $.v(C, "NewDepositsDMApplyMoney"));
      const $t10 = (await $.wv([$t9], "AccNoOstat", C, false));
      await $.stmt($.wcall([$t9, $t10], "close", [], C));
      if ($.truthy($.not((await $.wv([$t9, $t10], "Active", C, false))))) {
        await $.stmt((await $.wcall([$t9, $t10], "SetVariable", ["accid", (await $.mv((await $.wv([$t9, $t10], "DBLookupClientAccNo", C, false)), "KeyValue"))], C)));
      }
      await $.stmt($.wcall([$t9, $t10], "Open", [], C));
      await $.mset((await $.wv([$t9, $t10], "CMCurrencyEditOstat", C, false)), "Text", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["ostat"], C)), "AsString")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
