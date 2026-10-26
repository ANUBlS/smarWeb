// Generated from PropertyUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PropertyUnit", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "Grids", "DBGrids", "Datamodunit"]);
  const C = [U];
  U.defClass("TPropertyfrm", "TForm", {"label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("Propertyfrm", null, "TPropertyfrm");
  });
  U.method("TPropertyfrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Insert", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["id"])), "AsFloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["prtid"])), "AsFloat")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertyfrm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertyfrm", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Edit", []);
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["id"])), "AsFloat", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["prtid"])), "AsFloat")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["PROPERTY"])), "AsString", (await $.mv((await $.v(C, "DBEdit1")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["PROP_DESC"])), "AsString", (await $.mv((await $.v(C, "DBEdit2")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["PROP_ADDRESS"])), "AsString", (await $.mv((await $.v(C, "DBEdit5")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["PORP_PASSPORT"])), "AsString", (await $.mv((await $.v(C, "DBEdit4")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["PROP_PRICE"])), "AsString", (await $.mv((await $.v(C, "DBEdit3")), "Text")));
  await $.mset((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "FieldByName", ["PROP_info"])), "AsString", (await $.mv((await $.v(C, "DBMemo1")), "Text")));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPropertyfrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "SetVariable", ["prts", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "maincrprt")), "FieldByName", ["prtid"])), "AsString"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "Maincrpt_one")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
