// Generated from StartEndDateInputImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("StartEndDateInputImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls"]);
  const C = [U];
  U.defClass("TStartEndDateInputForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "startdateedit": {"name": "StartDateEdit", "type": "TDateTimePicker"}, "enddateedit": {"name": "EndDateEdit", "type": "TDateTimePicker"}, "fcommited": {"name": "FCommited", "type": "Boolean"}, "fstartdate": {"name": "FStartDate", "type": "TDateTime"}, "fenddate": {"name": "FEndDate", "type": "TDateTime"}}, {"startdate": {"name": "StartDate", "read": "FStartDate", "write": "SetStartDate"}, "enddate": {"name": "EndDate", "read": "FEndDate", "write": "SetEndDate"}});
  U.init(async () => {
    U.var_("StartEndDateInputForm", null, "TStartEndDateInputForm");
  });
  U.method("TStartEndDateInputForm", "CancelButtonClick", async function CancelButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStartEndDateInputForm", "OkButtonClick", async function OkButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  await $.set(C, "FCommited", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TStartEndDateInputForm", "SetStartDate", async function SetStartDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "StartDateEdit")), "DateTime", L0["value"]);
  await $.set(C, "FStartDate", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.method("TStartEndDateInputForm", "SetEndDate", async function SetEndDate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.mset((await $.v(C, "EndDateEdit")), "DateTime", L0["value"]);
  await $.set(C, "FEndDate", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["TDateTime"]});
  U.method("TStartEndDateInputForm", "Execute", async function Execute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  await $.set(C, "FCommited", false);
  await $.stmt($.call(C, "ShowModal", []));
  await $.set(C, "FStartDate", (await $.mv((await $.v(C, "StartDateEdit")), "DateTime")));
  await $.set(C, "FEndDate", (await $.mv((await $.v(C, "EndDateEdit")), "DateTime")));
  L0["result"] = (await $.v(C, "FCommited"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TStartEndDateInputForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
