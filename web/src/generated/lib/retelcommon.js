// Generated from retelcommon.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("retelcommon", ["Controls"]);
  const C = [U];
  $.defRecord("tcredit", {"pldgid_t": () => 0, "currency": () => 0, "creditlineamount": () => 0, "annualyinterestrate": () => 0, "annualyoverduerate": () => 0, "annualypenaltyrate": () => 0, "dateofconclusion": () => 0, "duedatefirstcontract": () => 0, "numberofcredit": () => '', "purposeofcredit": () => '', "branchid": () => 0, "boorowerid": () => 0, "ins": () => 0});
  U.init(async () => {
    U.var_("SavedCredit", $.rec("tcredit"), "TCredit");
  });
  return U;
}
