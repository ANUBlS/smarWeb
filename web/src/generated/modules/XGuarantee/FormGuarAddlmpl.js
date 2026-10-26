// Generated from FormGuarAddlmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FormGuarAddlmpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBCtrls", "DBCtrlsEh", "ExtCtrls", "StdCtrls", "DBLookupEh", "Mask", "Buttons", "jpeg", "Db", "OracleData", "Oracle", "HintBox", "DBGridEh", "DataMGuarantee", "sboapiDataModuleImpl", "FormGuarpldginfolmpl", "GuaranteeMgrImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormGuarAdd", "TForm", {"panel8": {"name": "Panel8", "type": "TPanel"}, "image1": {"name": "Image1", "type": "TImage"}, "speedbutton37": {"name": "SpeedButton37", "type": "TSpeedButton"}, "speedbutton38": {"name": "SpeedButton38", "type": "TSpeedButton"}, "speedbutton39": {"name": "SpeedButton39", "type": "TSpeedButton"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "label17": {"name": "Label17", "type": "TLabel"}, "spcompany": {"name": "spcompany", "type": "TSpeedButton"}, "dbedit8": {"name": "DBEdit8", "type": "TDBLookupComboboxEh"}, "panel19": {"name": "Panel19", "type": "TPanel"}, "speedbutton33": {"name": "SpeedButton33", "type": "TSpeedButton"}, "speedbutton34": {"name": "SpeedButton34", "type": "TSpeedButton"}, "label22": {"name": "Label22", "type": "TLabel"}, "dbediteh12": {"name": "DBEditEh12", "type": "TDBEditEh"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "speedbutton35": {"name": "SpeedButton35", "type": "TSpeedButton"}, "speedbutton36": {"name": "SpeedButton36", "type": "TSpeedButton"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbdatetimeediteh4": {"name": "DBDateTimeEditEh4", "type": "TDBDateTimeEditEh"}, "companysrc": {"name": "CompanySrc", "type": "TDataSource"}, "companyset": {"name": "CompanySet", "type": "TOracleDataSet"}, "pgcompany": {"name": "PgCompany", "type": "TOraclePackage"}, "hintbox1": {"name": "HintBox1", "type": "THintBox"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "speedbutton17": {"name": "SpeedButton17", "type": "TSpeedButton"}, "speedbutton18": {"name": "SpeedButton18", "type": "TSpeedButton"}, "label6": {"name": "Label6", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "speedbutton13": {"name": "SpeedButton13", "type": "TSpeedButton"}, "speedbutton14": {"name": "SpeedButton14", "type": "TSpeedButton"}, "label35": {"name": "Label35", "type": "TLabel"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "speedbutton15": {"name": "SpeedButton15", "type": "TSpeedButton"}, "speedbutton16": {"name": "SpeedButton16", "type": "TSpeedButton"}, "label157": {"name": "Label157", "type": "TLabel"}, "label154": {"name": "Label154", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "speedbutton19": {"name": "SpeedButton19", "type": "TSpeedButton"}, "speedbutton20": {"name": "SpeedButton20", "type": "TSpeedButton"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "inuse_rg": {"name": "InUse_rg", "type": "TRadioGroup"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "dbediteh9": {"name": "DBEditEh9", "type": "TDBEditEh"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "label155": {"name": "Label155", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "speedbutton11": {"name": "SpeedButton11", "type": "TSpeedButton"}, "speedbutton12": {"name": "SpeedButton12", "type": "TSpeedButton"}, "label29": {"name": "Label29", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbediteh10": {"name": "DBEditEh10", "type": "TDBEditEh"}, "groupbox11": {"name": "GroupBox11", "type": "TGroupBox"}, "label34": {"name": "Label34", "type": "TLabel"}, "maskedit2": {"name": "MaskEdit2", "type": "TMaskEdit"}, "label42": {"name": "Label42", "type": "TLabel"}, "dbediteh18": {"name": "DBEditEh18", "type": "TDBEditEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton23": {"name": "SpeedButton23", "type": "TSpeedButton"}, "speedbutton24": {"name": "SpeedButton24", "type": "TSpeedButton"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton25": {"name": "SpeedButton25", "type": "TSpeedButton"}, "speedbutton26": {"name": "SpeedButton26", "type": "TSpeedButton"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbediteh6": {"name": "DBEditEh6", "type": "TDBEditEh"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "speedbutton27": {"name": "SpeedButton27", "type": "TSpeedButton"}, "speedbutton28": {"name": "SpeedButton28", "type": "TSpeedButton"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbediteh7": {"name": "DBEditEh7", "type": "TDBEditEh"}, "panel22": {"name": "Panel22", "type": "TPanel"}, "speedbutton29": {"name": "SpeedButton29", "type": "TSpeedButton"}, "speedbutton30": {"name": "SpeedButton30", "type": "TSpeedButton"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "groupbox9": {"name": "GroupBox9", "type": "TGroupBox"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "dbediteh11": {"name": "DBEditEh11", "type": "TDBEditEh"}, "dbediteh14": {"name": "DBEditEh14", "type": "TDBEditEh"}, "dbediteh15": {"name": "DBEditEh15", "type": "TDBEditEh"}, "groupbox10": {"name": "GroupBox10", "type": "TGroupBox"}, "label27": {"name": "Label27", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "dbediteh16": {"name": "DBEditEh16", "type": "TDBEditEh"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "label116": {"name": "Label116", "type": "TLabel"}, "label152": {"name": "Label152", "type": "TLabel"}, "label117": {"name": "Label117", "type": "TLabel"}, "label118": {"name": "Label118", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "dbdatetimeediteh5": {"name": "DBDateTimeEditEh5", "type": "TDBDateTimeEditEh"}, "dblookupcomboboxeh26": {"name": "DBLookupComboboxEh26", "type": "TDBLookupComboboxEh"}, "ednewname": {"name": "edNewName", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormGuarAdd", null, "TFormGuarAdd");
  });
  U.method("TFormGuarAdd", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormGuarAdd", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee"));
    await $.stmt($.wcall([$t1], "Cancel", [], C));
    await $.stmt($.wcall([$t1], "CancelUpdates", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFormGuarAdd", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  {
    const $t2 = (await $.v(C, "DataMGuarante"));
    await $.mcall((await $.wv([$t2], "Gura_taypcal", C, false)), "open", []);
  }
  await $.mcall((await $.v(C, "CompanySet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGuarAdd", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "DataMGuarante"));
    await $.mcall((await $.wv([$t3], "Gura_taypcal", C, false)), "closeall", []);
  }
  await $.mcall((await $.v(C, "CompanySet")), "closeall", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGuarAdd", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormGuarAdd", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DataMGuarante"));
    const $t5 = (await $.wv([$t4], "DataSetGuarantee", C, false));
    await $.stmt($.wcall([$t4, $t5], "open", [], C));
  }
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "edNewName"))]))))) {
    await $.set(C, "edNewName", (await $.mcall((await $.v(C, "TEdit")), "Create", [Self])));
  }
  {
    const $t6 = (await $.v(C, "edNewName"));
    await $.wset([$t6], "Parent", (await $.wv([$t6], "Panel16", C, false)), C);
    await $.wset([$t6], "OnKeyDown", (await $.wv([$t6], "edNewNameClick", C, true)), C);
    await $.wset([$t6], "Visible", (await $.wv([$t6], "False", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGuarAdd", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t7 = L0["sender"];
        { const $t8 = (await $.wv([$t7], "Tag", C, false));
          if ($.eq($t8, 1)) {
            await $.stmt((await $.wcall([$t7], "SelectNext", [(await $.wv([$t7], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t7], "True", C, false)), (await $.wv([$t7], "True", C, false))], C)));
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormGuarAdd", "DBLookupComboboxEh6KeyValueChanged", async function DBLookupComboboxEh6KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t9], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t9], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGuarAdd", "edNewNameClick", async function edNewNameClick(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), "shift": $.copyArg(p2), result: undefined, "procname": '', "i": 0};
  await $.fixArgs(L0, ["sender", "shift"]);
  if ($.truthy((await $.and_(($.ne((await $.call(C, "Trim", [(await $.mv((L0["sender"]), "Text"))])), "")), async () => ($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))))) {
    L0["procname"] = "AddComp";
    await $.stmt((await $.mcall((await $.v(C, "PgCompany")), "CallProcedure", [L0["procname"], [(await $.mv((L0["sender"]), "Text"))]])));
    await $.mcall((await $.v(C, "CompanySet")), "Refresh", []);
    await $.mset(L0["sender"], "Visible", false);
    { const $t10 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t11 = true;
      for (;;) {
        if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
        $t11 = false;
        if (!($.ord(L0["i"]) <= $.ord($t10))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  if ($.truthy(($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN")))))) {
    await $.mset(L0["sender"], "Visible", false);
    { const $t12 = $.sub((await $.v(C, "ComponentCount")), 1);
      L0["i"] = 0;
      let $t13 = true;
      for (;;) {
        if (!$t13) { L0["i"] = $.succ(L0["i"], 1); }
        $t13 = false;
        if (!($.ord(L0["i"]) <= $.ord($t12))) break;
        if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
          await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", true);
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key", "Shift"], "kind": "procedure", "ptypes": ["TObject", "Word", "TShiftState"]});
  U.method("TFormGuarAdd", "SpeedButton40Click", async function SpeedButton40Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "assigned", [(await $.v(C, "FormGuarpldginfo"))]))))) {
    {
      const $t14 = (await $.mcall((await $.v(C, "TFormGuarpldginfo")), "Create", [Self]));
      try {
        await $.stmt($.wcall([$t14], "ShowModal", [], C));
      } finally {
        await $.stmt($.wcall([$t14], "Release", [], C));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGuarAdd", "spcompanyClick", async function spcompanyClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "datasetname": '', "i": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["datasetname"] = (await $.call(C, "Copy", [(await $.mv((L0["sender"]), "Name")), 4, $.sub((await $.call(C, "length", [(await $.mv((L0["sender"]), "Name"))])), 3)]));
  {
    const $t15 = (await $.v(C, "edNewName"));
    await $.wset([$t15], "Text", "", C);
    await $.wset([$t15], "width", 216, C);
    await $.wset([$t15], "Left", 31, C);
    await $.wset([$t15], "top", 4, C);
    await $.wset([$t15], "Visible", (await $.wv([$t15], "True", C, false)), C);
  }
  { const $t16 = $.sub((await $.v(C, "ComponentCount")), 1);
    L0["i"] = 0;
    let $t17 = true;
    for (;;) {
      if (!$t17) { L0["i"] = $.succ(L0["i"], 1); }
      $t17 = false;
      if (!($.ord(L0["i"]) <= $.ord($t16))) break;
      if ($.truthy($.is_((await $.idx((await $.v(C, "Components")), [L0["i"]])), "TSpeedButton"))) {
        await $.mset((await $.idx((await $.v(C, "Components")), [L0["i"]])), "Enabled", false);
      }
      await $.tick();
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGuarAdd", "CheckFields", async function CheckFields(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  L0["rs_checkfields"] = "\"%s\" - sahəsi boşdur!";
  L0["showmsg"] = $.fn(async function ShowMsg(p0) {
  const L1 = {"message": $.copyArg(p0), result: undefined};
  await $.fixArgs(L1, ["message"]);
  await $.stmt((await $.mcall((await $.v(C, "HintBox1")), "ShowMessage", [L1["message"]])));
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
    const $t18 = (await $.v(C, "DataMGuarante"));
  }
  return L1.result;
});
  await $.stmt($.callv(L0["checkfieldbynames"], []));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormGuarAdd", "SaveChg", async function SaveChg(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  if ($.truthy($.ne((await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgeid")), "asinteger")), 1))) {
    await $.stmt($.call(C, "CheckFields", []));
  }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "Guarante")), "CallProcedure", ["Guarantee_Add1", [(await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetid")), "asinteger")), 0, (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgeid")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgename")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetholdername")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetholderaddress")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetanyinfotodisting")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetregistryno")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetregistryagency")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetregistrydate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgeinuse")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgeinsurant")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetinsuranceagency")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetinsuranceamount")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetinsurancedate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgepricetorpaqha")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgepriceevkv")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetinsuranceright")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetinsuranceid")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgeid_p")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetgqname")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetgqpaspnum")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetgqpaspyer")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetgqpaspdate")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetgqadress")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetreyster")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetseryamh")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetgqtel")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgeprice")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgsorts")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetcompany")), "asinteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetcompanydat")), "asdatetime")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetcompanyexpert")), "asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetCARDID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetOUTCOLLATERALACCID")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetDECASTATUS")), "AsInteger")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetGQTELMOB")), "Asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetGQTELHOME")), "Asstring")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetGQTELWORK")), "Asstring")), (await $.mv((await $.v(C, "MaskEdit2")), "Text")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetREZERVEAMMOUNT")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetFAIZ")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetGQCITY")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetGQVILLAGE")), "asfloat")), (await $.mv((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetAFTOBANNO")), "Asstring")), 1]])));
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TFormGuarAdd", "SpeedButton38Click", async function SpeedButton38Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "str_field": '', "cnt": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.mv((await $.v(C, "DataMGuarante")), "MainDSetpledgeinuse")), "asinteger", (await $.mv((await $.mv((await $.v(C, "FormGuarAdd")), "InUse_rg")), "ItemIndex")));
  L0["cnt"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEditEh8")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Girovun adı,");
  }
  L0["cnt"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Çeşidi,");
  }
  L0["cnt"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBNumberEditEh5")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Girovun bazar dəyəri,");
  }
  L0["cnt"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEditEh10")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Girovu fəriqləndirən istənilən məlumat,");
  }
  L0["str_field"] = $.add(L0["str_field"], " Seçilməyib! ");
  if ($.truthy($.eq(L0["cnt"], 0))) {
    await $.mcall((await $.v(C, "DBEdit13")), "SetFocus", []);
    await $.stmt($.call(C, "SaveChg", []));
    await $.mcall((await $.mv((await $.v(C, "DataMGuarante")), "DataSetGuarantee")), "refresh", []);
  } else {
    await $.stmt((await $.mcall((await $.v(C, "HintBox1")), "ShowMessage", [$.add($.add("Verilənlər  ", "\r "), L0["str_field"])])));
    return L0.result;
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormGuarAdd", "SpeedButton39Click", async function SpeedButton39Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
