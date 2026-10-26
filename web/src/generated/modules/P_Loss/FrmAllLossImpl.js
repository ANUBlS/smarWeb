// Generated from FrmAllLossImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmAllLossImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "ComCtrls", "Grids", "XDBGrids", "DBCtrls", "Mask", "CMExcelExport", "Menus", "ImgList", "DB", "OracleData", "DmLossImpl", "CommanParametrs", "FrmMainLossImpl", "FrmAddLossImpl", "FrmotherImpl", "FrmCargo_claimimpl", "FrmTravelImpl", "FrmPropertyImpl", "frmMedlossImpl"]);
  const C = [U];
  U.defClass("TFrmAllLoss", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "xfbutton6": {"name": "XFButton6", "type": "TXFButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "datetimepicker4": {"name": "DateTimePicker4", "type": "TDateTimePicker"}, "datetimepicker5": {"name": "DateTimePicker5", "type": "TDateTimePicker"}, "datetimepicker6": {"name": "DateTimePicker6", "type": "TDateTimePicker"}, "datetimepicker7": {"name": "DateTimePicker7", "type": "TDateTimePicker"}, "datetimepicker8": {"name": "DateTimePicker8", "type": "TDateTimePicker"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "datetimepicker9": {"name": "DateTimePicker9", "type": "TDateTimePicker"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "xfgroupbox7": {"name": "XFGroupBox7", "type": "TXFGroupBox"}, "xfgroupbox9": {"name": "XFGroupBox9", "type": "TXFGroupBox"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "xfcheckbox4": {"name": "XFCheckBox4", "type": "TXFCheckBox"}, "xfcheckbox61": {"name": "XFCheckBox61", "type": "TXFCheckBox"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "datetimepicker10": {"name": "DateTimePicker10", "type": "TDateTimePicker"}, "xfbutton8": {"name": "XFButton8", "type": "TXFButton"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "datetimepicker11": {"name": "DateTimePicker11", "type": "TDateTimePicker"}, "excelexport": {"name": "ExcelExport", "type": "TCMExcelExport"}, "allmainpopup": {"name": "AllmainPopup", "type": "TPopupMenu"}, "redakt1": {"name": "Redakt1", "type": "TMenuItem"}, "yenilmk1": {"name": "Yenilmk1", "type": "TMenuItem"}, "excelat1": {"name": "Excelat1", "type": "TMenuItem"}, "filter1": {"name": "Filter1", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "xfbutton9": {"name": "XFButton9", "type": "TXFButton"}, "dmlr1": {"name": "dmlr1", "type": "TMenuItem"}, "n4": {"name": "N4", "type": "TMenuItem"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbutton7": {"name": "XFButton7", "type": "TXFButton"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "xfradiobutton3": {"name": "XFRadioButton3", "type": "TXFCheckBox"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "xfcheckbox5": {"name": "XFCheckBox5", "type": "TXFCheckBox"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "editinsname": {"name": "EditINSNAME", "type": "TEdit"}, "editcustname": {"name": "EditCUSTNAME", "type": "TEdit"}, "editpolicy_num": {"name": "EditPOLICY_NUM", "type": "TEdit"}, "editclaim_num": {"name": "EditCLAIM_NUM", "type": "TEdit"}, "xfcheckbox6": {"name": "XFCheckBox6", "type": "TXFRadioButton"}, "xfradiobutton4": {"name": "XFRadioButton4", "type": "TXFRadioButton"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "n5": {"name": "N5", "type": "TMenuItem"}, "zrrbarderosu1": {"name": "Zrrbarderosu1", "type": "TMenuItem"}, "xfgroupbox10": {"name": "XFGroupBox10", "type": "TXFGroupBox"}, "xfcheckbox7": {"name": "XFCheckBox7", "type": "TXFCheckBox"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "subroqasiyabarderosu1": {"name": "SubroqasiyaBarderosu1", "type": "TMenuItem"}, "n6": {"name": "N6", "type": "TMenuItem"}, "xfgroupbox11": {"name": "XFGroupBox11", "type": "TXFGroupBox"}, "xfcheckbox8": {"name": "XFCheckBox8", "type": "TXFCheckBox"}, "combobox3": {"name": "ComboBox3", "type": "TComboBox"}, "xfgroupbox12": {"name": "XFGroupBox12", "type": "TXFGroupBox"}, "xfcheckbox9": {"name": "XFCheckBox9", "type": "TXFCheckBox"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "tesdiq": {"name": "Tesdiq", "type": "integer"}, "status": {"name": "status", "type": "integer"}, "tesdiqdat": {"name": "Tesdiqdat", "type": "tdate"}, "ptype": {"name": "ptype", "type": "String"}, "op_type": {"name": "op_type", "type": "String"}, "frmname": {"name": "frmname", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FrmAllLoss", null, "TFrmAllLoss");
    U.var_("FilterStr1", '', "String");
  });
  U.method("TFrmAllLoss", "CheckBox8Click", async function CheckBox8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.v(C, "DateTimePicker4")), "Enabled", false);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox8")), "Checked")), true))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "XFButton6")), "Enabled", false);
    } else {
      await $.mset((await $.v(C, "XFButton6")), "Enabled", true);
    }
  } else {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.v(C, "XFButton6")), "Enabled", true);
    } else {
      await $.mset((await $.v(C, "XFButton6")), "Enabled", true);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "Edit2KeyPress", async function Edit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAllLoss", "EditINSNAMEExit", async function EditINSNAMEExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.call(C, "TEdit", [L0["sender"]])), "Text", (await $.v(C, "EmptyStr")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "EditINSNAMEKeyPress", async function EditINSNAMEKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "ActionSpeedSearchExecute", [L0["sender"]])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAllLoss", "ActionSpeedSearchExecute", async function ActionSpeedSearchExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "searchfield": '', "searchoptions": null};
  await $.fixArgs(L0, ["sender"]);
  L0["searchoptions"] = [(await $.v(C, "srIgnoreCase")), (await $.v(C, "srPartialMatch"))];
  {
    const $t1 = L0["sender"];
    await $.wset([$t1], "SearchField", (await $.wcall([$t1], "copy", [(await $.wv([$t1], "Name", C, false)), 5, (await $.wcall([$t1], "length", [(await $.wv([$t1], "Name", C, false))], C))], C)), { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true });
    {
      const $t2 = (await $.wcall([$t1], "TOracleDataSet", [(await $.mv((await $.mv((await $.wv([$t1], "XDBGrid1", C, false)), "DataSource")), "DataSet"))], C));
      if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromCurrent", C, false)), (await $.wv([$t1, $t2], "srForward", C, false))])], C))))) {
        if ($.truthy($.eq((await $.wcall([$t1, $t2], "MessageDlg", [$.add($.add("Axtarış sona çatdı.", "\r"), "Əvvəldən başlansın?"), (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbNo", C, false)), (await $.wv([$t1, $t2], "mbYes", C, false))], 0], C)), (await $.wv([$t1, $t2], "mrYes", C, false))))) {
          if ($.truthy($.not((await $.wcall([$t1, $t2], "SearchRecord", [(await $.wv([$t1, $t2], "SearchField", { get: async () => L0["searchfield"], set: async (v) => { L0["searchfield"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Text", C, false)), $.add((await $.wv([$t1, $t2], "SearchOptions", { get: async () => L0["searchoptions"], set: async (v) => { L0["searchoptions"] = v; }, local: true }, false)), [(await $.wv([$t1, $t2], "srFromBeginning", C, false))])], C))))) {
            await $.stmt((await $.wcall([$t1, $t2], "MessageDlg", ["Yazı tapılmayıb!", (await $.wv([$t1, $t2], "mtInformation", C, false)), [(await $.wv([$t1, $t2], "mbOK", C, false))], 0], C)));
          }
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAllLoss", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFCheckBox1")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox2")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox3")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox4")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox6")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox7")), "Checked", false);
  await $.mset((await $.v(C, "XFCheckBox8")), "Checked", false);
  await $.mset((await $.v(C, "edit1")), "Text", "");
  await $.mset((await $.v(C, "Edit2")), "Text", "");
  await $.mset((await $.v(C, "ComboBox2")), "Text", "");
  await $.mset((await $.v(C, "ComboBox3")), "Text", "");
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", "");
  await $.mset((await $.mv((await $.v(C, "FrmAllLoss")), "DateTimePicker9")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.mv((await $.v(C, "FrmAllLoss")), "DateTimePicker10")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mset((await $.mv((await $.v(C, "FrmAllLoss")), "DateTimePicker11")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DScontr_type")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DScontr_type")), "SetVariable", ["pid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DScontr_type")), "OPEN", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    await $.mset((await $.v(C, "XFGroupBox2")), "Color", (await $.v(C, "clGray")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "XFRadioButton2")), "Checked", true);
    await $.mset((await $.v(C, "XFGroupBox2")), "Color", (await $.v(C, "clred")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 2))) {
    await $.mset((await $.v(C, "XFRadioButton1")), "Checked", true);
    await $.mset((await $.v(C, "XFGroupBox2")), "Color", (await $.v(C, "clGray")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSMaincount")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox1")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox3")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox4")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox5")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox6")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox7")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox8")), "Checked", false);
    await $.mset((await $.v(C, "CheckBox1")), "color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "CheckBox2")), "color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "CheckBox3")), "color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "CheckBox4")), "color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "CheckBox5")), "color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "CheckBox6")), "color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "CheckBox7")), "color", (await $.v(C, "clRed")));
    await $.mset((await $.v(C, "CheckBox8")), "color", (await $.v(C, "clRed")));
  } else {
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
      await $.mset((await $.v(C, "CheckBox2")), "Color", (await $.v(C, "clGray")));
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
      await $.mset((await $.v(C, "XFButton6")), "Enabled", false);
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_forma4_dat"])), "AsString")), "30.12.1899"))) {
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
  await $.mset((await $.v(C, "XFCheckBox6")), "Checked", true);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "SubroqasiyaBarderosu1Click", async function SubroqasiyaBarderosu1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["SUBRAQASIYA"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız Subroqasiyalı zərərlər üçün Subroqasiya barderosu yığmaq olar!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSReins")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSReins")), "SetVariable", ["pcid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSReins")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSReins")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təkrarsığortaya göndərilmiş müqavilə üçün Subroqasiya barderosu yığmaq olar!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSlosspayment")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSlosspayment")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSlosspayment")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSlosspayment")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız ödənmiş zərərlər üçün Subroqasiya barderosu yığmaq olar!"])));
    return L0.result;
  }
  await $.set(C, "commandepid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
  await $.set(C, "Bordero_type", "subraqasiya");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CID"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["reinsurance.bpl", "subroqasiya"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XDBGrid1TitleClick", async function XDBGrid1TitleClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined, "titlename": '', "sortposition": 0};
  await $.fixArgs(L0, ["column"]);
  L0["sortposition"] = 100;
  if ($.truthy((await $.or_(((await $.mv((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "IsEmpty"))), async () => ($.eq((await $.mv(L0["column"], "FieldName")), (await $.v(C, "EmptyStr")))))))) {
    return L0.result;
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crHourGlass")));
  L0["titlename"] = (await $.mv(L0["column"], "FieldName"));
  {
    const $t3 = (await $.v(C, "DmLoss"));
    const $t4 = (await $.wv([$t3], "DSALLMain", C, false));
    try {
      await $.wset([$t3, $t4], "SortPosition", (await $.mcall((await $.wv([$t3, $t4], "SQL", C, false)), "Add", [$.add("ORDER BY ", (await $.wv([$t3, $t4], "TitleName", { get: async () => L0["titlename"], set: async (v) => { L0["titlename"] = v; }, local: true }, false)))])), { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true });
      await $.stmt($.wcall([$t3, $t4], "Refresh", [], C));
    } finally {
      { const $t5 = await $.iset((await $.wv([$t3, $t4], "SQL", C, false)), [(await $.wv([$t3, $t4], "SortPosition", { get: async () => L0["sortposition"], set: async (v) => { L0["sortposition"] = v; }, local: true }, false))], (await $.wv([$t3, $t4], "EmptyStr", C, false))); if ($t5 !== undefined) { await $.wset([$t3, $t4], "SQL", $t5, C); } }
      await $.mset((await $.wv([$t3, $t4], "Screen", C, false)), "Cursor", (await $.wv([$t3, $t4], "crDefault", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TXColumn"]});
  U.method("TFrmAllLoss", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "frmloss", 1);
  await $.mset((await $.v(C, "FrmMainLoss")), "op_type", "Edit");
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox8")), "Checked")), true))) {
    await $.set(C, "lossoperatin", 1);
  } else {
    await $.set(C, "lossoperatin", 0);
  }
  await $.mset((await $.v(C, "FrmMainLoss")), "frmname", "FrmAllLoss");
  {
    const $t6 = (await $.v(C, "DmLoss"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t6], "showmessage", ["Heç bir məlumat seçlməyib!"], C)));
      return L0.result;
    }
    await $.mcall((await $.wv([$t6], "ODSClaims", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSClaims", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t6], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSClaims", C, false)), "SetVariable", ["p_desc_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmAllLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t6], "ODSClaims", C, false)), "Open", []);
    await $.mcall((await $.wv([$t6], "ODSClaims", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t6], "ODSClaimSal", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSClaimSal", C, false)), "SetVariable", ["eid", (await $.mv((await $.wv([$t6], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSClaimSal", C, false)), "SetVariable", ["p_desc_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmAllLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t6], "ODSClaimSal", C, false)), "Open", []);
    await $.mcall((await $.wv([$t6], "ODSClaimSal", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t6], "ODSClaimDescription", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSClaimDescription", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmAllLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t6], "ODSClaimDescription", C, false)), "Open", []);
    await $.mcall((await $.wv([$t6], "ODSClaimDescription", C, false)), "Edit", []);
    await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "DSclaim_status")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t6], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.wv([$t6], "DmLoss", C, false)), "DSclaim_status")), "Open", []);
    await $.mcall((await $.wv([$t6], "oDSMarks", C, false)), "Open", []);
    await $.mcall((await $.wv([$t6], "ODSModels", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t6], "ODSModels", C, false)), "SetVariable", ["pmark_id", (await $.mv((await $.mcall((await $.wv([$t6], "ODSClaimDescription", C, false)), "FieldByName", ["MARKAID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t6], "ODSModels", C, false)), "open", []);
    await $.mset((await $.mv((await $.wv([$t6], "FrmAddLoss", C, false)), "DBLookupComboBox2")), "ListFieldIndex", (await $.mv((await $.mcall((await $.wv([$t6], "ODSClaimDescription", C, false)), "FieldByName", ["MODELID"])), "AsInteger")));
    await $.mset((await $.mv((await $.wv([$t6], "FrmAddLoss", C, false)), "DBLookupComboBox2")), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t6], "ODSClaimDescription", C, false)), "FieldByName", ["MODELID"])), "AsInteger")));
    await $.mset((await $.wv([$t6], "FrmMainLoss", C, false)), "dep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t6], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STATUS"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true)))))) {
    await $.set(C, "lossstatus", 1);
  } else {
    await $.set(C, "lossstatus", 0);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["c_type"])), "AsInteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 4)))))) {
    {
      const $t7 = (await $.v(C, "DmLoss"));
      const $t8 = (await $.wv([$t7], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t7, $t8], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSKASKO"]], C)));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "BitBtn1")), "Enabled", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "BitBtn1")), "Enabled", true);
    }
    await $.mcall((await $.v(C, "FrmAddLoss")), "ShowModal", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["c_type"])), "AsInteger")), 4)), async () => ((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 13)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 1))))))))) {
    if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 13)))) {
      {
        const $t9 = (await $.v(C, "DmLoss"));
        const $t10 = (await $.wv([$t9], "sb_aca", C, false));
        await $.stmt((await $.wcall([$t9, $t10], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSMES"]], C)));
      }
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmAllLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Open", []);
      await $.mset((await $.mv((await $.v(C, "Frmother")), "Edit1")), "Text", "Məsuliyyət");
      await $.mset((await $.v(C, "Frmother")), "Caption", "Məsuliyyət(zərər)");
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
        await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", false);
      } else {
        await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", true);
      }
      await $.mcall((await $.v(C, "Frmother")), "ShowModal", []);
    }
    if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 1)))) {
      {
        const $t11 = (await $.v(C, "DmLoss"));
        const $t12 = (await $.wv([$t11], "sb_aca", C, false));
        await $.stmt((await $.wcall([$t11, $t12], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSFQ"]], C)));
      }
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmAllLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Open", []);
      await $.mset((await $.mv((await $.v(C, "Frmother")), "Edit1")), "Text", "Fərdi qəza");
      await $.mset((await $.v(C, "Frmother")), "Caption", "Fərdi qəza(zərər)");
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
        await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", false);
      } else {
        await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", true);
      }
      await $.mcall((await $.v(C, "Frmother")), "ShowModal", []);
    }
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 13)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["c_type"])), "AsInteger")), 13)))))) {
    {
      const $t13 = (await $.v(C, "DmLoss"));
      const $t14 = (await $.wv([$t13], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t13, $t14], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSMES"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmAllLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Open", []);
    await $.mset((await $.mv((await $.v(C, "Frmother")), "Edit1")), "Text", "Məsuliyyət");
    await $.mset((await $.v(C, "Frmother")), "Caption", "Məsuliyyət(zərər)");
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", true);
    }
    await $.mcall((await $.v(C, "Frmother")), "ShowModal", []);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["c_type"])), "AsInteger")), 1)))))) {
    {
      const $t15 = (await $.v(C, "DmLoss"));
      const $t16 = (await $.wv([$t15], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t15, $t16], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSFQ"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmAllLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Open", []);
    await $.mset((await $.mv((await $.v(C, "Frmother")), "Edit1")), "Text", "Fərdi qəza");
    await $.mset((await $.v(C, "Frmother")), "Caption", "Fərdi qəza(zərər)");
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", true);
    }
    await $.mcall((await $.v(C, "Frmother")), "ShowModal", []);
  }
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 8)))) {
    {
      const $t17 = (await $.v(C, "DmLoss"));
      const $t18 = (await $.wv([$t17], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t17, $t18], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSYUK"]], C)));
    }
    {
      const $t19 = (await $.v(C, "DmLoss"));
      await $.mcall((await $.wv([$t19], "DSClaimCargo", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t19], "DSClaimCargo", C, false)), "SetVariable", ["pdepid", (await $.mv((await $.mcall((await $.wv([$t19], "ODSClaimDescription", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t19], "DSClaimCargo", C, false)), "Open", []);
      await $.mcall((await $.wv([$t19], "DSClaimCargo", C, false)), "Edit", []);
    }
    await $.mset((await $.mv((await $.v(C, "FrmCargo_claim")), "XFRadioGroup1")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["subraqasiya"])), "AsInteger")));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargo_claim")), "XFButton1")), "Enabled", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmCargo_claim")), "XFButton1")), "Enabled", true);
    }
    await $.mcall((await $.v(C, "FrmCargo_claim")), "ShowModal", []);
  }
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 21)))) {
    {
      const $t20 = (await $.v(C, "DmLoss"));
      const $t21 = (await $.wv([$t20], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t20, $t21], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSSEYAHET"]], C)));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["subraqasiya"])), "AsInteger")), 0))) {
      await $.mset((await $.mv((await $.v(C, "FrmTravel")), "XFRadioGroup1")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["subraqasiya"])), "AsInteger")));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.mv((await $.v(C, "FrmTravel")), "XFButton1")), "Enabled", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmTravel")), "XFButton1")), "Enabled", true);
    }
    await $.mcall((await $.v(C, "FrmTravel")), "ShowModal", []);
  }
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 3)))) {
    {
      const $t22 = (await $.v(C, "DmLoss"));
      const $t23 = (await $.wv([$t22], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t22, $t23], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSEMLAK"]], C)));
    }
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "FrmProperty")), "XFGroupBox1")), "Visible")), true))) {
      await $.mset((await $.mv((await $.v(C, "FrmProperty")), "XFRadioGroup1")), "ItemIndex", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["subraqasiya"])), "AsInteger")));
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.mv((await $.v(C, "FrmProperty")), "XFButton1")), "Enabled", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmProperty")), "XFButton1")), "Enabled", true);
    }
    await $.mcall((await $.v(C, "FrmProperty")), "ShowModal", []);
  }
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 2)))) {
    {
      const $t24 = (await $.v(C, "DmLoss"));
      const $t25 = (await $.wv([$t24], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t24, $t25], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSTIBB"]], C)));
    }
    {
      const $t26 = (await $.v(C, "DmLoss"));
      await $.mcall((await $.wv([$t26], "DSclaimmed", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t26], "DSclaimmed", C, false)), "SetVariable", ["pdepid", (await $.mv((await $.mcall((await $.wv([$t26], "ODSClaimDescription", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t26], "DSclaimmed", C, false)), "Open", []);
      await $.mcall((await $.wv([$t26], "DSclaimmed", C, false)), "Edit", []);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.mv((await $.v(C, "frmMedloss")), "XFButton1")), "Enabled", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "frmMedloss")), "XFButton1")), "Enabled", true);
    }
    await $.mcall((await $.v(C, "frmMedloss")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFPanel5")), "Visible")), true))) {
    await $.mset((await $.v(C, "XFPanel5")), "Visible", false);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLins_type")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLCust")), "Close", []);
  } else {
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLins_type")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLCust")), "Open", []);
    await $.mset((await $.v(C, "XFPanel5")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    {
      const $t27 = (await $.v(C, "DmLoss"));
      const $t28 = (await $.wv([$t27], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t27, $t28], "CallProcedure", ["checkadvancedobjectaccess", ["LOSSREFUSAL"]], C)));
    }
  }
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.v(C, "XFRadioButton1")), "Checked")), true)), async () => ($.eq((await $.mv((await $.v(C, "XFRadioButton3")), "Checked")), true)))))) {
    {
      const $t29 = (await $.v(C, "DmLoss"));
      const $t30 = (await $.wv([$t29], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t29, $t30], "CallProcedure", ["checkadvancedobjectaccess", ["LOSSRESEARCH"]], C)));
    }
  }
  {
    const $t31 = (await $.v(C, "DmLoss"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.wv([$t31], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t31], "showmessage", ["Heç bir məlumat seçlməyib!"], C)));
      return L0.result;
    }
    if ($.truthy((await $.mv((await $.wv([$t31], "XFRadioButton1", C, false)), "Checked")))) {
      await $.wset([$t31], "status", 0, { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
      await $.mset((await $.wv([$t31], "XFRadioButton3", C, false)), "Checked", (await $.wv([$t31], "false", C, false)));
      await $.mset((await $.wv([$t31], "XFGroupBox2", C, false)), "Color", (await $.wv([$t31], "clGray", C, false)));
      await $.mset((await $.wv([$t31], "XFGroupBox1", C, false)), "Enabled", (await $.wv([$t31], "true", C, false)));
    }
    if ($.truthy((await $.mv((await $.wv([$t31], "XFRadioButton2", C, false)), "Checked")))) {
      await $.mset((await $.wv([$t31], "XFRadioButton3", C, false)), "Checked", (await $.wv([$t31], "false", C, false)));
      await $.mcall((await $.mv((await $.wv([$t31], "DmLoss", C, false)), "DSPaymentLossReal")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t31], "DmLoss", C, false)), "DSPaymentLossReal")), "SetVariable", ["dpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t31], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
      await $.mcall((await $.mv((await $.wv([$t31], "DmLoss", C, false)), "DSPaymentLossReal")), "open", []);
      if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t31], "DmLoss", C, false)), "DSPaymentLossReal")), "RecordCount")), 0))) {
        await $.stmt((await $.wcall([$t31], "showmessage", ["Diqqət! Bu zərər tam ödənildiyindən statusunu dəyismək olmaz!!"], C)));
        return L0.result;
      }
      await $.wset([$t31], "status", 1, { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
      await $.wset([$t31], "lossstatus", 0, C);
    }
    if ($.truthy((await $.mv((await $.wv([$t31], "XFRadioButton3", C, false)), "Checked")))) {
      await $.wset([$t31], "lossstatus", 2, C);
      await $.wset([$t31], "status", 2, { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true });
      await $.mset((await $.wv([$t31], "XFGroupBox2", C, false)), "Color", (await $.wv([$t31], "clGray", C, false)));
      await $.mset((await $.wv([$t31], "XFGroupBox1", C, false)), "Enabled", (await $.wv([$t31], "true", C, false)));
    }
    await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t31], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t31], "XFRadioButton2", C, false)), "Checked")), (await $.wv([$t31], "true", C, false))))) {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1)), async () => ($.ne((await $.mv((await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.wv([$t31], "DmLoss", C, false)), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")))))))) {
        await $.stmt((await $.wcall([$t31], "showmessage", ["Diqqət!Sistem tarixindən fərqli tarixdə təsdiqlənmiş zərəri imtina statusuna keçirmək olmaz !"], C)));
        return L0.result;
      }
      await $.mset((await $.mv((await $.wv([$t31], "FrmAllLoss", C, false)), "CheckBox8")), "Checked", (await $.wv([$t31], "false", C, false)));
      await $.stmt((await $.mcall((await $.wv([$t31], "FrmAllLoss", C, false)), "XFButton1Click", [(await $.wv([$t31], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))])));
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t31], "XFRadioButton2", C, false)), "Checked")), (await $.wv([$t31], "false", C, false))))) {
      await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "RefreshRecord", []);
      await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "Edit", []);
      await $.mset((await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "FieldByName", ["STATUS"])), "AsInteger", (await $.wv([$t31], "status", { get: async () => L0["status"], set: async (v) => { L0["status"] = v; }, local: true }, false)));
      await $.mset((await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "FieldByName", ["DEP_ID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t31], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
      await $.mcall((await $.wv([$t31], "DSclaim_status", C, false)), "Post", []);
    }
    await $.mcall((await $.mv((await $.wv([$t31], "DmLoss", C, false)), "DSALLMain")), "RefreshRecord", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XFButton6Click", async function XFButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "forma4": 0, "qarsi_teref_qiym_cavab": 0, "yoxlama": 0, "ok_verilib": 0, "bankin_cavabi": 0, "qusur_akti": 0, "muraciet": 0, "tesdiq": 0, "forma4dat": 0, "qarsi_teref_qiym_cavabdat": 0, "yoxlamadat": 0, "ok_verilibdat": 0, "bankin_cavabidat": 0, "qusur_aktidat": 0, "muracietdat": 0, "tesdiqdat": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "lossimtina", 0);
  await $.set(C, "losstesdiq", 0);
  {
    const $t32 = (await $.v(C, "DmLoss"));
    const $t33 = (await $.wv([$t32], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t32, $t33], "CallProcedure", ["checkadvancedobjectaccess", ["LOSSSTAGE"]], C)));
  }
  {
    const $t34 = (await $.v(C, "DmLoss"));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.wv([$t34], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t34], "showmessage", ["Heç bir məlumat seçlməyib!"], C)));
      return L0.result;
    }
    await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t34], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "Open", []);
    await $.mcall((await $.wv([$t34], "ODSClaimDescription", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t34], "ODSClaimDescription", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t34], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t34], "ODSClaimDescription", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t34], "CheckBox1", C, false)), "Checked")), (await $.wv([$t34], "true", C, false))))) {
      await $.mset((await $.wv([$t34], "CheckBox1", C, false)), "Color", (await $.wv([$t34], "clGray", C, false)));
      await $.wset([$t34], "Forma4", 1, { get: async () => L0["forma4"], set: async (v) => { L0["forma4"] = v; }, local: true });
      await $.wset([$t34], "Forma4dat", (await $.mv((await $.wv([$t34], "DateTimePicker5", C, false)), "DateTime")), { get: async () => L0["forma4dat"], set: async (v) => { L0["forma4dat"] = v; }, local: true });
    } else {
      await $.mset((await $.wv([$t34], "CheckBox1", C, false)), "Color", (await $.wv([$t34], "clRed", C, false)));
      await $.wset([$t34], "Forma4", 0, { get: async () => L0["forma4"], set: async (v) => { L0["forma4"] = v; }, local: true });
      await $.wset([$t34], "Forma4dat", (await $.wcall([$t34], "strtodate", ["30.12.1899"], C)), { get: async () => L0["forma4dat"], set: async (v) => { L0["forma4dat"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t34], "CheckBox2", C, false)), "Checked")), (await $.wv([$t34], "true", C, false))))) {
      await $.mset((await $.wv([$t34], "CheckBox2", C, false)), "Color", (await $.wv([$t34], "clGray", C, false)));
      await $.wset([$t34], "Bankin_cavabi", 1, { get: async () => L0["bankin_cavabi"], set: async (v) => { L0["bankin_cavabi"] = v; }, local: true });
      await $.wset([$t34], "Bankin_cavabidat", (await $.mv((await $.wv([$t34], "DateTimePicker1", C, false)), "DateTime")), { get: async () => L0["bankin_cavabidat"], set: async (v) => { L0["bankin_cavabidat"] = v; }, local: true });
    } else {
      await $.mset((await $.wv([$t34], "CheckBox2", C, false)), "Color", (await $.wv([$t34], "clRed", C, false)));
      await $.wset([$t34], "Bankin_cavabi", 0, { get: async () => L0["bankin_cavabi"], set: async (v) => { L0["bankin_cavabi"] = v; }, local: true });
      await $.wset([$t34], "Bankin_cavabidat", (await $.wcall([$t34], "strtodate", ["30.12.1899"], C)), { get: async () => L0["bankin_cavabidat"], set: async (v) => { L0["bankin_cavabidat"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t34], "CheckBox3", C, false)), "Checked")), (await $.wv([$t34], "true", C, false))))) {
      await $.mset((await $.wv([$t34], "CheckBox3", C, false)), "Color", (await $.wv([$t34], "clGray", C, false)));
      await $.wset([$t34], "Qarsi_teref_qiym_cavab", 1, { get: async () => L0["qarsi_teref_qiym_cavab"], set: async (v) => { L0["qarsi_teref_qiym_cavab"] = v; }, local: true });
      await $.wset([$t34], "Qarsi_teref_qiym_cavabdat", (await $.mv((await $.wv([$t34], "DateTimePicker6", C, false)), "DateTime")), { get: async () => L0["qarsi_teref_qiym_cavabdat"], set: async (v) => { L0["qarsi_teref_qiym_cavabdat"] = v; }, local: true });
    } else {
      await $.mset((await $.wv([$t34], "CheckBox3", C, false)), "Color", (await $.wv([$t34], "clRed", C, false)));
      await $.wset([$t34], "Qarsi_teref_qiym_cavab", 0, { get: async () => L0["qarsi_teref_qiym_cavab"], set: async (v) => { L0["qarsi_teref_qiym_cavab"] = v; }, local: true });
      await $.wset([$t34], "Qarsi_teref_qiym_cavabdat", (await $.wcall([$t34], "strtodate", ["30.12.1899"], C)), { get: async () => L0["qarsi_teref_qiym_cavabdat"], set: async (v) => { L0["qarsi_teref_qiym_cavabdat"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t34], "CheckBox4", C, false)), "Checked")), (await $.wv([$t34], "true", C, false))))) {
      await $.mset((await $.wv([$t34], "CheckBox4", C, false)), "Color", (await $.wv([$t34], "clGray", C, false)));
      await $.wset([$t34], "Qusur_Akti", 1, { get: async () => L0["qusur_akti"], set: async (v) => { L0["qusur_akti"] = v; }, local: true });
      await $.wset([$t34], "Qusur_Aktidat", (await $.mv((await $.wv([$t34], "DateTimePicker2", C, false)), "DateTime")), { get: async () => L0["qusur_aktidat"], set: async (v) => { L0["qusur_aktidat"] = v; }, local: true });
    } else {
      await $.mset((await $.wv([$t34], "CheckBox4", C, false)), "Color", (await $.wv([$t34], "clRed", C, false)));
      await $.wset([$t34], "Qusur_Akti", 0, { get: async () => L0["qusur_akti"], set: async (v) => { L0["qusur_akti"] = v; }, local: true });
      await $.wset([$t34], "Qusur_Aktidat", (await $.wcall([$t34], "strtodate", ["30.12.1899"], C)), { get: async () => L0["qusur_aktidat"], set: async (v) => { L0["qusur_aktidat"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t34], "CheckBox5", C, false)), "Checked")), (await $.wv([$t34], "true", C, false))))) {
      await $.mset((await $.wv([$t34], "CheckBox5", C, false)), "Color", (await $.wv([$t34], "clGray", C, false)));
      await $.wset([$t34], "Yoxlama", 1, { get: async () => L0["yoxlama"], set: async (v) => { L0["yoxlama"] = v; }, local: true });
      await $.wset([$t34], "Yoxlamadat", (await $.mv((await $.wv([$t34], "DateTimePicker7", C, false)), "DateTime")), { get: async () => L0["yoxlamadat"], set: async (v) => { L0["yoxlamadat"] = v; }, local: true });
    } else {
      await $.mset((await $.wv([$t34], "CheckBox5", C, false)), "Color", (await $.wv([$t34], "clRed", C, false)));
      await $.wset([$t34], "Yoxlama", 0, { get: async () => L0["yoxlama"], set: async (v) => { L0["yoxlama"] = v; }, local: true });
      await $.wset([$t34], "Yoxlamadat", (await $.wcall([$t34], "strtodate", ["30.12.1899"], C)), { get: async () => L0["yoxlamadat"], set: async (v) => { L0["yoxlamadat"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t34], "CheckBox6", C, false)), "Checked")), (await $.wv([$t34], "true", C, false))))) {
      await $.wset([$t34], "Muraciet", 1, { get: async () => L0["muraciet"], set: async (v) => { L0["muraciet"] = v; }, local: true });
      await $.mset((await $.wv([$t34], "CheckBox6", C, false)), "Color", (await $.wv([$t34], "clGray", C, false)));
      await $.wset([$t34], "Muracietdat", (await $.mv((await $.wv([$t34], "DateTimePicker3", C, false)), "DateTime")), { get: async () => L0["muracietdat"], set: async (v) => { L0["muracietdat"] = v; }, local: true });
    } else {
      await $.wset([$t34], "Muraciet", 0, { get: async () => L0["muraciet"], set: async (v) => { L0["muraciet"] = v; }, local: true });
      await $.mset((await $.wv([$t34], "CheckBox6", C, false)), "Color", (await $.wv([$t34], "clRed", C, false)));
      await $.wset([$t34], "Muracietdat", (await $.wcall([$t34], "strtodate", ["30.12.1899"], C)), { get: async () => L0["muracietdat"], set: async (v) => { L0["muracietdat"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t34], "CheckBox7", C, false)), "Checked")), (await $.wv([$t34], "true", C, false))))) {
      await $.wset([$t34], "OK_verilib", 1, { get: async () => L0["ok_verilib"], set: async (v) => { L0["ok_verilib"] = v; }, local: true });
      await $.mset((await $.wv([$t34], "CheckBox7", C, false)), "Color", (await $.wv([$t34], "clGray", C, false)));
      await $.wset([$t34], "OK_verilibdat", (await $.mv((await $.wv([$t34], "DateTimePicker8", C, false)), "DateTime")), { get: async () => L0["ok_verilibdat"], set: async (v) => { L0["ok_verilibdat"] = v; }, local: true });
    } else {
      await $.wset([$t34], "OK_verilib", 0, { get: async () => L0["ok_verilib"], set: async (v) => { L0["ok_verilib"] = v; }, local: true });
      await $.mset((await $.wv([$t34], "CheckBox7", C, false)), "Color", (await $.wv([$t34], "clRed", C, false)));
      await $.wset([$t34], "OK_verilibdat", (await $.wcall([$t34], "strtodate", ["30.12.1899"], C)), { get: async () => L0["ok_verilibdat"], set: async (v) => { L0["ok_verilibdat"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.wv([$t34], "CheckBox8", C, false)), "Checked")), (await $.wv([$t34], "true", C, false))))) {
      if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t34], "FrmAllLoss", C, false)), "CheckBox7")), "Checked")), (await $.wv([$t34], "false", C, false))))) {
        await $.stmt((await $.wcall([$t34], "showmessage", ["Diqqət! \"OK verilib\"  statusu seçilmədən \"Təsdiq\" statusu seçilə bilməz!"], C)));
        await $.mset((await $.wv([$t34], "FrmMainLoss", C, false)), "Tesdiq", 0);
        await $.mset((await $.mv((await $.wv([$t34], "FrmMainLoss", C, false)), "CheckBox8")), "Color", (await $.wv([$t34], "clRed", C, false)));
        await $.mset((await $.wv([$t34], "FrmMainLoss", C, false)), "Tesdiqdat", (await $.wcall([$t34], "strtodate", ["30.12.1899"], C)));
        await $.mset((await $.mv((await $.wv([$t34], "FrmMainLoss", C, false)), "CheckBox8")), "Checked", (await $.wv([$t34], "false", C, false)));
        return L0.result;
      }
      if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t34], "FrmAllLoss", C, false)), "XFRadioButton2")), "Checked")), (await $.wv([$t34], "true", C, false))))) {
        await $.wset([$t34], "lossoperatin", 1, C);
      }
      if ($.truthy($.eq((await $.mv((await $.wv([$t34], "FrmCargo_claim", C, false)), "yuktesdiq")), 0))) {
        await $.stmt((await $.mcall((await $.wv([$t34], "FrmAllLoss", C, false)), "XFButton1Click", [(await $.wv([$t34], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))])));
      }
    } else {
      await $.wset([$t34], "lossoperatin", 0, C);
      await $.wset([$t34], "Tesdiq", 0, { get: async () => L0["tesdiq"], set: async (v) => { L0["tesdiq"] = v; }, local: true });
      await $.mset((await $.wv([$t34], "CheckBox8", C, false)), "Color", (await $.wv([$t34], "clRed", C, false)));
      await $.wset([$t34], "Tesdiqdat", (await $.wcall([$t34], "strtodate", ["30.12.1899"], C)), { get: async () => L0["tesdiqdat"], set: async (v) => { L0["tesdiqdat"] = v; }, local: true });
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.wv([$t34], "DmLoss", C, false)), "DSclaim_status")), "FieldByName", ["STAGE_TESDIQ"])), "AsInteger")), 0))) {
      await $.wset([$t34], "losstesdiq", 0, C);
    } else {
      await $.wset([$t34], "losstesdiq", 1, C);
    }
    await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "Edit", []);
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_forma4"])), "AsInteger", (await $.wv([$t34], "Forma4", { get: async () => L0["forma4"], set: async (v) => { L0["forma4"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_bankin_cavabi"])), "AsInteger", (await $.wv([$t34], "Bankin_cavabi", { get: async () => L0["bankin_cavabi"], set: async (v) => { L0["bankin_cavabi"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_qarsi_teref_qiymcavab"])), "AsInteger", (await $.wv([$t34], "Qarsi_teref_qiym_cavab", { get: async () => L0["qarsi_teref_qiym_cavab"], set: async (v) => { L0["qarsi_teref_qiym_cavab"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_qusur_akti"])), "AsInteger", (await $.wv([$t34], "Qusur_Akti", { get: async () => L0["qusur_akti"], set: async (v) => { L0["qusur_akti"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_yoxlama"])), "AsInteger", (await $.wv([$t34], "Yoxlama", { get: async () => L0["yoxlama"], set: async (v) => { L0["yoxlama"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_muraciet"])), "AsInteger", (await $.wv([$t34], "Muraciet", { get: async () => L0["muraciet"], set: async (v) => { L0["muraciet"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_ok_verilib"])), "AsInteger", (await $.wv([$t34], "OK_verilib", { get: async () => L0["ok_verilib"], set: async (v) => { L0["ok_verilib"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_tesdiq"])), "AsInteger", (await $.wv([$t34], "Tesdiq", { get: async () => L0["tesdiq"], set: async (v) => { L0["tesdiq"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_forma4_dat"])), "AsDateTime", (await $.wv([$t34], "Forma4dat", { get: async () => L0["forma4dat"], set: async (v) => { L0["forma4dat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_bankin_cavabi_dat"])), "AsDateTime", (await $.wv([$t34], "Bankin_cavabidat", { get: async () => L0["bankin_cavabidat"], set: async (v) => { L0["bankin_cavabidat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_qarsi_teref_qcavab_dat"])), "AsDateTime", (await $.wv([$t34], "Qarsi_teref_qiym_cavabdat", { get: async () => L0["qarsi_teref_qiym_cavabdat"], set: async (v) => { L0["qarsi_teref_qiym_cavabdat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_qusur_akti_dat"])), "AsDateTime", (await $.wv([$t34], "Qusur_Aktidat", { get: async () => L0["qusur_aktidat"], set: async (v) => { L0["qusur_aktidat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_yoxlama_dat"])), "AsDateTime", (await $.wv([$t34], "Yoxlamadat", { get: async () => L0["yoxlamadat"], set: async (v) => { L0["yoxlamadat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_muraciet_dat"])), "AsDateTime", (await $.wv([$t34], "Muracietdat", { get: async () => L0["muracietdat"], set: async (v) => { L0["muracietdat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_ok_verilib_dat"])), "AsDateTime", (await $.wv([$t34], "OK_verilibdat", { get: async () => L0["ok_verilibdat"], set: async (v) => { L0["ok_verilibdat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime", (await $.wv([$t34], "Tesdiqdat", { get: async () => L0["tesdiqdat"], set: async (v) => { L0["tesdiqdat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["DEP_ID"])), "AsInteger", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t34], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
    await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "Post", []);
    await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "RefreshRecord", []);
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.wv([$t34], "DSclaim_status", C, false)), "FieldByName", ["trid"])), "AsInteger")), 0))) {
      if ($.truthy(($.eq((await $.mv((await $.wv([$t34], "CheckBox8", C, false)), "Checked")), (await $.wv([$t34], "false", C, false)))))) {
        await $.mcall((await $.mv((await $.wv([$t34], "DmLoss", C, false)), "DSPaymentLossReal")), "Close", []);
        await $.stmt((await $.mcall((await $.mv((await $.wv([$t34], "DmLoss", C, false)), "DSPaymentLossReal")), "SetVariable", ["dpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t34], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
        await $.mcall((await $.mv((await $.wv([$t34], "DmLoss", C, false)), "DSPaymentLossReal")), "open", []);
        if ($.truthy($.ne((await $.mv((await $.mv((await $.wv([$t34], "DmLoss", C, false)), "DSPaymentLossReal")), "RecordCount")), 0))) {
          await $.stmt((await $.wcall([$t34], "showmessage", ["Diqqət! Bu zərər tam ödənildiyindən statusunu dəyismək olmaz!!"], C)));
          return L0.result;
        }
        if ($.truthy($.eq((await $.mcall((await $.mv((await $.wv([$t34], "DmLoss", C, false)), "OPCOMMON")), "CallIntegerFunction", ["cancelloss", [(await $.wv([$t34], "contactid", C, false)), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t34], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]])), 1))) {
          await $.stmt((await $.wcall([$t34], "showmessage", ["Zərər aid emeliyyatlar silindi!"], C)));
        }
      }
    }
  }
  await $.set(C, "lossimtina", 0);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "RefreshRecord", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XFButton7Click", async function XFButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t35 = (await $.v(C, "ExcelExport"));
    await $.stmt($.wcall([$t35], "Connect", [], C));
    await $.stmt((await $.wcall([$t35], "ExportDataset", [(await $.mv((await $.mv((await $.wv([$t35], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "Zərərlər.", (await $.wv([$t35], "True", C, false)), (await $.wv([$t35], "false", C, false))], C)));
    await $.stmt($.wcall([$t35], "Disconnect", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XFButton8Click", async function XFButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActionFilterExecute", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XFButton9Click", async function XFButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t36 = (await $.v(C, "DmLoss"));
    const $t37 = (await $.wv([$t36], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t36, $t37], "CallProcedure", ["checkadvancedobjectaccess", ["SEEPAYMENTLOSS"]], C)));
  }
  await $.set(C, "plossid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["Paymentloss.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "XFRadioButton2Click", async function XFRadioButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true))) {
    await $.mset((await $.v(C, "XFGroupBox1")), "Enabled", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "Zrrbarderosu1Click", async function Zrrbarderosu1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t38 = (await $.v(C, "DmLoss"));
    const $t39 = (await $.wv([$t38], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t38, $t39], "CallProcedure", ["checkadvancedobjectaccess", ["SEEBARDERO_LOSS"]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSReins")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSReins")), "SetVariable", ["pcid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSReins")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSReins")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təkrarsığortaya göndərilmiş müqavilə üçün Zərər barderosu yığmaq olar!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSlosspayment")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSlosspayment")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSlosspayment")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSlosspayment")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız ödənmiş zərərlər üçün Zərər barderosu yığmaq olar!"])));
    return L0.result;
  }
  await $.set(C, "commandepid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")));
  await $.set(C, "Bordero_type", "Zerer");
  await $.set(C, "contactid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["CID"])), "AsInteger")));
  await $.stmt((await $.call(C, "loadPlugin", ["reinsurance.bpl", "loss1"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAllLoss", "ActionFilterExecute", async function ActionFilterExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "p_instype": '', "p_polis": '', "p_d_status": '', "p_claim_dat": '', "p_claimpay_dat": '', "p_name": '', "p_empl_acc": '', "p_reins": '', "p_sub": '', "p_masin": '', "filterstr": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["booleanprefix"] = " AND ";
  L0["p_instypefilter"] = "(ins_ins.id=%d)";
  L0["p_polisno"] = "(c.policy_num=%d)";
  L0["namefilter"] = "(ins_cust.cust_id=%d)";
  L0["p_status"] = "(c_s.STATUS=%d)";
  L0["p_empl_accfilter"] = "(c_d.EMPL_ACC=%d)";
  L0["p_sub_filter"] = "(c_d.SUBRAQASIYA=%d)";
  L0["p_masin_no"] = "im.insuredstatenum=%d";
  L0["checkfiltered"] = $.fn(async function CheckFiltered(p0, p1, p2) {
  const L1 = {"ischecked": $.copyArg(p0), "filterstr": $.copyArg(p1), "args": $.copyArg(p2), result: ''};
  await $.fixArgs(L1, ["ischecked", "filterstr", "args"]);
  L1["result"] = "";
  if ($.truthy(L1["ischecked"])) {
    L1["result"] = (await $.call(C, "Format", [L1["filterstr"], L1["args"]]));
  }
  return L1.result;
});
  L0["filterstr"] = "";
  L0["p_instype"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), L0["p_instypefilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox1")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]]));
  L0["p_d_status"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox3")), "Checked")), L0["p_status"], [(await $.mv((await $.v(C, "ComboBox1")), "ItemIndex"))]]));
  L0["p_name"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox4")), "Checked")), L0["namefilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox3")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]]));
  L0["p_empl_acc"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox5")), "Checked")), L0["p_empl_accfilter"], [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboBox2")), "ListSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))]]));
  L0["p_sub"] = (await $.callv(L0["checkfiltered"], [(await $.mv((await $.v(C, "XFCheckBox8")), "Checked")), L0["p_sub_filter"], [(await $.mv((await $.v(C, "ComboBox3")), "ItemIndex"))]]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), true))) {
    L0["p_polis"] = $.add($.add($.add(" c.policy_num=", "'"), (await $.mv((await $.v(C, "Edit1")), "Text"))), "'");
  } else {
    L0["p_polis"] = "";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox9")), "Checked")), true))) {
    L0["p_masin"] = $.add($.add($.add("im.insuredstatenum=", "'"), (await $.mv((await $.v(C, "Edit2")), "Text"))), "'");
  } else {
    L0["p_masin"] = "";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox6")), "Checked")), true))) {
    L0["p_claim_dat"] = $.add($.add($.add($.add($.add($.add($.add($.add(" TO_DATE(c_d.claim_date,'dd.MM.yyyy')", " between  "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker10")), "DateTime"))]))), "'"), " and "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker11")), "DateTime"))]))), "'");
  } else {
    L0["p_claim_dat"] = "";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioButton4")), "Checked")), true))) {
    L0["p_claimpay_dat"] = $.add($.add($.add($.add($.add($.add($.add($.add($.add(" c_d.id in ( select dep_id from ins_claim_payment ins_c_p where TO_DATE(ins_c_p.paydate,'dd.MM.yyyy')", " between  "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker10")), "DateTime"))]))), "'"), " and "), "'"), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker11")), "DateTime"))]))), "'"), ")");
  } else {
    L0["p_claimpay_dat"] = "";
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox7")), "Checked")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox2")), "ItemIndex")), 0))) {
      L0["p_reins"] = " c.id in  (select cid from ins_reinsurance)";
    } else {
      L0["p_reins"] = " c.id in  ((select id from ins_contracts minus select id from ins_contracts where id in  (select cid from ins_reinsurance)))";
    }
  } else {
    L0["p_reins"] = "";
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_instype"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_instype"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_polis"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_polis"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox9")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_masin"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_masin"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox3")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_d_status"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_d_status"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox4")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_name"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_name"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox6")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_claim_dat"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_claim_dat"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFRadioButton4")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_claimpay_dat"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_claimpay_dat"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox5")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_empl_acc"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_empl_acc"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox7")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_reins"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_reins"]);
    }
  }
  if ($.truthy((await $.mv((await $.v(C, "XFCheckBox8")), "Checked")))) {
    if ($.truthy($.eq(L0["filterstr"], ""))) {
      L0["filterstr"] = L0["p_sub"];
    } else {
      L0["filterstr"] = $.add($.add(L0["filterstr"], L0["booleanprefix"]), L0["p_sub"]);
    }
  }
  L0["filterstr"] = $.add(" and ", L0["filterstr"]);
  L0["filterstr"] = $.add((await $.v(C, "FilterStr1")), L0["filterstr"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "sql")), "Clear", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "sql")), "Text", L0["filterstr"]);
  await $.mset((await $.v(C, "memo1")), "Text", (await $.mv((await $.mv((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "sql")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
