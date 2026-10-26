// Generated from Creditİmpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Creditİmpl", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "Grids", "DBGridEh", "ExtCtrls", "StdCtrls", "XFSCtrls", "DBGridEhGrouping", "GridsEh", "Buttons", "DB", "OracleData", "UnitDataModPCustService", "SBTranslateProc", "sboapiDataModuleImpl", "companycreditpayment", "CommonDecls", "PCustServiceFormImpl1"]);
  const C = [U];
  U.defClass("TCreditFrm", "TForm", {"maingrid": {"name": "MainGrid", "type": "TDBGridEh"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "timerbutton": {"name": "TimerButton", "type": "TXFButton"}, "xfbutton2": {"name": "XFButton2", "type": "TXFButton"}, "xfbutton1": {"name": "XFButton1", "type": "TXFButton"}, "returngoods": {"name": "Returngoods", "type": "TXFButton"}, "xfbutton3": {"name": "XFButton3", "type": "TXFButton"}, "xfbutton5": {"name": "XFButton5", "type": "TXFButton"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "xfbutton4": {"name": "XFButton4", "type": "TXFButton"}, "ods_shedule": {"name": "Ods_shedule", "type": "TOracleDataSet"}}, {});
  U.init(async () => {
    U.var_("CreditFrm", null, "TCreditFrm");
  });
  U.method("TCreditFrm", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.func("LoadPlugin", async function LoadPlugin(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"pluginname": $.copyArg(p0), "pluginparam": $.copyArg(p1), result: undefined, "pluginhandle": 0, "exportproc": null};
  await $.fixArgs(L0, ["pluginname", "pluginparam"]);
  L0["pluginhandle"] = (await $.call(C, "LoadPackage", [$.add((await $.call(C, "ExtractFilePath", [(await $.mv((await $.v(C, "Application")), "ExeName"))])), L0["pluginname"])]));
  if ($.truthy($.gt(L0["pluginhandle"], 0))) {
    L0["exportproc"] = (await $.call(C, "GetProcAddress", [L0["pluginhandle"], "InitPlugin"]));
    await $.stmt((await $.callv(L0["exportproc"], [L0["pluginparam"]])));
  }
  return L0.result;
}, {"params": ["PluginName", "PluginParam"], "kind": "procedure", "ptypes": ["String", "String"]});
  U.method("TCreditFrm", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "CommonApplication", (await $.v(C, "Application")));
  await $.set(C, "CommonScreen", (await $.v(C, "Screen")));
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditFrm", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), 27))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCreditFrm", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tt": 0, "aa": 0, "bb": 0, "cc": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "rtl_insert")), 1))) {
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "CreditDSetRESERVEID")), "AsInteger")), 1)), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "CreditDSetRESERVEID")), "AsInteger")), 3)))))) {
      await $.mcall((await $.v(C, "Returngoods")), "Click", []);
    }
  }
  L0["tt"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "XFButton3"]]));
  if ($.truthy($.eq(L0["tt"], 0))) {
    await $.mset((await $.v(C, "XFButton3")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFButton3")), "Visible", true);
  }
  L0["aa"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "TimerButton"]]));
  if ($.truthy($.eq(L0["aa"], 0))) {
    await $.mset((await $.v(C, "TimerButton")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "TimerButton")), "Visible", true);
  }
  L0["bb"] = (await $.mcall((await $.mv((await $.v(C, "DataModPCustService")), "PG_PCustService")), "CallIntegerFunction", ["get_Modle_comp", ["PCustService", "PCustServiceForm", "XFButton1"]]));
  if ($.truthy($.eq(L0["bb"], 0))) {
    await $.mset((await $.v(C, "XFButton1")), "Visible", false);
  } else {
    await $.mset((await $.v(C, "XFButton1")), "Visible", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditFrm", "MainGridDblClick", async function MainGridDblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["CM_Conclusion.bpl", "Edit"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditFrm", "MainGridKeyPress", async function MainGridKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    await $.stmt((await $.call(C, "LoadPlugin", ["CM_Statement.bpl", ""])));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCreditFrm", "TimerButtonClick", async function TimerButtonClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["CM_Statement.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditFrm", "XFButton1Click", async function XFButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["CM_Conclusion.bpl", "Edit"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditFrm", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["CM_Schedule.bpl", "Payment"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditFrm", "XFButton3Click", async function XFButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["CM_Payment.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditFrm", "XFButton4Click", async function XFButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["CM_Tranche.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditFrm", "XFButton5Click", async function XFButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "Ods_shedule")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "Ods_shedule")), "SetVariable", ["v_id", (await $.mv((await $.mv((await $.v(C, "DataModPCustService")), "CreditDSetID")), "AsInteger"))])));
  await $.mcall((await $.v(C, "Ods_shedule")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Ods_shedule")), "RecordCount")), 0))) {
    await $.stmt((await $.call(C, "showmessage", [" Öncə müqaviləyə ödəmə planı yaradın "])));
    $.abort();
  }
  await $.stmt((await $.call(C, "LoadPlugin", ["CM_WReport.bpl", "AGREE"])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCreditFrm", "ReturngoodsClick", async function ReturngoodsClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "LoadPlugin", ["CM_Guarantee.bpl", ""])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
