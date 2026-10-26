// Generated from InsPayments.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsPayments", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "Grids", "DBGrids", "ToolWin", "StdCtrls", "Buttons", "ExtCtrls", "ImgList", "HintBox", "Oracle", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmPayments", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "hberror": {"name": "hbError", "type": "THintBox"}}, {});
  U.init(async () => {
    U.var_("fmPayments", null, "TfmPayments");
  });
  U.method("TfmPayments", "ToolButton1Click", async function ToolButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Plan hazirlansin", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t1 = (await $.v(C, "InsDataMod"));
      const $t2 = (await $.wv([$t1], "OPCOMMON", C, false));
      const $t3 = (await $.wv([$t1, $t2], "ODSContracts", C, false));
      try {
        await $.stmt((await $.wcall([$t1, $t2, $t3], "CallBooleanFunction", ["makeplan", [(await $.mv((await $.wcall([$t1, $t2, $t3], "FieldByName", ["ID"], C)), "asInteger"))]], C)));
        await $.mcall((await $.wv([$t1, $t2, $t3], "ODSPayPlan", C, false)), "refresh", []);
      } catch ($t4) {
        $.rethrowControl($t4);
        if ($.excIs($t4, "EOracleError")) {
          L0["e"] = $.exc($t4);
          { const $t5 = (await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode"));
            if ($.eq($t5, 20001)) {
              await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "hbError", C, false)), "ShowMessage", ["Sığorta məlumatları tam deyil!"])));
            }
            else if ($.eq($t5, 20002)) {
              await $.stmt((await $.mcall((await $.wv([$t1, $t2, $t3], "hbError", C, false)), "ShowMessage", ["Sığorta tapılmayıb!"])));
            }
            else {
              await $.stmt((await $.wcall([$t1, $t2, $t3], "ShowMessage", [$.add($.add((await $.wcall([$t1, $t2, $t3], "IntToStr", [(await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode"))], C)), " "), (await $.mv((await $.wv([$t1, $t2, $t3], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))], C)));
            }
          }
        }
        else { throw $t4; }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPayments", "ToolButton3Click", async function ToolButton3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Plan legv olunacaq!", (await $.v(C, "mtWarning")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t6 = (await $.v(C, "InsDataMod"));
      const $t7 = (await $.wv([$t6], "OPCOMMON", C, false));
      const $t8 = (await $.wv([$t6, $t7], "ODSContracts", C, false));
      try {
        await $.stmt((await $.wcall([$t6, $t7, $t8], "CallProcedure", ["clearplan", [(await $.mv((await $.wcall([$t6, $t7, $t8], "FieldByName", ["ID"], C)), "asInteger"))]], C)));
        await $.mcall((await $.wv([$t6, $t7, $t8], "ODSPayPlan", C, false)), "refresh", []);
      } catch ($t9) {
        $.rethrowControl($t9);
        if ($.excIs($t9, "EOracleError")) {
          L0["e"] = $.exc($t9);
          await $.stmt((await $.mcall((await $.wv([$t6, $t7, $t8], "hbError", C, false)), "ShowMessage", [$.add($.add((await $.wcall([$t6, $t7, $t8], "IntToStr", [(await $.mv((await $.wv([$t6, $t7, $t8], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode"))], C)), " "), (await $.mv((await $.wv([$t6, $t7, $t8], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))])));
        }
        else { throw $t9; }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPayments", "ToolButton5Click", async function ToolButton5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t10 = (await $.v(C, "InsDataMod"));
    await $.stmt((await $.wcall([$t10], "SaveData", [], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPayments", "ToolButton4Click", async function ToolButton4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "InsDataMod"));
    const $t12 = (await $.wv([$t11], "ODSPayPlan", C, false));
    await $.stmt((await $.wcall([$t11, $t12], "RedoData", [], C)));
    await $.stmt($.wcall([$t11, $t12], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPayments", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "InsDataMod"));
    await $.stmt((await $.wcall([$t13], "SaveData", [], C)));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmPayments", "ToolButton2Click", async function ToolButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["Odeme aparilsin!", (await $.v(C, "mtConfirmation")), (await $.v(C, "mbYesNoCancel")), 0])), (await $.v(C, "mrYes"))))) {
    {
      const $t14 = (await $.v(C, "InsDataMod"));
      const $t15 = (await $.wv([$t14], "OPCOMMON", C, false));
      const $t16 = (await $.wv([$t14, $t15], "ODSPayPlan", C, false));
      try {
        if ($.truthy($.gt((await $.mv((await $.wcall([$t14, $t15, $t16], "FieldByName", ["STATUS"], C)), "asInteger")), 0))) {
          await $.stmt((await $.wcall([$t14, $t15, $t16], "MessageDlg", ["Emeliyyat artiq aparilib!", (await $.wv([$t14, $t15, $t16], "mtWarning", C, false)), [(await $.wv([$t14, $t15, $t16], "mbOK", C, false))], 0], C)));
          return L0.result;
        }
        if ($.truthy((await $.wcall([$t14, $t15, $t16], "CallBooleanFunction", ["setpayment", [(await $.mv((await $.wcall([$t14, $t15, $t16], "FieldByName", ["ID"], C)), "asInteger"))]], C)))) {
          await $.stmt((await $.wcall([$t14, $t15, $t16], "MessageDlg", ["Emeliyyat yerine yetirildi.", (await $.wv([$t14, $t15, $t16], "mtInformation", C, false)), [(await $.wv([$t14, $t15, $t16], "mbOK", C, false))], 0], C)));
        }
        await $.mcall((await $.wv([$t14, $t15, $t16], "ODSPayPlan", C, false)), "RefreshRecord", []);
      } catch ($t17) {
        $.rethrowControl($t17);
        if ($.excIs($t17, "EOracleError")) {
          L0["e"] = $.exc($t17);
          await $.stmt((await $.mcall((await $.wv([$t14, $t15, $t16], "hbError", C, false)), "ShowMessage", [$.add($.add((await $.wcall([$t14, $t15, $t16], "IntToStr", [(await $.mv((await $.wv([$t14, $t15, $t16], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "ErrorCode"))], C)), " "), (await $.mv((await $.wv([$t14, $t15, $t16], "E", { get: async () => L0["e"], set: async (v) => { L0["e"] = v; }, local: true }, false)), "Message")))])));
        }
        else { throw $t17; }
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
