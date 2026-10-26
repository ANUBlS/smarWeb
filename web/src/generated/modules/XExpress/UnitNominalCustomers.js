// Generated from UnitNominalCustomers.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitNominalCustomers", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrlsEh", "DBCtrls", "ExtCtrls", "CMHintBox", "Buttons", "ComCtrls", "UnitPaymentsCredit", "ExpDataModuleUnit", "ExpUnitNewImpl", "ExpressDecls"]);
  const C = [U];
  U.defClass("TFormNominalCustomers", "TForm", {"panel16": {"name": "Panel16", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "cmhintbox1": {"name": "CMHintBox1", "type": "TCMHintBox"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "searchpasspin": {"name": "Searchpasspin", "type": "TEdit"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "searchpaspnum": {"name": "Searchpaspnum", "type": "TEdit"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "editlastname": {"name": "EditLastName", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "editname1": {"name": "EditName1", "type": "TEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "editsoname": {"name": "EditSoname", "type": "TEdit"}, "label52": {"name": "Label52", "type": "TLabel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label58": {"name": "Label58", "type": "TLabel"}, "editpasspin": {"name": "Editpasspin", "type": "TEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label59": {"name": "Label59", "type": "TLabel"}, "cboxpassplace": {"name": "CBoxPassPlace", "type": "TDBLookupComboBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label60": {"name": "Label60", "type": "TLabel"}, "editserial": {"name": "EditSerial", "type": "TEdit"}, "editpassport": {"name": "EditPassport", "type": "TEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label102": {"name": "Label102", "type": "TLabel"}, "searchid": {"name": "Searchid", "type": "TEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "cboxsex": {"name": "CBoxSex", "type": "TDBLookupComboBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "cboxfamstatus": {"name": "CBoxFamStatus", "type": "TDBLookupComboBox"}, "label19": {"name": "Label19", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "birthplace": {"name": "BirthPlace", "type": "TDBLookupComboBox"}, "label23": {"name": "Label23", "type": "TLabel"}, "editbirthcity": {"name": "EditBirthCity", "type": "TDBLookupComboBox"}, "label56": {"name": "Label56", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "dateedit2": {"name": "DateEdit2", "type": "TDBDateTimeEditEh"}, "label11": {"name": "Label11", "type": "TLabel"}, "label61": {"name": "Label61", "type": "TLabel"}, "issue_country": {"name": "issue_country", "type": "TDBLookupComboBox"}, "label26": {"name": "Label26", "type": "TLabel"}, "label62": {"name": "Label62", "type": "TLabel"}, "dbcbox_doctype": {"name": "DBCBox_DocTYPE", "type": "TDBLookupComboBox"}, "label29": {"name": "Label29", "type": "TLabel"}, "label63": {"name": "Label63", "type": "TLabel"}, "dateedit": {"name": "DateEdit", "type": "TDBDateTimeEditEh"}, "label33": {"name": "Label33", "type": "TLabel"}, "label64": {"name": "Label64", "type": "TLabel"}, "dateedit1": {"name": "DateEdit1", "type": "TDBDateTimeEditEh"}, "label35": {"name": "Label35", "type": "TLabel"}, "label65": {"name": "Label65", "type": "TLabel"}, "dbcbox_citizenship": {"name": "DBCBox_Citizenship", "type": "TDBLookupComboBox"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label31": {"name": "Label31", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "label66": {"name": "Label66", "type": "TLabel"}, "label67": {"name": "Label67", "type": "TLabel"}, "adrs_city": {"name": "Adrs_City", "type": "TDBLookupComboBox"}, "adrs_state": {"name": "Adrs_State", "type": "TDBLookupComboBox"}, "zipq": {"name": "ZipQ", "type": "TEdit"}, "adressedit": {"name": "AdressEdit", "type": "TEdit"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "label27": {"name": "Label27", "type": "TLabel"}, "label70": {"name": "Label70", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label69": {"name": "Label69", "type": "TLabel"}, "label41": {"name": "Label41", "type": "TLabel"}, "editmobil": {"name": "EditMobil", "type": "TEdit"}, "editphone": {"name": "EditPhone", "type": "TEdit"}, "editemail": {"name": "EditEmail", "type": "TEdit"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "button3": {"name": "Button3", "type": "TButton"}, "panel29": {"name": "Panel29", "type": "TPanel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label71": {"name": "Label71", "type": "TLabel"}, "work_place": {"name": "Work_Place", "type": "TEdit"}, "panel30": {"name": "Panel30", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "address_type": {"name": "Address_type", "type": "TDBLookupComboBox"}, "label72": {"name": "Label72", "type": "TLabel"}, "countrybyconcttype": {"name": "CountryByConctType", "type": "TDBLookupComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label73": {"name": "Label73", "type": "TLabel"}, "panel31": {"name": "Panel31", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label74": {"name": "Label74", "type": "TLabel"}, "citybyconcttype": {"name": "CityByConctType", "type": "TDBLookupComboBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "db_tph_state": {"name": "db_tph_state", "type": "TEdit"}, "db_tph_zip": {"name": "DB_tph_zip", "type": "TEdit"}, "label21": {"name": "Label21", "type": "TLabel"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "db_tph_adress": {"name": "db_tph_adress", "type": "TEdit"}, "label75": {"name": "Label75", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "panel33": {"name": "Panel33", "type": "TPanel"}, "label39": {"name": "Label39", "type": "TLabel"}, "label76": {"name": "Label76", "type": "TLabel"}, "tph_contact_type": {"name": "tph_contact_type", "type": "TDBLookupComboBox"}, "label42": {"name": "Label42", "type": "TLabel"}, "label77": {"name": "Label77", "type": "TLabel"}, "tph_communication_type": {"name": "tph_communication_type", "type": "TDBLookupComboBox"}, "panel34": {"name": "Panel34", "type": "TPanel"}, "label48": {"name": "Label48", "type": "TLabel"}, "tph_country_prefix": {"name": "tph_country_prefix", "type": "TDBLookupComboBox"}, "label78": {"name": "Label78", "type": "TLabel"}, "label47": {"name": "Label47", "type": "TLabel"}, "db_tph_cod": {"name": "Db_tph_cod", "type": "TEdit"}, "db_tph_number": {"name": "Db_tph_number", "type": "TEdit"}, "label79": {"name": "Label79", "type": "TLabel"}, "label46": {"name": "Label46", "type": "TLabel"}, "db_tph_extension": {"name": "Db_tph_extension", "type": "TEdit"}, "panel35": {"name": "Panel35", "type": "TPanel"}, "searchnumberofcredit": {"name": "Searchnumberofcredit", "type": "TEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "rh": {"name": "RH", "type": "boolean"}}, {});
  U.init(async () => {
    U.var_("FormNominalCustomers", null, "TFormNominalCustomers");
  });
  U.func("CheckField", async function CheckField(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sum": $.copyArg(p0), result: false, "i": 0, "j": 0, "k": 0, "z": 0, "text": ''};
  await $.fixArgs(L0, ["sum"]);
  L0["text"] = "";
  {
    const $t1 = (await $.v(C, "FormNominalCustomers"));
    { const $t2 = $.sub((await $.wv([$t1], "ComponentCount", C, false)), 1);
      await $.wset([$t1], "i", 0, { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true });
      let $t3 = true;
      for (;;) {
        if (!$t3) { await $.wset([$t1], "i", $.succ((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false)), 1), { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }); }
        $t3 = false;
        if (!($.ord((await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))) <= $.ord($t2))) break;
        if ($.truthy($.ge((await $.wv([$t1], "Sum", { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true }, false)), 20000))) {
          if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ClassName")), "TEdit"))) {
            if ($.truthy((await $.and_(($.eq((await $.mv(((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), "")), async () => ((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Editpasspin")), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditLastName")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditName1")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditSoname")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditSerial")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditPassport")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "AdressEdit")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditMobil")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditPhone")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Work_Place")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "db_tph_adress")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Db_tph_cod")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Db_tph_number")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Db_tph_extension"))))))))) {
              await $.wset([$t1], "Result", (await $.wv([$t1], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Editpasspin")))) {
                await $.wset([$t1], "text", "pinkod", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditLastName")))) {
                await $.wset([$t1], "text", "soyadı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditName1")))) {
                await $.wset([$t1], "text", "adı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditSoname")))) {
                await $.wset([$t1], "text", "atasının adı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditSerial")))) {
                await $.wset([$t1], "text", "seriya", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditPassport")))) {
                await $.wset([$t1], "text", "nömrə", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "AdressEdit")))) {
                await $.wset([$t1], "text", "qeydiyyat ünvanı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditMobil")))) {
                await $.wset([$t1], "text", "mobil telefon", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditPhone")))) {
                await $.wset([$t1], "text", "ev telefon", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Work_Place")))) {
                await $.wset([$t1], "text", "iş yerinin adı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "db_tph_adress")))) {
                await $.wset([$t1], "text", "iş yerinin ünvanı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Db_tph_cod")))) {
                await $.wset([$t1], "text", "iş telefonun kodu", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Db_tph_number")))) {
                await $.wset([$t1], "text", "iş telefonun nömrəsi", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Db_tph_extension")))) {
                await $.wset([$t1], "text", "iş telefonun daxili nömrə", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              await $.stmt((await $.wcall([$t1], "MessageDlg", [$.add($.add($.add($.add("Göndərən şəxsin", " "), (await $.wv([$t1], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false))), " "), "sahəsi doldurulmayıb !"), (await $.wv([$t1], "mtWarning", C, false)), [(await $.wv([$t1], "mbok", C, false))], 0], C)));
              return L0.result;
            } else {
              await $.wset([$t1], "Result", (await $.wv([$t1], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            }
          }
          if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ClassName")), "TDBLookupComboBox"))) {
            if ($.truthy((await $.and_(($.eq((await $.mv(((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), "")), async () => ((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CBoxPassPlace")), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CBoxSex")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CBoxFamStatus")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "BirthPlace")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditBirthCity")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "issue_country")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DBCBox_DocTYPE")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DBCBox_Citizenship")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Adrs_State")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Adrs_City")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Address_type")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CountryByConctType")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CityByConctType")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "tph_contact_type")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "tph_communication_type")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "tph_country_prefix"))))))))) {
              await $.wset([$t1], "Result", (await $.wv([$t1], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CBoxPassPlace")))) {
                await $.wset([$t1], "text", "sənədin növü", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CBoxSex")))) {
                await $.wset([$t1], "text", "cinsi", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CBoxFamStatus")))) {
                await $.wset([$t1], "text", "ailə vəziyyəti", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "BirthPlace")))) {
                await $.wset([$t1], "text", "doğulduğu ölkə", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditBirthCity")))) {
                await $.wset([$t1], "text", "doğulduğu şəhər(rayon)", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "issue_country")))) {
                await $.wset([$t1], "text", "verildiyi ölkə", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DBCBox_DocTYPE")))) {
                await $.wset([$t1], "text", "verən orqan", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DBCBox_Citizenship")))) {
                await $.wset([$t1], "text", "vətəndaşlığı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Adrs_State")))) {
                await $.wset([$t1], "text", "qeydiyyatda olduğu ölkə", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Adrs_City")))) {
                await $.wset([$t1], "text", "qeydiyyatda olduğu şəhər(rayon)", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Address_type")))) {
                await $.wset([$t1], "text", "iş yerinin ünvanın təyinatı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CountryByConctType")))) {
                await $.wset([$t1], "text", "iş yerinin olduğu ölkə", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CityByConctType")))) {
                await $.wset([$t1], "text", "iş yerinin olduğu şəhər", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "tph_contact_type")))) {
                await $.wset([$t1], "text", "iş yerinin telefon nömrəsinin təyinatı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "tph_communication_type")))) {
                await $.wset([$t1], "text", "iş yerinin telefon əlaqə vasitəsi", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "tph_country_prefix")))) {
                await $.wset([$t1], "text", "iş yerinin telofon operator kodu", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              await $.stmt((await $.wcall([$t1], "MessageDlg", [$.add($.add($.add($.add("Göndərən şəxsin", " "), (await $.wv([$t1], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false))), " "), "sahəsi seçilməyib !"), (await $.wv([$t1], "mtWarning", C, false)), [(await $.wv([$t1], "mbok", C, false))], 0], C)));
              return L0.result;
            } else {
              await $.wset([$t1], "Result", (await $.wv([$t1], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            }
          }
          if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ClassName")), "TDBDateTimeEditEh"))) {
            if ($.truthy((await $.and_(((await $.wcall([$t1], "VarIsNull", [(await $.mv(((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Value"))], C))), async () => ((await $.or_((await $.or_(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DateEdit2")), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DateEdit")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DateEdit1"))))))))) {
              await $.wset([$t1], "Result", (await $.wv([$t1], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DateEdit2")))) {
                await $.wset([$t1], "text", "dogulduğu tarix", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DateEdit")))) {
                await $.wset([$t1], "text", "verildiyi tarix", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "DateEdit1")))) {
                await $.wset([$t1], "text", "etibarlıq müddəti", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              await $.stmt((await $.wcall([$t1], "MessageDlg", [$.add($.add($.add($.add("Göndərən şəxsin", " "), (await $.wv([$t1], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false))), " "), "sahəsi seçilməyib !"), (await $.wv([$t1], "mtWarning", C, false)), [(await $.wv([$t1], "mbok", C, false))], 0], C)));
              return L0.result;
            } else {
              await $.wset([$t1], "Result", (await $.wv([$t1], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            }
          }
        } else {
          if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ClassName")), "TEdit"))) {
            if ($.truthy((await $.and_(($.eq((await $.mv(((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), "")), async () => ((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Editpasspin")), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditLastName")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditName1")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditSoname")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditSerial")))), async () => ($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditPassport"))))))))) {
              await $.wset([$t1], "Result", (await $.wv([$t1], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "Editpasspin")))) {
                await $.wset([$t1], "text", "pinkod", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditLastName")))) {
                await $.wset([$t1], "text", "soyadı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditName1")))) {
                await $.wset([$t1], "text", "adı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditSoname")))) {
                await $.wset([$t1], "text", "atasının adı", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditSerial")))) {
                await $.wset([$t1], "text", "seriya", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "EditPassport")))) {
                await $.wset([$t1], "text", "nömrə", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              await $.stmt((await $.wcall([$t1], "MessageDlg", [$.add($.add($.add($.add("Göndərən şəxsin", " "), (await $.wv([$t1], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false))), " "), "sahəsi doldurulmayıb !"), (await $.wv([$t1], "mtWarning", C, false)), [(await $.wv([$t1], "mbok", C, false))], 0], C)));
              return L0.result;
            } else {
              await $.wset([$t1], "Result", (await $.wv([$t1], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            }
          }
          if ($.truthy($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "ClassName")), "TDBLookupComboBox"))) {
            if ($.truthy((await $.and_(($.eq((await $.mv(((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))]))), "Text")), "")), async () => (($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CBoxPassPlace"))))))) {
              await $.wset([$t1], "Result", (await $.wv([$t1], "false", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
              if ($.truthy(($.eq((await $.mv((await $.idx((await $.wv([$t1], "Components", C, false)), [(await $.wv([$t1], "i", { get: async () => L0["i"], set: async (v) => { L0["i"] = v; }, local: true }, false))])), "Name")), "CBoxPassPlace")))) {
                await $.wset([$t1], "text", "sənədin növü", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true });
              }
              await $.stmt((await $.wcall([$t1], "MessageDlg", [$.add($.add($.add($.add("Göndərən şəxsin", " "), (await $.wv([$t1], "text", { get: async () => L0["text"], set: async (v) => { L0["text"] = v; }, local: true }, false))), " "), "sahəsi seçilməyib !"), (await $.wv([$t1], "mtWarning", C, false)), [(await $.wv([$t1], "mbok", C, false))], 0], C)));
              return L0.result;
            } else {
              await $.wset([$t1], "Result", (await $.wv([$t1], "true", C, false)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
            }
          }
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sum"], "kind": "function", "ptypes": ["real"]});
  U.method("TFormNominalCustomers", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "ExpFormNew")), "Rk")))) {
    L0["s"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.mv((await $.v(C, "ExpFormNew")), "CMCurrencyEdit")), "Text"))]));
  } else {
    L0["s"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.mv((await $.v(C, "FormPaymentsCredit")), "CMCurrencyEdit1")), "Text"))]));
  }
  if ($.truthy((await $.call(C, "CheckField", [L0["s"]])))) {
    await $.stmt($.call(C, "Parametr", []));
    await $.set(C, "RH", true);
    await $.mcall((await $.v(C, "FormNominalCustomers")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNominalCustomers", "parametr", async function parametr(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpFormNew")), "Rk")))))) {
    {
      const $t4 = (await $.v(C, "FormPaymentsCredit"));
      const $t5 = (await $.wv([$t4], "ExpressVariables", C, false));
      await $.wset([$t4, $t5], "contractno", (await $.mv((await $.wv([$t4, $t5], "Searchnumberofcredit", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "doc_type", (await $.mv((await $.wv([$t4, $t5], "CBoxPassPlace", C, false)), "KeyValue")), C);
      await $.wset([$t4, $t5], "passpin", (await $.mv((await $.wv([$t4, $t5], "Editpasspin", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "passer", (await $.mv((await $.wv([$t4, $t5], "EditSerial", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "paspnum", (await $.mv((await $.wv([$t4, $t5], "EditPassport", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "doc_country", (await $.mv((await $.wv([$t4, $t5], "issue_country", C, false)), "KeyValue")), C);
      await $.wset([$t4, $t5], "paspplace", (await $.mv((await $.wv([$t4, $t5], "DBCBox_DocTYPE", C, false)), "Text")), C);
      if ($.truthy((await $.wcall([$t4, $t5], "VarIsNull", [(await $.mv((await $.wv([$t4, $t5], "DateEdit", C, false)), "Value"))], C)))) {
        await $.wset([$t4, $t5], "paspdate", (await $.wv([$t4, $t5], "Null", C, false)), C);
      } else {
        await $.wset([$t4, $t5], "paspdate", (await $.mv((await $.wv([$t4, $t5], "DateEdit", C, false)), "Value")), C);
      }
      if ($.truthy((await $.wcall([$t4, $t5], "VarIsNull", [(await $.mv((await $.wv([$t4, $t5], "DateEdit1", C, false)), "Value"))], C)))) {
        await $.wset([$t4, $t5], "passexpire", (await $.wv([$t4, $t5], "Null", C, false)), C);
      } else {
        await $.wset([$t4, $t5], "passexpire", (await $.mv((await $.wv([$t4, $t5], "DateEdit1", C, false)), "Value")), C);
      }
      if ($.truthy((await $.wcall([$t4, $t5], "VarIsNull", [(await $.mv((await $.wv([$t4, $t5], "DBCBox_Citizenship", C, false)), "KeyValue"))], C)))) {
        await $.wset([$t4, $t5], "citizenship", (-(1)), C);
      } else {
        await $.wset([$t4, $t5], "citizenship", (await $.mv((await $.wv([$t4, $t5], "DBCBox_Citizenship", C, false)), "KeyValue")), C);
      }
      await $.wset([$t4, $t5], "lastname", (await $.mv((await $.wv([$t4, $t5], "EditLastName", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "soname", (await $.mv((await $.wv([$t4, $t5], "EditSoname", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "name", (await $.mv((await $.wv([$t4, $t5], "EditName1", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "sex", (await $.mv((await $.wv([$t4, $t5], "CBoxSex", C, false)), "KeyValue")), C);
      await $.wset([$t4, $t5], "fam_status", (await $.mv((await $.wv([$t4, $t5], "CBoxFamStatus", C, false)), "KeyValue")), C);
      await $.wset([$t4, $t5], "bbirthplace", (await $.mv((await $.wv([$t4, $t5], "birthplace", C, false)), "text")), C);
      await $.wset([$t4, $t5], "birth_state", (await $.mv((await $.wv([$t4, $t5], "EditBirthCity", C, false)), "Text")), C);
      if ($.truthy((await $.wcall([$t4, $t5], "VarIsNull", [(await $.mv((await $.wv([$t4, $t5], "DateEdit2", C, false)), "Value"))], C)))) {
        await $.wset([$t4, $t5], "birthday", (await $.wv([$t4, $t5], "Null", C, false)), C);
      } else {
        await $.wset([$t4, $t5], "birthday", (await $.mv((await $.wv([$t4, $t5], "DateEdit2", C, false)), "Value")), C);
      }
      await $.wset([$t4, $t5], "aadrs_state", (await $.mv((await $.wv([$t4, $t5], "adrs_state", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "city", (await $.mv((await $.wv([$t4, $t5], "Adrs_City", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "reg_zip", (await $.mv((await $.wv([$t4, $t5], "ZipQ", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "address", (await $.mv((await $.wv([$t4, $t5], "AdressEdit", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "phone_m", (await $.mv((await $.wv([$t4, $t5], "EditMobil", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "phone_h", (await $.mv((await $.wv([$t4, $t5], "EditPhone", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "e_mail", (await $.mv((await $.wv([$t4, $t5], "EditEmail", C, false)), "Text")), C);
      await $.wset([$t4, $t5], "work_place", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "Work_Place")), "Text")), C);
      await $.wset([$t4, $t5], "work_adrs_spec", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue")), C);
      await $.wset([$t4, $t5], "work_cntr", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue")), C);
      await $.wset([$t4, $t5], "work_city", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue")), C);
      await $.wset([$t4, $t5], "work_state", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "db_tph_state")), "Text")), C);
      await $.wset([$t4, $t5], "work_zip", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text")), C);
      await $.wset([$t4, $t5], "work_adress", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text")), C);
      await $.wset([$t4, $t5], "work_phone_spec", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue")), C);
      await $.wset([$t4, $t5], "work_phconttype", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue")), C);
      await $.wset([$t4, $t5], "work_phoppref", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue")), C);
      await $.wset([$t4, $t5], "work_phone", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text")), C);
      await $.wset([$t4, $t5], "work_phext", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text")), C);
      await $.wset([$t4, $t5], "work_phcode", (await $.mv((await $.mv((await $.wv([$t4, $t5], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text")), C);
      if ($.truthy((await $.mv((await $.wv([$t4, $t5], "RadioButton1", C, false)), "Checked")))) {
        await $.wset([$t4, $t5], "v_nerezident", 1, C);
      } else {
        await $.wset([$t4, $t5], "v_nerezident", 0, C);
      }
    }
  } else {
    {
      const $t6 = (await $.v(C, "ExpFormNew"));
      const $t7 = (await $.wv([$t6], "ExpressVariables", C, false));
      await $.wset([$t6, $t7], "doc_country", (await $.mv((await $.wv([$t6, $t7], "issue_country", C, false)), "KeyValue")), C);
      await $.wset([$t6, $t7], "paspplace", (await $.mv((await $.wv([$t6, $t7], "DBCBox_DocTYPE", C, false)), "Text")), C);
      await $.wset([$t6, $t7], "contractno", (await $.mv((await $.wv([$t6, $t7], "Searchnumberofcredit", C, false)), "Text")), C);
      if ($.truthy((await $.wcall([$t6, $t7], "VarIsNull", [(await $.mv((await $.wv([$t6, $t7], "DateEdit", C, false)), "Value"))], C)))) {
        await $.wset([$t6, $t7], "paspdate", (await $.wv([$t6, $t7], "Null", C, false)), C);
      } else {
        await $.wset([$t6, $t7], "paspdate", (await $.mv((await $.wv([$t6, $t7], "DateEdit", C, false)), "Value")), C);
      }
      if ($.truthy((await $.wcall([$t6, $t7], "VarIsNull", [(await $.mv((await $.wv([$t6, $t7], "DateEdit1", C, false)), "Value"))], C)))) {
        await $.wset([$t6, $t7], "passexpire", (await $.wv([$t6, $t7], "Null", C, false)), C);
      } else {
        await $.wset([$t6, $t7], "passexpire", (await $.mv((await $.wv([$t6, $t7], "DateEdit1", C, false)), "Value")), C);
      }
      if ($.truthy((await $.wcall([$t6, $t7], "VarIsNull", [(await $.mv((await $.wv([$t6, $t7], "DBCBox_Citizenship", C, false)), "KeyValue"))], C)))) {
        await $.wset([$t6, $t7], "citizenship", (-(1)), C);
      } else {
        await $.wset([$t6, $t7], "citizenship", (await $.mv((await $.wv([$t6, $t7], "DBCBox_Citizenship", C, false)), "KeyValue")), C);
      }
      await $.wset([$t6, $t7], "sex", (await $.mv((await $.wv([$t6, $t7], "CBoxSex", C, false)), "KeyValue")), C);
      await $.wset([$t6, $t7], "fam_status", (await $.mv((await $.wv([$t6, $t7], "CBoxFamStatus", C, false)), "KeyValue")), C);
      await $.wset([$t6, $t7], "bbirthplace", (await $.mv((await $.wv([$t6, $t7], "birthplace", C, false)), "text")), C);
      await $.wset([$t6, $t7], "birth_state", (await $.mv((await $.wv([$t6, $t7], "EditBirthCity", C, false)), "Text")), C);
      if ($.truthy((await $.wcall([$t6, $t7], "VarIsNull", [(await $.mv((await $.wv([$t6, $t7], "DateEdit2", C, false)), "Value"))], C)))) {
        await $.wset([$t6, $t7], "birthday", (await $.wv([$t6, $t7], "Null", C, false)), C);
      } else {
        await $.wset([$t6, $t7], "birthday", (await $.mv((await $.wv([$t6, $t7], "DateEdit2", C, false)), "Value")), C);
      }
      await $.wset([$t6, $t7], "aadrs_state", (await $.mv((await $.wv([$t6, $t7], "adrs_state", C, false)), "Text")), C);
      await $.wset([$t6, $t7], "city", (await $.mv((await $.wv([$t6, $t7], "Adrs_City", C, false)), "Text")), C);
      await $.wset([$t6, $t7], "reg_zip", (await $.mv((await $.wv([$t6, $t7], "ZipQ", C, false)), "Text")), C);
      await $.wset([$t6, $t7], "address", (await $.mv((await $.wv([$t6, $t7], "AdressEdit", C, false)), "Text")), C);
      await $.wset([$t6, $t7], "phone_m", (await $.mv((await $.wv([$t6, $t7], "EditMobil", C, false)), "Text")), C);
      await $.wset([$t6, $t7], "phone_h", (await $.mv((await $.wv([$t6, $t7], "EditPhone", C, false)), "Text")), C);
      await $.wset([$t6, $t7], "e_mail", (await $.mv((await $.wv([$t6, $t7], "EditEmail", C, false)), "Text")), C);
      await $.wset([$t6, $t7], "work_place", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "Work_Place")), "Text")), C);
      await $.wset([$t6, $t7], "work_adrs_spec", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue")), C);
      await $.wset([$t6, $t7], "work_cntr", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue")), C);
      await $.wset([$t6, $t7], "work_city", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue")), C);
      await $.wset([$t6, $t7], "work_state", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "db_tph_state")), "Text")), C);
      await $.wset([$t6, $t7], "work_zip", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text")), C);
      await $.wset([$t6, $t7], "work_adress", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text")), C);
      await $.wset([$t6, $t7], "work_phone_spec", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue")), C);
      await $.wset([$t6, $t7], "work_phconttype", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue")), C);
      await $.wset([$t6, $t7], "work_phoppref", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue")), C);
      await $.wset([$t6, $t7], "work_phone", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text")), C);
      await $.wset([$t6, $t7], "work_phext", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text")), C);
      await $.wset([$t6, $t7], "work_phcode", (await $.mv((await $.mv((await $.wv([$t6, $t7], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text")), C);
      if ($.truthy((await $.mv((await $.wv([$t6, $t7], "RadioButton1", C, false)), "Checked")))) {
        await $.wset([$t6, $t7], "v_nerezident", 1, C);
      } else {
        await $.wset([$t6, $t7], "v_nerezident", 0, C);
      }
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormNominalCustomers", "SearchpasspinKeyPress", async function SearchpasspinKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": '', "sum": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpFormNew")), "Rk")))))) {
    L0["sum"] = 0;
    L0["s"] = "";
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
        L0["s"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "name")), 7, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
        if ($.truthy($.eq(L0["s"], "passpin"))) {
          L0["s"] = $.add($.add("upper(", L0["s"]), ")");
        }
        if ($.truthy($.eq(L0["s"], "paspnum"))) {
          L0["s"] = $.add($.add("upper(", L0["s"]), ")");
        }
        if ($.truthy($.eq(L0["s"], "id"))) {
          L0["s"] = $.add("c.", L0["s"]);
        }
        L0["s"] = $.add($.add($.add($.add($.add($.add("(", L0["s"]), "="), "'"), (await $.mv((L0["sender"]), "text"))), "'"), ")");
      }
      {
        const $t8 = (await $.v(C, "ExpDataModule"));
        const $t9 = (await $.wv([$t8], "SearchCustDataSet1", C, false));
        await $.stmt($.wcall([$t8, $t9], "Close", [], C));
        { const $t10 = await $.iset((await $.wv([$t8, $t9], "SQL", C, false)), [47], (await $.wv([$t8, $t9], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t10 !== undefined) { await $.wset([$t8, $t9], "SQL", $t10, C); } }
        await $.stmt($.wcall([$t8, $t9], "Open", [], C));
        if ($.truthy($.eq((await $.wv([$t8, $t9], "RecordCount", C, false)), 0))) {
          await $.stmt((await $.wcall([$t8, $t9], "ShowMessage", ["Müştəri tapılmadı"], C)));
          await $.mset((await $.wv([$t8, $t9], "RadioButton1", C, false)), "Checked", (await $.wv([$t8, $t9], "true", C, false)));
          await $.mcall((await $.wv([$t8, $t9], "EditLastName", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t8, $t9], "EditName1", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t8, $t9], "EditSoname", C, false)), "Clear", []);
          await $.mset((await $.wv([$t8, $t9], "CBoxPassPlace", C, false)), "KeyValue", (-(1)));
          await $.mcall((await $.wv([$t8, $t9], "EditSerial", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t8, $t9], "EditPassport", C, false)), "Clear", []);
          await $.mset((await $.wv([$t8, $t9], "Issue_country", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t8, $t9], "DBCBox_DocTYPE", C, false)), "KeyValue", (-(1)));
          await $.mcall((await $.wv([$t8, $t9], "DateEdit", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t8, $t9], "DateEdit1", C, false)), "Clear", []);
          await $.mset((await $.wv([$t8, $t9], "DBCBox_Citizenship", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t8, $t9], "CBoxSex", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t8, $t9], "CBoxFamStatus", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t8, $t9], "BirthPlace", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t8, $t9], "EditBirthCity", C, false)), "KeyValue", (-(1)));
          await $.mcall((await $.wv([$t8, $t9], "DateEdit2", C, false)), "Clear", []);
          await $.mset((await $.wv([$t8, $t9], "Adrs_State", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t8, $t9], "Adrs_City", C, false)), "KeyValue", (-(1)));
          await $.mcall((await $.wv([$t8, $t9], "ZipQ", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t8, $t9], "EditMobil", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t8, $t9], "EditPhone", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t8, $t9], "EditEmail", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t8, $t9], "AdressEdit", C, false)), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Work_Place")), "Clear", []);
          await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (-(1)));
          await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (-(1)));
          await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (-(1)));
          await $.mcall((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "db_tph_state")), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "db_tph_adress")), "Clear", []);
          await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (-(1)));
          await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (-(1)));
          await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (-(1)));
          await $.mcall((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Db_tph_number")), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Clear", []);
          return L0.result;
        }
        if ($.truthy($.eq((await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["nerezident"], C)), "AsInteger")), 1))) {
          await $.mset((await $.wv([$t8, $t9], "RadioButton1", C, false)), "Checked", (await $.wv([$t8, $t9], "true", C, false)));
        } else {
          await $.mset((await $.wv([$t8, $t9], "RadioButton2", C, false)), "Checked", (await $.wv([$t8, $t9], "true", C, false)));
        }
        await $.mset((await $.wv([$t8, $t9], "ExpressVariables", C, false)), "custid", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["id"], C)), "AsInteger")));
        await $.mset((await $.wv([$t8, $t9], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["passpin"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["cname"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["soname"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["doc_type"], C)), "AsInteger")));
        await $.mset((await $.wv([$t8, $t9], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["passer"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["paspnum"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["doc_country"], C)), "AsVariant")));
        await $.mset((await $.wv([$t8, $t9], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["paspplace"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["paspdate"], C)), "AsVariant")));
        await $.mset((await $.wv([$t8, $t9], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["passexpire"], C)), "AsVariant")));
        await $.mset((await $.wv([$t8, $t9], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["citizenship"], C)), "AsInteger")));
        await $.mset((await $.wv([$t8, $t9], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["sex"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["fam_status"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["birthplace"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["birth_state"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["birthday"], C)), "AsVariant")));
        await $.mset((await $.wv([$t8, $t9], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["adrs_state"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["city"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["reg_zip"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["phone_m"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["phone_h"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["e_mail"], C)), "AsString")));
        await $.mset((await $.wv([$t8, $t9], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["address"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Work_Place")), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_place"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_cntr"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_city"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "db_tph_state")), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_state"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_zip"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_adress"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_phone"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["work_phext"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t8, $t9], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text", (await $.mv((await $.wcall([$t8, $t9], "FieldbyName", ["work_phcode"], C)), "AsString")));
        await $.wset([$t8, $t9], "Sum", $.add((await $.mcall((await $.mv((await $.wv([$t8, $t9], "ExpDataModule", C, false)), "Repair")), "CallFloatFunction", ["SumNominalid", [(await $.mv((await $.wcall([$t8, $t9], "FieldByName", ["id"], C)), "AsInteger"))]])), (await $.wcall([$t8, $t9], "StrToFloat", [(await $.mv((await $.mv((await $.wv([$t8, $t9], "FormPaymentsCredit", C, false)), "CMCurrencyEdit1")), "Text"))], C))), { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true });
        if ($.truthy(($.ge((await $.wv([$t8, $t9], "Sum", { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true }, false)), 20000)))) {
          await $.mset((await $.wv([$t8, $t9], "TabSheet2", C, false)), "TabVisible", (await $.wv([$t8, $t9], "True", C, false)));
          await $.mset((await $.wv([$t8, $t9], "TabSheet3", C, false)), "TabVisible", (await $.wv([$t8, $t9], "True", C, false)));
        } else {
          await $.mset((await $.wv([$t8, $t9], "TabSheet2", C, false)), "TabVisible", (await $.wv([$t8, $t9], "False", C, false)));
          await $.mset((await $.wv([$t8, $t9], "TabSheet3", C, false)), "TabVisible", (await $.wv([$t8, $t9], "False", C, false)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormNominalCustomers", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormNominalCustomers")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNominalCustomers", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "TabSheet2")), "TabVisible")))))) {
    await $.mset((await $.v(C, "TabSheet2")), "TabVisible", true);
  }
  if ($.truthy($.not(((await $.mv((await $.v(C, "TabSheet3")), "TabVisible")))))) {
    await $.mset((await $.v(C, "TabSheet3")), "TabVisible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNominalCustomers", "CBoxPassPlaceCloseUp", async function CBoxPassPlaceCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t11 = (await $.mv((await $.v(C, "CBoxPassPlace")), "KeyValue"));
    if ($.eq($t11, 1)) {
      await $.mset((await $.v(C, "EditSerial")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerial")), "ReadOnly", true);
      await $.mset((await $.v(C, "EditPassport")), "MaxLength", 8);
      await $.mcall((await $.v(C, "EditPassport")), "Clear", []);
    }
    else if ($.eq($t11, 2)) {
      await $.mset((await $.v(C, "EditSerial")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerial")), "ReadOnly", true);
      await $.mset((await $.v(C, "EditPassport")), "MaxLength", 8);
      await $.mcall((await $.v(C, "EditPassport")), "Clear", []);
    }
    else if ($.eq($t11, 3)) {
      await $.mset((await $.v(C, "EditSerial")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerial")), "ReadOnly", false);
      await $.mset((await $.v(C, "EditPassport")), "MaxLength", 0);
      await $.mcall((await $.v(C, "EditPassport")), "Clear", []);
    }
    else if ($.eq($t11, 4)) {
      await $.mset((await $.v(C, "EditSerial")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "DocTypesDataSet")), "FieldByName", ["series"])), "AsString")));
      await $.mset((await $.v(C, "EditSerial")), "ReadOnly", false);
      await $.mset((await $.v(C, "EditPassport")), "MaxLength", 0);
      await $.mcall((await $.v(C, "EditPassport")), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNominalCustomers", "DateEdit1Exit", async function DateEdit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "f": false};
  await $.fixArgs(L0, ["sender"]);
  L0["f"] = (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallBooleanFunction", ["Date_Difference", [(await $.mv((await $.v(C, "DateEdit1")), "Value"))]]));
  if ($.truthy(L0["f"])) {
    await $.stmt((await $.call(C, "ShowMessage", ["Etibarlıq müddəti sistem tarixindən kiçik və ya bərabər ola bilməz!.........."])));
    await $.mcall((await $.v(C, "DateEdit1")), "Clear", []);
    await $.mcall((await $.v(C, "DateEdit1")), "SetFocus", []);
    return L0.result;
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormNominalCustomers", "SearchnumberofcreditKeyPress", async function SearchnumberofcreditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "s": '', "sum": 0, "f": null, "sd": 0, "tx": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpFormNew")), "Rk")))))) {
    L0["sum"] = 0;
    L0["s"] = "";
    if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
      if ($.truthy($.ne((await $.mv((L0["sender"]), "Text")), ""))) {
        L0["s"] = (await $.call(C, "copy", [(await $.mv((L0["sender"]), "name")), 7, (await $.call(C, "length", [(await $.mv((L0["sender"]), "name"))]))]));
        if ($.truthy($.eq(L0["s"], "numberofcredit"))) {
          L0["s"] = $.add($.add("upper(", L0["s"]), ")");
        }
        L0["s"] = $.add($.add($.add($.add($.add($.add("(", L0["s"]), "="), "'"), (await $.mv((L0["sender"]), "text"))), "'"), ")");
      }
      L0["tx"] = (await $.mv((await $.v(C, "Searchnumberofcredit")), "text"));
      L0["f"] = (await $.mcall((await $.mv((await $.v(C, "ExpDataModule")), "Repair")), "CallIntegerFunction", ["ExpSimvolAccount", [L0["tx"], (await $.mv((await $.mv((await $.v(C, "FormPaymentsCredit")), "DBLookupComboBox1")), "KeyValue"))]]));
      if ($.truthy($.eq(L0["f"], 0))) {
        await $.stmt((await $.call(C, "ShowMessage", ["Müqaviləni düzgün daxil edin!...."])));
        return L0.result;
      }
      {
        const $t12 = (await $.v(C, "ExpDataModule"));
        const $t13 = (await $.wv([$t12], "SearchContractno", C, false));
        await $.stmt($.wcall([$t12, $t13], "Close", [], C));
        { const $t14 = await $.iset((await $.wv([$t12, $t13], "SQL", C, false)), [1], (await $.wv([$t12, $t13], "S", { get: async () => L0["s"], set: async (v) => { L0["s"] = v; }, local: true }, false))); if ($t14 !== undefined) { await $.wset([$t12, $t13], "SQL", $t14, C); } }
        await $.stmt($.wcall([$t12, $t13], "Open", [], C));
        if ($.truthy($.eq((await $.wv([$t12, $t13], "RecordCount", C, false)), 0))) {
          await $.stmt((await $.wcall([$t12, $t13], "ShowMessage", ["Müqavilə  tapılmadı"], C)));
          await $.mset((await $.wv([$t12, $t13], "RadioButton1", C, false)), "Checked", (await $.wv([$t12, $t13], "true", C, false)));
          await $.mcall((await $.wv([$t12, $t13], "EditLastName", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t12, $t13], "EditName1", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t12, $t13], "EditSoname", C, false)), "Clear", []);
          await $.mset((await $.wv([$t12, $t13], "CBoxPassPlace", C, false)), "KeyValue", (-(1)));
          await $.mcall((await $.wv([$t12, $t13], "EditSerial", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t12, $t13], "EditPassport", C, false)), "Clear", []);
          await $.mset((await $.wv([$t12, $t13], "Issue_country", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t12, $t13], "DBCBox_DocTYPE", C, false)), "KeyValue", (-(1)));
          await $.mcall((await $.wv([$t12, $t13], "DateEdit", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t12, $t13], "DateEdit1", C, false)), "Clear", []);
          await $.mset((await $.wv([$t12, $t13], "DBCBox_Citizenship", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t12, $t13], "CBoxSex", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t12, $t13], "CBoxFamStatus", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t12, $t13], "BirthPlace", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t12, $t13], "EditBirthCity", C, false)), "KeyValue", (-(1)));
          await $.mcall((await $.wv([$t12, $t13], "DateEdit2", C, false)), "Clear", []);
          await $.mset((await $.wv([$t12, $t13], "Adrs_State", C, false)), "KeyValue", (-(1)));
          await $.mset((await $.wv([$t12, $t13], "Adrs_City", C, false)), "KeyValue", (-(1)));
          await $.mcall((await $.wv([$t12, $t13], "ZipQ", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t12, $t13], "EditMobil", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t12, $t13], "EditPhone", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t12, $t13], "EditEmail", C, false)), "Clear", []);
          await $.mcall((await $.wv([$t12, $t13], "AdressEdit", C, false)), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Work_Place")), "Clear", []);
          await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (-(1)));
          await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (-(1)));
          await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (-(1)));
          await $.mcall((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "db_tph_state")), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "db_tph_adress")), "Clear", []);
          await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (-(1)));
          await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (-(1)));
          await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (-(1)));
          await $.mcall((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Db_tph_number")), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Clear", []);
          await $.mcall((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Clear", []);
          return L0.result;
        }
        if ($.truthy($.eq((await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["nerezident"], C)), "AsInteger")), 1))) {
          await $.mset((await $.wv([$t12, $t13], "RadioButton1", C, false)), "Checked", (await $.wv([$t12, $t13], "true", C, false)));
        } else {
          await $.mset((await $.wv([$t12, $t13], "RadioButton2", C, false)), "Checked", (await $.wv([$t12, $t13], "true", C, false)));
        }
        await $.mset((await $.wv([$t12, $t13], "ExpressVariables", C, false)), "contractno", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["numberofcredit"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "ExpressVariables", C, false)), "custid", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["id"], C)), "AsInteger")));
        await $.mset((await $.wv([$t12, $t13], "Editpasspin", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["passpin"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "EditLastName", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["lastname"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "EditName1", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["cname"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "EditSoname", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["soname"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "CBoxPassPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["doc_type"], C)), "AsInteger")));
        await $.mset((await $.wv([$t12, $t13], "EditSerial", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["passer"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "EditPassport", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["paspnum"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "Issue_country", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["doc_country"], C)), "AsVariant")));
        await $.mset((await $.wv([$t12, $t13], "DBCBox_DocTYPE", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["paspplace"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "DateEdit", C, false)), "Value", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["paspdate"], C)), "AsVariant")));
        await $.mset((await $.wv([$t12, $t13], "DateEdit1", C, false)), "Value", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["passexpire"], C)), "AsVariant")));
        await $.mset((await $.wv([$t12, $t13], "DBCBox_Citizenship", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["citizenship"], C)), "AsInteger")));
        await $.mset((await $.wv([$t12, $t13], "CBoxSex", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["sex"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "CBoxFamStatus", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["fam_status"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "BirthPlace", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["birthplace"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "EditBirthCity", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["birth_state"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "DateEdit2", C, false)), "Value", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["birthday"], C)), "AsVariant")));
        await $.mset((await $.wv([$t12, $t13], "Adrs_State", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["adrs_state"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "Adrs_City", C, false)), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["city"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "ZipQ", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["reg_zip"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "EditMobil", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["phone_m"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "EditPhone", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["phone_h"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "EditEmail", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["e_mail"], C)), "AsString")));
        await $.mset((await $.wv([$t12, $t13], "AdressEdit", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["address"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Work_Place")), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_place"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Address_type")), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_adrs_spec"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "CountryByConctType")), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_cntr"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "CityByConctType")), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_city"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "db_tph_state")), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_state"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "DB_tph_zip")), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_zip"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "db_tph_adress")), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_adress"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "tph_contact_type")), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_phone_spec"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "tph_communication_type")), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_phconttype"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "tph_country_prefix")), "KeyValue", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_phoppref"], C)), "AsVariant")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Db_tph_number")), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_phone"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Db_tph_extension")), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["work_phext"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t12, $t13], "FormNominalCustomers", C, false)), "Db_tph_cod")), "Text", (await $.mv((await $.wcall([$t12, $t13], "FieldbyName", ["work_phcode"], C)), "AsString")));
        await $.wset([$t12, $t13], "Sum", $.add((await $.mcall((await $.mv((await $.wv([$t12, $t13], "ExpDataModule", C, false)), "Repair")), "CallFloatFunction", ["SumNominalid", [(await $.mv((await $.wcall([$t12, $t13], "FieldByName", ["id"], C)), "AsInteger"))]])), (await $.wcall([$t12, $t13], "StrToFloat", [(await $.mv((await $.mv((await $.wv([$t12, $t13], "FormPaymentsCredit", C, false)), "CMCurrencyEdit1")), "Text"))], C))), { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true });
        if ($.truthy(($.ge((await $.wv([$t12, $t13], "Sum", { get: async () => L0["sum"], set: async (v) => { L0["sum"] = v; }, local: true }, false)), 20000)))) {
          await $.mset((await $.wv([$t12, $t13], "TabSheet2", C, false)), "TabVisible", (await $.wv([$t12, $t13], "True", C, false)));
          await $.mset((await $.wv([$t12, $t13], "TabSheet3", C, false)), "TabVisible", (await $.wv([$t12, $t13], "True", C, false)));
        } else {
          await $.mset((await $.wv([$t12, $t13], "TabSheet2", C, false)), "TabVisible", (await $.wv([$t12, $t13], "False", C, false)));
          await $.mset((await $.wv([$t12, $t13], "TabSheet3", C, false)), "TabVisible", (await $.wv([$t12, $t13], "False", C, false)));
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormNominalCustomers", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ExpFormNew")), "Rk", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormNominalCustomers", "NominalClear", async function NominalClear(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"r": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["r"]);
  await $.mset((await $.v(C, "RadioButton1")), "Checked", true);
  if ($.truthy($.not((L0["r"])))) {
    await $.mcall((await $.v(C, "Editpasspin")), "Clear", []);
    await $.mcall((await $.v(C, "EditLastName")), "Clear", []);
    await $.mcall((await $.v(C, "EditName1")), "Clear", []);
    await $.mcall((await $.v(C, "EditSoname")), "Clear", []);
    await $.mset((await $.v(C, "CBoxPassPlace")), "KeyValue", (-(1)));
    await $.mcall((await $.v(C, "EditSerial")), "Clear", []);
    await $.mcall((await $.v(C, "EditPassport")), "Clear", []);
    await $.mcall((await $.v(C, "Searchnumberofcredit")), "Clear", []);
  }
  await $.mset((await $.v(C, "Issue_country")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBCBox_DocTYPE")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "DateEdit")), "Clear", []);
  await $.mcall((await $.v(C, "DateEdit1")), "Clear", []);
  await $.mset((await $.v(C, "DBCBox_Citizenship")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CBoxSex")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "CBoxFamStatus")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "BirthPlace")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "EditBirthCity")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "DateEdit2")), "Clear", []);
  await $.mset((await $.v(C, "Adrs_State")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "Adrs_City")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "ZipQ")), "Clear", []);
  await $.mcall((await $.v(C, "EditMobil")), "Clear", []);
  await $.mcall((await $.v(C, "EditPhone")), "Clear", []);
  await $.mcall((await $.v(C, "EditEmail")), "Clear", []);
  await $.mcall((await $.v(C, "AdressEdit")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "FormNominalCustomers")), "Work_Place")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "Address_type")), "KeyValue", (-(1)));
  await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "CountryByConctType")), "KeyValue", (-(1)));
  await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "CityByConctType")), "KeyValue", (-(1)));
  await $.mcall((await $.mv((await $.v(C, "FormNominalCustomers")), "db_tph_state")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "FormNominalCustomers")), "DB_tph_zip")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "FormNominalCustomers")), "db_tph_adress")), "Clear", []);
  await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "tph_contact_type")), "KeyValue", (-(1)));
  await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "tph_communication_type")), "KeyValue", (-(1)));
  await $.mset((await $.mv((await $.v(C, "FormNominalCustomers")), "tph_country_prefix")), "KeyValue", (-(1)));
  await $.mcall((await $.mv((await $.v(C, "FormNominalCustomers")), "Db_tph_number")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "FormNominalCustomers")), "Db_tph_extension")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "FormNominalCustomers")), "Db_tph_cod")), "Clear", []);
  return L0.result;
}, {"params": ["R"], "kind": "procedure", "ptypes": ["boolean"]});
  U.method("TFormNominalCustomers", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  if ($.truthy($.not(((await $.mv((await $.v(C, "ExpFormNew")), "Rk")))))) {
    if ($.truthy(((await $.and_(($.eq((await $.mv((await $.v(C, "FormPaymentsCredit")), "FForm")), 0)), async () => ($.eq((await $.v(C, "RH")), false))))))) {
      await $.mset((await $.v(C, "ExpFormNew")), "Rk", false);
      await $.stmt((await $.call(C, "NominalClear", [(await $.mv((await $.v(C, "ExpFormNew")), "Rk"))])));
      await $.mset((await $.v(C, "Searchpasspin")), "Enabled", true);
      await $.mset((await $.v(C, "Searchpasspin")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Searchpaspnum")), "Enabled", true);
      await $.mset((await $.v(C, "Searchpaspnum")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Searchid")), "Enabled", true);
      await $.mset((await $.v(C, "Searchid")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Searchnumberofcredit")), "Enabled", true);
      await $.mset((await $.v(C, "Searchnumberofcredit")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditLastName")), "Enabled", true);
      await $.mset((await $.v(C, "EditLastName")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditName1")), "Enabled", true);
      await $.mset((await $.v(C, "EditName1")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditSoname")), "Enabled", true);
      await $.mset((await $.v(C, "EditSoName")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "Editpasspin")), "Enabled", true);
      await $.mset((await $.v(C, "Editpasspin")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "CBoxPassPlace")), "Enabled", true);
      await $.mset((await $.v(C, "CBoxPassPlace")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditSerial")), "Enabled", true);
      await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditPassport")), "Enabled", true);
      await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "RadioButton1")), "Enabled", true);
      await $.mset((await $.v(C, "RadioButton2")), "Enabled", true);
      await $.mset((await $.v(C, "DBCBox_DocTYPE")), "Enabled", true);
      await $.mset((await $.v(C, "DBCBox_DocTYPE")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "DateEdit")), "Enabled", true);
      await $.mset((await $.v(C, "DateEdit")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditMobil")), "Enabled", true);
      await $.mset((await $.v(C, "EditMobil")), "Color", (await $.v(C, "clWhite")));
      await $.mset((await $.v(C, "EditPhone")), "Enabled", true);
      await $.mset((await $.v(C, "EditPhone")), "Color", (await $.v(C, "clWhite")));
      if ($.truthy($.ge((await $.mv((await $.v(C, "FormPaymentsCredit")), "Sum")), 20000))) {
        await $.mset((await $.v(C, "Label53")), "Visible", true);
        await $.mset((await $.v(C, "Label54")), "Visible", true);
        await $.mset((await $.v(C, "Label55")), "Visible", true);
        await $.mset((await $.v(C, "Label56")), "Visible", true);
        await $.mset((await $.v(C, "Label57")), "Visible", true);
        await $.mset((await $.v(C, "Label61")), "Visible", true);
        await $.mset((await $.v(C, "Label62")), "Visible", true);
        await $.mset((await $.v(C, "Label63")), "Visible", true);
        await $.mset((await $.v(C, "Label64")), "Visible", true);
        await $.mset((await $.v(C, "Label65")), "Visible", true);
        await $.mset((await $.v(C, "Label66")), "Visible", true);
        await $.mset((await $.v(C, "Label67")), "Visible", true);
        await $.mset((await $.v(C, "Label68")), "Visible", true);
        await $.mset((await $.v(C, "Label69")), "Visible", true);
        await $.mset((await $.v(C, "Label70")), "Visible", true);
        await $.mset((await $.v(C, "Label71")), "Visible", true);
        await $.mset((await $.v(C, "Label72")), "Visible", true);
        await $.mset((await $.v(C, "Label73")), "Visible", true);
        await $.mset((await $.v(C, "Label74")), "Visible", true);
        await $.mset((await $.v(C, "Label75")), "Visible", true);
        await $.mset((await $.v(C, "Label76")), "Visible", true);
        await $.mset((await $.v(C, "Label77")), "Visible", true);
        await $.mset((await $.v(C, "Label78")), "Visible", true);
        await $.mset((await $.v(C, "Label79")), "Visible", true);
      }
    }
  } else {
    await $.mset((await $.v(C, "Searchpasspin")), "Enabled", false);
    await $.mset((await $.v(C, "Searchpasspin")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "Searchpaspnum")), "Enabled", false);
    await $.mset((await $.v(C, "Searchpaspnum")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "Searchid")), "Enabled", false);
    await $.mset((await $.v(C, "Searchid")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "Searchnumberofcredit")), "Enabled", false);
    await $.mset((await $.v(C, "Searchnumberofcredit")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "EditLastName")), "Enabled", false);
    await $.mset((await $.v(C, "EditLastName")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "EditName1")), "Enabled", false);
    await $.mset((await $.v(C, "EditName1")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "EditSoname")), "Enabled", false);
    await $.mset((await $.v(C, "EditSoName")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "Editpasspin")), "Enabled", false);
    await $.mset((await $.v(C, "Editpasspin")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "CBoxPassPlace")), "Enabled", false);
    await $.mset((await $.v(C, "CBoxPassPlace")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "EditSerial")), "Enabled", false);
    await $.mset((await $.v(C, "EditSerial")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "EditPassport")), "Enabled", false);
    await $.mset((await $.v(C, "EditPassport")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "RadioButton1")), "Enabled", false);
    await $.mset((await $.v(C, "RadioButton2")), "Enabled", false);
    await $.mset((await $.v(C, "DBCBox_DocTYPE")), "Enabled", false);
    await $.mset((await $.v(C, "DBCBox_DocTYPE")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "DateEdit")), "Enabled", false);
    await $.mset((await $.v(C, "DateEdit")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "EditMobil")), "Enabled", false);
    await $.mset((await $.v(C, "EditMobil")), "Color", (await $.v(C, "clSilver")));
    await $.mset((await $.v(C, "EditPhone")), "Enabled", false);
    await $.mset((await $.v(C, "EditPhone")), "Color", (await $.v(C, "clSilver")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
