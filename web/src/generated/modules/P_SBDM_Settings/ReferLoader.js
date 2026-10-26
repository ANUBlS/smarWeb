// Generated from ReferLoader.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReferLoader", ["Windows", "Sysutils", "CommonDeclsImpl", "frmReferencesImpl", "frmAccGroupsImpl", "frmCategoriesImpl", "frmDepositTypesImpl", "frmAccountTurningImpl"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("shfrmReferences", async function shfrmReferences(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmReferences", (await $.mcall((await $.v(C, "TfrmReferences")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmReferences")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmAccGroups", async function shfrmAccGroups(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmAccGroups", (await $.mcall((await $.v(C, "TfrmAccGroups")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmAccGroups")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmCategories", async function shfrmCategories(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmCategories", (await $.mcall((await $.v(C, "TfrmCategories")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmCategories")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmDepositTypes", async function shfrmDepositTypes(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmDepositTypes", (await $.mcall((await $.v(C, "TfrmDepositTypes")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmDepositTypes")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmAccountTurning", async function shfrmAccountTurning(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmAccountTurning", (await $.mcall((await $.v(C, "TfrmAccountTurning")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmAccountTurning")), "ShowModal", []);
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
