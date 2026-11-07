// Generated from uMainIM2YMImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("uMainIM2YMImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "Oracle", "CMCurrencyEdit", "DBCtrls", "ExtCtrls", "CommonDecls", "cmoracleapidatamoduleimpl"]);
  const C = [U];
  U.defClass("TfrmIM2YMMain", "TForm", {"odsims": {"name": "ODSIMs", "type": "TOracleDataSet"}, "odsimsnumberofcredit": {"name": "ODSIMsNUMBEROFCREDIT", "type": "TStringField"}, "odsyms": {"name": "ODSYMs", "type": "TOracleDataSet"}, "stringfield1": {"name": "StringField1", "type": "TStringField"}, "ims": {"name": "ims", "type": "TDataSource"}, "yms": {"name": "yms", "type": "TDataSource"}, "odsimsid": {"name": "ODSIMsID", "type": "TFloatField"}, "odsymsid": {"name": "ODSYMsID", "type": "TFloatField"}, "cm_im2ym": {"name": "cm_im2ym", "type": "TOraclePackage"}, "odsymsname": {"name": "ODSYMsNAME", "type": "TStringField"}, "odsimsname": {"name": "ODSIMsNAME", "type": "TStringField"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "label4": {"name": "Label4", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "edamt": {"name": "edAmt", "type": "TCMCurrencyEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "lb1": {"name": "lb1", "type": "TLabel"}, "lb2": {"name": "lb2", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("frmIM2YMMain", null, "TfrmIM2YMMain");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmIM2YMMain")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmIM2YMMain", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Əməliyyatlar aparılsın?", (await $.v(C, "mtInformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "idno"))))) {
    return L0.result;
  }
  try {
    await $.stmt((await $.mcall((await $.v(C, "cm_im2ym")), "CallProcedure", ["convertim2ym", [(await $.mv((await $.v(C, "ODSIMsID")), "Value")), (await $.mv((await $.v(C, "ODSYMsID")), "Value")), (await $.mv((await $.v(C, "edAMt")), "Value"))]])));
    await $.stmt((await $.call(C, "LogInformation", ["Əməliyyatlar aparıldı"])));
  } catch ($t1) {
    $.rethrowControl($t1);
    $.handled($t1);
    await $.stmt((await $.call(C, "LogError", ["Əməliyyatlar aparılmadı"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIM2YMMain", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSIMs")), "Open", []);
  await $.mcall((await $.v(C, "ODSYMs")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIM2YMMain", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmIM2YMMain", "DBLookupComboboxEh2CloseUp", async function DBLookupComboboxEh2CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.mset((await $.v(C, "lb1")), "Caption", (await $.mv((await $.v(C, "ODSIMsNAME")), "AsString")));
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TfrmIM2YMMain", "DBLookupComboboxEh3CloseUp", async function DBLookupComboboxEh3CloseUp(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "accept": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["sender", "accept"]);
  await $.mset((await $.v(C, "lb2")), "Caption", (await $.mv((await $.v(C, "ODSYMsNAME")), "AsString")));
  return L0.result;
}, {"params": ["Sender", "Accept"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmIM2YMMain", (await $.mcall((await $.v(C, "TfrmIM2YMMain")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
