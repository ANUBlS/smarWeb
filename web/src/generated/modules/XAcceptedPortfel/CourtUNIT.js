// Generated from CourtUNIT.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CourtUNIT", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "DBCtrls", "Mask", "Datamodunit"]);
  const C = [U];
  U.defClass("TCourtFrm", "TForm", {"dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbrichedit1": {"name": "DBRichEdit1", "type": "TDBRichEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbrichedit2": {"name": "DBRichEdit2", "type": "TDBRichEdit"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "button1": {"name": "Button1", "type": "TButton"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "label13": {"name": "Label13", "type": "TLabel"}}, {});
  U.init(async () => {
    U.var_("CourtFrm", null, "TCourtFrm");
  });
  U.method("TCourtFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["id"])), "AsFloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["prtid"])), "AsFloat")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtFrm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Data_main_one")), "Edit", []);
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
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Edit", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["id"])), "AsFloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["prtid"])), "AsFloat")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_AMMOUNT"])), "AsString", (await $.mv((await $.v(C, "DBEdit1")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_STATUS"])), "AsString", (await $.mv((await $.v(C, "DBEdit2")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_LASTSTAT"])), "AsString", (await $.mv((await $.v(C, "DBEdit3")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_NAME"])), "AsString", (await $.mv((await $.v(C, "DBEdit4")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_DATE_NUM"])), "AsString", (await $.mv((await $.v(C, "DBEdit5")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_MEASURE"])), "AsString", (await $.mv((await $.v(C, "DBmemo1")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_REPLACE"])), "AsString", (await $.mv((await $.v(C, "DBEdit7")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["REPLACEMENT_COUNT"])), "AsString", (await $.mv((await $.v(C, "DBEdit8")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["INVESTIGATION_ORG"])), "AsString", (await $.mv((await $.v(C, "DBEdit9")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_DESC"])), "AsString", (await $.mv((await $.v(C, "DBRichEdit1")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["INFOS"])), "AsString", (await $.mv((await $.v(C, "DBRichEdit2")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["COURT_MANAGE"])), "AsString", (await $.mv((await $.v(C, "DBedit6")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["court_accepted_ammount"])), "AsString", (await $.mv((await $.v(C, "DBEdit10")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCourtFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "SetVariable", ["prts", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["prtid"])), "AsFloat"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
