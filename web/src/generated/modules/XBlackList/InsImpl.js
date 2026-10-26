// Generated from InsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "nlsDialogs", "StdCtrls", "ExtCtrls", "Buttons", "ComCtrls", "DBCtrls", "Mask", "CMDBSearchEdit", "DBCtrlsEh", "DBLookupEh", "DmBlackImpl", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TInsForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "label3": {"name": "Label3", "type": "TLabel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "label13": {"name": "Label13", "type": "TLabel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("InsForm", null, "TInsForm");
  });
  U.method("TInsForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TInsForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsForm", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0, "dat1": 0, "doc_type": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  L0["dat1"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker2")), "DateTime"))]))]));
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "text")), ""))) {
    await $.stmt((await $.call(C, "ShowMessage", ["Müştərinin adını daxil edin!"])));
    return L0.result;
  } else {
    if ($.truthy($.eq((await $.mv((await $.v(C, "edit2")), "Text")), ""))) {
      await $.stmt((await $.call(C, "showMessage", ["Müştərinin soyadını daxil edin!"])));
      return L0.result;
    } else {
      if ($.truthy($.eq((await $.mv((await $.v(C, "edit3")), "text")), ""))) {
        await $.stmt((await $.call(C, "showmessage", ["Müştərinin pinkodunu daxil edin! "])));
        return L0.result;
      }
    }
  }
  if ($.truthy($.eq((await $.v(C, "x")), 1))) {
    {
      const $t1 = (await $.v(C, "DmBlack"));
      await $.stmt((await $.mcall((await $.wv([$t1], "OraclePackage1", C, false)), "CallProcedure", ["add_cust_black", ["p_adtype", 0, "p_name", (await $.mv((await $.wv([$t1], "edit1", C, false)), "text")), "p_lastname", (await $.mv((await $.wv([$t1], "edit2", C, false)), "text")), "p_middlename", (await $.mv((await $.wv([$t1], "edit4", C, false)), "text")), "p_doc_type", (await $.mv((await $.mcall((await $.wv([$t1], "Doctype", C, false)), "fieldbyname", ["ID"])), "asinteger")), "p_doc_serie", (await $.mv((await $.wv([$t1], "edit7", C, false)), "text")), "p_doc_num", (await $.mv((await $.wv([$t1], "edit6", C, false)), "text")), "p_citizenship", (await $.mv((await $.wv([$t1], "DBLookupComboBox3", C, false)), "text")), "p_adrs_state", (await $.mv((await $.wv([$t1], "DBLookupComboBox3", C, false)), "text")), "p_adrs_city", (await $.mv((await $.wv([$t1], "DBLookupComboBox2", C, false)), "text")), "p_address", (await $.mv((await $.wv([$t1], "edit8", C, false)), "text")), "p_doc_date", (await $.wv([$t1], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), "p_doc_organ", (await $.mv((await $.wv([$t1], "edit5", C, false)), "text")), "p_gender", (await $.mv((await $.mcall((await $.wv([$t1], "Sex", C, false)), "fieldbyname", ["ID"])), "asinteger")), "p_doc_pin", (await $.mv((await $.wv([$t1], "edit3", C, false)), "text")), "p_birthdate", (await $.wv([$t1], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))]])));
    }
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Refresh", []);
    await $.mset((await $.v(C, "edit1")), "text", "");
    await $.mset((await $.v(C, "edit2")), "text", "");
    await $.mset((await $.v(C, "edit3")), "text", "");
    await $.mset((await $.v(C, "edit4")), "text", "");
    await $.mset((await $.v(C, "edit5")), "text", "");
    await $.mset((await $.v(C, "edit6")), "text", "");
    await $.mset((await $.v(C, "edit7")), "text", "");
    await $.mset((await $.v(C, "edit8")), "text", "");
    await $.mset((await $.v(C, "DBLookupComboBox3")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox2")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox1")), "KeyValue", "");
    await $.mset((await $.v(C, "DBLookupComboBox4")), "KeyValue", "");
    await $.mset((await $.v(C, "DBEdit1")), "Text", "");
    await $.stmt($.call(C, "close", []));
  } else {
    {
      const $t2 = (await $.v(C, "DmBlack"));
      await $.stmt((await $.mcall((await $.wv([$t2], "OraclePackage1", C, false)), "CallProcedure", ["upd_cust_black", ["p_id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DmBlack", C, false)), "MainDSet")), "fieldbyname", ["id"])), "asinteger")), "p_name", (await $.mv((await $.wv([$t2], "edit1", C, false)), "text")), "p_lastname", (await $.mv((await $.wv([$t2], "edit2", C, false)), "text")), "p_middlename", (await $.mv((await $.wv([$t2], "edit4", C, false)), "text")), "p_doc_type", (await $.mv((await $.mcall((await $.wv([$t2], "Doctype", C, false)), "fieldbyname", ["ID"])), "asinteger")), "p_doc_serie", (await $.mv((await $.wv([$t2], "edit7", C, false)), "text")), "p_doc_num", (await $.mv((await $.wv([$t2], "edit6", C, false)), "text")), "p_citizenship", (await $.mv((await $.wv([$t2], "DBLookupComboBox3", C, false)), "text")), "p_adrs_state", (await $.mv((await $.wv([$t2], "DBLookupComboBox3", C, false)), "text")), "p_adrs_city", (await $.mv((await $.wv([$t2], "DBLookupComboBox2", C, false)), "text")), "p_address", (await $.mv((await $.wv([$t2], "edit8", C, false)), "text")), "p_doc_date", (await $.wv([$t2], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false)), "p_doc_organ", (await $.mv((await $.wv([$t2], "edit5", C, false)), "text")), "p_gender", (await $.mv((await $.mcall((await $.wv([$t2], "Sex", C, false)), "fieldbyname", ["ID"])), "asinteger")), "p_doc_pin", (await $.mv((await $.wv([$t2], "edit3", C, false)), "text")), "p_birthdate", (await $.wv([$t2], "dat1", { get: async () => L0["dat1"], set: async (v) => { L0["dat1"] = v; }, local: true }, false))]])));
    }
    await $.mcall((await $.mv((await $.v(C, "DmBlack")), "MainDSet")), "Refresh", []);
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsForm", "DBEdit1Enter", async function DBEdit1Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsForm", "DBLookupComboBox3CloseUp", async function DBLookupComboBox3CloseUp(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DmBlack"));
    const $t4 = (await $.wv([$t3], "CITIES", C, false));
    await $.stmt($.wcall([$t3, $t4], "close", [], C));
    await $.stmt((await $.wcall([$t3, $t4], "SetVariable", ["country_id", (await $.mv((await $.mcall((await $.wv([$t3, $t4], "Contry", C, false)), "FieldByName", ["id"])), "AsInteger"))], C)));
    await $.stmt($.wcall([$t3, $t4], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsForm", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInsForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "x")), 2))) {
    await $.stmt((await $.mcall((await $.v(C, "InsForm")), "DBLookupComboBox3CloseUp", [L0["sender"]])));
  }
  if ($.truthy($.eq((await $.v(C, "x")), 1))) {
    await $.mset((await $.v(C, "DBEdit1")), "text", "");
    await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "Sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
    await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmBlack")), "Sysdat")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
