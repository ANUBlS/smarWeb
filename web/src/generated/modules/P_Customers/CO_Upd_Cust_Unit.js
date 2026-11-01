// Generated from CO_Upd_Cust_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_Upd_Cust_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "Mask", "ComCtrls", "ExtCtrls", "CO_datamod_impl"]);
  const C = [U];
  U.defClass("TCO_Upd_Cust", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "editbyrname": {"name": "EditByrName", "type": "TEdit"}, "dtpbirthdate": {"name": "DTPBirthDate", "type": "TDateTimePicker"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TComboBox"}, "editserial": {"name": "EditSerial", "type": "TEdit"}, "cboxsex": {"name": "CBoxSex", "type": "TComboBox"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "editpassport": {"name": "EditPassport", "type": "TEdit"}, "adrs_city": {"name": "adrs_city", "type": "TEdit"}, "editphone": {"name": "EditPhone", "type": "TMaskEdit"}, "editmobil": {"name": "Editmobil", "type": "TMaskEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "editbirthstate": {"name": "EditBirthState", "type": "TDBLookupComboBox"}, "birthplace": {"name": "BirthPlace", "type": "TDBLookupComboBox"}, "adrs_state": {"name": "adrs_state", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "editadress": {"name": "EditAdress", "type": "TDBLookupComboBox"}, "passp_id": {"name": "passp_id", "type": "TEdit"}, "chbox": {"name": "chbox", "type": "TCheckBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "userid": {"name": "userid", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("CO_Upd_Cust", null, "TCO_Upd_Cust");
  });
  U.method("TCO_Upd_Cust", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "CO_Datamod")), "physical_customers"));
    await $.mset((await $.wv([$t1], "EditByrName", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["BYR_NAME"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "BirthPlace", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["BIRTHPLACE"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "DTPBirthDate", C, false)), "Date", (await $.wcall([$t1], "Int", [(await $.mv((await $.wcall([$t1], "FieldByName", ["BIRTHDATE"], C)), "AsDateTime"))], C)));
    await $.mset((await $.wv([$t1], "EditBirthState", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["birth_state"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditAdress", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["ADRESS"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["EMAIL"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["passp_number"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["PASSPORT"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Editmobil", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["phone_mob"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Editphone", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["PHONE"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "CBoxFamStatus", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t1], "FieldByName", ["FAM_STATUS"], C)), "AsInteger")));
    await $.mset((await $.wv([$t1], "CBoxSex", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t1], "FieldByName", ["SEX"], C)), "AsInteger")));
    await $.mset((await $.wv([$t1], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["email"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "adrs_city", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["adrs_state"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "adrs_state", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["adrs_city"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "userid", C, false)), "text", (await $.mv((await $.wcall([$t1], "fieldbyname", ["id"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Upd_Cust", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Upd_Cust", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_byr_name": '', "p_passport": 0, "p_birthdate": 0, "p_birthplace": '', "p_fam_status": 0, "p_adress": '', "p_phone": '', "p_email": '', "p_sex": 0, "p_passp_number": '', "p_adrs_state": '', "p_adrs_city": '', "p_birth_state": '', "p_phone_mob": '', "p_id": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditByrName")), "Text"))])), ""))) {
    L0["p_byr_name"] = (await $.mv((await $.v(C, "EditByrName")), "Text"));
    L0["p_passport"] = (await $.call(C, "StrtoInt", [(await $.mv((await $.v(C, "EditPassport")), "Text"))]));
    L0["p_birthdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPBirthDate")), "DateTime"))]))]));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "BirthPlace")), "Text"));
    L0["p_adress"] = (await $.mv((await $.v(C, "EditAdress")), "Text"));
    L0["p_phone"] = (await $.mv((await $.v(C, "EditPhone")), "Text"));
    L0["p_email"] = (await $.mv((await $.v(C, "EditEmail")), "Text"));
    L0["p_passp_number"] = (await $.mv((await $.v(C, "EditSerial")), "text"));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "birthplace")), "text"));
    L0["p_birth_state"] = (await $.mv((await $.v(C, "Editbirthstate")), "text"));
    L0["p_phone_mob"] = (await $.mv((await $.v(C, "Editmobil")), "Text"));
    L0["p_id"] = (await $.mv((await $.v(C, "userid")), "text"));
    L0["p_adrs_state"] = (await $.mv((await $.v(C, "adrs_state")), "text"));
    L0["p_adrs_city"] = (await $.mv((await $.v(C, "adrs_city")), "text"));
    if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), "evli"))) {
      L0["p_fam_status"] = 1;
    } else {
      L0["p_fam_status"] = 2;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxSex")), "Text")), "kişi"))) {
      L0["p_sex"] = 1;
    } else {
      L0["p_sex"] = 2;
    }
    {
      const $t2 = (await $.wobj(C, "CO_DataMod"));
      await $.stmt((await $.mcall((await $.wv([$t2], "Physical_Customer", C, false)), "CallProcedure", ["upd_customers", [(await $.wv([$t2], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false)), (await $.wv([$t2], "p_byr_name", { get: async () => L0["p_byr_name"], set: async (v) => { L0["p_byr_name"] = v; }, local: true }, false)), (await $.wv([$t2], "p_passp_number", { get: async () => L0["p_passp_number"], set: async (v) => { L0["p_passp_number"] = v; }, local: true }, false)), (await $.wv([$t2], "p_birthdate", { get: async () => L0["p_birthdate"], set: async (v) => { L0["p_birthdate"] = v; }, local: true }, false)), (await $.wv([$t2], "p_birthplace", { get: async () => L0["p_birthplace"], set: async (v) => { L0["p_birthplace"] = v; }, local: true }, false)), (await $.wv([$t2], "p_fam_status", { get: async () => L0["p_fam_status"], set: async (v) => { L0["p_fam_status"] = v; }, local: true }, false)), (await $.wv([$t2], "p_adress", { get: async () => L0["p_adress"], set: async (v) => { L0["p_adress"] = v; }, local: true }, false)), (await $.wv([$t2], "p_phone", { get: async () => L0["p_phone"], set: async (v) => { L0["p_phone"] = v; }, local: true }, false)), (await $.wv([$t2], "p_email", { get: async () => L0["p_email"], set: async (v) => { L0["p_email"] = v; }, local: true }, false)), (await $.wv([$t2], "p_sex", { get: async () => L0["p_sex"], set: async (v) => { L0["p_sex"] = v; }, local: true }, false)), (await $.wv([$t2], "p_passport", { get: async () => L0["p_passport"], set: async (v) => { L0["p_passport"] = v; }, local: true }, false)), (await $.wv([$t2], "p_adrs_state", { get: async () => L0["p_adrs_state"], set: async (v) => { L0["p_adrs_state"] = v; }, local: true }, false)), (await $.wv([$t2], "p_adrs_city", { get: async () => L0["p_adrs_city"], set: async (v) => { L0["p_adrs_city"] = v; }, local: true }, false)), (await $.wv([$t2], "p_birth_state", { get: async () => L0["p_birth_state"], set: async (v) => { L0["p_birth_state"] = v; }, local: true }, false)), (await $.wv([$t2], "p_phone_mob", { get: async () => L0["p_phone_mob"], set: async (v) => { L0["p_phone_mob"] = v; }, local: true }, false))]])));
      await $.mcall((await $.mv((await $.wv([$t2], "CO_DataMod", C, false)), "physical_customers")), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t2], "CO_DataMod", C, false)), "physical_customers")), "Open", []);
      await $.stmt($.wcall([$t2], "close", [], C));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Boş qalan xanalar var!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Upd_Cust", "chboxClick", async function chboxClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "chbox")), "checked")), false))) {
    await $.mset((await $.v(C, "edit2")), "text", "Azərbaycan");
  }
  {
    const $t3 = (await $.mv((await $.v(C, "CO_Datamod")), "ad_country"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from countries c where cntr_name<> ", "'"), (await $.mv((await $.wv([$t3], "edit2", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.wv([$t3], "editadress", C, false)), "keyvalue", (await $.mv((await $.wcall([$t3], "fieldbyname", ["cntr_name"], C)), "asstring")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "chbox")), "checked")), true))) {
    {
      const $t4 = (await $.mv((await $.v(C, "CO_Datamod")), "ad_country"));
      await $.stmt($.wcall([$t4], "Close", [], C));
      await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
      await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", "Select c.rowid ,c.* from countries c ");
      await $.stmt($.wcall([$t4], "Open", [], C));
      await $.mset((await $.wv([$t4], "EditAdress", C, false)), "Keyvalue", "Azərbaycan");
      await $.mset((await $.wv([$t4], "adrs_state", C, false)), "Keyvalue", "Bakı");
      await $.mset((await $.wv([$t4], "EditSerial", C, false)), "Text", "AZE");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Upd_Cust", "Edit4Change", async function Edit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mv((await $.v(C, "CO_Datamod")), "ad_country"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t5], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from countries c where cntr_name<> ", "'"), (await $.mv((await $.wv([$t5], "edit2", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t5], "Open", [], C));
    await $.mset((await $.wv([$t5], "editadress", C, false)), "keyvalue", (await $.mv((await $.wcall([$t5], "fieldbyname", ["cntr_name"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Upd_Cust", "BirthPlaceClick", async function BirthPlaceClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "BirthPlace")), "Keyvalue")), "Azərbaycan"))) {
    await $.mset((await $.v(C, "EditSerial")), "Text", "AZE");
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "BirthPlace")), "Keyvalue")), "Azərbaycan"))) {
    await $.mset((await $.v(C, "EditSerial")), "Text", " ");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Upd_Cust", "DBEdit2Change", async function DBEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "CO_DataMod")), "ad_cities"));
    await $.stmt($.wcall([$t6], "Close", [], C));
    await $.mcall((await $.wv([$t6], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t6], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from cities c where country_id= ", "'"), (await $.mv((await $.wv([$t6], "dbedit2", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t6], "Open", [], C));
    await $.mset((await $.wv([$t6], "adrs_state", C, false)), "keyvalue", (await $.mv((await $.wcall([$t6], "fieldbyname", ["city_name"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Upd_Cust", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.mv((await $.v(C, "CO_Datamod")), "cities"));
    await $.stmt($.wcall([$t7], "Close", [], C));
    await $.mcall((await $.wv([$t7], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t7], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from cities c where country_id= ", "'"), (await $.mv((await $.wv([$t7], "dbedit1", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t7], "Open", [], C));
    await $.mset((await $.wv([$t7], "EditBirthState", C, false)), "keyvalue", (await $.mv((await $.wcall([$t7], "fieldbyname", ["city_name"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Upd_Cust", "Edit2Change", async function Edit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.mv((await $.v(C, "CO_Datamod")), "ad_country"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t8], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from countries c where cntr_name<> ", "'"), (await $.mv((await $.wv([$t8], "edit2", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t8], "Open", [], C));
    await $.mset((await $.wv([$t8], "editadress", C, false)), "keyvalue", (await $.mv((await $.wcall([$t8], "fieldbyname", ["cntr_name"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_Upd_Cust", "EditByrNameKeyPress", async function EditByrNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t9 = L0["sender"];
        { const $t10 = (await $.wv([$t9], "Tag", C, false));
          if ($.eq($t10, 1)) {
            await $.stmt((await $.wcall([$t9], "SelectNext", [(await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t9], "True", C, false)), (await $.wv([$t9], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "BirthPlaceKeyPress", async function BirthPlaceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t11 = L0["sender"];
        { const $t12 = (await $.wv([$t11], "Tag", C, false));
          if ($.eq($t12, 1)) {
            await $.stmt((await $.wcall([$t11], "SelectNext", [(await $.wv([$t11], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t11], "True", C, false)), (await $.wv([$t11], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "EditBirthStateKeyPress", async function EditBirthStateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t13 = L0["sender"];
        { const $t14 = (await $.wv([$t13], "Tag", C, false));
          if ($.eq($t14, 1)) {
            await $.stmt((await $.wcall([$t13], "SelectNext", [(await $.wv([$t13], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t13], "True", C, false)), (await $.wv([$t13], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "DTPBirthDateKeyPress", async function DTPBirthDateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t15 = L0["sender"];
        { const $t16 = (await $.wv([$t15], "Tag", C, false));
          if ($.eq($t16, 1)) {
            await $.stmt((await $.wcall([$t15], "SelectNext", [(await $.wv([$t15], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t15], "True", C, false)), (await $.wv([$t15], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "CBoxSexKeyPress", async function CBoxSexKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t17 = L0["sender"];
        { const $t18 = (await $.wv([$t17], "Tag", C, false));
          if ($.eq($t18, 1)) {
            await $.stmt((await $.wcall([$t17], "SelectNext", [(await $.wv([$t17], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t17], "True", C, false)), (await $.wv([$t17], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "EditAdressKeyPress", async function EditAdressKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t19 = L0["sender"];
        { const $t20 = (await $.wv([$t19], "Tag", C, false));
          if ($.eq($t20, 1)) {
            await $.stmt((await $.wcall([$t19], "SelectNext", [(await $.wv([$t19], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t19], "True", C, false)), (await $.wv([$t19], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "adrs_stateKeyPress", async function adrs_stateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t21 = L0["sender"];
        { const $t22 = (await $.wv([$t21], "Tag", C, false));
          if ($.eq($t22, 1)) {
            await $.stmt((await $.wcall([$t21], "SelectNext", [(await $.wv([$t21], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t21], "True", C, false)), (await $.wv([$t21], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "CBoxFamStatusKeyPress", async function CBoxFamStatusKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t23 = L0["sender"];
        { const $t24 = (await $.wv([$t23], "Tag", C, false));
          if ($.eq($t24, 1)) {
            await $.stmt((await $.wcall([$t23], "SelectNext", [(await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t23], "True", C, false)), (await $.wv([$t23], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "adrs_cityKeyPress", async function adrs_cityKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t25 = L0["sender"];
        { const $t26 = (await $.wv([$t25], "Tag", C, false));
          if ($.eq($t26, 1)) {
            await $.stmt((await $.wcall([$t25], "SelectNext", [(await $.wv([$t25], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t25], "True", C, false)), (await $.wv([$t25], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "EditSerialKeyPress", async function EditSerialKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t27 = L0["sender"];
        { const $t28 = (await $.wv([$t27], "Tag", C, false));
          if ($.eq($t28, 1)) {
            await $.stmt((await $.wcall([$t27], "SelectNext", [(await $.wv([$t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t27], "True", C, false)), (await $.wv([$t27], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "EditPassportKeyPress", async function EditPassportKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t29 = L0["sender"];
        { const $t30 = (await $.wv([$t29], "Tag", C, false));
          if ($.eq($t30, 1)) {
            await $.stmt((await $.wcall([$t29], "SelectNext", [(await $.wv([$t29], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t29], "True", C, false)), (await $.wv([$t29], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "EditmobilKeyPress", async function EditmobilKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t31 = L0["sender"];
        { const $t32 = (await $.wv([$t31], "Tag", C, false));
          if ($.eq($t32, 1)) {
            await $.stmt((await $.wcall([$t31], "SelectNext", [(await $.wv([$t31], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t31], "True", C, false)), (await $.wv([$t31], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "EditEmailKeyPress", async function EditEmailKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t33 = L0["sender"];
        { const $t34 = (await $.wv([$t33], "Tag", C, false));
          if ($.eq($t34, 1)) {
            await $.stmt((await $.wcall([$t33], "SelectNext", [(await $.wv([$t33], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t33], "True", C, false)), (await $.wv([$t33], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "EditPhoneKeyPress", async function EditPhoneKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t35 = L0["sender"];
        { const $t36 = (await $.wv([$t35], "Tag", C, false));
          if ($.eq($t36, 1)) {
            await $.stmt((await $.wcall([$t35], "SelectNext", [(await $.wv([$t35], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCO_Upd_Cust", "Button1KeyPress", async function Button1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_return"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t37 = L0["sender"];
        { const $t38 = (await $.wv([$t37], "Tag", C, false));
          if ($.eq($t38, 1)) {
            await $.stmt((await $.wcall([$t37], "SelectNext", [(await $.wv([$t37], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t37], "True", C, false)), (await $.wv([$t37], "True", C, false))], C)));
          }
        }
      }
    }
  }
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
