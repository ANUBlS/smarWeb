// Generated from XohksMain.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("XohksMain", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CurrencyEdit", "StdCtrls", "ComCtrls", "Mask", "DBCtrls", "Buttons", "ExtCtrls", "XFSCtrls", "SearchEdit", "Oracle", "CommonDecls", "sboapiDataModuleImpl", "DataXohks", "XohksPayment_Det", "MainXhoksFormImpl", "TransType_Unit", "Get_to_shablonunit", "AcceptTrans_Unit", "ReceiveMessDetalsUnit", "Witch"]);
  const C = [U];
  U.defClass("TFormXohks", "TForm", {"xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "edit_sender": {"name": "Edit_Sender", "type": "TEdit"}, "edit_referens": {"name": "Edit_Referens", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "edit_bankcode": {"name": "Edit_BankCode", "type": "TEdit"}, "edit_account": {"name": "Edit_Account", "type": "TEdit"}, "edit_voen": {"name": "Edit_voen", "type": "TEdit"}, "edit_account_sub": {"name": "Edit_account_sub", "type": "TEdit"}, "edit_bik": {"name": "Edit_Bik", "type": "TEdit"}, "combobox_cd": {"name": "ComboBox_CD", "type": "TComboBox"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xfpanel15": {"name": "XFPanel15", "type": "TXFPanel"}, "edit_clientname": {"name": "Edit_clientName", "type": "TEdit"}, "edit_client_code": {"name": "Edit_Client_code", "type": "TEdit"}, "edit_client_voen": {"name": "Edit_Client_voen", "type": "TEdit"}, "xfpanel20": {"name": "XFPanel20", "type": "TXFPanel"}, "xfpanel21": {"name": "XFPanel21", "type": "TXFPanel"}, "xfpanel19": {"name": "XFPanel19", "type": "TXFPanel"}, "combo_date": {"name": "Combo_date", "type": "TDateTimePicker"}, "combo_valute": {"name": "Combo_valute", "type": "TComboBox"}, "valute_id": {"name": "Valute_ID", "type": "TListBox"}, "xfpanel22": {"name": "XFPanel22", "type": "TXFPanel"}, "edit_bnf": {"name": "Edit_BNF", "type": "TEdit"}, "xfpanel23": {"name": "XFPanel23", "type": "TXFPanel"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xfpanel18": {"name": "XFPanel18", "type": "TXFPanel"}, "button_add": {"name": "Button_add", "type": "TXFBitBtn"}, "buttonpost": {"name": "ButtonPost", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "edit_amount1": {"name": "Edit_Amount1", "type": "TEdit"}, "edit_amount": {"name": "Edit_amount", "type": "TCurrencyEdit"}, "accsearch___": {"name": "AccSearch___", "type": "TSearchEdit"}, "packtemp": {"name": "PackTemp", "type": "TOraclePackage"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "labelfilialname": {"name": "LabelFilialName", "type": "TXFLabel"}, "xfpanel16": {"name": "XFPanel16", "type": "TXFPanel"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "xflabel1": {"name": "XFLabel1", "type": "TXFLabel"}, "xflabel2": {"name": "XFLabel2", "type": "TXFLabel"}}, {});
  U.init(async () => {
    U.var_("FormXohks", null, "TFormXohks");
    U.var_("Tcust_name", '', "String");
    U.var_("Tcust_id", 0, "integer");
  });
  U.func("GetUseDate", async function GetUseDate(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0};
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "FieldByName", ["USEBANKDATE"])), "AsInteger")), 1))) {
    L0["result"] = (await $.call(C, "Trunc", [(await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "GetSysDate")), "CallDateFunction", ["GET_DATE", []]))]));
  } else {
    L0["result"] = (await $.call(C, "Trunc", [(await $.v(C, "Date"))]));
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("CheckField", async function CheckField(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"all": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["all"]);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "SQL")), "Add", [$.add($.add("Select * from account where acc_no = '", (await $.mv((await $.mv((await $.v(C, "FormXohks")), "DBLookupComboBox1")), "Text"))), "'")])));
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "Open", []);
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormXohks")), "DBLookupComboBox1")), "Text"))])), "")), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "FormXohks")), "Edit_Client_voen")), "Text")), "")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "FormXohks")), "DBLookupComboBox1")), "Color")), (await $.v(C, "clred")))))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormXohks")), "Edit_clientName")), "Text"))])), "")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataCheck")), "RecordCount")), 0)))))) {
    L0["result"] = false;
    await $.stmt((await $.call(C, "MessageDlg", ["Melumat Tam deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
  } else {
    L0["result"] = true;
  }
  if ($.truthy(L0["all"])) {
    if ($.truthy(($.eq((await $.mv((await $.mv((await $.v(C, "FormXohks")), "Edit_Amount")), "Text")), "0")))) {
      L0["result"] = false;
      await $.stmt((await $.call(C, "MessageDlg", ["Məlumat Tam deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    }
  }
  return L0.result;
}, {"params": ["all"], "kind": "function", "ptypes": ["Boolean"]});
  U.func("FindFilialID", async function FindFilialID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "filial_id": 0};
  {
    const $t1 = (await $.v(C, "FormXohks"));
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataModXhoks", C, false)), "DataAccount")), "FieldByName", ["Filial"])), "AsInteger")), 0))) {
      await $.wset([$t1], "Filial_Id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataModXhoks", C, false)), "DataAccount")), "FieldByName", ["Filial"])), "AsInteger")), { get: async () => L0["filial_id"], set: async (v) => { L0["filial_id"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "DataModXhoks", C, false)), "DataSetFilial")), "SetVariable", ["FilialID", (await $.wv([$t1], "Filial_Id", { get: async () => L0["filial_id"], set: async (v) => { L0["filial_id"] = v; }, local: true }, false))])));
      await $.mcall((await $.mv((await $.wv([$t1], "DataModXhoks", C, false)), "DataSetFilial")), "Refresh", []);
      await $.mset((await $.wv([$t1], "LabelFilialName", C, false)), "Caption", $.add("FİLİAL - ", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataModXhoks", C, false)), "DataSetFilial")), "fieldbyname", ["Name"])), "AsString"))));
      await $.wset([$t1], "Result", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataModXhoks", C, false)), "DataSetFilial")), "fieldbyname", ["id"])), "AsInteger")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } else {
      await $.mset((await $.wv([$t1], "LabelFilialName", C, false)), "Caption", "\"MƏRKƏZİ OFİS\"");
      await $.wset([$t1], "Result", 0, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.func("InitPlugin", async function InitPlugin(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), "pname": $.copyArg(p1), "pid": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["s", "pname", "pid"]);
  if ($.truthy($.eq(L0["s"], "Main"))) {
    await $.set(C, "Tcust_name", L0["pname"]);
    await $.set(C, "Tcust_id", L0["pid"]);
    await $.mcall((await $.v(C, "MainXohksForm")), "ShowModal", []);
  } else {
    await $.mcall((await $.v(C, "FormXohks")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["s", "Pname", "Pid"], "kind": "procedure", "ptypes": ["String", "String", "integer"]});
  U.method("TFormXohks", "Edit_account_subKeyPress", async function Edit_account_subKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "MainXohksForm")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormXohks", "Edit_clientNameChange", async function Edit_clientNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "Batchs_Edit")))) {
    await $.mset((await $.v(C, "ButtonPost")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "Edit_clientNameKeyPress", async function Edit_clientNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormXohks", "Edit_Client_codeChange", async function Edit_Client_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "Batchs_Edit")))) {
    await $.mset((await $.v(C, "ButtonPost")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "Edit_Client_codeKeyPress", async function Edit_Client_codeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormXohks", "Edit_Client_voenChange", async function Edit_Client_voenChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "Batchs_Edit")))) {
    await $.mset((await $.v(C, "ButtonPost")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "Edit_Client_voenKeyPress", async function Edit_Client_voenKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormXohks", "Edit_ReferensChange", async function Edit_ReferensChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "Edit_ReferensKeyPress", async function Edit_ReferensKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormXohks", "Edit_SenderChange", async function Edit_SenderChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "Batchs_Edit")))) {
    await $.mset((await $.v(C, "ButtonPost")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "Edit_SenderKeyPress", async function Edit_SenderKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormXohks", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormXohks", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Rollback", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormXohks", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "MainXohksForm", (await $.mcall((await $.v(C, "TMainXohksForm")), "Create", [Self])));
  await $.set(C, "TransCodeForm", (await $.mcall((await $.v(C, "TTransCodeForm")), "Create", [Self])));
  await $.set(C, "FormPayment_Det", (await $.mcall((await $.v(C, "TFormPayment_Det")), "Create", [Self])));
  await $.set(C, "DataModXhoks", (await $.mcall((await $.v(C, "TDataModXhoks")), "Create", [Self])));
  await $.set(C, "Form_get_to_shablon", (await $.mcall((await $.v(C, "TForm_get_to_shablon")), "Create", [Self])));
  await $.set(C, "FormAcceptTransaction", (await $.mcall((await $.v(C, "TFormAcceptTransaction")), "Create", [Self])));
  await $.set(C, "RecMessDet_Form", (await $.mcall((await $.v(C, "TRecMessDet_Form")), "Create", [Self])));
  await $.set(C, "FormWitch", (await $.mcall((await $.v(C, "TFormWitch")), "Create", [Self])));
  try {
    {
      const $t3 = (await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA"));
      await $.stmt((await $.wcall([$t3], "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKSBENIFICARY"]], C)));
    }
  } catch ($t2) {
    $.rethrowControl($t2);
    $.handled($t2);
    await $.mcall((await $.mv((await $.v(C, "MainXohksForm")), "PanelBeneficary")), "Hide", []);
  }
  try {
    {
      const $t5 = (await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA"));
      await $.stmt((await $.wcall([$t5], "CallProcedure", ["CheckAdvancedObjectAccess", ["VERIFIKATOR"]], C)));
    }
    await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "StDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "EndDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mcall((await $.v(C, "MainXohksForm")), "selectdate", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Filter", "((status=1) and (FILIAL=0))or(status=5)or(status=7)");
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Filter", "(status=1 )or(status=5)or(status=7)");
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Open", []);
  } catch ($t4) {
    $.rethrowControl($t4);
    $.handled($t4);
  }
  try {
    {
      const $t7 = (await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA"));
      await $.stmt((await $.wcall([$t7], "CallProcedure", ["CheckAdvancedObjectAccess", ["FVERIFIKATOR"]], C)));
    }
    await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "StDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "EndDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mcall((await $.v(C, "MainXohksForm")), "selectdate", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Filter", "((status=1) and ( FILIAL>0))");
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Filter", "(status=1)");
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Open", []);
  } catch ($t6) {
    $.rethrowControl($t6);
    $.handled($t6);
  }
  try {
    {
      const $t9 = (await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA"));
      await $.stmt((await $.wcall([$t9], "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_CREATEFILE"]], C)));
    }
    await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "StDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "EndDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mcall((await $.v(C, "MainXohksForm")), "selectdate", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Filter", "(status=6)");
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Filter", "(status=6)");
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Open", []);
  } catch ($t8) {
    $.rethrowControl($t8);
    $.handled($t8);
  }
  try {
    {
      const $t11 = (await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA"));
      await $.stmt((await $.wcall([$t11], "CallProcedure", ["CheckAdvancedObjectAccess", ["AVTORIZATOR"]], C)));
    }
    await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "StDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "EndDate")), "date", (await $.v(C, "GetUseDate")));
    await $.mcall((await $.v(C, "MainXohksForm")), "selectdate", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Filter", "(status=4)");
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Close", []);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Filtered", true);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Filter", "(status=4)");
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Open", []);
  } catch ($t10) {
    $.rethrowControl($t10);
    $.handled($t10);
  }
  try {
    {
      const $t13 = (await $.mv((await $.v(C, "DataModXhoks")), "SB_ACA"));
      await $.stmt((await $.wcall([$t13], "CallProcedure", ["CheckAdvancedObjectAccess", ["XOHKS_COMMIT"]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "close", []);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "Filtered", false);
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Filtered", false);
  } catch ($t12) {
    $.rethrowControl($t12);
    $.handled($t12);
  }
  await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_CONFIG")), "Active", true);
  await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "StDate")), "date", (await $.v(C, "GetUseDate")));
  await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "EndDate")), "date", (await $.v(C, "GetUseDate")));
  await $.mcall((await $.v(C, "MainXohksForm")), "selectdate", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSetFilial")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "close", []);
  await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Active", false);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataSetFilial")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "open", []);
  await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "XS_IncomingView")), "Active", true);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_CODE")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BeneficiaryArchive")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BatchsArchive")), "open", []);
  await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "MainPageControl")), "ActivePageIndex", 0);
  await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "MainXohksForm")), "MainPageControl")), "Pages")), [0])), "Highlighted", true);
  await $.mcall((await $.v(C, "MainXohksForm")), "UpdateFileInList", []);
  await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "StDate_in")), "date", (await $.v(C, "GetUseDate")));
  await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "EndDate_in")), "date", (await $.v(C, "GetUseDate")));
  await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "DTPickOutArchBeg")), "Date", (await $.mv((await $.mv((await $.v(C, "MainXohksForm")), "StDate")), "date")));
  await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "DTPickOutArchEnd")), "Date", (await $.mv((await $.mv((await $.v(C, "MainXohksForm")), "StDate")), "date")));
  await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "INCBDATE")), "Date", (await $.mv((await $.mv((await $.v(C, "MainXohksForm")), "StDate")), "date")));
  await $.mset((await $.mv((await $.v(C, "MainXohksForm")), "INCEDATE")), "Date", (await $.mv((await $.mv((await $.v(C, "MainXohksForm")), "StDate")), "date")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "FormKeyUp", async function FormKeyUp(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "Vk_escape"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormXohks", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "RecordCount")), 1))) {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "FieldByName", ["id"])), "AsString")));
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Color")), (await $.v(C, "clred")))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")))))) {
      if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "fieldbyname", ["INN"])), "AsVariant")), (await $.v(C, "Null"))))) {
        await $.mset((await $.v(C, "Edit_Client_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "fieldbyname", ["INN"])), "AsString")));
      } else {
        await $.mset((await $.v(C, "Edit_Client_voen")), "Text", "/");
      }
      if ($.truthy($.gt((await $.v(C, "FindFilialID")), 0))) {
        await $.stmt((await $.mcall((await $.v(C, "MainXohksForm")), "ViewBankInfo", [true, (await $.v(C, "FindFilialID"))])));
      } else {
        await $.stmt((await $.mcall((await $.v(C, "MainXohksForm")), "ViewBankInfo", [false, 0])));
      }
    } else {
      await $.mcall((await $.v(C, "Edit_Client_voen")), "Clear", []);
    }
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_clientName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "FieldByName", ["name"])), "AsString")));
  } else {
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Referens")), "text", (await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "GetReference")), "CallStringfunction", ["GetNewBatchRefrence", [(await $.call(C, "strtoint", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))]))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "XFBitBtn3Click", async function XFBitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Rollback", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "AccSearch___Change", async function AccSearch___Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Color")), (await $.v(C, "clred")))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")))))) {
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "fieldbyname", ["INN"])), "AsVariant")), (await $.v(C, "Null"))))) {
      await $.mset((await $.v(C, "Edit_Client_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "fieldbyname", ["INN"])), "AsString")));
    } else {
      await $.mset((await $.v(C, "Edit_Client_voen")), "Text", "/");
    }
    if ($.truthy($.gt((await $.v(C, "FindFilialID")), 0))) {
      await $.stmt((await $.mcall((await $.v(C, "MainXohksForm")), "ViewBankInfo", [true, (await $.v(C, "FindFilialID"))])));
    } else {
      await $.stmt((await $.mcall((await $.v(C, "MainXohksForm")), "ViewBankInfo", [false, 0])));
    }
  } else {
    await $.mcall((await $.v(C, "Edit_Client_voen")), "Clear", []);
  }
  if ($.truthy((await $.v(C, "Batchs_Edit")))) {
    await $.mset((await $.v(C, "ButtonPost")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "AccSearch___KeyPress", async function AccSearch___KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormXohks", "ButtonPostClick", async function ButtonPostClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "isfilial": 0, "transdate": 0, "format": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.call(C, "checkfield", [true])), false)), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormXohks")), "Edit_Referens")), "Text"))])), "")))))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Məlumat Tam deyil", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.idx((await $.mv((await $.v(C, "Valute_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_valute")), "ItemIndex"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "FieldByName", ["val_acc"])), "AsString"))))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Bu hesab seçilmiş valutaya uygun deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  await $.set(C, "trans_date", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "Combo_date")), "DateTime"))])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_BNF")), "Text")), "/BNF/0"))) {
    if ($.truthy((await $.v(C, "Batchs_Edit")))) {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["trans_ref"])), "AsString")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["Status"])), "AsInteger")), 0)))))) {
        await $.stmt((await $.call(C, "MessageDlg", ["Qeydiyyat №-si dəyşilməlidir!", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
        return L0.result;
      }
      await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsInteger")));
    }
    L0["isfilial"] = (await $.v(C, "FindFilialID"));
    L0["transdate"] = (await $.call(C, "Trunc", [(await $.v(C, "GetUseDate"))]));
    if ($.truthy((await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "RB_102")), "Checked")))) {
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainXohksForm")), "GridBatchs")), "Columns")), [13])), "Font")), "Color", (await $.v(C, "clblack")));
      L0["format"] = "MT102";
    }
    if ($.truthy((await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "RB_102T")), "Checked")))) {
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "MainXohksForm")), "GridBatchs")), "Columns")), [13])), "Font")), "Color", (await $.v(C, "clred")));
      L0["format"] = "MT102T";
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "CallProcedure", ["xs_Batchs_update", [(await $.v(C, "new_id")), "CREDIT", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.v(C, "edit_clientname")), "text")), (await $.mv((await $.v(C, "edit_client_code")), "text")), (await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.v(C, "edit_amount")), "value")), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), L0["isfilial"], (await $.mv((await $.v(C, "Edit_client_voen")), "text")), L0["format"]]])));
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    if ($.truthy((await $.v(C, "Batchs_Edit")))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "CallIntegerFunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
      await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "RefreshRecord", []);
    } else {
      await $.mcall((await $.v(C, "MainXohksForm")), "RefreshDataBatchs", []);
    }
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "Button_addClick", async function Button_addClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "checkfield", [false])), false))) {
    return L0.result;
  }
  if ($.truthy($.ne((await $.idx((await $.mv((await $.v(C, "Valute_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_valute")), "ItemIndex"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "FieldByName", ["val_acc"])), "AsString"))))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Bu hesab seçilmiş valutaya uygun deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  {
    const $t14 = (await $.v(C, "FormPayment_Det"));
    if ($.truthy((await $.mv((await $.wv([$t14], "RB_102T", C, false)), "Checked")))) {
      await $.mset((await $.wv([$t14], "RB_102T", C, false)), "Checked", (await $.wv([$t14], "false", C, false)));
      await $.mset((await $.wv([$t14], "RB_102", C, false)), "Checked", (await $.wv([$t14], "true", C, false)));
    }
    await $.mset((await $.wv([$t14], "Edit_BankName_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["BANK"])), "AsString")));
    await $.mset((await $.wv([$t14], "Edit_BIK_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t14], "Edit_BankCode_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.wv([$t14], "Edit_account_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t14], "Edit_Voen_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t14], "DataModXhoks", C, false)), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t14], "Combo_Valute", C, false)), "ItemIndex", (await $.mv((await $.mv((await $.wv([$t14], "FormXohks", C, false)), "Combo_valute")), "ItemIndex")));
    await $.mset((await $.wv([$t14], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t14], "FormXohks", C, false)), "Edit_account_sub")), "text")));
    await $.mset((await $.wv([$t14], "Combo_BankName", C, false)), "ItemIndex", (-(1)));
    await $.mcall((await $.wv([$t14], "Edit_BIK", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_BankCode", C, false)), "clear", []);
    await $.mcall((await $.wv([$t14], "Edit_Referens", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_account", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_Account_Sub", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_Amount", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_TransCode", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_Client_Name", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "Edit_Client_Code", C, false)), "Text", "/");
    await $.mcall((await $.wv([$t14], "Edit_Client_acc_no", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_Client_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_inf1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_inf2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_inf3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_tey1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_tey2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_tey3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t14], "Edit_tey4", C, false)), "Clear", []);
  }
  {
    const $t15 = (await $.v(C, "FormPayment_Det"));
    await $.mset((await $.wv([$t15], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t15], "True", C, false)));
    await $.mset((await $.wv([$t15], "XFBitBtn6", C, false)), "Enabled", (await $.wv([$t15], "false", C, false)));
    await $.mset((await $.wv([$t15], "XFBitBtn4", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "XFBitBtn3", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "XFGroupBox8", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.stmt($.wcall([$t15], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormXohks", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Color")), (await $.v(C, "clred")))), async () => ($.ne((await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), "")))))) {
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "fieldbyname", ["INN"])), "AsVariant")), (await $.v(C, "Null"))))) {
      await $.mset((await $.v(C, "Edit_Client_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "fieldbyname", ["INN"])), "AsString")));
    } else {
      await $.mset((await $.v(C, "Edit_Client_voen")), "Text", "/");
    }
    if ($.truthy($.gt((await $.v(C, "FindFilialID")), 0))) {
      await $.stmt((await $.mcall((await $.v(C, "MainXohksForm")), "ViewBankInfo", [true, (await $.v(C, "FindFilialID"))])));
    } else {
      await $.stmt((await $.mcall((await $.v(C, "MainXohksForm")), "ViewBankInfo", [false, 0])));
    }
  } else {
    await $.mcall((await $.v(C, "Edit_Client_voen")), "Clear", []);
  }
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_clientName")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataAccount")), "FieldByName", ["name"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormXohks", (await $.mcall((await $.v(C, "TFormXohks")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
