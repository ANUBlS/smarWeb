// Generated from FrmMainImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmMainImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Mask", "DBCtrls", "ComCtrls", "Buttons", "CMCurrencyEdit", "DMTerminatedImpl", "ComObj", "CommanParametrs", "sboapiDataModuleImpl", "SBTranslateProc", "SBLogin"]);
  const C = [U];
  U.defClass("TFrmMain", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel5": {"name": "XFLabel5", "type": "TXFLabel"}, "xflabel6": {"name": "XFLabel6", "type": "TXFLabel"}, "xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfcheckbox1": {"name": "XFCheckBox1", "type": "TXFCheckBox"}, "xfcheckbox2": {"name": "XFCheckBox2", "type": "TXFCheckBox"}, "datetimepicker4": {"name": "DateTimePicker4", "type": "TDateTimePicker"}, "datetimepicker5": {"name": "DateTimePicker5", "type": "TDateTimePicker"}, "xflabel8": {"name": "XFLabel8", "type": "TXFLabel"}, "xflabel9": {"name": "XFLabel9", "type": "TXFLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "xflabel10": {"name": "XFLabel10", "type": "TXFLabel"}, "xflabel11": {"name": "XFLabel11", "type": "TXFLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "cmcurrencyedit2": {"name": "CMCurrencyEdit2", "type": "TCMCurrencyEdit"}, "cmcurrencyedit3": {"name": "CMCurrencyEdit3", "type": "TCMCurrencyEdit"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xflabel12": {"name": "XFLabel12", "type": "TXFLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "xfcheckbox3": {"name": "XFCheckBox3", "type": "TXFCheckBox"}, "companenet": {"name": "companenet", "type": "String"}}, {});
  U.init(async () => {
    U.var_("FrmMain", null, "TFrmMain");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  if ($.truthy($.eq(L0["s"], ""))) {
    await $.mcall((await $.v(C, "FrmMain")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmMain", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DMTerminated", (await $.mcall((await $.v(C, "TDMTerminated")), "create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMain", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmMain", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFButton4")), "Visible", false);
  await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", true);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", true);
  await $.mset((await $.v(C, "DBEdit3")), "Enabled", true);
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "SetVariable", ["p_id", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "Open", []);
  await $.mset((await $.mv((await $.v(C, "FrmMain")), "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["END_DATE"])), "AsDateTime")));
  await $.mset((await $.mv((await $.v(C, "FrmMain")), "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["BEGIN_DATE"])), "AsDateTime")));
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "edit", []);
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSTerminateAmount")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSTerminateAmount")), "SetVariable", ["pter_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSTerminateAmount")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSTerminateAmount")), "edit", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["STATE"])), "AsInteger")), 6))) {
    await $.mset((await $.v(C, "XFButton1")), "Enabled", true);
    await $.mset((await $.v(C, "XFCheckBox3")), "Enabled", true);
    await $.mset((await $.v(C, "XFCheckBox3")), "Checked", false);
  } else {
    await $.mset((await $.v(C, "XFButton1")), "Enabled", false);
    await $.mset((await $.v(C, "XFCheckBox3")), "Enabled", false);
    await $.mset((await $.v(C, "XFCheckBox3")), "Checked", true);
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["type_id"])), "AsInteger")), 4))) {
    await $.mset((await $.v(C, "CMCurrencyEdit2")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit3")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["type_id"])), "AsInteger")), 4))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["chkasko"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["pbusproc", 35])));
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Open", []);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["chfq"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment1")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment1")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment1")), "SetVariable", ["pbusproc", 37])));
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment1")), "Open", []);
      await $.mset((await $.v(C, "XFLabel10")), "Visible", true);
      await $.mset((await $.v(C, "DBEdit7")), "Visible", true);
      await $.mset((await $.v(C, "XFLabel8")), "Visible", true);
      await $.mset((await $.v(C, "CMCurrencyEdit2")), "Visible", true);
    } else {
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment1")), "Close", []);
      await $.mset((await $.v(C, "XFLabel10")), "Visible", false);
      await $.mset((await $.v(C, "DBEdit7")), "Visible", false);
      await $.mset((await $.v(C, "XFLabel8")), "Visible", false);
      await $.mset((await $.v(C, "CMCurrencyEdit2")), "Visible", false);
      await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", 0);
    }
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["chm"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment2")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment2")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment2")), "SetVariable", ["pbusproc", 36])));
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment2")), "Open", []);
      await $.mset((await $.v(C, "XFLabel11")), "Visible", true);
      await $.mset((await $.v(C, "DBEdit8")), "Visible", true);
      await $.mset((await $.v(C, "XFLabel9")), "Visible", true);
      await $.mset((await $.v(C, "CMCurrencyEdit3")), "Visible", true);
    } else {
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment2")), "Close", []);
      await $.mset((await $.v(C, "XFLabel11")), "Visible", false);
      await $.mset((await $.v(C, "DBEdit8")), "Visible", false);
      await $.mset((await $.v(C, "DBEdit8")), "Text", "0");
      await $.mset((await $.v(C, "XFLabel9")), "Visible", false);
      await $.mset((await $.v(C, "CMCurrencyEdit3")), "Visible", false);
      await $.mset((await $.v(C, "CMCurrencyEdit3")), "Value", 0);
    }
  } else {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["type_id"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["pbusproc", 36])));
      await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Open", []);
      await $.mset((await $.v(C, "XFLabel8")), "Visible", false);
      await $.mset((await $.v(C, "XFLabel9")), "Visible", false);
      await $.mset((await $.v(C, "XFLabel10")), "Visible", false);
      await $.mset((await $.v(C, "XFLabel11")), "Visible", false);
      await $.mset((await $.v(C, "DBEdit7")), "Visible", false);
      await $.mset((await $.v(C, "DBEdit8")), "Visible", false);
      await $.mset((await $.v(C, "DBEdit7")), "Text", "0");
      await $.mset((await $.v(C, "DBEdit8")), "Text", "0");
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["type_id"])), "AsInteger")), 2))) {
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["pbusproc", 41])));
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Open", []);
    await $.mset((await $.v(C, "XFLabel8")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel9")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel10")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel11")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit8")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Text", "0");
    await $.mset((await $.v(C, "DBEdit8")), "Text", "0");
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["type_id"])), "AsInteger")), 3))) {
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["pbusproc", 38])));
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Open", []);
    await $.mset((await $.v(C, "XFLabel8")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel9")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel10")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel11")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit8")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Text", "0");
    await $.mset((await $.v(C, "DBEdit8")), "Text", "0");
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["type_id"])), "AsInteger")), 8))) {
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["pbusproc", 39])));
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Open", []);
    await $.mset((await $.v(C, "XFLabel8")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel9")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel10")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel11")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit8")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Text", "0");
    await $.mset((await $.v(C, "DBEdit8")), "Text", "0");
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["type_id"])), "AsInteger")), 13))) {
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["pbusproc", 36])));
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Open", []);
    await $.mset((await $.v(C, "XFLabel8")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel9")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel10")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel11")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit8")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Text", "0");
    await $.mset((await $.v(C, "DBEdit8")), "Text", "0");
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["type_id"])), "AsInteger")), 21))) {
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["p_cid", (await $.v(C, "contactid"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "SetVariable", ["pbusproc", 40])));
    await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSPayment")), "Open", []);
    await $.mset((await $.v(C, "XFLabel8")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel9")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel10")), "Visible", false);
    await $.mset((await $.v(C, "XFLabel11")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit8")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit7")), "Text", "0");
    await $.mset((await $.v(C, "DBEdit8")), "Text", "0");
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["stage_ok_verilib_dat"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["STAGE_OK_VERILIB_DAT"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["STAGE_TESDIQ_DAT"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["STAGE_TESDIQ_DAT"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["TERMINTED_DAT"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DateTimePicker3")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")));
  } else {
    await $.mset((await $.v(C, "DateTimePicker3")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["TERMINTED_DAT"])), "AsDateTime")));
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["INTEREST_CHARGED"])), "AsString")), ""))) {
    await $.mset((await $.v(C, "DBEdit3")), "Text", "0");
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["stage_ok_verilib"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "XFCheckBox1")), "Checked", true);
    await $.mset((await $.v(C, "XFCheckBox1")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "XFCheckBox1")), "Checked", false);
    await $.mset((await $.v(C, "XFCheckBox1")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["stage_tesdiq"])), "AsInteger")), 1))) {
    await $.mset((await $.v(C, "XFCheckBox2")), "Checked", true);
    await $.mset((await $.v(C, "XFCheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "XFButton3")), "Enabled", true);
    await $.mset((await $.v(C, "XFPanel2")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "XFCheckBox2")), "Checked", false);
    await $.mset((await $.v(C, "XFCheckBox2")), "Enabled", true);
    await $.mset((await $.v(C, "XFButton3")), "Enabled", false);
    await $.mset((await $.v(C, "XFPanel2")), "Enabled", true);
  }
  await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSTerminateAmount")), "FieldByName", ["TERMINTED_AMOUNT"])), "AsFloat")));
  await $.mset((await $.v(C, "CMCurrencyEdit2")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSTerminateAmount")), "FieldByName", ["TERMINTED_AMOUNT1"])), "AsFloat")));
  await $.mset((await $.v(C, "CMCurrencyEdit3")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSTerminateAmount")), "FieldByName", ["TERMINTED_AMOUNT2"])), "AsFloat")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMain", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "companenet", "Qiymet");
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Qaytarılacaq məbləğdən tutulacaq % -sahəsinə məlumat daxil edin!"])));
    return L0.result;
  }
  {
    const $t1 = (await $.v(C, "DMTerminated"));
    const $t2 = (await $.wv([$t1], "ins_common", C, false));
    await $.mset((await $.wv([$t1, $t2], "CMCurrencyEdit1", C, false)), "Value", (await $.wcall([$t1, $t2], "CallFloatFunction", ["calcterminateammount", [(await $.wv([$t1, $t2], "contactid", C, false)), (await $.wcall([$t1, $t2], "strtofloat", [(await $.mv((await $.wv([$t1, $t2], "DBEdit1", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t1, $t2], "DateTimePicker3", C, false)), "DateTime")), (await $.wcall([$t1, $t2], "strtofloat", [(await $.mv((await $.wv([$t1, $t2], "DBEdit3", C, false)), "Text"))], C)), 0]], C)));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit2")), "Visible")), true))) {
    {
      const $t3 = (await $.v(C, "DMTerminated"));
      const $t4 = (await $.wv([$t3], "ins_common", C, false));
      await $.mset((await $.wv([$t3, $t4], "CMCurrencyEdit2", C, false)), "Value", (await $.wcall([$t3, $t4], "CallFloatFunction", ["calcterminateammount", [(await $.wv([$t3, $t4], "contactid", C, false)), (await $.wcall([$t3, $t4], "strtofloat", [(await $.mv((await $.wv([$t3, $t4], "DBEdit7", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t3, $t4], "DateTimePicker3", C, false)), "DateTime")), (await $.wcall([$t3, $t4], "strtofloat", [(await $.mv((await $.wv([$t3, $t4], "DBEdit3", C, false)), "Text"))], C)), 1]], C)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit3")), "Visible")), true))) {
    {
      const $t5 = (await $.v(C, "DMTerminated"));
      const $t6 = (await $.wv([$t5], "ins_common", C, false));
      await $.mset((await $.wv([$t5, $t6], "CMCurrencyEdit3", C, false)), "Value", (await $.wcall([$t5, $t6], "CallFloatFunction", ["calcterminateammount", [(await $.wv([$t5, $t6], "contactid", C, false)), (await $.wcall([$t5, $t6], "strtofloat", [(await $.mv((await $.wv([$t5, $t6], "DBEdit8", C, false)), "Text"))], C)), (await $.mv((await $.wv([$t5, $t6], "DateTimePicker3", C, false)), "DateTime")), (await $.wcall([$t5, $t6], "strtofloat", [(await $.mv((await $.wv([$t5, $t6], "DBEdit3", C, false)), "Text"))], C)), 13]], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMain", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status_ok": 0, "status_tesdiq": 0, "xtrid": 0, "status_ok_dat": 0, "status_tesdiq_dat": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "companenet", "Qebul");
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["state"])), "AsInteger")), 6))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təsdiq olunmuş müqavilələrə xitam verilə bilər!"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Qaytarılacaq məbləğdən tutulacaq % sahəsi boşdur!"])));
    return L0.result;
  }
  if ($.truthy($.gt((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "DBEdit3")), "Text"))])), 30))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Qaytarılacaq məbləğdən tutulacaq faiz 30 %-dən çox olmamalıdır.!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.v(C, "companenet")), "Qiymet"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit1")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! Xitam məbləği  sahəsi boşdur!"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit2")), "Visible")), true))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit2")), "Text")), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["Diqqət! Xitam məb (Fərdi qə.)  sahəsi boşdur!"])));
        return L0.result;
      }
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit3")), "Visible")), true))) {
      if ($.truthy($.eq((await $.mv((await $.v(C, "CMCurrencyEdit3")), "Text")), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["Diqqət! Xitam məb (Məsuliyyət)  sahəsi boşdur!"])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), true))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), false))) {
      await $.stmt((await $.call(C, "showmessage", ["Diqqət! \"Təsdiq et\" statusundan əvvəl \"Ok verilib\" statusu seçilməlidir."])));
      return L0.result;
    }
  }
  L0["xtrid"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), true))) {
    L0["status_ok"] = 1;
    L0["status_ok_dat"] = (await $.mv((await $.v(C, "DateTimePicker4")), "DateTime"));
  } else {
    L0["status_ok"] = 0;
    L0["status_ok_dat"] = (await $.call(C, "strtodate", ["30.12.1899"]));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), true))) {
    L0["status_tesdiq"] = 1;
    L0["status_tesdiq_dat"] = (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime"));
  } else {
    L0["status_tesdiq"] = 0;
    L0["status_tesdiq_dat"] = (await $.call(C, "strtodate", ["30.12.1899"]));
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["stage_tesdiq_dat"])), "AsString")), "")), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")))))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Xitamın təsdiqlənmə tarixi Sistem tarixindən fərqli olduğudan dəyişdirilə bilməz!"])));
    return L0.result;
  }
  {
    const $t7 = (await $.v(C, "DMTerminated"));
    await $.mset((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["cid"])), "AsInteger", (await $.wv([$t7], "contactid", C, false)));
    await $.mset((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["terminted_dat"])), "AsDateTime", (await $.mv((await $.wv([$t7], "DateTimePicker3", C, false)), "DateTime")));
    await $.mset((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["stage_ok_verilib"])), "AsInteger", (await $.wv([$t7], "status_Ok", { get: async () => L0["status_ok"], set: async (v) => { L0["status_ok"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["stage_ok_verilib_dat"])), "AsDateTime", (await $.wv([$t7], "status_Ok_dat", { get: async () => L0["status_ok_dat"], set: async (v) => { L0["status_ok_dat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["stage_ok_verilib_opid"])), "AsInteger", (await $.wv([$t7], "Sb_GetLoginUserID", C, false)));
    await $.mset((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["stage_tesdiq"])), "AsInteger", (await $.wv([$t7], "status_tesdiq", { get: async () => L0["status_tesdiq"], set: async (v) => { L0["status_tesdiq"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime", (await $.wv([$t7], "status_tesdiq_dat", { get: async () => L0["status_tesdiq_dat"], set: async (v) => { L0["status_tesdiq_dat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["stage_tesdiq_opid"])), "AsInteger", (await $.wv([$t7], "Sb_GetLoginUserID", C, false)));
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["op_id"])), "AsString")), ""))) {
      await $.mset((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["op_id"])), "AsInteger", (await $.wv([$t7], "Sb_GetLoginUserID", C, false)));
    }
    await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "Post", []);
    await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "RefreshRecord", []);
    await $.mset((await $.mcall((await $.wv([$t7], "DSTerminateAmount", C, false)), "FieldByName", ["TERMINTED_AMOUNT"])), "AsFloat", (await $.mv((await $.wv([$t7], "CMCurrencyEdit1", C, false)), "Value")));
    await $.mset((await $.mcall((await $.wv([$t7], "DSTerminateAmount", C, false)), "FieldByName", ["TERMINTED_AMOUNT1"])), "AsFloat", (await $.mv((await $.wv([$t7], "CMCurrencyEdit2", C, false)), "Value")));
    await $.mset((await $.mcall((await $.wv([$t7], "DSTerminateAmount", C, false)), "FieldByName", ["TERMINTED_AMOUNT2"])), "AsFloat", (await $.mv((await $.wv([$t7], "CMCurrencyEdit3", C, false)), "Value")));
    await $.mset((await $.mcall((await $.wv([$t7], "DSTerminateAmount", C, false)), "FieldByName", ["ter_id"])), "AsInteger", (await $.mv((await $.mcall((await $.wv([$t7], "DSins_c_terminated", C, false)), "FieldByName", ["id"])), "AsInteger")));
    await $.mcall((await $.wv([$t7], "DSTerminateAmount", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t7], "DSTerminateAmount", C, false)), "Post", []);
    if ($.truthy($.eq((await $.wv([$t7], "status_tesdiq", { get: async () => L0["status_tesdiq"], set: async (v) => { L0["status_tesdiq"] = v; }, local: true }, false)), 1))) {
      if ($.truthy($.eq((await $.wcall([$t7], "MessageDlg", ["Seçilmiş siğorta müqaviləsinə xitam verilməsinə əminsinizmi?!", (await $.wv([$t7], "mtConfirmation", C, false)), (await $.wv([$t7], "mbYesNoCancel", C, false)), 0], C)), (await $.wv([$t7], "mrYes", C, false))))) {
        if ($.truthy($.eq((await $.mcall((await $.wv([$t7], "ins_common", C, false)), "CallIntegerFunction", ["committerminate", [(await $.wv([$t7], "contactid", C, false)), (await $.mv((await $.wv([$t7], "CMCurrencyEdit1", C, false)), "Value")), (await $.mv((await $.wv([$t7], "CMCurrencyEdit2", C, false)), "Value")), (await $.mv((await $.wv([$t7], "CMCurrencyEdit3", C, false)), "Value")), (await $.mv((await $.wv([$t7], "DBLookupComboBox1", C, false)), "KeyValue"))]])), 1))) {
          await $.stmt((await $.wcall([$t7], "showmessage", ["Müqaviləyə xitam verilidi!"], C)));
        }
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "companenet")), "Qebul"))) {
    await $.mcall((await $.v(C, "FrmMain")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMain", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMain", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSpaytercount")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSpaytercount")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSpaytercount")), "Open", []);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSpaytercount")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Bu müqavilə üçün xitam ödəməsi olduğu üçün Xitama imtina vermek olmaz!"])));
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSBarderoSay")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSBarderoSay")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSBarderoSay")), "Open", []);
  if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSBarderoSay")), "FieldByName", ["say"])), "AsInteger")), 0))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Bu müqavilə üçün xitam barderosu yığıldığı üçün Xitama imtina vermek olmaz!"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "dMTerminated")), "DSins_c_terminated")), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime"))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Köhnə tarixdəki xitamı silmək olmaz"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "ins_common")), "CallIntegerFunction", ["cancelcontract_terminate", [(await $.v(C, "contactid"))]])), 1))) {
    await $.stmt((await $.call(C, "showmessage", ["Xitam əməliyyatları ləğv olundu"])));
    await $.mcall((await $.v(C, "FrmMain")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMain", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "status_ok": 0, "status_tesdiq": 0, "xtrid": 0, "status_ok_dat": 0, "status_tesdiq_dat": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "DMTerminated"));
    const $t9 = (await $.wv([$t8], "sb_aca", C, false));
    await $.stmt((await $.wcall([$t8, $t9], "CallProcedure", ["checkadvancedobjectaccess", ["TER_STATE"]], C)));
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSContract")), "FieldByName", ["state"])), "AsInteger")), 6))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Yalnız təsdiq olunmuş müqavilələrə xitam verilə bilər!"])));
    return L0.result;
  }
  L0["xtrid"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox1")), "Checked")), true))) {
    L0["status_ok"] = 1;
    L0["status_ok_dat"] = (await $.mv((await $.v(C, "DateTimePicker4")), "DateTime"));
  } else {
    L0["status_ok"] = 0;
    L0["status_ok_dat"] = (await $.call(C, "strtodate", ["30.12.1899"]));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox2")), "Checked")), true))) {
    L0["status_tesdiq"] = 1;
    L0["status_tesdiq_dat"] = (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime"));
  } else {
    L0["status_tesdiq"] = 0;
    L0["status_tesdiq_dat"] = (await $.call(C, "strtodate", ["30.12.1899"]));
  }
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["stage_tesdiq_dat"])), "AsString")), "")), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSins_c_terminated")), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime")))))))) {
    await $.stmt((await $.call(C, "showmessage", ["Diqqət! Xitamın təsdiqlənmə tarixi Sistem tarixindən fərqli olduğudan dəyişdirilə bilməz!"])));
    return L0.result;
  }
  {
    const $t10 = (await $.v(C, "DMTerminated"));
    await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["cid"])), "AsInteger", (await $.wv([$t10], "contactid", C, false)));
    await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["terminted_dat"])), "AsDateTime", (await $.mv((await $.wv([$t10], "DateTimePicker3", C, false)), "DateTime")));
    await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["stage_ok_verilib"])), "AsInteger", (await $.wv([$t10], "status_Ok", { get: async () => L0["status_ok"], set: async (v) => { L0["status_ok"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["stage_ok_verilib_dat"])), "AsDateTime", (await $.wv([$t10], "status_Ok_dat", { get: async () => L0["status_ok_dat"], set: async (v) => { L0["status_ok_dat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["stage_ok_verilib_opid"])), "AsInteger", (await $.wv([$t10], "Sb_GetLoginUserID", C, false)));
    await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["stage_tesdiq"])), "AsInteger", (await $.wv([$t10], "status_tesdiq", { get: async () => L0["status_tesdiq"], set: async (v) => { L0["status_tesdiq"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["stage_tesdiq_dat"])), "AsDateTime", (await $.wv([$t10], "status_tesdiq_dat", { get: async () => L0["status_tesdiq_dat"], set: async (v) => { L0["status_tesdiq_dat"] = v; }, local: true }, false)));
    await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["stage_tesdiq_opid"])), "AsInteger", (await $.wv([$t10], "Sb_GetLoginUserID", C, false)));
    await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["interest_charged"])), "AsInteger", 0);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["op_id"])), "AsString")), ""))) {
      await $.mset((await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "FieldByName", ["op_id"])), "AsInteger", (await $.wv([$t10], "Sb_GetLoginUserID", C, false)));
    }
    await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "Edit", []);
    await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "Post", []);
    await $.mcall((await $.wv([$t10], "DSins_c_terminated", C, false)), "RefreshRecord", []);
  }
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "Ds_cont_state")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "Ds_cont_state")), "SetVariable", ["pid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "Ds_cont_state")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "Ds_cont_state")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "Ds_cont_state")), "Edit", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "Ds_cont_state")), "FieldByName", ["state"])), "AsInteger", 8);
  await $.mcall((await $.mv((await $.v(C, "DMTerminated")), "Ds_cont_state")), "Post", []);
  await $.stmt((await $.call(C, "showmessage", ["Müqavilə xitam statusuna  keçdi!"])));
  await $.mcall((await $.v(C, "FrmMain")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMain", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["PaymenTerminateimpl.bpl", "pt"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmMain", "XFCheckBox3Click", async function XFCheckBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFCheckBox3")), "Checked")), true))) {
    await $.mset((await $.v(C, "XFButton4")), "Visible", true);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", false);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", false);
    await $.mset((await $.v(C, "DBEdit3")), "Enabled", false);
  } else {
    await $.mset((await $.v(C, "XFButton4")), "Visible", false);
    await $.mset((await $.v(C, "CMCurrencyEdit1")), "Enabled", true);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "Enabled", true);
    await $.mset((await $.v(C, "DBEdit3")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmMain", (await $.mcall((await $.v(C, "TFrmMain")), "Create", [(await $.v(C, "Application"))])));
  return L0.result;
});
  return U;
}
