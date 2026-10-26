// Generated from NewDepositsFrmControldpImpll.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmControldpImpll", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "Oracle", "OracleData", "StdCtrls", "Buttons", "ComCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CMExcelExport", "DBGridEh", "sboapiDataModuleImpl", "NewCommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TNewDepositsFrmControldp", "TForm", {"filials": {"name": "filials", "type": "TOracleDataSet"}, "filialsid": {"name": "filialsID", "type": "TFloatField"}, "dm_control": {"name": "dm_control", "type": "TOraclePackage"}, "filialsds": {"name": "filialsds", "type": "TDataSource"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "dtpdat": {"name": "DTPDAT", "type": "TDateTimePicker"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "sysdat": {"name": "sysdat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "sysdatTEK_DAT", "type": "TDateTimeField"}, "contexport": {"name": "contExport", "type": "TCMExcelExport"}, "resultcontrol": {"name": "ResultControl", "type": "TOracleDataSet"}, "filialsname": {"name": "filialsNAME", "type": "TWideStringField"}, "resultcontrolcontractnum": {"name": "ResultControlCONTRACTNUM", "type": "TWideStringField"}, "resultcontrolcustname": {"name": "ResultControlCUSTNAME", "type": "TWideStringField"}, "resultcontroldrest": {"name": "ResultControlDREST", "type": "TFloatField"}, "resultcontroldintrest": {"name": "ResultControlDINTREST", "type": "TFloatField"}, "resultcontrolfilial": {"name": "ResultControlFILIAL", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmControldp", null, "TNewDepositsFrmControldp");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "NewDepositsFrmControldp")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmControldp", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmControldp", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmControldp", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "sysdat")), "Open", []);
  await $.mset((await $.v(C, "DTPDAT")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "FieldByName", ["tek_dat"])), "asdateTime")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmControldp", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "brid": 0, "dat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["brid"] = (await $.mv((await $.mcall((await $.v(C, "filials")), "FieldByName", ["ID"])), "AsInteger"));
  L0["dat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPDAT")), "DateTime"))]))]));
  {
    const $t1 = (await $.v(C, "dm_control"));
    await $.stmt((await $.wcall([$t1], "CallProcedure", ["control", [(await $.wv([$t1], "BrID", { get: async () => L0["brid"], set: async (v) => { L0["brid"] = v; }, local: true }, false)), (await $.wv([$t1], "dat", { get: async () => L0["dat"], set: async (v) => { L0["dat"] = v; }, local: true }, false))]], C)));
    if ($.truthy((await $.mv((await $.wv([$t1], "ResultControl", C, false)), "Active")))) {
      await $.stmt($.wcall([$t1], "close", [], C));
    }
    await $.mcall((await $.wv([$t1], "ResultControl", C, false)), "Open", []);
    if ($.truthy($.eq((await $.mv((await $.wv([$t1], "ResultControl", C, false)), "RecordCount")), 0))) {
      await $.stmt((await $.wcall([$t1], "ShowMessage", ["Heç bir məlumat yoxdur"], C)));
      return L0.result;
    }
    {
      const $t2 = (await $.wv([$t1], "contExport", C, false));
      await $.stmt($.wcall([$t1, $t2], "Connect", [], C));
      await $.stmt((await $.wcall([$t1, $t2], "ExportDataset", [(await $.wv([$t1, $t2], "ResultControl", C, false)), "Control", (await $.wv([$t1, $t2], "true", C, false)), (await $.wv([$t1, $t2], "false", C, false))], C)));
      await $.stmt($.wcall([$t1, $t2], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmControldp", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "filials")), "Open", []);
  await $.mset((await $.v(C, "DBLookupComboboxEh1")), "KeyValue", (await $.mv((await $.mcall((await $.v(C, "filials")), "FieldByName", ["ID"])), "asInteger")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "NewDepositsFrmControldp", (await $.mcall((await $.v(C, "TNewDepositsFrmControldp")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
