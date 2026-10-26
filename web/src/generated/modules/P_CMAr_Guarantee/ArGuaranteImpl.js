// Generated from ArGuaranteImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("ArGuaranteImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "dialogs", "ComCtrls", "ExtCtrls", "Buttons", "StdCtrls", "Mask", "DBCtrls", "DBCtrlsEh", "db", "CMHintBox", "NLSLocalizer", "CMDBSearchEdit", "DBLookupEh", "ActnList", "StdActns", "variants", "DBActns", "DBGridEh", "ArCommonDecls", "ArDmImpl", "SBTranslateProc", "sboapiDataModuleImpl", "ArAddGuarFormImpl", "ArAddGuarFormNImpl"]);
  const C = [U];
  U.defClass("TFrmGuarante", "TForm", {"pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel": {"name": "panel", "type": "TTabControl"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "panel100": {"name": "Panel100", "type": "TPanel"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "panel2": {"name": "Panel2", "type": "TTabControl"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "label155": {"name": "Label155", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "speedbutton11": {"name": "SpeedButton11", "type": "TSpeedButton"}, "speedbutton12": {"name": "SpeedButton12", "type": "TSpeedButton"}, "label29": {"name": "Label29", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "dbediteh9": {"name": "DBEditEh9", "type": "TDBEditEh"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "speedbutton17": {"name": "SpeedButton17", "type": "TSpeedButton"}, "speedbutton18": {"name": "SpeedButton18", "type": "TSpeedButton"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "speedbutton13": {"name": "SpeedButton13", "type": "TSpeedButton"}, "speedbutton14": {"name": "SpeedButton14", "type": "TSpeedButton"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "speedbutton15": {"name": "SpeedButton15", "type": "TSpeedButton"}, "speedbutton16": {"name": "SpeedButton16", "type": "TSpeedButton"}, "label157": {"name": "Label157", "type": "TLabel"}, "label154": {"name": "Label154", "type": "TLabel"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "speedbutton19": {"name": "SpeedButton19", "type": "TSpeedButton"}, "speedbutton20": {"name": "SpeedButton20", "type": "TSpeedButton"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "inuse_rg": {"name": "InUse_rg", "type": "TRadioGroup"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "speedbutton21": {"name": "SpeedButton21", "type": "TSpeedButton"}, "speedbutton22": {"name": "SpeedButton22", "type": "TSpeedButton"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbediteh10": {"name": "DBEditEh10", "type": "TDBEditEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "speedbutton23": {"name": "SpeedButton23", "type": "TSpeedButton"}, "speedbutton24": {"name": "SpeedButton24", "type": "TSpeedButton"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "speedbutton25": {"name": "SpeedButton25", "type": "TSpeedButton"}, "speedbutton26": {"name": "SpeedButton26", "type": "TSpeedButton"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbediteh6": {"name": "DBEditEh6", "type": "TDBEditEh"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "speedbutton27": {"name": "SpeedButton27", "type": "TSpeedButton"}, "speedbutton28": {"name": "SpeedButton28", "type": "TSpeedButton"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbediteh7": {"name": "DBEditEh7", "type": "TDBEditEh"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "speedbutton29": {"name": "SpeedButton29", "type": "TSpeedButton"}, "speedbutton30": {"name": "SpeedButton30", "type": "TSpeedButton"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "speedbutton35": {"name": "SpeedButton35", "type": "TSpeedButton"}, "speedbutton36": {"name": "SpeedButton36", "type": "TSpeedButton"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel26": {"name": "Panel26", "type": "TPanel"}, "label17": {"name": "Label17", "type": "TLabel"}, "spcompany": {"name": "spcompany", "type": "TSpeedButton"}, "dbeditcompany": {"name": "DBEditCompany", "type": "TDBLookupComboboxEh"}, "panel27": {"name": "Panel27", "type": "TPanel"}, "speedbutton37": {"name": "SpeedButton37", "type": "TSpeedButton"}, "speedbutton38": {"name": "SpeedButton38", "type": "TSpeedButton"}, "label22": {"name": "Label22", "type": "TLabel"}, "dbediteh13": {"name": "DBEditEh13", "type": "TDBEditEh"}, "panel28": {"name": "Panel28", "type": "TPanel"}, "speedbutton39": {"name": "SpeedButton39", "type": "TSpeedButton"}, "speedbutton40": {"name": "SpeedButton40", "type": "TSpeedButton"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbdatetimeediteh4": {"name": "DBDateTimeEditEh4", "type": "TDBDateTimeEditEh"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label116": {"name": "Label116", "type": "TLabel"}, "label152": {"name": "Label152", "type": "TLabel"}, "label117": {"name": "Label117", "type": "TLabel"}, "label118": {"name": "Label118", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "dbdatetimeediteh5": {"name": "DBDateTimeEditEh5", "type": "TDBDateTimeEditEh"}, "dblookupcomboboxeh26": {"name": "DBLookupComboboxEh26", "type": "TDBLookupComboboxEh"}, "speedbutton41": {"name": "SpeedButton41", "type": "TSpeedButton"}, "speedbutton42": {"name": "SpeedButton42", "type": "TSpeedButton"}, "speedbutton43": {"name": "SpeedButton43", "type": "TSpeedButton"}, "speedbutton44": {"name": "SpeedButton44", "type": "TSpeedButton"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "panel30": {"name": "Panel30", "type": "TPanel"}, "label44": {"name": "Label44", "type": "TLabel"}, "label68": {"name": "Label68", "type": "TLabel"}, "label69": {"name": "Label69", "type": "TLabel"}, "cmsearchedit8": {"name": "CMSearchEdit8", "type": "TCMSearchEdit"}, "dblookupcomboboxeh17": {"name": "DBLookupComboboxEh17", "type": "TDBLookupComboboxEh"}, "speedbutton45": {"name": "SpeedButton45", "type": "TSpeedButton"}, "panel29": {"name": "Panel29", "type": "TPanel"}, "speedbutton46": {"name": "SpeedButton46", "type": "TSpeedButton"}, "speedbutton47": {"name": "SpeedButton47", "type": "TSpeedButton"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "label21": {"name": "Label21", "type": "TLabel"}, "hbconclusion": {"name": "HBConclusion", "type": "TCMHintBox"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actionpr": {"name": "ActionPr", "type": "TAction"}, "insert": {"name": "insert", "type": "TDataSetPost"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "dbediteh11": {"name": "DBEditEh11", "type": "TDBEditEh"}, "dbediteh14": {"name": "DBEditEh14", "type": "TDBEditEh"}, "dbediteh15": {"name": "DBEditEh15", "type": "TDBEditEh"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "label27": {"name": "Label27", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "dbediteh16": {"name": "DBEditEh16", "type": "TDBEditEh"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "button1": {"name": "Button1", "type": "TButton"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "label32": {"name": "Label32", "type": "TLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "panel31": {"name": "Panel31", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "label37": {"name": "Label37", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "label39": {"name": "Label39", "type": "TLabel"}, "dbdatetimeediteh7": {"name": "DBDateTimeEditEh7", "type": "TDBDateTimeEditEh"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "label34": {"name": "Label34", "type": "TLabel"}, "label35": {"name": "Label35", "type": "TLabel"}, "label36": {"name": "Label36", "type": "TLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "label19": {"name": "Label19", "type": "TLabel"}, "ednewname": {"name": "edNewName", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FrmGuarante", null, "TFrmGuarante");
    U.var_("creditid", 0, "integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.set(C, "creditid", (await $.v(C, "Get_SelectedCrdID")));
  await $.mcall((await $.v(C, "FrmGuarante")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmGuarante", "SpeedButton9Click", async function SpeedButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
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
  await $.set(C, "ArGurDm", (await $.mcall((await $.v(C, "TArGurDm")), "create", [Self])));
  await $.set(C, "AddGuarForm", (await $.mcall((await $.v(C, "TAddGuarForm")), "create", [Self])));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
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
  U.method("TFrmGuarante", "DoEdit", async function DoEdit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"fcreditid": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["fcreditid"]);
  L0["locateaccounts"] = $.fn(async function LocateAccounts(p0) {
  const L1 = {"lookupcontrol": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["lookupcontrol"]);
  {
    const $t1 = L1["lookupcontrol"];
    if ($.truthy((await $.and_(($.not((await $.wcall([$t1], "VarIsNull", [(await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t1], "DataField", C, false))])), "AsVariant"))], C)))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t1], "DataField", C, false))])), "AsInteger")), 0)))))) {
      await $.wset([$t1], "KeyValue", (await $.wv([$t1], "Null", C, false)), C);
      await $.wset([$t1], "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "ListSource", C, false)), "DataSet")), "FieldByName", [(await $.wv([$t1], "KeyField", C, false))])), "AsInteger")), C);
      await $.mset((await $.wv([$t1], "CMSearchEdit8", C, false)), "text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "ArGurDm", C, false)), "OUTCollatralAccs")), "FieldByName", ["accno"])), "Asstring")));
    }
  }
  return L1.result;
});
  await $.stmt((await $.callv(L0["locateaccounts"], [(await $.v(C, "DBLookupComboboxEh2"))])));
  await $.stmt((await $.callv(L0["locateaccounts"], [(await $.v(C, "DBLookupComboboxEh17"))])));
  return L0.result;
}, {"params": ["FCreditID"], "kind": "procedure", "ptypes": ["Integer"]});
  U.method("TFrmGuarante", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.mv((await $.v(C, "ArGurDm")), "MainDSet"));
    await $.stmt($.wcall([$t2], "close", [], C));
    await $.stmt((await $.wcall([$t2], "SetVariable", ["CREDITID", (await $.wv([$t2], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t2], "open", [], C));
    await $.stmt($.wcall([$t2], "edit", [], C));
    await $.mset((await $.wv([$t2], "InUse_rg", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t2], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger")));
  }
  {
    const $t3 = (await $.mv((await $.v(C, "ArGurDm")), "OUTCollatralAccs"));
    if ($.truthy($.eq((await $.wv([$t3], "active", C, false)), (await $.wv([$t3], "true", C, false))))) {
      await $.stmt($.wcall([$t3], "close", [], C));
    }
    await $.stmt((await $.wcall([$t3], "SetVariable", ["CREDITID", (await $.wv([$t3], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t3], "open", [], C));
  }
  await $.stmt((await $.call(C, "DoEdit", [(await $.v(C, "creditid"))])));
  {
    const $t4 = (await $.mv((await $.v(C, "ArGurDm")), "BAliDSet"));
    await $.stmt($.wcall([$t4], "close", [], C));
    await $.stmt((await $.wcall([$t4], "SetVariable", ["CREDITID", (await $.wv([$t4], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t4], "open", [], C));
    await $.stmt($.wcall([$t4], "edit", [], C));
  }
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "edNewName"))]))))) {
    await $.set(C, "edNewName", (await $.mcall((await $.v(C, "TEdit")), "Create", [Self])));
  }
  {
    const $t5 = (await $.v(C, "edNewName"));
    await $.wset([$t5], "Parent", (await $.wv([$t5], "Panel26", C, false)), C);
    await $.wset([$t5], "OnKeyDown", (await $.wv([$t5], "edNewNameClick", C, true)), C);
    await $.wset([$t5], "Visible", (await $.wv([$t5], "False", C, false)), C);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSet")), "RecNo")), 1))) {
    await $.mset((await $.v(C, "DBLookupComboboxEh9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "BAliDSet")), "FieldByName", ["city"])), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "CheckFields", async function CheckFields(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rs_checkfields"] = "\"%s\" - sahəsi boşdur!";
  L0["showmsg"] = $.fn(async function ShowMsg(p0) {
  const L1 = {"message": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["message"]);
  await $.stmt((await $.mcall((await $.v(C, "HBConclusion")), "ShowMessage", [L1["message"]])));
  $.abort();
  return L1.result;
});
  L0["checkfieldbyname"] = $.fn(async function CheckFieldByName(p0) {
  const L1 = {"fieldname": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["fieldname"]);
  if ($.truthy((await $.mv(L1["fieldname"], "IsNull")))) {
    await $.stmt((await $.callv(L0["showmsg"], [(await $.call(C, "Format", [L0["rs_checkfields"], [(await $.mv(L1["fieldname"], "DisplayName"))]]))])));
  }
  return L1.result;
});
  L0["checkfieldbynames"] = $.fn(async function CheckFieldByNames() {
  const L1 = {result: undefined};
  {
    const $t6 = (await $.v(C, "ArGurDm"));
    await $.stmt((await $.wcall([$t6], "CheckFieldByName", [(await $.wv([$t6], "MainDSetPLEDGEID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t6], "CheckFieldByName", [(await $.wv([$t6], "MainDSetPLEDGENAME", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t6], "CheckFieldByName", [(await $.wv([$t6], "MainDSetPLEDGEPRICE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t6], "CheckFieldByName", [(await $.wv([$t6], "MainDSetPLEDGSORTS", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["checkfieldbynames"], []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmGuarante", "SaveChg", async function SaveChg(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.stmt($.call(C, "CheckFields", []));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "Guarante")), "CallProcedure", ["Guarantee_Add1", [(await $.v(C, "creditid")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetpledgeid")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetpledgename")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetholdername")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetholderaddress")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetanyinfotodisting")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetregistryno")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetregistryagency")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetregistrydate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetpledgeinuse")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetpledgeinsurant")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetinsuranceagency")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetinsuranceamount")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetinsurancedate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetpledgepricetorpaqha")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetpledgepriceevkv")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetinsuranceright")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetinsuranceid")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetpledgeid_p")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetgqname")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetgqpaspnum")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetgqpaspyer")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetgqpaspdate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetgqadress")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetreyster")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetseryamh")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetgqtel")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetpledgeprice")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetpledgsorts")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetcompany")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetcompanydat")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetcompanyexpert")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetCARDID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetOUTCOLLATERALACCID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetDECASTATUS")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetGQTELMOB")), "Asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetGQTELHOME")), "Asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetGQTELWORK")), "Asstring"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmGuarante", "edNewNameClick", async function edNewNameClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "procname": '', "i": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.ne((await $.call(C, "Trim", [(await $.mv((L0["sender"]), "Text"))])), "")), async () => ($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))))) {
    L0["procname"] = $.add($.add($.add($.add($.add(" insert into CM_GUARCOMPANY (name) values ", "("), "'"), (await $.mv((L0["sender"]), "Text"))), "'"), ")");
    await $.mset((await $.mv((await $.mv((await $.v(C, "ArGurDm")), "OracleQuery1")), "sql")), "text", L0["procname"]);
    await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "OracleQuery1")), "Execute", []);
    await $.mset((await $.mv((await $.mv((await $.v(C, "ArGurDm")), "OracleQuery1")), "sql")), "text", "commit");
    await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "OracleQuery1")), "Execute", []);
    await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "CompanyDSet")), "Refresh", []);
    await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "maxid")), "open", []);
    await $.mset((await $.v(C, "DBEditCompany")), "KeyValue", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "maxid")), "fieldbyname", ["mid"])), "asinteger")));
    await $.mset(L0["sender"], "Visible", false);
    { const $t7 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t8 = true;
      for (;;) {
        if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
        $t8 = false;
        if (!($.ord(L0["i"]) <= $.ord($t7))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  if ($.truthy(($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))) {
    await $.mset(L0["sender"], "Visible", false);
    { const $t9 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t10 = true;
      for (;;) {
        if (!$t10) { L0["i"] = $.succ(L0["i"], 1); }
        $t10 = false;
        if (!($.ord(L0["i"]) <= $.ord($t9))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFrmGuarante", "SpeedButton41Click", async function SpeedButton41Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SpeedButton43")), "Click", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "Guarante")), "CallProcedure", ["Gur_add", [(await $.v(C, "creditid"))]])));
  await $.mset((await $.v(C, "SpeedButton43")), "Enabled", true);
  {
    const $t11 = (await $.v(C, "Panel2"));
    const $t12 = (await $.mv((await $.wv([$t11], "ArGurDm", C, false)), "MainDSet"));
    await $.stmt($.wcall([$t11, $t12], "Refresh", [], C));
    await $.wset([$t11, $t12], "recno", (await $.wv([$t11, $t12], "RecordCount", C, false)), C);
    await $.wset([$t11, $t12], "index", (await $.wv([$t11, $t12], "RecordCount", C, false)), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
    await $.wset([$t11, $t12], "TabIndex", (await $.mcall((await $.wv([$t11, $t12], "Tabs", C, false)), "Add", [(await $.wcall([$t11, $t12], "Format", ["Girov №%d ", [$.sub((await $.wv([$t11, $t12], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1)]], C))])), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton42Click", async function SpeedButton42Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [$.add((await $.call(C, "inttostr", [$.sub((await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetCARDID")), "asinteger")), 1)])), " № li Girov silinəcək əminsinizmi ?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "Guarante")), "CallProcedure", ["Gur_del", [(await $.v(C, "creditid")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSetCARDID")), "AsVariant"))]])));
  await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "MainDSet")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "MainDSet")), "open", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "Panel2")), "Tabs")), "Count")), 1))) {
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "Panel2")), "Tabs")), "Clear", []);
  { const $t13 = $.sub((await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSet")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t14 = true;
    for (;;) {
      if (!$t14) { L0["index"] = $.succ(L0["index"], 1); }
      $t14 = false;
      if (!($.ord(L0["index"]) <= $.ord($t13))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "panel2")), "Tabs")), "Add", [(await $.call(C, "Format", ["Girov №%d ", [L0["index"]]]))])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "Panel2Change", async function Panel2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "ArGurDm")), "MainDSet")), "RecNo", $.add((await $.mv((L0["sender"]), "TabIndex")), 1));
  await $.stmt((await $.call(C, "DoEdit", [(await $.v(C, "creditid"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "PageControl1Change", async function PageControl1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "ArGurDm")), "MainDSet")), "RecNo", 1);
  await $.mset((await $.v(C, "Panel2")), "TabIndex", 1);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "spcompanyClick", async function spcompanyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "edNewName"));
    await $.wset([$t15], "Text", "", C);
    await $.wset([$t15], "width", 218, C);
    await $.wset([$t15], "Left", 28, C);
    await $.wset([$t15], "top", 6, C);
    await $.wset([$t15], "ctl3d", (await $.wv([$t15], "false", C, false)), C);
    await $.wset([$t15], "Visible", (await $.wv([$t15], "True", C, false)), C);
    await $.stmt($.wcall([$t15], "SetFocus", [], C));
  }
  await $.mset((await $.v(C, "spcompany")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SaveBali", async function SaveBali(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit9")), "Enabled")), true))) {
    if ($.truthy($.ne((await $.call(C, "length", [(await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetPINCODE")), "asstring"))])), 7))) {
      await $.stmt((await $.call(C, "ShowMessage", ["PinKod ən azı 7 sinvol olmalıdır!"])));
      $.abort();
    }
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "Guarante")), "CallProcedure", ["add_Guarantor", [(await $.v(C, "creditid")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetCARDID")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetGUARANTORNAME")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetGUARANTORID")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetGUARANTORSALARY")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetZAMINWORK1")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetZAMINADRES1")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetZAMINTEL1")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetZMPASPYER1")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetZMPASPDAT1")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetZMTELMOB1")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetPINCODE")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetPERSONALTYPE")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetDATEOFBIRTH")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetCUNTRY")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetCITY")), "asstring")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetFACTADRES")), "asstring"))]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmGuarante", "panelChange", async function panelChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "a": 0, "b": null};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveBali", []));
  await $.mset((await $.mv((await $.v(C, "ArGurDm")), "BAliDSet")), "RecNo", $.add((await $.mv((L0["sender"]), "TabIndex")), 1));
  L0["a"] = (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSet")), "RecordCount"));
  { const $t16 = L0["a"];
    L0["i"] = 0;
    let $t17 = true;
    for (;;) {
      if (!$t17) { L0["i"] = $.succ(L0["i"], 1); }
      $t17 = false;
      if (!($.ord(L0["i"]) <= $.ord($t16))) break;
      await $.mset((await $.v(C, "DBLookupComboboxEh9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "BAliDSet")), "FieldByName", ["city"])), "AsString")));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveBali", []));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "Guarante")), "CallProcedure", ["BAli_add", [(await $.v(C, "creditid"))]])));
  {
    const $t18 = (await $.v(C, "panel"));
    const $t19 = (await $.mv((await $.wv([$t18], "ArGurDm", C, false)), "BAliDSet"));
    await $.stmt($.wcall([$t18, $t19], "Refresh", [], C));
    await $.wset([$t18, $t19], "recno", (await $.wv([$t18, $t19], "RecordCount", C, false)), C);
    await $.wset([$t18, $t19], "index", (await $.wv([$t18, $t19], "RecordCount", C, false)), { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true });
    await $.wset([$t18, $t19], "TabIndex", (await $.mcall((await $.wv([$t18, $t19], "Tabs", C, false)), "Add", [(await $.wcall([$t18, $t19], "Format", ["Zamin №%d ", [$.sub((await $.wv([$t18, $t19], "Index", { get: async () => L0["index"], set: async (v) => { L0["index"] = v; }, local: true }, false)), 1)]], C))])), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton7Click", async function SpeedButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "index": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "Guarante")), "CallProcedure", ["Bali_del", [(await $.v(C, "creditid")), (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSetCARDID")), "AsVariant"))]])));
  await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "BAliDSet")), "Refresh", []);
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "Panel")), "Tabs")), "Count")), 1))) {
    return L0.result;
  }
  await $.mcall((await $.mv((await $.v(C, "Panel")), "Tabs")), "Clear", []);
  { const $t20 = $.sub((await $.mv((await $.mv((await $.v(C, "ArGurDm")), "BAliDSet")), "RecordCount")), 1);
    L0["index"] = 0;
    let $t21 = true;
    for (;;) {
      if (!$t21) { L0["index"] = $.succ(L0["index"], 1); }
      $t21 = false;
      if (!($.ord(L0["index"]) <= $.ord($t20))) break;
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "panel")), "Tabs")), "Add", [(await $.call(C, "Format", ["Zamin №%d ", [L0["index"]]]))])));
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton8Click", async function SpeedButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t22 = (await $.mv((await $.v(C, "ArGurDm")), "BAliDSet"));
    await $.mset((await $.wcall([$t22], "FieldByName", ["GUARANTORID"], C)), "Asstring", (await $.mv((await $.wv([$t22], "DBEdit1", C, false)), "Text")));
  }
  await $.mcall((await $.v(C, "DBEdit1")), "SetFocus", []);
  await $.stmt($.call(C, "savebali", []));
  {
    const $t23 = (await $.mv((await $.v(C, "ArGurDm")), "BAliDSet"));
    if ($.truthy((await $.wv([$t23], "active", C, false)))) {
      await $.stmt($.wcall([$t23], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t23], "SetVariable", ["creditid", (await $.wv([$t23], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t23], "Open", [], C));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.wv([$t23], "ArGurDm", C, false)), "BAliDSet")), "RecNo")), 1))) {
      await $.mset((await $.wv([$t23], "DBLookupComboboxEh9", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t23], "ArGurDm", C, false)), "BAliDSet")), "FieldByName", ["city"])), "AsString")));
    }
  }
  await $.stmt((await $.call(C, "showmessage", ["  Əməliyyat uğurla yerinə yetrildi  "])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "InUse_rgClick", async function InUse_rgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t24 = (await $.mv((await $.v(C, "ArGurDm")), "MainDSet"));
    await $.mset((await $.wcall([$t24], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger", (await $.mv((await $.wv([$t24], "InUse_rg", C, false)), "ItemIndex")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "DBEdit9KeyPress", async function DBEdit9KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("A","Z"), ...$.range("a","z"), ...$.range("0","9"), "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmGuarante", "DBLookupComboboxEh17KeyValueChanged", async function DBLookupComboboxEh17KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t25], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t25], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t26 = (await $.mv((await $.v(C, "ArGurDm")), "GurOracleData"));
    if ($.truthy((await $.wv([$t26], "active", C, false)))) {
      await $.stmt($.wcall([$t26], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t26], "SetVariable", ["credid", (await $.wv([$t26], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t26], "Open", [], C));
    if ($.truthy($.gt((await $.wv([$t26], "RecordCount", C, false)), 0))) {
      await $.mcall((await $.wv([$t26], "AddGuarForm", C, false)), "showmodal", []);
    } else {
      await $.stmt((await $.wcall([$t26], "ShowMessage", ["Bu müştəri üçün girovlar modlunda girov yığılmayıb"], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "CheckBox1")), "Checked")), true))) {
    await $.mset((await $.v(C, "CheckBox1")), "Caption", "Hə");
    await $.mset((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "MainDSet")), "FieldByName", ["DECASTATUS"])), "AsInteger", 1);
  } else {
    await $.mset((await $.v(C, "CheckBox1")), "Caption", "Yox");
    await $.mset((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "MainDSet")), "FieldByName", ["DECASTATUS"])), "AsInteger", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "SpeedButton45Click", async function SpeedButton45Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "accid": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Öncə Girovun tipi seçilməlidir"])));
    return L0.result;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "text")), ""))) {
    await $.stmt((await $.call(C, "showmessage", ["Öncə Girovun çeşidi seçilməlidir"])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.call(C, "MessageDlg", ["Balansdan kənar girov hesabı aftomakik olaraq açılacaq əminsinizmi ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    return L0.result;
  }
  L0["accid"] = (await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "Guarante")), "CallintegerFunction", ["Out_accno", [(await $.v(C, "creditid")), (await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "KeyValue"))]]));
  await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "OUTCollatralAccs")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "OUTCollatralAccs")), "open", []);
  await $.mset((await $.mcall((await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh17")), "dataSource")), "DataSet")), "FieldByName", ["outcollateralaccid"])), "asinteger", L0["accid"]);
  await $.mset((await $.v(C, "CMSearchEdit8")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "ArGurDm")), "OUTCollatralAccs")), "FieldByName", ["accno"])), "Asstring")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "CMSearchEdit8Exit", async function CMSearchEdit8Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t27 = L0["sender"];
    await $.wset([$t27], "Color", (await $.wv([$t27], "ColorSave", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "insertExecute", async function insertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t28 = (await $.mv((await $.v(C, "ArGurDm")), "MainDSet"));
    if ($.truthy($.eq((await $.wv([$t28], "active", C, false)), (await $.wv([$t28], "false", C, false))))) {
      await $.stmt($.wcall([$t28], "open", [], C));
    }
    await $.mset((await $.wcall([$t28], "FieldByName", ["PLEDGENAME"], C)), "Asstring", (await $.mv((await $.wv([$t28], "DBEditEh8", C, false)), "Text")));
  }
  await $.mcall((await $.v(C, "DBEditEh8")), "SetFocus", []);
  await $.stmt($.call(C, "SaveChg", []));
  {
    const $t29 = (await $.v(C, "ArGurDm"));
    const $t30 = (await $.wv([$t29], "MainDSet", C, false));
    if ($.truthy((await $.wv([$t29, $t30], "active", C, false)))) {
      await $.stmt($.wcall([$t29, $t30], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t29, $t30], "SetVariable", ["creditid", (await $.wv([$t29, $t30], "creditid", C, false))], C)));
    await $.stmt($.wcall([$t29, $t30], "Open", [], C));
  }
  await $.stmt((await $.call(C, "showmessage", ["  Əməliyyat uğurla yerinə yetrildi  "])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "KeyValue")), 1))) {
    await $.mset((await $.v(C, "DBEditEh8")), "Text", "Yox");
    await $.mset((await $.v(C, "DBNumberEditEh5")), "Value", 0);
    await $.mset((await $.v(C, "DBEditEh9")), "Text", "Yox");
    await $.mset((await $.v(C, "DBEditEh10")), "Text", "Yox");
    await $.mset((await $.v(C, "DBEditEh3")), "Text", "Yox");
    await $.mset((await $.v(C, "DBEditEh1")), "Text", "Yox");
    await $.mset((await $.v(C, "DBLookupComboboxEh2")), "KeyValue", 1);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "DBLookupComboboxEh5Change", async function DBLookupComboboxEh5Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.mv((await $.mv((await $.v(C, "DBLookupComboboxEh5")), "ListSource")), "DataSet"));
    if ($.truthy((await $.mcall((await $.mv((await $.wv([$t31], "ArGurDm", C, false)), "Guarante")), "CallBooleanFunction", ["checkPerson", [(await $.mv((await $.wv([$t31], "DBLookupComboboxEh5", C, false)), "KeyValue"))]])))) {
      await $.mset((await $.wv([$t31], "DBEdit9", C, false)), "Enabled", (await $.wv([$t31], "false", C, false)));
      await $.mset((await $.wv([$t31], "DBEdit9", C, false)), "Text", "");
    } else {
      await $.mset((await $.wv([$t31], "DBEdit9", C, false)), "Enabled", (await $.wv([$t31], "true", C, false)));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarante", "insertUpdate", async function insertUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", (await $.mv((await $.mv((await $.v(C, "ArGurDm")), "MainDSet")), "Modified")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmGuarante", (await $.mcall((await $.v(C, "TFrmGuarante")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
