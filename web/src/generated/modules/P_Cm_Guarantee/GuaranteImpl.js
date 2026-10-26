// Generated from GuaranteImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("GuaranteImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "Buttons", "ExtCtrls", "StdCtrls", "DBCtrlsEh", "Mask", "DBLookupEh", "DBCtrls", "Oracle", "CommonDecls", "DmImpl"]);
  const C = [U];
  U.defClass("TFrmGuarante", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "panel2": {"name": "panel2", "type": "TTabControl"}, "panel68": {"name": "Panel68", "type": "TPanel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "panel71": {"name": "Panel71", "type": "TPanel"}, "label155": {"name": "Label155", "type": "TLabel"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "dbediteh9": {"name": "DBEditEh9", "type": "TDBEditEh"}, "panel75": {"name": "Panel75", "type": "TPanel"}, "label170": {"name": "Label170", "type": "TLabel"}, "dbediteh19": {"name": "DBEditEh19", "type": "TDBEditEh"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel67": {"name": "Panel67", "type": "TPanel"}, "label154": {"name": "Label154", "type": "TLabel"}, "label157": {"name": "Label157", "type": "TLabel"}, "cbpledgsorts": {"name": "CBPledgsorts", "type": "TDBLookupComboboxEh"}, "panel70": {"name": "Panel70", "type": "TPanel"}, "label103": {"name": "Label103", "type": "TLabel"}, "dbediteh11": {"name": "DBEditEh11", "type": "TDBEditEh"}, "panel73": {"name": "Panel73", "type": "TPanel"}, "inuse_rg": {"name": "InUse_rg", "type": "TRadioGroup"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "dbediteh12": {"name": "DBEditEh12", "type": "TDBEditEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "panel76": {"name": "Panel76", "type": "TPanel"}, "label171": {"name": "Label171", "type": "TLabel"}, "dbediteh20": {"name": "DBEditEh20", "type": "TDBEditEh"}, "panel54": {"name": "Panel54", "type": "TPanel"}, "label115": {"name": "Label115", "type": "TLabel"}, "dbediteh10": {"name": "DBEditEh10", "type": "TDBEditEh"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "label163": {"name": "Label163", "type": "TLabel"}, "label165": {"name": "Label165", "type": "TLabel"}, "label166": {"name": "Label166", "type": "TLabel"}, "label167": {"name": "Label167", "type": "TLabel"}, "label168": {"name": "Label168", "type": "TLabel"}, "label169": {"name": "Label169", "type": "TLabel"}, "dbediteh13": {"name": "DBEditEh13", "type": "TDBEditEh"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "dbediteh14": {"name": "DBEditEh14", "type": "TDBEditEh"}, "dbediteh15": {"name": "DBEditEh15", "type": "TDBEditEh"}, "dbediteh17": {"name": "DBEditEh17", "type": "TDBEditEh"}, "dbediteh18": {"name": "DBEditEh18", "type": "TDBEditEh"}, "dbdatetimeediteh7": {"name": "DBDateTimeEditEh7", "type": "TDBDateTimeEditEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbeditcompany": {"name": "DBEditCompany", "type": "TDBLookupComboboxEh"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "panel57": {"name": "Panel57", "type": "TPanel"}, "label116": {"name": "Label116", "type": "TLabel"}, "label117": {"name": "Label117", "type": "TLabel"}, "label152": {"name": "Label152", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbdatetimeediteh4": {"name": "DBDateTimeEditEh4", "type": "TDBDateTimeEditEh"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "panel58": {"name": "Panel58", "type": "TPanel"}, "label118": {"name": "Label118", "type": "TLabel"}, "dblookupcomboboxeh26": {"name": "DBLookupComboboxEh26", "type": "TDBLookupComboboxEh"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "panel": {"name": "panel", "type": "TTabControl"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "label13": {"name": "Label13", "type": "TLabel"}, "ednewname": {"name": "edNewName", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FrmGuarante", null, "TFrmGuarante");
    U.var_("creditid", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.set(C, "creditid", (await $.v(C, "Get_SelectedCrdID")));
  if ($.truthy($.eq(L0["s"], "Bali"))) {
    {
      const $t1 = (await $.mv((await $.v(C, "GurDm")), "Credit"));
      if ($.truthy((await $.wv([$t1], "active", C, false)))) {
        await $.stmt($.wcall([$t1], "Close", [], C));
      }
      await $.stmt($.wcall([$t1], "Open", [], C));
      await $.wset([$t1], "creditid", (await $.mv((await $.wcall([$t1], "fieldbyname", ["creditid"], C)), "AsInteger")), C);
    }
  }
  await $.mcall((await $.v(C, "FrmGuarante")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmGuarante", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmGuarante", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmGuarante", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "GurDm", (await $.mcall((await $.v(C, "TGurDm")), "create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SaveChg", async function SaveChg(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "GurDm")), "Guarante")), "CallProcedure", ["Guarantee_Add1", [(await $.v(C, "creditid")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetpledgeid")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetpledgename")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetholdername")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetholderaddress")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetanyinfotodisting")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetregistryno")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetregistryagency")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetregistrydate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetpledgeinuse")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetpledgeinsurant")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetinsuranceagency")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetinsuranceamount")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetinsurancedate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetpledgepricetorpaqha")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetpledgepriceevkv")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetinsuranceright")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetinsuranceid")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetpledgeid_p")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetgqname")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetgqpaspnum")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetgqpaspyer")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetgqpaspdate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetgqadress")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetreyster")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetseryamh")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetgqtel")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetpledgeprice")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetpledgsorts")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetcompany")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetcompanydat")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetcompanyexpert")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetCARDID")), "AsInteger"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmGuarante", "SaveBali", async function SaveBali(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "GurDm")), "Guarante")), "CallProcedure", ["add_Guarantor", [(await $.v(C, "creditid")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetCARDID")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetGUARANTORNAME")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetGUARANTORID")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetGUARANTORSALARY")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetZAMINWORK1")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetZAMINADRES1")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetZAMINTEL1")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetZMPASPYER1")), "asstring")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetZMPASPDAT1")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetZMTELMOB1")), "asstring"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmGuarante", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "savechg", []));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "GurDm")), "Guarante")), "CallProcedure", ["Gur_add", [(await $.v(C, "creditid"))]])));
  {
    const $t2 = (await $.v(C, "Panel2"));
    const $t3 = (await $.mv((await $.wv([$t2], "GurDm", C, false)), "MainDSet"));
    await $.stmt($.wcall([$t2, $t3], "Refresh", [], C));
    await $.wset([$t2, $t3], "recno", (await $.wv([$t2, $t3], "RecordCount", C, false)), C);
    await $.wset([$t2, $t3], "index", (await $.wv([$t2, $t3], "RecordCount", C, false)), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
    await $.wset([$t2, $t3], "TabIndex", (await $.mcall((await $.wv([$t2, $t3], "Tabs", C, false)), "Add", [(await $.wcall([$t2, $t3], "Format", ["Girov №%d ", [$.sub((await $.wv([$t2, $t3], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1)]], C))])), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "GurDm")), "Guarante")), "CallProcedure", ["Gur_del", [(await $.v(C, "creditid")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSetCARDID")), "AsVariant"))]])));
  await $.mcall((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "Refresh", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "Panel2")), "Tabs")), "Count")), 1))) {
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "Panel2")), "Tabs")), "Clear", []);
  { const $t4 = $.sub((await $.mv((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t5 = true;
    for (;;) {
      if (!$t5) { L0["index"] = $.succ(L0["index"], 1); }
      $t5 = false;
      if (!($.ord(L0["index"]) <= $.ord($t4))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "panel2")), "Tabs")), "Add", [(await $.call(C, "Format", ["Girov №%d ", [L0["index"]]]))])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "edNewName"));
    await $.wset([$t6], "Text", "", C);
    await $.wset([$t6], "width", 247, C);
    await $.wset([$t6], "Left", 28, C);
    await $.wset([$t6], "top", 6, C);
    await $.wset([$t6], "ctl3d", (await $.wv([$t6], "false", C, false)), C);
    await $.wset([$t6], "Visible", (await $.wv([$t6], "True", C, false)), C);
    await $.stmt($.wcall([$t6], "SetFocus", [], C));
  }
  await $.mset((await $.v(C, "SpeedButton3")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton4Click", async function SpeedButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DBEditEh8")), "SetFocus", []);
  await $.stmt($.call(C, "savechg", []));
  {
    const $t7 = (await $.mv((await $.v(C, "GurDm")), "MainDSet"));
    if ($.truthy((await $.wv([$t7], "active", C, false)))) {
      await $.stmt($.wcall([$t7], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t7], "SetVariable", ["creditid", (await $.wv([$t7], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t7], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveBali", []));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "GurDm")), "Guarante")), "CallProcedure", ["BAli_add", [(await $.v(C, "creditid"))]])));
  {
    const $t8 = (await $.v(C, "panel"));
    const $t9 = (await $.mv((await $.wv([$t8], "GurDm", C, false)), "BAliDSet"));
    await $.stmt($.wcall([$t8, $t9], "Refresh", [], C));
    await $.wset([$t8, $t9], "recno", (await $.wv([$t8, $t9], "RecordCount", C, false)), C);
    await $.wset([$t8, $t9], "index", (await $.wv([$t8, $t9], "RecordCount", C, false)), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
    await $.wset([$t8, $t9], "TabIndex", (await $.mcall((await $.wv([$t8, $t9], "Tabs", C, false)), "Add", [(await $.wcall([$t8, $t9], "Format", [" Zamin №%d ", [$.sub((await $.wv([$t8, $t9], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1)]], C))])), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "GurDm")), "Guarante")), "CallProcedure", ["Bali_del", [(await $.v(C, "creditid")), (await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSetCARDID")), "AsVariant"))]])));
  await $.mcall((await $.mv((await $.v(C, "GurDm")), "BAliDSet")), "Refresh", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "Panel")), "Tabs")), "Count")), 1))) {
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "Panel")), "Tabs")), "Clear", []);
  { const $t10 = $.sub((await $.mv((await $.mv((await $.v(C, "GurDm")), "BAliDSet")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t11 = true;
    for (;;) {
      if (!$t11) { L0["index"] = $.succ(L0["index"], 1); }
      $t11 = false;
      if (!($.ord(L0["index"]) <= $.ord($t10))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "panel")), "Tabs")), "Add", [(await $.call(C, "Format", [" Zamin №%d ", [L0["index"]]]))])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton8Click", async function SpeedButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "DBEdit1")), "SetFocus", []);
  await $.stmt($.call(C, "savebali", []));
  {
    const $t12 = (await $.mv((await $.v(C, "GurDm")), "BAliDSet"));
    if ($.truthy((await $.wv([$t12], "active", C, false)))) {
      await $.stmt($.wcall([$t12], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t12], "SetVariable", ["creditid", (await $.wv([$t12], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t12], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton9Click", async function SpeedButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.mv((await $.v(C, "GurDm")), "MainDSet"));
    await $.stmt($.wcall([$t13], "close", [], C));
    await $.stmt((await $.wcall([$t13], "SetVariable", ["CREDITID", (await $.wv([$t13], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t13], "open", [], C));
    await $.mset((await $.wv([$t13], "InUse_rg", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t13], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger")));
    await $.stmt($.wcall([$t13], "edit", [], C));
  }
  {
    const $t14 = (await $.mv((await $.v(C, "GurDm")), "BAliDSet"));
    await $.stmt($.wcall([$t14], "close", [], C));
    await $.stmt((await $.wcall([$t14], "SetVariable", ["CREDITID", (await $.wv([$t14], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t14], "open", [], C));
    await $.stmt($.wcall([$t14], "edit", [], C));
  }
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "edNewName"))]))))) {
    await $.set(C, "edNewName", (await $.mcall((await $.v(C, "TEdit")), "Create", [Self])));
  }
  {
    const $t15 = (await $.v(C, "edNewName"));
    await $.wset([$t15], "Parent", (await $.wv([$t15], "Panel3", C, false)), C);
    await $.wset([$t15], "OnKeyDown", (await $.wv([$t15], "edNewNameClick", C, true)), C);
    await $.wset([$t15], "Visible", (await $.wv([$t15], "False", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "InUse_rgClick", async function InUse_rgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t16 = (await $.mv((await $.v(C, "GurDm")), "MainDSet"));
    await $.mset((await $.wcall([$t16], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger", (await $.mv((await $.wv([$t16], "InUse_rg", C, false)), "ItemIndex")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "PageControl1Change", async function PageControl1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "RecNo", 1);
  await $.mset((await $.v(C, "Panel2")), "TabIndex", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "panel2Change", async function panel2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "savechg", []));
  await $.mset((await $.mv((await $.v(C, "GurDm")), "MainDSet")), "RecNo", $.add((await $.mv((L0["sender"]), "TabIndex")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "panelChange", async function panelChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveBali", []));
  await $.mset((await $.mv((await $.v(C, "GurDm")), "BAliDSet")), "RecNo", $.add((await $.mv((L0["sender"]), "TabIndex")), 1));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmGuarante", "edNewNameClick", async function edNewNameClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "procname": '', "i": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.ne((await $.call(C, "Trim", [(await $.mv((L0["sender"]), "Text"))])), "")), async () => ($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))))) {
    L0["procname"] = $.add($.add($.add($.add($.add(" insert into CM_GUARCOMPANY (name) values ", "("), "'"), (await $.mv((L0["sender"]), "Text"))), "'"), ")");
    await $.mset((await $.mv((await $.mv((await $.v(C, "GurDm")), "OracleQuery1")), "sql")), "text", L0["procname"]);
    await $.mcall((await $.mv((await $.v(C, "GurDm")), "OracleQuery1")), "Execute", []);
    await $.mset((await $.mv((await $.mv((await $.v(C, "GurDm")), "OracleQuery1")), "sql")), "text", "commit");
    await $.mcall((await $.mv((await $.v(C, "GurDm")), "OracleQuery1")), "Execute", []);
    await $.mcall((await $.mv((await $.v(C, "GurDm")), "CompanyDSet")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "GurDm")), "maxid")), "open", []);
    await $.mset((await $.v(C, "DBEditCompany")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "GurDm")), "maxid")), "fieldbyname", ["mid"])), "asinteger")));
    await $.mset(L0["sender"], "Visible", false);
    { const $t17 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t18 = true;
      for (;;) {
        if (!$t18) { L0["i"] = $.succ(L0["i"], 1); }
        $t18 = false;
        if (!($.ord(L0["i"]) <= $.ord($t17))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  if ($.truthy(($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))) {
    await $.mset(L0["sender"], "Visible", false);
    { const $t19 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t20 = true;
      for (;;) {
        if (!$t20) { L0["i"] = $.succ(L0["i"], 1); }
        $t20 = false;
        if (!($.ord(L0["i"]) <= $.ord($t19))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmGuarante", (await $.mcall((await $.v(C, "TFrmGuarante")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
