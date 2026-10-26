// Generated from FrmAddCustImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmAddCustImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Mask", "DBCtrls", "CurrencyEdit", "DMreinsuranceImpl", "CommanParametrs", "FrmreinsuranceImpl", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmAddCust", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "filter": {"name": "filter", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FrmAddCust", null, "TFrmAddCust");
  });
  U.method("TFrmAddCust", "DBEdit10KeyPress", async function DBEdit10KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mcall((await $.call(C, "FindNextControl", [(await $.v(C, "ActiveControl")), true, true, false])), "SetFocus", []);
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddCust", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccounOthelik")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccounOthelik")), "SetVariable", ["p_kli_id", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccounOthelik")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccountDebitor")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccountDebitor")), "SetVariable", ["p_kli_id", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccountDebitor")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddCust", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b", "/", "-", " "]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddCust", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", "."]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddCust", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), "\b", "."]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddCust", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSCustmers")), "close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmAddCust", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "filter", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "dsinsurance_type")), "SQL")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddCust", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddCust", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "t": '', "tm": '', "tfq": '', "t1": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CurrencyEdit3")), "Value", 0);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "SetVariable", ["p_id", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "Open", []);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["TYPE_ID"])), "AsInteger")), 8)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["TYPE_ID"])), "AsInteger")), 21)))))) {
    await $.mset((await $.v(C, "CurrencyEdit3")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "CurrencyEdit3")), "Enabled", false);
  }
  L0["t"] = "";
  L0["tm"] = "";
  L0["tfq"] = "";
  L0["t1"] = "";
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsInteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["chm"])), "AsInteger")), 1)))))) {
    L0["tm"] = "(13)";
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsInteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["chfq"])), "AsInteger")), 1)))))) {
    L0["tfq"] = "(1)";
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsInteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["chkasko"])), "AsInteger")), 1)))))) {
    L0["t"] = "(4)";
  }
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsInteger")), 4)))) {
    if ($.truthy($.ne(L0["tm"], ""))) {
      if ($.truthy($.eq(L0["t1"], ""))) {
        L0["t1"] = L0["tm"];
      } else {
        L0["t1"] = $.add($.add(L0["t1"], ","), L0["tm"]);
      }
    }
    if ($.truthy($.ne(L0["tfq"], ""))) {
      if ($.truthy($.eq(L0["t1"], ""))) {
        L0["t1"] = L0["tfq"];
      } else {
        L0["t1"] = $.add($.add(L0["t1"], ","), L0["tfq"]);
      }
    }
    if ($.truthy($.ne(L0["t"], ""))) {
      if ($.truthy($.eq(L0["t1"], ""))) {
        L0["t1"] = L0["t"];
      } else {
        L0["t1"] = $.add($.add(L0["t1"], ","), L0["t"]);
      }
    }
  } else {
    L0["t1"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DScontract")), "FieldByName", ["type_id"])), "AsString"));
  }
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dsinsurance_type")), "Close", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "dsinsurance_type")), "SQL")), "Text", $.add($.add($.add((await $.v(C, "filter")), " and id in ("), L0["t1"]), ")"));
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DMreinsurance")), "dsinsurance_type")), "SQL")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "dsinsurance_type")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSCustmers")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSCustmers")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsurance")), "op")), "insert"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance")), "Insert", []);
    await $.mset((await $.v(C, "Edit2")), "Text", "");
    await $.mset((await $.v(C, "Edit3")), "Text", "");
    await $.mset((await $.v(C, "Edit1")), "Text", "");
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccounOthelik")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccountDebitor")), "Close", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsurance")), "op")), "update"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance")), "edit", []);
    await $.mset((await $.mv((await $.v(C, "FrmAddCust")), "CurrencyEdit3")), "Value", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["TARIF"])), "AsFloat")));
    await $.mset((await $.mv((await $.v(C, "FrmAddCust")), "Edit2")), "text", (await $.call(C, "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["reins_part"])), "AsFloat"))])));
    await $.mset((await $.mv((await $.v(C, "FrmAddCust")), "Edit3")), "text", (await $.call(C, "FloatToStr", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["REINS_PART_KOMISIYA"])), "AsFloat"))])));
    await $.mset((await $.mv((await $.v(C, "FrmAddCust")), "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["custid"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "FrmAddCust")), "DBEdit10")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["custid"])), "AsString")));
    await $.mset((await $.v(C, "Edit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["BARDERO_NO"])), "AsString")));
    if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), 0))) {
      await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccounOthelik")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccounOthelik")), "SetVariable", ["p_kli_id", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))])));
      await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccounOthelik")), "open", []);
      await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccountDebitor")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccountDebitor")), "SetVariable", ["p_kli_id", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))])));
      await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSaccountDebitor")), "open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddCust", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "DBEdit10")), "Text")), "")), async () => ($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), 0)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Təkrarsığortaçı seçilməyib."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Bardero № sahəsi boşdur."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue")), (await $.v(C, "null"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Siğorta növü seçilməyib."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsurance")), "op")), "insert"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Sigorta_bardero_sayi")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Sigorta_bardero_sayi")), "SetVariable", ["p_bardero_no", (await $.mv((await $.v(C, "Edit1")), "Text"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Sigorta_bardero_sayi")), "SetVariable", ["p_type_id", (await $.mv((await $.v(C, "DBLookupComboBox4")), "KeyValue"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Sigorta_bardero_sayi")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Sigorta_bardero_sayi")), "open", []);
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DS_Sigorta_bardero_sayi")), "FieldByName", ["say"])), "AsInteger")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Premiya barderosu ucun eyni adda və eyni siğorta növündə Bardero yığıla bilməz."])));
      return L0.result;
    }
    {
      const $t1 = (await $.v(C, "DMreinsurance"));
      const $t2 = (await $.wv([$t1], "DSins_reinsurance", C, false));
      await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["cid"], C)), "AsInteger", (await $.wv([$t1, $t2], "contactid", C, false)));
      await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["custid"], C)), "AsInteger", (await $.mv((await $.wv([$t1, $t2], "DBLookupComboBox1", C, false)), "KeyValue")));
      await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["reins_part"], C)), "AsFloat", (await $.wcall([$t1, $t2], "StrToFloat", [(await $.mv((await $.wv([$t1, $t2], "Edit2", C, false)), "Text"))], C)));
      await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["REINS_PART_KOMISIYA"], C)), "AsFloat", (await $.wcall([$t1, $t2], "StrToFloat", [(await $.mv((await $.wv([$t1, $t2], "Edit3", C, false)), "Text"))], C)));
      await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["TARIF"], C)), "AsFloat", (await $.mv((await $.wv([$t1, $t2], "CurrencyEdit3", C, false)), "Value")));
      await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["BARDERO_NO"], C)), "AsString", (await $.mv((await $.wv([$t1, $t2], "Edit1", C, false)), "text")));
      await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["dat"], C)), "AsDateTime", (await $.mv((await $.mcall((await $.wv([$t1, $t2], "DSSysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")));
      await $.stmt($.wcall([$t1, $t2], "post", [], C));
      await $.mcall((await $.mv((await $.wv([$t1, $t2], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
    }
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance")), "Refresh", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Frmreinsurance")), "op")), "update"))) {
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance_upd")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance_upd")), "SetVariable", ["p_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance_upd")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DMreinsurance")), "DSins_reinsurance_upd")), "edit", []);
    {
      const $t3 = (await $.v(C, "DMreinsurance"));
      const $t4 = (await $.wv([$t3], "DSins_reinsurance_upd", C, false));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["cid"], C)), "AsInteger", (await $.wv([$t3, $t4], "contactid", C, false)));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["custid"], C)), "AsInteger", (await $.mv((await $.wv([$t3, $t4], "DBLookupComboBox1", C, false)), "KeyValue")));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["reins_part"], C)), "AsFloat", (await $.wcall([$t3, $t4], "StrToFloat", [(await $.mv((await $.wv([$t3, $t4], "Edit2", C, false)), "Text"))], C)));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["REINS_PART_KOMISIYA"], C)), "AsFloat", (await $.wcall([$t3, $t4], "StrToFloat", [(await $.mv((await $.wv([$t3, $t4], "Edit3", C, false)), "Text"))], C)));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["TARIF"], C)), "AsFloat", (await $.mv((await $.wv([$t3, $t4], "CurrencyEdit3", C, false)), "Value")));
      await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["BARDERO_NO"], C)), "AsString", (await $.mv((await $.wv([$t3, $t4], "Edit1", C, false)), "text")));
      await $.stmt($.wcall([$t3, $t4], "post", [], C));
      await $.mcall((await $.mv((await $.wv([$t3, $t4], "sboapiDataModule", C, false)), "SBSession")), "Commit", []);
    }
  }
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "Frmreinsurance")), "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.mcall((await $.v(C, "FrmAddCust")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddCust", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
