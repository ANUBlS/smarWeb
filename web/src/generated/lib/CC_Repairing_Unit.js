// Generated from CC_Repairing_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_Repairing_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "Buttons", "StdCtrls", "NLSLocalizer", "CC_Settings_Unit", "CC_Commision_Trans_Unit", "CC_Country_Unit"]);
  const C = [U];
  U.defClass("TCC_FormRepairing", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("CC_FormRepairing", null, "TCC_FormRepairing");
  });
  U.method("TCC_FormRepairing", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TCC_FormRepairing", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TCC_FormRepairing", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Ölkələr";
  await $.inherited(Self, "TCC_FormRepairing", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TCC_FormRepairing", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CC_Settings", (await $.mcall((await $.v(C, "TCC_Settings")), "Create", [Self])));
  await $.mcall((await $.v(C, "CC_Settings")), "ShowModal", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_FormRepairing", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CC_Country_ins"))]))))) {
    await $.set(C, "CC_Country_ins", (await $.mcall((await $.v(C, "TCC_Country_ins")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "CC_Country_ins")), "ShowModal", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
