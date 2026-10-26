// Generated from UInsAppMotor.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UInsAppMotor", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "StdCtrls", "Mask", "DBCtrls", "ComCtrls", "Grids", "DBGrids", "Buttons", "Db", "ExtCtrls", "DataUnitFullMotor", "UInsFullMotorCasco", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFullCascoForm", "TForm", {"motorapppagecontrol": {"name": "MotorAppPageControl", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbeditbanking": {"name": "DBEditBanking", "type": "TDBEdit"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "dbeditmodel": {"name": "DBEditModel", "type": "TDBEdit"}, "dbedittype": {"name": "DBEditType", "type": "TDBEdit"}, "dbedit1statenum": {"name": "DBEdit1StateNum", "type": "TDBEdit"}, "dbeditcolor": {"name": "DBEditColor", "type": "TDBEdit"}, "dbeditoutputyear": {"name": "DBEditOutputYear", "type": "TDBEdit"}, "dbeditseatcount": {"name": "DBEditSeatCount", "type": "TDBEdit"}, "dbeditenginnum": {"name": "DBEditEnginNum", "type": "TDBEdit"}, "dbeditchassisnum": {"name": "DBEditChassisNum", "type": "TDBEdit"}, "dbeditactualvalue": {"name": "DBEditActualValue", "type": "TDBEdit"}, "label31": {"name": "Label31", "type": "TLabel"}, "dbedittransmission": {"name": "DBEditTransmission", "type": "TDBEdit"}, "tabsheet5": {"name": "TabSheet5", "type": "TTabSheet"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "accesoriesdbgrid": {"name": "AccesoriesDBGrid", "type": "TDBGrid"}, "tabsheet6": {"name": "TabSheet6", "type": "TTabSheet"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label49": {"name": "Label49", "type": "TLabel"}, "label50": {"name": "Label50", "type": "TLabel"}, "label51": {"name": "Label51", "type": "TLabel"}, "label52": {"name": "Label52", "type": "TLabel"}, "label53": {"name": "Label53", "type": "TLabel"}, "label54": {"name": "Label54", "type": "TLabel"}, "label55": {"name": "Label55", "type": "TLabel"}, "label56": {"name": "Label56", "type": "TLabel"}, "label57": {"name": "Label57", "type": "TLabel"}, "label58": {"name": "Label58", "type": "TLabel"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "dbedit15": {"name": "DBEdit15", "type": "TDBEdit"}, "dbedit16": {"name": "DBEdit16", "type": "TDBEdit"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "dbedit19": {"name": "DBEdit19", "type": "TDBEdit"}, "dbedit20": {"name": "DBEdit20", "type": "TDBEdit"}, "dbedit21": {"name": "DBEdit21", "type": "TDBEdit"}, "label21": {"name": "Label21", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "back": {"name": "Back", "type": "TBitBtn"}, "next": {"name": "Next", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "commit": {"name": "Commit", "type": "TBitBtn"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbnavigator1": {"name": "DBNavigator1", "type": "TDBNavigator"}, "dbnavigator2": {"name": "DBNavigator2", "type": "TDBNavigator"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox3": {"name": "DBLookupComboBox3", "type": "TDBLookupComboBox"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbcombobox2": {"name": "DBComboBox2", "type": "TDBComboBox"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbcombobox3": {"name": "DBComboBox3", "type": "TDBComboBox"}, "label32": {"name": "Label32", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label18": {"name": "Label18", "type": "TLabel"}, "dbedit22": {"name": "DBEdit22", "type": "TDBEdit"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "label20": {"name": "Label20", "type": "TLabel"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label25": {"name": "Label25", "type": "TLabel"}, "lbbegindate": {"name": "lbBeginDate", "type": "TLabel"}, "edbegindate": {"name": "edBeginDate", "type": "TDateTimePicker"}, "edenddate": {"name": "edEndDate", "type": "TDateTimePicker"}, "lbenddate": {"name": "lbEndDate", "type": "TLabel"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}}, {});
  U.init(async () => {
    U.var_("FullCascoForm", null, "TFullCascoForm");
    U.var_("f", true, "boolean");
  });
  U.method("TFullCascoForm", "ButtonCommitClick", async function ButtonCommitClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a1": 0, "a2": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEditModel")), "Text")), ""))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Marka və model daxil edilməyib!", (await $.v(C, "mtWarning")), [(await $.v(C, "mbOK"))], 0])));
    return L0.result;
  }
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "DataModuleFullMotor")), "Ins_MotorFull")), "State")), [(await $.v(C, "dsEdit"))]))) {
    L0["a1"] = (await $.mv((await $.mv((await $.v(C, "DataModuleFullMotor")), "ins_motorfullid")), "value"));
    L0["a2"] = (await $.mv((await $.mv((await $.v(C, "DataModuleFullMotor")), "ins_motorfullkli_id")), "value"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "OPCommon")), "CallBooleanFunction", ["setblankdata", [4, L0["a1"], (await $.mv((await $.v(C, "edBeginDate")), "DateTime")), (await $.mv((await $.v(C, "edEndDate")), "DateTime")), L0["a2"]]])));
  }
  {
    const $t1 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Ins_MotorFull"));
    if ($.truthy($.in_((await $.wv([$t1], "State", C, false)), [(await $.wv([$t1], "dsInsert", C, false)), (await $.wv([$t1], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t1], "Post", [], C));
      await $.stmt($.wcall([$t1], "Refresh", [], C));
    }
  }
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "DataModuleFullMotor")), "Accesories")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsEdit"))]))) {
    await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "Accesories")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "Accesories")), "Refresh", []);
  }
  if ($.truthy($.in_((await $.mv((await $.mv((await $.v(C, "DataModuleFullMotor")), "MoreThanOne")), "State")), [(await $.v(C, "dsInsert")), (await $.v(C, "dsEdit"))]))) {
    await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "MoreThanOne")), "Post", []);
    await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "MoreThanOne")), "Refresh", []);
  }
  await $.stmt($.call(C, "Close", []));
  await $.mset((await $.v(C, "MotorAppPageControl")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFullCascoForm", "ButtonCancelClick", async function ButtonCancelClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  await $.mset((await $.v(C, "MotorAppPageControl")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFullCascoForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t2 = (await $.v(C, "DataModuleFullMotor"));
    if ($.truthy($.not((await $.mv((await $.wv([$t2], "Accesories", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t2], "Accesories", C, false)), "Open", []);
    }
    if ($.truthy($.not((await $.mv((await $.wv([$t2], "MoreThanOne", C, false)), "Active"))))) {
      await $.mcall((await $.wv([$t2], "MoreThanOne", C, false)), "Open", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFullCascoForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DataModuleFullMotor"));
    const $t4 = (await $.wv([$t3], "INS_Motorfull", C, false));
    if ($.truthy($.in_((await $.wv([$t3, $t4], "State", C, false)), [(await $.wv([$t3, $t4], "dsInsert", C, false)), (await $.wv([$t3, $t4], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t3, $t4], "Cancel", [], C));
      await $.stmt($.wcall([$t3, $t4], "RefreshRecord", [], C));
    }
  }
  await $.mset((await $.v(C, "MotorAppPageControl")), "ActivePageIndex", 0);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFullCascoForm", "FormKeyDown", async function FormKeyDown(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy($.eq((await L0["key"].get()), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFullCascoForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t5 = L0["sender"];
        await $.stmt((await $.wcall([$t5], "SelectNext", [(await $.wv([$t5], "ActiveControl", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "True", C, false))], C)));
      }
    } else {
      {
        const $t6 = L0["sender"];
        await $.stmt((await $.wcall([$t6], "SelectNext", [(await $.wv([$t6], "ActiveControl", C, false)), (await $.wv([$t6], "True", C, false)), (await $.wv([$t6], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFullCascoForm", "NextClick", async function NextClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "MotorAppPageControl")), "ActivePageIndex", $.add((await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex")), 1));
  if ($.truthy($.eq((await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex")), $.sub((await $.mv((await $.v(C, "MotorAppPageControl")), "PageCount")), 1)))) {
    await $.mset((await $.v(C, "Next")), "Enabled", false);
  }
  await $.mset((await $.v(C, "Back")), "Enabled", true);
  if ($.truthy($.eq((await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex")), 2))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEditModel")), "Text")), ""))) {
      await $.stmt((await $.call(C, "MessageDlg", ["Marka və model daxil edilməyib!", (await $.v(C, "mtWarning")), [(await $.v(C, "mbOK"))], 0])));
      return L0.result;
    }
    {
      const $t7 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Ins_MotorFull"));
      if ($.truthy($.in_((await $.wv([$t7], "State", C, false)), [(await $.wv([$t7], "dsInsert", C, false))]))) {
        await $.stmt($.wcall([$t7], "Refresh", [], C));
        await $.stmt((await $.wcall([$t7], "Locate", ["ID", (await $.mv((await $.wv([$t7], "dataModuleFullMotor", C, false)), "ResultID")), []], C)));
      }
    }
  }
  { const $t8 = (await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex"));
    if ($.eq($t8, 0)) {
      await $.mcall((await $.v(C, "DBLookupComboBox1")), "SetFocus", []);
    }
    else if ($.eq($t8, 1)) {
      await $.mcall((await $.v(C, "DBEditModel")), "SetFocus", []);
    }
    else if ($.eq($t8, 2)) {
      await $.mcall((await $.v(C, "AccesoriesDBGrid")), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFullCascoForm", "BackClick", async function BackClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "MotorAppPageControl"));
    await $.wset([$t9], "ActivePageIndex", $.sub((await $.wv([$t9], "ActivePageIndex", C, false)), 1), C);
    if ($.truthy($.eq((await $.wv([$t9], "ActivePageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t9], "Back", C, false)), "Enabled", (await $.wv([$t9], "false", C, false)));
    }
    await $.mset((await $.wv([$t9], "Next", C, false)), "Enabled", (await $.wv([$t9], "true", C, false)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFullCascoForm", "MotorAppPageControlChange", async function MotorAppPageControlChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "MotorAppPagecontrol"));
    if ($.truthy($.ne((await $.wv([$t10], "ActivePageIndex", C, false)), $.sub((await $.wv([$t10], "PageCount", C, false)), 1)))) {
      await $.mset((await $.wv([$t10], "Next", C, false)), "Enabled", (await $.wv([$t10], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t10], "Next", C, false)), "Enabled", (await $.wv([$t10], "false", C, false)));
    }
    if ($.truthy($.ne((await $.wv([$t10], "ActivepageIndex", C, false)), 0))) {
      await $.mset((await $.wv([$t10], "Back", C, false)), "Enabled", (await $.wv([$t10], "true", C, false)));
    } else {
      await $.mset((await $.wv([$t10], "Back", C, false)), "Enabled", (await $.wv([$t10], "false", C, false)));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "MotorAppPageControl")), "ActivePageIndex")), 2))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEditModel")), "Text")), ""))) {
      await $.stmt((await $.call(C, "MessageDlg", ["Marka və model daxil edilməyib!", (await $.v(C, "mtWarning")), [(await $.v(C, "mbOK"))], 0])));
      return L0.result;
    }
    {
      const $t11 = (await $.mv((await $.v(C, "DataModuleFullMotor")), "Ins_MotorFull"));
      if ($.truthy($.in_((await $.wv([$t11], "State", C, false)), [(await $.wv([$t11], "dsInsert", C, false))]))) {
        await $.stmt($.wcall([$t11], "Refresh", [], C));
        await $.stmt((await $.wcall([$t11], "Locate", ["ID", (await $.mv((await $.wv([$t11], "dataModuleFullMotor", C, false)), "ResultID")), []], C)));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFullCascoForm", "DBEditContactPersonKeyPress", async function DBEditContactPersonKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t12 = L0["sender"];
        await $.stmt((await $.wcall([$t12], "SelectNext", [(await $.wv([$t12], "ActiveControl", C, false)), (await $.wv([$t12], "False", C, false)), (await $.wv([$t12], "True", C, false))], C)));
      }
    } else {
      {
        const $t13 = L0["sender"];
        await $.stmt((await $.wcall([$t13], "SelectNext", [(await $.wv([$t13], "ActiveControl", C, false)), (await $.wv([$t13], "True", C, false)), (await $.wv([$t13], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFullCascoForm", "edBeginDateChange", async function edBeginDateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataModuleFullMotor")), "Ins_MotorFull")), "Edit", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFullCascoForm", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "id": 0};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (await $.v(C, "DataModuleFullMotor"));
    if ($.truthy($.in_((await $.mv((await $.wv([$t14], "Ins_MotorFull", C, false)), "State")), [(await $.wv([$t14], "dsInsert", C, false))]))) {
      await $.mset((await $.wv([$t14], "edBeginDate", C, false)), "DateTime", (await $.wv([$t14], "Now", C, false)));
      await $.mset((await $.wv([$t14], "edEndDate", C, false)), "DateTime", (await $.wv([$t14], "Now", C, false)));
    } else {
      await $.mcall((await $.wv([$t14], "ODSContracts", C, false)), "Close", []);
      await $.stmt((await $.mcall((await $.wv([$t14], "ODSContracts", C, false)), "SetVariable", ["blankid", (await $.mv((await $.wv([$t14], "ins_motorfullid", C, false)), "value"))])));
      await $.mcall((await $.wv([$t14], "ODSContracts", C, false)), "Open", []);
      await $.mset((await $.wv([$t14], "edBeginDate", C, false)), "DateTime", (await $.mv((await $.mv((await $.wv([$t14], "DataModuleFullMotor", C, false)), "ODSContractsbegin_date")), "AsDateTime")));
      await $.mset((await $.wv([$t14], "edEndDate", C, false)), "DateTime", (await $.mv((await $.mv((await $.wv([$t14], "DataModuleFullMotor", C, false)), "ODSContractsEnd_date")), "AsDateTime")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
