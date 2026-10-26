// Generated from Contractimpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Contractimpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "CMDBSearchEdit", "Buttons", "ComCtrls", "DBCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "Db", "OracleData", "CMHintBox", "NLSLocalizer", "DatModConstimpl", "FlatsMgrIMPL", "UnitData", "sboapiDataModuleImpl", "UnitAccBuyers", "cc_BuyersPr_TLB", "cc_BuyersImpl", "RepContImpl"]);
  const C = [U];
  U.defClass("TFrmContract", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "branchcbeh": {"name": "BranchCBEh", "type": "TDBLookupComboboxEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "statictext3": {"name": "StaticText3", "type": "TStaticText"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "statictext5": {"name": "StaticText5", "type": "TStaticText"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "statictext19": {"name": "StaticText19", "type": "TStaticText"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dtpopendate": {"name": "DTPOpenDate", "type": "TDateTimePicker"}, "dtpclosedate": {"name": "DTPCloseDate", "type": "TDateTimePicker"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "statictext17": {"name": "StaticText17", "type": "TStaticText"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "statictext14": {"name": "StaticText14", "type": "TStaticText"}, "statictext15": {"name": "StaticText15", "type": "TStaticText"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label3": {"name": "Label3", "type": "TLabel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "hbconclusion": {"name": "HBConclusion", "type": "TCMHintBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "dbnumberediteh2": {"name": "DBNumberEditEh2", "type": "TDBNumberEditEh"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "dbnumberediteh6": {"name": "DBNumberEditEh6", "type": "TDBNumberEditEh"}, "dbnumberediteh4": {"name": "DBNumberEditEh4", "type": "TDBNumberEditEh"}, "dbnumberediteh3": {"name": "DBNumberEditEh3", "type": "TDBNumberEditEh"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "statictext13": {"name": "StaticText13", "type": "TStaticText"}, "statictext18": {"name": "StaticText18", "type": "TStaticText"}, "statictext10": {"name": "StaticText10", "type": "TStaticText"}, "statictext12": {"name": "StaticText12", "type": "TStaticText"}, "statictext11": {"name": "StaticText11", "type": "TStaticText"}, "statictext9": {"name": "StaticText9", "type": "TStaticText"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "statictext16": {"name": "StaticText16", "type": "TStaticText"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "statictext1": {"name": "StaticText1", "type": "TStaticText"}, "editflatcode": {"name": "EditFlatCode", "type": "TEdit"}, "editprice1": {"name": "EditPrice1", "type": "TEdit"}, "statictext20": {"name": "StaticText20", "type": "TStaticText"}, "statictext21": {"name": "StaticText21", "type": "TStaticText"}, "statictext8": {"name": "StaticText8", "type": "TStaticText"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "cmsearcheditloacaccs": {"name": "CMSearchEditLoacAccs", "type": "TCMSearchEdit"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "dbnumberediteh7": {"name": "DBNumberEditEh7", "type": "TDBNumberEditEh"}, "statictext22": {"name": "StaticText22", "type": "TStaticText"}}, {});
  U.init(async () => {
    U.var_("FrmContract", null, "TFrmContract");
  });
  U.method("TFrmContract", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "CheckFields", async function CheckFields(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit8")), "text")), ""))) {
    await $.stmt((await $.mcall((await $.v(C, "HBConclusion")), "ShowMessage", ["Müqavilənin № sahəsi boşdur !"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit6")), "text")), ""))) {
    await $.stmt((await $.mcall((await $.v(C, "HBConclusion")), "ShowMessage", ["Müqavilənin dəyəri sahəsi boşdur !"])));
    $.abort();
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "CMSearchEditLoacAccs")), "text")), ""))) {
    await $.stmt((await $.mcall((await $.v(C, "HBConclusion")), "ShowMessage", ["Müqavilənin dəyəri sahəsi boşdur !"])));
    $.abort();
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmContract", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "customerid": 0, "op_id": 0, "accno": '', "currencyid": 0, "name": '', "open_dat": 0, "balcn": 0, "ownid": 0, "accid": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Accounts")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Accounts")), "SetVariable", ["BID", (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "keyvalue"))])));
  await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Accounts")), "Open", []);
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DatModConstr")), "cc_settings")), "active"))))) {
    await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_settings")), "open", []);
  }
  L0["accid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CreditPurpose")), "FieldByName", ["ACCID"])), "AsInteger"));
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DatModConstr")), "CreditPurpose")), "State")), (await $.v(C, "dsInsert"))))) {
    L0["accno"] = (await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CC_GENERAL")), "CallStringFunction", ["GenerateAccountNumber", ["CustomerID", (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "DBEdit1")), "Text"))]))]]));
    L0["customerid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_settings")), "FieldByName", ["ACCCUST"])), "AsInteger"));
    L0["currencyid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_settings")), "FieldByName", ["ACCCUR"])), "AsInteger"));
    L0["name"] = (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "Text"));
    L0["open_dat"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "SBOP")), "CallDateFunction", ["get_date", []]))]))]));
    L0["balcn"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_settings")), "FieldByName", ["ACCBALCN"])), "AsInteger"));
    L0["ownid"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CreditPurpose")), "FieldByName", ["BUYER"])), "AsInteger"));
    L0["accid"] = (await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CC_GENERAL")), "CallIntegerFunction", ["add_account", ["p_CustID", L0["customerid"], "p_AccNo", L0["accno"], "p_Curr", L0["currencyid"], "p_Name", L0["name"], "p_OpenDate", L0["open_dat"], "p_BalCn", L0["balcn"], "p_OwnID", L0["ownid"]]]));
    await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Accounts")), "Refresh", []);
  }
  {
    const $t1 = (await $.v(C, "DatModConstr"));
    const $t2 = (await $.wv([$t1], "CreditPurpose", C, false));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["AccID"], C)), "AsInteger", (await $.wv([$t1, $t2], "AccID", { get: async () => L0["accid"], set: async (v) => { L0["accid"] = v; }, local: true }, false)));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["CONTAMOUNT"], C)), "asfloat", (await $.mv((await $.wcall([$t1, $t2], "FieldByName", ["restt"], C)), "AsFloat")));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["opendate"], C)), "AsDateTime", (await $.wcall([$t1, $t2], "trunc", [(await $.mv((await $.wv([$t1, $t2], "DTPOpenDate", C, false)), "DateTime"))], C)));
    await $.mset((await $.wcall([$t1, $t2], "FieldByName", ["note"], C)), "AsInteger", (await $.mv((await $.wv([$t1, $t2], "DBLookupComboBox1", C, false)), "KeyValue")));
    await $.stmt($.wcall([$t1, $t2], "Post", [], C));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Refresh", []);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "DatModConstr"))]))))) {
    await $.set(C, "DatModConstr", (await $.mcall((await $.v(C, "TDatModConstr")), "Create", [Self])));
  }
  await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_bookmarkDataSet")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_bookmarkDataSet")), "SetVariable", ["Flatcode", (await $.mv((await $.v(C, "EditFlatCode")), "Text"))])));
  await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "cc_bookmarkDataSet")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Templates")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Templates")), "Open", []);
  await $.set(C, "RepCont", (await $.mcall((await $.v(C, "TRepCont")), "Create", [Self])));
  await $.mcall((await $.v(C, "RepCont")), "ShowModal", []);
  await $.mcall((await $.v(C, "FrmContract")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "FlatsMgrForm"))]))))) {
    await $.set(C, "FlatsMgrForm", (await $.mcall((await $.v(C, "TFlatsMgrForm")), "Create", [Self])));
  }
  await $.mcall((await $.v(C, "FlatsMgrForm")), "ShowModal", []);
  await $.mcall((await $.mv((await $.v(C, "FlatsMgrForm")), "flat")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "FlatsMgrForm")), "building")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "FlatsMgrForm")), "companie")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Customers")), "Refresh", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "ListSource")), "DataSet")), "FieldByName", ["NAME"])), "AsString")));
  await $.mset((await $.v(C, "Edit7")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CreditPurpose")), "FieldByName", ["PeriodContracts"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CreditPurpose")), "FieldByName", ["note"])), "AsString")));
  await $.mset((await $.v(C, "BranchCBEh")), "KeyValue", 0);
  await $.mset((await $.v(C, "DBLookupComboboxEh5")), "KeyValue", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmContract", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t3 = L0["sender"];
        { const $t4 = (await $.wv([$t3], "Tag", C, false));
          if ($.eq($t4, 1)) {
            await $.stmt((await $.wcall([$t3], "SelectNext", [(await $.wv([$t3], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t3], "True", C, false)), (await $.wv([$t3], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContract", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "FrmContract")), "DBEdit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "DBLookupComboboxEh6")), "keyvalue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "fieldbyname", ["id"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "DBLookupComboboxEh6KeyValueChanged", async function DBLookupComboboxEh6KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t5], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t5], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "DTPCloseDateChange", async function DTPCloseDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "DatModConstr"));
    const $t7 = (await $.wv([$t6], "CreditPurpose", C, false));
    await $.mset((await $.wcall([$t6, $t7], "FieldByName", ["opendate"], C)), "AsDateTime", (await $.wcall([$t6, $t7], "trunc", [(await $.mv((await $.wv([$t6, $t7], "DTPOpenDate", C, false)), "DateTime"))], C)));
    await $.mset((await $.wcall([$t6, $t7], "FieldByName", ["expdate"], C)), "AsDateTime", (await $.wcall([$t6, $t7], "trunc", [(await $.mv((await $.wv([$t6, $t7], "DTPCloseDate", C, false)), "DateTime"))], C)));
  }
  await $.mset((await $.v(C, "Edit7")), "Text", (await $.mv((await $.v(C, "DBEditEh3")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "Edit7Change", async function Edit7Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "mon": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["mon"] = (await $.call(C, "strtoint", [(await $.mv((await $.v(C, "edit7")), "text"))]));
  await $.mset((await $.mv((await $.v(C, "FrmContract")), "DTPCloseDate")), "DateTime", (await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "CC_GENERAL")), "CallDateFunction", ["GetFindExpdate", ["odat", (await $.mv((await $.v(C, "DTPOpenDate")), "DateTime")), "mon", L0["mon"]]])));
  {
    const $t8 = (await $.v(C, "DatModConstr"));
    const $t9 = (await $.wv([$t8], "CreditPurpose", C, false));
    await $.mset((await $.wcall([$t8, $t9], "FieldByName", ["opendate"], C)), "AsDateTime", (await $.wcall([$t8, $t9], "trunc", [(await $.mv((await $.wv([$t8, $t9], "DTPOpenDate", C, false)), "DateTime"))], C)));
    await $.mset((await $.wcall([$t8, $t9], "FieldByName", ["expdate"], C)), "AsDateTime", (await $.wcall([$t8, $t9], "trunc", [(await $.mv((await $.wv([$t8, $t9], "DTPCloseDate", C, false)), "DateTime"))], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_Buyers")), "ODSBuyers")), "Locate", ["ID", (await $.mv((await $.v(C, "DBEdit1")), "Text")), []])));
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmContract", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmContract", "DBLookupComboboxEh6Change", async function DBLookupComboboxEh6Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Accounts")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Accounts")), "SetVariable", ["BID", (await $.mv((await $.v(C, "DBLookupComboboxEh6")), "keyvalue"))])));
  await $.mcall((await $.mv((await $.v(C, "DatModConstr")), "Accounts")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmContract", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "FormAccBuyers", (await $.mcall((await $.v(C, "TFormAccBuyers")), "Create", [Self])));
    await $.mcall((await $.v(C, "FormAccBuyers")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "FormAccBuyers")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
