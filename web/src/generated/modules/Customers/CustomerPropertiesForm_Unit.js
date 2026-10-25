// Generated from CustomerPropertiesForm_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CustomerPropertiesForm_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "DBCtrls", "Mask", "ExtCtrls", "Db", "DBTables", "SBCustomer", "DBViewComboBox", "ActnList", "SBCore", "CustomerDataModuleImpl", "OracleData", "CustomerInfoFormImpl", "uCustomersIPInfo", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("ERecordNotFound", "Exception", {}, {});
  U.defClass("TCustomerPropertiesForm", "TForm", {"label3": {"name": "Label3", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "bevel1": {"name": "Bevel1", "type": "TBevel"}, "opendateedit": {"name": "OpenDateEdit", "type": "TDateTimePicker"}, "okbutton": {"name": "OkButton", "type": "TButton"}, "cancelbutton": {"name": "CancelButton", "type": "TButton"}, "nameedit": {"name": "NameEdit", "type": "TDBEdit"}, "relationcb": {"name": "RelationCB", "type": "TDBLookupComboBox"}, "groupcb": {"name": "GroupCB", "type": "TDBLookupComboBox"}, "estatetypecb": {"name": "EstateTypeCB", "type": "TDBLookupComboBox"}, "organizationtypecb": {"name": "OrganizationTypeCB", "type": "TDBLookupComboBox"}, "actionareacb": {"name": "ActionAreaCB", "type": "TDBLookupComboBox"}, "branchcb": {"name": "BranchCB", "type": "TDBLookupComboBox"}, "clientclosedcb": {"name": "ClientClosedCB", "type": "TCheckBox"}, "clientclosedpanel": {"name": "ClientClosedPanel", "type": "TPanel"}, "closedateedit": {"name": "CloseDateEdit", "type": "TDateTimePicker"}, "label6": {"name": "Label6", "type": "TLabel"}, "isnotresidentcb": {"name": "IsNotResidentCB", "type": "TDBCheckBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "okpocodeedit": {"name": "OKPOCodeEdit", "type": "TDBEdit"}, "tazareacb": {"name": "TazAreaCB", "type": "TDBLookupComboBox"}, "taxidedit": {"name": "TaxIDEdit", "type": "TDBEdit"}, "bankidedit": {"name": "BankIDEdit", "type": "TDBEdit"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "infoview": {"name": "InfoView", "type": "TAction"}, "ipinfoview": {"name": "IpInfoView", "type": "TAction"}, "fcustomerparams": {"name": "FCustomerParams", "type": "TCustomer"}, "fclientclosed": {"name": "FClientClosed", "type": "Boolean"}, "fchanged": {"name": "FChanged", "type": "Boolean"}}, {"customerparams": {"name": "CustomerParams", "read": "FCustomerParams", "write": "SetCustomerParams"}, "clientclosed": {"name": "ClientClosed", "read": "FClientClosed", "write": "SetClientClosed"}});
  U.fieldInit("TCustomerPropertiesForm", "fcustomerparams", () => $.rec("tcustomer"));
  U.init(async () => {
    U.var_("CustomerPropertiesForm", null, "TCustomerPropertiesForm");
  });
  U.method("TCustomerPropertiesForm", "New", async function New(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false};
  await $.stmt($.call(C, "Reset", []));
  await $.mcall((await $.mv((await $.v(C, "CustomerDataModule")), "ActiveCustomerList")), "Insert", []);
  await $.mset((await $.v(C, "InfoView")), "Visible", false);
  await $.stmt($.call(C, "ShowModal", []));
  L0["result"] = (await $.v(C, "FChanged"));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TCustomerPropertiesForm", "Edit", async function Edit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"id": $.copyArg(p0), result: undefined, "customer": $.rec("tcustomer")};
  await $.fixArgs(L0, ["id"]);
  await $.stmt($.call(C, "Reset", []));
  await $.mcall((await $.mv((await $.v(C, "CustomerDataModule")), "ActiveCustomerList")), "Edit", []);
  await $.stmt((await $.call(C, "Sb_GetCustomer", [L0["id"], $.ref(async () => L0["customer"], async ($t1) => { L0["customer"] = $t1; })])));
  await $.set(C, "CustomerParams", L0["customer"]);
  await $.mset((await $.v(C, "InfoView")), "Visible", true);
  await $.stmt($.call(C, "ShowModal", []));
  return L0.result;
}, {"params": ["ID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TCustomerPropertiesForm", "CancelButtonClick", async function CancelButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerPropertiesForm", "OkButtonClick", async function OkButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "CustomerDataModule")), "ActiveCustomerList"));
    await $.wset([$t2], "FChanged", (await $.wv([$t2], "True", C, false)), C);
    await $.mset((await $.wcall([$t2], "FieldByName", ["OPEN_DAT"], C)), "AsDateTime", (await $.mv((await $.wv([$t2], "OpenDateEdit", C, false)), "DateTime")));
    await $.stmt($.wcall([$t2], "Post", [], C));
    await $.stmt((await $.wcall([$t2], "ApplyUpdates", [[(await $.wv([$t2], "aaInsert", C, false)), (await $.wv([$t2], "aaUpdate", C, false))]], C)));
    await $.stmt($.wcall([$t2], "CommitUpdates", [], C));
  }
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerPropertiesForm", "Reset", async function Reset(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FChanged", false);
  await $.mset((await $.v(C, "OpenDateEdit")), "DateTime", (await $.call(C, "Sb_GetSystemDate", [])));
  await $.set(C, "ClientClosed", false);
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCustomerPropertiesForm", "SetCustomerParams", async function SetCustomerParams(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"customer": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["customer"]);
  await $.set(C, "FCustomerParams", L0["customer"]);
  {
    const $t3 = (await $.v(C, "CustomerParams"));
    await $.mset((await $.wv([$t3], "OpenDateEdit", C, false)), "DateTime", (await $.wv([$t3], "OpenDate", C, false)));
    await $.mset((await $.wv([$t3], "CloseDateEdit", C, false)), "DateTime", (await $.wv([$t3], "CloseDate", C, false)));
    await $.wset([$t3], "ClientClosed", $.ne((await $.wv([$t3], "CloseDate", C, false)), (await $.wv([$t3], "NullDate", C, false))), C);
    await $.stmt((await $.mcall((await $.mv((await $.mv((await $.wv([$t3], "CustomerDataModule", C, false)), "Relation")), "DataSet")), "Locate", ["ID", (await $.wv([$t3], "RelationID", C, false)), []])));
  }
  return L0.result;
}, {"params": ["Customer"], "kind": "procedure", "ptypes": ["TCustomer"]});
  U.method("TCustomerPropertiesForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "CustomerDataModule")), "ActiveCustomerList"));
    if ($.truthy($.eq((await $.wv([$t4], "State", C, false)), (await $.wv([$t4], "dsInsert", C, false))))) {
      await $.stmt($.wcall([$t4], "Cancel", [], C));
      await $.stmt($.wcall([$t4], "CancelUpdates", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TCustomerPropertiesForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerPropertiesForm", "SetClientClosed", async function SetClientClosed(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"value": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["value"]);
  await $.set(C, "FClientClosed", L0["value"]);
  await $.mset((await $.v(C, "CloseDateEdit")), "Enabled", L0["value"]);
  await $.mset((await $.v(C, "ClientClosedCB")), "Checked", L0["value"]);
  return L0.result;
}, {"params": ["Value"], "kind": "procedure", "ptypes": ["Boolean"]});
  U.method("TCustomerPropertiesForm", "ClientClosedCBClick", async function ClientClosedCBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "ClientClosed", (await $.mv((L0["sender"]), "Checked")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomerPropertiesForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    await $.stmt((await $.call(C, "SelectNext", [(await $.v(C, "ActiveControl")), true, true])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomerPropertiesForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TCustomerPropertiesForm", "InfoViewExecute", async function InfoViewExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.mcall((await $.v(C, "TCustomerInfoForm")), "Create", [Self]));
    try {
      await $.stmt((await $.wcall([$t5], "ViewCustInfo", [(await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t5], "CustomerDataModule", C, false)), "Customers")), "DataSet")), "FieldByName", ["ID"])), "AsInteger"))], C)));
    } finally {
      await $.stmt($.wcall([$t5], "Release", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
