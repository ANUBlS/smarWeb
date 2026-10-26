// Generated from CustMgrUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustMgrUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Oracle", "Db", "OracleData", "StdCtrls", "Buttons", "ComCtrls", "ExtCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "sboapiDataModuleImpl", "ContractAddEditImpl"]);
  const C = [U];
  U.defClass("TCustMgrForm", "TForm", {"countries": {"name": "Countries", "type": "TOracleDataSet"}, "cc_general": {"name": "cc_general", "type": "TOraclePackage"}, "panelmain": {"name": "PanelMain", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "editbyrname": {"name": "EditByrName", "type": "TEdit"}, "birthstate": {"name": "birthstate", "type": "TEdit"}, "dtpbirthdate": {"name": "DTPBirthDate", "type": "TDateTimePicker"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TComboBox"}, "editserial": {"name": "EditSerial", "type": "TEdit"}, "cboxsex": {"name": "CBoxSex", "type": "TComboBox"}, "editadress": {"name": "EditAdress", "type": "TEdit"}, "editworkplace": {"name": "EditWorkPlace", "type": "TEdit"}, "editwage": {"name": "EditWage", "type": "TEdit"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "btnadd": {"name": "BtnAdd", "type": "TBitBtn"}, "editpassport": {"name": "EditPassport", "type": "TEdit"}, "adrs_city": {"name": "adrs_city", "type": "TEdit"}, "adrs_state": {"name": "adrs_state", "type": "TEdit"}, "countriesid": {"name": "CountriesID", "type": "TFloatField"}, "countriescntr_name": {"name": "CountriesCNTR_NAME", "type": "TStringField"}, "dblcbstate": {"name": "DBLCBState", "type": "TDBLookupComboboxEh"}, "countriesdatsrc": {"name": "CountriesDatSrc", "type": "TDataSource"}, "datasource3": {"name": "DataSource3", "type": "TDataSource"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "editmobil": {"name": "Editmobil", "type": "TMaskEdit"}, "editphone": {"name": "EditPhone", "type": "TMaskEdit"}}, {});
  U.init(async () => {
    U.var_("CustMgrForm", null, "TCustMgrForm");
  });
  U.method("TCustMgrForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Countries")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustMgrForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Countries")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustMgrForm", "BtnAddClick", async function BtnAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_byr_name": '', "p_passport": '', "p_birthdate": 0, "p_birthplace": '', "p_fam_status": 0, "bayerid": 0, "p_adress": '', "p_workplace": '', "p_wage": 0, "p_phone": '', "p_email": '', "p_sex": 0, "p_passp_number": 0, "p_adrs_state": '', "p_adrs_city": '', "p_birth_state": '', "p_phone_mob": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditByrName")), "Text"))])), ""))) {
    L0["p_byr_name"] = (await $.mv((await $.v(C, "EditByrName")), "Text"));
    L0["p_passport"] = (await $.mv((await $.v(C, "EditSerial")), "Text"));
    L0["p_birthdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPBirthDate")), "DateTime"))]))]));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "DBLCBState")), "Text"));
    L0["p_adress"] = (await $.mv((await $.v(C, "EditAdress")), "Text"));
    L0["p_workplace"] = (await $.mv((await $.v(C, "EditWorkPlace")), "Text"));
    L0["p_wage"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditWage")), "Text"))]));
    L0["p_phone"] = (await $.mv((await $.v(C, "EditPhone")), "Text"));
    L0["p_email"] = (await $.mv((await $.v(C, "EditEmail")), "Text"));
    L0["p_passp_number"] = (await $.call(C, "StrtoInt", [(await $.mv((await $.v(C, "EditPassport")), "text"))]));
    L0["p_birthplace"] = (await $.mv((await $.v(C, "DBLCBState")), "text"));
    L0["p_birth_state"] = (await $.mv((await $.v(C, "birthstate")), "text"));
    L0["p_phone_mob"] = (await $.mv((await $.v(C, "Editmobil")), "Text"));
    L0["p_adrs_state"] = (await $.mv((await $.v(C, "adrs_state")), "text"));
    L0["p_adrs_city"] = (await $.mv((await $.v(C, "adrs_city")), "text"));
    if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxFamStatus")), "Text")), "evli"))) {
      L0["p_fam_status"] = 1;
    } else {
      L0["p_fam_status"] = 2;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CBoxSex")), "Text")), "qadın"))) {
      L0["p_sex"] = 1;
    } else {
      L0["p_sex"] = 2;
    }
    {
      const $t1 = (await $.v(C, "cc_general"));
      await $.wset([$t1], "BayerID", (await $.mcall((await $.wv([$t1], "CC_GENERAL", C, false)), "CallIntegerFunction", ["Add_Buyers", [(await $.wv([$t1], "p_byr_name", { get: async () => L0["p_byr_name"], set: async (v) => { L0["p_byr_name"] = v; }, local: true }, false)), (await $.wv([$t1], "p_passport", { get: async () => L0["p_passport"], set: async (v) => { L0["p_passport"] = v; }, local: true }, false)), (await $.wv([$t1], "p_birthdate", { get: async () => L0["p_birthdate"], set: async (v) => { L0["p_birthdate"] = v; }, local: true }, false)), (await $.wv([$t1], "p_birthplace", { get: async () => L0["p_birthplace"], set: async (v) => { L0["p_birthplace"] = v; }, local: true }, false)), (await $.wv([$t1], "p_fam_status", { get: async () => L0["p_fam_status"], set: async (v) => { L0["p_fam_status"] = v; }, local: true }, false)), (await $.wv([$t1], "p_adress", { get: async () => L0["p_adress"], set: async (v) => { L0["p_adress"] = v; }, local: true }, false)), (await $.wv([$t1], "p_workplace", { get: async () => L0["p_workplace"], set: async (v) => { L0["p_workplace"] = v; }, local: true }, false)), (await $.wv([$t1], "p_wage", { get: async () => L0["p_wage"], set: async (v) => { L0["p_wage"] = v; }, local: true }, false)), (await $.wv([$t1], "p_phone", { get: async () => L0["p_phone"], set: async (v) => { L0["p_phone"] = v; }, local: true }, false)), (await $.wv([$t1], "p_email", { get: async () => L0["p_email"], set: async (v) => { L0["p_email"] = v; }, local: true }, false)), (await $.wv([$t1], "p_sex", { get: async () => L0["p_sex"], set: async (v) => { L0["p_sex"] = v; }, local: true }, false)), (await $.wv([$t1], "p_passp_number", { get: async () => L0["p_passp_number"], set: async (v) => { L0["p_passp_number"] = v; }, local: true }, false)), (await $.wv([$t1], "p_adrs_state", { get: async () => L0["p_adrs_state"], set: async (v) => { L0["p_adrs_state"] = v; }, local: true }, false)), (await $.wv([$t1], "p_adrs_city", { get: async () => L0["p_adrs_city"], set: async (v) => { L0["p_adrs_city"] = v; }, local: true }, false)), (await $.wv([$t1], "p_birth_state", { get: async () => L0["p_birth_state"], set: async (v) => { L0["p_birth_state"] = v; }, local: true }, false)), (await $.wv([$t1], "p_phone_mob", { get: async () => L0["p_phone_mob"], set: async (v) => { L0["p_phone_mob"] = v; }, local: true }, false))]])), { get: async () => L0["bayerid"], set: async (v) => { L0["bayerid"] = v; }, local: true });
    }
    {
      const $t2 = (await $.v(C, "AddEditContractForm"));
      await $.mcall((await $.mv((await $.mv((await $.wv([$t2], "DBLookupComboboxEh6", C, false)), "ListSource")), "DataSet")), "Refresh", []);
      await $.mset((await $.mcall((await $.mv((await $.mv((await $.wv([$t2], "DBLookupComboboxEh6", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ClientID"])), "AsInteger", (await $.wv([$t2], "BayerID", { get: async () => L0["bayerid"], set: async (v) => { L0["bayerid"] = v; }, local: true }, false)));
    }
    await $.mcall((await $.v(C, "CustMgrForm")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustMgrForm", "EditPassportKeyPress", async function EditPassportKeyPress(Self, p0, p1) {
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
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustMgrForm", "DBLCBStateKeyPress", async function DBLCBStateKeyPress(Self, p0, p1) {
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
  U.method("TCustMgrForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(true);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TCustMgrForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustMgrForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustMgrForm", "EditSerialKeyPress", async function EditSerialKeyPress(Self, p0, p1) {
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
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
