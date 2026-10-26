// Generated from frmCustomerImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("frmCustomerImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "NLSLocalizer", "StdCtrls", "Buttons", "DBCtrls", "ExtCtrls", "Mask", "ComCtrls", "DBCtrlsEh", "DBLookupEh", "CommonDecls", "DatModCustmerImpl", "systemstate"]);
  const C = [U];
  $.defRecord("tcustomer", {"name": () => '', "shortname": () => '', "opendate": () => 0, "closedate": () => 0, "isresident": () => false, "relationid": () => 0, "groupid": () => 0, "estatetype": () => 0, "organizationtype": () => 0, "actionarea": () => 0, "branchid": () => 0, "taxareaid": () => 0, "taxidstring": () => '', "bankidstring": () => '', "okpro": () => '', "datnal": () => 0, "datustav": () => 0});
  U.defClass("TfrmCustomer", "TForm", {"nlslcust": {"name": "NLSLCust", "type": "TNLSLocalizer"}, "bitbtnok": {"name": "BitBtnOk", "type": "TBitBtn"}, "bitbtncancel": {"name": "BitBtnCancel", "type": "TBitBtn"}, "label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "opendateedit": {"name": "OpenDateEdit", "type": "TDateTimePicker"}, "clientclosedcb": {"name": "ClientClosedCB", "type": "TCheckBox"}, "clientclosedpanel": {"name": "ClientClosedPanel", "type": "TPanel"}, "closedateedit": {"name": "CloseDateEdit", "type": "TDateTimePicker"}, "nameedit": {"name": "NameEdit", "type": "TEdit"}, "shortnameedit": {"name": "ShortNameEdit", "type": "TEdit"}, "okpocodeedit": {"name": "OKPOCodeEdit", "type": "TEdit"}, "taxidedit": {"name": "TaxIDEdit", "type": "TEdit"}, "bankidedit": {"name": "BankIDEdit", "type": "TEdit"}, "relationcb": {"name": "RelationCB", "type": "TDBLookupComboboxEh"}, "groupcb": {"name": "GroupCB", "type": "TDBLookupComboboxEh"}, "estatetypecb": {"name": "EstateTypeCB", "type": "TDBLookupComboboxEh"}, "organizationtypecb": {"name": "OrganizationTypeCB", "type": "TDBLookupComboboxEh"}, "actionareacb": {"name": "ActionAreaCB", "type": "TDBLookupComboboxEh"}, "branchcb": {"name": "BranchCB", "type": "TDBLookupComboboxEh"}, "tazareacb": {"name": "TazAreaCB", "type": "TDBLookupComboboxEh"}, "isnotresidentcb": {"name": "IsNotResidentCB", "type": "TCheckBox"}, "datnaledit": {"name": "DATNALEdit", "type": "TDateTimePicker"}, "datustavedit": {"name": "DATUSTAVEdit", "type": "TDateTimePicker"}, "customerid": {"name": "CustomerID", "type": "Integer"}, "customername": {"name": "CustomerName", "type": "String"}}, {});
  U.init(async () => {
    U.var_("frmCustomer", null, "TfrmCustomer");
    U.var_("Customer", $.rec("tcustomer"), "TCustomer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmCustomer")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmCustomer", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmCustomer", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmCustomer", "BitBtnCancelClick", async function BitBtnCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCustomer", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DatModCustmer", (await $.mcall((await $.v(C, "TDatModCustmer")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCustomer", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DatModCustmer")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCustomer", "NameEditKeyPress", async function NameEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "SelectNext", [L0["sender"], true, true])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmCustomer", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NameEdit")), "SetFocus", []);
  await $.mset((await $.v(C, "OpenDateEdit")), "DateTime", (await $.v(C, "Get_CurrentDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmCustomer", "add_Customer", async function add_Customer(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t1 = (await $.v(C, "DatModCustmer"));
    const $t2 = (await $.wv([$t1], "cm_credit", C, false));
    const $t3 = (await $.wv([$t1, $t2], "Customer", C, false));
    await $.wset([$t1, $t2, $t3], "CustomerID", (await $.wcall([$t1, $t2, $t3], "CallIntegerFunction", ["add_cm_customer", ["open_dat", (await $.wv([$t1, $t2, $t3], "Get_CurrentDate", C, false)), "Name", (await $.wv([$t1, $t2, $t3], "Name", C, false)), "CLOSE_DAT", (await $.wv([$t1, $t2, $t3], "CloseDate", C, false)), "NEREZIDENT", (await $.wcall([$t1, $t2, $t3], "Integer", [(await $.wv([$t1, $t2, $t3], "IsResident", C, false))], C)), "PRINAD_KOD", (await $.wv([$t1, $t2, $t3], "RelationID", C, false)), "SHORT_NAME", (await $.wv([$t1, $t2, $t3], "ShortName", C, false)), "GROUP_KLIE", (await $.wv([$t1, $t2, $t3], "GroupID", C, false)), "VID_SOB", (await $.wv([$t1, $t2, $t3], "EstateType", C, false)), "ORG_SOB", (await $.wv([$t1, $t2, $t3], "OrganizationType", C, false)), "SFERA_DEY", (await $.wv([$t1, $t2, $t3], "ActionArea", C, false)), "OTRASL", (await $.wv([$t1, $t2, $t3], "BranchID", C, false)), "NALOG_KOD", (await $.wv([$t1, $t2, $t3], "TaxAreaID", C, false)), "INN", (await $.wv([$t1, $t2, $t3], "TaxIDString", C, false)), "BIK", (await $.wv([$t1, $t2, $t3], "BankIDString", C, false)), "KOD_OKPRO", (await $.wv([$t1, $t2, $t3], "OKPRO", C, false)), "DAT_NAL", (await $.wv([$t1, $t2, $t3], "DATNAL", C, false)), "DAT_USTAV", (await $.wv([$t1, $t2, $t3], "DATUSTAV", C, false))]], C)), C);
    await $.wset([$t1, $t2, $t3], "CustomerName", (await $.wv([$t1, $t2, $t3], "Name", C, false)), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmCustomer", "Apply", async function Apply(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t4 = (await $.v(C, "Customer"));
    await $.wset([$t4], "Name", (await $.mv((await $.wv([$t4], "NameEdit", C, false)), "Text")), C);
    await $.wset([$t4], "ShortName", (await $.mv((await $.wv([$t4], "ShortNameEdit", C, false)), "Text")), C);
    await $.wset([$t4], "OpenDate", (await $.mv((await $.wv([$t4], "OpenDateEdit", C, false)), "DateTime")), C);
    await $.wset([$t4], "CloseDate", (await $.mv((await $.wv([$t4], "CloseDateEdit", C, false)), "DateTime")), C);
    await $.wset([$t4], "IsResident", (await $.mv((await $.wv([$t4], "IsNotResidentCB", C, false)), "Checked")), C);
    await $.wset([$t4], "RelationID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "RelationCB", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.wset([$t4], "GroupID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "GroupCB", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.wset([$t4], "EstateType", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "EstateTypeCB", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.wset([$t4], "OrganizationType", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "OrganizationTypeCB", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.wset([$t4], "ActionArea", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "ActionAreaCB", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.wset([$t4], "BranchID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "BranchCB", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.wset([$t4], "TaxAreaID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t4], "TazAreaCB", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "AsInteger")), C);
    await $.wset([$t4], "TaxIDString", (await $.mv((await $.wv([$t4], "TaxIDEdit", C, false)), "Text")), C);
    await $.wset([$t4], "BankIDString", (await $.mv((await $.wv([$t4], "BankIDEdit", C, false)), "Text")), C);
    await $.wset([$t4], "OKPRO", (await $.mv((await $.wv([$t4], "OKPOCodeEdit", C, false)), "Text")), C);
    await $.wset([$t4], "DATNAL", (await $.mv((await $.wv([$t4], "DATNALEdit", C, false)), "DateTime")), C);
    await $.wset([$t4], "DATUSTAV", (await $.mv((await $.wv([$t4], "DATUSTAVEdit", C, false)), "DateTime")), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TfrmCustomer", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.stmt($.call(C, "Apply", []));
    await $.stmt($.call(C, "add_Customer", []));
  } catch ($t5) {
    $.rethrowControl($t5);
    $.handled($t5);
    await $.stmt((await $.call(C, "LogWarning", ["Müştərinin əlavə edilməsi mümkün olmadı"])));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmCustomer", (await $.mcall((await $.v(C, "TfrmCustomer")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
