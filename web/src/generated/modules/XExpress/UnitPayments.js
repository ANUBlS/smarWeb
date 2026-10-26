// Generated from UnitPayments.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitPayments", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "CMCurrencyEdit", "DBCtrls", "CMDBSearchEdit", "DB", "SearchEdit", "DBGridEh", "Mask", "DBCtrlsEh", "DBLookupEh", "ExpDataModuleUnit", "ExpCustomersTypeUnit", "ExpUnitImpl", "UnitPaymentsCredit"]);
  const C = [U];
  U.defClass("TFormPayments", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "filialname": {"name": "FilialName", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "editpayments": {"name": "EditPayments", "type": "TEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "editdescription": {"name": "EditDescription", "type": "TEdit"}, "allfilialname": {"name": "AllFilialName", "type": "TDBLookupComboBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "rfilialpanel": {"name": "RFilialPanel", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "rfilialname": {"name": "RFilialname", "type": "TDBLookupComboBox"}, "exid": {"name": "exid", "type": "integer"}, "optype": {"name": "optype", "type": "integer"}, "fform": {"name": "FForm", "type": "integer"}, "filedbatchs": {"name": "FiledBatchs", "type": "boolean"}, "filedincoming": {"name": "FiledIncoming", "type": "boolean"}, "fieldbatchsarchive": {"name": "FieldBatchsArchive", "type": "boolean"}, "filedincomingarchive": {"name": "FiledIncomingArchive", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FormPayments", null, "TFormPayments");
  });
  U.method("TFormPayments", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "val_cod": 0, "accid": null, "amount": 0, "paymentname": '', "fillialid": 0, "v_id": 0, "remit_inf": '', "stid": 0, "fnumber": 0, "rfilialid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Köçürmənin növünü seçin!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ExpCustomersType")), "typetext")), "Möhkəmləndirmə"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Köçürmənin valyutasını seçin!"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), 69))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Göndərən Filialı  seçin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Məbləği daxil edin!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "ExpCustomersType")), "typetext")), "Möhkəmləndirmə"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "EditDescription")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Ödənişin təyinatını daxil edin!"])));
      return L0.result;
    }
  } else {
    await $.mset((await $.v(C, "EditDescription")), "Text", "");
  }
  L0["fillialid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "FilialDataSet")), "FieldByName", ["id"])), "AsInteger"));
  if ($.truthy($.eq((await $.mv((await $.v(C, "ExpCustomersType")), "typetext")), "Möhkəmləndirmə"))) {
    if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "AvtoKredit")), async () => ($.eq(L0["fillialid"], 0)))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Bu əməliyyatı siz verə bilməsiniz!... Köçürmənin növünü düzgün seçin!"])));
      return L0.result;
    }
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), "AvtoKredit")), async () => ($.ne(L0["fillialid"], 0)))))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Bu əməliyyatı siz verə bilməsiniz!... Köçürmənin növünü düzgün seçin!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), 69))) {
    L0["rfilialid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "RFilialDataSet")), "FieldByName", ["id"])), "AsInteger"));
  } else {
    L0["rfilialid"] = 0;
  }
  L0["v_id"] = 0;
  L0["stid"] = (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue"));
  L0["val_cod"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"));
  L0["amount"] = (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value"));
  L0["paymentname"] = (await $.mv((await $.v(C, "EditPayments")), "Text"));
  L0["remit_inf"] = (await $.mv((await $.v(C, "EditDescription")), "Text"));
  if ($.truthy($.eq((await $.v(C, "FForm")), 0))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "EXPESSPAC")), "CallProcedure", ["Exp_GoldenPayKomiks_insert", ["batchid", L0["v_id"], "v_exid", (await $.v(C, "exid")), "v_optype", (await $.v(C, "optype")), "v_setid", L0["stid"], "v_paymentname", L0["paymentname"], "v_val_cod", L0["val_cod"], "v_amount", L0["amount"], "fillialid", L0["fillialid"], "Rfillialid", L0["rfilialid"], "v_remit_inf", L0["remit_inf"]]])));
    L0["v_id"] = (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "EXPESSPAC")), "GetParameter", [0]));
  } else {
    L0["v_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "FieldByName", ["id"])), "AsInteger"));
    L0["fillialid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "FilialDataSet")), "FieldByName", ["id"])), "AsInteger"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "EXPESSPAC")), "CallProcedure", ["Exp_GoldenPayKomiks_update", ["batchid", L0["v_id"], "v_setid", L0["stid"], "v_amount", L0["amount"], "v_remit_inf", L0["remit_inf"], "v_branchid", L0["fillialid"], "Rfilialid", L0["rfilialid"]]])));
  }
  await $.mcall((await $.v(C, "FormPayments")), "Close", []);
  await $.mcall((await $.v(C, "ExpCustomersType")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "Refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSet")), "Locate", ["ID", L0["v_id"], []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayments", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayments", "ComboBox1Click", async function ComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayments", "ComboBox1DropDown", async function ComboBox1DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "FormPaymentsCredit")), "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayments", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Exp_settingstype")), "FieldByName", ["description"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayments", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "ExpDataModule"));
    await $.mset((await $.wv([$t1], "EditDescription", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1], "Exp_settingstype", C, false)), "FieldByName", ["description"])), "AsString")));
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "DBLookupComboboxEh1", C, false)), "KeyValue")), 69))) {
      await $.mset((await $.wv([$t1], "RFilialPanel", C, false)), "Visible", (await $.wv([$t1], "True", C, false)));
      await $.mcall((await $.wv([$t1], "RFilialDataSet", C, false)), "Open", []);
    } else {
      await $.mset((await $.wv([$t1], "RFilialPanel", C, false)), "Visible", (await $.wv([$t1], "False", C, false)));
      await $.mcall((await $.wv([$t1], "RFilialDataSet", C, false)), "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayments", "EditDescriptionKeyDown", async function EditDescriptionKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t2 = (await $.v(C, "ExpFormDestination"));
      const $t3 = (await $.wv([$t2], "ExpDataModule", C, false));
      await $.stmt($.wcall([$t2, $t3], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t2, $t3], "ModalResult", C, false)), (await $.wv([$t2, $t3], "mrOk", C, false))))) {
        await $.mset((await $.wv([$t2, $t3], "EditDescription", C, false)), "Text", (await $.wv([$t2, $t3], "Value", C, false)));
      }
    }
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormPayments", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "ExpDataModule")), "ExpSetDataSet")), "Filter", "");
  await $.mset((await $.mv((await $.v(C, "ExpDataModule")), "ExpSetDataSet")), "Filtered", false);
  await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "FilialDataSet")), "Close", []);
  { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "FilialDataSet")), "SQL")), [1], ""); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "ExpDataModule")), "FilialDataSet")), "SQL", $t4); } }
  await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "FilialDataSet")), "Open", []);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "FilialDataSet")), "Filtered")))) {
    await $.mset((await $.mv((await $.v(C, "ExpDataModule")), "FilialDataSet")), "Filtered", false);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "Button1")), "Visible")))))) {
    await $.mset((await $.v(C, "Button1")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormPayments", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fieldkliid": '', "fieldbkliid": '', "fieldbfilialname": '', "fieldkreditaccid": null, "fieldamount": 0, "fieldremit_inf": '', "fnumber": 0, "v_optype": 0};
  await $.fixArgs(L0, ["sender"]);
  { const $t5 = (await $.v(C, "FForm"));
    if ($.eq($t5, 0)) {
      {
        const $t6 = (await $.v(C, "ExpDataModule"));
        await $.mset((await $.wv([$t6], "CMCurrencyEdit1", C, false)), "Value", 0.0);
        await $.wset([$t6], "FNumber", (await $.mcall((await $.wv([$t6], "Repair", C, false)), "CallIntegerFunction", ["Filid", []])), { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true });
        await $.mcall((await $.wv([$t6], "FilialDataSet", C, false)), "Close", []);
        { const $t7 = await $.iset((await $.mv((await $.wv([$t6], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t7 !== undefined) { await $.mset((await $.wv([$t6], "FilialDataSet", C, false)), "SQL", $t7); } }
        if ($.truthy(($.ne((await $.mv((await $.wv([$t6], "ExpCustomersType", C, false)), "typetext")), "Möhkəmləndirmə")))) {
          await $.mset((await $.wv([$t6], "AllFilialName", C, false)), "Visible", (await $.wv([$t6], "False", C, false)));
          await $.mset((await $.wv([$t6], "FilialName", C, false)), "Visible", (await $.wv([$t6], "True", C, false)));
          { const $t8 = await $.iset((await $.mv((await $.wv([$t6], "FilialDataSet", C, false)), "SQL")), [1], "where id=(select filialid from sba_objinf where sysuserid=uid)"); if ($t8 !== undefined) { await $.mset((await $.wv([$t6], "FilialDataSet", C, false)), "SQL", $t8); } }
          await $.mcall((await $.wv([$t6], "FilialDataSet", C, false)), "Open", []);
          await $.mset((await $.wv([$t6], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t6], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
        } else {
          if ($.truthy((await $.and_(($.eq((await $.wv([$t6], "FNumber", { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true }, false)), 0)), async () => ($.eq((await $.mv((await $.wv([$t6], "ExpCustomersType", C, false)), "typetext")), "Möhkəmləndirmə")))))) {
            await $.mset((await $.wv([$t6], "AllFilialName", C, false)), "Visible", (await $.wv([$t6], "False", C, false)));
            await $.mset((await $.wv([$t6], "FilialName", C, false)), "Visible", (await $.wv([$t6], "True", C, false)));
            { const $t9 = await $.iset((await $.mv((await $.wv([$t6], "FilialDataSet", C, false)), "SQL")), [1], "where id=0"); if ($t9 !== undefined) { await $.mset((await $.wv([$t6], "FilialDataSet", C, false)), "SQL", $t9); } }
            await $.mcall((await $.wv([$t6], "FilialDataSet", C, false)), "Open", []);
            await $.mset((await $.wv([$t6], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t6], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
          } else {
            if ($.truthy((await $.and_(($.eq((await $.wv([$t6], "FNumber", { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true }, false)), 1)), async () => ($.eq((await $.mv((await $.wv([$t6], "ExpCustomersType", C, false)), "typetext")), "Möhkəmləndirmə")))))) {
              await $.mset((await $.wv([$t6], "AllFilialName", C, false)), "Visible", (await $.wv([$t6], "False", C, false)));
              await $.mset((await $.wv([$t6], "AllFilialName", C, false)), "Visible", (await $.wv([$t6], "true", C, false)));
              { const $t10 = await $.iset((await $.mv((await $.wv([$t6], "FilialDataSet", C, false)), "SQL")), [1], "where id<>0"); if ($t10 !== undefined) { await $.mset((await $.wv([$t6], "FilialDataSet", C, false)), "SQL", $t10); } }
              await $.mcall((await $.wv([$t6], "FilialDataSet", C, false)), "Open", []);
              await $.mset((await $.wv([$t6], "AllFilialName", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t6], "FilialDataSet", C, false)), "FieldByName", ["id"])), "AsInteger")));
            }
          }
        }
        await $.mset((await $.wv([$t6], "EditPayments", C, false)), "Text", (await $.mv((await $.wv([$t6], "ExpCustomersType", C, false)), "typetext")));
        await $.mcall((await $.wv([$t6], "Exp_settingstype", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t6], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.wv([$t6], "optype", C, false))])));
        await $.mcall((await $.wv([$t6], "Exp_settingstype", C, false)), "Open", []);
        if ($.truthy($.eq((await $.mv((await $.wv([$t6], "Exp_settingstype", C, false)), "RecordCount")), 1))) {
          await $.mset((await $.wv([$t6], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t6], "Exp_settingstype", C, false)), "FieldByName", ["id"])), "AsInteger")));
          await $.mset((await $.wv([$t6], "EditDescription", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t6], "Exp_settingstype", C, false)), "FieldByName", ["description"])), "AsString")));
        } else {
          await $.mset((await $.wv([$t6], "DBLookupComboboxEh1", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t6], "EditDescription", C, false)), "Text", "");
        }
      }
    }
    else if ($.eq($t5, 1)) {
      {
        const $t11 = (await $.v(C, "ExpDataModule"));
        if ($.truthy((await $.wv([$t11], "FiledIncoming", C, false)))) {
          await $.mset((await $.wv([$t11], "ExpSetDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["optype"])), "AsString"))));
          await $.mset((await $.wv([$t11], "ExpSetDataSet", C, false)), "Filtered", (await $.wv([$t11], "true", C, false)));
          await $.wset([$t11], "v_optype", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["optype"])), "AsInteger")), { get: async () => L0["v_optype"], set: async (v) => { L0["v_optype"] = v; }, local: true });
          await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "Close", []);
          await $.stmt((await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["optype"])), "AsInteger"))])));
          await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "Open", []);
          await $.mset((await $.wv([$t11], "EditPayments", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "ExpSetDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
          await $.mset((await $.wv([$t11], "ExpCustomersType", C, false)), "typetext", (await $.mv((await $.wv([$t11], "EditPayments", C, false)), "Text")));
          if ($.truthy($.eq((await $.wv([$t11], "v_optype", { get: async () => L0["v_optype"], set: async (v) => { L0["v_optype"] = v; }, local: true }, false)), 7))) {
            await $.wset([$t11], "FNumber", (await $.mcall((await $.wv([$t11], "Repair", C, false)), "CallIntegerFunction", ["Filid", []])), { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true });
            if ($.truthy($.eq((await $.wv([$t11], "FNumber", { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true }, false)), 1))) {
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
              await $.stmt((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Locate", ["id", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["bfilial"])), "AsVariant")), [(await $.wv([$t11], "loCaseInsensitive", C, false))]])));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["bfilial"])), "AsInteger")));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            } else {
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["bfilial"])), "AsString"))));
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            }
          } else {
            await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["filial"])), "AsString"))));
            await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
            await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "False", C, false)));
            await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
            await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            await $.mset((await $.wv([$t11], "EditDescription", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["remit_inf"])), "AsString")));
          }
          await $.mset((await $.wv([$t11], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["setid"])), "AsInteger")));
          await $.mset((await $.wv([$t11], "CMCurrencyEdit1", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingDataSet", C, false)), "FieldByName", ["amount"])), "AsFloat")));
        }
        if ($.truthy((await $.wv([$t11], "FiledBatchs", C, false)))) {
          await $.mset((await $.wv([$t11], "ExpSetDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["optype"])), "AsString"))));
          await $.mset((await $.wv([$t11], "ExpSetDataSet", C, false)), "Filtered", (await $.wv([$t11], "true", C, false)));
          await $.wset([$t11], "v_optype", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["optype"])), "AsInteger")), { get: async () => L0["v_optype"], set: async (v) => { L0["v_optype"] = v; }, local: true });
          await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "Close", []);
          await $.stmt((await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["optype"])), "AsInteger"))])));
          await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "Open", []);
          await $.mset((await $.wv([$t11], "EditPayments", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "ExpSetDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
          await $.mset((await $.wv([$t11], "ExpCustomersType", C, false)), "typetext", (await $.mv((await $.wv([$t11], "EditPayments", C, false)), "Text")));
          if ($.truthy($.eq((await $.wv([$t11], "v_optype", { get: async () => L0["v_optype"], set: async (v) => { L0["v_optype"] = v; }, local: true }, false)), 7))) {
            await $.wset([$t11], "FNumber", (await $.mcall((await $.wv([$t11], "Repair", C, false)), "CallIntegerFunction", ["Filid", []])), { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true });
            if ($.truthy($.eq((await $.wv([$t11], "FNumber", { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true }, false)), 1))) {
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
              await $.stmt((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Locate", ["id", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["bfilial"])), "AsVariant")), [(await $.wv([$t11], "loCaseInsensitive", C, false))]])));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["bfilial"])), "AsInteger")));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            } else {
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["bfilial"])), "AsString"))));
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            }
          } else {
            await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["filial"])), "AsString"))));
            await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
            await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "False", C, false)));
            await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
            await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            await $.mset((await $.wv([$t11], "EditDescription", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["remit_inf"])), "AsString")));
          }
          await $.mset((await $.wv([$t11], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["setid"])), "AsInteger")));
          await $.mset((await $.wv([$t11], "CMCurrencyEdit1", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsDataSet", C, false)), "FieldByName", ["amount"])), "AsFloat")));
        }
        if ($.truthy((await $.wv([$t11], "FiledIncomingArchive", C, false)))) {
          await $.mset((await $.wv([$t11], "ExpSetDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["optype"])), "AsString"))));
          await $.mset((await $.wv([$t11], "ExpSetDataSet", C, false)), "Filtered", (await $.wv([$t11], "true", C, false)));
          await $.wset([$t11], "v_optype", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["optype"])), "AsInteger")), { get: async () => L0["v_optype"], set: async (v) => { L0["v_optype"] = v; }, local: true });
          await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "Close", []);
          await $.stmt((await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["optype"])), "AsInteger"))])));
          await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "Open", []);
          await $.mset((await $.wv([$t11], "EditPayments", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "ExpSetDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
          await $.mset((await $.wv([$t11], "ExpCustomersType", C, false)), "typetext", (await $.mv((await $.wv([$t11], "EditPayments", C, false)), "Text")));
          if ($.truthy($.eq((await $.wv([$t11], "v_optype", { get: async () => L0["v_optype"], set: async (v) => { L0["v_optype"] = v; }, local: true }, false)), 7))) {
            await $.wset([$t11], "FNumber", (await $.mcall((await $.wv([$t11], "Repair", C, false)), "CallIntegerFunction", ["Filid", []])), { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true });
            if ($.truthy($.eq((await $.wv([$t11], "FNumber", { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true }, false)), 1))) {
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
              await $.stmt((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Locate", ["id", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["bfilial"])), "AsVariant")), [(await $.wv([$t11], "loCaseInsensitive", C, false))]])));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["bfilial"])), "AsInteger")));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            } else {
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["bfilial"])), "AsString"))));
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            }
          } else {
            await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["filial"])), "AsString"))));
            await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
            await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "False", C, false)));
            await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
            await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            await $.mset((await $.wv([$t11], "EditDescription", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["remit_inf"])), "AsString")));
          }
          await $.mset((await $.wv([$t11], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["setid"])), "AsInteger")));
          await $.mset((await $.wv([$t11], "CMCurrencyEdit1", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t11], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["amount"])), "AsFloat")));
        }
        if ($.truthy((await $.wv([$t11], "FieldBatchsArchive", C, false)))) {
          await $.mset((await $.wv([$t11], "ExpSetDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["optype"])), "AsString"))));
          await $.mset((await $.wv([$t11], "ExpSetDataSet", C, false)), "Filtered", (await $.wv([$t11], "true", C, false)));
          await $.wset([$t11], "v_optype", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["optype"])), "AsInteger")), { get: async () => L0["v_optype"], set: async (v) => { L0["v_optype"] = v; }, local: true });
          await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "Close", []);
          await $.stmt((await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["optype"])), "AsInteger"))])));
          await $.mcall((await $.wv([$t11], "Exp_settingstype", C, false)), "Open", []);
          await $.mset((await $.wv([$t11], "EditPayments", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "ExpSetDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
          await $.mset((await $.wv([$t11], "ExpCustomersType", C, false)), "typetext", (await $.mv((await $.wv([$t11], "EditPayments", C, false)), "Text")));
          if ($.truthy($.eq((await $.wv([$t11], "v_optype", { get: async () => L0["v_optype"], set: async (v) => { L0["v_optype"] = v; }, local: true }, false)), 7))) {
            await $.wset([$t11], "FNumber", (await $.mcall((await $.wv([$t11], "Repair", C, false)), "CallIntegerFunction", ["Filid", []])), { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true });
            if ($.truthy($.eq((await $.wv([$t11], "FNumber", { get: async () => L0["fnumber"], set: async (v) => { L0["fnumber"] = v; }, local: true }, false)), 1))) {
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
              await $.stmt((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Locate", ["id", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["bfilial"])), "AsVariant")), [(await $.wv([$t11], "loCaseInsensitive", C, false))]])));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["bfilial"])), "AsInteger")));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            } else {
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["bfilial"])), "AsString"))));
              await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
              await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "True", C, false)));
              await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
              await $.mset((await $.wv([$t11], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
              await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            }
          } else {
            await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Close", []);
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "false", C, false)));
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", "");
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["filial"])), "AsString"))));
            await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "Open", []);
            await $.mset((await $.wv([$t11], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "AllFilialName", C, false)), "Visible", (await $.wv([$t11], "False", C, false)));
            await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "Enabled", (await $.wv([$t11], "False", C, false)));
            await $.mset((await $.wv([$t11], "Panel7", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "Label7", C, false)), "Visible", (await $.wv([$t11], "True", C, false)));
            await $.mset((await $.wv([$t11], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
            await $.mset((await $.wv([$t11], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["val_cod"])), "AsInteger")));
            await $.mset((await $.wv([$t11], "EditDescription", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["remit_inf"])), "AsString")));
          }
          await $.mset((await $.wv([$t11], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["setid"])), "AsInteger")));
          await $.mset((await $.wv([$t11], "CMCurrencyEdit1", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t11], "ExpBatchsArchiveDataSet", C, false)), "FieldByName", ["amount"])), "AsFloat")));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
