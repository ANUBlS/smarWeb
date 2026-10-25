// Generated from CO_In_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CO_In_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGrids", "StdCtrls", "SearchEdit", "Mask", "DBCtrls", "ExtCtrls", "CO_datamod_impl", "co_commission_unit", "CO_Transact_Unitp", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCO_TransTypeIncOut", "TForm", {"settingsbrowser": {"name": "SettingsBrowser", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbeditassignment": {"name": "DBEditAssignment", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbeditcomissionassignment": {"name": "DBEditComissionAssignment", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "buttonrefresh": {"name": "ButtonRefresh", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "btnadd": {"name": "BtnAdd", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("CO_TransTypeIncOut", null, "TCO_TransTypeIncOut");
    U.var_("IncOut", 0, "integer");
  });
  U.method("TCO_TransTypeIncOut", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TCO_TransTypeIncOut", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TCO_TransTypeIncOut", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Standart əməliyyatlar";
  await $.inherited(Self, "TCO_TransTypeIncOut", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TCO_TransTypeIncOut", "BtnAddClick", async function BtnAddClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "CO_Transactions"))]))))) {
    await $.set(C, "CO_Transactions", (await $.mcall((await $.v(C, "TCO_Transactions")), "Create", [Self])));
  }
  {
    const $t2 = (await $.v(C, "CO_Transactions"));
    await $.wset([$t2], "TransTypeIncOutDC", (await $.wv([$t2], "IncOut", C, false)), C);
    await $.stmt($.wcall([$t2], "ShowModal", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_TransTypeIncOut", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_TransTypeIncOut", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "IncOut")), 1))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["TYPEID"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "Open", []);
      await $.mset((await $.v(C, "SettingsBrowser")), "DataSource", (await $.mv((await $.v(C, "CO_DataMod")), "CO_Out_data")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "Open", []);
      await $.mset((await $.v(C, "SettingsBrowser")), "DataSource", (await $.mv((await $.v(C, "CO_DataMod")), "CO_In_data")));
    }
  }
  if ($.truthy($.eq((await $.v(C, "IncOut")), 2))) {
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "Account")), "FieldByName", ["TYPEID"])), "AsInteger")), 1))) {
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "Open", []);
      await $.mset((await $.v(C, "SettingsBrowser")), "DataSource", (await $.mv((await $.v(C, "CO_DataMod")), "CO_In_data")));
    } else {
      await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "Open", []);
      await $.mset((await $.v(C, "SettingsBrowser")), "DataSource", (await $.mv((await $.v(C, "CO_DataMod")), "CO_Out_data")));
    }
  }
  await $.mset((await $.v(C, "DBEditAssignment")), "DataSource", (await $.mv((await $.v(C, "SettingsBrowser")), "DataSource")));
  await $.mset((await $.v(C, "DBEditComissionAssignment")), "DataSource", (await $.mv((await $.v(C, "SettingsBrowser")), "DataSource")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_TransTypeIncOut", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_TransTypeIncOut", "ButtonRefreshClick", async function ButtonRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_In")), "Refresh", []);
  await $.mcall((await $.mv((await $.v(C, "CO_DataMod")), "CO_Out")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCO_TransTypeIncOut", "SettingsBrowserDblClick", async function SettingsBrowserDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "BtnAdd")), "Click", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
