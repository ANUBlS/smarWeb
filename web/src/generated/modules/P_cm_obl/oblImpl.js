// Generated from oblImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("oblImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "Buttons", "ExtCtrls", "Db", "OracleData", "Grids", "DBGridEh", "StdCtrls", "Oracle", "CommonDecls", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TFrmObl", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}, "speedbutton3": {"name": "SpeedButton3", "type": "TSpeedButton"}, "oracledataset2": {"name": "OracleDataSet2", "type": "TOracleDataSet"}, "dbgrideh1": {"name": "DBGridEh1", "type": "TDBGridEh"}, "label1": {"name": "Label1", "type": "TLabel"}, "oraclepackage1": {"name": "OraclePackage1", "type": "TOraclePackage"}}, {});
  U.init(async () => {
    U.var_("FrmObl", null, "TFrmObl");
    U.var_("DataColIndex", 4, "Integer");
  });
  U.func("InitPlugin", async function InitPlugin(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "FrmObl")), "ShowModal", []);
  return L0.result;
}, {"params": ["s"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TFrmObl", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet2")), "open", []);
  await $.mset((await $.v(C, "DateTimePicker1")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet2")), "fieldbyname", ["tek_dat"])), "asdatetime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmObl", "SpeedButton3Click", async function SpeedButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  {
    const $t1 = (await $.wobj(C, "OracleDataSet1"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["dat", (await $.wv([$t1], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmObl", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "close", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TFrmObl", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "dat": 0, "i": 0, "selectedrowscnt": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DateTimePicker1")), "DateTime"))]))]));
  await $.mcall((await $.v(C, "OracleDataSet1")), "First", []);
  {
    const $t2 = (await $.wobj(C, "OracleDataSet1"));
    while ($.truthy($.not((await $.wv([$t2], "EOF", C, false))))) {
      try {
        await $.stmt((await $.mcall((await $.wv([$t2], "OraclePackage1", C, false)), "CallProcedure", ["ActivateCredit", ["p_CreditID", (await $.mv((await $.wcall([$t2], "FieldByName", ["ID"], C)), "AsInteger")), "p_date", (await $.wv([$t2], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))]])));
      } catch ($t3) {
        $.rethrowControl($t3);
        if ($.excIs($t3, "Exception")) {
          L0["e"] = $.exc($t3);
          await $.stmt((await $.wcall([$t2], "LogError", [(await $.mv((await $.wv([$t2], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message"))], C)));
        }
        else { throw $t3; }
      }
      await $.stmt($.wcall([$t2], "Next", [], C));
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmObl", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFrmObl", "DBGridEh1ColumnMoved", async function DBGridEh1ColumnMoved(Self, p0, p1, p2) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "fromindex": $.copyArg(p1), "toindex": $.copyArg(p2), result: undefined};
  await $.fixArgs(L0, ["sender", "fromindex", "toindex"]);
  L0["findspecialrowindex"] = $.fn(async function FindSpecialRowIndex() {
  const L1 = {result: 0};
  L1["result"] = 0;
  {
    const $t4 = L0["sender"];
    while ($.truthy((await $.and_(($.lt((await $.wv([$t4], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), (await $.mv((await $.wv([$t4], "Columns", C, false)), "Count")))), async () => ($.ne((await $.mv((await $.idx((await $.wv([$t4], "Columns", C, false)), [(await $.wv([$t4], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false))])), "Tag")), 1)))))) {
      await $.stmt((await $.wcall([$t4], "Inc", [$.ref(async () => (await $.wv([$t4], "Result", { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }, false)), async ($t5) => { await $.wset([$t4], "Result", $t5, { get: async () => L1["result"], set: async (v) => { L1["result"] = v; }, local: true }); })], C)));
      await $.tick();
    }
  }
  return L1.result;
});
  await $.set(C, "DataColIndex", (await $.callv(L0["findspecialrowindex"], [])));
  return L0.result;
}, {"params": ["Sender", "FromIndex", "ToIndex"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "FrmObl", (await $.mcall((await $.v(C, "TFrmObl")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
