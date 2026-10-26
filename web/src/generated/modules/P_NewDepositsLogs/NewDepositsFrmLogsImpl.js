// Generated from NewDepositsFrmLogsImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmLogsImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Db", "Oracle", "OracleData", "StdCtrls", "Buttons", "ComCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "CMExcelExport", "DBGridEh", "XFSCtrls", "ExtCtrls", "sboapiDataModuleImpl", "NewCommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TNewDepositsFrmLogs", "TForm", {"filials": {"name": "filials", "type": "TOracleDataSet"}, "filialsid": {"name": "filialsID", "type": "TFloatField"}, "dm_control": {"name": "dm_control", "type": "TOraclePackage"}, "filialsds": {"name": "filialsds", "type": "TDataSource"}, "sysdat": {"name": "sysdat", "type": "TOracleDataSet"}, "sysdattek_dat": {"name": "sysdatTEK_DAT", "type": "TDateTimeField"}, "contexport": {"name": "contExport", "type": "TCMExcelExport"}, "resultcontrol": {"name": "ResultControl", "type": "TOracleDataSet"}, "filialsname": {"name": "filialsNAME", "type": "TWideStringField"}, "resultcontroltimestamp": {"name": "ResultControlTIMESTAMP", "type": "TDateTimeField"}, "resultcontrolwho": {"name": "ResultControlWHO", "type": "TWideStringField"}, "resultcontroltname": {"name": "ResultControlTNAME", "type": "TWideStringField"}, "resultcontrolcname": {"name": "ResultControlCNAME", "type": "TWideStringField"}, "resultcontrolold": {"name": "ResultControlOLD", "type": "TWideStringField"}, "resultcontrolnew": {"name": "ResultControlNEW", "type": "TWideStringField"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "dtpdat": {"name": "DTPDAT", "type": "TDateTimePicker"}, "etpdat": {"name": "ETPDAT", "type": "TDateTimePicker"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfstatictext1": {"name": "XFStaticText1", "type": "TXFStaticText"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "dblookupcomboboxeh1": {"name": "DBLookupComboboxEh1", "type": "TDBLookupComboboxEh"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfstatictext2": {"name": "XFStaticText2", "type": "TXFStaticText"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "resultcontroldepid": {"name": "ResultControlDEPID", "type": "TFloatField"}, "resultcontrolfilial": {"name": "ResultControlFILIAL", "type": "TWideStringField"}, "resultcontrolcontractno": {"name": "ResultControlCONTRACTNO", "type": "TWideStringField"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmLogs", null, "TNewDepositsFrmLogs");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "NewDepositsFrmLogs")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TNewDepositsFrmLogs", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmLogs", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmLogs", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmLogs", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "sysdat")), "Open", []);
  await $.mset((await $.v(C, "DTPDAT")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "FieldByName", ["tek_dat"])), "asdateTime")));
  await $.mset((await $.v(C, "ETPDAT")), "DateTime", (await $.mv((await $.mcall((await $.v(C, "sysdat")), "FieldByName", ["tek_dat"])), "asdateTime")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmLogs", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "brid": 0, "bdat": 0, "edat": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["brid"] = (await $.mv((await $.mcall((await $.v(C, "filials")), "FieldByName", ["ID"])), "AsInteger"));
  L0["bdat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTPDAT")), "DateTime"))]))]));
  L0["edat"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "ETPDAT")), "DateTime"))]))]));
  {
    const $t1 = (await $.v(C, "ResultControl"));
    await $.stmt($.wcall([$t1], "close", [], C));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["bdat", (await $.wv([$t1], "BDat", { get: async () => L0["bdat"], set: async (v) => { L0["bdat"] = v; }, local: true }, false))], C)));
    await $.stmt((await $.wcall([$t1], "SetVariable", ["edat", (await $.wv([$t1], "EDat", { get: async () => L0["edat"], set: async (v) => { L0["edat"] = v; }, local: true }, false))], C)));
    if ($.truthy($.gt((await $.wv([$t1], "BrID", { get: async () => L0["brid"], set: async (v) => { L0["brid"] = v; }, local: true }, false)), (-(1))))) {
      { const $t2 = await $.iset((await $.wv([$t1], "sql", C, false)), [9], $.add($.add("and  ", "(select branchid from dm_contracts where id=depid)="), (await $.wcall([$t1], "IntToStr", [(await $.wv([$t1], "BrID", { get: async () => L0["brid"], set: async (v) => { L0["brid"] = v; }, local: true }, false))], C)))); if ($t2 !== undefined) { await $.wset([$t1], "sql", $t2, C); } }
    } else {
      { const $t3 = await $.iset((await $.wv([$t1], "sql", C, false)), [9], ""); if ($t3 !== undefined) { await $.wset([$t1], "sql", $t3, C); } }
    }
    await $.stmt($.wcall([$t1], "Open", [], C));
    if ($.truthy($.eq((await $.wv([$t1], "RecordCount", C, false)), 0))) {
      await $.stmt((await $.wcall([$t1], "ShowMessage", ["Heç bir məlumat yoxdur"], C)));
      return L0.result;
    }
    {
      const $t4 = (await $.wv([$t1], "contExport", C, false));
      await $.stmt($.wcall([$t1, $t4], "Connect", [], C));
      await $.stmt((await $.wcall([$t1, $t4], "ExportDataset", [(await $.wv([$t1, $t4], "ResultControl", C, false)), "Control", (await $.wv([$t1, $t4], "true", C, false)), (await $.wv([$t1, $t4], "false", C, false))], C)));
      await $.stmt($.wcall([$t1, $t4], "Disconnect", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmLogs", "FormShow", async function FormShow(Self, p0) {
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
  await $.set(C, "NewDepositsFrmLogs", (await $.mcall((await $.v(C, "TNewDepositsFrmLogs")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
