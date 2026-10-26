// Generated from FrmAddPaymentLossImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmAddPaymentLossImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "CMCurrencyEdit", "DBCtrls", "Mask", "Buttons", "DMPaymentLossImpl", "sboapiDataModuleimpl", "SBTranslateProc", "CommanParametrs", "FrmPaymentLossImpl"]);
  const C = [U];
  U.defClass("TFrmAddPaymentLoss", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "xflabel7": {"name": "XFLabel7", "type": "TXFLabel"}, "eddate": {"name": "edDate", "type": "TEdit"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "edammount": {"name": "edAmmount", "type": "TCMCurrencyEdit"}, "cmcurrencyedit4": {"name": "CMCurrencyEdit4", "type": "TCMCurrencyEdit"}, "xfspeedbutton1": {"name": "XFSpeedButton1", "type": "TXFSpeedButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "xfradiobutton1": {"name": "XFRadioButton1", "type": "TXFRadioButton"}, "xfradiobutton2": {"name": "XFRadioButton2", "type": "TXFRadioButton"}}, {});
  U.init(async () => {
    U.var_("FrmAddPaymentLoss", null, "TFrmAddPaymentLoss");
  });
  U.method("TFrmAddPaymentLoss", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmAddPaymentLoss", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSqaliq")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSqaliq")), "SetVariable", ["dpid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmPaymentLoss")), "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSqaliq")), "Open", []);
  await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", "");
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSpaymentAcc")), "Open", []);
  await $.mset((await $.v(C, "edDate")), "Text", (await $.call(C, "datetostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "DSSysdat")), "FieldByName", ["tek_dat"])), "AsDateTime"))])));
  await $.mset((await $.v(C, "CMCurrencyEdit4")), "Value", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "dsqaliq")), "FieldByName", ["qaliq"])), "AsFloat")));
  await $.mset((await $.v(C, "edAmmount")), "Value", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPaymentLoss", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboBox2")), "Text")), ""))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət! Hesab seçilməyib!"])));
    return L0.result;
  }
  if ($.truthy($.lt((await $.mv((await $.v(C, "CMCurrencyEdit4")), "Value")), (await $.mv((await $.v(C, "edAmmount")), "Value"))))) {
    await $.stmt((await $.call(C, "Showmessage", ["Diqqət!!!Sığorta haqqı Sığrta qalığından böyük ola bilməz."])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Pins_common")), "CallBooleanFunction", ["addclaimpaymentReal", [(await $.v(C, "contactid")), (await $.v(C, "plossid")), (await $.mv((await $.v(C, "edAmmount")), "Value")), (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue"))]])), true))) {
    await $.stmt((await $.call(C, "showmessage", ["Zərər ödəndi."])));
  }
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "ODSClaimDescription")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "ODSClaimDescription")), "SetVariable", ["id", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmPaymentLoss")), "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "ODSClaimDescription")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "SetVariable", ["cid", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmPaymentLoss")), "DBGrid2")), "DataSource")), "DataSet")), "FieldByName", ["cid"])), "AsInteger"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "ODSClaimDescription")), "FieldByName", ["claim_status"])), "AsInteger")), 1))) {
    await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "Edit", []);
    await $.mset((await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "FieldByName", ["state"])), "AsInteger", 8);
    await $.mcall((await $.mv((await $.v(C, "DMPaymentLoss")), "Ds_contracts")), "post", []);
  }
  await $.mcall((await $.mv((await $.mv((await $.mv((await $.v(C, "FrmPaymentLoss")), "DBGrid1")), "DataSource")), "DataSet")), "Refresh", []);
  await $.mcall((await $.v(C, "FrmAddPaymentLoss")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPaymentLoss", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FrmAddPaymentLoss")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmAddPaymentLoss", "XFSpeedButton1Click", async function XFSpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
