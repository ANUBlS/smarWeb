// Generated from FrmIEAddEditImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmIEAddEditImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "OracleData", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "DBCtrls", "NLSLocalizer", "DBGridEh", "actImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFrmIEAddEdit", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "cbbranch": {"name": "CBBranch", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "ieaccountlist": {"name": "IEAccountList", "type": "TOracleDataSet"}, "ieaccountlistid": {"name": "IEAccountListID", "type": "TFloatField"}, "ieaccountlistacc_no": {"name": "IEAccountListACC_NO", "type": "TWideStringField"}, "ieaccountlistval_acc": {"name": "IEAccountListVAL_ACC", "type": "TIntegerField"}, "ieaccountlistname": {"name": "IEAccountListNAME", "type": "TWideStringField"}, "branchlist": {"name": "BranchList", "type": "TOracleDataSet"}, "branchlistname": {"name": "BranchListNAME", "type": "TWideStringField"}, "datasrcieaccountlist": {"name": "DataSrcIEAccountList", "type": "TDataSource"}, "datasrcbranchlist": {"name": "DataSrcBranchList", "type": "TDataSource"}, "currencylist": {"name": "CurrencyList", "type": "TOracleDataSet"}, "currencylistvalute": {"name": "CurrencyListVALUTE", "type": "TIntegerField"}, "currencylistval_name": {"name": "CurrencyListVAL_NAME", "type": "TWideStringField"}, "datasrccurrencylist": {"name": "DataSrcCurrencyList", "type": "TDataSource"}, "branchlistid": {"name": "BranchListID", "type": "TFloatField"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label4": {"name": "Label4", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "label5": {"name": "Label5", "type": "TLabel"}, "ods_meh": {"name": "ods_meh", "type": "TOracleDataSet"}, "dsrc_meh": {"name": "dsrc_meh", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("FrmIEAddEdit", null, "TFrmIEAddEdit");
  });
  U.method("TFrmIEAddEdit", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Edit1")), "Clear", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmIEAddEdit", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CurrencyList")), "open", []);
  await $.mcall((await $.v(C, "BranchList")), "open", []);
  await $.mcall((await $.v(C, "ods_meh")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmIEAddEdit", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "IEAccountList")), "close", []);
  await $.mcall((await $.v(C, "CurrencyList")), "close", []);
  await $.mcall((await $.v(C, "BranchList")), "close", []);
  await $.mcall((await $.v(C, "ods_meh")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmIEAddEdit", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "ActFrom")), "LinkValuesData"));
    await $.stmt($.wcall([$t1], "Post", [], C));
  }
  await $.mcall((await $.v(C, "edit1")), "Clear", []);
  await $.mcall((await $.v(C, "IEAccountList")), "Close", []);
  { const $t2 = await $.iset((await $.mv((await $.v(C, "IEAccountList")), "SQL")), [24], " "); if ($t2 !== undefined) { await $.mset((await $.v(C, "IEAccountList")), "SQL", $t2); } }
  await $.mcall((await $.v(C, "IEAccountList")), "Open", []);
  await $.set(C, "ModalResult", (await $.v(C, "mrOK")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmIEAddEdit", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.mv((await $.v(C, "ActFrom")), "LinkValuesData"));
    await $.stmt($.wcall([$t3], "Cancel", [], C));
  }
  await $.set(C, "ModalResult", (await $.v(C, "mrOK")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmIEAddEdit", "DBLookupComboboxEh1DropDown", async function DBLookupComboboxEh1DropDown(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "edit1")), "Text")), ""))) {
    await $.mcall((await $.v(C, "IEAccountList")), "Close", []);
    { const $t4 = await $.iset((await $.mv((await $.v(C, "IEAccountList")), "SQL")), [24], " "); if ($t4 !== undefined) { await $.mset((await $.v(C, "IEAccountList")), "SQL", $t4); } }
    { const $t5 = await $.iset((await $.mv((await $.v(C, "IEAccountList")), "SQL")), [24], $.add($.add($.add((await $.idx((await $.mv((await $.v(C, "IEAccountList")), "SQL")), [24])), " where bal_cn1 like upper ('%"), (await $.mv((await $.v(C, "edit1")), "Text"))), "%')")); if ($t5 !== undefined) { await $.mset((await $.v(C, "IEAccountList")), "SQL", $t5); } }
    await $.mcall((await $.v(C, "IEAccountList")), "Open", []);
  } else {
    await $.mcall((await $.v(C, "IEAccountList")), "Close", []);
    { const $t6 = await $.iset((await $.mv((await $.v(C, "IEAccountList")), "SQL")), [24], " "); if ($t6 !== undefined) { await $.mset((await $.v(C, "IEAccountList")), "SQL", $t6); } }
    await $.mcall((await $.v(C, "IEAccountList")), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
