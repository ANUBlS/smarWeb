// Generated from FrmMainLossImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmMainLossImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Grids", "XDBGrids", "db", "oracle", "ComCtrls", "StdVcl", "DBCtrls", "Menus", "ImgList", "ComObj", "CommanParametrs", "sboapiDataModuleImpl", "SBTranslateProc", "DmLossImpl", "FrmAddLossImpl", "FrmotherImpl", "FrmCargo_claimimpl", "frmMedlossImpl", "FrmAllLossImpl", "FrmTravelImpl", "FrmPropertyImpl", "frmstatusimpl"]);
  const C = [U];
  U.defClass("TFrmMainLoss", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xdbgrid1": {"name": "XDBGrid1", "type": "TXDBGrid"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "checkbox7": {"name": "CheckBox7", "type": "TCheckBox"}, "checkbox8": {"name": "CheckBox8", "type": "TCheckBox"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfbutton6": {"name": "XFButton6", "type": "TXFButton"}, "datetimepicker4": {"name": "DateTimePicker4", "type": "TDateTimePicker"}, "datetimepicker8": {"name": "DateTimePicker8", "type": "TDateTimePicker"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "datetimepicker5": {"name": "DateTimePicker5", "type": "TDateTimePicker"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "datetimepicker6": {"name": "DateTimePicker6", "type": "TDateTimePicker"}, "checkbox4": {"name": "CheckBox4", "type": "TCheckBox"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "checkbox5": {"name": "CheckBox5", "type": "TCheckBox"}, "datetimepicker7": {"name": "DateTimePicker7", "type": "TDateTimePicker"}, "checkbox6": {"name": "CheckBox6", "type": "TCheckBox"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "mainzerer": {"name": "MainZerer", "type": "TPopupMenu"}, "yeni1": {"name": "Yeni1", "type": "TMenuItem"}, "redakt1": {"name": "Redakt1", "type": "TMenuItem"}, "silmk1": {"name": "Silmk1", "type": "TMenuItem"}, "n1": {"name": "N1", "type": "TMenuItem"}, "n2": {"name": "N2", "type": "TMenuItem"}, "dm1": {"name": "dm1", "type": "TMenuItem"}, "n3": {"name": "N3", "type": "TMenuItem"}, "xfradiobutton3": {"name": "XFRadioButton3", "type": "TXFCheckBox"}, "n4": {"name": "N4", "type": "TMenuItem"}, "yenilmk1": {"name": "Yenilmk1", "type": "TMenuItem"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfbutton8": {"name": "XFButton8", "type": "TXFButton"}, "xfbutton7": {"name": "XFButton7", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "combobox1": {"name": "ComboBox1", "type": "TComboBox"}, "xfbutton9": {"name": "XFButton9", "type": "TXFButton"}, "xfbutton10": {"name": "XFButton10", "type": "TXFButton"}, "imagelist2": {"name": "ImageList2", "type": "TImageList"}, "ptype": {"name": "ptype", "type": "String"}, "op_type": {"name": "op_type", "type": "String"}, "frmname": {"name": "frmname", "type": "String"}, "dep_id": {"name": "dep_id", "type": "integer"}, "forma4": {"name": "Forma4", "type": "integer"}, "qarsi_teref_qiym_cavab": {"name": "Qarsi_teref_qiym_cavab", "type": "integer"}, "yoxlama": {"name": "Yoxlama", "type": "integer"}, "ok_verilib": {"name": "OK_verilib", "type": "integer"}, "bankin_cavabi": {"name": "Bankin_cavabi", "type": "integer"}, "qusur_akti": {"name": "Qusur_Akti", "type": "integer"}, "muraciet": {"name": "Muraciet", "type": "integer"}, "tesdiq": {"name": "Tesdiq", "type": "integer"}, "status": {"name": "status", "type": "integer"}, "status_r": {"name": "status_r", "type": "integer"}, "forma4dat": {"name": "Forma4dat", "type": "Tdate"}, "qarsi_teref_qiym_cavabdat": {"name": "Qarsi_teref_qiym_cavabdat", "type": "Tdate"}, "yoxlamadat": {"name": "Yoxlamadat", "type": "Tdate"}, "ok_verilibdat": {"name": "OK_verilibdat", "type": "Tdate"}, "bankin_cavabidat": {"name": "Bankin_cavabidat", "type": "Tdate"}, "qusur_aktidat": {"name": "Qusur_Aktidat", "type": "Tdate"}, "muracietdat": {"name": "Muracietdat", "type": "Tdate"}, "tesdiqdat": {"name": "Tesdiqdat", "type": "Tdate"}, "pteyinat": {"name": "pteyinat", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FrmMainLoss", null, "TFrmMainLoss");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], ""))) {
    await $.mcall((await $.v(C, "FrmMainLoss")), "ShowModal", []);
  }
  if ($.truthy($.eq(L0["s"], "AllLost"))) {
    await $.mcall((await $.v(C, "FrmAllLoss")), "showmodal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmMainLoss", "CheckBox8Click", async function CheckBox8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ComboBox1")), "Items")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmMainLoss", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DmLoss", (await $.mcall((await $.v(C, "TDmLoss")), "create", [Self])));
  await $.set(C, "FrmAllLoss", (await $.mcall((await $.v(C, "TFrmAllLoss")), "Create", [Self])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "Open", []);
  await $.set(C, "FilterStr1", (await $.mv((await $.mv((await $.mv((await $.v(C, "DmLoss")), "DSALLMain")), "sql")), "text")));
  await $.set(C, "frmstatus", (await $.mcall((await $.v(C, "Tfrmstatus")), "Create", [Self])));
  await $.set(C, "FrmAddLoss", (await $.mcall((await $.v(C, "TFrmAddLoss")), "create", [Self])));
  await $.set(C, "Frmother", (await $.mcall((await $.v(C, "TFrmother")), "create", [Self])));
  await $.set(C, "FrmCargo_claim", (await $.mcall((await $.v(C, "TFrmCargo_claim")), "create", [Self])));
  await $.set(C, "frmMedloss", (await $.mcall((await $.v(C, "TfrmMedloss")), "create", [Self])));
  await $.set(C, "FrmTravel", (await $.mcall((await $.v(C, "TFrmTravel")), "Create", [Self])));
  await $.set(C, "FrmProperty", (await $.mcall((await $.v(C, "TFrmProperty")), "Create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  await $.set(C, "contactid", (await $.v(C, "commoncid")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "ComboBox1")), "Items")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmMainLoss", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "status_r", 0);
  await $.mset((await $.v(C, "FrmCargo_claim")), "yuktesdiq", 0);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSmesuli")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSmesuli")), "SetVariable", ["pcid", (await $.v(C, "commoncid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSmesuli")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSFqeza")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSFqeza")), "SetVariable", ["pcid", (await $.v(C, "commoncid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSFqeza")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "SetVariable", ["cid", (await $.v(C, "commoncid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "Open", []);
  await $.set(C, "contractstatus1", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["state"])), "AsInteger")));
  if ($.truthy($.eq((await $.v(C, "contractstatus1")), 6))) {
    await $.mset((await $.v(C, "XFButton5")), "Enabled", true);
    await $.mset((await $.v(C, "XFButton6")), "Enabled", true);
    await $.mset((await $.v(C, "XFButton4")), "Enabled", true);
    await $.mset((await $.v(C, "XFButton1")), "Enabled", true);
  } else {
    await $.mset((await $.v(C, "XFButton5")), "Enabled", false);
    await $.mset((await $.v(C, "XFButton6")), "Enabled", false);
    await $.mset((await $.v(C, "XFButton4")), "Enabled", false);
    await $.mset((await $.v(C, "XFButton1")), "Enabled", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["type_id"])), "AsFloat")), 4))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Clear", []);
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["chkasko"])), "AsFloat")), 0))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Add", ["Kasko"])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["chfq"])), "AsFloat")), 0))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Add", ["Fərdi qəza"])));
    }
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["chm"])), "AsFloat")), 0))) {
      await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Add", ["Məsuliyyət"])));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["type_id"])), "AsFloat")), 1))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Add", ["Fərdi qəza"])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["type_id"])), "AsFloat")), 13))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Add", ["Məsuliyyət"])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["type_id"])), "AsFloat")), 8))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Add", ["Yük"])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["type_id"])), "AsFloat")), 2))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Add", ["Tibbi"])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["type_id"])), "AsFloat")), 21))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Add", ["Səyahət"])));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["type_id"])), "AsFloat")), 3))) {
    await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Clear", []);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "Items")), "Add", ["Əmlak"])));
  }
  await $.mset((await $.mv((await $.v(C, "FrmMainLoss")), "ComboBox1")), "ItemIndex", 0);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "Dsmain")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "Dsmain")), "SetVariable", ["p_cid", (await $.v(C, "commoncid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "Dsmain")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSMaincount")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSMaincount")), "SetVariable", ["p_cid", (await $.v(C, "commoncid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSMaincount")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DScontr_type")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DScontr_type")), "SetVariable", ["pid", (await $.v(C, "commoncid"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DScontr_type")), "OPEN", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "XFButton10Click", async function XFButton10Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat seçlməyib!"])));
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "DmLoss"));
    const $t2 = (await $.wv([$t1], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["checkadvancedobjectaccess", ["LOSS_RETURN_TRANSACTION"]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "ODSClaimDescription")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmloss")), "ODSClaimDescription")), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "ODSClaimDescription")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "SetVariable", ["dpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "open", []);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu zərər tam ödənildiyindən statusunu dəyismək olmaz!!"])));
    return L0.result;
  }
  if ($.truthy($.lt((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Köhnə tarixdə təsdiqlənmiş zərəri geri qaytarmaq olmaz!!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "OPCOMMON")), "CallIntegerFunction", ["cancelloss", [(await $.v(C, "commoncid")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]])), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Zərər aid emeliyyatlar silindi!"])));
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSContracts")), "FieldByName", ["state"])), "AsInteger")), 6))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət!Yalnız Təsdiq olunmuş müqavilə üçün yeni zərər əməliyytı vermək olar!"])));
    return L0.result;
  }
  await $.set(C, "lossstatus", 0);
  await $.set(C, "lossoperatin", 0);
  await $.set(C, "ptype", (await $.mv((await $.v(C, "ComboBox1")), "Text")));
  await $.set(C, "op_type", "Insert");
  await $.set(C, "frmname", "FrmMainLoss");
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "Text")), "Kasko"))) {
    {
      const $t3 = (await $.v(C, "DmLoss"));
      const $t4 = (await $.wv([$t3], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t3, $t4], "CallProcedure", ["checkadvancedobjectaccess", ["ADDLOSSKASKO"]], C)));
    }
    {
      const $t5 = (await $.v(C, "DmLoss"));
      await $.mcall((await $.wv([$t5], "DSclaim_status", C, false)), "close", []);
      await $.stmt((await $.mcall((await $.wv([$t5], "DSclaim_status", C, false)), "SetVariable", ["pdep_id", (-(1))])));
      await $.mcall((await $.wv([$t5], "DSclaim_status", C, false)), "open", []);
      await $.mcall((await $.wv([$t5], "ODSClaims", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t5], "ODSClaims", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t5], "ODSMotorkaskoId", C, false)), "value"))])));
      await $.stmt((await $.mcall((await $.wv([$t5], "ODSClaims", C, false)), "SetVariable", ["p_desc_id", (-(1))])));
      await $.mcall((await $.wv([$t5], "ODSClaims", C, false)), "Open", []);
      await $.mcall((await $.wv([$t5], "ODSClaimSal", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t5], "ODSClaimSal", C, false)), "SetVariable", ["eid", (await $.mv((await $.wv([$t5], "ODSMotorkaskoId", C, false)), "value"))])));
      await $.stmt((await $.mcall((await $.wv([$t5], "ODSClaimSal", C, false)), "SetVariable", ["p_desc_id", (-(1))])));
      await $.mcall((await $.wv([$t5], "ODSClaimSal", C, false)), "Open", []);
      await $.mcall((await $.wv([$t5], "ODSClaimDescription", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t5], "ODSClaimDescription", C, false)), "SetVariable", ["id", (-(1))])));
      await $.mcall((await $.wv([$t5], "ODSClaimDescription", C, false)), "Open", []);
      await $.wset([$t5], "dep_id", (-(1)), C);
    }
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBLookupComboBox8")), "Enabled", true);
    await $.mset((await $.mv((await $.v(C, "FrmAddLoss")), "DBLookupComboBox9")), "Enabled", true);
    await $.mcall((await $.v(C, "FrmAddLoss")), "ShowModal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "Text")), "Fərdi qəza"))) {
    {
      const $t6 = (await $.v(C, "DmLoss"));
      const $t7 = (await $.wv([$t6], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t6, $t7], "CallProcedure", ["checkadvancedobjectaccess", ["ADDLOSSFQ"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "SetVariable", ["pdep_id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "open", []);
    await $.mset((await $.mv((await $.v(C, "Frmother")), "Edit1")), "Text", "Fərdi qəza");
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "SetVariable", ["id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Open", []);
    await $.set(C, "dep_id", (-(1)));
    await $.mset((await $.v(C, "Frmother")), "Caption", "Fərdi qəza(zərər)");
    await $.mset((await $.mv((await $.v(C, "Frmother")), "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", true);
    await $.mcall((await $.v(C, "Frmother")), "ShowModal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "Text")), "Məsuliyyət"))) {
    {
      const $t8 = (await $.v(C, "DmLoss"));
      const $t9 = (await $.wv([$t8], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["checkadvancedobjectaccess", ["ADDLOSSMES"]], C)));
    }
    await $.mset((await $.mv((await $.v(C, "Frmother")), "Edit1")), "Text", "Məsuliyyət");
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "SetVariable", ["pdep_id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "SetVariable", ["id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "insert", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Open", []);
    await $.mset((await $.v(C, "Frmother")), "Caption", "Məsuliyyət(zərər)");
    await $.mset((await $.mv((await $.v(C, "Frmother")), "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "Frmother")), "XFButton1")), "Enabled", true);
    await $.mcall((await $.v(C, "Frmother")), "ShowModal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "Text")), "Yük"))) {
    {
      const $t10 = (await $.v(C, "DmLoss"));
      const $t11 = (await $.wv([$t10], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t10, $t11], "CallProcedure", ["checkadvancedobjectaccess", ["ADDLOSSYUK"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "SetVariable", ["id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSClaimCargo")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSClaimCargo")), "SetVariable", ["pdepid", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSClaimCargo")), "Open", []);
    await $.mset((await $.mv((await $.v(C, "FrmCargo_claim")), "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmCargo_claim")), "XFButton1")), "Enabled", true);
    await $.mcall((await $.v(C, "FrmCargo_claim")), "ShowModal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "Text")), "Tibbi"))) {
    {
      const $t12 = (await $.v(C, "DmLoss"));
      const $t13 = (await $.wv([$t12], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t12, $t13], "CallProcedure", ["checkadvancedobjectaccess", ["ADDLOSSTIBB"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "SetVariable", ["pdep_id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "SetVariable", ["id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "insert", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaimmed")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaimmed")), "SetVariable", ["pdepid", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaimmed")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaimmed")), "insert", []);
    await $.mset((await $.mv((await $.v(C, "frmMedloss")), "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "frmMedloss")), "XFButton1")), "Enabled", true);
    await $.mcall((await $.v(C, "frmMedloss")), "ShowModal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "Text")), "Səyahət"))) {
    {
      const $t14 = (await $.v(C, "DmLoss"));
      const $t15 = (await $.wv([$t14], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t14, $t15], "CallProcedure", ["checkadvancedobjectaccess", ["ADDLOSSSEYAHET"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "SetVariable", ["pdep_id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "SetVariable", ["id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "insert", []);
    await $.mset((await $.mv((await $.v(C, "FrmTravel")), "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmTravel")), "XFButton1")), "Enabled", true);
    await $.mcall((await $.v(C, "FrmTravel")), "ShowModal", []);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox1")), "Text")), "Əmlak"))) {
    {
      const $t16 = (await $.v(C, "DmLoss"));
      const $t17 = (await $.wv([$t16], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t16, $t17], "CallProcedure", ["checkadvancedobjectaccess", ["ADDLOSSEMLAK"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "SetVariable", ["pdep_id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "SetVariable", ["id", (-(1))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "insert", []);
    await $.mset((await $.mv((await $.v(C, "FrmProperty")), "DateTimePicker1")), "value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
    await $.mset((await $.mv((await $.v(C, "FrmProperty")), "XFButton1")), "Enabled", true);
    await $.mcall((await $.v(C, "FrmProperty")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat seçlməyib!"])));
    return L0.result;
  }
  await $.set(C, "frmloss", 0);
  await $.set(C, "op_type", "Edit");
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asinteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "open", []);
  if ($.truthy((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STAGE_TESDIQ"])), "AsInteger")), 1)), async () => ($.eq((await $.v(C, "status_r")), 1)))))) {
    await $.set(C, "lossoperatin", 1);
  } else {
    await $.set(C, "lossoperatin", 0);
  }
  await $.set(C, "status_r", 0);
  if ($.truthy((await $.or_(((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["STATUS"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), false))))), async () => ($.eq((await $.mv((await $.v(C, "XFRadioButton2")), "Checked")), true)))))) {
    await $.set(C, "lossstatus", 1);
  } else {
    await $.set(C, "lossstatus", 0);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "frmstatus")), "test")), 1))) {
    await $.set(C, "lossstatus", 1);
  }
  await $.set(C, "frmname", "FrmMainLoss");
  {
    const $t18 = (await $.v(C, "DmLoss"));
    await $.mcall((await $.wv([$t18], "ODSClaims", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSClaims", C, false)), "SetVariable", ["id", (await $.mv((await $.wv([$t18], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSClaims", C, false)), "SetVariable", ["p_desc_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t18], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t18], "ODSClaims", C, false)), "Open", []);
    await $.mcall((await $.wv([$t18], "ODSClaims", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t18], "ODSClaimSal", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSClaimSal", C, false)), "SetVariable", ["eid", (await $.mv((await $.wv([$t18], "ODSMotorkaskoId", C, false)), "value"))])));
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSClaimSal", C, false)), "SetVariable", ["p_desc_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t18], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t18], "ODSClaimSal", C, false)), "Open", []);
    await $.mcall((await $.wv([$t18], "ODSClaimSal", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t18], "ODSClaimDescription", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSClaimDescription", C, false)), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t18], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t18], "ODSClaimDescription", C, false)), "Open", []);
    await $.mcall((await $.wv([$t18], "ODSClaimDescription", C, false)), "Edit", []);
    await $.mcall((await $.mv((await $.wv([$t18], "DmLoss", C, false)), "DSclaim_status")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.wv([$t18], "DmLoss", C, false)), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t18], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.wv([$t18], "DmLoss", C, false)), "DSclaim_status")), "Open", []);
    await $.mcall((await $.wv([$t18], "oDSMarks", C, false)), "Open", []);
    await $.mcall((await $.wv([$t18], "ODSModels", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t18], "ODSModels", C, false)), "SetVariable", ["pmark_id", (await $.mv((await $.mcall((await $.wv([$t18], "ODSClaimDescription", C, false)), "FieldByName", ["MARKAID"])), "AsInteger"))])));
    await $.mcall((await $.wv([$t18], "ODSModels", C, false)), "open", []);
    await $.mset((await $.mv((await $.wv([$t18], "FrmAddLoss", C, false)), "DBLookupComboBox2")), "ListFieldIndex", (await $.mv((await $.mcall((await $.wv([$t18], "ODSClaimDescription", C, false)), "FieldByName", ["MODELID"])), "AsInteger")));
    await $.mset((await $.mv((await $.wv([$t18], "FrmAddLoss", C, false)), "DBLookupComboBox2")), "KeyValue", (await $.mv((await $.mcall((await $.wv([$t18], "ODSClaimDescription", C, false)), "FieldByName", ["MODELID"])), "AsInteger")));
    await $.wset([$t18], "dep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t18], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")), C);
  }
  if ($.truthy((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["c_type"])), "AsInteger")), 4)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 4)))))) {
    {
      const $t19 = (await $.v(C, "DmLoss"));
      const $t20 = (await $.wv([$t19], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t19, $t20], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSKASKO"]], C)));
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
        const $t21 = (await $.v(C, "DmLoss"));
        const $t22 = (await $.wv([$t21], "sb_aca", C, false));
        await $.stmt((await $.wcall([$t21, $t22], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSMES"]], C)));
      }
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
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
        const $t23 = (await $.v(C, "DmLoss"));
        const $t24 = (await $.wv([$t23], "sb_aca", C, false));
        await $.stmt((await $.wcall([$t23, $t24], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSFQ"]], C)));
      }
      await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
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
      const $t25 = (await $.v(C, "DmLoss"));
      const $t26 = (await $.wv([$t25], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t25, $t26], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSMES"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
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
      const $t27 = (await $.v(C, "DmLoss"));
      const $t28 = (await $.wv([$t27], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t27, $t28], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSFQ"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSother_Claim")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
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
      const $t29 = (await $.v(C, "DmLoss"));
      const $t30 = (await $.wv([$t29], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t29, $t30], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSYUK"]], C)));
    }
    {
      const $t31 = (await $.v(C, "DmLoss"));
      await $.mcall((await $.wv([$t31], "DSClaimCargo", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t31], "DSClaimCargo", C, false)), "SetVariable", ["pdepid", (await $.mv((await $.mcall((await $.wv([$t31], "ODSClaimDescription", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t31], "DSClaimCargo", C, false)), "Open", []);
      await $.mcall((await $.wv([$t31], "DSClaimCargo", C, false)), "Edit", []);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
      await $.mset((await $.mv((await $.v(C, "FrmCargo_claim")), "XFButton1")), "Enabled", false);
    } else {
      await $.mset((await $.mv((await $.v(C, "FrmCargo_claim")), "XFButton1")), "Enabled", true);
    }
    await $.mcall((await $.v(C, "FrmCargo_claim")), "ShowModal", []);
  }
  if ($.truthy(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "ODSClaimDescription")), "FieldByName", ["type"])), "AsInteger")), 21)))) {
    {
      const $t32 = (await $.v(C, "DmLoss"));
      const $t33 = (await $.wv([$t32], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t32, $t33], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSSEYAHET"]], C)));
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
      const $t34 = (await $.v(C, "DmLoss"));
      const $t35 = (await $.wv([$t34], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t34, $t35], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSEMLAK"]], C)));
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
      const $t36 = (await $.v(C, "DmLoss"));
      const $t37 = (await $.wv([$t36], "sb_aca", C, false));
      await $.stmt((await $.wcall([$t36, $t37], "CallProcedure", ["checkadvancedobjectaccess", ["EDITLOSSTIBB"]], C)));
    }
    {
      const $t38 = (await $.v(C, "DmLoss"));
      await $.mcall((await $.wv([$t38], "DSclaimmed", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t38], "DSclaimmed", C, false)), "SetVariable", ["pdepid", (await $.mv((await $.mcall((await $.wv([$t38], "ODSClaimDescription", C, false)), "FieldByName", ["id"])), "AsInteger"))])));
      await $.mcall((await $.wv([$t38], "DSclaimmed", C, false)), "Open", []);
      await $.mcall((await $.wv([$t38], "DSclaimmed", C, false)), "Edit", []);
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
  U.method("TFrmMainLoss", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir müqavilə seçilməyib!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Təsdiq statusunda olan zərəri silmək olmaz!!!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Yalnız araşdırma  statusunda olan zərəri silmək olar!!!"])));
    return L0.result;
  }
  {
    const $t39 = (await $.v(C, "DmLoss"));
    const $t40 = (await $.wv([$t39], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t39, $t40], "CallProcedure", ["checkadvancedobjectaccess", ["DELLLOSS"]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "SetVariable", ["dpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "open", []);
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu zərər tam ödənildiyindən statusunu dəyismək olmaz!!"])));
    await $.mset((await $.v(C, "CheckBox8")), "Checked", true);
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSLossBarderoSay")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSLossBarderoSay")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSLossBarderoSay")), "open", []);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSLossBarderoSay")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Bu müqavilə üçün zərər barderosu yığıldığı üçün zərəri silmək olmaz!"])));
    return L0.result;
  }
  {
    const $t41 = (await $.v(C, "DmLoss"));
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t41], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["stage_tesdiq_dat"])), "AsString")), ""))) {
      if ($.truthy($.gt((await $.mv((await $.mcall((await $.wv([$t41], "DSSysdat", C, false)), "FieldByName", ["tek_dat"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t41], "XDBGrid1", C, false)), "DataSource")), "DataSet")), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime"))))) {
        await $.stmt((await $.wcall([$t41], "showmessage", ["Diqqət! Kohne tarixdə təsdiqlənmiş zərəri silmək olmaz!"], C)));
        return L0.result;
      }
    }
  }
  {
    const $t42 = (await $.v(C, "DmLoss"));
    const $t43 = (await $.wv([$t42], "OPCOMMON", C, false));
    if ($.truthy($.eq((await $.wcall([$t42, $t43], "MessageDlg", ["Seçilmiş Sığortanın zərərinin ləğv olunmasına əminsinizmi?!", (await $.wv([$t42, $t43], "mtConfirmation", C, false)), (await $.wv([$t42, $t43], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t42, $t43], "mrYes", C, false))))) {
      await $.stmt((await $.wcall([$t42, $t43], "CallProcedure", ["del_loss", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t42, $t43], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))]], C)));
      await $.mcall((await $.mv((await $.mv((await $.mv((await $.wv([$t42, $t43], "FrmMainLoss", C, false)), "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "XFButton6Click", async function XFButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "XFButton7Click", async function XFButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat seçlməyib!"])));
    return L0.result;
  }
  {
    const $t44 = (await $.v(C, "DmLoss"));
    const $t45 = (await $.wv([$t44], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t44, $t45], "CallProcedure", ["checkadvancedobjectaccess", ["LOSS_PAYMENT"]], C)));
  }
  {
    const $t46 = (await $.v(C, "DmLoss"));
    const $t47 = (await $.wv([$t46], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t46, $t47], "CallProcedure", ["checkadvancedobjectaccess", ["SEEPAYMENTLOSS"]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "SetVariable", ["pdep_id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "Open", []);
  await $.set(C, "plossid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger")));
  await $.set(C, "contractstatus", (await $.v(C, "contractstatus1")));
  await $.stmt((await $.call(C, "loadPlugin", ["Paymentloss.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "XFButton8Click", async function XFButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat seçlməyib!"])));
    return L0.result;
  }
  await $.mcall((await $.v(C, "frmstatus")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "XFButton9Click", async function XFButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 3))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Ödənmiş zərəri taninma statusuna keçirtmək olmaz!!!!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", ["Heç bir məlumat seçlməyib!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Zərər statusu təsdiqlənməmiş taninma etmək olmaz"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "FieldByName", ["trid"])), "AsInteger")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "SetVariable", ["dpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "open", []);
    if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DmLoss")), "DSPaymentLossReal")), "RecordCount")), 0))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Bu zərər tam ödənildiyindən statusunu dəyismək olmaz!!"])));
      return L0.result;
    }
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "FieldByName", ["trid"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "dmloss")), "DSclaim_status")), "FieldByName", ["status"])), "AsInteger")), 2)))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Bu zərər tanınma statusundadir!!!"])));
    return L0.result;
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "DSclaim_status")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "frmstatus")), "CheckBox8")), "Checked")), true)))), async () => ($.ne((await $.mv((await $.v(C, "FrmMainLoss")), "op_type")), "Insert")))))) {
    if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DmLoss")), "OPCOMMON")), "CallIntegerFunction", ["commitloss", [(await $.v(C, "contactid")), (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmMainLoss")), "XDBGrid1")), "DataSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))]])), 1))) {
      await $.stmt((await $.call(C, "showmessage", ["Zərər tanınma statusuna keçdi!"])));
    }
  }
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMainLoss", "Yenilmk1Click", async function Yenilmk1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmMainLoss", (await $.mcall((await $.v(C, "TFrmMainLoss")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
