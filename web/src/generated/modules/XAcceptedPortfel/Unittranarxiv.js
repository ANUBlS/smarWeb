// Generated from Unittranarxiv.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unittranarxiv", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "StdCtrls", "ExtCtrls", "ComCtrls", "Datamodunit"]);
  const C = [U];
  U.defClass("TArxivTran", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "main": {"name": "Main", "type": "TEdit"}, "perc": {"name": "Perc", "type": "TEdit"}, "service": {"name": "service", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "description": {"name": "Description", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("ArxivTran", null, "TArxivTran");
  });
  U.method("TArxivTran", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Description")), "Text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Emeliyat Novu secilmelidir!!!!"])));
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "OraclePackage1")), "CallProcedure", ["add_transaction_arch", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["prtid"])), "AsVariant")), (await $.mv((await $.v(C, "main")), "Text")), (await $.mv((await $.v(C, "perc")), "Text")), (await $.mv((await $.v(C, "service")), "Text")), (await $.mv((await $.v(C, "DateTimePicker1")), "Datetime")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue"))]])));
  await $.stmt((await $.call(C, "ShowMessage", ["Ödəniş uğurla yaradıldı..."])));
  await $.mcall((await $.mv((await $.v(C, "datamod")), "maincrprt")), "refresh", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArxivTran", "DBLookupComboBox1CloseUp", async function DBLookupComboBox1CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Description")), "Text", (await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")));
  await $.mset((await $.v(C, "Description")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TArxivTran", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "dt_pay_settings_desc")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "dt_pay_settings_desc")), "DataSet")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
