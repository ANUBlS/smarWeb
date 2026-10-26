// Generated from FrmResponsibilityBlankImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmResponsibilityBlankImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "ComCtrls", "DBCtrls", "Mask", "CurrencyEdit", "db", "CommanParametrs", "DMResponsibilityBlankImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmResponsibilityBlank", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "inslookupcombobox": {"name": "InsLookupComboBox", "type": "TDBLookupComboBox"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "edins_date": {"name": "edIns_Date", "type": "TDateTimePicker"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "dblcvalute": {"name": "dblcValute", "type": "TDBLookupComboBox"}, "dbcfranshiz": {"name": "dbcFranshiz", "type": "TDBComboBox"}, "xflabel28": {"name": "XFLabel28", "type": "TXFLabel"}, "xflabel27": {"name": "XFLabel27", "type": "TXFLabel"}, "xflabel31": {"name": "XFLabel31", "type": "TXFLabel"}, "xflabel30": {"name": "XFLabel30", "type": "TXFLabel"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "dbetarif": {"name": "dbeTarif", "type": "TCurrencyEdit"}, "dbeammount": {"name": "dbeAmmount", "type": "TCurrencyEdit"}, "dbesum": {"name": "dbeSum", "type": "TCurrencyEdit"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("FrmResponsibilityBlank", null, "TFrmResponsibilityBlank");
    U.var_("CID", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmResponsibilityBlank")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmResponsibilityBlank", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMResponsibilityBlank", (await $.mcall((await $.v(C, "TDMResponsibilityBlank")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResponsibilityBlank", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmResponsibilityBlank", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    {
      const $t1 = (await $.v(C, "DMResponsibilityBlank"));
      await $.mcall((await $.wv([$t1], "DSins_contracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t1], "DSins_contracts", C, false)), "SetVariable", ["cid", (-(1))])));
      await $.mcall((await $.wv([$t1], "DSins_contracts", C, false)), "Open", []);
      await $.mcall((await $.wv([$t1], "DSins_contract_responsibility", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t1], "DSins_contract_responsibility", C, false)), "SetVariable", ["p_cid", (-(1))])));
      await $.mcall((await $.wv([$t1], "DSins_contract_responsibility", C, false)), "Open", []);
    }
    if ($.truthy($.ne((await $.v(C, "ins_cutsid")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "InsLookupComboBox")), "KeyValue", (await $.v(C, "ins_cutsid")));
    }
    if ($.truthy($.eq((await $.v(C, "ins_cutsid")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "InsLookupComboBox")), "KeyValue", (await $.v(C, "null")));
    }
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "DBLookupComboBox3")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "DBLookupComboBox2")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "edIns_Date")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dblcValute")), "KeyValue", 0);
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dbeSum")), "Text", (await $.call(C, "floattostr", [0])));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dbcFranshiz")), "Text", (await $.call(C, "floattostr", [0])));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dbeTarif")), "Text", (await $.call(C, "floattostr", [0])));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dbeAmmount")), "Text", (await $.call(C, "floattostr", [0])));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "Edit1")), "Text", "");
  }
  if ($.truthy($.eq((await $.v(C, "opetion")), "upd"))) {
    {
      const $t2 = (await $.v(C, "DMResponsibilityBlank"));
      await $.mcall((await $.wv([$t2], "DSins_contracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "DSins_contracts", C, false)), "SetVariable", ["cid", (await $.wv([$t2], "contactid", C, false))])));
      await $.mcall((await $.wv([$t2], "DSins_contracts", C, false)), "Open", []);
      await $.mcall((await $.wv([$t2], "DSins_contract_responsibility", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "DSins_contract_responsibility", C, false)), "SetVariable", ["p_cid", (await $.wv([$t2], "contactid", C, false))])));
      await $.mcall((await $.wv([$t2], "DSins_contract_responsibility", C, false)), "Open", []);
    }
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "InsLookupComboBox")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["kli_id"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "DBLookupComboBox2")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["agent_id"])), "AsInteger")));
    await $.mset((await $.v(C, "edIns_Date")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["ins_date"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["begin_date"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["end_date"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dblcValute")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["valute_id"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dbeSum")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["inssumm"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dbcFranshiz")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["franshiz"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dbeTarif")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["tariff"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "dbeAmmount")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["ammount"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmResponsibilityBlank")), "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMResponsibilityBlank")), "DSins_contracts")), "FieldByName", ["POLICY_NUM"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResponsibilityBlank", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "c_acc": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DMResponsibilityBlank"));
    const $t4 = (await $.wv([$t3], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["checkadvancedobjectaccess", ["EDITCONTRACT_ALLRESPONSIBLE"]], C)));
  }
  {
    const $t5 = (await $.v(C, "DMResponsibilityBlank"));
    const $t6 = (await $.wv([$t5], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t5, $t6], "CallProcedure", ["checkadvancedobjectaccess", ["SAVECONTRACT_RESPONSIBLE"]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Polis №-i daxil olunmayıb!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "InsLookupComboBox")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Sığorta etdirən daxil olunmayıb!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Agent daxil olunmayıb!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "dblcValute")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Valyuta daxil olunmayıb!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "dbeSum")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Sığorta məbləği daxil olunmayıb!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "dbcFranshiz")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Franşiza daxil olunmayıb!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "dbeTarif")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Tarif daxil olunmayıb!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "dbeAmmount")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Sığorta haqqı daxil olunmayıb!"])));
    return L0.result;
  }
  {
    const $t7 = (await $.v(C, "DMResponsibilityBlank"));
    const $t8 = (await $.wv([$t7], "ins_common", C, false));
    await $.wset([$t7, $t8], "a", (await $.wcall([$t7, $t8], "CallIntegerFunction", ["get_acc_balanc_hesab", [13]], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t7, $t8], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), 0))) {
      await $.stmt((await $.wcall([$t7, $t8], "showmessage", ["Diqqət ! Bu müqavilə tipində avtomatik hesabların açılası üçün balans hesabları sazlanmayıb!."], C)));
      return L0.result;
    }
  }
  {
    const $t9 = (await $.v(C, "DMResponsibilityBlank"));
    const $t10 = (await $.wv([$t9], "DSins_contracts", C, false));
    await $.stmt($.wcall([$t9, $t10], "Edit", [], C));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["kli_id"], C)), "AsInteger", (await $.mv((await $.mv((await $.wv([$t9, $t10], "FrmResponsibilityBlank", C, false)), "InsLookupComboBox")), "KeyValue")));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["agent_id"], C)), "AsInteger", (await $.mv((await $.mv((await $.wv([$t9, $t10], "FrmResponsibilityBlank", C, false)), "DBLookupComboBox2")), "KeyValue")));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["ins_date"], C)), "AsDateTime", (await $.mv((await $.wv([$t9, $t10], "edIns_Date", C, false)), "DateTime")));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["begin_date"], C)), "AsDateTime", (await $.mv((await $.wv([$t9, $t10], "DateTimePicker1", C, false)), "DateTime")));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["end_date"], C)), "AsDateTime", (await $.mv((await $.wv([$t9, $t10], "DateTimePicker2", C, false)), "DateTime")));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["valute_id"], C)), "AsInteger", (await $.mv((await $.mv((await $.wv([$t9, $t10], "FrmResponsibilityBlank", C, false)), "dblcValute")), "KeyValue")));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["inssumm"], C)), "AsFloat", (await $.mv((await $.mv((await $.wv([$t9, $t10], "FrmResponsibilityBlank", C, false)), "dbeSum")), "Value")));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["franshiz"], C)), "AsFloat", (await $.wcall([$t9, $t10], "strtofloat", [(await $.mv((await $.mv((await $.wv([$t9, $t10], "FrmResponsibilityBlank", C, false)), "dbcFranshiz")), "Text"))], C)));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["tariff"], C)), "AsFloat", (await $.mv((await $.mv((await $.wv([$t9, $t10], "FrmResponsibilityBlank", C, false)), "dbeTarif")), "Value")));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["ammount"], C)), "AsFloat", (await $.mv((await $.mv((await $.wv([$t9, $t10], "FrmResponsibilityBlank", C, false)), "dbeAmmount")), "Value")));
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["type_id"], C)), "AsFloat", 13);
    await $.mset((await $.wcall([$t9, $t10], "FieldByName", ["POLICY_NUM"], C)), "AsString", (await $.mv((await $.wv([$t9, $t10], "Edit1", C, false)), "Text")));
    await $.stmt($.wcall([$t9, $t10], "Post", [], C));
    await $.stmt($.wcall([$t9, $t10], "RefreshRecord", [], C));
    await $.wset([$t9, $t10], "CID", (await $.mv((await $.wcall([$t9, $t10], "FieldByName", ["id"], C)), "asInteger")), C);
  }
  {
    const $t11 = (await $.v(C, "DMResponsibilityBlank"));
    const $t12 = (await $.wv([$t11], "DSins_contract_responsibility", C, false));
    await $.stmt($.wcall([$t11, $t12], "Edit", [], C));
    await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["cid"], C)), "AsFloat", (await $.wv([$t11, $t12], "CID", C, false)));
    await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["close_prefix"], C)), "AsFloat", 0);
    await $.mset((await $.wcall([$t11, $t12], "FieldByName", ["TYPEID"], C)), "AsFloat", 13);
    await $.stmt($.wcall([$t11, $t12], "Post", [], C));
    await $.stmt($.wcall([$t11, $t12], "RefreshRecord", [], C));
  }
  {
    const $t13 = (await $.v(C, "DMResponsibilityBlank"));
    const $t14 = (await $.wv([$t13], "ins_common", C, false));
    await $.wset([$t13, $t14], "c_acc", (await $.wcall([$t13, $t14], "CallIntegerFunction", ["get_acc_id", [(await $.wv([$t13, $t14], "CID", C, false))]], C)), { get: async () => L0["c_acc"], set: async (v) => { L0["c_acc"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t13, $t14], "c_acc", { get: async () => L0["c_acc"], set: async (v) => { L0["c_acc"] = v; }, local: true }, false)), 0))) {
      await $.stmt((await $.wcall([$t13, $t14], "CallProcedure", ["account_open", [(await $.wv([$t13, $t14], "CID", C, false))]], C)));
    }
  }
  await $.mcall((await $.v(C, "FrmResponsibilityBlank")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResponsibilityBlank", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmResponsibilityBlank")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmResponsibilityBlank", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "loadPlugin", ["Reinsurance.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmResponsibilityBlank", (await $.mcall((await $.v(C, "TFrmResponsibilityBlank")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
