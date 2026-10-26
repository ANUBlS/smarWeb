// Generated from frmstatusimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmstatusimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "ComCtrls", "CommanParametrs", "SBTranslateProc", "sboapiDataModuleImpl", "DmLossImpl", "FrmMainLossimpl", "FrmCargo_claimimpl", "FrmAddLossImpl"]);
  const C = [U];
  U.defClass("Tfrmstatus", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfradiobutton11": {"name": "XFRadioButton11", "type": "TXFRadioButton"}, "xfradiobutton22": {"name": "XFRadioButton22", "type": "TXFRadioButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfradiobutton3": {"name": "XFRadioButton3", "type": "TXFCheckBox"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "xfbutton6": {"name": "XFButton6", "type": "TXFButton"}, "datetimepicker4": {"name": "DateTimePicker4", "type": "TDateTimePicker"}, "datetimepicker8": {"name": "DateTimePicker8", "type": "TDateTimePicker"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "datetimepicker5": {"name": "DateTimePicker5", "type": "TDateTimePicker"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "datetimepicker6": {"name": "DateTimePicker6", "type": "TDateTimePicker"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "datetimepicker7": {"name": "DateTimePicker7", "type": "TDateTimePicker"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFCheckBox"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFCheckBox"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "dep_id": {"name": "dep_id", "type": "integer"}, "forma4": {"name": "Forma4", "type": "integer"}, "qarsi_teref_qiym_cavab": {"name": "Qarsi_teref_qiym_cavab", "type": "integer"}, "yoxlama": {"name": "Yoxlama", "type": "integer"}, "ok_verilib": {"name": "OK_verilib", "type": "integer"}, "bankin_cavabi": {"name": "Bankin_cavabi", "type": "integer"}, "qusur_akti": {"name": "Qusur_Akti", "type": "integer"}, "muraciet": {"name": "Muraciet", "type": "integer"}, "tesdiq": {"name": "Tesdiq", "type": "integer"}, "status": {"name": "status", "type": "integer"}, "test": {"name": "test", "type": "integer"}, "forma4dat": {"name": "Forma4dat", "type": "Tdate"}, "qarsi_teref_qiym_cavabdat": {"name": "Qarsi_teref_qiym_cavabdat", "type": "Tdate"}, "yoxlamadat": {"name": "Yoxlamadat", "type": "Tdate"}, "ok_verilibdat": {"name": "OK_verilibdat", "type": "Tdate"}, "bankin_cavabidat": {"name": "Bankin_cavabidat", "type": "Tdate"}, "qusur_aktidat": {"name": "Qusur_Aktidat", "type": "Tdate"}, "muracietdat": {"name": "Muracietdat", "type": "Tdate"}, "tesdiqdat": {"name": "Tesdiqdat", "type": "Tdate"}, "imtina_dat": {"name": "imtina_dat", "type": "Tdate"}, "imtina_mebleg": {"name": "imtina_mebleg", "type": "real"}}, {});
  U.init(async () => {
    U.var_("frmstatus", null, "Tfrmstatus");
    U.var_("dep_id", 0, "real");
  });
  U.method("Tfrmstatus", "CheckBox8Click", async function CheckBox8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox8")), "Checked")), false))) {
    if ($.truthy((await $.and_(($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime")))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1)))))) {
      await $.mset((await $.v(C, "CheckBox8")), "Checked", true);
      await $.stmt((await $.call(C, "showmessage", ["Diqqət!Köhnə tarixdə təsdiq olunmuş zərər inkar edilə bilməz!"])));
      return L0.result;
    }
  }
  await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmstatus", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("Tfrmstatus", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFRadioButton2")), "Checked", false);
  await $.mset((await $.v(C, "XFRadioButton1")), "Checked", false);
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", false);
    await $.mset((await $.v(C, "XFRadioButton2")), "Checked", true);
  }
  if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 2)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 3)))))) {
    await $.mset((await $.v(C, "XFRadioButton2")), "Checked", false);
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 3)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["user"])), "AsString")), "GEZA_05")))))) {
    await $.mset((await $.v(C, "XFButton1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFButton1")), "Visible", true);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true)))))) {
    await $.mset((await $.v(C, "XFGroupBox2")), "Color", (await $.v(C, "clgray")));
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 2)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 3)))))) {
    await $.mset((await $.v(C, "XFButton6")), "Enabled", false);
    await $.mset((await $.v(C, "XFButton5")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFButton6")), "Enabled", true);
    await $.mset((await $.v(C, "XFButton5")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_forma4"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox1")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox1")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.v(C, "CheckBox1")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox1")), "Color", (await $.v(C, "clGray")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_bankin_cavabi"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox2")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.v(C, "CheckBox2")), "Checked", true);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_qarsi_teref_qiymcavab"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox3")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox3")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.v(C, "CheckBox3")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox3")), "Color", (await $.v(C, "clGray")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_qusur_akti"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox4")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox4")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.v(C, "CheckBox4")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox4")), "Color", (await $.v(C, "clGray")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_yoxlama"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox5")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox5")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.v(C, "CheckBox5")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox5")), "Color", (await $.v(C, "clGray")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_muraciet"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox6")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox6")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.v(C, "CheckBox6")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox6")), "Color", (await $.v(C, "clGray")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_ok_verilib"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox7")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox7")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.v(C, "CheckBox7")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox7")), "Color", (await $.v(C, "clGray")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox8")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox8")), "Color", (await $.v(C, "clRed")));
  } else {
    await $.mset((await $.v(C, "CheckBox8")), "Checked", true);
    await $.mset((await $.v(C, "CheckBox8")), "Color", (await $.v(C, "clGray")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_forma4_dat"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_forma4_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_bankin_cavabi_dat"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_bankin_cavabi_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_qarsi_teref_qcavab_dat"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_qarsi_teref_qcavab_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_qusur_akti_dat"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_qusur_akti_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_yoxlama_dat"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker7")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker7")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_yoxlama_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_muraciet_dat"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker3")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker3")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_muraciet_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_ok_verilib_dat"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_ok_verilib_dat"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq_dat"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmstatus", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox8")), "Checked")))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Duzelish etmek qadagandir!!!"])));
    return L0.result;
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
      await $.mset((await $.v(C, "CheckBox1")), "Color", (await $.v(C, "clGray")));
      await $.set(C, "Forma4", 1);
      await $.set(C, "Forma4dat", (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")));
    } else {
      await $.mset((await $.v(C, "CheckBox1")), "Color", (await $.v(C, "clRed")));
      await $.set(C, "Forma4", 0);
      await $.set(C, "Forma4dat", (await $.call(C, "strtodate", ["30.12.1899"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox2")), "Checked")), true))) {
      await $.mset((await $.v(C, "CheckBox2")), "Color", (await $.v(C, "clGray")));
      await $.set(C, "Bankin_cavabi", 1);
      await $.set(C, "Bankin_cavabidat", (await $.mv((await $.v(C, "DateTimePicker1")), "DateTime")));
    } else {
      await $.mset((await $.v(C, "CheckBox2")), "Color", (await $.v(C, "clRed")));
      await $.set(C, "Bankin_cavabi", 0);
      await $.set(C, "Bankin_cavabidat", (await $.call(C, "strtodate", ["30.12.1899"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox3")), "Checked")), true))) {
      await $.mset((await $.v(C, "CheckBox3")), "Color", (await $.v(C, "clGray")));
      await $.set(C, "Qarsi_teref_qiym_cavab", 1);
      await $.set(C, "Qarsi_teref_qiym_cavabdat", (await $.mv((await $.v(C, "DateTimePicker6")), "DateTime")));
    } else {
      await $.mset((await $.v(C, "CheckBox3")), "Color", (await $.v(C, "clRed")));
      await $.set(C, "Qarsi_teref_qiym_cavab", 0);
      await $.set(C, "Qarsi_teref_qiym_cavabdat", (await $.call(C, "strtodate", ["30.12.1899"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox4")), "Checked")), true))) {
      await $.mset((await $.v(C, "CheckBox4")), "Color", (await $.v(C, "clGray")));
      await $.set(C, "Qusur_Akti", 1);
      await $.set(C, "Qusur_Aktidat", (await $.mv((await $.v(C, "DateTimePicker2")), "DateTime")));
    } else {
      await $.mset((await $.v(C, "CheckBox4")), "Color", (await $.v(C, "clRed")));
      await $.set(C, "Qusur_Akti", 0);
      await $.set(C, "Qusur_Aktidat", (await $.call(C, "strtodate", ["30.12.1899"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox5")), "Checked")), true))) {
      await $.mset((await $.v(C, "CheckBox5")), "Color", (await $.v(C, "clGray")));
      await $.set(C, "Yoxlama", 1);
      await $.set(C, "Yoxlamadat", (await $.mv((await $.v(C, "DateTimePicker7")), "DateTime")));
    } else {
      await $.mset((await $.v(C, "CheckBox5")), "Color", (await $.v(C, "clRed")));
      await $.set(C, "Yoxlama", 0);
      await $.set(C, "Yoxlamadat", (await $.call(C, "strtodate", ["30.12.1899"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox6")), "Checked")), true))) {
      await $.set(C, "Muraciet", 1);
      await $.mset((await $.v(C, "CheckBox6")), "Color", (await $.v(C, "clGray")));
      await $.set(C, "Muracietdat", (await $.mv((await $.v(C, "DateTimePicker3")), "DateTime")));
    } else {
      await $.set(C, "Muraciet", 0);
      await $.mset((await $.v(C, "CheckBox6")), "Color", (await $.v(C, "clRed")));
      await $.set(C, "Muracietdat", (await $.call(C, "strtodate", ["30.12.1899"])));
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox7")), "Checked")), true))) {
      await $.set(C, "OK_verilib", 1);
      await $.mset((await $.v(C, "CheckBox7")), "Color", (await $.v(C, "clGray")));
      await $.set(C, "OK_verilibdat", (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")));
    } else {
      await $.set(C, "OK_verilib", 0);
      await $.mset((await $.v(C, "CheckBox7")), "Color", (await $.v(C, "clRed")));
      await $.set(C, "OK_verilibdat", (await $.call(C, "strtodate", ["30.12.1899"])));
    }
    {
      const $t1 = (await $.v(C, "DmLoss"));
      await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_forma4"])), "AsInteger", (await $.wv([$t1], "Forma4", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_bankin_cavabi"])), "AsInteger", (await $.wv([$t1], "Bankin_cavabi", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_qarsi_teref_qiymcavab"])), "AsInteger", (await $.wv([$t1], "Qarsi_teref_qiym_cavab", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_qusur_akti"])), "AsInteger", (await $.wv([$t1], "Qusur_Akti", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_yoxlama"])), "AsInteger", (await $.wv([$t1], "Yoxlama", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_muraciet"])), "AsInteger", (await $.wv([$t1], "Muraciet", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_ok_verilib"])), "AsInteger", (await $.wv([$t1], "OK_verilib", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_forma4_dat"])), "AsDateTime", (await $.wv([$t1], "Forma4dat", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_bankin_cavabi_dat"])), "AsDateTime", (await $.wv([$t1], "Bankin_cavabidat", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_qarsi_teref_qcavab_dat"])), "AsDateTime", (await $.wv([$t1], "Qarsi_teref_qiym_cavabdat", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_qusur_akti_dat"])), "AsDateTime", (await $.wv([$t1], "Qusur_Aktidat", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_yoxlama_dat"])), "AsDateTime", (await $.wv([$t1], "Yoxlamadat", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_muraciet_dat"])), "AsDateTime", (await $.wv([$t1], "Muracietdat", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["stage_ok_verilib_dat"])), "AsDateTime", (await $.wv([$t1], "OK_verilibdat", C, false)));
      await $.mset((await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "FieldByName", ["DEP_ID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t1], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
      await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "Post", []);
      await $.mcall((await $.wv([$t1], "DSclaim_status", C, false)), "RefreshRecord", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmstatus", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat seçlməyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    {
      const $t2 = (await $.v(C, "DmLoss"));
      const $t3 = (await $.wv([$t2], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t2, $t3], "CallProcedure", ["checkadvancedobjectaccess", ["LOSSREFUSAL"]], C)));
    }
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true)), async () => ($.eq((await $.mv((await $.v(C, "XFRadioButton3")), "Checked")), true)))))) {
    {
      const $t4 = (await $.v(C, "DmLoss"));
      const $t5 = (await $.wv([$t4], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t4, $t5], "CallProcedure", ["checkadvancedobjectaccess", ["LOSSRESEARCH"]], C)));
    }
  }
  {
    const $t6 = (await $.v(C, "DmLoss"));
    if ($.truthy((await $.mv((await $.wv([$t6], "XFRadioButton1", C, false)), "Checked")))) {
      await $.mset((await $.wv([$t6], "XFRadioButton3", C, false)), "Checked", (await $.wv([$t6], "false", C, false)));
      await $.wset([$t6], "status", 0, C);
      await $.mset((await $.wv([$t6], "XFGroupBox2", C, false)), "Color", (await $.wv([$t6], "clGray", C, false)));
      await $.mset((await $.wv([$t6], "XFGroupBox1", C, false)), "Enabled", (await $.wv([$t6], "true", C, false)));
    }
    if ($.truthy((await $.mv((await $.wv([$t6], "XFRadioButton2", C, false)), "Checked")))) {
      await $.mset((await $.wv([$t6], "XFRadioButton3", C, false)), "Checked", (await $.wv([$t6], "false", C, false)));
      await $.mset((await $.wv([$t6], "XFGroupBox2", C, false)), "Color", (await $.wv([$t6], "clred", C, false)));
      await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "DSPaymentLossReal")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "DSPaymentLossReal")), "SetVariable", ["dpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "DSPaymentLossReal")), "open", []);
      if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "DSPaymentLossReal")), "RecordCount")), 0))) {
        await $.stmt((await $.wcall([$t6], "showmessage", ["Diqqət! Bu zərər tam ödənildiyindən statusunu dəyismək olmaz!!"], C)));
        return L0.result;
      }
      await $.wset([$t6], "status", 1, C);
      await $.wset([$t6], "lossstatus", 0, C);
    }
    await $.mcall((await $.wv([$t6], "DSclaim_status", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "DSclaim_status", C, false)), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t6], "DSclaim_status", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t6], "XFRadioButton2", C, false)), "Checked")), (await $.wv([$t6], "true", C, false))))) {
      if ($.truthy(($.eq((await $.mv((await $.mcall((await $.wv([$t6], "DSclaim_status", C, false)), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1)))) {
        await $.stmt((await $.wcall([$t6], "showmessage", ["Diqqət!Təsdiq statusunda olan  zərəri imtina statusuna keçirmək olmaz !"], C)));
        await $.mset((await $.wv([$t6], "XFRadioButton1", C, false)), "Checked", (await $.wv([$t6], "true", C, false)));
        return L0.result;
      }
      await $.mcall((await $.wv([$t6], "frmstatus", C, false)), "close", []);
      if ($.truthy($.eq((await $.mv((await $.wv([$t6], "XFRadioButton2", C, false)), "Checked")), (await $.wv([$t6], "true", C, false))))) {
        await $.wset([$t6], "test", 1, C);
      } else {
        await $.wset([$t6], "test", 0, C);
      }
      await $.stmt((await $.mcall((await $.wv([$t6], "FrmMainLoss", C, false)), "XFButton3Click", [(await $.wv([$t6], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))])));
      await $.wset([$t6], "test", 0, C);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t6], "XFRadioButton2", C, false)), "Checked")), (await $.wv([$t6], "false", C, false))))) {
      await $.wset([$t6], "imtina_dat", (await $.wcall([$t6], "strtodate", ["30.12.1899"], C)), C);
      await $.wset([$t6], "imtina_mebleg", 0, C);
      await $.wset([$t6], "lossstatus", 0, C);
      await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "ins_claim_desc")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "ins_claim_desc")), "SetVariable", ["pid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "ins_claim_desc")), "open", []);
      await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "ins_claim_desc")), "edit", []);
      await $.mset((await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "ins_claim_desc")), "FieldByName", ["REFUSAL_AMMOUNT"])), "AsFloat", (await $.wv([$t6], "imtina_mebleg", C, false)));
      await $.mset((await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "ins_claim_desc")), "FieldByName", ["REFUSAL_DESCRIPTION"])), "AsString", "");
      await $.mset((await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "ins_claim_desc")), "FieldByName", ["refusal_date"])), "AsDateTime", (await $.wv([$t6], "imtina_dat", C, false)));
      await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "ins_claim_desc")), "post", []);
      await $.mcall((await $.wv([$t6], "DSclaim_status", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t6], "DSclaim_status", C, false)), "FieldByName", ["STATUS"])), "AsInteger", (await $.wv([$t6], "status", C, false)));
      await $.mcall((await $.wv([$t6], "DSclaim_status", C, false)), "Post", []);
    }
    await $.wset([$t6], "dep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), C);
    await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "Locate", ["id", (await $.wv([$t6], "dep_id", C, false)), []])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmstatus", "XFButton6Click", async function XFButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "lossimtina", 0);
  await $.set(C, "losstesdiq", 0);
  {
    const $t7 = (await $.v(C, "DmLoss"));
    const $t8 = (await $.wv([$t7], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t7, $t8], "CallProcedure", ["checkadvancedobjectaccess", ["LOSSSTAGE"]], C)));
  }
  {
    const $t9 = (await $.v(C, "DmLoss"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.mv((await $.wv([$t9], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t9], "showmessage", ["Heç bir məlumat seçlməyib!"], C)));
      return L0.result;
    }
    if ($.truthy(($.eq((await $.mv((await $.wv([$t9], "CheckBox8", C, false)), "Checked")), (await $.wv([$t9], "false", C, false)))))) {
      await $.mcall((await $.mv((await $.wv([$t9], "DmLoss", C, false)), "DSPaymentLossReal")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t9], "DmLoss", C, false)), "DSPaymentLossReal")), "SetVariable", ["dpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t9], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.wv([$t9], "DmLoss", C, false)), "DSPaymentLossReal")), "open", []);
      if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t9], "DmLoss", C, false)), "DSPaymentLossReal")), "RecordCount")), 0))) {
        await $.stmt((await $.wcall([$t9], "showmessage", ["Diqqət! Bu zərər tam ödənildiyindən statusunu dəyismək olmaz!!"], C)));
        await $.mset((await $.wv([$t9], "CheckBox8", C, false)), "Checked", (await $.wv([$t9], "true", C, false)));
        return L0.result;
      }
    }
    await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t9], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "Open", []);
    await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t9], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox1", C, false)), "Checked")), (await $.wv([$t9], "true", C, false))))) {
      await $.mset((await $.wv([$t9], "CheckBox1", C, false)), "Color", (await $.wv([$t9], "clGray", C, false)));
      await $.wset([$t9], "Forma4", 1, C);
      await $.wset([$t9], "Forma4dat", (await $.mv((await $.wv([$t9], "DateTimePicker5", C, false)), "DateTime")), C);
    } else {
      await $.mset((await $.wv([$t9], "CheckBox1", C, false)), "Color", (await $.wv([$t9], "clRed", C, false)));
      await $.wset([$t9], "Forma4", 0, C);
      await $.wset([$t9], "Forma4dat", (await $.wcall([$t9], "strtodate", ["30.12.1899"], C)), C);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox2", C, false)), "Checked")), (await $.wv([$t9], "true", C, false))))) {
      await $.mset((await $.wv([$t9], "CheckBox2", C, false)), "Color", (await $.wv([$t9], "clGray", C, false)));
      await $.wset([$t9], "Bankin_cavabi", 1, C);
      await $.wset([$t9], "Bankin_cavabidat", (await $.mv((await $.wv([$t9], "DateTimePicker1", C, false)), "DateTime")), C);
    } else {
      await $.mset((await $.wv([$t9], "CheckBox2", C, false)), "Color", (await $.wv([$t9], "clRed", C, false)));
      await $.wset([$t9], "Bankin_cavabi", 0, C);
      await $.wset([$t9], "Bankin_cavabidat", (await $.wcall([$t9], "strtodate", ["30.12.1899"], C)), C);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox3", C, false)), "Checked")), (await $.wv([$t9], "true", C, false))))) {
      await $.mset((await $.wv([$t9], "CheckBox3", C, false)), "Color", (await $.wv([$t9], "clGray", C, false)));
      await $.wset([$t9], "Qarsi_teref_qiym_cavab", 1, C);
      await $.wset([$t9], "Qarsi_teref_qiym_cavabdat", (await $.mv((await $.wv([$t9], "DateTimePicker6", C, false)), "DateTime")), C);
    } else {
      await $.mset((await $.wv([$t9], "CheckBox3", C, false)), "Color", (await $.wv([$t9], "clRed", C, false)));
      await $.wset([$t9], "Qarsi_teref_qiym_cavab", 0, C);
      await $.wset([$t9], "Qarsi_teref_qiym_cavabdat", (await $.wcall([$t9], "strtodate", ["30.12.1899"], C)), C);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox4", C, false)), "Checked")), (await $.wv([$t9], "true", C, false))))) {
      await $.mset((await $.wv([$t9], "CheckBox4", C, false)), "Color", (await $.wv([$t9], "clGray", C, false)));
      await $.wset([$t9], "Qusur_Akti", 1, C);
      await $.wset([$t9], "Qusur_Aktidat", (await $.mv((await $.wv([$t9], "DateTimePicker2", C, false)), "DateTime")), C);
    } else {
      await $.mset((await $.wv([$t9], "CheckBox4", C, false)), "Color", (await $.wv([$t9], "clRed", C, false)));
      await $.wset([$t9], "Qusur_Akti", 0, C);
      await $.wset([$t9], "Qusur_Aktidat", (await $.wcall([$t9], "strtodate", ["30.12.1899"], C)), C);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox5", C, false)), "Checked")), (await $.wv([$t9], "true", C, false))))) {
      await $.mset((await $.wv([$t9], "CheckBox5", C, false)), "Color", (await $.wv([$t9], "clGray", C, false)));
      await $.wset([$t9], "Yoxlama", 1, C);
      await $.wset([$t9], "Yoxlamadat", (await $.mv((await $.wv([$t9], "DateTimePicker7", C, false)), "DateTime")), C);
    } else {
      await $.mset((await $.wv([$t9], "CheckBox5", C, false)), "Color", (await $.wv([$t9], "clRed", C, false)));
      await $.wset([$t9], "Yoxlama", 0, C);
      await $.wset([$t9], "Yoxlamadat", (await $.wcall([$t9], "strtodate", ["30.12.1899"], C)), C);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox6", C, false)), "Checked")), (await $.wv([$t9], "true", C, false))))) {
      await $.wset([$t9], "Muraciet", 1, C);
      await $.mset((await $.wv([$t9], "CheckBox6", C, false)), "Color", (await $.wv([$t9], "clGray", C, false)));
      await $.wset([$t9], "Muracietdat", (await $.mv((await $.wv([$t9], "DateTimePicker3", C, false)), "DateTime")), C);
    } else {
      await $.wset([$t9], "Muraciet", 0, C);
      await $.mset((await $.wv([$t9], "CheckBox6", C, false)), "Color", (await $.wv([$t9], "clRed", C, false)));
      await $.wset([$t9], "Muracietdat", (await $.wcall([$t9], "strtodate", ["30.12.1899"], C)), C);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox7", C, false)), "Checked")), (await $.wv([$t9], "true", C, false))))) {
      await $.wset([$t9], "OK_verilib", 1, C);
      await $.mset((await $.wv([$t9], "CheckBox7", C, false)), "Color", (await $.wv([$t9], "clGray", C, false)));
      await $.wset([$t9], "OK_verilibdat", (await $.mv((await $.wv([$t9], "DateTimePicker8", C, false)), "DateTime")), C);
    } else {
      await $.wset([$t9], "OK_verilib", 0, C);
      await $.mset((await $.wv([$t9], "CheckBox7", C, false)), "Color", (await $.wv([$t9], "clRed", C, false)));
      await $.wset([$t9], "OK_verilibdat", (await $.wcall([$t9], "strtodate", ["30.12.1899"], C)), C);
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox8", C, false)), "Checked")), (await $.wv([$t9], "true", C, false))))) {
      if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox7", C, false)), "Checked")), (await $.wv([$t9], "false", C, false))))) {
        await $.stmt((await $.wcall([$t9], "showmessage", ["Diqqət! \"OK verilib\"  statusu seçilmədən \"Təsdiq\" statusu seçilə bilməz!"], C)));
        await $.wset([$t9], "Tesdiq", 0, C);
        await $.mset((await $.wv([$t9], "CheckBox8", C, false)), "Color", (await $.wv([$t9], "clRed", C, false)));
        await $.wset([$t9], "Tesdiqdat", (await $.wcall([$t9], "strtodate", ["30.12.1899"], C)), C);
        await $.mset((await $.wv([$t9], "CheckBox8", C, false)), "Checked", (await $.wv([$t9], "false", C, false)));
        return L0.result;
      }
      await $.wset([$t9], "lossoperatin", 1, C);
      await $.mset((await $.wv([$t9], "FrmMainLoss", C, false)), "status_r", 1);
      if ($.truthy($.eq((await $.mv((await $.wv([$t9], "FrmCargo_claim", C, false)), "yuktesdiq")), 0))) {
        await $.mcall((await $.wv([$t9], "frmstatus", C, false)), "close", []);
        await $.stmt((await $.mcall((await $.wv([$t9], "FrmMainLoss", C, false)), "XFButton3Click", [(await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))])));
      }
    } else {
      await $.wset([$t9], "lossoperatin", 0, C);
      await $.mset((await $.wv([$t9], "FrmMainLoss", C, false)), "status_r", 0);
      await $.wset([$t9], "Tesdiq", 0, C);
      await $.mset((await $.wv([$t9], "CheckBox8", C, false)), "Color", (await $.wv([$t9], "clRed", C, false)));
      await $.wset([$t9], "Tesdiqdat", (await $.wcall([$t9], "strtodate", ["30.12.1899"], C)), C);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t9], "DmLoss", C, false)), "DSclaim_status")), "FieldByName", ["STAGE_TESDIQ"])), "AsInteger")), 0))) {
      await $.wset([$t9], "losstesdiq", 0, C);
    } else {
      await $.wset([$t9], "losstesdiq", 1, C);
    }
    await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "Edit", []);
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_forma4"])), "AsInteger", (await $.wv([$t9], "Forma4", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_bankin_cavabi"])), "AsInteger", (await $.wv([$t9], "Bankin_cavabi", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_qarsi_teref_qiymcavab"])), "AsInteger", (await $.wv([$t9], "Qarsi_teref_qiym_cavab", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_qusur_akti"])), "AsInteger", (await $.wv([$t9], "Qusur_Akti", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_yoxlama"])), "AsInteger", (await $.wv([$t9], "Yoxlama", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_muraciet"])), "AsInteger", (await $.wv([$t9], "Muraciet", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_ok_verilib"])), "AsInteger", (await $.wv([$t9], "OK_verilib", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_tesdiq"])), "AsInteger", (await $.wv([$t9], "Tesdiq", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_forma4_dat"])), "AsDateTime", (await $.wv([$t9], "Forma4dat", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_bankin_cavabi_dat"])), "AsDateTime", (await $.wv([$t9], "Bankin_cavabidat", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_qarsi_teref_qcavab_dat"])), "AsDateTime", (await $.wv([$t9], "Qarsi_teref_qiym_cavabdat", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_qusur_akti_dat"])), "AsDateTime", (await $.wv([$t9], "Qusur_Aktidat", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_yoxlama_dat"])), "AsDateTime", (await $.wv([$t9], "Yoxlamadat", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_muraciet_dat"])), "AsDateTime", (await $.wv([$t9], "Muracietdat", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_ok_verilib_dat"])), "AsDateTime", (await $.wv([$t9], "OK_verilibdat", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime", (await $.wv([$t9], "Tesdiqdat", C, false)));
    await $.mset((await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "FieldByName", ["DEP_ID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t9], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
    await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "Post", []);
    await $.mcall((await $.wv([$t9], "DSclaim_status", C, false)), "RefreshRecord", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t9], "CheckBox8", C, false)), "Checked")), (await $.wv([$t9], "false", C, false))))) {
      await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["CLAIM_NUM"])), "AsString", "");
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["UTO_TRANSPORTATION_COSTS"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["EKSPERTIZA_AMOUNT"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["VALUE_NEW_SPARE_PARTS"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["FINAL_AMOUNT_LOSS"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["AUTO_ASSESS_COSTS"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["OTHER_COSTS"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["amortizasiya_ammount"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["FINAL_PAYMENT_AMOUNT_LOSS"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["AUTO_REAL_MARKET_VALUE"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["REMAINS_VALUE"])), "Asfloat", 0);
      await $.mset((await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "FieldByName", ["BANK_ACCNO"])), "AsString", "");
      await $.mcall((await $.wv([$t9], "ODSClaimDescription", C, false)), "post", []);
      await $.mcall((await $.mv((await $.wv([$t9], "DmLoss", C, false)), "Dsmain")), "RefreshRecord", []);
    }
  }
  await $.set(C, "lossimtina", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmstatus", "XFRadioButton1Click", async function XFRadioButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true))) {
    await $.mset((await $.v(C, "XFRadioButton2")), "Checked", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), false))) {
    await $.mset((await $.v(C, "XFRadioButton2")), "Checked", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmstatus", "XFRadioButton22Click", async function XFRadioButton22Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    await $.mset((await $.v(C, "XFGroupBox1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("Tfrmstatus", "XFRadioButton2Click", async function XFRadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), false))) {
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
