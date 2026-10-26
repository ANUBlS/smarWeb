// Generated from UnitExchAccount.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitExchAccount", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEhGrouping", "GridsEh", "DBGridEh", "ComCtrls", "ToolWin", "ExtCtrls", "ShellApi", "ImgList", "UnitDateExch", "UnitExAccModify", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormAccount", "TForm", {"panel1": {"name": "Panel1", "type": "TPanel"}, "toolbarbottom": {"name": "ToolBarBottom", "type": "TToolBar"}, "tbh": {"name": "TBH", "type": "TToolButton"}, "toolbtnaddchild": {"name": "ToolBtnAddChild", "type": "TToolButton"}, "tbj": {"name": "TBJ", "type": "TToolButton"}, "toolbtneditchild": {"name": "ToolBtnEditChild", "type": "TToolButton"}, "tbk": {"name": "TBK", "type": "TToolButton"}, "toolbtndeletech": {"name": "ToolBtnDeleteCh", "type": "TToolButton"}, "toolbutton16": {"name": "ToolButton16", "type": "TToolButton"}, "toolbutton17": {"name": "ToolButton17", "type": "TToolButton"}, "toolbutton18": {"name": "ToolButton18", "type": "TToolButton"}, "toolbutton19": {"name": "ToolButton19", "type": "TToolButton"}, "toolbutton20": {"name": "ToolButton20", "type": "TToolButton"}, "tbgb": {"name": "TBGB", "type": "TToolButton"}, "toolbutton22": {"name": "ToolButton22", "type": "TToolButton"}, "griddetail": {"name": "GridDetail", "type": "TDBGridEh"}, "imagelist": {"name": "ImageList", "type": "TImageList"}, "editorinsert": {"name": "EditOrInsert", "type": "byte"}}, {});
  U.init(async () => {
    U.var_("FormAccount", null, "TFormAccount");
  });
  U.method("TFormAccount", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataModExch"));
    await $.mcall((await $.wv([$t1], "ODSExchAcc", C, false)), "Close", []);
    await $.mcall((await $.wv([$t1], "ODSExchAcc", C, false)), "Open", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "TBGBClick", async function TBGBClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy($.eq(L0["usrname"], "SMART"))) {
    if ($.truthy((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])))) {
      await $.stmt((await $.call(C, "ShellExecute", [0, null, (await $.call(C, "PChar", [$.add((await $.call(C, "ExtractFilePath", [(await $.call(C, "paramstr", [0]))])), "ExchangeBalance.ini")])), null, null, (await $.v(C, "SW_SHOWNORMAL"))])));
    }
  } else {
    await $.stmt((await $.mcall((await $.v(C, "Application")), "MessageBox", ["Hüququnuz Yoxdur!", "FormExAccModify", 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "ToolBtnAddChildClick", async function ToolBtnAddChildClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy($.eq(L0["usrname"], "SMART"))) {
    if ($.truthy($.eq((await $.mcall((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "CallBooleanFunction", ["Check_UserRole", [L0["usrname"]]])), true))) {
      if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModExch")), "ODSExchOffice")), "IsEmpty"))))) {
        await $.mset((await $.v(C, "FormAccount")), "EditOrInsert", 1);
        await $.set(C, "FormExAccModify", (await $.mcall((await $.v(C, "TFormExAccModify")), "Create", [Self])));
        await $.mcall((await $.v(C, "FormExAccModify")), "ShowModal", []);
      }
    }
  } else {
    await $.stmt((await $.mcall((await $.v(C, "Application")), "MessageBox", ["Hüququnuz Yoxdur!", "FormExAccModify", 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "ToolBtnDeleteChClick", async function ToolBtnDeleteChClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": '', "v_id": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy($.eq(L0["usrname"], "SMART"))) {
    if ($.truthy($.eq((await $.call(C, "MessageDLG", [(await $.call(C, "Pchar", ["Silmək istəyirsiniz? "])), (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo"))], 0])), (await $.v(C, "mrYes"))))) {
      {
        const $t2 = (await $.v(C, "DataModExch"));
        await $.wset([$t2], "v_id", (await $.mv((await $.mcall((await $.wv([$t2], "ODSExchAcc", C, false)), "FieldByName", ["id"])), "AsInteger")), { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true });
        await $.stmt((await $.mcall((await $.wv([$t2], "OPExchMgr", C, false)), "CallProcedure", ["ex_accounts_delete", [(await $.wv([$t2], "v_id", { get: async () => L0["v_id"], set: async (v) => { L0["v_id"] = v; }, local: true }, false))]])));
        await $.mcall((await $.wv([$t2], "ODSExchAcc", C, false)), "Refresh", []);
      }
    } else {
      return L0.result;
    }
  } else {
    await $.stmt((await $.mcall((await $.v(C, "Application")), "MessageBox", ["Hüququnuz Yoxdur!", "FormExAccModify", 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "ToolBtnEditChildClick", async function ToolBtnEditChildClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "usrname": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["usrname"] = (await $.call(C, "uppercase", [(await $.mv((await $.mv((await $.mv((await $.v(C, "DataModExch")), "OPExchMgr")), "Session")), "LogonUsername"))]));
  if ($.truthy($.eq(L0["usrname"], "SMART"))) {
    {
      const $t3 = (await $.mv((await $.v(C, "DataModExch")), "ODSExchAcc"));
      await $.stmt($.wcall([$t3], "Edit", [], C));
    }
    if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "DataModExch")), "ODSExchOffice")), "IsEmpty"))))) {
      await $.mset((await $.v(C, "FormAccount")), "EditOrInsert", 2);
      await $.set(C, "FormExAccModify", (await $.mcall((await $.v(C, "TFormExAccModify")), "Create", [Self])));
      await $.mcall((await $.v(C, "FormExAccModify")), "ShowModal", []);
    }
  } else {
    await $.stmt((await $.mcall((await $.v(C, "Application")), "MessageBox", ["Hüququnuz Yoxdur!", "FormEditExch", 0])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "ToolButton17Click", async function ToolButton17Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DataModExch"));
    const $t5 = (await $.wv([$t4], "ODSExchOffice", C, false));
    if ($.truthy($.eq((await $.wcall([$t4, $t5], "UpperCase", [(await $.mv((await $.wv([$t4, $t5], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t4, $t5], "ODSExchAcc", C, false)), "Cancel", []);
      await $.mcall((await $.wv([$t4, $t5], "FormAccount", C, false)), "Close", []);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t4, $t5], "Application", C, false)), "MessageBox", ["Hüququnuz Yoxdur!", "FormAddExch", 0])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormAccount", "ToolButton19Click", async function ToolButton19Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t6 = (await $.v(C, "DataModExch"));
    const $t7 = (await $.wv([$t6], "ODSExchOffice", C, false));
    if ($.truthy($.eq((await $.wcall([$t6, $t7], "UpperCase", [(await $.mv((await $.wv([$t6, $t7], "Session", C, false)), "LogonUsername"))], C)), "SMART"))) {
      await $.mcall((await $.wv([$t6, $t7], "ODSExchAcc", C, false)), "Refresh", []);
    } else {
      await $.stmt((await $.mcall((await $.wv([$t6, $t7], "Application", C, false)), "MessageBox", ["Hüququnuz Yoxdur!", "FormAddExch", 0])));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
