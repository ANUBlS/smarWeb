// Generated from Frmmainimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Frmmainimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "Mask", "DBCtrls", "StdCtrls", "dblookup", "ExtCtrls", "XFSCtrls", "ImgList", "CurrencyEdit", "CommanParametrs", "sboapiDataModuleImpl", "Dm_Contracts_Investisiyaimpl"]);
  const C = [U];
  U.defClass("TFrmContratcs", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "button2": {"name": "Button2", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dblcb_cust_list": {"name": "DBLCB_cust_list", "type": "TDBLookupComboBox"}, "label9": {"name": "Label9", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "ed_contract_no": {"name": "ED_Contract_no", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TCurrencyEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "dblookupcombobox7": {"name": "DBLookupComboBox7", "type": "TDBLookupComboBox"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "dblookupcombobox8": {"name": "DBLookupComboBox8", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("CID", 0, "integer");
    U.var_("FrmContratcs", null, "TFrmContratcs");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], ""))) {
    await $.mcall((await $.v(C, "FrmContratcs")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmContratcs", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContratcs", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ED_Contract_no")), "text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müqavilə nömrəsi sahesi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLCB_cust_list")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Müştəri adı  sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! İnvestisiya növü sahesi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!İnvestisiyanın müddəti sahesi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Valyuta sahesi boşdu"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Məbləğ  sahəsi boşdu"])));
    return L0.result;
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), 6)), async () => ($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), 21)))))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Faiz sahesi boşdu"])));
      return L0.result;
    }
  }
  {
    const $t1 = (await $.v(C, "Dm_Contracts_Investisiya"));
    if ($.truthy($.eq((await $.wv([$t1], "opetion", C, false)), "ins"))) {
      await $.mcall((await $.mv((await $.wv([$t1], "Dm_Contracts_Investisiya", C, false)), "ds_ostat")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "Dm_Contracts_Investisiya", C, false)), "ds_ostat")), "SetVariable", ["p_acc_id", (await $.mv((await $.wv([$t1], "DBLookupComboBox4", C, false)), "KeyValue"))])));
      await $.mcall((await $.mv((await $.wv([$t1], "Dm_Contracts_Investisiya", C, false)), "ds_ostat")), "Open", []);
      await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "open", []);
      await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "edit", []);
      await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["Status"])), "AsInteger", 0);
      await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["close_prefix"])), "AsInteger", 0);
      await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["CONTRACT_NAME"])), "AsString", (await $.mv((await $.mv((await $.wv([$t1], "FrmContratcs", C, false)), "ED_Contract_no")), "Text")));
      await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["filial"])), "AsInteger", 0);
      await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["PER_AMMOUNT"])), "AsFloat", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "edit7", C, false)), "Text"))], C)));
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.wv([$t1], "DBLookupComboBox3", C, false)), "KeyValue")), 6)), async () => ($.eq((await $.mv((await $.wv([$t1], "DBLookupComboBox3", C, false)), "KeyValue")), 21)))))) {
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["AMMOUNT"])), "Asfloat", (await $.mv((await $.wv([$t1], "Edit2", C, false)), "Value")));
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["Percent"])), "AsInteger", (await $.wcall([$t1], "StrToInt", [(await $.mv((await $.wv([$t1], "Edit1", C, false)), "Text"))], C)));
      } else {
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["AMMOUNT"])), "AsFloat", (await $.mv((await $.wv([$t1], "Edit2", C, false)), "Value")));
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["Percent"])), "AsVariant", (await $.wv([$t1], "null", C, false)));
      }
      await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["BEGIN_DATE"])), "AsDateTime", (await $.mv((await $.wv([$t1], "DateTimePicker1", C, false)), "DateTime")));
      if ($.truthy($.eq((await $.mv((await $.wv([$t1], "DBLookupComboBox2", C, false)), "KeyValue")), 2))) {
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["END_DATE"])), "AsVariant", (await $.wv([$t1], "null", C, false)));
      } else {
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["END_DATE"])), "AsDateTime", (await $.mv((await $.wv([$t1], "DateTimePicker2", C, false)), "DateTime")));
      }
    }
    if ($.truthy($.eq((await $.wv([$t1], "opetion", C, false)), "upd"))) {
      await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "open", []);
      await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["CONTRACT_NAME"])), "AsString", (await $.mv((await $.mv((await $.wv([$t1], "FrmContratcs", C, false)), "ED_Contract_no")), "Text")));
      await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["PER_AMMOUNT"])), "AsFloat", (await $.wcall([$t1], "StrToFloat", [(await $.mv((await $.wv([$t1], "Edit7", C, false)), "Text"))], C)));
      if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["invest_type_id"])), "AsInteger")), 6)), async () => ($.eq((await $.mv((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["invest_type_id"])), "AsInteger")), 21)))))) {
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["AMMOUNT"])), "AsFloat", (await $.mv((await $.wv([$t1], "Edit2", C, false)), "Value")));
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["Percent"])), "AsInteger", (await $.wcall([$t1], "StrToInt", [(await $.mv((await $.wv([$t1], "Edit1", C, false)), "Text"))], C)));
      } else {
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["AMMOUNT"])), "AsFloat", (await $.mv((await $.wv([$t1], "Edit2", C, false)), "Value")));
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["Percent"])), "AsVariant", (await $.wv([$t1], "null", C, false)));
      }
      await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["BEGIN_DATE"])), "AsDateTime", (await $.mv((await $.wv([$t1], "DateTimePicker1", C, false)), "DateTime")));
      if ($.truthy($.eq((await $.mv((await $.wv([$t1], "DBLookupComboBox2", C, false)), "KeyValue")), 2))) {
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["END_DATE"])), "AsVariant", (await $.wv([$t1], "null", C, false)));
      } else {
        await $.mset((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["END_DATE"])), "AsDateTime", (await $.mv((await $.wv([$t1], "DateTimePicker2", C, false)), "DateTime")));
      }
    }
    await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "Post", []);
    await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "RefreshRecord", []);
    await $.wset([$t1], "CID", (await $.mv((await $.mcall((await $.wv([$t1], "Ds_invest_contracts", C, false)), "FieldByName", ["id"])), "asInteger")), C);
    await $.mcall((await $.wv([$t1], "FrmContratcs", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "commandataset", C, false)), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContratcs", "DBEdit1Exit", async function DBEdit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_Main_Account")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_Main_Account")), "SetVariable", ["p_kli_id", (await $.mv((await $.v(C, "DBLCB_cust_list")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_Main_Account")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_per_account")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_per_account")), "SetVariable", ["p_kli_id", (await $.mv((await $.v(C, "DBLCB_cust_list")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_per_account")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_cur_account")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_cur_account")), "SetVariable", ["p_kli_id", (await $.mv((await $.v(C, "DBLCB_cust_list")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_cur_account")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContratcs", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContratcs", "DBLCB_cust_listKeyPress", async function DBLCB_cust_listKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContratcs", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "ODSAvalute")), "FieldByName", ["valute"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContratcs", "DBLookupComboBox1KeyDown", async function DBLookupComboBox1KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "ODSAvalute")), "FieldByName", ["valute"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmContratcs", "DBLookupComboBox1KeyPress", async function DBLookupComboBox1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "ODSAvalute")), "FieldByName", ["valute"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContratcs", "DBLookupComboBox1KeyUp", async function DBLookupComboBox1KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "ODSAvalute")), "FieldByName", ["valute"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmContratcs", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), 2))) {
    await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContratcs", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_type_id"])), "AsInteger"))])));
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), 6)), async () => ($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "KeyValue")), 21)))))) {
    await $.mset((await $.v(C, "Edit1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "Edit1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContratcs", "DBLookupComboBox3KeyDown", async function DBLookupComboBox3KeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_type_id"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmContratcs", "DBLookupComboBox3KeyUp", async function DBLookupComboBox3KeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_type_id"])), "AsInteger"))])));
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmContratcs", "Edit1Change", async function Edit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), (await $.v(C, "EmptyStr"))))) {
    await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", "0");
  }
  if ($.truthy((await $.and_(($.gt((await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit1")), "Text"))])), 0)), async () => ($.not((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "Edit2")), "Value"))])))))))) {
    await $.mset((await $.v(C, "Edit7")), "Text", (await $.call(C, "FloatToStr", [$.fdiv($.mul(((await $.mv((await $.v(C, "Edit2")), "Value"))), ((await $.call(C, "StrToInt", [(await $.mv((await $.v(C, "Edit1")), "Text"))])))), 100)])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContratcs", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", "¼", "¾", "n"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContratcs", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Dm_Contracts_Investisiya", (await $.mcall((await $.v(C, "TDm_Contracts_Investisiya")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContratcs", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContratcs", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_Main_Account")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_per_account")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_cur_account")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_gelir")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_expense_account")), "Refresh", []);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_type_id"])), "AsInteger")), 6)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_type_id"])), "AsInteger")), 21)))))) {
    await $.mset((await $.v(C, "Edit1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "Edit1")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.v(C, "opetion")), "ins"))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_time"])), "AsInteger")), 2))) {
      await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", true);
      await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    }
    await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "DSFilial")), "FieldByName", ["name"])), "AsString")));
    await $.mset((await $.v(C, "ED_Contract_no")), "Text", "");
    await $.mset((await $.v(C, "DBEdit1")), "Text", "");
    await $.mset((await $.v(C, "Edit3")), "Text", "");
    await $.mset((await $.v(C, "Edit4")), "Text", "");
    await $.mset((await $.v(C, "Edit5")), "Text", "");
    await $.mset((await $.v(C, "Edit7")), "Text", "");
    await $.mset((await $.v(C, "DBLCB_cust_list")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboBox4")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboBox5")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "DBLookupComboBox6")), "KeyValue", (await $.v(C, "null")));
    await $.mset((await $.v(C, "Edit2")), "Text", "");
    await $.mset((await $.v(C, "Edit1")), "Text", (await $.call(C, "IntToStr", [0])));
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "DsSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.v(C, "opetion")), "upd"))) {
    await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "SetVariable", ["cid", (await $.v(C, "contactid"))])));
    await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_time"])), "AsInteger")), 2))) {
      await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "DateTimePicker2")), "Enabled", true);
    }
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_type_id"])), "AsInteger")), 6)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_type_id"])), "AsInteger")), 21)))))) {
      await $.mset((await $.v(C, "Edit1")), "Enabled", true);
    } else {
      await $.mset((await $.v(C, "Edit1")), "Enabled", false);
    }
    await $.mset((await $.v(C, "Edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["per_ammount"])), "AsString")));
    await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "DSFilial")), "FieldByName", ["name"])), "AsString")));
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["invest_type_id"])), "AsInteger"))])));
    await $.mset((await $.v(C, "Edit5")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "ODSAvalute")), "FieldByName", ["valute"])), "AsInteger"))])));
    await $.mset((await $.v(C, "Edit3")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mset((await $.v(C, "ED_Contract_no")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["contract_name"])), "AsString")));
    await $.mset((await $.v(C, "Edit2")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["ammount"])), "AsFloat")));
    await $.mset((await $.v(C, "Edit1")), "Text", (await $.call(C, "IntToStr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["percent"])), "AsInteger"))])));
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["begin_date"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "Dm_Contracts_Investisiya")), "Ds_invest_contracts")), "FieldByName", ["end_date"])), "AsDateTime")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmContratcs", (await $.mcall((await $.v(C, "TFrmContratcs")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
