// Generated from FrmPropAddImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("FrmPropAddImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "db", "variants", "StdCtrls", "Mask", "DBCtrlsEh", "ExtCtrls", "Buttons", "DBCtrls", "CMDBSearchEdit", "DBLookupEh", "ComCtrls", "HintBox", "CMHintBox", "jpeg", "DBGridEh", "OracleData", "DMprop", "CommonPropImpl", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmPropAdd", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label18": {"name": "Label18", "type": "TLabel"}, "image1": {"name": "Image1", "type": "TImage"}, "speedbutton38": {"name": "SpeedButton38", "type": "TSpeedButton"}, "speedbutton39": {"name": "SpeedButton39", "type": "TSpeedButton"}, "contracthint": {"name": "ContractHint", "type": "THintBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "label16": {"name": "Label16", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbediteh13": {"name": "DBEditEh13", "type": "TDBEditEh"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}, "label29": {"name": "Label29", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "label155": {"name": "Label155", "type": "TLabel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "panel18": {"name": "Panel18", "type": "TPanel"}, "speedbutton29": {"name": "SpeedButton29", "type": "TSpeedButton"}, "speedbutton30": {"name": "SpeedButton30", "type": "TSpeedButton"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel21": {"name": "Panel21", "type": "TPanel"}, "speedbutton31": {"name": "SpeedButton31", "type": "TSpeedButton"}, "speedbutton32": {"name": "SpeedButton32", "type": "TSpeedButton"}, "label21": {"name": "Label21", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "speedbutton7": {"name": "SpeedButton7", "type": "TSpeedButton"}, "speedbutton8": {"name": "SpeedButton8", "type": "TSpeedButton"}, "label3": {"name": "Label3", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "speedbutton9": {"name": "SpeedButton9", "type": "TSpeedButton"}, "speedbutton10": {"name": "SpeedButton10", "type": "TSpeedButton"}, "label7": {"name": "Label7", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "speedbutton11": {"name": "SpeedButton11", "type": "TSpeedButton"}, "speedbutton12": {"name": "SpeedButton12", "type": "TSpeedButton"}, "label11": {"name": "Label11", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "dbnumberediteh1": {"name": "DBNumberEditEh1", "type": "TDBNumberEditEh"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "speedbutton19": {"name": "SpeedButton19", "type": "TSpeedButton"}, "speedbutton20": {"name": "SpeedButton20", "type": "TSpeedButton"}, "label8": {"name": "Label8", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbnumberediteh2": {"name": "DBNumberEditEh2", "type": "TDBNumberEditEh"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "speedbutton21": {"name": "SpeedButton21", "type": "TSpeedButton"}, "speedbutton22": {"name": "SpeedButton22", "type": "TSpeedButton"}, "label10": {"name": "Label10", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "dbnumberediteh3": {"name": "DBNumberEditEh3", "type": "TDBNumberEditEh"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "speedbutton23": {"name": "SpeedButton23", "type": "TSpeedButton"}, "speedbutton24": {"name": "SpeedButton24", "type": "TSpeedButton"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dbnumberediteh4": {"name": "DBNumberEditEh4", "type": "TDBNumberEditEh"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "speedbutton13": {"name": "SpeedButton13", "type": "TSpeedButton"}, "speedbutton14": {"name": "SpeedButton14", "type": "TSpeedButton"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "speedbutton15": {"name": "SpeedButton15", "type": "TSpeedButton"}, "speedbutton16": {"name": "SpeedButton16", "type": "TSpeedButton"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "dblookupcomboboxeh4": {"name": "DBLookupComboboxEh4", "type": "TDBLookupComboboxEh"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "speedbutton17": {"name": "SpeedButton17", "type": "TSpeedButton"}, "speedbutton18": {"name": "SpeedButton18", "type": "TSpeedButton"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbediteh5": {"name": "DBEditEh5", "type": "TDBEditEh"}, "dbdatetimeediteh4": {"name": "DBDateTimeEditEh4", "type": "TDBDateTimeEditEh"}, "groupbox5": {"name": "GroupBox5", "type": "TGroupBox"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "cmsearcheditloacaccs": {"name": "CMSearchEditLoacAccs", "type": "TCMSearchEdit"}, "dblookupcomboboxeh6": {"name": "DBLookupComboboxEh6", "type": "TDBLookupComboboxEh"}, "label37": {"name": "Label37", "type": "TLabel"}, "label38": {"name": "Label38", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "cmsearchedit1": {"name": "CMSearchEdit1", "type": "TCMSearchEdit"}, "label22": {"name": "Label22", "type": "TLabel"}, "dblookupcomboboxeh5": {"name": "DBLookupComboboxEh5", "type": "TDBLookupComboboxEh"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "speedbutton25": {"name": "SpeedButton25", "type": "TSpeedButton"}, "speedbutton26": {"name": "SpeedButton26", "type": "TSpeedButton"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "dbnumberediteh6": {"name": "DBNumberEditEh6", "type": "TDBNumberEditEh"}}, {});
  U.init(async () => {
    U.var_("FrmPropAdd", null, "TFrmPropAdd");
  });
  U.method("TFrmPropAdd", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFrmPropAdd", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmPropAdd", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "DBLookupComboboxEh10KeyPress", async function DBLookupComboboxEh10KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t1 = L0["sender"];
        { const $t2 = (await $.wv([$t1], "Tag", C, false));
          if ($.eq($t2, 1) || $.eq($t2, 3)) {
            await $.stmt((await $.wcall([$t1], "SelectNext", [(await $.wv([$t1], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t1], "True", C, false)), (await $.wv([$t1], "True", C, false))], C)));
          }
        }
        await $.wset([$t1], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmPropAdd", "DBLookupComboboxEh10KeyValueChanged", async function DBLookupComboboxEh10KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t3], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t3], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "CMSearchEdit2KeyPress", async function CMSearchEdit2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t4 = L0["sender"];
        { const $t5 = (await $.wv([$t4], "Tag", C, false));
          if ($.eq($t5, 1) || $.eq($t5, 3)) {
            await $.stmt((await $.wcall([$t4], "SelectNext", [(await $.wv([$t4], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t4], "True", C, false)), (await $.wv([$t4], "True", C, false))], C)));
          }
        }
        await $.wset([$t4], "Key", "\u0000", { get: async () => await L0["key"].get(), set: async (v) => { await L0["key"].set(v); }, local: true });
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmPropAdd", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.mv((await $.v(C, "DMproperties")), "DataSetPropIns"));
    await $.stmt($.wcall([$t6], "Cancel", [], C));
    await $.stmt($.wcall([$t6], "CancelUpdates", [], C));
  }
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmPropAdd", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "DMproperties"));
    const $t8 = (await $.wv([$t7], "DataSetPropIns", C, false));
    await $.stmt($.wcall([$t7, $t8], "open", [], C));
    await $.mcall((await $.wv([$t7, $t8], "OracleDataSet1", C, false)), "open", []);
    await $.mset((await $.wcall([$t7, $t8], "FieldbyName", ["bdate"], C)), "asDateTime", (await $.mv((await $.mcall((await $.wv([$t7, $t8], "OracleDataSet1", C, false)), "FieldbyName", ["TEK_DAT"])), "asDateTime")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "DMproperties"));
    await $.mcall((await $.wv([$t9], "dataset_taypcal", C, false)), "close", []);
    await $.mcall((await $.wv([$t9], "ClientAccs", C, false)), "close", []);
    await $.mcall((await $.wv([$t9], "CreditAccs", C, false)), "close", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "SpeedButton38Click", async function SpeedButton38Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "str_field": '', "cnt": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["cnt"] = 0;
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEditEh13")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "№,");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBEditEh8")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Adı,");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBNumberEditEh5")), "text")), ""))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Əmlakı balans dəyəri,,");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "keyvalue")), (await $.v(C, "null"))))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Rayon,");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh2")), "keyvalue")), (await $.v(C, "null"))))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Filial,");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh3")), "keyvalue")), (await $.v(C, "null"))))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Şəhər/rayon,");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh1")), "keyvalue")), (await $.v(C, "null"))))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Qəsəbə/kənt,");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh4")), "keyvalue")), (await $.v(C, "null"))))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Ehtiyyat dərəcəsi ,");
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh6")), "keyvalue")), (await $.v(C, "null"))))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Əmlak hesabı ,");
  }
  L0["str_field"] = $.add(L0["str_field"], " Seçilməyib! ");
  if ($.truthy($.eq((await $.mv((await $.v(C, "DBLookupComboboxEh5")), "keyvalue")), (await $.v(C, "null"))))) {
    L0["cnt"] = $.add(L0["cnt"], 1);
    L0["str_field"] = $.add(L0["str_field"], "Ehtiyyat hesabı ,");
  }
  L0["str_field"] = $.add(L0["str_field"], " Seçilməyib! ");
  if ($.truthy($.eq(L0["cnt"], 0))) {
    {
      const $t10 = (await $.v(C, "DMproperties"));
      const $t11 = (await $.wv([$t10], "DataSetPropIns", C, false));
      await $.stmt($.wcall([$t10, $t11], "post", [], C));
      await $.stmt($.wcall([$t10, $t11], "close", [], C));
      await $.stmt($.wcall([$t10, $t11], "open", [], C));
    }
    await $.stmt($.call(C, "close", []));
  } else {
    await $.stmt((await $.mcall((await $.v(C, "ContractHint")), "ShowMessage", [$.add($.add("Verilənlər  ", "\r "), L0["str_field"])])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "SpeedButton39Click", async function SpeedButton39Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "CMSearchEditLoacAccsExit", async function CMSearchEditLoacAccsExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t12 = L0["sender"];
    await $.wset([$t12], "Color", (await $.wv([$t12], "ColorSave", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "CMSearchEdit1Exit", async function CMSearchEdit1Exit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = L0["sender"];
    await $.wset([$t13], "Color", (await $.wv([$t13], "ColorSave", C, false)), C);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "DBLookupComboboxEh6KeyValueChanged", async function DBLookupComboboxEh6KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t14 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t14], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t14], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmPropAdd", "DBLookupComboboxEh5KeyValueChanged", async function DBLookupComboboxEh5KeyValueChanged(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (L0["sender"]);
    if ($.truthy((await $.mv((await $.mv((await $.wv([$t15], "DataSource", C, false)), "DataSet")), "Active")))) {
      await $.stmt($.wcall([$t15], "UpdateData", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
