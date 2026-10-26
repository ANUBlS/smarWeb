// Generated from FrmAddPaymentTerimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmAddPaymentTerimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "DBCtrls", "CurrencyEdit", "StdCtrls", "dmPaymenTerminateimpl", "sboapiDataModuleimpl", "SBTranslateProc", "CommanParametrs", "frmPaymenTerminateimpl"]);
  const C = [U];
  U.defClass("TFrmAddPaymentTer", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "currencyedit1": {"name": "CurrencyEdit1", "type": "TCurrencyEdit"}, "currencyedit2": {"name": "CurrencyEdit2", "type": "TCurrencyEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("FrmAddPaymentTer", null, "TFrmAddPaymentTer");
  });
  U.method("TFrmAddPaymentTer", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddPaymentTer", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSqaliq")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSqaliq")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSqaliq")), "Open", []);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "");
  await $.mset((await $.v(C, "Edit1")), "Text", (await $.call(C, "datetostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime"))])));
  await $.mset((await $.v(C, "CurrencyEdit2")), "Value", 0);
  await $.mset((await $.v(C, "CurrencyEdit1")), "value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "DSqaliq")), "FieldByName", ["qaliq"])), "AsFloat")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPaymentTer", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Hesab seçilməyib!"])));
    return L0.result;
  }
  if ($.truthy($.gt((await $.mv((await $.v(C, "CurrencyEdit2")), "Value")), (await $.mv((await $.v(C, "CurrencyEdit1")), "Value"))))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Diqqət!!!Sığorta haqqı Sığrta qalığından böyük ola bilməz."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "dmPaymentTer")), "Pins_common")), "CallBooleanFunction", ["ins_pay_Ter_contaract", [(await $.v(C, "contactid")), (await $.mv((await $.v(C, "CurrencyEdit2")), "Value")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))]])), true))) {
    await $.stmt((await $.call(C, "showmessage", ["Xitam ödəndi."])));
  }
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "frmPaymentTer")), "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.mcall((await $.v(C, "FrmAddPaymentTer")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPaymentTer", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
