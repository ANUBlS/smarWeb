// Generated from OutForm_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("OutForm_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "StdCtrls", "ActnList", "ComCtrls", "CurrencyEdit", "SearchEdit", "Mask", "DBCtrls", "ExtCtrls", "NLSLocalizer", "CO_datamod_impl", "CO_Out_Unit"]);
  const C = [U];
  U.defClass("TOutForm", "TForm", {"groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "headercontrol1": {"name": "HeaderControl1", "type": "THeaderControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "paneldebit": {"name": "PanelDebit", "type": "TPanel"}, "paneldebitrest": {"name": "PanelDebitRest", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "d_ostat": {"name": "d_ostat", "type": "TLabel"}, "d_pok_ostat": {"name": "d_pok_ostat", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "c_ostat": {"name": "c_ostat", "type": "TLabel"}, "c_pok_ostat": {"name": "c_pok_ostat", "type": "TLabel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "creditvalue": {"name": "creditvalue", "type": "TCurrencyEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "ekv": {"name": "ekv", "type": "TCurrencyEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "convertationsymbollookup": {"name": "ConvertationSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit2": {"name": "SearchEdit2", "type": "TSearchEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "cashsymbollookup": {"name": "CashSymbolLookUp", "type": "TDBLookupComboBox"}, "searchedit3": {"name": "SearchEdit3", "type": "TSearchEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "searchedit1": {"name": "SearchEdit1", "type": "TSearchEdit"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "transdate": {"name": "TransDate", "type": "TDateTimePicker"}, "dbeditoperationno": {"name": "DBEditOperationNo", "type": "TDBEdit"}, "debtvalue": {"name": "debtvalue", "type": "TCurrencyEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "buttonapply": {"name": "ButtonApply", "type": "TButton"}, "buttoncancel": {"name": "ButtonCancel", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "valcode": {"name": "valcode", "type": "TEdit"}, "editvalute": {"name": "editvalute", "type": "TComboBox"}, "editrate": {"name": "editrate", "type": "TEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "debtaccsearchedit": {"name": "DebtAccSearchEdit", "type": "TSearchEdit"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "valcode_": {"name": "valcode_", "type": "TEdit"}, "editvalute_": {"name": "editvalute_", "type": "TComboBox"}, "editrate_": {"name": "editrate_", "type": "TEdit"}, "creditaccsearchedit": {"name": "CreditAccSearchEdit", "type": "TSearchEdit"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "acc_id": {"name": "acc_id", "type": "TEdit"}, "acc_id_": {"name": "acc_id_", "type": "TEdit"}, "commission_id": {"name": "commission_id", "type": "TEdit"}, "nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "searchedit4": {"name": "SearchEdit4", "type": "TSearchEdit"}}, {});
  U.init(async () => {
    U.var_("OutForm", null, "TOutForm");
  });
  U.method("TOutForm", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TOutForm", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TOutForm", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Əməliyyat";
  await $.inherited(Self, "TOutForm", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TOutForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TransDate")), "date", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Sysdat")), "Fieldbyname", ["tek_dat"])), "asdatetime")));
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accno"])), "asstring")));
  await $.mset((await $.v(C, "dbedit2")), "text", (await $.mv((await $.v(C, "DebtAccSearchEdit")), "text")));
  await $.mset((await $.v(C, "dbedit1")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accname"])), "asstring")));
  await $.mset((await $.v(C, "valcode")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["accvalcode"])), "asstring")));
  await $.mset((await $.v(C, "acc_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "fieldbyname", ["credit"])), "asstring")));
  await $.mset((await $.v(C, "acc_id_")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "fieldbyname", ["id"])), "asstring")));
  await $.mset((await $.v(C, "dbedit6")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "fieldbyname", ["commisionassignment"])), "asstring")));
  await $.mset((await $.v(C, "commission_id")), "text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "fieldbyname", ["id"])), "asstring")));
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "Open", []);
  await $.mset((await $.v(C, "dbedit7")), "text", "");
  await $.mset((await $.v(C, "dbedit8")), "text", "");
  await $.mset((await $.v(C, "dbedit9")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "valcodeChange", async function valcodeChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t2], "Close", [], C));
    await $.mcall((await $.wv([$t2], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t2], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t2], "valcode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t2], "Open", [], C));
    await $.mset((await $.wv([$t2], "editrate", C, false)), "Text", (await $.mv((await $.wcall([$t2], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t3], "Close", [], C));
    await $.mcall((await $.wv([$t3], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t3], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valute= ", "'"), (await $.mv((await $.wv([$t3], "valcode", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t3], "Open", [], C));
    await $.mset((await $.wv([$t3], "editvalute", C, false)), "Text", (await $.mv((await $.wcall([$t3], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "editvaluteChange", async function editvaluteChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t4], "Close", [], C));
    await $.mcall((await $.wv([$t4], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t4], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t4], "editvalute", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t4], "Open", [], C));
    await $.mset((await $.wv([$t4], "valcode", C, false)), "Text", (await $.mv((await $.wcall([$t4], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "addvalute", async function addvalute(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "xxx": 0};
  {
    const $t5 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t5], "Close", [], C));
    await $.mcall((await $.wv([$t5], "SQL", C, false)), "Clear", []);
    await $.stmt((await $.mcall((await $.wv([$t5], "SQL", C, false)), "Add", ["select valu_name from avalute"])));
    await $.stmt($.wcall([$t5], "Open", [], C));
  }
  await $.mcall((await $.v(C, "editvalute")), "Clear", []);
  { const $t6 = (await $.mv((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "RecordCount"));
    L0["xxx"] = 1;
    let $t7 = true;
    for (;;) {
      if (!$t7) { L0["xxx"] = $.succ(L0["xxx"], 1); }
      $t7 = false;
      if (!($.ord(L0["xxx"]) <= $.ord($t6))) break;
      {
        const $t8 = (await $.wobj(C, "editvalute"));
        await $.stmt((await $.mcall((await $.wv([$t8], "Items", C, false)), "Add", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t8], "CO_DataMod", C, false)), "avalute")), "FieldByName", ["valu_name"])), "AsString"))])));
      }
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "avalute")), "Next", []);
      await $.tick();
    }
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TOutForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "addvalute", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "DebtAccSearchEditChange", async function DebtAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "acc_")), "fieldbyname", ["acc_no"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["acc_no"])), "asstring")));
  await $.mset((await $.v(C, "d_ostat")), "visible", true);
  await $.mset((await $.v(C, "d_pok_ostat")), "visible", true);
  {
    const $t9 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t9], "Close", [], C));
    await $.mcall((await $.wv([$t9], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t9], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t9], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t9], "Open", [], C));
    await $.mset((await $.wv([$t9], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t9], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t10 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t10], "Close", [], C));
    await $.mcall((await $.wv([$t10], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t10], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t10], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t10], "Open", [], C));
    await $.mset((await $.wv([$t10], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t10], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit2")), "text")));
  {
    const $t11 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t11], "Close", [], C));
    await $.mcall((await $.wv([$t11], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t11], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t11], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t11], "Open", [], C));
    await $.mset((await $.wv([$t11], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t11], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t12 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t12], "Close", [], C));
    await $.mcall((await $.wv([$t12], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t12], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t12], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t12], "Open", [], C));
    await $.mset((await $.wv([$t12], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t12], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DebtAccSearchEdit")), "text", (await $.mv((await $.v(C, "Dbedit2")), "text")));
  {
    const $t13 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t13], "Close", [], C));
    await $.mcall((await $.wv([$t13], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t13], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t13], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t13], "Open", [], C));
    await $.mset((await $.wv([$t13], "d_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t13], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t14 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t14], "Close", [], C));
    await $.mcall((await $.wv([$t14], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t14], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t14], "DebtAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t14], "Open", [], C));
    await $.mset((await $.wv([$t14], "d_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t14], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "valcode_Change", async function valcode_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.mv((await $.v(C, "CO_DataMod")), "temprate"));
    await $.stmt($.wcall([$t15], "Close", [], C));
    await $.mcall((await $.wv([$t15], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t15], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from temprate c where val_kod= ", "'"), (await $.mv((await $.wv([$t15], "valcode_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t15], "Open", [], C));
    await $.mset((await $.wv([$t15], "editrate_", C, false)), "Text", (await $.mv((await $.wcall([$t15], "FieldByName", ["ostat"], C)), "AsString")));
  }
  {
    const $t16 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t16], "Close", [], C));
    await $.mcall((await $.wv([$t16], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t16], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute_t c where valute= ", "'"), (await $.mv((await $.wv([$t16], "valcode_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t16], "Open", [], C));
    await $.mset((await $.wv([$t16], "editvalute_", C, false)), "Text", (await $.mv((await $.wcall([$t16], "FieldByName", ["valu_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "editvalute_Change", async function editvalute_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.mv((await $.v(C, "CO_DataMod")), "avalute"));
    await $.stmt($.wcall([$t17], "Close", [], C));
    await $.mcall((await $.wv([$t17], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t17], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from avalute c where valu_name= ", "'"), (await $.mv((await $.wv([$t17], "editvalute_", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t17], "Open", [], C));
    await $.mset((await $.wv([$t17], "valcode_", C, false)), "Text", (await $.mv((await $.wcall([$t17], "FieldByName", ["valute"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "CreditAccSearchEditChange", async function CreditAccSearchEditChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "acc")), "fieldbyname", ["acc_no"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["acc_no"])), "asstring")));
  {
    const $t18 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t18], "Close", [], C));
    await $.mcall((await $.wv([$t18], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t18], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t18], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t18], "Open", [], C));
    await $.mset((await $.wv([$t18], "c_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t18], "fieldbyname", ["ostat"], C)), "asstring")));
  }
  {
    const $t19 = (await $.mv((await $.v(C, "CO_DataMod")), "archost"));
    await $.stmt($.wcall([$t19], "Close", [], C));
    await $.mcall((await $.wv([$t19], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t19], "SQL", C, false)), "Text", $.add($.add($.add("Select * from tenostat where acc_id in (select id from accno where accno=", "'"), (await $.mv((await $.wv([$t19], "creditAccSearchEdit", C, false)), "Text"))), "')"));
    await $.stmt($.wcall([$t19], "Open", [], C));
    await $.mset((await $.wv([$t19], "c_pok_ostat", C, false)), "caption", (await $.mv((await $.wcall([$t19], "fieldbyname", ["pok_ostat"], C)), "asstring")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "debtvalueChange", async function debtvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "debtvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
  await $.mset((await $.v(C, "creditvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "creditvalueChange", async function creditvalueChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Ekv")), "text", (await $.call(C, "FormatFloat", ["#.##", $.mul((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "creditvalue")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate_")), "text"))])))])));
  await $.mset((await $.v(C, "Debtvalue")), "text", (await $.call(C, "FormatFloat", ["#.##", $.fdiv((await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "ekv")), "text"))])), (await $.call(C, "Strtofloat", [(await $.mv((await $.v(C, "editrate")), "text"))])))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "acc_idChange", async function acc_idChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t20], "Close", [], C));
    await $.mcall((await $.wv([$t20], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t20], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t20], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t20], "Open", [], C));
    await $.mset((await $.wv([$t20], "creditAccSearchEdit", C, false)), "Text", (await $.mv((await $.wcall([$t20], "FieldByName", ["acc_no"], C)), "AsString")));
    await $.mset((await $.wv([$t20], "dbedit5", C, false)), "text", (await $.mv((await $.wv([$t20], "CreditAccSearchEdit", C, false)), "Text")));
  }
  {
    const $t21 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t21], "Close", [], C));
    await $.mcall((await $.wv([$t21], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t21], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t21], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t21], "Open", [], C));
    await $.mset((await $.wv([$t21], "valcode_", C, false)), "Text", (await $.mv((await $.wcall([$t21], "FieldByName", ["val_acc"], C)), "AsString")));
  }
  {
    const $t22 = (await $.mv((await $.v(C, "CO_DataMod")), "ACC"));
    await $.stmt($.wcall([$t22], "Close", [], C));
    await $.mcall((await $.wv([$t22], "SQL", C, false)), "Clear", []);
    await $.mset((await $.wv([$t22], "SQL", C, false)), "Text", $.add($.add($.add("Select c.rowid ,c.* from account c where id= ", "'"), (await $.mv((await $.wv([$t22], "acc_id", C, false)), "Text"))), "'"));
    await $.stmt($.wcall([$t22], "Open", [], C));
    await $.mset((await $.wv([$t22], "dbedit3", C, false)), "Text", (await $.mv((await $.wcall([$t22], "FieldByName", ["name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "ButtonApplyClick", async function ButtonApplyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "ddate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["ddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "TransDate")), "date"))]));
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.mv((await $.v(C, "debtvalue")), "value")), 0)), async () => ($.gt((await $.mv((await $.v(C, "creditvalue")), "value")), 0)))), async () => ($.gt((await $.mv((await $.v(C, "ekv")), "value")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_commission_trans_km", [(await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "commission_id")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id_")), "text"))])), (await $.call(C, "Strtoint", [(await $.mv((await $.v(C, "acc_id")), "text"))])), (await $.mv((await $.v(C, "debtvalue")), "value")), (await $.mv((await $.v(C, "creditvalue")), "value")), L0["ddate"]]])));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "commission_trans_km")), "refresh", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.gt((await $.mv((await $.v(C, "debtvalue")), "value")), 0)), async () => ($.gt((await $.mv((await $.v(C, "creditvalue")), "value")), 0)))), async () => ($.gt((await $.mv((await $.v(C, "ekv")), "value")), 0)))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "CallProcedure", ["ins_transaction", [(await $.mv((await $.v(C, "acc_id_")), "text")), (await $.mv((await $.v(C, "acc_id")), "text")), (await $.mv((await $.v(C, "debtvalue")), "text")), (await $.mv((await $.v(C, "creditvalue")), "text")), (await $.mv((await $.v(C, "dbedit6")), "text")), (await $.mv((await $.v(C, "ekv")), "text")), (await $.mv((await $.v(C, "editrate")), "text")), (await $.mv((await $.v(C, "editrate_")), "text"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "OPackage")), "Callprocedure", ["transaction_mn", []])));
    await $.stmt($.call(C, "Close", []));
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Transactions")), "open", []);
  }
  if ($.truthy((await $.and_((await $.and_(($.eq((await $.mv((await $.v(C, "debtvalue")), "value")), 0)), async () => ($.eq((await $.mv((await $.v(C, "creditvalue")), "value")), 0)))), async () => ($.eq((await $.mv((await $.v(C, "ekv")), "value")), 0)))))) {
    await $.stmt((await $.call(C, "showmessage", ["Daxil etdiyiniz məbləğ sıfırdan böyük olmalıdır!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "debtvalue")), "value", 0.0);
  await $.mset((await $.v(C, "creditvalue")), "value", 0.0);
  await $.mset((await $.v(C, "ekv")), "value", 0.0);
  await $.mset((await $.v(C, "dbedit7")), "text", "");
  await $.mset((await $.v(C, "dbedit8")), "text", "");
  await $.mset((await $.v(C, "dbedit6")), "text", "");
  await $.mset((await $.v(C, "SearchEdit2")), "text", "");
  await $.mset((await $.v(C, "SearchEdit3")), "text", "");
  await $.mset((await $.v(C, "SearchEdit1")), "text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "SearchEdit4Change", async function SearchEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "CO_Datamod")), "OperationTypes")), "fieldbyname", ["id"])), "asstring", (await $.mv((await $.mcall((await $.mv((await $.mv((await $.call(C, "TSearchEdit", [L0["sender"]])), "datasource")), "dataset")), "fieldbyname", ["id"])), "asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TOutForm", "debtvalueKeyPress", async function debtvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t23 = L0["sender"];
        { const $t24 = (await $.wv([$t23], "Tag", C, false));
          if ($.eq($t24, 1)) {
            await $.stmt((await $.wcall([$t23], "SelectNext", [(await $.wv([$t23], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t23], "True", C, false)), (await $.wv([$t23], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOutForm", "creditvalueKeyPress", async function creditvalueKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t25 = L0["sender"];
        { const $t26 = (await $.wv([$t25], "Tag", C, false));
          if ($.eq($t26, 1)) {
            await $.stmt((await $.wcall([$t25], "SelectNext", [(await $.wv([$t25], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t25], "True", C, false)), (await $.wv([$t25], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TOutForm", "ekvKeyPress", async function ekvKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t27 = L0["sender"];
        { const $t28 = (await $.wv([$t27], "Tag", C, false));
          if ($.eq($t28, 1)) {
            await $.stmt((await $.wcall([$t27], "SelectNext", [(await $.wv([$t27], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t27], "True", C, false)), (await $.wv([$t27], "True", C, false))], C)));
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
