// Generated from ContractCommonDecls.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ContractCommonDecls", ["Controls"]);
  const C = [U];
  $.defRecord("tdeposit", {"typed": () => 0, "contractno": () => '', "opendate": () => 0, "closedate": () => 0, "amount": () => 0, "contracttype": () => 0, "clienttype": () => 0, "branchid": () => 0, "currency": () => 0, "personaltype": () => 0, "customerid": () => 0, "interest": () => '', "overdueinterest": () => 0, "dueinterest": () => 0, "contractaccid": () => 0, "clientaccid": () => 0, "interestaccid": () => 0, "booroweraccid": () => 0, "overdueaccid": () => 0, "firstpaydateforint": () => 0, "periodid": () => 0, "capitalperid": () => 0, "autopr": () => 0});
  U.init(async () => {
    U.var_("SaveDeposit", $.rec("tdeposit"), "TDeposit");
  });
  return U;
}
