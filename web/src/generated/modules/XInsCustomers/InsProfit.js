// Generated from InsProfit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("InsProfit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ComCtrls", "ImgList", "ActnList", "StdCtrls", "Mask", "DBCtrls", "ExtCtrls", "ToolWin", "Grids", "DBGrids", "db", "Buttons", "InsDataModule"]);
  const C = [U];
  U.defClass("TfmBeneficary", "TForm", {"toolbar1": {"name": "ToolBar1", "type": "TToolBar"}, "actionlist1": {"name": "ActionList1", "type": "TActionList"}, "panel1": {"name": "Panel1", "type": "TPanel"}, "label1": {"name": "Label1", "type": "TLabel"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "ainsert": {"name": "AInsert", "type": "TAction"}, "imagelist1": {"name": "ImageList1", "type": "TImageList"}, "aedit": {"name": "AEdit", "type": "TAction"}, "adelete": {"name": "ADelete", "type": "TAction"}, "toolbutton1": {"name": "ToolButton1", "type": "TToolButton"}, "toolbutton2": {"name": "ToolButton2", "type": "TToolButton"}, "toolbutton3": {"name": "ToolButton3", "type": "TToolButton"}, "acommit": {"name": "ACommit", "type": "TAction"}, "toolbutton4": {"name": "ToolButton4", "type": "TToolButton"}, "arefresh": {"name": "ARefresh", "type": "TAction"}, "toolbutton5": {"name": "ToolButton5", "type": "TToolButton"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "toolbutton6": {"name": "ToolButton6", "type": "TToolButton"}}, {});
  U.init(async () => {
    U.var_("fmBeneficary", null, "TfmBeneficary");
  });
  U.method("TfmBeneficary", "AInsertExecute", async function AInsertExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "InsDataMod"));
    const $t2 = (await $.wv([$t1], "ODSBeneficiary", C, false));
    await $.stmt($.wcall([$t1, $t2], "Insert", [], C));
  }
  await $.mcall((await $.v(C, "DBEdit1")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmBeneficary", "AEditExecute", async function AEditExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t3 = (await $.v(C, "InsDataMod"));
    const $t4 = (await $.wv([$t3], "ODSBeneficiary", C, false));
    await $.stmt($.wcall([$t3, $t4], "Edit", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmBeneficary", "ADeleteExecute", async function ADeleteExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.call(C, "MessageDlg", ["İnformasiya silinsin ?", (await $.v(C, "mtConfirmation")), [(await $.v(C, "mbYes")), (await $.v(C, "mbNo")), (await $.v(C, "mbCancel"))], 0])), (await $.v(C, "mrYes"))))) {
    await $.mcall((await $.mv((await $.v(C, "InsDataMod")), "ODSBeneficiary")), "Delete", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmBeneficary", "DBEdit1KeyPress", async function DBEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.ne((await $.call(C, "HiWord", [(await $.call(C, "GetKeyState", [(await $.v(C, "VK_Shift"))]))])), 0))) {
      {
        const $t5 = L0["sender"];
        await $.stmt((await $.wcall([$t5], "SelectNext", [(await $.wv([$t5], "ActiveControl", C, false)), (await $.wv([$t5], "False", C, false)), (await $.wv([$t5], "True", C, false))], C)));
      }
    } else {
      {
        const $t6 = L0["sender"];
        await $.stmt((await $.wcall([$t6], "SelectNext", [(await $.wv([$t6], "ActiveControl", C, false)), (await $.wv([$t6], "True", C, false)), (await $.wv([$t6], "True", C, false))], C)));
      }
    }
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TfmBeneficary", "ACommitExecute", async function ACommitExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t7 = (await $.v(C, "InsDataMod"));
    const $t8 = (await $.wv([$t7], "ODSBeneficiary", C, false));
    if ($.truthy($.in_((await $.wv([$t7, $t8], "State", C, false)), [(await $.wv([$t7, $t8], "dsInsert", C, false)), (await $.wv([$t7, $t8], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t7, $t8], "Post", [], C));
      await $.stmt($.wcall([$t7, $t8], "RefreshRecord", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmBeneficary", "ARefreshExecute", async function ARefreshExecute(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t9 = (await $.v(C, "InsDataMod"));
    const $t10 = (await $.wv([$t9], "ODSBeneficiary", C, false));
    await $.stmt($.wcall([$t9, $t10], "Refresh", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmBeneficary", "BitBtn2Click", async function BitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t11 = (await $.v(C, "InsDataMod"));
    const $t12 = (await $.wv([$t11], "ODSBeneficiary", C, false));
    await $.stmt($.wcall([$t11, $t12], "Close", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmBeneficary", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t13 = (await $.v(C, "InsDataMod"));
    const $t14 = (await $.wv([$t13], "ODSBeneficiary", C, false));
    await $.stmt($.wcall([$t13, $t14], "Open", [], C));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TfmBeneficary", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t15 = (await $.v(C, "InsDataMod"));
    const $t16 = (await $.wv([$t15], "ODSBeneficiary", C, false));
    if ($.truthy($.in_((await $.wv([$t15, $t16], "State", C, false)), [(await $.wv([$t15, $t16], "dsInsert", C, false)), (await $.wv([$t15, $t16], "dsEdit", C, false))]))) {
      await $.stmt($.wcall([$t15, $t16], "Post", [], C));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
