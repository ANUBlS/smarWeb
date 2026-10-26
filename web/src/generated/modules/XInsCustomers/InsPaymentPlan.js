// Generated from InsPaymentPlan.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsPaymentPlan", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "Grids", "DBGrids", "ToolWin", "StdCtrls", "Buttons", "ExtCtrls", "ImgList", "HintBox", "Oracle", "InsDataModule", "InsPlanForm", "InsPlanBuilder"]);
  const C = [U];
  U.defClass("TfmPaymentPlan", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "hberror": {"name": "hbError", "type": "THintBox"}, "toolbutton7": {"name": "ToolButton7", "type": "TToolButton"}, "toolbutton9": {"name": "ToolButton9", "type": "TToolButton"}, "toolbutton8": {"name": "ToolButton8", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("fmPaymentPlan", null, "TfmPaymentPlan");
  });
  U.method("TfmPaymentPlan", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  try {
    await $.set(C, "fmPlanBuilder", (await $.mcall((await $.v(C, "TfmPlanBuilder")), "Create", [Self])));
    await $.mcall((await $.v(C, "fmPlanBuilder")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "fmPlanBuilder")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Plan legv olunacaq!", (await $.v(C, "mtWarning")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t1 = (await $.v(C, "InsDataMod"));
      const $t2 = (await $.wv([$t1], "OPCOMMON", C, false));
      const $t3 = (await $.wv([$t1, $t2], "ODSContracts", C, false));
      try {
        await $.stmt((await $.wcall([$t1, $t2, $t3], "CallProcedure", ["clearplan", [(await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["ID"], C)), "asInteger"))]], C)));
        await $.mcall((await $.wv([$t1, $t2, $t3], "ODSPayPlan", C, false)), "refresh", []);
      } catch ($t4) {
        $.rethrowControl($t4);
        if ($.excIs($t4, "EOracleError")) {
          L0["e"] = $.exc($t4);
          await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "hbError", C, false)), "ShowMessage", [$.add($.add((await $.wcall([$t1, $t2, $t3], "IntToStr", [(await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode"))], C)), " "), (await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))])));
        }
        else { throw $t4; }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "InsDataMod"));
    await $.stmt((await $.wcall([$t5], "SaveData", [], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "InsDataMod"));
    const $t7 = (await $.wv([$t6], "ODSPayPlan", C, false));
    await $.stmt($.wcall([$t6, $t7], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t8 = (await $.v(C, "InsDataMod"));
    await $.stmt((await $.wcall([$t8], "SaveData", [], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Odeme aparilsin!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t9 = (await $.v(C, "InsDataMod"));
      const $t10 = (await $.wv([$t9], "OPCOMMON", C, false));
      const $t11 = (await $.wv([$t9, $t10], "ODSPayPlan", C, false));
      try {
        if ($.truthy($.gt((await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["STATUS"], C)), "asInteger")), 0))) {
          await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t11], "hbError", C, false)), "ShowMessage", ["Emeliyyat artiq aparilib!"])));
          return L0.result;
        }
        if ($.truthy((await $.wcall([$t9, $t10, $t11], "CallBooleanFunction", ["addpayment", [(await $.mv((await $.wv([$t9, $t10, $t11], "ODSContractsID", C, false)), "value")), (await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["AMMOUNT"], C)), "asCurrency")), (await $.mv((await $.wcall([$t9, $t10, $t11], "FieldByName", ["ID"], C)), "asInteger"))]], C)))) {
          await $.stmt((await $.wcall([$t9, $t10, $t11], "MessageDlg", ["Emeliyyat yerine yetirildi.", (await $.wv([$t9, $t10, $t11], "mtInformation", C, false)), [(await $.wv([$t9, $t10, $t11], "mbOK", C, false))], 0], C)));
        }
        await $.mcall((await $.wv([$t9, $t10, $t11], "ODSPayPlan", C, false)), "RefreshRecord", []);
      } catch ($t12) {
        $.rethrowControl($t12);
        if ($.excIs($t12, "EOracleError")) {
          L0["e"] = $.exc($t12);
          await $.stmt((await $.mcall((await $.wv([$t9, $t10, $t11], "hbError", C, false)), "ShowMessage", [$.add($.add((await $.wcall([$t9, $t10, $t11], "IntToStr", [(await $.mv((await $.wv([$t9, $t10, $t11], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode"))], C)), " "), (await $.mv((await $.wv([$t9, $t10, $t11], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))])));
        }
        else { throw $t12; }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "ToolButton7Click", async function ToolButton7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmPlanForm", (await $.mcall((await $.v(C, "TfmPlanForm")), "Create", [Self])));
  try {
    {
      const $t13 = (await $.v(C, "InsDataMod"));
      const $t14 = (await $.wv([$t13], "ODSPayPlan", C, false));
      await $.stmt($.wcall([$t13, $t14], "Insert", [], C));
    }
    await $.mcall((await $.v(C, "fmPlanForm")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "fmPlanForm")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "fmPlanForm", (await $.mcall((await $.v(C, "TfmPlanForm")), "Create", [Self])));
  try {
    {
      const $t15 = (await $.v(C, "InsDataMod"));
      const $t16 = (await $.wv([$t15], "ODSPayPlan", C, false));
      await $.stmt($.wcall([$t15, $t16], "Edit", [], C));
    }
    await $.mcall((await $.v(C, "fmPlanForm")), "ShowModal", []);
  } finally {
    await $.mcall((await $.v(C, "fmPlanForm")), "Free", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "ToolButton9Click", async function ToolButton9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tradelaskres": false};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t17 = (await $.v(C, "InsDataMod"));
    if ($.truthy($.eq((await $.wcall([$t17], "MessageDlg", ["Secilmish plan pozulsun?", (await $.wv([$t17], "mtWarning", C, false)), [(await $.wv([$t17], "mbYes", C, false)), (await $.wv([$t17], "mbNo", C, false))], 0], C)), (await $.wv([$t17], "mrYes", C, false))))) {
      if ($.truthy($.gt((await $.mv((await $.mcall((await $.wv([$t17], "ODSPayPlan", C, false)), "FieldByName", ["status"])), "asInteger")), 0))) {
        await $.wset([$t17], "traDelAskRes", $.eq((await $.wcall([$t17], "MessageDlg", ["Odeme emeliyyati pozlsun?", (await $.wv([$t17], "mtWarning", C, false)), [(await $.wv([$t17], "mbYes", C, false)), (await $.wv([$t17], "mbNo", C, false))], 0], C)), (await $.wv([$t17], "mrYes", C, false))), { get: async () => L0["tradelaskres"], set: async (v) => { L0["tradelaskres"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t17], "OPCOMMON", C, false)), "CallProcedure", ["deleteplan", [(await $.mv((await $.mcall((await $.wv([$t17], "ODSPayPlan", C, false)), "FieldByName", ["ID"])), "asInteger")), (await $.wv([$t17], "traDelAskRes", { get: async () => L0["tradelaskres"], set: async (v) => { L0["tradelaskres"] = v; }, local: true }, false))]])));
      }
      await $.mcall((await $.wv([$t17], "ODSPayPlan", C, false)), "Refresh", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t18 = (await $.v(C, "InsDataMod"));
    const $t19 = (await $.wv([$t18], "ODSPayPlan", C, false));
    await $.stmt((await $.wcall([$t18, $t19], "RedoData", [], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPaymentPlan", "ToolButton8Click", async function ToolButton8Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t20 = (await $.v(C, "InsDataMod"));
    const $t21 = (await $.wv([$t20], "OPCOMMON", C, false));
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.wv([$t20, $t21], "ODSPayPlan", C, false)), "FieldByName", ["STATUS"])), "asInteger")), 0))) {
      if ($.truthy($.eq((await $.wcall([$t20, $t21], "MessageDlg", ["Odeme pozulsun?", (await $.wv([$t20, $t21], "mtConfirmation", C, false)), [(await $.wv([$t20, $t21], "mbYes", C, false)), (await $.wv([$t20, $t21], "mbNo", C, false))], 0], C)), (await $.wv([$t20, $t21], "mrYes", C, false))))) {
        if ($.truthy((await $.wcall([$t20, $t21], "CallBooleanFunction", ["delpaybyplan", [(await $.mv((await $.mcall((await $.wv([$t20, $t21], "ODSPayPlan", C, false)), "FieldByName", ["ID"])), "asInteger"))]], C)))) {
          await $.stmt((await $.wcall([$t20, $t21], "MessageDlg", ["Odeme pozuldu.", (await $.wv([$t20, $t21], "mtInformation", C, false)), [(await $.wv([$t20, $t21], "mbOK", C, false))], 0], C)));
          await $.mcall((await $.wv([$t20, $t21], "ODSPayPlan", C, false)), "RefreshRecord", []);
        }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
