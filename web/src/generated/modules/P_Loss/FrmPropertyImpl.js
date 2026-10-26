// Generated from FrmPropertyImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmPropertyImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "db", "oracle", "Buttons", "CMCurrencyEdit", "DBCtrlsEh", "DmLossImpl", "FrmMainLossImpl", "CommanParametrs", "FrmTravelImpl", "frmstatusimpl"]);
  const C = [U];
  U.defClass("TFrmProperty", "TForm", {"xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflabel14": {"name": "XFLabel14", "type": "TXFLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "datetimepicker14": {"name": "DateTimePicker14", "type": "TDateTimePicker"}, "xfspeedbutton1": {"name": "XFSpeedButton1", "type": "TXFSpeedButton"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "xflabel36": {"name": "XFLabel36", "type": "TXFLabel"}, "xflabel37": {"name": "XFLabel37", "type": "TXFLabel"}, "xflabel38": {"name": "XFLabel38", "type": "TXFLabel"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "dbedit25": {"name": "DBEdit25", "type": "TDBEdit"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "xfgroupbox7": {"name": "XFGroupBox7", "type": "TXFGroupBox"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDBDateTimeEditEh"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "xflabel35": {"name": "XFLabel35", "type": "TXFLabel"}, "xfradiogroup1": {"name": "XFRadioGroup1", "type": "TXFRadioGroup"}, "xfradiogroup2": {"name": "XFRadioGroup2", "type": "TXFRadioGroup"}, "xfradiogroup3": {"name": "XFRadioGroup3", "type": "TXFRadioGroup"}, "yuktesdiq": {"name": "yuktesdiq", "type": "integer"}, "inmtina_dat": {"name": "inmtina_dat", "type": "Tdatetime"}}, {});
  U.init(async () => {
    U.var_("FrmProperty", null, "TFrmProperty");
    U.var_("sub_id", 0, "integer");
    U.var_("sub_id1", 0, "integer");
    U.var_("ptype", 0, "integer");
  });
  U.method("TFrmProperty", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmProperty", "FormShow", async function FormShow(Self, p0) {
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
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Insert"))) {
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", (-(1)));
    await $.mset((await $.v(C, "XFRadioGroup2")), "ItemIndex", (-(1)));
    await $.mset((await $.v(C, "DateTimePicker1")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Edit"))) {
    await $.mset((await $.v(C, "dateTimePicker1")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["CLAIM_DATE"])), "AsDateTime")));
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["REFUSAL_DATE"])), "AsString")), ""))) {
      await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["REFUSAL_DATE"])), "AsDateTime")));
    } else {
      await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    }
    await $.mset((await $.v(C, "XFRadioGroup2")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["subraqasiya"])), "AsInteger")));
    await $.mset((await $.v(C, "XFRadioGroup1")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["subraqasiya1"])), "AsInteger")));
    await $.mset((await $.v(C, "XFRadioGroup3")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["subraqasiya1"])), "AsInteger")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["claim_status"])), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "XFRadioButton2")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProperty", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "yuktesdiq", 1);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), (await $.mv((await $.v(C, "XFRadioGroup2")), "ItemIndex")))), async () => ($.eq((await $.mv((await $.v(C, "XFGroupBox1")), "Visible")), true)))))) {
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
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroup2")), "ItemIndex")), (-(1))))) {
    await $.stmt((await $.call(C, "showmessage", ["Subroqasiya hüququ sahesi secilmeyib  !"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Qəza əməkdaşı sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Rayon sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit8")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Küçə sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Hadisənin təsviri sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit23")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Təqribi zərər məbləği sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.v(C, "lossoperatin")), 1))) {
    await $.set(C, "losstesdiq", 0);
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Zərər № sahəsi boşdur!"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Yekun zərər məbləği sahəsi boşdur!"])));
      return L0.result;
    }
    if ($.truthy($.ne((await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex")), (await $.mv((await $.v(C, "XFRadioGroup2")), "ItemIndex"))))) {
      await $.stmt((await $.call(C, "showmessage", ["Subroqasiya hüququ sahesi eyni olmalidi  !"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit4")), "Text")), ""))) {
      await $.stmt((await $.call(C, "Showmessage", ["Diqqət!Sığorta ödənişinin məbləği sahəsi boşdur!"])));
      return L0.result;
    }
  }
  if ($.truthy($.eq((await $.v(C, "lossstatus")), 1))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit5")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! İmtina məbləği sahəsi boşdur."])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! İmtina səbəbi sahəsi boşdur."])));
      return L0.result;
    }
  }
  { const $t1 = (await $.mv((await $.v(C, "XFRadioGroup1")), "ItemIndex"));
    if ($.eq($t1, 0)) {
      await $.set(C, "sub_id1", 0);
    }
    else if ($.eq($t1, 1)) {
      await $.set(C, "sub_id1", 1);
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
    await $.set(C, "inmtina_dat", (await $.mv((await $.v(C, "DateTimePicker1")), "Value")));
  } else {
    await $.set(C, "inmtina_dat", (await $.call(C, "strtodate", ["30.12.1899"])));
  }
  {
    const $t3 = (await $.v(C, "DmLoss"));
    const $t4 = (await $.wv([$t3], "ODSClaimDescription", C, false));
    if ($.truthy($.in_((await $.wv([$t3, $t4], "State", C, false)), [(await $.wv([$t3, $t4], "dsEdit", C, false)), (await $.wv([$t3, $t4], "dsInsert", C, false))]))) {
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionMK_ID", C, false)), "Value", (await $.mv((await $.wv([$t3, $t4], "ODSMotorKaskoID", C, false)), "Value")));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionCID", C, false)), "Value", (await $.wv([$t3, $t4], "contactid", C, false)));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionCLAIM_DATE", C, false)), "Value", (await $.mv((await $.wv([$t3, $t4], "DateTimePicker1", C, false)), "value")));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionREFUSAL_DATE", C, false)), "Value", (await $.wv([$t3, $t4], "inmtina_dat", C, false)));
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionSUBRAQASIYA", C, false)), "Value", (await $.wv([$t3, $t4], "sub_id1", C, false)));
      if ($.truthy($.eq((await $.mv((await $.wv([$t3, $t4], "XFGroupBox1", C, false)), "Visible")), (await $.wv([$t3, $t4], "true", C, false))))) {
        await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionSUBRAQASIYA1", C, false)), "Value", (await $.wv([$t3, $t4], "sub_id1", C, false)));
      }
      await $.mset((await $.wv([$t3, $t4], "ODSClaimDescriptionCLAIM_STATUS", C, false)), "Value", (await $.wv([$t3, $t4], "ptype", C, false)));
      await $.mcall((await $.mv((await $.wv([$t3, $t4], "DmLoss", C, false)), "ODSClaimDescription")), "Post", []);
      await $.mcall((await $.mv((await $.wv([$t3, $t4], "DmLoss", C, false)), "ODSClaimDescription")), "RefreshRecord", []);
      await $.mset((await $.wv([$t3, $t4], "FrmMainLoss", C, false)), "dep_id", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["id"], C)), "asinteger")));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked")), true))) {
    await $.mset((await $.v(C, "frmstatus")), "Tesdiq", 1);
    await $.mset((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Color", (await $.v(C, "clGray")));
    await $.mset((await $.v(C, "frmstatus")), "Tesdiqdat", (await $.mv((await $.mv((await $.v(C, "frmstatus")), "DateTimePicker4")), "DateTime")));
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
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Post", []);
    await $.stmt((await $.call(C, "ShowMessage", ["Zərər imtina statusuna keçdi."])));
  }
  await $.set(C, "yuktesdiq", 0);
  await $.mcall((await $.v(C, "FrmProperty")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProperty", "XFButton2Click", async function XFButton2Click(Self, p0) {
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
  U.method("TFrmProperty", "XFSpeedButton1Click", async function XFSpeedButton1Click(Self, p0) {
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
