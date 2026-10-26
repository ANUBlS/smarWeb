// Generated from InsAgents.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsAgents", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ExtCtrls", "Grids", "DBGrids", "Mask", "DBCtrls", "db", "ImgList", "ActnList", "ComCtrls", "ToolWin", "InsDataModule"]);
  const C = [U];
  U.defClass("TfrmAgents", "TForm", {"gridagents": {"name": "GridAgents", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "nedit": {"name": "NEdit", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "ainsert": {"name": "AInsert", "type": "TAction"}, "aedit": {"name": "AEdit", "type": "TAction"}, "adelete": {"name": "ADelete", "type": "TAction"}, "acommit": {"name": "ACommit", "type": "TAction"}, "arefresh": {"name": "ARefresh", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "aexit": {"name": "AExit", "type": "TAction"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}}, {});
  U.init(async () => {
    U.var_("frmAgents", null, "TfrmAgents");
  });
  U.method("TfrmAgents", "NEditKeyPress", async function NEditKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t1 = L0["sender"];
        await $.stmt((await $.wcall([$t1], "SelectNext", [(await $.wv([$t1], "ActiveControl", C, false)), (await $.wv([$t1], "False", C, false)), (await $.wv([$t1], "True", C, false))], C)));
      }
    } else {
      {
        const $t2 = L0["sender"];
        await $.stmt((await $.wcall([$t2], "SelectNext", [(await $.wv([$t2], "ActiveControl", C, false)), (await $.wv([$t2], "True", C, false)), (await $.wv([$t2], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfrmAgents", "btnCloseClick", async function btnCloseClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "Close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAgents", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "NEdit")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAgents", "AInsertExecute", async function AInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "InsDataMod"));
    const $t4 = (await $.wv([$t3], "ODSAgents", C, false));
    await $.stmt($.wcall([$t3, $t4], "Insert", [], C));
  }
  await $.mcall((await $.v(C, "NEdit")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAgents", "AEditExecute", async function AEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.mv((await $.mv((await $.v(C, "InsDataMod")), "ODSAgents")), "Active"))))) {
    await $.mcall((await $.mv((await $.v(C, "InsDataMod")), "ODSAgents")), "Edit", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAgents", "ADeleteExecute", async function ADeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["İnformasiya silinsin ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.mcall((await $.mv((await $.v(C, "InsDataMod")), "ODSAgents")), "Delete", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAgents", "ARefreshExecute", async function ARefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "InsDataMod")), "ODSAgents")), "Refresh", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAgents", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t5 = (await $.v(C, "InsDataMod"));
    const $t6 = (await $.wv([$t5], "ODSAgents", C, false));
    await $.stmt($.wcall([$t5, $t6], "Close", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAgents", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "InsDataMod"));
    const $t8 = (await $.wv([$t7], "ODSAgents", C, false));
    if ($.truthy($.in_((await $.wv([$t7, $t8], "State", C, false)), [(await $.wv([$t7, $t8], "dsInsert", C, false)), (await $.wv([$t7, $t8], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t7, $t8], "Post", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAgents", "ACommitExecute", async function ACommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "InsDataMod"));
    const $t10 = (await $.wv([$t9], "ODSAgents", C, false));
    if ($.truthy($.in_((await $.wv([$t9, $t10], "State", C, false)), [(await $.wv([$t9, $t10], "dsInsert", C, false)), (await $.wv([$t9, $t10], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t9, $t10], "Post", [], C));
      await $.stmt($.wcall([$t9, $t10], "RefreshRecord", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfrmAgents", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "InsDataMod"));
    const $t12 = (await $.wv([$t11], "ODSAgents", C, false));
    await $.stmt($.wcall([$t11, $t12], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
