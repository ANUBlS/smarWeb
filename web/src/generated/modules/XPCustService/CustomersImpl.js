// Generated from CustomersImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustomersImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "ExtCtrls", "DB", "OracleData", "SboapiDataModuleImpl", "ComCtrls", "ToolWin", "StdCtrls", "XFSCtrls", "UnitDataModPCustService", "PCustServiceFormImpl1", "FormTransaction3Lmpl", "UnitTransaction"]);
  const C = [U];
  U.defClass("TFormCustomers", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "ods_customers": {"name": "ODS_CUSTOMERS", "type": "TOracleDataSet"}, "ds_customers": {"name": "DS_CUSTOMERS", "type": "TDataSource"}, "cbsearch": {"name": "CBSearch", "type": "TComboBox"}, "editsearch": {"name": "EditSearch", "type": "TEdit"}, "ods_customersid": {"name": "ODS_CUSTOMERSID", "type": "TIntegerField"}, "ods_customerscust_name": {"name": "ODS_CUSTOMERSCUST_NAME", "type": "TWideStringField"}, "ods_customersfirstname": {"name": "ODS_CUSTOMERSFIRSTNAME", "type": "TWideStringField"}, "ods_customerspatronymic": {"name": "ODS_CUSTOMERSPATRONYMIC", "type": "TWideStringField"}, "ods_customerslastname": {"name": "ODS_CUSTOMERSLASTNAME", "type": "TWideStringField"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "ods_customers_tr": {"name": "ODS_CUSTOMERS_tr", "type": "TOracleDataSet"}, "ds_customers_tr": {"name": "DS_CUSTOMERS_tr", "type": "TDataSource"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "ods_customers_trid": {"name": "ODS_CUSTOMERS_trID", "type": "TIntegerField"}, "ods_customers_trcust_name": {"name": "ODS_CUSTOMERS_trCUST_NAME", "type": "TWideStringField"}, "ods_customers_trlastname": {"name": "ODS_CUSTOMERS_trLASTNAME", "type": "TWideStringField"}, "ods_customers_trfirstname": {"name": "ODS_CUSTOMERS_trFIRSTNAME", "type": "TWideStringField"}, "ods_customers_trpatronymic": {"name": "ODS_CUSTOMERS_trPATRONYMIC", "type": "TWideStringField"}, "ods_customers_trcust_type": {"name": "ODS_CUSTOMERS_trCUST_TYPE", "type": "TFloatField"}, "ods_customers_trinn": {"name": "ODS_CUSTOMERS_trINN", "type": "TWideStringField"}, "ods_customers_trpassport": {"name": "ODS_CUSTOMERS_trPASSPORT", "type": "TWideStringField"}, "ods_customers_trpassp_number": {"name": "ODS_CUSTOMERS_trPASSP_NUMBER", "type": "TWideStringField"}, "vcustid": {"name": "vCustId", "type": "Integer"}}, {});
  U.init(async () => {
    U.var_("FormCustomers", null, "TFormCustomers");
  });
  U.method("TFormCustomers", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_cust_type_id": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "cust_elaqe_Transaction")), 1))) {
    await $.mcall((await $.v(C, "XFButton1")), "Click", []);
  }
  if ($.truthy($.eq((await $.v(C, "cust_elaqe_Transaction")), 2))) {
    await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit8")), "Text", (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "Edit10")), "Text", (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_name"])), "AsString")));
    {
      const $t1 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B"));
      await $.stmt($.wcall([$t1], "close", [], C));
      { const $t2 = await $.iset((await $.wv([$t1], "sql", C, false)), [11], ""); if ($t2 !== undefined) { await $.wset([$t1], "sql", $t2, C); } }
      { const $t3 = await $.iset((await $.wv([$t1], "sql", C, false)), [11], $.add($.add((await $.idx((await $.wv([$t1], "sql", C, false)), [11])), " and  kli_ID = "), (await $.mv((await $.mv((await $.wv([$t1], "FormTransaction3", C, false)), "Edit8")), "Text")))); if ($t3 !== undefined) { await $.wset([$t1], "sql", $t3, C); } }
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
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "First", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "Last", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "DBLookupComboboxEh_B1")), "KeyValue", " ");
    }
    {
      const $t4 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B"));
      if ($.truthy($.eq((await $.wv([$t4], "RecordCount", C, false)), 2))) {
        await $.mset((await $.mv((await $.wv([$t4], "FormTransaction3", C, false)), "DBCBoxAccNo_B")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t4], "DataModPCustService", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.mv((await $.wv([$t4], "FormTransaction3", C, false)), "DBCBoxAccNo_B")), "KeyValue", " ");
      }
    }
    { const $t5 = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t5, 0)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_jur")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_phys")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Enabled", false);
      }
      else if ($.eq($t5, 1)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_phys")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_jur")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Enabled", false);
      }
      else if ($.eq($t5, 2)) {
        if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Checked")), false))) {
          await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Checked", true);
        } else {
          await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_fs")), "Checked", true);
        }
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_jur")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction3")), "RadioBu_phys")), "Enabled", false);
      }
      else if ($.eq($t5, 3)) {
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
      const $t6 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B"));
      await $.stmt($.wcall([$t6], "close", [], C));
      { const $t7 = await $.iset((await $.wv([$t6], "sql", C, false)), [11], ""); if ($t7 !== undefined) { await $.wset([$t6], "sql", $t7, C); } }
      { const $t8 = await $.iset((await $.wv([$t6], "sql", C, false)), [11], $.add($.add((await $.idx((await $.wv([$t6], "sql", C, false)), [11])), " and  kli_ID = "), (await $.mv((await $.mv((await $.wv([$t6], "FormTransaction4", C, false)), "Edit_id_B")), "Text")))); if ($t8 !== undefined) { await $.wset([$t6], "sql", $t8, C); } }
      await $.stmt($.wcall([$t6], "open", [], C));
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
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "First", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "DBLookupComboboxEh_B1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B")), "Last", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "DBLookupComboboxEh_B1")), "KeyValue", " ");
    }
    {
      const $t9 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_B"));
      if ($.truthy($.eq((await $.wv([$t9], "RecordCount", C, false)), 2))) {
        await $.mset((await $.mv((await $.wv([$t9], "FormTransaction4", C, false)), "DBCBoxAccNo_B")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DataModPCustService", C, false)), "ODS_AccNO_B")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.mv((await $.wv([$t9], "FormTransaction4", C, false)), "DBCBoxAccNo_B")), "KeyValue", " ");
      }
    }
    { const $t10 = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t10, 0)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_B")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_B")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Enabled", false);
      }
      else if ($.eq($t10, 1)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_B")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_B")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Enabled", false);
      }
      else if ($.eq($t10, 2)) {
        if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Checked")), false))) {
          await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Checked", true);
        } else {
          await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_B")), "Checked", true);
        }
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_B")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_B")), "Enabled", false);
      }
      else if ($.eq($t10, 3)) {
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
      const $t11 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_C"));
      await $.stmt($.wcall([$t11], "close", [], C));
      { const $t12 = await $.iset((await $.wv([$t11], "sql", C, false)), [11], ""); if ($t12 !== undefined) { await $.wset([$t11], "sql", $t12, C); } }
      { const $t13 = await $.iset((await $.wv([$t11], "sql", C, false)), [11], $.add($.add((await $.idx((await $.wv([$t11], "sql", C, false)), [11])), " and  kli_ID = "), (await $.mv((await $.mv((await $.wv([$t11], "FormTransaction4", C, false)), "Edit_id_C")), "Text")))); if ($t13 !== undefined) { await $.wset([$t11], "sql", $t13, C); } }
      await $.stmt($.wcall([$t11], "open", [], C));
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
    if ($.truthy($.le((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_C")), "RecordCount")), 2))) {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_C")), "First", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "DBLookupComboboxEh_C")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_C")), "FieldByName", ["symb"])), "AsString")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_C")), "Last", []);
      await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "DBLookupComboboxEh_C")), "KeyValue", " ");
    }
    {
      const $t14 = (await $.mv((await $.v(C, "DataModPCustService")), "ODS_AccNO_C"));
      if ($.truthy($.eq((await $.wv([$t14], "RecordCount", C, false)), 2))) {
        await $.mset((await $.mv((await $.wv([$t14], "FormTransaction4", C, false)), "DBCBoxAccNo_C")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModPCustService", C, false)), "ODS_AccNO_C")), "FieldByName", ["acc_no"])), "AsString")));
      } else {
        await $.mset((await $.mv((await $.wv([$t14], "FormTransaction4", C, false)), "DBCBoxAccNo_C")), "KeyValue", " ");
      }
    }
    { const $t15 = (await $.mv((await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "FieldByName", ["cust_type"])), "AsInteger"));
      if ($.eq($t15, 0)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_C")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_C")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Enabled", false);
      }
      else if ($.eq($t15, 1)) {
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_C")), "Checked", true);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_C")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Enabled", false);
      }
      else if ($.eq($t15, 2)) {
        if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Checked")), false))) {
          await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Checked", true);
        } else {
          await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_fs_C")), "Checked", true);
        }
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_jur_C")), "Enabled", false);
        await $.mset((await $.mv((await $.v(C, "FormTransaction4")), "RadioBu_phys_C")), "Enabled", false);
      }
      else if ($.eq($t15, 3)) {
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
      { const $t16 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
        if ($.eq($t16, 0)) {
          { const $t17 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add("and ID like '", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%'")); if ($t17 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t17); } }
        }
        else if ($.eq($t16, 1)) {
          { const $t18 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add("and upper(cust_name) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t18 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t18); } }
        }
        else if ($.eq($t16, 2)) {
          { const $t19 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t19 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t19); } }
        }
        else if ($.eq($t16, 3)) {
          { const $t20 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t20 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t20); } }
        }
        else if ($.eq($t16, 4)) {
          { const $t21 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t21 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t21); } }
        }
      }
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Close", []);
      { const $t22 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS")), "SQL")), [3], ""); if ($t22 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS")), "SQL", $t22); } }
      await $.mcall((await $.v(C, "ODS_CUSTOMERS")), "Open", []);
    }
  }
  if ($.truthy($.in_((await $.v(C, "cust_elaqe_Transaction")), [2, 3, 4]))) {
    if ($.truthy($.ne((await $.call(C, "Length", [(await $.mv((await $.v(C, "EditSearch")), "Text"))])), 0))) {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      { const $t23 = (await $.mv((await $.v(C, "CBSearch")), "ItemIndex"));
        if ($.eq($t23, 0)) {
          { const $t24 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add("and p.ID like ('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t24 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t24); } }
        }
        else if ($.eq($t23, 1)) {
          { const $t25 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add("and upper(p.cust_name) like upper('%", (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t25 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t25); } }
        }
        else if ($.eq($t23, 2)) {
          { const $t26 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t26 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t26); } }
        }
        else if ($.eq($t23, 3)) {
          { const $t27 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t27 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t27); } }
        }
        else if ($.eq($t23, 4)) {
          { const $t28 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], $.add($.add($.add($.add("and upper(", (await $.mv((await $.idx((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "Fields")), [(await $.mv((await $.v(C, "CBSearch")), "ItemIndex"))])), "FieldName"))), ") like upper('%"), (await $.mv((await $.v(C, "EditSearch")), "Text"))), "%')")); if ($t28 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t28); } }
        }
      }
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Open", []);
    } else {
      await $.mcall((await $.v(C, "ODS_CUSTOMERS_tr")), "Close", []);
      { const $t29 = await $.iset((await $.mv((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL")), [3], ""); if ($t29 !== undefined) { await $.mset((await $.v(C, "ODS_CUSTOMERS_tr")), "SQL", $t29); } }
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
  if ($.truthy((await $.and_(($.eq((await $.v(C, "cust_elaqe_Transaction")), 1)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Customers_Phys_FSCUST_TYPE")), "AsInteger")), 1)))))) {
    await $.mset((await $.v(C, "FormCustomers")), "Caption", "Müştərinin əlaqələndirilməsi");
    await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "FormCustomers")), "DS_CUSTOMERS")));
    await $.mcall((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "Close", []);
    { const $t30 = await $.iset((await $.mv((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL")), [4], ""); if ($t30 !== undefined) { await $.mset((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL", $t30); } }
    { const $t31 = await $.iset((await $.mv((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL")), [4], " and cust_type=4"); if ($t31 !== undefined) { await $.mset((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL", $t31); } }
    await $.mcall((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "Open", []);
    await $.mcall((await $.v(C, "CBSearch")), "Clear", []);
    { const $t32 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
      L0["i"] = 0;
      let $t33 = true;
      for (;;) {
        if (!$t33) { L0["i"] = $.succ(L0["i"], 1); }
        $t33 = false;
        if (!($.ord(L0["i"]) <= $.ord($t32))) break;
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
  if ($.truthy((await $.and_(($.eq((await $.v(C, "cust_elaqe_Transaction")), 1)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Customers_Phys_FSCUST_TYPE")), "AsInteger")), 0)))))) {
    await $.mset((await $.v(C, "FormCustomers")), "Caption", "Müştərinin əlaqələndirilməsi");
    await $.mset((await $.v(C, "DBGrid1")), "DataSource", (await $.mv((await $.v(C, "FormCustomers")), "DS_CUSTOMERS")));
    { const $t34 = await $.iset((await $.mv((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL")), [4], ""); if ($t34 !== undefined) { await $.mset((await $.mv((await $.v(C, "FormCustomers")), "ODS_CUSTOMERS")), "SQL", $t34); } }
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
    { const $t37 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
      L0["i"] = 0;
      let $t38 = true;
      for (;;) {
        if (!$t38) { L0["i"] = $.succ(L0["i"], 1); }
        $t38 = false;
        if (!($.ord(L0["i"]) <= $.ord($t37))) break;
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
    { const $t39 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
      L0["i"] = 0;
      let $t40 = true;
      for (;;) {
        if (!$t40) { L0["i"] = $.succ(L0["i"], 1); }
        $t40 = false;
        if (!($.ord(L0["i"]) <= $.ord($t39))) break;
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
    { const $t41 = $.sub((await $.mv((await $.mv((await $.v(C, "DBGrid1")), "Columns")), "Count")), 1);
      L0["i"] = 0;
      let $t42 = true;
      for (;;) {
        if (!$t42) { L0["i"] = $.succ(L0["i"], 1); }
        $t42 = false;
        if (!($.ord(L0["i"]) <= $.ord($t41))) break;
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
  L0["custid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["id"])), "AsInteger"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallProcedure", ["add_cust_relations", [L0["custid"], L0["custid2"]]])));
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Pozition")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "refresh", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "Locate", ["id", L0["custid"], []])));
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
