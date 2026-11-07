// Generated from co_properties_unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("co_properties_unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ActnList", "DBCtrls", "ExtCtrls", "StdCtrls", "SBCustomer", "Db", "DBTables", "DBViewComboBox", "Mask", "ComCtrls", "SBCore", "OracleData", "sboapiDataModuleImpl", "co_info_unit", "CO_datamod_impl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("ERecordNotFound", "Exception", {}, {});
  U.defClass("TCO_PropertiesForm", "TForm", {"label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "opendateedit": {"name": "OpenDateEdit", "type": "TDateTimePicker"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}, "nameedit": {"name": "NameEdit", "type": "TDBEdit"}, "relationcb": {"name": "RelationCB", "type": "TDBLookupComboBox"}, "groupcb": {"name": "GroupCB", "type": "TDBLookupComboBox"}, "estatetypecb": {"name": "EstateTypeCB", "type": "TDBLookupComboBox"}, "organizationtypecb": {"name": "OrganizationTypeCB", "type": "TDBLookupComboBox"}, "actionareacb": {"name": "ActionAreaCB", "type": "TDBLookupComboBox"}, "branchcb": {"name": "BranchCB", "type": "TDBLookupComboBox"}, "clientclosedcb": {"name": "ClientClosedCB", "type": "TCheckBox"}, "clientclosedpanel": {"name": "ClientClosedPanel", "type": "TPanel"}, "closedateedit": {"name": "CloseDateEdit", "type": "TDateTimePicker"}, "isnotresidentcb": {"name": "IsNotResidentCB", "type": "TDBCheckBox"}, "okpocodeedit": {"name": "OKPOCodeEdit", "type": "TDBEdit"}, "tazareacb": {"name": "TazAreaCB", "type": "TDBLookupComboBox"}, "taxidedit": {"name": "TaxIDEdit", "type": "TDBEdit"}, "bankidedit": {"name": "BankIDEdit", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "fcustomerparams": {"name": "FCustomerParams", "type": "TCustomer"}, "fclientclosed": {"name": "FClientClosed", "type": "Boolean"}, "fchanged": {"name": "FChanged", "type": "Boolean"}}, {});
  U.fieldInit("TCO_PropertiesForm", "fcustomerparams", () => $.rec("tcustomer"));
  U.init(async () => {
    U.var_("CO_PropertiesForm", null, "TCO_PropertiesForm");
  });
  U.method("TCO_PropertiesForm", "CancelButtonClick", async function CancelButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_PropertiesForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_PropertiesForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCO_PropertiesForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "SelectNext", [(await $.v(C, "ActiveControl")), true, true])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
