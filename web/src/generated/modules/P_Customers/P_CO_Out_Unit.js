// Generated from P_CO_Out_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_CO_Out_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "Grids", "DBGrids", "P_OutForm_Unit", "P_Datamod_Unit"]);
  const C = [U];
  U.defClass("TP_Co_Out", "TForm", {"settingsbrowser": {"name": "SettingsBrowser", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "buttonrefresh": {"name": "ButtonRefresh", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("P_Co_Out", null, "TP_Co_Out");
  });
  U.method("TP_Co_Out", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "P_OutForm", (await $.mcall((await $.v(C, "TP_OutForm")), "Create", [Self])));
    await $.mcall((await $.v(C, "P_OutForm")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "P_OutForm")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Co_Out", "ButtonRefreshClick", async function ButtonRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "CO_Out")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Co_Out", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Co_Out", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "P_DataModule")), "CO_Out")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_Co_Out", "SettingsBrowserDblClick", async function SettingsBrowserDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "P_OutForm", (await $.mcall((await $.v(C, "TP_OutForm")), "Create", [Self])));
    await $.mcall((await $.v(C, "P_OutForm")), "Showmodal", []);
  } finally {
    await $.mcall((await $.v(C, "P_OutForm")), "Release", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
