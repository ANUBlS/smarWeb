// Generated from HesabUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("HesabUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "XDBGrids", "StdCtrls", "XFSCtrls", "ExtCtrls", "Buttons", "UnitDataModPCustService", "Pcust_CO_frmWReportUnit", "Unitembassy"]);
  const C = [U];
  U.defClass("TCust_Account", "TForm", {"xdbgrid_hesab": {"name": "XDBGrid_hesab", "type": "TXDBGrid"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.const("no_selected_account", "Heç bir hesab qeyd edilməyib!");
    U.var_("Cust_Account", null, "TCust_Account");
  });
  U.method("TCust_Account", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "Ods_HesabCap")), "IsEmpty")))) {
    await $.stmt((await $.call(C, "ShowMessage", [(await $.v(C, "no_selected_account"))])));
    return L0.result;
  } else {
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "CustomerInfoDataSet")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "CustomerInfoDataSet")), "SetVariable", ["Acc_ID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "XDBGrid_hesab")), "DataSource")), "DataSet")), "FieldByName", ["id"])), "asInteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "CustomerInfoDataSet")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Templates")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "Templates")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "Pcust_CO_frmWReportUnit")), "Ph_CO_frmWReport")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCust_Account", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Cust_Account")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
