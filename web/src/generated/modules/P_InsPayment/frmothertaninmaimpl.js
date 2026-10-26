// Generated from frmothertaninmaimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmothertaninmaimpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "XFSCtrls", "StdCtrls", "DBCtrls", "CMCurrencyEdit", "CMDBSearchEdit", "DMPaymentImpl", "FrmAddPaymentImpl", "sboapiDataModuleimpl", "SBTranslateProc", "CommanParametrs", "FrmPaymentImpl"]);
  const C = [U];
  U.defClass("TForm1", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}, "xflabel3": {"name": "XFLabel3", "type": "TXFLabel"}, "xflabel4": {"name": "XFLabel4", "type": "TXFLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("Form1", null, "TForm1");
  });
  U.method("TForm1", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TForm1", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "dsotherdbhesab")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DMPayment")), "dsotherdbhesab")), "SetVariable", ["pcid", (await $.v(C, "contactid"))])));
  await $.mcall((await $.mv((await $.v(C, "DMPayment")), "dsotherdbhesab")), "Open", []);
  await $.mset((await $.v(C, "CMCurrencyEdit1")), "Value", 0);
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "");
  await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", "");
  await $.mset((await $.v(C, "Edit1")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm1", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DMPayment"));
    const $t2 = (await $.wv([$t1], "OPCOMMON", C, false));
    await $.stmt((await $.wcall([$t1, $t2], "CallIntegerFunction", ["commitcontract_other", [(await $.wv([$t1, $t2], "contactid", C, false)), (await $.mv((await $.wv([$t1, $t2], "CMCurrencyEdit1", C, false)), "Value")), (await $.mv((await $.wv([$t1, $t2], "DBLookupComboBox1", C, false)), "KeyValue")), (await $.mv((await $.wv([$t1, $t2], "DBLookupComboBox2", C, false)), "KeyValue")), (await $.mv((await $.wv([$t1, $t2], "Edit1", C, false)), "Text"))]], C)));
  }
  await $.mcall((await $.mv((await $.v(C, "FrmPayment")), "DBGrid1")), "Refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TForm1", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
