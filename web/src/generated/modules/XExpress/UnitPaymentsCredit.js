// Generated from UnitPaymentsCredit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitPaymentsCredit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CMCurrencyEdit", "SearchEdit", "ExtCtrls", "DBCtrls", "FieldSearchEdit", "Buttons", "DB", "OracleData", "Designer", "Mask", "ExpDataModuleUnit", "ExpCustomersTypeUnit", "ExpressDecls", "UnitNominalCustomers", "ExpUnitImpl", "UnitForeignCurrency"]);
  const C = [U];
  U.defClass("TFormPaymentsCredit", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "account": {"name": "Account", "type": "TOracleDataSet"}, "accountds": {"name": "AccountDS", "type": "TDataSource"}, "label3": {"name": "Label3", "type": "TLabel"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "searchpasspin": {"name": "Searchpasspin", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label76": {"name": "Label76", "type": "TLabel"}, "searchpaspnum": {"name": "Searchpaspnum", "type": "TEdit"}, "p4": {"name": "P4", "type": "TPanel"}, "label102": {"name": "Label102", "type": "TLabel"}, "searchid": {"name": "Searchid", "type": "TEdit"}, "p5": {"name": "P5", "type": "TPanel"}, "label103": {"name": "Label103", "type": "TLabel"}, "searchinn": {"name": "Searchinn", "type": "TEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "filialname": {"name": "FilialName", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "editname": {"name": "EditName", "type": "TEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "cmcurrencyedit2": {"name": "CMCurrencyEdit2", "type": "TCMCurrencyEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "cmcurrencyedit3": {"name": "CMCurrencyEdit3", "type": "TCMCurrencyEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "editdescription": {"name": "EditDescription", "type": "TEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "searchname": {"name": "Searchname", "type": "TEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "button3": {"name": "Button3", "type": "TButton"}, "odsaccno": {"name": "ODSAccNo", "type": "TOracleDataSet"}, "dsaccno": {"name": "DSAccNo", "type": "TDataSource"}, "dscountry": {"name": "DSCountry", "type": "TDataSource"}, "odscountry": {"name": "ODSCountry", "type": "TOracleDataSet"}, "fform": {"name": "FForm", "type": "integer"}, "filedbatchs": {"name": "FiledBatchs", "type": "boolean"}, "filedincoming": {"name": "FiledIncoming", "type": "boolean"}, "fieldbatchsarchive": {"name": "FieldBatchsArchive", "type": "boolean"}, "filedincomingarchive": {"name": "FiledIncomingArchive", "type": "Boolean"}, "sum": {"name": "Sum", "type": "real"}, "optype": {"name": "optype", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("FormPaymentsCredit", null, "TFormPaymentsCredit");
    U.var_("KeyD", 0, "integer");
    U.var_("Hcusttype", 0, "integer");
  });
  U.method("TFormPaymentsCredit", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "val_cod": 0, "accid": null, "amount": 0, "paymentname": '', "filname": 0, "v_id": 0, "setid": 0, "creditid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditName")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Adı sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesab sahəsi seçilməyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit1")), "text")), "0.00"))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Məbləğ sahəsi doldurulmayıb!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditDescription")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Təyinat  sahəsi doldurulmayıb!"])));
    return L0.result;
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "Button3")), "Visible")))))) {
    if ($.truthy($.not(((await $.mv((await $.v(C, "FormNominalCustomers")), "RH")))))) {
      if ($.truthy($.eq((await $.v(C, "Hcusttype")), 0))) {
        await $.stmt((await $.call(C, "ShowMessage", ["III-cü şəxs doldurulmayıb!"])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Köçürmənin növü sahəsi seçilməyib!"])));
    return L0.result;
  }
  if ($.truthy((await $.mv((await $.v(C, "Button3")), "Visible")))) {
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormForeignCurrency")), "DBLCBCountry")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Xarici valyuta düyməsinin altında ölkəni seçin"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormForeignCurrency")), "DBLCBAccount")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabı seçin"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormForeignCurrency")), "CmCurForeginEdit")), "text")), "0.00"))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Məbləği yazın"])));
      return L0.result;
    }
  }
  L0["v_id"] = 0;
  L0["setid"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"));
  L0["val_cod"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "KredetDataSet")), "FieldByName", ["val_acc"])), "AsInteger"));
  L0["amount"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CMCurrencyEdit1")), "Text"))]));
  L0["filname"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "KredetDataSet")), "FieldByName", ["filial"])), "AsInteger"));
  L0["accid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "KredetDataSet")), "FieldByName", ["id"])), "AsInteger"));
  await $.mset((await $.v(C, "ExpressVariables")), "remit_inf", (await $.mv((await $.v(C, "EditDescription")), "Text")));
  {
    const $t1 = (await $.v(C, "ExpressVariables"));
    if ($.truthy($.eq((await $.wv([$t1], "FForm", C, false)), 0))) {
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "EXPESSPAC")), "CallProcedure", ["exp_payments_insert", ["batchid", (await $.wv([$t1], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), "v_exid", (await $.wv([$t1], "exid", C, false)), "v_optype", (await $.wv([$t1], "optype", C, false)), "v_setid", (await $.wv([$t1], "setid", { get: async () => L0["setid"], set: async (v) => { L0["setid"] = v; }, local: true }, false)), "v_accid", (await $.wv([$t1], "accid", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "v_val_cod", (await $.wv([$t1], "val_cod", { get: async () => L0["val_cod"], set: async (v) => { L0["val_cod"] = v; }, local: true }, false)), "v_amount", (await $.wv([$t1], "amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "v_filname", (await $.wv([$t1], "filname", { get: async () => L0["filname"], set: async (v) => { L0["filname"] = v; }, local: true }, false)), "v_remit_inf", (await $.wv([$t1], "remit_inf", C, false)), "v_doc_type", (await $.wv([$t1], "doc_type", C, false)), "v_passpin", (await $.wv([$t1], "passpin", C, false)), "v_passer", (await $.wv([$t1], "passer", C, false)), "v_paspnum", (await $.wv([$t1], "paspnum", C, false)), "v_doc_country", (await $.wv([$t1], "doc_country", C, false)), "v_paspplace", (await $.wv([$t1], "paspplace", C, false)), "v_paspdate", (await $.wv([$t1], "paspdate", C, false)), "v_passexpire", (await $.wv([$t1], "passexpire", C, false)), "v_citizenship", (await $.wv([$t1], "citizenship", C, false)), "v_lastname", (await $.wv([$t1], "lastname", C, false)), "v_soname", (await $.wv([$t1], "soname", C, false)), "v_name", (await $.wv([$t1], "name", C, false)), "v_sex", (await $.wv([$t1], "sex", C, false)), "v_fam_status", (await $.wv([$t1], "fam_status", C, false)), "v_bbirthplace", (await $.wv([$t1], "bbirthplace", C, false)), "v_birth_state", (await $.wv([$t1], "birth_state", C, false)), "v_birthday", (await $.wv([$t1], "birthday", C, false)), "v_aadrs_state", (await $.wv([$t1], "aadrs_state", C, false)), "v_city", (await $.wv([$t1], "city", C, false)), "v_reg_zip", (await $.wv([$t1], "reg_zip", C, false)), "v_address", (await $.wv([$t1], "address", C, false)), "v_phone_m", (await $.wv([$t1], "phone_m", C, false)), "v_phone_h", (await $.wv([$t1], "phone_h", C, false)), "v_e_mail", (await $.wv([$t1], "e_mail", C, false)), "v_nerezident", (await $.wv([$t1], "v_nerezident", C, false)), "v_work_place", (await $.wv([$t1], "work_place", C, false)), "v_work_adrs_spec", (await $.wv([$t1], "work_adrs_spec", C, false)), "v_work_cntr", (await $.wv([$t1], "work_cntr", C, false)), "v_work_city", (await $.wv([$t1], "work_city", C, false)), "v_work_state", (await $.wv([$t1], "work_state", C, false)), "v_work_zip", (await $.wv([$t1], "work_zip", C, false)), "v_work_adress", (await $.wv([$t1], "work_adress", C, false)), "v_work_phone_spec", (await $.wv([$t1], "work_phone_spec", C, false)), "v_work_phconttype", (await $.wv([$t1], "work_phconttype", C, false)), "v_work_phoppref", (await $.wv([$t1], "work_phoppref", C, false)), "v_work_phone", (await $.wv([$t1], "work_phone", C, false)), "v_work_phext", (await $.wv([$t1], "work_phext", C, false)), "v_work_phcode", (await $.wv([$t1], "work_phcode", C, false)), "v_contractno", (await $.wv([$t1], "contractno", C, false)), "v_kaccid", (await $.wv([$t1], "Fc_accid", C, false)), "v_kamount", (await $.wv([$t1], "Fc_amount", C, false))]])));
      await $.wset([$t1], "v_id", (await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "EXPESSPAC")), "GetParameter", [0])), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
      await $.mcall((await $.wv([$t1], "FormPaymentsCredit", C, false)), "Close", []);
      await $.mcall((await $.wv([$t1], "ExpCustomersType", C, false)), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "Expdescription")), "Refresh", []);
      await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "ExpBatchsDataSet")), "Refresh", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "ExpBatchsDataSet")), "Locate", ["ID", (await $.wv([$t1], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), []])));
    } else {
      if ($.truthy($.eq((await $.mv((await $.wv([$t1], "EditName", C, false)), "Text")), ""))) {
        await $.stmt((await $.wcall([$t1], "ShowMessage", ["Adı sahəsi boşdur!"], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.mv((await $.wv([$t1], "DBLookupComboBox1", C, false)), "Text")), ""))) {
        await $.stmt((await $.wcall([$t1], "ShowMessage", ["Hesab sahəsi seçilməyib!"], C)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.mv((await $.wv([$t1], "CMCurrencyEdit1", C, false)), "Text")), ""))) {
        await $.stmt((await $.wcall([$t1], "ShowMessage", ["Məbləğ sahəsi doldurulmayıb!"], C)));
        return L0.result;
      }
      await $.mcall((await $.wv([$t1], "FormNominalCustomers", C, false)), "Parametr", []);
      await $.wset([$t1], "v_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "ExpBatchsDataSet")), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
      if ($.truthy((await $.mv((await $.wv([$t1], "Button3", C, false)), "Visible")))) {
        if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t1], "FormForeignCurrency", C, false)), "DBLCBCountry")), "Text")), ""))) {
          await $.stmt((await $.wcall([$t1], "ShowMessage", ["Xarici valyuta düyməsinin altında ölkəni seçin"], C)));
          return L0.result;
        }
        if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t1], "FormForeignCurrency", C, false)), "DBLCBAccount")), "Text")), ""))) {
          await $.stmt((await $.wcall([$t1], "ShowMessage", ["Hesabı seçin"], C)));
          return L0.result;
        }
        if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t1], "FormForeignCurrency", C, false)), "CmCurForeginEdit")), "text")), "0.00"))) {
          await $.stmt((await $.wcall([$t1], "ShowMessage", ["Məbləği yazın"], C)));
          return L0.result;
        }
      }
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "EXPESSPAC")), "CallProcedure", ["exp_payments_update", ["batchid", (await $.wv([$t1], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), "nominalid", (await $.wv([$t1], "custid", C, false)), "v_exid", (await $.wv([$t1], "exid", C, false)), "v_optype", (await $.wv([$t1], "optype", C, false)), "v_setid", (await $.wv([$t1], "setid", { get: async () => L0["setid"], set: async (v) => { L0["setid"] = v; }, local: true }, false)), "v_accid", (await $.wv([$t1], "accid", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), "v_val_cod", (await $.wv([$t1], "val_cod", { get: async () => L0["val_cod"], set: async (v) => { L0["val_cod"] = v; }, local: true }, false)), "v_amount", (await $.wv([$t1], "amount", { get: async () => L0["amount"], set: async (v) => { L0["amount"] = v; }, local: true }, false)), "v_filname", (await $.wv([$t1], "filname", { get: async () => L0["filname"], set: async (v) => { L0["filname"] = v; }, local: true }, false)), "v_remit_inf", (await $.wv([$t1], "remit_inf", C, false)), "v_doc_type", (await $.wv([$t1], "doc_type", C, false)), "v_passpin", (await $.wv([$t1], "passpin", C, false)), "v_passer", (await $.wv([$t1], "passer", C, false)), "v_paspnum", (await $.wv([$t1], "paspnum", C, false)), "v_doc_country", (await $.wv([$t1], "doc_country", C, false)), "v_paspplace", (await $.wv([$t1], "paspplace", C, false)), "v_paspdate", (await $.wv([$t1], "paspdate", C, false)), "v_passexpire", (await $.wv([$t1], "passexpire", C, false)), "v_citizenship", (await $.wv([$t1], "citizenship", C, false)), "v_lastname", (await $.wv([$t1], "lastname", C, false)), "v_soname", (await $.wv([$t1], "soname", C, false)), "v_name", (await $.wv([$t1], "name", C, false)), "v_sex", (await $.wv([$t1], "sex", C, false)), "v_fam_status", (await $.wv([$t1], "fam_status", C, false)), "v_bbirthplace", (await $.wv([$t1], "bbirthplace", C, false)), "v_birth_state", (await $.wv([$t1], "birth_state", C, false)), "v_birthday", (await $.wv([$t1], "birthday", C, false)), "v_aadrs_state", (await $.wv([$t1], "aadrs_state", C, false)), "v_city", (await $.wv([$t1], "city", C, false)), "v_reg_zip", (await $.wv([$t1], "reg_zip", C, false)), "v_address", (await $.wv([$t1], "address", C, false)), "v_phone_m", (await $.wv([$t1], "phone_m", C, false)), "v_phone_h", (await $.wv([$t1], "phone_h", C, false)), "v_e_mail", (await $.wv([$t1], "e_mail", C, false)), "v_nerezident", (await $.wv([$t1], "v_nerezident", C, false)), "v_work_place", (await $.wv([$t1], "work_place", C, false)), "v_work_adrs_spec", (await $.wv([$t1], "work_adrs_spec", C, false)), "v_work_cntr", (await $.wv([$t1], "work_cntr", C, false)), "v_work_city", (await $.wv([$t1], "work_city", C, false)), "v_work_state", (await $.wv([$t1], "work_state", C, false)), "v_work_zip", (await $.wv([$t1], "work_zip", C, false)), "v_work_adress", (await $.wv([$t1], "work_adress", C, false)), "v_work_phone_spec", (await $.wv([$t1], "work_phone_spec", C, false)), "v_work_phconttype", (await $.wv([$t1], "work_phconttype", C, false)), "v_work_phoppref", (await $.wv([$t1], "work_phoppref", C, false)), "v_work_phone", (await $.wv([$t1], "work_phone", C, false)), "v_work_phext", (await $.wv([$t1], "work_phext", C, false)), "v_work_phcode", (await $.wv([$t1], "work_phcode", C, false)), "v_contractno", (await $.wv([$t1], "contractno", C, false)), "v_kaccid", (await $.wv([$t1], "Fc_accid", C, false)), "v_kamount", (await $.wv([$t1], "Fc_amount", C, false))]])));
      await $.mcall((await $.wv([$t1], "FormPaymentsCredit", C, false)), "Close", []);
      await $.mcall((await $.wv([$t1], "ExpCustomersType", C, false)), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "Expdescription")), "Refresh", []);
      await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "ExpBatchsDataSet")), "Refresh", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "ExpDataModule", C, false)), "ExpBatchsDataSet")), "Locate", ["ID", (await $.wv([$t1], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false)), []])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "FormForeignCurrency"));
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "LoadComboData", async function LoadComboData(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "ExpDataModule")), "Expdescription"));
    const $t4 = (await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false));
    if ($.truthy($.not(((await $.wv([$t3, $t4], "Active", C, false)))))) {
      await $.stmt($.wcall([$t3, $t4], "Open", [], C));
    } else {
      await $.stmt($.wcall([$t3, $t4], "Refresh", [], C));
    }
    if ($.truthy($.ne((await $.mv((await $.wv([$t3, $t4], "Items", C, false)), "Count")), (await $.wv([$t3, $t4], "RecordCount", C, false))))) {
      await $.mcall((await $.wv([$t3, $t4], "Items", C, false)), "Clear", []);
      await $.stmt($.wcall([$t3, $t4], "First", [], C));
      while ($.truthy($.not(((await $.wv([$t3, $t4], "EOF", C, false)))))) {
        await $.stmt((await $.mcall((await $.wv([$t3, $t4], "Items", C, false)), "Add", [(await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["description"], C)), "AsString"))])));
        await $.stmt($.wcall([$t3, $t4], "Next", [], C));
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TComboBox"]});
  U.method("TFormPaymentsCredit", "CMCurrencyEdit1Exit", async function CMCurrencyEdit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = (await $.call(C, "pos", [".", (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Text"))]));
  if ($.truthy($.eq(L0["s"], 0))) {
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Text", $.add((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Text")), ".00"));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "CMCurrencyEdit1KeyPress", async function CMCurrencyEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), ["\b", ...$.range("0","9"), (await $.v(C, "DecimalSeparator"))]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPaymentsCredit", "CMCurrencyEdit1MouseActivate", async function CMCurrencyEdit1MouseActivate(Self, p0, p1, p2, p3, p4, p5, p6) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "button": $.copyArg(p1), "shift": $.copyArg(p2), "x": $.copyArg(p3), "y": $.copyArg(p4), "hittest": $.copyArg(p5), "mouseactivate": $.asRef(p6), result: undefined};
  await $.fixArgs(L0, ["sender", "button", "shift", "x", "y", "hittest"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Text")), "0.00"))) {
    await $.mcall((await $.v(C, "CMCurrencyEdit1")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender", "Button", "Shift", "X", "Y", "HitTest", "MouseActivate"], "kind": "procedure", "ptypes": ["TObject", "TMouseButton", "TShiftState", "Integer", "Integer", "Integer", "TMouseActivate"]});
  U.method("TFormPaymentsCredit", "ComboBox1Click", async function ComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((L0["sender"]), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "ComboBox1DropDown", async function ComboBox1DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadComboData", [(await $.call(C, "TComboBox", [L0["sender"]]))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "KeyD", 1);
  {
    const $t5 = (await $.v(C, "ExpDataModule"));
    await $.mset((await $.wv([$t5], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t5], "False", C, false)));
    await $.mset((await $.wv([$t5], "FilialDataSet", C, false)), "Filter", "");
    await $.mset((await $.wv([$t5], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t5], "KredetDataSet", C, false)), "FieldByName", ["filial"])), "AsString"))));
    await $.mset((await $.wv([$t5], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t5], "true", C, false)));
    await $.mset((await $.wv([$t5], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "ExpDataModule", C, false)), "FilialDataSet")), "FieldByName", ["name"])), "AsString")));
    await $.mcall((await $.wv([$t5], "KreditRestDataSet", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t5], "KreditRestDataSet", C, false)), "SetVariable", ["acc_id", (await $.mv((await $.mcall((await $.wv([$t5], "KredetDataSet", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t5], "KreditRestDataSet", C, false)), "Open", []);
    await $.mset((await $.wv([$t5], "SearchName", C, false)), "Text", (await $.mv((await $.wv([$t5], "DBLookupComboBox1", C, false)), "Text")));
    if ($.truthy((await $.wcall([$t5], "VarIsNull", [(await $.mv((await $.mcall((await $.wv([$t5], "KreditRestDataSet", C, false)), "FieldByName", ["rest"])), "AsVariant"))], C)))) {
      await $.mset((await $.wv([$t5], "CMCurrencyEdit2", C, false)), "Value", 0);
    } else {
      await $.mset((await $.wv([$t5], "CMCurrencyEdit2", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t5], "KreditRestDataSet", C, false)), "FieldByName", ["rest"])), "AsVariant")));
    }
    if ($.truthy((await $.wcall([$t5], "VarIsNull", [(await $.mv((await $.mcall((await $.wv([$t5], "KreditRestDataSet", C, false)), "FieldByName", ["interestrest"])), "AsVariant"))], C)))) {
      await $.mset((await $.wv([$t5], "CMCurrencyEdit3", C, false)), "Value", 0);
    } else {
      await $.mset((await $.wv([$t5], "CMCurrencyEdit3", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t5], "KreditRestDataSet", C, false)), "FieldByName", ["interestrest"])), "AsVariant")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fh": 0, "tip": '', "ftip": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "EditDescription")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Exp_settingstype")), "FieldByName", ["description"])), "AsString")));
  L0["ftip"] = (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"));
  if ($.truthy($.eq(L0["ftip"], 78))) {
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", false);
    await $.mset((await $.v(C, "Button3")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "SpeedButton1")), "Enabled", true);
    await $.mset((await $.v(C, "Button3")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "EditDescriptionKeyDown", async function EditDescriptionKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_F3"))))) {
    {
      const $t6 = (await $.v(C, "ExpFormDestination"));
      const $t7 = (await $.wv([$t6], "ExpDataModule", C, false));
      await $.stmt($.wcall([$t6, $t7], "ShowModal", [], C));
      if ($.truthy($.eq((await $.wv([$t6, $t7], "ModalResult", C, false)), (await $.wv([$t6, $t7], "mrOk", C, false))))) {
        await $.mset((await $.wv([$t6, $t7], "EditDescription", C, false)), "Text", (await $.wv([$t6, $t7], "Value", C, false)));
      }
    }
  } else {
    if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
      await $.stmt($.call(C, "Close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormPaymentsCredit", "FieldSearchEditNameExit", async function FieldSearchEditNameExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Account")), "Close", []);
  await $.mset((await $.mv((await $.v(C, "FormPaymentsCredit")), "Button1")), "Visible", true);
  await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "Button1")), "Visible", true);
  await $.set(C, "FiledBatchs", false);
  await $.set(C, "FiledIncoming", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormPaymentsCredit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormForeignCurrency", (await $.mcall((await $.v(C, "TFormForeignCurrency")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "fieldkliid": '', "fieldbkliid": '', "fieldbfilialname": '', "fieldkreditaccid": null, "fieldamount": 0, "fieldremit_inf": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "ExpressVariables"));
    await $.wset([$t8], "contractno", "", C);
    await $.wset([$t8], "custid", (await $.wv([$t8], "null", C, false)), C);
    await $.wset([$t8], "remit_inf", "", C);
    await $.wset([$t8], "doc_type", (await $.wv([$t8], "null", C, false)), C);
    await $.wset([$t8], "passpin", "", C);
    await $.wset([$t8], "passer", "", C);
    await $.wset([$t8], "paspnum", "", C);
    await $.wset([$t8], "doc_country", (await $.wv([$t8], "null", C, false)), C);
    await $.wset([$t8], "paspplace", "", C);
    await $.wset([$t8], "paspdate", (await $.wv([$t8], "null", C, false)), C);
    await $.wset([$t8], "passexpire", (await $.wv([$t8], "null", C, false)), C);
    await $.wset([$t8], "citizenship", (-(1)), C);
    await $.wset([$t8], "lastname", "", C);
    await $.wset([$t8], "soname", "", C);
    await $.wset([$t8], "name", "", C);
    await $.wset([$t8], "sex", (await $.wv([$t8], "null", C, false)), C);
    await $.wset([$t8], "fam_status", (await $.wv([$t8], "null", C, false)), C);
    await $.wset([$t8], "bbirthplace", "", C);
    await $.wset([$t8], "birth_state", "", C);
    await $.wset([$t8], "birthday", (await $.wv([$t8], "null", C, false)), C);
    await $.wset([$t8], "aadrs_state", "", C);
    await $.wset([$t8], "city", "", C);
    await $.wset([$t8], "reg_zip", "", C);
    await $.wset([$t8], "address", "", C);
    await $.wset([$t8], "phone_m", "", C);
    await $.wset([$t8], "phone_h", "", C);
    await $.wset([$t8], "e_mail", "", C);
    await $.wset([$t8], "filial", (-(1)), C);
    await $.wset([$t8], "v_nerezident", (-(1)), C);
    await $.wset([$t8], "v_cust_type", (-(1)), C);
    await $.wset([$t8], "v_inn", "", C);
    await $.wset([$t8], "debetid", (await $.wv([$t8], "null", C, false)), C);
    await $.wset([$t8], "work_place", "", C);
    await $.wset([$t8], "work_adrs_spec", (-(1)), C);
    await $.wset([$t8], "work_cntr", (-(1)), C);
    await $.wset([$t8], "work_city", (-(1)), C);
    await $.wset([$t8], "work_state", "", C);
    await $.wset([$t8], "work_zip", "", C);
    await $.wset([$t8], "work_adress", "", C);
    await $.wset([$t8], "work_phone_spec", (-(1)), C);
    await $.wset([$t8], "work_phconttype", (-(1)), C);
    await $.wset([$t8], "work_phoppref", (-(1)), C);
    await $.wset([$t8], "work_phone", "", C);
    await $.wset([$t8], "work_phext", "", C);
    await $.wset([$t8], "work_phcode", "", C);
  }
  await $.set(C, "KeyD", 0);
  await $.mset((await $.v(C, "FormNominalCustomers")), "RH", false);
  await $.mcall((await $.mv((await $.v(C, "FormPaymentsCredit")), "Account")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "FormPaymentsCredit")), "Account")), "Open", []);
  if ($.truthy($.eq((await $.v(C, "FForm")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Exp_settingstype")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Exp_settingstype")), "SetVariable", ["stypeid", (await $.v(C, "optype"))])));
    await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Exp_settingstype")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "Exp_settingstype")), "RecordCount")), 1))) {
      await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Exp_settingstype")), "FieldByName", ["id"])), "AsInteger")));
    } else {
      await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (-(1)));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), 78))) {
      await $.mset((await $.v(C, "Button3")), "Visible", true);
    } else {
      await $.mset((await $.v(C, "Button3")), "Visible", false);
    }
    await $.set(C, "Sum", 0);
    await $.mcall((await $.v(C, "Searchpaspnum")), "Clear", []);
    await $.mcall((await $.v(C, "Searchinn")), "Clear", []);
    await $.mcall((await $.v(C, "Searchid")), "Clear", []);
    await $.mcall((await $.v(C, "Searchpasspin")), "Clear", []);
    await $.mcall((await $.v(C, "EditName")), "Clear", []);
    await $.mcall((await $.v(C, "SearchName")), "Clear", []);
    await $.mcall((await $.v(C, "FilialName")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "KredetDataSet")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "KredetDataSet")), "SetVariable", ["kli_id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "KredetDataSet")), "Open", []);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Text", "0.00");
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Text", "0.00");
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "Text", "0.00");
    await $.mcall((await $.v(C, "EditDescription")), "Clear", []);
    await $.set(C, "Hcusttype", (-(1)));
  } else {
    await $.set(C, "KeyD", 1);
    {
      const $t9 = (await $.v(C, "ExpDataModule"));
      if ($.truthy((await $.wv([$t9], "FiledIncoming", C, false)))) {
        await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.mv((await $.wv([$t9], "ExpIncomingDataSetOPTYPE", C, false)), "AsInteger"))])));
        await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "Open", []);
        await $.mset((await $.wv([$t9], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.wv([$t9], "ExpIncomingDataSetSETID", C, false)), "AsInteger")));
        await $.wset([$t9], "FieldKLIID", (await $.mv((await $.wv([$t9], "ExpIncomingDataSetKLIID", C, false)), "AsString")), { get: async () => L0["fieldkliid"], set: async (v) => { L0["fieldkliid"] = v; }, local: true });
        await $.wset([$t9], "FieldBKLIID", (await $.mv((await $.wv([$t9], "ExpIncomingDataSetBKLIID", C, false)), "AsString")), { get: async () => L0["fieldbkliid"], set: async (v) => { L0["fieldbkliid"] = v; }, local: true });
        await $.wset([$t9], "FieldBFILIALNAME", (await $.mv((await $.wv([$t9], "ExpIncomingDataSetBFILIALNAME", C, false)), "AsString")), { get: async () => L0["fieldbfilialname"], set: async (v) => { L0["fieldbfilialname"] = v; }, local: true });
        await $.wset([$t9], "FieldKREDITACCID", (await $.mv((await $.wv([$t9], "ExpIncomingDataSetKREDITACCID", C, false)), "AsString")), { get: async () => L0["fieldkreditaccid"], set: async (v) => { L0["fieldkreditaccid"] = v; }, local: true });
        await $.wset([$t9], "FieldAMOUNT", (await $.mv((await $.wv([$t9], "ExpIncomingDataSetAMOUNT", C, false)), "AsFloat")), { get: async () => L0["fieldamount"], set: async (v) => { L0["fieldamount"] = v; }, local: true });
        await $.wset([$t9], "FieldREMIT_INF", (await $.mv((await $.wv([$t9], "ExpIncomingDataSetREMIT_INF", C, false)), "AsString")), { get: async () => L0["fieldremit_inf"], set: async (v) => { L0["fieldremit_inf"] = v; }, local: true });
        await $.mset((await $.mv((await $.wv([$t9], "FormNominalCustomers", C, false)), "Searchnumberofcredit")), "Text", (await $.mv((await $.wv([$t9], "ExpIncomingDataSetCONTRACTNO", C, false)), "AsString")));
      }
      if ($.truthy((await $.wv([$t9], "FiledBatchs", C, false)))) {
        await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.mv((await $.wv([$t9], "ExpBatchsDataSetOPTYPE", C, false)), "AsInteger"))])));
        await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "Open", []);
        await $.mset((await $.wv([$t9], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.wv([$t9], "ExpBatchsDataSetSETID", C, false)), "AsInteger")));
        await $.wset([$t9], "FieldKLIID", (await $.mv((await $.wv([$t9], "ExpBatchsDataSetKLIID", C, false)), "AsString")), { get: async () => L0["fieldkliid"], set: async (v) => { L0["fieldkliid"] = v; }, local: true });
        await $.wset([$t9], "FieldBKLIID", (await $.mv((await $.wv([$t9], "ExpBatchsDataSetBKLIID", C, false)), "AsString")), { get: async () => L0["fieldbkliid"], set: async (v) => { L0["fieldbkliid"] = v; }, local: true });
        await $.wset([$t9], "FieldBFILIALNAME", (await $.mv((await $.wv([$t9], "ExpBatchsDataSetBFILIALNAME", C, false)), "AsString")), { get: async () => L0["fieldbfilialname"], set: async (v) => { L0["fieldbfilialname"] = v; }, local: true });
        await $.wset([$t9], "FieldKREDITACCID", (await $.mv((await $.wv([$t9], "ExpBatchsDataSetKREDITACCID", C, false)), "AsString")), { get: async () => L0["fieldkreditaccid"], set: async (v) => { L0["fieldkreditaccid"] = v; }, local: true });
        await $.wset([$t9], "FieldAMOUNT", (await $.mv((await $.wv([$t9], "ExpBatchsDataSetAMOUNT", C, false)), "AsFloat")), { get: async () => L0["fieldamount"], set: async (v) => { L0["fieldamount"] = v; }, local: true });
        await $.wset([$t9], "FieldREMIT_INF", (await $.mv((await $.wv([$t9], "ExpBatchsDataSetREMIT_INF", C, false)), "AsString")), { get: async () => L0["fieldremit_inf"], set: async (v) => { L0["fieldremit_inf"] = v; }, local: true });
        await $.mset((await $.mv((await $.wv([$t9], "FormNominalCustomers", C, false)), "Searchnumberofcredit")), "Text", (await $.mv((await $.wv([$t9], "ExpBatchsDataSetCONTRACTNO", C, false)), "AsString")));
      }
      if ($.truthy((await $.wv([$t9], "FiledIncomingArchive", C, false)))) {
        await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.mv((await $.mcall((await $.wv([$t9], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["OPTYPE"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "Open", []);
        await $.mset((await $.wv([$t9], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t9], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["SETID"])), "AsInteger")));
        await $.wset([$t9], "FieldKLIID", (await $.mv((await $.mcall((await $.wv([$t9], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["KLIID"])), "AsString")), { get: async () => L0["fieldkliid"], set: async (v) => { L0["fieldkliid"] = v; }, local: true });
        await $.wset([$t9], "FieldBKLIID", (await $.mv((await $.mcall((await $.wv([$t9], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["BKLIID"])), "AsString")), { get: async () => L0["fieldbkliid"], set: async (v) => { L0["fieldbkliid"] = v; }, local: true });
        await $.wset([$t9], "FieldBFILIALNAME", (await $.mv((await $.mcall((await $.wv([$t9], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["BFILIALNAME"])), "AsString")), { get: async () => L0["fieldbfilialname"], set: async (v) => { L0["fieldbfilialname"] = v; }, local: true });
        await $.wset([$t9], "FieldKREDITACCID", (await $.mv((await $.mcall((await $.wv([$t9], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["KREDITACCID"])), "AsString")), { get: async () => L0["fieldkreditaccid"], set: async (v) => { L0["fieldkreditaccid"] = v; }, local: true });
        await $.wset([$t9], "FieldAMOUNT", (await $.mv((await $.mcall((await $.wv([$t9], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["AMOUNT"])), "AsFloat")), { get: async () => L0["fieldamount"], set: async (v) => { L0["fieldamount"] = v; }, local: true });
        await $.wset([$t9], "FieldREMIT_INF", (await $.mv((await $.mcall((await $.wv([$t9], "ExpIncomingarchiveDataSet", C, false)), "FieldByName", ["REMIT_INF"])), "AsString")), { get: async () => L0["fieldremit_inf"], set: async (v) => { L0["fieldremit_inf"] = v; }, local: true });
        await $.mset((await $.mv((await $.wv([$t9], "FormNominalCustomers", C, false)), "Searchnumberofcredit")), "Text", (await $.mv((await $.wv([$t9], "ExpIncomingarchiveDataSetCONTRACTNO", C, false)), "AsString")));
      }
      if ($.truthy((await $.wv([$t9], "FieldBatchsArchive", C, false)))) {
        await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "SetVariable", ["stypeid", (await $.mv((await $.wv([$t9], "ExpBatchsArchiveDataSetOPTYPE", C, false)), "AsInteger"))])));
        await $.mcall((await $.wv([$t9], "Exp_settingstype", C, false)), "Open", []);
        await $.mset((await $.wv([$t9], "DBLookupComboBox2", C, false)), "KeyValue", (await $.mv((await $.wv([$t9], "ExpBatchsArchiveDataSetSETID", C, false)), "AsInteger")));
        await $.wset([$t9], "FieldKLIID", (await $.mv((await $.wv([$t9], "ExpBatchsArchiveDataSetKLIID", C, false)), "AsString")), { get: async () => L0["fieldkliid"], set: async (v) => { L0["fieldkliid"] = v; }, local: true });
        await $.wset([$t9], "FieldBKLIID", (await $.mv((await $.wv([$t9], "ExpBatchsArchiveDataSetBKLIID", C, false)), "AsString")), { get: async () => L0["fieldbkliid"], set: async (v) => { L0["fieldbkliid"] = v; }, local: true });
        await $.wset([$t9], "FieldBFILIALNAME", (await $.mv((await $.wv([$t9], "ExpBatchsArchiveDataSetBFILIALNAME", C, false)), "AsString")), { get: async () => L0["fieldbfilialname"], set: async (v) => { L0["fieldbfilialname"] = v; }, local: true });
        await $.wset([$t9], "FieldKREDITACCID", (await $.mv((await $.wv([$t9], "ExpBatchsArchiveDataSetKREDITACCID", C, false)), "AsString")), { get: async () => L0["fieldkreditaccid"], set: async (v) => { L0["fieldkreditaccid"] = v; }, local: true });
        await $.wset([$t9], "FieldAMOUNT", (await $.mv((await $.wv([$t9], "ExpBatchsArchiveDataSetAMOUNT", C, false)), "AsFloat")), { get: async () => L0["fieldamount"], set: async (v) => { L0["fieldamount"] = v; }, local: true });
        await $.wset([$t9], "FieldREMIT_INF", (await $.mv((await $.wv([$t9], "ExpBatchsArchiveDataSetREMIT_INF", C, false)), "AsString")), { get: async () => L0["fieldremit_inf"], set: async (v) => { L0["fieldremit_inf"] = v; }, local: true });
        await $.mset((await $.mv((await $.wv([$t9], "FormNominalCustomers", C, false)), "Searchnumberofcredit")), "Text", (await $.mv((await $.wv([$t9], "ExpBatchsArchiveDataSetCONTRACTNO", C, false)), "AsString")));
      }
    }
    {
      const $t10 = (await $.v(C, "ExpDataModule"));
      const $t11 = (await $.wv([$t10], "SendToDataSet", C, false));
      await $.stmt($.wcall([$t10, $t11], "Close", [], C));
      { const $t12 = await $.iset((await $.wv([$t10, $t11], "SQl", C, false)), [1], ""); if ($t12 !== undefined) { await $.wset([$t10, $t11], "SQl", $t12, C); } }
      { const $t13 = await $.iset((await $.wv([$t10, $t11], "SQl", C, false)), [1], $.add("where id=", (await $.wv([$t10, $t11], "FieldBKLIID", { get: async () => L0["fieldbkliid"], set: async (v) => { L0["fieldbkliid"] = v; }, local: true }, false)))); if ($t13 !== undefined) { await $.wset([$t10, $t11], "SQl", $t13, C); } }
      await $.stmt($.wcall([$t10, $t11], "Open", [], C));
      await $.mset((await $.wv([$t10, $t11], "Searchpasspin", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "SendToDataSet", C, false)), "FieldByName", ["passpin"])), "AsString")));
      await $.mset((await $.wv([$t10, $t11], "Searchpaspnum", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "SendToDataSet", C, false)), "FieldByName", ["paspnum"])), "AsString")));
      await $.mset((await $.wv([$t10, $t11], "Searchid", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "SendToDataSet", C, false)), "FieldByName", ["id"])), "AsString")));
      await $.mset((await $.wv([$t10, $t11], "Searchinn", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "SendToDataSet", C, false)), "FieldByName", ["inn"])), "AsString")));
      await $.wset([$t10, $t11], "Hcusttype", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "SendToDataSet", C, false)), "FieldByName", ["cust_type"])), "AsInteger")), C);
      await $.mset((await $.wv([$t10, $t11], "FilialName", C, false)), "Text", (await $.wv([$t10, $t11], "FieldBFILIALNAME", { get: async () => L0["fieldbfilialname"], set: async (v) => { L0["fieldbfilialname"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t10, $t11], "EditName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t10, $t11], "SendToDataSet", C, false)), "FieldByName", ["custname"])), "AsString")));
      await $.mcall((await $.wv([$t10, $t11], "KredetDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t10, $t11], "KredetDataSet", C, false)), "SetVariable", ["kli_id", (await $.wv([$t10, $t11], "FieldBKLIID", { get: async () => L0["fieldbkliid"], set: async (v) => { L0["fieldbkliid"] = v; }, local: true }, false))])));
      await $.mcall((await $.wv([$t10, $t11], "KredetDataSet", C, false)), "Open", []);
      await $.mset((await $.wv([$t10, $t11], "DBLookupComboBox1", C, false)), "KeyValue", (await $.wv([$t10, $t11], "FieldKREDITACCID", { get: async () => L0["fieldkreditaccid"], set: async (v) => { L0["fieldkreditaccid"] = v; }, local: true }, false)));
      await $.mset((await $.wv([$t10, $t11], "SearchName", C, false)), "Text", (await $.mv((await $.wv([$t10, $t11], "DBLookupComboBox1", C, false)), "Text")));
      await $.mcall((await $.wv([$t10, $t11], "KreditRestDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t10, $t11], "KreditRestDataSet", C, false)), "SetVariable", ["acc_id", (await $.wv([$t10, $t11], "FieldKREDITACCID", { get: async () => L0["fieldkreditaccid"], set: async (v) => { L0["fieldkreditaccid"] = v; }, local: true }, false))])));
      await $.mcall((await $.wv([$t10, $t11], "KreditRestDataSet", C, false)), "Open", []);
      await $.mset((await $.wv([$t10, $t11], "CMCurrencyEdit2", C, false)), "Value", (await $.mv((await $.wv([$t10, $t11], "KreditRestDataSetREST", C, false)), "AsFloat")));
      await $.mset((await $.wv([$t10, $t11], "CMCurrencyEdit3", C, false)), "Value", (await $.mv((await $.wv([$t10, $t11], "KreditRestDataSetINTERESTREST", C, false)), "AsFloat")));
      await $.mset((await $.wv([$t10, $t11], "CMCurrencyEdit1", C, false)), "Text", (await $.wcall([$t10, $t11], "FloatToStr", [(await $.wv([$t10, $t11], "FieldAMOUNT", { get: async () => L0["fieldamount"], set: async (v) => { L0["fieldamount"] = v; }, local: true }, false))], C)));
      await $.stmt((await $.wcall([$t10, $t11], "CMCurrencyEdit1Exit", [(await $.wv([$t10, $t11], "sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)));
      await $.mset((await $.wv([$t10, $t11], "EditDescription", C, false)), "Text", (await $.wv([$t10, $t11], "FieldREMIT_INF", { get: async () => L0["fieldremit_inf"], set: async (v) => { L0["fieldremit_inf"] = v; }, local: true }, false)));
    }
    if ($.truthy($.ne(L0["fieldbkliid"], L0["fieldkliid"]))) {
      {
        const $t14 = (await $.v(C, "ExpDataModule"));
        const $t15 = (await $.wv([$t14], "SendDataSet", C, false));
        await $.stmt($.wcall([$t14, $t15], "Close", [], C));
        { const $t16 = await $.iset((await $.wv([$t14, $t15], "SQl", C, false)), [1], ""); if ($t16 !== undefined) { await $.wset([$t14, $t15], "SQl", $t16, C); } }
        { const $t17 = await $.iset((await $.wv([$t14, $t15], "SQl", C, false)), [1], $.add("where id=", (await $.wv([$t14, $t15], "FieldKLIID", { get: async () => L0["fieldkliid"], set: async (v) => { L0["fieldkliid"] = v; }, local: true }, false)))); if ($t17 !== undefined) { await $.wset([$t14, $t15], "SQl", $t17, C); } }
        await $.stmt($.wcall([$t14, $t15], "Open", [], C));
        {
          const $t18 = (await $.wv([$t14, $t15], "FormNominalCustomers", C, false));
          const $t19 = (await $.wv([$t14, $t15, $t18], "ExpressVariables", C, false));
          await $.wset([$t14, $t15, $t18, $t19], "custid", (await $.wv([$t14, $t15, $t18, $t19], "FieldKLIID", { get: async () => L0["fieldkliid"], set: async (v) => { L0["fieldkliid"] = v; }, local: true }, false)), C);
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["passpin"], C)), "AsString")));
          if ($.truthy($.ne((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "Editpasspin", C, false)), "Text")), ""))) {
            await $.mset((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "RH", (await $.wv([$t14, $t15, $t18, $t19], "true", C, false)));
          }
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["lastname"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["name"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["soname"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["doc_type"], C)), "AsInteger")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["passer"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["paspnum"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["doc_country"], C)), "AsVariant")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["paspplace"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["paspdate"], C)), "AsVariant")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["passexpire"], C)), "AsVariant")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["citizenship"], C)), "AsInteger")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["sex"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["fam_status"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["birthplace"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["birth_state"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["birthday"], C)), "AsVariant")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["adrs_state"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["city"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["reg_zip"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["phone_m"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["phone_h"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["e_mail"], C)), "AsString")));
          await $.mset((await $.wv([$t14, $t15, $t18, $t19], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["address"], C)), "AsString")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "Work_Place")), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_place"], C)), "AsString")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_cntr"], C)), "AsVariant")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_city"], C)), "AsVariant")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "db_tph_state")), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_state"], C)), "AsString")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_zip"], C)), "AsString")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_adress"], C)), "AsString")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_phone"], C)), "AsString")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_phext"], C)), "AsString")));
          await $.mset((await $.mv((await $.wv([$t14, $t15, $t18, $t19], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text", (await $.mv((await $.wcall([$t14, $t15, $t18, $t19], "FieldByName", ["work_phcode"], C)), "AsString")));
        }
      }
    } else {
      {
        const $t20 = (await $.v(C, "FormNominalCustomers"));
        await $.mset((await $.wv([$t20], "RadioButton1", C, false)), "Checked", (await $.wv([$t20], "true", C, false)));
        await $.mcall((await $.wv([$t20], "Editpasspin", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t20], "EditLastName", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t20], "EditName1", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t20], "EditSoname", C, false)), "Clear", []);
        await $.mset((await $.wv([$t20], "CBoxPassPlace", C, false)), "KeyValue", (-(1)));
        await $.mcall((await $.wv([$t20], "EditSerial", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t20], "EditPassport", C, false)), "Clear", []);
        await $.mset((await $.wv([$t20], "Issue_country", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t20], "DBCBox_DocTYPE", C, false)), "KeyValue", (-(1)));
        await $.mcall((await $.wv([$t20], "DateEdit", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t20], "DateEdit1", C, false)), "Clear", []);
        await $.mset((await $.wv([$t20], "DBCBox_Citizenship", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t20], "CBoxSex", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t20], "CBoxFamStatus", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t20], "BirthPlace", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t20], "EditBirthCity", C, false)), "KeyValue", (-(1)));
        await $.mcall((await $.wv([$t20], "DateEdit2", C, false)), "Clear", []);
        await $.mset((await $.wv([$t20], "Adrs_State", C, false)), "KeyValue", (-(1)));
        await $.mset((await $.wv([$t20], "Adrs_City", C, false)), "KeyValue", (-(1)));
        await $.mcall((await $.wv([$t20], "ZipQ", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t20], "EditMobil", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t20], "EditPhone", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t20], "EditEmail", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t20], "AdressEdit", C, false)), "Clear", []);
        await $.mcall((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "Work_Place")), "Clear", []);
        await $.mset((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (-(1)));
        await $.mset((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (-(1)));
        await $.mset((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (-(1)));
        await $.mcall((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "db_tph_state")), "Clear", []);
        await $.mcall((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Clear", []);
        await $.mcall((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "db_tph_adress")), "Clear", []);
        await $.mset((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (-(1)));
        await $.mset((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (-(1)));
        await $.mset((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (-(1)));
        await $.mcall((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "Db_tph_number")), "Clear", []);
        await $.mcall((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Clear", []);
        await $.mcall((await $.mv((await $.wv([$t20], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Clear", []);
      }
    }
    await $.set(C, "Sum", (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallFloatFunction", ["SumNominalid", [(await $.mv((await $.mv((await $.v(C, "ExpDataModule")), "ExpBatchsDataSetKLIID")), "AsInteger"))]])));
    if ($.truthy($.ge((await $.v(C, "Sum")), 20000))) {
      await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "TabSheet2")), "TabVisible", true);
      await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "TabSheet3")), "TabVisible", true);
    } else {
      await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "TabSheet2")), "TabVisible", false);
      await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "TabSheet3")), "TabVisible", false);
    }
    await $.mset((await $.v(C, "FormPaymentsCredit")), "FForm", 1);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "SearchEditNameChange", async function SearchEditNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "SearchEditName1Exit", async function SearchEditName1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "SearchEditName1KeyPress", async function SearchEditName1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPaymentsCredit", "SearchidExit", async function SearchidExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "SearchinnExit", async function SearchinnExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "SearchpaspnumExit", async function SearchpaspnumExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "SearchpasspinExit", async function SearchpasspinExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPaymentsCredit", "SearchpasspinKeyPress", async function SearchpasspinKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": '', "accno": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["s"] = "";
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.set(C, "KeyD", 1);
    if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
      if ($.truthy($.eq((await $.mv((L0["sender"]), "Name")), "Searchname"))) {
        L0["accno"] = (await $.mv((L0["sender"]), "Text"));
        await $.mcall((await $.mv((await $.v(C, "FormPaymentsCredit")), "Account")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "FormPaymentsCredit")), "Account")), "SetVariable", ["accno", L0["accno"]])));
        await $.mcall((await $.mv((await $.v(C, "FormPaymentsCredit")), "Account")), "Open", []);
        if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormPaymentsCredit")), "Account")), "RecordCount")), 0))) {
          await $.stmt((await $.call(C, "ShowMessage", ["Müştəri tapılmadı"])));
          if ($.truthy($.ne((await $.mv((L0["sender"]), "Name")), "Searchpaspnum"))) {
            await $.mcall((await $.v(C, "Searchpaspnum")), "Clear", []);
          }
          if ($.truthy($.ne((await $.mv((L0["sender"]), "Name")), "Searchinn"))) {
            await $.mcall((await $.v(C, "Searchinn")), "Clear", []);
          }
          if ($.truthy($.ne((await $.mv((L0["sender"]), "Name")), "Searchid"))) {
            await $.mcall((await $.v(C, "Searchid")), "Clear", []);
          }
          if ($.truthy($.ne((await $.mv((L0["sender"]), "Name")), "Searchpasspin"))) {
            await $.mcall((await $.v(C, "Searchpasspin")), "Clear", []);
          }
          if ($.truthy($.ne((await $.mv((L0["sender"]), "Name")), "SearchName"))) {
            await $.mcall((await $.v(C, "SearchName")), "Clear", []);
          }
          await $.mcall((await $.v(C, "EditName")), "Clear", []);
          await $.mcall((await $.v(C, "FilialName")), "Clear", []);
          await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "KredetDataSet")), "Close", []);
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "KredetDataSet")), "SetVariable", ["kli_id", (-(1))])));
          await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "KredetDataSet")), "Open", []);
          await $.mset((await $.v(C, "CMCurrencyEdit1")), "Text", "0.00");
          await $.mcall((await $.v(C, "EditDescription")), "Clear", []);
          return L0.result;
        }
        {
          const $t21 = (await $.v(C, "ExpDataModule"));
          await $.mcall((await $.wv([$t21], "FilialDataSet", C, false)), "Close", []);
          { const $t22 = await $.iset((await $.mv((await $.wv([$t21], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t22 !== undefined) { await $.mset((await $.wv([$t21], "FilialDataSet", C, false)), "SQL", $t22); } }
          await $.mcall((await $.wv([$t21], "FilialDataSet", C, false)), "Open", []);
          await $.mset((await $.wv([$t21], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t21], "False", C, false)));
          await $.mset((await $.wv([$t21], "FilialDataSet", C, false)), "Filter", "");
          await $.mset((await $.wv([$t21], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.mv((await $.wv([$t21], "FormPaymentsCredit", C, false)), "Account")), "FieldByName", ["filial"])), "AsString"))));
          await $.mset((await $.wv([$t21], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t21], "true", C, false)));
          await $.mset((await $.wv([$t21], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t21], "FilialDataSet", C, false)), "FieldByName", ["name"])), "AsString")));
        }
        L0["s"] = $.add("c.id=", (await $.mv((await $.mcall((await $.mv((await $.v(C, "FormPaymentsCredit")), "Account")), "FieldByName", ["kli_id"])), "AsString")));
      } else {
        L0["s"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "name")), 7, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
        if ($.truthy($.eq(L0["s"], "id"))) {
          L0["s"] = $.add("c.", L0["s"]);
        }
        L0["s"] = $.add($.add($.add($.add($.add($.add("(", L0["s"]), "="), "'"), (await $.mv((L0["sender"]), "text"))), "'"), ")");
      }
    }
    {
      const $t23 = (await $.v(C, "ExpDataModule"));
      await $.mset((await $.wv([$t23], "KredetDataSet", C, false)), "Filtered", (await $.wv([$t23], "False", C, false)));
      await $.mset((await $.wv([$t23], "KredetDataSet", C, false)), "Filter", "");
      await $.mcall((await $.wv([$t23], "SearchCustDataSet", C, false)), "Close", []);
      { const $t24 = await $.iset((await $.mv((await $.wv([$t23], "SearchCustDataSet", C, false)), "SQL")), [47], (await $.wv([$t23], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t24 !== undefined) { await $.mset((await $.wv([$t23], "SearchCustDataSet", C, false)), "SQL", $t24); } }
      await $.mcall((await $.wv([$t23], "SearchCustDataSet", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t23], "SearchCustDataSet", C, false)), "RecordCount")), 0))) {
        await $.stmt((await $.wcall([$t23], "ShowMessage", ["Müştəri tapılmadı"], C)));
        if ($.truthy($.ne((await $.mv(((await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Name")), "Searchpaspnum"))) {
          await $.mcall((await $.wv([$t23], "Searchpaspnum", C, false)), "Clear", []);
        }
        if ($.truthy($.ne((await $.mv(((await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Name")), "Searchinn"))) {
          await $.mcall((await $.wv([$t23], "Searchinn", C, false)), "Clear", []);
        }
        if ($.truthy($.ne((await $.mv(((await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Name")), "Searchid"))) {
          await $.mcall((await $.wv([$t23], "Searchid", C, false)), "Clear", []);
        }
        if ($.truthy($.ne((await $.mv(((await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Name")), "Searchpasspin"))) {
          await $.mcall((await $.wv([$t23], "Searchpasspin", C, false)), "Clear", []);
        }
        if ($.truthy($.ne((await $.mv(((await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))), "Name")), "SearchName"))) {
          await $.mcall((await $.wv([$t23], "SearchName", C, false)), "Clear", []);
        }
        await $.mcall((await $.wv([$t23], "EditName", C, false)), "Clear", []);
        await $.mcall((await $.wv([$t23], "FilialName", C, false)), "Clear", []);
        await $.mcall((await $.mv((await $.wv([$t23], "ExpDataModule", C, false)), "KredetDataSet")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t23], "ExpDataModule", C, false)), "KredetDataSet")), "SetVariable", ["kli_id", (-(1))])));
        await $.mcall((await $.mv((await $.wv([$t23], "ExpDataModule", C, false)), "KredetDataSet")), "Open", []);
        await $.mset((await $.wv([$t23], "CMCurrencyEdit1", C, false)), "Text", "0.00");
        await $.mcall((await $.wv([$t23], "EditDescription", C, false)), "Clear", []);
        return L0.result;
      }
      await $.mset((await $.wv([$t23], "Searchpasspin", C, false)), "Text", (await $.mv((await $.wv([$t23], "SearchCustDataSetPASSPIN", C, false)), "AsString")));
      await $.mset((await $.wv([$t23], "Searchpaspnum", C, false)), "Text", (await $.mv((await $.wv([$t23], "SearchCustDataSetPASPNUM", C, false)), "AsString")));
      await $.mset((await $.wv([$t23], "Searchid", C, false)), "Text", (await $.mv((await $.wv([$t23], "SearchCustDataSetID", C, false)), "AsString")));
      await $.mset((await $.wv([$t23], "Searchinn", C, false)), "Text", (await $.mv((await $.wv([$t23], "SearchCustDataSetINN", C, false)), "AsString")));
      await $.wset([$t23], "Hcusttype", (await $.mv((await $.wv([$t23], "SearchCustDataSetCUST_TYPE", C, false)), "AsInteger")), C);
      await $.mset((await $.wv([$t23], "DBLookupComboBox1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t23], "FormPaymentsCredit", C, false)), "Account")), "FieldByName", ["id"])), "AsInteger")));
      await $.mset((await $.wv([$t23], "EditName", C, false)), "Text", (await $.mv((await $.wv([$t23], "SearchCustDataSetNAME", C, false)), "AsString")));
      await $.mcall((await $.wv([$t23], "KredetDataSet", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t23], "KredetDataSet", C, false)), "SetVariable", ["kli_id", (await $.mv((await $.wv([$t23], "SearchCustDataSetID", C, false)), "AsInteger"))])));
      await $.mcall((await $.wv([$t23], "KredetDataSet", C, false)), "Open", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t23], "KredetDataSet", C, false)), "RecordCount")), 1))) {
        await $.mcall((await $.wv([$t23], "FilialDataSet", C, false)), "Close", []);
        { const $t25 = await $.iset((await $.mv((await $.wv([$t23], "FilialDataSet", C, false)), "SQL")), [1], ""); if ($t25 !== undefined) { await $.mset((await $.wv([$t23], "FilialDataSet", C, false)), "SQL", $t25); } }
        await $.mcall((await $.wv([$t23], "FilialDataSet", C, false)), "Open", []);
        await $.mset((await $.wv([$t23], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t23], "False", C, false)));
        await $.mset((await $.wv([$t23], "FilialDataSet", C, false)), "Filter", "");
        await $.mset((await $.wv([$t23], "FilialDataSet", C, false)), "Filter", $.add("id=", (await $.mv((await $.mcall((await $.wv([$t23], "KredetDataSet", C, false)), "FieldByName", ["filial"])), "AsString"))));
        await $.mset((await $.wv([$t23], "FilialDataSet", C, false)), "Filtered", (await $.wv([$t23], "true", C, false)));
        await $.mset((await $.wv([$t23], "FilialName", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t23], "ExpDataModule", C, false)), "FilialDataSet")), "FieldByName", ["name"])), "AsString")));
        await $.mset((await $.wv([$t23], "DBLookupComboBox1", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t23], "KredetDataSet", C, false)), "FieldByName", ["id"])), "AsInteger")));
        await $.mcall((await $.wv([$t23], "KreditRestDataSet", C, false)), "Close", []);
        await $.stmt((await $.mcall((await $.wv([$t23], "KreditRestDataSet", C, false)), "SetVariable", ["acc_id", (await $.mv((await $.mcall((await $.wv([$t23], "KredetDataSet", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
        await $.mcall((await $.wv([$t23], "KreditRestDataSet", C, false)), "Open", []);
        if ($.truthy((await $.wcall([$t23], "VarIsNull", [(await $.mv((await $.mcall((await $.wv([$t23], "KreditRestDataSet", C, false)), "FieldByName", ["rest"])), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t23], "CMCurrencyEdit2", C, false)), "Value", 0);
        } else {
          await $.mset((await $.wv([$t23], "CMCurrencyEdit2", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t23], "KreditRestDataSet", C, false)), "FieldByName", ["rest"])), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t23], "VarIsNull", [(await $.mv((await $.mcall((await $.wv([$t23], "KreditRestDataSet", C, false)), "FieldByName", ["interestrest"])), "AsVariant"))], C)))) {
          await $.mset((await $.wv([$t23], "CMCurrencyEdit3", C, false)), "Value", 0);
        } else {
          await $.mset((await $.wv([$t23], "CMCurrencyEdit3", C, false)), "Value", (await $.mv((await $.mcall((await $.wv([$t23], "KreditRestDataSet", C, false)), "FieldByName", ["interestrest"])), "AsVariant")));
        }
        await $.mset((await $.wv([$t23], "SearchName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t23], "KredetDataSet", C, false)), "FieldByName", ["acc_no"])), "AsString")));
      }
    }
  }
  await $.set(C, "KeyD", 0);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPaymentsCredit", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.gt((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CMCurrencyEdit1")), "Text"))])), 0)))) {
    if ($.truthy($.lt((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CMCurrencyEdit1")), "Text"))])), 20000))) {
      {
        const $t26 = (await $.v(C, "FormNominalCustomers"));
        await $.mset((await $.wv([$t26], "Label53", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label54", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label55", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label56", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label57", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label61", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label62", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label63", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label64", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label65", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label66", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label67", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label68", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label69", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label70", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label71", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label72", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label73", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label74", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label75", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label76", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label77", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label78", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "Label79", C, false)), "Visible", (await $.wv([$t26], "false", C, false)));
        await $.mset((await $.wv([$t26], "TabSheet2", C, false)), "TabVisible", (await $.wv([$t26], "False", C, false)));
        await $.mset((await $.wv([$t26], "TabSheet3", C, false)), "TabVisible", (await $.wv([$t26], "False", C, false)));
      }
    }
    if ($.truthy($.ge((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CMCurrencyEdit1")), "Text"))])), 20000))) {
      {
        const $t27 = (await $.v(C, "FormNominalCustomers"));
        await $.mset((await $.wv([$t27], "Label53", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label54", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label55", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label56", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label57", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label61", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label62", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label63", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label64", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label65", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label66", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label67", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label68", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label69", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label70", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label71", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label72", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label73", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label74", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label75", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label76", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label77", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label78", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "Label79", C, false)), "Visible", (await $.wv([$t27], "true", C, false)));
        await $.mset((await $.wv([$t27], "TabSheet2", C, false)), "TabVisible", (await $.wv([$t27], "True", C, false)));
        await $.mset((await $.wv([$t27], "TabSheet3", C, false)), "TabVisible", (await $.wv([$t27], "True", C, false)));
      }
    }
    await $.mcall((await $.v(C, "FormNominalCustomers")), "ShowModal", []);
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Məbləği daxil edin!..."])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
