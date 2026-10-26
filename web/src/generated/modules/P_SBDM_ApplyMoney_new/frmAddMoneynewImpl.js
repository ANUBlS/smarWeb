// Generated from frmAddMoneynewImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmAddMoneynewImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CMCurrencyEdit", "ComCtrls", "ActnList", "NewCommonDeclsImpl", "DMApplyMoneynewImpl", "TemporaryTransactionsFormImpl_new", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TfrmAddMoneynew", "TForm", {"actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actntransaction": {"name": "ActnTransaction", "type": "TAction"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttoncommit": {"name": "ButtonCommit", "type": "TButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "accountlistcb": {"name": "AccountListCB", "type": "TDBLookupComboboxEh"}, "accnamelistcb": {"name": "AccnameListCB", "type": "TDBLookupComboboxEh"}, "operationdatepckr": {"name": "OperationDatePckr", "type": "TDateTimePicker"}, "moneysumedit": {"name": "MoneySumEdit", "type": "TCMCurrencyEdit"}, "percentedit": {"name": "PercentEdit", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("frmAddMoneynew", null, "TfrmAddMoneynew");
    U.var_("counttransh", 0, "integer");
  });
  U.method("TfrmAddMoneynew", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmAddMoneynew", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoneynew", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAddMoneynew", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DMApplyMoney_new"));
    const $t2 = (await $.wv([$t1], "DepositInfo", C, false));
    const $t3 = (await $.wv([$t1, $t2], "sbcm_tranches", C, false));
    await $.stmt($.wcall([$t1, $t2, $t3], "Refresh", [], C));
    await $.mset((await $.wv([$t1, $t2, $t3], "PercentEdit", C, false)), "Text", (await $.wcall([$t1, $t2, $t3], "FloatToStr", [(await $.wcall([$t1, $t2, $t3], "CallFloatFunction", ["getpersentTransh", ["ContractID", (await $.wv([$t1, $t2, $t3], "Get_SelectedContID", C, false))]], C))], C)));
    await $.wset([$t1, $t2, $t3], "counttransh", (await $.wcall([$t1, $t2, $t3], "CallIntegerFunction", ["counttranch", ["p_contractid", (await $.wv([$t1, $t2, $t3], "Get_SelectedContID", C, false))]], C)), C);
  }
  await $.mset((await $.v(C, "OperationDatePckr")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "MoneySumEdit")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoneynew", "AccnameListCBChange", async function AccnameListCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "AccountListCB")), "KeyValue", (await $.mv((await $.v(C, "AccnameListCB")), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoneynew", "AccountListCBChange", async function AccountListCBChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "AccnameListCB")), "KeyValue", (await $.mv((await $.v(C, "AccountListCB")), "KeyValue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoneynew", "ActnTransactionExecute", async function ActnTransactionExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "clientaccid": 0, "total": 0, "percent": 0, "commitdepositmoney": false, "p_check1": 0, "p_check2": 0, "p_check3": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rstransactionswillprocessed"] = "Depozit yatrımı ...";
  L0["clientaccid"] = (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "AccountListCB")), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"));
  L0["total"] = (await $.mv((await $.v(C, "MoneySumEdit")), "Value"));
  L0["percent"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "PercentEdit")), "Text"))]));
  if ($.truthy($.eq(L0["percent"], 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Yatrımın % dərəcəsi 0 ola bilməz."])));
    return L0.result;
  }
  {
    const $t4 = (await $.v(C, "DMApplyMoney_new"));
    const $t5 = (await $.wv([$t4], "sbcm_tranches", C, false));
    await $.wset([$t4, $t5], "p_check1", (await $.wcall([$t4, $t5], "CallIntegerFunction", ["checkedtranch", ["p_contractid", (await $.wv([$t4, $t5], "Get_SelectedContID", C, false)), "p_amuont", (await $.wv([$t4, $t5], "Total", { get: async () => L0["total"], set: async (v) => { L0["total"] = v; }, local: true }, false))]], C)), { get: async () => L0["p_check1"], set: async (v) => { L0["p_check1"] = v; }, local: true });
    await $.wset([$t4, $t5], "p_check2", (await $.wcall([$t4, $t5], "CallIntegerFunction", ["checkedaddtranch", ["p_contractid", (await $.wv([$t4, $t5], "Get_SelectedContID", C, false)), "p_amuont", (await $.wv([$t4, $t5], "Total", { get: async () => L0["total"], set: async (v) => { L0["total"] = v; }, local: true }, false))]], C)), { get: async () => L0["p_check2"], set: async (v) => { L0["p_check2"] = v; }, local: true });
    await $.wset([$t4, $t5], "p_check3", (await $.wcall([$t4, $t5], "CallIntegerFunction", ["checkedtranch_max_limit", ["p_contractid", (await $.wv([$t4, $t5], "Get_SelectedContID", C, false)), "p_amuont", (await $.wv([$t4, $t5], "Total", { get: async () => L0["total"], set: async (v) => { L0["total"] = v; }, local: true }, false))]], C)), { get: async () => L0["p_check3"], set: async (v) => { L0["p_check3"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t4, $t5], "counttransh", C, false)), 0))) {
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check1", { get: async () => L0["p_check1"], set: async (v) => { L0["p_check1"] = v; }, local: true }, false)), 0))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Bu depozit tipi üçün ilk yatrım üçün daxil edilən yatrım məbləğinə uyğun sazlama aralığı mövcud deyil."], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check1", { get: async () => L0["p_check1"], set: async (v) => { L0["p_check1"] = v; }, local: true }, false)), 2))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Bu depozit tipi üçün ilk yatrım üçün daxil edilən yatrım məbləğinə uyğun cox sayda sazlama aralığı mövcuddur."], C)));
        return L0.result;
      }
    }
    if ($.truthy($.gt((await $.wv([$t4, $t5], "counttransh", C, false)), 0))) {
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check2", { get: async () => L0["p_check2"], set: async (v) => { L0["p_check2"] = v; }, local: true }, false)), 0))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Bu depozit tipi üçün növbəti yatrımlar üçün sazlama  mövcuddur deyil."], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check2", { get: async () => L0["p_check2"], set: async (v) => { L0["p_check2"] = v; }, local: true }, false)), 1))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Bu depozitdə seçilmiş depozit tipinə və digər sazlamalara,bu tarixe ve daxil olunan yeni yatrim məbəlğinə uygun sazlama movcud deyil."], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check2", { get: async () => L0["p_check2"], set: async (v) => { L0["p_check2"] = v; }, local: true }, false)), 2))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Bu müqavilə üçün seçilmiş depozit tipinə və digər sazlamalara bu məbləğ yatrım məbləği aralığına uyğun olmadığından bu məbləğdğ Yatrım edə bilmərsiz."], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check2", { get: async () => L0["p_check2"], set: async (v) => { L0["p_check2"] = v; }, local: true }, false)), 4))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Seçilmiş depozit tipinə və digər sazlamalara ,bu tarixə və bu məbləğə uyğun yatrım edə bilmərsiz. Daxil olunan məbləğ sazamada göstərilən ilkin məbləğin % hissələri aralığında deyildir"], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check2", { get: async () => L0["p_check2"], set: async (v) => { L0["p_check2"] = v; }, local: true }, false)), 6))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Bu müqavilə üçün seçilmiş depozit tipinə və digər parametrlərə görə bu tarixə uyğun sazlamda məbəğ(min),məbəğ(max),məbəğ%(min),məbəğ%(max)=0 olduğundan yatrım etmək olmaz!"], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check2", { get: async () => L0["p_check2"], set: async (v) => { L0["p_check2"] = v; }, local: true }, false)), 7))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Bu müqavilə üçün seçilmiş depozit tipinə və digər parametrlərə görə bu tarixə uyğun cox sayda sazlama olduğundan yatrım etmək olmaz!"], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check3", { get: async () => L0["p_check3"], set: async (v) => { L0["p_check3"] = v; }, local: true }, false)), 0))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Bu tip depozit üçün meblegin sazlanmasi movcud deyil!"], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check3", { get: async () => L0["p_check3"], set: async (v) => { L0["p_check3"] = v; }, local: true }, false)), 1))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Bu tip depozit üçün meblegin çox sayda sazlanma movcuddur!"], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check3", { get: async () => L0["p_check3"], set: async (v) => { L0["p_check3"] = v; }, local: true }, false)), 2))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Faizlərin sazlanmasında meblegler bölümündə Meb.artımı(max)və Meb.artımı(max)% bölümlərindən yalnız biri daxil edilməlidir!"], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check3", { get: async () => L0["p_check3"], set: async (v) => { L0["p_check3"] = v; }, local: true }, false)), 3))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Yeni daxil edilən yatrım və əvvəlki yatrımların cəmi sazlamdakı Meb.artımı(max)-dən böyükdür!"], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.wv([$t4, $t5], "p_check3", { get: async () => L0["p_check3"], set: async (v) => { L0["p_check3"] = v; }, local: true }, false)), 4))) {
        await $.stmt((await $.wcall([$t4, $t5], "showmessage", ["Yeni daxil edilən yatrım və əvvəlki yatrımların cəmi sazlamdakı Meb.artımı(max)%-dən böyükdür!"], C)));
        return L0.result;
      }
    }
  }
  {
    const $t6 = (await $.v(C, "DMApplyMoney_new"));
    const $t7 = (await $.wv([$t6], "sbcm_tranches", C, false));
    await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", ["depositmoney", ["P_ClientAccID", (await $.wv([$t6, $t7], "ClientAccID", { get: async () => L0["clientaccid"], set: async (v) => { L0["clientaccid"] = v; }, local: true }, false)), "contractid", (await $.wv([$t6, $t7], "Get_SelectedContID", C, false)), "hdate", (await $.wv([$t6, $t7], "Get_BankDate", C, false)), "total", (await $.wv([$t6, $t7], "Total", { get: async () => L0["total"], set: async (v) => { L0["total"] = v; }, local: true }, false)), "PERCENT", (await $.wv([$t6, $t7], "Percent", { get: async () => L0["percent"], set: async (v) => { L0["percent"] = v; }, local: true }, false)), "Trname", "null", "usetransaction", (await $.wv([$t6, $t7], "true", C, false))]], C)));
  }
  try {
    L0["commitdepositmoney"] = (await $.call(C, "TrDelayed_Show", [Self, L0["rstransactionswillprocessed"]]));
    await $.stmt($.call(C, "Update", []));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMApplyMoney_new")), "sbcm_tranches")), "CallProcedure", ["CommitDepositMoney", ["DoCommit", L0["commitdepositmoney"]]])));
    if ($.truthy(L0["commitdepositmoney"])) {
      await $.mset(Self, "ModalResult", (await $.v(C, "mrOk")));
    }
    await $.mcall(Self, "Update", []);
  } catch ($t8) {
    $.rethrowControl($t8);
    $.handled($t8);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMApplyMoney_new")), "sbcm_tranches")), "CallProcedure", ["CommitDepositMoney", ["DoCommit", false]])));
    throw $t8;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoneynew", "ActnTransactionUpdate", async function ActnTransactionUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (L0["sender"]);
    await $.wset([$t9], "Enabled", $.gt((await $.mv((await $.wv([$t9], "MoneySumEdit", C, false)), "Value")), 0), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAddMoneynew", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActnTransactionExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
