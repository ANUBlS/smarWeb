// Generated from FrmAddPaymentImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmAddPaymentImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "DBCtrls", "XFSCtrls", "ExtCtrls", "Mask", "CMCurrencyEdit", "CurrencyEdit", "DMPaymentImpl", "sboapiDataModuleimpl", "SBTranslateProc", "CommanParametrs", "FrmPaymentImpl"]);
  const C = [U];
  U.enumType("tcreatetype", 2);
  U.const("ctNew", 0);
  U.const("ctEdit", 1);
  U.defClass("TFrmAddPayment", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "btok": {"name": "btOk", "type": "TBitBtn"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "eddate": {"name": "edDate", "type": "TEdit"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "edammount": {"name": "edAmmount", "type": "TCMCurrencyEdit"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "cmcurrencyedit2": {"name": "CMCurrencyEdit2", "type": "TCMCurrencyEdit"}, "cmcurrencyedit3": {"name": "CMCurrencyEdit3", "type": "TCMCurrencyEdit"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "cmcurrencyedit4": {"name": "CMCurrencyEdit4", "type": "TCMCurrencyEdit"}, "cmcurrencyedit5": {"name": "CMCurrencyEdit5", "type": "TCMCurrencyEdit"}, "cmcurrencyedit6": {"name": "CMCurrencyEdit6", "type": "TCMCurrencyEdit"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "createdtype": {"name": "CreatedType", "type": "TCreateType"}, "paymentid": {"name": "PaymentID", "type": "Integer"}}, {});
  U.init(async () => {
    try { U.const("tdifferentsexception", await $.ref_(C, "Exception")); } catch (e) { /* unresolved alias */ }
    U.var_("FrmAddPayment", null, "TFrmAddPayment");
    U.var_("id", 0, "Integer");
  });
  U.method("TFrmAddPayment", "CreateIt", async function CreateIt(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"ctype": $.copyArg(p0), "payid": (p1 === undefined ? (-(1)) : p1), result: undefined};
  await $.fixArgs(L0, ["ctype", "payid"]);
  await $.set(C, "CreatedType", L0["ctype"]);
  await $.set(C, "PaymentID", L0["payid"]);
  await $.inherited(Self, "TFrmAddPayment", "Create", [(await $.v(C, "Owner"))], arguments);
  return L0.result;
}, {"params": ["cType", "payID"], "kind": "constructor", "ptypes": ["TCreateType", "Integer"]});
  U.method("TFrmAddPayment", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), 2))) {
    await $.mset((await $.v(C, "XFPanel3")), "Enabled", true);
    await $.mset((await $.v(C, "XFPanel7")), "Enabled", false);
    await $.mset((await $.v(C, "XFPanel8")), "Enabled", false);
    await $.mset((await $.v(C, "XFPanel4")), "Enabled", false);
    await $.mset((await $.v(C, "edAmmount")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", 0);
  } else {
    await $.mset((await $.v(C, "XFPanel3")), "Enabled", false);
    await $.mset((await $.v(C, "XFPanel7")), "Enabled", true);
    await $.mset((await $.v(C, "XFPanel8")), "Enabled", true);
    await $.mset((await $.v(C, "XFPanel4")), "Enabled", true);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSPlansetting")), "FieldByName", ["PAYMENT_TYPE"])), "AsInteger")), 2))) {
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "edAmmount")), "Value", 0);
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit1")), "Value", 0);
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit2")), "Value", 0);
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "edAmmount")), "Enabled", true);
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit1")), "Enabled", true);
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit2")), "Enabled", true);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "edAmmount")), "Value", (await $.mv((await $.v(C, "CMCurrencyEdit4")), "Value")));
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit1")), "Value", (await $.mv((await $.v(C, "CMCurrencyEdit5")), "Value")));
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit2")), "Value", (await $.mv((await $.v(C, "CMCurrencyEdit6")), "Value")));
      await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "edAmmount")), "Enabled", false);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPayment", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), 0)), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")), (await $.v(C, "null")))))))) {
    await $.mcall((await $.mv((await $.v(C, "DMPayment")), "dscustname")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "dscustname")), "SetVariable", ["pid", (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"))])));
    await $.mcall((await $.mv((await $.v(C, "DMPayment")), "dscustname")), "open", []);
  }
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "Dskassabalans")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "Dskassabalans")), "SetVariable", ["p_acc_no", (await $.mv((await $.v(C, "DBLookupComboBox2")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "Dskassabalans")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "Dskassabalans")), "FieldByName", ["bal_cn1"])), "AsInteger")), 221))) {
    await $.mset((await $.v(C, "XFLabel15")), "Visible", true);
    await $.mset((await $.v(C, "Edit1")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFLabel15")), "Visible", false);
    await $.mset((await $.v(C, "Edit1")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPayment", "CheckIsOld", async function CheckIsOld(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  L0["result"] = true;
  {
    const $t1 = (await $.v(C, "DMPayment"));
    const $t2 = (await $.wv([$t1], "OPSBOP", C, false));
    if ($.truthy($.gt((await $.wcall([$t1, $t2], "CallDateFunction", ["get_Date", []], C)), (await $.mv((await $.wv([$t1, $t2], "ODSPaymentsPAYDATE", C, false)), "Value"))))) {
      throw $.raise((await $.mcall((await $.wv([$t1, $t2], "TDifferentsException", C, false)), "Create", ["Əvvəlki günləri deyişdirmək olmaz!"])));
    }
  }
  L0["result"] = false;
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TFrmAddPayment", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSpaymentAcc")), "Close", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPayment", "btOkClick", async function btOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSContracts")), "FieldByName", ["close_prefix"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bağlanmış müqavilələrdə heç bir dəyişiklik etmək olmaz!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSContracts")), "FieldByName", ["state"])), "AsInteger")), 6))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təsdiq olunmuş müqavilə üçün ödəniş etmək olar!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Plan sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Hesab sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), 1))) {
    if ($.truthy($.lt((await $.mv((await $.v(C, "edAmmount")), "Value")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Ödəniləcək məbləğ sıfırdan böyük olmalıdır!"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "Dskassabalans")), "FieldByName", ["bal_cn1"])), "AsInteger")), 221))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["Diqqət!Qəbz nömrəsi sahəsi boşdur!"])));
        return L0.result;
      }
    }
    if ($.truthy($.lt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Ödəniləcək məbləğ sıfırdan böyük olmalıdır!"])));
      return L0.result;
    }
    if ($.truthy($.lt((await $.mv((await $.v(C, "CMCurrencyEdit2")), "Value")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Ödəniləcək məbləğ sıfırdan böyük olmalıdır!"])));
      return L0.result;
    }
    if ($.truthy($.gt((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CMCurrencyEdit5")), "Value"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Ödəniləcək məbləğ Sığ. haqqı Məsul. qalığı məbləğindən böyük olmamalıdır!"])));
      return L0.result;
    }
    if ($.truthy($.gt((await $.mv((await $.v(C, "CMCurrencyEdit2")), "Value")), (await $.mv((await $.v(C, "CMCurrencyEdit6")), "Value"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Ödəniləcək məbləğ Sığ. haqqı Fərdi Q. qalığı məbləğindən böyük olmamalıdır!"])));
      return L0.result;
    }
    if ($.truthy($.gt((await $.mv((await $.v(C, "edAmmount")), "Value")), (await $.mv((await $.v(C, "CMCurrencyEdit4")), "Value"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Ödəniləcək Sığorta haqqı Sığorta qalığı məbləğindən böyük olmamalıdır!"])));
      return L0.result;
    }
    {
      const $t3 = (await $.v(C, "DMPayment"));
      if ($.truthy($.eq((await $.mcall((await $.wv([$t3], "OPCOMMON", C, false)), "CallBooleanFunction", ["addpaymentReal", [(await $.wv([$t3], "contactid", C, false)), (await $.mv((await $.wv([$t3], "edAmmount", C, false)), "Value")), (await $.mv((await $.wv([$t3], "DBLookupComboBox1", C, false)), "KeyValue")), (await $.mv((await $.wv([$t3], "CMCurrencyEdit1", C, false)), "Value")), (await $.mv((await $.wv([$t3], "CMCurrencyEdit2", C, false)), "Value")), (await $.mv((await $.wv([$t3], "DBLookupComboBox2", C, false)), "KeyValue")), (await $.mv((await $.wv([$t3], "Edit1", C, false)), "Text"))]])), (await $.wv([$t3], "true", C, false))))) {
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")), 2))) {
    {
      const $t4 = (await $.v(C, "DMPayment"));
      if ($.truthy($.eq((await $.mcall((await $.wv([$t4], "OPCOMMON", C, false)), "CallBooleanFunction", ["addaditionalpaymentReal", [(await $.wv([$t4], "contactid", C, false)), (await $.mv((await $.wv([$t4], "CurrencyEdit2", C, false)), "Value")), (await $.mv((await $.wv([$t4], "DBLookupComboBox1", C, false)), "KeyValue")), (await $.mv((await $.wv([$t4], "DBLookupComboBox2", C, false)), "KeyValue")), (await $.mv((await $.wv([$t4], "CMCurrencyEdit3", C, false)), "Value")), (await $.mv((await $.wv([$t4], "CurrencyEdit1", C, false)), "Value")), (await $.mv((await $.wv([$t4], "CurrencyEdit2", C, false)), "Value"))]])), (await $.wv([$t4], "true", C, false))))) {
        await $.stmt((await $.wcall([$t4], "showmessage", ["Əməliyyat keçdi!"], C)));
      }
    }
  }
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmPayment")), "DBGrid2")), "DataSource")), "DataSet")), "Refresh", []);
  await $.mcall((await $.v(C, "FrmAddPayment")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPayment", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "DMPayment"));
    await $.mcall((await $.wv([$t5], "ODSPlan", C, false)), "Close", []);
    await $.mcall((await $.wv([$t5], "DSpaymentAcc", C, false)), "Close", []);
    await $.mcall((await $.mv((await $.wv([$t5], "DMPayment", C, false)), "DSins_dict_next_event_per")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmAddPayment", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "DMPayment"));
    const $t7 = (await $.wv([$t6], "OPSBOP", C, false));
    await $.mset((await $.wv([$t6, $t7], "edDate", C, false)), "Text", (await $.wcall([$t6, $t7], "DateTimeToStr", [(await $.wcall([$t6, $t7], "CallDateFunction", ["get_Date", []], C))], C)));
  }
  {
    const $t8 = (await $.v(C, "DMPayment"));
    const $t9 = (await $.wv([$t8], "ODSPlan", C, false));
    await $.stmt($.wcall([$t8, $t9], "close", [], C));
    await $.stmt($.wcall([$t8, $t9], "Open", [], C));
  }
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPayment", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddPayment", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit1")), "Text", "");
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSpaymentAcc")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSpaymentAcc")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSins_dict_next_event_per")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSins_dict_next_event_per")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSRestPayment")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSRestPayment")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSRestPayment")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSContracts")), "FieldByName", ["type_id"])), "AsInteger")), 4))) {
    await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıK")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıK")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
    await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıK")), "Open", []);
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıK")), "FieldByName", ["SIGHAQQIQALIQ"])), "AsFloat")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSContracts")), "FieldByName", ["CHM"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıM")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıM")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
      await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıM")), "Open", []);
      await $.mset((await $.v(C, "XFPanel8")), "Visible", true);
      await $.mset((await $.v(C, "CMCurrencyEdit5")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıM")), "FieldByName", ["SIGHAQQIQALIQ"])), "AsFloat")));
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit5")), "Value")), 0))) {
        await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", false);
        await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
      }
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSContracts")), "FieldByName", ["CHFQ"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıFQ")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıFQ")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
      await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıFQ")), "Open", []);
      await $.mset((await $.v(C, "XFPanel4")), "Visible", true);
      await $.mset((await $.v(C, "CMCurrencyEdit6")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqıFQ")), "FieldByName", ["SIGHAQQIQALIQ"])), "AsFloat")));
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit6")), "Value")), 0))) {
        await $.mset((await $.v(C, "CMCurrencyEdit2")), "Enabled", false);
        await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", 0);
      }
    }
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSContracts")), "FieldByName", ["type_id"])), "AsInteger")), 4))) {
    await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqı")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqı")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
    await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqı")), "Open", []);
    await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSTSighaqqı")), "FieldByName", ["SIGHAQQIQALIQ"])), "AsFloat")));
  }
  await $.mset((await $.v(C, "CMCurrencyEdit3")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSins_dict_next_event_per")), "FieldByName", ["PERCENT"])), "AsFloat")));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", 1);
  await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mcall((await $.mv((await $.v(C, "DMPayment")), "OPCOMMON")), "CallFloatFunction", ["getInsnatammebleg", [(await $.v(C, "contactid"))]])));
  await $.mset((await $.v(C, "CurrencyEdit3")), "Value", (await $.mcall((await $.mv((await $.v(C, "DMPayment")), "OPCOMMON")), "CallFloatFunction", ["getInsnatamsigortahaaqi", [(await $.v(C, "contactid"))]])));
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "DSPlansetting")), "FieldByName", ["PAYMENT_TYPE"])), "AsInteger")), 2))) {
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "edAmmount")), "Value", 0);
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit1")), "Value", 0);
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit2")), "Value", 0);
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "edAmmount")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit1")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit2")), "Enabled", true);
  } else {
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "edAmmount")), "Value", (await $.mv((await $.v(C, "CMCurrencyEdit4")), "Value")));
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit1")), "Value", (await $.mv((await $.v(C, "CMCurrencyEdit5")), "Value")));
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit2")), "Value", (await $.mv((await $.v(C, "CMCurrencyEdit6")), "Value")));
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "edAmmount")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit1")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddPayment")), "CMCurrencyEdit2")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
