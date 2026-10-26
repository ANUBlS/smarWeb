// Generated from TicketsNewImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TicketsNewImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "Oracle", "SearchEdit", "DB", "DBCtrlsEh", "DBLookupEh", "DataModTM", "CurrencyToHR_Azeri_Impl", "uConverter"]);
  const C = [U];
  U.defClass("TfrmNewTicket", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "edaccname": {"name": "edAccName", "type": "TDBEdit"}, "edaccinn": {"name": "edAccInn", "type": "TDBEdit"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboboxEh"}, "label3": {"name": "Label3", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "edticketdate": {"name": "edTicketDate", "type": "TDateTimePicker"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "label4": {"name": "Label4", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "edammount": {"name": "edAmmount", "type": "TDBEdit"}, "edstramount": {"name": "edStrAmount", "type": "TEdit"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "btnsave": {"name": "btnSave", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("frmNewTicket", null, "TfrmNewTicket");
  });
  U.method("TfrmNewTicket", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModuleTicketMan"));
    if ($.truthy((await $.mv((await $.wv([$t1], "ODSAccount", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t1], "ODSAccount", C, false)), "Close", []);
    }
    if ($.truthy((await $.mv((await $.wv([$t1], "ODSBankM", C, false)), "Active")))) {
      await $.mcall((await $.wv([$t1], "ODSBankM", C, false)), "Close", []);
    }
    await $.mcall((await $.wv([$t1], "ODSAccount", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "ODSBankM", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmNewTicket", "edAccNOClick", async function edAccNOClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "DataModuleTicketMan"));
    await $.stmt((await $.mcall((await $.wv([$t2], "ODSAccount", C, false)), "Locate", ["ACC_NO", (await $.mv((await $.wcall([$t2], "TEdit", [(await $.wv([$t2], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false))], C)), "Text")), [(await $.wv([$t2], "loCaseInsensitive", C, false)), (await $.wv([$t2], "loPartialKey", C, false))]])));
    await $.mset((await $.wv([$t2], "edAccINN", C, false)), "Text", (await $.mv((await $.wv([$t2], "ODSAccountINN", C, false)), "AsString")));
    await $.mset((await $.wv([$t2], "edAccName", C, false)), "Text", (await $.mv((await $.wv([$t2], "ODSAccountNAME", C, false)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmNewTicket", "edAmmountKeyPress", async function edAmmountKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.eq((await L0["key"].get()), "\r")), async () => ($.ne((await $.call(C, "Trim", [(await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text"))])), "")))))) {
    await $.mset((await $.v(C, "edStrAmount")), "text", (await $.call(C, "CurrencyToHR_Azeri", [(await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "edAmmount")), "text"))])), 2, [0]])));
  } else {
    if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ".", ",", "\b"]))))) {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmNewTicket", "DBLookupComboBox2Click", async function DBLookupComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmNewTicket", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmNewTicket", "seAccKeyPress", async function seAccKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmNewTicket", "seBankKeyPress", async function seBankKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmNewTicket", "DBEdit4Change", async function DBEdit4Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DataModuleTicketMan"));
    await $.mset((await $.wv([$t3], "ODSAllTicketsDACCNAME", C, false)), "Value", (await $.mv((await $.wv([$t3], "ODSAccountNAME", C, false)), "AsString")));
    await $.mset((await $.wv([$t3], "ODSAllTicketsDACCINN", C, false)), "Value", (await $.mv((await $.wv([$t3], "ODSAccountINN", C, false)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmNewTicket", "btnSaveClick", async function btnSaveClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DataModuleTicketMan"));
    await $.mset((await $.wv([$t4], "ODSAllTicketsDACCNAME", C, false)), "AsString", (await $.wcall([$t4], "ConvertCyrToAzeri", [(await $.mv((await $.wv([$t4], "ODSAllTicketsDACCNAME", C, false)), "AsString"))], C)));
    await $.mset((await $.wv([$t4], "ODSAllTicketsKACCNAME", C, false)), "AsString", (await $.wcall([$t4], "ConvertCyrToAzeri", [(await $.mv((await $.wv([$t4], "ODSAllTicketsKACCNAME", C, false)), "AsString"))], C)));
    await $.mcall((await $.wv([$t4], "ODSAllTickets", C, false)), "Post", []);
  }
  await $.mset(L0["sender"], "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmNewTicket", "edTicketDateChange", async function edTicketDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataModuleTicketMan")), "ODSAllTicketsPDATE")), "Value", (await $.mv((L0["sender"]), "Date")));
  await $.stmt((await $.call(C, "edStrAmountChange", [L0["sender"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmNewTicket", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmNewTicket", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModuleTicketMan")), "ODSTickets")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TfrmNewTicket", "edStrAmountChange", async function edStrAmountChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "btnSave")), "Enabled", true);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmNewTicket", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "DataModuleTicketMan"));
    if ($.truthy($.not((await $.mv((await $.wv([$t5], "ODSAccount", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t5], "ODSAccount", C, false)), "Open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t5], "ODSBankM", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t5], "ODSBankM", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
