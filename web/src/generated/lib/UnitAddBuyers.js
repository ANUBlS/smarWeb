// Generated from UnitAddBuyers.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitAddBuyers", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "ExtCtrls", "NLSLocalizer", "StdCtrls", "ComCtrls", "Buttons", "Mask", "DBCtrls", "UnitData", "CC_Country_Unit", "cc_BuyersImpl"]);
  const C = [U];
  U.defClass("TFormAddBuyers", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "editfirstname": {"name": "EditFirstname", "type": "TEdit"}, "editlastname": {"name": "EditLastname", "type": "TEdit"}, "editmiddlename": {"name": "EditMiddlename", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "cboxgender": {"name": "CBoxGender", "type": "TComboBox"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "editworkplace": {"name": "EditWorkPlace", "type": "TEdit"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "editphone": {"name": "EditPhone", "type": "TMaskEdit"}, "editmobil": {"name": "Editmobil", "type": "TMaskEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "editwage": {"name": "EditWage", "type": "TEdit"}, "label11": {"name": "Label11", "type": "TLabel"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "editpasspser": {"name": "EditPasspser", "type": "TEdit"}, "editpasspnum": {"name": "EditPasspnum", "type": "TEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label20": {"name": "Label20", "type": "TLabel"}, "editadrss": {"name": "EditAdrss", "type": "TEdit"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dtpbirthdate": {"name": "DTPBirthDate", "type": "TDateTimePicker"}, "label3": {"name": "Label3", "type": "TLabel"}, "editbirthcity": {"name": "EditBirthcity", "type": "TDBLookupComboBox"}, "editbirthstate": {"name": "EditBirthState", "type": "TDBLookupComboBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "editadrs_city": {"name": "EditAdrs_city", "type": "TDBLookupComboBox"}, "label19": {"name": "Label19", "type": "TLabel"}, "editadrs_state": {"name": "EditAdrs_state", "type": "TDBLookupComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "editpasspdept": {"name": "EditPasspdept", "type": "TEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "editpincode": {"name": "EditPincode", "type": "TEdit"}, "dtppasspdate": {"name": "DTPPasspdate", "type": "TDateTimePicker"}, "dblookuppasspdept": {"name": "DBLookupPasspdept", "type": "TDBLookupComboBox"}, "addupd": {"name": "AddUpd", "type": "TEdit"}, "button3": {"name": "Button3", "type": "TButton"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "checkbox9": {"name": "CheckBox9", "type": "TCheckBox"}, "checkfirst": {"name": "CheckFirst", "type": "TCheckBox"}, "checklast": {"name": "CheckLast", "type": "TCheckBox"}, "checkmiddle": {"name": "CheckMiddle", "type": "TCheckBox"}, "checkadr": {"name": "CheckAdr", "type": "TCheckBox"}, "checkwork": {"name": "CheckWork", "type": "TCheckBox"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "editkod": {"name": "EditKod", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormAddBuyers", null, "TFormAddBuyers");
    U.var_("AddUpd", 0, "integer");
    U.var_("gender_p", '', "String");
    U.var_("famstatus_p", '', "String");
    U.var_("state_p", '', "String");
    U.var_("city_p", '', "String");
    U.var_("birthdate_p", '', "String");
    U.var_("birthstate_p", '', "String");
    U.var_("birthcity_p", '', "String");
    U.var_("paspdate_p", '', "String");
    U.var_("paspdept_p", '', "String");
    U.var_("loc", '', "String");
  });
  U.method("TFormAddBuyers", "SetCleanUp", async function SetCleanUp(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "DTPBirthDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DTPPasspdate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "EditKod")), "Text", "");
  await $.mset((await $.v(C, "EditFirstname")), "Text", "");
  await $.mset((await $.v(C, "EditLastname")), "Text", "");
  await $.mset((await $.v(C, "EditMiddlename")), "Text", "");
  await $.mset((await $.v(C, "EditPasspser")), "Text", "");
  await $.mset((await $.v(C, "EditPasspnum")), "Text", "");
  await $.mset((await $.v(C, "EditPincode")), "Text", "");
  await $.mset((await $.v(C, "DBLookupPasspdept")), "KeyValue", 0);
  await $.mset((await $.v(C, "CBoxGender")), "ItemIndex", 0);
  await $.mset((await $.v(C, "EditBirthState")), "KeyValue", 1);
  await $.mset((await $.v(C, "EditBirthcity")), "KeyValue", 1);
  await $.mset((await $.v(C, "CBoxFamStatus")), "ItemIndex", 0);
  await $.mset((await $.v(C, "EditAdrs_state")), "KeyValue", 1);
  await $.mset((await $.v(C, "EditAdrs_city")), "KeyValue", 1);
  await $.mset((await $.v(C, "EditAdrss")), "Text", "");
  await $.mset((await $.v(C, "EditWorkPlace")), "Text", "");
  await $.mset((await $.v(C, "EditWage")), "Text", "0");
  await $.mset((await $.v(C, "EditPhone")), "Text", "");
  await $.mset((await $.v(C, "Editmobil")), "Text", "");
  await $.mset((await $.v(C, "EditEmail")), "Text", "");
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormAddBuyers", "SetUpd", async function SetUpd(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.mset((await $.v(C, "EditKod")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["ID"])), "asstring")));
  await $.mset((await $.v(C, "DTPBirthDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Fieldbyname", ["BIRTHDATE"])), "asdatetime")));
  await $.mset((await $.v(C, "DTPPasspdate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Fieldbyname", ["PASSPDATE"])), "asdatetime")));
  await $.mset((await $.v(C, "EditFirstname")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["FIRSTNAME"])), "asstring")));
  await $.mset((await $.v(C, "EditLastname")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["LASTNAME"])), "asstring")));
  await $.mset((await $.v(C, "EditMiddlename")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["MIDDLENAME"])), "asstring")));
  await $.mset((await $.v(C, "EditPasspser")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["PASSPSER"])), "asstring")));
  await $.mset((await $.v(C, "EditPasspnum")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["PASSPNUM"])), "asstring")));
  await $.mset((await $.v(C, "EditPincode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["PASSPPIN"])), "asstring")));
  await $.mset((await $.v(C, "DBLookupPasspdept")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["PASSPDEPT"])), "asinteger")));
  await $.mset((await $.v(C, "CBoxGender")), "ItemIndex", $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["GENDER"])), "asinteger")), 1));
  await $.mset((await $.v(C, "EditBirthState")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["BIRTHSTATE"])), "asinteger")));
  await $.mset((await $.v(C, "EditBirthcity")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["BIRTHCITY"])), "asinteger")));
  await $.mset((await $.v(C, "CBoxFamStatus")), "ItemIndex", $.sub((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["FAMSTATUS"])), "asinteger")), 1));
  await $.mset((await $.v(C, "EditAdrs_state")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["STATE"])), "asinteger")));
  await $.mset((await $.v(C, "EditAdrs_city")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["CITY"])), "asinteger")));
  await $.mset((await $.v(C, "EditAdrss")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["ADDRESS"])), "asstring")));
  await $.mset((await $.v(C, "EditWorkPlace")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["WORKPLACE"])), "asstring")));
  await $.mset((await $.v(C, "EditWage")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["WAGE"])), "asstring")));
  await $.mset((await $.v(C, "EditPhone")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["PHONE"])), "asstring")));
  await $.mset((await $.v(C, "Editmobil")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["PHONEMOB"])), "asstring")));
  await $.mset((await $.v(C, "EditEmail")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "FieldByName", ["EMAIL"])), "asstring")));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormAddBuyers", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "BtnAddClick", async function BtnAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddBuyers", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Open", []);
  await $.mset((await $.v(C, "DTPBirthDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DTPPasspdate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "Country")), "first", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "AddUpd")), "text")), "1"))) {
    await $.mset((await $.v(C, "Label28")), "Visible", false);
    await $.mset((await $.v(C, "EditKod")), "Visible", false);
    await $.mset((await $.v(C, "CheckFirst")), "Visible", false);
    await $.mset((await $.v(C, "CheckLast")), "Visible", false);
    await $.mset((await $.v(C, "CheckMiddle")), "Visible", false);
    await $.mset((await $.v(C, "CheckAdr")), "Visible", false);
    await $.mset((await $.v(C, "CheckWork")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox1")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox2")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox3")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox4")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox5")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox6")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox7")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox8")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox9")), "Visible", false);
    await $.stmt($.call(C, "SetCleanUp", []));
    await $.mset((await $.v(C, "DTPBirthDate")), "Enabled", true);
    await $.mset((await $.v(C, "EditBirthState")), "Enabled", true);
    await $.mset((await $.v(C, "EditBirthcity")), "Enabled", true);
    await $.mset((await $.v(C, "DTPPasspdate")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupPasspdept")), "Enabled", true);
    await $.mset((await $.v(C, "EditAdrs_state")), "Enabled", true);
    await $.mset((await $.v(C, "EditAdrs_city")), "Enabled", true);
    await $.mset((await $.v(C, "CBoxGender")), "Enabled", true);
    await $.mset((await $.v(C, "CBoxFamStatus")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "AddUpd")), "text")), "2"))) {
    await $.mset((await $.v(C, "CheckFirst")), "Visible", false);
    await $.mset((await $.v(C, "CheckLast")), "Visible", false);
    await $.mset((await $.v(C, "CheckMiddle")), "Visible", false);
    await $.mset((await $.v(C, "CheckAdr")), "Visible", false);
    await $.mset((await $.v(C, "CheckWork")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox1")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox2")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox3")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox4")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox5")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox6")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox7")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox8")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox9")), "Visible", false);
    await $.stmt($.call(C, "setupd", []));
    await $.mset((await $.v(C, "DTPBirthDate")), "Enabled", true);
    await $.mset((await $.v(C, "EditBirthState")), "Enabled", true);
    await $.mset((await $.v(C, "EditBirthcity")), "Enabled", true);
    await $.mset((await $.v(C, "DTPPasspdate")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupPasspdept")), "Enabled", true);
    await $.mset((await $.v(C, "EditAdrs_state")), "Enabled", true);
    await $.mset((await $.v(C, "EditAdrs_city")), "Enabled", true);
    await $.mset((await $.v(C, "CBoxGender")), "Enabled", true);
    await $.mset((await $.v(C, "CBoxFamStatus")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "AddUpd")), "text")), "3"))) {
    await $.mset((await $.v(C, "EditKod")), "ReadOnly", false);
    await $.mset((await $.v(C, "CheckFirst")), "Visible", true);
    await $.mset((await $.v(C, "CheckLast")), "Visible", true);
    await $.mset((await $.v(C, "CheckMiddle")), "Visible", true);
    await $.mset((await $.v(C, "CheckAdr")), "Visible", true);
    await $.mset((await $.v(C, "CheckWork")), "Visible", true);
    await $.stmt($.call(C, "SetCleanUp", []));
    await $.mset((await $.v(C, "EditWage")), "Text", "");
    await $.mset((await $.v(C, "Label3")), "Visible", false);
    await $.mset((await $.v(C, "Label2")), "Visible", false);
    await $.mset((await $.v(C, "Label13")), "Visible", false);
    await $.mset((await $.v(C, "Label7")), "Visible", false);
    await $.mset((await $.v(C, "Label12")), "Visible", false);
    await $.mset((await $.v(C, "Label10")), "Visible", false);
    await $.mset((await $.v(C, "Label19")), "Visible", false);
    await $.mset((await $.v(C, "Label4")), "Visible", false);
    await $.mset((await $.v(C, "Label6")), "Visible", false);
    await $.mset((await $.v(C, "DBLookupPasspdept")), "KeyValue", 2);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CC_Country", (await $.mcall((await $.v(C, "TCC_Country")), "Create", [Self])));
  await $.mcall((await $.v(C, "CC_Country")), "showmodal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "EditAdressKeyPress", async function EditAdressKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t1 = L0["sender"];
        { const $t2 = (await $.wv([$t1], "Tag", C, false));
          if ($.eq($t2, 1)) {
            await $.stmt((await $.wcall([$t1], "SelectNext", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false)), (await $.wv([$t1], "True", C, false))], C)));
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
  U.method("TFormAddBuyers", "CBoxGenderKeyPress", async function CBoxGenderKeyPress(Self, p0, p1) {
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
  U.method("TFormAddBuyers", "EditPasspserKeyPress", async function EditPasspserKeyPress(Self, p0, p1) {
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
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddBuyers", "EditFirstnameKeyPress", async function EditFirstnameKeyPress(Self, p0, p1) {
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
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddBuyers", "EditBirthcityKeyPress", async function EditBirthcityKeyPress(Self, p0, p1) {
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
  U.method("TFormAddBuyers", "EditPasspnumKeyPress", async function EditPasspnumKeyPress(Self, p0, p1) {
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
  U.method("TFormAddBuyers", "EditAdrs_stateKeyPress", async function EditAdrs_stateKeyPress(Self, p0, p1) {
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
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("a","ə"), ...$.range("A","Ə"), ...$.range("A","Z"), ...$.range("a","z")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddBuyers", "EditAdrssKeyPress", async function EditAdrssKeyPress(Self, p0, p1) {
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
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddBuyers", "EditWorkPlaceKeyPress", async function EditWorkPlaceKeyPress(Self, p0, p1) {
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
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddBuyers", "EditWageKeyPress", async function EditWageKeyPress(Self, p0, p1) {
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
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddBuyers", "EditmobilKeyPress", async function EditmobilKeyPress(Self, p0, p1) {
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
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddBuyers", "EditPhoneKeyPress", async function EditPhoneKeyPress(Self, p0, p1) {
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
  U.method("TFormAddBuyers", "EditEmailKeyPress", async function EditEmailKeyPress(Self, p0, p1) {
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
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormAddBuyers", "BtnOKClick", async function BtnOKClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_id": 0, "p_firstname": '', "p_lastname": '', "p_middlename": '', "p_passpser": '', "p_passpnum": '', "p_pasppin": '', "p_passpdate": 0, "p_passpdept": 0, "p_gender": 0, "p_birthdate": 0, "p_birthstate": 0, "p_birthcity": 0, "p_famstatus": 0, "p_adrs_state": 0, "p_adrs_city": 0, "p_adress": '', "p_workplace": '', "p_wage": 0, "p_phone": '', "p_phone_mob": '', "p_email": '', "p_first": '', "p_last": '', "p_middle": '', "p_adr": '', "p_work": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Label28")), "Visible", true);
  await $.mset((await $.v(C, "EditKod")), "Visible", true);
  if ($.truthy($.eq((await $.mv((await $.v(C, "AddUpd")), "text")), "3"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckFirst")), "Checked")), true))) {
      L0["p_first"] = "%";
    } else {
      L0["p_first"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckLast")), "Checked")), true))) {
      L0["p_last"] = "%";
    } else {
      L0["p_last"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckMiddle")), "Checked")), true))) {
      L0["p_middle"] = "%";
    } else {
      L0["p_middle"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckAdr")), "Checked")), true))) {
      L0["p_adr"] = "%";
    } else {
      L0["p_adr"] = "";
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckWork")), "Checked")), true))) {
      L0["p_work"] = "%";
    } else {
      L0["p_work"] = "";
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Close", []);
    { const $t27 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Sql")), [5], ""); if ($t27 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Sql", $t27); } }
    { const $t28 = await $.iset((await $.mv((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Sql")), [5], $.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add($.add(" and nvl(upper(firstname),0) like upper(", "'"), L0["p_first"]), (await $.mv((await $.v(C, "EditFirstname")), "Text"))), "%"), "'"), ")"), " and nvl(upper(lastname),0) like upper("), "'"), L0["p_last"]), (await $.mv((await $.v(C, "EditLastname")), "Text"))), "%"), "'"), ")"), " and nvl(upper(middlename),0) like upper("), "'"), L0["p_middle"]), (await $.mv((await $.v(C, "EditMiddlename")), "Text"))), "%"), "'"), ")"), " and nvl(Passpnum,0) like ("), "'"), (await $.mv((await $.v(C, "EditPasspnum")), "Text"))), "%"), "'"), ")"), " and nvl(PASSPSER,0) like ("), "'"), (await $.mv((await $.v(C, "EditPasspser")), "Text"))), "%"), "'"), ")"), (await $.v(C, "gender_p"))), (await $.v(C, "famstatus_p"))), (await $.v(C, "state_p"))), (await $.v(C, "city_p"))), (await $.v(C, "birthdate_p"))), (await $.v(C, "birthstate_p"))), (await $.v(C, "birthcity_p"))), (await $.v(C, "paspdate_p"))), (await $.v(C, "paspdept_p"))), " and nvl(PASSPPIN,0) like ("), "'"), (await $.mv((await $.v(C, "EditPincode")), "Text"))), "%"), "'"), ")"), " and nvl(upper(WorkPlace),0) like upper("), "'"), L0["p_work"]), (await $.mv((await $.v(C, "EditWorkPlace")), "Text"))), "%"), "'"), ")"), " and nvl(PHONEMOB,0) like ("), "'"), (await $.mv((await $.v(C, "Editmobil")), "Text"))), "%"), "'"), ")"), " and nvl(PHONE,0) like ("), "'"), (await $.mv((await $.v(C, "EditPhone")), "Text"))), "%"), "'"), ")"), " and nvl(Wage,0) like ("), "'"), (await $.mv((await $.v(C, "EditWage")), "Text"))), "%"), "'"), ")"), " and nvl(a.ID,0) like ("), "'"), (await $.mv((await $.v(C, "EditKod")), "Text"))), "%"), "'"), ")"), " and nvl(EMAIL,0) like ("), "'"), (await $.mv((await $.v(C, "EditEmail")), "Text"))), "%"), "'"), ")"), " and nvl(upper(address),0) like upper("), "'"), L0["p_adr"]), (await $.mv((await $.v(C, "EditAdrss")), "Text"))), "%"), "'"), ")")); if ($t28 !== undefined) { await $.mset((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Sql", $t28); } }
    await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Open", []);
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditFirstname")), "Text"))])), "")), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditLastname")), "Text"))])), "")))), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditMiddlename")), "Text"))])), "")))), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditPasspser")), "Text"))])), "")))), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.v(C, "EditPasspnum")), "Text"))])), "")))))) {
    L0["p_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "fieldbyname", ["ID"])), "asinteger"));
    L0["p_firstname"] = (await $.mv((await $.v(C, "EditFirstname")), "Text"));
    L0["p_lastname"] = (await $.mv((await $.v(C, "EditLastname")), "Text"));
    L0["p_middlename"] = (await $.mv((await $.v(C, "EditMiddlename")), "Text"));
    L0["p_passpser"] = (await $.mv((await $.v(C, "EditPasspser")), "Text"));
    L0["p_passpnum"] = (await $.mv((await $.v(C, "EditPasspnum")), "Text"));
    L0["p_pasppin"] = (await $.mv((await $.v(C, "EditPincode")), "Text"));
    L0["p_passpdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPPasspdate")), "DateTime"))]))]));
    L0["p_passpdept"] = (await $.mv((await $.v(C, "DBLookupPasspdept")), "KeyValue"));
    L0["p_gender"] = $.add((await $.mv((await $.v(C, "CBoxGender")), "ItemIndex")), 1);
    L0["p_birthdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPBirthDate")), "DateTime"))]))]));
    L0["p_birthstate"] = (await $.mv((await $.v(C, "EditBirthState")), "KeyValue"));
    L0["p_birthcity"] = (await $.mv((await $.v(C, "EditBirthcity")), "KeyValue"));
    L0["p_famstatus"] = $.add((await $.mv((await $.v(C, "CBoxFamStatus")), "ItemIndex")), 1);
    L0["p_adrs_state"] = (await $.mv((await $.v(C, "EditAdrs_state")), "KeyValue"));
    L0["p_adrs_city"] = (await $.mv((await $.v(C, "EditAdrs_city")), "KeyValue"));
    L0["p_adress"] = (await $.mv((await $.v(C, "EditAdrss")), "Text"));
    L0["p_workplace"] = (await $.mv((await $.v(C, "EditWorkPlace")), "Text"));
    L0["p_wage"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "EditWage")), "Text"))]));
    L0["p_phone"] = (await $.mv((await $.v(C, "EditPhone")), "Text"));
    L0["p_phone_mob"] = (await $.mv((await $.v(C, "Editmobil")), "Text"));
    L0["p_email"] = (await $.mv((await $.v(C, "EditEmail")), "Text"));
    await $.set(C, "loc", (await $.mv((await $.v(C, "EditKod")), "Text")));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormAddBuyers")), "AddUpd")), "Text")), "1"))) {
      {
        const $t29 = (await $.v(C, "DataMod_Buyers"));
        await $.stmt((await $.mcall((await $.wv([$t29], "CC_GENERAL", C, false)), "CallProcedure", ["add_Buyers", [(await $.wv([$t29], "p_firstname", { get: async () => L0["p_firstname"], set: async (v) => { L0["p_firstname"] = v; }, local: true }, false)), (await $.wv([$t29], "p_lastname", { get: async () => L0["p_lastname"], set: async (v) => { L0["p_lastname"] = v; }, local: true }, false)), (await $.wv([$t29], "p_middlename", { get: async () => L0["p_middlename"], set: async (v) => { L0["p_middlename"] = v; }, local: true }, false)), (await $.wv([$t29], "p_passpser", { get: async () => L0["p_passpser"], set: async (v) => { L0["p_passpser"] = v; }, local: true }, false)), (await $.wv([$t29], "p_passpnum", { get: async () => L0["p_passpnum"], set: async (v) => { L0["p_passpnum"] = v; }, local: true }, false)), (await $.wv([$t29], "p_pasppin", { get: async () => L0["p_pasppin"], set: async (v) => { L0["p_pasppin"] = v; }, local: true }, false)), (await $.wv([$t29], "p_passpdate", { get: async () => L0["p_passpdate"], set: async (v) => { L0["p_passpdate"] = v; }, local: true }, false)), (await $.wv([$t29], "p_passpdept", { get: async () => L0["p_passpdept"], set: async (v) => { L0["p_passpdept"] = v; }, local: true }, false)), (await $.wv([$t29], "p_gender", { get: async () => L0["p_gender"], set: async (v) => { L0["p_gender"] = v; }, local: true }, false)), (await $.wv([$t29], "p_birthdate", { get: async () => L0["p_birthdate"], set: async (v) => { L0["p_birthdate"] = v; }, local: true }, false)), (await $.wv([$t29], "p_birthstate", { get: async () => L0["p_birthstate"], set: async (v) => { L0["p_birthstate"] = v; }, local: true }, false)), (await $.wv([$t29], "p_birthcity", { get: async () => L0["p_birthcity"], set: async (v) => { L0["p_birthcity"] = v; }, local: true }, false)), (await $.wv([$t29], "p_famstatus", { get: async () => L0["p_famstatus"], set: async (v) => { L0["p_famstatus"] = v; }, local: true }, false)), (await $.wv([$t29], "p_adrs_state", { get: async () => L0["p_adrs_state"], set: async (v) => { L0["p_adrs_state"] = v; }, local: true }, false)), (await $.wv([$t29], "p_adrs_city", { get: async () => L0["p_adrs_city"], set: async (v) => { L0["p_adrs_city"] = v; }, local: true }, false)), (await $.wv([$t29], "p_adress", { get: async () => L0["p_adress"], set: async (v) => { L0["p_adress"] = v; }, local: true }, false)), (await $.wv([$t29], "p_workplace", { get: async () => L0["p_workplace"], set: async (v) => { L0["p_workplace"] = v; }, local: true }, false)), (await $.wv([$t29], "p_wage", { get: async () => L0["p_wage"], set: async (v) => { L0["p_wage"] = v; }, local: true }, false)), (await $.wv([$t29], "p_phone", { get: async () => L0["p_phone"], set: async (v) => { L0["p_phone"] = v; }, local: true }, false)), (await $.wv([$t29], "p_phone_mob", { get: async () => L0["p_phone_mob"], set: async (v) => { L0["p_phone_mob"] = v; }, local: true }, false)), (await $.wv([$t29], "p_email", { get: async () => L0["p_email"], set: async (v) => { L0["p_email"] = v; }, local: true }, false))]])));
        await $.mcall((await $.wv([$t29], "EditFirstname", C, false)), "Setfocus", []);
        await $.stmt($.wcall([$t29], "SetCleanUp", [], C));
        await $.mset((await $.wv([$t29], "EditAdrs_state", C, false)), "KeyValue", 2);
        await $.mset((await $.wv([$t29], "EditAdrs_city", C, false)), "KeyValue", 1);
      }
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormAddBuyers")), "AddUpd")), "Text")), "2"))) {
      {
        const $t30 = (await $.v(C, "DataMod_Buyers"));
        await $.stmt((await $.mcall((await $.wv([$t30], "CC_GENERAL", C, false)), "CallProcedure", ["upd_Buyers", [(await $.wv([$t30], "p_id", { get: async () => L0["p_id"], set: async (v) => { L0["p_id"] = v; }, local: true }, false)), (await $.wv([$t30], "p_firstname", { get: async () => L0["p_firstname"], set: async (v) => { L0["p_firstname"] = v; }, local: true }, false)), (await $.wv([$t30], "p_lastname", { get: async () => L0["p_lastname"], set: async (v) => { L0["p_lastname"] = v; }, local: true }, false)), (await $.wv([$t30], "p_middlename", { get: async () => L0["p_middlename"], set: async (v) => { L0["p_middlename"] = v; }, local: true }, false)), (await $.wv([$t30], "p_passpser", { get: async () => L0["p_passpser"], set: async (v) => { L0["p_passpser"] = v; }, local: true }, false)), (await $.wv([$t30], "p_passpnum", { get: async () => L0["p_passpnum"], set: async (v) => { L0["p_passpnum"] = v; }, local: true }, false)), (await $.wv([$t30], "p_pasppin", { get: async () => L0["p_pasppin"], set: async (v) => { L0["p_pasppin"] = v; }, local: true }, false)), (await $.wv([$t30], "p_passpdate", { get: async () => L0["p_passpdate"], set: async (v) => { L0["p_passpdate"] = v; }, local: true }, false)), (await $.wv([$t30], "p_passpdept", { get: async () => L0["p_passpdept"], set: async (v) => { L0["p_passpdept"] = v; }, local: true }, false)), (await $.wv([$t30], "p_gender", { get: async () => L0["p_gender"], set: async (v) => { L0["p_gender"] = v; }, local: true }, false)), (await $.wv([$t30], "p_birthdate", { get: async () => L0["p_birthdate"], set: async (v) => { L0["p_birthdate"] = v; }, local: true }, false)), (await $.wv([$t30], "p_birthstate", { get: async () => L0["p_birthstate"], set: async (v) => { L0["p_birthstate"] = v; }, local: true }, false)), (await $.wv([$t30], "p_birthcity", { get: async () => L0["p_birthcity"], set: async (v) => { L0["p_birthcity"] = v; }, local: true }, false)), (await $.wv([$t30], "p_famstatus", { get: async () => L0["p_famstatus"], set: async (v) => { L0["p_famstatus"] = v; }, local: true }, false)), (await $.wv([$t30], "p_adrs_state", { get: async () => L0["p_adrs_state"], set: async (v) => { L0["p_adrs_state"] = v; }, local: true }, false)), (await $.wv([$t30], "p_adrs_city", { get: async () => L0["p_adrs_city"], set: async (v) => { L0["p_adrs_city"] = v; }, local: true }, false)), (await $.wv([$t30], "p_adress", { get: async () => L0["p_adress"], set: async (v) => { L0["p_adress"] = v; }, local: true }, false)), (await $.wv([$t30], "p_workplace", { get: async () => L0["p_workplace"], set: async (v) => { L0["p_workplace"] = v; }, local: true }, false)), (await $.wv([$t30], "p_wage", { get: async () => L0["p_wage"], set: async (v) => { L0["p_wage"] = v; }, local: true }, false)), (await $.wv([$t30], "p_phone", { get: async () => L0["p_phone"], set: async (v) => { L0["p_phone"] = v; }, local: true }, false)), (await $.wv([$t30], "p_phone_mob", { get: async () => L0["p_phone_mob"], set: async (v) => { L0["p_phone_mob"] = v; }, local: true }, false)), (await $.wv([$t30], "p_email", { get: async () => L0["p_email"], set: async (v) => { L0["p_email"] = v; }, local: true }, false))]])));
        await $.mcall((await $.wv([$t30], "FormAddBuyers", C, false)), "Close", []);
      }
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Refresh", []);
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormAddBuyers")), "AddUpd")), "Text")), "2"))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Locate", ["ID", (await $.mv((await $.v(C, "EditKod")), "Text")), []])));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Məlumat tam doldurulmayıb!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "BtnCancelClick", async function BtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "AddUpd")), "Text")), "2"))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Locate", ["ID", (await $.mv((await $.v(C, "EditKod")), "Text")), []])));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "BirthPlaceChange", async function BirthPlaceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.mv((await $.v(C, "DataMod_Buyers")), "country"));
    await $.stmt($.wcall([$t31], "Close", [], C));
    await $.mcall((await $.wv([$t31], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t31], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from countries c where cntr_name= ", "'"), (await $.mv((await $.wv([$t31], "EditBirthstate", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t31], "Open", [], C));
    await $.mset((await $.wv([$t31], "dbedit1", C, false)), "Text", (await $.mv((await $.wcall([$t31], "FieldByName", ["id"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t32 = (await $.mv((await $.v(C, "DataMod_Buyers")), "cities"));
    await $.stmt($.wcall([$t32], "Close", [], C));
    await $.mcall((await $.wv([$t32], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t32], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from cities c where country_id= ", "'"), (await $.mv((await $.wv([$t32], "dbedit1", C, false)), "Text"))), "' order by ID"));
    await $.stmt($.wcall([$t32], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t33 = (await $.mv((await $.v(C, "DataMod_Buyers")), "cities"));
    await $.stmt($.wcall([$t33], "Close", [], C));
    await $.mcall((await $.wv([$t33], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t33], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from cities c where country_id= ", "'"), (await $.mv((await $.wv([$t33], "dbedit1", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t33], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "DBEdit2Change", async function DBEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t34 = (await $.mv((await $.v(C, "DataMod_Buyers")), "ad_cities"));
    await $.stmt($.wcall([$t34], "Close", [], C));
    await $.mcall((await $.wv([$t34], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t34], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from cities c where country_id= ", "'"), (await $.mv((await $.wv([$t34], "dbedit2", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t34], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "DBEdit3Change", async function DBEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.mv((await $.v(C, "DataMod_Buyers")), "cc_countries"));
    await $.stmt($.wcall([$t35], "Close", [], C));
    await $.mcall((await $.wv([$t35], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t35], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from countries c where id= ", "'"), (await $.mv((await $.wv([$t35], "dbedit3", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t35], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "FormAddBuyers")), "Caption", "ozzun");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "AddUpd")), "Text")), "1"))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "maxid")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "maxid")), "FieldByName", ["ID"])), "AsString")), []])));
  }
  await $.mset((await $.v(C, "Label3")), "Visible", true);
  await $.mset((await $.v(C, "Label2")), "Visible", true);
  await $.mset((await $.v(C, "Label13")), "Visible", true);
  await $.mset((await $.v(C, "Label7")), "Visible", true);
  await $.mset((await $.v(C, "Label12")), "Visible", true);
  await $.mset((await $.v(C, "Label10")), "Visible", true);
  await $.mset((await $.v(C, "Label19")), "Visible", true);
  await $.mset((await $.v(C, "Label6")), "Visible", true);
  await $.mset((await $.v(C, "Label4")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox1")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox2")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox3")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox4")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox5")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox6")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox7")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox8")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox9")), "Visible", true);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormAddBuyers", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
    await $.mset((await $.v(C, "DTPBirthDate")), "Enabled", true);
    await $.set(C, "birthdate_p", $.add($.add(" and BIRTHDATE='", (await $.call(C, "formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "DTPBirthDate")), "Date"))]))), "' "));
  } else {
    await $.set(C, "birthdate_p", "");
    await $.mset((await $.v(C, "DTPBirthDate")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CheckBox2Click", async function CheckBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), true))) {
    await $.mset((await $.v(C, "EditBirthState")), "Enabled", true);
    await $.set(C, "birthstate_p", $.add($.add(" and nvl(BIRTHSTATE,0)='", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "EditBirthState")), "keyvalue"))]))), "' "));
  } else {
    await $.set(C, "birthstate_p", "");
    await $.mset((await $.v(C, "EditBirthState")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CheckBox3Click", async function CheckBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox3")), "Checked")), true))) {
    await $.mset((await $.v(C, "EditBirthcity")), "Enabled", true);
    await $.set(C, "birthcity_p", $.add($.add(" and nvl(BIRTHCITY,0) like '", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "EditBirthcity")), "keyvalue"))]))), "' "));
  } else {
    await $.set(C, "birthcity_p", "");
    await $.mset((await $.v(C, "EditBirthcity")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CheckBox4Click", async function CheckBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox4")), "Checked")), true))) {
    await $.mset((await $.v(C, "DTPPasspdate")), "Enabled", true);
    await $.set(C, "paspdate_p", $.add($.add(" and Passpdate='", (await $.call(C, "formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "DTPPasspdate")), "Date"))]))), "' "));
  } else {
    await $.set(C, "paspdate_p", "");
    await $.mset((await $.v(C, "DTPPasspdate")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CheckBox5Click", async function CheckBox5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox5")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupPasspdept")), "Enabled", true);
    await $.set(C, "paspdept_p", $.add($.add(" and nvl(Passpdept,0) like '", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupPasspdept")), "keyvalue"))]))), "' "));
  } else {
    await $.set(C, "paspdept_p", "");
    await $.mset((await $.v(C, "DBLookupPasspdept")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CheckBox6Click", async function CheckBox6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox6")), "Checked")), true))) {
    await $.mset((await $.v(C, "EditAdrs_state")), "Enabled", true);
    await $.set(C, "state_p", $.add($.add(" and nvl(state,0) like '", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "EditAdrs_state")), "keyvalue"))]))), "' "));
  } else {
    await $.set(C, "state_p", "");
    await $.mset((await $.v(C, "EditAdrs_state")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CheckBox7Click", async function CheckBox7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox7")), "Checked")), true))) {
    await $.mset((await $.v(C, "EditAdrs_city")), "Enabled", true);
    await $.set(C, "city_p", $.add($.add(" and nvl(city,0) like '", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "EditAdrs_city")), "keyvalue"))]))), "' "));
  } else {
    await $.set(C, "city_p", "");
    await $.mset((await $.v(C, "EditAdrs_city")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CheckBox8Click", async function CheckBox8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox8")), "Checked")), true))) {
    await $.mset((await $.v(C, "CBoxGender")), "Enabled", true);
    await $.set(C, "gender_p", $.add($.add(" and nvl(gender,0) like '", (await $.call(C, "inttostr", [$.add((await $.mv((await $.v(C, "CBoxGender")), "itemindex")), 1)]))), "' "));
  } else {
    await $.set(C, "gender_p", "");
    await $.mset((await $.v(C, "CBoxGender")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CheckBox9Click", async function CheckBox9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox9")), "Checked")), true))) {
    await $.mset((await $.v(C, "CBoxFamStatus")), "Enabled", true);
    await $.set(C, "famstatus_p", $.add($.add(" and nvl(famstatus,0)='", (await $.call(C, "inttostr", [$.add((await $.mv((await $.v(C, "CBoxFamStatus")), "itemindex")), 1)]))), "' "));
  } else {
    await $.set(C, "famstatus_p", "");
    await $.mset((await $.v(C, "CBoxFamStatus")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CBoxFamStatusChange", async function CBoxFamStatusChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "famstatus_p", $.add($.add(" and nvl(famstatus,0)='", (await $.call(C, "inttostr", [$.add((await $.mv((await $.v(C, "CBoxFamStatus")), "itemindex")), 1)]))), "' "));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "CBoxGenderChange", async function CBoxGenderChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "gender_p", $.add($.add(" and nvl(gender,0) like '", (await $.call(C, "inttostr", [$.add((await $.mv((await $.v(C, "CBoxGender")), "itemindex")), 1)]))), "' "));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "EditAdrs_stateClick", async function EditAdrs_stateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "state_p", $.add($.add(" and nvl(state,0) like '", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "EditAdrs_state")), "keyvalue"))]))), "' "));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "EditAdrs_cityClick", async function EditAdrs_cityClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "city_p", $.add($.add(" and nvl(city,0) like '", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "EditAdrs_city")), "keyvalue"))]))), "' "));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "DTPBirthDateChange", async function DTPBirthDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "birthdate_p", $.add($.add(" and BIRTHDATE='", (await $.call(C, "formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "DTPBirthDate")), "Date"))]))), "' "));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "EditBirthStateClick", async function EditBirthStateClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "birthstate_p", $.add($.add(" and nvl(BIRTHSTATE,0)='", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "EditBirthState")), "keyvalue"))]))), "' "));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "EditBirthcityClick", async function EditBirthcityClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "birthcity_p", $.add($.add(" and nvl(BIRTHCITY,0) like '", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "EditBirthcity")), "keyvalue"))]))), "' "));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "DTPPasspdateChange", async function DTPPasspdateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "paspdate_p", $.add($.add(" and Passpdate='", (await $.call(C, "formatdatetime", ["dd-mmm-yyyy", (await $.mv((await $.v(C, "DTPPasspdate")), "Date"))]))), "' "));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAddBuyers", "DBLookupPasspdeptClick", async function DBLookupPasspdeptClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "paspdept_p", $.add($.add(" and nvl(Passpdept,0) like '", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "DBLookupPasspdept")), "keyvalue"))]))), "' "));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
