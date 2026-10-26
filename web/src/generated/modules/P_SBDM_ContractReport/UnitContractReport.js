// Generated from UnitContractReport.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitContractReport", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "Db", "OracleData", "sboapiDataModuleImpl", "UnitDepozitMoneyReport", "UnitWithDrawReoprt", "CommonDeclsImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TfrmContractReport", "TForm", {"bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "radiobutton1": {"name": "RadioButton1", "type": "TRadioButton"}, "radiobutton2": {"name": "RadioButton2", "type": "TRadioButton"}, "odsdepozitwithdraw": {"name": "ODSDepozitWithDraw", "type": "TOracleDataSet"}, "odsdepozitmoney": {"name": "ODSDepozitMoney", "type": "TOracleDataSet"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "label1": {"name": "Label1", "type": "TLabel"}, "odscontarcts": {"name": "ODSContarcts", "type": "TOracleDataSet"}, "fcontractid": {"name": "FContractID", "type": "Longint"}, "refreshafterclose": {"name": "RefreshAfterClose", "type": "Boolean"}}, {});
  U.init(async () => {
    U.var_("frmContractReport", null, "TfrmContractReport");
  });
  U.func("exportproc", async function exportproc(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"s": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["s"]);
  await $.mcall((await $.v(C, "frmContractReport")), "ShowModal", []);
  return L0.result;
}, {"params": ["S"], "kind": "procedure", "ptypes": ["String"]});
  U.method("TfrmContractReport", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "contractid": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  {
    const $t1 = (await $.v(C, "ODSContarcts"));
    if ($.truthy((await $.wv([$t1], "Active", C, false)))) {
      await $.stmt($.wcall([$t1], "CloseAll", [], C));
    }
    await $.stmt((await $.wcall([$t1], "SetVariable", ["CONTID", (await $.wv([$t1], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
    await $.stmt($.wcall([$t1], "Open", [], C));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "RadioButton1")), "Checked")), true))) {
    {
      const $t2 = (await $.v(C, "ODSDepozitMoney"));
      if ($.truthy((await $.wv([$t2], "Active", C, false)))) {
        await $.stmt($.wcall([$t2], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t2], "SetVariable", ["CONTID", (await $.wv([$t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t2], "Open", [], C));
    }
    await $.set(C, "frmDepozitMoneyReport", (await $.mcall((await $.v(C, "TfrmDepozitMoneyReport")), "Create", [Self])));
    await $.mcall((await $.mv((await $.v(C, "frmDepozitMoneyReport")), "QRPDepozitMoney")), "Preview", []);
  } else {
    {
      const $t3 = (await $.v(C, "ODSDepozitWithDraw"));
      if ($.truthy((await $.wv([$t3], "Active", C, false)))) {
        await $.stmt($.wcall([$t3], "CloseAll", [], C));
      }
      await $.stmt((await $.wcall([$t3], "SetVariable", ["CONTID", (await $.wv([$t3], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))], C)));
      await $.stmt($.wcall([$t3], "Open", [], C));
    }
    await $.set(C, "frmWithDrawReoprt", (await $.mcall((await $.v(C, "TfrmWithDrawReoprt")), "Create", [Self])));
    await $.mcall((await $.mv((await $.v(C, "frmWithDrawReoprt")), "QRPWithDraw")), "Preview", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmContractReport", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmContractReport", "FormDestroy", async function FormDestroy(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ODSDepozitMoney")), "close", []);
  await $.mcall((await $.v(C, "ODSDepozitWithDraw")), "close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmContractReport", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TfrmContractReport", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmContractReport", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.setInitialization(async function __initialization(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  await $.set(C, "frmContractReport", (await $.mcall((await $.v(C, "TfrmContractReport")), "Create", [(await $.v(C, "CommonApplication"))])));
  return L0.result;
});
  return U;
}
