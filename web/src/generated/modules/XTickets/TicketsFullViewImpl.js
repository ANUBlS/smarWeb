// Generated from TicketsFullViewImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("TicketsFullViewImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "DataModTM"]);
  const C = [U];
  U.defClass("TfrmTicketFullView", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "dbedit23": {"name": "DBEdit23", "type": "TDBEdit"}, "dbedit24": {"name": "DBEdit24", "type": "TDBEdit"}, "dbedit26": {"name": "DBEdit26", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("frmTicketFullView", null, "TfrmTicketFullView");
  });
  U.method("TfrmTicketFullView", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
