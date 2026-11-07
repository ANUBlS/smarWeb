// Generated from AdvencedInfoMainFormImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("AdvencedInfoMainFormImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "NLSDialogs", "NLSLocalizer", "ComCtrls", "ExtCtrls", "StdCtrls", "DBCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "ActnList", "DB", "ImgList", "AdvancedInfoDataModuleImpl", "CommonDecls", "SystemState", "CMOracleAPIDataModuleImpl"]);
  const C = [U];
  U.defClass("TAdvInfoForm", "TForm", {"nlslocalizer1": {"name": "NLSLocalizer1", "type": "TNLSLocalizer"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "pagecontrol1": {"name": "PageControl1", "type": "TPageControl"}, "tabsheet1": {"name": "TabSheet1", "type": "TTabSheet"}, "tabsheet2": {"name": "TabSheet2", "type": "TTabSheet"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dbtext2": {"name": "DBText2", "type": "TDBText"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "bancruptey_rg": {"name": "Bancruptey_rg", "type": "TRadioGroup"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbediteh1": {"name": "DBEditEh1", "type": "TDBEditEh"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "label5": {"name": "Label5", "type": "TLabel"}, "panel7": {"name": "Panel7", "type": "TPanel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "label10": {"name": "Label10", "type": "TLabel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel8": {"name": "Panel8", "type": "TPanel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "panel9": {"name": "Panel9", "type": "TPanel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "panel10": {"name": "Panel10", "type": "TPanel"}, "label15": {"name": "Label15", "type": "TLabel"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "label16": {"name": "Label16", "type": "TLabel"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "panel11": {"name": "Panel11", "type": "TPanel"}, "label17": {"name": "Label17", "type": "TLabel"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "inuse_rg": {"name": "InUse_rg", "type": "TRadioGroup"}, "panel12": {"name": "Panel12", "type": "TPanel"}, "label19": {"name": "Label19", "type": "TLabel"}, "dbmemo1": {"name": "DBMemo1", "type": "TDBMemo"}, "panel13": {"name": "Panel13", "type": "TPanel"}, "label20": {"name": "Label20", "type": "TLabel"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "label18": {"name": "Label18", "type": "TLabel"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "panel14": {"name": "Panel14", "type": "TPanel"}, "label21": {"name": "Label21", "type": "TLabel"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "savechanges": {"name": "SaveChanges", "type": "TAction"}, "dismischanges": {"name": "DismisChanges", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "tabsheet3": {"name": "TabSheet3", "type": "TTabSheet"}, "panel15": {"name": "Panel15", "type": "TPanel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "panel16": {"name": "Panel16", "type": "TPanel"}, "label24": {"name": "Label24", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "label25": {"name": "Label25", "type": "TLabel"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "fblncircular": {"name": "FBlnCircular", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("AdvInfoForm", null, "TAdvInfoForm");
  });
  U.method("TAdvInfoForm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "AdvInfoDataModule", (await $.mcall((await $.v(C, "TAdvInfoDataModule")), "Create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoForm", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "AdvInfoDataModule")), "Free", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoForm", "DoEditAdvencedInfo", async function DoEditAdvencedInfo(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined, "crdid": 0, "crdnumber": ''};
  L0["sformcaption"] = "%s nomrəli müqavilə haqqında əlavə informasiya.";
  L0["crdid"] = (await $.v(C, "Get_SelectedCrdID"));
  L0["crdnumber"] = (await $.v(C, "Get_SelectedCrdNo"));
  await $.mset((await $.v(C, "NLSLocalizer1")), "Caption", (await $.call(C, "Format", [L0["sformcaption"], [L0["crdnumber"]]])));
  {
    const $t1 = (await $.mv((await $.v(C, "AdvInfoDataModule")), "AddInfo"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "CloseAll", [], C));
    }
    await $.stmt($.wcall([$t1], "ClearVariables", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["CreditID", (await $.wv([$t1], "CrdID", { get: async () => L0["crdid"], set: async (v) => { L0["crdid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
    await $.stmt($.wcall([$t1], "Edit", [], C));
    await $.wset([$t1], "FBlnCircular", (await $.wv([$t1], "True", C, false)), C);
    await $.mset((await $.wv([$t1], "Bancruptey_rg", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t1], "FieldByName", ["BANKRUPTEYSTATUS"], C)), "AsInteger")));
    await $.mset((await $.wv([$t1], "InUse_rg", C, false)), "ItemIndex", (await $.mv((await $.wcall([$t1], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger")));
    await $.wset([$t1], "FBlnCircular", (await $.wv([$t1], "False", C, false)), C);
    await $.stmt($.wcall([$t1], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAdvInfoForm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "PageControl1")), "ActivePageIndex", 0);
  await $.mcall((await $.v(C, "DBLookupComboboxEh1")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoForm", "Bancruptey_rgClick", async function Bancruptey_rgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.v(C, "FBlnCircular"))))) {
    {
      const $t2 = (await $.mv((await $.v(C, "AdvInfoDataModule")), "AddInfo"));
      await $.mset((await $.wcall([$t2], "FieldByName", ["BANKRUPTEYSTATUS"], C)), "AsInteger", (await $.mv((await $.wv([$t2], "Bancruptey_rg", C, false)), "ItemIndex")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoForm", "InUse_rgClick", async function InUse_rgClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.v(C, "FBlnCircular"))))) {
    {
      const $t3 = (await $.mv((await $.v(C, "AdvInfoDataModule")), "AddInfo"));
      await $.mset((await $.wcall([$t3], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger", (await $.mv((await $.wv([$t3], "InUse_rg", C, false)), "ItemIndex")));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoForm", "DismisChangesExecute", async function DismisChangesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.mv((await $.v(C, "AdvInfoDataModule")), "AddInfo"));
    if ($.truthy($.in_((await $.wv([$t4], "dsEdit", C, false)), [(await $.wv([$t4], "State", C, false))]))) {
      await $.stmt($.wcall([$t4], "Cancel", [], C));
      await $.mcall(Self, "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoForm", "SaveChangesExecute", async function SaveChangesExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "SaveState", []));
  {
    const $t5 = (await $.mv((await $.v(C, "AdvInfoDataModule")), "AddInfo"));
    if ($.truthy($.in_((await $.wv([$t5], "dsEdit", C, false)), [(await $.wv([$t5], "State", C, false))]))) {
      await $.stmt($.wcall([$t5], "Post", [], C));
      await $.mcall(Self, "Close", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoForm", "SaveChangesUpdate", async function SaveChangesUpdate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset(L0["sender"], "Enabled", (await $.mv((await $.mv((await $.v(C, "AdvInfoDataModule")), "AddInfo")), "Modified")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TAdvInfoForm", "SaveState", async function SaveState(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t6 = (await $.wobj(C, "AdvInfoDataModule"));
    const $t7 = (await $.wv([$t6], "AddInfo", C, false));
    const $t8 = (await $.wv([$t6, $t7], "AdvInfo", C, false));
    await $.wset([$t6, $t7, $t8], "ID", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["ID"], C)), "AsInteger")), C);
    await $.wset([$t6, $t7, $t8], "BOOROWERID", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["BOOROWERID"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "NAME", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["NAME"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "COUNTRYCODE", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["COUNTRYCODE"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "BANKRUPTEYSTATUS", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["BANKRUPTEYSTATUS"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "PHONENUMBER", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["PHONENUMBER"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "ADDRESS", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["ADDRESS"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "FIRSTOWNERID", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["FIRSTOWNERID"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "FIRSTOWNERNAME", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["FIRSTOWNERNAME"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "SECONDOWNERID", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["SECONDOWNERID"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "SECONDOWNERNAME", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["SECONDOWNERNAME"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "THIRDOWNERID", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["THIRDOWNERID"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "THIRDOWNERNAME", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["THIRDOWNERNAME"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "PLEDGENAME", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["PLEDGENAME"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "HOLDERNAME", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["HOLDERNAME"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "HOLDERADDRESS", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["HOLDERADDRESS"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "ANYINFOTODISTING", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["ANYINFOTODISTING"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "REGISTRYNO", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["REGISTRYNO"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "REGISTRYAGENCY", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["REGISTRYAGENCY"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "REGISTRYDATE", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["REGISTRYDATE"], C)), "AsDateTime")), C);
    await $.wset([$t6, $t7, $t8], "PLEDGEINUSE", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["PLEDGEINUSE"], C)), "AsInteger")), C);
    await $.wset([$t6, $t7, $t8], "PLEDGEINSURANT", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["PLEDGEINSURANT"], C)), "AsInteger")), C);
    await $.wset([$t6, $t7, $t8], "INSURANCEAGENCY", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["INSURANCEAGENCY"], C)), "AsString")), C);
    await $.wset([$t6, $t7, $t8], "INSURANCEAMOUNT", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["INSURANCEAMOUNT"], C)), "AsInteger")), C);
    await $.wset([$t6, $t7, $t8], "INSURANCEDATE", (await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["INSURANCEDATE"], C)), "AsDateTime")), C);
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TAdvInfoForm", "FormCloseQuery", async function FormCloseQuery(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "canclose": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["canclose"].set((await $.or_(($.not((await $.mv((await $.mv((await $.v(C, "AdvInfoDataModule")), "AddInfo")), "Modified")))), async () => ($.eq((await $.call(C, "MessageDlg", [$.add($.add("Dəyişiklər qeyd olunmayacaq !", "\r"), "Əminsiniz?"), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes")))))));
  return L0.result;
}, {"params": ["Sender", "CanClose"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TAdvInfoForm", "DBLookupComboboxEh1KeyPress", async function DBLookupComboboxEh1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_RETURN"))))) {
    if ($.truthy($.is_(L0["sender"], "TWinControl"))) {
      {
        const $t9 = L0["sender"];
        { const $t10 = (await $.wv([$t9], "Tag", C, false));
          if ($.eq($t10, 1)) {
            await $.stmt((await $.wcall([$t9], "SelectNext", [(await $.wv([$t9], "Sender", { get: async () => L0["sender"], set: async (v) => { L0["sender"] = v; }, local: true }, false)), (await $.wv([$t9], "True", C, false)), (await $.wv([$t9], "True", C, false))], C)));
          }
          else if ($.eq($t10, 2)) {
            {
              const $t11 = (await $.wv([$t9], "PageControl1", C, false));
              if ($.truthy($.eq((await $.wv([$t9, $t11], "ActivePageIndex", C, false)), 0))) {
                await $.wset([$t9, $t11], "ActivePageIndex", 1, C);
                await $.mcall((await $.wv([$t9, $t11], "DBEdit8", C, false)), "SetFocus", []);
              }
            }
          }
        }
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TAdvInfoForm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"param": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["param"]);
  await $.mcall((await $.v(C, "AdvInfoForm")), "DoEditAdvencedInfo", []);
  return L0.result;
}, {"params": ["Param"], "kind": "procedure", "ptypes": ["String"]});
  U.func("GetIcon", async function GetIcon(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"param": $.copyArg(p0), "icon": $.copyArg(p1), result: undefined};
  await $.fixArgs(L0, ["param", "icon"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "AdvInfoForm")), "ImageList1")), "GetIcon", [0, L0["icon"]])));
  return L0.result;
}, {"params": ["Param", "Icon"], "kind": "procedure", "ptypes": ["PChar", "TIcon"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "AdvInfoForm", (await $.mcall((await $.v(C, "TAdvInfoForm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
