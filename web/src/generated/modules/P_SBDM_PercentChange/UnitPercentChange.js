// Generated from UnitPercentChange.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitPercentChange", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "CMCurrencyEdit", "StdCtrls", "ExtCtrls", "OracleData", "Oracle", "DB", "sboapiDataModuleImpl", "CommonDeclsImpl"]);
  const C = [U];
  U.defClass("TFormPercentChange", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "cmcurrencyedit1": {"name": "CMCurrencyEdit1", "type": "TCMCurrencyEdit"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}, "canrefreshdeposit": {"name": "CanRefReshDeposit", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("FormPercentChange", null, "TFormPercentChange");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined, "contractid": 0, "custaccid": 0, "custid": 0};
  await $.fixArgs(L0, ["s"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "FormPercentChange"));
    await $.mcall((await $.wv([$t1], "OracleDataSet1", C, false)), "Close", []);
    await $.stmt((await $.mcall((await $.wv([$t1], "OracleDataSet1", C, false)), "SetVariable", ["contid", (await $.wv([$t1], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))])));
    await $.mcall((await $.wv([$t1], "OracleDataSet1", C, false)), "Open", []);
    await $.mcall((await $.wv([$t1], "Edit1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t1], "CMCurrencyEdit1", C, false)), "Clear", []);
    await $.mset((await $.wv([$t1], "CMCurrencyEdit1", C, false)), "Text", "0.00");
    await $.mset((await $.wv([$t1], "Edit1", C, false)), "Text", (await $.mv((await $.mcall((await $.wv([$t1], "OracleDataSet1", C, false)), "FieldByName", ["contractno"])), "AsString")));
  }
  await $.mcall((await $.v(C, "FormPercentChange")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFormPercentChange", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "s": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Faizin dəyişdirilməsinə əminsiniz?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrNo"))))) {
    return L0.result;
  }
  L0["s"] = (await $.mv((await $.v(C, "CMCurrencyEdit1")), "Value"));
  await $.stmt((await $.mcall((await $.v(C, "OraclePackage1")), "CallProcedure", ["UpdatePercentTranches", ["v_id#", (await $.v(C, "Get_SelectedContID")), "v_id", 0, "v_percent", L0["s"]]])));
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPercentChange", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPercentChange", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(((await $.v(C, "CanRefReshDeposit")))))) {
    await $.stmt((await $.call(C, "RefreshWithSavely", [true])));
  }
  await $.mcall((await $.v(C, "OracleDataSet1")), "CloseAll", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FormPercentChange", (await $.mcall((await $.v(C, "TFormPercentChange")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
