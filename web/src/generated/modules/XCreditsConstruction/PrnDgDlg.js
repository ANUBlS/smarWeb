// Generated from PrnDgDlg.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PrnDgDlg", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Printers", "ExtCtrls"]);
  const C = [U];
  U.defClass("TfPrnDBGridEhSetupDialog", "TForm", {"gbprintfields": {"name": "gbPrintFields", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "seupmargin": {"name": "seUpMargin", "type": "TEdit"}, "selowmargin": {"name": "seLowMargin", "type": "TEdit"}, "seleftmargin": {"name": "seLeftMargin", "type": "TEdit"}, "serightmargin": {"name": "seRightMargin", "type": "TEdit"}, "cbfitwidthtopage": {"name": "cbFitWidthToPage", "type": "TCheckBox"}, "eprintfont": {"name": "ePrintFont", "type": "TEdit"}, "cbautostretch": {"name": "cbAutoStretch", "type": "TCheckBox"}, "bprintersetupdialog": {"name": "bPrinterSetupDialog", "type": "TButton"}, "bprintfont": {"name": "bPrintFont", "type": "TButton"}, "bok": {"name": "bOk", "type": "TButton"}, "bcancel": {"name": "bCancel", "type": "TButton"}, "fontdialog1": {"name": "FontDialog1", "type": "TFontDialog"}, "printersetupdialog1": {"name": "PrinterSetupDialog1", "type": "TPrinterSetupDialog"}, "cbcolored": {"name": "cbColored", "type": "TCheckBox"}, "rgfitingtype": {"name": "rgFitingType", "type": "TRadioGroup"}, "cboptimalcolwidths": {"name": "cbOptimalColWidths", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("fPrnDBGridEhSetupDialog", null, "TfPrnDBGridEhSetupDialog");
  });
  U.method("TfPrnDBGridEhSetupDialog", "bPrintFontClick", async function bPrintFontClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "FontDialog1")), "Font")), "Name", (await $.mv((await $.v(C, "ePrintFont")), "Text")));
  if ($.truthy(($.eq((await $.mv((await $.v(C, "FontDialog1")), "Execute")), true)))) {
    await $.mset((await $.v(C, "ePrintFont")), "Text", (await $.mv((await $.mv((await $.v(C, "FontDialog1")), "Font")), "Name")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfPrnDBGridEhSetupDialog", "bPrinterSetupDialogClick", async function bPrinterSetupDialogClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "PrinterSetupDialog1")), "Execute", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfPrnDBGridEhSetupDialog", "seMarginExit", async function seMarginExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "StrToFloat", [(await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfPrnDBGridEhSetupDialog", "fPrnDBGridEHSetupDialogShow", async function fPrnDBGridEHSetupDialogShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "bPrinterSetupDialog")), "Enabled", $.gt((await $.mv((await $.mv((await $.v(C, "Printer")), "Printers")), "Count")), 0));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfPrnDBGridEhSetupDialog", "cbFitWidthToPageClick", async function cbFitWidthToPageClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "rgFitingType")), "Enabled", (await $.mv((await $.v(C, "cbFitWidthToPage")), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
