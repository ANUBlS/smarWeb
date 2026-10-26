// Generated from Taxfilessettings.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Taxfilessettings", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "SearchEdit", "DBCtrls", "Buttons", "ExtCtrls", "Grids", "DBGrids", "Unit18"]);
  const C = [U];
  U.defClass("TRbsTaxFileAccsett", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "filialcombo": {"name": "filialcombo", "type": "TDBLookupComboBox"}, "label11": {"name": "Label11", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "searchtax1": {"name": "Searchtax1", "type": "TSearchEdit"}, "searchtax10": {"name": "Searchtax10", "type": "TSearchEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "searchtax18": {"name": "Searchtax18", "type": "TSearchEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "valutecombo": {"name": "valutecombo", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("RbsTaxFileAccsett", null, "TRbsTaxFileAccsett");
  });
  U.method("TRbsTaxFileAccsett", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["rbs_tax_acc_settings", [(await $.mv((await $.v(C, "filialcombo")), "KeyValue")), (await $.mv((await $.v(C, "valutecombo")), "KeyValue")), (await $.mv((await $.v(C, "Searchtax1")), "Text")), (await $.mv((await $.v(C, "Searchtax10")), "Text")), (await $.mv((await $.v(C, "Searchtax18")), "Text"))]])));
  await $.mcall((await $.mv((await $.mv((await $.v(C, "dBGrid1")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "dBGrid1")), "DataSource")), "DataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRbsTaxFileAccsett", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Seçilmiş sətir silinsin?", (await $.v(C, "mtinformation")), [(await $.v(C, "mbyes")), (await $.v(C, "mbno"))], 0])), (await $.v(C, "mryes"))))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax_accounts")), "Delete", []);
    await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax_accounts")), "Session")), "commit", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax_accounts")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax_accounts")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRbsTaxFileAccsett", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "dBGrid1")), "DataSource")), "DataSet")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "dBGrid1")), "DataSource")), "DataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TRbsTaxFileAccsett", "valutecomboCloseUp", async function valutecomboCloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax_accounts")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax_accounts")), "SetVariable", ["fil", (await $.mv((await $.v(C, "filialcombo")), "KeyValue"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax_accounts")), "SetVariable", ["valu", (await $.mv((await $.v(C, "valutecombo")), "KeyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "rbs_tax_accounts")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
