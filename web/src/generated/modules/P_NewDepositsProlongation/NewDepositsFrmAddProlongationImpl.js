// Generated from NewDepositsFrmAddProlongationImpl.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("NewDepositsFrmAddProlongationImpl", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "LDialogs", "ComCtrls", "StdCtrls", "Buttons", "XFSCtrls", "NewDepositsFrmProlongationImpl", "NewCommonDeclsImpl", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TNewDepositsFrmAddProlongation", "TForm", {"xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "dtplast": {"name": "DTPLast", "type": "TDateTimePicker"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "dtpnew": {"name": "DTPNew", "type": "TDateTimePicker"}, "bitbtnok": {"name": "BitBtnOk", "type": "TXFButton"}, "bitbtnclose": {"name": "BitBtnClose", "type": "TXFButton"}}, {});
  U.init(async () => {
    U.var_("NewDepositsFrmAddProlongation", null, "TNewDepositsFrmAddProlongation");
  });
  U.method("TNewDepositsFrmAddProlongation", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TNewDepositsFrmAddProlongation", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddProlongation", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "Ord", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE"))))) {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TNewDepositsFrmAddProlongation", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTPNew")), "DateTime", (await $.v(C, "Get_BankDate")));
  await $.mset((await $.v(C, "DTPLast")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "NewDepositsFrmProlongation")), "DepositInf")), "FieldByName", ["CloseDate"])), "AsDateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddProlongation", "BitBtnOkClick", async function BitBtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "closedate": 0, "prolongdate": 0, "contractid": 0, "check": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["rsinvaliddate"] = "Mğqavil?nin uzadglma vaxtg barlanma tarixind?n kizik ola bilm?z !";
  L0["prolongdate"] = (await $.call(C, "Integer", [(await $.call(C, "Trunc", [(await $.mv((await $.v(C, "DTPNew")), "DateTime"))]))]));
  L0["closedate"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "NewDepositsFrmProlongation")), "DepositInf")), "FieldByName", ["CloseDate"])), "AsDateTime"));
  L0["contractid"] = (await $.v(C, "Get_SelectedContID"));
  if ($.truthy($.le(L0["prolongdate"], L0["closedate"]))) {
    await $.stmt((await $.call(C, "MessageDlg", [L0["rsinvaliddate"], (await $.v(C, "mtWarning")), [(await $.v(C, "mbOK"))], 0])));
  } else {
    {
      const $t1 = (await $.v(C, "NewDepositsFrmProlongation"));
      const $t2 = (await $.wv([$t1], "sbcm_prolongation", C, false));
      await $.wset([$t1, $t2], "Check", (await $.wcall([$t1, $t2], "CallIntegerFunction", ["ProlongationCheck", [(await $.wv([$t1, $t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false))]], C)), { get: async () => L0["check"], set: async (v) => { L0["check"] = v; }, local: true });
      if ($.truthy($.eq((await $.wv([$t1, $t2], "Check", { get: async () => L0["check"], set: async (v) => { L0["check"] = v; }, local: true }, false)), 0))) {
        await $.stmt((await $.wcall([$t1, $t2], "CallProcedure", ["AddProlongation", [(await $.wv([$t1, $t2], "ContractID", { get: async () => L0["contractid"], set: async (v) => { L0["contractid"] = v; }, local: true }, false)), (await $.wv([$t1, $t2], "Get_BankDate", C, false)), (await $.wv([$t1, $t2], "ProlongDate", { get: async () => L0["prolongdate"], set: async (v) => { L0["prolongdate"] = v; }, local: true }, false))]], C)));
        await $.mcall((await $.wv([$t1, $t2], "prolongations", C, false)), "Refresh", []);
        await $.mcall((await $.wv([$t1, $t2], "DepositInf", C, false)), "Refresh", []);
        await $.wset([$t1, $t2], "ModalResult", (await $.wv([$t1, $t2], "mrOk", C, false)), C);
      } else {
        await $.stmt((await $.wcall([$t1, $t2], "ShowMessage", ["Bu mğqavil?nin vaxtgng uzatmaq qadarandgr !!!"], C)));
        return L0.result;
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TNewDepositsFrmAddProlongation", "XFButton2Click", async function XFButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
