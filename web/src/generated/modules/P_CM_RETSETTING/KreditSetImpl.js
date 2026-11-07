// Generated from KreditSetImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("KreditSetImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "DBCtrls", "Buttons", "CMHintBox", "DB", "DBGridEh", "Dmretsetitnq", "ShecudileImpl"]);
  const C = [U];
  U.defClass("TFrmKreditSet", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel63": {"name": "Panel63", "type": "TPanel"}, "label137": {"name": "Label137", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "panel64": {"name": "Panel64", "type": "TPanel"}, "label139": {"name": "Label139", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel62": {"name": "Panel62", "type": "TPanel"}, "label135": {"name": "Label135", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "panel65": {"name": "Panel65", "type": "TPanel"}, "label141": {"name": "Label141", "type": "TLabel"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "label30": {"name": "Label30", "type": "TLabel"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "panel66": {"name": "Panel66", "type": "TPanel"}, "label150": {"name": "Label150", "type": "TLabel"}, "dblookupcomboboxeh7": {"name": "DBLookupComboboxEh7", "type": "TDBLookupComboboxEh"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dblookupcomboboxeh8": {"name": "DBLookupComboboxEh8", "type": "TDBLookupComboboxEh"}, "panel33": {"name": "Panel33", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dblookupcomboboxeh13": {"name": "DBLookupComboboxEh13", "type": "TDBLookupComboboxEh"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "label33": {"name": "Label33", "type": "TLabel"}, "dblookupcomboboxeh9": {"name": "DBLookupComboboxEh9", "type": "TDBLookupComboboxEh"}, "panel32": {"name": "Panel32", "type": "TPanel"}, "label71": {"name": "Label71", "type": "TLabel"}, "dblookupcomboboxeh10": {"name": "DBLookupComboboxEh10", "type": "TDBLookupComboboxEh"}, "panel44": {"name": "Panel44", "type": "TPanel"}, "label56": {"name": "Label56", "type": "TLabel"}, "dblookupcomboboxeh25": {"name": "DBLookupComboboxEh25", "type": "TDBLookupComboboxEh"}, "p1": {"name": "P1", "type": "TPanel"}, "label4": {"name": "Label4", "type": "TLabel"}, "branchcbeh": {"name": "BranchCBEh", "type": "TDBLookupComboboxEh"}, "r1": {"name": "R1", "type": "TCheckBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "r9": {"name": "R9", "type": "TCheckBox"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "r3": {"name": "R3", "type": "TCheckBox"}, "r4": {"name": "R4", "type": "TCheckBox"}, "r5": {"name": "R5", "type": "TCheckBox"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "r6": {"name": "R6", "type": "TCheckBox"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "dbnumberediteh2": {"name": "DBNumberEditEh2", "type": "TDBNumberEditEh"}, "r7": {"name": "R7", "type": "TCheckBox"}, "panel69": {"name": "Panel69", "type": "TPanel"}, "label11": {"name": "Label11", "type": "TLabel"}, "dblookupcomboboxeh12": {"name": "DBLookupComboboxEh12", "type": "TDBLookupComboboxEh"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "r10": {"name": "R10", "type": "TCheckBox"}, "r11": {"name": "R11", "type": "TCheckBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "dbnumberediteh4": {"name": "DBNumberEditEh4", "type": "TDBNumberEditEh"}, "p2": {"name": "P2", "type": "TPanel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dblookupcomboboxeh14": {"name": "DBLookupComboboxEh14", "type": "TDBLookupComboboxEh"}, "r2": {"name": "R2", "type": "TCheckBox"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "r8": {"name": "R8", "type": "TCheckBox"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh11": {"name": "DBLookupComboboxEh11", "type": "TDBLookupComboboxEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dblookupcomboboxeh15": {"name": "DBLookupComboboxEh15", "type": "TDBLookupComboboxEh"}, "hbconclusion": {"name": "HBConclusion", "type": "TCMHintBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "dblookupcomboboxeh16": {"name": "DBLookupComboboxEh16", "type": "TDBLookupComboboxEh"}, "f1": {"name": "F1", "type": "TCheckBox"}, "f2": {"name": "F2", "type": "TCheckBox"}, "f3": {"name": "F3", "type": "TCheckBox"}}, {});
  U.init(async () => {
    U.var_("FrmKreditSet", null, "TFrmKreditSet");
  });
  U.method("TFrmKreditSet", "DBLookupComboboxEh1Change", async function DBLookupComboboxEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "text")), ""))) {
    await $.mcall((await $.mv((await $.v(C, "dmrt")), "creditcatData")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmrt")), "creditcatData")), "SetVariable", ["vid_sob", (await $.mv((await $.mcall((await $.mv((await $.v(C, "dmrt")), "EstateTypeData")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "dmrt")), "creditcatData")), "open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmKreditSet", "DBLookupComboboxEh2Change", async function DBLookupComboboxEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "dmrt")), "DataSetActivities")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmrt")), "DataSetActivities")), "SetVariable", ["act_id", (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "keyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "dmrt")), "DataSetActivities")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmKreditSet", "DBLookupComboboxEh3Change", async function DBLookupComboboxEh3Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "dmrt")), "ClientCategories")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "dmrt")), "ClientCategories")), "SetVariable", ["act_id", (await $.mv((await $.v(C, "DBLookupComboboxEh3")), "keyValue"))])));
  await $.mcall((await $.mv((await $.v(C, "dmrt")), "ClientCategories")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmKreditSet", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmKreditSet", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 13))) {
    await $.mcall((await $.v(C, "FrmKreditSet")), "Close", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmKreditSet", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.wobj(C, "DmRt"));
    await $.wset([$t1], "id", (await $.mv((await $.mcall((await $.wv([$t1], "PersonLink", C, false)), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true });
    await $.mcall((await $.wv([$t1], "comp", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "comp", C, false)), "SetVariable", ["mehid", (await $.wv([$t1], "id", { get: async () => L0["id"], set: async (v) => { L0["id"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t1], "comp", C, false)), "open", []);
  }
  { const $t2 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t3 = true;
    for (;;) {
      if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
      $t3 = false;
      if (!($.ord(L0["i"]) <= $.ord($t2))) break;
      if ($.truthy(($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TCheckBox")))))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Checked", true);
        await $.mcall((await $.mv((await $.v(C, "DmRt")), "comp")), "Close", []);
        { const $t4 = await $.iset((await $.mv((await $.mv((await $.v(C, "DmRt")), "comp")), "sql")), [3], $.add($.add($.add("and name =", "'"), (await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Name"))), "'")); if ($t4 !== undefined) { await $.mset((await $.mv((await $.v(C, "DmRt")), "comp")), "sql", $t4); } }
        await $.mcall((await $.mv((await $.v(C, "DmRt")), "comp")), "open", []);
        if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DmRt")), "comp")), "RecordCount")), 0))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Checked", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DmRt")), "comp")), "FieldByName", ["status"])), "AsBoolean")));
        }
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DmRt")), "PersonLinkF1")), "asinteger")), 0))) {
    await $.mset((await $.v(C, "f1")), "Checked", false);
  } else {
    await $.mset((await $.v(C, "f1")), "Checked", true);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DmRt")), "PersonLinkF2")), "asinteger")), 0))) {
    await $.mset((await $.v(C, "f2")), "Checked", false);
  } else {
    await $.mset((await $.v(C, "f2")), "Checked", true);
  }
  if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "DmRt")), "PersonLinkF3")), "asinteger")), 0))) {
    await $.mset((await $.v(C, "f3")), "Checked", false);
  } else {
    await $.mset((await $.v(C, "f3")), "Checked", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmKreditSet", "F1Click", async function F1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "f1")), "Checked")))) {
    await $.mset((await $.mv((await $.v(C, "DmRt")), "PersonLinkF1")), "asinteger", 1);
  } else {
    await $.mset((await $.mv((await $.v(C, "DmRt")), "PersonLinkF1")), "asinteger", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmKreditSet", "F2Click", async function F2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "f2")), "Checked")))) {
    await $.mset((await $.mv((await $.v(C, "DmRt")), "PersonLinkF2")), "asinteger", 1);
  } else {
    await $.mset((await $.mv((await $.v(C, "DmRt")), "PersonLinkF2")), "asinteger", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmKreditSet", "F3Click", async function F3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "f3")), "Checked")))) {
    await $.mset((await $.mv((await $.v(C, "DmRt")), "PersonLinkF3")), "asinteger", 1);
  } else {
    await $.mset((await $.mv((await $.v(C, "DmRt")), "PersonLinkF3")), "asinteger", 0);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmKreditSet", "CheckFields", async function CheckFields(Self) {
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
    const $t5 = (await $.wobj(C, "DmRt"));
    const $t6 = (await $.wv([$t5], "PersonLink", C, false));
    if ($.truthy($.eq((await $.mv((await $.wv([$t5, $t6], "DBLookupComboboxEh1", C, false)), "text")), ""))) {
      await $.stmt((await $.mcall((await $.wv([$t5, $t6], "HBConclusion", C, false)), "ShowMessage", ["Borc alanın tipi (Mülkiyyət növü) sahəsi boşdur !"])));
      $.abort();
    }
    await $.stmt((await $.wcall([$t5, $t6], "CheckFieldByName", [(await $.wv([$t5, $t6], "PersonLinkCREDITACT", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t5, $t6], "CheckFieldByName", [(await $.wv([$t5, $t6], "PersonLinkACTIVITIES", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t5, $t6], "CheckFieldByName", [(await $.wv([$t5, $t6], "PersonLinkCUSTOMERTYPE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t5, $t6], "CheckFieldByName", [(await $.wv([$t5, $t6], "PersonLinkCREDITTYPE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t5, $t6], "CheckFieldByName", [(await $.wv([$t5, $t6], "PersonLinkUSRGROUP", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    if ($.truthy($.eq((await $.mv((await $.wv([$t5, $t6], "DBLookupComboboxEh7", C, false)), "text")), ""))) {
      await $.stmt((await $.mcall((await $.wv([$t5, $t6], "HBConclusion", C, false)), "ShowMessage", ["Kreditin verilmə məqsədi sahəsi boşdur !"])));
      $.abort();
    }
    await $.stmt((await $.wcall([$t5, $t6], "CheckFieldByName", [(await $.wv([$t5, $t6], "PersonLinkRESERVEID", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t5, $t6], "CheckFieldByName", [(await $.wv([$t5, $t6], "PersonLinkAUTOPAYMENT", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t5, $t6], "CheckFieldByName", [(await $.wv([$t5, $t6], "PersonLinkAUTOEXPIRE", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
    await $.stmt((await $.wcall([$t5, $t6], "CheckFieldByName", [(await $.wv([$t5, $t6], "PersonLinkINTCALCMETHOD", C, false))], { get: async () => L0["checkfieldbyname"], set: async (v) => { L0["checkfieldbyname"] = v; }, local: true })));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["checkfieldbynames"], []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFrmKreditSet", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "id": '', "procname": '', "perrate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "CheckFields", []));
  L0["id"] = (await $.call(C, "inttostr", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DmRt")), "PersonLink")), "FieldByName", ["id"])), "AsInteger"))]));
  L0["procname"] = $.add(" delete cm_retelview where mehid=", L0["id"]);
  await $.mset((await $.mv((await $.mv((await $.v(C, "DmRt")), "OracleQuery1")), "sql")), "text", L0["procname"]);
  await $.mcall((await $.mv((await $.v(C, "DmRt")), "OracleQuery1")), "Execute", []);
  await $.mset((await $.mv((await $.mv((await $.v(C, "DmRt")), "OracleQuery1")), "sql")), "text", "commit");
  await $.mcall((await $.mv((await $.v(C, "DmRt")), "OracleQuery1")), "Execute", []);
  { const $t7 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t8 = true;
    for (;;) {
      if (!$t8) { L0["i"] = $.succ(L0["i"], 1); }
      $t8 = false;
      if (!($.ord(L0["i"]) <= $.ord($t7))) break;
      if ($.truthy(($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TCheckBox")))))) {
        if ($.truthy($.eq((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Checked")), false))) {
          L0["procname"] = $.add($.add($.add($.add($.add($.add($.add($.add(" insert into cm_retelview (mehid,name,status) values (", L0["id"]), ","), "'"), (await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Name"))), "'"), ","), "'false'"), ")");
          await $.mset((await $.mv((await $.mv((await $.v(C, "DmRt")), "OracleQuery1")), "sql")), "text", L0["procname"]);
          await $.mcall((await $.mv((await $.v(C, "DmRt")), "OracleQuery1")), "Execute", []);
          await $.mset((await $.mv((await $.mv((await $.v(C, "DmRt")), "OracleQuery1")), "sql")), "text", "commit");
          await $.mcall((await $.mv((await $.v(C, "DmRt")), "OracleQuery1")), "Execute", []);
        }
      }
      await $.tick();
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh25")), "KeyValue")), 1))) {
    await $.set(C, "Secudile", (await $.mcall((await $.v(C, "tSecudile")), "create", [Self])));
    await $.mset((await $.mv((await $.v(C, "Secudile")), "RGAnnuty")), "ItemIndex", (await $.mv((await $.mv((await $.v(C, "dmrt")), "PersonLinkANUITET")), "AsInteger")));
    await $.mset((await $.mv((await $.v(C, "Secudile")), "Gdovr")), "text", (await $.call(C, "inttostr", [(await $.mv((await $.mv((await $.v(C, "dmrt")), "PersonLinkGUZESHT")), "AsInteger"))])));
    { const $t9 = (await $.mv((await $.mv((await $.v(C, "dmrt")), "PersonLinkPERRATE")), "AsInteger"));
      if ($.eq($t9, 1)) {
        L0["perrate"] = 0;
      }
      else if ($.eq($t9, 3)) {
        L0["perrate"] = 1;
      }
      else if ($.eq($t9, 6)) {
        L0["perrate"] = 2;
      }
      else {
        L0["perrate"] = 3;
      }
    }
    await $.mset((await $.mv((await $.v(C, "Secudile")), "CmbBoxPeriodRate")), "ItemIndex", L0["perrate"]);
    await $.mcall((await $.v(C, "Secudile")), "ShowModal", []);
  }
  await $.mcall((await $.mv((await $.v(C, "DmRt")), "PersonLink")), "post", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmKreditSet", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
