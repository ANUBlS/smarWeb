// Generated from UnitTR.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitTR", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "DB", "OracleData", "ArchiveCredUnit", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormTr", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "startdateedit": {"name": "StartDateEdit", "type": "TDateTimePicker"}, "enddateedit": {"name": "EndDateEdit", "type": "TDateTimePicker"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}, "ods_sys": {"name": "ods_sys", "type": "TOracleDataSet"}, "ods_systek_dat": {"name": "ods_sysTEK_DAT", "type": "TDateTimeField"}}, {});
  U.init(async () => {
    U.var_("FormTr", null, "TFormTr");
    U.var_("bdat", 0, "TDateTime");
    U.var_("Edat", 0, "TDateTime");
  });
  U.method("TFormTr", "CancelButtonClick", async function CancelButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormTr")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTr", "EndDateEditChange", async function EndDateEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "Edat", (await $.call(C, "TRUNC", [(await $.mv((await $.v(C, "EndDateEdit")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTr", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "StartDateEdit")), "DateTime", (await $.mv((await $.v(C, "ods_sysTEK_DAT")), "AsVariant")));
  await $.mset((await $.v(C, "EndDateEdit")), "DateTime", (await $.mv((await $.v(C, "ods_sysTEK_DAT")), "AsVariant")));
  await $.set(C, "bdat", (await $.call(C, "TRUNC", [(await $.mv((await $.v(C, "StartDateEdit")), "DateTime"))])));
  await $.set(C, "Edat", (await $.call(C, "TRUNC", [(await $.mv((await $.v(C, "EndDateEdit")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTr", "OkButtonClick", async function OkButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Ümidsiz kreditlərin ödənilməsini  istəyirsinizmi ?", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMArchiveCr")), "cm_bad_loans")), "CallProcedure", ["bad_loans_trans", [(await $.v(C, "bdat")), (await $.v(C, "Edat"))]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormTr", "StartDateEditChange", async function StartDateEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "bdat", (await $.call(C, "TRUNC", [(await $.mv((await $.v(C, "StartDateEdit")), "DateTime"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
