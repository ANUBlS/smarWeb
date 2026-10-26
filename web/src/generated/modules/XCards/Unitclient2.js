// Generated from Unitclient2.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unitclient2", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrlsEh", "DBCtrls", "Grids", "DBGrids", "Mask", "ComCtrls", "db", "CurrencyEdit", "Menus", "DBLookupEh", "Variants", "NLSLocalizer", "DBGridEh", "Unit18", "creditinfopas", "dpforms", "newcard", "SBTranslateProc", "sboapiDataModuleImpl", "multiform"]);
  const C = [U];
  U.defClass("Tclients2", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "combobox10": {"name": "ComboBox10", "type": "TComboBox"}, "button5": {"name": "Button5", "type": "TButton"}, "combobox6": {"name": "ComboBox6", "type": "TComboBox"}, "combobox7": {"name": "ComboBox7", "type": "TComboBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "combobox9": {"name": "ComboBox9", "type": "TComboBox"}, "datetimepicker4": {"name": "DateTimePicker4", "type": "TDateTimePicker"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "edit19": {"name": "Edit19", "type": "TEdit"}, "edit20": {"name": "Edit20", "type": "TEdit"}, "edit21": {"name": "Edit21", "type": "TEdit"}, "edit22": {"name": "Edit22", "type": "TEdit"}, "edit23": {"name": "Edit23", "type": "TEdit"}, "edit24": {"name": "Edit24", "type": "TEdit"}, "edit25": {"name": "Edit25", "type": "TEdit"}, "edit26": {"name": "Edit26", "type": "TEdit"}, "combobox4": {"name": "ComboBox4", "type": "TComboBox"}, "combobox5": {"name": "ComboBox5", "type": "TComboBox"}, "edit27": {"name": "Edit27", "type": "TEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "combobox11": {"name": "ComboBox11", "type": "TComboBox"}, "combobox12": {"name": "ComboBox12", "type": "TComboBox"}, "datetimepicker5": {"name": "DateTimePicker5", "type": "TDateTimePicker"}, "datetimepicker6": {"name": "DateTimePicker6", "type": "TDateTimePicker"}, "datetimepicker7": {"name": "DateTimePicker7", "type": "TDateTimePicker"}, "datetimepicker8": {"name": "DateTimePicker8", "type": "TDateTimePicker"}, "edit28": {"name": "Edit28", "type": "TEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "edit29": {"name": "Edit29", "type": "TEdit"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "dbgrid6": {"name": "DBGrid6", "type": "TDBGrid"}, "edit32": {"name": "Edit32", "type": "TEdit"}, "edit33": {"name": "Edit33", "type": "TEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "button6": {"name": "Button6", "type": "TButton"}, "popupmenu1": {"name": "PopupMenu1", "type": "TPopupMenu"}, "sil1": {"name": "SIL1", "type": "TMenuItem"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboboxEh"}, "combobox8": {"name": "ComboBox8", "type": "TComboBox"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit_acc_name": {"name": "Edit_acc_name", "type": "TEdit"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("clients2", null, "Tclients2");
    U.var_("multiacc", '', "String");
    U.var_("multival", '', "String");
  });
  U.method("Tclients2", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "z": 0, "k": 0, "acc": '', "aaa": '', "ke": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["ke"] = (await $.call(C, "char", [13]));
  await $.mcall((await $.v(C, "ComboBox9")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "First", []);
  { const $t1 = (await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "recordcount"));
    L0["k"] = 0;
    let $t2 = true;
    for (;;) {
      if (!$t2) { L0["k"] = $.succ(L0["k"], 1); }
      $t2 = false;
      if (!($.ord(L0["k"]) <= $.ord($t1))) break;
      if ($.truthy($.eq(L0["k"], 0))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox9")), "Items")), "add", [" "])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox9")), "Items")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "fieldbyname", ["TYPE"])), "asstring"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "next", []);
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "NEW"))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid6")), "DataSource")), "DataSet")), "Close", []);
    await $.mset((await $.v(C, "Button3")), "Enabled", false);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "Close", []);
    await $.mset((await $.v(C, "Edit29")), "Text", "");
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Value", "");
    await $.mset((await $.v(C, "Edit33")), "Text", "");
    await $.mset((await $.v(C, "DBEdit3")), "Text", "");
    await $.mset((await $.v(C, "Edit_acc_name")), "Text", "");
    await $.mset((await $.v(C, "CheckBox3")), "Checked", false);
    await $.mset((await $.v(C, "DBEdit1")), "Text", "");
    await $.mset((await $.v(C, "DBEdit2")), "Text", "");
    await $.mset((await $.v(C, "DBEdit18")), "Text", "");
    await $.mcall((await $.v(C, "DBGrid5")), "Refresh", []);
    await $.mset((await $.v(C, "Edit15")), "Text", "");
    await $.mset((await $.v(C, "Edit16")), "Text", "");
    await $.mset((await $.v(C, "Edit18")), "Text", "");
    await $.mset((await $.v(C, "Edit17")), "Text", "");
    await $.mset((await $.v(C, "Edit27")), "Text", "");
    await $.mset((await $.v(C, "Edit22")), "Text", "");
    await $.mset((await $.v(C, "ComboBox4")), "Text", "");
    await $.mset((await $.v(C, "ComboBox1")), "Text", "");
    await $.mset((await $.v(C, "ComboBox12")), "Text", "");
    await $.mset((await $.v(C, "Edit28")), "Text", "0");
    await $.mset((await $.v(C, "Edit26")), "Text", "");
    await $.mset((await $.v(C, "Edit23")), "Text", "");
    await $.mset((await $.v(C, "ComboBox2")), "Text", "");
    await $.mset((await $.v(C, "Edit25")), "Text", "");
    await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
    await $.mset((await $.v(C, "ComboBox11")), "Text", "");
    await $.mset((await $.v(C, "ComboBox10")), "Text", "");
    await $.mset((await $.v(C, "Edit15")), "Enabled", true);
    await $.mset((await $.v(C, "Edit16")), "Enabled", true);
    await $.mset((await $.v(C, "Edit18")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", true);
    await $.mset((await $.v(C, "Edit17")), "Enabled", true);
    await $.mset((await $.v(C, "Edit27")), "Enabled", true);
    await $.mset((await $.v(C, "Edit20")), "Enabled", true);
    await $.mset((await $.v(C, "Edit19")), "Enabled", true);
    await $.mset((await $.v(C, "Edit22")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", true);
    await $.mset((await $.v(C, "Edit28")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", true);
    await $.mset((await $.v(C, "Edit25")), "Enabled", true);
    await $.mset((await $.v(C, "Edit21")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", true);
    await $.mset((await $.v(C, "Edit14")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox9")), "Enabled", false);
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", false);
    await $.mset((await $.v(C, "dbgrid2")), "Enabled", false);
    await $.mset((await $.v(C, "DBGrid5")), "Enabled", false);
    await $.mset((await $.v(C, "dbgrid6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "text", "CARD OK");
    await $.mset((await $.v(C, "Edit14")), "Text", "");
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.v(C, "date")));
    await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.v(C, "date")));
    await $.mset((await $.v(C, "DateTimePicker7")), "DateTime", (await $.v(C, "date")));
    await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", (await $.v(C, "date")));
    await $.mset((await $.v(C, "ComboBox4")), "Text", "RESIDENT");
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Close", []);
    await $.mset((await $.v(C, "Edit24")), "Text", "");
    await $.mset((await $.v(C, "Edit28")), "Color", (await $.v(C, "clWindow")));
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Text", "");
    await $.mset((await $.v(C, "Edit33")), "Enabled", true);
    await $.mset((await $.v(C, "DBEdit18")), "Text", "");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "EDIT"))) {
    await $.mset((await $.v(C, "Button3")), "Enabled", true);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Open", []);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "asstring")));
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Visible", true);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "multicount")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "multicount")), "SetVariable", ["rbs", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "asstring"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "multicount")), "open", []);
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "multicount")), "fieldbyname", ["multi"])), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "CheckBox4")), "Checked", true);
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.v(C, "null"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "asstring"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "SetVariable", ["numb", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "ASSTRING"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "ASSTRING"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", true);
    await $.mset((await $.v(C, "Edit14")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["kli_id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "SetVariable", ["RBSNUMBER", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "ASSTRING"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "Open", []);
    await $.mset((await $.v(C, "Edit29")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "fieldbyname", ["VAL_NAME"])), "asstring")));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "SetVariable", ["acc_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["ACCID"])), "Asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "Open", []);
    await $.mset((await $.v(C, "Edit33")), "Visible", true);
    await $.mset((await $.v(C, "Edit33")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "fieldbyname", ["ostat"])), "asstring")));
    await $.mset((await $.v(C, "Edit33")), "Enabled", false);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "SetVariable", ["rbsnumber", (await $.mv((await $.v(C, "DBLookupComboBox6")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "Open", []);
    await $.mset((await $.v(C, "Edit15")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["FNAME"])), "asstring")));
    await $.mset((await $.v(C, "edit15")), "Visible", true);
    await $.mset((await $.v(C, "Edit16")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["LNAME"])), "asstring")));
    await $.mset((await $.v(C, "edit16")), "Visible", true);
    await $.mset((await $.v(C, "Edit18")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["PASSPORT"])), "asstring")));
    await $.mset((await $.v(C, "edit18")), "Visible", true);
    await $.mset((await $.v(C, "DateTimePicker7")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["BIRTHDAY"])), "asdatetime")));
    await $.mset((await $.v(C, "DateTimePicker7")), "Visible", true);
    await $.mset((await $.v(C, "Edit17")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["HOMEPHONE"])), "asstring")));
    await $.mset((await $.v(C, "edit17")), "Visible", true);
    await $.mset((await $.v(C, "Edit27")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["WORKPHONE"])), "asstring")));
    await $.mset((await $.v(C, "edit27")), "Visible", true);
    await $.mset((await $.v(C, "Edit20")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["COUNTRY"])), "asstring")));
    await $.mset((await $.v(C, "edit20")), "Visible", true);
    await $.mset((await $.v(C, "Edit19")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["CITY"])), "asstring")));
    await $.mset((await $.v(C, "edit19")), "Visible", true);
    await $.mset((await $.v(C, "Edit22")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["ADDRESS"])), "asstring")));
    await $.mset((await $.v(C, "edit22")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["RESIDENT"])), "asstring")));
    await $.mset((await $.v(C, "ComboBox4")), "visible", true);
    await $.mset((await $.v(C, "ComboBox1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["CARDTYPE"])), "asstring")));
    await $.mset((await $.v(C, "ComboBox1")), "visible", true);
    await $.mset((await $.v(C, "ComboBox12")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["CARDSTATUS"])), "asstring")));
    await $.mset((await $.v(C, "ComboBox12")), "visible", true);
    await $.mset((await $.v(C, "Edit28")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["CREDIT_LIM"])), "asstring")));
    await $.mset((await $.v(C, "edit28")), "Visible", true);
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["DATEOPEN"])), "asdatetime")));
    await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["EXPIRY"])), "asdatetime")));
    await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["EXPIRY"])), "asdatetime")));
    await $.mset((await $.v(C, "Edit26")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["REFERENCE"])), "asstring")));
    await $.mset((await $.v(C, "edit26")), "Visible", true);
    await $.mset((await $.v(C, "Edit23")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["EMBOSSNAME"])), "asstring")));
    await $.mset((await $.v(C, "edit23")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["COMPANY"])), "asstring")));
    await $.mset((await $.v(C, "ComboBox2")), "visible", true);
    await $.mset((await $.v(C, "Edit25")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["SECURITY"])), "asstring")));
    await $.mset((await $.v(C, "edit25")), "Visible", true);
    await $.mset((await $.v(C, "Edit21")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["LANG_CODE"])), "asstring")));
    await $.mset((await $.v(C, "edit21")), "Visible", true);
    await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
    await $.mset((await $.v(C, "ComboBox11")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["TYPES"])), "asstring")));
    await $.mset((await $.v(C, "ComboBox11")), "visible", true);
    await $.mset((await $.v(C, "ComboBox10")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["TITUL"])), "asstring")));
    await $.mset((await $.v(C, "ComboBox10")), "visible", true);
    await $.mset((await $.v(C, "Edit24")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["CARDNUMBER"])), "asstring")));
    await $.mset((await $.v(C, "Edit24")), "Visible", true);
    await $.mset((await $.v(C, "Edit15")), "Enabled", false);
    await $.mset((await $.v(C, "Edit16")), "Enabled", false);
    await $.mset((await $.v(C, "Edit18")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox9")), "Enabled", false);
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", true);
    await $.mset((await $.v(C, "dbgrid2")), "Enabled", true);
    await $.mset((await $.v(C, "DBGrid5")), "Enabled", true);
    await $.mset((await $.v(C, "dbgrid6")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox5")), "Enabled", false);
    await $.mset((await $.v(C, "DBEdit17")), "Visible", true);
    await $.mset((await $.v(C, "Edit33")), "Visible", false);
  }
  await $.mset((await $.v(C, "ComboBox5")), "Text", "WITH");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "Edit14Enter", async function Edit14Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboBox6")), "value", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "Edit14KeyPress", async function Edit14KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "acc": null, "mus": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Edit14")), "Text")), ""))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.v(C, "null"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", "%%"])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "open", []);
      await $.mset((await $.v(C, "DBLookupComboBox6")), "Text", "");
      await $.mset((await $.v(C, "Edit14")), "Text", "");
    } else {
      L0["mus"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit14")), "Text"))]));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.mv((await $.v(C, "edit14")), "text"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", (await $.v(C, "null"))])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "open", []);
      await $.mset((await $.v(C, "DBLookupComboBox6")), "Text", "");
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "RecordCount")), 0))) {
        L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asVariant"));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "CloseAll", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "SetVariable", ["kid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "Open", []);
        await $.mset((await $.v(C, "Edit_acc_name")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "FieldByName", ["name"])), "AsString")));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive"))]])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Locate", ["ACC_no", L0["acc"], [(await $.v(C, "loCaseInsensitive"))]])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients2", "DBLookupComboBox65Click", async function DBLookupComboBox65Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DataMod_CARDS"));
    const $t4 = (await $.wv([$t3], "HESAB", C, false));
    await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["CID", (await $.wv([$t3, $t4], "null", C, false))], C)));
    await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["p_AccNO", $.add((await $.mv((await $.wv([$t3, $t4], "dblookupcombobox6", C, false)), "Text")), "%")], C)));
  }
  L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asVariant"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  await $.mset((await $.v(C, "Edit14")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "fieldbyname", ["id"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "RecordCount")), 0))) {
    await $.set(C, "krinfo", (await $.mcall((await $.v(C, "tkrinfo")), "create", [Self])));
    await $.mcall((await $.mv((await $.v(C, "krinfo")), "CM_ACTIVE")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "krinfo")), "CM_ACTIVE")), "SetVariable", ["ids", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "krinfo")), "CM_ACTIVE")), "Open", []);
    await $.mcall((await $.v(C, "krinfo")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "Edit28KeyPress", async function Edit28KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), ["\b", ...$.range("0","9")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients2", "Edit15KeyPress", async function Edit15KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.call(C, "ORD", [(await L0["key"].get())])), 126))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), 63))) {
    await L0["key"].set("\u0000");
  }
  await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients2", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_client_new"]])));
  await $.mset((await $.v(C, "Edit1")), "Text", "NEW");
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "NEW"))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid6")), "DataSource")), "DataSet")), "Close", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "Close", []);
    await $.mset((await $.v(C, "Edit14")), "Text", "");
    await $.mset((await $.v(C, "Edit29")), "Text", "");
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Value", "");
    await $.mset((await $.v(C, "Edit33")), "Text", "");
    await $.mset((await $.v(C, "DBEdit3")), "Text", "");
    await $.mset((await $.v(C, "Edit28")), "Text", "0");
    await $.mset((await $.v(C, "Edit_acc_name")), "Text", "");
    await $.mset((await $.v(C, "Edit15")), "Text", "");
    await $.mset((await $.v(C, "Edit16")), "Text", "");
    await $.mset((await $.v(C, "Edit18")), "Text", "");
    await $.mset((await $.v(C, "Edit17")), "Text", "");
    await $.mset((await $.v(C, "Edit27")), "Text", "");
    await $.mset((await $.v(C, "Edit22")), "Text", "");
    await $.mset((await $.v(C, "ComboBox4")), "Text", "");
    await $.mset((await $.v(C, "ComboBox1")), "Text", "");
    await $.mset((await $.v(C, "Edit28")), "Text", "");
    await $.mset((await $.v(C, "Edit26")), "Text", "");
    await $.mset((await $.v(C, "Edit23")), "Text", "");
    await $.mset((await $.v(C, "ComboBox2")), "Text", "");
    await $.mset((await $.v(C, "Edit25")), "Text", "");
    await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
    await $.mset((await $.v(C, "ComboBox11")), "Text", "");
    await $.mset((await $.v(C, "ComboBox10")), "Text", "");
    await $.mset((await $.v(C, "Edit15")), "Enabled", true);
    await $.mset((await $.v(C, "Edit16")), "Enabled", true);
    await $.mset((await $.v(C, "Edit18")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", true);
    await $.mset((await $.v(C, "Edit17")), "Enabled", true);
    await $.mset((await $.v(C, "Edit27")), "Enabled", true);
    await $.mset((await $.v(C, "Edit20")), "Enabled", true);
    await $.mset((await $.v(C, "Edit19")), "Enabled", true);
    await $.mset((await $.v(C, "Edit22")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", true);
    await $.mset((await $.v(C, "Edit28")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", true);
    await $.mset((await $.v(C, "Edit25")), "Enabled", true);
    await $.mset((await $.v(C, "Edit21")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", true);
    await $.mset((await $.v(C, "Edit14")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox9")), "Enabled", false);
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", false);
    await $.mset((await $.v(C, "dbgrid2")), "Enabled", false);
    await $.mset((await $.v(C, "DBGrid5")), "Enabled", false);
    await $.mset((await $.v(C, "dbgrid6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Text", "RESIDENT");
    await $.mset((await $.v(C, "Edit19")), "Text", "BAKU");
    await $.mset((await $.v(C, "Edit20")), "Text", "AZE");
    await $.mset((await $.v(C, "Edit21")), "Text", "AZE");
    await $.mset((await $.v(C, "ComboBox12")), "Text", "CARD OK");
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "DataSource")), "DataSet")), "Close", []);
    await $.mset((await $.v(C, "Edit24")), "Text", "");
    await $.mset((await $.v(C, "Edit28")), "Color", (await $.v(C, "clWindow")));
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Text", "");
    await $.mset((await $.v(C, "Edit33")), "Enabled", true);
    await $.mset((await $.v(C, "DBEdit18")), "Text", "");
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.v(C, "date")));
    await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.v(C, "date")));
    await $.mset((await $.v(C, "DateTimePicker7")), "DateTime", (await $.v(C, "date")));
    await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", (await $.v(C, "date")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "z": 0, "urg": 0, "kr": 0, "wt": '', "acc1": '', "acc2": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_client_save"]])));
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "NEW")), async () => ($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "ONLINE")))))) {
    L0["z"] = 0;
    { const $t5 = $.sub((await $.mv((await $.v(C, "clients2")), "ComponentCount")), 1);
      L0["i"] = 0;
      let $t6 = true;
      for (;;) {
        if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
        $t6 = false;
        if (!($.ord(L0["i"]) <= $.ord($t5))) break;
        if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "Tedit"))))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Color")), (await $.v(C, "claqua"))))) {
            if ($.truthy($.eq((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Text")), ""))) {
              L0["z"] = 1;
            }
          }
        }
        if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "Tcombobox"))))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "clients2")), "Components")), [L0["i"]]))), "Color")), (await $.v(C, "claqua"))))) {
            if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "clients2")), "Components")), [L0["i"]]))), "text")), ""))) {
              L0["z"] = 1;
            }
          }
        }
        if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TDBLookupComboBox"))))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "clients2")), "Components")), [L0["i"]]))), "Color")), (await $.v(C, "claqua"))))) {
            if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "clients2")), "Components")), [L0["i"]]))), "text")), ""))) {
              L0["z"] = 1;
            }
          }
        }
        await $.tick();
      }
    }
    if ($.truthy($.eq(L0["z"], 1))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Rəngli xanalar tam doldurulmayıb!"])));
      return L0.result;
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fcardtype")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fcardtype")), "SetVariable", ["cnam", (await $.mv((await $.v(C, "ComboBox1")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fcardtype")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit18")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fcardtype")), "fieldbyname", ["CURRENCY"])), "AsString"))))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "close", []);
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "open", []);
      await $.mset((await $.v(C, "edit26")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "fieldbyname", ["refe"])), "asstring")));
      if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
        L0["urg"] = 1;
      } else {
        L0["urg"] = 0;
      }
      if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
        L0["kr"] = 1;
      } else {
        L0["kr"] = 0;
      }
      if ($.truthy($.lt((await $.call(C, "Length", [(await $.mv((await $.v(C, "Edit23")), "Text"))])), 21))) {
        if ($.truthy($.gt((await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.v(C, "date"))))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["new_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "DBEdit18")), "Text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), 1, L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
          if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox4")), "Checked")), false))) {
            await $.mset((await $.v(C, "edit15")), "text", "");
            await $.mset((await $.v(C, "edit16")), "text", "");
            await $.mset((await $.v(C, "edit15")), "text", "");
            await $.mset((await $.v(C, "edit16")), "text", "");
            await $.mset((await $.v(C, "edit18")), "text", "");
            await $.mset((await $.v(C, "Edit17")), "Text", "");
            await $.mset((await $.v(C, "Edit27")), "Text", "");
            await $.mset((await $.v(C, "Edit20")), "Text", "");
            await $.mset((await $.v(C, "Edit19")), "Text", "");
            await $.mset((await $.v(C, "Edit22")), "Text", "");
            await $.mset((await $.v(C, "ComboBox4")), "text", "");
            await $.mset((await $.v(C, "DBEdit18")), "Text", "");
            await $.mset((await $.v(C, "ComboBox12")), "text", "");
            await $.mset((await $.v(C, "Edit28")), "Text", "");
            await $.mset((await $.v(C, "Edit26")), "Text", "");
            await $.mset((await $.v(C, "Edit23")), "Text", "");
            await $.mset((await $.v(C, "ComboBox2")), "text", "");
            await $.mset((await $.v(C, "Edit25")), "Text", "");
            await $.mset((await $.v(C, "Edit21")), "Text", "");
            await $.mset((await $.v(C, "Edit14")), "Text", "");
            await $.mset((await $.v(C, "ComboBox11")), "text", "");
            await $.mset((await $.v(C, "ComboBox10")), "text", "");
          }
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "close", []);
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "SetVariable", ["rbs", (await $.mv((await $.v(C, "DBLookupComboBox6")), "text"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "Open", []);
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "close", []);
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "SetVariable", ["acc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "fieldbyname", ["id"])), "asinteger"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "Open", []);
          if ($.truthy((await $.mv((await $.v(C, "CheckBox4")), "Checked")))) {
            await $.set(C, "MultiCurrency", (await $.mcall((await $.v(C, "TMultiCurrency")), "Create", [Self])));
            await $.mset((await $.mv((await $.v(C, "MultiCurrency")), "Edit3")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")));
            await $.mset((await $.mv((await $.v(C, "MultiCurrency")), "Edit4")), "Text", "new");
            await $.mcall((await $.v(C, "MultiCurrency")), "ShowModal", []);
          } else {
            await $.stmt((await $.call(C, "ShowMessage", ["Yeni kart əlavə edildi!"])));
          }
          await $.stmt($.call(C, "close", []));
        } else {
          await $.stmt((await $.call(C, "ShowMessage", ["Bitme tarix duz secilmeyib!"])));
        }
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["EMMBOSSNAME UZUNDUR!"])));
      }
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Valyuta səhvdir"])));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "EDIT"))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox9")), "Text")), ""))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "2"))) {
        if ($.truthy($.ne((await $.mv((await $.v(C, "Edit24")), "Text")), ""))) {
          if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
            L0["urg"] = 1;
          } else {
            L0["urg"] = 0;
          }
          if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
            L0["kr"] = 1;
          } else {
            L0["kr"] = 0;
          }
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "close", []);
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "open", []);
          await $.mset((await $.v(C, "edit26")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "fieldbyname", ["refe"])), "asstring")));
          if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox5")), "Text")), "WITH"))) {
            L0["wt"] = "0003";
          } else {
            L0["wt"] = "0002";
          }
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fmaincard")), "Close", []);
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fmaincard")), "SetVariable", ["CRD", (await $.mv((await $.v(C, "edit24")), "text"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fmaincard")), "Open", []);
          if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fmaincard")), "FieldByName", ["maincard"])), "asstring")), ""))) {
            await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), L0["wt"], (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
          } else {
            await $.stmt((await $.call(C, "ShowMessage", ["Subkarta yenidən Subcard yaratmaq olmaz"])));
          }
          if ($.truthy((await $.mv((await $.v(C, "CheckBox4")), "Checked")))) {
            await $.set(C, "MultiCurrency", (await $.mcall((await $.v(C, "TMultiCurrency")), "Create", [Self])));
            await $.mset((await $.mv((await $.v(C, "MultiCurrency")), "Edit3")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")));
            await $.mset((await $.mv((await $.v(C, "MultiCurrency")), "Edit4")), "Text", "edit");
            await $.mcall((await $.v(C, "MultiCurrency")), "ShowModal", []);
          }
          await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
          await $.mset((await $.v(C, "ComboBox9")), "Text", "");
        } else {
          await $.stmt((await $.call(C, "ShowMessage", ["Kart nömrəsi daxil edilməyib!"])));
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "3"))) {
        if ($.truthy($.ne((await $.mv((await $.v(C, "Edit24")), "Text")), ""))) {
          if ($.truthy($.eq((await $.call(C, "MessageDlg", [$.add($.add("Kartı  ", (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker8")), "DateTime"))]))), " tarixinə qədər prolonqasiya etməyinizə əminsinizmi?"), (await $.v(C, "mtWarning")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
            if ($.truthy($.gt((await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))))) {
              if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
                L0["urg"] = 1;
              } else {
                L0["urg"] = 0;
              }
              if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
                L0["kr"] = 1;
              } else {
                L0["kr"] = 0;
              }
              if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox5")), "Text")), "WITH"))) {
                L0["wt"] = "0003";
              } else {
                L0["wt"] = "0002";
              }
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), L0["wt"], (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
              await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
              await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
              await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
              await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
              await $.mset((await $.v(C, "ComboBox9")), "Text", "");
            } else {
              await $.stmt((await $.call(C, "ShowMessage", ["Tarix düz secilməyib!"])));
            }
          }
        } else {
          await $.stmt((await $.call(C, "ShowMessage", ["Kart nömrəsi daxil edilmətib!"])));
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "4"))) {
        if ($.truthy($.ne((await $.mv((await $.v(C, "Edit24")), "Text")), ""))) {
          if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
            L0["urg"] = 1;
          } else {
            L0["urg"] = 0;
          }
          if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
            L0["kr"] = 1;
          } else {
            L0["kr"] = 0;
          }
          if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox5")), "Text")), "WITH"))) {
            L0["wt"] = "0003";
          } else {
            L0["wt"] = "0002";
          }
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), L0["wt"], (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
          await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
          await $.mset((await $.v(C, "ComboBox9")), "Text", "");
        } else {
          await $.stmt((await $.call(C, "ShowMessage", ["Kart nömrəsi daxil edilmətib!"])));
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "12"))) {
        if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
          L0["urg"] = 1;
        } else {
          L0["urg"] = 0;
        }
        if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
          L0["kr"] = 1;
        } else {
          L0["kr"] = 0;
        }
        if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox5")), "Text")), "WITH"))) {
          L0["wt"] = "0003";
        } else {
          L0["wt"] = "0002";
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), L0["wt"], (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
        await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
        await $.mset((await $.v(C, "ComboBox9")), "Text", "");
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "6"))) {
        if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
          L0["urg"] = 1;
        } else {
          L0["urg"] = 0;
        }
        if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
          L0["kr"] = 1;
        } else {
          L0["kr"] = 0;
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), (await $.v(C, "null")), (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
        await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
        await $.mset((await $.v(C, "ComboBox9")), "Text", "");
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "11"))) {
        if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
          L0["urg"] = 1;
        } else {
          L0["urg"] = 0;
        }
        if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
          L0["kr"] = 1;
        } else {
          L0["kr"] = 0;
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), (await $.v(C, "null")), (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
        await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
        await $.mset((await $.v(C, "ComboBox9")), "Text", "");
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "7"))) {
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "closefind")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "closefind")), "setvariable", ["crdnum", (await $.mv((await $.v(C, "Edit24")), "Text"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "closefind")), "open", []);
        if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "closefind")), "recordcount")), 0))) {
          if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
            L0["urg"] = 1;
          } else {
            L0["urg"] = 0;
          }
          if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
            L0["kr"] = 1;
          } else {
            L0["kr"] = 0;
          }
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), (await $.v(C, "null")), (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
          await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
          await $.mset((await $.v(C, "ComboBox9")), "Text", "");
        } else {
          await $.stmt((await $.call(C, "ShowMessage", ["Suply kartı var!"])));
        }
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "5"))) {
        if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
          L0["urg"] = 1;
        } else {
          L0["urg"] = 0;
        }
        if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
          L0["kr"] = 1;
        } else {
          L0["kr"] = 0;
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), (await $.v(C, "null")), (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "SetVariable", ["rbs", (await $.mv((await $.v(C, "DBLookupComboBox6")), "text"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "Open", []);
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "SetVariable", ["acc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "fieldbyname", ["id"])), "asinteger"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "Open", []);
        if ($.truthy($.ne((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit28")), "Text"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "FieldByName", ["kredit"])), "asfloat"))))) {
          await $.mset((await $.v(C, "Edit28")), "Color", (await $.v(C, "clRed")));
          await $.stmt((await $.call(C, "ShowMessage", ["Daxil etdiyiniz kredit məbləği Smart-Kredit modulundakı məbləğə bərabər deyildir!"])));
        } else {
          await $.mset((await $.v(C, "Edit28")), "Color", (await $.v(C, "clWindow")));
        }
        await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
        await $.mset((await $.v(C, "ComboBox9")), "Text", "");
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "35"))) {
        if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
          L0["urg"] = 1;
        } else {
          L0["urg"] = 0;
        }
        if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
          L0["kr"] = 1;
        } else {
          L0["kr"] = 0;
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), (await $.v(C, "null")), (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
        await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
        await $.mset((await $.v(C, "ComboBox9")), "Text", "");
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), "13"))) {
        if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
          L0["urg"] = 1;
        } else {
          L0["urg"] = 0;
        }
        if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
          L0["kr"] = 1;
        } else {
          L0["kr"] = 0;
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "dbedit18")), "text")), (await $.mv((await $.v(C, "ComboBox1")), "text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.call(C, "floattostr", [$.mul((await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit28")), "Text"))])), 100)])), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), (await $.mv((await $.v(C, "edit2")), "text")), L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text")), (await $.mv((await $.v(C, "edit24")), "text")), (await $.v(C, "null")), (await $.mv((await $.v(C, "DateTimePicker2")), "datetime"))]])));
        await $.stmt((await $.call(C, "ShowMessage", ["Yadda saxlanıldı!"])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
        await $.mset((await $.v(C, "ComboBox9")), "Text", "");
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "ComboBox9Enter", async function ComboBox9Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "ComboBox1Enter", async function ComboBox1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "ItemIndex")), 0))) {
    await $.mcall((await $.v(C, "ComboBox1")), "Clear", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "First", []);
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox1")), "ItemIndex")), 0))) {
    { const $t7 = (await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "recordcount"));
      L0["i"] = 0;
      let $t8 = true;
      for (;;) {
        if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
        $t8 = false;
        if (!($.ord(L0["i"]) <= $.ord($t7))) break;
        if ($.truthy($.eq(L0["i"], 0))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox9")), "Items")), "add", [" "])));
        } else {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox1")), "Items")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "fieldbyname", ["NAME"])), "asstring"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "next", []);
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.v(C, "null"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", "%%"])));
  await $.mcall((await $.v(C, "button1")), "Click", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_client_edit"]])));
  await $.mset((await $.v(C, "Edit1")), "Text", "EDIT");
  await $.mset((await $.v(C, "DBGrid1")), "Enabled", true);
  await $.mset((await $.v(C, "DBLookupComboBox6")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "asstring")));
  await $.mset((await $.v(C, "DBLookupComboBox6")), "Visible", true);
  await $.mset((await $.v(C, "Edit15")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["FNAME"])), "asstring")));
  await $.mset((await $.v(C, "edit15")), "Visible", true);
  await $.mset((await $.v(C, "Edit16")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["LNAME"])), "asstring")));
  await $.mset((await $.v(C, "edit16")), "Visible", true);
  await $.mset((await $.v(C, "Edit18")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["PASSPORT"])), "asstring")));
  await $.mset((await $.v(C, "edit18")), "Visible", true);
  await $.mset((await $.v(C, "DateTimePicker7")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["BIRTHDAY"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker7")), "Visible", true);
  await $.mset((await $.v(C, "Edit17")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["HOMEPHONE"])), "asstring")));
  await $.mset((await $.v(C, "edit17")), "Visible", true);
  await $.mset((await $.v(C, "Edit27")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["WORKPHONE"])), "asstring")));
  await $.mset((await $.v(C, "edit27")), "Visible", true);
  await $.mset((await $.v(C, "Edit20")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["COUNTRY"])), "asstring")));
  await $.mset((await $.v(C, "edit20")), "Visible", true);
  await $.mset((await $.v(C, "Edit19")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CITY"])), "asstring")));
  await $.mset((await $.v(C, "edit19")), "Visible", true);
  await $.mset((await $.v(C, "Edit22")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["ADDRESS"])), "asstring")));
  await $.mset((await $.v(C, "edit22")), "Visible", true);
  await $.mset((await $.v(C, "ComboBox4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["RESIDENT"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox4")), "visible", true);
  await $.mset((await $.v(C, "ComboBox1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CARDTYPE"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox1")), "visible", true);
  await $.mset((await $.v(C, "ComboBox12")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CARDSTATUS"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox12")), "visible", true);
  await $.mset((await $.v(C, "Edit28")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CREDIT_LIM"])), "asstring")));
  await $.mset((await $.v(C, "edit28")), "Visible", true);
  await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["DATEOPEN"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["EXPIRY"])), "asdatetime")));
  await $.mset((await $.v(C, "Edit26")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["REFERENCE"])), "asstring")));
  await $.mset((await $.v(C, "edit26")), "Visible", true);
  await $.mset((await $.v(C, "Edit23")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["EMBOSSNAME"])), "asstring")));
  await $.mset((await $.v(C, "edit23")), "Visible", true);
  await $.mset((await $.v(C, "ComboBox2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["COMPANY"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox2")), "visible", true);
  await $.mset((await $.v(C, "Edit25")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["SECURITY"])), "asstring")));
  await $.mset((await $.v(C, "edit25")), "Visible", true);
  await $.mset((await $.v(C, "Edit21")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["LANG_CODE"])), "asstring")));
  await $.mset((await $.v(C, "edit21")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
  await $.mset((await $.v(C, "ComboBox11")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["TYPES"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox11")), "visible", true);
  await $.mset((await $.v(C, "ComboBox10")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["TITUL"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox10")), "visible", true);
  await $.mset((await $.v(C, "Edit24")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CARDNUMBER"])), "asstring")));
  await $.mset((await $.v(C, "Edit24")), "Visible", true);
  await $.mset((await $.v(C, "Edit15")), "Enabled", false);
  await $.mset((await $.v(C, "Edit16")), "Enabled", false);
  await $.mset((await $.v(C, "Edit18")), "Enabled", false);
  await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
  await $.mset((await $.v(C, "Edit17")), "Enabled", false);
  await $.mset((await $.v(C, "Edit27")), "Enabled", false);
  await $.mset((await $.v(C, "Edit20")), "Enabled", false);
  await $.mset((await $.v(C, "Edit19")), "Enabled", false);
  await $.mset((await $.v(C, "Edit22")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
  await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
  await $.mset((await $.v(C, "Edit28")), "Enabled", false);
  await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
  await $.mset((await $.v(C, "Edit26")), "Enabled", false);
  await $.mset((await $.v(C, "Edit23")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
  await $.mset((await $.v(C, "Edit25")), "Enabled", false);
  await $.mset((await $.v(C, "Edit21")), "Enabled", false);
  await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
  await $.mset((await $.v(C, "Edit14")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox9")), "Enabled", true);
  await $.mset((await $.v(C, "DBGrid1")), "Enabled", true);
  await $.mset((await $.v(C, "dbgrid2")), "Enabled", true);
  await $.mset((await $.v(C, "DBGrid5")), "Enabled", true);
  await $.mset((await $.v(C, "dbgrid6")), "Enabled", true);
  await $.mset((await $.v(C, "ComboBox8")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox5")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox5")), "Text", "WITH");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "ComboBox2Enter", async function ComboBox2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "z": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ComboBox2")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANi")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANi")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANi")), "First", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox2")), "ItemIndex")), 0))) {
    { const $t9 = (await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "compani")), "RecordCount"));
      L0["z"] = 0;
      let $t10 = true;
      for (;;) {
        if (!$t10) { L0["z"] = $.succ(L0["z"], 1); }
        $t10 = false;
        if (!($.ord(L0["z"]) <= $.ord($t9))) break;
        if ($.truthy($.eq(L0["z"], 0))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox2")), "Items")), "add", [" "])));
        } else {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox2")), "Items")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANi")), "fieldbyname", ["COMPANY_NAME"])), "asstring"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANi")), "next", []);
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "ComboBox9Click", async function ComboBox9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Suppl.Card"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "2");
    await $.mset((await $.v(C, "Edit15")), "Enabled", true);
    await $.mset((await $.v(C, "Edit16")), "Enabled", true);
    await $.mset((await $.v(C, "Edit18")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", true);
    await $.mset((await $.v(C, "Edit17")), "Enabled", true);
    await $.mset((await $.v(C, "Edit27")), "Enabled", true);
    await $.mset((await $.v(C, "Edit20")), "Enabled", true);
    await $.mset((await $.v(C, "Edit19")), "Enabled", true);
    await $.mset((await $.v(C, "Edit22")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", true);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", true);
    await $.mset((await $.v(C, "Edit25")), "Enabled", true);
    await $.mset((await $.v(C, "Edit21")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", true);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", true);
    await $.mset((await $.v(C, "Edit33")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox5")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Prolongation"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "3");
    await $.mset((await $.v(C, "Edit15")), "Enabled", false);
    await $.mset((await $.v(C, "Edit16")), "Enabled", false);
    await $.mset((await $.v(C, "Edit18")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox5")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Replace Card"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "4");
    await $.mset((await $.v(C, "Edit15")), "Enabled", false);
    await $.mset((await $.v(C, "Edit16")), "Enabled", false);
    await $.mset((await $.v(C, "Edit18")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", true);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox5")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Credit Limit"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "5");
    await $.mset((await $.v(C, "Edit15")), "Enabled", false);
    await $.mset((await $.v(C, "Edit16")), "Enabled", false);
    await $.mset((await $.v(C, "Edit18")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox5")), "Enabled", false);
    await $.mset((await $.v(C, "edit28")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Card Status"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "6");
    await $.mset((await $.v(C, "Edit15")), "Enabled", false);
    await $.mset((await $.v(C, "Edit16")), "Enabled", false);
    await $.mset((await $.v(C, "Edit18")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Contract Close"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "7");
    await $.mset((await $.v(C, "Edit15")), "Enabled", false);
    await $.mset((await $.v(C, "Edit16")), "Enabled", false);
    await $.mset((await $.v(C, "Edit18")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "PIN Clear"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "12");
    await $.mset((await $.v(C, "Edit15")), "Enabled", false);
    await $.mset((await $.v(C, "Edit16")), "Enabled", false);
    await $.mset((await $.v(C, "Edit18")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "RBS Change"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "11");
    await $.mset((await $.v(C, "Edit15")), "Enabled", false);
    await $.mset((await $.v(C, "Edit16")), "Enabled", false);
    await $.mset((await $.v(C, "Edit18")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.mv((await $.v(C, "edit14")), "text"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", (await $.v(C, "null"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "open", []);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Text", "");
    if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "RecordCount")), 0))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "CloseAll", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "SetVariable", ["kid", (await $.mv((await $.v(C, "edit14")), "text"))])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "Open", []);
      await $.mset((await $.v(C, "Edit_acc_name")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "FieldByName", ["name"])), "AsString")));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "CardName Change"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "35");
    await $.mset((await $.v(C, "Edit15")), "Enabled", true);
    await $.mset((await $.v(C, "Edit16")), "Enabled", true);
    await $.mset((await $.v(C, "Edit18")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", true);
    await $.mset((await $.v(C, "edit23")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox1")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Security Word Change"))) {
    await $.mset((await $.v(C, "edit2")), "Text", "13");
    await $.mset((await $.v(C, "Edit15")), "Enabled", false);
    await $.mset((await $.v(C, "Edit16")), "Enabled", false);
    await $.mset((await $.v(C, "Edit18")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
    await $.mset((await $.v(C, "Edit17")), "Enabled", false);
    await $.mset((await $.v(C, "Edit27")), "Enabled", false);
    await $.mset((await $.v(C, "Edit20")), "Enabled", false);
    await $.mset((await $.v(C, "Edit19")), "Enabled", false);
    await $.mset((await $.v(C, "Edit22")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
    await $.mset((await $.v(C, "Edit28")), "Enabled", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
    await $.mset((await $.v(C, "Edit26")), "Enabled", false);
    await $.mset((await $.v(C, "Edit23")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit25")), "Enabled", false);
    await $.mset((await $.v(C, "Edit21")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "Edit14")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
    await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
    await $.mset((await $.v(C, "edit25")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", true);
    await $.mset((await $.v(C, "ComboBox8")), "Enabled", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox10")), "Text")), ""))) {
      await $.mset((await $.v(C, "Edit23")), "Text", $.add($.add($.add($.add((await $.mv((await $.v(C, "ComboBox10")), "Text")), "/"), (await $.mv((await $.v(C, "Edit15")), "Text"))), "/"), (await $.mv((await $.v(C, "edit16")), "Text"))));
    } else {
      await $.mset((await $.v(C, "Edit23")), "Text", $.add($.add($.add("/", (await $.mv((await $.v(C, "Edit15")), "Text"))), "/"), (await $.mv((await $.v(C, "edit16")), "Text"))));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "Button6Click", async function Button6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "EDIT"))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "SetVariable", ["numb", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "ASSTRING"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["multi_acc"])), "ASSTRING"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "Button7Click", async function Button7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "FormPaint", async function FormPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "EDIT"))) {
    await $.mcall((await $.v(C, "Button6")), "click", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "SetVariable", ["rbs", (await $.mv((await $.v(C, "DBLookupComboBox6")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "SetVariable", ["acc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesabtap")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "findcredit")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "SIL1Click", async function SIL1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["delete_application", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBgrid6")), "datasource")), "dataset")), "fieldbyname", ["id"])), "asinteger"))]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DBgrid6")), "datasource")), "dataset")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "DBLookupComboBox6ButtonClick", async function DBLookupComboBox6ButtonClick(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "handled": $.asRef(p1), result: undefined, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "DataMod_CARDS"));
    const $t12 = (await $.wv([$t11], "HESAB", C, false));
    await $.stmt((await $.wcall([$t11, $t12], "SetVariable", ["CID", (await $.wv([$t11, $t12], "null", C, false))], C)));
    await $.stmt((await $.wcall([$t11, $t12], "SetVariable", ["p_AccNO", $.add((await $.mv((await $.wv([$t11, $t12], "dblookupcombobox6", C, false)), "Text")), "%")], C)));
  }
  L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asVariant"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  await $.mset((await $.v(C, "Edit14")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "fieldbyname", ["id"])), "AsString")));
  return L0.result;
}, {"params": ["Sender", "Handled"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("Tclients2", "DBLookupComboBox6Click", async function DBLookupComboBox6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "DataMod_CARDS"));
    const $t14 = (await $.wv([$t13], "HESAB", C, false));
    await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["CID", (await $.wv([$t13, $t14], "null", C, false))], C)));
    await $.stmt((await $.wcall([$t13, $t14], "SetVariable", ["p_AccNO", $.add((await $.mv((await $.wv([$t13, $t14], "dblookupcombobox6", C, false)), "Text")), "%")], C)));
  }
  L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asVariant"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  await $.mset((await $.v(C, "Edit14")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "fieldbyname", ["id"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "DBLookupComboBox6Change", async function DBLookupComboBox6Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acc": '', "st": '', "flags": []};
  await $.fixArgs(L0, ["sender"]);
  L0["flags"] = [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))];
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "RecordCount")), 0))) {
    {
      const $t15 = (await $.v(C, "DataMod_CARDS"));
      const $t16 = (await $.wv([$t15], "HESAB", C, false));
      if ($.truthy($.eq((await $.mv((await $.wv([$t15, $t16], "edit14", C, false)), "text")), ""))) {
        await $.stmt((await $.wcall([$t15, $t16], "SetVariable", ["CID", (await $.wv([$t15, $t16], "null", C, false))], C)));
      } else {
        await $.stmt((await $.wcall([$t15, $t16], "SetVariable", ["CID", (await $.mv((await $.wv([$t15, $t16], "edit14", C, false)), "text"))], C)));
      }
      await $.stmt((await $.wcall([$t15, $t16], "SetVariable", ["p_AccNO", (await $.mv((await $.wv([$t15, $t16], "dblookupcombobox6", C, false)), "Text"))], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "CloseAll", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "SetVariable", ["kid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "Open", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive"))]])));
    L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asString"));
    await $.mset((await $.v(C, "Edit14")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "fieldbyname", ["id"])), "AsString")));
    await $.mset((await $.v(C, "Edit_acc_name")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "new_cust")), "FieldByName", ["name"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "SetVariable", ["mid", (await $.mv((await $.v(C, "Edit14")), "Text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "open", []);
    await $.mset((await $.v(C, "edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["Name"])), "AsString")));
    await $.mset((await $.v(C, "edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["LastName"])), "AsString")));
    await $.mset((await $.v(C, "edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["address"])), "AsString")));
    L0["st"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["phone_m"])), "AsVariant"));
    await $.mset((await $.v(C, "edit15")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["Name"])), "AsString")));
    await $.mset((await $.v(C, "edit16")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["LastName"])), "AsString")));
    await $.mset((await $.v(C, "edit22")), "Text", (await $.call(C, "copy", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["address"])), "AsString")), 0, 47])));
    await $.mset((await $.v(C, "edit18")), "Text", $.add("AZE ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["paspnum"])), "AsVariant"))));
    await $.mset((await $.v(C, "edit17")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["phone_h"])), "AsVariant")));
    await $.mset((await $.v(C, "DateTimePicker7")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "musterinfo")), "fieldbyname", ["birthday"])), "AsDateTime")));
    await $.mset((await $.v(C, "edit27")), "Text", (await $.call(C, "StringReplace", [L0["st"], "-", "", L0["flags"]])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "SetVariable", ["acc_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "fieldbyname", ["id"])), "Asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "Open", []);
    await $.mset((await $.v(C, "edit33")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "fieldbyname", ["ostat"])), "asstring")));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "valut2")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "valut2")), "SetVariable", ["valacc", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "fieldbyname", ["val_acc"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "valut2")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "ComboBox1KeyPress", async function ComboBox1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tclients2", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.v(C, "date")));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "First", []);
  await $.mcall((await $.v(C, "ComboBox1")), "Clear", []);
  { const $t17 = (await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "recordcount"));
    L0["i"] = 0;
    let $t18 = true;
    for (;;) {
      if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
      $t18 = false;
      if (!($.ord(L0["i"]) <= $.ord($t17))) break;
      if ($.truthy($.eq(L0["i"], 0))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox9")), "Items")), "add", [" "])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox1")), "Items")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "fieldbyname", ["NAME"])), "asstring"))])));
        await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "next", []);
      }
      await $.tick();
    }
  }
  await $.mset((await $.v(C, "Edit19")), "Text", "BAKU");
  await $.mset((await $.v(C, "Edit20")), "Text", "AZE");
  await $.mset((await $.v(C, "Edit21")), "Text", "AZE");
  await $.mset((await $.v(C, "ComboBox12")), "Text", "CARD OK");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "DBGrid5DblClick", async function DBGrid5DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit15")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["FNAME"])), "asstring")));
  await $.mset((await $.v(C, "edit15")), "Visible", true);
  await $.mset((await $.v(C, "Edit16")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["LNAME"])), "asstring")));
  await $.mset((await $.v(C, "edit16")), "Visible", true);
  await $.mset((await $.v(C, "Edit18")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["PASSPORT"])), "asstring")));
  await $.mset((await $.v(C, "edit18")), "Visible", true);
  await $.mset((await $.v(C, "DateTimePicker7")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["BIRTHDAY"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker7")), "Visible", true);
  await $.mset((await $.v(C, "Edit17")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["HOMEPHONE"])), "asstring")));
  await $.mset((await $.v(C, "edit17")), "Visible", true);
  await $.mset((await $.v(C, "Edit27")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["WORKPHONE"])), "asstring")));
  await $.mset((await $.v(C, "edit27")), "Visible", true);
  await $.mset((await $.v(C, "Edit20")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["COUNTRY"])), "asstring")));
  await $.mset((await $.v(C, "edit20")), "Visible", true);
  await $.mset((await $.v(C, "Edit19")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CITY"])), "asstring")));
  await $.mset((await $.v(C, "edit19")), "Visible", true);
  await $.mset((await $.v(C, "Edit22")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["ADDRESS"])), "asstring")));
  await $.mset((await $.v(C, "edit22")), "Visible", true);
  await $.mset((await $.v(C, "ComboBox4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["RESIDENT"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox4")), "visible", true);
  await $.mset((await $.v(C, "ComboBox1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CARDTYPE"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox1")), "visible", true);
  await $.mset((await $.v(C, "ComboBox12")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CARDSTATUS"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox12")), "visible", true);
  await $.mset((await $.v(C, "edit28")), "Visible", true);
  await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["DATEOPEN"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["EXPIRY"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["EXPIRY"])), "asdatetime")));
  await $.mset((await $.v(C, "Edit26")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["REFERENCE"])), "asstring")));
  await $.mset((await $.v(C, "edit26")), "Visible", true);
  await $.mset((await $.v(C, "Edit23")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["EMBOSSNAME"])), "asstring")));
  await $.mset((await $.v(C, "edit23")), "Visible", true);
  await $.mset((await $.v(C, "ComboBox2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["COMPANY"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox2")), "visible", true);
  await $.mset((await $.v(C, "Edit25")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["SECURITY"])), "asstring")));
  await $.mset((await $.v(C, "edit25")), "Visible", true);
  await $.mset((await $.v(C, "Edit21")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["LANG_CODE"])), "asstring")));
  await $.mset((await $.v(C, "edit21")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
  await $.mset((await $.v(C, "ComboBox11")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["TYPES"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox11")), "visible", true);
  await $.mset((await $.v(C, "ComboBox10")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["TITUL"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox10")), "visible", true);
  await $.mset((await $.v(C, "Edit24")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CARDNUMBER"])), "asstring")));
  await $.mset((await $.v(C, "Edit24")), "Visible", true);
  await $.mset((await $.v(C, "Edit15")), "Enabled", false);
  await $.mset((await $.v(C, "Edit16")), "Enabled", false);
  await $.mset((await $.v(C, "Edit18")), "Enabled", false);
  await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
  await $.mset((await $.v(C, "Edit17")), "Enabled", false);
  await $.mset((await $.v(C, "Edit27")), "Enabled", false);
  await $.mset((await $.v(C, "Edit20")), "Enabled", false);
  await $.mset((await $.v(C, "Edit19")), "Enabled", false);
  await $.mset((await $.v(C, "Edit22")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
  await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
  await $.mset((await $.v(C, "Edit28")), "Enabled", false);
  await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
  await $.mset((await $.v(C, "Edit26")), "Enabled", false);
  await $.mset((await $.v(C, "Edit23")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
  await $.mset((await $.v(C, "Edit25")), "Enabled", false);
  await $.mset((await $.v(C, "Edit21")), "Enabled", false);
  await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
  await $.mset((await $.v(C, "Edit14")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox9")), "Enabled", false);
  await $.mset((await $.v(C, "DBGrid1")), "Enabled", true);
  await $.mset((await $.v(C, "dbgrid2")), "Enabled", true);
  await $.mset((await $.v(C, "DBGrid5")), "Enabled", true);
  await $.mset((await $.v(C, "dbgrid6")), "Enabled", true);
  await $.mset((await $.v(C, "ComboBox8")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox5")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tclients2", "DBGrid5CellClick", async function DBGrid5CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "Edit15")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["FNAME"])), "asstring")));
  await $.mset((await $.v(C, "edit15")), "Visible", true);
  await $.mset((await $.v(C, "Edit16")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["LNAME"])), "asstring")));
  await $.mset((await $.v(C, "edit16")), "Visible", true);
  await $.mset((await $.v(C, "Edit18")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["PASSPORT"])), "asstring")));
  await $.mset((await $.v(C, "edit18")), "Visible", true);
  await $.mset((await $.v(C, "DateTimePicker7")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["BIRTHDAY"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker7")), "Visible", true);
  await $.mset((await $.v(C, "Edit17")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["HOMEPHONE"])), "asstring")));
  await $.mset((await $.v(C, "edit17")), "Visible", true);
  await $.mset((await $.v(C, "Edit27")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["WORKPHONE"])), "asstring")));
  await $.mset((await $.v(C, "edit27")), "Visible", true);
  await $.mset((await $.v(C, "Edit20")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["COUNTRY"])), "asstring")));
  await $.mset((await $.v(C, "edit20")), "Visible", true);
  await $.mset((await $.v(C, "Edit19")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CITY"])), "asstring")));
  await $.mset((await $.v(C, "edit19")), "Visible", true);
  await $.mset((await $.v(C, "Edit22")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["ADDRESS"])), "asstring")));
  await $.mset((await $.v(C, "edit22")), "Visible", true);
  await $.mset((await $.v(C, "ComboBox4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["RESIDENT"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox4")), "visible", true);
  await $.mset((await $.v(C, "ComboBox1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CARDTYPE"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox1")), "visible", true);
  await $.mset((await $.v(C, "ComboBox12")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CARDSTATUS"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox12")), "visible", true);
  await $.mset((await $.v(C, "edit28")), "Visible", true);
  await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["DATEOPEN"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["EXPIRY"])), "asdatetime")));
  await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["EXPIRY"])), "asdatetime")));
  await $.mset((await $.v(C, "Edit26")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["REFERENCE"])), "asstring")));
  await $.mset((await $.v(C, "edit26")), "Visible", true);
  await $.mset((await $.v(C, "Edit23")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["EMBOSSNAME"])), "asstring")));
  await $.mset((await $.v(C, "edit23")), "Visible", true);
  await $.mset((await $.v(C, "ComboBox2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["COMPANY"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox2")), "visible", true);
  await $.mset((await $.v(C, "Edit25")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["SECURITY"])), "asstring")));
  await $.mset((await $.v(C, "edit25")), "Visible", true);
  await $.mset((await $.v(C, "Edit21")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["LANG_CODE"])), "asstring")));
  await $.mset((await $.v(C, "edit21")), "Visible", true);
  await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
  await $.mset((await $.v(C, "ComboBox11")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["TYPES"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox11")), "visible", true);
  await $.mset((await $.v(C, "ComboBox10")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["TITUL"])), "asstring")));
  await $.mset((await $.v(C, "ComboBox10")), "visible", true);
  await $.mset((await $.v(C, "Edit24")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBGrid5")), "DataSource")), "DataSet")), "fieldbyname", ["CARDNUMBER"])), "asstring")));
  await $.mset((await $.v(C, "Edit24")), "Visible", true);
  await $.mset((await $.v(C, "Edit15")), "Enabled", false);
  await $.mset((await $.v(C, "Edit16")), "Enabled", false);
  await $.mset((await $.v(C, "Edit18")), "Enabled", false);
  await $.mset((await $.v(C, "DateTimePicker7")), "Enabled", false);
  await $.mset((await $.v(C, "Edit17")), "Enabled", false);
  await $.mset((await $.v(C, "Edit27")), "Enabled", false);
  await $.mset((await $.v(C, "Edit20")), "Enabled", false);
  await $.mset((await $.v(C, "Edit19")), "Enabled", false);
  await $.mset((await $.v(C, "Edit22")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox4")), "Enabled", false);
  await $.mset((await $.v(C, "DBLookupComboBox6")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox1")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox12")), "Enabled", false);
  await $.mset((await $.v(C, "Edit28")), "Enabled", false);
  await $.mset((await $.v(C, "DateTimePicker8")), "Enabled", false);
  await $.mset((await $.v(C, "Edit26")), "Enabled", false);
  await $.mset((await $.v(C, "Edit23")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox2")), "Enabled", false);
  await $.mset((await $.v(C, "Edit25")), "Enabled", false);
  await $.mset((await $.v(C, "Edit21")), "Enabled", false);
  await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
  await $.mset((await $.v(C, "Edit14")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox11")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox10")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox9")), "Enabled", false);
  await $.mset((await $.v(C, "DBGrid1")), "Enabled", true);
  await $.mset((await $.v(C, "dbgrid2")), "Enabled", true);
  await $.mset((await $.v(C, "DBGrid5")), "Enabled", true);
  await $.mset((await $.v(C, "dbgrid6")), "Enabled", true);
  await $.mset((await $.v(C, "ComboBox8")), "Enabled", false);
  await $.mset((await $.v(C, "ComboBox5")), "Enabled", false);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("Tclients2", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "acc": null, "mus": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Edit14")), "Text")), ""))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.v(C, "null"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", "%%"])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "refresh", []);
      await $.mset((await $.v(C, "DBLookupComboBox6")), "Text", "");
      await $.mset((await $.v(C, "Edit14")), "Text", "");
    } else {
      L0["mus"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "Edit14")), "Text"))]));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.mv((await $.v(C, "edit14")), "text"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", (await $.v(C, "null"))])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "refresh", []);
      await $.mset((await $.v(C, "DBLookupComboBox6")), "Text", "");
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "RecordCount")), 0))) {
        L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asVariant"));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Locate", ["ACC_no", L0["acc"], [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
