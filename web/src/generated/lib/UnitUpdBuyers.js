// Generated from UnitUpdBuyers.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitUpdBuyers", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "NLSLocalizer", "StdCtrls", "Buttons", "ComCtrls", "ExtCtrls", "Mask", "DBCtrls", "UnitData", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormUpdBuyers", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "editbyrname": {"name": "EditByrName", "type": "TEdit"}, "dtpbirthdate": {"name": "DTPBirthDate", "type": "TDateTimePicker"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TComboBox"}, "editserial": {"name": "EditSerial", "type": "TEdit"}, "cboxsex": {"name": "CBoxSex", "type": "TComboBox"}, "editworkplace": {"name": "EditWorkPlace", "type": "TEdit"}, "editwage": {"name": "EditWage", "type": "TEdit"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "editpassport": {"name": "EditPassport", "type": "TEdit"}, "adrs_state": {"name": "adrs_state", "type": "TEdit"}, "buyerid": {"name": "buyerid", "type": "TEdit"}, "editmobil": {"name": "Editmobil", "type": "TMaskEdit"}, "editphone": {"name": "EditPhone", "type": "TMaskEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "editstate": {"name": "Editstate", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "birthplace": {"name": "BirthPlace", "type": "TDBLookupComboBox"}, "birthstate": {"name": "birthstate", "type": "TEdit"}, "editadress": {"name": "EditAdress", "type": "TDBLookupComboBox"}, "editcity": {"name": "Editcity", "type": "TDBLookupComboBox"}, "adrs_city": {"name": "adrs_city", "type": "TEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("FormUpdBuyers", null, "TFormUpdBuyers");
  });
  U.method("TFormUpdBuyers", "SelectSetting", async function SelectSetting(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers"));
    await $.mset((await $.wv([$t1], "EditByrName", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["BYR_NAME"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "BirthPlace", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["BIRTHPLACE"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "DTPBirthDate", C, false)), "Date", (await $.wcall([$t1], "Int", [(await $.mv((await $.wcall([$t1], "FieldByName", ["BIRTHDATE"], C)), "AsDateTime"))], C)));
    await $.mset((await $.wv([$t1], "birthstate", C, false)), "text", (await $.mv((await $.wcall([$t1], "FieldByName", ["birth_state"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditAdress", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["ADRESS"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["EMAIL"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["passp_number"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["PASSPORT"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Editmobil", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["phone_mob"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Editphone", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["PHONE"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditWorkPlace", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["WORKPLACE"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "EditWage", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["WAGE"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "CBoxFamStatus", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t1], "FieldByName", ["FAM_STATUS"], C)), "AsInteger")));
    await $.mset((await $.wv([$t1], "CBoxSex", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t1], "FieldByName", ["SEX"], C)), "AsInteger")));
    await $.mset((await $.wv([$t1], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["email"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "adrs_city", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["adrs_city"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "adrs_state", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["adrs_state"], C)), "AsString")));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormUpdBuyers", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SelectSetting", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "BtnAddClick", async function BtnAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_byr_name": '', "p_passport": 0, "p_birthdate": 0, "p_birthplace": '', "p_fam_status": 0, "p_adress": '', "p_workplace": '', "p_wage": 0, "p_phone": '', "p_email": '', "p_sex": 0, "p_passp_number": '', "p_adrs_state": '', "p_adrs_city": '', "p_birth_state": '', "p_phone_mob": '', "p_id": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditByrName")), "Text"))])), ""))) {
    L0["p_byr_name"] = (await $.mv((await $.v(C, "EditByrName")), "Text"));
    L0["p_passport"] = (await $.call(C, "StrtoInt", [(await $.mv((await $.v(C, "EditPassport")), "Text"))]));
    L0["p_birthdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPBirthDate")), "DateTime"))]))]));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "BirthPlace")), "Text"));
    L0["p_adress"] = (await $.mv((await $.v(C, "EditAdress")), "Text"));
    L0["p_workplace"] = (await $.mv((await $.v(C, "EditWorkPlace")), "Text"));
    L0["p_wage"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditWage")), "Text"))]));
    L0["p_phone"] = (await $.mv((await $.v(C, "EditPhone")), "Text"));
    L0["p_email"] = (await $.mv((await $.v(C, "EditEmail")), "Text"));
    L0["p_passp_number"] = (await $.mv((await $.v(C, "EditSerial")), "text"));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "birthplace")), "text"));
    L0["p_birth_state"] = (await $.mv((await $.v(C, "birthstate")), "text"));
    L0["p_phone_mob"] = (await $.mv((await $.v(C, "Editmobil")), "Text"));
    L0["p_id"] = (await $.mv((await $.v(C, "buyerid")), "text"));
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
      const $t2 = (await $.v(C, "DataMod_Buyers"));
      await $.stmt((await $.mcall((await $.wv([$t2], "CC_GENERAL", C, false)), "CallIntegerFunction", ["upd_Buyers", [(await $.wv([$t2], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false)), (await $.wv([$t2], "p_byr_name", { get: async () => L0["p_byr_name"], set: async (v) => { L0["p_byr_name"] = v; }, local: true }, false)), (await $.wv([$t2], "p_passp_number", { get: async () => L0["p_passp_number"], set: async (v) => { L0["p_passp_number"] = v; }, local: true }, false)), (await $.wv([$t2], "p_birthdate", { get: async () => L0["p_birthdate"], set: async (v) => { L0["p_birthdate"] = v; }, local: true }, false)), (await $.wv([$t2], "p_birthplace", { get: async () => L0["p_birthplace"], set: async (v) => { L0["p_birthplace"] = v; }, local: true }, false)), (await $.wv([$t2], "p_fam_status", { get: async () => L0["p_fam_status"], set: async (v) => { L0["p_fam_status"] = v; }, local: true }, false)), (await $.wv([$t2], "p_adress", { get: async () => L0["p_adress"], set: async (v) => { L0["p_adress"] = v; }, local: true }, false)), (await $.wv([$t2], "p_workplace", { get: async () => L0["p_workplace"], set: async (v) => { L0["p_workplace"] = v; }, local: true }, false)), (await $.wv([$t2], "p_wage", { get: async () => L0["p_wage"], set: async (v) => { L0["p_wage"] = v; }, local: true }, false)), (await $.wv([$t2], "p_phone", { get: async () => L0["p_phone"], set: async (v) => { L0["p_phone"] = v; }, local: true }, false)), (await $.wv([$t2], "p_email", { get: async () => L0["p_email"], set: async (v) => { L0["p_email"] = v; }, local: true }, false)), (await $.wv([$t2], "p_sex", { get: async () => L0["p_sex"], set: async (v) => { L0["p_sex"] = v; }, local: true }, false)), (await $.wv([$t2], "p_passport", { get: async () => L0["p_passport"], set: async (v) => { L0["p_passport"] = v; }, local: true }, false)), (await $.wv([$t2], "p_adrs_state", { get: async () => L0["p_adrs_state"], set: async (v) => { L0["p_adrs_state"] = v; }, local: true }, false)), (await $.wv([$t2], "p_adrs_city", { get: async () => L0["p_adrs_city"], set: async (v) => { L0["p_adrs_city"] = v; }, local: true }, false)), (await $.wv([$t2], "p_birth_state", { get: async () => L0["p_birth_state"], set: async (v) => { L0["p_birth_state"] = v; }, local: true }, false)), (await $.wv([$t2], "p_phone_mob", { get: async () => L0["p_phone_mob"], set: async (v) => { L0["p_phone_mob"] = v; }, local: true }, false))]])));
      await $.mcall((await $.wv([$t2], "ODSBuyers", C, false)), "Close", []);
      await $.mcall((await $.wv([$t2], "ODSBuyers", C, false)), "Open", []);
      await $.stmt($.wcall([$t2], "close", [], C));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Boş qalan xanalar var!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "buyerid")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Fieldbyname", ["id"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "birthplaceKeyPress", async function birthplaceKeyPress(Self, p0, p1) {
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
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "DTPBirthDateKeyPress", async function DTPBirthDateKeyPress(Self, p0, p1) {
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
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "CBoxSexKeyPress", async function CBoxSexKeyPress(Self, p0, p1) {
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
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "CBoxFamStatusKeyPress", async function CBoxFamStatusKeyPress(Self, p0, p1) {
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
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "EditAdressKeyPress", async function EditAdressKeyPress(Self, p0, p1) {
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
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "birthplaceChange", async function birthplaceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "DataMod_Buyers")), "country"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from countries c where cntr_name= ", "'"), (await $.mv((await $.wv([$t13], "birthplace", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "dbedit3", C, false)), "Text", (await $.mv((await $.wcall([$t13], "FieldByName", ["id"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "EditByrNameKeyPress", async function EditByrNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t14 = L0["sender"];
        { const $t15 = (await $.wv([$t14], "Tag", C, false));
          if ($.eq($t15, 1)) {
            await $.stmt((await $.wcall([$t14], "SelectNext", [(await $.wv([$t14], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t14], "True", C, false)), (await $.wv([$t14], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t16 = L0["sender"];
        { const $t17 = (await $.wv([$t16], "Tag", C, false));
          if ($.eq($t17, 1)) {
            await $.stmt((await $.wcall([$t16], "SelectNext", [(await $.wv([$t16], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t16], "True", C, false)), (await $.wv([$t16], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "birthstateKeyPress", async function birthstateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t18 = L0["sender"];
        { const $t19 = (await $.wv([$t18], "Tag", C, false));
          if ($.eq($t19, 1)) {
            await $.stmt((await $.wcall([$t18], "SelectNext", [(await $.wv([$t18], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t18], "True", C, false)), (await $.wv([$t18], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "EditSerialKeyPress", async function EditSerialKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t20 = L0["sender"];
        { const $t21 = (await $.wv([$t20], "Tag", C, false));
          if ($.eq($t21, 1)) {
            await $.stmt((await $.wcall([$t20], "SelectNext", [(await $.wv([$t20], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t20], "True", C, false)), (await $.wv([$t20], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "EditPassportKeyPress", async function EditPassportKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t22 = L0["sender"];
        { const $t23 = (await $.wv([$t22], "Tag", C, false));
          if ($.eq($t23, 1)) {
            await $.stmt((await $.wcall([$t22], "SelectNext", [(await $.wv([$t22], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t22], "True", C, false)), (await $.wv([$t22], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "DBEdit2KeyPress", async function DBEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t24 = L0["sender"];
        { const $t25 = (await $.wv([$t24], "Tag", C, false));
          if ($.eq($t25, 1)) {
            await $.stmt((await $.wcall([$t24], "SelectNext", [(await $.wv([$t24], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t24], "True", C, false)), (await $.wv([$t24], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "adrs_cityKeyPress", async function adrs_cityKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t26 = L0["sender"];
        { const $t27 = (await $.wv([$t26], "Tag", C, false));
          if ($.eq($t27, 1)) {
            await $.stmt((await $.wcall([$t26], "SelectNext", [(await $.wv([$t26], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t26], "True", C, false)), (await $.wv([$t26], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "adrs_stateKeyPress", async function adrs_stateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t28 = L0["sender"];
        { const $t29 = (await $.wv([$t28], "Tag", C, false));
          if ($.eq($t29, 1)) {
            await $.stmt((await $.wcall([$t28], "SelectNext", [(await $.wv([$t28], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t28], "True", C, false)), (await $.wv([$t28], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "EditWorkPlaceKeyPress", async function EditWorkPlaceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t30 = L0["sender"];
        { const $t31 = (await $.wv([$t30], "Tag", C, false));
          if ($.eq($t31, 1)) {
            await $.stmt((await $.wcall([$t30], "SelectNext", [(await $.wv([$t30], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t30], "True", C, false)), (await $.wv([$t30], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "EditWageKeyPress", async function EditWageKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t32 = L0["sender"];
        { const $t33 = (await $.wv([$t32], "Tag", C, false));
          if ($.eq($t33, 1)) {
            await $.stmt((await $.wcall([$t32], "SelectNext", [(await $.wv([$t32], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t32], "True", C, false)), (await $.wv([$t32], "True", C, false))], C)));
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
  U.method("TFormUpdBuyers", "EditmobilKeyPress", async function EditmobilKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t34 = L0["sender"];
        { const $t35 = (await $.wv([$t34], "Tag", C, false));
          if ($.eq($t35, 1)) {
            await $.stmt((await $.wcall([$t34], "SelectNext", [(await $.wv([$t34], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t34], "True", C, false)), (await $.wv([$t34], "True", C, false))], C)));
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
  U.method("TFormUpdBuyers", "EditPhoneKeyPress", async function EditPhoneKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t36 = L0["sender"];
        { const $t37 = (await $.wv([$t36], "Tag", C, false));
          if ($.eq($t37, 1)) {
            await $.stmt((await $.wcall([$t36], "SelectNext", [(await $.wv([$t36], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t36], "True", C, false)), (await $.wv([$t36], "True", C, false))], C)));
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
  U.method("TFormUpdBuyers", "EditEmailKeyPress", async function EditEmailKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t38 = L0["sender"];
        { const $t39 = (await $.wv([$t38], "Tag", C, false));
          if ($.eq($t39, 1)) {
            await $.stmt((await $.wcall([$t38], "SelectNext", [(await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t38], "True", C, false)), (await $.wv([$t38], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdBuyers", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_byr_name": '', "p_passport": 0, "p_birthdate": 0, "p_birthplace": '', "p_fam_status": 0, "p_adress": '', "p_workplace": '', "p_wage": 0, "p_phone": '', "p_email": '', "p_sex": 0, "p_passp_number": '', "p_adrs_state": '', "p_adrs_city": '', "p_birth_state": '', "p_phone_mob": '', "p_id": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditByrName")), "Text"))])), ""))) {
    L0["p_byr_name"] = (await $.mv((await $.v(C, "EditByrName")), "Text"));
    L0["p_passport"] = (await $.call(C, "StrtoInt", [(await $.mv((await $.v(C, "EditPassport")), "Text"))]));
    L0["p_birthdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPBirthDate")), "DateTime"))]))]));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "BirthPlace")), "Text"));
    L0["p_adress"] = (await $.mv((await $.v(C, "EditAdress")), "Text"));
    L0["p_workplace"] = (await $.mv((await $.v(C, "EditWorkPlace")), "Text"));
    L0["p_wage"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditWage")), "Text"))]));
    L0["p_phone"] = (await $.mv((await $.v(C, "EditPhone")), "Text"));
    L0["p_email"] = (await $.mv((await $.v(C, "EditEmail")), "Text"));
    L0["p_passp_number"] = (await $.mv((await $.v(C, "EditSerial")), "text"));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "birthplace")), "text"));
    L0["p_birth_state"] = (await $.mv((await $.v(C, "birthstate")), "text"));
    L0["p_phone_mob"] = (await $.mv((await $.v(C, "Editmobil")), "Text"));
    L0["p_id"] = (await $.mv((await $.v(C, "buyerid")), "text"));
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
      const $t40 = (await $.v(C, "DataMod_Buyers"));
      await $.stmt((await $.mcall((await $.wv([$t40], "CC_GENERAL", C, false)), "CallIntegerFunction", ["upd_Buyers", [(await $.wv([$t40], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false)), (await $.wv([$t40], "p_byr_name", { get: async () => L0["p_byr_name"], set: async (v) => { L0["p_byr_name"] = v; }, local: true }, false)), (await $.wv([$t40], "p_passp_number", { get: async () => L0["p_passp_number"], set: async (v) => { L0["p_passp_number"] = v; }, local: true }, false)), (await $.wv([$t40], "p_birthdate", { get: async () => L0["p_birthdate"], set: async (v) => { L0["p_birthdate"] = v; }, local: true }, false)), (await $.wv([$t40], "p_birthplace", { get: async () => L0["p_birthplace"], set: async (v) => { L0["p_birthplace"] = v; }, local: true }, false)), (await $.wv([$t40], "p_fam_status", { get: async () => L0["p_fam_status"], set: async (v) => { L0["p_fam_status"] = v; }, local: true }, false)), (await $.wv([$t40], "p_adress", { get: async () => L0["p_adress"], set: async (v) => { L0["p_adress"] = v; }, local: true }, false)), (await $.wv([$t40], "p_workplace", { get: async () => L0["p_workplace"], set: async (v) => { L0["p_workplace"] = v; }, local: true }, false)), (await $.wv([$t40], "p_wage", { get: async () => L0["p_wage"], set: async (v) => { L0["p_wage"] = v; }, local: true }, false)), (await $.wv([$t40], "p_phone", { get: async () => L0["p_phone"], set: async (v) => { L0["p_phone"] = v; }, local: true }, false)), (await $.wv([$t40], "p_email", { get: async () => L0["p_email"], set: async (v) => { L0["p_email"] = v; }, local: true }, false)), (await $.wv([$t40], "p_sex", { get: async () => L0["p_sex"], set: async (v) => { L0["p_sex"] = v; }, local: true }, false)), (await $.wv([$t40], "p_passport", { get: async () => L0["p_passport"], set: async (v) => { L0["p_passport"] = v; }, local: true }, false)), (await $.wv([$t40], "p_adrs_state", { get: async () => L0["p_adrs_state"], set: async (v) => { L0["p_adrs_state"] = v; }, local: true }, false)), (await $.wv([$t40], "p_adrs_city", { get: async () => L0["p_adrs_city"], set: async (v) => { L0["p_adrs_city"] = v; }, local: true }, false)), (await $.wv([$t40], "p_birth_state", { get: async () => L0["p_birth_state"], set: async (v) => { L0["p_birth_state"] = v; }, local: true }, false)), (await $.wv([$t40], "p_phone_mob", { get: async () => L0["p_phone_mob"], set: async (v) => { L0["p_phone_mob"] = v; }, local: true }, false))]])));
      await $.mcall((await $.wv([$t40], "ODSBuyers", C, false)), "Close", []);
      await $.mcall((await $.wv([$t40], "ODSBuyers", C, false)), "Open", []);
      await $.stmt($.wcall([$t40], "close", [], C));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Boş qalan xanalar var!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "DBEdit3Change", async function DBEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t41 = (await $.mv((await $.v(C, "DataMod_Buyers")), "cities"));
    await $.stmt($.wcall([$t41], "Close", [], C));
    await $.mcall((await $.wv([$t41], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t41], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from cities c where country_id= ", "'"), (await $.mv((await $.wv([$t41], "dbedit3", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t41], "Open", [], C));
    await $.mset((await $.wv([$t41], "birthstate", C, false)), "text", (await $.mv((await $.wcall([$t41], "fieldbyname", ["city_name"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "EditstateClick", async function EditstateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "birthstate")), "text", (await $.mv((await $.v(C, "Editstate")), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "EditcityClick", async function EditcityClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "adrs_city")), "text", (await $.mv((await $.v(C, "Editcity")), "keyvalue")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "DBEdit4Change", async function DBEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t42 = (await $.mv((await $.v(C, "DataMod_Buyers")), "ad_cities"));
    await $.stmt($.wcall([$t42], "Close", [], C));
    await $.mcall((await $.wv([$t42], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t42], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from cities c where country_id= ", "'"), (await $.mv((await $.wv([$t42], "dbedit4", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t42], "Open", [], C));
    await $.mset((await $.wv([$t42], "adrs_city", C, false)), "text", (await $.mv((await $.wcall([$t42], "fieldbyname", ["city_name"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdBuyers", "EditstateKeyPress", async function EditstateKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t43 = L0["sender"];
        { const $t44 = (await $.wv([$t43], "Tag", C, false));
          if ($.eq($t44, 1)) {
            await $.stmt((await $.wcall([$t43], "SelectNext", [(await $.wv([$t43], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t43], "True", C, false)), (await $.wv([$t43], "True", C, false))], C)));
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
  U.method("TFormUpdBuyers", "EditcityKeyPress", async function EditcityKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t45 = L0["sender"];
        { const $t46 = (await $.wv([$t45], "Tag", C, false));
          if ($.eq($t46, 1)) {
            await $.stmt((await $.wcall([$t45], "SelectNext", [(await $.wv([$t45], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t45], "True", C, false)), (await $.wv([$t45], "True", C, false))], C)));
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
  return U;
}
