// Generated from NewDepositsReferLoader.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsReferLoader", ["Windows", "Sysutils", "NewCommonDeclsImpl", "NewDepositsFrmReferencesImpl", "NewDepositsFrmAccGroupsImpl", "NewDepositsFrmCategoriesImpl", "NewDepositsFrmDepositTypesImpl", "NewDepositsFrmAccountTurningImpl"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("shfrmReferences", async function shfrmReferences(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmReferences", (await $.mcall((await $.v(C, "TNewDepositsFrmReferences")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "NewDepositsFrmReferences")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmAccGroups", async function shfrmAccGroups(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmAccGroups", (await $.mcall((await $.v(C, "TNewDepositsFrmAccGroups")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "NewDepositsFrmAccGroups")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmCategories", async function shfrmCategories(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmCategories", (await $.mcall((await $.v(C, "TNewDepositsFrmCategories")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "NewDepositsFrmCategories")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmDepositTypes", async function shfrmDepositTypes(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmDepositTypes", (await $.mcall((await $.v(C, "TNewDepositsFrmDepositTypes")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "NewDepositsFrmDepositTypes")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmAccountTurning", async function shfrmAccountTurning(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmAccountTurning", (await $.mcall((await $.v(C, "TNewDepositsFrmAccountTurning")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "NewDepositsFrmAccountTurning")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  L0["rs_shreferences"] = "showrefer";
  L0["rs_shaccgroups"] = "showcccgroups";
  L0["rs_shcategories"] = "showcategories";
  L0["rs_shdeposittypes"] = "showdeposittypes";
  L0["rs_shaccountturning"] = "showaccountturning";
  if ($.truthy($.eq(L0["s"], L0["rs_shreferences"]))) {
    await $.stmt($.call(C, "shfrmReferences", []));
  }
  if ($.truthy($.eq(L0["s"], L0["rs_shaccgroups"]))) {
    await $.stmt($.call(C, "shfrmAccGroups", []));
  }
  if ($.truthy($.eq(L0["s"], L0["rs_shcategories"]))) {
    await $.stmt($.call(C, "shfrmCategories", []));
  }
  if ($.truthy($.eq(L0["s"], L0["rs_shdeposittypes"]))) {
    await $.stmt($.call(C, "shfrmDepositTypes", []));
  }
  if ($.truthy($.eq(L0["s"], L0["rs_shaccountturning"]))) {
    await $.stmt($.call(C, "shfrmAccountTurning", []));
  }
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  return U;
}
