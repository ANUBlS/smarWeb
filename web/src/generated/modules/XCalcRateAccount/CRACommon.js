// Generated from CRACommon.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CRACommon", ["Controls"]);
  const C = [U];
  $.defRecord("tcontract", {"currency": () => 0, "personaltype": () => 0, "clienttype": () => 0, "branchid": () => 0, "contractaccid": () => 0, "interestaccid": () => 0, "opendate": () => 0, "closedate": () => 0, "annualintrest": () => 0, "contractno": () => ''});
  U.init(async () => {
    U.var_("SContract", $.rec("tcontract"), "TContract");
  });
  return U;
}
