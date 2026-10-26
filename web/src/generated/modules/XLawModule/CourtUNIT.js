// Generated from CourtUNIT.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CourtUNIT", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "DB", "OracleData", "dblookup", "DBCtrlsEh", "ExtCtrls", "Datmodule"]);
  const C = [U];
  U.defClass("TCourtFrm", "TForm", {"button1": {"name": "Button1", "type": "TButton"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "dbrichedit3": {"name": "DBRichEdit3", "type": "TDBRichEdit"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "tabsheet4": {"name": "TabSheet4", "type": "TTabSheet"}, "dbmemo2": {"name": "DBMemo2", "type": "TDBMemo"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "dbrichedit2": {"name": "DBRichEdit2", "type": "TDBRichEdit"}, "dbrichedit1": {"name": "DBRichEdit1", "type": "TDBRichEdit"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dblookupcombobox5": {"name": "DBLookupComboBox5", "type": "TDBLookupComboBox"}, "label6": {"name": "Label6", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit3": {"name": "dbedit3", "type": "TDBDateTimeEditEh"}, "dbedit5": {"name": "dbedit5", "type": "TDBDateTimeEditEh"}}, {});
  U.init(async () => {
    U.var_("CourtFrm", null, "TCourtFrm");
  });
  U.method("TCourtFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["id"])), "AsFloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "FieldByName", ["id"])), "AsFloat")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtFrm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtFrm", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat1": '', "dat2": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit5")), "Text")), "  .  .    "))) {
    L0["dat1"] = "";
  } else {
    L0["dat1"] = (await $.mv((await $.v(C, "DBEdit5")), "Text"));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit3")), "Text")), "  .  .    "))) {
    L0["dat2"] = "";
  } else {
    L0["dat2"] = (await $.mv((await $.v(C, "DBEdit3")), "Text"));
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Edit", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["id"])), "AsFloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "FieldByName", ["id"])), "AsFloat")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_AMMOUNT"])), "AsString", (await $.mv((await $.v(C, "DBEdit1")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_STATUS"])), "AsString", (await $.mv((await $.v(C, "DBLookupComboBox1")), "KeyValue")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_LASTSTAT"])), "AsString", (await $.mv((await $.v(C, "DBLookupComboBox2")), "KeyValue")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_NAME"])), "AsString", (await $.mv((await $.v(C, "DBLookupComboBox5")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_DATE_NUM"])), "AsString", L0["dat1"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_MEASURE"])), "AsString", (await $.mv((await $.v(C, "DBmemo1")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_REPLACE"])), "AsString", (await $.mv((await $.v(C, "DBMemo2")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["REPLACEMENT_COUNT"])), "AsString", (await $.mv((await $.v(C, "DBEdit8")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["INVESTIGATION_ORG"])), "AsString", (await $.mv((await $.v(C, "DBRichEdit1")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_DESC"])), "AsString", (await $.mv((await $.v(C, "DBRichEdit3")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["INFOS"])), "AsString", (await $.mv((await $.v(C, "DBRichEdit2")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_MANAGE"])), "AsString", (await $.mv((await $.v(C, "DBLookupComboBox3")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["court_accepted_ammount"])), "AsString", (await $.mv((await $.v(C, "DBEdit10")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["mediation_date"])), "AsString", L0["dat2"]);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_NUM"])), "AsString", (await $.mv((await $.v(C, "dbedit4")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "SetVariable", ["prts", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Mainscrpt")), "FieldByName", ["id"])), "AsFloat"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_stat_add")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_stat_add")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_last_stat_add")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_last_stat_add")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Court_managers")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Court_managers")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_operates_add")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_operates_add")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_manager_state")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "court_manager_state")), "Open", []);
  await $.mset((await $.v(C, "DBLookupCombobox1")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_STATUS"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupCombobox2")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_LASTSTAT"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupCombobox3")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_MANAGE"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupCombobox4")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_OPERS"])), "AsString")));
  await $.mset((await $.v(C, "DBLookupCombobox5")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_NAME"])), "AsString")));
  await $.mset((await $.v(C, "dbedit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["mediation_date"])), "AsString")));
  await $.mset((await $.v(C, "dbedit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_DATE_NUM"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
