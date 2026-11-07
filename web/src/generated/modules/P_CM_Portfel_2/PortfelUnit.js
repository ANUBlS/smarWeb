// Generated from PortfelUnit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("PortfelUnit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "Mask", "DBCtrlsEh", "DBLookupEh", "ExtCtrls", "oracle", "DB", "Buttons", "ComCtrls", "ImgList", "ToolWin", "Grids", "DBGrids", "DBGridEh", "PortfelDataModImpl", "CommonDecls", "sbsystem", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TPortfelForm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "groupbox8": {"name": "GroupBox8", "type": "TGroupBox"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "groupbox12": {"name": "GroupBox12", "type": "TGroupBox"}, "groupbox13": {"name": "GroupBox13", "type": "TGroupBox"}, "dblookupcomboboxvalute": {"name": "DBLookupComboboxValute", "type": "TDBLookupComboboxEh"}, "checkboxvalute": {"name": "CheckBoxvalute", "type": "TCheckBox"}, "checkboxdspreserves": {"name": "CheckBoxDSPReserves", "type": "TCheckBox"}, "dblookupcomboboxehdspreserves": {"name": "DBLookupComboboxEhDSPReserves", "type": "TDBLookupComboboxEh"}, "checkboxpersons": {"name": "CheckBoxpersons", "type": "TCheckBox"}, "dblookupcomboboxehpersons": {"name": "DBLookupComboboxEhPersons", "type": "TDBLookupComboboxEh"}, "checkboxpledges": {"name": "CheckBoxPledges", "type": "TCheckBox"}, "dblookupcomboboxehpledges": {"name": "DBLookupComboboxEhPledges", "type": "TDBLookupComboboxEh"}, "checkboxfilial": {"name": "CheckBoxFilial", "type": "TCheckBox"}, "dblookupcomboboxehfilial": {"name": "DBLookupComboboxEhFilial", "type": "TDBLookupComboboxEh"}, "checkboxdssreserves": {"name": "CheckBoxDSSReserves", "type": "TCheckBox"}, "dblookupcomboboxehdssreserves": {"name": "DBLookupComboboxEhDSSReserves", "type": "TDBLookupComboboxEh"}, "checkboxcategorires": {"name": "CheckBoxCategorires", "type": "TCheckBox"}, "dblookupcomboboxehcategories": {"name": "DBLookupComboboxEhCategories", "type": "TDBLookupComboboxEh"}, "checkboxusergroup": {"name": "CheckBoxUserGroup", "type": "TCheckBox"}, "dblookupcomboboxehusergroup": {"name": "DBLookupComboboxEhUserGroup", "type": "TDBLookupComboboxEh"}, "checkboxuser": {"name": "CheckBoxUser", "type": "TCheckBox"}, "dblookupcomboboxehuser": {"name": "DBLookupComboboxEhUser", "type": "TDBLookupComboboxEh"}, "checkboxcredittype": {"name": "CheckBoxCreditType", "type": "TCheckBox"}, "dblookupcomboboxehcredittype": {"name": "DBLookupComboboxEhCreditType", "type": "TDBLookupComboboxEh"}, "checkboxcustomers": {"name": "CheckBoxCustomers", "type": "TCheckBox"}, "dblookupcomboboxehcustomers": {"name": "DBLookupComboboxEhCustomers", "type": "TDBLookupComboboxEh"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "actionfilteraccept": {"name": "ActionFilterAccept", "type": "TAction"}, "actionfilterreject": {"name": "ActionFilterReject", "type": "TAction"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "panel25": {"name": "Panel25", "type": "TPanel"}, "groupbox19": {"name": "GroupBox19", "type": "TGroupBox"}, "datetimepicker": {"name": "DateTimePicker", "type": "TDateTimePicker"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "groupbox18": {"name": "GroupBox18", "type": "TGroupBox"}, "editobligation": {"name": "EditObligation", "type": "TEdit"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "groupbox14": {"name": "GroupBox14", "type": "TGroupBox"}, "editrests": {"name": "Editrests", "type": "TEdit"}, "panel23": {"name": "Panel23", "type": "TPanel"}, "groupbox16": {"name": "GroupBox16", "type": "TGroupBox"}, "editinterest": {"name": "EditInterest", "type": "TEdit"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "groupbox15": {"name": "GroupBox15", "type": "TGroupBox"}, "editduerests": {"name": "EditDueRests", "type": "TEdit"}, "panel24": {"name": "Panel24", "type": "TPanel"}, "groupbox17": {"name": "GroupBox17", "type": "TGroupBox"}, "editdueinrest": {"name": "EditDueInRest", "type": "TEdit"}, "panel17": {"name": "Panel17", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "groupbox20": {"name": "GroupBox20", "type": "TGroupBox"}, "checkboxexpert": {"name": "CheckBoxExpert", "type": "TCheckBox"}, "dblookupcomboboxehexpert": {"name": "DBLookupComboboxEhExpert", "type": "TDBLookupComboboxEh"}}, {});
  U.init(async () => {
    U.var_("PortfelForm", null, "TPortfelForm");
  });
  U.method("TPortfelForm", "Calculation", async function Calculation(Self, p0, p1, p2, p3, p4) {
  const C = $.chain(Self, U);
  const L0 = {"rrest": $.asRef(p0), "rinterest": $.asRef(p1), "rrduerest": $.asRef(p2), "rdueinrest": $.asRef(p3), "rrobl": $.asRef(p4), result: undefined, "srest": 0, "sinterest": 0, "srduerest": 0, "sdueinrest": 0, "srobl": 0, "i": 0, "adate": 0};
  L0["srest"] = 0;
  L0["sinterest"] = 0;
  L0["srduerest"] = 0;
  L0["sdueinrest"] = 0;
  L0["srobl"] = 0;
  L0["adate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker")), "DateTime"))]))]));
  if ($.truthy($.eq(L0["adate"], (await $.v(C, "Get_CurrentDate"))))) {
    {
      const $t1 = (await $.mv((await $.v(C, "PortfelDataModule")), "MainDataSet"));
      await $.stmt($.wcall([$t1], "CloseAll", [], C));
      await $.stmt((await $.wcall([$t1], "SetVariable", ["dat", (await $.wv([$t1], "ADate", { get: async () => L0["adate"], set: async (v) => { L0["adate"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t1], "Open", [], C));
      await $.wset([$t1], "Filter", (await $.wv([$t1], "FilterString", C, false)), C);
      await $.wset([$t1], "Filtered", (await $.wv([$t1], "False", C, false)), C);
      await $.wset([$t1], "Filtered", (await $.wv([$t1], "True", C, false)), C);
    }
    { const $t2 = $.sub((await $.mv((await $.mv((await $.v(C, "PortfelDataModule")), "MainDataSet")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t3 = true;
      for (;;) {
        if (!$t3) { L0["i"] = $.succ(L0["i"], 1); }
        $t3 = false;
        if (!($.ord(L0["i"]) <= $.ord($t2))) break;
        L0["srobl"] = $.add(L0["srobl"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "MainDataSet")), "FieldByName", ["obligation"])), "AsFloat")));
        L0["sdueinrest"] = $.add(L0["sdueinrest"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "MainDataSet")), "FieldByName", ["dueinterestrest"])), "AsFloat")));
        L0["srest"] = $.add(L0["srest"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "MainDataSet")), "FieldByName", ["Rest"])), "AsFloat")));
        L0["sinterest"] = $.add(L0["sinterest"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "MainDataSet")), "FieldByName", ["INTERESTREST"])), "AsFloat")));
        L0["srduerest"] = $.add(L0["srduerest"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "MainDataSet")), "FieldByName", ["DUEREST"])), "AsFloat")));
        await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "MainDataSet")), "Next", []);
        await $.tick();
      }
    }
    await L0["rrest"].set(L0["srest"]);
    await L0["rinterest"].set(L0["sinterest"]);
    await L0["rrduerest"].set(L0["srduerest"]);
    await L0["rdueinrest"].set(L0["sdueinrest"]);
    await L0["rrobl"].set(L0["srobl"]);
  }
  if ($.truthy($.ne(L0["adate"], (await $.v(C, "Get_CurrentDate"))))) {
    {
      const $t4 = (await $.mv((await $.v(C, "PortfelDataModule")), "DateDataSet"));
      await $.stmt($.wcall([$t4], "CloseAll", [], C));
      await $.stmt((await $.wcall([$t4], "SetVariable", ["Hdate", (await $.wv([$t4], "ADate", { get: async () => L0["adate"], set: async (v) => { L0["adate"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t4], "Open", [], C));
      await $.wset([$t4], "Filtered", (await $.wv([$t4], "False", C, false)), C);
      await $.wset([$t4], "Filter", (await $.wv([$t4], "FilterString", C, false)), C);
      await $.wset([$t4], "Filtered", (await $.wv([$t4], "True", C, false)), C);
    }
    { const $t5 = $.sub((await $.mv((await $.mv((await $.v(C, "PortfelDataModule")), "DateDataSet")), "RecordCount")), 1);
      L0["i"] = 0;
      let $t6 = true;
      for (;;) {
        if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
        $t6 = false;
        if (!($.ord(L0["i"]) <= $.ord($t5))) break;
        L0["srobl"] = $.add(L0["srobl"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "DateDataSet")), "FieldByName", ["obligation"])), "AsFloat")));
        L0["sdueinrest"] = $.add(L0["sdueinrest"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "DateDataSet")), "FieldByName", ["dueinterestrest"])), "AsFloat")));
        L0["srest"] = $.add(L0["srest"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "DateDataSet")), "FieldByName", ["Rest"])), "AsFloat")));
        L0["sinterest"] = $.add(L0["sinterest"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "DateDataSet")), "FieldByName", ["INTERESTREST"])), "AsFloat")));
        L0["srduerest"] = $.add(L0["srduerest"], (await $.mv((await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "DateDataSet")), "FieldByName", ["DUEREST"])), "AsFloat")));
        await $.mcall((await $.mv((await $.v(C, "PortfelDataModule")), "DateDataSet")), "Next", []);
        await $.tick();
      }
    }
    await L0["rrest"].set(L0["srest"]);
    await L0["rinterest"].set(L0["sinterest"]);
    await L0["rrduerest"].set(L0["srduerest"]);
    await L0["rdueinrest"].set(L0["sdueinrest"]);
    await L0["rrobl"].set(L0["srobl"]);
  }
  return L0.result;
}, {"params": ["Rrest", "Rinterest", "RRduerest", "RDueInRest", "RRobl"], "kind": "procedure", "ptypes": ["real", "real", "real", "real", "real"]});
  U.method("TPortfelForm", "FilterString", async function FilterString(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: ''};
  L0["f_lcomb"] = $.fn(async function F_LCOMB(p0, p1, p2, p3) {
  const L1 = {"cd": $.asRef(p0), "cs": $.copyArg(p1), "checked": $.copyArg(p2), "comb": $.copyArg(p3), result: undefined, "kv": ''};
  await $.fixArgs(L1, ["cs", "checked", "comb"]);
  if ($.truthy(L1["checked"])) {
    L1["kv"] = (await $.call(C, "String", [(await $.mv(L1["comb"], "KeyValue"))]));
    if ($.truthy($.eq((await L1["cd"].get()), ""))) {
      await L1["cd"].set($.add($.add($.add($.add("(", L1["cs"]), "="), L1["kv"]), ")"));
    } else {
      await L1["cd"].set($.add($.add($.add($.add($.add($.add((await L1["cd"].get()), "And"), "("), L1["cs"]), "="), L1["kv"]), ")"));
    }
  }
  return L1.result;
});
  L0["result"] = "";
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t7) => { L0["result"] = $t7; }), "currency", (await $.mv((await $.v(C, "CheckboxValute")), "Checked")), (await $.v(C, "DBLookupComboboxValute"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t8) => { L0["result"] = $t8; }), "RESERVEID", (await $.mv((await $.v(C, "CheckBoxDSPReserves")), "Checked")), (await $.v(C, "DBLookupComboboxEhDSPReserves"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t9) => { L0["result"] = $t9; }), "PERSONALTYPE", (await $.mv((await $.v(C, "CheckboxPersons")), "Checked")), (await $.v(C, "DBLookupComboboxEhPersons"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t10) => { L0["result"] = $t10; }), "PLEDGEID", (await $.mv((await $.v(C, "CheckboxPledges")), "Checked")), (await $.v(C, "DBLookupComboboxEhPledges"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t11) => { L0["result"] = $t11; }), "Branchid", (await $.mv((await $.v(C, "CheckboxFilial")), "Checked")), (await $.v(C, "DBLookupComboboxEhFilial"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t12) => { L0["result"] = $t12; }), "DUERESERVEID", (await $.mv((await $.v(C, "CheckboxDSSReserves")), "Checked")), (await $.v(C, "DBLookupComboboxEhDSSReserves"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t13) => { L0["result"] = $t13; }), "CUSTOMERTYPE", (await $.mv((await $.v(C, "CheckBoxCategorires")), "Checked")), (await $.v(C, "DBLookupComboboxEhCategories"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t14) => { L0["result"] = $t14; }), "USRGROUP", (await $.mv((await $.v(C, "CheckboxUserGroup")), "Checked")), (await $.v(C, "DBLookupComboboxEhUserGroup"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t15) => { L0["result"] = $t15; }), "USID", (await $.mv((await $.v(C, "CheckboxUser")), "Checked")), (await $.v(C, "DBLookupComboboxEhUser"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t16) => { L0["result"] = $t16; }), "CREDITTYPE", (await $.mv((await $.v(C, "CheckboxCreditType")), "Checked")), (await $.v(C, "DBLookupComboboxEhCreditType"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t17) => { L0["result"] = $t17; }), "BOOROWERID", (await $.mv((await $.v(C, "CheckboxCustomers")), "Checked")), (await $.v(C, "DBLookupComboboxEhCustomers"))])));
  await $.stmt((await $.callv(L0["f_lcomb"], [$.ref(async () => L0["result"], async ($t18) => { L0["result"] = $t18; }), "EXPERTID", (await $.mv((await $.v(C, "CheckBoxExpert")), "Checked")), (await $.v(C, "DBLookupComboboxEhExpert"))])));
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
  U.method("TPortfelForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TPortfelForm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TPortfelForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "rrest": 0, "rinrest": 0, "rduerest": 0, "rdueinrest": 0, "robl": 0, "curs": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "PortfelDataModule", (await $.mcall((await $.v(C, "TPortfelDataModule")), "Create", [Self])));
  {
    const $t19 = (await $.wobj(C, "PortfelDataModule"));
    await $.mcall((await $.wv([$t19], "MainDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "CurrencysDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "CategoriesDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "FilialDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "PersonsDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "PledgesdataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "UsersDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "UserGroupsDataSet", C, false)), "open", []);
    await $.mcall((await $.wv([$t19], "CustomersDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "PReservesDataset", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "SReservesDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "CreditTypeDataSet", C, false)), "Open", []);
    await $.mcall((await $.wv([$t19], "Ods_expert", C, false)), "Open", []);
  }
  await $.mset((await $.v(C, "DateTimePicker")), "date", (await $.v(C, "Get_currentdate")));
  await $.stmt((await $.call(C, "Calculation", [$.ref(async () => L0["rrest"], async ($t20) => { L0["rrest"] = $t20; }), $.ref(async () => L0["rinrest"], async ($t21) => { L0["rinrest"] = $t21; }), $.ref(async () => L0["rduerest"], async ($t22) => { L0["rduerest"] = $t22; }), $.ref(async () => L0["rdueinrest"], async ($t23) => { L0["rdueinrest"] = $t23; }), $.ref(async () => L0["robl"], async ($t24) => { L0["robl"] = $t24; })])));
  await $.mset((await $.v(C, "Editrests")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", $.mul(L0["rrest"], L0["curs"])])));
  await $.mset((await $.v(C, "EditInterest")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", $.mul(L0["rinrest"], L0["curs"])])));
  await $.mset((await $.v(C, "EditDueRests")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", $.mul(L0["rduerest"], L0["curs"])])));
  await $.mset((await $.v(C, "EditDueInRest")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", $.mul(L0["rdueinrest"], L0["curs"])])));
  await $.mset((await $.v(C, "EditObligation")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", $.mul(L0["robl"], L0["curs"])])));
  await $.mset((await $.v(C, "DateTimePicker")), "date", (await $.v(C, "Get_currentdate")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPortfelForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t25 = (await $.wobj(C, "PortfelDataModule"));
    await $.mcall((await $.wv([$t25], "MainDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "CurrencysDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "CategoriesDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "FilialDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "PersonsDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "PledgesdataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "UsersDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "UserGroupsDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "CustomersDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "PReservesDataset", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "SReservesDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "CreditTypeDataSet", C, false)), "CloseAll", []);
    await $.mcall((await $.wv([$t25], "Ods_expert", C, false)), "CloseAll", []);
  }
  await $.mcall((await $.v(C, "PortfelDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPortfelForm", "ActionFilterAcceptExecute", async function ActionFilterAcceptExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "rrest": 0, "rinrest": 0, "rduerest": 0, "rdueinrest": 0, "robl": 0, "curs": 0, "adate": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["errormsg"] = "Uyğun sahə seçilməyib";
  try {
    await $.set(C, "Cursor", (await $.v(C, "crSQLWait")));
    L0["adate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DateTimePicker")), "DateTime"))]))]));
    await $.stmt((await $.call(C, "Calculation", [$.ref(async () => L0["rrest"], async ($t26) => { L0["rrest"] = $t26; }), $.ref(async () => L0["rinrest"], async ($t27) => { L0["rinrest"] = $t27; }), $.ref(async () => L0["rduerest"], async ($t28) => { L0["rduerest"] = $t28; }), $.ref(async () => L0["rdueinrest"], async ($t29) => { L0["rdueinrest"] = $t29; }), $.ref(async () => L0["robl"], async ($t30) => { L0["robl"] = $t30; })])));
    await $.mset((await $.v(C, "Editrests")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", L0["rrest"]])));
    await $.mset((await $.v(C, "EditInterest")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", L0["rinrest"]])));
    await $.mset((await $.v(C, "EditDueRests")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", L0["rduerest"]])));
    await $.mset((await $.v(C, "EditDueInRest")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", L0["rdueinrest"]])));
    await $.mset((await $.v(C, "EditObligation")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", L0["robl"]])));
  } finally {
    await $.set(C, "cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPortfelForm", "ActionFilterRejectExecute", async function ActionFilterRejectExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t31 = (await $.mv((await $.v(C, "PortfelDataModule")), "MainDataSet"));
    await $.wset([$t31], "Filter", "", C);
    await $.wset([$t31], "Filtered", (await $.wv([$t31], "False", C, false)), C);
  }
  {
    const $t32 = (await $.mv((await $.v(C, "PortfelDataModule")), "DateDataSet"));
    await $.wset([$t32], "Filter", "", C);
    await $.wset([$t32], "Filtered", (await $.wv([$t32], "False", C, false)), C);
  }
  await $.mset((await $.v(C, "Editrests")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", 0])));
  await $.mset((await $.v(C, "EditInterest")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", 0])));
  await $.mset((await $.v(C, "EditDueRests")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", 0])));
  await $.mset((await $.v(C, "EditDueInRest")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", 0])));
  await $.mset((await $.v(C, "EditObligation")), "Text", (await $.call(C, "FormatFloat", ["#,#0.00", 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TPortfelForm", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
