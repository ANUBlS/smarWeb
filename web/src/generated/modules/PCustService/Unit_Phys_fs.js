// Generated from Unit_Phys_fs.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Unit_Phys_fs", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "XFSCtrls", "ExtCtrls", "UnitDataModPCustService", "AccountPropertiesLmpl", "AccountPropertiesFLmpl", "PCustServiceFormImpl1", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFormPyhsFs", "TForm", {"xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfradiogroupphysfs": {"name": "XFRadioGroupPhysFs", "type": "TXFRadioGroup"}}, {});
  U.init(async () => {
    U.var_("FormPyhsFs", null, "TFormPyhsFs");
  });
  U.method("TFormPyhsFs", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "PCustServiceForm")), "CustSearch1")), "Click", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormPyhsFs", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPyhsFs", "XFRadioGroupPhysFsClick", async function XFRadioGroupPhysFsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupPhysFs")), "ItemIndex")), 0))) {
    await $.mset((await $.mv((await $.v(C, "PCustServiceForm")), "XFRadioGroupCust_type")), "ItemIndex", 1);
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "XFRadioGroupPhysFs")), "ItemIndex")), 1))) {
      await $.mset((await $.mv((await $.v(C, "PCustServiceForm")), "XFRadioGroupCust_type")), "ItemIndex", 2);
    }
  }
  { const $t1 = (await $.mv((await $.v(C, "XFRadioGroupPhysFs")), "ItemIndex"));
    if ($.eq($t1, 0) || $.eq($t1, 1)) {
      await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["cus_tip", (await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "XFRadioGroupCust_type")), "ItemIndex"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["resd", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["nerezident"])), "asinteger"))])));
      if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "PCustServiceForm")), "XFRadioGroupCust_type")), "ItemIndex")), 1))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["sferad_ey", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["sfera_dey"])), "asstring"))])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["govern_ment", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_CUSTOMERS_PHYS_FS")), "FieldByName", ["vid_sob"])), "asstring"))])));
      } else {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["sferad_ey", "%%"])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "ODS_Bal_spr")), "SetVariable", ["govern_ment", "%%"])));
      }
      if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "AccountPropertiesF"))]))))) {
        await $.set(C, "AccountProperties", (await $.mcall((await $.v(C, "TAccountProperties")), "Create", [Self])));
      }
      await $.mcall((await $.v(C, "AccountProperties")), "ShowModal", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
