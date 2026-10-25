// Generated from UntProlongations.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UntProlongations", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ExtCtrls", "Mask", "DBCtrls", "DBCGrids", "Grids", "DBGrids", "ImgList", "ToolWin", "ComCtrls", "StoredProgramsUnit", "SBCMMainDataModule", "UntProlongationDataModule"]);
  const C = [U];
  U.defClass("TFrmProlongation", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupboxaboutcontract": {"name": "GroupBoxAboutContract", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "statictext2": {"name": "StaticText2", "type": "TStaticText"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "statictext4": {"name": "StaticText4", "type": "TStaticText"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "prolongationgrid": {"name": "ProlongationGrid", "type": "TDBGrid"}, "groupbox7": {"name": "GroupBox7", "type": "TGroupBox"}, "statictext7": {"name": "StaticText7", "type": "TStaticText"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "groupbox6": {"name": "GroupBox6", "type": "TGroupBox"}, "statictext6": {"name": "StaticText6", "type": "TStaticText"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "btnclose": {"name": "BtnClose", "type": "TButton"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "maintoolbar": {"name": "MainToolBar", "type": "TToolBar"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "tbaddprolongation": {"name": "TBAddProlongation", "type": "TToolButton"}, "tbdellastprolongation": {"name": "TBDelLastProlongation", "type": "TToolButton"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "dtpnewdate": {"name": "DTPNewDate", "type": "TDateTimePicker"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dtpprolongationdate": {"name": "DTPProlongationDate", "type": "TDateTimePicker"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "fcontractid": {"name": "FContractID", "type": "LongInt"}}, {});
  U.init(async () => {
    U.var_("FrmProlongation", null, "TFrmProlongation");
  });
  U.method("TFrmProlongation", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.mv((await $.v(C, "DataModuleProlongation")), "Prolongations"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "Close", [], C));
    }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["ContractID", (await $.wv([$t1], "FContractID", C, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  await $.mset((await $.v(C, "DTPNewDate")), "DateTime", (await $.v(C, "GetBankDate")));
  await $.mset((await $.v(C, "DTPProlongationDate")), "DateTime", (await $.v(C, "GetBankDate")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProlongation", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "DataModuleProlongation", (await $.mcall((await $.v(C, "TDataModuleProlongation")), "Create", [Self])));
  await $.set(C, "Caption", $.add("Prolongation for contract № ", (await $.mv((await $.mcall((await $.mv((await $.v(C, "MainDataModule")), "Contracts")), "FieldByName", ["ContractNo"])), "AsString"))));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProlongation", "TBAddProlongationClick", async function TBAddProlongationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "prolongationdate": 0, "delayeddate": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    L0["prolongationdate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPProlongationDate")), "DateTime"))]));
    L0["delayeddate"] = (await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPNewDate")), "DateTime"))]));
    {
      const $t2 = (await $.mv((await $.v(C, "DataModuleProlongation")), "ProlongationPackage"));
      await $.stmt((await $.wcall([$t2], "CallProcedure", ["AddProlongation", [(await $.wv([$t2], "FContractID", C, false)), (await $.wv([$t2], "ProlongationDate", { get: async () => L0["prolongationdate"], set: async (v) => { L0["prolongationdate"] = v; }, local: true }, false)), (await $.wv([$t2], "DelayedDate", { get: async () => L0["delayeddate"], set: async (v) => { L0["delayeddate"] = v; }, local: true }, false))]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModuleProlongation")), "Prolongations")), "Refresh", []);
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProlongation", "TBDelLastProlongationClick", async function TBDelLastProlongationClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.call(C, "MessageDlg", [$.add($.add("Are You Sure You Want ", "\r"), "Delete Last Prolongation"), (await $.v(C, "mtConfirmation")), (await $.v(C, "MBYESNOCANCEL")), 0])), (await $.v(C, "mrYes"))))) {
    $.abort();
  }
  await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crSQLWait")));
  try {
    {
      const $t3 = (await $.mv((await $.v(C, "DataModuleProlongation")), "ProlongationPackage"));
      await $.stmt((await $.wcall([$t3], "CallProcedure", ["DelLastProlongation", [(await $.wv([$t3], "FContractID", C, false))]], C)));
    }
    await $.mcall((await $.mv((await $.v(C, "DataModuleProlongation")), "Prolongations")), "Refresh", []);
  } finally {
    await $.mset((await $.v(C, "Screen")), "Cursor", (await $.v(C, "crDefault")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmProlongation", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\u001b"))) {
    await $.mcall((await $.v(C, "BtnClose")), "Click", []);
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  return U;
}
