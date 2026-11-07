// Generated from P_CO_In_Form.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("P_CO_In_Form", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "Grids", "DBGrids", "P_Datamod_Unit", "P_Transaction_Unit", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TP_CO_TransTypeIncOut", "TForm", {"settingsbrowser": {"name": "SettingsBrowser", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbeditassignment": {"name": "DBEditAssignment", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbeditcomissionassignment": {"name": "DBEditComissionAssignment", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "buttonrefresh": {"name": "ButtonRefresh", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "btnadd": {"name": "BtnAdd", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("P_CO_TransTypeIncOut", null, "TP_CO_TransTypeIncOut");
    U.var_("IncOut", 0, "integer");
  });
  U.method("TP_CO_TransTypeIncOut", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TP_CO_TransTypeIncOut", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TP_CO_TransTypeIncOut", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Standart əməliyyatlar";
  await $.inherited(Self, "TP_CO_TransTypeIncOut", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TP_CO_TransTypeIncOut", "BtnAddClick", async function BtnAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "P_Transaction"))]))))) {
    await $.set(C, "P_Transaction", (await $.mcall((await $.v(C, "TP_Transaction")), "Create", [Self])));
  }
  {
    const $t2 = (await $.wobj(C, "P_Transaction"));
    await $.wset([$t2], "TransTypeIncOutDC", (await $.wv([$t2], "IncOut", C, false)), C);
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_TransTypeIncOut", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_TransTypeIncOut", "ButtonRefreshClick", async function ButtonRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "CO_In")), "Active")))) {
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "CO_In")), "Refresh", []);
  }
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "P_Datamodule")), "CO_Out")), "Active")))) {
    await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "CO_Out")), "Refresh", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_TransTypeIncOut", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "IncOut")), 1))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Account")), "FieldByName", ["TYPEID"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "CO_Out")), "Open", []);
      await $.mset((await $.v(C, "SettingsBrowser")), "DataSource", (await $.mv((await $.v(C, "P_Datamodule")), "CO_Out_data")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "CO_In")), "Open", []);
      await $.mset((await $.v(C, "SettingsBrowser")), "DataSource", (await $.mv((await $.v(C, "P_Datamodule")), "CO_In_data")));
    }
  }
  if ($.truthy($.eq((await $.v(C, "IncOut")), 2))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "Account")), "FieldByName", ["TYPEID"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "CO_In")), "Open", []);
      await $.mset((await $.v(C, "SettingsBrowser")), "DataSource", (await $.mv((await $.v(C, "P_Datamodule")), "CO_In_data")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "P_Datamodule")), "CO_Out")), "Open", []);
      await $.mset((await $.v(C, "SettingsBrowser")), "DataSource", (await $.mv((await $.v(C, "P_Datamodule")), "CO_Out_data")));
    }
  }
  await $.mset((await $.v(C, "DBEditAssignment")), "DataSource", (await $.mv((await $.v(C, "SettingsBrowser")), "DataSource")));
  await $.mset((await $.v(C, "DBEditComissionAssignment")), "DataSource", (await $.mv((await $.v(C, "SettingsBrowser")), "DataSource")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_TransTypeIncOut", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TP_CO_TransTypeIncOut", "SettingsBrowserDblClick", async function SettingsBrowserDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BtnAdd")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
