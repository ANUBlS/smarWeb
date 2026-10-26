// Generated from CC_AccOutForm_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("CC_AccOutForm_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "Grids", "DBGrids", "Db", "OracleData", "NLSLocalizer", "UnitData", "CC_ACCInUnit", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCC_AccInForm", "TForm", {"settingsbrowser": {"name": "SettingsBrowser", "type": "TDBGrid"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "buttonrefresh": {"name": "ButtonRefresh", "type": "TButton"}, "buttonclose": {"name": "ButtonClose", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "co_in_data": {"name": "CO_In_data", "type": "TDataSource"}, "cc_inform": {"name": "CC_InForm", "type": "TOracleDataSet"}, "cc_informid": {"name": "CC_InFormID", "type": "TFloatField"}, "cc_informname": {"name": "CC_InFormNAME", "type": "TStringField"}, "cc_informdebt": {"name": "CC_InFormDEBT", "type": "TFloatField"}, "cc_informdebitaccount": {"name": "CC_InFormDEBITACCOUNT", "type": "TStringField"}, "cc_informdebitcurrency": {"name": "CC_InFormDEBITCURRENCY", "type": "TStringField"}, "cc_informcredit": {"name": "CC_InFormCREDIT", "type": "TFloatField"}, "cc_informcreditaccount": {"name": "CC_InFormCREDITACCOUNT", "type": "TStringField"}, "cc_informcreditcurrency": {"name": "CC_InFormCREDITCURRENCY", "type": "TStringField"}, "cc_informassignment": {"name": "CC_InFormASSIGNMENT", "type": "TStringField"}, "cc_informuserid": {"name": "CC_InFormUSERID", "type": "TFloatField"}}, {});
  U.init(async () => {
    U.var_("CC_AccInForm", null, "TCC_AccInForm");
  });
  U.method("TCC_AccInForm", "WMNCACTIVATE", async function WMNCACTIVATE(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "s": null};
  await $.inherited(Self, "TCC_AccInForm", "WMNCACTIVATE", null, arguments);
  await $.stmt((await $.call(C, "WMNCPaint", [$.ref(async () => L0["s"], async ($t1) => { L0["s"] = $t1; })])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCActivate"]});
  U.method("TCC_AccInForm", "WMNCPaint", async function WMNCPaint(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"message": $.asRef(p0), result: undefined, "dc": null};
  L0["capt"] = "Komissiya əməliyyatları";
  await $.inherited(Self, "TCC_AccInForm", "WMNCPaint", null, arguments);
  await $.set(C, "Caption", "");
  L0["dc"] = (await $.call(C, "GetWindowDC", [(await $.v(C, "Handle"))]));
  await $.stmt((await $.call(C, "SetBkMode", [L0["dc"], (await $.v(C, "Transparent"))])));
  await $.stmt((await $.call(C, "SetTextColor", [L0["dc"], (await $.v(C, "clWhite"))])));
  await $.stmt((await $.call(C, "SelectObject", [L0["dc"], (await $.mv((await $.v(C, "Font")), "Handle"))])));
  await $.stmt((await $.call(C, "TextOut", [L0["dc"], 23, 6, L0["capt"], (await $.call(C, "Length", [L0["capt"]]))])));
  return L0.result;
}, {"params": ["message"], "kind": "procedure", "ptypes": ["TWMNCPaint"]});
  U.method("TCC_AccInForm", "ButtonCloseClick", async function ButtonCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_AccInForm", "SettingsBrowserDblClick", async function SettingsBrowserDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccIn", (await $.mcall((await $.v(C, "TFormAccIn")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormAccIn")), "Showmodal", []);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_AccInForm", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "FormAccIn", (await $.mcall((await $.v(C, "TFormAccIn")), "Create", [Self])));
  await $.mcall((await $.v(C, "FormAccIn")), "Showmodal", []);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCC_AccInForm", "ButtonRefreshClick", async function ButtonRefreshClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CC_InForm")), "close", []);
  await $.mcall((await $.v(C, "CC_InForm")), "Open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
