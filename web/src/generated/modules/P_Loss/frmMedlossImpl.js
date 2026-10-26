// Generated from frmMedlossImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmMedlossImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "db", "oracle", "CurrencyEdit", "Buttons", "CMCurrencyEdit", "DmLossImpl", "FrmMainLossImpl", "CommanParametrs", "frmstatusimpl"]);
  const C = [U];
  U.defClass("TfrmMedloss", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "currencyedit3": {"name": "CurrencyEdit3", "type": "TCurrencyEdit"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel35": {"name": "XFLabel35", "type": "TXFLabel"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "xfspeedbutton1": {"name": "XFSpeedButton1", "type": "TXFSpeedButton"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "xflabel36": {"name": "XFLabel36", "type": "TXFLabel"}, "xflabel37": {"name": "XFLabel37", "type": "TXFLabel"}, "xflabel38": {"name": "XFLabel38", "type": "TXFLabel"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "xfgroupbox7": {"name": "XFGroupBox7", "type": "TXFGroupBox"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}, "xfradiogroup2": {"name": "XFRadioGroup2", "type": "TXFRadioGroup"}, "sub_id": {"name": "sub_id", "type": "integer"}, "sub_id1": {"name": "sub_id1", "type": "integer"}, "ptype": {"name": "ptype", "type": "integer"}, "yuktesdiq": {"name": "yuktesdiq", "type": "integer"}, "inmtina_dat": {"name": "inmtina_dat", "type": "Tdatetime"}}, {});
  U.init(async () => {
    U.var_("frmMedloss", null, "TfrmMedloss");
    U.var_("sub_id", 0, "integer");
  });
  U.method("TfrmMedloss", "CurrencyEdit1Change", async function CurrencyEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.mv((await $.v(C, "CurrencyEdit1")), "Text")), "")))) {
    await $.mset((await $.v(C, "CurrencyEdit1")), "Value", 0);
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "CurrencyEdit2")), "Text")), "")))) {
    await $.mset((await $.v(C, "CurrencyEdit2")), "Value", 0);
  }
  if ($.truthy(($.eq((await $.mv((await $.v(C, "CurrencyEdit3")), "Text")), "")))) {
    await $.mset((await $.v(C, "CurrencyEdit3")), "Value", 0);
  }
  await $.mset((await $.v(C, "DBEdit6")), "Text", (await $.call(C, "floattostr", [$.add($.add((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value"))), (await $.mv((await $.v(C, "CurrencyEdit3")), "Value")))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMedloss", "DBEdit3Change", async function DBEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBEdit6")), "Text", (await $.call(C, "floattostr", [$.add($.add((await $.mv((await $.v(C, "CurrencyEdit1")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit3")), "Value"))), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value")))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMedloss", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmMedloss", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "yuktesdiq", 0);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "XFButton1")), "Enabled", false);
  }
  if ($.truthy((await $.and_(($.eq((await $.v(C, "lossoperatin")), 1)), async () => ($.ne((await $.v(C, "lossstatus")), 1)))))) {
    await $.mset((await $.v(C, "XFGroupBox1")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFGroupBox1")), "Visible", false);
  }
  if ($.truthy($.eq((await $.v(C, "lossstatus")), 1))) {
    await $.mset((await $.v(C, "XFGroupBox8")), "Visible", true);
  } else {
    await $.mset((await $.v(C, "XFGroupBox8")), "Visible", false);
  }
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSEmploes")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSEmploes")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSEmploes")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Insert"))) {
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    await $.mset((await $.v(C, "CurrencyEdit1")), "Value", 0);
    await $.mset((await $.v(C, "CurrencyEdit2")), "Value", 0);
    await $.mset((await $.v(C, "CurrencyEdit3")), "Value", 0);
    await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", (-(1)));
    await $.mset((await $.v(C, "XFRadioGroup2")), "ItemIndex", (-(1)));
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Edit"))) {
    await $.mset((await $.v(C, "CurrencyEdit1")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaimmed")), "FieldByName", ["AMOUNT_MEDICAL_SERVICES"])), "AsFloat")));
    await $.mset((await $.v(C, "CurrencyEdit3")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaimmed")), "FieldByName", ["AMOUNT_MEDICINE_USED"])), "AsFloat")));
    await $.mset((await $.v(C, "CurrencyEdit2")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaimmed")), "FieldByName", ["AMOUNT_SERVICE_STOMOTALOJI"])), "AsFloat")));
    await $.mset((await $.v(C, "dateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["CLAIM_DATE"])), "AsDateTime")));
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["REFUSAL_DATE"])), "AsString")), ""))) {
      await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["REFUSAL_DATE"])), "AsDateTime")));
    } else {
      await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    }
    await $.mset((await $.mv((await $.v(C, "frmMedloss")), "XFRadioGroup1")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["subraqasiya"])), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "frmMedloss")), "XFRadioGroup2")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["subraqasiya1"])), "AsInteger")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["claim_status"])), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "XFRadioButton2")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMedloss", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "td": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), (await $.mv((await $.v(C, "XFRadioGroup2")), "ItemIndex"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Subroqasiya hüququ sahesi eyni olmalidi!..."])));
    $.abort();
  }
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    $.abort();
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["state"])), "AsInteger")), 6))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Yalnız Təsdiq olunmuş müqavilənin  zərəri redaktə etmək olar!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Müayinə sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət!A.S.A sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Tibb müəssəsi sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "lossoperatin")), 1))) {
    await $.set(C, "losstesdiq", 0);
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Zərər № sahəsi boşdur!"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit6")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Yekun zərər məbləğı sahəsi boşdur!"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Sığorta ödənişinin məbləği sahəsi boşdur!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.call(C, "showmessage", ["Subroqasiya hüququ sahesi secilmeyib  !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "lossstatus")), 1))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "XFRadioGroup2")), "ItemIndex")), (await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Subroqasiya hüququ sahesi eyni olmalidi  !"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit4")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! İmtina məbləği sahəsi boşdur."])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! İmtina səbəbi sahəsi boşdur."])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), true))) {
    L0["td"] = 1;
  } else {
    L0["td"] = 0;
  }
  await $.set(C, "sub_id", 0);
  { const $t1 = (await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex"));
    if ($.eq($t1, 0)) {
      await $.set(C, "sub_id", 0);
    }
    else if ($.eq($t1, 1)) {
      await $.set(C, "sub_id", 1);
    }
  }
  { const $t2 = (await $.mv((await $.v(C, "XFRadioGroup2")), "ItemIndex"));
    if ($.eq($t2, 0)) {
      await $.set(C, "sub_id1", 0);
    }
    else if ($.eq($t2, 1)) {
      await $.set(C, "sub_id1", 1);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    await $.set(C, "ptype", 1);
  } else {
    await $.set(C, "ptype", 0);
  }
  if ($.truthy($.eq((await $.v(C, "lossstatus")), 1))) {
    await $.set(C, "inmtina_dat", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")));
  } else {
    await $.set(C, "inmtina_dat", (await $.call(C, "strtodate", ["30.12.1899"])));
  }
  {
    const $t3 = (await $.v(C, "DmLoss"));
    const $t4 = (await $.wv([$t3], "ODSClaimDescription", C, false));
    if ($.truthy($.in_((await $.wv([$t3, $t4], "State", C, false)), [(await $.wv([$t3, $t4], "dsEdit", C, false)), (await $.wv([$t3, $t4], "dsInsert", C, false))]))) {
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionMK_ID", C, false)), "Value", (await $.mv((await $.wv([$t3, $t4], "ODSMotorKaskoID", C, false)), "Value")));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionCID", C, false)), "Value", (await $.wv([$t3, $t4], "contactid", C, false)));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionCLAIM_DATE", C, false)), "Value", (await $.mv((await $.wv([$t3, $t4], "DateTimePicker1", C, false)), "DateTime")));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionREFUSAL_DATE", C, false)), "Value", (await $.mv((await $.wv([$t3, $t4], "DateTimePicker2", C, false)), "DateTime")));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionSUBRAQASIYA", C, false)), "Value", (await $.wv([$t3, $t4], "sub_id", C, false)));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionSUBRAQASIYA1", C, false)), "Value", (await $.wv([$t3, $t4], "sub_id1", C, false)));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionCLAIM_STATUS", C, false)), "Value", (await $.wv([$t3, $t4], "ptype", C, false)));
      await $.stmt($.wcall([$t3, $t4], "Post", [], C));
      await $.mcall((await $.mv((await $.wv([$t3, $t4], "DmLoss", C, false)), "ODSClaimDescription")), "RefreshRecord", []);
      await $.mset((await $.wv([$t3, $t4], "FrmMainLoss", C, false)), "dep_id", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["id"], C)), "asinteger")));
    }
    {
      const $t5 = (await $.wv([$t3, $t4], "DSclaimmed", C, false));
      await $.mset((await $.mcall((await $.wv([$t3, $t4, $t5], "DSclaimmed", C, false)), "FieldByName", ["DEP_ID"])), "AsInteger", (await $.mv((await $.wv([$t3, $t4, $t5], "FrmMainLoss", C, false)), "dep_id")));
      await $.mset((await $.mcall((await $.wv([$t3, $t4, $t5], "DSclaimmed", C, false)), "FieldByName", ["cid"])), "AsInteger", (await $.wv([$t3, $t4, $t5], "contactid", C, false)));
      await $.mset((await $.mcall((await $.wv([$t3, $t4, $t5], "DSclaimmed", C, false)), "FieldByName", ["AMOUNT_MEDICAL_SERVICES"])), "AsFloat", (await $.mv((await $.wv([$t3, $t4, $t5], "CurrencyEdit1", C, false)), "Value")));
      await $.mset((await $.mcall((await $.wv([$t3, $t4, $t5], "DSclaimmed", C, false)), "FieldByName", ["AMOUNT_MEDICINE_USED"])), "AsFloat", (await $.mv((await $.wv([$t3, $t4, $t5], "CurrencyEdit3", C, false)), "Value")));
      await $.mset((await $.mcall((await $.wv([$t3, $t4, $t5], "DSclaimmed", C, false)), "FieldByName", ["AMOUNT_SERVICE_STOMOTALOJI"])), "AsFloat", (await $.mv((await $.wv([$t3, $t4, $t5], "CurrencyEdit2", C, false)), "Value")));
      await $.mset((await $.mcall((await $.wv([$t3, $t4, $t5], "DSclaimmed", C, false)), "FieldByName", ["PROVISION"])), "AsInteger", (await $.wv([$t3, $t4, $t5], "td", { get: async () => L0["td"], set: async (v) => { L0["td"] = v; }, local: true }, false)));
      await $.mcall((await $.wv([$t3, $t4, $t5], "DSclaimmed", C, false)), "Post", []);
      await $.mcall((await $.wv([$t3, $t4, $t5], "DSclaimmed", C, false)), "RefreshRecord", []);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked")), true))) {
    await $.mset((await $.v(C, "frmstatus")), "Tesdiq", 1);
    await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Color", (await $.v(C, "clGray")));
    await $.mset((await $.v(C, "frmstatus")), "Tesdiqdat", (await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "DateTimePicker4")), "DateTime")));
  } else {
    await $.mset((await $.v(C, "frmstatus")), "Tesdiq", 0);
    await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "frmstatus")), "Tesdiqdat", (await $.call(C, "strtodate", ["30.12.1899"])));
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "frmstatus")), "XFRadioButton2")), "Checked")), false))) {
    if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "frmstatus")), "Tesdiq")), 1)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked")), true)))), async () => ($.ne((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Insert")))))) {
    }
  }
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "RefreshRecord", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "RefreshRecord", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "FrmMainLoss")), "frmname")), "FrmAllLoss"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Insert"))) {
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "Dsmain")), "Refresh", []);
    } else {
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "Dsmain")), "RefreshRecord", []);
    }
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Insert"))) {
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "Refresh", []);
    } else {
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "RefreshRecord", []);
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mv((await $.v(C, "frmstatus")), "XFRadioButton2")), "Checked")), true)), async () => ($.eq((await $.v(C, "lossstatus")), 1)))))) {
    await $.stmt((await $.mcall((await $.v(C, "FrmMainLoss")), "XFButton6Click", [L0["sender"]])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "RefreshRecord", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Edit", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STATUS"])), "AsInteger", 1);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["DEP_ID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
    await $.stmt((await $.call(C, "ShowMessage", ["Zərər imtina statusuna keçdi."])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Post", []);
  }
  await $.set(C, "yuktesdiq", 0);
  await $.mcall((await $.v(C, "frmMedloss")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMedloss", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "losstesdiq")), 0))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STAGE_TESDIQ"])), "AsInteger")), 0))) {
      await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked", false);
    }
  } else {
    await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked", true);
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmMedloss", "XFSpeedButton1Click", async function XFSpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "claim_status": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "contractstatus")), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu müqavilə bağlanmış müqavilə olduğundan heç bir deyişiklik oluna bilməz."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true))) {
    L0["claim_status"] = 0;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    L0["claim_status"] = 1;
  }
  await $.mset((await $.v(C, "DBEdit1")), "Text", (await $.mcall((await $.mv((await $.v(C, "DmLoss")), "OPCOMMON")), "CallStringFunction", ["GenerateLossNumber", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "oDSClaimDescription")), "FieldByName", ["cid"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "oDSClaimDescription")), "FieldByName", ["TYPE"])), "AsInteger")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "oDSClaimDescription")), "FieldByName", ["id"])), "AsInteger")), L0["claim_status"]]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
