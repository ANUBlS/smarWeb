// Generated from ContractAddEditImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ContractAddEditImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBViewComboBox", "ExtCtrls", "DBCtrls", "Mask", "ComCtrls", "Buttons", "SearchEdit", "CMDBSearchEdit", "DBCtrlsEh", "DBLookupEh", "Oracle", "DB", "CMHintBox", "dblookup", "DatModConstructionImpl", "FlatMgrUnit", "CustMgrUnit", "AccMgrUnit", "TransactionViewerUnit", "sboapiDataModuleImpl", "CreditsManagerForConstructionImpl"]);
  const C = [U];
  U.defClass("TAddEditContractForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "branchcbeh": {"name": "BranchCBEh", "type": "TDBLookupComboboxEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbeditcontnum": {"name": "DBEditContNum", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "statictext19": {"name": "StaticText19", "type": "TStaticText"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "statictext17": {"name": "StaticText17", "type": "TStaticText"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "statictext14": {"name": "StaticText14", "type": "TStaticText"}, "statictext15": {"name": "StaticText15", "type": "TStaticText"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "statictext16": {"name": "StaticText16", "type": "TStaticText"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "statictext18": {"name": "StaticText18", "type": "TStaticText"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "hbconclusion": {"name": "HBConclusion", "type": "TCMHintBox"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "dbnumberediteh2": {"name": "DBNumberEditEh2", "type": "TDBNumberEditEh"}, "dbnumberediteh3": {"name": "DBNumberEditEh3", "type": "TDBNumberEditEh"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "dbnumberediteh4": {"name": "DBNumberEditEh4", "type": "TDBNumberEditEh"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "statictext12": {"name": "StaticText12", "type": "TStaticText"}, "dbnumberediteh6": {"name": "DBNumberEditEh6", "type": "TDBNumberEditEh"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "statictext13": {"name": "StaticText13", "type": "TStaticText"}, "statictext20": {"name": "StaticText20", "type": "TStaticText"}, "statictext21": {"name": "StaticText21", "type": "TStaticText"}, "editprice1": {"name": "EditPrice1", "type": "TEdit"}, "editflatcode": {"name": "EditFlatCode", "type": "TEdit"}, "dbnumberediteh7": {"name": "DBNumberEditEh7", "type": "TDBNumberEditEh"}, "statictext22": {"name": "StaticText22", "type": "TStaticText"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "cmsearcheditloacaccs": {"name": "CMSearchEditLoacAccs", "type": "TCMSearchEdit"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}}, {});
  U.init(async () => {
    U.var_("AddEditContractForm", null, "TAddEditContractForm");
  });
  U.method("TAddEditContractForm", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FlatsMgrForm", (await $.mcall((await $.v(C, "TFlatsMgrForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "FlatsMgrForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "BranchCBEhKeyPress", async function BranchCBEhKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t1 = L0["sender"];
        { const $t2 = (await $.wv([$t1], "Tag", C, false));
          if ($.eq($t2, 1)) {
            await $.stmt((await $.wcall([$t1], "SelectNext", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false)), (await $.wv([$t1], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAddEditContractForm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "d": null};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CustMgrForm", (await $.mcall((await $.v(C, "TCustMgrForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "CustMgrForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AccMgrForm", (await $.mcall((await $.v(C, "TAccMgrForm")), "Create", [Self])));
  await $.mcall((await $.v(C, "AccMgrForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "ListSource")), "DataSet")), "FieldByName", ["NAME"])), "AsString")));
  await $.mset((await $.v(C, "Edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "FieldByName", ["PeriodContracts"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "FieldByName", ["note"])), "AsString")));
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "Open", []);
  if ($.truthy($.eq((await $.v(C, "addupd")), 1))) {
    await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "insert", []);
  }
  if ($.truthy($.eq((await $.v(C, "addupd")), 2))) {
    await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "Edit", []);
  }
  L0["accid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "FieldByName", ["ACCID"])), "AsInteger"));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TAddEditContractForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAddEditContractForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "customerid": 0, "op_id": 0, "accno": '', "currencyid": 0, "name": '', "open_dat": 0, "balcn": 0, "ownid": 0, "accid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DatModConstruction")), "cc_settings")), "active"))))) {
    await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_settings")), "open", []);
  }
  L0["accid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "FieldByName", ["ACCID"])), "AsInteger"));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "State")), (await $.v(C, "dsInsert"))))) {
    L0["customerid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_settings")), "FieldByName", ["ACCCUST"])), "AsInteger"));
    L0["currencyid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_settings")), "FieldByName", ["ACCCUR"])), "AsInteger"));
    L0["name"] = (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "Text"));
    L0["open_dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "SBOP")), "CallDateFunction", ["get_date", []]))]))]));
    L0["balcn"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "cc_settings")), "FieldByName", ["ACCBALCN"])), "AsInteger"));
    L0["ownid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "CreditPurpose")), "FieldByName", ["BUYER"])), "AsInteger"));
    L0["accno"] = (await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "sbcm_construction")), "CallStringFunction", ["GenerateAccountNumber", ["CustomerID", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "DBEdit1")), "Text"))]))]]));
    L0["accid"] = (await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "sbcm_construction")), "CallIntegerFunction", ["add_account", ["p_CustID", L0["customerid"], "p_AccNo", L0["accno"], "p_Curr", L0["currencyid"], "p_Name", L0["name"], "p_OpenDate", L0["open_dat"], "p_BalCn", L0["balcn"], "p_OwnID", L0["ownid"]]]));
    await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Accounts")), "Refresh", []);
  }
  {
    const $t3 = (await $.v(C, "DatModConstruction"));
    const $t4 = (await $.wv([$t3], "CreditPurpose", C, false));
    await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["AccID"], C)), "AsInteger", (await $.wv([$t3, $t4], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["CONTAMOUNT"], C)), "asfloat", (await $.mv((await $.wcall([$t3, $t4], "FieldByName", ["restt"], C)), "AsFloat")));
    await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["opendate"], C)), "AsDateTime", (await $.wcall([$t3, $t4], "trunc", [(await $.mv((await $.wv([$t3, $t4], "DTPOpenDate", C, false)), "DateTime"))], C)));
    await $.mset((await $.wcall([$t3, $t4], "FieldByName", ["note"], C)), "AsInteger", (await $.mv((await $.wv([$t3, $t4], "DBLookupComboBox1", C, false)), "KeyValue")));
    await $.stmt($.wcall([$t3, $t4], "Post", [], C));
    await $.mcall((await $.mv((await $.wv([$t3, $t4], "DatModConstruction", C, false)), "Credits")), "Refresh", []);
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "Credits")), "Locate", ["CONTNUM", (await $.mv((await $.mv((await $.v(C, "AddEditContractForm")), "DBEditContNum")), "Text")), []])));
  await $.mcall((await $.v(C, "AddEditContractForm")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "BranchCBEhChange", async function BranchCBEhChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "DatModConstruction"));
    const $t6 = (await $.wv([$t5], "Accounts", C, false));
    await $.stmt($.wcall([$t5, $t6], "close", [], C));
    await $.stmt((await $.wcall([$t5, $t6], "SetVariable", ["val", (await $.mv((await $.wv([$t5, $t6], "BranchCBEh", C, false)), "KeyValue"))], C)));
    await $.stmt($.wcall([$t5, $t6], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "DBLookupComboboxEh6KeyValueChanged", async function DBLookupComboboxEh6KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t7], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t7], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "DTPCloseDateChange", async function DTPCloseDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "DatModConstruction"));
    const $t9 = (await $.wv([$t8], "CreditPurpose", C, false));
    await $.mset((await $.wcall([$t8, $t9], "FieldByName", ["opendate"], C)), "AsDateTime", (await $.wcall([$t8, $t9], "trunc", [(await $.mv((await $.wv([$t8, $t9], "DTPOpenDate", C, false)), "DateTime"))], C)));
    await $.mset((await $.wcall([$t8, $t9], "FieldByName", ["expdate"], C)), "AsDateTime", (await $.wcall([$t8, $t9], "trunc", [(await $.mv((await $.wv([$t8, $t9], "DTPCloseDate", C, false)), "DateTime"))], C)));
  }
  await $.mset((await $.v(C, "Edit7")), "Text", (await $.mv((await $.v(C, "DBEditEh3")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "Edit7Change", async function Edit7Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mon": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["mon"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit7")), "text"))]));
  await $.mset((await $.mv((await $.v(C, "AddEditContractForm")), "DTPCloseDate")), "DateTime", (await $.mcall((await $.mv((await $.v(C, "DatModConstruction")), "sbcm_construction")), "CallDateFunction", ["GetFindExpdate", ["odat", (await $.mv((await $.v(C, "DTPOpenDate")), "DateTime")), "mon", L0["mon"]]])));
  {
    const $t10 = (await $.v(C, "DatModConstruction"));
    const $t11 = (await $.wv([$t10], "CreditPurpose", C, false));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["opendate"], C)), "AsDateTime", (await $.wcall([$t10, $t11], "trunc", [(await $.mv((await $.wv([$t10, $t11], "DTPOpenDate", C, false)), "DateTime"))], C)));
    await $.mset((await $.wcall([$t10, $t11], "FieldByName", ["expdate"], C)), "AsDateTime", (await $.wcall([$t10, $t11], "trunc", [(await $.mv((await $.wv([$t10, $t11], "DTPCloseDate", C, false)), "DateTime"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "Edit7KeyPress", async function Edit7KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAddEditContractForm", "DBLookupComboboxEh6Exit", async function DBLookupComboboxEh6Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CMSearchEditLoacAccs")), "Text", "");
  {
    const $t12 = (await $.v(C, "DatModConstruction"));
    const $t13 = (await $.wv([$t12], "Accounts", C, false));
    await $.stmt($.wcall([$t12, $t13], "Close", [], C));
    await $.stmt((await $.wcall([$t12, $t13], "SetVariable", ["BID", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.wv([$t12, $t13], "DBLookupComboboxEh6", C, false)), "ListSource")), "DataSet")), "FieldByName", ["ID"])), "asInteger"))], C)));
    await $.stmt($.wcall([$t12, $t13], "Open", [], C));
    await $.mset((await $.wv([$t12, $t13], "CMSearchEditLoacAccs", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "Fieldbyname", ["Acc_no"], C)), "asString")));
    await $.mset((await $.wv([$t12, $t13], "DBLookupComboboxEh2", C, false)), "Text", (await $.mv((await $.wcall([$t12, $t13], "Fieldbyname", ["Name"], C)), "asString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAddEditContractForm", "DBLookupComboboxEh6Change", async function DBLookupComboboxEh6Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
