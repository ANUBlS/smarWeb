// Generated from FrmCargoBlankimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmCargoBlankimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ComCtrls", "CurrencyEdit", "DBCtrls", "ExtCtrls", "Mask", "CMCurrencyEdit", "Buttons", "CommanParametrs", "DMCargoBlankImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmCargoBlank", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xflabel28": {"name": "XFLabel28", "type": "TXFLabel"}, "xflabel27": {"name": "XFLabel27", "type": "TXFLabel"}, "xflabel31": {"name": "XFLabel31", "type": "TXFLabel"}, "xflabel30": {"name": "XFLabel30", "type": "TXFLabel"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "dblcvalute": {"name": "dblcValute", "type": "TDBLookupComboBox"}, "dbcfranshiz": {"name": "dbcFranshiz", "type": "TDBComboBox"}, "dbetarif": {"name": "dbeTarif", "type": "TCurrencyEdit"}, "dbeammount": {"name": "dbeAmmount", "type": "TCurrencyEdit"}, "dbesum": {"name": "dbeSum", "type": "TCurrencyEdit"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "inslookupcombobox": {"name": "InsLookupComboBox", "type": "TDBLookupComboBox"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "edins_date": {"name": "edIns_Date", "type": "TDateTimePicker"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "xfradiobutton3": {"name": "XFRadioButton3", "type": "TXFRadioButton"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "dbmemo2": {"name": "DBMemo2", "type": "TDBMemo"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "cmcurrencyedit2": {"name": "CMCurrencyEdit2", "type": "TCMCurrencyEdit"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}}, {});
  U.init(async () => {
    U.var_("FrmCargoBlank", null, "TFrmCargoBlank");
    U.var_("CID", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmCargoBlank")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmCargoBlank", "dbeAmmountChange", async function dbeAmmountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "SetVariable", ["pdat", (await $.mv((await $.v(C, "edIns_Date")), "DateTime"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "SetVariable", ["pval_id", (await $.mv((await $.v(C, "dblcValute")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "open", []);
  await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", $.mul((await $.mv((await $.v(C, "dbeAmmount")), "Value")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "FieldByName", ["OSTAT"])), "AsFloat"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "dbeSumChange", async function dbeSumChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "dbeTarif")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "dbeSum")), "Text")), "")))))) {
    await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "SetVariable", ["pdat", (await $.mv((await $.v(C, "edIns_Date")), "DateTime"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "SetVariable", ["pval_id", (await $.mv((await $.v(C, "dblcValute")), "KeyValue"))])));
    await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "open", []);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", $.mul((await $.mv((await $.v(C, "dbeSum")), "Value")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "FieldByName", ["OSTAT"])), "AsFloat"))));
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", $.mul((await $.mv((await $.v(C, "dbeAmmount")), "Value")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "ds_ekvalent")), "FieldByName", ["OSTAT"])), "AsFloat"))));
  } else {
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "dblcValuteClick", async function dblcValuteClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "FrmCargoBlank")), "dbeSumChange", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "FrmCargoBlank")), "dbeAmmountChange", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b", "/", "-"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCargoBlank", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMCargoBlank", (await $.mcall((await $.v(C, "TDMCargoBlank")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmCargoBlank", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    {
      const $t1 = (await $.v(C, "DMCargoBlank"));
      await $.mcall((await $.wv([$t1], "DSins_contracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t1], "DSins_contracts", C, false)), "SetVariable", ["cid", (-(1))])));
      await $.mcall((await $.wv([$t1], "DSins_contracts", C, false)), "Open", []);
      await $.mcall((await $.wv([$t1], "DSins_contract_cargo", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t1], "DSins_contract_cargo", C, false)), "SetVariable", ["p_cid", (-(1))])));
      await $.mcall((await $.wv([$t1], "DSins_contract_cargo", C, false)), "Open", []);
      await $.mset((await $.wv([$t1], "XFButton1", C, false)), "Enabled", (await $.wv([$t1], "true", C, false)));
    }
    await $.mset((await $.v(C, "InsLookupComboBox")), "Enabled", true);
    if ($.truthy($.ne((await $.v(C, "ins_cutsid")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "InsLookupComboBox")), "KeyValue", (await $.v(C, "ins_cutsid")));
    }
    if ($.truthy($.eq((await $.v(C, "ins_cutsid")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "InsLookupComboBox")), "KeyValue", (await $.v(C, "null")));
    }
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DBLookupComboBox4")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DBLookupComboBox3")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DBLookupComboBox2")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "edIns_Date")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dblcValute")), "KeyValue", 0);
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DBLookupComboBox1")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbeSum")), "Text", (await $.call(C, "floattostr", [0])));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbcFranshiz")), "Text", (await $.call(C, "floattostr", [0])));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbeTarif")), "Text", (await $.call(C, "floattostr", [0])));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbeAmmount")), "Text", (await $.call(C, "floattostr", [0])));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "Edit1")), "Text", "");
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DateTimePicker3")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox1")), "Checked", false);
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox2")), "Checked", false);
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox3")), "Checked", false);
  }
  if ($.truthy($.eq((await $.v(C, "opetion")), "upd"))) {
    {
      const $t2 = (await $.v(C, "DMCargoBlank"));
      await $.mcall((await $.wv([$t2], "DSins_contracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "DSins_contracts", C, false)), "SetVariable", ["cid", (await $.wv([$t2], "contactid", C, false))])));
      await $.mcall((await $.wv([$t2], "DSins_contracts", C, false)), "Open", []);
      await $.mcall((await $.wv([$t2], "DSins_contract_cargo", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t2], "DSins_contract_cargo", C, false)), "SetVariable", ["p_cid", (await $.wv([$t2], "contactid", C, false))])));
      await $.mcall((await $.wv([$t2], "DSins_contract_cargo", C, false)), "Open", []);
    }
    await $.mset((await $.v(C, "InsLookupComboBox")), "Enabled", false);
    if ($.truthy((await $.or_((await $.or_(($.eq((await $.v(C, "p_contractstate")), 6)), async () => ($.eq((await $.v(C, "p_contractstate")), 7)))), async () => ($.eq((await $.v(C, "p_contractstate")), 8)))))) {
      await $.mset((await $.v(C, "XFButton1")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "XFButton1")), "Enabled", true);
      await $.mset((await $.v(C, "XFPanel3")), "Enabled", true);
    }
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "InsLookupComboBox")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["kli_id"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DBLookupComboBox2")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["agent_id"])), "AsInteger")));
    await $.mset((await $.v(C, "edIns_Date")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["ins_date"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["begin_date"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["end_date"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dblcValute")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["valute_id"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbeSum")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["inssumm"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbcFranshiz")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["franshiz"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbeTarif")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["tariff"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbeAmmount")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["ammount"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["POLICY_NUM"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DateTimePicker3")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contract_cargo")), "FieldByName", ["LOADING_DATE"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["FILIAL"])), "AsInteger")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contract_cargo")), "FieldByName", ["NEQ_SHIP"])), "AsFloat")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox1")), "Checked", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox1")), "Checked", true);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contract_cargo")), "FieldByName", ["NEQ_LORRY"])), "AsFloat")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox2")), "Checked", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox2")), "Checked", true);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contract_cargo")), "FieldByName", ["NEQ_TRAIN"])), "AsFloat")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox3")), "Checked", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox3")), "Checked", true);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BEN_ID"])), "AsFloat")), 0))) {
      await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "XFRadioButton1")), "Checked", false);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BEN_ID"])), "AsFloat")), 1))) {
      await $.mset((await $.v(C, "XFRadioButton2")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "XFRadioButton2")), "Checked", false);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BEN_ID"])), "AsFloat")), 2))) {
      await $.mset((await $.v(C, "XFRadioButton3")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "XFRadioButton3")), "Checked", false);
    }
    await $.stmt((await $.mcall((await $.v(C, "FrmCargoBlank")), "dbeSumChange", [Self])));
  }
  if ($.truthy($.eq((await $.v(C, "opetion")), "See"))) {
    {
      const $t3 = (await $.v(C, "DMCargoBlank"));
      await $.mcall((await $.wv([$t3], "DSins_contracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t3], "DSins_contracts", C, false)), "SetVariable", ["cid", (await $.wv([$t3], "contactid", C, false))])));
      await $.mcall((await $.wv([$t3], "DSins_contracts", C, false)), "Open", []);
      await $.mcall((await $.wv([$t3], "DSins_contract_cargo", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t3], "DSins_contract_cargo", C, false)), "SetVariable", ["p_cid", (await $.wv([$t3], "contactid", C, false))])));
      await $.mcall((await $.wv([$t3], "DSins_contract_cargo", C, false)), "Open", []);
    }
    await $.mset((await $.v(C, "InsLookupComboBox")), "Enabled", false);
    if ($.truthy((await $.or_((await $.or_(($.eq((await $.v(C, "p_contractstate")), 6)), async () => ($.eq((await $.v(C, "p_contractstate")), 7)))), async () => ($.eq((await $.v(C, "p_contractstate")), 8)))))) {
      await $.mset((await $.v(C, "XFButton1")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "XFButton1")), "Enabled", true);
      await $.mset((await $.v(C, "XFPanel3")), "Enabled", true);
    }
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "InsLookupComboBox")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["kli_id"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DBLookupComboBox2")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["agent_id"])), "AsInteger")));
    await $.mset((await $.v(C, "edIns_Date")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["ins_date"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["begin_date"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["end_date"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dblcValute")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["valute_id"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbeSum")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["inssumm"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbcFranshiz")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["franshiz"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbeTarif")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["tariff"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "dbeAmmount")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["ammount"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "Edit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["POLICY_NUM"])), "AsString")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DateTimePicker3")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contract_cargo")), "FieldByName", ["LOADING_DATE"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["FILIAL"])), "AsInteger")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contract_cargo")), "FieldByName", ["NEQ_SHIP"])), "AsFloat")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox1")), "Checked", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox1")), "Checked", true);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contract_cargo")), "FieldByName", ["NEQ_LORRY"])), "AsFloat")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox2")), "Checked", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox2")), "Checked", true);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contract_cargo")), "FieldByName", ["NEQ_TRAIN"])), "AsFloat")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox3")), "Checked", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmCargoBlank")), "XFCheckBox3")), "Checked", true);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BEN_ID"])), "AsFloat")), 0))) {
      await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "XFRadioButton1")), "Checked", false);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BEN_ID"])), "AsFloat")), 1))) {
      await $.mset((await $.v(C, "XFRadioButton2")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "XFRadioButton2")), "Checked", false);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BEN_ID"])), "AsFloat")), 2))) {
      await $.mset((await $.v(C, "XFRadioButton3")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "XFRadioButton3")), "Checked", false);
    }
    await $.stmt((await $.mcall((await $.v(C, "FrmCargoBlank")), "dbeSumChange", [Self])));
    await $.mset((await $.v(C, "XFButton1")), "Visible", false);
    await $.mset((await $.v(C, "XFButton2")), "Visible", false);
    await $.mset((await $.v(C, "XFButton3")), "Visible", false);
    await $.mset((await $.v(C, "XFButton4")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "dbeAmmount")), "Value", $.mul(($.fdiv((await $.mv((await $.v(C, "dbeSum")), "Value")), 100)), (await $.mv((await $.v(C, "dbeTarif")), "Value"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "neq1": 0, "neq2": 0, "neq3": 0, "a": 0, "c_acc": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DMCargoBlank"));
    const $t5 = (await $.wv([$t4], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t4, $t5], "CallProcedure", ["checkadvancedobjectaccess", ["EDITCONTRACT_ALLCARGO"]], C)));
  }
  {
    const $t6 = (await $.v(C, "DMCargoBlank"));
    const $t7 = (await $.wv([$t6], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", ["checkadvancedobjectaccess", ["SAVECONTRACT_CARGO"]], C)));
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
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Filial daxil olunmayıb!"])));
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
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox4")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bank/Kənar daxil olunmayıb!"])));
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
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Faydagötürən Bankı seçin."])));
      return L0.result;
    }
  }
  {
    const $t8 = (await $.v(C, "DMCargoBlank"));
    const $t9 = (await $.wv([$t8], "ins_common", C, false));
    await $.wset([$t8, $t9], "a", (await $.wcall([$t8, $t9], "CallIntegerFunction", ["get_acc_balanc_hesab", [8]], C)), { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true });
    if ($.truthy($.eq((await $.wv([$t8, $t9], "a", { get: async () => L0["a"], set: async (v) => { L0["a"] = v; }, local: true }, false)), 0))) {
      await $.stmt((await $.wcall([$t8, $t9], "showmessage", ["Diqqət ! Bu müqavilə tipində avtomatik hesabların açılası üçün balans hesabları sazlanmayıb!."], C)));
      return L0.result;
    }
  }
  {
    const $t10 = (await $.v(C, "DMCargoBlank"));
    const $t11 = (await $.wv([$t10], "DSins_contracts", C, false));
    await $.stmt($.wcall([$t10, $t11], "Edit", [], C));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["kli_id"], C)), "AsInteger", (await $.mv((await $.mv((await $.wv([$t10, $t11], "FrmCargoBlank", C, false)), "InsLookupComboBox")), "KeyValue")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["agent_id"], C)), "AsInteger", (await $.mv((await $.mv((await $.wv([$t10, $t11], "FrmCargoBlank", C, false)), "DBLookupComboBox2")), "KeyValue")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["ins_date"], C)), "AsDateTime", (await $.mv((await $.wv([$t10, $t11], "edIns_Date", C, false)), "DateTime")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["begin_date"], C)), "AsDateTime", (await $.mv((await $.wv([$t10, $t11], "DateTimePicker1", C, false)), "DateTime")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["end_date"], C)), "AsDateTime", (await $.mv((await $.wv([$t10, $t11], "DateTimePicker2", C, false)), "DateTime")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["valute_id"], C)), "AsInteger", (await $.mv((await $.mv((await $.wv([$t10, $t11], "FrmCargoBlank", C, false)), "dblcValute")), "KeyValue")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["inssumm"], C)), "AsFloat", (await $.mv((await $.mv((await $.wv([$t10, $t11], "FrmCargoBlank", C, false)), "dbeSum")), "Value")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["franshiz"], C)), "AsFloat", (await $.wcall([$t10, $t11], "strtofloat", [(await $.mv((await $.mv((await $.wv([$t10, $t11], "FrmCargoBlank", C, false)), "dbcFranshiz")), "Text"))], C)));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["tariff"], C)), "AsFloat", (await $.mv((await $.mv((await $.wv([$t10, $t11], "FrmCargoBlank", C, false)), "dbeTarif")), "Value")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["ammount"], C)), "AsFloat", (await $.mv((await $.mv((await $.wv([$t10, $t11], "FrmCargoBlank", C, false)), "dbeAmmount")), "Value")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["type_id"], C)), "AsFloat", 8);
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["POLICY_NUM"], C)), "AsString", (await $.mv((await $.wv([$t10, $t11], "Edit1", C, false)), "Text")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["FILIAL"], C)), "AsInteger", (await $.mv((await $.mv((await $.wv([$t10, $t11], "FrmCargoBlank", C, false)), "DBLookupComboBox1")), "KeyValue")));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["BNF_TYPE"], C)), "AsInteger", (await $.mv((await $.mv((await $.wv([$t10, $t11], "FrmCargoBlank", C, false)), "DBLookupComboBox4")), "KeyValue")));
    await $.stmt($.wcall([$t10, $t11], "Post", [], C));
    await $.stmt($.wcall([$t10, $t11], "RefreshRecord", [], C));
    await $.wset([$t10, $t11], "CID", (await $.mv((await $.wcall([$t10, $t11], "FieldByName", ["id"], C)), "asInteger")), C);
  }
  {
    const $t12 = (await $.v(C, "DMCargoBlank"));
    const $t13 = (await $.wv([$t12], "DSins_contract_cargo", C, false));
    await $.stmt($.wcall([$t12, $t13], "Edit", [], C));
    if ($.truthy($.eq((await $.mv((await $.wv([$t12, $t13], "XFCheckBox1", C, false)), "Checked")), (await $.wv([$t12, $t13], "true", C, false))))) {
      await $.wset([$t12, $t13], "neq1", 1, { get: async () => L0["neq1"], set: async (v) => { L0["neq1"] = v; }, local: true });
    } else {
      await $.wset([$t12, $t13], "neq1", 0, { get: async () => L0["neq1"], set: async (v) => { L0["neq1"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t12, $t13], "XFCheckBox2", C, false)), "Checked")), (await $.wv([$t12, $t13], "true", C, false))))) {
      await $.wset([$t12, $t13], "neq2", 1, { get: async () => L0["neq2"], set: async (v) => { L0["neq2"] = v; }, local: true });
    } else {
      await $.wset([$t12, $t13], "neq2", 0, { get: async () => L0["neq2"], set: async (v) => { L0["neq2"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t12, $t13], "XFCheckBox3", C, false)), "Checked")), (await $.wv([$t12, $t13], "true", C, false))))) {
      await $.wset([$t12, $t13], "neq3", 1, { get: async () => L0["neq3"], set: async (v) => { L0["neq3"] = v; }, local: true });
    } else {
      await $.wset([$t12, $t13], "neq3", 0, { get: async () => L0["neq3"], set: async (v) => { L0["neq3"] = v; }, local: true });
    }
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["cid"], C)), "AsFloat", (await $.wv([$t12, $t13], "CID", C, false)));
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["close_prefix"], C)), "AsFloat", 0);
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["TYPEID"], C)), "AsFloat", 8);
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["NEQ_SHIP"], C)), "AsFloat", (await $.wv([$t12, $t13], "neq1", { get: async () => L0["neq1"], set: async (v) => { L0["neq1"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["NEQ_LORRY"], C)), "AsFloat", (await $.wv([$t12, $t13], "neq2", { get: async () => L0["neq2"], set: async (v) => { L0["neq2"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["NEQ_TRAIN"], C)), "AsFloat", (await $.wv([$t12, $t13], "neq3", { get: async () => L0["neq3"], set: async (v) => { L0["neq3"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t12, $t13], "FieldByName", ["LOADING_DATE"], C)), "AsDateTime", (await $.mv((await $.wv([$t12, $t13], "DateTimePicker3", C, false)), "DateTime")));
    await $.stmt($.wcall([$t12, $t13], "Post", [], C));
    await $.stmt($.wcall([$t12, $t13], "RefreshRecord", [], C));
    {
      const $t14 = (await $.wv([$t12, $t13], "DMCargoBlank", C, false));
      const $t15 = (await $.wv([$t12, $t13, $t14], "ins_common", C, false));
      await $.wset([$t12, $t13, $t14, $t15], "c_acc", (await $.wcall([$t12, $t13, $t14, $t15], "CallIntegerFunction", ["get_acc_id", [(await $.wv([$t12, $t13, $t14, $t15], "CID", C, false))]], C)), { get: async () => L0["c_acc"], set: async (v) => { L0["c_acc"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t12, $t13, $t14, $t15], "c_acc", { get: async () => L0["c_acc"], set: async (v) => { L0["c_acc"] = v; }, local: true }, false)), 0))) {
        await $.stmt((await $.wcall([$t12, $t13, $t14, $t15], "CallProcedure", ["account_open", [(await $.wv([$t12, $t13, $t14, $t15], "CID", C, false)), (await $.mv((await $.wv([$t12, $t13, $t14, $t15], "DBLookupComboBox1", C, false)), "KeyValue"))]], C)));
      }
    }
    await $.mcall((await $.wv([$t12, $t13], "FrmCargoBlank", C, false)), "Close", []);
    await $.mcall((await $.wv([$t12, $t13], "commandataset", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmCargoBlank")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.v(C, "DMCargoBlank"));
    const $t17 = (await $.wv([$t16], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t16, $t17], "CallProcedure", ["checkadvancedobjectaccess", ["SEEBARDERO_PREMIYA"]], C)));
  }
  await $.stmt((await $.call(C, "loadPlugin", ["Reinsurance.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "commoncid", (await $.v(C, "contactid")));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["type_id"])), "AsInteger")), 8))) {
    {
      const $t18 = (await $.v(C, "DMCargoBlank"));
      const $t19 = (await $.wv([$t18], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t18, $t19], "CallProcedure", ["checkadvancedobjectaccess", ["SEELOSYUK"]], C)));
    }
  }
  await $.stmt((await $.call(C, "loadPlugin", ["loss.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "XFRadioButton1Click", async function XFRadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true))) {
    await $.mset((await $.v(C, "DBLookupComboBox3")), "Enabled", true);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BEN_ID"])), "AsInteger", 0);
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox3")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "XFRadioButton2Click", async function XFRadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "InsLookupComboBox")), "Text")), "")))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Sığortalı seçilməyib"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "SetVariable", ["pid", (await $.mv((await $.v(C, "InsLookupComboBox")), "KeyValue"))])));
    await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "Open", []);
    await $.mset((await $.v(C, "DBEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "FieldByName", ["cus_name"])), "AsString")));
    await $.mset((await $.v(C, "DBEdit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "FieldByName", ["cus_name"])), "AsString")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BENEFICIARY"])), "AsString", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "FieldByName", ["cus_name"])), "AsString")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BEN_ID"])), "AsInteger", 1);
    await $.mset((await $.v(C, "DBLookupComboBox3")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "DBEdit1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmCargoBlank", "XFRadioButton3Click", async function XFRadioButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton3")), "Checked")), true))) {
    await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "SetVariable", ["pid", (await $.mv((await $.v(C, "InsLookupComboBox")), "KeyValue"))])));
    await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "Open", []);
    await $.mset((await $.v(C, "DBEdit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "FieldByName", ["ins_name"])), "AsString")));
    await $.mset((await $.v(C, "DBEdit1")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "FieldByName", ["ins_name"])), "AsString")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BENEFICIARY"])), "AsString", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSinscust")), "FieldByName", ["ins_name"])), "AsString")));
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMCargoBlank")), "DSins_contracts")), "FieldByName", ["BEN_ID"])), "AsInteger", 2);
    await $.mset((await $.v(C, "DBLookupComboBox3")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "DBEdit2")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmCargoBlank", (await $.mcall((await $.v(C, "TFrmCargoBlank")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
