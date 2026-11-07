// Generated from InFormUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InFormUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "ActnList", "ComCtrls", "DBCtrls", "CurrencyEdit", "Mask", "ExtCtrls", "SearchEdit", "NLSLocalizer", "CO_datamod_impl", "CO_In_Unit"]);
  const C = [U];
  U.defClass("TInForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "d_ostat": {"name": "d_ostat", "type": "TLabel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "ekv": {"name": "ekv", "type": "TCurrencyEdit"}, "d_pok_ostat": {"name": "d_pok_ostat", "type": "TLabel"}, "editvalute": {"name": "editvalute", "type": "TComboBox"}, "val_code": {"name": "val_code", "type": "TEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "c_ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "c_pok_ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "editrate_": {"name": "editrate_", "type": "TEdit"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "editvalute_": {"name": "editvalute_", "type": "TComboBox"}, "cur_val_code": {"name": "cur_val_code", "type": "TEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "debtvalue": {"name": "debtvalue", "type": "TCurrencyEdit"}, "creditvalue": {"name": "creditvalue", "type": "TCurrencyEdit"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "editrate": {"name": "editrate", "type": "TEdit"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "acc_id": {"name": "acc_id", "type": "TEdit"}, "acc_id_": {"name": "acc_id_", "type": "TEdit"}, "valname": {"name": "valname", "type": "TEdit"}, "valname_": {"name": "valname_", "type": "TEdit"}, "commission_id": {"name": "commission_id", "type": "TEdit"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}}, {});
  U.init(async () => {
    U.var_("InForm", null, "TInForm");
  });
  U.method("TInForm", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TInForm", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TInForm", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Əməliyyat";
  await $.inherited(Self, "TInForm", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TInForm", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "acc")), "fieldbyname", ["acc_no"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["acc_no"])), "asstring")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t2 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mcall((await $.wv([$t2], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t2], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t2], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t3], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.wv([$t3], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t3], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "ACC")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "ACC_")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CashSymbols")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "Open", []);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", "");
  await $.mset((await $.v(C, "Dbedit1")), "text", "");
  await $.mset((await $.v(C, "Dbedit2")), "text", "");
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", "");
  await $.mset((await $.v(C, "Dbedit5")), "text", "");
  await $.mset((await $.v(C, "Dbedit3")), "text", "");
  await $.mset((await $.v(C, "dbedit7")), "text", "");
  await $.mset((await $.v(C, "dbedit8")), "text", "");
  await $.mset((await $.v(C, "dbedit4")), "text", "");
  await $.mset((await $.v(C, "dbedit9")), "text", "");
  await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accno"])), "asstring")));
  await $.mset((await $.v(C, "dbedit5")), "text", (await $.mv((await $.v(C, "CreditAccSearchEdit")), "text")));
  await $.mset((await $.v(C, "dbedit3")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accname"])), "asstring")));
  await $.mset((await $.v(C, "cur_val_code")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accvalcode"])), "asstring")));
  await $.mset((await $.v(C, "acc_id_")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "commission_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "acc_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "fieldbyname", ["Debt"])), "asstring")));
  await $.mset((await $.v(C, "dbedit6")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "fieldbyname", ["commisionassignment"])), "asstring")));
  await $.mset((await $.v(C, "dbedit5")), "text", (await $.mv((await $.v(C, "CreditAccSearchEdit")), "text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "addvalute", async function addvalute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t4 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t4], "SQL", C, false)), "Add", ["select valu_name from avalute"])));
    await $.stmt($.wcall([$t4], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editvalute")), "Clear", []);
  { const $t5 = (await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t6 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t5))) break;
      {
        const $t7 = (await $.wobj(C, "editvalute"));
        await $.stmt((await $.mcall((await $.wv([$t7], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t7], "CO_DataMod", C, false)), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInForm", "addvalute_", async function addvalute_(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t8 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t8], "Close", [], C));
    await $.mcall((await $.wv([$t8], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t8], "SQL", C, false)), "Add", ["select valu_name from avalute"])));
    await $.stmt($.wcall([$t8], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editvalute_")), "Clear", []);
  { const $t9 = (await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t10 = true;
    for (;;) {
      if (!$t10) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t10 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t9))) break;
      {
        const $t11 = (await $.wobj(C, "editvalute_"));
        await $.stmt((await $.mcall((await $.wv([$t11], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t11], "CO_DataMod", C, false)), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TInForm", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t12 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t12], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t12], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t13 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t13], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t13], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DBEdit1Change", async function DBEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t14], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t14], "Open", [], C));
    await $.mset((await $.wv([$t14], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t14], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit1")), "text")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t15 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t15], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t15], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t15], "Open", [], C));
    await $.mset((await $.wv([$t15], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t15], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t16 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.mcall((await $.wv([$t16], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t16], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t16], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.mset((await $.wv([$t16], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t16], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "addvalute", []));
  await $.stmt($.call(C, "addvalute_", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "editvaluteChange", async function editvaluteChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t17], "Close", [], C));
    await $.mcall((await $.wv([$t17], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t17], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t17], "editvalute", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.mset((await $.wv([$t17], "val_code", C, false)), "Text", (await $.mv((await $.wcall([$t17], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "val_codeChange", async function val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t18], "Close", [], C));
    await $.mcall((await $.wv([$t18], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t18], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t18], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t18], "Open", [], C));
    await $.mset((await $.wv([$t18], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t18], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t19 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t19], "Close", [], C));
    await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t19], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t19], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t19], "Open", [], C));
    await $.mset((await $.wv([$t19], "editvalute", C, false)), "Text", (await $.mv((await $.wcall([$t19], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t20 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t20], "Close", [], C));
    await $.mcall((await $.wv([$t20], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t20], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t20], "val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t20], "Open", [], C));
    await $.mset((await $.wv([$t20], "valname", C, false)), "Text", (await $.mv((await $.wcall([$t20], "FieldByName", ["val_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "acc_")), "fieldbyname", ["acc_no"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["acc_no"])), "asstring")));
  {
    const $t21 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t21], "Close", [], C));
    await $.mcall((await $.wv([$t21], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t21], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t21], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t21], "Open", [], C));
    await $.mset((await $.wv([$t21], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t21], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t22 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t22], "Close", [], C));
    await $.mcall((await $.wv([$t22], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t22], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t22], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t22], "Open", [], C));
    await $.mset((await $.wv([$t22], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t22], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "editvalute_Change", async function editvalute_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t23 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t23], "Close", [], C));
    await $.mcall((await $.wv([$t23], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t23], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t23], "editvalute_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t23], "Open", [], C));
    await $.mset((await $.wv([$t23], "cur_val_code", C, false)), "Text", (await $.mv((await $.wcall([$t23], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "cur_val_codeChange", async function cur_val_codeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t24], "Close", [], C));
    await $.mcall((await $.wv([$t24], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t24], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t24], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t24], "Open", [], C));
    await $.mset((await $.wv([$t24], "editrate_", C, false)), "Text", (await $.mv((await $.wcall([$t24], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t25 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t25], "Close", [], C));
    await $.mcall((await $.wv([$t25], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t25], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valute= ", "'"), (await $.mv((await $.wv([$t25], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t25], "Open", [], C));
    await $.mset((await $.wv([$t25], "editvalute_", C, false)), "Text", (await $.mv((await $.wcall([$t25], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  {
    const $t26 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t26], "Close", [], C));
    await $.mcall((await $.wv([$t26], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t26], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valute= ", "'"), (await $.mv((await $.wv([$t26], "cur_val_code", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t26], "Open", [], C));
    await $.mset((await $.wv([$t26], "valname_", C, false)), "Text", (await $.mv((await $.wcall([$t26], "FieldByName", ["val_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DBLookupComboBox4Click", async function DBLookupComboBox4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t27 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t27], "Close", [], C));
    await $.mcall((await $.wv([$t27], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t27], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t27], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t27], "Open", [], C));
    await $.mset((await $.wv([$t27], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t27], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t28 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t28], "Close", [], C));
    await $.mcall((await $.wv([$t28], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t28], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t28], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t28], "Open", [], C));
    await $.mset((await $.wv([$t28], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t28], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "DBLookupComboBox3Click", async function DBLookupComboBox3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "CreditAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit5")), "text")));
  {
    const $t29 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t29], "Close", [], C));
    await $.mcall((await $.wv([$t29], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t29], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t29], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t29], "Open", [], C));
    await $.mset((await $.wv([$t29], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t29], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t30 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t30], "Close", [], C));
    await $.mcall((await $.wv([$t30], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t30], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t30], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t30], "Open", [], C));
    await $.mset((await $.wv([$t30], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t30], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "SearchEdit1Change", async function SearchEdit1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "Trdestination")), "fieldbyname", ["id"])), "asinteger", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["id"])), "asinteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "debtvalueChange", async function debtvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "debtvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
  await $.mset((await $.v(C, "creditvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "creditvalueChange", async function creditvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "creditvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
  await $.mset((await $.v(C, "Debtvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "SearchEdit2Change", async function SearchEdit2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "ConvertationSymbols")), "fieldbyname", ["id"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["id"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "SearchEdit3Change", async function SearchEdit3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "CashSymbols")), "fieldbyname", ["symbol"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["symbol"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "acc_idChange", async function acc_idChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t31], "Close", [], C));
    await $.mcall((await $.wv([$t31], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t31], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t31], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t31], "Open", [], C));
    await $.mset((await $.wv([$t31], "DebtAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t31], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t31], "dbedit1", C, false)), "text", (await $.mv((await $.wv([$t31], "DebtAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t32 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t32], "Close", [], C));
    await $.mcall((await $.wv([$t32], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t32], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t32], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t32], "Open", [], C));
    await $.mset((await $.wv([$t32], "val_code", C, false)), "Text", (await $.mv((await $.wcall([$t32], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t33 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t33], "Close", [], C));
    await $.mcall((await $.wv([$t33], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t33], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t33], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t33], "Open", [], C));
    await $.mset((await $.wv([$t33], "dbedit2", C, false)), "Text", (await $.mv((await $.wcall([$t33], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "TransDate")), "date"))]));
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.mv((await $.v(C, "debtvalue")), "value")), 0)), async () => ($.gt((await $.mv((await $.v(C, "creditvalue")), "value")), 0)))), async () => ($.gt((await $.mv((await $.v(C, "ekv")), "value")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_commission_trans_km", [(await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "commission_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), L0["ddate"]]])));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "refresh", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.mv((await $.v(C, "debtvalue")), "value")), 0)), async () => ($.gt((await $.mv((await $.v(C, "creditvalue")), "value")), 0)))), async () => ($.gt((await $.mv((await $.v(C, "ekv")), "value")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_transaction", [(await $.mv((await $.v(C, "acc_id")), "text")), (await $.mv((await $.v(C, "acc_id_")), "text")), (await $.mv((await $.v(C, "debtvalue")), "text")), (await $.mv((await $.v(C, "creditvalue")), "text")), (await $.mv((await $.v(C, "dbedit6")), "text")), (await $.mv((await $.v(C, "ekv")), "text")), (await $.mv((await $.v(C, "editrate")), "text")), (await $.mv((await $.v(C, "editrate_")), "text"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "Callprocedure", ["transaction_mn", []])));
    await $.stmt($.call(C, "close", []));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "open", []);
    await $.mcall((await $.v(C, "CO_In_Form")), "close", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "debtvalue")), "value")), 0)), async () => ($.eq((await $.mv((await $.v(C, "creditvalue")), "value")), 0)))), async () => ($.eq((await $.mv((await $.v(C, "ekv")), "value")), 0)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Daxil etdiyiniz məbləğ sıfırdan böyük olmalıdır!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "debtvalue")), "value", 0.0);
  await $.mset((await $.v(C, "creditvalue")), "value", 0.0);
  await $.mset((await $.v(C, "ekv")), "value", 0.0);
  await $.mset((await $.v(C, "dbedit6")), "text", "");
  await $.mset((await $.v(C, "dbedit7")), "text", "");
  await $.mset((await $.v(C, "dbedit8")), "text", "");
  await $.mset((await $.v(C, "SearchEdit3")), "text", "");
  await $.mset((await $.v(C, "SearchEdit2")), "text", "");
  await $.mset((await $.v(C, "SearchEdit1")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "SearchEdit4Change", async function SearchEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "OperationTypes")), "fieldbyname", ["id"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["id"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TInForm", "debtvalueKeyPress", async function debtvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t34 = L0["sender"];
        { const $t35 = (await $.wv([$t34], "Tag", C, false));
          if ($.eq($t35, 1)) {
            await $.stmt((await $.wcall([$t34], "SelectNext", [(await $.wv([$t34], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t34], "True", C, false)), (await $.wv([$t34], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TInForm", "creditvalueKeyPress", async function creditvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t36 = L0["sender"];
        { const $t37 = (await $.wv([$t36], "Tag", C, false));
          if ($.eq($t37, 1)) {
            await $.stmt((await $.wcall([$t36], "SelectNext", [(await $.wv([$t36], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t36], "True", C, false)), (await $.wv([$t36], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TInForm", "ekvKeyPress", async function ekvKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t38 = L0["sender"];
        { const $t39 = (await $.wv([$t38], "Tag", C, false));
          if ($.eq($t39, 1)) {
            await $.stmt((await $.wcall([$t38], "SelectNext", [(await $.wv([$t38], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t38], "True", C, false)), (await $.wv([$t38], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
