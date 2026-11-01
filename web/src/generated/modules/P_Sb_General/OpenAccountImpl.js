// Generated from OpenAccountImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OpenAccountImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Buttons", "StdCtrls", "DBCtrlsEh", "DBLookupEh", "XFSCtrls", "DBCtrls", "Mask", "ComCtrls", "ExtCtrls", "Db", "DBGridEh", "Oracle", "OpenAccdataImpl", "AccounFlagsLmpl", "Form_BalCnImpl", "FormCustNomImpl", "Transaction_PropertiesImpl", "Transaction_DataModuleUnit", "FormOperationbplLmpl", "Form1_BalCnImpl", "Unit_Rekvezit", "UnitPayment_order", "Account_edit_Unit", "SBTranslateProc", "sboapiDataModuleImpl", "SMSUnit", "UnitNote", "UnitbussProc", "UnitDataBussProc", "Form_Statmentlmpl", "Cust_contactUnit"]);
  const C = [U];
  U.enumType("toperationmode", 3);
  U.const("omInsert", 0);
  U.const("omEdit", 1);
  U.const("omCommission", 2);
  U.defClass("TOpenAccount", "TForm", {"xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dbeditbranchid": {"name": "DBEditBranchID", "type": "TDBEdit"}, "dblookupcomboboxbranchname": {"name": "DBLookupComboBoxBranchName", "type": "TDBLookupComboBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflacbox": {"name": "XFLaCBox", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xfcheckbox_type": {"name": "XFCheckBox_type", "type": "TXFCheckBox"}, "rbtnnoresident": {"name": "RBtnNoResident", "type": "TXFRadioButton"}, "editid": {"name": "EditId", "type": "TEdit"}, "editname": {"name": "EditName", "type": "TEdit"}, "radiogroup1": {"name": "RadioGroup1", "type": "TRadioGroup"}, "dblookupvid_sob": {"name": "DBLookupvid_sob", "type": "TDBLookupComboBox"}, "dblookupsfera_dey": {"name": "DBLookupSFERA_DEY", "type": "TDBLookupComboBox"}, "xfbuttedit": {"name": "XFButtEdit", "type": "TXFButton"}, "pcust_balans_hesabı": {"name": "Pcust_Balans_hesabı", "type": "TGroupBox"}, "label2": {"name": "Label2", "type": "TLabel"}, "xflabel24": {"name": "XFLabel24", "type": "TXFLabel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "groupboxopenaccount_elave": {"name": "GroupBoxOpenAccount_elave", "type": "TGroupBox"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflabel18": {"name": "XFLabel18", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "label_symbols": {"name": "Label_Symbols", "type": "TLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "xflabel15": {"name": "XFLabel15", "type": "TXFLabel"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "button1": {"name": "Button1", "type": "TButton"}, "editnotecode": {"name": "EditNoteCode", "type": "TEdit"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "xflabel16": {"name": "XFLabel16", "type": "TXFLabel"}, "acc_nuber_avto": {"name": "Acc_nuber_avto", "type": "TSpeedButton"}, "xflabel17": {"name": "XFLabel17", "type": "TXFLabel"}, "editaccno": {"name": "EditAccNo", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "xflabel13": {"name": "XFLabel13", "type": "TXFLabel"}, "edit_accname": {"name": "Edit_AccName", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel_bankcode": {"name": "Panel_BAnkCode", "type": "TPanel"}, "edit_bankcod": {"name": "Edit_BankCod", "type": "TEdit"}, "button2": {"name": "Button2", "type": "TButton"}, "müxabirləşmə_kodu": {"name": "Müxabirləşmə_kodu", "type": "TPanel"}, "label10": {"name": "Label10", "type": "TLabel"}, "edit_muxkod": {"name": "Edit_MuxKod", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xflabel21": {"name": "XFLabel21", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel19": {"name": "XFLabel19", "type": "TXFLabel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "xflabel20": {"name": "XFLabel20", "type": "TXFLabel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "retrun_custid": {"name": "retrun_custid", "type": "Variant"}, "operationmode": {"name": "OperationMode", "type": "TOperationMode"}}, {});
  U.init(async () => {
    U.var_("OpenAccount", null, "TOpenAccount");
    U.var_("ominsert_edit", false, "Boolean");
    U.var_("Form_Close", '', "String");
    U.var_("nomid", 0, "integer");
    U.var_("cust_id", 0, "integer");
    U.var_("val_id", 0, "integer");
    U.var_("fil_id", 0, "integer");
    U.var_("bal_cn1", 0, "integer");
    U.var_("sim_otcet", 0, "integer");
    U.var_("bal_cn2", null, "Variant");
    U.var_("depozit_custid", '', "String");
    U.var_("depozit_contractid", '', "String");
    U.var_("cust_relatives", '', "String");
    U.var_("cust_noteid", '', "String");
    U.var_("contract_id", '', "String");
    U.var_("aaa", '', "String");
    U.var_("a", '', "String");
    U.var_("tacc", '', "String");
    U.var_("notecode", '', "String");
    U.var_("trid", '', "String");
    U.var_("tr", '', "String");
    U.var_("phys_cust_DbHesabID", '', "String");
    U.var_("phys_cust_CrHesabID", '', "String");
    U.var_("accont_id", '', "String");
    U.var_("odeme_trid", '', "String");
    U.var_("phys_jur_accid", '', "String");
    U.var_("phys_jur_custid", '', "String");
    U.var_("acc_SetVariable", false, "Boolean");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "custid": $.copyArg(p1), "accid": (p2 === undefined ? "0" : p2), result: undefined};
  await $.fixArgs(L0, ["s", "custid", "accid"]);
  await $.set(C, "tacc", L0["custid"]);
  if ($.truthy($.eq(L0["s"], "smsunit"))) {
    await $.set(C, "aaa", L0["custid"]);
    await $.stmt((await $.call(C, "sms", [(await $.call(C, "StrToInt", [(await $.v(C, "aaa"))]))])));
  }
  if ($.truthy($.eq(L0["s"], "note"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "formnote"))]))))) {
      await $.set(C, "formnote", (await $.mcall((await $.v(C, "Tformnote")), "create", [(await $.v(C, "Application"))])));
    }
    await $.set(C, "cust_noteid", L0["custid"]);
    await $.set(C, "contract_id", L0["accid"]);
    await $.mcall((await $.v(C, "formnote")), "showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "FormCusNom"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormCustNom"))]))))) {
      await $.set(C, "FormCustNom", (await $.mcall((await $.v(C, "TFormCustNom")), "create", [(await $.v(C, "Application"))])));
    }
    await $.mcall((await $.v(C, "FormCustNom")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "ForOperation"))) {
    await $.set(C, "a", (await $.v(C, "tacc")));
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormOperationbpl"))]))))) {
      await $.set(C, "FormOperationbpl", (await $.mcall((await $.v(C, "TFormOperationbpl")), "create", [(await $.v(C, "Application"))])));
    }
    await $.mcall((await $.v(C, "FormOperationbpl")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "bussPuroc"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormBussProc"))]))))) {
      await $.set(C, "FormBussProc", (await $.mcall((await $.v(C, "TFormBussProc")), "create", [(await $.v(C, "Application"))])));
    }
    await $.set(C, "phys_jur_accid", L0["custid"]);
    await $.set(C, "phys_jur_custid", L0["accid"]);
    await $.mcall((await $.v(C, "FormBussProc")), "showmodal", []);
  }
  if ($.truthy($.eq(L0["s"], "FormPaymentOrder"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "Payment_order"))]))))) {
      await $.set(C, "Payment_order", (await $.mcall((await $.v(C, "TPayment_order")), "create", [(await $.v(C, "Application"))])));
    }
    await $.mcall((await $.v(C, "Payment_order")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "Trancation_FormPaymentOrder"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "Payment_order"))]))))) {
      await $.set(C, "Payment_order", (await $.mcall((await $.v(C, "TPayment_order")), "create", [(await $.v(C, "Application"))])));
    }
    await $.set(C, "odeme_trid", L0["custid"]);
    await $.mcall((await $.v(C, "Payment_order")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "DB_Hesab"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "TransactionForm"))]))))) {
      await $.set(C, "TransactionForm", (await $.mcall((await $.v(C, "TTransactionForm")), "create", [(await $.v(C, "Application"))])));
    }
    await $.set(C, "Form_Close", "DB_Hesab");
    await $.set(C, "phys_cust_DbHesabID", L0["custid"]);
    {
      const $t1 = (await $.v(C, "Transaction_DataModule"));
      const $t2 = (await $.wv([$t1], "TransactionForm", C, false));
      const $t3 = (await $.wv([$t1, $t2], "Transactions", C, false));
      if ($.truthy((await $.wv([$t1, $t2, $t3], "Active", C, false)))) {
        await $.stmt($.wcall([$t1, $t2, $t3], "close", [], C));
      }
      await $.stmt((await $.wcall([$t1, $t2, $t3], "SetVariable", [":TransactionDate", (await $.mv((await $.mcall((await $.wv([$t1, $t2, $t3], "sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime"))], C)));
      await $.mcall((await $.wv([$t1, $t2, $t3], "Transactions", C, false)), "open", []);
      await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["TransactionManager", "insert"]])));
      await $.stmt($.wcall([$t1, $t2, $t3], "open", [], C));
      await $.stmt($.wcall([$t1, $t2, $t3], "Insert", [], C));
    }
    await $.mcall((await $.v(C, "TransactionForm")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "CR_Hesab"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "TransactionForm"))]))))) {
      await $.set(C, "TransactionForm", (await $.mcall((await $.v(C, "TTransactionForm")), "create", [(await $.v(C, "Application"))])));
    }
    await $.set(C, "Form_Close", "CR_Hesab");
    await $.set(C, "phys_cust_CrHesabID", L0["custid"]);
    {
      const $t4 = (await $.v(C, "Transaction_DataModule"));
      const $t5 = (await $.wv([$t4], "TransactionForm", C, false));
      const $t6 = (await $.wv([$t4, $t5], "Transactions", C, false));
      if ($.truthy((await $.wv([$t4, $t5, $t6], "Active", C, false)))) {
        await $.stmt($.wcall([$t4, $t5, $t6], "close", [], C));
      }
      await $.stmt((await $.wcall([$t4, $t5, $t6], "SetVariable", [":TransactionDate", (await $.mv((await $.mcall((await $.wv([$t4, $t5, $t6], "sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime"))], C)));
      await $.mcall((await $.wv([$t4, $t5, $t6], "Transactions", C, false)), "open", []);
      await $.stmt((await $.mcall((await $.wv([$t4, $t5, $t6], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["TransactionManager", "insert"]])));
      await $.stmt($.wcall([$t4, $t5, $t6], "open", [], C));
      await $.stmt($.wcall([$t4, $t5, $t6], "Insert", [], C));
    }
    await $.mcall((await $.v(C, "TransactionForm")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "TransactionInsrtForm"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "TransactionForm"))]))))) {
      await $.set(C, "TransactionForm", (await $.mcall((await $.v(C, "TTransactionForm")), "create", [(await $.v(C, "Application"))])));
    }
    await $.set(C, "trid", "");
    {
      const $t7 = (await $.v(C, "Transaction_DataModule"));
      const $t8 = (await $.wv([$t7], "TransactionForm", C, false));
      const $t9 = (await $.wv([$t7, $t8], "Transactions", C, false));
      if ($.truthy((await $.wv([$t7, $t8, $t9], "Active", C, false)))) {
        await $.stmt($.wcall([$t7, $t8, $t9], "close", [], C));
      }
      await $.stmt((await $.wcall([$t7, $t8, $t9], "SetVariable", [":trid", 0], C)));
      await $.stmt((await $.wcall([$t7, $t8, $t9], "SetVariable", [":TransactionDate", (await $.mv((await $.mcall((await $.wv([$t7, $t8, $t9], "sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime"))], C)));
      await $.stmt((await $.mcall((await $.wv([$t7, $t8, $t9], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["TransactionManager", "insert"]])));
      await $.stmt($.wcall([$t7, $t8, $t9], "open", [], C));
      await $.stmt($.wcall([$t7, $t8, $t9], "Insert", [], C));
      await $.mcall((await $.wv([$t7, $t8, $t9], "TransactionForm", C, false)), "ShowModal", []);
    }
  }
  if ($.truthy($.eq(L0["s"], "TransactionEditForm"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "TransactionForm"))]))))) {
      await $.set(C, "TransactionForm", (await $.mcall((await $.v(C, "TTransactionForm")), "create", [(await $.v(C, "Application"))])));
    }
    await $.set(C, "trid", L0["custid"]);
    {
      const $t10 = (await $.v(C, "Transaction_DataModule"));
      const $t11 = (await $.wv([$t10], "TransactionForm", C, false));
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t10, $t11], "Transaction_DataModule", C, false)), "Transactions")), "FieldByName", ["status"])), "AsInteger")), 1))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t10, $t11], "Transaction_DataModule", C, false)), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["DELAYEDEDIT"]])));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t10, $t11], "Transaction_DataModule", C, false)), "Transactions")), "FieldByName", ["status"])), "AsInteger")), 2))) {
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t10, $t11], "Transaction_DataModule", C, false)), "SB_ACA")), "CallProcedure", ["checkadvancedobjectaccess", ["COMMITEDEDIT"]])));
      }
      {
        const $t12 = (await $.wv([$t10, $t11], "Transaction_DataModule", C, false));
        const $t13 = (await $.wv([$t10, $t11, $t12], "Transactions", C, false));
        if ($.truthy((await $.wv([$t10, $t11, $t12, $t13], "Active", C, false)))) {
          await $.stmt($.wcall([$t10, $t11, $t12, $t13], "close", [], C));
        }
        await $.stmt((await $.wcall([$t10, $t11, $t12, $t13], "SetVariable", [":trid", (await $.wv([$t10, $t11, $t12, $t13], "trid", C, false))], C)));
        await $.stmt((await $.wcall([$t10, $t11, $t12, $t13], "SetVariable", [":TransactionDate", (await $.mv((await $.mcall((await $.wv([$t10, $t11, $t12, $t13], "sysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime"))], C)));
        await $.stmt($.wcall([$t10, $t11, $t12, $t13], "open", [], C));
        await $.stmt((await $.mcall((await $.wv([$t10, $t11, $t12, $t13], "SB_ACA", C, false)), "CallProcedure", ["CheckObjectAccess", ["TransactionManager", "update"]])));
        await $.stmt($.wcall([$t10, $t11, $t12, $t13], "Edit", [], C));
      }
    }
    await $.mcall((await $.v(C, "TransactionForm")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "account_edit"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "Account_edit"))]))))) {
      await $.set(C, "Account_edit", (await $.mcall((await $.v(C, "TAccount_edit")), "create", [(await $.v(C, "Application"))])));
    }
    await $.set(C, "accont_id", L0["custid"]);
    await $.mcall((await $.v(C, "Account_edit")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "depozit_stetment"))) {
    {
      const $t14 = (await $.v(C, "DataModule_bussProc"));
      if ($.truthy($.not((await $.wcall([$t14], "assigned", [(await $.wv([$t14], "Form_Statement", C, false))], C))))) {
        await $.wset([$t14], "Form_Statement", (await $.mcall((await $.wv([$t14], "TForm_Statement", C, false)), "create", [(await $.wv([$t14], "Application", C, false))])), C);
      }
      await $.wset([$t14], "depozit_custid", (await $.wv([$t14], "custid", { get: async () => L0["custid"], set: async (v) => { L0["custid"] = v; }, local: true }, false)), C);
      await $.wset([$t14], "depozit_contractid", (await $.wv([$t14], "accid", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)), C);
      await $.mcall((await $.wv([$t14], "ODS_StateSB", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t14], "ODS_StateSB", C, false)), "SetVariable", ["accid", (await $.wv([$t14], "depozit_contractid", C, false))])));
      await $.mcall((await $.wv([$t14], "ODS_StateSB", C, false)), "Open", []);
    }
    await $.mcall((await $.v(C, "Form_Statement")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "Cust_contact_relatives"))) {
    if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "Cust_contact"))]))))) {
      await $.set(C, "Cust_contact", (await $.mcall((await $.v(C, "TCust_contact")), "create", [(await $.v(C, "Application"))])));
    }
    await $.set(C, "cust_relatives", L0["custid"]);
    {
      const $t15 = (await $.mv((await $.v(C, "Cust_contact")), "OracleDataSet1"));
      await $.stmt($.wcall([$t15], "close", [], C));
      await $.stmt((await $.wcall([$t15], "SetVariable", ["v_custid", (await $.wv([$t15], "cust_relatives", C, false))], C)));
      await $.stmt($.wcall([$t15], "open", [], C));
    }
    await $.mcall((await $.v(C, "Cust_contact")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], ""))) {
    await $.mcall((await $.v(C, "OpenAccount")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["s", "custid", "accid"], "kind": "procedure", "ptypes": ["String", "String", "String"]});
  U.method("TOpenAccount", "Acc_nuber_avtoClick", async function Acc_nuber_avtoClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bal_cn2": null, "cust_id": null, "val_id": null, "fil_id": null, "bal_cn1": null, "sim_otcet": null, "id": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel21")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabın tipi  seçilmeyib !"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın valyutası  seçilmeyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabı  seçilmeyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Pcust_Balans_hesabı")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Yeni Balans hesabı  seçilmeyib!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel18")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabın  təyinatı  seçilmeyib !"])));
      return L0.result;
    }
  }
  L0["cust_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "customers")), "FieldByName", ["ID"])), "AsInteger"));
  L0["val_id"] = (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"));
  L0["fil_id"] = (await $.mv((await $.v(C, "DBLookupComboBoxBranchName")), "KeyValue"));
  L0["bal_cn1"] = (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"));
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"))])))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (await $.v(C, "null")));
  } else {
    L0["bal_cn2"] = (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"));
  }
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"))])))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (await $.v(C, "null")));
  } else {
    L0["sim_otcet"] = (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"));
  }
  await $.set(C, "notecode", ((await $.mv((await $.v(C, "EditNoteCode")), "Text"))));
  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Account")), "FieldByName", ["id"])), "AsVariant"));
  await $.mset((await $.v(C, "EditAccNo")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "SBOP")), "CallStringFunction", ["GenerateAccountNumber", [L0["bal_cn1"], L0["val_id"], L0["cust_id"], L0["fil_id"], L0["sim_otcet"], (await $.v(C, "notecode")), L0["bal_cn2"]]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccounFlags", (await $.mcall((await $.v(C, "TFormAccounFlags")), "Create", [Self])));
  try {
    {
      const $t16 = (await $.v(C, "FormAccounFlags"));
      const $t17 = (await $.mv((await $.wv([$t16], "DataAcc", C, false)), "Accflags"));
      if ($.truthy((await $.and_(($.eq((await $.wv([$t16, $t17], "ShowModal", C, false)), (await $.wv([$t16, $t17], "mrOk", C, false)))), async () => ($.in_((await $.wv([$t16, $t17], "State", C, false)), [(await $.wv([$t16, $t17], "dsInsert", C, false)), (await $.wv([$t16, $t17], "dsEdit", C, false))])))))) {
        await $.mset((await $.wcall([$t16, $t17], "FieldByName", ["Tipacc"], C)), "AsString", (await $.wv([$t16, $t17], "FlagMap", C, false)));
      }
    }
  } finally {
    if ($.truthy((await $.call(C, "Assigned", [(await $.v(C, "FormAccounFlags"))])))) {
      await $.mcall((await $.v(C, "FormAccounFlags")), "Release", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormRekvezit", (await $.mcall((await $.v(C, "TFormRekvezit")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormRekvezit")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit1")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")));
  }
  if ($.truthy($.eq((await $.v(C, "acc_SetVariable")), true))) {
    await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr")), "SetVariable", ["ACCTYPE", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Ods_acc_types")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr")), "Open", []);
  }
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "Text", "");
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "DBLookupComboboxEh1CloseUp", async function DBLookupComboboxEh1CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Customers")), "FieldByName", ["cust_type"])), "AsInteger")), 3))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex")), (-(1))))) {
      await $.stmt((await $.call(C, "showmessage", [" Fiziki və ya Fiziki sahibkar olduğunu seçin   !"])));
    }
  }
  return L0.result;
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TOpenAccount", "DBLookupComboboxEh2Change", async function DBLookupComboboxEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")));
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
    if ($.truthy($.eq((await $.v(C, "acc_SetVariable")), true))) {
      await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr")), "close", []);
      if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue")), 0))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr")), "SetVariable", ["int_val", 0])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr")), "SetVariable", ["int_val", 1])));
      }
      await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "DBLookupComboboxEh2CloseUp", async function DBLookupComboboxEh2CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  {
    const $t18 = (await $.v(C, "DataAcc"));
    const $t19 = (await $.wv([$t18], "ODS_Bal_spr", C, false));
    if ($.truthy($.eq((await $.wv([$t18, $t19], "RecordCount", C, false)), 1))) {
      await $.mset((await $.wv([$t18, $t19], "Edit4", C, false)), "Text", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["bal_cn"], C)), "AsString")));
      await $.mset((await $.wv([$t18, $t19], "DBLookupComboboxEh3", C, false)), "Text", (await $.mv((await $.wcall([$t18, $t19], "FieldByName", ["balname"], C)), "AsString")));
    } else {
      await $.mset((await $.wv([$t18, $t19], "edit4", C, false)), "Text", "");
    }
  }
  {
    const $t20 = (await $.v(C, "DataAcc"));
    const $t21 = (await $.wv([$t20], "ODS_Bal_spr1", C, false));
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TOpenAccount", "DBLookupComboboxEh3Change", async function DBLookupComboboxEh3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])))) {
    await $.mset((await $.v(C, "Edit4")), "Text", "");
  } else {
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.call(C, "VarToStr", [(await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"))])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "DBLookupComboboxEh3CloseUp", async function DBLookupComboboxEh3CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "text")), ""))) {
  }
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TOpenAccount", "DBLookupComboboxEh4Change", async function DBLookupComboboxEh4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue")));
  }
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), ""))) {
    await $.mset((await $.v(C, "Edit_AccName")), "Text", $.add($.add((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "customers")), "FieldByName", ["name"])), "AsString")), "/"), (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text"))));
  } else {
    await $.mset((await $.v(C, "Edit_AccName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "customers")), "FieldByName", ["name"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "DBLookupComboboxEh5Change", async function DBLookupComboboxEh5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "DBLookupComboboxEh6Change", async function DBLookupComboboxEh6Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue")), (await $.v(C, "null"))))))) {
    await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "DBLookupSFERA_DEYCloseUp", async function DBLookupSFERA_DEYCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "DBLookupvid_sobCloseUp", async function DBLookupvid_sobCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "edit3")), "Clear", []);
  await $.mcall((await $.v(C, "edit4")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "Edit1Exit", async function Edit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit1")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.mv((await $.v(C, "Edit1")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "Edit1KeyPress", async function Edit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.mv((await $.v(C, "Edit1")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOpenAccount", "Edit2Exit", async function Edit2Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit2")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (await $.mv((await $.v(C, "Edit2")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (await $.mv((await $.v(C, "Edit2")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOpenAccount", "Edit3Exit", async function Edit3Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit3")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (await $.mv((await $.v(C, "Edit3")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "Edit3KeyPress", async function Edit3KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (await $.mv((await $.v(C, "Edit3")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOpenAccount", "Edit4Exit", async function Edit4Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit4")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (await $.mv((await $.v(C, "Edit4")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "Edit4KeyPress", async function Edit4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (await $.mv((await $.v(C, "Edit4")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOpenAccount", "Edit5Exit", async function Edit5Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit5")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (await $.mv((await $.v(C, "Edit5")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "Edit5KeyPress", async function Edit5KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", (await $.mv((await $.v(C, "Edit5")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOpenAccount", "Edit6Exit", async function Edit6Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit6")), "Text")), ""))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (await $.mv((await $.v(C, "Edit6")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "Edit6KeyPress", async function Edit6KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (await $.mv((await $.v(C, "Edit6")), "Text")));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOpenAccount", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataAcc")), "ODS_Bal_spr")), "open", []);
  await $.mcall((await $.v(C, "DBEditBranchID")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupComboBoxBranchName")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "EditId")), "Clear", []);
  await $.mcall((await $.v(C, "EditName")), "Clear", []);
  await $.mset((await $.v(C, "XFCheckBox_type")), "Checked", false);
  await $.mset((await $.v(C, "RBtnNoResident")), "Checked", false);
  await $.mset((await $.v(C, "DBLookupvid_sob")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupSFERA_DEY")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh4")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", (-(1)));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (-(1)));
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  await $.mcall((await $.v(C, "Edit2")), "Clear", []);
  await $.mcall((await $.v(C, "Edit3")), "Clear", []);
  await $.mcall((await $.v(C, "Edit4")), "Clear", []);
  await $.mcall((await $.v(C, "Edit5")), "Clear", []);
  await $.mcall((await $.v(C, "Edit6")), "Clear", []);
  await $.mcall((await $.v(C, "Edit7")), "Clear", []);
  await $.mset((await $.v(C, "Label_Symbols")), "Caption", "");
  await $.mcall((await $.v(C, "EditNoteCode")), "Clear", []);
  await $.mcall((await $.v(C, "EditAccNo")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_AccName")), "Clear", []);
  await $.mset((await $.v(C, "DBLookupvid_sob")), "Enabled", false);
  await $.mset((await $.v(C, "DBLookupSFERA_DEY")), "Enabled", false);
  await $.mset((await $.v(C, "RadioGroup1")), "ItemIndex", (-(1)));
  await $.mset((await $.v(C, "RadioGroup1")), "Visible", false);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Enabled", true);
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "Enabled", true);
  await $.mset((await $.v(C, "DBLookupComboboxEh3")), "Enabled", true);
  await $.mset((await $.v(C, "edit1")), "Enabled", true);
  await $.mset((await $.v(C, "edit3")), "Enabled", true);
  await $.mset((await $.v(C, "edit4")), "Enabled", true);
  await $.mset((await $.v(C, "XFCheckBox_type")), "Visible", true);
  await $.mcall((await $.v(C, "Edit_BankCod")), "Clear", []);
  await $.mcall((await $.v(C, "Edit_MuxKod")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TOpenAccount", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tt": 0, "j": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "a", (await $.v(C, "tacc")));
  await $.set(C, "DataAcc", (await $.mcall((await $.v(C, "tDataAcc")), "Create", [Self])));
  await $.set(C, "a", (await $.v(C, "tacc")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tt": 0, "j": 0, "v_text": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ominsert_edit", true);
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (await $.v(C, "null")));
  L0["v_text"] = $.add($.add($.add($.add($.add($.add($.add(" where  ", "  length (bal_cn)>3 "), "  and nvl(inter_valute,0)=:int_val"), "  and nvl(cust_type,0)=:cus_tip"), "  and nvl(resident,0)=:resd"), "  and nvl(sferadey,0) like :sferad_ey"), "  and nvl(acc_type,0)=:acctype"), "  and nvl(government,0) like :govern_ment");
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["acc_types", "name"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel21")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel21")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "OpenAccount", "Pcust_Balans_hesabı"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Pcust_Balans_hesabı")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Pcust_Balans_hesabı")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "OpenAccount", "Panel_BAnkCode"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Panel_BAnkCode")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Panel_BAnkCode")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "OpenAccount", "Müxabirləşmə_kodu"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Müxabirləşmə_kodu")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "Müxabirləşmə_kodu")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "OpenAccount", "GroupBoxOpenAccount_elave"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "GroupBoxOpenAccount_elave")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "GroupBoxOpenAccount_elave")), "Visible", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "OpenAccount", "Acc_nuber_avto"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "Acc_nuber_avto")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "Acc_nuber_avto")), "Enabled", true);
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["Sb_General.bpl", "OpenAccount", "Acc_SetVariable"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.set(C, "acc_SetVariable", false);
  } else {
    await $.set(C, "acc_SetVariable", true);
  }
  L0["j"] = (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "PG_PCustService")), "CallIntegerFunction", ["get_Messaj", ["account_symbols", "name"]]));
  if ($.truthy($.eq(L0["j"], 0))) {
    await $.mset((await $.v(C, "XFLabel18")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFLabel18")), "Visible", true);
  }
  await $.mset((await $.v(C, "DBLookupComboBoxBranchName")), "KeyValue", (await $.mcall((await $.mv((await $.v(C, "DataAcc")), "sb_aca")), "CallIntegerFunction", ["getuserfilial", []])));
  {
    const $t22 = (await $.v(C, "DataAcc"));
    const $t23 = (await $.wv([$t22], "customers", C, false));
    if ($.truthy((await $.wv([$t22, $t23], "Active", C, false)))) {
      await $.stmt($.wcall([$t22, $t23], "close", [], C));
    }
    await $.stmt((await $.wcall([$t22, $t23], "SetVariable", [":custid", (await $.wcall([$t22, $t23], "strtoint", [(await $.wv([$t22, $t23], "tacc", C, false))], C))], C)));
    await $.stmt($.wcall([$t22, $t23], "open", [], C));
    await $.mset((await $.wv([$t22, $t23], "editid", C, false)), "text", (await $.wcall([$t22, $t23], "inttostr", [(await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.mset((await $.wv([$t22, $t23], "editName", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["name"])), "AsString")));
    { const $t24 = (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["NEREZIDENT"])), "AsInteger"));
      if ($.eq($t24, 0)) {
        await $.mset((await $.wv([$t22, $t23], "RBtnNoResident", C, false)), "Checked", (await $.wv([$t22, $t23], "true", C, false)));
        await $.mset((await $.wv([$t22, $t23], "RBtnNoResident", C, false)), "Caption", "Qeyri-Rezident");
      }
      else if ($.eq($t24, 1)) {
        await $.mset((await $.wv([$t22, $t23], "RBtnNoResident", C, false)), "Checked", (await $.wv([$t22, $t23], "true", C, false)));
        await $.mset((await $.wv([$t22, $t23], "RBtnNoResident", C, false)), "Caption", "Rezident");
      }
    }
    if ($.truthy($.eq((await $.wv([$t22, $t23], "acc_SetVariable", C, false)), (await $.wv([$t22, $t23], "true", C, false))))) {
      {
        const $t25 = (await $.wv([$t22, $t23], "ODS_Bal_spr", C, false));
        await $.stmt($.wcall([$t22, $t23, $t25], "close", [], C));
        { const $t26 = await $.iset((await $.wv([$t22, $t23, $t25], "sql", C, false)), [1], ""); if ($t26 !== undefined) { await $.wset([$t22, $t23, $t25], "sql", $t26, C); } }
        { const $t27 = await $.iset((await $.wv([$t22, $t23, $t25], "sql", C, false)), [1], $.add((await $.idx((await $.wv([$t22, $t23, $t25], "sql", C, false)), [1])), (await $.wv([$t22, $t23, $t25], "v_text", { get: async () => L0["v_text"], set: async (v) => { L0["v_text"] = v; }, local: true }, false)))); if ($t27 !== undefined) { await $.wset([$t22, $t23, $t25], "sql", $t27, C); } }
        await $.stmt((await $.wcall([$t22, $t23, $t25], "DeclareVariable", ["int_val", (await $.wv([$t22, $t23, $t25], "otinteger", C, false))], C)));
        await $.stmt((await $.wcall([$t22, $t23, $t25], "DeclareVariable", ["cus_tip", (await $.wv([$t22, $t23, $t25], "otinteger", C, false))], C)));
        await $.stmt((await $.wcall([$t22, $t23, $t25], "DeclareVariable", ["resd", (await $.wv([$t22, $t23, $t25], "otinteger", C, false))], C)));
        await $.stmt((await $.wcall([$t22, $t23, $t25], "DeclareVariable", ["sferad_ey", (await $.wv([$t22, $t23, $t25], "otstring", C, false))], C)));
        await $.stmt((await $.wcall([$t22, $t23, $t25], "DeclareVariable", ["acctype", (await $.wv([$t22, $t23, $t25], "otinteger", C, false))], C)));
        await $.stmt((await $.wcall([$t22, $t23, $t25], "DeclareVariable", ["govern_ment", (await $.wv([$t22, $t23, $t25], "otstring", C, false))], C)));
        await $.stmt($.wcall([$t22, $t23, $t25], "open", [], C));
      }
      await $.mset((await $.wv([$t22, $t23], "DBLookupComboboxEh1", C, false)), "KeyValue", (await $.mcall((await $.mv((await $.wv([$t22, $t23], "DataAcc", C, false)), "Ods_acc_types")), "Lookup", ["NAME", "Cari hesab", "id"])));
      { const $t28 = (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["cust_type"])), "AsInteger"));
        if ($.eq($t28, 0)) {
          await $.mset((await $.wv([$t22, $t23], "XFButtEdit", C, false)), "Enabled", (await $.wv([$t22, $t23], "true", C, false)));
          await $.mset((await $.wv([$t22, $t23], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t22, $t23], "true", C, false)));
          await $.mset((await $.wv([$t22, $t23], "XFCheckBox_type", C, false)), "Caption", "Hüquqi şəxs");
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["cus_tip", 0])));
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["nerezident"])), "asinteger"))])));
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["sferad_ey", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["sfera_dey"])), "asstring"))])));
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["govern_ment", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["vid_sob"])), "asstring"))])));
        }
        else if ($.eq($t28, 1)) {
          await $.mset((await $.wv([$t22, $t23], "XFButtEdit", C, false)), "Enabled", (await $.wv([$t22, $t23], "false", C, false)));
          await $.mset((await $.wv([$t22, $t23], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t22, $t23], "true", C, false)));
          await $.mset((await $.wv([$t22, $t23], "XFCheckBox_type", C, false)), "Caption", "Fiziki şəxs");
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["cus_tip", 1])));
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["nerezident"])), "asinteger"))])));
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["sferad_ey", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["sfera_dey"])), "asstring"))])));
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["govern_ment", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["vid_sob"])), "asstring"))])));
          await $.stmt((await $.wcall([$t22, $t23], "showmessage", ["fggg"], C)));
        }
        else if ($.eq($t28, 2)) {
          await $.mset((await $.wv([$t22, $t23], "XFButtEdit", C, false)), "Enabled", (await $.wv([$t22, $t23], "true", C, false)));
          await $.mset((await $.wv([$t22, $t23], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t22, $t23], "true", C, false)));
          await $.mset((await $.wv([$t22, $t23], "XFCheckBox_type", C, false)), "Caption", "Fiziki Sahibkar");
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["cus_tip", 2])));
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["nerezident"])), "asinteger"))])));
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["sferad_ey", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["sfera_dey"])), "asstring"))])));
          await $.stmt((await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "SetVariable", ["govern_ment", (await $.mv((await $.mcall((await $.wv([$t22, $t23], "customers", C, false)), "FieldByName", ["vid_sob"])), "asstring"))])));
        }
        else if ($.eq($t28, 3)) {
          await $.mset((await $.wv([$t22, $t23], "XFButtEdit", C, false)), "Enabled", (await $.wv([$t22, $t23], "false", C, false)));
          await $.mset((await $.wv([$t22, $t23], "RadioGroup1", C, false)), "Visible", (await $.wv([$t22, $t23], "true", C, false)));
          await $.mset((await $.wv([$t22, $t23], "XFCheckBox_type", C, false)), "Visible", (await $.wv([$t22, $t23], "false", C, false)));
        }
      }
    } else {
      await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "Close", []);
      { const $t29 = await $.iset((await $.mv((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "sql")), [1], ""); if ($t29 !== undefined) { await $.mset((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "sql", $t29); } }
      await $.mcall((await $.wv([$t22, $t23], "ODS_Bal_spr", C, false)), "Open", []);
    }
    await $.mset((await $.wv([$t22, $t23], "DBLookupvid_sob", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t23], "DataAcc", C, false)), "Customers")), "FieldByName", ["vid_sob"])), "AsString")));
    await $.mset((await $.wv([$t22, $t23], "DBLookupSFERA_DEY", C, false)), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t22, $t23], "DataAcc", C, false)), "Customers")), "FieldByName", ["SFERA_DEY"])), "AsString")));
  }
  {
    const $t30 = (await $.v(C, "DataAcc"));
    await $.mset((await $.wv([$t30], "DTPOpenDate", C, false)), "DateTime", (await $.mv((await $.mcall((await $.wv([$t30], "Sysdat", C, false)), "FieldByName", ["Tek_dat"])), "AsDateTime")));
    if ($.truthy($.not((await $.mv((await $.wv([$t30], "Customers", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t30], "Customers", C, false)), "Open", []);
    }
  }
  await $.mcall((await $.v(C, "EditNoteCode")), "Clear", []);
  await $.set(C, "accont_id", "");
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "RadioGroup1Click", async function RadioGroup1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t31 = (await $.mv((await $.v(C, "RadioGroup1")), "ItemIndex"));
    if ($.eq($t31, 0)) {
      await $.mset((await $.v(C, "XFButtEdit")), "Enabled", false);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "ODS_Bal_spr")), "SetVariable", ["cus_tip", 1])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "ODS_Bal_spr")), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "customers")), "FieldByName", ["nerezident"])), "asinteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "ODS_Bal_spr")), "SetVariable", ["sferad_ey", "%%"])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "ODS_Bal_spr")), "SetVariable", ["govern_ment", "%%"])));
      await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
      await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
      await $.mcall((await $.v(C, "edit1")), "Clear", []);
      await $.mcall((await $.v(C, "edit3")), "Clear", []);
      await $.mcall((await $.v(C, "edit4")), "Clear", []);
      await $.mcall((await $.v(C, "edit2")), "Clear", []);
    }
    else if ($.eq($t31, 1)) {
      await $.mset((await $.v(C, "XFButtEdit")), "Enabled", true);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "ODS_Bal_spr")), "SetVariable", ["cus_tip", 2])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "ODS_Bal_spr")), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "customers")), "FieldByName", ["nerezident"])), "asinteger"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "ODS_Bal_spr")), "SetVariable", ["sferad_ey", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "customers")), "FieldByName", ["sfera_dey"])), "asstring"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "ODS_Bal_spr")), "SetVariable", ["govern_ment", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "customers")), "FieldByName", ["vid_sob"])), "asstring"))])));
      await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
      await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
      await $.mcall((await $.v(C, "edit1")), "Clear", []);
      await $.mcall((await $.v(C, "edit3")), "Clear", []);
      await $.mcall((await $.v(C, "edit4")), "Clear", []);
      await $.mcall((await $.v(C, "edit2")), "Clear", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "XFBitBtn1Click", async function XFBitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_bal_cn2": null, "v_sim_otcet": null, "v_symbol": null, "v_old_accno": '', "v_bankcode": '', "v_acc_no": '', "v_tip_acc": '', "v_accname": '', "v_limit": '', "v_open_dat": 0, "v_cust_id": 0, "v_id": 0, "v_val_id": 0, "v_fil_id": 0, "v_bal_cn1": 0, "id": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel21")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabın tipi  seçilmeyib !"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesabın valyutası  seçilmeyib !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Balans hesabı  seçilmeyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFLabel18")), "Visible")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "Text")), ""))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Hesabın  təyinatı  seçilmeyib !"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "EditAccNo")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Hesab nömrəsi yaradılmayıb !"])));
    return L0.result;
  }
  L0["v_cust_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "customers")), "FieldByName", ["ID"])), "AsInteger"));
  L0["v_tip_acc"] = (await $.mv((await $.v(C, "Label_Symbols")), "Caption"));
  L0["v_accname"] = (await $.mv((await $.v(C, "Edit_AccName")), "Text"));
  L0["v_symbol"] = (await $.mv((await $.v(C, "DBLookupComboboxEh4")), "KeyValue"));
  L0["v_sim_otcet"] = (await $.mv((await $.v(C, "DBLookupComboboxEh5")), "KeyValue"));
  L0["v_bal_cn1"] = (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "KeyValue"));
  if ($.truthy((await $.call(C, "VarIsNull", [(await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"))])))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh6")), "KeyValue", (await $.v(C, "null")));
  } else {
    L0["v_bal_cn2"] = (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "KeyValue"));
  }
  L0["v_limit"] = (await $.mv((await $.v(C, "edit7")), "Text"));
  L0["v_fil_id"] = (await $.mv((await $.v(C, "DBLookupComboBoxBranchName")), "KeyValue"));
  L0["v_val_id"] = (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"));
  L0["v_bankcode"] = ((await $.mv((await $.v(C, "Edit_BankCod")), "Text")));
  L0["v_old_accno"] = (await $.mv((await $.v(C, "Edit_MuxKod")), "Text"));
  L0["v_open_dat"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Sysdat")), "FieldByName", ["Tek_dat"])), "AsDateTime"));
  L0["id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "Account")), "FieldByName", ["id"])), "AsVariant"));
  L0["v_acc_no"] = (await $.mv((await $.v(C, "EditAccNo")), "Text"));
  L0["v_acc_no"] = (await $.call(C, "StringReplace", [L0["v_acc_no"], " ", "", [(await $.v(C, "rfReplaceAll"))]]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataAcc")), "SBOP")), "CallStringFunction", ["add_account", [L0["v_cust_id"], (await $.v(C, "null")), L0["v_acc_no"], L0["v_val_id"], L0["v_accname"], L0["v_open_dat"], L0["v_bal_cn1"], L0["v_limit"], (await $.v(C, "null")), L0["v_bal_cn2"], 0, 0, L0["v_fil_id"], L0["v_sim_otcet"], L0["v_tip_acc"], L0["v_old_accno"], 0, 0, L0["v_symbol"], (await $.v(C, "null")), L0["v_bankcode"]]])));
  await $.mcall((await $.v(C, "OpenAccount")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "XFButtEditClick", async function XFButtEditClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "c_id": 0, "c_vid_sob": 0, "c_sfera_dey": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupvid_sob")), "Enabled")), false))) {
    await $.mset((await $.v(C, "DBLookupvid_sob")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupSFERA_DEY")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "Enabled", false);
    await $.mset((await $.v(C, "edit1")), "Enabled", false);
    await $.mset((await $.v(C, "edit3")), "Enabled", false);
    await $.mset((await $.v(C, "edit4")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (-(1)));
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", (-(1)));
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "KeyValue", (-(1)));
    await $.mcall((await $.v(C, "edit1")), "Clear", []);
    await $.mcall((await $.v(C, "edit3")), "Clear", []);
    await $.mcall((await $.v(C, "edit4")), "Clear", []);
    return L0.result;
  }
  L0["c_id"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "editid")), "Text"))]));
  L0["c_vid_sob"] = (await $.mv((await $.v(C, "DBLookupvid_sob")), "KeyValue"));
  L0["c_sfera_dey"] = (await $.mv((await $.v(C, "DBLookupSFERA_DEY")), "KeyValue"));
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Dəyşikliki Yadda saxlanılsınmı ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dataAcc")), "PG_PCustService")), "CallProcedure", ["edit_cust_Vid_sbo_sfera_dey", [L0["c_id"], L0["c_vid_sob"], L0["c_sfera_dey"]]])));
    await $.mset((await $.v(C, "DBLookupvid_sob")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupSFERA_DEY")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboboxEh1")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboboxEh3")), "Enabled", true);
    await $.mset((await $.v(C, "edit1")), "Enabled", true);
    await $.mset((await $.v(C, "edit3")), "Enabled", true);
    await $.mset((await $.v(C, "edit4")), "Enabled", true);
    await $.mcall((await $.mv((await $.v(C, "DataAcc")), "customers")), "Refresh", []);
  }
  {
    const $t32 = (await $.v(C, "DataAcc"));
    const $t33 = (await $.wv([$t32], "customers", C, false));
    { const $t34 = (await $.mv((await $.mcall((await $.wv([$t32, $t33], "customers", C, false)), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t34, 0)) {
        await $.mset((await $.wv([$t32, $t33], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t32, $t33], "true", C, false)));
        await $.mset((await $.wv([$t32, $t33], "XFCheckBox_type", C, false)), "Caption", "Hüquqi şəxs");
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["cus_tip", 0])));
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.wv([$t32, $t33], "customers", C, false)), "FieldByName", ["nerezident"])), "asinteger"))])));
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["sferad_ey", (await $.mv((await $.mcall((await $.wv([$t32, $t33], "customers", C, false)), "FieldByName", ["sfera_dey"])), "asstring"))])));
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["govern_ment", (await $.mv((await $.mcall((await $.wv([$t32, $t33], "customers", C, false)), "FieldByName", ["vid_sob"])), "asstring"))])));
      }
      else if ($.eq($t34, 1)) {
        await $.mset((await $.wv([$t32, $t33], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t32, $t33], "true", C, false)));
        await $.mset((await $.wv([$t32, $t33], "XFCheckBox_type", C, false)), "Caption", "Fiziki şəxs");
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["cus_tip", 1])));
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.wv([$t32, $t33], "customers", C, false)), "FieldByName", ["nerezident"])), "asinteger"))])));
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["sferad_ey", "%%"])));
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["govern_ment", "%%"])));
      }
      else if ($.eq($t34, 2)) {
        await $.mset((await $.wv([$t32, $t33], "XFCheckBox_type", C, false)), "Checked", (await $.wv([$t32, $t33], "true", C, false)));
        await $.mset((await $.wv([$t32, $t33], "XFCheckBox_type", C, false)), "Caption", "Fiziki Sahibkar");
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["cus_tip", 2])));
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.wv([$t32, $t33], "customers", C, false)), "FieldByName", ["nerezident"])), "asinteger"))])));
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["sferad_ey", (await $.mv((await $.mcall((await $.wv([$t32, $t33], "customers", C, false)), "FieldByName", ["sfera_dey"])), "asstring"))])));
        await $.stmt((await $.mcall((await $.wv([$t32, $t33], "ODS_Bal_spr", C, false)), "SetVariable", ["govern_ment", (await $.mv((await $.mcall((await $.wv([$t32, $t33], "customers", C, false)), "FieldByName", ["vid_sob"])), "asstring"))])));
      }
      else if ($.eq($t34, 3)) {
        await $.mset((await $.wv([$t32, $t33], "RadioGroup1", C, false)), "Visible", (await $.wv([$t32, $t33], "true", C, false)));
        await $.mset((await $.wv([$t32, $t33], "XFCheckBox_type", C, false)), "Visible", (await $.wv([$t32, $t33], "false", C, false)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormBalCn", (await $.mcall((await $.v(C, "TFormBalCn")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormBalCn")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOpenAccount", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormBalCn1", (await $.mcall((await $.v(C, "TFormBalCn1")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormBalCn1")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "OpenAccount", (await $.mcall((await $.v(C, "TOpenAccount")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
