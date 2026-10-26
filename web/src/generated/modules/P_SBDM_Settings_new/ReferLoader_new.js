// Generated from ReferLoader_new.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ReferLoader_new", ["Windows", "Sysutils", "NewCommonDeclsImpl", "frmReferencesImpl_new", "frmAccGroupsImpl_new", "frmCategoriesImpl_new", "frmDepositTypesImpl_new", "frmAccountTurningImpl_new"]);
  const C = [U];
  U.init(async () => {
  });
  U.func("shfrmReferences", async function shfrmReferences(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmReferences_new", (await $.mcall((await $.v(C, "TfrmReferences_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmReferences_new")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmAccGroups", async function shfrmAccGroups(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmAccGroups_new", (await $.mcall((await $.v(C, "TfrmAccGroups_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmAccGroups_new")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmCategories", async function shfrmCategories(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmCategories_new", (await $.mcall((await $.v(C, "TfrmCategories_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmCategories_new")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmDepositTypes", async function shfrmDepositTypes(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmDepositTypes_new", (await $.mcall((await $.v(C, "TfrmDepositTypes_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmDepositTypes_new")), "ShowModal", []);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("shfrmAccountTurning", async function shfrmAccountTurning(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmAccountTurning_new", (await $.mcall((await $.v(C, "TfrmAccountTurning_new")), "Create", [(await $.v(C, "CommonApplication"))])));
  await $.mcall((await $.v(C, "frmAccountTurning_new")), "ShowModal", []);
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
