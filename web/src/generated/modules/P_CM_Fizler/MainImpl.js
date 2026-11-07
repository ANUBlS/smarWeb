// Generated from MainImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("MainImpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "DB", "OracleData", "Grids", "DBGrids", "StdCtrls", "CommonDecls", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMainFrm", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "datasrccreditprops": {"name": "DataSrcCreditProps", "type": "TDataSource"}, "creditprops": {"name": "CreditProps", "type": "TOracleDataSet"}, "creditpropsname": {"name": "CreditPropsNAME", "type": "TWideStringField"}, "creditpropsannualyinterestrate": {"name": "CreditPropsANNUALYINTERESTRATE", "type": "TFloatField"}, "creditpropsannualyoverduerate": {"name": "CreditPropsANNUALYOVERDUERATE", "type": "TFloatField"}, "creditpropsannualypenaltyrate": {"name": "CreditPropsANNUALYPENALTYRATE", "type": "TFloatField"}, "creditpropskomission": {"name": "CreditPropsKOMISSION", "type": "TFloatField"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}}, {});
  U.init(async () => {
    U.var_("MainFrm", null, "TMainFrm");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "MainFrm")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TMainFrm", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CreditProps")), "Post", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFrm", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMainFrm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "CreditProps")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "MainFrm", (await $.mcall((await $.v(C, "TMainFrm")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
