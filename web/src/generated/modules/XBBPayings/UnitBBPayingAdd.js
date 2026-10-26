// Generated from UnitBBPayingAdd.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitBBPayingAdd", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "Mask", "ComCtrls", "UnitDataModBBPayings"]);
  const C = [U];
  U.defClass("TFormBBPayingAdd", "TForm", {"cboxcontractnum": {"name": "CBoxContractNum", "type": "TDBLookupComboBox"}, "cboxservicetype": {"name": "CBoxServiceType", "type": "TDBLookupComboBox"}, "editamount": {"name": "EditAmount", "type": "TEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "btnok": {"name": "BtnOK", "type": "TButton"}, "btncancel": {"name": "BtnCancel", "type": "TButton"}, "dbeditabonentname": {"name": "DBEditAbonentName", "type": "TDBEdit"}, "cboxmethod": {"name": "CBoxMethod", "type": "TComboBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "dtpicker": {"name": "DTPicker", "type": "TDateTimePicker"}, "label5": {"name": "Label5", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("FormBBPayingAdd", null, "TFormBBPayingAdd");
  });
  U.method("TFormBBPayingAdd", "BtnCancelClick", async function BtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
