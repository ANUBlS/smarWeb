// Generated from CustomersImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustomersImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "DB", "OracleData", "SboapiDataModuleImpl", "ComCtrls", "ToolWin", "StdCtrls", "XFSCtrls", "UnitDataBussProc", "UnitTransaction", "UnitbussProc", "FormTransaction3Lmpl"]);
  const C = [U];
  U.defClass("TFormCustomers", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "ods_customers": {"name": "ODS_CUSTOMERS", "type": "TOracleDataSet"}, "ds_customers": {"name": "DS_CUSTOMERS", "type": "TDataSource"}, "cbsearch": {"name": "CBSearch", "type": "TComboBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "ods_customersid": {"name": "ODS_CUSTOMERSID", "type": "TIntegerField"}, "ods_customerscust_name": {"name": "ODS_CUSTOMERSCUST_NAME", "type": "TWideStringField"}, "ods_customersfirstname": {"name": "ODS_CUSTOMERSFIRSTNAME", "type": "TWideStringField"}, "ods_customerspatronymic": {"name": "ODS_CUSTOMERSPATRONYMIC", "type": "TWideStringField"}, "ods_customerslastname": {"name": "ODS_CUSTOMERSLASTNAME", "type": "TWideStringField"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "ods_customers_tr": {"name": "ODS_CUSTOMERS_tr", "type": "TOracleDataSet"}, "ds_customers_tr": {"name": "DS_CUSTOMERS_tr", "type": "TDataSource"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "ods_customers_trid": {"name": "ODS_CUSTOMERS_trID", "type": "TIntegerField"}, "ods_customers_trcust_name": {"name": "ODS_CUSTOMERS_trCUST_NAME", "type": "TWideStringField"}, "ods_customers_trlastname": {"name": "ODS_CUSTOMERS_trLASTNAME", "type": "TWideStringField"}, "ods_customers_trfirstname": {"name": "ODS_CUSTOMERS_trFIRSTNAME", "type": "TWideStringField"}, "ods_customers_trpatronymic": {"name": "ODS_CUSTOMERS_trPATRONYMIC", "type": "TWideStringField"}, "ods_customers_trcust_type": {"name": "ODS_CUSTOMERS_trCUST_TYPE", "type": "TFloatField"}, "ods_customers_trinn": {"name": "ODS_CUSTOMERS_trINN", "type": "TWideStringField"}, "ods_customers_trpassport": {"name": "ODS_CUSTOMERS_trPASSPORT", "type": "TWideStringField"}, "ods_customers_trpassp_number": {"name": "ODS_CUSTOMERS_trPASSP_NUMBER", "type": "TWideStringField"}, "vcustid": {"name": "vCustId", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("FormCustomers", null, "TFormCustomers");
  });
  U.method("TFormCustomers", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_cust_type_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "cust_elaqe_Transaction")), 2))) {
    await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit8")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit10")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_name"])), "AsString")));
    {
      const $t1 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
      await $.stmt($.wcall([$t1], "close", [], C));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["CustID", (await $.wcall([$t1], "strtoint", [(await $.mv((await $.mv((await $.wv([$t1], "FormTransaction3", C, false)), "Edit8")), "Text"))], C))], C)));
      await $.stmt($.wcall([$t1], "open", [], C));
    }
    L0["v_cust_type_id"] = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["CUST_TYPE"])), "AsInteger"));
    if ($.truthy($.in_(L0["v_cust_type_id"], [0, 2]))) {
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit11")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit11")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["inn"])), "AsString")));
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit7")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit18")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Label18")), "Caption", "Vöen");
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "edit12")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Label16")), "Visible", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit7")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit18")), "Visible", true);
    }
    if ($.truthy($.eq(L0["v_cust_type_id"], 1))) {
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit7")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit18")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit7")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passport"])), "AsString")));
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit18")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passp_number"])), "AsString")));
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit11")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Label18")), "Caption", "Pasport seriyasi");
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "edit12")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Label16")), "Visible", false);
    } else {
      if ($.truthy($.eq(L0["v_cust_type_id"], 3))) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit7")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit18")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit7")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passport"])), "AsString")));
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit18")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passp_number"])), "AsString")));
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit11")), "Visible", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Label18")), "Caption", "Pasport seriyasi");
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Label16")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "edit12")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit12")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["inn"])), "AsString")));
      } else {
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit11")), "Visible", true);
      }
    }
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "First", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "Last", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "DBLookupComboboxEh_B1")), "KeyValue", " ");
    }
    {
      const $t2 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
      if ($.truthy($.eq((await $.wv([$t2], "RecordCount", C, false)), 2))) {
        await $.mset((await $.mv((await $.wv([$t2], "FormTransaction3", C, false)), "DBCBoxAccNo_B")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataModule_bussProc", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.mv((await $.wv([$t2], "FormTransaction3", C, false)), "DBCBoxAccNo_B")), "KeyValue", " ");
      }
    }
    { const $t3 = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t3, 0)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_jur")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_phys")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Enabled", false);
      }
      else if ($.eq($t3, 1)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_phys")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_jur")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Enabled", false);
      }
      else if ($.eq($t3, 2)) {
        if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Checked")), false))) {
          await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Checked", true);
        } else {
          await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Checked", true);
        }
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_jur")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_phys")), "Enabled", false);
      }
      else if ($.eq($t3, 3)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_phys")), "Checked", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Checked", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_jur")), "Enabled", false);
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "cust_elaqe_Transaction")), 3))) {
    await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_id_B")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_cust_name_B")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_name"])), "AsString")));
    {
      const $t4 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
      await $.stmt($.wcall([$t4], "close", [], C));
      await $.stmt((await $.wcall([$t4], "SetVariable", ["CustID", (await $.wcall([$t4], "strtoint", [(await $.mv((await $.mv((await $.wv([$t4], "FormTransaction4", C, false)), "Edit_id_B")), "Text"))], C))], C)));
      await $.stmt($.wcall([$t4], "open", [], C));
    }
    L0["v_cust_type_id"] = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["CUST_TYPE"])), "AsInteger"));
    if ($.truthy($.in_(L0["v_cust_type_id"], [0, 2]))) {
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_B")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_B")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["inn"])), "AsString")));
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_B")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_B")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_PASPIN_INN_B")), "Caption", "Voen");
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_fs_B")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_acc_noA")), "Visible", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_B")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_B")), "Visible", true);
    }
    if ($.truthy($.eq(L0["v_cust_type_id"], 1))) {
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_B")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_B")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_B")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passport"])), "AsString")));
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_B")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passp_number"])), "AsString")));
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_B")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_PASPIN_INN_B")), "Caption", "Pasport seriyasi");
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_fs_B")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_acc_noA")), "Visible", false);
    } else {
      if ($.truthy($.eq(L0["v_cust_type_id"], 3))) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_B")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_B")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_B")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passport"])), "AsString")));
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_B")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passp_number"])), "AsString")));
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_B")), "Visible", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_PASPIN_INN_B")), "Caption", "Pasport seriyasi");
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_acc_noA")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_fs_B")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_fs_B")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["inn"])), "AsString")));
      } else {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_B")), "Visible", true);
      }
    }
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "First", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B")), "Last", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "DBLookupComboboxEh_B1")), "KeyValue", " ");
    }
    {
      const $t5 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_B"));
      if ($.truthy($.eq((await $.wv([$t5], "RecordCount", C, false)), 2))) {
        await $.mset((await $.mv((await $.wv([$t5], "FormTransaction4", C, false)), "DBCBoxAccNo_B")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t5], "DataModule_bussProc", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.mv((await $.wv([$t5], "FormTransaction4", C, false)), "DBCBoxAccNo_B")), "KeyValue", " ");
      }
    }
    { const $t6 = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t6, 0)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_B")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_B")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Enabled", false);
      }
      else if ($.eq($t6, 1)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_B")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_B")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Enabled", false);
      }
      else if ($.eq($t6, 2)) {
        if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Checked")), false))) {
          await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Checked", true);
        } else {
          await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Checked", true);
        }
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_B")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_B")), "Enabled", false);
      }
      else if ($.eq($t6, 3)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_B")), "Checked", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Checked", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_B")), "Enabled", false);
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "cust_elaqe_Transaction")), 4))) {
    await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_id_C")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_cust_name_C")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_name"])), "AsString")));
    {
      const $t7 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C"));
      await $.stmt($.wcall([$t7], "close", [], C));
      await $.stmt((await $.wcall([$t7], "SetVariable", ["CustID", (await $.wcall([$t7], "strtoint", [(await $.mv((await $.mv((await $.wv([$t7], "FormTransaction4", C, false)), "Edit_id_C")), "Text"))], C))], C)));
      await $.stmt($.wcall([$t7], "open", [], C));
    }
    L0["v_cust_type_id"] = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["CUST_TYPE"])), "AsInteger"));
    if ($.truthy($.in_(L0["v_cust_type_id"], [0, 2]))) {
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_C")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_C")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["inn"])), "AsString")));
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_C")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_C")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_PASPIN_INN_C")), "Caption", "Vöen");
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_fs_C")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_acc_no_C")), "Visible", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_C")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_C")), "Visible", true);
    }
    if ($.truthy($.eq(L0["v_cust_type_id"], 1))) {
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_C")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_C")), "Visible", true);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_C")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passport"])), "AsString")));
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_C")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passp_number"])), "AsString")));
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_C")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_PASPIN_INN_C")), "Caption", "Pasport seriyasi");
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_fs_C")), "Visible", false);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_acc_no_C")), "Visible", false);
    } else {
      if ($.truthy($.eq(L0["v_cust_type_id"], 3))) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_C")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_C")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_ser_C")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passport"])), "AsString")));
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_pasp_num_C")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["passp_number"])), "AsString")));
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_C")), "Visible", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_PASPIN_INN_C")), "Caption", "Pasport seriyasi");
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Label_acc_no_C")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_fs_C")), "Visible", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_fs_C")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["inn"])), "AsString")));
      } else {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "Edit_inn_C")), "Visible", true);
      }
    }
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "First", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "DBLookupComboboxEh_C")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C")), "Last", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "DBLookupComboboxEh_C")), "KeyValue", " ");
    }
    {
      const $t8 = (await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_AccNO_C"));
      if ($.truthy($.eq((await $.wv([$t8], "RecordCount", C, false)), 2))) {
        await $.mset((await $.mv((await $.wv([$t8], "FormTransaction4", C, false)), "DBCBoxAccNo_C")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t8], "DataModule_bussProc", C, false)), "ODS_AccNO_C")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.mv((await $.wv([$t8], "FormTransaction4", C, false)), "DBCBoxAccNo_C")), "KeyValue", " ");
      }
    }
    { const $t9 = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t9, 0)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_C")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_C")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Enabled", false);
      }
      else if ($.eq($t9, 1)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_C")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_C")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Enabled", false);
      }
      else if ($.eq($t9, 2)) {
        if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Checked")), false))) {
          await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Checked", true);
        } else {
          await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Checked", true);
        }
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_C")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_C")), "Enabled", false);
      }
      else if ($.eq($t9, 3)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_C")), "Checked", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Checked", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_C")), "Enabled", false);
      }
    }
  }
  await $.mcall((await $.v(C, "FormCustomers")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "EditSearchChange", async function EditSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "cust_elaqe_Transaction")), 1))) {
    if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditSearch")), "Text"))])), 0))) {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Close", []);
      { const $t10 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
        if ($.eq($t10, 0)) {
          { const $t11 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add("and ID like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'")); if ($t11 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t11); } }
        }
        else if ($.eq($t10, 1)) {
          { const $t12 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add("and upper(cust_name) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t12 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t12); } }
        }
        else if ($.eq($t10, 2)) {
          { const $t13 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t13 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t13); } }
        }
        else if ($.eq($t10, 3)) {
          { const $t14 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t14 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t14); } }
        }
        else if ($.eq($t10, 4)) {
          { const $t15 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t15 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t15); } }
        }
      }
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Close", []);
      { const $t16 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], ""); if ($t16 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t16); } }
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
    }
  }
  if ($.truthy($.in_((await $.v(C, "cust_elaqe_Transaction")), [2, 3, 4]))) {
    if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditSearch")), "Text"))])), 0))) {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      { const $t17 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
        if ($.eq($t17, 0)) {
          { const $t18 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add("and p.ID like ('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t18 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t18); } }
        }
        else if ($.eq($t17, 1)) {
          { const $t19 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add("and upper(p.cust_name) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t19 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t19); } }
        }
        else if ($.eq($t17, 2)) {
          { const $t20 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t20 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t20); } }
        }
        else if ($.eq($t17, 3)) {
          { const $t21 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t21 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t21); } }
        }
        else if ($.eq($t17, 4)) {
          { const $t22 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t22 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t22); } }
        }
      }
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      { const $t23 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], ""); if ($t23 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t23); } }
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormCustomers", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "EditSearch")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormCustomers", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "bal_cn": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await $.v(C, "cust_elaqe_Transaction")), 1)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CustomersPhys_FSCUST_TYPE")), "AsInteger")), 1)))))) {
    await $.mset((await $.v(C, "FormCustomers")), "Caption", "Müştərinin əlaqələndirilməsi");
    await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "FormCustomers")), "DS_CUSTOMERS")));
    await $.mcall((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "Close", []);
    { const $t24 = await $.iset((await $.mv((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL")), [4], ""); if ($t24 !== undefined) { await $.mset((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL", $t24); } }
    { const $t25 = await $.iset((await $.mv((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL")), [4], " and cust_type=4"); if ($t25 !== undefined) { await $.mset((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL", $t25); } }
    await $.mcall((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "Open", []);
    await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
    { const $t26 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
      L0["i"] = 0;
      let $t27 = true;
      for (;;) {
        if (!$t27) { L0["i"] = $.succ(L0["i"], 1); }
        $t27 = false;
        if (!($.ord(L0["i"]) <= $.ord($t26))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid1")), "Columns")), [L0["i"]])), "Title")), "Caption"))])));
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
    if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Active")), true))))) {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Refresh", []);
    }
    await $.set(C, "vCustId", (-(1)));
    await $.mset((await $.v(C, "XFButton1")), "Visible", true);
    await $.mset((await $.v(C, "XFButton3")), "Visible", false);
  }
  if ($.truthy((await $.and_(($.eq((await $.v(C, "cust_elaqe_Transaction")), 1)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CustomersPhys_FSCUST_TYPE")), "AsInteger")), 0)))))) {
    await $.mset((await $.v(C, "FormCustomers")), "Caption", "Müştərinin əlaqələndirilməsi");
    await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "FormCustomers")), "DS_CUSTOMERS")));
    { const $t28 = await $.iset((await $.mv((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL")), [4], ""); if ($t28 !== undefined) { await $.mset((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL", $t28); } }
    await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
    { const $t29 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
      L0["i"] = 0;
      let $t30 = true;
      for (;;) {
        if (!$t30) { L0["i"] = $.succ(L0["i"], 1); }
        $t30 = false;
        if (!($.ord(L0["i"]) <= $.ord($t29))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid1")), "Columns")), [L0["i"]])), "Title")), "Caption"))])));
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
    if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Active")), true))))) {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Refresh", []);
    }
    await $.set(C, "vCustId", (-(1)));
    await $.mset((await $.v(C, "XFButton1")), "Visible", true);
    await $.mset((await $.v(C, "XFButton3")), "Visible", false);
  }
  if ($.truthy($.eq((await $.v(C, "cust_elaqe_Transaction")), 2))) {
    await $.mset((await $.v(C, "FormCustomers")), "Caption", "Müştərinin axtarışı");
    await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "FormCustomers")), "DS_CUSTOMERS_tr")));
    if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "FormTransaction3")), "Edit2")), "Text")), ""))) {
      L0["bal_cn"] = (await $.mv((await $.mv((await $.v(C, "FormTransaction3")), "Edit2")), "Text"));
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "SetVariable", ["p_valu", $.add($.add(" and id in(select a.kli_id from  account a  where bal_cn1=", L0["bal_cn"]), " and close_dat is null) ")])));
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_Tr")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "SetVariable", ["p_valu", ""])));
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_Tr")), "Open", []);
    }
    await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
    { const $t31 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
      L0["i"] = 0;
      let $t32 = true;
      for (;;) {
        if (!$t32) { L0["i"] = $.succ(L0["i"], 1); }
        $t32 = false;
        if (!($.ord(L0["i"]) <= $.ord($t31))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid1")), "Columns")), [L0["i"]])), "Title")), "Caption"))])));
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
    if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "Active")), true))))) {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Refresh", []);
    }
    await $.set(C, "vCustId", (-(1)));
    await $.mset((await $.v(C, "XFButton3")), "Visible", true);
    await $.mset((await $.v(C, "XFButton1")), "Visible", false);
  }
  if ($.truthy($.eq((await $.v(C, "cust_elaqe_Transaction")), 3))) {
    await $.mset((await $.v(C, "FormCustomers")), "Caption", "Müştərinin axtarışı");
    await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "FormCustomers")), "DS_CUSTOMERS_tr")));
    if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "FormTransaction4")), "Edit_bal_cn1_B")), "Text")), ""))) {
      L0["bal_cn"] = (await $.mv((await $.mv((await $.v(C, "FormTransaction4")), "Edit_bal_cn1_B")), "Text"));
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "SetVariable", ["p_valu", $.add($.add(" and id in(select a.kli_id from  account a  where bal_cn1=", L0["bal_cn"]), " and close_dat is null) ")])));
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_Tr")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "SetVariable", ["p_valu", ""])));
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_Tr")), "Open", []);
    }
    await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
    { const $t33 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
      L0["i"] = 0;
      let $t34 = true;
      for (;;) {
        if (!$t34) { L0["i"] = $.succ(L0["i"], 1); }
        $t34 = false;
        if (!($.ord(L0["i"]) <= $.ord($t33))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid1")), "Columns")), [L0["i"]])), "Title")), "Caption"))])));
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
    if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "Active")), true))))) {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Refresh", []);
    }
    await $.set(C, "vCustId", (-(1)));
    await $.mset((await $.v(C, "XFButton3")), "Visible", true);
    await $.mset((await $.v(C, "XFButton1")), "Visible", false);
  }
  if ($.truthy($.eq((await $.v(C, "cust_elaqe_Transaction")), 4))) {
    await $.mset((await $.v(C, "FormCustomers")), "Caption", "Müştərinin axtarışı");
    await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "FormCustomers")), "DS_CUSTOMERS_tr")));
    if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "FormTransaction4")), "Edit_bal_cn1_C")), "Text")), ""))) {
      L0["bal_cn"] = (await $.mv((await $.mv((await $.v(C, "FormTransaction4")), "Edit_bal_cn1_C")), "Text"));
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "SetVariable", ["p_valu", $.add($.add(" and id in(select a.kli_id from  account a  where bal_cn1=", L0["bal_cn"]), " and close_dat is null) ")])));
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_Tr")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      await $.stmt((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "SetVariable", ["p_valu", ""])));
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_Tr")), "Open", []);
    }
    await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
    { const $t35 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
      L0["i"] = 0;
      let $t36 = true;
      for (;;) {
        if (!$t36) { L0["i"] = $.succ(L0["i"], 1); }
        $t36 = false;
        if (!($.ord(L0["i"]) <= $.ord($t35))) break;
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "CBSearch")), "Items")), "Add", [(await $.mv((await $.mv((await $.idx((await $.mv((await $.v(C, "DBGrid1")), "Columns")), [L0["i"]])), "Title")), "Caption"))])));
        await $.tick();
      }
    }
    await $.mset((await $.v(C, "CBSearch")), "ItemIndex", 0);
    if ($.truthy($.not(($.eq((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "Active")), true))))) {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Refresh", []);
    }
    await $.set(C, "vCustId", (-(1)));
    await $.mset((await $.v(C, "XFButton3")), "Visible", true);
    await $.mset((await $.v(C, "XFButton1")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "vCustId", (await $.mv((await $.v(C, "ODS_CUSTOMERSID")), "AsInteger")));
  await $.mcall((await $.v(C, "FormCustomers")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "vCustId", (-(1)));
  await $.mcall((await $.v(C, "FormCustomers")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "custid": 0, "custid2": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["custid2"] = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "FieldByName", ["id"])), "AsInteger"));
  L0["custid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "PG_PCustService")), "CallProcedure", ["add_cust_relations", [L0["custid"], L0["custid2"]]])));
  await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModule_bussProc")), "ODS_CUSTOMERSPHYS_FS")), "Locate", ["id", L0["custid"], []])));
  await $.mcall((await $.v(C, "FormCustomers")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "vCustId", (-(1)));
  await $.mcall((await $.v(C, "FormCustomers")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustomers", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "DBGrid1DblClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
