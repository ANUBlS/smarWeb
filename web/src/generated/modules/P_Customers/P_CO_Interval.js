// Generated from P_CO_Interval.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_CO_Interval", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "P_Datamod_Unit"]);
  const C = [U];
  U.defClass("TP_CO_IntervalForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "enddateedit": {"name": "EndDateEdit", "type": "TDateTimePicker"}, "startdateedit": {"name": "StartDateEdit", "type": "TDateTimePicker"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("P_CO_IntervalForm", null, "TP_CO_IntervalForm");
  });
  U.method("TP_CO_IntervalForm", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TP_CO_IntervalForm", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TP_CO_IntervalForm", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "İnterval";
  await $.inherited(Self, "TP_CO_IntervalForm", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TP_CO_IntervalForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "StartDateEdit")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "EndDateEdit")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_IntervalForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ActiveControl", (await $.v(C, "StartDateEdit")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_IntervalForm", "OkButtonClick", async function OkButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s_date": 0, "e_date": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["s_date"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "StartDateEdit")), "DateTime"))]));
  L0["e_date"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "EndDateEdit")), "DateTime"))]));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "OPackage")), "CallProcedure", ["ins_date", [L0["s_date"], L0["e_date"]]])));
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "memorial_date")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
