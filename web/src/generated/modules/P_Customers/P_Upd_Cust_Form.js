// Generated from P_Upd_Cust_Form.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_Upd_Cust_Form", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "lDialogs", "StdCtrls", "DBCtrls", "Mask", "ComCtrls", "ExtCtrls", "P_Datamod_Unit"]);
  const C = [U];
  U.defClass("TP_Upd_Cust", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "passp_id": {"name": "passp_id", "type": "TEdit"}, "userid": {"name": "userid", "type": "TEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label17": {"name": "Label17", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "editmobil": {"name": "EditMobil", "type": "TMaskEdit"}, "label18": {"name": "Label18", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "editphone": {"name": "EditPhone", "type": "TMaskEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "adrs_city": {"name": "Adrs_City", "type": "TDBLookupComboBox"}, "label19": {"name": "Label19", "type": "TLabel"}, "adrs_state": {"name": "Adrs_State", "type": "TDBLookupComboBox"}, "label20": {"name": "Label20", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "editadress": {"name": "EditAdress", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "dtpbirthdate": {"name": "DTPBirthDate", "type": "TDateTimePicker"}, "birthplace": {"name": "BirthPlace", "type": "TDBLookupComboBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "editbirthstate": {"name": "EditBirthState", "type": "TDBLookupComboBox"}, "label12": {"name": "Label12", "type": "TLabel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "editserial": {"name": "EditSerial", "type": "TEdit"}, "editpassport": {"name": "EditPassport", "type": "TEdit"}, "label29": {"name": "Label29", "type": "TLabel"}, "dtpickerpasp": {"name": "DTPickerPasp", "type": "TDateTimePicker"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "editbyrname": {"name": "EditByrName", "type": "TEdit"}, "label8": {"name": "Label8", "type": "TLabel"}, "chbox": {"name": "ChBox", "type": "TCheckBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "cboxsex": {"name": "CBoxSex", "type": "TComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TComboBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "dblgroup": {"name": "dblGroup", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dblcboxvidsob": {"name": "DBLCBoxVidSob", "type": "TDBLookupComboBox"}, "label16": {"name": "Label16", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "dblcboxprinad": {"name": "DBLCBoxPrinad", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("P_Upd_Cust", null, "TP_Upd_Cust");
  });
  U.method("TP_Upd_Cust", "SelectSettings", async function SelectSettings(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mv((await $.v(C, "P_Datamodule")), "P_Customers"));
    await $.mset((await $.wv([$t1], "EditByrName", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["CUST_NAME"], C)), "AsString")));
    if ($.truthy($.eq((await $.mv((await $.wcall([$t1], "FieldByName", ["NEREZIDENT"], C)), "AsInteger")), 1))) {
      await $.mset((await $.wv([$t1], "chbox", C, false)), "Checked", (await $.wv([$t1], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t1], "chbox", C, false)), "Checked", (await $.wv([$t1], "false", C, false)));
    }
    await $.mset((await $.wv([$t1], "BirthPlace", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["BIRTHPLACE"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "DTPBirthDate", C, false)), "Date", (await $.wcall([$t1], "Int", [(await $.mv((await $.wcall([$t1], "FieldByName", ["BIRTHDATE"], C)), "AsDateTime"))], C)));
    await $.mset((await $.wv([$t1], "EditBirthState", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["birth_state"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditAdress", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["ADRESS"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["EMAIL"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["passp_number"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["PASSPORT"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Editmobil", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["phone_mob"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Editphone", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["PHONE"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "CBoxFamStatus", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t1], "FieldByName", ["FAM_STATUS"], C)), "AsInteger")));
    await $.mset((await $.wv([$t1], "CBoxSex", C, false)), "ItemIndex", $.sub((await $.mv((await $.wcall([$t1], "FieldByName", ["SEX"], C)), "AsInteger")), 1));
    await $.mset((await $.wv([$t1], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["email"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "dblGroup", C, false)), "KeyValue", (await $.mv((await $.wcall([$t1], "FieldByName", ["group_klie"], C)), "AsVariant")));
    await $.mset((await $.wv([$t1], "adrs_city", C, false)), "KeyValue", (await $.mv((await $.wcall([$t1], "FieldByName", ["ADRS_CITY"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "adrs_state", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["ADRS_STATE"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "DTPickerPasp", C, false)), "Date", (await $.wcall([$t1], "Int", [(await $.mv((await $.wcall([$t1], "FieldByName", ["Passp_date"], C)), "AsDateTime"))], C)));
    await $.mset((await $.wv([$t1], "DBLCBoxVidSob", C, false)), "KeyValue", (await $.mv((await $.wcall([$t1], "FieldByName", ["Vid_Sob"], C)), "AsVariant")));
    await $.mset((await $.wv([$t1], "DBLCBoxPrinad", C, false)), "KeyValue", (await $.mv((await $.wcall([$t1], "FieldByName", ["Prinad"], C)), "AsVariant")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TP_Upd_Cust", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "userid")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "P_Customers")), "FieldByName", ["ID"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Upd_Cust", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_cust_name": '', "p_passport": '', "p_birthdate": 0, "p_birthplace": '', "p_fam_status": 0, "p_adress": '', "p_workplace": '', "p_wage": 0, "p_phone": '', "p_email": '', "p_sex": 0, "p_passp_number": '', "p_adrs_state": '', "p_adrs_city": '', "p_birth_state": '', "p_phone_mob": '', "p_id": '', "p_pasp_date": 0, "p_nerezident": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "EditSerial")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "EditPassport")), "Text")), "")))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Pasport №  daxil edin!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLCBoxVidSob")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Mülkiyyət növünü daxil edin"])));
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditByrName")), "Text"))])), "")), async () => ($.ne((await $.mv((await $.v(C, "CBoxSex")), "Text")), "")))), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditAdress")), "Text"))])), "")))), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditMobil")), "Text"))])), "")))), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditPhone")), "Text"))])), "")))))) {
    L0["p_cust_name"] = (await $.mv((await $.v(C, "EditByrName")), "Text"));
    L0["p_passport"] = ((await $.mv((await $.v(C, "EditPassport")), "Text")));
    L0["p_birthdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPBirthDate")), "DateTime"))]))]));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "BirthPlace")), "keyvalue"));
    L0["p_adress"] = (await $.mv((await $.v(C, "EditAdress")), "Text"));
    L0["p_phone"] = (await $.mv((await $.v(C, "EditPhone")), "Text"));
    L0["p_email"] = (await $.mv((await $.v(C, "EditEmail")), "Text"));
    L0["p_passp_number"] = (await $.mv((await $.v(C, "EditSerial")), "text"));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "birthplace")), "keyvalue"));
    L0["p_birth_state"] = (await $.mv((await $.v(C, "Editbirthstate")), "keyvalue"));
    L0["p_pasp_date"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPickerPasp")), "DateTime"))]))]));
    L0["p_phone_mob"] = (await $.mv((await $.v(C, "Editmobil")), "Text"));
    L0["p_id"] = (await $.mv((await $.v(C, "userid")), "text"));
    L0["p_adrs_state"] = (await $.mv((await $.v(C, "adrs_state")), "Text"));
    L0["p_adrs_city"] = (await $.mv((await $.v(C, "adrs_city")), "Text"));
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
    if ($.truthy($.eq((await $.mv((await $.v(C, "chbox")), "Checked")), true))) {
      L0["p_nerezident"] = 1;
    } else {
      L0["p_nerezident"] = 0;
    }
    {
      const $t2 = (await $.wobj(C, "P_DataModule"));
      await $.stmt((await $.mcall((await $.wv([$t2], "phys_fs_customers", C, false)), "CallIntegerFunction", ["upd_p_customes", [(await $.wv([$t2], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false)), (await $.wv([$t2], "p_cust_name", { get: async () => L0["p_cust_name"], set: async (v) => { L0["p_cust_name"] = v; }, local: true }, false)), (await $.wv([$t2], "p_passp_number", { get: async () => L0["p_passp_number"], set: async (v) => { L0["p_passp_number"] = v; }, local: true }, false)), (await $.wv([$t2], "p_birthdate", { get: async () => L0["p_birthdate"], set: async (v) => { L0["p_birthdate"] = v; }, local: true }, false)), (await $.wv([$t2], "p_birthplace", { get: async () => L0["p_birthplace"], set: async (v) => { L0["p_birthplace"] = v; }, local: true }, false)), (await $.wv([$t2], "p_fam_status", { get: async () => L0["p_fam_status"], set: async (v) => { L0["p_fam_status"] = v; }, local: true }, false)), (await $.wv([$t2], "p_adress", { get: async () => L0["p_adress"], set: async (v) => { L0["p_adress"] = v; }, local: true }, false)), (await $.wv([$t2], "p_phone", { get: async () => L0["p_phone"], set: async (v) => { L0["p_phone"] = v; }, local: true }, false)), (await $.wv([$t2], "p_email", { get: async () => L0["p_email"], set: async (v) => { L0["p_email"] = v; }, local: true }, false)), (await $.wv([$t2], "p_sex", { get: async () => L0["p_sex"], set: async (v) => { L0["p_sex"] = v; }, local: true }, false)), (await $.wv([$t2], "p_passport", { get: async () => L0["p_passport"], set: async (v) => { L0["p_passport"] = v; }, local: true }, false)), (await $.wv([$t2], "p_adrs_state", { get: async () => L0["p_adrs_state"], set: async (v) => { L0["p_adrs_state"] = v; }, local: true }, false)), (await $.wv([$t2], "p_adrs_city", { get: async () => L0["p_adrs_city"], set: async (v) => { L0["p_adrs_city"] = v; }, local: true }, false)), (await $.wv([$t2], "p_birth_state", { get: async () => L0["p_birth_state"], set: async (v) => { L0["p_birth_state"] = v; }, local: true }, false)), (await $.wv([$t2], "p_phone_mob", { get: async () => L0["p_phone_mob"], set: async (v) => { L0["p_phone_mob"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t2], "dblGroup", C, false)), "KeyValue")), (await $.wv([$t2], "p_pasp_date", { get: async () => L0["p_pasp_date"], set: async (v) => { L0["p_pasp_date"] = v; }, local: true }, false)), (await $.wv([$t2], "p_nerezident", { get: async () => L0["p_nerezident"], set: async (v) => { L0["p_nerezident"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t2], "DBLCBoxVidSob", C, false)), "KeyValue")), (await $.mv((await $.wv([$t2], "DBLCBoxPrinad", C, false)), "KeyValue"))]])));
      await $.mcall((await $.mv((await $.wv([$t2], "P_DataModule", C, false)), "P_Customers")), "Close", []);
      await $.mcall((await $.mv((await $.wv([$t2], "P_DataModule", C, false)), "P_Customers")), "Open", []);
      await $.stmt($.wcall([$t2], "Close", [], C));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Məlumat tam doldurulmayıb"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Upd_Cust", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SelectSettings", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Upd_Cust", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Upd_Cust", "EditByrNameKeyPress", async function EditByrNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t3 = L0["sender"];
        { const $t4 = (await $.wv([$t3], "Tag", C, false));
          if ($.eq($t4, 1)) {
            await $.stmt((await $.wcall([$t3], "SelectNext", [(await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t3], "True", C, false)), (await $.wv([$t3], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "BirthPlaceKeyPress", async function BirthPlaceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t5 = L0["sender"];
        { const $t6 = (await $.wv([$t5], "Tag", C, false));
          if ($.eq($t6, 1)) {
            await $.stmt((await $.wcall([$t5], "SelectNext", [(await $.wv([$t5], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t5], "True", C, false)), (await $.wv([$t5], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "EditBirthStateKeyPress", async function EditBirthStateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t7 = L0["sender"];
        { const $t8 = (await $.wv([$t7], "Tag", C, false));
          if ($.eq($t8, 1)) {
            await $.stmt((await $.wcall([$t7], "SelectNext", [(await $.wv([$t7], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t7], "True", C, false)), (await $.wv([$t7], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "Adrs_StateKeyPress", async function Adrs_StateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "DTPBirthDateKeyPress", async function DTPBirthDateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "EditAdressKeyPress", async function EditAdressKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "CBoxFamStatusKeyPress", async function CBoxFamStatusKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "CBoxSexKeyPress", async function CBoxSexKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "EditSerialKeyPress", async function EditSerialKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "EditPassportKeyPress", async function EditPassportKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "EditMobilKeyPress", async function EditMobilKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "EditPhoneKeyPress", async function EditPhoneKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "EditEmailKeyPress", async function EditEmailKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "Button1KeyPress", async function Button1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "Adrs_CityKeyPress", async function Adrs_CityKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
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
    await L0["key"].set("\u0000");
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TP_Upd_Cust", "ChBoxClick", async function ChBoxClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChBox")), "Checked")), false))) {
    await $.mset((await $.v(C, "Edit1")), "Text", "Azərbaycan");
  }
  {
    const $t33 = (await $.mv((await $.v(C, "P_DataModule")), "ad_country"));
    await $.stmt($.wcall([$t33], "Close", [], C));
    await $.mcall((await $.wv([$t33], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t33], "SQL", C, false)), "Add", [$.add($.add("Select * from countries where cntr_name<>'", (await $.mv((await $.wv([$t33], "Edit1", C, false)), "Text"))), "' ")])));
    await $.stmt($.wcall([$t33], "Open", [], C));
    await $.mset((await $.wv([$t33], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t33], "FieldByName", ["cntr_name"], C)), "AsString")));
    await $.mset((await $.wv([$t33], "EditSerial", C, false)), "Text", " ");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ChBox")), "Checked")), true))) {
    {
      const $t34 = (await $.mv((await $.v(C, "P_DataModule")), "ad_country"));
      await $.stmt($.wcall([$t34], "Close", [], C));
      await $.mcall((await $.wv([$t34], "SQL", C, false)), "Clear", []);
      await $.stmt((await $.mcall((await $.wv([$t34], "SQL", C, false)), "Add", ["Select * from countries  "])));
      await $.stmt($.wcall([$t34], "Open", [], C));
      await $.mset((await $.wv([$t34], "Adrs_State", C, false)), "KeyValue", "Azərbaycan");
      await $.mset((await $.wv([$t34], "Adrs_City", C, false)), "KeyValue", "Bakı");
      await $.mset((await $.wv([$t34], "EditSerial", C, false)), "Text", "AZE");
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Upd_Cust", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.mv((await $.v(C, "P_DataModule")), "cities"));
    await $.stmt($.wcall([$t35], "Close", [], C));
    await $.mcall((await $.wv([$t35], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t35], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from cities c where country_id= ", "'"), (await $.mv((await $.wv([$t35], "dbedit1", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t35], "Open", [], C));
    await $.mset((await $.wv([$t35], "EditBirthState", C, false)), "keyvalue", (await $.mv((await $.wcall([$t35], "fieldbyname", ["city_name"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Upd_Cust", "DBEdit2Change", async function DBEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.mv((await $.v(C, "P_DataModule")), "ad_cities"));
    await $.stmt($.wcall([$t36], "Close", [], C));
    await $.mcall((await $.wv([$t36], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t36], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from cities c where country_id= ", "'"), (await $.mv((await $.wv([$t36], "dbedit2", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t36], "Open", [], C));
    await $.mset((await $.wv([$t36], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t36], "FieldByName", ["city_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Upd_Cust", "EditPassportChange", async function EditPassportChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t37 = (await $.mv((await $.v(C, "P_DataModule")), "pasp"));
    await $.stmt($.wcall([$t37], "Close", [], C));
    await $.mcall((await $.wv([$t37], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t37], "SQL", C, false)), "Add", [$.add($.add("Select * From customers_physical Where passp_number='", (await $.mv((await $.wv([$t37], "EditPassport", C, false)), "text"))), "'")])));
    await $.stmt($.wcall([$t37], "Open", [], C));
    await $.mset((await $.wv([$t37], "passp_id", C, false)), "text", (await $.mv((await $.wcall([$t37], "fieldbyname", ["id"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
