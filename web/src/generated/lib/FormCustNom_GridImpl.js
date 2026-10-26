// Generated from FormCustNom_GridImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormCustNom_GridImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "XFSCtrls", "ExtCtrls", "DataCustNomImpl", "FormCustNomImpl", "OpenAccountImpl", "addcombobox1"]);
  const C = [U];
  U.defClass("TFormCustGrid", "TForm", {"maingrid": {"name": "MainGrid", "type": "TXDBGrid"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("FormCustGrid", null, "TFormCustGrid");
  });
  U.func("GetPath", async function GetPath(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "imagespath": ''};
  L0["imagespath"] = (await $.call(C, "Format", ["%s\\..\\Env\\Customers", [(await $.call(C, "ExtractFilePath", [(await $.call(C, "ParamStr", [0]))]))]]));
  await $.set(C, "Path", (await $.call(C, "Format", ["%s\\temp.jpg", [L0["imagespath"]]])));
  await $.set(C, "Path_B", (await $.call(C, "Format", ["%s\\blank.jpg", [L0["imagespath"]]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Fill_Edit", async function Fill_Edit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "f": null};
  await $.stmt($.call(C, "GetPath", []));
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "DScustimageStamp")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DScustimageStamp")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t1) => { L0["f"] = $t1; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t2) => { L0["f"] = $t2; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t3) => { L0["f"] = $t3; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t4) => { L0["f"] = $t4; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image2")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "DScustimageCUSTSIGN")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DScustimageCUSTSIGN")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t5) => { L0["f"] = $t5; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t6) => { L0["f"] = $t6; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t7) => { L0["f"] = $t7; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t8) => { L0["f"] = $t8; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image1")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  if ($.truthy(((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "DScustimagePhoto")), "IsNull"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
  } else {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataCustNom")), "DScustimagephoto")), "SaveToFile", [(await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "AssignFile", [$.ref(async () => L0["f"], async ($t9) => { L0["f"] = $t9; }), (await $.v(C, "Path"))])));
    await $.stmt((await $.call(C, "Reset", [$.ref(async () => L0["f"], async ($t10) => { L0["f"] = $t10; })])));
    if ($.truthy($.gt((await $.call(C, "FileSize", [L0["f"]])), 0))) {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t11) => { L0["f"] = $t11; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path"))])));
    } else {
      await $.stmt((await $.call(C, "CloseFile", [$.ref(async () => L0["f"], async ($t12) => { L0["f"] = $t12; })])));
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FormCustNom")), "Image3")), "Picture")), "LoadFromFile", [(await $.v(C, "Path_B"))])));
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormCustGrid", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "DataCustNom")), "DScustimage"));
    await $.stmt($.wcall([$t13], "close", [], C));
    await $.stmt((await $.wcall([$t13], "SetVariable", ["cust_id", (await $.mv((await $.mv((await $.wv([$t13], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FSIDCUSTINFO")), "AsInteger"))], C)));
    await $.stmt($.wcall([$t13], "Open", [], C));
  }
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS")), "Active")))) {
    {
      const $t14 = (await $.mv((await $.v(C, "DataCustNom")), "ODS_CUSTOMERS_PHYS_FS"));
      if ($.truthy($.gt((await $.wv([$t14], "RecordCount", C, false)), 0))) {
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditID")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["ID"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditFirstName")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["FirstName"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditPatronymic")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["Patronymic"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditLastName")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["LastName"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Edit10")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["CUST_NAME"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditPINCode")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["passPIN"], C)), "AsString")));
        { const $t15 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["Nerezident"])), "AsInteger"));
          if ($.eq($t15, 0)) {
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "RBtnNoResident")), "Checked", (await $.wv([$t14], "True", C, false)));
          }
          else if ($.eq($t15, 1)) {
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "RBtnResident")), "Checked", (await $.wv([$t14], "True", C, false)));
          }
        }
        { const $t16 = (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["CUST_type"])), "AsInteger"));
          if ($.eq($t16, 1)) {
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "XFRadioGroupCust_type")), "ItemIndex", 0);
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "BtnCust")), "Enabled", (await $.wv([$t14], "false", C, false)));
          }
          else if ($.eq($t16, 2)) {
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "XFRadioGroupCust_type")), "ItemIndex", 1);
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "BtnCust")), "Enabled", (await $.wv([$t14], "false", C, false)));
          }
          else if ($.eq($t16, 4)) {
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "XFRadioGroupCust_type")), "ItemIndex", 2);
          }
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship"])), "isNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxCitizenship")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship"])), "AsString")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxCitizenship")), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["sex"])), "isNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxGender")), "ItemIndex", (await $.wcall([$t14], "combobox_open", [(await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "OdsGender")), (await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxGender")), "sex", "ID", "name"], C)));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxGender")), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fam_status"])), "isNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxFamStatus")), "ItemIndex", (await $.wcall([$t14], "combobox_open", [(await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "OdsFamstatus")), (await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxFamStatus")), "fam_status", "ID", "name"], C)));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxFamStatus")), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["group_klie"])), "isNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxGroup")), "ItemIndex", (await $.wcall([$t14], "combobox_open", [(await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ClientGroupData")), (await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxGroup")), "group_klie", "ID", "name"], C)));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxGroup")), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["vid_sob"])), "isNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBox")), "ItemIndex", (await $.wcall([$t14], "combobox_open", [(await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "EstateTypeData")), (await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBox")), "vid_sob", "ID", "name"], C)));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBox")), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["prinad_kod"])), "isNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "ComboBox3")), "ItemIndex", (await $.wcall([$t14], "combobox_open", [(await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "RelationData")), (await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "ComboBox3")), "prinad_kod", "ID", "name"], C)));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "ComboBox3")), "ItemIndex", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["DOC_TYPE"])), "isNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxDocType")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["DOC_TYPE"])), "AsInteger")));
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxDocType1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["DOC_TYPE"])), "AsInteger")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxDocType")), "KeyValue", (-(1)));
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxDocType1")), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["doc_country"])), "IsNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "issue_country")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["doc_country"])), "AsString")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "issue_country")), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["cust_risk_categ"])), "isnull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "ComboBox_risk")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["cust_risk_categ"])), "AsInteger")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "ComboBox_risk")), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["riskdescid"])), "isnull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Comb_riskdescid")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_Customers_Phys_FS")), "FieldByName", ["riskdescid"])), "AsInteger")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Comb_riskdescid")), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship2"])), "IsNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DBCBox_Citizenship2")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship2"])), "AsString")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DBCBox_Citizenship2")), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship3"])), "IsNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DBCBox_Citizenship3")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["citizenship3"])), "AsString")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DBCBox_Citizenship3")), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_country"])), "IsNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Fakt_Adrs_State")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_country"])), "AsString")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Fakt_Adrs_State")), "KeyValue", (-(1)));
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_city"])), "IsNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Fakt_Adrs_City")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["fakt_city"])), "AsString")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Fakt_Adrs_City")), "KeyValue", (-(1)));
        }
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "ZipFakt")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["fakt_zip"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Work_Place")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["work_place"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Work_Post")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["work_post"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Work_Address")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["work_adress"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Work_Phone")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["work_phone"], C)), "AsString")));
        { const $t17 = (await $.mv((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "XFRadioGroupCust_type")), "ItemIndex"));
          if ($.eq($t17, 0) || $.eq($t17, 1) || $.eq($t17, 2)) {
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_contact_type"])), "IsNull"))))) {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "tph_contact_type")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "tph_contact_type")), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country"])), "IsNull"))))) {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CountryByConctType")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country"])), "AsString")));
            } else {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CountryByConctType")), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_city"])), "IsNull"))))) {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CityByConctType")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_city"])), "AsString")));
            } else {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CityByConctType")), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country_prefix"])), "IsNull"))))) {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "tph_country_prefix")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_country_prefix"])), "AsString")));
            } else {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "tph_country_prefix")), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_communication_type"])), "IsNull"))))) {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "tph_communication_type")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_tph_communication_type"])), "AsString")));
            } else {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "tph_communication_type")), "KeyValue", (-(1)));
            }
            if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_contact_type"])), "IsNull"))))) {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Address_type")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["info_contact_type"])), "AsString")));
            } else {
              await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Address_type")), "KeyValue", (-(1)));
            }
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "db_tph_state")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["info_tph_state"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DB_tph_zip")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["info_tph_zip"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "db_tph_adress")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["info_tph_adress"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "db_tph_number")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["info_tph_number"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "db_tph_extension")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["info_tph_extension"], C)), "AsString")));
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditEmail")), "Text", (await $.wcall([$t14], "copy", [(await $.mv((await $.wcall([$t14], "FieldByName", ["email"], C)), "AsString")), 0, $.sub((await $.wcall([$t14], "pos", ["@", (await $.mv((await $.wcall([$t14], "FieldByName", ["email"], C)), "AsString"))], C)), 1)], C)));
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Edit1")), "Text", (await $.wcall([$t14], "copy", [(await $.mv((await $.wcall([$t14], "FieldByName", ["email"], C)), "AsString")), $.add((await $.wcall([$t14], "pos", ["@", (await $.mv((await $.wcall([$t14], "FieldByName", ["email"], C)), "AsString"))], C)), 1), (await $.wcall([$t14], "length", [(await $.mv((await $.wcall([$t14], "FieldByName", ["email"], C)), "AsString"))], C))], C)));
            await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Edit_url")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["url"], C)), "AsString")));
          }
        }
        if ($.truthy($.not((await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["sfera_dey"])), "IsNull"))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "ActionAreaCB")), "ItemIndex", (await $.wcall([$t14], "combobox_open", [(await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUSTOMERS_PHYS_FS")), (await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ActionAreaData")), (await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "ActionAreaCB")), "sfera_dey", "id", "name"], C)));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "ActionAreaCB")), "ItemIndex", (-(1)));
        }
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxDocPlace2")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["paspplace"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditShort_name1")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["Short_name"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditDocSerie")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["passport"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditDocNumber")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["passp_number"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "MemoNotes")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["note"], C)), "AsString")));
        if ($.truthy((await $.wcall([$t14], "VarIsNull", [(await $.mv((await $.wcall([$t14], "FieldByName", ["paspdate"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DTPickerDocDate")), "text", "");
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DTPickerDocDate")), "Value", (await $.mv((await $.wcall([$t14], "FieldByName", ["paspdate"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t14], "VarIsNull", [(await $.mv((await $.wcall([$t14], "FieldByName", ["passexpire"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DTPickerDocExpiryDate")), "text", "");
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DTPickerDocExpiryDate")), "Value", (await $.mv((await $.wcall([$t14], "FieldByName", ["passexpire"], C)), "AsVariant")));
        }
        if ($.truthy((await $.wcall([$t14], "VarIsNull", [(await $.mv((await $.wcall([$t14], "FieldByName", ["birthdate"], C)), "AsVariant"))], C)))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DTPickerBirthDate")), "text", "");
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DTPickerBirthDate")), "Value", (await $.mv((await $.wcall([$t14], "FieldByName", ["birthdate"], C)), "AsVariant")));
        }
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxBirthState")), "KeyValue", (await $.mv((await $.wcall([$t14], "FieldByName", ["birthplace"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxBirthCity")), "KeyValue", (await $.mv((await $.wcall([$t14], "FieldByName", ["BIRTH_STATE"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxAddressState")), "KeyValue", (await $.mv((await $.wcall([$t14], "FieldByName", ["adrs_state"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "CBoxAddressCity")), "KeyValue", (await $.mv((await $.wcall([$t14], "FieldByName", ["adrs_city"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditAddress")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["adress"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditAddressFactical")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["fakt_adress"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditPhoneMob")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["PHONE_MOB"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "EditPhoneCity")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["phone"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Edit_activity")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["activity"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Edit_profession")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["profession"], C)), "AsString")));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "Edit_source_of_income")), "Text", (await $.mv((await $.wcall([$t14], "FieldByName", ["source_of_income"], C)), "AsString")));
        await $.stmt($.wcall([$t14], "Fill_Edit", [], C));
        await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DateTi_samelydate")), "Value", (await $.mv((await $.wcall([$t14], "FieldByName", ["SAMELYDATE"], C)), "AsDateTime")));
        await $.wset([$t14], "risk_descPERIOD", (await $.mv((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_CUST_RISK_DESCDATE_PERIOD")), "AsInteger")), C);
        if ($.truthy($.not(((await $.mv((await $.wcall([$t14], "FieldByName", ["SAMELYDATE"], C)), "isNUll")))))) {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DateTi_samelydate")), "Value", (await $.mv((await $.wcall([$t14], "FieldByName", ["SAMELYDATE"], C)), "AsDateTime")));
        } else {
          await $.mset((await $.mv((await $.wv([$t14], "FormCustNom", C, false)), "DateTi_samelydate")), "Value", (await $.wv([$t14], "null", C, false)));
        }
        await $.mset((await $.wv([$t14], "OpenAccount", C, false)), "retrun_custid", (await $.mv((await $.mv((await $.wv([$t14], "DataCustNom", C, false)), "ODS_Customers_Phys_FSID")), "AsInteger")));
      }
      await $.mcall((await $.wv([$t14], "FormCustGrid", C, false)), "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormCustGrid", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "FormCustGrid")), "MainGridDblClick", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
