// Generated from guaranteeImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("guaranteeImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "nlsDialogs", "Db", "OracleData", "Buttons", "Grids", "DBGrids", "Oracle", "ExtCtrls", "DBLookupEh", "StdCtrls", "Mask", "DBCtrlsEh", "DBCtrls", "CommonDecls", "GirovImpl", "GrovDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmGuarantee", "TForm", {"panel2": {"name": "Panel2", "type": "TPanel"}, "image1": {"name": "Image1", "type": "TImage"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "label16": {"name": "Label16", "type": "TLabel"}, "dbediteh13": {"name": "DBEditEh13", "type": "TDBEditEh"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "speedbutton4": {"name": "SpeedButton4", "type": "TSpeedButton"}, "label155": {"name": "Label155", "type": "TLabel"}, "dbediteh8": {"name": "DBEditEh8", "type": "TDBEditEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label154": {"name": "Label154", "type": "TLabel"}, "cbpledgsorts": {"name": "CBPledgsorts", "type": "TDBLookupComboboxEh"}, "label28": {"name": "Label28", "type": "TLabel"}, "dbnumberediteh5": {"name": "DBNumberEditEh5", "type": "TDBNumberEditEh"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbediteh9": {"name": "DBEditEh9", "type": "TDBEditEh"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbediteh10": {"name": "DBEditEh10", "type": "TDBEditEh"}, "label21": {"name": "Label21", "type": "TLabel"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "label5": {"name": "Label5", "type": "TLabel"}, "dbediteh2": {"name": "DBEditEh2", "type": "TDBEditEh"}, "label4": {"name": "Label4", "type": "TLabel"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "label6": {"name": "Label6", "type": "TLabel"}, "dbediteh3": {"name": "DBEditEh3", "type": "TDBEditEh"}, "label7": {"name": "Label7", "type": "TLabel"}, "dbediteh4": {"name": "DBEditEh4", "type": "TDBEditEh"}, "label19": {"name": "Label19", "type": "TLabel"}, "dblookupcomboboxeh3": {"name": "DBLookupComboboxEh3", "type": "TDBLookupComboboxEh"}, "label116": {"name": "Label116", "type": "TLabel"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "label152": {"name": "Label152", "type": "TLabel"}, "dbedit32": {"name": "DBEdit32", "type": "TDBEdit"}, "label117": {"name": "Label117", "type": "TLabel"}, "dbdatetimeediteh4": {"name": "DBDateTimeEditEh4", "type": "TDBDateTimeEditEh"}, "label118": {"name": "Label118", "type": "TLabel"}, "dblookupcomboboxeh26": {"name": "DBLookupComboboxEh26", "type": "TDBLookupComboboxEh"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "speedbutton5": {"name": "SpeedButton5", "type": "TSpeedButton"}, "speedbutton6": {"name": "SpeedButton6", "type": "TSpeedButton"}}, {});
  U.init(async () => {
    U.var_("FrmGuarantee", null, "TFrmGuarantee");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmGuarantee")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmGuarantee", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FrmGirov", (await $.mcall((await $.v(C, "TFrmGirov")), "create", [Self])));
  {
    const $t1 = (await $.wobj(C, "GrovDataMod"));
    const $t2 = (await $.wv([$t1], "FrmGirov", C, false));
    if ($.truthy($.gt((await $.mv((await $.wv([$t1, $t2], "PropDataSet", C, false)), "RecordCount")), 0))) {
      await $.mcall((await $.wv([$t1, $t2], "AddOtherPAPERNO", C, false)), "RefreshList", []);
      await $.stmt($.wcall([$t1, $t2], "showmodal", [], C));
      await $.mcall((await $.wv([$t1, $t2], "PropDataSet", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarantee", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "GrovDataMod")), "GirovDataSet")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "GrovDataMod")), "GirovDataSet")), "SetVariable", ["creditid", (await $.v(C, "Get_SelectedCrdID"))])));
  await $.mcall((await $.mv((await $.v(C, "GrovDataMod")), "GirovDataSet")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarantee", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "GrovDataMod", (await $.mcall((await $.v(C, "TGrovDataMod")), "create", [Self])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarantee", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFrmGuarantee", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarantee", "SpeedButton5Click", async function SpeedButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmGuarantee", "SpeedButton6Click", async function SpeedButton6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  L0["sconfirmdelete"] = "Ləğv edim?";
  if ($.truthy($.eq((await $.call(C, "MessageDlg", [L0["sconfirmdelete"], (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "GrovDataMod")), "CRackage")), "CallProcedure", ["del_girv", ["p_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "GrovDataMod")), "GirovDataSet")), "fieldbyname", ["id"])), "asinteger"))]])));
    await $.mcall((await $.mv((await $.v(C, "GrovDataMod")), "GirovDataSet")), "refresh", []);
  }
  await $.mcall((await $.mv((await $.v(C, "GrovDataMod")), "PropDataSet")), "refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmGuarantee", (await $.mcall((await $.v(C, "TFrmGuarantee")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
