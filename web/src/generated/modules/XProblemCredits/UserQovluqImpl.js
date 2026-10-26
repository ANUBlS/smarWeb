// Generated from UserQovluqImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UserQovluqImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "Buttons", "PrCmDMImpl"]);
  const C = [U];
  U.defClass("TFrmUserQovluq", "TForm", {"xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "checkbonus": {"name": "CheckBonus", "type": "TXFCheckBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("FrmUserQovluq", null, "TFrmUserQovluq");
  });
  U.method("TFrmUserQovluq", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "pstatus": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBonus")), "Checked")))) {
    L0["pstatus"] = 1;
  } else {
    L0["pstatus"] = 0;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "PrPackage")), "CallProcedure", ["admin_add", ["userid_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "CourtAdmin")), "FieldByName", ["ID"])), "AsInteger")), "qrupid_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "AdminGroups")), "FieldByName", ["ID"])), "AsInteger")), "username_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "CourtAdmin")), "FieldByName", ["NAME"])), "AsString")), "qrupname_", (await $.mv((await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "AdminGroups")), "FieldByName", ["NAME"])), "AsString")), "pstatus_", L0["pstatus"]]])));
  await $.mcall((await $.mv((await $.v(C, "PrCmDM")), "AdminIn")), "Refresh", []);
  await $.mcall((await $.v(C, "FrmUserQovluq")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmUserQovluq", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmUserQovluq", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBonus")), "Checked")))) {
    await $.mset((await $.v(C, "CheckBonus")), "Checked", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
