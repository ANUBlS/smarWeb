// Generated from SBCustomer.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("SBCustomer", ["Windows", "Dialogs", "sboapiDataModuleImpl", "SysUtils", "Classes", "SBCore", "SBSrvIntf"]);
  const C = [U];
  $.defRecord("tcustomer", {"operatorid": () => 0, "name": () => '', "shortname": () => '', "opendate": () => 0, "closedate": () => 0, "isresident": () => false, "relationid": () => 0, "groupid": () => 0, "estatetype": () => 0, "organizationtype": () => 0, "actionarea": () => 0, "branchid": () => 0, "taxareaid": () => 0, "taxidstring": () => '', "bankidstring": () => '', "okpro": () => '', "govofficer": () => '', "taxdepartmentregdate": () => null, "capitalregdate": () => null, "incorporation_number": () => '', "tph_contact_type": () => '', "tph_communication_type": () => '', "tph_number": () => '', "address_type": () => '', "address": () => '', "city": () => '', "country_code": () => '', "email": () => '', "url": () => '', "incorporation_state": () => '', "incorporation_cntr": () => '', "tph_extension": () => '', "tph_zip": () => '', "tph_country_prefix": () => '', "tph_state": () => '', "risk_categ": () => 0, "riskdescid": () => 0, "samelydate": () => null, "quality_id": () => null});
  $.defRecord("tcustomerinfo", {"name": () => '', "lastname": () => '', "surname": () => '', "birthdate": () => 0, "birthplace": () => '', "address": () => '', "city": () => '', "country": () => '', "workplace": () => '', "phonework": () => '', "phonehome": () => '', "phonecelular": () => '', "passer": () => '', "paspnum": () => '', "paspdate": () => 0, "paspplace": () => '', "garanted": () => '', "otv_passport": () => '', "otv_issued": () => '', "otv_isdate": () => '', "note": () => '', "work": () => '', "test": () => '', "fam_status": () => 0, "sex": () => 0, "adrs_state": () => '', "birth_state": () => '', "fakt_adress": () => '', "child_info": () => '', "doc_type": () => 0, "passpin": () => '', "citizenship": () => 0, "passexpire": () => 0, "reg_zip": () => '', "doc_country": () => 0, "citizenship2": () => 0, "citizenship3": () => 0, "fakt_country": () => 0, "fakt_city": () => 0, "fakt_zip": () => '', "work_place": () => '', "work_post": () => '', "work_adress": () => '', "work_phone": () => '', "tph_contact_type": () => '', "tph_country": () => 0, "tph_country_code": () => '', "tph_city": () => 0, "tph_state": () => '', "tph_zip": () => '', "tph_country_prefix": () => 0, "tph_adress": () => '', "tph_communication_type": () => '', "tph_number": () => '', "tph_extension": () => '', "contact_type": () => '', "email": () => '', "url": () => '', "sign": () => null, "photo": () => null, "recomendation": () => ''});
  U.init(async () => {
  });
  U.func("Sb_GetCustomer", async function Sb_GetCustomer(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), "customer": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["id"]);
  {
    const $t1 = (await $.mv((await $.v(C, "sboapiDataModule")), "GetCustomer"));
    await $.stmt($.wcall([$t1], "Close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["CustomerID", (await $.wv([$t1], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
    {
      const $t2 = (await $.wv([$t1], "Customer", { get: async () => await L0["customer"].get(), set: async (v) => { await L0["customer"].set(v); }, local: true }, false));
      await $.wset([$t1, $t2], "Name", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["NAME"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "OpenDate", (await $.wcall([$t1, $t2], "Trunc", [(await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OPEN_DAT"], C)), "AsDateTime"))], C)), C);
      await $.wset([$t1, $t2], "CloseDate", (await $.wcall([$t1, $t2], "Trunc", [(await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CLOSE_DAT"], C)), "AsDateTime"))], C)), C);
      await $.wset([$t1, $t2], "IsResident", $.eq((await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["NEREZIDENT"], C)), "AsInteger")), 0), C);
      await $.wset([$t1, $t2], "RelationID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["PRINAD_KOD"], C)), "AsInteger")), C);
      await $.wset([$t1, $t2], "GroupID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["GROUP_KLIE"], C)), "AsInteger")), C);
      await $.wset([$t1, $t2], "EstateType", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["VID_SOB"], C)), "AsInteger")), C);
      await $.wset([$t1, $t2], "OrganizationType", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ORG_SOB"], C)), "AsInteger")), C);
      await $.wset([$t1, $t2], "ActionArea", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["SFERA_DEY"], C)), "AsInteger")), C);
      await $.wset([$t1, $t2], "BranchID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["OTRASL"], C)), "AsInteger")), C);
      await $.wset([$t1, $t2], "TaxAreaID", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["NALOG_KOD"], C)), "AsInteger")), C);
      await $.wset([$t1, $t2], "OKPRO", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["KOD_OKPRO"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "INCORPORATION_NUMBER", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["INCORPORATION_NUMBER"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "TPH_CONTACT_TYPE", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["TPH_CONTACT_TYPE"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "TPH_COMMUNICATION_TYPE", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["TPH_COMMUNICATION_TYPE"], C)), "asString")), C);
      await $.wset([$t1, $t2], "TPH_NUMBER", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["TPH_NUMBER"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "ADDRESS_TYPE", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["ADDRESS_TYPE"], C)), "asString")), C);
      await $.wset([$t1, $t2], "ADDRESS", (await $.mv((await $.wcall([$t1, $t2], "FieldByNAme", ["ADDRESS"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "CITY", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["CITY"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "COUNTRY_CODE", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["COUNTRY_CODE"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "EMAIL", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["EMAIL"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "URL", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["URL"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "INCORPORATION_STATE", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["INCORPORATION_STATE"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "INCORPORATION_CNTR", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["INCORPORATION_CNTR"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "TPH_EXTENSION", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["TPH_EXTENSION"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "TPH_ZIP", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["TPH_ZIP"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "TPH_COUNTRY_PREFIX", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["TPH_COUNTRY_PREFIX"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "TPH_STATE", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["TPH_STATE"], C)), "AsString")), C);
      await $.wset([$t1, $t2], "riskdescid", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["riskdescid"], C)), "AsInteger")), C);
      await $.wset([$t1, $t2], "samelydate", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["SamelyDate"], C)), "AsVariant")), C);
      await $.wset([$t1, $t2], "quality_id", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["quality_id"], C)), "AsVariant")), C);
    }
    await $.stmt($.wcall([$t1], "Close", [], C));
  }
  return L0.result;
}, {"params": ["ID", "Customer"], "kind": "procedure", "ptypes": ["Integer", "TCustomer"]});
  U.func("Sb_AddCustomer", async function Sb_AddCustomer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"customer": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["customer"]);
  {
    const $t3 = (await $.v(C, "sboapiDataModule"));
    const $t4 = (await $.wv([$t3], "Customer", { get: async () => L0["customer"], set: async (v) => { L0["customer"] = v; }, local: true }, false));
    await $.stmt((await $.mcall((await $.wv([$t3, $t4], "SBOperationDay", C, false)), "CallProcedure", [(await $.wv([$t3, $t4], "sPN_AddCustomer", C, false)), ["OP_ID", 0, "OPEN_DAT", (await $.mv((await $.wv([$t3, $t4], "Customer", { get: async () => L0["customer"], set: async (v) => { L0["customer"] = v; }, local: true }, false)), "OpenDate")), "NAME", (await $.mv((await $.wv([$t3, $t4], "Customer", { get: async () => L0["customer"], set: async (v) => { L0["customer"] = v; }, local: true }, false)), "Name")), "CLOSE_DAT", (await $.wv([$t3, $t4], "NullDate", C, false)), "NEREZIDENT", (await $.wcall([$t3, $t4], "Integer", [(await $.wv([$t3, $t4], "IsResident", C, false))], C)), "PRINAD_KOD", (await $.wv([$t3, $t4], "RelationID", C, false)), "SHORT_NAME", (await $.wv([$t3, $t4], "ShortName", C, false)), "GROUP_KLIE", (await $.wv([$t3, $t4], "GroupID", C, false)), "VID_SOB", (await $.wv([$t3, $t4], "EstateType", C, false)), "ORG_SOB", (await $.wv([$t3, $t4], "OrganizationType", C, false)), "SFERA_DEY", (await $.wv([$t3, $t4], "ActionArea", C, false)), "OTRASL", (await $.wv([$t3, $t4], "BranchID", C, false)), "NALOG_KOD", (await $.wv([$t3, $t4], "TaxAreaID", C, false)), "INN", (await $.wv([$t3, $t4], "TaxIDString", C, false)), "BIK", (await $.wv([$t3, $t4], "BankIDString", C, false)), "KOD_OKPRO", (await $.wv([$t3, $t4], "OKPRO", C, false)), "DAT_NAL", (await $.wv([$t3, $t4], "TaxDepartmentRegDate", C, false)), "DAT_USTAV", (await $.wv([$t3, $t4], "CapitalRegDate", C, false)), "v_INCORP_NUM", (await $.wv([$t3, $t4], "INCORPORATION_NUMBER", C, false)), "v_TPH_CONTACT_TYPE", (await $.wv([$t3, $t4], "TPH_CONTACT_TYPE", C, false)), "v_TPH_COMMUNICATION_TYPE", (await $.wv([$t3, $t4], "TPH_COMMUNICATION_TYPE", C, false)), "v_TPH_NUMBER", (await $.wv([$t3, $t4], "TPH_NUMBER", C, false)), "v_ADDRESS_TYPE", (await $.wv([$t3, $t4], "ADDRESS_TYPE", C, false)), "v_ADDRESS", (await $.wv([$t3, $t4], "ADDRESS", C, false)), "v_CITY", (await $.wv([$t3, $t4], "CITY", C, false)), "v_COUNTRY_CODE", (await $.wv([$t3, $t4], "COUNTRY_CODE", C, false)), "v_EMAIL", (await $.wv([$t3, $t4], "EMAIL", C, false)), "v_URL", (await $.wv([$t3, $t4], "URL", C, false)), "v_INCORPORATION_STATE", (await $.wv([$t3, $t4], "INCORPORATION_STATE", C, false)), "v_INCORPORATION_CNTR", (await $.wv([$t3, $t4], "INCORPORATION_CNTR", C, false)), "v_TPH_EXTENSION", (await $.wv([$t3, $t4], "TPH_EXTENSION", C, false)), "v_TPH_ZIP", (await $.wv([$t3, $t4], "TPH_ZIP", C, false)), "v_TPH_COUNTRY_PREFIX", (await $.wv([$t3, $t4], "TPH_COUNTRY_PREFIX", C, false)), "v_TPH_STATE", (await $.wv([$t3, $t4], "TPH_STATE", C, false)), "v_risk_categ", (await $.wv([$t3, $t4], "risk_categ", C, false)), "v_riskdescid", (await $.wv([$t3, $t4], "riskdescid", C, false)), "v_samelydate", (await $.wv([$t3, $t4], "samelydate", C, false)), "v_quality_id", (await $.wv([$t3, $t4], "quality_id", C, false))]])));
  }
  L0["result"] = (-(1));
  return L0.result;
}, {"params": ["Customer"], "kind": "function", "ptypes": ["TCustomer"]});
  U.func("Sb_CloseCustomer", async function Sb_CloseCustomer(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["id"]);
  {
    const $t5 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBOperationDay"));
    await $.stmt((await $.wcall([$t5], "CallProcedure", [(await $.wv([$t5], "sPN_CloseCustomer", C, false)), ["v_ID", (await $.wv([$t5], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), "CURRENTDATE", (await $.wcall([$t5], "Sb_GetSystemDate", [], C)), "RESULT", 0]], C)));
  }
  return L0.result;
}, {"params": ["ID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.func("Sb_EditCustomer", async function Sb_EditCustomer(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), "customer": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["id", "customer"]);
  {
    const $t6 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBOperationDay"));
    const $t7 = (await $.wv([$t6], "Customer", { get: async () => L0["customer"], set: async (v) => { L0["customer"] = v; }, local: true }, false));
    await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", [(await $.wv([$t6, $t7], "sPN_UpdateCustomer", C, false)), ["v_ID", (await $.wv([$t6, $t7], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false)), "v_OP_ID", 0, "v_OPEN_DAT", (await $.mv((await $.wv([$t6, $t7], "Customer", { get: async () => L0["customer"], set: async (v) => { L0["customer"] = v; }, local: true }, false)), "OpenDate")), "v_NAME", (await $.mv((await $.wv([$t6, $t7], "Customer", { get: async () => L0["customer"], set: async (v) => { L0["customer"] = v; }, local: true }, false)), "Name")), "v_CLOSE_DAT", (await $.wv([$t6, $t7], "NullDate", C, false)), "v_NEREZIDENT", (await $.wcall([$t6, $t7], "Integer", [(await $.wv([$t6, $t7], "IsResident", C, false))], C)), "v_PRINAD_KOD", (await $.wv([$t6, $t7], "RelationID", C, false)), "v_SHORT_NAME", (await $.wv([$t6, $t7], "ShortName", C, false)), "v_GROUP_KLIE", (await $.wv([$t6, $t7], "GroupID", C, false)), "v_VID_SOB", (await $.wv([$t6, $t7], "EstateType", C, false)), "v_ORG_SOB", (await $.wv([$t6, $t7], "OrganizationType", C, false)), "v_SFERA_DEY", (await $.wv([$t6, $t7], "ActionArea", C, false)), "v_OTRASL", (await $.wv([$t6, $t7], "BranchID", C, false)), "v_NALOG_KOD", (await $.wv([$t6, $t7], "TaxAreaID", C, false)), "v_INN", (await $.wv([$t6, $t7], "TaxIDString", C, false)), "v_BIK", (await $.wv([$t6, $t7], "BankIDString", C, false)), "v_KOD_OKPRO", (await $.wv([$t6, $t7], "OKPRO", C, false)), "v_DAT_NAL", (await $.wv([$t6, $t7], "TaxDepartmentRegDate", C, false)), "v_DAT_USTAV", (await $.wv([$t6, $t7], "CapitalRegDate", C, false)), "v_INCORP_NUM", (await $.wv([$t6, $t7], "INCORPORATION_NUMBER", C, false)), "v_TPH_CONTACT_TYPE", (await $.wv([$t6, $t7], "TPH_CONTACT_TYPE", C, false)), "v_TPH_COMMUNICATION_TYPE", (await $.wv([$t6, $t7], "TPH_COMMUNICATION_TYPE", C, false)), "v_TPH_NUMBER", (await $.wv([$t6, $t7], "TPH_NUMBER", C, false)), "v_ADDRESS_TYPE", (await $.wv([$t6, $t7], "ADDRESS_TYPE", C, false)), "v_ADDRESS", (await $.wv([$t6, $t7], "ADDRESS", C, false)), "v_CITY", (await $.wv([$t6, $t7], "CITY", C, false)), "v_COUNTRY_CODE", (await $.wv([$t6, $t7], "COUNTRY_CODE", C, false)), "v_EMAIL", (await $.wv([$t6, $t7], "EMAIL", C, false)), "v_URL", (await $.wv([$t6, $t7], "URL", C, false)), "v_INCORPORATION_STATE", (await $.wv([$t6, $t7], "INCORPORATION_STATE", C, false)), "v_INCORPORATION_CNTR", (await $.wv([$t6, $t7], "INCORPORATION_CNTR", C, false)), "v_TPH_EXTENSION", (await $.wv([$t6, $t7], "TPH_EXTENSION", C, false)), "v_TPH_ZIP", (await $.wv([$t6, $t7], "TPH_ZIP", C, false)), "v_TPH_COUNTRY_PREFIX", (await $.wv([$t6, $t7], "TPH_COUNTRY_PREFIX", C, false)), "v_TPH_STATE", (await $.wv([$t6, $t7], "TPH_STATE", C, false)), "v_risk_categ", (await $.wv([$t6, $t7], "risk_categ", C, false)), "v_riskdescid", (await $.wv([$t6, $t7], "riskdescid", C, false)), "v_samelydate", (await $.wv([$t6, $t7], "samelydate", C, false)), "v_quality_id", (await $.wv([$t6, $t7], "quality_id", C, false))]], C)));
  }
  return L0.result;
}, {"params": ["ID", "Customer"], "kind": "procedure", "ptypes": ["Integer", "TCustomer"]});
  U.func("Sb_AddCustomerInfo", async function Sb_AddCustomerInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"customerid": $.copyArg(p0), "info": $.copyArg(p1), result: 0};
  await $.fixArgs(L0, ["customerid", "info"]);
  {
    const $t8 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBReferences"));
    const $t9 = (await $.wv([$t8], "Info", { get: async () => L0["info"], set: async (v) => { L0["info"] = v; }, local: true }, false));
    await $.wset([$t8, $t9], "Result", (await $.wcall([$t8, $t9], "CallIntegerFunction", ["add_custinfo", ["v_idcust", (await $.wv([$t8, $t9], "CustomerID", { get: async () => L0["customerid"], set: async (v) => { L0["customerid"] = v; }, local: true }, false)), "v_soname", (await $.wv([$t8, $t9], "SurName", C, false)), "v_name", (await $.wv([$t8, $t9], "Name", C, false)), "v_lastname", (await $.wv([$t8, $t9], "LastName", C, false)), "v_birthday", (await $.wv([$t8, $t9], "BirthDate", C, false)), "v_birthplace", (await $.wv([$t8, $t9], "BirthPlace", C, false)), "v_city", (await $.wv([$t8, $t9], "City", C, false)), "v_address", (await $.wv([$t8, $t9], "Address", C, false)), "v_workplace", (await $.wv([$t8, $t9], "WorkPlace", C, false)), "v_phone_w", (await $.wv([$t8, $t9], "PhoneWork", C, false)), "v_phone_h", (await $.wv([$t8, $t9], "PhoneHome", C, false)), "v_phone_m", (await $.wv([$t8, $t9], "PhoneCelular", C, false)), "v_e_mail", (await $.wv([$t8, $t9], "EMail", C, false)), "v_url", (await $.wv([$t8, $t9], "Url", C, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["CustomerID", "Info"], "kind": "function", "ptypes": ["Integer", "TCustomerInfo"]});
  U.func("Sb_EditCustomerInfo", async function Sb_EditCustomerInfo(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), "info": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["id", "info"]);
  return L0.result;
}, {"params": ["ID", "Info"], "kind": "procedure", "ptypes": ["Integer", "TCustomerInfo"]});
  U.func("Sb_DropCustomerInfo", async function Sb_DropCustomerInfo(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: 0};
  await $.fixArgs(L0, ["id"]);
  {
    const $t10 = (await $.mv((await $.v(C, "sboapiDataModule")), "SBReferences"));
    await $.wset([$t10], "Result", (await $.wcall([$t10], "CallIntegerFunction", ["del_custinfo", ["v_ID", (await $.wv([$t10], "ID", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))]], C)), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
  }
  return L0.result;
}, {"params": ["ID"], "kind": "function", "ptypes": ["Integer"]});
  return U;
}
